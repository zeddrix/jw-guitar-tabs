var Ce=Object.defineProperty,Ie=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var le=(a,e,n)=>e in a?Ce(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,q=(a,e)=>{for(var n in e||(e={}))je.call(e,n)&&le(a,n,e[n]);if(ae)for(var n of ae(e))Ae.call(e,n)&&le(a,n,e[n]);return a},Y=(a,e)=>Ie(a,De(e));import{S as O,i as G,s as J,L as Me,M as V,N as Q,w,x as v,y as S,O as X,q as d,o as b,B as y,v as Fe,P as We,Q as oe,R as Ee,t as j,h as A,g as k,d as m,e as E,T as ie,k as I,c as B,a as L,U as fe,m as D,b as C,V as F,W as N,X as x,Y as Be,Z as ee,_ as $e,l as z,n as K,$ as te,a0 as ne,p as Z,F as P,a1 as Le,f as Ne,a2 as ze,a3 as Oe,a4 as Ge,a5 as Je,j as se,a6 as He,a7 as Pe,a8 as Ve,a9 as Re,aa as Ue,ab as qe,ac as Ye,ad as Ke,ae as Ze,af as Qe,G as ue,H as ce,I as pe,J as me,ag as Xe,ah as ge,ai as xe,aj as et,ak as tt}from"./vendor-3246f839.js";import{d as _e,c as nt,o as st,k as rt,e as R,i as at}from"./helperFunctions-d39dba89.js";import{g as lt}from"./navigation-bd39ff07.js";import{b as U}from"./paths-4b3c6e7e.js";import{N as ot}from"./NewTabLink-9a062e2a.js";const wn=a=>{const e=1e3*60*60*24*7,n=new Date;let f=a==="kingdom"?"Sun May 10 2020":a==="original"?"Thu Aug 13 2020":"Sun May 10 2020";const p=new Date(f),$=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()),_=Date.UTC(p.getFullYear(),p.getMonth(),p.getDate());return Math.floor(-(_-$)/e)},vn=a=>a.map(n=>Y(q({},n),{category:"kingdom"})),Sn=a=>a.map(n=>Y(q({},n),{category:"original"})),yn=a=>a.map(n=>Y(q({},n),{category:"children"}));function it(a){let e;return{c(){e=j("cookie")},l(n){e=A(n,"cookie")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function ft(a){let e,n;return e=new We({props:{slot:"icon",class:"material-icons",$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&16&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function $t(a){let e;return{c(){e=j("This website uses cookies to ensure you get the best experience on this website.")},l(n){e=A(n,"This website uses cookies to ensure you get the best experience on this website.")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function ut(a){let e,n;return e=new oe({props:{slot:"label",class:"label",$$slots:{default:[$t]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&16&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ct(a){let e;return{c(){e=j("GOT IT")},l(n){e=A(n,"GOT IT")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function pt(a){let e,n;return e=new Ee({props:{slot:"actions",$$slots:{default:[ct]},$$scope:{ctx:a}}}),e.$on("click",a[1]),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&16&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function mt(a){let e,n,t;function r(l){a[2](l)}let s={fixed:!0,centered:!0,mobileStacked:!0,$$slots:{actions:[pt],label:[ut],icon:[ft]},$$scope:{ctx:a}};return a[0]!==void 0&&(s.open=a[0]),e=new Me({props:s}),V.push(()=>Q(e,"open",r)),{c(){w(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,o){S(e,l,o),t=!0},p(l,[o]){const f={};o&16&&(f.$$scope={dirty:o,ctx:l}),!n&&o&1&&(n=!0,f.open=l[0],X(()=>n=!1)),e.$set(f)},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){y(e,l)}}}function gt(a,e,n){let t=!0;const r=()=>localStorage.setItem("cookies","1"),s=()=>{n(0,t=!1),r()};Fe(()=>{const o=JSON.parse(localStorage.getItem("cookies"));o&&o===1?n(0,t=!1):n(0,t=!0)});function l(o){t=o,n(0,t)}return[t,s,l]}class _t extends O{constructor(e){super();G(this,e,gt,mt,J,{})}}const he=[{name:"Favorites",link:"/favorites",icon:"favorite_outline"},{name:"History",link:"/history",icon:"history"},{name:"Settings",link:"/settings",icon:"settings"},{name:"About",link:"/about",icon:"help_outline"}],de=[{name:"Kingdom Songs",link:"kingdom"},{name:"Original Songs",link:"original"},{name:"Children's Songs",link:"children"}],be=[{social:"Facebook",link:"https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjwguitartabs.zeddrix.com",svg:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"},{social:"Pinterest",link:"https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fjwguitartabs.zeddrix.com&amp;media=https%3A%2F%2Fjwguitartabs.zeddrix.com&amp;description=I%20love%20this%20site!%20It&#x27;s%20a%20website%20where%20people%20who%20love%20our%20JW%20songs%20can%20enjoy%20playing%20the%20simplest%20tabs%20on%20their%20guitar!%20Check%20it%20out!",svg:"M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z"},{social:"Twitter",link:"https://twitter.com/intent/tweet/?text=I%20love%20this%20site!%20It&#x27;s%20a%20website%20where%20people%20who%20love%20our%20JW%20songs%20can%20enjoy%20playing%20the%20simplest%20tabs%20on%20their%20guitar!%20Check%20it%20out!&amp;url=https%3A%2F%2Fjwguitartabs.zeddrix.com",svg:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"},{social:"Email",link:"mailto:?subject=I%20love%20this%20site!%20It&#x27;s%20a%20website%20where%20people%20who%20love%20our%20JW%20songs%20can%20enjoy%20playing%20the%20simplest%20tabs%20on%20their%20guitar!%20Check%20it%20out!&amp;body=https%3A%2F%2Fjwguitartabs.zeddrix.com",svg:"M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"}];function ht(a){let e,n,t,r,s,l,o;return{c(){e=E("a"),n=E("div"),t=E("div"),r=ie("svg"),s=ie("path"),l=I(),o=j(a[1]),this.h()},l(f){e=B(f,"A",{class:!0,href:!0,target:!0,rel:!0,"aria-label":!0});var p=L(e);n=B(p,"DIV",{class:!0});var $=L(n);t=B($,"DIV",{"aria-hidden":!0,class:!0});var _=L(t);r=fe(_,"svg",{xmlns:!0,viewBox:!0,class:!0});var u=L(r);s=fe(u,"path",{d:!0}),L(s).forEach(m),u.forEach(m),_.forEach(m),l=D($),o=A($,a[1]),$.forEach(m),p.forEach(m),this.h()},h(){C(s,"d",a[2]),C(r,"xmlns","http://www.w3.org/2000/svg"),C(r,"viewBox","0 0 24 24"),C(r,"class","svelte-1ceyycl"),C(t,"aria-hidden","true"),C(t,"class","resp-sharing-button__icon resp-sharing-button__icon--solid svelte-1ceyycl"),C(n,"class","resp-sharing-button resp-sharing-button--"+a[1].toLowerCase()+" resp-sharing-button--medium svelte-1ceyycl"),C(e,"class","resp-sharing-button__link svelte-1ceyycl"),C(e,"href",a[0]),C(e,"target","_blank"),C(e,"rel","noopener"),C(e,"aria-label","Share on "+a[1])},m(f,p){k(f,e,p),F(e,n),F(n,t),F(t,r),F(r,s),F(n,l),F(n,o)},p:N,i:N,o:N,d(f){f&&m(e)}}}function dt(a,e,n){let{share:t}=e;const{link:r,social:s,svg:l}=t;return a.$$set=o=>{"share"in o&&n(3,t=o.share)},[r,s,l,t]}class bt extends O{constructor(e){super();G(this,e,dt,ht,J,{share:3})}}function ke(a,e,n){const t=a.slice();return t[3]=e[n],t}function kt(a){let e;return{c(){e=j("share")},l(n){e=A(n,"share")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function wt(a){let e;return{c(){e=j("Share on")},l(n){e=A(n,"Share on")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function we(a,e){let n,t,r;return t=new bt({props:{share:e[3]}}),{key:a,first:null,c(){n=z(),w(t.$$.fragment),this.h()},l(s){n=z(),v(t.$$.fragment,s),this.h()},h(){this.first=n},m(s,l){k(s,n,l),S(t,s,l),r=!0},p(s,l){e=s},i(s){r||(d(t.$$.fragment,s),r=!0)},o(s){b(t.$$.fragment,s),r=!1},d(s){s&&m(n),y(t,s)}}}function vt(a){let e,n,t,r=[],s=new Map,l,o;n=new $e({props:{$$slots:{default:[wt]},$$scope:{ctx:a}}});let f=be;const p=$=>$[3];for(let $=0;$<f.length;$+=1){let _=ke(a,f,$),u=p(_);s.set(u,r[$]=we(u,_))}return{c(){e=E("div"),w(n.$$.fragment),t=I();for(let $=0;$<r.length;$+=1)r[$].c();l=z(),this.h()},l($){e=B($,"DIV",{class:!0});var _=L(e);v(n.$$.fragment,_),_.forEach(m),t=D($);for(let u=0;u<r.length;u+=1)r[u].l($);l=z(),this.h()},h(){C(e,"class","share_text_container svelte-bieu1g")},m($,_){k($,e,_),S(n,e,null),k($,t,_);for(let u=0;u<r.length;u+=1)r[u].m($,_);k($,l,_),o=!0},p($,_){const u={};_&64&&(u.$$scope={dirty:_,ctx:$}),n.$set(u),_&0&&(f=be,K(),r=te(r,_,p,1,$,f,s,l.parentNode,ne,we,l,ke),Z())},i($){if(!o){d(n.$$.fragment,$);for(let _=0;_<f.length;_+=1)d(r[_]);o=!0}},o($){b(n.$$.fragment,$);for(let _=0;_<r.length;_+=1)b(r[_]);o=!1},d($){$&&m(e),y(n),$&&m(t);for(let _=0;_<r.length;_+=1)r[_].d($);$&&m(l)}}}function St(a){let e,n;return e=new ee({props:{$$slots:{default:[vt]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&64&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function yt(a){let e,n,t,r,s;n=new x({props:{class:"material-icons",$$slots:{default:[kt]},$$scope:{ctx:a}}}),n.$on("click",a[1]);let l={anchorCorner:"BOTTOM_LEFT",$$slots:{default:[St]},$$scope:{ctx:a}};return r=new Be({props:l}),a[2](r),{c(){e=E("div"),w(n.$$.fragment),t=I(),w(r.$$.fragment),this.h()},l(o){e=B(o,"DIV",{class:!0});var f=L(e);v(n.$$.fragment,f),t=D(f),v(r.$$.fragment,f),f.forEach(m),this.h()},h(){C(e,"class","menu-and-button-container svelte-bieu1g")},m(o,f){k(o,e,f),S(n,e,null),F(e,t),S(r,e,null),s=!0},p(o,[f]){const p={};f&64&&(p.$$scope={dirty:f,ctx:o}),n.$set(p);const $={};f&64&&($.$$scope={dirty:f,ctx:o}),r.$set($)},i(o){s||(d(n.$$.fragment,o),d(r.$$.fragment,o),s=!0)},o(o){b(n.$$.fragment,o),b(r.$$.fragment,o),s=!1},d(o){o&&m(e),y(n),a[2](null),y(r)}}}function Tt(a,e,n){let t;const r=()=>t.setOpen(!0);function s(l){V[l?"unshift":"push"](()=>{t=l,n(0,t)})}return[t,r,s]}class Ct extends O{constructor(e){super();G(this,e,Tt,yt,J,{})}}function It(a){let e,n,t;function r(l){a[9](l)}let s={limit:5,data:a[1],extract:a[2],placeholder:"Enter Song Number/Title",$$slots:{"no-results":[At,({result:l})=>({12:l}),({result:l})=>l?4096:0],default:[jt,({result:l})=>({12:l}),({result:l})=>l?4096:0]},$$scope:{ctx:a}};return a[0]!==void 0&&(s.value=a[0]),e=new Le({props:s}),V.push(()=>Q(e,"value",r)),{c(){w(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,o){S(e,l,o),t=!0},p(l,o){const f={};o&2&&(f.data=l[1]),o&12288&&(f.$$scope={dirty:o,ctx:l}),!n&&o&1&&(n=!0,f.value=l[0],X(()=>n=!1)),e.$set(f)},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){y(e,l)}}}function Dt(a){return{c:N,l:N,m:N,p:N,i:N,o:N,d:N}}function jt(a){let e,n,t,r,s,l=a[12].string+"",o,f,p=a[5](a[12])+"",$,_;return{c(){e=E("input"),t=I(),r=E("p"),s=E("span"),o=I(),f=E("span"),this.h()},l(u){e=B(u,"INPUT",{style:!0,onload:!0}),t=D(u),r=B(u,"P",{class:!0});var i=L(r);s=B(i,"SPAN",{class:!0});var h=L(s);h.forEach(m),o=D(i),f=B(i,"SPAN",{class:!0});var T=L(f);T.forEach(m),i.forEach(m),this.h()},h(){Ne(e,"display","none"),C(e,"onload",n=a[4](a[12])),C(s,"class","title"),C(f,"class","category"),C(r,"class","content")},m(u,i){k(u,e,i),k(u,t,i),k(u,r,i),F(r,s),s.innerHTML=l,F(r,o),F(r,f),f.innerHTML=p,$||(_=ze(r,"click",function(){Oe(a[3](a[12]))&&a[3](a[12]).apply(this,arguments)}),$=!0)},p(u,i){a=u,i&4096&&n!==(n=a[4](a[12]))&&C(e,"onload",n),i&4096&&l!==(l=a[12].string+"")&&(s.innerHTML=l),i&4096&&p!==(p=a[5](a[12])+"")&&(f.innerHTML=p)},d(u){u&&m(e),u&&m(t),u&&m(r),$=!1,_()}}}function At(a){let e,n;return{c(){e=E("p"),n=j("No results found."),this.h()},l(t){e=B(t,"P",{class:!0});var r=L(e);n=A(r,"No results found."),r.forEach(m),this.h()},h(){C(e,"class","no_results")},m(t,r){k(t,e,r),F(e,n)},d(t){t&&m(e)}}}function Mt(a){let e,n,t,r;const s=[Dt,It],l=[];function o(f,p){return f[1].length===0?0:1}return e=o(a),n=l[e]=s[e](a),{c(){n.c(),t=z()},l(f){n.l(f),t=z()},m(f,p){l[e].m(f,p),k(f,t,p),r=!0},p(f,[p]){let $=e;e=o(f),e===$?l[e].p(f,p):(K(),b(l[$],1,1,()=>{l[$]=null}),Z(),n=l[e],n?n.p(f,p):(n=l[e]=s[e](f),n.c()),d(n,1),n.m(t.parentNode,t))},i(f){r||(d(n),r=!0)},o(f){b(n),r=!1},d(f){l[e].d(f),f&&m(t)}}}function Ft(a,e,n){let t,r,s,l,o;P(a,_e,T=>n(10,r=T)),P(a,nt,T=>n(6,s=T)),P(a,st,T=>n(7,l=T)),P(a,rt,T=>n(8,o=T));const f=T=>{const{title:M,category:H,num:c}=T;return H==="kingdom"?`Song ${c}: ${M}`:M};let p;const $=T=>{const{category:M,officialurl:H,num:c}=T,g=M==="kingdom"?H:`${c}-${H}`;lt(`/categories/${M}-songs/${g}`),n(0,p="")},_=T=>$(T.original),u=async T=>{if(T.score===1/0&&event.key==="Enter")_e.set(T.original),$(r);else return},i=T=>{const{category:M}=T.original;return M==="kingdom"?"Kingdom Songs":M==="original"?"Original Songs":"Children's Songs"};function h(T){p=T,n(0,p)}return a.$$.update=()=>{a.$$.dirty&448&&n(1,t=[...o,...l,...s])},[p,t,f,_,u,i,s,l,o,h]}class Wt extends O{constructor(e){super();G(this,e,Ft,Mt,J,{})}}function Et(a){let e;return{c(){e=j(a[2])},l(n){e=A(n,a[2])},m(n,t){k(n,e,t)},p(n,t){t&4&&se(e,n[2])},d(n){n&&m(e)}}}function Bt(a){let e;return{c(){e=j(a[0])},l(n){e=A(n,a[0])},m(n,t){k(n,e,t)},p(n,t){t&1&&se(e,n[0])},d(n){n&&m(e)}}}function Lt(a){let e,n,t,r;return e=new Je({props:{class:"material-icons","aria-hidden":"true",$$slots:{default:[Et]},$$scope:{ctx:a}}}),t=new $e({props:{$$slots:{default:[Bt]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment),n=I(),w(t.$$.fragment)},l(s){v(e.$$.fragment,s),n=D(s),v(t.$$.fragment,s)},m(s,l){S(e,s,l),k(s,n,l),S(t,s,l),r=!0},p(s,l){const o={};l&68&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const f={};l&65&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){r||(d(e.$$.fragment,s),d(t.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),r=!1},d(s){y(e,s),s&&m(n),y(t,s)}}}function Nt(a){let e,n;return e=new Ge({props:{href:`${U}${a[1]}`,$$slots:{default:[Lt]},$$scope:{ctx:a}}}),e.$on("click",a[3]),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,[r]){const s={};r&2&&(s.href=`${U}${t[1]}`),r&69&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function zt(a,e,n){let{name:t}=e,{link:r}=e,{icon:s}=e;const l=()=>R.set(!1);return a.$$set=o=>{"name"in o&&n(0,t=o.name),"link"in o&&n(1,r=o.link),"icon"in o&&n(2,s=o.icon)},[t,r,s,l]}class re extends O{constructor(e){super();G(this,e,zt,Nt,J,{name:0,link:1,icon:2})}}function ve(a,e,n){const t=a.slice();return t[2]=e[n].name,t[3]=e[n].link,t}function Se(a,e,n){const t=a.slice();return t[2]=e[n].name,t[3]=e[n].link,t[6]=e[n].icon,t}function Ot(a){let e,n,t;return{c(){e=E("img"),t=j(`
			JW Guitar Tabs`),this.h()},l(r){e=B(r,"IMG",{src:!0,class:!0,alt:!0,height:!0,width:!0}),t=A(r,`
			JW Guitar Tabs`),this.h()},h(){Ue(e.src,n=""+(U+"/img/jw-guitar-tabs-logo.svg"))||C(e,"src",n),C(e,"class","jwgt-logo svelte-sugpq7"),C(e,"alt","JWGT"),C(e,"height",50),C(e,"width",50)},m(r,s){k(r,e,s),k(r,t,s)},p:N,d(r){r&&m(e),r&&m(t)}}}function Gt(a){let e,n;return e=new Re({props:{style:"color: white; display: flex; justify-content: flex-start; align-items: center;",$$slots:{default:[Ot]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&512&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function ye(a,e){let n,t,r;return t=new re({props:{name:e[2],link:e[3],icon:e[6]}}),{key:a,first:null,c(){n=z(),w(t.$$.fragment),this.h()},l(s){n=z(),v(t.$$.fragment,s),this.h()},h(){this.first=n},m(s,l){k(s,n,l),S(t,s,l),r=!0},p(s,l){e=s},i(s){r||(d(t.$$.fragment,s),r=!0)},o(s){b(t.$$.fragment,s),r=!1},d(s){s&&m(n),y(t,s)}}}function Jt(a){let e;return{c(){e=j("Song Categories")},l(n){e=A(n,"Song Categories")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function Te(a,e){let n,t,r;return t=new re({props:{name:e[2],link:`/categories/${e[3]}-songs`,icon:"queue_music"}}),{key:a,first:null,c(){n=z(),w(t.$$.fragment),this.h()},l(s){n=z(),v(t.$$.fragment,s),this.h()},h(){this.first=n},m(s,l){k(s,n,l),S(t,s,l),r=!0},p(s,l){e=s},i(s){r||(d(t.$$.fragment,s),r=!0)},o(s){b(t.$$.fragment,s),r=!1},d(s){s&&m(n),y(t,s)}}}function Ht(a){let e,n,t=[],r=new Map,s,l,o,f,p,$=[],_=new Map,u,i;e=new re({props:{name:"Home",link:"/",icon:"home"}});let h=he;const T=c=>c[3];for(let c=0;c<h.length;c+=1){let g=Se(a,h,c),W=T(g);r.set(W,t[c]=ye(W,g))}l=new ee({}),f=new qe({props:{component:Ye,$$slots:{default:[Jt]},$$scope:{ctx:a}}});let M=de;const H=c=>c[3];for(let c=0;c<M.length;c+=1){let g=ve(a,M,c),W=H(g);_.set(W,$[c]=Te(W,g))}return{c(){w(e.$$.fragment),n=I();for(let c=0;c<t.length;c+=1)t[c].c();s=I(),w(l.$$.fragment),o=I(),w(f.$$.fragment),p=I();for(let c=0;c<$.length;c+=1)$[c].c();u=z()},l(c){v(e.$$.fragment,c),n=D(c);for(let g=0;g<t.length;g+=1)t[g].l(c);s=D(c),v(l.$$.fragment,c),o=D(c),v(f.$$.fragment,c),p=D(c);for(let g=0;g<$.length;g+=1)$[g].l(c);u=z()},m(c,g){S(e,c,g),k(c,n,g);for(let W=0;W<t.length;W+=1)t[W].m(c,g);k(c,s,g),S(l,c,g),k(c,o,g),S(f,c,g),k(c,p,g);for(let W=0;W<$.length;W+=1)$[W].m(c,g);k(c,u,g),i=!0},p(c,g){g&0&&(h=he,K(),t=te(t,g,T,1,c,h,r,s.parentNode,ne,ye,s,Se),Z());const W={};g&512&&(W.$$scope={dirty:g,ctx:c}),f.$set(W),g&0&&(M=de,K(),$=te($,g,H,1,c,M,_,u.parentNode,ne,Te,u,ve),Z())},i(c){if(!i){d(e.$$.fragment,c);for(let g=0;g<h.length;g+=1)d(t[g]);d(l.$$.fragment,c),d(f.$$.fragment,c);for(let g=0;g<M.length;g+=1)d($[g]);i=!0}},o(c){b(e.$$.fragment,c);for(let g=0;g<t.length;g+=1)b(t[g]);b(l.$$.fragment,c),b(f.$$.fragment,c);for(let g=0;g<$.length;g+=1)b($[g]);i=!1},d(c){y(e,c),c&&m(n);for(let g=0;g<t.length;g+=1)t[g].d(c);c&&m(s),y(l,c),c&&m(o),y(f,c),c&&m(p);for(let g=0;g<$.length;g+=1)$[g].d(c);c&&m(u)}}}function Pt(a){let e,n;return e=new ee({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&512&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Vt(a){let e,n,t,r;return e=new Pe({props:{style:"background: saddlebrown; padding: 1rem 0",$$slots:{default:[Gt]},$$scope:{ctx:a}}}),t=new Ve({props:{$$slots:{default:[Pt]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment),n=I(),w(t.$$.fragment)},l(s){v(e.$$.fragment,s),n=D(s),v(t.$$.fragment,s)},m(s,l){S(e,s,l),k(s,n,l),S(t,s,l),r=!0},p(s,l){const o={};l&512&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const f={};l&512&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){r||(d(e.$$.fragment,s),d(t.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),r=!1},d(s){y(e,s),s&&m(n),y(t,s)}}}function Rt(a){let e,n,t;function r(l){a[1](l)}let s={variant:"modal",$$slots:{default:[Vt]},$$scope:{ctx:a}};return a[0]!==void 0&&(s.open=a[0]),e=new He({props:s}),V.push(()=>Q(e,"open",r)),{c(){w(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,o){S(e,l,o),t=!0},p(l,[o]){const f={};o&512&&(f.$$scope={dirty:o,ctx:l}),!n&&o&1&&(n=!0,f.open=l[0],X(()=>n=!1)),e.$set(f)},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){y(e,l)}}}function Ut(a,e,n){let t;P(a,R,s=>n(0,t=s));function r(s){t=s,R.set(t)}return[t,r]}class qt extends O{constructor(e){super();G(this,e,Ut,Rt,J,{})}}function Yt(a){let e;return{c(){e=j("menu")},l(n){e=A(n,"menu")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function Kt(a){let e;return{c(){e=j("JW Guitar Tabs")},l(n){e=A(n,"JW Guitar Tabs")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function Zt(a){let e,n,t,r,s,l;return e=new x({props:{class:"material-icons",$$slots:{default:[Yt]},$$scope:{ctx:a}}}),e.$on("click",a[1]),t=new xe({props:{style:"margin-right: 1rem;",$$slots:{default:[Kt]},$$scope:{ctx:a}}}),s=new Wt({}),{c(){w(e.$$.fragment),n=I(),w(t.$$.fragment),r=I(),w(s.$$.fragment)},l(o){v(e.$$.fragment,o),n=D(o),v(t.$$.fragment,o),r=D(o),v(s.$$.fragment,o)},m(o,f){S(e,o,f),k(o,n,f),S(t,o,f),k(o,r,f),S(s,o,f),l=!0},p(o,f){const p={};f&16&&(p.$$scope={dirty:f,ctx:o}),e.$set(p);const $={};f&16&&($.$$scope={dirty:f,ctx:o}),t.$set($)},i(o){l||(d(e.$$.fragment,o),d(t.$$.fragment,o),d(s.$$.fragment,o),l=!0)},o(o){b(e.$$.fragment,o),b(t.$$.fragment,o),b(s.$$.fragment,o),l=!1},d(o){y(e,o),o&&m(n),y(t,o),o&&m(r),y(s,o)}}}function Qt(a){let e,n;return e=new Ct({}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Xt(a){let e,n,t,r;return e=new ge({props:{$$slots:{default:[Zt]},$$scope:{ctx:a}}}),t=new ge({props:{align:"end",toolbar:!0,$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment),n=I(),w(t.$$.fragment)},l(s){v(e.$$.fragment,s),n=D(s),v(t.$$.fragment,s)},m(s,l){S(e,s,l),k(s,n,l),S(t,s,l),r=!0},p(s,l){const o={};l&16&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const f={};l&16&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){r||(d(e.$$.fragment,s),d(t.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),r=!1},d(s){y(e,s),s&&m(n),y(t,s)}}}function xt(a){let e,n;return e=new Xe({props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&16&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function en(a){let e,n,t,r,s,l,o,f,p,$={variant:"fixed",style:"padding: 0.5rem 0",$$slots:{default:[xt]},$$scope:{ctx:a}};e=new Ke({props:$}),a[3](e),t=new qt({}),s=new Ze({}),o=new Qe({props:{topAppBar:a[0]}});const _=a[2].default,u=ue(_,a,a[4],null);return{c(){w(e.$$.fragment),n=I(),w(t.$$.fragment),r=I(),w(s.$$.fragment),l=I(),w(o.$$.fragment),f=I(),u&&u.c()},l(i){v(e.$$.fragment,i),n=D(i),v(t.$$.fragment,i),r=D(i),v(s.$$.fragment,i),l=D(i),v(o.$$.fragment,i),f=D(i),u&&u.l(i)},m(i,h){S(e,i,h),k(i,n,h),S(t,i,h),k(i,r,h),S(s,i,h),k(i,l,h),S(o,i,h),k(i,f,h),u&&u.m(i,h),p=!0},p(i,[h]){const T={};h&16&&(T.$$scope={dirty:h,ctx:i}),e.$set(T);const M={};h&1&&(M.topAppBar=i[0]),o.$set(M),u&&u.p&&(!p||h&16)&&ce(u,_,i,i[4],p?me(_,i[4],h,null):pe(i[4]),null)},i(i){p||(d(e.$$.fragment,i),d(t.$$.fragment,i),d(s.$$.fragment,i),d(o.$$.fragment,i),d(u,i),p=!0)},o(i){b(e.$$.fragment,i),b(t.$$.fragment,i),b(s.$$.fragment,i),b(o.$$.fragment,i),b(u,i),p=!1},d(i){a[3](null),y(e,i),i&&m(n),y(t,i),i&&m(r),y(s,i),i&&m(l),y(o,i),i&&m(f),u&&u.d(i)}}}function tn(a,e,n){let t;P(a,R,p=>n(5,t=p));let{$$slots:r={},$$scope:s}=e,l;const o=()=>R.set(!t);function f(p){V[p?"unshift":"push"](()=>{l=p,n(0,l)})}return a.$$set=p=>{"$$scope"in p&&n(4,s=p.$$scope)},[l,o,r,f,s]}class nn extends O{constructor(e){super();G(this,e,tn,en,J,{})}}function sn(a){let e,n,t,r,s=new Date().getFullYear()+"",l,o,f,p,$,_,u;return _=new ot({props:{href:"https://zeddrix.com/",text:"BeAmaZedd"}}),{c(){e=E("p"),n=E("a"),t=j("Copyright"),r=j(" \xA9 "),l=j(s),o=j(` |
	`),f=E("a"),p=j("Terms of Use"),$=j(` | JW Guitar Tabs |
	`),w(_.$$.fragment),this.h()},l(i){e=B(i,"P",{class:!0});var h=L(e);n=B(h,"A",{href:!0});var T=L(n);t=A(T,"Copyright"),T.forEach(m),r=A(h," \xA9 "),l=A(h,s),o=A(h,` |
	`),f=B(h,"A",{href:!0});var M=L(f);p=A(M,"Terms of Use"),M.forEach(m),$=A(h,` | JW Guitar Tabs |
	`),v(_.$$.fragment,h),h.forEach(m),this.h()},h(){C(n,"href",""+(U+"/copyright")),C(f,"href",""+(U+"/copyright")),C(e,"class","footer svelte-nmkwa5")},m(i,h){k(i,e,h),F(e,n),F(n,t),F(e,r),F(e,l),F(e,o),F(e,f),F(f,p),F(e,$),S(_,e,null),u=!0},p:N,i(i){u||(d(_.$$.fragment,i),u=!0)},o(i){b(_.$$.fragment,i),u=!1},d(i){i&&m(e),y(_)}}}class rn extends O{constructor(e){super();G(this,e,null,sn,J,{})}}function an(a){let e=a[1].text+"",n;return{c(){n=j(e)},l(t){n=A(t,e)},m(t,r){k(t,n,r)},p(t,r){r&2&&e!==(e=t[1].text+"")&&se(n,e)},d(t){t&&m(n)}}}function ln(a){let e;return{c(){e=j("close")},l(n){e=A(n,"close")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function on(a){let e,n;return e=new x({props:{class:"material-icons",title:"Dismiss",$$slots:{default:[ln]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function fn(a){let e,n,t,r;return e=new oe({props:{$$slots:{default:[an]},$$scope:{ctx:a}}}),t=new tt({props:{$$slots:{default:[on]},$$scope:{ctx:a}}}),{c(){w(e.$$.fragment),n=I(),w(t.$$.fragment)},l(s){v(e.$$.fragment,s),n=D(s),v(t.$$.fragment,s)},m(s,l){S(e,s,l),k(s,n,l),S(t,s,l),r=!0},p(s,l){const o={};l&10&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const f={};l&8&&(f.$$scope={dirty:l,ctx:s}),t.$set(f)},i(s){r||(d(e.$$.fragment,s),d(t.$$.fragment,s),r=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),r=!1},d(s){y(e,s),s&&m(n),y(t,s)}}}function $n(a){let e,n,t={$$slots:{default:[fn]},$$scope:{ctx:a}};return e=new et({props:t}),a[2](e),{c(){w(e.$$.fragment)},l(r){v(e.$$.fragment,r)},m(r,s){S(e,r,s),n=!0},p(r,[s]){const l={};s&10&&(l.$$scope={dirty:s,ctx:r}),e.$set(l)},i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){a[2](null),y(e,r)}}}function un(a,e,n){let t;P(a,at,l=>n(1,t=l));let r;function s(l){V[l?"unshift":"push"](()=>{r=l,n(0,r)})}return a.$$.update=()=>{a.$$.dirty&3&&r&&t.open&&r.open()},[r,t,s]}class cn extends O{constructor(e){super();G(this,e,un,$n,J,{})}}function pn(a){let e,n,t,r,s,l,o,f,p,$;e=new _t({}),t=new nn({});const _=a[1].default,u=ue(_,a,a[0],null);return o=new cn({}),p=new rn({}),{c(){w(e.$$.fragment),n=I(),w(t.$$.fragment),r=I(),s=E("div"),u&&u.c(),l=I(),w(o.$$.fragment),f=I(),w(p.$$.fragment),this.h()},l(i){v(e.$$.fragment,i),n=D(i),v(t.$$.fragment,i),r=D(i),s=B(i,"DIV",{class:!0});var h=L(s);u&&u.l(h),h.forEach(m),l=D(i),v(o.$$.fragment,i),f=D(i),v(p.$$.fragment,i),this.h()},h(){C(s,"class","main svelte-tlojcu")},m(i,h){S(e,i,h),k(i,n,h),S(t,i,h),k(i,r,h),k(i,s,h),u&&u.m(s,null),k(i,l,h),S(o,i,h),k(i,f,h),S(p,i,h),$=!0},p(i,[h]){u&&u.p&&(!$||h&1)&&ce(u,_,i,i[0],$?me(_,i[0],h,null):pe(i[0]),null)},i(i){$||(d(e.$$.fragment,i),d(t.$$.fragment,i),d(u,i),d(o.$$.fragment,i),d(p.$$.fragment,i),$=!0)},o(i){b(e.$$.fragment,i),b(t.$$.fragment,i),b(u,i),b(o.$$.fragment,i),b(p.$$.fragment,i),$=!1},d(i){y(e,i),i&&m(n),y(t,i),i&&m(r),i&&m(s),u&&u.d(i),i&&m(l),y(o,i),i&&m(f),y(p,i)}}}function mn(a,e,n){let{$$slots:t={},$$scope:r}=e;return a.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,t]}class Tn extends O{constructor(e){super();G(this,e,mn,pn,J,{})}}export{Tn as L,vn as a,Sn as b,wn as c,yn as d};
