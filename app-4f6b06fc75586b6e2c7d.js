webpackJsonp([0xd2a57dc1d883],{71:function(e,n,t){"use strict";function o(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function a(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=a;var r=[{plugin:t(349),options:{plugins:[],trackingId:"UA-117035385-1",head:!1,anonymize:!0,respectDNT:!0}},{plugin:t(193),options:{plugins:[]}}]},186:function(e,n,t){"use strict";var o;n.components={"component---src-pages-404-js":t(338),"component---src-pages-cv-js":t(341),"component---src-pages-index-js":t(342),"component---src-pages-apps-score-sheet-js":t(340),"component---src-pages-apps-index-js":t(339)},n.json=(o={"layout-index.json":t(32),"404.json":t(343)},o["layout-index.json"]=t(32),o["cv.json"]=t(347),o["layout-index.json"]=t(32),o["index.json"]=t(348),o["layout-index.json"]=t(32),o["404-html.json"]=t(344),o["layout-index.json"]=t(32),o["apps-score-sheet.json"]=t(346),o["layout-index.json"]=t(32),o["apps.json"]=t(345),o),n.layouts={"layout---index":t(337)}},187:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(1),c=o(s),l=t(2),f=o(l),p=t(122),d=o(p),h=t(49),g=o(h),m=t(71),v=function(e){var n=e.children;return c.default.createElement("div",null,n())},y=function(e){function n(t){a(this,n);var o=r(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);y.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=y,e.exports=n.default},49:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(368),r=o(a),u=(0,r.default)();e.exports=u},188:function(e,n,t){"use strict";var o=t(70),a={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var r=decodeURIComponent(t),u=r.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),a[u])return a[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,a[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,a[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,a[u]=e,!0}return!1}),i}}},189:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(95),r=o(a),u=t(71),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,r.default)();e.exports=c},344:function(e,n,t){t(9),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(357)})})}},343:function(e,n,t){t(9),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(358)})})}},346:function(e,n,t){t(9),e.exports=function(e){return t.e(0xbbb240e600a5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(359)})})}},345:function(e,n,t){t(9),e.exports=function(e){return t.e(0xe08e6705b9ae,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(360)})})}},347:function(e,n,t){t(9),e.exports=function(e){return t.e(52306936332150,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(361)})})}},348:function(e,n,t){t(9),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(362)})})}},32:function(e,n,t){t(9),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(97)})})}},337:function(e,n,t){t(9),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(190)})})}},122:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var a=t(1),r=(o(a),t(188)),u=o(r),i=t(49),s=o(i),c=void 0,l={},f={},p={},d={},h={},g=[],m=[],v={},y=[],R={},P=function(e){return e&&e.default||e},x=void 0,_=!0,w=[],j={},b={},C=5;x=t(191)({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){k(e,function(){y=y.filter(function(n){return n!==e}),x.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var N=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},E=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},k=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])e.nextTick(function(){t(null,d[n])});else{var o=void 0;o="component---"===n.slice(0,12)?f.components[n]:"layout---"===n.slice(0,9)?f.layouts[n]:f.json[n],o(function(e,o){d[n]=o,w.push({resource:n,succeeded:!e}),b[n]||(b[n]=e),w=w.slice(-C),t(e,o)})}},O=function(n,t){h[n]?e.nextTick(function(){t(null,h[n])}):b[n]?e.nextTick(function(){t(b[n])}):k(n,function(e,o){if(e)t(e);else{var a=P(o());h[n]=a,t(e,a)}})},S=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=w.find(function(e){return e.succeeded});return!!n},L=function(e,n){console.log(n),j[e]||(j[e]=n),S()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},A=1,D={empty:function(){m=[],v={},R={},y=[],g=[]},addPagesArray:function(e){g=e;var n="";n="",c=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!g.some(function(n){return n.path===e}))return!1;var n=1/A;A+=1,v[e]?v[e]+=1:v[e]=1,D.has(e)||m.unshift(e),m.sort(E);var t=c(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,y.indexOf(t.jsonName)!==-1||d[t.jsonName]||y.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,y.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||y.unshift(t.componentChunkName)),y.sort(N),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:R}},getPages:function(){return{pathArray:m,pathCount:v}},getPage:function(e){return c(e)},has:function(e){return m.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var a;if(t){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),_=!1;if(j[n])return L(n,'Previously detected load failure for "'+n+'"'),t();var o=c(n);if(!o)return L(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,p[n])return e.nextTick(function(){t(p[n]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:p[n]})}),p[n];s.default.emit("onPreLoadPageResources",{path:n});var a=void 0,r=void 0,u=void 0,i=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){p[n]={component:a,json:r,layout:u,page:o};var e={component:a,json:r,layout:u,page:o};t(e),s.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return O(o.componentChunkName,function(e,n){e&&L(o.path,"Loading the component for "+o.path+" failed"),a=n,i()}),O(o.jsonName,function(e,n){e&&L(o.path,"Loading the JSON for "+o.path+" failed"),r=n,i()}),void(o.layoutComponentChunkName&&O(o.layout,function(e,n){e&&L(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:D.getResourcesForPathname};n.default=D}).call(n,t(63))},363:function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-cv-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cv.json",path:"/CV/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-apps-score-sheet-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"apps-score-sheet.json",path:"/apps/ScoreSheet/"},{componentChunkName:"component---src-pages-apps-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"apps.json",path:"/apps/"}]},191:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],a=[],r=function(){var e=n();e&&(a.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(71),u=t(1),i=o(u),s=t(154),c=o(s),l=t(70),f=t(353),p=t(310),d=o(p),h=t(189),g=o(h),m=t(49),v=o(m),y=t(363),R=o(y),P=t(364),x=o(P),_=t(187),w=o(_),j=t(186),b=o(j),C=t(122),N=o(C);t(300),window.___emitter=v.default,N.default.addPagesArray(R.default),N.default.addProdRequires(b.default),window.asyncRequires=b.default,window.___loader=N.default,window.matchPath=l.matchPath;var E=x.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),k=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};k(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){k(e.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(192);var o=function(e){function n(t){t.page.path===N.default.getPage(e).path&&(v.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=E[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){v.default.off("onPostLoadPageResources",n),v.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);N.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):v.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:g.default},n)},h=(0,l.withRouter)(w.default);N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(s?s:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(h,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return N.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,a({page:!0},o)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},364:function(e,n){e.exports=[]},192:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(49),r=o(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},193:function(e,n){"use strict"},310:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,e=function(){for(t.removeEventListener(a,e),r=1;e=n.shift();)e()}),function(e){r?setTimeout(e,0):n.push(e)}})},9:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(e){u&&(u(t,e),u=null)};return!r&&n&&n[o]?void c(!0):(a(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,r?r[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},349:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;if("function"==typeof ga){if(n&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(e){return e.test(n.pathname)}))return;window.ga("set","page",n?n.pathname+n.search+n.hash:void 0),window.ga("send","pageview")}}},368:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},338:function(e,n,t){t(9),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(217)})})}},341:function(e,n,t){t(9),e.exports=function(e){return t.e(0x9af6c131b579,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(218)})})}},340:function(e,n,t){t(9),e.exports=function(e){return t.e(59079277985701,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(219)})})}},339:function(e,n,t){t(9),e.exports=function(e){return t.e(0xa3e190edad7c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(220)})})}},342:function(e,n,t){t(9),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(221)})})}}});
//# sourceMappingURL=app-4f6b06fc75586b6e2c7d.js.map