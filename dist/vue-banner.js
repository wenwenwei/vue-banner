!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueBanner",[],t):"object"==typeof exports?exports.VueBanner=t():e.VueBanner=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"VueBanner",props:{banners:{type:Object,default:function(){}}},data:function(){return{dots:this.banners.data.length,nowIndex:0,mode:this.banners.name||"move",style:"width:"+(this.banners.width||"800px")+";height:"+(this.banners.height||"400px")}},computed:{prevIndex:function(){return 0===this.nowIndex?this.banners.data.length-1:this.nowIndex-1},nextIndex:function(){return this.nowIndex===this.banners.data.length-1?0:this.nowIndex+1}},methods:{goto:function(e){this.nowIndex=e},_runInv:function(){var e=this;this.inv=setInterval(function(){e.goto(e.nextIndex)},this.banners.interval||3e3)},clearInv:function(){clearInterval(this.inv)}},mounted:function(){this._runInv()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i={install:function(e){e.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),t.default=i},function(e,t,n){"use strict";function r(e){n(3)}var i=n(0),a=n(9),s=n(8),o=r,d=s(i.a,a.a,!1,o,"data-v-7df63502",null);t.a=d.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("95bc9fe6",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".slider[data-v-7df63502]{position:relative;overflow:hidden;margin:0;padding:0}.slider .slider-wrapper[data-v-7df63502]{width:100%;height:100%;list-style:none;overflow:hidden;margin:0;padding:0}.slider .slider-wrapper .slider-item[data-v-7df63502]{position:absolute;width:100%;height:100%;overflow:hidden}.slider .slider-wrapper .slider-item img[data-v-7df63502]{width:100%;height:100%}.slider .slider-wrapper .slider-item.move-enter-active[data-v-7df63502]{transition:all .5s ease;transform:translateX(0)}.slider .slider-wrapper .slider-item.move-leave-active[data-v-7df63502]{transition:all .5s ease;transform:translateX(-100%)}.slider .slider-wrapper .slider-item.move-enter[data-v-7df63502]{transform:translateX(100%)}.slider .slider-wrapper .slider-item.move-leave[data-v-7df63502]{transform:translateX(0)}.slider .slider-wrapper .slider-item.fade-enter-active[data-v-7df63502],.slider .slider-wrapper .slider-item .fade-leave-active[data-v-7df63502]{transition:opacity 1s}.slider .slider-wrapper .slider-item.fade-enter[data-v-7df63502],.slider .slider-wrapper .slider-item .fade-leave-active[data-v-7df63502]{opacity:.5}.slider .dots[data-v-7df63502]{position:absolute;right:0;left:0;bottom:20px;text-align:center;font-size:0}.slider .dots .dot[data-v-7df63502]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.6)}.slider .dots .dot.active[data-v-7df63502]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.9)}",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(a(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(a(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(x){var a=p++;r=c||(c=i()),t=s.bind(null,r,a,!1),n=s.bind(null,r,a,!0)}else r=i(),t=o.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function o(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(g,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),u={},f=d&&(document.head||document.getElementsByTagName("head")[0]),c=null,p=0,v=!1,h=function(){},m=null,g="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){v=n,m=i||{};var a=l(e,t);return r(a),function(t){for(var n=[],i=0;i<a.length;i++){var s=a[i],o=u[s.id];o.refs--,n.push(o)}t?(a=l(e,t),r(a)):a=[];for(var i=0;i<n.length;i++){var o=n[i];if(0===o.refs){for(var d=0;d<o.parts.length;d++)o.parts[d]();delete u[o.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],s=a[0],o=a[1],d=a[2],l=a[3],u={id:e+":"+i,css:o,media:d,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,r,i,a){var s,o=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(s=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,c=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(e,t){return u.call(t),c(e,t)}):l.beforeCreate=c?[].concat(c,u):[u]}return{esModule:s,exports:o,options:l}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider",style:e.style,on:{mouseover:e.clearInv,mouseout:e._runInv}},[n("ul",{staticClass:"slider-wrapper"},[n("transition-group",{attrs:{name:e.mode}},e._l(e.banners.data,function(t,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:r===e.nowIndex,expression:"index === nowIndex"}],key:r+t.url,staticClass:"slider-item"},[n("a",{attrs:{href:t.url,target:e.banners.target}},[n("img",{attrs:{src:t.src,alt:"轮播图"}})])])}),0)],1),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,r){return n("span",{key:r,staticClass:"dot",class:{active:e.nowIndex===r},on:{click:function(t){return e.goto(r)}}})}),0)])},i=[],a={render:r,staticRenderFns:i};t.a=a}])});
//# sourceMappingURL=vue-banner.js.map