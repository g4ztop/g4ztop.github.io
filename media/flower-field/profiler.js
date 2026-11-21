export function percentile(values,p){if(!values.length)return 0;const sorted=[...values].sort((a,b)=>a-b);return sorted[Math.min(sorted.length-1,Math.floor((sorted.length-1)*p))];}
export class FrameProfiler {
 constructor(renderer,{enabled=true}={}){
  this.renderer=renderer;this.gl=renderer.getContext();this.ext=enabled?this.gl.getExtension('EXT_disjoint_timer_query_webgl2'):null;
  this.pending=[];this.active=null;this.stage={};this.intervals=[];this.rafIntervals=[];this.cpu=[];this.last=0;this.lastRaf=0;this.renderCount=0;this.latest=null;this.errors=[];
 }
 begin(name){if(!this.ext||this.active||this.pending.length>24||this.renderCount%(this.sampleEvery||1)!==0)return;const query=this.gl.createQuery();if(!query)return;this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,query);this.active={name,query};}
 end(){if(!this.active)return;this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);this.pending.push(this.active);this.active=null;}
 poll(){
  if(!this.ext||!this.pending.length||this.gl.isContextLost())return;
  const disjoint=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);
  while(this.pending.length){const item=this.pending[0];if(!disjoint&&!this.gl.getQueryParameter(item.query,this.gl.QUERY_RESULT_AVAILABLE))break;
   this.pending.shift();if(!disjoint){const ms=this.gl.getQueryParameter(item.query,this.gl.QUERY_RESULT)/1e6;this.stage[item.name]=this.stage[item.name]==null?ms:this.stage[item.name]*.8+ms*.2;}
   this.gl.deleteQuery(item.query);
  }
  if(disjoint)this.stage={};
 }
 raf(now){if(this.lastRaf)this.push(this.rafIntervals,now-this.lastRaf);this.lastRaf=now;}
 frame(now,cpu,counts){
  if(this.last)this.push(this.intervals,now-this.last);this.last=now;this.push(this.cpu,cpu);this.renderCount++;this.poll();
  const mean=this.intervals.length?this.intervals.reduce((a,b)=>a+b,0)/this.intervals.length:0;
  const gpuValues=Object.values(this.stage),gpuMs=gpuValues.length?gpuValues.reduce((a,b)=>a+b,0):null;
  this.latest={...counts,frames:this.intervals.length,fps:mean?1000/mean:0,mean,p95:percentile(this.intervals,.95),rafP95:percentile(this.rafIntervals,.95),cpuMs:this.cpu.reduce((a,b)=>a+b,0)/Math.max(1,this.cpu.length),gpuMs,gpuStages:{...this.stage},gpuTimerAvailable:!!this.ext,totalFrames:this.renderCount};
  return this.latest;
 }
 push(array,value){if(value>0&&value<1000){array.push(value);if(array.length>180)array.shift();}}
 reset(){this.last=this.lastRaf=0;this.intervals=[];this.rafIntervals=[];this.cpu=[];}
 dispose(){this.end();for(const {query} of this.pending)this.gl.deleteQuery(query);this.pending=[];}
}
