import{S as Q,i as V,s as Z,e as L,t as O,k as z,w as J,c as N,a as A,h as T,m as R,x as D,d as _,b as h,g as d,Z as I,y as H,q as v,o as y,B as M,F as $,ae as P,Q as ee,ah as W,l as E,j as te,n as U,p as X,a6 as re,a7 as se,E as oe}from"./index-d0243fdd.js";import{m as C,n as j,p as ne,c as ae,o as le,k as ie}from"./helperFunctions-48b9c1d3.js";import{a as B}from"./MetaHead-6adeec95.js";/* empty css                  */import{W as ce,r as fe,a as ue}from"./snackbarFunctions-0e2a99bd.js";import{b as q}from"./paths-396f020f.js";import{L as me}from"./LoaderScreen-755743ba.js";function ge(i){let e,r,s,l;return{c(){e=L("img"),this.h()},l(o){e=N(o,"IMG",{src:!0,width:!0,alt:!0,class:!0}),this.h()},h(){P(e.src,r=`${q}/img/hearts/red-heart${i[0]?"":"-outline"}.svg`)||h(e,"src",r),h(e,"width","30px"),h(e,"alt","heart"),h(e,"class","heart-img")},m(o,n){d(o,e,n),s||(l=ee(e,"click",i[3]),s=!0)},p(o,n){n&1&&!P(e.src,r=`${q}/img/hearts/red-heart${o[0]?"":"-outline"}.svg`)&&h(e,"src",r)},d(o){o&&_(e),s=!1,l()}}}function he(i){let e,r,s,l,o;return l=new ce({props:{rich:!0,$$slots:{default:[ge]},$$scope:{ctx:i}}}),{c(){e=L("a"),r=O(i[1]),s=z(),J(l.$$.fragment),this.h()},l(n){e=N(n,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var t=A(e);r=T(t,i[1]),s=R(t),D(l.$$.fragment,t),t.forEach(_),this.h()},h(){h(e,"sveltekit:prefetch",""),h(e,"href",`${q}${i[2]}`),h(e,"class","title-item")},m(n,t){d(n,e,t),I(e,r),I(e,s),H(l,e,null),o=!0},p(n,[t]){const a={};t&65537&&(a.$$scope={dirty:t,ctx:n}),l.$set(a)},i(n){o||(v(l.$$.fragment,n),o=!0)},o(n){y(l.$$.fragment,n),o=!1},d(n){n&&_(e),M(l)}}}function _e(i,e,r){let s,l;$(i,C,g=>r(5,s=g)),$(i,j,g=>r(6,l=g));let{song:o}=e;const{title:n,officialurl:t,category:a,num:f}=o,m=a==="kingdom",b=m?"Kingdom Songs":a==="original"?"Original Songs":"Children's Songs",c=m?`Song ${f}: ${n}`:n,u=ne(a,f,t),k=JSON.parse(localStorage.getItem("favorites"));k&&C.set(k);let F=s.find(g=>g.link===u);const Y=g=>{const S=s.find(w=>w.link===g.link);S?W(C,s=s.map(w=>w.link===S.link?g:w),s):(W(j,l=!0,l),s.push(g))},x=g=>{g.preventDefault(),F?(C.set(s.filter(S=>S.link!==u)),fe(),localStorage.setItem("favorites",JSON.stringify(s))):(Y({title:c,category:b,link:u}),ue(),localStorage.setItem("favorites",JSON.stringify(s))),r(0,F=!F)};return i.$$set=g=>{"song"in g&&r(4,o=g.song)},[F,c,u,x,o]}class pe extends Q{constructor(e){super(),V(this,e,_e,he,Z,{song:4})}}function G(i,e,r){const s=i.slice();return s[7]=e[r],s}function de(i){let e,r=[],s=new Map,l,o=i[1];const n=t=>t[7].num+t[7].officialurl;for(let t=0;t<o.length;t+=1){let a=G(i,o,t),f=n(a);s.set(f,r[t]=K(f,a))}return{c(){e=L("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=N(t,"DIV",{class:!0});var a=A(e);for(let f=0;f<r.length;f+=1)r[f].l(a);a.forEach(_),this.h()},h(){h(e,"class","ui celled list")},m(t,a){d(t,e,a);for(let f=0;f<r.length;f+=1)r[f].m(e,null);l=!0},p(t,a){a&2&&(o=t[1],U(),r=re(r,a,n,1,t,o,s,e,se,K,null,G),X())},i(t){if(!l){for(let a=0;a<o.length;a+=1)v(r[a]);l=!0}},o(t){for(let a=0;a<r.length;a+=1)y(r[a]);l=!1},d(t){t&&_(e);for(let a=0;a<r.length;a+=1)r[a].d()}}}function ke(i){let e,r;return e=new me({}),{c(){J(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,l){H(e,s,l),r=!0},p:oe,i(s){r||(v(e.$$.fragment,s),r=!0)},o(s){y(e.$$.fragment,s),r=!1},d(s){M(e,s)}}}function K(i,e){let r,s,l;return s=new pe({props:{song:e[7]}}),{key:i,first:null,c(){r=E(),J(s.$$.fragment),this.h()},l(o){r=E(),D(s.$$.fragment,o),this.h()},h(){this.first=r},m(o,n){d(o,r,n),H(s,o,n),l=!0},p(o,n){e=o;const t={};n&2&&(t.song=e[7]),s.$set(t)},i(o){l||(v(s.$$.fragment,o),l=!0)},o(o){y(s.$$.fragment,o),l=!1},d(o){o&&_(r),M(s,o)}}}function ve(i){let e,r=B(i[0])+"",s,l,o,n,t,a,f;const m=[ke,de],p=[];function b(c,u){return c[1].length===0?0:1}return n=b(i),t=p[n]=m[n](i),{c(){e=L("h1"),s=O(r),l=O(" Songs"),o=z(),t.c(),a=E(),this.h()},l(c){e=N(c,"H1",{class:!0});var u=A(e);s=T(u,r),l=T(u," Songs"),u.forEach(_),o=R(c),t.l(c),a=E(),this.h()},h(){h(e,"class","svelte-m9c91y")},m(c,u){d(c,e,u),I(e,s),I(e,l),d(c,o,u),p[n].m(c,u),d(c,a,u),f=!0},p(c,[u]){(!f||u&1)&&r!==(r=B(c[0])+"")&&te(s,r);let k=n;n=b(c),n===k?p[n].p(c,u):(U(),y(p[k],1,1,()=>{p[k]=null}),X(),t=p[n],t?t.p(c,u):(t=p[n]=m[n](c),t.c()),v(t,1),t.m(a.parentNode,a))},i(c){f||(v(t),f=!0)},o(c){y(t),f=!1},d(c){c&&_(e),c&&_(o),p[n].d(c),c&&_(a)}}}function ye(i,e,r){let s,l,o,n;$(i,ae,m=>r(2,l=m)),$(i,le,m=>r(3,o=m)),$(i,ie,m=>r(4,n=m));let{category:t}=e;const a=t==="kingdom",f=t==="original";return i.$$set=m=>{"category"in m&&r(0,t=m.category)},i.$$.update=()=>{i.$$.dirty&28&&r(1,s=a?n:f?o:l)},[t,s,l,o,n]}class Ee extends Q{constructor(e){super(),V(this,e,ye,ve,Z,{category:0})}}export{Ee as C};