(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function b(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=b(t);fetch(t.href,o)}})();new p5(e=>{let s,b,n=[],t=[],o=40,l=18,a=-450,f=-400,g=-350,c=-300,d=-250,u=-200,m=-100,h=-50,w=0,y=-150;for(let i=0;i<o;i++)n[i]=0,t[i]=0;e.preload=()=>{s=e.loadImage("/src/img/bg/orange.png"),b=e.loadImage("/src/img/bg/invy.png")},e.setup=()=>{e.createCanvas(e.windowWidth,e.windowHeight),e.background(0,0,255)},e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)},e.draw=()=>{P(0,e.mouseX,e.mouseY);for(let i=0;i<n.length-5;i++)P(i+1,n[i],t[i])};function P(i,v,L){let r=v-n[i],N=L-t[i],O=e.atan2(N,r);n[i]=v-e.cos(O)*l,t[i]=L-e.sin(O)*l,I(n[i],t[i],O)}function I(i,v,L){a=a-.001,f=f-.001,g=g-.001,c=c-.001,d=d-.001,u=u-.001,y=y-.001,m=m-.001,h=h-.001,w=w-.001,e.push(),e.translate(i,v),e.rotate(L);let r=b;e.mouseIsPressed?r=s:r=b,e.image(r,a,a),e.image(r,f,f),e.image(r,g,g),e.image(r,c,c),e.image(r,d,d),e.image(r,u,u),e.image(r,y,y),e.image(r,m,m),e.image(r,h,h),e.image(r,w,w),e.pop(),a<=-500&&(a=0),f<=-500&&(f=0),g<=-500&&(g=0),c<=-500&&(c=0),d<=-500&&(d=0),u<=-500&&(u=0),y<=-500&&(y=0),w<=-500&&(w=0),h<=-500&&(h=0),m<=-500&&(m=0)}});