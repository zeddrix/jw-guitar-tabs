import{S as H,i as B,s as C,w as j,x,y as N,q as d,o as $,B as P,e as k,t as b,k as W,c as v,a as q,h as S,d as m,m as D,b as h,a5 as I,g as p,O as w,j as M,l as G,p as O,n as z,P as A}from"../chunks/vendor-a14c9fe5.js";import{b as J}from"../chunks/paths-4b3c6e7e.js";import{S as K,N as L}from"../chunks/NotFoundScreen-eaa14314.js";function Q(o){let e,s,t,r,c,l,u,a,f,_,g,y;return{c(){e=k("h1"),s=b("Something Went Wrong..."),t=W(),r=k("img"),l=W(),u=k("h3"),a=b("Description: "),f=b(o[0]),_=W(),g=k("p"),y=b("So sorry for the inconvenience. Please check in later..."),this.h()},l(n){e=v(n,"H1",{class:!0});var i=q(e);s=S(i,"Something Went Wrong..."),i.forEach(m),t=D(n),r=v(n,"IMG",{src:!0,alt:!0,height:!0,width:!0}),l=D(n),u=v(n,"H3",{class:!0});var E=q(u);a=S(E,"Description: "),f=S(E,o[0]),E.forEach(m),_=D(n),g=v(n,"P",{class:!0});var F=q(g);y=S(F,"So sorry for the inconvenience. Please check in later..."),F.forEach(m),this.h()},h(){h(e,"class","error_color svelte-26wd8d"),I(r.src,c=""+(J+"/img/screens/sad-face.png"))||h(r,"src",c),h(r,"alt","Sad face icon because something when wrong"),h(r,"height",200),h(r,"width",200),h(u,"class","description svelte-26wd8d"),h(g,"class","error_color svelte-26wd8d")},m(n,i){p(n,e,i),w(e,s),p(n,t,i),p(n,r,i),p(n,l,i),p(n,u,i),w(u,a),w(u,f),p(n,_,i),p(n,g,i),w(g,y)},p(n,i){i&1&&M(f,n[0])},d(n){n&&m(e),n&&m(t),n&&m(r),n&&m(l),n&&m(u),n&&m(_),n&&m(g)}}}function R(o){let e,s;return e=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){j(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,r){N(e,t,r),s=!0},p(t,[r]){const c={};r&3&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function T(o,e,s){let{message:t="Something went wrong..."}=e;return o.$$set=r=>{"message"in r&&s(0,t=r.message)},[t]}class U extends H{constructor(e){super();B(this,e,T,R,C,{message:0})}}function V(o){let e,s;return e=new U({props:{message:o[0]}}),{c(){j(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,r){N(e,t,r),s=!0},p(t,r){const c={};r&1&&(c.message=t[0]),e.$set(c)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function X(o){let e,s;return e=new L({}),{c(){j(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,r){N(e,t,r),s=!0},p:A,i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Y(o){let e,s,t,r;const c=[X,V],l=[];function u(a,f){return a[1]==404?0:1}return e=u(o),s=l[e]=c[e](o),{c(){s.c(),t=G()},l(a){s.l(a),t=G()},m(a,f){l[e].m(a,f),p(a,t,f),r=!0},p(a,[f]){let _=e;e=u(a),e===_?l[e].p(a,f):(z(),$(l[_],1,1,()=>{l[_]=null}),O(),s=l[e],s?s.p(a,f):(s=l[e]=c[e](a),s.c()),d(s,1),s.m(t.parentNode,t))},i(a){r||(d(s),r=!0)},o(a){$(s),r=!1},d(a){l[e].d(a),a&&m(t)}}}function re({error:o,status:e}){return{props:{message:o.message,status:e}}}function Z(o,e,s){let{message:t}=e,{status:r}=e;return o.$$set=c=>{"message"in c&&s(0,t=c.message),"status"in c&&s(1,r=c.status)},[t,r]}class ne extends H{constructor(e){super();B(this,e,Z,Y,C,{message:0,status:1})}}export{ne as default,re as load};
