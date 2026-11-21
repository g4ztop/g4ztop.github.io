import * as THREE from './vendor/three.module.js';
import {createFlowerInteraction} from './interaction.js';
import {DEFAULT_SETTINGS} from './defaults.js';
import {TIERS,QualityController,drawingSize,validMode} from './quality.js';
import {FrameProfiler} from './profiler.js';
import {AssetStore} from './assets.js';
import {placements,loopState,MotionAtlas} from './motion.js';
import {flowerMaterials,depthMaterial} from './materials.js';
import {buildBatches,attachBatches,disposeBatches,setBatchFade,cullBatches} from './batches.js';
import {LensPipeline,floatingPointSupport} from './post.js';
import {addLights,runtimeEnvironment,ringParticles} from './studio.js';
import {createHud} from './hud.js';
import {createSceneControls} from './controls.js';
import {createTuning,controlGroups,pointLightIntensity} from './scene-settings.js';

export async function startField({canvas,button,context,onFatal,playOnStart=true}){
 const boot=performance.now(),params=new URLSearchParams(location.search),studyTime=document.querySelector('#study-time');
 const local=['127.0.0.1','localhost','[::1]'].includes(location.hostname),diagnostics=local||params.has('bench');
 const cleanUi=document.body.dataset.fieldUi==='off',lockedHigh=document.body.dataset.qualityLock==='high';
 const abort=new AbortController(),signal=abort.signal;
 const tuning=createTuning(),tiers=Object.fromEntries(Object.entries(TIERS).map(([name,tier])=>[name,{...tier}]));let controls=null,controlGroupsList=null,controlTimer=0,editingWorld=false,pendingWorldRebuild=false;const pendingControlEffects=new Set();
 const renderer=new THREE.WebGLRenderer({canvas,context,alpha:false,antialias:false,powerPreference:'high-performance'});
 renderer.setPixelRatio(1);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;renderer.info.autoReset=false;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=false;
 const gl=renderer.getContext(),floatColor=floatingPointSupport(renderer),ldr=params.get('ldr')==='1'||!floatColor;
 const profiler=new FrameProfiler(renderer);profiler.sampleEvery=params.has('bench')?1:8;
 const shaderErrors=[];renderer.debug.onShaderError=(gl,program,vertex,fragment)=>{const message=[gl.getProgramInfoLog(program),gl.getShaderInfoLog(vertex),gl.getShaderInfoLog(fragment)].filter(Boolean).join('\n');shaderErrors.push(message);console.error('Flower shader:',message);};
 const scene=new THREE.Scene();scene.background=new THREE.Color(0);scene.fog=new THREE.FogExp2(0,.009);
 const shadowScene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(43,1,.1,85);camera.position.set(0,3.5,12);camera.lookAt(0,-1.6,-12);
 const attention=createFlowerInteraction({canvas,camera,signal});
 const key=addLights(scene,{accents:params.get('lighting')!=='reference'});key.shadow.autoUpdate=false;
 const mainFrustum=new THREE.Frustum(),shadowFrustum=new THREE.Frustum(),projection=new THREE.Matrix4(),black=new THREE.Color(0);
 let savedMode=DEFAULT_SETTINGS['playback.quality'];try{savedMode=sessionStorage.getItem('flower-quality')||savedMode;}catch{}
 const mode=lockedHigh?'high':validMode(params.get('quality')||savedMode),saveData=!!navigator.connection?.saveData;
 let current=null,outgoing=null,pipeline=null,shadowTarget=null,atlas=null,particles=null,environmentFallback=null;
 let disposed=false,lost=false,paused=!!studyTime||!playOnStart,ready=false,pending=false,job=0,frameId=0,lastTick=0,lastDraw=0,elapsed=0,transitionStart=0,resizeTimer=0,restoreTimer=0,losses=0,readyMs=0,lastCounts=null,lastAuto=0;
 const transition={value:1},quality=new QualityController({mode,saveData,tiers,onChange:change=>{hud.mode(change.mode);controls?.sync?.();if(ready)void applyQuality(change);}});
 const hud=createHud({hidden:cleanUi,mode,onMode:value=>{try{sessionStorage.setItem('flower-quality',value);}catch{}quality.setMode(value,performance.now());},signal});
 const assets=new AssetStore(renderer);
 const capabilities={webgl:2,floatColor,ldr,maxTextureSize:renderer.capabilities.maxTextureSize,maxSamples:renderer.capabilities.maxSamples,gpuTimer:!!profiler.ext};
 const reference=params.get('reference')==='1';
 canvas.dataset.state='loading';
 function publish(snapshot){
  canvas.dataset.renderedTime=String(loopState(assets.motion,elapsed).time);canvas.dataset.quality=current?.tier.name||'';canvas.dataset.state=lost?'recovering':ready?'ready':'loading';
  if(diagnostics){canvas.dataset.attention=String(attention.uniforms.flowerAttention.value);canvas.dataset.attentionTarget=attention.uniforms.flowerPointer.value.toArray().join(',');}
  if(diagnostics)document.dispatchEvent(new CustomEvent('field:frame',{detail:{...snapshot,time:Number(canvas.dataset.renderedTime),ready,capabilities,fallbacks:[...new Set(assets.fallbacks)]}}));
 }
 function assetMiB(){
  let bytes=0;for(const geometry of new Set(assets.geometries.values())){for(const attribute of Object.values(geometry.attributes))bytes+=attribute.array.byteLength;bytes+=geometry.index.array.byteLength;}
  for(const textures of assets.textures.values())for(const texture of textures)bytes+=texture.isCompressedTexture?texture.mipmaps.reduce((n,m)=>n+m.data.byteLength,0):(texture.image?.width||0)*(texture.image?.height||0)*4*4/3;
  if(assets.environment)bytes+=assets.environment.image.data.byteLength;return bytes/1048576;
 }
 function configureShadow(tier){
  if(!shadowTarget||shadowTarget.width!==tier.shadowSize){shadowTarget?.dispose();shadowTarget=new THREE.WebGLRenderTarget(tier.shadowSize,tier.shadowSize,{minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:true});}
  key.shadow.map=shadowTarget;key.shadow.mapSize.set(tier.shadowSize,tier.shadowSize);
  const extent=tuning.shadowExtent||(reference?19:tier.rank===2?19:tier.rank===1?17:15);
  Object.assign(key.shadow.camera,{left:-extent,right:extent,top:extent,bottom:-extent});key.shadow.camera.updateProjectionMatrix();scene.updateMatrixWorld(true);key.shadow.updateMatrices(key);
  shadowFrustum.setFromProjectionMatrix(projection.multiplyMatrices(key.shadow.camera.projectionMatrix,key.shadow.camera.matrixWorldInverse));
 }
 function resizeBuffers(){
  if(!pipeline||disposed||lost)return;
  const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight),tier=current?.tier||tiers[quality.tier];
  const size=drawingSize(w,h,devicePixelRatio||1,tier,quality.scale);
  renderer.setSize(size.width,size.height,false);camera.aspect=w/h;camera.updateProjectionMatrix();camera.updateMatrixWorld();
  const referenceDpr=Math.min(devicePixelRatio||1,w<700?1.25:1.5);
  pipeline.resize(size.width,size.height,referenceDpr,size.width/w);if(particles)particles.material.uniforms.pixelRatio.value=size.width/w;
 }
 async function makeSet(tier){
  const levels=reference?[0,1]:(tier.rank===2||tier.minLod===0||tier.shadowLod===0||tuning.lodOverride===0)?[0,1,2,3]:[1,2,3];
  if(!ready)canvas.dataset.loadingStage='geometry';
  const [_,maps]=await Promise.all([Promise.all(levels.map(lod=>assets.loadLod(lod))),assets.loadTextures(tier.texture)]);
  if(disposed)return null;
  atlas.attention=attention.uniforms;
  const materials=flowerMaterials(maps,tier,atlas,{transition,ldr,tuning}),shadowMaterial=depthMaterial(atlas,transition);
  const set=buildBatches({points:world.points,assets,materials,shadowMaterial,tier,camera,height:canvas.clientHeight,atlas,lodScale:tuning.lodScale,lodOverride:tuning.lodOverride,aspect:canvas.clientWidth/Math.max(1,canvas.clientHeight),reference});
  const stage=new THREE.Scene();stage.environment=scene.environment;stage.fog=scene.fog;for(const b of set.batches)stage.add(b.mesh);
  // Submit shader work before polling asynchronous completion.
  if(!ready)canvas.dataset.loadingStage='flower-shaders';const beautyCompile=renderer.compileAsync(stage,camera,scene);gl.flush();await beautyCompile;
  if(!ready)canvas.dataset.loadingStage='shadow-shaders';const depthStage=new THREE.Scene();for(const b of set.shadowBatches)depthStage.add(b.shadow);const depthCompile=renderer.compileAsync(depthStage,key.shadow.camera);gl.flush();await depthCompile;
  if(shaderErrors.length)throw Error('Flower shaders failed to compile.');
  return set;
 }
 async function applyQuality(change,{layout=false}={}){
  if(disposed||lost||!ready)return;if(editingWorld){clearTimeout(controlTimer);controlTimer=setTimeout(()=>void applyQuality(change,{layout}),200);return;}const targetTier=tiers[change.tier];
  if(!layout&&current?.tier===targetTier){resizeBuffers();profiler.reset();quality.reset(performance.now());return;}
  const version=++job;pending=true;hud.busy(true);canvas.dataset.layout='loading';
  try{
   camera.aspect=canvas.clientWidth/Math.max(1,canvas.clientHeight);camera.updateProjectionMatrix();camera.updateMatrixWorld();
   const next=await makeSet(targetTier);if(!next)return;
   if(disposed||lost||version!==job){disposeBatches(next,scene,shadowScene);return;}
   if(outgoing){disposeBatches(outgoing,scene,shadowScene);outgoing=null;}
   outgoing=current;current=next;attachBatches(current,scene,shadowScene);
   pipeline.configure(targetTier);configureShadow(targetTier);resizeBuffers();
   // Prepared resources swap together. Stochastic cross-fades produced a
   // visible grain flash and briefly doubled the geometry/shadow workload.
   disposeBatches(outgoing,scene,shadowScene);outgoing=null;setBatchFade(current,0);transition.value=1;assets.releaseTexturesExcept(targetTier.texture);
   profiler.reset();profiler.stage={};quality.reset(performance.now());renderFrame(performance.now(),false);canvas.dataset.layout='ready';
  }catch(error){console.warn('Keeping the active flower quality:',error);if(!current)onFatal(error);}
  finally{if(version===job){pending=false;hud.busy(false);}}
 }
 function applyLiveSettings(state){
  state.ridge*=tuning.ridgeStrength;state.focusShift*=tuning.focusDrift;state.focusStutter*=tuning.stutterStrength;
  state.boundHeight=Math.max(3,(tuning.mainHeight+tuning.fineHeight+tuning.broadHeight)*.5*tuning.waveAmplitude);
  state.boundXZ=Math.max(1.8,tuning.waveAmplitude*tuning.waveScale*tuning.slopeStrength*5*tuning.maxScale+Math.abs(state.ridge)*tuning.slopeStrength*.4);
  atlas.heightRange.value=Math.max(32,2*(state.boundHeight+Math.abs(state.ridge)+1));atlas.slopeRange.value=Math.max(6,2*(tuning.waveAmplitude*tuning.waveScale*(tuning.mainHeight*.165+tuning.fineHeight*.347+tuning.broadHeight*.053)+Math.abs(state.ridge)*.065+.1));
  for(const id of ['waveAmplitude','waveScale','mainHeight','fineHeight','broadHeight','orbitRadius'])atlas.uniforms[id].value=tuning[id];atlas.slope.value=tuning.slopeStrength;
  for(const id of ['focusNear','focusFar','nearBlur','farBlur','maxBlur','focusOffset','vignette'])pipeline.uniforms[id].value=tuning[id];pipeline.uniforms.focusEnabled.value=Number(tuning.focusEnabled);pipeline.uniforms.near.value=camera.near;pipeline.uniforms.far.value=camera.far;pipeline.setSamples(tuning.lensSamples);
  key.castShadow=tuning.shadows;
  for(const material of current.materials){material.color.set(tuning.flowerColor);if(material.userData.exposure)material.userData.exposure.value=renderer.toneMappingExposure;if('clearcoat' in material){material.clearcoat=tuning.clearcoat;material.clearcoatRoughness=tuning.coatRoughness;}const u=material.userData.tuningUniforms;if(u){u.petalRoughness.value=tuning.roughnessMin;u.stemRoughness.value=tuning.roughnessMax;}}
  particles.material.uniforms.particleSize.value=tuning.particleSize;particles.material.uniforms.particleOpacity.value=tuning.particleOpacity;
  scene.traverse(light=>{if(light.isPointLight){const d=light.userData;light.intensity=pointLightIntensity(d.baseIntensity,d.flickerStrength,d.flickerCycles,d.flickerPhase,state.phase);}if(light.isRectAreaLight&&tuning.linkArea){light.width=tuning.fieldWidth;light.height=tuning.maxZ-tuning.minZ;}});
 }
 async function rebuildWorld(){
  if(disposed||lost)return;if(editingWorld){pendingWorldRebuild=true;return;}++job;editingWorld=true;hud.busy(true);const oldWorld=world,oldAtlas=atlas;
  try{
   world=placements(Math.max(3,camera.aspect),tuning.spacing,tuning);atlas=new MotionAtlas(renderer,world.points,{encoded:oldAtlas.encoded});
   const next=await makeSet(tiers[quality.tier]);if(disposed||lost||!next){atlas.dispose();atlas=oldAtlas;world=oldWorld;return;}
   disposeBatches(current,scene,shadowScene);current=next;attachBatches(current,scene,shadowScene);oldAtlas.dispose();
   const fresh=ringParticles(world,1);particles.geometry.dispose();particles.geometry=fresh.geometry;fresh.material.dispose();
   scene.traverse(light=>{if(light.isRectAreaLight&&tuning.linkArea)light.position.z=(tuning.minZ+tuning.maxZ)/2;});
   configureShadow(current.tier);resizeBuffers();
  }catch(error){if(atlas!==oldAtlas)atlas.dispose();atlas=oldAtlas;world=oldWorld;throw error;}
  finally{editingWorld=false;hud.busy(false);if(!disposed&&!lost){renderFrame(performance.now(),false);if(pendingWorldRebuild){pendingWorldRebuild=false;void rebuildWorld();}}}
 }
 function changeControls(effects){
  if(disposed||lost)return;
  const aim=controlGroupsList?.find(g=>g.id==='camera')?.target;if(aim)camera.lookAt(aim.x,aim.y,aim.z);camera.updateProjectionMatrix();camera.updateMatrixWorld();
  controls?.sync?.();
  if(effects.includes('world')||effects.includes('layout')){for(const effect of effects)pendingControlEffects.add(effect);clearTimeout(controlTimer);controlTimer=setTimeout(()=>{const rebuild=pendingControlEffects.has('world');pendingControlEffects.clear();void(rebuild?rebuildWorld():applyQuality(quality.snapshot('scene controls'),{layout:true})).catch(error=>console.warn('Scene controls:',error));},180);}
  if(effects.includes('shadow')){configureShadow(tiers[quality.tier]);pipeline.configure(tiers[quality.tier]);}
  if(effects.includes('resize')||effects.includes('camera'))resizeBuffers();
  quality.reset(performance.now());renderFrame(performance.now(),false);
 }
 function renderFrame(now,measure=true){
  if(disposed||lost||editingWorld||!current||!pipeline)return;
  const cpuStart=performance.now(),state=loopState(assets.motion,elapsed);
  attention.update(now,tuning);applyLiveSettings(state);state.boundXZ+=attention.uniforms.flowerAttention.value*3;
  if(local&&params.get('steadyFocus')==='1'){state.focusShift=0;state.focusStutter=0;}
  if(outgoing){transition.value=Math.min(1,(now-transitionStart)/180);if(transition.value>=1){disposeBatches(outgoing,scene,shadowScene);outgoing=null;setBatchFade(current,0);assets.releaseTexturesExcept(current.tier.texture);}}
  camera.updateMatrixWorld();mainFrustum.setFromProjectionMatrix(projection.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  let counts=cullBatches(current,mainFrustum,shadowFrustum,state);
  if(outgoing){const old=cullBatches(outgoing,mainFrustum,shadowFrustum,state);for(const name of ['flowers','sceneTriangles','clusters','shadowTriangles'])counts[name]+=old[name];}
  particles.position.y=Math.sin(state.phase)*.12;particles.position.x=(1-Math.cos(state.phase))*.06;particles.rotation.y=Math.sin(state.phase)*.008;
  pipeline.state(state);renderer.info.reset();
  profiler.begin('motion');atlas.update(renderer,state);profiler.end();
  if(tuning.shadows){profiler.begin('shadows');renderer.setRenderTarget(shadowTarget);renderer.setClearColor(0xffffff,1);renderer.render(shadowScene,key.shadow.camera);renderer.setClearColor(black,1);profiler.end();}
  profiler.begin('beauty');renderer.setRenderTarget(pipeline.beauty);renderer.render(scene,camera);profiler.end();
  pipeline.render(profiler);
  counts={...counts,triangles:renderer.info.render.triangles,calls:renderer.info.render.calls,width:pipeline.beauty.width,height:pipeline.beauty.height,tier:current.tier.name,mode:quality.mode,scale:quality.scale,readyMs,assetMiB:assetMiB(),msaa:pipeline.beauty.samples,blurScale:current.tier.blurScale,resources:{...renderer.info.memory,programs:renderer.info.programs.length}};lastCounts=counts;
  const cpu=performance.now()-cpuStart;
  const snapshot=measure?profiler.frame(now,cpu,counts):{...profiler.latest,...counts,cpuMs:cpu,gpuStages:{...profiler.stage}};
  hud.update(snapshot);publish(snapshot);
  if(measure&&!pending&&!outgoing&&now-lastAuto>500){lastAuto=now;quality.observe(snapshot,now);}
 }
 function tick(now){
  frameId=0;if(disposed||lost||paused||document.hidden)return;
  profiler.raf(now);if(lastTick)elapsed+=Math.min((now-lastTick)/1000,.25)*tuning.timeScale;lastTick=now;
  const period=1000/(current?.tier.fps||60);
  if(!lastDraw||now-lastDraw>=period-.8){lastDraw=now;renderFrame(now,true);}
  frameId=requestAnimationFrame(tick);
 }
 function schedule(){cancelAnimationFrame(frameId);frameId=0;lastTick=lastDraw=0;profiler.reset();quality.reset(performance.now());if(ready&&!disposed&&!lost&&!paused&&!document.hidden)frameId=requestAnimationFrame(tick);}
 function updateButton(){button.hidden=cleanUi;button.textContent=paused?'Play motion':'Pause motion';button.setAttribute('aria-pressed',String(paused));hud.paused(paused);}
 let viewportKey="";
 function onResize(){
  if(!ready||disposed)return;const nextKey=`${canvas.clientWidth}:${canvas.clientHeight}:${devicePixelRatio}`;if(nextKey===viewportKey)return;viewportKey=nextKey;resizeBuffers();clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{void applyQuality(quality.snapshot('viewport resize'),{layout:true});},150);
  if(paused)renderFrame(performance.now(),false);
 }
 function dispose(){
  if(disposed)return;disposed=true;++job;abort.abort();controls?.dispose();clearTimeout(controlTimer);clearTimeout(resizeTimer);clearTimeout(restoreTimer);cancelAnimationFrame(frameId);observer?.disconnect();hud.dispose();profiler.dispose();disposeBatches(outgoing,scene,shadowScene);disposeBatches(current,scene,shadowScene);particles?.geometry.dispose();particles?.material.dispose();atlas?.dispose();pipeline?.dispose();shadowTarget?.dispose();environmentFallback?.dispose();assets.dispose();renderer.dispose();canvas.classList.remove('ready');
 }
 let observer=null,world;
 try{
  canvas.dataset.loadingStage='manifest';await assets.initialize();if(disposed)return;
  const particleDefaults={visible:true};scene.environmentIntensity=.48;
  controlGroupsList=controlGroups({tuning,tiers,quality,scene,camera,renderer,key,particles:particleDefaults,onMode:()=>{}});
  for(const group of controlGroupsList)for(const binding of group.rows){const id=group.id+'.'+binding.id;if(id in DEFAULT_SETTINGS&&id!=='playback.quality')binding.set(DEFAULT_SETTINGS[id]);}
  const initialAim=controlGroupsList.find(g=>g.id==='camera').target;camera.lookAt(initialAim.x,initialAim.y,initialAim.z);camera.updateProjectionMatrix();camera.updateMatrixWorld();
  world=placements(Math.max(3,canvas.clientWidth/Math.max(1,canvas.clientHeight)),tuning.spacing,tuning);
  atlas=new MotionAtlas(renderer,world.points,{encoded:!floatColor||params.get('encodedMotion')==='1'});
  canvas.dataset.loadingStage='environment';const environment=await assets.loadEnvironment();if(disposed)return;
  if(environment)scene.environment=environment;else{environmentFallback=runtimeEnvironment(renderer);scene.environment=environmentFallback.texture;}
  particles=ringParticles(world,1);particles.visible=particleDefaults.visible;scene.add(particles);
  controlGroupsList.find(g=>g.id==='particles').rows.find(b=>b.id==='visible').get=()=>particles.visible;
  controlGroupsList.find(g=>g.id==='particles').rows.find(b=>b.id==='visible').set=v=>{particles.visible=v;};
  pipeline=new LensPipeline(renderer,camera,{ldr,tier:tiers[quality.tier],referenceLens:params.get('lens')==='reference'});configureShadow(tiers[quality.tier]);resizeBuffers();
  canvas.dataset.loadingStage='meshes-and-shaders';current=await makeSet(tiers[quality.tier]);if(disposed||!current)return;attachBatches(current,scene,shadowScene);
  canvas.dataset.loadingStage='lens';await pipeline.warmup(renderer);if(shaderErrors.length)throw Error('Postprocessing shaders failed to compile.');
  if(disposed)return;
  readyMs=performance.now()-boot;ready=true;canvas.dataset.layout='ready';updateButton();renderFrame(performance.now(),false);canvas.classList.add('ready');canvas.dataset.state='ready';delete canvas.dataset.loadingStage;
  document.querySelector('#qa-status')?.replaceChildren(document.createTextNode('Ready'));
  controlGroupsList.find(g=>g.id==='playback').rows.find(b=>b.id==='quality').set=value=>quality.setMode(value,performance.now());
  if(!cleanUi)controls=createSceneControls({groups:controlGroupsList,onChange:changeControls,signal});
  button.addEventListener('click',()=>{paused=!paused;updateButton();schedule();},{signal});
  studyTime?.addEventListener('input',()=>{elapsed=Number(studyTime.value)||0;renderFrame(performance.now(),false);},{signal});
  const preference=matchMedia('(prefers-reduced-motion: reduce)');preference.addEventListener('change',()=>{paused=preference.matches;updateButton();schedule();},{signal});
  document.addEventListener('visibilitychange',()=>{schedule();},{signal});
  addEventListener('resize',onResize,{signal});
  viewportKey=`${canvas.clientWidth}:${canvas.clientHeight}:${devicePixelRatio}`;
  if(typeof ResizeObserver!=='undefined'){observer=new ResizeObserver(onResize);observer.observe(canvas);}
  addEventListener('pagehide',event=>{if(!event.persisted)dispose();},{signal});addEventListener('pageshow',event=>{if(event.persisted){onResize();schedule();}},{signal});
  canvas.addEventListener('webglcontextlost',event=>{
   event.preventDefault();lost=true;losses++;++job;cancelAnimationFrame(frameId);profiler.pending=[];profiler.active=null;canvas.classList.remove('ready');canvas.dataset.state='recovering';document.querySelector('#qa-status')?.replaceChildren(document.createTextNode('Recovering GPU context…'));
   restoreTimer=setTimeout(()=>{if(lost){dispose();onFatal(Error('GPU context could not recover.'));}},8000);
  },{signal});
  canvas.addEventListener('webglcontextrestored',async()=>{
   if(disposed)return;clearTimeout(restoreTimer);lost=false;profiler.ext=gl.getExtension('EXT_disjoint_timer_query_webgl2');profiler.stage={};
   if(losses>1&&!lockedHigh){quality.mode='auto';quality.tier='low';quality.scale=.8;hud.mode('auto');}
   resizeBuffers();await applyQuality(quality.snapshot('context restored'),{layout:true});renderFrame(performance.now(),false);canvas.classList.add('ready');document.querySelector('#qa-status')?.replaceChildren(document.createTextNode('Ready · context restored'));schedule();
  },{signal});
  if(diagnostics){
   document.addEventListener('field:quality',event=>{quality.setMode(lockedHigh?'high':event.detail?.mode||'auto',performance.now());},{signal});
   document.addEventListener('field:context-test',()=>{const extension=gl.getExtension('WEBGL_lose_context');extension?.loseContext();setTimeout(()=>extension?.restoreContext(),800);},{signal});
  }
  schedule();return {dispose,pause(){paused=true;updateButton();schedule();},play(){paused=false;updateButton();schedule();},snapshot:()=>profiler.latest||lastCounts};
 }catch(error){dispose();throw error;}
}
