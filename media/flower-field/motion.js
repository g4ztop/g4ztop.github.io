import * as THREE from './vendor/three.module.js';
export const WAVE_GLSL=`
 uniform float fieldTime,ridgeLift,waveAmplitude,waveScale,mainHeight,fineHeight,broadHeight,orbitRadius;
 float hashField(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noiseField(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hashField(i),hashField(i+vec2(1,0)),f.x),mix(hashField(i+vec2(0,1)),hashField(i+vec2(1,1)),f.x),f.y);}
 float heightField(vec2 p){float phase=fieldTime*.10471975511966;vec2 orbit=vec2(sin(phase+.519146)-sin(.519146),cos(.519146)-cos(phase+.519146));vec2 q=p*.11*waveScale+orbit*orbitRadius;return ((noiseField(q)-.5)*mainHeight+(noiseField(q*2.1+13.0)-.5)*fineHeight+(noiseField(p*.035*waveScale+orbit*.28)-.5)*broadHeight)*waveAmplitude+ridgeLift*(1.0-smoothstep(-25.0,-1.0,p.y));}
`;
export function loopState(motion,seconds){
 const t=((seconds%60)+60)%60,s=motion.ridgeLift,end=56;let ridge;
 if(t<=28){const f=t/motion.step,i=Math.min(end-1,Math.floor(f)),u=f-i,p1=s[i],p2=s[i+1],p0=i===0?p2:s[i-1],p3=i+2>end?p1:s[i+2];ridge=.5*(2*p1+(-p0+p2)*u+(2*p0-5*p1+4*p2-p3)*u*u+(-p0+3*p1-3*p2+p3)*u*u*u);}
 else{const u=(t-28)/32,blend=u*u*u*(u*(u*6-15)+10);ridge=s[end]*(1-blend)+s[0]*blend;}
 let focusShift=0,focusStutter=0;
 if(motion.focus){const f=(t%30)*motion.focus.fps,n=Math.floor(f),u=f-n,count=motion.focus.offset.length,previous=(n+count-1)%count,current=n%count,settle=THREE.MathUtils.smoothstep(u,0,.24),pulse=THREE.MathUtils.lerp(motion.focus.softness[previous],motion.focus.softness[current],settle),shift=THREE.MathUtils.lerp(motion.focus.offset[current],motion.focus.offset[(current+1)%count],u*u*(3-2*u));focusShift=shift+(pulse-.5)*.32;focusStutter=.12+pulse*1.65;}
 return {time:t,ridge,focusShift,focusStutter,phase:t*Math.PI/30};
}
export function placements(aspect=3,spacing=.54,options={}){
 const {minZ=-28,maxZ=11,fieldWidth=90,jitter=.85,minScale=.82,maxScale=1.14,tilt=.18,particleCount=180}=options;
 let seed=(options.seed??62423)>>>0;function random(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
 const weights=[.20,.16,.08,.16,.16,.06,.08,.10].map((weight,i)=>options['variant'+i]??weight),totalWeight=weights.reduce((a,b)=>a+b,0)||1;
 const points=[];
 for(let z=minZ;z<maxZ;z+=spacing){const half=Math.min(fieldWidth/2,(12-z)*Math.tan(21.5*Math.PI/180)*Math.max(3,aspect)+1.5);for(let x=-half;x<half;x+=spacing){
  const px=x+(random()-.5)*spacing*jitter,pz=z+(random()-.5)*spacing*jitter,draw=random();let cumulative=0,variant=7;for(let i=0;i<weights.length;i++){cumulative+=weights[i]/totalWeight;if(draw<cumulative){variant=i;break;}}
  points.push({id:points.length,x:px,z:pz,variant,angle:random()*Math.PI*2,size:minScale+random()*(Math.max(minScale,maxScale)-minScale),tilt:(random()-.5)*tilt});
 }}
 // Continue the exact reference RNG sequence for airborne ring particles.
 const specks=[],speckSeeds=[];for(let i=0;i<particleCount;i++){specks.push((random()-.5)*40,1+random()*12,6-random()*40);speckSeeds.push(random());}
 return {points,specks,speckSeeds};
}
export class MotionAtlas {
 constructor(renderer,points,{encoded=false}={}){
  this.width=128;this.height=Math.ceil(points.length/this.width);this.encoded=encoded;
  const origins=new Float32Array(this.width*this.height*4);for(const p of points){origins[p.id*4]=p.x;origins[p.id*4+1]=p.z;}
  this.origins=new THREE.DataTexture(origins,this.width,this.height,THREE.RGBAFormat,THREE.FloatType);this.origins.needsUpdate=true;
  this.target=new THREE.WebGLRenderTarget(this.width,this.height,{type:encoded?THREE.UnsignedByteType:THREE.FloatType,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:false});
  this.uniforms={fieldTime:{value:0},ridgeLift:{value:0},origins:{value:this.origins},waveAmplitude:{value:1},waveScale:{value:1},mainHeight:{value:2.8},fineHeight:{value:.6},broadHeight:{value:2},orbitRadius:{value:1.54}};this.slope={value:.34};this.heightRange={value:32};this.slopeRange={value:6};Object.assign(this.uniforms,{motionHeightRange:this.heightRange,motionSlopeRange:this.slopeRange});
  this.material=new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:`varying vec2 vUv;uniform sampler2D origins;uniform float motionHeightRange,motionSlopeRange;${WAVE_GLSL}\nvoid main(){vec2 p=texture2D(origins,vUv).xy;float h=heightField(p),dx=(heightField(p+vec2(.08,0))-h)/.08,dz=(heightField(p+vec2(0,.08))-h)/.08;
   ${encoded?'float packed=floor(clamp((h+motionHeightRange*.5)/motionHeightRange,0.,1.)*65535.+.5);gl_FragColor=vec4(floor(packed/256.)/255.,mod(packed,256.)/255.,clamp(dx/motionSlopeRange+.5,0.,1.),clamp(dz/motionSlopeRange+.5,0.,1.));':'gl_FragColor=vec4(h,dx,dz,1.);'} }`,depthTest:false,depthWrite:false,toneMapped:false});
  this.scene=new THREE.Scene();this.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),this.material);this.scene.add(this.quad);this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
 }
 uv(id){return [(id%this.width+.5)/this.width,(Math.floor(id/this.width)+.5)/this.height];}
 update(renderer,state){this.uniforms.fieldTime.value=state.time;this.uniforms.ridgeLift.value=state.ridge;renderer.setRenderTarget(this.target);renderer.render(this.scene,this.camera);}
 patch(shader){
  shader.uniforms.flowerMotion={value:this.target.texture};shader.uniforms.fieldSlope=this.slope;shader.uniforms.motionHeightRange=this.heightRange;shader.uniforms.motionSlopeRange=this.slopeRange;
  shader.uniforms.flowerPointer=this.attention?.flowerPointer||{value:new THREE.Vector2()};shader.uniforms.flowerAttention=this.attention?.flowerAttention||{value:0};shader.uniforms.flowerReach=this.attention?.flowerReach||{value:8};
  shader.vertexShader=`uniform vec2 flowerPointer;uniform float flowerAttention,flowerReach;
  mat3 flowerFacingMatrix(){
   if(flowerAttention<.001)return mat3(1.);
   vec2 delta=flowerPointer-instanceMatrix[3].xz;float distanceToPointer=length(delta);
   float pull=flowerAttention*(1.-smoothstep(0.,flowerReach,distanceToPointer));
   vec3 direction=vec3(delta.x,0.,delta.y)/max(distanceToPointer,.001);
   direction=vec3(dot(instanceMatrix[0].xyz,direction),dot(instanceMatrix[1].xyz,direction),dot(instanceMatrix[2].xyz,direction))/max(length(instanceMatrix[0].xyz),.001);
   vec3 facing=normalize(vec3(direction.x*pull,1.,direction.z*pull));
   vec3 axis=vec3(facing.z,0.,-facing.x);
   mat3 crossAxis=mat3(0.,axis.z,-axis.y,-axis.z,0.,axis.x,axis.y,-axis.x,0.);
   return mat3(1.)+crossAxis+(crossAxis*crossAxis)/(1.+facing.y);
  }
  attribute vec2 instanceMotionUv;uniform sampler2D flowerMotion;uniform float fieldSlope,motionHeightRange,motionSlopeRange;varying float botanicalHeight;\n`+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('void main() {','void main() { mat3 flowerFacing=flowerFacingMatrix();').replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nobjectNormal=flowerFacing*objectNormal;\n#ifdef USE_TANGENT\nobjectTangent=flowerFacing*objectTangent;\n#endif');
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   transformed=flowerFacing*transformed;botanicalHeight=position.y;vec4 motion=texture2D(flowerMotion,instanceMotionUv);
   ${this.encoded?'motion.xyz=vec3((motion.r*65280.+motion.g*255.)/65535.*motionHeightRange-motionHeightRange*.5,(motion.b-.5)*motionSlopeRange,(motion.a-.5)*motionSlopeRange);':''}
   transformed.x+=position.y*(-motion.y*fieldSlope);transformed.z+=position.y*(-motion.z*fieldSlope);transformed.y+=motion.x/length(instanceMatrix[1].xyz);
  `);
 }
 dispose(){this.origins.dispose();this.target.dispose();this.quad.geometry.dispose();this.material.dispose();}
}
