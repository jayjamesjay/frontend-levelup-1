!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],d=t.base?i[0]+t.base:i[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var m=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==m?(a[m].references++,a[m].updater(f)):a.push({identifier:s,updater:_(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,m=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function _(e,t){var n,r,o;if(t.singleton){var i=g++;n=p||(p=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=u.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=d(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".header__content,.controls,.menu,.form__group,.section__footer{display:flex;flex-flow:row wrap;justify-content:space-between}.item__img,.grid-item__img{width:100%;height:auto}.visually-hidden{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}.nav{position:absolute;top:3.6rem;left:0;width:100%;height:0;overflow:hidden;background:rgba(236,236,236,0.4)}@media screen and (min-width: 768px){.nav{height:auto;width:auto;position:static;background:transparent}}.header{font-size:1rem;font-weight:600;position:sticky;top:0;left:0;z-index:999;background:rgba(255,255,255,0.4)}.header__content{padding:0 10px}@media screen and (min-width: 768px){.header__content{align-items:center;max-width:1330px;margin-left:auto;margin-right:auto}}.controls{align-items:center}@media screen and (min-width: 768px){.controls--alt{margin-right:11rem}}.menu{list-style-type:none;padding:0;margin:0}.menu__item{padding:0.2rem 0;margin:0.2rem 0.5rem}.menu__item--active{border-bottom:2px solid #000}.menu__link{color:#000}.menu__link:hover{color:#000}.slider{display:flex;flex-flow:row nowrap;justify-content:space-around;padding:50px 0;background:#263a49}.slider__content{display:flex;flex-flow:row nowrap;overflow:hidden;max-width:1330px;justify-content:flex-start}.slider-item{margin:0 15px;position:relative}.slider-item__info{color:#f8f8f8;position:absolute;bottom:20px;left:20px}.slider-item__price{font-weight:bold}.slider-item__name,.slider-item__price{font-size:.81rem;margin:0}.item{display:flex;flex-flow:column nowrap;padding:1rem 0.5rem;font-size:.81rem}.item__name,.item__price,.item__tags{margin:0.2rem 0}.item__name{order:3;font-size:.81rem}.item__img{order:1}.item__price{order:4;font-weight:bold}.item__discount{color:#858585;text-decoration:line-through}.item__tags{margin-top:0.5rem;order:2;text-transform:uppercase;font-weight:bold}.grid-item{width:100%;height:auto;position:relative;margin:10px 0}.grid-item__img--wide{min-height:15.3rem;object-fit:cover}.grid-item__info{position:absolute;top:2rem;left:2rem}.grid-item__name{font-size:1.5rem;font-weight:600}.grid-item__link{color:#151515;font-size:.81rem;font-weight:600}.grid-item__link--line{border-bottom:2px solid #000}.grid-item__link:hover{color:#151515;text-decoration:none}@media screen and (min-width: 768px){.grid-item{padding:5px;margin:0}.grid-item--main{grid-area:1 / 1 / 3 / 2}.grid-item--square{grid-area:1 / 2 / 2 / 3}.grid-item--square-2{grid-area:1 / 3 / 2 / 4}.grid-item--wide{grid-area:2 / 2 / 3 / 4}.grid-item__img--wide{min-height:auto}}.form{font-size:.81rem}.form__group{align-items:center;border-bottom:2px solid #000}.form__input{outline:none;border:none;padding:0.5rem 0}.form__p{text-align:left;padding:1rem 0;margin:0}.button{background:transparent;border:none;padding:0}.button__icon{padding:10px}.button__icon--slider{padding:20px;margin:10px 25px 10px 10px;border:2px solid #fff}.button__icon--slider-right{transform:rotate(180deg);margin:10px 10px 10px 25px}.button__icon--top{padding:12px;transform:rotate(-90deg)}.button--slider{display:none}@media screen and (min-width: 1200px){.button--slider{display:block}}.button--load{color:#151515;padding:18px 30px;border:2px solid #000}.button--form{font-weight:600}.button--circle{width:1.3rem;height:1.3rem;font-size:.81rem;color:#f8f8f8;background:#000;border-radius:0.6rem}.button--top{transition:transform 0.2s ease-in-out;transform:scale(0);position:fixed;top:50vh;right:1vw}@media screen and (min-width: 768px){.button--menu{display:none}.button--top{transform:scale(1);border-radius:24px;box-shadow:0px 5px 30px 0 rgba(0,0,0,0.1);background-color:#fff}.button--top-hidden{transform:scale(0)}}.socials{padding:2.2rem 0 0 0;border-top:1px solid #ececec;display:flex;flex-flow:row wrap}.socials__link{display:block;margin:0 20px 0 5px}.socials__link:hover{text-decoration:none}@media screen and (min-width: 768px){.socials{flex:0 0 20%;border:none;padding:0}}.section{font-size:.81rem;max-width:1330px;margin-top:50px}.section__title{font-size:1.5rem;text-align:center}.section__title--new{margin:3.75rem 0}.section__title--newsletter{margin:2.4rem 0}.section__overlay{width:100%;min-height:63vh;object-fit:cover}.section__footer{justify-content:center;margin:20px 0 0 0}.section--new{padding:0 22.5px}.section--start{margin-top:-3.6rem;width:100%;max-width:100%}.section--newsletter{text-align:center;max-width:41rem}@media screen and (min-width: 768px){.section{font-size:1rem;margin-top:100px}.section--start{margin-top:-3.6rem}.section--campaigns{display:grid;grid-template-rows:1fr 1fr;grid-template-columns:1.44fr 1fr 1fr}.section__title{font-size:1.9rem}}.footer{font-size:.81rem;margin:1.25rem auto}.footer__section{padding:0 5px}.footer__img{width:100%;max-width:20rem}.footer__p{font-weight:bold}.footer__select{border:none}.footer__link{font-size:0.75rem;font-weight:bold;color:#151515}.footer__link:hover{color:#151515}.footer__label{color:#858585}.footer__row{display:flex;flex-flow:row wrap;margin:2.2rem 0;width:100%}.footer__row--links,.footer__row--form{justify-content:space-between}.footer__row--form{padding:0 0 2.2rem 0;margin-bottom:1.3rem;border-bottom:1px solid #ececec}@media screen and (min-width: 768px){.footer{display:flex;flex-flow:column nowrap;max-width:1330px}.footer__section{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.footer__row{flex:0 0 33%}.footer__row--form{flex:0 0 20%;padding:0;border:none}.footer__link{padding:0.5rem}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(){return window.scroll({top:0,left:0,behavior:"smooth"})},a=function(e){var t=(new Date).getFullYear();e.textContent=t},c=function(e,t){for(var n=0,o=Object.entries(t);n<o.length;n++){var i=r(o[n],2),a=i[0],c=i[1];e.setAttribute(a,c)}},d=function(){var e=document.createElement("article");e.setAttribute("class","item col-6");var t=document.createElement("img");c(t,{class:"item__img",src:"http://placekitten.com/309/390",alt:""});var n=document.createElement("h3");n.setAttribute("class","item__name"),n.textContent="Backpack with contrasting buckle";var r=document.createElement("p");r.setAttribute("class","item__price"),r.textContent="$158.00";var o=document.createElement("p");o.setAttribute("class","item__tags");var i=document.createElement("img");return c(i,{src:"./assets/-e-kz-few.svg",alt:""}),o.append(i,"Only a few left"),e.append(t,n,r,o),e};window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("scroll-top"),t=document.getElementById("date"),n=document.getElementById("all-products"),r=document.getElementById("products-btn");a(t),e.addEventListener("click",i),r.addEventListener("click",(function(){return function(e){for(var t=document.createDocumentFragment(),n=0;n<4;n++)t.append(d());e.append(t)}(n)})),window.addEventListener("scroll",(function(){requestAnimationFrame((function(){return function(e){var t=window,n=t.scrollY,r=t.innerHeight,o=e.classList;n>=.5*r?o.remove("button--top-hidden"):o.add("button--top-hidden")}(e)}))}))}))}]);