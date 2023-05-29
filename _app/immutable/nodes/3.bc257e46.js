import{S as X,i as Z,s as $,k as w,a as T,q as S,l as g,m as v,c as y,r as C,h as _,n as d,J as H,b as N,G as i,K as U,L as J,M as x,H as V,N as ee,o as te,t as R,e as Y,O as se,u as q,w as ae}from"../chunks/index.24eee831.js";import"../chunks/paths.c2ce0f9e.js";const O="COMMAND",ne=s=>{localStorage.removeItem(s)},Q=s=>{try{const e=localStorage.getItem(s);if(e===null){ne(s);return}return JSON.parse(e)}catch{return}},M=(s,e)=>{const t=JSON.stringify(e);localStorage.setItem(s,t)},L={HELP:"help",ABOUT:"about",GITHUB:"github",BLOG:"blog",PWD:"pwd",CLEAR:"clear"},D=s=>{for(const e of Object.values(L))if(e===s)return"validInputCommand";return"invalidInputCommand"},W=s=>s.slice(-40),B=s=>s===L.ABOUT?`khanne-sh is a terminal that has information about khanne(me). 
 You can use 'help' command to see available commands.`:s===L.HELP?`Here are commands that you can use: 
 1. about : to get information about this project. 
 2. github : open new tab for khanne's github 
 3. help : to see available commands 
 4. pwd : to see current url 
 5. clear : to clear history`:s===L.GITHUB?(window.open("https://github.com/IwannabeRealnerD"),"Redirecting to khanne's github repositories..."):s===L.BLOG?(window.open("https://iwannaberealnerd.oopy.io/develog"),"Opening new tabs for khanne's blog..."):s===L.PWD?window.location.href:s===L.CLEAR?(oe(),"khanne-sh history is cleared."):`khanne-sh: command not found: ${s}`,le=s=>{const e=Q(O);if(e===void 0){M(O,[s]);return}if(e.length>50){const t=W(e);t.push(s),M(O,t);return}e.push(s),M(O,e)},oe=()=>{M(O,[])};function z(s,e,t){const n=s.slice();return n[6]=e[t],n}function K(s){let e,t,n,a,l,o;return{c(){e=w("article"),t=w("p"),n=S("Welcome to khanne-sh"),a=T(),l=w("p"),o=S("Ask what you want to know about him"),this.h()},l(u){e=g(u,"ARTICLE",{class:!0});var p=v(e);t=g(p,"P",{class:!0});var r=v(t);n=C(r,"Welcome to khanne-sh"),r.forEach(_),a=y(p),l=g(p,"P",{class:!0});var k=v(l);o=C(k,"Ask what you want to know about him"),k.forEach(_),p.forEach(_),this.h()},h(){d(t,"class","welcomeMessage svelte-2wmwek"),d(l,"class","welcomeMessage svelte-2wmwek"),d(e,"class","commandWrapper svelte-2wmwek")},m(u,p){N(u,e,p),i(e,t),i(t,n),i(e,a),i(e,l),i(l,o)},d(u){u&&_(e)}}}function F(s){let e,t=s[0],n=[];for(let a=0;a<t.length;a+=1)n[a]=j(z(s,t,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=Y()},l(a){for(let l=0;l<n.length;l+=1)n[l].l(a);e=Y()},m(a,l){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(a,l);N(a,e,l)},p(a,l){if(l&1){t=a[0];let o;for(o=0;o<t.length;o+=1){const u=z(a,t,o);n[o]?n[o].p(u,l):(n[o]=j(u),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(a){se(n,a),a&&_(e)}}}function j(s){let e,t,n,a,l,o,u=s[6].command+"",p,r,k,E,I=s[6].result+"",m,h;return{c(){e=w("article"),t=w("div"),n=w("p"),a=S("khanne-sh :"),l=T(),o=w("p"),p=S(u),k=T(),E=w("p"),m=S(I),h=T(),this.h()},l(c){e=g(c,"ARTICLE",{class:!0});var f=v(e);t=g(f,"DIV",{class:!0});var b=v(t);n=g(b,"P",{class:!0});var A=v(n);a=C(A,"khanne-sh :"),A.forEach(_),l=y(b),o=g(b,"P",{class:!0});var P=v(o);p=C(P,u),P.forEach(_),b.forEach(_),k=y(f),E=g(f,"P",{class:!0});var G=v(E);m=C(G,I),G.forEach(_),h=y(f),f.forEach(_),this.h()},h(){d(n,"class","userInputCommand svelte-2wmwek"),d(o,"class",r=H(`inputTag ${D(s[6].command)}`)+" svelte-2wmwek"),d(t,"class","commandContainer svelte-2wmwek"),d(E,"class","commandOutput svelte-2wmwek"),d(e,"class","commandWrapper svelte-2wmwek")},m(c,f){N(c,e,f),i(e,t),i(t,n),i(n,a),i(t,l),i(t,o),i(o,p),i(e,k),i(e,E),i(E,m),i(e,h)},p(c,f){f&1&&u!==(u=c[6].command+"")&&q(p,u),f&1&&r!==(r=H(`inputTag ${D(c[6].command)}`)+" svelte-2wmwek")&&d(o,"class",r),f&1&&I!==(I=c[6].result+"")&&q(m,I)},d(c){c&&_(e)}}}function re(s){let e,t,n,a,l,o,u,p,r,k,E,I,m=(s[0]===void 0||s[0].length===0)&&K(),h=s[0]&&F(s);return{c(){e=w("main"),t=w("div"),m&&m.c(),n=T(),h&&h.c(),a=T(),l=w("form"),o=w("p"),u=S("khanne-sh :"),p=T(),r=w("input"),this.h()},l(c){e=g(c,"MAIN",{class:!0});var f=v(e);t=g(f,"DIV",{class:!0});var b=v(t);m&&m.l(b),n=y(b),h&&h.l(b),a=y(b),l=g(b,"FORM",{autocomplete:!0,class:!0});var A=v(l);o=g(A,"P",{class:!0});var P=v(o);u=C(P,"khanne-sh :"),P.forEach(_),p=y(A),r=g(A,"INPUT",{class:!0,name:!0}),A.forEach(_),b.forEach(_),f.forEach(_),this.h()},h(){d(o,"class","userInputCommand svelte-2wmwek"),d(r,"class",k=H(`inputTag ${D(s[1])}`)+" svelte-2wmwek"),d(r,"name","command"),r.autofocus=!0,d(l,"autocomplete","off"),d(l,"class","formContainer svelte-2wmwek"),d(t,"class","commandArrWrapper svelte-2wmwek"),d(e,"class","container svelte-2wmwek")},m(c,f){N(c,e,f),i(e,t),m&&m.m(t,null),i(t,n),h&&h.m(t,null),i(t,a),i(t,l),i(l,o),i(o,u),i(l,p),i(l,r),U(r,s[1]),s[5](t),r.focus(),E||(I=[J(r,"input",s[4]),J(l,"submit",x(s[3]))],E=!0)},p(c,[f]){c[0]===void 0||c[0].length===0?m||(m=K(),m.c(),m.m(t,n)):m&&(m.d(1),m=null),c[0]?h?h.p(c,f):(h=F(c),h.c(),h.m(t,a)):h&&(h.d(1),h=null),f&2&&k!==(k=H(`inputTag ${D(c[1])}`)+" svelte-2wmwek")&&d(r,"class",k),f&2&&r.value!==c[1]&&U(r,c[1])},i:V,o:V,d(c){c&&_(e),m&&m.d(),h&&h.d(),s[5](null),E=!1,ee(I)}}}function ce(s,e,t){let n=[],a,l;const o=async()=>{if(le({command:a??"",result:B(a)}),!n){t(0,n=[{command:a,result:B(a)}]),t(1,a=""),await R(),scroll(0,document.body.scrollHeight);return}const r=W(n);t(0,n=[...r,{command:a,result:B(a)}]),t(1,a=""),await R(),t(2,l.scrollTop=l.scrollHeight,l)};te(async()=>{let r=Q(O);r&&r.length>50&&(r=W(r)),t(0,n=r),await R(),t(2,l.scrollTop=l.scrollHeight,l)});function u(){a=this.value,t(1,a)}function p(r){ae[r?"unshift":"push"](()=>{l=r,t(2,l)})}return[n,a,l,o,u,p]}class me extends X{constructor(e){super(),Z(this,e,ce,re,$,{})}}export{me as component};
