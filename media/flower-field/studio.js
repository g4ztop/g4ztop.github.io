import * as THREE from './vendor/three.module.js';
import {RectAreaLightUniformsLib} from './vendor/addons/lights/RectAreaLightUniformsLib.js';
let areaInitialized=false;
export function addLights(scene,{accents=true}={}){
 scene.add(new THREE.HemisphereLight(0xdad4bc,0x100d08,.30));
 const key=new THREE.DirectionalLight(0xffeadb,2.2);key.name='Warm key';key.position.set(-6,10,-3);key.castShadow=true;
 Object.assign(key.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:.1,far:60});key.shadow.camera.updateProjectionMatrix();key.shadow.bias=-.00015;key.shadow.normalBias=.015;key.shadow.radius=2;key.target.position.set(0,0,-7);scene.add(key.target,key);
 const pool=new THREE.SpotLight(0xfff0dd,380,48,1.05,1,2);pool.name='Warm pool';pool.position.set(-2,10,-5);pool.target.position.set(5,0,-7);scene.add(pool,pool.target);
 const rim=new THREE.DirectionalLight(0xe8ecdc,.55);rim.name='Rim';rim.position.set(8,5,-12);scene.add(rim);
 if(accents){
  // Local, shadow-free pools rather than another field-wide shadow pass.
  let pointIndex=0;for(const [color,intensity,distance,position] of [
   [0xffd8b2,26,5.5,[-4.5,1.8,3.5]],
   [0xffc5ce,30,6.0,[4.0,1.6,-2.5]],
   [0xffe8c7,34,6.5,[-3.5,1.8,-10]],
   [0xdce9ff,28,6.0,[6.5,1.6,-15]],
  ]){const light=new THREE.PointLight(color,intensity,distance,2);light.name=`Point light ${++pointIndex}`;light.userData.baseIntensity=intensity;light.userData.flickerStrength=.12;light.userData.flickerCycles=1;light.userData.flickerPhase=(pointIndex*1.77)%(2*Math.PI);light.position.set(...position);scene.add(light);}
  if(!areaInitialized){RectAreaLightUniformsLib.init();areaInitialized=true;}
  const blue=new THREE.RectAreaLight(0xa6d6ff,.65,90,39);blue.name='Pale blue area uplight';blue.position.set(0,-5.5,-8.5);blue.rotation.set(Math.PI/2,0,0);scene.add(blue);
 }
 return key;
}
export function runtimeEnvironment(renderer){
 const studio=new THREE.Scene();for(const [position,size,color] of [[[-4,7,2],[5,4],[4,3.7,3.2]],[[5,4,-5],[3,5],[2.8,3,2.7]]]){
  const panel=new THREE.Mesh(new THREE.PlaneGeometry(...size),new THREE.MeshBasicMaterial({color:new THREE.Color().setRGB(...color),side:THREE.DoubleSide}));panel.position.set(...position);panel.lookAt(0,0,0);studio.add(panel);
 }
 const pmrem=new THREE.PMREMGenerator(renderer),target=pmrem.fromScene(studio,.03);pmrem.dispose();studio.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});return target;
}
export function ringParticles({specks,speckSeeds},ratio){
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(specks,3));geometry.setAttribute('seed',new THREE.Float32BufferAttribute(speckSeeds,1));
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{pixelRatio:{value:ratio},particleSize:{value:1},particleOpacity:{value:1}},vertexShader:`attribute float seed;uniform float pixelRatio,particleSize,particleOpacity;varying float opacity;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=(3.+seed*5.)*pixelRatio*particleSize;opacity=(.055+seed*.13)*particleOpacity;}`,fragmentShader:`varying float opacity;void main(){vec2 p=gl_PointCoord-.5;float r=length(p),ring=smoothstep(.27,.35,r)*(1.-smoothstep(.37,.48,r)),arc=.45+.55*smoothstep(-.4,.4,p.x+p.y);gl_FragColor=vec4(.65,.64,.56,ring*arc*opacity);}`});
 return new THREE.Points(geometry,material);
}
