(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function DS(){if(x_)return Ao;x_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var S_;function US(){return S_||(S_=1,Qf.exports=DS()),Qf.exports}var Et=US(),Jf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function LS(){if(y_)return se;y_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(U,$,xt){this.props=U,this.context=$,this.refs=b,this.updater=xt||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function N(U,$,xt){this.props=U,this.context=$,this.refs=b,this.updater=xt||M}var L=N.prototype=new g;L.constructor=N,E(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function I(U,$,xt,yt,Q,mt){return xt=mt.ref,{$$typeof:s,type:U,key:$,ref:xt!==void 0?xt:null,props:mt}}function X(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function w(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return $[xt]})}var H=/\/+/g;function ot(U,$){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):$.toString(36)}function st(){}function vt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function dt(U,$,xt,yt,Q){var mt=typeof U;(mt==="undefined"||mt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case s:case t:Mt=!0;break;case _:return Mt=U._init,dt(Mt(U._payload),$,xt,yt,Q)}}if(Mt)return Q=Q(U),Mt=yt===""?"."+ot(U,0):yt,D(Q)?(xt="",Mt!=null&&(xt=Mt.replace(H,"$&/")+"/"),dt(Q,$,xt,"",function(le){return le})):Q!=null&&(C(Q)&&(Q=X(Q,xt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+Mt)),$.push(Q)),1;Mt=0;var wt=yt===""?".":yt+":";if(D(U))for(var Dt=0;Dt<U.length;Dt++)yt=U[Dt],mt=wt+ot(yt,Dt),Mt+=dt(yt,$,xt,mt,Q);else if(Dt=v(U),typeof Dt=="function")for(U=Dt.call(U),Dt=0;!(yt=U.next()).done;)yt=yt.value,mt=wt+ot(yt,Dt++),Mt+=dt(yt,$,xt,mt,Q);else if(mt==="object"){if(typeof U.then=="function")return dt(vt(U),$,xt,yt,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function B(U,$,xt){if(U==null)return U;var yt=[],Q=0;return dt(U,yt,"","",function(mt){return $.call(xt,mt,Q++)}),yt}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Tt(){}return se.Children={map:B,forEach:function(U,$,xt){B(U,function(){$.apply(this,arguments)},xt)},count:function(U){var $=0;return B(U,function(){$++}),$},toArray:function(U){return B(U,function($){return $})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},se.Component=S,se.Fragment=i,se.Profiler=l,se.PureComponent=N,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},se.cache=function(U){return function(){return U.apply(null,arguments)}},se.cloneElement=function(U,$,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),Q=U.key,mt=void 0;if($!=null)for(Mt in $.ref!==void 0&&(mt=void 0),$.key!==void 0&&(Q=""+$.key),$)!V.call($,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&$.ref===void 0||(yt[Mt]=$[Mt]);var Mt=arguments.length-2;if(Mt===1)yt.children=xt;else if(1<Mt){for(var wt=Array(Mt),Dt=0;Dt<Mt;Dt++)wt[Dt]=arguments[Dt+2];yt.children=wt}return I(U.type,Q,void 0,void 0,mt,yt)},se.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},se.createElement=function(U,$,xt){var yt,Q={},mt=null;if($!=null)for(yt in $.key!==void 0&&(mt=""+$.key),$)V.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=$[yt]);var Mt=arguments.length-2;if(Mt===1)Q.children=xt;else if(1<Mt){for(var wt=Array(Mt),Dt=0;Dt<Mt;Dt++)wt[Dt]=arguments[Dt+2];Q.children=wt}if(U&&U.defaultProps)for(yt in Mt=U.defaultProps,Mt)Q[yt]===void 0&&(Q[yt]=Mt[yt]);return I(U,mt,void 0,void 0,null,Q)},se.createRef=function(){return{current:null}},se.forwardRef=function(U){return{$$typeof:d,render:U}},se.isValidElement=C,se.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:Z}},se.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},se.startTransition=function(U){var $=z.T,xt={};z.T=xt;try{var yt=U(),Q=z.S;Q!==null&&Q(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Tt,Y)}catch(mt){Y(mt)}finally{z.T=$}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(U){return z.H.use(U)},se.useActionState=function(U,$,xt){return z.H.useActionState(U,$,xt)},se.useCallback=function(U,$){return z.H.useCallback(U,$)},se.useContext=function(U){return z.H.useContext(U)},se.useDebugValue=function(){},se.useDeferredValue=function(U,$){return z.H.useDeferredValue(U,$)},se.useEffect=function(U,$,xt){var yt=z.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,$)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(U,$,xt){return z.H.useImperativeHandle(U,$,xt)},se.useInsertionEffect=function(U,$){return z.H.useInsertionEffect(U,$)},se.useLayoutEffect=function(U,$){return z.H.useLayoutEffect(U,$)},se.useMemo=function(U,$){return z.H.useMemo(U,$)},se.useOptimistic=function(U,$){return z.H.useOptimistic(U,$)},se.useReducer=function(U,$,xt){return z.H.useReducer(U,$,xt)},se.useRef=function(U){return z.H.useRef(U)},se.useState=function(U){return z.H.useState(U)},se.useSyncExternalStore=function(U,$,xt){return z.H.useSyncExternalStore(U,$,xt)},se.useTransition=function(){return z.H.useTransition()},se.version="19.1.0",se}var M_;function Cd(){return M_||(M_=1,Jf.exports=LS()),Jf.exports}var ut=Cd(),$f={exports:{}},Ro={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function NS(){return E_||(E_=1,function(s){function t(B,Z){var Y=B.length;B.push(Z);t:for(;0<Y;){var Tt=Y-1>>>1,U=B[Tt];if(0<l(U,Z))B[Tt]=Z,B[Y]=U,Y=Tt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;t:for(var Tt=0,U=B.length,$=U>>>1;Tt<$;){var xt=2*(Tt+1)-1,yt=B[xt],Q=xt+1,mt=B[Q];if(0>l(yt,Y))Q<U&&0>l(mt,yt)?(B[Tt]=mt,B[Q]=Y,Tt=Q):(B[Tt]=yt,B[xt]=Y,Tt=xt);else if(Q<U&&0>l(mt,Y))B[Tt]=mt,B[Q]=Y,Tt=Q;else break t}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,v=3,M=!1,E=!1,b=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function z(B){if(b=!1,D(B),!E)if(i(m)!==null)E=!0,V||(V=!0,ot());else{var Z=i(p);Z!==null&&dt(z,Z.startTime-B)}}var V=!1,I=-1,X=5,C=-1;function w(){return S?!0:!(s.unstable_now()-C<X)}function H(){if(S=!1,V){var B=s.unstable_now();C=B;var Z=!0;try{t:{E=!1,b&&(b=!1,N(I),I=-1),M=!0;var Y=v;try{e:{for(D(B),x=i(m);x!==null&&!(x.expirationTime>B&&w());){var Tt=x.callback;if(typeof Tt=="function"){x.callback=null,v=x.priorityLevel;var U=Tt(x.expirationTime<=B);if(B=s.unstable_now(),typeof U=="function"){x.callback=U,D(B),Z=!0;break e}x===i(m)&&r(m),D(B)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var $=i(p);$!==null&&dt(z,$.startTime-B),Z=!1}}break t}finally{x=null,v=Y,M=!1}Z=void 0}}finally{Z?ot():V=!1}}}var ot;if(typeof L=="function")ot=function(){L(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,vt=st.port2;st.port1.onmessage=H,ot=function(){vt.postMessage(null)}}else ot=function(){g(H,0)};function dt(B,Z){I=g(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return B()}finally{v=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return Z()}finally{v=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var Tt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Tt+Y:Tt):Y=Tt,B){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,B={id:_++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:U,sortIndex:-1},Y>Tt?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(b?(N(I),I=-1):b=!0,dt(z,Y-Tt))):(B.sortIndex=U,t(m,B),E||M||(E=!0,V||(V=!0,ot()))),B},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(B){var Z=v;return function(){var Y=v;v=Z;try{return B.apply(this,arguments)}finally{v=Y}}}}(eh)),eh}var T_;function OS(){return T_||(T_=1,th.exports=NS()),th.exports}var nh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function PS(){if(b_)return wn;b_=1;var s=Cd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var A_;function IS(){if(A_)return nh.exports;A_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=PS(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function BS(){if(R_)return Ro;R_=1;var s=OS(),t=Cd(),i=IS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,A=c.child;A;){if(A===a){y=!0,a=c,o=f;break}if(A===o){y=!0,o=c,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=c;break}if(A===o){y=!0,o=f,a=c;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case z:return"Suspense";case V:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Tt=[],U=-1;function $(e){return{current:e}}function xt(e){0>U||(e.current=Tt[U],Tt[U]=null,U--)}function yt(e,n){U++,Tt[U]=e.current,e.current=n}var Q=$(null),mt=$(null),Mt=$(null),wt=$(null);function Dt(e,n){switch(yt(Mt,n),yt(mt,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yg(n),e=jg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Q),yt(Q,e)}function le(){xt(Q),xt(mt),xt(Mt)}function Jt(e){e.memoizedState!==null&&yt(wt,e);var n=Q.current,a=jg(n,e.type);n!==a&&(yt(mt,e),yt(Q,a))}function Oe(e){mt.current===e&&(xt(Q),xt(mt)),wt.current===e&&(xt(wt),yo._currentValue=Y)}var Ge=Object.prototype.hasOwnProperty,_e=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,Sn=s.unstable_shouldYield,Me=s.unstable_requestPaint,pe=s.unstable_now,kt=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,Zt=s.unstable_UserBlockingPriority,re=s.unstable_NormalPriority,$e=s.unstable_LowPriority,O=s.unstable_IdlePriority,T=s.log,et=s.unstable_setDisableYieldValue,ft=null,pt=null;function lt(e){if(typeof T=="function"&&et(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,e)}catch{}}var It=Math.clz32?Math.clz32:Xt,Lt=Math.log,Vt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Lt(e)/Vt|0)|0}var St=256,Bt=4194304;function Yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?c=Yt(o):(y&=A,y!==0?c=Yt(y):a||(a=A&~e,a!==0&&(c=Yt(a))))):(A=o&~f,A!==0?c=Yt(A):y!==0?c=Yt(y):a||(a=o&~e,a!==0&&(c=Yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Nt(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,n,a,o,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=y&~a;0<a;){var ct=31-It(a),gt=1<<ct;A[ct]=0,P[ct]=-1;var nt=J[ct];if(nt!==null)for(J[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~gt}o!==0&&_t(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ht(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function Vn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,yn="__reactProps$"+dn,On="__reactContainer$"+dn,qa="__reactEvents$"+dn,Jo="__reactListeners$"+dn,$o="__reactHandles$"+dn,Ya="__reactResources$"+dn,ua="__reactMarker$"+dn;function ca(e){delete e[on],delete e[yn],delete e[qa],delete e[Jo],delete e[$o]}function Li(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[On]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Jg(e);e!==null;){if(a=e[on])return a;e=Jg(e)}return n}e=a,a=e.parentNode}return null}function Ni(e){if(e=e[on]||e[On]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function fa(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[ua]=!0}var tl=new Set,el={};function Oi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(el[e]=n,e=0;e<n.length;e++)tl.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function j(e){return Ge.call(rt,e)?!0:Ge.call(at,e)?!1:q.test(e)?rt[e]=!0:(at[e]=!0,!1)}function At(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ut(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Ft,ee;function Qt(e){if(Ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+ee}var Wt=!1;function ue(e,n){if(!e||Wt)return"";Wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var nt=it}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(it){nt=it}e.call(gt.prototype)}}else{try{throw Error()}catch(it){nt=it}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var P=y.split(`
`),J=A.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===J.length)for(o=P.length-1,c=J.length-1;1<=o&&0<=c&&P[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==J[c]){var ct=`
`+P[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{Wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return Qt("Activity");default:return""}}function qe(e){try{var n="";do n+=Ce(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e){var n=De(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pe(e){e._valueTracker||(e._valueTracker=Kt(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=De(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ha=/[\n"\\]/g;function Xe(e){return e.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(e,n,a,o,c,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?An(e,y,he(n)):a!=null?An(e,y,he(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+he(A):e.removeAttribute("name")}function Ve(e,n,a,o,c,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function An(e,n,a){n==="number"&&pn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function _i(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function jd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Yd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Yd(e,f,n[f])}function Zu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return Cv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ku=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Cr=null;function Zd(e){var n=Ni(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[yn]||null;if(!c)throw Error(r(90));Pi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&xe(o)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Ju=!1;function Kd(e,n,a){if(Ju)return e(n,a);Ju=!0;try{var o=e(n);return o}finally{if(Ju=!1,(wr!==null||Cr!==null)&&(Gl(),wr&&(n=wr,e=Cr,Cr=wr=null,Zd(n),e)))for(n=0;n<e.length;n++)Zd(e[n])}}function Ns(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=!1;if(Bi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){$u=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{$u=!1}var da=null,tc=null,il=null;function Qd(){if(il)return il;var e,n=tc,a=n.length,o,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return il=c.slice(e,1<o?1-o:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Jd(){return!1}function Pn(e){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:Jd,this.isPropagationStopped=Jd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Pn(Za),Ps=_({},Za,{view:0,detail:0}),Dv=Pn(Ps),ec,nc,Is,ol=_({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(ec=e.screenX-Is.screenX,nc=e.screenY-Is.screenY):nc=ec=0,Is=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:nc}}),$d=Pn(ol),Uv=_({},ol,{dataTransfer:0}),Lv=Pn(Uv),Nv=_({},Ps,{relatedTarget:0}),ic=Pn(Nv),Ov=_({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Pn(Ov),Iv=_({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=Pn(Iv),zv=_({},Za,{data:0}),tp=Pn(zv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gv[e])?!!n[e]:!1}function ac(){return Vv}var kv=_({},Ps,{key:function(e){if(e.key){var n=Fv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=Pn(kv),Wv=_({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Pn(Wv),qv=_({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),Yv=Pn(qv),jv=_({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Pn(jv),Kv=_({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=Pn(Kv),Jv=_({},Za,{newState:0,oldState:0}),$v=Pn(Jv),tx=[9,13,27,32],rc=Bi&&"CompositionEvent"in window,Bs=null;Bi&&"documentMode"in document&&(Bs=document.documentMode);var ex=Bi&&"TextEvent"in window&&!Bs,np=Bi&&(!rc||Bs&&8<Bs&&11>=Bs),ip=" ",ap=!1;function rp(e,n){switch(e){case"keyup":return tx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function nx(e,n){switch(e){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return e=n.data,e===ip&&ap?null:e;default:return null}}function ix(e,n){if(Dr)return e==="compositionend"||!rc&&rp(e,n)?(e=Qd(),il=tc=da=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ax[e.type]:n==="textarea"}function lp(e,n,a,o){wr?Cr?Cr.push(o):Cr=[o]:wr=o,n=Yl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var zs=null,Fs=null;function rx(e){Vg(e,0)}function ll(e){var n=ja(e);if(xe(n))return e}function up(e,n){if(e==="change")return n}var cp=!1;if(Bi){var sc;if(Bi){var oc="oninput"in document;if(!oc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),oc=typeof fp.oninput=="function"}sc=oc}else sc=!1;cp=sc&&(!document.documentMode||9<document.documentMode)}function hp(){zs&&(zs.detachEvent("onpropertychange",dp),Fs=zs=null)}function dp(e){if(e.propertyName==="value"&&ll(Fs)){var n=[];lp(n,Fs,e,Qu(e)),Kd(rx,n)}}function sx(e,n,a){e==="focusin"?(hp(),zs=n,Fs=a,zs.attachEvent("onpropertychange",dp)):e==="focusout"&&hp()}function ox(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Fs)}function lx(e,n){if(e==="click")return ll(n)}function ux(e,n){if(e==="input"||e==="change")return ll(n)}function cx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:cx;function Hs(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ge.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,n){var a=pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pp(a)}}function gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pn(e.document)}return n}function lc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fx=Bi&&"documentMode"in document&&11>=document.documentMode,Ur=null,uc=null,Gs=null,cc=!1;function vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cc||Ur==null||Ur!==pn(o)||(o=Ur,"selectionStart"in o&&lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gs&&Hs(Gs,o)||(Gs=o,o=Yl(uc,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ur)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},fc={},xp={};Bi&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Qa(e){if(fc[e])return fc[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return fc[e]=n[a];return e}var Sp=Qa("animationend"),yp=Qa("animationiteration"),Mp=Qa("animationstart"),hx=Qa("transitionrun"),dx=Qa("transitionstart"),px=Qa("transitioncancel"),Ep=Qa("transitionend"),Tp=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function li(e,n){Tp.set(e,n),Oi(n,[e])}var bp=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=bp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qe(n)},bp.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var ti=[],Nr=0,dc=0;function ul(){for(var e=Nr,n=dc=Nr=0;n<e;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&Ap(a,c,f)}}function cl(e,n,a,o){ti[Nr++]=e,ti[Nr++]=n,ti[Nr++]=a,ti[Nr++]=o,dc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pc(e,n,a,o){return cl(e,n,a,o),fl(e)}function Or(e,n){return cl(e,null,null,n),fl(e)}function Ap(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-It(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function fl(e){if(50<ho)throw ho=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Pr={};function mx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,o){return new mx(e,n,a,o)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,o,c,f){var y=0;if(o=e,typeof e=="function")mc(e)&&(y=1);else if(typeof e=="string")y=_S(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Xn(31,a,n,c),e.elementType=C,e.lanes=f,e;case E:return Ja(a.children,c,f,n);case b:y=8,c|=24;break;case S:return e=Xn(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case z:return e=Xn(13,a,n,c),e.elementType=z,e.lanes=f,e;case V:return e=Xn(19,a,n,c),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case L:y=10;break t;case N:y=9;break t;case D:y=11;break t;case I:y=14;break t;case X:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Xn(y,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function Ja(e,n,a,o){return e=Xn(7,e,o,n),e.lanes=a,e}function gc(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function _c(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ir=[],Br=0,dl=null,pl=0,ei=[],ni=0,$a=null,Fi=1,Hi="";function tr(e,n){Ir[Br++]=pl,Ir[Br++]=dl,dl=e,pl=n}function wp(e,n,a){ei[ni++]=Fi,ei[ni++]=Hi,ei[ni++]=$a,$a=e;var o=Fi;e=Hi;var c=32-It(o)-1;o&=~(1<<c),a+=1;var f=32-It(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Fi=1<<32-It(n)+c|a<<c|o,Hi=f+e}else Fi=1<<f|a<<c|o,Hi=e}function vc(e){e.return!==null&&(tr(e,1),wp(e,1,0))}function xc(e){for(;e===dl;)dl=Ir[--Br],Ir[Br]=null,pl=Ir[--Br],Ir[Br]=null;for(;e===$a;)$a=ei[--ni],ei[ni]=null,Hi=ei[--ni],ei[ni]=null,Fi=ei[--ni],ei[ni]=null}var Ln=null,Qe=null,Re=!1,er=null,vi=!1,Sc=Error(r(519));function nr(e){var n=Error(r(418,""));throw Xs($n(n,e)),Sc}function Cp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[yn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)ge(mo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ve(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Pe(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,o.value,o.defaultValue,o.children),Pe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||qg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=jl),n=!0):n=!1,n||nr(e)}function Dp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Ln=Ln.return}}function Vs(e){if(e!==Ln)return!1;if(!Re)return Dp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Qe&&nr(e),Dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Qe=ci(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Qe=null}}else n===27?(n=Qe,Ca(e.type)?(e=Gf,Gf=null,Qe=e):Qe=n):Qe=Ln?ci(e.stateNode.nextSibling):null;return!0}function ks(){Qe=Ln=null,Re=!1}function Up(){var e=er;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),er=null),e}function Xs(e){er===null?er=[e]:er.push(e)}var yc=$(null),ir=null,Gi=null;function pa(e,n,a){yt(yc,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=yc.current,xt(yc)}function Mc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ec(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var P=0;P<n.length;P++)if(A.context===n[P]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Mc(f.return,a,e),o||(y=null);break t}f=A.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Mc(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Ws(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=c.type;kn(c.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(c===wt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&Ec(n,e,a,o),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Lp(ir,e)}function gl(e,n){return ir===null&&ar(e),Lp(e,n)}function Lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var gx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},_x=s.unstable_scheduleCallback,vx=s.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new gx,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&_x(vx,function(){e.controller.abort()})}var Ys=null,bc=0,zr=0,Fr=null;function xx(e,n){if(Ys===null){var a=Ys=[];bc=0,zr=wf(),Fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return bc++,n.then(Np,Np),n}function Np(){if(--bc===0&&Ys!==null){Fr!==null&&(Fr.status="fulfilled");var e=Ys;Ys=null,zr=0,Fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Sx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Op=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&xx(e,n),Op!==null&&Op(e,n)};var rr=$(null);function Ac(){var e=rr.current;return e!==null?e:We.pooledCache}function _l(e,n){n===null?yt(rr,rr.current):yt(rr,n.pool)}function Pp(){var e=Ac();return e===null?null:{parent:un._currentValue,pool:e}}var js=Error(r(460)),Ip=Error(r(474)),vl=Error(r(542)),Rc={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xl(){}function zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(xl,xl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e;default:if(typeof n.status=="string")n.then(xl,xl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e}throw Zs=n,js}}var Zs=null;function Fp(){if(Zs===null)throw Error(r(459));var e=Zs;return Zs=null,e}function Hp(e){if(e===js||e===vl)throw Error(r(483))}var ma=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=fl(e),Ap(e,null,a),n}return cl(e,o,n,a),fl(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ht(e,a)}}function Dc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uc=!1;function Qs(){if(Uc){var e=Fr;if(e!==null)throw e}}function Js(e,n,a,o){Uc=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var P=A,J=P.next;P.next=null,y===null?f=J:y.next=J,y=P;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==y&&(A===null?ct.firstBaseUpdate=J:A.next=J,ct.lastBaseUpdate=P))}if(f!==null){var gt=c.baseState;y=0,ct=J=P=null,A=f;do{var nt=A.lane&-536870913,it=nt!==A.lane;if(it?(ye&nt)===nt:(o&nt)===nt){nt!==0&&nt===zr&&(Uc=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ne=e,$t=A;nt=n;var ze=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){gt=ne.call(ze,gt,nt);break t}gt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,nt=typeof ne=="function"?ne.call(ze,gt,nt):ne,nt==null)break t;gt=_({},gt,nt);break t;case 2:ma=!0}}nt=A.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(J=ct=it,P=gt):ct=ct.next=it,y|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;it=A,A=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(P=gt),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ba|=y,e.lanes=y,e.memoizedState=gt}}function Gp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gp(a[e],n)}var Hr=$(null),Sl=$(0);function kp(e,n){e=Zi,yt(Sl,e),yt(Hr,n),Zi=e|n.baseLanes}function Lc(){yt(Sl,Zi),yt(Hr,Hr.current)}function Nc(){Zi=Sl.current,xt(Hr),xt(Sl)}var va=0,fe=null,Ie=null,an=null,yl=!1,Gr=!1,sr=!1,Ml=0,$s=0,Vr=null,yx=0;function tn(){throw Error(r(321))}function Oc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Pc(e,n,a,o,c,f){return va=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Am:Rm,sr=!1,f=a(o,c),sr=!1,Gr&&(f=Wp(n,a,o,c)),Xp(e),f}function Xp(e){B.H=wl;var n=Ie!==null&&Ie.next!==null;if(va=0,an=Ie=fe=null,yl=!1,$s=0,Vr=null,n)throw Error(r(300));e===null||gn||(e=e.dependencies,e!==null&&ml(e)&&(gn=!0))}function Wp(e,n,a,o){fe=e;var c=0;do{if(Gr&&(Vr=null),$s=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,an=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=wx,f=n(a,o)}while(Gr);return f}function Mx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(fe.flags|=1024),n}function Ic(){var e=Ml!==0;return Ml=0,e}function Bc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zc(e){if(yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yl=!1}va=0,an=Ie=fe=null,Gr=!1,$s=Ml=0,Vr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?fe.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ie===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=an===null?fe.memoizedState:an.next;if(n!==null)an=n,Ie=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},an===null?fe.memoizedState=an=e:an=an.next=e}return an}function Fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(e){var n=$s;return $s+=1,Vr===null&&(Vr=[]),e=zp(Vr,e,n),n=fe,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Am:Rm),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===L)return Rn(e)}throw Error(r(438,String(e)))}function Hc(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fc(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=rn();return Gc(n,Ie,e)}function Gc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=y=null,P=null,J=n,ct=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ye&gt)===gt:(va&gt)===gt){var nt=J.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===zr&&(ct=!0);else if((va&nt)===nt){J=J.next,nt===zr&&(ct=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(A=P=gt,y=f):P=P.next=gt,fe.lanes|=nt,ba|=nt;gt=J.action,sr&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else nt={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(A=P=nt,y=f):P=P.next=nt,fe.lanes|=gt,ba|=gt;J=J.next}while(J!==null&&J!==n);if(P===null?y=f:P.next=A,!kn(f,e.memoizedState)&&(gn=!0,ct&&(a=Fr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vc(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);kn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function qp(e,n,a){var o=fe,c=rn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!kn((Ie||c).memoizedState,a);y&&(c.memoizedState=a,gn=!0),c=c.queue;var A=Zp.bind(null,o,c,e);if(eo(2048,8,A,[e]),c.getSnapshot!==n||y||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,kr(9,bl(),jp.bind(null,o,c,a,n),null),We===null)throw Error(r(349));f||(va&124)!==0||Yp(o,n,a)}return a}function Yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Fc(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function jp(e,n,a,o){n.value=a,n.getSnapshot=o,Kp(n)&&Qp(e)}function Zp(e,n,a){return a(function(){Kp(n)&&Qp(e)})}function Kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Qp(e){var n=Or(e,2);n!==null&&Zn(n,e,2)}function kc(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),sr){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function Jp(e,n,a,o){return e.baseState=a,Gc(e,Ie,typeof o=="function"?o:ki)}function Ex(e,n,a,o,c){if(Rl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,$p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function $p(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var A=a(c,o),P=B.S;P!==null&&P(y,A),tm(e,n,A)}catch(J){Xc(e,n,J)}finally{B.T=f}}else try{f=a(c,o),tm(e,n,f)}catch(J){Xc(e,n,J)}}function tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){em(e,n,o)},function(o){return Xc(e,n,o)}):em(e,n,a)}function em(e,n,a){n.status="fulfilled",n.value=a,nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,$p(e,a)))}function Xc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,nm(n),n=n.next;while(n!==o)}e.action=null}function nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function im(e,n){return n}function am(e,n){if(Re){var a=We.formState;if(a!==null){t:{var o=fe;if(Re){if(Qe){e:{for(var c=Qe,f=vi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Qe=ci(c.nextSibling),o=c.data==="F!";break t}}nr(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},a.queue=o,a=Em.bind(null,fe,o),o.dispatch=a,o=kc(!1),f=Zc.bind(null,fe,!1,o.queue),o=In(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Ex.bind(null,fe,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function rm(e){var n=rn();return sm(n,Ie,e)}function sm(e,n,a){if(n=Gc(e,n,im)[0],e=Tl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=to(n)}catch(y){throw y===js?vl:y}else o=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,kr(9,bl(),Tx.bind(null,c,a),null)),[o,f,e]}function Tx(e,n){e.action=n}function om(e){var n=rn(),a=Ie;if(a!==null)return sm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function kr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Fc(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function bl(){return{destroy:void 0,resource:void 0}}function lm(){return rn().memoizedState}function Al(e,n,a,o){var c=In();o=o===void 0?null:o,fe.flags|=e,c.memoizedState=kr(1|n,bl(),a,o)}function eo(e,n,a,o){var c=rn();o=o===void 0?null:o;var f=c.memoizedState.inst;Ie!==null&&o!==null&&Oc(o,Ie.memoizedState.deps)?c.memoizedState=kr(n,f,a,o):(fe.flags|=e,c.memoizedState=kr(1|n,f,a,o))}function um(e,n){Al(8390656,8,e,n)}function cm(e,n){eo(2048,8,e,n)}function fm(e,n){return eo(4,2,e,n)}function hm(e,n){return eo(4,4,e,n)}function dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pm(e,n,a){a=a!=null?a.concat([e]):null,eo(4,4,dm.bind(null,n,e),a)}function Wc(){}function mm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Oc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function gm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Oc(n,o[1]))return o[0];if(o=e(),sr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o}function qc(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=xg(),fe.lanes|=e,ba|=e,a)}function _m(e,n,a,o){return kn(a,n)?a:Hr.current!==null?(e=qc(e,a,o),kn(e,n)||(gn=!0),e):(va&42)===0?(gn=!0,e.memoizedState=a):(e=xg(),fe.lanes|=e,ba|=e,n)}function vm(e,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var y=B.T,A={};B.T=A,Zc(e,!1,n,a);try{var P=c(),J=B.S;if(J!==null&&J(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=Sx(P,o);no(e,n,ct,jn(e))}else no(e,n,o,jn(e))}catch(gt){no(e,n,{then:function(){},status:"rejected",reason:gt},jn())}finally{Z.p=f,B.T=y}}function bx(){}function Yc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=xm(e).queue;vm(e,c,n,Y,a===null?bx:function(){return Sm(e),a(o)})}function xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Sm(e){var n=xm(e).next.queue;no(e,n,{},jn())}function jc(){return Rn(yo)}function ym(){return rn().memoizedState}function Mm(){return rn().memoizedState}function Ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=ga(a);var o=_a(n,e,a);o!==null&&(Zn(o,n,a),Ks(o,n,a)),n={cache:Tc()},e.payload=n;return}n=n.return}}function Rx(e,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(e)?Tm(n,a):(a=pc(e,n,a,o),a!==null&&(Zn(a,e,o),bm(a,n,o)))}function Em(e,n,a){var o=jn();no(e,n,a,o)}function no(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))Tm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(c.hasEagerState=!0,c.eagerState=A,kn(A,y))return cl(e,n,c,0),We===null&&ul(),!1}catch{}finally{}if(a=pc(e,n,c,o),a!==null)return Zn(a,e,o),bm(a,n,o),!0}return!1}function Zc(e,n,a,o){if(o={lane:2,revertLane:wf(),action:o,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(n)throw Error(r(479))}else n=pc(e,a,o,2),n!==null&&Zn(n,e,2)}function Rl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Tm(e,n){Gr=yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function bm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ht(e,a)}}var wl={readContext:Rn,use:El,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Am={readContext:Rn,use:El,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(sr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var c=a(n);if(sr){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Rx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=kc(e);var n=e.queue,a=Em.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wc,useDeferredValue:function(e,n){var a=In();return qc(a,e,n)},useTransition:function(){var e=kc(!1);return e=vm.bind(null,fe,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,c=In();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(ye&124)!==0||Yp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,um(Zp.bind(null,o,f,e),[e]),o.flags|=2048,kr(9,bl(),jp.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=We.identifierPrefix;if(Re){var a=Hi,o=Fi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=yx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:jc,useFormState:am,useActionState:am,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zc.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hc,useCacheRefresh:function(){return In().memoizedState=Ax.bind(null,fe)}},Rm={readContext:Rn,use:El,useCallback:mm,useContext:Rn,useEffect:cm,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Tl,useRef:lm,useState:function(){return Tl(ki)},useDebugValue:Wc,useDeferredValue:function(e,n){var a=rn();return _m(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Tl(ki)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:jc,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=rn();return Jp(a,Ie,e,n)},useMemoCache:Hc,useCacheRefresh:Mm},wx={readContext:Rn,use:El,useCallback:mm,useContext:Rn,useEffect:cm,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Vc,useRef:lm,useState:function(){return Vc(ki)},useDebugValue:Wc,useDeferredValue:function(e,n){var a=rn();return Ie===null?qc(a,e,n):_m(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Vc(ki)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:jc,useFormState:om,useActionState:om,useOptimistic:function(e,n){var a=rn();return Ie!==null?Jp(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hc,useCacheRefresh:Mm},Xr=null,io=0;function Cl(e){var n=io;return io+=1,Xr===null&&(Xr=[]),zp(Xr,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wm(e){var n=e._init;return n(e._payload)}function Cm(e){function n(W,G){if(e){var K=W.deletions;K===null?(W.deletions=[G],W.flags|=16):K.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=zi(W,G),W.index=0,W.sibling=null,W}function f(W,G,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<G?(W.flags|=67108866,G):K):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function y(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function A(W,G,K,ht){return G===null||G.tag!==6?(G=gc(K,W.mode,ht),G.return=W,G):(G=c(G,K),G.return=W,G)}function P(W,G,K,ht){var Gt=K.type;return Gt===E?ct(W,G,K.props.children,ht,K.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&wm(Gt)===G.type)?(G=c(G,K.props),ao(G,K),G.return=W,G):(G=hl(K.type,K.key,K.props,null,W.mode,ht),ao(G,K),G.return=W,G)}function J(W,G,K,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=_c(K,W.mode,ht),G.return=W,G):(G=c(G,K.children||[]),G.return=W,G)}function ct(W,G,K,ht,Gt){return G===null||G.tag!==7?(G=Ja(K,W.mode,ht,Gt),G.return=W,G):(G=c(G,K),G.return=W,G)}function gt(W,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=gc(""+G,W.mode,K),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return K=hl(G.type,G.key,G.props,null,W.mode,K),ao(K,G),K.return=W,K;case M:return G=_c(G,W.mode,K),G.return=W,G;case X:var ht=G._init;return G=ht(G._payload),gt(W,G,K)}if(dt(G)||ot(G))return G=Ja(G,W.mode,K,null),G.return=W,G;if(typeof G.then=="function")return gt(W,Cl(G),K);if(G.$$typeof===L)return gt(W,gl(W,G),K);Dl(W,G)}return null}function nt(W,G,K,ht){var Gt=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Gt!==null?null:A(W,G,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return K.key===Gt?P(W,G,K,ht):null;case M:return K.key===Gt?J(W,G,K,ht):null;case X:return Gt=K._init,K=Gt(K._payload),nt(W,G,K,ht)}if(dt(K)||ot(K))return Gt!==null?null:ct(W,G,K,ht,null);if(typeof K.then=="function")return nt(W,G,Cl(K),ht);if(K.$$typeof===L)return nt(W,G,gl(W,K),ht);Dl(W,K)}return null}function it(W,G,K,ht,Gt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(K)||null,A(G,W,""+ht,Gt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case v:return W=W.get(ht.key===null?K:ht.key)||null,P(G,W,ht,Gt);case M:return W=W.get(ht.key===null?K:ht.key)||null,J(G,W,ht,Gt);case X:var de=ht._init;return ht=de(ht._payload),it(W,G,K,ht,Gt)}if(dt(ht)||ot(ht))return W=W.get(K)||null,ct(G,W,ht,Gt,null);if(typeof ht.then=="function")return it(W,G,K,Cl(ht),Gt);if(ht.$$typeof===L)return it(W,G,K,gl(G,ht),Gt);Dl(G,ht)}return null}function ne(W,G,K,ht){for(var Gt=null,de=null,qt=G,te=G=0,vn=null;qt!==null&&te<K.length;te++){qt.index>te?(vn=qt,qt=null):vn=qt.sibling;var Te=nt(W,qt,K[te],ht);if(Te===null){qt===null&&(qt=vn);break}e&&qt&&Te.alternate===null&&n(W,qt),G=f(Te,G,te),de===null?Gt=Te:de.sibling=Te,de=Te,qt=vn}if(te===K.length)return a(W,qt),Re&&tr(W,te),Gt;if(qt===null){for(;te<K.length;te++)qt=gt(W,K[te],ht),qt!==null&&(G=f(qt,G,te),de===null?Gt=qt:de.sibling=qt,de=qt);return Re&&tr(W,te),Gt}for(qt=o(qt);te<K.length;te++)vn=it(qt,W,te,K[te],ht),vn!==null&&(e&&vn.alternate!==null&&qt.delete(vn.key===null?te:vn.key),G=f(vn,G,te),de===null?Gt=vn:de.sibling=vn,de=vn);return e&&qt.forEach(function(Oa){return n(W,Oa)}),Re&&tr(W,te),Gt}function $t(W,G,K,ht){if(K==null)throw Error(r(151));for(var Gt=null,de=null,qt=G,te=G=0,vn=null,Te=K.next();qt!==null&&!Te.done;te++,Te=K.next()){qt.index>te?(vn=qt,qt=null):vn=qt.sibling;var Oa=nt(W,qt,Te.value,ht);if(Oa===null){qt===null&&(qt=vn);break}e&&qt&&Oa.alternate===null&&n(W,qt),G=f(Oa,G,te),de===null?Gt=Oa:de.sibling=Oa,de=Oa,qt=vn}if(Te.done)return a(W,qt),Re&&tr(W,te),Gt;if(qt===null){for(;!Te.done;te++,Te=K.next())Te=gt(W,Te.value,ht),Te!==null&&(G=f(Te,G,te),de===null?Gt=Te:de.sibling=Te,de=Te);return Re&&tr(W,te),Gt}for(qt=o(qt);!Te.done;te++,Te=K.next())Te=it(qt,W,te,Te.value,ht),Te!==null&&(e&&Te.alternate!==null&&qt.delete(Te.key===null?te:Te.key),G=f(Te,G,te),de===null?Gt=Te:de.sibling=Te,de=Te);return e&&qt.forEach(function(CS){return n(W,CS)}),Re&&tr(W,te),Gt}function ze(W,G,K,ht){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case v:t:{for(var Gt=K.key;G!==null;){if(G.key===Gt){if(Gt=K.type,Gt===E){if(G.tag===7){a(W,G.sibling),ht=c(G,K.props.children),ht.return=W,W=ht;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===X&&wm(Gt)===G.type){a(W,G.sibling),ht=c(G,K.props),ao(ht,K),ht.return=W,W=ht;break t}a(W,G);break}else n(W,G);G=G.sibling}K.type===E?(ht=Ja(K.props.children,W.mode,ht,K.key),ht.return=W,W=ht):(ht=hl(K.type,K.key,K.props,null,W.mode,ht),ao(ht,K),ht.return=W,W=ht)}return y(W);case M:t:{for(Gt=K.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(W,G.sibling),ht=c(G,K.children||[]),ht.return=W,W=ht;break t}else{a(W,G);break}else n(W,G);G=G.sibling}ht=_c(K,W.mode,ht),ht.return=W,W=ht}return y(W);case X:return Gt=K._init,K=Gt(K._payload),ze(W,G,K,ht)}if(dt(K))return ne(W,G,K,ht);if(ot(K)){if(Gt=ot(K),typeof Gt!="function")throw Error(r(150));return K=Gt.call(K),$t(W,G,K,ht)}if(typeof K.then=="function")return ze(W,G,Cl(K),ht);if(K.$$typeof===L)return ze(W,G,gl(W,K),ht);Dl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(W,G.sibling),ht=c(G,K),ht.return=W,W=ht):(a(W,G),ht=gc(K,W.mode,ht),ht.return=W,W=ht),y(W)):a(W,G)}return function(W,G,K,ht){try{io=0;var Gt=ze(W,G,K,ht);return Xr=null,Gt}catch(qt){if(qt===js||qt===vl)throw qt;var de=Xn(29,qt,null,W.mode);return de.lanes=ht,de.return=W,de}finally{}}}var Wr=Cm(!0),Dm=Cm(!1),ii=$(null),xi=null;function xa(e){var n=e.alternate;yt(cn,cn.current&1),yt(ii,e),xi===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(xi=e)}function Um(e){if(e.tag===22){if(yt(cn,cn.current),yt(ii,e),xi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(xi=e)}}else Sa()}function Sa(){yt(cn,cn.current),yt(ii,ii.current)}function Xi(e){xt(ii),xi===e&&(xi=null),xt(cn)}var cn=$(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Kc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qc={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=jn(),c=ga(o);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Zn(n,e,o),Ks(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=jn(),c=ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Zn(n,e,o),Ks(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(Zn(n,e,a),Ks(n,e,a))}};function Lm(e,n,a,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,o)||!Hs(c,f):!0}function Nm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Qc.enqueueReplaceState(n,n.state,null)}function or(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Om(e){Ll(e)}function Pm(e){console.error(e)}function Im(e){Ll(e)}function Nl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Jc(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(e,n)},a}function zm(e){return e=ga(e),e.tag=3,e}function Fm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Bm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Bm(n,a,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Cx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return xi===null?Ef():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Rc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),bf(e,o,c)),!1;case 22:return a.flags|=65536,o===Rc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),bf(e,o,c)),!1}throw Error(r(435,a.tag))}return bf(e,o,c),Ef(),!1}if(Re)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Sc&&(e=Error(r(422),{cause:o}),Xs($n(e,a)))):(o!==Sc&&(n=Error(r(423),{cause:o}),Xs($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=$n(o,a),c=Jc(e.stateNode,o,c),Dc(e,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:o});if(f=$n(f,a),fo===null?fo=[f]:fo.push(f),Je!==4&&(Je=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Jc(a.stateNode,o,e),Dc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=zm(c),Fm(c,e,a,o),Dc(a,c),!1}a=a.return}while(a!==null);return!1}var Hm=Error(r(461)),gn=!1;function En(e,n,a,o){n.child=e===null?Dm(n,null,a,o):Wr(n,e.child,a,o)}function Gm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return ar(n),o=Pc(e,n,a,y,f,c),A=Ic(),e!==null&&!gn?(Bc(e,n,c),Wi(e,n,c)):(Re&&A&&vc(n),n.flags|=1,En(e,n,o,c),n.child)}function Vm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!mc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(e,n,f,o,c)):(e=hl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!of(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(y,o)&&e.ref===n.ref)return Wi(e,n,c)}return n.flags|=1,e=zi(f,o),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Hs(f,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=f,of(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Wi(e,n,c)}return $c(e,n,a,o,c)}function Xm(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Wm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_l(n,f!==null?f.cachePool:null),f!==null?kp(n,f):Lc(),Um(n);else return n.lanes=n.childLanes=536870912,Wm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(_l(n,f.cachePool),kp(n,f),Sa(),n.memoizedState=null):(e!==null&&_l(n,null),Lc(),Sa());return En(e,n,c,a),n.child}function Wm(e,n,a,o){var c=Ac();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&_l(n,null),Lc(),Um(n),e!==null&&Ws(e,n,o,!0),null}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $c(e,n,a,o,c){return ar(n),a=Pc(e,n,a,o,void 0,c),o=Ic(),e!==null&&!gn?(Bc(e,n,c),Wi(e,n,c)):(Re&&o&&vc(n),n.flags|=1,En(e,n,a,c),n.child)}function qm(e,n,a,o,c,f){return ar(n),n.updateQueue=null,a=Wp(n,o,a,c),Xp(e),o=Ic(),e!==null&&!gn?(Bc(e,n,f),Wi(e,n,f)):(Re&&o&&vc(n),n.flags|=1,En(e,n,a,f),n.child)}function Ym(e,n,a,o,c){if(ar(n),n.stateNode===null){var f=Pr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wc(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Pr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Kc(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Qc.enqueueReplaceState(f,f.state,null),Js(n,o,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,P=or(a,A);f.props=P;var J=f.context,ct=a.contextType;y=Pr,typeof ct=="object"&&ct!==null&&(y=Rn(ct));var gt=a.getDerivedStateFromProps;ct=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==y)&&Nm(n,f,o,y),ma=!1;var nt=n.memoizedState;f.state=nt,Js(n,o,f,c),Qs(),J=n.memoizedState,A||nt!==J||ma?(typeof gt=="function"&&(Kc(n,a,gt,o),J=n.memoizedState),(P=ma||Lm(n,a,P,o,nt,J,y))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=y,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Cc(e,n),y=n.memoizedProps,ct=or(a,y),f.props=ct,gt=n.pendingProps,nt=f.context,J=a.contextType,P=Pr,typeof J=="object"&&J!==null&&(P=Rn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==gt||nt!==P)&&Nm(n,f,o,P),ma=!1,nt=n.memoizedState,f.state=nt,Js(n,o,f,c),Qs();var it=n.memoizedState;y!==gt||nt!==it||ma||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof A=="function"&&(Kc(n,a,A,o),it=n.memoizedState),(ct=ma||Lm(n,a,ct,o,nt,it,P)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=P,o=ct):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Wr(n,e.child,null,c),n.child=Wr(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Wi(e,n,c),e}function jm(e,n,a,o){return ks(),n.flags|=256,En(e,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Pp()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function Zm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?xa(n):Sa(),Re){var A=Qe,P;if(P=A){t:{for(P=A,A=vi;P.nodeType!==8;){if(!A){A=null;break t}if(P=ci(P.nextSibling),P===null){A=null;break t}}A=P}A!==null?(n.memoizedState={dehydrated:A,treeContext:$a!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=A,P.return=n,n.child=P,Ln=n,Qe=null,P=!0):P=!1}P||nr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Hf(A)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return A=o.children,o=o.fallback,c?(Sa(),c=n.mode,A=Pl({mode:"hidden",children:A},c),o=Ja(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,c=n.child,c.memoizedState=ef(a),c.childLanes=nf(e,y,a),n.memoizedState=tf,o):(xa(n),af(n,A))}if(P=e.memoizedState,P!==null&&(A=P.dehydrated,A!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=o.fallback,A=n.mode,o=Pl({mode:"visible",children:o.children},A),c=Ja(c,A,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Wr(n,e.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,y,a),n.memoizedState=tf,n=c);else if(xa(n),Hf(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var J=y.dgst;y=J,o=Error(r(419)),o.stack="",o.digest=y,Xs({value:o,source:null,stack:null}),n=rf(e,n,a)}else if(gn||Ws(e,n,a,!1),y=(a&e.childLanes)!==0,gn||y){if(y=We,y!==null&&(o=a&-a,o=(o&42)!==0?1:ie(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Or(e,o),Zn(y,e,o),Hm;A.data==="$?"||Ef(),n=rf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Qe=ci(A.nextSibling),Ln=n,Re=!0,er=null,vi=!1,e!==null&&(ei[ni++]=Fi,ei[ni++]=Hi,ei[ni++]=$a,Fi=e.id,Hi=e.overflow,$a=n),n=af(n,o.children),n.flags|=4096);return n}return c?(Sa(),c=o.fallback,A=n.mode,P=e.child,J=P.sibling,o=zi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=zi(J,c):(c=Ja(c,A,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,A=e.child.memoizedState,A===null?A=ef(a):(P=A.cachePool,P!==null?(J=un._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=Pp(),A={baseLanes:A.baseLanes|a,cachePool:P}),c.memoizedState=A,c.childLanes=nf(e,y,a),n.memoizedState=tf,o):(xa(n),a=e.child,e=a.sibling,a=zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function rf(e,n,a){return Wr(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mc(e.return,n,a)}function sf(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Qm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(En(e,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Km(e,a,n);else if(e.tag===19)Km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ul(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}sf(n,!0,a,null,f);break;case"together":sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ws(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Dx(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),pa(n,un,e.memoizedState.cache),ks();break;case 27:case 5:Jt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(e,n,a):(xa(n),e=Wi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ws(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Qm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Xm(e,n,a);case 24:pa(n,un,e.memoizedState.cache)}return Wi(e,n,a)}function Jm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!of(e,a)&&(n.flags&128)===0)return gn=!1,Dx(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Re&&(n.flags&1048576)!==0&&wp(n,pl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")mc(o)?(e=or(o,e),n.tag=1,n=Ym(null,n,o,e,a)):(n.tag=0,n=$c(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Gm(null,n,o,e,a);break t}else if(c===I){n.tag=14,n=Vm(null,n,o,e,a);break t}}throw n=vt(o)||o,Error(r(306,n,""))}}return n;case 0:return $c(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=or(o,n.pendingProps),Ym(e,n,o,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Cc(e,n),Js(n,o,null,a);var y=n.memoizedState;if(o=y.cache,pa(n,un,o),o!==f.cache&&Ec(n,[un],a,!0),Qs(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=jm(e,n,o,a);break t}else if(o!==c){c=$n(Error(r(424)),n),Xs(c),n=jm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=ci(e.firstChild),Ln=n,Re=!0,er=null,vi=!0,a=Dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ks(),o===c){n=Wi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=n_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Zl(Mt.current).createElement(a),o[on]=n,o[yn]=e,bn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=n_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Jt(n),e===null&&Re&&(o=n.stateNode=$g(n.type,n.pendingProps,Mt.current),Ln=n,vi=!0,c=Qe,Ca(n.type)?(Gf=c,Qe=ci(o.firstChild)):Qe=c),En(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=o=Qe)&&(o=aS(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Ln=n,Qe=ci(o.firstChild),vi=!1,c=!0):c=!1),c||nr(n)),Jt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Bf(c,f)?o=null:y!==null&&Bf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Pc(e,n,Mx,null,null,a),yo._currentValue=c),Ol(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Qe)&&(a=rS(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Ln=n,Qe=null,e=!0):e=!1),e||nr(n)),null;case 13:return Zm(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Wr(n,null,o,a):En(e,n,o,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ar(n),c=Rn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return km(e,n,n.type,n.pendingProps,a);case 19:return Qm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Pl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Xm(e,n,a);case 24:return ar(n),o=Rn(un),e===null?(c=Ac(),c===null&&(c=We,f=Tc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},wc(n),pa(n,un,c)):((e.lanes&a)!==0&&(Cc(e,n),Js(n,null,null,a),Qs()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,un,o)):(o=f.cache,pa(n,un,o),o!==c.cache&&Ec(n,[un],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function $m(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!o_(n)){if(n=ii.current,n!==null&&((ye&4194048)===ye?xi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==xi))throw Zs=Rc,Ip;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,Zr|=n)}function ro(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ux(e,n,a){var o=n.pendingProps;switch(xc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(un),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vs(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Up())),je(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(je(n),$m(n,a)):(je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),je(n),$m(n,a)):(je(n),n.flags&=-16777217):(e.memoizedProps!==o&&qi(n),je(n),n.flags&=-16777217),null;case 27:Oe(n),a=Mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}e=Q.current,Vs(n)?Cp(n):(e=$g(c,o,a),n.stateNode=e,qi(n))}return je(n),null;case 5:if(Oe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(e=Q.current,Vs(n))Cp(n);else{switch(c=Zl(Mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[on]=n,e[yn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Vs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||qg(e.nodeValue,a)),e||nr(n)}else e=Zl(e).createTextNode(o),e[on]=n,n.stateNode=e}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Vs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),je(n),null;case 4:return le(),e===null&&Lf(n.stateNode.containerInfo),je(n),null;case 10:return Vi(n.type),je(n),null;case 19:if(xt(cn),c=n.memoizedState,c===null)return je(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)ro(c,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ul(e),f!==null){for(n.flags|=128,ro(c,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Rp(a,e),a=a.sibling;return yt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&pe()>Fl&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304)}else{if(!o)if(e=Ul(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return je(n),null}else 2*pe()-c.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,o=!0,ro(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=pe(),n.sibling=null,e=cn.current,yt(cn,o?e&1|2:e&1),n):(je(n),null);case 22:case 23:return Xi(n),Nc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(un),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Lx(e,n){switch(xc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(un),le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ks()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(cn),null;case 4:return le(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),Nc(),e!==null&&xt(rr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(un),null;case 25:return null;default:return null}}function tg(e,n){switch(xc(n),n.tag){case 3:Vi(un),le();break;case 26:case 27:case 5:Oe(n);break;case 4:le();break;case 13:Xi(n);break;case 19:xt(cn);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),Nc(),e!==null&&xt(rr);break;case 24:Vi(un)}}function so(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(A){ke(n,n.return,A)}}function ya(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,c=n;var P=a,J=A;try{J()}catch(ct){ke(c,P,ct)}}}o=o.next}while(o!==f)}}catch(ct){ke(n,n.return,ct)}}function eg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Vp(n,a)}catch(o){ke(e,e.return,o)}}}function ng(e,n,a){a.props=or(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ke(e,n,o)}}function oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){ke(e,n,c)}}function Si(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){ke(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ke(e,n,c)}else a.current=null}function ig(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){ke(e,e.return,c)}}function lf(e,n,a){try{var o=e.stateNode;$x(o,e.type,a,n),o[yn]=n}catch(c){ke(e,e.return,c)}}function ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=jl));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(cf(e,n,a),e=e.sibling;e!==null;)cf(e,n,a),e=e.sibling}function Bl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bl(e,n,a),e=e.sibling;e!==null;)Bl(e,n,a),e=e.sibling}function rg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[on]=e,n[yn]=a}catch(f){ke(e,e.return,f)}}var Yi=!1,en=!1,ff=!1,sg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Nx(e,n){if(e=e.containerInfo,Pf=eu,e=_p(e),lc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,P=-1,J=0,ct=0,gt=e,nt=null;e:for(;;){for(var it;gt!==a||c!==0&&gt.nodeType!==3||(A=y+c),gt!==f||o!==0&&gt.nodeType!==3||(P=y+o),gt.nodeType===3&&(y+=gt.nodeValue.length),(it=gt.firstChild)!==null;)nt=gt,gt=it;for(;;){if(gt===e)break e;if(nt===a&&++J===c&&(A=y),nt===f&&++ct===o&&(P=y),(it=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=it}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},eu=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=or(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){ke(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function og(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&so(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){ke(a,a.return,y)}else{var c=or(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){ke(a,a.return,y)}}o&64&&eg(a),o&512&&oo(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(e,n)}catch(y){ke(a,a.return,y)}}break;case 27:n===null&&o&4&&rg(a);case 26:case 5:Ma(e,a),n===null&&o&4&&ig(a),o&512&&oo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&cg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vx.bind(null,a),sS(e,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||en,c=Yi;var f=en;Yi=o,(en=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Yi=c,en=f}break;case 30:break;default:Ma(e,a)}}function lg(e){var n=e.alternate;n!==null&&(e.alternate=null,lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ca(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Bn=!1;function ji(e,n,a){for(a=a.child;a!==null;)ug(e,n,a),a=a.sibling}function ug(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:en||Si(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Si(a,n);var o=Ye,c=Bn;Ca(a.type)&&(Ye=a.stateNode,Bn=!1),ji(e,n,a),_o(a.stateNode),Ye=o,Bn=c;break;case 5:en||Si(a,n);case 6:if(o=Ye,c=Bn,Ye=null,ji(e,n,a),Ye=o,Bn=c,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){ke(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){ke(a,n,f)}break;case 18:Ye!==null&&(Bn?(e=Ye,Qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),bo(e)):Qg(Ye,a.stateNode));break;case 4:o=Ye,c=Bn,Ye=a.stateNode.containerInfo,Bn=!0,ji(e,n,a),Ye=o,Bn=c;break;case 0:case 11:case 14:case 15:en||ya(2,a,n),en||ya(4,a,n),ji(e,n,a);break;case 1:en||(Si(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ng(a,n,o)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,ji(e,n,a),en=o;break;default:ji(e,n,a)}}function cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(a){ke(n,n.return,a)}}function Ox(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new sg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new sg),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=Ox(e);n.forEach(function(o){var c=kx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Ca(A.type)){Ye=A.stateNode,Bn=!1;break t}break;case 5:Ye=A.stateNode,Bn=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(Ye===null)throw Error(r(160));ug(f,y,c),Ye=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)fg(n,e),n=n.sibling}var ui=null;function fg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(ya(3,e,e.return),so(3,e),ya(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(en||a===null||Si(a,a.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ui;if(Wn(n,e),qn(e),o&512&&(en||a===null||Si(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ua]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,o,a),f[on]=e,nn(f),o=f;break t;case"link":var y=r_("link","href",c).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;case"meta":if(y=r_("meta","content",c).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,nn(f),o=f}e.stateNode=o}else s_(c,e.type,e.stateNode);else e.stateNode=a_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?s_(c,e.type,e.stateNode):a_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(en||a===null||Si(a,a.return)),a!==null&&o&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(en||a===null||Si(a,a.return)),e.flags&32){c=e.stateNode;try{_i(c,"")}catch(it){ke(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(ff=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){ke(e,e.return,it)}}break;case 3:if(Jl=null,c=ui,ui=Kl(n.containerInfo),Wn(n,e),ui=c,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(n.containerInfo)}catch(it){ke(e,e.return,it)}ff&&(ff=!1,hg(e));break;case 4:o=ui,ui=Kl(e.stateNode.containerInfo),Wn(n,e),qn(e),ui=o;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vf=pe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Yi,ct=en;if(Yi=J||c,en=ct||P,Wn(n,e),en=ct,Yi=J,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Yi||en||lr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=P.stateNode;var gt=P.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){ke(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){ke(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hf(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ag(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(e);Bl(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(_i(y,""),a.flags&=-33);var A=uf(e);Bl(e,A,y);break;case 3:case 4:var P=a.stateNode.containerInfo,J=uf(e);cf(e,J,P);break;default:throw Error(r(161))}}catch(ct){ke(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)og(e,n.alternate,n),n=n.sibling}function lr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),lr(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ng(n,n.return,a),lr(n);break;case 27:_o(n.stateNode);case 26:case 5:Si(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),so(4,f);break;case 1:if(Ea(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){ke(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var A=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Gp(P[c],A)}catch(J){ke(o,o.return,J)}}a&&y&64&&eg(f),oo(f,f.return);break;case 27:rg(f);case 26:case 5:Ea(c,f,a),a&&o===null&&y&4&&ig(f),oo(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&y&4&&cg(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),oo(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function yi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(e,n,a,o),n=n.sibling}function dg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,o),c&2048&&so(9,n);break;case 1:yi(e,n,a,o);break;case 3:yi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(c&2048){yi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){ke(n,n.return,P)}}else yi(e,n,a,o);break;case 13:yi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,o):lo(e,n):f._visibility&2?yi(e,n,a,o):(f._visibility|=2,qr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&df(y,n);break;case 24:yi(e,n,a,o),c&2048&&pf(n.alternate,n);break;default:yi(e,n,a,o)}}function qr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,A=a,P=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:qr(f,y,A,P,c),so(8,y);break;case 23:break;case 22:var ct=y.stateNode;y.memoizedState!==null?ct._visibility&2?qr(f,y,A,P,c):lo(f,y):(ct._visibility|=2,qr(f,y,A,P,c)),c&&J&2048&&df(y.alternate,y);break;case 24:qr(f,y,A,P,c),c&&J&2048&&pf(y.alternate,y);break;default:qr(f,y,A,P,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:lo(a,o),c&2048&&df(o.alternate,o);break;case 24:lo(a,o),c&2048&&pf(o.alternate,o);break;default:lo(a,o)}n=n.sibling}}var uo=8192;function Yr(e){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 26:Yr(e),e.flags&uo&&e.memoizedState!==null&&xS(ui,e.memoizedState,e.memoizedProps);break;case 5:Yr(e);break;case 3:case 4:var n=ui;ui=Kl(e.stateNode.containerInfo),Yr(e),ui=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Yr(e),uo=n):Yr(e));break;default:Yr(e)}}function mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,_g(o,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&ya(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):co(e);break;default:co(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,_g(o,e)}mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function _g(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var c=o.sibling,f=o.return;if(lg(o),o===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var Px={getCacheForType:function(e){var n=Rn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Ix=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,me=null,ye=0,Ne=0,Yn=null,Ta=!1,jr=!1,mf=!1,Zi=0,Je=0,ba=0,ur=0,gf=0,ai=0,Zr=0,fo=null,zn=null,_f=!1,vf=0,Fl=1/0,Hl=null,Aa=null,Tn=0,Ra=null,Kr=null,Qr=0,xf=0,Sf=null,vg=null,ho=0,yf=null;function jn(){if((Le&2)!==0&&ye!==0)return ye&-ye;if(B.T!==null){var e=zr;return e!==0?e:wf()}return Ee()}function xg(){ai===0&&(ai=(ye&536870912)===0||Re?k():536870912);var e=ii.current;return e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===We&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),wa(e,ye,ai,!1)),zt(e,a),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(ur|=a),Je===4&&wa(e,ye,ai,!1)),Mi(e))}function Sg(e,n,a){if((Le&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=o?Fx(e,n):Tf(e,n,!0),f=o;do{if(c===0){jr&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Bx(a)){c=Tf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;c=fo;var P=A.current.memoizedState.isDehydrated;if(P&&(Jr(A,y).flags|=256),y=Tf(A,y,!1),y!==2){if(mf&&!P){A.errorRecoveryDisabledLanes|=f,ur|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Jr(e,0),wa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,ai,!Ta);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=vf+300-pe(),10<c)){if(wa(o,n,ai,!Ta),jt(o,0,!0)!==0)break t;o.timeoutHandle=Zg(yg.bind(null,o,a,zn,Hl,_f,n,ai,ur,Zr,Ta,f,2,-0,0),c);break t}yg(o,a,zn,Hl,_f,n,ai,ur,Zr,Ta,f,0,-0,0)}}break}while(!0);Mi(e)}function yg(e,n,a,o,c,f,y,A,P,J,ct,gt,nt,it){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:vS},pg(n),gt=SS(),gt!==null)){e.cancelPendingCommit=gt(wg.bind(null,e,n,f,a,o,c,y,A,P,ct,1,nt,it)),wa(e,f,y,!J);return}wg(e,n,f,a,o,c,y,A,P)}function Bx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~gf,n&=~ur,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-It(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&_t(e,a,n)}function Gl(){return(Le&6)===0?(po(0),!1):!0}function Mf(){if(me!==null){if(Ne===0)var e=me.return;else e=me,Gi=ir=null,zc(e),Xr=null,io=0,e=me;for(;e!==null;)tg(e.alternate,e),e=e.return;me=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Mf(),We=e,me=a=zi(e.current,null),ye=n,Ne=0,Yn=null,Ta=!1,jr=Ct(e,n),mf=!1,Zr=ai=gf=ur=ba=Je=0,zn=fo=null,_f=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-It(o),f=1<<c;n|=e[c],o&=~f}return Zi=n,ul(),a}function Mg(e,n){fe=null,B.H=wl,n===js||n===vl?(n=Fp(),Ne=3):n===Ip?(n=Fp(),Ne=4):Ne=n===Hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,me===null&&(Je=1,Nl(e,$n(n,e.current)))}function Eg(){var e=B.H;return B.H=wl,e===null?wl:e}function Tg(){var e=B.A;return B.A=Px,e}function Ef(){Je=4,Ta||(ye&4194048)!==ye&&ii.current!==null||(jr=!0),(ba&134217727)===0&&(ur&134217727)===0||We===null||wa(We,ye,ai,!1)}function Tf(e,n,a){var o=Le;Le|=2;var c=Eg(),f=Tg();(We!==e||ye!==n)&&(Hl=null,Jr(e,n)),n=!1;var y=Je;t:do try{if(Ne!==0&&me!==null){var A=me,P=Yn;switch(Ne){case 8:Mf(),y=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var J=Ne;if(Ne=0,Yn=null,$r(e,A,P,J),a&&jr){y=0;break t}break;default:J=Ne,Ne=0,Yn=null,$r(e,A,P,J)}}zx(),y=Je;break}catch(ct){Mg(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Gi=ir=null,Le=o,B.H=c,B.A=f,me===null&&(We=null,ye=0,ul()),y}function zx(){for(;me!==null;)bg(me)}function Fx(e,n){var a=Le;Le|=2;var o=Eg(),c=Tg();We!==e||ye!==n?(Hl=null,Fl=pe()+500,Jr(e,n)):jr=Ct(e,n);t:do try{if(Ne!==0&&me!==null){n=me;var f=Yn;e:switch(Ne){case 1:Ne=0,Yn=null,$r(e,n,f,1);break;case 2:case 9:if(Bp(f)){Ne=0,Yn=null,Ag(n);break}n=function(){Ne!==2&&Ne!==9||We!==e||(Ne=7),Mi(e)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Bp(f)?(Ne=0,Yn=null,Ag(n)):(Ne=0,Yn=null,$r(e,n,f,7));break;case 5:var y=null;switch(me.tag){case 26:y=me.memoizedState;case 5:case 27:var A=me;if(!y||o_(y)){Ne=0,Yn=null;var P=A.sibling;if(P!==null)me=P;else{var J=A.return;J!==null?(me=J,Vl(J)):me=null}break e}}Ne=0,Yn=null,$r(e,n,f,5);break;case 6:Ne=0,Yn=null,$r(e,n,f,6);break;case 8:Mf(),Je=6;break t;default:throw Error(r(462))}}Hx();break}catch(ct){Mg(e,ct)}while(!0);return Gi=ir=null,B.H=o,B.A=c,Le=a,me!==null?0:(We=null,ye=0,ul(),Je)}function Hx(){for(;me!==null&&!Sn();)bg(me)}function bg(e){var n=Jm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Vl(e):me=n}function Ag(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:zc(n);default:tg(a,n),n=me=Rp(n,Zi),n=Jm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Vl(e):me=n}function $r(e,n,a,o){Gi=ir=null,zc(n),Xr=null,io=0;var c=n.return;try{if(Cx(e,c,n,a,ye)){Je=1,Nl(e,$n(a,e.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,Nl(e,$n(a,e.current)),me=null;return}n.flags&32768?(Re||o===1?e=!0:jr||(ye&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rg(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){Rg(n,Ta);return}e=n.return;var a=Ux(n.alternate,n,Zi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Je===0&&(Je=5)}function Rg(e,n){do{var a=Lx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Je=6,me=null}function wg(e,n,a,o,c,f,y,A,P){e.cancelPendingCommit=null;do kl();while(Tn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=dc,Rt(e,a,f,y,A,P),e===We&&(me=We=null,ye=0),Kr=n,Ra=e,Qr=a,xf=f,Sf=c,vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xx(re,function(){return Ng(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,y=Le,Le|=4;try{Nx(e,n,a)}finally{Le=y,Z.p=c,B.T=o}}Tn=1,Cg(),Dg(),Ug()}}function Cg(){if(Tn===1){Tn=0;var e=Ra,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Le;Le|=4;try{fg(n,e);var f=If,y=_p(e.containerInfo),A=f.focusedElem,P=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&gp(A.ownerDocument.documentElement,A)){if(P!==null&&lc(A)){var J=P.start,ct=P.end;if(ct===void 0&&(ct=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ct,A.value.length);else{var gt=A.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ne=A.textContent.length,$t=Math.min(P.start,ne),ze=P.end===void 0?$t:Math.min(P.end,ne);!it.extend&&$t>ze&&(y=ze,ze=$t,$t=y);var W=mp(A,$t),G=mp(A,ze);if(W&&G&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var K=gt.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),$t>ze?(it.addRange(K),it.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),it.addRange(K))}}}}for(gt=[],it=A;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var ht=gt[A];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}eu=!!Pf,If=Pf=null}finally{Le=c,Z.p=o,B.T=a}}e.current=n,Tn=2}}function Dg(){if(Tn===2){Tn=0;var e=Ra,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Le;Le|=4;try{og(e,n.alternate,n)}finally{Le=c,Z.p=o,B.T=a}}Tn=3}}function Ug(){if(Tn===4||Tn===3){Tn=0,Me();var e=Ra,n=Kr,a=Qr,o=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Kr=Ra=null,Lg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),Ue(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];f(A.value,{componentStack:A.stack})}}finally{B.T=n,Z.p=c}}(Qr&3)!==0&&kl(),Mi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===yf?ho++:(ho=0,yf=e):ho=0,po(0)}}function Lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function kl(e){return Cg(),Dg(),Ug(),Ng()}function Ng(){if(Tn!==5)return!1;var e=Ra,n=xf;xf=0;var a=Ue(Qr),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=Sf,Sf=null;var f=Ra,y=Qr;if(Tn=0,Kr=Ra=null,Qr=0,(Le&6)!==0)throw Error(r(331));var A=Le;if(Le|=4,gg(f.current),dg(f,f.current,y,a),Le=A,po(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{Z.p=c,B.T=o,Lg(e,n)}}function Og(e,n,a){n=$n(a,n),n=Jc(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(zt(e,2),Mi(e))}function ke(e,n,a){if(e.tag===3)Og(e,e,a);else for(;n!==null;){if(n.tag===3){Og(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=$n(a,e),a=zm(2),o=_a(n,a,2),o!==null&&(Fm(a,o,n,e),zt(o,2),Mi(o));break}}n=n.return}}function bf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ix;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(mf=!0,c.add(a),e=Gx.bind(null,e,n,a),n.then(e,e))}function Gx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(ye&a)===a&&(Je===4||Je===3&&(ye&62914560)===ye&&300>pe()-vf?(Le&2)===0&&Jr(e,0):gf|=a,Zr===ye&&(Zr=0)),Mi(e)}function Pg(e,n){n===0&&(n=Nt()),e=Or(e,n),e!==null&&(zt(e,n),Mi(e))}function Vx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(e,a)}function kx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Pg(e,a)}function Xx(e,n){return _e(e,n)}var Xl=null,ts=null,Af=!1,Wl=!1,Rf=!1,cr=0;function Mi(e){e!==ts&&e.next===null&&(ts===null?Xl=ts=e:ts=ts.next=e),Wl=!0,Af||(Af=!0,qx())}function po(e,n){if(!Rf&&Wl){Rf=!0;do for(var a=!1,o=Xl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=c&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fg(o,f))}else f=ye,f=jt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,Fg(o,f));o=o.next}while(a);Rf=!1}}function Wx(){Ig()}function Ig(){Wl=Af=!1;var e=0;cr!==0&&(tS()&&(e=cr),cr=0);for(var n=pe(),a=null,o=Xl;o!==null;){var c=o.next,f=Bg(o,n);f===0?(o.next=null,a===null?Xl=c:a.next=c,c===null&&(ts=a)):(a=o,(e!==0||(f&3)!==0)&&(Wl=!0)),o=c}po(e)}function Bg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-It(f),A=1<<y,P=c[y];P===-1?((A&a)===0||(A&o)!==0)&&(c[y]=ae(A,n)):P<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=ye,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&F(o),Ue(a)){case 2:case 8:a=Zt;break;case 32:a=re;break;case 268435456:a=O;break;default:a=re}return o=zg.bind(null,e),a=_e(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&F(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kl()&&e.callbackNode!==a)return null;var o=ye;return o=jt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Sg(e,o,n),Bg(e,pe()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Fg(e,n){if(kl())return null;Sg(e,n,!0)}function qx(){nS(function(){(Le&6)!==0?_e(ve,Wx):Ig()})}function wf(){return cr===0&&(cr=k()),cr}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function Gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Yx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Hg((c[yn]||null).action),y=o.submitter;y&&(n=(n=y[yn]||null)?Hg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new sl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cr!==0){var P=y?Gg(c,y):new FormData(c);Yc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(A.preventDefault(),P=y?Gg(c,y):new FormData(c),Yc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Cf=0;Cf<hc.length;Cf++){var Df=hc[Cf],jx=Df.toLowerCase(),Zx=Df[0].toUpperCase()+Df.slice(1);li(jx,"on"+Zx)}li(Sp,"onAnimationEnd"),li(yp,"onAnimationIteration"),li(Mp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(hx,"onTransitionRun"),li(dx,"onTransitionStart"),li(px,"onTransitionCancel"),li(Ep,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],P=A.instance,J=A.currentTarget;if(A=A.listener,P!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ct){Ll(ct)}c.currentTarget=null,f=P}else for(y=0;y<o.length;y++){if(A=o[y],P=A.instance,J=A.currentTarget,A=A.listener,P!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ct){Ll(ct)}c.currentTarget=null,f=P}}}}function ge(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var o=e+"__bubble";a.has(o)||(kg(n,e,2,!1),a.add(o))}function Uf(e,n,a){var o=0;n&&(o|=4),kg(a,e,o,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[ql]){e[ql]=!0,tl.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Uf("selectionchange",!1,n))}}function kg(e,n,a,o){switch(d_(n)){case 2:var c=ES;break;case 8:c=TS;break;default:c=qf}a=c.bind(null,n,a,e),c=void 0,!$u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===c)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;A!==null;){if(y=Li(A),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=f=y;continue t}A=A.parentNode}}o=o.return}Kd(function(){var J=f,ct=Qu(a),gt=[];t:{var nt=Tp.get(e);if(nt!==void 0){var it=sl,ne=e;switch(e){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":it=Xv;break;case"focusin":ne="focus",it=ic;break;case"focusout":ne="blur",it=ic;break;case"beforeblur":case"afterblur":it=ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Yv;break;case Sp:case yp:case Mp:it=Pv;break;case Ep:it=Zv;break;case"scroll":case"scrollend":it=Dv;break;case"wheel":it=Qv;break;case"copy":case"cut":case"paste":it=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=ep;break;case"toggle":case"beforetoggle":it=$v}var $t=(n&4)!==0,ze=!$t&&(e==="scroll"||e==="scrollend"),W=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var G=J,K;G!==null;){var ht=G;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||W===null||(ht=Ns(G,W),ht!=null&&$t.push(go(G,ht,K))),ze)break;G=G.return}0<$t.length&&(nt=new it(nt,ne,null,a,ct),gt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Ku&&(ne=a.relatedTarget||a.fromElement)&&(Li(ne)||ne[On]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=J,ne=ne?Li(ne):null,ne!==null&&(ze=u(ne),$t=ne.tag,ne!==ze||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(it=null,ne=J),it!==ne)){if($t=$d,ht="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=ep,ht="onPointerLeave",W="onPointerEnter",G="pointer"),ze=it==null?nt:ja(it),K=ne==null?nt:ja(ne),nt=new $t(ht,G+"leave",it,a,ct),nt.target=ze,nt.relatedTarget=K,ht=null,Li(ct)===J&&($t=new $t(W,G+"enter",ne,a,ct),$t.target=K,$t.relatedTarget=ze,ht=$t),ze=ht,it&&ne)e:{for($t=it,W=ne,G=0,K=$t;K;K=es(K))G++;for(K=0,ht=W;ht;ht=es(ht))K++;for(;0<G-K;)$t=es($t),G--;for(;0<K-G;)W=es(W),K--;for(;G--;){if($t===W||W!==null&&$t===W.alternate)break e;$t=es($t),W=es(W)}$t=null}else $t=null;it!==null&&Xg(gt,nt,it,$t,!1),ne!==null&&ze!==null&&Xg(gt,ze,ne,$t,!0)}}t:{if(nt=J?ja(J):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Gt=up;else if(op(nt))if(cp)Gt=ux;else{Gt=ox;var de=sx}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Zu(J.elementType)&&(Gt=up):Gt=lx;if(Gt&&(Gt=Gt(e,J))){lp(gt,Gt,a,ct);break t}de&&de(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(de=J?ja(J):window,e){case"focusin":(op(de)||de.contentEditable==="true")&&(Ur=de,uc=J,Gs=null);break;case"focusout":Gs=uc=Ur=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,vp(gt,a,ct);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":vp(gt,a,ct)}var qt;if(rc)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Dr?rp(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(np&&a.locale!=="ko"&&(Dr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Dr&&(qt=Qd()):(da=ct,tc="value"in da?da.value:da.textContent,Dr=!0)),de=Yl(J,te),0<de.length&&(te=new tp(te,e,null,a,ct),gt.push({event:te,listeners:de}),qt?te.data=qt:(qt=sp(a),qt!==null&&(te.data=qt)))),(qt=ex?nx(e,a):ix(e,a))&&(te=Yl(J,"onBeforeInput"),0<te.length&&(de=new tp("onBeforeInput","beforeinput",null,a,ct),gt.push({event:de,listeners:te}),de.data=qt)),Yx(gt,e,J,a,ct)}Vg(gt,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(e,a),c!=null&&o.unshift(go(e,c,f)),c=Ns(e,n),c!=null&&o.push(go(e,c,f))),e.tag===3)return o;e=e.return}return[]}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,P=A.alternate,J=A.stateNode;if(A=A.tag,P!==null&&P===o)break;A!==5&&A!==26&&A!==27||J===null||(P=J,c?(J=Ns(a,f),J!=null&&y.unshift(go(a,J,P))):c||(J=Ns(a,f),J!=null&&y.push(go(a,J,P)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(Qx,`
`).replace(Jx,"")}function qg(e,n){return n=Wg(n),Wg(e)===n}function jl(){}function Be(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_i(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_i(e,""+o);break;case"className":Ut(e,"class",o);break;case"tabIndex":Ut(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(e,a,o);break;case"style":jd(e,o,f);break;case"data":if(n!=="object"){Ut(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",c.name,c,null),Be(e,n,"formEncType",c.formEncType,c,null),Be(e,n,"formMethod",c.formMethod,c,null),Be(e,n,"formTarget",c.formTarget,c,null)):(Be(e,n,"encType",c.encType,c,null),Be(e,n,"method",c.method,c,null),Be(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=nl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=jl);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=nl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),At(e,"popover",o);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":At(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wv.get(a)||a,At(e,a,o))}}function Of(e,n,a,o,c,f){switch(a){case"style":jd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?_i(e,o):(typeof o=="number"||typeof o=="bigint")&&_i(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!el.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):At(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,f,y,a,null)}}c&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=f=y=c=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":y=ct;break;case"checked":P=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Be(e,n,o,ct,a,null)}}Ve(e,f,A,P,J,y,c,!1),Pe(e);return;case"select":ge("invalid",e),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Be(e,n,c,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Be(e,n,y,A,a,null)}Mn(e,o,c,f),Pe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,P,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<mo.length;o++)ge(mo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,J,o,a,null)}return;default:if(Zu(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&Of(e,n,ct,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Be(e,n,A,o,a,null))}function $x(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,A=null,P=null,J=null,ct=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=gt;default:o.hasOwnProperty(it)||Be(e,n,it,null,o,gt)}}for(var nt in o){var it=o[nt];if(gt=a[nt],o.hasOwnProperty(nt)&&(it!=null||gt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ct=it;break;case"value":y=it;break;case"defaultValue":A=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Be(e,n,nt,it,o,gt)}}Pi(e,y,A,P,J,ct,f,c);return;case"select":it=y=A=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(f)||Be(e,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==P&&Be(e,n,c,f,o,P)}n=A,a=y,o=it,nt!=null?ln(e,!!a,nt,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Be(e,n,y,c,o,f)}mn(e,nt,it);return;case"option":for(var ne in a)if(nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Be(e,n,ne,null,o,nt)}for(P in o)if(nt=o[P],it=a[P],o.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Be(e,n,P,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&Be(e,n,$t,null,o,nt);for(J in o)if(nt=o[J],it=a[J],o.hasOwnProperty(J)&&nt!==it&&(nt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Be(e,n,J,nt,o,it)}return;default:if(Zu(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!o.hasOwnProperty(ze)&&Of(e,n,ze,void 0,o,nt);for(ct in o)nt=o[ct],it=a[ct],!o.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||Of(e,n,ct,nt,o,it);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!o.hasOwnProperty(W)&&Be(e,n,W,null,o,nt);for(gt in o)nt=o[gt],it=a[gt],!o.hasOwnProperty(gt)||nt===it||nt==null&&it==null||Be(e,n,gt,nt,o,it)}var Pf=null,If=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function Yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function tS(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(e){return Kg.resolve(null).then(e).catch(iS)}:Zg;function iS(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Qg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&_o(y.documentElement),a&2&&_o(y.body),a&4)for(a=y.head,_o(a),y=a.firstChild;y;){var A=y.nextSibling,P=y.nodeName;y[ua]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=A}}if(c===0){e.removeChild(f),bo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);bo(n)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function aS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ua])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function rS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function sS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Gf=null;function Jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function $g(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ca(e)}var ri=new Map,t_=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=Z.d;Z.d={f:oS,r:lS,D:uS,C:cS,L:fS,m:hS,X:pS,S:dS,M:mS};function oS(){var e=Ki.f(),n=Gl();return e||n}function lS(e){var n=Ni(e);n!==null&&n.tag===5&&n.type==="form"?Sm(n):Ki.r(e)}var ns=typeof document>"u"?null:document;function e_(e,n,a){var o=ns;if(o&&typeof n=="string"&&n){var c=Xe(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),t_.has(c)||(t_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),nn(n),o.head.appendChild(n)))}}function uS(e){Ki.D(e),e_("dns-prefetch",e,null)}function cS(e,n){Ki.C(e,n),e_("preconnect",e,n)}function fS(e,n,a){Ki.L(e,n,a);var o=ns;if(o&&e&&n){var c='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Xe(a.imageSizes)+'"]')):c+='[href="'+Xe(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}ri.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(vo(f))||n==="script"&&o.querySelector(xo(f))||(n=o.createElement("link"),bn(n,"link",e),nn(n),o.head.appendChild(n)))}}function hS(e,n){Ki.m(e,n);var a=ns;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!ri.has(f)&&(e=_({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}o=a.createElement("link"),bn(o,"link",e),nn(o),a.head.appendChild(o)}}}function dS(e,n,a){Ki.S(e,n,a);var o=ns;if(o&&e){var c=fa(o).hoistableStyles,f=is(e);n=n||"default";var y=c.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(vo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Vf(e,a);var P=y=o.createElement("link");nn(P),bn(P,"link",e),P._p=new Promise(function(J,ct){P.onload=J,P.onerror=ct}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ql(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},c.set(f,y)}}}function pS(e,n){Ki.X(e,n);var a=ns;if(a&&e){var o=fa(a).hoistableScripts,c=as(e),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(e=_({src:e,async:!0},n),(n=ri.get(c))&&kf(e,n),f=a.createElement("script"),nn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function mS(e,n){Ki.M(e,n);var a=ns;if(a&&e){var o=fa(a).hoistableScripts,c=as(e),f=o.get(c);f||(f=a.querySelector(xo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&kf(e,n),f=a.createElement("script"),nn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function n_(e,n,a,o){var c=(c=Mt.current)?Kl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=fa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=fa(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(vo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||gS(c,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=fa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+Xe(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function i_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),nn(n),e.head.appendChild(n))}function as(e){return'[src="'+Xe(e)+'"]'}function xo(e){return"script[async]"+e}function a_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),bn(o,"style",c),Ql(o,a.precedence,e),n.instance=o;case"stylesheet":c=is(a.href);var f=e.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=i_(a),(c=ri.get(c))&&Vf(o,c),f=(e.ownerDocument||e).createElement("link"),nn(f);var y=f;return y._p=new Promise(function(A,P){y.onload=A,y.onerror=P}),bn(f,"link",o),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(xo(f)))?(n.instance=c,nn(c),c):(o=a,(c=ri.get(f))&&(o=_({},a),kf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ql(o,a.precedence,e));return n.instance}function Ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function r_(e,n,a){if(Jl===null){var o=new Map,c=Jl=new Map;c.set(a,o)}else c=Jl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ua]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function s_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function o_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var So=null;function vS(){}function xS(e,n,a){if(So===null)throw Error(r(475));var o=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=is(a.href),f=e.querySelector(vo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=$l.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=i_(a),(c=ri.get(c))&&Vf(a,c),f=f.createElement("link"),nn(f);var y=f;y._p=new Promise(function(A,P){y.onload=A,y.onerror=P}),bn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=$l.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function SS(){if(So===null)throw Error(r(475));var e=So;return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function $l(){if(this.count--,this.count===0){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function Xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,n.forEach(yS,e),tu=null,$l.call(e))}function yS(e,n){if(!(n.state.loading&4)){var a=tu.get(e);if(a)var o=a.get(null);else{a=new Map,tu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=$l.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function MS(e,n,a,o,c,f,y,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function l_(e,n,a,o,c,f,y,A,P,J,ct,gt){return e=new MS(e,n,a,y,A,P,J,gt),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=Tc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wc(f),e}function u_(e){return e?(e=Pr,e):Pr}function c_(e,n,a,o,c,f){c=u_(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(e,o,n),a!==null&&(Zn(a,e,n),Ks(a,e,n))}function f_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){f_(e,n),(e=e.alternate)&&f_(e,n)}function h_(e){if(e.tag===13){var n=Or(e,67108864);n!==null&&Zn(n,e,67108864),Wf(e,67108864)}}var eu=!0;function ES(e,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=2,qf(e,n,a,o)}finally{Z.p=f,B.T=c}}function TS(e,n,a,o){var c=B.T;B.T=null;var f=Z.p;try{Z.p=8,qf(e,n,a,o)}finally{Z.p=f,B.T=c}}function qf(e,n,a,o){if(eu){var c=Yf(o);if(c===null)Nf(e,n,o,nu,a),p_(e,o);else if(AS(c,e,n,a,o))o.stopPropagation();else if(p_(e,o),n&4&&-1<bS.indexOf(e)){for(;c!==null;){var f=Ni(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Yt(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var P=1<<31-It(y);A.entanglements[1]|=P,y&=~P}Mi(f),(Le&6)===0&&(Fl=pe()+500,po(0))}}break;case 13:A=Or(f,2),A!==null&&Zn(A,f,2),Gl(),Wf(f,2)}if(f=Yf(o),f===null&&Nf(e,n,o,nu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Nf(e,n,o,null,a)}}function Yf(e){return e=Qu(e),jf(e)}var nu=null;function jf(e){if(nu=null,e=Li(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nu=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case ve:return 2;case Zt:return 8;case re:case $e:return 32;case O:return 268435456;default:return 32}default:return 32}}var Zf=!1,Da=null,Ua=null,La=null,Mo=new Map,Eo=new Map,Na=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ni(n),n!==null&&h_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function AS(e,n,a,o,c){switch(n){case"focusin":return Da=To(Da,e,n,a,o,c),!0;case"dragenter":return Ua=To(Ua,e,n,a,o,c),!0;case"mouseover":return La=To(La,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,To(Mo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,e,n,a,o,c)),!0}return!1}function m_(e){var n=Li(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(a.tag===13){var o=jn();o=ie(o);var c=Or(a,o);c!==null&&Zn(c,a,o),Wf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ku=o,a.target.dispatchEvent(o),Ku=null}else return n=Ni(a),n!==null&&h_(n),e.blockedOn=a,!1;n.shift()}return!0}function g_(e,n,a){iu(e)&&a.delete(n)}function RS(){Zf=!1,Da!==null&&iu(Da)&&(Da=null),Ua!==null&&iu(Ua)&&(Ua=null),La!==null&&iu(La)&&(La=null),Mo.forEach(g_),Eo.forEach(g_)}function au(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,RS)))}var ru=null;function __(e){ru!==e&&(ru=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ru===e&&(ru=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(jf(o||a)===null)continue;break}var f=Ni(a);f!==null&&(e.splice(n,3),n-=3,Yc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function bo(e){function n(P){return au(P,e)}Da!==null&&au(Da,e),Ua!==null&&au(Ua,e),La!==null&&au(La,e),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)m_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[yn]||null;if(typeof f=="function")y||__(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[yn]||null)A=y.formAction;else if(jf(c)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),__(a)}}}function Kf(e){this._internalRoot=e}su.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=jn();c_(a,o,e,n,null,null)},su.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;c_(e.current,2,null,e,null,null),Gl(),n[On]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&m_(e)}};var v_=t.version;if(v_!=="19.1.0")throw Error(r(527,v_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{ft=ou.inject(wS),pt=ou}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Om,f=Pm,y=Im,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=l_(e,1,!1,null,null,a,o,c,f,y,A,null),e[On]=n.current,Lf(e),new Kf(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=Om,y=Pm,A=Im,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=l_(e,1,!0,n,a??null,o,c,f,y,A,P,J),n.context=u_(null),a=n.current,o=jn(),o=ie(o),c=ga(o),c.callback=null,_a(a,c,o),a=o,n.current.lanes=a,zt(n,a),Mi(n),e[On]=n.current,Lf(e),new su(n)},Ro.version="19.1.0",Ro}var w_;function zS(){if(w_)return $f.exports;w_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),$f.exports=BS(),$f.exports}var FS=zS(),wo={},C_;function HS(){if(C_)return wo;C_=1,Object.defineProperty(wo,"__esModule",{value:!0}),wo.parse=h,wo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function h(v,M){const E=new u,b=v.length;if(b<2)return E;const S=M?.decode||_;let g=0;do{const N=v.indexOf("=",g);if(N===-1)break;const L=v.indexOf(";",g),D=L===-1?b:L;if(N>D){g=v.lastIndexOf(";",N-1)+1;continue}const z=d(v,g,N),V=m(v,N,z),I=v.slice(z,V);if(E[I]===void 0){let X=d(v,N+1,D),C=m(v,D,X);const w=S(v.slice(X,C));E[I]=w}g=D+1}while(g<b);return E}function d(v,M,E){do{const b=v.charCodeAt(M);if(b!==32&&b!==9)return M}while(++M<E);return E}function m(v,M,E){for(;M>E;){const b=v.charCodeAt(--M);if(b!==32&&b!==9)return M+1}return E}function p(v,M,E){const b=E?.encode||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=b(M);if(!t.test(S))throw new TypeError(`argument val is invalid: ${M}`);let g=v+"="+S;if(!E)return g;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);g+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);g+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);g+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);g+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(g+="; HttpOnly"),E.secure&&(g+="; Secure"),E.partitioned&&(g+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return g}function _(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return wo}HS();var D_="popstate";function GS(s={}){function t(r,l){let{pathname:u,search:h,hash:d}=r.location;return zh("",{pathname:u,search:h,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:zo(l)}return kS(t,i,null,s)}function Ze(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ri(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VS(){return Math.random().toString(36).substring(2,10)}function U_(s,t){return{usr:s.state,key:s.key,idx:t}}function zh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?ws(t):t,state:i,key:t&&t.key||r||VS()}}function zo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function ws(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function kS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=_();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function _(){return(h.state||{idx:null}).idx}function x(){d="POP";let S=_(),g=S==null?null:S-p;p=S,m&&m({action:d,location:b.location,delta:g})}function v(S,g){d="PUSH";let N=zh(b.location,S,g);p=_()+1;let L=U_(N,p),D=b.createHref(N);try{h.pushState(L,"",D)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(D)}u&&m&&m({action:d,location:b.location,delta:1})}function M(S,g){d="REPLACE";let N=zh(b.location,S,g);p=_();let L=U_(N,p),D=b.createHref(N);h.replaceState(L,"",D),u&&m&&m({action:d,location:b.location,delta:0})}function E(S){return XS(S)}let b={get action(){return d},get location(){return s(l,h)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(D_,x),m=S,()=>{l.removeEventListener(D_,x),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let g=E(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:M,go(S){return h.go(S)}};return b}function XS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:zo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function N0(s,t,i="/"){return WS(s,t,i,!1)}function WS(s,t,i,r){let l=typeof t=="string"?ws(t):t,u=la(l.pathname||"/",i);if(u==null)return null;let h=O0(s);qS(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=iy(u);d=ey(h[m],p,r)}return d}function O0(s,t=[],i=[],r=""){let l=(u,h,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(Ze(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=sa([r,m.relativePath]),_=i.concat(m);u.children&&u.children.length>0&&(Ze(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),O0(u.children,t,_,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:$S(p,u.index),routesMeta:_})};return s.forEach((u,h)=>{if(u.path===""||!u.path?.includes("?"))l(u,h);else for(let d of P0(u.path))l(u,h,d)}),t}function P0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=P0(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function qS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:ty(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var YS=/^:[\w-]+$/,jS=3,ZS=2,KS=1,QS=10,JS=-2,L_=s=>s==="*";function $S(s,t){let i=s.split("/"),r=i.length;return i.some(L_)&&(r+=JS),t&&(r+=ZS),i.filter(l=>!L_(l)).reduce((l,u)=>l+(YS.test(u)?jS:u===""?KS:QS),r)}function ty(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function ey(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,_=u==="/"?t:t.slice(u.length)||"/",x=Fu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Fu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:sa([u,x.pathname]),pathnameBase:oy(sa([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=sa([u,x.pathnameBase]))}return h}function Fu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=ny(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:_,isOptional:x},v)=>{if(_==="*"){let E=d[v]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return x&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function ny(s,t=!1,i=!0){Ri(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function iy(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ri(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function la(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function ay(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?ws(s):s;return{pathname:i?i.startsWith("/")?i:ry(i,t):t,search:ly(r),hash:uy(l)}}function ry(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ih(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sy(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function I0(s){let t=sy(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function B0(s,t,i,r=!1){let l;typeof s=="string"?l=ws(s):(l={...s},Ze(!l.pathname||!l.pathname.includes("?"),ih("?","pathname","search",l)),Ze(!l.pathname||!l.pathname.includes("#"),ih("#","pathname","hash",l)),Ze(!l.search||!l.search.includes("#"),ih("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let x=t.length-1;if(!r&&h.startsWith("..")){let v=h.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let m=ay(l,d),p=h&&h!=="/"&&h.endsWith("/"),_=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var sa=s=>s.join("/").replace(/\/\/+/g,"/"),oy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ly=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,uy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function cy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var z0=["POST","PUT","PATCH","DELETE"];new Set(z0);var fy=["GET",...z0];new Set(fy);var Cs=ut.createContext(null);Cs.displayName="DataRouter";var Xu=ut.createContext(null);Xu.displayName="DataRouterState";var F0=ut.createContext({isTransitioning:!1});F0.displayName="ViewTransition";var hy=ut.createContext(new Map);hy.displayName="Fetchers";var dy=ut.createContext(null);dy.displayName="Await";var Di=ut.createContext(null);Di.displayName="Navigation";var Xo=ut.createContext(null);Xo.displayName="Location";var Ui=ut.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var Dd=ut.createContext(null);Dd.displayName="RouteError";function py(s,{relative:t}={}){Ze(Wo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ut.useContext(Di),{hash:l,pathname:u,search:h}=qo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:sa([i,u])),r.createHref({pathname:d,search:h,hash:l})}function Wo(){return ut.useContext(Xo)!=null}function Ar(){return Ze(Wo(),"useLocation() may be used only in the context of a <Router> component."),ut.useContext(Xo).location}var H0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function G0(s){ut.useContext(Di).static||ut.useLayoutEffect(s)}function my(){let{isDataRoute:s}=ut.useContext(Ui);return s?Cy():gy()}function gy(){Ze(Wo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ut.useContext(Cs),{basename:t,navigator:i}=ut.useContext(Di),{matches:r}=ut.useContext(Ui),{pathname:l}=Ar(),u=JSON.stringify(I0(r)),h=ut.useRef(!1);return G0(()=>{h.current=!0}),ut.useCallback((m,p={})=>{if(Ri(h.current,H0),!h.current)return;if(typeof m=="number"){i.go(m);return}let _=B0(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:sa([t,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[t,i,u,l,s])}ut.createContext(null);function _y(){let{matches:s}=ut.useContext(Ui),t=s[s.length-1];return t?t.params:{}}function qo(s,{relative:t}={}){let{matches:i}=ut.useContext(Ui),{pathname:r}=Ar(),l=JSON.stringify(I0(i));return ut.useMemo(()=>B0(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function vy(s,t){return V0(s,t)}function V0(s,t,i,r){Ze(Wo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=ut.useContext(Di),{matches:u}=ut.useContext(Ui),h=u[u.length-1],d=h?h.params:{},m=h?h.pathname:"/",p=h?h.pathnameBase:"/",_=h&&h.route;{let g=_&&_.path||"";k0(m,!_||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let x=Ar(),v;if(t){let g=typeof t=="string"?ws(t):t;Ze(p==="/"||g.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${g.pathname}" was given in the \`location\` prop.`),v=g}else v=x;let M=v.pathname||"/",E=M;if(p!=="/"){let g=p.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(g.length).join("/")}let b=N0(s,{pathname:E});Ri(_||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ri(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Ey(b&&b.map(g=>Object.assign({},g,{params:Object.assign({},d,g.params),pathname:sa([p,l.encodeLocation?l.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?p:sa([p,l.encodeLocation?l.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),u,i,r);return t&&S?ut.createElement(Xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function xy(){let s=wy(),t=cy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=ut.createElement(ut.Fragment,null,ut.createElement("p",null,"💿 Hey developer 👋"),ut.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ut.createElement("code",{style:u},"ErrorBoundary")," or"," ",ut.createElement("code",{style:u},"errorElement")," prop on your route.")),ut.createElement(ut.Fragment,null,ut.createElement("h2",null,"Unexpected Application Error!"),ut.createElement("h3",{style:{fontStyle:"italic"}},t),i?ut.createElement("pre",{style:l},i):null,h)}var Sy=ut.createElement(xy,null),yy=class extends ut.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ut.createElement(Ui.Provider,{value:this.props.routeContext},ut.createElement(Dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function My({routeContext:s,match:t,children:i}){let r=ut.useContext(Cs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ut.createElement(Ui.Provider,{value:s},i)}function Ey(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i?.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&u?.[p.route.id]!==void 0);Ze(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let h=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:_,errors:x}=i,v=p.route.loader&&!_.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){h=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,_)=>{let x,v=!1,M=null,E=null;i&&(x=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||Sy,h&&(d<0&&_===0?(k0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===_&&(v=!0,E=p.route.hydrateFallbackElement||null)));let b=t.concat(l.slice(0,_+1)),S=()=>{let g;return x?g=M:v?g=E:p.route.Component?g=ut.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=m,ut.createElement(My,{match:p,routeContext:{outlet:m,matches:b,isDataRoute:i!=null},children:g})};return i&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?ut.createElement(yy,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:S(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):S()},null)}function Ud(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ty(s){let t=ut.useContext(Cs);return Ze(t,Ud(s)),t}function by(s){let t=ut.useContext(Xu);return Ze(t,Ud(s)),t}function Ay(s){let t=ut.useContext(Ui);return Ze(t,Ud(s)),t}function Ld(s){let t=Ay(s),i=t.matches[t.matches.length-1];return Ze(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Ry(){return Ld("useRouteId")}function wy(){let s=ut.useContext(Dd),t=by("useRouteError"),i=Ld("useRouteError");return s!==void 0?s:t.errors?.[i]}function Cy(){let{router:s}=Ty("useNavigate"),t=Ld("useNavigate"),i=ut.useRef(!1);return G0(()=>{i.current=!0}),ut.useCallback(async(l,u={})=>{Ri(i.current,H0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var N_={};function k0(s,t,i){!t&&!N_[s]&&(N_[s]=!0,Ri(!1,i))}ut.memo(Dy);function Dy({routes:s,future:t,state:i}){return V0(s,void 0,i,t)}function Fh(s){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Uy({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Ze(!Wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=ut.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=ws(i));let{pathname:m="/",search:p="",hash:_="",state:x=null,key:v="default"}=i,M=ut.useMemo(()=>{let E=la(m,h);return E==null?null:{location:{pathname:E,search:p,hash:_,state:x,key:v},navigationType:r}},[h,m,p,_,x,v,r]);return Ri(M!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:ut.createElement(Di.Provider,{value:d},ut.createElement(Xo.Provider,{children:t,value:M}))}function Ly({children:s,location:t}){return vy(Hh(s),t)}function Hh(s,t=[]){let i=[];return ut.Children.forEach(s,(r,l)=>{if(!ut.isValidElement(r))return;let u=[...t,l];if(r.type===ut.Fragment){i.push.apply(i,Hh(r.props.children,u));return}Ze(r.type===Fh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Hh(r.props.children,u)),i.push(h)}),i}var Uu="get",Lu="application/x-www-form-urlencoded";function Wu(s){return s!=null&&typeof s.tagName=="string"}function Ny(s){return Wu(s)&&s.tagName.toLowerCase()==="button"}function Oy(s){return Wu(s)&&s.tagName.toLowerCase()==="form"}function Py(s){return Wu(s)&&s.tagName.toLowerCase()==="input"}function Iy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function By(s,t){return s.button===0&&(!t||t==="_self")&&!Iy(s)}var lu=null;function zy(){if(lu===null)try{new FormData(document.createElement("form"),0),lu=!1}catch{lu=!0}return lu}var Fy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ah(s){return s!=null&&!Fy.has(s)?(Ri(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lu}"`),null):s}function Hy(s,t){let i,r,l,u,h;if(Oy(s)){let d=s.getAttribute("action");r=d?la(d,t):null,i=s.getAttribute("method")||Uu,l=ah(s.getAttribute("enctype"))||Lu,u=new FormData(s)}else if(Ny(s)||Py(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?la(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Uu,l=ah(s.getAttribute("formenctype"))||ah(d.getAttribute("enctype"))||Lu,u=new FormData(d,s),!zy()){let{name:p,type:_,value:x}=s;if(_==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,x)}}else{if(Wu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Uu,r=null,l=Lu,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}function Nd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function Gy(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Vy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function ky(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let h=await Gy(u,i);return h.links?h.links():[]}return[]}));return Yy(r.flat(1).filter(Vy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function O_(s,t,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Xy(s,t,{includeHydrateFallback:i}={}){return Wy(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Wy(s){return[...new Set(s)]}function qy(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Yy(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(qy(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jy=new Set([100,101,204,205]);function Zy(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&la(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function X0(){let s=ut.useContext(Cs);return Nd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Ky(){let s=ut.useContext(Xu);return Nd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Od=ut.createContext(void 0);Od.displayName="FrameworkContext";function W0(){let s=ut.useContext(Od);return Nd(s,"You must render this element inside a <HydratedRouter> element"),s}function Qy(s,t){let i=ut.useContext(Od),[r,l]=ut.useState(!1),[u,h]=ut.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:x}=t,v=ut.useRef(null);ut.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let b=g=>{g.forEach(N=>{h(N.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),ut.useEffect(()=>{if(r){let b=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(b)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Co(d,M),onBlur:Co(m,E),onMouseEnter:Co(p,M),onMouseLeave:Co(_,E),onTouchStart:Co(x,M)}]:[!1,v,{}]}function Co(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function Jy({page:s,...t}){let{router:i}=X0(),r=ut.useMemo(()=>N0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ut.createElement(tM,{page:s,matches:r,...t}):null}function $y(s){let{manifest:t,routeModules:i}=W0(),[r,l]=ut.useState([]);return ut.useEffect(()=>{let u=!1;return ky(s,t,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,t,i]),r}function tM({page:s,matches:t,...i}){let r=Ar(),{manifest:l,routeModules:u}=W0(),{basename:h}=X0(),{loaderData:d,matches:m}=Ky(),p=ut.useMemo(()=>O_(s,t,m,l,r,"data"),[s,t,m,l,r]),_=ut.useMemo(()=>O_(s,t,m,l,r,"assets"),[s,t,m,l,r]),x=ut.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,b=!1;if(t.forEach(g=>{let N=l.routes[g.route.id];!N||!N.hasLoader||(!p.some(L=>L.route.id===g.route.id)&&g.route.id in d&&u[g.route.id]?.shouldRevalidate||N.hasClientLoader?b=!0:E.add(g.route.id))}),E.size===0)return[];let S=Zy(s,h);return b&&E.size>0&&S.searchParams.set("_routes",t.filter(g=>E.has(g.route.id)).map(g=>g.route.id).join(",")),[S.pathname+S.search]},[h,d,r,l,p,t,s,u]),v=ut.useMemo(()=>Xy(_,l),[_,l]),M=$y(_);return ut.createElement(ut.Fragment,null,x.map(E=>ut.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>ut.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:b})=>ut.createElement("link",{key:E,...b})))}function eM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var q0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{q0&&(window.__reactRouterVersion="7.6.3")}catch{}function nM({basename:s,children:t,window:i}){let r=ut.useRef();r.current==null&&(r.current=GS({window:i,v5Compat:!0}));let l=r.current,[u,h]=ut.useState({action:l.action,location:l.location}),d=ut.useCallback(m=>{ut.startTransition(()=>h(m))},[h]);return ut.useLayoutEffect(()=>l.listen(d),[l,d]),ut.createElement(Uy,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fo=ut.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:_,viewTransition:x,...v},M){let{basename:E}=ut.useContext(Di),b=typeof p=="string"&&Y0.test(p),S,g=!1;if(typeof p=="string"&&b&&(S=p,q0))try{let C=new URL(window.location.href),w=p.startsWith("//")?new URL(C.protocol+p):new URL(p),H=la(w.pathname,E);w.origin===C.origin&&H!=null?p=H+w.search+w.hash:g=!0}catch{Ri(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=py(p,{relative:l}),[L,D,z]=Qy(r,v),V=sM(p,{replace:h,state:d,target:m,preventScrollReset:_,relative:l,viewTransition:x});function I(C){t&&t(C),C.defaultPrevented||V(C)}let X=ut.createElement("a",{...v,...z,href:S||N,onClick:g||u?t:I,ref:eM(M,D),target:m,"data-discover":!b&&i==="render"?"true":void 0});return L&&!b?ut.createElement(ut.Fragment,null,X,ut.createElement(Jy,{page:N})):X});Fo.displayName="Link";var iM=ut.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},_){let x=qo(h,{relative:p.relative}),v=Ar(),M=ut.useContext(Xu),{navigator:E,basename:b}=ut.useContext(Di),S=M!=null&&fM(x)&&d===!0,g=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,N=v.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(N=N.toLowerCase(),L=L?L.toLowerCase():null,g=g.toLowerCase()),L&&b&&(L=la(L,b)||L);const D=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let z=N===g||!l&&N.startsWith(g)&&N.charAt(D)==="/",V=L!=null&&(L===g||!l&&L.startsWith(g)&&L.charAt(g.length)==="/"),I={isActive:z,isPending:V,isTransitioning:S},X=z?t:void 0,C;typeof r=="function"?C=r(I):C=[r,z?"active":null,V?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(I):u;return ut.createElement(Fo,{...p,"aria-current":X,className:C,ref:_,style:w,to:h,viewTransition:d},typeof m=="function"?m(I):m)});iM.displayName="NavLink";var aM=ut.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Uu,action:d,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:x,...v},M)=>{let E=uM(),b=cM(d,{relative:p}),S=h.toLowerCase()==="get"?"get":"post",g=typeof d=="string"&&Y0.test(d),N=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,z=D?.getAttribute("formmethod")||h;E(D||L.currentTarget,{fetcherKey:t,method:z,navigate:i,replace:l,state:u,relative:p,preventScrollReset:_,viewTransition:x})};return ut.createElement("form",{ref:M,method:S,action:b,onSubmit:r?m:N,...v,"data-discover":!g&&s==="render"?"true":void 0})});aM.displayName="Form";function rM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j0(s){let t=ut.useContext(Cs);return Ze(t,rM(s)),t}function sM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=my(),m=Ar(),p=qo(s,{relative:u});return ut.useCallback(_=>{if(By(_,t)){_.preventDefault();let x=i!==void 0?i:zo(m)===zo(p);d(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,t,s,l,u,h])}var oM=0,lM=()=>`__${String(++oM)}__`;function uM(){let{router:s}=j0("useSubmit"),{basename:t}=ut.useContext(Di),i=Ry();return ut.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=Hy(r,t);if(l.navigate===!1){let _=l.fetcherKey||lM();await s.fetch(_,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function cM(s,{relative:t}={}){let{basename:i}=ut.useContext(Di),r=ut.useContext(Ui);Ze(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...qo(s||".",{relative:t})},h=Ar();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(_=>_==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let _=d.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:sa([i,u.pathname])),zo(u)}function fM(s,t={}){let i=ut.useContext(F0);Ze(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=j0("useViewTransitionState"),l=qo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=la(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=la(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Fu(l.pathname,h)!=null||Fu(l.pathname,u)!=null}[...jy];const Gh=[{id:1,title:"Youtube",subtitle:"Effects & Capabilities",description:"Description for project 1",year:"2024 - current",type:"Web Development",image:"https://picsum.photos/400/600?random=1",bannerImage:"https://picsum.photos/1200/400?random=1banner",tools:["React","Three.js","Tailwind CSS"],processes:["Design","Development","Deployment"]},{id:2,title:"Miu Miu",subtitle:"Fall/Winter 2024",description:"Description for project 2",year:"2022",type:"UI/UX Design",image:"/miumiu/social_1.gif",bannerImage:"/miumiu/banner.jpg",videoUrl:"https://www.youtube.com/embed/V8d6T4rRZ1U?si=PY8txMoiJr3X0xFk&controls=0&loop=1&playlist=V8d6T4rRZ1U&autoplay=1&mute=1",additionalVideos:["/miumiu/social_1.mp4","/miumiu/social_2.mp4"],projectImages:["/miumiu/miumiu-set-1.avif","/miumiu/miumiu-set-2.avif","/miumiu/miumiu-set-3.avif","/miumiu/miumiu-set-4.avif"],standaloneImage:"/miumiu/miumiu_set-5.jpeg"},{id:3,title:"Moncler X Salehe Bembury",subtitle:"UI/UX REDESIGN",description:"Description for project 3",year:"2023",type:"UI/UX Design",image:"/salahe/1.jpg",bannerImage:"/salahe/banner2.avif",videoUrl:"https://www.youtube.com/embed/HgMMMktXVLw?si=6p4yWV8-FMk_QPeZ&controls=0&loop=1&playlist=HgMMMktXVLw&autoplay=1&mute=1",projectImages:["/salahe/5.jpg","/salahe/2.jpg","/salahe/3.jpg","/salahe/6.jpg","/salahe/1.jpg","/salahe/4.jpg"]},{id:4,title:"ELENA VELEZ",subtitle:"YR003 - How's MY DRIVING?",description:"Description for project 4",year:"2023",type:"Mobile App",image:"/elena_velez/2.gif",bannerImage:"/elena_velez/banner.jpg",projectImages:["/elena_velez/1.gif","/elena_velez/2.gif","/elena_velez/grid1.jpg","/elena_velez/grid2.jpg","/elena_velez/grid3.jpg","/elena_velez/grid5.jpg"],videoUrl:"https://www.youtube.com/embed/U36lCOp2XPQ?si=Hj6nnR2Nl3SAcCg6&controls=0&loop=1&playlist=U36lCOp2XPQ&autoplay=1&mute=1"},{id:5,title:"Megan Thee Stallion",description:"Music video for Cobra",year:"2023",type:"3D/VFX",image:"/megan/3f8a0195a529b143e9337ff5be40ee6871-megancobra.2x.rsocial.w600.webp",bannerImage:"/megan/megan-banner.jpeg",videoUrl:"https://www.youtube.com/embed/DOZNRoL0310?si=CW1i1qtX7nGc_PpE&loop=1&playlist=DOZNRoL0310&autoplay=1&mute=1"},{id:7,title:"Cecile B. Evans",description:"3D animation and VFX for Reality or Not",year:"2023",type:"3D/VFX",image:"https://picsum.photos/600/300?random=7"},{id:8,title:"Project 8",description:"Description for project 8",year:"2022",type:"Mobile App",image:"https://picsum.photos/450/450?random=8"},{id:9,title:"Project 9",description:"Description for project 9",year:"2021",type:"UI/UX Design",image:"https://picsum.photos/400/700?random=9"},{id:10,title:"Project 10",description:"Description for project 10",year:"2021",type:"Web Development",image:"https://picsum.photos/800/400?random=10"},{id:11,title:"Project 11",description:"Description for project 11",year:"2021",type:"Mobile App",image:"https://picsum.photos/350/500?random=11"},{id:12,title:"Project 12",description:"Description for project 12",year:"2020",type:"UI/UX Design",image:"https://picsum.photos/500/350?random=12"},{id:13,title:"Project 13",description:"Description for project 13",year:"2020",type:"Web Development",image:"https://picsum.photos/400/800?random=13"},{id:14,title:"Project 14",description:"Description for project 14",year:"2020",type:"Mobile App",image:"https://picsum.photos/600/600?random=14"},{id:15,title:"Project 15",description:"Description for project 15",year:"2019",type:"UI/UX Design",image:"https://picsum.photos/300/400?random=15"},{id:16,title:"Project 16",description:"Description for project 16",year:"2019",type:"Web Development",image:"https://picsum.photos/700/300?random=16"},{id:17,title:"Project 17",description:"Description for project 17",year:"2019",type:"Mobile App",image:"https://picsum.photos/450/600?random=17"},{id:18,title:"Project 18",description:"Description for project 18",year:"2018",type:"UI/UX Design",image:"https://picsum.photos/500/800?random=18"},{id:19,title:"Project 19",description:"Description for project 19",year:"2018",type:"Web Development",image:"https://picsum.photos/400/500?random=19"},{id:20,title:"Project 20",description:"Description for project 20",year:"2018",type:"Web Development",image:"https://picsum.photos/600/450?random=20"}],hM=[{name:"Instagram",url:"#",title:"Instagram",icon:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"},{name:"LinkedIn",url:"#",title:"LinkedIn",icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},{name:"Portfolio",url:"#",title:"Portfolio",icon:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="178",dM=0,P_=1,pM=2,Z0=1,K0=2,na=3,Xa=0,Hn=1,ia=2,Va=0,Ss=1,I_=2,B_=3,z_=4,mM=5,xr=100,gM=101,_M=102,vM=103,xM=104,SM=200,yM=201,MM=202,EM=203,Vh=204,kh=205,TM=206,bM=207,AM=208,RM=209,wM=210,CM=211,DM=212,UM=213,LM=214,Xh=0,Wh=1,qh=2,Es=3,Yh=4,jh=5,Zh=6,Kh=7,Q0=0,NM=1,OM=2,ka=0,PM=1,IM=2,BM=3,zM=4,FM=5,HM=6,GM=7,J0=300,Ts=301,bs=302,Qh=303,Jh=304,qu=306,$h=1e3,yr=1001,td=1002,gi=1003,VM=1004,uu=1005,Ti=1006,rh=1007,Mr=1008,wi=1009,$0=1010,tv=1011,Ho=1012,Id=1013,Tr=1014,aa=1015,Yo=1016,Bd=1017,zd=1018,Go=1020,ev=35902,nv=1021,iv=1022,mi=1023,Vo=1026,ko=1027,av=1028,Fd=1029,rv=1030,Hd=1031,Gd=1033,Nu=33776,Ou=33777,Pu=33778,Iu=33779,ed=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,ud=37809,cd=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,Sd=37820,yd=37821,Bu=36492,Md=36494,Ed=36495,sv=36283,Td=36284,bd=36285,Ad=36286,kM=3200,XM=3201,ov=0,WM=1,Ga="",oi="srgb",As="srgb-linear",Hu="linear",Fe="srgb",rs=7680,F_=519,qM=512,YM=513,jM=514,lv=515,ZM=516,KM=517,QM=518,JM=519,H_=35044,G_="300 es",ra=2e3,Gu=2001;class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Rd=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Se(s,t,i){return Math.max(t,Math.min(i,s))}function $M(s,t){return(s%t+t)%t}function oh(s,t,i){return(1-i)*s+i*t}function Do(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3];const v=u[h+0],M=u[h+1],E=u[h+2],b=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=M,t[i+2]=E,t[i+3]=b;return}if(x!==b||m!==v||p!==M||_!==E){let S=1-d;const g=m*v+p*M+_*E+x*b,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const z=Math.sqrt(L),V=Math.atan2(z,g*N);S=Math.sin(S*V)/z,d=Math.sin(d*V)/z}const D=d*N;if(m=m*S+v*D,p=p*S+M*D,_=_*S+E*D,x=x*S+b*D,S===1-d){const z=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=z,p*=z,_*=z,x*=z}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[h],v=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+_*x+m*M-p*v,t[i+1]=m*E+_*v+p*x-d*M,t[i+2]=p*E+_*M+d*v-m*x,t[i+3]=_*E-d*x-m*v-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),x=d(u/2),v=m(r/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=v*_*x+p*M*E,this._y=p*M*x-v*_*E,this._z=p*_*E+v*M*x,this._w=p*_*x-v*M*E;break;case"YXZ":this._x=v*_*x+p*M*E,this._y=p*M*x-v*_*E,this._z=p*_*E-v*M*x,this._w=p*_*x+v*M*E;break;case"ZXY":this._x=v*_*x-p*M*E,this._y=p*M*x+v*_*E,this._z=p*_*E+v*M*x,this._w=p*_*x-v*M*E;break;case"ZYX":this._x=v*_*x-p*M*E,this._y=p*M*x+v*_*E,this._z=p*_*E-v*M*x,this._w=p*_*x+v*M*E;break;case"YZX":this._x=v*_*x+p*M*E,this._y=p*M*x+v*_*E,this._z=p*_*E-v*M*x,this._w=p*_*x-v*M*E;break;case"XZY":this._x=v*_*x-p*M*E,this._y=p*M*x-v*_*E,this._z=p*_*E+v*M*x,this._w=p*_*x+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],v=r+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),x=Math.sin((1-i)*_)/p,v=Math.sin(i*_)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(V_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*_,this.y=r+m*_+d*p-u*x,this.z=l+m*x+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new tt,V_=new Zo;class oe{constructor(t,i,r,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],x=r[7],v=r[2],M=r[5],E=r[8],b=l[0],S=l[3],g=l[6],N=l[1],L=l[4],D=l[7],z=l[2],V=l[5],I=l[8];return u[0]=h*b+d*N+m*z,u[3]=h*S+d*L+m*V,u[6]=h*g+d*D+m*I,u[1]=p*b+_*N+x*z,u[4]=p*S+_*L+x*V,u[7]=p*g+_*D+x*I,u[2]=v*b+M*N+E*z,u[5]=v*S+M*L+E*V,u[8]=v*g+M*D+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,v=d*m-_*u,M=p*u-h*m,E=i*x+r*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=x*b,t[1]=(l*p-_*r)*b,t[2]=(d*r-l*h)*b,t[3]=v*b,t[4]=(_*i-l*m)*b,t[5]=(l*u-d*i)*b,t[6]=M*b,t[7]=(r*m-p*i)*b,t[8]=(h*i-r*u)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(uh.makeScale(t,i)),this}rotate(t){return this.premultiply(uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new oe;function uv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tE(){const s=Vu("canvas");return s.style.display="block",s}const k_={};function ys(s){s in k_||(k_[s]=!0,console.warn(s))}function eE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function nE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const X_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aE(){const s={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Hu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[As]:{primaries:t,whitePoint:r,transfer:Hu,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const be=aE();function oa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class rE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ss===void 0&&(ss=Vu("canvas")),ss.width=t.width,ss.height=t.height;const l=ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sE=0;class Vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(ch(l[h].image)):u.push(ch(l[h]))}else u=ch(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oE=0;const fh=new tt;class Gn extends Ds{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=yr,l=yr,u=Ti,h=Mr,d=mi,m=wi,p=Gn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=jo(),this.name="",this.source=new Vd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=J0;Gn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],x=m[8],v=m[1],M=m[5],E=m[9],b=m[2],S=m[6],g=m[10];if(Math.abs(_-v)<.01&&Math.abs(x-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,z=(g+1)/2,V=(_+v)/4,I=(x+b)/4,X=(E+S)/4;return L>D&&L>z?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=V/r,u=I/r):D>z?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=V/l,u=X/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=I/u,l=X/u),this.set(r,l,u,i),this}let N=Math.sqrt((S-E)*(S-E)+(x-b)*(x-b)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(x-b)/N,this.z=(v-_)/N,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lE extends Ds{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Vd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends lE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class cv extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uE extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cu.copy(r.boundingBox)),cu.applyMatrix4(t.matrixWorld),this.union(cu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),fu.subVectors(this.max,Uo),os.subVectors(t.a,Uo),ls.subVectors(t.b,Uo),us.subVectors(t.c,Uo),Pa.subVectors(ls,os),Ia.subVectors(us,ls),fr.subVectors(os,us);let i=[0,-Pa.z,Pa.y,0,-Ia.z,Ia.y,0,-fr.z,fr.y,Pa.z,0,-Pa.x,Ia.z,0,-Ia.x,fr.z,0,-fr.x,-Pa.y,Pa.x,0,-Ia.y,Ia.x,0,-fr.y,fr.x,0];return!hh(i,os,ls,us,fu)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,os,ls,us,fu))?!1:(hu.crossVectors(Pa,Ia),i=[hu.x,hu.y,hu.z],hh(i,os,ls,us,fu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],fi=new tt,cu=new Ko,os=new tt,ls=new tt,us=new tt,Pa=new tt,Ia=new tt,fr=new tt,Uo=new tt,fu=new tt,hu=new tt,hr=new tt;function hh(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){hr.fromArray(s,u);const d=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=t.dot(hr),p=i.dot(hr),_=r.dot(hr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const cE=new Ko,Lo=new tt,dh=new tt;class kd{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):cE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(dh)),this.expandByPoint(Lo.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ji=new tt,ph=new tt,du=new tt,Ba=new tt,mh=new tt,pu=new tt,gh=new tt;class fE{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ph.copy(t).add(i).multiplyScalar(.5),du.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(ph);const u=t.distanceTo(i)*.5,h=-this.direction.dot(du),d=Ba.dot(this.direction),m=-Ba.dot(du),p=Ba.lengthSq(),_=Math.abs(1-h*h);let x,v,M,E;if(_>0)if(x=h*m-d,v=h*d-m,E=u*_,x>=0)if(v>=-E)if(v<=E){const b=1/_;x*=b,v*=b,M=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),M=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ph).addScaledVector(du,v),M}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),_>=0?(u=(t.min.y-v.y)*_,h=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,h=(t.min.y-v.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,r,l,u){mh.subVectors(i,t),pu.subVectors(r,t),gh.crossVectors(mh,pu);let h=this.direction.dot(gh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(pu.crossVectors(Ba,pu));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Ba));if(p<0||m+p>h)return null;const _=-d*Ba.dot(gh);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,r,l,u,h,d,m,p,_,x,v,M,E,b,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,_,x,v,M,E,b,S)}set(t,i,r,l,u,h,d,m,p,_,x,v,M,E,b,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=v,g[3]=M,g[7]=E,g[11]=b,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/cs.setFromMatrixColumn(t,0).length(),u=1/cs.setFromMatrixColumn(t,1).length(),h=1/cs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=h*_,M=h*x,E=d*_,b=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=v-b*p,i[9]=-d*m,i[2]=b-v*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*_,M=m*x,E=p*_,b=p*x;i[0]=v+b*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=M*d-E,i[6]=b+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*_,M=m*x,E=p*_,b=p*x;i[0]=v-b*d,i[4]=-h*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*_,i[9]=b-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*_,M=h*x,E=d*_,b=d*x;i[0]=m*_,i[4]=E*p-M,i[8]=v*p+b,i[1]=m*x,i[5]=b*p+v,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*_,i[4]=b-v*x,i[8]=E*x+M,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*x+E,i[10]=v-b*x}else if(t.order==="XZY"){const v=h*m,M=h*p,E=d*m,b=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=v*x+b,i[5]=h*_,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*_,i[10]=b*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hE,t,dE)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),za.crossVectors(r,Kn),za.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),za.crossVectors(r,Kn)),za.normalize(),mu.crossVectors(Kn,za),l[0]=za.x,l[4]=mu.x,l[8]=Kn.x,l[1]=za.y,l[5]=mu.y,l[9]=Kn.y,l[2]=za.z,l[6]=mu.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],x=r[5],v=r[9],M=r[13],E=r[2],b=r[6],S=r[10],g=r[14],N=r[3],L=r[7],D=r[11],z=r[15],V=l[0],I=l[4],X=l[8],C=l[12],w=l[1],H=l[5],ot=l[9],st=l[13],vt=l[2],dt=l[6],B=l[10],Z=l[14],Y=l[3],Tt=l[7],U=l[11],$=l[15];return u[0]=h*V+d*w+m*vt+p*Y,u[4]=h*I+d*H+m*dt+p*Tt,u[8]=h*X+d*ot+m*B+p*U,u[12]=h*C+d*st+m*Z+p*$,u[1]=_*V+x*w+v*vt+M*Y,u[5]=_*I+x*H+v*dt+M*Tt,u[9]=_*X+x*ot+v*B+M*U,u[13]=_*C+x*st+v*Z+M*$,u[2]=E*V+b*w+S*vt+g*Y,u[6]=E*I+b*H+S*dt+g*Tt,u[10]=E*X+b*ot+S*B+g*U,u[14]=E*C+b*st+S*Z+g*$,u[3]=N*V+L*w+D*vt+z*Y,u[7]=N*I+L*H+D*dt+z*Tt,u[11]=N*X+L*ot+D*B+z*U,u[15]=N*C+L*st+D*Z+z*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],v=t[10],M=t[14],E=t[3],b=t[7],S=t[11],g=t[15];return E*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*M-r*m*M)+b*(+i*m*M-i*p*v+u*h*v-l*h*M+l*p*_-u*m*_)+S*(+i*p*x-i*d*M-u*h*x+r*h*M+u*d*_-r*p*_)+g*(-l*d*_-i*m*x+i*d*v+l*h*x-r*h*v+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],v=t[10],M=t[11],E=t[12],b=t[13],S=t[14],g=t[15],N=x*S*p-b*v*p+b*m*M-d*S*M-x*m*g+d*v*g,L=E*v*p-_*S*p-E*m*M+h*S*M+_*m*g-h*v*g,D=_*b*p-E*x*p+E*d*M-h*b*M-_*d*g+h*x*g,z=E*x*m-_*b*m-E*d*v+h*b*v+_*d*S-h*x*S,V=i*N+r*L+l*D+u*z;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return t[0]=N*I,t[1]=(b*v*u-x*S*u-b*l*M+r*S*M+x*l*g-r*v*g)*I,t[2]=(d*S*u-b*m*u+b*l*p-r*S*p-d*l*g+r*m*g)*I,t[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*M-r*m*M)*I,t[4]=L*I,t[5]=(_*S*u-E*v*u+E*l*M-i*S*M-_*l*g+i*v*g)*I,t[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*g-i*m*g)*I,t[7]=(h*v*u-_*m*u+_*l*p-i*v*p-h*l*M+i*m*M)*I,t[8]=D*I,t[9]=(E*x*u-_*b*u-E*r*M+i*b*M+_*r*g-i*x*g)*I,t[10]=(h*b*u-E*d*u+E*r*p-i*b*p-h*r*g+i*d*g)*I,t[11]=(_*d*u-h*x*u-_*r*p+i*x*p+h*r*M-i*d*M)*I,t[12]=z*I,t[13]=(_*b*l-E*x*l+E*r*v-i*b*v-_*r*S+i*x*S)*I,t[14]=(E*d*l-h*b*l-E*r*m+i*b*m+h*r*S-i*d*S)*I,t[15]=(h*x*l-_*d*l+_*r*m-i*x*m-h*r*v+i*d*v)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,x=d+d,v=u*p,M=u*_,E=u*x,b=h*_,S=h*x,g=d*x,N=m*p,L=m*_,D=m*x,z=r.x,V=r.y,I=r.z;return l[0]=(1-(b+g))*z,l[1]=(M+D)*z,l[2]=(E-L)*z,l[3]=0,l[4]=(M-D)*V,l[5]=(1-(v+g))*V,l[6]=(S+N)*V,l[7]=0,l[8]=(E+L)*I,l[9]=(S-N)*I,l[10]=(1-(v+b))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const h=cs.set(l[4],l[5],l[6]).length(),d=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],hi.copy(this);const p=1/u,_=1/h,x=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=x,hi.elements[9]*=x,hi.elements[10]*=x,i.setFromRotationMatrix(hi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=ra){const m=this.elements,p=2*u/(i-t),_=2*u/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let M,E;if(d===ra)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Gu)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ra){const m=this.elements,p=1/(i-t),_=1/(r-l),x=1/(h-u),v=(i+t)*p,M=(r+l)*_;let E,b;if(d===ra)E=(h+u)*x,b=-2*x;else if(d===Gu)E=u*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const cs=new tt,hi=new Ke,hE=new tt(0,0,0),dE=new tt(1,1,1),za=new tt,mu=new tt,Kn=new tt,q_=new Ke,Y_=new Zo;class Ci{constructor(t=0,i=0,r=0,l=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pE=0;const j_=new tt,fs=new Zo,$i=new Ke,gu=new tt,No=new tt,mE=new tt,gE=new Zo,Z_=new tt(1,0,0),K_=new tt(0,1,0),Q_=new tt(0,0,1),J_={type:"added"},_E={type:"removed"},hs={type:"childadded",child:null},_h={type:"childremoved",child:null};class Un extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new tt,i=new Ci,r=new Zo,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new oe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Z_,t)}rotateY(t){return this.rotateOnAxis(K_,t)}rotateZ(t){return this.rotateOnAxis(Q_,t)}translateOnAxis(t,i){return j_.copy(t).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z_,t)}translateY(t){return this.translateOnAxis(K_,t)}translateZ(t){return this.translateOnAxis(Q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?gu.copy(t):gu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(No,gu,this.up):$i.lookAt(gu,No,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),fs.setFromRotationMatrix($i),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_E),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,mE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,gE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),v=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new tt(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new tt,ta=new tt,vh=new tt,ea=new tt,ds=new tt,ps=new tt,$_=new tt,xh=new tt,Sh=new tt,yh=new tt,Mh=new He,Eh=new He,Th=new He;class pi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),di.subVectors(t,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){di.subVectors(l,i),ta.subVectors(r,i),vh.subVectors(t,i);const h=di.dot(di),d=di.dot(ta),m=di.dot(vh),p=ta.dot(ta),_=ta.dot(vh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,M=(p*m-d*_)*v,E=(h*_-d*m)*v;return u.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(d,ea.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,r),Th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Mh,u.x),h.addScaledVector(Eh,u.y),h.addScaledVector(Th,u.z),h}static isFrontFacing(t,i,r,l){return di.subVectors(r,i),ta.subVectors(t,i),di.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),di.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;ds.subVectors(l,r),ps.subVectors(u,r),xh.subVectors(t,r);const m=ds.dot(xh),p=ps.dot(xh);if(m<=0&&p<=0)return i.copy(r);Sh.subVectors(t,l);const _=ds.dot(Sh),x=ps.dot(Sh);if(_>=0&&x<=_)return i.copy(l);const v=m*x-_*p;if(v<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(ds,h);yh.subVectors(t,u);const M=ds.dot(yh),E=ps.dot(yh);if(E>=0&&M<=E)return i.copy(u);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(ps,d);const S=_*E-M*x;if(S<=0&&x-_>=0&&M-E>=0)return $_.subVectors(u,l),d=(x-_)/(x-_+(M-E)),i.copy(l).addScaledVector($_,d);const g=1/(S+b+v);return h=b*g,d=v*g,i.copy(r).addScaledVector(ds,h).addScaledVector(ps,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},_u={h:0,s:0,l:0};function bh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=be.workingColorSpace){if(t=$M(t,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=bh(h,u,t+1/3),this.g=bh(h,u,t),this.b=bh(h,u,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=oi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const r=hv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return be.workingToColorSpace(Dn.copy(this),t),Math.round(Se(Dn.r*255,0,255))*65536+Math.round(Se(Dn.g*255,0,255))*256+Math.round(Se(Dn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=oi){be.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(_u);const r=oh(Fa.h,_u.h,i),l=oh(Fa.s,_u.s,i),u=oh(Fa.l,_u.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new we;we.NAMES=hv;let vE=0;class Qo extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Ss,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vh&&(r.blendSrc=this.blendSrc),this.blendDst!==kh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dv extends Qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new tt,vu=new Ae;let xE=0;class Ai{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=H_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vu.fromBufferAttribute(this,i),vu.applyMatrix3(t),this.setXY(i,vu.x,vu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Do(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H_&&(t.usage=this.usage),t}}class pv extends Ai{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class mv extends Ai{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Er extends Ai{constructor(t,i,r){super(new Float32Array(t),i,r)}}let SE=0;const si=new Ke,Ah=new Un,ms=new tt,Qn=new Ko,Oo=new Ko,xn=new tt;class Rr extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?mv:pv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(Qn.min,Oo.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,Oo.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(Oo.min),Qn.expandByPoint(Oo.max))}Qn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)xn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(ms.fromBufferAttribute(t,p),xn.add(ms)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new tt,m[X]=new tt;const p=new tt,_=new tt,x=new tt,v=new Ae,M=new Ae,E=new Ae,b=new tt,S=new tt;function g(X,C,w){p.fromBufferAttribute(r,X),_.fromBufferAttribute(r,C),x.fromBufferAttribute(r,w),v.fromBufferAttribute(u,X),M.fromBufferAttribute(u,C),E.fromBufferAttribute(u,w),_.sub(p),x.sub(p),M.sub(v),E.sub(v);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(H),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(H),d[X].add(b),d[C].add(b),d[w].add(b),m[X].add(S),m[C].add(S),m[w].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let X=0,C=N.length;X<C;++X){const w=N[X],H=w.start,ot=w.count;for(let st=H,vt=H+ot;st<vt;st+=3)g(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const L=new tt,D=new tt,z=new tt,V=new tt;function I(X){z.fromBufferAttribute(l,X),V.copy(z);const C=d[X];L.copy(C),L.sub(z.multiplyScalar(z.dot(C))).normalize(),D.crossVectors(V,C);const H=D.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,H)}for(let X=0,C=N.length;X<C;++X){const w=N[X],H=w.start,ot=w.count;for(let st=H,vt=H+ot;st<vt;st+=3)I(t.getX(st+0)),I(t.getX(st+1)),I(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,_=new tt,x=new tt;if(t)for(let v=0,M=t.count;v<M;v+=3){const E=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),d.add(_),m.add(_),p.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),_.subVectors(h,u),x.subVectors(l,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,v=new p.constructor(m.length*_);let M=0,E=0;for(let b=0,S=m.length;b<S;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*_;for(let g=0;g<_;g++)v[E++]=p[M++]}return new Ai(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Rr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,x=p.length;_<x;_++){const v=p[_],M=t(v,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],x=u[p];for(let v=0,M=x.length;v<M;v++)_.push(x[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t0=new Ke,dr=new fE,xu=new kd,e0=new tt,Su=new tt,yu=new tt,Mu=new tt,Rh=new tt,Eu=new tt,n0=new tt,Tu=new tt;class bi extends Un{constructor(t=new Rr,i=new dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Eu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],x=u[m];_!==0&&(Rh.fromBufferAttribute(x,t),h?Eu.addScaledVector(Rh,_):Eu.addScaledVector(Rh.sub(i),_))}i.add(Eu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(u),dr.copy(t.ray).recast(t.near),!(xu.containsPoint(dr.origin)===!1&&(dr.intersectSphere(xu,e0)===null||dr.origin.distanceToSquared(e0)>(t.far-t.near)**2))&&(t0.copy(u).invert(),dr.copy(t.ray).applyMatrix4(t0),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,dr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=v.length;E<b;E++){const S=v[E],g=h[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=N,z=L;D<z;D+=3){const V=d.getX(D),I=d.getX(D+1),X=d.getX(D+2);l=bu(this,g,t,r,p,_,x,V,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,g=b;S<g;S+=3){const N=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);l=bu(this,h,t,r,p,_,x,N,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=v.length;E<b;E++){const S=v[E],g=h[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=N,z=L;D<z;D+=3){const V=D,I=D+1,X=D+2;l=bu(this,g,t,r,p,_,x,V,I,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let S=E,g=b;S<g;S+=3){const N=S,L=S+1,D=S+2;l=bu(this,h,t,r,p,_,x,N,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yE(s,t,i,r,l,u,h,d){let m;if(t.side===Hn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Xa,d),m===null)return null;Tu.copy(d),Tu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Tu);return p<i.near||p>i.far?null:{distance:p,point:Tu.clone(),object:s}}function bu(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,Su),s.getVertexPosition(m,yu),s.getVertexPosition(p,Mu);const _=yE(s,t,i,r,Su,yu,Mu,n0);if(_){const x=new tt;pi.getBarycoord(n0,Su,yu,Mu,x),l&&(_.uv=pi.getInterpolatedAttribute(l,d,m,p,x,new Ae)),u&&(_.uv1=pi.getInterpolatedAttribute(u,d,m,p,x,new Ae)),h&&(_.normal=pi.getInterpolatedAttribute(h,d,m,p,x,new tt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new tt,materialIndex:0};pi.getNormal(Su,yu,Mu,v.normal),_.face=v,_.barycoord=x}return _}class Us extends Rr{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Er(p,3)),this.setAttribute("normal",new Er(_,3)),this.setAttribute("uv",new Er(x,2));function E(b,S,g,N,L,D,z,V,I,X,C){const w=D/I,H=z/X,ot=D/2,st=z/2,vt=V/2,dt=I+1,B=X+1;let Z=0,Y=0;const Tt=new tt;for(let U=0;U<B;U++){const $=U*H-st;for(let xt=0;xt<dt;xt++){const yt=xt*w-ot;Tt[b]=yt*N,Tt[S]=$*L,Tt[g]=vt,p.push(Tt.x,Tt.y,Tt.z),Tt[b]=0,Tt[S]=0,Tt[g]=V>0?1:-1,_.push(Tt.x,Tt.y,Tt.z),x.push(xt/I),x.push(1-U/X),Z+=1}}for(let U=0;U<X;U++)for(let $=0;$<I;$++){const xt=v+$+dt*U,yt=v+$+dt*(U+1),Q=v+($+1)+dt*(U+1),mt=v+($+1)+dt*U;m.push(xt,yt,mt),m.push(yt,Q,mt),Y+=6}d.addGroup(M,Y,C),M+=Y,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Rs(s[i]);for(const l in r)t[l]=r[l]}return t}function ME(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function gv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const EE={clone:Rs,merge:Nn};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=ME(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class _v extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new tt,i0=new Ae,a0=new Ae;class Jn extends _v{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,i0,a0),i.subVectors(a0,i0)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class AE extends Un{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(gs,_s,t,i);l.layers=this.layers,this.add(l);const u=new Jn(gs,_s,t,i);u.layers=this.layers,this.add(u);const h=new Jn(gs,_s,t,i);h.layers=this.layers,this.add(h);const d=new Jn(gs,_s,t,i);d.layers=this.layers,this.add(d);const m=new Jn(gs,_s,t,i);m.layers=this.layers,this.add(m);const p=new Jn(gs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ra)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,v,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class vv extends Gn{constructor(t=[],i=Ts,r,l,u,h,d,m,p,_){super(t,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RE extends br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Us(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Va});u.uniforms.tEquirect.value=i;const h=new bi(l,u),d=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Ti),new AE(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Io extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,r),g=this._getHandJoint(p,b);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=_.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Io;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class CE extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ch=new tt,DE=new tt,UE=new oe;class _r{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ch.subVectors(r,i).cross(DE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||UE.getNormalMatrix(t),l=this.coplanarPoint(Ch).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new kd,LE=new Ae(.5,.5),Au=new tt;class Xd{constructor(t=new _r,i=new _r,r=new _r,l=new _r,u=new _r,h=new _r){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ra){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],x=l[6],v=l[7],M=l[8],E=l[9],b=l[10],S=l[11],g=l[12],N=l[13],L=l[14],D=l[15];if(r[0].setComponents(m-u,v-p,S-M,D-g).normalize(),r[1].setComponents(m+u,v+p,S+M,D+g).normalize(),r[2].setComponents(m+h,v+_,S+E,D+N).normalize(),r[3].setComponents(m-h,v-_,S-E,D-N).normalize(),r[4].setComponents(m-d,v-x,S-b,D-L).normalize(),i===ra)r[5].setComponents(m+d,v+x,S+b,D+L).normalize();else if(i===Gu)r[5].setComponents(d,x,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);const i=LE.distanceTo(t.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Au.x=l.normal.x>0?t.max.x:t.min.x,Au.y=l.normal.y>0?t.max.y:t.min.y,Au.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Au)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xv extends Gn{constructor(t,i,r=Tr,l,u,h,d=gi,m=gi,p,_=Vo,x=1){if(_!==Vo&&_!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:x};super(v,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yu extends Rr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,x=t/d,v=i/m,M=[],E=[],b=[],S=[];for(let g=0;g<_;g++){const N=g*v-h;for(let L=0;L<p;L++){const D=L*x-u;E.push(D,-N,0),b.push(0,0,1),S.push(L/d),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const L=N+p*g,D=N+p*(g+1),z=N+1+p*(g+1),V=N+1+p*g;M.push(L,D,V),M.push(D,z,V)}this.setIndex(M),this.setAttribute("position",new Er(E,3)),this.setAttribute("normal",new Er(b,3)),this.setAttribute("uv",new Er(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class NE extends Qo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class OE extends Qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PE extends Qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wd extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Dh=new Ke,r0=new tt,s0=new tt;class Sv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;r0.setFromMatrixPosition(t.matrixWorld),i.position.copy(r0),s0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(s0),i.updateMatrixWorld(),Dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const o0=new Ke,Po=new tt,Uh=new tt;class IE extends Sv{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Po.setFromMatrixPosition(t.matrixWorld),r.position.copy(Po),Uh.copy(r.position),Uh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Uh),r.updateMatrixWorld(),l.makeTranslation(-Po.x,-Po.y,-Po.z),o0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o0)}}class Ru extends Wd{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new IE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yv extends _v{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BE extends Sv{constructor(){super(new yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zE extends Wd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class FE extends Wd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class HE extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function l0(s,t,i,r){const l=GE(r);switch(i){case nv:return s*t;case av:return s*t/l.components*l.byteLength;case Fd:return s*t/l.components*l.byteLength;case rv:return s*t*2/l.components*l.byteLength;case Hd:return s*t*2/l.components*l.byteLength;case iv:return s*t*3/l.components*l.byteLength;case mi:return s*t*4/l.components*l.byteLength;case Gd:return s*t*4/l.components*l.byteLength;case Nu:case Ou:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pu:case Iu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(s,16)*Math.max(t,8)/4;case ed:case id:return Math.max(s,8)*Math.max(t,8)/2;case rd:case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Bu:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sv:case Td:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bd:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GE(s){switch(s){case wi:case $0:return{byteLength:1,components:1};case Ho:case tv:case Yo:return{byteLength:2,components:1};case Bd:case zd:return{byteLength:2,components:4};case Tr:case Id:case aa:return{byteLength:4,components:1};case ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mv(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function VE(s){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const _=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,_);else{x.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<x.length;M++){const E=x[v],b=x[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,x[v]=b)}x.length=v+1;for(let M=0,E=x.length;M<E;M++){const b=x[M];s.bufferSubData(p,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ST=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:kE,alphahash_pars_fragment:XE,alphamap_fragment:WE,alphamap_pars_fragment:qE,alphatest_fragment:YE,alphatest_pars_fragment:jE,aomap_fragment:ZE,aomap_pars_fragment:KE,batching_pars_vertex:QE,batching_vertex:JE,begin_vertex:$E,beginnormal_vertex:tT,bsdfs:eT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:aT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:oT,color_fragment:lT,color_pars_fragment:uT,color_pars_vertex:cT,color_vertex:fT,common:hT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:gT,emissivemap_fragment:_T,emissivemap_pars_fragment:vT,colorspace_fragment:xT,colorspace_pars_fragment:ST,envmap_fragment:yT,envmap_common_pars_fragment:MT,envmap_pars_fragment:ET,envmap_pars_vertex:TT,envmap_physical_pars_fragment:PT,envmap_vertex:bT,fog_vertex:AT,fog_pars_vertex:RT,fog_fragment:wT,fog_pars_fragment:CT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:UT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:NT,lights_pars_begin:OT,lights_toon_fragment:IT,lights_toon_pars_fragment:BT,lights_phong_fragment:zT,lights_phong_pars_fragment:FT,lights_physical_fragment:HT,lights_physical_pars_fragment:GT,lights_fragment_begin:VT,lights_fragment_maps:kT,lights_fragment_end:XT,logdepthbuf_fragment:WT,logdepthbuf_pars_fragment:qT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:jT,map_fragment:ZT,map_pars_fragment:KT,map_particle_fragment:QT,map_particle_pars_fragment:JT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:tb,morphinstance_vertex:eb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:ab,morphtarget_vertex:rb,normal_fragment_begin:sb,normal_fragment_maps:ob,normal_pars_fragment:lb,normal_pars_vertex:ub,normal_vertex:cb,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:Sb,dithering_pars_fragment:yb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:bb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Rb,skinbase_vertex:wb,skinning_pars_vertex:Cb,skinning_vertex:Db,skinnormal_vertex:Ub,specularmap_fragment:Lb,specularmap_pars_fragment:Nb,tonemapping_fragment:Ob,tonemapping_pars_fragment:Pb,transmission_fragment:Ib,transmission_pars_fragment:Bb,uv_pars_fragment:zb,uv_pars_vertex:Fb,uv_vertex:Hb,worldpos_vertex:Gb,background_vert:Vb,background_frag:kb,backgroundCube_vert:Xb,backgroundCube_frag:Wb,cube_vert:qb,cube_frag:Yb,depth_vert:jb,depth_frag:Zb,distanceRGBA_vert:Kb,distanceRGBA_frag:Qb,equirect_vert:Jb,equirect_frag:$b,linedashed_vert:t1,linedashed_frag:e1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:a1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:u1,meshphong_vert:c1,meshphong_frag:f1,meshphysical_vert:h1,meshphysical_frag:d1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:_1,shadow_vert:v1,shadow_frag:x1,sprite_vert:S1,sprite_frag:y1},Ot={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ei={basic:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Nn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Nn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Nn([Ot.points,Ot.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Nn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Nn([Ot.common,Ot.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Nn([Ot.sprite,Ot.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Nn([Ot.common,Ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Nn([Ot.lights,Ot.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ei.physical={uniforms:Nn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const wu={r:0,b:0,g:0},mr=new Ci,M1=new Ke;function E1(s,t,i,r,l,u,h){const d=new we(0);let m=u===!0?0:1,p,_,x=null,v=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function b(L){let D=!1;const z=E(L);z===null?g(d,m):z&&z.isColor&&(g(z,1),D=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,D){const z=E(D);z&&(z.isCubeTexture||z.mapping===qu)?(_===void 0&&(_=new bi(new Us(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Rs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(V,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),mr.copy(D.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(mr)),_.material.toneMapped=be.getTransfer(z.colorSpace)!==Fe,(x!==z||v!==z.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,x=z,v=z.version,M=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new bi(new Yu(2,2),new Wa({name:"BackgroundMaterial",uniforms:Rs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==Fe,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||v!==z.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=z,v=z.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,D){L.getRGB(wu,gv(s)),r.buffers.color.setClear(wu.r,wu.g,wu.b,D,h)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:b,addToRenderList:S,dispose:N}}function T1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(w,H,ot,st,vt){let dt=!1;const B=x(st,ot,H);u!==B&&(u=B,p(u.object)),dt=M(w,st,ot,vt),dt&&E(w,st,ot,vt),vt!==null&&t.update(vt,s.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(w,H,ot,st),vt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function x(w,H,ot){const st=ot.wireframe===!0;let vt=r[w.id];vt===void 0&&(vt={},r[w.id]=vt);let dt=vt[H.id];dt===void 0&&(dt={},vt[H.id]=dt);let B=dt[st];return B===void 0&&(B=v(m()),dt[st]=B),B}function v(w){const H=[],ot=[],st=[];for(let vt=0;vt<i;vt++)H[vt]=0,ot[vt]=0,st[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ot,attributeDivisors:st,object:w,attributes:{},index:null}}function M(w,H,ot,st){const vt=u.attributes,dt=H.attributes;let B=0;const Z=ot.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const U=vt[Y];let $=dt[Y];if($===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;B++}return u.attributesNum!==B||u.index!==st}function E(w,H,ot,st){const vt={},dt=H.attributes;let B=0;const Z=ot.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let U=dt[Y];U===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),vt[Y]=$,B++}u.attributes=vt,u.attributesNum=B,u.index=st}function b(){const w=u.newAttributes;for(let H=0,ot=w.length;H<ot;H++)w[H]=0}function S(w){g(w,0)}function g(w,H){const ot=u.newAttributes,st=u.enabledAttributes,vt=u.attributeDivisors;ot[w]=1,st[w]===0&&(s.enableVertexAttribArray(w),st[w]=1),vt[w]!==H&&(s.vertexAttribDivisor(w,H),vt[w]=H)}function N(){const w=u.newAttributes,H=u.enabledAttributes;for(let ot=0,st=H.length;ot<st;ot++)H[ot]!==w[ot]&&(s.disableVertexAttribArray(ot),H[ot]=0)}function L(w,H,ot,st,vt,dt,B){B===!0?s.vertexAttribIPointer(w,H,ot,vt,dt):s.vertexAttribPointer(w,H,ot,st,vt,dt)}function D(w,H,ot,st){b();const vt=st.attributes,dt=ot.getAttributes(),B=H.defaultAttributeValues;for(const Z in dt){const Y=dt[Z];if(Y.location>=0){let Tt=vt[Z];if(Tt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),Tt!==void 0){const U=Tt.normalized,$=Tt.itemSize,xt=t.get(Tt);if(xt===void 0)continue;const yt=xt.buffer,Q=xt.type,mt=xt.bytesPerElement,Mt=Q===s.INT||Q===s.UNSIGNED_INT||Tt.gpuType===Id;if(Tt.isInterleavedBufferAttribute){const wt=Tt.data,Dt=wt.stride,le=Tt.offset;if(wt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<Y.locationSize;Jt++)g(Y.location+Jt,wt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Jt=0;Jt<Y.locationSize;Jt++)S(Y.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Jt=0;Jt<Y.locationSize;Jt++)L(Y.location+Jt,$/Y.locationSize,Q,U,Dt*mt,(le+$/Y.locationSize*Jt)*mt,Mt)}else{if(Tt.isInstancedBufferAttribute){for(let wt=0;wt<Y.locationSize;wt++)g(Y.location+wt,Tt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let wt=0;wt<Y.locationSize;wt++)S(Y.location+wt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let wt=0;wt<Y.locationSize;wt++)L(Y.location+wt,$/Y.locationSize,Q,U,$*mt,$/Y.locationSize*wt*mt,Mt)}}else if(B!==void 0){const U=B[Z];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Y.location,U);break;case 3:s.vertexAttrib3fv(Y.location,U);break;case 4:s.vertexAttrib4fv(Y.location,U);break;default:s.vertexAttrib1fv(Y.location,U)}}}}N()}function z(){X();for(const w in r){const H=r[w];for(const ot in H){const st=H[ot];for(const vt in st)_(st[vt].object),delete st[vt];delete H[ot]}delete r[w]}}function V(w){if(r[w.id]===void 0)return;const H=r[w.id];for(const ot in H){const st=H[ot];for(const vt in st)_(st[vt].object),delete st[vt];delete H[ot]}delete r[w.id]}function I(w){for(const H in r){const ot=r[H];if(ot[w.id]===void 0)continue;const st=ot[w.id];for(const vt in st)_(st[vt].object),delete st[vt];delete ot[w.id]}}function X(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:S,disableUnusedAttributes:N}}function b1(s,t,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,x){x!==0&&(s.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let M=0;for(let E=0;E<x;E++)M+=_[E];i.update(M,r,1)}function m(p,_,x,v){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],_[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,v,0,x);let E=0;for(let b=0;b<x;b++)E+=_[b]*v[b];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function A1(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==mi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==wi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==aa&&!X)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:z,maxSamples:V}}function R1(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new _r,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||r!==0||l;return l=v,r=x.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=_(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,b=x.clipIntersection,S=x.clipShadows,g=s.get(x);if(!l||E===null||E.length===0||u&&!S)u?_(null):p();else{const N=u?0:r,L=N*4;let D=g.clippingState||null;m.value=D,D=_(E,v,L,M);for(let z=0;z!==L;++z)D[z]=i[z];g.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,v,M,E){const b=x!==null?x.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const g=M+b*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,D=M;L!==b;++L,D+=4)h.copy(x[L]).applyMatrix4(N,d),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function w1(s){let t=new WeakMap;function i(h,d){return d===Qh?h.mapping=Ts:d===Jh&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Qh||d===Jh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new RE(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const xs=4,u0=[.125,.215,.35,.446,.526,.582],Sr=20,Lh=new yv,c0=new we;let Nh=null,Oh=0,Ph=0,Ih=!1;const vr=(1+Math.sqrt(5))/2,vs=1/vr,f0=[new tt(-vr,vs,0),new tt(vr,vs,0),new tt(-vs,0,vr),new tt(vs,0,vr),new tt(0,vr,-vs),new tt(0,vr,vs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],C1=new tt;class h0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=C1}=u;Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nh,Oh,Ph),this._renderer.xr.enabled=Ih,t.scissorTest=!1,Cu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Yo,format:mi,colorSpace:As,depthBuffer:!1},l=d0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(u)),this._blurMaterial=U1(u,t,i)}return l}_compileMaterial(t){const i=new bi(this._lodPlanes[0],t);this._renderer.compile(i,Lh)}_sceneToCubeUV(t,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(c0),x.toneMapping=ka,x.autoClear=!1;const E=new dv({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),b=new bi(new Us,E);let S=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,S=!0):(E.color.copy(c0),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[N],u.y,u.z)):L===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[N]));const D=this._cubeSize;Cu(l,L*D,N>2?D:0,D,D),x.setRenderTarget(l),S&&x.render(b,m),x.render(t,m)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=M,x.autoClear=v,t.background=g}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new bi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Cu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Lh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=f0[(l-u-1)%f0.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new bi(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Sr-1),b=u/E,S=isFinite(u)?1+Math.floor(_*b):Sr;S>Sr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Sr}`);const g=[];let N=0;for(let I=0;I<Sr;++I){const X=I/b,C=Math.exp(-X*X/2);g.push(C),I===0?N+=C:I<S&&(N+=2*C)}for(let I=0;I<g.length;I++)g[I]=g[I]/N;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=g,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-r;const D=this._sizeLods[l],z=3*D*(l>L-xs?l-L+xs:0),V=4*(this._cubeSize-D);Cu(i,z,V,3*D,2*D),m.setRenderTarget(i),m.render(x,Lh)}}function D1(s){const t=[],i=[],r=[];let l=s;const u=s-xs+1+u0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-xs?m=u0[h-s+xs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,x=1+p,v=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,E=6,b=3,S=2,g=1,N=new Float32Array(b*E*M),L=new Float32Array(S*E*M),D=new Float32Array(g*E*M);for(let V=0;V<M;V++){const I=V%3*2/3-1,X=V>2?0:-1,C=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];N.set(C,b*E*V),L.set(v,S*E*V);const w=[V,V,V,V,V,V];D.set(w,g*E*V)}const z=new Rr;z.setAttribute("position",new Ai(N,b)),z.setAttribute("uv",new Ai(L,S)),z.setAttribute("faceIndex",new Ai(D,g)),t.push(z),l>xs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function d0(s,t,i){const r=new br(s,t,i);return r.texture.mapping=qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function U1(s,t,i){const r=new Float32Array(Sr),l=new tt(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function p0(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function m0(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Qh||m===Jh,_=m===Ts||m===bs;if(p||_){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new h0(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new h0(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function N1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function O1(s,t,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const M=u.get(v);M&&(t.remove(M),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)t.update(v[M],s.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,E=x.attributes.position;let b=0;if(M!==null){const N=M.array;b=M.version;for(let L=0,D=N.length;L<D;L+=3){const z=N[L+0],V=N[L+1],I=N[L+2];v.push(z,V,V,I,I,z)}}else if(E!==void 0){const N=E.array;b=E.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const z=L+0,V=L+1,I=L+2;v.push(z,V,V,I,I,z)}}else return;const S=new(uv(v)?mv:pv)(v,1);S.version=b;const g=u.get(x);g&&t.remove(g),u.set(x,S)}function _(x){const v=u.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function P1(s,t,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,M){s.drawElements(r,M,u,v*h),i.update(M,r,1)}function p(v,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,v*h,E),i.update(M,r,E))}function _(v,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,v,0,E);let S=0;for(let g=0;g<E;g++)S+=M[g];i.update(S,r,1)}function x(v,M,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<v.length;g++)p(v[g]/h,M[g],b[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,v,0,b,0,E);let g=0;for(let N=0;N<E;N++)g+=M[N]*b[N];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function I1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function B1(s,t,i){const r=new WeakMap,l=new He;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let w=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let z=d.attributes.position.count*D,V=1;z>t.maxTextureSize&&(V=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const I=new Float32Array(z*V*4*x),X=new cv(I,z,V,x);X.type=aa,X.needsUpdate=!0;const C=D*4;for(let H=0;H<x;H++){const ot=g[H],st=N[H],vt=L[H],dt=z*V*4*H;for(let B=0;B<ot.count;B++){const Z=B*C;E===!0&&(l.fromBufferAttribute(ot,B),I[dt+Z+0]=l.x,I[dt+Z+1]=l.y,I[dt+Z+2]=l.z,I[dt+Z+3]=0),b===!0&&(l.fromBufferAttribute(st,B),I[dt+Z+4]=l.x,I[dt+Z+5]=l.y,I[dt+Z+6]=l.z,I[dt+Z+7]=0),S===!0&&(l.fromBufferAttribute(vt,B),I[dt+Z+8]=l.x,I[dt+Z+9]=l.y,I[dt+Z+10]=l.z,I[dt+Z+11]=vt.itemSize===4?l.w:1)}}v={count:x,texture:X,size:new Ae(z,V)},r.set(d,v),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function z1(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Ev=new Gn,g0=new xv(1,1),Tv=new cv,bv=new uE,Av=new vv,_0=[],v0=[],x0=new Float32Array(16),S0=new Float32Array(9),y0=new Float32Array(4);function Ls(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=_0[l];if(u===void 0&&(u=new Float32Array(l),_0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ju(s,t){let i=v0[t];i===void 0&&(i=new Int32Array(t),v0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function F1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function H1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function G1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function V1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function k1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;y0.set(r),s.uniformMatrix2fv(this.addr,!1,y0),hn(i,r)}}function X1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;S0.set(r),s.uniformMatrix3fv(this.addr,!1,S0),hn(i,r)}}function W1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;x0.set(r),s.uniformMatrix4fv(this.addr,!1,x0),hn(i,r)}}function q1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function Y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function j1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function Z1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function K1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function Q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function J1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function $1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function tA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(g0.compareFunction=lv,u=g0):u=Ev,i.setTexture2D(t||u,l)}function eA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||bv,l)}function nA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Av,l)}function iA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Tv,l)}function aA(s){switch(s){case 5126:return F1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return k1;case 35675:return X1;case 35676:return W1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return j1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return Q1;case 36295:return J1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function rA(s,t){s.uniform1fv(this.addr,t)}function sA(s,t){const i=Ls(t,this.size,2);s.uniform2fv(this.addr,i)}function oA(s,t){const i=Ls(t,this.size,3);s.uniform3fv(this.addr,i)}function lA(s,t){const i=Ls(t,this.size,4);s.uniform4fv(this.addr,i)}function uA(s,t){const i=Ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function cA(s,t){const i=Ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function fA(s,t){const i=Ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function hA(s,t){s.uniform1iv(this.addr,t)}function dA(s,t){s.uniform2iv(this.addr,t)}function pA(s,t){s.uniform3iv(this.addr,t)}function mA(s,t){s.uniform4iv(this.addr,t)}function gA(s,t){s.uniform1uiv(this.addr,t)}function _A(s,t){s.uniform2uiv(this.addr,t)}function vA(s,t){s.uniform3uiv(this.addr,t)}function xA(s,t){s.uniform4uiv(this.addr,t)}function SA(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Ev,u[h])}function yA(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||bv,u[h])}function MA(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Av,u[h])}function EA(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Tv,u[h])}function TA(s){switch(s){case 5126:return rA;case 35664:return sA;case 35665:return oA;case 35666:return lA;case 35674:return uA;case 35675:return cA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}class bA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=aA(i.type)}}class AA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TA(i.type)}}class RA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function M0(s,t){s.seq.push(t),s.map[t.id]=t}function wA(s,t,i){const r=s.name,l=r.length;for(Bh.lastIndex=0;;){const u=Bh.exec(r),h=Bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){M0(i,p===void 0?new bA(d,s,t):new AA(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new RA(d),M0(i,x)),i=x}}}class zu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);wA(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function E0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const CA=37297;let DA=0;function UA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const T0=new oe;function LA(s){be._getMatrix(T0,be.workingColorSpace,s);const t=`mat3( ${T0.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(s)){case Hu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function b0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+UA(s.getShaderSource(t),h)}else return l}function NA(s,t){const i=LA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function OA(s,t){let i;switch(t){case PM:i="Linear";break;case IM:i="Reinhard";break;case BM:i="Cineon";break;case zM:i="ACESFilmic";break;case HM:i="AgX";break;case GM:i="Neutral";break;case FM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Du=new tt;function PA(){be.getLuminanceCoefficients(Du);const s=Du.x.toFixed(4),t=Du.y.toFixed(4),i=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function BA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function zA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Bo(s){return s!==""}function A0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function R0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(FA,GA)}const HA=new Map;function GA(s,t){let i=ce[t];if(i===void 0){const r=HA.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return wd(i)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(s){return s.replace(VA,kA)}function kA(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function XA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Z0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===K0?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===na&&(t="SHADOWMAP_TYPE_VSM"),t}function WA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case bs:t="ENVMAP_TYPE_CUBE";break;case qu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function YA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Q0:t="ENVMAP_BLENDING_MULTIPLY";break;case NM:t="ENVMAP_BLENDING_MIX";break;case OM:t="ENVMAP_BLENDING_ADD";break}return t}function jA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function ZA(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=XA(i),p=WA(i),_=qA(i),x=YA(i),v=jA(i),M=IA(i),E=BA(u),b=l.createProgram();let S,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),g.length>0&&(g+=`
`)):(S=[C0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),g=[C0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ce.tonemapping_pars_fragment:"",i.toneMapping!==ka?OA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,NA("linearToOutputTexel",i.outputColorSpace),PA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=wd(h),h=A0(h,i),h=R0(h,i),d=wd(d),d=A0(d,i),d=R0(d,i),h=w0(h),d=w0(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+S+h,D=N+g+d,z=E0(l,l.VERTEX_SHADER,L),V=E0(l,l.FRAGMENT_SHADER,D);l.attachShader(b,z),l.attachShader(b,V),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function I(H){if(s.debug.checkShaderErrors){const ot=l.getProgramInfoLog(b).trim(),st=l.getShaderInfoLog(z).trim(),vt=l.getShaderInfoLog(V).trim();let dt=!0,B=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(dt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,z,V);else{const Z=b0(l,z,"vertex"),Y=b0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+Z+`
`+Y)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||vt==="")&&(B=!1);B&&(H.diagnostics={runnable:dt,programLog:ot,vertexShader:{log:st,prefix:S},fragmentShader:{log:vt,prefix:g}})}l.deleteShader(z),l.deleteShader(V),X=new zu(l,b),C=zA(l,b)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,CA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=V,this}let KA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new JA(t),i.set(t,r)),r}}class JA{constructor(t){this.id=KA++,this.code=t,this.usedTimes=0}}function $A(s,t,i,r,l,u,h){const d=new fv,m=new QA,p=new Set,_=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,H,ot,st){const vt=ot.fog,dt=st.geometry,B=C.isMeshStandardMaterial?ot.environment:null,Z=(C.isMeshStandardMaterial?i:t).get(C.envMap||B),Y=Z&&Z.mapping===qu?Z.image.height:null,Tt=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const U=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,$=U!==void 0?U.length:0;let xt=0;dt.morphAttributes.position!==void 0&&(xt=1),dt.morphAttributes.normal!==void 0&&(xt=2),dt.morphAttributes.color!==void 0&&(xt=3);let yt,Q,mt,Mt;if(Tt){const Ee=Ei[Tt];yt=Ee.vertexShader,Q=Ee.fragmentShader}else yt=C.vertexShader,Q=C.fragmentShader,m.update(C),mt=m.getVertexShaderID(C),Mt=m.getFragmentShaderID(C);const wt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),le=st.isInstancedMesh===!0,Jt=st.isBatchedMesh===!0,Oe=!!C.map,Ge=!!C.matcap,_e=!!Z,F=!!C.aoMap,Sn=!!C.lightMap,Me=!!C.bumpMap,pe=!!C.normalMap,kt=!!C.displacementMap,ve=!!C.emissiveMap,Zt=!!C.metalnessMap,re=!!C.roughnessMap,$e=C.anisotropy>0,O=C.clearcoat>0,T=C.dispersion>0,et=C.iridescence>0,ft=C.sheen>0,pt=C.transmission>0,lt=$e&&!!C.anisotropyMap,It=O&&!!C.clearcoatMap,Lt=O&&!!C.clearcoatNormalMap,Vt=O&&!!C.clearcoatRoughnessMap,Xt=et&&!!C.iridescenceMap,St=et&&!!C.iridescenceThicknessMap,Bt=ft&&!!C.sheenColorMap,Yt=ft&&!!C.sheenRoughnessMap,jt=!!C.specularMap,Ct=!!C.specularColorMap,ae=!!C.specularIntensityMap,k=pt&&!!C.transmissionMap,Nt=pt&&!!C.thicknessMap,bt=!!C.gradientMap,zt=!!C.alphaMap,Rt=C.alphaTest>0,_t=!!C.alphaHash,Ht=!!C.extensions;let ie=ka;C.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ie=s.toneMapping);const Ue={shaderID:Tt,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:Q,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Jt,batchingColor:Jt&&st._colorsTexture!==null,instancing:le,instancingColor:le&&st.instanceColor!==null,instancingMorph:le&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:As,alphaToCoverage:!!C.alphaToCoverage,map:Oe,matcap:Ge,envMap:_e,envMapMode:_e&&Z.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Sn,bumpMap:Me,normalMap:pe,displacementMap:v&&kt,emissiveMap:ve,normalMapObjectSpace:pe&&C.normalMapType===WM,normalMapTangentSpace:pe&&C.normalMapType===ov,metalnessMap:Zt,roughnessMap:re,anisotropy:$e,anisotropyMap:lt,clearcoat:O,clearcoatMap:It,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,dispersion:T,iridescence:et,iridescenceMap:Xt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:Bt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:ae,transmission:pt,transmissionMap:k,thicknessMap:Nt,gradientMap:bt,opaque:C.transparent===!1&&C.blending===Ss&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:Rt,alphaHash:_t,combine:C.combine,mapUv:Oe&&b(C.map.channel),aoMapUv:F&&b(C.aoMap.channel),lightMapUv:Sn&&b(C.lightMap.channel),bumpMapUv:Me&&b(C.bumpMap.channel),normalMapUv:pe&&b(C.normalMap.channel),displacementMapUv:kt&&b(C.displacementMap.channel),emissiveMapUv:ve&&b(C.emissiveMap.channel),metalnessMapUv:Zt&&b(C.metalnessMap.channel),roughnessMapUv:re&&b(C.roughnessMap.channel),anisotropyMapUv:lt&&b(C.anisotropyMap.channel),clearcoatMapUv:It&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:St&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&b(C.sheenRoughnessMap.channel),specularMapUv:jt&&b(C.specularMap.channel),specularColorMapUv:Ct&&b(C.specularColorMap.channel),specularIntensityMapUv:ae&&b(C.specularIntensityMap.channel),transmissionMapUv:k&&b(C.transmissionMap.channel),thicknessMapUv:Nt&&b(C.thicknessMap.channel),alphaMapUv:zt&&b(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(pe||$e),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(Oe||zt),fog:!!vt,useFog:C.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Dt,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:Oe&&C.map.isVideoTexture===!0&&be.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:ve&&C.emissiveMap.isVideoTexture===!0&&be.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ia,flipSided:C.side===Hn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||Jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)w.push(H),w.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(N(w,C),L(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function N(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=E[C.type];let H;if(w){const ot=Ei[w];H=EE.clone(ot.uniforms)}else H=C.uniforms;return H}function z(C,w){let H;for(let ot=0,st=_.length;ot<st;ot++){const vt=_[ot];if(vt.cacheKey===w){H=vt,++H.usedTimes;break}}return H===void 0&&(H=new ZA(s,w,C,u),_.push(H)),H}function V(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),C.destroy()}}function I(C){m.remove(C)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:D,acquireProgram:z,releaseProgram:V,releaseShaderCache:I,programs:_,dispose:X}}function tR(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function eR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function D0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function U0(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,v,M,E,b,S){let g=s[t];return g===void 0?(g={id:x.id,object:x,geometry:v,material:M,groupOrder:E,renderOrder:x.renderOrder,z:b,group:S},s[t]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=M,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=b,g.group=S),t++,g}function d(x,v,M,E,b,S){const g=h(x,v,M,E,b,S);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(x,v,M,E,b,S){const g=h(x,v,M,E,b,S);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,v){i.length>1&&i.sort(x||eR),r.length>1&&r.sort(v||D0),l.length>1&&l.sort(v||D0)}function _(){for(let x=t,v=s.length;x<v;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function nR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new U0,s.set(r,[h])):l>=u.length?(h=new U0,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function iR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new we};break;case"SpotLight":i={position:new tt,direction:new tt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function aR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let rR=0;function sR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function oR(s){const t=new iR,i=aR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,u=new Ke,h=new Ke;function d(p){let _=0,x=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,E=0,b=0,S=0,g=0,N=0,L=0,D=0,z=0,V=0,I=0;p.sort(sR);for(let C=0,w=p.length;C<w;C++){const H=p[C],ot=H.color,st=H.intensity,vt=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=ot.r*st,x+=ot.g*st,v+=ot.b*st;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],st);I++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=H.shadow.matrix,N++}r.directional[M]=B,M++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(ot).multiplyScalar(st),B.distance=vt,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[b]=B;const Z=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,Z.updateMatrices(H),H.castShadow&&V++),r.spotLightMatrix[b]=Z.matrix,H.castShadow){const Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=dt,D++}b++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(ot).multiplyScalar(st),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=B,S++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const Z=H.shadow,Y=i.get(H);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=H.shadow.matrix,L++}r.point[E]=B,E++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(st),B.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[g]=B,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==g||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==D||X.numSpotMaps!==z||X.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+z-V,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=I,X.directionalLength=M,X.pointLength=E,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=g,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=D,X.numSpotMaps=z,X.numLightProbes=I,r.version=rR++)}function m(p,_){let x=0,v=0,M=0,E=0,b=0;const S=_.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const L=p[g];if(L.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),x++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),h.identity(),u.copy(L.matrixWorld),u.premultiply(S),h.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:d,setupView:m,state:r}}function L0(s){const t=new oR(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function lR(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new L0(s),t.set(l,[d])):u>=h.length?(d=new L0(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fR(s,t,i){let r=new Xd;const l=new Ae,u=new Ae,h=new He,d=new OE({depthPacking:XM}),m=new PE,p={},_=i.maxTextureSize,x={[Xa]:Hn,[Hn]:Xa,[ia]:ia},v=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:uR,fragmentShader:cR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Rr;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new bi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let g=this.type;this.render=function(V,I,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),ot=s.state;ot.setBlending(Va),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=g!==na&&this.type===na,vt=g===na&&this.type!==na;for(let dt=0,B=V.length;dt<B;dt++){const Z=V[dt],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Tt=Y.getFrameExtents();if(l.multiply(Tt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Tt.x),l.x=u.x*Tt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Tt.y),l.y=u.y*Tt.y,Y.mapSize.y=u.y)),Y.map===null||st===!0||vt===!0){const $=this.type!==na?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new br(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const U=Y.getViewportCount();for(let $=0;$<U;$++){const xt=Y.getViewport($);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),ot.viewport(h),Y.updateMatrices(Z,$),r=Y.getFrustum(),D(I,X,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===na&&N(Y,X),Y.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,H)};function N(V,I){const X=t.update(b);v.defines.VSM_SAMPLES!==V.blurSamples&&(v.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new br(l.x,l.y)),v.uniforms.shadow_pass.value=V.map.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(I,null,X,v,b,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(I,null,X,M,b,null)}function L(V,I,X,C){let w=null;const H=X.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)w=H;else if(w=X.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ot=w.uuid,st=I.uuid;let vt=p[ot];vt===void 0&&(vt={},p[ot]=vt);let dt=vt[st];dt===void 0&&(dt=w.clone(),vt[st]=dt,I.addEventListener("dispose",z)),w=dt}if(w.visible=I.visible,w.wireframe=I.wireframe,C===na?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:x[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ot=s.properties.get(w);ot.light=X}return w}function D(V,I,X,C,w){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&w===na)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,V.matrixWorld);const st=t.update(V),vt=V.material;if(Array.isArray(vt)){const dt=st.groups;for(let B=0,Z=dt.length;B<Z;B++){const Y=dt[B],Tt=vt[Y.materialIndex];if(Tt&&Tt.visible){const U=L(V,Tt,C,w);V.onBeforeShadow(s,V,I,X,st,U,Y),s.renderBufferDirect(X,null,st,U,V,Y),V.onAfterShadow(s,V,I,X,st,U,Y)}}}else if(vt.visible){const dt=L(V,vt,C,w);V.onBeforeShadow(s,V,I,X,st,dt,null),s.renderBufferDirect(X,null,st,dt,V,null),V.onAfterShadow(s,V,I,X,st,dt,null)}}const ot=V.children;for(let st=0,vt=ot.length;st<vt;st++)D(ot[st],I,X,C,w)}function z(V){V.target.removeEventListener("dispose",z);for(const X in p){const C=p[X],w=V.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const hR={[Xh]:Wh,[qh]:Zh,[Yh]:Kh,[Es]:jh,[Wh]:Xh,[Zh]:qh,[Kh]:Yh,[jh]:Es};function dR(s,t){function i(){let k=!1;const Nt=new He;let bt=null;const zt=new He(0,0,0,0);return{setMask:function(Rt){bt!==Rt&&!k&&(s.colorMask(Rt,Rt,Rt,Rt),bt=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,_t,Ht,ie,Ue){Ue===!0&&(Rt*=ie,_t*=ie,Ht*=ie),Nt.set(Rt,_t,Ht,ie),zt.equals(Nt)===!1&&(s.clearColor(Rt,_t,Ht,ie),zt.copy(Nt))},reset:function(){k=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,bt=null,zt=null,Rt=null;return{setReversed:function(_t){if(Nt!==_t){const Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const ie=Rt;Rt=null,this.setClear(ie)}},getReversed:function(){return Nt},setTest:function(_t){_t?wt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(s.depthMask(_t),bt=_t)},setFunc:function(_t){if(Nt&&(_t=hR[_t]),zt!==_t){switch(_t){case Xh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case qh:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Yh:s.depthFunc(s.EQUAL);break;case jh:s.depthFunc(s.GEQUAL);break;case Zh:s.depthFunc(s.GREATER);break;case Kh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Rt!==_t&&(Nt&&(_t=1-_t),s.clearDepth(_t),Rt=_t)},reset:function(){k=!1,bt=null,zt=null,Rt=null,Nt=!1}}}function l(){let k=!1,Nt=null,bt=null,zt=null,Rt=null,_t=null,Ht=null,ie=null,Ue=null;return{setTest:function(Ee){k||(Ee?wt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!k&&(s.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Vn,dn){(bt!==Ee||zt!==Vn||Rt!==dn)&&(s.stencilFunc(Ee,Vn,dn),bt=Ee,zt=Vn,Rt=dn)},setOp:function(Ee,Vn,dn){(_t!==Ee||Ht!==Vn||ie!==dn)&&(s.stencilOp(Ee,Vn,dn),_t=Ee,Ht=Vn,ie=dn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Ue!==Ee&&(s.clearStencil(Ee),Ue=Ee)},reset:function(){k=!1,Nt=null,bt=null,zt=null,Rt=null,_t=null,Ht=null,ie=null,Ue=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},v=new WeakMap,M=[],E=null,b=!1,S=null,g=null,N=null,L=null,D=null,z=null,V=null,I=new we(0,0,0),X=0,C=!1,w=null,H=null,ot=null,st=null,vt=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let Tt=null,U={};const $=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),yt=new He().fromArray($),Q=new He().fromArray(xt);function mt(k,Nt,bt,zt){const Rt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<bt;Ht++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Nt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return _t}const Mt={};Mt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),wt(s.DEPTH_TEST),h.setFunc(Es),Me(!1),pe(P_),wt(s.CULL_FACE),F(Va);function wt(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function Dt(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function le(k,Nt){return x[k]!==Nt?(s.bindFramebuffer(k,Nt),x[k]=Nt,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Nt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Jt(k,Nt){let bt=M,zt=!1;if(k){bt=v.get(Nt),bt===void 0&&(bt=[],v.set(Nt,bt));const Rt=k.textures;if(bt.length!==Rt.length||bt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Ht=Rt.length;_t<Ht;_t++)bt[_t]=s.COLOR_ATTACHMENT0+_t;bt.length=Rt.length,zt=!0}}else bt[0]!==s.BACK&&(bt[0]=s.BACK,zt=!0);zt&&s.drawBuffers(bt)}function Oe(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Ge={[xr]:s.FUNC_ADD,[gM]:s.FUNC_SUBTRACT,[_M]:s.FUNC_REVERSE_SUBTRACT};Ge[vM]=s.MIN,Ge[xM]=s.MAX;const _e={[SM]:s.ZERO,[yM]:s.ONE,[MM]:s.SRC_COLOR,[Vh]:s.SRC_ALPHA,[wM]:s.SRC_ALPHA_SATURATE,[AM]:s.DST_COLOR,[TM]:s.DST_ALPHA,[EM]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[RM]:s.ONE_MINUS_DST_COLOR,[bM]:s.ONE_MINUS_DST_ALPHA,[CM]:s.CONSTANT_COLOR,[DM]:s.ONE_MINUS_CONSTANT_COLOR,[UM]:s.CONSTANT_ALPHA,[LM]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,Nt,bt,zt,Rt,_t,Ht,ie,Ue,Ee){if(k===Va){b===!0&&(Dt(s.BLEND),b=!1);return}if(b===!1&&(wt(s.BLEND),b=!0),k!==mM){if(k!==S||Ee!==C){if((g!==xr||D!==xr)&&(s.blendEquation(s.FUNC_ADD),g=xr,D=xr),Ee)switch(k){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case I_:s.blendFunc(s.ONE,s.ONE);break;case B_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case z_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case I_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case B_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,L=null,z=null,V=null,I.set(0,0,0),X=0,S=k,C=Ee}return}Rt=Rt||Nt,_t=_t||bt,Ht=Ht||zt,(Nt!==g||Rt!==D)&&(s.blendEquationSeparate(Ge[Nt],Ge[Rt]),g=Nt,D=Rt),(bt!==N||zt!==L||_t!==z||Ht!==V)&&(s.blendFuncSeparate(_e[bt],_e[zt],_e[_t],_e[Ht]),N=bt,L=zt,z=_t,V=Ht),(ie.equals(I)===!1||Ue!==X)&&(s.blendColor(ie.r,ie.g,ie.b,Ue),I.copy(ie),X=Ue),S=k,C=!1}function Sn(k,Nt){k.side===ia?Dt(s.CULL_FACE):wt(s.CULL_FACE);let bt=k.side===Hn;Nt&&(bt=!bt),Me(bt),k.blending===Ss&&k.transparent===!1?F(Va):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Me(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function pe(k){k!==dM?(wt(s.CULL_FACE),k!==H&&(k===P_?s.cullFace(s.BACK):k===pM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),H=k}function kt(k){k!==ot&&(B&&s.lineWidth(k),ot=k)}function ve(k,Nt,bt){k?(wt(s.POLYGON_OFFSET_FILL),(st!==Nt||vt!==bt)&&(s.polygonOffset(Nt,bt),st=Nt,vt=bt)):Dt(s.POLYGON_OFFSET_FILL)}function Zt(k){k?wt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function re(k){k===void 0&&(k=s.TEXTURE0+dt-1),Tt!==k&&(s.activeTexture(k),Tt=k)}function $e(k,Nt,bt){bt===void 0&&(Tt===null?bt=s.TEXTURE0+dt-1:bt=Tt);let zt=U[bt];zt===void 0&&(zt={type:void 0,texture:void 0},U[bt]=zt),(zt.type!==k||zt.texture!==Nt)&&(Tt!==bt&&(s.activeTexture(bt),Tt=bt),s.bindTexture(k,Nt||Mt[k]),zt.type=k,zt.texture=Nt)}function O(){const k=U[Tt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Yt(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function jt(k,Nt){let bt=p.get(Nt);bt===void 0&&(bt=new WeakMap,p.set(Nt,bt));let zt=bt.get(k);zt===void 0&&(zt=s.getUniformBlockIndex(Nt,k.name),bt.set(k,zt))}function Ct(k,Nt){const zt=p.get(Nt).get(k);m.get(Nt)!==zt&&(s.uniformBlockBinding(Nt,zt,k.__bindingPointIndex),m.set(Nt,zt))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},Tt=null,U={},x={},v=new WeakMap,M=[],E=null,b=!1,S=null,g=null,N=null,L=null,D=null,z=null,V=null,I=new we(0,0,0),X=0,C=!1,w=null,H=null,ot=null,st=null,vt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:wt,disable:Dt,bindFramebuffer:le,drawBuffers:Jt,useProgram:Oe,setBlending:F,setMaterial:Sn,setFlipSided:Me,setCullFace:pe,setLineWidth:kt,setPolygonOffset:ve,setScissorTest:Zt,activeTexture:re,bindTexture:$e,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Xt,texImage3D:St,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Lt,texStorage3D:Vt,texSubImage2D:ft,texSubImage3D:pt,compressedTexSubImage2D:lt,compressedTexSubImage3D:It,scissor:Bt,viewport:Yt,reset:ae}}function pR(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,_=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return M?new OffscreenCanvas(O,T):Vu("canvas")}function b(O,T,et){let ft=1;const pt=$e(O);if((pt.width>et||pt.height>et)&&(ft=et/Math.max(pt.width,pt.height)),ft<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const lt=Math.floor(ft*pt.width),It=Math.floor(ft*pt.height);x===void 0&&(x=E(lt,It));const Lt=T?E(lt,It):x;return Lt.width=lt,Lt.height=It,Lt.getContext("2d").drawImage(O,0,0,lt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+lt+"x"+It+")."),Lt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function S(O){return O.generateMipmaps}function g(O){s.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,T,et,ft,pt=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let lt=T;if(T===s.RED&&(et===s.FLOAT&&(lt=s.R32F),et===s.HALF_FLOAT&&(lt=s.R16F),et===s.UNSIGNED_BYTE&&(lt=s.R8)),T===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.R8UI),et===s.UNSIGNED_SHORT&&(lt=s.R16UI),et===s.UNSIGNED_INT&&(lt=s.R32UI),et===s.BYTE&&(lt=s.R8I),et===s.SHORT&&(lt=s.R16I),et===s.INT&&(lt=s.R32I)),T===s.RG&&(et===s.FLOAT&&(lt=s.RG32F),et===s.HALF_FLOAT&&(lt=s.RG16F),et===s.UNSIGNED_BYTE&&(lt=s.RG8)),T===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.RG8UI),et===s.UNSIGNED_SHORT&&(lt=s.RG16UI),et===s.UNSIGNED_INT&&(lt=s.RG32UI),et===s.BYTE&&(lt=s.RG8I),et===s.SHORT&&(lt=s.RG16I),et===s.INT&&(lt=s.RG32I)),T===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),et===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),et===s.UNSIGNED_INT&&(lt=s.RGB32UI),et===s.BYTE&&(lt=s.RGB8I),et===s.SHORT&&(lt=s.RGB16I),et===s.INT&&(lt=s.RGB32I)),T===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),et===s.UNSIGNED_INT&&(lt=s.RGBA32UI),et===s.BYTE&&(lt=s.RGBA8I),et===s.SHORT&&(lt=s.RGBA16I),et===s.INT&&(lt=s.RGBA32I)),T===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),T===s.RGBA){const It=pt?Hu:be.getTransfer(ft);et===s.FLOAT&&(lt=s.RGBA32F),et===s.HALF_FLOAT&&(lt=s.RGBA16F),et===s.UNSIGNED_BYTE&&(lt=It===Fe?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function D(O,T){let et;return O?T===null||T===Tr||T===Go?et=s.DEPTH24_STENCIL8:T===aa?et=s.DEPTH32F_STENCIL8:T===Ho&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Tr||T===Go?et=s.DEPTH_COMPONENT24:T===aa?et=s.DEPTH_COMPONENT32F:T===Ho&&(et=s.DEPTH_COMPONENT16),et}function z(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==gi&&O.minFilter!==Ti?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function V(O){const T=O.target;T.removeEventListener("dispose",V),X(T),T.isVideoTexture&&_.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),w(T)}function X(O){const T=r.get(O);if(T.__webglInit===void 0)return;const et=O.source,ft=v.get(et);if(ft){const pt=ft[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&C(O),Object.keys(ft).length===0&&v.delete(et)}r.remove(O)}function C(O){const T=r.get(O);s.deleteTexture(T.__webglTexture);const et=O.source,ft=v.get(et);delete ft[T.__cacheKey],h.memory.textures--}function w(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let pt=0;pt<T.__webglFramebuffer[ft].length;pt++)s.deleteFramebuffer(T.__webglFramebuffer[ft][pt]);else s.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)s.deleteFramebuffer(T.__webglFramebuffer[ft]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=O.textures;for(let ft=0,pt=et.length;ft<pt;ft++){const lt=r.get(et[ft]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(et[ft])}r.remove(O)}let H=0;function ot(){H=0}function st(){const O=H;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function vt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function dt(O,T){const et=r.get(O);if(O.isVideoTexture&&Zt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const ft=O.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,O,T);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+T)}function B(O,T){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Mt(et,O,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+T)}function Z(O,T){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Mt(et,O,T);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+T)}function Y(O,T){const et=r.get(O);if(O.version>0&&et.__version!==O.version){wt(et,O,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+T)}const Tt={[$h]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},U={[gi]:s.NEAREST,[VM]:s.NEAREST_MIPMAP_NEAREST,[uu]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[rh]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},$={[qM]:s.NEVER,[JM]:s.ALWAYS,[YM]:s.LESS,[lv]:s.LEQUAL,[jM]:s.EQUAL,[QM]:s.GEQUAL,[ZM]:s.GREATER,[KM]:s.NOTEQUAL};function xt(O,T){if(T.type===aa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ti||T.magFilter===rh||T.magFilter===uu||T.magFilter===Mr||T.minFilter===Ti||T.minFilter===rh||T.minFilter===uu||T.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Tt[T.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Tt[T.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Tt[T.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,U[T.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gi||T.minFilter!==uu&&T.minFilter!==Mr||T.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function yt(O,T){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",V));const ft=T.source;let pt=v.get(ft);pt===void 0&&(pt={},v.set(ft,pt));const lt=vt(T);if(lt!==O.__cacheKey){pt[lt]===void 0&&(pt[lt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,et=!0),pt[lt].usedTimes++;const It=pt[O.__cacheKey];It!==void 0&&(pt[O.__cacheKey].usedTimes--,It.usedTimes===0&&C(T)),O.__cacheKey=lt,O.__webglTexture=pt[lt].texture}return et}function Q(O,T,et){return Math.floor(Math.floor(O/et)/T)}function mt(O,T,et,ft){const lt=O.updateRanges;if(lt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,et,ft,T.data);else{lt.sort((St,Bt)=>St.start-Bt.start);let It=0;for(let St=1;St<lt.length;St++){const Bt=lt[It],Yt=lt[St],jt=Bt.start+Bt.count,Ct=Q(Yt.start,T.width,4),ae=Q(Bt.start,T.width,4);Yt.start<=jt+1&&Ct===ae&&Q(Yt.start+Yt.count-1,T.width,4)===Ct?Bt.count=Math.max(Bt.count,Yt.start+Yt.count-Bt.start):(++It,lt[It]=Yt)}lt.length=It+1;const Lt=s.getParameter(s.UNPACK_ROW_LENGTH),Vt=s.getParameter(s.UNPACK_SKIP_PIXELS),Xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let St=0,Bt=lt.length;St<Bt;St++){const Yt=lt[St],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),ae=jt%T.width,k=Math.floor(jt/T.width),Nt=Ct,bt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,ae,k,Nt,bt,et,ft,T.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xt)}}function Mt(O,T,et){let ft=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=s.TEXTURE_3D);const pt=yt(O,T),lt=T.source;i.bindTexture(ft,O.__webglTexture,s.TEXTURE0+et);const It=r.get(lt);if(lt.version!==It.__version||pt===!0){i.activeTexture(s.TEXTURE0+et);const Lt=be.getPrimaries(be.workingColorSpace),Vt=T.colorSpace===Ga?null:be.getPrimaries(T.colorSpace),Xt=T.colorSpace===Ga||Lt===Vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let St=b(T.image,!1,l.maxTextureSize);St=re(T,St);const Bt=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let jt=L(T.internalFormat,Bt,Yt,T.colorSpace,T.isVideoTexture);xt(ft,T);let Ct;const ae=T.mipmaps,k=T.isVideoTexture!==!0,Nt=It.__version===void 0||pt===!0,bt=lt.dataReady,zt=z(T,St);if(T.isDepthTexture)jt=D(T.format===ko,T.type),Nt&&(k?i.texStorage2D(s.TEXTURE_2D,1,jt,St.width,St.height):i.texImage2D(s.TEXTURE_2D,0,jt,St.width,St.height,0,Bt,Yt,null));else if(T.isDataTexture)if(ae.length>0){k&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,jt,ae[0].width,ae[0].height);for(let Rt=0,_t=ae.length;Rt<_t;Rt++)Ct=ae[Rt],k?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Bt,Yt,Ct.data);T.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(s.TEXTURE_2D,zt,jt,St.width,St.height),bt&&mt(T,St,Bt,Yt)):i.texImage2D(s.TEXTURE_2D,0,jt,St.width,St.height,0,Bt,Yt,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,jt,ae[0].width,ae[0].height,St.depth);for(let Rt=0,_t=ae.length;Rt<_t;Rt++)if(Ct=ae[Rt],T.format!==mi)if(Bt!==null)if(k){if(bt)if(T.layerUpdates.size>0){const Ht=l0(Ct.width,Ct.height,T.format,T.type);for(const ie of T.layerUpdates){const Ue=Ct.data.subarray(ie*Ht/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,ie,Ct.width,Ct.height,1,Bt,Ue)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,St.depth,Bt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Ct.width,Ct.height,St.depth,Bt,Yt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,jt,Ct.width,Ct.height,St.depth,0,Bt,Yt,Ct.data)}else{k&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,jt,ae[0].width,ae[0].height);for(let Rt=0,_t=ae.length;Rt<_t;Rt++)Ct=ae[Rt],T.format!==mi?Bt!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Ct.width,Ct.height,Bt,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Rt,jt,Ct.width,Ct.height,0,Bt,Yt,Ct.data)}else if(T.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,jt,St.width,St.height,St.depth),bt)if(T.layerUpdates.size>0){const Rt=l0(St.width,St.height,T.format,T.type);for(const _t of T.layerUpdates){const Ht=St.data.subarray(_t*Rt/St.data.BYTES_PER_ELEMENT,(_t+1)*Rt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Bt,Yt,Ht)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Bt,Yt,St.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,St.width,St.height,St.depth,0,Bt,Yt,St.data);else if(T.isData3DTexture)k?(Nt&&i.texStorage3D(s.TEXTURE_3D,zt,jt,St.width,St.height,St.depth),bt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Bt,Yt,St.data)):i.texImage3D(s.TEXTURE_3D,0,jt,St.width,St.height,St.depth,0,Bt,Yt,St.data);else if(T.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(s.TEXTURE_2D,zt,jt,St.width,St.height);else{let Rt=St.width,_t=St.height;for(let Ht=0;Ht<zt;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,jt,Rt,_t,0,Bt,Yt,null),Rt>>=1,_t>>=1}}else if(ae.length>0){if(k&&Nt){const Rt=$e(ae[0]);i.texStorage2D(s.TEXTURE_2D,zt,jt,Rt.width,Rt.height)}for(let Rt=0,_t=ae.length;Rt<_t;Rt++)Ct=ae[Rt],k?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Bt,Yt,Ct):i.texImage2D(s.TEXTURE_2D,Rt,jt,Bt,Yt,Ct);T.generateMipmaps=!1}else if(k){if(Nt){const Rt=$e(St);i.texStorage2D(s.TEXTURE_2D,zt,jt,Rt.width,Rt.height)}bt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,Yt,St)}else i.texImage2D(s.TEXTURE_2D,0,jt,Bt,Yt,St);S(T)&&g(ft),It.__version=lt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function wt(O,T,et){if(T.image.length!==6)return;const ft=yt(O,T),pt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+et);const lt=r.get(pt);if(pt.version!==lt.__version||ft===!0){i.activeTexture(s.TEXTURE0+et);const It=be.getPrimaries(be.workingColorSpace),Lt=T.colorSpace===Ga?null:be.getPrimaries(T.colorSpace),Vt=T.colorSpace===Ga||It===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Xt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!Xt&&!St?Bt[_t]=b(T.image[_t],!0,l.maxCubemapSize):Bt[_t]=St?T.image[_t].image:T.image[_t],Bt[_t]=re(T,Bt[_t]);const Yt=Bt[0],jt=u.convert(T.format,T.colorSpace),Ct=u.convert(T.type),ae=L(T.internalFormat,jt,Ct,T.colorSpace),k=T.isVideoTexture!==!0,Nt=lt.__version===void 0||ft===!0,bt=pt.dataReady;let zt=z(T,Yt);xt(s.TEXTURE_CUBE_MAP,T);let Rt;if(Xt){k&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ae,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){Rt=Bt[_t].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){const ie=Rt[Ht];T.format!==mi?jt!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ie.width,ie.height,jt,ie.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,ie.width,ie.height,jt,Ct,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,ae,ie.width,ie.height,0,jt,Ct,ie.data)}}}else{if(Rt=T.mipmaps,k&&Nt){Rt.length>0&&zt++;const _t=$e(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,jt,Ct,Bt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Bt[_t].width,Bt[_t].height,0,jt,Ct,Bt[_t].data);for(let Ht=0;Ht<Rt.length;Ht++){const Ue=Rt[Ht].image[_t].image;k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,Ue.width,Ue.height,jt,Ct,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,ae,Ue.width,Ue.height,0,jt,Ct,Ue.data)}}else{k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,jt,Ct,Bt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,jt,Ct,Bt[_t]);for(let Ht=0;Ht<Rt.length;Ht++){const ie=Rt[Ht];k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,jt,Ct,ie.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,ae,jt,Ct,ie.image[_t])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),lt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Dt(O,T,et,ft,pt,lt){const It=u.convert(et.format,et.colorSpace),Lt=u.convert(et.type),Vt=L(et.internalFormat,It,Lt,et.colorSpace),Xt=r.get(T),St=r.get(et);if(St.__renderTarget=T,!Xt.__hasExternalTextures){const Bt=Math.max(1,T.width>>lt),Yt=Math.max(1,T.height>>lt);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?i.texImage3D(pt,lt,Vt,Bt,Yt,T.depth,0,It,Lt,null):i.texImage2D(pt,lt,Vt,Bt,Yt,0,It,Lt,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),ve(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,pt,St.__webglTexture,0,kt(T)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,pt,St.__webglTexture,lt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function le(O,T,et){if(s.bindRenderbuffer(s.RENDERBUFFER,O),T.depthBuffer){const ft=T.depthTexture,pt=ft&&ft.isDepthTexture?ft.type:null,lt=D(T.stencilBuffer,pt),It=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=kt(T);ve(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,lt,T.width,T.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,lt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,lt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,O)}else{const ft=T.textures;for(let pt=0;pt<ft.length;pt++){const lt=ft[pt],It=u.convert(lt.format,lt.colorSpace),Lt=u.convert(lt.type),Vt=L(lt.internalFormat,It,Lt,lt.colorSpace),Xt=kt(T);et&&ve(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Vt,T.width,T.height):ve(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Vt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Vt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Jt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const pt=ft.__webglTexture,lt=kt(T);if(T.depthTexture.format===Vo)ve(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(T.depthTexture.format===ko)ve(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Oe(O){const T=r.get(O),et=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ft=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",pt)};ft.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=ft}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=O.texture.mipmaps;ft&&ft.length>0?Jt(T.__webglFramebuffer[0],O):Jt(T.__webglFramebuffer,O)}else if(et){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=s.createRenderbuffer(),le(T.__webglDepthbuffer[ft],O,!1);else{const pt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,lt)}}else{const ft=O.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),le(T.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,lt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(O,T,et){const ft=r.get(O);T!==void 0&&Dt(ft.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Oe(O)}function _e(O){const T=O.texture,et=r.get(O),ft=r.get(T);O.addEventListener("dispose",I);const pt=O.textures,lt=O.isWebGLCubeRenderTarget===!0,It=pt.length>1;if(It||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=T.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Lt]=[];for(let Vt=0;Vt<T.mipmaps.length;Vt++)et.__webglFramebuffer[Lt][Vt]=s.createFramebuffer()}else et.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)et.__webglFramebuffer[Lt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(It)for(let Lt=0,Vt=pt.length;Lt<Vt;Lt++){const Xt=r.get(pt[Lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),h.memory.textures++)}if(O.samples>0&&ve(O)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Lt=0;Lt<pt.length;Lt++){const Vt=pt[Lt];et.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt]);const Xt=u.convert(Vt.format,Vt.colorSpace),St=u.convert(Vt.type),Bt=L(Vt.internalFormat,Xt,St,Vt.colorSpace,O.isXRRenderTarget===!0),Yt=kt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Bt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),le(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),xt(s.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Vt=0;Vt<T.mipmaps.length;Vt++)Dt(et.__webglFramebuffer[Lt][Vt],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Vt);else Dt(et.__webglFramebuffer[Lt],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);S(T)&&g(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let Lt=0,Vt=pt.length;Lt<Vt;Lt++){const Xt=pt[Lt],St=r.get(Xt);i.bindTexture(s.TEXTURE_2D,St.__webglTexture),xt(s.TEXTURE_2D,Xt),Dt(et.__webglFramebuffer,O,Xt,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,0),S(Xt)&&g(s.TEXTURE_2D)}i.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,ft.__webglTexture),xt(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let Vt=0;Vt<T.mipmaps.length;Vt++)Dt(et.__webglFramebuffer[Vt],O,T,s.COLOR_ATTACHMENT0,Lt,Vt);else Dt(et.__webglFramebuffer,O,T,s.COLOR_ATTACHMENT0,Lt,0);S(T)&&g(Lt),i.unbindTexture()}O.depthBuffer&&Oe(O)}function F(O){const T=O.textures;for(let et=0,ft=T.length;et<ft;et++){const pt=T[et];if(S(pt)){const lt=N(O),It=r.get(pt).__webglTexture;i.bindTexture(lt,It),g(lt),i.unbindTexture()}}}const Sn=[],Me=[];function pe(O){if(O.samples>0){if(ve(O)===!1){const T=O.textures,et=O.width,ft=O.height;let pt=s.COLOR_BUFFER_BIT;const lt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=r.get(O),Lt=T.length>1;if(Lt)for(let Xt=0;Xt<T.length;Xt++)i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Vt=O.texture.mipmaps;Vt&&Vt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Xt=0;Xt<T.length;Xt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Xt]);const St=r.get(T[Xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,et,ft,0,0,et,ft,pt,s.NEAREST),m===!0&&(Sn.length=0,Me.length=0,Sn.push(s.COLOR_ATTACHMENT0+Xt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Sn.push(lt),Me.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Sn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let Xt=0;Xt<T.length;Xt++){i.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Xt]);const St=r.get(T[Xt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,St,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function kt(O){return Math.min(l.maxSamples,O.samples)}function ve(O){const T=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(O){const T=h.render.frame;_.get(O)!==T&&(_.set(O,T),O.update())}function re(O,T){const et=O.colorSpace,ft=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==As&&et!==Ga&&(be.getTransfer(et)===Fe?(ft!==mi||pt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function $e(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ve}function mR(s,t){function i(r,l=Ga){let u;const h=be.getTransfer(l);if(r===wi)return s.UNSIGNED_BYTE;if(r===Bd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ev)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===$0)return s.BYTE;if(r===tv)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===Id)return s.INT;if(r===Tr)return s.UNSIGNED_INT;if(r===aa)return s.FLOAT;if(r===Yo)return s.HALF_FLOAT;if(r===nv)return s.ALPHA;if(r===iv)return s.RGB;if(r===mi)return s.RGBA;if(r===Vo)return s.DEPTH_COMPONENT;if(r===ko)return s.DEPTH_STENCIL;if(r===av)return s.RED;if(r===Fd)return s.RED_INTEGER;if(r===rv)return s.RG;if(r===Hd)return s.RG_INTEGER;if(r===Gd)return s.RGBA_INTEGER;if(r===Nu||r===Ou||r===Pu||r===Iu)if(h===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Nu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ou)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Nu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ou)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ed||r===nd||r===id||r===ad)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ed)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===od)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===rd||r===sd)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bu||r===Md||r===Ed)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Bu)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sv||r===Td||r===bd||r===Ad)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Bu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Td)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Gn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:gR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bi(new Yu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends Ds{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,v=null,M=null,E=null;const b=new vR,S=i.getContextAttributes();let g=null,N=null;const L=[],D=[],z=new Ae;let V=null;const I=new Jn;I.viewport=new He;const X=new Jn;X.viewport=new He;const C=[I,X],w=new HE;let H=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=L[Q];return mt===void 0&&(mt=new wh,L[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=L[Q];return mt===void 0&&(mt=new wh,L[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=L[Q];return mt===void 0&&(mt=new wh,L[Q]=mt),mt.getHandSpace()};function st(Q){const mt=D.indexOf(Q.inputSource);if(mt===-1)return;const Mt=L[mt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function vt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",dt);for(let Q=0;Q<L.length;Q++){const mt=D[Q];mt!==null&&(D[Q]=null,L[Q].disconnect(mt))}H=null,ot=null,b.reset(),t.setRenderTarget(g),M=null,v=null,x=null,l=null,N=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(V),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,wt=null,Dt=null;S.depth&&(Dt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=S.stencil?ko:Vo,wt=S.stencil?Go:Tr);const le={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(le),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new br(v.textureWidth,v.textureHeight,{format:mi,type:wi,depthTexture:new xv(v.textureWidth,v.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new br(M.framebufferWidth,M.framebufferHeight,{format:mi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function dt(Q){for(let mt=0;mt<Q.removed.length;mt++){const Mt=Q.removed[mt],wt=D.indexOf(Mt);wt>=0&&(D[wt]=null,L[wt].disconnect(Mt))}for(let mt=0;mt<Q.added.length;mt++){const Mt=Q.added[mt];let wt=D.indexOf(Mt);if(wt===-1){for(let le=0;le<L.length;le++)if(le>=D.length){D.push(Mt),wt=le;break}else if(D[le]===null){D[le]=Mt,wt=le;break}if(wt===-1)break}const Dt=L[wt];Dt&&Dt.connect(Mt)}}const B=new tt,Z=new tt;function Y(Q,mt,Mt){B.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const wt=B.distanceTo(Z),Dt=mt.projectionMatrix.elements,le=Mt.projectionMatrix.elements,Jt=Dt[14]/(Dt[10]-1),Oe=Dt[14]/(Dt[10]+1),Ge=(Dt[9]+1)/Dt[5],_e=(Dt[9]-1)/Dt[5],F=(Dt[8]-1)/Dt[0],Sn=(le[8]+1)/le[0],Me=Jt*F,pe=Jt*Sn,kt=wt/(-F+Sn),ve=kt*-F;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(kt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Dt[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Zt=Jt+kt,re=Oe+kt,$e=Me-ve,O=pe+(wt-ve),T=Ge*Oe/re*Zt,et=_e*Oe/re*Zt;Q.projectionMatrix.makePerspective($e,O,T,et,Zt,re),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Tt(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,Mt=Q.far;b.texture!==null&&(b.depthNear>0&&(mt=b.depthNear),b.depthFar>0&&(Mt=b.depthFar)),w.near=X.near=I.near=mt,w.far=X.far=I.far=Mt,(H!==w.near||ot!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,ot=w.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,w.layers.mask=I.layers.mask|X.layers.mask;const wt=Q.parent,Dt=w.cameras;Tt(w,wt);for(let le=0;le<Dt.length;le++)Tt(Dt[le],wt);Dt.length===2?Y(w,I,X):w.projectionMatrix.copy(I.projectionMatrix),U(Q,w,wt)};function U(Q,mt,Mt){Mt===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Rd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(w)};let $=null;function xt(Q,mt){if(_=mt.getViewerPose(p||h),E=mt,_!==null){const Mt=_.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let wt=!1;Mt.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let Jt=0;Jt<Mt.length;Jt++){const Oe=Mt[Jt];let Ge=null;if(M!==null)Ge=M.getViewport(Oe);else{const F=x.getViewSubImage(v,Oe);Ge=F.viewport,Jt===0&&(t.setRenderTargetTextures(N,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(N))}let _e=C[Jt];_e===void 0&&(_e=new Jn,_e.layers.enable(Jt),_e.viewport=new He,C[Jt]=_e),_e.matrix.fromArray(Oe.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Oe.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Jt===0&&(w.matrix.copy(_e.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(_e)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Jt=x.getDepthInformation(Mt[0]);Jt&&Jt.isValid&&Jt.texture&&b.init(t,Jt,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const wt=D[Mt],Dt=L[Mt];wt!==null&&Dt!==void 0&&Dt.update(wt,mt,p||h)}$&&$(Q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),E=null}const yt=new Mv;yt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const gr=new Ci,SR=new Ke;function yR(s,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,gv(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,N,L,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),x(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),v(S,g),g.isMeshPhysicalMaterial&&M(S,g,D)):g.isMeshMatcapMaterial?(u(S,g),E(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),b(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(h(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?m(S,g,N,L):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Hn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Hn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const N=t.get(g),L=N.envMap,D=N.envMapRotation;L&&(S.envMap.value=L,gr.copy(D),gr.x*=-1,gr.y*=-1,gr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),S.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(gr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function h(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,N,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*N,S.scale.value=L*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function x(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function v(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,N){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function b(S,g){const N=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function MR(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const D=L.program;r.uniformBlockBinding(N,D)}function p(N,L){let D=l[N.id];D===void 0&&(E(N),D=_(N),l[N.id]=D,N.addEventListener("dispose",S));const z=L.program;r.updateUBOMapping(N,z);const V=t.render.frame;u[N.id]!==V&&(v(N),u[N.id]=V)}function _(N){const L=x();N.__bindingPointIndex=L;const D=s.createBuffer(),z=N.__size,V=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,z,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function x(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=l[N.id],D=N.uniforms,z=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let V=0,I=D.length;V<I;V++){const X=Array.isArray(D[V])?D[V]:[D[V]];for(let C=0,w=X.length;C<w;C++){const H=X[C];if(M(H,V,C,z)===!0){const ot=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let vt=0;for(let dt=0;dt<st.length;dt++){const B=st[dt],Z=b(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ot+vt,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,vt),vt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ot,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,L,D,z){const V=N.value,I=L+"_"+D;if(z[I]===void 0)return typeof V=="number"||typeof V=="boolean"?z[I]=V:z[I]=V.clone(),!0;{const X=z[I];if(typeof V=="number"||typeof V=="boolean"){if(X!==V)return z[I]=V,!0}else if(X.equals(V)===!1)return X.copy(V),!0}return!1}function E(N){const L=N.uniforms;let D=0;const z=16;for(let I=0,X=L.length;I<X;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,H=C.length;w<H;w++){const ot=C[w],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let vt=0,dt=st.length;vt<dt;vt++){const B=st[vt],Z=b(B),Y=D%z,Tt=Y%Z.boundary,U=Y+Tt;D+=Tt,U!==0&&z-U<Z.storage&&(D+=z-U),ot.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=Z.storage}}}const V=D%z;return V>0&&(D+=z-V),N.__size=D,N.__cache={},this}function b(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function g(){for(const N in l)s.deleteBuffer(l[N]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class ER{constructor(t={}){const{canvas:i=tE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,g=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let z=!1;this._outputColorSpace=oi;let V=0,I=0,X=null,C=-1,w=null;const H=new He,ot=new He;let st=null;const vt=new we(0);let dt=0,B=i.width,Z=i.height,Y=1,Tt=null,U=null;const $=new He(0,0,B,Z),xt=new He(0,0,B,Z);let yt=!1;const Q=new Xd;let mt=!1,Mt=!1;const wt=new Ke,Dt=new Ke,le=new tt,Jt=new He,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function _e(){return X===null?Y:1}let F=r;function Sn(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",_t,!1),F===null){const q="webgl2";if(F=Sn(q,R),F===null)throw Sn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Me,pe,kt,ve,Zt,re,$e,O,T,et,ft,pt,lt,It,Lt,Vt,Xt,St,Bt,Yt,jt,Ct,ae,k;function Nt(){Me=new N1(F),Me.init(),Ct=new mR(F,Me),pe=new A1(F,Me,t,Ct),kt=new dR(F,Me),pe.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),ve=new I1(F),Zt=new tR,re=new pR(F,Me,kt,Zt,pe,Ct,ve),$e=new w1(D),O=new L1(D),T=new VE(F),ae=new T1(F,T),et=new O1(F,T,ve,ae),ft=new z1(F,et,T,ve),Bt=new B1(F,pe,re),Vt=new R1(Zt),pt=new $A(D,$e,O,Me,pe,ae,Vt),lt=new yR(D,Zt),It=new nR,Lt=new lR(Me),St=new E1(D,$e,O,kt,ft,M,m),Xt=new fR(D,ft,pe),k=new MR(F,ve,pe,kt),Yt=new b1(F,Me,ve),jt=new P1(F,Me,ve),ve.programs=pt.programs,D.capabilities=pe,D.extensions=Me,D.properties=Zt,D.renderLists=It,D.shadowMap=Xt,D.state=kt,D.info=ve}Nt();const bt=new xR(D,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,q,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),at===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,at){B=R,Z=q,Y=at,i.width=Math.floor(R*at),i.height=Math.floor(q*at),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,at,rt){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,at,rt),kt.viewport(H.copy($).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,q,at,rt){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,q,at,rt),kt.scissor(ot.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){kt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,at=!0){let rt=0;if(R){let j=!1;if(X!==null){const At=X.texture.format;j=At===Gd||At===Hd||At===Fd}if(j){const At=X.texture.type,Ut=At===wi||At===Tr||At===Ho||At===Go||At===Bd||At===zd,Pt=St.getClearColor(),Ft=St.getClearAlpha(),ee=Pt.r,Qt=Pt.g,Wt=Pt.b;Ut?(E[0]=ee,E[1]=Qt,E[2]=Wt,E[3]=Ft,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=ee,b[1]=Qt,b[2]=Wt,b[3]=Ft,F.clearBufferiv(F.COLOR,0,b))}else rt|=F.COLOR_BUFFER_BIT}q&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),It.dispose(),Lt.dispose(),Zt.dispose(),$e.dispose(),O.dispose(),ft.dispose(),ae.dispose(),k.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",on),bt.removeEventListener("sessionend",yn),On.stop()};function zt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=ve.autoReset,q=Xt.enabled,at=Xt.autoUpdate,rt=Xt.needsUpdate,j=Xt.type;Nt(),ve.autoReset=R,Xt.enabled=q,Xt.autoUpdate=at,Xt.needsUpdate=rt,Xt.type=j}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const q=R.target;q.removeEventListener("dispose",Ht),ie(q)}function ie(R){Ue(R),Zt.remove(R)}function Ue(R){const q=Zt.get(R).programs;q!==void 0&&(q.forEach(function(at){pt.releaseProgram(at)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,at,rt,j,At){q===null&&(q=Oe);const Ut=j.isMesh&&j.matrixWorld.determinant()<0,Pt=ja(R,q,at,rt,j);kt.setMaterial(rt,Ut);let Ft=at.index,ee=1;if(rt.wireframe===!0){if(Ft=et.getWireframeAttribute(at),Ft===void 0)return;ee=2}const Qt=at.drawRange,Wt=at.attributes.position;let ue=Qt.start*ee,Ce=(Qt.start+Qt.count)*ee;At!==null&&(ue=Math.max(ue,At.start*ee),Ce=Math.min(Ce,(At.start+At.count)*ee)),Ft!==null?(ue=Math.max(ue,0),Ce=Math.min(Ce,Ft.count)):Wt!=null&&(ue=Math.max(ue,0),Ce=Math.min(Ce,Wt.count));const qe=Ce-ue;if(qe<0||qe===1/0)return;ae.setup(j,rt,Pt,at,Ft);let he,De=Yt;if(Ft!==null&&(he=T.get(Ft),De=jt,De.setIndex(he)),j.isMesh)rt.wireframe===!0?(kt.setLineWidth(rt.wireframeLinewidth*_e()),De.setMode(F.LINES)):De.setMode(F.TRIANGLES);else if(j.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),kt.setLineWidth(Kt*_e()),j.isLineSegments?De.setMode(F.LINES):j.isLineLoop?De.setMode(F.LINE_LOOP):De.setMode(F.LINE_STRIP)}else j.isPoints?De.setMode(F.POINTS):j.isSprite&&De.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))De.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Pe=j._multiDrawCounts,xe=j._multiDrawCount,pn=Ft?T.get(Ft).bytesPerElement:1,ha=Zt.get(rt).currentProgram.getUniforms();for(let Xe=0;Xe<xe;Xe++)ha.setValue(F,"_gl_DrawID",Xe),De.render(Kt[Xe]/pn,Pe[Xe])}else if(j.isInstancedMesh)De.renderInstances(ue,qe,j.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Pe=Math.min(at.instanceCount,Kt);De.renderInstances(ue,qe,Pe)}else De.render(ue,qe)};function Ee(R,q,at){R.transparent===!0&&R.side===ia&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,ca(R,q,at),R.side=Xa,R.needsUpdate=!0,ca(R,q,at),R.side=ia):ca(R,q,at)}this.compile=function(R,q,at=null){at===null&&(at=R),g=Lt.get(at),g.init(q),L.push(g),at.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==at&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const rt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const At=j.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Pt=At[Ut];Ee(Pt,at,j),rt.add(Pt)}else Ee(At,at,j),rt.add(At)}),g=L.pop(),rt},this.compileAsync=function(R,q,at=null){const rt=this.compile(R,q,at);return new Promise(j=>{function At(){if(rt.forEach(function(Ut){Zt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){j(R);return}setTimeout(At,10)}Me.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Vn=null;function dn(R){Vn&&Vn(R)}function on(){On.stop()}function yn(){On.start()}const On=new Mv;On.setAnimationLoop(dn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){Vn=R,bt.setAnimationLoop(R),R===null?On.stop():On.start()},bt.addEventListener("sessionstart",on),bt.addEventListener("sessionend",yn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,X),g=Lt.get(R,L.length),g.init(q),L.push(g),Dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Dt),Mt=this.localClippingEnabled,mt=Vt.init(this.clippingPlanes,Mt),S=It.get(R,N.length),S.init(),N.push(S),bt.enabled===!0&&bt.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&qa(At,q,-1/0,D.sortObjects)}qa(R,q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Tt,U),Ge=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ge&&St.addToRenderList(S,R),this.info.render.frame++,mt===!0&&Vt.beginShadows();const at=g.state.shadowsArray;Xt.render(at,R,q),mt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=S.opaque,j=S.transmissive;if(g.setupLights(),q.isArrayCamera){const At=q.cameras;if(j.length>0)for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];$o(rt,j,R,Ft)}Ge&&St.render(R);for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];Jo(S,R,Ft,Ft.viewport)}}else j.length>0&&$o(rt,j,R,q),Ge&&St.render(R),Jo(S,R,q);X!==null&&I===0&&(re.updateMultisampleRenderTarget(X),re.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,q),ae.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(g=L[L.length-1],mt===!0&&Vt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function qa(R,q,at,rt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){rt&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Ut=ft.update(R),Pt=R.material;Pt.visible&&S.push(R,Ut,Pt,at,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ut=ft.update(R),Pt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Jt.copy(Ut.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(Pt)){const Ft=Ut.groups;for(let ee=0,Qt=Ft.length;ee<Qt;ee++){const Wt=Ft[ee],ue=Pt[Wt.materialIndex];ue&&ue.visible&&S.push(R,Ut,ue,at,Jt.z,Wt)}}else Pt.visible&&S.push(R,Ut,Pt,at,Jt.z,null)}}const At=R.children;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++)qa(At[Ut],q,at,rt)}function Jo(R,q,at,rt){const j=R.opaque,At=R.transmissive,Ut=R.transparent;g.setupLightsView(at),mt===!0&&Vt.setGlobalState(D.clippingPlanes,at),rt&&kt.viewport(H.copy(rt)),j.length>0&&Ya(j,q,at),At.length>0&&Ya(At,q,at),Ut.length>0&&Ya(Ut,q,at),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function $o(R,q,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[rt.id]===void 0&&(g.state.transmissionRenderTarget[rt.id]=new br(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Yo:wi,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const At=g.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||H;At.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget(),Ft=D.getActiveCubeFace(),ee=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(vt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),Ge&&St.render(at);const Qt=D.toneMapping;D.toneMapping=ka;const Wt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),g.setupLightsView(rt),mt===!0&&Vt.setGlobalState(D.clippingPlanes,rt),Ya(R,at,rt),re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At),Me.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ce=0,qe=q.length;Ce<qe;Ce++){const he=q[Ce],De=he.object,Kt=he.geometry,Pe=he.material,xe=he.group;if(Pe.side===ia&&De.layers.test(rt.layers)){const pn=Pe.side;Pe.side=Hn,Pe.needsUpdate=!0,ua(De,at,rt,Kt,Pe,xe),Pe.side=pn,Pe.needsUpdate=!0,ue=!0}}ue===!0&&(re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At))}D.setRenderTarget(Pt,Ft,ee),D.setClearColor(vt,dt),Wt!==void 0&&(rt.viewport=Wt),D.toneMapping=Qt}function Ya(R,q,at){const rt=q.isScene===!0?q.overrideMaterial:null;for(let j=0,At=R.length;j<At;j++){const Ut=R[j],Pt=Ut.object,Ft=Ut.geometry,ee=Ut.group;let Qt=Ut.material;Qt.allowOverride===!0&&rt!==null&&(Qt=rt),Pt.layers.test(at.layers)&&ua(Pt,q,at,Ft,Qt,ee)}}function ua(R,q,at,rt,j,At){R.onBeforeRender(D,q,at,rt,j,At),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,q,at,rt,R,At),j.transparent===!0&&j.side===ia&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,D.renderBufferDirect(at,q,rt,j,R,At),j.side=Xa,j.needsUpdate=!0,D.renderBufferDirect(at,q,rt,j,R,At),j.side=ia):D.renderBufferDirect(at,q,rt,j,R,At),R.onAfterRender(D,q,at,rt,j,At)}function ca(R,q,at){q.isScene!==!0&&(q=Oe);const rt=Zt.get(R),j=g.state.lights,At=g.state.shadowsArray,Ut=j.state.version,Pt=pt.getParameters(R,j.state,At,q,at),Ft=pt.getProgramCacheKey(Pt);let ee=rt.programs;rt.environment=R.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(R.isMeshStandardMaterial?O:$e).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",Ht),ee=new Map,rt.programs=ee);let Qt=ee.get(Ft);if(Qt!==void 0){if(rt.currentProgram===Qt&&rt.lightsStateVersion===Ut)return Ni(R,Pt),Qt}else Pt.uniforms=pt.getUniforms(R),R.onBeforeCompile(Pt,D),Qt=pt.acquireProgram(Pt,Ft),ee.set(Ft,Qt),rt.uniforms=Pt.uniforms;const Wt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Vt.uniform),Ni(R,Pt),rt.needsLights=nn(R),rt.lightsStateVersion=Ut,rt.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=Qt,rt.uniformsList=null,Qt}function Li(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=zu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ni(R,q){const at=Zt.get(R);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function ja(R,q,at,rt,j){q.isScene!==!0&&(q=Oe),re.resetTextureUnits();const At=q.fog,Ut=rt.isMeshStandardMaterial?q.environment:null,Pt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:As,Ft=(rt.isMeshStandardMaterial?O:$e).get(rt.envMap||Ut),ee=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Qt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!at.morphAttributes.position,ue=!!at.morphAttributes.normal,Ce=!!at.morphAttributes.color;let qe=ka;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=D.toneMapping);const he=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,De=he!==void 0?he.length:0,Kt=Zt.get(rt),Pe=g.state.lights;if(mt===!0&&(Mt===!0||R!==w)){const mn=R===w&&rt.id===C;Vt.setState(rt,R,mn)}let xe=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Pe.state.version||Kt.outputColorSpace!==Pt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ft||rt.fog===!0&&Kt.fog!==At||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Vt.numPlanes||Kt.numIntersection!==Vt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==Qt||Kt.morphTargets!==Wt||Kt.morphNormals!==ue||Kt.morphColors!==Ce||Kt.toneMapping!==qe||Kt.morphTargetsCount!==De)&&(xe=!0):(xe=!0,Kt.__version=rt.version);let pn=Kt.currentProgram;xe===!0&&(pn=ca(rt,q,j));let ha=!1,Xe=!1,Pi=!1;const Ve=pn.getUniforms(),An=Kt.uniforms;if(kt.useProgram(pn.program)&&(ha=!0,Xe=!0,Pi=!0),rt.id!==C&&(C=rt.id,Xe=!0),ha||w!==R){kt.buffers.depth.getReversed()?(wt.copy(R.projectionMatrix),nE(wt),iE(wt),Ve.setValue(F,"projectionMatrix",wt)):Ve.setValue(F,"projectionMatrix",R.projectionMatrix),Ve.setValue(F,"viewMatrix",R.matrixWorldInverse);const Mn=Ve.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,le.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xe=!0,Pi=!0)}if(j.isSkinnedMesh){Ve.setOptional(F,j,"bindMatrix"),Ve.setOptional(F,j,"bindMatrixInverse");const mn=j.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ve.setValue(F,"boneTexture",mn.boneTexture,re))}j.isBatchedMesh&&(Ve.setOptional(F,j,"batchingTexture"),Ve.setValue(F,"batchingTexture",j._matricesTexture,re),Ve.setOptional(F,j,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",j._indirectTexture,re),Ve.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",j._colorsTexture,re));const ln=at.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Bt.update(j,at,pn),(Xe||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Ve.setValue(F,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(An.envMap.value=Ft,An.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),Xe&&(Ve.setValue(F,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&fa(An,Pi),At&&rt.fog===!0&&lt.refreshFogUniforms(An,At),lt.refreshMaterialUniforms(An,rt,Y,Z,g.state.transmissionRenderTarget[R.id]),zu.upload(F,Li(Kt),An,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(zu.upload(F,Li(Kt),An,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ve.setValue(F,"center",j.center),Ve.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ve.setValue(F,"normalMatrix",j.normalMatrix),Ve.setValue(F,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const mn=rt.uniformsGroups;for(let Mn=0,_i=mn.length;Mn<_i;Mn++){const Ii=mn[Mn];k.update(Ii,pn),k.bind(Ii,pn)}}return pn}function fa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,at){const rt=Zt.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=q,Zt.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const at=Zt.get(R);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const tl=F.createFramebuffer();this.setRenderTarget=function(R,q=0,at=0){X=R,V=q,I=at;let rt=!0,j=null,At=!1,Ut=!1;if(R){const Ft=Zt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Ft.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Ft.__hasExternalTextures)re.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Ft.__boundDepthTexture!==Wt){if(Wt!==null&&Zt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ut=!0);const Qt=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[q])?j=Qt[q][at]:j=Qt[q],At=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?j=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?j=Qt[at]:j=Qt,H.copy(R.viewport),ot.copy(R.scissor),st=R.scissorTest}else H.copy($).multiplyScalar(Y).floor(),ot.copy(xt).multiplyScalar(Y).floor(),st=yt;if(at!==0&&(j=tl),kt.bindFramebuffer(F.FRAMEBUFFER,j)&&rt&&kt.drawBuffers(R,j),kt.viewport(H),kt.scissor(ot),kt.setScissorTest(st),At){const Ft=Zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,at)}else if(Ut){const Ft=Zt.get(R.texture),ee=q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,at,ee)}else if(R!==null&&at!==0){const Ft=Zt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(R,q,at,rt,j,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){kt.bindFramebuffer(F.FRAMEBUFFER,Ft);try{const ee=R.textures[Pt],Qt=ee.format,Wt=ee.type;if(!pe.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-rt&&at>=0&&at<=R.height-j&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(q,at,rt,j,Ct.convert(Qt),Ct.convert(Wt),At))}finally{const ee=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,q,at,rt,j,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(q>=0&&q<=R.width-rt&&at>=0&&at<=R.height-j){kt.bindFramebuffer(F.FRAMEBUFFER,Ft);const ee=R.textures[Pt],Qt=ee.format,Wt=ee.type;if(!pe.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(q,at,rt,j,Ct.convert(Qt),Ct.convert(Wt),0);const Ce=X!==null?Zt.get(X).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,Ce);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await eE(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(ue),F.deleteSync(qe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,at=0){const rt=Math.pow(2,-at),j=Math.floor(R.image.width*rt),At=Math.floor(R.image.height*rt),Ut=q!==null?q.x:0,Pt=q!==null?q.y:0;re.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ut,Pt,j,At),kt.unbindTexture()};const el=F.createFramebuffer(),Oi=F.createFramebuffer();this.copyTextureToTexture=function(R,q,at=null,rt=null,j=0,At=null){At===null&&(j!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=j,j=0):At=0);let Ut,Pt,Ft,ee,Qt,Wt,ue,Ce,qe;const he=R.isCompressedTexture?R.mipmaps[At]:R.image;if(at!==null)Ut=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Ft=at.isBox3?at.max.z-at.min.z:1,ee=at.min.x,Qt=at.min.y,Wt=at.isBox3?at.min.z:0;else{const ln=Math.pow(2,-j);Ut=Math.floor(he.width*ln),Pt=Math.floor(he.height*ln),R.isDataArrayTexture?Ft=he.depth:R.isData3DTexture?Ft=Math.floor(he.depth*ln):Ft=1,ee=0,Qt=0,Wt=0}rt!==null?(ue=rt.x,Ce=rt.y,qe=rt.z):(ue=0,Ce=0,qe=0);const De=Ct.convert(q.format),Kt=Ct.convert(q.type);let Pe;q.isData3DTexture?(re.setTexture3D(q,0),Pe=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(re.setTexture2DArray(q,0),Pe=F.TEXTURE_2D_ARRAY):(re.setTexture2D(q,0),Pe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ha=F.getParameter(F.UNPACK_SKIP_PIXELS),Xe=F.getParameter(F.UNPACK_SKIP_ROWS),Pi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ee),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Ve=R.isDataArrayTexture||R.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const ln=Zt.get(R),mn=Zt.get(q),Mn=Zt.get(ln.__renderTarget),_i=Zt.get(mn.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ii=0;Ii<Ft;Ii++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,j,Wt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.get(q).__webglTexture,At,qe+Ii)),F.blitFramebuffer(ee,Qt,Ut,Pt,ue,Ce,Ut,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Zt.has(R)){const ln=Zt.get(R),mn=Zt.get(q);kt.bindFramebuffer(F.READ_FRAMEBUFFER,el),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Oi);for(let Mn=0;Mn<Ft;Mn++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,j,Wt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,j),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,At,qe+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,At),j!==0?F.blitFramebuffer(ee,Qt,Ut,Pt,ue,Ce,Ut,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(Pe,At,ue,Ce,qe+Mn,ee,Qt,Ut,Pt):F.copyTexSubImage2D(Pe,At,ue,Ce,ee,Qt,Ut,Pt);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Pe,At,ue,Ce,qe,Ut,Pt,Ft,De,Kt,he.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,At,ue,Ce,qe,Ut,Pt,Ft,De,he.data):F.texSubImage3D(Pe,At,ue,Ce,qe,Ut,Pt,Ft,De,Kt,he):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,ue,Ce,Ut,Pt,De,Kt,he.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,ue,Ce,he.width,he.height,De,he.data):F.texSubImage2D(F.TEXTURE_2D,At,ue,Ce,Ut,Pt,De,Kt,he);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ha),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pi),At===0&&q.generateMipmaps&&F.generateMipmap(Pe),kt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,at=null,rt=null,j=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,at,rt,j)},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){V=0,I=0,X=null,kt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const TR={" ":[1,.1,.1],M:[2,4,1],i:[.8,3,1],t:[1.2,3.5,1],c:[1.5,3,1],h:[1.5,4,1],e:[1.5,3,1],l:[.8,4,1],C:[2,4,1],r:[1.2,3,1],a:[1.5,3,1],f:[1.2,4,1],I:[.8,4,1],N:[1.5,4,1],W:[2,4,1],O:[1.5,3,1],K:[1.2,4,1],S:[1.5,3,1]},Rv=({text:s,className:t="",onClick:i})=>{const r=ut.useRef(null),[l,u]=ut.useState(!1),h=ut.useRef(null),d=ut.useRef(null),m=ut.useRef(null),p=ut.useRef({x:0,y:0}),_=ut.useCallback(v=>{const M=r.current;if(!M)return;const E=M.getBoundingClientRect();E&&(p.current.x=(v.clientX-E.left)/E.width*2-1,p.current.y=-((v.clientY-E.top)/E.height)*2+1)},[]),x=ut.useMemo(()=>{const v=s.split(""),M=2.5,E=-(v.length-1)*M/2;return v.map((b,S)=>{const[g,N,L]=TR[b]||[1.5,3,1];return{letter:b,geometry:new Us(g,N,L),position:E+S*M}})},[s]);return ut.useEffect(()=>{const v=r.current;if(!v)return;const M=v.clientWidth||300,E=v.clientHeight||100,b=new CE;h.current=b;const S=new Jn(75,M/E,.1,1e3);S.position.z=15;const g=new ER({alpha:!0,antialias:!0});d.current=g,g.setSize(M,E),g.setClearColor(0,0),g.shadowMap.enabled=!0,g.shadowMap.type=K0,v.appendChild(g.domElement);const N=new Io;x.forEach(({geometry:I,position:X})=>{const C=new NE({color:16777215,metalness:.8,roughness:.2,envMapIntensity:1.5}),w=new bi(I,C);w.position.x=X,w.castShadow=!0,w.receiveShadow=!0,N.add(w)}),b.add(N);const L=new FE(16777215,1.2);b.add(L);const D=new zE(16777215,3);D.position.set(15,15,10),D.castShadow=!0,D.shadow.mapSize.width=2048,D.shadow.mapSize.height=2048,b.add(D);const z=[new Ru(65535,5,100),new Ru(16711935,5,100),new Ru(16776960,4,80),new Ru(16777215,3,60)];z.forEach((I,X)=>{const C=[[-15,10,15],[15,-10,-15],[0,20,0],[0,0,20]],[w,H,ot]=C[X];I.position.set(w,H,ot),b.add(I)}),window.addEventListener("mousemove",_);const V=()=>{m.current=requestAnimationFrame(V),N.rotation.x=-p.current.y*.1,N.rotation.y=p.current.x*.1,N.position.y=Math.sin(Date.now()*.001)*2;const I=Date.now()*.001;z[0].position.x=Math.cos(I)*15,z[0].position.z=Math.sin(I)*15,z[1].position.x=Math.cos(I+Math.PI)*15,z[1].position.z=Math.sin(I+Math.PI)*15,z[2].position.x=Math.sin(I*.5)*10,z[2].position.z=Math.cos(I*.5)*10,z[3].position.x=Math.cos(I*.3)*8,z[3].position.y=Math.sin(I*.3)*8,g.render(b,S)};return V(),u(!0),()=>{window.removeEventListener("mousemove",_),m.current&&cancelAnimationFrame(m.current),v.contains(g.domElement)&&v.removeChild(g.domElement),g&&g.dispose(),b&&b.clear(),x.forEach(({geometry:I})=>{I.dispose()}),h.current=null,d.current=null,u(!1)}},[s,x,_]),Et.jsx("div",{ref:r,className:`inline-block relative mx-auto lg:mx-0 ${t} ${i?"cursor-pointer":""}`,style:{width:"400px",height:"120px"},onClick:i,children:!l&&Et.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white text-4xl font-bold",children:s})})},bR=({links:s})=>Et.jsx("div",{className:"flex gap-4 justify-center lg:justify-end",children:s.map(t=>Et.jsx("a",{href:t.url,className:"text-gray-400 hover:text-white transition-colors",title:t.title,children:Et.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:Et.jsx("path",{d:t.icon})})},t.name))}),AR=["Tool 1","Tool 2"],RR=["Process 1","Process 2"],ku={title:"Mitchell Craft",description:"A short intro about yourself.",copyright:"All Works ©Mitchell Craft, 2025",logoText:"INCWORKS"},wR=({socialLinks:s})=>Et.jsx("div",{className:"max-w-7xl mx-auto mb-8",children:Et.jsxs("header",{className:"flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4",children:[Et.jsx(Rv,{text:ku.title,className:"text-4xl font-bold"}),Et.jsxs("div",{className:"text-center lg:text-right",children:[Et.jsx("p",{className:"text-lg text-gray-300 mb-2",children:ku.description}),Et.jsx(bR,{links:s})]})]})}),CR=({project:s})=>Et.jsxs(Fo,{to:`/project/${s.id}`,className:"group relative overflow-hidden block break-inside-avoid p-[10px] rounded-md",children:[Et.jsx("img",{src:s.image,alt:s.title,className:"w-full h-auto object-cover transition-all duration-300 group-hover:scale-150 rounded-md"}),Et.jsx("div",{className:"absolute inset-0 flex flex-col justify-end",children:Et.jsx("div",{className:"transform translate-y-full group-hover:translate-y-0 transition-transform duration-300",children:Et.jsxs("div",{className:"bg-black text-white overflow-hidden -mx-1",children:[Et.jsx("div",{className:"h-1 border-t-2 border-dashed border-white"}),Et.jsxs("div",{className:"p-3",children:[Et.jsx("h3",{className:"text-sm font-semibold text-white mb-1",children:s.title}),s.subtitle&&Et.jsx("p",{className:"text-xs text-gray-400 mb-1 font-mono",children:s.subtitle}),Et.jsx("p",{className:"text-xs text-gray-300 mb-1",children:s.year}),Et.jsx("p",{className:"text-xs text-gray-200 leading-relaxed line-clamp-2",children:s.description})]})]})})})]}),DR=({projects:s})=>{const t=ut.useCallback(i=>{window.location.href=`/project/${i}`},[]);return Et.jsx("div",{className:"max-w-7xl mx-auto mt-16 overflow-x-auto",children:Et.jsxs("table",{className:"min-w-full text-sm font-mono bg-black",children:[Et.jsx("thead",{children:Et.jsxs("tr",{className:"uppercase text-left text-white border-b border-white border-solid",children:[Et.jsx("th",{className:"py-2 px-4 font-bold",children:"Title"}),Et.jsx("th",{className:"py-2 px-4 font-bold text-center",children:"Categories"}),Et.jsx("th",{className:"py-2 px-4 font-bold text-right",children:"Year"})]})}),Et.jsx("tbody",{children:s.map(i=>Et.jsxs("tr",{className:"transition-colors bg-black text-white hover:bg-white hover:text-black cursor-pointer border-b border-white border-dashed",onClick:()=>t(i.id),tabIndex:0,style:{outline:"none"},children:[Et.jsx("td",{className:"py-2 px-4 whitespace-nowrap font-bold tracking-wide uppercase",children:i.title}),Et.jsx("td",{className:"py-2 px-4 text-center whitespace-nowrap",children:i.type?.toUpperCase()||""}),Et.jsx("td",{className:"py-2 px-4 text-right whitespace-nowrap",children:i.year})]},i.id))})]})})},UR=({project:s,projectImages:t})=>s.id===2?Et.jsxs("div",{className:"space-y-2",children:[Et.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[Et.jsx("div",{className:"relative overflow-hidden p-[5px] rounded-md",children:Et.jsx("img",{src:t[0],alt:`${s.title} - GIF 1`,className:"w-full h-auto object-cover rounded-md"})}),Et.jsx("div",{className:"relative overflow-hidden p-[5px] rounded-md",children:Et.jsx("img",{src:t[1],alt:`${s.title} - GIF 2`,className:"w-full h-auto object-cover rounded-md"})})]}),Et.jsx("div",{className:"columns-1 md:columns-2 gap-2 space-y-2",children:t.slice(2).map((i,r)=>Et.jsx("div",{className:"relative overflow-hidden block break-inside-avoid p-[5px] rounded-md",children:Et.jsx("img",{src:i,alt:`${s.title} - Image ${r+3}`,className:"w-full h-auto object-cover rounded-md"})},r+2))})]}):Et.jsx("div",{className:"columns-1 md:columns-2 gap-2 space-y-2",children:t.map((i,r)=>Et.jsx("div",{className:"relative overflow-hidden block break-inside-avoid p-[5px] rounded-md",children:Et.jsx("img",{src:i,alt:`${s.title} - Image ${r+1}`,className:"w-full h-auto object-cover rounded-md"})},r))}),LR=({project:s})=>Et.jsxs("div",{className:"space-y-8",children:[s.videoUrl&&Et.jsx("div",{className:"relative w-full h-0 pb-[56.25%] bg-gray-900 rounded-md overflow-hidden",children:Et.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:s.videoUrl,title:`${s.title} Video`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),s.additionalVideos&&s.additionalVideos.length>0&&Et.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.additionalVideos.map((t,i)=>Et.jsx("div",{className:"bg-gray-900 rounded-md overflow-hidden",children:Et.jsx("video",{className:"w-full h-auto",src:t,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:"Your browser does not support the video tag."})},i))})]}),NR=()=>{const s=ut.useMemo(()=>Et.jsx("div",{className:"columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4",children:Gh.map(t=>Et.jsx(CR,{project:t},t.id))}),[]);return Et.jsxs("div",{className:"min-h-screen bg-black text-white p-4 font-mono",children:[Et.jsx(wR,{socialLinks:hM}),Et.jsx("div",{className:"max-w-7xl mx-auto",children:s}),Et.jsx(DR,{projects:Gh}),Et.jsx("div",{className:"w-full flex justify-center mt-12 mb-2",children:Et.jsx("span",{className:"text-xs text-white font-mono text-center",children:ku.copyright})})]})},OR=({projectId:s})=>{const t=ut.useMemo(()=>Gh.find(r=>r.id===parseInt(s)),[s]);if(ut.useEffect(()=>{window.scrollTo(0,0);const r=setTimeout(()=>{window.scrollTo(0,0)},100);return()=>clearTimeout(r)},[s]),!t)return Et.jsx("div",{className:"min-h-screen bg-black text-white flex items-center justify-center font-mono",children:Et.jsxs("div",{className:"text-center",children:[Et.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"Project Not Found"}),Et.jsx(Fo,{to:"/",className:"text-blue-400 hover:underline",children:"Back to Home"})]})});const i=t.projectImages;return Et.jsxs("div",{className:"min-h-screen bg-black text-white p-0 font-mono",children:[Et.jsxs("div",{className:"w-full bg-black relative",children:[Et.jsx("img",{src:t.bannerImage||t.image,alt:t.title,className:"w-full h-64 md:h-96 object-cover object-center"}),Et.jsx("div",{className:"absolute top-0 left-0 m-4 z-10",children:Et.jsx(Rv,{text:ku.logoText,className:"w-[220px] h-[60px]",onClick:()=>window.location.href="/"})})]}),Et.jsx("div",{className:"max-w-5xl mx-auto px-4 mt-8",children:Et.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight",children:t.title})}),Et.jsxs("div",{className:"max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8",children:[Et.jsxs("div",{children:[Et.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Description"}),Et.jsx("p",{className:"text-base text-gray-200 mb-4",children:t.description})]}),Et.jsxs("div",{children:[Et.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Tools & Processes"}),Et.jsx("ul",{className:"mb-2",children:(t.tools||AR).map((r,l)=>Et.jsx("li",{className:"text-base text-gray-200 list-disc ml-5",children:r},l))}),Et.jsx("ul",{children:(t.processes||RR).map((r,l)=>Et.jsx("li",{className:"text-base text-gray-400 list-disc ml-5",children:r},l))})]})]}),Et.jsx("div",{className:"max-w-5xl mx-auto px-4 mt-16",children:Et.jsx(LR,{project:t})}),t.standaloneImage&&Et.jsx("div",{className:"max-w-5xl mx-auto px-4 mt-16",children:Et.jsx("div",{className:"bg-gray-900 rounded-md overflow-hidden",children:Et.jsx("img",{src:t.standaloneImage,alt:`${t.title} Standalone`,className:"w-full h-auto"})})}),i&&i.length>0&&Et.jsx("div",{className:"max-w-5xl mx-auto px-4 mt-16",children:Et.jsx(UR,{project:t,projectImages:i})}),Et.jsx("div",{className:"max-w-5xl mx-auto px-4 mt-12 mb-8",children:Et.jsx(Fo,{to:"/",className:"text-blue-400 hover:underline mb-6 inline-block",children:"← Back to Projects"})})]})},PR=()=>{const{id:s}=_y();return Et.jsx(OR,{projectId:s||""})},IR=()=>Et.jsx(nM,{children:Et.jsxs(Ly,{children:[Et.jsx(Fh,{path:"/",element:Et.jsx(NR,{})}),Et.jsx(Fh,{path:"/project/:id",element:Et.jsx(PR,{})})]})});FS.createRoot(document.getElementById("root")).render(Et.jsx(ut.StrictMode,{children:Et.jsx(IR,{})}));
