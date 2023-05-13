(()=>{"use strict";var e={3912:(e,t,n)=>{var o=n(8880),r=n(9592),a=n(3673);function i(e,t,n,o,r,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var s=n(4260);const c=(0,s.Z)(l,[["render",i]]),p=c;var d=n(556),h=n(3340),m=n(2471),u=n(8339);const b=[{path:"/register",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",name:"Register",component:()=>Promise.all([n.e(736),n.e(368)]).then(n.bind(n,6368))}]},{path:"/login",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",name:"Login",component:()=>Promise.all([n.e(736),n.e(596)]).then(n.bind(n,5596))}]},{path:"/",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(701)]).then(n.bind(n,1701))}]},{path:"/members",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(318)]).then(n.bind(n,3318))}]},{path:"/members/:id",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(408)]).then(n.bind(n,1408))}]},{path:"/posts",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(548)]).then(n.bind(n,2548))}]},{path:"/posts/register",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(698)]).then(n.bind(n,4698))}]},{path:"/posts/edit/:id",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(439)]).then(n.bind(n,2439))}]},{path:"/posts/:id",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(587)]).then(n.bind(n,5587))}]},{path:"/media-groups",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(56)]).then(n.bind(n,5056))}]},{path:"/media-groups/register",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(200)]).then(n.bind(n,200))}]},{path:"/media-groups/:id",component:()=>Promise.all([n.e(736),n.e(784)]).then(n.bind(n,2784)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(448)]).then(n.bind(n,7448))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(293)]).then(n.bind(n,7293))}],f=b,v=(0,h.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t.beforeEach(((e,t,n)=>{!e.name||"Login"!==e.name&&"Register"!==e.name?m.Z.has("access_token")?(e.name&&"Register"===e.name&&n({path:"/#"}),n()):n({name:"Login"}):m.Z.has("access_token")?n({path:"/#"}):n()})),t}));async function g(e,t){const o="function"===typeof d.Z?await(0,d.Z)({}):d.Z,{storeKey:a}=await Promise.resolve().then(n.bind(n,556)),i="function"===typeof v?await v({store:o}):v;o.$router=i;const l=e(p);return l.use(r.Z,t),{app:l,store:o,storeKey:a,router:i}}var P=n(4434);const y={config:{},plugins:{Notify:P.Z}},w="";async function k({app:e,router:t,store:n,storeKey:o},r){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},l=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let p=0;!1===a&&p<r.length;p++)try{await r[p]({app:e,router:t,store:n,ssrContext:null,redirect:l,urlPath:s,publicPath:w})}catch(c){return c&&c.url?void l(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(n,o),e.mount("#q-app"))}g(o.ri,y).then((e=>Promise.all([Promise.resolve().then(n.bind(n,6451)),Promise.resolve().then(n.bind(n,1768))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,n)}))))},1768:(e,t,n)=>{n.r(t),n.d(t,{api:()=>i,default:()=>l});var o=n(3340),r=n(52),a=n.n(r);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},6451:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s,i18n:()=>l});var o=n(3340),r=n(5175);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,r.o)({locale:"en-US",messages:i}),s=(0,o.xr)((({app:e})=>{e.use(l)}))},556:(e,t,n)=>{n.d(t,{Z:()=>i,storeKey:()=>a});var o=n(3340),r=n(741);const a=Symbol("vuex-key"),i=(0,o.h)((function(){const e=(0,r.MT)({modules:{},strict:!1});return e}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(p=0;p<e.length;p++){for(var[o,r,a]=e[p],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[o,r,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{56:"87c861ba",200:"6112a108",293:"5aa5cb11",318:"a24995a1",368:"304c9d7c",408:"efd41303",439:"5ebe492b",448:"cd5217a0",548:"017b4bce",587:"ef889aae",596:"55bb7692",698:"33c98a22",701:"5d2169fb",784:"dc2da53c"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"231d8b5a"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="learnwithme-app:";n.l=(o,r,a,i)=>{if(e[o])e[o].push(r);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var d=c[p];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var h=(t,n)=>{l.onerror=l.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(n))),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));o.push(r[2]=a);var i=n.p+n.u(t),l=new Error,s=o=>{if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var p=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(p)},o=globalThis["webpackChunklearnwithme_app"]=globalThis["webpackChunklearnwithme_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[736],(()=>n(3912)));o=n.O(o)})();