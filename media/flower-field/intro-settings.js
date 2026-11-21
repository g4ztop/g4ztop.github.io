import {DEFAULT_SETTINGS} from './defaults.js';
export const INTRO_DEFAULTS=Object.freeze(Object.fromEntries(Object.entries(DEFAULT_SETTINGS).filter(([key])=>key.startsWith('intro.')).map(([key,value])=>[key.slice(6),value])));
export const intro={...INTRO_DEFAULTS};
try{const saved=JSON.parse(sessionStorage.getItem('flower-scene-settings-v1')||'{}');for(const key of Object.keys(intro)){const value=saved['intro.'+key];if(typeof value===typeof intro[key]&&(typeof value!=='number'||Number.isFinite(value)))intro[key]=value;}}catch{}
export const INTRO_FONTS=['Space Grotesk','Syne','Unbounded','Outfit','Manrope','Sora','Archivo Black','DM Serif Display','Space Mono','Georgia'];
export function introGroups(){
 const rows=[];const add=(id,label,min,max,step=1,extra={})=>rows.push({id,label,min,max,step,effect:'intro',default:INTRO_DEFAULTS[id],get:()=>intro[id],set:value=>{intro[id]=value;document.dispatchEvent(new CustomEvent('field:intro-settings'));},...extra});
 add('font','Typeface',0,0,1,{options:INTRO_FONTS});add('weight','Weight',300,700,10);add('size','Desktop size (vw)',3,15,.1);add('mobileSize','Phone size (vw)',6,24,.1);add('tracking','Letter spacing (em)',-.12,.15,.005);add('lineHeight','Line height',.8,1.6,.01);add('width','Maximum width',280,1800,10);add('color','Text color',0,0,1,{type:'color'});add('align','Alignment',0,0,1,{options:['left','center','right']});add('uppercase','All caps',0,1,1,{type:'checkbox'});add('x','Horizontal offset (%)',-25,25,.5);add('y','Vertical offset (%)',-30,30,.5);
 const type={id:'intro',name:'Intro · typography',open:true,rows:[...rows]};rows.length=0;
 for(let i=1;i<=3;i++){add('message'+i,'Message '+i,0,0,1,{type:'text'});add('hold'+i,'Message '+i+' hold (ms)',250,6000,50);}
 add('preview','Preview message',0,0,1,{options:[{value:'0',label:'1 · You’ve made it'},{value:'1',label:'2 · Under construction'},{value:'2',label:'3 · I’m sorry'}]});
 const copy={id:'intro',name:'Intro · messages',rows:[...rows]};rows.length=0;
 for(const [id,label,min,max,step] of [['fadeIn','Text fade in (ms)',0,3000,50],['fadeOut','Text fade out (ms)',0,3000,50],['gap','Between messages (ms)',0,2000,50],['sceneDelay','Scene-only pause (ms)',0,5000,50],['sceneFade','Scene fade (ms)',0,3000,50],['uiFade','Homepage fade (ms)',0,3000,50],['overlayFade','Final overlay fade (ms)',0,2000,50],['loaderMin','Minimum loader (ms)',0,3000,50],['spinnerSize','Spinner size',24,140,2],['spinnerPeriod','Spinner turn (seconds)',.5,8,.1],['blur','Text entrance blur (px)',0,20,1],['slide','Text entrance travel (px)',-80,80,2],['scale','Text entrance scale',.7,1.3,.01]])add(id,label,min,max,step);
 add('easing','Easing',0,0,1,{options:[{value:'cubic-bezier(.22,1,.36,1)',label:'Soft ease out'},{value:'ease-in-out',label:'Ease in / out'},{value:'linear',label:'Linear'},{value:'cubic-bezier(.34,1.56,.64,1)',label:'Playful overshoot'}]});
 const motion={id:'intro',name:'Intro · animation',rows:[...rows]};
 const actions={id:'intro-actions',name:'Intro · preview',open:true,rows:[['Replay entrance','field:intro-replay'],['Live text preview','field:intro-preview'],['Show homepage','field:intro-finish']].map(([label,event],i)=>({id:'action'+i,label,action:()=>document.dispatchEvent(new CustomEvent(event))}))};
 return [actions,type,copy,motion];
}
