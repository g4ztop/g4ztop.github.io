import {introGroups} from './intro-settings.js';
import {DEFAULT_SETTINGS} from './defaults.js';
// Temporary, local scene editor. Bindings read/write actual renderer settings.
export function createSceneControls({groups,onChange,signal}){
 const local=['localhost','127.0.0.1','[::1]'].includes(location.hostname);
 const params=new URLSearchParams(location.search);
 if(params.get('controls')==='0'||(document.querySelector('#study-time,#report')&&params.get('controls')!=='1'))return {dispose(){},sync(){}};
 groups=[...introGroups(),...groups];if(local||params.get('controls')==='1')document.body.dataset.editingIntro='true';
 const root=document.createElement('aside');root.id='scene-controls';root.setAttribute('aria-label','Temporary scene controls');
 const toggle=document.createElement('button');toggle.id='scene-controls-toggle';toggle.textContent='Scene controls';toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-controls',root.id);
 root.innerHTML='<header><strong>SCENE CONTROLS</strong><button type="button" aria-label="Close scene controls">×</button></header><p>Temporary · changes stay in this browser session</p><div class="control-groups"></div><div class="control-actions"><button type="button" data-action="reset">Reset all</button><button type="button" data-action="export">Copy settings JSON</button></div><details data-settings-json><summary>Import / export settings</summary><textarea aria-label="Scene settings JSON" spellcheck="false"></textarea><button type="button" data-action="import">Apply JSON</button></details><output role="status" class="control-status">Ready</output>';
 const bindings=new Map(),inputs=new Map(),defaults={},effects=new Set();let raf=0,saving=0;
 const status=root.querySelector('output'),json=root.querySelector('textarea');
 const snapshot=()=>Object.fromEntries([...bindings].map(([id,b])=>[id,b.get()]));
 function flush(){raf=0;const dirty=[...effects];effects.clear();Promise.resolve(onChange(dirty)).catch(error=>{status.textContent=error.message;});clearTimeout(saving);saving=setTimeout(()=>{try{sessionStorage.setItem('flower-scene-settings-v1',JSON.stringify(snapshot()));}catch{}},250);}
 function schedule(effect='render'){effects.add(effect);if(!raf)raf=requestAnimationFrame(flush);}
 function sync(id){const b=bindings.get(id),els=inputs.get(id),value=b.get();for(const input of els){if(input.type==='checkbox')input.checked=!!value;else input.value=String(value);} }
 function assign(id,value){const b=bindings.get(id);if(!b)return;if(b.type==='checkbox')value=value===true;else if(b.type==='color'){if(!/^#[0-9a-f]{6}$/i.test(value))throw Error('Use a six-digit hex color.');}else if(b.type==='text'){value=String(value).slice(0,180);}else if(!b.options){value=Number(value);if(!Number.isFinite(value))throw Error('Use a finite number.');value=Math.max(b.min??-Infinity,Math.min(b.max??Infinity,value));if(b.integer)value=Math.round(value);}else if(!b.options.some(o=>(typeof o==='string'?o:o.value)===String(value)))throw Error('Unknown setting option.');if(Object.is(b.get(),value)){sync(id);return;}b.set(value);sync(id);schedule(b.effect);}
 for(const group of groups){
  const section=document.createElement('details');section.open=!!group.open;const summary=document.createElement('summary');summary.textContent=group.name;section.append(summary);
  for(const b of group.rows){
   if(b.action){const action=document.createElement('button');action.type='button';action.textContent=b.label;action.addEventListener('click',b.action,{signal});section.append(action);continue;}
   const id=group.id+'.'+b.id;bindings.set(id,b);defaults[id]=b.default??DEFAULT_SETTINGS[id]??b.get();
   const row=document.createElement('label');row.className='control-row';const caption=document.createElement('span');caption.textContent=b.label;row.append(caption);const els=[];
   const make=type=>{const input=document.createElement('input');input.type=type;input.setAttribute('aria-label',group.name+' · '+b.label+(type==='range'?' slider':''));for(const key of ['min','max','step'])if(b[key]!=null)input[key]=String(b[key]);input.addEventListener('input',()=>{if(input.value===''&&type!=='checkbox')return;try{assign(id,type==='checkbox'?input.checked:input.value);status.textContent='Updated '+b.label;}catch(error){status.textContent=error.message;}},{signal});row.append(input);els.push(input);return input;};
   if(b.options){const select=document.createElement('select');select.setAttribute('aria-label',group.name+' · '+b.label);for(const o of b.options){const option=document.createElement('option');option.value=typeof o==='string'?o:o.value;option.textContent=typeof o==='string'?o:o.label;select.append(option);}select.addEventListener('change',()=>assign(id,select.value),{signal});row.append(select);els.push(select);}
   else if(b.type==='color'||b.type==='checkbox'||b.type==='text')make(b.type);
   else{make('range');make('number');}
   inputs.set(id,els);sync(id);section.append(row);
  }
  root.querySelector('.control-groups').append(section);
 }
 function setOpen(open){if(open)document.body.dataset.editingIntro='true';root.hidden=!open;toggle.setAttribute('aria-expanded',String(open));}
 toggle.addEventListener('click',()=>setOpen(root.hidden),{signal});root.querySelector('header button').addEventListener('click',()=>setOpen(false),{signal});
 root.querySelector('[data-action="reset"]').addEventListener('click',()=>{for(const [id,value] of Object.entries(defaults))assign(id,value);try{sessionStorage.removeItem('flower-scene-settings-v1');}catch{}status.textContent='Default scene restored';},{signal});
 root.querySelector('[data-action="export"]').addEventListener('click',async()=>{json.value=JSON.stringify({version:1,settings:snapshot()},null,2);root.querySelector('[data-settings-json]').open=true;try{await navigator.clipboard.writeText(json.value);status.textContent='Settings copied';}catch{json.focus();json.select();status.textContent='Select and copy settings below';}},{signal});
 root.querySelector('[data-action="import"]').addEventListener('click',()=>{try{const data=JSON.parse(json.value),values=data.settings||data;if(!values||typeof values!=='object'||Array.isArray(values))throw Error('Expected a settings object.');for(const [id,value] of Object.entries(values))if(bindings.has(id))assign(id,value);status.textContent='Settings applied';}catch(error){status.textContent='Import: '+error.message;}},{signal});
 if(!local&&params.get('controls')!=='1'){root.hidden=true;toggle.setAttribute('aria-expanded','false');}
 document.body.append(root,toggle);
 try{const saved=JSON.parse(sessionStorage.getItem('flower-scene-settings-v1')||'null');if(saved)for(const [id,value] of Object.entries(saved))if(bindings.has(id)&&!(id==='playback.quality'&&params.has('quality'))&&value!==bindings.get(id).get())assign(id,value);}catch{status.textContent='Saved controls could not be restored';}
 return {dispose(){cancelAnimationFrame(raf);clearTimeout(saving);root.remove();toggle.remove();},sync(){for(const id of bindings.keys())sync(id);}};
}
