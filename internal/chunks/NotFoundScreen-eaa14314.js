import{S as w,i as x,s as G,ab as j,e as $,c as d,a as h,d as n,b as m,g as u,ac as I,ad as A,ae as C,q as H,o as O,w as D,x as M,y as U,B as V,t as k,k as N,h as S,m as E,a5 as z,O as g,P as J}from"./vendor-a14c9fe5.js";import{b as T}from"./paths-4b3c6e7e.js";function K(c){let t,o;const l=c[1].default,e=j(l,c,c[0],null);return{c(){t=$("div"),e&&e.c(),this.h()},l(s){t=d(s,"DIV",{class:!0});var r=h(t);e&&e.l(r),r.forEach(n),this.h()},h(){m(t,"class","ui basic segment center aligned")},m(s,r){u(s,t,r),e&&e.m(t,null),o=!0},p(s,[r]){e&&e.p&&(!o||r&1)&&I(e,l,s,s[0],o?C(l,s[0],r,null):A(s[0]),null)},i(s){o||(H(e,s),o=!0)},o(s){O(e,s),o=!1},d(s){s&&n(t),e&&e.d(s)}}}function L(c,t,o){let{$$slots:l={},$$scope:e}=t;return c.$$set=s=>{"$$scope"in s&&o(0,e=s.$$scope)},[e,l]}class Q extends w{constructor(t){super();x(this,t,L,K,G,{})}}function R(c){let t,o,l,e,s,r,f,b,v,_,p,y;return{c(){t=$("h1"),o=k("Page Not Found . . ."),l=N(),e=$("img"),r=N(),f=$("p"),b=k(B),v=N(),_=$("a"),p=$("button"),y=k("Go Back Home"),this.h()},l(a){t=d(a,"H1",{});var i=h(t);o=S(i,"Page Not Found . . ."),i.forEach(n),l=E(a),e=d(a,"IMG",{src:!0,alt:!0,class:!0}),r=E(a),f=d(a,"P",{class:!0});var F=h(f);b=S(F,B),F.forEach(n),v=E(a),_=d(a,"A",{href:!0});var P=h(_);p=d(P,"BUTTON",{class:!0});var q=h(p);y=S(q,"Go Back Home"),q.forEach(n),P.forEach(n),this.h()},h(){z(e.src,s=""+(T+"/img/screens/not-found.gif"))||m(e,"src",s),m(e,"alt",B),m(e,"class","svelte-1cukv4c"),m(f,"class","message_404 svelte-1cukv4c"),m(p,"class","ui brown basic button"),m(_,"href",T)},m(a,i){u(a,t,i),g(t,o),u(a,l,i),u(a,e,i),u(a,r,i),u(a,f,i),g(f,b),u(a,v,i),u(a,_,i),g(_,p),g(p,y)},p:J,d(a){a&&n(t),a&&n(l),a&&n(e),a&&n(r),a&&n(f),a&&n(v),a&&n(_)}}}function W(c){let t,o;return t=new Q({props:{$$slots:{default:[R]},$$scope:{ctx:c}}}),{c(){D(t.$$.fragment)},l(l){M(t.$$.fragment,l)},m(l,e){U(t,l,e),o=!0},p(l,[e]){const s={};e&1&&(s.$$scope={dirty:e,ctx:l}),t.$set(s)},i(l){o||(H(t.$$.fragment,l),o=!0)},o(l){O(t.$$.fragment,l),o=!1},d(l){V(t,l)}}}const B="Oops! The page you're looking for doesn't exist (yet).";class Z extends w{constructor(t){super();x(this,t,null,W,G,{})}}export{Z as N,Q as S};