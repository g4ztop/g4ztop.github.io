uniform vec3 topColor;
uniform vec3 bottomColor;
uniform float offset;
uniform float exponent;
uniform float time;
uniform vec2 resolution;
uniform float starDensity;
uniform float starBrightness;
uniform float starSize;
uniform float flickerSpeed;

varying vec2 vUv;
varying vec3 vPosition;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

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

float star(vec2 uv, float flicker) {
    float d = length(uv);
    float m = starSize / d;
    
    m *= smoothstep(0.5, 0.2, d);
    
    return m * flicker * starBrightness;
}

void main() {
    float h = normalize(vPosition).y;
    vec3 gradient = mix(bottomColor, topColor, max(pow(max(h + offset, 0.0), exponent), 0.0));

    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= resolution.x/resolution.y;
    
    float starLayer1 = 0.0;
    float starLayer2 = 0.0;
    float starLayer3 = 0.0;

    for(int i = 0; i < 5; i++) {
        vec2 offs = vec2(float(i) * 1.23, float(i) * 2.34);
        vec2 pos = uv * (starDensity + float(i));
        
        float flicker = noise(pos + vec2(time * flickerSpeed + float(i)));
        flicker = pow(flicker, 3.0);
        
        vec2 layer1Movement = vec2(
            sin(time * 0.3 + float(i)) * 0.1,
            cos(time * 0.2 + float(i)) * 0.1
        );
        
        vec2 layer2Movement = vec2(
            sin(time * 0.2 - float(i)) * 0.15,
            cos(time * 0.4 + float(i)) * 0.15
        );
        
        vec2 layer3Movement = vec2(
            sin(time * 0.4 + float(i)) * 0.2,
            cos(time * 0.3 - float(i)) * 0.2
        );
        starLayer1 += star(fract(pos + offs + layer1Movement) - 0.5, flicker * 0.8);
        starLayer2 += star(fract(pos * 1.5 + offs + layer2Movement) - 0.5, flicker * 0.9);
        starLayer3 += star(fract(pos * 2.0 + offs + layer3Movement) - 0.5, flicker);
    }

    vec3 starColor = vec3(starLayer1 + starLayer2 + starLayer3) * vec3(0.9, 0.9, 1.0);
    
    gl_FragColor = vec4(gradient + starColor, 1.0);
}