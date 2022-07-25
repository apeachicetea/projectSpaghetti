!function(){var n={426:function(n,e,t){"use strict";var r=t(81),o=t.n(r),s=t(645),i=t.n(s),a=t(667),c=t.n(a),u=new URL(t(637),t.b),d=i()(o()),p=c()(u);d.push([n.id,"body {\n  width: 100%;\n  padding:0;margin:0;\n}\n.wrap {\n  display: flex;\n  height: 100%;\n  min-height:100vh;\n  flex-direction: column;\n  justify-content: center;\n  background-image: url("+p+");\n  background-size: cover;\n  background-position: center;\n}\n.keys {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.break {\n  width: 100%;\n  height: 0;\n}\n.key {\n  position: relative;\n  width: 15%;\n  padding-bottom: 15%;\n  margin-bottom: 1%;\n  margin-left: 1%;\n  background-color: rgb(0 0 0 / 40%);\n  text-align: center;\n  cursor: pointer;\n  border: 5px solid rgb(0 0 0 / 50%);\n  border-radius: 0.5rem;\n  box-sizing: content-box;\n  transition: all 100ms;\n}\n.playing {\n  transform: scale(1.1);\n  background-color: rgb(0 0 0 / 60%);\n}\n.label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\nkbd {\n  font-family: 'notosans';\n  font-weight: 700;\n  display: block;\n  pointer-events: none;\n  font-size: 3rem;\n  color: #fff;\n}\n\n.sound {\n  display: block;\n  pointer-events: none;\n  font-size: 1rem;\n  padding-top: 0.5rem;\n  color: #fff;\n}\n\n.key:hover {\n  background-color: rgb(0 0 0 / 60%);\n}\n.key:hover kbd {\n  font-size: 3.2rem;\n}\n.key:hover .sound {\n  font-size: 1.2rem;\n}\n",""]),e.Z=d},645:function(n){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:function(n){"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:function(n){"use strict";n.exports=function(n){return n[1]}},654:function(n,e,t){"use strict";t.r(e);var r=t(379),o=t.n(r),s=t(795),i=t.n(s),a=t(569),c=t.n(a),u=t(565),d=t.n(u),p=t(216),l=t.n(p),f=t(589),v=t.n(f),y=t(426),m={};m.styleTagTransform=v(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),o()(y.Z,m),e.default=y.Z&&y.Z.locals?y.Z.locals:void 0},379:function(n){"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var s={},i=[],a=0;a<n.length;a++){var c=n[a],u=r.base?c[0]+r.base:c[0],d=s[u]||0,p="".concat(u," ").concat(d);s[u]=d+1;var l=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var v=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var s=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<s.length;i++){var a=t(s[i]);e[a].references--}for(var c=r(n,o),u=0;u<s.length;u++){var d=t(s[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:function(n){"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},637:function(n,e,t){"use strict";n.exports=t.p+"images/background.jpeg"},296:function(n,e,t){"use strict";n.exports=t.p+"sounds/Perc.wav"},151:function(n,e,t){"use strict";n.exports=t.p+"sounds/clap.wav"},606:function(n,e,t){"use strict";n.exports=t.p+"sounds/crash.wav"},237:function(n,e,t){"use strict";n.exports=t.p+"sounds/hihat.wav"},708:function(n,e,t){"use strict";n.exports=t.p+"sounds/kick.wav"},578:function(n,e,t){"use strict";n.exports=t.p+"sounds/openhat.wav"},79:function(n,e,t){"use strict";n.exports=t.p+"sounds/ride.wav"},461:function(n,e,t){"use strict";n.exports=t.p+"sounds/shaker.wav"},650:function(n,e,t){"use strict";n.exports=t.p+"sounds/snare.wav"},0:function(n,e,t){"use strict";n.exports=t.p+"sounds/tom.wav"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return n[r](s,s.exports,t),s.exports}t.m=n,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n}(),t.b=document.baseURI||self.location.href,t.nc=void 0,t(654),t(151),t(606),t(237),t(708),t(578),t(296),t(79),t(461),t(650),t(0),function(){"use strict";const n=function(n){return document.querySelector(n)},e=Array.from((".key",document.querySelectorAll(".key")));const t=[{key:81,sound:"clap.wav"},{key:87,sound:"crash.wav"},{key:69,sound:"hihat.wav"},{key:65,sound:"kick.wav"},{key:83,sound:"openhat.wav"},{key:68,sound:"ride.wav"},{key:90,sound:"shaker.wav"},{key:88,sound:"snare.wav"},{key:67,sound:"tom.wav"}],r=n=>{"transform"===n.propertyName&&n.target.classList.remove("playing")},o=n=>{const e=n.target.getAttribute("data-key");s(e)},s=e=>{const t=n(`audio[data-key="${e}"]`),r=n(`div[data-key="${e}"]`);r&&t&&(r.classList.add("playing"),t.currentTime=0,t.play())};window.addEventListener("keydown",(n=>{const e=n.keyCode;s(e)})),e.forEach(((n,e)=>{const s=(n=>{const e=document.createElement("audio");return e.dataset.key=t[n].key,e.src="./sounds"+t[n].sound,e})(e);n.appendChild(s),n.addEventListener("transitionend",r),n.addEventListener("mousedown",o),n.dataset.key=t[e].key}))}()}();