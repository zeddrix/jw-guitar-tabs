import{S as H,i as J,s as M,e as j,t as q,k as P,c as w,a as N,h as O,m as A,d as h,a5 as D,b as d,g as k,O as S,Z as x,P as T,X as b,al as V,l as C,j as ee,n as B,o as I,p as G,q as $,w as K,x as W,y as X,B as Z,V as te,W as re}from"./vendor-a14c9fe5.js";import{g as L,i as z,e as se,c as oe,o as le,k as ne}from"./helperFunctions-2523e54d.js";import{a as Q}from"./MetaHead-2dfdfdb5.js";import{b as E}from"./paths-4b3c6e7e.js";import{L as ae}from"./LoaderScreen-87bfbc77.js";function ie(i){let e,t,r,n,l,a,s;return{c(){e=j("a"),t=q(i[1]),r=P(),n=j("img"),this.h()},l(o){e=w(o,"A",{href:!0,class:!0});var c=N(e);t=O(c,i[1]),r=A(c),n=w(c,"IMG",{src:!0,width:!0,alt:!0,class:!0}),c.forEach(h),this.h()},h(){D(n.src,l=`${E}/img/hearts/red-heart${i[0]?"":"-outline"}.svg`)||d(n,"src",l),d(n,"width","30px"),d(n,"alt","heart"),d(n,"class","heart-img"),d(e,"href",`${E}${i[2]}`),d(e,"class","title-item svelte-1nrqa3k")},m(o,c){k(o,e,c),S(e,t),S(e,r),S(e,n),a||(s=x(n,"click",i[3]),a=!0)},p(o,[c]){c&1&&!D(n.src,l=`${E}/img/hearts/red-heart${o[0]?"":"-outline"}.svg`)&&d(n,"src",l)},i:T,o:T,d(o){o&&h(e),a=!1,s()}}}function ce(i,e,t){let r,n;b(i,L,_=>t(5,r=_)),b(i,z,_=>t(6,n=_));let{song:l}=e;const{title:a,officialurl:s,category:o,num:c}=l,g=o==="kingdom"?`Song ${c}: ${a}`:a,p=se(o,c,s),f=JSON.parse(localStorage.getItem("favorites"));f&&L.set(f);let u=r.find(_=>_.link===p);const v=_=>{const y=r.find(F=>F.link===_.link);y?V(L,r=r.map(F=>F.link===y.link?_:F),r):(V(z,n=!0,n),r.push(_))},Y=_=>{_.preventDefault(),u?(L.set(r.filter(y=>y.link!==p)),localStorage.setItem("favorites",JSON.stringify(r))):(v({title:g,category:"Kingdom Songs",link:p}),localStorage.setItem("favorites",JSON.stringify(r))),t(0,u=!u)};return i.$$set=_=>{"song"in _&&t(4,l=_.song)},[u,g,p,Y,l]}class fe extends H{constructor(e){super();J(this,e,ce,ie,M,{song:4})}}function R(i,e,t){const r=i.slice();return r[7]=e[t],r}function ue(i){let e,t=[],r=new Map,n,l=i[1];const a=s=>s[7]._id;for(let s=0;s<l.length;s+=1){let o=R(i,l,s),c=a(o);r.set(c,t[s]=U(c,o))}return{c(){e=j("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=w(s,"DIV",{class:!0});var o=N(e);for(let c=0;c<t.length;c+=1)t[c].l(o);o.forEach(h),this.h()},h(){d(e,"class","ui celled list")},m(s,o){k(s,e,o);for(let c=0;c<t.length;c+=1)t[c].m(e,null);n=!0},p(s,o){o&2&&(l=s[1],B(),t=te(t,o,a,1,s,l,r,e,re,U,null,R),G())},i(s){if(!n){for(let o=0;o<l.length;o+=1)$(t[o]);n=!0}},o(s){for(let o=0;o<t.length;o+=1)I(t[o]);n=!1},d(s){s&&h(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function _e(i){let e,t;return e=new ae({}),{c(){K(e.$$.fragment)},l(r){W(e.$$.fragment,r)},m(r,n){X(e,r,n),t=!0},p:T,i(r){t||($(e.$$.fragment,r),t=!0)},o(r){I(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function U(i,e){let t,r,n;return r=new fe({props:{song:e[7]}}),{key:i,first:null,c(){t=C(),K(r.$$.fragment),this.h()},l(l){t=C(),W(r.$$.fragment,l),this.h()},h(){this.first=t},m(l,a){k(l,t,a),X(r,l,a),n=!0},p(l,a){e=l;const s={};a&2&&(s.song=e[7]),r.$set(s)},i(l){n||($(r.$$.fragment,l),n=!0)},o(l){I(r.$$.fragment,l),n=!1},d(l){l&&h(t),Z(r,l)}}}function me(i){let e,t=Q(i[0])+"",r,n,l,a,s,o,c;const m=[_e,ue],g=[];function p(f,u){return f[1].length===0?0:1}return a=p(i),s=g[a]=m[a](i),{c(){e=j("h1"),r=q(t),n=q(" Songs"),l=P(),s.c(),o=C(),this.h()},l(f){e=w(f,"H1",{class:!0});var u=N(e);r=O(u,t),n=O(u," Songs"),u.forEach(h),l=A(f),s.l(f),o=C(),this.h()},h(){d(e,"class","svelte-m9c91y")},m(f,u){k(f,e,u),S(e,r),S(e,n),k(f,l,u),g[a].m(f,u),k(f,o,u),c=!0},p(f,[u]){(!c||u&1)&&t!==(t=Q(f[0])+"")&&ee(r,t);let v=a;a=p(f),a===v?g[a].p(f,u):(B(),I(g[v],1,1,()=>{g[v]=null}),G(),s=g[a],s?s.p(f,u):(s=g[a]=m[a](f),s.c()),$(s,1),s.m(o.parentNode,o))},i(f){c||($(s),c=!0)},o(f){I(s),c=!1},d(f){f&&h(e),f&&h(l),g[a].d(f),f&&h(o)}}}function ge(i,e,t){let r,n,l,a;b(i,oe,m=>t(2,n=m)),b(i,le,m=>t(3,l=m)),b(i,ne,m=>t(4,a=m));let{category:s}=e;const o=s==="kingdom",c=s==="original";return i.$$set=m=>{"category"in m&&t(0,s=m.category)},i.$$.update=()=>{i.$$.dirty&28&&t(1,r=o?a:c?l:n)},[s,r,n,l,a]}class ye extends H{constructor(e){super();J(this,e,ge,me,M,{category:0})}}export{ye as C};
