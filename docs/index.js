!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1)},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],d=n[l]||0,s="".concat(l," ").concat(d);n[l]=d+1;var f=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:s,updater:g(p,t),references:1}),o.push(s)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,_=0;function g(e,t){var n,o,r;if(t.singleton){var i=_++;n=m||(m=d(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=d(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=l(e,t),d=0;d<n.length;d++){var s=c(n[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,'.header,.controls,.slider,.section__footer,.menu{display:flex;flex-flow:row wrap;justify-content:space-between}.visually-hidden{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}.w-100{width:100%;height:auto}.nav{position:absolute;top:0;left:0;width:100%;height:0;overflow:hidden}@media screen and (min-width: 768px){.nav{height:auto;width:auto;position:static}}.header{position:sticky;top:0;left:0;padding:0 10px;background:rgba(236,236,236,0.4);z-index:999}@media screen and (min-width: 768px){.header{align-items:center}}.item{padding:1rem 7.5px;font-size:.81rem}.item__name{font-size:.81rem}.item__price{font-weight:bold}.item__name,.item__price,.item__tags{margin:0.5rem 0}.grid-item{width:100%;height:auto;position:relative;margin:10px 0}.grid-item__info{position:absolute;top:2rem;left:2rem}.grid-item__name{font-size:1.5rem;font-weight:600}.grid-item__link{color:#151515;font-size:.81rem;font-weight:600}.grid-item__link--line{border-bottom:2px solid #000}.grid-item__link:hover{color:#151515;text-decoration:none}.footer{font-size:.81rem;margin:1.25rem 0}.footer__section{padding:0 5px}.footer__img{max-width:20rem}.footer__p{font-weight:bold}.footer__select{border:none}.footer__link{font-size:0.75rem;font-weight:bold;color:#151515}.footer__link:hover{color:#151515}.footer__label{color:#858585}.footer__row{display:flex;flex-flow:row wrap;margin:2.2rem 0;width:100%}.footer__row--links,.footer__row--form{justify-content:space-between}.footer__row--form{padding:0 0 2.2rem 0;margin-bottom:1.3rem;border-bottom:1px solid #ececec}@media screen and (min-width: 768px){.footer{display:flex;flex-flow:column nowrap}.footer__section{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.footer__row{flex:0 0 33%}.footer__row--form{flex:0 0 20%;padding:0;border:none}.footer__link{padding:0.5rem}}.form__group{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:center;border-bottom:2px solid #000}.form__input{outline:none;border:none;padding:0.5rem 0}.form__p{text-align:left;padding:1rem 0;margin:0}.button{background:transparent;border:none;padding:0}.button__icon{padding:0 10px}.button--start{display:none}.button--form{font-weight:600}@media screen and (min-width: 768px){.button--menu{display:none}}.socials{padding:2.2rem 0 0 0;border-top:1px solid #ececec;display:flex;flex-flow:row wrap}.socials__link{display:block;margin:0 20px 0 5px}.socials__link:hover{text-decoration:none}@media screen and (min-width: 768px){.socials{flex:0 0 20%;border:none;padding:0}}.overlay{width:100%;min-height:63vh;overflow:hidden;background-image:url("http://placekitten.com/1920/523");background-size:cover;background-position:center}.slider__content{padding:50px 0;background:#263a49;display:flex;flex-flow:row nowrap;overflow:hidden;width:100%;justify-content:center}.slider-item{padding:0 15px;position:relative}.slider-item__info{background:#f8f8f8;padding:1rem}.slider-item__price{font-weight:bold}.slider-item__name,.slider-item__price{font-size:.81rem;margin:0}.section{font-size:.81rem;max-width:1300px}.section__title{font-size:1.5rem;text-align:center}.section__title--new{margin:3.75rem 0}.section__title--newsletter{margin:2.4rem 0}.section__link{display:block;color:#151515;padding:18px 30px;border:2px solid #000}.section__link:hover{color:#151515}.section__footer{justify-content:center;margin:20px 0 50px 0}.section--new{padding:0 22.5px}.section--start{margin-top:-3.5rem;width:100%;min-height:63vh;max-width:none}.section--newsletter{text-align:center;max-width:41rem}.menu{list-style-type:none;padding:0;margin:0}.menu__item{padding:0.5rem}.menu__link{color:#000}.menu__link:hover{color:#000}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}}]);