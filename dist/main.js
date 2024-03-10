(()=>{"use strict";var n={453:(n,e,t)=>{t.d(e,{A:()=>y});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),l=t.n(c),s=new URL(t(780),t.b),d=new URL(t(73),t.b),p=new URL(t(870),t.b),u=new URL(t(23),t.b),f=i()(r()),m=l()(s),g=l()(d),v=l()(p),h=l()(u);f.push([n.id,`/* kode-mono-regular - latin */\n@font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Kode Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${m}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  \n  /* kode-mono-500 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Kode Mono';\n    font-style: normal;\n    font-weight: 500;\n    src: url(${g}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  \n  /* kode-mono-600 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Kode Mono';\n    font-style: normal;\n    font-weight: 600;\n    src: url(${v}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  \n  /* kode-mono-700 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Kode Mono';\n    font-style: normal;\n    font-weight: 700;\n    src: url(${h}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  `,""]);const y=f},208:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"* {\n    font-family: 'Kode Mono';\n}\n\nbody {\n    margin: 0;\n    box-sizing: border-box;\n    --color-background: #222831;\n    --color-dark-gray: #393E46;\n    --color-blue: #00ADB5;\n    --color-gray: #EEEEEE;\n\n    background-color: var(--color-background);\n\n}\n\np {\n    color: var(--color-gray);\n}\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    border: none;\n    padding: 20px;\n}\n\n.bg_container {\n    background-color: rgba(0,0,0,0.7);\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal {\n    background-color: var(--color-gray);\n    border-radius: 16px;\n    height: 300px;\n    width: 400px;\n    box-shadow: 0px 10px 14px -6px rgba(0,0,0,0.67);\n}\n\n#input_description {\n    height: 100px;\n}\n\n.title_card, .description_card {\n    color: var(--color-background);\n}\n\n.title_card {\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.main_container {\n    min-height: 100vh;\n    display: flex;\n}\n\n.nav_bar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 200px;\n    height: 100vh;\n    padding: 0px 15px;\n    background-color: var(--color-dark-gray);\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    gap: 16px;\n}\n\n.nav_button {\n    border: none;\n    cursor: pointer;\n    font-size: 16px;\n    color: var(--color-gray);\n    background-color: var(--color-dark-gray);\n    border-radius: 8px;\n}\n\n.middle {\n    padding: 10px 20px;\n}\n\n.nav_content {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    align-items: center;\n    height: 100px;\n}\n\n.d_none {\n    display: none;\n}\n\n.active {\n    color: var(--color-background);\n    background-color: var(--color-blue); \n}\n\n.nav_button:hover {\n    color: var(--color-background);\n    background-color: var(--color-blue);\n}\n\n.large {\n    font-size: 36px;\n}\n\n.content_container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n.empty_toDo {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: center;\n    gap: 16px;\n}\n\n.toDo_container {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    align-content: baseline;\n    padding: 20px;\n    gap: 16px;\n    flex-wrap: wrap;\n}\n\n.toDo_card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    word-break: break-word;\n    max-width: 300px;\n    min-width: 180px;\n    border-radius: 16px;\n    padding: 20px;\n    background-color: var(--color-gray);\n    color: var(--color-background);\n}\n\n.toDo_card:hover {\n    border-left: 8px solid var(--color-blue);\n    transition: 0.2s;\n}",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=o.base?l[0]+o.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=o(n,r),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},73:(n,e,t)=>{n.exports=t.p+"0cf9e642a1060eb21652.woff2"},870:(n,e,t)=>{n.exports=t.p+"08337fd6064a106684b3.woff2"},23:(n,e,t)=>{n.exports=t.p+"93ec175042fd390ceffa.woff2"},780:(n,e,t)=>{n.exports=t.p+"7a273f05aa46720e1642.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),l=t.n(c),s=t(540),d=t.n(s),p=t(113),u=t.n(p),f=t(208),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;var g=t(453),v={};v.styleTagTransform=u(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),e()(g.A,v),g.A&&g.A.locals&&g.A.locals;let h=[];class y{constructor(n,e,t,o,r){this.project=n,this.title=e,this.description=t,this.dueDate=o,this.priotity=r}load(){return JSON.parse(localStorage.getItem("data"))}save(n){h.push(n),localStorage.setItem("data",JSON.stringify(h))}}function b(){document.querySelector(".nav_content").classList.toggle("d_none")}function x(){1===h.length&&b();let n=document.querySelector(".toDo_container");n.innerHTML="";for(let e=0;e<h.length;e++)n.innerHTML+=`\n        <div class="toDo_card">\n            <div class="top_toDo_card"></div>\n            <div class="card_content">\n                <p class="title_card">${h[e].title}</p>\n                <p class="description_card">${h[e].description}</p>\n            </div>\n        </div>\n    `}function w(){document.querySelector(".bg_container").classList.toggle("d_none")}function S(){document.getElementById("input_title").value="",document.getElementById("input_description").value=""}function _(){document.querySelectorAll(".add_item").forEach((n=>{n.addEventListener("click",(()=>{w()}))}))}_(),document.querySelector(".btn_submit").addEventListener("click",(()=>{const n=new y("",document.getElementById("input_title").value,document.getElementById("input_description").value,"","");n.save(n),w(),S(),x()})),document.querySelector(".btn_remove").addEventListener("click",(()=>{w(),S()})),_(),null===JSON.parse(localStorage.getItem("data"))?function(){let n=document.querySelector(".toDo_container");n.innerHTML="",n.innerHTML+='\n    <div class="empty_toDo">\n        <button class="nav_button large add_item">Add ToDo</button>\n        <button class="nav_button large" id="nav_button_addProject">Add Project</button>\n    </div>\n    ',_()}():(b(),x())})()})();