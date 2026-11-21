import * as THREE from './vendor/three.module.js';
const source=new URL('./assets/',import.meta.url),optimized=new URL('./assets/optimized/',import.meta.url);
async function get(url,kind='arrayBuffer'){
 const response=await fetch(url);if(!response.ok)throw Error(`Asset unavailable (${response.status}): ${new URL(url).pathname}`);return response[kind]();
}
export class AssetStore {
 constructor(renderer){this.renderer=renderer;this.geometries=new Map();this.lodPromises=new Map();this.textures=new Map();this.texturePromises=new Map();this.requests=new Map();this.nextId=1;this.worker=null;this.disposed=false;this.fallbacks=[];this.loadedBytes=0;}
 async initialize(){
  const params=new URLSearchParams(location.search),local=['127.0.0.1','localhost','[::1]'].includes(location.hostname);
  const manifestUrl=local&&params.get('mesh')==='reference'?new URL('/mesh-reference.json',location.origin):new URL('manifest.json',optimized);
  [this.manifest,this.motion]=await Promise.all([get(manifestUrl,'json').catch(()=>null),get(new URL('motion.json',source),'json')]);
  if(!this.manifest)this.fallbacks.push('original geometry and JPEG assets');
  return this;
 }
 async decode(request,refetch){
  if(typeof Worker!=='undefined'&&!this.workerFailed){
   try{
    if(!this.workerReady)this.workerReady=new Promise((resolve,reject)=>{
     const worker=this.worker=new Worker(new URL('./asset-worker.js',import.meta.url),{type:'module'});
     const timer=setTimeout(()=>reject(Error('Geometry worker startup timed out')),4000);
     worker.onmessage=({data})=>{
      if(data.ready){clearTimeout(timer);resolve();return;}
      const item=this.requests.get(data.id);if(!item)return;this.requests.delete(data.id);clearTimeout(item.timer);data.error?item.reject(Error(data.error)):item.resolve(data);
     };
     worker.onerror=()=>{clearTimeout(timer);reject(Error('Geometry worker unavailable'));for(const item of this.requests.values()){clearTimeout(item.timer);item.reject(Error('Geometry worker interrupted'));}this.requests.clear();};
    });
    await this.workerReady;
    return await new Promise((resolve,reject)=>{const id=this.nextId++,timer=setTimeout(()=>{this.requests.delete(id);reject(Error('Geometry decode timed out'));},15000);this.requests.set(id,{resolve,reject,timer});this.worker.postMessage({id,...request},[request.bytes]);});
   }catch(error){this.workerFailed=true;this.worker?.terminate();this.worker=null;request.bytes=await refetch();this.fallbacks.push('main-thread mesh decode');}
  }
  const {decodeRequest}=await import('./codec.js');return decodeRequest(request);
 }
 async loadLod(lod){
  if(this.lodPromises.has(lod))return this.lodPromises.get(lod);
  const promise=(async()=>{
   try{
    if(!this.manifest)throw Error('No optimized manifest');
    const entry=this.manifest.lods[lod],url=new URL(entry.url,optimized);const bytes=await get(url);this.loadedBytes+=bytes.byteLength;
    const {models}=await this.decode({kind:'geometry',bytes,models:entry.models},()=>get(url));
    if(this.disposed)return;
    for(const model of models){
     const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(model.position),3));geometry.setAttribute('normal',new THREE.BufferAttribute(new Int16Array(model.normal),3,true));geometry.setAttribute('uv',new THREE.BufferAttribute(new Uint16Array(model.uv),2,true));geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(model.index),1));geometry.userData.bakedUv=!!entry.models.find(m=>m.variant===model.variant).bakedUv;geometry.computeBoundingBox();geometry.computeBoundingSphere();this.geometries.set(`${model.variant}:${lod}`,geometry);
    }
   }catch(error){
    this.fallbacks.push(`LOD ${lod}: original mesh fallback`);await this.loadOriginal(lod);
   }
  })();this.lodPromises.set(lod,promise);return promise;
 }
 async loadOriginal(requestedLod){
  if(!this.originalPromise)this.originalPromise=Promise.all([get(new URL('flowers.json',source),'json'),get(new URL('flowers.bin',source))]);
  const [manifest,data]=await this.originalPromise;if(this.disposed)return;
  for(const entry of manifest.filter(m=>m.lod===(requestedLod?1:0))){
   const geometry=new THREE.BufferGeometry();for(const [name,size] of [['position',3],['normal',3],['uv',2]])geometry.setAttribute(name,new THREE.BufferAttribute(new Float32Array(data,entry[name].offset,entry[name].length),size));geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(data,entry.index.offset,entry.index.length),1));geometry.computeBoundingBox();geometry.computeBoundingSphere();this.geometries.set(`${entry.variant}:${requestedLod}`,geometry);
  }
 }
 geometry(variant,lod){return this.geometries.get(`${variant}:${lod}`);}
 async loadTextures(tier){
  if(this.texturePromises.has(tier))return this.texturePromises.get(tier);
  const promise=(async()=>{
   let loader=null;
   if(tier!=='high'&&this.manifest&&typeof WebAssembly!=='undefined'){
    try{if(!this.ktx){const {KTX2Loader}=await import('./vendor/addons/loaders/KTX2Loader.js');this.ktx=new KTX2Loader().setTranscoderPath(new URL('./vendor/basis/',import.meta.url).href).setWorkerLimit(1).detectSupport(this.renderer);}loader=this.ktx;}catch{this.fallbacks.push('JPEG texture fallback');}
   }
   const jpg=new THREE.TextureLoader();const textures=await Promise.all(Array.from({length:this.manifest?.lodTextures?.[tier]?16:8},async(_,i)=>{
    const rebaked=i>=8,variant=i%8;
    let texture;
    if(loader){try{const entry=(rebaked?this.manifest.lodTextures:this.manifest.textures)[tier][variant];texture=await loader.loadAsync(new URL(entry.url,optimized).href);this.loadedBytes+=entry.bytes;}catch{this.fallbacks.push(`JPEG fallback for flower ${i}`);}}
    if(!texture){const entry=tier==='high'?(rebaked?this.manifest.lodTextures.high[variant]:this.manifest?.textures.high[variant]):null;texture=await jpg.loadAsync(entry?new URL(entry.url,optimized).href:new URL(rebaked?`lod-rebake/flower-${variant}.jpg`:`flower-${variant}.jpg`,source).href);if(entry)this.loadedBytes+=entry.bytes;}
    if(tier==='low'&&!texture.isDataTexture&&!texture.isCompressedTexture&&texture.image?.width>512){const reduced=document.createElement('canvas');reduced.width=reduced.height=512;const context=reduced.getContext('2d');if(context){context.drawImage(texture.image,0,0,512,512);texture.image=reduced;texture.needsUpdate=true;}}
    if(loader&&texture.flipY===false){texture.repeat.y=-1;texture.offset.y=1;}
    texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(tier==='high'?4:2,this.renderer.capabilities.getMaxAnisotropy());return texture;
   }));
   if(this.disposed){textures.forEach(t=>t.dispose());return [];}
   this.textures.set(tier,textures);return textures;
  })();this.texturePromises.set(tier,promise);return promise;
 }
 releaseTexturesExcept(tier){for(const [key,textures] of this.textures)if(key!==tier){textures.forEach(t=>t.dispose());this.textures.delete(key);this.texturePromises.delete(key);}}
 async loadEnvironment(){
  try{
   if(!this.manifest?.environment)throw Error('No baked environment');
   const entry=this.manifest.environment,url=new URL(entry.url,optimized),bytes=await get(url);this.loadedBytes+=bytes.byteLength;
   const decoded=await this.decode({kind:'environment',bytes,count:entry.width*entry.height},()=>get(url));
   if(this.disposed)return null;
   const texture=new THREE.DataTexture(new Uint16Array(decoded.bytes),entry.width,entry.height,THREE.RGBAFormat,THREE.HalfFloatType);
   texture.mapping=THREE.CubeUVReflectionMapping;texture.minFilter=THREE.LinearFilter;texture.magFilter=THREE.LinearFilter;texture.generateMipmaps=false;texture.colorSpace=THREE.LinearSRGBColorSpace;texture.needsUpdate=true;this.environment=texture;return texture;
  }catch{this.fallbacks.push('runtime studio environment');return null;}
 }
 dispose(){
  this.disposed=true;this.worker?.terminate();for(const item of this.requests.values()){clearTimeout(item.timer);item.reject(Error('Renderer disposed'));}this.requests.clear();this.ktx?.dispose();for(const geometry of new Set(this.geometries.values()))geometry.dispose();for(const textures of this.textures.values())textures.forEach(t=>t.dispose());this.environment?.dispose();this.geometries.clear();this.textures.clear();
 }
}
