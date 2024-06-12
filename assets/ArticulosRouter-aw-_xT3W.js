import{r as Pt,g as zc,R as af,c as pn,u as lf,j as ot,a as cf,b as uf,d as Nl}from"./index-IJj1X9pG.js";var hf={VITE_FIREBASE_API_KEY:"AIzaSyD1SKumwaNQB8RaZUftyyz1l4duS8nPQPU",VITE_FIREBASE_PROJECT_ID:"react-cursos-187dc",VITE_FIREBASE_AUTH_DOMAIN:"react-cursos-187dc.firebaseapp.com",VITE_FIREBASE_STORAGE_BUCKET:"react-cursos-187dc.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"791208906607",VITE_FIREBASE_APP_ID:"1:791208906607:web:e642a487ddf1b4b4f1a29a",BASE_URL:"/React-UribiaOnlineFrontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ol=n=>{let t;const e=new Set,r=(y,v)=>{const A=typeof y=="function"?y(t):y;if(!Object.is(A,t)){const k=t;t=v??(typeof A!="object"||A===null)?A:Object.assign({},t,A),e.forEach(O=>O(t,k))}},i=()=>t,p={setState:r,getState:i,getInitialState:()=>g,subscribe:y=>(e.add(y),()=>e.delete(y)),destroy:()=>{(hf?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),e.clear()}},g=t=n(r,i,p);return p},df=n=>n?Ol(n):Ol;var Hc={exports:{}},Gc={},Kc={exports:{}},Wc={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Pt;function ff(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var pf=typeof Object.is=="function"?Object.is:ff,mf=xr.useState,gf=xr.useEffect,_f=xr.useLayoutEffect,yf=xr.useDebugValue;function wf(n,t){var e=t(),r=mf({inst:{value:e,getSnapshot:t}}),i=r[0].inst,o=r[1];return _f(function(){i.value=e,i.getSnapshot=t,Bo(i)&&o({inst:i})},[n,e,t]),gf(function(){return Bo(i)&&o({inst:i}),n(function(){Bo(i)&&o({inst:i})})},[n]),yf(e),e}function Bo(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!pf(n,e)}catch{return!0}}function vf(n,t){return t()}var Ef=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vf:wf;Wc.useSyncExternalStore=xr.useSyncExternalStore!==void 0?xr.useSyncExternalStore:Ef;Kc.exports=Wc;var bf=Kc.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=Pt,Tf=bf;function Af(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var If=typeof Object.is=="function"?Object.is:Af,Rf=Tf.useSyncExternalStore,Sf=Qs.useRef,Pf=Qs.useEffect,Cf=Qs.useMemo,kf=Qs.useDebugValue;Gc.useSyncExternalStoreWithSelector=function(n,t,e,r,i){var o=Sf(null);if(o.current===null){var l={hasValue:!1,value:null};o.current=l}else l=o.current;o=Cf(function(){function p(k){if(!g){if(g=!0,y=k,k=r(k),i!==void 0&&l.hasValue){var O=l.value;if(i(O,k))return v=O}return v=k}if(O=v,If(y,k))return O;var L=r(k);return i!==void 0&&i(O,L)?O:(y=k,v=L)}var g=!1,y,v,A=e===void 0?null:e;return[function(){return p(t())},A===null?void 0:function(){return p(A())}]},[t,e,r,i]);var h=Rf(n,o[0],o[1]);return Pf(function(){l.hasValue=!0,l.value=h},[h]),kf(h),h};Hc.exports=Gc;var xf=Hc.exports;const Df=zc(xf);var Qc={VITE_FIREBASE_API_KEY:"AIzaSyD1SKumwaNQB8RaZUftyyz1l4duS8nPQPU",VITE_FIREBASE_PROJECT_ID:"react-cursos-187dc",VITE_FIREBASE_AUTH_DOMAIN:"react-cursos-187dc.firebaseapp.com",VITE_FIREBASE_STORAGE_BUCKET:"react-cursos-187dc.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"791208906607",VITE_FIREBASE_APP_ID:"1:791208906607:web:e642a487ddf1b4b4f1a29a",BASE_URL:"/React-UribiaOnlineFrontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:Vf}=af,{useSyncExternalStoreWithSelector:Nf}=Df;let Ml=!1;const Of=n=>n;function Mf(n,t=Of,e){(Qc?"production":void 0)!=="production"&&e&&!Ml&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ml=!0);const r=Nf(n.subscribe,n.getState,n.getServerState||n.getInitialState,t,e);return Vf(r),r}const Ll=n=>{(Qc?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof n=="function"?df(n):n,e=(r,i)=>Mf(t,r,i);return Object.assign(e,t),e},Lf=n=>n?Ll(n):Ll;var Fl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ff=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],p=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,p=i+2<n.length,g=p?n[i+2]:0,y=o>>2,v=(o&3)<<4|h>>4;let A=(h&15)<<2|g>>6,k=g&63;p||(k=64,l||(A=64)),r.push(e[y],e[v],e[A],e[k])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Xc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ff(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const g=i<n.length?e[n.charAt(i)]:64;++i;const v=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||g==null||v==null)throw new Bf;const A=o<<2|h>>4;if(r.push(A),g!==64){const k=h<<4&240|g>>2;if(r.push(k),v!==64){const O=g<<6&192|v;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(n){const t=Xc(n);return Yc.encodeByteArray(t,!0)},Ms=function(n){return Uf(n).replace(/\./g,"")},jf=function(n){try{return Yc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=()=>qf().__FIREBASE_DEFAULTS__,zf=()=>{if(typeof process>"u"||typeof Fl>"u")return;const n=Fl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&jf(n[1]);return t&&JSON.parse(t)},ba=()=>{try{return $f()||zf()||Hf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gf=n=>{var t,e;return(e=(t=ba())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Jc=n=>{const t=Gf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Zc=()=>{var n;return(n=ba())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ms(JSON.stringify(e)),Ms(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){var n;const t=(n=ba())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xf(){return!Qf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yf(){try{return typeof indexedDB=="object"}catch{return!1}}function Jf(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="FirebaseError";class or extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Zf,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eu.prototype.create)}}class eu{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?tp(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new or(i,h,r)}}function tp(n,t){return n.replace(ep,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ep=/\{\$([^}]+)}/g;function Yo(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Bl(o)&&Bl(l)){if(!Yo(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Bl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){return n&&n._delegate?n._delegate:n}class Dr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Kf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ip(t))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xn){return this.instances.has(t)}getOptions(t=Xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xn){return this.component?this.component.multipleInstances?t:Xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rp(n){return n===Xn?void 0:n}function ip(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new np(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(st||(st={}));const op={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},ap=st.INFO,lp={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},cp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=lp[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nu{constructor(t){this.name=t,this._logLevel=ap,this._logHandler=cp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in st))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?op[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...t),this._logHandler(this,st.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...t),this._logHandler(this,st.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,st.INFO,...t),this._logHandler(this,st.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,st.WARN,...t),this._logHandler(this,st.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...t),this._logHandler(this,st.ERROR,...t)}}const up=(n,t)=>t.some(e=>n instanceof e);let Ul,jl;function hp(){return Ul||(Ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dp(){return jl||(jl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ru=new WeakMap,Jo=new WeakMap,iu=new WeakMap,Uo=new WeakMap,Ta=new WeakMap;function fp(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(wn(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&ru.set(e,n)}).catch(()=>{}),Ta.set(t,n),t}function pp(n){if(Jo.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Jo.set(n,t)}let Zo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Jo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||iu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return wn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function mp(n){Zo=n(Zo)}function gp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(jo(this),t,...e);return iu.set(r,t.sort?t.sort():[t]),wn(r)}:dp().includes(n)?function(...t){return n.apply(jo(this),t),wn(ru.get(this))}:function(...t){return wn(n.apply(jo(this),t))}}function _p(n){return typeof n=="function"?gp(n):(n instanceof IDBTransaction&&pp(n),up(n,hp())?new Proxy(n,Zo):n)}function wn(n){if(n instanceof IDBRequest)return fp(n);if(Uo.has(n))return Uo.get(n);const t=_p(n);return t!==n&&(Uo.set(n,t),Ta.set(t,n)),t}const jo=n=>Ta.get(n);function yp(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=wn(l);return r&&l.addEventListener("upgradeneeded",p=>{r(wn(l.result),p.oldVersion,p.newVersion,wn(l.transaction),p)}),e&&l.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),h.then(p=>{o&&p.addEventListener("close",()=>o()),i&&p.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),h}const wp=["get","getKey","getAll","getAllKeys","count"],vp=["put","add","delete","clear"],qo=new Map;function ql(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qo.get(t))return qo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=vp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wp.includes(e)))return;const o=async function(l,...h){const p=this.transaction(l,i?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(h.shift())),(await Promise.all([g[e](...h),i&&p.done]))[0]};return qo.set(t,o),o}mp(n=>({...n,get:(t,e,r)=>ql(t,e)||n.get(t,e,r),has:(t,e)=>!!ql(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(bp(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function bp(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ta="@firebase/app",$l="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new nu("@firebase/app"),Tp="@firebase/app-compat",Ap="@firebase/analytics-compat",Ip="@firebase/analytics",Rp="@firebase/app-check-compat",Sp="@firebase/app-check",Pp="@firebase/auth",Cp="@firebase/auth-compat",kp="@firebase/database",xp="@firebase/database-compat",Dp="@firebase/functions",Vp="@firebase/functions-compat",Np="@firebase/installations",Op="@firebase/installations-compat",Mp="@firebase/messaging",Lp="@firebase/messaging-compat",Fp="@firebase/performance",Bp="@firebase/performance-compat",Up="@firebase/remote-config",jp="@firebase/remote-config-compat",qp="@firebase/storage",$p="@firebase/storage-compat",zp="@firebase/firestore",Hp="@firebase/vertexai-preview",Gp="@firebase/firestore-compat",Kp="firebase",Wp="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="[DEFAULT]",Qp={[ta]:"fire-core",[Tp]:"fire-core-compat",[Ip]:"fire-analytics",[Ap]:"fire-analytics-compat",[Sp]:"fire-app-check",[Rp]:"fire-app-check-compat",[Pp]:"fire-auth",[Cp]:"fire-auth-compat",[kp]:"fire-rtdb",[xp]:"fire-rtdb-compat",[Dp]:"fire-fn",[Vp]:"fire-fn-compat",[Np]:"fire-iid",[Op]:"fire-iid-compat",[Mp]:"fire-fcm",[Lp]:"fire-fcm-compat",[Fp]:"fire-perf",[Bp]:"fire-perf-compat",[Up]:"fire-rc",[jp]:"fire-rc-compat",[qp]:"fire-gcs",[$p]:"fire-gcs-compat",[zp]:"fire-fst",[Gp]:"fire-fst-compat",[Hp]:"fire-vertex","fire-js":"fire-js",[Kp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Map,Xp=new Map,na=new Map;function zl(n,t){try{n.container.addComponent(t)}catch(e){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Ti(n){const t=n.name;if(na.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;na.set(t,n);for(const e of Ls.values())zl(e,n);for(const e of Xp.values())zl(e,n);return!0}function su(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new eu("app","Firebase",Yp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=Wp;function au(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ea,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(e||(e=Zc()),!e)throw vn.create("no-options");const o=Ls.get(i);if(o){if(Yo(e,o.options)&&Yo(r,o.config))return o;throw vn.create("duplicate-app",{appName:i})}const l=new sp(i);for(const p of na.values())l.addComponent(p);const h=new Jp(e,r,l);return Ls.set(i,h),h}function lu(n=ea){const t=Ls.get(n);if(!t&&n===ea&&Zc())return au();if(!t)throw vn.create("no-app",{appName:n});return t}function En(n,t,e){var r;let i=(r=Qp[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const h=[`Unable to register library "${i}" with version "${t}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tr.warn(h.join(" "));return}Ti(new Dr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="firebase-heartbeat-database",tm=1,Ai="firebase-heartbeat-store";let $o=null;function cu(){return $o||($o=yp(Zp,tm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ai)}catch(e){console.warn(e)}}}}).catch(n=>{throw vn.create("idb-open",{originalErrorMessage:n.message})})),$o}async function em(n){try{const e=(await cu()).transaction(Ai),r=await e.objectStore(Ai).get(uu(n));return await e.done,r}catch(t){if(t instanceof or)tr.warn(t.message);else{const e=vn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tr.warn(e.message)}}}async function Hl(n,t){try{const r=(await cu()).transaction(Ai,"readwrite");await r.objectStore(Ai).put(t,uu(n)),await r.done}catch(e){if(e instanceof or)tr.warn(e.message);else{const r=vn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});tr.warn(r.message)}}}function uu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=1024,rm=30*24*60*60*1e3;class im{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new om(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gl();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const h=new Date(l.date).valueOf();return Date.now()-h<=rm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gl(),{heartbeatsToSend:r,unsentEntries:i}=sm(this._heartbeatsCache.heartbeats),o=Ms(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Gl(){return new Date().toISOString().substring(0,10)}function sm(n,t=nm){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Kl(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Kl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class om{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yf()?Jf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await em(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Kl(n){return Ms(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n){Ti(new Dr("platform-logger",t=>new Ep(t),"PRIVATE")),Ti(new Dr("heartbeat",t=>new im(t),"PRIVATE")),En(ta,$l,n),En(ta,$l,"esm2017"),En("fire-js","")}am("");var lm="firebase",cm="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(lm,cm,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="firebasestorage.googleapis.com",du="storageBucket",um=2*60*1e3,hm=10*60*1e3,dm=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends or{constructor(t,e,r=0){super(zo(t),`Firebase Storage: ${e} (${zo(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return zo(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _t;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_t||(_t={}));function zo(n){return"storage/"+n}function Aa(){const n="An unknown error occurred, please check the error payload for server response.";return new vt(_t.UNKNOWN,n)}function fm(n){return new vt(_t.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function pm(n){return new vt(_t.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mm(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new vt(_t.UNAUTHENTICATED,n)}function gm(){return new vt(_t.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _m(n){return new vt(_t.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function fu(){return new vt(_t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pu(){return new vt(_t.CANCELED,"User canceled the upload/download.")}function ym(n){return new vt(_t.INVALID_URL,"Invalid URL '"+n+"'.")}function wm(n){return new vt(_t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function vm(){return new vt(_t.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+du+"' property when initializing the app?")}function mu(){return new vt(_t.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Em(){return new vt(_t.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function bm(){return new vt(_t.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Tm(n){return new vt(_t.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ra(n){return new vt(_t.INVALID_ARGUMENT,n)}function gu(){return new vt(_t.APP_DELETED,"The Firebase app was deleted.")}function Am(n){return new vt(_t.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _i(n,t){return new vt(_t.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function ci(n){throw new vt(_t.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=ee.makeFromUrl(t,e)}catch{return new ee(t,"")}if(r.path==="")return r;throw wm(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const l="(/(.*))?$",h=new RegExp("^gs://"+i+l,"i"),p={bucket:1,path:3};function g(Y){Y.path_=decodeURIComponent(Y.path)}const y="v[A-Za-z0-9_]+",v=e.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",k=new RegExp(`^https?://${v}/${y}/b/${i}/o${A}`,"i"),O={bucket:1,path:3},L=e===hu?"(?:storage.googleapis.com|storage.cloud.google.com)":e,V="([^?#]*)",q=new RegExp(`^https?://${L}/${i}/${V}`,"i"),H=[{regex:h,indices:p,postModify:o},{regex:k,indices:O,postModify:g},{regex:q,indices:{bucket:1,path:2},postModify:g}];for(let Y=0;Y<H.length;Y++){const bt=H[Y],ft=bt.regex.exec(t);if(ft){const R=ft[bt.indices.bucket];let E=ft[bt.indices.path];E||(E=""),r=new ee(R,E),bt.postModify(r);break}}if(r==null)throw ym(t);return r}}class Im{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n,t,e){let r=1,i=null,o=null,l=!1,h=0;function p(){return h===2}let g=!1;function y(...V){g||(g=!0,t.apply(null,V))}function v(V){i=setTimeout(()=>{i=null,n(k,p())},V)}function A(){o&&clearTimeout(o)}function k(V,...q){if(g){A();return}if(V){A(),y.call(null,V,...q);return}if(p()||l){A(),y.call(null,V,...q);return}r<64&&(r*=2);let H;h===1?(h=2,H=0):H=(r+Math.random())*1e3,v(H)}let O=!1;function L(V){O||(O=!0,A(),!g&&(i!==null?(V||(h=2),clearTimeout(i),v(0)):V||(h=1)))}return v(0),o=setTimeout(()=>{l=!0,L(!0)},e),L}function Sm(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n){return n!==void 0}function Cm(n){return typeof n=="function"}function km(n){return typeof n=="object"&&!Array.isArray(n)}function Xs(n){return typeof n=="string"||n instanceof String}function Wl(n){return Ia()&&n instanceof Blob}function Ia(){return typeof Blob<"u"}function ia(n,t,e,r){if(r<t)throw ra(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw ra(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function _u(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Jn||(Jn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,e,r,i,o,l,h,p,g,y,v,A=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=h,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=v,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,O)=>{this.resolve_=k,this.reject_=O,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Ts(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=h=>{const p=h.loaded,g=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const h=o.getErrorCode()===Jn.NO_ERROR,p=o.getStatus();if(!h||yu(p,this.additionalRetryCodes_)&&this.retry){const y=o.getErrorCode()===Jn.ABORT;r(!1,new Ts(!1,null,y));return}const g=this.successCodes_.indexOf(p)!==-1;r(!0,new Ts(g,o))})},e=(r,i)=>{const o=this.resolve_,l=this.reject_,h=i.connection;if(i.wasSuccessCode)try{const p=this.callback_(h,h.getResponse());Pm(p)?o(p):o()}catch(p){l(p)}else if(h!==null){const p=Aa();p.serverResponse=h.getErrorText(),this.errorCallback_?l(this.errorCallback_(h,p)):l(p)}else if(i.canceled){const p=this.appDelete_?gu():pu();l(p)}else{const p=fu();l(p)}};this.canceled_?e(!1,new Ts(!1,null,!0)):this.backoffId_=Rm(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Sm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ts{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Dm(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Vm(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Nm(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Om(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Mm(n,t,e,r,i,o,l=!0){const h=_u(n.urlParams),p=n.url+h,g=Object.assign({},n.headers);return Nm(g,t),Dm(g,e),Vm(g,o),Om(g,r),new xm(p,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Fm(...n){const t=Lm();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(Ia())return new Blob(n);throw new vt(_t.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Bm(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n){if(typeof atob>"u")throw Tm("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ho{constructor(t,e){this.data=t,this.contentType=e||null}}function jm(n,t){switch(n){case Pe.RAW:return new Ho(wu(t));case Pe.BASE64:case Pe.BASE64URL:return new Ho(vu(n,t));case Pe.DATA_URL:return new Ho($m(t),zm(t))}throw Aa()}function wu(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,l=n.charCodeAt(++e);r=65536|(o&1023)<<10|l&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function qm(n){let t;try{t=decodeURIComponent(n)}catch{throw _i(Pe.DATA_URL,"Malformed data URL.")}return wu(t)}function vu(n,t){switch(n){case Pe.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw _i(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Pe.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw _i(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=Um(t)}catch(i){throw i.message.includes("polyfill")?i:_i(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}class Eu{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw _i(Pe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=Hm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function $m(n){const t=new Eu(n);return t.base64?vu(Pe.BASE64,t.rest):qm(t.rest)}function zm(n){return new Eu(n).contentType}function Hm(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){let r=0,i="";Wl(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Wl(this.data_)){const r=this.data_,i=Bm(r,t,e);return i===null?null:new mn(i)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new mn(r,!0)}}static getBlob(...t){if(Ia()){const e=t.map(r=>r instanceof mn?r.data_:r);return new mn(Fm.apply(null,e))}else{const e=t.map(l=>Xs(l)?jm(Pe.RAW,l).data:l.data_);let r=0;e.forEach(l=>{r+=l.byteLength});const i=new Uint8Array(r);let o=0;return e.forEach(l=>{for(let h=0;h<l.length;h++)i[o++]=l[h]}),new mn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){let t;try{t=JSON.parse(n)}catch{return null}return km(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Km(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function bu(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,t){return t}class Jt{constructor(t,e,r,i){this.server=t,this.local=e||t,this.writable=!!r,this.xform=i||Wm}}let As=null;function Qm(n){return!Xs(n)||n.length<2?n:bu(n)}function Tu(){if(As)return As;const n=[];n.push(new Jt("bucket")),n.push(new Jt("generation")),n.push(new Jt("metageneration")),n.push(new Jt("name","fullPath",!0));function t(o,l){return Qm(l)}const e=new Jt("name");e.xform=t,n.push(e);function r(o,l){return l!==void 0?Number(l):l}const i=new Jt("size");return i.xform=r,n.push(i),n.push(new Jt("timeCreated")),n.push(new Jt("updated")),n.push(new Jt("md5Hash",null,!0)),n.push(new Jt("cacheControl",null,!0)),n.push(new Jt("contentDisposition",null,!0)),n.push(new Jt("contentEncoding",null,!0)),n.push(new Jt("contentLanguage",null,!0)),n.push(new Jt("contentType",null,!0)),n.push(new Jt("metadata","customMetadata",!0)),As=n,As}function Xm(n,t){function e(){const r=n.bucket,i=n.fullPath,o=new ee(r,i);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function Ym(n,t,e){const r={};r.type="file";const i=e.length;for(let o=0;o<i;o++){const l=e[o];r[l.local]=l.xform(r,t[l.server])}return Xm(r,n),r}function Au(n,t,e){const r=Ra(t);return r===null?null:Ym(n,r,e)}function Jm(n,t,e,r){const i=Ra(t);if(i===null||!Xs(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(g=>{const y=n.bucket,v=n.fullPath,A="/b/"+l(y)+"/o/"+l(v),k=ar(A,e,r),O=_u({alt:"media",token:g});return k+O})[0]}function Iu(n,t){const e={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="prefixes",Xl="items";function Zm(n,t,e){const r={prefixes:[],items:[],nextPageToken:e.nextPageToken};if(e[Ql])for(const i of e[Ql]){const o=i.replace(/\/$/,""),l=n._makeStorageReference(new ee(t,o));r.prefixes.push(l)}if(e[Xl])for(const i of e[Xl]){const o=n._makeStorageReference(new ee(t,i.name));r.items.push(o)}return r}function tg(n,t,e){const r=Ra(e);return r===null?null:Zm(n,t,r)}class Rn{constructor(t,e,r,i){this.url=t,this.method=e,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){if(!n)throw Aa()}function Sa(n,t){function e(r,i){const o=Au(n,i,t);return Ce(o!==null),o}return e}function eg(n,t){function e(r,i){const o=tg(n,t,i);return Ce(o!==null),o}return e}function ng(n,t){function e(r,i){const o=Au(n,i,t);return Ce(o!==null),Jm(o,i,n.host,n._protocol)}return e}function Br(n){function t(e,r){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=gm():i=mm():e.getStatus()===402?i=pm(n.bucket):e.getStatus()===403?i=_m(n.path):i=r,i.status=e.getStatus(),i.serverResponse=r.serverResponse,i}return t}function Pa(n){const t=Br(n);function e(r,i){let o=t(r,i);return r.getStatus()===404&&(o=fm(n.path)),o.serverResponse=i.serverResponse,o}return e}function rg(n,t,e){const r=t.fullServerUrl(),i=ar(r,n.host,n._protocol),o="GET",l=n.maxOperationRetryTime,h=new Rn(i,o,Sa(n,e),l);return h.errorHandler=Pa(t),h}function ig(n,t,e,r,i){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",e.length>0&&(o.delimiter=e),r&&(o.pageToken=r),i&&(o.maxResults=i);const l=t.bucketOnlyServerUrl(),h=ar(l,n.host,n._protocol),p="GET",g=n.maxOperationRetryTime,y=new Rn(h,p,eg(n,t.bucket),g);return y.urlParams=o,y.errorHandler=Br(t),y}function sg(n,t,e){const r=t.fullServerUrl(),i=ar(r,n.host,n._protocol),o="GET",l=n.maxOperationRetryTime,h=new Rn(i,o,ng(n,e),l);return h.errorHandler=Pa(t),h}function og(n,t){const e=t.fullServerUrl(),r=ar(e,n.host,n._protocol),i="DELETE",o=n.maxOperationRetryTime;function l(p,g){}const h=new Rn(r,i,l,o);return h.successCodes=[200,204],h.errorHandler=Pa(t),h}function ag(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Ru(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=ag(null,t)),r}function lg(n,t,e,r,i){const o=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function h(){let H="";for(let Y=0;Y<2;Y++)H=H+Math.random().toString().slice(2);return H}const p=h();l["Content-Type"]="multipart/related; boundary="+p;const g=Ru(t,r,i),y=Iu(g,e),v="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,A=`\r
--`+p+"--",k=mn.getBlob(v,r,A);if(k===null)throw mu();const O={name:g.fullPath},L=ar(o,n.host,n._protocol),V="POST",q=n.maxUploadRetryTime,U=new Rn(L,V,Sa(n,e),q);return U.urlParams=O,U.headers=l,U.body=k.uploadData(),U.errorHandler=Br(t),U}class Fs{constructor(t,e,r,i){this.current=t,this.total=e,this.finalized=!!r,this.metadata=i||null}}function Ca(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{Ce(!1)}return Ce(!!e&&(t||["active"]).indexOf(e)!==-1),e}function cg(n,t,e,r,i){const o=t.bucketOnlyServerUrl(),l=Ru(t,r,i),h={name:l.fullPath},p=ar(o,n.host,n._protocol),g="POST",y={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},v=Iu(l,e),A=n.maxUploadRetryTime;function k(L){Ca(L);let V;try{V=L.getResponseHeader("X-Goog-Upload-URL")}catch{Ce(!1)}return Ce(Xs(V)),V}const O=new Rn(p,g,k,A);return O.urlParams=h,O.headers=y,O.body=v,O.errorHandler=Br(t),O}function ug(n,t,e,r){const i={"X-Goog-Upload-Command":"query"};function o(g){const y=Ca(g,["active","final"]);let v=null;try{v=g.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ce(!1)}v||Ce(!1);const A=Number(v);return Ce(!isNaN(A)),new Fs(A,r.size(),y==="final")}const l="POST",h=n.maxUploadRetryTime,p=new Rn(e,l,o,h);return p.headers=i,p.errorHandler=Br(t),p}const Yl=256*1024;function hg(n,t,e,r,i,o,l,h){const p=new Fs(0,0);if(l?(p.current=l.current,p.total=l.total):(p.current=0,p.total=r.size()),r.size()!==p.total)throw Em();const g=p.total-p.current;let y=g;i>0&&(y=Math.min(y,i));const v=p.current,A=v+y;let k="";y===0?k="finalize":g===y?k="upload, finalize":k="upload";const O={"X-Goog-Upload-Command":k,"X-Goog-Upload-Offset":`${p.current}`},L=r.slice(v,A);if(L===null)throw mu();function V(Y,bt){const ft=Ca(Y,["active","final"]),R=p.current+y,E=r.size();let T;return ft==="final"?T=Sa(t,o)(Y,bt):T=null,new Fs(R,E,ft==="final",T)}const q="POST",U=t.maxUploadRetryTime,H=new Rn(e,q,V,U);return H.headers=O,H.body=L.uploadData(),H.progressCallback=h||null,H.errorHandler=Br(n),H}const ie={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Go(n){switch(n){case"running":case"pausing":case"canceling":return ie.RUNNING;case"paused":return ie.PAUSED;case"success":return ie.SUCCESS;case"canceled":return ie.CANCELED;case"error":return ie.ERROR;default:return ie.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,e,r){if(Cm(t)||e!=null||r!=null)this.next=t,this.error=e??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class fg{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,i){if(this.sent_)throw ci("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ci("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ci("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ci("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ci("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class pg extends fg{initXhr(){this.xhr_.responseType="text"}}function gn(){return new pg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,e,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=r,this._mappings=Tu(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(_t.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(yu(i.status,[]))if(o)i=fu();else{this.sleepTime=Math.max(this.sleepTime*2,dm),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(_t.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,r])=>{switch(this._state){case"running":t(e,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const r=cg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,gn,t,e);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,r)=>{const i=ug(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(i,gn,e,r);this._request=o,o.getPromise().then(l=>{l=l,this._request=void 0,this._updateProgress(l.current),this._needToFetchStatus=!1,l.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Yl*this._chunkMultiplier,e=new Fs(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let l;try{l=hg(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const h=this._ref.storage._makeRequest(l,gn,i,o,!1);this._request=h,h.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Yl*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const r=rg(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,gn,t,e);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const r=lg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,gn,t,e);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=pu(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Go(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,r,i){const o=new dg(e||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Go(this._state)){case ie.SUCCESS:Ir(this._resolve.bind(null,this.snapshot))();break;case ie.CANCELED:case ie.ERROR:const e=this._reject;Ir(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Go(this._state)){case ie.RUNNING:case ie.PAUSED:t.next&&Ir(t.next.bind(t,this.snapshot))();break;case ie.SUCCESS:t.complete&&Ir(t.complete.bind(t))();break;case ie.CANCELED:case ie.ERROR:t.error&&Ir(t.error.bind(t,this._error))();break;default:t.error&&Ir(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e){this._service=t,e instanceof ee?this._location=e:this._location=ee.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new er(t,e)}get root(){const t=new ee(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bu(this._location.path)}get storage(){return this._service}get parent(){const t=Gm(this._location.path);if(t===null)return null;const e=new ee(this._location.bucket,t);return new er(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Am(t)}}function gg(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new mg(n,new mn(t),e)}function _g(n){const t={prefixes:[],items:[]};return Su(n,t).then(()=>t)}async function Su(n,t,e){const i=await yg(n,{pageToken:e});t.prefixes.push(...i.prefixes),t.items.push(...i.items),i.nextPageToken!=null&&await Su(n,t,i.nextPageToken)}function yg(n,t){t!=null&&typeof t.maxResults=="number"&&ia("options.maxResults",1,1e3,t.maxResults);const e=t||{},r=ig(n.storage,n._location,"/",e.pageToken,e.maxResults);return n.storage.makeRequestWithTokens(r,gn)}function wg(n){n._throwIfRoot("getDownloadURL");const t=sg(n.storage,n._location,Tu());return n.storage.makeRequestWithTokens(t,gn).then(e=>{if(e===null)throw bm();return e})}function vg(n){n._throwIfRoot("deleteObject");const t=og(n.storage,n._location);return n.storage.makeRequestWithTokens(t,gn)}function Eg(n,t){const e=Km(n._location.path,t),r=new ee(n._location.bucket,e);return new er(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){return/^[A-Za-z]+:\/\//.test(n)}function Tg(n,t){return new er(n,t)}function Pu(n,t){if(n instanceof ka){const e=n;if(e._bucket==null)throw vm();const r=new er(e,e._bucket);return t!=null?Pu(r,t):r}else return t!==void 0?Eg(n,t):n}function Ag(n,t){if(t&&bg(t)){if(n instanceof ka)return Tg(n,t);throw ra("To use ref(service, url), the first argument must be a Storage instance.")}else return Pu(n,t)}function Jl(n,t){const e=t==null?void 0:t[du];return e==null?null:ee.makeFromBucketSpec(e,n)}function Ig(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:tu(i,n.app.options.projectId))}class ka{constructor(t,e,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=hu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=um,this._maxUploadRetryTime=hm,this._requests=new Set,i!=null?this._bucket=ee.makeFromBucketSpec(i,this._host):this._bucket=Jl(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ee.makeFromBucketSpec(this._url,t):this._bucket=Jl(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ia("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ia("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new er(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new Im(gu());{const l=Mm(t,this._appId,r,i,e,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const Zl="@firebase/storage",tc="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="storage";function Rg(n,t,e){return n=ne(n),gg(n,t,e)}function Sg(n){return n=ne(n),_g(n)}function Pg(n){return n=ne(n),wg(n)}function Cg(n){return n=ne(n),vg(n)}function ec(n,t){return n=ne(n),Ag(n,t)}function kg(n=lu(),t){n=ne(n);const r=su(n,Cu).getImmediate({identifier:t}),i=Jc("storage");return i&&xg(r,...i),r}function xg(n,t,e,r={}){Ig(n,t,e,r)}function Dg(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new ka(e,r,i,t,ou)}function Vg(){Ti(new Dr(Cu,Dg,"PUBLIC").setMultipleInstances(!0)),En(Zl,tc,""),En(Zl,tc,"esm2017")}Vg();var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,ku;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,E){function T(){}T.prototype=E.prototype,R.D=E.prototype,R.prototype=new T,R.prototype.constructor=R,R.C=function(I,S,C){for(var b=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)b[fe-2]=arguments[fe];return E.prototype[S].apply(I,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,E,T){T||(T=0);var I=Array(16);if(typeof E=="string")for(var S=0;16>S;++S)I[S]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(S=0;16>S;++S)I[S]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=R.g[0],T=R.g[1],S=R.g[2];var C=R.g[3],b=E+(C^T&(S^C))+I[0]+3614090360&4294967295;E=T+(b<<7&4294967295|b>>>25),b=C+(S^E&(T^S))+I[1]+3905402710&4294967295,C=E+(b<<12&4294967295|b>>>20),b=S+(T^C&(E^T))+I[2]+606105819&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(E^S&(C^E))+I[3]+3250441966&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(C^T&(S^C))+I[4]+4118548399&4294967295,E=T+(b<<7&4294967295|b>>>25),b=C+(S^E&(T^S))+I[5]+1200080426&4294967295,C=E+(b<<12&4294967295|b>>>20),b=S+(T^C&(E^T))+I[6]+2821735955&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(E^S&(C^E))+I[7]+4249261313&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(C^T&(S^C))+I[8]+1770035416&4294967295,E=T+(b<<7&4294967295|b>>>25),b=C+(S^E&(T^S))+I[9]+2336552879&4294967295,C=E+(b<<12&4294967295|b>>>20),b=S+(T^C&(E^T))+I[10]+4294925233&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(E^S&(C^E))+I[11]+2304563134&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(C^T&(S^C))+I[12]+1804603682&4294967295,E=T+(b<<7&4294967295|b>>>25),b=C+(S^E&(T^S))+I[13]+4254626195&4294967295,C=E+(b<<12&4294967295|b>>>20),b=S+(T^C&(E^T))+I[14]+2792965006&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(E^S&(C^E))+I[15]+1236535329&4294967295,T=S+(b<<22&4294967295|b>>>10),b=E+(S^C&(T^S))+I[1]+4129170786&4294967295,E=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(E^T))+I[6]+3225465664&4294967295,C=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(C^E))+I[11]+643717713&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^E&(S^C))+I[0]+3921069994&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^C&(T^S))+I[5]+3593408605&4294967295,E=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(E^T))+I[10]+38016083&4294967295,C=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(C^E))+I[15]+3634488961&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^E&(S^C))+I[4]+3889429448&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^C&(T^S))+I[9]+568446438&4294967295,E=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(E^T))+I[14]+3275163606&4294967295,C=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(C^E))+I[3]+4107603335&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^E&(S^C))+I[8]+1163531501&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(S^C&(T^S))+I[13]+2850285829&4294967295,E=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(E^T))+I[2]+4243563512&4294967295,C=E+(b<<9&4294967295|b>>>23),b=S+(E^T&(C^E))+I[7]+1735328473&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^E&(S^C))+I[12]+2368359562&4294967295,T=S+(b<<20&4294967295|b>>>12),b=E+(T^S^C)+I[5]+4294588738&4294967295,E=T+(b<<4&4294967295|b>>>28),b=C+(E^T^S)+I[8]+2272392833&4294967295,C=E+(b<<11&4294967295|b>>>21),b=S+(C^E^T)+I[11]+1839030562&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^E)+I[14]+4259657740&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^C)+I[1]+2763975236&4294967295,E=T+(b<<4&4294967295|b>>>28),b=C+(E^T^S)+I[4]+1272893353&4294967295,C=E+(b<<11&4294967295|b>>>21),b=S+(C^E^T)+I[7]+4139469664&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^E)+I[10]+3200236656&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^C)+I[13]+681279174&4294967295,E=T+(b<<4&4294967295|b>>>28),b=C+(E^T^S)+I[0]+3936430074&4294967295,C=E+(b<<11&4294967295|b>>>21),b=S+(C^E^T)+I[3]+3572445317&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^E)+I[6]+76029189&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(T^S^C)+I[9]+3654602809&4294967295,E=T+(b<<4&4294967295|b>>>28),b=C+(E^T^S)+I[12]+3873151461&4294967295,C=E+(b<<11&4294967295|b>>>21),b=S+(C^E^T)+I[15]+530742520&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^E)+I[2]+3299628645&4294967295,T=S+(b<<23&4294967295|b>>>9),b=E+(S^(T|~C))+I[0]+4096336452&4294967295,E=T+(b<<6&4294967295|b>>>26),b=C+(T^(E|~S))+I[7]+1126891415&4294967295,C=E+(b<<10&4294967295|b>>>22),b=S+(E^(C|~T))+I[14]+2878612391&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~E))+I[5]+4237533241&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~C))+I[12]+1700485571&4294967295,E=T+(b<<6&4294967295|b>>>26),b=C+(T^(E|~S))+I[3]+2399980690&4294967295,C=E+(b<<10&4294967295|b>>>22),b=S+(E^(C|~T))+I[10]+4293915773&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~E))+I[1]+2240044497&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~C))+I[8]+1873313359&4294967295,E=T+(b<<6&4294967295|b>>>26),b=C+(T^(E|~S))+I[15]+4264355552&4294967295,C=E+(b<<10&4294967295|b>>>22),b=S+(E^(C|~T))+I[6]+2734768916&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~E))+I[13]+1309151649&4294967295,T=S+(b<<21&4294967295|b>>>11),b=E+(S^(T|~C))+I[4]+4149444226&4294967295,E=T+(b<<6&4294967295|b>>>26),b=C+(T^(E|~S))+I[11]+3174756917&4294967295,C=E+(b<<10&4294967295|b>>>22),b=S+(E^(C|~T))+I[2]+718787259&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~E))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+C&4294967295}r.prototype.u=function(R,E){E===void 0&&(E=R.length);for(var T=E-this.blockSize,I=this.B,S=this.h,C=0;C<E;){if(S==0)for(;C<=T;)i(this,R,C),C+=this.blockSize;if(typeof R=="string"){for(;C<E;)if(I[S++]=R.charCodeAt(C++),S==this.blockSize){i(this,I),S=0;break}}else for(;C<E;)if(I[S++]=R[C++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=E},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;var T=8*this.o;for(E=R.length-8;E<R.length;++E)R[E]=T&255,T/=256;for(this.u(R),R=Array(16),E=T=0;4>E;++E)for(var I=0;32>I;I+=8)R[T++]=this.g[E]>>>I&255;return R};function o(R,E){var T=h;return Object.prototype.hasOwnProperty.call(T,R)?T[R]:T[R]=E(R)}function l(R,E){this.h=E;for(var T=[],I=!0,S=R.length-1;0<=S;S--){var C=R[S]|0;I&&C==E||(T[S]=C,I=!1)}this.g=T}var h={};function p(R){return-128<=R&&128>R?o(R,function(E){return new l([E|0],0>E?-1:0)}):new l([R|0],0>R?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return v;if(0>R)return V(g(-R));for(var E=[],T=1,I=0;R>=T;I++)E[I]=R/T|0,T*=4294967296;return new l(E,0)}function y(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return V(y(R.substring(1),E));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=g(Math.pow(E,8)),I=v,S=0;S<R.length;S+=8){var C=Math.min(8,R.length-S),b=parseInt(R.substring(S,S+C),E);8>C?(C=g(Math.pow(E,C)),I=I.j(C).add(g(b))):(I=I.j(T),I=I.add(g(b)))}return I}var v=p(0),A=p(1),k=p(16777216);n=l.prototype,n.m=function(){if(L(this))return-V(this).m();for(var R=0,E=1,T=0;T<this.g.length;T++){var I=this.i(T);R+=(0<=I?I:4294967296+I)*E,E*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(O(this))return"0";if(L(this))return"-"+V(this).toString(R);for(var E=g(Math.pow(R,6)),T=this,I="";;){var S=Y(T,E).g;T=q(T,S.j(E));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(R);if(T=S,O(T))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function O(R){if(R.h!=0)return!1;for(var E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function L(R){return R.h==-1}n.l=function(R){return R=q(this,R),L(R)?-1:O(R)?0:1};function V(R){for(var E=R.g.length,T=[],I=0;I<E;I++)T[I]=~R.g[I];return new l(T,~R.h).add(A)}n.abs=function(){return L(this)?V(this):this},n.add=function(R){for(var E=Math.max(this.g.length,R.g.length),T=[],I=0,S=0;S<=E;S++){var C=I+(this.i(S)&65535)+(R.i(S)&65535),b=(C>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);I=b>>>16,C&=65535,b&=65535,T[S]=b<<16|C}return new l(T,T[T.length-1]&-2147483648?-1:0)};function q(R,E){return R.add(V(E))}n.j=function(R){if(O(this)||O(R))return v;if(L(this))return L(R)?V(this).j(V(R)):V(V(this).j(R));if(L(R))return V(this.j(V(R)));if(0>this.l(k)&&0>R.l(k))return g(this.m()*R.m());for(var E=this.g.length+R.g.length,T=[],I=0;I<2*E;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<R.g.length;S++){var C=this.i(I)>>>16,b=this.i(I)&65535,fe=R.i(S)>>>16,Cn=R.i(S)&65535;T[2*I+2*S]+=b*Cn,U(T,2*I+2*S),T[2*I+2*S+1]+=C*Cn,U(T,2*I+2*S+1),T[2*I+2*S+1]+=b*fe,U(T,2*I+2*S+1),T[2*I+2*S+2]+=C*fe,U(T,2*I+2*S+2)}for(I=0;I<E;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=E;I<2*E;I++)T[I]=0;return new l(T,0)};function U(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function H(R,E){this.g=R,this.h=E}function Y(R,E){if(O(E))throw Error("division by zero");if(O(R))return new H(v,v);if(L(R))return E=Y(V(R),E),new H(V(E.g),V(E.h));if(L(E))return E=Y(R,V(E)),new H(V(E.g),E.h);if(30<R.g.length){if(L(R)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var T=A,I=E;0>=I.l(R);)T=bt(T),I=bt(I);var S=ft(T,1),C=ft(I,1);for(I=ft(I,2),T=ft(T,2);!O(I);){var b=C.add(I);0>=b.l(R)&&(S=S.add(T),C=b),I=ft(I,1),T=ft(T,1)}return E=q(R,S.j(E)),new H(S,E)}for(S=v;0<=R.l(E);){for(T=Math.max(1,Math.floor(R.m()/E.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=g(T),b=C.j(E);L(b)||0<b.l(R);)T-=I,C=g(T),b=C.j(E);O(C)&&(C=A),S=S.add(C),R=q(R,b)}return new H(S,R)}n.A=function(R){return Y(this,R).h},n.and=function(R){for(var E=Math.max(this.g.length,R.g.length),T=[],I=0;I<E;I++)T[I]=this.i(I)&R.i(I);return new l(T,this.h&R.h)},n.or=function(R){for(var E=Math.max(this.g.length,R.g.length),T=[],I=0;I<E;I++)T[I]=this.i(I)|R.i(I);return new l(T,this.h|R.h)},n.xor=function(R){for(var E=Math.max(this.g.length,R.g.length),T=[],I=0;I<E;I++)T[I]=this.i(I)^R.i(I);return new l(T,this.h^R.h)};function bt(R){for(var E=R.g.length+1,T=[],I=0;I<E;I++)T[I]=R.i(I)<<1|R.i(I-1)>>>31;return new l(T,R.h)}function ft(R,E){var T=E>>5;E%=32;for(var I=R.g.length-T,S=[],C=0;C<I;C++)S[C]=0<E?R.i(C+T)>>>E|R.i(C+T+1)<<32-E:R.i(C+T);return new l(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ku=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=y,Zn=l}).apply(typeof nc<"u"?nc:typeof self<"u"?self:typeof window<"u"?window:{});var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xu,Du,fi,Vu,ks,sa,Nu,Ou,Mu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,d){return s==Array.prototype||s==Object.prototype||(s[u]=d.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Is=="object"&&Is];for(var u=0;u<s.length;++u){var d=s[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var d=r;s=s.split(".");for(var _=0;_<s.length-1;_++){var P=s[_];if(!(P in d))break t;d=d[P]}s=s[s.length-1],_=d[s],u=u(_),u!=_&&u!=null&&t(d,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var d=0,_=!1,P={next:function(){if(!_&&d<s.length){var D=d++;return{value:u(D,s[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function p(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function g(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function y(s,u,d){return s.call.apply(s.bind,arguments)}function v(s,u,d){if(!s)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),s.apply(u,P)}}return function(){return s.apply(u,arguments)}}function A(s,u,d){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,A.apply(null,arguments)}function k(s,u){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),s.apply(this,_)}}function O(s,u){function d(){}d.prototype=u.prototype,s.aa=u.prototype,s.prototype=new d,s.prototype.constructor=s,s.Qb=function(_,P,D){for(var B=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)B[ct-2]=arguments[ct];return u.prototype[P].apply(_,B)}}function L(s){const u=s.length;if(0<u){const d=Array(u);for(let _=0;_<u;_++)d[_]=s[_];return d}return[]}function V(s,u){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(p(_)){const P=s.length||0,D=_.length||0;s.length=P+D;for(let B=0;B<D;B++)s[P+B]=_[B]}else s.push(_)}}class q{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function Y(s){return Y[" "](s),s}Y[" "]=function(){};var bt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ft(s,u,d){for(const _ in s)u.call(d,s[_],_,s)}function R(s,u){for(const d in s)u.call(void 0,s[d],d,s)}function E(s){const u={};for(const d in s)u[d]=s[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,u){let d,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(d in _)s[d]=_[d];for(let D=0;D<T.length;D++)d=T[D],Object.prototype.hasOwnProperty.call(_,d)&&(s[d]=_[d])}}function S(s){var u=1;s=s.split(":");const d=[];for(;0<u&&s.length;)d.push(s.shift()),u--;return s.length&&d.push(s.join(":")),d}function C(s){h.setTimeout(()=>{throw s},0)}function b(){var s=zr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class fe{constructor(){this.h=this.g=null}add(u,d){const _=Cn.get();_.set(u,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Cn=new q(()=>new _o,s=>s.reset());class _o{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let kn,Q=!1,zr=new fe,Ui=()=>{const s=h.Promise.resolve(void 0);kn=()=>{s.then(ji)}};var ji=()=>{for(var s;s=b();){try{s.h.call(s.g)}catch(d){C(d)}var u=Cn;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Q=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var yo=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const d=()=>{};h.addEventListener("test",d,u),h.removeEventListener("test",d,u)}catch{}return s}();function Ee(s,u){if(x.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var d=this.type=s.type,_=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(bt){t:{try{Y(u.nodeName);var P=!0;break t}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=s.fromElement:d=="mouseout"&&(u=s.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:qi[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ee.aa.h.call(this)}}O(Ee,x);var qi={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),qt=0;function Ne(s,u,d,_,P){this.listener=s,this.proxy=null,this.src=u,this.type=d,this.capture=!!_,this.ha=P,this.key=++qt,this.da=this.fa=!1}function xn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ur(s){this.src=s,this.g={},this.h=0}ur.prototype.add=function(s,u,d,_,P){var D=s.toString();s=this.g[D],s||(s=this.g[D]=[],this.h++);var B=Ze(s,u,_,P);return-1<B?(u=s[B],d||(u.fa=!1)):(u=new Ne(u,this.src,D,!!_,P),u.fa=d,s.push(u)),u};function Hr(s,u){var d=u.type;if(d in s.g){var _=s.g[d],P=Array.prototype.indexOf.call(_,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(_,P,1),D&&(xn(u),s.g[d].length==0&&(delete s.g[d],s.h--))}}function Ze(s,u,d,_){for(var P=0;P<s.length;++P){var D=s[P];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==_)return P}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),Oe={};function hr(s,u,d,_,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)hr(s,u[D],d,_,P);return null}return d=Gr(d),s&&s[Je]?s.K(u,d,g(_)?!!_.capture:!!_,P):$t(s,u,d,!1,_,P)}function $t(s,u,d,_,P,D){if(!u)throw Error("Invalid event type");var B=g(P)?!!P.capture:!!P,ct=dr(s);if(ct||(s[Dn]=ct=new ur(s)),d=ct.add(u,d,_,B,D),d.proxy)return d;if(_=Vn(),d.proxy=_,_.src=s,_.listener=d,s.addEventListener)yo||(P=B),P===void 0&&(P=!1),s.addEventListener(u.toString(),_,P);else if(s.attachEvent)s.attachEvent(tn(u.toString()),_);else if(s.addListener&&s.removeListener)s.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Vn(){function s(d){return u.call(s.src,s.listener,d)}const u=wo;return s}function zt(s,u,d,_,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)zt(s,u[D],d,_,P);else _=g(_)?!!_.capture:!!_,d=Gr(d),s&&s[Je]?(s=s.i,u=String(u).toString(),u in s.g&&(D=s.g[u],d=Ze(D,d,_,P),-1<d&&(xn(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete s.g[u],s.h--)))):s&&(s=dr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Ze(u,d,_,P)),(d=-1<s?u[s]:null)&&it(d))}function it(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Je])Hr(u.i,s);else{var d=s.type,_=s.proxy;u.removeEventListener?u.removeEventListener(d,_,s.capture):u.detachEvent?u.detachEvent(tn(d),_):u.addListener&&u.removeListener&&u.removeListener(_),(d=dr(u))?(Hr(d,s),d.h==0&&(d.src=null,u[Dn]=null)):xn(s)}}}function tn(s){return s in Oe?Oe[s]:Oe[s]="on"+s}function wo(s,u){if(s.da)s=!0;else{u=new Ee(u,this);var d=s.listener,_=s.ha||s.src;s.fa&&it(s),s=d.call(_,u)}return s}function dr(s){return s=s[Dn],s instanceof ur?s:null}var Nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gr(s){return typeof s=="function"?s:(s[Nn]||(s[Nn]=function(u){return s.handleEvent(u)}),s[Nn])}function At(){ve.call(this),this.i=new ur(this),this.M=this,this.F=null}O(At,ve),At.prototype[Je]=!0,At.prototype.removeEventListener=function(s,u,d,_){zt(this,s,u,d,_)};function It(s,u){var d,_=s.F;if(_)for(d=[];_;_=_.F)d.push(_);if(s=s.M,_=u.type||u,typeof u=="string")u=new x(u,s);else if(u instanceof x)u.target=u.target||s;else{var P=u;u=new x(_,s),I(u,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var B=u.g=d[D];P=Wt(B,_,!0,u)&&P}if(B=u.g=s,P=Wt(B,_,!0,u)&&P,P=Wt(B,_,!1,u)&&P,d)for(D=0;D<d.length;D++)B=u.g=d[D],P=Wt(B,_,!1,u)&&P}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var d=s.g[u],_=0;_<d.length;_++)xn(d[_]);delete s.g[u],s.h--}}this.F=null},At.prototype.K=function(s,u,d,_){return this.i.add(String(s),u,!1,d,_)},At.prototype.L=function(s,u,d,_){return this.i.add(String(s),u,!0,d,_)};function Wt(s,u,d,_){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var B=u[D];if(B&&!B.da&&B.capture==d){var ct=B.listener,Ct=B.ha||B.src;B.fa&&Hr(s.i,B),P=ct.call(Ct,_)!==!1&&P}}return P&&!_.defaultPrevented}function Me(s,u,d){if(typeof s=="function")d&&(s=A(s,d));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:h.setTimeout(s,u||0)}function be(s){s.g=Me(()=>{s.g=null,s.i&&(s.i=!1,be(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class vo extends ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:be(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(s){ve.call(this),this.h=s,this.g={}}O(ue,ve);var en=[];function Kr(s){ft(s.g,function(u,d){this.g.hasOwnProperty(d)&&it(u)},s),s.g={}}ue.prototype.N=function(){ue.aa.N.call(this),Kr(this)},ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nn=h.JSON.stringify,Wr=h.JSON.parse,Eo=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function On(){}On.prototype.h=null;function fr(s){return s.h||(s.h=s.i())}function Mn(){}var Ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lt(){x.call(this,"d")}O(Lt,x);function oe(){x.call(this,"c")}O(oe,x);var Le={},Qt=null;function Fe(){return Qt=Qt||new At}Le.La="serverreachability";function Qr(s){x.call(this,Le.La,s)}O(Qr,x);function rn(s){const u=Fe();It(u,new Qr(u))}Le.STAT_EVENT="statevent";function Z(s,u){x.call(this,Le.STAT_EVENT,s),this.stat=u}O(Z,x);function pt(s){const u=Fe();It(u,new Z(u,s))}Le.Ma="timingevent";function pe(s,u){x.call(this,Le.Ma,s),this.size=u}O(pe,x);function ae(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},u)}function yt(){this.g=!0}yt.prototype.xa=function(){this.g=!1};function Vt(s,u,d,_,P,D){s.info(function(){if(s.g)if(D)for(var B="",ct=D.split("&"),Ct=0;Ct<ct.length;Ct++){var nt=ct[Ct].split("=");if(1<nt.length){var kt=nt[0];nt=nt[1];var Nt=kt.split("_");B=2<=Nt.length&&Nt[1]=="type"?B+(kt+"="+nt+"&"):B+(kt+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+u+`
`+d+`
`+B})}function Xr(s,u,d,_,P,D,B){s.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+u+`
`+d+`
`+D+" "+B})}function Be(s,u,d,_){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xt(s,d)+(_?" "+_:"")})}function Fn(s,u){s.info(function(){return"TIMEOUT: "+u})}yt.prototype.info=function(){};function Xt(s,u){if(!s.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(s=0;s<d.length;s++)if(Array.isArray(d[s])){var _=d[s];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return nn(d)}catch{return u}}var pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function sn(){}O(sn,On),sn.prototype.g=function(){return new XMLHttpRequest},sn.prototype.i=function(){return{}},mr=new sn;function Te(s,u,d,_){this.j=s,this.i=u,this.l=d,this.R=_||1,this.U=new ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jr}function Jr(){this.i=null,this.g="",this.h=!1}var $i={},Zr={};function me(s,u,d){s.L=1,s.v=qe(_e(u)),s.m=d,s.P=!0,zi(s,null)}function zi(s,u){s.F=Date.now(),gr(s),s.A=_e(s.v);var d=s.A,_=s.R;Array.isArray(_)||(_=[String(_)]),ns(d.i,"t",_),s.C=0,d=s.j.J,s.h=new Jr,s.g=Ge(s.j,d?u:null,!s.m),0<s.O&&(s.M=new vo(A(s.Y,s,s.g),s.O)),u=s.U,d=s.g,_=s.ca;var P="readystatechange";Array.isArray(P)||(P&&(en[0]=P.toString()),P=en);for(var D=0;D<P.length;D++){var B=hr(d,P[D],_||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=s.H?E(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),rn(),Vt(s.i,s.u,s.A,s.l,s.R,s.m)}Te.prototype.ca=function(s){s=s.target;const u=this.M;u&&ye(s)==3?u.j():this.Y(s)},Te.prototype.Y=function(s){try{if(s==this.g)t:{const Nt=ye(this.g);var u=this.g.Ba();const Re=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||ri(this.g)))){this.J||Nt!=4||u==7||(u==8||0>=Re?rn(3):rn(2)),Bn(this);var d=this.g.Z();this.X=d;e:if(Hi(this)){var _=ri(this.g);s="";var P=_.length,D=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),Un(this);var B="";break e}this.h.i=new h.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,s+=this.h.i.decode(_[u],{stream:!(D&&u==P-1)});_.length=0,this.h.g+=s,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,Xr(this.i,this.u,this.A,this.l,this.R,Nt,d),this.o){if(this.T&&!this.K){e:{if(this.g){var ct,Ct=this.g;if((ct=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ct)){var nt=ct;break e}}nt=null}if(d=nt)Be(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ge(this,d);else{this.o=!1,this.s=3,pt(12),Ue(this),Un(this);break t}}if(this.P){d=!0;let re;for(;!this.J&&this.C<B.length;)if(re=bo(this,B),re==Zr){Nt==4&&(this.s=4,pt(14),d=!1),Be(this.i,this.l,null,"[Incomplete Response]");break}else if(re==$i){this.s=4,pt(15),Be(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Be(this.i,this.l,re,null),ge(this,re);if(Hi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||B.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Be(this.i,this.l,B,"[Invalid Chunked Response]"),Ue(this),Un(this);else if(0<B.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),de(kt),kt.M=!0,pt(11))}}else Be(this.i,this.l,B,null),ge(this,B);Nt==4&&Ue(this),this.o&&!this.J&&(Nt==4?dn(this.j,this):(this.o=!1,gr(this)))}else cs(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Ue(this),Un(this)}}}catch{}finally{}};function Hi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function bo(s,u){var d=s.C,_=u.indexOf(`
`,d);return _==-1?Zr:(d=Number(u.substring(d,_)),isNaN(d)?$i:(_+=1,_+d>u.length?Zr:(u=u.slice(_,_+d),s.C=_+d,u)))}Te.prototype.cancel=function(){this.J=!0,Ue(this)};function gr(s){s.S=Date.now()+s.I,Gi(s,s.I)}function Gi(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ae(A(s.ba,s),u)}function Bn(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Te.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Fn(this.i,this.A),this.L!=2&&(rn(),pt(17)),Ue(this),this.s=2,Un(this)):Gi(this,this.S-s)};function Un(s){s.j.G==0||s.J||dn(s.j,s)}function Ue(s){Bn(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Kr(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function ge(s,u){try{var d=s.j;if(d.G!=0&&(d.g==s||ti(d.h,s))){if(!s.K&&ti(d.h,s)&&d.G==3){try{var _=d.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<s.F)Hn(d),Er(d);else break t;oi(d),pt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ae(A(d.Za,d),6e3));if(1>=_r(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else He(d,11)}else if((s.K||d.g==s)&&Hn(d),!U(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let nt=P[u];if(d.T=nt[0],nt=nt[1],d.G==2)if(nt[0]=="c"){d.K=nt[1],d.ia=nt[2];const kt=nt[3];kt!=null&&(d.la=kt,d.j.info("VER="+d.la));const Nt=nt[4];Nt!=null&&(d.Aa=Nt,d.j.info("SVER="+d.Aa));const Re=nt[5];Re!=null&&typeof Re=="number"&&0<Re&&(_=1.5*Re,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const re=s.g;if(re){const Gn=re.g?re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gn){var D=_.h;D.g||Gn.indexOf("spdy")==-1&&Gn.indexOf("quic")==-1&&Gn.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ei(D,D.h),D.h=null))}if(_.D){const Kn=re.g?re.g.getResponseHeader("X-HTTP-Session-Id"):null;Kn&&(_.ya=Kn,ht(_.I,_.D,Kn))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-s.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var B=s;if(_.qa=ai(_,_.J?_.ia:null,_.W),B.K){Qi(_.h,B);var ct=B,Ct=_.L;Ct&&(ct.I=Ct),ct.B&&(Bn(ct),gr(ct)),_.g=B}else si(_);0<d.i.length&&br(d)}else nt[0]!="stop"&&nt[0]!="close"||He(d,7);else d.G==3&&(nt[0]=="stop"||nt[0]=="close"?nt[0]=="stop"?He(d,7):ii(d):nt[0]!="noop"&&d.l&&d.l.ta(nt),d.v=0)}}rn(4)}catch{}}var To=class{constructor(s,u){this.g=s,this.map=u}};function Ki(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function _r(s){return s.h?1:s.g?s.g.size:0}function ti(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function ei(s,u){s.g?s.g.add(u):s.h=u}function Qi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Ki.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Xi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const d of s.g.values())u=u.concat(d.D);return u}return L(s.i)}function Ao(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(p(s)){for(var u=[],d=s.length,_=0;_<d;_++)u.push(s[_]);return u}u=[],d=0;for(_ in s)u[d++]=s[_];return u}function ut(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(p(s)||typeof s=="string"){var u=[];s=s.length;for(var d=0;d<s;d++)u.push(d);return u}u=[],d=0;for(const _ in s)u[d++]=_;return u}}}function Yi(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(p(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var d=ut(s),_=Ao(s),P=_.length,D=0;D<P;D++)u.call(void 0,_[D],d&&d[D],s)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Io(s,u){if(s){s=s.split("&");for(var d=0;d<s.length;d++){var _=s[d].indexOf("="),P=null;if(0<=_){var D=s[d].substring(0,_);P=s[d].substring(_+1)}else D=s[d];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function je(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof je){this.h=s.h,yr(this,s.j),this.o=s.o,this.g=s.g,on(this,s.s),this.l=s.l;var u=s.i,d=new ln;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),an(this,d),this.m=s.m}else s&&(u=String(s).match(Ji))?(this.h=!1,yr(this,u[1]||"",!0),this.o=dt(u[2]||""),this.g=dt(u[3]||"",!0),on(this,u[4]),this.l=dt(u[5]||"",!0),an(this,u[6]||"",!0),this.m=dt(u[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}je.prototype.toString=function(){var s=[],u=this.j;u&&s.push(jn(u,Zi,!0),":");var d=this.g;return(d||u=="file")&&(s.push("//"),(u=this.o)&&s.push(jn(u,Zi,!0),"@"),s.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&s.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&s.push("/"),s.push(jn(d,d.charAt(0)=="/"?So:ts,!0))),(d=this.i.toString())&&s.push("?",d),(d=this.m)&&s.push("#",jn(d,Co)),s.join("")};function _e(s){return new je(s)}function yr(s,u,d){s.j=d?dt(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function on(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function an(s,u,d){u instanceof ln?(s.i=u,ko(s.i,s.h)):(d||(u=jn(u,Po)),s.i=new ln(u,s.h))}function ht(s,u,d){s.i.set(u,d)}function qe(s){return ht(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function dt(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function jn(s,u,d){return typeof s=="string"?(s=encodeURI(s).replace(u,Ro),d&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ro(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Zi=/[#\/\?@]/g,ts=/[#\?:]/g,So=/[#\?]/g,Po=/[#\?@]/g,Co=/#/g;function ln(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Ae(s){s.g||(s.g=new Map,s.h=0,s.i&&Io(s.i,function(u,d){s.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=ln.prototype,n.add=function(s,u){Ae(this),this.i=null,s=cn(this,s);var d=this.g.get(s);return d||this.g.set(s,d=[]),d.push(u),this.h+=1,this};function ni(s,u){Ae(s),u=cn(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function es(s,u){return Ae(s),u=cn(s,u),s.g.has(u)}n.forEach=function(s,u){Ae(this),this.g.forEach(function(d,_){d.forEach(function(P){s.call(u,P,_,this)},this)},this)},n.na=function(){Ae(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let _=0;_<u.length;_++){const P=s[_];for(let D=0;D<P.length;D++)d.push(u[_])}return d},n.V=function(s){Ae(this);let u=[];if(typeof s=="string")es(this,s)&&(u=u.concat(this.g.get(cn(this,s))));else{s=Array.from(this.g.values());for(let d=0;d<s.length;d++)u=u.concat(s[d])}return u},n.set=function(s,u){return Ae(this),this.i=null,s=cn(this,s),es(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function ns(s,u,d){ni(s,u),0<d.length&&(s.i=null,s.g.set(cn(s,u),L(d)),s.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var _=u[d];const D=encodeURIComponent(String(_)),B=this.V(_);for(_=0;_<B.length;_++){var P=D;B[_]!==""&&(P+="="+encodeURIComponent(String(B[_]))),s.push(P)}}return this.i=s.join("&")};function cn(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function ko(s,u){u&&!s.j&&(Ae(s),s.i=null,s.g.forEach(function(d,_){var P=_.toLowerCase();_!=P&&(ni(this,_),ns(this,P,d))},s)),s.j=u}function xo(s,u){const d=new yt;if(h.Image){const _=new Image;_.onload=k(Ie,d,"TestLoadImage: loaded",!0,u,_),_.onerror=k(Ie,d,"TestLoadImage: error",!1,u,_),_.onabort=k(Ie,d,"TestLoadImage: abort",!1,u,_),_.ontimeout=k(Ie,d,"TestLoadImage: timeout",!1,u,_),h.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=s}else u(!1)}function Do(s,u){const d=new yt,_=new AbortController,P=setTimeout(()=>{_.abort(),Ie(d,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:_.signal}).then(D=>{clearTimeout(P),D.ok?Ie(d,"TestPingServer: ok",!0,u):Ie(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Ie(d,"TestPingServer: error",!1,u)})}function Ie(s,u,d,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(d)}catch{}}function rs(){this.g=new Eo}function Vo(s,u,d){const _=d||"";try{Yi(s,function(P,D){let B=P;g(P)&&(B=nn(P)),u.push(_+D+"="+encodeURIComponent(B))})}catch(P){throw u.push(_+"type="+encodeURIComponent("_badmap")),P}}function un(s){this.l=s.Ub||null,this.j=s.eb||!1}O(un,On),un.prototype.g=function(){return new wr(this.l,this.j)},un.prototype.i=function(s){return function(){return s}}({});function wr(s,u){At.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(wr,At),n=wr.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,hn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||h).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,he(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;is(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function is(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?he(this):hn(this),this.readyState==3&&is(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,he(this))},n.Qa=function(s){this.g&&(this.response=s,he(this))},n.ga=function(){this.g&&he(this)};function he(s){s.readyState=4,s.l=null,s.j=null,s.v=null,hn(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,s.push(d[0]+": "+d[1]),d=u.next();return s.join(`\r
`)};function hn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ss(s){let u="";return ft(s,function(d,_){u+=_,u+=":",u+=d,u+=`\r
`}),u}function qn(s,u,d){t:{for(_ in d){var _=!1;break t}_=!0}_||(d=ss(d),typeof s=="string"?d!=null&&encodeURIComponent(String(d)):ht(s,u,d))}function gt(s){At.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(gt,At);var No=/^https?$/i,Oo=["POST","PUT"];n=gt.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?fr(this.o):fr(mr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(D){os(this,D);return}if(s=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)d.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())d.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Oo,u,void 0))||_||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$e(this),this.u=!0,this.g.send(s),this.u=!1}catch(D){os(this,D)}};function os(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,as(s),vr(s)}function as(s){s.A||(s.A=!0,It(s,"complete"),It(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,It(this,"complete"),It(this,"abort"),vr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vr(this,!0)),gt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ls(this):this.bb())},n.bb=function(){ls(this)};function ls(s){if(s.h&&typeof l<"u"&&(!s.v[1]||ye(s)!=4||s.Z()!=2)){if(s.u&&ye(s)==4)Me(s.Ea,0,s);else if(It(s,"readystatechange"),ye(s)==4){s.h=!1;try{const B=s.Z();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var d;if(!(d=u)){var _;if(_=B===0){var P=String(s.D).match(Ji)[1]||null;!P&&h.self&&h.self.location&&(P=h.self.location.protocol.slice(0,-1)),_=!No.test(P?P.toLowerCase():"")}d=_}if(d)It(s,"complete"),It(s,"success");else{s.m=6;try{var D=2<ye(s)?s.g.statusText:""}catch{D=""}s.l=D+" ["+s.Z()+"]",as(s)}}finally{vr(s)}}}}function vr(s,u){if(s.g){$e(s);const d=s.g,_=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||It(s,"ready");try{d.onreadystatechange=_}catch{}}}function $e(s){s.I&&(h.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function ye(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Wr(u)}};function ri(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function cs(s){const u={};s=(s.g&&2<=ye(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<s.length;_++){if(U(s[_]))continue;var d=S(s[_]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[P]||[];u[P]=D,D.push(d)}R(u,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(s,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[s]||u}function us(s){this.Aa=0,this.i=[],this.j=new yt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,s),this.cb=$n("retryDelaySeedMs",1e4,s),this.Wa=$n("forwardChannelMaxRetries",2,s),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(s&&s.concurrentRequestLimit),this.Da=new rs,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=us.prototype,n.la=8,n.G=1,n.connect=function(s,u,d,_){pt(0),this.W=s,this.H=u||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=ai(this,null,this.W),br(this)};function ii(s){if(hs(s),s.G==3){var u=s.U++,d=_e(s.I);if(ht(d,"SID",s.K),ht(d,"RID",u),ht(d,"TYPE","terminate"),zn(s,d),u=new Te(s,s.j,u),u.L=2,u.v=qe(_e(d)),d=!1,h.navigator&&h.navigator.sendBeacon)try{d=h.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&h.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ge(u.j,null),u.g.ea(u.v)),u.F=Date.now(),gr(u)}ms(s)}function Er(s){s.g&&(de(s),s.g.cancel(),s.g=null)}function hs(s){Er(s),s.u&&(h.clearTimeout(s.u),s.u=null),Hn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function br(s){if(!Wi(s.h)&&!s.s){s.s=!0;var u=s.Ga;kn||Ui(),Q||(kn(),Q=!0),zr.add(u,s),s.B=0}}function Mo(s,u){return _r(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ae(A(s.Ga,s,u),ps(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const P=new Te(this,this.j,s);let D=this.o;if(this.S&&(D?(D=E(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)t:{for(var u=0,d=0;d<this.i.length;d++){e:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break e}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=d;break t}if(u===4096||d===this.i.length-1){u=d+1;break t}}u=1e3}else u=1e3;u=ds(this,P,u),d=_e(this.I),ht(d,"RID",s),ht(d,"CVER",22),this.D&&ht(d,"X-HTTP-Session-Id",this.D),zn(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(ss(D)))+"&"+u:this.m&&qn(d,this.m,D)),ei(this.h,P),this.Ua&&ht(d,"TYPE","init"),this.P?(ht(d,"$req",u),ht(d,"SID","null"),P.T=!0,me(P,d,null)):me(P,d,u),this.G=2}}else this.G==3&&(s?ze(this,s):this.i.length==0||Wi(this.h)||ze(this))};function ze(s,u){var d;u?d=u.l:d=s.U++;const _=_e(s.I);ht(_,"SID",s.K),ht(_,"RID",d),ht(_,"AID",s.T),zn(s,_),s.m&&s.o&&qn(_,s.m,s.o),d=new Te(s,s.j,d,s.B+1),s.m===null&&(d.H=s.o),u&&(s.i=u.D.concat(s.i)),u=ds(s,d,1e3),d.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ei(s.h,d),me(d,_,u)}function zn(s,u){s.H&&ft(s.H,function(d,_){ht(u,_,d)}),s.l&&Yi({},function(d,_){ht(u,_,d)})}function ds(s,u,d){d=Math.min(s.i.length,d);var _=s.l?A(s.l.Na,s.l,s):null;t:{var P=s.i;let D=-1;for(;;){const B=["count="+d];D==-1?0<d?(D=P[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let ct=!0;for(let Ct=0;Ct<d;Ct++){let nt=P[Ct].g;const kt=P[Ct].map;if(nt-=D,0>nt)D=Math.max(0,P[Ct].g-100),ct=!1;else try{Vo(kt,B,"req"+nt+"_")}catch{_&&_(kt)}}if(ct){_=B.join("&");break t}}}return s=s.i.splice(0,d),u.D=s,_}function si(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;kn||Ui(),Q||(kn(),Q=!0),zr.add(u,s),s.v=0}}function oi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ae(A(s.Fa,s),ps(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,fs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ae(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Er(this),fs(this))};function de(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function fs(s){s.g=new Te(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=_e(s.qa);ht(u,"RID","rpc"),ht(u,"SID",s.K),ht(u,"AID",s.T),ht(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&ht(u,"TO",s.ja),ht(u,"TYPE","xmlhttp"),zn(s,u),s.m&&s.o&&qn(u,s.m,s.o),s.L&&(s.g.I=s.L);var d=s.g;s=s.ia,d.L=1,d.v=qe(_e(u)),d.m=null,d.P=!0,zi(d,s)}n.Za=function(){this.C!=null&&(this.C=null,Er(this),oi(this),pt(19))};function Hn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function dn(s,u){var d=null;if(s.g==u){Hn(s),de(s),s.g=null;var _=2}else if(ti(s.h,u))d=u.D,Qi(s.h,u),_=1;else return;if(s.G!=0){if(u.o)if(_==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=s.B;_=Fe(),It(_,new pe(_,d)),br(s)}else si(s);else if(P=u.s,P==3||P==0&&0<u.X||!(_==1&&Mo(s,u)||_==2&&oi(s)))switch(d&&0<d.length&&(u=s.h,u.i=u.i.concat(d)),P){case 1:He(s,5);break;case 4:He(s,10);break;case 3:He(s,6);break;default:He(s,2)}}}function ps(s,u){let d=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(d*=2),d*u}function He(s,u){if(s.j.info("Error code "+u),u==2){var d=A(s.fb,s),_=s.Xa;const P=!_;_=new je(_||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||yr(_,"https"),qe(_),P?xo(_.toString(),d):Do(_.toString(),d)}else pt(2);s.G=0,s.l&&s.l.sa(u),ms(s),hs(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function ms(s){if(s.G=0,s.ka=[],s.l){const u=Xi(s.h);(u.length!=0||s.i.length!=0)&&(V(s.ka,u),V(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function ai(s,u,d){var _=d instanceof je?_e(d):new je(d);if(_.g!="")u&&(_.g=u+"."+_.g),on(_,_.s);else{var P=h.location;_=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new je(null);_&&yr(D,_),u&&(D.g=u),P&&on(D,P),d&&(D.l=d),_=D}return d=s.D,u=s.ya,d&&u&&ht(_,d,u),ht(_,"VER",s.la),zn(s,_),_}function Ge(s,u,d){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new gt(new un({eb:d})):new gt(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gs(){}n=gs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Tr(){}Tr.prototype.g=function(s,u){return new Yt(s,u)};function Yt(s,u){At.call(this),this.g=new us(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!U(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new fn(this)}O(Yt,At),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){ii(this.g)},Yt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var d={};d.__data__=s,s=d}else this.u&&(d={},d.__data__=nn(s),s=d);u.i.push(new To(u.Ya++,s)),u.G==3&&br(u)},Yt.prototype.N=function(){this.g.l=null,delete this.j,ii(this.g),delete this.g,Yt.aa.N.call(this)};function _s(s){Lt.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const d in u){s=d;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}O(_s,Lt);function ys(){oe.call(this),this.status=1}O(ys,oe);function fn(s){this.g=s}O(fn,gs),fn.prototype.ua=function(){It(this.g,"a")},fn.prototype.ta=function(s){It(this.g,new _s(s))},fn.prototype.sa=function(s){It(this.g,new ys)},fn.prototype.ra=function(){It(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,Mu=function(){return new Tr},Ou=function(){return Fe()},Nu=Le,sa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,ks=pr,Yr.COMPLETE="complete",Vu=Yr,Mn.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",At.prototype.listen=At.prototype.K,fi=Mn,Du=un,gt.prototype.listenOnce=gt.prototype.L,gt.prototype.getLastError=gt.prototype.Ka,gt.prototype.getLastErrorCode=gt.prototype.Ba,gt.prototype.getStatus=gt.prototype.Z,gt.prototype.getResponseJson=gt.prototype.Oa,gt.prototype.getResponseText=gt.prototype.oa,gt.prototype.send=gt.prototype.ea,gt.prototype.setWithCredentials=gt.prototype.Ha,xu=gt}).apply(typeof Is<"u"?Is:typeof self<"u"?self:typeof window<"u"?window:{});const rc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new nu("@firebase/firestore");function ui(){return nr.logLevel}function $(n,...t){if(nr.logLevel<=st.DEBUG){const e=t.map(xa);nr.debug(`Firestore (${Ur}): ${n}`,...e)}}function We(n,...t){if(nr.logLevel<=st.ERROR){const e=t.map(xa);nr.error(`Firestore (${Ur}): ${n}`,...e)}}function Vr(n,...t){if(nr.logLevel<=st.WARN){const e=t.map(xa);nr.warn(`Firestore (${Ur}): ${n}`,...e)}}function xa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n="Unexpected state"){const t=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: `+n;throw We(t),new Error(t)}function lt(n,t){n||K()}function X(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends or{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ng{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Gt.UNAUTHENTICATED))}shutdown(){}}class Og{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Mg{constructor(t){this.t=t,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=p=>this.i!==r?(r=this.i,e(p)):Promise.resolve();let o=new ke;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ke,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const p=o;t.enqueueRetryable(async()=>{await p.promise,await i(this.currentUser)})},h=p=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(p=>h(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ke)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string"),new Lu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string"),new Gt(t)}}class Lg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Lg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ug{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,$("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(lt(typeof e.token=="string"),this.R=e.token,new Bg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=jg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function at(n,t){return n<t?-1:n>t?1:0}function Nr(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Dt.fromMillis(Date.now())}static fromDate(t){return Dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Dt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?at(this.nanoseconds,t.nanoseconds):at(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new Dt(0,0))}static max(){return new W(new Dt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,r){e===void 0?e=0:e>t.length&&K(),r===void 0?r=t.length-e:r>t.length-e&&K(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ii.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),l=e.get(i);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class mt extends Ii{construct(t,e,r){return new mt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new mt(e)}static emptyPath(){return new mt([])}}const qg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Ii{construct(t,e,r){return new Ut(t,e,r)}static isValidIdentifier(t){return qg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[i+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=p,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ut(e)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(mt.fromString(t))}static fromName(t){return new G(mt.fromString(t).popFirst(5))}static empty(){return new G(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return mt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new mt(t.slice()))}}function $g(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Dt(e+1,0):new Dt(e,r));return new Tn(i,G.empty(),t)}function zg(n){return new Tn(n.readTime,n.key,-1)}class Tn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Tn(W.min(),G.empty(),-1)}static max(){return new Tn(W.max(),G.empty(),-1)}}function Hg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:at(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==Gg)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,r)=>{e(t)})}static reject(t){return new F((e,r)=>{r(t)})}static waitFor(t){return new F((e,r)=>{let i=0,o=0,l=!1;t.forEach(h=>{++i,h.next(()=>{++o,l&&o===i&&e()},p=>r(p))}),l=!0,o===i&&e()})}static or(t){let e=F.resolve(!1);for(const r of t)e=e.next(i=>i?F.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new F((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let p=0;p<o;p++){const g=p;e(t[g]).next(y=>{l[g]=y,++h,h===o&&r(l)},y=>i(y))}})}static doWhile(t,e){return new F((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Wg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Vi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Da.oe=-1;function Ni(n){return n==null}function Bs(n){return n===0&&1/n==-1/0}function Qg(n){return typeof n=="number"&&Number.isInteger(n)&&!Bs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function lr(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Bu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.comparator=t,this.root=e||Bt.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rs(this.root,t,this.comparator,!0)}}class Rs{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??Bt.RED,this.left=i??Bt.EMPTY,this.right=o??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new Bt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,r,i,o){return this}insert(t,e,r){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sc(this.data.getIterator())}getIteratorFrom(t){return new sc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class sc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.fields=t,t.sort(Ut.comparator)}static empty(){return new le([])}unionWith(t){let e=new jt(Ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new le(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Nr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Uu("Invalid base64 string: "+o):o}}(t);return new Kt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new Kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return at(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const Xg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(n){if(lt(!!n),typeof n=="string"){let t=0;const e=Xg.exec(n);if(lt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rr(n){return typeof n=="string"?Kt.fromBase64String(n):Kt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Na(n){const t=n.mapValue.fields.__previous_value__;return Va(t)?Na(t):t}function Ri(n){const t=An(n.mapValue.fields.__local_write_time__.timestampValue);return new Dt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,e,r,i,o,l,h,p,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=g}}class Si{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Si&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ir(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Va(n)?4:Jg(n)?9007199254740991:10:K()}function De(n,t){if(n===t)return!0;const e=ir(n);if(e!==ir(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ri(n).isEqual(Ri(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=An(i.timestampValue),h=An(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return rr(i.bytesValue).isEqual(rr(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return St(i.geoPointValue.latitude)===St(o.geoPointValue.latitude)&&St(i.geoPointValue.longitude)===St(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return St(i.integerValue)===St(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=St(i.doubleValue),h=St(o.doubleValue);return l===h?Bs(l)===Bs(h):isNaN(l)&&isNaN(h)}return!1}(n,t);case 9:return Nr(n.arrayValue.values||[],t.arrayValue.values||[],De);case 10:return function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(ic(l)!==ic(h))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(h[p]===void 0||!De(l[p],h[p])))return!1;return!0}(n,t);default:return K()}}function Pi(n,t){return(n.values||[]).find(e=>De(e,t))!==void 0}function Or(n,t){if(n===t)return 0;const e=ir(n),r=ir(t);if(e!==r)return at(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return at(n.booleanValue,t.booleanValue);case 2:return function(o,l){const h=St(o.integerValue||o.doubleValue),p=St(l.integerValue||l.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1}(n,t);case 3:return oc(n.timestampValue,t.timestampValue);case 4:return oc(Ri(n),Ri(t));case 5:return at(n.stringValue,t.stringValue);case 6:return function(o,l){const h=rr(o),p=rr(l);return h.compareTo(p)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const h=o.split("/"),p=l.split("/");for(let g=0;g<h.length&&g<p.length;g++){const y=at(h[g],p[g]);if(y!==0)return y}return at(h.length,p.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const h=at(St(o.latitude),St(l.latitude));return h!==0?h:at(St(o.longitude),St(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const h=o.values||[],p=l.values||[];for(let g=0;g<h.length&&g<p.length;++g){const y=Or(h[g],p[g]);if(y)return y}return at(h.length,p.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===Ss.mapValue&&l===Ss.mapValue)return 0;if(o===Ss.mapValue)return 1;if(l===Ss.mapValue)return-1;const h=o.fields||{},p=Object.keys(h),g=l.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let v=0;v<p.length&&v<y.length;++v){const A=at(p[v],y[v]);if(A!==0)return A;const k=Or(h[p[v]],g[y[v]]);if(k!==0)return k}return at(p.length,y.length)}(n.mapValue,t.mapValue);default:throw K()}}function oc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return at(n,t);const e=An(n),r=An(t),i=at(e.seconds,r.seconds);return i!==0?i:at(e.nanos,r.nanos)}function Mr(n){return oa(n)}function oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=An(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return rr(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return G.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=oa(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${oa(e.fields[l])}`;return i+"}"}(n.mapValue):K()}function aa(n){return!!n&&"integerValue"in n}function Oa(n){return!!n&&"arrayValue"in n}function ac(n){return!!n&&"nullValue"in n}function lc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xs(n){return!!n&&"mapValue"in n}function yi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return lr(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=yi(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=yi(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.value=t}static empty(){return new Zt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!xs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=yi(e)}setAll(t){let e=Ut.emptyPath(),r={},i=[];t.forEach((l,h)=>{if(!e.isImmediateParentOf(h)){const p=this.getFieldsMap(e);this.applyChanges(p,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=yi(l):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());xs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return De(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];xs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){lr(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Zt(yi(this.value))}}function ju(n){const t=[];return lr(n.fields,(e,r)=>{const i=new Ut([e]);if(xs(r)){const o=ju(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new le(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new Mt(t,0,W.min(),W.min(),W.min(),Zt.empty(),0)}static newFoundDocument(t,e,r,i){return new Mt(t,1,e,W.min(),r,i,0)}static newNoDocument(t,e){return new Mt(t,2,e,W.min(),W.min(),Zt.empty(),0)}static newUnknownDocument(t,e){return new Mt(t,3,e,W.min(),W.min(),Zt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e){this.position=t,this.inclusive=e}}function cc(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=G.comparator(G.fromName(l.referenceValue),e.key):r=Or(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!De(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{}class xt extends qu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new e_(t,e,r):e==="array-contains"?new i_(t,r):e==="in"?new s_(t,r):e==="not-in"?new o_(t,r):e==="array-contains-any"?new a_(t,r):new xt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new n_(t,r):new r_(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Or(e,this.value)):e!==null&&ir(this.value)===ir(e)&&this.matchesComparison(Or(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ve extends qu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ve(t,e)}matches(t){return $u(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $u(n){return n.op==="and"}function zu(n){return t_(n)&&$u(n)}function t_(n){for(const t of n.filters)if(t instanceof Ve)return!1;return!0}function la(n){if(n instanceof xt)return n.field.canonicalString()+n.op.toString()+Mr(n.value);if(zu(n))return n.filters.map(t=>la(t)).join(",");{const t=n.filters.map(e=>la(e)).join(",");return`${n.op}(${t})`}}function Hu(n,t){return n instanceof xt?function(r,i){return i instanceof xt&&r.op===i.op&&r.field.isEqual(i.field)&&De(r.value,i.value)}(n,t):n instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,h)=>o&&Hu(l,i.filters[h]),!0):!1}(n,t):void K()}function Gu(n){return n instanceof xt?function(e){return`${e.field.canonicalString()} ${e.op} ${Mr(e.value)}`}(n):n instanceof Ve?function(e){return e.op.toString()+" {"+e.getFilters().map(Gu).join(" ,")+"}"}(n):"Filter"}class e_ extends xt{constructor(t,e,r){super(t,e,r),this.key=G.fromName(r.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class n_ extends xt{constructor(t,e){super(t,"in",e),this.keys=Ku("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class r_ extends xt{constructor(t,e){super(t,"not-in",e),this.keys=Ku("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ku(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>G.fromName(r.referenceValue))}class i_ extends xt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Oa(e)&&Pi(e.arrayValue,this.value)}}class s_ extends xt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Pi(this.value.arrayValue,e)}}class o_ extends xt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Pi(this.value.arrayValue,e)}}class a_ extends xt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Oa(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Pi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.ue=null}}function hc(n,t=null,e=[],r=[],i=null,o=null,l=null){return new l_(n,t,e,r,i,o,l)}function Ma(n){const t=X(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>la(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ni(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Mr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Mr(r)).join(",")),t.ue=e}return t.ue}function La(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Zg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Hu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!uc(n.startAt,t.startAt)&&uc(n.endAt,t.endAt)}function ca(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function c_(n,t,e,r,i,o,l,h){return new Ys(n,t,e,r,i,o,l,h)}function Fa(n){return new Ys(n)}function dc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function u_(n){return n.collectionGroup!==null}function wi(n){const t=X(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new jt(Ut.comparator);return l.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(h=h.add(g.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new js(o,r))}),e.has(Ut.keyField().canonicalString())||t.ce.push(new js(Ut.keyField(),r))}return t.ce}function xe(n){const t=X(n);return t.le||(t.le=h_(t,wi(n))),t.le}function h_(n,t){if(n.limitType==="F")return hc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new js(i.field,o)});const e=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return hc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ua(n,t,e){return new Ys(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Js(n,t){return La(xe(n),xe(t))&&n.limitType===t.limitType}function Wu(n){return`${Ma(xe(n))}|lt:${n.limitType}`}function Rr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Gu(i)).join(", ")}]`),Ni(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Mr(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Mr(i)).join(",")),`Target(${r})`}(xe(n))}; limitType=${n.limitType})`}function Zs(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):G.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of wi(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,h,p){const g=cc(l,h,p);return l.inclusive?g<=0:g<0}(r.startAt,wi(r),i)||r.endAt&&!function(l,h,p){const g=cc(l,h,p);return l.inclusive?g>=0:g>0}(r.endAt,wi(r),i))}(n,t)}function d_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qu(n){return(t,e)=>{let r=!1;for(const i of wi(n)){const o=f_(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function f_(n,t,e){const r=n.field.isKeyField()?G.comparator(t.key,e.key):function(o,l,h){const p=l.data.field(o),g=h.data.field(o);return p!==null&&g!==null?Or(p,g):K()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){lr(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Bu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=new wt(G.comparator);function Qe(){return p_}const Xu=new wt(G.comparator);function pi(...n){let t=Xu;for(const e of n)t=t.insert(e.key,e);return t}function Yu(n){let t=Xu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Yn(){return vi()}function Ju(){return vi()}function vi(){return new jr(n=>n.toString(),(n,t)=>n.isEqual(t))}const m_=new wt(G.comparator),g_=new jt(G.comparator);function et(...n){let t=g_;for(const e of n)t=t.add(e);return t}const __=new jt(at);function y_(){return __}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bs(t)?"-0":t}}function th(n){return{integerValue:""+n}}function w_(n,t){return Qg(t)?th(t):Zu(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this._=void 0}}function v_(n,t,e){return n instanceof qs?function(i,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Va(o)&&(o=Na(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof Ci?nh(n,t):n instanceof ki?rh(n,t):function(i,o){const l=eh(i,o),h=fc(l)+fc(i.Pe);return aa(l)&&aa(i.Pe)?th(h):Zu(i.serializer,h)}(n,t)}function E_(n,t,e){return n instanceof Ci?nh(n,t):n instanceof ki?rh(n,t):e}function eh(n,t){return n instanceof $s?function(r){return aa(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class qs extends to{}class Ci extends to{constructor(t){super(),this.elements=t}}function nh(n,t){const e=ih(t);for(const r of n.elements)e.some(i=>De(i,r))||e.push(r);return{arrayValue:{values:e}}}class ki extends to{constructor(t){super(),this.elements=t}}function rh(n,t){let e=ih(t);for(const r of n.elements)e=e.filter(i=>!De(i,r));return{arrayValue:{values:e}}}class $s extends to{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function fc(n){return St(n.integerValue||n.doubleValue)}function ih(n){return Oa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function b_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Ci&&i instanceof Ci||r instanceof ki&&i instanceof ki?Nr(r.elements,i.elements,De):r instanceof $s&&i instanceof $s?De(r.Pe,i.Pe):r instanceof qs&&i instanceof qs}(n.transform,t.transform)}class T_{constructor(t,e){this.version=t,this.transformResults=e}}class te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ds(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class eo{}function sh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new no(n.key,te.none()):new Oi(n.key,n.data,te.none());{const e=n.data,r=Zt.empty();let i=new jt(Ut.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new Sn(n.key,r,new le(i.toArray()),te.none())}}function A_(n,t,e){n instanceof Oi?function(i,o,l){const h=i.value.clone(),p=mc(i.fieldTransforms,o,l.transformResults);h.setAll(p),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):n instanceof Sn?function(i,o,l){if(!Ds(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=mc(i.fieldTransforms,o,l.transformResults),p=o.data;p.setAll(oh(i)),p.setAll(h),o.convertToFoundDocument(l.version,p).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Ei(n,t,e,r){return n instanceof Oi?function(o,l,h,p){if(!Ds(o.precondition,l))return h;const g=o.value.clone(),y=gc(o.fieldTransforms,p,l);return g.setAll(y),l.convertToFoundDocument(l.version,g).setHasLocalMutations(),null}(n,t,e,r):n instanceof Sn?function(o,l,h,p){if(!Ds(o.precondition,l))return h;const g=gc(o.fieldTransforms,p,l),y=l.data;return y.setAll(oh(o)),y.setAll(g),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,l,h){return Ds(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,t,e)}function I_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=eh(r.transform,i||null);o!=null&&(e===null&&(e=Zt.empty()),e.set(r.field,o))}return e||null}function pc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Nr(r,i,(o,l)=>b_(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Oi extends eo{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sn extends eo{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function oh(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function mc(n,t,e){const r=new Map;lt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,E_(l,h,e[i]))}return r}function gc(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,v_(o,l,t))}return r}class no extends eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ah extends eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&A_(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ei(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ei(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ju();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const p=sh(l,h);p!==null&&r.set(i.key,p),l.isValidDocument()||l.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),et())}isEqual(t){return this.batchId===t.batchId&&Nr(this.mutations,t.mutations,(e,r)=>pc(e,r))&&Nr(this.baseMutations,t.baseMutations,(e,r)=>pc(e,r))}}class Ba{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){lt(t.mutations.length===r.length);let i=function(){return m_}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Ba(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,rt;function lh(n){switch(n){default:return K();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function ch(n){if(n===void 0)return We("GRPC error has no .code"),M.UNKNOWN;switch(n){case Rt.OK:return M.OK;case Rt.CANCELLED:return M.CANCELLED;case Rt.UNKNOWN:return M.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return M.INTERNAL;case Rt.UNAVAILABLE:return M.UNAVAILABLE;case Rt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Rt.NOT_FOUND:return M.NOT_FOUND;case Rt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Rt.ABORTED:return M.ABORTED;case Rt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Rt.DATA_LOSS:return M.DATA_LOSS;default:return K()}}(rt=Rt||(Rt={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Zn([4294967295,4294967295],0);function _c(n){const t=C_().encode(n),e=new ku;return e.update(t),new Uint8Array(e.digest())}function yc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zn([e,r],0),new Zn([i,o],0)]}class Ua{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new mi(`Invalid padding: ${e}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new mi(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Zn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Zn.fromNumber(r)));return i.compare(k_)===1&&(i=new Zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=_c(t),[r,i]=yc(e);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);if(!this.de(l))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),l=new Ua(o,i,e);return r.forEach(h=>l.insert(h)),l}insert(t){if(this.Ie===0)return;const e=_c(t),[r,i]=yc(e);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);this.Ae(l)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Mi.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ro(W.min(),i,new wt(at),Qe(),et())}}class Mi{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Mi(r,e,et(),et(),et())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class uh{constructor(t,e){this.targetId=t,this.me=e}}class hh{constructor(t,e,r=Kt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class wc{constructor(){this.fe=0,this.ge=Ec(),this.pe=Kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=et(),e=et(),r=et();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Mi(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Ec()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,lt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class x_{constructor(t){this.Le=t,this.Be=new Map,this.ke=Qe(),this.qe=vc(),this.Qe=new wt(at)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:K()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(ca(o))if(r===0){const l=new G(o.path);this.Ue(e,l,Mt.newNoDocument(l,W.min()))}else lt(r===1);else{const l=this.Ye(e);if(l!==r){const h=this.Ze(t),p=h?this.Xe(h,t,l):1;if(p!==0){this.je(e);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,g)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let l,h;try{l=rr(r).toUint8Array()}catch(p){if(p instanceof Uu)return Vr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new Ua(l,i,o)}catch(p){return Vr(p instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.Ie===0?null:h}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const l=this.Le.tt(),h=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,l)=>{const h=this.Je(l);if(h){if(o.current&&ca(h.target)){const p=new G(h.target.path);this.ke.get(p)!==null||this.it(l,p)||this.Ue(l,p,Mt.newNoDocument(p,t))}o.be&&(e.set(l,o.Ce()),o.ve())}});let r=et();this.qe.forEach((o,l)=>{let h=!0;l.forEachWhile(p=>{const g=this.Je(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.ke.forEach((o,l)=>l.setReadTime(t));const i=new ro(t,e,this.Qe,this.ke,r);return this.ke=Qe(),this.qe=vc(),this.Qe=new wt(at),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new wc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new jt(at),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new wc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vc(){return new wt(G.comparator)}function Ec(){return new wt(G.comparator)}const D_={asc:"ASCENDING",desc:"DESCENDING"},V_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},N_={and:"AND",or:"OR"};class O_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ha(n,t){return n.useProto3Json||Ni(t)?t:{value:t}}function zs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function M_(n,t){return zs(n,t.toTimestamp())}function ce(n){return lt(!!n),W.fromTimestamp(function(e){const r=An(e);return new Dt(r.seconds,r.nanos)}(n))}function ja(n,t){return da(n,t).canonicalString()}function da(n,t){const e=function(i){return new mt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function fh(n){const t=mt.fromString(n);return lt(wh(t)),t}function Hs(n,t){return ja(n.databaseId,t.path)}function bi(n,t){const e=fh(t);if(e.get(1)!==n.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new G(mh(e))}function ph(n,t){return ja(n.databaseId,t)}function L_(n){const t=fh(n);return t.length===4?mt.emptyPath():mh(t)}function fa(n){return new mt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mh(n){return lt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function bc(n,t,e){return{name:Hs(n,t),fields:e.value.mapValue.fields}}function F_(n,t){return"found"in t?function(r,i){lt(!!i.found),i.found.name,i.found.updateTime;const o=bi(r,i.found.name),l=ce(i.found.updateTime),h=i.found.createTime?ce(i.found.createTime):W.min(),p=new Zt({mapValue:{fields:i.found.fields}});return Mt.newFoundDocument(o,l,h,p)}(n,t):"missing"in t?function(r,i){lt(!!i.missing),lt(!!i.readTime);const o=bi(r,i.missing),l=ce(i.readTime);return Mt.newNoDocument(o,l)}(n,t):K()}function B_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(g,y){return g.useProto3Json?(lt(y===void 0||typeof y=="string"),Kt.fromBase64String(y||"")):(lt(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Kt.fromUint8Array(y||new Uint8Array))}(n,t.targetChange.resumeToken),l=t.targetChange.cause,h=l&&function(g){const y=g.code===void 0?M.UNKNOWN:ch(g.code);return new z(y,g.message||"")}(l);e=new hh(r,i,o,h||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=bi(n,r.document.name),o=ce(r.document.updateTime),l=r.document.createTime?ce(r.document.createTime):W.min(),h=new Zt({mapValue:{fields:r.document.fields}}),p=Mt.newFoundDocument(i,o,l,h),g=r.targetIds||[],y=r.removedTargetIds||[];e=new Vs(g,y,p.key,p)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=bi(n,r.document),o=r.readTime?ce(r.readTime):W.min(),l=Mt.newNoDocument(i,o),h=r.removedTargetIds||[];e=new Vs([],h,l.key,l)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=bi(n,r.document),o=r.removedTargetIds||[];e=new Vs([],o,i,null)}else{if(!("filter"in t))return K();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,l=new P_(i,o),h=r.targetId;e=new uh(h,l)}}return e}function gh(n,t){let e;if(t instanceof Oi)e={update:bc(n,t.key,t.value)};else if(t instanceof no)e={delete:Hs(n,t.key)};else if(t instanceof Sn)e={update:bc(n,t.key,t.data),updateMask:W_(t.fieldMask)};else{if(!(t instanceof ah))return K();e={verify:Hs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const h=l.transform;if(h instanceof qs)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Ci)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof ki)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof $s)return{fieldPath:l.field.canonicalString(),increment:h.Pe};throw K()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:M_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K()}(n,t.precondition)),e}function U_(n,t){return n&&n.length>0?(lt(t!==void 0),n.map(e=>function(i,o){let l=i.updateTime?ce(i.updateTime):ce(o);return l.isEqual(W.min())&&(l=ce(o)),new T_(l,i.transformResults||[])}(e,t))):[]}function j_(n,t){return{documents:[ph(n,t.path)]}}function q_(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ph(n,i);const o=function(g){if(g.length!==0)return yh(Ve.create(g,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const l=function(g){if(g.length!==0)return g.map(y=>function(A){return{field:Sr(A.field),direction:H_(A.dir)}}(y))}(t.orderBy);l&&(e.structuredQuery.orderBy=l);const h=ha(n,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{_t:e,parent:i}}function $_(n){let t=L_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){lt(r===1);const y=e.from[0];y.allDescendants?i=y.collectionId:t=t.child(y.collectionId)}let o=[];e.where&&(o=function(v){const A=_h(v);return A instanceof Ve&&zu(A)?A.getFilters():[A]}(e.where));let l=[];e.orderBy&&(l=function(v){return v.map(A=>function(O){return new js(Pr(O.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(e.orderBy));let h=null;e.limit&&(h=function(v){let A;return A=typeof v=="object"?v.value:v,Ni(A)?null:A}(e.limit));let p=null;e.startAt&&(p=function(v){const A=!!v.before,k=v.values||[];return new Us(k,A)}(e.startAt));let g=null;return e.endAt&&(g=function(v){const A=!v.before,k=v.values||[];return new Us(k,A)}(e.endAt)),c_(t,i,l,o,h,"F",p,g)}function z_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function _h(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Pr(e.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pr(e.unaryFilter.field);return xt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pr(e.unaryFilter.field);return xt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Pr(e.unaryFilter.field);return xt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(e){return xt.create(Pr(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ve.create(e.compositeFilter.filters.map(r=>_h(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(n):K()}function H_(n){return D_[n]}function G_(n){return V_[n]}function K_(n){return N_[n]}function Sr(n){return{fieldPath:n.canonicalString()}}function Pr(n){return Ut.fromServerFormat(n.fieldPath)}function yh(n){return n instanceof xt?function(e){if(e.op==="=="){if(lc(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NAN"}};if(ac(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(lc(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NAN"}};if(ac(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(e.field),op:G_(e.op),value:e.value}}}(n):n instanceof Ve?function(e){const r=e.getFilters().map(i=>yh(i));return r.length===1?r[0]:{compositeFilter:{op:K_(e.op),filters:r}}}(n):K()}function W_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function wh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e,r,i,o=W.min(),l=W.min(),h=Kt.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(t){return new yn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(t){this.ct=t}}function X_(n){const t=$_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ua(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this._n=new J_}addToCollectionParentIndex(t,e){return this._n.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(Tn.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(Tn.min())}updateCollectionGroup(t,e,r){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class J_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new jt(mt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new jt(mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Lr(0)}static Ln(){return new Lr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.changes=new jr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?F.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Ei(r.mutation,i,le.empty(),Dt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,et()).next(()=>r))}getLocalViewOfDocuments(t,e,r=et()){const i=Yn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=pi();return o.forEach((h,p)=>{l=l.insert(h,p.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=Yn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,et()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,h)=>{e.set(l,h)})})}computeViews(t,e,r,i){let o=Qe();const l=vi(),h=function(){return vi()}();return e.forEach((p,g)=>{const y=r.get(g.key);i.has(g.key)&&(y===void 0||y.mutation instanceof Sn)?o=o.insert(g.key,g):y!==void 0?(l.set(g.key,y.mutation.getFieldMask()),Ei(y.mutation,g,y.mutation.getFieldMask(),Dt.now())):l.set(g.key,le.empty())}),this.recalculateAndSaveOverlays(t,o).next(p=>(p.forEach((g,y)=>l.set(g,y)),e.forEach((g,y)=>{var v;return h.set(g,new ty(y,(v=l.get(g))!==null&&v!==void 0?v:null))}),h))}recalculateAndSaveOverlays(t,e){const r=vi();let i=new wt((l,h)=>l-h),o=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const h of l)h.keys().forEach(p=>{const g=e.get(p);if(g===null)return;let y=r.get(p)||le.empty();y=h.applyToLocalView(g,y),r.set(p,y);const v=(i.get(h.batchId)||et()).add(p);i=i.insert(h.batchId,v)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),g=p.key,y=p.value,v=Ju();y.forEach(A=>{if(!o.has(A)){const k=sh(e.get(A),r.get(A));k!==null&&v.set(A,k),o=o.add(A)}}),l.push(this.documentOverlayCache.saveOverlays(t,g,v))}return F.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(l){return G.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):u_(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):F.resolve(Yn());let h=-1,p=o;return l.next(g=>F.forEach(g,(y,v)=>(h<v.largestBatchId&&(h=v.largestBatchId),o.get(y)?F.resolve():this.remoteDocumentCache.getEntry(t,y).next(A=>{p=p.insert(y,A)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,p,g,et())).next(y=>({batchId:h,changes:Yu(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next(r=>{let i=pi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=pi();return this.indexManager.getCollectionParents(t,o).next(h=>F.forEach(h,p=>{const g=function(v,A){return new Ys(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,p.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,r,i).next(y=>{y.forEach((v,A)=>{l=l.insert(v,A)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((p,g)=>{const y=g.getKey();l.get(y)===null&&(l=l.insert(y,Mt.newInvalidDocument(y)))});let h=pi();return l.forEach((p,g)=>{const y=o.get(p);y!==void 0&&Ei(y.mutation,g,le.empty(),Dt.now()),Zs(e,g)&&(h=h.insert(p,g))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return F.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ce(i.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:X_(i.bundledQuery),readTime:ce(i.readTime)}}(e)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.overlays=new wt(G.comparator),this.hr=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Yn();return F.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),F.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(t,e,r){const i=Yn(),o=e.length+1,l=new G(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const p=h.getNext().value,g=p.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&p.largestBatchId>r&&i.set(p.getKey(),p)}return F.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new wt((g,y)=>g-y);const l=this.overlays.getIterator();for(;l.hasNext();){const g=l.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let y=o.get(g.largestBatchId);y===null&&(y=Yn(),o=o.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const h=Yn(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>h.set(g,y)),!(h.size()>=i)););return F.resolve(h)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new S_(e,r));let o=this.hr.get(e);o===void 0&&(o=et(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.Pr=new jt(Ot.Ir),this.Tr=new jt(Ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Ot(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Ot(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new G(new mt([])),r=new Ot(e,t),i=new Ot(e,t+1),o=[];return this.Tr.forEachInRange([r,i],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new G(new mt([])),r=new Ot(e,t),i=new Ot(e,t+1);let o=et();return this.Tr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new Ot(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return G.comparator(t.key,e.key)||at(t.pr,e.pr)}static Er(t,e){return at(t.pr,e.pr)||G.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new jt(Ot.Ir)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new R_(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.wr=this.wr.add(new Ot(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return F.resolve(l)}lookupMutationBatch(t,e){return F.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Ot(e,0),i=new Ot(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],l=>{const h=this.Sr(l.pr);o.push(h)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new jt(at);return e.forEach(i=>{const o=new Ot(i,0),l=new Ot(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],h=>{r=r.add(h.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;G.isDocumentKey(o)||(o=o.child(""));const l=new Ot(new G(o),0);let h=new jt(at);return this.wr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===i&&(h=h.add(p.pr)),!0)},l),F.resolve(this.Dr(h))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){lt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(e.mutations,i=>{const o=new Ot(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Ot(e,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t){this.vr=t,this.docs=function(){return new wt(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return F.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(e))}getEntries(t,e){let r=Qe();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Mt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Qe();const l=e.path,h=new G(l.child("")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!l.isPrefixOf(g.path))break;g.path.length>l.length+1||Hg(zg(y),r)<=0||(i.has(y.key)||Zs(e,y))&&(o=o.insert(y.key,y.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(t,e,r,i){K()}Fr(t,e){return F.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new oy(this)}getSize(t){return F.resolve(this.size)}}class oy extends Z_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),F.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t){this.persistence=t,this.Mr=new jr(e=>Ma(e),La),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Or=0,this.Nr=new qa,this.targetCount=0,this.Lr=Lr.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),F.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Lr(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.qn(e),F.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),F.waitFor(o).next(()=>i)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return F.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),F.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),F.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return F.resolve(r)}containsKey(t,e){return F.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t,e){this.Br={},this.overlays={},this.kr=new Da(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new ay(this),this.indexManager=new Y_,this.remoteDocumentCache=function(i){return new sy(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Q_(e),this.$r=new ny(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ry,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new iy(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){$("MemoryPersistence","Starting transaction:",t);const i=new cy(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class cy extends Kg{constructor(t){super(),this.currentSequenceNumber=t}}class $a{constructor(t){this.persistence=t,this.zr=new qa,this.jr=null}static Hr(t){return new $a(t)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),F.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),F.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,W.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return F.or([()=>F.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=et(),i=et();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new za(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Xf()?8:Wg(Wf())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new uy;return this.Ji(t,e,l).next(h=>{if(o.result=h,this.Ui)return this.Yi(t,e,l,h.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(ui()<=st.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Rr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(ui()<=st.DEBUG&&$("QueryEngine","Query:",Rr(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ui()<=st.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Rr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xe(e))):F.resolve())}ji(t,e){if(dc(e))return F.resolve(null);let r=xe(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ua(e,null,"F"),r=xe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=et(...o);return this.zi.getDocuments(t,l).next(h=>this.indexManager.getMinOffset(t,r).next(p=>{const g=this.Zi(e,h);return this.Xi(e,g,l,p.readTime)?this.ji(t,ua(e,null,"F")):this.es(t,g,e,p)}))})))}Hi(t,e,r,i){return dc(e)||i.isEqual(W.min())?F.resolve(null):this.zi.getDocuments(t,r).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,r,i)?F.resolve(null):(ui()<=st.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rr(e)),this.es(t,l,e,$g(i,-1)).next(h=>h))})}Zi(t,e){let r=new jt(Qu(t));return e.forEach((i,o)=>{Zs(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return ui()<=st.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Rr(e)),this.zi.getDocumentsMatchingQuery(t,e,Tn.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new wt(at),this.rs=new jr(o=>Ma(o),La),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ey(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function fy(n,t,e,r){return new dy(n,t,e,r)}async function vh(n,t){const e=X(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],h=[];let p=et();for(const g of i){l.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of o){h.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return e.localDocuments.getDocuments(r,p).next(g=>({us:g,removedBatchIds:l,addedBatchIds:h}))})})}function py(n,t){const e=X(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(h,p,g,y){const v=g.batch,A=v.keys();let k=F.resolve();return A.forEach(O=>{k=k.next(()=>y.getEntry(p,O)).next(L=>{const V=g.docVersions.get(O);lt(V!==null),L.version.compareTo(V)<0&&(v.applyToRemoteDocument(L,g),L.isValidDocument()&&(L.setReadTime(g.commitVersion),y.addEntry(L)))})}),k.next(()=>h.mutationQueue.removeMutationBatch(p,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let p=et();for(let g=0;g<h.mutationResults.length;++g)h.mutationResults[g].transformResults.length>0&&(p=p.add(h.batch.mutations[g].key));return p}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Eh(n){const t=X(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function my(n,t){const e=X(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const h=[];t.targetChanges.forEach((y,v)=>{const A=i.get(v);if(!A)return;h.push(e.Qr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>e.Qr.addMatchingKeys(o,y.addedDocuments,v)));let k=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?k=k.withResumeToken(Kt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):y.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(y.resumeToken,r)),i=i.insert(v,k),function(L,V,q){return L.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(A,k,y)&&h.push(e.Qr.updateTargetData(o,k))});let p=Qe(),g=et();if(t.documentUpdates.forEach(y=>{t.resolvedLimboDocuments.has(y)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,y))}),h.push(gy(o,l,t.documentUpdates).next(y=>{p=y.cs,g=y.ls})),!r.isEqual(W.min())){const y=e.Qr.getLastRemoteSnapshotVersion(o).next(v=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(y)}return F.waitFor(h).next(()=>l.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,p,g)).next(()=>p)}).then(o=>(e.ns=i,o))}function gy(n,t,e){let r=et(),i=et();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let l=Qe();return e.forEach((h,p)=>{const g=o.get(h);p.isFoundDocument()!==g.isFoundDocument()&&(i=i.add(h)),p.isNoDocument()&&p.version.isEqual(W.min())?(t.removeEntry(h,p.readTime),l=l.insert(h,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),l=l.insert(h,p)):$("LocalStore","Ignoring outdated watch update for ",h,". Current version:",g.version," Watch version:",p.version)}),{cs:l,ls:i}})}function _y(n,t){const e=X(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function yy(n,t){const e=X(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,F.resolve(i)):e.Qr.allocateTargetId(r).next(l=>(i=new yn(t,l,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function pa(n,t,e){const r=X(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!Vi(l))throw l;$("LocalStore",`Failed to update sequence numbers for target ${t}: ${l}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Tc(n,t,e){const r=X(n);let i=W.min(),o=et();return r.persistence.runTransaction("Execute query","readwrite",l=>function(p,g,y){const v=X(p),A=v.rs.get(y);return A!==void 0?F.resolve(v.ns.get(A)):v.Qr.getTargetData(g,y)}(r,l,xe(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(l,h.targetId).next(p=>{o=p})}).next(()=>r.ts.getDocumentsMatchingQuery(l,t,e?i:W.min(),e?o:et())).next(h=>(wy(r,d_(t),h),{documents:h,hs:o})))}function wy(n,t,e){let r=n.ss.get(t)||W.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Ac{constructor(){this.activeTargetIds=y_()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vy{constructor(){this.no=new Ac,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ac,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps=null;function Ko(){return Ps===null?Ps=function(){return 268435456+Math.round(2147483648*Math.random())}():Ps++,"0x"+Ps.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection";class Ay extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,l){const h=Ko(),p=this.vo(e,r.toUriEncodedString());$("RestConnection",`Sending RPC '${e}' ${h}:`,p,i);const g={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(g,o,l),this.Mo(e,p,g,i).then(y=>($("RestConnection",`Received RPC '${e}' ${h}: `,y),y),y=>{throw Vr("RestConnection",`RPC '${e}' ${h} failed with error: `,y,"url: ",p,"request:",i),y})}xo(e,r,i,o,l,h){return this.Co(e,r,i,o,l)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ur}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}vo(e,r){const i=by[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=Ko();return new Promise((l,h)=>{const p=new xu;p.setWithCredentials(!0),p.listenOnce(Vu.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ks.NO_ERROR:const y=p.getResponseJson();$(Ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(y)),l(y);break;case ks.TIMEOUT:$(Ht,`RPC '${t}' ${o} timed out`),h(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case ks.HTTP_ERROR:const v=p.getStatus();if($(Ht,`RPC '${t}' ${o} failed with status:`,v,"response text:",p.getResponseText()),v>0){let A=p.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const O=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(q)>=0?q:M.UNKNOWN}(k.status);h(new z(O,k.message))}else h(new z(M.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new z(M.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(Ht,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(i);$(Ht,`RPC '${t}' ${o} sending request:`,i),p.send(e,"POST",g,r,15)})}Oo(t,e,r){const i=Ko(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Mu(),h=Ou(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.xmlHttpFactory=new Du({})),this.Fo(p.initMessageHeaders,e,r),p.encodeInitMessageHeaders=!0;const y=o.join("");$(Ht,`Creating RPC '${t}' stream ${i}: ${y}`,p);const v=l.createWebChannel(y,p);let A=!1,k=!1;const O=new Ty({lo:V=>{k?$(Ht,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(A||($(Ht,`Opening RPC '${t}' stream ${i} transport.`),v.open(),A=!0),$(Ht,`RPC '${t}' stream ${i} sending:`,V),v.send(V))},ho:()=>v.close()}),L=(V,q,U)=>{V.listen(q,H=>{try{U(H)}catch(Y){setTimeout(()=>{throw Y},0)}})};return L(v,fi.EventType.OPEN,()=>{k||($(Ht,`RPC '${t}' stream ${i} transport opened.`),O.mo())}),L(v,fi.EventType.CLOSE,()=>{k||(k=!0,$(Ht,`RPC '${t}' stream ${i} transport closed`),O.po())}),L(v,fi.EventType.ERROR,V=>{k||(k=!0,Vr(Ht,`RPC '${t}' stream ${i} transport errored:`,V),O.po(new z(M.UNAVAILABLE,"The operation could not be completed")))}),L(v,fi.EventType.MESSAGE,V=>{var q;if(!k){const U=V.data[0];lt(!!U);const H=U,Y=H.error||((q=H[0])===null||q===void 0?void 0:q.error);if(Y){$(Ht,`RPC '${t}' stream ${i} received error:`,Y);const bt=Y.status;let ft=function(T){const I=Rt[T];if(I!==void 0)return ch(I)}(bt),R=Y.message;ft===void 0&&(ft=M.INTERNAL,R="Unknown error status: "+bt+" with message "+Y.message),k=!0,O.po(new z(ft,R)),v.close()}else $(Ht,`RPC '${t}' stream ${i} received:`,U),O.yo(U)}}),L(h,Nu.STAT_EVENT,V=>{V.stat===sa.PROXY?$(Ht,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===sa.NOPROXY&&$(Ht,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.fo()},0),O}}function Wo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){return new O_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,r,i,o,l,h,p){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ha(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===M.RESOURCE_EXHAUSTED?(We(e.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Iy extends bh{constructor(t,e,r,i,o,l){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=B_(this.serializer,t),r=function(o){if(!("targetChange"in o))return W.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?W.min():l.readTime?ce(l.readTime):W.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=fa(this.serializer),e.addTarget=function(o,l){let h;const p=l.target;if(h=ca(p)?{documents:j_(o,p)}:{query:q_(o,p)._t},h.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){h.resumeToken=dh(o,l.resumeToken);const g=ha(o,l.expectedCount);g!==null&&(h.expectedCount=g)}else if(l.snapshotVersion.compareTo(W.min())>0){h.readTime=zs(o,l.snapshotVersion.toTimestamp());const g=ha(o,l.expectedCount);g!==null&&(h.expectedCount=g)}return h}(this.serializer,t);const r=z_(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=fa(this.serializer),e.removeTarget=t,this.i_(e)}}class Ry extends bh{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=U_(t.writeResults,t.commitTime),r=ce(t.commitTime);return this.listener.A_(r,e)}return lt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=fa(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>gh(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,da(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.xo(t,da(e,r),i,l,h,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new z(M.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Py{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(We(e),this.y_=!1):$("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{r.enqueueAndForget(async()=>{cr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(p){const g=X(p);g.M_.add(4),await Li(g),g.N_.set("Unknown"),g.M_.delete(4),await so(g)}(this))})}),this.N_=new Py(r,i)}}async function so(n){if(cr(n))for(const t of n.x_)await t(!0)}async function Li(n){for(const t of n.x_)await t(!1)}function Th(n,t){const e=X(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Qa(e)?Wa(e):qr(e).Xo()&&Ka(e,t))}function Ga(n,t){const e=X(n),r=qr(e);e.F_.delete(t),r.Xo()&&Ah(e,t),e.F_.size===0&&(r.Xo()?r.n_():cr(e)&&e.N_.set("Unknown"))}function Ka(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qr(n).P_(t)}function Ah(n,t){n.L_.xe(t),qr(n).I_(t)}function Wa(n){n.L_=new x_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),qr(n).start(),n.N_.w_()}function Qa(n){return cr(n)&&!qr(n).Zo()&&n.F_.size>0}function cr(n){return X(n).M_.size===0}function Ih(n){n.L_=void 0}async function ky(n){n.N_.set("Online")}async function xy(n){n.F_.forEach((t,e)=>{Ka(n,t)})}async function Dy(n,t){Ih(n),Qa(n)?(n.N_.D_(t),Wa(n)):n.N_.set("Unknown")}async function Vy(n,t,e){if(n.N_.set("Online"),t instanceof hh&&t.state===2&&t.cause)try{await async function(i,o){const l=o.cause;for(const h of o.targetIds)i.F_.has(h)&&(await i.remoteSyncer.rejectListen(h,l),i.F_.delete(h),i.L_.removeTarget(h))}(n,t)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Gs(n,r)}else if(t instanceof Vs?n.L_.Ke(t):t instanceof uh?n.L_.He(t):n.L_.We(t),!e.isEqual(W.min()))try{const r=await Eh(n.localStore);e.compareTo(r)>=0&&await function(o,l){const h=o.L_.rt(l);return h.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=o.F_.get(g);y&&o.F_.set(g,y.withResumeToken(p.resumeToken,l))}}),h.targetMismatches.forEach((p,g)=>{const y=o.F_.get(p);if(!y)return;o.F_.set(p,y.withResumeToken(Kt.EMPTY_BYTE_STRING,y.snapshotVersion)),Ah(o,p);const v=new yn(y.target,p,g,y.sequenceNumber);Ka(o,v)}),o.remoteSyncer.applyRemoteEvent(h)}(n,e)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Gs(n,r)}}async function Gs(n,t,e){if(!Vi(t))throw t;n.M_.add(1),await Li(n),n.N_.set("Offline"),e||(e=()=>Eh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await so(n)})}function Rh(n,t){return t().catch(e=>Gs(n,e,t))}async function oo(n){const t=X(n),e=In(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Ny(t);)try{const i=await _y(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,Oy(t,i)}catch(i){await Gs(t,i)}Sh(t)&&Ph(t)}function Ny(n){return cr(n)&&n.v_.length<10}function Oy(n,t){n.v_.push(t);const e=In(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Sh(n){return cr(n)&&!In(n).Zo()&&n.v_.length>0}function Ph(n){In(n).start()}async function My(n){In(n).V_()}async function Ly(n){const t=In(n);for(const e of n.v_)t.d_(e.mutations)}async function Fy(n,t,e){const r=n.v_.shift(),i=Ba.from(r,t,e);await Rh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await oo(n)}async function By(n,t){t&&In(n).E_&&await async function(r,i){if(function(l){return lh(l)&&l!==M.ABORTED}(i.code)){const o=r.v_.shift();In(r).t_(),await Rh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await oo(r)}}(n,t),Sh(n)&&Ph(n)}async function Rc(n,t){const e=X(n);e.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=cr(e);e.M_.add(3),await Li(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await so(e)}async function Uy(n,t){const e=X(n);t?(e.M_.delete(2),await so(e)):t||(e.M_.add(2),await Li(e),e.N_.set("Unknown"))}function qr(n){return n.B_||(n.B_=function(e,r,i){const o=X(e);return o.f_(),new Iy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:ky.bind(null,n),To:xy.bind(null,n),Ao:Dy.bind(null,n),h_:Vy.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Qa(n)?Wa(n):n.N_.set("Unknown")):(await n.B_.stop(),Ih(n))})),n.B_}function In(n){return n.k_||(n.k_=function(e,r,i){const o=X(e);return o.f_(),new Ry(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:My.bind(null,n),Ao:By.bind(null,n),R_:Ly.bind(null,n),A_:Fy.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await oo(n)):(await n.k_.stop(),n.v_.length>0&&($("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new Xa(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ya(n,t){if(We("AsyncQueue",`${t}: ${n}`),Vi(n))return new z(M.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this.comparator=t?(e,r)=>t(e,r)||G.comparator(e.key,r.key):(e,r)=>G.comparator(e.key,r.key),this.keyedMap=pi(),this.sortedSet=new wt(this.comparator)}static emptySet(t){return new kr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof kr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new kr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.q_=new wt(G.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):K():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Fr{constructor(t,e,r,i,o,l,h,p,g){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,e,r,i,o){const l=[];return e.forEach(h=>{l.push({type:0,doc:h})}),new Fr(t,e,kr.emptySet(e),l,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Js(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class qy{constructor(){this.queries=new jr(t=>Wu(t),Js),this.onlineState="Unknown",this.z_=new Set}}async function Ch(n,t){const e=X(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new jy,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(l){const h=Ya(l,`Initialization of query '${Rr(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ja(e)}async function kh(n,t){const e=X(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const l=o.U_.indexOf(t);l>=0&&(o.U_.splice(l,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function $y(n,t){const e=X(n);let r=!1;for(const i of t){const o=i.query,l=e.queries.get(o);if(l){for(const h of l.U_)h.H_(i)&&(r=!0);l.K_=i}}r&&Ja(e)}function zy(n,t,e){const r=X(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function Ja(n){n.z_.forEach(t=>{t.next()})}var ma,Pc;(Pc=ma||(ma={})).J_="default",Pc.Cache="cache";class xh{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Fr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Fr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==ma.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this.key=t}}class Vh{constructor(t){this.key=t}}class Hy{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=et(),this.mutatedKeys=et(),this.Ia=Qu(t),this.Ta=new kr(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Sc,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,l=i,h=!1;const p=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,g=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((y,v)=>{const A=i.get(y),k=Zs(this.query,v)?v:null,O=!!A&&this.mutatedKeys.has(A.key),L=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let V=!1;A&&k?A.data.isEqual(k.data)?O!==L&&(r.track({type:3,doc:k}),V=!0):this.Ra(A,k)||(r.track({type:2,doc:k}),V=!0,(p&&this.Ia(k,p)>0||g&&this.Ia(k,g)<0)&&(h=!0)):!A&&k?(r.track({type:0,doc:k}),V=!0):A&&!k&&(r.track({type:1,doc:A}),V=!0,(p||g)&&(h=!0)),V&&(k?(l=l.add(k),o=L?o.add(y):o.delete(y)):(l=l.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const y=this.query.limitType==="F"?l.last():l.first();l=l.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{Ta:l,Aa:r,Xi:h,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const l=t.Aa.Q_();l.sort((y,v)=>function(k,O){const L=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return L(k)-L(O)}(y.type,v.type)||this.Ia(y.doc,v.doc)),this.Va(r),i=i!=null&&i;const h=e&&!i?this.ma():[],p=this.Pa.size===0&&this.current&&!i?1:0,g=p!==this.ha;return this.ha=p,l.length!==0||g?{snapshot:new Fr(this.query,t.Ta,o,l,t.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:h}:{fa:h}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Sc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=et(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Vh(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Dh(r))}),e}pa(t){this.la=t.hs,this.Pa=et();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Fr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Gy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ky{constructor(t){this.key=t,this.wa=!1}}class Wy{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new jr(h=>Wu(h),Js),this.Da=new Map,this.Ca=new Set,this.va=new wt(G.comparator),this.Fa=new Map,this.Ma=new qa,this.xa={},this.Oa=new Map,this.Na=Lr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Qy(n,t,e=!0){const r=Bh(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Nh(r,t,e,!0),i}async function Xy(n,t){const e=Bh(n);await Nh(e,t,!0,!1)}async function Nh(n,t,e,r){const i=await yy(n.localStore,xe(t)),o=i.targetId,l=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let h;return r&&(h=await Yy(n,t,o,l==="current",i.resumeToken)),n.isPrimaryClient&&e&&Th(n.remoteStore,i),h}async function Yy(n,t,e,r,i){n.Ba=(v,A,k)=>async function(L,V,q,U){let H=V.view.da(q);H.Xi&&(H=await Tc(L.localStore,V.query,!1).then(({documents:R})=>V.view.da(R,H)));const Y=U&&U.targetChanges.get(V.targetId),bt=U&&U.targetMismatches.get(V.targetId)!=null,ft=V.view.applyChanges(H,L.isPrimaryClient,Y,bt);return kc(L,V.targetId,ft.fa),ft.snapshot}(n,v,A,k);const o=await Tc(n.localStore,t,!0),l=new Hy(t,o.hs),h=l.da(o.documents),p=Mi.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),g=l.applyChanges(h,n.isPrimaryClient,p);kc(n,e,g.fa);const y=new Gy(t,e,l);return n.ba.set(t,y),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),g.snapshot}async function Jy(n,t,e){const r=X(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(l=>!Js(l,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ga(r.remoteStore,i.targetId),ga(r,i.targetId)}).catch(Di)):(ga(r,i.targetId),await pa(r.localStore,i.targetId,!0))}async function Zy(n,t){const e=X(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ga(e.remoteStore,r.targetId))}async function tw(n,t,e){const r=aw(n);try{const i=await function(l,h){const p=X(l),g=Dt.now(),y=h.reduce((k,O)=>k.add(O.key),et());let v,A;return p.persistence.runTransaction("Locally write mutations","readwrite",k=>{let O=Qe(),L=et();return p.os.getEntries(k,y).next(V=>{O=V,O.forEach((q,U)=>{U.isValidDocument()||(L=L.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(k,O)).next(V=>{v=V;const q=[];for(const U of h){const H=I_(U,v.get(U.key).overlayedDocument);H!=null&&q.push(new Sn(U.key,H,ju(H.value.mapValue),te.exists(!0)))}return p.mutationQueue.addMutationBatch(k,g,q,h)}).next(V=>{A=V;const q=V.applyToLocalDocumentSet(v,L);return p.documentOverlayCache.saveOverlays(k,V.batchId,q)})}).then(()=>({batchId:A.batchId,changes:Yu(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,p){let g=l.xa[l.currentUser.toKey()];g||(g=new wt(at)),g=g.insert(h,p),l.xa[l.currentUser.toKey()]=g}(r,i.batchId,e),await Fi(r,i.changes),await oo(r.remoteStore)}catch(i){const o=Ya(i,"Failed to persist write");e.reject(o)}}async function Oh(n,t){const e=X(n);try{const r=await my(e.localStore,t);t.targetChanges.forEach((i,o)=>{const l=e.Fa.get(o);l&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.wa=!0:i.modifiedDocuments.size>0?lt(l.wa):i.removedDocuments.size>0&&(lt(l.wa),l.wa=!1))}),await Fi(e,r,t)}catch(r){await Di(r)}}function Cc(n,t,e){const r=X(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,l)=>{const h=l.view.j_(t);h.snapshot&&i.push(h.snapshot)}),function(l,h){const p=X(l);p.onlineState=h;let g=!1;p.queries.forEach((y,v)=>{for(const A of v.U_)A.j_(h)&&(g=!0)}),g&&Ja(p)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ew(n,t,e){const r=X(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let l=new wt(G.comparator);l=l.insert(o,Mt.newNoDocument(o,W.min()));const h=et().add(o),p=new ro(W.min(),new Map,new wt(at),l,h);await Oh(r,p),r.va=r.va.remove(o),r.Fa.delete(t),Za(r)}else await pa(r.localStore,t,!1).then(()=>ga(r,t,e)).catch(Di)}async function nw(n,t){const e=X(n),r=t.batch.batchId;try{const i=await py(e.localStore,t);Lh(e,r,null),Mh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(e,i)}catch(i){await Di(i)}}async function rw(n,t,e){const r=X(n);try{const i=await function(l,h){const p=X(l);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,h).next(v=>(lt(v!==null),y=v.keys(),p.mutationQueue.removeMutationBatch(g,v))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,h)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(r.localStore,t);Lh(r,t,e),Mh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Fi(r,i)}catch(i){await Di(i)}}function Mh(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Lh(n,t,e){const r=X(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function ga(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Fh(n,r)})}function Fh(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Ga(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Za(n))}function kc(n,t,e){for(const r of e)r instanceof Dh?(n.Ma.addReference(r.key,t),iw(n,r)):r instanceof Vh?($("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Fh(n,r.key)):K()}function iw(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||($("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Za(n))}function Za(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new G(mt.fromString(t)),r=n.Na.next();n.Fa.set(r,new Ky(e)),n.va=n.va.insert(e,r),Th(n.remoteStore,new yn(xe(Fa(e.path)),r,"TargetPurposeLimboResolution",Da.oe))}}async function Fi(n,t,e){const r=X(n),i=[],o=[],l=[];r.ba.isEmpty()||(r.ba.forEach((h,p)=>{l.push(r.Ba(p,t,e).then(g=>{if((g||e)&&r.isPrimaryClient){const y=g&&!g.fromCache;r.sharedClientState.updateQueryState(p.targetId,y?"current":"not-current")}if(g){i.push(g);const y=za.Ki(p.targetId,g);o.push(y)}}))}),await Promise.all(l),r.Sa.h_(i),await async function(p,g){const y=X(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>F.forEach(g,A=>F.forEach(A.qi,k=>y.persistence.referenceDelegate.addReference(v,A.targetId,k)).next(()=>F.forEach(A.Qi,k=>y.persistence.referenceDelegate.removeReference(v,A.targetId,k)))))}catch(v){if(!Vi(v))throw v;$("LocalStore","Failed to update sequence numbers: "+v)}for(const v of g){const A=v.targetId;if(!v.fromCache){const k=y.ns.get(A),O=k.snapshotVersion,L=k.withLastLimboFreeSnapshotVersion(O);y.ns=y.ns.insert(A,L)}}}(r.localStore,o))}async function sw(n,t){const e=X(n);if(!e.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const r=await vh(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(h=>{h.forEach(p=>{p.reject(new z(M.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fi(e,r.us)}}function ow(n,t){const e=X(n),r=e.Fa.get(t);if(r&&r.wa)return et().add(r.key);{let i=et();const o=e.Da.get(t);if(!o)return i;for(const l of o){const h=e.ba.get(l);i=i.unionWith(h.view.Ea)}return i}}function Bh(n){const t=X(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Oh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ow.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ew.bind(null,t),t.Sa.h_=$y.bind(null,t.eventManager),t.Sa.ka=zy.bind(null,t.eventManager),t}function aw(n){const t=X(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rw.bind(null,t),t}class xc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=io(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return fy(this.persistence,new hy,t.initialUser,this.serializer)}createPersistence(t){return new ly($a.Hr,this.serializer)}createSharedClientState(t){return new vy}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lw{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sw.bind(null,this.syncEngine),await Uy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new qy}()}createDatastore(t){const e=io(t.databaseInfo.databaseId),r=function(o){return new Ay(o)}(t.databaseInfo);return function(o,l,h,p){return new Sy(o,l,h,p)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,h){return new Cy(r,i,o,l,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Cc(this.syncEngine,e,0),function(){return Ic.D()?new Ic:new Ey}())}createSyncEngine(t,e){return function(i,o,l,h,p,g,y){const v=new Wy(i,o,l,h,p,g);return y&&(v.La=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=X(r);$("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Li(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):We("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(i,o){const l=X(i),h={documents:o.map(v=>Hs(l.serializer,v))},p=await l.xo("BatchGetDocuments",l.serializer.databaseId,mt.emptyPath(),h,o.length),g=new Map;p.forEach(v=>{const A=F_(l.serializer,v);g.set(A.key.toString(),A)});const y=[];return o.forEach(v=>{const A=g.get(v.toString());lt(!!A),y.push(A)}),y}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new no(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=G.fromPath(r);this.mutations.push(new ah(i,this.precondition(i)))}),await async function(r,i){const o=X(r),l={writes:i.map(h=>gh(o.serializer,h))};await o.Co("Commit",o.serializer.databaseId,mt.emptyPath(),l)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw K();e=W.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new z(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(W.min())?te.exists(!1):te.updateTime(e):te.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(W.min()))throw new z(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return te.updateTime(e)}return te.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,e,r,i,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=o,this.Za=r.maxAttempts,this.Yo=new Ha(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const t=new cw(this.datastore),e=this.tu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(t){try{const e=this.updateFunction(t);return!Ni(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}nu(t){this.Za>0&&this.ru(t)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(t)}ru(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!lh(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Gt.UNAUTHENTICATED,this.clientId=Fu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ya(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Qo(n,t){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Dc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await fw(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Rc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Rc(t.remoteStore,i)),n._onlineComponents=t}function dw(n){return n.name==="FirebaseError"?n.code===M.FAILED_PRECONDITION||n.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function fw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!dw(e))throw e;Vr("Error using user provided cache. Falling back to memory cache: "+e),await Qo(n,new xc)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Qo(n,new xc);return n._offlineComponents}async function tl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Dc(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Dc(n,new lw))),n._onlineComponents}function pw(n){return tl(n).then(t=>t.syncEngine)}function mw(n){return tl(n).then(t=>t.datastore)}async function jh(n){const t=await tl(n),e=t.eventManager;return e.onListen=Qy.bind(null,t.syncEngine),e.onUnlisten=Jy.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zy.bind(null,t.syncEngine),e}function gw(n,t,e={}){const r=new ke;return n.asyncQueue.enqueueAndForget(async()=>function(o,l,h,p,g){const y=new Uh({next:A=>{l.enqueueAndForget(()=>kh(o,v));const k=A.docs.has(h);!k&&A.fromCache?g.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&A.fromCache&&p&&p.source==="server"?g.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),v=new xh(Fa(h.path),y,{includeMetadataChanges:!0,ra:!0});return Ch(o,v)}(await jh(n),n.asyncQueue,t,e,r)),r.promise}function _w(n,t,e={}){const r=new ke;return n.asyncQueue.enqueueAndForget(async()=>function(o,l,h,p,g){const y=new Uh({next:A=>{l.enqueueAndForget(()=>kh(o,v)),A.fromCache&&p.source==="server"?g.reject(new z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),v=new xh(h,y,{includeMetadataChanges:!0,ra:!0});return Ch(o,v)}(await jh(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n,t,e){if(!e)throw new z(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function yw(n,t,e,r){if(t===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Nc(n){if(!G.isDocumentKey(n))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oc(n){if(G.isDocumentKey(n))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function el(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K()}function Xe(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=el(n);throw new z(M.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ao{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ng;switch(r.type){case"firstParty":return new Fg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Vc.get(e);r&&($("ComponentProvider","Removing Datastore"),Vc.delete(e),r.terminate())}(this),Promise.resolve()}}function ww(n,t,e,r={}){var i;const o=(n=Xe(n,ao))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=Gt.MOCK_USER;else{h=tu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Gt(g)}n._authCredentials=new Og(new Lu(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new lo(this.firestore,t,this._query)}}class se{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new se(this.firestore,t,this._key)}}class bn extends lo{constructor(t,e,r){super(t,e,Fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new se(this.firestore,null,new G(t))}withConverter(t){return new bn(this.firestore,t,this._path)}}function Lc(n,t,...e){if(n=ne(n),$h("collection","path",t),n instanceof ao){const r=mt.fromString(t,...e);return Oc(r),new bn(n,null,r)}{if(!(n instanceof se||n instanceof bn))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(mt.fromString(t,...e));return Oc(r),new bn(n.firestore,null,r)}}function gi(n,t,...e){if(n=ne(n),arguments.length===1&&(t=Fu.newId()),$h("doc","path",t),n instanceof ao){const r=mt.fromString(t,...e);return Nc(r),new se(n,null,new G(r))}{if(!(n instanceof se||n instanceof bn))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(mt.fromString(t,...e));return Nc(r),new se(n.firestore,n instanceof bn?n.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ha(this,"async_queue_retry"),this.hu=()=>{const e=Wo();e&&$("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Wo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Wo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new ke;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Vi(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(l){let h=l.message||"";return l.stack&&(h=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),h}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Xa.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class $r extends ao{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new vw}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hh(this),this._firestoreClient.terminate()}}function zh(n,t){const e=typeof n=="object"?n:lu(),r=typeof n=="string"?n:"(default)",i=su(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Jc("firestore");o&&ww(i,...o)}return i}function co(n){return n._firestoreClient||Hh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Hh(n){var t,e,r;const i=n._freezeSettings(),o=function(h,p,g,y){return new Yg(h,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,qh(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new hw(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new sr(Kt.fromBase64String(t))}catch(e){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new sr(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return at(this._lat,t._lat)||at(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=/^__.*__$/;class bw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Sn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Oi(t,this.data,e,this.fieldTransforms)}}class Gh{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Sn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Kh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class il{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new il(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Ks(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Kh(this.fu)&&Ew.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Tw{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||io(t)}Fu(t,e,r,i=!1){return new il({fu:t,methodName:e,vu:r,path:Ut.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wh(n){const t=n._freezeSettings(),e=io(n._databaseId);return new Tw(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Qh(n,t,e,r,i,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);sl("Data must be an object, but it was:",l,r);const h=Xh(r,l);let p,g;if(o.merge)p=new le(l.fieldMask),g=l.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const A=_a(t,v,e);if(!l.contains(A))throw new z(M.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Jh(y,A)||y.push(A)}p=new le(y),g=l.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,g=l.fieldTransforms;return new bw(new Zt(h),p,g)}class ho extends nl{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ho}}function Aw(n,t,e,r){const i=n.Fu(1,t,e);sl("Data must be an object, but it was:",i,r);const o=[],l=Zt.empty();lr(r,(p,g)=>{const y=ol(t,p,e);g=ne(g);const v=i.Su(y);if(g instanceof ho)o.push(y);else{const A=fo(g,v);A!=null&&(o.push(y),l.set(y,A))}});const h=new le(o);return new Gh(l,h,i.fieldTransforms)}function Iw(n,t,e,r,i,o){const l=n.Fu(1,t,e),h=[_a(t,r,e)],p=[i];if(o.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)h.push(_a(t,o[A])),p.push(o[A+1]);const g=[],y=Zt.empty();for(let A=h.length-1;A>=0;--A)if(!Jh(g,h[A])){const k=h[A];let O=p[A];O=ne(O);const L=l.Su(k);if(O instanceof ho)g.push(k);else{const V=fo(O,L);V!=null&&(g.push(k),y.set(k,V))}}const v=new le(g);return new Gh(y,v,l.fieldTransforms)}function fo(n,t){if(Yh(n=ne(n)))return sl("Unsupported field value:",t,n),Xh(n,t);if(n instanceof nl)return function(r,i){if(!Kh(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const h of r){let p=fo(h,i.bu(l));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return w_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Dt.fromDate(r);return{timestampValue:zs(i.serializer,o)}}if(r instanceof Dt){const o=new Dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(i.serializer,o)}}if(r instanceof rl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sr)return{bytesValue:dh(i.serializer,r._byteString)};if(r instanceof se){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ja(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${el(r)}`)}(n,t)}function Xh(n,t){const e={};return Bu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):lr(n,(r,i)=>{const o=fo(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Yh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Dt||n instanceof rl||n instanceof sr||n instanceof se||n instanceof nl)}function sl(n,t,e){if(!Yh(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=el(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function _a(n,t,e){if((t=ne(t))instanceof uo)return t._internalPath;if(typeof t=="string")return ol(n,t);throw Ks("Field path arguments must be of type string or ",n,!1,void 0,e)}const Rw=new RegExp("[~\\*/\\[\\]]");function ol(n,t,e){if(t.search(Rw)>=0)throw Ks(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new uo(...t.split("."))._internalPath}catch{throw Ks(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ks(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(o||l)&&(p+=" (found",o&&(p+=` in field ${r}`),l&&(p+=` in document ${i}`),p+=")"),new z(M.INVALID_ARGUMENT,h+n+p)}function Jh(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Sw extends Ws{data(){return super.data()}}function Zh(n,t){return typeof t=="string"?ol(n,t):t instanceof uo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class td{convertValue(t,e="none"){switch(ir(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(rr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw K()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return lr(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new rl(St(t.latitude),St(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Na(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ri(t));default:return null}}convertTimestamp(t){const e=An(t);return new Dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=mt.fromString(t);lt(wh(r));const i=new Si(r.get(1),r.get(3)),o=new G(r.popFirst(5));return i.isEqual(e)||We(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Cw extends td{constructor(t){super(),this.firestore=t}convertBytes(t){return new sr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new se(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class al extends Ws{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Zh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Ns extends al{data(t={}){return super.data(t)}}class kw{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Cr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ns(this._firestore,this._userDataWriter,r.key,r,new Cr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(h=>{const p=new Ns(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Cr(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:p,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const p=new Ns(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Cr(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let g=-1,y=-1;return h.type!==0&&(g=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),y=l.indexOf(h.doc.key)),{type:xw(h.type),doc:p,oldIndex:g,newIndex:y}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){n=Xe(n,se);const t=Xe(n.firestore,$r);return gw(co(t),n._key).then(e=>Nw(t,n,e))}class cl extends td{constructor(t){super(),this.firestore=t}convertBytes(t){return new sr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new se(this.firestore,null,e)}}function Fc(n){n=Xe(n,lo);const t=Xe(n.firestore,$r),e=co(t),r=new cl(t);return Pw(n._query),_w(e,n._query).then(i=>new kw(t,r,n,i))}function Dw(n,t,e){n=Xe(n,se);const r=Xe(n.firestore,$r),i=ed(n.converter,t,e);return nd(r,[Qh(Wh(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,te.none())])}function Vw(n){return nd(Xe(n.firestore,$r),[new no(n._key,te.none())])}function nd(n,t){return function(r,i){const o=new ke;return r.asyncQueue.enqueueAndForget(async()=>tw(await pw(r),i,o)),o.promise}(co(n),t)}function Nw(n,t,e){const r=e.docs.get(t._key),i=new cl(n);return new al(n,i,t._key,r,new Cr(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={maxAttempts:5};function hi(n,t){if((n=ne(n)).firestore!==t)throw new z(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Wh(e)}get(e){const r=hi(e,this._firestore),i=new Cw(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return K();const l=o[0];if(l.isFoundDocument())return new Ws(this._firestore,i,l.key,l,r.converter);if(l.isNoDocument())return new Ws(this._firestore,i,r._key,null,r.converter);throw K()})}set(e,r,i){const o=hi(e,this._firestore),l=ed(o.converter,r,i),h=Qh(this._dataReader,"Transaction.set",o._key,l,o.converter!==null,i);return this._transaction.set(o._key,h),this}update(e,r,i,...o){const l=hi(e,this._firestore);let h;return h=typeof(r=ne(r))=="string"||r instanceof uo?Iw(this._dataReader,"Transaction.update",l._key,r,i,o):Aw(this._dataReader,"Transaction.update",l._key,r),this._transaction.update(l._key,h),this}delete(e){const r=hi(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=hi(t,this._firestore),r=new cl(this._firestore);return super.get(t).then(i=>new al(this._firestore,r,e._key,i._document,new Cr(!1,!1),e.converter))}}function Lw(n,t,e){n=Xe(n,$r);const r=Object.assign(Object.assign({},Ow),e);return function(o){if(o.maxAttempts<1)throw new z(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,l,h){const p=new ke;return o.asyncQueue.enqueueAndForget(async()=>{const g=await mw(o);new uw(o.asyncQueue,g,h,l,p).Xa()}),p.promise}(co(n),i=>t(new Mw(n,i)),r)}(function(t,e=!0){(function(i){Ur=i})(ou),Ti(new Dr("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new $r(new Mg(r.getProvider("auth-internal")),new Ug(r.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(g.options.projectId,y)}(l,i),l);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),En(rc,"4.6.3",t),En(rc,"4.6.3","esm2017")})();const Fw={projectId:"react-cursos-187dc",messagingSenderId:"791208906607",storageBucket:"react-cursos-187dc.appspot.com",authDomain:"react-cursos-187dc.firebaseapp.com",apiKey:"AIzaSyD1SKumwaNQB8RaZUftyyz1l4duS8nPQPU",appId:"1:791208906607:web:e642a487ddf1b4b4f1a29a"},po=au(Fw),Bw=zh(po),Uw=kg(po),jw={firebaseApp:po,db:Bw,storage:Uw};var qw={VITE_FIREBASE_API_KEY:"AIzaSyD1SKumwaNQB8RaZUftyyz1l4duS8nPQPU",VITE_FIREBASE_PROJECT_ID:"react-cursos-187dc",VITE_FIREBASE_AUTH_DOMAIN:"react-cursos-187dc.firebaseapp.com",VITE_FIREBASE_STORAGE_BUCKET:"react-cursos-187dc.appspot.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"791208906607",VITE_FIREBASE_APP_ID:"1:791208906607:web:e642a487ddf1b4b4f1a29a",BASE_URL:"/React-UribiaOnlineFrontend/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function $w(n,t){let e;try{e=n()}catch{return}return{getItem:i=>{var o;const l=p=>p===null?null:JSON.parse(p,void 0),h=(o=e.getItem(i))!=null?o:null;return h instanceof Promise?h.then(l):l(h)},setItem:(i,o)=>e.setItem(i,JSON.stringify(o,void 0)),removeItem:i=>e.removeItem(i)}}const xi=n=>t=>{try{const e=n(t);return e instanceof Promise?e:{then(r){return xi(r)(e)},catch(r){return this}}}catch(e){return{then(r){return this},catch(r){return xi(r)(e)}}}},zw=(n,t)=>(e,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:V=>V,version:0,merge:(V,q)=>({...q,...V}),...t},l=!1;const h=new Set,p=new Set;let g;try{g=o.getStorage()}catch{}if(!g)return n((...V)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),e(...V)},r,i);const y=xi(o.serialize),v=()=>{const V=o.partialize({...r()});let q;const U=y({state:V,version:o.version}).then(H=>g.setItem(o.name,H)).catch(H=>{q=H});if(q)throw q;return U},A=i.setState;i.setState=(V,q)=>{A(V,q),v()};const k=n((...V)=>{e(...V),v()},r,i);let O;const L=()=>{var V;if(!g)return;l=!1,h.forEach(U=>U(r()));const q=((V=o.onRehydrateStorage)==null?void 0:V.call(o,r()))||void 0;return xi(g.getItem.bind(g))(o.name).then(U=>{if(U)return o.deserialize(U)}).then(U=>{if(U)if(typeof U.version=="number"&&U.version!==o.version){if(o.migrate)return o.migrate(U.state,U.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return U.state}).then(U=>{var H;return O=o.merge(U,(H=r())!=null?H:k),e(O,!0),v()}).then(()=>{q==null||q(O,void 0),l=!0,p.forEach(U=>U(O))}).catch(U=>{q==null||q(void 0,U)})};return i.persist={setOptions:V=>{o={...o,...V},V.getStorage&&(g=V.getStorage())},clearStorage:()=>{g==null||g.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>L(),hasHydrated:()=>l,onHydrate:V=>(h.add(V),()=>{h.delete(V)}),onFinishHydration:V=>(p.add(V),()=>{p.delete(V)})},L(),O||k},Hw=(n,t)=>(e,r,i)=>{let o={storage:$w(()=>localStorage),partialize:L=>L,version:0,merge:(L,V)=>({...V,...L}),...t},l=!1;const h=new Set,p=new Set;let g=o.storage;if(!g)return n((...L)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),e(...L)},r,i);const y=()=>{const L=o.partialize({...r()});return g.setItem(o.name,{state:L,version:o.version})},v=i.setState;i.setState=(L,V)=>{v(L,V),y()};const A=n((...L)=>{e(...L),y()},r,i);i.getInitialState=()=>A;let k;const O=()=>{var L,V;if(!g)return;l=!1,h.forEach(U=>{var H;return U((H=r())!=null?H:A)});const q=((V=o.onRehydrateStorage)==null?void 0:V.call(o,(L=r())!=null?L:A))||void 0;return xi(g.getItem.bind(g))(o.name).then(U=>{if(U)if(typeof U.version=="number"&&U.version!==o.version){if(o.migrate)return o.migrate(U.state,U.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return U.state}).then(U=>{var H;return k=o.merge(U,(H=r())!=null?H:A),e(k,!0),y()}).then(()=>{q==null||q(k,void 0),k=r(),l=!0,p.forEach(U=>U(k))}).catch(U=>{q==null||q(void 0,U)})};return i.persist={setOptions:L=>{o={...o,...L},L.storage&&(g=L.storage)},clearStorage:()=>{g==null||g.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>O(),hasHydrated:()=>l,onHydrate:L=>(h.add(L),()=>{h.delete(L)}),onFinishHydration:L=>(p.add(L),()=>{p.delete(L)})},o.skipHydration||O(),k||A},Gw=(n,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((qw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),zw(n,t)):Hw(n,t),Kw=Gw;let Cs;const Ww=new Uint8Array(16);function Qw(){if(!Cs&&(Cs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Cs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Cs(Ww)}const Ft=[];for(let n=0;n<256;++n)Ft.push((n+256).toString(16).slice(1));function Xw(n,t=0){return Ft[n[t+0]]+Ft[n[t+1]]+Ft[n[t+2]]+Ft[n[t+3]]+"-"+Ft[n[t+4]]+Ft[n[t+5]]+"-"+Ft[n[t+6]]+Ft[n[t+7]]+"-"+Ft[n[t+8]]+Ft[n[t+9]]+"-"+Ft[n[t+10]]+Ft[n[t+11]]+Ft[n[t+12]]+Ft[n[t+13]]+Ft[n[t+14]]+Ft[n[t+15]]}const Yw=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Bc={randomUUID:Yw};function Jw(n,t,e){if(Bc.randomUUID&&!t&&!n)return Bc.randomUUID();n=n||{};const r=n.random||(n.rng||Qw)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Xw(r)}var rd={exports:{}};/*!
* sweetalert2 v11.11.0
* Released under the MIT License.
*/(function(n,t){(function(e,r){n.exports=r()})(pn,function(){function e(m,a,c){if(typeof m=="function"?m===a:m.has(a))return arguments.length<3?a:c;throw new TypeError("Private element is not present on this object")}function r(m,a,c){return a=V(a),H(m,h()?Reflect.construct(a,c||[],V(m).constructor):a.apply(m,c))}function i(m,a){return m.get(e(m,a))}function o(m,a,c){return m.set(e(m,a),c),c}function l(m,a,c){if(h())return Reflect.construct.apply(null,arguments);var f=[null];f.push.apply(f,a);var w=new(m.bind.apply(m,f));return w}function h(){try{var m=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(h=function(){return!!m})()}function p(m,a){var c=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(c!=null){var f,w,N,j,J=[],tt=!0,Et=!1;try{if(N=(c=c.call(m)).next,a!==0)for(;!(tt=(f=N.call(c)).done)&&(J.push(f.value),J.length!==a);tt=!0);}catch(li){Et=!0,w=li}finally{try{if(!tt&&c.return!=null&&(j=c.return(),Object(j)!==j))return}finally{if(Et)throw w}}return J}}function g(m,a){if(typeof m!="object"||!m)return m;var c=m[Symbol.toPrimitive];if(c!==void 0){var f=c.call(m,a);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}function y(m){var a=g(m,"string");return typeof a=="symbol"?a:a+""}function v(m){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v(m)}function A(m,a){if(!(m instanceof a))throw new TypeError("Cannot call a class as a function")}function k(m,a){for(var c=0;c<a.length;c++){var f=a[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(m,y(f.key),f)}}function O(m,a,c){return a&&k(m.prototype,a),Object.defineProperty(m,"prototype",{writable:!1}),m}function L(m,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(a&&a.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),a&&q(m,a)}function V(m){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},V(m)}function q(m,a){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,w){return f.__proto__=w,f},q(m,a)}function U(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function H(m,a){if(a&&(typeof a=="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return U(m)}function Y(m,a){for(;!Object.prototype.hasOwnProperty.call(m,a)&&(m=V(m),m!==null););return m}function bt(){return typeof Reflect<"u"&&Reflect.get?bt=Reflect.get.bind():bt=function(a,c,f){var w=Y(a,c);if(w){var N=Object.getOwnPropertyDescriptor(w,c);return N.get?N.get.call(arguments.length<3?a:f):N.value}},bt.apply(this,arguments)}function ft(m,a){return T(m)||p(m,a)||S(m,a)||fe()}function R(m){return E(m)||I(m)||S(m)||b()}function E(m){if(Array.isArray(m))return C(m)}function T(m){if(Array.isArray(m))return m}function I(m){if(typeof Symbol<"u"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function S(m,a){if(m){if(typeof m=="string")return C(m,a);var c=Object.prototype.toString.call(m).slice(8,-1);if(c==="Object"&&m.constructor&&(c=m.constructor.name),c==="Map"||c==="Set")return Array.from(m);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return C(m,a)}}function C(m,a){(a==null||a>m.length)&&(a=m.length);for(var c=0,f=new Array(a);c<a;c++)f[c]=m[c];return f}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cn(m,a){if(a.has(m))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _o(m,a,c){Cn(m,a),a.set(m,c)}var kn=100,Q={},zr=function(){Q.previousActiveElement instanceof HTMLElement?(Q.previousActiveElement.focus(),Q.previousActiveElement=null):document.body&&document.body.focus()},Ui=function(a){return new Promise(function(c){if(!a)return c();var f=window.scrollX,w=window.scrollY;Q.restoreFocusTimeout=setTimeout(function(){zr(),c()},kn),window.scrollTo(f,w)})},ji="swal2-",ve=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],x=ve.reduce(function(m,a){return m[a]=ji+a,m},{}),yo=["success","warning","info","question","error"],Ee=yo.reduce(function(m,a){return m[a]=ji+a,m},{}),qi="SweetAlert2:",Je=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},qt=function(a){console.warn("".concat(qi," ").concat(v(a)==="object"?a.join(" "):a))},Ne=function(a){console.error("".concat(qi," ").concat(a))},xn=[],ur=function(a){xn.includes(a)||(xn.push(a),qt(a))},Hr=function(a,c){ur('"'.concat(a,'" is deprecated and will be removed in the next major release. Please use "').concat(c,'" instead.'))},Ze=function(a){return typeof a=="function"?a():a},Dn=function(a){return a&&typeof a.toPromise=="function"},Oe=function(a){return Dn(a)?a.toPromise():Promise.resolve(a)},hr=function(a){return a&&Promise.resolve(a)===a},$t=function(){return document.body.querySelector(".".concat(x.container))},Vn=function(a){var c=$t();return c?c.querySelector(a):null},zt=function(a){return Vn(".".concat(a))},it=function(){return zt(x.popup)},tn=function(){return zt(x.icon)},wo=function(){return zt(x["icon-content"])},dr=function(){return zt(x.title)},Nn=function(){return zt(x["html-container"])},Gr=function(){return zt(x.image)},At=function(){return zt(x["progress-steps"])},It=function(){return zt(x["validation-message"])},Wt=function(){return Vn(".".concat(x.actions," .").concat(x.confirm))},Me=function(){return Vn(".".concat(x.actions," .").concat(x.cancel))},be=function(){return Vn(".".concat(x.actions," .").concat(x.deny))},vo=function(){return zt(x["input-label"])},ue=function(){return Vn(".".concat(x.loader))},en=function(){return zt(x.actions)},Kr=function(){return zt(x.footer)},nn=function(){return zt(x["timer-progress-bar"])},Wr=function(){return zt(x.close)},Eo=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,On=function(){var a=it();if(!a)return[];var c=a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),f=Array.from(c).sort(function(j,J){var tt=parseInt(j.getAttribute("tabindex")||"0"),Et=parseInt(J.getAttribute("tabindex")||"0");return tt>Et?1:tt<Et?-1:0}),w=a.querySelectorAll(Eo),N=Array.from(w).filter(function(j){return j.getAttribute("tabindex")!=="-1"});return R(new Set(f.concat(N))).filter(function(j){return Xt(j)})},fr=function(){return oe(document.body,x.shown)&&!oe(document.body,x["toast-shown"])&&!oe(document.body,x["no-backdrop"])},Mn=function(){var a=it();return a?oe(a,x.toast):!1},Ln=function(){var a=it();return a?a.hasAttribute("data-loading"):!1},Lt=function(a,c){if(a.textContent="",c){var f=new DOMParser,w=f.parseFromString(c,"text/html"),N=w.querySelector("head");N&&Array.from(N.childNodes).forEach(function(J){a.appendChild(J)});var j=w.querySelector("body");j&&Array.from(j.childNodes).forEach(function(J){J instanceof HTMLVideoElement||J instanceof HTMLAudioElement?a.appendChild(J.cloneNode(!0)):a.appendChild(J)})}},oe=function(a,c){if(!c)return!1;for(var f=c.split(/\s+/),w=0;w<f.length;w++)if(!a.classList.contains(f[w]))return!1;return!0},Le=function(a,c){Array.from(a.classList).forEach(function(f){!Object.values(x).includes(f)&&!Object.values(Ee).includes(f)&&!Object.values(c.showClass||{}).includes(f)&&a.classList.remove(f)})},Qt=function(a,c,f){if(Le(a,c),c.customClass&&c.customClass[f]){if(typeof c.customClass[f]!="string"&&!c.customClass[f].forEach){qt("Invalid type of customClass.".concat(f,'! Expected string or iterable object, got "').concat(v(c.customClass[f]),'"'));return}Z(a,c.customClass[f])}},Fe=function(a,c){if(!c)return null;switch(c){case"select":case"textarea":case"file":return a.querySelector(".".concat(x.popup," > .").concat(x[c]));case"checkbox":return a.querySelector(".".concat(x.popup," > .").concat(x.checkbox," input"));case"radio":return a.querySelector(".".concat(x.popup," > .").concat(x.radio," input:checked"))||a.querySelector(".".concat(x.popup," > .").concat(x.radio," input:first-child"));case"range":return a.querySelector(".".concat(x.popup," > .").concat(x.range," input"));default:return a.querySelector(".".concat(x.popup," > .").concat(x.input))}},Qr=function(a){if(a.focus(),a.type!=="file"){var c=a.value;a.value="",a.value=c}},rn=function(a,c,f){!a||!c||(typeof c=="string"&&(c=c.split(/\s+/).filter(Boolean)),c.forEach(function(w){Array.isArray(a)?a.forEach(function(N){f?N.classList.add(w):N.classList.remove(w)}):f?a.classList.add(w):a.classList.remove(w)}))},Z=function(a,c){rn(a,c,!0)},pt=function(a,c){rn(a,c,!1)},pe=function(a,c){for(var f=Array.from(a.children),w=0;w<f.length;w++){var N=f[w];if(N instanceof HTMLElement&&oe(N,c))return N}},ae=function(a,c,f){f==="".concat(parseInt(f))&&(f=parseInt(f)),f||parseInt(f)===0?a.style.setProperty(c,typeof f=="number"?"".concat(f,"px"):f):a.style.removeProperty(c)},yt=function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";a&&(a.style.display=c)},Vt=function(a){a&&(a.style.display="none")},Xr=function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";a&&new MutationObserver(function(){Fn(a,a.innerHTML,c)}).observe(a,{childList:!0,subtree:!0})},Be=function(a,c,f,w){var N=a.querySelector(c);N&&N.style.setProperty(f,w)},Fn=function(a,c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";c?yt(a,f):Vt(a)},Xt=function(a){return!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length))},pr=function(){return!Xt(Wt())&&!Xt(be())&&!Xt(Me())},Yr=function(a){return a.scrollHeight>a.clientHeight},mr=function(a){var c=window.getComputedStyle(a),f=parseFloat(c.getPropertyValue("animation-duration")||"0"),w=parseFloat(c.getPropertyValue("transition-duration")||"0");return f>0||w>0},sn=function(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=nn();f&&Xt(f)&&(c&&(f.style.transition="none",f.style.width="100%"),setTimeout(function(){f.style.transition="width ".concat(a/1e3,"s linear"),f.style.width="0%"},10))},Te=function(){var a=nn();if(a){var c=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";var f=parseInt(window.getComputedStyle(a).width),w=c/f*100;a.style.width="".concat(w,"%")}},Jr=function(){return typeof window>"u"||typeof document>"u"},$i=`
 <div aria-labelledby="`.concat(x.title,'" aria-describedby="').concat(x["html-container"],'" class="').concat(x.popup,`" tabindex="-1">
   <button type="button" class="`).concat(x.close,`"></button>
   <ul class="`).concat(x["progress-steps"],`"></ul>
   <div class="`).concat(x.icon,`"></div>
   <img class="`).concat(x.image,`" />
   <h2 class="`).concat(x.title,'" id="').concat(x.title,`"></h2>
   <div class="`).concat(x["html-container"],'" id="').concat(x["html-container"],`"></div>
   <input class="`).concat(x.input,'" id="').concat(x.input,`" />
   <input type="file" class="`).concat(x.file,`" />
   <div class="`).concat(x.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(x.select,'" id="').concat(x.select,`"></select>
   <div class="`).concat(x.radio,`"></div>
   <label class="`).concat(x.checkbox,`">
     <input type="checkbox" id="`).concat(x.checkbox,`" />
     <span class="`).concat(x.label,`"></span>
   </label>
   <textarea class="`).concat(x.textarea,'" id="').concat(x.textarea,`"></textarea>
   <div class="`).concat(x["validation-message"],'" id="').concat(x["validation-message"],`"></div>
   <div class="`).concat(x.actions,`">
     <div class="`).concat(x.loader,`"></div>
     <button type="button" class="`).concat(x.confirm,`"></button>
     <button type="button" class="`).concat(x.deny,`"></button>
     <button type="button" class="`).concat(x.cancel,`"></button>
   </div>
   <div class="`).concat(x.footer,`"></div>
   <div class="`).concat(x["timer-progress-bar-container"],`">
     <div class="`).concat(x["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Zr=function(){var a=$t();return a?(a.remove(),pt([document.documentElement,document.body],[x["no-backdrop"],x["toast-shown"],x["has-column"]]),!0):!1},me=function(){Q.currentInstance.resetValidationMessage()},zi=function(){var a=it(),c=pe(a,x.input),f=pe(a,x.file),w=a.querySelector(".".concat(x.range," input")),N=a.querySelector(".".concat(x.range," output")),j=pe(a,x.select),J=a.querySelector(".".concat(x.checkbox," input")),tt=pe(a,x.textarea);c.oninput=me,f.onchange=me,j.onchange=me,J.onchange=me,tt.oninput=me,w.oninput=function(){me(),N.value=w.value},w.onchange=function(){me(),N.value=w.value}},Hi=function(a){return typeof a=="string"?document.querySelector(a):a},bo=function(a){var c=it();c.setAttribute("role",a.toast?"alert":"dialog"),c.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||c.setAttribute("aria-modal","true")},gr=function(a){window.getComputedStyle(a).direction==="rtl"&&Z($t(),x.rtl)},Gi=function(a){var c=Zr();if(Jr()){Ne("SweetAlert2 requires document to initialize");return}var f=document.createElement("div");f.className=x.container,c&&Z(f,x["no-transition"]),Lt(f,$i);var w=Hi(a.target);w.appendChild(f),bo(a),gr(w),zi()},Bn=function(a,c){a instanceof HTMLElement?c.appendChild(a):v(a)==="object"?Un(a,c):a&&Lt(c,a)},Un=function(a,c){a.jquery?Ue(c,a):Lt(c,a.toString())},Ue=function(a,c){if(a.textContent="",0 in c)for(var f=0;f in c;f++)a.appendChild(c[f].cloneNode(!0));else a.appendChild(c.cloneNode(!0))},ge=function(){if(Jr())return!1;var m=document.createElement("div");return typeof m.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof m.style.animation<"u"?"animationend":!1}(),To=function(a,c){var f=en(),w=ue();!f||!w||(!c.showConfirmButton&&!c.showDenyButton&&!c.showCancelButton?Vt(f):yt(f),Qt(f,c,"actions"),Ki(f,w,c),Lt(w,c.loaderHtml||""),Qt(w,c,"loader"))};function Ki(m,a,c){var f=Wt(),w=be(),N=Me();!f||!w||!N||(_r(f,"confirm",c),_r(w,"deny",c),_r(N,"cancel",c),Wi(f,w,N,c),c.reverseButtons&&(c.toast?(m.insertBefore(N,f),m.insertBefore(w,f)):(m.insertBefore(N,a),m.insertBefore(w,a),m.insertBefore(f,a))))}function Wi(m,a,c,f){if(!f.buttonsStyling){pt([m,a,c],x.styled);return}Z([m,a,c],x.styled),f.confirmButtonColor&&(m.style.backgroundColor=f.confirmButtonColor,Z(m,x["default-outline"])),f.denyButtonColor&&(a.style.backgroundColor=f.denyButtonColor,Z(a,x["default-outline"])),f.cancelButtonColor&&(c.style.backgroundColor=f.cancelButtonColor,Z(c,x["default-outline"]))}function _r(m,a,c){var f=Je(a);Fn(m,c["show".concat(f,"Button")],"inline-block"),Lt(m,c["".concat(a,"ButtonText")]||""),m.setAttribute("aria-label",c["".concat(a,"ButtonAriaLabel")]||""),m.className=x[a],Qt(m,c,"".concat(a,"Button"))}var ti=function(a,c){var f=Wr();f&&(Lt(f,c.closeButtonHtml||""),Qt(f,c,"closeButton"),Fn(f,c.showCloseButton),f.setAttribute("aria-label",c.closeButtonAriaLabel||""))},ei=function(a,c){var f=$t();f&&(Qi(f,c.backdrop),Xi(f,c.position),Ao(f,c.grow),Qt(f,c,"container"))};function Qi(m,a){typeof a=="string"?m.style.background=a:a||Z([document.documentElement,document.body],x["no-backdrop"])}function Xi(m,a){a&&(a in x?Z(m,x[a]):(qt('The "position" parameter is not valid, defaulting to "center"'),Z(m,x.center)))}function Ao(m,a){a&&Z(m,x["grow-".concat(a)])}var ut={innerParams:new WeakMap,domCache:new WeakMap},Yi=["input","file","range","select","radio","checkbox","textarea"],Ji=function(a,c){var f=it();if(f){var w=ut.innerParams.get(a),N=!w||c.input!==w.input;Yi.forEach(function(j){var J=pe(f,x[j]);J&&(_e(j,c.inputAttributes),J.className=x[j],N&&Vt(J))}),c.input&&(N&&Io(c),yr(c))}},Io=function(a){if(a.input){if(!dt[a.input]){Ne("Unexpected type of input! Expected ".concat(Object.keys(dt).join(" | "),', got "').concat(a.input,'"'));return}var c=ht(a.input),f=dt[a.input](c,a);yt(c),a.inputAutoFocus&&setTimeout(function(){Qr(f)})}},je=function(a){for(var c=0;c<a.attributes.length;c++){var f=a.attributes[c].name;["id","type","value","style"].includes(f)||a.removeAttribute(f)}},_e=function(a,c){var f=Fe(it(),a);if(f){je(f);for(var w in c)f.setAttribute(w,c[w])}},yr=function(a){var c=ht(a.input);v(a.customClass)==="object"&&Z(c,a.customClass.input)},on=function(a,c){(!a.placeholder||c.inputPlaceholder)&&(a.placeholder=c.inputPlaceholder)},an=function(a,c,f){if(f.inputLabel){var w=document.createElement("label"),N=x["input-label"];w.setAttribute("for",a.id),w.className=N,v(f.customClass)==="object"&&Z(w,f.customClass.inputLabel),w.innerText=f.inputLabel,c.insertAdjacentElement("beforebegin",w)}},ht=function(a){return pe(it(),x[a]||x.input)},qe=function(a,c){["string","number"].includes(v(c))?a.value="".concat(c):hr(c)||qt('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(v(c),'"'))},dt={};dt.text=dt.email=dt.password=dt.number=dt.tel=dt.url=dt.search=dt.date=dt["datetime-local"]=dt.time=dt.week=dt.month=function(m,a){return qe(m,a.inputValue),an(m,m,a),on(m,a),m.type=a.input,m},dt.file=function(m,a){return an(m,m,a),on(m,a),m},dt.range=function(m,a){var c=m.querySelector("input"),f=m.querySelector("output");return qe(c,a.inputValue),c.type=a.input,qe(f,a.inputValue),an(c,m,a),m},dt.select=function(m,a){if(m.textContent="",a.inputPlaceholder){var c=document.createElement("option");Lt(c,a.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,m.appendChild(c)}return an(m,m,a),m},dt.radio=function(m){return m.textContent="",m},dt.checkbox=function(m,a){var c=Fe(it(),"checkbox");c.value="1",c.checked=!!a.inputValue;var f=m.querySelector("span");return Lt(f,a.inputPlaceholder),c},dt.textarea=function(m,a){qe(m,a.inputValue),on(m,a),an(m,m,a);var c=function(w){return parseInt(window.getComputedStyle(w).marginLeft)+parseInt(window.getComputedStyle(w).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var f=parseInt(window.getComputedStyle(it()).width),w=function(){if(document.body.contains(m)){var j=m.offsetWidth+c(m);j>f?it().style.width="".concat(j,"px"):ae(it(),"width",a.width)}};new MutationObserver(w).observe(m,{attributes:!0,attributeFilter:["style"]})}}),m};var jn=function(a,c){var f=Nn();f&&(Xr(f),Qt(f,c,"htmlContainer"),c.html?(Bn(c.html,f),yt(f,"block")):c.text?(f.textContent=c.text,yt(f,"block")):Vt(f),Ji(a,c))},Ro=function(a,c){var f=Kr();f&&(Xr(f),Fn(f,c.footer,"block"),c.footer&&Bn(c.footer,f),Qt(f,c,"footer"))},Zi=function(a,c){var f=ut.innerParams.get(a),w=tn();if(w){if(f&&c.icon===f.icon){ln(w,c),ts(w,c);return}if(!c.icon&&!c.iconHtml){Vt(w);return}if(c.icon&&Object.keys(Ee).indexOf(c.icon)===-1){Ne('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(c.icon,'"')),Vt(w);return}yt(w),ln(w,c),ts(w,c),Z(w,c.showClass&&c.showClass.icon)}},ts=function(a,c){for(var f=0,w=Object.entries(Ee);f<w.length;f++){var N=ft(w[f],2),j=N[0],J=N[1];c.icon!==j&&pt(a,J)}Z(a,c.icon&&Ee[c.icon]),Ae(a,c),So(),Qt(a,c,"icon")},So=function(){var a=it();if(a)for(var c=window.getComputedStyle(a).getPropertyValue("background-color"),f=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),w=0;w<f.length;w++)f[w].style.backgroundColor=c},Po=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Co=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ln=function(a,c){if(!(!c.icon&&!c.iconHtml)){var f=a.innerHTML,w="";if(c.iconHtml)w=ni(c.iconHtml);else if(c.icon==="success")w=Po,f=f.replace(/ style=".*?"/g,"");else if(c.icon==="error")w=Co;else if(c.icon){var N={question:"?",warning:"!",info:"i"};w=ni(N[c.icon])}f.trim()!==w.trim()&&Lt(a,w)}},Ae=function(a,c){if(c.iconColor){a.style.color=c.iconColor,a.style.borderColor=c.iconColor;for(var f=0,w=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];f<w.length;f++){var N=w[f];Be(a,N,"background-color",c.iconColor)}Be(a,".swal2-success-ring","border-color",c.iconColor)}},ni=function(a){return'<div class="'.concat(x["icon-content"],'">').concat(a,"</div>")},es=function(a,c){var f=Gr();if(f){if(!c.imageUrl){Vt(f);return}yt(f,""),f.setAttribute("src",c.imageUrl),f.setAttribute("alt",c.imageAlt||""),ae(f,"width",c.imageWidth),ae(f,"height",c.imageHeight),f.className=x.image,Qt(f,c,"image")}},ns=function(a,c){var f=$t(),w=it();if(!(!f||!w)){if(c.toast){ae(f,"width",c.width),w.style.width="100%";var N=ue();N&&w.insertBefore(N,tn())}else ae(w,"width",c.width);ae(w,"padding",c.padding),c.color&&(w.style.color=c.color),c.background&&(w.style.background=c.background),Vt(It()),cn(w,c)}},cn=function(a,c){var f=c.showClass||{};a.className="".concat(x.popup," ").concat(Xt(a)?f.popup:""),c.toast?(Z([document.documentElement,document.body],x["toast-shown"]),Z(a,x.toast)):Z(a,x.modal),Qt(a,c,"popup"),typeof c.customClass=="string"&&Z(a,c.customClass),c.icon&&Z(a,x["icon-".concat(c.icon)])},ko=function(a,c){var f=At();if(f){var w=c.progressSteps,N=c.currentProgressStep;if(!w||w.length===0||N===void 0){Vt(f);return}yt(f),f.textContent="",N>=w.length&&qt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),w.forEach(function(j,J){var tt=xo(j);if(f.appendChild(tt),J===N&&Z(tt,x["active-progress-step"]),J!==w.length-1){var Et=Do(c);f.appendChild(Et)}})}},xo=function(a){var c=document.createElement("li");return Z(c,x["progress-step"]),Lt(c,a),c},Do=function(a){var c=document.createElement("li");return Z(c,x["progress-step-line"]),a.progressStepsDistance&&ae(c,"width",a.progressStepsDistance),c},Ie=function(a,c){var f=dr();f&&(Xr(f),Fn(f,c.title||c.titleText,"block"),c.title&&Bn(c.title,f),c.titleText&&(f.innerText=c.titleText),Qt(f,c,"title"))},rs=function(a,c){ns(a,c),ei(a,c),ko(a,c),Zi(a,c),es(a,c),Ie(a,c),ti(a,c),jn(a,c),To(a,c),Ro(a,c);var f=it();typeof c.didRender=="function"&&f&&c.didRender(f)},Vo=function(){return Xt(it())},un=function(){var a;return(a=Wt())===null||a===void 0?void 0:a.click()},wr=function(){var a;return(a=be())===null||a===void 0?void 0:a.click()},is=function(){var a;return(a=Me())===null||a===void 0?void 0:a.click()},he=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),hn=function(a){a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},ss=function(a,c,f){hn(a),c.toast||(a.keydownHandler=function(w){return Oo(c,w,f)},a.keydownTarget=c.keydownListenerCapture?window:it(),a.keydownListenerCapture=c.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},qn=function(a,c){var f,w=On();if(w.length){a=a+c,a===w.length?a=0:a===-1&&(a=w.length-1),w[a].focus();return}(f=it())===null||f===void 0||f.focus()},gt=["ArrowRight","ArrowDown"],No=["ArrowLeft","ArrowUp"],Oo=function(a,c,f){a&&(c.isComposing||c.keyCode===229||(a.stopKeydownPropagation&&c.stopPropagation(),c.key==="Enter"?os(c,a):c.key==="Tab"?as(c):[].concat(gt,No).includes(c.key)?ls(c.key):c.key==="Escape"&&vr(c,a,f)))},os=function(a,c){if(Ze(c.allowEnterKey)){var f=Fe(it(),c.input);if(a.target&&f&&a.target instanceof HTMLElement&&a.target.outerHTML===f.outerHTML){if(["textarea","file"].includes(c.input))return;un(),a.preventDefault()}}},as=function(a){for(var c=a.target,f=On(),w=-1,N=0;N<f.length;N++)if(c===f[N]){w=N;break}a.shiftKey?qn(w,-1):qn(w,1),a.stopPropagation(),a.preventDefault()},ls=function(a){var c=en(),f=Wt(),w=be(),N=Me();if(!(!c||!f||!w||!N)){var j=[f,w,N];if(!(document.activeElement instanceof HTMLElement&&!j.includes(document.activeElement))){var J=gt.includes(a)?"nextElementSibling":"previousElementSibling",tt=document.activeElement;if(tt){for(var Et=0;Et<c.children.length;Et++){if(tt=tt[J],!tt)return;if(tt instanceof HTMLButtonElement&&Xt(tt))break}tt instanceof HTMLButtonElement&&tt.focus()}}}},vr=function(a,c,f){Ze(c.allowEscapeKey)&&(a.preventDefault(),f(he.esc))},$e={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},ye=function(){var a=$t(),c=Array.from(document.body.children);c.forEach(function(f){f.contains(a)||(f.hasAttribute("aria-hidden")&&f.setAttribute("data-previous-aria-hidden",f.getAttribute("aria-hidden")||""),f.setAttribute("aria-hidden","true"))})},ri=function(){var a=Array.from(document.body.children);a.forEach(function(c){c.hasAttribute("data-previous-aria-hidden")?(c.setAttribute("aria-hidden",c.getAttribute("data-previous-aria-hidden")||""),c.removeAttribute("data-previous-aria-hidden")):c.removeAttribute("aria-hidden")})},cs=typeof window<"u"&&!!window.GestureEvent,$n=function(){if(cs&&!oe(document.body,x.iosfix)){var a=document.body.scrollTop;document.body.style.top="".concat(a*-1,"px"),Z(document.body,x.iosfix),us()}},us=function(){var a=$t();if(a){var c;a.ontouchstart=function(f){c=ii(f)},a.ontouchmove=function(f){c&&(f.preventDefault(),f.stopPropagation())}}},ii=function(a){var c=a.target,f=$t(),w=Nn();return!f||!w||Er(a)||hs(a)?!1:c===f||!Yr(f)&&c instanceof HTMLElement&&c.tagName!=="INPUT"&&c.tagName!=="TEXTAREA"&&!(Yr(w)&&w.contains(c))},Er=function(a){return a.touches&&a.touches.length&&a.touches[0].touchType==="stylus"},hs=function(a){return a.touches&&a.touches.length>1},br=function(){if(oe(document.body,x.iosfix)){var a=parseInt(document.body.style.top,10);pt(document.body,x.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},Mo=function(){var a=document.createElement("div");a.className=x["scrollbar-measure"],document.body.appendChild(a);var c=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),c},ze=null,zn=function(a){ze===null&&(document.body.scrollHeight>window.innerHeight||a==="scroll")&&(ze=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(ze+Mo(),"px"))},ds=function(){ze!==null&&(document.body.style.paddingRight="".concat(ze,"px"),ze=null)};function si(m,a,c,f){Mn()?ai(m,f):(Ui(c).then(function(){return ai(m,f)}),hn(Q)),cs?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),fr()&&(ds(),br(),ri()),oi()}function oi(){pt([document.documentElement,document.body],[x.shown,x["height-auto"],x["no-backdrop"],x["toast-shown"]])}function de(m){m=ps(m);var a=$e.swalPromiseResolve.get(this),c=fs(this);this.isAwaitingPromise?m.isDismissed||(dn(this),a(m)):c&&a(m)}var fs=function(a){var c=it();if(!c)return!1;var f=ut.innerParams.get(a);if(!f||oe(c,f.hideClass.popup))return!1;pt(c,f.showClass.popup),Z(c,f.hideClass.popup);var w=$t();return pt(w,f.showClass.backdrop),Z(w,f.hideClass.backdrop),He(a,c,f),!0};function Hn(m){var a=$e.swalPromiseReject.get(this);dn(this),a&&a(m)}var dn=function(a){a.isAwaitingPromise&&(delete a.isAwaitingPromise,ut.innerParams.get(a)||a._destroy())},ps=function(a){return typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a)},He=function(a,c,f){var w=$t(),N=ge&&mr(c);typeof f.willClose=="function"&&f.willClose(c),N?ms(a,c,w,f.returnFocus,f.didClose):si(a,w,f.returnFocus,f.didClose)},ms=function(a,c,f,w,N){ge&&(Q.swalCloseEventFinishedCallback=si.bind(null,a,f,w,N),c.addEventListener(ge,function(j){j.target===c&&(Q.swalCloseEventFinishedCallback(),delete Q.swalCloseEventFinishedCallback)}))},ai=function(a,c){setTimeout(function(){typeof c=="function"&&c.bind(a.params)(),a._destroy&&a._destroy()})},Ge=function(a){var c=it();if(c||new bs,c=it(),!!c){var f=ue();Mn()?Vt(tn()):gs(c,a),yt(f),c.setAttribute("data-loading","true"),c.setAttribute("aria-busy","true"),c.focus()}},gs=function(a,c){var f=en(),w=ue();!f||!w||(!c&&Xt(Wt())&&(c=Wt()),yt(f),c&&(Vt(c),w.setAttribute("data-button-to-replace",c.className),f.insertBefore(w,c)),Z([a,f],x.loading))},Tr=function(a,c){c.input==="select"||c.input==="radio"?s(a,c):["text","email","number","tel","textarea"].some(function(f){return f===c.input})&&(Dn(c.inputValue)||hr(c.inputValue))&&(Ge(Wt()),u(a,c))},Yt=function(a,c){var f=a.getInput();if(!f)return null;switch(c.input){case"checkbox":return _s(f);case"radio":return ys(f);case"file":return fn(f);default:return c.inputAutoTrim?f.value.trim():f.value}},_s=function(a){return a.checked?1:0},ys=function(a){return a.checked?a.value:null},fn=function(a){return a.files&&a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null},s=function(a,c){var f=it();if(f){var w=function(j){c.input==="select"?d(f,P(j),c):c.input==="radio"&&_(f,P(j),c)};Dn(c.inputOptions)||hr(c.inputOptions)?(Ge(Wt()),Oe(c.inputOptions).then(function(N){a.hideLoading(),w(N)})):v(c.inputOptions)==="object"?w(c.inputOptions):Ne("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(v(c.inputOptions)))}},u=function(a,c){var f=a.getInput();f&&(Vt(f),Oe(c.inputValue).then(function(w){f.value=c.input==="number"?"".concat(parseFloat(w)||0):"".concat(w),yt(f),f.focus(),a.hideLoading()}).catch(function(w){Ne("Error in inputValue promise: ".concat(w)),f.value="",yt(f),f.focus(),a.hideLoading()}))};function d(m,a,c){var f=pe(m,x.select);if(f){var w=function(j,J,tt){var Et=document.createElement("option");Et.value=tt,Lt(Et,J),Et.selected=D(tt,c.inputValue),j.appendChild(Et)};a.forEach(function(N){var j=N[0],J=N[1];if(Array.isArray(J)){var tt=document.createElement("optgroup");tt.label=j,tt.disabled=!1,f.appendChild(tt),J.forEach(function(Et){return w(tt,Et[1],Et[0])})}else w(f,J,j)}),f.focus()}}function _(m,a,c){var f=pe(m,x.radio);if(f){a.forEach(function(N){var j=N[0],J=N[1],tt=document.createElement("input"),Et=document.createElement("label");tt.type="radio",tt.name=x.radio,tt.value=j,D(j,c.inputValue)&&(tt.checked=!0);var li=document.createElement("span");Lt(li,J),li.className=x.label,Et.appendChild(tt),Et.appendChild(li),f.appendChild(Et)});var w=f.querySelectorAll("input");w.length&&w[0].focus()}}var P=function m(a){var c=[];return a instanceof Map?a.forEach(function(f,w){var N=f;v(N)==="object"&&(N=m(N)),c.push([w,N])}):Object.keys(a).forEach(function(f){var w=a[f];v(w)==="object"&&(w=m(w)),c.push([f,w])}),c},D=function(a,c){return!!c&&c.toString()===a.toString()},B=void 0,ct=function(a){var c=ut.innerParams.get(a);a.disableButtons(),c.input?kt(a,"confirm"):Kn(a,!0)},Ct=function(a){var c=ut.innerParams.get(a);a.disableButtons(),c.returnInputValueOnDeny?kt(a,"deny"):Re(a,!1)},nt=function(a,c){a.disableButtons(),c(he.cancel)},kt=function(a,c){var f=ut.innerParams.get(a);if(!f.input){Ne('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Je(c)));return}var w=a.getInput(),N=Yt(a,f);f.inputValidator?Nt(a,N,c):w&&!w.checkValidity()?(a.enableButtons(),a.showValidationMessage(f.validationMessage||w.validationMessage)):c==="deny"?Re(a,N):Kn(a,N)},Nt=function(a,c,f){var w=ut.innerParams.get(a);a.disableInput();var N=Promise.resolve().then(function(){return Oe(w.inputValidator(c,w.validationMessage))});N.then(function(j){a.enableButtons(),a.enableInput(),j?a.showValidationMessage(j):f==="deny"?Re(a,c):Kn(a,c)})},Re=function(a,c){var f=ut.innerParams.get(a||B);if(f.showLoaderOnDeny&&Ge(be()),f.preDeny){a.isAwaitingPromise=!0;var w=Promise.resolve().then(function(){return Oe(f.preDeny(c,f.validationMessage))});w.then(function(N){N===!1?(a.hideLoading(),dn(a)):a.close({isDenied:!0,value:typeof N>"u"?c:N})}).catch(function(N){return Gn(a||B,N)})}else a.close({isDenied:!0,value:c})},re=function(a,c){a.close({isConfirmed:!0,value:c})},Gn=function(a,c){a.rejectPromise(c)},Kn=function(a,c){var f=ut.innerParams.get(a||B);if(f.showLoaderOnConfirm&&Ge(),f.preConfirm){a.resetValidationMessage(),a.isAwaitingPromise=!0;var w=Promise.resolve().then(function(){return Oe(f.preConfirm(c,f.validationMessage))});w.then(function(N){Xt(It())||N===!1?(a.hideLoading(),dn(a)):re(a,typeof N>"u"?c:N)}).catch(function(N){return Gn(a||B,N)})}else re(a,c)};function ws(){var m=ut.innerParams.get(this);if(m){var a=ut.domCache.get(this);Vt(a.loader),Mn()?m.icon&&yt(tn()):ad(a),pt([a.popup,a.actions],x.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}}var ad=function(a){var c=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));c.length?yt(c[0],"inline-block"):pr()&&Vt(a.actions)};function ul(){var m=ut.innerParams.get(this),a=ut.domCache.get(this);return a?Fe(a.popup,m.input):null}function hl(m,a,c){var f=ut.domCache.get(m);a.forEach(function(w){f[w].disabled=c})}function dl(m,a){var c=it();if(!(!c||!m))if(m.type==="radio")for(var f=c.querySelectorAll('[name="'.concat(x.radio,'"]')),w=0;w<f.length;w++)f[w].disabled=a;else m.disabled=a}function fl(){hl(this,["confirmButton","denyButton","cancelButton"],!1)}function pl(){hl(this,["confirmButton","denyButton","cancelButton"],!0)}function ml(){dl(this.getInput(),!1)}function gl(){dl(this.getInput(),!0)}function _l(m){var a=ut.domCache.get(this),c=ut.innerParams.get(this);Lt(a.validationMessage,m),a.validationMessage.className=x["validation-message"],c.customClass&&c.customClass.validationMessage&&Z(a.validationMessage,c.customClass.validationMessage),yt(a.validationMessage);var f=this.getInput();f&&(f.setAttribute("aria-invalid","true"),f.setAttribute("aria-describedby",x["validation-message"]),Qr(f),Z(f,x.inputerror))}function yl(){var m=ut.domCache.get(this);m.validationMessage&&Vt(m.validationMessage);var a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),pt(a,x.inputerror))}var Ar={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ld=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],cd={},ud=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],wl=function(a){return Object.prototype.hasOwnProperty.call(Ar,a)},vl=function(a){return ld.indexOf(a)!==-1},El=function(a){return cd[a]},hd=function(a){wl(a)||qt('Unknown parameter "'.concat(a,'"'))},dd=function(a){ud.includes(a)&&qt('The parameter "'.concat(a,'" is incompatible with toasts'))},fd=function(a){var c=El(a);c&&Hr(a,c)},pd=function(a){a.backdrop===!1&&a.allowOutsideClick&&qt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var c in a)hd(c),a.toast&&dd(c),fd(c)};function bl(m){var a=it(),c=ut.innerParams.get(this);if(!a||oe(a,c.hideClass.popup)){qt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var f=md(m),w=Object.assign({},c,f);rs(this,w),ut.innerParams.set(this,w),Object.defineProperties(this,{params:{value:Object.assign({},this.params,m),writable:!1,enumerable:!0}})}var md=function(a){var c={};return Object.keys(a).forEach(function(f){vl(f)?c[f]=a[f]:qt("Invalid parameter to update: ".concat(f))}),c};function Tl(){var m=ut.domCache.get(this),a=ut.innerParams.get(this);if(!a){Al(this);return}m.popup&&Q.swalCloseEventFinishedCallback&&(Q.swalCloseEventFinishedCallback(),delete Q.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),gd(this)}var gd=function(a){Al(a),delete a.params,delete Q.keydownHandler,delete Q.keydownTarget,delete Q.currentInstance},Al=function(a){a.isAwaitingPromise?(Lo(ut,a),a.isAwaitingPromise=!0):(Lo($e,a),Lo(ut,a),delete a.isAwaitingPromise,delete a.disableButtons,delete a.enableButtons,delete a.getInput,delete a.disableInput,delete a.enableInput,delete a.hideLoading,delete a.disableLoading,delete a.showValidationMessage,delete a.resetValidationMessage,delete a.close,delete a.closePopup,delete a.closeModal,delete a.closeToast,delete a.rejectPromise,delete a.update,delete a._destroy)},Lo=function(a,c){for(var f in a)a[f].delete(c)},_d=Object.freeze({__proto__:null,_destroy:Tl,close:de,closeModal:de,closePopup:de,closeToast:de,disableButtons:pl,disableInput:gl,disableLoading:ws,enableButtons:fl,enableInput:ml,getInput:ul,handleAwaitingPromise:dn,hideLoading:ws,rejectPromise:Hn,resetValidationMessage:yl,showValidationMessage:_l,update:bl}),yd=function(a,c,f){a.toast?wd(a,c,f):(Ed(c),bd(c),Td(a,c,f))},wd=function(a,c,f){c.popup.onclick=function(){a&&(vd(a)||a.timer||a.input)||f(he.close)}},vd=function(a){return!!(a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton)},vs=!1,Ed=function(a){a.popup.onmousedown=function(){a.container.onmouseup=function(c){a.container.onmouseup=function(){},c.target===a.container&&(vs=!0)}}},bd=function(a){a.container.onmousedown=function(c){c.target===a.container&&c.preventDefault(),a.popup.onmouseup=function(f){a.popup.onmouseup=function(){},(f.target===a.popup||f.target instanceof HTMLElement&&a.popup.contains(f.target))&&(vs=!0)}}},Td=function(a,c,f){c.container.onclick=function(w){if(vs){vs=!1;return}w.target===c.container&&Ze(a.allowOutsideClick)&&f(he.backdrop)}},Ad=function(a){return v(a)==="object"&&a.jquery},Il=function(a){return a instanceof Element||Ad(a)},Id=function(a){var c={};return v(a[0])==="object"&&!Il(a[0])?Object.assign(c,a[0]):["title","html","icon"].forEach(function(f,w){var N=a[w];typeof N=="string"||Il(N)?c[f]=N:N!==void 0&&Ne("Unexpected type of ".concat(f,'! Expected "string" or "Element", got ').concat(v(N)))}),c};function Rd(){for(var m=this,a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return l(m,c)}function Sd(m){var a=function(c){function f(){return A(this,f),r(this,f,arguments)}return L(f,c),O(f,[{key:"_main",value:function(N,j){return bt(V(f.prototype),"_main",this).call(this,N,Object.assign({},m,j))}}])}(this);return a}var Pd=function(){return Q.timeout&&Q.timeout.getTimerLeft()},Rl=function(){if(Q.timeout)return Te(),Q.timeout.stop()},Sl=function(){if(Q.timeout){var a=Q.timeout.start();return sn(a),a}},Cd=function(){var a=Q.timeout;return a&&(a.running?Rl():Sl())},kd=function(a){if(Q.timeout){var c=Q.timeout.increase(a);return sn(c,!0),c}},xd=function(){return!!(Q.timeout&&Q.timeout.isRunning())},Pl=!1,Fo={};function Dd(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Fo[m]=this,Pl||(document.body.addEventListener("click",Vd),Pl=!0)}var Vd=function(a){for(var c=a.target;c&&c!==document;c=c.parentNode)for(var f in Fo){var w=c.getAttribute(f);if(w){Fo[f].fire({template:w});return}}},Nd=Object.freeze({__proto__:null,argsToParams:Id,bindClickHandler:Dd,clickCancel:is,clickConfirm:un,clickDeny:wr,enableLoading:Ge,fire:Rd,getActions:en,getCancelButton:Me,getCloseButton:Wr,getConfirmButton:Wt,getContainer:$t,getDenyButton:be,getFocusableElements:On,getFooter:Kr,getHtmlContainer:Nn,getIcon:tn,getIconContent:wo,getImage:Gr,getInputLabel:vo,getLoader:ue,getPopup:it,getProgressSteps:At,getTimerLeft:Pd,getTimerProgressBar:nn,getTitle:dr,getValidationMessage:It,increaseTimer:kd,isDeprecatedParameter:El,isLoading:Ln,isTimerRunning:xd,isUpdatableParameter:vl,isValidParameter:wl,isVisible:Vo,mixin:Sd,resumeTimer:Sl,showLoading:Ge,stopTimer:Rl,toggleTimer:Cd}),Od=function(){function m(a,c){A(this,m),this.callback=a,this.remaining=c,this.running=!1,this.start()}return O(m,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(c){var f=this.running;return f&&this.stop(),this.remaining+=c,f&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Cl=["swal-title","swal-html","swal-footer"],Md=function(a){var c=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!c)return{};var f=c.content;zd(f);var w=Object.assign(Ld(f),Fd(f),Bd(f),Ud(f),jd(f),qd(f),$d(f,Cl));return w},Ld=function(a){var c={},f=Array.from(a.querySelectorAll("swal-param"));return f.forEach(function(w){Wn(w,["name","value"]);var N=w.getAttribute("name"),j=w.getAttribute("value");typeof Ar[N]=="boolean"?c[N]=j!=="false":v(Ar[N])==="object"?c[N]=JSON.parse(j):c[N]=j}),c},Fd=function(a){var c={},f=Array.from(a.querySelectorAll("swal-function-param"));return f.forEach(function(w){var N=w.getAttribute("name"),j=w.getAttribute("value");c[N]=new Function("return ".concat(j))()}),c},Bd=function(a){var c={},f=Array.from(a.querySelectorAll("swal-button"));return f.forEach(function(w){Wn(w,["type","color","aria-label"]);var N=w.getAttribute("type");c["".concat(N,"ButtonText")]=w.innerHTML,c["show".concat(Je(N),"Button")]=!0,w.hasAttribute("color")&&(c["".concat(N,"ButtonColor")]=w.getAttribute("color")),w.hasAttribute("aria-label")&&(c["".concat(N,"ButtonAriaLabel")]=w.getAttribute("aria-label"))}),c},Ud=function(a){var c={},f=a.querySelector("swal-image");return f&&(Wn(f,["src","width","height","alt"]),f.hasAttribute("src")&&(c.imageUrl=f.getAttribute("src")),f.hasAttribute("width")&&(c.imageWidth=f.getAttribute("width")),f.hasAttribute("height")&&(c.imageHeight=f.getAttribute("height")),f.hasAttribute("alt")&&(c.imageAlt=f.getAttribute("alt"))),c},jd=function(a){var c={},f=a.querySelector("swal-icon");return f&&(Wn(f,["type","color"]),f.hasAttribute("type")&&(c.icon=f.getAttribute("type")),f.hasAttribute("color")&&(c.iconColor=f.getAttribute("color")),c.iconHtml=f.innerHTML),c},qd=function(a){var c={},f=a.querySelector("swal-input");f&&(Wn(f,["type","label","placeholder","value"]),c.input=f.getAttribute("type")||"text",f.hasAttribute("label")&&(c.inputLabel=f.getAttribute("label")),f.hasAttribute("placeholder")&&(c.inputPlaceholder=f.getAttribute("placeholder")),f.hasAttribute("value")&&(c.inputValue=f.getAttribute("value")));var w=Array.from(a.querySelectorAll("swal-input-option"));return w.length&&(c.inputOptions={},w.forEach(function(N){Wn(N,["value"]);var j=N.getAttribute("value"),J=N.innerHTML;c.inputOptions[j]=J})),c},$d=function(a,c){var f={};for(var w in c){var N=c[w],j=a.querySelector(N);j&&(Wn(j,[]),f[N.replace(/^swal-/,"")]=j.innerHTML.trim())}return f},zd=function(a){var c=Cl.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(function(f){var w=f.tagName.toLowerCase();c.includes(w)||qt("Unrecognized element <".concat(w,">"))})},Wn=function(a,c){Array.from(a.attributes).forEach(function(f){c.indexOf(f.name)===-1&&qt(['Unrecognized attribute "'.concat(f.name,'" on <').concat(a.tagName.toLowerCase(),">."),"".concat(c.length?"Allowed attributes are: ".concat(c.join(", ")):"To set the value, use HTML within the element.")])})},kl=10,Hd=function(a){var c=$t(),f=it();typeof a.willOpen=="function"&&a.willOpen(f);var w=window.getComputedStyle(document.body),N=w.overflowY;Qd(c,f,a),setTimeout(function(){Kd(c,f)},kl),fr()&&(Wd(c,a.scrollbarPadding,N),ye()),!Mn()&&!Q.previousActiveElement&&(Q.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(function(){return a.didOpen(f)}),pt(c,x["no-transition"])},Gd=function m(a){var c=it();if(!(a.target!==c||!ge)){var f=$t();c.removeEventListener(ge,m),f.style.overflowY="auto"}},Kd=function(a,c){ge&&mr(c)?(a.style.overflowY="hidden",c.addEventListener(ge,Gd)):a.style.overflowY="auto"},Wd=function(a,c,f){$n(),c&&f!=="hidden"&&zn(f),setTimeout(function(){a.scrollTop=0})},Qd=function(a,c,f){Z(a,f.showClass.backdrop),f.animation?(c.style.setProperty("opacity","0","important"),yt(c,"grid"),setTimeout(function(){Z(c,f.showClass.popup),c.style.removeProperty("opacity")},kl)):yt(c,"grid"),Z([document.documentElement,document.body],x.shown),f.heightAuto&&f.backdrop&&!f.toast&&Z([document.documentElement,document.body],x["height-auto"])},xl={email:function(a,c){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)?Promise.resolve():Promise.resolve(c||"Invalid email address")},url:function(a,c){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(c||"Invalid URL")}};function Xd(m){m.inputValidator||(m.input==="email"&&(m.inputValidator=xl.email),m.input==="url"&&(m.inputValidator=xl.url))}function Yd(m){(!m.target||typeof m.target=="string"&&!document.querySelector(m.target)||typeof m.target!="string"&&!m.target.appendChild)&&(qt('Target parameter is not valid, defaulting to "body"'),m.target="body")}function Jd(m){Xd(m),m.showLoaderOnConfirm&&!m.preConfirm&&qt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Yd(m),typeof m.title=="string"&&(m.title=m.title.split(`
`).join("<br />")),Gi(m)}var Se,Es=new WeakMap,Tt=function(){function m(){if(A(this,m),_o(this,Es,void 0),!(typeof window>"u")){Se=this;for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];var w=Object.freeze(this.constructor.argsToParams(c));this.params=w,this.isAwaitingPromise=!1,o(Es,this,this._main(Se.params))}}return O(m,[{key:"_main",value:function(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(pd(Object.assign({},f,c)),Q.currentInstance){var w=$e.swalPromiseResolve.get(Q.currentInstance),N=Q.currentInstance.isAwaitingPromise;Q.currentInstance._destroy(),N||w({isDismissed:!0}),fr()&&ri()}Q.currentInstance=Se;var j=tf(c,f);Jd(j),Object.freeze(j),Q.timeout&&(Q.timeout.stop(),delete Q.timeout),clearTimeout(Q.restoreFocusTimeout);var J=ef(Se);return rs(Se,j),ut.innerParams.set(Se,j),Zd(Se,J,j)}},{key:"then",value:function(c){return i(Es,this).then(c)}},{key:"finally",value:function(c){return i(Es,this).finally(c)}}])}(),Zd=function(a,c,f){return new Promise(function(w,N){var j=function(tt){a.close({isDismissed:!0,dismiss:tt})};$e.swalPromiseResolve.set(a,w),$e.swalPromiseReject.set(a,N),c.confirmButton.onclick=function(){ct(a)},c.denyButton.onclick=function(){Ct(a)},c.cancelButton.onclick=function(){nt(a,j)},c.closeButton.onclick=function(){j(he.close)},yd(f,c,j),ss(Q,f,j),Tr(a,f),Hd(f),nf(Q,f,j),rf(c,f),setTimeout(function(){c.container.scrollTop=0})})},tf=function(a,c){var f=Md(a),w=Object.assign({},Ar,c,f,a);return w.showClass=Object.assign({},Ar.showClass,w.showClass),w.hideClass=Object.assign({},Ar.hideClass,w.hideClass),w.animation===!1&&(w.showClass={backdrop:"swal2-noanimation"},w.hideClass={}),w},ef=function(a){var c={popup:it(),container:$t(),actions:en(),confirmButton:Wt(),denyButton:be(),cancelButton:Me(),loader:ue(),closeButton:Wr(),validationMessage:It(),progressSteps:At()};return ut.domCache.set(a,c),c},nf=function(a,c,f){var w=nn();Vt(w),c.timer&&(a.timeout=new Od(function(){f("timer"),delete a.timeout},c.timer),c.timerProgressBar&&(yt(w),Qt(w,c,"timerProgressBar"),setTimeout(function(){a.timeout&&a.timeout.running&&sn(c.timer)})))},rf=function(a,c){if(!c.toast){if(!Ze(c.allowEnterKey)){of();return}sf(a,c)||qn(-1,1)}},sf=function(a,c){return c.focusDeny&&Xt(a.denyButton)?(a.denyButton.focus(),!0):c.focusCancel&&Xt(a.cancelButton)?(a.cancelButton.focus(),!0):c.focusConfirm&&Xt(a.confirmButton)?(a.confirmButton.focus(),!0):!1},of=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Dl=new Date,Vl=localStorage.getItem("swal-initiation");Vl?(Dl.getTime()-Date.parse(Vl))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var m=document.createElement("audio");m.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",m.loop=!0,document.body.appendChild(m),setTimeout(function(){m.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Dl))}Tt.prototype.disableButtons=pl,Tt.prototype.enableButtons=fl,Tt.prototype.getInput=ul,Tt.prototype.disableInput=gl,Tt.prototype.enableInput=ml,Tt.prototype.hideLoading=ws,Tt.prototype.disableLoading=ws,Tt.prototype.showValidationMessage=_l,Tt.prototype.resetValidationMessage=yl,Tt.prototype.close=de,Tt.prototype.closePopup=de,Tt.prototype.closeModal=de,Tt.prototype.closeToast=de,Tt.prototype.rejectPromise=Hn,Tt.prototype.update=bl,Tt.prototype._destroy=Tl,Object.assign(Tt,Nd),Object.keys(_d).forEach(function(m){Tt[m]=function(){if(Se&&Se[m]){var a;return(a=Se)[m].apply(a,arguments)}return null}}),Tt.DismissReason=he,Tt.version="11.11.0";var bs=Tt;return bs.default=bs,bs}),typeof pn<"u"&&pn.Sweetalert2&&(pn.swal=pn.sweetAlert=pn.Swal=pn.SweetAlert=pn.Sweetalert2),typeof document<"u"&&function(e,r){var i=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(rd);var Zw=rd.exports;const tv=zc(Zw);let ev={data:""},nv=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||ev,rv=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,iv=/\/\*[^]*?\*\/|  +/g,Uc=/\n+/g,_n=(n,t)=>{let e="",r="",i="";for(let o in n){let l=n[o];o[0]=="@"?o[1]=="i"?e=o+" "+l+";":r+=o[1]=="f"?_n(l,o):o+"{"+_n(l,o[1]=="k"?"":t)+"}":typeof l=="object"?r+=_n(l,t?t.replace(/([^,])+/g,h=>o.replace(/(^:.*)|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,h):h?h+" "+p:p)):o):l!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=_n.p?_n.p(o,l):o+":"+l+";")}return e+(t&&i?t+"{"+i+"}":i)+r},Ke={},id=n=>{if(typeof n=="object"){let t="";for(let e in n)t+=e+id(n[e]);return t}return n},sv=(n,t,e,r,i)=>{let o=id(n),l=Ke[o]||(Ke[o]=(p=>{let g=0,y=11;for(;g<p.length;)y=101*y+p.charCodeAt(g++)>>>0;return"go"+y})(o));if(!Ke[l]){let p=o!==n?n:(g=>{let y,v,A=[{}];for(;y=rv.exec(g.replace(iv,""));)y[4]?A.shift():y[3]?(v=y[3].replace(Uc," ").trim(),A.unshift(A[0][v]=A[0][v]||{})):A[0][y[1]]=y[2].replace(Uc," ").trim();return A[0]})(n);Ke[l]=_n(i?{["@keyframes "+l]:p}:p,e?"":"."+l)}let h=e&&Ke.g?Ke.g:null;return e&&(Ke.g=Ke[l]),((p,g,y,v)=>{v?g.data=g.data.replace(v,p):g.data.indexOf(p)===-1&&(g.data=y?p+g.data:g.data+p)})(Ke[l],t,r,h),l},ov=(n,t,e)=>n.reduce((r,i,o)=>{let l=t[o];if(l&&l.call){let h=l(e),p=h&&h.props&&h.props.className||/^go/.test(h)&&h;l=p?"."+p:h&&typeof h=="object"?h.props?"":_n(h,""):h===!1?"":h}return r+i+(l??"")},"");function mo(n){let t=this||{},e=n.call?n(t.p):n;return sv(e.unshift?e.raw?ov(e,[].slice.call(arguments,1),t.p):e.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):e,nv(t.target),t.g,t.o,t.k)}let sd,ya,wa;mo.bind({g:1});let Ye=mo.bind({k:1});function av(n,t,e,r){_n.p=t,sd=n,ya=e,wa=r}function Pn(n,t){let e=this||{};return function(){let r=arguments;function i(o,l){let h=Object.assign({},o),p=h.className||i.className;e.p=Object.assign({theme:ya&&ya()},h),e.o=/ *go\d+/.test(p),h.className=mo.apply(e,r)+(p?" "+p:"");let g=n;return n[0]&&(g=h.as||n,delete h.as),wa&&g[0]&&wa(h),sd(g,h)}return i}}var lv=n=>typeof n=="function",va=(n,t)=>lv(n)?n(t):n,cv=(()=>{let n=0;return()=>(++n).toString()})(),uv=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}})(),hv=20,Os=new Map,dv=1e3,jc=n=>{if(Os.has(n))return;let t=setTimeout(()=>{Os.delete(n),go({type:4,toastId:n})},dv);Os.set(n,t)},fv=n=>{let t=Os.get(n);t&&clearTimeout(t)},Ea=(n,t)=>{switch(t.type){case 0:return{...n,toasts:[t.toast,...n.toasts].slice(0,hv)};case 1:return t.toast.id&&fv(t.toast.id),{...n,toasts:n.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:e}=t;return n.toasts.find(o=>o.id===e.id)?Ea(n,{type:1,toast:e}):Ea(n,{type:0,toast:e});case 3:let{toastId:r}=t;return r?jc(r):n.toasts.forEach(o=>{jc(o.id)}),{...n,toasts:n.toasts.map(o=>o.id===r||r===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...n,pausedAt:t.time};case 6:let i=t.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},pv=[],Xo={toasts:[],pausedAt:void 0},go=n=>{Xo=Ea(Xo,n),pv.forEach(t=>{t(Xo)})},mv=(n,t="blank",e)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...e,id:(e==null?void 0:e.id)||cv()}),Bi=n=>(t,e)=>{let r=mv(t,n,e);return go({type:2,toast:r}),r.id},we=(n,t)=>Bi("blank")(n,t);we.error=Bi("error");we.success=Bi("success");we.loading=Bi("loading");we.custom=Bi("custom");we.dismiss=n=>{go({type:3,toastId:n})};we.remove=n=>go({type:4,toastId:n});we.promise=(n,t,e)=>{let r=we.loading(t.loading,{...e,...e==null?void 0:e.loading});return n.then(i=>(we.success(va(t.success,i),{id:r,...e,...e==null?void 0:e.success}),i)).catch(i=>{we.error(va(t.error,i),{id:r,...e,...e==null?void 0:e.error})}),n};var gv=Ye`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_v=Ye`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yv=Ye`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,wv=Pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_v} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${yv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,vv=Ye`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ev=Pn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${vv} 1s linear infinite;
`,bv=Ye`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Tv=Ye`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Av=Pn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Tv} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Iv=Pn("div")`
  position: absolute;
`,Rv=Pn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Sv=Ye`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pv=Pn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Sv} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Cv=({toast:n})=>{let{icon:t,type:e,iconTheme:r}=n;return t!==void 0?typeof t=="string"?Pt.createElement(Pv,null,t):t:e==="blank"?null:Pt.createElement(Rv,null,Pt.createElement(Ev,{...r}),e!=="loading"&&Pt.createElement(Iv,null,e==="error"?Pt.createElement(wv,{...r}):Pt.createElement(Av,{...r})))},kv=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,xv=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,Dv="0%{opacity:0;} 100%{opacity:1;}",Vv="0%{opacity:1;} 100%{opacity:0;}",Nv=Pn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ov=Pn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Mv=(n,t)=>{let e=n.includes("top")?1:-1,[r,i]=uv()?[Dv,Vv]:[kv(e),xv(e)];return{animation:t?`${Ye(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ye(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};Pt.memo(({toast:n,position:t,style:e,children:r})=>{let i=n.height?Mv(n.position||t||"top-center",n.visible):{opacity:0},o=Pt.createElement(Cv,{toast:n}),l=Pt.createElement(Ov,{...n.ariaProps},va(n.message,n));return Pt.createElement(Nv,{className:n.className,style:{...i,...e,...n.style}},typeof r=="function"?r({icon:o,message:l}):Pt.createElement(Pt.Fragment,null,o,l))});av(Pt.createElement);mo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var qc=we;function Lv(){return{toastError:(r,i)=>{qc.error(i||r.message||"Ha ocurrido un error")},toastSuccess:r=>{qc.success(r)},dialogConfirm:r=>tv.fire({title:"Estás seguro?",text:r,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"})}}const{db:Qn,storage:$c}=jw;function Fv(n){const{toastError:t,toastSuccess:e}=Lv(),r=async()=>{const v=[];try{const A=await Fc(Lc(Qn,n));for(const k of A.docs){const O=k.data();v.push(O)}}catch(A){t(A,`Error al obtener los documentos de ${n}`)}return v},i=async v=>{let A=null;try{const k=gi(Qn,n,v),O=await ll(k);O.exists()&&(A=O.data())}catch(k){t(k,`Error al obtener documento por ID ${v} de ${n}`)}return A},o=async(v,A)=>{try{v.id||(v.id=Jw());let k=[];A&&(k=await p(v.id,A),"imagenURLs"in v||(v.imagenURLs=[]),v.imagenURLs=k),await Dw(gi(Qn,n,v.id),v),e("Documento creado exitosamente!")}catch(k){t(k,`Error al crear documento en ${n}`)}},l=async(v,A)=>{const k=gi(Qn,n,v.id);try{await Lw(Qn,async O=>{if(!(await O.get(k)).exists())throw new Error(`No existe el documento que quiere editar en ${n}`);let V=[];A&&(await g(v.id),V=await p(v.id,A),"imagenURLs"in v||(v.imagenURLs=[]),v.imagenURLs=V),O.update(k,{...v}),e("Documento actualizado exitosamente!")})}catch(O){t(O,`Error al actualizar documento en ${n}`)}},h=async v=>{try{await g(v);const A=gi(Qn,n,v);await Vw(A),e("Documento eliminado exitosamente!")}catch(A){t(A,`Error al eliminar documento en ${n}`)}},p=async(v,A)=>{const k=[],O=Array.from(A).map(async L=>{const V=ec($c,`${n}/${v}/${L.name}`),q=Rg(V,L);try{await q;const U=await Pg(V);k.push(U)}catch(U){console.error("Error al cargar la imagen:",U)}});return await Promise.all(O),k},g=async v=>{try{const A=ec($c,`${n}/${v}`);(await Sg(A)).items.forEach(async O=>{await Cg(O)})}catch(A){console.error("Error al eliminar imágenes del documento:",A)}};return{getAllDocuments:r,getDocumentById:i,createDocument:o,updateDocument:l,deleteDocument:h,getTotalRecords:async()=>{try{return(await Fc(Lc(Qn,n))).size}catch(v){return t(v,`Error al obtener el total de registros de ${n}`),0}}}}const Bv="ARTICULOS",{getAllDocuments:Uv,getDocumentById:jv,createDocument:qv,updateDocument:$v,deleteDocument:zv,getTotalRecords:Hv}=Fv(Bv),Gv=async n=>({barrioData:(await ll(n.barrioRef)).data()});function Kv(){return{getAllArticulos:Uv,getArticuloById:jv,createArticulo:qv,updateArticulo:$v,deleteArticulo:zv,getTotalRecords:Hv,getBarrioData:Gv}}const di=Kv(),Wv=zh(po),Qv=n=>{var t;return{...n,barrioRef:((t=n.barrioRef)==null?void 0:t.path)||null}},Xv=n=>({...n,barrioRef:n.barrioRef?gi(Wv,n.barrioRef):null}),Yv={getItem:n=>{const t=sessionStorage.getItem(n);if(t){const e=JSON.parse(t);return{...e,state:{...e.state,articulos:e.state.articulos.map(Xv)}}}return null},setItem:(n,t)=>{const e=JSON.stringify({...t,state:{...t.state,articulos:t.state.articulos.map(Qv)}});sessionStorage.setItem(n,e)},removeItem:n=>sessionStorage.removeItem(n)},Jv=Lf()(Kw((n,t)=>({articulos:[],totalRecords:0,loading:!1,error:null,fetchArticulos:async()=>{n({loading:!0,error:null});try{const e=await di.getAllArticulos();n({articulos:e,loading:!1})}catch(e){e instanceof Error?n({error:e.message,loading:!1}):n({error:String(e),loading:!1})}},getArticulo:e=>{const{articulos:r}=t();return r.find(i=>i.id===e)},createArticulo:async(e,r)=>{n({loading:!0,error:null});try{await di.createArticulo(e,r),await t().fetchArticulos()}catch(i){i instanceof Error?n({error:i.message,loading:!1}):n({error:String(i),loading:!1})}},updateArticulo:async(e,r)=>{n({loading:!0,error:null});try{await di.updateArticulo(e,r),await t().fetchArticulos()}catch(i){i instanceof Error?n({error:i.message,loading:!1}):n({error:String(i),loading:!1})}},deleteArticulo:async e=>{n({loading:!0,error:null});try{await di.deleteArticulo(e),await t().fetchArticulos()}catch(r){r instanceof Error?n({error:r.message,loading:!1}):n({error:String(r),loading:!1})}},getTotalRecords:async()=>{try{n({loading:!0,error:null});const e=await di.getTotalRecords();n({totalRecords:e,loading:!1})}catch(e){n({loading:!1,error:"Error al obtener el total de articulos"}),console.error(e)}}}),{name:"articulos-store",storage:Yv})),od=Jv,Zv=()=>{const{id:n}=lf(),{getArticulo:t,loading:e,error:r}=od(),[i,o]=Pt.useState(void 0);return Pt.useEffect(()=>{if(n){const l=t(n);o(l)}},[t,n]),ot.jsx("div",{children:e?ot.jsx("p",{children:"Cargando articulo..."}):r?ot.jsxs("p",{children:["Error al cargar articulo: ",r]}):i?ot.jsxs("article",{className:"card",children:[ot.jsx("img",{className:"card-img-top",src:i.imagenURLs[0],alt:i.nombre}),ot.jsxs("div",{className:"card-body",children:[ot.jsx("p",{className:"text-muted",style:{fontSize:"1.3rem",marginBottom:"10px"},children:i.nombre}),ot.jsxs("h4",{className:"card-text",children:["$ ",i.precio]}),ot.jsx("p",{className:"card-text badge text-bg-success",children:i.estadoArticulo}),ot.jsx("small",{className:"text-muted",children:"Publicado hace 1 hora"})]})]}):ot.jsxs("p",{children:["No se encontró articulo con ID ",n]})})},tE=Zv,eE=({articulo:n})=>{const t=cf(),e=n.barrioNombre||"",r=()=>{t(`/articulo/${n.id}`)},i=()=>{const o=encodeURIComponent(`https://vapinedo.github.io/React-UribiaOnlineFrontend/articulo/${n.id}`);console.log({articleUrl:o});const l=`https://www.facebook.com/sharer/sharer.php?u=${o}`;window.open(l,"_blank")};return ot.jsxs("article",{className:"card",children:[ot.jsx("img",{className:"card-img-top",src:n.imagenURLs[0],alt:n.nombre}),ot.jsxs("div",{className:"card-body",children:[ot.jsx("p",{className:"text-muted",style:{fontSize:"1.3rem",marginBottom:"10px"},children:n.nombre}),ot.jsxs("h4",{className:"card-text",children:["$ ",n.precio]}),ot.jsx("p",{className:"card-text badge text-bg-success",children:n.estadoArticulo}),ot.jsxs("p",{className:"card-text mb-2",children:["Barrio ",e]}),ot.jsx("small",{className:"text-muted",children:"Publicado hace 1 hora"}),ot.jsx("hr",{}),ot.jsx("button",{className:"btn btn-sm btn-primary",style:{marginRight:"10px"},onClick:r,children:"Ver Detalles"}),ot.jsxs("button",{className:"btn btn-sm btn-outline-primary",onClick:i,children:[ot.jsx("i",{className:"bx bxl-facebook"})," Compartir"]})]})]})},nE=eE;function rE(){const[n,t]=Pt.useState([]),{articulos:e,loading:r,error:i,fetchArticulos:o}=od();return Pt.useEffect(()=>{(async()=>{const h=await Promise.all(e.map(async p=>{let g="";if(p.barrioRef){const y=await ll(p.barrioRef);if(y.exists()){const v=y.data();v&&(g=`${v.nombre||""}`)}}return{...p,barrioNombre:g}}));t(h)})()},[e]),Pt.useEffect(()=>{o()},[o]),r?ot.jsx("div",{children:"Loading..."}):i?ot.jsxs("div",{children:["Error: ",i]}):ot.jsx("div",{className:"card-group",children:n.map(l=>ot.jsx(nE,{articulo:l},l.id))})}function cE(){return ot.jsxs(uf,{children:[ot.jsx(Nl,{path:"/",element:ot.jsx(rE,{})}),ot.jsx(Nl,{path:"/articulo/:id",element:ot.jsx(tE,{})})]})}export{cE as default};
