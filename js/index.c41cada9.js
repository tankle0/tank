import{r as i,o as u,c as m,u as h,a as v,b as a,d as l,e as g,p as E,f as y,g as C,h as w,V as B,i as I,j as x,B as P,T as R,P as D,I as Q}from"./vendor.d896b4dc.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};S();var d=(r,n)=>{const s=r.__vccOpts||r;for(const[t,e]of n)s[t]=e;return s};const b={};function O(r,n){const s=i("router-view");return u(),m(s)}var k=d(b,[["render",O]]);const L="modulepreload",A={},N="/tank/",p=function(n,s){return!s||s.length===0?n():Promise.all(s.map(t=>{if(t=`${N}${t}`,t in A)return;A[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":L,e||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),e)return new Promise((_,f)=>{c.addEventListener("load",_),c.addEventListener("error",f)})})).then(()=>n())};var V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZ5JREFUaEPt17FKxEAQgOGZheQKG7GzECwshEAgG3wAbQXBytLWV7DzNXyEA8EXEDuJSHbTWChWgmBnaXOQlYW7Ru6K7O7MXOCuvs3+326KCcLIfzjyftgApG9Q9AaKotiZTCaXSqmntm1fQg5DDFDX9S4APALAIQD85nm+1zTNz1CECOBfvG8eD2BJ/Mw5d2GtvR96+v7/rDeQOp4VQBHPBqCKZwFQxpMDqONJARzxZACueBIAZ3xyAHd8UoBEfDKAVHwSgGR8NEA6PgqwDvExAKW1fkbEo/kIHDUSh4zRizVB47TW+gARPxYPcc5dWWtvY0JC1wYByrLcyrLsCwC25xu/A8CxMeY7NCR0XRDAb1ZV1ZlS6g4AMklEMMBHa63PEXEqiYgCrAMiGiCNSAKQRCQDSCGSAiQQyQHcCBIAJ4IMwIUgBXAgyAErEG8AcJJidmIBUCLYAFQIVgAFgh2wAvHqh1tjzGzod4EIYBmi7/v9rus+RwPwoXVdnyLijXPuwRhzPTQ+5qM+ZC+SNWKvUCrNBpDqJEOfM/ob+APasB9Ahz+b/gAAAABJRU5ErkJggg==";const X=r=>(E("data-v-46ff8318"),r=r(),y(),r),G={class:"home"},H={class:"header"},z=X(()=>a("div",{class:"right"},[a("span",null,"\u5C0F\u95EE\u7B54")],-1)),K={class:"content"},J={setup(r){return h(),(n,s)=>{const t=i("van-image"),e=i("router-view");return u(),v("div",G,[a("div",H,[l(t,{class:"backImg",fit:"contain",src:g(V)},null,8,["src"]),z]),a("div",K,[l(e)])])}}};var M=d(J,[["__scopeId","data-v-46ff8318"]]);const W=[{path:"/",component:M,redirect:"index",children:[{path:"index",name:"evaluation",component:()=>p(()=>import("./index.10830890.js"),["js/index.10830890.js","css/index.d11d5b07.css","js/vendor.d896b4dc.js","css/vendor.b360baa9.css"])}]},{path:"/scanCode",name:"scanCode",component:()=>p(()=>import("./index.29b9f139.js"),["js/index.29b9f139.js","css/index.7b29782e.css","js/vendor.d896b4dc.js","css/vendor.b360baa9.css"])}],q=C({history:w(),routes:W});(function(){const r="http://103.113.6.179";window.location.protocol+"//"+window.location.host===r&&new B})();I.exports.FastClick.attach(document.body);const U=x(k);U.use(q).use(P).use(R).use(D).use(Q).mount("#app");export{d as _};
