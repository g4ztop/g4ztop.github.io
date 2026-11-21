import * as THREE from './vendor/three.module.js';
import {chooseLod} from './quality.js';
function geometryView(base,motionUv,fade){
 const geometry=new THREE.BufferGeometry();geometry.index=base.index;
 for(const [name,attribute] of Object.entries(base.attributes))geometry.setAttribute(name,attribute);
 geometry.setAttribute('instanceMotionUv',motionUv);geometry.setAttribute('instanceFadeSign',fade);return geometry;
}
export function buildBatches({points,assets,materials,shadowMaterial,tier,camera,height,atlas,aspect,reference=false,lodScale=1,lodOverride=-1}){
 camera.updateMatrixWorld();const groups=new Map(),focal=height/(2*Math.tan(camera.fov*.5*Math.PI/180)),view=new THREE.Vector3();
 for(const p of points){
  const extent=(12-p.z)*Math.tan(camera.fov*.5*Math.PI/180)*aspect+1.5;if(Math.abs(p.x)>extent)continue;
  view.set(p.x,1.5,-0+p.z).applyMatrix4(camera.matrixWorldInverse);
  const lod=reference?(p.z<1?1:0):(lodOverride>=0?lodOverride:chooseLod(p,-view.z,focal*lodScale,tier));
  const shadowLod=reference?lod:Math.max(lod,tier.shadowLod);
  const key=`${p.variant}:${lod}:${shadowLod}:${Math.floor(p.x/24)}:${Math.floor(p.z/24)}`;
  if(!groups.has(key))groups.set(key,{variant:p.variant,lod,shadowLod,points:[]});groups.get(key).points.push(p);
 }
 const batches=[],instance=new THREE.Object3D(),scratch=new THREE.Box3();
 for(const group of groups.values()){
  const base=assets.geometry(group.variant,group.lod),proxy=assets.geometry(group.variant,group.shadowLod);if(!base||!proxy)throw Error(`Missing LOD ${group.lod}/${group.shadowLod}`);
  const uv=new THREE.InstancedBufferAttribute(new Float32Array(group.points.length*2),2),fade=new THREE.InstancedBufferAttribute(new Float32Array(group.points.length),1);
  const geometry=geometryView(base,uv,fade),shadowGeometry=geometryView(proxy,uv,fade);
  const mesh=new THREE.InstancedMesh(geometry,materials[group.variant+(base.userData.bakedUv&&materials.length>8?8:0)],group.points.length),shadow=new THREE.InstancedMesh(shadowGeometry,shadowMaterial,group.points.length);
  const bounds=new THREE.Box3();let maxZ=-Infinity,minZ=Infinity;
  group.points.forEach((p,i)=>{
   instance.position.set(p.x,-.12,p.z);instance.rotation.set(p.tilt,p.angle,p.tilt*.5);instance.scale.setScalar(p.size);instance.updateMatrix();mesh.setMatrixAt(i,instance.matrix);uv.setXY(i,...atlas.uv(p.id));
   scratch.copy(base.boundingBox).applyMatrix4(instance.matrix);bounds.union(scratch);maxZ=Math.max(maxZ,p.z);minZ=Math.min(minZ,p.z);
  });
  shadow.instanceMatrix=mesh.instanceMatrix;mesh.receiveShadow=true;
  // Explicit, wave-aware AABB culling below is tighter than a single sphere
  // around a wide instanced field, and the shadow scene culls independently.
  mesh.frustumCulled=shadow.frustumCulled=false;
  batches.push({mesh,shadow,bounds,activeBounds:new THREE.Box3(),fade,lod:group.lod,shadowLod:group.shadowLod,points:group.points,minZ,maxZ});
 }
 // Shadow geometry does not need to follow the beauty LOD partitions. Merge
 // compatible proxies to avoid paying another draw call for each beauty group.
 const proxyGroups=new Map();
 for(const b of batches){
  const p=b.points[0],key=`${p.variant}:${b.shadowLod}:${Math.floor(p.x/24)}:${Math.floor(p.z/24)}`;
  if(!proxyGroups.has(key))proxyGroups.set(key,{variant:p.variant,lod:b.shadowLod,points:[]});proxyGroups.get(key).points.push(...b.points);
  for(const name of ['position','normal','uv'])b.shadow.geometry.deleteAttribute(name);b.shadow.geometry.setIndex(null);b.shadow.geometry.dispose();b.shadow.dispose();delete b.shadow;
 }
 const shadowBatches=[];
 for(const group of proxyGroups.values()){
  const base=assets.geometry(group.variant,group.lod),uv=new THREE.InstancedBufferAttribute(new Float32Array(group.points.length*2),2),fade=new THREE.InstancedBufferAttribute(new Float32Array(group.points.length),1);
  const shadow=new THREE.InstancedMesh(geometryView(base,uv,fade),shadowMaterial,group.points.length),bounds=new THREE.Box3();shadow.frustumCulled=false;
  group.points.forEach((p,i)=>{instance.position.set(p.x,-.12,p.z);instance.rotation.set(p.tilt,p.angle,p.tilt*.5);instance.scale.setScalar(p.size);instance.updateMatrix();shadow.setMatrixAt(i,instance.matrix);uv.setXY(i,...atlas.uv(p.id));scratch.copy(base.boundingBox).applyMatrix4(instance.matrix);bounds.union(scratch);});
  shadowBatches.push({shadow,bounds,activeBounds:new THREE.Box3(),fade});
 }
 return {batches,shadowBatches,materials,shadowMaterial,tier,fadeSign:0};
}
export function setBatchFade(set,sign){set.fadeSign=sign;for(const b of [...set.batches,...(set.shadowBatches||[])]){b.fade.array.fill(sign);b.fade.needsUpdate=true;}}
function waveBounds(b,state){
 const box=b.activeBounds.copy(b.bounds);const margin=state.boundXZ||1.8;box.min.x-=margin;box.max.x+=margin;box.min.z-=margin;box.max.z+=margin;
 box.min.y-=(state.boundHeight||3)+Math.max(0,-state.ridge);box.max.y+=(state.boundHeight||3)+Math.max(0,state.ridge);return box;
}
export function cullBatches(set,cameraFrustum,shadowFrustum,state){
 let flowers=0,triangles=0,clusters=0,shadowTriangles=0;
 for(const b of set.batches){
  const box=waveBounds(b,state);b.mesh.visible=cameraFrustum.intersectsBox(box);
  if(b.mesh.visible){flowers+=b.mesh.count;triangles+=b.mesh.geometry.index.count/3*b.mesh.count;clusters++;}
 }
 for(const b of set.shadowBatches||set.batches){b.shadow.visible=shadowFrustum.intersectsBox(waveBounds(b,state));if(b.shadow.visible)shadowTriangles+=b.shadow.geometry.index.count/3*b.shadow.count;}
 return {flowers,sceneTriangles:triangles,clusters,shadowTriangles};
}
export function attachBatches(set,scene,shadowScene){for(const b of set.batches)scene.add(b.mesh);for(const b of set.shadowBatches||set.batches)shadowScene.add(b.shadow);}
export function disposeBatches(set,scene,shadowScene){
 if(!set)return;
 const views=[...set.batches.map(b=>b.mesh),...(set.shadowBatches||set.batches).map(b=>b.shadow)];
 for(const mesh of views){scene.remove(mesh);shadowScene.remove(mesh);
  // Source vertex/index buffers remain owned by AssetStore.
  for(const name of ['position','normal','uv'])mesh.geometry.deleteAttribute(name);mesh.geometry.setIndex(null);mesh.geometry.dispose();mesh.dispose();
 }
 set.materials.forEach(m=>m.dispose());set.shadowMaterial.dispose();
}
