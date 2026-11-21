// Pure policy: no device-name lookup and no dependency on viewport width.
export const TIERS=Object.freeze({
 low:Object.freeze({name:'Low',rank:0,fps:30,maxDpr:1,maxPixels:750000,msaa:0,blurScale:1,blurTaps:16,shadowSize:512,shadowLod:3,shadowRange:28,minLod:1,texture:'low',physical:false}),
 balanced:Object.freeze({name:'Balanced',rank:1,fps:60,maxDpr:1.25,maxPixels:1600000,msaa:0,blurScale:1,blurTaps:16,shadowSize:1024,shadowLod:2,shadowRange:36,minLod:1,texture:'balanced',physical:true}),
 high:Object.freeze({name:'High',rank:2,fps:60,maxDpr:1.5,maxPixels:8300000,msaa:4,blurScale:1,blurTaps:16,shadowSize:2048,shadowLod:1,shadowRange:48,minLod:0,texture:'high',physical:true}),
});
export const TIER_NAMES=['low','balanced','high'];
export function validMode(value){return ['auto',...TIER_NAMES].includes(value)?value:'auto';}
export function drawingSize(width,height,dpr,tier,scale=1){
 const area=Math.max(1,width*height),ratio=Math.min(Math.max(.5,dpr||1),tier.maxDpr,Math.sqrt(tier.maxPixels/area))*Math.max(.6,Math.min(1,scale));
 return {width:Math.max(1,Math.round(width*ratio)),height:Math.max(1,Math.round(height*ratio)),ratio};
}
export function chooseLod(point,cameraDepth,focalPixels,tier){
 // Use the closest plausible wave position. Focus motion cannot reveal a mesh
 // that was simplified for a temporarily blurred frame.
 const depth=Math.max(.5,cameraDepth-1.6),diameter=.58*point.size*focalPixels/depth;
 let lod;
 if(tier.rank===2)lod=diameter>48?0:diameter>18?1:diameter>7?2:3;
 else if(tier.rank===1)lod=diameter>72?0:diameter>22?1:diameter>9?2:3;
 else lod=diameter>34?1:diameter>13?2:3;
 return Math.max(tier.minLod,lod);
}
export class QualityController {
 constructor({mode='auto',saveData=false,onChange=()=>{},tiers=TIERS}={}){
  this.tiers=tiers;this.mode=validMode(mode);this.tier=this.mode==='auto'?(saveData?'low':'balanced'):this.mode;
  this.scale=1;this.saveData=saveData;this.onChange=onChange;this.cooldown=0;this.slowSince=0;this.fastSince=0;
 }
 setMode(value,now=0){this.mode=validMode(value);this.slowSince=this.fastSince=0;this.cooldown=now+3000;if(this.mode!=='auto')this.change(this.mode,1,'manual');else this.onChange(this.snapshot('auto'));}
 snapshot(reason='steady'){return {mode:this.mode,tier:this.tier,scale:this.scale,reason};}
 change(tier,scale,reason){this.tier=tier;this.scale=Number(scale.toFixed(2));this.slowSince=this.fastSince=0;this.onChange(this.snapshot(reason));}
 observe(sample,now){
  if(this.mode!=='auto'||now<this.cooldown||sample.frames<20)return;
  const target=this.tiers[this.tier].fps,budget=1000/target;
  const slow=sample.p95>budget*1.38||sample.mean>budget*1.2;
  const gpu=sample.gpuMs,headroom=gpu!=null?gpu<10.5&&sample.cpuMs<6:(sample.rafP95||sample.p95)<18.5&&sample.cpuMs<5;
  const fast=!slow&&sample.p95<budget*1.16&&headroom;
  this.slowSince=slow?(this.slowSince||now):0;this.fastSince=fast?(this.fastSince||now):0;
  if(this.slowSince&&now-this.slowSince>2200){
   this.cooldown=now+5000;
   if(this.scale>.72)this.change(this.tier,Math.max(.7,this.scale-.1),'sustained frame cost');
   else if(this.tiers[this.tier].rank>0)this.change(TIER_NAMES[this.tiers[this.tier].rank-1],1,'lower detail budget');
   else this.slowSince=0;
  }else if(this.fastSince&&now-this.fastSince>12000){
   this.cooldown=now+10000;
   if(this.scale<.99)this.change(this.tier,Math.min(1,this.scale+.05),'sustained headroom');
   else if(this.tier!=='high'&&!this.saveData)this.change(TIER_NAMES[this.tiers[this.tier].rank+1],.85,'higher detail budget');
   else this.fastSince=0;
  }
 }
 reset(now=0){this.slowSince=this.fastSince=0;this.cooldown=now+3000;}
}
