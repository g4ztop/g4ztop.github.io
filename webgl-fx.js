(function () {
  'use strict';

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  /* ─── Tunable settings (shared across all cards) ───────────────────────── */

  const settings = {
    bloomIntensity:   0.4,   // bloom strength on hover
    rimIntensity:     2,     // rim strength on hover
    rimWidth:         0.17,  // rim falloff as fraction of short side
    waveSpeed:        0.4,   // wave animation speed multiplier
    waveStrength:     1,     // wave intensity modulation amount
    colorSaturation:  3,     // edge color saturation boost
    colorWaveAmount:  0.2,   // how much the color sample drifts
    transitionSpeed:  0.08,  // lerp speed for fade in/out
  };

  /* ─── Shaders ──────────────────────────────────────────────────────────── */

  const VS = `
    attribute vec2 a_pos;
    varying   vec2 v_uv;
    void main() {
      v_uv        = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;

  const FS = `
    precision mediump float;

    uniform sampler2D u_tex;
    uniform vec2      u_res;
    uniform float     u_bloom;
    uniform float     u_rim;
    uniform float     u_time;
    uniform float     u_rimWidth;
    uniform float     u_waveSpeed;
    uniform float     u_waveStrength;
    uniform float     u_colorSat;
    uniform float     u_colorWave;

    varying vec2 v_uv;

    vec3 blurBright(vec2 uv, vec2 ts) {
      vec3 c = vec3(0.0);
      c += texture2D(u_tex, uv                       ).rgb * 4.0;
      c += texture2D(u_tex, uv + vec2( ts.x,  0.0)  ).rgb * 2.0;
      c += texture2D(u_tex, uv + vec2(-ts.x,  0.0)  ).rgb * 2.0;
      c += texture2D(u_tex, uv + vec2( 0.0,   ts.y) ).rgb * 2.0;
      c += texture2D(u_tex, uv + vec2( 0.0,  -ts.y) ).rgb * 2.0;
      c += texture2D(u_tex, uv + vec2( ts.x,  ts.y) ).rgb;
      c += texture2D(u_tex, uv + vec2(-ts.x,  ts.y) ).rgb;
      c += texture2D(u_tex, uv + vec2( ts.x, -ts.y) ).rgb;
      c += texture2D(u_tex, uv + vec2(-ts.x, -ts.y) ).rgb;
      c /= 16.0;
      float lum = dot(c, vec3(0.299, 0.587, 0.114));
      return c * max(lum - 0.45, 0.0) * 2.5;
    }

    // Blurred sample at a specific UV point
    vec3 sampleBlurred(vec2 p, vec2 ts) {
      vec3 c = vec3(0.0);
      c += texture2D(u_tex, p).rgb * 4.0;
      c += texture2D(u_tex, p + ts * vec2( 4.0, 0.0)).rgb;
      c += texture2D(u_tex, p + ts * vec2(-4.0, 0.0)).rgb;
      c += texture2D(u_tex, p + ts * vec2(0.0,  4.0)).rgb;
      c += texture2D(u_tex, p + ts * vec2(0.0, -4.0)).rgb;
      c += texture2D(u_tex, p + ts * vec2( 3.0, 3.0)).rgb;
      c += texture2D(u_tex, p + ts * vec2(-3.0, 3.0)).rgb;
      c += texture2D(u_tex, p + ts * vec2( 3.0,-3.0)).rgb;
      c += texture2D(u_tex, p + ts * vec2(-3.0,-3.0)).rgb;
      c /= 12.0;
      // Boost saturation
      float lum = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(lum), c, u_colorSat);
      return c;
    }

    // Sample 4 colors from edge centers, then blend based on angle + wave
    vec3 edgeColor4(vec2 ts, float angle) {
      // Sample from the center of each edge (flipped Y for texture coords)
      vec3 cTop    = sampleBlurred(vec2(0.5, 0.05), ts);  // top edge
      vec3 cRight  = sampleBlurred(vec2(0.95, 0.5), ts);  // right edge
      vec3 cBottom = sampleBlurred(vec2(0.5, 0.95), ts);  // bottom edge
      vec3 cLeft   = sampleBlurred(vec2(0.05, 0.5), ts);  // left edge

      // Wave-shifted angle for flowing color motion
      float a = angle + u_time * u_waveSpeed * 0.4
              + sin(u_time * u_waveSpeed * 0.7) * u_colorWave * 10.0;

      // Normalize angle to 0..1 (atan returns -PI..PI)
      float t = fract(a / 6.2831853);

      // Smooth cosine weights — each color centered at 0.0, 0.25, 0.5, 0.75
      // Using raised cosine: max(0, cos(2*PI*(t - center))) gives smooth overlap
      float PI2 = 6.2831853;
      float w0 = max(0.0, cos(PI2 * (t - 0.0 ))) + max(0.0, cos(PI2 * (t - 1.0)));  // right (wraps)
      float w1 = max(0.0, cos(PI2 * (t - 0.25)));   // top
      float w2 = max(0.0, cos(PI2 * (t - 0.5 )));   // left
      float w3 = max(0.0, cos(PI2 * (t - 0.75)));   // bottom

      float wSum = w0 + w1 + w2 + w3 + 0.001;
      vec3 c = (cRight * w0 + cTop * w1 + cLeft * w2 + cBottom * w3) / wSum;

      return c;
    }

    float sdRoundedRect(vec2 p, vec2 halfSize, float r) {
      vec2 d = abs(p) - halfSize + r;
      return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
    }

    void main() {
      vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);

      vec2 ts     = 6.0 / u_res;
      vec3 bloom1 = blurBright(uv, ts);
      vec3 bloom2 = blurBright(uv, ts * 2.5);
      vec3 bloom  = (bloom1 * 0.7 + bloom2 * 0.3) * u_bloom;

      vec2  px        = v_uv * u_res;
      float shortSide = min(u_res.x, u_res.y);
      float cr        = 8.0;
      float rw        = shortSide * u_rimWidth;
      float sdf       = sdRoundedRect(px - u_res * 0.5, u_res * 0.5, cr);
      float distFromEdge = -sdf;
      float rim       = smoothstep(rw, 0.0, distFromEdge)
                      * step(0.0, distFromEdge);

      float angle     = atan(v_uv.y - 0.5, v_uv.x - 0.5);
      float wave      = (1.0 - u_waveStrength)
                      + u_waveStrength * sin(angle * 2.0 + u_time * 1.5 * u_waveSpeed)
                                       * cos(angle * 3.0 - u_time * 0.9 * u_waveSpeed);
      rim             = rim * rim * wave;

      vec3  rimTint   = edgeColor4(ts, angle);
      vec3  rimCol    = rimTint * rim * u_rim;

      gl_FragColor = vec4(bloom + rimCol, 1.0);
    }
  `;

  /* ─── WebGL helpers ─────────────────────────────────────────────────────── */

  function makeShader(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      console.warn('Shader error:', gl.getShaderInfoLog(s));
    return s;
  }

  function makeProgram(gl) {
    const p = gl.createProgram();
    gl.attachShader(p, makeShader(gl, gl.VERTEX_SHADER,   VS));
    gl.attachShader(p, makeShader(gl, gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(p);
    return p;
  }

  /* ─── Per-card setup ────────────────────────────────────────────────────── */

  function setupCard(cardImgEl) {
    const img = cardImgEl.querySelector('img');
    if (!img) return;

    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
      position:      'absolute',
      inset:         '0',
      width:         '100%',
      height:        '100%',
      pointerEvents: 'none',
      zIndex:        '2',
      mixBlendMode:  'screen',
    });
    cardImgEl.appendChild(canvas);

    const gl = canvas.getContext('webgl');
    if (!gl) { canvas.remove(); return; }

    const prog    = makeProgram(gl);
    const posLoc  = gl.getAttribLocation(prog,  'a_pos');
    const texLoc  = gl.getUniformLocation(prog,  'u_tex');
    const resLoc  = gl.getUniformLocation(prog,  'u_res');
    const bloomLoc= gl.getUniformLocation(prog,  'u_bloom');
    const rimLoc  = gl.getUniformLocation(prog,  'u_rim');
    const timeLoc = gl.getUniformLocation(prog,  'u_time');
    const rimWidthLoc   = gl.getUniformLocation(prog, 'u_rimWidth');
    const waveSpeedLoc  = gl.getUniformLocation(prog, 'u_waveSpeed');
    const waveStrLoc    = gl.getUniformLocation(prog, 'u_waveStrength');
    const colorSatLoc   = gl.getUniformLocation(prog, 'u_colorSat');
    const colorWaveLoc  = gl.getUniformLocation(prog, 'u_colorWave');

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    let bloomVal = 0, rimVal = 0;
    let tBloom   = 0, tRim   = 0;
    let timeVal  = 0;
    let hovered  = false;
    let rafId    = null;
    let ready    = false;

    function render() {
      const w = cardImgEl.offsetWidth;
      const h = cardImgEl.offsetHeight;
      if (!w || !h) return;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width  = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1i(texLoc,   0);
      gl.uniform2f(resLoc,   w, h);
      gl.uniform1f(bloomLoc, bloomVal);
      gl.uniform1f(rimLoc,   rimVal);
      gl.uniform1f(timeLoc,  timeVal);
      gl.uniform1f(rimWidthLoc,  settings.rimWidth);
      gl.uniform1f(waveSpeedLoc, settings.waveSpeed);
      gl.uniform1f(waveStrLoc,   settings.waveStrength);
      gl.uniform1f(colorSatLoc,  settings.colorSaturation);
      gl.uniform1f(colorWaveLoc, settings.colorWaveAmount);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    function tick() {
      const spd = settings.transitionSpeed;
      bloomVal += (tBloom - bloomVal) * spd;
      rimVal   += (tRim   - rimVal)   * spd;
      if (rimVal > 0.001) timeVal += 0.016;
      if (ready) render();
      const settled = Math.abs(bloomVal - tBloom) < 0.001 &&
                      Math.abs(rimVal   - tRim)   < 0.001;
      const done = settled && !hovered;
      rafId = done ? null : requestAnimationFrame(tick);
    }

    function kick() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function loadTex() {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        ready = true;
        render();
      } catch (e) {
        console.warn('webgl-fx: could not load texture for', img.src, e);
      }
    }

    if (img.complete && img.naturalWidth > 0) {
      loadTex();
    } else {
      img.addEventListener('load', loadTex);
    }

    const card = cardImgEl.closest('.card');

    function activate() {
      hovered = true;
      tBloom = settings.bloomIntensity;
      tRim   = settings.rimIntensity;
      kick();
    }
    function deactivate() {
      hovered = false;
      tBloom  = 0;
      tRim    = 0;
      kick();
    }

    // Desktop: hover
    card.addEventListener('mouseenter', activate);
    card.addEventListener('mouseleave', deactivate);

    // Mobile only: activate when card scrolls into center of viewport
    if (isTouchDevice) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) activate();
          else                 deactivate();
        });
      }, {
        rootMargin: '-35% 0px -35% 0px',
        threshold: 0
      });
      observer.observe(cardImgEl);
    }

    new ResizeObserver(() => { if (ready) render(); }).observe(cardImgEl);
  }

  /* ─── Debug Control Panel ──────────────────────────────────────────────── */

  function buildPanel() {
    const panel = document.createElement('div');
    panel.id = 'webgl-fx-panel';
    panel.innerHTML = `
      <style>
        #webgl-fx-panel {
          position: fixed;
          top: 16px;
          right: 16px;
          z-index: 99999;
          background: rgba(18, 18, 18, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid #333;
          border-radius: 12px;
          padding: 16px 18px;
          width: 280px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 12px;
          color: #ccc;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          user-select: none;
        }
        #webgl-fx-panel.collapsed .fx-body { display: none; }
        #webgl-fx-panel .fx-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          margin-bottom: 12px;
        }
        #webgl-fx-panel.collapsed .fx-header { margin-bottom: 0; }
        #webgl-fx-panel .fx-header h3 {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.03em;
        }
        #webgl-fx-panel .fx-toggle {
          background: none;
          border: none;
          color: #666;
          font-size: 16px;
          cursor: pointer;
          padding: 0 2px;
          line-height: 1;
        }
        #webgl-fx-panel .fx-row {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          gap: 8px;
        }
        #webgl-fx-panel .fx-row:last-child { margin-bottom: 0; }
        #webgl-fx-panel .fx-label {
          flex: 0 0 100px;
          color: #999;
          font-size: 11px;
        }
        #webgl-fx-panel input[type="range"] {
          flex: 1;
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: #333;
          border-radius: 2px;
          outline: none;
        }
        #webgl-fx-panel input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0,0,0,0.4);
        }
        #webgl-fx-panel .fx-val {
          flex: 0 0 36px;
          text-align: right;
          font-variant-numeric: tabular-nums;
          color: #fff;
          font-size: 11px;
        }
        #webgl-fx-panel .fx-sep {
          height: 1px;
          background: #2a2a2a;
          margin: 12px 0;
        }
        #webgl-fx-panel .fx-actions {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }
        #webgl-fx-panel .fx-btn {
          flex: 1;
          padding: 6px 0;
          border: 1px solid #333;
          border-radius: 6px;
          background: transparent;
          color: #999;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.15s;
        }
        #webgl-fx-panel .fx-btn:hover {
          border-color: #555;
          color: #fff;
        }
      </style>
      <div class="fx-header">
        <h3>Shader Controls</h3>
        <button class="fx-toggle">-</button>
      </div>
      <div class="fx-body"></div>
    `;

    const body   = panel.querySelector('.fx-body');
    const toggle = panel.querySelector('.fx-toggle');
    const header = panel.querySelector('.fx-header');

    header.addEventListener('click', () => {
      panel.classList.toggle('collapsed');
      toggle.textContent = panel.classList.contains('collapsed') ? '+' : '-';
    });

    const sliders = [
      { key: 'bloomIntensity',  label: 'Bloom',           min: 0, max: 3,   step: 0.05 },
      { key: 'rimIntensity',    label: 'Rim Intensity',    min: 0, max: 2,   step: 0.05 },
      { key: 'rimWidth',        label: 'Rim Width',        min: 0.02, max: 0.4, step: 0.01 },
      { sep: true },
      { key: 'waveSpeed',       label: 'Wave Speed',       min: 0, max: 4,   step: 0.1 },
      { key: 'waveStrength',    label: 'Wave Strength',    min: 0, max: 1,   step: 0.05 },
      { sep: true },
      { key: 'colorSaturation', label: 'Color Saturation', min: 0, max: 3,   step: 0.1 },
      { key: 'colorWaveAmount', label: 'Color Drift',      min: 0, max: 0.2, step: 0.005 },
      { sep: true },
      { key: 'transitionSpeed', label: 'Fade Speed',       min: 0.01, max: 0.3, step: 0.01 },
    ];

    const defaults = { ...settings };

    sliders.forEach(s => {
      if (s.sep) {
        const sep = document.createElement('div');
        sep.className = 'fx-sep';
        body.appendChild(sep);
        return;
      }
      const row = document.createElement('div');
      row.className = 'fx-row';

      const label = document.createElement('span');
      label.className = 'fx-label';
      label.textContent = s.label;

      const input = document.createElement('input');
      input.type  = 'range';
      input.min   = s.min;
      input.max   = s.max;
      input.step  = s.step;
      input.value = settings[s.key];

      const val = document.createElement('span');
      val.className = 'fx-val';
      val.textContent = Number(settings[s.key]).toFixed(2);

      input.addEventListener('input', () => {
        settings[s.key] = parseFloat(input.value);
        val.textContent = Number(input.value).toFixed(2);
      });

      s._input = input;
      s._val   = val;

      row.append(label, input, val);
      body.appendChild(row);
    });

    // Action buttons
    const actions = document.createElement('div');
    actions.className = 'fx-actions';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'fx-btn';
    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener('click', () => {
      Object.assign(settings, defaults);
      sliders.forEach(s => {
        if (s.sep) return;
        s._input.value = settings[s.key];
        s._val.textContent = Number(settings[s.key]).toFixed(2);
      });
    });

    const copyBtn = document.createElement('button');
    copyBtn.className = 'fx-btn';
    copyBtn.textContent = 'Copy Values';
    copyBtn.addEventListener('click', () => {
      const out = Object.entries(settings)
        .map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`)
        .join('\n');
      const text = `{\n${out}\n}`;

      function onSuccess() {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy Values'; }, 1200);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
          fallbackCopy(text);
        });
      } else {
        fallbackCopy(text);
      }

      function fallbackCopy(str) {
        const ta = document.createElement('textarea');
        ta.value = str;
        ta.style.cssText = 'position:fixed;left:-9999px';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (ok) {
          onSuccess();
        } else {
          // Last resort: log to console
          console.log('Shader settings:\n' + str);
          copyBtn.textContent = 'Logged to console';
          setTimeout(() => { copyBtn.textContent = 'Copy Values'; }, 2000);
        }
      }
    });

    actions.append(resetBtn, copyBtn);
    body.appendChild(actions);

    document.body.appendChild(panel);
  }

  /* ─── Init ──────────────────────────────────────────────────────────────── */

  function init() {
    document.querySelectorAll('.card-img').forEach(setupCard);
    buildPanel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
