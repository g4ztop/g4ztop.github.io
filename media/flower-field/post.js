import * as THREE from './vendor/three.module.js';
import {focusSamples} from './lens-kernel.js';
const vertex='varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}';
const lens=`
 uniform sampler2D image,depth;uniform vec2 resolution;uniform float near,far,focusShift,focusStutter,cocScale,focusNear,focusFar,nearBlur,farBlur,maxBlur,focusOffset,focusEnabled,vignette;varying vec2 vUv;
 float distanceAt(vec2 uv){float d=texture2D(depth,uv).r;return near*far/(far-d*(far-near));}
 float circleAt(float d){if(focusEnabled<.5)return 0.;float shift=focusShift+focusOffset;float base=min((max(focusNear+shift-d,0.)*nearBlur+max(d-focusFar-shift*1.5,0.)*farBlur)/max(d,.1),maxBlur)*cocScale;
  float pulse=focusStutter*min(resolution.x,resolution.y)/720.;return d>75.?1.4*cocScale:sqrt(base*base+pulse*pulse);}
`;
const output=`col*=1.-vignette*pow(length((vUv-.5)*vec2(1.,.6)),2.);gl_FragColor=vec4(col,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
`;
export function floatingPointSupport(renderer){
 if(!renderer.extensions.has('EXT_color_buffer_float'))return false;
 const gl=renderer.getContext(),test=new THREE.WebGLRenderTarget(4,4,{type:THREE.HalfFloatType,depthBuffer:false});let supported=false;
 try{renderer.setRenderTarget(test);supported=gl.checkFramebufferStatus(gl.FRAMEBUFFER)===gl.FRAMEBUFFER_COMPLETE;}finally{renderer.setRenderTarget(null);test.dispose();}
 return supported;
}
function samplesFor(renderer,type,requested){
 if(!requested)return 0;const gl=renderer.getContext();
 const color=gl.getInternalformatParameter(gl.RENDERBUFFER,type===THREE.HalfFloatType?gl.RGBA16F:gl.RGBA8,gl.SAMPLES)||[];
 const depth=gl.getInternalformatParameter(gl.RENDERBUFFER,gl.DEPTH_COMPONENT24,gl.SAMPLES)||[];
 return [...color].filter(n=>n<=requested&&[...depth].includes(n)).sort((a,b)=>b-a)[0]||0;
}
export class LensPipeline {
 constructor(renderer,camera,{ldr=false,tier,referenceLens=false}){
  this.renderer=renderer;this.camera=camera;this.ldr=ldr;this.type=ldr?THREE.UnsignedByteType:THREE.HalfFloatType;
  this.beauty=new THREE.WebGLRenderTarget(1,1,{type:this.type,samples:samplesFor(renderer,this.type,tier.msaa),depthBuffer:true});
  this.beauty.depthTexture=new THREE.DepthTexture(1,1,THREE.UnsignedIntType);
  this.blurred=new THREE.WebGLRenderTarget(1,1,{type:this.type,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,depthBuffer:false});
  this.uniforms={image:{value:this.beauty.texture},depth:{value:this.beauty.depthTexture},resolution:{value:new THREE.Vector2(1,1)},near:{value:camera.near},far:{value:camera.far},focusShift:{value:0},focusStutter:{value:0},cocScale:{value:1},focusNear:{value:11.5},focusFar:{value:20},nearBlur:{value:14},farBlur:{value:11},maxBlur:{value:6},focusOffset:{value:0},focusEnabled:{value:1},vignette:{value:.16}};
  this.full=new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:vertex,fragmentShader:lens+`void main(){
   float d=distanceAt(vUv),coc=circleAt(d);vec3 col=texture2D(image,vUv).rgb;float weight=1.;
   ${referenceLens?`if(coc>.2)for(int i=0;i<16;i++){float f=float(i)+.5,a=f*2.399963;vec2 uv=vUv+vec2(cos(a),sin(a))*sqrt(f/16.)*coc/resolution;float sd=distanceAt(uv),w=sd<d-2.?.25:1.;col+=texture2D(image,uv).rgb*w;weight+=w;}`:`if(coc>.2){vec2 radiusUv=coc/resolution;float foregroundDepth=d>2.?(far-near*far/(d-2.))/(far-near):-1.;//KERNEL_START\n${focusSamples()}\n//KERNEL_END\n}` }
   col/=weight;${output}}`,depthTest:false,depthWrite:false,toneMapped:!ldr});
  this.lensTemplate=this.full.fragmentShader;this.samples=16;
  this.blurMaterials=new Map();
  for(const taps of [6,8])this.blurMaterials.set(taps,new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:vertex,fragmentShader:lens+`void main(){
   float d=distanceAt(vUv),coc=circleAt(d);vec3 col=texture2D(image,vUv).rgb;float weight=1.;
   if(coc>.3)for(int i=0;i<${taps};i++){float f=float(i)+.5,a=f*2.399963;vec2 uv=vUv+vec2(cos(a),sin(a))*sqrt(f/${taps}.)*coc/resolution;float sd=distanceAt(uv),w=sd<d-2.?.15:1.;col+=texture2D(image,uv).rgb*w;weight+=w;}
   gl_FragColor=vec4(col/weight,d/far);
  }`,depthTest:false,depthWrite:false,toneMapped:false}));
  this.composite=new THREE.ShaderMaterial({uniforms:{...this.uniforms,blurred:{value:this.blurred.texture},blurResolution:{value:new THREE.Vector2(1,1)}},vertexShader:vertex,fragmentShader:lens+`
   uniform sampler2D blurred;uniform vec2 blurResolution;
   void main(){float d=distanceAt(vUv),coc=circleAt(d);vec3 col=texture2D(image,vUv).rgb;
    if(coc>.3){
     vec2 pixel=vUv*blurResolution-.5,base=(floor(pixel)+.5)/blurResolution,f=fract(pixel);vec3 soft=vec3(0.);float total=0.;
     for(int y=0;y<2;y++)for(int x=0;x<2;x++){vec2 step=vec2(float(x),float(y)),uv=base+step/blurResolution;vec4 tap=texture2D(blurred,uv);
      float bilinear=(x==0?1.-f.x:f.x)*(y==0?1.-f.y:f.y);
      float w=bilinear*max(0.,1.-abs(tap.a*far-d)/max(.8,d*.035));soft+=tap.rgb*w;total+=w;
     }
     if(total>.001)col=mix(col,soft/total,smoothstep(.3,1.25,coc));
    }${output}}
  `,depthTest:false,depthWrite:false,toneMapped:!ldr});
  this.scene=new THREE.Scene();this.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),this.full);this.scene.add(this.quad);this.postCamera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);this.tier=tier;
 }
 configure(tier){
  this.tier=tier;const samples=samplesFor(this.renderer,this.type,tier.msaa);
  if(samples!==this.beauty.samples){this.beauty.dispose();this.beauty.samples=samples;}
 }
 resize(width,height,referenceDpr,actualDpr){
  this.beauty.setSize(width,height);const scale=this.tier.blurScale;this.blurred.setSize(Math.max(1,Math.ceil(width*scale)),Math.max(1,Math.ceil(height*scale)));
  this.uniforms.resolution.value.set(width,height);this.uniforms.cocScale.value=actualDpr/referenceDpr;
  this.composite.uniforms.blurResolution.value.set(this.blurred.width,this.blurred.height);
 }
 setSamples(count){count=Math.max(4,Math.min(32,Math.round(count/4)*4));if(count===this.samples)return;this.samples=count;this.full.fragmentShader=this.lensTemplate.replace(/\/\/KERNEL_START[\s\S]*?\/\/KERNEL_END/,()=> '//KERNEL_START\n'+focusSamples(count)+'\n//KERNEL_END');this.full.needsUpdate=true;}
 state(state){this.uniforms.focusShift.value=state.focusShift;this.uniforms.focusStutter.value=state.focusStutter;}
 render(profiler){
  const renderer=this.renderer;
  if(this.tier.blurScale===1){profiler.begin('focus');this.quad.material=this.full;renderer.setRenderTarget(null);renderer.render(this.scene,this.postCamera);profiler.end();}
  else{
   profiler.begin('focus');this.quad.material=this.blurMaterials.get(this.tier.blurTaps)||this.blurMaterials.get(8);renderer.setRenderTarget(this.blurred);renderer.render(this.scene,this.postCamera);profiler.end();
   profiler.begin('composite');this.quad.material=this.composite;renderer.setRenderTarget(null);renderer.render(this.scene,this.postCamera);profiler.end();
  }
 }
 async warmup(renderer){
  const active=this.tier.blurScale===1?[this.full]:[this.blurMaterials.get(this.tier.blurTaps)||this.blurMaterials.get(8),this.composite];
  for(const material of active){this.quad.material=material;const compiling=renderer.compileAsync(this.scene,this.postCamera);renderer.getContext().flush();await compiling;}
 }
 dispose(){this.beauty.dispose();this.beauty.depthTexture?.dispose();this.blurred.dispose();this.full.dispose();for(const material of this.blurMaterials.values())material.dispose();this.composite.dispose();this.quad.geometry.dispose();}
}
