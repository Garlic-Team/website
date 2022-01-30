var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,c=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&i(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&i(e,s,t[s]);return e},o=(e,a)=>t(e,s(a));try{self["workbox:core:6.4.1"]&&_()}catch(fe){}const h=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class l extends Error{constructor(e,t){super(h(e,t)),this.name=e,this.details=t}}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},d=e=>[u.prefix,e,u.suffix].filter((e=>e&&e.length>0)).join("-"),p=e=>{(e=>{for(const t of Object.keys(u))e(t)})((t=>{"string"==typeof e[t]&&(u[t]=e[t])}))},f=e=>e||d(u.precache),w=e=>e||d(u.runtime);function g(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(fe){}function m(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),n=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:n.href}}class y{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class v{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let b;async function R(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new l("cross-origin-copy-response",{origin:s});const a=e.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(n):n,i=function(){if(void 0===b){const t=new Response("");if("body"in t)try{new Response(t.body),b=!0}catch(e){b=!1}b=!1}return b}()?a.body:await a.blob();return new Response(i,r)}function x(e,t){const s=new URL(e);for(const a of t)s.searchParams.delete(a);return s.href}class C{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const L=new Set;try{self["workbox:strategies:6.1.5"]&&_()}catch(fe){}function E(e){return"string"==typeof e?new Request(e):e}class k{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new C,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=E(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(r){throw new l("plugin-error-request-will-fetch",{thrownError:r})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:n.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=E(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=c(c({},n),{cacheName:a});s=await caches.match(r,i);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=E(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const n=await this.getCacheKey(s,"write");if(!t)throw new l("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:c,matchOptions:o}=this._strategy,h=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),d=u?await async function(e,t,s,a){const n=x(t.url,s);if(t.url===n)return e.match(t,a);const r=Object.assign(Object.assign({},a),{ignoreSearch:!0}),i=await e.keys(t,r);for(const c of i)if(n===x(c.url,s))return e.match(c,a)}(h,n.clone(),["__WB_REVISION__"],o):null;try{await h.put(n,u?i.clone():i)}catch(p){throw"QuotaExceededError"===p.name&&await async function(){for(const e of L)await e()}(),p}for(const l of this.iterateCallbacks("cacheDidUpdate"))await l({cacheName:c,oldResponse:d,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=E(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=o(c({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class q{constructor(e={}){this.cacheName=w(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new k(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new l("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(c){r=c}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class U extends q{constructor(e={}){e.cacheName=f(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(U.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!(await t.cachePut(e,s.clone())))throw new l("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==U.copyRedirectedCacheableResponsesPlugin&&(a===U.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(U.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}U.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},U.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await R(e):e};class T{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new U({cacheName:f(e),plugins:[...t,new v({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=m(s),n="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,n),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return g(e,(async()=>{const t=new y;this.strategy.plugins.push(t);for(const[n,r]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(n),a=new Request(n,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return g(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=c({cacheKey:t},s.params),this.strategy.handle(s))}}let D;const N=()=>(D||(D=new T),D);try{self["workbox:routing:6.1.5"]&&_()}catch(fe){}const P=e=>e&&"object"==typeof e?e:{handle:e};class I{constructor(e,t,s="GET"){this.handler=P(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=P(e)}}class O extends I{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class S{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(l){o=Promise.reject(l)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(r){a=r}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,P(e))}setCatchHandler(e){this._catchHandler=P(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new l("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let M;const K=()=>(M||(M=new S,M.addFetchListener(),M.addCacheListener()),M);function A(e,t,s){let a;if("string"==typeof e){const n=new URL(e,location.href);a=new I((({url:e})=>e.href===n.href),t,s)}else if(e instanceof RegExp)a=new O(e,t,s);else if("function"==typeof e)a=new I(e,t,s);else{if(!(e instanceof I))throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return K().registerRoute(a),a}class j extends I{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function W(e){e.then((()=>{}))}const B={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let H,F;const Q=new WeakMap,$=new WeakMap,G=new WeakMap,V=new WeakMap,J=new WeakMap;let z={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return $.get(e);if("objectStoreNames"===t)return e.objectStoreNames||G.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return Z(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function X(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(F||(F=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ee(this),t),Z(Q.get(this))}:function(...t){return Z(e.apply(ee(this),t))}:function(t,...s){const a=e.call(ee(this),t,...s);return G.set(a,t.sort?t.sort():[t]),Z(a)}}function Y(e){return"function"==typeof e?X(e):(e instanceof IDBTransaction&&function(e){if($.has(e))return;const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",r),e.removeEventListener("abort",r)},n=()=>{t(),a()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",r),e.addEventListener("abort",r)}));$.set(e,t)}(e),t=e,(H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,z):e);var t}function Z(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",r)},n=()=>{t(Z(e.result)),a()},r=()=>{s(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Q.set(t,e)})).catch((()=>{})),J.set(t,e),t}(e);if(V.has(e))return V.get(e);const t=Y(e);return t!==e&&(V.set(e,t),J.set(t,e)),t}const ee=e=>J.get(e);const te=["get","getKey","getAll","getAllKeys","count"],se=["put","add","delete","clear"],ae=new Map;function ne(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ae.get(t))return ae.get(t);const s=t.replace(/FromIndex$/,""),a=t!==s,n=se.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!te.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,n?"readwrite":"readonly");let i=r.store;return a&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),n&&r.done]))[0]};return ae.set(t,r),r}z=(e=>o(c({},e),{get:(t,s,a)=>ne(t,s)||e.get(t,s,a),has:(t,s)=>!!ne(t,s)||e.has(t,s)}))(z);try{self["workbox:expiration:6.4.1"]&&_()}catch(fe){}const re=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class ie{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),Z(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=re(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction("cache-entries","readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get("cache-entries",this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let a=await s.transaction("cache-entries").store.index("timestamp").openCursor(null,"prev");const n=[];let r=0;for(;a;){const s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?n.push(a.value):r++),a=await a.continue()}const i=[];for(const c of n)await s.delete("cache-entries",c.id),i.push(c.url);return i}_getId(e){return this._cacheName+"|"+re(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:a,blocking:n,terminated:r}={}){const i=indexedDB.open(e,t),c=Z(i);return a&&i.addEventListener("upgradeneeded",(e=>{a(Z(i.result),e.oldVersion,e.newVersion,Z(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),c.then((e=>{r&&e.addEventListener("close",(()=>r())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class ce{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new ie(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const a of t)await s.delete(a,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,W(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class oe{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;const n=this._isResponseDateFresh(a),r=this._getCacheExpiration(s);W(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(c){}return n?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){L.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===w())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new ce(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}try{self["workbox:cacheable-response:6.4.1"]&&_()}catch(fe){}class he{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}var le,ue;p({prefix:"djs",suffix:"v3",precache:"precache",runtime:"runtime"}),caches.delete("djs-precache-v1"),caches.delete("djs-cdn-v1"),caches.delete("djs-external-v1"),caches.delete("djs-docs-v1"),function(e){N().precache(e)}([{"revision":"c72a1fd72d619c11d495ee69009cd661","url":"assets/[...all].342767a9.js"},{"revision":"3daa89a40a51671c07008ebd0c51828c","url":"assets/[class].32241939.css"},{"revision":"bc12469fe9c0a12a8dc1ea0ece5dae11","url":"assets/[class].471a27e6.js"},{"revision":"17d0d21ab2ad9ea885de919bd62a4255","url":"assets/[file].4138f2ea.js"},{"revision":"1b727429926042a855dbe26af21b37dd","url":"assets/[typedef].3d7d6a79.js"},{"revision":"64d8339264f339e095c0a3ff4d8df49b","url":"assets/chevron-down.b0b63a75.js"},{"revision":"5a60719a74da847f4bc089e6ef9c0ca4","url":"assets/disclosure.esm.544f38fa.js"},{"revision":"ae18be84077a8474c08b0c3f43d66aca","url":"assets/docs.675be814.css"},{"revision":"2f4068ee55979f1e9471256de23f833b","url":"assets/docs.6b7dc1e2.js"},{"revision":"35cb98cee649ea8fac98baf1b41c2afd","url":"assets/index.2696a65d.js"},{"revision":"eb1a01d73bbf005099b48e88a3f7ae24","url":"assets/index.3ebc9ce4.css"},{"revision":"f23ae9ac5ff8eb0e16d0a4c96cf6398b","url":"assets/index.9514ae92.js"},{"revision":"85318940f0219997c7e2b0fb96a835ee","url":"assets/search.055dc457.css"},{"revision":"3a28416e4402773789dcb89a15fd56f0","url":"assets/search.df640e1b.js"},{"revision":"43521ec5c448d0cf3d04cf45d245a1c0","url":"assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css"},{"revision":"47f1929fa0b9f584797fba6ed923dd75","url":"assets/See.vue_vue&type=script&setup=true&lang.b8e07cfd.js"},{"revision":"3e7820ec1e6ffef539ff959ef42d5dfa","url":"assets/SourceButton.vue_vue&type=script&setup=true&lang.2064190a.js"},{"revision":"66dfd976ea87b11cc94da21c097f6aac","url":"assets/Spinner.14b966c8.js"},{"revision":"54f81455561049f59a226ec21e2968c7","url":"assets/Spinner.af24072b.css"},{"revision":"8a9c3468fd40dec75cda3f74c81feb0f","url":"assets/vendor.cce94b5d.js"},{"revision":"d8704fb4e83cd1f8480a30569aa40855","url":"index.html"},{"revision":"399792787f22d2d23920f097016e0587","url":"service-worker.js"},{"revision":"d7c366f4e999211486f91011f2e8c829","url":"manifest.webmanifest"}]),function(e){const t=N();A(new j(t,e))}(le),self.addEventListener("activate",(e=>{const t=f();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e));return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(t).then((e=>{})))})),A(new class extends I{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const a of this._denylist)if(a.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}((ue="index.html",N().createHandlerBoundToURL(ue))));const de=new class extends q{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));let a,n=await t.cacheMatch(e);if(n);else try{n=await s}catch(r){a=r}if(!n)throw new l("no-response",{url:e.url,error:a});return n}}({cacheName:"djs-external-v3",plugins:[new oe({maxEntries:50,maxAgeSeconds:86400,purgeOnQuotaError:!0}),new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new he(e)}}({statuses:[0,200]})]});var pe;pe=e=>"GET"===e.request.method?de.handle(e):fetch(e.request),K().setDefaultHandler(pe),A(/^https:\/\/raw\.githubusercontent\.com\/discordjs\/.*\.json/i,new class extends q{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],a=[];let n;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});n=r,a.push(i)}const r=this._getNetworkPromise({timeoutId:n,request:e,logs:s,handler:t});a.push(r);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await r)());if(!i)throw new l("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(i){n=i}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}({cacheName:"djs-docs-v3",plugins:[new oe({maxEntries:20,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),A(/^.*\\.(png|jpg|jpeg|gif|svg|ico)/i,new class extends q{async _handle(e,t){let s,a=await t.cacheMatch(e);if(!a)try{a=await t.fetchAndCachePut(e)}catch(n){s=n}if(!a)throw new l("no-response",{url:e.url,error:s});return a}}({cacheName:"djs-media-v3",plugins:[new oe({maxEntries:50,maxAgeSeconds:86400,purgeOnQuotaError:!0})]})),self.addEventListener("install",(()=>{self.skipWaiting()})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}));
