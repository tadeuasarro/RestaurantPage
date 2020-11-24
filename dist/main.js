(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(645),i=n.n(a),r=n(667),d=n.n(r),c=n(603),s=n(128),o=n(691),l=n(842),u=n(466),p=i()((function(e){return e[1]})),m=d()(c),h=d()(s),g=d()(o),f=d()(l),v=d()(u);p.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.header-image {\n  background-image: url("+m+");\n  background-size: cover;\n  padding-top: 25%;\n}\n\n.image1-display {\n  background-image: url("+h+");\n  background-size: cover;\n  padding-top: 50%;\n}\n\n.image2-display {\n  background-image: url("+g+");\n  background-size: cover;\n  padding-top: 50%;\n}\n\n.image3-display {\n  background-image: url("+f+");\n  background-size: cover;\n  padding-top: 50%;\n}\n\n.image4-display {\n  background-image: url("+v+");\n  background-size: cover;\n  padding-top: 50%;\n}\n\n#contact:hover,\n#menu:hover {\n  cursor: pointer;\n}\n",""]);const b=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{var a,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function d(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},a=[],i=0;i<e.length;i++){var c=e[i],s=t.base?c[0]+t.base:c[0],o=n[s]||0,l="".concat(s," ").concat(o);n[s]=o+1;var u=d(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:l,updater:g(p,t),references:1}),a.push(l)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var d=i(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var o,l=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function u(e,t,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(r,d[t]):e.appendChild(r)}}function p(e,t,n){var a=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,h=0;function g(e,t){var n,a,i;if(t.singleton){var r=h++;n=m||(m=s(t)),a=u.bind(null,n,r,!1),i=u.bind(null,n,r,!0)}else n=s(t),a=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var i=d(n[a]);r[i].references--}for(var s=c(e,t),o=0;o<n.length;o++){var l=d(n[o]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=s}}}},603:(e,t,n)=>{e.exports=n.p+"eb7e3715bc99df446343.png"},128:(e,t,n)=>{e.exports=n.p+"2bee4dfb674e29baa800.jpeg"},691:(e,t,n)=>{e.exports=n.p+"97556865fa05a57e5435.jpg"},842:(e,t,n)=>{e.exports=n.p+"f5b167368b761665a556.jpg"},466:(e,t,n)=>{e.exports=n.p+"bc99cff9d2eb6892c065.jpg"}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),a=n(28);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i=(()=>{const e=document.createElement("nav");e.classList.add("bg-dark","py-2");const t=document.createElement("h1");return t.innerHTML="Coxinha's Heaven",t.classList.add("h3","text-light","ml-3"),e.appendChild(t),e})(),r=(()=>{const e=document.createElement("div"),t=document.createElement("div");t.classList.add("header-image");const n=document.createElement("div");n.classList.add("text-center","p-3","h4","mb-0");const a=document.createElement("p");a.innerHTML="Welcome to Coxinha's Heaven!";const i=document.createElement("p");return i.innerHTML="Our business is totally dedicated to this Brazilian cousine delicacy.",i.classList.add("mb-0"),n.appendChild(a),n.appendChild(i),e.appendChild(t),e.appendChild(n),e})(),d=(()=>{const e=document.createElement("div");e.classList.add("row","mb-3");const t=document.createElement("div");t.classList.add("col-6","d-flex","justify-content-center","align-items-center");const n=document.createElement("p");n.classList.add("h4","text-center"),n.innerHTML="May it be traditional, veggie, spicy or anything you like. We offer over 40 different filling options.",t.appendChild(n);const a=document.createElement("div");a.classList.add("col-6");const i=document.createElement("div");return i.classList.add("image1-display"),a.appendChild(i),e.appendChild(t),e.appendChild(a),e})(),c=(()=>{const e=document.createElement("div");e.classList.add("row","mb-3");const t=document.createElement("div");t.classList.add("col-6","d-flex","justify-content-center","align-items-center");const n=document.createElement("p");n.classList.add("h4","text-center"),n.innerHTML="Crispy and crunchy, our coxinhas are made filled with love, according to an old family recipe.",t.appendChild(n);const a=document.createElement("div");a.classList.add("col-6");const i=document.createElement("div");return i.classList.add("image2-display"),a.appendChild(i),e.appendChild(a),e.appendChild(t),e})(),s=(()=>{const e=document.createElement("div");e.classList.add("row","mb-3");const t=document.createElement("div");t.classList.add("col-6","d-flex","justify-content-center","align-items-center");const n=document.createElement("p");n.classList.add("h4","text-center"),n.innerHTML="For small social events, birthday parties, as a delicious snack to binge-watch your favorite series. We'll deliver it to you!",t.appendChild(n);const a=document.createElement("div");a.classList.add("col-6");const i=document.createElement("div");return i.classList.add("image3-display"),a.appendChild(i),e.appendChild(t),e.appendChild(a),e})(),o=(()=>{const e=document.createElement("div");e.classList.add("row","mb-3");const t=document.createElement("div");t.classList.add("col-6","d-flex","justify-content-center","align-items-center");const n=document.createElement("p");n.classList.add("h4","text-center"),n.innerHTML="Wait no more. ASK RIGHT NOW!",t.appendChild(n);const a=document.createElement("div");a.classList.add("col-6");const i=document.createElement("div");return i.classList.add("image4-display"),a.appendChild(i),e.appendChild(a),e.appendChild(t),e})(),l=(()=>{const e=document.createElement("div");return e.appendChild(d),e.appendChild(c),e.appendChild(s),e.appendChild(o),e})(),u=(()=>{const e=document.createElement("div");e.classList.add("mb-3");const t=document.createElement("div");t.classList.add("d-flex","border-bottom");const n=document.createElement("span");n.classList.add("p-3","bg-light","text-dark","border"),n.innerHTML="Contact",n.id="contact";const a=document.createElement("span");a.classList.add("p-3","bg-dark","text-light"),a.innerHTML="Menu",a.id="menu",t.appendChild(n),t.appendChild(a);const i=document.createElement("div"),r=document.createElement("h3");r.innerHTML="Menu",r.classList.add("bg-dark","text-light","m-0","px-3","pt-3");const d=document.createElement("p");return d.classList.add("mb-0","p-3","bg-dark","text-light","text-justify"),d.innerHTML="Nullam nisl risus, accumsan at justo et, dapibus tristique sem. Phasellus pulvinar congue erat at suscipit. Sed a dolor posuere, egestas eros sed, imperdiet mauris. Curabitur finibus vel sem efficitur mollis. Nam vitae ante justo. Sed sollicitudin auctor diam, iaculis ullamcorper augue consectetur quis. Mauris libero augue, suscipit quis lacus non, feugiat gravida ipsum. Curabitur vitae dignissim nunc, et vehicula sem. Proin iaculis fringilla orci eu scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sit amet lorem pharetra, vehicula nibh bibendum, vulputate sapien. Cras faucibus libero at lectus mollis pellentesque.",i.appendChild(r),i.appendChild(d),e.appendChild(t),e.appendChild(i),n.addEventListener("click",(()=>{const e=document.getElementById("small_container");e.innerHTML="",e.appendChild(p)})),e})(),p=(()=>{const e=document.createElement("div");e.classList.add("mb-3");const t=document.createElement("div");t.classList.add("d-flex","border-bottom");const n=document.createElement("span");n.classList.add("p-3","bg-dark","text-light"),n.innerHTML="Contact",n.id="contact";const a=document.createElement("span");a.classList.add("p-3","bg-light","text-dark","border"),a.innerHTML="Menu",a.id="menu",t.appendChild(n),t.appendChild(a);const i=document.createElement("div"),r=document.createElement("h3");r.innerHTML="Contact",r.classList.add("bg-dark","text-light","m-0","px-3","pt-3");const d=document.createElement("p");return d.classList.add("mb-0","p-3","bg-dark","text-light","text-justify"),d.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia massa ligula, egestas rutrum augue vehicula sed. Morbi luctus eros at mattis blandit. Donec imperdiet suscipit quam. Pellentesque feugiat pharetra blandit. Aenean vitae pharetra arcu. In non ipsum elementum nisi fermentum vulputate non nec eros. Praesent sagittis ante a blandit semper. Morbi sit amet ex consectetur, euismod dui dapibus, eleifend nunc.",i.appendChild(r),i.appendChild(d),e.appendChild(t),e.appendChild(i),a.addEventListener("click",(()=>{const e=document.getElementById("small_container");e.innerHTML="",e.appendChild(u)})),e})(),m=(()=>{const e=document.createElement("main");e.classList.add("container"),e.appendChild(r),e.appendChild(l);const t=document.createElement("div");return t.appendChild(p),t.id="small_container",e.appendChild(t),e})(),h=(()=>{const e=document.createElement("footer");e.classList.add("text-center","text-light","bg-dark","p-3");const t=document.createElement("small");return t.innerHTML="All rights reserved 2020",e.innerHTML="Coxinha's Heaven - ",e.appendChild(t),e})();document.body.appendChild((()=>{const e=document.getElementById("content");return e.appendChild(i),e.appendChild(m),e.appendChild(h),e})())})()})();