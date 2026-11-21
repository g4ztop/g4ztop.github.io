import {intro} from './intro-settings.js';
export function createArrival(){
 const root=document.querySelector('#arrival');if(!root)return {reveal(){}};
 const page=document.querySelector('.page'),line=root.querySelector('.arrival-line'),skip=root.querySelector('.arrival-skip');
 let created=performance.now(),started=false,finished=false,run=0,preview=false;const animations=new Set();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');page.inert=true;
 const timer=setTimeout(()=>void reveal(),20000);
 function apply(){
  const vars={'font':`"${intro.font}",Arial,sans-serif`,weight:intro.weight,size:intro.size+'vw','mobile-size':intro.mobileSize+'vw',tracking:intro.tracking+'em','line-height':intro.lineHeight,width:intro.width+'px',color:intro.color,align:intro.align,case:intro.uppercase?'uppercase':'none',x:intro.x+'vw',y:intro.y+'vh','spinner-size':intro.spinnerSize+'px','spinner-period':intro.spinnerPeriod+'s'};
  for(const [key,value] of Object.entries(vars))root.style.setProperty?.('--intro-'+key,String(value));
  document.documentElement?.style.setProperty('--scene-fade',intro.sceneFade+'ms');document.documentElement?.style.setProperty('--ui-fade',intro.uiFade+'ms');
  if(preview)line.textContent=intro['message'+(Number(intro.preview)+1)];
 }
 function finish(){if(finished)return;finished=true;preview=false;run++;clearTimeout(timer);for(const animation of animations)animation.cancel();animations.clear();page.inert=false;document.body.dataset.intro='complete';root.remove();}
 skip.addEventListener('click',finish);
 const alive=token=>!finished&&token===run;
 async function fade(element,from,to,duration,token){
  if(!alive(token))return;if(!element.animate){element.style.opacity=String(to);return;}
  const special=element===line&&!reduced.matches;
  const frame=opacity=>({opacity,...(special?{filter:`blur(${opacity===0?intro.blur:0}px)`,translate:`0 ${opacity===0?intro.slide:0}px`,scale:opacity===0?intro.scale:1}:{})});
  const animation=element.animate([frame(from),frame(to)],{duration:reduced.matches?0:duration,easing:intro.easing,fill:'forwards'});animations.add(animation);
  try{await animation.finished;}catch{}finally{animations.delete(animation);}if(alive(token)){element.style.opacity=String(to);animation.cancel();}
 }
 const wait=ms=>new Promise(resolve=>setTimeout(resolve,reduced.matches?Math.min(ms,900):ms));
 async function reveal(){
  if(started||finished)return;started=true;const token=run;clearTimeout(timer);apply();await wait(Math.max(0,intro.loaderMin-(performance.now()-created)));if(!alive(token))return;
  document.body.dataset.intro='scene';skip.hidden=false;
  await wait(Math.max(intro.sceneFade,intro.sceneDelay));if(!alive(token))return;
  for(let i=1;i<=3;i++){
   if(!alive(token))return;document.body.dataset.intro='message';line.textContent=intro['message'+i];
   await fade(line,0,1,intro.fadeIn,token);if(!alive(token))return;await wait(intro['hold'+i]);if(!alive(token))return;await fade(line,1,0,intro.fadeOut,token);if(!alive(token))return;await wait(intro.gap);
  }
  if(alive(token))await fade(root,1,0,intro.overlayFade,token);if(alive(token))finish();
 }
 function reset(){run++;for(const animation of animations)animation.cancel();animations.clear();started=false;finished=false;preview=false;created=performance.now();root.style.opacity='1';line.style.opacity='0';line.textContent='';skip.hidden=true;page.inert=true;if(!root.isConnected)document.body.append(root);apply();}
 document.addEventListener?.('field:intro-settings',apply);
 document.addEventListener?.('field:intro-replay',()=>{reset();document.body.dataset.intro='loading';void reveal();});
 document.addEventListener?.('field:intro-preview',()=>{reset();started=true;preview=true;document.body.dataset.intro='message';skip.hidden=false;line.style.opacity='1';apply();});
 document.addEventListener?.('field:intro-finish',finish);
 apply();return {reveal};
}
