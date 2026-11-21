import * as THREE from './vendor/three.module.js';
function transitionShader(shader,atlas,transition){
 atlas.patch(shader);shader.uniforms.fieldTransition=transition;
 shader.vertexShader='attribute float instanceFadeSign;varying float fieldFade;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nfieldFade=instanceFadeSign;');
 shader.fragmentShader='varying float fieldFade;uniform float fieldTransition;\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('void main() {',`void main() {
  float transitionNoise=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))));
  if(fieldFade>.5&&transitionNoise>fieldTransition)discard;
  if(fieldFade<-.5&&transitionNoise<=fieldTransition)discard;
 `);
}
export function flowerMaterials(maps,tier,atlas,{transition,ldr=false,tuning=null}={}){
 return maps.map(map=>{
  const Material=tier.physical?THREE.MeshPhysicalMaterial:THREE.MeshStandardMaterial;
  const material=new Material({map,color:0xffffff,roughness:.30,metalness:0,side:THREE.DoubleSide,...(tier.physical?{clearcoat:.65,clearcoatRoughness:.20}:{})});
  material.customProgramCacheKey=()=>`flower-v3:${tier.physical}:${atlas.encoded}:${ldr}`;
  material.onBeforeCompile=shader=>{
   transitionShader(shader,atlas,transition);
   const uniforms=material.userData.tuningUniforms={petalRoughness:{value:tuning?.roughnessMin??.26},stemRoughness:{value:tuning?.roughnessMax??.55}};Object.assign(shader.uniforms,uniforms);
   shader.fragmentShader='uniform float petalRoughness,stemRoughness;varying float botanicalHeight;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
    float petalMask=smoothstep(1.18,1.55,botanicalHeight);
    float blushMask=smoothstep(.015,.16,diffuseColor.r-diffuseColor.g)*petalMask;
    float leafMask=smoothstep(.01,.14,diffuseColor.g-diffuseColor.r)*petalMask;
    diffuseColor.rgb=mix(diffuseColor.rgb,pow(max(diffuseColor.rgb,vec3(.00001)),vec3(.94)),petalMask*.45);
    diffuseColor.rgb*=mix(vec3(1),vec3(1.04,.98,1.13),blushMask);
    diffuseColor.rgb*=mix(vec3(1),vec3(1.,1.06,.98),leafMask);
   `).replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
    float waxLight=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));roughnessFactor=mix(stemRoughness,petalRoughness,smoothstep(.035,.45,waxLight));
   `);
   if(ldr){
    // Preserve the approved ACES highlight rolloff on devices unable to render
    // floating-point color. The compositor then applies only output encoding.
    shader.uniforms.toneMappingExposure={value:1};material.userData.exposure=shader.uniforms.toneMappingExposure;
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\n'+THREE.ShaderChunk.tonemapping_pars_fragment).replace('#include <dithering_fragment>','#include <dithering_fragment>\ngl_FragColor.rgb=ACESFilmicToneMapping(gl_FragColor.rgb);');
   }
  };
  return material;
 });
}
export function depthMaterial(atlas,transition){
 const material=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide});
 material.onBeforeCompile=shader=>transitionShader(shader,atlas,transition);material.customProgramCacheKey=()=>`flower-depth-v3:${atlas.encoded}`;return material;
}
