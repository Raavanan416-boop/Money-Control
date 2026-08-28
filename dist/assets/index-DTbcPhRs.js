var mb=Object.defineProperty;var yb=(n,t,e)=>t in n?mb(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var B=(n,t,e)=>yb(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _b=()=>{};var wd={};/**
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
 */const Pg=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},vb=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),i.push(e[h],e[d],e[f],e[g])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Pg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):vb(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const d=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||d==null)throw new bb;const f=r<<2|a>>4;if(i.push(f),l!==64){const g=a<<4&240|l>>2;if(i.push(g),d!==64){const y=l<<6&192|d;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wb=function(n){const t=Pg(n);return Cg.encodeByteArray(t,!0)},ta=function(n){return wb(n).replace(/\./g,"")},kg=function(n){try{return Cg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Eb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tb=()=>Eb().__FIREBASE_DEFAULTS__,Ib=()=>{if(typeof process>"u"||typeof wd>"u")return;const n=wd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&kg(n[1]);return t&&JSON.parse(t)},ka=()=>{try{return _b()||Tb()||Ib()||xb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rg=n=>{var t,e;return(e=(t=ka())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ab=n=>{const t=Rg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Mg=()=>{var n;return(n=ka())===null||n===void 0?void 0:n.config},Dg=n=>{var t;return(t=ka())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Sb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function rs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Og(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Pb(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ta(JSON.stringify(e)),ta(JSON.stringify(o)),""].join(".")}const js={};function Cb(){const n={prod:[],emulator:[]};for(const t of Object.keys(js))js[t]?n.emulator.push(t):n.prod.push(t);return n}function kb(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ed=!1;function Ng(n,t){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||js[n]===t||js[n]||Ed)return;js[n]=t;function e(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=Cb().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,g){f.setAttribute("width","24"),f.setAttribute("id",g),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Ed=!0,o()},f}function h(f,g){f.setAttribute("id",g),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=kb(i),g=e("text"),y=document.getElementById(g)||document.createElement("span"),v=e("learnmore"),_=document.getElementById(v)||document.createElement("a"),I=e("preprendIcon"),C=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const R=f.element;a(R),h(_,v);const O=l();c(C,I),R.append(C,y,_,O),document.body.appendChild(R)}r?(y.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function Mb(){var n;const t=(n=ka())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Db(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ob(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lb(){const n=Zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vb(){return!Mb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fb(){try{return typeof indexedDB=="object"}catch{return!1}}function Bb(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const $b="FirebaseError";class gn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=$b,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Ub(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gn(s,a,i)}}function Ub(n,t){return n.replace(zb,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const zb=/\{\$([^}]+)}/g;function jb(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function _i(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(Td(r)&&Td(o)){if(!_i(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Td(n){return n!==null&&typeof n=="object"}/**
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
 */function Er(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ks(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function Rs(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function qb(n,t){const e=new Hb(n,t);return e.subscribe.bind(e)}class Hb{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Wb(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=kc),s.error===void 0&&(s.error=kc),s.complete===void 0&&(s.complete=kc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wb(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function kc(){}/**
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
 */function _t(n){return n&&n._delegate?n._delegate:n}class vi{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class Gb{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Sb;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yb(t))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=ci){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ci){return this.instances.has(t)}getOptions(t=ci){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Kb(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ci){return this.component?this.component.multipleInstances?t:ci:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kb(n){return n===ci?void 0:n}function Yb(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Gb(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var tt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(tt||(tt={}));const Qb={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},Jb=tt.INFO,Zb={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},tw=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Zb[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yl{constructor(t){this.name=t,this._logLevel=Jb,this._logHandler=tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}const ew=(n,t)=>t.some(e=>n instanceof e);let Id,xd;function nw(){return Id||(Id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return xd||(xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lg=new WeakMap,rl=new WeakMap,Vg=new WeakMap,Rc=new WeakMap,Xl=new WeakMap;function sw(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Rn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Lg.set(e,n)}).catch(()=>{}),Xl.set(t,n),t}function rw(n){if(rl.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});rl.set(n,t)}let ol={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return rl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Vg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Rn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ow(n){ol=n(ol)}function aw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Mc(this),t,...e);return Vg.set(i,t.sort?t.sort():[t]),Rn(i)}:iw().includes(n)?function(...t){return n.apply(Mc(this),t),Rn(Lg.get(this))}:function(...t){return Rn(n.apply(Mc(this),t))}}function cw(n){return typeof n=="function"?aw(n):(n instanceof IDBTransaction&&rw(n),ew(n,nw())?new Proxy(n,ol):n)}function Rn(n){if(n instanceof IDBRequest)return sw(n);if(Rc.has(n))return Rc.get(n);const t=cw(n);return t!==n&&(Rc.set(n,t),Xl.set(t,n)),t}const Mc=n=>Xl.get(n);function lw(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Rn(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Rn(o.result),c.oldVersion,c.newVersion,Rn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const uw=["get","getKey","getAll","getAllKeys","count"],hw=["put","add","delete","clear"],Dc=new Map;function Ad(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Dc.get(t))return Dc.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=hw.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||uw.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return Dc.set(t,r),r}ow(n=>({...n,get:(t,e,i)=>Ad(t,e)||n.get(t,e,i),has:(t,e)=>!!Ad(t,e)||n.has(t,e)}));/**
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
 */class dw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(fw(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function fw(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const al="@firebase/app",Sd="0.13.2";/**
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
 */const un=new Yl("@firebase/app"),pw="@firebase/app-compat",gw="@firebase/analytics-compat",mw="@firebase/analytics",yw="@firebase/app-check-compat",_w="@firebase/app-check",vw="@firebase/auth",bw="@firebase/auth-compat",ww="@firebase/database",Ew="@firebase/data-connect",Tw="@firebase/database-compat",Iw="@firebase/functions",xw="@firebase/functions-compat",Aw="@firebase/installations",Sw="@firebase/installations-compat",Pw="@firebase/messaging",Cw="@firebase/messaging-compat",kw="@firebase/performance",Rw="@firebase/performance-compat",Mw="@firebase/remote-config",Dw="@firebase/remote-config-compat",Ow="@firebase/storage",Nw="@firebase/storage-compat",Lw="@firebase/firestore",Vw="@firebase/ai",Fw="@firebase/firestore-compat",Bw="firebase",$w="11.10.0";/**
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
 */const cl="[DEFAULT]",Uw={[al]:"fire-core",[pw]:"fire-core-compat",[mw]:"fire-analytics",[gw]:"fire-analytics-compat",[_w]:"fire-app-check",[yw]:"fire-app-check-compat",[vw]:"fire-auth",[bw]:"fire-auth-compat",[ww]:"fire-rtdb",[Ew]:"fire-data-connect",[Tw]:"fire-rtdb-compat",[Iw]:"fire-fn",[xw]:"fire-fn-compat",[Aw]:"fire-iid",[Sw]:"fire-iid-compat",[Pw]:"fire-fcm",[Cw]:"fire-fcm-compat",[kw]:"fire-perf",[Rw]:"fire-perf-compat",[Mw]:"fire-rc",[Dw]:"fire-rc-compat",[Ow]:"fire-gcs",[Nw]:"fire-gcs-compat",[Lw]:"fire-fst",[Fw]:"fire-fst-compat",[Vw]:"fire-vertex","fire-js":"fire-js",[Bw]:"fire-js-all"};/**
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
 */const ea=new Map,zw=new Map,ll=new Map;function Pd(n,t){try{n.container.addComponent(t)}catch(e){un.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Xi(n){const t=n.name;if(ll.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;ll.set(t,n);for(const e of ea.values())Pd(e,n);for(const e of zw.values())Pd(e,n);return!0}function Ql(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new wr("app","Firebase",jw);/**
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
 */class qw{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const os=$w;function Fg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:cl,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(e||(e=Mg()),!e)throw Mn.create("no-options");const r=ea.get(s);if(r){if(_i(e,r.options)&&_i(i,r.config))return r;throw Mn.create("duplicate-app",{appName:s})}const o=new Xb(s);for(const c of ll.values())o.addComponent(c);const a=new qw(e,i,o);return ea.set(s,a),a}function Bg(n=cl){const t=ea.get(n);if(!t&&n===cl&&Mg())return Fg();if(!t)throw Mn.create("no-app",{appName:n});return t}function Dn(n,t,e){var i;let s=(i=Uw[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}Xi(new vi(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Hw="firebase-heartbeat-database",Ww=1,ir="firebase-heartbeat-store";let Oc=null;function $g(){return Oc||(Oc=lw(Hw,Ww,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ir)}catch(e){console.warn(e)}}}}).catch(n=>{throw Mn.create("idb-open",{originalErrorMessage:n.message})})),Oc}async function Gw(n){try{const e=(await $g()).transaction(ir),i=await e.objectStore(ir).get(Ug(n));return await e.done,i}catch(t){if(t instanceof gn)un.warn(t.message);else{const e=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(e.message)}}}async function Cd(n,t){try{const i=(await $g()).transaction(ir,"readwrite");await i.objectStore(ir).put(t,Ug(n)),await i.done}catch(e){if(e instanceof gn)un.warn(e.message);else{const i=Mn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});un.warn(i.message)}}}function Ug(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Kw=1024,Yw=30;class Xw{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jw(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kd();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Yw){const o=Zw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){un.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kd(),{heartbeatsToSend:i,unsentEntries:s}=Qw(this._heartbeatsCache.heartbeats),r=ta(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return un.warn(e),""}}}function kd(){return new Date().toISOString().substring(0,10)}function Qw(n,t=Kw){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Rd(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Rd(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Jw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fb()?Bb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Gw(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Rd(n){return ta(JSON.stringify({version:2,heartbeats:n})).length}function Zw(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function t0(n){Xi(new vi("platform-logger",t=>new dw(t),"PRIVATE")),Xi(new vi("heartbeat",t=>new Xw(t),"PRIVATE")),Dn(al,Sd,n),Dn(al,Sd,"esm2017"),Dn("fire-js","")}t0("");function Jl(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}function zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e0=zg,jg=new wr("auth","Firebase",zg());/**
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
 */const na=new Yl("@firebase/auth");function n0(n,...t){na.logLevel<=tt.WARN&&na.warn(`Auth (${os}): ${n}`,...t)}function Ro(n,...t){na.logLevel<=tt.ERROR&&na.error(`Auth (${os}): ${n}`,...t)}/**
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
 */function Se(n,...t){throw Zl(n,...t)}function Le(n,...t){return Zl(n,...t)}function qg(n,t,e){const i=Object.assign(Object.assign({},e0()),{[t]:e});return new wr("auth","Firebase",i).create(t,{appName:n.name})}function an(n){return qg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return jg.create(n,...t)}function H(n,t,...e){if(!n)throw Zl(t,...e)}function en(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ro(t),new Error(t)}function hn(n,t){n||en(t)}/**
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
 */function ul(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function i0(){return Md()==="http:"||Md()==="https:"}function Md(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function s0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i0()||Ob()||"connection"in navigator)?navigator.onLine:!0}function r0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Tr{constructor(t,e){this.shortDelay=t,this.longDelay=e,hn(e>t,"Short delay should be less than long delay!"),this.isMobile=Rb()||Nb()}get(){return s0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tu(n,t){hn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Hg{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const o0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const a0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],c0=new Tr(3e4,6e4);function mn(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function ke(n,t,e,i,s={}){return Wg(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=Er(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return Db()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&rs(n.emulatorConfig.host)&&(l.credentials="include"),Hg.fetch()(await Gg(n,n.config.apiHost,e,a),l)})}async function Wg(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},o0),t);try{const s=new u0(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw co(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw co(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw co(n,"user-disabled",o);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qg(n,h,l);Se(n,h)}}catch(s){if(s instanceof gn)throw s;Se(n,"network-request-failed",{message:String(s)})}}async function Ir(n,t,e,i,s={}){const r=await ke(n,t,e,i,s);return"mfaPendingCredential"in r&&Se(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Gg(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?tu(n.config,s):`${n.config.apiScheme}://${s}`;return a0.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function l0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class u0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(Le(this.auth,"network-request-failed")),c0.get())})}}function co(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=Le(n,t,i);return s.customData._tokenResponse=e,s}function Dd(n){return n!==void 0&&n.enterprise!==void 0}class h0{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return l0(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function d0(n,t){return ke(n,"GET","/v2/recaptchaConfig",mn(n,t))}/**
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
 */async function f0(n,t){return ke(n,"POST","/v1/accounts:delete",t)}async function ia(n,t){return ke(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function qs(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function p0(n,t=!1){const e=_t(n),i=await e.getIdToken(t),s=eu(i);H(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:qs(Nc(s.auth_time)),issuedAtTime:qs(Nc(s.iat)),expirationTime:qs(Nc(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Nc(n){return Number(n)*1e3}function eu(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=kg(e);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Od(n){const t=eu(n);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function bi(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof gn&&g0(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function g0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class m0{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sa(n){var t;const e=n.auth,i=await n.getIdToken(),s=await bi(n,ia(e,{idToken:i}));H(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?Kg(r.providerUserInfo):[],a=_0(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new hl(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function y0(n){const t=_t(n);await sa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _0(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function Kg(n){return n.map(t=>{var{providerId:e}=t,i=Jl(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function v0(n,t){const e=await Wg(n,{},async()=>{const i=Er({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Gg(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return n.emulatorConfig&&rs(n.emulatorConfig.host)&&(c.credentials="include"),Hg.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function b0(n,t){return ke(n,"POST","/v2/accounts:revokeToken",mn(n,t))}/**
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
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Od(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){H(t.length!==0,"internal-error");const e=Od(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await v0(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new ji;return i&&(H(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(H(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(H(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
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
 */function bn(n,t){H(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Te{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,r=Jl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new hl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await bi(this,this.stsTokenManager.getToken(this.auth,t));return H(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return p0(this,t)}reload(){return y0(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Te(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await sa(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(me(this.auth.app))return Promise.reject(an(this.auth));const t=await this.getIdToken();return await bi(this,f0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,r,o,a,c,l,h;const d=(i=e.displayName)!==null&&i!==void 0?i:void 0,f=(s=e.email)!==null&&s!==void 0?s:void 0,g=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,_=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=e.createdAt)!==null&&l!==void 0?l:void 0,C=(h=e.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:R,emailVerified:O,isAnonymous:D,providerData:L,stsTokenManager:T}=e;H(R&&T,t,"internal-error");const w=ji.fromJSON(this.name,T);H(typeof R=="string",t,"internal-error"),bn(d,t.name),bn(f,t.name),H(typeof O=="boolean",t,"internal-error"),H(typeof D=="boolean",t,"internal-error"),bn(g,t.name),bn(y,t.name),bn(v,t.name),bn(_,t.name),bn(I,t.name),bn(C,t.name);const E=new Te({uid:R,auth:t,email:f,emailVerified:O,displayName:d,isAnonymous:D,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:w,createdAt:I,lastLoginAt:C});return L&&Array.isArray(L)&&(E.providerData=L.map(x=>Object.assign({},x))),_&&(E._redirectEventId=_),E}static async _fromIdTokenResponse(t,e,i=!1){const s=new ji;s.updateFromServerResponse(e);const r=new Te({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await sa(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];H(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Kg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new ji;a.updateFromIdToken(i);const c=new Te({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Nd=new Map;function nn(n){hn(n instanceof Function,"Expected a class definition");let t=Nd.get(n);return t?(hn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Nd.set(n,t),t)}/**
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
 */class Yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Yg.type="NONE";const Ld=Yg;/**
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
 */function Mo(n,t,e){return`firebase:${n}:${t}:${e}`}class qi{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,r),this.fullPersistenceKey=Mo("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ia(this.auth,{idToken:t}).catch(()=>{});return e?Te._fromGetAccountInfoResponse(this.auth,e,t):null}return Te._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new qi(nn(Ld),t,i);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||nn(Ld);const o=Mo(i,t.config.apiKey,t.name);let a=null;for(const l of e)try{const h=await l._get(o);if(h){let d;if(typeof h=="string"){const f=await ia(t,{idToken:h}).catch(()=>{});if(!f)break;d=await Te._fromGetAccountInfoResponse(t,f,h)}else d=Te._fromJSON(t,h);l!==r&&(a=d),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new qi(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new qi(r,t,i))}}/**
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
 */function Vd(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(em(t))return"Blackberry";if(nm(t))return"Webos";if(Qg(t))return"Safari";if((t.includes("chrome/")||Jg(t))&&!t.includes("edge/"))return"Chrome";if(tm(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xg(n=Zt()){return/firefox\//i.test(n)}function Qg(n=Zt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jg(n=Zt()){return/crios\//i.test(n)}function Zg(n=Zt()){return/iemobile/i.test(n)}function tm(n=Zt()){return/android/i.test(n)}function em(n=Zt()){return/blackberry/i.test(n)}function nm(n=Zt()){return/webos/i.test(n)}function nu(n=Zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function w0(n=Zt()){var t;return nu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function E0(){return Lb()&&document.documentMode===10}function im(n=Zt()){return nu(n)||tm(n)||nm(n)||em(n)||/windows phone/i.test(n)||Zg(n)}/**
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
 */function sm(n,t=[]){let e;switch(n){case"Browser":e=Vd(Zt());break;case"Worker":e=`${Vd(Zt())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${os}/${i}`}/**
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
 */class T0{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function I0(n,t={}){return ke(n,"GET","/v2/passwordPolicy",mn(n,t))}/**
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
 */const x0=6;class A0{constructor(t){var e,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:x0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class S0{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fd(this),this.idTokenSubscription=new Fd(this),this.beforeStateQueue=new T0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=nn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await qi.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ia(this,{idToken:t}),i=await Te._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await sa(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=r0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(me(this.app))return Promise.reject(an(this));const e=t?_t(t):null;return e&&H(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return me(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return me(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await I0(this),e=new A0(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new wr("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await b0(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&nn(t)||this._popupRedirectResolver;H(e,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[nn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,i,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&n0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gn(n){return _t(n)}class Fd{constructor(t){this.auth=t,this.observer=null,this.addObserver=qb(e=>this.observer=e)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P0(n){Ra=n}function rm(n){return Ra.loadJS(n)}function C0(){return Ra.recaptchaEnterpriseScript}function k0(){return Ra.gapiScript}function R0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class M0{constructor(){this.enterprise=new D0}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class D0{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const O0="recaptcha-enterprise",om="NO_RECAPTCHA";class N0{constructor(t){this.type=O0,this.auth=Gn(t)}async verify(t="verify",e=!1){async function i(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{d0(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new h0(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Dd(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(om)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new M0().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!e&&Dd(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=C0();c.length!==0&&(c+=a),rm(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Bd(n,t,e,i=!1,s=!1){const r=new N0(n);let o;if(s)o=om;else try{o=await r.verify(e)}catch{o=await r.verify(e,!0)}const a=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ra(n,t,e,i,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Bd(n,t,e,e==="getOobCode");return i(n,o)}else return i(n,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Bd(n,t,e,e==="getOobCode");return i(n,a)}else return Promise.reject(o)})}/**
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
 */function L0(n,t){const e=Ql(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(_i(r,t??{}))return s;Se(s,"already-initialized")}return e.initialize({options:t})}function V0(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(nn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function F0(n,t,e){const i=Gn(n);H(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=am(t),{host:o,port:a}=B0(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){H(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),H(_i(l,i.config.emulator)&&_i(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,rs(o)?(Og(`${r}//${o}${c}`),Ng("Auth",!0)):$0()}function am(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function B0(n){const t=am(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:$d(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:$d(o)}}}function $d(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function $0(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class iu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return en("not implemented")}_getIdTokenResponse(t){return en("not implemented")}_linkToIdToken(t,e){return en("not implemented")}_getReauthenticationResolver(t){return en("not implemented")}}async function U0(n,t){return ke(n,"POST","/v1/accounts:update",t)}async function z0(n,t){return ke(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function j0(n,t){return Ir(n,"POST","/v1/accounts:signInWithPassword",mn(n,t))}async function q0(n,t){return ke(n,"POST","/v1/accounts:sendOobCode",mn(n,t))}async function H0(n,t){return q0(n,t)}/**
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
 */async function W0(n,t){return Ir(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,t))}async function G0(n,t){return Ir(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,t))}/**
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
 */class sr extends iu{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new sr(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new sr(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(t,e,"signInWithPassword",j0);case"emailLink":return W0(t,{email:this._email,oobCode:this._password});default:Se(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(t,i,"signUpPassword",z0);case"emailLink":return G0(t,{idToken:e,email:this._email,oobCode:this._password});default:Se(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Hi(n,t){return Ir(n,"POST","/v1/accounts:signInWithIdp",mn(n,t))}/**
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
 */const K0="http://localhost";class wi extends iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new wi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Se("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,r=Jl(e,["providerId","signInMethod"]);if(!i||!s)return null;const o=new wi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Hi(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,Hi(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Hi(t,e)}buildRequest(){const t={requestUri:K0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Er(e)}return t}}/**
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
 */function Y0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X0(n){const t=ks(Rs(n)).link,e=t?ks(Rs(t)).deep_link_id:null,i=ks(Rs(n)).deep_link_id;return(i?ks(Rs(i)).link:null)||i||e||t||n}class su{constructor(t){var e,i,s,r,o,a;const c=ks(Rs(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,h=(i=c.oobCode)!==null&&i!==void 0?i:null,d=Y0((s=c.mode)!==null&&s!==void 0?s:null);H(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=X0(t);try{return new su(e)}catch{return null}}}/**
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
 */class Kn{constructor(){this.providerId=Kn.PROVIDER_ID}static credential(t,e){return sr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=su.parseLink(e);return H(i,"argument-error"),sr._fromEmailAndCode(t,i.code,i.tenantId)}}Kn.PROVIDER_ID="password";Kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xr extends cm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends xr{constructor(){super("facebook.com")}static credential(t){return wi._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class En extends xr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return wi._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return En.credentialFromTaggedObject(t)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return En.credential(e,i)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class Tn extends xr{constructor(){super("github.com")}static credential(t){return wi._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tn.credential(t.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class In extends xr{constructor(){super("twitter.com")}static credential(t,e){return wi._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return In.credential(e,i)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */async function Q0(n,t){return Ir(n,"POST","/v1/accounts:signUp",mn(n,t))}/**
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
 */class Ei{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Te._fromIdTokenResponse(t,i,s),o=Ud(i);return new Ei({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=Ud(i);return new Ei({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function Ud(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class oa extends gn{constructor(t,e,i,s){var r;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new oa(t,e,i,s)}}function lm(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(n,r,t,i):r})}async function J0(n,t,e=!1){const i=await bi(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Ei._forOperation(n,"link",i)}/**
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
 */async function um(n,t,e=!1){const{auth:i}=n;if(me(i.app))return Promise.reject(an(i));const s="reauthenticate";try{const r=await bi(n,lm(i,s,t,n),e);H(r.idToken,i,"internal-error");const o=eu(r.idToken);H(o,i,"internal-error");const{sub:a}=o;return H(n.uid===a,i,"user-mismatch"),Ei._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Se(i,"user-mismatch"),r}}/**
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
 */async function hm(n,t,e=!1){if(me(n.app))return Promise.reject(an(n));const i="signIn",s=await lm(n,i,t),r=await Ei._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}async function Z0(n,t){return hm(Gn(n),t)}async function dm(n,t){return um(_t(n),t)}/**
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
 */async function fm(n){const t=Gn(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tE(n,t,e){const i=Gn(n);await ra(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",H0)}async function eE(n,t,e){if(me(n.app))return Promise.reject(an(n));const i=Gn(n),o=await ra(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Q0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&fm(n),c}),a=await Ei._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function nE(n,t,e){return me(n.app)?Promise.reject(an(n)):Z0(_t(n),Kn.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&fm(n),i})}/**
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
 */async function iE(n,t){return ke(n,"POST","/v1/accounts:update",t)}/**
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
 */async function pm(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const i=_t(n),r={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await bi(i,iE(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function sE(n,t){return rE(_t(n),null,t)}async function rE(n,t,e){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.password=e);const o=await bi(n,U0(i,r));await n._updateTokensIfNecessary(o,!0)}function oE(n,t,e,i){return _t(n).onIdTokenChanged(t,e,i)}function aE(n,t,e){return _t(n).beforeAuthStateChanged(t,e)}function cE(n,t,e,i){return _t(n).onAuthStateChanged(t,e,i)}function lE(n){return _t(n).signOut()}async function uE(n){return _t(n).delete()}const aa="__sak";/**
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
 */class gm{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const hE=1e3,dE=10;class mm extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=im(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);E0()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,dE):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},hE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}mm.type="LOCAL";const fE=mm;/**
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
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ym.type="SESSION";const _m=ym;/**
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
 */function pE(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Ma{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new Ma(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await pE(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function ru(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class gE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=ru("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function mE(n){Ve().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function vm(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function yE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _E(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vE(){return vm()?self:null}/**
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
 */const bm="firebaseLocalStorageDb",bE=1,ca="firebaseLocalStorage",wm="fbase_key";class Ar{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Da(n,t){return n.transaction([ca],t?"readwrite":"readonly").objectStore(ca)}function wE(){const n=indexedDB.deleteDatabase(bm);return new Ar(n).toPromise()}function dl(){const n=indexedDB.open(bm,bE);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ca,{keyPath:wm})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ca)?t(i):(i.close(),await wE(),t(await dl()))})})}async function zd(n,t,e){const i=Da(n,!0).put({[wm]:t,value:e});return new Ar(i).toPromise()}async function EE(n,t){const e=Da(n,!1).get(t),i=await new Ar(e).toPromise();return i===void 0?null:i.value}function jd(n,t){const e=Da(n,!0).delete(t);return new Ar(e).toPromise()}const TE=800,IE=3;class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>IE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(vE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await yE(),!this.activeServiceWorker)return;this.sender=new gE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_E()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await dl();return await zd(t,aa,"1"),await jd(t,aa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>zd(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>EE(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>jd(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Da(s,!1).getAll();return new Ar(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Em.type="LOCAL";const xE=Em;new Tr(3e4,6e4);/**
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
 */function AE(n,t){return t?nn(t):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ou extends iu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hi(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Hi(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Hi(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function SE(n){return hm(n.auth,new ou(n),n.bypassAuthState)}function PE(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),um(e,new ou(n),n.bypassAuthState)}async function CE(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),J0(e,new ou(n),n.bypassAuthState)}/**
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
 */class Tm{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return SE;case"linkViaPopup":case"linkViaRedirect":return CE;case"reauthViaPopup":case"reauthViaRedirect":return PE;default:Se(this.auth,"internal-error")}}resolve(t){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kE=new Tr(2e3,1e4);class Ui extends Tm{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const t=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,kE.get())};t()}}Ui.currentPopupAction=null;/**
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
 */const RE="pendingRedirect",Do=new Map;class ME extends Tm{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Do.get(this.auth._key());if(!t){try{const i=await DE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}Do.set(this.auth._key(),t)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DE(n,t){const e=LE(t),i=NE(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}function OE(n,t){Do.set(n._key(),t)}function NE(n){return nn(n._redirectPersistence)}function LE(n){return Mo(RE,n.config.apiKey,n.name)}async function VE(n,t,e=!1){if(me(n.app))return Promise.reject(an(n));const i=Gn(n),s=AE(i,t),o=await new ME(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const FE=600*1e3;class BE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$E(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!Im(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(Le(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=FE&&this.cachedEventUids.clear(),this.cachedEventUids.has(qd(t))}saveEventToCache(t){this.cachedEventUids.add(qd(t)),this.lastProcessedEventTime=Date.now()}}function qd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Im({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function $E(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Im(n);default:return!1}}/**
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
 */async function UE(n,t={}){return ke(n,"GET","/v1/projects",t)}/**
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
 */const zE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jE=/^https?/;async function qE(n){if(n.config.emulator)return;const{authorizedDomains:t}=await UE(n);for(const e of t)try{if(HE(e))return}catch{}Se(n,"unauthorized-domain")}function HE(n){const t=ul(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!jE.test(e))return!1;if(zE.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const WE=new Tr(3e4,6e4);function Hd(){const n=Ve().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function GE(n){return new Promise((t,e)=>{var i,s,r;function o(){Hd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hd(),e(Le(n,"network-request-failed"))},timeout:WE.get()})}if(!((s=(i=Ve().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=Ve().gapi)===null||r===void 0)&&r.load)o();else{const a=R0("iframefcb");return Ve()[a]=()=>{gapi.load?o():e(Le(n,"network-request-failed"))},rm(`${k0()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Oo=null,t})}let Oo=null;function KE(n){return Oo=Oo||GE(n),Oo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const YE=new Tr(5e3,15e3),XE="__/auth/iframe",QE="emulator/auth/iframe",JE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tT(n){const t=n.config;H(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?tu(t,QE):`https://${n.config.authDomain}/${XE}`,i={apiKey:t.apiKey,appName:n.name,v:os},s=ZE.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${Er(i).slice(1)}`}async function eT(n){const t=await KE(n),e=Ve().gapi;return H(e,n,"internal-error"),t.open({where:document.body,url:tT(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JE,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Le(n,"network-request-failed"),a=Ve().setTimeout(()=>{r(o)},YE.get());function c(){Ve().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const nT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iT=500,sT=600,rT="_blank",oT="http://localhost";class Wd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aT(n,t,e,i=iT,s=sT){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nT),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Zt().toLowerCase();e&&(a=Jg(l)?rT:e),Xg(l)&&(t=t||oT,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(w0(l)&&a!=="_self")return cT(t||"",a),new Wd(null);const d=window.open(t||"",a,h);H(d,n,"popup-blocked");try{d.focus()}catch{}return new Wd(d)}function cT(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const lT="__/auth/handler",uT="emulator/auth/handler",hT=encodeURIComponent("fac");async function Gd(n,t,e,i,s,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:os,eventId:s};if(t instanceof cm){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",jb(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof xr){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),l=c?`#${hT}=${encodeURIComponent(c)}`:"";return`${dT(n)}?${Er(a).slice(1)}${l}`}function dT({config:n}){return n.emulator?tu(n,uT):`https://${n.authDomain}/${lT}`}/**
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
 */const Lc="webStorageSupport";class fT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_m,this._completeRedirectFn=VE,this._overrideRedirectResult=OE}async _openPopup(t,e,i,s){var r;hn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Gd(t,e,i,ul(),s);return aT(t,o,ru())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await Gd(t,e,i,ul(),s);return mE(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(hn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await eT(t),i=new BE(t);return e.register("authEvent",s=>(H(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Lc,{type:Lc},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Lc];o!==void 0&&e(!!o),Se(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=qE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return im()||Qg()||nu()}}const pT=fT;var Kd="@firebase/auth",Yd="1.10.8";/**
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
 */class gT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yT(n){Xi(new vi("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sm(n)},l=new S0(i,s,r,c);return V0(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),Xi(new vi("auth-internal",t=>{const e=Gn(t.getProvider("auth").getImmediate());return(i=>new gT(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Kd,Yd,mT(n)),Dn(Kd,Yd,"esm2017")}/**
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
 */const _T=300,vT=Dg("authIdTokenMaxAge")||_T;let Xd=null;const bT=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>vT)return;const s=e==null?void 0:e.token;Xd!==s&&(Xd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wT(n=Bg()){const t=Ql(n,"auth");if(t.isInitialized())return t.getImmediate();const e=L0(n,{popupRedirectResolver:pT,persistence:[xE,fE,_m]}),i=Dg("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=bT(r.toString());aE(e,o,()=>o(e.currentUser)),oE(e,a=>o(a))}}const s=Rg("auth");return s&&F0(e,`http://${s}`),e}function ET(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}P0({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=Le("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",ET().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yT("Browser");var TT="firebase",IT="11.10.0";/**
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
 */Dn(TT,IT,"app");var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On,xm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,w){function E(){}E.prototype=w.prototype,T.D=w.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(x,S,P){for(var A=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)A[pt-2]=arguments[pt];return w.prototype[S].apply(x,A)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,w,E){E||(E=0);var x=Array(16);if(typeof w=="string")for(var S=0;16>S;++S)x[S]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(S=0;16>S;++S)x[S]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=T.g[0],E=T.g[1],S=T.g[2];var P=T.g[3],A=w+(P^E&(S^P))+x[0]+3614090360&4294967295;w=E+(A<<7&4294967295|A>>>25),A=P+(S^w&(E^S))+x[1]+3905402710&4294967295,P=w+(A<<12&4294967295|A>>>20),A=S+(E^P&(w^E))+x[2]+606105819&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(w^S&(P^w))+x[3]+3250441966&4294967295,E=S+(A<<22&4294967295|A>>>10),A=w+(P^E&(S^P))+x[4]+4118548399&4294967295,w=E+(A<<7&4294967295|A>>>25),A=P+(S^w&(E^S))+x[5]+1200080426&4294967295,P=w+(A<<12&4294967295|A>>>20),A=S+(E^P&(w^E))+x[6]+2821735955&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(w^S&(P^w))+x[7]+4249261313&4294967295,E=S+(A<<22&4294967295|A>>>10),A=w+(P^E&(S^P))+x[8]+1770035416&4294967295,w=E+(A<<7&4294967295|A>>>25),A=P+(S^w&(E^S))+x[9]+2336552879&4294967295,P=w+(A<<12&4294967295|A>>>20),A=S+(E^P&(w^E))+x[10]+4294925233&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(w^S&(P^w))+x[11]+2304563134&4294967295,E=S+(A<<22&4294967295|A>>>10),A=w+(P^E&(S^P))+x[12]+1804603682&4294967295,w=E+(A<<7&4294967295|A>>>25),A=P+(S^w&(E^S))+x[13]+4254626195&4294967295,P=w+(A<<12&4294967295|A>>>20),A=S+(E^P&(w^E))+x[14]+2792965006&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(w^S&(P^w))+x[15]+1236535329&4294967295,E=S+(A<<22&4294967295|A>>>10),A=w+(S^P&(E^S))+x[1]+4129170786&4294967295,w=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(w^E))+x[6]+3225465664&4294967295,P=w+(A<<9&4294967295|A>>>23),A=S+(w^E&(P^w))+x[11]+643717713&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^w&(S^P))+x[0]+3921069994&4294967295,E=S+(A<<20&4294967295|A>>>12),A=w+(S^P&(E^S))+x[5]+3593408605&4294967295,w=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(w^E))+x[10]+38016083&4294967295,P=w+(A<<9&4294967295|A>>>23),A=S+(w^E&(P^w))+x[15]+3634488961&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^w&(S^P))+x[4]+3889429448&4294967295,E=S+(A<<20&4294967295|A>>>12),A=w+(S^P&(E^S))+x[9]+568446438&4294967295,w=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(w^E))+x[14]+3275163606&4294967295,P=w+(A<<9&4294967295|A>>>23),A=S+(w^E&(P^w))+x[3]+4107603335&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^w&(S^P))+x[8]+1163531501&4294967295,E=S+(A<<20&4294967295|A>>>12),A=w+(S^P&(E^S))+x[13]+2850285829&4294967295,w=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(w^E))+x[2]+4243563512&4294967295,P=w+(A<<9&4294967295|A>>>23),A=S+(w^E&(P^w))+x[7]+1735328473&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^w&(S^P))+x[12]+2368359562&4294967295,E=S+(A<<20&4294967295|A>>>12),A=w+(E^S^P)+x[5]+4294588738&4294967295,w=E+(A<<4&4294967295|A>>>28),A=P+(w^E^S)+x[8]+2272392833&4294967295,P=w+(A<<11&4294967295|A>>>21),A=S+(P^w^E)+x[11]+1839030562&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^w)+x[14]+4259657740&4294967295,E=S+(A<<23&4294967295|A>>>9),A=w+(E^S^P)+x[1]+2763975236&4294967295,w=E+(A<<4&4294967295|A>>>28),A=P+(w^E^S)+x[4]+1272893353&4294967295,P=w+(A<<11&4294967295|A>>>21),A=S+(P^w^E)+x[7]+4139469664&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^w)+x[10]+3200236656&4294967295,E=S+(A<<23&4294967295|A>>>9),A=w+(E^S^P)+x[13]+681279174&4294967295,w=E+(A<<4&4294967295|A>>>28),A=P+(w^E^S)+x[0]+3936430074&4294967295,P=w+(A<<11&4294967295|A>>>21),A=S+(P^w^E)+x[3]+3572445317&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^w)+x[6]+76029189&4294967295,E=S+(A<<23&4294967295|A>>>9),A=w+(E^S^P)+x[9]+3654602809&4294967295,w=E+(A<<4&4294967295|A>>>28),A=P+(w^E^S)+x[12]+3873151461&4294967295,P=w+(A<<11&4294967295|A>>>21),A=S+(P^w^E)+x[15]+530742520&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^w)+x[2]+3299628645&4294967295,E=S+(A<<23&4294967295|A>>>9),A=w+(S^(E|~P))+x[0]+4096336452&4294967295,w=E+(A<<6&4294967295|A>>>26),A=P+(E^(w|~S))+x[7]+1126891415&4294967295,P=w+(A<<10&4294967295|A>>>22),A=S+(w^(P|~E))+x[14]+2878612391&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~w))+x[5]+4237533241&4294967295,E=S+(A<<21&4294967295|A>>>11),A=w+(S^(E|~P))+x[12]+1700485571&4294967295,w=E+(A<<6&4294967295|A>>>26),A=P+(E^(w|~S))+x[3]+2399980690&4294967295,P=w+(A<<10&4294967295|A>>>22),A=S+(w^(P|~E))+x[10]+4293915773&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~w))+x[1]+2240044497&4294967295,E=S+(A<<21&4294967295|A>>>11),A=w+(S^(E|~P))+x[8]+1873313359&4294967295,w=E+(A<<6&4294967295|A>>>26),A=P+(E^(w|~S))+x[15]+4264355552&4294967295,P=w+(A<<10&4294967295|A>>>22),A=S+(w^(P|~E))+x[6]+2734768916&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~w))+x[13]+1309151649&4294967295,E=S+(A<<21&4294967295|A>>>11),A=w+(S^(E|~P))+x[4]+4149444226&4294967295,w=E+(A<<6&4294967295|A>>>26),A=P+(E^(w|~S))+x[11]+3174756917&4294967295,P=w+(A<<10&4294967295|A>>>22),A=S+(w^(P|~E))+x[2]+718787259&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~w))+x[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(S+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+S&4294967295,T.g[3]=T.g[3]+P&4294967295}i.prototype.u=function(T,w){w===void 0&&(w=T.length);for(var E=w-this.blockSize,x=this.B,S=this.h,P=0;P<w;){if(S==0)for(;P<=E;)s(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<w;)if(x[S++]=T.charCodeAt(P++),S==this.blockSize){s(this,x),S=0;break}}else for(;P<w;)if(x[S++]=T[P++],S==this.blockSize){s(this,x),S=0;break}}this.h=S,this.o+=w},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;var E=8*this.o;for(w=T.length-8;w<T.length;++w)T[w]=E&255,E/=256;for(this.u(T),T=Array(16),w=E=0;4>w;++w)for(var x=0;32>x;x+=8)T[E++]=this.g[w]>>>x&255;return T};function r(T,w){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=w(T)}function o(T,w){this.h=w;for(var E=[],x=!0,S=T.length-1;0<=S;S--){var P=T[S]|0;x&&P==w||(E[S]=P,x=!1)}this.g=E}var a={};function c(T){return-128<=T&&128>T?r(T,function(w){return new o([w|0],0>w?-1:0)}):new o([T|0],0>T?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return _(l(-T));for(var w=[],E=1,x=0;T>=E;x++)w[x]=T/E|0,E*=4294967296;return new o(w,0)}function h(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return _(h(T.substring(1),w));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=l(Math.pow(w,8)),x=d,S=0;S<T.length;S+=8){var P=Math.min(8,T.length-S),A=parseInt(T.substring(S,S+P),w);8>P?(P=l(Math.pow(w,P)),x=x.j(P).add(l(A))):(x=x.j(E),x=x.add(l(A)))}return x}var d=c(0),f=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-_(this).m();for(var T=0,w=1,E=0;E<this.g.length;E++){var x=this.i(E);T+=(0<=x?x:4294967296+x)*w,w*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(v(this))return"-"+_(this).toString(T);for(var w=l(Math.pow(T,6)),E=this,x="";;){var S=O(E,w).g;E=I(E,S.j(w));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=S,y(E))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function v(T){return T.h==-1}n.l=function(T){return T=I(this,T),v(T)?-1:y(T)?0:1};function _(T){for(var w=T.g.length,E=[],x=0;x<w;x++)E[x]=~T.g[x];return new o(E,~T.h).add(f)}n.abs=function(){return v(this)?_(this):this},n.add=function(T){for(var w=Math.max(this.g.length,T.g.length),E=[],x=0,S=0;S<=w;S++){var P=x+(this.i(S)&65535)+(T.i(S)&65535),A=(P>>>16)+(this.i(S)>>>16)+(T.i(S)>>>16);x=A>>>16,P&=65535,A&=65535,E[S]=A<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(T,w){return T.add(_(w))}n.j=function(T){if(y(this)||y(T))return d;if(v(this))return v(T)?_(this).j(_(T)):_(_(this).j(T));if(v(T))return _(this.j(_(T)));if(0>this.l(g)&&0>T.l(g))return l(this.m()*T.m());for(var w=this.g.length+T.g.length,E=[],x=0;x<2*w;x++)E[x]=0;for(x=0;x<this.g.length;x++)for(var S=0;S<T.g.length;S++){var P=this.i(x)>>>16,A=this.i(x)&65535,pt=T.i(S)>>>16,it=T.i(S)&65535;E[2*x+2*S]+=A*it,C(E,2*x+2*S),E[2*x+2*S+1]+=P*it,C(E,2*x+2*S+1),E[2*x+2*S+1]+=A*pt,C(E,2*x+2*S+1),E[2*x+2*S+2]+=P*pt,C(E,2*x+2*S+2)}for(x=0;x<w;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=w;x<2*w;x++)E[x]=0;return new o(E,0)};function C(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function R(T,w){this.g=T,this.h=w}function O(T,w){if(y(w))throw Error("division by zero");if(y(T))return new R(d,d);if(v(T))return w=O(_(T),w),new R(_(w.g),_(w.h));if(v(w))return w=O(T,_(w)),new R(_(w.g),w.h);if(30<T.g.length){if(v(T)||v(w))throw Error("slowDivide_ only works with positive integers.");for(var E=f,x=w;0>=x.l(T);)E=D(E),x=D(x);var S=L(E,1),P=L(x,1);for(x=L(x,2),E=L(E,2);!y(x);){var A=P.add(x);0>=A.l(T)&&(S=S.add(E),P=A),x=L(x,1),E=L(E,1)}return w=I(T,S.j(w)),new R(S,w)}for(S=d;0<=T.l(w);){for(E=Math.max(1,Math.floor(T.m()/w.m())),x=Math.ceil(Math.log(E)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=l(E),A=P.j(w);v(A)||0<A.l(T);)E-=x,P=l(E),A=P.j(w);y(P)&&(P=f),S=S.add(P),T=I(T,A)}return new R(S,T)}n.A=function(T){return O(this,T).h},n.and=function(T){for(var w=Math.max(this.g.length,T.g.length),E=[],x=0;x<w;x++)E[x]=this.i(x)&T.i(x);return new o(E,this.h&T.h)},n.or=function(T){for(var w=Math.max(this.g.length,T.g.length),E=[],x=0;x<w;x++)E[x]=this.i(x)|T.i(x);return new o(E,this.h|T.h)},n.xor=function(T){for(var w=Math.max(this.g.length,T.g.length),E=[],x=0;x<w;x++)E[x]=this.i(x)^T.i(x);return new o(E,this.h^T.h)};function D(T){for(var w=T.g.length+1,E=[],x=0;x<w;x++)E[x]=T.i(x)<<1|T.i(x-1)>>>31;return new o(E,T.h)}function L(T,w){var E=w>>5;w%=32;for(var x=T.g.length-E,S=[],P=0;P<x;P++)S[P]=0<w?T.i(P+E)>>>w|T.i(P+E+1)<<32-w:T.i(P+E);return new o(S,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,xm=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=h,On=o}).apply(typeof Qd<"u"?Qd:typeof self<"u"?self:typeof window<"u"?window:{});var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Am,Ms,Sm,No,fl,Pm,Cm,km;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,m){return u==Array.prototype||u==Object.prototype||(u[p]=m.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof lo=="object"&&lo];for(var p=0;p<u.length;++p){var m=u[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=e(this);function s(u,p){if(p)t:{var m=i;u=u.split(".");for(var b=0;b<u.length-1;b++){var k=u[b];if(!(k in m))break t;m=m[k]}u=u[u.length-1],b=m[u],p=p(b),p!=b&&p!=null&&t(m,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var m=0,b=!1,k={next:function(){if(!b&&m<u.length){var M=m++;return{value:p(M,u[M]),done:!1}}return b=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(u){return u||function(){return r(this,function(p,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function h(u,p,m){return u.call.apply(u.bind,arguments)}function d(u,p,m){if(!u)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,b),u.apply(p,k)}}return function(){return u.apply(p,arguments)}}function f(u,p,m){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,f.apply(null,arguments)}function g(u,p){var m=Array.prototype.slice.call(arguments,1);return function(){var b=m.slice();return b.push.apply(b,arguments),u.apply(this,b)}}function y(u,p){function m(){}m.prototype=p.prototype,u.aa=p.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(b,k,M){for(var F=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)F[ut-2]=arguments[ut];return p.prototype[k].apply(b,F)}}function v(u){const p=u.length;if(0<p){const m=Array(p);for(let b=0;b<p;b++)m[b]=u[b];return m}return[]}function _(u,p){for(let m=1;m<arguments.length;m++){const b=arguments[m];if(c(b)){const k=u.length||0,M=b.length||0;u.length=k+M;for(let F=0;F<M;F++)u[k+F]=b[F]}else u.push(b)}}class I{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function C(u){return/^[\s\xa0]*$/.test(u)}function R(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var D=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function L(u,p,m){for(const b in u)p.call(m,u[b],b,u)}function T(u,p){for(const m in u)p.call(void 0,u[m],m,u)}function w(u){const p={};for(const m in u)p[m]=u[m];return p}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let m,b;for(let k=1;k<arguments.length;k++){b=arguments[k];for(m in b)u[m]=b[m];for(let M=0;M<E.length;M++)m=E[M],Object.prototype.hasOwnProperty.call(b,m)&&(u[m]=b[m])}}function S(u){var p=1;u=u.split(":");const m=[];for(;0<p&&u.length;)m.push(u.shift()),p--;return u.length&&m.push(u.join(":")),m}function P(u){a.setTimeout(()=>{throw u},0)}function A(){var u=kt;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class pt{constructor(){this.h=this.g=null}add(p,m){const b=it.get();b.set(p,m),this.h?this.h.next=b:this.g=b,this.h=b}}var it=new I(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,Bt=!1,kt=new pt,He=()=>{const u=a.Promise.resolve(void 0);lt=()=>{u.then(ki)}};var ki=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(m){P(m)}var p=it;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Bt=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var We=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,p),a.removeEventListener("test",m,p)}catch{}return u})();function ve(u,p){if(Et.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,b=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(D){t:{try{O(p.nodeName);var k=!0;break t}catch{}k=!1}k||(p=null)}}else m=="mouseover"?p=u.fromElement:m=="mouseout"&&(p=u.toElement);this.relatedTarget=p,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ge[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ve.aa.h.call(this)}}y(ve,Et);var Ge={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),Bv=0;function $v(u,p,m,b,k){this.listener=u,this.proxy=null,this.src=p,this.type=m,this.capture=!!b,this.ha=k,this.key=++Bv,this.da=this.fa=!1}function qr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Hr(u){this.src=u,this.g={},this.h=0}Hr.prototype.add=function(u,p,m,b,k){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var F=cc(u,p,b,k);return-1<F?(p=u[F],m||(p.fa=!1)):(p=new $v(p,this.src,M,!!b,k),p.fa=m,u.push(p)),p};function ac(u,p){var m=p.type;if(m in u.g){var b=u.g[m],k=Array.prototype.indexOf.call(b,p,void 0),M;(M=0<=k)&&Array.prototype.splice.call(b,k,1),M&&(qr(p),u.g[m].length==0&&(delete u.g[m],u.h--))}}function cc(u,p,m,b){for(var k=0;k<u.length;++k){var M=u[k];if(!M.da&&M.listener==p&&M.capture==!!m&&M.ha==b)return k}return-1}var lc="closure_lm_"+(1e6*Math.random()|0),uc={};function Eh(u,p,m,b,k){if(Array.isArray(p)){for(var M=0;M<p.length;M++)Eh(u,p[M],m,b,k);return null}return m=xh(m),u&&u[jr]?u.K(p,m,l(b)?!!b.capture:!1,k):Uv(u,p,m,!1,b,k)}function Uv(u,p,m,b,k,M){if(!p)throw Error("Invalid event type");var F=l(k)?!!k.capture:!!k,ut=dc(u);if(ut||(u[lc]=ut=new Hr(u)),m=ut.add(p,m,b,F,M),m.proxy)return m;if(b=zv(),m.proxy=b,b.src=u,b.listener=m,u.addEventListener)We||(k=F),k===void 0&&(k=!1),u.addEventListener(p.toString(),b,k);else if(u.attachEvent)u.attachEvent(Ih(p.toString()),b);else if(u.addListener&&u.removeListener)u.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return m}function zv(){function u(m){return p.call(u.src,u.listener,m)}const p=jv;return u}function Th(u,p,m,b,k){if(Array.isArray(p))for(var M=0;M<p.length;M++)Th(u,p[M],m,b,k);else b=l(b)?!!b.capture:!!b,m=xh(m),u&&u[jr]?(u=u.i,p=String(p).toString(),p in u.g&&(M=u.g[p],m=cc(M,m,b,k),-1<m&&(qr(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete u.g[p],u.h--)))):u&&(u=dc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=cc(p,m,b,k)),(m=-1<u?p[u]:null)&&hc(m))}function hc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[jr])ac(p.i,u);else{var m=u.type,b=u.proxy;p.removeEventListener?p.removeEventListener(m,b,u.capture):p.detachEvent?p.detachEvent(Ih(m),b):p.addListener&&p.removeListener&&p.removeListener(b),(m=dc(p))?(ac(m,u),m.h==0&&(m.src=null,p[lc]=null)):qr(u)}}}function Ih(u){return u in uc?uc[u]:uc[u]="on"+u}function jv(u,p){if(u.da)u=!0;else{p=new ve(p,this);var m=u.listener,b=u.ha||u.src;u.fa&&hc(u),u=m.call(b,p)}return u}function dc(u){return u=u[lc],u instanceof Hr?u:null}var fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function xh(u){return typeof u=="function"?u:(u[fc]||(u[fc]=function(p){return u.handleEvent(p)}),u[fc])}function qt(){ee.call(this),this.i=new Hr(this),this.M=this,this.F=null}y(qt,ee),qt.prototype[jr]=!0,qt.prototype.removeEventListener=function(u,p,m,b){Th(this,u,p,m,b)};function ne(u,p){var m,b=u.F;if(b)for(m=[];b;b=b.F)m.push(b);if(u=u.M,b=p.type||p,typeof p=="string")p=new Et(p,u);else if(p instanceof Et)p.target=p.target||u;else{var k=p;p=new Et(b,u),x(p,k)}if(k=!0,m)for(var M=m.length-1;0<=M;M--){var F=p.g=m[M];k=Wr(F,b,!0,p)&&k}if(F=p.g=u,k=Wr(F,b,!0,p)&&k,k=Wr(F,b,!1,p)&&k,m)for(M=0;M<m.length;M++)F=p.g=m[M],k=Wr(F,b,!1,p)&&k}qt.prototype.N=function(){if(qt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var m=u.g[p],b=0;b<m.length;b++)qr(m[b]);delete u.g[p],u.h--}}this.F=null},qt.prototype.K=function(u,p,m,b){return this.i.add(String(u),p,!1,m,b)},qt.prototype.L=function(u,p,m,b){return this.i.add(String(u),p,!0,m,b)};function Wr(u,p,m,b){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var k=!0,M=0;M<p.length;++M){var F=p[M];if(F&&!F.da&&F.capture==m){var ut=F.listener,$t=F.ha||F.src;F.fa&&ac(u.i,F),k=ut.call($t,b)!==!1&&k}}return k&&!b.defaultPrevented}function Ah(u,p,m){if(typeof u=="function")m&&(u=f(u,m));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Sh(u){u.g=Ah(()=>{u.g=null,u.i&&(u.i=!1,Sh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class qv extends ee{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Sh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(u){ee.call(this),this.h=u,this.g={}}y(ds,ee);var Ph=[];function Ch(u){L(u.g,function(p,m){this.g.hasOwnProperty(m)&&hc(p)},u),u.g={}}ds.prototype.N=function(){ds.aa.N.call(this),Ch(this)},ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pc=a.JSON.stringify,Hv=a.JSON.parse,Wv=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function gc(){}gc.prototype.h=null;function kh(u){return u.h||(u.h=u.i())}function Rh(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mc(){Et.call(this,"d")}y(mc,Et);function yc(){Et.call(this,"c")}y(yc,Et);var ti={},Mh=null;function Gr(){return Mh=Mh||new qt}ti.La="serverreachability";function Dh(u){Et.call(this,ti.La,u)}y(Dh,Et);function ps(u){const p=Gr();ne(p,new Dh(p))}ti.STAT_EVENT="statevent";function Oh(u,p){Et.call(this,ti.STAT_EVENT,u),this.stat=p}y(Oh,Et);function ie(u){const p=Gr();ne(p,new Oh(p,u))}ti.Ma="timingevent";function Nh(u,p){Et.call(this,ti.Ma,u),this.size=p}y(Nh,Et);function gs(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function Gv(u,p,m,b,k,M){u.info(function(){if(u.g)if(M)for(var F="",ut=M.split("&"),$t=0;$t<ut.length;$t++){var rt=ut[$t].split("=");if(1<rt.length){var Ht=rt[0];rt=rt[1];var Wt=Ht.split("_");F=2<=Wt.length&&Wt[1]=="type"?F+(Ht+"="+rt+"&"):F+(Ht+"=redacted&")}}else F=null;else F=M;return"XMLHTTP REQ ("+b+") [attempt "+k+"]: "+p+`
`+m+`
`+F})}function Kv(u,p,m,b,k,M,F){u.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+k+"]: "+p+`
`+m+`
`+M+" "+F})}function Ri(u,p,m,b){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Xv(u,m)+(b?" "+b:"")})}function Yv(u,p){u.info(function(){return"TIMEOUT: "+p})}ms.prototype.info=function(){};function Xv(u,p){if(!u.g)return p;if(!p)return null;try{var m=JSON.parse(p);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var b=m[u];if(!(2>b.length)){var k=b[1];if(Array.isArray(k)&&!(1>k.length)){var M=k[0];if(M!="noop"&&M!="stop"&&M!="close")for(var F=1;F<k.length;F++)k[F]=""}}}}return pc(m)}catch{return p}}var Kr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_c;function Yr(){}y(Yr,gc),Yr.prototype.g=function(){return new XMLHttpRequest},Yr.prototype.i=function(){return{}},_c=new Yr;function yn(u,p,m,b){this.j=u,this.i=p,this.l=m,this.R=b||1,this.U=new ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Fh={},vc={};function bc(u,p,m){u.L=1,u.v=Zr(Ke(p)),u.m=m,u.P=!0,Bh(u,null)}function Bh(u,p){u.F=Date.now(),Xr(u),u.A=Ke(u.v);var m=u.A,b=u.R;Array.isArray(b)||(b=[String(b)]),Zh(m.i,"t",b),u.C=0,m=u.j.J,u.h=new Vh,u.g=yd(u.j,m?p:null,!u.m),0<u.O&&(u.M=new qv(f(u.Y,u,u.g),u.O)),p=u.U,m=u.g,b=u.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ph[0]=k.toString()),k=Ph);for(var M=0;M<k.length;M++){var F=Eh(m,k[M],b||p.handleEvent,!1,p.h||p);if(!F)break;p.g[F.key]=F}p=u.H?w(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),ps(),Gv(u.i,u.u,u.A,u.l,u.R,u.m)}yn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Ye(u)==3?p.j():this.Y(u)},yn.prototype.Y=function(u){try{if(u==this.g)t:{const Wt=Ye(this.g);var p=this.g.Ba();const Oi=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||od(this.g)))){this.J||Wt!=4||p==7||(p==8||0>=Oi?ps(3):ps(2)),wc(this);var m=this.g.Z();this.X=m;e:if($h(this)){var b=od(this.g);u="";var k=b.length,M=Ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ei(this),ys(this);var F="";break e}this.h.i=new a.TextDecoder}for(p=0;p<k;p++)this.h.h=!0,u+=this.h.i.decode(b[p],{stream:!(M&&p==k-1)});b.length=0,this.h.g+=u,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=m==200,Kv(this.i,this.u,this.A,this.l,this.R,Wt,m),this.o){if(this.T&&!this.K){e:{if(this.g){var ut,$t=this.g;if((ut=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(ut)){var rt=ut;break e}}rt=null}if(m=rt)Ri(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ec(this,m);else{this.o=!1,this.s=3,ie(12),ei(this),ys(this);break t}}if(this.P){m=!0;let be;for(;!this.J&&this.C<F.length;)if(be=Qv(this,F),be==vc){Wt==4&&(this.s=4,ie(14),m=!1),Ri(this.i,this.l,null,"[Incomplete Response]");break}else if(be==Fh){this.s=4,ie(15),Ri(this.i,this.l,F,"[Invalid Chunk]"),m=!1;break}else Ri(this.i,this.l,be,null),Ec(this,be);if($h(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||F.length!=0||this.h.h||(this.s=1,ie(16),m=!1),this.o=this.o&&m,!m)Ri(this.i,this.l,F,"[Invalid Chunked Response]"),ei(this),ys(this);else if(0<F.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Pc(Ht),Ht.M=!0,ie(11))}}else Ri(this.i,this.l,F,null),Ec(this,F);Wt==4&&ei(this),this.o&&!this.J&&(Wt==4?fd(this.j,this):(this.o=!1,Xr(this)))}else pb(this.g),m==400&&0<F.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),ei(this),ys(this)}}}catch{}finally{}};function $h(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Qv(u,p){var m=u.C,b=p.indexOf(`
`,m);return b==-1?vc:(m=Number(p.substring(m,b)),isNaN(m)?Fh:(b+=1,b+m>p.length?vc:(p=p.slice(b,b+m),u.C=b+m,p)))}yn.prototype.cancel=function(){this.J=!0,ei(this)};function Xr(u){u.S=Date.now()+u.I,Uh(u,u.I)}function Uh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=gs(f(u.ba,u),p)}function wc(u){u.B&&(a.clearTimeout(u.B),u.B=null)}yn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yv(this.i,this.A),this.L!=2&&(ps(),ie(17)),ei(this),this.s=2,ys(this)):Uh(this,this.S-u)};function ys(u){u.j.G==0||u.J||fd(u.j,u)}function ei(u){wc(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ch(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Ec(u,p){try{var m=u.j;if(m.G!=0&&(m.g==u||Tc(m.h,u))){if(!u.K&&Tc(m.h,u)&&m.G==3){try{var b=m.Da.g.parse(p)}catch{b=null}if(Array.isArray(b)&&b.length==3){var k=b;if(k[0]==0){t:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)ro(m),io(m);else break t;Sc(m),ie(18)}}else m.za=k[1],0<m.za-m.T&&37500>k[2]&&m.F&&m.v==0&&!m.C&&(m.C=gs(f(m.Za,m),6e3));if(1>=qh(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ii(m,11)}else if((u.K||m.g==u)&&ro(m),!C(p))for(k=m.Da.g.parse(p),p=0;p<k.length;p++){let rt=k[p];if(m.T=rt[0],rt=rt[1],m.G==2)if(rt[0]=="c"){m.K=rt[1],m.ia=rt[2];const Ht=rt[3];Ht!=null&&(m.la=Ht,m.j.info("VER="+m.la));const Wt=rt[4];Wt!=null&&(m.Aa=Wt,m.j.info("SVER="+m.Aa));const Oi=rt[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(b=1.5*Oi,m.L=b,m.j.info("backChannelRequestTimeoutMs_="+b)),b=m;const be=u.g;if(be){const ao=be.g?be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ao){var M=b.h;M.g||ao.indexOf("spdy")==-1&&ao.indexOf("quic")==-1&&ao.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Ic(M,M.h),M.h=null))}if(b.D){const Cc=be.g?be.g.getResponseHeader("X-HTTP-Session-Id"):null;Cc&&(b.ya=Cc,gt(b.I,b.D,Cc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),b=m;var F=u;if(b.qa=md(b,b.J?b.ia:null,b.W),F.K){Hh(b.h,F);var ut=F,$t=b.L;$t&&(ut.I=$t),ut.B&&(wc(ut),Xr(ut)),b.g=F}else hd(b);0<m.i.length&&so(m)}else rt[0]!="stop"&&rt[0]!="close"||ii(m,7);else m.G==3&&(rt[0]=="stop"||rt[0]=="close"?rt[0]=="stop"?ii(m,7):Ac(m):rt[0]!="noop"&&m.l&&m.l.ta(rt),m.v=0)}}ps(4)}catch{}}var Jv=class{constructor(u,p){this.g=u,this.map=p}};function zh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function qh(u){return u.h?1:u.g?u.g.size:0}function Tc(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Ic(u,p){u.g?u.g.add(p):u.h=p}function Hh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}zh.prototype.cancel=function(){if(this.i=Wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Wh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const m of u.g.values())p=p.concat(m.D);return p}return v(u.i)}function Zv(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],m=u.length,b=0;b<m;b++)p.push(u[b]);return p}p=[],m=0;for(b in u)p[m++]=u[b];return p}function tb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var m=0;m<u;m++)p.push(m);return p}p=[],m=0;for(const b in u)p[m++]=b;return p}}}function Gh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var m=tb(u),b=Zv(u),k=b.length,M=0;M<k;M++)p.call(void 0,b[M],m&&m[M],u)}var Kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eb(u,p){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var b=u[m].indexOf("="),k=null;if(0<=b){var M=u[m].substring(0,b);k=u[m].substring(b+1)}else M=u[m];p(M,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ni(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ni){this.h=u.h,Qr(this,u.j),this.o=u.o,this.g=u.g,Jr(this,u.s),this.l=u.l;var p=u.i,m=new bs;m.i=p.i,p.g&&(m.g=new Map(p.g),m.h=p.h),Yh(this,m),this.m=u.m}else u&&(p=String(u).match(Kh))?(this.h=!1,Qr(this,p[1]||"",!0),this.o=_s(p[2]||""),this.g=_s(p[3]||"",!0),Jr(this,p[4]),this.l=_s(p[5]||"",!0),Yh(this,p[6]||"",!0),this.m=_s(p[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}ni.prototype.toString=function(){var u=[],p=this.j;p&&u.push(vs(p,Xh,!0),":");var m=this.g;return(m||p=="file")&&(u.push("//"),(p=this.o)&&u.push(vs(p,Xh,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(vs(m,m.charAt(0)=="/"?sb:ib,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",vs(m,ob)),u.join("")};function Ke(u){return new ni(u)}function Qr(u,p,m){u.j=m?_s(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Jr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Yh(u,p,m){p instanceof bs?(u.i=p,ab(u.i,u.h)):(m||(p=vs(p,rb)),u.i=new bs(p,u.h))}function gt(u,p,m){u.i.set(p,m)}function Zr(u){return gt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function _s(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function vs(u,p,m){return typeof u=="string"?(u=encodeURI(u).replace(p,nb),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function nb(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Xh=/[#\/\?@]/g,ib=/[#\?:]/g,sb=/[#\?]/g,rb=/[#\?@]/g,ob=/#/g;function bs(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function _n(u){u.g||(u.g=new Map,u.h=0,u.i&&eb(u.i,function(p,m){u.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}n=bs.prototype,n.add=function(u,p){_n(this),this.i=null,u=Mi(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(p),this.h+=1,this};function Qh(u,p){_n(u),p=Mi(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Jh(u,p){return _n(u),p=Mi(u,p),u.g.has(p)}n.forEach=function(u,p){_n(this),this.g.forEach(function(m,b){m.forEach(function(k){u.call(p,k,b,this)},this)},this)},n.na=function(){_n(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),m=[];for(let b=0;b<p.length;b++){const k=u[b];for(let M=0;M<k.length;M++)m.push(p[b])}return m},n.V=function(u){_n(this);let p=[];if(typeof u=="string")Jh(this,u)&&(p=p.concat(this.g.get(Mi(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)p=p.concat(u[m])}return p},n.set=function(u,p){return _n(this),this.i=null,u=Mi(this,u),Jh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Zh(u,p,m){Qh(u,p),0<m.length&&(u.i=null,u.g.set(Mi(u,p),v(m)),u.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var m=0;m<p.length;m++){var b=p[m];const M=encodeURIComponent(String(b)),F=this.V(b);for(b=0;b<F.length;b++){var k=M;F[b]!==""&&(k+="="+encodeURIComponent(String(F[b]))),u.push(k)}}return this.i=u.join("&")};function Mi(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function ab(u,p){p&&!u.j&&(_n(u),u.i=null,u.g.forEach(function(m,b){var k=b.toLowerCase();b!=k&&(Qh(this,b),Zh(this,k,m))},u)),u.j=p}function cb(u,p){const m=new ms;if(a.Image){const b=new Image;b.onload=g(vn,m,"TestLoadImage: loaded",!0,p,b),b.onerror=g(vn,m,"TestLoadImage: error",!1,p,b),b.onabort=g(vn,m,"TestLoadImage: abort",!1,p,b),b.ontimeout=g(vn,m,"TestLoadImage: timeout",!1,p,b),a.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=u}else p(!1)}function lb(u,p){const m=new ms,b=new AbortController,k=setTimeout(()=>{b.abort(),vn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:b.signal}).then(M=>{clearTimeout(k),M.ok?vn(m,"TestPingServer: ok",!0,p):vn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(k),vn(m,"TestPingServer: error",!1,p)})}function vn(u,p,m,b,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),b(m)}catch{}}function ub(){this.g=new Wv}function hb(u,p,m){const b=m||"";try{Gh(u,function(k,M){let F=k;l(k)&&(F=pc(k)),p.push(b+M+"="+encodeURIComponent(F))})}catch(k){throw p.push(b+"type="+encodeURIComponent("_badmap")),k}}function to(u){this.l=u.Ub||null,this.j=u.eb||!1}y(to,gc),to.prototype.g=function(){return new eo(this.l,this.j)},to.prototype.i=(function(u){return function(){return u}})({});function eo(u,p){qt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(eo,qt),n=eo.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Es(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;td(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function td(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?ws(this):Es(this),this.readyState==3&&td(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,ws(this))},n.Qa=function(u){this.g&&(this.response=u,ws(this))},n.ga=function(){this.g&&ws(this)};function ws(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Es(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=p.next();return u.join(`\r
`)};function Es(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ed(u){let p="";return L(u,function(m,b){p+=b,p+=":",p+=m,p+=`\r
`}),p}function xc(u,p,m){t:{for(b in m){var b=!1;break t}b=!0}b||(m=ed(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):gt(u,p,m))}function Tt(u){qt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Tt,qt);var db=/^https?$/i,fb=["POST","PUT"];n=Tt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,m,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_c.g(),this.v=this.o?kh(this.o):kh(_c),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(M){nd(this,M);return}if(u=m||"",m=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var k in b)m.set(k,b[k]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const M of b.keys())m.set(M,b.get(M));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),k=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(fb,p,void 0))||b||k||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,F]of m)this.g.setRequestHeader(M,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rd(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){nd(this,M)}};function nd(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,id(u),no(u)}function id(u){u.A||(u.A=!0,ne(u,"complete"),ne(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ne(this,"complete"),ne(this,"abort"),no(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),no(this,!0)),Tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?sd(this):this.bb())},n.bb=function(){sd(this)};function sd(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Ye(u)!=4||u.Z()!=2)){if(u.u&&Ye(u)==4)Ah(u.Ea,0,u);else if(ne(u,"readystatechange"),Ye(u)==4){u.h=!1;try{const F=u.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var m;if(!(m=p)){var b;if(b=F===0){var k=String(u.D).match(Kh)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),b=!db.test(k?k.toLowerCase():"")}m=b}if(m)ne(u,"complete"),ne(u,"success");else{u.m=6;try{var M=2<Ye(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",id(u)}}finally{no(u)}}}}function no(u,p){if(u.g){rd(u);const m=u.g,b=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ne(u,"ready");try{m.onreadystatechange=b}catch{}}}function rd(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Ye(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Hv(p)}};function od(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function pb(u){const p={};u=(u.g&&2<=Ye(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<u.length;b++){if(C(u[b]))continue;var m=S(u[b]);const k=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=p[k]||[];p[k]=M,M.push(m)}T(p,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(u,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||p}function ad(u){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,u),this.cb=Ts("retryDelaySeedMs",1e4,u),this.Wa=Ts("forwardChannelMaxRetries",2,u),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zh(u&&u.concurrentRequestLimit),this.Da=new ub,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ad.prototype,n.la=8,n.G=1,n.connect=function(u,p,m,b){ie(0),this.W=u,this.H=p||{},m&&b!==void 0&&(this.H.OSID=m,this.H.OAID=b),this.F=this.X,this.I=md(this,null,this.W),so(this)};function Ac(u){if(cd(u),u.G==3){var p=u.U++,m=Ke(u.I);if(gt(m,"SID",u.K),gt(m,"RID",p),gt(m,"TYPE","terminate"),Is(u,m),p=new yn(u,u.j,p),p.L=2,p.v=Zr(Ke(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=p.v,m=!0),m||(p.g=yd(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Xr(p)}gd(u)}function io(u){u.g&&(Pc(u),u.g.cancel(),u.g=null)}function cd(u){io(u),u.u&&(a.clearTimeout(u.u),u.u=null),ro(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function so(u){if(!jh(u.h)&&!u.s){u.s=!0;var p=u.Ga;lt||He(),Bt||(lt(),Bt=!0),kt.add(p,u),u.B=0}}function gb(u,p){return qh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=gs(f(u.Ga,u,p),pd(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const k=new yn(this,this.j,u);let M=this.o;if(this.S&&(M?(M=w(M),x(M,this.S)):M=this.S),this.m!==null||this.O||(k.H=M,M=null),this.P)t:{for(var p=0,m=0;m<this.i.length;m++){e:{var b=this.i[m];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break e}b=void 0}if(b===void 0)break;if(p+=b,4096<p){p=m;break t}if(p===4096||m===this.i.length-1){p=m+1;break t}}p=1e3}else p=1e3;p=ud(this,k,p),m=Ke(this.I),gt(m,"RID",u),gt(m,"CVER",22),this.D&&gt(m,"X-HTTP-Session-Id",this.D),Is(this,m),M&&(this.O?p="headers="+encodeURIComponent(String(ed(M)))+"&"+p:this.m&&xc(m,this.m,M)),Ic(this.h,k),this.Ua&&gt(m,"TYPE","init"),this.P?(gt(m,"$req",p),gt(m,"SID","null"),k.T=!0,bc(k,m,null)):bc(k,m,p),this.G=2}}else this.G==3&&(u?ld(this,u):this.i.length==0||jh(this.h)||ld(this))};function ld(u,p){var m;p?m=p.l:m=u.U++;const b=Ke(u.I);gt(b,"SID",u.K),gt(b,"RID",m),gt(b,"AID",u.T),Is(u,b),u.m&&u.o&&xc(b,u.m,u.o),m=new yn(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ud(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ic(u.h,m),bc(m,b,p)}function Is(u,p){u.H&&L(u.H,function(m,b){gt(p,b,m)}),u.l&&Gh({},function(m,b){gt(p,b,m)})}function ud(u,p,m){m=Math.min(u.i.length,m);var b=u.l?f(u.l.Na,u.l,u):null;t:{var k=u.i;let M=-1;for(;;){const F=["count="+m];M==-1?0<m?(M=k[0].g,F.push("ofs="+M)):M=0:F.push("ofs="+M);let ut=!0;for(let $t=0;$t<m;$t++){let rt=k[$t].g;const Ht=k[$t].map;if(rt-=M,0>rt)M=Math.max(0,k[$t].g-100),ut=!1;else try{hb(Ht,F,"req"+rt+"_")}catch{b&&b(Ht)}}if(ut){b=F.join("&");break t}}}return u=u.i.splice(0,m),p.D=u,b}function hd(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;lt||He(),Bt||(lt(),Bt=!0),kt.add(p,u),u.v=0}}function Sc(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=gs(f(u.Fa,u),pd(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,dd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=gs(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),io(this),dd(this))};function Pc(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function dd(u){u.g=new yn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=Ke(u.qa);gt(p,"RID","rpc"),gt(p,"SID",u.K),gt(p,"AID",u.T),gt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&gt(p,"TO",u.ja),gt(p,"TYPE","xmlhttp"),Is(u,p),u.m&&u.o&&xc(p,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Zr(Ke(p)),m.m=null,m.P=!0,Bh(m,u)}n.Za=function(){this.C!=null&&(this.C=null,io(this),Sc(this),ie(19))};function ro(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function fd(u,p){var m=null;if(u.g==p){ro(u),Pc(u),u.g=null;var b=2}else if(Tc(u.h,p))m=p.D,Hh(u.h,p),b=1;else return;if(u.G!=0){if(p.o)if(b==1){m=p.m?p.m.length:0,p=Date.now()-p.F;var k=u.B;b=Gr(),ne(b,new Nh(b,m)),so(u)}else hd(u);else if(k=p.s,k==3||k==0&&0<p.X||!(b==1&&gb(u,p)||b==2&&Sc(u)))switch(m&&0<m.length&&(p=u.h,p.i=p.i.concat(m)),k){case 1:ii(u,5);break;case 4:ii(u,10);break;case 3:ii(u,6);break;default:ii(u,2)}}}function pd(u,p){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*p}function ii(u,p){if(u.j.info("Error code "+p),p==2){var m=f(u.fb,u),b=u.Xa;const k=!b;b=new ni(b||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qr(b,"https"),Zr(b),k?cb(b.toString(),m):lb(b.toString(),m)}else ie(2);u.G=0,u.l&&u.l.sa(p),gd(u),cd(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function gd(u){if(u.G=0,u.ka=[],u.l){const p=Wh(u.h);(p.length!=0||u.i.length!=0)&&(_(u.ka,p),_(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function md(u,p,m){var b=m instanceof ni?Ke(m):new ni(m);if(b.g!="")p&&(b.g=p+"."+b.g),Jr(b,b.s);else{var k=a.location;b=k.protocol,p=p?p+"."+k.hostname:k.hostname,k=+k.port;var M=new ni(null);b&&Qr(M,b),p&&(M.g=p),k&&Jr(M,k),m&&(M.l=m),b=M}return m=u.D,p=u.ya,m&&p&&gt(b,m,p),gt(b,"VER",u.la),Is(u,b),b}function yd(u,p,m){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Tt(new to({eb:m})):new Tt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _d(){}n=_d.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oo(){}oo.prototype.g=function(u,p){return new he(u,p)};function he(u,p){qt.call(this),this.g=new ad(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!C(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!C(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Di(this)}y(he,qt),he.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},he.prototype.close=function(){Ac(this.g)},he.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=pc(u),u=m);p.i.push(new Jv(p.Ya++,u)),p.G==3&&so(p)},he.prototype.N=function(){this.g.l=null,delete this.j,Ac(this.g),delete this.g,he.aa.N.call(this)};function vd(u){mc.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const m in p){u=m;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}y(vd,mc);function bd(){yc.call(this),this.status=1}y(bd,yc);function Di(u){this.g=u}y(Di,_d),Di.prototype.ua=function(){ne(this.g,"a")},Di.prototype.ta=function(u){ne(this.g,new vd(u))},Di.prototype.sa=function(u){ne(this.g,new bd)},Di.prototype.ra=function(){ne(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,he.prototype.send=he.prototype.o,he.prototype.open=he.prototype.m,he.prototype.close=he.prototype.close,km=function(){return new oo},Cm=function(){return Gr()},Pm=ti,fl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,No=Kr,Lh.COMPLETE="complete",Sm=Lh,Rh.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",qt.prototype.listen=qt.prototype.K,Ms=Rh,Tt.prototype.listenOnce=Tt.prototype.L,Tt.prototype.getLastError=Tt.prototype.Ka,Tt.prototype.getLastErrorCode=Tt.prototype.Ba,Tt.prototype.getStatus=Tt.prototype.Z,Tt.prototype.getResponseJson=Tt.prototype.Oa,Tt.prototype.getResponseText=Tt.prototype.oa,Tt.prototype.send=Tt.prototype.ea,Tt.prototype.setWithCredentials=Tt.prototype.Ha,Am=Tt}).apply(typeof lo<"u"?lo:typeof self<"u"?self:typeof window<"u"?window:{});const Jd="@firebase/firestore",Zd="4.8.0";/**
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
 */class Yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
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
 */let as="11.10.0";/**
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
 */const Ti=new Yl("@firebase/firestore");function Vi(){return Ti.logLevel}function U(n,...t){if(Ti.logLevel<=tt.DEBUG){const e=t.map(au);Ti.debug(`Firestore (${as}): ${n}`,...e)}}function dn(n,...t){if(Ti.logLevel<=tt.ERROR){const e=t.map(au);Ti.error(`Firestore (${as}): ${n}`,...e)}}function Fn(n,...t){if(Ti.logLevel<=tt.WARN){const e=t.map(au);Ti.warn(`Firestore (${as}): ${n}`,...e)}}function au(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function W(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,Rm(n,i,e)}function Rm(n,t,e){let i=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw dn(i),new Error(i)}function at(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||Rm(t,s,i)}function X(n,t){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends gn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Mm{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Yt.UNAUTHENTICATED)))}shutdown(){}}class AT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ST{constructor(t){this.t=t,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){at(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let r=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new cn,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=r;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new cn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(at(typeof i.accessToken=="string",31837,{l:i}),new Mm(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string",2055,{h:t}),new Yt(t)}}class PT{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CT{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new PT(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kT{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,me(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){at(this.o===void 0,3512);const i=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tf(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(at(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new tf(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function RT(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function Dm(){return new TextEncoder}/**
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
 */class cu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=RT(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function J(n,t){return n<t?-1:n>t?1:0}function pl(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return J(i,s);{const r=Dm(),o=MT(r.encode(ef(n,e)),r.encode(ef(t,e)));return o!==0?o:J(i,s)}}e+=i>65535?2:1}return J(n.length,t.length)}function ef(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function MT(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return J(n[e],t[e]);return J(n.length,t.length)}function Qi(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
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
 */const nf="__name__";class Oe{constructor(t,e,i){e===void 0?e=0:e>t.length&&W(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&W(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=Oe.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return J(t.length,e.length)}static compareSegments(t,e){const i=Oe.isNumericId(t),s=Oe.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?Oe.extractNumericId(t).compare(Oe.extractNumericId(e)):pl(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return On.fromString(t.substring(4,t.length-2))}}class ft extends Oe{construct(t,e,i){return new ft(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new ft(e)}static emptyPath(){return new ft([])}}const DT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends Oe{construct(t,e,i){return new zt(t,e,i)}static isValidIdentifier(t){return DT.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nf}static keyField(){return new zt([nf])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new zt(e)}static emptyPath(){return new zt([])}}/**
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
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(ft.fromString(t))}static fromName(t){return new z(ft.fromString(t).popFirst(5))}static empty(){return new z(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new ft(t.slice()))}}/**
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
 */function Om(n,t,e){if(!e)throw new $(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function OT(n,t,e,i){if(t===!0&&i===!0)throw new $(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function sf(n){if(!z.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rf(n){if(z.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nm(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function se(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Oa(n);throw new $(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Dt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Sr(n,t){if(!Nm(n))throw new $(N.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new $(N.INVALID_ARGUMENT,e);return!0}/**
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
 */const of=-62135596800,af=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*af);return new mt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<of)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/af}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Sr(t,mt._jsonSchema))return new mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-of;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:Dt("string",mt._jsonSchemaVersion),seconds:Dt("number"),nanoseconds:Dt("number")};/**
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
 */class G{static fromTimestamp(t){return new G(t)}static min(){return new G(new mt(0,0))}static max(){return new G(new mt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const rr=-1;function NT(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new mt(e+1,0):new mt(e,i));return new Bn(s,z.empty(),t)}function LT(n){return new Bn(n.readTime,n.key,rr)}class Bn{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Bn(G.min(),z.empty(),rr)}static max(){return new Bn(G.max(),z.empty(),rr)}}function VT(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=z.comparator(n.documentKey,t.documentKey),e!==0?e:J(n.largestBatchId,t.largestBatchId))}/**
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
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function cs(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==FT)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):V.reject(e)}static resolve(t){return new V(((e,i)=>{e(t)}))}static reject(t){return new V(((e,i)=>{i(t)}))}static waitFor(t){return new V(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(c=>i(c)))})),o=!0,r===s&&e()}))}static or(t){let e=V.resolve(!1);for(const i of t)e=e.next((s=>s?V.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new V(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next((h=>{o[l]=h,++a,a===r&&i(o)}),(h=>s(h)))}}))}static doWhile(t,e){return new V(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function $T(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Na{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this._e(i),this.ae=i=>e.writeSequenceNumber(i))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Na.ue=-1;/**
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
 */const lu=-1;function La(n){return n==null}function la(n){return n===0&&1/n==-1/0}function UT(n){return typeof n=="number"&&Number.isInteger(n)&&!la(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Lm="";function zT(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=cf(t)),t=jT(n.get(e),t);return cf(t)}function jT(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case Lm:e+="";break;default:e+=r}}return e}function cf(n){return n+Lm+""}/**
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
 */function lf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Yn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Vm(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class wt{constructor(t,e){this.comparator=t,this.root=e||Ut.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ut.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new uo(this.root,t,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new uo(this.root,t,this.comparator,!0)}}class uo{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ut{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??Ut.RED,this.left=s??Ut.EMPTY,this.right=r??Ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new Ut(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Ut.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw W(27949);return t+(this.isRed()?0:1)}}Ut.EMPTY=null,Ut.RED=!0,Ut.BLACK=!1;Ut.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new Ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Lt{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new uf(this.data.getIterator())}getIteratorFrom(t){return new uf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Lt(this.comparator);return e.data=t,e}}class uf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fe{constructor(t){this.fields=t,t.sort(zt.comparator)}static empty(){return new fe([])}unionWith(t){let e=new Lt(zt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new fe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qi(this.fields,t.fields,((e,i)=>e.isEqual(i)))}}/**
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
 */class Fm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Fm("Invalid base64 string: "+r):r}})(t);return new jt(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const qT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(n){if(at(!!n,39018),typeof n=="string"){let t=0;const e=qT.exec(n);if(at(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Un(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
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
 */const Bm="server_timestamp",$m="__type__",Um="__previous_value__",zm="__local_write_time__";function uu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[$m])===null||e===void 0?void 0:e.stringValue)===Bm}function Va(n){const t=n.mapValue.fields[Um];return uu(t)?Va(t):t}function or(n){const t=$n(n.mapValue.fields[zm].timestampValue);return new mt(t.seconds,t.nanos)}/**
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
 */class HT{constructor(t,e,i,s,r,o,a,c,l,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=h}}const ua="(default)";class ar{constructor(t,e){this.projectId=t,this.database=e||ua}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database===ua}isEqual(t){return t instanceof ar&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const jm="__type__",WT="__max__",ho={mapValue:{}},qm="__vector__",ha="value";function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uu(n)?4:KT(n)?9007199254740991:GT(n)?10:11:W(28295,{value:n})}function je(n,t){if(n===t)return!0;const e=zn(n);if(e!==zn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return or(n).isEqual(or(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=$n(s.timestampValue),a=$n(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return Un(s.bytesValue).isEqual(Un(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return At(s.geoPointValue.latitude)===At(r.geoPointValue.latitude)&&At(s.geoPointValue.longitude)===At(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return At(s.integerValue)===At(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=At(s.doubleValue),a=At(r.doubleValue);return o===a?la(o)===la(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return Qi(n.arrayValue.values||[],t.arrayValue.values||[],je);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(lf(o)!==lf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!je(o[c],a[c])))return!1;return!0})(n,t);default:return W(52216,{left:n})}}function cr(n,t){return(n.values||[]).find((e=>je(e,t)))!==void 0}function Ji(n,t){if(n===t)return 0;const e=zn(n),i=zn(t);if(e!==i)return J(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=At(r.integerValue||r.doubleValue),c=At(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,t);case 3:return hf(n.timestampValue,t.timestampValue);case 4:return hf(or(n),or(t));case 5:return pl(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=Un(r),c=Un(o);return a.compareTo(c)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const h=J(a[l],c[l]);if(h!==0)return h}return J(a.length,c.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=J(At(r.latitude),At(o.latitude));return a!==0?a:J(At(r.longitude),At(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return df(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var a,c,l,h;const d=r.fields||{},f=o.fields||{},g=(a=d[ha])===null||a===void 0?void 0:a.arrayValue,y=(c=f[ha])===null||c===void 0?void 0:c.arrayValue,v=J(((l=g==null?void 0:g.values)===null||l===void 0?void 0:l.length)||0,((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0);return v!==0?v:df(g,y)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===ho.mapValue&&o===ho.mapValue)return 0;if(r===ho.mapValue)return 1;if(o===ho.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const f=pl(c[d],h[d]);if(f!==0)return f;const g=Ji(a[c[d]],l[h[d]]);if(g!==0)return g}return J(c.length,h.length)})(n.mapValue,t.mapValue);default:throw W(23264,{le:e})}}function hf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return J(n,t);const e=$n(n),i=$n(t),s=J(e.seconds,i.seconds);return s!==0?s:J(e.nanos,i.nanos)}function df(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=Ji(e[s],i[s]);if(r)return r}return J(e.length,i.length)}function Zi(n){return gl(n)}function gl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=$n(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Un(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return z.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=gl(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${gl(e.fields[o])}`;return s+"}"})(n.mapValue):W(61005,{value:n})}function Lo(n){switch(zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Va(n);return t?16+Lo(t):16;case 5:return 2*n.stringValue.length;case 6:return Un(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Lo(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Yn(i.fields,((r,o)=>{s+=r.length+Lo(o)})),s})(n.mapValue);default:throw W(13486,{value:n})}}function ff(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ml(n){return!!n&&"integerValue"in n}function hu(n){return!!n&&"arrayValue"in n}function pf(n){return!!n&&"nullValue"in n}function gf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vo(n){return!!n&&"mapValue"in n}function GT(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[jm])===null||e===void 0?void 0:e.stringValue)===qm}function Hs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Yn(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=Hs(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Hs(n.arrayValue.values[e]);return t}return Object.assign({},n)}function KT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===WT}/**
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
 */class ce{constructor(t){this.value=t}static empty(){return new ce({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Vo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hs(e)}setAll(t){let e=zt.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=Hs(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());Vo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Yn(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new ce(Hs(this.value))}}function Hm(n){const t=[];return Yn(n.fields,((e,i)=>{const s=new zt([e]);if(Vo(i)){const r=Hm(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new fe(t)}/**
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
 */class Qt{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Qt(t,0,G.min(),G.min(),G.min(),ce.empty(),0)}static newFoundDocument(t,e,i,s){return new Qt(t,1,e,G.min(),i,s,0)}static newNoDocument(t,e){return new Qt(t,2,e,G.min(),G.min(),ce.empty(),0)}static newUnknownDocument(t,e){return new Qt(t,3,e,G.min(),G.min(),ce.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ce.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class da{constructor(t,e){this.position=t,this.inclusive=e}}function mf(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=z.comparator(z.fromName(o.referenceValue),e.key):i=Ji(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function yf(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!je(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class lr{constructor(t,e="asc"){this.field=t,this.dir=e}}function YT(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Wm{}class Mt extends Wm{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new QT(t,e,i):e==="array-contains"?new tI(t,i):e==="in"?new eI(t,i):e==="not-in"?new nI(t,i):e==="array-contains-any"?new iI(t,i):new Mt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new JT(t,i):new ZT(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ji(e,this.value)):e!==null&&zn(this.value)===zn(e)&&this.matchesComparison(Ji(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pe extends Wm{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Pe(t,e)}matches(t){return Gm(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Gm(n){return n.op==="and"}function Km(n){return XT(n)&&Gm(n)}function XT(n){for(const t of n.filters)if(t instanceof Pe)return!1;return!0}function yl(n){if(n instanceof Mt)return n.field.canonicalString()+n.op.toString()+Zi(n.value);if(Km(n))return n.filters.map((t=>yl(t))).join(",");{const t=n.filters.map((e=>yl(e))).join(",");return`${n.op}(${t})`}}function Ym(n,t){return n instanceof Mt?(function(i,s){return s instanceof Mt&&i.op===s.op&&i.field.isEqual(s.field)&&je(i.value,s.value)})(n,t):n instanceof Pe?(function(i,s){return s instanceof Pe&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&Ym(o,s.filters[a])),!0):!1})(n,t):void W(19439)}function Xm(n){return n instanceof Mt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Zi(e.value)}`})(n):n instanceof Pe?(function(e){return e.op.toString()+" {"+e.getFilters().map(Xm).join(" ,")+"}"})(n):"Filter"}class QT extends Mt{constructor(t,e,i){super(t,e,i),this.key=z.fromName(i.referenceValue)}matches(t){const e=z.comparator(t.key,this.key);return this.matchesComparison(e)}}class JT extends Mt{constructor(t,e){super(t,"in",e),this.keys=Qm("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ZT extends Mt{constructor(t,e){super(t,"not-in",e),this.keys=Qm("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Qm(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((i=>z.fromName(i.referenceValue)))}class tI extends Mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hu(e)&&cr(e.arrayValue,this.value)}}class eI extends Mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&cr(this.value.arrayValue,e)}}class nI extends Mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!cr(this.value.arrayValue,e)}}class iI extends Mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>cr(this.value.arrayValue,i)))}}/**
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
 */class sI{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Pe=null}}function _f(n,t=null,e=[],i=[],s=null,r=null,o=null){return new sI(n,t,e,i,s,r,o)}function du(n){const t=X(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>yl(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),La(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>Zi(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>Zi(i))).join(",")),t.Pe=e}return t.Pe}function fu(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!YT(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ym(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!yf(n.startAt,t.startAt)&&yf(n.endAt,t.endAt)}function _l(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class us{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function rI(n,t,e,i,s,r,o,a){return new us(n,t,e,i,s,r,o,a)}function Fa(n){return new us(n)}function vf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jm(n){return n.collectionGroup!==null}function Ws(n){const t=X(n);if(t.Te===null){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Lt(zt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new lr(r,i))})),e.has(zt.keyField().canonicalString())||t.Te.push(new lr(zt.keyField(),i))}return t.Te}function Fe(n){const t=X(n);return t.Ie||(t.Ie=oI(t,Ws(n))),t.Ie}function oI(n,t){if(n.limitType==="F")return _f(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new lr(s.field,r)}));const e=n.endAt?new da(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new da(n.startAt.position,n.startAt.inclusive):null;return _f(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function vl(n,t){const e=n.filters.concat([t]);return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function bl(n,t,e){return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ba(n,t){return fu(Fe(n),Fe(t))&&n.limitType===t.limitType}function Zm(n){return`${du(Fe(n))}|lt:${n.limitType}`}function Fi(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>Xm(s))).join(", ")}]`),La(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>Zi(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>Zi(s))).join(",")),`Target(${i})`})(Fe(n))}; limitType=${n.limitType})`}function $a(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):z.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of Ws(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,c){const l=mf(o,a,c);return o.inclusive?l<=0:l<0})(i.startAt,Ws(i),s)||i.endAt&&!(function(o,a,c){const l=mf(o,a,c);return o.inclusive?l>=0:l>0})(i.endAt,Ws(i),s))})(n,t)}function aI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ty(n){return(t,e)=>{let i=!1;for(const s of Ws(n)){const r=cI(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function cI(n,t,e){const i=n.field.isKeyField()?z.comparator(t.key,e.key):(function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?Ji(c,l):W(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return W(19790,{direction:n.dir})}}/**
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
 */class Si{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Yn(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return Vm(this.inner)}size(){return this.innerSize}}/**
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
 */const lI=new wt(z.comparator);function fn(){return lI}const ey=new wt(z.comparator);function Ds(...n){let t=ey;for(const e of n)t=t.insert(e.key,e);return t}function ny(n){let t=ey;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function hi(){return Gs()}function iy(){return Gs()}function Gs(){return new Si((n=>n.toString()),((n,t)=>n.isEqual(t)))}const uI=new wt(z.comparator),hI=new Lt(z.comparator);function et(...n){let t=hI;for(const e of n)t=t.add(e);return t}const dI=new Lt(J);function fI(){return dI}/**
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
 */function pu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(t)?"-0":t}}function sy(n){return{integerValue:""+n}}function pI(n,t){return UT(t)?sy(t):pu(n,t)}/**
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
 */class Ua{constructor(){this._=void 0}}function gI(n,t,e){return n instanceof fa?(function(s,r){const o={fields:{[$m]:{stringValue:Bm},[zm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&uu(r)&&(r=Va(r)),r&&(o.fields[Um]=r),{mapValue:o}})(e,t):n instanceof ur?oy(n,t):n instanceof hr?ay(n,t):(function(s,r){const o=ry(s,r),a=bf(o)+bf(s.Ee);return ml(o)&&ml(s.Ee)?sy(a):pu(s.serializer,a)})(n,t)}function mI(n,t,e){return n instanceof ur?oy(n,t):n instanceof hr?ay(n,t):e}function ry(n,t){return n instanceof pa?(function(i){return ml(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class fa extends Ua{}class ur extends Ua{constructor(t){super(),this.elements=t}}function oy(n,t){const e=cy(t);for(const i of n.elements)e.some((s=>je(s,i)))||e.push(i);return{arrayValue:{values:e}}}class hr extends Ua{constructor(t){super(),this.elements=t}}function ay(n,t){let e=cy(t);for(const i of n.elements)e=e.filter((s=>!je(s,i)));return{arrayValue:{values:e}}}class pa extends Ua{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function bf(n){return At(n.integerValue||n.doubleValue)}function cy(n){return hu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function yI(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof ur&&s instanceof ur||i instanceof hr&&s instanceof hr?Qi(i.elements,s.elements,je):i instanceof pa&&s instanceof pa?je(i.Ee,s.Ee):i instanceof fa&&s instanceof fa})(n.transform,t.transform)}class _I{constructor(t,e){this.version=t,this.transformResults=e}}class re{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new re}static exists(t){return new re(void 0,t)}static updateTime(t){return new re(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fo(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class za{}function ly(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ja(n.key,re.none()):new Pr(n.key,n.data,re.none());{const e=n.data,i=ce.empty();let s=new Lt(zt.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Xn(n.key,i,new fe(s.toArray()),re.none())}}function vI(n,t,e){n instanceof Pr?(function(s,r,o){const a=s.value.clone(),c=Ef(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof Xn?(function(s,r,o){if(!Fo(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Ef(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(uy(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function Ks(n,t,e,i){return n instanceof Pr?(function(r,o,a,c){if(!Fo(r.precondition,o))return a;const l=r.value.clone(),h=Tf(r.fieldTransforms,c,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,t,e,i):n instanceof Xn?(function(r,o,a,c){if(!Fo(r.precondition,o))return a;const l=Tf(r.fieldTransforms,c,o),h=o.data;return h.setAll(uy(r)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((d=>d.field)))})(n,t,e,i):(function(r,o,a){return Fo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function bI(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=ry(i.transform,s||null);r!=null&&(e===null&&(e=ce.empty()),e.set(i.field,r))}return e||null}function wf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Qi(i,s,((r,o)=>yI(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Pr extends za{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends za{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function uy(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function Ef(n,t,e){const i=new Map;at(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,mI(o,a,e[s]))}return i}function Tf(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,gI(r,o,t))}return i}class ja extends za{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wI extends za{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EI{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&vI(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ks(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ks(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=iy();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const c=ly(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),et())}isEqual(t){return this.batchId===t.batchId&&Qi(this.mutations,t.mutations,((e,i)=>wf(e,i)))&&Qi(this.baseMutations,t.baseMutations,((e,i)=>wf(e,i)))}}class gu{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){at(t.mutations.length===i.length,58842,{Ve:t.mutations.length,me:i.length});let s=(function(){return uI})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new gu(t,e,i,s)}}/**
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
 */class TI{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class II{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Rt,st;function xI(n){switch(n){case N.OK:return W(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function hy(n){if(n===void 0)return dn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Rt.OK:return N.OK;case Rt.CANCELLED:return N.CANCELLED;case Rt.UNKNOWN:return N.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return N.INTERNAL;case Rt.UNAVAILABLE:return N.UNAVAILABLE;case Rt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Rt.NOT_FOUND:return N.NOT_FOUND;case Rt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Rt.ABORTED:return N.ABORTED;case Rt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Rt.DATA_LOSS:return N.DATA_LOSS;default:return W(39323,{code:n})}}(st=Rt||(Rt={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const AI=new On([4294967295,4294967295],0);function If(n){const t=Dm().encode(n),e=new xm;return e.update(t),new Uint8Array(e.digest())}function xf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new On([e,i],0),new On([s,r],0)]}class mu{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Os(`Invalid padding: ${e}`);if(i<0)throw new Os(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Os(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=On.fromNumber(this.fe)}pe(t,e,i){let s=t.add(e.multiply(On.fromNumber(i)));return s.compare(AI)===1&&(s=new On([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=If(t),[i,s]=xf(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);if(!this.ye(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new mu(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.fe===0)return;const e=If(t),[i,s]=xf(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);this.we(o)}}we(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qa{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,Cr.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new qa(G.min(),s,new wt(J),fn(),et())}}class Cr{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Cr(i,e,et(),et(),et())}}/**
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
 */class Bo{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.be=s}}class dy{constructor(t,e){this.targetId=t,this.De=e}}class fy{constructor(t,e,i=jt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class Af{constructor(){this.ve=0,this.Ce=Sf(),this.Fe=jt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=et(),e=et(),i=et();return this.Ce.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:W(38017,{changeType:r})}})),new Cr(this.Fe,this.Me,t,e,i)}ke(){this.xe=!1,this.Ce=Sf()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,at(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class SI{constructor(t){this.We=t,this.Ge=new Map,this.ze=fn(),this.je=fo(),this.Je=fo(),this.He=new wt(J)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const i=this.tt(e);switch(t.state){case 0:this.nt(e)&&i.Be(t.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(t.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(i.Ke(),i.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),i.Be(t.resumeToken));break;default:W(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((i,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,i=t.De.count,s=this.st(e);if(s){const r=s.target;if(_l(r))if(i===0){const o=new z(r.path);this.Xe(e,o,Qt.newNoDocument(o,G.min()))}else at(i===1,20013,{expectedCount:i});else{const o=this.ot(e);if(o!==i){const a=this._t(t),c=a?this.ut(a,t,o):1;if(c!==0){this.rt(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,l)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=Un(i).toUint8Array()}catch(c){if(c instanceof Fm)return Fn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new mu(o,s,r)}catch(c){return Fn(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(t,e,i){return e.De.count===i-this.ht(t,e.targetId)?0:2}ht(t,e){const i=this.We.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Xe(e,r,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((r,o)=>{const a=this.st(o);if(a){if(r.current&&_l(a.target)){const c=new z(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Qt.newNoDocument(c,t))}r.Ne&&(e.set(o,r.Le()),r.ke())}}));let i=et();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.ze.forEach(((r,o)=>o.setReadTime(t)));const s=new qa(t,e,this.He,this.ze,i);return this.ze=fn(),this.je=fo(),this.Je=fo(),this.He=new wt(J),s}Ze(t,e){if(!this.nt(t))return;const i=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,i),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,i){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),i&&(this.ze=this.ze.insert(e,i))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Af,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new Lt(J),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new Lt(J),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Af),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function fo(){return new wt(z.comparator)}function Sf(){return new wt(z.comparator)}const PI={asc:"ASCENDING",desc:"DESCENDING"},CI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kI={and:"AND",or:"OR"};class RI{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function wl(n,t){return n.useProto3Json||La(t)?t:{value:t}}function ga(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function py(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function MI(n,t){return ga(n,t.toTimestamp())}function Be(n){return at(!!n,49232),G.fromTimestamp((function(e){const i=$n(e);return new mt(i.seconds,i.nanos)})(n))}function yu(n,t){return El(n,t).canonicalString()}function El(n,t){const e=(function(s){return new ft(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function gy(n){const t=ft.fromString(n);return at(by(t),10190,{key:t.toString()}),t}function Tl(n,t){return yu(n.databaseId,t.path)}function Vc(n,t){const e=gy(t);if(e.get(1)!==n.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new z(yy(e))}function my(n,t){return yu(n.databaseId,t)}function DI(n){const t=gy(n);return t.length===4?ft.emptyPath():yy(t)}function Il(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yy(n){return at(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pf(n,t,e){return{name:Tl(n,t),fields:e.value.mapValue.fields}}function OI(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:W(39313,{state:l})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(l,h){return l.useProto3Json?(at(h===void 0||typeof h=="string",58123),jt.fromBase64String(h||"")):(at(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),jt.fromUint8Array(h||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(l){const h=l.code===void 0?N.UNKNOWN:hy(l.code);return new $(h,l.message||"")})(o);e=new fy(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Vc(n,i.document.name),r=Be(i.document.updateTime),o=i.document.createTime?Be(i.document.createTime):G.min(),a=new ce({mapValue:{fields:i.document.fields}}),c=Qt.newFoundDocument(s,r,o,a),l=i.targetIds||[],h=i.removedTargetIds||[];e=new Bo(l,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Vc(n,i.document),r=i.readTime?Be(i.readTime):G.min(),o=Qt.newNoDocument(s,r),a=i.removedTargetIds||[];e=new Bo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Vc(n,i.document),r=i.removedTargetIds||[];e=new Bo([],r,s,null)}else{if(!("filter"in t))return W(11601,{At:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new II(s,r),a=i.targetId;e=new dy(a,o)}}return e}function NI(n,t){let e;if(t instanceof Pr)e={update:Pf(n,t.key,t.value)};else if(t instanceof ja)e={delete:Tl(n,t.key)};else if(t instanceof Xn)e={update:Pf(n,t.key,t.data),updateMask:qI(t.fieldMask)};else{if(!(t instanceof wI))return W(16599,{Rt:t.type});e={verify:Tl(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ur)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pa)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw W(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:MI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W(27497)})(n,t.precondition)),e}function LI(n,t){return n&&n.length>0?(at(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?Be(s.updateTime):Be(r);return o.isEqual(G.min())&&(o=Be(r)),new _I(o,s.transformResults||[])})(e,t)))):[]}function VI(n,t){return{documents:[my(n,t.path)]}}function FI(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=my(n,s);const r=(function(l){if(l.length!==0)return vy(Pe.create(l,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(l){if(l.length!==0)return l.map((h=>(function(f){return{field:Bi(f.field),direction:UI(f.dir)}})(h)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=wl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(t.endAt)),{Vt:e,parent:s}}function BI(n){let t=DI(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){at(i===1,65062);const h=e.from[0];h.allDescendants?s=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=(function(d){const f=_y(d);return f instanceof Pe&&Km(f)?f.getFilters():[f]})(e.where));let o=[];e.orderBy&&(o=(function(d){return d.map((f=>(function(y){return new lr($i(y.field),(function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(f)))})(e.orderBy));let a=null;e.limit&&(a=(function(d){let f;return f=typeof d=="object"?d.value:d,La(f)?null:f})(e.limit));let c=null;e.startAt&&(c=(function(d){const f=!!d.before,g=d.values||[];return new da(g,f)})(e.startAt));let l=null;return e.endAt&&(l=(function(d){const f=!d.before,g=d.values||[];return new da(g,f)})(e.endAt)),rI(t,s,o,r,a,"F",c,l)}function $I(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function _y(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=$i(e.unaryFilter.field);return Mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=$i(e.unaryFilter.field);return Mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$i(e.unaryFilter.field);return Mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$i(e.unaryFilter.field);return Mt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Mt.create($i(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Pe.create(e.compositeFilter.filters.map((i=>_y(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(e.compositeFilter.op))})(n):W(30097,{filter:n})}function UI(n){return PI[n]}function zI(n){return CI[n]}function jI(n){return kI[n]}function Bi(n){return{fieldPath:n.canonicalString()}}function $i(n){return zt.fromServerFormat(n.fieldPath)}function vy(n){return n instanceof Mt?(function(e){if(e.op==="=="){if(gf(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NAN"}};if(pf(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(gf(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NOT_NAN"}};if(pf(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(e.field),op:zI(e.op),value:e.value}}})(n):n instanceof Pe?(function(e){const i=e.getFilters().map((s=>vy(s)));return i.length===1?i[0]:{compositeFilter:{op:jI(e.op),filters:i}}})(n):W(54877,{filter:n})}function qI(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function by(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xn{constructor(t,e,i,s,r=G.min(),o=G.min(),a=jt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new xn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class HI{constructor(t){this.gt=t}}function WI(n){const t=BI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bl(t,t.limit,"L"):t}/**
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
 */class GI{constructor(){this.Dn=new KI}addToCollectionParentIndex(t,e){return this.Dn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Bn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Bn.min())}updateCollectionGroup(t,e,i){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class KI{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new Lt(ft.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Lt(ft.comparator)).toArray()}}/**
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
 */const Cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wy=41943040;class ae{static withCacheSize(t){return new ae(t,ae.DEFAULT_COLLECTION_PERCENTILE,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */ae.DEFAULT_COLLECTION_PERCENTILE=10,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ae.DEFAULT=new ae(wy,ae.DEFAULT_COLLECTION_PERCENTILE,ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ae.DISABLED=new ae(-1,0,0);/**
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
 */class ts{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new ts(0)}static ur(){return new ts(-1)}}/**
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
 */const kf="LruGarbageCollector",YI=1048576;function Rf([n,t],[e,i]){const s=J(n,e);return s===0?J(t,i):s}class XI{constructor(t){this.Tr=t,this.buffer=new Lt(Rf),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();Rf(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class QI{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){U(kf,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ls(e)?U(kf,"Ignoring IndexedDB error during garbage collection: ",e):await cs(e)}await this.Rr(3e5)}))}}class JI{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return V.resolve(Na.ue);const i=new XI(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Cf)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cf):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let i,s,r,o,a,c,l;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(t,s)))).next((d=>(i=d,a=Date.now(),this.removeTargets(t,i,e)))).next((d=>(r=d,c=Date.now(),this.removeOrphanedDocuments(t,i)))).next((d=>(l=Date.now(),Vi()<=tt.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(l-c)+`ms
Total Duration: ${l-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:d}))))}}function ZI(n,t){return new JI(n,t)}/**
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
 */class tx{constructor(){this.changes=new Si((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?V.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ex{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class nx{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&Ks(i.mutation,s,fe.empty(),mt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,et()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=et()){const s=hi();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=Ds();return r.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=hi();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,et())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=fn();const o=Gs(),a=(function(){return Gs()})();return e.forEach(((c,l)=>{const h=i.get(l.key);s.has(l.key)&&(h===void 0||h.mutation instanceof Xn)?r=r.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Ks(h.mutation,l,h.mutation.getFieldMask(),mt.now())):o.set(l.key,fe.empty())})),this.recalculateAndSaveOverlays(t,r).next((c=>(c.forEach(((l,h)=>o.set(l,h))),e.forEach(((l,h)=>{var d;return a.set(l,new ex(h,(d=o.get(l))!==null&&d!==void 0?d:null))})),a)))}recalculateAndSaveOverlays(t,e){const i=Gs();let s=new wt(((o,a)=>o-a)),r=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((c=>{const l=e.get(c);if(l===null)return;let h=i.get(c)||fe.empty();h=a.applyToLocalView(l,h),i.set(c,h);const d=(s.get(a.batchId)||et()).add(c);s=s.insert(a.batchId,d)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,h=c.value,d=iy();h.forEach((f=>{if(!r.has(f)){const g=ly(e.get(f),i.get(f));g!==null&&d.set(f,g),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(t,l,d))}return V.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return(function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Jm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):V.resolve(hi());let a=rr,c=r;return o.next((l=>V.forEach(l,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(t,h).next((f=>{c=c.insert(h,f)}))))).next((()=>this.populateOverlays(t,l,r))).next((()=>this.computeViews(t,c,l,et()))).next((h=>({batchId:a,changes:ny(h)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new z(e)).next((i=>{let s=Ds();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(t,r).next((a=>V.forEach(a,(c=>{const l=(function(d,f){return new us(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,i,s).next((h=>{h.forEach(((d,f)=>{o=o.insert(d,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((c,l)=>{const h=l.getKey();o.get(h)===null&&(o=o.insert(h,Qt.newInvalidDocument(h)))}));let a=Ds();return o.forEach(((c,l)=>{const h=r.get(c);h!==void 0&&Ks(h.mutation,l,fe.empty(),mt.now()),$a(e,l)&&(a=a.insert(c,l))})),a}))}}/**
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
 */class ix{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return V.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Be(s.createTime)}})(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:WI(s.bundledQuery),readTime:Be(s.readTime)}})(e)),V.resolve()}}/**
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
 */class sx{constructor(){this.overlays=new wt(z.comparator),this.kr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const i=hi();return V.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.wt(t,e,r)})),V.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),V.resolve()}getOverlaysForCollection(t,e,i){const s=hi(),r=e.length+1,o=new z(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new wt(((l,h)=>l-h));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>i){let h=r.get(l.largestBatchId);h===null&&(h=hi(),r=r.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=hi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,h)=>a.set(l,h))),!(a.size()>=s)););return V.resolve(a)}wt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new TI(e,i));let r=this.kr.get(e);r===void 0&&(r=et(),this.kr.set(e,r)),this.kr.set(e,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class rx{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class _u{constructor(){this.qr=new Lt(Vt.Qr),this.$r=new Lt(Vt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const i=new Vt(t,e);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new Vt(t,e))}Gr(t,e){t.forEach((i=>this.removeReference(i,e)))}zr(t){const e=new z(new ft([])),i=new Vt(e,t),s=new Vt(e,t+1),r=[];return this.$r.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new z(new ft([])),i=new Vt(e,t),s=new Vt(e,t+1);let r=et();return this.$r.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new Vt(t,0),i=this.qr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Vt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return z.comparator(t.key,e.key)||J(t.Hr,e.Hr)}static Ur(t,e){return J(t.Hr,e.Hr)||z.comparator(t.key,e.key)}}/**
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
 */class ox{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new Lt(Vt.Qr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EI(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new Vt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?lu:this.er-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Vt(e,0),s=new Vt(e,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new Lt(J);return e.forEach((s=>{const r=new Vt(s,0),o=new Vt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),V.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;z.isDocumentKey(r)||(r=r.child(""));const o=new Vt(new z(r),0);let a=new Lt(J);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Hr)),!0)}),o),V.resolve(this.ei(a))}ei(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){at(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return V.forEach(e.mutations,(s=>{const r=new Vt(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=i}))}rr(t){}containsKey(t,e){const i=new Vt(e,0),s=this.Yr.firstAfterOrEqual(i);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class ax{constructor(t){this.ni=t,this.docs=(function(){return new wt(z.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return V.resolve(i?i.document.mutableCopy():Qt.newInvalidDocument(e))}getEntries(t,e){let i=fn();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Qt.newInvalidDocument(s))})),V.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=fn();const o=e.path,a=new z(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||VT(LT(h),i)<=0||(s.has(h.key)||$a(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,i,s){W(9500)}ri(t,e){return V.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new cx(this)}getSize(t){return V.resolve(this.size)}}class cx extends tx{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(i)})),V.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class lx{constructor(t){this.persistence=t,this.ii=new Si((e=>du(e)),fu),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.si=0,this.oi=new _u,this.targetCount=0,this._i=ts.ar()}forEachTarget(t,e){return this.ii.forEach(((i,s)=>e(s))),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.si&&(this.si=e),V.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ts(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.hr(e),V.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),V.waitFor(r).next((()=>s))}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const i=this.ii.get(e)||null;return V.resolve(i)}addMatchingKeys(t,e,i){return this.oi.Kr(e,i),V.resolve()}removeMatchingKeys(t,e,i){this.oi.Gr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const i=this.oi.Jr(e);return V.resolve(i)}containsKey(t,e){return V.resolve(this.oi.containsKey(e))}}/**
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
 */class Ey{constructor(t,e){this.ai={},this.overlays={},this.ui=new Na(0),this.ci=!1,this.ci=!0,this.li=new rx,this.referenceDelegate=t(this),this.hi=new lx(this),this.indexManager=new GI,this.remoteDocumentCache=(function(s){return new ax(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new HI(e),this.Ti=new ix(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sx,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ai[t.toKey()];return i||(i=new ox(e,this.referenceDelegate),this.ai[t.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,i){U("MemoryPersistence","Starting transaction:",t);const s=new ux(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return V.or(Object.values(this.ai).map((i=>()=>i.containsKey(t,e))))}}class ux extends BT{constructor(t){super(),this.currentSequenceNumber=t}}class vu{constructor(t){this.persistence=t,this.Ai=new _u,this.Ri=null}static Vi(t){return new vu(t)}get mi(){if(this.Ri)return this.Ri;throw W(60996)}addReference(t,e,i){return this.Ai.addReference(i,e),this.mi.delete(i.toString()),V.resolve()}removeReference(t,e,i){return this.Ai.removeReference(i,e),this.mi.add(i.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,(i=>{const s=z.fromPath(i);return this.fi(t,s).next((r=>{r||e.removeEntry(s,G.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((i=>{i?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return V.or([()=>V.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ma{constructor(t,e){this.persistence=t,this.gi=new Si((i=>zT(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=ZI(this,e)}static Vi(t,e){return new ma(t,e)}Ii(){}di(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}yr(t){let e=0;return this.gr(t,(i=>{e++})).next((()=>e))}gr(t,e){return V.forEach(this.gi,((i,s)=>this.Sr(t,i,s).next((r=>r?V.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(t,(o=>this.Sr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,G.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),V.resolve()}removeReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Lo(t.data.value)),e}Sr(t,e,i){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return V.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class bu{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Is=i,this.ds=s}static Es(t,e){let i=et(),s=et();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new bu(t,e.fromCache,i,s)}}/**
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
 */class hx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class dx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Vb()?8:$T(Zt())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ps(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ys(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new hx;return this.ws(t,e,o).next((a=>{if(r.result=a,this.Rs)return this.Ss(t,e,o,a.size)}))})).next((()=>r.result))}Ss(t,e,i,s){return i.documentReadCount<this.Vs?(Vi()<=tt.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Fi(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Vi()<=tt.DEBUG&&U("QueryEngine","Query:",Fi(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(Vi()<=tt.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Fi(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Fe(e))):V.resolve())}ps(t,e){if(vf(e))return V.resolve(null);let i=Fe(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=bl(e,null,"F"),i=Fe(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=et(...r);return this.gs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((c=>{const l=this.bs(e,a);return this.Ds(e,l,o,c.readTime)?this.ps(t,bl(e,null,"F")):this.vs(t,l,e,c)}))))})))))}ys(t,e,i,s){return vf(e)||s.isEqual(G.min())?V.resolve(null):this.gs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ds(e,o,i,s)?V.resolve(null):(Vi()<=tt.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fi(e)),this.vs(t,o,e,NT(s,rr)).next((a=>a)))}))}bs(t,e){let i=new Lt(ty(t));return e.forEach(((s,r)=>{$a(t,r)&&(i=i.add(r))})),i}Ds(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(t,e,i){return Vi()<=tt.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Fi(e)),this.gs.getDocumentsMatchingQuery(t,e,Bn.min(),i)}vs(t,e,i,s){return this.gs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const wu="LocalStore",fx=3e8;class px{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new wt(J),this.Ms=new Si((r=>du(r)),fu),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(i)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function gx(n,t,e,i){return new px(n,t,e,i)}async function Ty(n,t){const e=X(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Ns(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let c=et();for(const l of s){o.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of r){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return e.localDocuments.getDocuments(i,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function mx(n,t){const e=X(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.Os.newChangeBuffer({trackRemovals:!0});return(function(a,c,l,h){const d=l.batch,f=d.keys();let g=V.resolve();return f.forEach((y=>{g=g.next((()=>h.getEntry(c,y))).next((v=>{const _=l.docVersions.get(y);at(_!==null,48541),v.version.compareTo(_)<0&&(d.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),h.addEntry(v)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,d)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let c=et();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function Iy(n){const t=X(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function yx(n,t){const e=X(n),i=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const a=[];t.targetChanges.forEach(((h,d)=>{const f=s.get(d);if(!f)return;a.push(e.hi.removeMatchingKeys(r,h.removedDocuments,d).next((()=>e.hi.addMatchingKeys(r,h.addedDocuments,d))));let g=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?g=g.withResumeToken(jt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,i)),s=s.insert(d,g),(function(v,_,I){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=fx?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0})(f,g,h)&&a.push(e.hi.updateTargetData(r,g))}));let c=fn(),l=et();if(t.documentUpdates.forEach((h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))})),a.push(_x(r,o,t.documentUpdates).next((h=>{c=h.Ls,l=h.ks}))),!i.isEqual(G.min())){const h=e.hi.getLastRemoteSnapshotVersion(r).next((d=>e.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(h)}return V.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,c,l))).next((()=>c))})).then((r=>(e.Fs=s,r)))}function _x(n,t,e){let i=et(),s=et();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=fn();return e.forEach(((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):U(wu,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function vx(n,t){const e=X(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=lu),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function bx(n,t){const e=X(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.hi.getTargetData(i,t).next((r=>r?(s=r,V.resolve(s)):e.hi.allocateTargetId(i).next((o=>(s=new xn(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(i.targetId,i),e.Ms.set(t,i.targetId)),i}))}async function xl(n,t,e){const i=X(n),s=i.Fs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ls(o))throw o;U(wu,`Failed to update sequence numbers for target ${t}: ${o}`)}i.Fs=i.Fs.remove(t),i.Ms.delete(s.target)}function Mf(n,t,e){const i=X(n);let s=G.min(),r=et();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,h){const d=X(c),f=d.Ms.get(h);return f!==void 0?V.resolve(d.Fs.get(f)):d.hi.getTargetData(l,h)})(i,o,Fe(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{r=c}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:G.min(),e?r:et()))).next((a=>(wx(i,aI(t),a),{documents:a,qs:r})))))}function wx(n,t,e){let i=n.xs.get(t)||G.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(t,i)}class Df{constructor(){this.activeTargetIds=fI()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ex{constructor(){this.Fo=new Df,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,i){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Df,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Tx{xo(t){}shutdown(){}}/**
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
 */const Of="ConnectivityMonitor";class Nf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){U(Of,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){U(Of,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let po=null;function Al(){return po===null?po=(function(){return 268435456+Math.round(2147483648*Math.random())})():po++,"0x"+po.toString(16)}/**
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
 */const Fc="RestConnection",Ix={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xx{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===ua?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=Al(),a=this.Go(t,e.toUriEncodedString());U(Fc,`Sending RPC '${t}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,r);const{host:l}=new URL(a),h=rs(l);return this.jo(t,a,c,i,h).then((d=>(U(Fc,`Received RPC '${t}' ${o}: `,d),d)),(d=>{throw Fn(Fc,`RPC '${t}' ${o} failed with error: `,d,"url: ",a,"request:",i),d}))}Jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}zo(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+as})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Go(t,e){const i=Ix[t];return`${this.$o}/v1/${e}:${i}`}terminate(){}}/**
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
 */class Ax{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const Gt="WebChannelConnection";class Sx extends xx{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,i,s,r){const o=Al();return new Promise(((a,c)=>{const l=new Am;l.setWithCredentials(!0),l.listenOnce(Sm.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case No.NO_ERROR:const d=l.getResponseJson();U(Gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case No.TIMEOUT:U(Gt,`RPC '${t}' ${o} timed out`),c(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case No.HTTP_ERROR:const f=l.getStatus();if(U(Gt,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const v=(function(I){const C=I.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(C)>=0?C:N.UNKNOWN})(y.status);c(new $(v,y.message))}else c(new $(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new $(N.UNAVAILABLE,"Connection failed."));break;default:W(9055,{c_:t,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{U(Gt,`RPC '${t}' ${o} completed.`)}}));const h=JSON.stringify(s);U(Gt,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",h,i,15)}))}P_(t,e,i){const s=Al(),r=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=km(),a=Cm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const h=r.join("");U(Gt,`Creating RPC '${t}' stream ${s}: ${h}`,c);const d=o.createWebChannel(h,c);this.T_(d);let f=!1,g=!1;const y=new Ax({Ho:_=>{g?U(Gt,`Not sending because RPC '${t}' stream ${s} is closed:`,_):(f||(U(Gt,`Opening RPC '${t}' stream ${s} transport.`),d.open(),f=!0),U(Gt,`RPC '${t}' stream ${s} sending:`,_),d.send(_))},Yo:()=>d.close()}),v=(_,I,C)=>{_.listen(I,(R=>{try{C(R)}catch(O){setTimeout((()=>{throw O}),0)}}))};return v(d,Ms.EventType.OPEN,(()=>{g||(U(Gt,`RPC '${t}' stream ${s} transport opened.`),y.s_())})),v(d,Ms.EventType.CLOSE,(()=>{g||(g=!0,U(Gt,`RPC '${t}' stream ${s} transport closed`),y.__(),this.I_(d))})),v(d,Ms.EventType.ERROR,(_=>{g||(g=!0,Fn(Gt,`RPC '${t}' stream ${s} transport errored. Name:`,_.name,"Message:",_.message),y.__(new $(N.UNAVAILABLE,"The operation could not be completed")))})),v(d,Ms.EventType.MESSAGE,(_=>{var I;if(!g){const C=_.data[0];at(!!C,16349);const R=C,O=(R==null?void 0:R.error)||((I=R[0])===null||I===void 0?void 0:I.error);if(O){U(Gt,`RPC '${t}' stream ${s} received error:`,O);const D=O.status;let L=(function(E){const x=Rt[E];if(x!==void 0)return hy(x)})(D),T=O.message;L===void 0&&(L=N.INTERNAL,T="Unknown error status: "+D+" with message "+O.message),g=!0,y.__(new $(L,T)),d.close()}else U(Gt,`RPC '${t}' stream ${s} received:`,C),y.a_(C)}})),v(a,Pm.STAT_EVENT,(_=>{_.stat===fl.PROXY?U(Gt,`RPC '${t}' stream ${s} detected buffering proxy`):_.stat===fl.NOPROXY&&U(Gt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{y.o_()}),0),y}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Bc(){return typeof document<"u"?document:null}/**
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
 */function Ha(n){return new RI(n,!0)}/**
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
 */class xy{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Fi=t,this.timerId=e,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-i);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Lf="PersistentStream";class Ay{constructor(t,e,i,s,r,o,a,c){this.Fi=t,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new xy(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(dn(e.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===e&&this.W_(i,s)}),(i=>{t((()=>{const s=new $(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(t,e){const i=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return U(Lf,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(U(Lf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Px extends Ay{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=OI(this.serializer,t),i=(function(r){if(!("targetChange"in r))return G.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Be(o.readTime):G.min()})(t);return this.listener.J_(e,i)}H_(t){const e={};e.database=Il(this.serializer),e.addTarget=(function(r,o){let a;const c=o.target;if(a=_l(c)?{documents:VI(r,c)}:{query:FI(r,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=py(r,o.resumeToken);const l=wl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=ga(r,o.snapshotVersion.toTimestamp());const l=wl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,t);const i=$I(this.serializer,t);i&&(e.labels=i),this.k_(e)}Y_(t){const e={};e.database=Il(this.serializer),e.removeTarget=t,this.k_(e)}}class Cx extends Ay{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return at(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){at(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=LI(t.writeResults,t.commitTime),i=Be(t.commitTime);return this.listener.ta(i,e)}na(){const t={};t.database=Il(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>NI(this.serializer,i)))};this.k_(e)}}/**
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
 */class kx{}class Rx extends kx{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,El(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(N.UNKNOWN,r.toString())}))}Jo(t,e,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(t,El(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(N.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Mx{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(dn(e),this._a=!1):U("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ii="RemoteStore";class Dx{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((o=>{i.enqueueAndForget((async()=>{Pi(this)&&(U(Ii,"Restarting streams for network reachability change."),await(async function(c){const l=X(c);l.Ia.add(4),await kr(l),l.Aa.set("Unknown"),l.Ia.delete(4),await Wa(l)})(this))}))})),this.Aa=new Mx(i,s)}}async function Wa(n){if(Pi(n))for(const t of n.da)await t(!0)}async function kr(n){for(const t of n.da)await t(!1)}function Sy(n,t){const e=X(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),xu(e)?Iu(e):hs(e).x_()&&Tu(e,t))}function Eu(n,t){const e=X(n),i=hs(e);e.Ta.delete(t),i.x_()&&Py(e,t),e.Ta.size===0&&(i.x_()?i.B_():Pi(e)&&e.Aa.set("Unknown"))}function Tu(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}hs(n).H_(t)}function Py(n,t){n.Ra.$e(t),hs(n).Y_(t)}function Iu(n){n.Ra=new SI({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.Aa.aa()}function xu(n){return Pi(n)&&!hs(n).M_()&&n.Ta.size>0}function Pi(n){return X(n).Ia.size===0}function Cy(n){n.Ra=void 0}async function Ox(n){n.Aa.set("Online")}async function Nx(n){n.Ta.forEach(((t,e)=>{Tu(n,t)}))}async function Lx(n,t){Cy(n),xu(n)?(n.Aa.la(t),Iu(n)):n.Aa.set("Unknown")}async function Vx(n,t,e){if(n.Aa.set("Online"),t instanceof fy&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,t)}catch(i){U(Ii,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await ya(n,i)}else if(t instanceof Bo?n.Ra.Ye(t):t instanceof dy?n.Ra.it(t):n.Ra.et(t),!e.isEqual(G.min()))try{const i=await Iy(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.Ra.Pt(o);return a.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.Ta.get(l);h&&r.Ta.set(l,h.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,l)=>{const h=r.Ta.get(c);if(!h)return;r.Ta.set(c,h.withResumeToken(jt.EMPTY_BYTE_STRING,h.snapshotVersion)),Py(r,c);const d=new xn(h.target,c,l,h.sequenceNumber);Tu(r,d)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){U(Ii,"Failed to raise snapshot:",i),await ya(n,i)}}async function ya(n,t,e){if(!ls(t))throw t;n.Ia.add(1),await kr(n),n.Aa.set("Offline"),e||(e=()=>Iy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{U(Ii,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Wa(n)}))}function ky(n,t){return t().catch((e=>ya(n,e,t)))}async function Ga(n){const t=X(n),e=jn(t);let i=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:lu;for(;Fx(t);)try{const s=await vx(t.localStore,i);if(s===null){t.Pa.length===0&&e.B_();break}i=s.batchId,Bx(t,s)}catch(s){await ya(t,s)}Ry(t)&&My(t)}function Fx(n){return Pi(n)&&n.Pa.length<10}function Bx(n,t){n.Pa.push(t);const e=jn(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function Ry(n){return Pi(n)&&!jn(n).M_()&&n.Pa.length>0}function My(n){jn(n).start()}async function $x(n){jn(n).na()}async function Ux(n){const t=jn(n);for(const e of n.Pa)t.X_(e.mutations)}async function zx(n,t,e){const i=n.Pa.shift(),s=gu.from(i,t,e);await ky(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ga(n)}async function jx(n,t){t&&jn(n).Z_&&await(async function(i,s){if((function(o){return xI(o)&&o!==N.ABORTED})(s.code)){const r=i.Pa.shift();jn(i).N_(),await ky(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Ga(i)}})(n,t),Ry(n)&&My(n)}async function Vf(n,t){const e=X(n);e.asyncQueue.verifyOperationInProgress(),U(Ii,"RemoteStore received new credentials");const i=Pi(e);e.Ia.add(3),await kr(e),i&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Wa(e)}async function qx(n,t){const e=X(n);t?(e.Ia.delete(2),await Wa(e)):t||(e.Ia.add(2),await kr(e),e.Aa.set("Unknown"))}function hs(n){return n.Va||(n.Va=(function(e,i,s){const r=X(e);return r.ia(),new Px(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Ox.bind(null,n),e_:Nx.bind(null,n),n_:Lx.bind(null,n),J_:Vx.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),xu(n)?Iu(n):n.Aa.set("Unknown")):(await n.Va.stop(),Cy(n))}))),n.Va}function jn(n){return n.ma||(n.ma=(function(e,i,s){const r=X(e);return r.ia(),new Cx(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:$x.bind(null,n),n_:jx.bind(null,n),ea:Ux.bind(null,n),ta:zx.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Ga(n)):(await n.ma.stop(),n.Pa.length>0&&(U(Ii,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Au{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new Au(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(n,t){if(dn("AsyncQueue",`${t}: ${n}`),ls(n))return new $(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Wi{static emptySet(t){return new Wi(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||z.comparator(e.key,i.key):(e,i)=>z.comparator(e.key,i.key),this.keyedMap=Ds(),this.sortedSet=new wt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Wi)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new Wi;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
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
 */class Ff{constructor(){this.fa=new wt(z.comparator)}track(t){const e=t.doc.key,i=this.fa.get(e);i?t.type!==0&&i.type===3?this.fa=this.fa.insert(e,t):t.type===3&&i.type!==1?this.fa=this.fa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.fa=this.fa.remove(e):t.type===1&&i.type===2?this.fa=this.fa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):W(63341,{At:t,ga:i}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,i)=>{t.push(i)})),t}}class es{constructor(t,e,i,s,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new es(t,e,Wi.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ba(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class Hx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Wx{constructor(){this.queries=Bf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,i){const s=X(e),r=s.queries;s.queries=Bf(),r.forEach(((o,a)=>{for(const c of a.wa)c.onError(i)}))})(this,new $(N.ABORTED,"Firestore shutting down"))}}function Bf(){return new Si((n=>Zm(n)),Ba)}async function Pu(n,t){const e=X(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.ba()&&(i=2):(r=new Hx,i=t.ba()?0:1);try{switch(i){case 0:r.ya=await e.onListen(s,!0);break;case 1:r.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Su(o,`Initialization of query '${Fi(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.wa.push(t),t.va(e.onlineState),r.ya&&t.Ca(r.ya)&&ku(e)}async function Cu(n,t){const e=X(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.wa.indexOf(t);o>=0&&(r.wa.splice(o,1),r.wa.length===0?s=t.ba()?0:1:!r.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Gx(n,t){const e=X(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.wa)a.Ca(s)&&(i=!0);o.ya=s}}i&&ku(e)}function Kx(n,t,e){const i=X(n),s=i.queries.get(t);if(s)for(const r of s.wa)r.onError(e);i.queries.delete(t)}function ku(n){n.Da.forEach((t=>{t.next()}))}var Sl,$f;($f=Sl||(Sl={})).Fa="default",$f.Cache="cache";class Ru{constructor(t,e,i){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new es(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const i=e!=="Offline";return(!this.options.ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=es.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Sl.Cache}}/**
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
 */class Dy{constructor(t){this.key=t}}class Oy{constructor(t){this.key=t}}class Yx{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=et(),this.mutatedKeys=et(),this.Xa=ty(t),this.eu=new Wi(this.Xa)}get tu(){return this.Ha}nu(t,e){const i=e?e.ru:new Ff,s=e?e.eu:this.eu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((h,d)=>{const f=s.get(h),g=$a(this.query,d)?d:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;f&&g?f.data.isEqual(g.data)?y!==v&&(i.track({type:3,doc:g}),_=!0):this.iu(f,g)||(i.track({type:2,doc:g}),_=!0,(c&&this.Xa(g,c)>0||l&&this.Xa(g,l)<0)&&(a=!0)):!f&&g?(i.track({type:0,doc:g}),_=!0):f&&!g&&(i.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),i.track({type:1,doc:h})}return{eu:o,ru:i,Ds:a,mutatedKeys:r}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const o=t.ru.pa();o.sort(((h,d)=>(function(g,y){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{At:_})}};return v(g)-v(y)})(h.type,d.type)||this.Xa(h.doc,d.doc))),this.su(i),s=s!=null&&s;const a=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new es(this.query,t.eu,r,o,t.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ff,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=et(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const e=[];return t.forEach((i=>{this.Za.has(i)||e.push(new Oy(i))})),this.Za.forEach((i=>{t.has(i)||e.push(new Dy(i))})),e}uu(t){this.Ha=t.qs,this.Za=et();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return es.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Mu="SyncEngine";class Xx{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Qx{constructor(t){this.key=t,this.lu=!1}}class Jx{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Si((a=>Zm(a)),Ba),this.Tu=new Map,this.Iu=new Set,this.du=new wt(z.comparator),this.Eu=new Map,this.Au=new _u,this.Ru={},this.Vu=new Map,this.mu=ts.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Zx(n,t,e=!0){const i=$y(n);let s;const r=i.Pu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await Ny(i,t,e,!0),s}async function tA(n,t){const e=$y(n);await Ny(e,t,!0,!1)}async function Ny(n,t,e,i){const s=await bx(n.localStore,Fe(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await eA(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Sy(n.remoteStore,s),a}async function eA(n,t,e,i,s){n.gu=(d,f,g)=>(async function(v,_,I,C){let R=_.view.nu(I);R.Ds&&(R=await Mf(v.localStore,_.query,!1).then((({documents:T})=>_.view.nu(T,R))));const O=C&&C.targetChanges.get(_.targetId),D=C&&C.targetMismatches.get(_.targetId)!=null,L=_.view.applyChanges(R,v.isPrimaryClient,O,D);return zf(v,_.targetId,L._u),L.snapshot})(n,d,f,g);const r=await Mf(n.localStore,t,!0),o=new Yx(t,r.qs),a=o.nu(r.documents),c=Cr.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);zf(n,e,l._u);const h=new Xx(t,e,o);return n.Pu.set(t,h),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),l.snapshot}async function nA(n,t,e){const i=X(n),s=i.Pu.get(t),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((o=>!Ba(o,t)))),void i.Pu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await xl(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Eu(i.remoteStore,s.targetId),Pl(i,s.targetId)})).catch(cs)):(Pl(i,s.targetId),await xl(i.localStore,s.targetId,!0))}async function iA(n,t){const e=X(n),i=e.Pu.get(t),s=e.Tu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Eu(e.remoteStore,i.targetId))}async function sA(n,t,e){const i=hA(n);try{const s=await(function(o,a){const c=X(o),l=mt.now(),h=a.reduce(((g,y)=>g.add(y.key)),et());let d,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let y=fn(),v=et();return c.Os.getEntries(g,h).next((_=>{y=_,y.forEach(((I,C)=>{C.isValidDocument()||(v=v.add(I))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,y))).next((_=>{d=_;const I=[];for(const C of a){const R=bI(C,d.get(C.key).overlayedDocument);R!=null&&I.push(new Xn(C.key,R,Hm(R.value.mapValue),re.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,I,a)})).next((_=>{f=_;const I=_.applyToLocalDocumentSet(d,v);return c.documentOverlayCache.saveOverlays(g,_.batchId,I)}))})).then((()=>({batchId:f.batchId,changes:ny(d)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new wt(J)),l=l.insert(a,c),o.Ru[o.currentUser.toKey()]=l})(i,s.batchId,e),await Rr(i,s.changes),await Ga(i.remoteStore)}catch(s){const r=Su(s,"Failed to persist write");e.reject(r)}}async function Ly(n,t){const e=X(n);try{const i=await yx(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Eu.get(r);o&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?at(o.lu,14607):s.removedDocuments.size>0&&(at(o.lu,42227),o.lu=!1))})),await Rr(e,i,t)}catch(i){await cs(i)}}function Uf(n,t,e){const i=X(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Pu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const c=X(o);c.onlineState=a;let l=!1;c.queries.forEach(((h,d)=>{for(const f of d.wa)f.va(a)&&(l=!0)})),l&&ku(c)})(i.eventManager,t),s.length&&i.hu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function rA(n,t,e){const i=X(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),r=s&&s.key;if(r){let o=new wt(z.comparator);o=o.insert(r,Qt.newNoDocument(r,G.min()));const a=et().add(r),c=new qa(G.min(),new Map,new wt(J),o,a);await Ly(i,c),i.du=i.du.remove(r),i.Eu.delete(t),Du(i)}else await xl(i.localStore,t,!1).then((()=>Pl(i,t,e))).catch(cs)}async function oA(n,t){const e=X(n),i=t.batch.batchId;try{const s=await mx(e.localStore,t);Fy(e,i,null),Vy(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Rr(e,s)}catch(s){await cs(s)}}async function aA(n,t,e){const i=X(n);try{const s=await(function(o,a){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let h;return c.mutationQueue.lookupMutationBatch(l,a).next((d=>(at(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(l,d)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,h,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h))).next((()=>c.localDocuments.getDocuments(l,h)))}))})(i.localStore,t);Fy(i,t,e),Vy(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Rr(i,s)}catch(s){await cs(s)}}function Vy(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function Fy(n,t,e){const i=X(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Ru[i.currentUser.toKey()]=s}}function Pl(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Tu.get(t))n.Pu.delete(i),e&&n.hu.pu(i,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((i=>{n.Au.containsKey(i)||By(n,i)}))}function By(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Eu(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Du(n))}function zf(n,t,e){for(const i of e)i instanceof Dy?(n.Au.addReference(i.key,t),cA(n,i)):i instanceof Oy?(U(Mu,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,t),n.Au.containsKey(i.key)||By(n,i.key)):W(19791,{yu:i})}function cA(n,t){const e=t.key,i=e.path.canonicalString();n.du.get(e)||n.Iu.has(i)||(U(Mu,"New document in limbo: "+e),n.Iu.add(i),Du(n))}function Du(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new z(ft.fromString(t)),i=n.mu.next();n.Eu.set(i,new Qx(e)),n.du=n.du.insert(e,i),Sy(n.remoteStore,new xn(Fe(Fa(e.path)),i,"TargetPurposeLimboResolution",Na.ue))}}async function Rr(n,t,e){const i=X(n),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach(((a,c)=>{o.push(i.gu(c,t,e).then((l=>{var h;if((l||e)&&i.isPrimaryClient){const d=l?!l.fromCache:(h=e==null?void 0:e.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;i.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(l){s.push(l);const d=bu.Es(c.targetId,l);r.push(d)}})))})),await Promise.all(o),i.hu.J_(s),await(async function(c,l){const h=X(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>V.forEach(l,(f=>V.forEach(f.Is,(g=>h.persistence.referenceDelegate.addReference(d,f.targetId,g))).next((()=>V.forEach(f.ds,(g=>h.persistence.referenceDelegate.removeReference(d,f.targetId,g)))))))))}catch(d){if(!ls(d))throw d;U(wu,"Failed to update sequence numbers: "+d)}for(const d of l){const f=d.targetId;if(!d.fromCache){const g=h.Fs.get(f),y=g.snapshotVersion,v=g.withLastLimboFreeSnapshotVersion(y);h.Fs=h.Fs.insert(f,v)}}})(i.localStore,r))}async function lA(n,t){const e=X(n);if(!e.currentUser.isEqual(t)){U(Mu,"User change. New user:",t.toKey());const i=await Ty(e.localStore,t);e.currentUser=t,(function(r,o){r.Vu.forEach((a=>{a.forEach((c=>{c.reject(new $(N.CANCELLED,o))}))})),r.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Rr(e,i.Bs)}}function uA(n,t){const e=X(n),i=e.Eu.get(t);if(i&&i.lu)return et().add(i.key);{let s=et();const r=e.Tu.get(t);if(!r)return s;for(const o of r){const a=e.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function $y(n){const t=X(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ly.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rA.bind(null,t),t.hu.J_=Gx.bind(null,t.eventManager),t.hu.pu=Kx.bind(null,t.eventManager),t}function hA(n){const t=X(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=oA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=aA.bind(null,t),t}class _a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ha(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return gx(this.persistence,new dx,t.initialUser,this.serializer)}Du(t){return new Ey(vu.Vi,this.serializer)}bu(t){return new Ex}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_a.provider={build:()=>new _a};class dA extends _a{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){at(this.persistence.referenceDelegate instanceof ma,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new QI(i,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?ae.withCacheSize(this.cacheSizeBytes):ae.DEFAULT;return new Ey((i=>ma.Vi(i,e)),this.serializer)}}class Cl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Uf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lA.bind(null,this.syncEngine),await qx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Wx})()}createDatastore(t){const e=Ha(t.databaseInfo.databaseId),i=(function(r){return new Sx(r)})(t.databaseInfo);return(function(r,o,a,c){return new Rx(r,o,a,c)})(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new Dx(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>Uf(this.syncEngine,e,0)),(function(){return Nf.C()?new Nf:new Tx})())}createSyncEngine(t,e){return(function(s,r,o,a,c,l,h){const d=new Jx(s,r,o,a,c,l);return h&&(d.fu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=X(s);U(Ii,"RemoteStore shutting down."),r.Ia.add(5),await kr(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Cl.provider={build:()=>new Cl};/**
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
 */class Ou{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):dn("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const qn="FirestoreClient";class fA{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=Yt.UNAUTHENTICATED,this.clientId=cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{U(qn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(U(qn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Su(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function $c(n,t){n.asyncQueue.verifyOperationInProgress(),U(qn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Ty(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>{Fn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{U("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Fn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function jf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await pA(n);U(qn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>Vf(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Vf(t.remoteStore,s))),n._onlineComponents=t}async function pA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(qn,"Using user provided OfflineComponentProvider");try{await $c(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Fn("Error using user provided cache. Falling back to memory cache: "+e),await $c(n,new _a)}}else U(qn,"Using default OfflineComponentProvider"),await $c(n,new dA(void 0));return n._offlineComponents}async function Uy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(qn,"Using user provided OnlineComponentProvider"),await jf(n,n._uninitializedComponentsProvider._online)):(U(qn,"Using default OnlineComponentProvider"),await jf(n,new Cl))),n._onlineComponents}function gA(n){return Uy(n).then((t=>t.syncEngine))}async function va(n){const t=await Uy(n),e=t.eventManager;return e.onListen=Zx.bind(null,t.syncEngine),e.onUnlisten=nA.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=tA.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=iA.bind(null,t.syncEngine),e}function mA(n,t,e={}){const i=new cn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const h=new Ou({next:f=>{h.Ou(),o.enqueueAndForget((()=>Cu(r,d)));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),d=new Ru(Fa(a.path),h,{includeMetadataChanges:!0,ka:!0});return Pu(r,d)})(await va(n),n.asyncQueue,t,e,i))),i.promise}function yA(n,t,e={}){const i=new cn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const h=new Ou({next:f=>{h.Ou(),o.enqueueAndForget((()=>Cu(r,d))),f.fromCache&&c.source==="server"?l.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),d=new Ru(a,h,{includeMetadataChanges:!0,ka:!0});return Pu(r,d)})(await va(n),n.asyncQueue,t,e,i))),i.promise}/**
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
 */function zy(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const qf=new Map;/**
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
 */const jy="firestore.googleapis.com",Hf=!0;class Wf{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jy,this.ssl=Hf}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Hf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=wy;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<YI)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}OT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zy((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ka{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new xT;switch(i.type){case"firstParty":return new CT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=qf.get(e);i&&(U("ComponentProvider","Removing Datastore"),qf.delete(e),i.terminate())})(this),Promise.resolve()}}function _A(n,t,e,i={}){var s;n=se(n,Ka);const r=rs(t),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;r&&(Og(`https://${c}`),Ng("Firestore",!0)),o.host!==jy&&o.host!==c&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!_i(l,a)&&(n._setSettings(l),i.mockUserToken)){let h,d;if(typeof i.mockUserToken=="string")h=i.mockUserToken,d=Yt.MOCK_USER;else{h=Pb(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Yt(f)}n._authCredentials=new AT(new Mm(h,d))}}/**
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
 */class Qn{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Qn(this.firestore,t,this._query)}}class It{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(Sr(e,It._jsonSchema))return new It(t,i||null,new z(ft.fromString(e.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:Dt("string",It._jsonSchemaVersion),referencePath:Dt("string")};class Nn extends Qn{constructor(t,e,i){super(t,e,Fa(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new z(t))}withConverter(t){return new Nn(this.firestore,t,this._path)}}function ln(n,t,...e){if(n=_t(n),Om("collection","path",t),n instanceof Ka){const i=ft.fromString(t,...e);return rf(i),new Nn(n,null,i)}{if(!(n instanceof It||n instanceof Nn))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ft.fromString(t,...e));return rf(i),new Nn(n.firestore,null,i)}}function _e(n,t,...e){if(n=_t(n),arguments.length===1&&(t=cu.newId()),Om("doc","path",t),n instanceof Ka){const i=ft.fromString(t,...e);return sf(i),new It(n,null,new z(i))}{if(!(n instanceof It||n instanceof Nn))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ft.fromString(t,...e));return sf(i),new It(n.firestore,n instanceof Nn?n.converter:null,new z(i))}}/**
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
 */const Gf="AsyncQueue";class Kf{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new xy(this,"async_queue_retry"),this.oc=()=>{const i=Bc();i&&U(Gf,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=t;const e=Bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Bc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new cn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!ls(t))throw t;U(Gf,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((i=>{throw this.tc=i,this.nc=!1,dn("INTERNAL UNHANDLED ERROR: ",Yf(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=e,e}enqueueAfterDelay(t,e,i){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Au.createAndSchedule(this,t,e,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&W(47125,{hc:Yf(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Yf(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
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
 */function Xf(n){return(function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class qe extends Ka{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new Kf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Kf(t),this._firestoreClient=void 0,await t}}}function vA(n,t){const e=typeof n=="object"?n:Bg(),i=typeof n=="string"?n:ua,s=Ql(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ab("firestore");r&&_A(s,...r)}return s}function Mr(n){if(n._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bA(n),n._firestoreClient}function bA(n){var t,e,i;const s=n._freezeSettings(),r=(function(a,c,l,h){return new HT(a,c,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,zy(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new fA(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ye(jt.fromBase64String(t))}catch(e){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ye(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Sr(t,ye._jsonSchema))return ye.fromBase64String(t.bytes)}}ye._jsonSchemaVersion="firestore/bytes/1.0",ye._jsonSchema={type:Dt("string",ye._jsonSchemaVersion),bytes:Dt("string")};/**
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
 */class Dr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Nu{constructor(t){this._methodName=t}}/**
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
 */class $e{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(t){if(Sr(t,$e._jsonSchema))return new $e(t.latitude,t.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:Dt("string",$e._jsonSchemaVersion),latitude:Dt("number"),longitude:Dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ue{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Sr(t,Ue._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ue(t.vectorValues);throw new $(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ue._jsonSchemaVersion="firestore/vectorValue/1.0",Ue._jsonSchema={type:Dt("string",Ue._jsonSchemaVersion),vectorValues:Dt("object")};/**
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
 */const wA=/^__.*__$/;class EA{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Xn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pr(t,this.data,e,this.fieldTransforms)}}class qy{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new Xn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ec:n})}}class Lu{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Lu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.fc(t),s}gc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ba(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Hy(this.Ec)&&wA.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class TA{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Ha(t)}Dc(t,e,i,s=!1){return new Lu({Ec:t,methodName:e,bc:i,path:zt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Or(n){const t=n._freezeSettings(),e=Ha(n._databaseId);return new TA(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Vu(n,t,e,i,s,r={}){const o=n.Dc(r.merge||r.mergeFields?2:0,t,e,s);Fu("Data must be an object, but it was:",o,i);const a=Ky(i,o);let c,l;if(r.merge)c=new fe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const f=kl(t,d,e);if(!o.contains(f))throw new $(N.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Xy(h,f)||h.push(f)}c=new fe(h),l=o.fieldTransforms.filter((d=>c.covers(d.field)))}else c=null,l=o.fieldTransforms;return new EA(new ce(a),c,l)}class Ya extends Nu{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ya}}function Wy(n,t,e,i){const s=n.Dc(1,t,e);Fu("Data must be an object, but it was:",s,i);const r=[],o=ce.empty();Yn(i,((c,l)=>{const h=Bu(t,c,e);l=_t(l);const d=s.gc(h);if(l instanceof Ya)r.push(h);else{const f=Nr(l,d);f!=null&&(r.push(h),o.set(h,f))}}));const a=new fe(r);return new qy(o,a,s.fieldTransforms)}function Gy(n,t,e,i,s,r){const o=n.Dc(1,t,e),a=[kl(t,i,e)],c=[s];if(r.length%2!=0)throw new $(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(kl(t,r[f])),c.push(r[f+1]);const l=[],h=ce.empty();for(let f=a.length-1;f>=0;--f)if(!Xy(l,a[f])){const g=a[f];let y=c[f];y=_t(y);const v=o.gc(g);if(y instanceof Ya)l.push(g);else{const _=Nr(y,v);_!=null&&(l.push(g),h.set(g,_))}}const d=new fe(l);return new qy(h,d,o.fieldTransforms)}function IA(n,t,e,i=!1){return Nr(e,n.Dc(i?4:3,t))}function Nr(n,t){if(Yy(n=_t(n)))return Fu("Unsupported field value:",t,n),Ky(n,t);if(n instanceof Nu)return(function(i,s){if(!Hy(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let c=Nr(a,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=_t(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return pI(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=mt.fromDate(i);return{timestampValue:ga(s.serializer,r)}}if(i instanceof mt){const r=new mt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ga(s.serializer,r)}}if(i instanceof $e)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ye)return{bytesValue:py(s.serializer,i._byteString)};if(i instanceof It){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:yu(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ue)return(function(o,a){return{mapValue:{fields:{[jm]:{stringValue:qm},[ha]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.wc("VectorValues must only contain numeric values.");return pu(a.serializer,l)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${Oa(i)}`)})(n,t)}function Ky(n,t){const e={};return Vm(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yn(n,((i,s)=>{const r=Nr(s,t.Vc(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function Yy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof $e||n instanceof ye||n instanceof It||n instanceof Nu||n instanceof Ue)}function Fu(n,t,e){if(!Yy(e)||!Nm(e)){const i=Oa(e);throw i==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+i)}}function kl(n,t,e){if((t=_t(t))instanceof Dr)return t._internalPath;if(typeof t=="string")return Bu(n,t);throw ba("Field path arguments must be of type string or ",n,!1,void 0,e)}const xA=new RegExp("[~\\*/\\[\\]]");function Bu(n,t,e){if(t.search(xA)>=0)throw ba(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Dr(...t.split("."))._internalPath}catch{throw ba(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ba(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new $(N.INVALID_ARGUMENT,a+n+c)}function Xy(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class Qy{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new AA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($u("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class AA extends Qy{data(){return super.data()}}function $u(n,t){return typeof t=="string"?Bu(n,t):t instanceof Dr?t._internalPath:t._delegate._internalPath}/**
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
 */function Jy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class Zy extends Uu{}function zu(n,t,...e){let i=[];t instanceof Uu&&i.push(t),i=i.concat(e),(function(r){const o=r.filter((c=>c instanceof qu)).length,a=r.filter((c=>c instanceof ju)).length;if(o>1||o>0&&a>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class ju extends Zy{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new ju(t,e,i)}_apply(t){const e=this._parse(t);return t_(t._query,e),new Qn(t.firestore,t.converter,vl(t._query,e))}_parse(t){const e=Or(t.firestore);return(function(r,o,a,c,l,h,d){let f;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Jf(d,h);const y=[];for(const v of d)y.push(Qf(c,r,v));f={arrayValue:{values:y}}}else f=Qf(c,r,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Jf(d,h),f=IA(a,o,d,h==="in"||h==="not-in");return Mt.create(l,h,f)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class qu extends Uu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qu(t,e)}_parse(t){const e=this._queryConstraints.map((i=>i._parse(t))).filter((i=>i.getFilters().length>0));return e.length===1?e[0]:Pe.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,r){let o=s;const a=r.getFlattenedFilters();for(const c of a)t_(o,c),o=vl(o,c)})(t._query,e),new Qn(t.firestore,t.converter,vl(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hu extends Zy{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Hu(t,e)}_apply(t){const e=(function(s,r,o){if(s.startAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lr(r,o)})(t._query,this._field,this._direction);return new Qn(t.firestore,t.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new us(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Wu(n,t="asc"){const e=t,i=$u("orderBy",n);return Hu._create(i,e)}function Qf(n,t,e){if(typeof(e=_t(e))=="string"){if(e==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jm(t)&&e.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(ft.fromString(e));if(!z.isDocumentKey(i))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ff(n,new z(i))}if(e instanceof It)return ff(n,e._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oa(e)}.`)}function Jf(n,t){if(!Array.isArray(n)||n.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function t_(n,t){const e=(function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class SA{convertValue(t,e="none"){switch(zn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return At(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Un(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw W(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Yn(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var e,i,s;const r=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[ha].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((o=>At(o.doubleValue)));return new Ue(r)}convertGeoPoint(t){return new $e(At(t.latitude),At(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Va(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(or(t));default:return null}}convertTimestamp(t){const e=$n(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=ft.fromString(t);at(by(i),9688,{name:t});const s=new ar(i.get(1),i.get(3)),r=new z(i.popFirst(5));return s.isEqual(e)||dn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */function Gu(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Ns{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fi extends Qy{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field($u("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=fi._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}fi._jsonSchemaVersion="firestore/documentSnapshot/1.0",fi._jsonSchema={type:Dt("string",fi._jsonSchemaVersion),bundleSource:Dt("string","DocumentSnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class $o extends fi{data(t={}){return super.data(t)}}class pi{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ns(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new $o(this._firestore,this._userDataWriter,i.key,i,new Ns(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const c=new $o(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ns(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const c=new $o(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ns(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,h=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:PA(a.type),doc:c,oldIndex:l,newIndex:h}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=pi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function PA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
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
 */function CA(n){n=se(n,It);const t=se(n.firestore,qe);return mA(Mr(t),n._key).then((e=>s_(t,n,e)))}pi._jsonSchemaVersion="firestore/querySnapshot/1.0",pi._jsonSchema={type:Dt("string",pi._jsonSchemaVersion),bundleSource:Dt("string","QuerySnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class Ku extends SA{constructor(t){super(),this.firestore=t}convertBytes(t){return new ye(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Ys(n){n=se(n,Qn);const t=se(n.firestore,qe),e=Mr(t),i=new Ku(t);return Jy(n._query),yA(e,n._query).then((s=>new pi(t,i,n,s)))}function e_(n,t,e){n=se(n,It);const i=se(n.firestore,qe),s=Gu(n.converter,t,e);return Lr(i,[Vu(Or(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,re.none())])}function Xa(n,t,e,...i){n=se(n,It);const s=se(n.firestore,qe),r=Or(s);let o;return o=typeof(t=_t(t))=="string"||t instanceof Dr?Gy(r,"updateDoc",n._key,t,e,i):Wy(r,"updateDoc",n._key,t),Lr(s,[o.toMutation(n._key,re.exists(!0))])}function Yu(n){return Lr(se(n.firestore,qe),[new ja(n._key,re.none())])}function n_(n,t){const e=se(n.firestore,qe),i=_e(n),s=Gu(n.converter,t);return Lr(e,[Vu(Or(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,re.exists(!1))]).then((()=>i))}function i_(n,...t){var e,i,s;n=_t(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Xf(t[o])||(r=t[o++]);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Xf(t[o])){const d=t[o];t[o]=(e=d.next)===null||e===void 0?void 0:e.bind(d),t[o+1]=(i=d.error)===null||i===void 0?void 0:i.bind(d),t[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let c,l,h;if(n instanceof It)l=se(n.firestore,qe),h=Fa(n._key.path),c={next:d=>{t[o]&&t[o](s_(l,n,d))},error:t[o+1],complete:t[o+2]};else{const d=se(n,Qn);l=se(d.firestore,qe),h=d._query;const f=new Ku(l);c={next:g=>{t[o]&&t[o](new pi(l,f,d,g))},error:t[o+1],complete:t[o+2]},Jy(n._query)}return(function(f,g,y,v){const _=new Ou(v),I=new Ru(g,_,y);return f.asyncQueue.enqueueAndForget((async()=>Pu(await va(f),I))),()=>{_.Ou(),f.asyncQueue.enqueueAndForget((async()=>Cu(await va(f),I)))}})(Mr(l),h,a,c)}function Lr(n,t){return(function(i,s){const r=new cn;return i.asyncQueue.enqueueAndForget((async()=>sA(await gA(i),s,r))),r.promise})(Mr(n),t)}function s_(n,t,e){const i=e.docs.get(t._key),s=new Ku(n);return new fi(n,s,t._key,i,new Ns(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class kA{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Or(t)}set(t,e,i){this._verifyNotCommitted();const s=Uc(t,this._firestore),r=Gu(s.converter,e,i),o=Vu(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,re.none())),this}update(t,e,i,...s){this._verifyNotCommitted();const r=Uc(t,this._firestore);let o;return o=typeof(e=_t(e))=="string"||e instanceof Dr?Gy(this._dataReader,"WriteBatch.update",r._key,e,i,s):Wy(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(o.toMutation(r._key,re.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Uc(t,this._firestore);return this._mutations=this._mutations.concat(new ja(e._key,re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Uc(n,t){if((n=_t(n)).firestore!==t)throw new $(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function RA(n){return Mr(n=se(n,qe)),new kA(n,(t=>Lr(n,t)))}(function(t,e=!0){(function(s){as=s})(os),Xi(new vi("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new qe(new ST(i.getProvider("auth-internal")),new kT(o,i.getProvider("app-check-internal")),(function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(l.options.projectId,h)})(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),Dn(Jd,Zd,t),Dn(Jd,Zd,"esm2017")})();const MA={apiKey:"AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",authDomain:"money-control-e6af5.firebaseapp.com",databaseURL:"https://money-control-e6af5-default-rtdb.firebaseio.com",projectId:"money-control-e6af5",storageBucket:"money-control-e6af5.firebasestorage.app",messagingSenderId:"490577558965",appId:"1:490577558965:web:09275a065a09844f1eadfc",measurementId:"G-JTLBM89W1W"},r_=Fg(MA),Jn=wT(r_),Pt=vA(r_);async function DA(n,t){await e_(_e(Pt,"users",n),{name:t.name,email:t.email,createdAt:t.createdAt||new Date().toISOString(),settings:{currency:"INR",theme:"light",notifications:!0,budgetAlerts:!0,lowBalanceAlert:!0,lowBalanceThreshold:500,allowNegativeBalance:!1}})}async function Qa(n){const t=await CA(_e(Pt,"users",n));return t.exists()?{id:t.id,...t.data()}:null}async function o_(n,t){await Xa(_e(Pt,"users",n),{initialBalance:Number(t)}),await l_(n,t)}async function OA(n,t){const e=await Qa(n),i=(e==null?void 0:e.settings)||{};await Xa(_e(Pt,"users",n),{settings:{...i,...t}})}async function NA(n){const t=RA(Pt);(await Ys(ln(Pt,"users",n,"accounts"))).forEach(r=>t.delete(r.ref)),(await Ys(ln(Pt,"users",n,"transactions"))).forEach(r=>t.delete(r.ref)),(await Ys(ln(Pt,"users",n,"budgets"))).forEach(r=>t.delete(r.ref)),t.delete(_e(Pt,"users",n)),await t.commit()}async function a_(n,t){const e=ln(Pt,"users",n,"accounts");return(await n_(e,{name:t.name.trim(),type:t.type,initialBalance:Number(t.initialBalance)||0,bankName:(t.bankName||"").trim(),last4Digits:(t.last4Digits||"").trim(),icon:t.icon||c_(t.type),createdAt:new Date().toISOString()})).id}function c_(n){switch(n){case"Cash":return"💵";case"Bank":return"🏦";case"UPI":return"📱";case"Other":return"💳";default:return"💰"}}async function LA(n,t,e){const i=_e(Pt,"users",n,"accounts",t);await Xa(i,{name:e.name.trim(),type:e.type,initialBalance:Number(e.initialBalance)||0,bankName:(e.bankName||"").trim(),last4Digits:(e.last4Digits||"").trim(),icon:e.icon||c_(e.type),updatedAt:new Date().toISOString()})}async function VA(n,t){await Yu(_e(Pt,"users",n,"accounts",t))}async function FA(n){const t=ln(Pt,"users",n,"accounts"),e=zu(t,Wu("createdAt","asc")),i=await Ys(e),s=[];return i.forEach(r=>{s.push({id:r.id,...r.data()})}),s}function BA(n,t){const e=ln(Pt,"users",n,"accounts"),i=zu(e,Wu("createdAt","asc"));return i_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Account subscription error:",s),t([],s)})}async function l_(n,t=0){(await FA(n)).length===0&&await a_(n,{name:"Cash",type:"Cash",initialBalance:Number(t)||0,icon:"💵"})}async function u_(n,t){const e=ln(Pt,"users",n,"transactions"),i={type:t.type,amount:Number(t.amount),date:t.date,reason:t.reason.trim(),category:t.category||(t.type==="TRANSFER"?"Transfer":"Other"),notes:(t.notes||"").trim(),createdAt:new Date().toISOString()};return t.type==="INCOME"?i.destinationAccountId=t.destinationAccountId:t.type==="EXPENSE"?i.sourceAccountId=t.sourceAccountId:t.type==="TRANSFER"&&(i.sourceAccountId=t.sourceAccountId,i.destinationAccountId=t.destinationAccountId),(await n_(e,i)).id}async function h_(n,t,e){const i=_e(Pt,"users",n,"transactions",t),s={amount:Number(e.amount),date:e.date,reason:e.reason.trim(),category:e.category||(e.type==="TRANSFER"?"Transfer":"Other"),notes:(e.notes||"").trim(),updatedAt:new Date().toISOString()};e.sourceAccountId!==void 0&&(s.sourceAccountId=e.sourceAccountId),e.destinationAccountId!==void 0&&(s.destinationAccountId=e.destinationAccountId),await Xa(i,s)}async function $A(n,t){await Yu(_e(Pt,"users",n,"transactions",t))}function UA(n,t){const e=ln(Pt,"users",n,"transactions"),i=zu(e,Wu("createdAt","desc"));return i_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Transaction subscription error:",s),t([],s)})}async function d_(n,t){const e=t.category||"monthly";await e_(_e(Pt,"users",n,"budgets",e),{category:t.category||"monthly",amount:Number(t.amount),month:t.month,updatedAt:new Date().toISOString()})}async function zA(n){const t=ln(Pt,"users",n,"budgets"),e=await Ys(t),i=[];return e.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function jA(n,t){await Yu(_e(Pt,"users",n,"budgets",t))}async function qA(n,t,e){const s=(await eE(Jn,t,e)).user;return await pm(s,{displayName:n}),await DA(s.uid,{name:n,email:t,createdAt:new Date().toISOString()}),s}async function HA(n,t){return(await nE(Jn,n,t)).user}async function f_(){await lE(Jn)}async function WA(n){await tE(Jn,n)}function GA(n){return cE(Jn,n)}async function KA(n){const t=Jn.currentUser;if(!t)throw new Error("No user signed in");await pm(t,{displayName:n})}async function YA(n,t){const e=Jn.currentUser;if(!e)throw new Error("No user signed in");const i=Kn.credential(e.email,n);await dm(e,i),await sE(e,t)}async function XA(n){const t=Jn.currentUser;if(!t)throw new Error("No user signed in");const e=Kn.credential(t.email,n);await dm(t,e),await NA(t.uid),await uE(t)}function zc(n){const t=n.code||"";return{"auth/email-already-in-use":"This email is already registered. Try logging in instead.","auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled. Contact support.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password. Please try again.","auth/invalid-credential":"Invalid email or password. Please try again.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/weak-password":"Password should be at least 6 characters.","auth/network-request-failed":"Network error. Check your internet connection.","auth/requires-recent-login":"Please logout and login again before this action.","auth/operation-not-allowed":"Email/password sign-in is not enabled. Enable it in Firebase Console."}[t]||"Something went wrong. Please try again."}function p_(n,t,e){const i=t.filter(l=>l.type==="EXPENSE"&&l.date&&l.date.startsWith(e)),s=i.reduce((l,h)=>l+h.amount,0),r=n.find(l=>l.category==="monthly"),o=r?{budget:r.amount,spent:s,remaining:r.amount-s,percentage:r.amount>0?Math.min(s/r.amount*100,100):0,exceeded:s>r.amount}:null,c=n.filter(l=>l.category!=="monthly").map(l=>{const h=i.filter(d=>d.category===l.category).reduce((d,f)=>d+f.amount,0);return{category:l.category,budget:l.amount,spent:h,remaining:l.amount-h,percentage:l.amount>0?Math.min(h/l.amount*100,100):0,exceeded:h>l.amount}});return{monthlyProgress:o,categoryProgress:c,totalSpent:s}}function QA(n,t,e){const i=[],{monthlyProgress:s,categoryProgress:r}=p_(n,t,e);return s&&(s.exceeded?i.push({type:"danger",icon:"🚨",title:"Budget Exceeded",message:`You exceeded your monthly budget by ₹${Math.abs(s.remaining).toLocaleString("en-IN")}.`}):s.percentage>=80&&i.push({type:"warning",icon:"⚠️",title:"Budget Alert",message:`You have used ${s.percentage.toFixed(0)}% of your monthly budget.`})),r.forEach(o=>{o.exceeded&&i.push({type:"danger",icon:"🚨",title:"Category Budget Exceeded",message:`You exceeded your ${o.category} budget by ₹${Math.abs(o.remaining).toLocaleString("en-IN")}.`})}),i}async function JA(n,t,e){await d_(n,{category:"monthly",amount:Number(t),month:e})}async function ZA(n,t,e,i){await d_(n,{category:t,amount:Number(e),month:i})}async function Xu(n){return await zA(n)}async function tS(n,t){await jA(n,t)}function Vr(n){if(n===""||n===null||n===void 0)return"Please enter an amount.";const t=Number(n);return isNaN(t)?"Please enter a valid number.":t<=0?"Amount must be greater than ₹0.":t>99999999?"Amount is too large.":null}function Qu(n){return!n||!n.trim()?"Please enter your email.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())?null:"Please enter a valid email address."}function Ju(n){return n?n.length<6?"Password must be at least 6 characters.":null:"Please enter a password."}function g_(n,t){return t?n!==t?"Passwords do not match.":null:"Please confirm your password."}function m_(n,t){return!n||!String(n).trim()?`Please enter ${t}.`:null}function Ja(n){return!n||!n.trim()?"Please enter your name.":n.trim().length<2?"Name must be at least 2 characters.":n.trim().length>50?"Name must be less than 50 characters.":null}function eS(n){if(!n)return"Please select a date.";const t=new Date(n);return isNaN(t.getTime())?"Please enter a valid date.":null}function nS(n){return n?null:"Please select a category."}function y_(n){const t={},e=Vr(n.amount);e&&(t.amount=e);const i=eS(n.date);i&&(t.date=i);const s=m_(n.reason,"a reason");s&&(t.reason=s);const r=nS(n.category);return r&&(t.category=r),{isValid:Object.keys(t).length===0,errors:t}}function iS(n,t){const e={},i=Qu(n);i&&(e.email=i);const s=Ju(t);return s&&(e.password=s),{isValid:Object.keys(e).length===0,errors:e}}function sS(n,t,e,i){const s={},r=Ja(n);r&&(s.name=r);const o=Qu(t);o&&(s.email=o);const a=Ju(e);a&&(s.password=a);const c=g_(e,i);return c&&(s.confirmPassword=c),{isValid:Object.keys(s).length===0,errors:s}}let rS=0;function go(n,t="info",e=4e3){const i=document.getElementById("toast-container");if(!i)return;const s=`toast-${++rS}`,r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"Success",error:"Error",warning:"Warning",info:"Info"},a=document.createElement("div");a.id=s,a.className=`toast toast-${t}`,a.innerHTML=`
    <div class="toast-icon">${r[t]||r.info}</div>
    <div class="toast-content">
      <div class="toast-title">${o[t]||o.info}</div>
      <div class="toast-message">${n}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${e}ms linear;"></div>
  `,i.appendChild(a),requestAnimationFrame(()=>{const h=a.querySelector(".toast-progress");h&&(h.style.width="0%")});const c=setTimeout(()=>{Zf(a)},e);a.querySelector(".toast-close").addEventListener("click",()=>{clearTimeout(c)});const l=i.querySelectorAll(".toast");l.length>4&&Zf(l[0])}function Zf(n){!n||!n.parentNode||(n.classList.add("removing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}const K={success:(n,t)=>go(n,"success",t),error:(n,t)=>go(n,"error",t),warning:(n,t)=>go(n,"warning",t),info:(n,t)=>go(n,"info",t)};let Uo="login";function oS(){return`
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <span class="auth-logo-icon">💰</span>
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${__()}
        </div>
      </div>
    </div>
  `}function __(){if(Uo==="login")return`
      <h2 class="auth-title">Welcome Back 👋</h2>
      <form class="auth-form" id="login-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="login-email">Email Address</label>
          <input type="email" id="login-email" class="form-input" placeholder="name@example.com" autocomplete="email" required />
          <div class="form-error" id="login-email-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="login-password">Password</label>
          <div class="form-input-group">
            <input type="password" id="login-password" class="form-input" placeholder="••••••••" autocomplete="current-password" required />
            <button type="button" class="input-icon-btn" id="toggle-login-password">👁️</button>
          </div>
          <div class="form-error" id="login-password-error"></div>
        </div>

        <div class="auth-forgot">
          <span class="auth-link" id="link-forgot">Forgot Password?</span>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-login-submit">
          <span class="btn-text">Log In</span>
        </button>
      </form>

      <div class="auth-divider">OR</div>

      <div class="auth-footer">
        Don't have an account? <span class="auth-link" id="link-register">Create Account</span>
      </div>
    `;if(Uo==="register")return`
      <h2 class="auth-title">Create Account ✨</h2>
      <form class="auth-form" id="register-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="reg-name">Full Name</label>
          <input type="text" id="reg-name" class="form-input" placeholder="Rahul Sharma" autocomplete="name" required />
          <div class="form-error" id="reg-name-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reg-email">Email Address</label>
          <input type="email" id="reg-email" class="form-input" placeholder="name@example.com" autocomplete="email" required />
          <div class="form-error" id="reg-email-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reg-password">Password</label>
          <div class="form-input-group">
            <input type="password" id="reg-password" class="form-input" placeholder="At least 6 characters" autocomplete="new-password" required />
            <button type="button" class="input-icon-btn" id="toggle-reg-password">👁️</button>
          </div>
          <div class="form-error" id="reg-password-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reg-confirm">Confirm Password</label>
          <input type="password" id="reg-confirm" class="form-input" placeholder="Confirm your password" autocomplete="new-password" required />
          <div class="form-error" id="reg-confirm-error"></div>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-register-submit">
          <span class="btn-text">Create Account</span>
        </button>
      </form>

      <div class="auth-footer">
        Already have an account? <span class="auth-link" id="link-login">Log In</span>
      </div>
    `;if(Uo==="forgot")return`
      <h2 class="auth-title">Reset Password 🔑</h2>
      <p style="font-size: var(--fs-sm); color: var(--text-secondary); text-align: center; margin-bottom: 24px;">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      <form class="auth-form" id="forgot-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="forgot-email">Email Address</label>
          <input type="email" id="forgot-email" class="form-input" placeholder="name@example.com" autocomplete="email" required />
          <div class="form-error" id="forgot-email-error"></div>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-forgot-submit">
          <span class="btn-text">Send Reset Link</span>
        </button>
      </form>

      <div class="auth-footer">
        Back to <span class="auth-link" id="link-login-back">Log In</span>
      </div>
    `}function v_(n){const t=document.getElementById("auth-card-body");if(!t)return;const e=f=>{Uo=f,t.innerHTML=__(),v_(n)},i=document.getElementById("link-register");i&&(i.onclick=()=>e("register"));const s=document.getElementById("link-login");s&&(s.onclick=()=>e("login"));const r=document.getElementById("link-login-back");r&&(r.onclick=()=>e("login"));const o=document.getElementById("link-forgot");o&&(o.onclick=()=>e("forgot"));const a=document.getElementById("toggle-login-password");a&&(a.onclick=()=>{const f=document.getElementById("login-password");f&&(f.type=f.type==="password"?"text":"password")});const c=document.getElementById("toggle-reg-password");c&&(c.onclick=()=>{const f=document.getElementById("reg-password");f&&(f.type=f.type==="password"?"text":"password")});const l=document.getElementById("login-form");l&&(l.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("login-email").value,y=document.getElementById("login-password").value;document.getElementById("login-email-error").textContent="",document.getElementById("login-password-error").textContent="";const v=iS(g,y);if(!v.isValid){v.errors.email&&(document.getElementById("login-email-error").textContent=v.errors.email),v.errors.password&&(document.getElementById("login-password-error").textContent=v.errors.password);return}const _=document.getElementById("btn-login-submit");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Logging in...';try{await HA(g,y),K.success("LoggedIn successfully!"),n&&n()}catch(I){K.error(zc(I)),_.disabled=!1,_.innerHTML='<span class="btn-text">Log In</span>'}});const h=document.getElementById("register-form");h&&(h.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("reg-name").value,y=document.getElementById("reg-email").value,v=document.getElementById("reg-password").value,_=document.getElementById("reg-confirm").value;document.getElementById("reg-name-error").textContent="",document.getElementById("reg-email-error").textContent="",document.getElementById("reg-password-error").textContent="",document.getElementById("reg-confirm-error").textContent="";const I=sS(g,y,v,_);if(!I.isValid){I.errors.name&&(document.getElementById("reg-name-error").textContent=I.errors.name),I.errors.email&&(document.getElementById("reg-email-error").textContent=I.errors.email),I.errors.password&&(document.getElementById("reg-password-error").textContent=I.errors.password),I.errors.confirmPassword&&(document.getElementById("reg-confirm-error").textContent=I.errors.confirmPassword);return}const C=document.getElementById("btn-register-submit");C.disabled=!0,C.innerHTML='<span class="spinner"></span> Creating Account...';try{await qA(g,y,v),K.success("Account created successfully!"),n&&n()}catch(R){K.error(zc(R)),C.disabled=!1,C.innerHTML='<span class="btn-text">Create Account</span>'}});const d=document.getElementById("forgot-form");d&&(d.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("forgot-email").value;document.getElementById("forgot-email-error").textContent="";const y=Qu(g);if(y){document.getElementById("forgot-email-error").textContent=y;return}const v=document.getElementById("btn-forgot-submit");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Sending...';try{await WA(g),K.success("Password reset email sent! Check your inbox."),e("login")}catch(_){K.error(zc(_)),v.disabled=!1,v.innerHTML='<span class="btn-text">Send Reset Link</span>'}})}function aS(){return`
    <div class="onboarding-page">
      <div class="onboarding-container">
        <span class="onboarding-icon">💰</span>
        <h1 class="onboarding-title">Welcome to Money Control!</h1>
        <p class="onboarding-subtitle">To get started, let's set up your starting balance.</p>

        <div class="onboarding-card">
          <form id="onboarding-form" novalidate>
            <div class="form-group onboarding-amount">
              <label class="form-label" for="initial-balance" style="text-align: center; display: block; font-size: var(--fs-md);">
                How much money do you currently have?
              </label>
              <div class="form-input-group">
                <span class="input-prefix">₹</span>
                <input type="number" id="initial-balance" class="form-input" placeholder="0.00" step="any" min="0" required autofocus />
              </div>
              <div class="form-error" id="onboarding-error" style="justify-content: center; font-size: var(--fs-sm); margin-top: 8px;"></div>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-start-tracking">
              Start Money Tracking
            </button>
          </form>
        </div>
      </div>
    </div>
  `}function cS(n,t){const e=document.getElementById("onboarding-form");e&&(e.onsubmit=async i=>{i.preventDefault();const s=document.getElementById("initial-balance"),r=document.getElementById("onboarding-error");r.textContent="";const o=s.value,a=Vr(o);if(a){r.textContent=a;return}const c=document.getElementById("btn-start-tracking");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Saving...';try{await o_(n,Number(o)),K.success("Initial balance saved!"),t&&t()}catch(l){console.error("Error setting initial balance:",l),K.error("Unable to save initial balance. Please try again."),c.disabled=!1,c.innerHTML="Start Money Tracking"}})}function j(n){return n==null||isNaN(n)?"₹0":`₹${Number(n).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:0})}`}function b_(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function lS(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):""}function uS(n){return n?new Date(n).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit",hour12:!0}):""}function hS(){const n=new Date().getHours();return n<12?"Good Morning":n<17?"Good Afternoon":"Good Evening"}function Fr(){return new Date().toISOString().split("T")[0]}function dS(){return new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function w_(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function E_(n){const t=new Date(n+"T00:00:00"),e=t.getDay(),i=new Date(t);i.setDate(t.getDate()-e);const s=new Date(i);return s.setDate(i.getDate()+6),{start:i.toISOString().split("T")[0],end:s.toISOString().split("T")[0]}}function mo(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}const Br=[{value:"Food",label:"🍔 Food",emoji:"🍔"},{value:"Travel",label:"🚌 Travel",emoji:"🚌"},{value:"Recharge",label:"📱 Recharge",emoji:"📱"},{value:"Shopping",label:"🛍️ Shopping",emoji:"🛍️"},{value:"Entertainment",label:"🎮 Entertainment",emoji:"🎮"},{value:"Education",label:"📚 Education",emoji:"📚"},{value:"Software",label:"💻 Software",emoji:"💻"},{value:"Personal",label:"🏠 Personal",emoji:"🏠"},{value:"Other",label:"💊 Other",emoji:"💊"}],Zu=[{value:"Pocket Money",label:"Pocket Money"},{value:"Salary",label:"Salary"},{value:"Gift",label:"Gift"},{value:"Freelance",label:"Freelance"},{value:"Refund",label:"Refund"},{value:"Other",label:"Other"}];function th(n){const t=Br.find(e=>e.value===n);return t?t.emoji:"💰"}const fS=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];function T_(n,t){const e=Number(n.initialBalance)||0,i=n.id;let s=e;return t.forEach(r=>{const o=Number(r.amount)||0;r.type==="INCOME"?r.destinationAccountId===i&&(s+=o):r.type==="EXPENSE"?r.sourceAccountId===i&&(s-=o):r.type==="TRANSFER"&&(r.destinationAccountId===i&&(s+=o),r.sourceAccountId===i&&(s-=o))}),s}function pn(n,t){const e={};let i=0;return n.forEach(s=>{const r=T_(s,t);e[s.id]=r,i+=r}),{balances:e,totalMoney:i}}function pS(n,t){const e=n.id,i=t.filter(l=>l.sourceAccountId===e||l.destinationAccountId===e);let s=0,r=0,o=0,a=0;i.forEach(l=>{const h=Number(l.amount)||0;l.type==="INCOME"&&l.destinationAccountId===e?s+=h:l.type==="EXPENSE"&&l.sourceAccountId===e?r+=h:l.type==="TRANSFER"&&(l.sourceAccountId===e&&(o+=h),l.destinationAccountId===e&&(a+=h))});const c=T_(n,t);return{account:n,balance:c,totalAdded:s,totalSpent:r,totalTransferredOut:o,totalTransferredIn:a,transactions:i}}function gS(n){return n.filter(t=>t.type==="INCOME").reduce((t,e)=>t+Number(e.amount),0)}function mS(n){return n.filter(t=>t.type==="EXPENSE").reduce((t,e)=>t+Number(e.amount),0)}function yS(n){return n.filter(t=>t.type==="TRANSFER").reduce((t,e)=>t+Number(e.amount),0)}function _S(n,t){const{balances:e,totalMoney:i}=pn(n,t),s=gS(t),r=mS(t),o=yS(t);return{balances:e,totalMoney:i,totalIncome:s,totalExpenses:r,totalTransfers:o}}function I_(n,t){const e=n.filter(o=>o.date===t),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function vS(n,t){const{start:e,end:i}=E_(t),s=n.filter(c=>c.date>=e&&c.date<=i),r=s.filter(c=>c.type==="INCOME").reduce((c,l)=>c+l.amount,0),o=s.filter(c=>c.type==="EXPENSE").reduce((c,l)=>c+l.amount,0),a=s.filter(c=>c.type==="TRANSFER").reduce((c,l)=>c+l.amount,0);return{added:r,spent:o,transferred:a,net:r-o,count:s.length,transactions:s,startDate:e,endDate:i}}function x_(n,t){const e=n.filter(o=>o.date&&o.date.startsWith(t)),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function A_(n,t){const e=t?n.filter(o=>o.type==="EXPENSE"&&o.date&&o.date.startsWith(t)):n.filter(o=>o.type==="EXPENSE"),i={};let s=0;return e.forEach(o=>{const a=o.category||"Other";i[a]=(i[a]||0)+o.amount,s+=o.amount}),{categories:Object.entries(i).map(([o,a])=>({category:o,amount:a,percentage:s>0?a/s*100:0,emoji:th(o)})).sort((o,a)=>a.amount-o.amount),totalExpenses:s}}function S_(n,t){const{balances:e,totalMoney:i}=pn(n,t);return n.map(s=>{const r=e[s.id]||0,o=i>0?Math.max(0,r)/i*100:0;return{account:s,balance:r,percentage:o}}).sort((s,r)=>r.balance-s.balance)}function P_(n,t){const{added:e,spent:i,transferred:s,net:r,count:o,transactions:a}=x_(n,t),{categories:c}=A_(n,t),l=c.length>0?c[0]:null,h=a.filter(f=>f.type==="EXPENSE"),d=h.length>0?h.reduce((f,g)=>g.amount>f.amount?g:f,h[0]):null;return{income:e,expenses:i,transfers:s,savings:r,transactionCount:o,categories:c,highestCategory:l,highestExpense:d}}function bS(n,t){const e=[],i=Fr(),{balances:s}=pn(n,t),r=I_(t,i);if(r.spent>0&&e.push({icon:"📅",text:`You spent <strong>${j(r.spent)}</strong> today.`}),n.length>0){const c=n.reduce((h,d)=>(s[d.id]||0)>(s[h.id]||0)?d:h,n[0]),l=s[c.id]||0;l>0&&e.push({icon:c.icon||"🏦",text:`Your <strong>${c.name}</strong> account has your highest balance (${j(l)}).`})}const o=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{categories:a}=A_(t,o);if(a.length>0){const c=a[0];e.push({icon:c.emoji,text:`<strong>${c.category}</strong> accounts for <strong>${c.percentage.toFixed(0)}%</strong> of your expenses this month.`})}return n.forEach(c=>{const l=s[c.id]||0;l>=0&&l<500&&e.push({icon:"⚠️",text:`Your <strong>${c.name}</strong> balance is low (${j(l)}).`})}),e.slice(0,5)}function wS(n,t={}){const{showActions:e=!1,showDate:i=!0,showNotes:s=!1,accounts:r=[]}=t,o=n.type==="INCOME",a=n.type==="EXPENSE",c=n.type==="TRANSFER",l=o?"income":a?"expense":"balance",h=y=>{const v=r.find(_=>_.id===y);return v?v.name:""};let d="💰",f="",g="";if(o){d="💰",g="+";const y=h(n.destinationAccountId);f=y?`→ ${y}`:""}else if(a){d=th(n.category),g="-";const y=h(n.sourceAccountId);f=y?`← ${y}`:""}else if(c){d="🔄",g="↔ ";const y=h(n.sourceAccountId)||"Source",v=h(n.destinationAccountId)||"Dest";f=`${y} → ${v}`}return`
    <div class="transaction-item animate-fade-in" data-tx-id="${n.id}">
      <div class="transaction-icon ${l}">
        ${d}
      </div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${mo(n.reason)||(c?"Account Transfer":"No reason")}
        </div>
        <div class="transaction-meta">
          <span class="transaction-category" style="font-weight: 600; color: ${c?"var(--primary)":"var(--text-secondary)"};">
            ${c?"🔄 Transfer":mo(n.category)||""}
          </span>
          ${f?`
            <span class="transaction-dot"></span>
            <span style="font-weight: 500; color: var(--text-primary);">${mo(f)}</span>
          `:""}
          ${i?`
            <span class="transaction-dot"></span>
            <span>${b_(n.date)}</span>
          `:""}
          ${n.createdAt?`
            <span class="transaction-dot"></span>
            <span>${uS(n.createdAt)}</span>
          `:""}
        </div>
        ${s&&n.notes?`
          <div class="transaction-meta" style="margin-top: 4px; font-style: italic;">
            ${mo(n.notes)}
          </div>
        `:""}
      </div>
      <div class="transaction-amount">
        <div class="transaction-amount-value ${l}" style="${c?"color: var(--primary);":""}">
          ${g}${j(n.amount)}
        </div>
      </div>
      ${e?`
        <div class="transaction-actions">
          <button class="transaction-action-btn edit" data-action="edit" data-tx-id="${n.id}" title="Edit">✏️</button>
          <button class="transaction-action-btn delete" data-action="delete" data-tx-id="${n.id}" title="Delete">🗑️</button>
        </div>
      `:""}
    </div>
  `}function Gi(n,t={}){return!n||n.length===0?"":n.map(e=>wS(e,t)).join("")}function C_(){return`
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">No transactions yet</h3>
      <p class="empty-state-text">Start tracking your money by adding your first transaction.</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `}function ES(){return`
    <div class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <h3 class="empty-state-title">No results found</h3>
      <p class="empty-state-text">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  `}function jc(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📅</span>
      <h3 class="empty-state-title">No transactions on this date</h3>
      <p class="empty-state-text">There are no transactions recorded for the selected date.</p>
    </div>
  `}function TS(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `}let zo=null;function ue(n){Ot();const t=document.getElementById("modal-root");if(!t)return;const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true">
      ${n.hideHeader?"":`
        <div class="modal-header">
          <h2 class="modal-title">${n.title||""}</h2>
          <button class="modal-close" id="modal-close-btn" aria-label="Close">✕</button>
        </div>
      `}
      <div class="modal-body">
        ${n.content||""}
      </div>
      ${n.footer?`<div class="modal-footer">${n.footer}</div>`:""}
    </div>
  `,t.appendChild(e),document.body.classList.add("no-scroll"),zo={element:e,onClose:n.onClose};const i=e.querySelector("#modal-close-btn");i&&i.addEventListener("click",Ot),e.addEventListener("click",r=>{r.target===e&&Ot()});const s=r=>{r.key==="Escape"&&(Ot(),document.removeEventListener("keydown",s))};return document.addEventListener("keydown",s),n.onOpen&&requestAnimationFrame(()=>n.onOpen(e)),e}function Ot(){if(!zo)return;const{element:n,onClose:t}=zo;n.classList.add("closing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),document.body.classList.remove("no-scroll"),t&&t()},200),zo=null}function $r(n){return new Promise(t=>{const e=`
      <div class="confirm-dialog">
        <div class="confirm-icon">${n.icon||"⚠️"}</div>
        <h3 class="confirm-title">${n.title||"Are you sure?"}</h3>
        <p class="confirm-message">${n.message||""}</p>
        <div class="confirm-actions">
          <button class="btn btn-outline" id="confirm-cancel">${n.cancelText||"Cancel"}</button>
          <button class="btn ${n.danger?"btn-danger":"btn-primary"}" id="confirm-ok">
            ${n.confirmText||"Confirm"}
          </button>
        </div>
      </div>
    `;ue({content:e,hideHeader:!0,onOpen:i=>{i.querySelector("#confirm-cancel").addEventListener("click",()=>{Ot(),t(!1)}),i.querySelector("#confirm-ok").addEventListener("click",()=>{Ot(),t(!0)})},onClose:()=>t(!1)})})}let St={user:null,profile:null,accounts:[],transactions:[],budgets:[]};function tp(n){St={...St,...n};const{profile:t,accounts:e,transactions:i}=St,s=t!=null&&t.name?t.name.split(" ")[0]:"User",{balances:r,totalMoney:o,totalIncome:a,totalExpenses:c,totalTransfers:l}=_S(e,i),h=i.slice(0,5),d=bS(e,i),f=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,g=QA(St.budgets,i,f);return`
    <div class="page animate-fade-in">
      <!-- Greeting -->
      <div class="greeting">
        <h1 class="greeting-text">${hS()}, ${s} 👋</h1>
        <p class="greeting-date">${dS()}</p>
      </div>

      <!-- Budget Alert Banner if any -->
      ${g.length>0?`
        <div style="margin-bottom: var(--space-6);">
          ${g.map(y=>`
            <div class="alert-banner alert-banner-${y.type}">
              <span class="alert-banner-icon">${y.icon}</span>
              <div class="alert-banner-text">
                <strong>${y.title}:</strong> ${y.message}
              </div>
            </div>
          `).join("")}
        </div>
      `:""}

      <!-- Main Balance Card: Total Money -->
      <div class="balance-card">
        <div class="balance-label">Total Money Across All Accounts</div>
        <div class="balance-amount">${j(o)}</div>
        <div class="balance-subtitle">Available funds in Cash, Banks & Wallets</div>
      </div>

      <!-- Account Breakdown Pills -->
      ${e.length>0?`
        <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
            <div style="font-weight: var(--fw-semibold); font-size: var(--fs-sm); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.03em;">
              Account Breakdown
            </div>
            <span class="section-link" id="link-manage-accounts">Manage Accounts →</span>
          </div>
          <div style="display: flex; gap: var(--space-3); overflow-x: auto; padding-bottom: 4px;">
            ${e.map(y=>{const v=r[y.id]||0;return`
                <div style="background: var(--bg-tertiary); padding: 8px 14px; border-radius: var(--radius-lg); flex-shrink: 0; min-width: 120px;">
                  <div style="font-size: var(--fs-xs); color: var(--text-secondary);">${y.icon||"🏦"} ${y.name}</div>
                  <div style="font-weight: var(--fw-bold); font-size: var(--fs-base); margin-top: 2px;">${j(v)}</div>
                </div>
              `}).join("")}
          </div>
        </div>
      `:""}

      <!-- Summary Cards -->
      <div class="summary-grid" style="grid-template-columns: repeat(4, 1fr);">
        <div class="summary-card">
          <div class="summary-card-icon income">📥</div>
          <div class="summary-card-amount" style="color: var(--income);">${j(a)}</div>
          <div class="summary-card-label">Money Added</div>
        </div>

        <div class="summary-card">
          <div class="summary-card-icon expense">📤</div>
          <div class="summary-card-amount" style="color: var(--expense);">${j(c)}</div>
          <div class="summary-card-label">Money Spent</div>
        </div>

        <div class="summary-card">
          <div class="summary-card-icon balance" style="background: var(--primary-bg); color: var(--primary);">🔄</div>
          <div class="summary-card-amount" style="color: var(--primary);">${j(l)}</div>
          <div class="summary-card-label">Transferred</div>
        </div>

        <div class="summary-card">
          <div class="summary-card-icon balance">💰</div>
          <div class="summary-card-amount">${j(o)}</div>
          <div class="summary-card-label">Current Total</div>
        </div>
      </div>

      <!-- Quick 3 Action Buttons -->
      <div class="quick-actions" style="grid-template-columns: repeat(3, 1fr); margin-bottom: var(--space-6);">
        <button class="quick-action-btn income" id="btn-quick-add-money">
          <span>➕</span> Add Money
        </button>
        <button class="quick-action-btn expense" id="btn-quick-add-expense">
          <span>−</span> Add Expense
        </button>
        <button class="quick-action-btn" id="btn-quick-transfer" style="background: var(--primary-bg); color: var(--primary); border: 1.5px solid var(--primary-light);">
          <span>↔</span> Transfer
        </button>
      </div>

      <!-- Quick Nav Buttons -->
      <div class="quick-nav">
        <button class="quick-nav-btn" data-page="accounts">
          <span class="quick-nav-icon">🏦</span>
          <span>My Accounts</span>
        </button>
        <button class="quick-nav-btn" data-page="money-control">
          <span class="quick-nav-icon">📅</span>
          <span>Money Control</span>
        </button>
        <button class="quick-nav-btn" data-page="analytics">
          <span class="quick-nav-icon">📊</span>
          <span>Analytics</span>
        </button>
      </div>

      <!-- Recent Transactions -->
      <div class="section recent-transactions">
        <div class="section-header">
          <h2 class="section-title">Recent Activity</h2>
          ${i.length>0?`
            <span class="section-link" id="link-view-all-tx">View All →</span>
          `:""}
        </div>

        <div class="card card-flat" style="padding: 0;">
          ${h.length>0?Gi(h,{showActions:!0,showDate:!0,accounts:St.accounts}):C_()}
        </div>
      </div>

      <!-- Smart Insights -->
      ${d.length>0?`
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">Money Control Insights 💡</h2>
          </div>
          <div class="insights-card">
            ${d.map(y=>`
              <div class="insight-item">
                <span class="insight-icon">${y.icon}</span>
                <div class="insight-text">${y.text}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}
    </div>
  `}function ep(n,t){document.querySelectorAll(".quick-nav-btn[data-page]").forEach(c=>{c.onclick=()=>n(c.dataset.page)});const e=document.getElementById("link-manage-accounts");e&&(e.onclick=()=>n("accounts"));const i=document.getElementById("link-view-all-tx");i&&(i.onclick=()=>n("transactions"));const s=document.getElementById("btn-quick-add-money");s&&(s.onclick=()=>gi("INCOME",t));const r=document.getElementById("btn-quick-add-expense");r&&(r.onclick=()=>gi("EXPENSE",t));const o=document.getElementById("btn-quick-transfer");o&&(o.onclick=()=>eh(t));const a=document.getElementById("empty-add-money-btn");a&&(a.onclick=()=>gi("INCOME",t)),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(c=>{c.onclick=l=>{l.stopPropagation();const h=c.dataset.action,d=c.dataset.txId,f=St.transactions.find(g=>g.id===d);f&&(h==="edit"?f.type==="TRANSFER"?ih(f,t):nh(f,t):h==="delete"&&sh(f,t))}})}function gi(n="INCOME",t){const e=n==="INCOME",i=e?Zu:Br,s=St.accounts,r=Fr(),o=`
    <form id="tx-modal-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="tx-amount">Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="tx-amount" class="form-input" placeholder="0.00" step="any" min="0" required autofocus />
        </div>
        <div class="form-error" id="tx-amount-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-account">${e?"Received Into Account":"Paid From Account"}</label>
        <select id="tx-account" class="form-select" required>
          <option value="">Select Account</option>
          ${s.map(a=>`<option value="${a.id}">${a.icon||"🏦"} ${a.name}</option>`).join("")}
        </select>
        <div class="form-error" id="tx-account-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-date">Date</label>
        <input type="date" id="tx-date" class="form-input" value="${r}" required />
        <div class="form-error" id="tx-date-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-reason">Reason</label>
        <input type="text" id="tx-reason" class="form-input" placeholder="${e?"e.g. Monthly Salary":"e.g. Lunch with friends"}" required />
        <div class="form-error" id="tx-reason-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-category">Category</label>
        <select id="tx-category" class="form-select" required>
          <option value="">Select Category</option>
          ${i.map(a=>`<option value="${a.value}">${a.label}</option>`).join("")}
        </select>
        <div class="form-error" id="tx-category-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-notes">Notes (Optional)</label>
        <textarea id="tx-notes" class="form-textarea" placeholder="Add details..."></textarea>
      </div>

      <div id="tx-insufficient-warning" class="alert-banner alert-banner-danger" style="display: none; margin-bottom: 16px;">
        <span class="alert-banner-icon">⚠️</span>
        <div class="alert-banner-text" id="tx-insufficient-text">
          Insufficient Balance in selected account!
        </div>
      </div>

      <button type="submit" class="btn ${e?"btn-income":"btn-expense"} btn-block btn-lg" id="btn-save-tx">
        ${e?"💰 Add Money":"💸 Save Expense"}
      </button>
    </form>
  `;ue({title:e?"💰 Add Money":"💸 Add Expense",content:o,onOpen:a=>{const c=a.querySelector("#tx-modal-form"),l=a.querySelector("#tx-amount"),h=a.querySelector("#tx-account"),d=a.querySelector("#tx-insufficient-warning"),f=a.querySelector("#tx-insufficient-text"),g=()=>{var O,D;if(e)return;const y=h.value,v=Number(l.value)||0;if(!y||v<=0){d.style.display="none";return}const _=s.find(L=>L.id===y),{balances:I}=pn(s,St.transactions),C=I[y]||0,R=(D=(O=St.profile)==null?void 0:O.settings)==null?void 0:D.allowNegativeBalance;v>C&&!R?(f.textContent=`⚠️ Insufficient Balance! Available in ${(_==null?void 0:_.name)||"account"}: ${j(C)}`,d.style.display="flex"):d.style.display="none"};l.oninput=g,h.onchange=g,c.onsubmit=async y=>{var w,E;y.preventDefault();const v=l.value,_=h.value,I=a.querySelector("#tx-date").value,C=a.querySelector("#tx-reason").value,R=a.querySelector("#tx-category").value,O=a.querySelector("#tx-notes").value;a.querySelector("#tx-amount-error").textContent="",a.querySelector("#tx-account-error").textContent="",a.querySelector("#tx-date-error").textContent="",a.querySelector("#tx-reason-error").textContent="",a.querySelector("#tx-category-error").textContent="";let D=!0;const L=y_({amount:v,date:I,reason:C,category:R});if(L.isValid||(L.errors.amount&&(a.querySelector("#tx-amount-error").textContent=L.errors.amount),L.errors.date&&(a.querySelector("#tx-date-error").textContent=L.errors.date),L.errors.reason&&(a.querySelector("#tx-reason-error").textContent=L.errors.reason),L.errors.category&&(a.querySelector("#tx-category-error").textContent=L.errors.category),D=!1),_||(a.querySelector("#tx-account-error").textContent="Please select an account.",D=!1),!D)return;if(!e){const x=s.find(pt=>pt.id===_),{balances:S}=pn(s,St.transactions),P=S[_]||0,A=(E=(w=St.profile)==null?void 0:w.settings)==null?void 0:E.allowNegativeBalance;if(Number(v)>P&&!A){f.textContent=`⚠️ Insufficient Balance! Available in ${x==null?void 0:x.name}: ${j(P)}`,d.style.display="flex",K.warning(`⚠️ You only have ${j(P)} available in ${x==null?void 0:x.name}.`);return}}const T=a.querySelector("#btn-save-tx");T.disabled=!0,T.innerHTML='<span class="spinner"></span> Saving...';try{const x=St.user.uid,S={type:n,amount:Number(v),date:I,reason:C,category:R,notes:O};e?S.destinationAccountId=_:S.sourceAccountId=_,await u_(x,S),Ot();const P=s.find(A=>A.id===_);K.success(e?`💰 ${j(v)} added to ${(P==null?void 0:P.name)||"account"}!`:`💸 ${j(v)} spent from ${(P==null?void 0:P.name)||"account"}.`),t&&t()}catch(x){console.error("Error saving transaction:",x),K.error("Unable to save transaction."),T.disabled=!1,T.innerHTML=e?"💰 Add Money":"💸 Save Expense"}}}})}function eh(n){const t=St.accounts,e=Fr(),i=`
    <form id="transfer-modal-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="tr-amount">Transfer Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="tr-amount" class="form-input" placeholder="0.00" step="any" min="0" required autofocus />
        </div>
        <div class="form-error" id="tr-amount-error"></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label" for="tr-from">From Account</label>
          <select id="tr-from" class="form-select" required>
            <option value="">Select Source</option>
            ${t.map(s=>`<option value="${s.id}">${s.icon||"🏦"} ${s.name}</option>`).join("")}
          </select>
          <div class="form-error" id="tr-from-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="tr-to">To Account</label>
          <select id="tr-to" class="form-select" required>
            <option value="">Select Destination</option>
            ${t.map(s=>`<option value="${s.id}">${s.icon||"🏦"} ${s.name}</option>`).join("")}
          </select>
          <div class="form-error" id="tr-to-error"></div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tr-date">Date</label>
        <input type="date" id="tr-date" class="form-input" value="${e}" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="tr-reason">Reason / Description</label>
        <input type="text" id="tr-reason" class="form-input" placeholder="e.g. ATM Withdrawal, Moving to Savings" required />
        <div class="form-error" id="tr-reason-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tr-notes">Notes (Optional)</label>
        <textarea id="tr-notes" class="form-textarea" placeholder="Add details..."></textarea>
      </div>

      <div id="tr-insufficient-warning" class="alert-banner alert-banner-danger" style="display: none; margin-bottom: 16px;">
        <span class="alert-banner-icon">⚠️</span>
        <div class="alert-banner-text" id="tr-insufficient-text">
          Source account has insufficient balance!
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-transfer" style="background: var(--gradient-hero);">
        🔄 Transfer Money
      </button>
    </form>
  `;ue({title:"🔄 Transfer Money Between Accounts",content:i,onOpen:s=>{const r=s.querySelector("#transfer-modal-form"),o=s.querySelector("#tr-amount"),a=s.querySelector("#tr-from"),c=s.querySelector("#tr-insufficient-warning"),l=s.querySelector("#tr-insufficient-text"),h=()=>{const d=a.value,f=Number(o.value)||0;if(!d||f<=0){c.style.display="none";return}const{balances:g}=pn(t,St.transactions),y=g[d]||0,v=t.find(_=>_.id===d);f>y?(l.textContent=`⚠️ Insufficient Balance! Available in ${v==null?void 0:v.name}: ${j(y)}`,c.style.display="flex"):c.style.display="none"};o.oninput=h,a.onchange=h,r.onsubmit=async d=>{d.preventDefault();const f=o.value,g=a.value,y=s.querySelector("#tr-to").value,v=s.querySelector("#tr-date").value,_=s.querySelector("#tr-reason").value,I=s.querySelector("#tr-notes").value;s.querySelector("#tr-amount-error").textContent="",s.querySelector("#tr-from-error").textContent="",s.querySelector("#tr-to-error").textContent="",s.querySelector("#tr-reason-error").textContent="";let C=!0;const R=Vr(f);R&&(s.querySelector("#tr-amount-error").textContent=R,C=!1),g||(s.querySelector("#tr-from-error").textContent="Select source account.",C=!1),y||(s.querySelector("#tr-to-error").textContent="Select destination account.",C=!1),g&&y&&g===y&&(s.querySelector("#tr-to-error").textContent="From and To accounts cannot be the same!",C=!1);const O=m_(_,"a reason");if(O&&(s.querySelector("#tr-reason-error").textContent=O,C=!1),!C)return;const{balances:D}=pn(t,St.transactions),L=D[g]||0,T=t.find(x=>x.id===g),w=t.find(x=>x.id===y);if(Number(f)>L){l.textContent=`⚠️ Insufficient Balance! Available in ${T==null?void 0:T.name}: ${j(L)}`,c.style.display="flex",K.warning(`⚠️ You only have ${j(L)} available in ${T==null?void 0:T.name}.`);return}const E=s.querySelector("#btn-save-transfer");E.disabled=!0,E.innerHTML='<span class="spinner"></span> Transferring...';try{const x=St.user.uid;await u_(x,{type:"TRANSFER",amount:Number(f),date:v,reason:_,category:"Transfer",sourceAccountId:g,destinationAccountId:y,notes:I}),Ot(),K.success(`🔄 Transferred ${j(f)} from ${T==null?void 0:T.name} to ${w==null?void 0:w.name}!`),n&&n()}catch(x){console.error("Error saving transfer:",x),K.error("Unable to complete transfer."),E.disabled=!1,E.innerHTML="🔄 Transfer Money"}}}})}function nh(n,t){const e=n.type==="INCOME",i=e?Zu:Br,s=St.accounts,r=`
    <form id="edit-tx-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="edit-tx-amount">Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="edit-tx-amount" class="form-input" value="${n.amount}" step="any" min="0" required />
        </div>
        <div class="form-error" id="edit-tx-amount-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-account">${e?"Destination Account":"Source Account"}</label>
        <select id="edit-tx-account" class="form-select" required>
          ${s.map(o=>`
            <option value="${o.id}" ${(e?n.destinationAccountId:n.sourceAccountId)===o.id?"selected":""}>
              ${o.icon||"🏦"} ${o.name}
            </option>
          `).join("")}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-date">Date</label>
        <input type="date" id="edit-tx-date" class="form-input" value="${n.date}" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-reason">Reason</label>
        <input type="text" id="edit-tx-reason" class="form-input" value="${n.reason||""}" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-category">Category</label>
        <select id="edit-tx-category" class="form-select" required>
          ${i.map(o=>`<option value="${o.value}" ${n.category===o.value?"selected":""}>${o.label}</option>`).join("")}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-notes">Notes (Optional)</label>
        <textarea id="edit-tx-notes" class="form-textarea">${n.notes||""}</textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-update-tx">
        ✅ Update Transaction
      </button>
    </form>
  `;ue({title:"✏️ Edit Transaction",content:r,onOpen:o=>{o.querySelector("#edit-tx-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#edit-tx-amount").value,l=o.querySelector("#edit-tx-account").value,h=o.querySelector("#edit-tx-date").value,d=o.querySelector("#edit-tx-reason").value,f=o.querySelector("#edit-tx-category").value,g=o.querySelector("#edit-tx-notes").value;if(!y_({amount:c,date:h,reason:d,category:f}).isValid)return;const v=o.querySelector("#btn-update-tx");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Updating...';try{const _=St.user.uid,I={amount:Number(c),date:h,reason:d,category:f,notes:g};e?I.destinationAccountId=l:I.sourceAccountId=l,await h_(_,n.id,I),Ot(),K.success("✅ Transaction updated!"),t&&t()}catch{K.error("Unable to update transaction."),v.disabled=!1,v.innerHTML="✅ Update Transaction"}}}})}function ih(n,t){const e=St.accounts,i=`
    <form id="edit-tr-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="edit-tr-amount">Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="edit-tr-amount" class="form-input" value="${n.amount}" step="any" min="0" required />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label" for="edit-tr-from">From Account</label>
          <select id="edit-tr-from" class="form-select" required>
            ${e.map(s=>`<option value="${s.id}" ${n.sourceAccountId===s.id?"selected":""}>${s.icon||"🏦"} ${s.name}</option>`).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="edit-tr-to">To Account</label>
          <select id="edit-tr-to" class="form-select" required>
            ${e.map(s=>`<option value="${s.id}" ${n.destinationAccountId===s.id?"selected":""}>${s.icon||"🏦"} ${s.name}</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tr-date">Date</label>
        <input type="date" id="edit-tr-date" class="form-input" value="${n.date}" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tr-reason">Reason</label>
        <input type="text" id="edit-tr-reason" class="form-input" value="${n.reason||""}" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tr-notes">Notes (Optional)</label>
        <textarea id="edit-tr-notes" class="form-textarea">${n.notes||""}</textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-update-tr">
        ✅ Update Transfer
      </button>
    </form>
  `;ue({title:"✏️ Edit Transfer",content:i,onOpen:s=>{s.querySelector("#edit-tr-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-tr-amount").value,a=s.querySelector("#edit-tr-from").value,c=s.querySelector("#edit-tr-to").value,l=s.querySelector("#edit-tr-date").value,h=s.querySelector("#edit-tr-reason").value,d=s.querySelector("#edit-tr-notes").value;if(a===c){K.error("From and To accounts cannot be the same!");return}const f=s.querySelector("#btn-update-tr");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Updating...';try{const g=St.user.uid;await h_(g,n.id,{amount:Number(o),date:l,reason:h,sourceAccountId:a,destinationAccountId:c,notes:d}),Ot(),K.success("✅ Transfer updated!"),t&&t()}catch{K.error("Unable to update transfer."),f.disabled=!1,f.innerHTML="✅ Update Transfer"}}}})}async function sh(n,t){const e=n.type==="TRANSFER";if(await $r({icon:"🗑️",title:e?"Delete Transfer":"Delete Transaction",message:e?"Are you sure you want to delete this transfer? Both source and destination account balances will be restored.":"Are you sure you want to delete this transaction? Your account balances will automatically adjust.",confirmText:"Delete",danger:!0}))try{const s=St.user.uid;await $A(s,n.id),K.success("🗑️ Transaction deleted!"),t&&t()}catch{K.error("Unable to delete transaction.")}}let Ln={user:null,profile:null,accounts:[],transactions:[]};function IS(n){Ln={...Ln,...n};const{accounts:t,transactions:e}=Ln,{balances:i,totalMoney:s}=pn(t,e);return`
    <div class="page animate-fade-in">
      <div class="page-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <h1 class="page-title">My Accounts 🏦</h1>
          <p class="page-subtitle">Track where your money is currently located across Cash, Banks, & Wallets.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-add-account-modal">+ Add Account</button>
      </div>

      <!-- Total Money Banner -->
      <div class="card card-glass" style="margin-bottom: var(--space-6); background: var(--primary-bg); border-color: var(--primary-light);">
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Total Money Across All Accounts</div>
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: var(--primary); margin-top: 4px;">${j(s)}</div>
      </div>

      <!-- Account Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
        ${t.map(r=>{const o=i[r.id]||0;return`
            <div class="card hover-lift" style="cursor: pointer; position: relative;" data-account-id="${r.id}">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="font-size: 1.8rem; width: 44px; height: 44px; border-radius: 12px; background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center;">
                    ${r.icon||"💰"}
                  </div>
                  <div>
                    <div style="font-weight: var(--fw-bold); font-size: var(--fs-md);">${r.name}</div>
                    <div style="font-size: var(--fs-xs); color: var(--text-secondary);">${r.type} ${r.last4Digits?`(••${r.last4Digits})`:""}</div>
                  </div>
                </div>
              </div>
              <div style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: ${o<0?"var(--expense)":"var(--text-primary)"};">
                ${j(o)}
              </div>
              <div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-top: 4px;">
                Initial: ${j(r.initialBalance||0)}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function xS(n){const t=document.getElementById("btn-add-account-modal");t&&(t.onclick=()=>AS(n)),document.querySelectorAll("[data-account-id]").forEach(e=>{e.onclick=()=>{const i=e.dataset.accountId,s=Ln.accounts.find(r=>r.id===i);s&&SS(s,n)}})}function AS(n){ue({title:"🏦 Add New Account",content:`
    <form id="add-account-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="acc-name">Account Name</label>
        <input type="text" id="acc-name" class="form-input" placeholder="e.g. SBI Savings, GPay, Cash" required autofocus />
        <div class="form-error" id="acc-name-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="acc-type">Account Type</label>
        <select id="acc-type" class="form-select" required>
          <option value="Cash">💵 Cash</option>
          <option value="Bank">🏦 Bank Account</option>
          <option value="UPI">📱 UPI / Wallet</option>
          <option value="Other">💳 Other</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="acc-initial">Initial Balance (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="acc-initial" class="form-input" placeholder="0.00" step="any" min="0" value="0" required />
        </div>
        <div class="form-error" id="acc-initial-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="acc-last4">Last 4 Digits (Optional)</label>
        <input type="text" id="acc-last4" class="form-input" placeholder="e.g. 4321" maxlength="4" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-account">
        Create Account
      </button>
    </form>
  `,onOpen:e=>{e.querySelector("#add-account-form").onsubmit=async i=>{i.preventDefault();const s=e.querySelector("#acc-name").value,r=e.querySelector("#acc-type").value,o=e.querySelector("#acc-initial").value,a=e.querySelector("#acc-last4").value,c=Ja(s),l=Vr(o);if(c){e.querySelector("#acc-name-error").textContent=c;return}if(l){e.querySelector("#acc-initial-error").textContent=l;return}const h=e.querySelector("#btn-save-account");h.disabled=!0,h.innerHTML='<span class="spinner"></span> Creating...';try{await a_(Ln.user.uid,{name:s,type:r,initialBalance:Number(o),last4Digits:a}),Ot(),K.success(`🏦 ${s} account created!`),n&&n()}catch{K.error("Unable to create account."),h.disabled=!1,h.innerHTML="Create Account"}}}})}function SS(n,t){const e=pS(n,Ln.transactions),i=`
    <div style="margin-bottom: var(--space-4);">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: var(--space-3);">
        <span style="font-size: 2.5rem;">${n.icon||"🏦"}</span>
        <div>
          <h3 style="font-size: var(--fs-xl); font-weight: var(--fw-bold);">${n.name}</h3>
          <p style="font-size: var(--fs-xs); color: var(--text-secondary);">${n.type} ${n.last4Digits?`(••${n.last4Digits})`:""}</p>
        </div>
      </div>

      <div class="card card-glass" style="margin-bottom: var(--space-4); text-align: center; padding: var(--space-4);">
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase;">Current Account Balance</div>
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: ${e.balance<0?"var(--expense)":"var(--income)"};">
          ${j(e.balance)}
        </div>
      </div>

      <!-- Account Breakdown Stats -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: var(--space-4);">
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Added</div>
          <div style="font-weight: var(--fw-bold); color: var(--income);">${j(e.totalAdded)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Spent</div>
          <div style="font-weight: var(--fw-bold); color: var(--expense);">${j(e.totalSpent)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred Out</div>
          <div style="font-weight: var(--fw-bold); color: var(--primary);">${j(e.totalTransferredOut)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred In</div>
          <div style="font-weight: var(--fw-bold); color: var(--info);">${j(e.totalTransferredIn)}</div>
        </div>
      </div>

      <h4 style="font-size: var(--fs-md); font-weight: var(--fw-bold); margin-bottom: var(--space-2);">Account Transactions</h4>
      <div style="max-height: 250px; overflow-y: auto;">
        ${e.transactions.length>0?Gi(e.transactions,{showActions:!1,showDate:!0}):'<div style="font-size: var(--fs-sm); color: var(--text-tertiary); text-align: center; padding: 16px;">No transactions for this account.</div>'}
      </div>
    </div>
  `;ue({title:"Account Details",content:i,footer:`
    <button class="btn btn-outline btn-sm" id="btn-edit-account">✏️ Edit Account</button>
    <button class="btn btn-danger btn-sm" id="btn-delete-account">🗑️ Delete Account</button>
  `,onOpen:r=>{r.querySelector("#btn-edit-account").onclick=()=>{Ot(),PS(n,t)},r.querySelector("#btn-delete-account").onclick=async()=>{if(Ot(),await $r({icon:"🗑️",title:"Delete Account",message:`Are you sure you want to delete ${n.name}? Transactions assigned to this account will remain in history.`,danger:!0}))try{await VA(Ln.user.uid,n.id),K.success(`Account ${n.name} deleted.`),t&&t()}catch{K.error("Unable to delete account.")}}}})}function PS(n,t){const e=`
    <form id="edit-account-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="edit-acc-name">Account Name</label>
        <input type="text" id="edit-acc-name" class="form-input" value="${n.name}" required />
        <div class="form-error" id="edit-acc-name-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-type">Account Type</label>
        <select id="edit-acc-type" class="form-select" required>
          <option value="Cash" ${n.type==="Cash"?"selected":""}>💵 Cash</option>
          <option value="Bank" ${n.type==="Bank"?"selected":""}>🏦 Bank Account</option>
          <option value="UPI" ${n.type==="UPI"?"selected":""}>📱 UPI / Wallet</option>
          <option value="Other" ${n.type==="Other"?"selected":""}>💳 Other</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-initial">Initial Balance (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="edit-acc-initial" class="form-input" value="${n.initialBalance||0}" step="any" min="0" required />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-last4">Last 4 Digits (Optional)</label>
        <input type="text" id="edit-acc-last4" class="form-input" value="${n.last4Digits||""}" maxlength="4" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-update-account">
        Update Account
      </button>
    </form>
  `;ue({title:"✏️ Edit Account",content:e,onOpen:i=>{i.querySelector("#edit-account-form").onsubmit=async s=>{s.preventDefault();const r=i.querySelector("#edit-acc-name").value,o=i.querySelector("#edit-acc-type").value,a=i.querySelector("#edit-acc-initial").value,c=i.querySelector("#edit-acc-last4").value,l=Ja(r);if(l){i.querySelector("#edit-acc-name-error").textContent=l;return}const h=i.querySelector("#btn-update-account");h.disabled=!0,h.innerHTML='<span class="spinner"></span> Updating...';try{await LA(Ln.user.uid,n.id,{name:r,type:o,initialBalance:Number(a),last4Digits:c}),Ot(),K.success("Account updated!"),t&&t()}catch{K.error("Unable to update account."),h.disabled=!1,h.innerHTML="Update Account"}}}})}let Ie={user:null,profile:null,accounts:[],transactions:[]},Q={searchQuery:"",typeFilter:"ALL",accountFilter:"ALL",dateFilter:"ALL",customDate:"",categoryFilter:"ALL"};function k_(n){Ie={...Ie,...n};const t=M_(),e=[...Br.map(i=>i.value),...Zu.map(i=>i.value)];return`
    <div class="page animate-fade-in">
      <div class="page-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <h1 class="page-title">All Activity 📜</h1>
          <p class="page-subtitle">Search, filter, edit, or delete transactions and account transfers.</p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-income btn-sm" id="btn-tx-add-income">+ Add Money</button>
          <button class="btn btn-expense btn-sm" id="btn-tx-add-expense">− Add Expense</button>
          <button class="btn btn-outline btn-sm" id="btn-tx-transfer">↔ Transfer</button>
        </div>
      </div>

      <!-- Search & Filters Bar -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        <!-- Search Input -->
        <div class="form-group search-bar" style="margin-bottom: var(--space-3);">
          <span class="search-icon">🔍</span>
          <input type="text" id="tx-search-input" class="form-input" placeholder="Search by reason, category, account, or notes..." value="${Q.searchQuery}" />
          <button class="search-clear ${Q.searchQuery?"visible":""}" id="tx-search-clear">✕</button>
        </div>

        <!-- Filter Chips: Type -->
        <div class="chips-scroll" style="margin-bottom: var(--space-3);">
          <button class="chip ${Q.typeFilter==="ALL"?"active":""}" data-filter-type="ALL">All (${Ie.transactions.length})</button>
          <button class="chip chip-income ${Q.typeFilter==="INCOME"?"active":""}" data-filter-type="INCOME">🟢 Money Added</button>
          <button class="chip chip-expense ${Q.typeFilter==="EXPENSE"?"active":""}" data-filter-type="EXPENSE">🔴 Expenses</button>
          <button class="chip ${Q.typeFilter==="TRANSFER"?"active":""}" data-filter-type="TRANSFER" style="${Q.typeFilter==="TRANSFER"?"background: var(--primary); color: white;":""}">🔄 Transfers</button>
        </div>

        <!-- Dropdowns: Account, Category, & Date Filters -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <select id="tx-account-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Accounts</option>
            ${Ie.accounts.map(i=>`
              <option value="${i.id}" ${Q.accountFilter===i.id?"selected":""}>${i.icon||"🏦"} ${i.name}</option>
            `).join("")}
          </select>

          <div class="chips-scroll" style="margin-bottom: 0;">
            <button class="chip ${Q.dateFilter==="ALL"?"active":""}" data-filter-date="ALL">All Time</button>
            <button class="chip ${Q.dateFilter==="TODAY"?"active":""}" data-filter-date="TODAY">Today</button>
            <button class="chip ${Q.dateFilter==="WEEK"?"active":""}" data-filter-date="WEEK">This Week</button>
            <button class="chip ${Q.dateFilter==="MONTH"?"active":""}" data-filter-date="MONTH">This Month</button>
            <button class="chip ${Q.dateFilter==="CUSTOM"?"active":""}" data-filter-date="CUSTOM">Custom Date</button>
          </div>

          ${Q.dateFilter==="CUSTOM"?`
            <input type="date" id="tx-custom-date" class="form-input" style="width: auto; min-height: 36px; padding: 4px 8px; font-size: 13px;" value="${Q.customDate}" />
          `:""}

          <select id="tx-category-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Categories</option>
            ${Array.from(new Set(e)).map(i=>`
              <option value="${i}" ${Q.categoryFilter===i?"selected":""}>${i}</option>
            `).join("")}
          </select>
        </div>
      </div>

      <!-- Result Count -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3); padding: 0 4px;">
        <span style="font-size: var(--fs-sm); color: var(--text-secondary);">
          Showing <strong>${t.length}</strong> activity item${t.length===1?"":"s"}
        </span>
      </div>

      <!-- Activity List -->
      <div class="card card-flat" style="padding: 0;" id="tx-list-container">
        ${R_(t)}
      </div>
    </div>
  `}function R_(n){return Ie.transactions.length===0?C_():n.length===0?ES():Gi(n,{showActions:!0,showDate:!0,showNotes:!0,accounts:Ie.accounts})}function M_(){let n=[...Ie.transactions];if(Q.searchQuery){const e=Q.searchQuery.toLowerCase();n=n.filter(i=>{const s=Ie.accounts.find(o=>o.id===i.sourceAccountId),r=Ie.accounts.find(o=>o.id===i.destinationAccountId);return i.reason&&i.reason.toLowerCase().includes(e)||i.category&&i.category.toLowerCase().includes(e)||i.notes&&i.notes.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)||r&&r.name.toLowerCase().includes(e)})}if(Q.typeFilter!=="ALL"&&(n=n.filter(e=>e.type===Q.typeFilter)),Q.accountFilter!=="ALL"){const e=Q.accountFilter;n=n.filter(i=>i.sourceAccountId===e||i.destinationAccountId===e)}const t=Fr();if(Q.dateFilter==="TODAY")n=n.filter(e=>e.date===t);else if(Q.dateFilter==="WEEK"){const{start:e,end:i}=E_(t);n=n.filter(s=>s.date>=e&&s.date<=i)}else if(Q.dateFilter==="MONTH"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;n=n.filter(i=>i.date&&i.date.startsWith(e))}else Q.dateFilter==="CUSTOM"&&Q.customDate&&(n=n.filter(e=>e.date===Q.customDate));return Q.categoryFilter!=="ALL"&&(n=n.filter(e=>e.category===Q.categoryFilter)),n}function D_(n){const t=()=>{const h=document.getElementById("tx-list-container");if(h){const d=M_();h.innerHTML=R_(d),np(n)}},e=document.getElementById("tx-search-input"),i=document.getElementById("tx-search-clear");e&&(e.oninput=h=>{Q.searchQuery=h.target.value,i&&i.classList.toggle("visible",!!Q.searchQuery),t()}),i&&(i.onclick=()=>{Q.searchQuery="",e&&(e.value=""),i.classList.remove("visible"),t()}),document.querySelectorAll("[data-filter-type]").forEach(h=>{h.onclick=()=>{document.querySelectorAll("[data-filter-type]").forEach(d=>d.classList.remove("active")),h.classList.add("active"),Q.typeFilter=h.dataset.filterType,t()}});const s=document.getElementById("tx-account-filter");s&&(s.onchange=h=>{Q.accountFilter=h.target.value,t()}),document.querySelectorAll("[data-filter-date]").forEach(h=>{h.onclick=()=>{if(document.querySelectorAll("[data-filter-date]").forEach(d=>d.classList.remove("active")),h.classList.add("active"),Q.dateFilter=h.dataset.filterDate,Q.dateFilter==="CUSTOM"){const d=document.querySelector(".page");d&&(d.outerHTML=k_(Ie),D_(n))}else t()}});const r=document.getElementById("tx-custom-date");r&&(r.onchange=h=>{Q.customDate=h.target.value,t()});const o=document.getElementById("tx-category-filter");o&&(o.onchange=h=>{Q.categoryFilter=h.target.value,t()});const a=document.getElementById("btn-tx-add-income");a&&(a.onclick=()=>gi("INCOME",n));const c=document.getElementById("btn-tx-add-expense");c&&(c.onclick=()=>gi("EXPENSE",n));const l=document.getElementById("btn-tx-transfer");l&&(l.onclick=()=>eh(n)),np(n)}function np(n){document.querySelectorAll("#tx-list-container .transaction-action-btn[data-action]").forEach(t=>{t.onclick=e=>{e.stopPropagation();const i=t.dataset.action,s=t.dataset.txId,r=Ie.transactions.find(o=>o.id===s);r&&(i==="edit"?r.type==="TRANSFER"?ih(r,n):nh(r,n):i==="delete"&&sh(r,n))}})}let ge={user:null,profile:null,accounts:[],transactions:[]},Qe="DAY",Ls=Fr(),Rl=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;function jo(n){ge={...ge,...n};let t="",e="";if(Qe==="DAY"){const i=I_(ge.transactions,Ls);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Added</div>
          <div class="daily-summary-value income">${j(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Spent</div>
          <div class="daily-summary-value expense">${j(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${j(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Change</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${j(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?Gi(i.transactions,{showActions:!0,showDate:!1,accounts:ge.accounts}):jc()}else if(Qe==="WEEK"){const i=vS(ge.transactions,Ls);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Income</div>
          <div class="daily-summary-value income">${j(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Expenses</div>
          <div class="daily-summary-value expense">${j(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${j(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${j(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?Gi(i.transactions,{showActions:!0,showDate:!0,accounts:ge.accounts}):jc()}else if(Qe==="MONTH"){const i=x_(ge.transactions,Rl);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Income</div>
          <div class="daily-summary-value income">${j(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Expenses</div>
          <div class="daily-summary-value expense">${j(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${j(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${j(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?Gi(i.transactions,{showActions:!0,showDate:!0,accounts:ge.accounts}):jc()}return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Date-wise Money Control 📅</h1>
        <p class="page-subtitle">Track income, expenses, and account transfers on any specific date.</p>
      </div>

      <!-- View Switcher Tabs -->
      <div class="tabs">
        <div class="tab ${Qe==="DAY"?"active":""}" data-view="DAY">Day View</div>
        <div class="tab ${Qe==="WEEK"?"active":""}" data-view="WEEK">Week View</div>
        <div class="tab ${Qe==="MONTH"?"active":""}" data-view="MONTH">Month View</div>
      </div>

      <!-- Date Controls -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        ${Qe==="MONTH"?`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <label class="form-label" style="margin: 0; font-weight: var(--fw-semibold);">Select Month:</label>
            <input type="month" id="mc-month-picker" class="form-input" style="width: auto;" value="${Rl}" />
          </div>
        `:`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <span style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">
                ${Qe==="DAY"?"Selected Date":"Week Containing"}
              </span>
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${lS(Ls)}</div>
            </div>
            <input type="date" id="mc-date-picker" class="form-input" style="width: auto;" value="${Ls}" />
          </div>
        `}
      </div>

      <!-- Activity List for Date -->
      <div class="card card-flat" style="padding: 0; margin-bottom: var(--space-6);">
        ${e}
      </div>

      <!-- Daily / Summary Breakdown -->
      ${t}
    </div>
  `}function qo(n){document.querySelectorAll(".tab[data-view]").forEach(i=>{i.onclick=()=>{Qe=i.dataset.view;const s=document.querySelector(".page");s&&(s.outerHTML=jo(ge),qo(n))}});const t=document.getElementById("mc-date-picker");t&&(t.onchange=i=>{Ls=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=jo(ge),qo(n))});const e=document.getElementById("mc-month-picker");e&&(e.onchange=i=>{Rl=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=jo(ge),qo(n))}),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(i=>{i.onclick=s=>{s.stopPropagation();const r=i.dataset.action,o=i.dataset.txId,a=ge.transactions.find(c=>c.id===o);a&&(r==="edit"?a.type==="TRANSFER"?ih(a,n):nh(a,n):r==="delete"&&sh(a,n))}})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Ur(n){return n+.5|0}const An=(n,t,e)=>Math.max(Math.min(n,e),t);function Vs(n){return An(Ur(n*2.55),0,255)}function Vn(n){return An(Ur(n*255),0,255)}function tn(n){return An(Ur(n/2.55)/100,0,1)}function ip(n){return An(Ur(n*100),0,100)}const pe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ml=[..."0123456789ABCDEF"],CS=n=>Ml[n&15],kS=n=>Ml[(n&240)>>4]+Ml[n&15],yo=n=>(n&240)>>4===(n&15),RS=n=>yo(n.r)&&yo(n.g)&&yo(n.b)&&yo(n.a);function MS(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&pe[n[1]]*17,g:255&pe[n[2]]*17,b:255&pe[n[3]]*17,a:t===5?pe[n[4]]*17:255}:(t===7||t===9)&&(e={r:pe[n[1]]<<4|pe[n[2]],g:pe[n[3]]<<4|pe[n[4]],b:pe[n[5]]<<4|pe[n[6]],a:t===9?pe[n[7]]<<4|pe[n[8]]:255})),e}const DS=(n,t)=>n<255?t(n):"";function OS(n){var t=RS(n)?CS:kS;return n?"#"+t(n.r)+t(n.g)+t(n.b)+DS(n.a,t):void 0}const NS=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function O_(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function LS(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function VS(n,t,e){const i=O_(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function FS(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function rh(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let c,l,h;return r!==o&&(h=r-o,l=a>.5?h/(2-r-o):h/(r+o),c=FS(e,i,s,h,r),c=c*60+.5),[c|0,l||0,a]}function oh(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(Vn)}function ah(n,t,e){return oh(O_,n,t,e)}function BS(n,t,e){return oh(VS,n,t,e)}function $S(n,t,e){return oh(LS,n,t,e)}function N_(n){return(n%360+360)%360}function US(n){const t=NS.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?Vs(+t[5]):Vn(+t[5]));const s=N_(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=BS(s,r,o):t[1]==="hsv"?i=$S(s,r,o):i=ah(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function zS(n,t){var e=rh(n);e[0]=N_(e[0]+t),e=ah(e),n.r=e[0],n.g=e[1],n.b=e[2]}function jS(n){if(!n)return;const t=rh(n),e=t[0],i=ip(t[1]),s=ip(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${tn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const sp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},rp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function qS(){const n={},t=Object.keys(rp),e=Object.keys(sp);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,sp[r]);r=parseInt(rp[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let _o;function HS(n){_o||(_o=qS(),_o.transparent=[0,0,0,0]);const t=_o[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const WS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function GS(n){const t=WS.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?Vs(o):An(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?Vs(i):An(i,0,255)),s=255&(t[4]?Vs(s):An(s,0,255)),r=255&(t[6]?Vs(r):An(r,0,255)),{r:i,g:s,b:r,a:e}}}function KS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${tn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const qc=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Ni=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function YS(n,t,e){const i=Ni(tn(n.r)),s=Ni(tn(n.g)),r=Ni(tn(n.b));return{r:Vn(qc(i+e*(Ni(tn(t.r))-i))),g:Vn(qc(s+e*(Ni(tn(t.g))-s))),b:Vn(qc(r+e*(Ni(tn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function vo(n,t,e){if(n){let i=rh(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=ah(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function L_(n,t){return n&&Object.assign(t||{},n)}function op(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Vn(n[3]))):(t=L_(n,{r:0,g:0,b:0,a:1}),t.a=Vn(t.a)),t}function XS(n){return n.charAt(0)==="r"?GS(n):US(n)}class dr{constructor(t){if(t instanceof dr)return t;const e=typeof t;let i;e==="object"?i=op(t):e==="string"&&(i=MS(t)||HS(t)||XS(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=L_(this._rgb);return t&&(t.a=tn(t.a)),t}set rgb(t){this._rgb=op(t)}rgbString(){return this._valid?KS(this._rgb):void 0}hexString(){return this._valid?OS(this._rgb):void 0}hslString(){return this._valid?jS(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=YS(this._rgb,t._rgb,e)),this}clone(){return new dr(this.rgb)}alpha(t){return this._rgb.a=Vn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Ur(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return vo(this._rgb,2,t),this}darken(t){return vo(this._rgb,2,-t),this}saturate(t){return vo(this._rgb,1,t),this}desaturate(t){return vo(this._rgb,1,-t),this}rotate(t){return zS(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Xe(){}const QS=(()=>{let n=0;return()=>n++})();function Z(n){return n==null}function vt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function nt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function xt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function de(n,t){return xt(n)?n:t}function Y(n,t){return typeof n>"u"?t:n}const JS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,V_=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function dt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function ct(n,t,e,i){let s,r,o;if(vt(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(nt(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function wa(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Ea(n){if(vt(n))return n.map(Ea);if(nt(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=Ea(n[e[s]]);return t}return n}function F_(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function ZS(n,t,e,i){if(!F_(n))return;const s=t[n],r=e[n];nt(s)&&nt(r)?fr(s,r,i):t[n]=Ea(r)}function fr(n,t,e){const i=vt(t)?t:[t],s=i.length;if(!nt(n))return n;e=e||{};const r=e.merger||ZS;let o;for(let a=0;a<s;++a){if(o=i[a],!nt(o))continue;const c=Object.keys(o);for(let l=0,h=c.length;l<h;++l)r(c[l],n,o,e)}return n}function Xs(n,t){return fr(n,t,{merger:tP})}function tP(n,t,e){if(!F_(n))return;const i=t[n],s=e[n];nt(i)&&nt(s)?Xs(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Ea(s))}const ap={"":n=>n,x:n=>n.x,y:n=>n.y};function eP(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function nP(n){const t=eP(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function Hn(n,t){return(ap[t]||(ap[t]=nP(t)))(n)}function ch(n){return n.charAt(0).toUpperCase()+n.slice(1)}const pr=n=>typeof n<"u",Wn=n=>typeof n=="function",cp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function iP(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const ot=Math.PI,yt=2*ot,sP=yt+ot,Ta=Number.POSITIVE_INFINITY,rP=ot/180,Ct=ot/2,si=ot/4,lp=ot*2/3,Sn=Math.log10,ze=Math.sign;function Qs(n,t,e){return Math.abs(n-t)<e}function up(n){const t=Math.round(n);n=Qs(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Sn(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function oP(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function aP(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function ns(n){return!aP(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function cP(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function B_(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function xe(n){return n*(ot/180)}function lh(n){return n*(180/ot)}function hp(n){if(!xt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function $_(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*ot&&(r+=yt),{angle:r,distance:s}}function Dl(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function lP(n,t){return(n-t+sP)%yt-ot}function Xt(n){return(n%yt+yt)%yt}function gr(n,t,e,i){const s=Xt(n),r=Xt(t),o=Xt(e),a=Xt(r-s),c=Xt(o-s),l=Xt(s-r),h=Xt(s-o);return s===r||s===o||i&&r===o||a>c&&l<h}function Ft(n,t,e){return Math.max(t,Math.min(e,n))}function uP(n){return Ft(n,-32768,32767)}function sn(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function uh(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const rn=(n,t,e,i)=>uh(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),hP=(n,t,e)=>uh(n,e,i=>n[i][t]>=e);function dP(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const U_=["push","pop","shift","splice","unshift"];function fP(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),U_.forEach(e=>{const i="_onData"+ch(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function dp(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(U_.forEach(r=>{delete n[r]}),delete n._chartjs)}function z_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const j_=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function q_(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,j_.call(window,()=>{i=!1,n.apply(t,e)}))}}function pP(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const hh=n=>n==="start"?"left":n==="end"?"right":"center",Kt=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,gP=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function H_(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:f,minDefined:g,maxDefined:y}=o.getUserBounds();if(g){if(s=Math.min(rn(c,h,d).lo,e?i:rn(t,h,o.getPixelForValue(d)).lo),l){const v=c.slice(0,s+1).reverse().findIndex(_=>!Z(_[a.axis]));s-=Math.max(0,v)}s=Ft(s,0,i-1)}if(y){let v=Math.max(rn(c,o.axis,f,!0).hi+1,e?0:rn(t,h,o.getPixelForValue(f),!0).hi+1);if(l){const _=c.slice(v-1).findIndex(I=>!Z(I[a.axis]));v+=Math.max(0,_)}r=Ft(v,s,i)-s}else r=i-s}return{start:s,count:r}}function W_(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const bo=n=>n===0||n===1,fp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*yt/e)),pp=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*yt/e)+1,Js={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Ct)+1,easeOutSine:n=>Math.sin(n*Ct),easeInOutSine:n=>-.5*(Math.cos(ot*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>bo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>bo(n)?n:fp(n,.075,.3),easeOutElastic:n=>bo(n)?n:pp(n,.075,.3),easeInOutElastic(n){return bo(n)?n:n<.5?.5*fp(n*2,.1125,.45):.5+.5*pp(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Js.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Js.easeInBounce(n*2)*.5:Js.easeOutBounce(n*2-1)*.5+.5};function dh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function gp(n){return dh(n)?n:new dr(n)}function Hc(n){return dh(n)?n:new dr(n).saturate(.5).darken(.1).hexString()}const mP=["x","y","borderWidth","radius","tension"],yP=["color","borderColor","backgroundColor"];function _P(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:yP},numbers:{type:"number",properties:mP}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function vP(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const mp=new Map;function bP(n,t){t=t||{};const e=n+JSON.stringify(t);let i=mp.get(e);return i||(i=new Intl.NumberFormat(n,t),mp.set(e,i)),i}function zr(n,t,e){return bP(t,e).format(n)}const G_={values(n){return vt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=wP(n,e)}const o=Sn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),zr(n,i,c)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(Sn(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?G_.numeric.call(this,n,t,e):""}};function wP(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Za={formatters:G_};function EP(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Za.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const xi=Object.create(null),Ol=Object.create(null);function Zs(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function Wc(n,t,e){return typeof t=="string"?fr(Zs(n,t),e):fr(Zs(n,""),t)}class TP{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Hc(s.backgroundColor),this.hoverBorderColor=(i,s)=>Hc(s.borderColor),this.hoverColor=(i,s)=>Hc(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Wc(this,t,e)}get(t){return Zs(this,t)}describe(t,e){return Wc(Ol,t,e)}override(t,e){return Wc(xi,t,e)}route(t,e,i,s){const r=Zs(this,t),o=Zs(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[s];return nt(c)?Object.assign({},l,c):Y(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var bt=new TP({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[_P,vP,EP]);function IP(n){return!n||Z(n.size)||Z(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Ia(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function xP(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,h,d,f;for(c=0;c<a;c++)if(d=e[c],d!=null&&!vt(d))o=Ia(n,s,r,o,d);else if(vt(d))for(l=0,h=d.length;l<h;l++)f=d[l],f!=null&&!vt(f)&&(o=Ia(n,s,r,o,f));n.restore();const g=r.length/2;if(g>e.length){for(c=0;c<g;c++)delete s[r[c]];r.splice(0,g)}return o}function ri(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function yp(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Nl(n,t,e,i){K_(n,t,e,i,null)}function K_(n,t,e,i,s){let r,o,a,c,l,h,d,f;const g=t.pointStyle,y=t.rotation,v=t.radius;let _=(y||0)*rP;if(g&&typeof g=="object"&&(r=g.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(_),n.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),g){default:s?n.ellipse(e,i,s/2,v,0,0,yt):n.arc(e,i,v,0,yt),n.closePath();break;case"triangle":h=s?s/2:v,n.moveTo(e+Math.sin(_)*h,i-Math.cos(_)*v),_+=lp,n.lineTo(e+Math.sin(_)*h,i-Math.cos(_)*v),_+=lp,n.lineTo(e+Math.sin(_)*h,i-Math.cos(_)*v),n.closePath();break;case"rectRounded":l=v*.516,c=v-l,o=Math.cos(_+si)*c,d=Math.cos(_+si)*(s?s/2-l:c),a=Math.sin(_+si)*c,f=Math.sin(_+si)*(s?s/2-l:c),n.arc(e-d,i-a,l,_-ot,_-Ct),n.arc(e+f,i-o,l,_-Ct,_),n.arc(e+d,i+a,l,_,_+Ct),n.arc(e-f,i+o,l,_+Ct,_+ot),n.closePath();break;case"rect":if(!y){c=Math.SQRT1_2*v,h=s?s/2:c,n.rect(e-h,i-c,2*h,2*c);break}_+=si;case"rectRot":d=Math.cos(_)*(s?s/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(s?s/2:v),n.moveTo(e-d,i-a),n.lineTo(e+f,i-o),n.lineTo(e+d,i+a),n.lineTo(e-f,i+o),n.closePath();break;case"crossRot":_+=si;case"cross":d=Math.cos(_)*(s?s/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(s?s/2:v),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"star":d=Math.cos(_)*(s?s/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(s?s/2:v),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o),_+=si,d=Math.cos(_)*(s?s/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(s?s/2:v),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"line":o=s?s/2:Math.cos(_)*v,a=Math.sin(_)*v,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(_)*(s?s/2:v),i+Math.sin(_)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function on(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function tc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function ec(n){n.restore()}function AP(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function SP(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function PP(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),Z(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function CP(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,h=s.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function kP(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Ai(n,t,e,i,s,r={}){const o=vt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=s.string,PP(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&kP(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),Z(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,i,r.maxWidth)),n.fillText(l,e,i,r.maxWidth),CP(n,e,i,l,r),i+=Number(s.lineHeight);n.restore()}function mr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*ot,ot,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,ot,Ct,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Ct,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Ct,!0),n.lineTo(e+o.topLeft,i)}const RP=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,MP=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function DP(n,t){const e=(""+n).match(RP);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const OP=n=>+n||0;function fh(n,t){const e={},i=nt(t),s=i?Object.keys(t):t,r=nt(n)?i?o=>Y(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=OP(r(o));return e}function Y_(n){return fh(n,{top:"y",right:"x",bottom:"y",left:"x"})}function mi(n){return fh(n,["topLeft","topRight","bottomLeft","bottomRight"])}function te(n){const t=Y_(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Nt(n,t){n=n||{},t=t||bt.font;let e=Y(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Y(n.style,t.style);i&&!(""+i).match(MP)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Y(n.family,t.family),lineHeight:DP(Y(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Y(n.weight,t.weight),string:""};return s.string=IP(s),s}function Fs(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function NP(n,t,e){const{min:i,max:s}=n,r=V_(t,(s-i)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Zn(n,t){return Object.assign(Object.create(n),t)}function ph(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=Z_("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>ph([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Q_(a,c,()=>jP(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return vp(a).includes(c)},ownKeys(a){return vp(a)},set(a,c,l){const h=a._storage||(a._storage=s());return a[c]=h[c]=l,delete a._keys,!0}})}function is(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:X_(n,i),setContext:r=>is(n,r,e,i),override:r=>is(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Q_(r,o,()=>VP(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function X_(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:Wn(e)?e:()=>e,isIndexable:Wn(i)?i:()=>i}}const LP=(n,t)=>n?n+ch(t):t,gh=(n,t)=>nt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Q_(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function VP(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return Wn(a)&&o.isScriptable(t)&&(a=FP(t,a,n,e)),vt(a)&&a.length&&(a=BP(t,a,n,o.isIndexable)),gh(t,a)&&(a=is(a,s,r&&r[t],o)),a}function FP(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||i);return a.delete(n),gh(n,c)&&(c=mh(s._scopes,s,n,c)),c}function BP(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(nt(t[0])){const c=t,l=s._scopes.filter(h=>h!==c);t=[];for(const h of c){const d=mh(l,s,n,h);t.push(is(d,r,o&&o[n],a))}}return t}function J_(n,t,e){return Wn(n)?n(t,e):n}const $P=(n,t)=>n===!0?t:typeof n=="string"?Hn(t,n):void 0;function UP(n,t,e,i,s){for(const r of t){const o=$P(e,r);if(o){n.add(o);const a=J_(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function mh(n,t,e,i){const s=t._rootScopes,r=J_(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let c=_p(a,o,e,r||e,i);return c===null||typeof r<"u"&&r!==e&&(c=_p(a,o,r,c,i),c===null)?!1:ph(Array.from(a),[""],s,r,()=>zP(t,e,i))}function _p(n,t,e,i,s){for(;e;)e=UP(n,t,e,i,s);return e}function zP(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return vt(s)&&nt(e)?e:s||{}}function jP(n,t,e,i){let s;for(const r of t)if(s=Z_(LP(r,n),e),typeof s<"u")return gh(n,s)?mh(e,i,n,s):s}function Z_(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function vp(n){let t=n._keys;return t||(t=n._keys=qP(n._scopes)),t}function qP(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function tv(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,h;for(a=0,c=i;a<c;++a)l=a+e,h=t[l],o[a]={r:s.parse(Hn(h,r),l)};return o}const HP=Number.EPSILON||1e-14,ss=(n,t)=>t<n.length&&!n[t].skip&&n[t],ev=n=>n==="x"?"y":"x";function WP(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Dl(r,s),c=Dl(o,r);let l=a/(a+c),h=c/(a+c);l=isNaN(l)?0:l,h=isNaN(h)?0:h;const d=i*l,f=i*h;return{previous:{x:r.x-d*(o.x-s.x),y:r.y-d*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function GP(n,t,e){const i=n.length;let s,r,o,a,c,l=ss(n,0);for(let h=0;h<i-1;++h)if(c=l,l=ss(n,h+1),!(!c||!l)){if(Qs(t[h],0,HP)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function KP(n,t,e="x"){const i=ev(e),s=n.length;let r,o,a,c=ss(n,0);for(let l=0;l<s;++l){if(o=a,a=c,c=ss(n,l+1),!a)continue;const h=a[e],d=a[i];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${i}`]=d-r*t[l]),c&&(r=(c[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${i}`]=d+r*t[l])}}function YP(n,t="x"){const e=ev(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=ss(n,0);for(o=0;o<i;++o)if(a=c,c=l,l=ss(n,o+1),!!c){if(l){const h=l[t]-c[t];s[o]=h!==0?(l[e]-c[e])/h:0}r[o]=a?l?ze(s[o-1])!==ze(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}GP(n,s,r),KP(n,r,t)}function wo(n,t,e){return Math.max(Math.min(n,e),t)}function XP(n,t){let e,i,s,r,o,a=on(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&on(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=wo(s.cp1x,t.left,t.right),s.cp1y=wo(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=wo(s.cp2x,t.left,t.right),s.cp2y=wo(s.cp2y,t.top,t.bottom)))}function QP(n,t,e,i,s){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")YP(n,s);else{let l=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=WP(l,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&XP(n,e)}function yh(){return typeof window<"u"&&typeof document<"u"}function _h(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function xa(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const nc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function JP(n,t){return nc(n).getPropertyValue(t)}const ZP=["top","right","bottom","left"];function yi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=ZP[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const tC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function eC(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(tC(s,r,n.target))a=s,c=r;else{const l=t.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function li(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=nc(e),r=s.boxSizing==="border-box",o=yi(s,"padding"),a=yi(s,"border","width"),{x:c,y:l,box:h}=eC(n,e),d=o.left+(h&&a.left),f=o.top+(h&&a.top);let{width:g,height:y}=t;return r&&(g-=o.width+a.width,y-=o.height+a.height),{x:Math.round((c-d)/g*e.width/i),y:Math.round((l-f)/y*e.height/i)}}function nC(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&_h(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=nc(r),c=yi(a,"border","width"),l=yi(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,i=xa(a.maxWidth,r,"clientWidth"),s=xa(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||Ta,maxHeight:s||Ta}}const Pn=n=>Math.round(n*10)/10;function iC(n,t,e,i){const s=nc(n),r=yi(s,"margin"),o=xa(s.maxWidth,n,"clientWidth")||Ta,a=xa(s.maxHeight,n,"clientHeight")||Ta,c=nC(n,t,e);let{width:l,height:h}=c;if(s.boxSizing==="content-box"){const f=yi(s,"border","width"),g=yi(s,"padding");l-=g.width+f.width,h-=g.height+f.height}return l=Math.max(0,l-r.width),h=Math.max(0,i?l/i:h-r.height),l=Pn(Math.min(l,o,c.maxWidth)),h=Pn(Math.min(h,a,c.maxHeight)),l&&!h&&(h=Pn(l/2)),(t!==void 0||e!==void 0)&&i&&c.height&&h>c.height&&(h=c.height,l=Pn(Math.floor(h*i))),{width:l,height:h}}function bp(n,t,e){const i=t||1,s=Pn(n.height*i),r=Pn(n.width*i);n.height=Pn(n.height),n.width=Pn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const sC=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};yh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function wp(n,t){const e=JP(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ui(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function rC(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function oC(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=ui(n,s,e),a=ui(s,r,e),c=ui(r,t,e),l=ui(o,a,e),h=ui(a,c,e);return ui(l,h,e)}const aC=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},cC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Ki(n,t,e){return n?aC(t,e):cC()}function nv(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function iv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function sv(n){return n==="angle"?{between:gr,compare:lP,normalize:Xt}:{between:sn,compare:(t,e)=>t-e,normalize:t=>t}}function Ep({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function lC(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=sv(i),c=t.length;let{start:l,end:h,loop:d}=n,f,g;if(d){for(l+=c,h+=c,f=0,g=c;f<g&&o(a(t[l%c][i]),s,r);++f)l--,h--;l%=c,h%=c}return h<l&&(h+=c),{start:l,end:h,loop:d,style:n.style}}function rv(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=sv(i),{start:h,end:d,loop:f,style:g}=lC(n,t,e),y=[];let v=!1,_=null,I,C,R;const O=()=>c(s,R,I)&&a(s,R)!==0,D=()=>a(r,I)===0||c(r,R,I),L=()=>v||O(),T=()=>!v||D();for(let w=h,E=h;w<=d;++w)C=t[w%o],!C.skip&&(I=l(C[i]),I!==R&&(v=c(I,s,r),_===null&&L()&&(_=a(I,s)===0?w:E),_!==null&&T()&&(y.push(Ep({start:_,end:w,loop:f,count:o,style:g})),_=null),E=w,R=I));return _!==null&&y.push(Ep({start:_,end:d,loop:f,count:o,style:g})),y}function ov(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=rv(i[s],n.points,t);r.length&&e.push(...r)}return e}function uC(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function hC(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:t%s,end:(c-1)%s,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function dC(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=uC(e,s,r,i);if(i===!0)return Tp(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+s:a,l=!!n._fullLoop&&o===0&&a===s-1;return Tp(n,hC(e,o,c,l),e,t)}function Tp(n,t,e,i){return!i||!i.setContext||!e?t:fC(n,t,e,i)}function fC(n,t,e,i){const s=n._chart.getContext(),r=Ip(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let h=r,d=t[0].start,f=d;function g(y,v,_,I){const C=a?-1:1;if(y!==v){for(y+=c;e[y%c].skip;)y-=C;for(;e[v%c].skip;)v+=C;y%c!==v%c&&(l.push({start:y%c,end:v%c,loop:_,style:I}),h=I,d=v%c)}}for(const y of t){d=a?d:y.start;let v=e[d%c],_;for(f=d+1;f<=y.end;f++){const I=e[f%c];_=Ip(i.setContext(Zn(s,{type:"segment",p0:v,p1:I,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),pC(_,h)&&g(d,f-1,y.loop,h),v=I,h=_}d<f-1&&g(d,f-1,y.loop,h)}return l}function Ip(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function pC(n,t){if(!t)return!1;const e=[],i=function(s,r){return dh(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function Eo(n,t,e){return n.options.clip?n[e]:t[e]}function gC(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:Eo(e,t,"left"),right:Eo(e,t,"right"),top:Eo(i,t,"top"),bottom:Eo(i,t,"bottom")}:t}function av(n,t){const e=t._clip;if(e.disabled)return!1;const i=gC(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class mC{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=j_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Je=new mC;const xp="transparent",yC={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=gp(n||xp),s=i.valid&&gp(t||xp);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class _C{constructor(t,e,i,s){const r=e[i];s=Fs([t.to,s,r,t.from]);const o=Fs([t.from,r,s]);this._active=!0,this._fn=t.fn||yC[t.type||typeof o],this._easing=Js[t.easing]||Js.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Fs([t.to,e,s,t.from]),this._from=Fs([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}c=e/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class cv{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!nt(t))return;const e=Object.keys(bt.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!nt(r))return;const o={};for(const a of e)o[a]=r[a];(vt(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=bC(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&vC(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[l];let d=r[l];const f=i.get(l);if(d)if(f&&d.active()){d.update(f,h,a);continue}else d.cancel();if(!f||!f.duration){t[l]=h;continue}r[l]=d=new _C(f,t,l,h),s.push(d)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return Je.add(this._chart,i),!0}}function vC(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function bC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Ap(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function wC(n,t,e){if(e===!1)return!1;const i=Ap(n,e),s=Ap(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function EC(n){let t,e,i,s;return nt(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function lv(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Sp(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,c,l;if(t===null)return;let h=!1;for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===e){if(h=!0,i.all)continue;break}l=n.values[c],xt(l)&&(r||t===0||ze(t)===ze(l))&&(t+=l)}return!h&&!i.all?0:t}function TC(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,h;for(c=0,l=o.length;c<l;++c)h=o[c],a[c]={[s]:h,[r]:n[h]};return a}function Gc(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function IC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function xC(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function AC(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Pp(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Cp(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,h=IC(r,o,i),d=t.length;let f;for(let g=0;g<d;++g){const y=t[g],{[c]:v,[l]:_}=y,I=y._stacks||(y._stacks={});f=I[l]=AC(s,h,v),f[a]=_,f._top=Pp(f,o,!0,i.type),f._bottom=Pp(f,o,!1,i.type);const C=f._visualValues||(f._visualValues={});C[a]=_}}function Kc(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function SC(n,t){return Zn(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function PC(n,t,e){return Zn(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function xs(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const Yc=n=>n==="reset"||n==="none",kp=(n,t)=>t?n:Object.assign({},n),CC=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:lv(e,!0),values:null};class Ae{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Gc(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&xs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(d,f,g,y)=>d==="x"?f:d==="r"?y:g,r=e.xAxisID=Y(i.xAxisID,Kc(t,"x")),o=e.yAxisID=Y(i.yAxisID,Kc(t,"y")),a=e.rAxisID=Y(i.rAxisID,Kc(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),h=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&dp(this._data,this),t._stacked&&xs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(nt(e)){const s=this._cachedMeta;this._data=TC(e,s)}else if(i!==e){if(i){dp(i,this);const s=this._cachedMeta;xs(s),s._parsed=[]}e&&Object.isExtensible(e)&&fP(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=Gc(e.vScale,e),e.stack!==i.stack&&(s=!0,xs(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(Cp(this,e._parsed),e._stacked=Gc(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=t===0&&e===s.length?!0:i._sorted,l=t>0&&i._parsed[t-1],h,d,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{vt(s[t])?f=this.parseArrayData(i,s,t,e):nt(s[t])?f=this.parseObjectData(i,s,t,e):f=this.parsePrimitiveData(i,s,t,e);const g=()=>d[a]===null||l&&d[a]<l[a];for(h=0;h<e;++h)i._parsed[h+t]=d=f[h],c&&(g()&&(c=!1),l=d);i._sorted=c}o&&Cp(this,f)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),h=r===o,d=new Array(s);let f,g,y;for(f=0,g=s;f<g;++f)y=f+i,d[f]={[a]:h||r.parse(l[y],y),[c]:o.parse(e[y],y)};return d}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let c,l,h,d;for(c=0,l=s;c<l;++c)h=c+i,d=e[h],a[c]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let h,d,f,g;for(h=0,d=s;h<d;++h)f=h+i,g=e[f],l[h]={x:r.parse(Hn(g,a),f),y:o.parse(Hn(g,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:lv(s,!0),values:e._stacks[t.axis]._visualValues};return Sp(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Sp(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),c=CC(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=xC(a);let f,g;function y(){g=s[f];const v=g[a.axis];return!xt(g[t.axis])||h>v||d<v}for(f=0;f<o&&!(!y()&&(this.updateRangeFromParsed(l,t,g,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!y()){this.updateRangeFromParsed(l,t,g,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],xt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=EC(Y(this.options.clip,wC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,r,a,c),h=a;h<a+c;++h){const d=s[h];d.hidden||(d.active&&l?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=PC(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=SC(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&pr(i);if(a)return kp(a,c);const l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),d=s?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),h),g=Object.keys(bt.elements[t]),y=()=>this.getContext(i,s,e),v=l.resolveNamedOptions(f,g,y,d);return v.$shared&&(v.$shared=c,r[o]=Object.freeze(kp(v,c))),v}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),f=h.getOptionScopes(this.getDataset(),d);c=h.createResolver(f,this.getContext(t,i,e))}const l=new cv(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Yc(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){Yc(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!Yc(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&xs(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}B(Ae,"defaults",{}),B(Ae,"datasetElementType",null),B(Ae,"dataElementType",null);function kC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=z_(i.sort((s,r)=>s-r))}return n._cache.$bar}function RC(n){const t=n.iScale,e=kC(t,n.type);let i=t._length,s,r,o,a;const c=()=>{o===32767||o===-32768||(pr(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),c();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),c();return i}function MC(n,t,e,i){const s=e.barThickness;let r,o;return Z(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function DC(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:e.barPercentage,start:l}}function OC(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:s,end:r,min:o,max:a}}function uv(n,t,e,i){return vt(n)?OC(n,t,e,i):t[e.axis]=e.parse(n,i),t}function Rp(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,c=[];let l,h,d,f;for(l=e,h=e+i;l<h;++l)f=t[l],d={},d[s.axis]=a||s.parse(o[l],l),c.push(uv(f,d,r,l));return c}function Xc(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function NC(n,t,e){return n!==0?ze(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function LC(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function VC(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:h}=LC(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=l:(e._bottom||0)===i?s=h:(r[Mp(h,o,a,c)]=!0,s=l)),r[Mp(s,o,a,c)]=!0,n.borderSkipped=r}function Mp(n,t,e,i){return i?(n=FC(n,t,e),n=Dp(n,e,t)):n=Dp(n,t,e),n}function FC(n,t,e){return n===t?e:n===e?t:n}function Dp(n,t,e){return n==="start"?t:n==="end"?e:n}function BC(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Ho extends Ae{parsePrimitiveData(t,e,i,s){return Rp(t,e,i,s)}parseArrayData(t,e,i,s){return Rp(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,h=o.axis==="x"?a:c,d=[];let f,g,y,v;for(f=i,g=i+s;f<g;++f)v=e[f],y={},y[r.axis]=r.parse(Hn(v,l),f),d.push(uv(Hn(v,h),y,o,f));return d}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=Xc(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:f}=this._getSharedOptions(e,s);for(let g=e;g<e+i;g++){const y=this.getParsed(g),v=r||Z(y[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(g),_=this._calculateBarIndexPixels(g,h),I=(y._stacks||{})[a.axis],C={horizontal:l,base:v.base,enableBorderRadius:!I||Xc(y._custom)||o===I._top||o===I._bottom,x:l?v.head:_.center,y:l?_.center:v.head,height:l?_.size:Math.abs(v.size),width:l?Math.abs(v.size):_.size};f&&(C.options=d||this.resolveDataElementOptions(g,t[g].active?"active":s));const R=C.options||t[g].options;VC(C,R,I,o),BC(C,R,h.ratio),this.updateElement(t[g],g,C,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[i.axis],l=h=>{const d=h._parsed.find(g=>g[i.axis]===c),f=d&&d[h.vScale.axis];if(Z(f)||isNaN(f))return!0};for(const h of s)if(!(e!==void 0&&l(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Y(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||RC(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,h=Xc(l);let d=c[e.axis],f=0,g=i?this.applyStack(e,c,i):d,y,v;g!==d&&(f=g-d,g=d),h&&(d=l.barStart,g=l.barEnd-l.barStart,d!==0&&ze(d)!==ze(l.barEnd)&&(f=0),f+=d);const _=!Z(r)&&!h?r:f;let I=e.getPixelForValue(_);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(f+g):y=I,v=y-I,Math.abs(v)<o){v=NC(v,e,a)*o,d===a&&(I-=v/2);const C=e.getPixelForDecimal(0),R=e.getPixelForDecimal(1),O=Math.min(C,R),D=Math.max(C,R);I=Math.max(Math.min(I,D),O),y=I+v,i&&!h&&(c._stacks[e.axis]._visualValues[s]=e.getValueForPixel(y)-e.getValueForPixel(I))}if(I===e.getPixelForValue(a)){const C=ze(v)*e.getLineWidthForValue(a)/2;I+=C,v-=C}return{size:v,base:I,head:y,center:y+v/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=Y(s.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=s.barThickness==="flex"?DC(t,e,s,h*l):MC(t,e,s,h*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(Y(f,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+g;a=d.start+d.chunk*y+d.chunk/2,c=Math.min(o,d.chunk*d.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}B(Ho,"id","bar"),B(Ho,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),B(Ho,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Wo extends Ae{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Y(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Y(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:i[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,s),h=o.axis,d=a.axis;for(let f=e;f<e+i;f++){const g=t[f],y=!r&&this.getParsed(f),v={},_=v[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(y[h]),I=v[d]=r?a.getBasePixel():a.getPixelForValue(y[d]);v.skip=isNaN(_)||isNaN(I),l&&(v.options=c||this.resolveDataElementOptions(f,g.active?"active":s),r&&(v.options.radius=0)),this.updateElement(g,f,v,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Y(i&&i._custom,r),s}}B(Wo,"id","bubble"),B(Wo,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),B(Wo,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function $C(n,t,e){let i=1,s=1,r=0,o=0;if(t<yt){const a=n,c=a+t,l=Math.cos(a),h=Math.sin(a),d=Math.cos(c),f=Math.sin(c),g=(R,O,D)=>gr(R,a,c,!0)?1:Math.max(O,O*e,D,D*e),y=(R,O,D)=>gr(R,a,c,!0)?-1:Math.min(O,O*e,D,D*e),v=g(0,l,d),_=g(Ct,h,f),I=y(ot,l,d),C=y(ot+Ct,h,f);i=(v-I)/2,s=(_-C)/2,r=-(v+I)/2,o=-(_+C)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class di extends Ae{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=c=>+i[c];if(nt(i[t])){const{key:c="value"}=this._parsing;r=l=>+Hn(i[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return xe(this.options.rotation-90)}_getCircumference(){return xe(this.options.circumference)}_getRotationExtents(){let t=yt,e=-yt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(JS(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:y,offsetY:v}=$C(d,h,c),_=(i.width-o)/f,I=(i.height-o)/g,C=Math.max(Math.min(_,I)/2,0),R=V_(this.options.radius,C),O=Math.max(R*c,0),D=(R-O)/this._getVisibleDatasetWeightTotal();this.offsetX=y*R,this.offsetY=v*R,s.total=this.calculateTotal(),this.outerRadius=R-D*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-D*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/yt)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,f=r&&l.animateScale,g=f?0:this.innerRadius,y=f?0:this.outerRadius,{sharedOptions:v,includeOptions:_}=this._getSharedOptions(e,s);let I=this._getRotation(),C;for(C=0;C<e;++C)I+=this._circumference(C,r);for(C=e;C<e+i;++C){const R=this._circumference(C,r),O=t[C],D={x:h+this.offsetX,y:d+this.offsetY,startAngle:I,endAngle:I+R,circumference:R,outerRadius:y,innerRadius:g};_&&(D.options=v||this.resolveDataElementOptions(C,O.active?"active":s)),I+=R,this.updateElement(O,C,D,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?yt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=zr(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,c;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)c=a.resolveDataElementOptions(s),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Y(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}B(di,"id","doughnut"),B(di,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),B(di,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),B(di,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const d=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||d.borderRadius),index:l}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class Go extends Ae{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=H_(e,s,o);this._drawStart=a,this._drawCount=c,W_(e)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,s),f=o.axis,g=a.axis,{spanGaps:y,segment:v}=this.options,_=ns(y)?y:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||s==="none",C=e+i,R=t.length;let O=e>0&&this.getParsed(e-1);for(let D=0;D<R;++D){const L=t[D],T=I?L:{};if(D<e||D>=C){T.skip=!0;continue}const w=this.getParsed(D),E=Z(w[g]),x=T[f]=o.getPixelForValue(w[f],D),S=T[g]=r||E?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,w,c):w[g],D);T.skip=isNaN(x)||isNaN(S)||E,T.stop=D>0&&Math.abs(w[f]-O[f])>_,v&&(T.parsed=w,T.raw=l.data[D]),d&&(T.options=h||this.resolveDataElementOptions(D,L.active?"active":s)),I||this.updateElement(L,D,T,s),O=w}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}B(Go,"id","line"),B(Go,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),B(Go,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class tr extends Ae{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=zr(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return tv.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,h=l.xCenter,d=l.yCenter,f=l.getIndexAngle(0)-.5*ot;let g=f,y;const v=360/this.countVisibleElements();for(y=0;y<e;++y)g+=this._computeAngle(y,s,v);for(y=e;y<e+i;y++){const _=t[y];let I=g,C=g+this._computeAngle(y,s,v),R=o.getDataVisibility(y)?l.getDistanceFromCenterForValue(this.getParsed(y).r):0;g=C,r&&(c.animateScale&&(R=0),c.animateRotate&&(I=C=f));const O={x:h,y:d,innerRadius:0,outerRadius:R,startAngle:I,endAngle:C,options:this.resolveDataElementOptions(y,_.active?"active":s)};this.updateElement(_,y,O,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?xe(this.resolveDataElementOptions(t,e).angle||i):0}}B(tr,"id","polarArea"),B(tr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),B(tr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:s,lineWidth:c.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Ll extends di{}B(Ll,"id","pie"),B(Ll,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ko extends Ae{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return tv.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":s),h=r.getPointPositionForValue(a,this.getParsed(a).r),d=o?r.xCenter:h.x,f=o?r.yCenter:h.y,g={x:d,y:f,angle:h.angle,skip:isNaN(d)||isNaN(f),options:l};this.updateElement(c,a,g,s)}}}B(Ko,"id","radar"),B(Ko,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),B(Ko,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Yo extends Ae{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=H_(e,i,s);if(this._drawStart=r,this._drawCount=o,W_(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),d=this.getSharedOptions(h),f=this.includeOptions(s,d),g=o.axis,y=a.axis,{spanGaps:v,segment:_}=this.options,I=ns(v)?v:Number.POSITIVE_INFINITY,C=this.chart._animationsDisabled||r||s==="none";let R=e>0&&this.getParsed(e-1);for(let O=e;O<e+i;++O){const D=t[O],L=this.getParsed(O),T=C?D:{},w=Z(L[y]),E=T[g]=o.getPixelForValue(L[g],O),x=T[y]=r||w?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,L,c):L[y],O);T.skip=isNaN(E)||isNaN(x)||w,T.stop=O>0&&Math.abs(L[g]-R[g])>I,_&&(T.parsed=L,T.raw=l.data[O]),f&&(T.options=d||this.resolveDataElementOptions(O,D.active?"active":s)),C||this.updateElement(D,O,T,s),R=L}this.updateSharedOptions(d,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}B(Yo,"id","scatter"),B(Yo,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),B(Yo,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var UC=Object.freeze({__proto__:null,BarController:Ho,BubbleController:Wo,DoughnutController:di,LineController:Go,PieController:Ll,PolarAreaController:tr,RadarController:Ko,ScatterController:Yo});function oi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class vh{constructor(t){B(this,"options");this.options=t||{}}static override(t){Object.assign(vh.prototype,t)}init(){}formats(){return oi()}parse(){return oi()}format(){return oi()}add(){return oi()}diff(){return oi()}startOf(){return oi()}endOf(){return oi()}}var zC={_date:vh};function jC(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?hP:rn;if(i){if(s._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const f=l(r,t,e-d),g=l(r,t,e+d);return{lo:f.lo,hi:g.hi}}}}else{const h=l(r,t,e);if(c){const{vScale:d}=s._cachedMeta,{_parsed:f}=n,g=f.slice(0,h.lo+1).reverse().findIndex(v=>!Z(v[d.axis]));h.lo-=Math.max(0,g);const y=f.slice(h.hi).findIndex(v=>!Z(v[d.axis]));h.hi+=Math.max(0,y)}return h}}return{lo:0,hi:r.length-1}}function ic(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:h}=r[a],{lo:d,hi:f}=jC(r[a],t,o,s);for(let g=d;g<=f;++g){const y=h[g];y.skip||i(y,l,g)}}}function qC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Qc(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||ic(n,e,t,function(a,c,l){!s&&!on(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function HC(n,t,e,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:h}=o.getProps(["startAngle","endAngle"],i),{angle:d}=$_(o,{x:t.x,y:t.y});gr(d,l,h)&&s.push({element:o,datasetIndex:a,index:c})}return ic(n,e,t,r),s}function WC(n,t,e,i,s,r){let o=[];const a=qC(e);let c=Number.POSITIVE_INFINITY;function l(h,d,f){const g=h.inRange(t.x,t.y,s);if(i&&!g)return;const y=h.getCenterPoint(s);if(!(!!r||n.isPointInArea(y))&&!g)return;const _=a(t,y);_<c?(o=[{element:h,datasetIndex:d,index:f}],c=_):_===c&&o.push({element:h,datasetIndex:d,index:f})}return ic(n,e,t,l),o}function Jc(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?HC(n,t,e,s):WC(n,t,e,i,s,r)}function Op(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return ic(n,e,t,(c,l,h)=>{c[o]&&c[o](t[e],s)&&(r.push({element:c,datasetIndex:l,index:h}),a=a||c.inRange(t.x,t.y,s))}),i&&!a?[]:r}var GC={modes:{index(n,t,e,i){const s=li(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Qc(n,s,r,i,o):Jc(n,s,r,!1,i,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const h=a[0].index,d=l.data[h];d&&!d.skip&&c.push({element:d,datasetIndex:l.index,index:h})}),c):[]},dataset(n,t,e,i){const s=li(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Qc(n,s,r,i,o):Jc(n,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let h=0;h<l.length;++h)a.push({element:l[h],datasetIndex:c,index:h})}return a},point(n,t,e,i){const s=li(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Qc(n,s,r,i,o)},nearest(n,t,e,i){const s=li(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Jc(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=li(t,n);return Op(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=li(t,n);return Op(n,s,"y",e.intersect,i)}}};const hv=["left","top","right","bottom"];function As(n,t){return n.filter(e=>e.pos===t)}function Np(n,t){return n.filter(e=>hv.indexOf(e.pos)===-1&&e.box.axis===t)}function Ss(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function KC(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function YC(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!hv.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function XC(n,t){const e=YC(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],h=l&&a.stackWeight/l.weight;a.horizontal?(a.width=h?h*i:c&&t.availableWidth,a.height=s):(a.width=i,a.height=h?h*s:c&&t.availableHeight)}return e}function QC(n){const t=KC(n),e=Ss(t.filter(l=>l.box.fullSize),!0),i=Ss(As(t,"left"),!0),s=Ss(As(t,"right")),r=Ss(As(t,"top"),!0),o=Ss(As(t,"bottom")),a=Np(t,"x"),c=Np(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:As(t,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function Lp(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function dv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function JC(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!nt(s)){e.size&&(n[s]-=e.size);const d=i[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[s]+=e.size}r.getPadding&&dv(o,r.getPadding());const a=Math.max(0,t.outerWidth-Lp(o,n,"left","right")),c=Math.max(0,t.outerHeight-Lp(o,n,"top","bottom")),l=a!==n.w,h=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:h}:{same:h,other:l}}function ZC(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function tk(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function Bs(n,t,e,i){const s=[];let r,o,a,c,l,h;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,tk(a.horizontal,t));const{same:d,other:f}=JC(t,e,a,i);l|=d&&s.length,h=h||f,c.fullSize||s.push(a)}return l&&Bs(s,t,e,i)||h}function To(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function Vp(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=i[a.stack]||{placed:0,weight:1},h=a.stackWeight/l.weight||1;if(a.horizontal){const d=t.w*h,f=l.size||c.height;pr(l.start)&&(o=l.start),c.fullSize?To(c,s.left,o,e.outerWidth-s.right-s.left,f):To(c,t.left+l.placed,o,d,f),l.start=o,l.placed+=d,o=c.bottom}else{const d=t.h*h,f=l.size||c.width;pr(l.start)&&(r=l.start),c.fullSize?To(c,r,s.top,f,e.outerHeight-s.bottom-s.top):To(c,r,t.top+l.placed,f,d),l.start=r,l.placed+=d,r=c.right}}t.x=r,t.y=o}var Jt={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=te(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=QC(n.boxes),c=a.vertical,l=a.horizontal;ct(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const h=c.reduce((v,_)=>_.box.options&&_.box.options.display===!1?v:v+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),f=Object.assign({},s);dv(f,te(i));const g=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),y=XC(c.concat(l),d);Bs(a.fullSize,g,d,y),Bs(c,g,d,y),Bs(l,g,d,y)&&Bs(c,g,d,y),ZC(g),Vp(a.leftAndTop,g,d,y),g.x+=g.w,g.y+=g.h,Vp(a.rightAndBottom,g,d,y),n.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},ct(a.chartArea,v=>{const _=v.box;Object.assign(_,n.chartArea),_.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class fv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class ek extends fv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Xo="$chartjs",nk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Fp=n=>n===null||n==="";function ik(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[Xo]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Fp(s)){const r=wp(n,"width");r!==void 0&&(n.width=r)}if(Fp(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=wp(n,"height");r!==void 0&&(n.height=r)}return n}const pv=sC?{passive:!0}:!1;function sk(n,t,e){n&&n.addEventListener(t,e,pv)}function rk(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,pv)}function ok(n,t){const e=nk[n.type]||n.type,{x:i,y:s}=li(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Aa(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function ak(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Aa(a.addedNodes,i),o=o&&!Aa(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function ck(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Aa(a.removedNodes,i),o=o&&!Aa(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const yr=new Map;let Bp=0;function gv(){const n=window.devicePixelRatio;n!==Bp&&(Bp=n,yr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function lk(n,t){yr.size||window.addEventListener("resize",gv),yr.set(n,t)}function uk(n){yr.delete(n),yr.size||window.removeEventListener("resize",gv)}function hk(n,t,e){const i=n.canvas,s=i&&_h(i);if(!s)return;const r=q_((a,c)=>{const l=s.clientWidth;e(a,c),l<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,h=c.contentRect.height;l===0&&h===0||r(l,h)});return o.observe(s),lk(n,r),o}function Zc(n,t,e){e&&e.disconnect(),t==="resize"&&uk(n)}function dk(n,t,e){const i=n.canvas,s=q_(r=>{n.ctx!==null&&e(ok(r,n))},n);return sk(i,t,s),s}class fk extends fv{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(ik(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[Xo])return!1;const i=e[Xo].initial;["height","width"].forEach(r=>{const o=i[r];Z(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[Xo],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:ak,detach:ck,resize:hk}[e]||dk;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:Zc,detach:Zc,resize:Zc}[e]||rk)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return iC(t,e,i,s)}isAttached(t){const e=t&&_h(t);return!!(e&&e.isConnected)}}function pk(n){return!yh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?ek:fk}class Ce{constructor(){B(this,"x");B(this,"y");B(this,"active",!1);B(this,"options");B(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return ns(this.x)&&ns(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}B(Ce,"defaults",{}),B(Ce,"defaultRoutes");function gk(n,t){const e=n.options.ticks,i=mk(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?_k(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return vk(t,l,r,o/s),l;const h=yk(r,t,s);if(o>0){let d,f;const g=o>1?Math.round((c-a)/(o-1)):null;for(Io(t,l,h,Z(g)?0:a-g,a),d=0,f=o-1;d<f;d++)Io(t,l,h,r[d],r[d+1]);return Io(t,l,h,c,Z(g)?t.length:c+g),l}return Io(t,l,h),l}function mk(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function yk(n,t,e){const i=bk(n),s=t.length/e;if(!i)return Math.max(s,1);const r=oP(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function _k(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function vk(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function Io(n,t,e,i,s){const r=Y(i,0),o=Math.min(Y(s,n.length),n.length);let a=0,c,l,h;for(e=Math.ceil(e),s&&(c=s-i,e=c/Math.floor(c/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===h&&(t.push(n[l]),a++,h=Math.round(r+a*e))}function bk(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const wk=n=>n==="left"?"right":n==="right"?"left":n,$p=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,Up=(n,t)=>Math.min(t||n,n);function zp(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function Ek(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(s),l;if(!(e&&(i===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(s-1))/2,c+=s<t?l:-l,c<r-a||c>o+a)))return c}function Tk(n,t){ct(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function Ps(n){return n.drawTicks?n.tickLength:0}function jp(n,t){if(!n.display)return 0;const e=Nt(n.font,t),i=te(n.padding);return(vt(n.text)?n.text.length:1)*e.lineHeight+i.height}function Ik(n,t){return Zn(n,{scale:t,type:"scale"})}function xk(n,t,e){return Zn(n,{tick:e,index:t,type:"tick"})}function Ak(n,t,e){let i=hh(n);return(e&&t!=="right"||!e&&t==="right")&&(i=wk(i)),i}function Sk(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:h}=c;let d=0,f,g,y;const v=o-s,_=a-r;if(n.isHorizontal()){if(g=Kt(i,r,a),nt(e)){const I=Object.keys(e)[0],C=e[I];y=h[I].getPixelForValue(C)+v-t}else e==="center"?y=(l.bottom+l.top)/2+v-t:y=$p(n,e,t);f=a-r}else{if(nt(e)){const I=Object.keys(e)[0],C=e[I];g=h[I].getPixelForValue(C)-_+t}else e==="center"?g=(l.left+l.right)/2-_+t:g=$p(n,e,t);y=Kt(i,o,s),d=e==="left"?-Ct:Ct}return{titleX:g,titleY:y,maxWidth:f,rotation:d}}class Ci extends Ce{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=de(t,Number.POSITIVE_INFINITY),e=de(e,Number.NEGATIVE_INFINITY),i=de(i,Number.POSITIVE_INFINITY),s=de(s,Number.NEGATIVE_INFINITY),{min:de(t,i),max:de(e,s),minDefined:xt(t),maxDefined:xt(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:de(e,de(i,e)),max:de(i,de(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){dt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=NP(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?zp(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=gk(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){dt(this.options.afterUpdate,[this])}beforeSetDimensions(){dt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){dt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),dt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){dt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=dt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){dt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){dt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=Up(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),d=h.widest.width,f=h.highest.height,g=Ft(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/i:g/(i-1),d+6>a&&(a=g/(i-(t.offset?.5:1)),c=this.maxHeight-Ps(t.grid)-e.padding-jp(t.title,this.chart.options.font),l=Math.sqrt(d*d+f*f),o=lh(Math.min(Math.asin(Ft((h.highest.height+6)/a,-1,1)),Math.asin(Ft(c/l,-1,1))-Math.asin(Ft(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){dt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){dt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=jp(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ps(r)+c):(t.height=this.maxHeight,t.width=Ps(r)+c),i.display&&this.ticks.length){const{first:l,last:h,widest:d,highest:f}=this._getLabelSizes(),g=i.padding*2,y=xe(this.labelRotation),v=Math.cos(y),_=Math.sin(y);if(a){const I=i.mirror?0:_*d.width+v*f.height;t.height=Math.min(this.maxHeight,t.height+I+g)}else{const I=i.mirror?0:v*d.width+_*f.height;t.width=Math.min(this.maxWidth,t.width+I+g)}this._calculatePadding(l,h,_,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,g=0;c?l?(f=s*t.width,g=i*e.height):(f=i*t.height,g=s*e.width):r==="start"?g=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,g=e.width/2),this.paddingLeft=Math.max((f-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((g-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){dt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)Z(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=zp(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/Up(e,i));let l=0,h=0,d,f,g,y,v,_,I,C,R,O,D;for(d=0;d<e;d+=c){if(y=t[d].label,v=this._resolveTickFontOptions(d),s.font=_=v.string,I=r[_]=r[_]||{data:{},gc:[]},C=v.lineHeight,R=O=0,!Z(y)&&!vt(y))R=Ia(s,I.data,I.gc,R,y),O=C;else if(vt(y))for(f=0,g=y.length;f<g;++f)D=y[f],!Z(D)&&!vt(D)&&(R=Ia(s,I.data,I.gc,R,D),O+=C);o.push(R),a.push(O),l=Math.max(R,l),h=Math.max(O,h)}Tk(r,e);const L=o.indexOf(l),T=a.indexOf(h),w=E=>({width:o[E]||0,height:a[E]||0});return{first:w(0),last:w(e-1),widest:w(L),highest:w(T),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return uP(this._alignToPixels?ri(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=xk(this.getContext(),t,i))}return this.$context||(this.$context=Ik(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=xe(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),d=this.ticks.length+(c?1:0),f=Ps(r),g=[],y=a.setContext(this.getContext()),v=y.display?y.width:0,_=v/2,I=function(ht){return ri(i,ht,v)};let C,R,O,D,L,T,w,E,x,S,P,A;if(o==="top")C=I(this.bottom),T=this.bottom-f,E=C-_,S=I(t.top)+_,A=t.bottom;else if(o==="bottom")C=I(this.top),S=t.top,A=I(t.bottom)-_,T=C+_,E=this.top+f;else if(o==="left")C=I(this.right),L=this.right-f,w=C-_,x=I(t.left)+_,P=t.right;else if(o==="right")C=I(this.left),x=t.left,P=I(t.right)-_,L=C+_,w=this.left+f;else if(e==="x"){if(o==="center")C=I((t.top+t.bottom)/2+.5);else if(nt(o)){const ht=Object.keys(o)[0],lt=o[ht];C=I(this.chart.scales[ht].getPixelForValue(lt))}S=t.top,A=t.bottom,T=C+_,E=T+f}else if(e==="y"){if(o==="center")C=I((t.left+t.right)/2);else if(nt(o)){const ht=Object.keys(o)[0],lt=o[ht];C=I(this.chart.scales[ht].getPixelForValue(lt))}L=C-_,w=L-f,x=t.left,P=t.right}const pt=Y(s.ticks.maxTicksLimit,d),it=Math.max(1,Math.ceil(d/pt));for(R=0;R<d;R+=it){const ht=this.getContext(R),lt=r.setContext(ht),Bt=a.setContext(ht),kt=lt.lineWidth,He=lt.color,ki=Bt.dash||[],ee=Bt.dashOffset,Et=lt.tickWidth,We=lt.tickColor,ve=lt.tickBorderDash||[],Ge=lt.tickBorderDashOffset;O=Ek(this,R,c),O!==void 0&&(D=ri(i,O,kt),l?L=w=x=P=D:T=E=S=A=D,g.push({tx1:L,ty1:T,tx2:w,ty2:E,x1:x,y1:S,x2:P,y2:A,width:kt,color:He,borderDash:ki,borderDashOffset:ee,tickWidth:Et,tickColor:We,tickBorderDash:ve,tickBorderDashOffset:Ge}))}return this._ticksLength=d,this._borderValue=C,g}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:h,mirror:d}=r,f=Ps(i.grid),g=f+h,y=d?-h:g,v=-xe(this.labelRotation),_=[];let I,C,R,O,D,L,T,w,E,x,S,P,A="middle";if(s==="top")L=this.bottom-y,T=this._getXAxisLabelAlignment();else if(s==="bottom")L=this.top+y,T=this._getXAxisLabelAlignment();else if(s==="left"){const it=this._getYAxisLabelAlignment(f);T=it.textAlign,D=it.x}else if(s==="right"){const it=this._getYAxisLabelAlignment(f);T=it.textAlign,D=it.x}else if(e==="x"){if(s==="center")L=(t.top+t.bottom)/2+g;else if(nt(s)){const it=Object.keys(s)[0],ht=s[it];L=this.chart.scales[it].getPixelForValue(ht)+g}T=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")D=(t.left+t.right)/2-g;else if(nt(s)){const it=Object.keys(s)[0],ht=s[it];D=this.chart.scales[it].getPixelForValue(ht)}T=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?A="top":c==="end"&&(A="bottom"));const pt=this._getLabelSizes();for(I=0,C=a.length;I<C;++I){R=a[I],O=R.label;const it=r.setContext(this.getContext(I));w=this.getPixelForTick(I)+r.labelOffset,E=this._resolveTickFontOptions(I),x=E.lineHeight,S=vt(O)?O.length:1;const ht=S/2,lt=it.color,Bt=it.textStrokeColor,kt=it.textStrokeWidth;let He=T;o?(D=w,T==="inner"&&(I===C-1?He=this.options.reverse?"left":"right":I===0?He=this.options.reverse?"right":"left":He="center"),s==="top"?l==="near"||v!==0?P=-S*x+x/2:l==="center"?P=-pt.highest.height/2-ht*x+x:P=-pt.highest.height+x/2:l==="near"||v!==0?P=x/2:l==="center"?P=pt.highest.height/2-ht*x:P=pt.highest.height-S*x,d&&(P*=-1),v!==0&&!it.showLabelBackdrop&&(D+=x/2*Math.sin(v))):(L=w,P=(1-S)*x/2);let ki;if(it.showLabelBackdrop){const ee=te(it.backdropPadding),Et=pt.heights[I],We=pt.widths[I];let ve=P-ee.top,Ge=0-ee.left;switch(A){case"middle":ve-=Et/2;break;case"bottom":ve-=Et;break}switch(T){case"center":Ge-=We/2;break;case"right":Ge-=We;break;case"inner":I===C-1?Ge-=We:I>0&&(Ge-=We/2);break}ki={left:Ge,top:ve,width:We+ee.width,height:Et+ee.height,color:it.backdropColor}}_.push({label:O,font:E,textOffset:P,options:{rotation:v,color:lt,strokeColor:Bt,strokeWidth:kt,textAlign:He,textBaseline:A,translation:[D,L],backdrop:ki}})}return _}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-xe(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,h;return e==="left"?s?(h=this.right+r,i==="near"?l="left":i==="center"?(l="center",h+=c/2):(l="right",h+=c)):(h=this.right-a,i==="near"?l="right":i==="center"?(l="center",h-=c/2):(l="left",h=this.left)):e==="right"?s?(h=this.left+r,i==="near"?l="right":i==="center"?(l="center",h-=c/2):(l="left",h-=c)):(h=this.left+a,i==="near"?l="left":i==="center"?(l="center",h+=c/2):(l="right",h=this.right)):l="right",{textAlign:l,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,h)=>{!h.width||!h.color||(i.save(),i.lineWidth=h.width,i.strokeStyle=h.color,i.setLineDash(h.borderDash||[]),i.lineDashOffset=h.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const c=s[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,h,d,f;this.isHorizontal()?(l=ri(t,this.left,o)-o/2,h=ri(t,this.right,a)+a/2,d=f=c):(d=ri(t,this.top,o)-o/2,f=ri(t,this.bottom,a)+a/2,l=h=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,d),e.lineTo(h,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&tc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,h=o.textOffset;Ai(i,l,0,h,c,a)}s&&ec(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=Nt(i.font),o=te(i.padding),a=i.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||nt(e)?(c+=o.bottom,vt(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:h,maxWidth:d,rotation:f}=Sk(this,c,e,a);Ai(t,i.text,0,0,r,{color:i.color,maxWidth:d,rotation:f,textAlign:Ak(a,e,s),textBaseline:"middle",translation:[l,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Y(t.grid&&t.grid.z,-1),s=Y(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ci.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Nt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class xo{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;kk(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,Pk(t,o,i),this.override&&bt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in bt[s]&&(delete bt[s][i],this.override&&delete xi[i])}}function Pk(n,t,e){const i=fr(Object.create(null),[e?bt.get(e):{},bt.get(t),n.defaults]);bt.set(t,i),n.defaultRoutes&&Ck(t,n.defaultRoutes),n.descriptors&&bt.describe(t,n.descriptors)}function Ck(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");bt.route(r,s,c,a)})}function kk(n){return"id"in n&&"defaults"in n}class Rk{constructor(){this.controllers=new xo(Ae,"datasets",!0),this.elements=new xo(Ce,"elements"),this.plugins=new xo(Object,"plugins"),this.scales=new xo(Ci,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):ct(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=ch(t);dt(i["before"+s],[],i),e[t](i),dt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Me=new Rk;class Mk{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],c=[e,s,r.options];if(dt(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){Z(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Y(i.options&&i.options.plugins,{}),r=Dk(i);return s===!1&&!e?[]:Nk(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function Dk(n){const t={},e=[],i=Object.keys(Me.plugins.items);for(let r=0;r<i.length;r++)e.push(Me.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function Ok(n,t){return!t&&n===!1?null:n===!0?{}:n}function Nk(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=Ok(i[c],s);l!==null&&r.push({plugin:a,options:Lk(n.config,{plugin:a,local:e[c]},l,o)})}return r}function Lk(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Vl(n,t){const e=bt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Vk(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function Fk(n,t){return n===t?"_index_":"_value_"}function qp(n){if(n==="x"||n==="y"||n==="r")return n}function Bk(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Fl(n,...t){if(qp(n))return n;for(const e of t){const i=e.axis||Bk(e.position)||n.length>1&&qp(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function Hp(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function $k(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return Hp(n,"x",e[0])||Hp(n,"y",e[0])}return{}}function Uk(n,t){const e=xi[n.type]||{scales:{}},i=t.scales||{},s=Vl(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!nt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Fl(o,a,$k(o,n),bt.scales[a.type]),l=Fk(c,s),h=e.scales||{};r[o]=Xs(Object.create(null),[{axis:c},a,h[c],h[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||Vl(a,t),h=(xi[a]||{}).scales||{};Object.keys(h).forEach(d=>{const f=Vk(d,c),g=o[f+"AxisID"]||f;r[g]=r[g]||Object.create(null),Xs(r[g],[{axis:f},i[g],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];Xs(a,[bt.scales[a.type],bt.scale])}),r}function mv(n){const t=n.options||(n.options={});t.plugins=Y(t.plugins,{}),t.scales=Uk(n,t)}function yv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function zk(n){return n=n||{},n.data=yv(n.data),mv(n),n}const Wp=new Map,_v=new Set;function Ao(n,t){let e=Wp.get(n);return e||(e=t(),Wp.set(n,e),_v.add(e)),e}const Cs=(n,t,e)=>{const i=Hn(t,e);i!==void 0&&n.add(i)};class jk{constructor(t){this._config=zk(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=yv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),mv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ao(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Ao(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Ao(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return Ao(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const c=new Set;e.forEach(h=>{t&&(c.add(t),h.forEach(d=>Cs(c,t,d))),h.forEach(d=>Cs(c,s,d)),h.forEach(d=>Cs(c,xi[r]||{},d)),h.forEach(d=>Cs(c,bt,d)),h.forEach(d=>Cs(c,Ol,d))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),_v.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,xi[e]||{},bt.datasets[e]||{},{type:e},bt,Ol]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Gp(this._resolverCache,t,s);let c=o;if(Hk(o,e)){r.$shared=!1,i=Wn(i)?i():i;const l=this.createResolver(t,i,a);c=is(o,i,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,i=[""],s){const{resolver:r}=Gp(this._resolverCache,t,i);return nt(e)?is(r,e,void 0,s):r}}function Gp(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:ph(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const qk=n=>nt(n)&&Object.getOwnPropertyNames(n).some(t=>Wn(n[t]));function Hk(n,t){const{isScriptable:e,isIndexable:i}=X_(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(Wn(a)||qk(a))||o&&vt(a))return!0}return!1}var Wk="4.5.1";const Gk=["top","bottom","left","right","chartArea"];function Kp(n,t){return n==="top"||n==="bottom"||Gk.indexOf(n)===-1&&t==="x"}function Yp(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function Xp(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),dt(e&&e.onComplete,[n],t)}function Kk(n){const t=n.chart,e=t.options.animation;dt(e&&e.onProgress,[n],t)}function vv(n){return yh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Qo={},Qp=n=>{const t=vv(n);return Object.values(Qo).filter(e=>e.canvas===t).pop()};function Yk(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function Xk(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class Ne{static register(...t){Me.add(...t),Jp()}static unregister(...t){Me.remove(...t),Jp()}constructor(t,e){const i=this.config=new jk(e),s=vv(t),r=Qp(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||pk(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,h=c&&c.width;if(this.id=QS(),this.ctx=a,this.canvas=c,this.width=h,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Mk,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=pP(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Qo[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}Je.listen(this,"complete",Xp),Je.listen(this,"progress",Kk),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return Z(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Me}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():bp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return yp(this.canvas,this.ctx),this}stop(){return Je.stop(this),this}resize(t,e){Je.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,bp(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),dt(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};ct(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=Fl(o,a),l=c==="r",h=c==="x";return{options:a,dposition:l?"chartArea":h?"bottom":"left",dtype:l?"radialLinear":h?"category":"linear"}}))),ct(r,o=>{const a=o.options,c=a.id,l=Fl(c,a),h=Y(a.type,o.dtype);(a.position===void 0||Kp(a.position,l)!==Kp(o.dposition))&&(a.position=o.dposition),s[c]=!0;let d=null;if(c in i&&i[c].type===h)d=i[c];else{const f=Me.getScale(h);d=new f({id:c,type:h,ctx:this.ctx,chart:this}),i[d.id]=d}d.init(a,t)}),ct(s,(o,a)=>{o||delete i[a]}),ct(i,o=>{Jt.configure(this,o,o.options),Jt.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(Yp("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Vl(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=Me.getController(a),{datasetElementType:l,dataElementType:h}=bt.datasets[a];Object.assign(c,{dataElementType:Me.getElement(h),datasetElementType:l&&Me.getElement(l)}),o.controller=new c(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ct(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,h=this.data.datasets.length;l<h;l++){const{controller:d}=this.getDatasetMeta(l),f=!s&&r.indexOf(d)===-1;d.buildOrUpdateElements(f),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||ct(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Yp("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){ct(this.scales,t=>{Jt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!cp(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;Yk(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!cp(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Jt.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],ct(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Wn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Je.has(this)?this.attached&&!Je.running(this)&&Je.start(this):(this.draw(),Xp({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=av(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&tc(e,s),t.controller.draw(),s&&ec(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return on(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=GC.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Zn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);pr(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Je.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),yp(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Qo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};ct(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},s=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){ct(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},ct(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!wa(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(c,l)=>c.filter(h=>!l.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),c=iP(t),l=Xk(t,this._lastEvent,i,c);i&&(this._lastEvent=null,dt(r.onHover,[t,a,this],this),c&&dt(r.onClick,[t,a,this],this));const h=!wa(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}B(Ne,"defaults",bt),B(Ne,"instances",Qo),B(Ne,"overrides",xi),B(Ne,"registry",Me),B(Ne,"version",Wk),B(Ne,"getChart",Qp);function Jp(){return ct(Ne.instances,n=>n._plugins.invalidate())}function Qk(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:h}=c,d=Math.min(l/o,Xt(i-e));if(n.beginPath(),n.arc(s,r,o-l/2,i+d/2,e-d/2),a>0){const f=Math.min(l/a,Xt(i-e));n.arc(s,r,a+l/2,e-f/2,i+f/2,!0)}else{const f=Math.min(l/2,o*Xt(i-e));if(h==="round")n.arc(s,r,f,e-ot/2,i+ot/2,!0);else if(h==="bevel"){const g=2*f*f,y=-g*Math.cos(e+ot/2)+s,v=-g*Math.sin(e+ot/2)+r,_=g*Math.cos(i+ot/2)+s,I=g*Math.sin(i+ot/2)+r;n.lineTo(y,v),n.lineTo(_,I)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function Jk(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=s/a;n.beginPath(),n.arc(r,o,a,i-l,e+l),c>s?(l=s/c,n.arc(r,o,c,e+l,i-l,!0)):n.arc(r,o,s,e+Ct,i-Ct),n.closePath(),n.clip()}function Zk(n){return fh(n,["outerStart","outerEnd","innerStart","innerEnd"])}function tR(n,t,e,i){const s=Zk(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=c=>{const l=(e-Math.min(r,c))*i/2;return Ft(c,0,Math.min(r,l))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Ft(s.innerStart,0,o),innerEnd:Ft(s.innerEnd,0,o)}}function Li(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function Sa(n,t,e,i,s,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:h}=t,d=Math.max(t.outerRadius+i+e-l,0),f=h>0?h+i+e+l:0;let g=0;const y=s-c;if(i){const it=h>0?h-i:0,ht=d>0?d-i:0,lt=(it+ht)/2,Bt=lt!==0?y*lt/(lt+i):y;g=(y-Bt)/2}const v=Math.max(.001,y*d-e/ot)/d,_=(y-v)/2,I=c+_+g,C=s-_-g,{outerStart:R,outerEnd:O,innerStart:D,innerEnd:L}=tR(t,f,d,C-I),T=d-R,w=d-O,E=I+R/T,x=C-O/w,S=f+D,P=f+L,A=I+D/S,pt=C-L/P;if(n.beginPath(),r){const it=(E+x)/2;if(n.arc(o,a,d,E,it),n.arc(o,a,d,it,x),O>0){const kt=Li(w,x,o,a);n.arc(kt.x,kt.y,O,x,C+Ct)}const ht=Li(P,C,o,a);if(n.lineTo(ht.x,ht.y),L>0){const kt=Li(P,pt,o,a);n.arc(kt.x,kt.y,L,C+Ct,pt+Math.PI)}const lt=(C-L/f+(I+D/f))/2;if(n.arc(o,a,f,C-L/f,lt,!0),n.arc(o,a,f,lt,I+D/f,!0),D>0){const kt=Li(S,A,o,a);n.arc(kt.x,kt.y,D,A+Math.PI,I-Ct)}const Bt=Li(T,I,o,a);if(n.lineTo(Bt.x,Bt.y),R>0){const kt=Li(T,E,o,a);n.arc(kt.x,kt.y,R,I-Ct,E)}}else{n.moveTo(o,a);const it=Math.cos(E)*d+o,ht=Math.sin(E)*d+a;n.lineTo(it,ht);const lt=Math.cos(x)*d+o,Bt=Math.sin(x)*d+a;n.lineTo(lt,Bt)}n.closePath()}function eR(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){Sa(n,t,e,i,c,s);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%yt||yt))}return Sa(n,t,e,i,c,s),n.fill(),c}function nR(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:h,borderDash:d,borderDashOffset:f,borderRadius:g}=c,y=c.borderAlign==="inner";if(!l)return;n.setLineDash(d||[]),n.lineDashOffset=f,y?(n.lineWidth=l*2,n.lineJoin=h||"round"):(n.lineWidth=l,n.lineJoin=h||"bevel");let v=t.endAngle;if(r){Sa(n,t,e,i,v,s);for(let _=0;_<r;++_)n.stroke();isNaN(a)||(v=o+(a%yt||yt))}y&&Jk(n,t,v),c.selfJoin&&v-o>=ot&&g===0&&h!=="miter"&&Qk(n,t,v),r||(Sa(n,t,e,i,v,s),n.stroke())}class $s extends Ce{constructor(e){super();B(this,"circumference");B(this,"endAngle");B(this,"fullCircles");B(this,"innerRadius");B(this,"outerRadius");B(this,"pixelMargin");B(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=$_(r,{x:e,y:i}),{startAngle:c,endAngle:l,innerRadius:h,outerRadius:d,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),g=(this.options.spacing+this.options.borderWidth)/2,y=Y(f,l-c),v=gr(o,c,l)&&c!==l,_=y>=yt||v,I=sn(a,h+g,d+g);return _&&I}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:h}=this.options,d=(r+o)/2,f=(a+c+h+l)/2;return{x:i+Math.cos(d)*f,y:s+Math.sin(d)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>yt?Math.floor(s/yt):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(ot,s||0)),h=r*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,eR(e,this,h,o,a),nR(e,this,h,o,a),e.restore()}}B($s,"id","arc"),B($s,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),B($s,"defaultRoutes",{backgroundColor:"backgroundColor"}),B($s,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function bv(n,t,e=t){n.lineCap=Y(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Y(e.borderDash,t.borderDash)),n.lineDashOffset=Y(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Y(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Y(e.borderWidth,t.borderWidth),n.strokeStyle=Y(e.borderColor,t.borderColor)}function iR(n,t,e){n.lineTo(e.x,e.y)}function sR(n){return n.stepped?AP:n.tension||n.cubicInterpolationMode==="monotone"?SP:iR}function wv(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,c=Math.max(s,o),l=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!h?i+l-c:l-c}}function rR(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:c,ilen:l}=wv(s,e,i),h=sR(r);let{move:d=!0,reverse:f}=i||{},g,y,v;for(g=0;g<=l;++g)y=s[(a+(f?l-g:g))%o],!y.skip&&(d?(n.moveTo(y.x,y.y),d=!1):h(n,v,y,f,r.stepped),v=y);return c&&(y=s[(a+(f?l:0))%o],h(n,v,y,f,r.stepped)),!!c}function oR(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=wv(s,e,i),{move:c=!0,reverse:l}=i||{};let h=0,d=0,f,g,y,v,_,I;const C=O=>(o+(l?a-O:O))%r,R=()=>{v!==_&&(n.lineTo(h,_),n.lineTo(h,v),n.lineTo(h,I))};for(c&&(g=s[C(0)],n.moveTo(g.x,g.y)),f=0;f<=a;++f){if(g=s[C(f)],g.skip)continue;const O=g.x,D=g.y,L=O|0;L===y?(D<v?v=D:D>_&&(_=D),h=(d*h+O)/++d):(R(),n.lineTo(O,D),y=L,d=0,v=_=D),I=D}R()}function Bl(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?oR:rR}function aR(n){return n.stepped?rC:n.tension||n.cubicInterpolationMode==="monotone"?oC:ui}function cR(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),bv(n,t.options),n.stroke(s)}function lR(n,t,e,i){const{segments:s,options:r}=t,o=Bl(t);for(const a of s)bv(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const uR=typeof Path2D=="function";function hR(n,t,e,i){uR&&!t.options.segment?cR(n,t,e,i):lR(n,t,e,i)}class Cn extends Ce{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;QP(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=dC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=ov(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=aR(i);let l,h;for(l=0,h=o.length;l<h;++l){const{start:d,end:f}=o[l],g=r[d],y=r[f];if(g===y){a.push(g);continue}const v=Math.abs((s-g[e])/(y[e]-g[e])),_=c(g,y,v,i.stepped);_[e]=t[e],a.push(_)}return a.length===1?a[0]:a}pathSegment(t,e,i){return Bl(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=Bl(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),hR(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}B(Cn,"id","line"),B(Cn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),B(Cn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),B(Cn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Zp(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class Jo extends Ce{constructor(e){super();B(this,"parsed");B(this,"skip");B(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return Zp(this,e,"x",i)}inYRange(e,i){return Zp(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!on(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Nl(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}B(Jo,"id","point"),B(Jo,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),B(Jo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Ev(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,h,d;return n.horizontal?(d=o/2,a=Math.min(e,s),c=Math.max(e,s),l=i-d,h=i+d):(d=r/2,a=e-d,c=e+d,l=Math.min(i,s),h=Math.max(i,s)),{left:a,top:l,right:c,bottom:h}}function kn(n,t,e,i){return n?0:Ft(t,e,i)}function dR(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=Y_(i);return{t:kn(s.top,r.top,0,e),r:kn(s.right,r.right,0,t),b:kn(s.bottom,r.bottom,0,e),l:kn(s.left,r.left,0,t)}}function fR(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=mi(s),o=Math.min(t,e),a=n.borderSkipped,c=i||nt(s);return{topLeft:kn(!c||a.top||a.left,r.topLeft,0,o),topRight:kn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:kn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:kn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function pR(n){const t=Ev(n),e=t.right-t.left,i=t.bottom-t.top,s=dR(n,e/2,i/2),r=fR(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function tl(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&Ev(n,i);return a&&(s||sn(t,a.left,a.right))&&(r||sn(e,a.top,a.bottom))}function gR(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function mR(n,t){n.rect(t.x,t.y,t.w,t.h)}function el(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class Zo extends Ce{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=pR(this),a=gR(o.radius)?mr:mR;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,el(o,e,r)),t.clip(),a(t,el(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,el(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return tl(this,t,e,i)}inXRange(t,e){return tl(this,t,null,e)}inYRange(t,e){return tl(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}B(Zo,"id","bar"),B(Zo,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),B(Zo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var yR=Object.freeze({__proto__:null,ArcElement:$s,BarElement:Zo,LineElement:Cn,PointElement:Jo});const $l=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],tg=$l.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Tv(n){return $l[n%$l.length]}function Iv(n){return tg[n%tg.length]}function _R(n,t){return n.borderColor=Tv(t),n.backgroundColor=Iv(t),++t}function vR(n,t){return n.backgroundColor=n.data.map(()=>Tv(t++)),t}function bR(n,t){return n.backgroundColor=n.data.map(()=>Iv(t++)),t}function wR(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof di?t=vR(e,t):s instanceof tr?t=bR(e,t):s&&(t=_R(e,t))}}function eg(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function ER(n){return n&&(n.borderColor||n.backgroundColor)}function TR(){return bt.borderColor!=="rgba(0,0,0,0.1)"||bt.backgroundColor!=="rgba(0,0,0,0.1)"}var IR={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=eg(i)||ER(s)||r&&eg(r)||TR();if(!e.forceOverride&&o)return;const a=wR(n);i.forEach(a)}};function xR(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let h=t,d,f,g,y,v;for(o[c++]=n[h],d=0;d<r-2;d++){let _=0,I=0,C;const R=Math.floor((d+1)*a)+1+t,O=Math.min(Math.floor((d+2)*a)+1,e)+t,D=O-R;for(C=R;C<O;C++)_+=n[C].x,I+=n[C].y;_/=D,I/=D;const L=Math.floor(d*a)+1+t,T=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:w,y:E}=n[h];for(g=y=-1,C=L;C<T;C++)y=.5*Math.abs((w-_)*(n[C].y-E)-(w-n[C].x)*(I-E)),y>g&&(g=y,f=n[C],v=C);o[c++]=f,h=v}return o[c++]=n[l],o}function AR(n,t,e,i){let s=0,r=0,o,a,c,l,h,d,f,g,y,v;const _=[],I=t+e-1,C=n[t].x,O=n[I].x-C;for(o=t;o<t+e;++o){a=n[o],c=(a.x-C)/O*i,l=a.y;const D=c|0;if(D===h)l<y?(y=l,d=o):l>v&&(v=l,f=o),s=(r*s+a.x)/++r;else{const L=o-1;if(!Z(d)&&!Z(f)){const T=Math.min(d,f),w=Math.max(d,f);T!==g&&T!==L&&_.push({...n[T],x:s}),w!==g&&w!==L&&_.push({...n[w],x:s})}o>0&&L!==g&&_.push(n[L]),_.push(a),h=D,r=0,y=v=l,d=f=g=o}}return _}function xv(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function ng(n){n.data.datasets.forEach(t=>{xv(t)})}function SR(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(i=Ft(rn(t,r.axis,o).lo,0,e-1)),l?s=Ft(rn(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var PR={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){ng(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,c=n.getDatasetMeta(r),l=o||s.data;if(Fs([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const h=n.scales[c.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:d,count:f}=SR(c,l);const g=e.threshold||4*i;if(f<=g){xv(s);return}Z(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let y;switch(e.algorithm){case"lttb":y=xR(l,d,f,i,e);break;case"min-max":y=AR(l,d,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=y})},destroy(n){ng(n)}};function CR(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:c,end:l}=a;l=sc(c,l,s);const h=Ul(e,s[c],s[l],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[c],end:s[l]});continue}const d=ov(t,h);for(const f of d){const g=Ul(e,r[f.start],r[f.end],f.loop),y=rv(a,s,g);for(const v of y)o.push({source:v,target:f,start:{[e]:ig(h,g,"start",Math.max)},end:{[e]:ig(h,g,"end",Math.min)}})}}return o}function Ul(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=Xt(s),r=Xt(r)),{property:n,start:s,end:r}}function kR(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=sc(o,a,s);const c=s[o],l=s[a];i!==null?(r.push({x:c.x,y:i}),r.push({x:l.x,y:i})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function sc(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function ig(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function Av(n,t){let e=[],i=!1;return vt(n)?(i=!0,e=n):e=kR(n,t),e.length?new Cn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function sg(n){return n&&n.fill!==!1}function RR(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!xt(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function MR(n,t,e){const i=LR(n);if(nt(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return xt(s)&&Math.floor(s)===s?DR(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function DR(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function OR(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:nt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function NR(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:nt(n)?i=n.value:i=t.getBaseValue(),i}function LR(n){const t=n.options,e=t.fill;let i=Y(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function VR(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=FR(t,e);a.push(Av({x:null,y:t.bottom},i));for(let c=0;c<r.length;c++){const l=r[c];for(let h=l.start;h<=l.end;h++)BR(s,o[h],a)}return new Cn({points:s,options:{}})}function FR(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function BR(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:c}=$R(r,t,"x");if(!(!c||o&&a)){if(o)i.unshift(c);else if(n.push(c),!a)break}}n.push(...i)}function $R(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const h=r[l],d=o[h.start][e],f=o[h.end][e];if(sn(s,d,f)){a=s===d,c=s===f;break}}return{first:a,last:c,point:i}}class Sv{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:yt},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function UR(n){const{chart:t,fill:e,line:i}=n;if(xt(e))return zR(t,e);if(e==="stack")return VR(n);if(e==="shape")return!0;const s=jR(n);return s instanceof Sv?s:Av(s,i)}function zR(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function jR(n){return(n.scale||{}).getPointPositionForValue?HR(n):qR(n)}function qR(n){const{scale:t={},fill:e}=n,i=OR(e,t);if(xt(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function HR(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=NR(e,t,r),a=[];if(i.grid.circular){const c=t.getPointPositionForValue(0,r);return new Sv({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)a.push(t.getPointPositionForValue(c,o));return a}function nl(n,t,e){const i=UR(t),{chart:s,index:r,line:o,scale:a,axis:c}=t,l=o.options,h=l.fill,d=l.backgroundColor,{above:f=d,below:g=d}=h||{},y=s.getDatasetMeta(r),v=av(s,y);i&&o.points.length&&(tc(n,e),WR(n,{line:o,target:i,above:f,below:g,area:e,scale:a,axis:c,clip:v}),ec(n))}function WR(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let h=r;r!==s&&(l==="x"?(rg(n,i,o.top),il(n,{line:e,target:i,color:s,scale:a,property:l,clip:c}),n.restore(),n.save(),rg(n,i,o.bottom)):l==="y"&&(og(n,i,o.left),il(n,{line:e,target:i,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),og(n,i,o.right),h=s)),il(n,{line:e,target:i,color:h,scale:a,property:l,clip:c}),n.restore()}function rg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,h=s[c],d=s[sc(c,l,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function og(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,h=s[c],d=s[sc(c,l,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function il(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,c=CR(e,i,s);for(const{source:l,target:h,start:d,end:f}of c){const{style:{backgroundColor:g=r}={}}=l,y=i!==!0;n.save(),n.fillStyle=g,GR(n,o,a,y&&Ul(s,d,f)),n.beginPath();const v=!!e.pathSegment(n,l);let _;if(y){v?n.closePath():ag(n,i,f,s);const I=!!i.pathSegment(n,h,{move:v,reverse:!0});_=v&&I,_||ag(n,i,d,s)}n.closePath(),n.fill(_?"evenodd":"nonzero"),n.restore()}}function GR(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let c,l,h,d;r==="x"?(c=o,l=s.top,h=a,d=s.bottom):(c=s.left,l=o,h=s.right,d=a),n.beginPath(),e&&(c=Math.max(c,e.left),h=Math.min(h,e.right),l=Math.max(l,e.top),d=Math.min(d,e.bottom)),n.rect(c,l,h-c,d-l),n.clip()}}function ag(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var KR={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,c;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Cn&&(c={visible:n.isDatasetVisible(o),index:o,fill:MR(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=RR(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&nl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;sg(r)&&nl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!sg(i)||e.drawTime!=="beforeDatasetDraw"||nl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const cg=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},YR=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class lg extends Ce{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=dt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=Nt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=cg(i,r);let l,h;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,h=this._fitRows(o,r,a,c)+10):(h=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],h=s+a;let d=t;r.textAlign="left",r.textBaseline="middle";let f=-1,g=-h;return this.legendItems.forEach((y,v)=>{const _=i+e/2+r.measureText(y.text).width;(v===0||l[l.length-1]+_+2*a>o)&&(d+=h,l[l.length-(v>0?0:1)]=0,g+=h,f++),c[v]={left:0,top:g,row:f,width:_,height:s},l[l.length-1]+=_+a}),d}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],h=o-t;let d=a,f=0,g=0,y=0,v=0;return this.legendItems.forEach((_,I)=>{const{itemWidth:C,itemHeight:R}=XR(i,e,r,_,s);I>0&&g+R+2*a>h&&(d+=f+a,l.push({width:f,height:g}),y+=f+a,v++,f=g=0),c[I]={left:y,top:g,col:v,width:C,height:R},f=Math.max(f,C),g+=R+a}),d+=f,l.push({width:f,height:g}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=Ki(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=Kt(i,this.left+s,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=Kt(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+t+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=Kt(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=Kt(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;tc(t,this),this._draw(),ec(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=bt.color,c=Ki(t.rtl,this.left,this.width),l=Nt(o.font),{padding:h}=o,d=l.size,f=d/2;let g;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:y,boxHeight:v,itemHeight:_}=cg(o,d),I=function(L,T,w){if(isNaN(y)||y<=0||isNaN(v)||v<0)return;s.save();const E=Y(w.lineWidth,1);if(s.fillStyle=Y(w.fillStyle,a),s.lineCap=Y(w.lineCap,"butt"),s.lineDashOffset=Y(w.lineDashOffset,0),s.lineJoin=Y(w.lineJoin,"miter"),s.lineWidth=E,s.strokeStyle=Y(w.strokeStyle,a),s.setLineDash(Y(w.lineDash,[])),o.usePointStyle){const x={radius:v*Math.SQRT2/2,pointStyle:w.pointStyle,rotation:w.rotation,borderWidth:E},S=c.xPlus(L,y/2),P=T+f;K_(s,x,S,P,o.pointStyleWidth&&y)}else{const x=T+Math.max((d-v)/2,0),S=c.leftForLtr(L,y),P=mi(w.borderRadius);s.beginPath(),Object.values(P).some(A=>A!==0)?mr(s,{x:S,y:x,w:y,h:v,radius:P}):s.rect(S,x,y,v),s.fill(),E!==0&&s.stroke()}s.restore()},C=function(L,T,w){Ai(s,w.text,L,T+_/2,l,{strikethrough:w.hidden,textAlign:c.textAlign(w.textAlign)})},R=this.isHorizontal(),O=this._computeTitleHeight();R?g={x:Kt(r,this.left+h,this.right-i[0]),y:this.top+h+O,line:0}:g={x:this.left+h,y:Kt(r,this.top+O+h,this.bottom-e[0].height),line:0},nv(this.ctx,t.textDirection);const D=_+h;this.legendItems.forEach((L,T)=>{s.strokeStyle=L.fontColor,s.fillStyle=L.fontColor;const w=s.measureText(L.text).width,E=c.textAlign(L.textAlign||(L.textAlign=o.textAlign)),x=y+f+w;let S=g.x,P=g.y;c.setWidth(this.width),R?T>0&&S+x+h>this.right&&(P=g.y+=D,g.line++,S=g.x=Kt(r,this.left+h,this.right-i[g.line])):T>0&&P+D>this.bottom&&(S=g.x=S+e[g.line].width+h,g.line++,P=g.y=Kt(r,this.top+O+h,this.bottom-e[g.line].height));const A=c.x(S);if(I(A,P,L),S=gP(E,S+y+f,R?S+x:this.right,t.rtl),C(c.x(S),P,L),R)g.x+=x+h;else if(typeof L.text!="string"){const pt=l.lineHeight;g.y+=Pv(L,pt)+h}else g.y+=D}),iv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=Nt(e.font),s=te(e.padding);if(!e.display)return;const r=Ki(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=i.size/2,l=s.top+c;let h,d=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),h=this.top+l,d=Kt(t.align,d,this.right-f);else{const y=this.columnSizes.reduce((v,_)=>Math.max(v,_.height),0);h=l+Kt(t.align,this.top,this.bottom-y-t.labels.padding-this._computeTitleHeight())}const g=Kt(a,d,d+f);o.textAlign=r.textAlign(hh(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Ai(o,e.text,g,h,i)}_computeTitleHeight(){const t=this.options.title,e=Nt(t.font),i=te(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(sn(t,this.left,this.right)&&sn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],sn(t,s.left,s.left+s.width)&&sn(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!ZR(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=YR(s,i);s&&!r&&dt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&dt(e.onHover,[t,i,this],this)}else i&&dt(e.onClick,[t,i,this],this)}}function XR(n,t,e,i,s){const r=QR(i,n,t,e),o=JR(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function QR(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function JR(n,t,e){let i=n;return typeof t.text!="string"&&(i=Pv(t,e)),i}function Pv(n,t){const e=n.text?n.text.length:0;return t*e}function ZR(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var t1={id:"legend",_element:lg,start(n,t,e){const i=n.legend=new lg({ctx:n.ctx,options:e,chart:n});Jt.configure(n,i,e),Jt.addBox(n,i)},stop(n){Jt.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;Jt.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),h=te(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class bh extends Ce{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=vt(i.text)?i.text.length:1;this._padding=te(i.padding);const r=s*Nt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,h,d;return this.isHorizontal()?(h=Kt(a,i,r),d=e+t,l=r-i):(o.position==="left"?(h=i+t,d=Kt(a,s,e),c=ot*-.5):(h=r-t,d=Kt(a,e,s),c=ot*.5),l=s-e),{titleX:h,titleY:d,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Nt(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Ai(t,e.text,0,0,i,{color:e.color,maxWidth:c,rotation:l,textAlign:hh(e.align),textBaseline:"middle",translation:[o,a]})}}function e1(n,t){const e=new bh({ctx:n.ctx,options:t,chart:n});Jt.configure(n,e,t),Jt.addBox(n,e),n.titleBlock=e}var n1={id:"title",_element:bh,start(n,t,e){e1(n,e)},stop(n){const t=n.titleBlock;Jt.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;Jt.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const So=new WeakMap;var i1={id:"subtitle",start(n,t,e){const i=new bh({ctx:n.ctx,options:e,chart:n});Jt.configure(n,i,e),Jt.addBox(n,i),So.set(n,i)},stop(n){Jt.removeBox(n,So.get(n)),So.delete(n)},beforeUpdate(n,t,e){const i=So.get(n);Jt.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Us={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();i.add(c.x),s+=c.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,c)=>a+c)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),h=Dl(t,l);h<s&&(s=h,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,i=c.y}return{x:e,y:i}}};function Re(n,t){return t&&(vt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function Ze(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function s1(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function ug(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Nt(t.bodyFont),l=Nt(t.titleFont),h=Nt(t.footerFont),d=r.length,f=s.length,g=i.length,y=te(t.padding);let v=y.height,_=0,I=i.reduce((O,D)=>O+D.before.length+D.lines.length+D.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,d&&(v+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),I){const O=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=g*O+(I-g)*c.lineHeight+(I-1)*t.bodySpacing}f&&(v+=t.footerMarginTop+f*h.lineHeight+(f-1)*t.footerSpacing);let C=0;const R=function(O){_=Math.max(_,e.measureText(O).width+C)};return e.save(),e.font=l.string,ct(n.title,R),e.font=c.string,ct(n.beforeBody.concat(n.afterBody),R),C=t.displayColors?o+2+t.boxPadding:0,ct(i,O=>{ct(O.before,R),ct(O.lines,R),ct(O.after,R)}),C=0,e.font=h.string,ct(n.footer,R),e.restore(),_+=y.width,{width:_,height:v}}function r1(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function o1(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function a1(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),o1(l,n,t,e)&&(l="center"),l}function hg(n,t,e){const i=e.yAlign||t.yAlign||r1(n,e);return{xAlign:e.xAlign||t.xAlign||a1(n,t,e,i),yAlign:i}}function c1(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function l1(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function dg(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=s+r,{topLeft:h,topRight:d,bottomLeft:f,bottomRight:g}=mi(o);let y=c1(t,a);const v=l1(t,c,l);return c==="center"?a==="left"?y+=l:a==="right"&&(y-=l):a==="left"?y-=Math.max(h,f)+s:a==="right"&&(y+=Math.max(d,g)+s),{x:Ft(y,0,i.width-t.width),y:Ft(v,0,i.height-t.height)}}function Po(n,t,e){const i=te(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function fg(n){return Re([],Ze(n))}function u1(n,t,e){return Zn(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function pg(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Cv={beforeTitle:Xe,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:Xe,beforeBody:Xe,beforeLabel:Xe,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return Z(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Xe,afterBody:Xe,beforeFooter:Xe,footer:Xe,afterFooter:Xe};function oe(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?Cv[t].call(e,i):s}class zl extends Ce{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new cv(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=u1(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=oe(i,"beforeTitle",this,t),r=oe(i,"title",this,t),o=oe(i,"afterTitle",this,t);let a=[];return a=Re(a,Ze(s)),a=Re(a,Ze(r)),a=Re(a,Ze(o)),a}getBeforeBody(t,e){return fg(oe(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return ct(t,r=>{const o={before:[],lines:[],after:[]},a=pg(i,r);Re(o.before,Ze(oe(a,"beforeLabel",this,r))),Re(o.lines,oe(a,"label",this,r)),Re(o.after,Ze(oe(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return fg(oe(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=oe(i,"beforeFooter",this,t),r=oe(i,"footer",this,t),o=oe(i,"afterFooter",this,t);let a=[];return a=Re(a,Ze(s)),a=Re(a,Ze(r)),a=Re(a,Ze(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(s1(this.chart,e[c]));return t.filter&&(a=a.filter((h,d,f)=>t.filter(h,d,f,i))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,i))),ct(a,h=>{const d=pg(t.callbacks,h);s.push(oe(d,"labelColor",this,h)),r.push(oe(d,"labelPointStyle",this,h)),o.push(oe(d,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Us[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=ug(this,i),l=Object.assign({},a,c),h=hg(this.chart,i,l),d=dg(i,l,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:h,bottomRight:d}=mi(a),{x:f,y:g}=t,{width:y,height:v}=e;let _,I,C,R,O,D;return r==="center"?(O=g+v/2,s==="left"?(_=f,I=_-o,R=O+o,D=O-o):(_=f+y,I=_+o,R=O-o,D=O+o),C=_):(s==="left"?I=f+Math.max(c,h)+o:s==="right"?I=f+y-Math.max(l,d)-o:I=this.caretX,r==="top"?(R=g,O=R-o,_=I-o,C=I+o):(R=g+v,O=R+o,_=I+o,C=I-o),D=R),{x1:_,x2:I,x3:C,y1:R,y2:O,y3:D}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=Ki(i.rtl,this.x,this.width);for(t.x=Po(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=Nt(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,h=Nt(r.bodyFont),d=Po(this,"left",r),f=s.x(d),g=c<h.lineHeight?(h.lineHeight-c)/2:0,y=e.y+g;if(r.usePointStyle){const v={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},_=s.leftForLtr(f,l)+l/2,I=y+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Nl(t,v,_,I),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Nl(t,v,_,I)}else{t.lineWidth=nt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=s.leftForLtr(f,l),_=s.leftForLtr(s.xPlus(f,1),l-2),I=mi(o.borderRadius);Object.values(I).some(C=>C!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,mr(t,{x:v,y,w:l,h:c,radius:I}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),mr(t,{x:_,y:y+1,w:l-2,h:c-2,radius:I}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(v,y,l,c),t.strokeRect(v,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(_,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:h}=i,d=Nt(i.bodyFont);let f=d.lineHeight,g=0;const y=Ki(i.rtl,this.x,this.width),v=function(w){e.fillText(w,y.x(t.x+g),t.y+f/2),t.y+=f+r},_=y.textAlign(o);let I,C,R,O,D,L,T;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=Po(this,_,i),e.fillStyle=i.bodyColor,ct(this.beforeBody,v),g=a&&_!=="right"?o==="center"?l/2+h:l+2+h:0,O=0,L=s.length;O<L;++O){for(I=s[O],C=this.labelTextColors[O],e.fillStyle=C,ct(I.before,v),R=I.lines,a&&R.length&&(this._drawColorBox(e,t,O,y,i),f=Math.max(d.lineHeight,c)),D=0,T=R.length;D<T;++D)v(R[D]),f=d.lineHeight;ct(I.after,v)}g=0,f=d.lineHeight,ct(this.afterBody,v),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const c=Ki(i.rtl,this.x,this.width);for(t.x=Po(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=c.textAlign(i.footerAlign),e.textBaseline="middle",o=Nt(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:h}=i,{topLeft:d,topRight:f,bottomLeft:g,bottomRight:y}=mi(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+d,c),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+l,c+h-y),e.quadraticCurveTo(a+l,c+h,a+l-y,c+h),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+g,c+h),e.quadraticCurveTo(a,c+h,a,c+h-g),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,c+d),e.quadraticCurveTo(a,c,a+d,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Us[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=ug(this,t),c=Object.assign({},o,this._size),l=hg(e,t,c),h=dg(t,c,l,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=te(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),nv(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),iv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!wa(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),c=e||!wa(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=Us[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}B(zl,"positioners",Us);var h1={id:"tooltip",_element:zl,positioners:Us,afterInit(n,t,e){e&&(n.tooltip=new zl({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Cv},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},d1=Object.freeze({__proto__:null,Colors:IR,Decimation:PR,Filler:KR,Legend:t1,SubTitle:i1,Title:n1,Tooltip:h1});const f1=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function p1(n,t,e,i){const s=n.indexOf(t);if(s===-1)return f1(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const g1=(n,t)=>n===null?null:Ft(Math.round(n),0,t);function gg(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class jl extends Ci{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Z(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:p1(i,t,Y(e,t),this._addedLabels),g1(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return gg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}B(jl,"id","category"),B(jl,"defaults",{ticks:{callback:gg}});function m1(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:h,maxDigits:d,includeBounds:f}=n,g=r||1,y=h-1,{min:v,max:_}=t,I=!Z(o),C=!Z(a),R=!Z(l),O=(_-v)/(d+1);let D=up((_-v)/y/g)*g,L,T,w,E;if(D<1e-14&&!I&&!C)return[{value:v},{value:_}];E=Math.ceil(_/D)-Math.floor(v/D),E>y&&(D=up(E*D/y/g)*g),Z(c)||(L=Math.pow(10,c),D=Math.ceil(D*L)/L),s==="ticks"?(T=Math.floor(v/D)*D,w=Math.ceil(_/D)*D):(T=v,w=_),I&&C&&r&&cP((a-o)/r,D/1e3)?(E=Math.round(Math.min((a-o)/D,h)),D=(a-o)/E,T=o,w=a):R?(T=I?o:T,w=C?a:w,E=l-1,D=(w-T)/E):(E=(w-T)/D,Qs(E,Math.round(E),D/1e3)?E=Math.round(E):E=Math.ceil(E));const x=Math.max(hp(D),hp(T));L=Math.pow(10,Z(c)?x:c),T=Math.round(T*L)/L,w=Math.round(w*L)/L;let S=0;for(I&&(f&&T!==o?(e.push({value:o}),T<o&&S++,Qs(Math.round((T+S*D)*L)/L,o,mg(o,O,n))&&S++):T<o&&S++);S<E;++S){const P=Math.round((T+S*D)*L)/L;if(C&&P>a)break;e.push({value:P})}return C&&f&&w!==a?e.length&&Qs(e[e.length-1].value,a,mg(a,O,n))?e[e.length-1].value=a:e.push({value:a}):(!C||w===a)&&e.push({value:w}),e}function mg(n,t,{horizontal:e,minRotation:i}){const s=xe(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class Pa extends Ci{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Z(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=e?s:c,a=c=>r=i?r:c;if(t){const c=ze(s),l=ze(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(s-c)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=m1(s,r);return t.bounds==="ticks"&&B_(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return zr(t,this.chart.options.locale,this.options.ticks.format)}}class ql extends Pa{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=xt(t)?t:0,this.max=xt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=xe(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}B(ql,"id","linear"),B(ql,"defaults",{ticks:{callback:Za.formatters.numeric}});const _r=n=>Math.floor(Sn(n)),ai=(n,t)=>Math.pow(10,_r(n)+t);function yg(n){return n/Math.pow(10,_r(n))===1}function _g(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function y1(n,t){const e=t-n;let i=_r(e);for(;_g(n,t,i)>10;)i++;for(;_g(n,t,i)<10;)i--;return Math.min(i,_r(n))}function _1(n,{min:t,max:e}){t=de(n.min,t);const i=[],s=_r(t);let r=y1(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((t-c)*o)/o,h=Math.floor((t-c)/a/10)*a*10;let d=Math.floor((l-h)/Math.pow(10,r)),f=de(n.min,Math.round((c+h+d*Math.pow(10,r))*o)/o);for(;f<e;)i.push({value:f,major:yg(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(r++,d=2,o=r>=0?1:o),f=Math.round((c+h+d*Math.pow(10,r))*o)/o;const g=de(n.max,f);return i.push({value:g,major:yg(g),significand:d}),i}class Hl extends Ci{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Pa.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return xt(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=xt(t)?Math.max(0,t):null,this.max=xt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!xt(this._userMin)&&(this.min=t===ai(this.min,0)?ai(this.min,-1):ai(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(ai(i,-1)),o(ai(s,1)))),i<=0&&r(ai(s,-1)),s<=0&&o(ai(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=_1(e,this);return t.bounds==="ticks"&&B_(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":zr(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Sn(t),this._valueRange=Sn(this.max)-Sn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Sn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}B(Hl,"id","logarithmic"),B(Hl,"defaults",{ticks:{callback:Za.formatters.logarithmic,major:{enabled:!0}}});function Wl(n){const t=n.ticks;if(t.display&&n.display){const e=te(t.backdropPadding);return Y(t.font&&t.font.size,bt.font.size)+e.height}return 0}function v1(n,t,e){return e=vt(e)?e:[e],{w:xP(n,t.string,e),h:e.length*t.lineHeight}}function vg(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function b1(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?ot/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));s[c]=l.padding;const h=n.getPointPosition(c,n.drawingArea+s[c],a),d=Nt(l.font),f=v1(n.ctx,d,n._pointLabels[c]);i[c]=f;const g=Xt(n.getIndexAngle(c)+a),y=Math.round(lh(g)),v=vg(y,h.x,f.w,0,180),_=vg(y,h.y,f.h,90,270);w1(e,t,g,v,_)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=I1(n,i,s)}function w1(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(c=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-c)):s.end>t.b&&(c=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function E1(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,i+s+o,r),l=Math.round(lh(Xt(c.angle+Ct))),h=S1(c.y,a.h,l),d=x1(l),f=A1(c.x,a.w,d);return{visible:!0,x:c.x,y:h,textAlign:d,left:f,top:h,right:f+a.w,bottom:h+a.h}}function T1(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(on({x:e,y:i},t)||on({x:e,y:r},t)||on({x:s,y:i},t)||on({x:s,y:r},t))}function I1(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Wl(r)/2,additionalAngle:o?ot/s:0};let l;for(let h=0;h<s;h++){c.padding=e[h],c.size=t[h];const d=E1(n,h,c);i.push(d),a==="auto"&&(d.visible=T1(d,l),d.visible&&(l=d))}return i}function x1(n){return n===0||n===180?"center":n<180?"left":"right"}function A1(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function S1(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function P1(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!Z(a)){const c=mi(t.borderRadius),l=te(t.backdropPadding);n.fillStyle=a;const h=i-l.left,d=s-l.top,f=r-i+l.width,g=o-s+l.height;Object.values(c).some(y=>y!==0)?(n.beginPath(),mr(n,{x:h,y:d,w:f,h:g,radius:c}),n.fill()):n.fillRect(h,d,f,g)}}function C1(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));P1(e,o,r);const a=Nt(o.font),{x:c,y:l,textAlign:h}=r;Ai(e,n._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function kv(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,yt);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function k1(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!i||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),kv(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function R1(n,t,e){return Zn(n,{label:e,index:t,type:"pointLabel"})}class zs extends Pa{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=te(Wl(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=xt(t)&&!isNaN(t)?t:0,this.max=xt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Wl(this.options))}generateTickLabels(t){Pa.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=dt(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?b1(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=yt/(this._pointLabels.length||1),i=this.options.startAngle||0;return Xt(t*e+xe(i))}getDistanceFromCenterForValue(t){if(Z(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Z(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return R1(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Ct+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),kv(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&C1(this,o),s.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){c=this.getDistanceFromCenterForValue(h.value);const f=this.getContext(d),g=s.setContext(f),y=r.setContext(f);k1(this,g,c,o,y)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const h=i.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:f}=h;!f||!d||(t.lineWidth=f,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=i.setContext(this.getContext(c)),h=Nt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const d=te(l.backdropPadding);t.fillRect(-o/2-d.left,-r-h.size/2-d.top,o+d.width,h.size+d.height)}Ai(t,a.label,0,-r,h,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}B(zs,"id","radialLinear"),B(zs,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Za.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),B(zs,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),B(zs,"descriptors",{angleLines:{_fallback:"grid"}});const rc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},le=Object.keys(rc);function bg(n,t){return n-t}function wg(n,t){if(Z(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),xt(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(ns(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Eg(n,t,e,i){const s=le.length;for(let r=le.indexOf(n);r<s-1;++r){const o=rc[le[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return le[r]}return le[s-1]}function M1(n,t,e,i,s){for(let r=le.length-1;r>=le.indexOf(e);r--){const o=le[r];if(rc[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return le[e?le.indexOf(e):0]}function D1(n){for(let t=le.indexOf(n)+1,e=le.length;t<e;++t)if(rc[le[t]].common)return le[t]}function Tg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=uh(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function O1(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=e[a],c>=0&&(t[c].major=!0);return t}function Ig(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:O1(n,i,s,e)}class vr extends Ci{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new zC._date(t.adapters.date);s.init(e),Xs(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:wg(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=xt(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=xt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=dP(s,r,o);return this._unit=e.unit||(i.autoSkip?Eg(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):M1(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:D1(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Ig(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Ft(e,0,o),i=Ft(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Eg(r.minUnit,e,i,this._getLabelCapacity(e)),a=Y(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=ns(c)||c===!0,h={};let d=e,f,g;if(l&&(d=+t.startOf(d,"isoWeek",c)),d=+t.startOf(d,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const y=s.ticks.source==="data"&&this.getDataTimestamps();for(f=d,g=0;f<i;f=+t.add(f,a,o),g++)Tg(h,f,y);return(f===i||s.bounds==="ticks"||g===1)&&Tg(h,f,y),Object.keys(h).sort(bg).map(v=>+v)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return dt(o,[t,e,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,h=c&&a[c],d=l&&a[l],f=i[e],g=l&&d&&f&&f.major;return this._adapter.format(t,s||(g?d:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=xe(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,Ig(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(wg(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return z_(t.sort(bg))}}B(vr,"id","time"),B(vr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Co(n,t,e){let i=0,s=n.length-1,r,o,a,c;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=rn(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:c}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=rn(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:c}=n[s]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Gl extends vr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Co(e,this.min),this._tableRange=Co(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,c,l,h;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],c=s[o-1],l=s[o],Math.round((h+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Co(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Co(this._table,i*this._tableRange+this._minPos,!0)}}B(Gl,"id","timeseries"),B(Gl,"defaults",vr.defaults);var N1=Object.freeze({__proto__:null,CategoryScale:jl,LinearScale:ql,LogarithmicScale:Hl,RadialLinearScale:zs,TimeScale:vr,TimeSeriesScale:Gl});const L1=[UC,yR,d1,N1];Ne.register(...L1);const Yi={};function wh(n){Yi[n]&&(Yi[n].destroy(),delete Yi[n])}function Rv(){const n=document.documentElement.getAttribute("data-theme")==="dark";return{textColor:n?"#94A3B8":"#64748B",gridColor:n?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",bgColor:n?"#1E2235":"#FFFFFF"}}function xg(n,t){const e=document.getElementById(n);if(!e)return;if(wh(n),!t||t.length===0){e.getContext("2d").clearRect(0,0,e.width,e.height);return}Rv();const i=new Ne(e,{type:"doughnut",data:{labels:t.map(s=>`${s.emoji} ${s.category}`),datasets:[{data:t.map(s=>s.amount),backgroundColor:fS.slice(0,t.length),borderWidth:0,hoverBorderWidth:2,hoverBorderColor:"#fff",borderRadius:4,spacing:2}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"65%",plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,titleFont:{size:13,weight:"600"},bodyFont:{size:12},callbacks:{label:function(s){const r=s.dataset.data.reduce((a,c)=>a+c,0),o=(s.parsed/r*100).toFixed(1);return` ₹${s.parsed.toLocaleString("en-IN")} (${o}%)`}}}},animation:{animateRotate:!0,duration:800,easing:"easeOutQuart"}}});return Yi[n]=i,i}function V1(n,t,e,i){const s=document.getElementById(n);if(!s)return;wh(n);const{textColor:r,gridColor:o}=Rv(),a=new Ne(s,{type:"bar",data:{labels:t,datasets:[{label:"Income",data:e,backgroundColor:"rgba(16, 185, 129, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7},{label:"Expenses",data:i,backgroundColor:"rgba(239, 68, 68, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{color:r,padding:16,usePointStyle:!0,pointStyle:"rectRounded",font:{size:12,weight:"500"}}},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,callbacks:{label:function(c){return` ${c.dataset.label}: ₹${c.parsed.y.toLocaleString("en-IN")}`}}}},scales:{x:{grid:{display:!1},ticks:{color:r,font:{size:11}}},y:{grid:{color:o},ticks:{color:r,font:{size:11},callback:function(c){return"₹"+c.toLocaleString("en-IN")}},beginAtZero:!0}},animation:{duration:800,easing:"easeOutQuart"}}});return Yi[n]=a,a}function F1(){Object.keys(Yi).forEach(n=>{wh(n)})}let we={user:null,profile:null,accounts:[],transactions:[]},De=new Date().getMonth(),er=new Date().getFullYear();function Mv(n){we={...we,...n},F1();const{totalMoney:t}=pn(we.accounts,we.transactions),e=S_(we.accounts,we.transactions),i=`${er}-${String(De+1).padStart(2,"0")}`,s=P_(we.transactions,i),r=s.income>0||s.expenses>0;return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Analytics & Reports 📊</h1>
        <p class="page-subtitle">Understand where your money comes from, where it goes, and where it is currently stored.</p>
      </div>

      <!-- Account Distribution Chart Card -->
      <div class="chart-card" style="margin-bottom: var(--space-6);">
        <h3 class="chart-title">Account Money Distribution (${j(t)})</h3>
        <div class="chart-container">
          <canvas id="accounts-distribution-chart"></canvas>
        </div>

        <div class="category-list">
          ${e.map((o,a)=>`
            <div class="category-item">
              <div class="category-color" style="background: ${ko(a)};"></div>
              <div class="category-info">
                <div class="category-name">${o.account.icon||"🏦"} ${o.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0,o.percentage)}%; background: ${ko(a)};"></div>
                </div>
              </div>
              <div>
                <div class="category-amount">${j(o.balance)}</div>
                <div class="category-percentage">${o.percentage.toFixed(1)}%</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Month Selector Navigation -->
      <div class="month-selector">
        <button class="month-nav-btn" id="btn-month-prev" title="Previous Month">❮</button>
        <div class="month-display">${w_(De)} ${er}</div>
        <button class="month-nav-btn" id="btn-month-next" title="Next Month">❯</button>
      </div>

      ${r?`
        <!-- Monthly Overview Cards -->
        <div class="analytics-overview">
          <div class="analytics-stat">
            <div class="analytics-stat-icon">📥</div>
            <div class="analytics-stat-value income">${j(s.income)}</div>
            <div class="analytics-stat-label">Total Income</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">📤</div>
            <div class="analytics-stat-value expense">${j(s.expenses)}</div>
            <div class="analytics-stat-label">Total Expenses</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">💰</div>
            <div class="analytics-stat-value savings">${j(s.savings)}</div>
            <div class="analytics-stat-label">Net Savings</div>
          </div>
        </div>

        <!-- Highlight Stats -->
        <div class="highlight-stats">
          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Spending Category</div>
            ${s.highestCategory?`
              <div class="highlight-stat-icon">${s.highestCategory.emoji}</div>
              <div class="highlight-stat-value">${s.highestCategory.category}</div>
              <div class="highlight-stat-detail">${j(s.highestCategory.amount)} (${s.highestCategory.percentage.toFixed(1)}%)</div>
            `:'<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>'}
          </div>

          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Single Expense</div>
            ${s.highestExpense?`
              <div class="highlight-stat-icon">${th(s.highestExpense.category)}</div>
              <div class="highlight-stat-value">${s.highestExpense.reason||s.highestExpense.category}</div>
              <div class="highlight-stat-detail">${j(s.highestExpense.amount)}</div>
            `:'<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>'}
          </div>
        </div>

        <!-- Expense Categories Doughnut Chart -->
        ${s.categories.length>0?`
          <div class="chart-card">
            <h3 class="chart-title">Expense Categories Breakdown</h3>
            <div class="chart-container">
              <canvas id="categories-chart"></canvas>
            </div>

            <div class="category-list">
              ${s.categories.map((o,a)=>`
                <div class="category-item">
                  <div class="category-color" style="background: ${ko(a)};"></div>
                  <div class="category-info">
                    <div class="category-name">${o.emoji} ${o.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${o.percentage}%; background: ${ko(a)};"></div>
                    </div>
                  </div>
                  <div>
                    <div class="category-amount">${j(o.amount)}</div>
                    <div class="category-percentage">${o.percentage.toFixed(1)}%</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `:""}

        <!-- Bar Chart: Income vs Expense comparison -->
        <div class="chart-card">
          <h3 class="chart-title">Income vs Expenses Overview</h3>
          <div class="chart-container">
            <canvas id="income-expense-bar-chart"></canvas>
          </div>
        </div>
      `:TS()}
    </div>
  `}function ko(n){const t=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];return t[n%t.length]}function Dv(){const n=document.getElementById("btn-month-prev"),t=document.getElementById("btn-month-next");n&&(n.onclick=()=>{De===0?(De=11,er--):De--,Ag()}),t&&(t.onclick=()=>{De===11?(De=0,er++):De++,Ag()});const e=S_(we.accounts,we.transactions);e.length>0&&setTimeout(()=>{xg("accounts-distribution-chart",e.map(r=>({category:r.account.name,emoji:r.account.icon||"🏦",amount:r.balance})))},50);const i=`${er}-${String(De+1).padStart(2,"0")}`,s=P_(we.transactions,i);s.categories.length>0&&setTimeout(()=>{xg("categories-chart",s.categories)},50),(s.income>0||s.expenses>0)&&setTimeout(()=>{V1("income-expense-bar-chart",[w_(De)],[s.income],[s.expenses])},50)}function Ag(){const n=document.querySelector(".page");n&&(n.outerHTML=Mv(we),Dv())}let zi={user:null,profile:null,transactions:[],budgets:[]};function B1(n){zi={...zi,...n};const t=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{monthlyProgress:e,categoryProgress:i}=p_(zi.budgets,zi.transactions,t);return`
    <div class="page animate-fade-in">
      <div class="page-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <h1 class="page-title">Budget Control 🎯</h1>
          <p class="page-subtitle">Set monthly and category spending limits to keep your finances on track.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-set-budget-modal">+ Set Budget</button>
      </div>

      <!-- Monthly Overall Budget Card -->
      <div class="budget-card">
        <div class="budget-header">
          <div>
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Overall Monthly Budget</div>
            <div class="budget-title">${e?j(e.budget):"Not Set"}</div>
          </div>
          ${e?`
            <div class="budget-percentage" style="color: ${e.exceeded?"var(--expense)":e.percentage>=80?"var(--warning)":"var(--income)"};">
              ${e.percentage.toFixed(1)}% Used
            </div>
          `:""}
        </div>

        ${e?`
          <div class="progress-bar">
            <div class="progress-fill ${e.exceeded?"progress-fill-expense":e.percentage>=80?"progress-fill-warning":"progress-fill-primary"}"
                 style="width: ${e.percentage}%;"></div>
          </div>

          <div class="budget-amounts">
            <div>Spent: <strong>${j(e.spent)}</strong></div>
            <div>Remaining: <strong style="color: ${e.remaining<0?"var(--expense)":"var(--income)"};">${j(e.remaining)}</strong></div>
          </div>
        `:`
          <p style="font-size: var(--fs-sm); color: var(--text-secondary); margin-bottom: 16px;">No overall monthly budget set. Click below to create one.</p>
          <button class="btn btn-outline btn-sm" id="btn-quick-monthly-budget">Set Monthly Limit</button>
        `}
      </div>

      <!-- Category Budgets Section -->
      <div class="section" style="margin-top: var(--space-6);">
        <div class="section-header">
          <h2 class="section-title">Category Budgets</h2>
          <span class="section-link" id="btn-add-category-budget">+ Add Category Limit</span>
        </div>

        ${i.length>0?`
          <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            ${i.map(s=>`
              <div class="card card-flat" style="padding: var(--space-4);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-2);">
                  <div style="font-weight: var(--fw-semibold); font-size: var(--fs-base);">${s.category}</div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="badge ${s.exceeded?"badge-expense":s.percentage>=80?"badge-warning":"badge-income"}">
                      ${s.percentage.toFixed(0)}%
                    </span>
                    <button class="transaction-action-btn delete btn-delete-budget" data-category="${s.category}" title="Delete Budget">🗑️</button>
                  </div>
                </div>

                <div class="progress-bar" style="margin-bottom: var(--space-2);">
                  <div class="progress-fill ${s.exceeded?"progress-fill-expense":s.percentage>=80?"progress-fill-warning":"progress-fill-income"}"
                       style="width: ${s.percentage}%;"></div>
                </div>

                <div style="display: flex; justify-content: space-between; font-size: var(--fs-xs); color: var(--text-secondary);">
                  <span>Budget: ${j(s.budget)} | Spent: ${j(s.spent)}</span>
                  <span style="font-weight: 600; color: ${s.remaining<0?"var(--expense)":"var(--income)"};">
                    ${s.remaining<0?"Exceeded by ":"Remaining: "}${j(Math.abs(s.remaining))}
                  </span>
                </div>
              </div>
            `).join("")}
          </div>
        `:`
          <div class="card card-flat" style="text-align: center; padding: var(--space-6); color: var(--text-secondary);">
            No category budgets set yet. Track specific spending like Food, Travel, etc.
          </div>
        `}
      </div>
    </div>
  `}function $1(n){const t=document.getElementById("btn-set-budget-modal");t&&(t.onclick=()=>sl(n));const e=document.getElementById("btn-quick-monthly-budget");e&&(e.onclick=()=>sl(n,"monthly"));const i=document.getElementById("btn-add-category-budget");i&&(i.onclick=()=>sl(n,"category")),document.querySelectorAll(".btn-delete-budget").forEach(s=>{s.onclick=async()=>{const r=s.dataset.category;if(await $r({icon:"🗑️",title:"Delete Budget",message:`Are you sure you want to remove the budget for ${r}?`,danger:!0}))try{await tS(zi.user.uid,r),K.success("Budget removed!"),n&&n()}catch{K.error("Unable to remove budget.")}}})}function sl(n,t="monthly"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,i=`
    <form id="set-budget-form" novalidate>
      <div class="form-group">
        <label class="form-label">Budget Type</label>
        <div class="tabs" style="margin-bottom: 0;">
          <div class="tab ${t==="monthly"?"active":""}" id="tab-b-monthly">Overall Monthly</div>
          <div class="tab ${t==="category"?"active":""}" id="tab-b-category">Specific Category</div>
        </div>
      </div>

      <div class="form-group" id="group-b-category" style="display: ${t==="category"?"block":"none"};">
        <label class="form-label" for="budget-category">Category</label>
        <select id="budget-category" class="form-select">
          ${Br.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="budget-amount">Budget Limit (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="budget-amount" class="form-input" placeholder="e.g. 10000" step="any" min="1" required autofocus />
        </div>
        <div class="form-error" id="budget-amount-error"></div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-budget">
        Save Budget
      </button>
    </form>
  `;ue({title:"🎯 Set Budget Limit",content:i,onOpen:s=>{let r=t;const o=s.querySelector("#tab-b-monthly"),a=s.querySelector("#tab-b-category"),c=s.querySelector("#group-b-category");o.onclick=()=>{r="monthly",o.classList.add("active"),a.classList.remove("active"),c.style.display="none"},a.onclick=()=>{r="category",a.classList.add("active"),o.classList.remove("active"),c.style.display="block"},s.querySelector("#set-budget-form").onsubmit=async l=>{l.preventDefault();const h=s.querySelector("#budget-amount").value,d=s.querySelector("#budget-category").value;if(s.querySelector("#budget-amount-error").textContent="",!h||Number(h)<=0){s.querySelector("#budget-amount-error").textContent="Please enter a valid budget amount.";return}const f=s.querySelector("#btn-save-budget");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{const g=zi.user.uid;r==="monthly"?await JA(g,h,e):await ZA(g,d,h,e),Ot(),K.success("🎯 Budget set successfully!"),n&&n()}catch{K.error("Unable to save budget."),f.disabled=!1,f.innerHTML="Save Budget"}}}})}let nr={user:null,profile:null};function U1(n){nr={...nr,...n};const{user:t,profile:e}=nr,i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(t==null?void 0:t.email)||(e==null?void 0:e.email)||"",r=i.charAt(0).toUpperCase(),o=e!=null&&e.createdAt?b_(e.createdAt.split("T")[0]):"Recently";return`
    <div class="page animate-fade-in">
      <!-- Profile Header -->
      <div class="profile-header card" style="margin-bottom: var(--space-6);">
        <div class="profile-avatar">${r}</div>
        <h1 class="profile-name">${i}</h1>
        <p class="profile-email">${s}</p>
        <p class="profile-joined">Member since ${o}</p>
      </div>

      <!-- Profile Actions Group -->
      <div class="settings-group" style="margin-bottom: var(--space-6);">
        <div class="settings-item" id="btn-edit-profile">
          <div class="settings-item-left">
            <div class="settings-item-icon">✏️</div>
            <div>
              <div class="settings-item-text">Edit Profile</div>
              <div class="settings-item-subtitle">Change your full name</div>
            </div>
          </div>
          <div class="settings-item-right">❯</div>
        </div>

        <div class="settings-item" id="btn-change-password">
          <div class="settings-item-left">
            <div class="settings-item-icon">🔑</div>
            <div>
              <div class="settings-item-text">Change Password</div>
              <div class="settings-item-subtitle">Update account password</div>
            </div>
          </div>
          <div class="settings-item-right">❯</div>
        </div>

        <div class="settings-item danger" id="btn-profile-logout">
          <div class="settings-item-left">
            <div class="settings-item-icon">🚪</div>
            <div>
              <div class="settings-item-text">Log Out</div>
              <div class="settings-item-subtitle">Sign out of Money Control</div>
            </div>
          </div>
          <div class="settings-item-right">❯</div>
        </div>
      </div>
    </div>
  `}function z1(n,t){const e=document.getElementById("btn-edit-profile");e&&(e.onclick=()=>{var a,c;const o=`
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${((a=nr.profile)==null?void 0:a.name)||((c=nr.user)==null?void 0:c.displayName)||""}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;ue({title:"✏️ Edit Profile",content:o,onOpen:l=>{l.querySelector("#edit-profile-form").onsubmit=async h=>{h.preventDefault();const d=l.querySelector("#profile-name-input").value,f=Ja(d);if(f){l.querySelector("#profile-name-error").textContent=f;return}const g=l.querySelector("#btn-save-profile-name");g.disabled=!0,g.innerHTML='<span class="spinner"></span> Saving...';try{await KA(d),Ot(),K.success("Profile updated!"),t&&t()}catch{K.error("Unable to update profile."),g.disabled=!1,g.innerHTML="Save Changes"}}}})});const i=document.getElementById("btn-change-password");i&&(i.onclick=()=>{ue({title:"🔑 Change Password",content:`
        <form id="change-pass-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="curr-pass">Current Password</label>
            <input type="password" id="curr-pass" class="form-input" required autofocus />
            <div class="form-error" id="curr-pass-error"></div>
          </div>
          <div class="form-group">
            <label class="form-label" for="new-pass">New Password</label>
            <input type="password" id="new-pass" class="form-input" required />
            <div class="form-error" id="new-pass-error"></div>
          </div>
          <div class="form-group">
            <label class="form-label" for="confirm-new-pass">Confirm New Password</label>
            <input type="password" id="confirm-new-pass" class="form-input" required />
            <div class="form-error" id="confirm-new-pass-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-new-pass">Update Password</button>
        </form>
      `,onOpen:o=>{o.querySelector("#change-pass-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#curr-pass").value,l=o.querySelector("#new-pass").value,h=o.querySelector("#confirm-new-pass").value;o.querySelector("#curr-pass-error").textContent="",o.querySelector("#new-pass-error").textContent="",o.querySelector("#confirm-new-pass-error").textContent="";const d=Ju(l);if(d){o.querySelector("#new-pass-error").textContent=d;return}const f=g_(l,h);if(f){o.querySelector("#confirm-new-pass-error").textContent=f;return}const g=o.querySelector("#btn-save-new-pass");g.disabled=!0,g.innerHTML='<span class="spinner"></span> Updating...';try{await YA(c,l),Ot(),K.success("Password updated successfully!")}catch{o.querySelector("#curr-pass-error").textContent="Incorrect current password or re-authentication failed.",g.disabled=!1,g.innerHTML="Update Password"}}}})});const s=document.getElementById("btn-profile-logout");s&&(s.onclick=async()=>{await $r({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out of Money Control?",confirmText:"Log Out",danger:!0})&&(await f_(),K.info("Logged out."),n&&n())})}function j1(n,t=[],e="money-control-transactions"){if(!n||n.length===0)throw new Error("No transactions to export.");const i=a=>{const c=t.find(l=>l.id===a);return c?c.name:""},s=["Date","Type","Amount","Reason","Category","From Account","To Account","Notes"],r=n.sort((a,c)=>new Date(a.date)-new Date(c.date)).map(a=>[a.date,a.type,a.amount,`"${(a.reason||"").replace(/"/g,'""')}"`,a.category||"",`"${i(a.sourceAccountId).replace(/"/g,'""')}"`,`"${i(a.destinationAccountId).replace(/"/g,'""')}"`,`"${(a.notes||"").replace(/"/g,'""')}"`]),o=[s.join(","),...r.map(a=>a.join(","))].join(`
`);H1(o,`${e}.csv`,"text/csv")}function q1(n,t,e,i){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],r=`${i}-${String(e+1).padStart(2,"0")}`,o=n.filter(_=>_.date&&_.date.startsWith(r)),a=_=>{const I=t.find(C=>C.id===_);return I?I.name:""},c=o.filter(_=>_.type==="INCOME").reduce((_,I)=>_+I.amount,0),l=o.filter(_=>_.type==="EXPENSE").reduce((_,I)=>_+I.amount,0),h={};o.filter(_=>_.type==="EXPENSE").forEach(_=>{const I=_.category||"Other";h[I]=(h[I]||0)+_.amount});const d=Object.entries(h).sort((_,I)=>I[1]-_[1]),f=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Money Control — ${s[e]} ${i} Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; color: #1a1d2e; padding: 40px; max-width: 800px; margin: 0 auto; }
    h1 { font-size: 24px; margin-bottom: 8px; }
    h2 { font-size: 18px; margin: 24px 0 12px; color: #64748b; }
    .subtitle { color: #64748b; margin-bottom: 32px; }
    .summary { display: flex; gap: 20px; margin-bottom: 32px; }
    .summary-card { flex: 1; padding: 20px; border-radius: 12px; background: #f8f9fc; }
    .summary-card.income { border-left: 4px solid #10b981; }
    .summary-card.expense { border-left: 4px solid #ef4444; }
    .summary-card.savings { border-left: 4px solid #6c63ff; }
    .summary-label { font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 4px; }
    .summary-value { font-size: 24px; font-weight: 700; }
    .summary-value.income { color: #10b981; }
    .summary-value.expense { color: #ef4444; }
    .summary-value.savings { color: #6c63ff; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { font-size: 12px; text-transform: uppercase; color: #64748b; background: #f8f9fc; }
    .income-row td:nth-child(3) { color: #10b981; font-weight: 600; }
    .expense-row td:nth-child(3) { color: #ef4444; font-weight: 600; }
    .transfer-row td:nth-child(3) { color: #6c63ff; font-weight: 600; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px; text-align: center; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <h1>💰 Money Control Multi-Account Report</h1>
  <p class="subtitle">${s[e]} ${i}</p>
  
  <div class="summary">
    <div class="summary-card income">
      <div class="summary-label">Total Income</div>
      <div class="summary-value income">₹${c.toLocaleString("en-IN")}</div>
    </div>
    <div class="summary-card expense">
      <div class="summary-label">Total Expenses</div>
      <div class="summary-value expense">₹${l.toLocaleString("en-IN")}</div>
    </div>
    <div class="summary-card savings">
      <div class="summary-label">Net Savings</div>
      <div class="summary-value savings">₹${(c-l).toLocaleString("en-IN")}</div>
    </div>
  </div>

  ${d.length>0?`
  <h2>Expense Categories</h2>
  <table>
    <thead><tr><th>Category</th><th>Amount</th><th>% of Total</th></tr></thead>
    <tbody>
      ${d.map(([_,I])=>`
        <tr>
          <td>${_}</td>
          <td>₹${I.toLocaleString("en-IN")}</td>
          <td>${l>0?(I/l*100).toFixed(1):0}%</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
  `:""}

  <h2>All Activity Items</h2>
  <table>
    <thead><tr><th>Date</th><th>Reason</th><th>Amount</th><th>Category</th><th>Account(s)</th><th>Type</th></tr></thead>
    <tbody>
      ${o.sort((_,I)=>new Date(_.date)-new Date(I.date)).map(_=>{let I="";return _.type==="INCOME"?I=`→ ${a(_.destinationAccountId)}`:_.type==="EXPENSE"?I=`← ${a(_.sourceAccountId)}`:_.type==="TRANSFER"&&(I=`${a(_.sourceAccountId)} → ${a(_.destinationAccountId)}`),`
            <tr class="${_.type==="INCOME"?"income-row":_.type==="EXPENSE"?"expense-row":"transfer-row"}">
              <td>${_.date}</td>
              <td>${_.reason||"-"}</td>
              <td>${_.type==="INCOME"?"+":_.type==="EXPENSE"?"-":"↔ "}₹${_.amount.toLocaleString("en-IN")}</td>
              <td>${_.category||"-"}</td>
              <td>${I||"-"}</td>
              <td>${_.type}</td>
            </tr>
          `}).join("")}
    </tbody>
  </table>

  <div class="footer">
    Generated by Money Control V2 on ${new Date().toLocaleDateString("en-IN",{dateStyle:"long"})}
  </div>
</body>
</html>`,g=new Blob([f],{type:"text/html"}),y=URL.createObjectURL(g),v=window.open(y,"_blank");v&&(v.onload=()=>{setTimeout(()=>URL.revokeObjectURL(y),1e3)})}function H1(n,t,e){const i=new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}let Ee={user:null,profile:null,transactions:[]};function Ov(n){var r;Ee={...Ee,...n};const{profile:t}=Ee,e=document.documentElement.getAttribute("data-theme")||"light",i=((r=t==null?void 0:t.settings)==null?void 0:r.allowNegativeBalance)||!1,s=(t==null?void 0:t.initialBalance)||0;return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Settings ⚙️</h1>
        <p class="page-subtitle">Manage preferences, appearance, initial balance, and data exports.</p>
      </div>

      <!-- Appearance Section -->
      <div class="settings-section">
        <div class="settings-section-title">Appearance</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">🎨</div>
              <div>
                <div class="settings-item-text">Theme Mode</div>
                <div class="settings-item-subtitle">Switch between Light and Dark mode</div>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="chip ${e==="light"?"active":""}" id="btn-theme-light">☀️ Light</button>
              <button class="chip ${e==="dark"?"active":""}" id="btn-theme-dark">🌙 Dark</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Financial Controls Section -->
      <div class="settings-section">
        <div class="settings-section-title">Financial Controls</div>
        <div class="settings-group">
          <div class="settings-item" id="btn-edit-initial-balance">
            <div class="settings-item-left">
              <div class="settings-item-icon">💵</div>
              <div>
                <div class="settings-item-text">Initial Balance</div>
                <div class="settings-item-subtitle">Current: ${j(s)}</div>
              </div>
            </div>
            <div class="settings-item-right">
              <span>Edit</span> ❯
            </div>
          </div>

          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">⚠️</div>
              <div>
                <div class="settings-item-text">Allow Negative Balance</div>
                <div class="settings-item-subtitle">Allow spending beyond available balance</div>
              </div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-negative-balance" ${i?"checked":""} />
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">💱</div>
              <div>
                <div class="settings-item-text">Currency Format</div>
                <div class="settings-item-subtitle">Indian Rupee (₹ INR)</div>
              </div>
            </div>
            <div class="settings-item-right" style="font-weight: 600; color: var(--text-primary);">
              ₹ INR
            </div>
          </div>
        </div>
      </div>

      <!-- Data Export Section -->
      <div class="settings-section">
        <div class="settings-section-title">Data & Export</div>
        <div class="settings-group">
          <div class="settings-item" id="btn-export-csv">
            <div class="settings-item-left">
              <div class="settings-item-icon">📊</div>
              <div>
                <div class="settings-item-text">Export Transactions (CSV)</div>
                <div class="settings-item-subtitle">Download all transactions as a CSV spreadsheet</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-report">
            <div class="settings-item-left">
              <div class="settings-item-icon">📑</div>
              <div>
                <div class="settings-item-text">Print Monthly Report</div>
                <div class="settings-item-subtitle">Generate printable HTML report for the current month</div>
              </div>
            </div>
            <div class="settings-item-right">🖨️</div>
          </div>
        </div>
      </div>

      <!-- Account Management Section -->
      <div class="settings-section">
        <div class="settings-section-title">Account</div>
        <div class="settings-group">
          <div class="settings-item danger" id="btn-settings-delete-account">
            <div class="settings-item-left">
              <div class="settings-item-icon">🗑️</div>
              <div>
                <div class="settings-item-text">Delete Account</div>
                <div class="settings-item-subtitle">Permanently erase your account and all transaction data</div>
              </div>
            </div>
            <div class="settings-item-right">❯</div>
          </div>

          <div class="settings-item danger" id="btn-settings-logout">
            <div class="settings-item-left">
              <div class="settings-item-icon">🚪</div>
              <div>
                <div class="settings-item-text">Log Out</div>
                <div class="settings-item-subtitle">Sign out of Money Control</div>
              </div>
            </div>
            <div class="settings-item-right">❯</div>
          </div>
        </div>
      </div>
    </div>
  `}function Nv(n,t){const e=document.getElementById("btn-theme-light");e&&(e.onclick=()=>{document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),Sg()});const i=document.getElementById("btn-theme-dark");i&&(i.onclick=()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),Sg()});const s=document.getElementById("toggle-negative-balance");s&&(s.onchange=async h=>{const d=h.target.checked;try{await OA(Ee.user.uid,{allowNegativeBalance:d}),K.success(`Negative balance ${d?"enabled":"disabled"}.`),t&&t()}catch{K.error("Unable to update setting."),h.target.checked=!d}});const r=document.getElementById("btn-edit-initial-balance");r&&(r.onclick=()=>{var f;const d=`
        <form id="edit-initial-form" novalidate>
          <div class="alert-banner alert-banner-warning" style="margin-bottom: 16px;">
            <span class="alert-banner-icon">⚠️</span>
            <div class="alert-banner-text">
              Changing your initial balance will automatically recalculate your total available money.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="new-initial-input">Initial Balance (₹)</label>
            <div class="form-input-group">
              <span class="input-prefix">₹</span>
              <input type="number" id="new-initial-input" class="form-input" value="${((f=Ee.profile)==null?void 0:f.initialBalance)||0}" step="any" min="0" required autofocus />
            </div>
            <div class="form-error" id="new-initial-error"></div>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-initial">Save Initial Balance</button>
        </form>
      `;ue({title:"💵 Edit Initial Balance",content:d,onOpen:g=>{g.querySelector("#edit-initial-form").onsubmit=async y=>{y.preventDefault();const v=g.querySelector("#new-initial-input").value,_=Vr(v);if(_){g.querySelector("#new-initial-error").textContent=_;return}const I=g.querySelector("#btn-save-initial");I.disabled=!0,I.innerHTML='<span class="spinner"></span> Saving...';try{await o_(Ee.user.uid,Number(v)),Ot(),K.success("Initial balance updated!"),t&&t()}catch{K.error("Unable to update initial balance."),I.disabled=!1,I.innerHTML="Save Initial Balance"}}}})});const o=document.getElementById("btn-export-csv");o&&(o.onclick=()=>{try{j1(Ee.transactions,Ee.accounts),K.success("📊 Transactions exported to CSV!")}catch(h){K.error(h.message||"Unable to export transactions.")}});const a=document.getElementById("btn-export-report");a&&(a.onclick=()=>{try{const h=new Date;q1(Ee.transactions,Ee.accounts,h.getMonth(),h.getFullYear()),K.success("📑 Printable report opened!")}catch{K.error("Unable to generate report.")}});const c=document.getElementById("btn-settings-logout");c&&(c.onclick=async()=>{await $r({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out?",confirmText:"Log Out",danger:!0})&&(await f_(),K.info("Logged out."),n&&n())});const l=document.getElementById("btn-settings-delete-account");l&&(l.onclick=()=>{ue({title:"🚨 Delete Account",content:`
        <form id="delete-acc-form" novalidate>
          <div class="alert-banner alert-banner-danger" style="margin-bottom: 16px;">
            <span class="alert-banner-icon">🚨</span>
            <div class="alert-banner-text">
              This action is permanent! All your data, transactions, and settings will be permanently erased.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="del-pass-input">Confirm Password</label>
            <input type="password" id="del-pass-input" class="form-input" placeholder="Enter password to confirm" required autofocus />
            <div class="form-error" id="del-pass-error"></div>
          </div>

          <button type="submit" class="btn btn-danger btn-block btn-lg" id="btn-confirm-delete-acc">
            Delete My Account Permanently
          </button>
        </form>
      `,onOpen:d=>{d.querySelector("#delete-acc-form").onsubmit=async f=>{f.preventDefault();const g=d.querySelector("#del-pass-input").value;if(d.querySelector("#del-pass-error").textContent="",!g){d.querySelector("#del-pass-error").textContent="Please enter your password.";return}const y=d.querySelector("#btn-confirm-delete-acc");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Deleting...';try{await XA(g),Ot(),K.info("Account deleted."),n&&n()}catch{d.querySelector("#del-pass-error").textContent="Incorrect password or re-authentication failed.",y.disabled=!1,y.innerHTML="Delete My Account Permanently"}}}})})}function Sg(){const n=document.querySelector(".page");n&&(n.outerHTML=Ov(Ee),Nv())}function Lv(n){return`
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span class="sidebar-logo-icon">💰</span>
        <span class="sidebar-logo-text">Money Control</span>
      </div>
      <nav class="sidebar-nav">
        ${[{id:"dashboard",icon:"🏠",label:"Dashboard"},{id:"accounts",icon:"🏦",label:"Accounts"},{id:"transactions",icon:"💸",label:"Transactions"},{id:"analytics",icon:"📊",label:"Analytics"},{id:"budget",icon:"🎯",label:"Budget"},{id:"money-control",icon:"📅",label:"Money Control"},{id:"profile",icon:"👤",label:"Profile"},{id:"settings",icon:"⚙️",label:"Settings"}].map(e=>`
          <div class="sidebar-link ${n===e.id?"active":""}" data-page="${e.id}">
            <span class="sidebar-link-icon">${e.icon}</span>
            <span>${e.label}</span>
          </div>
        `).join("")}
      </nav>
    </aside>
  `}function Vv(n){return`
    <nav class="bottom-nav">
      <div class="bottom-nav-items">
        ${[{id:"dashboard",icon:"🏠",label:"Home"},{id:"accounts",icon:"🏦",label:"Accounts"},{id:"add",icon:"➕",label:"Add",isAdd:!0},{id:"transactions",icon:"📜",label:"Txns"},{id:"analytics",icon:"📊",label:"Analytics"}].map(e=>e.isAdd?'<div class="bottom-nav-add" data-action="add" id="mobile-add-btn">➕</div>':`
            <div class="bottom-nav-item ${n===e.id?"active":""}" data-page="${e.id}">
              <span class="bottom-nav-item-icon">${e.icon}</span>
              <span>${e.label}</span>
            </div>
          `).join("")}
      </div>
    </nav>
  `}function W1(n){document.querySelectorAll(".sidebar-link[data-page]").forEach(e=>{e.onclick=()=>{const i=e.dataset.page;n(i)}}),document.querySelectorAll(".bottom-nav-item[data-page]").forEach(e=>{e.onclick=()=>{const i=e.dataset.page;n(i)}});const t=document.getElementById("mobile-add-btn");t&&(t.onclick=()=>{window.dispatchEvent(new CustomEvent("open-add-menu"))})}function G1(){return`
    <div class="page" style="opacity: 0.7;">
      <div style="margin-bottom: 24px;">
        <div class="skeleton" style="height: 28px; width: 200px; margin-bottom: 8px;"></div>
        <div class="skeleton" style="height: 14px; width: 150px;"></div>
      </div>
      <div class="skeleton" style="height: 140px; border-radius: 20px; margin-bottom: 24px;"></div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 100px; border-radius: 16px;"></div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
        <div class="skeleton" style="height: 56px; border-radius: 16px;"></div>
        <div class="skeleton" style="height: 56px; border-radius: 16px;"></div>
      </div>
      ${K1(3)}
    </div>
  `}function K1(n=5){let t="";for(let e=0;e<n;e++)t+=`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;return t}const q={user:null,profile:null,accounts:[],transactions:[],budgets:[],activePage:"dashboard",unsubscribeAccounts:null,unsubscribeTx:null};function Y1(){const n=localStorage.getItem("theme");n?document.documentElement.setAttribute("data-theme",n):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}Y1();const oc=document.getElementById("app");function X1(){GA(async n=>{if(q.unsubscribeAccounts&&(q.unsubscribeAccounts(),q.unsubscribeAccounts=null),q.unsubscribeTx&&(q.unsubscribeTx(),q.unsubscribeTx=null),!n){q.user=null,q.profile=null,q.accounts=[],q.transactions=[],q.budgets=[],Ca();return}q.user=n,J1();try{await Fv(n.uid)}catch(t){console.error("Error loading user data:",t),Ca()}}),window.addEventListener("hashchange",eM),window.addEventListener("open-add-menu",()=>{nM()})}async function Fv(n){const t=await Qa(n);if(q.profile=t,!t||t.initialBalance===null||t.initialBalance===void 0){Q1();return}await l_(n,t.initialBalance),q.budgets=await Xu(n),q.unsubscribeAccounts=BA(n,e=>{q.accounts=e,br()}),q.unsubscribeTx=UA(n,e=>{q.transactions=e,br()})}function Ca(){oc.innerHTML=oS(),v_(()=>{})}function Q1(){oc.innerHTML=aS(),cS(q.user.uid,async()=>{await Fv(q.user.uid)})}function J1(){oc.innerHTML=`
    <div class="app-layout">
      ${Lv(q.activePage)}
      <main class="main-content">
        ${G1()}
      </main>
      ${Vv(q.activePage)}
    </div>
  `}function br(){const n=window.location.hash.replace("#/","").replace("#","");n&&["dashboard","accounts","transactions","money-control","analytics","budget","profile","settings"].includes(n)?q.activePage=n:q.activePage="dashboard";const t=Z1(q.activePage);oc.innerHTML=`
    <div class="app-layout">
      ${Lv(q.activePage)}
      <main class="main-content" id="main-content-area">
        ${t}
      </main>
      ${Vv(q.activePage)}
    </div>
  `,W1(Kl),tM(q.activePage)}function Z1(n){switch(n){case"dashboard":return tp(q);case"accounts":return IS(q);case"transactions":return k_(q);case"money-control":return jo(q);case"analytics":return Mv(q);case"budget":return B1(q);case"profile":return U1(q);case"settings":return Ov(q);default:return tp(q)}}function tM(n){const t=async()=>{q.user&&(q.profile=await Qa(q.user.uid),q.budgets=await Xu(q.user.uid),br())};switch(n){case"dashboard":ep(Kl,t);break;case"accounts":xS(t);break;case"transactions":D_(t);break;case"money-control":qo(t);break;case"analytics":Dv();break;case"budget":$1(t);break;case"profile":z1(()=>Ca(),t);break;case"settings":Nv(()=>Ca(),t);break;default:ep(Kl,t);break}}function Kl(n){q.activePage=n,window.location.hash=`#/${n}`}function eM(){var n;q.user&&((n=q.profile)==null?void 0:n.initialBalance)!==null&&br()}function nM(){ue({title:"⚡ Quick Action",content:`
    <div style="display: flex; flex-direction: column; gap: 12px; padding: 12px 0;">
      <button class="quick-action-btn income" id="fab-modal-add-income">
        <span>➕</span> Add Money (Income)
      </button>
      <button class="quick-action-btn expense" id="fab-modal-add-expense">
        <span>−</span> Add Expense
      </button>
      <button class="quick-action-btn" id="fab-modal-transfer" style="background: var(--primary-bg); color: var(--primary); border: 1.5px solid var(--primary-light);">
        <span>↔</span> Transfer Money
      </button>
    </div>
  `,onOpen:t=>{const e=t.querySelector("#fab-modal-add-income"),i=t.querySelector("#fab-modal-add-expense"),s=t.querySelector("#fab-modal-transfer"),r=async()=>{q.user&&(q.profile=await Qa(q.user.uid),q.budgets=await Xu(q.user.uid),br())};e&&(e.onclick=()=>gi("INCOME",r)),i&&(i.onclick=()=>gi("EXPENSE",r)),s&&(s.onclick=()=>eh(r))}})}X1();
