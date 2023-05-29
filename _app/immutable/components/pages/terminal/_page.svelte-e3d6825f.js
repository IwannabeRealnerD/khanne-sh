import{S as Z,i as j,s as $,k as v,a as C,q as y,l as w,m as g,c as T,r as P,h as _,n as d,J as H,b as N,H as i,K as J,L as V,M as x,C as Y,N as ee,o as te,B as R,e as q,O as se,u as z,v as ae}from"../../../chunks/index-49a526af.js";const L="COMMAND",le=s=>{localStorage.removeItem(s)},X=s=>{try{const e=localStorage.getItem(s);if(e===null){le(s);return}return JSON.parse(e)}catch{return}},O=(s,e)=>{const t=JSON.stringify(e);localStorage.setItem(s,t)},S={HELP:"help",ABOUT:"about",GITHUB:"github",PWD:"pwd",CLEAR:"clear"},D=s=>{for(const e of Object.values(S))if(e===s)return"validInputCommand";return"invalidInputCommand"},W=s=>s.slice(-40),B=s=>s===S.ABOUT?`khanne-sh is a terminal that has information about khanne(me). 
 You can use 'help' command to see available commands.`:s===S.HELP?`Here are commands that you can use: 
 1. about 
 2. github 
 3. help`:s===S.GITHUB?(window.open("https://github.com/IwannabeRealnerD"),"Redirecting to github repositories..."):s===S.PWD?window.location.href:s===S.CLEAR?(oe(),"khanne-sh history is cleared."):`khanne-sh: command not found: ${s}`,ne=s=>{const e=X(L);if(e===void 0){O(L,[s]);return}if(e.length>50){const t=W(e);t.push(s),O(L,t);return}e.push(s),O(L,e)},oe=()=>{O(L,[])};function G(s,e,t){const l=s.slice();return l[6]=e[t],l}function K(s){let e,t,l,a,n,o;return{c(){e=v("article"),t=v("p"),l=y("Welcome to khanne-sh"),a=C(),n=v("p"),o=y("Ask what you want to know about him"),this.h()},l(u){e=w(u,"ARTICLE",{class:!0});var p=g(e);t=w(p,"P",{class:!0});var r=g(t);l=P(r,"Welcome to khanne-sh"),r.forEach(_),a=T(p),n=w(p,"P",{class:!0});var k=g(n);o=P(k,"Ask what you want to know about him"),k.forEach(_),p.forEach(_),this.h()},h(){d(t,"class","welcomeMessage svelte-2wmwek"),d(n,"class","welcomeMessage svelte-2wmwek"),d(e,"class","commandWrapper svelte-2wmwek")},m(u,p){N(u,e,p),i(e,t),i(t,l),i(e,a),i(e,n),i(n,o)},d(u){u&&_(e)}}}function F(s){let e,t=s[0],l=[];for(let a=0;a<t.length;a+=1)l[a]=Q(G(s,t,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=q()},l(a){for(let n=0;n<l.length;n+=1)l[n].l(a);e=q()},m(a,n){for(let o=0;o<l.length;o+=1)l[o].m(a,n);N(a,e,n)},p(a,n){if(n&1){t=a[0];let o;for(o=0;o<t.length;o+=1){const u=G(a,t,o);l[o]?l[o].p(u,n):(l[o]=Q(u),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(a){se(l,a),a&&_(e)}}}function Q(s){let e,t,l,a,n,o,u=s[6].command+"",p,r,k,E,I=s[6].result+"",m,h;return{c(){e=v("article"),t=v("div"),l=v("p"),a=y("khanne-sh :"),n=C(),o=v("p"),p=y(u),k=C(),E=v("p"),m=y(I),h=C(),this.h()},l(c){e=w(c,"ARTICLE",{class:!0});var f=g(e);t=w(f,"DIV",{class:!0});var b=g(t);l=w(b,"P",{class:!0});var A=g(l);a=P(A,"khanne-sh :"),A.forEach(_),n=T(b),o=w(b,"P",{class:!0});var M=g(o);p=P(M,u),M.forEach(_),b.forEach(_),k=T(f),E=w(f,"P",{class:!0});var U=g(E);m=P(U,I),U.forEach(_),h=T(f),f.forEach(_),this.h()},h(){d(l,"class","userInputCommand svelte-2wmwek"),d(o,"class",r=H(`inputTag ${D(s[6].command)}`)+" svelte-2wmwek"),d(t,"class","commandContainer svelte-2wmwek"),d(E,"class","commandOutput svelte-2wmwek"),d(e,"class","commandWrapper svelte-2wmwek")},m(c,f){N(c,e,f),i(e,t),i(t,l),i(l,a),i(t,n),i(t,o),i(o,p),i(e,k),i(e,E),i(E,m),i(e,h)},p(c,f){f&1&&u!==(u=c[6].command+"")&&z(p,u),f&1&&r!==(r=H(`inputTag ${D(c[6].command)}`)+" svelte-2wmwek")&&d(o,"class",r),f&1&&I!==(I=c[6].result+"")&&z(m,I)},d(c){c&&_(e)}}}function re(s){let e,t,l,a,n,o,u,p,r,k,E,I,m=(s[0]===void 0||s[0].length===0)&&K(),h=s[0]&&F(s);return{c(){e=v("main"),t=v("div"),m&&m.c(),l=C(),h&&h.c(),a=C(),n=v("form"),o=v("p"),u=y("khanne-sh :"),p=C(),r=v("input"),this.h()},l(c){e=w(c,"MAIN",{class:!0});var f=g(e);t=w(f,"DIV",{class:!0});var b=g(t);m&&m.l(b),l=T(b),h&&h.l(b),a=T(b),n=w(b,"FORM",{autocomplete:!0,class:!0});var A=g(n);o=w(A,"P",{class:!0});var M=g(o);u=P(M,"khanne-sh :"),M.forEach(_),p=T(A),r=w(A,"INPUT",{class:!0,name:!0}),A.forEach(_),b.forEach(_),f.forEach(_),this.h()},h(){d(o,"class","userInputCommand svelte-2wmwek"),d(r,"class",k=H(`inputTag ${D(s[1])}`)+" svelte-2wmwek"),d(r,"name","command"),r.autofocus=!0,d(n,"autocomplete","off"),d(n,"class","formContainer svelte-2wmwek"),d(t,"class","commandArrWrapper svelte-2wmwek"),d(e,"class","container svelte-2wmwek")},m(c,f){N(c,e,f),i(e,t),m&&m.m(t,null),i(t,l),h&&h.m(t,null),i(t,a),i(t,n),i(n,o),i(o,u),i(n,p),i(n,r),J(r,s[1]),s[5](t),r.focus(),E||(I=[V(r,"input",s[4]),V(n,"submit",x(s[3]))],E=!0)},p(c,[f]){c[0]===void 0||c[0].length===0?m||(m=K(),m.c(),m.m(t,l)):m&&(m.d(1),m=null),c[0]?h?h.p(c,f):(h=F(c),h.c(),h.m(t,a)):h&&(h.d(1),h=null),f&2&&k!==(k=H(`inputTag ${D(c[1])}`)+" svelte-2wmwek")&&d(r,"class",k),f&2&&r.value!==c[1]&&J(r,c[1])},i:Y,o:Y,d(c){c&&_(e),m&&m.d(),h&&h.d(),s[5](null),E=!1,ee(I)}}}function ce(s,e,t){let l=[],a,n;const o=async()=>{if(ne({command:a??"",result:B(a)}),!l){t(0,l=[{command:a,result:B(a)}]),t(1,a=""),await R(),scroll(0,document.body.scrollHeight);return}const r=W(l);t(0,l=[...r,{command:a,result:B(a)}]),t(1,a=""),await R(),t(2,n.scrollTop=n.scrollHeight,n)};te(async()=>{let r=X(L);r&&r.length>50&&(r=W(r)),t(0,l=r),await R(),t(2,n.scrollTop=n.scrollHeight,n)});function u(){a=this.value,t(1,a)}function p(r){ae[r?"unshift":"push"](()=>{n=r,t(2,n)})}return[l,a,n,o,u,p]}class ue extends Z{constructor(e){super(),j(this,e,ce,re,$,{})}}export{ue as default};