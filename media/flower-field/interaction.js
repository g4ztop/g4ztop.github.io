import * as THREE from './vendor/three.module.js';
export function easeAttention(current,target,seconds,rate=7){return current+(target-current)*(1-Math.exp(-rate*Math.max(0,Math.min(seconds,.1))));}
export function createFlowerInteraction({canvas,camera,signal}){
 const pointer=new THREE.Vector2(),target=new THREE.Vector2(0,-8),position=target.clone(),ray=new THREE.Raycaster(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),-1.5),hit=new THREE.Vector3();
 const uniforms={flowerPointer:{value:position},flowerAttention:{value:0},flowerReach:{value:8}};
 let active=false,touch=null,last=0,project=false;
 const blocked=e=>e.target?.closest?.('a,button,input,select,textarea,summary,#scene-controls,#field-stats');
 function move(e){
  if(blocked(e)){active=false;return;}
  if(e.pointerType!=='mouse'&&e.pointerId!==touch)return;
  const bounds=canvas.getBoundingClientRect();if(!bounds.width||!bounds.height)return;
  pointer.set((e.clientX-bounds.left)/bounds.width*2-1,1-(e.clientY-bounds.top)/bounds.height*2);active=true;project=true;
 }
 window.addEventListener('pointerdown',e=>{if(blocked(e)||!e.isPrimary)return;if(e.pointerType!=='mouse')touch=e.pointerId;move(e);},{signal,passive:true});
 window.addEventListener('pointermove',move,{signal,passive:true});
 window.addEventListener('pointerup',e=>{if(e.pointerId===touch){touch=null;active=false;}},{signal,passive:true});
 const release=()=>{active=false;touch=null;};
 window.addEventListener('pointercancel',release,{signal});window.addEventListener('blur',release,{signal});
 document.addEventListener('pointerout',e=>{if(!e.relatedTarget)release();},{signal});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)release();last=0;},{signal});
 return {uniforms,update(now,tuning){
  const dt=last?(now-last)/1000:0;last=now;
  if(project&&active){camera.updateMatrixWorld();ray.setFromCamera(pointer,camera);if(ray.ray.intersectPlane(plane,hit)){target.set(Math.max(-tuning.fieldWidth/2,Math.min(tuning.fieldWidth/2,hit.x)),Math.max(tuning.minZ,Math.min(tuning.maxZ,hit.z)));}else target.set(pointer.x*tuning.fieldWidth*.3,tuning.minZ);project=false;}
  position.x=easeAttention(position.x,target.x,dt);position.y=easeAttention(position.y,target.y,dt);
  uniforms.flowerAttention.value=easeAttention(uniforms.flowerAttention.value,active&&tuning.interactionEnabled?tuning.interactionStrength:0,dt,active?6:3);
  uniforms.flowerReach.value=tuning.interactionRadius;
 }};
}
