var Zb=Object.defineProperty;var tw=(n,t,e)=>t in n?Zb(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var U=(n,t,e)=>tw(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ew=()=>{};var jh={};/**
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
 */const Jg=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},nw=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),i.push(e[d],e[h],e[f],e[g])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Jg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):nw(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new iw;const f=r<<2|a>>4;if(i.push(f),l!==64){const g=a<<4&240|l>>2;if(i.push(g),h!==64){const y=l<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sw=function(n){const t=Jg(n);return Zg.encodeByteArray(t,!0)},va=function(n){return sw(n).replace(/\./g,"")},tm=function(n){try{return Zg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function rw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ow=()=>rw().__FIREBASE_DEFAULTS__,aw=()=>{if(typeof process>"u"||typeof jh>"u")return;const n=jh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&tm(n[1]);return t&&JSON.parse(t)},Ka=()=>{try{return ew()||ow()||aw()||cw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},em=n=>{var t,e;return(e=(t=Ka())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},lw=n=>{const t=em(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},nm=()=>{var n;return(n=Ka())===null||n===void 0?void 0:n.config},im=n=>{var t;return(t=Ka())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class uw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function _s(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function dw(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[va(JSON.stringify(e)),va(JSON.stringify(o)),""].join(".")}const rr={};function hw(){const n={prod:[],emulator:[]};for(const t of Object.keys(rr))rr[t]?n.emulator.push(t):n.prod.push(t);return n}function fw(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Hh=!1;function rm(n,t){if(typeof window>"u"||typeof document>"u"||!_s(window.location.host)||rr[n]===t||rr[n]||Hh)return;rr[n]=t;function e(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=hw().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,g){f.setAttribute("width","24"),f.setAttribute("id",g),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Hh=!0,o()},f}function d(f,g){f.setAttribute("id",g),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=fw(i),g=e("text"),y=document.getElementById(g)||document.createElement("span"),_=e("learnmore"),v=document.getElementById(_)||document.createElement("a"),T=e("preprendIcon"),k=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const M=f.element;a(M),d(v,_);const D=l();c(k,T),M.append(k,y,v,D),document.body.appendChild(M)}r?(y.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function gw(){var n;const t=(n=Ka())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _w(){const n=ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bw(){return!gw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Ew(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const Tw="FirebaseError";class Tn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Tw,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Iw(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,a,i)}}function Iw(n,t){return n.replace(Aw,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Aw=/\{\$([^}]+)}/g;function xw(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Si(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(qh(r)&&qh(o)){if(!Si(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function qh(n){return n!==null&&typeof n=="object"}/**
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
 */function Fr(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function qs(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function Ws(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Sw(n,t){const e=new Pw(n,t);return e.subscribe.bind(e)}class Pw{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");kw(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=Wc),s.error===void 0&&(s.error=Wc),s.complete===void 0&&(s.complete=Wc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kw(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Wc(){}/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Pi{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const gi="[DEFAULT]";/**
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
 */class Cw{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new uw;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mw(t))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=gi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gi){return this.instances.has(t)}getOptions(t=gi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Rw(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=gi){return this.component?this.component.multipleInstances?t:gi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rw(n){return n===gi?void 0:n}function Mw(n){return n.instantiationMode==="EAGER"}/**
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
 */class Dw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Cw(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var nt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(nt||(nt={}));const Ow={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},Nw=nt.INFO,Lw={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},Vw=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Lw[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pu{constructor(t){this.name=t,this._logLevel=Nw,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ow[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...t),this._logHandler(this,nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...t),this._logHandler(this,nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...t),this._logHandler(this,nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...t),this._logHandler(this,nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...t),this._logHandler(this,nt.ERROR,...t)}}const Fw=(n,t)=>t.some(e=>n instanceof e);let Wh,Gh;function Bw(){return Wh||(Wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $w(){return Gh||(Gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const om=new WeakMap,wl=new WeakMap,am=new WeakMap,Gc=new WeakMap,gu=new WeakMap;function Uw(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e($n(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&om.set(e,n)}).catch(()=>{}),gu.set(t,n),t}function zw(n){if(wl.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});wl.set(n,t)}let El={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return wl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||am.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $n(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jw(n){El=n(El)}function Hw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Kc(this),t,...e);return am.set(i,t.sort?t.sort():[t]),$n(i)}:$w().includes(n)?function(...t){return n.apply(Kc(this),t),$n(om.get(this))}:function(...t){return $n(n.apply(Kc(this),t))}}function qw(n){return typeof n=="function"?Hw(n):(n instanceof IDBTransaction&&zw(n),Fw(n,Bw())?new Proxy(n,El):n)}function $n(n){if(n instanceof IDBRequest)return Uw(n);if(Gc.has(n))return Gc.get(n);const t=qw(n);return t!==n&&(Gc.set(n,t),gu.set(t,n)),t}const Kc=n=>gu.get(n);function Ww(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=$n(o);return i&&o.addEventListener("upgradeneeded",c=>{i($n(o.result),c.oldVersion,c.newVersion,$n(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gw=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],Yc=new Map;function Kh(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Yc.get(t))return Yc.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Kw.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Gw.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return Yc.set(t,r),r}jw(n=>({...n,get:(t,e,i)=>Kh(t,e)||n.get(t,e,i),has:(t,e)=>!!Kh(t,e)||n.has(t,e)}));/**
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
 */class Yw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Xw(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Xw(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Tl="@firebase/app",Yh="0.13.2";/**
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
 */const _n=new pu("@firebase/app"),Qw="@firebase/app-compat",Jw="@firebase/analytics-compat",Zw="@firebase/analytics",t0="@firebase/app-check-compat",e0="@firebase/app-check",n0="@firebase/auth",i0="@firebase/auth-compat",s0="@firebase/database",r0="@firebase/data-connect",o0="@firebase/database-compat",a0="@firebase/functions",c0="@firebase/functions-compat",l0="@firebase/installations",u0="@firebase/installations-compat",d0="@firebase/messaging",h0="@firebase/messaging-compat",f0="@firebase/performance",p0="@firebase/performance-compat",g0="@firebase/remote-config",m0="@firebase/remote-config-compat",y0="@firebase/storage",v0="@firebase/storage-compat",_0="@firebase/firestore",b0="@firebase/ai",w0="@firebase/firestore-compat",E0="firebase",T0="11.10.0";/**
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
 */const Il="[DEFAULT]",I0={[Tl]:"fire-core",[Qw]:"fire-core-compat",[Zw]:"fire-analytics",[Jw]:"fire-analytics-compat",[e0]:"fire-app-check",[t0]:"fire-app-check-compat",[n0]:"fire-auth",[i0]:"fire-auth-compat",[s0]:"fire-rtdb",[r0]:"fire-data-connect",[o0]:"fire-rtdb-compat",[a0]:"fire-fn",[c0]:"fire-fn-compat",[l0]:"fire-iid",[u0]:"fire-iid-compat",[d0]:"fire-fcm",[h0]:"fire-fcm-compat",[f0]:"fire-perf",[p0]:"fire-perf-compat",[g0]:"fire-rc",[m0]:"fire-rc-compat",[y0]:"fire-gcs",[v0]:"fire-gcs-compat",[_0]:"fire-fst",[w0]:"fire-fst-compat",[b0]:"fire-vertex","fire-js":"fire-js",[E0]:"fire-js-all"};/**
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
 */const vr=new Map,A0=new Map,Al=new Map;function Xh(n,t){try{n.container.addComponent(t)}catch(e){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ls(n){const t=n.name;if(Al.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;Al.set(t,n);for(const e of vr.values())Xh(e,n);for(const e of A0.values())Xh(e,n);return!0}function mu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function we(n){return n==null?!1:n.settings!==void 0}/**
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
 */const x0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new Vr("app","Firebase",x0);/**
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
 */class S0{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=T0;function cm(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Il,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(e||(e=nm()),!e)throw Un.create("no-options");const r=vr.get(s);if(r){if(Si(e,r.options)&&Si(i,r.config))return r;throw Un.create("duplicate-app",{appName:s})}const o=new Dw(s);for(const c of Al.values())o.addComponent(c);const a=new S0(e,i,o);return vr.set(s,a),a}function yu(n=Il){const t=vr.get(n);if(!t&&n===Il&&nm())return cm();if(!t)throw Un.create("no-app",{appName:n});return t}function P0(){return Array.from(vr.values())}function zn(n,t,e){var i;let s=(i=I0[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}ls(new Pi(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const k0="firebase-heartbeat-database",C0=1,_r="firebase-heartbeat-store";let Xc=null;function lm(){return Xc||(Xc=Ww(k0,C0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(_r)}catch(e){console.warn(e)}}}}).catch(n=>{throw Un.create("idb-open",{originalErrorMessage:n.message})})),Xc}async function R0(n){try{const e=(await lm()).transaction(_r),i=await e.objectStore(_r).get(um(n));return await e.done,i}catch(t){if(t instanceof Tn)_n.warn(t.message);else{const e=Un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_n.warn(e.message)}}}async function Qh(n,t){try{const i=(await lm()).transaction(_r,"readwrite");await i.objectStore(_r).put(t,um(n)),await i.done}catch(e){if(e instanceof Tn)_n.warn(e.message);else{const i=Un.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});_n.warn(i.message)}}}function um(n){return`${n.name}!${n.options.appId}`}/**
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
 */const M0=1024,D0=30;class O0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new L0(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jh();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>D0){const o=V0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){_n.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jh(),{heartbeatsToSend:i,unsentEntries:s}=N0(this._heartbeatsCache.heartbeats),r=va(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return _n.warn(e),""}}}function Jh(){return new Date().toISOString().substring(0,10)}function N0(n,t=M0){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Zh(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Zh(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class L0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ww()?Ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await R0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Zh(n){return va(JSON.stringify({version:2,heartbeats:n})).length}function V0(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function F0(n){ls(new Pi("platform-logger",t=>new Yw(t),"PRIVATE")),ls(new Pi("heartbeat",t=>new O0(t),"PRIVATE")),zn(Tl,Yh,n),zn(Tl,Yh,"esm2017"),zn("fire-js","")}F0("");function vu(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}function dm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B0=dm,hm=new Vr("auth","Firebase",dm());/**
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
 */const _a=new pu("@firebase/auth");function $0(n,...t){_a.logLevel<=nt.WARN&&_a.warn(`Auth (${bs}): ${n}`,...t)}function Go(n,...t){_a.logLevel<=nt.ERROR&&_a.error(`Auth (${bs}): ${n}`,...t)}/**
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
 */function Oe(n,...t){throw _u(n,...t)}function je(n,...t){return _u(n,...t)}function fm(n,t,e){const i=Object.assign(Object.assign({},B0()),{[t]:e});return new Vr("auth","Firebase",i).create(t,{appName:n.name})}function mn(n){return fm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _u(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return hm.create(n,...t)}function G(n,t,...e){if(!n)throw _u(t,...e)}function dn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Go(t),new Error(t)}function bn(n,t){n||dn(t)}/**
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
 */function xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function U0(){return tf()==="http:"||tf()==="https:"}function tf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function z0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U0()||yw()||"connection"in navigator)?navigator.onLine:!0}function j0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Br{constructor(t,e){this.shortDelay=t,this.longDelay=e,bn(e>t,"Short delay should be less than long delay!"),this.isMobile=pw()||vw()}get(){return z0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bu(n,t){bn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class pm{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const H0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const q0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],W0=new Br(3e4,6e4);function In(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ve(n,t,e,i,s={}){return gm(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=Fr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return mw()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&_s(n.emulatorConfig.host)&&(l.credentials="include"),pm.fetch()(await mm(n,n.config.apiHost,e,a),l)})}async function gm(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},H0),t);try{const s=new K0(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ao(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ao(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ao(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fm(n,d,l);Oe(n,d)}}catch(s){if(s instanceof Tn)throw s;Oe(n,"network-request-failed",{message:String(s)})}}async function $r(n,t,e,i,s={}){const r=await Ve(n,t,e,i,s);return"mfaPendingCredential"in r&&Oe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function mm(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?bu(n.config,s):`${n.config.apiScheme}://${s}`;return q0.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function G0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class K0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(je(this.auth,"network-request-failed")),W0.get())})}}function Ao(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=je(n,t,i);return s.customData._tokenResponse=e,s}function ef(n){return n!==void 0&&n.enterprise!==void 0}class Y0{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return G0(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function X0(n,t){return Ve(n,"GET","/v2/recaptchaConfig",In(n,t))}/**
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
 */async function Q0(n,t){return Ve(n,"POST","/v1/accounts:delete",t)}async function ba(n,t){return Ve(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function or(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function J0(n,t=!1){const e=mt(n),i=await e.getIdToken(t),s=wu(i);G(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:or(Qc(s.auth_time)),issuedAtTime:or(Qc(s.iat)),expirationTime:or(Qc(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qc(n){return Number(n)*1e3}function wu(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const s=tm(e);return s?JSON.parse(s):(Go("Failed to decode base64 JWT payload"),null)}catch(s){return Go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nf(n){const t=wu(n);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ki(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof Tn&&Z0(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Z0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class tE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wa(n){var t;const e=n.auth,i=await n.getIdToken(),s=await ki(n,ba(e,{idToken:i}));G(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?ym(r.providerUserInfo):[],a=nE(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sl(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function eE(n){const t=mt(n);await wa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nE(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function ym(n){return n.map(t=>{var{providerId:e}=t,i=vu(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function iE(n,t){const e=await gm(n,{},async()=>{const i=Fr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await mm(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return n.emulatorConfig&&_s(n.emulatorConfig.host)&&(c.credentials="include"),pm.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function sE(n,t){return Ve(n,"POST","/v2/accounts:revokeToken",In(n,t))}/**
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
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):nf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){G(t.length!==0,"internal-error");const e=nf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await iE(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new ns;return i&&(G(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(G(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function kn(n,t){G(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Ce{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,r=vu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await ki(this,this.stsTokenManager.getToken(this.auth,t));return G(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return J0(this,t)}reload(){return eE(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ce(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await wa(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(we(this.auth.app))return Promise.reject(mn(this.auth));const t=await this.getIdToken();return await ki(this,Q0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,r,o,a,c,l,d;const h=(i=e.displayName)!==null&&i!==void 0?i:void 0,f=(s=e.email)!==null&&s!==void 0?s:void 0,g=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,v=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=e.createdAt)!==null&&l!==void 0?l:void 0,k=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:D,isAnonymous:O,providerData:L,stsTokenManager:I}=e;G(M&&I,t,"internal-error");const b=ns.fromJSON(this.name,I);G(typeof M=="string",t,"internal-error"),kn(h,t.name),kn(f,t.name),G(typeof D=="boolean",t,"internal-error"),G(typeof O=="boolean",t,"internal-error"),kn(g,t.name),kn(y,t.name),kn(_,t.name),kn(v,t.name),kn(T,t.name),kn(k,t.name);const E=new Ce({uid:M,auth:t,email:f,emailVerified:D,displayName:h,isAnonymous:O,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:b,createdAt:T,lastLoginAt:k});return L&&Array.isArray(L)&&(E.providerData=L.map(x=>Object.assign({},x))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(t,e,i=!1){const s=new ns;s.updateFromServerResponse(e);const r=new Ce({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await wa(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];G(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?ym(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new ns;a.updateFromIdToken(i);const c=new Ce({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Sl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const sf=new Map;function hn(n){bn(n instanceof Function,"Expected a class definition");let t=sf.get(n);return t?(bn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,sf.set(n,t),t)}/**
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
 */class vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}vm.type="NONE";const rf=vm;/**
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
 */function Ko(n,t,e){return`firebase:${n}:${t}:${e}`}class is{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ko(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ko("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ba(this.auth,{idToken:t}).catch(()=>{});return e?Ce._fromGetAccountInfoResponse(this.auth,e,t):null}return Ce._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new is(hn(rf),t,i);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||hn(rf);const o=Ko(i,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){let h;if(typeof d=="string"){const f=await ba(t,{idToken:d}).catch(()=>{});if(!f)break;h=await Ce._fromGetAccountInfoResponse(t,f,d)}else h=Ce._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new is(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new is(r,t,i))}}/**
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
 */function of(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Em(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_m(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Im(t))return"Blackberry";if(Am(t))return"Webos";if(bm(t))return"Safari";if((t.includes("chrome/")||wm(t))&&!t.includes("edge/"))return"Chrome";if(Tm(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _m(n=ie()){return/firefox\//i.test(n)}function bm(n=ie()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wm(n=ie()){return/crios\//i.test(n)}function Em(n=ie()){return/iemobile/i.test(n)}function Tm(n=ie()){return/android/i.test(n)}function Im(n=ie()){return/blackberry/i.test(n)}function Am(n=ie()){return/webos/i.test(n)}function Eu(n=ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rE(n=ie()){var t;return Eu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function oE(){return _w()&&document.documentMode===10}function xm(n=ie()){return Eu(n)||Tm(n)||Am(n)||Im(n)||/windows phone/i.test(n)||Em(n)}/**
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
 */function Sm(n,t=[]){let e;switch(n){case"Browser":e=of(ie());break;case"Worker":e=`${of(ie())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${bs}/${i}`}/**
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
 */class aE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function cE(n,t={}){return Ve(n,"GET","/v2/passwordPolicy",In(n,t))}/**
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
 */const lE=6;class uE{constructor(t){var e,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:lE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class dE{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.beforeStateQueue=new aE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=hn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await is.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ba(this,{idToken:t}),i=await Ce._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(we(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await wa(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=j0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(we(this.app))return Promise.reject(mn(this));const e=t?mt(t):null;return e&&G(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return we(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return we(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cE(this),e=new uE(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Vr("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await sE(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&hn(t)||this._popupRedirectResolver;G(e,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[hn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,i,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(we(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&$0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ni(n){return mt(n)}class af{constructor(t){this.auth=t,this.observer=null,this.addObserver=Sw(e=>this.observer=e)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hE(n){Ya=n}function Pm(n){return Ya.loadJS(n)}function fE(){return Ya.recaptchaEnterpriseScript}function pE(){return Ya.gapiScript}function gE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class mE{constructor(){this.enterprise=new yE}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class yE{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const vE="recaptcha-enterprise",km="NO_RECAPTCHA";class _E{constructor(t){this.type=vE,this.auth=ni(t)}async verify(t="verify",e=!1){async function i(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{X0(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Y0(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;ef(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(km)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mE().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!e&&ef(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=fE();c.length!==0&&(c+=a),Pm(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cf(n,t,e,i=!1,s=!1){const r=new _E(n);let o;if(s)o=km;else try{o=await r.verify(e)}catch{o=await r.verify(e,!0)}const a=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ea(n,t,e,i,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cf(n,t,e,e==="getOobCode");return i(n,o)}else return i(n,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await cf(n,t,e,e==="getOobCode");return i(n,a)}else return Promise.reject(o)})}/**
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
 */function bE(n,t){const e=mu(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(Si(r,t??{}))return s;Oe(s,"already-initialized")}return e.initialize({options:t})}function wE(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(hn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function EE(n,t,e){const i=ni(n);G(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=Cm(t),{host:o,port:a}=TE(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Si(l,i.config.emulator)&&Si(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,_s(o)?(sm(`${r}//${o}${c}`),rm("Auth",!0)):IE()}function Cm(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function TE(n){const t=Cm(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:lf(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:lf(o)}}}function lf(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function IE(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Tu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return dn("not implemented")}_getIdTokenResponse(t){return dn("not implemented")}_linkToIdToken(t,e){return dn("not implemented")}_getReauthenticationResolver(t){return dn("not implemented")}}async function AE(n,t){return Ve(n,"POST","/v1/accounts:update",t)}async function xE(n,t){return Ve(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function SE(n,t){return $r(n,"POST","/v1/accounts:signInWithPassword",In(n,t))}async function PE(n,t){return Ve(n,"POST","/v1/accounts:sendOobCode",In(n,t))}async function kE(n,t){return PE(n,t)}/**
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
 */async function CE(n,t){return $r(n,"POST","/v1/accounts:signInWithEmailLink",In(n,t))}async function RE(n,t){return $r(n,"POST","/v1/accounts:signInWithEmailLink",In(n,t))}/**
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
 */class br extends Tu{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new br(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new br(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ea(t,e,"signInWithPassword",SE);case"emailLink":return CE(t,{email:this._email,oobCode:this._password});default:Oe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ea(t,i,"signUpPassword",xE);case"emailLink":return RE(t,{idToken:e,email:this._email,oobCode:this._password});default:Oe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function ss(n,t){return $r(n,"POST","/v1/accounts:signInWithIdp",In(n,t))}/**
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
 */const ME="http://localhost";class Ci extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ci(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Oe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,r=vu(e,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ci(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return ss(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,ss(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ss(t,e)}buildRequest(){const t={requestUri:ME,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Fr(e)}return t}}/**
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
 */function DE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OE(n){const t=qs(Ws(n)).link,e=t?qs(Ws(t)).deep_link_id:null,i=qs(Ws(n)).deep_link_id;return(i?qs(Ws(i)).link:null)||i||e||t||n}class Iu{constructor(t){var e,i,s,r,o,a;const c=qs(Ws(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,h=DE((s=c.mode)!==null&&s!==void 0?s:null);G(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=OE(t);try{return new Iu(e)}catch{return null}}}/**
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
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(t,e){return br._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=Iu.parseLink(e);return G(i,"argument-error"),br._fromEmailAndCode(t,i.code,i.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ur extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends Ur{constructor(){super("facebook.com")}static credential(t){return Ci._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cn.credentialFromTaggedObject(t)}static credentialFromError(t){return Cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cn.credential(t.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ci._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return Rn.credential(e,i)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class Mn extends Ur{constructor(){super("github.com")}static credential(t){return Ci._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mn.credentialFromTaggedObject(t)}static credentialFromError(t){return Mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mn.credential(t.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Dn extends Ur{constructor(){super("twitter.com")}static credential(t,e){return Ci._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Dn.credentialFromTaggedObject(t)}static credentialFromError(t){return Dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return Dn.credential(e,i)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function NE(n,t){return $r(n,"POST","/v1/accounts:signUp",In(n,t))}/**
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
 */class Ri{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Ce._fromIdTokenResponse(t,i,s),o=uf(i);return new Ri({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=uf(i);return new Ri({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function uf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ta extends Tn{constructor(t,e,i,s){var r;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new Ta(t,e,i,s)}}function Mm(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(n,r,t,i):r})}async function LE(n,t,e=!1){const i=await ki(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Ri._forOperation(n,"link",i)}/**
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
 */async function Dm(n,t,e=!1){const{auth:i}=n;if(we(i.app))return Promise.reject(mn(i));const s="reauthenticate";try{const r=await ki(n,Mm(i,s,t,n),e);G(r.idToken,i,"internal-error");const o=wu(r.idToken);G(o,i,"internal-error");const{sub:a}=o;return G(n.uid===a,i,"user-mismatch"),Ri._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Oe(i,"user-mismatch"),r}}/**
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
 */async function Om(n,t,e=!1){if(we(n.app))return Promise.reject(mn(n));const i="signIn",s=await Mm(n,i,t),r=await Ri._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}async function VE(n,t){return Om(ni(n),t)}async function Au(n,t){return Dm(mt(n),t)}/**
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
 */async function Nm(n){const t=ni(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function FE(n,t,e){const i=ni(n);await Ea(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",kE)}async function BE(n,t,e){if(we(n.app))return Promise.reject(mn(n));const i=ni(n),o=await Ea(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NE).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Nm(n),c}),a=await Ri._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function $E(n,t,e){return we(n.app)?Promise.reject(mn(n)):VE(mt(n),An.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Nm(n),i})}/**
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
 */async function UE(n,t){return Ve(n,"POST","/v1/accounts:update",t)}/**
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
 */async function Lm(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const i=mt(n),r={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await ki(i,UE(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function zE(n,t){return jE(mt(n),null,t)}async function jE(n,t,e){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.password=e);const o=await ki(n,AE(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function HE(n,t){return mt(n).setPersistence(t)}function qE(n,t,e,i){return mt(n).onIdTokenChanged(t,e,i)}function WE(n,t,e){return mt(n).beforeAuthStateChanged(t,e)}function GE(n,t,e,i){return mt(n).onAuthStateChanged(t,e,i)}function KE(n){return mt(n).signOut()}async function YE(n){return mt(n).delete()}const Ia="__sak";/**
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
 */class Vm{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ia,"1"),this.storage.removeItem(Ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XE=1e3,QE=10;class Fm extends Vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);oE()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,QE):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},XE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fm.type="LOCAL";const Bm=Fm;/**
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
 */class $m extends Vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}$m.type="SESSION";const Um=$m;/**
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
 */function JE(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Xa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new Xa(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await JE(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xa.receivers=[];/**
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
 */function xu(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class ZE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=xu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function He(){return window}function tT(n){He().location.href=n}/**
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
 */function zm(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function eT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function iT(){return zm()?self:null}/**
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
 */const jm="firebaseLocalStorageDb",sT=1,Aa="firebaseLocalStorage",Hm="fbase_key";class zr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Qa(n,t){return n.transaction([Aa],t?"readwrite":"readonly").objectStore(Aa)}function rT(){const n=indexedDB.deleteDatabase(jm);return new zr(n).toPromise()}function Pl(){const n=indexedDB.open(jm,sT);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Aa,{keyPath:Hm})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Aa)?t(i):(i.close(),await rT(),t(await Pl()))})})}async function df(n,t,e){const i=Qa(n,!0).put({[Hm]:t,value:e});return new zr(i).toPromise()}async function oT(n,t){const e=Qa(n,!1).get(t),i=await new zr(e).toPromise();return i===void 0?null:i.value}function hf(n,t){const e=Qa(n,!0).delete(t);return new zr(e).toPromise()}const aT=800,cT=3;class qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>cT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xa._getInstance(iT()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await eT(),!this.activeServiceWorker)return;this.sender=new ZE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||nT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Pl();return await df(t,Ia,"1"),await hf(t,Ia),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>df(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>oT(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>hf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Qa(s,!1).getAll();return new zr(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qm.type="LOCAL";const lT=qm;new Br(3e4,6e4);/**
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
 */function uT(n,t){return t?hn(t):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Su extends Tu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ss(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ss(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ss(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function dT(n){return Om(n.auth,new Su(n),n.bypassAuthState)}function hT(n){const{auth:t,user:e}=n;return G(e,t,"internal-error"),Dm(e,new Su(n),n.bypassAuthState)}async function fT(n){const{auth:t,user:e}=n;return G(e,t,"internal-error"),LE(e,new Su(n),n.bypassAuthState)}/**
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
 */class Wm{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dT;case"linkViaPopup":case"linkViaRedirect":return fT;case"reauthViaPopup":case"reauthViaRedirect":return hT;default:Oe(this.auth,"internal-error")}}resolve(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pT=new Br(2e3,1e4);class Zi extends Wm{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const t=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pT.get())};t()}}Zi.currentPopupAction=null;/**
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
 */const gT="pendingRedirect",Yo=new Map;class mT extends Wm{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Yo.get(this.auth._key());if(!t){try{const i=await yT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}Yo.set(this.auth._key(),t)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yT(n,t){const e=bT(t),i=_T(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}function vT(n,t){Yo.set(n._key(),t)}function _T(n){return hn(n._redirectPersistence)}function bT(n){return Ko(gT,n.config.apiKey,n.name)}async function wT(n,t,e=!1){if(we(n.app))return Promise.reject(mn(n));const i=ni(n),s=uT(i,t),o=await new mT(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const ET=600*1e3;class TT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!IT(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!Gm(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(je(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ET&&this.cachedEventUids.clear(),this.cachedEventUids.has(ff(t))}saveEventToCache(t){this.cachedEventUids.add(ff(t)),this.lastProcessedEventTime=Date.now()}}function ff(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Gm({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function IT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gm(n);default:return!1}}/**
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
 */async function AT(n,t={}){return Ve(n,"GET","/v1/projects",t)}/**
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
 */const xT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ST=/^https?/;async function PT(n){if(n.config.emulator)return;const{authorizedDomains:t}=await AT(n);for(const e of t)try{if(kT(e))return}catch{}Oe(n,"unauthorized-domain")}function kT(n){const t=xl(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!ST.test(e))return!1;if(xT.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const CT=new Br(3e4,6e4);function pf(){const n=He().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function RT(n){return new Promise((t,e)=>{var i,s,r;function o(){pf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pf(),e(je(n,"network-request-failed"))},timeout:CT.get()})}if(!((s=(i=He().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=He().gapi)===null||r===void 0)&&r.load)o();else{const a=gE("iframefcb");return He()[a]=()=>{gapi.load?o():e(je(n,"network-request-failed"))},Pm(`${pE()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Xo=null,t})}let Xo=null;function MT(n){return Xo=Xo||RT(n),Xo}/**
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
 */const DT=new Br(5e3,15e3),OT="__/auth/iframe",NT="emulator/auth/iframe",LT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FT(n){const t=n.config;G(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?bu(t,NT):`https://${n.config.authDomain}/${OT}`,i={apiKey:t.apiKey,appName:n.name,v:bs},s=VT.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${Fr(i).slice(1)}`}async function BT(n){const t=await MT(n),e=He().gapi;return G(e,n,"internal-error"),t.open({where:document.body,url:FT(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LT,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=je(n,"network-request-failed"),a=He().setTimeout(()=>{r(o)},DT.get());function c(){He().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const $T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UT=500,zT=600,jT="_blank",HT="http://localhost";class gf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qT(n,t,e,i=UT,s=zT){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$T),{width:i.toString(),height:s.toString(),top:r,left:o}),l=ie().toLowerCase();e&&(a=wm(l)?jT:e),_m(l)&&(t=t||HT,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(rE(l)&&a!=="_self")return WT(t||"",a),new gf(null);const h=window.open(t||"",a,d);G(h,n,"popup-blocked");try{h.focus()}catch{}return new gf(h)}function WT(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const GT="__/auth/handler",KT="emulator/auth/handler",YT=encodeURIComponent("fac");async function mf(n,t,e,i,s,r){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:bs,eventId:s};if(t instanceof Rm){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",xw(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof Ur){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${YT}=${encodeURIComponent(c)}`:"";return`${XT(n)}?${Fr(a).slice(1)}${l}`}function XT({config:n}){return n.emulator?bu(n,KT):`https://${n.authDomain}/${GT}`}/**
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
 */const Jc="webStorageSupport";class QT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Um,this._completeRedirectFn=wT,this._overrideRedirectResult=vT}async _openPopup(t,e,i,s){var r;bn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await mf(t,e,i,xl(),s);return qT(t,o,xu())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await mf(t,e,i,xl(),s);return tT(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(bn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await BT(t),i=new TT(t);return e.register("authEvent",s=>(G(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Jc,{type:Jc},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Jc];o!==void 0&&e(!!o),Oe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=PT(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return xm()||bm()||Eu()}}const JT=QT;var yf="@firebase/auth",vf="1.10.8";/**
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
 */class ZT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eI(n){ls(new Pi("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sm(n)},l=new dE(i,s,r,c);return wE(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),ls(new Pi("auth-internal",t=>{const e=ni(t.getProvider("auth").getImmediate());return(i=>new ZT(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(yf,vf,tI(n)),zn(yf,vf,"esm2017")}/**
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
 */const nI=300,iI=im("authIdTokenMaxAge")||nI;let _f=null;const sI=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>iI)return;const s=e==null?void 0:e.token;_f!==s&&(_f=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rI(n=yu()){const t=mu(n,"auth");if(t.isInitialized())return t.getImmediate();const e=bE(n,{popupRedirectResolver:JT,persistence:[lT,Bm,Um]}),i=im("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=sI(r.toString());WE(e,o,()=>o(e.currentUser)),qE(e,a=>o(a))}}const s=em("auth");return s&&EE(e,`http://${s}`),e}function oI(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}hE({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=je("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",oI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eI("Browser");var aI="firebase",cI="11.10.0";/**
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
 */zn(aI,cI,"app");var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,Km;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,b){function E(){}E.prototype=b.prototype,I.D=b.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(x,S,P){for(var A=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)A[rt-2]=arguments[rt];return b.prototype[S].apply(x,A)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,b,E){E||(E=0);var x=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)x[S]=b.charCodeAt(E++)|b.charCodeAt(E++)<<8|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<24;else for(S=0;16>S;++S)x[S]=b[E++]|b[E++]<<8|b[E++]<<16|b[E++]<<24;b=I.g[0],E=I.g[1],S=I.g[2];var P=I.g[3],A=b+(P^E&(S^P))+x[0]+3614090360&4294967295;b=E+(A<<7&4294967295|A>>>25),A=P+(S^b&(E^S))+x[1]+3905402710&4294967295,P=b+(A<<12&4294967295|A>>>20),A=S+(E^P&(b^E))+x[2]+606105819&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(b^S&(P^b))+x[3]+3250441966&4294967295,E=S+(A<<22&4294967295|A>>>10),A=b+(P^E&(S^P))+x[4]+4118548399&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(S^b&(E^S))+x[5]+1200080426&4294967295,P=b+(A<<12&4294967295|A>>>20),A=S+(E^P&(b^E))+x[6]+2821735955&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(b^S&(P^b))+x[7]+4249261313&4294967295,E=S+(A<<22&4294967295|A>>>10),A=b+(P^E&(S^P))+x[8]+1770035416&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(S^b&(E^S))+x[9]+2336552879&4294967295,P=b+(A<<12&4294967295|A>>>20),A=S+(E^P&(b^E))+x[10]+4294925233&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(b^S&(P^b))+x[11]+2304563134&4294967295,E=S+(A<<22&4294967295|A>>>10),A=b+(P^E&(S^P))+x[12]+1804603682&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(S^b&(E^S))+x[13]+4254626195&4294967295,P=b+(A<<12&4294967295|A>>>20),A=S+(E^P&(b^E))+x[14]+2792965006&4294967295,S=P+(A<<17&4294967295|A>>>15),A=E+(b^S&(P^b))+x[15]+1236535329&4294967295,E=S+(A<<22&4294967295|A>>>10),A=b+(S^P&(E^S))+x[1]+4129170786&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(b^E))+x[6]+3225465664&4294967295,P=b+(A<<9&4294967295|A>>>23),A=S+(b^E&(P^b))+x[11]+643717713&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(S^P))+x[0]+3921069994&4294967295,E=S+(A<<20&4294967295|A>>>12),A=b+(S^P&(E^S))+x[5]+3593408605&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(b^E))+x[10]+38016083&4294967295,P=b+(A<<9&4294967295|A>>>23),A=S+(b^E&(P^b))+x[15]+3634488961&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(S^P))+x[4]+3889429448&4294967295,E=S+(A<<20&4294967295|A>>>12),A=b+(S^P&(E^S))+x[9]+568446438&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(b^E))+x[14]+3275163606&4294967295,P=b+(A<<9&4294967295|A>>>23),A=S+(b^E&(P^b))+x[3]+4107603335&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(S^P))+x[8]+1163531501&4294967295,E=S+(A<<20&4294967295|A>>>12),A=b+(S^P&(E^S))+x[13]+2850285829&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^S&(b^E))+x[2]+4243563512&4294967295,P=b+(A<<9&4294967295|A>>>23),A=S+(b^E&(P^b))+x[7]+1735328473&4294967295,S=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(S^P))+x[12]+2368359562&4294967295,E=S+(A<<20&4294967295|A>>>12),A=b+(E^S^P)+x[5]+4294588738&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^S)+x[8]+2272392833&4294967295,P=b+(A<<11&4294967295|A>>>21),A=S+(P^b^E)+x[11]+1839030562&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^b)+x[14]+4259657740&4294967295,E=S+(A<<23&4294967295|A>>>9),A=b+(E^S^P)+x[1]+2763975236&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^S)+x[4]+1272893353&4294967295,P=b+(A<<11&4294967295|A>>>21),A=S+(P^b^E)+x[7]+4139469664&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^b)+x[10]+3200236656&4294967295,E=S+(A<<23&4294967295|A>>>9),A=b+(E^S^P)+x[13]+681279174&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^S)+x[0]+3936430074&4294967295,P=b+(A<<11&4294967295|A>>>21),A=S+(P^b^E)+x[3]+3572445317&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^b)+x[6]+76029189&4294967295,E=S+(A<<23&4294967295|A>>>9),A=b+(E^S^P)+x[9]+3654602809&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^S)+x[12]+3873151461&4294967295,P=b+(A<<11&4294967295|A>>>21),A=S+(P^b^E)+x[15]+530742520&4294967295,S=P+(A<<16&4294967295|A>>>16),A=E+(S^P^b)+x[2]+3299628645&4294967295,E=S+(A<<23&4294967295|A>>>9),A=b+(S^(E|~P))+x[0]+4096336452&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~S))+x[7]+1126891415&4294967295,P=b+(A<<10&4294967295|A>>>22),A=S+(b^(P|~E))+x[14]+2878612391&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~b))+x[5]+4237533241&4294967295,E=S+(A<<21&4294967295|A>>>11),A=b+(S^(E|~P))+x[12]+1700485571&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~S))+x[3]+2399980690&4294967295,P=b+(A<<10&4294967295|A>>>22),A=S+(b^(P|~E))+x[10]+4293915773&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~b))+x[1]+2240044497&4294967295,E=S+(A<<21&4294967295|A>>>11),A=b+(S^(E|~P))+x[8]+1873313359&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~S))+x[15]+4264355552&4294967295,P=b+(A<<10&4294967295|A>>>22),A=S+(b^(P|~E))+x[6]+2734768916&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~b))+x[13]+1309151649&4294967295,E=S+(A<<21&4294967295|A>>>11),A=b+(S^(E|~P))+x[4]+4149444226&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~S))+x[11]+3174756917&4294967295,P=b+(A<<10&4294967295|A>>>22),A=S+(b^(P|~E))+x[2]+718787259&4294967295,S=P+(A<<15&4294967295|A>>>17),A=E+(P^(S|~b))+x[9]+3951481745&4294967295,I.g[0]=I.g[0]+b&4294967295,I.g[1]=I.g[1]+(S+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+P&4294967295}i.prototype.u=function(I,b){b===void 0&&(b=I.length);for(var E=b-this.blockSize,x=this.B,S=this.h,P=0;P<b;){if(S==0)for(;P<=E;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<b;)if(x[S++]=I.charCodeAt(P++),S==this.blockSize){s(this,x),S=0;break}}else for(;P<b;)if(x[S++]=I[P++],S==this.blockSize){s(this,x),S=0;break}}this.h=S,this.o+=b},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var b=1;b<I.length-8;++b)I[b]=0;var E=8*this.o;for(b=I.length-8;b<I.length;++b)I[b]=E&255,E/=256;for(this.u(I),I=Array(16),b=E=0;4>b;++b)for(var x=0;32>x;x+=8)I[E++]=this.g[b]>>>x&255;return I};function r(I,b){var E=a;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=b(I)}function o(I,b){this.h=b;for(var E=[],x=!0,S=I.length-1;0<=S;S--){var P=I[S]|0;x&&P==b||(E[S]=P,x=!1)}this.g=E}var a={};function c(I){return-128<=I&&128>I?r(I,function(b){return new o([b|0],0>b?-1:0)}):new o([I|0],0>I?-1:0)}function l(I){if(isNaN(I)||!isFinite(I))return h;if(0>I)return v(l(-I));for(var b=[],E=1,x=0;I>=E;x++)b[x]=I/E|0,E*=4294967296;return new o(b,0)}function d(I,b){if(I.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I.charAt(0)=="-")return v(d(I.substring(1),b));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=l(Math.pow(b,8)),x=h,S=0;S<I.length;S+=8){var P=Math.min(8,I.length-S),A=parseInt(I.substring(S,S+P),b);8>P?(P=l(Math.pow(b,P)),x=x.j(P).add(l(A))):(x=x.j(E),x=x.add(l(A)))}return x}var h=c(0),f=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(_(this))return-v(this).m();for(var I=0,b=1,E=0;E<this.g.length;E++){var x=this.i(E);I+=(0<=x?x:4294967296+x)*b,b*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(y(this))return"0";if(_(this))return"-"+v(this).toString(I);for(var b=l(Math.pow(I,6)),E=this,x="";;){var S=D(E,b).g;E=T(E,S.j(b));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=S,y(E))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function y(I){if(I.h!=0)return!1;for(var b=0;b<I.g.length;b++)if(I.g[b]!=0)return!1;return!0}function _(I){return I.h==-1}n.l=function(I){return I=T(this,I),_(I)?-1:y(I)?0:1};function v(I){for(var b=I.g.length,E=[],x=0;x<b;x++)E[x]=~I.g[x];return new o(E,~I.h).add(f)}n.abs=function(){return _(this)?v(this):this},n.add=function(I){for(var b=Math.max(this.g.length,I.g.length),E=[],x=0,S=0;S<=b;S++){var P=x+(this.i(S)&65535)+(I.i(S)&65535),A=(P>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);x=A>>>16,P&=65535,A&=65535,E[S]=A<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(I,b){return I.add(v(b))}n.j=function(I){if(y(this)||y(I))return h;if(_(this))return _(I)?v(this).j(v(I)):v(v(this).j(I));if(_(I))return v(this.j(v(I)));if(0>this.l(g)&&0>I.l(g))return l(this.m()*I.m());for(var b=this.g.length+I.g.length,E=[],x=0;x<2*b;x++)E[x]=0;for(x=0;x<this.g.length;x++)for(var S=0;S<I.g.length;S++){var P=this.i(x)>>>16,A=this.i(x)&65535,rt=I.i(S)>>>16,tt=I.i(S)&65535;E[2*x+2*S]+=A*tt,k(E,2*x+2*S),E[2*x+2*S+1]+=P*tt,k(E,2*x+2*S+1),E[2*x+2*S+1]+=A*rt,k(E,2*x+2*S+1),E[2*x+2*S+2]+=P*rt,k(E,2*x+2*S+2)}for(x=0;x<b;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=b;x<2*b;x++)E[x]=0;return new o(E,0)};function k(I,b){for(;(I[b]&65535)!=I[b];)I[b+1]+=I[b]>>>16,I[b]&=65535,b++}function M(I,b){this.g=I,this.h=b}function D(I,b){if(y(b))throw Error("division by zero");if(y(I))return new M(h,h);if(_(I))return b=D(v(I),b),new M(v(b.g),v(b.h));if(_(b))return b=D(I,v(b)),new M(v(b.g),b.h);if(30<I.g.length){if(_(I)||_(b))throw Error("slowDivide_ only works with positive integers.");for(var E=f,x=b;0>=x.l(I);)E=O(E),x=O(x);var S=L(E,1),P=L(x,1);for(x=L(x,2),E=L(E,2);!y(x);){var A=P.add(x);0>=A.l(I)&&(S=S.add(E),P=A),x=L(x,1),E=L(E,1)}return b=T(I,S.j(b)),new M(S,b)}for(S=h;0<=I.l(b);){for(E=Math.max(1,Math.floor(I.m()/b.m())),x=Math.ceil(Math.log(E)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=l(E),A=P.j(b);_(A)||0<A.l(I);)E-=x,P=l(E),A=P.j(b);y(P)&&(P=f),S=S.add(P),I=T(I,A)}return new M(S,I)}n.A=function(I){return D(this,I).h},n.and=function(I){for(var b=Math.max(this.g.length,I.g.length),E=[],x=0;x<b;x++)E[x]=this.i(x)&I.i(x);return new o(E,this.h&I.h)},n.or=function(I){for(var b=Math.max(this.g.length,I.g.length),E=[],x=0;x<b;x++)E[x]=this.i(x)|I.i(x);return new o(E,this.h|I.h)},n.xor=function(I){for(var b=Math.max(this.g.length,I.g.length),E=[],x=0;x<b;x++)E[x]=this.i(x)^I.i(x);return new o(E,this.h^I.h)};function O(I){for(var b=I.g.length+1,E=[],x=0;x<b;x++)E[x]=I.i(x)<<1|I.i(x-1)>>>31;return new o(E,I.h)}function L(I,b){var E=b>>5;b%=32;for(var x=I.g.length-E,S=[],P=0;P<x;P++)S[P]=0<b?I.i(P+E)>>>b|I.i(P+E+1)<<32-b:I.i(P+E);return new o(S,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Km=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,jn=o}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ym,Gs,Xm,Qo,kl,Qm,Jm,Zm;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,m){return u==Array.prototype||u==Object.prototype||(u[p]=m.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof xo=="object"&&xo];for(var p=0;p<u.length;++p){var m=u[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=e(this);function s(u,p){if(p)t:{var m=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var R=u[w];if(!(R in m))break t;m=m[R]}u=u[u.length-1],w=m[u],p=p(w),p!=w&&p!=null&&t(m,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var m=0,w=!1,R={next:function(){if(!w&&m<u.length){var N=m++;return{value:p(N,u[N]),done:!1}}return w=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(u){return u||function(){return r(this,function(p,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,m){return u.call.apply(u.bind,arguments)}function h(u,p,m){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,w),u.apply(p,R)}}return function(){return u.apply(p,arguments)}}function f(u,p,m){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function g(u,p){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function y(u,p){function m(){}m.prototype=p.prototype,u.aa=p.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(w,R,N){for(var $=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)$[ft-2]=arguments[ft];return p.prototype[R].apply(w,$)}}function _(u){const p=u.length;if(0<p){const m=Array(p);for(let w=0;w<p;w++)m[w]=u[w];return m}return[]}function v(u,p){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const R=u.length||0,N=w.length||0;u.length=R+N;for(let $=0;$<N;$++)u[R+$]=w[$]}else u.push(w)}}class T{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function k(u){return/^[\s\xa0]*$/.test(u)}function M(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var O=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function L(u,p,m){for(const w in u)p.call(m,u[w],w,u)}function I(u,p){for(const m in u)p.call(void 0,u[m],m,u)}function b(u){const p={};for(const m in u)p[m]=u[m];return p}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let m,w;for(let R=1;R<arguments.length;R++){w=arguments[R];for(m in w)u[m]=w[m];for(let N=0;N<E.length;N++)m=E[N],Object.prototype.hasOwnProperty.call(w,m)&&(u[m]=w[m])}}function S(u){var p=1;u=u.split(":");const m=[];for(;0<p&&u.length;)m.push(u.shift()),p--;return u.length&&m.push(u.join(":")),m}function P(u){a.setTimeout(()=>{throw u},0)}function A(){var u=Mt;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class rt{constructor(){this.h=this.g=null}add(p,m){const w=tt.get();w.set(p,m),this.h?this.h.next=w:this.g=w,this.h=w}}var tt=new T(()=>new dt,u=>u.reset());class dt{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,Ut=!1,Mt=new rt,tn=()=>{const u=a.Promise.resolve(void 0);ht=()=>{u.then(Ui)}};var Ui=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(m){P(m)}var p=tt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Ut=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var en=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,p),a.removeEventListener("test",m,p)}catch{}return u})();function Ae(u,p){if(It.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(O){t:{try{D(p.nodeName);var R=!0;break t}catch{}R=!1}R||(p=null)}}else m=="mouseover"?p=u.fromElement:m=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:nn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}y(Ae,It);var nn={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ro="closure_listenable_"+(1e6*Math.random()|0),Eb=0;function Tb(u,p,m,w,R){this.listener=u,this.proxy=null,this.src=p,this.type=m,this.capture=!!w,this.ha=R,this.key=++Eb,this.da=this.fa=!1}function oo(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ao(u){this.src=u,this.g={},this.h=0}ao.prototype.add=function(u,p,m,w,R){var N=u.toString();u=this.g[N],u||(u=this.g[N]=[],this.h++);var $=Ic(u,p,w,R);return-1<$?(p=u[$],m||(p.fa=!1)):(p=new Tb(p,this.src,N,!!w,R),p.fa=m,u.push(p)),p};function Tc(u,p){var m=p.type;if(m in u.g){var w=u.g[m],R=Array.prototype.indexOf.call(w,p,void 0),N;(N=0<=R)&&Array.prototype.splice.call(w,R,1),N&&(oo(p),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Ic(u,p,m,w){for(var R=0;R<u.length;++R){var N=u[R];if(!N.da&&N.listener==p&&N.capture==!!m&&N.ha==w)return R}return-1}var Ac="closure_lm_"+(1e6*Math.random()|0),xc={};function Hd(u,p,m,w,R){if(Array.isArray(p)){for(var N=0;N<p.length;N++)Hd(u,p[N],m,w,R);return null}return m=Gd(m),u&&u[ro]?u.K(p,m,l(w)?!!w.capture:!1,R):Ib(u,p,m,!1,w,R)}function Ib(u,p,m,w,R,N){if(!p)throw Error("Invalid event type");var $=l(R)?!!R.capture:!!R,ft=Pc(u);if(ft||(u[Ac]=ft=new ao(u)),m=ft.add(p,m,w,$,N),m.proxy)return m;if(w=Ab(),m.proxy=w,w.src=u,w.listener=m,u.addEventListener)en||(R=$),R===void 0&&(R=!1),u.addEventListener(p.toString(),w,R);else if(u.attachEvent)u.attachEvent(Wd(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ab(){function u(m){return p.call(u.src,u.listener,m)}const p=xb;return u}function qd(u,p,m,w,R){if(Array.isArray(p))for(var N=0;N<p.length;N++)qd(u,p[N],m,w,R);else w=l(w)?!!w.capture:!!w,m=Gd(m),u&&u[ro]?(u=u.i,p=String(p).toString(),p in u.g&&(N=u.g[p],m=Ic(N,m,w,R),-1<m&&(oo(N[m]),Array.prototype.splice.call(N,m,1),N.length==0&&(delete u.g[p],u.h--)))):u&&(u=Pc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Ic(p,m,w,R)),(m=-1<u?p[u]:null)&&Sc(m))}function Sc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ro])Tc(p.i,u);else{var m=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(m,w,u.capture):p.detachEvent?p.detachEvent(Wd(m),w):p.addListener&&p.removeListener&&p.removeListener(w),(m=Pc(p))?(Tc(m,u),m.h==0&&(m.src=null,p[Ac]=null)):oo(u)}}}function Wd(u){return u in xc?xc[u]:xc[u]="on"+u}function xb(u,p){if(u.da)u=!0;else{p=new Ae(p,this);var m=u.listener,w=u.ha||u.src;u.fa&&Sc(u),u=m.call(w,p)}return u}function Pc(u){return u=u[Ac],u instanceof ao?u:null}var kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gd(u){return typeof u=="function"?u:(u[kc]||(u[kc]=function(p){return u.handleEvent(p)}),u[kc])}function Wt(){re.call(this),this.i=new ao(this),this.M=this,this.F=null}y(Wt,re),Wt.prototype[ro]=!0,Wt.prototype.removeEventListener=function(u,p,m,w){qd(this,u,p,m,w)};function oe(u,p){var m,w=u.F;if(w)for(m=[];w;w=w.F)m.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new It(p,u);else if(p instanceof It)p.target=p.target||u;else{var R=p;p=new It(w,u),x(p,R)}if(R=!0,m)for(var N=m.length-1;0<=N;N--){var $=p.g=m[N];R=co($,w,!0,p)&&R}if($=p.g=u,R=co($,w,!0,p)&&R,R=co($,w,!1,p)&&R,m)for(N=0;N<m.length;N++)$=p.g=m[N],R=co($,w,!1,p)&&R}Wt.prototype.N=function(){if(Wt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var m=u.g[p],w=0;w<m.length;w++)oo(m[w]);delete u.g[p],u.h--}}this.F=null},Wt.prototype.K=function(u,p,m,w){return this.i.add(String(u),p,!1,m,w)},Wt.prototype.L=function(u,p,m,w){return this.i.add(String(u),p,!0,m,w)};function co(u,p,m,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var R=!0,N=0;N<p.length;++N){var $=p[N];if($&&!$.da&&$.capture==m){var ft=$.listener,zt=$.ha||$.src;$.fa&&Tc(u.i,$),R=ft.call(zt,w)!==!1&&R}}return R&&!w.defaultPrevented}function Kd(u,p,m){if(typeof u=="function")m&&(u=f(u,m));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Yd(u){u.g=Kd(()=>{u.g=null,u.i&&(u.i=!1,Yd(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Sb extends re{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Yd(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(u){re.call(this),this.h=u,this.g={}}y(Ss,re);var Xd=[];function Qd(u){L(u.g,function(p,m){this.g.hasOwnProperty(m)&&Sc(p)},u),u.g={}}Ss.prototype.N=function(){Ss.aa.N.call(this),Qd(this)},Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cc=a.JSON.stringify,Pb=a.JSON.parse,kb=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Rc(){}Rc.prototype.h=null;function Jd(u){return u.h||(u.h=u.i())}function Zd(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mc(){It.call(this,"d")}y(Mc,It);function Dc(){It.call(this,"c")}y(Dc,It);var ai={},th=null;function lo(){return th=th||new Wt}ai.La="serverreachability";function eh(u){It.call(this,ai.La,u)}y(eh,It);function ks(u){const p=lo();oe(p,new eh(p))}ai.STAT_EVENT="statevent";function nh(u,p){It.call(this,ai.STAT_EVENT,u),this.stat=p}y(nh,It);function ae(u){const p=lo();oe(p,new nh(p,u))}ai.Ma="timingevent";function ih(u,p){It.call(this,ai.Ma,u),this.size=p}y(ih,It);function Cs(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function Cb(u,p,m,w,R,N){u.info(function(){if(u.g)if(N)for(var $="",ft=N.split("&"),zt=0;zt<ft.length;zt++){var at=ft[zt].split("=");if(1<at.length){var Gt=at[0];at=at[1];var Kt=Gt.split("_");$=2<=Kt.length&&Kt[1]=="type"?$+(Gt+"="+at+"&"):$+(Gt+"=redacted&")}}else $=null;else $=N;return"XMLHTTP REQ ("+w+") [attempt "+R+"]: "+p+`
`+m+`
`+$})}function Rb(u,p,m,w,R,N,$){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+R+"]: "+p+`
`+m+`
`+N+" "+$})}function zi(u,p,m,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Db(u,m)+(w?" "+w:"")})}function Mb(u,p){u.info(function(){return"TIMEOUT: "+p})}Rs.prototype.info=function(){};function Db(u,p){if(!u.g)return p;if(!p)return null;try{var m=JSON.parse(p);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var w=m[u];if(!(2>w.length)){var R=w[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return Cc(m)}catch{return p}}var uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oc;function ho(){}y(ho,Rc),ho.prototype.g=function(){return new XMLHttpRequest},ho.prototype.i=function(){return{}},Oc=new ho;function xn(u,p,m,w){this.j=u,this.i=p,this.l=m,this.R=w||1,this.U=new Ss(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rh}function rh(){this.i=null,this.g="",this.h=!1}var oh={},Nc={};function Lc(u,p,m){u.L=1,u.v=mo(sn(p)),u.m=m,u.P=!0,ah(u,null)}function ah(u,p){u.F=Date.now(),fo(u),u.A=sn(u.v);var m=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),wh(m.i,"t",w),u.C=0,m=u.j.J,u.h=new rh,u.g=Bh(u.j,m?p:null,!u.m),0<u.O&&(u.M=new Sb(f(u.Y,u,u.g),u.O)),p=u.U,m=u.g,w=u.ca;var R="readystatechange";Array.isArray(R)||(R&&(Xd[0]=R.toString()),R=Xd);for(var N=0;N<R.length;N++){var $=Hd(m,R[N],w||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),ks(),Cb(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const p=this.M;p&&rn(u)==3?p.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)t:{const Kt=rn(this.g);var p=this.g.Ba();const qi=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||Ph(this.g)))){this.J||Kt!=4||p==7||(p==8||0>=qi?ks(3):ks(2)),Vc(this);var m=this.g.Z();this.X=m;e:if(ch(this)){var w=Ph(this.g);u="";var R=w.length,N=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ci(this),Ms(this);var $="";break e}this.h.i=new a.TextDecoder}for(p=0;p<R;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(N&&p==R-1)});w.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=m==200,Rb(this.i,this.u,this.A,this.l,this.R,Kt,m),this.o){if(this.T&&!this.K){e:{if(this.g){var ft,zt=this.g;if((ft=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(ft)){var at=ft;break e}}at=null}if(m=at)zi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fc(this,m);else{this.o=!1,this.s=3,ae(12),ci(this),Ms(this);break t}}if(this.P){m=!0;let xe;for(;!this.J&&this.C<$.length;)if(xe=Ob(this,$),xe==Nc){Kt==4&&(this.s=4,ae(14),m=!1),zi(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==oh){this.s=4,ae(15),zi(this.i,this.l,$,"[Invalid Chunk]"),m=!1;break}else zi(this.i,this.l,xe,null),Fc(this,xe);if(ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||$.length!=0||this.h.h||(this.s=1,ae(16),m=!1),this.o=this.o&&m,!m)zi(this.i,this.l,$,"[Invalid Chunked Response]"),ci(this),Ms(this);else if(0<$.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Hc(Gt),Gt.M=!0,ae(11))}}else zi(this.i,this.l,$,null),Fc(this,$);Kt==4&&ci(this),this.o&&!this.J&&(Kt==4?Nh(this.j,this):(this.o=!1,fo(this)))}else Qb(this.g),m==400&&0<$.indexOf("Unknown SID")?(this.s=3,ae(12)):(this.s=0,ae(13)),ci(this),Ms(this)}}}catch{}finally{}};function ch(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Ob(u,p){var m=u.C,w=p.indexOf(`
`,m);return w==-1?Nc:(m=Number(p.substring(m,w)),isNaN(m)?oh:(w+=1,w+m>p.length?Nc:(p=p.slice(w,w+m),u.C=w+m,p)))}xn.prototype.cancel=function(){this.J=!0,ci(this)};function fo(u){u.S=Date.now()+u.I,lh(u,u.I)}function lh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cs(f(u.ba,u),p)}function Vc(u){u.B&&(a.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Mb(this.i,this.A),this.L!=2&&(ks(),ae(17)),ci(this),this.s=2,Ms(this)):lh(this,this.S-u)};function Ms(u){u.j.G==0||u.J||Nh(u.j,u)}function ci(u){Vc(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Qd(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Fc(u,p){try{var m=u.j;if(m.G!=0&&(m.g==u||Bc(m.h,u))){if(!u.K&&Bc(m.h,u)&&m.G==3){try{var w=m.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var R=w;if(R[0]==0){t:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Eo(m),bo(m);else break t;jc(m),ae(18)}}else m.za=R[1],0<m.za-m.T&&37500>R[2]&&m.F&&m.v==0&&!m.C&&(m.C=Cs(f(m.Za,m),6e3));if(1>=hh(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ui(m,11)}else if((u.K||m.g==u)&&Eo(m),!k(p))for(R=m.Da.g.parse(p),p=0;p<R.length;p++){let at=R[p];if(m.T=at[0],at=at[1],m.G==2)if(at[0]=="c"){m.K=at[1],m.ia=at[2];const Gt=at[3];Gt!=null&&(m.la=Gt,m.j.info("VER="+m.la));const Kt=at[4];Kt!=null&&(m.Aa=Kt,m.j.info("SVER="+m.Aa));const qi=at[5];qi!=null&&typeof qi=="number"&&0<qi&&(w=1.5*qi,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const xe=u.g;if(xe){const Io=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var N=w.h;N.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&($c(N,N.h),N.h=null))}if(w.D){const qc=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;qc&&(w.ya=qc,yt(w.I,w.D,qc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var $=u;if(w.qa=Fh(w,w.J?w.ia:null,w.W),$.K){fh(w.h,$);var ft=$,zt=w.L;zt&&(ft.I=zt),ft.B&&(Vc(ft),fo(ft)),w.g=$}else Dh(w);0<m.i.length&&wo(m)}else at[0]!="stop"&&at[0]!="close"||ui(m,7);else m.G==3&&(at[0]=="stop"||at[0]=="close"?at[0]=="stop"?ui(m,7):zc(m):at[0]!="noop"&&m.l&&m.l.ta(at),m.v=0)}}ks(4)}catch{}}var Nb=class{constructor(u,p){this.g=u,this.map=p}};function uh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function hh(u){return u.h?1:u.g?u.g.size:0}function Bc(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function $c(u,p){u.g?u.g.add(p):u.h=p}function fh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}uh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ph(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const m of u.g.values())p=p.concat(m.D);return p}return _(u.i)}function Lb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],m=u.length,w=0;w<m;w++)p.push(u[w]);return p}p=[],m=0;for(w in u)p[m++]=u[w];return p}function Vb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var m=0;m<u;m++)p.push(m);return p}p=[],m=0;for(const w in u)p[m++]=w;return p}}}function gh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var m=Vb(u),w=Lb(u),R=w.length,N=0;N<R;N++)p.call(void 0,w[N],m&&m[N],u)}var mh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fb(u,p){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var w=u[m].indexOf("="),R=null;if(0<=w){var N=u[m].substring(0,w);R=u[m].substring(w+1)}else N=u[m];p(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function li(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof li){this.h=u.h,po(this,u.j),this.o=u.o,this.g=u.g,go(this,u.s),this.l=u.l;var p=u.i,m=new Ns;m.i=p.i,p.g&&(m.g=new Map(p.g),m.h=p.h),yh(this,m),this.m=u.m}else u&&(p=String(u).match(mh))?(this.h=!1,po(this,p[1]||"",!0),this.o=Ds(p[2]||""),this.g=Ds(p[3]||"",!0),go(this,p[4]),this.l=Ds(p[5]||"",!0),yh(this,p[6]||"",!0),this.m=Ds(p[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}li.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Os(p,vh,!0),":");var m=this.g;return(m||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Os(p,vh,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Os(m,m.charAt(0)=="/"?Ub:$b,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Os(m,jb)),u.join("")};function sn(u){return new li(u)}function po(u,p,m){u.j=m?Ds(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function go(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function yh(u,p,m){p instanceof Ns?(u.i=p,Hb(u.i,u.h)):(m||(p=Os(p,zb)),u.i=new Ns(p,u.h))}function yt(u,p,m){u.i.set(p,m)}function mo(u){return yt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ds(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Os(u,p,m){return typeof u=="string"?(u=encodeURI(u).replace(p,Bb),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bb(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var vh=/[#\/\?@]/g,$b=/[#\?:]/g,Ub=/[#\?]/g,zb=/[#\?@]/g,jb=/#/g;function Ns(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Sn(u){u.g||(u.g=new Map,u.h=0,u.i&&Fb(u.i,function(p,m){u.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}n=Ns.prototype,n.add=function(u,p){Sn(this),this.i=null,u=ji(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(p),this.h+=1,this};function _h(u,p){Sn(u),p=ji(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function bh(u,p){return Sn(u),p=ji(u,p),u.g.has(p)}n.forEach=function(u,p){Sn(this),this.g.forEach(function(m,w){m.forEach(function(R){u.call(p,R,w,this)},this)},this)},n.na=function(){Sn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),m=[];for(let w=0;w<p.length;w++){const R=u[w];for(let N=0;N<R.length;N++)m.push(p[w])}return m},n.V=function(u){Sn(this);let p=[];if(typeof u=="string")bh(this,u)&&(p=p.concat(this.g.get(ji(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)p=p.concat(u[m])}return p},n.set=function(u,p){return Sn(this),this.i=null,u=ji(this,u),bh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function wh(u,p,m){_h(u,p),0<m.length&&(u.i=null,u.g.set(ji(u,p),_(m)),u.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var m=0;m<p.length;m++){var w=p[m];const N=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var R=N;$[w]!==""&&(R+="="+encodeURIComponent(String($[w]))),u.push(R)}}return this.i=u.join("&")};function ji(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Hb(u,p){p&&!u.j&&(Sn(u),u.i=null,u.g.forEach(function(m,w){var R=w.toLowerCase();w!=R&&(_h(this,w),wh(this,R,m))},u)),u.j=p}function qb(u,p){const m=new Rs;if(a.Image){const w=new Image;w.onload=g(Pn,m,"TestLoadImage: loaded",!0,p,w),w.onerror=g(Pn,m,"TestLoadImage: error",!1,p,w),w.onabort=g(Pn,m,"TestLoadImage: abort",!1,p,w),w.ontimeout=g(Pn,m,"TestLoadImage: timeout",!1,p,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Wb(u,p){const m=new Rs,w=new AbortController,R=setTimeout(()=>{w.abort(),Pn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(N=>{clearTimeout(R),N.ok?Pn(m,"TestPingServer: ok",!0,p):Pn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(R),Pn(m,"TestPingServer: error",!1,p)})}function Pn(u,p,m,w,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),w(m)}catch{}}function Gb(){this.g=new kb}function Kb(u,p,m){const w=m||"";try{gh(u,function(R,N){let $=R;l(R)&&($=Cc(R)),p.push(w+N+"="+encodeURIComponent($))})}catch(R){throw p.push(w+"type="+encodeURIComponent("_badmap")),R}}function yo(u){this.l=u.Ub||null,this.j=u.eb||!1}y(yo,Rc),yo.prototype.g=function(){return new vo(this.l,this.j)},yo.prototype.i=(function(u){return function(){return u}})({});function vo(u,p){Wt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(vo,Wt),n=vo.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Vs(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Ls(this):Vs(this),this.readyState==3&&Eh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Ls(this))},n.Qa=function(u){this.g&&(this.response=u,Ls(this))},n.ga=function(){this.g&&Ls(this)};function Ls(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vs(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=p.next();return u.join(`\r
`)};function Vs(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Th(u){let p="";return L(u,function(m,w){p+=w,p+=":",p+=m,p+=`\r
`}),p}function Uc(u,p,m){t:{for(w in m){var w=!1;break t}w=!0}w||(m=Th(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):yt(u,p,m))}function At(u){Wt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(At,Wt);var Yb=/^https?$/i,Xb=["POST","PUT"];n=At.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oc.g(),this.v=this.o?Jd(this.o):Jd(Oc),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(N){Ih(this,N);return}if(u=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var R in w)m.set(R,w[R]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const N of w.keys())m.set(N,w.get(N));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(N=>N.toLowerCase()=="content-type"),R=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Xb,p,void 0))||w||R||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of m)this.g.setRequestHeader(N,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sh(this),this.u=!0,this.g.send(u),this.u=!1}catch(N){Ih(this,N)}};function Ih(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ah(u),_o(u)}function Ah(u){u.A||(u.A=!0,oe(u,"complete"),oe(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,oe(this,"complete"),oe(this,"abort"),_o(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_o(this,!0)),At.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xh(this):this.bb())},n.bb=function(){xh(this)};function xh(u){if(u.h&&typeof o<"u"&&(!u.v[1]||rn(u)!=4||u.Z()!=2)){if(u.u&&rn(u)==4)Kd(u.Ea,0,u);else if(oe(u,"readystatechange"),rn(u)==4){u.h=!1;try{const $=u.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var m;if(!(m=p)){var w;if(w=$===0){var R=String(u.D).match(mh)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),w=!Yb.test(R?R.toLowerCase():"")}m=w}if(m)oe(u,"complete"),oe(u,"success");else{u.m=6;try{var N=2<rn(u)?u.g.statusText:""}catch{N=""}u.l=N+" ["+u.Z()+"]",Ah(u)}}finally{_o(u)}}}}function _o(u,p){if(u.g){Sh(u);const m=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||oe(u,"ready");try{m.onreadystatechange=w}catch{}}}function Sh(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function rn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Pb(p)}};function Ph(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Qb(u){const p={};u=(u.g&&2<=rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(k(u[w]))continue;var m=S(u[w]);const R=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const N=p[R]||[];p[R]=N,N.push(m)}I(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(u,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||p}function kh(u){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,u),this.cb=Fs("retryDelaySeedMs",1e4,u),this.Wa=Fs("forwardChannelMaxRetries",2,u),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new uh(u&&u.concurrentRequestLimit),this.Da=new Gb,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=kh.prototype,n.la=8,n.G=1,n.connect=function(u,p,m,w){ae(0),this.W=u,this.H=p||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=Fh(this,null,this.W),wo(this)};function zc(u){if(Ch(u),u.G==3){var p=u.U++,m=sn(u.I);if(yt(m,"SID",u.K),yt(m,"RID",p),yt(m,"TYPE","terminate"),Bs(u,m),p=new xn(u,u.j,p),p.L=2,p.v=mo(sn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=p.v,m=!0),m||(p.g=Bh(p.j,null),p.g.ea(p.v)),p.F=Date.now(),fo(p)}Vh(u)}function bo(u){u.g&&(Hc(u),u.g.cancel(),u.g=null)}function Ch(u){bo(u),u.u&&(a.clearTimeout(u.u),u.u=null),Eo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function wo(u){if(!dh(u.h)&&!u.s){u.s=!0;var p=u.Ga;ht||tn(),Ut||(ht(),Ut=!0),Mt.add(p,u),u.B=0}}function Jb(u,p){return hh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cs(f(u.Ga,u,p),Lh(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const R=new xn(this,this.j,u);let N=this.o;if(this.S&&(N?(N=b(N),x(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)t:{for(var p=0,m=0;m<this.i.length;m++){e:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=m;break t}if(p===4096||m===this.i.length-1){p=m+1;break t}}p=1e3}else p=1e3;p=Mh(this,R,p),m=sn(this.I),yt(m,"RID",u),yt(m,"CVER",22),this.D&&yt(m,"X-HTTP-Session-Id",this.D),Bs(this,m),N&&(this.O?p="headers="+encodeURIComponent(String(Th(N)))+"&"+p:this.m&&Uc(m,this.m,N)),$c(this.h,R),this.Ua&&yt(m,"TYPE","init"),this.P?(yt(m,"$req",p),yt(m,"SID","null"),R.T=!0,Lc(R,m,null)):Lc(R,m,p),this.G=2}}else this.G==3&&(u?Rh(this,u):this.i.length==0||dh(this.h)||Rh(this))};function Rh(u,p){var m;p?m=p.l:m=u.U++;const w=sn(u.I);yt(w,"SID",u.K),yt(w,"RID",m),yt(w,"AID",u.T),Bs(u,w),u.m&&u.o&&Uc(w,u.m,u.o),m=new xn(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Mh(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),$c(u.h,m),Lc(m,w,p)}function Bs(u,p){u.H&&L(u.H,function(m,w){yt(p,w,m)}),u.l&&gh({},function(m,w){yt(p,w,m)})}function Mh(u,p,m){m=Math.min(u.i.length,m);var w=u.l?f(u.l.Na,u.l,u):null;t:{var R=u.i;let N=-1;for(;;){const $=["count="+m];N==-1?0<m?(N=R[0].g,$.push("ofs="+N)):N=0:$.push("ofs="+N);let ft=!0;for(let zt=0;zt<m;zt++){let at=R[zt].g;const Gt=R[zt].map;if(at-=N,0>at)N=Math.max(0,R[zt].g-100),ft=!1;else try{Kb(Gt,$,"req"+at+"_")}catch{w&&w(Gt)}}if(ft){w=$.join("&");break t}}}return u=u.i.splice(0,m),p.D=u,w}function Dh(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ht||tn(),Ut||(ht(),Ut=!0),Mt.add(p,u),u.v=0}}function jc(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cs(f(u.Fa,u),Lh(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cs(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ae(10),bo(this),Oh(this))};function Hc(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Oh(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sn(u.qa);yt(p,"RID","rpc"),yt(p,"SID",u.K),yt(p,"AID",u.T),yt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&yt(p,"TO",u.ja),yt(p,"TYPE","xmlhttp"),Bs(u,p),u.m&&u.o&&Uc(p,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=mo(sn(p)),m.m=null,m.P=!0,ah(m,u)}n.Za=function(){this.C!=null&&(this.C=null,bo(this),jc(this),ae(19))};function Eo(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Nh(u,p){var m=null;if(u.g==p){Eo(u),Hc(u),u.g=null;var w=2}else if(Bc(u.h,p))m=p.D,fh(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){m=p.m?p.m.length:0,p=Date.now()-p.F;var R=u.B;w=lo(),oe(w,new ih(w,m)),wo(u)}else Dh(u);else if(R=p.s,R==3||R==0&&0<p.X||!(w==1&&Jb(u,p)||w==2&&jc(u)))switch(m&&0<m.length&&(p=u.h,p.i=p.i.concat(m)),R){case 1:ui(u,5);break;case 4:ui(u,10);break;case 3:ui(u,6);break;default:ui(u,2)}}}function Lh(u,p){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*p}function ui(u,p){if(u.j.info("Error code "+p),p==2){var m=f(u.fb,u),w=u.Xa;const R=!w;w=new li(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||po(w,"https"),mo(w),R?qb(w.toString(),m):Wb(w.toString(),m)}else ae(2);u.G=0,u.l&&u.l.sa(p),Vh(u),Ch(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function Vh(u){if(u.G=0,u.ka=[],u.l){const p=ph(u.h);(p.length!=0||u.i.length!=0)&&(v(u.ka,p),v(u.ka,u.i),u.h.i.length=0,_(u.i),u.i.length=0),u.l.ra()}}function Fh(u,p,m){var w=m instanceof li?sn(m):new li(m);if(w.g!="")p&&(w.g=p+"."+w.g),go(w,w.s);else{var R=a.location;w=R.protocol,p=p?p+"."+R.hostname:R.hostname,R=+R.port;var N=new li(null);w&&po(N,w),p&&(N.g=p),R&&go(N,R),m&&(N.l=m),w=N}return m=u.D,p=u.ya,m&&p&&yt(w,m,p),yt(w,"VER",u.la),Bs(u,w),w}function Bh(u,p,m){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new At(new yo({eb:m})):new At(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $h(){}n=$h.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function To(){}To.prototype.g=function(u,p){return new ge(u,p)};function ge(u,p){Wt.call(this),this.g=new kh(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!k(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!k(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Hi(this)}y(ge,Wt),ge.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ge.prototype.close=function(){zc(this.g)},ge.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Cc(u),u=m);p.i.push(new Nb(p.Ya++,u)),p.G==3&&wo(p)},ge.prototype.N=function(){this.g.l=null,delete this.j,zc(this.g),delete this.g,ge.aa.N.call(this)};function Uh(u){Mc.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const m in p){u=m;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}y(Uh,Mc);function zh(){Dc.call(this),this.status=1}y(zh,Dc);function Hi(u){this.g=u}y(Hi,$h),Hi.prototype.ua=function(){oe(this.g,"a")},Hi.prototype.ta=function(u){oe(this.g,new Uh(u))},Hi.prototype.sa=function(u){oe(this.g,new zh)},Hi.prototype.ra=function(){oe(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,ge.prototype.send=ge.prototype.o,ge.prototype.open=ge.prototype.m,ge.prototype.close=ge.prototype.close,Zm=function(){return new To},Jm=function(){return lo()},Qm=ai,kl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},uo.NO_ERROR=0,uo.TIMEOUT=8,uo.HTTP_ERROR=6,Qo=uo,sh.COMPLETE="complete",Xm=sh,Zd.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",Wt.prototype.listen=Wt.prototype.K,Gs=Zd,At.prototype.listenOnce=At.prototype.L,At.prototype.getLastError=At.prototype.Ka,At.prototype.getLastErrorCode=At.prototype.Ba,At.prototype.getStatus=At.prototype.Z,At.prototype.getResponseJson=At.prototype.Oa,At.prototype.getResponseText=At.prototype.oa,At.prototype.send=At.prototype.ea,At.prototype.setWithCredentials=At.prototype.Ha,Ym=At}).apply(typeof xo<"u"?xo:typeof self<"u"?self:typeof window<"u"?window:{});const wf="@firebase/firestore",Ef="4.8.0";/**
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
 */class Jt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let ws="11.10.0";/**
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
 */const Mi=new pu("@firebase/firestore");function Yi(){return Mi.logLevel}function j(n,...t){if(Mi.logLevel<=nt.DEBUG){const e=t.map(Pu);Mi.debug(`Firestore (${ws}): ${n}`,...e)}}function wn(n,...t){if(Mi.logLevel<=nt.ERROR){const e=t.map(Pu);Mi.error(`Firestore (${ws}): ${n}`,...e)}}function Wn(n,...t){if(Mi.logLevel<=nt.WARN){const e=t.map(Pu);Mi.warn(`Firestore (${ws}): ${n}`,...e)}}function Pu(n){if(typeof n=="string")return n;try{/**
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
 */function K(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,ty(n,i,e)}function ty(n,t,e){let i=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw wn(i),new Error(i)}function lt(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||ty(t,s,i)}function Q(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Tn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class ey{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Jt.UNAUTHENTICATED)))}shutdown(){}}class uI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class dI{constructor(t){this.t=t,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){lt(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let r=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new yn,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=r;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new yn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string",31837,{l:i}),new ey(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string",2055,{h:t}),new Jt(t)}}class hI{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fI{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new hI(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Tf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pI{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,we(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){lt(this.o===void 0,3512);const i=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Tf(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(lt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Tf(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function ny(){return new TextEncoder}/**
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
 */class ku{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=gI(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function Cl(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return Z(i,s);{const r=ny(),o=mI(r.encode(If(n,e)),r.encode(If(t,e)));return o!==0?o:Z(i,s)}}e+=i>65535?2:1}return Z(n.length,t.length)}function If(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function mI(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return Z(n[e],t[e]);return Z(n.length,t.length)}function us(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
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
 */const Af="__name__";class Ue{constructor(t,e,i){e===void 0?e=0:e>t.length&&K(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&K(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ue.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ue?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=Ue.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return Z(t.length,e.length)}static compareSegments(t,e){const i=Ue.isNumericId(t),s=Ue.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?Ue.extractNumericId(t).compare(Ue.extractNumericId(e)):Cl(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return jn.fromString(t.substring(4,t.length-2))}}class gt extends Ue{construct(t,e,i){return new gt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new gt(e)}static emptyPath(){return new gt([])}}const yI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Ue{construct(t,e,i){return new Ht(t,e,i)}static isValidIdentifier(t){return yI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Af}static keyField(){return new Ht([Af])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ht(e)}static emptyPath(){return new Ht([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(gt.fromString(t))}static fromName(t){return new q(gt.fromString(t).popFirst(5))}static empty(){return new q(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return gt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new gt(t.slice()))}}/**
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
 */function iy(n,t,e){if(!e)throw new z(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function vI(n,t,e,i){if(t===!0&&i===!0)throw new z(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function xf(n){if(!q.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sf(n){if(q.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sy(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ja(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function ce(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ja(n);throw new z(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Lt(n,t){const e={typeString:n};return t&&(e.value=t),e}function jr(n,t){if(!sy(n))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new z(V.INVALID_ARGUMENT,e);return!0}/**
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
 */const Pf=-62135596800,kf=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*kf);return new vt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Pf)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kf}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(jr(t,vt._jsonSchema))return new vt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Pf;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Lt("string",vt._jsonSchemaVersion),seconds:Lt("number"),nanoseconds:Lt("number")};/**
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
 */class Y{static fromTimestamp(t){return new Y(t)}static min(){return new Y(new vt(0,0))}static max(){return new Y(new vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wr=-1;function _I(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new vt(e+1,0):new vt(e,i));return new Gn(s,q.empty(),t)}function bI(n){return new Gn(n.readTime,n.key,wr)}class Gn{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Gn(Y.min(),q.empty(),wr)}static max(){return new Gn(Y.max(),q.empty(),wr)}}function wI(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
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
 */const EI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Es(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==EI)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):B.reject(e)}static resolve(t){return new B(((e,i)=>{e(t)}))}static reject(t){return new B(((e,i)=>{i(t)}))}static waitFor(t){return new B(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(c=>i(c)))})),o=!0,r===s&&e()}))}static or(t){let e=B.resolve(!1);for(const i of t)e=e.next((s=>s?B.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new B(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next((d=>{o[l]=d,++a,a===r&&i(o)}),(d=>s(d)))}}))}static doWhile(t,e){return new B(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function II(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ts(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Za{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this._e(i),this.ae=i=>e.writeSequenceNumber(i))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Za.ue=-1;/**
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
 */const Cu=-1;function tc(n){return n==null}function xa(n){return n===0&&1/n==-1/0}function AI(n){return typeof n=="number"&&Number.isInteger(n)&&!xa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ry="";function xI(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Cf(t)),t=SI(n.get(e),t);return Cf(t)}function SI(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case ry:e+="";break;default:e+=r}}return e}function Cf(n){return n+ry+""}/**
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
 */function Rf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ii(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function oy(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Tt{constructor(t,e){this.comparator=t,this.root=e||jt.EMPTY}insert(t,e){return new Tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(t){return new Tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new So(this.root,t,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new So(this.root,t,this.comparator,!0)}}class So{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jt{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??jt.RED,this.left=s??jt.EMPTY,this.right=r??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new jt(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return jt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw K(27949);return t+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(t){this.comparator=t,this.data=new Tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mf(this.data.getIterator())}getIteratorFrom(t){return new Mf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ft(this.comparator);return e.data=t,e}}class Mf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ve{constructor(t){this.fields=t,t.sort(Ht.comparator)}static empty(){return new ve([])}unionWith(t){let e=new Ft(Ht.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new ve(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return us(this.fields,t.fields,((e,i)=>e.isEqual(i)))}}/**
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
 */class ay extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ay("Invalid base64 string: "+r):r}})(t);return new qt(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const PI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(n){if(lt(!!n,39018),typeof n=="string"){let t=0;const e=PI.exec(n);if(lt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ct(n.seconds),nanos:Ct(n.nanos)}}function Ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yn(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
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
 */const cy="server_timestamp",ly="__type__",uy="__previous_value__",dy="__local_write_time__";function Ru(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[ly])===null||e===void 0?void 0:e.stringValue)===cy}function ec(n){const t=n.mapValue.fields[uy];return Ru(t)?ec(t):t}function Er(n){const t=Kn(n.mapValue.fields[dy].timestampValue);return new vt(t.seconds,t.nanos)}/**
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
 */class kI{constructor(t,e,i,s,r,o,a,c,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const Sa="(default)";class Tr{constructor(t,e){this.projectId=t,this.database=e||Sa}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database===Sa}isEqual(t){return t instanceof Tr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const hy="__type__",CI="__max__",Po={mapValue:{}},fy="__vector__",Pa="value";function Xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ru(n)?4:MI(n)?9007199254740991:RI(n)?10:11:K(28295,{value:n})}function Qe(n,t){if(n===t)return!0;const e=Xn(n);if(e!==Xn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Er(n).isEqual(Er(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Kn(s.timestampValue),a=Kn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return Yn(s.bytesValue).isEqual(Yn(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return Ct(s.geoPointValue.latitude)===Ct(r.geoPointValue.latitude)&&Ct(s.geoPointValue.longitude)===Ct(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return Ct(s.integerValue)===Ct(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Ct(s.doubleValue),a=Ct(r.doubleValue);return o===a?xa(o)===xa(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return us(n.arrayValue.values||[],t.arrayValue.values||[],Qe);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Rf(o)!==Rf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qe(o[c],a[c])))return!1;return!0})(n,t);default:return K(52216,{left:n})}}function Ir(n,t){return(n.values||[]).find((e=>Qe(e,t)))!==void 0}function ds(n,t){if(n===t)return 0;const e=Xn(n),i=Xn(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=Ct(r.integerValue||r.doubleValue),c=Ct(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,t);case 3:return Df(n.timestampValue,t.timestampValue);case 4:return Df(Er(n),Er(t));case 5:return Cl(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=Yn(r),c=Yn(o);return a.compareTo(c)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=Z(a[l],c[l]);if(d!==0)return d}return Z(a.length,c.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=Z(Ct(r.latitude),Ct(o.latitude));return a!==0?a:Z(Ct(r.longitude),Ct(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Of(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},g=(a=h[Pa])===null||a===void 0?void 0:a.arrayValue,y=(c=f[Pa])===null||c===void 0?void 0:c.arrayValue,_=Z(((l=g==null?void 0:g.values)===null||l===void 0?void 0:l.length)||0,((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0);return _!==0?_:Of(g,y)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===Po.mapValue&&o===Po.mapValue)return 0;if(r===Po.mapValue)return 1;if(o===Po.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=Cl(c[h],d[h]);if(f!==0)return f;const g=ds(a[c[h]],l[d[h]]);if(g!==0)return g}return Z(c.length,d.length)})(n.mapValue,t.mapValue);default:throw K(23264,{le:e})}}function Df(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=Kn(n),i=Kn(t),s=Z(e.seconds,i.seconds);return s!==0?s:Z(e.nanos,i.nanos)}function Of(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=ds(e[s],i[s]);if(r)return r}return Z(e.length,i.length)}function hs(n){return Rl(n)}function Rl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=Kn(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Yn(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return q.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=Rl(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Rl(e.fields[o])}`;return s+"}"})(n.mapValue):K(61005,{value:n})}function Jo(n){switch(Xn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ec(n);return t?16+Jo(t):16;case 5:return 2*n.stringValue.length;case 6:return Yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Jo(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return ii(i.fields,((r,o)=>{s+=r.length+Jo(o)})),s})(n.mapValue);default:throw K(13486,{value:n})}}function Nf(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ml(n){return!!n&&"integerValue"in n}function Mu(n){return!!n&&"arrayValue"in n}function Lf(n){return!!n&&"nullValue"in n}function Vf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zo(n){return!!n&&"mapValue"in n}function RI(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[hy])===null||e===void 0?void 0:e.stringValue)===fy}function ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ii(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=ar(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ar(n.arrayValue.values[e]);return t}return Object.assign({},n)}function MI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===CI}/**
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
 */class fe{constructor(t){this.value=t}static empty(){return new fe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Zo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ar(e)}setAll(t){let e=Ht.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=ar(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());Zo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){ii(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new fe(ar(this.value))}}function py(n){const t=[];return ii(n.fields,((e,i)=>{const s=new Ht([e]);if(Zo(i)){const r=py(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new ve(t)}/**
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
 */class te{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new te(t,0,Y.min(),Y.min(),Y.min(),fe.empty(),0)}static newFoundDocument(t,e,i,s){return new te(t,1,e,Y.min(),i,s,0)}static newNoDocument(t,e){return new te(t,2,e,Y.min(),Y.min(),fe.empty(),0)}static newUnknownDocument(t,e){return new te(t,3,e,Y.min(),Y.min(),fe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof te&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ka{constructor(t,e){this.position=t,this.inclusive=e}}function Ff(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=q.comparator(q.fromName(o.referenceValue),e.key):i=ds(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Bf(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Qe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function DI(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class gy{}class Ot extends gy{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new NI(t,e,i):e==="array-contains"?new FI(t,i):e==="in"?new BI(t,i):e==="not-in"?new $I(t,i):e==="array-contains-any"?new UI(t,i):new Ot(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new LI(t,i):new VI(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ds(e,this.value)):e!==null&&Xn(this.value)===Xn(e)&&this.matchesComparison(ds(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends gy{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ne(t,e)}matches(t){return my(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function my(n){return n.op==="and"}function yy(n){return OI(n)&&my(n)}function OI(n){for(const t of n.filters)if(t instanceof Ne)return!1;return!0}function Dl(n){if(n instanceof Ot)return n.field.canonicalString()+n.op.toString()+hs(n.value);if(yy(n))return n.filters.map((t=>Dl(t))).join(",");{const t=n.filters.map((e=>Dl(e))).join(",");return`${n.op}(${t})`}}function vy(n,t){return n instanceof Ot?(function(i,s){return s instanceof Ot&&i.op===s.op&&i.field.isEqual(s.field)&&Qe(i.value,s.value)})(n,t):n instanceof Ne?(function(i,s){return s instanceof Ne&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&vy(o,s.filters[a])),!0):!1})(n,t):void K(19439)}function _y(n){return n instanceof Ot?(function(e){return`${e.field.canonicalString()} ${e.op} ${hs(e.value)}`})(n):n instanceof Ne?(function(e){return e.op.toString()+" {"+e.getFilters().map(_y).join(" ,")+"}"})(n):"Filter"}class NI extends Ot{constructor(t,e,i){super(t,e,i),this.key=q.fromName(i.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class LI extends Ot{constructor(t,e){super(t,"in",e),this.keys=by("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class VI extends Ot{constructor(t,e){super(t,"not-in",e),this.keys=by("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function by(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((i=>q.fromName(i.referenceValue)))}class FI extends Ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Mu(e)&&Ir(e.arrayValue,this.value)}}class BI extends Ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ir(this.value.arrayValue,e)}}class $I extends Ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ir(this.value.arrayValue,e)}}class UI extends Ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Mu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>Ir(this.value.arrayValue,i)))}}/**
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
 */class zI{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Pe=null}}function $f(n,t=null,e=[],i=[],s=null,r=null,o=null){return new zI(n,t,e,i,s,r,o)}function Du(n){const t=Q(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>Dl(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),tc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>hs(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>hs(i))).join(",")),t.Pe=e}return t.Pe}function Ou(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!DI(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!vy(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Bf(n.startAt,t.startAt)&&Bf(n.endAt,t.endAt)}function Ol(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Is{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jI(n,t,e,i,s,r,o,a){return new Is(n,t,e,i,s,r,o,a)}function nc(n){return new Is(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wy(n){return n.collectionGroup!==null}function cr(n){const t=Q(n);if(t.Te===null){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ft(Ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new Ar(r,i))})),e.has(Ht.keyField().canonicalString())||t.Te.push(new Ar(Ht.keyField(),i))}return t.Te}function qe(n){const t=Q(n);return t.Ie||(t.Ie=HI(t,cr(n))),t.Ie}function HI(n,t){if(n.limitType==="F")return $f(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Ar(s.field,r)}));const e=n.endAt?new ka(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ka(n.startAt.position,n.startAt.inclusive):null;return $f(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Nl(n,t){const e=n.filters.concat([t]);return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ll(n,t,e){return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ic(n,t){return Ou(qe(n),qe(t))&&n.limitType===t.limitType}function Ey(n){return`${Du(qe(n))}|lt:${n.limitType}`}function Xi(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>_y(s))).join(", ")}]`),tc(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>hs(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>hs(s))).join(",")),`Target(${i})`})(qe(n))}; limitType=${n.limitType})`}function sc(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):q.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of cr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l<=0:l<0})(i.startAt,cr(i),s)||i.endAt&&!(function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l>=0:l>0})(i.endAt,cr(i),s))})(n,t)}function qI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ty(n){return(t,e)=>{let i=!1;for(const s of cr(n)){const r=WI(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function WI(n,t,e){const i=n.field.isKeyField()?q.comparator(t.key,e.key):(function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?ds(c,l):K(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return K(19790,{direction:n.dir})}}/**
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
 */class Li{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ii(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return oy(this.inner)}size(){return this.innerSize}}/**
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
 */const GI=new Tt(q.comparator);function En(){return GI}const Iy=new Tt(q.comparator);function Ks(...n){let t=Iy;for(const e of n)t=t.insert(e.key,e);return t}function Ay(n){let t=Iy;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function vi(){return lr()}function xy(){return lr()}function lr(){return new Li((n=>n.toString()),((n,t)=>n.isEqual(t)))}const KI=new Tt(q.comparator),YI=new Ft(q.comparator);function it(...n){let t=YI;for(const e of n)t=t.add(e);return t}const XI=new Ft(Z);function QI(){return XI}/**
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
 */function Nu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xa(t)?"-0":t}}function Sy(n){return{integerValue:""+n}}function JI(n,t){return AI(t)?Sy(t):Nu(n,t)}/**
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
 */class rc{constructor(){this._=void 0}}function ZI(n,t,e){return n instanceof Ca?(function(s,r){const o={fields:{[ly]:{stringValue:cy},[dy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ru(r)&&(r=ec(r)),r&&(o.fields[uy]=r),{mapValue:o}})(e,t):n instanceof xr?ky(n,t):n instanceof Sr?Cy(n,t):(function(s,r){const o=Py(s,r),a=zf(o)+zf(s.Ee);return Ml(o)&&Ml(s.Ee)?Sy(a):Nu(s.serializer,a)})(n,t)}function tA(n,t,e){return n instanceof xr?ky(n,t):n instanceof Sr?Cy(n,t):e}function Py(n,t){return n instanceof Ra?(function(i){return Ml(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class Ca extends rc{}class xr extends rc{constructor(t){super(),this.elements=t}}function ky(n,t){const e=Ry(t);for(const i of n.elements)e.some((s=>Qe(s,i)))||e.push(i);return{arrayValue:{values:e}}}class Sr extends rc{constructor(t){super(),this.elements=t}}function Cy(n,t){let e=Ry(t);for(const i of n.elements)e=e.filter((s=>!Qe(s,i)));return{arrayValue:{values:e}}}class Ra extends rc{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function zf(n){return Ct(n.integerValue||n.doubleValue)}function Ry(n){return Mu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function eA(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof xr&&s instanceof xr||i instanceof Sr&&s instanceof Sr?us(i.elements,s.elements,Qe):i instanceof Ra&&s instanceof Ra?Qe(i.Ee,s.Ee):i instanceof Ca&&s instanceof Ca})(n.transform,t.transform)}class nA{constructor(t,e){this.version=t,this.transformResults=e}}class le{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new le}static exists(t){return new le(void 0,t)}static updateTime(t){return new le(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ta(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class oc{}function My(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ac(n.key,le.none()):new Hr(n.key,n.data,le.none());{const e=n.data,i=fe.empty();let s=new Ft(Ht.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new si(n.key,i,new ve(s.toArray()),le.none())}}function iA(n,t,e){n instanceof Hr?(function(s,r,o){const a=s.value.clone(),c=Hf(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof si?(function(s,r,o){if(!ta(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Hf(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Dy(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function ur(n,t,e,i){return n instanceof Hr?(function(r,o,a,c){if(!ta(r.precondition,o))return a;const l=r.value.clone(),d=qf(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,t,e,i):n instanceof si?(function(r,o,a,c){if(!ta(r.precondition,o))return a;const l=qf(r.fieldTransforms,c,o),d=o.data;return d.setAll(Dy(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((h=>h.field)))})(n,t,e,i):(function(r,o,a){return ta(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function sA(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=Py(i.transform,s||null);r!=null&&(e===null&&(e=fe.empty()),e.set(i.field,r))}return e||null}function jf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&us(i,s,((r,o)=>eA(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Hr extends oc{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class si extends oc{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Dy(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function Hf(n,t,e){const i=new Map;lt(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,tA(o,a,e[s]))}return i}function qf(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,ZI(r,o,t))}return i}class ac extends oc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rA extends oc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oA{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&iA(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ur(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ur(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=xy();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const c=My(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),it())}isEqual(t){return this.batchId===t.batchId&&us(this.mutations,t.mutations,((e,i)=>jf(e,i)))&&us(this.baseMutations,t.baseMutations,((e,i)=>jf(e,i)))}}class Lu{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){lt(t.mutations.length===i.length,58842,{Ve:t.mutations.length,me:i.length});let s=(function(){return KI})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Lu(t,e,i,s)}}/**
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
 */class aA{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class cA{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Dt,ot;function lA(n){switch(n){case V.OK:return K(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Oy(n){if(n===void 0)return wn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Dt.OK:return V.OK;case Dt.CANCELLED:return V.CANCELLED;case Dt.UNKNOWN:return V.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return V.INTERNAL;case Dt.UNAVAILABLE:return V.UNAVAILABLE;case Dt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Dt.NOT_FOUND:return V.NOT_FOUND;case Dt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Dt.ABORTED:return V.ABORTED;case Dt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Dt.DATA_LOSS:return V.DATA_LOSS;default:return K(39323,{code:n})}}(ot=Dt||(Dt={}))[ot.OK=0]="OK",ot[ot.CANCELLED=1]="CANCELLED",ot[ot.UNKNOWN=2]="UNKNOWN",ot[ot.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ot[ot.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ot[ot.NOT_FOUND=5]="NOT_FOUND",ot[ot.ALREADY_EXISTS=6]="ALREADY_EXISTS",ot[ot.PERMISSION_DENIED=7]="PERMISSION_DENIED",ot[ot.UNAUTHENTICATED=16]="UNAUTHENTICATED",ot[ot.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ot[ot.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ot[ot.ABORTED=10]="ABORTED",ot[ot.OUT_OF_RANGE=11]="OUT_OF_RANGE",ot[ot.UNIMPLEMENTED=12]="UNIMPLEMENTED",ot[ot.INTERNAL=13]="INTERNAL",ot[ot.UNAVAILABLE=14]="UNAVAILABLE",ot[ot.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const uA=new jn([4294967295,4294967295],0);function Wf(n){const t=ny().encode(n),e=new Km;return e.update(t),new Uint8Array(e.digest())}function Gf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new jn([e,i],0),new jn([s,r],0)]}class Vu{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Ys(`Invalid padding: ${e}`);if(i<0)throw new Ys(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=jn.fromNumber(this.fe)}pe(t,e,i){let s=t.add(e.multiply(jn.fromNumber(i)));return s.compare(uA)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Wf(t),[i,s]=Gf(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);if(!this.ye(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Vu(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.fe===0)return;const e=Wf(t),[i,s]=Gf(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);this.we(o)}}we(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cc{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,qr.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new cc(Y.min(),s,new Tt(Z),En(),it())}}class qr{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new qr(i,e,it(),it(),it())}}/**
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
 */class ea{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.be=s}}class Ny{constructor(t,e){this.targetId=t,this.De=e}}class Ly{constructor(t,e,i=qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class Kf{constructor(){this.ve=0,this.Ce=Yf(),this.Fe=qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=it(),e=it(),i=it();return this.Ce.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:K(38017,{changeType:r})}})),new qr(this.Fe,this.Me,t,e,i)}ke(){this.xe=!1,this.Ce=Yf()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dA{constructor(t){this.We=t,this.Ge=new Map,this.ze=En(),this.je=ko(),this.Je=ko(),this.He=new Tt(Z)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const i=this.tt(e);switch(t.state){case 0:this.nt(e)&&i.Be(t.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(t.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(i.Ke(),i.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),i.Be(t.resumeToken));break;default:K(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((i,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,i=t.De.count,s=this.st(e);if(s){const r=s.target;if(Ol(r))if(i===0){const o=new q(r.path);this.Xe(e,o,te.newNoDocument(o,Y.min()))}else lt(i===1,20013,{expectedCount:i});else{const o=this.ot(e);if(o!==i){const a=this._t(t),c=a?this.ut(a,t,o):1;if(c!==0){this.rt(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,l)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=Yn(i).toUint8Array()}catch(c){if(c instanceof ay)return Wn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Vu(o,s,r)}catch(c){return Wn(c instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(t,e,i){return e.De.count===i-this.ht(t,e.targetId)?0:2}ht(t,e){const i=this.We.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Xe(e,r,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((r,o)=>{const a=this.st(o);if(a){if(r.current&&Ol(a.target)){const c=new q(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,te.newNoDocument(c,t))}r.Ne&&(e.set(o,r.Le()),r.ke())}}));let i=it();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.ze.forEach(((r,o)=>o.setReadTime(t)));const s=new cc(t,e,this.He,this.ze,i);return this.ze=En(),this.je=ko(),this.Je=ko(),this.He=new Tt(Z),s}Ze(t,e){if(!this.nt(t))return;const i=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,i),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,i){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),i&&(this.ze=this.ze.insert(e,i))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Kf,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new Ft(Z),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new Ft(Z),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||j("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Kf),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function ko(){return new Tt(q.comparator)}function Yf(){return new Tt(q.comparator)}const hA={asc:"ASCENDING",desc:"DESCENDING"},fA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pA={and:"AND",or:"OR"};class gA{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Vl(n,t){return n.useProto3Json||tc(t)?t:{value:t}}function Ma(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vy(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function mA(n,t){return Ma(n,t.toTimestamp())}function We(n){return lt(!!n,49232),Y.fromTimestamp((function(e){const i=Kn(e);return new vt(i.seconds,i.nanos)})(n))}function Fu(n,t){return Fl(n,t).canonicalString()}function Fl(n,t){const e=(function(s){return new gt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Fy(n){const t=gt.fromString(n);return lt(jy(t),10190,{key:t.toString()}),t}function Bl(n,t){return Fu(n.databaseId,t.path)}function Zc(n,t){const e=Fy(t);if(e.get(1)!==n.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q($y(e))}function By(n,t){return Fu(n.databaseId,t)}function yA(n){const t=Fy(n);return t.length===4?gt.emptyPath():$y(t)}function $l(n){return new gt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $y(n){return lt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xf(n,t,e){return{name:Bl(n,t),fields:e.value.mapValue.fields}}function vA(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K(39313,{state:l})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(l,d){return l.useProto3Json?(lt(d===void 0||typeof d=="string",58123),qt.fromBase64String(d||"")):(lt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),qt.fromUint8Array(d||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(l){const d=l.code===void 0?V.UNKNOWN:Oy(l.code);return new z(d,l.message||"")})(o);e=new Ly(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Zc(n,i.document.name),r=We(i.document.updateTime),o=i.document.createTime?We(i.document.createTime):Y.min(),a=new fe({mapValue:{fields:i.document.fields}}),c=te.newFoundDocument(s,r,o,a),l=i.targetIds||[],d=i.removedTargetIds||[];e=new ea(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Zc(n,i.document),r=i.readTime?We(i.readTime):Y.min(),o=te.newNoDocument(s,r),a=i.removedTargetIds||[];e=new ea([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Zc(n,i.document),r=i.removedTargetIds||[];e=new ea([],r,s,null)}else{if(!("filter"in t))return K(11601,{At:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new cA(s,r),a=i.targetId;e=new Ny(a,o)}}return e}function _A(n,t){let e;if(t instanceof Hr)e={update:Xf(n,t.key,t.value)};else if(t instanceof ac)e={delete:Bl(n,t.key)};else if(t instanceof si)e={update:Xf(n,t.key,t.data),updateMask:PA(t.fieldMask)};else{if(!(t instanceof rA))return K(16599,{Rt:t.type});e={verify:Bl(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ra)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw K(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:mA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K(27497)})(n,t.precondition)),e}function bA(n,t){return n&&n.length>0?(lt(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?We(s.updateTime):We(r);return o.isEqual(Y.min())&&(o=We(r)),new nA(o,s.transformResults||[])})(e,t)))):[]}function wA(n,t){return{documents:[By(n,t.path)]}}function EA(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=By(n,s);const r=(function(l){if(l.length!==0)return zy(Ne.create(l,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(l){if(l.length!==0)return l.map((d=>(function(f){return{field:Qi(f.field),direction:AA(f.dir)}})(d)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Vl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(t.endAt)),{Vt:e,parent:s}}function TA(n){let t=yA(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){lt(i===1,65062);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=(function(h){const f=Uy(h);return f instanceof Ne&&yy(f)?f.getFilters():[f]})(e.where));let o=[];e.orderBy&&(o=(function(h){return h.map((f=>(function(y){return new Ar(Ji(y.field),(function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(f)))})(e.orderBy));let a=null;e.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,tc(f)?null:f})(e.limit));let c=null;e.startAt&&(c=(function(h){const f=!!h.before,g=h.values||[];return new ka(g,f)})(e.startAt));let l=null;return e.endAt&&(l=(function(h){const f=!h.before,g=h.values||[];return new ka(g,f)})(e.endAt)),jI(t,s,o,r,a,"F",c,l)}function IA(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Uy(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Ji(e.unaryFilter.field);return Ot.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Ji(e.unaryFilter.field);return Ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ji(e.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ji(e.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Ot.create(Ji(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ne.create(e.compositeFilter.filters.map((i=>Uy(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(e.compositeFilter.op))})(n):K(30097,{filter:n})}function AA(n){return hA[n]}function xA(n){return fA[n]}function SA(n){return pA[n]}function Qi(n){return{fieldPath:n.canonicalString()}}function Ji(n){return Ht.fromServerFormat(n.fieldPath)}function zy(n){return n instanceof Ot?(function(e){if(e.op==="=="){if(Vf(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NAN"}};if(Lf(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vf(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NOT_NAN"}};if(Lf(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(e.field),op:xA(e.op),value:e.value}}})(n):n instanceof Ne?(function(e){const i=e.getFilters().map((s=>zy(s)));return i.length===1?i[0]:{compositeFilter:{op:SA(e.op),filters:i}}})(n):K(54877,{filter:n})}function PA(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function jy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class On{constructor(t,e,i,s,r=Y.min(),o=Y.min(),a=qt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new On(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class kA{constructor(t){this.gt=t}}function CA(n){const t=TA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ll(t,t.limit,"L"):t}/**
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
 */class RA{constructor(){this.Dn=new MA}addToCollectionParentIndex(t,e){return this.Dn.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(Gn.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(Gn.min())}updateCollectionGroup(t,e,i){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class MA{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new Ft(gt.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Ft(gt.comparator)).toArray()}}/**
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
 */const Qf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hy=41943040;class he{static withCacheSize(t){return new he(t,he.DEFAULT_COLLECTION_PERCENTILE,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */he.DEFAULT_COLLECTION_PERCENTILE=10,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,he.DEFAULT=new he(Hy,he.DEFAULT_COLLECTION_PERCENTILE,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),he.DISABLED=new he(-1,0,0);/**
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
 */class fs{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new fs(0)}static ur(){return new fs(-1)}}/**
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
 */const Jf="LruGarbageCollector",DA=1048576;function Zf([n,t],[e,i]){const s=Z(n,e);return s===0?Z(t,i):s}class OA{constructor(t){this.Tr=t,this.buffer=new Ft(Zf),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();Zf(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class NA{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){j(Jf,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ts(e)?j(Jf,"Ignoring IndexedDB error during garbage collection: ",e):await Es(e)}await this.Rr(3e5)}))}}class LA{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return B.resolve(Za.ue);const i=new OA(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Qf)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qf):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let i,s,r,o,a,c,l;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(t,s)))).next((h=>(i=h,a=Date.now(),this.removeTargets(t,i,e)))).next((h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(t,i)))).next((h=>(l=Date.now(),Yi()<=nt.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h}))))}}function VA(n,t){return new LA(n,t)}/**
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
 */class FA{constructor(){this.changes=new Li((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,te.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?B.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class BA{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class $A{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&ur(i.mutation,s,ve.empty(),vt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,it()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=it()){const s=vi();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=Ks();return r.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=vi();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,it())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=En();const o=lr(),a=(function(){return lr()})();return e.forEach(((c,l)=>{const d=i.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof si)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),ur(d.mutation,l,d.mutation.getFieldMask(),vt.now())):o.set(l.key,ve.empty())})),this.recalculateAndSaveOverlays(t,r).next((c=>(c.forEach(((l,d)=>o.set(l,d))),e.forEach(((l,d)=>{var h;return a.set(l,new BA(d,(h=o.get(l))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(t,e){const i=lr();let s=new Tt(((o,a)=>o-a)),r=it();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((c=>{const l=e.get(c);if(l===null)return;let d=i.get(c)||ve.empty();d=a.applyToLocalView(l,d),i.set(c,d);const h=(s.get(a.batchId)||it()).add(c);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=xy();d.forEach((f=>{if(!r.has(f)){const g=My(e.get(f),i.get(f));g!==null&&h.set(f,g),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return B.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return(function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wy(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):B.resolve(vi());let a=wr,c=r;return o.next((l=>B.forEach(l,((d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?B.resolve():this.remoteDocumentCache.getEntry(t,d).next((f=>{c=c.insert(d,f)}))))).next((()=>this.populateOverlays(t,l,r))).next((()=>this.computeViews(t,c,l,it()))).next((d=>({batchId:a,changes:Ay(d)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next((i=>{let s=Ks();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=Ks();return this.indexManager.getCollectionParents(t,r).next((a=>B.forEach(a,(c=>{const l=(function(h,f){return new Is(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,i,s).next((d=>{d.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,te.newInvalidDocument(d)))}));let a=Ks();return o.forEach(((c,l)=>{const d=r.get(c);d!==void 0&&ur(d.mutation,l,ve.empty(),vt.now()),sc(e,l)&&(a=a.insert(c,l))})),a}))}}/**
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
 */class UA{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return B.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:We(s.createTime)}})(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:CA(s.bundledQuery),readTime:We(s.readTime)}})(e)),B.resolve()}}/**
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
 */class zA{constructor(){this.overlays=new Tt(q.comparator),this.kr=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const i=vi();return B.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.wt(t,e,r)})),B.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),B.resolve()}getOverlaysForCollection(t,e,i){const s=vi(),r=e.length+1,o=new q(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new Tt(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>i){let d=r.get(l.largestBatchId);d===null&&(d=vi(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=vi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,d)=>a.set(l,d))),!(a.size()>=s)););return B.resolve(a)}wt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new aA(e,i));let r=this.kr.get(e);r===void 0&&(r=it(),this.kr.set(e,r)),this.kr.set(e,r.add(i.key))}}/**
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
 */class jA{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
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
 */class Bu{constructor(){this.qr=new Ft(Bt.Qr),this.$r=new Ft(Bt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const i=new Bt(t,e);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new Bt(t,e))}Gr(t,e){t.forEach((i=>this.removeReference(i,e)))}zr(t){const e=new q(new gt([])),i=new Bt(e,t),s=new Bt(e,t+1),r=[];return this.$r.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new q(new gt([])),i=new Bt(e,t),s=new Bt(e,t+1);let r=it();return this.$r.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new Bt(t,0),i=this.qr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Bt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return q.comparator(t.key,e.key)||Z(t.Hr,e.Hr)}static Ur(t,e){return Z(t.Hr,e.Hr)||q.comparator(t.key,e.key)}}/**
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
 */class HA{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new Ft(Bt.Qr)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oA(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new Bt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,e){return B.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Cu:this.er-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Bt(e,0),s=new Bt(e,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new Ft(Z);return e.forEach((s=>{const r=new Bt(s,0),o=new Bt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),B.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;q.isDocumentKey(r)||(r=r.child(""));const o=new Bt(new q(r),0);let a=new Ft(Z);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Hr)),!0)}),o),B.resolve(this.ei(a))}ei(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){lt(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return B.forEach(e.mutations,(s=>{const r=new Bt(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=i}))}rr(t){}containsKey(t,e){const i=new Bt(e,0),s=this.Yr.firstAfterOrEqual(i);return B.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class qA{constructor(t){this.ni=t,this.docs=(function(){return new Tt(q.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return B.resolve(i?i.document.mutableCopy():te.newInvalidDocument(e))}getEntries(t,e){let i=En();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():te.newInvalidDocument(s))})),B.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=En();const o=e.path,a=new q(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||wI(bI(d),i)<=0||(s.has(d.key)||sc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(t,e,i,s){K(9500)}ri(t,e){return B.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new WA(this)}getSize(t){return B.resolve(this.size)}}class WA extends FA{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(i)})),B.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class GA{constructor(t){this.persistence=t,this.ii=new Li((e=>Du(e)),Ou),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.si=0,this.oi=new Bu,this.targetCount=0,this._i=fs.ar()}forEachTarget(t,e){return this.ii.forEach(((i,s)=>e(s))),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.si&&(this.si=e),B.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new fs(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.hr(e),B.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),B.waitFor(r).next((()=>s))}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const i=this.ii.get(e)||null;return B.resolve(i)}addMatchingKeys(t,e,i){return this.oi.Kr(e,i),B.resolve()}removeMatchingKeys(t,e,i){this.oi.Gr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),B.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const i=this.oi.Jr(e);return B.resolve(i)}containsKey(t,e){return B.resolve(this.oi.containsKey(e))}}/**
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
 */class qy{constructor(t,e){this.ai={},this.overlays={},this.ui=new Za(0),this.ci=!1,this.ci=!0,this.li=new jA,this.referenceDelegate=t(this),this.hi=new GA(this),this.indexManager=new RA,this.remoteDocumentCache=(function(s){return new qA(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new kA(e),this.Ti=new UA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new zA,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ai[t.toKey()];return i||(i=new HA(e,this.referenceDelegate),this.ai[t.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,i){j("MemoryPersistence","Starting transaction:",t);const s=new KA(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return B.or(Object.values(this.ai).map((i=>()=>i.containsKey(t,e))))}}class KA extends TI{constructor(t){super(),this.currentSequenceNumber=t}}class $u{constructor(t){this.persistence=t,this.Ai=new Bu,this.Ri=null}static Vi(t){return new $u(t)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(t,e,i){return this.Ai.addReference(i,e),this.mi.delete(i.toString()),B.resolve()}removeReference(t,e,i){return this.Ai.removeReference(i,e),this.mi.add(i.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),B.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,(i=>{const s=q.fromPath(i);return this.fi(t,s).next((r=>{r||e.removeEntry(s,Y.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((i=>{i?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return B.or([()=>B.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Da{constructor(t,e){this.persistence=t,this.gi=new Li((i=>xI(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=VA(this,e)}static Vi(t,e){return new Da(t,e)}Ii(){}di(t){return B.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}yr(t){let e=0;return this.gr(t,(i=>{e++})).next((()=>e))}gr(t,e){return B.forEach(this.gi,((i,s)=>this.Sr(t,i,s).next((r=>r?B.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(t,(o=>this.Sr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,Y.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}removeReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Jo(t.data.value)),e}Sr(t,e,i){return B.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return B.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Uu{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Is=i,this.ds=s}static Es(t,e){let i=it(),s=it();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Uu(t,e.fromCache,i,s)}}/**
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
 */class YA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class XA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return bw()?8:II(ie())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ps(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ys(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new YA;return this.ws(t,e,o).next((a=>{if(r.result=a,this.Rs)return this.Ss(t,e,o,a.size)}))})).next((()=>r.result))}Ss(t,e,i,s){return i.documentReadCount<this.Vs?(Yi()<=nt.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Xi(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Yi()<=nt.DEBUG&&j("QueryEngine","Query:",Xi(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(Yi()<=nt.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Xi(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qe(e))):B.resolve())}ps(t,e){if(Uf(e))return B.resolve(null);let i=qe(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ll(e,null,"F"),i=qe(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=it(...r);return this.gs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((c=>{const l=this.bs(e,a);return this.Ds(e,l,o,c.readTime)?this.ps(t,Ll(e,null,"F")):this.vs(t,l,e,c)}))))})))))}ys(t,e,i,s){return Uf(e)||s.isEqual(Y.min())?B.resolve(null):this.gs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ds(e,o,i,s)?B.resolve(null):(Yi()<=nt.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xi(e)),this.vs(t,o,e,_I(s,wr)).next((a=>a)))}))}bs(t,e){let i=new Ft(Ty(t));return e.forEach(((s,r)=>{sc(t,r)&&(i=i.add(r))})),i}Ds(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(t,e,i){return Yi()<=nt.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Xi(e)),this.gs.getDocumentsMatchingQuery(t,e,Gn.min(),i)}vs(t,e,i,s){return this.gs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const zu="LocalStore",QA=3e8;class JA{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new Tt(Z),this.Ms=new Li((r=>Du(r)),Ou),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(i)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $A(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function ZA(n,t,e,i){return new JA(n,t,e,i)}async function Wy(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Ns(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let c=it();for(const l of s){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(i,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function tx(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.Os.newChangeBuffer({trackRemovals:!0});return(function(a,c,l,d){const h=l.batch,f=h.keys();let g=B.resolve();return f.forEach((y=>{g=g.next((()=>d.getEntry(c,y))).next((_=>{const v=l.docVersions.get(y);lt(v!==null,48541),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),d.addEntry(_)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,h)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let c=it();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function Gy(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function ex(n,t){const e=Q(n),i=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const a=[];t.targetChanges.forEach(((d,h)=>{const f=s.get(h);if(!f)return;a.push(e.hi.removeMatchingKeys(r,d.removedDocuments,h).next((()=>e.hi.addMatchingKeys(r,d.addedDocuments,h))));let g=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(qt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,i)),s=s.insert(h,g),(function(_,v,T){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=QA?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0})(f,g,d)&&a.push(e.hi.updateTargetData(r,g))}));let c=En(),l=it();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))})),a.push(nx(r,o,t.documentUpdates).next((d=>{c=d.Ls,l=d.ks}))),!i.isEqual(Y.min())){const d=e.hi.getLastRemoteSnapshotVersion(r).next((h=>e.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(d)}return B.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,c,l))).next((()=>c))})).then((r=>(e.Fs=s,r)))}function nx(n,t,e){let i=it(),s=it();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=En();return e.forEach(((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):j(zu,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function ix(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=Cu),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function sx(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.hi.getTargetData(i,t).next((r=>r?(s=r,B.resolve(s)):e.hi.allocateTargetId(i).next((o=>(s=new On(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(i.targetId,i),e.Ms.set(t,i.targetId)),i}))}async function Ul(n,t,e){const i=Q(n),s=i.Fs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ts(o))throw o;j(zu,`Failed to update sequence numbers for target ${t}: ${o}`)}i.Fs=i.Fs.remove(t),i.Ms.delete(s.target)}function tp(n,t,e){const i=Q(n);let s=Y.min(),r=it();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,d){const h=Q(c),f=h.Ms.get(d);return f!==void 0?B.resolve(h.Fs.get(f)):h.hi.getTargetData(l,d)})(i,o,qe(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{r=c}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:Y.min(),e?r:it()))).next((a=>(rx(i,qI(t),a),{documents:a,qs:r})))))}function rx(n,t,e){let i=n.xs.get(t)||Y.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(t,i)}class ep{constructor(){this.activeTargetIds=QI()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ox{constructor(){this.Fo=new ep,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,i){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ep,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ax{xo(t){}shutdown(){}}/**
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
 */const np="ConnectivityMonitor";class ip{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){j(np,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){j(np,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Co=null;function zl(){return Co===null?Co=(function(){return 268435456+Math.round(2147483648*Math.random())})():Co++,"0x"+Co.toString(16)}/**
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
 */const tl="RestConnection",cx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lx{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===Sa?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=zl(),a=this.Go(t,e.toUriEncodedString());j(tl,`Sending RPC '${t}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,r);const{host:l}=new URL(a),d=_s(l);return this.jo(t,a,c,i,d).then((h=>(j(tl,`Received RPC '${t}' ${o}: `,h),h)),(h=>{throw Wn(tl,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",i),h}))}Jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}zo(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ws})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Go(t,e){const i=cx[t];return`${this.$o}/v1/${e}:${i}`}terminate(){}}/**
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
 */class ux{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const Yt="WebChannelConnection";class dx extends lx{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,i,s,r){const o=zl();return new Promise(((a,c)=>{const l=new Ym;l.setWithCredentials(!0),l.listenOnce(Xm.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Qo.NO_ERROR:const h=l.getResponseJson();j(Yt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(h)),a(h);break;case Qo.TIMEOUT:j(Yt,`RPC '${t}' ${o} timed out`),c(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const f=l.getStatus();if(j(Yt,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const _=(function(T){const k=T.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN})(y.status);c(new z(_,y.message))}else c(new z(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new z(V.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:t,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{j(Yt,`RPC '${t}' ${o} completed.`)}}));const d=JSON.stringify(s);j(Yt,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",d,i,15)}))}P_(t,e,i){const s=zl(),r=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Zm(),a=Jm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const d=r.join("");j(Yt,`Creating RPC '${t}' stream ${s}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let f=!1,g=!1;const y=new ux({Ho:v=>{g?j(Yt,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(j(Yt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),j(Yt,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},Yo:()=>h.close()}),_=(v,T,k)=>{v.listen(T,(M=>{try{k(M)}catch(D){setTimeout((()=>{throw D}),0)}}))};return _(h,Gs.EventType.OPEN,(()=>{g||(j(Yt,`RPC '${t}' stream ${s} transport opened.`),y.s_())})),_(h,Gs.EventType.CLOSE,(()=>{g||(g=!0,j(Yt,`RPC '${t}' stream ${s} transport closed`),y.__(),this.I_(h))})),_(h,Gs.EventType.ERROR,(v=>{g||(g=!0,Wn(Yt,`RPC '${t}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),y.__(new z(V.UNAVAILABLE,"The operation could not be completed")))})),_(h,Gs.EventType.MESSAGE,(v=>{var T;if(!g){const k=v.data[0];lt(!!k,16349);const M=k,D=(M==null?void 0:M.error)||((T=M[0])===null||T===void 0?void 0:T.error);if(D){j(Yt,`RPC '${t}' stream ${s} received error:`,D);const O=D.status;let L=(function(E){const x=Dt[E];if(x!==void 0)return Oy(x)})(O),I=D.message;L===void 0&&(L=V.INTERNAL,I="Unknown error status: "+O+" with message "+D.message),g=!0,y.__(new z(L,I)),h.close()}else j(Yt,`RPC '${t}' stream ${s} received:`,k),y.a_(k)}})),_(a,Qm.STAT_EVENT,(v=>{v.stat===kl.PROXY?j(Yt,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===kl.NOPROXY&&j(Yt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{y.o_()}),0),y}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function el(){return typeof document<"u"?document:null}/**
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
 */function lc(n){return new gA(n,!0)}/**
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
 */class Ky{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Fi=t,this.timerId=e,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-i);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const sp="PersistentStream";class Yy{constructor(t,e,i,s,r,o,a,c){this.Fi=t,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ky(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(wn(e.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===e&&this.W_(i,s)}),(i=>{t((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(t,e){const i=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return j(sp,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(j(sp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hx extends Yy{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=vA(this.serializer,t),i=(function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?We(o.readTime):Y.min()})(t);return this.listener.J_(e,i)}H_(t){const e={};e.database=$l(this.serializer),e.addTarget=(function(r,o){let a;const c=o.target;if(a=Ol(c)?{documents:wA(r,c)}:{query:EA(r,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vy(r,o.resumeToken);const l=Vl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Ma(r,o.snapshotVersion.toTimestamp());const l=Vl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,t);const i=IA(this.serializer,t);i&&(e.labels=i),this.k_(e)}Y_(t){const e={};e.database=$l(this.serializer),e.removeTarget=t,this.k_(e)}}class fx extends Yy{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return lt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,lt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){lt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=bA(t.writeResults,t.commitTime),i=We(t.commitTime);return this.listener.ta(i,e)}na(){const t={};t.database=$l(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>_A(this.serializer,i)))};this.k_(e)}}/**
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
 */class px{}class gx extends px{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,Fl(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(V.UNKNOWN,r.toString())}))}Jo(t,e,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(t,Fl(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class mx{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wn(e),this._a=!1):j("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Di="RemoteStore";class yx{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((o=>{i.enqueueAndForget((async()=>{Vi(this)&&(j(Di,"Restarting streams for network reachability change."),await(async function(c){const l=Q(c);l.Ia.add(4),await Wr(l),l.Aa.set("Unknown"),l.Ia.delete(4),await uc(l)})(this))}))})),this.Aa=new mx(i,s)}}async function uc(n){if(Vi(n))for(const t of n.da)await t(!0)}async function Wr(n){for(const t of n.da)await t(!1)}function Xy(n,t){const e=Q(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Wu(e)?qu(e):As(e).x_()&&Hu(e,t))}function ju(n,t){const e=Q(n),i=As(e);e.Ta.delete(t),i.x_()&&Qy(e,t),e.Ta.size===0&&(i.x_()?i.B_():Vi(e)&&e.Aa.set("Unknown"))}function Hu(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}As(n).H_(t)}function Qy(n,t){n.Ra.$e(t),As(n).Y_(t)}function qu(n){n.Ra=new dA({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),As(n).start(),n.Aa.aa()}function Wu(n){return Vi(n)&&!As(n).M_()&&n.Ta.size>0}function Vi(n){return Q(n).Ia.size===0}function Jy(n){n.Ra=void 0}async function vx(n){n.Aa.set("Online")}async function _x(n){n.Ta.forEach(((t,e)=>{Hu(n,t)}))}async function bx(n,t){Jy(n),Wu(n)?(n.Aa.la(t),qu(n)):n.Aa.set("Unknown")}async function wx(n,t,e){if(n.Aa.set("Online"),t instanceof Ly&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,t)}catch(i){j(Di,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Oa(n,i)}else if(t instanceof ea?n.Ra.Ye(t):t instanceof Ny?n.Ra.it(t):n.Ra.et(t),!e.isEqual(Y.min()))try{const i=await Gy(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.Ra.Pt(o);return a.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ta.get(l);d&&r.Ta.set(l,d.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,l)=>{const d=r.Ta.get(c);if(!d)return;r.Ta.set(c,d.withResumeToken(qt.EMPTY_BYTE_STRING,d.snapshotVersion)),Qy(r,c);const h=new On(d.target,c,l,d.sequenceNumber);Hu(r,h)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){j(Di,"Failed to raise snapshot:",i),await Oa(n,i)}}async function Oa(n,t,e){if(!Ts(t))throw t;n.Ia.add(1),await Wr(n),n.Aa.set("Offline"),e||(e=()=>Gy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{j(Di,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await uc(n)}))}function Zy(n,t){return t().catch((e=>Oa(n,e,t)))}async function dc(n){const t=Q(n),e=Qn(t);let i=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Cu;for(;Ex(t);)try{const s=await ix(t.localStore,i);if(s===null){t.Pa.length===0&&e.B_();break}i=s.batchId,Tx(t,s)}catch(s){await Oa(t,s)}tv(t)&&ev(t)}function Ex(n){return Vi(n)&&n.Pa.length<10}function Tx(n,t){n.Pa.push(t);const e=Qn(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function tv(n){return Vi(n)&&!Qn(n).M_()&&n.Pa.length>0}function ev(n){Qn(n).start()}async function Ix(n){Qn(n).na()}async function Ax(n){const t=Qn(n);for(const e of n.Pa)t.X_(e.mutations)}async function xx(n,t,e){const i=n.Pa.shift(),s=Lu.from(i,t,e);await Zy(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await dc(n)}async function Sx(n,t){t&&Qn(n).Z_&&await(async function(i,s){if((function(o){return lA(o)&&o!==V.ABORTED})(s.code)){const r=i.Pa.shift();Qn(i).N_(),await Zy(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await dc(i)}})(n,t),tv(n)&&ev(n)}async function rp(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),j(Di,"RemoteStore received new credentials");const i=Vi(e);e.Ia.add(3),await Wr(e),i&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await uc(e)}async function Px(n,t){const e=Q(n);t?(e.Ia.delete(2),await uc(e)):t||(e.Ia.add(2),await Wr(e),e.Aa.set("Unknown"))}function As(n){return n.Va||(n.Va=(function(e,i,s){const r=Q(e);return r.ia(),new hx(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:vx.bind(null,n),e_:_x.bind(null,n),n_:bx.bind(null,n),J_:wx.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Wu(n)?qu(n):n.Aa.set("Unknown")):(await n.Va.stop(),Jy(n))}))),n.Va}function Qn(n){return n.ma||(n.ma=(function(e,i,s){const r=Q(e);return r.ia(),new fx(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Ix.bind(null,n),n_:Sx.bind(null,n),ea:Ax.bind(null,n),ta:xx.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await dc(n)):(await n.ma.stop(),n.Pa.length>0&&(j(Di,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Gu{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new Gu(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ku(n,t){if(wn("AsyncQueue",`${t}: ${n}`),Ts(n))return new z(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class rs{static emptySet(t){return new rs(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||q.comparator(e.key,i.key):(e,i)=>q.comparator(e.key,i.key),this.keyedMap=Ks(),this.sortedSet=new Tt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof rs)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new rs;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
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
 */class op{constructor(){this.fa=new Tt(q.comparator)}track(t){const e=t.doc.key,i=this.fa.get(e);i?t.type!==0&&i.type===3?this.fa=this.fa.insert(e,t):t.type===3&&i.type!==1?this.fa=this.fa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.fa=this.fa.remove(e):t.type===1&&i.type===2?this.fa=this.fa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):K(63341,{At:t,ga:i}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,i)=>{t.push(i)})),t}}class ps{constructor(t,e,i,s,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new ps(t,e,rs.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ic(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class kx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Cx{constructor(){this.queries=ap(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,i){const s=Q(e),r=s.queries;s.queries=ap(),r.forEach(((o,a)=>{for(const c of a.wa)c.onError(i)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function ap(){return new Li((n=>Ey(n)),ic)}async function Yu(n,t){const e=Q(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.ba()&&(i=2):(r=new kx,i=t.ba()?0:1);try{switch(i){case 0:r.ya=await e.onListen(s,!0);break;case 1:r.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Ku(o,`Initialization of query '${Xi(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.wa.push(t),t.va(e.onlineState),r.ya&&t.Ca(r.ya)&&Qu(e)}async function Xu(n,t){const e=Q(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.wa.indexOf(t);o>=0&&(r.wa.splice(o,1),r.wa.length===0?s=t.ba()?0:1:!r.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Rx(n,t){const e=Q(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.wa)a.Ca(s)&&(i=!0);o.ya=s}}i&&Qu(e)}function Mx(n,t,e){const i=Q(n),s=i.queries.get(t);if(s)for(const r of s.wa)r.onError(e);i.queries.delete(t)}function Qu(n){n.Da.forEach((t=>{t.next()}))}var jl,cp;(cp=jl||(jl={})).Fa="default",cp.Cache="cache";class Ju{constructor(t,e,i){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new ps(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const i=e!=="Offline";return(!this.options.ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=ps.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==jl.Cache}}/**
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
 */class nv{constructor(t){this.key=t}}class iv{constructor(t){this.key=t}}class Dx{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=it(),this.mutatedKeys=it(),this.Xa=Ty(t),this.eu=new rs(this.Xa)}get tu(){return this.Ha}nu(t,e){const i=e?e.ru:new op,s=e?e.eu:this.eu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,h)=>{const f=s.get(d),g=sc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?y!==_&&(i.track({type:3,doc:g}),v=!0):this.iu(f,g)||(i.track({type:2,doc:g}),v=!0,(c&&this.Xa(g,c)>0||l&&this.Xa(g,l)<0)&&(a=!0)):!f&&g?(i.track({type:0,doc:g}),v=!0):f&&!g&&(i.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),r=_?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{eu:o,ru:i,Ds:a,mutatedKeys:r}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const o=t.ru.pa();o.sort(((d,h)=>(function(g,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:v})}};return _(g)-_(y)})(d.type,h.type)||this.Xa(d.doc,h.doc))),this.su(i),s=s!=null&&s;const a=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new ps(this.query,t.eu,r,o,t.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new op,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=it(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const e=[];return t.forEach((i=>{this.Za.has(i)||e.push(new iv(i))})),this.Za.forEach((i=>{t.has(i)||e.push(new nv(i))})),e}uu(t){this.Ha=t.qs,this.Za=it();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return ps.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Zu="SyncEngine";class Ox{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Nx{constructor(t){this.key=t,this.lu=!1}}class Lx{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Li((a=>Ey(a)),ic),this.Tu=new Map,this.Iu=new Set,this.du=new Tt(q.comparator),this.Eu=new Map,this.Au=new Bu,this.Ru={},this.Vu=new Map,this.mu=fs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Vx(n,t,e=!0){const i=lv(n);let s;const r=i.Pu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await sv(i,t,e,!0),s}async function Fx(n,t){const e=lv(n);await sv(e,t,!0,!1)}async function sv(n,t,e,i){const s=await sx(n.localStore,qe(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await Bx(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Xy(n.remoteStore,s),a}async function Bx(n,t,e,i,s){n.gu=(h,f,g)=>(async function(_,v,T,k){let M=v.view.nu(T);M.Ds&&(M=await tp(_.localStore,v.query,!1).then((({documents:I})=>v.view.nu(I,M))));const D=k&&k.targetChanges.get(v.targetId),O=k&&k.targetMismatches.get(v.targetId)!=null,L=v.view.applyChanges(M,_.isPrimaryClient,D,O);return up(_,v.targetId,L._u),L.snapshot})(n,h,f,g);const r=await tp(n.localStore,t,!0),o=new Dx(t,r.qs),a=o.nu(r.documents),c=qr.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);up(n,e,l._u);const d=new Ox(t,e,o);return n.Pu.set(t,d),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),l.snapshot}async function $x(n,t,e){const i=Q(n),s=i.Pu.get(t),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((o=>!ic(o,t)))),void i.Pu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Ul(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&ju(i.remoteStore,s.targetId),Hl(i,s.targetId)})).catch(Es)):(Hl(i,s.targetId),await Ul(i.localStore,s.targetId,!0))}async function Ux(n,t){const e=Q(n),i=e.Pu.get(t),s=e.Tu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),ju(e.remoteStore,i.targetId))}async function zx(n,t,e){const i=Yx(n);try{const s=await(function(o,a){const c=Q(o),l=vt.now(),d=a.reduce(((g,y)=>g.add(y.key)),it());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let y=En(),_=it();return c.Os.getEntries(g,d).next((v=>{y=v,y.forEach(((T,k)=>{k.isValidDocument()||(_=_.add(T))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,y))).next((v=>{h=v;const T=[];for(const k of a){const M=sA(k,h.get(k.key).overlayedDocument);M!=null&&T.push(new si(k.key,M,py(M.value.mapValue),le.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,T,a)})).next((v=>{f=v;const T=v.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(g,v.batchId,T)}))})).then((()=>({batchId:f.batchId,changes:Ay(h)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new Tt(Z)),l=l.insert(a,c),o.Ru[o.currentUser.toKey()]=l})(i,s.batchId,e),await Gr(i,s.changes),await dc(i.remoteStore)}catch(s){const r=Ku(s,"Failed to persist write");e.reject(r)}}async function rv(n,t){const e=Q(n);try{const i=await ex(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Eu.get(r);o&&(lt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?lt(o.lu,14607):s.removedDocuments.size>0&&(lt(o.lu,42227),o.lu=!1))})),await Gr(e,i,t)}catch(i){await Es(i)}}function lp(n,t,e){const i=Q(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Pu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const c=Q(o);c.onlineState=a;let l=!1;c.queries.forEach(((d,h)=>{for(const f of h.wa)f.va(a)&&(l=!0)})),l&&Qu(c)})(i.eventManager,t),s.length&&i.hu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function jx(n,t,e){const i=Q(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),r=s&&s.key;if(r){let o=new Tt(q.comparator);o=o.insert(r,te.newNoDocument(r,Y.min()));const a=it().add(r),c=new cc(Y.min(),new Map,new Tt(Z),o,a);await rv(i,c),i.du=i.du.remove(r),i.Eu.delete(t),td(i)}else await Ul(i.localStore,t,!1).then((()=>Hl(i,t,e))).catch(Es)}async function Hx(n,t){const e=Q(n),i=t.batch.batchId;try{const s=await tx(e.localStore,t);av(e,i,null),ov(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Gr(e,s)}catch(s){await Es(s)}}async function qx(n,t,e){const i=Q(n);try{const s=await(function(o,a){const c=Q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next((h=>(lt(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>c.localDocuments.getDocuments(l,d)))}))})(i.localStore,t);av(i,t,e),ov(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Gr(i,s)}catch(s){await Es(s)}}function ov(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function av(n,t,e){const i=Q(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Ru[i.currentUser.toKey()]=s}}function Hl(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Tu.get(t))n.Pu.delete(i),e&&n.hu.pu(i,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((i=>{n.Au.containsKey(i)||cv(n,i)}))}function cv(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ju(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),td(n))}function up(n,t,e){for(const i of e)i instanceof nv?(n.Au.addReference(i.key,t),Wx(n,i)):i instanceof iv?(j(Zu,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,t),n.Au.containsKey(i.key)||cv(n,i.key)):K(19791,{yu:i})}function Wx(n,t){const e=t.key,i=e.path.canonicalString();n.du.get(e)||n.Iu.has(i)||(j(Zu,"New document in limbo: "+e),n.Iu.add(i),td(n))}function td(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new q(gt.fromString(t)),i=n.mu.next();n.Eu.set(i,new Nx(e)),n.du=n.du.insert(e,i),Xy(n.remoteStore,new On(qe(nc(e.path)),i,"TargetPurposeLimboResolution",Za.ue))}}async function Gr(n,t,e){const i=Q(n),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach(((a,c)=>{o.push(i.gu(c,t,e).then((l=>{var d;if((l||e)&&i.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){s.push(l);const h=Uu.Es(c.targetId,l);r.push(h)}})))})),await Promise.all(o),i.hu.J_(s),await(async function(c,l){const d=Q(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>B.forEach(l,(f=>B.forEach(f.Is,(g=>d.persistence.referenceDelegate.addReference(h,f.targetId,g))).next((()=>B.forEach(f.ds,(g=>d.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))))))}catch(h){if(!Ts(h))throw h;j(zu,"Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=d.Fs.get(f),y=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(y);d.Fs=d.Fs.insert(f,_)}}})(i.localStore,r))}async function Gx(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){j(Zu,"User change. New user:",t.toKey());const i=await Wy(e.localStore,t);e.currentUser=t,(function(r,o){r.Vu.forEach((a=>{a.forEach((c=>{c.reject(new z(V.CANCELLED,o))}))})),r.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Gr(e,i.Bs)}}function Kx(n,t){const e=Q(n),i=e.Eu.get(t);if(i&&i.lu)return it().add(i.key);{let s=it();const r=e.Tu.get(t);if(!r)return s;for(const o of r){const a=e.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function lv(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=rv.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kx.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jx.bind(null,t),t.hu.J_=Rx.bind(null,t.eventManager),t.hu.pu=Mx.bind(null,t.eventManager),t}function Yx(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Hx.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qx.bind(null,t),t}class Na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=lc(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return ZA(this.persistence,new XA,t.initialUser,this.serializer)}Du(t){return new qy($u.Vi,this.serializer)}bu(t){return new ox}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Na.provider={build:()=>new Na};class Xx extends Na{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){lt(this.persistence.referenceDelegate instanceof Da,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new NA(i,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?he.withCacheSize(this.cacheSizeBytes):he.DEFAULT;return new qy((i=>Da.Vi(i,e)),this.serializer)}}class ql{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>lp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gx.bind(null,this.syncEngine),await Px(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Cx})()}createDatastore(t){const e=lc(t.databaseInfo.databaseId),i=(function(r){return new dx(r)})(t.databaseInfo);return(function(r,o,a,c){return new gx(r,o,a,c)})(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new yx(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>lp(this.syncEngine,e,0)),(function(){return ip.C()?new ip:new ax})())}createSyncEngine(t,e){return(function(s,r,o,a,c,l,d){const h=new Lx(s,r,o,a,c,l);return d&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=Q(s);j(Di,"RemoteStore shutting down."),r.Ia.add(5),await Wr(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ql.provider={build:()=>new ql};/**
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
 */class ed{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):wn("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const Jn="FirestoreClient";class Qx{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=Jt.UNAUTHENTICATED,this.clientId=ku.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{j(Jn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(j(Jn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ku(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function nl(n,t){n.asyncQueue.verifyOperationInProgress(),j(Jn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Wy(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>{Wn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{j("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Wn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function dp(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Jx(n);j(Jn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>rp(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>rp(t.remoteStore,s))),n._onlineComponents=t}async function Jx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Jn,"Using user provided OfflineComponentProvider");try{await nl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Wn("Error using user provided cache. Falling back to memory cache: "+e),await nl(n,new Na)}}else j(Jn,"Using default OfflineComponentProvider"),await nl(n,new Xx(void 0));return n._offlineComponents}async function uv(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Jn,"Using user provided OnlineComponentProvider"),await dp(n,n._uninitializedComponentsProvider._online)):(j(Jn,"Using default OnlineComponentProvider"),await dp(n,new ql))),n._onlineComponents}function Zx(n){return uv(n).then((t=>t.syncEngine))}async function La(n){const t=await uv(n),e=t.eventManager;return e.onListen=Vx.bind(null,t.syncEngine),e.onUnlisten=$x.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Fx.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ux.bind(null,t.syncEngine),e}function tS(n,t,e={}){const i=new yn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new ed({next:f=>{d.Ou(),o.enqueueAndForget((()=>Xu(r,h)));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Ju(nc(a.path),d,{includeMetadataChanges:!0,ka:!0});return Yu(r,h)})(await La(n),n.asyncQueue,t,e,i))),i.promise}function eS(n,t,e={}){const i=new yn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new ed({next:f=>{d.Ou(),o.enqueueAndForget((()=>Xu(r,h))),f.fromCache&&c.source==="server"?l.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Ju(a,d,{includeMetadataChanges:!0,ka:!0});return Yu(r,h)})(await La(n),n.asyncQueue,t,e,i))),i.promise}/**
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
 */function dv(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const hp=new Map;/**
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
 */const hv="firestore.googleapis.com",fp=!0;class pp{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hv,this.ssl=fp}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:fp;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Hy;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<DA)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dv((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hc{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pp(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new lI;switch(i.type){case"firstParty":return new fI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=hp.get(e);i&&(j("ComponentProvider","Removing Datastore"),hp.delete(e),i.terminate())})(this),Promise.resolve()}}function nS(n,t,e,i={}){var s;n=ce(n,hc);const r=_s(t),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;r&&(sm(`https://${c}`),rm("Firestore",!0)),o.host!==hv&&o.host!==c&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!Si(l,a)&&(n._setSettings(l),i.mockUserToken)){let d,h;if(typeof i.mockUserToken=="string")d=i.mockUserToken,h=Jt.MOCK_USER;else{d=dw(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Jt(f)}n._authCredentials=new uI(new ey(d,h))}}/**
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
 */class ri{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ri(this.firestore,t,this._query)}}class Pt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pt(this.firestore,t,this._key)}toJSON(){return{type:Pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(jr(e,Pt._jsonSchema))return new Pt(t,i||null,new q(gt.fromString(e.referencePath)))}}Pt._jsonSchemaVersion="firestore/documentReference/1.0",Pt._jsonSchema={type:Lt("string",Pt._jsonSchemaVersion),referencePath:Lt("string")};class Hn extends ri{constructor(t,e,i){super(t,e,nc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pt(this.firestore,null,new q(t))}withConverter(t){return new Hn(this.firestore,t,this._path)}}function Ge(n,t,...e){if(n=mt(n),iy("collection","path",t),n instanceof hc){const i=gt.fromString(t,...e);return Sf(i),new Hn(n,null,i)}{if(!(n instanceof Pt||n instanceof Hn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(gt.fromString(t,...e));return Sf(i),new Hn(n.firestore,null,i)}}function ue(n,t,...e){if(n=mt(n),arguments.length===1&&(t=ku.newId()),iy("doc","path",t),n instanceof hc){const i=gt.fromString(t,...e);return xf(i),new Pt(n,null,new q(i))}{if(!(n instanceof Pt||n instanceof Hn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(gt.fromString(t,...e));return xf(i),new Pt(n.firestore,n instanceof Hn?n.converter:null,new q(i))}}/**
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
 */const gp="AsyncQueue";class mp{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ky(this,"async_queue_retry"),this.oc=()=>{const i=el();i&&j(gp,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=t;const e=el();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=el();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new yn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Ts(t))throw t;j(gp,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((i=>{throw this.tc=i,this.nc=!1,wn("INTERNAL UNHANDLED ERROR: ",yp(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=e,e}enqueueAfterDelay(t,e,i){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Gu.createAndSchedule(this,t,e,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&K(47125,{hc:yp(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function yp(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function vp(n){return(function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class Je extends hc{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new mp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new mp(t),this._firestoreClient=void 0,await t}}}function fv(n,t){const e=typeof n=="object"?n:yu(),i=typeof n=="string"?n:Sa,s=mu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=lw("firestore");r&&nS(s,...r)}return s}function Kr(n){if(n._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iS(n),n._firestoreClient}function iS(n){var t,e,i;const s=n._freezeSettings(),r=(function(a,c,l,d){return new kI(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,dv(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Qx(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class Ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ee(qt.fromBase64String(t))}catch(e){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ee(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ee._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(jr(t,Ee._jsonSchema))return Ee.fromBase64String(t.bytes)}}Ee._jsonSchemaVersion="firestore/bytes/1.0",Ee._jsonSchema={type:Lt("string",Ee._jsonSchemaVersion),bytes:Lt("string")};/**
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
 */class Yr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class nd{constructor(t){this._methodName=t}}/**
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
 */class Ke{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ke._jsonSchemaVersion}}static fromJSON(t){if(jr(t,Ke._jsonSchema))return new Ke(t.latitude,t.longitude)}}Ke._jsonSchemaVersion="firestore/geoPoint/1.0",Ke._jsonSchema={type:Lt("string",Ke._jsonSchemaVersion),latitude:Lt("number"),longitude:Lt("number")};/**
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
 */class Ye{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(jr(t,Ye._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ye(t.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:Lt("string",Ye._jsonSchemaVersion),vectorValues:Lt("object")};/**
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
 */const sS=/^__.*__$/;class rS{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new si(t,this.data,this.fieldMask,e,this.fieldTransforms):new Hr(t,this.data,e,this.fieldTransforms)}}class pv{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new si(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function gv(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}class id{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new id(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.fc(t),s}gc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Va(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(gv(this.Ec)&&sS.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class oS{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||lc(t)}Dc(t,e,i,s=!1){return new id({Ec:t,methodName:e,bc:i,path:Ht.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xr(n){const t=n._freezeSettings(),e=lc(n._databaseId);return new oS(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sd(n,t,e,i,s,r={}){const o=n.Dc(r.merge||r.mergeFields?2:0,t,e,s);rd("Data must be an object, but it was:",o,i);const a=vv(i,o);let c,l;if(r.merge)c=new ve(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=Wl(t,h,e);if(!o.contains(f))throw new z(V.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);bv(d,f)||d.push(f)}c=new ve(d),l=o.fieldTransforms.filter((h=>c.covers(h.field)))}else c=null,l=o.fieldTransforms;return new rS(new fe(a),c,l)}class fc extends nd{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fc}}function mv(n,t,e,i){const s=n.Dc(1,t,e);rd("Data must be an object, but it was:",s,i);const r=[],o=fe.empty();ii(i,((c,l)=>{const d=od(t,c,e);l=mt(l);const h=s.gc(d);if(l instanceof fc)r.push(d);else{const f=Qr(l,h);f!=null&&(r.push(d),o.set(d,f))}}));const a=new ve(r);return new pv(o,a,s.fieldTransforms)}function yv(n,t,e,i,s,r){const o=n.Dc(1,t,e),a=[Wl(t,i,e)],c=[s];if(r.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Wl(t,r[f])),c.push(r[f+1]);const l=[],d=fe.empty();for(let f=a.length-1;f>=0;--f)if(!bv(l,a[f])){const g=a[f];let y=c[f];y=mt(y);const _=o.gc(g);if(y instanceof fc)l.push(g);else{const v=Qr(y,_);v!=null&&(l.push(g),d.set(g,v))}}const h=new ve(l);return new pv(d,h,o.fieldTransforms)}function aS(n,t,e,i=!1){return Qr(e,n.Dc(i?4:3,t))}function Qr(n,t){if(_v(n=mt(n)))return rd("Unsupported field value:",t,n),vv(n,t);if(n instanceof nd)return(function(i,s){if(!gv(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let c=Qr(a,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=mt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return JI(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=vt.fromDate(i);return{timestampValue:Ma(s.serializer,r)}}if(i instanceof vt){const r=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ma(s.serializer,r)}}if(i instanceof Ke)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ee)return{bytesValue:Vy(s.serializer,i._byteString)};if(i instanceof Pt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Fu(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ye)return(function(o,a){return{mapValue:{fields:{[hy]:{stringValue:fy},[Pa]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.wc("VectorValues must only contain numeric values.");return Nu(a.serializer,l)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${Ja(i)}`)})(n,t)}function vv(n,t){const e={};return oy(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ii(n,((i,s)=>{const r=Qr(s,t.Vc(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function _v(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Ke||n instanceof Ee||n instanceof Pt||n instanceof nd||n instanceof Ye)}function rd(n,t,e){if(!_v(e)||!sy(e)){const i=Ja(e);throw i==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+i)}}function Wl(n,t,e){if((t=mt(t))instanceof Yr)return t._internalPath;if(typeof t=="string")return od(n,t);throw Va("Field path arguments must be of type string or ",n,!1,void 0,e)}const cS=new RegExp("[~\\*/\\[\\]]");function od(n,t,e){if(t.search(cS)>=0)throw Va(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Yr(...t.split("."))._internalPath}catch{throw Va(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Va(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new z(V.INVALID_ARGUMENT,a+n+c)}function bv(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class wv{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ad("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class lS extends wv{data(){return super.data()}}function ad(n,t){return typeof t=="string"?od(n,t):t instanceof Yr?t._internalPath:t._delegate._internalPath}/**
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
 */function Ev(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cd{}class Tv extends cd{}function pc(n,t,...e){let i=[];t instanceof cd&&i.push(t),i=i.concat(e),(function(r){const o=r.filter((c=>c instanceof ud)).length,a=r.filter((c=>c instanceof ld)).length;if(o>1||o>0&&a>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class ld extends Tv{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new ld(t,e,i)}_apply(t){const e=this._parse(t);return Iv(t._query,e),new ri(t.firestore,t.converter,Nl(t._query,e))}_parse(t){const e=Xr(t.firestore);return(function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){bp(h,d);const y=[];for(const _ of h)y.push(_p(c,r,_));f={arrayValue:{values:y}}}else f=_p(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||bp(h,d),f=aS(a,o,h,d==="in"||d==="not-in");return Ot.create(l,d,f)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ud extends cd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ud(t,e)}_parse(t){const e=this._queryConstraints.map((i=>i._parse(t))).filter((i=>i.getFilters().length>0));return e.length===1?e[0]:Ne.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,r){let o=s;const a=r.getFlattenedFilters();for(const c of a)Iv(o,c),o=Nl(o,c)})(t._query,e),new ri(t.firestore,t.converter,Nl(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dd extends Tv{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new dd(t,e)}_apply(t){const e=(function(s,r,o){if(s.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ar(r,o)})(t._query,this._field,this._direction);return new ri(t.firestore,t.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new Is(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function gc(n,t="asc"){const e=t,i=ad("orderBy",n);return dd._create(i,e)}function _p(n,t,e){if(typeof(e=mt(e))=="string"){if(e==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wy(t)&&e.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(gt.fromString(e));if(!q.isDocumentKey(i))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Nf(n,new q(i))}if(e instanceof Pt)return Nf(n,e._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ja(e)}.`)}function bp(n,t){if(!Array.isArray(n)||n.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Iv(n,t){const e=(function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class uS{convertValue(t,e="none"){switch(Xn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw K(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return ii(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var e,i,s;const r=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[Pa].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((o=>Ct(o.doubleValue)));return new Ye(r)}convertGeoPoint(t){return new Ke(Ct(t.latitude),Ct(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=ec(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Er(t));default:return null}}convertTimestamp(t){const e=Kn(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=gt.fromString(t);lt(jy(i),9688,{name:t});const s=new Tr(i.get(1),i.get(3)),r=new q(i.popFirst(5));return s.isEqual(e)||wn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */function hd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Xs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bi extends wv{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(ad("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=bi._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}bi._jsonSchemaVersion="firestore/documentSnapshot/1.0",bi._jsonSchema={type:Lt("string",bi._jsonSchemaVersion),bundleSource:Lt("string","DocumentSnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class na extends bi{data(t={}){return super.data(t)}}class wi{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new na(this._firestore,this._userDataWriter,i.key,i,new Xs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const c=new na(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const c=new na(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:dS(a.type),doc:c,oldIndex:l,newIndex:d}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=wi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ku.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function dS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
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
 */function Av(n){n=ce(n,Pt);const t=ce(n.firestore,Je);return tS(Kr(t),n._key).then((e=>Cv(t,n,e)))}wi._jsonSchemaVersion="firestore/querySnapshot/1.0",wi._jsonSchema={type:Lt("string",wi._jsonSchemaVersion),bundleSource:Lt("string","QuerySnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class fd extends uS{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ee(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Pt(this.firestore,null,e)}}function os(n){n=ce(n,ri);const t=ce(n.firestore,Je),e=Kr(t),i=new fd(t);return Ev(n._query),eS(e,n._query).then((s=>new wi(t,i,n,s)))}function xv(n,t,e){n=ce(n,Pt);const i=ce(n.firestore,Je),s=hd(n.converter,t,e);return Jr(i,[sd(Xr(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,le.none())])}function Fi(n,t,e,...i){n=ce(n,Pt);const s=ce(n.firestore,Je),r=Xr(s);let o;return o=typeof(t=mt(t))=="string"||t instanceof Yr?yv(r,"updateDoc",n._key,t,e,i):mv(r,"updateDoc",n._key,t),Jr(s,[o.toMutation(n._key,le.exists(!0))])}function Sv(n){return Jr(ce(n.firestore,Je),[new ac(n._key,le.none())])}function Pv(n,t){const e=ce(n.firestore,Je),i=ue(n),s=hd(n.converter,t);return Jr(e,[sd(Xr(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,le.exists(!1))]).then((()=>i))}function kv(n,...t){var e,i,s;n=mt(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||vp(t[o])||(r=t[o++]);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(vp(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,d;if(n instanceof Pt)l=ce(n.firestore,Je),d=nc(n._key.path),c={next:h=>{t[o]&&t[o](Cv(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=ce(n,ri);l=ce(h.firestore,Je),d=h._query;const f=new fd(l);c={next:g=>{t[o]&&t[o](new wi(l,f,h,g))},error:t[o+1],complete:t[o+2]},Ev(n._query)}return(function(f,g,y,_){const v=new ed(_),T=new Ju(g,v,y);return f.asyncQueue.enqueueAndForget((async()=>Yu(await La(f),T))),()=>{v.Ou(),f.asyncQueue.enqueueAndForget((async()=>Xu(await La(f),T)))}})(Kr(l),d,a,c)}function Jr(n,t){return(function(i,s){const r=new yn;return i.asyncQueue.enqueueAndForget((async()=>zx(await Zx(i),s,r))),r.promise})(Kr(n),t)}function Cv(n,t,e){const i=e.docs.get(t._key),s=new fd(n);return new bi(n,s,t._key,i,new Xs(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class hS{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Xr(t)}set(t,e,i){this._verifyNotCommitted();const s=il(t,this._firestore),r=hd(s.converter,e,i),o=sd(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,le.none())),this}update(t,e,i,...s){this._verifyNotCommitted();const r=il(t,this._firestore);let o;return o=typeof(e=mt(e))=="string"||e instanceof Yr?yv(this._dataReader,"WriteBatch.update",r._key,e,i,s):mv(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(o.toMutation(r._key,le.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=il(t,this._firestore);return this._mutations=this._mutations.concat(new ac(e._key,le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function il(n,t){if((n=mt(n)).firestore!==t)throw new z(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function fS(n){return Kr(n=ce(n,Je)),new hS(n,(t=>Jr(n,t)))}(function(t,e=!0){(function(s){ws=s})(bs),ls(new Pi("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Je(new dI(i.getProvider("auth-internal")),new pI(o,i.getProvider("app-check-internal")),(function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(l.options.projectId,d)})(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),zn(wf,Ef,t),zn(wf,Ef,"esm2017")})();const bt={},Gl={apiKey:(bt==null?void 0:bt.VITE_FIREBASE_API_KEY)||"AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",authDomain:(bt==null?void 0:bt.VITE_FIREBASE_AUTH_DOMAIN)||"money-control-e6af5.firebaseapp.com",databaseURL:(bt==null?void 0:bt.VITE_FIREBASE_DATABASE_URL)||"https://money-control-e6af5-default-rtdb.firebaseio.com",projectId:(bt==null?void 0:bt.VITE_FIREBASE_PROJECT_ID)||"money-control-e6af5",storageBucket:(bt==null?void 0:bt.VITE_FIREBASE_STORAGE_BUCKET)||"money-control-e6af5.firebasestorage.app",messagingSenderId:(bt==null?void 0:bt.VITE_FIREBASE_MESSAGING_SENDER_ID)||"490577558965",appId:(bt==null?void 0:bt.VITE_FIREBASE_APP_ID)||"1:490577558965:web:09275a065a09844f1eadfc",measurementId:(bt==null?void 0:bt.VITE_FIREBASE_MEASUREMENT_ID)||"G-JTLBM89W1W"};function Rv(){const t=["apiKey","authDomain","projectId","appId"].filter(e=>!Gl[e]||String(Gl[e]).includes("YOUR_"));return t.length>0?(console.error("⚠️ Firebase configuration is incomplete. Missing fields:",t.join(", ")),{isValid:!1,missing:t}):{isValid:!0,missing:[]}}const pd=P0().length===0?cm(Gl):yu(),Ze=rI(pd);try{HE(Ze,Bm).catch(n=>{console.warn("browserLocalPersistence warning:",n)})}catch(n){console.warn("setPersistence warning:",n)}const Bi=fv(pd);function pS(){return Bi||fv(pd)}function W(n){return n==null||isNaN(n)?"₹0":`₹${Number(n).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:0})}`}function Zr(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function gS(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):""}function mS(n){return n?new Date(n).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit",hour12:!0}):""}function yS(){const n=new Date().getHours();return n<12?"Good Morning":n<17?"Good Afternoon":"Good Evening"}function xs(){const n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${i}`}function Mv(){return`📅 Today — ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`}function vS(n){const t=xs(),e=new Date;e.setDate(e.getDate()-1);const i=e.toISOString().split("T")[0];return n===t?"Today":n===i?"Yesterday":Zr(n)}function _S(){return new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Dv(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function Ov(n){const t=new Date(n+"T00:00:00"),e=t.getDay(),i=new Date(t);i.setDate(t.getDate()-e);const s=new Date(i);return s.setDate(i.getDate()+6),{start:i.toISOString().split("T")[0],end:s.toISOString().split("T")[0]}}function Ro(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}const to=[{value:"Food",label:"🍔 Food",emoji:"🍔"},{value:"Travel",label:"🚌 Travel",emoji:"🚌"},{value:"Recharge",label:"📱 Recharge",emoji:"📱"},{value:"Shopping",label:"🛍️ Shopping",emoji:"🛍️"},{value:"Entertainment",label:"🎮 Entertainment",emoji:"🎮"},{value:"Education",label:"📚 Education",emoji:"📚"},{value:"Software",label:"💻 Software",emoji:"💻"},{value:"Personal",label:"🏠 Personal",emoji:"🏠"},{value:"Other",label:"💊 Other",emoji:"💊"}],gd=[{value:"Pocket Money",label:"Pocket Money"},{value:"Salary",label:"Salary"},{value:"Gift",label:"Gift"},{value:"Freelance",label:"Freelance"},{value:"Refund",label:"Refund"},{value:"Other",label:"Other"}];function Nv(n){const t=to.find(e=>e.value===n);return t?t.emoji:"💰"}const bS=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];function wS(n,t){const e=Number(n.initialBalance)||0,i=n.id;let s=e;return t.forEach(r=>{const o=Number(r.amount)||0;r.type==="INCOME"?r.destinationAccountId===i&&(s+=o):r.type==="EXPENSE"?r.sourceAccountId===i&&(s-=o):r.type==="TRANSFER"&&(r.destinationAccountId===i&&(s+=o),r.sourceAccountId===i&&(s-=o))}),s}function Zn(n,t){const e={};let i=0;return n.forEach(s=>{const r=wS(s,t);e[s.id]=r,i+=r}),{balances:e,totalMoney:i}}function Qs(n,t,e=[]){if(!n)return{account:null,balance:0,totalAdded:0,totalSpent:0,totalTransferredIn:0,totalTransferredOut:0,count:0,history:[]};const i=n.id,s=(t||[]).filter(g=>g.sourceAccountId===i||g.destinationAccountId===i),r=[...s].sort((g,y)=>{const _=(g.date||"").localeCompare(y.date||"");if(_!==0)return _;const v=g.time||g.createdAt||"",T=y.time||y.createdAt||"";return v&&T?v.localeCompare(T):0});let o=Number(n.initialBalance)||0,a=0,c=0,l=0,d=0;const f=[...r.map(g=>{const y=Number(g.amount)||0,_=o;let v=g.type,T="🟢",k="Money Added",M="Money Added",D="Current Balance",O="+",L="var(--income)",I="";if(g.type==="INCOME")g.destinationAccountId===i&&(o+=y,a+=y,v="INCOME",T="🟢",k="Income",M="Money Added",D="Current Balance",O="+",L="var(--income)");else if(g.type==="EXPENSE")g.sourceAccountId===i&&(o-=y,c+=y,v="EXPENSE",T="🔴",k="Expense",M="Expense",D="Remaining Balance",O="−",L="var(--expense)");else if(g.type==="TRANSFER"){if(g.destinationAccountId===i){o+=y,l+=y,a+=y,v="TRANSFER_IN",T="🟣",k="Transfer IN",M="Received",D="Balance After",O="+",L="var(--primary-light)";const x=e.find(S=>S.id===g.sourceAccountId);x&&(I=x.name)}else if(g.sourceAccountId===i){o-=y,d+=y,c+=y,v="TRANSFER_OUT",T="🟣",k="Transfer OUT",M="Transferred",D="Balance After",O="−",L="var(--primary-light)";const x=e.find(S=>S.id===g.destinationAccountId);x&&(I=x.name)}}let b=_,E=o;return g.type==="TRANSFER"?v==="TRANSFER_OUT"&&g.sourcePreviousBalance!==void 0?(b=Number(g.sourcePreviousBalance),E=Number(g.sourceBalanceAfter)):v==="TRANSFER_IN"&&g.destinationPreviousBalance!==void 0?(b=Number(g.destinationPreviousBalance),E=Number(g.destinationBalanceAfter)):g.previousBalance!==void 0&&g.balanceAfter!==void 0&&(b=Number(g.previousBalance),E=Number(g.balanceAfter)):g.previousBalance!==void 0&&g.balanceAfter!==void 0&&(b=Number(g.previousBalance),E=Number(g.balanceAfter)),{...g,displayType:v,indicator:T,typeLabel:k,actionLabel:M,resultLabel:D,amountSign:O,amountColor:L,transferAccountName:I,previousBalance:b,balanceAfter:E}})].reverse();return{account:n,balance:o,totalAdded:a,totalSpent:c,totalTransferredIn:l,totalTransferredOut:d,count:s.length,history:f,transactions:s}}function ES(n){return n.filter(t=>t.type==="INCOME").reduce((t,e)=>t+Number(e.amount),0)}function TS(n){return n.filter(t=>t.type==="EXPENSE").reduce((t,e)=>t+Number(e.amount),0)}function IS(n){return n.filter(t=>t.type==="TRANSFER").reduce((t,e)=>t+Number(e.amount),0)}function AS(n,t){const{balances:e,totalMoney:i}=Zn(n,t),s=ES(t),r=TS(t),o=IS(t);return{balances:e,totalMoney:i,totalIncome:s,totalExpenses:r,totalTransfers:o}}function Lv(n,t){const e=n.filter(o=>o.date===t),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function xS(n,t){const{start:e,end:i}=Ov(t),s=n.filter(c=>c.date>=e&&c.date<=i),r=s.filter(c=>c.type==="INCOME").reduce((c,l)=>c+l.amount,0),o=s.filter(c=>c.type==="EXPENSE").reduce((c,l)=>c+l.amount,0),a=s.filter(c=>c.type==="TRANSFER").reduce((c,l)=>c+l.amount,0);return{added:r,spent:o,transferred:a,net:r-o,count:s.length,transactions:s,startDate:e,endDate:i}}function Vv(n,t){const e=n.filter(o=>o.date&&o.date.startsWith(t)),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function SS(n,t){const e=t?n.filter(o=>o.type==="EXPENSE"&&o.date&&o.date.startsWith(t)):n.filter(o=>o.type==="EXPENSE"),i={};let s=0;return e.forEach(o=>{const a=o.category||"Other";i[a]=(i[a]||0)+o.amount,s+=o.amount}),{categories:Object.entries(i).map(([o,a])=>({category:o,amount:a,percentage:s>0?a/s*100:0,emoji:Nv(o)})).sort((o,a)=>a.amount-o.amount),totalExpenses:s}}function Fv(n,t){const{balances:e,totalMoney:i}=Zn(n,t);return n.map(s=>{const r=e[s.id]||0,o=i>0?Math.max(0,r)/i*100:0;return{account:s,balance:r,percentage:o}}).sort((s,r)=>r.balance-s.balance)}function Bv(n,t){const{added:e,spent:i,transferred:s,net:r,count:o,transactions:a}=Vv(n,t),{categories:c}=SS(n,t),l=c.length>0?c[0]:null,d=a.filter(f=>f.type==="EXPENSE"),h=d.length>0?d.reduce((f,g)=>g.amount>f.amount?g:f,d[0]):null;return{income:e,expenses:i,transfers:s,savings:r,transactionCount:o,categories:c,highestCategory:l,highestExpense:h}}function Nt(){return Bi||pS()}async function $v(n,t){if(!n)return;const e=t&&t.name?String(t.name).trim():"User",i=t&&t.email?String(t.email).trim():"";await xv(ue(Nt(),"users",n),{name:e,email:i,createdAt:t&&t.createdAt?t.createdAt:new Date().toISOString(),settings:{currency:"INR",theme:"dark",notifications:!0,budgetAlerts:!0,lowBalanceAlert:!0,lowBalanceThreshold:500,allowNegativeBalance:!1}},{merge:!0})}async function Pr(n){if(!n)return null;try{const t=await Av(ue(Nt(),"users",n));if(t&&t.exists())return{id:t.id,...t.data()}}catch(t){console.warn("getUserProfile warning:",t)}return null}async function Uv(n,t){n&&(await Fi(ue(Nt(),"users",n),{initialBalance:Number(t)}),await Hv(n,t))}async function PS(n,t){if(!n)return;const e=await Pr(n),i=(e==null?void 0:e.settings)||{};await Fi(ue(Nt(),"users",n),{settings:{...i,...t}})}async function kS(n){if(!n)return;const t=fS(Nt());(await os(Ge(Nt(),"users",n,"accounts"))).forEach(r=>t.delete(r.ref)),(await os(Ge(Nt(),"users",n,"transactions"))).forEach(r=>t.delete(r.ref)),(await os(Ge(Nt(),"users",n,"budgets"))).forEach(r=>t.delete(r.ref)),t.delete(ue(Nt(),"users",n)),await t.commit()}async function zv(n,t){if(!n)return null;const e=Ge(Nt(),"users",n,"accounts");return(await Pv(e,{name:t.name.trim(),type:t.type,initialBalance:Number(t.initialBalance)||0,bankName:(t.bankName||"").trim(),last4Digits:(t.last4Digits||"").trim(),icon:t.icon||CS(t.type),createdAt:new Date().toISOString()})).id}function CS(n){switch(n){case"Cash":return"💵";case"Bank":return"🏦";case"UPI":return"📱";case"Other":return"💳";default:return"💰"}}async function jv(n){if(!n)return[];const t=Ge(Nt(),"users",n,"accounts"),e=pc(t,gc("createdAt","asc")),i=await os(e),s=[];return i.forEach(r=>{s.push({id:r.id,...r.data()})}),s}function RS(n,t){if(!n)return t([]),()=>{};const e=Ge(Nt(),"users",n,"accounts"),i=pc(e,gc("createdAt","asc"));return kv(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Account subscription error:",s),t([],s)})}async function Hv(n,t=0){if(!n)return;(await jv(n)).length===0&&await zv(n,{name:"Cash",type:"Cash",initialBalance:Number(t)||0,icon:"💵"})}async function qv(n,t){if(!n)return null;const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;if(t.date!==i)throw new Error("⚠️ Invalid transaction date. New transactions can only be created for today.");const s=await jv(n),r=await os(pc(Ge(Nt(),"users",n,"transactions"),gc("createdAt","asc"))),o=[];r.forEach(h=>o.push({id:h.id,...h.data()}));const a=Number(t.amount),c=Ge(Nt(),"users",n,"transactions"),l={type:t.type,amount:a,date:t.date,reason:t.reason.trim(),category:t.category||(t.type==="TRANSFER"?"Transfer":"Other"),notes:(t.notes||"").trim(),createdAt:new Date().toISOString()};if(t.type==="INCOME"){l.destinationAccountId=t.destinationAccountId;const h=s.find(f=>f.id===t.destinationAccountId);if(h){const f=Qs(h,o,s);l.previousBalance=f.balance,l.balanceAfter=f.balance+a}}else if(t.type==="EXPENSE"){l.sourceAccountId=t.sourceAccountId;const h=s.find(f=>f.id===t.sourceAccountId);if(h){const f=Qs(h,o,s);l.previousBalance=f.balance,l.balanceAfter=f.balance-a}}else if(t.type==="TRANSFER"){l.sourceAccountId=t.sourceAccountId,l.destinationAccountId=t.destinationAccountId;const h=s.find(g=>g.id===t.sourceAccountId),f=s.find(g=>g.id===t.destinationAccountId);if(h){const g=Qs(h,o,s);l.sourcePreviousBalance=g.balance,l.sourceBalanceAfter=g.balance-a}if(f){const g=Qs(f,o,s);l.destinationPreviousBalance=g.balance,l.destinationBalanceAfter=g.balance+a}}return(await Pv(c,l)).id}async function Wv(n,t,e){if(!n||!t)return;const i=ue(Nt(),"users",n,"transactions",t),s={amount:Number(e.amount),date:e.date,reason:e.reason.trim(),category:e.category||(e.type==="TRANSFER"?"Transfer":"Other"),notes:(e.notes||"").trim(),updatedAt:new Date().toISOString()};e.sourceAccountId!==void 0&&(s.sourceAccountId=e.sourceAccountId),e.destinationAccountId!==void 0&&(s.destinationAccountId=e.destinationAccountId),await Fi(i,s)}async function MS(n,t){!n||!t||await Sv(ue(Nt(),"users",n,"transactions",t))}function DS(n,t){if(!n)return t([]),()=>{};const e=Ge(Nt(),"users",n,"transactions"),i=pc(e,gc("createdAt","desc"));return kv(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Transaction subscription error:",s),t([],s)})}async function Gv(n,t){if(!n)return;const e=t.category||"monthly";await xv(ue(Nt(),"users",n,"budgets",e),{category:t.category||"monthly",amount:Number(t.amount),month:t.month,updatedAt:new Date().toISOString()})}async function OS(n){if(!n)return[];const t=Ge(Nt(),"users",n,"budgets"),e=await os(t),i=[];return e.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function NS(n,t){!n||!t||await Sv(ue(Nt(),"users",n,"budgets",t))}async function LS(n,t,e){const i=Rv();if(!i.isValid)throw{code:"auth/config-incomplete",message:`Firebase configuration is incomplete. Missing: ${i.missing.join(", ")}`};if(typeof navigator<"u"&&!navigator.onLine)throw{code:"auth/network-request-failed",message:"Network error. Check your internet connection."};const s=(async()=>{const a=(await BE(Ze,t.trim(),e)).user;try{n&&n.trim()&&await Lm(a,{displayName:n.trim()})}catch(c){console.warn("firebaseUpdateProfile warning:",c)}try{await $v(a.uid,{name:(n||"").trim()||"User",email:(t||"").trim(),createdAt:new Date().toISOString()})}catch(c){console.warn("createUserProfile warning during registration:",c)}return a})(),r=new Promise((o,a)=>{setTimeout(()=>{a({code:"auth/timeout",message:"Registration request timed out. Please try again."})},12e3)});return await Promise.race([s,r])}async function VS(n,t){const e=Rv();if(!e.isValid)throw{code:"auth/config-incomplete",message:`Firebase configuration is incomplete. Missing: ${e.missing.join(", ")}`};if(typeof navigator<"u"&&!navigator.onLine)throw{code:"auth/network-request-failed",message:"Network error. Check your internet connection."};const i=(async()=>(await $E(Ze,n.trim(),t)).user)(),s=new Promise((r,o)=>{setTimeout(()=>{o({code:"auth/timeout",message:"Login request timed out. Please try again."})},12e3)});return await Promise.race([i,s])}async function md(){await KE(Ze)}async function FS(n){await FE(Ze,n.trim())}function BS(n){return GE(Ze,n)}async function $S(n){const t=Ze.currentUser;if(!t)throw new Error("No user signed in");await Lm(t,{displayName:n.trim()})}async function US(n,t){const e=Ze.currentUser;if(!e)throw new Error("No user signed in");const i=An.credential(e.email,n);await Au(e,i),await zE(e,t)}async function zS(n){const t=Ze.currentUser;if(!t)throw new Error("No user signed in");const e=An.credential(t.email,n);await Au(t,e),await kS(t.uid),await YE(t)}function sl(n){(n!=null&&n.code||n!=null&&n.message)&&console.error("Firebase Auth Error:",{code:n==null?void 0:n.code,message:n==null?void 0:n.message});const t=(n==null?void 0:n.code)||"",e={"auth/invalid-credential":"Invalid email or password.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect email or password.","auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many login attempts. Please try again later.","auth/network-request-failed":"Network error. Check your internet connection.","auth/email-already-in-use":"An account with this email already exists. Please Log In.","auth/weak-password":"Password is too weak.","auth/operation-not-allowed":"Email/Password sign-in is not enabled in Firebase Console.","auth/requires-recent-login":"Please logout and login again before performing this action.","auth/popup-closed-by-user":"Sign-in popup was closed before completing.","auth/unauthorized-domain":"This domain is not authorized in Firebase Console.","auth/profile-create-failed":"Account created, but your profile could not be saved. Please retry.","auth/config-incomplete":(n==null?void 0:n.message)||"Firebase configuration is incomplete.","auth/timeout":(n==null?void 0:n.message)||"Authentication request timed out. Please try again."};if(e[t])return e[t];if(n!=null&&n.message){const s=String(n.message).replace(/^Firebase:\s*/i,"").replace(/\s*\([^\)]*\)/g,"").trim();if(s&&s!=="Error")return s}return"Unable to log in. Please try again."}function Kv(n,t,e){const i=t.filter(l=>l.type==="EXPENSE"&&l.date&&l.date.startsWith(e)),s=i.reduce((l,d)=>l+d.amount,0),r=n.find(l=>l.category==="monthly"),o=r?{budget:r.amount,spent:s,remaining:r.amount-s,percentage:r.amount>0?Math.min(s/r.amount*100,100):0,exceeded:s>r.amount}:null,c=n.filter(l=>l.category!=="monthly").map(l=>{const d=i.filter(h=>h.category===l.category).reduce((h,f)=>h+f.amount,0);return{category:l.category,budget:l.amount,spent:d,remaining:l.amount-d,percentage:l.amount>0?Math.min(d/l.amount*100,100):0,exceeded:d>l.amount}});return{monthlyProgress:o,categoryProgress:c,totalSpent:s}}function jS(n,t,e){const i=[],{monthlyProgress:s,categoryProgress:r}=Kv(n,t,e);return s&&(s.exceeded?i.push({type:"danger",icon:"🚨",title:"Budget Exceeded",message:`You exceeded your monthly budget by ₹${Math.abs(s.remaining).toLocaleString("en-IN")}.`}):s.percentage>=80&&i.push({type:"warning",icon:"⚠️",title:"Budget Alert",message:`You have used ${s.percentage.toFixed(0)}% of your monthly budget.`})),r.forEach(o=>{o.exceeded&&i.push({type:"danger",icon:"🚨",title:"Category Budget Exceeded",message:`You exceeded your ${o.category} budget by ₹${Math.abs(o.remaining).toLocaleString("en-IN")}.`})}),i}async function HS(n,t,e){await Gv(n,{category:"monthly",amount:Number(t),month:e})}async function qS(n,t,e,i){await Gv(n,{category:t,amount:Number(e),month:i})}async function yd(n){return await OS(n)}async function WS(n,t){await NS(n,t)}let Te=null,vn=!1;function GS(){KS(),YS(),XS(),JS()}function KS(){"serviceWorker"in navigator&&(location.hostname==="localhost"||location.hostname==="127.0.0.1"||location.hostname==="::1"?navigator.serviceWorker.getRegistrations().then(t=>{for(let e of t)e.unregister()}).catch(t=>console.warn("SW unregister warning:",t)):window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})}))}function YS(){window.matchMedia("(display-mode: standalone)").matches&&(vn=!0),window.navigator.standalone===!0&&(vn=!0),window.addEventListener("appinstalled",()=>{vn=!0,Te=null,Kl()})}function XS(){window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Te=n,!localStorage.getItem("mc_install_dismissed")&&!vn&&setTimeout(()=>QS(),3e3)})}function QS(){if(vn||!Te)return;const n=document.getElementById("pwa-install-banner");n&&(n.innerHTML=`
    <div class="pwa-install-content">
      <div class="pwa-install-icon">
        <img src="/icon-192.png" alt="Money Control" width="48" height="48" style="border-radius: 12px;" />
      </div>
      <div class="pwa-install-text">
        <strong>Install Money Control</strong>
        <span>Track your money faster with the Money Control app.</span>
      </div>
      <div class="pwa-install-actions">
        <button class="pwa-install-btn" id="pwa-install-accept">Install App</button>
        <button class="pwa-install-dismiss" id="pwa-install-dismiss">Not Now</button>
      </div>
    </div>
  `,n.classList.add("show"),document.getElementById("pwa-install-accept").onclick=async()=>{Te&&(Te.prompt(),(await Te.userChoice).outcome==="accepted"&&(vn=!0),Te=null),Kl()},document.getElementById("pwa-install-dismiss").onclick=()=>{localStorage.setItem("mc_install_dismissed","true"),Kl()})}function Kl(){const n=document.getElementById("pwa-install-banner");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function JS(){const n=()=>{const t=document.getElementById("offline-banner");t&&(navigator.onLine?(t.classList.remove("show"),setTimeout(()=>{t.innerHTML=""},300)):(t.innerHTML=`
        <div class="offline-content">
          <span class="offline-icon">📡</span>
          <span class="offline-text">You're offline — Reconnect to save new transactions securely.</span>
        </div>
      `,t.classList.add("show")))};window.addEventListener("online",n),window.addEventListener("offline",n),setTimeout(n,1e3)}function Yv(){return navigator.onLine}function ZS(){return vn}function tP(){return!!Te&&!vn}async function eP(){if(!Te)return!1;Te.prompt();const n=await Te.userChoice;return n.outcome==="accepted"&&(vn=!0),Te=null,n.outcome==="accepted"}const xt=4;async function Xv(n){const e=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function nP(n,t){await Fi(ue(Bi,"users",n),{pinHash:t,pinEnabled:!0,pinSetupPromptShown:!0})}async function Fa(n){try{const t=await Av(ue(Bi,"users",n));if(t&&t.exists()){const e=t.data();return{pinHash:e.pinHash||null,pinEnabled:e.pinEnabled||!1,pinSetupPromptShown:e.pinSetupPromptShown||!1,autoLockTimeout:e.autoLockTimeout!==void 0?e.autoLockTimeout:5,pinLength:xt}}}catch(t){console.warn("getPinData warning:",t)}return{pinHash:null,pinEnabled:!1,pinSetupPromptShown:!1,autoLockTimeout:5,pinLength:xt}}async function Qv(n,t){return await Xv(n)===t}async function Jv(n){await Fi(ue(Bi,"users",n),{pinHash:null,pinEnabled:!1})}async function iP(n,t){await Fi(ue(Bi,"users",n),{autoLockTimeout:t})}async function sP(n){await Fi(ue(Bi,"users",n),{pinSetupPromptShown:!0})}let rP=0;function Mo(n,t="info",e=4e3){const i=document.getElementById("toast-container");if(!i)return;const s=`toast-${++rP}`,r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"Success",error:"Error",warning:"Warning",info:"Info"},a=document.createElement("div");a.id=s,a.className=`toast toast-${t}`,a.innerHTML=`
    <div class="toast-icon">${r[t]||r.info}</div>
    <div class="toast-content">
      <div class="toast-title">${o[t]||o.info}</div>
      <div class="toast-message">${n}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${e}ms linear;"></div>
  `,i.appendChild(a),requestAnimationFrame(()=>{const d=a.querySelector(".toast-progress");d&&(d.style.width="0%")});const c=setTimeout(()=>{wp(a)},e);a.querySelector(".toast-close").addEventListener("click",()=>{clearTimeout(c)});const l=i.querySelectorAll(".toast");l.length>4&&wp(l[0])}function wp(n){!n||!n.parentNode||(n.classList.add("removing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}const H={success:(n,t)=>Mo(n,"success",t),error:(n,t)=>Mo(n,"error",t),warning:(n,t)=>Mo(n,"warning",t),info:(n,t)=>Mo(n,"info",t)};let C={mode:"lock",pin:"",confirmPin:"",currentPinInput:"",step:"enter",pinLength:xt,failedAttempts:0,isProcessing:!1,uid:null,storedHash:null,onUnlock:null,onSetupComplete:null},Ep=!1;function oP(n,t){C.mode="setup-prompt",C.uid=n,C.onSetupComplete=t,ye()}function aP(n,t){C.mode="create",C.uid=n,C.pin="",C.confirmPin="",C.currentPinInput="",C.step="enter",C.pinLength=xt,C.onSetupComplete=t,ye()}function cP(n,t,e){C.mode="change",C.uid=n,C.storedHash=t,C.currentPinInput="",C.pin="",C.confirmPin="",C.step=t?"current":"enter",C.pinLength=xt,C.onSetupComplete=e,ye()}function Zv(n,t,e){C.mode="lock",C.uid=n,C.storedHash=t,C.pin="",C.failedAttempts=0,C.isProcessing=!1,C.onUnlock=e,ye()}function Ei(){const n=document.getElementById("pin-lock-root");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function ye(){const n=document.getElementById("pin-lock-root");if(!n)return;let t="";switch(C.mode){case"setup-prompt":t=uP();break;case"create":case"change":t=dP();break;case"lock":t=hP();break;case"forgot":t=fP();break}n.innerHTML=`<div class="pin-overlay">${t}</div>`,n.classList.add("show"),pP(),lP()}function lP(){Ep||(Ep=!0,window.addEventListener("keydown",n=>{const t=document.getElementById("pin-lock-root");if(!(!t||!t.classList.contains("show"))&&!(n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA")){if(n.key>="0"&&n.key<="9"){if(C.isProcessing)return;e_(n.key)}else if(n.key==="Backspace"){if(C.isProcessing)return;n_()}else if(n.key==="Enter"){if(C.isProcessing)return;C.mode==="lock"&&i_()}}}))}function uP(){return`
    <div class="pin-screen pin-setup-prompt animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">🔐 Secure Your Money</div>
      <p class="pin-subtitle">Protect your financial information with a 4-digit PIN.</p>
      <p class="pin-description">Add an extra layer of security to keep your money data private.</p>
      <div class="pin-prompt-actions">
        <button class="pin-btn pin-btn-primary" id="pin-setup-set">
          🔒 Set PIN
        </button>
        <button class="pin-btn pin-btn-ghost" id="pin-setup-skip">
          Skip for now
        </button>
      </div>
    </div>
  `}function dP(){let n="Create Your PIN",t="Choose a 4-digit PIN to protect your data.",e=C.pin;return C.mode==="change"?C.step==="current"?(n="Current PIN",t="Enter your current 4-digit PIN.",e=C.currentPinInput):C.step==="enter"?(n="New PIN",t="Enter your new 4-digit PIN.",e=C.pin):C.step==="confirm"&&(n="Confirm New PIN",t="Confirm your new 4-digit PIN.",e=C.confirmPin):C.step==="confirm"?(n="Confirm Your PIN",t="Enter your 4-digit PIN again to confirm.",e=C.confirmPin):(n="Enter Your PIN",t="Enter a 4-digit PIN to protect your data.",e=C.pin),`
    <div class="pin-screen pin-create-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">${n}</div>
      <p class="pin-subtitle">${t}</p>

      <div class="pin-dots" id="pin-dots">
        ${vd(e,xt)}
      </div>

      <div class="pin-error" id="pin-create-error"></div>

      ${t_()}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-create-back">
          ← Back
        </button>
      </div>
    </div>
  `}function hP(){return`
    <div class="pin-screen pin-lock-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Money Control</div>
      <p class="pin-subtitle">Welcome Back 👋</p>
      <p class="pin-description">Enter your PIN</p>

      <div class="pin-dots" id="pin-dots">
        ${vd(C.pin,xt)}
      </div>

      <div class="pin-error" id="pin-lock-error"></div>

      ${t_()}

      <button class="pin-btn pin-btn-primary pin-unlock-btn" id="pin-unlock-btn">
        🔓 Unlock
      </button>

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-btn">
          Forgot PIN?
        </button>
      </div>
    </div>
  `}function fP(){return`
    <div class="pin-screen pin-forgot-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Reset Your PIN</div>
      <p class="pin-subtitle">Verify your account password to reset your PIN.</p>

      <div class="pin-forgot-form">
        <div class="form-group">
          <label class="form-label" for="pin-forgot-password">Account Password</label>
          <input type="password" id="pin-forgot-password" class="form-input pin-forgot-input" placeholder="Enter your password" autocomplete="current-password" />
          <div class="form-error" id="pin-forgot-error"></div>
        </div>

        <button class="pin-btn pin-btn-primary" id="pin-forgot-verify">
          Verify & Reset PIN
        </button>
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-back">
          ← Back to PIN Lock
        </button>
      </div>
    </div>
  `}function vd(n,t=xt){let e="";for(let i=0;i<t;i++){const s=i<n.length;e+=`<span class="pin-dot ${s?"filled":""}">${s?"●":"○"}</span>`}return e}function t_(){return`
    <div class="pin-keypad">
      <button class="pin-key" data-key="1">1</button>
      <button class="pin-key" data-key="2">2</button>
      <button class="pin-key" data-key="3">3</button>
      <button class="pin-key" data-key="4">4</button>
      <button class="pin-key" data-key="5">5</button>
      <button class="pin-key" data-key="6">6</button>
      <button class="pin-key" data-key="7">7</button>
      <button class="pin-key" data-key="8">8</button>
      <button class="pin-key" data-key="9">9</button>
      <button class="pin-key pin-key-empty"></button>
      <button class="pin-key" data-key="0">0</button>
      <button class="pin-key pin-key-delete" data-key="delete">⌫</button>
    </div>
  `}function Pe(){const n=document.getElementById("pin-dots");if(!n)return;let t="";C.mode==="create"?t=C.step==="confirm"?C.confirmPin:C.pin:C.mode==="change"?C.step==="current"?t=C.currentPinInput:C.step==="confirm"?t=C.confirmPin:t=C.pin:C.mode==="lock"&&(t=C.pin),n.innerHTML=vd(t,xt)}function pP(){const n=document.getElementById("pin-setup-set");n&&(n.onclick=()=>{C.mode="create",C.pin="",C.confirmPin="",C.step="enter",ye()});const t=document.getElementById("pin-setup-skip");t&&(t.onclick=async()=>{C.uid&&await sP(C.uid),Ei(),C.onSetupComplete&&C.onSetupComplete()}),document.querySelectorAll(".pin-key[data-key]").forEach(a=>{a.onclick=()=>{if(C.isProcessing)return;const c=a.dataset.key;a.classList.add("pressed"),setTimeout(()=>a.classList.remove("pressed"),150),c==="delete"?n_():e_(c)}});const e=document.getElementById("pin-create-back");e&&(e.onclick=()=>{C.mode==="change"?C.step==="confirm"?(C.step="enter",C.confirmPin="",ye()):C.step==="enter"&&C.storedHash?(C.step="current",C.pin="",ye()):Ei():C.step==="confirm"?(C.step="enter",C.confirmPin="",ye()):Ei()});const i=document.getElementById("pin-unlock-btn");i&&(i.onclick=()=>i_());const s=document.getElementById("pin-forgot-btn");s&&(s.onclick=()=>{C.mode="forgot",ye()});const r=document.getElementById("pin-forgot-verify");r&&(r.onclick=()=>mP());const o=document.getElementById("pin-forgot-back");o&&(o.onclick=()=>{C.mode="lock",C.pin="",ye()})}function e_(n){const t=document.getElementById("pin-create-error");t&&(t.textContent=""),C.mode==="create"?C.step==="confirm"?C.confirmPin.length<xt&&(C.confirmPin+=n,Pe(),C.confirmPin.length===xt&&Tp()):C.pin.length<xt&&(C.pin+=n,Pe(),C.pin.length===xt&&setTimeout(()=>{C.step="confirm",ye()},200)):C.mode==="change"?C.step==="current"?C.currentPinInput.length<xt&&(C.currentPinInput+=n,Pe(),C.currentPinInput.length===xt&&gP()):C.step==="confirm"?C.confirmPin.length<xt&&(C.confirmPin+=n,Pe(),C.confirmPin.length===xt&&Tp()):C.pin.length<xt&&(C.pin+=n,Pe(),C.pin.length===xt&&setTimeout(()=>{C.step="confirm",ye()},200)):C.mode==="lock"&&C.pin.length<xt&&(C.pin+=n,Pe())}function n_(){C.mode==="create"?C.step==="confirm"?C.confirmPin=C.confirmPin.slice(0,-1):C.pin=C.pin.slice(0,-1):C.mode==="change"?C.step==="current"?C.currentPinInput=C.currentPinInput.slice(0,-1):C.step==="confirm"?C.confirmPin=C.confirmPin.slice(0,-1):C.pin=C.pin.slice(0,-1):C.mode==="lock"&&(C.pin=C.pin.slice(0,-1)),Pe()}async function gP(){const n=document.getElementById("pin-create-error");if(C.currentPinInput.length!==xt){n&&(n.textContent="Enter your 4-digit PIN.");return}C.isProcessing=!0;try{if(await Qv(C.currentPinInput,C.storedHash))C.isProcessing=!1,C.step="enter",C.pin="",C.confirmPin="",ye();else{C.isProcessing=!1,n&&(n.textContent="Incorrect PIN. Try again."),C.currentPinInput="",Pe();const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500))}}catch{C.isProcessing=!1,n&&(n.textContent="Verification failed. Try again.")}}async function Tp(){const n=document.getElementById("pin-create-error");if(C.pin!==C.confirmPin){n&&(n.textContent="PINs do not match. Please try again."),C.confirmPin="",Pe();const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}C.isProcessing=!0;try{const t=await Xv(C.pin);await nP(C.uid,t),H.success(C.mode==="change"?"🔐 PIN updated successfully!":"🔐 PIN created successfully!"),Ei(),C.pin="",C.confirmPin="",C.currentPinInput="",C.isProcessing=!1,C.onSetupComplete&&C.onSetupComplete()}catch{n&&(n.textContent="Failed to save PIN. Please try again."),C.isProcessing=!1}}async function i_(){if(C.isProcessing)return;const n=document.getElementById("pin-lock-error");if(C.pin.length!==xt){n&&(n.textContent="Enter your 4-digit PIN.");const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}if(C.isProcessing=!0,C.failedAttempts>=3){const t=Math.min(Math.pow(2,C.failedAttempts-2)*1e3,3e4),e=document.getElementById("pin-unlock-btn");e&&(e.disabled=!0,e.textContent=`Wait ${Math.ceil(t/1e3)}s...`),await new Promise(i=>setTimeout(i,t)),e&&(e.disabled=!1,e.textContent="🔓 Unlock")}try{if(await Qv(C.pin,C.storedHash))H.success("Unlocked successfully."),Ei(),C.pin="",C.failedAttempts=0,C.isProcessing=!1,C.onUnlock&&C.onUnlock();else{C.failedAttempts++,C.pin="",Pe(),n&&(n.textContent="Incorrect PIN. Try again.");const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500)),C.isProcessing=!1}}catch{n&&(n.textContent="Verification failed. Try again."),C.pin="",Pe(),C.isProcessing=!1}}async function mP(){const n=document.getElementById("pin-forgot-password"),t=document.getElementById("pin-forgot-error");if(!n)return;const e=n.value;if(!e){t&&(t.textContent="Please enter your password.");return}const i=document.getElementById("pin-forgot-verify");i&&(i.disabled=!0,i.innerHTML='<span class="spinner"></span> Verifying...');try{const s=Ze.currentUser;if(!s||!s.email){t&&(t.textContent="No authenticated user found."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN");return}const r=An.credential(s.email,e);await Au(s,r),await Jv(C.uid),H.success("🔐 PIN removed. You can set a new PIN in Settings."),Ei(),C.onUnlock&&C.onUnlock()}catch{t&&(t.textContent="Incorrect password. Please try again."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN")}}function eo(n,t=!1){if(n===""||n===null||n===void 0)return"Please enter an amount.";const e=Number(n);return isNaN(e)?"Please enter a valid number.":(t?e<0:e<=0)?t?"Amount cannot be negative.":"Amount must be greater than ₹0.":e>99999999?"Amount is too large.":null}function _d(n){return!n||!n.trim()?"Please enter your email.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())?null:"Please enter a valid email address."}function bd(n){return n?n.length<6?"Password must be at least 6 characters.":null:"Please enter a password."}function s_(n,t){return t?n!==t?"Passwords do not match.":null:"Please confirm your password."}function r_(n,t){return!n||!String(n).trim()?`Please enter ${t}.`:null}function wd(n){return!n||!n.trim()?"Please enter your name.":n.trim().length<2?"Name must be at least 2 characters.":n.trim().length>50?"Name must be less than 50 characters.":null}function yP(n){if(!n)return"Please select a date.";const t=new Date(n);return isNaN(t.getTime())?"Please enter a valid date.":null}function Ed(n){if(!n)return"Date is required.";const t=new Date(n);if(isNaN(t.getTime()))return"Please enter a valid date.";const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n!==i?"⚠️ Invalid transaction date. New transactions can only be created for today.":null}function vP(n){return n?null:"Please select a category."}function o_(n,t=!0){const e={},i=eo(n.amount);if(i&&(e.amount=i),t){const o=Ed(n.date);o&&(e.date=o)}else{const o=yP(n.date);o&&(e.date=o)}const s=r_(n.reason,"a reason");s&&(e.reason=s);const r=vP(n.category);return r&&(e.category=r),{isValid:Object.keys(e).length===0,errors:e}}function _P(n,t){const e={},i=_d(n);i&&(e.email=i);const s=bd(t);return s&&(e.password=s),{isValid:Object.keys(e).length===0,errors:e}}function bP(n,t,e,i){const s={},r=wd(n);r&&(s.name=r);const o=_d(t);o&&(s.email=o);const a=bd(e);a&&(s.password=a);const c=s_(e,i);return c&&(s.confirmPassword=c),{isValid:Object.keys(s).length===0,errors:s}}let ia="login";function wP(){return`
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 72px; height: 72px; border-radius: 18px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.3);" />
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${a_()}
        </div>
      </div>
    </div>
  `}function a_(){if(ia==="login")return`
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
    `;if(ia==="register")return`
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
    `;if(ia==="forgot")return`
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
    `}function c_(n){const t=document.getElementById("auth-card-body");if(!t)return;const e=f=>{ia=f,t.innerHTML=a_(),c_()},i=document.getElementById("link-register");i&&(i.onclick=()=>e("register"));const s=document.getElementById("link-login");s&&(s.onclick=()=>e("login"));const r=document.getElementById("link-login-back");r&&(r.onclick=()=>e("login"));const o=document.getElementById("link-forgot");o&&(o.onclick=()=>e("forgot"));const a=document.getElementById("toggle-login-password");a&&(a.onclick=()=>{const f=document.getElementById("login-password");f&&(f.type=f.type==="password"?"text":"password")});const c=document.getElementById("toggle-reg-password");c&&(c.onclick=()=>{const f=document.getElementById("reg-password");f&&(f.type=f.type==="password"?"text":"password")});const l=document.getElementById("login-form");l&&(l.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("login-email").value,y=document.getElementById("login-password").value;document.getElementById("login-email-error").textContent="",document.getElementById("login-password-error").textContent="";const _=_P(g,y);if(!_.isValid){_.errors.email&&(document.getElementById("login-email-error").textContent=_.errors.email),_.errors.password&&(document.getElementById("login-password-error").textContent=_.errors.password);return}const v=document.getElementById("btn-login-submit");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Logging in...';try{await VS(g,y),H.success("Logged in successfully!")}catch(T){console.error("Login failure:",T);const k=sl(T);H.error(k);const M=document.getElementById("login-password-error");M&&(M.textContent=k)}finally{const T=document.getElementById("btn-login-submit");T&&(T.disabled=!1,T.innerHTML='<span class="btn-text">Log In</span>')}});const d=document.getElementById("register-form");d&&(d.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("reg-name").value,y=document.getElementById("reg-email").value,_=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value;document.getElementById("reg-name-error").textContent="",document.getElementById("reg-email-error").textContent="",document.getElementById("reg-password-error").textContent="",document.getElementById("reg-confirm-error").textContent="";const T=bP(g,y,_,v);if(!T.isValid){T.errors.name&&(document.getElementById("reg-name-error").textContent=T.errors.name),T.errors.email&&(document.getElementById("reg-email-error").textContent=T.errors.email),T.errors.password&&(document.getElementById("reg-password-error").textContent=T.errors.password),T.errors.confirmPassword&&(document.getElementById("reg-confirm-error").textContent=T.errors.confirmPassword);return}const k=document.getElementById("btn-register-submit");k&&(k.disabled=!0,k.innerHTML='<span class="spinner"></span> Creating Account...');try{await LS(g,y,_),H.success("Account created successfully!")}catch(M){console.error("Registration Error:",M);const D=sl(M);H.error(D);const O=document.getElementById("reg-email-error");O&&(O.textContent=D)}finally{const M=document.getElementById("btn-register-submit");M&&(M.disabled=!1,M.innerHTML='<span class="btn-text">Create Account</span>')}});const h=document.getElementById("forgot-form");h&&(h.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("forgot-email").value;document.getElementById("forgot-email-error").textContent="";const y=_d(g);if(y){document.getElementById("forgot-email-error").textContent=y;return}const _=document.getElementById("btn-forgot-submit");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Sending...';try{await FS(g),H.success("Password reset email sent! Check your inbox."),e("login")}catch(v){H.error(sl(v)),_.disabled=!1,_.innerHTML='<span class="btn-text">Send Reset Link</span>'}})}function EP(){return`
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
  `}function TP(n,t){const e=document.getElementById("onboarding-form");e&&(e.onsubmit=async i=>{i.preventDefault();const s=document.getElementById("initial-balance"),r=document.getElementById("onboarding-error");r.textContent="";const o=s.value,a=eo(o,!0);if(a){r.textContent=a;return}const c=document.getElementById("btn-start-tracking");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Saving...';try{await Uv(n,Number(o)),H.success("Initial balance saved!"),t&&t()}catch(l){console.error("Error setting initial balance:",l),H.error("Unable to save initial balance. Please try again."),c.disabled=!1,c.innerHTML="Start Money Tracking"}})}function IP(n,t={}){const{showActions:e=!1,showDate:i=!0,showNotes:s=!1,accounts:r=[]}=t,o=n.type==="INCOME",a=n.type==="EXPENSE",c=n.type==="TRANSFER",l=o?"income":a?"expense":"balance",d=v=>{const T=r.find(k=>k.id===v);return T?T.name:""};let h="🔴",f="",g="";if(o)h="🟢",g="+",f=d(n.destinationAccountId)||"Account";else if(a)h="🔴",g="−",f=d(n.sourceAccountId)||"Account";else if(c){h="🟣",g="↕";const v=d(n.sourceAccountId)||"Source",T=d(n.destinationAccountId)||"Dest";f=`${v} → ${T}`}const y=vS(n.date),_=`${f} • ${y}`;return`
    <div class="transaction-item animate-fade-in" data-tx-id="${n.id}">
      <div class="transaction-type-badge ${l}">
        ${h}
      </div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${Ro(n.reason)||(c?"Account Transfer":Ro(n.category)||"Transaction")}
        </div>
        <div class="transaction-meta">
          <span>${Ro(_)}</span>
        </div>
        ${s&&n.notes?`
          <div class="transaction-notes-sub">
            ${Ro(n.notes)}
          </div>
        `:""}
      </div>
      <div class="transaction-amount">
        <div class="transaction-amount-value ${l}" style="${c?"color: var(--primary);":""}">
          ${g}${W(n.amount)}
        </div>
      </div>
    </div>
  `}function dr(n,t={}){return!n||n.length===0?"":n.map(e=>IP(e,t)).join("")}function l_(){return`
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">No transactions yet</h3>
      <p class="empty-state-text">Start tracking your money by adding your first transaction.</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `}function AP(){return`
    <div class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <h3 class="empty-state-title">No results found</h3>
      <p class="empty-state-text">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  `}function rl(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📅</span>
      <h3 class="empty-state-title">No transactions on this date</h3>
      <p class="empty-state-text">There are no transactions recorded for the selected date.</p>
    </div>
  `}function xP(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `}let sa=null;function Ie(n){ee();const t=document.getElementById("modal-root");if(!t)return;const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`
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
  `,t.appendChild(e),document.body.classList.add("no-scroll"),sa={element:e,onClose:n.onClose};const i=e.querySelector("#modal-close-btn");i&&i.addEventListener("click",ee),e.addEventListener("click",r=>{r.target===e&&ee()});const s=r=>{r.key==="Escape"&&(ee(),document.removeEventListener("keydown",s))};return document.addEventListener("keydown",s),n.onOpen&&requestAnimationFrame(()=>n.onOpen(e)),e}function ee(){if(!sa)return;const{element:n,onClose:t}=sa;n.classList.add("closing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),document.body.classList.remove("no-scroll"),t&&t()},200),sa=null}function gs(n){return new Promise(t=>{const e=`
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
    `;Ie({content:e,hideHeader:!0,onOpen:i=>{i.querySelector("#confirm-cancel").addEventListener("click",()=>{ee(),t(!1)}),i.querySelector("#confirm-ok").addEventListener("click",()=>{ee(),t(!0)})},onClose:()=>t(!1)})})}let St={user:null,profile:null,accounts:[],transactions:[],budgets:[]};function Ip(n){St={...St,...n};const{profile:t,accounts:e,transactions:i}=St;if(St.dashboardError)return`
      <div class="page animate-fade-in" style="display: flex; align-items: center; justify-content: center; min-height: 60vh;">
        <div class="card card-flat" style="padding: 40px 24px; text-align: center; max-width: 440px; width: 100%;">
          <div style="font-size: 3.5rem; margin-bottom: 16px;">⚠️</div>
          <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">Unable to load your data</h2>
          <p style="color: var(--text-secondary); font-size: 0.9375rem; margin-bottom: 24px; line-height: 1.5;">
            Something went wrong while loading your financial information.
          </p>
          <button class="btn btn-primary btn-lg" id="btn-retry-dashboard" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 8px;">
            🔄 Try Again
          </button>
        </div>
      </div>
    `;const s=t!=null&&t.name?t.name.split(" ")[0]:"User",{balances:r,totalMoney:o}=AS(e,i),a=xs(),c=Lv(i,a),l=i.slice(0,5),d=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,h=jS(St.budgets,i,d);return`
    <div class="page animate-fade-in dashboard-page">
      <!-- 1. Greeting + current date -->
      <div class="greeting">
        <h1 class="greeting-text">Good ${yS().replace("Good ","")}, ${s} 👋</h1>
        <p class="greeting-date">${_S()}</p>
      </div>

      <!-- Budget Alert Banner if any -->
      ${h.length>0?`
        <div style="margin-bottom: var(--space-4);">
          ${h.map(f=>`
            <div class="alert-banner alert-banner-${f.type}">
              <span class="alert-banner-icon">${f.icon}</span>
              <div class="alert-banner-text">
                <strong>${f.title}:</strong> ${f.message}
              </div>
            </div>
          `).join("")}
        </div>
      `:""}

      <!-- 2. Total Money card -->
      <div class="balance-card">
        <div class="balance-label">💰 TOTAL MONEY</div>
        <div class="balance-amount">${W(o)}</div>
        <div class="balance-subtitle">Across ${e.length} account${e.length===1?"":"s"}</div>
      </div>

      <!-- 3. Accounts section -->
      <div class="section accounts-section">
        <div class="section-header">
          <h2 class="section-title-sm">ACCOUNTS</h2>
          <span class="section-link" id="link-manage-accounts">View All →</span>
        </div>
        <div class="account-rows-container card card-flat">
          ${e.length>0?e.map(f=>{const g=r[f.id]||0;return`
              <div class="account-compact-row" data-account-id="${f.id}" style="cursor: pointer;">
                <div class="account-row-left">
                  <span class="account-row-icon">${f.icon||"🏦"}</span>
                  <span class="account-row-name">${f.name}</span>
                </div>
                <div class="account-row-balance">${W(g)}</div>
              </div>
            `}).join(""):`
            <div class="account-compact-empty">
              <span style="font-size: 0.875rem; color: var(--text-secondary);">No accounts yet</span>
              <button class="btn btn-sm btn-primary" id="empty-add-account-btn">➕ Add Account</button>
            </div>
          `}
        </div>
      </div>

      <!-- 4. TODAY section -->
      <div class="section today-section">
        <div class="section-header">
          <h2 class="section-title-sm">TODAY</h2>
        </div>
        <div class="today-compact-grid">
          <div class="today-card income">
            <div class="today-card-header">
              <span class="today-card-icon">🟢</span>
              <span class="today-card-label">Added</span>
            </div>
            <div class="today-card-amount income">${W(c.added)}</div>
          </div>
          <div class="today-card expense">
            <div class="today-card-header">
              <span class="today-card-icon">🔴</span>
              <span class="today-card-label">Spent</span>
            </div>
            <div class="today-card-amount expense">${W(c.spent)}</div>
          </div>
        </div>
      </div>

      <!-- 5. Quick actions -->
      <div class="section quick-actions-section">
        <div class="quick-actions-row">
          <button class="quick-action-btn income" id="btn-quick-add-money">
            <span>+ Add Money</span>
          </button>
          <button class="quick-action-btn expense" id="btn-quick-add-expense">
            <span>− Expense</span>
          </button>
        </div>
        <button class="quick-action-btn transfer full-width" id="btn-quick-transfer">
          <span>↕ Transfer</span>
        </button>
      </div>

      <!-- 6. Recent Activity -->
      <div class="section recent-transactions">
        <div class="section-header">
          <h2 class="section-title-sm">RECENT ACTIVITY</h2>
          ${i.length>0?`
            <span class="section-link" id="link-view-all-tx">View All →</span>
          `:""}
        </div>

        <div class="card card-flat recent-tx-card">
          ${l.length>0?dr(l,{showActions:!1,showDate:!0,accounts:St.accounts}):l_()}
        </div>
      </div>
    </div>
  `}function Ap(n,t){const e=document.getElementById("btn-retry-dashboard");e&&(e.onclick=()=>{e.disabled=!0,e.innerHTML='<span class="spinner"></span> Loading...',t&&t()});const i=document.getElementById("empty-add-account-btn");i&&(i.onclick=()=>n("accounts")),document.querySelectorAll(".quick-nav-btn[data-page]").forEach(d=>{d.onclick=()=>n(d.dataset.page)});const s=document.getElementById("link-manage-accounts");s&&(s.onclick=()=>{window.appState&&(window.appState.selectedAccountId=null),n("accounts")}),document.querySelectorAll(".account-compact-row[data-account-id]").forEach(d=>{d.onclick=()=>{const h=d.dataset.accountId;window.appState&&(window.appState.selectedAccountId=h),n("accounts")}});const r=document.getElementById("link-view-all-tx");r&&(r.onclick=()=>n("transactions"));const o=document.getElementById("btn-quick-add-money");o&&(o.onclick=()=>Ti("INCOME",t));const a=document.getElementById("btn-quick-add-expense");a&&(a.onclick=()=>Ti("EXPENSE",t));const c=document.getElementById("btn-quick-transfer");c&&(c.onclick=()=>Td(t));const l=document.getElementById("empty-add-money-btn");l&&(l.onclick=()=>Ti("INCOME",t)),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(d=>{d.onclick=h=>{h.stopPropagation();const f=d.dataset.action,g=d.dataset.txId,y=St.transactions.find(_=>_.id===g);y&&(f==="edit"?y.type==="TRANSFER"?Ad(y,t):Id(y,t):f==="delete"&&xd(y,t))}})}function Ti(n="INCOME",t){const e=n==="INCOME",i=e?gd:to,s=St.accounts,r=xs(),o=Mv();if(!Yv()){H.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const a=`
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
          ${s.map(c=>`<option value="${c.id}">${c.icon||"🏦"} ${c.name}</option>`).join("")}
        </select>
        <div class="form-error" id="tx-account-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          ${o}
          <span class="date-lock-badge">🔒 Today</span>
        </div>
        <input type="hidden" id="tx-date" value="${r}" />
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
          ${i.map(c=>`<option value="${c.value}">${c.label}</option>`).join("")}
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
  `;Ie({title:e?"💰 Add Money":"💸 Add Expense",content:a,onOpen:c=>{const l=c.querySelector("#tx-modal-form"),d=c.querySelector("#tx-amount"),h=c.querySelector("#tx-account"),f=c.querySelector("#tx-insufficient-warning"),g=c.querySelector("#tx-insufficient-text"),y=()=>{var O,L;if(e)return;const _=h.value,v=Number(d.value)||0;if(!_||v<=0){f.style.display="none";return}const T=s.find(I=>I.id===_),{balances:k}=Zn(s,St.transactions),M=k[_]||0,D=(L=(O=St.profile)==null?void 0:O.settings)==null?void 0:L.allowNegativeBalance;v>M&&!D?(g.textContent=`⚠️ Insufficient Balance! Available in ${(T==null?void 0:T.name)||"account"}: ${W(M)}`,f.style.display="flex"):f.style.display="none"};d.oninput=y,h.onchange=y,l.onsubmit=async _=>{var x,S;_.preventDefault();const v=d.value,T=h.value,k=c.querySelector("#tx-date").value,M=c.querySelector("#tx-reason").value,D=c.querySelector("#tx-category").value,O=c.querySelector("#tx-notes").value;c.querySelector("#tx-amount-error").textContent="",c.querySelector("#tx-account-error").textContent="",c.querySelector("#tx-reason-error").textContent="",c.querySelector("#tx-category-error").textContent="";const L=Ed(k);if(L){H.error(L);return}let I=!0;const b=o_({amount:v,date:k,reason:M,category:D},!0);if(b.isValid||(b.errors.amount&&(c.querySelector("#tx-amount-error").textContent=b.errors.amount),b.errors.reason&&(c.querySelector("#tx-reason-error").textContent=b.errors.reason),b.errors.category&&(c.querySelector("#tx-category-error").textContent=b.errors.category),I=!1),T||(c.querySelector("#tx-account-error").textContent="Please select an account.",I=!1),!I)return;if(!e){const P=s.find(dt=>dt.id===T),{balances:A}=Zn(s,St.transactions),rt=A[T]||0,tt=(S=(x=St.profile)==null?void 0:x.settings)==null?void 0:S.allowNegativeBalance;if(Number(v)>rt&&!tt){g.textContent=`⚠️ Insufficient Balance! Available in ${P==null?void 0:P.name}: ${W(rt)}`,f.style.display="flex",H.warning(`⚠️ You only have ${W(rt)} available in ${P==null?void 0:P.name}.`);return}}const E=c.querySelector("#btn-save-tx");E.disabled=!0,E.innerHTML='<span class="spinner"></span> Saving...';try{const P=St.user.uid,A={type:n,amount:Number(v),date:k,reason:M,category:D,notes:O};e?A.destinationAccountId=T:A.sourceAccountId=T,await qv(P,A),ee();const rt=s.find(tt=>tt.id===T);H.success(e?`💰 ${W(v)} added to ${(rt==null?void 0:rt.name)||"account"}!`:`💸 ${W(v)} spent from ${(rt==null?void 0:rt.name)||"account"}.`),t&&t()}catch(P){console.error("Error saving transaction:",P),H.error("Unable to save transaction."),E.disabled=!1,E.innerHTML=e?"💰 Add Money":"💸 Save Expense"}}}})}function Td(n){const t=St.accounts,e=xs(),i=Mv();if(!Yv()){H.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const s=`
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
            ${t.map(r=>`<option value="${r.id}">${r.icon||"🏦"} ${r.name}</option>`).join("")}
          </select>
          <div class="form-error" id="tr-from-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="tr-to">To Account</label>
          <select id="tr-to" class="form-select" required>
            <option value="">Select Destination</option>
            ${t.map(r=>`<option value="${r.id}">${r.icon||"🏦"} ${r.name}</option>`).join("")}
          </select>
          <div class="form-error" id="tr-to-error"></div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          ${i}
          <span class="date-lock-badge">🔒 Today</span>
        </div>
        <input type="hidden" id="tr-date" value="${e}" />
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
  `;Ie({title:"🔄 Transfer Money Between Accounts",content:s,onOpen:r=>{const o=r.querySelector("#transfer-modal-form"),a=r.querySelector("#tr-amount"),c=r.querySelector("#tr-from"),l=r.querySelector("#tr-insufficient-warning"),d=r.querySelector("#tr-insufficient-text"),h=()=>{const f=c.value,g=Number(a.value)||0;if(!f||g<=0){l.style.display="none";return}const{balances:y}=Zn(t,St.transactions),_=y[f]||0,v=t.find(T=>T.id===f);g>_?(d.textContent=`⚠️ Insufficient Balance! Available in ${v==null?void 0:v.name}: ${W(_)}`,l.style.display="flex"):l.style.display="none"};a.oninput=h,c.onchange=h,o.onsubmit=async f=>{f.preventDefault();const g=a.value,y=c.value,_=r.querySelector("#tr-to").value,v=r.querySelector("#tr-date").value,T=r.querySelector("#tr-reason").value,k=r.querySelector("#tr-notes").value,M=Ed(v);if(M){H.error(M);return}r.querySelector("#tr-amount-error").textContent="",r.querySelector("#tr-from-error").textContent="",r.querySelector("#tr-to-error").textContent="",r.querySelector("#tr-reason-error").textContent="";let D=!0;const O=eo(g);O&&(r.querySelector("#tr-amount-error").textContent=O,D=!1),y||(r.querySelector("#tr-from-error").textContent="Select source account.",D=!1),_||(r.querySelector("#tr-to-error").textContent="Select destination account.",D=!1),y&&_&&y===_&&(r.querySelector("#tr-to-error").textContent="From and To accounts cannot be the same!",D=!1);const L=r_(T,"a reason");if(L&&(r.querySelector("#tr-reason-error").textContent=L,D=!1),!D)return;const{balances:I}=Zn(t,St.transactions),b=I[y]||0,E=t.find(P=>P.id===y),x=t.find(P=>P.id===_);if(Number(g)>b){d.textContent=`⚠️ Insufficient Balance! Available in ${E==null?void 0:E.name}: ${W(b)}`,l.style.display="flex",H.warning(`⚠️ You only have ${W(b)} available in ${E==null?void 0:E.name}.`);return}const S=r.querySelector("#btn-save-transfer");S.disabled=!0,S.innerHTML='<span class="spinner"></span> Transferring...';try{const P=St.user.uid;await qv(P,{type:"TRANSFER",amount:Number(g),date:v,reason:T,category:"Transfer",sourceAccountId:y,destinationAccountId:_,notes:k}),ee(),H.success(`🔄 Transferred ${W(g)} from ${E==null?void 0:E.name} to ${x==null?void 0:x.name}!`),n&&n()}catch(P){console.error("Error saving transfer:",P),H.error("Unable to complete transfer."),S.disabled=!1,S.innerHTML="🔄 Transfer Money"}}}})}function Id(n,t){const e=n.type==="INCOME",i=e?gd:to,s=St.accounts,r=`
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
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          📅 ${Zr(n.date)}
          <span class="date-lock-badge">🔒 Locked</span>
        </div>
        <input type="hidden" id="edit-tx-date" value="${n.date}" />
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
  `;Ie({title:"✏️ Edit Transaction",content:r,onOpen:o=>{o.querySelector("#edit-tx-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#edit-tx-amount").value,l=o.querySelector("#edit-tx-account").value,d=o.querySelector("#edit-tx-date").value,h=o.querySelector("#edit-tx-reason").value,f=o.querySelector("#edit-tx-category").value,g=o.querySelector("#edit-tx-notes").value;if(!o_({amount:c,date:d,reason:h,category:f},!1).isValid)return;const _=o.querySelector("#btn-update-tx");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Updating...';try{const v=St.user.uid,T={amount:Number(c),date:d,reason:h,category:f,notes:g};e?T.destinationAccountId=l:T.sourceAccountId=l,await Wv(v,n.id,T),ee(),H.success("✅ Transaction updated!"),t&&t()}catch{H.error("Unable to update transaction."),_.disabled=!1,_.innerHTML="✅ Update Transaction"}}}})}function Ad(n,t){const e=St.accounts,i=`
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
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          📅 ${Zr(n.date)}
          <span class="date-lock-badge">🔒 Locked</span>
        </div>
        <input type="hidden" id="edit-tr-date" value="${n.date}" />
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
  `;Ie({title:"✏️ Edit Transfer",content:i,onOpen:s=>{s.querySelector("#edit-tr-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-tr-amount").value,a=s.querySelector("#edit-tr-from").value,c=s.querySelector("#edit-tr-to").value,l=s.querySelector("#edit-tr-date").value,d=s.querySelector("#edit-tr-reason").value,h=s.querySelector("#edit-tr-notes").value;if(a===c){H.error("From and To accounts cannot be the same!");return}const f=s.querySelector("#btn-update-tr");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Updating...';try{const g=St.user.uid;await Wv(g,n.id,{amount:Number(o),date:l,reason:d,sourceAccountId:a,destinationAccountId:c,notes:h}),ee(),H.success("✅ Transfer updated!"),t&&t()}catch{H.error("Unable to update transfer."),f.disabled=!1,f.innerHTML="✅ Update Transfer"}}}})}async function xd(n,t){const e=n.type==="TRANSFER";if(await gs({icon:"🗑️",title:e?"Delete Transfer":"Delete Transaction",message:e?"Are you sure you want to delete this transfer? Both source and destination account balances will be restored.":"Are you sure you want to delete this transaction? Your account balances will automatically adjust.",confirmText:"Delete",danger:!0}))try{const s=St.user.uid;await MS(s,n.id),H.success("🗑️ Transaction deleted!"),t&&t()}catch{H.error("Unable to delete transaction.")}}let Ii={user:null,profile:null,accounts:[],transactions:[],selectedAccountId:null};function SP(n){Ii={...Ii,...n};const{accounts:t,transactions:e,selectedAccountId:i}=Ii;if(i){const o=t.find(a=>a.id===i);if(o)return PP(o,e)}const{balances:s,totalMoney:r}=Zn(t,e);return`
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
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: var(--primary); margin-top: 4px;">${W(r)}</div>
      </div>

      <!-- Account Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
        ${t.map(o=>{const a=s[o.id]||0;return`
            <div class="card hover-lift" style="cursor: pointer; position: relative;" data-account-id="${o.id}">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="font-size: 1.8rem; width: 44px; height: 44px; border-radius: 12px; background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center;">
                    ${o.icon||"💰"}
                  </div>
                  <div>
                    <div style="font-weight: var(--fw-bold); font-size: var(--fs-md);">${o.name}</div>
                    <div style="font-size: var(--fs-xs); color: var(--text-secondary);">${o.type} ${o.last4Digits?`(••${o.last4Digits})`:""}</div>
                  </div>
                </div>
              </div>
              <div style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: ${a<0?"var(--expense)":"var(--text-primary)"};">
                ${W(a)}
              </div>
              <div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-top: 4px;">
                Initial: ${W(o.initialBalance||0)}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function PP(n,t){const e=Qs(n,t,Ii.accounts);return`
    <div class="page animate-fade-in account-details-page">
      <!-- Back button -->
      <div style="margin-bottom: var(--space-4);">
        <button class="btn btn-ghost btn-sm" id="btn-back-to-accounts" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: var(--text-secondary); cursor: pointer; border: none; background: transparent; padding: 6px 0; font-size: 0.9375rem;">
          ← Back
        </button>
      </div>

      <!-- Account Header & Current Balance -->
      <div class="card card-glass" style="margin-bottom: var(--space-5); padding: 24px; text-align: center; border-radius: var(--radius-2xl);">
        <div style="font-size: 3rem; margin-bottom: 8px;">${n.icon||"🏦"}</div>
        <h1 style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: var(--text-primary); margin-bottom: 4px;">
          ${n.name}
        </h1>
        ${n.type?`<div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-bottom: 12px;">${n.type} ${n.last4Digits?`(••${n.last4Digits})`:""}</div>`:""}
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">
          Current Balance
        </div>
        <div style="font-size: var(--fs-3xl); font-weight: 900; color: ${e.balance<0?"var(--expense)":"var(--text-primary)"}; margin-top: 4px; letter-spacing: -0.02em;">
          ${W(e.balance)}
        </div>
      </div>

      <!-- SUMMARY Section -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: 20px; border-radius: var(--radius-xl);">
        <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); margin-bottom: 16px;">
          SUMMARY
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; text-align: center;">
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Money Added</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--income);">${W(e.totalAdded)}</div>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Money Spent</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--expense);">${W(e.totalSpent)}</div>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Transactions</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--text-primary);">${e.count}</div>
          </div>
        </div>
      </div>

      <!-- MONEY HISTORY Section -->
      <div class="section">
        <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); margin-bottom: 16px;">
          MONEY HISTORY
        </div>

        ${e.history.length>0?`
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${e.history.map(i=>kP(i)).join("")}
          </div>
        `:`
          <div class="card card-flat" style="padding: 36px 16px; text-align: center; color: var(--text-tertiary);">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📜</div>
            <div style="font-size: var(--fs-sm); font-weight: 500;">No transaction history for this account yet.</div>
          </div>
        `}
      </div>
    </div>
  `}function kP(n,t){let e=n.reason||n.category||n.typeLabel;n.type==="TRANSFER"&&(n.displayType==="TRANSFER_IN"?e=n.reason?n.reason:n.transferAccountName?`Transfer from ${n.transferAccountName}`:"Transfer Received":n.displayType==="TRANSFER_OUT"&&(e=n.reason?n.reason:n.transferAccountName?`Transfer to ${n.transferAccountName}`:"Transferred"));const i=Zr(n.date),s=n.createdAt?mS(n.createdAt):"";return`
    <div class="card card-flat history-item-card" style="padding: 16px 18px; border-radius: var(--radius-xl); background: var(--bg-card); border: 1px solid var(--border-color); margin-bottom: 4px;">
      
      <!-- Card Header: Indicator & Reason -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
          <span style="font-size: 1.25rem;">${n.indicator}</span>
          <div style="font-weight: 700; font-size: 0.9375rem; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${e}
          </div>
        </div>
      </div>

      <!-- Balance Flow Box -->
      <div style="background: var(--bg-tertiary); border-radius: var(--radius-lg); padding: 12px 14px; font-size: 0.875rem; margin-bottom: 12px;">
        
        <!-- Previous Balance -->
        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); margin-bottom: 6px;">
          <span>Previous Balance</span>
          <span style="font-weight: 600; color: var(--text-primary);">${W(n.previousBalance)}</span>
        </div>

        <!-- Transaction Action (Expense / Money Added / Transferred) -->
        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); margin-bottom: 8px;">
          <span>${n.actionLabel}</span>
          <span style="font-weight: 700; color: ${n.amountColor};">${n.amountSign}${W(n.amount)}</span>
        </div>

        <!-- Divider Line -->
        <div style="border-top: 1px dashed var(--border-color); margin: 6px 0 8px 0;"></div>

        <!-- Balance After (Remaining Balance / Current Balance) -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-weight: 700;">
          <span style="color: var(--text-primary);">${n.resultLabel}</span>
          <span style="font-size: 0.9375rem; color: ${n.balanceAfter<0?"var(--expense)":"var(--income)"}; font-weight: 800;">${W(n.balanceAfter)}</span>
        </div>

      </div>

      <!-- Card Footer: Type & Timestamp -->
      <div style="font-size: 0.75rem; color: var(--text-tertiary); display: flex; align-items: center; gap: 6px;">
        <span>${n.typeLabel}</span>
        <span>•</span>
        <span>${i}${s?` at ${s}`:""}</span>
      </div>

    </div>
  `}function CP(n){const t=document.getElementById("btn-back-to-accounts");if(t){t.onclick=()=>{Ii.selectedAccountId=null,window.appState&&(window.appState.selectedAccountId=null),n&&n()};return}const e=document.getElementById("btn-add-account-modal");e&&(e.onclick=()=>RP(n)),document.querySelectorAll("[data-account-id]").forEach(i=>{i.onclick=()=>{const s=i.dataset.accountId;Ii.selectedAccountId=s,window.appState&&(window.appState.selectedAccountId=s),n&&n()}})}function RP(n){Ie({title:"🏦 Add New Account",content:`
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
  `,onOpen:e=>{e.querySelector("#add-account-form").onsubmit=async i=>{i.preventDefault();const s=e.querySelector("#acc-name").value,r=e.querySelector("#acc-type").value,o=e.querySelector("#acc-initial").value,a=e.querySelector("#acc-last4").value,c=wd(s),l=eo(o);if(c){e.querySelector("#acc-name-error").textContent=c;return}if(l){e.querySelector("#acc-initial-error").textContent=l;return}const d=e.querySelector("#btn-save-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Creating...';try{await zv(Ii.user.uid,{name:s,type:r,initialBalance:Number(o),last4Digits:a}),ee(),H.success(`🏦 ${s} account created!`),n&&n()}catch{H.error("Unable to create account."),d.disabled=!1,d.innerHTML="Create Account"}}}})}let Re={user:null,profile:null,accounts:[],transactions:[]},J={searchQuery:"",typeFilter:"ALL",accountFilter:"ALL",dateFilter:"ALL",customDate:"",categoryFilter:"ALL"};function u_(n){Re={...Re,...n};const t=h_(),e=[...to.map(i=>i.value),...gd.map(i=>i.value)];return`
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
          <input type="text" id="tx-search-input" class="form-input" placeholder="Search by reason, category, account, or notes..." value="${J.searchQuery}" />
          <button class="search-clear ${J.searchQuery?"visible":""}" id="tx-search-clear">✕</button>
        </div>

        <!-- Filter Chips: Type -->
        <div class="chips-scroll" style="margin-bottom: var(--space-3);">
          <button class="chip ${J.typeFilter==="ALL"?"active":""}" data-filter-type="ALL">All (${Re.transactions.length})</button>
          <button class="chip chip-income ${J.typeFilter==="INCOME"?"active":""}" data-filter-type="INCOME">🟢 Money Added</button>
          <button class="chip chip-expense ${J.typeFilter==="EXPENSE"?"active":""}" data-filter-type="EXPENSE">🔴 Expenses</button>
          <button class="chip ${J.typeFilter==="TRANSFER"?"active":""}" data-filter-type="TRANSFER" style="${J.typeFilter==="TRANSFER"?"background: var(--primary); color: white;":""}">🔄 Transfers</button>
        </div>

        <!-- Dropdowns: Account, Category, & Date Filters -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <select id="tx-account-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Accounts</option>
            ${Re.accounts.map(i=>`
              <option value="${i.id}" ${J.accountFilter===i.id?"selected":""}>${i.icon||"🏦"} ${i.name}</option>
            `).join("")}
          </select>

          <div class="chips-scroll" style="margin-bottom: 0;">
            <button class="chip ${J.dateFilter==="ALL"?"active":""}" data-filter-date="ALL">All Time</button>
            <button class="chip ${J.dateFilter==="TODAY"?"active":""}" data-filter-date="TODAY">Today</button>
            <button class="chip ${J.dateFilter==="WEEK"?"active":""}" data-filter-date="WEEK">This Week</button>
            <button class="chip ${J.dateFilter==="MONTH"?"active":""}" data-filter-date="MONTH">This Month</button>
            <button class="chip ${J.dateFilter==="CUSTOM"?"active":""}" data-filter-date="CUSTOM">Custom Date</button>
          </div>

          ${J.dateFilter==="CUSTOM"?`
            <input type="date" id="tx-custom-date" class="form-input" style="width: auto; min-height: 36px; padding: 4px 8px; font-size: 13px;" value="${J.customDate}" />
          `:""}

          <select id="tx-category-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Categories</option>
            ${Array.from(new Set(e)).map(i=>`
              <option value="${i}" ${J.categoryFilter===i?"selected":""}>${i}</option>
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
        ${d_(t)}
      </div>
    </div>
  `}function d_(n){return Re.transactions.length===0?l_():n.length===0?AP():dr(n,{showActions:!1,showDate:!0,showNotes:!0,accounts:Re.accounts})}function h_(){let n=[...Re.transactions];if(J.searchQuery){const e=J.searchQuery.toLowerCase();n=n.filter(i=>{const s=Re.accounts.find(o=>o.id===i.sourceAccountId),r=Re.accounts.find(o=>o.id===i.destinationAccountId);return i.reason&&i.reason.toLowerCase().includes(e)||i.category&&i.category.toLowerCase().includes(e)||i.notes&&i.notes.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)||r&&r.name.toLowerCase().includes(e)})}if(J.typeFilter!=="ALL"&&(n=n.filter(e=>e.type===J.typeFilter)),J.accountFilter!=="ALL"){const e=J.accountFilter;n=n.filter(i=>i.sourceAccountId===e||i.destinationAccountId===e)}const t=xs();if(J.dateFilter==="TODAY")n=n.filter(e=>e.date===t);else if(J.dateFilter==="WEEK"){const{start:e,end:i}=Ov(t);n=n.filter(s=>s.date>=e&&s.date<=i)}else if(J.dateFilter==="MONTH"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;n=n.filter(i=>i.date&&i.date.startsWith(e))}else J.dateFilter==="CUSTOM"&&J.customDate&&(n=n.filter(e=>e.date===J.customDate));return J.categoryFilter!=="ALL"&&(n=n.filter(e=>e.category===J.categoryFilter)),n}function f_(n){const t=()=>{const d=document.getElementById("tx-list-container");if(d){const h=h_();d.innerHTML=d_(h),xp(n)}},e=document.getElementById("tx-search-input"),i=document.getElementById("tx-search-clear");e&&(e.oninput=d=>{J.searchQuery=d.target.value,i&&i.classList.toggle("visible",!!J.searchQuery),t()}),i&&(i.onclick=()=>{J.searchQuery="",e&&(e.value=""),i.classList.remove("visible"),t()}),document.querySelectorAll("[data-filter-type]").forEach(d=>{d.onclick=()=>{document.querySelectorAll("[data-filter-type]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),J.typeFilter=d.dataset.filterType,t()}});const s=document.getElementById("tx-account-filter");s&&(s.onchange=d=>{J.accountFilter=d.target.value,t()}),document.querySelectorAll("[data-filter-date]").forEach(d=>{d.onclick=()=>{if(document.querySelectorAll("[data-filter-date]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),J.dateFilter=d.dataset.filterDate,J.dateFilter==="CUSTOM"){const h=document.querySelector(".page");h&&(h.outerHTML=u_(Re),f_(n))}else t()}});const r=document.getElementById("tx-custom-date");r&&(r.onchange=d=>{J.customDate=d.target.value,t()});const o=document.getElementById("tx-category-filter");o&&(o.onchange=d=>{J.categoryFilter=d.target.value,t()});const a=document.getElementById("btn-tx-add-income");a&&(a.onclick=()=>Ti("INCOME",n));const c=document.getElementById("btn-tx-add-expense");c&&(c.onclick=()=>Ti("EXPENSE",n));const l=document.getElementById("btn-tx-transfer");l&&(l.onclick=()=>Td(n)),xp(n)}function xp(n){document.querySelectorAll("#tx-list-container .transaction-action-btn[data-action]").forEach(t=>{t.onclick=e=>{e.stopPropagation();const i=t.dataset.action,s=t.dataset.txId,r=Re.transactions.find(o=>o.id===s);r&&(i==="edit"?r.type==="TRANSFER"?Ad(r,n):Id(r,n):i==="delete"&&xd(r,n))}})}let be={user:null,profile:null,accounts:[],transactions:[]},an="DAY",Js=xs(),Yl=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;function ra(n){be={...be,...n};let t="",e="";if(an==="DAY"){const i=Lv(be.transactions,Js);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Added</div>
          <div class="daily-summary-value income">${W(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Spent</div>
          <div class="daily-summary-value expense">${W(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${W(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Change</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${W(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?dr(i.transactions,{showActions:!0,showDate:!1,accounts:be.accounts}):rl()}else if(an==="WEEK"){const i=xS(be.transactions,Js);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Income</div>
          <div class="daily-summary-value income">${W(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Expenses</div>
          <div class="daily-summary-value expense">${W(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${W(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${W(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?dr(i.transactions,{showActions:!0,showDate:!0,accounts:be.accounts}):rl()}else if(an==="MONTH"){const i=Vv(be.transactions,Yl);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Income</div>
          <div class="daily-summary-value income">${W(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Expenses</div>
          <div class="daily-summary-value expense">${W(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${W(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${W(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?dr(i.transactions,{showActions:!0,showDate:!0,accounts:be.accounts}):rl()}return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Date-wise Money Control 📅</h1>
        <p class="page-subtitle">Track income, expenses, and account transfers on any specific date.</p>
      </div>

      <!-- View Switcher Tabs -->
      <div class="tabs">
        <div class="tab ${an==="DAY"?"active":""}" data-view="DAY">Day View</div>
        <div class="tab ${an==="WEEK"?"active":""}" data-view="WEEK">Week View</div>
        <div class="tab ${an==="MONTH"?"active":""}" data-view="MONTH">Month View</div>
      </div>

      <!-- Date Controls -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        ${an==="MONTH"?`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <label class="form-label" style="margin: 0; font-weight: var(--fw-semibold);">Select Month:</label>
            <input type="month" id="mc-month-picker" class="form-input" style="width: auto;" value="${Yl}" />
          </div>
        `:`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <span style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">
                ${an==="DAY"?"Selected Date":"Week Containing"}
              </span>
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${gS(Js)}</div>
            </div>
            <input type="date" id="mc-date-picker" class="form-input" style="width: auto;" value="${Js}" />
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
  `}function oa(n){document.querySelectorAll(".tab[data-view]").forEach(i=>{i.onclick=()=>{an=i.dataset.view;const s=document.querySelector(".page");s&&(s.outerHTML=ra(be),oa(n))}});const t=document.getElementById("mc-date-picker");t&&(t.onchange=i=>{Js=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=ra(be),oa(n))});const e=document.getElementById("mc-month-picker");e&&(e.onchange=i=>{Yl=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=ra(be),oa(n))}),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(i=>{i.onclick=s=>{s.stopPropagation();const r=i.dataset.action,o=i.dataset.txId,a=be.transactions.find(c=>c.id===o);a&&(r==="edit"?a.type==="TRANSFER"?Ad(a,n):Id(a,n):r==="delete"&&xd(a,n))}})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function no(n){return n+.5|0}const Nn=(n,t,e)=>Math.max(Math.min(n,e),t);function Zs(n){return Nn(no(n*2.55),0,255)}function qn(n){return Nn(no(n*255),0,255)}function un(n){return Nn(no(n/2.55)/100,0,1)}function Sp(n){return Nn(no(n*100),0,100)}const _e={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Xl=[..."0123456789ABCDEF"],MP=n=>Xl[n&15],DP=n=>Xl[(n&240)>>4]+Xl[n&15],Do=n=>(n&240)>>4===(n&15),OP=n=>Do(n.r)&&Do(n.g)&&Do(n.b)&&Do(n.a);function NP(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&_e[n[1]]*17,g:255&_e[n[2]]*17,b:255&_e[n[3]]*17,a:t===5?_e[n[4]]*17:255}:(t===7||t===9)&&(e={r:_e[n[1]]<<4|_e[n[2]],g:_e[n[3]]<<4|_e[n[4]],b:_e[n[5]]<<4|_e[n[6]],a:t===9?_e[n[7]]<<4|_e[n[8]]:255})),e}const LP=(n,t)=>n<255?t(n):"";function VP(n){var t=OP(n)?MP:DP;return n?"#"+t(n.r)+t(n.g)+t(n.b)+LP(n.a,t):void 0}const FP=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function p_(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function BP(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function $P(n,t,e){const i=p_(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function UP(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function Sd(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=UP(e,i,s,d,r),c=c*60+.5),[c|0,l||0,a]}function Pd(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(qn)}function kd(n,t,e){return Pd(p_,n,t,e)}function zP(n,t,e){return Pd($P,n,t,e)}function jP(n,t,e){return Pd(BP,n,t,e)}function g_(n){return(n%360+360)%360}function HP(n){const t=FP.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?Zs(+t[5]):qn(+t[5]));const s=g_(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=zP(s,r,o):t[1]==="hsv"?i=jP(s,r,o):i=kd(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function qP(n,t){var e=Sd(n);e[0]=g_(e[0]+t),e=kd(e),n.r=e[0],n.g=e[1],n.b=e[2]}function WP(n){if(!n)return;const t=Sd(n),e=t[0],i=Sp(t[1]),s=Sp(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${un(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const Pp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},kp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function GP(){const n={},t=Object.keys(kp),e=Object.keys(Pp);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Pp[r]);r=parseInt(kp[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Oo;function KP(n){Oo||(Oo=GP(),Oo.transparent=[0,0,0,0]);const t=Oo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const YP=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function XP(n){const t=YP.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?Zs(o):Nn(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?Zs(i):Nn(i,0,255)),s=255&(t[4]?Zs(s):Nn(s,0,255)),r=255&(t[6]?Zs(r):Nn(r,0,255)),{r:i,g:s,b:r,a:e}}}function QP(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${un(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const ol=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Wi=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function JP(n,t,e){const i=Wi(un(n.r)),s=Wi(un(n.g)),r=Wi(un(n.b));return{r:qn(ol(i+e*(Wi(un(t.r))-i))),g:qn(ol(s+e*(Wi(un(t.g))-s))),b:qn(ol(r+e*(Wi(un(t.b))-r))),a:n.a+e*(t.a-n.a)}}function No(n,t,e){if(n){let i=Sd(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=kd(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function m_(n,t){return n&&Object.assign(t||{},n)}function Cp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=qn(n[3]))):(t=m_(n,{r:0,g:0,b:0,a:1}),t.a=qn(t.a)),t}function ZP(n){return n.charAt(0)==="r"?XP(n):HP(n)}class kr{constructor(t){if(t instanceof kr)return t;const e=typeof t;let i;e==="object"?i=Cp(t):e==="string"&&(i=NP(t)||KP(t)||ZP(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=m_(this._rgb);return t&&(t.a=un(t.a)),t}set rgb(t){this._rgb=Cp(t)}rgbString(){return this._valid?QP(this._rgb):void 0}hexString(){return this._valid?VP(this._rgb):void 0}hslString(){return this._valid?WP(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=JP(this._rgb,t._rgb,e)),this}clone(){return new kr(this.rgb)}alpha(t){return this._rgb.a=qn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=no(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return No(this._rgb,2,t),this}darken(t){return No(this._rgb,2,-t),this}saturate(t){return No(this._rgb,1,t),this}desaturate(t){return No(this._rgb,1,-t),this}rotate(t){return qP(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function on(){}const tk=(()=>{let n=0;return()=>n++})();function et(n){return n==null}function wt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function st(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function kt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function me(n,t){return kt(n)?n:t}function X(n,t){return typeof n>"u"?t:n}const ek=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,y_=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function pt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function ut(n,t,e,i){let s,r,o;if(wt(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(st(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function Ba(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function $a(n){if(wt(n))return n.map($a);if(st(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=$a(n[e[s]]);return t}return n}function v_(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function nk(n,t,e,i){if(!v_(n))return;const s=t[n],r=e[n];st(s)&&st(r)?Cr(s,r,i):t[n]=$a(r)}function Cr(n,t,e){const i=wt(t)?t:[t],s=i.length;if(!st(n))return n;e=e||{};const r=e.merger||nk;let o;for(let a=0;a<s;++a){if(o=i[a],!st(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function hr(n,t){return Cr(n,t,{merger:ik})}function ik(n,t,e){if(!v_(n))return;const i=t[n],s=e[n];st(i)&&st(s)?hr(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=$a(s))}const Rp={"":n=>n,x:n=>n.x,y:n=>n.y};function sk(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function rk(n){const t=sk(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function ti(n,t){return(Rp[t]||(Rp[t]=rk(t)))(n)}function Cd(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Rr=n=>typeof n<"u",ei=n=>typeof n=="function",Mp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function ok(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const ct=Math.PI,_t=2*ct,ak=_t+ct,Ua=Number.POSITIVE_INFINITY,ck=ct/180,Rt=ct/2,di=ct/4,Dp=ct*2/3,Ln=Math.log10,Xe=Math.sign;function fr(n,t,e){return Math.abs(n-t)<e}function Op(n){const t=Math.round(n);n=fr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Ln(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function lk(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function uk(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function ms(n){return!uk(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function dk(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function __(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Me(n){return n*(ct/180)}function Rd(n){return n*(180/ct)}function Np(n){if(!kt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function b_(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*ct&&(r+=_t),{angle:r,distance:s}}function Ql(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function hk(n,t){return(n-t+ak)%_t-ct}function Zt(n){return(n%_t+_t)%_t}function Mr(n,t,e,i){const s=Zt(n),r=Zt(t),o=Zt(e),a=Zt(r-s),c=Zt(o-s),l=Zt(s-r),d=Zt(s-o);return s===r||s===o||i&&r===o||a>c&&l<d}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function fk(n){return $t(n,-32768,32767)}function fn(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function Md(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const pn=(n,t,e,i)=>Md(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),pk=(n,t,e)=>Md(n,e,i=>n[i][t]>=e);function gk(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const w_=["push","pop","shift","splice","unshift"];function mk(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),w_.forEach(e=>{const i="_onData"+Cd(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Lp(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(w_.forEach(r=>{delete n[r]}),delete n._chartjs)}function E_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const T_=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function I_(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,T_.call(window,()=>{i=!1,n.apply(t,e)}))}}function yk(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const Dd=n=>n==="start"?"left":n==="end"?"right":"center",Qt=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,vk=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function A_(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:g,maxDefined:y}=o.getUserBounds();if(g){if(s=Math.min(pn(c,d,h).lo,e?i:pn(t,d,o.getPixelForValue(h)).lo),l){const _=c.slice(0,s+1).reverse().findIndex(v=>!et(v[a.axis]));s-=Math.max(0,_)}s=$t(s,0,i-1)}if(y){let _=Math.max(pn(c,o.axis,f,!0).hi+1,e?0:pn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const v=c.slice(_-1).findIndex(T=>!et(T[a.axis]));_+=Math.max(0,v)}r=$t(_,s,i)-s}else r=i-s}return{start:s,count:r}}function x_(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const Lo=n=>n===0||n===1,Vp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*_t/e)),Fp=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*_t/e)+1,pr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Rt)+1,easeOutSine:n=>Math.sin(n*Rt),easeInOutSine:n=>-.5*(Math.cos(ct*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Lo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Lo(n)?n:Vp(n,.075,.3),easeOutElastic:n=>Lo(n)?n:Fp(n,.075,.3),easeInOutElastic(n){return Lo(n)?n:n<.5?.5*Vp(n*2,.1125,.45):.5+.5*Fp(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-pr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?pr.easeInBounce(n*2)*.5:pr.easeOutBounce(n*2-1)*.5+.5};function Od(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Bp(n){return Od(n)?n:new kr(n)}function al(n){return Od(n)?n:new kr(n).saturate(.5).darken(.1).hexString()}const _k=["x","y","borderWidth","radius","tension"],bk=["color","borderColor","backgroundColor"];function wk(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:bk},numbers:{type:"number",properties:_k}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Ek(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const $p=new Map;function Tk(n,t){t=t||{};const e=n+JSON.stringify(t);let i=$p.get(e);return i||(i=new Intl.NumberFormat(n,t),$p.set(e,i)),i}function io(n,t,e){return Tk(t,e).format(n)}const S_={values(n){return wt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=Ik(n,e)}const o=Ln(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),io(n,i,c)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(Ln(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?S_.numeric.call(this,n,t,e):""}};function Ik(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var mc={formatters:S_};function Ak(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:mc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Oi=Object.create(null),Jl=Object.create(null);function gr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function cl(n,t,e){return typeof t=="string"?Cr(gr(n,t),e):Cr(gr(n,""),t)}class xk{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>al(s.backgroundColor),this.hoverBorderColor=(i,s)=>al(s.borderColor),this.hoverColor=(i,s)=>al(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return cl(this,t,e)}get(t){return gr(this,t)}describe(t,e){return cl(Jl,t,e)}override(t,e){return cl(Oi,t,e)}route(t,e,i,s){const r=gr(this,t),o=gr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[s];return st(c)?Object.assign({},l,c):X(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Et=new xk({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[wk,Ek,Ak]);function Sk(n){return!n||et(n.size)||et(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function za(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function Pk(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!wt(h))o=za(n,s,r,o,h);else if(wt(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!wt(f)&&(o=za(n,s,r,o,f));n.restore();const g=r.length/2;if(g>e.length){for(c=0;c<g;c++)delete s[r[c]];r.splice(0,g)}return o}function hi(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Up(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Zl(n,t,e,i){P_(n,t,e,i,null)}function P_(n,t,e,i,s){let r,o,a,c,l,d,h,f;const g=t.pointStyle,y=t.rotation,_=t.radius;let v=(y||0)*ck;if(g&&typeof g=="object"&&(r=g.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(v),n.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),g){default:s?n.ellipse(e,i,s/2,_,0,0,_t):n.arc(e,i,_,0,_t),n.closePath();break;case"triangle":d=s?s/2:_,n.moveTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=Dp,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=Dp,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),n.closePath();break;case"rectRounded":l=_*.516,c=_-l,o=Math.cos(v+di)*c,h=Math.cos(v+di)*(s?s/2-l:c),a=Math.sin(v+di)*c,f=Math.sin(v+di)*(s?s/2-l:c),n.arc(e-h,i-a,l,v-ct,v-Rt),n.arc(e+f,i-o,l,v-Rt,v),n.arc(e+h,i+a,l,v,v+Rt),n.arc(e-f,i+o,l,v+Rt,v+ct),n.closePath();break;case"rect":if(!y){c=Math.SQRT1_2*_,d=s?s/2:c,n.rect(e-d,i-c,2*d,2*c);break}v+=di;case"rectRot":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+f,i-o),n.lineTo(e+h,i+a),n.lineTo(e-f,i+o),n.closePath();break;case"crossRot":v+=di;case"cross":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"star":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o),v+=di,h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"line":o=s?s/2:Math.cos(v)*_,a=Math.sin(v)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(v)*(s?s/2:_),i+Math.sin(v)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function gn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function yc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function vc(n){n.restore()}function kk(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function Ck(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Rk(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),et(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function Mk(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=s.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function Dk(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Ni(n,t,e,i,s,r={}){const o=wt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=s.string,Rk(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&Dk(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),et(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,i,r.maxWidth)),n.fillText(l,e,i,r.maxWidth),Mk(n,e,i,l,r),i+=Number(s.lineHeight);n.restore()}function Dr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*ct,ct,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,ct,Rt,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Rt,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Rt,!0),n.lineTo(e+o.topLeft,i)}const Ok=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Nk=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Lk(n,t){const e=(""+n).match(Ok);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const Vk=n=>+n||0;function Nd(n,t){const e={},i=st(t),s=i?Object.keys(t):t,r=st(n)?i?o=>X(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=Vk(r(o));return e}function k_(n){return Nd(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Ai(n){return Nd(n,["topLeft","topRight","bottomLeft","bottomRight"])}function se(n){const t=k_(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Vt(n,t){n=n||{},t=t||Et.font;let e=X(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=X(n.style,t.style);i&&!(""+i).match(Nk)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:X(n.family,t.family),lineHeight:Lk(X(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:X(n.weight,t.weight),string:""};return s.string=Sk(s),s}function tr(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function Fk(n,t,e){const{min:i,max:s}=n,r=y_(t,(s-i)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function oi(n,t){return Object.assign(Object.create(n),t)}function Ld(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=D_("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Ld([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return R_(a,c,()=>Wk(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return jp(a).includes(c)},ownKeys(a){return jp(a)},set(a,c,l){const d=a._storage||(a._storage=s());return a[c]=d[c]=l,delete a._keys,!0}})}function ys(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:C_(n,i),setContext:r=>ys(n,r,e,i),override:r=>ys(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return R_(r,o,()=>$k(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function C_(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:ei(e)?e:()=>e,isIndexable:ei(i)?i:()=>i}}const Bk=(n,t)=>n?n+Cd(t):t,Vd=(n,t)=>st(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function R_(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function $k(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return ei(a)&&o.isScriptable(t)&&(a=Uk(t,a,n,e)),wt(a)&&a.length&&(a=zk(t,a,n,o.isIndexable)),Vd(t,a)&&(a=ys(a,s,r&&r[t],o)),a}function Uk(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||i);return a.delete(n),Vd(n,c)&&(c=Fd(s._scopes,s,n,c)),c}function zk(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(st(t[0])){const c=t,l=s._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=Fd(l,s,n,d);t.push(ys(h,r,o&&o[n],a))}}return t}function M_(n,t,e){return ei(n)?n(t,e):n}const jk=(n,t)=>n===!0?t:typeof n=="string"?ti(t,n):void 0;function Hk(n,t,e,i,s){for(const r of t){const o=jk(e,r);if(o){n.add(o);const a=M_(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function Fd(n,t,e,i){const s=t._rootScopes,r=M_(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let c=zp(a,o,e,r||e,i);return c===null||typeof r<"u"&&r!==e&&(c=zp(a,o,r,c,i),c===null)?!1:Ld(Array.from(a),[""],s,r,()=>qk(t,e,i))}function zp(n,t,e,i,s){for(;e;)e=Hk(n,t,e,i,s);return e}function qk(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return wt(s)&&st(e)?e:s||{}}function Wk(n,t,e,i){let s;for(const r of t)if(s=D_(Bk(r,n),e),typeof s<"u")return Vd(n,s)?Fd(e,i,n,s):s}function D_(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function jp(n){let t=n._keys;return t||(t=n._keys=Gk(n._scopes)),t}function Gk(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function O_(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,d;for(a=0,c=i;a<c;++a)l=a+e,d=t[l],o[a]={r:s.parse(ti(d,r),l)};return o}const Kk=Number.EPSILON||1e-14,vs=(n,t)=>t<n.length&&!n[t].skip&&n[t],N_=n=>n==="x"?"y":"x";function Yk(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Ql(r,s),c=Ql(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=i*l,f=i*d;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function Xk(n,t,e){const i=n.length;let s,r,o,a,c,l=vs(n,0);for(let d=0;d<i-1;++d)if(c=l,l=vs(n,d+1),!(!c||!l)){if(fr(t[d],0,Kk)){e[d]=e[d+1]=0;continue}s=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=s*o*t[d],e[d+1]=r*o*t[d])}}function Qk(n,t,e="x"){const i=N_(e),s=n.length;let r,o,a,c=vs(n,0);for(let l=0;l<s;++l){if(o=a,a=c,c=vs(n,l+1),!a)continue;const d=a[e],h=a[i];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${i}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${i}`]=h+r*t[l])}}function Jk(n,t="x"){const e=N_(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=vs(n,0);for(o=0;o<i;++o)if(a=c,c=l,l=vs(n,o+1),!!c){if(l){const d=l[t]-c[t];s[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?Xe(s[o-1])!==Xe(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Xk(n,s,r),Qk(n,r,t)}function Vo(n,t,e){return Math.max(Math.min(n,e),t)}function Zk(n,t){let e,i,s,r,o,a=gn(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&gn(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=Vo(s.cp1x,t.left,t.right),s.cp1y=Vo(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Vo(s.cp2x,t.left,t.right),s.cp2y=Vo(s.cp2y,t.top,t.bottom)))}function tC(n,t,e,i,s){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")Jk(n,s);else{let l=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=Yk(l,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&Zk(n,e)}function Bd(){return typeof window<"u"&&typeof document<"u"}function $d(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function ja(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const _c=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function eC(n,t){return _c(n).getPropertyValue(t)}const nC=["top","right","bottom","left"];function xi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=nC[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const iC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function sC(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(iC(s,r,n.target))a=s,c=r;else{const l=t.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function mi(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=_c(e),r=s.boxSizing==="border-box",o=xi(s,"padding"),a=xi(s,"border","width"),{x:c,y:l,box:d}=sC(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:g,height:y}=t;return r&&(g-=o.width+a.width,y-=o.height+a.height),{x:Math.round((c-h)/g*e.width/i),y:Math.round((l-f)/y*e.height/i)}}function rC(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&$d(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=_c(r),c=xi(a,"border","width"),l=xi(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,i=ja(a.maxWidth,r,"clientWidth"),s=ja(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||Ua,maxHeight:s||Ua}}const Vn=n=>Math.round(n*10)/10;function oC(n,t,e,i){const s=_c(n),r=xi(s,"margin"),o=ja(s.maxWidth,n,"clientWidth")||Ua,a=ja(s.maxHeight,n,"clientHeight")||Ua,c=rC(n,t,e);let{width:l,height:d}=c;if(s.boxSizing==="content-box"){const f=xi(s,"border","width"),g=xi(s,"padding");l-=g.width+f.width,d-=g.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,i?l/i:d-r.height),l=Vn(Math.min(l,o,c.maxWidth)),d=Vn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=Vn(l/2)),(t!==void 0||e!==void 0)&&i&&c.height&&d>c.height&&(d=c.height,l=Vn(Math.floor(d*i))),{width:l,height:d}}function Hp(n,t,e){const i=t||1,s=Vn(n.height*i),r=Vn(n.width*i);n.height=Vn(n.height),n.width=Vn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const aC=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Bd()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function qp(n,t){const e=eC(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function yi(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function cC(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function lC(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=yi(n,s,e),a=yi(s,r,e),c=yi(r,t,e),l=yi(o,a,e),d=yi(a,c,e);return yi(l,d,e)}const uC=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},dC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function as(n,t,e){return n?uC(t,e):dC()}function L_(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function V_(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function F_(n){return n==="angle"?{between:Mr,compare:hk,normalize:Zt}:{between:fn,compare:(t,e)=>t-e,normalize:t=>t}}function Wp({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function hC(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=F_(i),c=t.length;let{start:l,end:d,loop:h}=n,f,g;if(h){for(l+=c,d+=c,f=0,g=c;f<g&&o(a(t[l%c][i]),s,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function B_(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=F_(i),{start:d,end:h,loop:f,style:g}=hC(n,t,e),y=[];let _=!1,v=null,T,k,M;const D=()=>c(s,M,T)&&a(s,M)!==0,O=()=>a(r,T)===0||c(r,M,T),L=()=>_||D(),I=()=>!_||O();for(let b=d,E=d;b<=h;++b)k=t[b%o],!k.skip&&(T=l(k[i]),T!==M&&(_=c(T,s,r),v===null&&L()&&(v=a(T,s)===0?b:E),v!==null&&I()&&(y.push(Wp({start:v,end:b,loop:f,count:o,style:g})),v=null),E=b,M=T));return v!==null&&y.push(Wp({start:v,end:h,loop:f,count:o,style:g})),y}function $_(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=B_(i[s],n.points,t);r.length&&e.push(...r)}return e}function fC(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function pC(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:t%s,end:(c-1)%s,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function gC(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=fC(e,s,r,i);if(i===!0)return Gp(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+s:a,l=!!n._fullLoop&&o===0&&a===s-1;return Gp(n,pC(e,o,c,l),e,t)}function Gp(n,t,e,i){return!i||!i.setContext||!e?t:mC(n,t,e,i)}function mC(n,t,e,i){const s=n._chart.getContext(),r=Kp(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function g(y,_,v,T){const k=a?-1:1;if(y!==_){for(y+=c;e[y%c].skip;)y-=k;for(;e[_%c].skip;)_+=k;y%c!==_%c&&(l.push({start:y%c,end:_%c,loop:v,style:T}),d=T,h=_%c)}}for(const y of t){h=a?h:y.start;let _=e[h%c],v;for(f=h+1;f<=y.end;f++){const T=e[f%c];v=Kp(i.setContext(oi(s,{type:"segment",p0:_,p1:T,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),yC(v,d)&&g(h,f-1,y.loop,d),_=T,d=v}h<f-1&&g(h,f-1,y.loop,d)}return l}function Kp(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function yC(n,t){if(!t)return!1;const e=[],i=function(s,r){return Od(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function Fo(n,t,e){return n.options.clip?n[e]:t[e]}function vC(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:Fo(e,t,"left"),right:Fo(e,t,"right"),top:Fo(i,t,"top"),bottom:Fo(i,t,"bottom")}:t}function U_(n,t){const e=t._clip;if(e.disabled)return!1;const i=vC(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class _C{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=T_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var cn=new _C;const Yp="transparent",bC={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Bp(n||Yp),s=i.valid&&Bp(t||Yp);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class wC{constructor(t,e,i,s){const r=e[i];s=tr([t.to,s,r,t.from]);const o=tr([t.from,r,s]);this._active=!0,this._fn=t.fn||bC[t.type||typeof o],this._easing=pr[t.easing]||pr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=tr([t.to,e,s,t.from]),this._from=tr([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}c=e/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class z_{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!st(t))return;const e=Object.keys(Et.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!st(r))return;const o={};for(const a of e)o[a]=r[a];(wt(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=TC(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&EC(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new wC(f,t,l,d),s.push(h)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return cn.add(this._chart,i),!0}}function EC(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function TC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Xp(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function IC(n,t,e){if(e===!1)return!1;const i=Xp(n,e),s=Xp(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function AC(n){let t,e,i,s;return st(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function j_(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Qp(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===e){if(d=!0,i.all)continue;break}l=n.values[c],kt(l)&&(r||t===0||Xe(t)===Xe(l))&&(t+=l)}return!d&&!i.all?0:t}function xC(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[s]:d,[r]:n[d]};return a}function ll(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function SC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function PC(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function kC(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Jp(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Zp(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,d=SC(r,o,i),h=t.length;let f;for(let g=0;g<h;++g){const y=t[g],{[c]:_,[l]:v}=y,T=y._stacks||(y._stacks={});f=T[l]=kC(s,d,_),f[a]=v,f._top=Jp(f,o,!0,i.type),f._bottom=Jp(f,o,!1,i.type);const k=f._visualValues||(f._visualValues={});k[a]=v}}function ul(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function CC(n,t){return oi(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function RC(n,t,e){return oi(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function $s(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const dl=n=>n==="reset"||n==="none",tg=(n,t)=>t?n:Object.assign({},n),MC=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:j_(e,!0),values:null};class De{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ll(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&$s(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(h,f,g,y)=>h==="x"?f:h==="r"?y:g,r=e.xAxisID=X(i.xAxisID,ul(t,"x")),o=e.yAxisID=X(i.yAxisID,ul(t,"y")),a=e.rAxisID=X(i.rAxisID,ul(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),d=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Lp(this._data,this),t._stacked&&$s(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(st(e)){const s=this._cachedMeta;this._data=xC(e,s)}else if(i!==e){if(i){Lp(i,this);const s=this._cachedMeta;$s(s),s._parsed=[]}e&&Object.isExtensible(e)&&mk(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=ll(e.vScale,e),e.stack!==i.stack&&(s=!0,$s(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(Zp(this,e._parsed),e._stacked=ll(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=t===0&&e===s.length?!0:i._sorted,l=t>0&&i._parsed[t-1],d,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{wt(s[t])?f=this.parseArrayData(i,s,t,e):st(s[t])?f=this.parseObjectData(i,s,t,e):f=this.parsePrimitiveData(i,s,t,e);const g=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)i._parsed[d+t]=h=f[d],c&&(g()&&(c=!1),l=h);i._sorted=c}o&&Zp(this,f)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(s);let f,g,y;for(f=0,g=s;f<g;++f)y=f+i,h[f]={[a]:d||r.parse(l[y],y),[c]:o.parse(e[y],y)};return h}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let c,l,d,h;for(c=0,l=s;c<l;++c)d=c+i,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let d,h,f,g;for(d=0,h=s;d<h;++d)f=d+i,g=e[f],l[d]={x:r.parse(ti(g,a),f),y:o.parse(ti(g,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:j_(s,!0),values:e._stacks[t.axis]._visualValues};return Qp(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Qp(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),c=MC(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=PC(a);let f,g;function y(){g=s[f];const _=g[a.axis];return!kt(g[t.axis])||d>_||h<_}for(f=0;f<o&&!(!y()&&(this.updateRangeFromParsed(l,t,g,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!y()){this.updateRangeFromParsed(l,t,g,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],kt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=AC(X(this.options.clip,IC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=s[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=RC(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=CC(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Rr(i);if(a)return tg(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),g=Object.keys(Et.elements[t]),y=()=>this.getContext(i,s,e),_=l.resolveNamedOptions(f,g,y,h);return _.$shared&&(_.$shared=c,r[o]=Object.freeze(tg(_,c))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,i,e))}const l=new z_(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||dl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){dl(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!dl(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&$s(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(De,"defaults",{}),U(De,"datasetElementType",null),U(De,"dataElementType",null);function DC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=E_(i.sort((s,r)=>s-r))}return n._cache.$bar}function OC(n){const t=n.iScale,e=DC(t,n.type);let i=t._length,s,r,o,a;const c=()=>{o===32767||o===-32768||(Rr(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),c();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),c();return i}function NC(n,t,e,i){const s=e.barThickness;let r,o;return et(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function LC(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:e.barPercentage,start:l}}function VC(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:s,end:r,min:o,max:a}}function H_(n,t,e,i){return wt(n)?VC(n,t,e,i):t[e.axis]=e.parse(n,i),t}function eg(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,c=[];let l,d,h,f;for(l=e,d=e+i;l<d;++l)f=t[l],h={},h[s.axis]=a||s.parse(o[l],l),c.push(H_(f,h,r,l));return c}function hl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function FC(n,t,e){return n!==0?Xe(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function BC(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function $C(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=BC(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=l:(e._bottom||0)===i?s=d:(r[ng(d,o,a,c)]=!0,s=l)),r[ng(s,o,a,c)]=!0,n.borderSkipped=r}function ng(n,t,e,i){return i?(n=UC(n,t,e),n=ig(n,e,t)):n=ig(n,t,e),n}function UC(n,t,e){return n===t?e:n===e?t:n}function ig(n,t,e){return n==="start"?t:n==="end"?e:n}function zC(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class aa extends De{parsePrimitiveData(t,e,i,s){return eg(t,e,i,s)}parseArrayData(t,e,i,s){return eg(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,g,y,_;for(f=i,g=i+s;f<g;++f)_=e[f],y={},y[r.axis]=r.parse(ti(_,l),f),h.push(H_(ti(_,d),y,o,f));return h}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=hl(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,s);for(let g=e;g<e+i;g++){const y=this.getParsed(g),_=r||et(y[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(g),v=this._calculateBarIndexPixels(g,d),T=(y._stacks||{})[a.axis],k={horizontal:l,base:_.base,enableBorderRadius:!T||hl(y._custom)||o===T._top||o===T._bottom,x:l?_.head:v.center,y:l?v.center:_.head,height:l?v.size:Math.abs(_.size),width:l?Math.abs(_.size):v.size};f&&(k.options=h||this.resolveDataElementOptions(g,t[g].active?"active":s));const M=k.options||t[g].options;$C(k,M,T,o),zC(k,M,d.ratio),this.updateElement(t[g],g,k,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[i.axis],l=d=>{const h=d._parsed.find(g=>g[i.axis]===c),f=h&&h[d.vScale.axis];if(et(f)||isNaN(f))return!0};for(const d of s)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[X(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||OC(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=hl(l);let h=c[e.axis],f=0,g=i?this.applyStack(e,c,i):h,y,_;g!==h&&(f=g-h,g=h),d&&(h=l.barStart,g=l.barEnd-l.barStart,h!==0&&Xe(h)!==Xe(l.barEnd)&&(f=0),f+=h);const v=!et(r)&&!d?r:f;let T=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(f+g):y=T,_=y-T,Math.abs(_)<o){_=FC(_,e,a)*o,h===a&&(T-=_/2);const k=e.getPixelForDecimal(0),M=e.getPixelForDecimal(1),D=Math.min(k,M),O=Math.max(k,M);T=Math.max(Math.min(T,O),D),y=T+_,i&&!d&&(c._stacks[e.axis]._visualValues[s]=e.getValueForPixel(y)-e.getValueForPixel(T))}if(T===e.getPixelForValue(a)){const k=Xe(_)*e.getLineWidthForValue(a)/2;T+=k,_-=k}return{size:_,base:T,head:y,center:y+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=X(s.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?LC(t,e,s,d*l):NC(t,e,s,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(X(f,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+g;a=h.start+h.chunk*y+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}U(aa,"id","bar"),U(aa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),U(aa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class ca extends De{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=X(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=X(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:i[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,s),d=o.axis,h=a.axis;for(let f=e;f<e+i;f++){const g=t[f],y=!r&&this.getParsed(f),_={},v=_[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(y[d]),T=_[h]=r?a.getBasePixel():a.getPixelForValue(y[h]);_.skip=isNaN(v)||isNaN(T),l&&(_.options=c||this.resolveDataElementOptions(f,g.active?"active":s),r&&(_.options.radius=0)),this.updateElement(g,f,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=X(i&&i._custom,r),s}}U(ca,"id","bubble"),U(ca,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),U(ca,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function jC(n,t,e){let i=1,s=1,r=0,o=0;if(t<_t){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),g=(M,D,O)=>Mr(M,a,c,!0)?1:Math.max(D,D*e,O,O*e),y=(M,D,O)=>Mr(M,a,c,!0)?-1:Math.min(D,D*e,O,O*e),_=g(0,l,h),v=g(Rt,d,f),T=y(ct,l,h),k=y(ct+Rt,d,f);i=(_-T)/2,s=(v-k)/2,r=-(_+T)/2,o=-(v+k)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class _i extends De{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=c=>+i[c];if(st(i[t])){const{key:c="value"}=this._parsing;r=l=>+ti(i[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return Me(this.options.rotation-90)}_getCircumference(){return Me(this.options.circumference)}_getRotationExtents(){let t=_t,e=-_t;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(ek(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:y,offsetY:_}=jC(h,d,c),v=(i.width-o)/f,T=(i.height-o)/g,k=Math.max(Math.min(v,T)/2,0),M=y_(this.options.radius,k),D=Math.max(M*c,0),O=(M-D)/this._getVisibleDatasetWeightTotal();this.offsetX=y*M,this.offsetY=_*M,s.total=this.calculateTotal(),this.outerRadius=M-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/_t)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,g=f?0:this.innerRadius,y=f?0:this.outerRadius,{sharedOptions:_,includeOptions:v}=this._getSharedOptions(e,s);let T=this._getRotation(),k;for(k=0;k<e;++k)T+=this._circumference(k,r);for(k=e;k<e+i;++k){const M=this._circumference(k,r),D=t[k],O={x:d+this.offsetX,y:h+this.offsetY,startAngle:T,endAngle:T+M,circumference:M,outerRadius:y,innerRadius:g};v&&(O.options=_||this.resolveDataElementOptions(k,D.active?"active":s)),T+=M,this.updateElement(D,k,O,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?_t*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=io(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,c;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)c=a.resolveDataElementOptions(s),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(X(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}U(_i,"id","doughnut"),U(_i,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),U(_i,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),U(_i,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class la extends De{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=A_(e,s,o);this._drawStart=a,this._drawCount=c,x_(e)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,s),f=o.axis,g=a.axis,{spanGaps:y,segment:_}=this.options,v=ms(y)?y:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||r||s==="none",k=e+i,M=t.length;let D=e>0&&this.getParsed(e-1);for(let O=0;O<M;++O){const L=t[O],I=T?L:{};if(O<e||O>=k){I.skip=!0;continue}const b=this.getParsed(O),E=et(b[g]),x=I[f]=o.getPixelForValue(b[f],O),S=I[g]=r||E?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[g],O);I.skip=isNaN(x)||isNaN(S)||E,I.stop=O>0&&Math.abs(b[f]-D[f])>v,_&&(I.parsed=b,I.raw=l.data[O]),h&&(I.options=d||this.resolveDataElementOptions(O,L.active?"active":s)),T||this.updateElement(L,O,I,s),D=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(la,"id","line"),U(la,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(la,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class mr extends De{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=io(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return O_.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*ct;let g=f,y;const _=360/this.countVisibleElements();for(y=0;y<e;++y)g+=this._computeAngle(y,s,_);for(y=e;y<e+i;y++){const v=t[y];let T=g,k=g+this._computeAngle(y,s,_),M=o.getDataVisibility(y)?l.getDistanceFromCenterForValue(this.getParsed(y).r):0;g=k,r&&(c.animateScale&&(M=0),c.animateRotate&&(T=k=f));const D={x:d,y:h,innerRadius:0,outerRadius:M,startAngle:T,endAngle:k,options:this.resolveDataElementOptions(y,v.active?"active":s)};this.updateElement(v,y,D,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Me(this.resolveDataElementOptions(t,e).angle||i):0}}U(mr,"id","polarArea"),U(mr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),U(mr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:s,lineWidth:c.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class tu extends _i{}U(tu,"id","pie"),U(tu,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class ua extends De{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return O_.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":s),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,g={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,g,s)}}}U(ua,"id","radar"),U(ua,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),U(ua,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class da extends De{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=A_(e,i,s);if(this._drawStart=r,this._drawCount=o,x_(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,s),h=this.getSharedOptions(d),f=this.includeOptions(s,h),g=o.axis,y=a.axis,{spanGaps:_,segment:v}=this.options,T=ms(_)?_:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||s==="none";let M=e>0&&this.getParsed(e-1);for(let D=e;D<e+i;++D){const O=t[D],L=this.getParsed(D),I=k?O:{},b=et(L[y]),E=I[g]=o.getPixelForValue(L[g],D),x=I[y]=r||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,L,c):L[y],D);I.skip=isNaN(E)||isNaN(x)||b,I.stop=D>0&&Math.abs(L[g]-M[g])>T,v&&(I.parsed=L,I.raw=l.data[D]),f&&(I.options=h||this.resolveDataElementOptions(D,O.active?"active":s)),k||this.updateElement(O,D,I,s),M=L}this.updateSharedOptions(h,s,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}U(da,"id","scatter"),U(da,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),U(da,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var HC=Object.freeze({__proto__:null,BarController:aa,BubbleController:ca,DoughnutController:_i,LineController:la,PieController:tu,PolarAreaController:mr,RadarController:ua,ScatterController:da});function fi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ud{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(Ud.prototype,t)}init(){}formats(){return fi()}parse(){return fi()}format(){return fi()}add(){return fi()}diff(){return fi()}startOf(){return fi()}endOf(){return fi()}}var qC={_date:Ud};function WC(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?pk:pn;if(i){if(s._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),g=l(r,t,e+h);return{lo:f.lo,hi:g.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=s._cachedMeta,{_parsed:f}=n,g=f.slice(0,d.lo+1).reverse().findIndex(_=>!et(_[h.axis]));d.lo-=Math.max(0,g);const y=f.slice(d.hi).findIndex(_=>!et(_[h.axis]));d.hi+=Math.max(0,y)}return d}}return{lo:0,hi:r.length-1}}function bc(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=WC(r[a],t,o,s);for(let g=h;g<=f;++g){const y=d[g];y.skip||i(y,l,g)}}}function GC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function fl(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||bc(n,e,t,function(a,c,l){!s&&!gn(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function KC(n,t,e,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=b_(o,{x:t.x,y:t.y});Mr(h,l,d)&&s.push({element:o,datasetIndex:a,index:c})}return bc(n,e,t,r),s}function YC(n,t,e,i,s,r){let o=[];const a=GC(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const g=d.inRange(t.x,t.y,s);if(i&&!g)return;const y=d.getCenterPoint(s);if(!(!!r||n.isPointInArea(y))&&!g)return;const v=a(t,y);v<c?(o=[{element:d,datasetIndex:h,index:f}],c=v):v===c&&o.push({element:d,datasetIndex:h,index:f})}return bc(n,e,t,l),o}function pl(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?KC(n,t,e,s):YC(n,t,e,i,s,r)}function sg(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return bc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],s)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,s))}),i&&!a?[]:r}var XC={modes:{index(n,t,e,i){const s=mi(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?fl(n,s,r,i,o):pl(n,s,r,!1,i,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,i){const s=mi(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?fl(n,s,r,i,o):pl(n,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,i){const s=mi(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return fl(n,s,r,i,o)},nearest(n,t,e,i){const s=mi(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return pl(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=mi(t,n);return sg(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=mi(t,n);return sg(n,s,"y",e.intersect,i)}}};const q_=["left","top","right","bottom"];function Us(n,t){return n.filter(e=>e.pos===t)}function rg(n,t){return n.filter(e=>q_.indexOf(e.pos)===-1&&e.box.axis===t)}function zs(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function QC(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function JC(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!q_.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function ZC(n,t){const e=JC(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*i:c&&t.availableWidth,a.height=s):(a.width=i,a.height=d?d*s:c&&t.availableHeight)}return e}function tR(n){const t=QC(n),e=zs(t.filter(l=>l.box.fullSize),!0),i=zs(Us(t,"left"),!0),s=zs(Us(t,"right")),r=zs(Us(t,"top"),!0),o=zs(Us(t,"bottom")),a=rg(t,"x"),c=rg(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:Us(t,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function og(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function W_(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function eR(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!st(s)){e.size&&(n[s]-=e.size);const h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[s]+=e.size}r.getPadding&&W_(o,r.getPadding());const a=Math.max(0,t.outerWidth-og(o,n,"left","right")),c=Math.max(0,t.outerHeight-og(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function nR(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function iR(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function er(n,t,e,i){const s=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,iR(a.horizontal,t));const{same:h,other:f}=eR(t,e,a,i);l|=h&&s.length,d=d||f,c.fullSize||s.push(a)}return l&&er(s,t,e,i)||d}function Bo(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function ag(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=i[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Rr(l.start)&&(o=l.start),c.fullSize?Bo(c,s.left,o,e.outerWidth-s.right-s.left,f):Bo(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Rr(l.start)&&(r=l.start),c.fullSize?Bo(c,r,s.top,f,e.outerHeight-s.bottom-s.top):Bo(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var ne={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=se(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=tR(n.boxes),c=a.vertical,l=a.horizontal;ut(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const d=c.reduce((_,v)=>v.box.options&&v.box.options.display===!1?_:_+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},s);W_(f,se(i));const g=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),y=ZC(c.concat(l),h);er(a.fullSize,g,h,y),er(c,g,h,y),er(l,g,h,y)&&er(c,g,h,y),nR(g),ag(a.leftAndTop,g,h,y),g.x+=g.w,g.y+=g.h,ag(a.rightAndBottom,g,h,y),n.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},ut(a.chartArea,_=>{const v=_.box;Object.assign(v,n.chartArea),v.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class G_{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class sR extends G_{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ha="$chartjs",rR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},cg=n=>n===null||n==="";function oR(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[ha]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",cg(s)){const r=qp(n,"width");r!==void 0&&(n.width=r)}if(cg(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=qp(n,"height");r!==void 0&&(n.height=r)}return n}const K_=aC?{passive:!0}:!1;function aR(n,t,e){n&&n.addEventListener(t,e,K_)}function cR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,K_)}function lR(n,t){const e=rR[n.type]||n.type,{x:i,y:s}=mi(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Ha(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function uR(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ha(a.addedNodes,i),o=o&&!Ha(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function dR(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ha(a.removedNodes,i),o=o&&!Ha(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Or=new Map;let lg=0;function Y_(){const n=window.devicePixelRatio;n!==lg&&(lg=n,Or.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function hR(n,t){Or.size||window.addEventListener("resize",Y_),Or.set(n,t)}function fR(n){Or.delete(n),Or.size||window.removeEventListener("resize",Y_)}function pR(n,t,e){const i=n.canvas,s=i&&$d(i);if(!s)return;const r=I_((a,c)=>{const l=s.clientWidth;e(a,c),l<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(s),hR(n,r),o}function gl(n,t,e){e&&e.disconnect(),t==="resize"&&fR(n)}function gR(n,t,e){const i=n.canvas,s=I_(r=>{n.ctx!==null&&e(lR(r,n))},n);return aR(i,t,s),s}class mR extends G_{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(oR(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[ha])return!1;const i=e[ha].initial;["height","width"].forEach(r=>{const o=i[r];et(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[ha],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:uR,detach:dR,resize:pR}[e]||gR;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:gl,detach:gl,resize:gl}[e]||cR)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return oC(t,e,i,s)}isAttached(t){const e=t&&$d(t);return!!(e&&e.isConnected)}}function yR(n){return!Bd()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?sR:mR}class Le{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return ms(this.x)&&ms(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}U(Le,"defaults",{}),U(Le,"defaultRoutes");function vR(n,t){const e=n.options.ticks,i=_R(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?wR(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return ER(t,l,r,o/s),l;const d=bR(r,t,s);if(o>0){let h,f;const g=o>1?Math.round((c-a)/(o-1)):null;for($o(t,l,d,et(g)?0:a-g,a),h=0,f=o-1;h<f;h++)$o(t,l,d,r[h],r[h+1]);return $o(t,l,d,c,et(g)?t.length:c+g),l}return $o(t,l,d),l}function _R(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function bR(n,t,e){const i=TR(n),s=t.length/e;if(!i)return Math.max(s,1);const r=lk(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function wR(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function ER(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function $o(n,t,e,i,s){const r=X(i,0),o=Math.min(X(s,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),s&&(c=s-i,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function TR(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const IR=n=>n==="left"?"right":n==="right"?"left":n,ug=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,dg=(n,t)=>Math.min(t||n,n);function hg(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function AR(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(s),l;if(!(e&&(i===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(s-1))/2,c+=s<t?l:-l,c<r-a||c>o+a)))return c}function xR(n,t){ut(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function js(n){return n.drawTicks?n.tickLength:0}function fg(n,t){if(!n.display)return 0;const e=Vt(n.font,t),i=se(n.padding);return(wt(n.text)?n.text.length:1)*e.lineHeight+i.height}function SR(n,t){return oi(n,{scale:t,type:"scale"})}function PR(n,t,e){return oi(n,{tick:e,index:t,type:"tick"})}function kR(n,t,e){let i=Dd(n);return(e&&t!=="right"||!e&&t==="right")&&(i=IR(i)),i}function CR(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,g,y;const _=o-s,v=a-r;if(n.isHorizontal()){if(g=Qt(i,r,a),st(e)){const T=Object.keys(e)[0],k=e[T];y=d[T].getPixelForValue(k)+_-t}else e==="center"?y=(l.bottom+l.top)/2+_-t:y=ug(n,e,t);f=a-r}else{if(st(e)){const T=Object.keys(e)[0],k=e[T];g=d[T].getPixelForValue(k)-v+t}else e==="center"?g=(l.left+l.right)/2-v+t:g=ug(n,e,t);y=Qt(i,o,s),h=e==="left"?-Rt:Rt}return{titleX:g,titleY:y,maxWidth:f,rotation:h}}class $i extends Le{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=me(t,Number.POSITIVE_INFINITY),e=me(e,Number.NEGATIVE_INFINITY),i=me(i,Number.POSITIVE_INFINITY),s=me(s,Number.NEGATIVE_INFINITY),{min:me(t,i),max:me(e,s),minDefined:kt(t),maxDefined:kt(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:me(e,me(i,e)),max:me(i,me(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){pt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Fk(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?hg(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=vR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){pt(this.options.afterUpdate,[this])}beforeSetDimensions(){pt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){pt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),pt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){pt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=pt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){pt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){pt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=dg(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,g=$t(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:g/(i-1),h+6>a&&(a=g/(i-(t.offset?.5:1)),c=this.maxHeight-js(t.grid)-e.padding-fg(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=Rd(Math.min(Math.asin($t((d.highest.height+6)/a,-1,1)),Math.asin($t(c/l,-1,1))-Math.asin($t(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){pt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){pt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=fg(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=js(r)+c):(t.height=this.maxHeight,t.width=js(r)+c),i.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),g=i.padding*2,y=Me(this.labelRotation),_=Math.cos(y),v=Math.sin(y);if(a){const T=i.mirror?0:v*h.width+_*f.height;t.height=Math.min(this.maxHeight,t.height+T+g)}else{const T=i.mirror?0:_*h.width+v*f.height;t.width=Math.min(this.maxWidth,t.width+T+g)}this._calculatePadding(l,d,v,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,g=0;c?l?(f=s*t.width,g=i*e.height):(f=i*t.height,g=s*e.width):r==="start"?g=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,g=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((g-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){pt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)et(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=hg(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/dg(e,i));let l=0,d=0,h,f,g,y,_,v,T,k,M,D,O;for(h=0;h<e;h+=c){if(y=t[h].label,_=this._resolveTickFontOptions(h),s.font=v=_.string,T=r[v]=r[v]||{data:{},gc:[]},k=_.lineHeight,M=D=0,!et(y)&&!wt(y))M=za(s,T.data,T.gc,M,y),D=k;else if(wt(y))for(f=0,g=y.length;f<g;++f)O=y[f],!et(O)&&!wt(O)&&(M=za(s,T.data,T.gc,M,O),D+=k);o.push(M),a.push(D),l=Math.max(M,l),d=Math.max(D,d)}xR(r,e);const L=o.indexOf(l),I=a.indexOf(d),b=E=>({width:o[E]||0,height:a[E]||0});return{first:b(0),last:b(e-1),widest:b(L),highest:b(I),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return fk(this._alignToPixels?hi(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=PR(this.getContext(),t,i))}return this.$context||(this.$context=SR(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Me(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=js(r),g=[],y=a.setContext(this.getContext()),_=y.display?y.width:0,v=_/2,T=function(dt){return hi(i,dt,_)};let k,M,D,O,L,I,b,E,x,S,P,A;if(o==="top")k=T(this.bottom),I=this.bottom-f,E=k-v,S=T(t.top)+v,A=t.bottom;else if(o==="bottom")k=T(this.top),S=t.top,A=T(t.bottom)-v,I=k+v,E=this.top+f;else if(o==="left")k=T(this.right),L=this.right-f,b=k-v,x=T(t.left)+v,P=t.right;else if(o==="right")k=T(this.left),x=t.left,P=T(t.right)-v,L=k+v,b=this.left+f;else if(e==="x"){if(o==="center")k=T((t.top+t.bottom)/2+.5);else if(st(o)){const dt=Object.keys(o)[0],ht=o[dt];k=T(this.chart.scales[dt].getPixelForValue(ht))}S=t.top,A=t.bottom,I=k+v,E=I+f}else if(e==="y"){if(o==="center")k=T((t.left+t.right)/2);else if(st(o)){const dt=Object.keys(o)[0],ht=o[dt];k=T(this.chart.scales[dt].getPixelForValue(ht))}L=k-v,b=L-f,x=t.left,P=t.right}const rt=X(s.ticks.maxTicksLimit,h),tt=Math.max(1,Math.ceil(h/rt));for(M=0;M<h;M+=tt){const dt=this.getContext(M),ht=r.setContext(dt),Ut=a.setContext(dt),Mt=ht.lineWidth,tn=ht.color,Ui=Ut.dash||[],re=Ut.dashOffset,It=ht.tickWidth,en=ht.tickColor,Ae=ht.tickBorderDash||[],nn=ht.tickBorderDashOffset;D=AR(this,M,c),D!==void 0&&(O=hi(i,D,Mt),l?L=b=x=P=O:I=E=S=A=O,g.push({tx1:L,ty1:I,tx2:b,ty2:E,x1:x,y1:S,x2:P,y2:A,width:Mt,color:tn,borderDash:Ui,borderDashOffset:re,tickWidth:It,tickColor:en,tickBorderDash:Ae,tickBorderDashOffset:nn}))}return this._ticksLength=h,this._borderValue=k,g}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=js(i.grid),g=f+d,y=h?-d:g,_=-Me(this.labelRotation),v=[];let T,k,M,D,O,L,I,b,E,x,S,P,A="middle";if(s==="top")L=this.bottom-y,I=this._getXAxisLabelAlignment();else if(s==="bottom")L=this.top+y,I=this._getXAxisLabelAlignment();else if(s==="left"){const tt=this._getYAxisLabelAlignment(f);I=tt.textAlign,O=tt.x}else if(s==="right"){const tt=this._getYAxisLabelAlignment(f);I=tt.textAlign,O=tt.x}else if(e==="x"){if(s==="center")L=(t.top+t.bottom)/2+g;else if(st(s)){const tt=Object.keys(s)[0],dt=s[tt];L=this.chart.scales[tt].getPixelForValue(dt)+g}I=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")O=(t.left+t.right)/2-g;else if(st(s)){const tt=Object.keys(s)[0],dt=s[tt];O=this.chart.scales[tt].getPixelForValue(dt)}I=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?A="top":c==="end"&&(A="bottom"));const rt=this._getLabelSizes();for(T=0,k=a.length;T<k;++T){M=a[T],D=M.label;const tt=r.setContext(this.getContext(T));b=this.getPixelForTick(T)+r.labelOffset,E=this._resolveTickFontOptions(T),x=E.lineHeight,S=wt(D)?D.length:1;const dt=S/2,ht=tt.color,Ut=tt.textStrokeColor,Mt=tt.textStrokeWidth;let tn=I;o?(O=b,I==="inner"&&(T===k-1?tn=this.options.reverse?"left":"right":T===0?tn=this.options.reverse?"right":"left":tn="center"),s==="top"?l==="near"||_!==0?P=-S*x+x/2:l==="center"?P=-rt.highest.height/2-dt*x+x:P=-rt.highest.height+x/2:l==="near"||_!==0?P=x/2:l==="center"?P=rt.highest.height/2-dt*x:P=rt.highest.height-S*x,h&&(P*=-1),_!==0&&!tt.showLabelBackdrop&&(O+=x/2*Math.sin(_))):(L=b,P=(1-S)*x/2);let Ui;if(tt.showLabelBackdrop){const re=se(tt.backdropPadding),It=rt.heights[T],en=rt.widths[T];let Ae=P-re.top,nn=0-re.left;switch(A){case"middle":Ae-=It/2;break;case"bottom":Ae-=It;break}switch(I){case"center":nn-=en/2;break;case"right":nn-=en;break;case"inner":T===k-1?nn-=en:T>0&&(nn-=en/2);break}Ui={left:nn,top:Ae,width:en+re.width,height:It+re.height,color:tt.backdropColor}}v.push({label:D,font:E,textOffset:P,options:{rotation:_,color:ht,strokeColor:Ut,strokeWidth:Mt,textAlign:tn,textBaseline:A,translation:[O,L],backdrop:Ui}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Me(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?s?(d=this.right+r,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?s?(d=this.left+r,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const c=s[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=hi(t,this.left,o)-o/2,d=hi(t,this.right,a)+a/2,h=f=c):(h=hi(t,this.top,o)-o/2,f=hi(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&yc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Ni(i,l,0,d,c,a)}s&&vc(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=Vt(i.font),o=se(i.padding),a=i.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||st(e)?(c+=o.bottom,wt(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=CR(this,c,e,a);Ni(t,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:kR(a,e,s),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=X(t.grid&&t.grid.z,-1),s=X(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==$i.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Vt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Uo{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;DR(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,RR(t,o,i),this.override&&Et.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Et[s]&&(delete Et[s][i],this.override&&delete Oi[i])}}function RR(n,t,e){const i=Cr(Object.create(null),[e?Et.get(e):{},Et.get(t),n.defaults]);Et.set(t,i),n.defaultRoutes&&MR(t,n.defaultRoutes),n.descriptors&&Et.describe(t,n.descriptors)}function MR(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Et.route(r,s,c,a)})}function DR(n){return"id"in n&&"defaults"in n}class OR{constructor(){this.controllers=new Uo(De,"datasets",!0),this.elements=new Uo(Le,"elements"),this.plugins=new Uo(Object,"plugins"),this.scales=new Uo($i,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):ut(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=Cd(t);pt(i["before"+s],[],i),e[t](i),pt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Be=new OR;class NR{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],c=[e,s,r.options];if(pt(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){et(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=X(i.options&&i.options.plugins,{}),r=LR(i);return s===!1&&!e?[]:FR(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function LR(n){const t={},e=[],i=Object.keys(Be.plugins.items);for(let r=0;r<i.length;r++)e.push(Be.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function VR(n,t){return!t&&n===!1?null:n===!0?{}:n}function FR(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=VR(i[c],s);l!==null&&r.push({plugin:a,options:BR(n.config,{plugin:a,local:e[c]},l,o)})}return r}function BR(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function eu(n,t){const e=Et.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function $R(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function UR(n,t){return n===t?"_index_":"_value_"}function pg(n){if(n==="x"||n==="y"||n==="r")return n}function zR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function nu(n,...t){if(pg(n))return n;for(const e of t){const i=e.axis||zR(e.position)||n.length>1&&pg(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function gg(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function jR(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return gg(n,"x",e[0])||gg(n,"y",e[0])}return{}}function HR(n,t){const e=Oi[n.type]||{scales:{}},i=t.scales||{},s=eu(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!st(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=nu(o,a,jR(o,n),Et.scales[a.type]),l=UR(c,s),d=e.scales||{};r[o]=hr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||eu(a,t),d=(Oi[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=$R(h,c),g=o[f+"AxisID"]||f;r[g]=r[g]||Object.create(null),hr(r[g],[{axis:f},i[g],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];hr(a,[Et.scales[a.type],Et.scale])}),r}function X_(n){const t=n.options||(n.options={});t.plugins=X(t.plugins,{}),t.scales=HR(n,t)}function Q_(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function qR(n){return n=n||{},n.data=Q_(n.data),X_(n),n}const mg=new Map,J_=new Set;function zo(n,t){let e=mg.get(n);return e||(e=t(),mg.set(n,e),J_.add(e)),e}const Hs=(n,t,e)=>{const i=ti(t,e);i!==void 0&&n.add(i)};class WR{constructor(t){this._config=qR(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Q_(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),X_(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return zo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return zo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return zo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return zo(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>Hs(c,t,h))),d.forEach(h=>Hs(c,s,h)),d.forEach(h=>Hs(c,Oi[r]||{},h)),d.forEach(h=>Hs(c,Et,h)),d.forEach(h=>Hs(c,Jl,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),J_.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Oi[e]||{},Et.datasets[e]||{},{type:e},Et,Jl]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=yg(this._resolverCache,t,s);let c=o;if(KR(o,e)){r.$shared=!1,i=ei(i)?i():i;const l=this.createResolver(t,i,a);c=ys(o,i,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,i=[""],s){const{resolver:r}=yg(this._resolverCache,t,i);return st(e)?ys(r,e,void 0,s):r}}function yg(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:Ld(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const GR=n=>st(n)&&Object.getOwnPropertyNames(n).some(t=>ei(n[t]));function KR(n,t){const{isScriptable:e,isIndexable:i}=C_(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(ei(a)||GR(a))||o&&wt(a))return!0}return!1}var YR="4.5.1";const XR=["top","bottom","left","right","chartArea"];function vg(n,t){return n==="top"||n==="bottom"||XR.indexOf(n)===-1&&t==="x"}function _g(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function bg(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),pt(e&&e.onComplete,[n],t)}function QR(n){const t=n.chart,e=t.options.animation;pt(e&&e.onProgress,[n],t)}function Z_(n){return Bd()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const fa={},wg=n=>{const t=Z_(n);return Object.values(fa).filter(e=>e.canvas===t).pop()};function JR(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function ZR(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class ze{static register(...t){Be.add(...t),Eg()}static unregister(...t){Be.remove(...t),Eg()}constructor(t,e){const i=this.config=new WR(e),s=Z_(t),r=wg(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||yR(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=tk(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new NR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=yk(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],fa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}cn.listen(this,"complete",bg),cn.listen(this,"progress",QR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return et(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Be}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Hp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Up(this.canvas,this.ctx),this}stop(){return cn.stop(this),this}resize(t,e){cn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Hp(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),pt(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};ut(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=nu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),ut(r,o=>{const a=o.options,c=a.id,l=nu(c,a),d=X(a.type,o.dtype);(a.position===void 0||vg(a.position,l)!==vg(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===d)h=i[c];else{const f=Be.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),ut(s,(o,a)=>{o||delete i[a]}),ut(i,o=>{ne.configure(this,o,o.options),ne.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(_g("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||eu(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=Be.getController(a),{datasetElementType:l,dataElementType:d}=Et.datasets[a];Object.assign(c,{dataElementType:Be.getElement(d),datasetElementType:l&&Be.getElement(l)}),o.controller=new c(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ut(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||ut(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(_g("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){ut(this.scales,t=>{ne.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Mp(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;JR(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!Mp(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ne.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],ut(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,ei(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(cn.has(this)?this.attached&&!cn.running(this)&&cn.start(this):(this.draw(),bg({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=U_(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&yc(e,s),t.controller.draw(),s&&vc(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return gn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=XC.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=oi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Rr(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),cn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Up(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete fa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};ut(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},s=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){ut(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},ut(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Ba(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),c=ok(t),l=ZR(t,this._lastEvent,i,c);i&&(this._lastEvent=null,pt(r.onHover,[t,a,this],this),c&&pt(r.onClick,[t,a,this],this));const d=!Ba(a,s);return(d||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,d}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}U(ze,"defaults",Et),U(ze,"instances",fa),U(ze,"overrides",Oi),U(ze,"registry",Be),U(ze,"version",YR),U(ze,"getChart",wg);function Eg(){return ut(ze.instances,n=>n._plugins.invalidate())}function t1(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,Zt(i-e));if(n.beginPath(),n.arc(s,r,o-l/2,i+h/2,e-h/2),a>0){const f=Math.min(l/a,Zt(i-e));n.arc(s,r,a+l/2,e-f/2,i+f/2,!0)}else{const f=Math.min(l/2,o*Zt(i-e));if(d==="round")n.arc(s,r,f,e-ct/2,i+ct/2,!0);else if(d==="bevel"){const g=2*f*f,y=-g*Math.cos(e+ct/2)+s,_=-g*Math.sin(e+ct/2)+r,v=g*Math.cos(i+ct/2)+s,T=g*Math.sin(i+ct/2)+r;n.lineTo(y,_),n.lineTo(v,T)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function e1(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=s/a;n.beginPath(),n.arc(r,o,a,i-l,e+l),c>s?(l=s/c,n.arc(r,o,c,e+l,i-l,!0)):n.arc(r,o,s,e+Rt,i-Rt),n.closePath(),n.clip()}function n1(n){return Nd(n,["outerStart","outerEnd","innerStart","innerEnd"])}function i1(n,t,e,i){const s=n1(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=c=>{const l=(e-Math.min(r,c))*i/2;return $t(c,0,Math.min(r,l))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:$t(s.innerStart,0,o),innerEnd:$t(s.innerEnd,0,o)}}function Gi(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function qa(n,t,e,i,s,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+i+e-l,0),f=d>0?d+i+e+l:0;let g=0;const y=s-c;if(i){const tt=d>0?d-i:0,dt=h>0?h-i:0,ht=(tt+dt)/2,Ut=ht!==0?y*ht/(ht+i):y;g=(y-Ut)/2}const _=Math.max(.001,y*h-e/ct)/h,v=(y-_)/2,T=c+v+g,k=s-v-g,{outerStart:M,outerEnd:D,innerStart:O,innerEnd:L}=i1(t,f,h,k-T),I=h-M,b=h-D,E=T+M/I,x=k-D/b,S=f+O,P=f+L,A=T+O/S,rt=k-L/P;if(n.beginPath(),r){const tt=(E+x)/2;if(n.arc(o,a,h,E,tt),n.arc(o,a,h,tt,x),D>0){const Mt=Gi(b,x,o,a);n.arc(Mt.x,Mt.y,D,x,k+Rt)}const dt=Gi(P,k,o,a);if(n.lineTo(dt.x,dt.y),L>0){const Mt=Gi(P,rt,o,a);n.arc(Mt.x,Mt.y,L,k+Rt,rt+Math.PI)}const ht=(k-L/f+(T+O/f))/2;if(n.arc(o,a,f,k-L/f,ht,!0),n.arc(o,a,f,ht,T+O/f,!0),O>0){const Mt=Gi(S,A,o,a);n.arc(Mt.x,Mt.y,O,A+Math.PI,T-Rt)}const Ut=Gi(I,T,o,a);if(n.lineTo(Ut.x,Ut.y),M>0){const Mt=Gi(I,E,o,a);n.arc(Mt.x,Mt.y,M,T-Rt,E)}}else{n.moveTo(o,a);const tt=Math.cos(E)*h+o,dt=Math.sin(E)*h+a;n.lineTo(tt,dt);const ht=Math.cos(x)*h+o,Ut=Math.sin(x)*h+a;n.lineTo(ht,Ut)}n.closePath()}function s1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){qa(n,t,e,i,c,s);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%_t||_t))}return qa(n,t,e,i,c,s),n.fill(),c}function r1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:g}=c,y=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,y?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let _=t.endAngle;if(r){qa(n,t,e,i,_,s);for(let v=0;v<r;++v)n.stroke();isNaN(a)||(_=o+(a%_t||_t))}y&&e1(n,t,_),c.selfJoin&&_-o>=ct&&g===0&&d!=="miter"&&t1(n,t,_),r||(qa(n,t,e,i,_,s),n.stroke())}class nr extends Le{constructor(e){super();U(this,"circumference");U(this,"endAngle");U(this,"fullCircles");U(this,"innerRadius");U(this,"outerRadius");U(this,"pixelMargin");U(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=b_(r,{x:e,y:i}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),g=(this.options.spacing+this.options.borderWidth)/2,y=X(f,l-c),_=Mr(o,c,l)&&c!==l,v=y>=_t||_,T=fn(a,d+g,h+g);return v&&T}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:i+Math.cos(h)*f,y:s+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>_t?Math.floor(s/_t):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(ct,s||0)),d=r*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,s1(e,this,d,o,a),r1(e,this,d,o,a),e.restore()}}U(nr,"id","arc"),U(nr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),U(nr,"defaultRoutes",{backgroundColor:"backgroundColor"}),U(nr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function tb(n,t,e=t){n.lineCap=X(e.borderCapStyle,t.borderCapStyle),n.setLineDash(X(e.borderDash,t.borderDash)),n.lineDashOffset=X(e.borderDashOffset,t.borderDashOffset),n.lineJoin=X(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=X(e.borderWidth,t.borderWidth),n.strokeStyle=X(e.borderColor,t.borderColor)}function o1(n,t,e){n.lineTo(e.x,e.y)}function a1(n){return n.stepped?kk:n.tension||n.cubicInterpolationMode==="monotone"?Ck:o1}function eb(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,c=Math.max(s,o),l=Math.min(r,a),d=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!d?i+l-c:l-c}}function c1(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:c,ilen:l}=eb(s,e,i),d=a1(r);let{move:h=!0,reverse:f}=i||{},g,y,_;for(g=0;g<=l;++g)y=s[(a+(f?l-g:g))%o],!y.skip&&(h?(n.moveTo(y.x,y.y),h=!1):d(n,_,y,f,r.stepped),_=y);return c&&(y=s[(a+(f?l:0))%o],d(n,_,y,f,r.stepped)),!!c}function l1(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=eb(s,e,i),{move:c=!0,reverse:l}=i||{};let d=0,h=0,f,g,y,_,v,T;const k=D=>(o+(l?a-D:D))%r,M=()=>{_!==v&&(n.lineTo(d,v),n.lineTo(d,_),n.lineTo(d,T))};for(c&&(g=s[k(0)],n.moveTo(g.x,g.y)),f=0;f<=a;++f){if(g=s[k(f)],g.skip)continue;const D=g.x,O=g.y,L=D|0;L===y?(O<_?_=O:O>v&&(v=O),d=(h*d+D)/++h):(M(),n.lineTo(D,O),y=L,h=0,_=v=O),T=O}M()}function iu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?l1:c1}function u1(n){return n.stepped?cC:n.tension||n.cubicInterpolationMode==="monotone"?lC:yi}function d1(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),tb(n,t.options),n.stroke(s)}function h1(n,t,e,i){const{segments:s,options:r}=t,o=iu(t);for(const a of s)tb(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const f1=typeof Path2D=="function";function p1(n,t,e,i){f1&&!t.options.segment?d1(n,t,e,i):h1(n,t,e,i)}class Fn extends Le{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;tC(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=gC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=$_(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=u1(i);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],g=r[h],y=r[f];if(g===y){a.push(g);continue}const _=Math.abs((s-g[e])/(y[e]-g[e])),v=c(g,y,_,i.stepped);v[e]=t[e],a.push(v)}return a.length===1?a[0]:a}pathSegment(t,e,i){return iu(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=iu(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),p1(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(Fn,"id","line"),U(Fn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(Fn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(Fn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Tg(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class pa extends Le{constructor(e){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return Tg(this,e,"x",i)}inYRange(e,i){return Tg(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!gn(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Zl(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}U(pa,"id","point"),U(pa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(pa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function nb(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,s),c=Math.max(e,s),l=i-h,d=i+h):(h=r/2,a=e-h,c=e+h,l=Math.min(i,s),d=Math.max(i,s)),{left:a,top:l,right:c,bottom:d}}function Bn(n,t,e,i){return n?0:$t(t,e,i)}function g1(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=k_(i);return{t:Bn(s.top,r.top,0,e),r:Bn(s.right,r.right,0,t),b:Bn(s.bottom,r.bottom,0,e),l:Bn(s.left,r.left,0,t)}}function m1(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Ai(s),o=Math.min(t,e),a=n.borderSkipped,c=i||st(s);return{topLeft:Bn(!c||a.top||a.left,r.topLeft,0,o),topRight:Bn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Bn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Bn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function y1(n){const t=nb(n),e=t.right-t.left,i=t.bottom-t.top,s=g1(n,e/2,i/2),r=m1(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function ml(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&nb(n,i);return a&&(s||fn(t,a.left,a.right))&&(r||fn(e,a.top,a.bottom))}function v1(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function _1(n,t){n.rect(t.x,t.y,t.w,t.h)}function yl(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class ga extends Le{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=y1(this),a=v1(o.radius)?Dr:_1;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,yl(o,e,r)),t.clip(),a(t,yl(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,yl(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return ml(this,t,e,i)}inXRange(t,e){return ml(this,t,null,e)}inYRange(t,e){return ml(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}U(ga,"id","bar"),U(ga,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),U(ga,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var b1=Object.freeze({__proto__:null,ArcElement:nr,BarElement:ga,LineElement:Fn,PointElement:pa});const su=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ig=su.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function ib(n){return su[n%su.length]}function sb(n){return Ig[n%Ig.length]}function w1(n,t){return n.borderColor=ib(t),n.backgroundColor=sb(t),++t}function E1(n,t){return n.backgroundColor=n.data.map(()=>ib(t++)),t}function T1(n,t){return n.backgroundColor=n.data.map(()=>sb(t++)),t}function I1(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof _i?t=E1(e,t):s instanceof mr?t=T1(e,t):s&&(t=w1(e,t))}}function Ag(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function A1(n){return n&&(n.borderColor||n.backgroundColor)}function x1(){return Et.borderColor!=="rgba(0,0,0,0.1)"||Et.backgroundColor!=="rgba(0,0,0,0.1)"}var S1={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=Ag(i)||A1(s)||r&&Ag(r)||x1();if(!e.forceOverride&&o)return;const a=I1(n);i.forEach(a)}};function P1(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,g,y,_;for(o[c++]=n[d],h=0;h<r-2;h++){let v=0,T=0,k;const M=Math.floor((h+1)*a)+1+t,D=Math.min(Math.floor((h+2)*a)+1,e)+t,O=D-M;for(k=M;k<D;k++)v+=n[k].x,T+=n[k].y;v/=O,T/=O;const L=Math.floor(h*a)+1+t,I=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:E}=n[d];for(g=y=-1,k=L;k<I;k++)y=.5*Math.abs((b-v)*(n[k].y-E)-(b-n[k].x)*(T-E)),y>g&&(g=y,f=n[k],_=k);o[c++]=f,d=_}return o[c++]=n[l],o}function k1(n,t,e,i){let s=0,r=0,o,a,c,l,d,h,f,g,y,_;const v=[],T=t+e-1,k=n[t].x,D=n[T].x-k;for(o=t;o<t+e;++o){a=n[o],c=(a.x-k)/D*i,l=a.y;const O=c|0;if(O===d)l<y?(y=l,h=o):l>_&&(_=l,f=o),s=(r*s+a.x)/++r;else{const L=o-1;if(!et(h)&&!et(f)){const I=Math.min(h,f),b=Math.max(h,f);I!==g&&I!==L&&v.push({...n[I],x:s}),b!==g&&b!==L&&v.push({...n[b],x:s})}o>0&&L!==g&&v.push(n[L]),v.push(a),d=O,r=0,y=_=l,h=f=g=o}}return v}function rb(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function xg(n){n.data.datasets.forEach(t=>{rb(t)})}function C1(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(i=$t(pn(t,r.axis,o).lo,0,e-1)),l?s=$t(pn(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var R1={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){xg(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,c=n.getDatasetMeta(r),l=o||s.data;if(tr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=C1(c,l);const g=e.threshold||4*i;if(f<=g){rb(s);return}et(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let y;switch(e.algorithm){case"lttb":y=P1(l,h,f,i,e);break;case"min-max":y=k1(l,h,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=y})},destroy(n){xg(n)}};function M1(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:c,end:l}=a;l=wc(c,l,s);const d=ru(e,s[c],s[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:s[c],end:s[l]});continue}const h=$_(t,d);for(const f of h){const g=ru(e,r[f.start],r[f.end],f.loop),y=B_(a,s,g);for(const _ of y)o.push({source:_,target:f,start:{[e]:Sg(d,g,"start",Math.max)},end:{[e]:Sg(d,g,"end",Math.min)}})}}return o}function ru(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=Zt(s),r=Zt(r)),{property:n,start:s,end:r}}function D1(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=wc(o,a,s);const c=s[o],l=s[a];i!==null?(r.push({x:c.x,y:i}),r.push({x:l.x,y:i})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function wc(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Sg(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function ob(n,t){let e=[],i=!1;return wt(n)?(i=!0,e=n):e=D1(n,t),e.length?new Fn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Pg(n){return n&&n.fill!==!1}function O1(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!kt(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function N1(n,t,e){const i=B1(n);if(st(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return kt(s)&&Math.floor(s)===s?L1(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function L1(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function V1(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:st(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function F1(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:st(n)?i=n.value:i=t.getBaseValue(),i}function B1(n){const t=n.options,e=t.fill;let i=X(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function $1(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=U1(t,e);a.push(ob({x:null,y:t.bottom},i));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)z1(s,o[d],a)}return new Fn({points:s,options:{}})}function U1(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function z1(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:c}=j1(r,t,"x");if(!(!c||o&&a)){if(o)i.unshift(c);else if(n.push(c),!a)break}}n.push(...i)}function j1(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(fn(s,h,f)){a=s===h,c=s===f;break}}return{first:a,last:c,point:i}}class ab{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:_t},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function H1(n){const{chart:t,fill:e,line:i}=n;if(kt(e))return q1(t,e);if(e==="stack")return $1(n);if(e==="shape")return!0;const s=W1(n);return s instanceof ab?s:ob(s,i)}function q1(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function W1(n){return(n.scale||{}).getPointPositionForValue?K1(n):G1(n)}function G1(n){const{scale:t={},fill:e}=n,i=V1(e,t);if(kt(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function K1(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=F1(e,t,r),a=[];if(i.grid.circular){const c=t.getPointPositionForValue(0,r);return new ab({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)a.push(t.getPointPositionForValue(c,o));return a}function vl(n,t,e){const i=H1(t),{chart:s,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:g=h}=d||{},y=s.getDatasetMeta(r),_=U_(s,y);i&&o.points.length&&(yc(n,e),Y1(n,{line:o,target:i,above:f,below:g,area:e,scale:a,axis:c,clip:_}),vc(n))}function Y1(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==s&&(l==="x"?(kg(n,i,o.top),_l(n,{line:e,target:i,color:s,scale:a,property:l,clip:c}),n.restore(),n.save(),kg(n,i,o.bottom)):l==="y"&&(Cg(n,i,o.left),_l(n,{line:e,target:i,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Cg(n,i,o.right),d=s)),_l(n,{line:e,target:i,color:d,scale:a,property:l,clip:c}),n.restore()}function kg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[wc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Cg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[wc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function _l(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,c=M1(e,i,s);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:g=r}={}}=l,y=i!==!0;n.save(),n.fillStyle=g,X1(n,o,a,y&&ru(s,h,f)),n.beginPath();const _=!!e.pathSegment(n,l);let v;if(y){_?n.closePath():Rg(n,i,f,s);const T=!!i.pathSegment(n,d,{move:_,reverse:!0});v=_&&T,v||Rg(n,i,h,s)}n.closePath(),n.fill(v?"evenodd":"nonzero"),n.restore()}}function X1(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=s.top,d=a,h=s.bottom):(c=s.left,l=o,d=s.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Rg(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var Q1={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,c;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Fn&&(c={visible:n.isDatasetVisible(o),index:o,fill:N1(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=O1(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&vl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;Pg(r)&&vl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Pg(i)||e.drawTime!=="beforeDatasetDraw"||vl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Mg=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},J1=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Dg extends Le{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=pt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=Vt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Mg(i,r);let l,d;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=s+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,g=-d;return this.legendItems.forEach((y,_)=>{const v=i+e/2+r.measureText(y.text).width;(_===0||l[l.length-1]+v+2*a>o)&&(h+=d,l[l.length-(_>0?0:1)]=0,g+=d,f++),c[_]={left:0,top:g,row:f,width:v,height:s},l[l.length-1]+=v+a}),h}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,g=0,y=0,_=0;return this.legendItems.forEach((v,T)=>{const{itemWidth:k,itemHeight:M}=Z1(i,e,r,v,s);T>0&&g+M+2*a>d&&(h+=f+a,l.push({width:f,height:g}),y+=f+a,_++,f=g=0),c[T]={left:y,top:g,col:_,width:k,height:M},f=Math.max(f,k),g+=M+a}),h+=f,l.push({width:f,height:g}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=as(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=Qt(i,this.left+s,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=Qt(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+t+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=Qt(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=Qt(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;yc(t,this),this._draw(),vc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Et.color,c=as(t.rtl,this.left,this.width),l=Vt(o.font),{padding:d}=o,h=l.size,f=h/2;let g;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:y,boxHeight:_,itemHeight:v}=Mg(o,h),T=function(L,I,b){if(isNaN(y)||y<=0||isNaN(_)||_<0)return;s.save();const E=X(b.lineWidth,1);if(s.fillStyle=X(b.fillStyle,a),s.lineCap=X(b.lineCap,"butt"),s.lineDashOffset=X(b.lineDashOffset,0),s.lineJoin=X(b.lineJoin,"miter"),s.lineWidth=E,s.strokeStyle=X(b.strokeStyle,a),s.setLineDash(X(b.lineDash,[])),o.usePointStyle){const x={radius:_*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:E},S=c.xPlus(L,y/2),P=I+f;P_(s,x,S,P,o.pointStyleWidth&&y)}else{const x=I+Math.max((h-_)/2,0),S=c.leftForLtr(L,y),P=Ai(b.borderRadius);s.beginPath(),Object.values(P).some(A=>A!==0)?Dr(s,{x:S,y:x,w:y,h:_,radius:P}):s.rect(S,x,y,_),s.fill(),E!==0&&s.stroke()}s.restore()},k=function(L,I,b){Ni(s,b.text,L,I+v/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},M=this.isHorizontal(),D=this._computeTitleHeight();M?g={x:Qt(r,this.left+d,this.right-i[0]),y:this.top+d+D,line:0}:g={x:this.left+d,y:Qt(r,this.top+D+d,this.bottom-e[0].height),line:0},L_(this.ctx,t.textDirection);const O=v+d;this.legendItems.forEach((L,I)=>{s.strokeStyle=L.fontColor,s.fillStyle=L.fontColor;const b=s.measureText(L.text).width,E=c.textAlign(L.textAlign||(L.textAlign=o.textAlign)),x=y+f+b;let S=g.x,P=g.y;c.setWidth(this.width),M?I>0&&S+x+d>this.right&&(P=g.y+=O,g.line++,S=g.x=Qt(r,this.left+d,this.right-i[g.line])):I>0&&P+O>this.bottom&&(S=g.x=S+e[g.line].width+d,g.line++,P=g.y=Qt(r,this.top+D+d,this.bottom-e[g.line].height));const A=c.x(S);if(T(A,P,L),S=vk(E,S+y+f,M?S+x:this.right,t.rtl),k(c.x(S),P,L),M)g.x+=x+d;else if(typeof L.text!="string"){const rt=l.lineHeight;g.y+=cb(L,rt)+d}else g.y+=O}),V_(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=Vt(e.font),s=se(e.padding);if(!e.display)return;const r=as(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=i.size/2,l=s.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=Qt(t.align,h,this.right-f);else{const y=this.columnSizes.reduce((_,v)=>Math.max(_,v.height),0);d=l+Qt(t.align,this.top,this.bottom-y-t.labels.padding-this._computeTitleHeight())}const g=Qt(a,h,h+f);o.textAlign=r.textAlign(Dd(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Ni(o,e.text,g,d,i)}_computeTitleHeight(){const t=this.options.title,e=Vt(t.font),i=se(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(fn(t,this.left,this.right)&&fn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],fn(t,s.left,s.left+s.width)&&fn(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!nM(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=J1(s,i);s&&!r&&pt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&pt(e.onHover,[t,i,this],this)}else i&&pt(e.onClick,[t,i,this],this)}}function Z1(n,t,e,i,s){const r=tM(i,n,t,e),o=eM(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function tM(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function eM(n,t,e){let i=n;return typeof t.text!="string"&&(i=cb(t,e)),i}function cb(n,t){const e=n.text?n.text.length:0;return t*e}function nM(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var iM={id:"legend",_element:Dg,start(n,t,e){const i=n.legend=new Dg({ctx:n.ctx,options:e,chart:n});ne.configure(n,i,e),ne.addBox(n,i)},stop(n){ne.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;ne.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=se(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class zd extends Le{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=wt(i.text)?i.text.length:1;this._padding=se(i.padding);const r=s*Vt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=Qt(a,i,r),h=e+t,l=r-i):(o.position==="left"?(d=i+t,h=Qt(a,s,e),c=ct*-.5):(d=r-t,h=Qt(a,e,s),c=ct*.5),l=s-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Vt(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Ni(t,e.text,0,0,i,{color:e.color,maxWidth:c,rotation:l,textAlign:Dd(e.align),textBaseline:"middle",translation:[o,a]})}}function sM(n,t){const e=new zd({ctx:n.ctx,options:t,chart:n});ne.configure(n,e,t),ne.addBox(n,e),n.titleBlock=e}var rM={id:"title",_element:zd,start(n,t,e){sM(n,e)},stop(n){const t=n.titleBlock;ne.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;ne.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const jo=new WeakMap;var oM={id:"subtitle",start(n,t,e){const i=new zd({ctx:n.ctx,options:e,chart:n});ne.configure(n,i,e),ne.addBox(n,i),jo.set(n,i)},stop(n){ne.removeBox(n,jo.get(n)),jo.delete(n)},beforeUpdate(n,t,e){const i=jo.get(n);ne.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ir={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();i.add(c.x),s+=c.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,c)=>a+c)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Ql(t,l);d<s&&(s=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,i=c.y}return{x:e,y:i}}};function Fe(n,t){return t&&(wt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function ln(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function aM(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Og(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Vt(t.bodyFont),l=Vt(t.titleFont),d=Vt(t.footerFont),h=r.length,f=s.length,g=i.length,y=se(t.padding);let _=y.height,v=0,T=i.reduce((D,O)=>D+O.before.length+O.lines.length+O.after.length,0);if(T+=n.beforeBody.length+n.afterBody.length,h&&(_+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),T){const D=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;_+=g*D+(T-g)*c.lineHeight+(T-1)*t.bodySpacing}f&&(_+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let k=0;const M=function(D){v=Math.max(v,e.measureText(D).width+k)};return e.save(),e.font=l.string,ut(n.title,M),e.font=c.string,ut(n.beforeBody.concat(n.afterBody),M),k=t.displayColors?o+2+t.boxPadding:0,ut(i,D=>{ut(D.before,M),ut(D.lines,M),ut(D.after,M)}),k=0,e.font=d.string,ut(n.footer,M),e.restore(),v+=y.width,{width:v,height:_}}function cM(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function lM(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function uM(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),lM(l,n,t,e)&&(l="center"),l}function Ng(n,t,e){const i=e.yAlign||t.yAlign||cM(n,e);return{xAlign:e.xAlign||t.xAlign||uM(n,t,e,i),yAlign:i}}function dM(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function hM(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Lg(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=s+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:g}=Ai(o);let y=dM(t,a);const _=hM(t,c,l);return c==="center"?a==="left"?y+=l:a==="right"&&(y-=l):a==="left"?y-=Math.max(d,f)+s:a==="right"&&(y+=Math.max(h,g)+s),{x:$t(y,0,i.width-t.width),y:$t(_,0,i.height-t.height)}}function Ho(n,t,e){const i=se(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Vg(n){return Fe([],ln(n))}function fM(n,t,e){return oi(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Fg(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const lb={beforeTitle:on,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:on,beforeBody:on,beforeLabel:on,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return et(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:on,afterBody:on,beforeFooter:on,footer:on,afterFooter:on};function de(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?lb[t].call(e,i):s}class ou extends Le{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new z_(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=fM(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=de(i,"beforeTitle",this,t),r=de(i,"title",this,t),o=de(i,"afterTitle",this,t);let a=[];return a=Fe(a,ln(s)),a=Fe(a,ln(r)),a=Fe(a,ln(o)),a}getBeforeBody(t,e){return Vg(de(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return ut(t,r=>{const o={before:[],lines:[],after:[]},a=Fg(i,r);Fe(o.before,ln(de(a,"beforeLabel",this,r))),Fe(o.lines,de(a,"label",this,r)),Fe(o.after,ln(de(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Vg(de(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=de(i,"beforeFooter",this,t),r=de(i,"footer",this,t),o=de(i,"afterFooter",this,t);let a=[];return a=Fe(a,ln(s)),a=Fe(a,ln(r)),a=Fe(a,ln(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(aM(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,i))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,i))),ut(a,d=>{const h=Fg(t.callbacks,d);s.push(de(h,"labelColor",this,d)),r.push(de(h,"labelPointStyle",this,d)),o.push(de(h,"labelTextColor",this,d))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=ir[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=Og(this,i),l=Object.assign({},a,c),d=Ng(this.chart,i,l),h=Lg(i,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Ai(a),{x:f,y:g}=t,{width:y,height:_}=e;let v,T,k,M,D,O;return r==="center"?(D=g+_/2,s==="left"?(v=f,T=v-o,M=D+o,O=D-o):(v=f+y,T=v+o,M=D-o,O=D+o),k=v):(s==="left"?T=f+Math.max(c,d)+o:s==="right"?T=f+y-Math.max(l,h)-o:T=this.caretX,r==="top"?(M=g,D=M-o,v=T-o,k=T+o):(M=g+_,D=M+o,v=T+o,k=T-o),O=M),{x1:v,x2:T,x3:k,y1:M,y2:D,y3:O}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=as(i.rtl,this.x,this.width);for(t.x=Ho(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=Vt(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,d=Vt(r.bodyFont),h=Ho(this,"left",r),f=s.x(h),g=c<d.lineHeight?(d.lineHeight-c)/2:0,y=e.y+g;if(r.usePointStyle){const _={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=s.leftForLtr(f,l)+l/2,T=y+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Zl(t,_,v,T),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Zl(t,_,v,T)}else{t.lineWidth=st(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(f,l),v=s.leftForLtr(s.xPlus(f,1),l-2),T=Ai(o.borderRadius);Object.values(T).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Dr(t,{x:_,y,w:l,h:c,radius:T}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Dr(t,{x:v,y:y+1,w:l-2,h:c-2,radius:T}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,y,l,c),t.strokeRect(_,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(v,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=i,h=Vt(i.bodyFont);let f=h.lineHeight,g=0;const y=as(i.rtl,this.x,this.width),_=function(b){e.fillText(b,y.x(t.x+g),t.y+f/2),t.y+=f+r},v=y.textAlign(o);let T,k,M,D,O,L,I;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=Ho(this,v,i),e.fillStyle=i.bodyColor,ut(this.beforeBody,_),g=a&&v!=="right"?o==="center"?l/2+d:l+2+d:0,D=0,L=s.length;D<L;++D){for(T=s[D],k=this.labelTextColors[D],e.fillStyle=k,ut(T.before,_),M=T.lines,a&&M.length&&(this._drawColorBox(e,t,D,y,i),f=Math.max(h.lineHeight,c)),O=0,I=M.length;O<I;++O)_(M[O]),f=h.lineHeight;ut(T.after,_)}g=0,f=h.lineHeight,ut(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const c=as(i.rtl,this.x,this.width);for(t.x=Ho(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=c.textAlign(i.footerAlign),e.textBaseline="middle",o=Vt(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=i,{topLeft:h,topRight:f,bottomLeft:g,bottomRight:y}=Ai(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+l,c+d-y),e.quadraticCurveTo(a+l,c+d,a+l-y,c+d),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+g,c+d),e.quadraticCurveTo(a,c+d,a,c+d-g),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=ir[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Og(this,t),c=Object.assign({},o,this._size),l=Ng(e,t,c),d=Lg(t,c,l,e);(s._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=se(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),L_(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),V_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!Ba(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),c=e||!Ba(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=ir[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}U(ou,"positioners",ir);var pM={id:"tooltip",_element:ou,positioners:ir,afterInit(n,t,e){e&&(n.tooltip=new ou({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:lb},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},gM=Object.freeze({__proto__:null,Colors:S1,Decimation:R1,Filler:Q1,Legend:iM,SubTitle:oM,Title:rM,Tooltip:pM});const mM=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function yM(n,t,e,i){const s=n.indexOf(t);if(s===-1)return mM(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const vM=(n,t)=>n===null?null:$t(Math.round(n),0,t);function Bg(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class au extends $i{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(et(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:yM(i,t,X(e,t),this._addedLabels),vM(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Bg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(au,"id","category"),U(au,"defaults",{ticks:{callback:Bg}});function _M(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,g=r||1,y=d-1,{min:_,max:v}=t,T=!et(o),k=!et(a),M=!et(l),D=(v-_)/(h+1);let O=Op((v-_)/y/g)*g,L,I,b,E;if(O<1e-14&&!T&&!k)return[{value:_},{value:v}];E=Math.ceil(v/O)-Math.floor(_/O),E>y&&(O=Op(E*O/y/g)*g),et(c)||(L=Math.pow(10,c),O=Math.ceil(O*L)/L),s==="ticks"?(I=Math.floor(_/O)*O,b=Math.ceil(v/O)*O):(I=_,b=v),T&&k&&r&&dk((a-o)/r,O/1e3)?(E=Math.round(Math.min((a-o)/O,d)),O=(a-o)/E,I=o,b=a):M?(I=T?o:I,b=k?a:b,E=l-1,O=(b-I)/E):(E=(b-I)/O,fr(E,Math.round(E),O/1e3)?E=Math.round(E):E=Math.ceil(E));const x=Math.max(Np(O),Np(I));L=Math.pow(10,et(c)?x:c),I=Math.round(I*L)/L,b=Math.round(b*L)/L;let S=0;for(T&&(f&&I!==o?(e.push({value:o}),I<o&&S++,fr(Math.round((I+S*O)*L)/L,o,$g(o,D,n))&&S++):I<o&&S++);S<E;++S){const P=Math.round((I+S*O)*L)/L;if(k&&P>a)break;e.push({value:P})}return k&&f&&b!==a?e.length&&fr(e[e.length-1].value,a,$g(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!k||b===a)&&e.push({value:b}),e}function $g(n,t,{horizontal:e,minRotation:i}){const s=Me(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class Wa extends $i{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return et(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=e?s:c,a=c=>r=i?r:c;if(t){const c=Xe(s),l=Xe(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(s-c)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=_M(s,r);return t.bounds==="ticks"&&__(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return io(t,this.chart.options.locale,this.options.ticks.format)}}class cu extends Wa{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=kt(t)?t:0,this.max=kt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Me(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U(cu,"id","linear"),U(cu,"defaults",{ticks:{callback:mc.formatters.numeric}});const Nr=n=>Math.floor(Ln(n)),pi=(n,t)=>Math.pow(10,Nr(n)+t);function Ug(n){return n/Math.pow(10,Nr(n))===1}function zg(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function bM(n,t){const e=t-n;let i=Nr(e);for(;zg(n,t,i)>10;)i++;for(;zg(n,t,i)<10;)i--;return Math.min(i,Nr(n))}function wM(n,{min:t,max:e}){t=me(n.min,t);const i=[],s=Nr(t);let r=bM(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=me(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)i.push({value:f,major:Ug(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const g=me(n.max,f);return i.push({value:g,major:Ug(g),significand:h}),i}class lu extends $i{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Wa.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return kt(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=kt(t)?Math.max(0,t):null,this.max=kt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!kt(this._userMin)&&(this.min=t===pi(this.min,0)?pi(this.min,-1):pi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(pi(i,-1)),o(pi(s,1)))),i<=0&&r(pi(s,-1)),s<=0&&o(pi(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=wM(e,this);return t.bounds==="ticks"&&__(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":io(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Ln(t),this._valueRange=Ln(this.max)-Ln(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Ln(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}U(lu,"id","logarithmic"),U(lu,"defaults",{ticks:{callback:mc.formatters.logarithmic,major:{enabled:!0}}});function uu(n){const t=n.ticks;if(t.display&&n.display){const e=se(t.backdropPadding);return X(t.font&&t.font.size,Et.font.size)+e.height}return 0}function EM(n,t,e){return e=wt(e)?e:[e],{w:Pk(n,t.string,e),h:e.length*t.lineHeight}}function jg(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function TM(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?ct/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));s[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+s[c],a),h=Vt(l.font),f=EM(n.ctx,h,n._pointLabels[c]);i[c]=f;const g=Zt(n.getIndexAngle(c)+a),y=Math.round(Rd(g)),_=jg(y,d.x,f.w,0,180),v=jg(y,d.y,f.h,90,270);IM(e,t,g,_,v)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=SM(n,i,s)}function IM(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(c=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-c)):s.end>t.b&&(c=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function AM(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,i+s+o,r),l=Math.round(Rd(Zt(c.angle+Rt))),d=CM(c.y,a.h,l),h=PM(l),f=kM(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function xM(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(gn({x:e,y:i},t)||gn({x:e,y:r},t)||gn({x:s,y:i},t)||gn({x:s,y:r},t))}function SM(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:uu(r)/2,additionalAngle:o?ct/s:0};let l;for(let d=0;d<s;d++){c.padding=e[d],c.size=t[d];const h=AM(n,d,c);i.push(h),a==="auto"&&(h.visible=xM(h,l),h.visible&&(l=h))}return i}function PM(n){return n===0||n===180?"center":n<180?"left":"right"}function kM(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function CM(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function RM(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!et(a)){const c=Ai(t.borderRadius),l=se(t.backdropPadding);n.fillStyle=a;const d=i-l.left,h=s-l.top,f=r-i+l.width,g=o-s+l.height;Object.values(c).some(y=>y!==0)?(n.beginPath(),Dr(n,{x:d,y:h,w:f,h:g,radius:c}),n.fill()):n.fillRect(d,h,f,g)}}function MM(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));RM(e,o,r);const a=Vt(o.font),{x:c,y:l,textAlign:d}=r;Ni(e,n._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function ub(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,_t);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function DM(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!i||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),ub(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function OM(n,t,e){return oi(n,{label:e,index:t,type:"pointLabel"})}class sr extends Wa{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=se(uu(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=kt(t)&&!isNaN(t)?t:0,this.max=kt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/uu(this.options))}generateTickLabels(t){Wa.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=pt(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?TM(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=_t/(this._pointLabels.length||1),i=this.options.startAngle||0;return Zt(t*e+Me(i))}getDistanceFromCenterForValue(t){if(et(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(et(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return OM(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Rt+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),ub(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&MM(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),g=s.setContext(f),y=r.setContext(f);DM(this,g,c,o,y)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const d=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=i.setContext(this.getContext(c)),d=Vt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=se(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}Ni(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}U(sr,"id","radialLinear"),U(sr,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:mc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(sr,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(sr,"descriptors",{angleLines:{_fallback:"grid"}});const Ec={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},pe=Object.keys(Ec);function Hg(n,t){return n-t}function qg(n,t){if(et(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),kt(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(ms(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Wg(n,t,e,i){const s=pe.length;for(let r=pe.indexOf(n);r<s-1;++r){const o=Ec[pe[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return pe[r]}return pe[s-1]}function NM(n,t,e,i,s){for(let r=pe.length-1;r>=pe.indexOf(e);r--){const o=pe[r];if(Ec[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return pe[e?pe.indexOf(e):0]}function LM(n){for(let t=pe.indexOf(n)+1,e=pe.length;t<e;++t)if(Ec[pe[t]].common)return pe[t]}function Gg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=Md(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function VM(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=e[a],c>=0&&(t[c].major=!0);return t}function Kg(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:VM(n,i,s,e)}class Lr extends $i{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new qC._date(t.adapters.date);s.init(e),hr(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:qg(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=kt(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=kt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=gk(s,r,o);return this._unit=e.unit||(i.autoSkip?Wg(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):NM(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:LM(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Kg(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=$t(e,0,o),i=$t(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Wg(r.minUnit,e,i,this._getLabelCapacity(e)),a=X(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=ms(c)||c===!0,d={};let h=e,f,g;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const y=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,g=0;f<i;f=+t.add(f,a,o),g++)Gg(d,f,y);return(f===i||s.bounds==="ticks"||g===1)&&Gg(d,f,y),Object.keys(d).sort(Hg).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return pt(o,[t,e,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=i[e],g=l&&h&&f&&f.major;return this._adapter.format(t,s||(g?h:d))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Me(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,Kg(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(qg(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return E_(t.sort(Hg))}}U(Lr,"id","time"),U(Lr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function qo(n,t,e){let i=0,s=n.length-1,r,o,a,c;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=pn(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:c}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=pn(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:c}=n[s]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class du extends Lr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=qo(e,this.min),this._tableRange=qo(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)d=s[o+1],c=s[o-1],l=s[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(qo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return qo(this._table,i*this._tableRange+this._minPos,!0)}}U(du,"id","timeseries"),U(du,"defaults",Lr.defaults);var FM=Object.freeze({__proto__:null,CategoryScale:au,LinearScale:cu,LogarithmicScale:lu,RadialLinearScale:sr,TimeScale:Lr,TimeSeriesScale:du});const BM=[HC,b1,gM,FM];ze.register(...BM);const cs={};function jd(n){cs[n]&&(cs[n].destroy(),delete cs[n])}function db(){const n=document.documentElement.getAttribute("data-theme")==="dark";return{textColor:n?"#94A3B8":"#64748B",gridColor:n?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",bgColor:n?"#1E2235":"#FFFFFF"}}function Yg(n,t){const e=document.getElementById(n);if(!e)return;if(jd(n),!t||t.length===0){e.getContext("2d").clearRect(0,0,e.width,e.height);return}db();const i=new ze(e,{type:"doughnut",data:{labels:t.map(s=>`${s.emoji} ${s.category}`),datasets:[{data:t.map(s=>s.amount),backgroundColor:bS.slice(0,t.length),borderWidth:0,hoverBorderWidth:2,hoverBorderColor:"#fff",borderRadius:4,spacing:2}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"65%",plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,titleFont:{size:13,weight:"600"},bodyFont:{size:12},callbacks:{label:function(s){const r=s.dataset.data.reduce((a,c)=>a+c,0),o=(s.parsed/r*100).toFixed(1);return` ₹${s.parsed.toLocaleString("en-IN")} (${o}%)`}}}},animation:{animateRotate:!0,duration:800,easing:"easeOutQuart"}}});return cs[n]=i,i}function $M(n,t,e,i){const s=document.getElementById(n);if(!s)return;jd(n);const{textColor:r,gridColor:o}=db(),a=new ze(s,{type:"bar",data:{labels:t,datasets:[{label:"Income",data:e,backgroundColor:"rgba(16, 185, 129, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7},{label:"Expenses",data:i,backgroundColor:"rgba(239, 68, 68, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{color:r,padding:16,usePointStyle:!0,pointStyle:"rectRounded",font:{size:12,weight:"500"}}},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,callbacks:{label:function(c){return` ${c.dataset.label}: ₹${c.parsed.y.toLocaleString("en-IN")}`}}}},scales:{x:{grid:{display:!1},ticks:{color:r,font:{size:11}}},y:{grid:{color:o},ticks:{color:r,font:{size:11},callback:function(c){return"₹"+c.toLocaleString("en-IN")}},beginAtZero:!0}},animation:{duration:800,easing:"easeOutQuart"}}});return cs[n]=a,a}function UM(){Object.keys(cs).forEach(n=>{jd(n)})}let Se={user:null,profile:null,accounts:[],transactions:[]},$e=new Date().getMonth(),yr=new Date().getFullYear();function hb(n){Se={...Se,...n},UM();const{totalMoney:t}=Zn(Se.accounts,Se.transactions),e=Fv(Se.accounts,Se.transactions),i=`${yr}-${String($e+1).padStart(2,"0")}`,s=Bv(Se.transactions,i),r=s.income>0||s.expenses>0;return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Analytics & Reports 📊</h1>
        <p class="page-subtitle">Understand where your money comes from, where it goes, and where it is currently stored.</p>
      </div>

      <!-- Account Distribution Chart Card -->
      <div class="chart-card" style="margin-bottom: var(--space-6);">
        <h3 class="chart-title">Account Money Distribution (${W(t)})</h3>
        <div class="chart-container">
          <canvas id="accounts-distribution-chart"></canvas>
        </div>

        <div class="category-list">
          ${e.map((o,a)=>`
            <div class="category-item">
              <div class="category-color" style="background: ${Wo(a)};"></div>
              <div class="category-info">
                <div class="category-name">${o.account.icon||"🏦"} ${o.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0,o.percentage)}%; background: ${Wo(a)};"></div>
                </div>
              </div>
              <div>
                <div class="category-amount">${W(o.balance)}</div>
                <div class="category-percentage">${o.percentage.toFixed(1)}%</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Month Selector Navigation -->
      <div class="month-selector">
        <button class="month-nav-btn" id="btn-month-prev" title="Previous Month">❮</button>
        <div class="month-display">${Dv($e)} ${yr}</div>
        <button class="month-nav-btn" id="btn-month-next" title="Next Month">❯</button>
      </div>

      ${r?`
        <!-- Monthly Overview Cards -->
        <div class="analytics-overview">
          <div class="analytics-stat">
            <div class="analytics-stat-icon">📥</div>
            <div class="analytics-stat-value income">${W(s.income)}</div>
            <div class="analytics-stat-label">Total Income</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">📤</div>
            <div class="analytics-stat-value expense">${W(s.expenses)}</div>
            <div class="analytics-stat-label">Total Expenses</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">💰</div>
            <div class="analytics-stat-value savings">${W(s.savings)}</div>
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
              <div class="highlight-stat-detail">${W(s.highestCategory.amount)} (${s.highestCategory.percentage.toFixed(1)}%)</div>
            `:'<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>'}
          </div>

          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Single Expense</div>
            ${s.highestExpense?`
              <div class="highlight-stat-icon">${Nv(s.highestExpense.category)}</div>
              <div class="highlight-stat-value">${s.highestExpense.reason||s.highestExpense.category}</div>
              <div class="highlight-stat-detail">${W(s.highestExpense.amount)}</div>
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
                  <div class="category-color" style="background: ${Wo(a)};"></div>
                  <div class="category-info">
                    <div class="category-name">${o.emoji} ${o.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${o.percentage}%; background: ${Wo(a)};"></div>
                    </div>
                  </div>
                  <div>
                    <div class="category-amount">${W(o.amount)}</div>
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
      `:xP()}
    </div>
  `}function Wo(n){const t=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];return t[n%t.length]}function fb(){const n=document.getElementById("btn-month-prev"),t=document.getElementById("btn-month-next");n&&(n.onclick=()=>{$e===0?($e=11,yr--):$e--,Xg()}),t&&(t.onclick=()=>{$e===11?($e=0,yr++):$e++,Xg()});const e=Fv(Se.accounts,Se.transactions);e.length>0&&setTimeout(()=>{Yg("accounts-distribution-chart",e.map(r=>({category:r.account.name,emoji:r.account.icon||"🏦",amount:r.balance})))},50);const i=`${yr}-${String($e+1).padStart(2,"0")}`,s=Bv(Se.transactions,i);s.categories.length>0&&setTimeout(()=>{Yg("categories-chart",s.categories)},50),(s.income>0||s.expenses>0)&&setTimeout(()=>{$M("income-expense-bar-chart",[Dv($e)],[s.income],[s.expenses])},50)}function Xg(){const n=document.querySelector(".page");n&&(n.outerHTML=hb(Se),fb())}let ts={user:null,profile:null,transactions:[],budgets:[]};function zM(n){ts={...ts,...n};const t=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{monthlyProgress:e,categoryProgress:i}=Kv(ts.budgets,ts.transactions,t);return`
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
            <div class="budget-title">${e?W(e.budget):"Not Set"}</div>
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
            <div>Spent: <strong>${W(e.spent)}</strong></div>
            <div>Remaining: <strong style="color: ${e.remaining<0?"var(--expense)":"var(--income)"};">${W(e.remaining)}</strong></div>
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
                  <span>Budget: ${W(s.budget)} | Spent: ${W(s.spent)}</span>
                  <span style="font-weight: 600; color: ${s.remaining<0?"var(--expense)":"var(--income)"};">
                    ${s.remaining<0?"Exceeded by ":"Remaining: "}${W(Math.abs(s.remaining))}
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
  `}function jM(n){const t=document.getElementById("btn-set-budget-modal");t&&(t.onclick=()=>bl(n));const e=document.getElementById("btn-quick-monthly-budget");e&&(e.onclick=()=>bl(n,"monthly"));const i=document.getElementById("btn-add-category-budget");i&&(i.onclick=()=>bl(n,"category")),document.querySelectorAll(".btn-delete-budget").forEach(s=>{s.onclick=async()=>{const r=s.dataset.category;if(await gs({icon:"🗑️",title:"Delete Budget",message:`Are you sure you want to remove the budget for ${r}?`,danger:!0}))try{await WS(ts.user.uid,r),H.success("Budget removed!"),n&&n()}catch{H.error("Unable to remove budget.")}}})}function bl(n,t="monthly"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,i=`
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
          ${to.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
  `;Ie({title:"🎯 Set Budget Limit",content:i,onOpen:s=>{let r=t;const o=s.querySelector("#tab-b-monthly"),a=s.querySelector("#tab-b-category"),c=s.querySelector("#group-b-category");o.onclick=()=>{r="monthly",o.classList.add("active"),a.classList.remove("active"),c.style.display="none"},a.onclick=()=>{r="category",a.classList.add("active"),o.classList.remove("active"),c.style.display="block"},s.querySelector("#set-budget-form").onsubmit=async l=>{l.preventDefault();const d=s.querySelector("#budget-amount").value,h=s.querySelector("#budget-category").value;if(s.querySelector("#budget-amount-error").textContent="",!d||Number(d)<=0){s.querySelector("#budget-amount-error").textContent="Please enter a valid budget amount.";return}const f=s.querySelector("#btn-save-budget");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{const g=ts.user.uid;r==="monthly"?await HS(g,d,e):await qS(g,h,d,e),ee(),H.success("🎯 Budget set successfully!"),n&&n()}catch{H.error("Unable to save budget."),f.disabled=!1,f.innerHTML="Save Budget"}}}})}let es={user:null,profile:null};function HM(n){var a;es={...es,...n};const{user:t,profile:e}=es,i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(t==null?void 0:t.email)||(e==null?void 0:e.email)||"",r=i.charAt(0).toUpperCase(),o=e!=null&&e.createdAt?Zr(e.createdAt.split("T")[0]):"Recently";return`
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

        ${(a=es.profile)!=null&&a.pinEnabled?`
          <div class="settings-item" id="btn-profile-lock-app" style="cursor: pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">🔒</div>
              <div>
                <div class="settings-item-text">Lock App</div>
                <div class="settings-item-subtitle">Lock the app and require PIN to unlock</div>
              </div>
            </div>
            <div class="settings-item-right">❯</div>
          </div>
        `:""}

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
  `}function qM(n,t){const e=document.getElementById("btn-edit-profile");e&&(e.onclick=()=>{var c,l;const a=`
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${((c=es.profile)==null?void 0:c.name)||((l=es.user)==null?void 0:l.displayName)||""}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;Ie({title:"✏️ Edit Profile",content:a,onOpen:d=>{d.querySelector("#edit-profile-form").onsubmit=async h=>{h.preventDefault();const f=d.querySelector("#profile-name-input").value,g=wd(f);if(g){d.querySelector("#profile-name-error").textContent=g;return}const y=d.querySelector("#btn-save-profile-name");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Saving...';try{await $S(f),ee(),H.success("Profile updated!"),t&&t()}catch{H.error("Unable to update profile."),y.disabled=!1,y.innerHTML="Save Changes"}}}})});const i=document.getElementById("btn-change-password");i&&(i.onclick=()=>{Ie({title:"🔑 Change Password",content:`
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
      `,onOpen:a=>{a.querySelector("#change-pass-form").onsubmit=async c=>{c.preventDefault();const l=a.querySelector("#curr-pass").value,d=a.querySelector("#new-pass").value,h=a.querySelector("#confirm-new-pass").value;a.querySelector("#curr-pass-error").textContent="",a.querySelector("#new-pass-error").textContent="",a.querySelector("#confirm-new-pass-error").textContent="";const f=bd(d);if(f){a.querySelector("#new-pass-error").textContent=f;return}const g=s_(d,h);if(g){a.querySelector("#confirm-new-pass-error").textContent=g;return}const y=a.querySelector("#btn-save-new-pass");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Updating...';try{await US(l,d),ee(),H.success("Password updated successfully!")}catch{a.querySelector("#curr-pass-error").textContent="Incorrect current password or re-authentication failed.",y.disabled=!1,y.innerHTML="Update Password"}}}})});const s=document.getElementById("btn-profile-logout");s&&(s.onclick=async()=>{await gs({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out of Money Control?",confirmText:"Log Out",danger:!0})&&(await md(),H.info("Logged out."),n&&n())});const r=document.getElementById("btn-profile-lock-app");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))})}function WM(n,t=[],e="money-control-transactions"){if(!n||n.length===0)throw new Error("No transactions to export.");const i=a=>{const c=t.find(l=>l.id===a);return c?c.name:""},s=["Date","Type","Amount","Reason","Category","From Account","To Account","Notes"],r=n.sort((a,c)=>new Date(a.date)-new Date(c.date)).map(a=>[a.date,a.type,a.amount,`"${(a.reason||"").replace(/"/g,'""')}"`,a.category||"",`"${i(a.sourceAccountId).replace(/"/g,'""')}"`,`"${i(a.destinationAccountId).replace(/"/g,'""')}"`,`"${(a.notes||"").replace(/"/g,'""')}"`]),o=[s.join(","),...r.map(a=>a.join(","))].join(`
`);KM(o,`${e}.csv`,"text/csv")}function GM(n,t,e,i){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],r=`${i}-${String(e+1).padStart(2,"0")}`,o=n.filter(v=>v.date&&v.date.startsWith(r)),a=v=>{const T=t.find(k=>k.id===v);return T?T.name:""},c=o.filter(v=>v.type==="INCOME").reduce((v,T)=>v+T.amount,0),l=o.filter(v=>v.type==="EXPENSE").reduce((v,T)=>v+T.amount,0),d={};o.filter(v=>v.type==="EXPENSE").forEach(v=>{const T=v.category||"Other";d[T]=(d[T]||0)+v.amount});const h=Object.entries(d).sort((v,T)=>T[1]-v[1]),f=`
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

  ${h.length>0?`
  <h2>Expense Categories</h2>
  <table>
    <thead><tr><th>Category</th><th>Amount</th><th>% of Total</th></tr></thead>
    <tbody>
      ${h.map(([v,T])=>`
        <tr>
          <td>${v}</td>
          <td>₹${T.toLocaleString("en-IN")}</td>
          <td>${l>0?(T/l*100).toFixed(1):0}%</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
  `:""}

  <h2>All Activity Items</h2>
  <table>
    <thead><tr><th>Date</th><th>Reason</th><th>Amount</th><th>Category</th><th>Account(s)</th><th>Type</th></tr></thead>
    <tbody>
      ${o.sort((v,T)=>new Date(v.date)-new Date(T.date)).map(v=>{let T="";return v.type==="INCOME"?T=`→ ${a(v.destinationAccountId)}`:v.type==="EXPENSE"?T=`← ${a(v.sourceAccountId)}`:v.type==="TRANSFER"&&(T=`${a(v.sourceAccountId)} → ${a(v.destinationAccountId)}`),`
            <tr class="${v.type==="INCOME"?"income-row":v.type==="EXPENSE"?"expense-row":"transfer-row"}">
              <td>${v.date}</td>
              <td>${v.reason||"-"}</td>
              <td>${v.type==="INCOME"?"+":v.type==="EXPENSE"?"-":"↔ "}₹${v.amount.toLocaleString("en-IN")}</td>
              <td>${v.category||"-"}</td>
              <td>${T||"-"}</td>
              <td>${v.type}</td>
            </tr>
          `}).join("")}
    </tbody>
  </table>

  <div class="footer">
    Generated by Money Control V2 on ${new Date().toLocaleDateString("en-IN",{dateStyle:"long"})}
  </div>
</body>
</html>`,g=new Blob([f],{type:"text/html"}),y=URL.createObjectURL(g),_=window.open(y,"_blank");_&&(_.onload=()=>{setTimeout(()=>URL.revokeObjectURL(y),1e3)})}function KM(n,t,e){const i=new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}let Xt={user:null,profile:null,transactions:[]};function pb(n){var l;Xt={...Xt,...n};const{profile:t}=Xt,e=document.documentElement.getAttribute("data-theme")||"light",i=((l=t==null?void 0:t.settings)==null?void 0:l.allowNegativeBalance)||!1,s=(t==null?void 0:t.initialBalance)||0,r=(t==null?void 0:t.pinEnabled)||!1,o=(t==null?void 0:t.autoLockTimeout)!==void 0?t.autoLockTimeout:5,a=tP(),c=ZS();return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Settings ⚙️</h1>
        <p class="page-subtitle">Manage preferences, security, appearance, and data exports.</p>
      </div>

      <!-- Security Section -->
      <div class="settings-section">
        <div class="settings-section-title">🔐 Security</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">🔒</div>
              <div>
                <div class="settings-item-text">PIN Lock</div>
                <div class="settings-item-subtitle">${r?"PIN protection is enabled":"Add a PIN to protect your data"}</div>
              </div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-pin-lock" ${r?"checked":""} />
              <span class="toggle-slider"></span>
            </label>
          </div>

          ${r?`
            <div class="settings-item" id="btn-change-pin">
              <div class="settings-item-left">
                <div class="settings-item-icon">🔑</div>
                <div>
                  <div class="settings-item-text">Change PIN</div>
                  <div class="settings-item-subtitle">Set a new PIN for your account</div>
                </div>
              </div>
              <div class="settings-item-right">❯</div>
            </div>

            <div class="settings-item">
              <div class="settings-item-left">
                <div class="settings-item-icon">⏱️</div>
                <div>
                  <div class="settings-item-text">Auto Lock</div>
                  <div class="settings-item-subtitle">Lock app after inactivity</div>
                </div>
              </div>
              <select id="select-auto-lock" class="form-select" style="max-width: 160px; margin: 0;">
                <option value="0" ${o===0?"selected":""}>Immediately</option>
                <option value="1" ${o===1?"selected":""}>After 1 minute</option>
                <option value="5" ${o===5?"selected":""}>After 5 minutes</option>
                <option value="15" ${o===15?"selected":""}>After 15 minutes</option>
                <option value="-1" ${o===-1?"selected":""}>Never</option>
              </select>
            </div>

            <div class="settings-item" id="btn-lock-app-now" style="cursor: pointer;">
              <div class="settings-item-left">
                <div class="settings-item-icon">🔒</div>
                <div>
                  <div class="settings-item-text">Lock App Now</div>
                  <div class="settings-item-subtitle">Immediately lock the application</div>
                </div>
              </div>
              <div class="settings-item-right">❯</div>
            </div>
          `:""}
        </div>
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

      <!-- App Section -->
      ${a||c?`
        <div class="settings-section">
          <div class="settings-section-title">📱 App</div>
          <div class="settings-group">
            ${a?`
              <div class="settings-item" id="btn-install-pwa" style="cursor: pointer;">
                <div class="settings-item-left">
                  <div class="settings-item-icon">📲</div>
                  <div>
                    <div class="settings-item-text">Install Money Control</div>
                    <div class="settings-item-subtitle">Add to your home screen for quick access</div>
                  </div>
                </div>
                <div class="settings-item-right">Install</div>
              </div>
            `:""}
            ${c?`
              <div class="settings-item">
                <div class="settings-item-left">
                  <div class="settings-item-icon">✅</div>
                  <div>
                    <div class="settings-item-text">App Installed</div>
                    <div class="settings-item-subtitle">Money Control is installed on this device</div>
                  </div>
                </div>
              </div>
            `:""}
          </div>
        </div>
      `:""}

      <!-- Financial Controls Section -->
      <div class="settings-section">
        <div class="settings-section-title">Financial Controls</div>
        <div class="settings-group">
          <div class="settings-item" id="btn-edit-initial-balance">
            <div class="settings-item-left">
              <div class="settings-item-icon">💵</div>
              <div>
                <div class="settings-item-text">Initial Balance</div>
                <div class="settings-item-subtitle">Current: ${W(s)}</div>
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
  `}function gb(n,t){const e=document.getElementById("toggle-pin-lock");e&&(e.onchange=async _=>{if(_.target.checked)aP(Xt.user.uid,()=>{t&&t()}),_.target.checked=!1;else if(await gs({icon:"🔓",title:"Disable PIN Lock",message:"Are you sure you want to remove PIN protection? Your financial data will no longer be locked.",confirmText:"Remove PIN",danger:!0}))try{await Jv(Xt.user.uid),H.success("🔓 PIN lock disabled."),t&&t()}catch{H.error("Unable to disable PIN."),_.target.checked=!0}else _.target.checked=!0});const i=document.getElementById("btn-change-pin");i&&(i.onclick=async()=>{const _=await Fa(Xt.user.uid);cP(Xt.user.uid,_.pinHash,()=>{t&&t()})});const s=document.getElementById("select-auto-lock");s&&(s.onchange=async _=>{const v=parseInt(_.target.value);try{await iP(Xt.user.uid,v),H.success("⏱️ Auto-lock updated."),t&&t()}catch{H.error("Unable to update auto-lock setting.")}});const r=document.getElementById("btn-lock-app-now");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))});const o=document.getElementById("btn-install-pwa");o&&(o.onclick=async()=>{await eP()&&(H.success("📲 Money Control installed!"),t&&t())});const a=document.getElementById("btn-theme-light");a&&(a.onclick=()=>{document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),Qg()});const c=document.getElementById("btn-theme-dark");c&&(c.onclick=()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),Qg()});const l=document.getElementById("toggle-negative-balance");l&&(l.onchange=async _=>{const v=_.target.checked;try{await PS(Xt.user.uid,{allowNegativeBalance:v}),H.success(`Negative balance ${v?"enabled":"disabled"}.`),t&&t()}catch{H.error("Unable to update setting."),_.target.checked=!v}});const d=document.getElementById("btn-edit-initial-balance");d&&(d.onclick=()=>{var T;const v=`
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
              <input type="number" id="new-initial-input" class="form-input" value="${((T=Xt.profile)==null?void 0:T.initialBalance)||0}" step="any" min="0" required autofocus />
            </div>
            <div class="form-error" id="new-initial-error"></div>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-initial">Save Initial Balance</button>
        </form>
      `;Ie({title:"💵 Edit Initial Balance",content:v,onOpen:k=>{k.querySelector("#edit-initial-form").onsubmit=async M=>{M.preventDefault();const D=k.querySelector("#new-initial-input").value,O=eo(D);if(O){k.querySelector("#new-initial-error").textContent=O;return}const L=k.querySelector("#btn-save-initial");L.disabled=!0,L.innerHTML='<span class="spinner"></span> Saving...';try{await Uv(Xt.user.uid,Number(D)),ee(),H.success("Initial balance updated!"),t&&t()}catch{H.error("Unable to update initial balance."),L.disabled=!1,L.innerHTML="Save Initial Balance"}}}})});const h=document.getElementById("btn-export-csv");h&&(h.onclick=()=>{try{WM(Xt.transactions,Xt.accounts),H.success("📊 Transactions exported to CSV!")}catch(_){H.error(_.message||"Unable to export transactions.")}});const f=document.getElementById("btn-export-report");f&&(f.onclick=()=>{try{const _=new Date;GM(Xt.transactions,Xt.accounts,_.getMonth(),_.getFullYear()),H.success("📑 Printable report opened!")}catch{H.error("Unable to generate report.")}});const g=document.getElementById("btn-settings-logout");g&&(g.onclick=async()=>{await gs({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out?",confirmText:"Log Out",danger:!0})&&(await md(),H.info("Logged out."),n&&n())});const y=document.getElementById("btn-settings-delete-account");y&&(y.onclick=()=>{Ie({title:"🚨 Delete Account",content:`
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
      `,onOpen:v=>{v.querySelector("#delete-acc-form").onsubmit=async T=>{T.preventDefault();const k=v.querySelector("#del-pass-input").value;if(v.querySelector("#del-pass-error").textContent="",!k){v.querySelector("#del-pass-error").textContent="Please enter your password.";return}const M=v.querySelector("#btn-confirm-delete-acc");M.disabled=!0,M.innerHTML='<span class="spinner"></span> Deleting...';try{await zS(k),ee(),H.info("Account deleted."),n&&n()}catch{v.querySelector("#del-pass-error").textContent="Incorrect password or re-authentication failed.",M.disabled=!1,M.innerHTML="Delete My Account Permanently"}}}})})}function Qg(){const n=document.querySelector(".page");n&&(n.outerHTML=pb(Xt),gb())}function mb(n){return`
    <aside class="sidebar">
      <div class="sidebar-logo">
        <img src="/icon-192.png" alt="Money Control" class="sidebar-logo-icon" style="width: 32px; height: 32px; border-radius: 8px;" />
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
  `}function yb(){return`
    <header class="mobile-header">
      <button class="mobile-hamburger-btn" id="mobile-hamburger-btn" aria-label="Open Navigation Menu">
        <span>☰</span>
      </button>
      <div class="mobile-header-brand">
        <img src="/icon-192.png" alt="Money Control" class="mobile-header-logo" />
        <span class="mobile-header-title">Money Control</span>
      </div>
    </header>
  `}function vb(n,t,e){const i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(e==null?void 0:e.email)||(t==null?void 0:t.email)||"";return`
    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
    <aside class="mobile-drawer" id="mobile-drawer">
      <div class="mobile-drawer-header">
        <div class="mobile-drawer-logo">
          <img src="/icon-192.png" alt="Money Control" style="width: 28px; height: 28px; border-radius: 8px;" />
          <span style="font-weight: 800; font-size: 1.1rem; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Money Control</span>
        </div>
        <button class="mobile-drawer-close" id="mobile-drawer-close" aria-label="Close Menu">✕</button>
      </div>

      <div class="mobile-drawer-user">
        <div class="mobile-drawer-avatar">${i?i.charAt(0).toUpperCase():"👤"}</div>
        <div class="mobile-drawer-user-info">
          <div class="mobile-drawer-user-name">${i}</div>
          <div class="mobile-drawer-user-email">${s}</div>
        </div>
      </div>

      <nav class="mobile-drawer-nav">
        ${[{id:"dashboard",icon:"🏠",label:"Dashboard"},{id:"accounts",icon:"🏦",label:"Accounts"},{id:"transactions",icon:"💸",label:"Transactions"},{id:"analytics",icon:"📊",label:"Analytics"},{id:"budget",icon:"🎯",label:"Budget"},{id:"money-control",icon:"📅",label:"Money Control"},{id:"profile",icon:"👤",label:"Profile"},{id:"settings",icon:"⚙️",label:"Settings"}].map(a=>`
          <div class="mobile-drawer-item ${n===a.id?"active":""}" data-page="${a.id}">
            <span class="mobile-drawer-icon">${a.icon}</span>
            <span>${a.label}</span>
          </div>
        `).join("")}

        <div class="mobile-drawer-divider"></div>

        <div class="mobile-drawer-item" id="mobile-drawer-lock-app">
          <span class="mobile-drawer-icon">🔒</span>
          <span>Lock App</span>
        </div>

        <div class="mobile-drawer-item danger" id="mobile-drawer-logout">
          <span class="mobile-drawer-icon">🚪</span>
          <span>Logout</span>
        </div>
      </nav>
    </aside>
  `}function _b(n){return`
    <nav class="bottom-nav">
      <div class="bottom-nav-items">
        ${[{id:"dashboard",icon:"🏠",label:"Home"},{id:"accounts",icon:"🏦",label:"Accounts"},{id:"add",icon:"➕",label:"Add",isAdd:!0},{id:"transactions",icon:"📜",label:"Txns"},{id:"analytics",icon:"📊",label:"Analytics"}].map(e=>e.isAdd?`
              <div class="bottom-nav-add-wrapper">
                <button class="bottom-nav-add" data-action="add" id="mobile-add-btn" aria-label="Quick Actions">
                  <span>➕</span>
                </button>
              </div>
            `:`
            <div class="bottom-nav-item ${n===e.id?"active":""}" data-page="${e.id}">
              <span class="bottom-nav-item-icon">${e.icon}</span>
              <span class="bottom-nav-item-label">${e.label}</span>
            </div>
          `).join("")}
      </div>
    </nav>
  `}function YM(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.add("open"),t&&t.classList.add("open"),document.body.style.overflow="hidden"}function Ki(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}function XM(n,t){document.querySelectorAll(".sidebar-link[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}}),document.querySelectorAll(".bottom-nav-item[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}});const e=document.getElementById("mobile-add-btn");e&&(e.onclick=()=>{window.dispatchEvent(new CustomEvent("open-add-menu"))});const i=document.getElementById("mobile-hamburger-btn");i&&(i.onclick=()=>YM());const s=document.getElementById("mobile-drawer-close");s&&(s.onclick=()=>Ki());const r=document.getElementById("mobile-drawer-overlay");r&&(r.onclick=()=>Ki()),document.querySelectorAll(".mobile-drawer-item[data-page]").forEach(l=>{l.onclick=()=>{Ki();const d=l.dataset.page;n(d)}});const o=document.getElementById("mobile-drawer-lock-app");o&&(o.onclick=()=>{Ki(),t&&t.pinEnabled&&t.pinHash?window.dispatchEvent(new CustomEvent("lock-app")):(H.info("🔒 PIN Lock is not enabled. Go to Settings → PIN Lock to set your PIN."),n("settings"))});const a=document.getElementById("mobile-drawer-logout");a&&(a.onclick=async()=>{Ki(),await gs({icon:"🚪",title:"Logout?",message:"Are you sure you want to log out of Money Control?",confirmText:"Logout",danger:!0})&&(await md(),H.info("Logged out successfully."))});const c=document.getElementById("mobile-drawer");if(c){let l=0;c.ontouchstart=d=>{l=d.touches[0].clientX},c.ontouchmove=d=>{const h=d.touches[0].clientX;l-h>50&&Ki()}}}function QM(){return`
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
      ${JM(3)}
    </div>
  `}function JM(n=5){let t="";for(let e=0;e<n;e++)t+=`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;return t}const F={user:null,profile:null,accounts:[],transactions:[],budgets:[],activePage:"dashboard",selectedAccountId:null,unsubscribeAccounts:null,unsubscribeTx:null,authLoading:!0,dashboardError:null,isLocked:!1,pinEnabled:!1,pinHash:null,autoLockTimeout:5,lastActivityTime:Date.now()};window.appState=F;let ma=null;function ZM(){try{const n=localStorage.getItem("theme");n?document.documentElement.setAttribute("data-theme",n):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.setAttribute("data-theme","dark"))}catch{document.documentElement.setAttribute("data-theme","dark")}}ZM();try{GS()}catch(n){console.warn("PWA initialization warning:",n)}const so=document.getElementById("app");function tD(){so.innerHTML=`
    <div class="auth-page" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-primary);">
      <div class="auth-container" style="text-align: center; max-width: 360px; padding: 24px;">
        <div class="auth-logo" style="margin-bottom: 24px;">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 80px; height: 80px; border-radius: 20px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.35); margin: 0 auto 16px auto; display: block;" />
          <h1 class="auth-logo-title" style="font-size: 1.75rem; font-weight: 800; margin-bottom: 8px;">Money Control</h1>
          <p class="auth-logo-tagline" style="font-size: 0.9375rem; color: var(--text-secondary);">Restoring session...</p>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; min-height: 48px;">
          <span class="spinner" style="width: 32px; height: 32px; border-width: 3px;"></span>
        </div>
      </div>
    </div>
  `}function eD(){tD(),BS(async n=>{if(F.authLoading=!1,F.unsubscribeAccounts&&(F.unsubscribeAccounts(),F.unsubscribeAccounts=null),F.unsubscribeTx&&(F.unsubscribeTx(),F.unsubscribeTx=null),!n){F.user=null,F.profile=null,F.accounts=[],F.transactions=[],F.budgets=[],F.isLocked=!1,F.pinEnabled=!1,F.pinHash=null,F.dashboardError=null,Ei(),wb(),hu();return}F.user=n,iD();try{await bb(n.uid)}catch(t){console.error("Error loading user data:",t),F.dashboardError=t,ke()}}),window.addEventListener("hashchange",oD),window.addEventListener("open-add-menu",()=>{cD()}),window.addEventListener("lock-app",()=>{Ga()}),aD()}async function bb(n){var t,e,i,s,r;F.dashboardError=null;try{const o=new Promise(l=>setTimeout(()=>l(null),3e3));let a=await Promise.race([Pr(n),o]);if(!a){const l=((t=F.user)==null?void 0:t.displayName)||((i=(e=F.user)==null?void 0:e.email)==null?void 0:i.split("@")[0])||"User";try{await $v(n,{name:l,email:((s=F.user)==null?void 0:s.email)||"",createdAt:new Date().toISOString()}),a=await Pr(n)}catch(d){console.warn("Profile creation fallback:",d),a={name:l,email:((r=F.user)==null?void 0:r.email)||"",initialBalance:0}}}if(F.profile=a,!a||a.initialBalance===null||a.initialBalance===void 0){nD();return}try{await Hv(n,a.initialBalance)}catch(l){console.warn("ensureDefaultAccounts warning:",l)}try{F.budgets=await yd(n)}catch{F.budgets=[]}let c;try{c=await Fa(n)}catch(l){console.warn("getPinData warning in loadUserData:",l),c={pinHash:null,pinEnabled:!1,pinSetupPromptShown:!0,autoLockTimeout:5}}F.pinEnabled=c.pinEnabled,F.pinHash=c.pinHash,F.autoLockTimeout=c.autoLockTimeout!==void 0?c.autoLockTimeout:5,F.unsubscribeAccounts=RS(n,(l,d)=>{d?(console.error("Accounts subscription error:",d),F.dashboardError=d):F.accounts=l,F.isLocked||ke()}),F.unsubscribeTx=DS(n,(l,d)=>{d?console.error("Transactions subscription error:",d):F.transactions=l,F.isLocked||ke()}),F.pinEnabled&&F.pinHash?(F.isLocked=!0,Zv(n,F.pinHash,()=>{F.isLocked=!1,F.lastActivityTime=Date.now(),ya(),ke()})):c.pinSetupPromptShown?(F.isLocked=!1,ya(),ke()):oP(n,()=>{Fa(n).then(l=>{F.pinEnabled=l.pinEnabled,F.pinHash=l.pinHash,F.pinEnabled&&ya(),ke()})})}catch(o){console.error("loadUserData error:",o),F.dashboardError=o,ke()}}function hu(){so.innerHTML=wP(),c_()}function nD(){so.innerHTML=EP(),TP(F.user.uid,async()=>{await bb(F.user.uid)})}function iD(){so.innerHTML=`
    <div class="app-layout">
      ${yb()}
      ${mb(F.activePage)}
      <main class="main-content">
        ${QM()}
      </main>
      ${_b(F.activePage)}
      ${vb(F.activePage,F.user,F.profile)}
    </div>
  `}function ke(){if(F.isLocked)return;const n=window.location.hash.replace("#/","").replace("#","");n&&["dashboard","accounts","transactions","money-control","analytics","budget","profile","settings"].includes(n)?F.activePage=n:F.activePage="dashboard";const t=sD(F.activePage);so.innerHTML=`
    <div class="app-layout">
      ${yb()}
      ${mb(F.activePage)}
      <main class="main-content" id="main-content-area">
        ${t}
      </main>
      ${_b(F.activePage)}
      ${vb(F.activePage,F.user,F.profile)}
    </div>
  `,XM(fu,F),rD(F.activePage)}function sD(n){switch(n){case"dashboard":return Ip(F);case"accounts":return SP(F);case"transactions":return u_(F);case"money-control":return ra(F);case"analytics":return hb(F);case"budget":return zM(F);case"profile":return HM(F);case"settings":return pb(F);default:return Ip(F)}}function rD(n){const t=async()=>{if(F.user){F.profile=await Pr(F.user.uid),F.budgets=await yd(F.user.uid);const e=await Fa(F.user.uid);F.pinEnabled=e.pinEnabled,F.pinHash=e.pinHash,F.autoLockTimeout=e.autoLockTimeout!==void 0?e.autoLockTimeout:5,ke()}};switch(n){case"dashboard":Ap(fu,t);break;case"accounts":CP(t);break;case"transactions":f_(t);break;case"money-control":oa(t);break;case"analytics":fb();break;case"budget":jM(t);break;case"profile":qM(()=>hu(),t);break;case"settings":gb(()=>hu(),t);break;default:Ap(fu,t);break}}function fu(n){n!=="accounts"&&(F.selectedAccountId=null),F.activePage=n,window.location.hash=`#/${n}`}function oD(){var n;F.user&&((n=F.profile)==null?void 0:n.initialBalance)!==null&&!F.isLocked&&ke()}function Ga(){!F.pinEnabled||!F.pinHash||!F.user||(F.isLocked=!0,Zv(F.user.uid,F.pinHash,()=>{F.isLocked=!1,F.lastActivityTime=Date.now(),ya(),ke()}))}function ya(){if(wb(),!F.pinEnabled||!F.pinHash||F.autoLockTimeout<0)return;const n=F.autoLockTimeout===0?0:F.autoLockTimeout*60*1e3;n>0&&(ma=setInterval(()=>{Date.now()-F.lastActivityTime>=n&&!F.isLocked&&Ga()},1e4))}function wb(){ma&&(clearInterval(ma),ma=null)}function aD(){const n=()=>{F.lastActivityTime=Date.now()};["click","keydown","touchstart","scroll"].forEach(t=>{document.addEventListener(t,n,{passive:!0})}),document.addEventListener("visibilitychange",()=>{if(document.hidden||!F.pinEnabled||!F.pinHash||F.isLocked)return;const t=Date.now()-F.lastActivityTime;if(F.autoLockTimeout===0)Ga();else if(F.autoLockTimeout>0){const e=F.autoLockTimeout*60*1e3;t>=e&&Ga()}})}function cD(){Ie({title:"⚡ Quick Action",content:`
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
  `,onOpen:t=>{const e=t.querySelector("#fab-modal-add-income"),i=t.querySelector("#fab-modal-add-expense"),s=t.querySelector("#fab-modal-transfer"),r=async()=>{F.user&&(F.profile=await Pr(F.user.uid),F.budgets=await yd(F.user.uid),ke())};e&&(e.onclick=()=>Ti("INCOME",r)),i&&(i.onclick=()=>Ti("EXPENSE",r)),s&&(s.onclick=()=>Td(r))}})}eD();
