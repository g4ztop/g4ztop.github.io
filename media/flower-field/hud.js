export function createHud({mode,onMode,signal,hidden=false}){
 if(hidden)return {update(){},paused(){},mode(){},busy(){},dispose(){}};
 const params=new URLSearchParams(location.search),local=['127.0.0.1','localhost','[::1]'].includes(location.hostname);
 const control=document.createElement('label');control.id='field-quality';control.innerHTML='<span>Quality</span><select aria-label="Rendering quality"><option value="auto">Auto</option><option value="high">High</option><option value="balanced">Balanced</option><option value="low">Low</option></select>';
 const select=control.querySelector('select');select.value=mode;select.addEventListener('change',()=>onMode(select.value),{signal});document.body.append(control);
 let panel=null,fields={},lastPaint=0,paused=false,snapshot=null;
 if(local||params.get('stats')==='1'){
  document.querySelector('#field-stats')?.remove();panel=document.createElement('aside');panel.id='field-stats';panel.setAttribute('aria-label','Temporary rendering statistics');
  const rows=[['fps','FPS'],['ms','Frame ms'],['scene','Scene tris'],['gpuTris','Tris / frame¹'],['calls','Draw calls¹'],['flowers','Flowers'],['size','Render size'],['quality','Quality']];
  const timings=[['gpu','GPU ms²'],['cpu','CPU ms'],['p95','Frame p95'],['motion','Motion ms²'],['shadows','Shadows ms²'],['beauty','Flowers ms²'],['focus','Focus ms²'],['composite','Composite ms²'],['load','Ready ms'],['memory','Assets ~ MiB']];
  const dl=items=>'<dl>'+items.map(([id,label])=>`<dt>${label}</dt><dd data-stat="${id}">—</dd>`).join('')+'</dl>';
  panel.innerHTML='<div class="stats-heading"><span>LIVE STATS</span><button type="button" aria-label="Hide stats (S)" title="Hide stats (S)">×</button></div>'+dl(rows)+'<details><summary>Timing details</summary>'+dl(timings)+'</details><small>¹ All passes · ² When supported<br>S to toggle</small>';
  fields=Object.fromEntries([...panel.querySelectorAll('[data-stat]')].map(e=>[e.dataset.stat,e]));panel.hidden=params.get('stats')==='0';document.body.append(panel);
  panel.querySelector('button').addEventListener('click',()=>{panel.hidden=true;},{signal});
  addEventListener('keydown',event=>{if(event.code!=='KeyS'||event.repeat||event.metaKey||event.ctrlKey||event.altKey||event.target.isContentEditable||/^(INPUT|SELECT|TEXTAREA)$/.test(event.target.tagName))return;panel.hidden=!panel.hidden;paint(true);},{signal});
 }
 const number=new Intl.NumberFormat('en-US'),fixed=value=>value==null?'n/a':value.toFixed(1);
 function paint(force=false){
  const now=performance.now();if(!panel||panel.hidden||!snapshot||(!force&&now-lastPaint<400))return;lastPaint=now;
  const s=snapshot,stage=s.gpuStages||{};const values={fps:paused?'Paused':s.fps?fixed(s.fps):'…',ms:paused?'—':s.mean?fixed(s.mean):'…',scene:number.format(s.sceneTriangles||0),gpuTris:number.format(s.triangles||0),calls:number.format(s.calls||0),flowers:number.format(s.flowers||0),size:`${s.width} × ${s.height}`,quality:`${s.tier}${s.mode==='auto'?' · Auto':''}`,gpu:fixed(s.gpuMs),cpu:fixed(s.cpuMs),p95:s.p95?fixed(s.p95):'…',motion:fixed(stage.motion),shadows:fixed(stage.shadows),beauty:fixed(stage.beauty),focus:fixed(stage.focus),composite:fixed(stage.composite),load:s.readyMs?Math.round(s.readyMs):'…',memory:s.assetMiB?fixed(s.assetMiB):'…'};
  for(const [key,value] of Object.entries(values))fields[key].textContent=value;
 }
 return {update(value){snapshot=value;paint();},paused(value){paused=value;paint(true);},mode(value){select.value=value;},busy(value){control.dataset.busy=String(value);select.title=value?'Preparing quality level…':'';},dispose(){control.remove();panel?.remove();}};
}
