import{u as h,a as w,o as p,b as v,c as f,d as n,e as C,n as _,p as y,f as k,r as A,g,F as B,h as M,i as T,j as O}from"./vendor.32f03f60.js";const P=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const e of i.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&o(e)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}};P();const V="modulepreload",E={},D="",u=function(c,a){return!a||a.length===0?c():Promise.all(a.map(o=>{if(o=`${D}${o}`,o in E)return;E[o]=!0;const t=o.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const e=document.createElement("link");if(e.rel=t?"stylesheet":V,t||(e.as="script",e.crossOrigin=""),e.href=o,document.head.appendChild(e),t)return new Promise((r,s)=>{e.addEventListener("load",r),e.addEventListener("error",s)})})).then(()=>c())};var R="assets/ndm-logo.fc5082de.png";var L=(l,c)=>{const a=l.__vccOpts||l;for(const[o,t]of c)a[o]=t;return a};const m=l=>(y("data-v-5ff403f9"),l=l(),k(),l),j={id:"nav-container"},x=["src"],N=m(()=>n("span",null,"NDM",-1)),S=m(()=>n("i",{id:"open-menu-icon",class:"fa fa-bars"},null,-1)),H=[S],F={class:"links"},q={class:"dropdown"},G=m(()=>n("span",null,"About Us",-1)),z=m(()=>n("i",{style:{"font-size":"0.6rem","padding-left":"5px"},class:"fa fa-chevron-down"},null,-1)),U=[G,z],W={class:"dropdown-content"},K={emits:["toggleMenu"],setup(l,{emit:c}){const a=h(),o=w();function t(r){a.push(r)}function i(){c("toggleMenu")}function e(r){if(r.length){for(let s of r)if(o.path==s)return!0;return!1}}return p(()=>{}),(r,s)=>(v(),f("div",j,[n("div",{class:"logo",onClick:s[0]||(s[0]=d=>t("home"))},[n("img",{id:"ndm-logo-navbar",src:C(R),style:{height:"25px","margin-right":"5px",filter:"brightness(100)"}},null,8,x),N]),n("button",{class:"menu-btn",onClick:s[1]||(s[1]=d=>i()),style:{color:"white"}},H),n("div",F,[n("button",{class:_({target:e(["/home","/"])}),onClick:s[2]||(s[2]=d=>t("home"))},"Home",2),n("div",q,[n("button",{class:_({target:e(["/about"])}),onClick:s[3]||(s[3]=d=>t("about"))},U,2),n("div",W,[n("a",{onClick:s[4]||(s[4]=d=>t("leadership"))},"Leadership"),n("a",{onClick:s[5]||(s[5]=d=>t("beliefs"))},"Beliefs"),n("a",{onClick:s[6]||(s[6]=d=>t("directions"))},"Directions")])]),n("button",{class:_({target:e(["/visitors"])}),onClick:s[7]||(s[7]=d=>t("visitors"))},"Visitors",2),n("button",{class:_({target:e(["/giving"])}),onClick:s[8]||(s[8]=d=>t("giving"))},"Giving",2),n("button",{class:_({target:e(["/events"])}),onClick:s[9]||(s[9]=d=>t("events"))},"Events",2)])]))}};var J=L(K,[["__scopeId","data-v-5ff403f9"]]);const b=l=>(y("data-v-b31f42fa"),l=l(),k(),l),Q={id:"nav-overlay-mobile",style:{width:"0vw"}},X=b(()=>n("i",{class:"fa fa-times"},null,-1)),Y=[X],Z=b(()=>n("div",{class:"ml-link-footer"},"\xA9 2024 New Destiny Ministries",-1)),tt=b(()=>n("div",{class:"ml-link-footer",style:{color:"#9f9f9f"}}," #ndmstrong ",-1)),et={emits:["toggleMenu"],setup(l,{emit:c}){const a=h();function o(i){a.push(i),t()}function t(){c("toggleMenu")}return p(()=>{}),(i,e)=>(v(),f("div",Q,[n("button",{class:"close-mm-btn",onClick:e[0]||(e[0]=r=>t())},Y),n("button",{class:"ml-link",onClick:e[1]||(e[1]=r=>o("home"))}," Home "),n("button",{class:"ml-link",onClick:e[2]||(e[2]=r=>o("about"))}," About Us "),n("button",{class:"ml-link",onClick:e[3]||(e[3]=r=>o("visitors"))}," Visitors "),n("button",{class:"ml-link",onClick:e[4]||(e[4]=r=>o("giving"))}," Giving "),n("button",{class:"ml-link",onClick:e[5]||(e[5]=r=>o("events"))}," Events "),Z,tt]))}};var ot=L(et,[["__scopeId","data-v-b31f42fa"]]);const nt={id:"router-content"},st={setup(l){async function c(o){const t=document.getElementById("nav-container"),i=document.getElementById("open-menu-icon"),e=document.querySelector(".menu-btn"),r=document.querySelector(".logo"),s=document.getElementById("ndm-logo-navbar");t&&i&&e&&r&&(o.target.scrollTop>75?(t.style.backgroundColor="white",t.style.height="60px",t.classList.contains("dark")||(t.classList.add("dark"),r.style.color="black",e.style.color="black",s.style.filter="brightness(1)")):(t.style.backgroundColor="transparent",t.style.height="75px",t.classList.contains("dark")&&(t.classList.remove("dark"),r.style.color="white",e.style.color="white",s.style.filter="brightness(100)")))}function a(){const o=document.getElementById("nav-overlay-mobile");o&&(o.style.width=="0vw"?o.style.width="100vw":o.style.width="0vw")}return p(()=>{const o=document.getElementById("app");o&&o.addEventListener("scroll",c)}),(o,t)=>{const i=A("router-view");return v(),f(B,null,[g(ot,{onToggleMenu:a}),g(J,{onToggleMenu:a}),n("div",nt,[g(i)])],64)}}},it=()=>u(()=>import("./About.aa0d041f.js"),["assets/About.aa0d041f.js","assets/About.109a100c.css","assets/vendor.32f03f60.js","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/church.0b6333b7.js"]),rt=()=>u(()=>import("./Beliefs.c0b6ecd6.js"),["assets/Beliefs.c0b6ecd6.js","assets/Beliefs.c6de58de.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),lt=()=>u(()=>import("./Directions.b4a3aadf.js"),["assets/Directions.b4a3aadf.js","assets/Directions.1ac9e820.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),at=()=>u(()=>import("./Events.0f764f49.js"),["assets/Events.0f764f49.js","assets/Events.b597377e.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),ct=()=>u(()=>import("./Framework.62990787.js"),["assets/Framework.62990787.js","assets/Framework.44373116.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),ut=()=>u(()=>import("./Giving.52b56143.js"),["assets/Giving.52b56143.js","assets/Giving.07ff6d8a.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),$=()=>u(()=>import("./Home.ea9b2bc4.js"),["assets/Home.ea9b2bc4.js","assets/Home.78c5ff34.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/church.0b6333b7.js"]),dt=()=>u(()=>import("./Info.c1201d5c.js"),["assets/Info.c1201d5c.js","assets/Info.0843fefb.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),_t=()=>u(()=>import("./Leadership.7ad34b22.js"),["assets/Leadership.7ad34b22.js","assets/Leadership.db872210.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),mt=()=>u(()=>import("./Livestream.77a81f35.js"),["assets/Livestream.77a81f35.js","assets/Livestream.2acc6df2.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js"]),pt=()=>u(()=>import("./Visitors.416c999a.js"),["assets/Visitors.416c999a.js","assets/Visitors.62a65d85.css","assets/Footer.fd438cad.js","assets/Footer.7b3a18db.css","assets/vendor.32f03f60.js","assets/background_color.58acfebd.js"]),vt=[{path:"/",component:$},{path:"/home",component:$},{path:"/about",component:it},{path:"/beliefs",component:rt},{path:"/directions",component:lt},{path:"/events",component:at},{path:"/framework",component:ct},{path:"/giving",component:ut},{path:"/info",component:dt},{path:"/leadership",component:_t},{path:"/livestream",component:mt},{path:"/visitors",component:pt}],ft=M({history:T(),routes:vt,scrollBehavior(l,c,a){document.getElementById("app").scrollTop=0}}),I=O(st);I.use(ft);I.mount("#app");export{L as _};