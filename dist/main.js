(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(370),t.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Nunito+Sans:ital,wght@0,400;0,700;1,300&display=swap);"]);var p=s()(d);l.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n\n    font-family: 'Nunito Sans', sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4 {\n    font-family: 'Dancing Script', cursive;\n}\n\n#content {\n    min-height: 100vh;\n    background-color: #f1ebfb;\n    background-image: url("+p+");\n}\n\n.navBar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100px;\n    background-color: rgba(219, 159, 233, 0.3);\n    display: flex;\n    justify-content: center;\n}\n\n.navBar ul {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n}\n\n.navBar ul li {\n    list-style: none;\n    font-size: 2rem;\n}\n\nmain {\n    padding-top: 100px;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    color: rgb(62, 6, 75);\n}\n\nmain .heading-div {\n    align-items: center;\n}\n\nh1 {\n    padding-top: 20px;\n    font-size: 4rem;\n    text-align: center;\n    letter-spacing: 2px;\n}\n\nmain .info-div {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(40%, 300px));\n    gap: 40px;\n    align-items: center;\n    justify-content: center;\n}\n\n.welcome-description {\n    padding: 10px;\n}\n\n.welcome-description h2 {\n    font-size: 3rem;\n    margin-bottom: 50px;\n}\n\n.chefs {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.chefs h3 {\n    font-family: 'Dancing Script', cursive;\n    font-size: 2rem;\n}\n\n.cards {\n    display: grid;\n    grid-template-columns: repeat(2, 40%);\n    gap: 20px;\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.card h4 {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.card img {\n    width: 200px;\n    border: 2px solid rgb(62, 6, 75);\n    border-radius: 20px;\n}\n\nform {\n    width: 600px;\n    border: 1px solid rgb(62, 6, 75);\n    border-radius: 20px;\n    padding: 20px;\n    margin-top: 50px;\n    background-color: rgb(219, 159, 233);\n    align-self: center;\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    margin-top: 15px;\n    border: none;\n}\n\nfieldset label {\n    font-size: 0.9rem;\n    font-weight: 500;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n}\n\nfieldset input {\n    height: 1.5rem;\n}\n\nfieldset input:focus-visible,\ntextarea:focus-visible {\n    border: 1px solid rgb(62, 6, 75);\n}\n\nform button {\n    width: 100px;\n    margin-top: 15px;\n    font-size: 1.25rem;\n    font-family: 'Nunito Sans', sans-serif;\n    font-weight: 700;\n    text-transform: uppercase;\n    background-color: rgb(62, 6, 75);\n    color: rgb(215, 193, 220);\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n}\n\nform button:hover {\n    background-color: rgba(62, 6, 75, 0.8);\n}\n\nform button:active {\n    transform: scale(110%);\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},370:e=>{e.exports="data:image/svg+xml,%3Csvg width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%27 fill=%27%23a61b81%27 fill-opacity=%270.2%27 fill-rule=%27evenodd%27/%3E%3C/svg%3E"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector("#content"),g=function(){const e=document.createElement("div");e.classList.add("navBar");const n=document.createElement("ul"),t=["Home","Menu","Contact"];for(let e=0;e<3;e++){const r=document.createElement("li");r.textContent=t[e],r.classList.add("navbar-li"),n.appendChild(r)}e.appendChild(n),h.appendChild(e);const r=document.createElement("main");h.appendChild(r)},v=t.p+"fc3fe5212ccf223007a7.png",x=t.p+"eb71b07b3148ae7260a0.png";g();const b=function(){const e=document.querySelector("main");e.replaceChildren();const n=document.createElement("div");n.classList.add("heading-div");const t=document.createElement("h1");t.textContent="Cat Biscuit House",n.appendChild(t),e.appendChild(n);const r=document.createElement("div");r.classList.add("info-div");const a=document.createElement("div");a.classList.add("welcome-description");const o=document.createElement("h2");o.textContent="Welcome";const i=document.createElement("p");i.innerHTML="Welcome to our Cat Biscuit House. Where biscuits are made with love and paws. Enjoy our specialities made by our very own paws, with a milk aside and a cat in your lap.Enjoy your milk and try not to purr! <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis mauris et justo dignissim laoreet. Donec tempor augue sit amet metus rhoncus porta eu in mauris. Nam a lectus in lacus tempor mollis sit amet ut sem. Maecenas neque sem, aliquam non lacus et, feugiat finibus risus. Suspendisse tempus ex in ligula pretium maximus. Fusce nunc eros, convallis vitae luctus vitae, scelerisque in nibh. Nullam volutpat condimentum rutrum. Sed rhoncus ante ac nunc ultrices aliquam. Vivamus ornare nibh a nibh vulputate volutpat. Cras eget dui ut turpis vulputate laoreet quis in metus. Quisque ut urna elementum, aliquet quam a, gravida erat. Cras auctor vitae neque vitae rhoncus. Nunc condimentum in tortor vel porta. ",a.appendChild(o),a.appendChild(i),r.appendChild(a);const c=document.createElement("div");c.classList.add("chefs");const s=document.createElement("h3");s.textContent="Our chefs:",c.appendChild(s);const d=document.createElement("div");d.classList.add("cards");const l=document.createElement("div");l.classList.add("card");const p=document.createElement("img");p.src=x,l.appendChild(p);const u=document.createElement("div"),m=document.createElement("h4");m.textContent="Entei";const f=document.createElement("p");f.textContent="Our oldest and most experienced chef. His specialty is everything.",u.appendChild(m),u.appendChild(f),l.appendChild(u),d.appendChild(l);const h=document.createElement("div");h.classList.add("card");const g=document.createElement("img");g.src=v,h.appendChild(g);const b=document.createElement("div"),C=document.createElement("h4");C.textContent="Micka";const y=document.createElement("p");y.textContent="Newest member of our team. Her specialty is purring.",b.appendChild(C),b.appendChild(y),h.appendChild(b),d.appendChild(h),c.appendChild(d),r.appendChild(c),e.appendChild(r)};g();g();function C(e){switch(e.target.textContent){case"Menu":!function(){const e=document.querySelector("main");e.replaceChildren();const n=document.createElement("h1");n.textContent="Menu",e.appendChild(n)}();break;case"Contact":!function(){const e=document.querySelector("main");e.replaceChildren();const n=document.createElement("h1");n.textContent="Contact Us",e.appendChild(n);const t=document.createElement("form"),r=document.createElement("fieldset"),a=document.createElement("label");a.textContent="Enter your name;";const o=document.createElement("input");o.setAttribute("type","text"),r.appendChild(a),r.appendChild(o),t.appendChild(r);const i=document.createElement("fieldset"),c=document.createElement("label");c.textContent="Enter your email:";const s=document.createElement("input");s.setAttribute("type","email"),i.appendChild(c),i.appendChild(s),t.appendChild(i);const d=document.createElement("fieldset"),l=document.createElement("label");l.textContent="Enter your message:";const p=document.createElement("textarea");p.setAttribute("rows","7"),d.appendChild(l),d.appendChild(p),t.appendChild(d);const u=document.createElement("button");u.textContent="Send",t.appendChild(u),e.appendChild(t)}();break;default:b()}}b(),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",C)}))})()})();