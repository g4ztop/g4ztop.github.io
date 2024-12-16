uniform vec3 topColor;
uniform vec3 bottomColor;
uniform float offset;
uniform float exponent;
uniform float time;
uniform vec2 resolution;

varying vec2 vUv;
varying vec3 vPosition;

// Random function
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// Noise function
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

// Star function
float star(vec2 uv, float flicker) {
    float d = length(uv);
    float m = 0.05 / d;
    
    m *= smoothstep(0.5, 0.2, d);
    
    return m * flicker;
}

void main() {
    float h = normalize(vPosition).y;
    vec3 gradient = mix(bottomColor, topColor, max(pow(max(h + offset, 0.0), exponent), 0.0));

    // Create star field
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= resolution.x/resolution.y;
    
    float starLayer1 = 0.0;
    float starLayer2 = 0.0;
    float starLayer3 = 0.0;

    // Multiple layers of stars
    for(int i = 0; i < 5; i++) {
        vec2 offs = vec2(float(i) * 1.23, float(i) * 2.34);
        vec2 pos = uv * (2.0 + float(i));
        
        float flicker = noise(pos + vec2(time * 0.5 + float(i)));
        flicker = pow(flicker, 3.0);
        
        starLayer1 += star(fract(pos + offs) - 0.5, flicker * 0.8);
        starLayer2 += star(fract(pos * 1.5 + offs) - 0.5, flicker * 0.9);
        starLayer3 += star(fract(pos * 2.0 + offs) - 0.5, flicker);
    }

    vec3 starColor = vec3(starLayer1 + starLayer2 + starLayer3) * vec3(0.9, 0.9, 1.0);
    
    // Combine gradient with stars
    gl_FragColor = vec4(gradient + starColor, 1.0);
}