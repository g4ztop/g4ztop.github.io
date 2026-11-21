export function createTuning(){return {
 interactionEnabled:true,interactionRadius:8,interactionStrength:.55,
 timeScale:1,waveAmplitude:1,waveScale:1,mainHeight:2.8,fineHeight:.6,broadHeight:2,orbitRadius:1.54,ridgeStrength:1,slopeStrength:.34,
 focusEnabled:true,focusNear:11.5,focusFar:20,nearBlur:14,farBlur:11,maxBlur:6,focusDrift:1,stutterStrength:1,focusOffset:0,lensSamples:16,vignette:.16,
 variant0:.20,variant1:.16,variant2:.08,variant3:.16,variant4:.16,variant5:.06,variant6:.08,variant7:.10,spacing:.54,minZ:-28,maxZ:11,fieldWidth:90,jitter:.85,seed:62423,minScale:.82,maxScale:1.14,tilt:.18,lodScale:1,lodOverride:-1,
 flowerColor:'#ffffff',roughnessMin:.26,roughnessMax:.55,clearcoat:.65,coatRoughness:.2,
 shadows:true,shadowExtent:0,linkArea:true,particleCount:180,particleSize:1,particleOpacity:1,
 };}
export function controlGroups({tuning:t,tiers,quality,scene,camera,renderer,key,particles,onMode}){
 const groups=[];
 const group=(id,name,open=false)=>{const g={id,name,open,rows:[]};groups.push(g);return g;};
 const row=(g,obj,id,label,min,max,step=.01,effect='render',extra={})=>{const b={id,label,min,max,step,effect,get:()=>obj[id],set:value=>{obj[id]=value;},...extra};g.rows.push(b);return b;};
 const toggle=(g,obj,id,label,effect)=>row(g,obj,id,label,0,1,1,effect,{type:'checkbox'});
 const color=(g,obj,id,label)=>row(g,obj,id,label,0,1,1,'render',{type:'color',get:()=>obj[id].isColor?'#'+obj[id].getHexString():obj[id],set:value=>{if(obj[id].isColor)obj[id].set(value);else obj[id]=value;}});
 const vector=(g,object,prefix,label,min=-60,max=60,effect='render')=>{for(const axis of ['x','y','z'])g.rows.push({id:prefix+'.'+axis,label:label+' '+axis.toUpperCase(),min,max,step:.1,effect,get:()=>object[axis],set:value=>{object[axis]=value;}});};
 let g=group('playback','Playback & performance',true);
 g.rows.push({id:'quality',label:'Quality',options:['auto','high','balanced','low'],get:()=>quality.mode,set:onMode,effect:'render'});
 row(g,t,'timeScale','Animation speed',0,3,.05);row(g,renderer,'toneMappingExposure','Exposure',.1,3,.05);row(g,scene,'environmentIntensity','Reflections',0,2,.01);row(g,scene.fog,'density','Fog density',0,.05,.001);g.rows.push({id:'background',label:'Background',type:'color',get:()=>'#'+scene.background.getHexString(),set:v=>scene.background.set(v)});
 for(const [name,tier] of Object.entries(tiers)){
  const q=group('tier-'+name,name[0].toUpperCase()+name.slice(1)+' render budget');
  row(q,tier,'fps','Frame cap',15,120,1,'render',{integer:true});row(q,tier,'maxDpr','Maximum pixel ratio',.5,2,.05,'resize');row(q,tier,'maxPixels','Maximum pixels',250000,8300000,50000,'resize',{integer:true});
  row(q,tier,'msaa','MSAA request',0,4,1,'layout',{integer:true});row(q,tier,'shadowSize','Shadow-map size',256,4096,256,'shadow',{integer:true});row(q,tier,'shadowLod','Shadow mesh LOD',0,3,1,'layout',{integer:true});row(q,tier,'minLod','Minimum mesh LOD',0,3,1,'layout',{integer:true});
  toggle(q,tier,'physical','Clearcoat material','layout');row(q,tier,'texture','Texture tier',0,0,1,'layout',{options:['high','balanced','low']});
 }
 g=group('camera','Camera');row(g,camera,'fov','Field of view',20,75,.5,'layout');row(g,camera,'near','Near clip',.02,.5,.01,'camera');row(g,camera,'far','Far clip',40,180,1,'camera');vector(g,camera.position,'position','Position',-40,40,'layout');
 const aim={x:0,y:-1.6,z:-12};vector(g,aim,'target','Target',-40,40,'layout');g.target=aim;
 g=group('field','Field & mesh distribution');
 for(const [id,label,min,max,step] of [['spacing','Flower spacing',.42,1.2,.01],['fieldWidth','Field width',20,120,1],['minZ','Field start Z',-50,-10,1],['maxZ','Field end Z',0,11,1],['jitter','Scatter randomness',0,1,.01],['seed','Scatter seed',1,999999,1],['minScale','Minimum flower size',.4,1.5,.01],['maxScale','Maximum flower size',.5,2,.01],['tilt','Random tilt',0,.5,.01]])row(g,t,id,label,min,max,step,'world');
 row(g,t,'lodScale','Mesh detail multiplier',.5,2,.05,'layout');row(g,t,'lodOverride','Force LOD (-1 auto)',-1,3,1,'layout',{integer:true});
 g=group('varieties','Flower varieties');for(let i=0;i<8;i++)row(g,t,'variant'+i,'Specimen '+(i+1)+' weight',0,1,.01,'world');
 g=group('motion','Terrain motion');for(const [id,label,min,max,step] of [['waveAmplitude','Wave amplitude',0,2,.01],['waveScale','Noise frequency',.25,2,.01],['mainHeight','Main wave height',0,6,.05],['fineHeight','Fine wave height',0,2,.05],['broadHeight','Broad wave height',0,5,.05],['orbitRadius','Noise orbit radius',0,3,.01],['ridgeStrength','Ridge strength',0,1.5,.01],['slopeStrength','Flower lean',0,.8,.01]])row(g,t,id,label,min,max,step);
 g=group('focus','Focus & lens');toggle(g,t,'focusEnabled','Depth of field');for(const [id,label,min,max,step] of [['focusNear','Near focus distance',2,35,.1],['focusFar','Far focus distance',5,55,.1],['nearBlur','Foreground blur',0,28,.1],['farBlur','Distance blur',0,28,.1],['maxBlur','Maximum blur radius',0,12,.1],['focusDrift','Focus drift strength',0,2,.01],['stutterStrength','Focus stutter strength',0,2,.01],['focusOffset','Focus offset',-8,8,.1],['lensSamples','Blur samples',4,32,4],['vignette','Vignette',0,.8,.01]])row(g,t,id,label,min,max,step,'render',{integer:id==='lensSamples',...(id==='lensSamples'?{set:value=>{t.lensSamples=Math.round(value/4)*4;}}:{})});
 g=group('material','Flower material');color(g,t,'flowerColor','Flower tint');row(g,t,'roughnessMin','Petal roughness',.08,1,.01);row(g,t,'roughnessMax','Stem roughness',.08,1,.01);row(g,t,'clearcoat','Clearcoat',0,1,.01);row(g,t,'coatRoughness','Clearcoat roughness',.08,1,.01);
 g=group('shadows','Shadows');toggle(g,t,'shadows','Dynamic shadows');row(g,t,'shadowExtent','Coverage (0 automatic)',0,45,.5,'shadow');row(g,key.shadow,'bias','Depth bias',-.003,.003,.00001);row(g,key.shadow,'normalBias','Normal bias',0,.15,.001);row(g,key.shadow,'radius','Filter radius',0,5,.1);
 if(renderer.shadowMap)g.rows.push({id:'filter',label:'Shadow filtering',options:[{value:'0',label:'Basic'},{value:'1',label:'PCF'},{value:'2',label:'Soft PCF'}],effect:'layout',get:()=>String(renderer.shadowMap.type),set:value=>{renderer.shadowMap.type=Number(value);}});
 row(g,key.shadow.camera,'near','Shadow near clip',.01,2,.01,'shadow');row(g,key.shadow.camera,'far','Shadow far clip',20,100,1,'shadow');
 let lightIndex=0;scene.traverse(light=>{if(!light.isLight)return;const l=group('light-'+lightIndex++,light.name||(light.isHemisphereLight?'Ambient sky':light.type));toggle(l,light,'visible','Enabled',light===key?'shadow':'render');color(l,light,'color','Color');const intensity=row(l,light,'intensity','Intensity',0,light.isPointLight?150:light.isSpotLight?800:light.isRectAreaLight?4:6,light.isSpotLight||light.isPointLight?1:.01);if(light.isPointLight){intensity.get=()=>light.userData.baseIntensity;intensity.set=v=>{light.userData.baseIntensity=v;};row(l,light.userData,'flickerStrength','Flicker strength',0,.5,.01);row(l,light.userData,'flickerCycles','Flicker cycles / minute',0,4,1,'render',{integer:true});row(l,light.userData,'flickerPhase','Flicker phase',0,6.28,.01);}
  if(light.isHemisphereLight){color(l,light,'groundColor','Ground color');return;}
  vector(l,light.position,'position','Position',-60,60,light===key?'shadow':'render');if(light.target)vector(l,light.target.position,'target','Target',-60,60,light===key?'shadow':'render');
  if('distance' in light){row(l,light,'distance','Range (0 unlimited)',0,85,.5);row(l,light,'decay','Falloff',0,3,.05);}
  if(light.isSpotLight){row(l,light,'angle','Cone angle (radians)',.1,1.55,.01);row(l,light,'penumbra','Soft edge',0,1,.01);}
  if(light.isRectAreaLight){toggle(l,t,'linkArea','Match field footprint');for(const id of ['width','height'])row(l,light,id,id==='width'?'Width':'Length',1,150,.5,'render',{set:v=>{if(v!==(id==='width'?t.fieldWidth:t.maxZ-t.minZ))t.linkArea=false;light[id]=v;}});for(const axis of ['x','y','z'])l.rows.push({id:'rotation.'+axis,label:'Rotation '+axis.toUpperCase()+' (degrees)',min:-180,max:180,step:1,get:()=>light.rotation[axis]*180/Math.PI,set:v=>{light.rotation[axis]=v*Math.PI/180;}});}
 });
 g=group('interaction','Pointer & touch');toggle(g,t,'interactionEnabled','Flowers follow pointer');row(g,t,'interactionRadius','Reach',2,20,.5);row(g,t,'interactionStrength','Turn strength',0,.8,.01);
 g=group('particles','Airborne particles');toggle(g,particles,'visible','Visible');row(g,t,'particleCount','Count',0,500,1,'world',{integer:true});row(g,t,'particleSize','Size',.1,3,.05);row(g,t,'particleOpacity','Opacity',0,3,.05);
 return groups;
}

export function pointLightIntensity(base,strength,cycles,phase,timePhase){if(!cycles||!strength)return base;const angle=timePhase*cycles+phase;return base*(1+strength*(.65*Math.sin(angle)+.35*Math.sin(angle*2+.7)));}
