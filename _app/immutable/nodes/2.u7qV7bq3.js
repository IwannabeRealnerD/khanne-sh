import{A as ve,s as Z,e as A,a as H,t as Y,c as y,b as L,O as ne,g as D,d as J,f as I,v as w,P as R,i as W,h as b,j as F,n as j,w as re,Q as ke,r as be,R as Ae,z as U,S as ee,x as we,T as ie,U as ye,p as ce,V as Te}from"../chunks/scheduler.BmwvxkUZ.js";import{t as k,S as $,i as K,a as S,c as q,b as se,d as le,m as ae,e as oe,g as V}from"../chunks/index.B1XGB-Tc.js";import"../chunks/paths.D468tepT.js";function Q(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Le(n,e){n.d(1),e.delete(n.key)}function Se(n,e,s,t,a,c,l,r,i,d,u,f){let o=n.length,m=c.length,g=o;const h={};for(;g--;)h[n[g].key]=g;const p=[],_=new Map,v=new Map,T=[];for(g=m;g--;){const C=f(a,c,g),M=s(C);let O=l.get(M);O?t&&T.push(()=>O.p(C,e)):(O=d(M,C),O.c()),_.set(M,p[g]=O),M in h&&v.set(M,Math.abs(g-h[M]))}const N=new Set,P=new Set;function x(C){k(C,1),C.m(r,u),l.set(C.key,C),u=C.first,m--}for(;o&&m;){const C=p[m-1],M=n[o-1],O=C.key,B=M.key;C===M?(u=C.first,o--,m--):_.has(B)?!l.has(O)||N.has(O)?x(C):P.has(B)?o--:v.get(O)>v.get(B)?(P.add(O),x(C)):(N.add(B),o--):(i(M,l),o--)}for(;o--;){const C=n[o];_.has(C.key)||i(C,l)}for(;m;)x(p[m-1]);return ve(T),p}const z="COMMAND",Me=n=>{localStorage.removeItem(n)},Ce=n=>{try{const e=localStorage.getItem(n);if(e===null){Me(n);return}return JSON.parse(e)}catch{return}},G=(n,e)=>{const s=JSON.stringify(e);localStorage.setItem(n,s)},E={ABOUT:"about",BLOG:"blog",CLEAR:"clear",CONTACT:"contact",GITHUB:"github",HELP:"help",PWD:"pwd"},Oe={[E.ABOUT]:()=>`khanne-sh is a terminal that has information about khanne(me). 
 You can use 'help' command to see available commands.`,[E.BLOG]:()=>(window.open("https://iwannaberealnerd.oopy.io/develog"),"Opening new tabs for khanne's blog..."),[E.CLEAR]:()=>"",[E.CONTACT]:()=>`- Email: iwannaberealnerd@gmail.com
- Phone Number: +821051200592
- LinkedIn: www.linkedin.com/in/honggwanjeong`,[E.HELP]:()=>`Here are commands that you can use: 
 1. about : to get information about this project. 
 2. github : open new tab for khanne's github 
 3. help : to see available commands 
 4. pwd : to see current url 
 5. clear : to clear history`,[E.GITHUB]:()=>(window.open("https://github.com/IwannabeRealnerD"),"Redirecting to khanne's github repositories..."),[E.PWD]:()=>window.location.href},X=n=>Object.values(E).includes(n)?"validInput":"invalidInput",te=n=>n.slice(-40),Ee=n=>n===""?[]:Object.values(E).filter(s=>s.startsWith(n)),Ne=n=>{const e=Oe[n];return e?e():`khanne-sh: command not found: ${n}`},Pe=n=>{const e=Ce(z);if(e===void 0){G(z,[n]);return}if(e.length>50){const s=te(e);s.push(n),G(z,s);return}e.push(n),G(z,e)},He=()=>{G(z,[])};function De(n){let e,s,t,a="khanne-sh :",c,l,r=n[0].command+"",i,d,u,f,o=n[0].result+"",m;return{c(){e=A("article"),s=A("div"),t=A("p"),t.textContent=a,c=H(),l=A("p"),i=Y(r),u=H(),f=A("p"),m=Y(o),this.h()},l(g){e=y(g,"ARTICLE",{class:!0});var h=L(e);s=y(h,"DIV",{class:!0});var p=L(s);t=y(p,"P",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-1snzfkc"&&(t.textContent=a),c=D(p),l=y(p,"P",{class:!0});var _=L(l);i=J(_,r),_.forEach(I),p.forEach(I),u=D(h),f=y(h,"P",{class:!0});var v=L(f);m=J(v,o),v.forEach(I),h.forEach(I),this.h()},h(){w(t,"class","userInputCommand svelte-1bub5vp"),w(l,"class",d=R(`previousInput ${X(n[0].command)}`)+" svelte-1bub5vp"),w(s,"class","commandContainer svelte-1bub5vp"),w(f,"class","commandOutput svelte-1bub5vp"),w(e,"class","commandWrapper svelte-1bub5vp")},m(g,h){W(g,e,h),b(e,s),b(s,t),b(s,c),b(s,l),b(l,i),b(e,u),b(e,f),b(f,m)},p(g,[h]){h&1&&r!==(r=g[0].command+"")&&F(i,r),h&1&&d!==(d=R(`previousInput ${X(g[0].command)}`)+" svelte-1bub5vp")&&w(l,"class",d),h&1&&o!==(o=g[0].result+"")&&F(m,o)},i:j,o:j,d(g){g&&I(e)}}}function je(n,e,s){let{command:t}=e;return n.$$set=a=>{"command"in a&&s(0,t=a.command)},[t]}class ze extends ${constructor(e){super(),K(this,e,je,De,Z,{command:0})}}function Re(n){let e,s='<p class="welcomeMessage svelte-294gdf">Welcome to khanne-sh</p> <p class="welcomeMessage svelte-294gdf">Ask what you want to know about him</p> <p class="welcomeMessage svelte-294gdf">If this is your first time with khanne-sh, start with <span class="validInput svelte-294gdf">help</span> command</p>';return{c(){e=A("article"),e.innerHTML=s,this.h()},l(t){e=y(t,"ARTICLE",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-xw4a2y"&&(e.innerHTML=s),this.h()},h(){w(e,"class","commandWrapper svelte-294gdf")},m(t,a){W(t,e,a)},p:j,i:j,o:j,d(t){t&&I(e)}}}class We extends ${constructor(e){super(),K(this,e,null,Re,Z,{})}}function Ie(n){var e,s,t="";if(typeof n=="string"||typeof n=="number")t+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(e=0;e<a;e++)n[e]&&(s=Ie(n[e]))&&(t&&(t+=" "),t+=s)}else for(s in n)n[s]&&(t&&(t+=" "),t+=s);return t}function ue(){for(var n,e,s=0,t="",a=arguments.length;s<a;s++)(n=arguments[s])&&(e=Ie(n))&&(t&&(t+=" "),t+=e);return t}const Be=(n,e)=>n.length-1<=e?0:e+1,Ue=(n,e)=>e-1<0?n.length-1:e-1;function fe(n,e,s){const t=n.slice();return t[10]=e[s],t[12]=s,t}function me(n,e){let s,t,a=e[10]+"",c,l,r,i,d;function u(){return e[5](e[12])}return{key:n,first:null,c(){s=A("li"),t=A("button"),c=Y(a),r=H(),this.h()},l(f){s=y(f,"LI",{});var o=L(s);t=y(o,"BUTTON",{class:!0});var m=L(t);c=J(m,a),m.forEach(I),r=D(o),o.forEach(I),this.h()},h(){w(t,"class",l=R(ue("suggestionContainer",{activeSuggestion:e[12]===e[3]}))+" svelte-152xd0r"),this.first=s},m(f,o){W(f,s,o),b(s,t),b(t,c),b(s,r),i||(d=ee(t,"click",u),i=!0)},p(f,o){e=f,o&2&&a!==(a=e[10]+"")&&F(c,a),o&10&&l!==(l=R(ue("suggestionContainer",{activeSuggestion:e[12]===e[3]}))+" svelte-152xd0r")&&w(t,"class",l)},d(f){f&&I(s),i=!1,d()}}}function qe(n){let e,s,t=[],a=new Map,c,l,r,i=Q(n[1]);const d=u=>u[10];for(let u=0;u<i.length;u+=1){let f=fe(n,i,u),o=d(f);a.set(o,t[u]=me(o,f))}return{c(){e=A("article"),s=A("ul");for(let u=0;u<t.length;u+=1)t[u].c();c=H(),l=A("p"),r=Y(n[0]),this.h()},l(u){e=y(u,"ARTICLE",{style:!0,class:!0});var f=L(e);s=y(f,"UL",{});var o=L(s);for(let g=0;g<t.length;g+=1)t[g].l(o);o.forEach(I),c=D(f),l=y(f,"P",{class:!0,"aria-hidden":!0});var m=L(l);r=J(m,n[0]),m.forEach(I),f.forEach(I),this.h()},h(){w(l,"class","forCurrentInputSize svelte-152xd0r"),w(l,"aria-hidden",""),re(e,"margin-left",n[4]+"px"),w(e,"class","wrapper svelte-152xd0r")},m(u,f){W(u,e,f),b(e,s);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(s,null);b(e,c),b(e,l),b(l,r),n[6](l)},p(u,[f]){f&10&&(i=Q(u[1]),t=Se(t,f,d,1,u,i,a,s,Le,me,null,fe)),f&1&&F(r,u[0]),f&16&&re(e,"margin-left",u[4]+"px")},i:j,o:j,d(u){u&&I(e);for(let f=0;f<t.length;f+=1)t[f].d();n[6](null)}}}function Ve(n,e,s){let t,a;const c=ke();let{currentInput:l}=e,{availableCommands:r}=e,i,d=0;const u=m=>{if(!(m.code==="Enter"&&t)){if(m.code==="ArrowDown"){m.preventDefault(),s(3,d=Be(r,d));return}if(m.code==="ArrowUp"){m.preventDefault(),s(3,d=Ue(r,d));return}if(m.code==="Enter"){m.preventDefault();const g=r[d];c("commandChange",{command:g});return}}};be(()=>{window.addEventListener("keydown",u)}),Ae(()=>{window.removeEventListener("keydown",u)});const f=m=>{s(3,d=m)};function o(m){we[m?"unshift":"push"](()=>{i=m,s(2,i)})}return n.$$set=m=>{"currentInput"in m&&s(0,l=m.currentInput),"availableCommands"in m&&s(1,r=m.availableCommands)},n.$$.update=()=>{n.$$.dirty&11&&(t=r[d]===l),n.$$.dirty&5&&l&&U().then(()=>{s(4,a=(i==null?void 0:i.offsetWidth)||0)})},s(4,a=0),[l,r,i,d,a,f,o]}class Ge extends ${constructor(e){super(),K(this,e,Ve,qe,Z,{currentInput:0,availableCommands:1})}}function he(n,e,s){const t=n.slice();return t[9]=e[s],t}function de(n){let e,s;return e=new We({}),{c(){se(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,a){ae(e,t,a),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){oe(e,t)}}}function pe(n){let e,s,t=Q(n[1]),a=[];for(let l=0;l<t.length;l+=1)a[l]=ge(he(n,t,l));const c=l=>S(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=ce()},l(l){for(let r=0;r<a.length;r+=1)a[r].l(l);e=ce()},m(l,r){for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(l,r);W(l,e,r),s=!0},p(l,r){if(r&2){t=Q(l[1]);let i;for(i=0;i<t.length;i+=1){const d=he(l,t,i);a[i]?(a[i].p(d,r),k(a[i],1)):(a[i]=ge(d),a[i].c(),k(a[i],1),a[i].m(e.parentNode,e))}for(V(),i=t.length;i<a.length;i+=1)c(i);q()}},i(l){if(!s){for(let r=0;r<t.length;r+=1)k(a[r]);s=!0}},o(l){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)S(a[r]);s=!1},d(l){l&&I(e),Te(a,l)}}}function ge(n){let e,s;return e=new ze({props:{command:n[9]}}),{c(){se(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,a){ae(e,t,a),s=!0},p(t,a){const c={};a&2&&(c.command=t[9]),e.$set(c)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){oe(e,t)}}}function _e(n){let e,s;return e=new Ge({props:{currentInput:n[0],availableCommands:n[4]}}),e.$on("commandChange",n[6]),{c(){se(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,a){ae(e,t,a),s=!0},p(t,a){const c={};a&1&&(c.currentInput=t[0]),a&16&&(c.availableCommands=t[4]),e.$set(c)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){oe(e,t)}}}function Ye(n){let e,s,t,a,c,l,r,i="khanne-sh :",d,u,f,o,m,g,h=(n[1]===void 0||n[1].length===0)&&de(),p=n[1]&&pe(n),_=n[4].length!==0&&!n[3]&&_e(n);return{c(){e=A("main"),s=A("div"),h&&h.c(),t=H(),p&&p.c(),a=H(),c=A("form"),_&&_.c(),l=H(),r=A("p"),r.textContent=i,d=H(),u=A("input"),this.h()},l(v){e=y(v,"MAIN",{class:!0});var T=L(e);s=y(T,"DIV",{});var N=L(s);h&&h.l(N),t=D(N),p&&p.l(N),a=D(N),c=y(N,"FORM",{autocomplete:!0,class:!0});var P=L(c);_&&_.l(P),l=D(P),r=y(P,"P",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-1snzfkc"&&(r.textContent=i),d=D(P),u=y(P,"INPUT",{class:!0,name:!0}),P.forEach(I),N.forEach(I),T.forEach(I),this.h()},h(){w(r,"class","userInputCommand svelte-zjqhnl"),w(u,"class",f=R(`inputTag ${X(n[0])}`)+" svelte-zjqhnl"),w(u,"name","command"),w(c,"autocomplete","off"),w(c,"class","formContainer svelte-zjqhnl"),w(e,"class","container svelte-zjqhnl")},m(v,T){W(v,e,T),b(e,s),h&&h.m(s,null),b(s,t),p&&p.m(s,null),b(s,a),b(s,c),_&&_.m(c,null),b(c,l),b(c,r),b(c,d),b(c,u),ie(u,n[0]),n[8](u),o=!0,m||(g=[ee(u,"input",n[7]),ee(c,"submit",ye(n[5]))],m=!0)},p(v,[T]){v[1]===void 0||v[1].length===0?h?T&2&&k(h,1):(h=de(),h.c(),k(h,1),h.m(s,t)):h&&(V(),S(h,1,1,()=>{h=null}),q()),v[1]?p?(p.p(v,T),T&2&&k(p,1)):(p=pe(v),p.c(),k(p,1),p.m(s,a)):p&&(V(),S(p,1,1,()=>{p=null}),q()),v[4].length!==0&&!v[3]?_?(_.p(v,T),T&24&&k(_,1)):(_=_e(v),_.c(),k(_,1),_.m(c,l)):_&&(V(),S(_,1,1,()=>{_=null}),q()),(!o||T&1&&f!==(f=R(`inputTag ${X(v[0])}`)+" svelte-zjqhnl"))&&w(u,"class",f),T&1&&u.value!==v[0]&&ie(u,v[0])},i(v){o||(k(h),k(p),k(_),o=!0)},o(v){S(h),S(p),S(_),o=!1},d(v){v&&I(e),h&&h.d(),p&&p.d(),_&&_.d(),n[8](null),m=!1,ve(g)}}}function Je(n,e,s){let t,a,c=[],l="",r;const i=async()=>{if(l=="clear"){s(1,c=[]),s(0,l=""),He();return}const o={command:l,result:Ne(l)};if(Pe(o),!c){s(1,c=[o]),s(0,l=""),await U(),scroll(0,document.body.scrollHeight);return}const m=te(c);s(1,c=[...m,o]),s(0,l=""),await U(),window.scrollTo(0,document.body.scrollHeight)},d=o=>{s(0,l=o.detail.command)};be(async()=>{let o=Ce(z);o&&o.length>50&&(o=te(o)),s(1,c=o),await U(),window.scrollTo(0,document.body.scrollHeight),r.focus()});function u(){l=this.value,s(0,l)}function f(o){we[o?"unshift":"push"](()=>{r=o,s(2,r)})}return n.$$.update=()=>{n.$$.dirty&1&&s(4,t=Ee(l)),n.$$.dirty&1&&s(3,a=Object.values(E).find(o=>o===l))},[l,c,r,a,t,i,d,u,f]}class Ze extends ${constructor(e){super(),K(this,e,Je,Ye,Z,{})}}export{Ze as component};