import {createArrival} from './arrival.js';
const arrival=createArrival();
const canvas=document.querySelector('#flower-field'),button=document.querySelector('#motion')||document.createElement('button');
const preference=matchMedia('(prefers-reduced-motion: reduce)');let active=null,loading=false;
async function load(play){
 if(loading)return;loading=true;button.disabled=true;
 try{
  const context=canvas.getContext('webgl2',{alpha:false,antialias:false,powerPreference:'high-performance'});
  if(!context)throw Error('WebGL 2 is unavailable');
  const {startField}=await import('./engine.js');
  active=await startField({canvas,button,context,playOnStart:play,onFatal:fallback});
  void arrival.reveal();
 }catch(error){fallback(error);}
 finally{loading=false;button.disabled=false;}
}
function fallback(error){
 active?.dispose();active=null;canvas.classList.remove('ready');canvas.dataset.state='fallback';
 button.hidden=false;button.textContent='Retry motion';button.removeAttribute('aria-pressed');
 const status=document.querySelector('#qa-status');if(status)status.textContent='Fallback: '+error.message;
 void arrival.reveal();
 console.warn('Showing the flower still:',error.message);
}
button.addEventListener('click',()=>{if(!active)void load(true);});
if(preference.matches&&!document.querySelector('#study-time')){canvas.dataset.state='still';button.hidden=false;button.textContent='Play motion';void arrival.reveal();}
else void load(!preference.matches);
