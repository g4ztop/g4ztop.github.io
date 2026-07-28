/* ═══════════════════════════════════════════════════════════════════════════
   Shader Paint — a WebGL2 painting engine.
   Touch strokes inject "paint" into a ping-pong feedback field that is
   processed every frame by a GLSL fragment shader. Each brush mode is a
   different simulation: Ink, Smoke (curl advection), Neon, Bio (Gray-Scott
   reaction-diffusion), and Fire.
   ═════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const canvas = document.getElementById('gl');
  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, preserveDrawingBuffer: true });

  if (!gl) {
    document.getElementById('nogl').style.display = 'flex';
    return;
  }
  const extCBF = gl.getExtension('EXT_color_buffer_float');
  const extLIN = gl.getExtension('OES_texture_float_linear');

  /* ─── Modes ────────────────────────────────────────────────────────────── */
  const MODE = { INK: 0, SMOKE: 1, NEON: 2, BIO: 3, FIRE: 4 };
  // Per-mode config: substeps (sim iterations per frame) and clear value.
  const MODE_CFG = {
    0: { steps: 1, clear: [0, 0, 0, 0] },
    1: { steps: 1, clear: [0, 0, 0, 0] },
    2: { steps: 1, clear: [0, 0, 0, 0] },
    3: { steps: 8, clear: [1, 0, 0, 1] },   // Gray-Scott: A=1, B=0 everywhere
    4: { steps: 1, clear: [0, 0, 0, 0] },
  };

  /* ─── Shaders ──────────────────────────────────────────────────────────── */
  const VERT = `#version 300 es
    in vec2 a_pos;
    out vec2 v_uv;
    void main() {
      v_uv = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }`;

  const MAXP = 8; // max simultaneous pointers

  const SIM_FRAG = `#version 300 es
    precision highp float;
    in  vec2 v_uv;
    out vec4 outColor;

    uniform sampler2D u_src;
    uniform vec2  u_res;      // sim resolution in pixels
    uniform float u_aspect;   // width / height
    uniform float u_time;
    uniform int   u_mode;
    uniform float u_decay;
    uniform float u_diffuse;

    uniform int   u_count;
    uniform vec2  u_cur[${MAXP}];
    uniform vec2  u_prev[${MAXP}];
    uniform vec3  u_col[${MAXP}];
    uniform vec3  u_dat[${MAXP}]; // x=active, y=radius, z=flow

    vec4 texel(vec2 off) { return texture(u_src, v_uv + off / u_res); }

    vec4 laplacian() {
      vec4 sum = vec4(0.0);
      sum += texel(vec2( 1, 0)); sum += texel(vec2(-1, 0));
      sum += texel(vec2( 0, 1)); sum += texel(vec2( 0,-1));
      sum += (texel(vec2( 1, 1)) + texel(vec2(-1, 1)) +
              texel(vec2( 1,-1)) + texel(vec2(-1,-1))) * 0.5;
      sum -= texture(u_src, v_uv) * 6.0;
      return sum;
    }

    // cheap hash + curl noise for the smoke advection field
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash(i), b = hash(i + vec2(1,0));
      float c = hash(i + vec2(0,1)), d = hash(i + vec2(1,1));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    vec2 curl(vec2 p) {
      float e = 0.05;
      float n1 = noise(p + vec2(0.0, e)), n2 = noise(p - vec2(0.0, e));
      float n3 = noise(p + vec2(e, 0.0)), n4 = noise(p - vec2(e, 0.0));
      return vec2(n1 - n2, n4 - n3) / (2.0 * e);
    }

    float segDist(vec2 p, vec2 a, vec2 b) {
      vec2 pa = p - a, ba = b - a;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
      return length(pa - ba * h);
    }

    void main() {
      vec4 s = texture(u_src, v_uv);
      vec4 o = s;

      if (u_mode == 0) {                       // INK — diffuse + slow fade
        o.rgb = s.rgb + laplacian().rgb * u_diffuse;
        o.rgb *= u_decay;
        o.a = 1.0;
      } else if (u_mode == 1) {                // SMOKE — curl advection
        vec2 vel = curl(v_uv * 3.0 + u_time * 0.05) * 2.0;
        vel += curl(v_uv * 7.0 - u_time * 0.03) * 0.6;
        vec2 off = vel / u_res * 6.0;
        o.rgb = texture(u_src, v_uv - off).rgb;
        o.rgb += laplacian().rgb * (u_diffuse * 0.3);
        o.rgb *= u_decay;
        o.a = 1.0;
      } else if (u_mode == 2) {                // NEON — glowing bleed
        o.rgb = s.rgb + laplacian().rgb * (u_diffuse * 1.6);
        o.rgb *= u_decay;
        o.a = 1.0;
      } else if (u_mode == 3) {                // BIO — Gray-Scott
        float A = s.r, B = s.g;
        vec4 lap = laplacian();
        float feed = 0.037, kill = 0.06;
        float reab = A * B * B;
        A += (0.20 * lap.r - reab + feed * (1.0 - A));
        B += (0.10 * lap.g + reab - (kill + feed) * B);
        o = vec4(clamp(A, 0.0, 1.0), clamp(B, 0.0, 1.0), 0.0, 1.0);
      } else {                                 // FIRE — buoyant heat
        vec2 off = vec2(curl(v_uv * 6.0 + u_time * 0.2).x * 1.5, 2.2) / u_res * 3.0;
        float heat = texture(u_src, v_uv - off).r;
        heat += laplacian().r * (u_diffuse * 0.5);
        heat *= u_decay;
        o = vec4(heat, 0.0, 0.0, 1.0);
      }

      // ── brush injection (aspect-corrected round stamps along the stroke) ──
      vec2 P = vec2(v_uv.x * u_aspect, v_uv.y);
      for (int i = 0; i < ${MAXP}; i++) {
        if (i >= u_count) break;
        if (u_dat[i].x < 0.5) continue;
        vec2 A = vec2(u_prev[i].x * u_aspect, u_prev[i].y);
        vec2 C = vec2(u_cur[i].x  * u_aspect, u_cur[i].y);
        float d = segDist(P, A, C);
        float r = u_dat[i].y;
        float amt = smoothstep(r, r * 0.25, d) * u_dat[i].z;
        if (amt <= 0.0) continue;
        if (u_mode == 3) {                     // seed chemical B
          o.g = clamp(o.g + amt, 0.0, 1.0);
        } else if (u_mode == 4) {              // add heat
          o.r = clamp(o.r + amt * 1.5, 0.0, 4.0);
        } else {                               // deposit color
          o.rgb += u_col[i] * amt;
        }
      }
      outColor = o;
    }`;

  const DISP_FRAG = `#version 300 es
    precision highp float;
    in  vec2 v_uv;
    out vec4 fragColor;
    uniform sampler2D u_src;
    uniform vec2  u_res;
    uniform int   u_mode;
    uniform float u_time;

    vec3 bloom() {
      vec3 c = vec3(0.0); float w = 0.0;
      for (int y = -2; y <= 2; y++)
        for (int x = -2; x <= 2; x++) {
          float wt = 1.0 / (1.0 + float(x*x + y*y));
          c += texture(u_src, v_uv + vec2(x, y) * 2.0 / u_res).rgb * wt;
          w += wt;
        }
      return c / w;
    }
    vec3 firePalette(float t) {
      t = clamp(t, 0.0, 1.0);
      vec3 c = vec3(0.0);
      c += vec3(1.0, 0.15, 0.0) * smoothstep(0.0, 0.4, t);
      c += vec3(1.0, 0.6, 0.0)  * smoothstep(0.35, 0.7, t);
      c += vec3(1.0, 1.0, 0.7)  * smoothstep(0.7, 1.0, t);
      return c;
    }
    vec3 bioPalette(float t) {
      return mix(vec3(0.02, 0.05, 0.12),
                 mix(vec3(0.1, 0.7, 0.9), vec3(0.95, 0.9, 0.6), smoothstep(0.2, 0.6, t)),
                 smoothstep(0.05, 0.5, t));
    }

    void main() {
      vec3 col;
      if (u_mode == 2) {                       // NEON
        vec3 base = texture(u_src, v_uv).rgb;
        col = base + bloom() * 1.4;
      } else if (u_mode == 3) {                // BIO
        float B = texture(u_src, v_uv).g;
        col = bioPalette(B * 1.6);
      } else if (u_mode == 4) {                // FIRE
        float h = texture(u_src, v_uv).r;
        col = firePalette(h) + bloom() * 0.4;
      } else if (u_mode == 1) {                // SMOKE
        col = texture(u_src, v_uv).rgb;
      } else {                                 // INK
        col = texture(u_src, v_uv).rgb;
      }
      col = col / (1.0 + col);                 // Reinhard tonemap
      col = pow(col, vec3(0.4545));            // gamma
      fragColor = vec4(col, 1.0);
    }`;

  /* ─── GL helpers ───────────────────────────────────────────────────────── */
  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS))
      throw new Error(gl.getShaderInfoLog(sh) + '\n' + src);
    return sh;
  }
  function program(vs, fs) {
    const p = gl.createProgram();
    gl.attachShader(p, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
    gl.bindAttribLocation(p, 0, 'a_pos');
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS))
      throw new Error(gl.getProgramInfoLog(p));
    return p;
  }

  let simProg, dispProg;
  try {
    simProg = program(VERT, SIM_FRAG);
    dispProg = program(VERT, DISP_FRAG);
  } catch (e) {
    console.error(e);
    document.getElementById('nogl').style.display = 'flex';
    return;
  }

  // fullscreen triangle
  const vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  const uniform = (prog) => {
    const map = {};
    const n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) {
      const info = gl.getActiveUniform(prog, i);
      map[info.name.replace(/\[0\]$/, '')] = gl.getUniformLocation(prog, info.name);
    }
    return map;
  };
  const uSim = uniform(simProg);
  const uDisp = uniform(dispProg);

  /* ─── Ping-pong framebuffers ───────────────────────────────────────────── */
  let simW = 0, simH = 0;
  let fbos = [];

  function makeTarget(w, h) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    const filter = extLIN ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    return { tex, fb };
  }

  function allocTargets(w, h) {
    fbos.forEach(t => { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); });
    fbos = [makeTarget(w, h), makeTarget(w, h)];
    simW = w; simH = h;
    clearField(true);
  }

  /* ─── Clear (fills field with the mode's base value) ───────────────────── */
  function clearField(silent) {
    const c = MODE_CFG[state.mode].clear;
    for (const t of fbos) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, t.fb);
      gl.viewport(0, 0, simW, simH);
      gl.clearColor(c[0], c[1], c[2], c[3]);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    if (!silent) flash('Cleared');
  }

  /* ─── State ────────────────────────────────────────────────────────────── */
  const state = {
    mode: MODE.INK,
    hue: 0.62,       // 0..1
    size: 0.03,      // brush radius in aspect-space
    flow: 1.0,
    dpr: Math.min(window.devicePixelRatio || 1, 2),
  };

  // Active pointers keyed by pointerId
  const pointers = new Map();

  function hslToRgb(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h * 12) % 12;
      return l - a * Math.max(-1, Math.min(Math.min(k - 3, 9 - k), 1));
    };
    return [f(0), f(8), f(4)];
  }

  /* ─── Resize ───────────────────────────────────────────────────────────── */
  function resize() {
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(window.innerWidth * state.dpr);
    const h = Math.round(window.innerHeight * state.dpr);
    canvas.width = w; canvas.height = h;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    // cap sim resolution for phone performance (long side <= 1280)
    const cap = 1280;
    let sw = w, sh = h;
    const long = Math.max(w, h);
    if (long > cap) { const k = cap / long; sw = Math.round(w * k); sh = Math.round(h * k); }
    allocTargets(sw, sh);
  }
  window.addEventListener('resize', resize);

  /* ─── Pointer handling ─────────────────────────────────────────────────── */
  function toUV(e) {
    const r = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) / r.width,
      y: 1.0 - (e.clientY - r.top) / r.height,   // flip Y for GL
    };
  }
  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    const p = toUV(e);
    const [r, g, b] = hslToRgb(state.hue, 0.9, 0.55);
    pointers.set(e.pointerId, { cur: p, prev: p, col: [r, g, b] });
  }, { passive: false });
  canvas.addEventListener('pointermove', (e) => {
    const rec = pointers.get(e.pointerId);
    if (!rec) return;
    e.preventDefault();
    // coalesced events => smoother fast strokes
    const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    for (const ev of evs) { rec.prev = rec.cur; rec.cur = toUV(ev); }
  }, { passive: false });
  function endPointer(e) { pointers.delete(e.pointerId); }
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);
  canvas.addEventListener('pointerleave', endPointer);

  /* ─── Uniform arrays for the sim pass ──────────────────────────────────── */
  const arrCur = new Float32Array(MAXP * 2);
  const arrPrev = new Float32Array(MAXP * 2);
  const arrCol = new Float32Array(MAXP * 3);
  const arrDat = new Float32Array(MAXP * 3);

  function packPointers() {
    let i = 0;
    for (const [, p] of pointers) {
      if (i >= MAXP) break;
      arrCur[i * 2] = p.cur.x;  arrCur[i * 2 + 1] = p.cur.y;
      arrPrev[i * 2] = p.prev.x; arrPrev[i * 2 + 1] = p.prev.y;
      arrCol[i * 3] = p.col[0]; arrCol[i * 3 + 1] = p.col[1]; arrCol[i * 3 + 2] = p.col[2];
      const flow = (state.mode === MODE.BIO) ? 0.9 : state.flow;
      arrDat[i * 3] = 1; arrDat[i * 3 + 1] = state.size; arrDat[i * 3 + 2] = flow;
      // advance prev toward cur so a held (non-moving) pointer keeps depositing
      p.prev = p.cur;
      i++;
    }
    return i;
  }

  /* ─── Render loop ──────────────────────────────────────────────────────── */
  let t0 = performance.now();
  function frame(now) {
    const time = (now - t0) / 1000;
    const aspect = simW / simH;
    const count = packPointers();
    const cfg = MODE_CFG[state.mode];

    gl.useProgram(simProg);
    gl.uniform2f(uSim.u_res, simW, simH);
    gl.uniform1f(uSim.u_aspect, aspect);
    gl.uniform1f(uSim.u_time, time);
    gl.uniform1i(uSim.u_mode, state.mode);
    gl.uniform1f(uSim.u_decay, decayFor(state.mode));
    gl.uniform1f(uSim.u_diffuse, diffuseFor(state.mode));
    gl.uniform1i(uSim.u_count, count);
    gl.uniform2fv(uSim.u_cur, arrCur);
    gl.uniform2fv(uSim.u_prev, arrPrev);
    gl.uniform3fv(uSim.u_col, arrCol);
    gl.uniform3fv(uSim.u_dat, arrDat);

    gl.viewport(0, 0, simW, simH);
    for (let s = 0; s < cfg.steps; s++) {
      // inject only on the first substep; remaining substeps just simulate
      gl.uniform1i(uSim.u_count, s === 0 ? count : 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, fbos[0].tex);
      gl.uniform1i(uSim.u_src, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbos[1].fb);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      fbos.reverse();
    }

    // display pass
    gl.useProgram(dispProg);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, fbos[0].tex);
    gl.uniform1i(uDisp.u_src, 0);
    gl.uniform2f(uDisp.u_res, simW, simH);
    gl.uniform1i(uDisp.u_mode, state.mode);
    gl.uniform1f(uDisp.u_time, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    requestAnimationFrame(frame);
  }

  function decayFor(m) {
    return m === MODE.INK ? 0.997
      : m === MODE.SMOKE ? 0.992
      : m === MODE.NEON ? 0.985
      : m === MODE.FIRE ? 0.955
      : 1.0; // BIO has no linear decay
  }
  function diffuseFor(m) {
    return m === MODE.INK ? 0.08
      : m === MODE.NEON ? 0.10
      : m === MODE.SMOKE ? 0.05
      : m === MODE.FIRE ? 0.06
      : 0.0;
  }

  /* ─── UI wiring ────────────────────────────────────────────────────────── */
  const modeButtons = document.querySelectorAll('[data-mode]');
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const prev = state.mode;
      state.mode = MODE[btn.dataset.mode];
      // BIO/others use different field semantics — reset when leaving/entering it
      if (prev === MODE.BIO || state.mode === MODE.BIO) clearField(true);
      flash(btn.textContent.trim());
    });
  });

  const hueEl = document.getElementById('hue');
  const sizeEl = document.getElementById('size');
  const flowEl = document.getElementById('flow');
  hueEl.addEventListener('input', () => {
    state.hue = hueEl.value / 360;
    hueEl.style.setProperty('--c', `hsl(${hueEl.value},90%,55%)`);
  });
  sizeEl.addEventListener('input', () => { state.size = 0.008 + (sizeEl.value / 100) * 0.09; });
  flowEl.addEventListener('input', () => { state.flow = 0.2 + (flowEl.value / 100) * 1.6; });

  document.getElementById('clear').addEventListener('click', () => clearField(false));

  document.getElementById('save').addEventListener('click', () => {
    // draw one fresh frame to guarantee the backbuffer is current, then export
    requestAnimationFrame(() => {
      canvas.toBlob((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'shaderpaint-' + Date.now() + '.png';
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      }, 'image/png');
    });
  });

  const ui = document.getElementById('ui');
  document.getElementById('hideBtn').addEventListener('click', () => {
    document.body.classList.toggle('immersive');
  });

  // brief on-screen toast
  let flashT;
  const toast = document.getElementById('toast');
  function flash(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(flashT);
    flashT = setTimeout(() => toast.classList.remove('show'), 900);
  }

  /* ─── Boot ─────────────────────────────────────────────────────────────── */
  hueEl.value = state.hue * 360;
  hueEl.style.setProperty('--c', `hsl(${hueEl.value},90%,55%)`);
  resize();
  requestAnimationFrame(frame);

  // register service worker (offline / installable)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
})();
