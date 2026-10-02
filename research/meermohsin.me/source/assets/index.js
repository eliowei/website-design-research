(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function pr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function v_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},vd,dn,It,yi=1e8,wt=1/yi,qh=Math.PI*2,kv=qh/4,Bv=0,x_=Math.sqrt,zv=Math.cos,Hv=Math.sin,un=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},wr=function(e){return typeof e=="number"},xd=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},Gn=function(e){return e!==!1},yd=function(){return typeof window<"u"},Bl=function(e){return Gt(e)||un(e)},y_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,jh=/(?:-?\.?\d|\.)+/gi,S_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,T_=/[+-]=-?[.\d]+/,E_=/[^,'"\[\]\s]+/gi,Gv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Hi,Yh,Sd,ui={},jc={},M_,w_=function(e){return(jc=ja(e,ui))&&jn},Td=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},hl=function(e,t){return!t&&console.warn(e)},A_=function(e,t){return e&&(ui[e]=t)&&jc&&(jc[e]=t)||ui},fl=function(){return 0},Vv={suppressEvents:!0,isStart:!0,kill:!1},Cc={suppressEvents:!0,kill:!1},Wv={suppressEvents:!0},Ed={},Jr=[],Kh={},R_,ni={},Fu={},Pp=30,Pc=[],Md="",wd=function(e){var t=e[0],n,i;if(Qi(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Pc.length;i--&&!Pc[i].targetTest(t););n=Pc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Z_(e[i],n)))||e.splice(i,1);return e},Is=function(e){return e._gsap||wd(Si(e))[0]._gsap},C_=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():xd(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},La=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Xv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yc=function(){var e=Jr.length,t=Jr.slice(0),n,i;for(Kh={},Jr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ad=function(e){return!!(e._initted||e._startAt||e.add)},P_=function(e,t,n,i){Jr.length&&!dn&&Yc(),e.render(t,n,!!(dn&&t<0&&Ad(e))),Jr.length&&!dn&&Yc()},D_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(E_).length<2?t:un(e)?e.trim():e},L_=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ja=function(e,t){for(var n in t)e[n]=t[n];return e},Dp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Kc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Xo=function(e){var t=e.parent||Ot,n=e.keyframes?qv(Tn(e.keyframes)):hi;if(Gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},jv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},I_=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},vu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},rs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Yv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$h=function(e,t,n,i){return e._startAt&&(dn?e._startAt.revert(Cc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Kv=function r(e){return!e||e._ts&&r(e.parent)},Lp=function(e){return e._repeat?Ya(e._tTime,e=e.duration()+e._rDelay)*e:0},Ya=function(e,t){var n=Math.floor(e=$t(e/t));return e&&n===e?n-1:n},$c=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xu=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},yu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xu(e),n._dirty||Us(n,e)),e},U_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=$c(e.rawTime(),t),(!t._dur||Dl(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Xi=function(e,t,n,i){return t.parent&&rs(t),t._start=$t((wr(n)?n:n||e!==Ot?_i(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),I_(e,t,"_first","_last",e._sort?"_start":0),Jh(t)||(e._recent=t),i||U_(e,t),e._ts<0&&yu(e,e._tTime),e},F_=function(e,t){return(ui.ScrollTrigger||Td("scrollTrigger",t))&&ui.ScrollTrigger.create(t,e)},N_=function(e,t,n,i,s){if(Cd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&R_!==ri.frame)return Jr.push(e),e._lazy=[s,i],1},$v=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Jh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Jv=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&$v(e)&&!(!e._initted&&Jh(e))||(e._ts<0||e._dp._ts<0)&&!Jh(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Dl(0,e._tDur,t),u=Ya(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ya(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||dn||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&N_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&$h(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&rs(e,1),!n&&!dn&&(oi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ka=function(e,t,n,i){var s=e._repeat,a=$t(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:$t(a*(s+1)+e._rDelay*s):a,o>0&&!i&&yu(e,e._tTime=e._tDur*o),e.parent&&xu(e),n||Us(e.parent,e),e},Ip=function(e){return e instanceof Un?Us(e):Ka(e,e._dur)},Qv={_start:0,endTime:fl,totalDuration:fl},_i=function r(e,t,n){var i=e.labels,s=e._recent||Qv,a=e.duration()>=yi?s.endTime(!1):e._dur,o,l,c;return un(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},qo=function(e,t,n){var i=wr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Gn(l.vars.inherit)&&l.parent;a.immediateRender=Gn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},ls=function(e,t){return e||e===0?t(e):t},Dl=function(e,t,n){return n<e?e:n>t?t:n},xn=function(e,t){return!un(e)||!(t=Gv.exec(e))?"":t[1]},ex=function(e,t,n){return ls(n,function(i){return Dl(e,t,i)})},Zh=[].slice,O_=function(e,t){return e&&Qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==Hi},tx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return un(i)&&!t||O_(i,1)?(s=n).push.apply(s,Si(i)):n.push(i)})||n},Si=function(e,t,n){return It&&!t&&It.selector?It.selector(e):un(e)&&!n&&(Yh||!$a())?Zh.call((t||Sd).querySelectorAll(e),0):Tn(e)?tx(e,n):O_(e)?Zh.call(e,0):e?[e]:[]},Qh=function(e){return e=Si(e)[0]||hl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?hl("Invalid scope")||Sd.createElement("div"):e)}},k_=function(e){return e.sort(function(){return .5-Math.random()})},B_=function(e){if(Gt(e))return e;var t=Qi(e)?e:{each:e},n=Fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return un(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,x,v,b,S,M,w,P,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,yi])[1],!T){for(w=-yi;w<(w=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],p=l?Math.min(T,_)*u-.5:i%T,x=T===yi?0:l?_*h/T-.5:i/T|0,w=0,P=yi,M=0;M<_;M++)v=M%T-p,b=x-(M/T|0),m[M]=S=c?Math.abs(c==="y"?b:v):x_(v*v+b*b),S>w&&(w=S),S<P&&(P=S);i==="random"&&k_(m),m.max=w-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=xn(t.amount||t.each)||0,n=n&&_<0?K_(n):n}return _=(m[f]-m.min)/m.max||0,$t(m.b+(n?n(_):_)*m.v)+m.u}},ef=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wr(n)?0:xn(n))}},z_=function(e,t){var n=Tn(e),i,s;return!n&&Qi(e)&&(i=n=e.radius||yi,e.values?(e=Si(e.values),(s=!wr(e[0]))&&(i*=i)):e=ef(e.increment)),ls(t,n?Gt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=yi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||wr(a)?u:u+xn(a)}:ef(e))},H_=function(e,t,n,i){return ls(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},nx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},ix=function(e,t){return function(n){return e(parseFloat(n))+(t||xn(n))}},rx=function(e,t,n){return V_(e,t,0,1,n)},G_=function(e,t,n){return ls(n,function(i){return e[~~t(i)]})},sx=function r(e,t,n){var i=t-e;return Tn(e)?G_(e,r(0,e.length),t):ls(n,function(s){return(i+(s-e)%i)%i+e})},ax=function r(e,t,n){var i=t-e,s=i*2;return Tn(e)?G_(e,r(0,e.length-1),t):ls(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},dl=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?E_:jh),n+=e.substr(t,i-t)+H_(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},V_=function(e,t,n,i,s){var a=t-e,o=i-n;return ls(s,function(l){return n+((l-e)/a*o||0)})},ox=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=un(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ja(Tn(e)?[]:{},e));if(!u){for(l in t)Rd.call(o,e,l,"get",t[l]);s=function(g){return Ld(g,o)||(a?e.p:e)}}}return ls(n,s)},Up=function(e,t,n){var i=e.labels,s=yi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},oi=function(e,t,n){var i=e.vars,s=i[t],a=It,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Jr.length&&Yc(),o&&(It=o),u=l?s.apply(c,l):s.call(c),It=a,u},Uo=function(e){return rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dn),e.progress()<1&&oi(e,"onInterrupt"),e},Aa,W_=[],X_=function(e){if(e)if(e=!e.name&&e.default||e,yd()||e.headless){var t=e.name,n=Gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:fl,render:Ld,add:Rd,kill:Tx,modifier:Sx,rawVars:0},a={targetTest:0,get:0,getSetter:Dd,aliases:{},register:0};if($a(),e!==i){if(ni[t])return;hi(i,hi(Kc(e,s),a)),ja(i.prototype,ja(s,Kc(e,a))),ni[i.prop=t]=i,e.targetTest&&(Pc.push(i),Ed[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}A_(t,i),e.register&&e.register(jn,i,Wn)}else W_.push(e)},Mt=255,Fo={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Nu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},q_=function(e,t,n){var i=e?wr(e)?[e>>16,e>>8&Mt,e&Mt]:0:Fo.black,s,a,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fo[e])i=Fo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(jh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Nu(l+1/3,s,a),i[1]=Nu(l,s,a),i[2]=Nu(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(S_),n&&i.length<4&&(i[3]=1),i}else i=e.match(jh)||Fo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Mt,a=i[1]/Mt,o=i[2]/Mt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},j_=function(e){var t=[],n=[],i=-1;return e.split(Zr).forEach(function(s){var a=s.match(wa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Fp=function(e,t,n){var i="",s=(e+i).match(Zr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=q_(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=j_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Zr,"1").split(wa),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Zr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Zr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),lx=/hsl[a]?\(/,Y_=function(e){var t=e.join(" "),n;if(Zr.lastIndex=0,Zr.test(t))return n=lx.test(t),e[1]=Fp(e[1],n),e[0]=Fp(e[0],n,j_(e[1])),!0},pl,ri=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,x=m===!0,v,b,S,M;if((p>e||p<0)&&(n+=p-t),i+=p,S=i-n,v=S-a,(v>0||x)&&(M=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,a+=v+(v>=s?4:s-v),b=1),x||(l=c(_)),b)for(d=0;d<o.length;d++)o[d](S,f,M,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){M_&&(!Yh&&yd()&&(Hi=Yh=window,Sd=Hi.document||{},ui.gsap=jn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(jn.version),w_(jc||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),W_.forEach(X_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},pl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),pl=0,c=fl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,x){var v=p?function(b,S,M,w){m(b,S,M,w),h.remove(v)}:m;return h.remove(m),o[x?"unshift":"push"](v),$a(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),$a=function(){return!pl&&ri.wake()},pt={},cx=/^[\d.\-M][\d.\-,\s]/,ux=/["']/g,hx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(ux,"").trim():+c,i=l.substr(o+1).trim();return t},fx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dx=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hx(t[1])]:fx(e).split(",").map(D_)):pt._CE&&cx.test(e)?pt._CE("",e):n},K_=function(e){return function(t){return 1-e(1-t)}},$_=function r(e,t){for(var n=e._first,i;n;)n instanceof Un?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Fs=function(e,t){return e&&(Gt(e)?e:pt[e]||dx(e))||t},Qs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Vn(e,function(o){pt[o]=ui[o]=s,pt[a=o.toLowerCase()]=n;for(var l in s)pt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[o+"."+l]=s[l]}),s},J_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ou=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/qh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hv((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:J_(o);return s=qh/s,l.config=function(c,u){return r(e,c,u)},l},ku=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:J_(n);return i.config=function(s){return r(e,s)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Qs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;Qs("Elastic",Ou("in"),Ou("out"),Ou());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Qs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Qs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Qs("Circ",function(r){return-(x_(1-r*r)-1)});Qs("Sine",function(r){return r===1?1:-zv(r*kv)+1});Qs("Back",ku("in"),ku("out"),ku());pt.SteppedEase=pt.steps=ui.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((i*Dl(0,a,o)|0)+s)*n}}};qa.ease=pt["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Md+=r+","+r+"Params,"});var Z_=function(e,t){this.id=Bv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:C_,this.set=t?t.getSetter:Dd},ml=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ka(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),pl||ri.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ka(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($a(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yu(this,n),!s._dp||s.parent||U_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),P_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ya(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?$c(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(Dl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),xu(this),Yv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($a(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$c(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Wv);var i=dn;return dn=n,Ad(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ip(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ip(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(_i(this,n),Gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gn(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Gt(n)?n:L_,o=function(){var c=i.then;i.then=null,Gt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Uo(this)},r})();hi(ml.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Un=(function(r){v_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gn(n.sortChildren),Ot&&Xi(n.parent||Ot,pr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&F_(pr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return qo(0,arguments,this),this},t.from=function(i,s,a){return qo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return qo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Xo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,_i(this,a),1),this},t.call=function(i,s,a){return Xi(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,_i(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Xo(a).immediateRender=Gn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Xo(o).immediateRender=Gn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:$t(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,x,v,b,S,M,w;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,b=this._start,v=this._ts,p=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=$t(u%m),u===l?(_=this._repeat,f=c):(S=$t(u/m),_=~~S,_&&_===S&&(f=c,_--),f>c&&(f=c)),S=Ya(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),M&&_&1&&(f=c-f,w=1),_!==S&&!this._lock){var P=M&&S&1,T=P===(M&&_&1);if(_<S&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(w?0:$t(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;$_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Zv(this,$t(o),$t(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&!S&&(oi(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-wt);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,a||dn&&Ad(d)),f!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=y?-wt:wt);break}}d=g}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-wt)._zTime=f>=o?1:-1,this._ts))return this._start=b,xu(this),this.render(i,s,a);this._onUpdate&&!s&&oi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rs(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(oi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(wr(s)||(s=_i(this,s,i)),!(i instanceof ml)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(un(i))return this.addLabel(i,s);if(Gt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Xi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-yi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return un(i)?this.removeLabel(i):Gt(i)?this.killTweensOf(i):(i.parent===this&&vu(this,i),i===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(ri.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=_i(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||fl,a);return o.data="isPause",this._hasPause=1,Xi(this,o,_i(this,i))},t.removePause=function(i){var s=this._first;for(i=_i(this,i);s;)s._start===i&&s.data==="isPause"&&rs(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Vr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Si(i),l=this._first,c=wr(s),u;l;)l instanceof Kt?Xv(l._targets,o)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=_i(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Kt.to(a,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ka(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,hi({startAt:{time:_i(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Up(this,_i(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Up(this,_i(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Us(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=yi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ka(a,a===Ot&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ot._ts&&(P_(Ot,$c(i,Ot)),R_=ri.frame),ri.frame>=Pp){Pp+=li.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&li.autoSleep&&ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ri.sleep()}}},e})(ml);hi(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var px=function(e,t,n,i,s,a,o){var l=new Wn(this._pt,e,t,0,1,r0,null,s),c=0,u=0,h,f,d,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=dl(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),f=n.match(Uu)||[];h=Uu.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?La(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Uu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(T_.test(i)||p)&&(l.e=0),this._pt=l,l},Rd=function(e,t,n,i,s,a,o,l,c,u){Gt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Gt(h)?c?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Gt(h)?c?vx:n0:Pd,g;if(un(i)&&(~i.indexOf("random(")&&(i=dl(i)),i.charAt(1)==="="&&(g=La(f,i)+(xn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||tf)return!isNaN(f*i)&&i!==""?(g=new Wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?yx:i0,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Td(t,i),px.call(this,e,t,f,i,d,l||li.stringFilter,c))},mx=function(e,t,n,i,s){if(Gt(e)&&(e=jo(e,s,t,n,i)),!Qi(e)||e.style&&e.nodeType||Tn(e)||y_(e))return un(e)?jo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=jo(e[o],s,t,n,i);return a},Q_=function(e,t,n,i,s,a){var o,l,c,u;if(ni[e]&&(o=new ni[e]).init(s,o.rawVars?t[e]:mx(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Wn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Aa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Vr,tf,Cd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!vd,b=e.timeline,S,M,w,P,T,y,L,N,G,W,O,K,te;if(b&&(!f||!s)&&(s="none"),e._ease=Fs(s,qa.ease),e._yEase=h?K_(Fs(h===!0?s:h,qa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(N=m[0]?Is(m[0]).harness:0,K=N&&i[N.prop],S=Kc(i,Ed),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Cc:Vv),_._lazy=0),a){if(rs(e._startAt=Kt.set(m,hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Gn(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn||!o&&!d)&&e._startAt.revert(Cc),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),w=hi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Gn(l),immediateRender:o,stagger:0,parent:p},S),K&&(w[N.prop]=K),rs(e._startAt=Kt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn?e._startAt.revert(Cc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Gn(l)||l&&!g,M=0;M<m.length;M++){if(T=m[M],L=T._gsap||wd(m)[M]._gsap,e._ptLookup[M]=W={},Kh[L.id]&&Jr.length&&Yc(),O=x===m?M:x.indexOf(T),N&&(G=new N).init(T,K||S,e,O,x)!==!1&&(e._pt=P=new Wn(e._pt,T,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(j){W[j]=P}),G.priority&&(y=1)),!N||K)for(w in S)ni[w]&&(G=Q_(w,S,e,O,T,x))?G.priority&&(y=1):W[w]=P=Rd.call(e,T,w,"get",S[w],O,x,0,i.stringFilter);e._op&&e._op[M]&&e.kill(T,e._op[M]),v&&e._pt&&(Vr=e,Ot.killTweensOf(T,W,e.globalTime(t)),te=!e.parent,Vr=0),e._pt&&l&&(Kh[L.id]=1)}y&&s0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!te,f&&t<=0&&b.render(yi,!0,!0)},gx=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return tf=1,e.vars[t]="+=0",Cd(e,o),tf=0,l?hl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=qt(n)+xn(h.e)),h.b&&(h.b=u.s+xn(h.b))},_x=function(e,t){var n=e[0]?Is(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ja({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},bx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},jo=function(e,t,n,i,s){return Gt(e)?e.call(t,n,i,s):un(e)&&~e.indexOf("random(")?dl(e):e},e0=Md+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",t0={};Vn(e0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return t0[r]=1});var Kt=(function(r){v_(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Xo(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Ot,v=(Tn(n)||y_(n)?wr(n[0]):"length"in i)?[n]:Si(n),b,S,M,w,P,T,y,L;if(o._targets=v.length?wd(v):hl("GSAP target "+n+" not found. https://gsap.com",!li.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Bl(c)||Bl(u)){if(i=o.vars,b=o.timeline=new Un({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),b.kill(),b.parent=b._dp=pr(o),b._start=0,f||Bl(c)||Bl(u)){if(w=v.length,y=f&&B_(f),Qi(f))for(P in f)~e0.indexOf(P)&&(L||(L={}),L[P]=f[P]);for(S=0;S<w;S++)M=Kc(i,t0),M.stagger=0,p&&(M.yoyoEase=p),L&&ja(M,L),T=v[S],M.duration=+jo(c,pr(o),S,T,v),M.delay=(+jo(u,pr(o),S,T,v)||0)-o._delay,!f&&w===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),b.to(T,M,y?y(S,T,v):0),b._ease=pt.none;b.duration()?c=u=0:o.timeline=0}else if(g){Xo(hi(b.vars.defaults,{ease:"none"})),b._ease=Fs(g.ease||i.ease||"none");var N=0,G,W,O;if(Tn(g))g.forEach(function(K){return b.to(v,K,">")}),b.duration();else{M={};for(P in g)P==="ease"||P==="easeEach"||bx(P,g[P],M,g.easeEach);for(P in M)for(G=M[P].sort(function(K,te){return K.t-te.t}),N=0,S=0;S<G.length;S++)W=G[S],O={ease:W.e,duration:(W.t-(S?G[S-1].t:0))/100*c},O[P]=W.v,b.to(v,O,N),N+=O.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return d===!0&&!vd&&(Vr=pr(o),Ot.killTweensOf(v),Vr=0),Xi(x,pr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===$t(x._time)&&Gn(h)&&Kv(pr(o))&&x.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),m&&F_(pr(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-wt&&!u?l:i<wt?0:i,f,d,g,_,m,p,x,v,b;if(!c)Jv(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=$t(h%_),h===l?(g=this._repeat,f=c):(m=$t(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(b=this._yEase,f=c-f),m=Ya(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(v&&this._yEase&&$_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render($t(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(N_(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(b||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!o&&h&&!s&&!m&&(oi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$h(this,i,s,a),oi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&oi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&$h(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rs(this,1),!s&&!(u&&!o)&&(h||o||p)&&(oi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){pl||ri.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cd(this,c),u=this._ease(c/this._dur),gx(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(yu(this,0),this.parent||I_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Vr&&Vr.vars.overwrite!==!0)._first||Uo(this),this.parent&&a!==this.timeline.totalDuration()&&Ka(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Si(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&jv(o,l))return s==="all"&&(this._pt=0),Uo(this);for(h=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},Vn(s,function(x){return _[x]=1}),s=_),s=_x(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&vu(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Uo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return qo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return qo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ot.killTweensOf(i,s,a)},e})(ml);hi(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Un,t=Zh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Pd=function(e,t,n){return e[t]=n},n0=function(e,t,n){return e[t](n)},vx=function(e,t,n,i){return e[t](i.fp,n)},xx=function(e,t,n){return e.setAttribute(t,n)},Dd=function(e,t){return Gt(e[t])?n0:xd(e[t])&&e.setAttribute?xx:Pd},i0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},r0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ld=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Sx=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Tx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ex=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},s0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Wn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||i0,this.d=l||this,this.set=c||Pd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ex,this.m=n,this.mt=s,this.tween=i},r})();Vn(Md+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ed[r]=1});ui.TweenMax=ui.TweenLite=Kt;ui.TimelineLite=ui.TimelineMax=Un;Ot=new Un({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=Y_;var Ns=[],Dc={},Mx=[],Np=0,wx=0,Bu=function(e){return(Dc[e]||Mx).map(function(t){return t()})},nf=function(){var e=Date.now(),t=[];e-Np>2&&(Bu("matchMediaInit"),Ns.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Hi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Bu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Np=e,Bu("matchMedia"))},a0=(function(){function r(t,n){this.selector=n&&Qh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=wx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Gt(n)&&(s=i,i=n,n=Gt);var a=this,o=function(){var c=It,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Qh(s)),It=a,h=i.apply(a,arguments),Gt(h)&&a._r.push(h),It=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Gt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ns.length;a--;)Ns[a].id===this.id&&Ns.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Ax=(function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Qi(n)||(n={matches:n});var a=new a0(0,s||this.scope),o=a.conditions={},l,c,u;It&&!a.selector&&(a.selector=It.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Hi.matchMedia(n[c]),l&&(Ns.indexOf(a)<0&&Ns.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(nf):l.addEventListener("change",nf)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Jc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return X_(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=Si(e)[0]);var s=Is(e||{}).get,a=n?L_:D_;return n==="native"&&(n=""),e&&(t?a((ni[t]&&ni[t].get||s)(e,t,n,i)):function(o,l,c){return a((ni[o]&&ni[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(u){return jn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=ni[t],o=Is(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Aa._pt=0,h.init(e,n?u+n:u,Aa,0,[e]),h.render(1,h),Aa._pt&&Ld(1,Aa)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=jn.to(e,hi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fs(e.ease,qa.ease)),Dp(qa,e||{})},config:function(e){return Dp(li,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ni[o]&&!ui[o]&&hl(t+" effect requires "+o+" plugin.")}),Fu[t]=function(o,l,c){return n(Si(o),hi(l||{},s),c)},a&&(Un.prototype[t]=function(o,l,c){return this.add(Fu[t](o,Qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=Fs(t)},parseEase:function(e,t){return arguments.length?Fs(e,t):pt},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=Gn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Xi(n,i,i._start-i._delay),i=s;return Xi(Ot,n,0),n},context:function(e,t){return e?new a0(e,t):It},matchMedia:function(e){return new Ax(e)},matchMediaRefresh:function(){return Ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||nf()},addEventListener:function(e,t){var n=Dc[e]||(Dc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Dc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:sx,wrapYoyo:ax,distribute:B_,random:H_,snap:z_,normalize:rx,getUnit:xn,clamp:ex,splitColor:q_,toArray:Si,selector:Qh,mapRange:V_,pipe:nx,unitize:ix,interpolate:ox,shuffle:k_},install:w_,effects:Fu,ticker:ri,updateRoot:Un.updateRoot,plugins:ni,globalTimeline:Ot,core:{PropTween:Wn,globals:A_,Tween:Kt,Timeline:Un,Animation:ml,getCache:Is,_removeLinkedListItem:vu,reverting:function(){return dn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return vd=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Jc[r]=Kt[r]});ri.add(Un.updateRoot);Aa=Jc.to({},{duration:0});var Rx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Cx=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Rx(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},zu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},Vn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Cx(o,s)}}}},jn=Jc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zu("roundProps",ef),zu("modifiers"),zu("snap",z_))||Jc;Kt.version=Un.version=jn.version="3.13.0";M_=1;yd()&&$a();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Op,Wr,Ia,Id,Rs,kp,Ud,Px=function(){return typeof window<"u"},Ar={},ys=180/Math.PI,Ua=Math.PI/180,ia=Math.atan2,Bp=1e8,Fd=/([A-Z])/g,Dx=/(left|right|width|margin|padding|x)/i,Lx=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ix=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ux=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},o0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},l0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Nx=function(e,t,n){return e.style[t]=n},Ox=function(e,t,n){return e.style.setProperty(t,n)},kx=function(e,t,n){return e._gsap[t]=n},Bx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zx=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Hx=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},kt="transform",Xn=kt+"Origin",Gx=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=mr(i,o)}):this.tfm[e]=a.x?a[e]:mr(i,e),e===Xn&&(this.tfm.zOrigin=a.zOrigin);else return qi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},c0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Vx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Fd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ud(),(!s||!s.isStart)&&!n[kt]&&(c0(n),i.zOrigin&&n[Xn]&&(n[Xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},u0=function(e,t){var n={target:e,props:[],revert:Vx,save:Gx};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},h0,sf=function(e,t){var n=Wr.createElementNS?Wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wr.createElement(e);return n&&n.style?n:Wr.createElement(e)},Ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Fd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ja(t)||t,1)||""},zp="O,Moz,ms,Ms,Webkit".split(","),Ja=function(e,t,n){var i=t||Rs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zp[a]+e in s););return a<0?null:(a===3?"ms":a>=0?zp[a]:"")+e},af=function(){Px()&&window.document&&(Op=window,Wr=Op.document,Ia=Wr.documentElement,Rs=sf("div")||{style:{}},sf("div"),kt=Ja(kt),Xn=kt+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",h0=!!Ja("perspective"),Ud=jn.core.reverting,Id=1)},Hp=function(e){var t=e.ownerSVGElement,n=sf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ia.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ia.removeChild(n),s},Gp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},f0=function(e){var t,n;try{t=e.getBBox()}catch{t=Hp(e),n=1}return t&&(t.width||t.height)||n||(t=Hp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Gp(e,["x","cx","x1"])||0,y:+Gp(e,["y","cy","y1"])||0,width:0,height:0}:t},d0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&f0(e))},Gs=function(e,t){if(t){var n=e.style,i;t in Ar&&t!==Xn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Fd,"-$1").toLowerCase())):n.removeAttribute(t)}},Xr=function(e,t,n,i,s,a){var o=new Wn(e._pt,t,n,0,1,a?l0:o0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Vp={deg:1,rad:1,turn:1},Wx={grid:1,flex:1},ss=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Rs.style,l=Dx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||Vp[i]||Vp[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&d0(e),(d||a==="%")&&(Ar[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],qt(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Wr||!_.appendChild)&&(_=Wr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===ri.time&&!m.uncache)return qt(s/m.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,g=e[u],x?e.style[t]=x:Gs(e,t)}else(d||a==="%")&&!Wx[Ti(_,"display")]&&(o.position=Ti(e,"position")),_===e&&(o.position="static"),_.appendChild(Rs),g=Rs[u],_.removeChild(Rs),o.position="absolute";return l&&d&&(m=Is(_),m.time=ri.time,m.width=_[u]),qt(f?g*s/h:g&&s?h/g*s:0)},mr=function(e,t,n,i){var s;return Id||af(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ar[t]&&t!=="transform"?(s=_l(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Qc(Ti(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zc[t]&&Zc[t](e,t,n)||Ti(e,t)||C_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ss(e,t,s,n)+n:s},Xx=function(e,t,n,i){if(!n||n==="none"){var s=Ja(t,e,1),a=s&&Ti(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ti(e,"borderTopColor"))}var o=new Wn(this._pt,e.style,t,0,1,r0),l=0,c=0,u,h,f,d,g,_,m,p,x,v,b,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ti(e,t)||i,_?e.style[t]=_:Gs(e,t)),u=[n,i],Y_(u),n=u[0],i=u[1],f=n.match(wa)||[],S=i.match(wa)||[],S.length){for(;h=wa.exec(i);)m=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),m.charAt(1)==="="&&(m=La(d,m)+b),p=parseFloat(m),v=m.substr((p+"").length),l=wa.lastIndex-v.length,v||(v=v||li.units[t]||b,l===i.length&&(i+=v,o.e+=v)),b!==v&&(d=ss(e,t,_,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?l0:o0;return T_.test(i)&&(o.e=0),this._pt=o,o},Wp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wp[n]||n,t[1]=Wp[i]||i,t.join(" ")},jx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ar[o]&&(l=1,o=o==="transformOrigin"?Xn:kt),Gs(n,o);l&&(Gs(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",_l(n,1),a.uncache=1,c0(i)))}},Zc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Wn(e._pt,t,n,0,0,jx);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},gl=[1,0,0,1,0,0],p0={},m0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xp=function(e){var t=Ti(e,kt);return m0(t)?gl:t.substr(7).match(S_).map(qt)},Nd=function(e,t){var n=e._gsap||Is(e),i=e.style,s=Xp(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?gl:s):(s===gl&&!e.offsetParent&&e!==Ia&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ia.appendChild(e)),s=Xp(e),l?i.display=l:Gs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ia.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},of=function(e,t,n,i,s,a){var o=e._gsap,l=s||Nd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=t.split(" "),b=parseFloat(v[0])||0,S=parseFloat(v[1])||0,M,w,P,T;n?l!==gl&&(w=d*m-g*_)&&(P=b*(m/w)+S*(-_/w)+(_*x-m*p)/w,T=b*(-g/w)+S*(d/w)-(d*x-g*p)/w,b=P,S=T):(M=f0(e),b=M.x+(~v[0].indexOf("%")?b/100*M.width:b),S=M.y+(~(v[1]||v[0]).indexOf("%")?S/100*M.height:S)),i||i!==!1&&o.smooth?(p=b-c,x=S-u,o.xOffset=h+(p*d+x*_)-p,o.yOffset=f+(p*g+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Xn]="0px 0px",a&&(Xr(a,o,"xOrigin",c,b),Xr(a,o,"yOrigin",u,S),Xr(a,o,"xOffset",h,o.xOffset),Xr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+S)},_l=function(e,t){var n=e._gsap||new Z_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ti(e,Xn)||"0",u,h,f,d,g,_,m,p,x,v,b,S,M,w,P,T,y,L,N,G,W,O,K,te,j,ae,I,le,xe,Je,ke,Se;return u=h=f=_=m=p=x=v=b=0,d=g=1,n.svg=!!(e.getCTM&&d0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),w=Nd(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",te=""):te=!t&&e.getAttribute("data-svg-origin"),of(e,te||c,!!te||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,M=n.yOrigin||0,w!==gl&&(L=w[0],N=w[1],G=w[2],W=w[3],u=O=w[4],h=K=w[5],w.length===6?(d=Math.sqrt(L*L+N*N),g=Math.sqrt(W*W+G*G),_=L||N?ia(N,L)*ys:0,x=G||W?ia(G,W)*ys+_:0,x&&(g*=Math.abs(Math.cos(x*Ua))),n.svg&&(u-=S-(S*L+M*G),h-=M-(S*N+M*W))):(Se=w[6],Je=w[7],I=w[8],le=w[9],xe=w[10],ke=w[11],u=w[12],h=w[13],f=w[14],P=ia(Se,xe),m=P*ys,P&&(T=Math.cos(-P),y=Math.sin(-P),te=O*T+I*y,j=K*T+le*y,ae=Se*T+xe*y,I=O*-y+I*T,le=K*-y+le*T,xe=Se*-y+xe*T,ke=Je*-y+ke*T,O=te,K=j,Se=ae),P=ia(-G,xe),p=P*ys,P&&(T=Math.cos(-P),y=Math.sin(-P),te=L*T-I*y,j=N*T-le*y,ae=G*T-xe*y,ke=W*y+ke*T,L=te,N=j,G=ae),P=ia(N,L),_=P*ys,P&&(T=Math.cos(P),y=Math.sin(P),te=L*T+N*y,j=O*T+K*y,N=N*T-L*y,K=K*T-O*y,L=te,O=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=qt(Math.sqrt(L*L+N*N+G*G)),g=qt(Math.sqrt(K*K+Se*Se)),P=ia(O,K),x=Math.abs(P)>2e-4?P*ys:0,b=ke?1/(ke<0?-ke:ke):0),n.svg&&(te=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!m0(Ti(e,kt)),te&&e.setAttribute("transform",te))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=qt(d),n.scaleY=qt(g),n.rotation=qt(_)+o,n.rotationX=qt(m)+o,n.rotationY=qt(p)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xn]=Qc(c)),n.xOffset=n.yOffset=0,n.force3D=li.force3D,n.renderTransform=n.svg?Kx:h0?g0:Yx,n.uncache=0,n},Qc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hu=function(e,t,n){var i=xn(t);return qt(parseFloat(t)+parseFloat(ss(e,"x",n+"px",i)))+i},Yx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,g0(e,t)},hs="0deg",xo="0px",fs=") ",g0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,b="",S=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==hs||u!==hs)){var M=parseFloat(u)*Ua,w=Math.sin(M),P=Math.cos(M),T;M=parseFloat(h)*Ua,T=Math.cos(M),a=Hu(x,a,w*T*-v),o=Hu(x,o,-Math.sin(M)*-v),l=Hu(x,l,P*T*-v+v)}m!==xo&&(b+="perspective("+m+fs),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(S||a!==xo||o!==xo||l!==xo)&&(b+=l!==xo||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+fs),c!==hs&&(b+="rotate("+c+fs),u!==hs&&(b+="rotateY("+u+fs),h!==hs&&(b+="rotateX("+h+fs),(f!==hs||d!==hs)&&(b+="skew("+f+", "+d+fs),(g!==1||_!==1)&&(b+="scale("+g+", "+_+fs),x.style[kt]=b||"translate(0, 0)"},Kx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(a),b=parseFloat(o),S,M,w,P,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ua,c*=Ua,S=Math.cos(l)*h,M=Math.sin(l)*h,w=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Ua,T=Math.tan(c-u),T=Math.sqrt(1+T*T),w*=T,P*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),S*=T,M*=T)),S=qt(S),M=qt(M),w=qt(w),P=qt(P)):(S=h,P=f,M=w=0),(v&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(v=ss(d,"x",a,"px"),b=ss(d,"y",o,"px")),(g||_||m||p)&&(v=qt(v+g-(g*S+_*w)+m),b=qt(b+_-(g*M+_*P)+p)),(i||s)&&(T=d.getBBox(),v=qt(v+i/100*T.width),b=qt(b+s/100*T.height)),T="matrix("+S+","+M+","+w+","+P+","+v+","+b+")",d.setAttribute("transform",T),x&&(d.style[kt]=T)},$x=function(e,t,n,i,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ys:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Bp)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Bp)%a-~~(c/a)*a)),e._pt=f=new Wn(e._pt,t,n,i,c,Ix),f.e=u,f.u="deg",e._props.push(n),f},qp=function(e,t){for(var n in t)e[n]=t[n];return e},Jx=function(e,t,n){var i=qp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=_l(n,1),Gs(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=t,o=_l(n,1),a[kt]=c);for(l in Ar)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=xn(c),g=xn(u),h=d!==g?ss(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Wn(e._pt,o,l,h,f-h,rf),e._pt.u=g||0,e._props.push(l));qp(o,i)};Vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Zc[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return mr(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var _0={name:"css",register:af,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,x,v,b,S,M,w,P;Id||af(),this.styles=this.styles||u0(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ni[_]&&Q_(_,t,n,i,e,s)))){if(d=typeof u,g=Zc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=dl(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Zr.lastIndex=0,Zr.test(c)||(m=xn(c),p=xn(u)),p?m!==p&&(c=ss(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],un(c)&&~c.indexOf("random(")&&(c=dl(c)),xn(c+"")||c==="auto"||(c+=li.units[_]||xn(mr(e,_))||""),(c+"").charAt(1)==="="&&(c=mr(e,_))):c=mr(e,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in qi&&(_==="autoAlpha"&&(f===1&&mr(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),Xr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=qi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ar,v){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Ti(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),b||(S=e._gsap,S.renderTransform&&!t.parseTransform||_l(e,t.parseTransform),M=t.smoothOrigin!==!1&&S.smooth,b=this._pt=new Wn(this._pt,o,kt,0,1,S.renderTransform,S,0,-1),b.dep=1),_==="scale")this._pt=new Wn(this._pt,S,"scaleY",S.scaleY,(x?La(S.scaleY,x+h):h)-S.scaleY||0,rf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Xn,0,o[Xn]),u=qx(u),S.svg?of(e,u,0,M,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&Xr(this,S,"zOrigin",S.zOrigin,p),Xr(this,o,_,Qc(c),Qc(u)));continue}else if(_==="svgOrigin"){of(e,u,1,M,0,this);continue}else if(_ in p0){$x(this,S,_,f,x?La(f,x+u):u);continue}else if(_==="smoothOrigin"){Xr(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){Jx(this,u,e);continue}}else _ in o||(_=Ja(_)||_);if(v||(h||h===0)&&(f||f===0)&&!Lx.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=xn(u)||(_ in li.units?li.units[_]:m),m!==p&&(f=ss(e,_,c,p)),this._pt=new Wn(this._pt,v?S:o,_,f,(x?La(f,x+h):h)-f,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Fx:rf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ux);else if(_ in o)Xx.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Td(_,u);continue}v||(_ in o?P.push(_,0,o[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),a.push(_)}}w&&s0(this)},render:function(e,t){if(t.tween._time||!Ud())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ar&&t!==Xn&&(e._gsap.x||mr(e,"x"))?n&&kp===n?t==="scale"?Bx:kx:(kp=n||{})&&(t==="scale"?zx:Hx):e.style&&!xd(e.style[t])?Nx:~t.indexOf("-")?Ox:Dd(e,t)},core:{_removeProperty:Gs,_getMatrix:Nd}};jn.utils.checkPrefix=Ja;jn.core.getStyleSaver=u0;(function(r,e,t,n){var i=Vn(r+","+e+","+t,function(s){Ar[s]=1});Vn(e,function(s){li.units[s]="deg",p0[s]=1}),qi[i[13]]=r+","+e,Vn(n,function(s){var a=s.split(":");qi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){li.units[r]="px"});jn.registerPlugin(_0);var $=jn.registerPlugin(_0)||jn;$.core.Tween;function Zx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Qx(r,e,t){return e&&Zx(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn,Lc,si,qr,jr,Fa,b0,Ss,Yo,v0,_r,Di,x0,y0=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},S0=1,Ra=[],ot=[],Ji=[],Ko=Date.now,lf=function(e,t){return t},ey=function(){var e=Yo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Ji),ot=n,Ji=i,lf=function(a,o){return t[a](o)}},Qr=function(e,t){return~Ji.indexOf(e)&&Ji[Ji.indexOf(e)+1][t]},$o=function(e){return!!~v0.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},zl="scrollLeft",Hl="scrollTop",cf=function(){return _r&&_r.isPressed||ot.cache++},eu=function(e,t){var n=function i(s){if(s||s===0){S0&&(si.history.scrollRestoration="manual");var a=_r&&_r.isPressed;s=i.v=Math.round(s)||(_r&&_r.iOS?1:0),e(s),i.cacheID=ot.cache,a&&lf("ss",s)}else(t||ot.cache!==i.cacheID||lf("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:zl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:eu(function(r){return arguments.length?si.scrollTo(r,en.sc()):si.pageXOffset||qr[zl]||jr[zl]||Fa[zl]||0})},en={s:Hl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:eu(function(r){return arguments.length?si.scrollTo(Fn.sc(),r):si.pageYOffset||qr[Hl]||jr[Hl]||Fa[Hl]||0})},Hn=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ty=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},as=function(e,t){var n=t.s,i=t.sc;$o(e)&&(e=qr.scrollingElement||jr);var s=ot.indexOf(e),a=i===en.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+a]||Rn(e,"scroll",cf);var o=ot[s+a],l=o||(ot[s+a]=eu(Qr(e,n),!0)||($o(e)?i:eu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},uf=function(e,t,n){var i=e,s=e,a=Ko(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ko();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var _=o,m=s,p=Ko();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},yo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},jp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},T0=function(){Yo=hn.core.globals().ScrollTrigger,Yo&&Yo.core&&ey()},E0=function(e){return hn=e||y0(),!Lc&&hn&&typeof document<"u"&&document.body&&(si=window,qr=document,jr=qr.documentElement,Fa=qr.body,v0=[si,qr,jr,Fa],hn.utils.clamp,x0=hn.core.context||function(){},Ss="onpointerenter"in Fa?"pointer":"mouse",b0=Bt.isTouch=si.matchMedia&&si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=Bt.eventTypes=("ontouchstart"in jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return S0=0},500),T0(),Lc=1),Lc};Fn.op=en;ot.cache=0;var Bt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Lc||E0(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Yo||T0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,b=n.onRelease,S=n.onRight,M=n.onLeft,w=n.onUp,P=n.onDown,T=n.onChangeX,y=n.onChangeY,L=n.onChange,N=n.onToggleX,G=n.onToggleY,W=n.onHover,O=n.onHoverEnd,K=n.onMove,te=n.ignoreCheck,j=n.isNormalizer,ae=n.onGestureStart,I=n.onGestureEnd,le=n.onWheel,xe=n.onEnable,Je=n.onDisable,ke=n.onClick,Se=n.scrollSpeed,J=n.capture,ne=n.allowClicks,he=n.lockAxis,we=n.onLockAxis;this.target=o=Hn(o)||jr,this.vars=n,d&&(d=hn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Se=Se||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(si.getComputedStyle(Fa).lineHeight)||22);var be,Ue,lt,C,Fe,Oe,Ae,k=this,je=0,Ee=0,Ge=n.passive||!u&&n.passive!==!1,me=as(o,Fn),ft=as(o,en),D=me(),E=ft(),q=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Di[0]==="pointerdown",ie=$o(o),re=o.ownerDocument||qr,ee=[0,0,0],Me=[0,0,0],ce=0,Re=function(){return ce=Ko()},ve=function(De,Ze){return(k.event=De)&&d&&ty(De.target,d)||Ze&&q&&De.pointerType!=="touch"||te&&te(De,Ze)},ue=function(){k._vx.reset(),k._vy.reset(),Ue.pause(),h&&h(k)},ge=function(){var De=k.deltaX=jp(ee),Ze=k.deltaY=jp(Me),ye=Math.abs(De)>=i,Xe=Math.abs(Ze)>=i;L&&(ye||Xe)&&L(k,De,Ze,ee,Me),ye&&(S&&k.deltaX>0&&S(k),M&&k.deltaX<0&&M(k),T&&T(k),N&&k.deltaX<0!=je<0&&N(k),je=k.deltaX,ee[0]=ee[1]=ee[2]=0),Xe&&(P&&k.deltaY>0&&P(k),w&&k.deltaY<0&&w(k),y&&y(k),G&&k.deltaY<0!=Ee<0&&G(k),Ee=k.deltaY,Me[0]=Me[1]=Me[2]=0),(C||lt)&&(K&&K(k),lt&&(m&&lt===1&&m(k),x&&x(k),lt=0),C=!1),Oe&&!(Oe=!1)&&we&&we(k),Fe&&(le(k),Fe=!1),be=0},Be=function(De,Ze,ye){ee[ye]+=De,Me[ye]+=Ze,k._vx.update(De),k._vy.update(Ze),c?be||(be=requestAnimationFrame(ge)):ge()},Pe=function(De,Ze){he&&!Ae&&(k.axis=Ae=Math.abs(De)>Math.abs(Ze)?"x":"y",Oe=!0),Ae!=="y"&&(ee[2]+=De,k._vx.update(De,!0)),Ae!=="x"&&(Me[2]+=Ze,k._vy.update(Ze,!0)),c?be||(be=requestAnimationFrame(ge)):ge()},fe=function(De){if(!ve(De,1)){De=yo(De,u);var Ze=De.clientX,ye=De.clientY,Xe=Ze-k.x,Ve=ye-k.y,$e=k.isDragging;k.x=Ze,k.y=ye,($e||(Xe||Ve)&&(Math.abs(k.startX-Ze)>=s||Math.abs(k.startY-ye)>=s))&&(lt=$e?2:1,$e||(k.isDragging=!0),Pe(Xe,Ve))}},Ne=k.onPress=function(de){ve(de,1)||de&&de.button||(k.axis=Ae=null,Ue.pause(),k.isPressed=!0,de=yo(de),je=Ee=0,k.startX=k.x=de.clientX,k.startY=k.y=de.clientY,k._vx.reset(),k._vy.reset(),Rn(j?o:re,Di[1],fe,Ge,!0),k.deltaX=k.deltaY=0,v&&v(k))},U=k.onRelease=function(de){if(!ve(de,1)){wn(j?o:re,Di[1],fe,!0);var De=!isNaN(k.y-k.startY),Ze=k.isDragging,ye=Ze&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Xe=yo(de);!ye&&De&&(k._vx.reset(),k._vy.reset(),u&&ne&&hn.delayedCall(.08,function(){if(Ko()-ce>300&&!de.defaultPrevented){if(de.target.click)de.target.click();else if(re.createEvent){var Ve=re.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,si,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),de.target.dispatchEvent(Ve)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Ze&&!j&&Ue.restart(!0),lt&&ge(),p&&Ze&&p(k),b&&b(k,ye)}},R=function(De){return De.touches&&De.touches.length>1&&(k.isGesturing=!0)&&ae(De,k.isDragging)},F=function(){return(k.isGesturing=!1)||I(k)},B=function(De){if(!ve(De)){var Ze=me(),ye=ft();Be((Ze-D)*Se,(ye-E)*Se,1),D=Ze,E=ye,h&&Ue.restart(!0)}},z=function(De){if(!ve(De)){De=yo(De,u),le&&(Fe=!0);var Ze=(De.deltaMode===1?l:De.deltaMode===2?si.innerHeight:1)*g;Be(De.deltaX*Ze,De.deltaY*Ze,0),h&&!j&&Ue.restart(!0)}},Y=function(De){if(!ve(De)){var Ze=De.clientX,ye=De.clientY,Xe=Ze-k.x,Ve=ye-k.y;k.x=Ze,k.y=ye,C=!0,h&&Ue.restart(!0),(Xe||Ve)&&Pe(Xe,Ve)}},oe=function(De){k.event=De,W(k)},pe=function(De){k.event=De,O(k)},Ke=function(De){return ve(De)||yo(De,u)&&ke(k)};Ue=k._dc=hn.delayedCall(f||.25,ue).pause(),k.deltaX=k.deltaY=0,k._vx=uf(0,50,!0),k._vy=uf(0,50,!0),k.scrollX=me,k.scrollY=ft,k.isDragging=k.isGesturing=k.isPressed=!1,x0(this),k.enable=function(de){return k.isEnabled||(Rn(ie?re:o,"scroll",cf),a.indexOf("scroll")>=0&&Rn(ie?re:o,"scroll",B,Ge,J),a.indexOf("wheel")>=0&&Rn(o,"wheel",z,Ge,J),(a.indexOf("touch")>=0&&b0||a.indexOf("pointer")>=0)&&(Rn(o,Di[0],Ne,Ge,J),Rn(re,Di[2],U),Rn(re,Di[3],U),ne&&Rn(o,"click",Re,!0,!0),ke&&Rn(o,"click",Ke),ae&&Rn(re,"gesturestart",R),I&&Rn(re,"gestureend",F),W&&Rn(o,Ss+"enter",oe),O&&Rn(o,Ss+"leave",pe),K&&Rn(o,Ss+"move",Y)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=C=lt=!1,k._vx.reset(),k._vy.reset(),D=me(),E=ft(),de&&de.type&&Ne(de),xe&&xe(k)),k},k.disable=function(){k.isEnabled&&(Ra.filter(function(de){return de!==k&&$o(de.target)}).length||wn(ie?re:o,"scroll",cf),k.isPressed&&(k._vx.reset(),k._vy.reset(),wn(j?o:re,Di[1],fe,!0)),wn(ie?re:o,"scroll",B,J),wn(o,"wheel",z,J),wn(o,Di[0],Ne,J),wn(re,Di[2],U),wn(re,Di[3],U),wn(o,"click",Re,!0),wn(o,"click",Ke),wn(re,"gesturestart",R),wn(re,"gestureend",F),wn(o,Ss+"enter",oe),wn(o,Ss+"leave",pe),wn(o,Ss+"move",Y),k.isEnabled=k.isPressed=k.isDragging=!1,Je&&Je(k))},k.kill=k.revert=function(){k.disable();var de=Ra.indexOf(k);de>=0&&Ra.splice(de,1),_r===k&&(_r=0)},Ra.push(k),j&&$o(o)&&(_r=k),k.enable(_)},Qx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Bt.version="3.13.0";Bt.create=function(r){return new Bt(r)};Bt.register=E0;Bt.getAll=function(){return Ra.slice()};Bt.getById=function(r){return Ra.filter(function(e){return e.vars.id===r})[0]};y0()&&hn.registerPlugin(Bt);console.clear();$.registerPlugin(Bt);const ny=$.utils.toArray(".rail h4"),Yp=iy(ny,{repeat:-1,paddingRight:30});Bt.create({onChangeY(r){let e=2.5;r.deltaY<0&&(e*=-1),$.timeline({defaults:{ease:"none"}}).to(Yp,{timeScale:e*2.5,duration:.2,overwrite:!0}).to(Yp,{timeScale:e/2.5,duration:1},"+=0.3")}});function iy(r,e){r=$.utils.toArray(r),e=e||{};let t=$.timeline({repeat:e.repeat,paused:e.paused,defaults:{ease:"none"},onReverseComplete:()=>t.totalTime(t.rawTime()+t.duration()*100)}),n=r.length,i=r[0].offsetLeft,s=[],a=[],o=[],l=0,c=(e.speed||1)*100,u=e.snap===!1?x=>x:$.utils.snap(e.snap||1),h,f,d,g,_,m;for($.set(r,{xPercent:(x,v)=>{let b=a[x]=parseFloat($.getProperty(v,"width","px"));return o[x]=u(parseFloat($.getProperty(v,"x","px"))/b*100+$.getProperty(v,"xPercent")),o[x]}}),$.set(r,{x:0}),h=r[n-1].offsetLeft+o[n-1]/100*a[n-1]-i+r[n-1].offsetWidth*$.getProperty(r[n-1],"scaleX")+(parseFloat(e.paddingRight)||0),m=0;m<n;m++)_=r[m],f=o[m]/100*a[m],d=_.offsetLeft+f-i,g=d+a[m]*$.getProperty(_,"scaleX"),t.to(_,{xPercent:u((f-g)/a[m]*100),duration:g/c},0).fromTo(_,{xPercent:u((f-g+h)/a[m]*100)},{xPercent:o[m],duration:(f-g+h-f)/c,immediateRender:!1},g/c).add("label"+m,d/c),s[m]=d/c;function p(x,v){v=v||{},Math.abs(x-l)>n/2&&(x+=x>l?-n:n);let b=$.utils.wrap(0,n,x),S=s[b];return S>t.time()!=x>l&&(v.modifiers={time:$.utils.wrap(0,t.duration())},S+=t.duration()*(x>l?1:-1)),l=b,v.overwrite=!0,t.tweenTo(S,v)}return t.next=x=>p(l+1,x),t.previous=x=>p(l-1,x),t.current=()=>l,t.toIndex=(x,v)=>p(x,v),t.times=s,t.progress(1,!0).progress(0,!0),e.reversed&&(t.vars.onReverseComplete(),t.reverse()),t}(function(){function r(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];var o=s.length;if(n)for(o||n.removeChild(this);o--;){var l=s[o];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),o?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=r,DocumentFragment.prototype.append=r),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function ry(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Kp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function $p(r,e,t){return e&&Kp(r.prototype,e),t&&Kp(r,t),r}function sy(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Jp(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Zp(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Jp(Object(t),!0).forEach(function(n){sy(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Jp(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function M0(r,e){return oy(r)||cy(r,e)||w0(r,e)||hy()}function In(r){return ay(r)||ly(r)||w0(r)||uy()}function ay(r){if(Array.isArray(r))return hf(r)}function oy(r){if(Array.isArray(r))return r}function ly(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function cy(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],n=!0,i=!1,s=void 0;try{for(var a=r[Symbol.iterator](),o;!(n=(o=a.next()).done)&&(t.push(o.value),!(e&&t.length===e));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw s}}return t}}function w0(r,e){if(r){if(typeof r=="string")return hf(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return hf(r,e)}}function hf(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function uy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cs(r,e){return Object.getOwnPropertyNames(Object(r)).reduce(function(t,n){var i=Object.getOwnPropertyDescriptor(Object(r),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,s||i)},{})}function Ll(r){return typeof r=="string"}function Od(r){return Array.isArray(r)}function Gl(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Cs(r),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(Ll(t)||Od(t)?String(t):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(r.position)),e}function kd(r){var e=Ll(r)||Od(r)?String(r):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Su(r){return r!==null&&typeof r=="object"}function fy(r){return Su(r)&&/^(1|3|11)$/.test(r.nodeType)}function dy(r){return typeof r=="number"&&r>-1&&r%1===0}function py(r){return Su(r)&&dy(r.length)}function Vs(r){return Od(r)?r:r==null?[]:py(r)?Array.prototype.slice.call(r):[r]}function Qp(r){var e=r;return Ll(r)&&(/^(#[a-z]\w+)$/.test(r.trim())?e=document.getElementById(r.trim().slice(1)):e=document.querySelectorAll(r)),Vs(e).reduce(function(t,n){return[].concat(In(t),In(Vs(n).filter(fy)))},[])}var my=Object.entries,tu="_splittype",Ni={},gy=0;function ji(r,e,t){if(!Su(r))return console.warn("[data.set] owner is not an object"),null;var n=r[tu]||(r[tu]=++gy),i=Ni[n]||(Ni[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(Ni[n]=Zp(Zp({},i),e)):e!==void 0&&(i[e]=t),t}function Ps(r,e){var t=Su(r)?r[tu]:null,n=t&&Ni[t]||{};return n}function A0(r){var e=r&&r[tu];e&&(delete r[e],delete Ni[e])}function _y(){Object.keys(Ni).forEach(function(r){delete Ni[r]})}function by(){my(Ni).forEach(function(r){var e=M0(r,2),t=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(Ni[t]=null,delete Ni[t])})}function vy(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=r?String(r):"";return t.trim().replace(/\s+/g," ").split(e)}var Bd="\\ud800-\\udfff",R0="\\u0300-\\u036f\\ufe20-\\ufe23",C0="\\u20d0-\\u20f0",P0="\\ufe0e\\ufe0f",xy="[".concat(Bd,"]"),ff="[".concat(R0).concat(C0,"]"),df="\\ud83c[\\udffb-\\udfff]",yy="(?:".concat(ff,"|").concat(df,")"),D0="[^".concat(Bd,"]"),L0="(?:\\ud83c[\\udde6-\\uddff]){2}",I0="[\\ud800-\\udbff][\\udc00-\\udfff]",U0="\\u200d",F0="".concat(yy,"?"),N0="[".concat(P0,"]?"),Sy="(?:"+U0+"(?:"+[D0,L0,I0].join("|")+")"+N0+F0+")*",Ty=N0+F0+Sy,Ey="(?:".concat(["".concat(D0).concat(ff,"?"),ff,L0,I0,xy].join("|"),`
)`),My=RegExp("".concat(df,"(?=").concat(df,")|").concat(Ey).concat(Ty),"g"),wy=[U0,Bd,R0,C0,P0],Ay=RegExp("[".concat(wy.join(""),"]"));function Ry(r){return r.split("")}function O0(r){return Ay.test(r)}function Cy(r){return r.match(My)||[]}function Py(r){return O0(r)?Cy(r):Ry(r)}function Dy(r){return r==null?"":String(r)}function Ly(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r=Dy(r),r&&Ll(r)&&!e&&O0(r)?Py(r):r.split(e)}function pf(r,e){var t=document.createElement(r);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=Ll(i)?i.trim():i;s===null||s===""||(n==="children"?t.append.apply(t,In(Vs(s))):t.setAttribute(n,s))}),t}var zd={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Iy(r,e){e=Cs(zd,e);var t=kd(e.types),n=e.tagName,i=r.nodeValue,s=document.createDocumentFragment(),a=[],o=[];return/^\s/.test(i)&&s.append(" "),a=vy(i).reduce(function(l,c,u,h){var f,d;return t.chars&&(d=Ly(c).map(function(g){var _=pf(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:g});return ji(_,"isChar",!0),o=[].concat(In(o),[_]),_})),t.words||t.lines?(f=pf(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?d:c}),ji(f,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(f)):d.forEach(function(g){s.appendChild(g)}),u<h.length-1&&s.append(" "),t.words?l.concat(f):l},[]),/\s$/.test(i)&&s.append(" "),r.replaceWith(s),{words:a,chars:o}}function k0(r,e){var t=r.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(r.nodeValue))return Iy(r,e);var i=Vs(r.childNodes);if(i.length&&(ji(r,"isSplit",!0),!Ps(r).isRoot)){r.style.display="inline-block",r.style.position="relative";var s=r.nextSibling,a=r.previousSibling,o=r.textContent||"",l=s?s.textContent:" ",c=a?a.textContent:" ";ji(r,{isWordEnd:/\s$/.test(o)||/^\s/.test(l),isWordStart:/^\s/.test(o)||/\s$/.test(c)})}return i.reduce(function(u,h){var f=k0(h,e),d=f.words,g=f.chars;return{words:[].concat(In(u.words),In(d)),chars:[].concat(In(u.chars),In(g))}},n)}function Uy(r,e,t,n){if(!t.absolute)return{top:e?r.offsetTop:null};var i=r.offsetParent,s=M0(n,2),a=s[0],o=s[1],l=0,c=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();l=u.x+a,c=u.y+o}var h=r.getBoundingClientRect(),f=h.width,d=h.height,g=h.x,_=h.y,m=_+o-c,p=g+a-l;return{width:f,height:d,top:m,left:p}}function B0(r){Ps(r).isWord?(A0(r),r.replaceWith.apply(r,In(r.childNodes))):Vs(r.children).forEach(function(e){return B0(e)})}var Fy=function(){return document.createDocumentFragment()};function Ny(r,e,t){var n=kd(e.types),i=e.tagName,s=r.getElementsByTagName("*"),a=[],o=[],l=null,c,u,h,f=[],d=r.parentElement,g=r.nextElementSibling,_=Fy(),m=window.getComputedStyle(r),p=m.textAlign,x=parseFloat(m.fontSize),v=x*.2;return e.absolute&&(h={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},u=r.offsetWidth,c=r.offsetHeight,ji(r,{cssWidth:r.style.width,cssHeight:r.style.height})),Vs(s).forEach(function(b){var S=b.parentElement===r,M=Uy(b,S,e,t),w=M.width,P=M.height,T=M.top,y=M.left;/^br$/i.test(b.nodeName)||(n.lines&&S&&((l===null||T-l>=v)&&(l=T,a.push(o=[])),o.push(b)),e.absolute&&ji(b,{top:T,left:y,width:w,height:P}))}),d&&d.removeChild(r),n.lines&&(f=a.map(function(b){var S=pf(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(p,"; width: 100%;")});ji(S,"isLine",!0);var M={height:0,top:1e4};return _.appendChild(S),b.forEach(function(w,P,T){var y=Ps(w),L=y.isWordEnd,N=y.top,G=y.height,W=T[P+1];M.height=Math.max(M.height,G),M.top=Math.min(M.top,N),S.appendChild(w),L&&Ps(W).isWordStart&&S.append(" ")}),e.absolute&&ji(S,{height:M.height,top:M.top}),S}),n.words||B0(_),r.replaceChildren(_)),e.absolute&&(r.style.width="".concat(r.style.width||u,"px"),r.style.height="".concat(c,"px"),Vs(s).forEach(function(b){var S=Ps(b),M=S.isLine,w=S.top,P=S.left,T=S.width,y=S.height,L=Ps(b.parentElement),N=!M&&L.isLine;b.style.top="".concat(N?w-L.top:w,"px"),b.style.left=M?"".concat(h.left,"px"):"".concat(P-(N?h.left:0),"px"),b.style.height="".concat(y,"px"),b.style.width=M?"".concat(h.width,"px"):"".concat(T,"px"),b.style.position="absolute"})),d&&(g?d.insertBefore(r,g):d.appendChild(r)),f}var ra=Cs(zd,{}),Jt=(function(){$p(r,null,[{key:"clearData",value:function(){_y()}},{key:"setDefaults",value:function(t){return ra=Cs(ra,Gl(t)),zd}},{key:"revert",value:function(t){Qp(t).forEach(function(n){var i=Ps(n),s=i.isSplit,a=i.html,o=i.cssWidth,l=i.cssHeight;s&&(n.innerHTML=a,n.style.width=o||"",n.style.height=l||"",A0(n))})}},{key:"create",value:function(t,n){return new r(t,n)}},{key:"data",get:function(){return Ni}},{key:"defaults",get:function(){return ra},set:function(t){ra=Cs(ra,Gl(t))}}]);function r(e,t){ry(this,r),this.isSplit=!1,this.settings=Cs(ra,Gl(t)),this.elements=Qp(e),this.split()}return $p(r,[{key:"split",value:function(t){var n=this;this.revert(),this.elements.forEach(function(a){ji(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=Cs(this.settings,Gl(t)));var s=kd(this.settings.types);s.none||(this.elements.forEach(function(a){ji(a,"isRoot",!0);var o=k0(a,n.settings),l=o.words,c=o.chars;n.words=[].concat(In(n.words),In(l)),n.chars=[].concat(In(n.chars),In(c))}),this.elements.forEach(function(a){if(s.lines||n.settings.absolute){var o=Ny(a,n.settings,i);n.lines=[].concat(In(n.lines),In(o))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),by())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),r.revert(this.elements)}}]),r})();/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var br,Os,Hd,Tu,No,Ic,nu,Jo,Ui="transform",mf=Ui+"Origin",z0,Gd=function(e){var t=e.ownerDocument||e;for(!(Ui in e.style)&&("msTransform"in e.style)&&(Ui="msTransform",mf=Ui+"Origin");t.parentNode&&(t=t.parentNode););if(Os=window,nu=new Ws,t){br=t,Hd=t.documentElement,Tu=t.body,Jo=br.createElementNS("http://www.w3.org/2000/svg","g"),Jo.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),z0=i.offsetParent!==n,s.removeChild(n))}return t},Oy=function(e){for(var t,n;e&&e!==Tu;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},H0=[],G0=[],Vd=function(){return Os.pageYOffset||br.scrollTop||Hd.scrollTop||Tu.scrollTop||0},Wd=function(){return Os.pageXOffset||br.scrollLeft||Hd.scrollLeft||Tu.scrollLeft||0},Xd=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},ky=function r(e){if(Os.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Gu=function r(e,t){if(e.parentNode&&(br||Gd(e))){var n=Xd(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",a=t!==2?0:100,o=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=br.createElementNS?br.createElementNS(i.replace(/^https/,"http"),s):br.createElement(s);return t&&(n?(Ic||(Ic=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+a+","+o+")"),Ic.appendChild(c)):(No||(No=r(e),No.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+o+"px;left:"+a+"px",No.appendChild(c))),c}throw"Need document and parent."},By=function(e){for(var t=new Ws,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},V0=function(e){var t=e.getCTM(),n;return t||(n=e.style[Ui],e.style[Ui]="none",e.appendChild(Jo),t=Jo.getCTM(),e.removeChild(Jo),n?e.style[Ui]=n:e.style.removeProperty(Ui.replace(/([A-Z])/g,"-$1").toLowerCase())),t||nu.clone()},zy=function(e,t){var n=Xd(e),i=e===n,s=n?H0:G0,a=e.parentNode,o=a&&!n&&a.shadowRoot&&a.shadowRoot.appendChild?a.shadowRoot:a,l,c,u,h,f,d;if(e===Os)return e;if(s.length||s.push(Gu(e,1),Gu(e,2),Gu(e,3)),l=n?Ic:No,n)i?(u=V0(e),h=-u.e/u.a,f=-u.f/u.d,c=nu):e.getBBox?(u=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?By(c):c.getItem(0).matrix:nu,h=c.a*u.x+c.c*u.y,f=c.b*u.x+c.d*u.y):(c=new Ws,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:a).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+h)+","+(c.f+f)+")");else{if(h=f=0,z0)for(c=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(Os.getComputedStyle(u)[Ui]+"").length>4&&(h=u.offsetLeft,f=u.offsetTop,u=0);if(d=Os.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(c=e.offsetParent;a&&a!==c;)h+=a.scrollLeft||0,f+=a.scrollTop||0,a=a.parentNode;u=l.style,u.top=e.offsetTop-f+"px",u.left=e.offsetLeft-h+"px",u[Ui]=d[Ui],u[mf]=d[mf],u.position=d.position==="fixed"?"fixed":"absolute",o.appendChild(l)}return l},Vu=function(e,t,n,i,s,a,o){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=a,e.f=o,e},Ws=(function(){function r(t,n,i,s,a,o){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),a===void 0&&(a=0),o===void 0&&(o=0),Vu(this,t,n,i,s,a,o)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,a=this.d,o=this.e,l=this.f,c=n*a-i*s||1e-10;return Vu(this,a/c,-i/c,-s/c,n/c,(s*l-a*o)/c,-(n*l-i*o)/c)},e.multiply=function(n){var i=this.a,s=this.b,a=this.c,o=this.d,l=this.e,c=this.f,u=n.a,h=n.c,f=n.b,d=n.d,g=n.e,_=n.f;return Vu(this,u*i+f*a,u*s+f*o,h*i+d*a,h*s+d*o,l+g*i+_*a,c+g*s+_*o)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,a=this.c,o=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&a===n.c&&o===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,a=n.y,o=this.a,l=this.b,c=this.c,u=this.d,h=this.e,f=this.f;return i.x=s*o+a*c+h||0,i.y=s*l+a*u+f||0,i},r})();function er(r,e,t,n){if(!r||!r.parentNode||(br||Gd(r)).documentElement===r)return new Ws;var i=Oy(r),s=Xd(r),a=s?H0:G0,o=zy(r,t),l=a[0].getBoundingClientRect(),c=a[1].getBoundingClientRect(),u=a[2].getBoundingClientRect(),h=o.parentNode,f=!n&&ky(r),d=new Ws((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(f?0:Wd()),l.top+(f?0:Vd()));if(h.removeChild(o),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}/*!
 * Flip 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hy=1,Za,bn,Dt,Zo,Hr,vr,gf,em=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},_f={},tm=180/Math.PI,Gy=Math.PI/180,iu={},nm={},Eu={},qd=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},Vy=qd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),Mu=qd("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Qo=function(e){return Za(e)[0]||console.warn("Element not found:",e)},Ca=function(e){return Math.round(e*1e4)/1e4||0},Wu=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},im={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},W0={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},X0=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},Pa=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},jd={},q0=function(e){var t=jd[e]=qd(e);return Eu[e]=t.concat(Mu),t},Wy=function(e){var t=e._gsap||bn.core.getCache(e);return t.gmCache===bn.ticker.frame?t.gMatrix:(t.gmCache=bn.ticker.frame,t.gMatrix=er(e,!0,!1,!0))},Xy=function r(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,s=1e3*Math.pow(10,n)*(t?-1:1),a=t?-s*900:0;e;)a+=s,e=e.previousSibling;return i?a+r(i,t,n+1):a},ru=function(e,t,n){return e.forEach(function(i){return i.d=Xy(n?i.element:i.t,t)}),e.sort(function(i,s){return i.d-s.d}),e},bl=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],s=t.length,a,o;s--;)a=t[s],o=n[a]||n.getPropertyValue(a),i.push(o?a:nm[a]||(nm[a]=X0(a)),o);return n},su=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},rm=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(su)},Xu="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Yd=function(e,t,n){var i=e.element,s=e.width,a=e.height,o=e.uncache,l=e.getProp,c=i.style,u=4,h,f,d;if(typeof t!="object"&&(t=e),Dt&&n!==1)return Dt._abs.push({t:i,b:e,a:e,sd:0}),Dt._final.push(function(){return(e.cache.uncache=1)&&su(e)}),i;for(f=l("display")==="none",(!e.isVisible||f)&&(f&&(bl(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=s=e.width||t.width,e.height=a=e.height||t.height),bl(e,Xu),d=window.getComputedStyle(i);u--;)c[Xu[u]]=d[Xu[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=a+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),o)h=new Xs(i);else if(h=Pa(e,iu),h.position="absolute",e.simple){var g=i.getBoundingClientRect();h.matrix=new Ws(1,0,0,1,g.left+Wd(),g.top+Vd())}else h.matrix=er(i,!1,!1,!0);return h=Na(h,e,!0),e.x=vr(h.x,.01),e.y=vr(h.y,.01),i},sm=function(e,t){return t!==!0&&(t=Za(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},j0=function(e){return ru(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Yd(t.sd<0?t.b:t.a,t.b,1)})},qy=function(e,t){return t&&e.idLookup[bf(t).id]||e.elementStates[0]},bf=function(e,t,n,i){return e instanceof Xs?e:e instanceof Oi?qy(e,i):new Xs(typeof e=="string"?Qo(e)||console.warn(e+" not found"):e,t,n)},jy=function(e,t){for(var n=bn.getProperty(e.element,null,"native"),i=e.props={},s=t.length;s--;)i[t[s]]=(n(t[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},Y0=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},Yy=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+Hy++),t},K0=function(e){return e.map(function(t){return t.element})},am=function(e,t,n){return e&&t.length&&n.add(e(K0(t),n,new Oi(t,0,!0)),0)},Na=function(e,t,n,i,s,a){var o=e.element,l=e.cache,c=e.parent,u=e.x,h=e.y,f=t.width,d=t.height,g=t.scaleX,_=t.scaleY,m=t.rotation,p=t.bounds,x=a&&gf&&gf(o,"transform,width,height"),v=e,b=t.matrix,S=b.e,M=b.f,w=e.bounds.width!==p.width||e.bounds.height!==p.height||e.scaleX!==g||e.scaleY!==_||e.rotation!==m,P=!w&&e.simple&&t.simple&&!s,T,y,L,N,G,W,O;return P||!c?(g=_=1,m=T=0):(G=Wy(c),W=G.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),m=Ca(Math.atan2(W.b,W.a)*tm),T=Ca(Math.atan2(W.c,W.d)*tm+m)%360,g=Math.sqrt(Math.pow(W.a,2)+Math.pow(W.b,2)),_=Math.sqrt(Math.pow(W.c,2)+Math.pow(W.d,2))*Math.cos(T*Gy),s&&(s=Za(s)[0],N=bn.getProperty(s),O=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),v={scaleX:N("scaleX"),scaleY:N("scaleY"),width:O?O.width:Math.ceil(parseFloat(N("width","px"))),height:O?O.height:parseFloat(N("height","px"))}),l.rotation=m+"deg",l.skewX=T+"deg"),n?(g*=f===v.width||!v.width?1:f/v.width,_*=d===v.height||!v.height?1:d/v.height,l.scaleX=g,l.scaleY=_):(f=vr(f*g/v.scaleX,0),d=vr(d*_/v.scaleY,0),o.style.width=f+"px",o.style.height=d+"px"),i&&Y0(o,t.props),P||!c?(u+=S-e.matrix.e,h+=M-e.matrix.f):w||c!==t.parent?(l.renderTransform(1,l),W=er(s||o,!1,!1,!0),y=G.apply({x:W.e,y:W.f}),L=G.apply({x:S,y:M}),u+=L.x-y.x,h+=L.y-y.y):(G.e=G.f=0,L=G.apply({x:S-e.matrix.e,y:M-e.matrix.f}),u+=L.x,h+=L.y),u=vr(u,.02),h=vr(h,.02),a&&!(a instanceof Xs)?x&&x.revert():(l.x=u+"px",l.y=h+"px",l.renderTransform(1,l)),a&&(a.x=u,a.y=h,a.rotation=m,a.skewX=T,n?(a.scaleX=g,a.scaleY=_):(a.width=f,a.height=d)),a||l},qu=function(e,t){return e instanceof Oi?e:new Oi(e,t)},$0=function(e,t,n){var i=e.idLookup[n],s=e.alt[n];return s.isVisible&&(!(t.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},ju=[],Yu="width,height,overflowX,overflowY".split(","),Vl,om=function(e){if(e!==Vl){var t=Hr.style,n=Hr.clientWidth===window.outerWidth,i=Hr.clientHeight===window.outerHeight,s=4;if(e&&(n||i)){for(;s--;)ju[s]=t[Yu[s]];n&&(t.width=Hr.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=Hr.clientHeight+"px",t.overflowX="hidden"),Vl=e}else if(Vl){for(;s--;)ju[s]?t[Yu[s]]=ju[s]:t.removeProperty(X0(Yu[s]));Vl=e}}},Ku=function(e,t,n,i){e instanceof Oi&&t instanceof Oi||console.warn("Not a valid state object."),n=n||{};var s=n,a=s.clearProps,o=s.onEnter,l=s.onLeave,c=s.absolute,u=s.absoluteOnLeave,h=s.custom,f=s.delay,d=s.paused,g=s.repeat,_=s.repeatDelay,m=s.yoyo,p=s.toggleClass,x=s.nested,v=s.zIndex,b=s.scale,S=s.fade,M=s.stagger,w=s.spin,P=s.prune,T=("props"in n?n:e).props,y=Pa(n,im),L=bn.timeline({delay:f,paused:d,repeat:g,repeatDelay:_,yoyo:m,data:"isFlip"}),N=y,G=[],W=[],O=[],K=[],te=w===!0?1:w||0,j=typeof w=="function"?w:function(){return te},ae=e.interrupted||t.interrupted,I=L[i!==1?"to":"from"],le,xe,Je,ke,Se,J,ne,he,we,be,Ue,lt,C,Fe;for(xe in t.idLookup)Ue=t.alt[xe]?$0(t,e,xe):t.idLookup[xe],Se=Ue.element,be=e.idLookup[xe],e.alt[xe]&&Se===be.element&&(e.alt[xe].isVisible||!Ue.isVisible)&&(be=e.alt[xe]),be?(J={t:Se,b:be,a:Ue,sd:be.element===Se?0:Ue.isVisible?1:-1},O.push(J),J.sd&&(J.sd<0&&(J.b=Ue,J.a=be),ae&&bl(J.b,T?Eu[T]:Mu),S&&O.push(J.swap={t:be.element,b:J.b,a:J.a,sd:-J.sd,swap:J})),Se._flip=be.element._flip=Dt?Dt.timeline:L):Ue.isVisible&&(O.push({t:Se,b:Pa(Ue,{isVisible:1}),a:Ue,sd:0,entering:1}),Se._flip=Dt?Dt.timeline:L);if(T&&(jd[T]||q0(T)).forEach(function(k){return y[k]=function(je){return O[je].a.props[k]}}),O.finalStates=we=[],lt=function(){for(ru(O),om(!0),ke=0;ke<O.length;ke++)J=O[ke],C=J.a,Fe=J.b,P&&!C.isDifferent(Fe)&&!J.entering?O.splice(ke--,1):(Se=J.t,x&&!(J.sd<0)&&ke&&(C.matrix=er(Se,!1,!1,!0)),Fe.isVisible&&C.isVisible?(J.sd<0?(ne=new Xs(Se,T,e.simple),Na(ne,C,b,0,0,ne),ne.matrix=er(Se,!1,!1,!0),ne.css=J.b.css,J.a=C=ne,S&&(Se.style.opacity=ae?Fe.opacity:C.opacity),M&&K.push(Se)):J.sd>0&&S&&(Se.style.opacity=ae?C.opacity-Fe.opacity:"0"),Na(C,Fe,b,T)):Fe.isVisible!==C.isVisible&&(Fe.isVisible?C.isVisible||(Fe.css=C.css,W.push(Fe),O.splice(ke--,1),c&&x&&Na(C,Fe,b,T)):(C.isVisible&&G.push(C),O.splice(ke--,1))),b||(Se.style.maxWidth=Math.max(C.width,Fe.width)+"px",Se.style.maxHeight=Math.max(C.height,Fe.height)+"px",Se.style.minWidth=Math.min(C.width,Fe.width)+"px",Se.style.minHeight=Math.min(C.height,Fe.height)+"px"),x&&p&&Se.classList.add(p)),we.push(C);var je;if(p&&(je=we.map(function(me){return me.element}),x&&je.forEach(function(me){return me.classList.remove(p)})),om(!1),b?(y.scaleX=function(me){return O[me].a.scaleX},y.scaleY=function(me){return O[me].a.scaleY}):(y.width=function(me){return O[me].a.width+"px"},y.height=function(me){return O[me].a.height+"px"},y.autoRound=n.autoRound||!1),y.x=function(me){return O[me].a.x+"px"},y.y=function(me){return O[me].a.y+"px"},y.rotation=function(me){return O[me].a.rotation+(w?j(me,he[me],he)*360:0)},y.skewX=function(me){return O[me].a.skewX},he=O.map(function(me){return me.t}),(v||v===0)&&(y.modifiers={zIndex:function(){return v}},y.zIndex=v,y.immediateRender=n.immediateRender!==!1),S&&(y.opacity=function(me){return O[me].sd<0?0:O[me].sd>0?O[me].a.opacity:"+=0"}),K.length){M=bn.utils.distribute(M);var Ee=he.slice(K.length);y.stagger=function(me,ft){return M(~K.indexOf(ft)?he.indexOf(O[me].swap.t):me,ft,Ee)}}if(Vy.forEach(function(me){return n[me]&&L.eventCallback(me,n[me],n[me+"Params"])}),h&&he.length){N=Pa(y,im),"scale"in h&&(h.scaleX=h.scaleY=h.scale,delete h.scale);for(xe in h)le=Pa(h[xe],W0),le[xe]=y[xe],!("duration"in le)&&"duration"in y&&(le.duration=y.duration),le.stagger=y.stagger,I.call(L,he,le,0),delete N[xe]}(he.length||W.length||G.length)&&(p&&L.add(function(){return Wu(je,p,L._zTime<0?"remove":"add")},0)&&!d&&Wu(je,p,"add"),he.length&&I.call(L,he,N,0)),am(o,G,L),am(l,W,L);var Ge=Dt&&Dt.timeline;Ge&&(Ge.add(L,0),Dt._final.push(function(){return rm(O,!a)})),Je=L.duration(),L.call(function(){var me=L.time()>=Je;me&&!Ge&&rm(O,!a),p&&Wu(je,p,me?"remove":"add")})},u&&(c=O.filter(function(k){return!k.sd&&!k.a.isVisible&&k.b.isVisible}).map(function(k){return k.a.element})),Dt){var Oe;c&&(Oe=Dt._abs).push.apply(Oe,sm(O,c)),Dt._run.push(lt)}else c&&j0(sm(O,c)),lt();var Ae=Dt?Dt.timeline:L;return Ae.revert=function(){return Kd(Ae,1,1)},Ae},Ky=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},Kd=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(Ky(e),t<2&&e.progress(1),e.kill()),!0},Wl=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,s=i.length,a;s--;)a=i[s],t[a.id]?n[a.id]=a:t[a.id]=a},Oi=(function(){function r(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=K0(t),this.elementStates=t,Wl(this);else{this.targets=Za(t);var s=n&&(n.kill===!1||n.batch&&!n.kill);Dt&&!s&&Dt._kill.push(this),this.update(s||!!Dt)}}var e=r.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new Xs(s,i.props,i.simple)}),Wl(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Wl(this),this},e.fit=function(n,i,s){for(var a=ru(this.elementStates.slice(0),!1,!0),o=(n||this).idLookup,l=0,c,u;l<a.length;l++)c=a[l],s&&(c.matrix=er(c.element,!1,!1,!0)),u=o[c.id],u&&Na(c,u,i,!0,0,c),c.matrix=er(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var s=this.getElementState(n)||iu;return(i in s?s:s.props||iu)[i]},e.add=function(n){for(var i=n.targets.length,s=this.idLookup,a=this.alt,o,l,c;i--;)l=n.elementStates[i],c=s[l.id],c&&(l.element===c.element||a[l.id]&&a[l.id].element===l.element)?(o=this.elementStates.indexOf(l.element===c.element?c:a[l.id]),this.targets.splice(o,1,n.targets[i]),this.elementStates.splice(o,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),Wl(this),this},e.compare=function(n){var i=n.idLookup,s=this.idLookup,a=[],o=[],l=[],c=[],u=[],h=n.alt,f=this.alt,d=function(P,T,y){return(P.isVisible!==T.isVisible?P.isVisible?l:c:P.isVisible?o:a).push(y)&&u.push(y)},g=function(P,T,y){return u.indexOf(y)<0&&d(P,T,y)},_,m,p,x,v,b,S,M;for(p in i)v=h[p],b=f[p],_=v?$0(n,this,p):i[p],x=_.element,m=s[p],b?(M=m.isVisible||!b.isVisible&&x===m.element?m:b,S=v&&!_.isVisible&&!v.isVisible&&M.element===v.element?v:_,S.isVisible&&M.isVisible&&S.element!==M.element?((S.isDifferent(M)?o:a).push(S.element,M.element),u.push(S.element,M.element)):d(S,M,S.element),v&&S.element===v.element&&(v=i[p]),g(S.element!==m.element&&v?v:S,m,m.element),g(v&&v.element===b.element?v:S,b,b.element),v&&g(v,b.element===v.element?b:m,v.element)):(m?m.isDifferent(_)?d(_,m,x):a.push(x):l.push(x),v&&g(v,m,v.element));for(p in s)i[p]||(c.push(s[p].element),f[p]&&c.push(f[p].element));return{changed:o,unchanged:a,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=Eu[this.props]||Mu,i=this.elementStates.length;i--;)bl(this.elementStates[i],n)},e.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(a){var o=a._flip,l=Kd(o,n?0:1);n&&l&&s.indexOf(o)<0&&o.add(function(){return i.updateVisibility()}),l&&s.push(o)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(Qo(n))]},e.makeAbsolute=function(){return ru(this.elementStates.slice(0),!0,!0).map(Yd)},r})(),Xs=(function(){function r(t,n,i){this.element=t,this.update(n,i)}var e=r.prototype;return e.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.update=function(n,i){var s=this,a=s.element,o=bn.getProperty(a),l=bn.core.getCache(a),c=a.getBoundingClientRect(),u=a.getBBox&&typeof a.getBBox=="function"&&a.nodeName.toLowerCase()!=="svg"&&a.getBBox(),h=i?new Ws(1,0,0,1,c.left+Wd(),c.top+Vd()):er(a,!1,!1,!0);l.uncache=1,s.getProp=o,s.element=a,s.id=Yy(a),s.matrix=h,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=o("display"),s.position=o("position"),s.parent=a.parentNode,s.x=o("x"),s.y=o("y"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=o("rotation"),s.skewX=o("skewX"),s.opacity=o("opacity"),s.width=u?u.width:vr(o("width","px"),.04),s.height=u?u.height:vr(o("height","px"),.04),n&&jy(s,jd[n]||q0(n)),s.ctm=a.getCTM&&a.nodeName.toLowerCase()==="svg"&&V0(a).inverse(),s.simple=i||Ca(h.a)===1&&!Ca(h.b)&&!Ca(h.c)&&Ca(h.d)===1,s.uncache=0},r})(),$y=(function(){function r(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=r.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},r})(),Jy=(function(){function r(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Oi,this.timeline=bn.timeline()}var e=r.prototype;return e.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new $y(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,s=Dt,a=Zo;return Dt=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(o){o.vars.getState&&(o.states.length=0,Zo=o,o.state=o.vars.getState(o)),n&&o.states.forEach(function(l){return i.state.add(l)})}),Zo=a,Dt=s,this.killConflicts(),this},e.animate=function(){var n=this,i=Dt,s=this.timeline,a=this.actions.length,o,l;for(Dt=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,h=c.vars.onLeave,f=c.targets,d,g;f&&f.length&&(u||h)&&(d=new Oi,c.states.forEach(function(_){return d.add(_)}),g=d.compare(uo.getState(f)),g.enter.length&&u&&u(g.enter),g.leave.length&&h&&h(g.leave))}),j0(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),o=this._final.slice(0),s.add(function(){l<=s.time()&&(o.forEach(function(c){return c()}),em(n,"onComplete"))}),Dt=i;a--;)this.actions[a].vars.once&&this.actions[a].kill();return em(this,"onStart"),s.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var a,o=function l(c){c&&(s.targets=c),a=i.indexOf(l),~a&&(i.splice(a,1),i.length||n())};i.push(o),s.vars.loadState(o)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var s=this;return this!==Dt&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete _f[this.id]},r})(),uo=(function(){function r(){}return r.getState=function(t,n){var i=qu(t,n);return Zo&&Zo.states.push(i),n&&n.batch&&r.batch(n.batch).state.add(i),i},r.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),Ku(t,qu(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},r.to=function(t,n){return Ku(t,qu(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},r.fromTo=function(t,n,i){return Ku(t,n,i)},r.fit=function(t,n,i){var s=i?Pa(i,W0):{},a=i||s,o=a.absolute,l=a.scale,c=a.getVars,u=a.props,h=a.runBackwards,f=a.onComplete,d=a.simple,g=i&&i.fitChild&&Qo(i.fitChild),_=bf(n,u,d,t),m=bf(t,0,d,_),p=u?Eu[u]:Mu,x=bn.context();return u&&Y0(s,_.props),bl(m,p),h&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){su(m),f&&f.apply(this,arguments)}),o&&Yd(m,_),s=Na(m,_,l||g,!s.duration&&u,g,s.duration||c?s:0),typeof i=="object"&&"zIndex"in i&&(s.zIndex=i.zIndex),x&&!c&&x.add(function(){return function(){return su(m)}}),c?s:s.duration?bn.to(m.element,s):null},r.makeAbsolute=function(t,n){return(t instanceof Oi?t:new Oi(t,n)).makeAbsolute()},r.batch=function(t){return t||(t="default"),_f[t]||(_f[t]=new Jy(t))},r.killFlipsOf=function(t,n){(t instanceof Oi?t.targets:Za(t)).forEach(function(i){return i&&Kd(i._flip,n!==!1?1:2)})},r.isFlipping=function(t){var n=r.getByTarget(t);return!!n&&n.isActive()},r.getByTarget=function(t){return(Qo(t)||iu)._flip},r.getElementState=function(t,n){return new Xs(Qo(t),n)},r.convertCoordinates=function(t,n,i){var s=er(n,!0,!0).multiply(er(t));return i?s.apply(i):s},r.register=function(t){if(Hr=typeof document<"u"&&document.body,Hr){bn=t,Gd(Hr),Za=bn.utils.toArray,gf=bn.core.getStyleSaver;var n=bn.utils.snap(.1);vr=function(s,a){return n(parseFloat(s)+a)}}},r})();uo.version="3.13.0";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(uo);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,Ea,at,At,ii,bt,$d,au,vl,el,Oo,Xl,gn,wu,vf,Dn,lm,cm,Ma,J0,$u,Z0,Pn,xf,Q0,eb,Br,yf,Jd,Oa,Zd,ou,Sf,Ju,ql=1,_n=Date.now,Zu=_n(),wi=0,ko=0,um=function(e,t,n){var i=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},hm=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Zy=function r(){return ko&&requestAnimationFrame(r)},fm=function(){return wu=1},dm=function(){return wu=0},Gi=function(e){return e},Bo=function(e){return Math.round(e*1e5)/1e5||0},tb=function(){return typeof window<"u"},nb=function(){return Ie||tb()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},qs=function(e){return!!~$d.indexOf(e)},ib=function(e){return(e==="Height"?Zd:at["inner"+e])||ii["client"+e]||bt["client"+e]},rb=function(e){return Qr(e,"getBoundingClientRect")||(qs(e)?function(){return kc.width=at.innerWidth,kc.height=Zd,kc}:function(){return gr(e)})},Qy=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Qr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?ib(s):e["client"+s])||0}},eS=function(e,t){return!t||~Ji.indexOf(e)?rb(e):function(){return kc}},Yi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Qr(e,n))?a()-rb(e)()[s]:qs(e)?(ii[n]||bt[n])-ib(i):e[n]-e["offset"+i])},jl=function(e,t){for(var n=0;n<Ma.length;n+=3)(!t||~t.indexOf(Ma[n+1]))&&e(Ma[n],Ma[n+1],Ma[n+2])},ti=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},zo=function(e){return typeof e=="number"},Ts=function(e){return typeof e=="object"},So=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Qu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},sa=Math.abs,sb="left",ab="top",Qd="right",ep="bottom",ks="width",Bs="height",tl="Right",nl="Left",il="Top",rl="Bottom",Yt="padding",vi="margin",Qa="Width",tp="Height",Qt="px",xi=function(e){return at.getComputedStyle(e)},tS=function(e){var t=xi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},pm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gr=function(e,t){var n=t&&xi(e)[vf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},lu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},ob=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},nS=function(e){return function(t){return Ie.utils.snap(ob(e),t)}},np=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},iS=function(e){return function(t,n){return np(ob(e))(t,n.direction)}},Yl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Kl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},mm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$l={toggleActions:"play",anticipatePin:0},cu={top:0,left:0,center:.5,bottom:1,right:1},Uc=function(e,t){if(ti(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in cu?cu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Jl=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=At.createElement("div"),_=qs(n)||Qr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?bt:n,x=e.indexOf("start")!==-1,v=x?c:u,b="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(b+=(i===en?Qd:ep)+":"+(a+parseFloat(f))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Fc(g,0,i,x),g},Fc=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Qa]=1,s["border"+o+Qa]=0,s[n.p]=t+"px",Ie.set(e,s)},st=[],Tf={},xl,gm=function(){return _n()-wi>34&&(xl||(xl=requestAnimationFrame(Tr)))},aa=function(){(!Pn||!Pn.isPressed||Pn.startX>bt.clientWidth)&&(ot.cache++,Pn?xl||(xl=requestAnimationFrame(Tr)):Tr(),wi||Ys("scrollStart"),wi=_n())},eh=function(){eb=at.innerWidth,Q0=at.innerHeight},Ho=function(e){ot.cache++,(e===!0||!gn&&!Z0&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!xf||eb!==at.innerWidth||Math.abs(at.innerHeight-Q0)>at.innerHeight*.25))&&au.restart(!0)},js={},rS=[],lb=function r(){return sn(Ye,"scrollEnd",r)||Ds(!0)},Ys=function(e){return js[e]&&js[e].map(function(t){return t()})||rS},ei=[],cb=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},ip=function(e,t){var n;for(Dn=0;Dn<st.length;Dn++)n=st[Dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ou=!0,t&&cb(t),t||Ys("revert")},ub=function(e,t){ot.cache++,(t||!Ln)&&ot.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(at.history.scrollRestoration=Jd=e)},Ln,zs=0,_m,sS=function(){if(_m!==zs){var e=_m=zs;requestAnimationFrame(function(){return e===zs&&Ds(!0)})}},hb=function(){bt.appendChild(Oa),Zd=!Pn&&Oa.offsetHeight||at.innerHeight,bt.removeChild(Oa)},bm=function(e){return vl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ds=function(e,t){if(ii=At.documentElement,bt=At.body,$d=[at,At,ii,bt],wi&&!e&&!ou){on(Ye,"scrollEnd",lb);return}hb(),Ln=Ye.isRefreshing=!0,ot.forEach(function(i){return yn(i)&&++i.cacheID&&(i.rec=i())});var n=Ys("refreshInit");J0&&Ye.sort(),t||ip(),ot.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),ou=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Sf=1,bm(!0),st.forEach(function(i){var s=Yi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),bm(!1),Sf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ub(Jd,1),au.pause(),zs++,Ln=2,Tr(2),st.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=Ye.isRefreshing=!1,Ys("refresh")},Ef=0,Nc=1,sl,Tr=function(e){if(e===2||!Ln&&!ou){Ye.isUpdating=!0,sl&&sl.update(0);var t=st.length,n=_n(),i=n-Zu>=50,s=t&&st[0].scroll();if(Nc=Ef>s?-1:1,Ln||(Ef=s),i&&(wi&&!wu&&n-wi>200&&(wi=0,Ys("scrollEnd")),Oo=Zu,Zu=n),Nc<0){for(Dn=t;Dn-- >0;)st[Dn]&&st[Dn].update(0,i);Nc=1}else for(Dn=0;Dn<t;Dn++)st[Dn]&&st[Dn].update(0,i);Ye.isUpdating=!1}xl=0},Mf=[sb,ab,ep,Qd,vi+rl,vi+tl,vi+il,vi+nl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Oc=Mf.concat([ks,Bs,"boxSizing","max"+Qa,"max"+tp,"position",vi,Yt,Yt+il,Yt+tl,Yt+rl,Yt+nl]),aS=function(e,t,n){ka(n);var i=e._gsap;if(i.spacerIsNative)ka(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},th=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Mf.length,a=t.style,o=e.style,l;s--;)l=Mf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ep]=o[Qd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ks]=lu(e,Fn)+Qt,a[Bs]=lu(e,en)+Qt,a[Yt]=o[vi]=o[ab]=o[sb]="0",ka(i),o[ks]=o["max"+Qa]=n[ks],o[Bs]=o["max"+tp]=n[Bs],o[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},oS=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(oS,"-$1").toLowerCase())}},Zl=function(e){for(var t=Oc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Oc[s],n[Oc[s]]);return i.t=e,i},lS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},kc={left:0,top:0},vm=function(e,t,n,i,s,a,o,l,c,u,h,f,d,g){yn(e)&&(e=e(l)),ti(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Uc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),zo(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Fc(o,n,i,!0);else{yn(t)&&(t=t(l));var v=(e||"0").split(" "),b,S,M,w;x=Hn(t,l)||bt,b=gr(x)||{},(!b||!b.left&&!b.top)&&xi(x).display==="none"&&(w=x.style.display,x.style.display="block",b=gr(x),w?x.style.display=w:x.style.removeProperty("display")),S=Uc(v[0],b[i.d]),M=Uc(v[1]||"0",n),e=b[i.p]-c[i.p]-u+S+s-M,o&&Fc(o,M,i,n-M<20||o._isStart&&M>20),n-=n-M}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var P=e+n,T=a._isStart;m="scroll"+i.d2,Fc(a,P,i,T&&P>20||!T&&(h?Math.max(bt[m],ii[m]):a.parentNode[m])<=P+1),h&&(c=gr(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Qt))}return d&&x&&(m=gr(x),d.seek(f),p=gr(x),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},cS=/(webkit|moz|length|cssText|inset)/i,xm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===bt){e._stOrig=s.cssText,o=xi(e);for(a in o)!+a&&!cS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},fb=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Ql=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},ym=function(e,t){var n=as(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var _=fb(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,a.tween&&Tr()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Ie.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),Ye.isTouch&&on(e,"touchmove",n.wheelHandler),s},Ye=(function(){function r(t,n){Ea||r.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ko){this.update=this.refresh=this.kill=Gi;return}n=pm(ti(n)||zo(n)||n.nodeType?{trigger:n}:n,$l);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,b=s.snap,S=s.pinReparent,M=s.pinSpacer,w=s.containerAnimation,P=s.fastScrollEnd,T=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:en,L=!h&&h!==0,N=Hn(n.scroller||at),G=Ie.core.getCache(N),W=qs(N),O=("pinType"in n?n.pinType:Qr(N,"pinType")||W&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],te=L&&n.toggleActions.split(" "),j="markers"in n?n.markers:$l.markers,ae=W?0:parseFloat(xi(N)["border"+y.p2+Qa])||0,I=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(I)},xe=Qy(N,W,y),Je=eS(N,W),ke=0,Se=0,J=0,ne=as(N,y),he,we,be,Ue,lt,C,Fe,Oe,Ae,k,je,Ee,Ge,me,ft,D,E,q,ie,re,ee,Me,ce,Re,ve,ue,ge,Be,Pe,fe,Ne,U,R,F,B,z,Y,oe,pe;if(I._startClamp=I._endClamp=!1,I._dir=y,m*=45,I.scroller=N,I.scroll=w?w.time.bind(w):ne,Ue=ne(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(J0=1,n.refreshPriority===-9999&&(sl=I)),G.tweenScroll=G.tweenScroll||{top:ym(N,en),left:ym(N,Fn)},I.tweenTo=he=G.tweenScroll[y.p],I.scrubDuration=function(ye){R=zo(ye)&&ye,R?U?U.duration(ye):U=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:R,paused:!0,onComplete:function(){return p&&p(I)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),fe=0,l||(l=i.vars.id)),b&&((!Ts(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in bt.style&&Ie.set(W?[bt,ii]:N,{scrollBehavior:"auto"}),ot.forEach(function(ye){return yn(ye)&&ye.target===(W?At.scrollingElement||ii:N)&&(ye.smooth=!1)}),be=yn(b.snapTo)?b.snapTo:b.snapTo==="labels"?nS(i):b.snapTo==="labelsDirectional"?iS(i):b.directional!==!1?function(ye,Xe){return np(b.snapTo)(ye,_n()-Se<500?0:Xe.direction)}:Ie.utils.snap(b.snapTo),F=b.duration||{min:.1,max:2},F=Ts(F)?el(F.min,F.max):el(F,F),B=Ie.delayedCall(b.delay||R/2||.1,function(){var ye=ne(),Xe=_n()-Se<500,Ve=he.tween;if((Xe||Math.abs(I.getVelocity())<10)&&!Ve&&!wu&&ke!==ye){var $e=(ye-C)/me,Vt=i&&!L?i.totalProgress():$e,nt=Xe?0:(Vt-Ne)/(_n()-Oo)*1e3||0,Lt=Ie.utils.clamp(-$e,1-$e,sa(nt/2)*nt/.185),Wt=$e+(b.inertia===!1?0:Lt),Rt,Tt,vt=b,Yn=vt.onStart,Ct=vt.onInterrupt,En=vt.onComplete;if(Rt=be(Wt,I),zo(Rt)||(Rt=Wt),Tt=Math.max(0,Math.round(C+Rt*me)),ye<=Fe&&ye>=C&&Tt!==ye){if(Ve&&!Ve._initted&&Ve.data<=sa(Tt-ye))return;b.inertia===!1&&(Lt=Rt-$e),he(Tt,{duration:F(sa(Math.max(sa(Wt-Vt),sa(Rt-Vt))*.185/nt/.05||0)),ease:b.ease||"power3",data:sa(Tt-ye),onInterrupt:function(){return B.restart(!0)&&Ct&&Ct(I)},onComplete:function(){I.update(),ke=ne(),i&&!L&&(U?U.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),fe=Ne=i&&!L?i.totalProgress():I.progress,x&&x(I),En&&En(I)}},ye,Lt*me,Tt-ye-Lt*me),Yn&&Yn(I,he.tween)}}else I.isActive&&ke!==ye&&B.restart(!0)}).pause()),l&&(Tf[l]=I),f=I.trigger=Hn(f||d!==!0&&d),pe=f&&f._gsap&&f._gsap.stRevert,pe&&(pe=pe(I)),d=d===!0?f:Hn(d),ti(o)&&(o={targets:f,className:o}),d&&(g===!1||g===vi||(g=!g&&d.parentNode&&d.parentNode.style&&xi(d.parentNode).display==="flex"?!1:Yt),I.pin=d,we=Ie.core.getCache(d),we.spacer?ft=we.pinState:(M&&(M=Hn(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),we.spacerIsNative=!!M,M&&(we.spacerState=Zl(M))),we.spacer=q=M||At.createElement("div"),q.classList.add("pin-spacer"),l&&q.classList.add("pin-spacer-"+l),we.pinState=ft=Zl(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),I.spacer=q=we.spacer,Pe=xi(d),Re=Pe[g+y.os2],re=Ie.getProperty(d),ee=Ie.quickSetter(d,y.a,Qt),th(d,q,Pe),E=Zl(d)),j){Ee=Ts(j)?pm(j,mm):mm,k=Jl("scroller-start",l,N,y,Ee,0),je=Jl("scroller-end",l,N,y,Ee,0,k),ie=k["offset"+y.op.d2];var Ke=Hn(Qr(N,"content")||N);Oe=this.markerStart=Jl("start",l,Ke,y,Ee,ie,0,w),Ae=this.markerEnd=Jl("end",l,Ke,y,Ee,ie,0,w),w&&(oe=Ie.quickSetter([Oe,Ae],y.a,Qt)),!O&&!(Ji.length&&Qr(N,"fixedMarkers")===!0)&&(tS(W?bt:N),Ie.set([k,je],{force3D:!0}),ue=Ie.quickSetter(k,y.a,Qt),Be=Ie.quickSetter(je,y.a,Qt))}if(w){var de=w.vars.onUpdate,De=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){I.update(0,0,1),de&&de.apply(w,De||[])})}if(I.previous=function(){return st[st.indexOf(I)-1]},I.next=function(){return st[st.indexOf(I)+1]},I.revert=function(ye,Xe){if(!Xe)return I.kill(!0);var Ve=ye!==!1||!I.enabled,$e=gn;Ve!==I.isReverted&&(Ve&&(z=Math.max(ne(),I.scroll.rec||0),J=I.progress,Y=i&&i.progress()),Oe&&[Oe,Ae,k,je].forEach(function(Vt){return Vt.style.display=Ve?"none":"block"}),Ve&&(gn=I,I.update(Ve)),d&&(!S||!I.isActive)&&(Ve?aS(d,q,ft):th(d,q,xi(d),ve)),Ve||I.update(Ve),gn=$e,I.isReverted=Ve)},I.refresh=function(ye,Xe,Ve,$e){if(!((gn||!I.enabled)&&!Xe)){if(d&&ye&&wi){on(r,"scrollEnd",lb);return}!Ln&&le&&le(I),gn=I,he.tween&&!Ve&&(he.tween.kill(),he.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Vt=xe(),nt=Je(),Lt=w?w.duration():Yi(N,y),Wt=me<=.01||!me,Rt=0,Tt=$e||0,vt=Ts(Ve)?Ve.end:n.end,Yn=n.endTrigger||f,Ct=Ts(Ve)?Ve.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),En=I.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,I),di=f&&Math.max(0,st.indexOf(I))||0,Zt=di,A,H,Z,Q,V,se,_e,Le,Ce,We,He,ze,et;for(j&&Ts(Ve)&&(ze=Ie.getProperty(k,y.p),et=Ie.getProperty(je,y.p));Zt-- >0;)se=st[Zt],se.end||se.refresh(0,1)||(gn=I),_e=se.pin,_e&&(_e===f||_e===d||_e===En)&&!se.isReverted&&(We||(We=[]),We.unshift(se),se.revert(!0,!0)),se!==st[Zt]&&(di--,Zt--);for(yn(Ct)&&(Ct=Ct(I)),Ct=um(Ct,"start",I),C=vm(Ct,f,Vt,y,ne(),Oe,k,I,nt,ae,O,Lt,w,I._startClamp&&"_startClamp")||(d?-.001:0),yn(vt)&&(vt=vt(I)),ti(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(ti(Ct)?Ct.split(" ")[0]:"")+vt:(Rt=Uc(vt.substr(2),Vt),vt=ti(Ct)?Ct:(w?Ie.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,C):C)+Rt,Yn=f)),vt=um(vt,"end",I),Fe=Math.max(C,vm(vt||(Yn?"100% 0":Lt),Yn,Vt,y,ne()+Rt,Ae,je,I,nt,ae,O,Lt,w,I._endClamp&&"_endClamp"))||-.001,Rt=0,Zt=di;Zt--;)se=st[Zt],_e=se.pin,_e&&se.start-se._pinPush<=C&&!w&&se.end>0&&(A=se.end-(I._startClamp?Math.max(0,se.start):se.start),(_e===f&&se.start-se._pinPush<C||_e===En)&&isNaN(Ct)&&(Rt+=A*(1-se.progress)),_e===d&&(Tt+=A));if(C+=Rt,Fe+=Rt,I._startClamp&&(I._startClamp+=Rt),I._endClamp&&!Ln&&(I._endClamp=Fe||-.001,Fe=Math.min(Fe,Yi(N,y))),me=Fe-C||(C-=.01)&&.001,Wt&&(J=Ie.utils.clamp(0,1,Ie.utils.normalize(C,Fe,z))),I._pinPush=Tt,Oe&&Rt&&(A={},A[y.a]="+="+Rt,En&&(A[y.p]="-="+ne()),Ie.set([Oe,Ae],A)),d&&!(Sf&&I.end>=Yi(N,y)))A=xi(d),Q=y===en,Z=ne(),Me=parseFloat(re(y.a))+Tt,!Lt&&Fe>1&&(He=(W?At.scrollingElement||ii:N).style,He={style:He,value:He["overflow"+y.a.toUpperCase()]},W&&xi(bt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+y.a.toUpperCase()]="scroll")),th(d,q,A),E=Zl(d),H=gr(d,!0),Le=O&&as(N,Q?Fn:en)(),g?(ve=[g+y.os2,me+Tt+Qt],ve.t=q,Zt=g===Yt?lu(d,y)+me+Tt:0,Zt&&(ve.push(y.d,Zt+Qt),q.style.flexBasis!=="auto"&&(q.style.flexBasis=Zt+Qt)),ka(ve),En&&st.forEach(function(ct){ct.pin===En&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),O&&ne(z)):(Zt=lu(d,y),Zt&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=Zt+Qt)),O&&(V={top:H.top+(Q?Z-C:Le)+Qt,left:H.left+(Q?Le:Z-C)+Qt,boxSizing:"border-box",position:"fixed"},V[ks]=V["max"+Qa]=Math.ceil(H.width)+Qt,V[Bs]=V["max"+tp]=Math.ceil(H.height)+Qt,V[vi]=V[vi+il]=V[vi+tl]=V[vi+rl]=V[vi+nl]="0",V[Yt]=A[Yt],V[Yt+il]=A[Yt+il],V[Yt+tl]=A[Yt+tl],V[Yt+rl]=A[Yt+rl],V[Yt+nl]=A[Yt+nl],D=lS(ft,V,S),Ln&&ne(0)),i?(Ce=i._initted,$u(1),i.render(i.duration(),!0,!0),ce=re(y.a)-Me+me+Tt,ge=Math.abs(me-ce)>1,O&&ge&&D.splice(D.length-2,2),i.render(0,!0,!0),Ce||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),$u(0)):ce=me,He&&(He.value?He.style["overflow"+y.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+y.a));else if(f&&ne()&&!w)for(H=f.parentNode;H&&H!==bt;)H._pinOffset&&(C-=H._pinOffset,Fe-=H._pinOffset),H=H.parentNode;We&&We.forEach(function(ct){return ct.revert(!1,!0)}),I.start=C,I.end=Fe,Ue=lt=Ln?z:ne(),!w&&!Ln&&(Ue<z&&ne(z),I.scroll.rec=0),I.revert(!1,!0),Se=_n(),B&&(ke=-1,B.restart(!0)),gn=0,i&&L&&(i._initted||Y)&&i.progress()!==Y&&i.progress(Y||0,!0).render(i.time(),!0,!0),(Wt||J!==I.progress||w||_||i&&!i._initted)&&(i&&!L&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(w&&C<-.001&&!J?Ie.utils.normalize(C,Fe,0):J,!0),I.progress=Wt||(Ue-C)/me===J?0:J),d&&g&&(q._pinOffset=Math.round(I.progress*ce)),U&&U.invalidate(),isNaN(ze)||(ze-=Ie.getProperty(k,y.p),et-=Ie.getProperty(je,y.p),Ql(k,y,ze),Ql(Oe,y,ze-($e||0)),Ql(je,y,et),Ql(Ae,y,et-($e||0))),Wt&&!Ln&&I.update(),u&&!Ln&&!Ge&&(Ge=!0,u(I),Ge=!1)}},I.getVelocity=function(){return(ne()-lt)/(_n()-Oo)*1e3||0},I.endAnimation=function(){So(I.callbackAnimation),i&&(U?U.progress(1):i.paused()?L||So(i,I.direction<0,1):So(i,i.reversed()))},I.labelToScroll=function(ye){return i&&i.labels&&(C||I.refresh()||C)+i.labels[ye]/i.duration()*me||0},I.getTrailing=function(ye){var Xe=st.indexOf(I),Ve=I.direction>0?st.slice(0,Xe).reverse():st.slice(Xe+1);return(ti(ye)?Ve.filter(function($e){return $e.vars.preventOverlaps===ye}):Ve).filter(function($e){return I.direction>0?$e.end<=C:$e.start>=Fe})},I.update=function(ye,Xe,Ve){if(!(w&&!Ve&&!ye)){var $e=Ln===!0?z:I.scroll(),Vt=ye?0:($e-C)/me,nt=Vt<0?0:Vt>1?1:Vt||0,Lt=I.progress,Wt,Rt,Tt,vt,Yn,Ct,En,di;if(Xe&&(lt=Ue,Ue=w?ne():$e,b&&(Ne=fe,fe=i&&!L?i.totalProgress():nt)),m&&d&&!gn&&!ql&&wi&&(!nt&&C<$e+($e-lt)/(_n()-Oo)*m?nt=1e-4:nt===1&&Fe>$e+($e-lt)/(_n()-Oo)*m&&(nt=.9999)),nt!==Lt&&I.enabled){if(Wt=I.isActive=!!nt&&nt<1,Rt=!!Lt&&Lt<1,Ct=Wt!==Rt,Yn=Ct||!!nt!=!!Lt,I.direction=nt>Lt?1:-1,I.progress=nt,Yn&&!gn&&(Tt=nt&&!Lt?0:nt===1?1:Lt===1?2:3,L&&(vt=!Ct&&te[Tt+1]!=="none"&&te[Tt+1]||te[Tt],di=i&&(vt==="complete"||vt==="reset"||vt in i))),T&&(Ct||di)&&(di||h||!i)&&(yn(T)?T(I):I.getTrailing(T).forEach(function(Z){return Z.endAnimation()})),L||(U&&!gn&&!ql?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",nt,i._tTime/i._tDur):(U.vars.totalProgress=nt,U.invalidate().restart())):i&&i.totalProgress(nt,!!(gn&&(Se||ye)))),d){if(ye&&g&&(q.style[g+y.os2]=Re),!O)ee(Bo(Me+ce*nt));else if(Yn){if(En=!ye&&nt>Lt&&Fe+1>$e&&$e+1>=Yi(N,y),S)if(!ye&&(Wt||En)){var Zt=gr(d,!0),A=$e-C;xm(d,bt,Zt.top+(y===en?A:0)+Qt,Zt.left+(y===en?0:A)+Qt)}else xm(d,q);ka(Wt||En?D:E),ge&&nt<1&&Wt||ee(Me+(nt===1&&!En?ce:0))}}b&&!he.tween&&!gn&&!ql&&B.restart(!0),o&&(Ct||v&&nt&&(nt<1||!Ju))&&vl(o.targets).forEach(function(Z){return Z.classList[Wt||v?"add":"remove"](o.className)}),a&&!L&&!ye&&a(I),Yn&&!gn?(L&&(di&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),a&&a(I)),(Ct||!Ju)&&(c&&Ct&&Qu(I,c),K[Tt]&&Qu(I,K[Tt]),v&&(nt===1?I.kill(!1,1):K[Tt]=0),Ct||(Tt=nt===1?1:3,K[Tt]&&Qu(I,K[Tt]))),P&&!Wt&&Math.abs(I.getVelocity())>(zo(P)?P:2500)&&(So(I.callbackAnimation),U?U.progress(1):So(i,vt==="reverse"?1:!nt,1))):L&&a&&!gn&&a(I)}if(Be){var H=w?$e/w.duration()*(w._caScrollDist||0):$e;ue(H+(k._isFlipped?1:0)),Be(H)}oe&&oe(-$e/w.duration()*(w._caScrollDist||0))}},I.enable=function(ye,Xe){I.enabled||(I.enabled=!0,on(N,"resize",Ho),W||on(N,"scroll",aa),le&&on(r,"refreshInit",le),ye!==!1&&(I.progress=J=0,Ue=lt=ke=ne()),Xe!==!1&&I.refresh())},I.getTween=function(ye){return ye&&he?he.tween:U},I.setPositions=function(ye,Xe,Ve,$e){if(w){var Vt=w.scrollTrigger,nt=w.duration(),Lt=Vt.end-Vt.start;ye=Vt.start+Lt*ye/nt,Xe=Vt.start+Lt*Xe/nt}I.refresh(!1,!1,{start:hm(ye,Ve&&!!I._startClamp),end:hm(Xe,Ve&&!!I._endClamp)},$e),I.update()},I.adjustPinSpacing=function(ye){if(ve&&ye){var Xe=ve.indexOf(y.d)+1;ve[Xe]=parseFloat(ve[Xe])+ye+Qt,ve[1]=parseFloat(ve[1])+ye+Qt,ka(ve)}},I.disable=function(ye,Xe){if(I.enabled&&(ye!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Xe||U&&U.pause(),z=0,we&&(we.uncache=1),le&&sn(r,"refreshInit",le),B&&(B.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!W)){for(var Ve=st.length;Ve--;)if(st[Ve].scroller===N&&st[Ve]!==I)return;sn(N,"resize",Ho),W||sn(N,"scroll",aa)}},I.kill=function(ye,Xe){I.disable(ye,Xe),U&&!Xe&&U.kill(),l&&delete Tf[l];var Ve=st.indexOf(I);Ve>=0&&st.splice(Ve,1),Ve===Dn&&Nc>0&&Dn--,Ve=0,st.forEach(function($e){return $e.scroller===I.scroller&&(Ve=1)}),Ve||Ln||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ye&&i.revert({kill:!1}),Xe||i.kill()),Oe&&[Oe,Ae,k,je].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),sl===I&&(sl=0),d&&(we&&(we.uncache=1),Ve=0,st.forEach(function($e){return $e.pin===d&&Ve++}),Ve||(we.spacer=0)),n.onKill&&n.onKill(I)},st.push(I),I.enable(!1,!1),pe&&pe(I),i&&i.add&&!me){var Ze=I.update;I.update=function(){I.update=Ze,ot.cache++,C||Fe||I.refresh()},Ie.delayedCall(.01,I.update),me=.01,C=Fe=0}else I.refresh();d&&sS()},r.register=function(n){return Ea||(Ie=n||nb(),tb()&&window.document&&r.enable(),Ea=ko),Ea},r.defaults=function(n){if(n)for(var i in n)$l[i]=n[i];return $l},r.disable=function(n,i){ko=0,st.forEach(function(a){return a[i?"kill":"disable"](n)}),sn(at,"wheel",aa),sn(At,"scroll",aa),clearInterval(Xl),sn(At,"touchcancel",Gi),sn(bt,"touchstart",Gi),Yl(sn,At,"pointerdown,touchstart,mousedown",fm),Yl(sn,At,"pointerup,touchend,mouseup",dm),au.kill(),jl(sn);for(var s=0;s<ot.length;s+=3)Kl(sn,ot[s],ot[s+1]),Kl(sn,ot[s],ot[s+2])},r.enable=function(){if(at=window,At=document,ii=At.documentElement,bt=At.body,Ie&&(vl=Ie.utils.toArray,el=Ie.utils.clamp,yf=Ie.core.context||Gi,$u=Ie.core.suppressOverwrites||Gi,Jd=at.history.scrollRestoration||"auto",Ef=at.pageYOffset||0,Ie.core.globals("ScrollTrigger",r),bt)){ko=1,Oa=document.createElement("div"),Oa.style.height="100vh",Oa.style.position="absolute",hb(),Zy(),Bt.register(Ie),r.isTouch=Bt.isTouch,Br=Bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xf=Bt.isTouch===1,on(at,"wheel",aa),$d=[at,At,ii,bt],Ie.matchMedia?(r.matchMedia=function(c){var u=Ie.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ie.addEventListener("matchMediaInit",function(){return ip()}),Ie.addEventListener("matchMediaRevert",function(){return cb()}),Ie.addEventListener("matchMedia",function(){Ds(0,1),Ys("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return eh(),eh})):console.warn("Requires GSAP 3.11.0 or later"),eh(),on(At,"scroll",aa);var n=bt.hasAttribute("style"),i=bt.style,s=i.borderTopStyle,a=Ie.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=gr(bt),en.m=Math.round(o.top+en.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(bt.setAttribute("style",""),bt.removeAttribute("style")),Xl=setInterval(gm,250),Ie.delayedCall(.5,function(){return ql=0}),on(At,"touchcancel",Gi),on(bt,"touchstart",Gi),Yl(on,At,"pointerdown,touchstart,mousedown",fm),Yl(on,At,"pointerup,touchend,mouseup",dm),vf=Ie.utils.checkPrefix("transform"),Oc.push(vf),Ea=_n(),au=Ie.delayedCall(.2,Ds).pause(),Ma=[At,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;At.hidden?(lm=c,cm=u):(lm!==c||cm!==u)&&Ho()},At,"DOMContentLoaded",Ds,at,"load",Ds,at,"resize",Ho],jl(on),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)Kl(sn,ot[l],ot[l+1]),Kl(sn,ot[l],ot[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Ju=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Xl)||(Xl=i)&&setInterval(gm,i),"ignoreMobileResize"in n&&(xf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(jl(sn)||jl(on,n.autoRefreshEvents||"none"),Z0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Hn(n),a=ot.indexOf(s),o=qs(s);~a&&ot.splice(a,o?6:2),i&&(o?Ji.unshift(at,i,bt,i,ii,i):Ji.unshift(s,i))},r.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ti(n)?Hn(n):n).getBoundingClientRect(),o=a[s?ks:Bs]*i||0;return s?a.right-o>0&&a.left+o<at.innerWidth:a.bottom-o>0&&a.top+o<at.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=Hn(n));var a=n.getBoundingClientRect(),o=a[s?ks:Bs],l=i==null?o/2:i in cu?cu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/at.innerWidth:(a.top+l)/at.innerHeight},r.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=js.killAll||[];js={},i.forEach(function(s){return s()})}},r})();Ye.version="3.13.0";Ye.saveStyles=function(r){return r?vl(r).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),yf())}}):ei};Ye.revert=function(r,e){return ip(!r,e)};Ye.create=function(r,e){return new Ye(r,e)};Ye.refresh=function(r){return r?Ho(!0):(Ea||Ye.register())&&Ds(!0)};Ye.update=function(r){return++ot.cache&&Tr(r===!0?2:0)};Ye.clearScrollMemory=ub;Ye.maxScroll=function(r,e){return Yi(r,e?Fn:en)};Ye.getScrollFunc=function(r,e){return as(Hn(r),e?Fn:en)};Ye.getById=function(r){return Tf[r]};Ye.getAll=function(){return st.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!wi};Ye.snapDirectional=np;Ye.addEventListener=function(r,e){var t=js[r]||(js[r]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(r,e){var t=js[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Ie.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&yn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return yn(s)&&(s=s(),on(Ye,"refresh",function(){return s=e.batchMax()})),vl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};var Sm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Bt.isTouch?" pinch-zoom":""):"none",e===ii&&r(bt,t)},ec={auto:1,scroll:1},uS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ie.core.getCache(s),o=_n(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ec[(l=xi(s)).overflowY]||ec[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!qs(s)&&(ec[(l=xi(s)).overflowY]||ec[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},db=function(e,t,n,i){return Bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&uS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(At,Bt.eventTypes[0],Em,!1,!0)},onDisable:function(){return sn(At,Bt.eventTypes[0],Em,!0)}})},hS=/(input|label|select|textarea)/i,Tm,Em=function(e){var t=hS.test(e.target.tagName);(t||Tm)&&(e._gsapAllow=!0,Tm=t)},fS=function(e){Ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Hn(e.target)||ii,u=Ie.core.globals().ScrollSmoother,h=u&&u.get(),f=Br&&(e.content&&Hn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=as(c,en),g=as(c,Fn),_=1,m=(Bt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,x=yn(i)?function(){return i(o)}:function(){return i||2.8},v,b,S=db(c,e.type,!0,s),M=function(){return b=!1},w=Gi,P=Gi,T=function(){l=Yi(c,en),P=el(Br?1:0,l),n&&(w=el(0,Yi(c,Fn))),v=zs},y=function(){f._gsap.y=Bo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(b){requestAnimationFrame(M);var j=Bo(o.deltaY/2),ae=P(d.v-j);if(f&&ae!==d.v+d.offset){d.offset=ae-d.v;var I=Bo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=ot.cache,Tr()}return!0}d.offset&&y(),b=!0},N,G,W,O,K=function(){T(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(te){return Br&&te.type==="touchmove"&&L()||_>1.05&&te.type!=="touchstart"||o.isGesturing||te.touches&&te.touches.length>1},e.onPress=function(){b=!1;var te=_;_=Bo((at.visualViewport&&at.visualViewport.scale||1)/m),N.pause(),te!==_&&nh(c,_>1.01?!0:n?!1:"x"),G=g(),W=d(),T(),v=zs},e.onRelease=e.onGestureStart=function(te,j){if(d.offset&&y(),!j)O.restart(!0);else{ot.cache++;var ae=x(),I,le;n&&(I=g(),le=I+ae*.05*-te.velocityX/.227,ae*=Sm(g,I,le,Yi(c,Fn)),N.vars.scrollX=w(le)),I=d(),le=I+ae*.05*-te.velocityY/.227,ae*=Sm(d,I,le,Yi(c,en)),N.vars.scrollY=P(le),N.invalidate().duration(ae).play(.01),(Br&&N.vars.scrollY>=l||I>=l-1)&&Ie.to({},{onUpdate:K,duration:ae})}a&&a(te)},e.onWheel=function(){N._ts&&N.pause(),_n()-p>1e3&&(v=0,p=_n())},e.onChange=function(te,j,ae,I,le){if(zs!==v&&T(),j&&n&&g(w(I[2]===j?G+(te.startX-te.x):g()+j-I[1])),ae){d.offset&&y();var xe=le[2]===ae,Je=xe?W+te.startY-te.y:d()+ae-le[1],ke=P(Je);xe&&Je!==ke&&(W+=ke-Je),d(ke)}(ae||j)&&Tr()},e.onEnable=function(){nh(c,n?!1:"x"),Ye.addEventListener("refresh",K),on(at,"resize",K),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){nh(c,!0),sn(at,"resize",K),Ye.removeEventListener("refresh",K),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new Bt(e),o.iOS=Br,Br&&!d()&&d(1),Br&&Ie.ticker.add(Gi),O=o._dc,N=Ie.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:fb(d,d(),function(){return N.pause()})},onUpdate:Tr,onComplete:O.vars.onComplete}),o};Ye.sort=function(r){if(yn(r))return st.sort(r);var e=at.pageYOffset||0;return Ye.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(r){return new Bt(r)};Ye.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof Bt?r:fS(r);return Pn&&Pn.target===e.target&&Pn.kill(),qs(e.target)&&(Pn=e),e};Ye.core={_getVelocityProp:uf,_inputObserver:db,_scrollers:ot,_proxies:Ji,bridge:{ss:function(){wi||Ys("scrollStart"),wi=_n()},ref:function(){return gn}}};nb()&&Ie.registerPlugin(Ye);const dS=""+new URL("services-4-yGPU2s6w.webp",import.meta.url).href,pS=""+new URL("blog-1-CMrv0Xey.avif",import.meta.url).href;var Mm="1.3.25";function pb(r,e,t){return Math.max(r,Math.min(e,t))}function mS(r,e,t){return(1-t)*r+t*e}function gS(r,e,t,n){return mS(r,e,1-Math.exp(-t*n))}function _S(r,e){return(r%e+e)%e}var bS=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=pb(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=gS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function vS(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var xS=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=vS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},mb=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const yS=100/6,Pr={passive:!1};function wm(r,e){return r===1?yS:r===2?e:1}var SS=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new mb;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Pr),this.element.addEventListener("touchstart",this.onTouchStart,Pr),this.element.addEventListener("touchmove",this.onTouchMove,Pr),this.element.addEventListener("touchend",this.onTouchEnd,Pr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Pr),this.element.removeEventListener("touchstart",this.onTouchStart,Pr),this.element.removeEventListener("touchmove",this.onTouchMove,Pr),this.element.removeEventListener("touchend",this.onTouchEnd,Pr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=wm(n,this.window.width),s=wm(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Am=r=>Math.min(1,1.001-2**(-10*r));var TS=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new bS;emitter=new mb;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:x=!0,autoRaf:v=!1,anchors:b=!1,autoToggle:S=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:P=w,stopInertiaOnNavigate:T=!1}={}){window.lenisVersion=Mm,window.lenis||(window.lenis={}),window.lenis.version=Mm,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=Am:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:x,autoRaf:v,anchors:b,autoToggle:S,allowNestedScroll:M,naiveDimensions:P,stopInertiaOnNavigate:T},this.dimensions=new xS(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new SS(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=r,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(g=f),g){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?b.left:b.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),x=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(v)?0:v)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=pb(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=Am:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,h,f,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const M=window.getComputedStyle(r);if(i.computedStyle=M,s=["auto","overlay","scroll"].includes(M.overflowX),a=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),u=["auto"].includes(M.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,o=h>d,l=f>g,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,x,v,b,S;if(_==="horizontal")m=Math.round(r.scrollLeft),p=h-d,x=e,v=s,b=o,S=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=f-g,x=t,v=a,b=l,S=u;else return!1;return!S&&(m>=p||m<=0)?!0:(x>0?m<p:m>0)&&v&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?_S(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};$.registerPlugin(Ye);const ES=performance.getEntriesByType("navigation")[0],gb=ES?.type==="reload";window.history.scrollRestoration="manual";gb&&window.scrollTo(0,0);const ci=new TS({duration:1.2,smoothWheel:!0,syncTouch:!0,touchMultiplier:1,wheelMultiplier:1,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),prevent:r=>!!r.closest(".case-study-side-bar")});ci.stop();gb?(ci.scrollTo(0,{immediate:!0,force:!0}),ci.start()):setTimeout(()=>{ci.start()},6e3);ci.on("scroll",Ye.update);$.ticker.add(r=>{ci.raf(r*1e3)});$.ticker.lagSmoothing(0);document.querySelectorAll(".active-animate, .menu-navigate-scroll a").forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const t=r.getAttribute("href");if(!t||t==="#")return;const n=document.querySelector(t);if(!n)return;const i=window.innerWidth<768;ci.scrollTo(n,{duration:i?1.5:2.5,easing:s=>1-Math.pow(1-s,4)})})});const MS=""+new URL("work-1-BTj91zts.avif",import.meta.url).href;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="180",wS=0,Rm=1,AS=2,_b=1,bb=2,dr=3,Rr=0,qn=1,ai=2,es=0,Ba=1,Cm=2,Pm=3,Dm=4,RS=5,ws=100,CS=101,PS=102,DS=103,LS=104,IS=200,US=201,FS=202,NS=203,wf=204,Af=205,OS=206,kS=207,BS=208,zS=209,HS=210,GS=211,VS=212,WS=213,XS=214,Rf=0,Cf=1,Pf=2,eo=3,Df=4,Lf=5,If=6,Uf=7,vb=0,qS=1,jS=2,ts=0,YS=1,KS=2,$S=3,xb=4,JS=5,ZS=6,QS=7,Lm="attached",eT="detached",yb=300,to=301,no=302,Ff=303,Nf=304,Au=306,io=1e3,Yr=1001,uu=1002,Nn=1003,Sb=1004,Go=1005,Sn=1006,Bc=1007,Ei=1008,tr=1009,Tb=1010,Eb=1011,yl=1012,sp=1013,Ks=1014,Fi=1015,Il=1016,ap=1017,op=1018,Sl=1020,Mb=35902,wb=35899,Ab=1021,Rb=1022,Mi=1023,Tl=1026,El=1027,lp=1028,cp=1029,Cb=1030,up=1031,hp=1033,zc=33776,Hc=33777,Gc=33778,Vc=33779,Of=35840,kf=35841,Bf=35842,zf=35843,Hf=36196,Gf=37492,Vf=37496,Wf=37808,Xf=37809,qf=37810,jf=37811,Yf=37812,Kf=37813,$f=37814,Jf=37815,Zf=37816,Qf=37817,ed=37818,td=37819,nd=37820,id=37821,rd=36492,sd=36494,ad=36495,od=36283,ld=36284,cd=36285,ud=36286,Ml=2300,wl=2301,ih=2302,Im=2400,Um=2401,Fm=2402,tT=2500,nT=0,Pb=1,hd=2,iT=3200,rT=3201,Db=0,sT=1,Gr="",Ht="srgb",Bn="srgb-linear",hu="linear",St="srgb",oa=7680,Nm=519,aT=512,oT=513,lT=514,Lb=515,cT=516,uT=517,hT=518,fT=519,fd=35044,Om="300 es",Ki=2e3,fu=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let km=1234567;const al=Math.PI/180,ro=180/Math.PI;function ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function fp(r,e){return(r%e+e)%e}function dT(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pT(r,e,t){return r!==e?(t-r)/(e-r):0}function ol(r,e,t){return(1-t)*r+t*e}function mT(r,e,t,n){return ol(r,e,1-Math.exp(-t*n))}function gT(r,e=1){return e-Math.abs(fp(r,e*2)-e)}function _T(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vT(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xT(r,e){return r+Math.random()*(e-r)}function yT(r){return r*(.5-Math.random())}function ST(r){r!==void 0&&(km=r);let e=km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TT(r){return r*al}function ET(r){return r*ro}function MT(r){return(r&r-1)===0&&r!==0}function wT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function AT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function RT(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Li(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const CT={DEG2RAD:al,RAD2DEG:ro,generateUUID:ki,clamp:ut,euclideanModulo:fp,mapLinear:dT,inverseLerp:pT,lerp:ol,damp:mT,pingpong:gT,smoothstep:_T,smootherstep:bT,randInt:vT,randFloat:xT,randFloatSpread:yT,seededRandom:ST,degToRad:TT,radToDeg:ET,isPowerOfTwo:MT,ceilPowerOfTwo:wT,floorPowerOfTwo:AT,setQuaternionFromProperEuler:RT,normalize:xt,denormalize:Li};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),M=Math.atan2(S,p*x);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S}const b=o*x;if(l=l*m+f*b,c=c*m+d*b,u=u*m+g*b,h=h*m+_*b,m===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new X,Bm=new cs;class tt{constructor(e,t,n,i,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],b=i[7],S=i[2],M=i[5],w=i[8];return s[0]=a*_+o*x+l*S,s[3]=a*m+o*v+l*M,s[6]=a*p+o*b+l*w,s[1]=c*_+u*x+h*S,s[4]=c*m+u*v+h*M,s[7]=c*p+u*b+h*w,s[2]=f*_+d*x+g*S,s[5]=f*m+d*v+g*M,s[8]=f*p+d*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sh.makeScale(e,t)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new tt;function Ib(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function PT(){const r=Al("canvas");return r.style.display="block",r}const zm={};function Rl(r){r in zm||(zm[r]=!0,console.warn(r))}function DT(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Hm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LT(){const r={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(i.r=Er(i.r),i.g=Er(i.g),i.b=Er(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(i.r=za(i.r),i.g=za(i.g),i.b=za(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gr?hu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Rl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Rl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Bn]:{primaries:e,whitePoint:n,transfer:hu,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),r}const mt=LT();function Er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function za(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let la;class IT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{la===void 0&&(la=Al("canvas")),la.width=e.width,la.height=e.height;const i=la.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=la}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Al("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Er(t[n]/255)*255):t[n]=Er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UT=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ah(i[a].image)):s.push(ah(i[a]))}else s=ah(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?IT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FT=0;const oh=new X;class cn extends ho{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Yr,i=Yr,s=Sn,a=Ei,o=Mi,l=tr,c=cn.DEFAULT_ANISOTROPY,u=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=ki(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case uu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case uu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=yb;cn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(d+1)/2,S=(p+1)/2,M=(u+f)/4,w=(h+_)/4,P=(g+m)/4;return v>b&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=M/n,s=w/n):b>S?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=M/i,s=P/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=w/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NT extends ho{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new cn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new dp(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends NT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ub extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OT extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(s,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),nc.subVectors(this.max,To),ca.subVectors(e.a,To),ua.subVectors(e.b,To),ha.subVectors(e.c,To),Dr.subVectors(ua,ca),Lr.subVectors(ha,ua),ds.subVectors(ca,ha);let t=[0,-Dr.z,Dr.y,0,-Lr.z,Lr.y,0,-ds.z,ds.y,Dr.z,0,-Dr.x,Lr.z,0,-Lr.x,ds.z,0,-ds.x,-Dr.y,Dr.x,0,-Lr.y,Lr.x,0,-ds.y,ds.x,0];return!lh(t,ca,ua,ha,nc)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,ca,ua,ha,nc))?!1:(ic.crossVectors(Dr,Lr),t=[ic.x,ic.y,ic.z],lh(t,ca,ua,ha,nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new X,new X,new X,new X,new X,new X,new X,new X],Ri=new X,tc=new Ai,ca=new X,ua=new X,ha=new X,Dr=new X,Lr=new X,ds=new X,To=new X,nc=new X,ic=new X,ps=new X;function lh(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ps.fromArray(r,s);const o=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kT=new Ai,Eo=new X,ch=new X;class rr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kT.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(ch)),this.expandByPoint(Eo.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const lr=new X,uh=new X,rc=new X,Ir=new X,hh=new X,sc=new X,fh=new X;class Ru{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uh.copy(e).add(t).multiplyScalar(.5),rc.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(uh);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rc),o=Ir.dot(this.direction),l=-Ir.dot(rc),c=Ir.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(uh).addScaledVector(rc,f),d}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const n=lr.dot(this.direction),i=lr.dot(lr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,i,s){hh.subVectors(t,e),sc.subVectors(n,e),fh.crossVectors(hh,sc);let a=this.direction.dot(fh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ir.subVectors(this.origin,e);const l=o*this.direction.dot(sc.crossVectors(Ir,sc));if(l<0)return null;const c=o*this.direction.dot(hh.cross(Ir));if(c<0||l+c>a)return null;const u=-o*Ir.dot(fh);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fa.setFromMatrixColumn(e,0).length(),s=1/fa.setFromMatrixColumn(e,1).length(),a=1/fa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BT,e,zT)}lookAt(e,t,n){const i=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ur.crossVectors(n,Jn),Ur.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ur.crossVectors(n,Jn)),Ur.normalize(),ac.crossVectors(Jn,Ur),i[0]=Ur.x,i[4]=ac.x,i[8]=Jn.x,i[1]=Ur.y,i[5]=ac.y,i[9]=Jn.y,i[2]=Ur.z,i[6]=ac.z,i[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],b=n[11],S=n[15],M=i[0],w=i[4],P=i[8],T=i[12],y=i[1],L=i[5],N=i[9],G=i[13],W=i[2],O=i[6],K=i[10],te=i[14],j=i[3],ae=i[7],I=i[11],le=i[15];return s[0]=a*M+o*y+l*W+c*j,s[4]=a*w+o*L+l*O+c*ae,s[8]=a*P+o*N+l*K+c*I,s[12]=a*T+o*G+l*te+c*le,s[1]=u*M+h*y+f*W+d*j,s[5]=u*w+h*L+f*O+d*ae,s[9]=u*P+h*N+f*K+d*I,s[13]=u*T+h*G+f*te+d*le,s[2]=g*M+_*y+m*W+p*j,s[6]=g*w+_*L+m*O+p*ae,s[10]=g*P+_*N+m*K+p*I,s[14]=g*T+_*G+m*te+p*le,s[3]=x*M+v*y+b*W+S*j,s[7]=x*w+v*L+b*O+S*ae,s[11]=x*P+v*N+b*K+S*I,s[15]=x*T+v*G+b*te+S*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,v=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,b=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,S=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,M=t*x+n*v+i*b+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=x*w,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*w,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*w,e[4]=v*w,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*w,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*w,e[8]=b*w,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*w,e[12]=S*w,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,x=l*c,v=l*u,b=l*h,S=n.x,M=n.y,w=n.z;return i[0]=(1-(_+p))*S,i[1]=(d+b)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(d-b)*M,i[5]=(1-(f+p))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(g+v)*w,i[9]=(m-x)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fa.set(i[0],i[1],i[2]).length();const a=fa.set(i[4],i[5],i[6]).length(),o=fa.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ci.copy(this);const c=1/s,u=1/a,h=1/o;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,t.setFromRotationMatrix(Ci),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ki,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Ki)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===fu)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ki,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Ki)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===fu)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fa=new X,Ci=new rt,BT=new X(0,0,0),zT=new X(1,1,1),Ur=new X,ac=new X,Jn=new X,Vm=new rt,Wm=new cs;class nr{constructor(e=0,t=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class Fb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HT=0;const Xm=new X,da=new cs,cr=new rt,oc=new X,Mo=new X,GT=new X,VT=new cs,qm=new X(1,0,0),jm=new X(0,1,0),Ym=new X(0,0,1),Km={type:"added"},WT={type:"removed"},pa={type:"childadded",child:null},dh={type:"childremoved",child:null};class Ut extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new X,t=new nr,n=new cs,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new tt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(jm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(jm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oc.copy(e):oc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Mo,oc,this.up):cr.lookAt(oc,Mo,this.up),this.quaternion.setFromRotationMatrix(cr),i&&(cr.extractRotation(i.matrixWorld),da.setFromRotationMatrix(cr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),pa.child=e,this.dispatchEvent(pa),pa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(WT),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,GT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,VT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new X(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new X,ur=new X,ph=new X,hr=new X,ma=new X,ga=new X,$m=new X,mh=new X,gh=new X,_h=new X,bh=new _t,vh=new _t,xh=new _t;class Ii{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pi.subVectors(e,t),i.cross(Pi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pi.subVectors(i,t),ur.subVectors(n,t),ph.subVectors(e,t);const a=Pi.dot(Pi),o=Pi.dot(ur),l=Pi.dot(ph),c=ur.dot(ur),u=ur.dot(ph),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hr.x),l.addScaledVector(a,hr.y),l.addScaledVector(o,hr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return bh.setScalar(0),vh.setScalar(0),xh.setScalar(0),bh.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,n),xh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bh,s.x),a.addScaledVector(vh,s.y),a.addScaledVector(xh,s.z),a}static isFrontFacing(e,t,n,i){return Pi.subVectors(n,t),ur.subVectors(e,t),Pi.cross(ur).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Pi.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ma.subVectors(i,n),ga.subVectors(s,n),mh.subVectors(e,n);const l=ma.dot(mh),c=ga.dot(mh);if(l<=0&&c<=0)return t.copy(n);gh.subVectors(e,i);const u=ma.dot(gh),h=ga.dot(gh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ma,a);_h.subVectors(e,s);const d=ma.dot(_h),g=ga.dot(_h);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ga,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return $m.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector($m,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(ma,a).addScaledVector(ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function yh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=fp(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=yh(a,s,e+1/3),this.g=yh(a,s,e),this.b=yh(a,s,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Nb[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return mt.workingToColorSpace(mn.copy(this),e),Math.round(ut(mn.r*255,0,255))*65536+Math.round(ut(mn.g*255,0,255))*256+Math.round(ut(mn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,s=mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Ht){mt.workingToColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(lc);const n=ol(Fr.h,lc.h,t),i=ol(Fr.s,lc.s,t),s=ol(Fr.l,lc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Qe;Qe.NAMES=Nb;let XT=0;class Zi extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ba,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=Af,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ba&&(n.blending=this.blending),this.side!==Rr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wf&&(n.blendSrc=this.blendSrc),this.blendDst!==Af&&(n.blendDst=this.blendDst),this.blendEquation!==ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $i extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=vb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new X,cc=new dt;let qT=0;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cc.fromBufferAttribute(this,t),cc.applyMatrix3(e),this.setXY(t,cc.x,cc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fd&&(e.usage=this.usage),e}}class Ob extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kb extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mr extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jT=0;const gi=new rt,Sh=new Ut,_a=new X,Zn=new Ai,wo=new Ai,rn=new X;class sr extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ib(e)?kb:Ob)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wo.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Zn.min,wo.min),Zn.expandByPoint(rn),rn.addVectors(Zn.max,wo.max),Zn.expandByPoint(rn)):(Zn.expandByPoint(wo.min),Zn.expandByPoint(wo.max))}Zn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rn.fromBufferAttribute(o,c),l&&(_a.fromBufferAttribute(e,c),rn.add(_a)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new X,l[P]=new X;const c=new X,u=new X,h=new X,f=new dt,d=new dt,g=new dt,_=new X,m=new X;function p(P,T,y){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),o[P].add(_),o[T].add(_),o[y].add(_),l[P].add(m),l[T].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,T=x.length;P<T;++P){const y=x[P],L=y.start,N=y.count;for(let G=L,W=L+N;G<W;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const v=new X,b=new X,S=new X,M=new X;function w(P){S.fromBufferAttribute(i,P),M.copy(S);const T=o[P];v.copy(T),v.sub(S.multiplyScalar(S.dot(T))).normalize(),b.crossVectors(M,T);const L=b.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,T=x.length;P<T;++P){const y=x[P],L=y.start,N=y.count;for(let G=L,W=L+N;G<W;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new On(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new rt,ms=new Ru,uc=new rr,Zm=new X,hc=new X,fc=new X,dc=new X,Th=new X,pc=new X,Qm=new X,mc=new X;class fn extends Ut{constructor(e=new sr,t=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Th.fromBufferAttribute(h,e),a?pc.addScaledVector(Th,u):pc.addScaledVector(Th.sub(t),u))}t.add(pc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),ms.copy(e.ray).recast(e.near),!(uc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(uc,Zm)===null||ms.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Jm.copy(s).invert(),ms.copy(e.ray).applyMatrix4(Jm),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,S=v;b<S;b+=3){const M=o.getX(b),w=o.getX(b+1),P=o.getX(b+2);i=gc(this,p,e,n,c,u,h,M,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);i=gc(this,a,e,n,c,u,h,x,v,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,S=v;b<S;b+=3){const M=b,w=b+1,P=b+2;i=gc(this,p,e,n,c,u,h,M,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,b=m+2;i=gc(this,a,e,n,c,u,h,x,v,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function YT(r,e,t,n,i,s,a,o){let l;if(e.side===qn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Rr,o),l===null)return null;mc.copy(o),mc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(mc);return c<t.near||c>t.far?null:{distance:c,point:mc.clone(),object:r}}function gc(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,hc),r.getVertexPosition(l,fc),r.getVertexPosition(c,dc);const u=YT(r,e,t,n,hc,fc,dc,Qm);if(u){const h=new X;Ii.getBarycoord(Qm,hc,fc,dc,h),i&&(u.uv=Ii.getInterpolatedAttribute(i,o,l,c,h,new dt)),s&&(u.uv1=Ii.getInterpolatedAttribute(s,o,l,c,h,new dt)),a&&(u.normal=Ii.getInterpolatedAttribute(a,o,l,c,h,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new X,materialIndex:0};Ii.getNormal(hc,fc,dc,f.normal),u.face=f,u.barycoord=h}return u}class Ul extends sr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mr(c,3)),this.setAttribute("normal",new Mr(u,3)),this.setAttribute("uv",new Mr(h,2));function g(_,m,p,x,v,b,S,M,w,P,T){const y=b/w,L=S/P,N=b/2,G=S/2,W=M/2,O=w+1,K=P+1;let te=0,j=0;const ae=new X;for(let I=0;I<K;I++){const le=I*L-G;for(let xe=0;xe<O;xe++){const Je=xe*y-N;ae[_]=Je*x,ae[m]=le*v,ae[p]=W,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=M>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(xe/w),h.push(1-I/P),te+=1}}for(let I=0;I<P;I++)for(let le=0;le<w;le++){const xe=f+le+O*I,Je=f+le+O*(I+1),ke=f+(le+1)+O*(I+1),Se=f+(le+1)+O*I;l.push(xe,Je,Se),l.push(Je,ke,Se),j+=6}o.addGroup(d,j,T),d+=j,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=so(r[t]);for(const i in n)e[i]=n[i]}return e}function KT(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Bb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const $T={clone:so,merge:Cn};var JT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JT,this.fragmentShader=ZT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=KT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zb extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new X,eg=new dt,tg=new dt;class vn extends zb{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,eg,tg),t.subVectors(tg,eg)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(al*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ba=-90,va=1;class QT extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(ba,va,e,t);i.layers=this.layers,this.add(i);const s=new vn(ba,va,e,t);s.layers=this.layers,this.add(s);const a=new vn(ba,va,e,t);a.layers=this.layers,this.add(a);const o=new vn(ba,va,e,t);o.layers=this.layers,this.add(o);const l=new vn(ba,va,e,t);l.layers=this.layers,this.add(l);const c=new vn(ba,va,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hb extends cn{constructor(e=[],t=to,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eE extends $s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hb(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ul(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:es});s.uniforms.tEquirect.value=t;const a=new fn(i,s),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Sn),new QT(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Kr extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pp extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fd,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new X;class mp{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ng=new X,ig=new _t,rg=new _t,iE=new X,sg=new rt,_c=new X,Mh=new rr,ag=new rt,wh=new Ru;class rE extends fn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lm,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_c),this.boundingBox.expandByPoint(_c)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_c),this.boundingSphere.expandByPoint(_c)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mh.copy(this.boundingSphere),Mh.applyMatrix4(i),e.ray.intersectsSphere(Mh)!==!1&&(ag.copy(i).invert(),wh.copy(e.ray).applyMatrix4(ag),!(this.boundingBox!==null&&wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ig.fromBufferAttribute(i.attributes.skinIndex,e),rg.fromBufferAttribute(i.attributes.skinWeight,e),ng.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=rg.getComponent(s);if(a!==0){const o=ig.getComponent(s);sg.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(iE.copy(ng).applyMatrix4(sg),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gb extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vb extends cn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Nn,u=Nn,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const og=new rt,sE=new rt;class gp{constructor(e=[],t=[]){this.uuid=ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:sE;og.multiplyMatrices(o,t[s]),og.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new gp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vb(t,e,e,Mi,Fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Gb),this.bones.push(a),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class dd extends On{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xa=new rt,lg=new rt,bc=[],cg=new Ai,aE=new rt,Ao=new fn,Ro=new rr;class oE extends fn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,aE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xa),cg.copy(e.boundingBox).applyMatrix4(xa),this.boundingBox.union(cg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xa),Ro.copy(e.boundingSphere).applyMatrix4(xa),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),e.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xa),lg.multiplyMatrices(n,xa),Ao.matrixWorld=lg,Ao.raycast(e,bc);for(let a=0,o=bc.length;a<o;a++){const l=bc[a];l.instanceId=s,l.object=this,t.push(l)}bc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vb(new Float32Array(i*this.count),i,this.count,lp,Fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ah=new X,lE=new X,cE=new tt;class Es{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ah.subVectors(n,t).cross(lE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ah),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cE.getNormalMatrix(e),i=this.coplanarPoint(Ah).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new rr,uE=new dt(.5,.5),vc=new X;class _p{constructor(e=new Es,t=new Es,n=new Es,i=new Es,s=new Es,a=new Es){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],x=s[12],v=s[13],b=s[14],S=s[15];if(i[0].setComponents(c-a,d-u,p-g,S-x).normalize(),i[1].setComponents(c+a,d+u,p+g,S+x).normalize(),i[2].setComponents(c+o,d+h,p+_,S+v).normalize(),i[3].setComponents(c-o,d-h,p-_,S-v).normalize(),n)i[4].setComponents(l,f,m,b).normalize(),i[5].setComponents(c-l,d-f,p-m,S-b).normalize();else if(i[4].setComponents(c-l,d-f,p-m,S-b).normalize(),t===Ki)i[5].setComponents(c+l,d+f,p+m,S+b).normalize();else if(t===fu)i[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=uE.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vc.x=i.normal.x>0?e.max.x:e.min.x,vc.y=i.normal.y>0?e.max.y:e.min.y,vc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wb extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new X,pu=new X,ug=new rt,Co=new Ru,xc=new rr,Rh=new X,hg=new X;class bp extends Ut{constructor(e=new sr,t=new Wb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)du.fromBufferAttribute(t,i-1),pu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=du.distanceTo(pu);e.setAttribute("lineDistance",new Mr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(i),xc.radius+=s,e.ray.intersectsSphere(xc)===!1)return;ug.copy(i).invert(),Co.copy(e.ray).applyMatrix4(ug);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),v=yc(this,e,Co,l,p,x,_);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=yc(this,e,Co,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=yc(this,e,Co,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=yc(this,e,Co,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yc(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(du.fromBufferAttribute(o,i),pu.fromBufferAttribute(o,s),t.distanceSqToSegment(du,pu,Rh,hg)>n)return;Rh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Rh);if(!(c<e.near||c>e.far))return{distance:c,point:hg.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const fg=new X,dg=new X;class hE extends bp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)fg.fromBufferAttribute(t,i),dg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fg.distanceTo(dg);e.setAttribute("lineDistance",new Mr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fE extends bp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xb extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pg=new rt,pd=new Ru,Sc=new rr,Tc=new X;class dE extends Ut{constructor(e=new sr,t=new Xb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(i),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;pg.copy(i).invert(),pd.copy(e.ray).applyMatrix4(pg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Tc.fromBufferAttribute(h,m),mg(Tc,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Tc.fromBufferAttribute(h,g),mg(Tc,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function mg(r,e,t,n,i,s,a){const o=pd.distanceSqToPoint(r);if(o<t){const l=new X;pd.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qb extends cn{constructor(e,t,n=Ks,i,s,a,o=Nn,l=Nn,c,u=Tl,h=1){if(u!==Tl&&u!==El)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jb extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ns extends sr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*f-a;for(let v=0;v<c;v++){const b=v*h-s;g.push(b,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,b=x+c*(p+1),S=x+1+c*(p+1),M=x+1+c*p;d.push(v,b,M),d.push(b,S,M)}this.setIndex(d),this.setAttribute("position",new Mr(g,3)),this.setAttribute("normal",new Mr(_,3)),this.setAttribute("uv",new Mr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class vp extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Db,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ar extends vp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pE extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mE extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ec(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function gE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _E(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gg(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Yb(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Fl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bE extends Fl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Im,endingEnd:Im}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Um:s=e,o=2*t-n;break;case Fm:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Um:a=e,l=2*n-t;break;case Fm:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,b=d*m-d*_;for(let S=0;S!==o;++S)s[S]=p*a[u+S]+x*a[c+S]+v*a[l+S]+b*a[h+S];return s}}class vE extends Fl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class xE extends Fl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ec(t,this.TimeBufferType),this.values=Ec(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ec(e.times,Array),values:Ec(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ml:t=this.InterpolantFactoryMethodDiscrete;break;case wl:t=this.InterpolantFactoryMethodLinear;break;case ih:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ml;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&gE(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ih,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bi.prototype.ValueTypeName="";Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=wl;class fo extends Bi{constructor(e,t,n){super(e,t,n)}}fo.prototype.ValueTypeName="bool";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=Ml;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class Kb extends Bi{constructor(e,t,n,i){super(e,t,n,i)}}Kb.prototype.ValueTypeName="color";class ao extends Bi{constructor(e,t,n,i){super(e,t,n,i)}}ao.prototype.ValueTypeName="number";class yE extends Fl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)cs.slerpFlat(s,0,a,c-o,a,c,l);return s}}class oo extends Bi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new yE(this.times,this.values,this.getValueSize(),e)}}oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;class po extends Bi{constructor(e,t,n){super(e,t,n)}}po.prototype.ValueTypeName="string";po.prototype.ValueBufferType=Array;po.prototype.DefaultInterpolation=Ml;po.prototype.InterpolantFactoryMethodLinear=void 0;po.prototype.InterpolantFactoryMethodSmooth=void 0;class lo extends Bi{constructor(e,t,n,i){super(e,t,n,i)}}lo.prototype.ValueTypeName="vector";class SE{constructor(e="",t=-1,n=[],i=tT){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(EE(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Bi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=_E(l);l=gg(l,1,u),c=gg(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ao(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Yb(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let x=0;x!==f[g].morphTargets.length;++x){const v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new ao(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(lo,d+".position",f,"pos",i),n(oo,d+".quaternion",f,"rot",i),n(lo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function TE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ao;case"vector":case"vector2":case"vector3":case"vector4":return lo;case"color":return Kb;case"quaternion":return oo;case"bool":case"boolean":return fo;case"string":return po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function EE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=TE(r.type);if(r.times===void 0){const t=[],n=[];Yb(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const xr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ME{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const wE=new ME;class mo{constructor(e){this.manager=e!==void 0?e:wE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const fr={};class AE extends Error{constructor(e,t){super(e),this.response=t}}class $b extends mo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fr[e]!==void 0){fr[e].push({onLoad:t,onProgress:n,onError:i});return}fr[e]=[],fr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=fr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:b})=>{if(v)p.close();else{_+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let M=0,w=u.length;M<w;M++){const P=u[M];P.onProgress&&P.onProgress(S)}p.enqueue(b),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new AE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{xr.add(`file:${e}`,c);const u=fr[e];delete fr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=fr[e];if(u===void 0)throw this.manager.itemError(e),c;delete fr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ya=new WeakMap;class RE extends mo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ya.get(a);h===void 0&&(h=[],ya.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=Al("img");function l(){u(),t&&t(this);const h=ya.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}ya.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),xr.remove(`image:${e}`);const f=ya.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}ya.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xr.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Jb extends mo{constructor(e){super(e)}load(e,t,n,i){const s=new cn,a=new RE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Nl extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class CE extends Nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ch=new rt,_g=new X,bg=new X;class xp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=tr,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_g.setFromMatrixPosition(e.matrixWorld),t.position.copy(_g),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),Ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PE extends xp{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ro*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class DE extends Nl{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new PE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vg=new rt,Po=new X,Ph=new X;class LE extends xp{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Po.setFromMatrixPosition(e.matrixWorld),n.position.copy(Po),Ph.copy(n.position),Ph.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ph),n.updateMatrixWorld(),i.makeTranslation(-Po.x,-Po.y,-Po.z),vg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vg,n.coordinateSystem,n.reversedDepth)}}class Cu extends Nl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new LE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pu extends zb{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class IE extends xp{constructor(){super(new Pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new IE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UE extends Nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ll{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Dh=new WeakMap;class FE extends mo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xr.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{if(Dh.has(a)===!0)i&&i(Dh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return xr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Dh.set(l,c),xr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});xr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class NE extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yp="\\[\\]\\.:\\/",kE=new RegExp("["+yp+"]","g"),Sp="[^"+yp+"]",BE="[^"+yp.replace("\\.","")+"]",zE=/((?:WC+[\/:])*)/.source.replace("WC",Sp),HE=/(WCOD+)?/.source.replace("WCOD",BE),GE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sp),VE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sp),WE=new RegExp("^"+zE+HE+GE+VE+"$"),XE=["material","materials","bones","map"];class qE{constructor(e,t,n){const i=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kE,"")}static parseTrackName(e){const t=WE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);XE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=qE;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function xg(r,e,t,n){const i=jE(n);switch(t){case Ab:return r*e;case lp:return r*e/i.components*i.byteLength;case cp:return r*e/i.components*i.byteLength;case Cb:return r*e*2/i.components*i.byteLength;case up:return r*e*2/i.components*i.byteLength;case Rb:return r*e*3/i.components*i.byteLength;case Mi:return r*e*4/i.components*i.byteLength;case hp:return r*e*4/i.components*i.byteLength;case zc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:case zf:return Math.max(r,16)*Math.max(e,8)/4;case Of:case Bf:return Math.max(r,8)*Math.max(e,8)/2;case Hf:case Gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case qf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $f:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rd:case sd:case ad:return Math.ceil(r/4)*Math.ceil(e/4)*16;case od:case ld:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cd:case ud:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jE(r){switch(r){case tr:case Tb:return{byteLength:1,components:1};case yl:case Eb:case Il:return{byteLength:2,components:1};case ap:case op:return{byteLength:2,components:4};case Ks:case sp:case Fi:return{byteLength:4,components:1};case Mb:case wb:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);$.registerPlugin(uo,Ye);const YE=new Jt(".heading-fall",{types:"lines"}),KE=new Jt(".fall-para",{types:"lines"});YE.lines.forEach(r=>{r.innerHTML=`<span>${r.innerHTML}</span>`});KE.lines.forEach(r=>{r.innerHTML=`<span>${r.innerHTML}</span>`});const Zb=document.querySelector(".services-heading"),$E=document.querySelector(".scroll-downn"),JE=uo.getState(Zb);$E.appendChild(Zb);uo.from(JE,{duration:1,ease:"none",absolute:!0,scrollTrigger:{trigger:".services-project",start:"top 60%",end:"center 50%",scrub:!0}});const Qb=document.querySelector(".services-heading .breaks"),ZE=Qb.textContent.split("");Qb.innerHTML=ZE.map(r=>`<span class="services-char">${r}</span>`).join("");const ev=$.timeline({scrollTrigger:{trigger:".box-section-ups",start:"top top",end:"100% top",scrub:!0}});ev.to(".services-char",{fontSize:"19rem",stagger:.1,ease:"none"});ev.to(".breaks",{transform:"translateX(0%)",ease:"none"},"0");function tv(r){document.querySelectorAll(r).forEach(e=>{const t=e.textContent;e.innerHTML="",t.split("").forEach(n=>{const i=document.createElement("span");i.textContent=n===" "?" ":n,e.appendChild(i)})})}tv(".word1");tv(".points");$.set(".word1 span, .points span",{y:"120%"});const nv=document.querySelectorAll(".svg-strokee svg *");nv.forEach(r=>{if(typeof r.getTotalLength=="function"){const e=r.getTotalLength();$.set(r,{strokeDasharray:e,strokeDashoffset:e})}});const fi=$.timeline({scrollTrigger:{trigger:".services-project",start:"top top",end:"+=690%",scrub:.7,pin:!0,anticipatePin:1,invalidateOnRefresh:!0}});fi.to(nv,{strokeDashoffset:0,duration:3,stagger:.11},"0");fi.to(".services-char",{y:"-130%",delay:.5,stagger:.1});fi.to(".services-change-1 .word1:nth-child(1) span",{y:"0%",stagger:.03,duration:1});fi.to(".set-1 .points span",{y:"0%",stagger:.04,duration:.6},"<");fi.to(".services-change-1 .word1:nth-child(1) span",{y:"-120%",stagger:.02,duration:1},"+=0.2");fi.to(".set-1 .points span",{y:"-120%",stagger:.02,duration:1},"<");fi.to(".services-change-1 .word1:nth-child(2) span",{y:"0%",stagger:.03,ease:"power4.out",duration:.6});fi.to(".set-2 .points span",{y:"0%",stagger:.04,ease:"power4.out",duration:.6},"<");fi.to(".another-fall",{y:"0%",stagger:.04,duration:2});fi.to(".another-fall",{scale:1,width:"100vw",height:"100vh",stagger:.04,duration:.6});fi.to(".paper-tear img",{scale:1,stagger:.04,duration:.6});fi.to(".fall-para .line span",{y:"0%",stagger:.04,duration:.6},"18");fi.to(".heading-fall .line span",{y:"0%",stagger:.04,duration:.6},"18");const iv=$.timeline({scrollTrigger:{trigger:".services-project",start:"top top",end:"700% bottom",scrub:1,invalidateOnRefresh:!0}});iv.to(".uiux",{clipPath:"inset(0% 0% 0% 0%)",stagger:.08,ease:"power3.out"},0);iv.fromTo(".uiux img",{yPercent:40},{yPercent:-40,stagger:.08,ease:"none"},0);const rv=[{title:"Designing Through Motion",date:"June 12, 2026",desc:"Motion is more than animation—it is a storytelling tool that transforms ordinary interfaces into memorable digital experiences. Every transition, hover effect, and scroll interaction guides the user's attention while creating rhythm, emotion, and clarity. By carefully balancing timing, easing, and visual hierarchy, designers can make products feel intuitive, immersive, and alive. Thoughtful motion not only enhances usability but also builds stronger emotional connections between users and digital products, turning simple interactions into engaging journeys that leave a lasting impression.",author:"MEER MOHSIN",img:dS},{title:"The Power of Cinematic Interfaces",date:"May 28, 2026",desc:"Cinematic interfaces combine visual storytelling with modern web technology to create experiences that feel immersive from the very first interaction. Through the use of dramatic typography, layered depth, lighting, subtle camera movement, smooth transitions, and atmospheric effects, designers can evoke emotion while guiding users naturally through content. Rather than simply displaying information, cinematic design creates anticipation, curiosity, and engagement, allowing every scroll and interaction to feel like a carefully directed scene in a film.",author:"MEER MOHSIN",img:pS},{title:"Crafting Emotion With Color",date:"April 18, 2026",desc:"Color plays a powerful role in shaping perception, influencing mood, and reinforcing brand identity. Beyond aesthetics, every shade communicates emotion, builds trust, and directs user attention throughout an interface. Understanding color psychology allows designers to create experiences that feel calm, energetic, luxurious, or bold depending on the intended message. When combined with thoughtful typography, contrast, spacing, and motion, color becomes a silent language that enhances usability while creating unforgettable visual experiences.",author:"MEER MOHSIN",img:MS}],sv=document.querySelectorAll(".card-1");sv.forEach((r,e)=>{const t=r.querySelector("img");t.src=rv[e].img});const is=document.querySelector(".modal-blogs"),QE=document.querySelector(".content-blogs h1"),eM=document.querySelector(".Date-blog"),tM=document.querySelector(".content-blogs p"),nM=document.querySelector(".by-who"),iM=document.querySelector(".modal-blogs .image-blog img");sv.forEach((r,e)=>{r.addEventListener("click",()=>{const t=rv[e];QE.textContent=t.title,eM.textContent=t.date,tM.textContent=t.desc,nM.textContent=t.author,iM.src=t.img,aM()})});let Ha=!1;const Cl=document.querySelector(".close-sidebar-blog");let Tp=()=>{};if(window.matchMedia("(hover: hover) and (pointer: fine)").matches){const r=$.quickTo(Cl,"x",{duration:.3,ease:"power3.out"}),e=$.quickTo(Cl,"y",{duration:.3,ease:"power3.out"});Tp=t=>{r(t.clientX),e(t.clientY)}}function rM(){$.to(Cl,{scale:1,opacity:1,duration:.4,ease:"back.out(1.7)"}),window.addEventListener("mousemove",Tp)}function sM(){$.to(Cl,{scale:0,opacity:0,duration:.3,ease:"power3.in"}),window.removeEventListener("mousemove",Tp)}Cl.addEventListener("click",Ep);function aM(){if(Ha)return;Ha=!0,ci.stop(),$.killTweensOf(is),$.killTweensOf(".modal-blogs .image-blog img"),$.set(is,{pointerEvents:"all",clipPath:"inset(50% 50% 50% 50%)",rotate:-10,scale:.7,opacity:0}),$.set(".modal-blogs .image-blog img",{clipPath:"inset(100% 0 0 0)"});const r=$.timeline({onComplete:()=>{Ha=!1}});r.to(is,{clipPath:"inset(0% 0% 0% 0%)",rotate:0,scale:1,opacity:1,duration:1.6,ease:"power4.inOut"}),r.from(".Date-blog",{y:20,opacity:0,duration:.6},"-=0.8"),r.from(".content-blogs h1",{y:40,opacity:0,duration:.8},"-=0.6"),r.from(".content-blogs p",{y:40,opacity:0,duration:.8},"-=0.6"),r.from(".by-who",{y:20,opacity:0,duration:.6},"-=0.5"),r.to(".modal-blogs .image-blog img",{clipPath:"inset(0% 0 0 0)",duration:1.2,ease:"power4.out"},"-=1"),rM()}function Ep(){if(Ha)return;Ha=!0,sM(),$.killTweensOf(is),$.killTweensOf(".modal-blogs .image-blog img"),ci.start();const r=$.timeline({onComplete:()=>{$.set(is,{pointerEvents:"none",opacity:0,clipPath:"inset(50% 50% 50% 50%)",rotate:-10,scale:.7}),$.set(".modal-blogs .image-blog img",{clipPath:"inset(100% 0 0 0)"}),Ha=!1}});r.to(".modal-blogs .image-blog img",{clipPath:"inset(100% 0 0 0)",duration:.6,ease:"power4.in"}),r.to(is,{clipPath:"inset(50% 50% 50% 50%)",rotate:-10,scale:.7,opacity:0,duration:1,ease:"power4.inOut"},"-=0.3")}is.addEventListener("click",r=>{r.target===is&&Ep()});document.addEventListener("keydown",r=>{r.key==="Escape"&&Ep()});const oM=document.getElementById("contactopen"),mu=document.querySelector(".modal-contact-us"),lM=document.querySelector(".close-sidebar-contact");let gu=!1;function cM(){gu||(gu=!0,ci.stop(),$.set(mu,{visibility:"visible"}),$.fromTo(mu,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.2,ease:"power4.inOut"}),$.from(".modal-contact-us h1, .modal-contact-us .cta-footer, .modal-contact-us form",{y:60,opacity:0,stagger:.08,duration:.8,delay:.35,ease:"power3.out"}))}const Lh=document.querySelector("form");Lh.addEventListener("submit",async r=>{r.preventDefault();const e=new FormData(Lh);try{(await(await fetch("https://api.web3forms.com/submit",{method:"POST",body:e})).json()).success?(av(),Lh.reset(),console.log("Message sent!")):alert("Something went wrong. Please try again.")}catch(t){console.error(t),alert("Network error.")}});function av(r){if(!gu){r&&r();return}gu=!1,ci.start(),$.to(mu,{clipPath:"inset(0% 0% 100% 0%)",duration:1,ease:"power4.inOut",onComplete(){$.set(mu,{visibility:"hidden"}),r&&r()}})}oM.addEventListener("click",cM);lM.addEventListener("click",av);const uM=document.querySelector(".pictures-services");if(window.innerWidth>768){let r=window.innerWidth/2,e=window.innerHeight/2,t=r,n=e;const i=.12;window.addEventListener("mousemove",s=>{t=s.clientX,n=s.clientY}),$.ticker.add(()=>{r+=(t-r)*i,e+=(n-e)*i;const s=r-window.innerWidth/2,a=e-window.innerHeight/2,o=$.utils.mapRange(0,window.innerWidth,-45,45,r),l=$.utils.mapRange(0,window.innerHeight,25,-25,e);$.set(uM,{x:s,y:a,rotationX:l,rotationY:o,transformPerspective:1200,transformOrigin:"center center",force3D:!0})})}const ov=$.to(".logo-card",{rotationY:"+=360",duration:8,ease:"none",repeat:-1}),lv=document.querySelector(".logo-card");lv.addEventListener("mouseenter",()=>{$.to(ov,{timeScale:6,duration:.4,ease:"power3.out"})});lv.addEventListener("mouseleave",()=>{$.to(ov,{timeScale:1,duration:1.2,ease:"power3.out"})});const Sa=document.querySelector(".custom-cursor");Sa&&window.innerWidth>800&&(window.addEventListener("mousemove",r=>{Sa.style.left=`${r.clientX}px`,Sa.style.top=`${r.clientY}px`,Sa.style.opacity="1"}),window.addEventListener("mouseleave",()=>{Sa.style.opacity="0"}),window.addEventListener("mouseenter",()=>{Sa.style.opacity="1"}));$.registerPlugin(Ye);new Jt(".sticky-text",{types:"words"});let yg=window.scrollY,Sg=0;const hM=document.querySelectorAll(".plus-rotate img");function fM(){const r=window.scrollY,e=r-yg;Sg+=e*.3,hM.forEach(t=>{t.style.transform=`rotate(${Sg}deg)`}),yg=r}window.addEventListener("scroll",fM);const cv=new Jt(".cinematic-text",{types:"words"});$.set(cv.words,{opacity:0,y:50,filter:"blur(2px)",transformOrigin:"50% 100%",willChange:"transform, opacity, filter"});$.to(cv.words,{opacity:1,y:0,skewY:0,filter:"blur(0px)",duration:3,ease:"power4.out",stagger:{each:.05,from:"random"},scrollTrigger:{trigger:".cinematic-text",start:"top 85%",once:!0},clearProps:"willChange"});document.querySelectorAll(".facts-box").forEach((r,e)=>{const t=new Jt(r.querySelector(".numbers-facts"),{types:"chars"}),n=new Jt(r.querySelector(".para-facts"),{types:"words"});$.set(t.chars,{opacity:0,y:50,filter:"blur(4px)"}),$.set(n.words,{opacity:0,y:20,filter:"blur(4px)"});const i=$.timeline({scrollTrigger:{trigger:r,start:"top center",end:"bottom bottom",once:!0}});i.to(t.chars,{opacity:1,y:0,filter:"blur(0px)",duration:1.4,ease:"expo.out",stagger:{each:.04,from:"random"}}),i.to(n.words,{opacity:1,y:0,filter:"blur(0px)",duration:1,ease:"power4.out",stagger:{each:.05,from:"random"}},"-=0.8")});const Tg=""+new URL("am-1-BIjNy7iY.avif",import.meta.url).href,dM=""+new URL("am-2-DaTuBBcx.avif",import.meta.url).href,pM=""+new URL("am-3-Cv_1ZLnk.avif",import.meta.url).href,mM=""+new URL("am-4-Dus3GooU.avif",import.meta.url).href,Eg=""+new URL("az-1-Db8CDHkk.avif",import.meta.url).href,gM=""+new URL("az-2-B912Xw64.avif",import.meta.url).href,_M=""+new URL("az-3-D6ELjZFd.avif",import.meta.url).href,bM=""+new URL("az-4-MXWywiyg.avif",import.meta.url).href,Mg=""+new URL("cod-1-BJJ7YGOj.avif",import.meta.url).href,vM=""+new URL("cod-2-BAWus1hG.avif",import.meta.url).href,xM=""+new URL("cod-3-YK8U_ZWI.avif",import.meta.url).href,yM=""+new URL("cod-4-mvruXmh-.avif",import.meta.url).href,wg=""+new URL("chat-1-CghAxhtK.avif",import.meta.url).href,SM=""+new URL("chat-2-DAJGtH2e.avif",import.meta.url).href,TM=""+new URL("chat-3-CtDUcGu8.avif",import.meta.url).href,Ag=""+new URL("fi-1-BboASce_.avif",import.meta.url).href,EM=""+new URL("fi-2-CUufouXY.avif",import.meta.url).href,MM=""+new URL("f1-3-CGl8SK0z.avif",import.meta.url).href;$.registerPlugin(Ye);const wM=[{title:"CODENARTS",desc:"A bold creative agency website featuring futuristic Golden and purple visuals, seamless animations, and immersive storytelling."},{title:"AZ-DIGITAL-VENTURES",desc:"A bold digital agency website showcasing premium branding, striking typography, and conversion-focused services with a modern editorial aesthetic."},{title:"AMRON",desc:"A futuristic creative agency concept featuring bold 3D visuals, cinematic motion, and a premium digital aesthetic that emphasizes storytelling and visual impact."},{title:"CHATONE",desc:"A clean, light-themed messaging app designed for effortless conversations, real-time communication, and an intuitive user experience."},{title:"FINANCE",desc:"A futuristic finance platform combining glowing green visuals, intuitive dashboards, and seamless banking for modern users."}],Ol=$.utils.toArray(".step"),Hs=Ol.length,Ls=document.querySelector(".steps-overlay-bg-change img"),uv=document.querySelector(".text-chnage-on-steps"),Ih=uv.querySelector("h1"),Uh=uv.querySelector("p"),hv=document.querySelector(".circle-steps circle"),AM=document.querySelector(".circle-steps h1"),RM=35,md=2*Math.PI*RM;$.set(hv,{strokeDasharray:md,strokeDashoffset:md});function Mp(r){return r===0?{top:"25%",scale:1,opacity:1,pointerEvents:"auto"}:r===-1?{top:"-10%",scale:.3,opacity:.4,pointerEvents:"none"}:r<=-2?{top:"-25%",scale:0,opacity:0,pointerEvents:"none"}:r===1?{top:"60%",scale:.3,opacity:.4,pointerEvents:"none"}:{top:"80%",scale:.1,opacity:.1,pointerEvents:"none"}}Ol.forEach((r,e)=>{$.set(r,{...Mp(e),zIndex:Hs-e})});let Vo=!1,Rg=-1;function CM(r){if(r===Rg)return;Rg=r;const e=Ol[r]?.querySelector("img");e&&$.to(Ls,{opacity:0,duration:.25,overwrite:"auto",onComplete:()=>{Ls.src=e.src,Vo&&$.to(Ls,{opacity:1,duration:.6,overwrite:"auto"})}})}let Cg=-1,Mc;function PM(r){if(r===Cg)return;Cg=r;const e=wM[r];if(!e)return;Mc&&Mc.kill(),Ih.innerHTML="",Uh.innerHTML="",e.title.split(" ").forEach(i=>{const s=document.createElement("span");s.className="word",s.textContent=i,Ih.appendChild(s)}),e.desc.split(" ").forEach(i=>{const s=document.createElement("span");s.className="word",s.textContent=i,Uh.appendChild(s)});const t=Ih.querySelectorAll(".word"),n=Uh.querySelectorAll(".word");$.set([...t,...n],{y:40,opacity:0}),Mc=$.timeline(),Mc.to(t,{y:0,opacity:1,stagger:.035,duration:.45,ease:"power2.out"}).to(n,{y:0,opacity:1,stagger:.018,duration:.35,ease:"power2.out"},"-=0.2")}const DM=$.timeline({scrollTrigger:{trigger:".container",start:"top top",end:"+="+Hs*100+"%",scrub:.15,pin:!0,onEnter(){Vo=!0,$.to(Ls,{opacity:1,duration:.5,overwrite:"auto"})},onEnterBack(){Vo=!0,$.to(Ls,{opacity:1,duration:.5,overwrite:"auto"})},onLeave(){Vo=!1,$.to(Ls,{opacity:0,duration:.5,overwrite:"auto"})},onLeaveBack(){Vo=!1,$.to(Ls,{opacity:0,duration:.5,overwrite:"auto"})},onUpdate(r){const e=Math.min(r.progress*Hs,Hs-1),t=Math.floor(e),n=e-t;Ol.forEach((i,s)=>{const a=s-t;$.to(i,{...Mp(a),duration:.6,ease:"power3.out",overwrite:!0})}),CM(t),PM(t),hv.style.strokeDashoffset=md*(1-n),AM.innerText=String(t+1).padStart(2,"0")}}});for(let r=0;r<Hs;r++)Ol.forEach((e,t)=>{const n=t-r;let i=Mp(n);t===Hs-1&&n===0&&(i={...i,width:"45vw",height:"50vh"}),t===Hs-1&&n!==0&&(i={...i,width:"45vw",height:"50vh"}),DM.to(e,{...i,ease:"none",duration:1},r)});const Ga=document.querySelector(".circle-follow-view"),LM=document.querySelectorAll(".step");let Wc=window.innerWidth>800;function fv(r){const e=r.clientX,t=r.clientY;Ga.style.transform=`translate(${e-Ga.offsetWidth/2}px, ${t-Ga.offsetHeight/2}px)`}function dv(){window.addEventListener("mousemove",fv),LM.forEach(r=>{r.addEventListener("mouseenter",()=>{$.to(Ga,{opacity:1,duration:.4,ease:"power2.out"})}),r.addEventListener("mouseleave",()=>{$.to(Ga,{opacity:0,duration:.6,ease:"power2.out"})})})}function pv(){window.removeEventListener("mousemove",fv),Ga.style.opacity=0}Wc?dv():pv();window.addEventListener("resize",()=>{const r=window.innerWidth>800;r&&!Wc&&dv(),!r&&Wc&&pv(),Wc=r});document.querySelector(".case-study-side-bar");$.to(".image-hero-side img",{clipPath:"inset(0% 0% 0% 0%)",duration:1.2,ease:"power3.out"});const Va=document.querySelector(".close-sidebar"),IM=document.querySelectorAll(".case-study-side-bar");let Xc=window.innerWidth>800;function mv(r){const e=r.clientX,t=r.clientY;Va.style.transform=`translate(${e-Va.offsetWidth/2}px, ${t-Va.offsetHeight/2}px)`}function gv(){window.addEventListener("mousemove",mv),IM.forEach(r=>{r.addEventListener("mouseenter",UM),r.addEventListener("mouseleave",FM)})}function _v(){window.removeEventListener("mousemove",mv),Va.style.opacity=0}function UM(){Va.style.opacity=1}function FM(){Va.style.opacity=0}Xc?gv():_v();window.addEventListener("resize",()=>{const r=window.innerWidth>800;r&&!Xc&&gv(),!r&&Xc&&_v(),Xc=r});const ln=document.querySelector(".case-study-side-bar"),NM=ln.querySelector(".close-sidebar"),OM=document.querySelectorAll(".step"),Pg=ln.querySelector(".image-hero-side"),kM=ln.querySelector(".image-bg-hero img"),Dg=ln.querySelector(".sidebar-h1"),Lg=ln.querySelector(".sidebar-date"),Ig=ln.querySelector(".sidebar-p"),Ug=ln.querySelector(".project-tags"),Fg=ln.querySelector(".gallery-grid"),BM=ln.querySelector(".role-list"),zM=[{img:Mg,bgImg:Mg,gallery:[vM,xM,yM],date:"June 15, 2023",title:"CODENARTS",desc:"CODENARTS is a cinematic creative agency website built to deliver an immersive browsing experience. I designed and developed the project using HTML, CSS, JavaScript, GSAP, Three.js, and Spline. The website combines smooth animations, interactive 3D elements, and modern UI to create a premium digital experience.",tags:["Three.js","Spline","GSAP","HTML","CSS","JavaScript"],role:["UI/UX Design","Front-End Development","Three.js Development","Spline Integration","GSAP Animations","Responsive Development"]},{img:Eg,bgImg:Eg,gallery:[gM,_M,bM],date:"January 08, 2024",title:"AZ DIGITAL VENTURES",desc:"AZ Digital Ventures is a modern creative agency website designed in Figma and developed using HTML, CSS, JavaScript, and GSAP. The project focuses on clean layouts, smooth scroll animations, and responsive interactions to create a polished user experience across all devices.",tags:["Figma","HTML","CSS","JavaScript","GSAP","Responsive Design"],role:["UI/UX Design","Figma Design","Front-End Development","GSAP Animations","Responsive Development"]},{img:Tg,bgImg:Tg,gallery:[dM,pM,mM],date:"March 12, 2026",title:"AMRON",desc:"AMRON is a futuristic creative agency concept focused entirely on visual design. The interface was designed in Figma with a custom 3D hero scene created in Spline, combining bold typography, premium colors, and immersive visuals to establish a strong brand identity.",tags:["UI Design","Figma","Spline","3D","Creative Direction"],role:["UI Design","Visual Design","Figma Design","Spline 3D Design","Art Direction"]},{img:wg,bgImg:wg,gallery:[SM,TM],date:"September 14, 2024",title:"CHATONE",desc:"CHATONE is a modern messaging application designed to make conversations simple, fast, and intuitive. My work focused on designing the complete mobile UI/UX, creating a clean interface with clear navigation and a user-friendly chat experience.",tags:["Mobile App","UI Design","UX Design","Messaging"],role:["UI Design","UX Design","Mobile App Design","Figma Design"]},{img:Ag,bgImg:Ag,gallery:[EM,MM],date:"December 11, 2024",title:"FINANCE",desc:"FINANCE is a modern mobile banking application designed with a premium dark interface and vibrant green accents. My contribution focused on crafting the complete UI/UX, including onboarding, dashboard, and financial management screens with a clean and intuitive user experience.",tags:["Mobile App","FinTech","UI Design","UX Design"],role:["UI Design","UX Design","Mobile App Design","Figma Design"]}];window.addEventListener("wheel",r=>{wp&&(r.target.closest(".case-study-side-bar")||(r.preventDefault(),r.stopPropagation(),r.stopImmediatePropagation()))},{passive:!1,capture:!0});window.addEventListener("touchmove",r=>{wp&&(ln.contains(r.target)||r.preventDefault())},{passive:!1});$.set(ln,{clipPath:"inset(100% 0% 0% 0%)"});ln.style.pointerEvents="none";let wp=!1;function HM(r){ci.stop(),ln.style.overflowY="auto",ln.scrollTop=0,document.body.classList.add("sidebar-open"),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const e=zM[r];if(document.body.classList.add("sidebar-open"),!e)return;Fg.innerHTML=e.gallery.map(s=>`
        <div class="gallery-item">
            <img src="${s}" alt="">
        </div>
    `).join(""),BM.innerHTML=e.role.map(s=>`<li>${s}</li>`).join(""),Pg.innerHTML=`<img src="${e.img}" alt="">`,kM.src=e.bgImg,Lg.textContent=e.date,Dg.textContent=e.title,Ug.innerHTML=e.tags.map(s=>`<span>${s}</span>`).join(""),Ig.textContent=e.desc,$.to(ln,{clipPath:"inset(0% 0% 0% 0%)",duration:1.7,ease:"power4.inOut",onStart:()=>ln.style.pointerEvents="all"}),$.to(".container",{opacity:.3,pointerEvents:"none",duration:1.7,ease:"power4.inOut"});const t=Fg.querySelectorAll(".gallery-item");$.fromTo(t,{y:80,opacity:0,clipPath:"inset(100% 0% 0% 0%)"},{y:0,opacity:1,clipPath:"inset(0% 0% 0% 0%)",stagger:.12,duration:1.2,delay:1.2,ease:"power4.out"});const n=Ug.querySelectorAll("span");$.fromTo(n,{y:20,opacity:0,scale:.9},{y:0,opacity:1,scale:1,stagger:.05,duration:.6,delay:1,ease:"power3.out"});const i=Pg.querySelector("img");$.fromTo(i,{clipPath:"inset(50% 50% 50% 50%)",opacity:0},{clipPath:"inset(0% 0% 0% 0%)",opacity:1,duration:2.5,ease:"power4.inOut"}),$.fromTo([Lg,Dg,Ig],{y:50,opacity:0},{y:0,opacity:1,duration:1.2,delay:.8,stagger:.12,ease:"power3.out"})}function GM(){ci.start(),document.body.classList.remove("sidebar-open"),$.to(ln,{clipPath:"inset(100% 0% 0% 0%)",duration:1.5,ease:"power4.inOut",onComplete:()=>{ln.style.pointerEvents="none",document.body.style.overflow="",wp=!1,document.body.style.overflow="",document.documentElement.style.overflow="",Ye.refresh(!0)}}),$.to(".container",{opacity:1,pointerEvents:"auto",duration:1.7,ease:"power4.inOut"})}OM.forEach((r,e)=>{r.addEventListener("click",()=>HM(e))});NM.addEventListener("click",GM);let Ng;window.addEventListener("resize",()=>{clearTimeout(Ng),Ng=setTimeout(()=>{Ye.refresh()},200)});const VM=$.timeline({scrollTrigger:{trigger:".blog-section",start:"top 10%",end:"120% bottom",scrub:!0}});VM.to(".card-1:nth-child(2)",{y:0},"0");const WM=new Jt(".cta-title",{types:"lines,chars"});$.from(WM.chars,{y:150,opacity:0,rotateX:-90,scale:.7,duration:.8,filter:"blur(4px)",color:"#990000",stagger:.01,ease:"expo.out",scrollTrigger:{trigger:".before-footer-cta",start:"top 75%",end:"bottom center",scrub:!1}});window.innerWidth<=768&&$.utils.toArray(".card-1").forEach((r,e)=>{$.from(r,{opacity:0,y:40,duration:.8,ease:"power2.out",delay:e*.1,scrollTrigger:{trigger:".cards-blogs",start:"top 20%",scrub:!0}})});new Jt(".heading-of-step-work h1",{types:"words"});new Jt(".para-for-stepss",{types:"words"});document.querySelectorAll(".box-step-main h1").forEach(r=>{new Jt(r,{types:"words"})});document.querySelectorAll(".box-step-main p").forEach(r=>{new Jt(r,{types:"words"})});$.set(".heading-of-step-work .word",{opacity:0,y:80});$.set(".para-for-stepss .word",{opacity:0,y:40});$.set(".box-step-main h1 .word",{opacity:0,y:60});$.set(".box-step-main p .word",{opacity:0,y:30});$.to(".step-of-work img",{yPercent:-20,scale:1,ease:"none",scrollTrigger:{trigger:".step-of-work",start:"top bottom",end:"bottom top",scrub:!0}});$.to(".heading-of-step-work .word",{opacity:1,y:0,filter:"blur(0px)",stagger:.05,duration:.8,ease:"power4.out",scrollTrigger:{trigger:".heading-of-step-work",start:"top 75%",toggleActions:"play none none reverse"}});$.to(".para-for-stepss .word",{opacity:1,y:0,filter:"blur(0px)",stagger:.015,duration:.7,ease:"power3.out",scrollTrigger:{trigger:".para-for-stepss",start:"top 80%",toggleActions:"play none none reverse"}});$.utils.toArray(".box-step-main").forEach(r=>{$.timeline({scrollTrigger:{trigger:r,start:"top 80%",toggleActions:"play none none reverse"}}).from(r,{y:120,opacity:0,duration:.8,ease:"power4.out"}).to(r.querySelectorAll("h1 .word"),{opacity:1,y:0,filter:"blur(0px)",stagger:.05,duration:.5,ease:"power4.out"},"-=0.4").to(r.querySelectorAll("p .word"),{opacity:1,y:0,filter:"blur(0px)",stagger:.015,duration:.4,ease:"power3.out"},"-=0.35")});new Jt(".blog-heading",{types:"words"});new Jt(".blog-para",{types:"words"});$.set(".blog-heading .word",{yPercent:120,opacity:0,filter:"blur(5px)"});$.set(".blog-para .word",{yPercent:120,opacity:0,filter:"blur(5px)"});const XM=$.timeline({scrollTrigger:{trigger:".blog-section",start:"top 45%",once:!0}});XM.to(".blog-heading .word",{yPercent:0,opacity:1,filter:"blur(0px)",duration:1.2,stagger:.05,ease:"expo.out"},0).to(".blog-para .word",{yPercent:0,opacity:1,filter:"blur(0px)",duration:.8,stagger:.025,ease:"power4.out"},.3);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bv(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qM(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var jM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YM=`#ifdef USE_ALPHAHASH
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
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
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
#endif`,ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tw=`#ifdef USE_BATCHING
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
#endif`,nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aw=`#ifdef USE_IRIDESCENCE
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
#endif`,ow=`#ifdef USE_BUMPMAP
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
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gw=`#define PI 3.141592653589793
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
} // validated`,_w=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bw=`vec3 transformedNormal = objectNormal;
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
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mw=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Aw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
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
#endif`,Pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uw=`#ifdef USE_GRADIENTMAP
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
}`,Fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kw=`uniform bool receiveShadow;
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
#endif`,Bw=`#ifdef USE_ENVMAP
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
#endif`,zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ww=`PhysicalMaterial material;
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
#endif`,Xw=`struct PhysicalMaterial {
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
}`,qw=`
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
#endif`,jw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$w=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n1=`#if defined( USE_POINTS_UV )
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
#endif`,i1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
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
#endif`,c1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m1=`#ifdef USE_NORMALMAP
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
#endif`,g1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D1=`float getShadowMask() {
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
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j1=`uniform sampler2D t2D;
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
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
}`,Q1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eA=`#define DISTANCE
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
}`,tA=`#define DISTANCE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`uniform float scale;
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
}`,sA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define LAMBERT
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
}`,uA=`#define MATCAP
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
}`,hA=`#define MATCAP
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
}`,fA=`#define NORMAL
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
}`,dA=`#define NORMAL
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
}`,pA=`#define PHONG
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
}`,mA=`#define PHONG
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
}`,gA=`#define STANDARD
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
}`,_A=`#define STANDARD
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
}`,bA=`#define TOON
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
}`,vA=`#define TOON
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
}`,xA=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,TA=`uniform vec3 color;
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
}`,EA=`uniform float rotation;
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
}`,MA=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:jM,alphahash_pars_fragment:YM,alphamap_fragment:KM,alphamap_pars_fragment:$M,alphatest_fragment:JM,alphatest_pars_fragment:ZM,aomap_fragment:QM,aomap_pars_fragment:ew,batching_pars_vertex:tw,batching_vertex:nw,begin_vertex:iw,beginnormal_vertex:rw,bsdfs:sw,iridescence_fragment:aw,bumpmap_pars_fragment:ow,clipping_planes_fragment:lw,clipping_planes_pars_fragment:cw,clipping_planes_pars_vertex:uw,clipping_planes_vertex:hw,color_fragment:fw,color_pars_fragment:dw,color_pars_vertex:pw,color_vertex:mw,common:gw,cube_uv_reflection_fragment:_w,defaultnormal_vertex:bw,displacementmap_pars_vertex:vw,displacementmap_vertex:xw,emissivemap_fragment:yw,emissivemap_pars_fragment:Sw,colorspace_fragment:Tw,colorspace_pars_fragment:Ew,envmap_fragment:Mw,envmap_common_pars_fragment:ww,envmap_pars_fragment:Aw,envmap_pars_vertex:Rw,envmap_physical_pars_fragment:Bw,envmap_vertex:Cw,fog_vertex:Pw,fog_pars_vertex:Dw,fog_fragment:Lw,fog_pars_fragment:Iw,gradientmap_pars_fragment:Uw,lightmap_pars_fragment:Fw,lights_lambert_fragment:Nw,lights_lambert_pars_fragment:Ow,lights_pars_begin:kw,lights_toon_fragment:zw,lights_toon_pars_fragment:Hw,lights_phong_fragment:Gw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Ww,lights_physical_pars_fragment:Xw,lights_fragment_begin:qw,lights_fragment_maps:jw,lights_fragment_end:Yw,logdepthbuf_fragment:Kw,logdepthbuf_pars_fragment:$w,logdepthbuf_pars_vertex:Jw,logdepthbuf_vertex:Zw,map_fragment:Qw,map_pars_fragment:e1,map_particle_fragment:t1,map_particle_pars_fragment:n1,metalnessmap_fragment:i1,metalnessmap_pars_fragment:r1,morphinstance_vertex:s1,morphcolor_vertex:a1,morphnormal_vertex:o1,morphtarget_pars_vertex:l1,morphtarget_vertex:c1,normal_fragment_begin:u1,normal_fragment_maps:h1,normal_pars_fragment:f1,normal_pars_vertex:d1,normal_vertex:p1,normalmap_pars_fragment:m1,clearcoat_normal_fragment_begin:g1,clearcoat_normal_fragment_maps:_1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:v1,opaque_fragment:x1,packing:y1,premultiplied_alpha_fragment:S1,project_vertex:T1,dithering_fragment:E1,dithering_pars_fragment:M1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:A1,shadowmap_pars_fragment:R1,shadowmap_pars_vertex:C1,shadowmap_vertex:P1,shadowmask_pars_fragment:D1,skinbase_vertex:L1,skinning_pars_vertex:I1,skinning_vertex:U1,skinnormal_vertex:F1,specularmap_fragment:N1,specularmap_pars_fragment:O1,tonemapping_fragment:k1,tonemapping_pars_fragment:B1,transmission_fragment:z1,transmission_pars_fragment:H1,uv_pars_fragment:G1,uv_pars_vertex:V1,uv_vertex:W1,worldpos_vertex:X1,background_vert:q1,background_frag:j1,backgroundCube_vert:Y1,backgroundCube_frag:K1,cube_vert:$1,cube_frag:J1,depth_vert:Z1,depth_frag:Q1,distanceRGBA_vert:eA,distanceRGBA_frag:tA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:rA,linedashed_frag:sA,meshbasic_vert:aA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:cA,meshmatcap_vert:uA,meshmatcap_frag:hA,meshnormal_vert:fA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:bA,meshtoon_frag:vA,points_vert:xA,points_frag:yA,shadow_vert:SA,shadow_frag:TA,sprite_vert:EA,sprite_frag:MA},Te={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Vi={basic:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Cn([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Cn([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Cn([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Cn([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Cn([Te.lights,Te.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Vi.physical={uniforms:Cn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const wc={r:0,b:0,g:0},_s=new nr,wA=new rt;function AA(r,e,t,n,i,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function _(v){let b=!1;const S=g(v);S===null?p(o,l):S&&S.isColor&&(p(S,1),b=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Au)?(u===void 0&&(u=new fn(new Ul(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:so(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_s.copy(b.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wA.makeRotationFromEuler(_s)),u.material.toneMapped=mt.getTransfer(S.colorSpace)!==St,(h!==S||f!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new fn(new ns(2,2),new Cr({name:"BackgroundMaterial",uniforms:so(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=mt.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(wc,Bb(r)),n.buffers.color.setClear(wc.r,wc.g,wc.b,b,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:m,dispose:x}}function RA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(y,L,N,G,W){let O=!1;const K=h(G,N,L);s!==K&&(s=K,c(s.object)),O=d(y,G,N,W),O&&g(y,G,N,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,b(y,L,N,G),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,L,N){const G=N.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let O=W[L.id];O===void 0&&(O={},W[L.id]=O);let K=O[G];return K===void 0&&(K=f(l()),O[G]=K),K}function f(y){const L=[],N=[],G=[];for(let W=0;W<t;W++)L[W]=0,N[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:G,object:y,attributes:{},index:null}}function d(y,L,N,G){const W=s.attributes,O=L.attributes;let K=0;const te=N.getAttributes();for(const j in te)if(te[j].location>=0){const I=W[j];let le=O[j];if(le===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),I===void 0||I.attribute!==le||le&&I.data!==le.data)return!0;K++}return s.attributesNum!==K||s.index!==G}function g(y,L,N,G){const W={},O=L.attributes;let K=0;const te=N.getAttributes();for(const j in te)if(te[j].location>=0){let I=O[j];I===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(I=y.instanceColor));const le={};le.attribute=I,I&&I.data&&(le.data=I.data),W[j]=le,K++}s.attributes=W,s.attributesNum=K,s.index=G}function _(){const y=s.newAttributes;for(let L=0,N=y.length;L<N;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const N=s.newAttributes,G=s.enabledAttributes,W=s.attributeDivisors;N[y]=1,G[y]===0&&(r.enableVertexAttribArray(y),G[y]=1),W[y]!==L&&(r.vertexAttribDivisor(y,L),W[y]=L)}function x(){const y=s.newAttributes,L=s.enabledAttributes;for(let N=0,G=L.length;N<G;N++)L[N]!==y[N]&&(r.disableVertexAttribArray(N),L[N]=0)}function v(y,L,N,G,W,O,K){K===!0?r.vertexAttribIPointer(y,L,N,W,O):r.vertexAttribPointer(y,L,N,G,W,O)}function b(y,L,N,G){_();const W=G.attributes,O=N.getAttributes(),K=L.defaultAttributeValues;for(const te in O){const j=O[te];if(j.location>=0){let ae=W[te];if(ae===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const I=ae.normalized,le=ae.itemSize,xe=e.get(ae);if(xe===void 0)continue;const Je=xe.buffer,ke=xe.type,Se=xe.bytesPerElement,J=ke===r.INT||ke===r.UNSIGNED_INT||ae.gpuType===sp;if(ae.isInterleavedBufferAttribute){const ne=ae.data,he=ne.stride,we=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<j.locationSize;be++)p(j.location+be,ne.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<j.locationSize;be++)m(j.location+be);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let be=0;be<j.locationSize;be++)v(j.location+be,le/j.locationSize,ke,I,he*Se,(we+le/j.locationSize*be)*Se,J)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<j.locationSize;ne++)p(j.location+ne,ae.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<j.locationSize;ne++)m(j.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let ne=0;ne<j.locationSize;ne++)v(j.location+ne,le/j.locationSize,ke,I,le*Se,le/j.locationSize*ne*Se,J)}}else if(K!==void 0){const I=K[te];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(j.location,I);break;case 3:r.vertexAttrib3fv(j.location,I);break;case 4:r.vertexAttrib4fv(j.location,I);break;default:r.vertexAttrib1fv(j.location,I)}}}}x()}function S(){P();for(const y in n){const L=n[y];for(const N in L){const G=L[N];for(const W in G)u(G[W].object),delete G[W];delete L[N]}delete n[y]}}function M(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const N in L){const G=L[N];for(const W in G)u(G[W].object),delete G[W];delete L[N]}delete n[y.id]}function w(y){for(const L in n){const N=n[L];if(N[y.id]===void 0)continue;const G=N[y.id];for(const W in G)u(G[W].object),delete G[W];delete N[y.id]}}function P(){T(),a=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function CA(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function PA(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Mi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==tr&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fi&&!P)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:S,maxSamples:M}}function DA(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Es,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let b=p.clippingState||null;l.value=b,b=u(g,f,v,d);for(let S=0;S!==v;++S)b[S]=t[S];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=d;v!==_;++v,b+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function LA(r){let e=new WeakMap;function t(a,o){return o===Ff?a.mapping=to:o===Nf&&(a.mapping=no),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ff||o===Nf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new eE(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Da=4,Og=[.125,.215,.35,.446,.526,.582],As=20,Fh=new Pu,kg=new Qe;let Nh=null,Oh=0,kh=0,Bh=!1;const Ms=(1+Math.sqrt(5))/2,Ta=1/Ms,Bg=[new X(-Ms,Ta,0),new X(Ms,Ta,0),new X(-Ta,0,Ms),new X(Ta,0,Ms),new X(0,Ms,-Ta),new X(0,Ms,Ta),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],IA=new X;class zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=IA}=s;Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Oh,kh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Il,format:Mi,colorSpace:Bn,depthBuffer:!1},i=Hg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UA(s)),this._blurMaterial=FA(s,e,t)}return i}_compileMaterial(e){const t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,n,i,s){const l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(kg),h.toneMapping=ts,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new $i({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),m=new fn(new Ul,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(kg),p=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const S=this._cubeSize;Ac(i,b*S,v>2?S:0,S,S),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===to||e.mapping===no;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new fn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ac(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bg[(i-s-1)%Bg.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*As-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):As;m>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);const p=[];let x=0;for(let w=0;w<As;++w){const P=w/_,T=Math.exp(-P*P/2);p.push(T),w===0?x+=T:w<m&&(x+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const b=this._sizeLods[i],S=3*b*(i>v-Da?i-v+Da:0),M=4*(this._cubeSize-b);Ac(t,S,M,3*b,2*b),l.setRenderTarget(t),l.render(h,Fh)}}function UA(r){const e=[],t=[],n=[];let i=r;const s=r-Da+1+Og.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Da?l=Og[a-r+Da-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let M=0;M<d;M++){const w=M%3*2/3-1,P=M>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(T,_*g*M),v.set(f,m*g*M);const y=[M,M,M,M,M,M];b.set(y,p*g*M)}const S=new sr;S.setAttribute("position",new On(x,_)),S.setAttribute("uv",new On(v,m)),S.setAttribute("faceIndex",new On(b,p)),e.push(S),i>Da&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hg(r,e,t){const n=new $s(r,e,t);return n.texture.mapping=Au,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ac(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function FA(r,e,t){const n=new Float32Array(As),i=new X(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ap(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Gg(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ap(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Vg(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ap(){return`

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
	`}function NA(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ff||l===Nf,u=l===to||l===no;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new zg(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new zg(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function OA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Rl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kA(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,b=x.length;v<b;v+=3){const S=x[v+0],M=x[v+1],w=x[v+2];f.push(S,M,M,w,w,S)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const S=v+0,M=v+1,w=v+2;f.push(S,M,M,w,w,S)}}else return;const m=new(Ib(f)?kb:Ob)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function BA(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function HA(r,e,t){const n=new WeakMap,i=new _t;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let b=o.attributes.position.count*v,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*S*4*h),w=new Ub(M,b,S,h);w.type=Fi,w.needsUpdate=!0;const P=v*4;for(let y=0;y<h;y++){const L=m[y],N=p[y],G=x[y],W=b*S*4*y;for(let O=0;O<L.count;O++){const K=O*P;d===!0&&(i.fromBufferAttribute(L,O),M[W+K+0]=i.x,M[W+K+1]=i.y,M[W+K+2]=i.z,M[W+K+3]=0),g===!0&&(i.fromBufferAttribute(N,O),M[W+K+4]=i.x,M[W+K+5]=i.y,M[W+K+6]=i.z,M[W+K+7]=0),_===!0&&(i.fromBufferAttribute(G,O),M[W+K+8]=i.x,M[W+K+9]=i.y,M[W+K+10]=i.z,M[W+K+11]=G.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new dt(b,S)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function GA(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const vv=new cn,Wg=new qb(1,1),xv=new Ub,yv=new OT,Sv=new Hb,Xg=[],qg=[],jg=new Float32Array(16),Yg=new Float32Array(9),Kg=new Float32Array(4);function go(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Xg[i];if(s===void 0&&(s=new Float32Array(i),Xg[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Lu(r,e){let t=qg[e];t===void 0&&(t=new Int32Array(e),qg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function VA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function XA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function qA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function jA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Kg.set(n),r.uniformMatrix2fv(this.addr,!1,Kg),nn(t,n)}}function YA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Yg.set(n),r.uniformMatrix3fv(this.addr,!1,Yg),nn(t,n)}}function KA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;jg.set(n),r.uniformMatrix4fv(this.addr,!1,jg),nn(t,n)}}function $A(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function ZA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function QA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function eR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function nR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function iR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function rR(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wg.compareFunction=Lb,s=Wg):s=vv,t.setTexture2D(e||s,i)}function sR(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yv,i)}function aR(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sv,i)}function oR(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xv,i)}function lR(r){switch(r){case 5126:return VA;case 35664:return WA;case 35665:return XA;case 35666:return qA;case 35674:return jA;case 35675:return YA;case 35676:return KA;case 5124:case 35670:return $A;case 35667:case 35671:return JA;case 35668:case 35672:return ZA;case 35669:case 35673:return QA;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return oR}}function cR(r,e){r.uniform1fv(this.addr,e)}function uR(r,e){const t=go(e,this.size,2);r.uniform2fv(this.addr,t)}function hR(r,e){const t=go(e,this.size,3);r.uniform3fv(this.addr,t)}function fR(r,e){const t=go(e,this.size,4);r.uniform4fv(this.addr,t)}function dR(r,e){const t=go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pR(r,e){const t=go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mR(r,e){const t=go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gR(r,e){r.uniform1iv(this.addr,e)}function _R(r,e){r.uniform2iv(this.addr,e)}function bR(r,e){r.uniform3iv(this.addr,e)}function vR(r,e){r.uniform4iv(this.addr,e)}function xR(r,e){r.uniform1uiv(this.addr,e)}function yR(r,e){r.uniform2uiv(this.addr,e)}function SR(r,e){r.uniform3uiv(this.addr,e)}function TR(r,e){r.uniform4uiv(this.addr,e)}function ER(r,e,t){const n=this.cache,i=e.length,s=Lu(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||vv,s[a])}function MR(r,e,t){const n=this.cache,i=e.length,s=Lu(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yv,s[a])}function wR(r,e,t){const n=this.cache,i=e.length,s=Lu(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sv,s[a])}function AR(r,e,t){const n=this.cache,i=e.length,s=Lu(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xv,s[a])}function RR(r){switch(r){case 5126:return cR;case 35664:return uR;case 35665:return hR;case 35666:return fR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return bR;case 35669:case 35673:return vR;case 5125:return xR;case 36294:return yR;case 36295:return SR;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return ER;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return wR;case 36289:case 36303:case 36311:case 36292:return AR}}class CR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lR(t.type)}}class PR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RR(t.type)}}class DR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function $g(r,e){r.seq.push(e),r.map[e.id]=e}function LR(r,e,t){const n=r.name,i=n.length;for(zh.lastIndex=0;;){const s=zh.exec(n),a=zh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$g(t,c===void 0?new CR(o,r,e):new PR(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new DR(o),$g(t,h)),t=h}}}class qc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);LR(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Jg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const IR=37297;let UR=0;function FR(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zg=new tt;function NR(r){mt._getMatrix(Zg,mt.workingColorSpace,r);const e=`mat3( ${Zg.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case hu:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+FR(r.getShaderSource(e),o)}else return s}function OR(r,e){const t=NR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kR(r,e){let t;switch(e){case YS:t="Linear";break;case KS:t="Reinhard";break;case $S:t="Cineon";break;case xb:t="ACESFilmic";break;case ZS:t="AgX";break;case QS:t="Neutral";break;case JS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new X;function BR(){mt.getLuminanceCoefficients(Rc);const r=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function HR(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function GR(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Wo(r){return r!==""}function e_(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VR=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(r){return r.replace(VR,XR)}const WR=new Map;function XR(r,e){let t=it[e];if(t===void 0){const n=WR.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gd(t)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(r){return r.replace(qR,jR)}function jR(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function i_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YR(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_b?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function KR(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case Au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $R(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function JR(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vb:e="ENVMAP_BLENDING_MULTIPLY";break;case qS:e="ENVMAP_BLENDING_MIX";break;case jS:e="ENVMAP_BLENDING_ADD";break}return e}function ZR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function QR(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=YR(t),c=KR(t),u=$R(t),h=JR(t),f=ZR(t),d=zR(t),g=HR(s),_=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[i_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[i_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?it.tonemapping_pars_fragment:"",t.toneMapping!==ts?kR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,OR("linearToOutputTexel",t.outputColorSpace),BR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),a=gd(a),a=e_(a,t),a=t_(a,t),o=gd(o),o=e_(o,t),o=t_(o,t),a=n_(a),o=n_(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+a,b=x+p+o,S=Jg(i,i.VERTEX_SHADER,v),M=Jg(i,i.FRAGMENT_SHADER,b);i.attachShader(_,S),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(L){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(S)||"",W=i.getShaderInfoLog(M)||"",O=N.trim(),K=G.trim(),te=W.trim();let j=!0,ae=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,M);else{const I=Qg(i,S,"vertex"),le=Qg(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+I+`
`+le)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(K===""||te==="")&&(ae=!1);ae&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:K,prefix:m},fragmentShader:{log:te,prefix:p}})}i.deleteShader(S),i.deleteShader(M),P=new qc(i,_),T=GR(i,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,IR)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=M,this}let eC=0;class tC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nC(e),t.set(e,n)),n}}class nC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function iC(r,e,t,n,i,s,a){const o=new Fb,l=new tC,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,L,N,G){const W=N.fog,O=G.geometry,K=T.isMeshStandardMaterial?N.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),j=te&&te.mapping===Au?te.image.height:null,ae=g[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const I=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=I!==void 0?I.length:0;let xe=0;O.morphAttributes.position!==void 0&&(xe=1),O.morphAttributes.normal!==void 0&&(xe=2),O.morphAttributes.color!==void 0&&(xe=3);let Je,ke,Se,J;if(ae){const de=Vi[ae];Je=de.vertexShader,ke=de.fragmentShader}else Je=T.vertexShader,ke=T.fragmentShader,l.update(T),Se=l.getVertexShaderID(T),J=l.getFragmentShaderID(T);const ne=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),we=G.isInstancedMesh===!0,be=G.isBatchedMesh===!0,Ue=!!T.map,lt=!!T.matcap,C=!!te,Fe=!!T.aoMap,Oe=!!T.lightMap,Ae=!!T.bumpMap,k=!!T.normalMap,je=!!T.displacementMap,Ee=!!T.emissiveMap,Ge=!!T.metalnessMap,me=!!T.roughnessMap,ft=T.anisotropy>0,D=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,ie=T.sheen>0,re=T.transmission>0,ee=ft&&!!T.anisotropyMap,Me=D&&!!T.clearcoatMap,ce=D&&!!T.clearcoatNormalMap,Re=D&&!!T.clearcoatRoughnessMap,ve=q&&!!T.iridescenceMap,ue=q&&!!T.iridescenceThicknessMap,ge=ie&&!!T.sheenColorMap,Be=ie&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,fe=!!T.specularColorMap,Ne=!!T.specularIntensityMap,U=re&&!!T.transmissionMap,R=re&&!!T.thicknessMap,F=!!T.gradientMap,B=!!T.alphaMap,z=T.alphaTest>0,Y=!!T.alphaHash,oe=!!T.extensions;let pe=ts;T.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(pe=r.toneMapping);const Ke={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:Je,fragmentShader:ke,defines:T.defines,customVertexShaderID:Se,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:be,batchingColor:be&&G._colorsTexture!==null,instancing:we,instancingColor:we&&G.instanceColor!==null,instancingMorph:we&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Bn,alphaToCoverage:!!T.alphaToCoverage,map:Ue,matcap:lt,envMap:C,envMapMode:C&&te.mapping,envMapCubeUVHeight:j,aoMap:Fe,lightMap:Oe,bumpMap:Ae,normalMap:k,displacementMap:f&&je,emissiveMap:Ee,normalMapObjectSpace:k&&T.normalMapType===sT,normalMapTangentSpace:k&&T.normalMapType===Db,metalnessMap:Ge,roughnessMap:me,anisotropy:ft,anisotropyMap:ee,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:Re,dispersion:E,iridescence:q,iridescenceMap:ve,iridescenceThicknessMap:ue,sheen:ie,sheenColorMap:ge,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:fe,specularIntensityMap:Ne,transmission:re,transmissionMap:U,thicknessMap:R,gradientMap:F,opaque:T.transparent===!1&&T.blending===Ba&&T.alphaToCoverage===!1,alphaMap:B,alphaTest:z,alphaHash:Y,combine:T.combine,mapUv:Ue&&_(T.map.channel),aoMapUv:Fe&&_(T.aoMap.channel),lightMapUv:Oe&&_(T.lightMap.channel),bumpMapUv:Ae&&_(T.bumpMap.channel),normalMapUv:k&&_(T.normalMap.channel),displacementMapUv:je&&_(T.displacementMap.channel),emissiveMapUv:Ee&&_(T.emissiveMap.channel),metalnessMapUv:Ge&&_(T.metalnessMap.channel),roughnessMapUv:me&&_(T.roughnessMap.channel),anisotropyMapUv:ee&&_(T.anisotropyMap.channel),clearcoatMapUv:Me&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(T.sheenRoughnessMap.channel),specularMapUv:Pe&&_(T.specularMap.channel),specularColorMapUv:fe&&_(T.specularColorMap.channel),specularIntensityMapUv:Ne&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:R&&_(T.thicknessMap.channel),alphaMapUv:B&&_(T.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(k||ft),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!O.attributes.uv&&(Ue||B),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:G.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ue&&T.map.isVideoTexture===!0&&mt.getTransfer(T.map.colorSpace)===St,decodeVideoTextureEmissive:Ee&&T.emissiveMap.isVideoTexture===!0&&mt.getTransfer(T.emissiveMap.colorSpace)===St,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ai,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:oe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&T.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function p(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)y.push(L),y.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(x(y,T),v(y,T),y.push(r.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function x(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),T.push(o.mask)}function b(T){const y=g[T.type];let L;if(y){const N=Vi[y];L=$T.clone(N.uniforms)}else L=T.uniforms;return L}function S(T,y){let L;for(let N=0,G=u.length;N<G;N++){const W=u[N];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new QR(r,y,T,s),u.push(L)),L}function M(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:S,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:P}}function rC(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function sC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function r_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function s_(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||sC),n.length>1&&n.sort(f||r_),i.length>1&&i.sort(f||r_)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function aC(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new s_,r.set(n,[a])):i>=s.length?(a=new s_,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function oC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Qe};break;case"SpotLight":t={position:new X,direction:new X,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function lC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let cC=0;function uC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hC(r){const e=new oC,t=lC(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new rt,a=new rt;function o(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,v=0,b=0,S=0,M=0,w=0;c.sort(uC);for(let T=0,y=c.length;T<y;T++){const L=c[T],N=L.color,G=L.intensity,W=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*G,h+=N.g*G,f+=N.b*G;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],G);w++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,j=t.get(L);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=L.shadow.matrix,x++}n.directional[d]=K,d++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(N).multiplyScalar(G),K.distance=W,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[_]=K;const te=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,te.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[_]=te.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=O,b++}_++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(N).multiplyScalar(G),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const te=L.shadow,j=t.get(L);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,j.shadowCameraNear=te.camera.near,j.shadowCameraFar=te.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(G),K.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[p]=K,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==b||P.numSpotMaps!==S||P.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+S-M,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=b,P.numSpotMaps=S,P.numLightProbes=w,n.version=cC++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(v.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function a_(r){const e=new hC(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fC(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new a_(r),e.set(i,[o])):s>=a.length?(o=new a_(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
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
}`;function mC(r,e,t){let n=new _p;const i=new dt,s=new dt,a=new _t,o=new pE({depthPacking:rT}),l=new mE,c={},u=t.maxTextureSize,h={[Rr]:qn,[qn]:Rr,[ai]:ai},f=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new sr;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_b;let p=this.type;this.render=function(M,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const T=r.getRenderTarget(),y=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(es),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=p!==dr&&this.type===dr,W=p===dr&&this.type!==dr;for(let O=0,K=M.length;O<K;O++){const te=M[O],j=te.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const ae=j.getFrameExtents();if(i.multiply(ae),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ae.x),i.x=s.x*ae.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ae.y),i.y=s.y*ae.y,j.mapSize.y=s.y)),j.map===null||G===!0||W===!0){const le=this.type!==dr?{minFilter:Nn,magFilter:Nn}:{};j.map!==null&&j.map.dispose(),j.map=new $s(i.x,i.y,le),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const I=j.getViewportCount();for(let le=0;le<I;le++){const xe=j.getViewport(le);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),N.viewport(a),j.updateMatrices(te,le),n=j.getFrustum(),b(w,P,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===dr&&x(j,P),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,y,L)};function x(M,w){const P=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new $s(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,P,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,P,d,_,null)}function v(M,w,P,T){let y=null;const L=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=y.uuid,G=w.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let O=W[G];O===void 0&&(O=y.clone(),W[G]=O,w.addEventListener("dispose",S)),y=O}if(y.visible=w.visible,y.wireframe=w.wireframe,T===dr?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=r.properties.get(y);N.light=P}return y}function b(M,w,P,T,y){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===dr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const G=e.update(M),W=M.material;if(Array.isArray(W)){const O=G.groups;for(let K=0,te=O.length;K<te;K++){const j=O[K],ae=W[j.materialIndex];if(ae&&ae.visible){const I=v(M,ae,T,y);M.onBeforeShadow(r,M,w,P,G,I,j),r.renderBufferDirect(P,null,G,I,M,j),M.onAfterShadow(r,M,w,P,G,I,j)}}}else if(W.visible){const O=v(M,W,T,y);M.onBeforeShadow(r,M,w,P,G,O,null),r.renderBufferDirect(P,null,G,O,M,null),M.onAfterShadow(r,M,w,P,G,O,null)}}const N=M.children;for(let G=0,W=N.length;G<W;G++)b(N[G],w,P,T,y)}function S(M){M.target.removeEventListener("dispose",S);for(const P in c){const T=c[P],y=M.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const gC={[Rf]:Cf,[Pf]:If,[Df]:Uf,[eo]:Lf,[Cf]:Rf,[If]:Pf,[Uf]:Df,[Lf]:eo};function _C(r,e){function t(){let U=!1;const R=new _t;let F=null;const B=new _t(0,0,0,0);return{setMask:function(z){F!==z&&!U&&(r.colorMask(z,z,z,z),F=z)},setLocked:function(z){U=z},setClear:function(z,Y,oe,pe,Ke){Ke===!0&&(z*=pe,Y*=pe,oe*=pe),R.set(z,Y,oe,pe),B.equals(R)===!1&&(r.clearColor(z,Y,oe,pe),B.copy(R))},reset:function(){U=!1,F=null,B.set(-1,0,0,0)}}}function n(){let U=!1,R=!1,F=null,B=null,z=null;return{setReversed:function(Y){if(R!==Y){const oe=e.get("EXT_clip_control");Y?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),R=Y;const pe=z;z=null,this.setClear(pe)}},getReversed:function(){return R},setTest:function(Y){Y?ne(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(Y){F!==Y&&!U&&(r.depthMask(Y),F=Y)},setFunc:function(Y){if(R&&(Y=gC[Y]),B!==Y){switch(Y){case Rf:r.depthFunc(r.NEVER);break;case Cf:r.depthFunc(r.ALWAYS);break;case Pf:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case Df:r.depthFunc(r.EQUAL);break;case Lf:r.depthFunc(r.GEQUAL);break;case If:r.depthFunc(r.GREATER);break;case Uf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}B=Y}},setLocked:function(Y){U=Y},setClear:function(Y){z!==Y&&(R&&(Y=1-Y),r.clearDepth(Y),z=Y)},reset:function(){U=!1,F=null,B=null,z=null,R=!1}}}function i(){let U=!1,R=null,F=null,B=null,z=null,Y=null,oe=null,pe=null,Ke=null;return{setTest:function(de){U||(de?ne(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(de){R!==de&&!U&&(r.stencilMask(de),R=de)},setFunc:function(de,De,Ze){(F!==de||B!==De||z!==Ze)&&(r.stencilFunc(de,De,Ze),F=de,B=De,z=Ze)},setOp:function(de,De,Ze){(Y!==de||oe!==De||pe!==Ze)&&(r.stencilOp(de,De,Ze),Y=de,oe=De,pe=Ze)},setLocked:function(de){U=de},setClear:function(de){Ke!==de&&(r.clearStencil(de),Ke=de)},reset:function(){U=!1,R=null,F=null,B=null,z=null,Y=null,oe=null,pe=null,Ke=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,v=null,b=null,S=null,M=null,w=new Qe(0,0,0),P=0,T=!1,y=null,L=null,N=null,G=null,W=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,te=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=te>=2);let ae=null,I={};const le=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Je=new _t().fromArray(le),ke=new _t().fromArray(xe);function Se(U,R,F,B){const z=new Uint8Array(4),Y=r.createTexture();r.bindTexture(U,Y),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<F;oe++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(R,0,r.RGBA,1,1,B,0,r.RGBA,r.UNSIGNED_BYTE,z):r.texImage2D(R+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,z);return Y}const J={};J[r.TEXTURE_2D]=Se(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(r.DEPTH_TEST),a.setFunc(eo),Ae(!1),k(Rm),ne(r.CULL_FACE),Fe(es);function ne(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function he(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function we(U,R){return h[U]!==R?(r.bindFramebuffer(U,R),h[U]=R,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=R),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=R),!0):!1}function be(U,R){let F=d,B=!1;if(U){F=f.get(R),F===void 0&&(F=[],f.set(R,F));const z=U.textures;if(F.length!==z.length||F[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,oe=z.length;Y<oe;Y++)F[Y]=r.COLOR_ATTACHMENT0+Y;F.length=z.length,B=!0}}else F[0]!==r.BACK&&(F[0]=r.BACK,B=!0);B&&r.drawBuffers(F)}function Ue(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const lt={[ws]:r.FUNC_ADD,[CS]:r.FUNC_SUBTRACT,[PS]:r.FUNC_REVERSE_SUBTRACT};lt[DS]=r.MIN,lt[LS]=r.MAX;const C={[IS]:r.ZERO,[US]:r.ONE,[FS]:r.SRC_COLOR,[wf]:r.SRC_ALPHA,[HS]:r.SRC_ALPHA_SATURATE,[BS]:r.DST_COLOR,[OS]:r.DST_ALPHA,[NS]:r.ONE_MINUS_SRC_COLOR,[Af]:r.ONE_MINUS_SRC_ALPHA,[zS]:r.ONE_MINUS_DST_COLOR,[kS]:r.ONE_MINUS_DST_ALPHA,[GS]:r.CONSTANT_COLOR,[VS]:r.ONE_MINUS_CONSTANT_COLOR,[WS]:r.CONSTANT_ALPHA,[XS]:r.ONE_MINUS_CONSTANT_ALPHA};function Fe(U,R,F,B,z,Y,oe,pe,Ke,de){if(U===es){_===!0&&(he(r.BLEND),_=!1);return}if(_===!1&&(ne(r.BLEND),_=!0),U!==RS){if(U!==m||de!==T){if((p!==ws||b!==ws)&&(r.blendEquation(r.FUNC_ADD),p=ws,b=ws),de)switch(U){case Ba:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cm:r.blendFunc(r.ONE,r.ONE);break;case Pm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ba:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Pm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,v=null,S=null,M=null,w.set(0,0,0),P=0,m=U,T=de}return}z=z||R,Y=Y||F,oe=oe||B,(R!==p||z!==b)&&(r.blendEquationSeparate(lt[R],lt[z]),p=R,b=z),(F!==x||B!==v||Y!==S||oe!==M)&&(r.blendFuncSeparate(C[F],C[B],C[Y],C[oe]),x=F,v=B,S=Y,M=oe),(pe.equals(w)===!1||Ke!==P)&&(r.blendColor(pe.r,pe.g,pe.b,Ke),w.copy(pe),P=Ke),m=U,T=!1}function Oe(U,R){U.side===ai?he(r.CULL_FACE):ne(r.CULL_FACE);let F=U.side===qn;R&&(F=!F),Ae(F),U.blending===Ba&&U.transparent===!1?Fe(es):Fe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const B=U.stencilWrite;o.setTest(B),B&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(U){y!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),y=U)}function k(U){U!==wS?(ne(r.CULL_FACE),U!==L&&(U===Rm?r.cullFace(r.BACK):U===AS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),L=U}function je(U){U!==N&&(K&&r.lineWidth(U),N=U)}function Ee(U,R,F){U?(ne(r.POLYGON_OFFSET_FILL),(G!==R||W!==F)&&(r.polygonOffset(R,F),G=R,W=F)):he(r.POLYGON_OFFSET_FILL)}function Ge(U){U?ne(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function me(U){U===void 0&&(U=r.TEXTURE0+O-1),ae!==U&&(r.activeTexture(U),ae=U)}function ft(U,R,F){F===void 0&&(ae===null?F=r.TEXTURE0+O-1:F=ae);let B=I[F];B===void 0&&(B={type:void 0,texture:void 0},I[F]=B),(B.type!==U||B.texture!==R)&&(ae!==F&&(r.activeTexture(F),ae=F),r.bindTexture(U,R||J[U]),B.type=U,B.texture=R)}function D(){const U=I[ae];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){Je.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function Be(U){ke.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function Pe(U,R){let F=c.get(R);F===void 0&&(F=new WeakMap,c.set(R,F));let B=F.get(U);B===void 0&&(B=r.getUniformBlockIndex(R,U.name),F.set(U,B))}function fe(U,R){const B=c.get(R).get(U);l.get(R)!==B&&(r.uniformBlockBinding(R,B,U.__bindingPointIndex),l.set(R,B))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ae=null,I={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,v=null,b=null,S=null,M=null,w=new Qe(0,0,0),P=0,T=!1,y=null,L=null,N=null,G=null,W=null,Je.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:he,bindFramebuffer:we,drawBuffers:be,useProgram:Ue,setBlending:Fe,setMaterial:Oe,setFlipSided:Ae,setCullFace:k,setLineWidth:je,setPolygonOffset:Ee,setScissorTest:Ge,activeTexture:me,bindTexture:ft,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ve,texImage3D:ue,updateUBOMapping:Pe,uniformBlockBinding:fe,texStorage2D:ce,texStorage3D:Re,texSubImage2D:ie,texSubImage3D:re,compressedTexSubImage2D:ee,compressedTexSubImage3D:Me,scissor:ge,viewport:Be,reset:Ne}}function bC(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return d?new OffscreenCanvas(D,E):Al("canvas")}function _(D,E,q){let ie=1;const re=ft(D);if((re.width>q||re.height>q)&&(ie=q/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ee=Math.floor(ie*re.width),Me=Math.floor(ie*re.height);h===void 0&&(h=g(ee,Me));const ce=E?g(ee,Me):h;return ce.width=ee,ce.height=Me,ce.getContext("2d").drawImage(D,0,0,ee,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Me+")."),ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(D,E,q,ie,re=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=E;if(E===r.RED&&(q===r.FLOAT&&(ee=r.R32F),q===r.HALF_FLOAT&&(ee=r.R16F),q===r.UNSIGNED_BYTE&&(ee=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.R8UI),q===r.UNSIGNED_SHORT&&(ee=r.R16UI),q===r.UNSIGNED_INT&&(ee=r.R32UI),q===r.BYTE&&(ee=r.R8I),q===r.SHORT&&(ee=r.R16I),q===r.INT&&(ee=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ee=r.RG32F),q===r.HALF_FLOAT&&(ee=r.RG16F),q===r.UNSIGNED_BYTE&&(ee=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.RG8UI),q===r.UNSIGNED_SHORT&&(ee=r.RG16UI),q===r.UNSIGNED_INT&&(ee=r.RG32UI),q===r.BYTE&&(ee=r.RG8I),q===r.SHORT&&(ee=r.RG16I),q===r.INT&&(ee=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),q===r.UNSIGNED_INT&&(ee=r.RGB32UI),q===r.BYTE&&(ee=r.RGB8I),q===r.SHORT&&(ee=r.RGB16I),q===r.INT&&(ee=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),q===r.UNSIGNED_INT&&(ee=r.RGBA32UI),q===r.BYTE&&(ee=r.RGBA8I),q===r.SHORT&&(ee=r.RGBA16I),q===r.INT&&(ee=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),E===r.RGBA){const Me=re?hu:mt.getTransfer(ie);q===r.FLOAT&&(ee=r.RGBA32F),q===r.HALF_FLOAT&&(ee=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ee=Me===St?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(D,E){let q;return D?E===null||E===Ks||E===Sl?q=r.DEPTH24_STENCIL8:E===Fi?q=r.DEPTH32F_STENCIL8:E===yl&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ks||E===Sl?q=r.DEPTH_COMPONENT24:E===Fi?q=r.DEPTH_COMPONENT32F:E===yl&&(q=r.DEPTH_COMPONENT16),q}function S(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==Sn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function M(D){const E=D.target;E.removeEventListener("dispose",M),P(E),E.isVideoTexture&&u.delete(E)}function w(D){const E=D.target;E.removeEventListener("dispose",w),y(E)}function P(D){const E=n.get(D);if(E.__webglInit===void 0)return;const q=D.source,ie=f.get(q);if(ie){const re=ie[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(D),Object.keys(ie).length===0&&f.delete(q)}n.remove(D)}function T(D){const E=n.get(D);r.deleteTexture(E.__webglTexture);const q=D.source,ie=f.get(q);delete ie[E.__cacheKey],a.memory.textures--}function y(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let re=0;re<E.__webglFramebuffer[ie].length;re++)r.deleteFramebuffer(E.__webglFramebuffer[ie][re]);else r.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)r.deleteFramebuffer(E.__webglFramebuffer[ie]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=D.textures;for(let ie=0,re=q.length;ie<re;ie++){const ee=n.get(q[ie]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(q[ie])}n.remove(D)}let L=0;function N(){L=0}function G(){const D=L;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),L+=1,D}function W(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function O(D,E){const q=n.get(D);if(D.isVideoTexture&&Ge(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const ie=D.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,D,E);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function K(D,E){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){J(q,D,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function te(D,E){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){J(q,D,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function j(D,E){const q=n.get(D);if(D.version>0&&q.__version!==D.version){ne(q,D,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const ae={[io]:r.REPEAT,[Yr]:r.CLAMP_TO_EDGE,[uu]:r.MIRRORED_REPEAT},I={[Nn]:r.NEAREST,[Sb]:r.NEAREST_MIPMAP_NEAREST,[Go]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[Bc]:r.LINEAR_MIPMAP_NEAREST,[Ei]:r.LINEAR_MIPMAP_LINEAR},le={[aT]:r.NEVER,[fT]:r.ALWAYS,[oT]:r.LESS,[Lb]:r.LEQUAL,[lT]:r.EQUAL,[hT]:r.GEQUAL,[cT]:r.GREATER,[uT]:r.NOTEQUAL};function xe(D,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Sn||E.magFilter===Bc||E.magFilter===Go||E.magFilter===Ei||E.minFilter===Sn||E.minFilter===Bc||E.minFilter===Go||E.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ae[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ae[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ae[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,I[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Go&&E.minFilter!==Ei||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Je(D,E){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",M));const ie=E.source;let re=f.get(ie);re===void 0&&(re={},f.set(ie,re));const ee=W(E);if(ee!==D.__cacheKey){re[ee]===void 0&&(re[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[ee].usedTimes++;const Me=re[D.__cacheKey];Me!==void 0&&(re[D.__cacheKey].usedTimes--,Me.usedTimes===0&&T(E)),D.__cacheKey=ee,D.__webglTexture=re[ee].texture}return q}function ke(D,E,q){return Math.floor(Math.floor(D/q)/E)}function Se(D,E,q,ie){const ee=D.updateRanges;if(ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,ie,E.data);else{ee.sort((ue,ge)=>ue.start-ge.start);let Me=0;for(let ue=1;ue<ee.length;ue++){const ge=ee[Me],Be=ee[ue],Pe=ge.start+ge.count,fe=ke(Be.start,E.width,4),Ne=ke(ge.start,E.width,4);Be.start<=Pe+1&&fe===Ne&&ke(Be.start+Be.count-1,E.width,4)===fe?ge.count=Math.max(ge.count,Be.start+Be.count-ge.start):(++Me,ee[Me]=Be)}ee.length=Me+1;const ce=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),ve=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ue=0,ge=ee.length;ue<ge;ue++){const Be=ee[ue],Pe=Math.floor(Be.start/4),fe=Math.ceil(Be.count/4),Ne=Pe%E.width,U=Math.floor(Pe/E.width),R=fe,F=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Ne,U,R,F,q,ie,E.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function J(D,E,q){let ie=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=r.TEXTURE_3D);const re=Je(D,E),ee=E.source;t.bindTexture(ie,D.__webglTexture,r.TEXTURE0+q);const Me=n.get(ee);if(ee.version!==Me.__version||re===!0){t.activeTexture(r.TEXTURE0+q);const ce=mt.getPrimaries(mt.workingColorSpace),Re=E.colorSpace===Gr?null:mt.getPrimaries(E.colorSpace),ve=E.colorSpace===Gr||ce===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ue=_(E.image,!1,i.maxTextureSize);ue=me(E,ue);const ge=s.convert(E.format,E.colorSpace),Be=s.convert(E.type);let Pe=v(E.internalFormat,ge,Be,E.colorSpace,E.isVideoTexture);xe(ie,E);let fe;const Ne=E.mipmaps,U=E.isVideoTexture!==!0,R=Me.__version===void 0||re===!0,F=ee.dataReady,B=S(E,ue);if(E.isDepthTexture)Pe=b(E.format===El,E.type),R&&(U?t.texStorage2D(r.TEXTURE_2D,1,Pe,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ue.width,ue.height,0,ge,Be,null));else if(E.isDataTexture)if(Ne.length>0){U&&R&&t.texStorage2D(r.TEXTURE_2D,B,Pe,Ne[0].width,Ne[0].height);for(let z=0,Y=Ne.length;z<Y;z++)fe=Ne[z],U?F&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,fe.width,fe.height,ge,Be,fe.data):t.texImage2D(r.TEXTURE_2D,z,Pe,fe.width,fe.height,0,ge,Be,fe.data);E.generateMipmaps=!1}else U?(R&&t.texStorage2D(r.TEXTURE_2D,B,Pe,ue.width,ue.height),F&&Se(E,ue,ge,Be)):t.texImage2D(r.TEXTURE_2D,0,Pe,ue.width,ue.height,0,ge,Be,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&R&&t.texStorage3D(r.TEXTURE_2D_ARRAY,B,Pe,Ne[0].width,Ne[0].height,ue.depth);for(let z=0,Y=Ne.length;z<Y;z++)if(fe=Ne[z],E.format!==Mi)if(ge!==null)if(U){if(F)if(E.layerUpdates.size>0){const oe=xg(fe.width,fe.height,E.format,E.type);for(const pe of E.layerUpdates){const Ke=fe.data.subarray(pe*oe/fe.data.BYTES_PER_ELEMENT,(pe+1)*oe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,pe,fe.width,fe.height,1,ge,Ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,ue.depth,ge,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,z,Pe,fe.width,fe.height,ue.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,ue.depth,ge,Be,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,z,Pe,fe.width,fe.height,ue.depth,0,ge,Be,fe.data)}else{U&&R&&t.texStorage2D(r.TEXTURE_2D,B,Pe,Ne[0].width,Ne[0].height);for(let z=0,Y=Ne.length;z<Y;z++)fe=Ne[z],E.format!==Mi?ge!==null?U?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,z,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,z,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?F&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,fe.width,fe.height,ge,Be,fe.data):t.texImage2D(r.TEXTURE_2D,z,Pe,fe.width,fe.height,0,ge,Be,fe.data)}else if(E.isDataArrayTexture)if(U){if(R&&t.texStorage3D(r.TEXTURE_2D_ARRAY,B,Pe,ue.width,ue.height,ue.depth),F)if(E.layerUpdates.size>0){const z=xg(ue.width,ue.height,E.format,E.type);for(const Y of E.layerUpdates){const oe=ue.data.subarray(Y*z/ue.data.BYTES_PER_ELEMENT,(Y+1)*z/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,ue.width,ue.height,1,ge,Be,oe)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ge,Be,ue.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ue.width,ue.height,ue.depth,0,ge,Be,ue.data);else if(E.isData3DTexture)U?(R&&t.texStorage3D(r.TEXTURE_3D,B,Pe,ue.width,ue.height,ue.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ge,Be,ue.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ue.width,ue.height,ue.depth,0,ge,Be,ue.data);else if(E.isFramebufferTexture){if(R)if(U)t.texStorage2D(r.TEXTURE_2D,B,Pe,ue.width,ue.height);else{let z=ue.width,Y=ue.height;for(let oe=0;oe<B;oe++)t.texImage2D(r.TEXTURE_2D,oe,Pe,z,Y,0,ge,Be,null),z>>=1,Y>>=1}}else if(Ne.length>0){if(U&&R){const z=ft(Ne[0]);t.texStorage2D(r.TEXTURE_2D,B,Pe,z.width,z.height)}for(let z=0,Y=Ne.length;z<Y;z++)fe=Ne[z],U?F&&t.texSubImage2D(r.TEXTURE_2D,z,0,0,ge,Be,fe):t.texImage2D(r.TEXTURE_2D,z,Pe,ge,Be,fe);E.generateMipmaps=!1}else if(U){if(R){const z=ft(ue);t.texStorage2D(r.TEXTURE_2D,B,Pe,z.width,z.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Be,ue)}else t.texImage2D(r.TEXTURE_2D,0,Pe,ge,Be,ue);m(E)&&p(ie),Me.__version=ee.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ne(D,E,q){if(E.image.length!==6)return;const ie=Je(D,E),re=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+q);const ee=n.get(re);if(re.version!==ee.__version||ie===!0){t.activeTexture(r.TEXTURE0+q);const Me=mt.getPrimaries(mt.workingColorSpace),ce=E.colorSpace===Gr?null:mt.getPrimaries(E.colorSpace),Re=E.colorSpace===Gr||Me===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let Y=0;Y<6;Y++)!ve&&!ue?ge[Y]=_(E.image[Y],!0,i.maxCubemapSize):ge[Y]=ue?E.image[Y].image:E.image[Y],ge[Y]=me(E,ge[Y]);const Be=ge[0],Pe=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),Ne=v(E.internalFormat,Pe,fe,E.colorSpace),U=E.isVideoTexture!==!0,R=ee.__version===void 0||ie===!0,F=re.dataReady;let B=S(E,Be);xe(r.TEXTURE_CUBE_MAP,E);let z;if(ve){U&&R&&t.texStorage2D(r.TEXTURE_CUBE_MAP,B,Ne,Be.width,Be.height);for(let Y=0;Y<6;Y++){z=ge[Y].mipmaps;for(let oe=0;oe<z.length;oe++){const pe=z[oe];E.format!==Mi?Pe!==null?U?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,pe.width,pe.height,Pe,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,Ne,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,pe.width,pe.height,Pe,fe,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,Ne,pe.width,pe.height,0,Pe,fe,pe.data)}}}else{if(z=E.mipmaps,U&&R){z.length>0&&B++;const Y=ft(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,B,Ne,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ue){U?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ge[Y].width,ge[Y].height,Pe,fe,ge[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,ge[Y].width,ge[Y].height,0,Pe,fe,ge[Y].data);for(let oe=0;oe<z.length;oe++){const Ke=z[oe].image[Y].image;U?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,Ke.width,Ke.height,Pe,fe,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,Ne,Ke.width,Ke.height,0,Pe,fe,Ke.data)}}else{U?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,fe,ge[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,Pe,fe,ge[Y]);for(let oe=0;oe<z.length;oe++){const pe=z[oe];U?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,Pe,fe,pe.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,Ne,Pe,fe,pe.image[Y])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),ee.__version=re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function he(D,E,q,ie,re,ee){const Me=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),Re=v(q.internalFormat,Me,ce,q.colorSpace),ve=n.get(E),ue=n.get(q);if(ue.__renderTarget=E,!ve.__hasExternalTextures){const ge=Math.max(1,E.width>>ee),Be=Math.max(1,E.height>>ee);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Re,ge,Be,E.depth,0,Me,ce,null):t.texImage2D(re,ee,Re,ge,Be,0,Me,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),Ee(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,re,ue.__webglTexture,0,je(E)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,re,ue.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(D,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const ie=E.depthTexture,re=ie&&ie.isDepthTexture?ie.type:null,ee=b(E.stencilBuffer,re),Me=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=je(E);Ee(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,ee,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,D)}else{const ie=E.textures;for(let re=0;re<ie.length;re++){const ee=ie[re],Me=s.convert(ee.format,ee.colorSpace),ce=s.convert(ee.type),Re=v(ee.internalFormat,Me,ce,ee.colorSpace),ve=je(E);q&&Ee(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,Re,E.width,E.height):Ee(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,Re,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Re,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(E.depthTexture);ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const re=ie.__webglTexture,ee=je(E);if(E.depthTexture.format===Tl)Ee(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(E.depthTexture.format===El)Ee(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ue(D){const E=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ie=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",re)};ie.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ie}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ie=D.texture.mipmaps;ie&&ie.length>0?be(E.__webglFramebuffer[0],D):be(E.__webglFramebuffer,D)}else if(q){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=r.createRenderbuffer(),we(E.__webglDepthbuffer[ie],D,!1);else{const re=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ee)}}else{const ie=D.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),we(E.__webglDepthbuffer,D,!1);else{const re=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(D,E,q){const ie=n.get(D);E!==void 0&&he(ie.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ue(D)}function C(D){const E=D.texture,q=n.get(D),ie=n.get(E);D.addEventListener("dispose",w);const re=D.textures,ee=D.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=E.version,a.memory.textures++),ee){q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ce]=[];for(let Re=0;Re<E.mipmaps.length;Re++)q.__webglFramebuffer[ce][Re]=r.createFramebuffer()}else q.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)q.__webglFramebuffer[ce]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Me)for(let ce=0,Re=re.length;ce<Re;ce++){const ve=n.get(re[ce]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&Ee(D)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const Re=re[ce];q.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ce]);const ve=s.convert(Re.format,Re.colorSpace),ue=s.convert(Re.type),ge=v(Re.internalFormat,ve,ue,Re.colorSpace,D.isXRRenderTarget===!0),Be=je(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,ge,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,q.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),we(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),xe(r.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)he(q.__webglFramebuffer[ce][Re],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re);else he(q.__webglFramebuffer[ce],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,Re=re.length;ce<Re;ce++){const ve=re[ce],ue=n.get(ve);let ge=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ge,ue.__webglTexture),xe(ge,ve),he(q.__webglFramebuffer,D,ve,r.COLOR_ATTACHMENT0+ce,ge,0),m(ve)&&p(ge)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,ie.__webglTexture),xe(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)he(q.__webglFramebuffer[Re],D,E,r.COLOR_ATTACHMENT0,ce,Re);else he(q.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,ce,0);m(E)&&p(ce),t.unbindTexture()}D.depthBuffer&&Ue(D)}function Fe(D){const E=D.textures;for(let q=0,ie=E.length;q<ie;q++){const re=E[q];if(m(re)){const ee=x(D),Me=n.get(re).__webglTexture;t.bindTexture(ee,Me),p(ee),t.unbindTexture()}}}const Oe=[],Ae=[];function k(D){if(D.samples>0){if(Ee(D)===!1){const E=D.textures,q=D.width,ie=D.height;let re=r.COLOR_BUFFER_BIT;const ee=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(D),ce=E.length>1;if(ce)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Re=D.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ue=n.get(E[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,q,ie,0,0,q,ie,re,r.NEAREST),l===!0&&(Oe.length=0,Ae.length=0,Oe.push(r.COLOR_ATTACHMENT0+ve),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Oe.push(ee),Ae.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ue=n.get(E[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function je(D){return Math.min(i.maxSamples,D.samples)}function Ee(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ge(D){const E=a.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function me(D,E){const q=D.colorSpace,ie=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Bn&&q!==Gr&&(mt.getTransfer(q)===St?(ie!==Mi||re!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=j,this.rebindTextures=lt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ee}function vC(r,e){function t(n,i=Gr){let s;const a=mt.getTransfer(i);if(n===tr)return r.UNSIGNED_BYTE;if(n===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(n===op)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mb)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===wb)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tb)return r.BYTE;if(n===Eb)return r.SHORT;if(n===yl)return r.UNSIGNED_SHORT;if(n===sp)return r.INT;if(n===Ks)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Il)return r.HALF_FLOAT;if(n===Ab)return r.ALPHA;if(n===Rb)return r.RGB;if(n===Mi)return r.RGBA;if(n===Tl)return r.DEPTH_COMPONENT;if(n===El)return r.DEPTH_STENCIL;if(n===lp)return r.RED;if(n===cp)return r.RED_INTEGER;if(n===Cb)return r.RG;if(n===up)return r.RG_INTEGER;if(n===hp)return r.RGBA_INTEGER;if(n===zc||n===Hc||n===Gc||n===Vc)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Of||n===kf||n===Bf||n===zf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Of)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hf||n===Gf||n===Vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hf||n===Gf)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wf||n===Xf||n===qf||n===jf||n===Yf||n===Kf||n===$f||n===Jf||n===Zf||n===Qf||n===ed||n===td||n===nd||n===id)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$f)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qf)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ed)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===td)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nd)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===id)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rd||n===sd||n===ad)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rd)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ad)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===od||n===ld||n===cd||n===ud)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===od)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ud)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const xC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yC=`
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

}`;class SC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jb(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cr({vertexShader:xC,fragmentShader:yC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends ho{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new SC,p={},x=t.getContextAttributes();let v=null,b=null;const S=[],M=[],w=new dt;let P=null;const T=new vn;T.viewport=new _t;const y=new vn;y.viewport=new _t;const L=[T,y],N=new NE;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=S[J];return ne===void 0&&(ne=new Eh,S[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=S[J];return ne===void 0&&(ne=new Eh,S[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=S[J];return ne===void 0&&(ne=new Eh,S[J]=ne),ne.getHandSpace()};function O(J){const ne=M.indexOf(J.inputSource);if(ne===-1)return;const he=S[ne];he!==void 0&&(he.update(J.inputSource,J.frame,c||a),he.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",te);for(let J=0;J<S.length;J++){const ne=M[J];ne!==null&&(M[J]=null,S[J].disconnect(ne))}G=null,W=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(v),d=null,f=null,h=null,i=null,b=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",K),i.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,we=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=x.stencil?El:Tl,we=x.stencil?Sl:Ks);const Ue={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ue),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new $s(f.textureWidth,f.textureHeight,{format:Mi,type:tr,depthTexture:new qb(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new $s(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(J){for(let ne=0;ne<J.removed.length;ne++){const he=J.removed[ne],we=M.indexOf(he);we>=0&&(M[we]=null,S[we].disconnect(he))}for(let ne=0;ne<J.added.length;ne++){const he=J.added[ne];let we=M.indexOf(he);if(we===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=M.length){M.push(he),we=Ue;break}else if(M[Ue]===null){M[Ue]=he,we=Ue;break}if(we===-1)break}const be=S[we];be&&be.connect(he)}}const j=new X,ae=new X;function I(J,ne,he){j.setFromMatrixPosition(ne.matrixWorld),ae.setFromMatrixPosition(he.matrixWorld);const we=j.distanceTo(ae),be=ne.projectionMatrix.elements,Ue=he.projectionMatrix.elements,lt=be[14]/(be[10]-1),C=be[14]/(be[10]+1),Fe=(be[9]+1)/be[5],Oe=(be[9]-1)/be[5],Ae=(be[8]-1)/be[0],k=(Ue[8]+1)/Ue[0],je=lt*Ae,Ee=lt*k,Ge=we/(-Ae+k),me=Ge*-Ae;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(me),J.translateZ(Ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ft=lt+Ge,D=C+Ge,E=je-me,q=Ee+(we-me),ie=Fe*C/D*ft,re=Oe*C/D*ft;J.projectionMatrix.makePerspective(E,q,ie,re,ft,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ne=J.near,he=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(he=m.depthFar)),N.near=y.near=T.near=ne,N.far=y.far=T.far=he,(G!==N.near||W!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,W=N.far),N.layers.mask=J.layers.mask|6,T.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const we=J.parent,be=N.cameras;le(N,we);for(let Ue=0;Ue<be.length;Ue++)le(be[Ue],we);be.length===2?I(N,T,y):N.projectionMatrix.copy(T.projectionMatrix),xe(J,N,we)};function xe(J,ne,he){he===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(he.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ro*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let Je=null;function ke(J,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let we=!1;he.length!==N.cameras.length&&(N.cameras.length=0,we=!0);for(let C=0;C<he.length;C++){const Fe=he[C];let Oe=null;if(d!==null)Oe=d.getViewport(Fe);else{const k=h.getViewSubImage(f,Fe);Oe=k.viewport,C===0&&(e.setRenderTargetTextures(b,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(b))}let Ae=L[C];Ae===void 0&&(Ae=new vn,Ae.layers.enable(C),Ae.viewport=new _t,L[C]=Ae),Ae.matrix.fromArray(Fe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Fe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),C===0&&(N.matrix.copy(Ae.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),we===!0&&N.cameras.push(Ae)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const C=h.getDepthInformation(he[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<he.length;C++){const Fe=he[C].camera;if(Fe){let Oe=p[Fe];Oe||(Oe=new jb,p[Fe]=Oe);const Ae=h.getCameraImage(Fe);Oe.sourceTexture=Ae}}}}for(let he=0;he<S.length;he++){const we=M[he],be=S[he];we!==null&&be!==void 0&&be.update(we,ne,c||a)}Je&&Je(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Se=new bv;Se.setAnimationLoop(ke),this.setAnimationLoop=function(J){Je=J},this.dispose=function(){}}}const bs=new nr,EC=new rt;function MC(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bb(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,b=x.envMapRotation;v&&(m.envMap.value=v,bs.copy(b),bs.x*=-1,bs.y*=-1,bs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(EC.makeRotationFromEuler(bs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wC(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function c(x,v){let b=i[x.id];b===void 0&&(g(x),b=u(x),i[x.id]=b,x.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(x,S);const M=e.render.frame;s[x.id]!==M&&(f(x),s[x.id]=M)}function u(x){const v=h();x.__bindingPointIndex=v;const b=r.createBuffer(),S=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,S,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,b),b}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],b=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let M=0,w=b.length;M<w;M++){const P=Array.isArray(b[M])?b[M]:[b[M]];for(let T=0,y=P.length;T<y;T++){const L=P[T];if(d(L,M,T,S)===!0){const N=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let O=0;O<G.length;O++){const K=G[O],te=_(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,N+W,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,b,S){const M=x.value,w=v+"_"+b;if(S[w]===void 0)return typeof M=="number"||typeof M=="boolean"?S[w]=M:S[w]=M.clone(),!0;{const P=S[w];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return S[w]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(x){const v=x.uniforms;let b=0;const S=16;for(let w=0,P=v.length;w<P;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,L=T.length;y<L;y++){const N=T[y],G=Array.isArray(N.value)?N.value:[N.value];for(let W=0,O=G.length;W<O;W++){const K=G[W],te=_(K),j=b%S,ae=j%te.boundary,I=j+ae;b+=ae,I!==0&&S-I<te.storage&&(b+=S-I),N.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=te.storage}}}const M=b%S;return M>0&&(b+=S-M),x.__size=b,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Rp{constructor(e={}){const{canvas:t=PT(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let S=!1;this._outputColorSpace=Ht;let M=0,w=0,P=null,T=-1,y=null;const L=new _t,N=new _t;let G=null;const W=new Qe(0);let O=0,K=t.width,te=t.height,j=1,ae=null,I=null;const le=new _t(0,0,K,te),xe=new _t(0,0,K,te);let Je=!1;const ke=new _p;let Se=!1,J=!1;const ne=new rt,he=new X,we=new _t,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function lt(){return P===null?j:1}let C=n;function Fe(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rp}`),t.addEventListener("webglcontextlost",F,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",z,!1),C===null){const H="webgl2";if(C=Fe(H,A),C===null)throw Fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Oe,Ae,k,je,Ee,Ge,me,ft,D,E,q,ie,re,ee,Me,ce,Re,ve,ue,ge,Be,Pe,fe,Ne;function U(){Oe=new OA(C),Oe.init(),Pe=new vC(C,Oe),Ae=new PA(C,Oe,e,Pe),k=new _C(C,Oe),Ae.reversedDepthBuffer&&f&&k.buffers.depth.setReversed(!0),je=new zA(C),Ee=new rC,Ge=new bC(C,Oe,k,Ee,Ae,Pe,je),me=new LA(b),ft=new NA(b),D=new qM(C),fe=new RA(C,D),E=new kA(C,D,je,fe),q=new GA(C,E,D,je),ue=new HA(C,Ae,Ge),ce=new DA(Ee),ie=new iC(b,me,ft,Oe,Ae,fe,ce),re=new MC(b,Ee),ee=new aC,Me=new fC(Oe),ve=new AA(b,me,ft,k,q,d,l),Re=new mC(b,q,Ae),Ne=new wC(C,je,Ae,k),ge=new CA(C,Oe,je),Be=new BA(C,Oe,je),je.programs=ie.programs,b.capabilities=Ae,b.extensions=Oe,b.properties=Ee,b.renderLists=ee,b.shadowMap=Re,b.state=k,b.info=je}U();const R=new TC(b,C);this.xr=R,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=Oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(K,te,!1))},this.getSize=function(A){return A.set(K,te)},this.setSize=function(A,H,Z=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,te=H,t.width=Math.floor(A*j),t.height=Math.floor(H*j),Z===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(K*j,te*j).floor()},this.setDrawingBufferSize=function(A,H,Z){K=A,te=H,j=Z,t.width=Math.floor(A*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,H,Z,Q){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,H,Z,Q),k.viewport(L.copy(le).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(xe)},this.setScissor=function(A,H,Z,Q){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,H,Z,Q),k.scissor(N.copy(xe).multiplyScalar(j).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){k.setScissorTest(Je=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Z=!0){let Q=0;if(A){let V=!1;if(P!==null){const se=P.texture.format;V=se===hp||se===up||se===cp}if(V){const se=P.texture.type,_e=se===tr||se===Ks||se===yl||se===Sl||se===ap||se===op,Le=ve.getClearColor(),Ce=ve.getClearAlpha(),We=Le.r,He=Le.g,ze=Le.b;_e?(g[0]=We,g[1]=He,g[2]=ze,g[3]=Ce,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=We,_[1]=He,_[2]=ze,_[3]=Ce,C.clearBufferiv(C.COLOR,0,_))}else Q|=C.COLOR_BUFFER_BIT}H&&(Q|=C.DEPTH_BUFFER_BIT),Z&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",F,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",z,!1),ve.dispose(),ee.dispose(),Me.dispose(),Ee.dispose(),me.dispose(),ft.dispose(),q.dispose(),fe.dispose(),Ne.dispose(),ie.dispose(),R.dispose(),R.removeEventListener("sessionstart",Ze),R.removeEventListener("sessionend",ye),Xe.stop()};function F(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=je.autoReset,H=Re.enabled,Z=Re.autoUpdate,Q=Re.needsUpdate,V=Re.type;U(),je.autoReset=A,Re.enabled=H,Re.autoUpdate=Z,Re.needsUpdate=Q,Re.type=V}function z(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Y(A){const H=A.target;H.removeEventListener("dispose",Y),oe(H)}function oe(A){pe(A),Ee.remove(A)}function pe(A){const H=Ee.get(A).programs;H!==void 0&&(H.forEach(function(Z){ie.releaseProgram(Z)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Z,Q,V,se){H===null&&(H=be);const _e=V.isMesh&&V.matrixWorld.determinant()<0,Le=vt(A,H,Z,Q,V);k.setMaterial(Q,_e);let Ce=Z.index,We=1;if(Q.wireframe===!0){if(Ce=E.getWireframeAttribute(Z),Ce===void 0)return;We=2}const He=Z.drawRange,ze=Z.attributes.position;let et=He.start*We,ct=(He.start+He.count)*We;se!==null&&(et=Math.max(et,se.start*We),ct=Math.min(ct,(se.start+se.count)*We)),Ce!==null?(et=Math.max(et,0),ct=Math.min(ct,Ce.count)):ze!=null&&(et=Math.max(et,0),ct=Math.min(ct,ze.count));const zt=ct-et;if(zt<0||zt===1/0)return;fe.setup(V,Q,Le,Z,Ce);let Pt,Et=ge;if(Ce!==null&&(Pt=D.get(Ce),Et=Be,Et.setIndex(Pt)),V.isMesh)Q.wireframe===!0?(k.setLineWidth(Q.wireframeLinewidth*lt()),Et.setMode(C.LINES)):Et.setMode(C.TRIANGLES);else if(V.isLine){let qe=Q.linewidth;qe===void 0&&(qe=1),k.setLineWidth(qe*lt()),V.isLineSegments?Et.setMode(C.LINES):V.isLineLoop?Et.setMode(C.LINE_LOOP):Et.setMode(C.LINE_STRIP)}else V.isPoints?Et.setMode(C.POINTS):V.isSprite&&Et.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qe=V._multiDrawStarts,Ft=V._multiDrawCounts,gt=V._multiDrawCount,Kn=Ce?D.get(Ce).bytesPerElement:1,na=Ee.get(Q).currentProgram.getUniforms();for(let $n=0;$n<gt;$n++)na.setValue(C,"_gl_DrawID",$n),Et.render(qe[$n]/Kn,Ft[$n])}else if(V.isInstancedMesh)Et.renderInstances(et,zt,V.count);else if(Z.isInstancedBufferGeometry){const qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ft=Math.min(Z.instanceCount,qe);Et.renderInstances(et,zt,Ft)}else Et.render(et,zt)};function Ke(A,H,Z){A.transparent===!0&&A.side===ai&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Wt(A,H,Z),A.side=Rr,A.needsUpdate=!0,Wt(A,H,Z),A.side=ai):Wt(A,H,Z)}this.compile=function(A,H,Z=null){Z===null&&(Z=A),p=Me.get(Z),p.init(H),v.push(p),Z.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==Z&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Q=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const se=V.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){const Le=se[_e];Ke(Le,Z,V),Q.add(Le)}else Ke(se,Z,V),Q.add(se)}),p=v.pop(),Q},this.compileAsync=function(A,H,Z=null){const Q=this.compile(A,H,Z);return new Promise(V=>{function se(){if(Q.forEach(function(_e){Ee.get(_e).currentProgram.isReady()&&Q.delete(_e)}),Q.size===0){V(A);return}setTimeout(se,10)}Oe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let de=null;function De(A){de&&de(A)}function Ze(){Xe.stop()}function ye(){Xe.start()}const Xe=new bv;Xe.setAnimationLoop(De),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){de=A,R.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},R.addEventListener("sessionstart",Ze),R.addEventListener("sessionend",ye),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(H),H=R.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,H,P),p=Me.get(A,v.length),p.init(H),v.push(p),ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ke.setFromProjectionMatrix(ne,Ki,H.reversedDepth),J=this.localClippingEnabled,Se=ce.init(this.clippingPlanes,J),m=ee.get(A,x.length),m.init(),x.push(m),R.enabled===!0&&R.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&Ve(se,H,-1/0,b.sortObjects)}Ve(A,H,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ae,I),Ue=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Ue&&ve.addToRenderList(m,A),this.info.render.frame++,Se===!0&&ce.beginShadows();const Z=p.state.shadowsArray;Re.render(Z,A,H),Se===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const se=H.cameras;if(V.length>0)for(let _e=0,Le=se.length;_e<Le;_e++){const Ce=se[_e];Vt(Q,V,A,Ce)}Ue&&ve.render(A);for(let _e=0,Le=se.length;_e<Le;_e++){const Ce=se[_e];$e(m,A,Ce,Ce.viewport)}}else V.length>0&&Vt(Q,V,A,H),Ue&&ve.render(A),$e(m,A,H);P!==null&&w===0&&(Ge.updateMultisampleRenderTarget(P),Ge.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(b,A,H),fe.resetDefaultState(),T=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],Se===!0&&ce.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ve(A,H,Z,Q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){Q&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const _e=q.update(A),Le=A.material;Le.visible&&m.push(A,_e,Le,Z,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const _e=q.update(A),Le=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),we.copy(_e.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Le)){const Ce=_e.groups;for(let We=0,He=Ce.length;We<He;We++){const ze=Ce[We],et=Le[ze.materialIndex];et&&et.visible&&m.push(A,_e,et,Z,we.z,ze)}}else Le.visible&&m.push(A,_e,Le,Z,we.z,null)}}const se=A.children;for(let _e=0,Le=se.length;_e<Le;_e++)Ve(se[_e],H,Z,Q)}function $e(A,H,Z,Q){const V=A.opaque,se=A.transmissive,_e=A.transparent;p.setupLightsView(Z),Se===!0&&ce.setGlobalState(b.clippingPlanes,Z),Q&&k.viewport(L.copy(Q)),V.length>0&&nt(V,H,Z),se.length>0&&nt(se,H,Z),_e.length>0&&nt(_e,H,Z),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Vt(A,H,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new $s(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Il:tr,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const se=p.state.transmissionRenderTarget[Q.id],_e=Q.viewport||L;se.setSize(_e.z*b.transmissionResolutionScale,_e.w*b.transmissionResolutionScale);const Le=b.getRenderTarget(),Ce=b.getActiveCubeFace(),We=b.getActiveMipmapLevel();b.setRenderTarget(se),b.getClearColor(W),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear(),Ue&&ve.render(Z);const He=b.toneMapping;b.toneMapping=ts;const ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Se===!0&&ce.setGlobalState(b.clippingPlanes,Q),nt(A,Z,Q),Ge.updateMultisampleRenderTarget(se),Ge.updateRenderTargetMipmap(se),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,zt=H.length;ct<zt;ct++){const Pt=H[ct],Et=Pt.object,qe=Pt.geometry,Ft=Pt.material,gt=Pt.group;if(Ft.side===ai&&Et.layers.test(Q.layers)){const Kn=Ft.side;Ft.side=qn,Ft.needsUpdate=!0,Lt(Et,Z,Q,qe,Ft,gt),Ft.side=Kn,Ft.needsUpdate=!0,et=!0}}et===!0&&(Ge.updateMultisampleRenderTarget(se),Ge.updateRenderTargetMipmap(se))}b.setRenderTarget(Le,Ce,We),b.setClearColor(W,O),ze!==void 0&&(Q.viewport=ze),b.toneMapping=He}function nt(A,H,Z){const Q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,se=A.length;V<se;V++){const _e=A[V],Le=_e.object,Ce=_e.geometry,We=_e.group;let He=_e.material;He.allowOverride===!0&&Q!==null&&(He=Q),Le.layers.test(Z.layers)&&Lt(Le,H,Z,Ce,He,We)}}function Lt(A,H,Z,Q,V,se){A.onBeforeRender(b,H,Z,Q,V,se),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(b,H,Z,Q,A,se),V.transparent===!0&&V.side===ai&&V.forceSinglePass===!1?(V.side=qn,V.needsUpdate=!0,b.renderBufferDirect(Z,H,Q,V,A,se),V.side=Rr,V.needsUpdate=!0,b.renderBufferDirect(Z,H,Q,V,A,se),V.side=ai):b.renderBufferDirect(Z,H,Q,V,A,se),A.onAfterRender(b,H,Z,Q,V,se)}function Wt(A,H,Z){H.isScene!==!0&&(H=be);const Q=Ee.get(A),V=p.state.lights,se=p.state.shadowsArray,_e=V.state.version,Le=ie.getParameters(A,V.state,se,H,Z),Ce=ie.getProgramCacheKey(Le);let We=Q.programs;Q.environment=A.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(A.isMeshStandardMaterial?ft:me).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Y),We=new Map,Q.programs=We);let He=We.get(Ce);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===_e)return Tt(A,Le),He}else Le.uniforms=ie.getUniforms(A),A.onBeforeCompile(Le,b),He=ie.acquireProgram(Le,Ce),We.set(Ce,He),Q.uniforms=Le.uniforms;const ze=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=ce.uniform),Tt(A,Le),Q.needsLights=Ct(A),Q.lightsStateVersion=_e,Q.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function Rt(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=qc.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Tt(A,H){const Z=Ee.get(A);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function vt(A,H,Z,Q,V){H.isScene!==!0&&(H=be),Ge.resetTextureUnits();const se=H.fog,_e=Q.isMeshStandardMaterial?H.environment:null,Le=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bn,Ce=(Q.isMeshStandardMaterial?ft:me).get(Q.envMap||_e),We=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ze=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,ct=!!Z.morphAttributes.color;let zt=ts;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(zt=b.toneMapping);const Pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=Pt!==void 0?Pt.length:0,qe=Ee.get(Q),Ft=p.state.lights;if(Se===!0&&(J===!0||A!==y)){const Mn=A===y&&Q.id===T;ce.setState(Q,A,Mn)}let gt=!1;Q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ft.state.version||qe.outputColorSpace!==Le||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==Ce||Q.fog===!0&&qe.fog!==se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ce.numPlanes||qe.numIntersection!==ce.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==He||qe.morphTargets!==ze||qe.morphNormals!==et||qe.morphColors!==ct||qe.toneMapping!==zt||qe.morphTargetsCount!==Et)&&(gt=!0):(gt=!0,qe.__version=Q.version);let Kn=qe.currentProgram;gt===!0&&(Kn=Wt(Q,H,V));let na=!1,$n=!1,vo=!1;const Nt=Kn.getUniforms(),pi=qe.uniforms;if(k.useProgram(Kn.program)&&(na=!0,$n=!0,vo=!0),Q.id!==T&&(T=Q.id,$n=!0),na||y!==A){k.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(C,"projectionMatrix",A.projectionMatrix),Nt.setValue(C,"viewMatrix",A.matrixWorldInverse);const zn=Nt.map.cameraPosition;zn!==void 0&&zn.setValue(C,he.setFromMatrixPosition(A.matrixWorld)),Ae.logarithmicDepthBuffer&&Nt.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Nt.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,$n=!0,vo=!0)}if(V.isSkinnedMesh){Nt.setOptional(C,V,"bindMatrix"),Nt.setOptional(C,V,"bindMatrixInverse");const Mn=V.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Nt.setValue(C,"boneTexture",Mn.boneTexture,Ge))}V.isBatchedMesh&&(Nt.setOptional(C,V,"batchingTexture"),Nt.setValue(C,"batchingTexture",V._matricesTexture,Ge),Nt.setOptional(C,V,"batchingIdTexture"),Nt.setValue(C,"batchingIdTexture",V._indirectTexture,Ge),Nt.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&Nt.setValue(C,"batchingColorTexture",V._colorsTexture,Ge));const mi=Z.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ue.update(V,Z,Kn),($n||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Nt.setValue(C,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pi.envMap.value=Ce,pi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(pi.envMapIntensity.value=H.environmentIntensity),$n&&(Nt.setValue(C,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&Yn(pi,vo),se&&Q.fog===!0&&re.refreshFogUniforms(pi,se),re.refreshMaterialUniforms(pi,Q,j,te,p.state.transmissionRenderTarget[A.id]),qc.upload(C,Rt(qe),pi,Ge)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(qc.upload(C,Rt(qe),pi,Ge),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Nt.setValue(C,"center",V.center),Nt.setValue(C,"modelViewMatrix",V.modelViewMatrix),Nt.setValue(C,"normalMatrix",V.normalMatrix),Nt.setValue(C,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Mn=Q.uniformsGroups;for(let zn=0,Iu=Mn.length;zn<Iu;zn++){const us=Mn[zn];Ne.update(us,Kn),Ne.bind(us,Kn)}}return Kn}function Yn(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ct(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,H,Z){const Q=Ee.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ee.get(A.texture).__webglTexture=H,Ee.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const Z=Ee.get(A);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const En=C.createFramebuffer();this.setRenderTarget=function(A,H=0,Z=0){P=A,M=H,w=Z;let Q=!0,V=null,se=!1,_e=!1;if(A){const Ce=Ee.get(A);if(Ce.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(C.FRAMEBUFFER,null),Q=!1;else if(Ce.__webglFramebuffer===void 0)Ge.setupRenderTarget(A);else if(Ce.__hasExternalTextures)Ge.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Ce.__boundDepthTexture!==ze){if(ze!==null&&Ee.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(_e=!0);const He=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[H])?V=He[H][Z]:V=He[H],se=!0):A.samples>0&&Ge.useMultisampledRTT(A)===!1?V=Ee.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?V=He[Z]:V=He,L.copy(A.viewport),N.copy(A.scissor),G=A.scissorTest}else L.copy(le).multiplyScalar(j).floor(),N.copy(xe).multiplyScalar(j).floor(),G=Je;if(Z!==0&&(V=En),k.bindFramebuffer(C.FRAMEBUFFER,V)&&Q&&k.drawBuffers(A,V),k.viewport(L),k.scissor(N),k.setScissorTest(G),se){const Ce=Ee.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,Z)}else if(_e){const Ce=H;for(let We=0;We<A.textures.length;We++){const He=Ee.get(A.textures[We]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+We,He.__webglTexture,Z,Ce)}}else if(A!==null&&Z!==0){const Ce=Ee.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,Z)}T=-1},this.readRenderTargetPixels=function(A,H,Z,Q,V,se,_e,Le=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){k.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const We=A.textures[Le],He=We.format,ze=We.type;if(!Ae.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Q&&Z>=0&&Z<=A.height-V&&(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),C.readPixels(H,Z,Q,V,Pe.convert(He),Pe.convert(ze),se))}finally{const We=P!==null?Ee.get(P).__webglFramebuffer:null;k.bindFramebuffer(C.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,H,Z,Q,V,se,_e,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce)if(H>=0&&H<=A.width-Q&&Z>=0&&Z<=A.height-V){k.bindFramebuffer(C.FRAMEBUFFER,Ce);const We=A.textures[Le],He=We.format,ze=We.type;if(!Ae.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,et),C.bufferData(C.PIXEL_PACK_BUFFER,se.byteLength,C.STREAM_READ),A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),C.readPixels(H,Z,Q,V,Pe.convert(He),Pe.convert(ze),0);const ct=P!==null?Ee.get(P).__webglFramebuffer:null;k.bindFramebuffer(C.FRAMEBUFFER,ct);const zt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await DT(C,zt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,et),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,se),C.deleteBuffer(et),C.deleteSync(zt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Z=0){const Q=Math.pow(2,-Z),V=Math.floor(A.image.width*Q),se=Math.floor(A.image.height*Q),_e=H!==null?H.x:0,Le=H!==null?H.y:0;Ge.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,_e,Le,V,se),k.unbindTexture()};const di=C.createFramebuffer(),Zt=C.createFramebuffer();this.copyTextureToTexture=function(A,H,Z=null,Q=null,V=0,se=null){se===null&&(V!==0?(Rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=V,V=0):se=0);let _e,Le,Ce,We,He,ze,et,ct,zt;const Pt=A.isCompressedTexture?A.mipmaps[se]:A.image;if(Z!==null)_e=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,We=Z.min.x,He=Z.min.y,ze=Z.isBox3?Z.min.z:0;else{const mi=Math.pow(2,-V);_e=Math.floor(Pt.width*mi),Le=Math.floor(Pt.height*mi),A.isDataArrayTexture?Ce=Pt.depth:A.isData3DTexture?Ce=Math.floor(Pt.depth*mi):Ce=1,We=0,He=0,ze=0}Q!==null?(et=Q.x,ct=Q.y,zt=Q.z):(et=0,ct=0,zt=0);const Et=Pe.convert(H.format),qe=Pe.convert(H.type);let Ft;H.isData3DTexture?(Ge.setTexture3D(H,0),Ft=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ge.setTexture2DArray(H,0),Ft=C.TEXTURE_2D_ARRAY):(Ge.setTexture2D(H,0),Ft=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const gt=C.getParameter(C.UNPACK_ROW_LENGTH),Kn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),na=C.getParameter(C.UNPACK_SKIP_PIXELS),$n=C.getParameter(C.UNPACK_SKIP_ROWS),vo=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,We),C.pixelStorei(C.UNPACK_SKIP_ROWS,He),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze);const Nt=A.isDataArrayTexture||A.isData3DTexture,pi=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const mi=Ee.get(A),Mn=Ee.get(H),zn=Ee.get(mi.__renderTarget),Iu=Ee.get(Mn.__renderTarget);k.bindFramebuffer(C.READ_FRAMEBUFFER,zn.__webglFramebuffer),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,Iu.__webglFramebuffer);for(let us=0;us<Ce;us++)Nt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(A).__webglTexture,V,ze+us),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(H).__webglTexture,se,zt+us)),C.blitFramebuffer(We,He,_e,Le,et,ct,_e,Le,C.DEPTH_BUFFER_BIT,C.NEAREST);k.bindFramebuffer(C.READ_FRAMEBUFFER,null),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||Ee.has(A)){const mi=Ee.get(A),Mn=Ee.get(H);k.bindFramebuffer(C.READ_FRAMEBUFFER,di),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zt);for(let zn=0;zn<Ce;zn++)Nt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mi.__webglTexture,V,ze+zn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,mi.__webglTexture,V),pi?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mn.__webglTexture,se,zt+zn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mn.__webglTexture,se),V!==0?C.blitFramebuffer(We,He,_e,Le,et,ct,_e,Le,C.COLOR_BUFFER_BIT,C.NEAREST):pi?C.copyTexSubImage3D(Ft,se,et,ct,zt+zn,We,He,_e,Le):C.copyTexSubImage2D(Ft,se,et,ct,We,He,_e,Le);k.bindFramebuffer(C.READ_FRAMEBUFFER,null),k.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pi?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Ft,se,et,ct,zt,_e,Le,Ce,Et,qe,Pt.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(Ft,se,et,ct,zt,_e,Le,Ce,Et,Pt.data):C.texSubImage3D(Ft,se,et,ct,zt,_e,Le,Ce,Et,qe,Pt):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,se,et,ct,_e,Le,Et,qe,Pt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,se,et,ct,Pt.width,Pt.height,Et,Pt.data):C.texSubImage2D(C.TEXTURE_2D,se,et,ct,_e,Le,Et,qe,Pt);C.pixelStorei(C.UNPACK_ROW_LENGTH,gt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,na),C.pixelStorei(C.UNPACK_SKIP_ROWS,$n),C.pixelStorei(C.UNPACK_SKIP_IMAGES,vo),se===0&&H.generateMipmaps&&C.generateMipmap(Ft),k.unbindTexture()},this.initRenderTarget=function(A){Ee.get(A).__webglFramebuffer===void 0&&Ge.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ge.setTextureCube(A,0):A.isData3DTexture?Ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ge.setTexture2DArray(A,0):Ge.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){M=0,w=0,P=null,k.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}function o_(r,e){if(e===nT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===hd||e===Pb){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===hd)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Tv extends mo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DC(t)}),this.register(function(t){return new LC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new NC(t)}),this.register(function(t){return new OC(t)}),this.register(function(t){return new PC(t)}),this.register(function(t){return new kC(t)}),this.register(function(t){return new IC(t)}),this.register(function(t){return new zC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new RC(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new XC(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ll.extractUrlBase(e);a=ll.resolveURL(c,this.path)}else a=ll.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new $b(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ev){try{a[ht.KHR_BINARY_GLTF]=new qC(e)}catch(h){i&&i(h);return}s=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sP(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:a[h]=new CC;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[h]=new jC(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[h]=new YC;break;case ht.KHR_MESH_QUANTIZATION:a[h]=new KC;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function AC(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class RC{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Du(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cu(u),c.distance=h;break;case"spot":c=new DE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class CC{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return $i}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(i)}}class PC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class DC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(o,o)}return Promise.all(s)}}class LC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class IC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class UC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Bn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ht)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class FC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class NC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(o[0],o[1],o[2],Bn),Promise.all(s)}}class OC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class kC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(o[0],o[1],o[2],Bn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ht)),Promise.all(s)}}class BC{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class zC{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class HC{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class GC{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class VC{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class WC{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class XC{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==bi.TRIANGLES&&c.mode!==bi.TRIANGLE_STRIP&&c.mode!==bi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new rt,m=new X,p=new cs,x=new X(1,1,1),v=new oE(g.geometry,g.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),v.setMatrixAt(b,_.compose(m,p,x));for(const b in l)if(b==="_COLOR_0"){const S=l[b];v.instanceColor=new dd(S.array,S.itemSize,S.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Ut.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Ev="glTF",Do=12,l_={JSON:1313821514,BIN:5130562};class qC{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Do),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ev)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Do,s=new DataView(e,Do);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===l_.JSON){const c=new Uint8Array(e,Do+a,o);this.content=n.decode(c)}else if(l===l_.BIN){const c=Do+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=_d[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=_d[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Wa[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},o,c,Bn,f)})})}}class YC{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KC{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Mv extends Fl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,x=1-m,v=p-f+h;for(let b=0;b!==o;b++){const S=a[_+b+o],M=a[_+b+l]*u,w=a[g+b+o],P=a[g+b]*u;s[b]=x*S+v*M+m*w+p*P}return s}}const $C=new cs;class JC extends Mv{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return $C.fromArray(s).normalize().toArray(s),s}}const bi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Wa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},c_={9728:Nn,9729:Sn,9984:Sb,9985:Bc,9986:Go,9987:Ei},u_={33071:Yr,33648:uu,10497:io},Hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Or={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZC={CUBICSPLINE:void 0,LINEAR:wl,STEP:Ml},Gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new vp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rr})),r.DefaultMaterial}function vs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eP(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function tP(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nP(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vh(t.attributes):e=r.indices+":"+Vh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Vh(r.targets[n]);return e}function Vh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function bd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iP(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rP=new rt;class sP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Jb(this.options.manager):this.textureLoader=new FE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $b(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vs(s,o,i),zi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ll.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Hh[i.type],o=Wa[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new On(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Hh[i.type],c=Wa[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(_=new c(o,p*d,i.count*d/u),v=new nE(_,d/u),t.cache.add(x,v)),m=new mp(v,l,f%d/u,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new On(_,l,g);if(i.sparse!==void 0){const p=Hh.SCALAR,x=Wa[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,S=new x(a[1],v,i.sparse.count*p),M=new c(a[2],b,i.sparse.count*l);o!==null&&(m=new On(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,P=S.length;w<P;w++){const T=S[w];if(m.setX(T,M[w*l]),l>=2&&m.setY(T,M[w*l+1]),l>=3&&m.setZ(T,M[w*l+2]),l>=4&&m.setW(T,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=c_[f.magFilter]||Sn,u.minFilter=c_[f.minFilter]||Ei,u.wrapS=u_[f.wrapS]||io,u.wrapT=u_[f.wrapT]||io,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Nn&&u.minFilter!==Sn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new cn(_);m.needsUpdate=!0,f(m)}),t.load(ll.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),zi(h,a),h.userData.mimeType=a.mimeType||iP(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xb,Zi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wb,Zi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return vp}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ht)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=ai);const u=s.alphaMode||Gh.OPAQUE;if(u===Gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Gh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==$i&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new dt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==$i&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==$i){const h=s.emissiveFactor;o.emissive=new Qe().setRGB(h[0],h[1],h[2],Bn)}return s.emissiveTexture!==void 0&&a!==$i&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),zi(h,s),t.associations.set(h,{materials:e}),s.extensions&&vs(i,h,s),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return h_(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=nP(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=h_(new sr,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?QC(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=a[d];let p;const x=c[d];if(m.mode===bi.TRIANGLES||m.mode===bi.TRIANGLE_STRIP||m.mode===bi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new rE(_,x):new fn(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===bi.TRIANGLE_STRIP?p.geometry=o_(p.geometry,Pb):m.mode===bi.TRIANGLE_FAN&&(p.geometry=o_(p.geometry,hd));else if(m.mode===bi.LINES)p=new hE(_,x);else if(m.mode===bi.LINE_STRIP)p=new bp(_,x);else if(m.mode===bi.LINE_LOOP)p=new fE(_,x);else if(m.mode===bi.POINTS)p=new dE(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&tP(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),zi(p,s),m.extensions&&vs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&vs(i,h[0],s),h[0];const f=new Kr;s.extensions&&vs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(CT.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Pu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new rt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gp(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let v=0,b=f.length;v<b;v++){const S=f[v],M=d[v],w=g[v],P=_[v],T=m[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,M,w,P,T);if(y)for(let L=0;L<y.length;L++)p.push(y[L])}const x=new SE(s,void 0,p);return zi(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,rP)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Gb:c.length>1?u=new Kr:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),zi(u,s),s.extensions&&vs(n,u,s),s.matrix!==void 0){const h=new rt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Kr;n.name&&(s.name=i.createUniqueName(n.name)),zi(s,n),n.extensions&&vs(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Zi||f instanceof cn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Or[s.path]===Or.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Or[s.path]){case Or.weights:c=ao;break;case Or.rotation:c=oo;break;case Or.translation:case Or.scale:c=lo;break;default:switch(n.itemSize){case 1:c=ao;break;case 2:case 3:default:c=lo;break}break}const u=i.interpolation!==void 0?ZC[i.interpolation]:wl,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Or[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=bd(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof oo?JC:Mv;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aP(r,e,t){const n=e.attributes,i=new Ai;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),o.normalized){const u=bd(Wa[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new X,l=new X;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=bd(Wa[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new rr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function h_(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=_d[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return mt.workingColorSpace!==Bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),zi(r,e),aP(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?eP(r,e.targets,t):r})}const oP=""+new URL("footer-DWViNq5i.mp3",import.meta.url).href,lP=""+new URL("floor-Bfx8nsPH.glb",import.meta.url).href,cP=""+new URL("award-1-CSzIohE8.avif",import.meta.url).href,uP=""+new URL("award-2-DUR0STCu.avif",import.meta.url).href,hP=""+new URL("award-3-Cf31u9yw.avif",import.meta.url).href;var fP=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var b=p.charCodeAt(v);x[v]=b>96?b-97:b>64?b-39:b+4}for(var S=0,v=0;v<p.length;++v)x[S++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,S)}function l(p,x,v,b,S,M,w){var P=p.exports.sbrk,T=b+3&-4,y=P(T*S),L=P(M.length),N=new Uint8Array(p.exports.memory.buffer);N.set(M,L);var G=x(y,b,S,L,M.length);if(G==0&&w&&w(y,T,S),v.set(N.subarray(y,y+b*S)),P(y-P(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var b=v.data;x.pending-=b.count,x.requests[b.id][b.action](b.value),delete x.requests[b.id]},x}function g(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),b=URL.createObjectURL(v),S=h.length;S<p;++S)h[S]=d(b);for(var S=p;S<h.length;++S)h[S].object.postMessage({});h.length=p,URL.revokeObjectURL(b)}function _(p,x,v,b,S){for(var M=h[0],w=1;w<h.length;++w)h[w].pending<M.pending&&(M=h[w]);return new Promise(function(P,T){var y=new Uint8Array(v),L=++f;M.pending+=p,M.requests[L]={resolve:P,reject:T},M.object.postMessage({id:L,count:p,size:x,source:y,mode:b,filter:S},[y.buffer])})}function m(p){var x=p.data;if(!x.id)return self.close();self.ready.then(function(v){try{var b=new Uint8Array(x.count*x.size);l(v,v.exports[x.mode],b,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(S){self.postMessage({id:x.id,count:x.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,v,b,S){l(s,s.exports.meshopt_decodeVertexBuffer,p,x,v,b,s.exports[c[S]])},decodeIndexBuffer:function(p,x,v,b){l(s,s.exports.meshopt_decodeIndexBuffer,p,x,v,b)},decodeIndexSequence:function(p,x,v,b){l(s,s.exports.meshopt_decodeIndexSequence,p,x,v,b)},decodeGltfBuffer:function(p,x,v,b,S,M){l(s,s.exports[u[S]],p,x,v,b,s.exports[c[M]])},decodeGltfBufferAsync:function(p,x,v,b,S){return h.length>0?_(p,x,v,u[b],c[S]):a.then(function(){var M=new Uint8Array(p*x);return l(s,s.exports[u[b]],M,p,x,v,s.exports[c[S]]),M})}}})();const dP=""+new URL("model1-hZVyFTy0.glb",import.meta.url).href,pP=performance.getEntriesByType("navigation")[0],Wh=pP?.type==="reload";$.registerPlugin(Ye);$.ticker.lagSmoothing(1e3,16);const yr=document.querySelector(".roman-statue-viewer"),os=new pp;os.background=null;const _u=new vn(35,yr.clientWidth/yr.clientHeight,.1,100),kl=window.innerWidth<=768;_u.position.set(0,0,kl?20:14);const _o=new Rp({antialias:!kl,alpha:!0});_o.setSize(yr.clientWidth,yr.clientHeight);_o.setPixelRatio(Math.min(window.devicePixelRatio,1.6));_o.outputColorSpace=Ht;yr.appendChild(_o.domElement);const zr=new Cu("#ff1f1f",30,15);zr.position.set(0,2,5);os.add(zr);const Wi={x:0,y:0};window.addEventListener("mousemove",r=>{Wi.x=r.clientX/window.innerWidth*2-1,Wi.y=-(r.clientY/window.innerHeight)*2+1});const wv=new Cu("#ff1f1f",60,20);wv.position.set(3,2,4);os.add(wv);const Av=new Cu("#8b0000",40,15);Av.position.set(-3,1,3);os.add(Av);const mP=new UE("#b90707",.5);os.add(mP);const gP=new Tv,Xt=new Kr;os.add(Xt);let Qn=null,kr=null;gP.load(dP,r=>{Qn=r.scene;const e=new Ai().setFromObject(Qn),t=new X;e.getCenter(t),Qn.position.sub(t);const n=new X;e.getSize(n);const i=5.5/Math.max(n.x,n.y,n.z);Qn.scale.setScalar(i),kr=Qn.clone(!0),Qn.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.metalness=.25,u.material.roughness=.35,u.material.envMapIntensity=1.8)}),kr.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.metalness=.45,u.material.roughness=.2,u.material.envMapIntensity=2.5)}),Qn.position.x+=-1.2,Qn.position.y+=3,Xt.position.y+=kl?-2:1,Qn.rotation.y+=3.1,kr.position.x+=25,kr.position.y+=3,$.to(kr.position,{x:1.4,duration:4,ease:"power4.inOut",delay:Wh?0:5}),$.to(Qn.position,{x:-1.4,duration:4,ease:"power4.inOut",delay:Wh?0:5}),Xt.add(Qn),Xt.add(kr),$.to(Xt.rotation,{x:-6.4,delay:Wh?0:5,duration:5,ease:"power2.out"});const s=new Ai().setFromObject(Xt),a=new X;s.getCenter(a),Qn.position.sub(a),kr.position.sub(a);const o=window.innerWidth<=768;let l=!o;if(!o){if(window.addEventListener("mousemove",u=>{Wi.x=(u.clientX/window.innerWidth-.5)*2,Wi.y=(u.clientY/window.innerHeight-.5)*2}),!l)return;$.to(Xt.rotation,{x:Wi.y*.08,y:Wi.x*.12,duration:.8,ease:"power3.out",overwrite:"auto"}),$.to(Xt.position,{x:Wi.x*.2,y:2.3+Wi.y*.12,duration:.8,ease:"power3.out",overwrite:"auto"})}Xt.position.z,Xt.position.y=o?.3:1.3,Xt.position.z=-2.5,$.to(Xt.rotation,{y:Math.PI*10,ease:"none",scrollTrigger:{trigger:".roman-statue-viewer",start:"top top",end:"900% top",scrub:!0}}),$.timeline({scrollTrigger:{trigger:".roman-statue-viewer",start:"top top",end:()=>window.innerWidth<=800?"270% bottom":"450% bottom",scrub:.8,invalidateOnRefresh:!0}}).to(Xt.position,{z:1,ease:"none"},0).to(Qn.rotation,{x:12.6,ease:"none"},0).to(kr.rotation,{x:-12.6,ease:"none"},0)});const _P=$.timeline({scrollTrigger:{trigger:".box-section-ups",start:"top top",end:"+=2500",scrub:.8,invalidateOnRefresh:!0}});_P.to(Xt.position,{z:-35,y:12,ease:"none",duration:8}).to(Xt.position,{y:20,ease:"none"});const cl=new Audio(oP);cl.preload="auto";cl.volume=1;let Xh;const bP=$.timeline({scrollTrigger:{trigger:"#footer",start:window.innerWidth<=768?"350% center":"400% center",end:window.innerWidth<=768?"450% bottom":"500% bottom",scrub:2,invalidateOnRefresh:!0,immediateRender:!1,onEnter:()=>{cl.pause(),cl.currentTime=0,cl.play().catch(()=>{}),Xh=$.to(Xt.rotation,{y:"+="+Math.PI*2,duration:8,ease:"none",repeat:-1})},onLeaveBack:()=>{Xh&&Xh.kill(),$.to(Xt.rotation,{y:Math.PI*10,duration:1,ease:"power2.out"})}}});bP.to(Xt.position,{z:3,y:kl?-1.5:1.5,duration:10,ease:"none"});function Rv(){requestAnimationFrame(Rv),zr.position.x+=(Wi.x*4-zr.position.x)*.08,zr.position.y+=(Wi.y*2+2-zr.position.y)*.08,zr.position.z=5,kl&&os.remove(zr),_o.render(os,_u)}Rv();window.addEventListener("resize",()=>{_u.aspect=yr.clientWidth/yr.clientHeight,_u.updateProjectionMatrix(),_o.setSize(yr.clientWidth,yr.clientHeight)});window.addEventListener("scroll",()=>{document.documentElement.scrollHeight-window.innerHeight});if(window.innerWidth>768){const r=$.timeline({scrollTrigger:{trigger:".step-of-work",start:"top center",end:"100% bottom",scrub:1,invalidateOnRefresh:!0,immediateRender:!1}});r.to(Xt.rotation,{y:2,duration:20},"0"),r.to(Xt.position,{y:1.5,z:0,duration:10,autoAlpha:1},"0"),r.to(Xt.position,{y:10,autoAlpha:0,duration:8},"15")}const Js=document.querySelector(".regonizations-canvas"),$r=new pp,an=new vn(45,Js.clientWidth/Js.clientHeight,.01,1e3);an.position.set(3,2,5);const kn=new Rp({antialias:!0,alpha:!0,powerPreference:"high-performance"});kn.setSize(Js.clientWidth,Js.clientHeight);kn.setPixelRatio(Math.min(window.devicePixelRatio,1.6));kn.outputColorSpace=Ht;kn.toneMapping=xb;kn.toneMappingExposure=1.2;kn.shadowMap.enabled=!0;kn.shadowMap.type=bb;Js.appendChild(kn.domElement);const vP=new CE(16777215,2236962,2);$r.add(vP);const ea=new Du(16729156,4);ea.position.set(5,8,6);ea.castShadow=!0;ea.shadow.mapSize.set(1024,1024);ea.shadow.camera.near=.1;ea.shadow.camera.far=50;ea.castShadow=!1;kn.shadowMap.enabled=!1;$r.add(ea);const xP=new Du(16729156,2);xP.position.set(-5,3,-4);const Cv=new Du(16729156,2);Cv.position.set(0,8,-8);$r.add(Cv);const Pv=new Tv;Pv.setMeshoptDecoder(fP);Pv.load(lP,r=>{const e=r.scene;$r.add(e),e.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0,S.material&&(S.material.needsUpdate=!0))});const t=new ns(.4,.5),n=new Jb,i=n.load(uP,S=>{S.colorSpace=Ht,S.anisotropy=kn.capabilities.getMaxAnisotropy(),S.minFilter=Ei,S.magFilter=Sn,S.generateMipmaps=!0,S.needsUpdate=!0}),s=new $i({map:i,side:ai}),a=new fn(t,s);a.position.set(-.7,.14,0),a.rotation.set(0,.6,0),$r.add(a);const o=new ns(.4,.5),l=n.load(cP,S=>{S.colorSpace=Ht,S.anisotropy=kn.capabilities.getMaxAnisotropy(),S.minFilter=Ei,S.magFilter=Sn,S.generateMipmaps=!0,S.needsUpdate=!0}),c=new $i({map:l,side:ai}),u=new fn(o,c);u.position.set(.7,.14,0),u.rotation.set(0,-.6,0),$r.add(u);const h=new ns(.4,.5),f=n.load(hP,S=>{S.colorSpace=Ht,S.anisotropy=kn.capabilities.getMaxAnisotropy(),S.minFilter=Ei,S.magFilter=Sn,S.generateMipmaps=!0,S.needsUpdate=!0}),d=new $i({map:f,side:ai}),g=new fn(h,d);g.position.set(0,.15,-.5),$r.add(g);const _=new Ai().setFromObject(e),m=_.getSize(new X),p=_.getCenter(new X);e.position.sub(p),e.position.set(0,-.11,0),e.rotation.set(-1.56,0,0);const x=Math.max(m.x,m.y,m.z),v=x*.6;an.position.set(0,0,v),an.lookAt(0,0,0);const b=$.timeline({scrollTrigger:{trigger:".regonizations",start:"top top",end:"+="+window.innerHeight*4.5,scrub:.4,pin:!0,invalidateOnRefresh:!0}});b.to(an.position,{x:.2,y:.1},"0.2"),b.to(an.position,{z:window.innerWidth<=768?v*.96:v*.66},"0.2"),b.to(an.rotation,{y:window.innerWidth<=768?-.41:-.6},"0.2"),b.to(an.position,{x:-.1},"1"),b.to(an.rotation,{y:window.innerWidth<=768?.47:.6},"1"),b.to(an.rotation,{y:0,x:.1},"2"),b.to(an.position,{x:0},"2"),b.to(an.position,{z:window.innerWidth<=768?v*.6:v*.3},"2").to(".split-panel-left",{xPercent:-100,ease:"none"},0).to(".split-panel-right",{xPercent:100,ease:"none"},0).to(".split-panel-left",{xPercent:0,ease:"none"},3).to(".split-panel-right",{xPercent:0,ease:"none"},3).to(an.position,{z:v*1.5,ease:"none"},3),an.near=x/100,an.far=x*100,an.updateProjectionMatrix(),regControls.target.set(0,0,0),regControls.minPolarAngle=Math.PI/2,regControls.maxPolarAngle=Math.PI/2,regControls.update()},r=>{r.total&&console.log(`Loading: ${(r.loaded/r.total*100).toFixed(1)}%`)},r=>{console.error("Model failed to load:",r)});function yP(){const r=Js.clientWidth,e=Js.clientHeight;an.aspect=r/e,an.updateProjectionMatrix(),kn.setSize(r,e),kn.setPixelRatio(Math.min(window.devicePixelRatio,1.6))}window.addEventListener("resize",yP);function Dv(){requestAnimationFrame(Dv),kn.render($r,an)}Dv();const SP=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,TP=`
  uniform float uTransition; // Controls progress
  uniform vec2 uResolution;
  uniform float uTime;
  varying vec2 vUv;

  // Customizable border uniforms
  uniform vec3 uBorderColor;

  // CLASSIC 3D PERLIN NOISE FUNCTIONS (Self-contained)
  vec4 permute(vec4 x) { return mod(((x*104.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

  float cnoise(vec3 P) {
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 3
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g100, g100), dot(g010, g010), dot(g110, g110)));
    g000 *= norm0.x;
    g100 *= norm0.y;
    g010 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g101, g101), dot(g011, g011), dot(g111, g111)));
    g001 *= norm1.x;
    g101 *= norm1.y;
    g011 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    float n_z = mix(mix(n000, n100, fade_xyz.x), mix(n010, n110, fade_xyz.x), fade_xyz.y);
    float n_dz = mix(mix(n001, n101, fade_xyz.x), mix(n011, n111, fade_xyz.x), fade_xyz.y);
    return 2.2 * mix(n_z, n_dz, fade_xyz.z);
  }

  void main() {
    // 1. PIXELATION FILTER: Snap continuous UV coordinates onto a grid of discrete pixel blocks
    // Each block is 8x8 physical screen pixels, creating a stunning retro digital-glitch style.
    float pixelSize = 0.1; 
    vec2 grid = uResolution / pixelSize;
    vec2 pixelatedUv = floor(vUv * grid) / grid;

    // 2. Correct aspect ratios to prevent wide-screen noise distortion
    float aspect = uResolution.x / uResolution.y;
    vec2 correctedUv = (pixelatedUv - 0.5) * vec2(aspect, 1.0) + 0.5;

    // Calculate maximum possible distance to any corner in aspect-corrected space
    // This ensures normalizedDistance is always exactly 1.0 at the corners, on ANY screen aspect ratio!


    // Displace the UVs using Perlin noise
  float strength = cnoise(vec3(correctedUv * 5.0, uTime * 0.2));

    // Calculate normalized distance from center (0.0 at center, 1.0 at the furthest corner)
// Bottom → Top reveal
float reveal = mix(-1.5, 1.5, correctedUv.y);

// Organic noisy edge
float noise =
      cnoise(vec3(correctedUv * 4.0, uTime * 0.15)) * 0.35 +
      cnoise(vec3(correctedUv * 12.0, uTime * 0.30)) * 0.18 +
      cnoise(vec3(correctedUv * 24.0, uTime * 0.50)) * 0.08;

// Reveal threshold moving upward
float threshold = mix(-3.0, 2.0, uTransition);

// Dissolve
float rawStrength = reveal + noise - threshold;

    // Clamp the value from 0 to 1 for the solid black plane's opacity boundary
    strength = clamp(rawStrength, 0.0, 2.0);

    // 3. RETRO VOLUMETRIC GLOW EDGE DETECTION:
    // We define the edge on the unclamped rawStrength over a range [0.0, 0.5].
    // Since the spatial slope of rawStrength is 12.5, this interval of 2.5 corresponds
    // exactly to a 20% screen-radius wide volumetric glow band!
float edge = 1.0 - abs(rawStrength);
edge = pow(clamp(edge, 0.0, 1.0), 8.0);

    // We scale the edge glow by uTransition so that it is EXACTLY 0.0 initially (solid pure black screen).
    // As soon as transition begins, the deep blue glow fades in rapidly!
    edge *= min(uTransition * 1.0, 1.0);

    // Dynamically derive the deep dark tone and rich glowing tone from the customizable uBorderColor uniform!
vec3 deepMidnightColor = vec3(0.25, 0.02, 0.02);
vec3 richGlowingColor = uBorderColor * 1.5;

vec3 edgeColor = mix(
    deepMidnightColor,
    richGlowingColor,
    sin(uTime * 1.5) * 0.5 + 0.5
);

    // Smoothly mix (linear interpolate) the deep glow with the solid black base plane.
    // This guarantees an absolutely flawless, feather-soft gradient from pure solid black 
    // into the rich glow, eliminating any sharp cutoff borders or jagged seams!

vec3 baseRed = vec3(0.6, 0.0, 0.0);

vec3 planeColor = mix(
    baseRed,
    edgeColor * 6.5,
    edge
);

    // Combine the solid plane opacity and retro glow
    float finalAlpha = max(strength, edge);
float scan =
    sin(gl_FragCoord.y * 2.5) * 0.02;

planeColor += scan;
float grain = fract(
    52.9829189 *
    fract(dot(gl_FragCoord.xy, vec2(0.06711,0.00584)))
);

planeColor += (grain - 0.5) * 0.02;
    // Solid black plane with glowing borders dissolving to reveal background HTML content
    gl_FragColor = vec4(planeColor, finalAlpha);
  }
`;$.registerPlugin(Ye);function bu(){requestAnimationFrame(()=>{requestAnimationFrame(()=>{Ye.refresh()})})}const EP=performance.getEntriesByType("navigation")[0],ir=EP?.type==="reload"||performance.navigation?.type===1,MP=sessionStorage.getItem("loaderPlayed")==="true",ta=!ir&&!MP;window.history.scrollRestoration="manual";ir&&(window.scrollTo({top:0,left:0,behavior:"instant"}),requestAnimationFrame(()=>{window.scrollTo(0,0)}),setTimeout(()=>{window.scrollTo(0,0),bu()},50),setTimeout(()=>{window.scrollTo(0,0),bu()},150));const xs=document.querySelector(".site-pre-loader"),ul=document.querySelector(".number-count"),Lo=document.getElementById("loader-canvas"),f_=document.getElementById("loader");if(!ta)xs&&(xs.style.display="none",xs.style.visibility="hidden",xs.style.opacity="0",xs.style.pointerEvents="none"),ul&&(ul.style.display="none",ul.style.opacity="0"),Lo&&(Lo.style.display="none"),f_&&(f_.style.display="none");else{let l=function(){const m=window.innerWidth,p=window.innerHeight;t.setSize(m,p),t.setPixelRatio(m<768?1:Math.min(window.devicePixelRatio,1.25)),i.uResolution.value.set(m,p)},f=function(){u&&(i.uTime.value=c.getElapsedTime(),t.render(r,e),h=requestAnimationFrame(f))},d=function(){u=!1,cancelAnimationFrame(h),window.removeEventListener("resize",l),r.remove(o),s.dispose(),a.dispose(),t.dispose(),Lo&&(Lo.style.display="none"),xs&&xs.remove()},_=function(){g||(g=!0,sessionStorage.setItem("loaderPlayed","true"),$.to(i.uTransition,{value:1,duration:3,ease:"power2.inOut",onComplete:()=>{d(),bu()}}))};const r=new pp,e=new Pu(-1,1,1,-1,0,1),t=new Rp({canvas:Lo,antialias:!0,alpha:!0});t.setSize(window.innerWidth,window.innerHeight);const n=window.innerWidth<768;t.setPixelRatio(n?1:Math.min(window.devicePixelRatio,1.25)),t.setClearColor(0,0);const i={uTransition:{value:0},uResolution:{value:new dt(window.innerWidth,window.innerHeight)},uTime:{value:0},uBorderColor:{value:new Qe("#990000")}},s=new ns(2,2),a=new Cr({vertexShader:SP,fragmentShader:TP,uniforms:i,transparent:!0,depthWrite:!1,depthTest:!1}),o=new fn(s,a);r.add(o),window.addEventListener("resize",l);const c=new OE;let u=!0,h;f();let g=!1;setTimeout(()=>{_()},2900)}new Jt(".heading-main-page h1",{types:"lines"});const wP=$.timeline({repeat:-1,defaults:{ease:"none",duration:20}});wP.to(".marquee-bg",{x:"-50%",ease:"linear",duration:50}).to(".marquee-bg",{x:"0%",ease:"linear",duration:40});const Lv=new Jt(".Name-plus",{types:"chars"});$.set(Lv.chars,{yPercent:100,opacity:0});$.to(Lv.chars,{yPercent:0,opacity:1,stagger:.03,duration:.8,ease:"power3.out",delay:ir?.1:8.5});const co=new Jt(".active-animate",{types:"chars"});$.set(co.chars,{yPercent:100,opacity:0});$.to(co.chars,{yPercent:0,opacity:1,stagger:.03,duration:.8,ease:"power3.out",delay:ir?.1:8.5});let d_;function p_(){$.to(co.chars,{yPercent:0,duration:.35,ease:"power3.out",overwrite:!0})}function AP(){$.to(co.chars,{yPercent:100,duration:.35,ease:"power3.out",overwrite:!0})}Ye.create({start:0,end:"max",onUpdate:r=>{Ye.isInViewport("#footer")||(clearTimeout(d_),r.direction===1?AP():p_(),d_=setTimeout(()=>{p_()},3e3))}});Ye.create({trigger:".footer-hit",scrub:!0,start:"top bottom",onEnter:()=>{$.to(co.chars,{yPercent:0,opacity:1,stagger:.03,duration:.5,pointerEvents:"auto",ease:"power2.out",overwrite:!0})},onEnterBack:()=>{$.to(co.chars,{yPercent:100,opacity:0,pointerEvents:"none",duration:.5,ease:"power2.out",overwrite:!0})}});$.to(".plus-rotate",{rotate:0,duration:1,scale:1,ease:"power3.out",delay:ir?.1:9});$.to(".face-image",{y:0,duration:3.5,filter:"brightness(1)",scale:1,delay:ir?.1:9});const RP=document.getElementById("tiktok-link"),CP=document.getElementById("instagram-link"),PP=document.getElementById("Behance-link");RP.addEventListener("click",()=>{window.open("https://www.tiktok.com/@meermohsin.me","_blank")});CP.addEventListener("click",()=>{window.open("https://www.instagram.com/meermohsin.me/","_blank")});PP.addEventListener("click",()=>{window.open("https://www.behance.net/meermohsin4","_blank")});const m_={value:0};ta?$.to(m_,{value:100,duration:3.5,ease:"power2.inOut",onUpdate(){ul.textContent=Math.floor(m_.value).toString().padStart(3,"0")},onComplete(){const r=$.timeline();r.to(ul,{opacity:0,duration:1.45,ease:"power3.out"}),r.to(".site-pre-loader",{duration:2.85,ease:"power3.out"}),r.to(".site-pre-loader",{autoAlpha:0,duration:.5,ease:"power3.out"})}}):($.set(".site-pre-loader",{autoAlpha:0,display:"none"}),$.set(".number-count",{opacity:0}));$.to(".scrolling-text .rail h4",{y:0,delay:ta?8.5:.1,duration:2});const Iv=new Jt(".para-introduce-hero",{types:"line"});$.set(Iv.lines,{yPercent:100,opacity:0,filter:"blur(4px)"});$.to(Iv.lines,{yPercent:0,opacity:1,stagger:.01,duration:1.5,ease:"power3.out",delay:ta?8.5:.1,filter:"blur(0px)"});const Uv=new Jt(".expertise-text",{types:"lines"});$.set(Uv.lines,{yPercent:100,opacity:0,filter:"blur(4px)"});$.to(Uv.lines,{yPercent:0,opacity:1,stagger:.03,duration:1.5,ease:"power3.out",delay:ta?8.5:.1,filter:"blur(0px)"});$.fromTo(".sound-follow",{opacity:0},{opacity:1,duration:4,ease:"power1.inOut",repeat:-1,yoyo:!0});const Sr=document.getElementById("bgMusic"),Zs=document.querySelector(".sound-wave");let Pl=!1,g_=!1;Sr.loop=!0;Sr.volume=0;for(let r=0;r<40;r++){const e=document.createElement("div");e.classList.add("bar"),e.style.animationDuration=`${Math.random()*.5+.2}s`,e.style.animationDelay=`${Math.random()}s`,Zs.appendChild(e)}const Fv=document.querySelectorAll(".bar");Zs.classList.add("off");function DP(){Zs.classList.remove("off"),$.fromTo(Fv,{opacity:.25,scaleY:.35},{opacity:1,scaleY:1,duration:.35,ease:"power2.out",stagger:.003,onComplete:()=>{Zs.classList.add("on")}})}function LP(){Zs.classList.remove("on"),$.to(Fv,{opacity:.25,scaleY:.15,duration:.35,ease:"power2.inOut",stagger:.003,onComplete:()=>{Zs.classList.add("off")}})}function Nv(){Pl||(Sr.play().catch(()=>{}),$.killTweensOf(Sr),$.to(Sr,{volume:.5,duration:1.5,ease:"power2.out"}),DP(),Pl=!0)}function IP(){Pl&&($.killTweensOf(Sr),$.to(Sr,{volume:0,duration:1.5,ease:"power2.out",onComplete:()=>{Sr.pause(),Sr.currentTime=0}}),LP(),Pl=!1)}document.addEventListener("click",()=>{g_||(g_=!0,Nv())},{once:!0});Zs.addEventListener("click",r=>{r.stopPropagation(),Pl?IP():Nv()});new Jt(".menu-navigate-scroll a",{types:"lines",lineClass:"line-mask"});new Jt(".bottom-contact-ctas p, .bottom-contact-ctas a",{types:"lines",lineClass:"line-mask"});const bo=$.timeline({paused:!0});bo.to(".line-1",{xPercent:-50,yPercent:-50,y:0,rotation:45,background:"#000",duration:.35,ease:"power3.inOut"},0);bo.to(".line-2",{xPercent:-50,yPercent:-50,y:0,rotation:-45,background:"#000",duration:.35,ease:"power3.inOut"},0);bo.to(".logo-3d",{filter:"brightness(0)",duration:.35},0);bo.from(".line-mask",{yPercent:100,opacity:0,filter:"blur(4px)",stagger:.03,duration:.8,ease:"power4.out"},0);let Cp=!1;function UP(){$.fromTo(".bar-bgs",{scaleX:0,transformOrigin:"right center"},{scaleX:1,duration:.8,stagger:.06,ease:"power4.inOut",onComplete:()=>{bo.play(0)}}),$.to(".navigation-menu",{visibility:"visible",pointerEvents:"auto"},0),Cp=!0}function Ov(){bo.reverse(),$.delayedCall(.45,()=>{$.to(".bar-bgs",{scaleX:0,transformOrigin:"left center",duration:.8,stagger:.06,ease:"power4.inOut",onComplete:()=>{$.set(".navigation-menu",{visibility:"hidden",pointerEvents:"none"})}})}),Cp=!1}document.querySelector(".menu-2-bar").addEventListener("click",()=>{Cp?Ov():UP()});const FP=document.querySelectorAll(".menu-navigate-scroll a");FP.forEach(r=>{r.addEventListener("click",()=>{$.to(".plus-rotates",{scale:0,rotation:0,duration:.3,ease:"power3.out"}),$.to(r.querySelector(".plus-rotates"),{scale:1.1,rotation:180,duration:.4,ease:"back.out(2)"}),Ov()})});$.to(".menu-2-bar",{opacity:1,delay:ta?8.5:.1,pointerEvents:"auto",duration:1.5,ease:"power3.out"});$.to(".logo-3d",{opacity:1,delay:ta?8.5:.1});window.addEventListener("pageshow",()=>{ir&&window.scrollTo(0,0),requestAnimationFrame(()=>{ir&&window.scrollTo(0,0),bu()})});const Xa=document.querySelector(".cta-connect");$.to(Xa,{opacity:1,delay:ir?.1:9});Xa.addEventListener("mousemove",r=>{const e=Xa.getBoundingClientRect(),t=r.clientX-e.left-e.width/2,n=r.clientY-e.top-e.height/2;$.to(Xa,{x:t*.2,y:n*.2,duration:.4,ease:"power3.out"})});Xa.addEventListener("mouseleave",()=>{$.to(Xa,{x:0,y:0,duration:.8,ease:"elastic.out(1, 0.4)"})});document.querySelector(".cta-connect").addEventListener("click",()=>{window.open("https://wa.me/447405341759","_blank")});const __=document.querySelector(".cta-connect");let b_=window.scrollY;window.addEventListener("scroll",()=>{const r=window.scrollY;r>b_&&r>100?$.to(__,{x:"300%",duration:.5,ease:"power3.out",overwrite:!0}):$.to(__,{x:0,duration:.5,ease:"power3.out",overwrite:!0}),b_=r});const Io=document.querySelector(".cinematic-title");if(Io){const r=Io.innerHTML;Io.innerHTML=r.replace(/(<[^>]+>)|([^<])/g,(t,n,i)=>n||(i===" "?" ":`<span class="title-letter">${i}</span>`));const e=Io.querySelectorAll(".title-letter");$.from(e,{opacity:0,scale:.5,transformOrigin:"50% 100%",duration:1.2,stagger:{each:.05,from:"random"},ease:"power3.out",scrollTrigger:{trigger:Io,start:"top 50%",end:"85% 35%",scrub:!1}})}$.to(".hero-section-home",{backgroundImage:"linear-gradient(250deg, rgba(214, 4, 7, 1) 0%, rgba(0, 0, 0, 1) 100%)",duration:3,delay:ir?.1:8.5});window.addEventListener("load",()=>{NP()});const NP=()=>{const r=document.getElementById("fluid2");Ge();let e={SIM_RESOLUTION:48,DYE_RESOLUTION:384,DENSITY_DISSIPATION:5.5,VELOCITY_DISSIPATION:3.8,PRESSURE:.12,PRESSURE_ITERATIONS:6,CURL:1.2,SPLAT_RADIUS:.035,SPLAT_FORCE:1700,SHADING:!1,COLOR_UPDATE_SPEED:.5};function t(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let n=[];n.push(new t);const{gl:i,ext:s}=a(r);s.supportLinearFiltering||(e.DYE_RESOLUTION=512,e.SHADING=!1);function a(R){const F={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let B=R.getContext("webgl2",F);const z=!!B;z||(B=R.getContext("webgl",F)||R.getContext("experimental-webgl",F));let Y,oe;z?(B.getExtension("EXT_color_buffer_float"),oe=B.getExtension("OES_texture_float_linear")):(Y=B.getExtension("OES_texture_half_float"),oe=B.getExtension("OES_texture_half_float_linear")),B.clearColor(0,0,0,1);const pe=z?B.HALF_FLOAT:Y.HALF_FLOAT_OES;let Ke,de,De;return z?(Ke=o(B,B.RGBA16F,B.RGBA,pe),de=o(B,B.RG16F,B.RG,pe),De=o(B,B.R16F,B.RED,pe)):(Ke=o(B,B.RGBA,B.RGBA,pe),de=o(B,B.RGBA,B.RGBA,pe),De=o(B,B.RGBA,B.RGBA,pe)),{gl:B,ext:{formatRGBA:Ke,formatRG:de,formatR:De,halfFloatTexType:pe,supportLinearFiltering:oe}}}function o(R,F,B,z){if(!l(R,F,B,z))switch(F){case R.R16F:return o(R,R.RG16F,R.RG,z);case R.RG16F:return o(R,R.RGBA16F,R.RGBA,z);default:return null}return{internalFormat:F,format:B}}function l(R,F,B,z){let Y=R.createTexture();R.bindTexture(R.TEXTURE_2D,Y),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MAG_FILTER,R.NEAREST),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),R.texImage2D(R.TEXTURE_2D,0,F,4,4,0,B,z,null);let oe=R.createFramebuffer();return R.bindFramebuffer(R.FRAMEBUFFER,oe),R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Y,0),R.checkFramebufferStatus(R.FRAMEBUFFER)==R.FRAMEBUFFER_COMPLETE}class c{constructor(F,B){this.vertexShader=F,this.fragmentShaderSource=B,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(F){let B=0;for(let Y=0;Y<F.length;Y++)B+=U(F[Y]);let z=this.programs[B];if(z==null){let Y=d(i.FRAGMENT_SHADER,this.fragmentShaderSource,F);z=h(this.vertexShader,Y),this.programs[B]=z}z!=this.activeProgram&&(this.uniforms=f(z),this.activeProgram=z)}bind(){i.useProgram(this.activeProgram)}}class u{constructor(F,B){this.uniforms={},this.program=h(F,B),this.uniforms=f(this.program)}bind(){i.useProgram(this.program)}}function h(R,F){let B=i.createProgram();return i.attachShader(B,R),i.attachShader(B,F),i.linkProgram(B),i.getProgramParameter(B,i.LINK_STATUS)||console.trace(i.getProgramInfoLog(B)),B}function f(R){let F=[],B=i.getProgramParameter(R,i.ACTIVE_UNIFORMS);for(let z=0;z<B;z++){let Y=i.getActiveUniform(R,z).name;F[Y]=i.getUniformLocation(R,Y)}return F}function d(R,F,B){F=g(F,B);const z=i.createShader(R);return i.shaderSource(z,F),i.compileShader(z),i.getShaderParameter(z,i.COMPILE_STATUS)||console.trace(i.getShaderInfoLog(z)),z}function g(R,F){if(F==null)return R;let B="";return F.forEach(z=>{B+="#define "+z+`
`}),B+R}const _=d(i.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),m=d(i.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),p=d(i.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),x=d(i.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),v=d(i.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),b=d(i.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),S=`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,M=d(i.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),w=d(i.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,s.supportLinearFiltering?null:["MANUAL_FILTERING"]),P=d(i.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),T=d(i.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),y=d(i.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),L=d(i.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),N=d(i.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),G=(i.bindBuffer(i.ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,i.createBuffer()),i.bufferData(i.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),i.STATIC_DRAW),i.vertexAttribPointer(0,2,i.FLOAT,!1,0,0),i.enableVertexAttribArray(0),(R,F=!1)=>{R==null?(i.viewport(0,0,i.drawingBufferWidth,i.drawingBufferHeight),i.bindFramebuffer(i.FRAMEBUFFER,null)):(i.viewport(0,0,R.width,R.height),i.bindFramebuffer(i.FRAMEBUFFER,R.fbo)),F&&(i.clearColor(0,0,0,1),i.clear(i.COLOR_BUFFER_BIT)),i.drawElements(i.TRIANGLES,6,i.UNSIGNED_SHORT,0)});let W,O,K,te,j;Fe("../app/themes/flipp/dist/images/LDR_LLL1_0.png"),new u(m,p);const ae=new u(_,x),I=new u(_,v);new u(_,b);const le=new u(_,M),xe=new u(_,w),Je=new u(_,P),ke=new u(_,T),Se=new u(_,y),J=new u(_,L),ne=new u(_,N),he=new c(_,S);function we(){let R=fe(e.SIM_RESOLUTION),F=fe(e.DYE_RESOLUTION);const B=s.halfFloatTexType,z=s.formatRGBA,Y=s.formatRG,oe=s.formatR,pe=s.supportLinearFiltering?i.LINEAR:i.NEAREST;i.disable(i.BLEND),W==null?W=Ue(F.width,F.height,z.internalFormat,z.format,B,pe):W=C(W,F.width,F.height,z.internalFormat,z.format,B,pe),O==null?O=Ue(R.width,R.height,Y.internalFormat,Y.format,B,pe):O=C(O,R.width,R.height,Y.internalFormat,Y.format,B,pe),K=be(R.width,R.height,oe.internalFormat,oe.format,B,i.NEAREST),te=be(R.width,R.height,oe.internalFormat,oe.format,B,i.NEAREST),j=Ue(R.width,R.height,oe.internalFormat,oe.format,B,i.NEAREST)}function be(R,F,B,z,Y,oe){i.activeTexture(i.TEXTURE0);let pe=i.createTexture();i.bindTexture(i.TEXTURE_2D,pe),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,oe),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,oe),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,B,R,F,0,z,Y,null);let Ke=i.createFramebuffer();i.bindFramebuffer(i.FRAMEBUFFER,Ke),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0),i.viewport(0,0,R,F),i.clear(i.COLOR_BUFFER_BIT);let de=1/R,De=1/F;return{texture:pe,fbo:Ke,width:R,height:F,texelSizeX:de,texelSizeY:De,attach(Ze){return i.activeTexture(i.TEXTURE0+Ze),i.bindTexture(i.TEXTURE_2D,pe),Ze}}}function Ue(R,F,B,z,Y,oe){let pe=be(R,F,B,z,Y,oe),Ke=be(R,F,B,z,Y,oe);return{width:R,height:F,texelSizeX:pe.texelSizeX,texelSizeY:pe.texelSizeY,get read(){return pe},set read(de){pe=de},get write(){return Ke},set write(de){Ke=de},swap(){let de=pe;pe=Ke,Ke=de}}}function lt(R,F,B,z,Y,oe,pe){let Ke=be(F,B,z,Y,oe,pe);return ae.bind(),i.uniform1i(ae.uniforms.uTexture,R.attach(0)),G(Ke),Ke}function C(R,F,B,z,Y,oe,pe){return R.width==F&&R.height==B||(R.read=lt(R.read,F,B,z,Y,oe,pe),R.write=be(F,B,z,Y,oe,pe),R.width=F,R.height=B,R.texelSizeX=1/F,R.texelSizeY=1/B),R}function Fe(R){let F=i.createTexture();i.bindTexture(i.TEXTURE_2D,F),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.REPEAT),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.REPEAT),i.texImage2D(i.TEXTURE_2D,0,i.RGB,1,1,0,i.RGB,i.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let B={texture:F,width:1,height:1,attach(Y){return i.activeTexture(i.TEXTURE0+Y),i.bindTexture(i.TEXTURE_2D,F),Y}},z=new Image;return z.onload=()=>{B.width=z.width,B.height=z.height,i.bindTexture(i.TEXTURE_2D,F),i.texImage2D(i.TEXTURE_2D,0,i.RGB,i.RGB,i.UNSIGNED_BYTE,z)},z.src=R,B}function Oe(){let R=[];e.SHADING&&R.push("SHADING"),he.setKeywords(R)}Oe(),we();let Ae=Date.now(),k=0;function je(){const R=Ee();Ge()&&we(),me(R),ft(),Math.random()<.015&&(n[0].deltaX*=2.2,n[0].deltaY*=2.2),D(R),E(null),requestAnimationFrame(je)}function Ee(){let R=Date.now(),F=(R-Ae)/1e3;return F=Math.min(F,.016666),Ae=R,F}function Ge(){let R=Ne(r.clientWidth),F=Ne(r.clientHeight);return r.width!=R||r.height!=F?(r.width=R,r.height=F,!0):!1}function me(R){k+=R*e.COLOR_UPDATE_SPEED,k>=1&&(k=Pe(k,0,1),n.forEach(F=>{F.color=Be()}))}function ft(){n.forEach(R=>{R.moved&&(R.moved=!1,ie(R))})}function D(R){i.disable(i.BLEND),ke.bind(),i.uniform2f(ke.uniforms.texelSize,O.texelSizeX,O.texelSizeY),i.uniform1i(ke.uniforms.uVelocity,O.read.attach(0)),G(te),Se.bind(),i.uniform2f(Se.uniforms.texelSize,O.texelSizeX,O.texelSizeY),i.uniform1i(Se.uniforms.uVelocity,O.read.attach(0)),i.uniform1i(Se.uniforms.uCurl,te.attach(1)),i.uniform1f(Se.uniforms.curl,e.CURL),i.uniform1f(Se.uniforms.dt,R),G(O.write),O.swap(),Je.bind(),i.uniform2f(Je.uniforms.texelSize,O.texelSizeX,O.texelSizeY),i.uniform1i(Je.uniforms.uVelocity,O.read.attach(0)),G(K),I.bind(),i.uniform1i(I.uniforms.uTexture,j.read.attach(0)),i.uniform1f(I.uniforms.value,e.PRESSURE),G(j.write),j.swap(),J.bind(),i.uniform2f(J.uniforms.texelSize,O.texelSizeX,O.texelSizeY),i.uniform1i(J.uniforms.uDivergence,K.attach(0));for(let B=0;B<e.PRESSURE_ITERATIONS;B++)i.uniform1i(J.uniforms.uPressure,j.read.attach(1)),G(j.write),j.swap();ne.bind(),i.uniform2f(ne.uniforms.texelSize,O.texelSizeX,O.texelSizeY),i.uniform1i(ne.uniforms.uPressure,j.read.attach(0)),i.uniform1i(ne.uniforms.uVelocity,O.read.attach(1)),G(O.write),O.swap(),xe.bind(),i.uniform2f(xe.uniforms.texelSize,O.texelSizeX,O.texelSizeY),s.supportLinearFiltering||i.uniform2f(xe.uniforms.dyeTexelSize,O.texelSizeX,O.texelSizeY);let F=O.read.attach(0);i.uniform1i(xe.uniforms.uVelocity,F),i.uniform1i(xe.uniforms.uSource,F),i.uniform1f(xe.uniforms.dt,R),i.uniform1f(xe.uniforms.dissipation,e.VELOCITY_DISSIPATION),G(O.write),O.swap(),s.supportLinearFiltering||i.uniform2f(xe.uniforms.dyeTexelSize,W.texelSizeX,W.texelSizeY),i.uniform1i(xe.uniforms.uVelocity,O.read.attach(0)),i.uniform1i(xe.uniforms.uSource,W.read.attach(1)),i.uniform1f(xe.uniforms.dissipation,e.DENSITY_DISSIPATION),G(W.write),W.swap()}function E(R){i.blendFunc(i.ONE,i.ONE_MINUS_SRC_ALPHA),i.enable(i.BLEND),q(R)}function q(R){let F=i.drawingBufferWidth,B=i.drawingBufferHeight;he.bind(),e.SHADING&&i.uniform2f(he.uniforms.texelSize,1/F,1/B),i.uniform1i(he.uniforms.uTexture,W.read.attach(0)),G(R)}function ie(R){let F=R.deltaX*e.SPLAT_FORCE,B=R.deltaY*e.SPLAT_FORCE;ee(R.texcoordX,R.texcoordY,F,B,R.color)}function re(R){const F=Be();F.r*=10,F.g*=10,F.b*=10;let B=10*(Math.random()-.5),z=30*(Math.random()-.5);ee(R.texcoordX,R.texcoordY,B,z,F)}function ee(R,F,B,z,Y){le.bind(),i.uniform1i(le.uniforms.uTarget,O.read.attach(0)),i.uniform1f(le.uniforms.aspectRatio,r.width/r.height),i.uniform2f(le.uniforms.point,R,F),i.uniform3f(le.uniforms.color,B,z,0),i.uniform1f(le.uniforms.radius,Me(e.SPLAT_RADIUS/100)),G(O.write),O.swap(),i.uniform1i(le.uniforms.uTarget,W.read.attach(0)),i.uniform3f(le.uniforms.color,Y.r,Y.g,Y.b),G(W.write),W.swap()}function Me(R){let F=r.width/r.height;return F>1&&(R*=F),R}window.addEventListener("mousedown",R=>{let F=n[0],B=Ne(R.clientX),z=Ne(R.clientY);ce(F,-1,B,z),re(F)}),window.addEventListener("mousemove",R=>{let F=n[0],B=Ne(R.clientX),z=Ne(R.clientY);je(),Re(F,B,z,Be())},{once:!0}),window.addEventListener("mousemove",R=>{let F=n[0],B=Ne(R.clientX),z=Ne(R.clientY),Y=F.color;Re(F,B,z,Y)}),window.addEventListener("touchstart",R=>{const F=R.targetTouches;let B=n[0];for(let z=0;z<F.length;z++){let Y=Ne(F[z].clientX),oe=Ne(F[z].clientY);je(),ce(B,F[z].identifier,Y,oe)}},{once:!0}),window.addEventListener("touchstart",R=>{const F=R.targetTouches;let B=n[0];for(let z=0;z<F.length;z++){let Y=Ne(F[z].clientX),oe=Ne(F[z].clientY);ce(B,F[z].identifier,Y,oe)}}),window.addEventListener("touchmove",R=>{const F=R.targetTouches;let B=n[0];for(let z=0;z<F.length;z++){let Y=Ne(F[z].clientX),oe=Ne(F[z].clientY);Re(B,Y,oe,B.color)}},!1),window.addEventListener("touchend",R=>{const F=R.changedTouches;let B=n[0];for(let z=0;z<F.length;z++)ve(B)});function ce(R,F,B,z){R.id=F,R.down=!0,R.moved=!1;const Y=.0015;R.texcoordX=B/r.width+(Math.random()-.5)*Y,R.texcoordY=1-z/r.height+(Math.random()-.5)*Y,R.prevTexcoordX=R.texcoordX,R.prevTexcoordY=R.texcoordY,R.deltaX=0,R.deltaY=0,R.color=Be()}function Re(R,F,B,z){R.prevTexcoordX=R.texcoordX,R.prevTexcoordY=R.texcoordY,R.texcoordX=F/r.width,R.texcoordY=1-B/r.height,R.deltaX=ue(R.texcoordX-R.prevTexcoordX),R.deltaY=ge(R.texcoordY-R.prevTexcoordY),R.moved=Math.abs(R.deltaX)>0||Math.abs(R.deltaY)>0,R.color=z}function ve(R){R.down=!1}function ue(R){let F=r.width/r.height;return F<1&&(R*=F),R}function ge(R){let F=r.width/r.height;return F>1&&(R/=F),R}function Be(){return{r:.8+Math.random()*.2,g:Math.random()*.01,b:Math.random()*.02}}function Pe(R,F,B){let z=B-F;return(R-F)%z+F}function fe(R){let F=i.drawingBufferWidth/i.drawingBufferHeight;F<1&&(F=1/F);let B=Math.round(R),z=Math.round(R*F);return i.drawingBufferWidth>i.drawingBufferHeight?{width:z,height:B}:{width:B,height:z}}function Ne(R){let F=window.devicePixelRatio||1;return Math.floor(R*F)}function U(R){if(R.length==0)return 0;let F=0;for(let B=0;B<R.length;B++)F=(F<<5)-F+R.charCodeAt(B),F|=0;return F}};"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);console.clear();
