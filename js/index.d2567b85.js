import{r as i,o as u,c as h,u as v,a as g,b as a,d as l,p as y,e as b,f as k,g as w,V as x,h as I,i as E,B as L,T as P,P as O,I as C}from"./vendor.b3ccea3b.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};A();var d=(r,n)=>{const s=r.__vccOpts||r;for(const[t,e]of n)s[t]=e;return s};const B={};function S(r,n){const s=i("router-view");return u(),h(s)}var V=d(B,[["render",S]]);const $="modulepreload",_={},N="/tank/",p=function(n,s){return!s||s.length===0?n():Promise.all(s.map(t=>{if(t=`${N}${t}`,t in _)return;_[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":$,e||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),e)return new Promise((f,m)=>{c.addEventListener("load",f),c.addEventListener("error",m)})})).then(()=>n())};const R=r=>(y("data-v-7fad4427"),r=r(),b(),r),T={class:"home"},j={class:"header"},H=R(()=>a("div",{class:"right"},[a("span",null,"\u5C0F\u95EE\u7B54")],-1)),q={class:"content"},D={setup(r){return v(),(n,s)=>{const t=i("van-image"),e=i("router-view");return u(),g("div",T,[a("div",j,[l(t,{class:"backImg",fit:"contain",src:"/src/assets/imgs/back.png"}),H]),a("div",q,[l(e)])])}}};var F=d(D,[["__scopeId","data-v-7fad4427"]]);const W=[{path:"/",component:F,redirect:"index",children:[{path:"index",name:"evaluation",component:()=>p(()=>import("./index.9c917c36.js"),["js/index.9c917c36.js","css/index.d11d5b07.css","js/vendor.b3ccea3b.js","css/vendor.b360baa9.css"])}]},{path:"/scanCode",name:"scanCode",component:()=>p(()=>import("./index.cbc328be.js"),["js/index.cbc328be.js","css/index.7b29782e.css","js/vendor.b3ccea3b.js","css/vendor.b360baa9.css"])}],K=k({history:w(),routes:W});(function(){const r="http://103.113.6.179";window.location.protocol+"//"+window.location.host===r&&new x})();I.exports.FastClick.attach(document.body);const U=E(V);U.use(K).use(L).use(P).use(O).use(C).mount("#app");export{d as _};
