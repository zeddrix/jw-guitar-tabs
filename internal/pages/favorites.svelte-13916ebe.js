import{S as q,i as x,s as A,ao as C,e as k,t as N,k as w,w as F,c as b,a as S,h as P,m as j,d as p,x as H,b as h,g as _,V as $,y as I,q as v,o as d,B as M,F as D,aa as G,a2 as L,W as E,l as y,n as J,p as O,v as z,$ as K,a0 as Q,f as V}from"../chunks/vendor-3246f839.js";import{M as R}from"../chunks/MetaHead-e99e50b4.js";import{H as U,r as X}from"../chunks/HeartTooltip-92289b19.js";import{b as W}from"../chunks/paths-4b3c6e7e.js";import{n as T}from"../chunks/helperFunctions-d39dba89.js";function Z(i){let e,o,s,a,t,c,l;return a=new U({props:{remove:!0}}),{c(){e=k("img"),s=w(),F(a.$$.fragment),this.h()},l(r){e=b(r,"IMG",{src:!0,width:!0,alt:!0,class:!0}),s=j(r),H(a.$$.fragment,r),this.h()},h(){G(e.src,o=`${W}/img/hearts/red-heart.svg`)||h(e,"src",o),h(e,"width","30px"),h(e,"alt","heart"),h(e,"class","heart-img")},m(r,f){_(r,e,f),_(r,s,f),I(a,r,f),t=!0,c||(l=L(e,"click",i[5]),c=!0)},p:E,i(r){t||(v(a.$$.fragment,r),t=!0)},o(r){d(a.$$.fragment,r),t=!1},d(r){r&&p(e),r&&p(s),M(a,r),c=!1,l()}}}function ee(i){let e,o,s,a,t,c,l,r,f;return r=new C({props:{rich:!0,$$slots:{default:[Z]},$$scope:{ctx:i}}}),{c(){e=k("a"),o=k("div"),s=N(i[0]),a=w(),t=k("span"),c=N(i[1]),l=w(),F(r.$$.fragment),this.h()},l(u){e=b(u,"A",{href:!0,class:!0});var n=S(e);o=b(n,"DIV",{class:!0});var m=S(o);s=P(m,i[0]),a=j(m),t=b(m,"SPAN",{class:!0});var g=S(t);c=P(g,i[1]),g.forEach(p),m.forEach(p),l=j(n),H(r.$$.fragment,n),n.forEach(p),this.h()},h(){h(t,"class","category svelte-1di4bcj"),h(o,"class","content svelte-1di4bcj"),h(e,"href",`${W}${i[2]}`),h(e,"class","title-item svelte-1di4bcj")},m(u,n){_(u,e,n),$(e,o),$(o,s),$(o,a),$(o,t),$(t,c),$(e,l),I(r,e,null),f=!0},p(u,[n]){const m={};n&128&&(m.$$scope={dirty:n,ctx:u}),r.$set(m)},i(u){f||(v(r.$$.fragment,u),f=!0)},o(u){d(r.$$.fragment,u),f=!1},d(u){u&&p(e),M(r)}}}function te(i,e,o){let s;D(i,T,u=>o(6,s=u));let{fav:a}=e;const{title:t,category:c,link:l}=a,r=(u,n)=>{u.preventDefault(),T.set(s.filter(m=>m.link!=n)),X(),localStorage.setItem("favorites",JSON.stringify(s))},f=u=>r(u,l);return i.$$set=u=>{"fav"in u&&o(4,a=u.fav)},[t,c,l,r,a,f]}class re extends q{constructor(e){super();x(this,e,te,ee,A,{fav:4})}}function Y(i,e,o){const s=i.slice();return s[1]=e[o],s}function se(i){let e=[],o=new Map,s,a,t=i[0];const c=l=>l[1].link;for(let l=0;l<t.length;l+=1){let r=Y(i,t,l),f=c(r);o.set(f,e[l]=B(f,r))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();s=y()},l(l){for(let r=0;r<e.length;r+=1)e[r].l(l);s=y()},m(l,r){for(let f=0;f<e.length;f+=1)e[f].m(l,r);_(l,s,r),a=!0},p(l,r){r&1&&(t=l[0],J(),e=K(e,r,c,1,l,t,o,s.parentNode,Q,B,s,Y),O())},i(l){if(!a){for(let r=0;r<t.length;r+=1)v(e[r]);a=!0}},o(l){for(let r=0;r<e.length;r+=1)d(e[r]);a=!1},d(l){for(let r=0;r<e.length;r+=1)e[r].d(l);l&&p(s)}}}function ae(i){let e,o;return{c(){e=k("p"),o=N("Your favorite songs will show here. Please add one..."),this.h()},l(s){e=b(s,"P",{style:!0});var a=S(e);o=P(a,"Your favorite songs will show here. Please add one..."),a.forEach(p),this.h()},h(){V(e,"text-align","center"),V(e,"color","grey")},m(s,a){_(s,e,a),$(e,o)},p:E,i:E,o:E,d(s){s&&p(e)}}}function B(i,e){let o,s,a;return s=new re({props:{fav:e[1]}}),{key:i,first:null,c(){o=y(),F(s.$$.fragment),this.h()},l(t){o=y(),H(s.$$.fragment,t),this.h()},h(){this.first=o},m(t,c){_(t,o,c),I(s,t,c),a=!0},p(t,c){e=t;const l={};c&1&&(l.fav=e[1]),s.$set(l)},i(t){a||(v(s.$$.fragment,t),a=!0)},o(t){d(s.$$.fragment,t),a=!1},d(t){t&&p(o),M(s,t)}}}function le(i){let e,o,s,a,t,c,l;const r=[ae,se],f=[];function u(n,m){return n[0].length==0?0:1}return a=u(i),t=f[a]=r[a](i),{c(){e=k("h1"),o=N("Favorites"),s=w(),t.c(),c=y()},l(n){e=b(n,"H1",{});var m=S(e);o=P(m,"Favorites"),m.forEach(p),s=j(n),t.l(n),c=y()},m(n,m){_(n,e,m),$(e,o),_(n,s,m),f[a].m(n,m),_(n,c,m),l=!0},p(n,[m]){let g=a;a=u(n),a===g?f[a].p(n,m):(J(),d(f[g],1,1,()=>{f[g]=null}),O(),t=f[a],t?t.p(n,m):(t=f[a]=r[a](n),t.c()),v(t,1),t.m(c.parentNode,c))},i(n){l||(v(t),l=!0)},o(n){d(t),l=!1},d(n){n&&p(e),n&&p(s),f[a].d(n),n&&p(c)}}}function oe(i,e,o){let s;return D(i,T,a=>o(0,s=a)),z(()=>{const a=JSON.parse(localStorage.getItem("favorites"));a&&T.set(a)}),[s]}class ne extends q{constructor(e){super();x(this,e,oe,le,A,{})}}function ie(i){let e,o,s,a;return e=new R({props:{title:"Favorites",description:"Add/remove your favorite songs to the easy-to-access list in this page!"}}),s=new ne({}),{c(){F(e.$$.fragment),o=w(),F(s.$$.fragment)},l(t){H(e.$$.fragment,t),o=j(t),H(s.$$.fragment,t)},m(t,c){I(e,t,c),_(t,o,c),I(s,t,c),a=!0},p:E,i(t){a||(v(e.$$.fragment,t),v(s.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),d(s.$$.fragment,t),a=!1},d(t){M(e,t),t&&p(o),M(s,t)}}}class _e extends q{constructor(e){super();x(this,e,null,ie,A,{})}}export{_e as default};
