import{S as e,i as t,s,e as a,a as l,c as r,b as n,g as i,f as o,h,j as c,k as f,F as g,r as d,A as m,m as u,q as $,p,u as w,t as v,o as b,d as x,y,J as I,K as E,v as j,L as D,z as V}from"./client.651273bd.js";import z from"./bicycle.359f17c9.js";import T from"./scooter.41cb5740.js";import N from"./sedan.0ca1cc11.js";import k from"./truck.fd06524b.js";import U from"./packaging.fbccf44b.js";function B(e,t,s){const a=e.slice();return a[9]=t[s],a[11]=s,a}function P(e){let t,s,v,x,y,I,E;var j=e[9].component;function D(){return e[7](e[11])}return j&&(s=new j({})),{c(){t=a("button"),s&&u(s.$$.fragment),v=l(),this.h()},l(e){t=r(e,"BUTTON",{class:!0});var a=n(t);s&&b(s.$$.fragment,a),v=i(a),a.forEach(o),this.h()},h(){h(t,"class",x="focus:outline-none h-24 w-24 mr-2 p-4 bg-white rounded-lg shadow-lg "+(e[0]===e[9]&&"border-indigo-400")+" border-4 svelte-1833mj4")},m(e,a){c(e,t,a),s&&p(s,t,null),f(t,v),y=!0,I||(E=g(t,"click",D),I=!0)},p(a,l){if(j!==(j=(e=a)[9].component)){if(s){V();const e=s;d(e.$$.fragment,1,0,(()=>{w(e,1)})),m()}j?(s=new j({}),u(s.$$.fragment),$(s.$$.fragment,1),p(s,t,v)):s=null}(!y||1&l&&x!==(x="focus:outline-none h-24 w-24 mr-2 p-4 bg-white rounded-lg shadow-lg "+(e[0]===e[9]&&"border-indigo-400")+" border-4 svelte-1833mj4"))&&h(t,"class",x)},i(e){y||(s&&$(s.$$.fragment,e),y=!0)},o(e){s&&d(s.$$.fragment,e),y=!1},d(e){e&&o(t),s&&w(s),I=!1,E()}}}function A(e){let t,s,z,T,N,k,A,M,O,q,F,J,K,L,S,C,G,H,Q,R,W,X,Y,Z,_,ee,te,se,ae;k=new U({});var le=U;le&&(C=new le({}));let re=e[3],ne=[];for(let t=0;t<re.length;t+=1)ne[t]=P(B(e,re,t));const ie=e=>d(ne[e],1,1,(()=>{ne[e]=null}));var oe=e[0].component;return oe&&(ee=new oe({})),{c(){t=a("main"),s=a("div"),z=a("div"),T=a("div"),N=a("button"),u(k.$$.fragment),A=l(),M=a("div"),O=v("width (in cm):\n        "),q=a("input"),F=v("\n        height (in cm):\n        "),J=a("input"),K=l(),L=a("div"),S=a("div"),C&&u(C.$$.fragment),G=l(),H=a("div"),Q=a("div");for(let e=0;e<ne.length;e+=1)ne[e].c();R=l(),W=a("div"),X=a("input"),Y=l(),Z=a("div"),_=a("div"),ee&&u(ee.$$.fragment),this.h()},l(e){t=r(e,"MAIN",{class:!0});var a=n(t);s=r(a,"DIV",{class:!0});var l=n(s);z=r(l,"DIV",{class:!0});var h=n(z);T=r(h,"DIV",{class:!0});var c=n(T);N=r(c,"BUTTON",{class:!0});var f=n(N);b(k.$$.fragment,f),f.forEach(o),c.forEach(o),A=i(h),M=r(h,"DIV",{class:!0});var g=n(M);O=x(g,"width (in cm):\n        "),q=r(g,"INPUT",{class:!0,type:!0}),F=x(g,"\n        height (in cm):\n        "),J=r(g,"INPUT",{class:!0,type:!0}),g.forEach(o),K=i(h),L=r(h,"DIV",{class:!0});var d=n(L);S=r(d,"DIV",{class:!0,style:!0});var m=n(S);C&&b(C.$$.fragment,m),m.forEach(o),d.forEach(o),h.forEach(o),G=i(l),H=r(l,"DIV",{class:!0});var u=n(H);Q=r(u,"DIV",{class:!0});var $=n(Q);for(let e=0;e<ne.length;e+=1)ne[e].l($);$.forEach(o),R=i(u),W=r(u,"DIV",{class:!0});var p=n(W);X=r(p,"INPUT",{class:!0}),p.forEach(o),Y=i(u),Z=r(u,"DIV",{class:!0});var w=n(Z);_=r(w,"DIV",{class:!0});var v=n(_);ee&&b(ee.$$.fragment,v),v.forEach(o),w.forEach(o),u.forEach(o),l.forEach(o),a.forEach(o),this.h()},h(){h(N,"class","focus:outline-none h-24 w-24 mr-2 p-4 bg-white rounded-lg shadow-lg border-indigo-400 border-4"),h(T,"class","flex items-center"),h(q,"class","shadow-lg w-12 px-1"),h(q,"type","number"),h(J,"class","shadow-lg w-12 px-1"),h(J,"type","number"),h(M,"class","border-1 py-2 border-t-2 border-b-2 border-fuchsia-600 my-2"),h(S,"class","bg-yellow-400\trounded-lg package-wrapper shadow-lg svelte-1833mj4"),y(S,"width",e[2].width+"px"),y(S,"height",e[2].height+"px"),h(L,"class","flex items-center justify-end flex-1"),h(z,"class","bg-gray-100 rounded-lg h-full p-4 flex flex-col"),h(Q,"class","flex items-center"),h(X,"class","shadow-lg"),h(W,"class","border-1 py-2 border-t-2 border-b-2 border-fuchsia-600 my-2"),h(_,"class","absolute top-0 width-full h-full w-full"),h(Z,"class","relative h-full"),h(H,"class","bg-gray-100 rounded-lg h-full p-4 flex flex-col"),h(s,"class","pt-4 grid grid-cols-2 flex-1 gap-4"),h(t,"class","p-4 flex flex-col h-screen")},m(a,l){c(a,t,l),f(t,s),f(s,z),f(z,T),f(T,N),p(k,N,null),f(z,A),f(z,M),f(M,O),f(M,q),I(q,e[1].width),f(M,F),f(M,J),I(J,e[1].height),f(z,K),f(z,L),f(L,S),C&&p(C,S,null),f(s,G),f(s,H),f(H,Q);for(let e=0;e<ne.length;e+=1)ne[e].m(Q,null);f(H,R),f(H,W),f(W,X),f(H,Y),f(H,Z),f(Z,_),ee&&p(ee,_,null),te=!0,se||(ae=[g(q,"input",e[5]),g(J,"input",e[6])],se=!0)},p(e,[t]){if(2&t&&E(q.value)!==e[1].width&&I(q,e[1].width),2&t&&E(J.value)!==e[1].height&&I(J,e[1].height),le!==(le=U)){if(C){V();const e=C;d(e.$$.fragment,1,0,(()=>{w(e,1)})),m()}le?(C=new le({}),u(C.$$.fragment),$(C.$$.fragment,1),p(C,S,null)):C=null}if((!te||4&t)&&y(S,"width",e[2].width+"px"),(!te||4&t)&&y(S,"height",e[2].height+"px"),9&t){let s;for(re=e[3],s=0;s<re.length;s+=1){const a=B(e,re,s);ne[s]?(ne[s].p(a,t),$(ne[s],1)):(ne[s]=P(a),ne[s].c(),$(ne[s],1),ne[s].m(Q,null))}for(V(),s=re.length;s<ne.length;s+=1)ie(s);m()}if(oe!==(oe=e[0].component)){if(ee){V();const e=ee;d(e.$$.fragment,1,0,(()=>{w(e,1)})),m()}oe?(ee=new oe({}),u(ee.$$.fragment),$(ee.$$.fragment,1),p(ee,_,null)):ee=null}},i(e){if(!te){$(k.$$.fragment,e),C&&$(C.$$.fragment,e);for(let e=0;e<re.length;e+=1)$(ne[e]);ee&&$(ee.$$.fragment,e),te=!0}},o(e){d(k.$$.fragment,e),C&&d(C.$$.fragment,e),ne=ne.filter(Boolean);for(let e=0;e<ne.length;e+=1)d(ne[e]);ee&&d(ee.$$.fragment,e),te=!1},d(e){e&&o(t),w(k),C&&w(C),j(ne,e),ee&&w(ee),se=!1,D(ae)}}}function M(e,t,s){let a=[{component:k,size:{width:1360,height:245}},{component:T,size:{width:172,height:108}},{component:N,size:{width:296,height:145}},{component:z,size:{width:167.6,height:96.5}}],l=a[0],r={width:120,height:80},n=520,i=520;let o,h;return e.$$.update=()=>{1&e.$$.dirty&&s(4,o=Math.min(n/l.size.width,i/l.size.height)),18&e.$$.dirty&&s(2,h={width:r.width*o,height:r.height*o})},[l,r,h,a,o,function(){r.width=E(this.value),s(1,r)},function(){r.height=E(this.value),s(1,r)},e=>{s(0,l=a[e])}]}export default class extends e{constructor(e){super(),t(this,e,M,A,s,{})}}
