var Ow=Object.defineProperty;var Lw=(n,t,e)=>t in n?Ow(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var H=(n,t,e)=>Lw(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Vw=()=>{};var pf={};/**
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
 */const xg=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Fw=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),i.push(e[d],e[h],e[f],e[p])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Fw(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new Bw;const f=r<<2|a>>4;if(i.push(f),l!==64){const p=a<<4&240|l>>2;if(i.push(p),h!==64){const y=l<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $w=function(n){const t=xg(n);return Sg.encodeByteArray(t,!0)},Ma=function(n){return $w(n).replace(/\./g,"")},kg=function(n){try{return Sg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Uw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zw=()=>Uw().__FIREBASE_DEFAULTS__,jw=()=>{if(typeof process>"u"||typeof pf>"u")return;const n=pf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&kg(n[1]);return t&&JSON.parse(t)},uc=()=>{try{return Vw()||zw()||jw()||Hw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pg=n=>{var t,e;return(e=(t=uc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},qw=n=>{const t=Pg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Cg=()=>{var n;return(n=uc())===null||n===void 0?void 0:n.config},Rg=n=>{var t;return(t=uc())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Ww{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Rs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Gw(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ma(JSON.stringify(e)),Ma(JSON.stringify(o)),""].join(".")}const wr={};function Kw(){const n={prod:[],emulator:[]};for(const t of Object.keys(wr))wr[t]?n.emulator.push(t):n.prod.push(t);return n}function Yw(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let mf=!1;function Dg(n,t){if(typeof window>"u"||typeof document>"u"||!Rs(window.location.host)||wr[n]===t||wr[n]||mf)return;wr[n]=t;function e(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=Kw().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,p){f.setAttribute("width","24"),f.setAttribute("id",p),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{mf=!0,o()},f}function d(f,p){f.setAttribute("id",p),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=Yw(i),p=e("text"),y=document.getElementById(p)||document.createElement("span"),_=e("learnmore"),v=document.getElementById(_)||document.createElement("a"),I=e("preprendIcon"),P=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const R=f.element;a(R),d(v,_);const N=l();c(P,I),R.append(P,y,v,N),document.body.appendChild(R)}r?(y.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function Qw(){var n;const t=(n=uc())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e0(){const n=ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function n0(){return!Qw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i0(){try{return typeof indexedDB=="object"}catch{return!1}}function s0(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const r0="FirebaseError";class Dn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=r0,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?o0(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,a,i)}}function o0(n,t){return n.replace(a0,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const a0=/\{\$([^}]+)}/g;function c0(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Fi(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(gf(r)&&gf(o)){if(!Fi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function gf(n){return n!==null&&typeof n=="object"}/**
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
 */function io(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function cr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function lr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function l0(n,t){const e=new u0(n,t);return e.subscribe.bind(e)}class u0{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");d0(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=gl),s.error===void 0&&(s.error=gl),s.complete===void 0&&(s.complete=gl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d0(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function gl(){}/**
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
 */function Et(n){return n&&n._delegate?n._delegate:n}class Bi{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ci="[DEFAULT]";/**
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
 */class h0{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Ww;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(p0(t))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ci){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ci){return this.instances.has(t)}getOptions(t=Ci){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:f0(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ci){return this.component?this.component.multipleInstances?t:Ci:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f0(n){return n===Ci?void 0:n}function p0(n){return n.instantiationMode==="EAGER"}/**
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
 */class m0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new h0(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var rt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(rt||(rt={}));const g0={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},y0=rt.INFO,v0={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},b0=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=v0[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fu{constructor(t){this.name=t,this._logLevel=y0,this._logHandler=b0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?g0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const _0=(n,t)=>t.some(e=>n instanceof e);let yf,vf;function w0(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E0(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ng=new WeakMap,ql=new WeakMap,Og=new WeakMap,yl=new WeakMap,Bu=new WeakMap;function T0(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Zn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Ng.set(e,n)}).catch(()=>{}),Bu.set(t,n),t}function I0(n){if(ql.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ql.set(n,t)}let Wl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ql.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Og.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function A0(n){Wl=n(Wl)}function x0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(vl(this),t,...e);return Og.set(i,t.sort?t.sort():[t]),Zn(i)}:E0().includes(n)?function(...t){return n.apply(vl(this),t),Zn(Ng.get(this))}:function(...t){return Zn(n.apply(vl(this),t))}}function S0(n){return typeof n=="function"?x0(n):(n instanceof IDBTransaction&&I0(n),_0(n,w0())?new Proxy(n,Wl):n)}function Zn(n){if(n instanceof IDBRequest)return T0(n);if(yl.has(n))return yl.get(n);const t=S0(n);return t!==n&&(yl.set(n,t),Bu.set(t,n)),t}const vl=n=>Bu.get(n);function k0(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Zn(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Zn(o.result),c.oldVersion,c.newVersion,Zn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const P0=["get","getKey","getAll","getAllKeys","count"],C0=["put","add","delete","clear"],bl=new Map;function bf(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bl.get(t))return bl.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=C0.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||P0.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return bl.set(t,r),r}A0(n=>({...n,get:(t,e,i)=>bf(t,e)||n.get(t,e,i),has:(t,e)=>!!bf(t,e)||n.has(t,e)}));/**
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
 */class R0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(M0(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function M0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gl="@firebase/app",_f="0.13.2";/**
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
 */const Sn=new Fu("@firebase/app"),D0="@firebase/app-compat",N0="@firebase/analytics-compat",O0="@firebase/analytics",L0="@firebase/app-check-compat",V0="@firebase/app-check",F0="@firebase/auth",B0="@firebase/auth-compat",$0="@firebase/database",U0="@firebase/data-connect",z0="@firebase/database-compat",j0="@firebase/functions",H0="@firebase/functions-compat",q0="@firebase/installations",W0="@firebase/installations-compat",G0="@firebase/messaging",K0="@firebase/messaging-compat",Y0="@firebase/performance",X0="@firebase/performance-compat",Q0="@firebase/remote-config",J0="@firebase/remote-config-compat",Z0="@firebase/storage",tE="@firebase/storage-compat",eE="@firebase/firestore",nE="@firebase/ai",iE="@firebase/firestore-compat",sE="firebase",rE="11.10.0";/**
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
 */const Kl="[DEFAULT]",oE={[Gl]:"fire-core",[D0]:"fire-core-compat",[O0]:"fire-analytics",[N0]:"fire-analytics-compat",[V0]:"fire-app-check",[L0]:"fire-app-check-compat",[F0]:"fire-auth",[B0]:"fire-auth-compat",[$0]:"fire-rtdb",[U0]:"fire-data-connect",[z0]:"fire-rtdb-compat",[j0]:"fire-fn",[H0]:"fire-fn-compat",[q0]:"fire-iid",[W0]:"fire-iid-compat",[G0]:"fire-fcm",[K0]:"fire-fcm-compat",[Y0]:"fire-perf",[X0]:"fire-perf-compat",[Q0]:"fire-rc",[J0]:"fire-rc-compat",[Z0]:"fire-gcs",[tE]:"fire-gcs-compat",[eE]:"fire-fst",[iE]:"fire-fst-compat",[nE]:"fire-vertex","fire-js":"fire-js",[sE]:"fire-js-all"};/**
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
 */const Lr=new Map,aE=new Map,Yl=new Map;function wf(n,t){try{n.container.addComponent(t)}catch(e){Sn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ws(n){const t=n.name;if(Yl.has(t))return Sn.debug(`There were multiple attempts to register component ${t}.`),!1;Yl.set(t,n);for(const e of Lr.values())wf(e,n);for(const e of aE.values())wf(e,n);return!0}function $u(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Re(n){return n==null?!1:n.settings!==void 0}/**
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
 */const cE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new no("app","Firebase",cE);/**
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
 */class lE{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
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
 */const Ms=rE;function Lg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Kl,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw ti.create("bad-app-name",{appName:String(s)});if(e||(e=Cg()),!e)throw ti.create("no-options");const r=Lr.get(s);if(r){if(Fi(e,r.options)&&Fi(i,r.config))return r;throw ti.create("duplicate-app",{appName:s})}const o=new m0(s);for(const c of Yl.values())o.addComponent(c);const a=new lE(e,i,o);return Lr.set(s,a),a}function Uu(n=Kl){const t=Lr.get(n);if(!t&&n===Kl&&Cg())return Lg();if(!t)throw ti.create("no-app",{appName:n});return t}function uE(){return Array.from(Lr.values())}function ei(n,t,e){var i;let s=(i=oE[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}ws(new Bi(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const dE="firebase-heartbeat-database",hE=1,Vr="firebase-heartbeat-store";let _l=null;function Vg(){return _l||(_l=k0(dE,hE,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Vr)}catch(e){console.warn(e)}}}}).catch(n=>{throw ti.create("idb-open",{originalErrorMessage:n.message})})),_l}async function fE(n){try{const e=(await Vg()).transaction(Vr),i=await e.objectStore(Vr).get(Fg(n));return await e.done,i}catch(t){if(t instanceof Dn)Sn.warn(t.message);else{const e=ti.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(e.message)}}}async function Ef(n,t){try{const i=(await Vg()).transaction(Vr,"readwrite");await i.objectStore(Vr).put(t,Fg(n)),await i.done}catch(e){if(e instanceof Dn)Sn.warn(e.message);else{const i=ti.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(i.message)}}}function Fg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pE=1024,mE=30;class gE{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new vE(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tf();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>mE){const o=bE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Sn.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tf(),{heartbeatsToSend:i,unsentEntries:s}=yE(this._heartbeatsCache.heartbeats),r=Ma(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Sn.warn(e),""}}}function Tf(){return new Date().toISOString().substring(0,10)}function yE(n,t=pE){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),If(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),If(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class vE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i0()?s0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await fE(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ef(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ef(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function If(n){return Ma(JSON.stringify({version:2,heartbeats:n})).length}function bE(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function _E(n){ws(new Bi("platform-logger",t=>new R0(t),"PRIVATE")),ws(new Bi("heartbeat",t=>new gE(t),"PRIVATE")),ei(Gl,_f,n),ei(Gl,_f,"esm2017"),ei("fire-js","")}_E("");function zu(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}function Bg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wE=Bg,$g=new no("auth","Firebase",Bg());/**
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
 */const Da=new Fu("@firebase/auth");function EE(n,...t){Da.logLevel<=rt.WARN&&Da.warn(`Auth (${Ms}): ${n}`,...t)}function ca(n,...t){Da.logLevel<=rt.ERROR&&Da.error(`Auth (${Ms}): ${n}`,...t)}/**
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
 */function je(n,...t){throw ju(n,...t)}function tn(n,...t){return ju(n,...t)}function Ug(n,t,e){const i=Object.assign(Object.assign({},wE()),{[t]:e});return new no("auth","Firebase",i).create(t,{appName:n.name})}function Tn(n){return Ug(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ju(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return $g.create(n,...t)}function X(n,t,...e){if(!n)throw ju(t,...e)}function vn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ca(t),new Error(t)}function kn(n,t){n||vn(t)}/**
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
 */function Xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function TE(){return Af()==="http:"||Af()==="https:"}function Af(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function IE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TE()||Zw()||"connection"in navigator)?navigator.onLine:!0}function AE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class so{constructor(t,e){this.shortDelay=t,this.longDelay=e,kn(e>t,"Short delay should be less than long delay!"),this.isMobile=Xw()||t0()}get(){return IE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hu(n,t){kn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class zg{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kE=new so(3e4,6e4);function Nn(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ge(n,t,e,i,s={}){return jg(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=io(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return Jw()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Rs(n.emulatorConfig.host)&&(l.credentials="include"),zg.fetch()(await Hg(n,n.config.apiHost,e,a),l)})}async function jg(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},xE),t);try{const s=new CE(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $o(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $o(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw $o(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ug(n,d,l);je(n,d)}}catch(s){if(s instanceof Dn)throw s;je(n,"network-request-failed",{message:String(s)})}}async function ro(n,t,e,i,s={}){const r=await Ge(n,t,e,i,s);return"mfaPendingCredential"in r&&je(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Hg(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?Hu(n.config,s):`${n.config.apiScheme}://${s}`;return SE.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function PE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(tn(this.auth,"network-request-failed")),kE.get())})}}function $o(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=tn(n,t,i);return s.customData._tokenResponse=e,s}function xf(n){return n!==void 0&&n.enterprise!==void 0}class RE{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return PE(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ME(n,t){return Ge(n,"GET","/v2/recaptchaConfig",Nn(n,t))}/**
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
 */async function DE(n,t){return Ge(n,"POST","/v1/accounts:delete",t)}async function Na(n,t){return Ge(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Er(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function NE(n,t=!1){const e=Et(n),i=await e.getIdToken(t),s=qu(i);X(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Er(wl(s.auth_time)),issuedAtTime:Er(wl(s.iat)),expirationTime:Er(wl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function wl(n){return Number(n)*1e3}function qu(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=kg(e);return s?JSON.parse(s):(ca("Failed to decode base64 JWT payload"),null)}catch(s){return ca("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sf(n){const t=qu(n);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function $i(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof Dn&&OE(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function OE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class LE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ql{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oa(n){var t;const e=n.auth,i=await n.getIdToken(),s=await $i(n,Na(e,{idToken:i}));X(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?qg(r.providerUserInfo):[],a=FE(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ql(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function VE(n){const t=Et(n);await Oa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function FE(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function qg(n){return n.map(t=>{var{providerId:e}=t,i=zu(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function BE(n,t){const e=await jg(n,{},async()=>{const i=io({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Hg(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return n.emulatorConfig&&Rs(n.emulatorConfig.host)&&(c.credentials="include"),zg.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function $E(n,t){return Ge(n,"POST","/v2/accounts:revokeToken",Nn(n,t))}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Sf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){X(t.length!==0,"internal-error");const e=Sf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await BE(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new ps;return i&&(X(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(X(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(X(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Un(n,t){X(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Fe{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,r=zu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ql(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await $i(this,this.stsTokenManager.getToken(this.auth,t));return X(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return NE(this,t)}reload(){return VE(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Fe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Oa(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Re(this.auth.app))return Promise.reject(Tn(this.auth));const t=await this.getIdToken();return await $i(this,DE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,r,o,a,c,l,d;const h=(i=e.displayName)!==null&&i!==void 0?i:void 0,f=(s=e.email)!==null&&s!==void 0?s:void 0,p=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,v=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=e.createdAt)!==null&&l!==void 0?l:void 0,P=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:N,isAnonymous:k,providerData:V,stsTokenManager:E}=e;X(R&&E,t,"internal-error");const b=ps.fromJSON(this.name,E);X(typeof R=="string",t,"internal-error"),Un(h,t.name),Un(f,t.name),X(typeof N=="boolean",t,"internal-error"),X(typeof k=="boolean",t,"internal-error"),Un(p,t.name),Un(y,t.name),Un(_,t.name),Un(v,t.name),Un(I,t.name),Un(P,t.name);const w=new Fe({uid:R,auth:t,email:f,emailVerified:N,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:_,stsTokenManager:b,createdAt:I,lastLoginAt:P});return V&&Array.isArray(V)&&(w.providerData=V.map(A=>Object.assign({},A))),v&&(w._redirectEventId=v),w}static async _fromIdTokenResponse(t,e,i=!1){const s=new ps;s.updateFromServerResponse(e);const r=new Fe({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Oa(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];X(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?qg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new ps;a.updateFromIdToken(i);const c=new Fe({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ql(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const kf=new Map;function bn(n){kn(n instanceof Function,"Expected a class definition");let t=kf.get(n);return t?(kn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,kf.set(n,t),t)}/**
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
 */class Wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Wg.type="NONE";const Pf=Wg;/**
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
 */function la(n,t,e){return`firebase:${n}:${t}:${e}`}class ms{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=la(this.userKey,s.apiKey,r),this.fullPersistenceKey=la("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Na(this.auth,{idToken:t}).catch(()=>{});return e?Fe._fromGetAccountInfoResponse(this.auth,e,t):null}return Fe._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new ms(bn(Pf),t,i);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||bn(Pf);const o=la(i,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){let h;if(typeof d=="string"){const f=await Na(t,{idToken:d}).catch(()=>{});if(!f)break;h=await Fe._fromGetAccountInfoResponse(t,f,d)}else h=Fe._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ms(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ms(r,t,i))}}/**
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
 */function Cf(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Jg(t))return"Blackberry";if(Zg(t))return"Webos";if(Kg(t))return"Safari";if((t.includes("chrome/")||Yg(t))&&!t.includes("edge/"))return"Chrome";if(Qg(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Gg(n=ue()){return/firefox\//i.test(n)}function Kg(n=ue()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Yg(n=ue()){return/crios\//i.test(n)}function Xg(n=ue()){return/iemobile/i.test(n)}function Qg(n=ue()){return/android/i.test(n)}function Jg(n=ue()){return/blackberry/i.test(n)}function Zg(n=ue()){return/webos/i.test(n)}function Wu(n=ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function UE(n=ue()){var t;return Wu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function zE(){return e0()&&document.documentMode===10}function ty(n=ue()){return Wu(n)||Qg(n)||Zg(n)||Jg(n)||/windows phone/i.test(n)||Xg(n)}/**
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
 */function ey(n,t=[]){let e;switch(n){case"Browser":e=Cf(ue());break;case"Worker":e=`${Cf(ue())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ms}/${i}`}/**
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
 */class jE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function HE(n,t={}){return Ge(n,"GET","/v2/passwordPolicy",Nn(n,t))}/**
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
 */const qE=6;class WE{constructor(t){var e,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:qE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class GE{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rf(this),this.idTokenSubscription=new Rf(this),this.beforeStateQueue=new jE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$g,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=bn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await ms.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Na(this,{idToken:t}),i=await Fe._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Re(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Oa(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=AE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Re(this.app))return Promise.reject(Tn(this));const e=t?Et(t):null;return e&&X(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Re(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Re(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await HE(this),e=new WE(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new no("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await $E(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&bn(t)||this._popupRedirectResolver;X(e,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[bn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,i,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&EE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vi(n){return Et(n)}class Rf{constructor(t){this.auth=t,this.observer=null,this.addObserver=l0(e=>this.observer=e)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KE(n){dc=n}function ny(n){return dc.loadJS(n)}function YE(){return dc.recaptchaEnterpriseScript}function XE(){return dc.gapiScript}function QE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class JE{constructor(){this.enterprise=new ZE}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class ZE{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const tT="recaptcha-enterprise",iy="NO_RECAPTCHA";class eT{constructor(t){this.type=tT,this.auth=vi(t)}async verify(t="verify",e=!1){async function i(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ME(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new RE(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;xf(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(iy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JE().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!e&&xf(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=YE();c.length!==0&&(c+=a),ny(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Mf(n,t,e,i=!1,s=!1){const r=new eT(n);let o;if(s)o=iy;else try{o=await r.verify(e)}catch{o=await r.verify(e,!0)}const a=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function La(n,t,e,i,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Mf(n,t,e,e==="getOobCode");return i(n,o)}else return i(n,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Mf(n,t,e,e==="getOobCode");return i(n,a)}else return Promise.reject(o)})}/**
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
 */function nT(n,t){const e=$u(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(Fi(r,t??{}))return s;je(s,"already-initialized")}return e.initialize({options:t})}function iT(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(bn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function sT(n,t,e){const i=vi(n);X(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=sy(t),{host:o,port:a}=rT(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){X(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),X(Fi(l,i.config.emulator)&&Fi(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Rs(o)?(Mg(`${r}//${o}${c}`),Dg("Auth",!0)):oT()}function sy(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function rT(n){const t=sy(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Df(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Df(o)}}}function Df(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function oT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return vn("not implemented")}_getIdTokenResponse(t){return vn("not implemented")}_linkToIdToken(t,e){return vn("not implemented")}_getReauthenticationResolver(t){return vn("not implemented")}}async function aT(n,t){return Ge(n,"POST","/v1/accounts:update",t)}async function cT(n,t){return Ge(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function lT(n,t){return ro(n,"POST","/v1/accounts:signInWithPassword",Nn(n,t))}async function uT(n,t){return Ge(n,"POST","/v1/accounts:sendOobCode",Nn(n,t))}async function dT(n,t){return uT(n,t)}/**
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
 */async function hT(n,t){return ro(n,"POST","/v1/accounts:signInWithEmailLink",Nn(n,t))}async function fT(n,t){return ro(n,"POST","/v1/accounts:signInWithEmailLink",Nn(n,t))}/**
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
 */class Fr extends Gu{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Fr(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new Fr(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return La(t,e,"signInWithPassword",lT);case"emailLink":return hT(t,{email:this._email,oobCode:this._password});default:je(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return La(t,i,"signUpPassword",cT);case"emailLink":return fT(t,{idToken:e,email:this._email,oobCode:this._password});default:je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function gs(n,t){return ro(n,"POST","/v1/accounts:signInWithIdp",Nn(n,t))}/**
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
 */const pT="http://localhost";class Ui extends Gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ui(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):je("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,r=zu(e,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ui(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return gs(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,gs(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,gs(t,e)}buildRequest(){const t={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=io(e)}return t}}/**
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
 */function mT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gT(n){const t=cr(lr(n)).link,e=t?cr(lr(t)).deep_link_id:null,i=cr(lr(n)).deep_link_id;return(i?cr(lr(i)).link:null)||i||e||t||n}class Ku{constructor(t){var e,i,s,r,o,a;const c=cr(lr(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,h=mT((s=c.mode)!==null&&s!==void 0?s:null);X(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=gT(t);try{return new Ku(e)}catch{return null}}}/**
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
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(t,e){return Fr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=Ku.parseLink(e);return X(i,"argument-error"),Fr._fromEmailAndCode(t,i.code,i.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ry{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oo extends ry{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class zn extends oo{constructor(){super("facebook.com")}static credential(t){return Ui._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zn.credential(t.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
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
 */class jn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ui._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return jn.credentialFromTaggedObject(t)}static credentialFromError(t){return jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return jn.credential(e,i)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class Hn extends oo{constructor(){super("github.com")}static credential(t){return Ui._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Hn.credentialFromTaggedObject(t)}static credentialFromError(t){return Hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Hn.credential(t.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class qn extends oo{constructor(){super("twitter.com")}static credential(t,e){return Ui._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return qn.credentialFromTaggedObject(t)}static credentialFromError(t){return qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return qn.credential(e,i)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function yT(n,t){return ro(n,"POST","/v1/accounts:signUp",Nn(n,t))}/**
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
 */class zi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Fe._fromIdTokenResponse(t,i,s),o=Nf(i);return new zi({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=Nf(i);return new zi({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function Nf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Va extends Dn{constructor(t,e,i,s){var r;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Va.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new Va(t,e,i,s)}}function oy(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(n,r,t,i):r})}async function vT(n,t,e=!1){const i=await $i(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return zi._forOperation(n,"link",i)}/**
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
 */async function ay(n,t,e=!1){const{auth:i}=n;if(Re(i.app))return Promise.reject(Tn(i));const s="reauthenticate";try{const r=await $i(n,oy(i,s,t,n),e);X(r.idToken,i,"internal-error");const o=qu(r.idToken);X(o,i,"internal-error");const{sub:a}=o;return X(n.uid===a,i,"user-mismatch"),zi._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&je(i,"user-mismatch"),r}}/**
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
 */async function cy(n,t,e=!1){if(Re(n.app))return Promise.reject(Tn(n));const i="signIn",s=await oy(n,i,t),r=await zi._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}async function bT(n,t){return cy(vi(n),t)}async function Yu(n,t){return ay(Et(n),t)}/**
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
 */async function ly(n){const t=vi(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function _T(n,t,e){const i=vi(n);await La(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",dT)}async function wT(n,t,e){if(Re(n.app))return Promise.reject(Tn(n));const i=vi(n),o=await La(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ly(n),c}),a=await zi._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function ET(n,t,e){return Re(n.app)?Promise.reject(Tn(n)):bT(Et(n),On.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ly(n),i})}/**
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
 */async function TT(n,t){return Ge(n,"POST","/v1/accounts:update",t)}/**
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
 */async function uy(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const i=Et(n),r={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await $i(i,TT(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function IT(n,t){return AT(Et(n),null,t)}async function AT(n,t,e){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.password=e);const o=await $i(n,aT(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function xT(n,t){return Et(n).setPersistence(t)}function ST(n,t,e,i){return Et(n).onIdTokenChanged(t,e,i)}function kT(n,t,e){return Et(n).beforeAuthStateChanged(t,e)}function PT(n,t,e,i){return Et(n).onAuthStateChanged(t,e,i)}function CT(n){return Et(n).signOut()}async function RT(n){return Et(n).delete()}const Fa="__sak";/**
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
 */class dy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const MT=1e3,DT=10;class hy extends dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ty(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);zE()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,DT):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},MT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}hy.type="LOCAL";const fy=hy;/**
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
 */class py extends dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}py.type="SESSION";const my=py;/**
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
 */function NT(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class hc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new hc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await NT(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function Xu(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class OT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Xu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function LT(n){en().location.href=n}/**
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
 */function gy(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function VT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function BT(){return gy()?self:null}/**
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
 */const yy="firebaseLocalStorageDb",$T=1,Ba="firebaseLocalStorage",vy="fbase_key";class ao{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function fc(n,t){return n.transaction([Ba],t?"readwrite":"readonly").objectStore(Ba)}function UT(){const n=indexedDB.deleteDatabase(yy);return new ao(n).toPromise()}function Jl(){const n=indexedDB.open(yy,$T);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ba,{keyPath:vy})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ba)?t(i):(i.close(),await UT(),t(await Jl()))})})}async function Of(n,t,e){const i=fc(n,!0).put({[vy]:t,value:e});return new ao(i).toPromise()}async function zT(n,t){const e=fc(n,!1).get(t),i=await new ao(e).toPromise();return i===void 0?null:i.value}function Lf(n,t){const e=fc(n,!0).delete(t);return new ao(e).toPromise()}const jT=800,HT=3;class by{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>HT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(BT()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await VT(),!this.activeServiceWorker)return;this.sender=new OT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||FT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Jl();return await Of(t,Fa,"1"),await Lf(t,Fa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Of(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>zT(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Lf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=fc(s,!1).getAll();return new ao(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}by.type="LOCAL";const qT=by;new so(3e4,6e4);/**
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
 */function WT(n,t){return t?bn(t):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Qu extends Gu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return gs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return gs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function GT(n){return cy(n.auth,new Qu(n),n.bypassAuthState)}function KT(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),ay(e,new Qu(n),n.bypassAuthState)}async function YT(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),vT(e,new Qu(n),n.bypassAuthState)}/**
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
 */class _y{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return GT;case"linkViaPopup":case"linkViaRedirect":return YT;case"reauthViaPopup":case"reauthViaRedirect":return KT;default:je(this.auth,"internal-error")}}resolve(t){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XT=new so(2e3,1e4);class cs extends _y{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const t=Xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,XT.get())};t()}}cs.currentPopupAction=null;/**
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
 */const QT="pendingRedirect",ua=new Map;class JT extends _y{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=ua.get(this.auth._key());if(!t){try{const i=await ZT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}ua.set(this.auth._key(),t)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZT(n,t){const e=nI(t),i=eI(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}function tI(n,t){ua.set(n._key(),t)}function eI(n){return bn(n._redirectPersistence)}function nI(n){return la(QT,n.config.apiKey,n.name)}async function iI(n,t,e=!1){if(Re(n.app))return Promise.reject(Tn(n));const i=vi(n),s=WT(i,t),o=await new JT(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const sI=600*1e3;class rI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!oI(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!wy(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(tn(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vf(t))}saveEventToCache(t){this.cachedEventUids.add(Vf(t)),this.lastProcessedEventTime=Date.now()}}function Vf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function wy({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function oI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wy(n);default:return!1}}/**
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
 */async function aI(n,t={}){return Ge(n,"GET","/v1/projects",t)}/**
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
 */const cI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lI=/^https?/;async function uI(n){if(n.config.emulator)return;const{authorizedDomains:t}=await aI(n);for(const e of t)try{if(dI(e))return}catch{}je(n,"unauthorized-domain")}function dI(n){const t=Xl(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!lI.test(e))return!1;if(cI.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const hI=new so(3e4,6e4);function Ff(){const n=en().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function fI(n){return new Promise((t,e)=>{var i,s,r;function o(){Ff(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ff(),e(tn(n,"network-request-failed"))},timeout:hI.get()})}if(!((s=(i=en().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=en().gapi)===null||r===void 0)&&r.load)o();else{const a=QE("iframefcb");return en()[a]=()=>{gapi.load?o():e(tn(n,"network-request-failed"))},ny(`${XE()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw da=null,t})}let da=null;function pI(n){return da=da||fI(n),da}/**
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
 */const mI=new so(5e3,15e3),gI="__/auth/iframe",yI="emulator/auth/iframe",vI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _I(n){const t=n.config;X(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Hu(t,yI):`https://${n.config.authDomain}/${gI}`,i={apiKey:t.apiKey,appName:n.name,v:Ms},s=bI.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${io(i).slice(1)}`}async function wI(n){const t=await pI(n),e=en().gapi;return X(e,n,"internal-error"),t.open({where:document.body,url:_I(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=tn(n,"network-request-failed"),a=en().setTimeout(()=>{r(o)},mI.get());function c(){en().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const EI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TI=500,II=600,AI="_blank",xI="http://localhost";class Bf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SI(n,t,e,i=TI,s=II){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},EI),{width:i.toString(),height:s.toString(),top:r,left:o}),l=ue().toLowerCase();e&&(a=Yg(l)?AI:e),Gg(l)&&(t=t||xI,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(UE(l)&&a!=="_self")return kI(t||"",a),new Bf(null);const h=window.open(t||"",a,d);X(h,n,"popup-blocked");try{h.focus()}catch{}return new Bf(h)}function kI(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const PI="__/auth/handler",CI="emulator/auth/handler",RI=encodeURIComponent("fac");async function $f(n,t,e,i,s,r){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:Ms,eventId:s};if(t instanceof ry){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",c0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof oo){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${RI}=${encodeURIComponent(c)}`:"";return`${MI(n)}?${io(a).slice(1)}${l}`}function MI({config:n}){return n.emulator?Hu(n,CI):`https://${n.authDomain}/${PI}`}/**
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
 */const El="webStorageSupport";class DI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=iI,this._overrideRedirectResult=tI}async _openPopup(t,e,i,s){var r;kn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await $f(t,e,i,Xl(),s);return SI(t,o,Xu())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await $f(t,e,i,Xl(),s);return LT(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(kn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await wI(t),i=new rI(t);return e.register("authEvent",s=>(X(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(El,{type:El},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[El];o!==void 0&&e(!!o),je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=uI(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ty()||Kg()||Wu()}}const NI=DI;var Uf="@firebase/auth",zf="1.10.8";/**
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
 */class OI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VI(n){ws(new Bi("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ey(n)},l=new GE(i,s,r,c);return iT(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),ws(new Bi("auth-internal",t=>{const e=vi(t.getProvider("auth").getImmediate());return(i=>new OI(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ei(Uf,zf,LI(n)),ei(Uf,zf,"esm2017")}/**
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
 */const FI=300,BI=Rg("authIdTokenMaxAge")||FI;let jf=null;const $I=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>BI)return;const s=e==null?void 0:e.token;jf!==s&&(jf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UI(n=Uu()){const t=$u(n,"auth");if(t.isInitialized())return t.getImmediate();const e=nT(n,{popupRedirectResolver:NI,persistence:[qT,fy,my]}),i=Rg("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=$I(r.toString());kT(e,o,()=>o(e.currentUser)),ST(e,a=>o(a))}}const s=Pg("auth");return s&&sT(e,`http://${s}`),e}function zI(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}KE({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=tn("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",zI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VI("Browser");var jI="firebase",HI="11.10.0";/**
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
 */ei(jI,HI,"app");var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ni,Ey;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,b){function w(){}w.prototype=b.prototype,E.D=b.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(A,S,C){for(var x=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)x[Y-2]=arguments[Y];return b.prototype[S].apply(A,x)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,b,w){w||(w=0);var A=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)A[S]=b.charCodeAt(w++)|b.charCodeAt(w++)<<8|b.charCodeAt(w++)<<16|b.charCodeAt(w++)<<24;else for(S=0;16>S;++S)A[S]=b[w++]|b[w++]<<8|b[w++]<<16|b[w++]<<24;b=E.g[0],w=E.g[1],S=E.g[2];var C=E.g[3],x=b+(C^w&(S^C))+A[0]+3614090360&4294967295;b=w+(x<<7&4294967295|x>>>25),x=C+(S^b&(w^S))+A[1]+3905402710&4294967295,C=b+(x<<12&4294967295|x>>>20),x=S+(w^C&(b^w))+A[2]+606105819&4294967295,S=C+(x<<17&4294967295|x>>>15),x=w+(b^S&(C^b))+A[3]+3250441966&4294967295,w=S+(x<<22&4294967295|x>>>10),x=b+(C^w&(S^C))+A[4]+4118548399&4294967295,b=w+(x<<7&4294967295|x>>>25),x=C+(S^b&(w^S))+A[5]+1200080426&4294967295,C=b+(x<<12&4294967295|x>>>20),x=S+(w^C&(b^w))+A[6]+2821735955&4294967295,S=C+(x<<17&4294967295|x>>>15),x=w+(b^S&(C^b))+A[7]+4249261313&4294967295,w=S+(x<<22&4294967295|x>>>10),x=b+(C^w&(S^C))+A[8]+1770035416&4294967295,b=w+(x<<7&4294967295|x>>>25),x=C+(S^b&(w^S))+A[9]+2336552879&4294967295,C=b+(x<<12&4294967295|x>>>20),x=S+(w^C&(b^w))+A[10]+4294925233&4294967295,S=C+(x<<17&4294967295|x>>>15),x=w+(b^S&(C^b))+A[11]+2304563134&4294967295,w=S+(x<<22&4294967295|x>>>10),x=b+(C^w&(S^C))+A[12]+1804603682&4294967295,b=w+(x<<7&4294967295|x>>>25),x=C+(S^b&(w^S))+A[13]+4254626195&4294967295,C=b+(x<<12&4294967295|x>>>20),x=S+(w^C&(b^w))+A[14]+2792965006&4294967295,S=C+(x<<17&4294967295|x>>>15),x=w+(b^S&(C^b))+A[15]+1236535329&4294967295,w=S+(x<<22&4294967295|x>>>10),x=b+(S^C&(w^S))+A[1]+4129170786&4294967295,b=w+(x<<5&4294967295|x>>>27),x=C+(w^S&(b^w))+A[6]+3225465664&4294967295,C=b+(x<<9&4294967295|x>>>23),x=S+(b^w&(C^b))+A[11]+643717713&4294967295,S=C+(x<<14&4294967295|x>>>18),x=w+(C^b&(S^C))+A[0]+3921069994&4294967295,w=S+(x<<20&4294967295|x>>>12),x=b+(S^C&(w^S))+A[5]+3593408605&4294967295,b=w+(x<<5&4294967295|x>>>27),x=C+(w^S&(b^w))+A[10]+38016083&4294967295,C=b+(x<<9&4294967295|x>>>23),x=S+(b^w&(C^b))+A[15]+3634488961&4294967295,S=C+(x<<14&4294967295|x>>>18),x=w+(C^b&(S^C))+A[4]+3889429448&4294967295,w=S+(x<<20&4294967295|x>>>12),x=b+(S^C&(w^S))+A[9]+568446438&4294967295,b=w+(x<<5&4294967295|x>>>27),x=C+(w^S&(b^w))+A[14]+3275163606&4294967295,C=b+(x<<9&4294967295|x>>>23),x=S+(b^w&(C^b))+A[3]+4107603335&4294967295,S=C+(x<<14&4294967295|x>>>18),x=w+(C^b&(S^C))+A[8]+1163531501&4294967295,w=S+(x<<20&4294967295|x>>>12),x=b+(S^C&(w^S))+A[13]+2850285829&4294967295,b=w+(x<<5&4294967295|x>>>27),x=C+(w^S&(b^w))+A[2]+4243563512&4294967295,C=b+(x<<9&4294967295|x>>>23),x=S+(b^w&(C^b))+A[7]+1735328473&4294967295,S=C+(x<<14&4294967295|x>>>18),x=w+(C^b&(S^C))+A[12]+2368359562&4294967295,w=S+(x<<20&4294967295|x>>>12),x=b+(w^S^C)+A[5]+4294588738&4294967295,b=w+(x<<4&4294967295|x>>>28),x=C+(b^w^S)+A[8]+2272392833&4294967295,C=b+(x<<11&4294967295|x>>>21),x=S+(C^b^w)+A[11]+1839030562&4294967295,S=C+(x<<16&4294967295|x>>>16),x=w+(S^C^b)+A[14]+4259657740&4294967295,w=S+(x<<23&4294967295|x>>>9),x=b+(w^S^C)+A[1]+2763975236&4294967295,b=w+(x<<4&4294967295|x>>>28),x=C+(b^w^S)+A[4]+1272893353&4294967295,C=b+(x<<11&4294967295|x>>>21),x=S+(C^b^w)+A[7]+4139469664&4294967295,S=C+(x<<16&4294967295|x>>>16),x=w+(S^C^b)+A[10]+3200236656&4294967295,w=S+(x<<23&4294967295|x>>>9),x=b+(w^S^C)+A[13]+681279174&4294967295,b=w+(x<<4&4294967295|x>>>28),x=C+(b^w^S)+A[0]+3936430074&4294967295,C=b+(x<<11&4294967295|x>>>21),x=S+(C^b^w)+A[3]+3572445317&4294967295,S=C+(x<<16&4294967295|x>>>16),x=w+(S^C^b)+A[6]+76029189&4294967295,w=S+(x<<23&4294967295|x>>>9),x=b+(w^S^C)+A[9]+3654602809&4294967295,b=w+(x<<4&4294967295|x>>>28),x=C+(b^w^S)+A[12]+3873151461&4294967295,C=b+(x<<11&4294967295|x>>>21),x=S+(C^b^w)+A[15]+530742520&4294967295,S=C+(x<<16&4294967295|x>>>16),x=w+(S^C^b)+A[2]+3299628645&4294967295,w=S+(x<<23&4294967295|x>>>9),x=b+(S^(w|~C))+A[0]+4096336452&4294967295,b=w+(x<<6&4294967295|x>>>26),x=C+(w^(b|~S))+A[7]+1126891415&4294967295,C=b+(x<<10&4294967295|x>>>22),x=S+(b^(C|~w))+A[14]+2878612391&4294967295,S=C+(x<<15&4294967295|x>>>17),x=w+(C^(S|~b))+A[5]+4237533241&4294967295,w=S+(x<<21&4294967295|x>>>11),x=b+(S^(w|~C))+A[12]+1700485571&4294967295,b=w+(x<<6&4294967295|x>>>26),x=C+(w^(b|~S))+A[3]+2399980690&4294967295,C=b+(x<<10&4294967295|x>>>22),x=S+(b^(C|~w))+A[10]+4293915773&4294967295,S=C+(x<<15&4294967295|x>>>17),x=w+(C^(S|~b))+A[1]+2240044497&4294967295,w=S+(x<<21&4294967295|x>>>11),x=b+(S^(w|~C))+A[8]+1873313359&4294967295,b=w+(x<<6&4294967295|x>>>26),x=C+(w^(b|~S))+A[15]+4264355552&4294967295,C=b+(x<<10&4294967295|x>>>22),x=S+(b^(C|~w))+A[6]+2734768916&4294967295,S=C+(x<<15&4294967295|x>>>17),x=w+(C^(S|~b))+A[13]+1309151649&4294967295,w=S+(x<<21&4294967295|x>>>11),x=b+(S^(w|~C))+A[4]+4149444226&4294967295,b=w+(x<<6&4294967295|x>>>26),x=C+(w^(b|~S))+A[11]+3174756917&4294967295,C=b+(x<<10&4294967295|x>>>22),x=S+(b^(C|~w))+A[2]+718787259&4294967295,S=C+(x<<15&4294967295|x>>>17),x=w+(C^(S|~b))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+b&4294967295,E.g[1]=E.g[1]+(S+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+S&4294967295,E.g[3]=E.g[3]+C&4294967295}i.prototype.u=function(E,b){b===void 0&&(b=E.length);for(var w=b-this.blockSize,A=this.B,S=this.h,C=0;C<b;){if(S==0)for(;C<=w;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<b;)if(A[S++]=E.charCodeAt(C++),S==this.blockSize){s(this,A),S=0;break}}else for(;C<b;)if(A[S++]=E[C++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=b},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var b=1;b<E.length-8;++b)E[b]=0;var w=8*this.o;for(b=E.length-8;b<E.length;++b)E[b]=w&255,w/=256;for(this.u(E),E=Array(16),b=w=0;4>b;++b)for(var A=0;32>A;A+=8)E[w++]=this.g[b]>>>A&255;return E};function r(E,b){var w=a;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=b(E)}function o(E,b){this.h=b;for(var w=[],A=!0,S=E.length-1;0<=S;S--){var C=E[S]|0;A&&C==b||(w[S]=C,A=!1)}this.g=w}var a={};function c(E){return-128<=E&&128>E?r(E,function(b){return new o([b|0],0>b?-1:0)}):new o([E|0],0>E?-1:0)}function l(E){if(isNaN(E)||!isFinite(E))return h;if(0>E)return v(l(-E));for(var b=[],w=1,A=0;E>=w;A++)b[A]=E/w|0,w*=4294967296;return new o(b,0)}function d(E,b){if(E.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(E.charAt(0)=="-")return v(d(E.substring(1),b));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=l(Math.pow(b,8)),A=h,S=0;S<E.length;S+=8){var C=Math.min(8,E.length-S),x=parseInt(E.substring(S,S+C),b);8>C?(C=l(Math.pow(b,C)),A=A.j(C).add(l(x))):(A=A.j(w),A=A.add(l(x)))}return A}var h=c(0),f=c(1),p=c(16777216);n=o.prototype,n.m=function(){if(_(this))return-v(this).m();for(var E=0,b=1,w=0;w<this.g.length;w++){var A=this.i(w);E+=(0<=A?A:4294967296+A)*b,b*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(y(this))return"0";if(_(this))return"-"+v(this).toString(E);for(var b=l(Math.pow(E,6)),w=this,A="";;){var S=N(w,b).g;w=I(w,S.j(b));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=S,y(w))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function y(E){if(E.h!=0)return!1;for(var b=0;b<E.g.length;b++)if(E.g[b]!=0)return!1;return!0}function _(E){return E.h==-1}n.l=function(E){return E=I(this,E),_(E)?-1:y(E)?0:1};function v(E){for(var b=E.g.length,w=[],A=0;A<b;A++)w[A]=~E.g[A];return new o(w,~E.h).add(f)}n.abs=function(){return _(this)?v(this):this},n.add=function(E){for(var b=Math.max(this.g.length,E.g.length),w=[],A=0,S=0;S<=b;S++){var C=A+(this.i(S)&65535)+(E.i(S)&65535),x=(C>>>16)+(this.i(S)>>>16)+(E.i(S)>>>16);A=x>>>16,C&=65535,x&=65535,w[S]=x<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(E,b){return E.add(v(b))}n.j=function(E){if(y(this)||y(E))return h;if(_(this))return _(E)?v(this).j(v(E)):v(v(this).j(E));if(_(E))return v(this.j(v(E)));if(0>this.l(p)&&0>E.l(p))return l(this.m()*E.m());for(var b=this.g.length+E.g.length,w=[],A=0;A<2*b;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<E.g.length;S++){var C=this.i(A)>>>16,x=this.i(A)&65535,Y=E.i(S)>>>16,K=E.i(S)&65535;w[2*A+2*S]+=x*K,P(w,2*A+2*S),w[2*A+2*S+1]+=C*K,P(w,2*A+2*S+1),w[2*A+2*S+1]+=x*Y,P(w,2*A+2*S+1),w[2*A+2*S+2]+=C*Y,P(w,2*A+2*S+2)}for(A=0;A<b;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=b;A<2*b;A++)w[A]=0;return new o(w,0)};function P(E,b){for(;(E[b]&65535)!=E[b];)E[b+1]+=E[b]>>>16,E[b]&=65535,b++}function R(E,b){this.g=E,this.h=b}function N(E,b){if(y(b))throw Error("division by zero");if(y(E))return new R(h,h);if(_(E))return b=N(v(E),b),new R(v(b.g),v(b.h));if(_(b))return b=N(E,v(b)),new R(v(b.g),b.h);if(30<E.g.length){if(_(E)||_(b))throw Error("slowDivide_ only works with positive integers.");for(var w=f,A=b;0>=A.l(E);)w=k(w),A=k(A);var S=V(w,1),C=V(A,1);for(A=V(A,2),w=V(w,2);!y(A);){var x=C.add(A);0>=x.l(E)&&(S=S.add(w),C=x),A=V(A,1),w=V(w,1)}return b=I(E,S.j(b)),new R(S,b)}for(S=h;0<=E.l(b);){for(w=Math.max(1,Math.floor(E.m()/b.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=l(w),x=C.j(b);_(x)||0<x.l(E);)w-=A,C=l(w),x=C.j(b);y(C)&&(C=f),S=S.add(C),E=I(E,x)}return new R(S,E)}n.A=function(E){return N(this,E).h},n.and=function(E){for(var b=Math.max(this.g.length,E.g.length),w=[],A=0;A<b;A++)w[A]=this.i(A)&E.i(A);return new o(w,this.h&E.h)},n.or=function(E){for(var b=Math.max(this.g.length,E.g.length),w=[],A=0;A<b;A++)w[A]=this.i(A)|E.i(A);return new o(w,this.h|E.h)},n.xor=function(E){for(var b=Math.max(this.g.length,E.g.length),w=[],A=0;A<b;A++)w[A]=this.i(A)^E.i(A);return new o(w,this.h^E.h)};function k(E){for(var b=E.g.length+1,w=[],A=0;A<b;A++)w[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(w,E.h)}function V(E,b){var w=b>>5;b%=32;for(var A=E.g.length-w,S=[],C=0;C<A;C++)S[C]=0<b?E.i(C+w)>>>b|E.i(C+w+1)<<32-b:E.i(C+w);return new o(S,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Ey=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,ni=o}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ty,ur,Iy,ha,Zl,Ay,xy,Sy;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,g){return u==Array.prototype||u==Object.prototype||(u[m]=g.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uo=="object"&&Uo];for(var m=0;m<u.length;++m){var g=u[m];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var i=e(this);function s(u,m){if(m)t:{var g=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var D=u[T];if(!(D in g))break t;g=g[D]}u=u[u.length-1],T=g[u],m=m(T),m!=T&&m!=null&&t(g,u,{configurable:!0,writable:!0,value:m})}}function r(u,m){u instanceof String&&(u+="");var g=0,T=!1,D={next:function(){if(!T&&g<u.length){var L=g++;return{value:m(L,u[L]),done:!1}}return T=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(u){return u||function(){return r(this,function(m,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function l(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function d(u,m,g){return u.call.apply(u.bind,arguments)}function h(u,m,g){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,T),u.apply(m,D)}}return function(){return u.apply(m,arguments)}}function f(u,m,g){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function p(u,m){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function y(u,m){function g(){}g.prototype=m.prototype,u.aa=m.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(T,D,L){for(var j=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)j[yt-2]=arguments[yt];return m.prototype[D].apply(T,j)}}function _(u){const m=u.length;if(0<m){const g=Array(m);for(let T=0;T<m;T++)g[T]=u[T];return g}return[]}function v(u,m){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(c(T)){const D=u.length||0,L=T.length||0;u.length=D+L;for(let j=0;j<L;j++)u[D+j]=T[j]}else u.push(T)}}class I{constructor(m,g){this.i=m,this.j=g,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function P(u){return/^[\s\xa0]*$/.test(u)}function R(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function N(u){return N[" "](u),u}N[" "]=function(){};var k=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function V(u,m,g){for(const T in u)m.call(g,u[T],T,u)}function E(u,m){for(const g in u)m.call(void 0,u[g],g,u)}function b(u){const m={};for(const g in u)m[g]=u[g];return m}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,m){let g,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(g in T)u[g]=T[g];for(let L=0;L<w.length;L++)g=w[L],Object.prototype.hasOwnProperty.call(T,g)&&(u[g]=T[g])}}function S(u){var m=1;u=u.split(":");const g=[];for(;0<m&&u.length;)g.push(u.shift()),m--;return u.length&&g.push(u.join(":")),g}function C(u){a.setTimeout(()=>{throw u},0)}function x(){var u=et;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Y{constructor(){this.h=this.g=null}add(m,g){const T=K.get();T.set(m,g),this.h?this.h.next=T:this.g=T,this.h=T}}var K=new I(()=>new ut,u=>u.reset());class ut{constructor(){this.next=this.g=this.h=null}set(m,g){this.h=m,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,$=!1,et=new Y,Qt=()=>{const u=a.Promise.resolve(void 0);pt=()=>{u.then(Xi)}};var Xi=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(g){C(g)}var m=K;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Dt(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var ln=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,m),a.removeEventListener("test",g,m)}catch{}return u})();function Oe(u,m){if(Dt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(k){t:{try{N(m.nodeName);var D=!0;break t}catch{}D=!1}D||(m=null)}}else g=="mouseover"?m=u.fromElement:g=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:un[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Oe.aa.h.call(this)}}y(Oe,Dt);var un={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var wo="closure_listenable_"+(1e6*Math.random()|0),sw=0;function rw(u,m,g,T,D){this.listener=u,this.proxy=null,this.src=m,this.type=g,this.capture=!!T,this.ha=D,this.key=++sw,this.da=this.fa=!1}function Eo(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function To(u){this.src=u,this.g={},this.h=0}To.prototype.add=function(u,m,g,T,D){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var j=Kc(u,m,T,D);return-1<j?(m=u[j],g||(m.fa=!1)):(m=new rw(m,this.src,L,!!T,D),m.fa=g,u.push(m)),m};function Gc(u,m){var g=m.type;if(g in u.g){var T=u.g[g],D=Array.prototype.indexOf.call(T,m,void 0),L;(L=0<=D)&&Array.prototype.splice.call(T,D,1),L&&(Eo(m),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Kc(u,m,g,T){for(var D=0;D<u.length;++D){var L=u[D];if(!L.da&&L.listener==m&&L.capture==!!g&&L.ha==T)return D}return-1}var Yc="closure_lm_"+(1e6*Math.random()|0),Xc={};function ph(u,m,g,T,D){if(Array.isArray(m)){for(var L=0;L<m.length;L++)ph(u,m[L],g,T,D);return null}return g=yh(g),u&&u[wo]?u.K(m,g,l(T)?!!T.capture:!1,D):ow(u,m,g,!1,T,D)}function ow(u,m,g,T,D,L){if(!m)throw Error("Invalid event type");var j=l(D)?!!D.capture:!!D,yt=Jc(u);if(yt||(u[Yc]=yt=new To(u)),g=yt.add(m,g,T,j,L),g.proxy)return g;if(T=aw(),g.proxy=T,T.src=u,T.listener=g,u.addEventListener)ln||(D=j),D===void 0&&(D=!1),u.addEventListener(m.toString(),T,D);else if(u.attachEvent)u.attachEvent(gh(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function aw(){function u(g){return m.call(u.src,u.listener,g)}const m=cw;return u}function mh(u,m,g,T,D){if(Array.isArray(m))for(var L=0;L<m.length;L++)mh(u,m[L],g,T,D);else T=l(T)?!!T.capture:!!T,g=yh(g),u&&u[wo]?(u=u.i,m=String(m).toString(),m in u.g&&(L=u.g[m],g=Kc(L,g,T,D),-1<g&&(Eo(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete u.g[m],u.h--)))):u&&(u=Jc(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Kc(m,g,T,D)),(g=-1<u?m[u]:null)&&Qc(g))}function Qc(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[wo])Gc(m.i,u);else{var g=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(g,T,u.capture):m.detachEvent?m.detachEvent(gh(g),T):m.addListener&&m.removeListener&&m.removeListener(T),(g=Jc(m))?(Gc(g,u),g.h==0&&(g.src=null,m[Yc]=null)):Eo(u)}}}function gh(u){return u in Xc?Xc[u]:Xc[u]="on"+u}function cw(u,m){if(u.da)u=!0;else{m=new Oe(m,this);var g=u.listener,T=u.ha||u.src;u.fa&&Qc(u),u=g.call(T,m)}return u}function Jc(u){return u=u[Yc],u instanceof To?u:null}var Zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function yh(u){return typeof u=="function"?u:(u[Zc]||(u[Zc]=function(m){return u.handleEvent(m)}),u[Zc])}function te(){he.call(this),this.i=new To(this),this.M=this,this.F=null}y(te,he),te.prototype[wo]=!0,te.prototype.removeEventListener=function(u,m,g,T){mh(this,u,m,g,T)};function fe(u,m){var g,T=u.F;if(T)for(g=[];T;T=T.F)g.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new Dt(m,u);else if(m instanceof Dt)m.target=m.target||u;else{var D=m;m=new Dt(T,u),A(m,D)}if(D=!0,g)for(var L=g.length-1;0<=L;L--){var j=m.g=g[L];D=Io(j,T,!0,m)&&D}if(j=m.g=u,D=Io(j,T,!0,m)&&D,D=Io(j,T,!1,m)&&D,g)for(L=0;L<g.length;L++)j=m.g=g[L],D=Io(j,T,!1,m)&&D}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var g=u.g[m],T=0;T<g.length;T++)Eo(g[T]);delete u.g[m],u.h--}}this.F=null},te.prototype.K=function(u,m,g,T){return this.i.add(String(u),m,!1,g,T)},te.prototype.L=function(u,m,g,T){return this.i.add(String(u),m,!0,g,T)};function Io(u,m,g,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var D=!0,L=0;L<m.length;++L){var j=m[L];if(j&&!j.da&&j.capture==g){var yt=j.listener,Jt=j.ha||j.src;j.fa&&Gc(u.i,j),D=yt.call(Jt,T)!==!1&&D}}return D&&!T.defaultPrevented}function vh(u,m,g){if(typeof u=="function")g&&(u=f(u,g));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:a.setTimeout(u,m||0)}function bh(u){u.g=vh(()=>{u.g=null,u.i&&(u.i=!1,bh(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class lw extends he{constructor(m,g){super(),this.m=m,this.l=g,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:bh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hs(u){he.call(this),this.h=u,this.g={}}y(Hs,he);var _h=[];function wh(u){V(u.g,function(m,g){this.g.hasOwnProperty(g)&&Qc(m)},u),u.g={}}Hs.prototype.N=function(){Hs.aa.N.call(this),wh(this)},Hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tl=a.JSON.stringify,uw=a.JSON.parse,dw=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function el(){}el.prototype.h=null;function Eh(u){return u.h||(u.h=u.i())}function Th(){}var qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nl(){Dt.call(this,"d")}y(nl,Dt);function il(){Dt.call(this,"c")}y(il,Dt);var Ei={},Ih=null;function Ao(){return Ih=Ih||new te}Ei.La="serverreachability";function Ah(u){Dt.call(this,Ei.La,u)}y(Ah,Dt);function Ws(u){const m=Ao();fe(m,new Ah(m))}Ei.STAT_EVENT="statevent";function xh(u,m){Dt.call(this,Ei.STAT_EVENT,u),this.stat=m}y(xh,Dt);function pe(u){const m=Ao();fe(m,new xh(m,u))}Ei.Ma="timingevent";function Sh(u,m){Dt.call(this,Ei.Ma,u),this.size=m}y(Sh,Dt);function Gs(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},m)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function hw(u,m,g,T,D,L){u.info(function(){if(u.g)if(L)for(var j="",yt=L.split("&"),Jt=0;Jt<yt.length;Jt++){var dt=yt[Jt].split("=");if(1<dt.length){var ee=dt[0];dt=dt[1];var ne=ee.split("_");j=2<=ne.length&&ne[1]=="type"?j+(ee+"="+dt+"&"):j+(ee+"=redacted&")}}else j=null;else j=L;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+m+`
`+g+`
`+j})}function fw(u,m,g,T,D,L,j){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+m+`
`+g+`
`+L+" "+j})}function Qi(u,m,g,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+mw(u,g)+(T?" "+T:"")})}function pw(u,m){u.info(function(){return"TIMEOUT: "+m})}Ks.prototype.info=function(){};function mw(u,m){if(!u.g)return m;if(!m)return null;try{var g=JSON.parse(m);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var T=g[u];if(!(2>T.length)){var D=T[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var j=1;j<D.length;j++)D[j]=""}}}}return tl(g)}catch{return m}}var xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},kh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sl;function So(){}y(So,el),So.prototype.g=function(){return new XMLHttpRequest},So.prototype.i=function(){return{}},sl=new So;function Fn(u,m,g,T){this.j=u,this.i=m,this.l=g,this.R=T||1,this.U=new Hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ph}function Ph(){this.i=null,this.g="",this.h=!1}var Ch={},rl={};function ol(u,m,g){u.L=1,u.v=Ro(dn(m)),u.m=g,u.P=!0,Rh(u,null)}function Rh(u,m){u.F=Date.now(),ko(u),u.A=dn(u.v);var g=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),qh(g.i,"t",T),u.C=0,g=u.j.J,u.h=new Ph,u.g=uf(u.j,g?m:null,!u.m),0<u.O&&(u.M=new lw(f(u.Y,u,u.g),u.O)),m=u.U,g=u.g,T=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(_h[0]=D.toString()),D=_h);for(var L=0;L<D.length;L++){var j=ph(g,D[L],T||m.handleEvent,!1,m.h||m);if(!j)break;m.g[j.key]=j}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ws(),hw(u.i,u.u,u.A,u.l,u.R,u.m)}Fn.prototype.ca=function(u){u=u.target;const m=this.M;m&&hn(u)==3?m.j():this.Y(u)},Fn.prototype.Y=function(u){try{if(u==this.g)t:{const ne=hn(this.g);var m=this.g.Ba();const ts=this.g.Z();if(!(3>ne)&&(ne!=3||this.g&&(this.h.h||this.g.oa()||Jh(this.g)))){this.J||ne!=4||m==7||(m==8||0>=ts?Ws(3):Ws(2)),al(this);var g=this.g.Z();this.X=g;e:if(Mh(this)){var T=Jh(this.g);u="";var D=T.length,L=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ti(this),Ys(this);var j="";break e}this.h.i=new a.TextDecoder}for(m=0;m<D;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(L&&m==D-1)});T.length=0,this.h.g+=u,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=g==200,fw(this.i,this.u,this.A,this.l,this.R,ne,g),this.o){if(this.T&&!this.K){e:{if(this.g){var yt,Jt=this.g;if((yt=Jt.g?Jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(yt)){var dt=yt;break e}}dt=null}if(g=dt)Qi(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cl(this,g);else{this.o=!1,this.s=3,pe(12),Ti(this),Ys(this);break t}}if(this.P){g=!0;let Le;for(;!this.J&&this.C<j.length;)if(Le=gw(this,j),Le==rl){ne==4&&(this.s=4,pe(14),g=!1),Qi(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Ch){this.s=4,pe(15),Qi(this.i,this.l,j,"[Invalid Chunk]"),g=!1;break}else Qi(this.i,this.l,Le,null),cl(this,Le);if(Mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||j.length!=0||this.h.h||(this.s=1,pe(16),g=!1),this.o=this.o&&g,!g)Qi(this.i,this.l,j,"[Invalid Chunked Response]"),Ti(this),Ys(this);else if(0<j.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),pl(ee),ee.M=!0,pe(11))}}else Qi(this.i,this.l,j,null),cl(this,j);ne==4&&Ti(this),this.o&&!this.J&&(ne==4?of(this.j,this):(this.o=!1,ko(this)))}else Dw(this.g),g==400&&0<j.indexOf("Unknown SID")?(this.s=3,pe(12)):(this.s=0,pe(13)),Ti(this),Ys(this)}}}catch{}finally{}};function Mh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function gw(u,m){var g=u.C,T=m.indexOf(`
`,g);return T==-1?rl:(g=Number(m.substring(g,T)),isNaN(g)?Ch:(T+=1,T+g>m.length?rl:(m=m.slice(T,T+g),u.C=T+g,m)))}Fn.prototype.cancel=function(){this.J=!0,Ti(this)};function ko(u){u.S=Date.now()+u.I,Dh(u,u.I)}function Dh(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Gs(f(u.ba,u),m)}function al(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Fn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(pw(this.i,this.A),this.L!=2&&(Ws(),pe(17)),Ti(this),this.s=2,Ys(this)):Dh(this,this.S-u)};function Ys(u){u.j.G==0||u.J||of(u.j,u)}function Ti(u){al(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,wh(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function cl(u,m){try{var g=u.j;if(g.G!=0&&(g.g==u||ll(g.h,u))){if(!u.K&&ll(g.h,u)&&g.G==3){try{var T=g.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)Vo(g),Oo(g);else break t;fl(g),pe(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=Gs(f(g.Za,g),6e3));if(1>=Lh(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ai(g,11)}else if((u.K||g.g==u)&&Vo(g),!P(m))for(D=g.Da.g.parse(m),m=0;m<D.length;m++){let dt=D[m];if(g.T=dt[0],dt=dt[1],g.G==2)if(dt[0]=="c"){g.K=dt[1],g.ia=dt[2];const ee=dt[3];ee!=null&&(g.la=ee,g.j.info("VER="+g.la));const ne=dt[4];ne!=null&&(g.Aa=ne,g.j.info("SVER="+g.Aa));const ts=dt[5];ts!=null&&typeof ts=="number"&&0<ts&&(T=1.5*ts,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Le=u.g;if(Le){const Bo=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var L=T.h;L.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ul(L,L.h),L.h=null))}if(T.D){const ml=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(T.ya=ml,Tt(T.I,T.D,ml))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var j=u;if(T.qa=lf(T,T.J?T.ia:null,T.W),j.K){Vh(T.h,j);var yt=j,Jt=T.L;Jt&&(yt.I=Jt),yt.B&&(al(yt),ko(yt)),T.g=j}else sf(T);0<g.i.length&&Lo(g)}else dt[0]!="stop"&&dt[0]!="close"||Ai(g,7);else g.G==3&&(dt[0]=="stop"||dt[0]=="close"?dt[0]=="stop"?Ai(g,7):hl(g):dt[0]!="noop"&&g.l&&g.l.ta(dt),g.v=0)}}Ws(4)}catch{}}var yw=class{constructor(u,m){this.g=u,this.map=m}};function Nh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Lh(u){return u.h?1:u.g?u.g.size:0}function ll(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ul(u,m){u.g?u.g.add(m):u.h=m}function Vh(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Nh.prototype.cancel=function(){if(this.i=Fh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Fh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const g of u.g.values())m=m.concat(g.D);return m}return _(u.i)}function vw(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var m=[],g=u.length,T=0;T<g;T++)m.push(u[T]);return m}m=[],g=0;for(T in u)m[g++]=u[T];return m}function bw(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var m=[];u=u.length;for(var g=0;g<u;g++)m.push(g);return m}m=[],g=0;for(const T in u)m[g++]=T;return m}}}function Bh(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var g=bw(u),T=vw(u),D=T.length,L=0;L<D;L++)m.call(void 0,T[L],g&&g[L],u)}var $h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _w(u,m){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var T=u[g].indexOf("="),D=null;if(0<=T){var L=u[g].substring(0,T);D=u[g].substring(T+1)}else L=u[g];m(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ii(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ii){this.h=u.h,Po(this,u.j),this.o=u.o,this.g=u.g,Co(this,u.s),this.l=u.l;var m=u.i,g=new Js;g.i=m.i,m.g&&(g.g=new Map(m.g),g.h=m.h),Uh(this,g),this.m=u.m}else u&&(m=String(u).match($h))?(this.h=!1,Po(this,m[1]||"",!0),this.o=Xs(m[2]||""),this.g=Xs(m[3]||"",!0),Co(this,m[4]),this.l=Xs(m[5]||"",!0),Uh(this,m[6]||"",!0),this.m=Xs(m[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}Ii.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Qs(m,zh,!0),":");var g=this.g;return(g||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Qs(m,zh,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Qs(g,g.charAt(0)=="/"?Tw:Ew,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Qs(g,Aw)),u.join("")};function dn(u){return new Ii(u)}function Po(u,m,g){u.j=g?Xs(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Co(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Uh(u,m,g){m instanceof Js?(u.i=m,xw(u.i,u.h)):(g||(m=Qs(m,Iw)),u.i=new Js(m,u.h))}function Tt(u,m,g){u.i.set(m,g)}function Ro(u){return Tt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Xs(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qs(u,m,g){return typeof u=="string"?(u=encodeURI(u).replace(m,ww),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ww(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zh=/[#\/\?@]/g,Ew=/[#\?:]/g,Tw=/[#\?]/g,Iw=/[#\?@]/g,Aw=/#/g;function Js(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Bn(u){u.g||(u.g=new Map,u.h=0,u.i&&_w(u.i,function(m,g){u.add(decodeURIComponent(m.replace(/\+/g," ")),g)}))}n=Js.prototype,n.add=function(u,m){Bn(this),this.i=null,u=Ji(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(m),this.h+=1,this};function jh(u,m){Bn(u),m=Ji(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Hh(u,m){return Bn(u),m=Ji(u,m),u.g.has(m)}n.forEach=function(u,m){Bn(this),this.g.forEach(function(g,T){g.forEach(function(D){u.call(m,D,T,this)},this)},this)},n.na=function(){Bn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),g=[];for(let T=0;T<m.length;T++){const D=u[T];for(let L=0;L<D.length;L++)g.push(m[T])}return g},n.V=function(u){Bn(this);let m=[];if(typeof u=="string")Hh(this,u)&&(m=m.concat(this.g.get(Ji(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)m=m.concat(u[g])}return m},n.set=function(u,m){return Bn(this),this.i=null,u=Ji(this,u),Hh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function qh(u,m,g){jh(u,m),0<g.length&&(u.i=null,u.g.set(Ji(u,m),_(g)),u.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var g=0;g<m.length;g++){var T=m[g];const L=encodeURIComponent(String(T)),j=this.V(T);for(T=0;T<j.length;T++){var D=L;j[T]!==""&&(D+="="+encodeURIComponent(String(j[T]))),u.push(D)}}return this.i=u.join("&")};function Ji(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function xw(u,m){m&&!u.j&&(Bn(u),u.i=null,u.g.forEach(function(g,T){var D=T.toLowerCase();T!=D&&(jh(this,T),qh(this,D,g))},u)),u.j=m}function Sw(u,m){const g=new Ks;if(a.Image){const T=new Image;T.onload=p($n,g,"TestLoadImage: loaded",!0,m,T),T.onerror=p($n,g,"TestLoadImage: error",!1,m,T),T.onabort=p($n,g,"TestLoadImage: abort",!1,m,T),T.ontimeout=p($n,g,"TestLoadImage: timeout",!1,m,T),a.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function kw(u,m){const g=new Ks,T=new AbortController,D=setTimeout(()=>{T.abort(),$n(g,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(L=>{clearTimeout(D),L.ok?$n(g,"TestPingServer: ok",!0,m):$n(g,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(D),$n(g,"TestPingServer: error",!1,m)})}function $n(u,m,g,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(g)}catch{}}function Pw(){this.g=new dw}function Cw(u,m,g){const T=g||"";try{Bh(u,function(D,L){let j=D;l(D)&&(j=tl(D)),m.push(T+L+"="+encodeURIComponent(j))})}catch(D){throw m.push(T+"type="+encodeURIComponent("_badmap")),D}}function Mo(u){this.l=u.Ub||null,this.j=u.eb||!1}y(Mo,el),Mo.prototype.g=function(){return new Do(this.l,this.j)},Mo.prototype.i=(function(u){return function(){return u}})({});function Do(u,m){te.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Do,te),n=Do.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,tr(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||a).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Zs(this):tr(this),this.readyState==3&&Wh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Zs(this))},n.Qa=function(u){this.g&&(this.response=u,Zs(this))},n.ga=function(){this.g&&Zs(this)};function Zs(u){u.readyState=4,u.l=null,u.j=null,u.v=null,tr(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var g=m.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=m.next();return u.join(`\r
`)};function tr(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Do.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Gh(u){let m="";return V(u,function(g,T){m+=T,m+=":",m+=g,m+=`\r
`}),m}function dl(u,m,g){t:{for(T in g){var T=!1;break t}T=!0}T||(g=Gh(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):Tt(u,m,g))}function Nt(u){te.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Nt,te);var Rw=/^https?$/i,Mw=["POST","PUT"];n=Nt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sl.g(),this.v=this.o?Eh(this.o):Eh(sl),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(L){Kh(this,L);return}if(u=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)g.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const L of T.keys())g.set(L,T.get(L));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Mw,m,void 0))||T||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,j]of g)this.g.setRequestHeader(L,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qh(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Kh(this,L)}};function Kh(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Yh(u),No(u)}function Yh(u){u.A||(u.A=!0,fe(u,"complete"),fe(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,fe(this,"complete"),fe(this,"abort"),No(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),Nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xh(this):this.bb())},n.bb=function(){Xh(this)};function Xh(u){if(u.h&&typeof o<"u"&&(!u.v[1]||hn(u)!=4||u.Z()!=2)){if(u.u&&hn(u)==4)vh(u.Ea,0,u);else if(fe(u,"readystatechange"),hn(u)==4){u.h=!1;try{const j=u.Z();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var g;if(!(g=m)){var T;if(T=j===0){var D=String(u.D).match($h)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),T=!Rw.test(D?D.toLowerCase():"")}g=T}if(g)fe(u,"complete"),fe(u,"success");else{u.m=6;try{var L=2<hn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Yh(u)}}finally{No(u)}}}}function No(u,m){if(u.g){Qh(u);const g=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||fe(u,"ready");try{g.onreadystatechange=T}catch{}}}function Qh(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function hn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),uw(m)}};function Jh(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Dw(u){const m={};u=(u.g&&2<=hn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(P(u[T]))continue;var g=S(u[T]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=m[D]||[];m[D]=L,L.push(g)}E(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(u,m,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||m}function Zh(u){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=er("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=er("baseRetryDelayMs",5e3,u),this.cb=er("retryDelaySeedMs",1e4,u),this.Wa=er("forwardChannelMaxRetries",2,u),this.wa=er("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Nh(u&&u.concurrentRequestLimit),this.Da=new Pw,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zh.prototype,n.la=8,n.G=1,n.connect=function(u,m,g,T){pe(0),this.W=u,this.H=m||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=lf(this,null,this.W),Lo(this)};function hl(u){if(tf(u),u.G==3){var m=u.U++,g=dn(u.I);if(Tt(g,"SID",u.K),Tt(g,"RID",m),Tt(g,"TYPE","terminate"),nr(u,g),m=new Fn(u,u.j,m),m.L=2,m.v=Ro(dn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(m.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=m.v,g=!0),g||(m.g=uf(m.j,null),m.g.ea(m.v)),m.F=Date.now(),ko(m)}cf(u)}function Oo(u){u.g&&(pl(u),u.g.cancel(),u.g=null)}function tf(u){Oo(u),u.u&&(a.clearTimeout(u.u),u.u=null),Vo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Lo(u){if(!Oh(u.h)&&!u.s){u.s=!0;var m=u.Ga;pt||Qt(),$||(pt(),$=!0),et.add(m,u),u.B=0}}function Nw(u,m){return Lh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Gs(f(u.Ga,u,m),af(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new Fn(this,this.j,u);let L=this.o;if(this.S&&(L?(L=b(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)t:{for(var m=0,g=0;g<this.i.length;g++){e:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=g;break t}if(m===4096||g===this.i.length-1){m=g+1;break t}}m=1e3}else m=1e3;m=nf(this,D,m),g=dn(this.I),Tt(g,"RID",u),Tt(g,"CVER",22),this.D&&Tt(g,"X-HTTP-Session-Id",this.D),nr(this,g),L&&(this.O?m="headers="+encodeURIComponent(String(Gh(L)))+"&"+m:this.m&&dl(g,this.m,L)),ul(this.h,D),this.Ua&&Tt(g,"TYPE","init"),this.P?(Tt(g,"$req",m),Tt(g,"SID","null"),D.T=!0,ol(D,g,null)):ol(D,g,m),this.G=2}}else this.G==3&&(u?ef(this,u):this.i.length==0||Oh(this.h)||ef(this))};function ef(u,m){var g;m?g=m.l:g=u.U++;const T=dn(u.I);Tt(T,"SID",u.K),Tt(T,"RID",g),Tt(T,"AID",u.T),nr(u,T),u.m&&u.o&&dl(T,u.m,u.o),g=new Fn(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),m&&(u.i=m.D.concat(u.i)),m=nf(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ul(u.h,g),ol(g,T,m)}function nr(u,m){u.H&&V(u.H,function(g,T){Tt(m,T,g)}),u.l&&Bh({},function(g,T){Tt(m,T,g)})}function nf(u,m,g){g=Math.min(u.i.length,g);var T=u.l?f(u.l.Na,u.l,u):null;t:{var D=u.i;let L=-1;for(;;){const j=["count="+g];L==-1?0<g?(L=D[0].g,j.push("ofs="+L)):L=0:j.push("ofs="+L);let yt=!0;for(let Jt=0;Jt<g;Jt++){let dt=D[Jt].g;const ee=D[Jt].map;if(dt-=L,0>dt)L=Math.max(0,D[Jt].g-100),yt=!1;else try{Cw(ee,j,"req"+dt+"_")}catch{T&&T(ee)}}if(yt){T=j.join("&");break t}}}return u=u.i.splice(0,g),m.D=u,T}function sf(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;pt||Qt(),$||(pt(),$=!0),et.add(m,u),u.v=0}}function fl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Gs(f(u.Fa,u),af(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,rf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Gs(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pe(10),Oo(this),rf(this))};function pl(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function rf(u){u.g=new Fn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=dn(u.qa);Tt(m,"RID","rpc"),Tt(m,"SID",u.K),Tt(m,"AID",u.T),Tt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Tt(m,"TO",u.ja),Tt(m,"TYPE","xmlhttp"),nr(u,m),u.m&&u.o&&dl(m,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Ro(dn(m)),g.m=null,g.P=!0,Rh(g,u)}n.Za=function(){this.C!=null&&(this.C=null,Oo(this),fl(this),pe(19))};function Vo(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function of(u,m){var g=null;if(u.g==m){Vo(u),pl(u),u.g=null;var T=2}else if(ll(u.h,m))g=m.D,Vh(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){g=m.m?m.m.length:0,m=Date.now()-m.F;var D=u.B;T=Ao(),fe(T,new Sh(T,g)),Lo(u)}else sf(u);else if(D=m.s,D==3||D==0&&0<m.X||!(T==1&&Nw(u,m)||T==2&&fl(u)))switch(g&&0<g.length&&(m=u.h,m.i=m.i.concat(g)),D){case 1:Ai(u,5);break;case 4:Ai(u,10);break;case 3:Ai(u,6);break;default:Ai(u,2)}}}function af(u,m){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*m}function Ai(u,m){if(u.j.info("Error code "+m),m==2){var g=f(u.fb,u),T=u.Xa;const D=!T;T=new Ii(T||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Po(T,"https"),Ro(T),D?Sw(T.toString(),g):kw(T.toString(),g)}else pe(2);u.G=0,u.l&&u.l.sa(m),cf(u),tf(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),pe(2)):(this.j.info("Failed to ping google.com"),pe(1))};function cf(u){if(u.G=0,u.ka=[],u.l){const m=Fh(u.h);(m.length!=0||u.i.length!=0)&&(v(u.ka,m),v(u.ka,u.i),u.h.i.length=0,_(u.i),u.i.length=0),u.l.ra()}}function lf(u,m,g){var T=g instanceof Ii?dn(g):new Ii(g);if(T.g!="")m&&(T.g=m+"."+T.g),Co(T,T.s);else{var D=a.location;T=D.protocol,m=m?m+"."+D.hostname:D.hostname,D=+D.port;var L=new Ii(null);T&&Po(L,T),m&&(L.g=m),D&&Co(L,D),g&&(L.l=g),T=L}return g=u.D,m=u.ya,g&&m&&Tt(T,g,m),Tt(T,"VER",u.la),nr(u,T),T}function uf(u,m,g){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Nt(new Mo({eb:g})):new Nt(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function df(){}n=df.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Fo(){}Fo.prototype.g=function(u,m){return new we(u,m)};function we(u,m){te.call(this),this.g=new Zh(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!P(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!P(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Zi(this)}y(we,te),we.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},we.prototype.close=function(){hl(this.g)},we.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=tl(u),u=g);m.i.push(new yw(m.Ya++,u)),m.G==3&&Lo(m)},we.prototype.N=function(){this.g.l=null,delete this.j,hl(this.g),delete this.g,we.aa.N.call(this)};function hf(u){nl.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const g in m){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}y(hf,nl);function ff(){il.call(this),this.status=1}y(ff,il);function Zi(u){this.g=u}y(Zi,df),Zi.prototype.ua=function(){fe(this.g,"a")},Zi.prototype.ta=function(u){fe(this.g,new hf(u))},Zi.prototype.sa=function(u){fe(this.g,new ff)},Zi.prototype.ra=function(){fe(this.g,"b")},Fo.prototype.createWebChannel=Fo.prototype.g,we.prototype.send=we.prototype.o,we.prototype.open=we.prototype.m,we.prototype.close=we.prototype.close,Sy=function(){return new Fo},xy=function(){return Ao()},Ay=Ei,Zl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,ha=xo,kh.COMPLETE="complete",Iy=kh,Th.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",te.prototype.listen=te.prototype.K,ur=Th,Nt.prototype.listenOnce=Nt.prototype.L,Nt.prototype.getLastError=Nt.prototype.Ka,Nt.prototype.getLastErrorCode=Nt.prototype.Ba,Nt.prototype.getStatus=Nt.prototype.Z,Nt.prototype.getResponseJson=Nt.prototype.Oa,Nt.prototype.getResponseText=Nt.prototype.oa,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Ha,Ty=Nt}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});const qf="@firebase/firestore",Wf="4.8.0";/**
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
 */class re{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
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
 */let Ds="11.10.0";/**
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
 */const ji=new Fu("@firebase/firestore");function ss(){return ji.logLevel}function W(n,...t){if(ji.logLevel<=rt.DEBUG){const e=t.map(Ju);ji.debug(`Firestore (${Ds}): ${n}`,...e)}}function Pn(n,...t){if(ji.logLevel<=rt.ERROR){const e=t.map(Ju);ji.error(`Firestore (${Ds}): ${n}`,...e)}}function Cn(n,...t){if(ji.logLevel<=rt.WARN){const e=t.map(Ju);ji.warn(`Firestore (${Ds}): ${n}`,...e)}}function Ju(n){if(typeof n=="string")return n;try{/**
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
 */function Q(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,ky(n,i,e)}function ky(n,t,e){let i=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw Pn(i),new Error(i)}function ft(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||ky(t,s,i)}function tt(n,t){return n}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Dn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Py{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(re.UNAUTHENTICATED)))}shutdown(){}}class qI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class WI{constructor(t){this.t=t,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ft(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let r=new In;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new In,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=r;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new In)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ft(typeof i.accessToken=="string",31837,{l:i}),new Py(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string",2055,{h:t}),new re(t)}}class GI{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KI{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new GI(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YI{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Re(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ft(this.o===void 0,3512);const i=r=>{r.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gf(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(ft(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Gf(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function XI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function Ry(){return new TextEncoder}/**
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
 */class pc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=XI(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function it(n,t){return n<t?-1:n>t?1:0}function tu(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return it(i,s);{const r=Ry(),o=QI(r.encode(Kf(n,e)),r.encode(Kf(t,e)));return o!==0?o:it(i,s)}}e+=i>65535?2:1}return it(n.length,t.length)}function Kf(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function QI(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return it(n[e],t[e]);return it(n.length,t.length)}function Es(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
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
 */const Yf="__name__";class Je{constructor(t,e,i){e===void 0?e=0:e>t.length&&Q(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&Q(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Je.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Je?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=Je.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return it(t.length,e.length)}static compareSegments(t,e){const i=Je.isNumericId(t),s=Je.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?Je.extractNumericId(t).compare(Je.extractNumericId(e)):tu(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ni.fromString(t.substring(4,t.length-2))}}class _t extends Je{construct(t,e,i){return new _t(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new _t(e)}static emptyPath(){return new _t([])}}const JI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends Je{construct(t,e,i){return new Gt(t,e,i)}static isValidIdentifier(t){return JI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yf}static keyField(){return new Gt([Yf])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Gt(e)}static emptyPath(){return new Gt([])}}/**
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
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(_t.fromString(t))}static fromName(t){return new G(_t.fromString(t).popFirst(5))}static empty(){return new G(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_t.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return _t.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new _t(t.slice()))}}/**
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
 */function My(n,t,e){if(!e)throw new q(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Dy(n,t,e,i){if(t===!0&&i===!0)throw new q(F.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Xf(n){if(!G.isDocumentKey(n))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qf(n){if(G.isDocumentKey(n))throw new q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ny(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function le(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=mc(n);throw new q(F.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function zt(n,t){const e={typeString:n};return t&&(e.value=t),e}function co(n,t){if(!Ny(n))throw new q(F.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new q(F.INVALID_ARGUMENT,e);return!0}/**
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
 */const Jf=-62135596800,Zf=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*Zf);return new wt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Jf)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zf}_compareTo(t){return this.seconds===t.seconds?it(this.nanoseconds,t.nanoseconds):it(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(co(t,wt._jsonSchema))return new wt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Jf;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:zt("string",wt._jsonSchemaVersion),seconds:zt("number"),nanoseconds:zt("number")};/**
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
 */class J{static fromTimestamp(t){return new J(t)}static min(){return new J(new wt(0,0))}static max(){return new J(new wt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Br=-1;function ZI(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=J.fromTimestamp(i===1e9?new wt(e+1,0):new wt(e,i));return new ui(s,G.empty(),t)}function tA(n){return new ui(n.readTime,n.key,Br)}class ui{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new ui(J.min(),G.empty(),Br)}static max(){return new ui(J.max(),G.empty(),Br)}}function eA(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:it(n.largestBatchId,t.largestBatchId))}/**
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
 */const nA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Ns(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==nA)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):B.reject(e)}static resolve(t){return new B(((e,i)=>{e(t)}))}static reject(t){return new B(((e,i)=>{i(t)}))}static waitFor(t){return new B(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(c=>i(c)))})),o=!0,r===s&&e()}))}static or(t){let e=B.resolve(!1);for(const i of t)e=e.next((s=>s?B.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new B(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next((d=>{o[l]=d,++a,a===r&&i(o)}),(d=>s(d)))}}))}static doWhile(t,e){return new B(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function sA(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Os(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class gc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this._e(i),this.ae=i=>e.writeSequenceNumber(i))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}gc.ue=-1;/**
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
 */const Zu=-1;function yc(n){return n==null}function $a(n){return n===0&&1/n==-1/0}function rA(n){return typeof n=="number"&&Number.isInteger(n)&&!$a(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Oy="";function oA(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=tp(t)),t=aA(n.get(e),t);return tp(t)}function aA(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case Oy:e+="";break;default:e+=r}}return e}function tp(n){return n+Oy+""}/**
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
 */function ep(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function bi(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ly(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Mt{constructor(t,e){this.comparator=t,this.root=e||Zt.EMPTY}insert(t,e){return new Mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(t){return new Mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zo(this.root,t,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zo(this.root,t,this.comparator,!0)}}class zo{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Zt{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??Zt.RED,this.left=s??Zt.EMPTY,this.right=r??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new Zt(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Zt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Q(27949);return t+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new Zt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qt{constructor(t){this.comparator=t,this.data=new Mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new np(this.data.getIterator())}getIteratorFrom(t){return new np(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new qt(this.comparator);return e.data=t,e}}class np{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xe{constructor(t){this.fields=t,t.sort(Gt.comparator)}static empty(){return new xe([])}unionWith(t){let e=new qt(Gt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new xe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Es(this.fields,t.fields,((e,i)=>e.isEqual(i)))}}/**
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
 */class Vy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Vy("Invalid base64 string: "+r):r}})(t);return new Xt(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new Xt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return it(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const cA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(n){if(ft(!!n,39018),typeof n=="string"){let t=0;const e=cA.exec(n);if(ft(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Vt(n.seconds),nanos:Vt(n.nanos)}}function Vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hi(n){return typeof n=="string"?Xt.fromBase64String(n):Xt.fromUint8Array(n)}/**
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
 */const Fy="server_timestamp",By="__type__",$y="__previous_value__",Uy="__local_write_time__";function td(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[By])===null||e===void 0?void 0:e.stringValue)===Fy}function vc(n){const t=n.mapValue.fields[$y];return td(t)?vc(t):t}function $r(n){const t=di(n.mapValue.fields[Uy].timestampValue);return new wt(t.seconds,t.nanos)}/**
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
 */class lA{constructor(t,e,i,s,r,o,a,c,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const Ua="(default)";class Ts{constructor(t,e){this.projectId=t,this.database=e||Ua}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database===Ua}isEqual(t){return t instanceof Ts&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const zy="__type__",uA="__max__",jo={mapValue:{}},jy="__vector__",za="value";function fi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?td(n)?4:hA(n)?9007199254740991:dA(n)?10:11:Q(28295,{value:n})}function on(n,t){if(n===t)return!0;const e=fi(n);if(e!==fi(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return $r(n).isEqual($r(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=di(s.timestampValue),a=di(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return hi(s.bytesValue).isEqual(hi(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return Vt(s.geoPointValue.latitude)===Vt(r.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return Vt(s.integerValue)===Vt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Vt(s.doubleValue),a=Vt(r.doubleValue);return o===a?$a(o)===$a(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return Es(n.arrayValue.values||[],t.arrayValue.values||[],on);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(ep(o)!==ep(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!on(o[c],a[c])))return!1;return!0})(n,t);default:return Q(52216,{left:n})}}function Ur(n,t){return(n.values||[]).find((e=>on(e,t)))!==void 0}function Is(n,t){if(n===t)return 0;const e=fi(n),i=fi(t);if(e!==i)return it(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return it(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=Vt(r.integerValue||r.doubleValue),c=Vt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,t);case 3:return ip(n.timestampValue,t.timestampValue);case 4:return ip($r(n),$r(t));case 5:return tu(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=hi(r),c=hi(o);return a.compareTo(c)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=it(a[l],c[l]);if(d!==0)return d}return it(a.length,c.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=it(Vt(r.latitude),Vt(o.latitude));return a!==0?a:it(Vt(r.longitude),Vt(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return sp(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},p=(a=h[za])===null||a===void 0?void 0:a.arrayValue,y=(c=f[za])===null||c===void 0?void 0:c.arrayValue,_=it(((l=p==null?void 0:p.values)===null||l===void 0?void 0:l.length)||0,((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0);return _!==0?_:sp(p,y)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===jo.mapValue&&o===jo.mapValue)return 0;if(r===jo.mapValue)return 1;if(o===jo.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=tu(c[h],d[h]);if(f!==0)return f;const p=Is(a[c[h]],l[d[h]]);if(p!==0)return p}return it(c.length,d.length)})(n.mapValue,t.mapValue);default:throw Q(23264,{le:e})}}function ip(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return it(n,t);const e=di(n),i=di(t),s=it(e.seconds,i.seconds);return s!==0?s:it(e.nanos,i.nanos)}function sp(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=Is(e[s],i[s]);if(r)return r}return it(e.length,i.length)}function As(n){return eu(n)}function eu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=di(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return hi(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return G.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=eu(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${eu(e.fields[o])}`;return s+"}"})(n.mapValue):Q(61005,{value:n})}function fa(n){switch(fi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=vc(n);return t?16+fa(t):16;case 5:return 2*n.stringValue.length;case 6:return hi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+fa(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return bi(i.fields,((r,o)=>{s+=r.length+fa(o)})),s})(n.mapValue);default:throw Q(13486,{value:n})}}function rp(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function nu(n){return!!n&&"integerValue"in n}function ed(n){return!!n&&"arrayValue"in n}function op(n){return!!n&&"nullValue"in n}function ap(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pa(n){return!!n&&"mapValue"in n}function dA(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[zy])===null||e===void 0?void 0:e.stringValue)===jy}function Tr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return bi(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=Tr(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Tr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function hA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===uA}/**
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
 */class be{constructor(t){this.value=t}static empty(){return new be({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!pa(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Tr(e)}setAll(t){let e=Gt.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=Tr(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());pa(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return on(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];pa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){bi(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new be(Tr(this.value))}}function Hy(n){const t=[];return bi(n.fields,((e,i)=>{const s=new Gt([e]);if(pa(i)){const r=Hy(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new xe(t)}/**
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
 */class ae{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ae(t,0,J.min(),J.min(),J.min(),be.empty(),0)}static newFoundDocument(t,e,i,s){return new ae(t,1,e,J.min(),i,s,0)}static newNoDocument(t,e){return new ae(t,2,e,J.min(),J.min(),be.empty(),0)}static newUnknownDocument(t,e){return new ae(t,3,e,J.min(),J.min(),be.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ae&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ja{constructor(t,e){this.position=t,this.inclusive=e}}function cp(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),e.key):i=Is(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function lp(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!on(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class zr{constructor(t,e="asc"){this.field=t,this.dir=e}}function fA(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class qy{}class Ut extends qy{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new mA(t,e,i):e==="array-contains"?new vA(t,i):e==="in"?new bA(t,i):e==="not-in"?new _A(t,i):e==="array-contains-any"?new wA(t,i):new Ut(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new gA(t,i):new yA(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Is(e,this.value)):e!==null&&fi(this.value)===fi(e)&&this.matchesComparison(Is(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends qy{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new He(t,e)}matches(t){return Wy(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Wy(n){return n.op==="and"}function Gy(n){return pA(n)&&Wy(n)}function pA(n){for(const t of n.filters)if(t instanceof He)return!1;return!0}function iu(n){if(n instanceof Ut)return n.field.canonicalString()+n.op.toString()+As(n.value);if(Gy(n))return n.filters.map((t=>iu(t))).join(",");{const t=n.filters.map((e=>iu(e))).join(",");return`${n.op}(${t})`}}function Ky(n,t){return n instanceof Ut?(function(i,s){return s instanceof Ut&&i.op===s.op&&i.field.isEqual(s.field)&&on(i.value,s.value)})(n,t):n instanceof He?(function(i,s){return s instanceof He&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&Ky(o,s.filters[a])),!0):!1})(n,t):void Q(19439)}function Yy(n){return n instanceof Ut?(function(e){return`${e.field.canonicalString()} ${e.op} ${As(e.value)}`})(n):n instanceof He?(function(e){return e.op.toString()+" {"+e.getFilters().map(Yy).join(" ,")+"}"})(n):"Filter"}class mA extends Ut{constructor(t,e,i){super(t,e,i),this.key=G.fromName(i.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class gA extends Ut{constructor(t,e){super(t,"in",e),this.keys=Xy("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class yA extends Ut{constructor(t,e){super(t,"not-in",e),this.keys=Xy("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Xy(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((i=>G.fromName(i.referenceValue)))}class vA extends Ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ed(e)&&Ur(e.arrayValue,this.value)}}class bA extends Ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ur(this.value.arrayValue,e)}}class _A extends Ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ur(this.value.arrayValue,e)}}class wA extends Ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ed(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>Ur(this.value.arrayValue,i)))}}/**
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
 */class EA{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Pe=null}}function up(n,t=null,e=[],i=[],s=null,r=null,o=null){return new EA(n,t,e,i,s,r,o)}function nd(n){const t=tt(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>iu(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),yc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>As(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>As(i))).join(",")),t.Pe=e}return t.Pe}function id(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!fA(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ky(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!lp(n.startAt,t.startAt)&&lp(n.endAt,t.endAt)}function su(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ls{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function TA(n,t,e,i,s,r,o,a){return new Ls(n,t,e,i,s,r,o,a)}function bc(n){return new Ls(n)}function dp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qy(n){return n.collectionGroup!==null}function Ir(n){const t=tt(n);if(t.Te===null){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qt(Gt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new zr(r,i))})),e.has(Gt.keyField().canonicalString())||t.Te.push(new zr(Gt.keyField(),i))}return t.Te}function nn(n){const t=tt(n);return t.Ie||(t.Ie=IA(t,Ir(n))),t.Ie}function IA(n,t){if(n.limitType==="F")return up(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new zr(s.field,r)}));const e=n.endAt?new ja(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ja(n.startAt.position,n.startAt.inclusive):null;return up(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function ru(n,t){const e=n.filters.concat([t]);return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ou(n,t,e){return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function _c(n,t){return id(nn(n),nn(t))&&n.limitType===t.limitType}function Jy(n){return`${nd(nn(n))}|lt:${n.limitType}`}function rs(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>Yy(s))).join(", ")}]`),yc(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>As(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>As(s))).join(",")),`Target(${i})`})(nn(n))}; limitType=${n.limitType})`}function wc(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):G.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of Ir(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,c){const l=cp(o,a,c);return o.inclusive?l<=0:l<0})(i.startAt,Ir(i),s)||i.endAt&&!(function(o,a,c){const l=cp(o,a,c);return o.inclusive?l>=0:l>0})(i.endAt,Ir(i),s))})(n,t)}function AA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zy(n){return(t,e)=>{let i=!1;for(const s of Ir(n)){const r=xA(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function xA(n,t,e){const i=n.field.isKeyField()?G.comparator(t.key,e.key):(function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?Is(c,l):Q(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Q(19790,{direction:n.dir})}}/**
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
 */class Gi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){bi(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return Ly(this.inner)}size(){return this.innerSize}}/**
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
 */const SA=new Mt(G.comparator);function Rn(){return SA}const tv=new Mt(G.comparator);function dr(...n){let t=tv;for(const e of n)t=t.insert(e.key,e);return t}function ev(n){let t=tv;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function Di(){return Ar()}function nv(){return Ar()}function Ar(){return new Gi((n=>n.toString()),((n,t)=>n.isEqual(t)))}const kA=new Mt(G.comparator),PA=new qt(G.comparator);function ot(...n){let t=PA;for(const e of n)t=t.add(e);return t}const CA=new qt(it);function RA(){return CA}/**
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
 */function sd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(t)?"-0":t}}function iv(n){return{integerValue:""+n}}function MA(n,t){return rA(t)?iv(t):sd(n,t)}/**
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
 */class Ec{constructor(){this._=void 0}}function DA(n,t,e){return n instanceof Ha?(function(s,r){const o={fields:{[By]:{stringValue:Fy},[Uy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&td(r)&&(r=vc(r)),r&&(o.fields[$y]=r),{mapValue:o}})(e,t):n instanceof jr?rv(n,t):n instanceof Hr?ov(n,t):(function(s,r){const o=sv(s,r),a=hp(o)+hp(s.Ee);return nu(o)&&nu(s.Ee)?iv(a):sd(s.serializer,a)})(n,t)}function NA(n,t,e){return n instanceof jr?rv(n,t):n instanceof Hr?ov(n,t):e}function sv(n,t){return n instanceof qa?(function(i){return nu(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class Ha extends Ec{}class jr extends Ec{constructor(t){super(),this.elements=t}}function rv(n,t){const e=av(t);for(const i of n.elements)e.some((s=>on(s,i)))||e.push(i);return{arrayValue:{values:e}}}class Hr extends Ec{constructor(t){super(),this.elements=t}}function ov(n,t){let e=av(t);for(const i of n.elements)e=e.filter((s=>!on(s,i)));return{arrayValue:{values:e}}}class qa extends Ec{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function hp(n){return Vt(n.integerValue||n.doubleValue)}function av(n){return ed(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function OA(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof jr&&s instanceof jr||i instanceof Hr&&s instanceof Hr?Es(i.elements,s.elements,on):i instanceof qa&&s instanceof qa?on(i.Ee,s.Ee):i instanceof Ha&&s instanceof Ha})(n.transform,t.transform)}class LA{constructor(t,e){this.version=t,this.transformResults=e}}class ge{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ma(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Tc{}function cv(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ic(n.key,ge.none()):new lo(n.key,n.data,ge.none());{const e=n.data,i=be.empty();let s=new qt(Gt.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new _i(n.key,i,new xe(s.toArray()),ge.none())}}function VA(n,t,e){n instanceof lo?(function(s,r,o){const a=s.value.clone(),c=pp(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof _i?(function(s,r,o){if(!ma(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=pp(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(lv(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function xr(n,t,e,i){return n instanceof lo?(function(r,o,a,c){if(!ma(r.precondition,o))return a;const l=r.value.clone(),d=mp(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,t,e,i):n instanceof _i?(function(r,o,a,c){if(!ma(r.precondition,o))return a;const l=mp(r.fieldTransforms,c,o),d=o.data;return d.setAll(lv(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((h=>h.field)))})(n,t,e,i):(function(r,o,a){return ma(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function FA(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=sv(i.transform,s||null);r!=null&&(e===null&&(e=be.empty()),e.set(i.field,r))}return e||null}function fp(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Es(i,s,((r,o)=>OA(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class lo extends Tc{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _i extends Tc{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lv(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function pp(n,t,e){const i=new Map;ft(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,NA(o,a,e[s]))}return i}function mp(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,DA(r,o,t))}return i}class Ic extends Tc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BA extends Tc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $A{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&VA(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=xr(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=xr(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=nv();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const c=cv(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ot())}isEqual(t){return this.batchId===t.batchId&&Es(this.mutations,t.mutations,((e,i)=>fp(e,i)))&&Es(this.baseMutations,t.baseMutations,((e,i)=>fp(e,i)))}}class rd{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){ft(t.mutations.length===i.length,58842,{Ve:t.mutations.length,me:i.length});let s=(function(){return kA})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new rd(t,e,i,s)}}/**
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
 */class UA{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class zA{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var $t,lt;function jA(n){switch(n){case F.OK:return Q(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Q(15467,{code:n})}}function uv(n){if(n===void 0)return Pn("GRPC error has no .code"),F.UNKNOWN;switch(n){case $t.OK:return F.OK;case $t.CANCELLED:return F.CANCELLED;case $t.UNKNOWN:return F.UNKNOWN;case $t.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case $t.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case $t.INTERNAL:return F.INTERNAL;case $t.UNAVAILABLE:return F.UNAVAILABLE;case $t.UNAUTHENTICATED:return F.UNAUTHENTICATED;case $t.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case $t.NOT_FOUND:return F.NOT_FOUND;case $t.ALREADY_EXISTS:return F.ALREADY_EXISTS;case $t.PERMISSION_DENIED:return F.PERMISSION_DENIED;case $t.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case $t.ABORTED:return F.ABORTED;case $t.OUT_OF_RANGE:return F.OUT_OF_RANGE;case $t.UNIMPLEMENTED:return F.UNIMPLEMENTED;case $t.DATA_LOSS:return F.DATA_LOSS;default:return Q(39323,{code:n})}}(lt=$t||($t={}))[lt.OK=0]="OK",lt[lt.CANCELLED=1]="CANCELLED",lt[lt.UNKNOWN=2]="UNKNOWN",lt[lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",lt[lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",lt[lt.NOT_FOUND=5]="NOT_FOUND",lt[lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",lt[lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",lt[lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",lt[lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",lt[lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",lt[lt.ABORTED=10]="ABORTED",lt[lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",lt[lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",lt[lt.INTERNAL=13]="INTERNAL",lt[lt.UNAVAILABLE=14]="UNAVAILABLE",lt[lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const HA=new ni([4294967295,4294967295],0);function gp(n){const t=Ry().encode(n),e=new Ey;return e.update(t),new Uint8Array(e.digest())}function yp(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new ni([e,i],0),new ni([s,r],0)]}class od{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new hr(`Invalid padding: ${e}`);if(i<0)throw new hr(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new hr(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=ni.fromNumber(this.fe)}pe(t,e,i){let s=t.add(e.multiply(ni.fromNumber(i)));return s.compare(HA)===1&&(s=new ni([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=gp(t),[i,s]=yp(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);if(!this.ye(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new od(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.fe===0)return;const e=gp(t),[i,s]=yp(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);this.we(o)}}we(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ac{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,uo.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Ac(J.min(),s,new Mt(it),Rn(),ot())}}class uo{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new uo(i,e,ot(),ot(),ot())}}/**
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
 */class ga{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.be=s}}class dv{constructor(t,e){this.targetId=t,this.De=e}}class hv{constructor(t,e,i=Xt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class vp{constructor(){this.ve=0,this.Ce=bp(),this.Fe=Xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=ot(),e=ot(),i=ot();return this.Ce.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:Q(38017,{changeType:r})}})),new uo(this.Fe,this.Me,t,e,i)}ke(){this.xe=!1,this.Ce=bp()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,ft(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class qA{constructor(t){this.We=t,this.Ge=new Map,this.ze=Rn(),this.je=Ho(),this.Je=Ho(),this.He=new Mt(it)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const i=this.tt(e);switch(t.state){case 0:this.nt(e)&&i.Be(t.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(t.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(i.Ke(),i.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),i.Be(t.resumeToken));break;default:Q(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((i,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,i=t.De.count,s=this.st(e);if(s){const r=s.target;if(su(r))if(i===0){const o=new G(r.path);this.Xe(e,o,ae.newNoDocument(o,J.min()))}else ft(i===1,20013,{expectedCount:i});else{const o=this.ot(e);if(o!==i){const a=this._t(t),c=a?this.ut(a,t,o):1;if(c!==0){this.rt(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,l)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=hi(i).toUint8Array()}catch(c){if(c instanceof Vy)return Cn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new od(o,s,r)}catch(c){return Cn(c instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(t,e,i){return e.De.count===i-this.ht(t,e.targetId)?0:2}ht(t,e){const i=this.We.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Xe(e,r,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((r,o)=>{const a=this.st(o);if(a){if(r.current&&su(a.target)){const c=new G(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,ae.newNoDocument(c,t))}r.Ne&&(e.set(o,r.Le()),r.ke())}}));let i=ot();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.ze.forEach(((r,o)=>o.setReadTime(t)));const s=new Ac(t,e,this.He,this.ze,i);return this.ze=Rn(),this.je=Ho(),this.Je=Ho(),this.He=new Mt(it),s}Ze(t,e){if(!this.nt(t))return;const i=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,i),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,i){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),i&&(this.ze=this.ze.insert(e,i))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new vp,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new qt(it),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new qt(it),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||W("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new vp),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Ho(){return new Mt(G.comparator)}function bp(){return new Mt(G.comparator)}const WA={asc:"ASCENDING",desc:"DESCENDING"},GA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KA={and:"AND",or:"OR"};class YA{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function au(n,t){return n.useProto3Json||yc(t)?t:{value:t}}function Wa(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fv(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function XA(n,t){return Wa(n,t.toTimestamp())}function sn(n){return ft(!!n,49232),J.fromTimestamp((function(e){const i=di(e);return new wt(i.seconds,i.nanos)})(n))}function ad(n,t){return cu(n,t).canonicalString()}function cu(n,t){const e=(function(s){return new _t(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function pv(n){const t=_t.fromString(n);return ft(bv(t),10190,{key:t.toString()}),t}function lu(n,t){return ad(n.databaseId,t.path)}function Tl(n,t){const e=pv(t);if(e.get(1)!==n.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new G(gv(e))}function mv(n,t){return ad(n.databaseId,t)}function QA(n){const t=pv(n);return t.length===4?_t.emptyPath():gv(t)}function uu(n){return new _t(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gv(n){return ft(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function _p(n,t,e){return{name:lu(n,t),fields:e.value.mapValue.fields}}function JA(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q(39313,{state:l})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(l,d){return l.useProto3Json?(ft(d===void 0||typeof d=="string",58123),Xt.fromBase64String(d||"")):(ft(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Xt.fromUint8Array(d||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(l){const d=l.code===void 0?F.UNKNOWN:uv(l.code);return new q(d,l.message||"")})(o);e=new hv(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Tl(n,i.document.name),r=sn(i.document.updateTime),o=i.document.createTime?sn(i.document.createTime):J.min(),a=new be({mapValue:{fields:i.document.fields}}),c=ae.newFoundDocument(s,r,o,a),l=i.targetIds||[],d=i.removedTargetIds||[];e=new ga(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Tl(n,i.document),r=i.readTime?sn(i.readTime):J.min(),o=ae.newNoDocument(s,r),a=i.removedTargetIds||[];e=new ga([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Tl(n,i.document),r=i.removedTargetIds||[];e=new ga([],r,s,null)}else{if(!("filter"in t))return Q(11601,{At:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new zA(s,r),a=i.targetId;e=new dv(a,o)}}return e}function ZA(n,t){let e;if(t instanceof lo)e={update:_p(n,t.key,t.value)};else if(t instanceof Ic)e={delete:lu(n,t.key)};else if(t instanceof _i)e={update:_p(n,t.key,t.data),updateMask:cx(t.fieldMask)};else{if(!(t instanceof BA))return Q(16599,{Rt:t.type});e={verify:lu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qa)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Q(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:XA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q(27497)})(n,t.precondition)),e}function tx(n,t){return n&&n.length>0?(ft(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?sn(s.updateTime):sn(r);return o.isEqual(J.min())&&(o=sn(r)),new LA(o,s.transformResults||[])})(e,t)))):[]}function ex(n,t){return{documents:[mv(n,t.path)]}}function nx(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=mv(n,s);const r=(function(l){if(l.length!==0)return vv(He.create(l,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(l){if(l.length!==0)return l.map((d=>(function(f){return{field:os(f.field),direction:rx(f.dir)}})(d)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=au(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(t.endAt)),{Vt:e,parent:s}}function ix(n){let t=QA(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){ft(i===1,65062);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=(function(h){const f=yv(h);return f instanceof He&&Gy(f)?f.getFilters():[f]})(e.where));let o=[];e.orderBy&&(o=(function(h){return h.map((f=>(function(y){return new zr(as(y.field),(function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(f)))})(e.orderBy));let a=null;e.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,yc(f)?null:f})(e.limit));let c=null;e.startAt&&(c=(function(h){const f=!!h.before,p=h.values||[];return new ja(p,f)})(e.startAt));let l=null;return e.endAt&&(l=(function(h){const f=!h.before,p=h.values||[];return new ja(p,f)})(e.endAt)),TA(t,s,o,r,a,"F",c,l)}function sx(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function yv(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=as(e.unaryFilter.field);return Ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=as(e.unaryFilter.field);return Ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=as(e.unaryFilter.field);return Ut.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(e.unaryFilter.field);return Ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Ut.create(as(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return He.create(e.compositeFilter.filters.map((i=>yv(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}})(e.compositeFilter.op))})(n):Q(30097,{filter:n})}function rx(n){return WA[n]}function ox(n){return GA[n]}function ax(n){return KA[n]}function os(n){return{fieldPath:n.canonicalString()}}function as(n){return Gt.fromServerFormat(n.fieldPath)}function vv(n){return n instanceof Ut?(function(e){if(e.op==="=="){if(ap(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NAN"}};if(op(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ap(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NAN"}};if(op(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(e.field),op:ox(e.op),value:e.value}}})(n):n instanceof He?(function(e){const i=e.getFilters().map((s=>vv(s)));return i.length===1?i[0]:{compositeFilter:{op:ax(e.op),filters:i}}})(n):Q(54877,{filter:n})}function cx(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function bv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wn{constructor(t,e,i,s,r=J.min(),o=J.min(),a=Xt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Wn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class lx{constructor(t){this.gt=t}}function ux(n){const t=ix({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ou(t,t.limit,"L"):t}/**
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
 */class dx{constructor(){this.Dn=new hx}addToCollectionParentIndex(t,e){return this.Dn.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(ui.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(ui.min())}updateCollectionGroup(t,e,i){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class hx{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new qt(_t.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new qt(_t.comparator)).toArray()}}/**
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
 */const wp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_v=41943040;class ve{static withCacheSize(t){return new ve(t,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(_v,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
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
 */class xs{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new xs(0)}static ur(){return new xs(-1)}}/**
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
 */const Ep="LruGarbageCollector",fx=1048576;function Tp([n,t],[e,i]){const s=it(n,e);return s===0?it(t,i):s}class px{constructor(t){this.Tr=t,this.buffer=new qt(Tp),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();Tp(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class mx{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){W(Ep,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Os(e)?W(Ep,"Ignoring IndexedDB error during garbage collection: ",e):await Ns(e)}await this.Rr(3e5)}))}}class gx{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return B.resolve(gc.ue);const i=new px(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(wp)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wp):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let i,s,r,o,a,c,l;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(t,s)))).next((h=>(i=h,a=Date.now(),this.removeTargets(t,i,e)))).next((h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(t,i)))).next((h=>(l=Date.now(),ss()<=rt.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h}))))}}function yx(n,t){return new gx(n,t)}/**
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
 */class vx{constructor(){this.changes=new Gi((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?B.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class bx{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class _x{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&xr(i.mutation,s,xe.empty(),wt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,ot()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=ot()){const s=Di();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=dr();return r.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=Di();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,ot())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=Rn();const o=Ar(),a=(function(){return Ar()})();return e.forEach(((c,l)=>{const d=i.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof _i)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),xr(d.mutation,l,d.mutation.getFieldMask(),wt.now())):o.set(l.key,xe.empty())})),this.recalculateAndSaveOverlays(t,r).next((c=>(c.forEach(((l,d)=>o.set(l,d))),e.forEach(((l,d)=>{var h;return a.set(l,new bx(d,(h=o.get(l))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(t,e){const i=Ar();let s=new Mt(((o,a)=>o-a)),r=ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((c=>{const l=e.get(c);if(l===null)return;let d=i.get(c)||xe.empty();d=a.applyToLocalView(l,d),i.set(c,d);const h=(s.get(a.batchId)||ot()).add(c);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=nv();d.forEach((f=>{if(!r.has(f)){const p=cv(e.get(f),i.get(f));p!==null&&h.set(f,p),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return B.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return(function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Qy(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):B.resolve(Di());let a=Br,c=r;return o.next((l=>B.forEach(l,((d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?B.resolve():this.remoteDocumentCache.getEntry(t,d).next((f=>{c=c.insert(d,f)}))))).next((()=>this.populateOverlays(t,l,r))).next((()=>this.computeViews(t,c,l,ot()))).next((d=>({batchId:a,changes:ev(d)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next((i=>{let s=dr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=dr();return this.indexManager.getCollectionParents(t,r).next((a=>B.forEach(a,(c=>{const l=(function(h,f){return new Ls(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,i,s).next((d=>{d.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,ae.newInvalidDocument(d)))}));let a=dr();return o.forEach(((c,l)=>{const d=r.get(c);d!==void 0&&xr(d.mutation,l,xe.empty(),wt.now()),wc(e,l)&&(a=a.insert(c,l))})),a}))}}/**
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
 */class wx{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return B.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}})(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:ux(s.bundledQuery),readTime:sn(s.readTime)}})(e)),B.resolve()}}/**
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
 */class Ex{constructor(){this.overlays=new Mt(G.comparator),this.kr=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Di();return B.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.wt(t,e,r)})),B.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),B.resolve()}getOverlaysForCollection(t,e,i){const s=Di(),r=e.length+1,o=new G(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new Mt(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>i){let d=r.get(l.largestBatchId);d===null&&(d=Di(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Di(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,d)=>a.set(l,d))),!(a.size()>=s)););return B.resolve(a)}wt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new UA(e,i));let r=this.kr.get(e);r===void 0&&(r=ot(),this.kr.set(e,r)),this.kr.set(e,r.add(i.key))}}/**
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
 */class Tx{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
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
 */class cd{constructor(){this.qr=new qt(Wt.Qr),this.$r=new qt(Wt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const i=new Wt(t,e);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new Wt(t,e))}Gr(t,e){t.forEach((i=>this.removeReference(i,e)))}zr(t){const e=new G(new _t([])),i=new Wt(e,t),s=new Wt(e,t+1),r=[];return this.$r.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new G(new _t([])),i=new Wt(e,t),s=new Wt(e,t+1);let r=ot();return this.$r.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new Wt(t,0),i=this.qr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Wt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return G.comparator(t.key,e.key)||it(t.Hr,e.Hr)}static Ur(t,e){return it(t.Hr,e.Hr)||G.comparator(t.key,e.key)}}/**
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
 */class Ix{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new qt(Wt.Qr)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $A(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new Wt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,e){return B.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Zu:this.er-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Wt(e,0),s=new Wt(e,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new qt(it);return e.forEach((s=>{const r=new Wt(s,0),o=new Wt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),B.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;G.isDocumentKey(r)||(r=r.child(""));const o=new Wt(new G(r),0);let a=new qt(it);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Hr)),!0)}),o),B.resolve(this.ei(a))}ei(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){ft(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return B.forEach(e.mutations,(s=>{const r=new Wt(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=i}))}rr(t){}containsKey(t,e){const i=new Wt(e,0),s=this.Yr.firstAfterOrEqual(i);return B.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Ax{constructor(t){this.ni=t,this.docs=(function(){return new Mt(G.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return B.resolve(i?i.document.mutableCopy():ae.newInvalidDocument(e))}getEntries(t,e){let i=Rn();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ae.newInvalidDocument(s))})),B.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=Rn();const o=e.path,a=new G(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||eA(tA(d),i)<=0||(s.has(d.key)||wc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(t,e,i,s){Q(9500)}ri(t,e){return B.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new xx(this)}getSize(t){return B.resolve(this.size)}}class xx extends vx{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(i)})),B.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class Sx{constructor(t){this.persistence=t,this.ii=new Gi((e=>nd(e)),id),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.si=0,this.oi=new cd,this.targetCount=0,this._i=xs.ar()}forEachTarget(t,e){return this.ii.forEach(((i,s)=>e(s))),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.si&&(this.si=e),B.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new xs(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.hr(e),B.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),B.waitFor(r).next((()=>s))}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const i=this.ii.get(e)||null;return B.resolve(i)}addMatchingKeys(t,e,i){return this.oi.Kr(e,i),B.resolve()}removeMatchingKeys(t,e,i){this.oi.Gr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),B.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const i=this.oi.Jr(e);return B.resolve(i)}containsKey(t,e){return B.resolve(this.oi.containsKey(e))}}/**
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
 */class wv{constructor(t,e){this.ai={},this.overlays={},this.ui=new gc(0),this.ci=!1,this.ci=!0,this.li=new Tx,this.referenceDelegate=t(this),this.hi=new Sx(this),this.indexManager=new dx,this.remoteDocumentCache=(function(s){return new Ax(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new lx(e),this.Ti=new wx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ex,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ai[t.toKey()];return i||(i=new Ix(e,this.referenceDelegate),this.ai[t.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,i){W("MemoryPersistence","Starting transaction:",t);const s=new kx(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return B.or(Object.values(this.ai).map((i=>()=>i.containsKey(t,e))))}}class kx extends iA{constructor(t){super(),this.currentSequenceNumber=t}}class ld{constructor(t){this.persistence=t,this.Ai=new cd,this.Ri=null}static Vi(t){return new ld(t)}get mi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(t,e,i){return this.Ai.addReference(i,e),this.mi.delete(i.toString()),B.resolve()}removeReference(t,e,i){return this.Ai.removeReference(i,e),this.mi.add(i.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),B.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,(i=>{const s=G.fromPath(i);return this.fi(t,s).next((r=>{r||e.removeEntry(s,J.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((i=>{i?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return B.or([()=>B.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Ga{constructor(t,e){this.persistence=t,this.gi=new Gi((i=>oA(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=yx(this,e)}static Vi(t,e){return new Ga(t,e)}Ii(){}di(t){return B.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}yr(t){let e=0;return this.gr(t,(i=>{e++})).next((()=>e))}gr(t,e){return B.forEach(this.gi,((i,s)=>this.Sr(t,i,s).next((r=>r?B.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(t,(o=>this.Sr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,J.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}removeReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=fa(t.data.value)),e}Sr(t,e,i){return B.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return B.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ud{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Is=i,this.ds=s}static Es(t,e){let i=ot(),s=ot();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ud(t,e.fromCache,i,s)}}/**
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
 */class Px{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Cx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return n0()?8:sA(ue())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ps(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ys(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Px;return this.ws(t,e,o).next((a=>{if(r.result=a,this.Rs)return this.Ss(t,e,o,a.size)}))})).next((()=>r.result))}Ss(t,e,i,s){return i.documentReadCount<this.Vs?(ss()<=rt.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",rs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(ss()<=rt.DEBUG&&W("QueryEngine","Query:",rs(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(ss()<=rt.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",rs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,nn(e))):B.resolve())}ps(t,e){if(dp(e))return B.resolve(null);let i=nn(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ou(e,null,"F"),i=nn(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=ot(...r);return this.gs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((c=>{const l=this.bs(e,a);return this.Ds(e,l,o,c.readTime)?this.ps(t,ou(e,null,"F")):this.vs(t,l,e,c)}))))})))))}ys(t,e,i,s){return dp(e)||s.isEqual(J.min())?B.resolve(null):this.gs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ds(e,o,i,s)?B.resolve(null):(ss()<=rt.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(e)),this.vs(t,o,e,ZI(s,Br)).next((a=>a)))}))}bs(t,e){let i=new qt(Zy(t));return e.forEach(((s,r)=>{wc(t,r)&&(i=i.add(r))})),i}Ds(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(t,e,i){return ss()<=rt.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",rs(e)),this.gs.getDocumentsMatchingQuery(t,e,ui.min(),i)}vs(t,e,i,s){return this.gs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const dd="LocalStore",Rx=3e8;class Mx{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new Mt(it),this.Ms=new Gi((r=>nd(r)),id),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(i)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _x(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function Dx(n,t,e,i){return new Mx(n,t,e,i)}async function Ev(n,t){const e=tt(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Ns(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let c=ot();for(const l of s){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(i,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function Nx(n,t){const e=tt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.Os.newChangeBuffer({trackRemovals:!0});return(function(a,c,l,d){const h=l.batch,f=h.keys();let p=B.resolve();return f.forEach((y=>{p=p.next((()=>d.getEntry(c,y))).next((_=>{const v=l.docVersions.get(y);ft(v!==null,48541),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),d.addEntry(_)))}))})),p.next((()=>a.mutationQueue.removeMutationBatch(c,h)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let c=ot();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function Tv(n){const t=tt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function Ox(n,t){const e=tt(n),i=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const a=[];t.targetChanges.forEach(((d,h)=>{const f=s.get(h);if(!f)return;a.push(e.hi.removeMatchingKeys(r,d.removedDocuments,h).next((()=>e.hi.addMatchingKeys(r,d.addedDocuments,h))));let p=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(Xt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(d.resumeToken,i)),s=s.insert(h,p),(function(_,v,I){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=Rx?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0})(f,p,d)&&a.push(e.hi.updateTargetData(r,p))}));let c=Rn(),l=ot();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))})),a.push(Lx(r,o,t.documentUpdates).next((d=>{c=d.Ls,l=d.ks}))),!i.isEqual(J.min())){const d=e.hi.getLastRemoteSnapshotVersion(r).next((h=>e.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(d)}return B.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,c,l))).next((()=>c))})).then((r=>(e.Fs=s,r)))}function Lx(n,t,e){let i=ot(),s=ot();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=Rn();return e.forEach(((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):W(dd,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function Vx(n,t){const e=tt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=Zu),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function Fx(n,t){const e=tt(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.hi.getTargetData(i,t).next((r=>r?(s=r,B.resolve(s)):e.hi.allocateTargetId(i).next((o=>(s=new Wn(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(i.targetId,i),e.Ms.set(t,i.targetId)),i}))}async function du(n,t,e){const i=tt(n),s=i.Fs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Os(o))throw o;W(dd,`Failed to update sequence numbers for target ${t}: ${o}`)}i.Fs=i.Fs.remove(t),i.Ms.delete(s.target)}function Ip(n,t,e){const i=tt(n);let s=J.min(),r=ot();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,d){const h=tt(c),f=h.Ms.get(d);return f!==void 0?B.resolve(h.Fs.get(f)):h.hi.getTargetData(l,d)})(i,o,nn(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{r=c}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:J.min(),e?r:ot()))).next((a=>(Bx(i,AA(t),a),{documents:a,qs:r})))))}function Bx(n,t,e){let i=n.xs.get(t)||J.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(t,i)}class Ap{constructor(){this.activeTargetIds=RA()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $x{constructor(){this.Fo=new Ap,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,i){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Ap,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ux{xo(t){}shutdown(){}}/**
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
 */const xp="ConnectivityMonitor";class Sp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(xp,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){W(xp,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qo=null;function hu(){return qo===null?qo=(function(){return 268435456+Math.round(2147483648*Math.random())})():qo++,"0x"+qo.toString(16)}/**
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
 */const Il="RestConnection",zx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jx{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===Ua?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=hu(),a=this.Go(t,e.toUriEncodedString());W(Il,`Sending RPC '${t}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,r);const{host:l}=new URL(a),d=Rs(l);return this.jo(t,a,c,i,d).then((h=>(W(Il,`Received RPC '${t}' ${o}: `,h),h)),(h=>{throw Cn(Il,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",i),h}))}Jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}zo(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ds})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Go(t,e){const i=zx[t];return`${this.$o}/v1/${e}:${i}`}terminate(){}}/**
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
 */class Hx{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const ie="WebChannelConnection";class qx extends jx{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,i,s,r){const o=hu();return new Promise(((a,c)=>{const l=new Ty;l.setWithCredentials(!0),l.listenOnce(Iy.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case ha.NO_ERROR:const h=l.getResponseJson();W(ie,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(h)),a(h);break;case ha.TIMEOUT:W(ie,`RPC '${t}' ${o} timed out`),c(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const f=l.getStatus();if(W(ie,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const _=(function(I){const P=I.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(P)>=0?P:F.UNKNOWN})(y.status);c(new q(_,y.message))}else c(new q(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new q(F.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:t,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{W(ie,`RPC '${t}' ${o} completed.`)}}));const d=JSON.stringify(s);W(ie,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",d,i,15)}))}P_(t,e,i){const s=hu(),r=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Sy(),a=xy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const d=r.join("");W(ie,`Creating RPC '${t}' stream ${s}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let f=!1,p=!1;const y=new Hx({Ho:v=>{p?W(ie,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(W(ie,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),W(ie,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},Yo:()=>h.close()}),_=(v,I,P)=>{v.listen(I,(R=>{try{P(R)}catch(N){setTimeout((()=>{throw N}),0)}}))};return _(h,ur.EventType.OPEN,(()=>{p||(W(ie,`RPC '${t}' stream ${s} transport opened.`),y.s_())})),_(h,ur.EventType.CLOSE,(()=>{p||(p=!0,W(ie,`RPC '${t}' stream ${s} transport closed`),y.__(),this.I_(h))})),_(h,ur.EventType.ERROR,(v=>{p||(p=!0,Cn(ie,`RPC '${t}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),y.__(new q(F.UNAVAILABLE,"The operation could not be completed")))})),_(h,ur.EventType.MESSAGE,(v=>{var I;if(!p){const P=v.data[0];ft(!!P,16349);const R=P,N=(R==null?void 0:R.error)||((I=R[0])===null||I===void 0?void 0:I.error);if(N){W(ie,`RPC '${t}' stream ${s} received error:`,N);const k=N.status;let V=(function(w){const A=$t[w];if(A!==void 0)return uv(A)})(k),E=N.message;V===void 0&&(V=F.INTERNAL,E="Unknown error status: "+k+" with message "+N.message),p=!0,y.__(new q(V,E)),h.close()}else W(ie,`RPC '${t}' stream ${s} received:`,P),y.a_(P)}})),_(a,Ay.STAT_EVENT,(v=>{v.stat===Zl.PROXY?W(ie,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Zl.NOPROXY&&W(ie,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{y.o_()}),0),y}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Al(){return typeof document<"u"?document:null}/**
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
 */function xc(n){return new YA(n,!0)}/**
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
 */class Iv{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Fi=t,this.timerId=e,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-i);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const kp="PersistentStream";class Av{constructor(t,e,i,s,r,o,a,c){this.Fi=t,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Iv(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===F.RESOURCE_EXHAUSTED?(Pn(e.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===e&&this.W_(i,s)}),(i=>{t((()=>{const s=new q(F.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(t,e){const i=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return W(kp,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(W(kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wx extends Av{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=JA(this.serializer,t),i=(function(r){if(!("targetChange"in r))return J.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?sn(o.readTime):J.min()})(t);return this.listener.J_(e,i)}H_(t){const e={};e.database=uu(this.serializer),e.addTarget=(function(r,o){let a;const c=o.target;if(a=su(c)?{documents:ex(r,c)}:{query:nx(r,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=fv(r,o.resumeToken);const l=au(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Wa(r,o.snapshotVersion.toTimestamp());const l=au(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,t);const i=sx(this.serializer,t);i&&(e.labels=i),this.k_(e)}Y_(t){const e={};e.database=uu(this.serializer),e.removeTarget=t,this.k_(e)}}class Gx extends Av{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return ft(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ft(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){ft(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=tx(t.writeResults,t.commitTime),i=sn(t.commitTime);return this.listener.ta(i,e)}na(){const t={};t.database=uu(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>ZA(this.serializer,i)))};this.k_(e)}}/**
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
 */class Kx{}class Yx extends Kx{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,cu(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(F.UNKNOWN,r.toString())}))}Jo(t,e,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(t,cu(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(F.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Xx{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Pn(e),this._a=!1):W("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Hi="RemoteStore";class Qx{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((o=>{i.enqueueAndForget((async()=>{Ki(this)&&(W(Hi,"Restarting streams for network reachability change."),await(async function(c){const l=tt(c);l.Ia.add(4),await ho(l),l.Aa.set("Unknown"),l.Ia.delete(4),await Sc(l)})(this))}))})),this.Aa=new Xx(i,s)}}async function Sc(n){if(Ki(n))for(const t of n.da)await t(!0)}async function ho(n){for(const t of n.da)await t(!1)}function xv(n,t){const e=tt(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),md(e)?pd(e):Vs(e).x_()&&fd(e,t))}function hd(n,t){const e=tt(n),i=Vs(e);e.Ta.delete(t),i.x_()&&Sv(e,t),e.Ta.size===0&&(i.x_()?i.B_():Ki(e)&&e.Aa.set("Unknown"))}function fd(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Vs(n).H_(t)}function Sv(n,t){n.Ra.$e(t),Vs(n).Y_(t)}function pd(n){n.Ra=new qA({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),Vs(n).start(),n.Aa.aa()}function md(n){return Ki(n)&&!Vs(n).M_()&&n.Ta.size>0}function Ki(n){return tt(n).Ia.size===0}function kv(n){n.Ra=void 0}async function Jx(n){n.Aa.set("Online")}async function Zx(n){n.Ta.forEach(((t,e)=>{fd(n,t)}))}async function tS(n,t){kv(n),md(n)?(n.Aa.la(t),pd(n)):n.Aa.set("Unknown")}async function eS(n,t,e){if(n.Aa.set("Online"),t instanceof hv&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,t)}catch(i){W(Hi,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ka(n,i)}else if(t instanceof ga?n.Ra.Ye(t):t instanceof dv?n.Ra.it(t):n.Ra.et(t),!e.isEqual(J.min()))try{const i=await Tv(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.Ra.Pt(o);return a.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ta.get(l);d&&r.Ta.set(l,d.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,l)=>{const d=r.Ta.get(c);if(!d)return;r.Ta.set(c,d.withResumeToken(Xt.EMPTY_BYTE_STRING,d.snapshotVersion)),Sv(r,c);const h=new Wn(d.target,c,l,d.sequenceNumber);fd(r,h)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){W(Hi,"Failed to raise snapshot:",i),await Ka(n,i)}}async function Ka(n,t,e){if(!Os(t))throw t;n.Ia.add(1),await ho(n),n.Aa.set("Offline"),e||(e=()=>Tv(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(Hi,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Sc(n)}))}function Pv(n,t){return t().catch((e=>Ka(n,e,t)))}async function kc(n){const t=tt(n),e=pi(t);let i=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Zu;for(;nS(t);)try{const s=await Vx(t.localStore,i);if(s===null){t.Pa.length===0&&e.B_();break}i=s.batchId,iS(t,s)}catch(s){await Ka(t,s)}Cv(t)&&Rv(t)}function nS(n){return Ki(n)&&n.Pa.length<10}function iS(n,t){n.Pa.push(t);const e=pi(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function Cv(n){return Ki(n)&&!pi(n).M_()&&n.Pa.length>0}function Rv(n){pi(n).start()}async function sS(n){pi(n).na()}async function rS(n){const t=pi(n);for(const e of n.Pa)t.X_(e.mutations)}async function oS(n,t,e){const i=n.Pa.shift(),s=rd.from(i,t,e);await Pv(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await kc(n)}async function aS(n,t){t&&pi(n).Z_&&await(async function(i,s){if((function(o){return jA(o)&&o!==F.ABORTED})(s.code)){const r=i.Pa.shift();pi(i).N_(),await Pv(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await kc(i)}})(n,t),Cv(n)&&Rv(n)}async function Pp(n,t){const e=tt(n);e.asyncQueue.verifyOperationInProgress(),W(Hi,"RemoteStore received new credentials");const i=Ki(e);e.Ia.add(3),await ho(e),i&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Sc(e)}async function cS(n,t){const e=tt(n);t?(e.Ia.delete(2),await Sc(e)):t||(e.Ia.add(2),await ho(e),e.Aa.set("Unknown"))}function Vs(n){return n.Va||(n.Va=(function(e,i,s){const r=tt(e);return r.ia(),new Wx(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Jx.bind(null,n),e_:Zx.bind(null,n),n_:tS.bind(null,n),J_:eS.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),md(n)?pd(n):n.Aa.set("Unknown")):(await n.Va.stop(),kv(n))}))),n.Va}function pi(n){return n.ma||(n.ma=(function(e,i,s){const r=tt(e);return r.ia(),new Gx(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:sS.bind(null,n),n_:aS.bind(null,n),ea:rS.bind(null,n),ta:oS.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await kc(n)):(await n.ma.stop(),n.Pa.length>0&&(W(Hi,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class gd{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new gd(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yd(n,t){if(Pn("AsyncQueue",`${t}: ${n}`),Os(n))return new q(F.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class ys{static emptySet(t){return new ys(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||G.comparator(e.key,i.key):(e,i)=>G.comparator(e.key,i.key),this.keyedMap=dr(),this.sortedSet=new Mt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ys)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new ys;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
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
 */class Cp{constructor(){this.fa=new Mt(G.comparator)}track(t){const e=t.doc.key,i=this.fa.get(e);i?t.type!==0&&i.type===3?this.fa=this.fa.insert(e,t):t.type===3&&i.type!==1?this.fa=this.fa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.fa=this.fa.remove(e):t.type===1&&i.type===2?this.fa=this.fa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):Q(63341,{At:t,ga:i}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,i)=>{t.push(i)})),t}}class Ss{constructor(t,e,i,s,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new Ss(t,e,ys.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_c(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class lS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class uS{constructor(){this.queries=Rp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,i){const s=tt(e),r=s.queries;s.queries=Rp(),r.forEach(((o,a)=>{for(const c of a.wa)c.onError(i)}))})(this,new q(F.ABORTED,"Firestore shutting down"))}}function Rp(){return new Gi((n=>Jy(n)),_c)}async function vd(n,t){const e=tt(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.ba()&&(i=2):(r=new lS,i=t.ba()?0:1);try{switch(i){case 0:r.ya=await e.onListen(s,!0);break;case 1:r.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=yd(o,`Initialization of query '${rs(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.wa.push(t),t.va(e.onlineState),r.ya&&t.Ca(r.ya)&&_d(e)}async function bd(n,t){const e=tt(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.wa.indexOf(t);o>=0&&(r.wa.splice(o,1),r.wa.length===0?s=t.ba()?0:1:!r.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function dS(n,t){const e=tt(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.wa)a.Ca(s)&&(i=!0);o.ya=s}}i&&_d(e)}function hS(n,t,e){const i=tt(n),s=i.queries.get(t);if(s)for(const r of s.wa)r.onError(e);i.queries.delete(t)}function _d(n){n.Da.forEach((t=>{t.next()}))}var fu,Mp;(Mp=fu||(fu={})).Fa="default",Mp.Cache="cache";class wd{constructor(t,e,i){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Ss(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const i=e!=="Offline";return(!this.options.ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Ss.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==fu.Cache}}/**
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
 */class Mv{constructor(t){this.key=t}}class Dv{constructor(t){this.key=t}}class fS{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ot(),this.mutatedKeys=ot(),this.Xa=Zy(t),this.eu=new ys(this.Xa)}get tu(){return this.Ha}nu(t,e){const i=e?e.ru:new Cp,s=e?e.eu:this.eu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,h)=>{const f=s.get(d),p=wc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?y!==_&&(i.track({type:3,doc:p}),v=!0):this.iu(f,p)||(i.track({type:2,doc:p}),v=!0,(c&&this.Xa(p,c)>0||l&&this.Xa(p,l)<0)&&(a=!0)):!f&&p?(i.track({type:0,doc:p}),v=!0):f&&!p&&(i.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),r=_?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{eu:o,ru:i,Ds:a,mutatedKeys:r}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const o=t.ru.pa();o.sort(((d,h)=>(function(p,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{At:v})}};return _(p)-_(y)})(d.type,h.type)||this.Xa(d.doc,h.doc))),this.su(i),s=s!=null&&s;const a=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new Ss(this.query,t.eu,r,o,t.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Cp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=ot(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const e=[];return t.forEach((i=>{this.Za.has(i)||e.push(new Dv(i))})),this.Za.forEach((i=>{t.has(i)||e.push(new Mv(i))})),e}uu(t){this.Ha=t.qs,this.Za=ot();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Ss.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ed="SyncEngine";class pS{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class mS{constructor(t){this.key=t,this.lu=!1}}class gS{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Gi((a=>Jy(a)),_c),this.Tu=new Map,this.Iu=new Set,this.du=new Mt(G.comparator),this.Eu=new Map,this.Au=new cd,this.Ru={},this.Vu=new Map,this.mu=xs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function yS(n,t,e=!0){const i=Bv(n);let s;const r=i.Pu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await Nv(i,t,e,!0),s}async function vS(n,t){const e=Bv(n);await Nv(e,t,!0,!1)}async function Nv(n,t,e,i){const s=await Fx(n.localStore,nn(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await bS(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&xv(n.remoteStore,s),a}async function bS(n,t,e,i,s){n.gu=(h,f,p)=>(async function(_,v,I,P){let R=v.view.nu(I);R.Ds&&(R=await Ip(_.localStore,v.query,!1).then((({documents:E})=>v.view.nu(E,R))));const N=P&&P.targetChanges.get(v.targetId),k=P&&P.targetMismatches.get(v.targetId)!=null,V=v.view.applyChanges(R,_.isPrimaryClient,N,k);return Np(_,v.targetId,V._u),V.snapshot})(n,h,f,p);const r=await Ip(n.localStore,t,!0),o=new fS(t,r.qs),a=o.nu(r.documents),c=uo.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Np(n,e,l._u);const d=new pS(t,e,o);return n.Pu.set(t,d),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),l.snapshot}async function _S(n,t,e){const i=tt(n),s=i.Pu.get(t),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((o=>!_c(o,t)))),void i.Pu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await du(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&hd(i.remoteStore,s.targetId),pu(i,s.targetId)})).catch(Ns)):(pu(i,s.targetId),await du(i.localStore,s.targetId,!0))}async function wS(n,t){const e=tt(n),i=e.Pu.get(t),s=e.Tu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),hd(e.remoteStore,i.targetId))}async function ES(n,t,e){const i=PS(n);try{const s=await(function(o,a){const c=tt(o),l=wt.now(),d=a.reduce(((p,y)=>p.add(y.key)),ot());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(p=>{let y=Rn(),_=ot();return c.Os.getEntries(p,d).next((v=>{y=v,y.forEach(((I,P)=>{P.isValidDocument()||(_=_.add(I))}))})).next((()=>c.localDocuments.getOverlayedDocuments(p,y))).next((v=>{h=v;const I=[];for(const P of a){const R=FA(P,h.get(P.key).overlayedDocument);R!=null&&I.push(new _i(P.key,R,Hy(R.value.mapValue),ge.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,I,a)})).next((v=>{f=v;const I=v.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(p,v.batchId,I)}))})).then((()=>({batchId:f.batchId,changes:ev(h)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new Mt(it)),l=l.insert(a,c),o.Ru[o.currentUser.toKey()]=l})(i,s.batchId,e),await fo(i,s.changes),await kc(i.remoteStore)}catch(s){const r=yd(s,"Failed to persist write");e.reject(r)}}async function Ov(n,t){const e=tt(n);try{const i=await Ox(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Eu.get(r);o&&(ft(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ft(o.lu,14607):s.removedDocuments.size>0&&(ft(o.lu,42227),o.lu=!1))})),await fo(e,i,t)}catch(i){await Ns(i)}}function Dp(n,t,e){const i=tt(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Pu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const c=tt(o);c.onlineState=a;let l=!1;c.queries.forEach(((d,h)=>{for(const f of h.wa)f.va(a)&&(l=!0)})),l&&_d(c)})(i.eventManager,t),s.length&&i.hu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function TS(n,t,e){const i=tt(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),r=s&&s.key;if(r){let o=new Mt(G.comparator);o=o.insert(r,ae.newNoDocument(r,J.min()));const a=ot().add(r),c=new Ac(J.min(),new Map,new Mt(it),o,a);await Ov(i,c),i.du=i.du.remove(r),i.Eu.delete(t),Td(i)}else await du(i.localStore,t,!1).then((()=>pu(i,t,e))).catch(Ns)}async function IS(n,t){const e=tt(n),i=t.batch.batchId;try{const s=await Nx(e.localStore,t);Vv(e,i,null),Lv(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await fo(e,s)}catch(s){await Ns(s)}}async function AS(n,t,e){const i=tt(n);try{const s=await(function(o,a){const c=tt(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next((h=>(ft(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>c.localDocuments.getDocuments(l,d)))}))})(i.localStore,t);Vv(i,t,e),Lv(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await fo(i,s)}catch(s){await Ns(s)}}function Lv(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function Vv(n,t,e){const i=tt(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Ru[i.currentUser.toKey()]=s}}function pu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Tu.get(t))n.Pu.delete(i),e&&n.hu.pu(i,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((i=>{n.Au.containsKey(i)||Fv(n,i)}))}function Fv(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(hd(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Td(n))}function Np(n,t,e){for(const i of e)i instanceof Mv?(n.Au.addReference(i.key,t),xS(n,i)):i instanceof Dv?(W(Ed,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,t),n.Au.containsKey(i.key)||Fv(n,i.key)):Q(19791,{yu:i})}function xS(n,t){const e=t.key,i=e.path.canonicalString();n.du.get(e)||n.Iu.has(i)||(W(Ed,"New document in limbo: "+e),n.Iu.add(i),Td(n))}function Td(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new G(_t.fromString(t)),i=n.mu.next();n.Eu.set(i,new mS(e)),n.du=n.du.insert(e,i),xv(n.remoteStore,new Wn(nn(bc(e.path)),i,"TargetPurposeLimboResolution",gc.ue))}}async function fo(n,t,e){const i=tt(n),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach(((a,c)=>{o.push(i.gu(c,t,e).then((l=>{var d;if((l||e)&&i.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){s.push(l);const h=ud.Es(c.targetId,l);r.push(h)}})))})),await Promise.all(o),i.hu.J_(s),await(async function(c,l){const d=tt(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>B.forEach(l,(f=>B.forEach(f.Is,(p=>d.persistence.referenceDelegate.addReference(h,f.targetId,p))).next((()=>B.forEach(f.ds,(p=>d.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))))))}catch(h){if(!Os(h))throw h;W(dd,"Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=d.Fs.get(f),y=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(y);d.Fs=d.Fs.insert(f,_)}}})(i.localStore,r))}async function SS(n,t){const e=tt(n);if(!e.currentUser.isEqual(t)){W(Ed,"User change. New user:",t.toKey());const i=await Ev(e.localStore,t);e.currentUser=t,(function(r,o){r.Vu.forEach((a=>{a.forEach((c=>{c.reject(new q(F.CANCELLED,o))}))})),r.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await fo(e,i.Bs)}}function kS(n,t){const e=tt(n),i=e.Eu.get(t);if(i&&i.lu)return ot().add(i.key);{let s=ot();const r=e.Tu.get(t);if(!r)return s;for(const o of r){const a=e.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function Bv(n){const t=tt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ov.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=kS.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=TS.bind(null,t),t.hu.J_=dS.bind(null,t.eventManager),t.hu.pu=hS.bind(null,t.eventManager),t}function PS(n){const t=tt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=IS.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=AS.bind(null,t),t}class Ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xc(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Dx(this.persistence,new Cx,t.initialUser,this.serializer)}Du(t){return new wv(ld.Vi,this.serializer)}bu(t){return new $x}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ya.provider={build:()=>new Ya};class CS extends Ya{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){ft(this.persistence.referenceDelegate instanceof Ga,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new mx(i,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new wv((i=>Ga.Vi(i,e)),this.serializer)}}class mu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Dp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=SS.bind(null,this.syncEngine),await cS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new uS})()}createDatastore(t){const e=xc(t.databaseInfo.databaseId),i=(function(r){return new qx(r)})(t.databaseInfo);return(function(r,o,a,c){return new Yx(r,o,a,c)})(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new Qx(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>Dp(this.syncEngine,e,0)),(function(){return Sp.C()?new Sp:new Ux})())}createSyncEngine(t,e){return(function(s,r,o,a,c,l,d){const h=new gS(s,r,o,a,c,l);return d&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=tt(s);W(Hi,"RemoteStore shutting down."),r.Ia.add(5),await ho(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}mu.provider={build:()=>new mu};/**
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
 */class Id{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Pn("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const mi="FirestoreClient";class RS{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=re.UNAUTHENTICATED,this.clientId=pc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{W(mi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(W(mi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=yd(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function xl(n,t){n.asyncQueue.verifyOperationInProgress(),W(mi,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Ev(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>{Cn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Cn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function Op(n,t){n.asyncQueue.verifyOperationInProgress();const e=await MS(n);W(mi,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>Pp(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Pp(t.remoteStore,s))),n._onlineComponents=t}async function MS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(mi,"Using user provided OfflineComponentProvider");try{await xl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Cn("Error using user provided cache. Falling back to memory cache: "+e),await xl(n,new Ya)}}else W(mi,"Using default OfflineComponentProvider"),await xl(n,new CS(void 0));return n._offlineComponents}async function $v(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(mi,"Using user provided OnlineComponentProvider"),await Op(n,n._uninitializedComponentsProvider._online)):(W(mi,"Using default OnlineComponentProvider"),await Op(n,new mu))),n._onlineComponents}function DS(n){return $v(n).then((t=>t.syncEngine))}async function Xa(n){const t=await $v(n),e=t.eventManager;return e.onListen=yS.bind(null,t.syncEngine),e.onUnlisten=_S.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vS.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=wS.bind(null,t.syncEngine),e}function NS(n,t,e={}){const i=new In;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Id({next:f=>{d.Ou(),o.enqueueAndForget((()=>bd(r,h)));const p=f.docs.has(a);!p&&f.fromCache?l.reject(new q(F.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&c&&c.source==="server"?l.reject(new q(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new wd(bc(a.path),d,{includeMetadataChanges:!0,ka:!0});return vd(r,h)})(await Xa(n),n.asyncQueue,t,e,i))),i.promise}function OS(n,t,e={}){const i=new In;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Id({next:f=>{d.Ou(),o.enqueueAndForget((()=>bd(r,h))),f.fromCache&&c.source==="server"?l.reject(new q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new wd(a,d,{includeMetadataChanges:!0,ka:!0});return vd(r,h)})(await Xa(n),n.asyncQueue,t,e,i))),i.promise}/**
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
 */function Uv(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Lp=new Map;/**
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
 */const zv="firestore.googleapis.com",Vp=!0;class Fp{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zv,this.ssl=Vp}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Vp;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=_v;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<fx)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Dy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uv((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Pc{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fp(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Cy;switch(i.type){case"firstParty":return new KI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=Lp.get(e);i&&(W("ComponentProvider","Removing Datastore"),Lp.delete(e),i.terminate())})(this),Promise.resolve()}}function jv(n,t,e,i={}){var s;n=le(n,Pc);const r=Rs(t),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;r&&(Mg(`https://${c}`),Dg("Firestore",!0)),o.host!==zv&&o.host!==c&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!Fi(l,a)&&(n._setSettings(l),i.mockUserToken)){let d,h;if(typeof i.mockUserToken=="string")d=i.mockUserToken,h=re.MOCK_USER;else{d=Gw(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new re(f)}n._authCredentials=new qI(new Py(d,h))}}/**
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
 */class Ln{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Ln(this.firestore,t,this._query)}}class Rt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(co(e,Rt._jsonSchema))return new Rt(t,i||null,new G(_t.fromString(e.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:zt("string",Rt._jsonSchemaVersion),referencePath:zt("string")};class An extends Ln{constructor(t,e,i){super(t,e,bc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new G(t))}withConverter(t){return new An(this.firestore,t,this._path)}}function Ft(n,t,...e){if(n=Et(n),My("collection","path",t),n instanceof Pc){const i=_t.fromString(t,...e);return Qf(i),new An(n,null,i)}{if(!(n instanceof Rt||n instanceof An))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(_t.fromString(t,...e));return Qf(i),new An(n.firestore,null,i)}}function gt(n,t,...e){if(n=Et(n),arguments.length===1&&(t=pc.newId()),My("doc","path",t),n instanceof Pc){const i=_t.fromString(t,...e);return Xf(i),new Rt(n,null,new G(i))}{if(!(n instanceof Rt||n instanceof An))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(_t.fromString(t,...e));return Xf(i),new Rt(n.firestore,n instanceof An?n.converter:null,new G(i))}}/**
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
 */const Bp="AsyncQueue";class $p{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Iv(this,"async_queue_retry"),this.oc=()=>{const i=Al();i&&W(Bp,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=t;const e=Al();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Al();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new In;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Os(t))throw t;W(Bp,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((i=>{throw this.tc=i,this.nc=!1,Pn("INTERNAL UNHANDLED ERROR: ",Up(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=e,e}enqueueAfterDelay(t,e,i){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=gd.createAndSchedule(this,t,e,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&Q(47125,{hc:Up(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Up(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function zp(n){return(function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class qe extends Pc{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new $p,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $p(t),this._firestoreClient=void 0,await t}}}function Ad(n,t){const e=typeof n=="object"?n:Uu(),i=typeof n=="string"?n:Ua,s=$u(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=qw("firestore");r&&jv(s,...r)}return s}function Fs(n){if(n._terminated)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LS(n),n._firestoreClient}function LS(n){var t,e,i;const s=n._freezeSettings(),r=(function(a,c,l,d){return new lA(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Uv(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new RS(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class Ae{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ae(Xt.fromBase64String(t))}catch(e){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ae(Xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ae._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(co(t,Ae._jsonSchema))return Ae.fromBase64String(t.bytes)}}Ae._jsonSchemaVersion="firestore/bytes/1.0",Ae._jsonSchema={type:zt("string",Ae._jsonSchemaVersion),bytes:zt("string")};/**
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
 */class Bs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Cc{constructor(t){this._methodName=t}}/**
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
 */class $e{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return it(this._lat,t._lat)||it(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(t){if(co(t,$e._jsonSchema))return new $e(t.latitude,t.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:zt("string",$e._jsonSchemaVersion),latitude:zt("number"),longitude:zt("number")};/**
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
 */class Ue{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(co(t,Ue._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ue(t.vectorValues);throw new q(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ue._jsonSchemaVersion="firestore/vectorValue/1.0",Ue._jsonSchema={type:zt("string",Ue._jsonSchemaVersion),vectorValues:zt("object")};/**
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
 */const VS=/^__.*__$/;class FS{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new _i(t,this.data,this.fieldMask,e,this.fieldTransforms):new lo(t,this.data,e,this.fieldTransforms)}}class Hv{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new _i(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function qv(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ec:n})}}class xd{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new xd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.fc(t),s}gc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Qa(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(qv(this.Ec)&&VS.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class BS{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||xc(t)}Dc(t,e,i,s=!1){return new xd({Ec:t,methodName:e,bc:i,path:Gt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function po(n){const t=n._freezeSettings(),e=xc(n._databaseId);return new BS(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Sd(n,t,e,i,s,r={}){const o=n.Dc(r.merge||r.mergeFields?2:0,t,e,s);kd("Data must be an object, but it was:",o,i);const a=Kv(i,o);let c,l;if(r.merge)c=new xe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=gu(t,h,e);if(!o.contains(f))throw new q(F.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Xv(d,f)||d.push(f)}c=new xe(d),l=o.fieldTransforms.filter((h=>c.covers(h.field)))}else c=null,l=o.fieldTransforms;return new FS(new be(a),c,l)}class Rc extends Cc{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Rc}}function Wv(n,t,e,i){const s=n.Dc(1,t,e);kd("Data must be an object, but it was:",s,i);const r=[],o=be.empty();bi(i,((c,l)=>{const d=Pd(t,c,e);l=Et(l);const h=s.gc(d);if(l instanceof Rc)r.push(d);else{const f=mo(l,h);f!=null&&(r.push(d),o.set(d,f))}}));const a=new xe(r);return new Hv(o,a,s.fieldTransforms)}function Gv(n,t,e,i,s,r){const o=n.Dc(1,t,e),a=[gu(t,i,e)],c=[s];if(r.length%2!=0)throw new q(F.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(gu(t,r[f])),c.push(r[f+1]);const l=[],d=be.empty();for(let f=a.length-1;f>=0;--f)if(!Xv(l,a[f])){const p=a[f];let y=c[f];y=Et(y);const _=o.gc(p);if(y instanceof Rc)l.push(p);else{const v=mo(y,_);v!=null&&(l.push(p),d.set(p,v))}}const h=new xe(l);return new Hv(d,h,o.fieldTransforms)}function $S(n,t,e,i=!1){return mo(e,n.Dc(i?4:3,t))}function mo(n,t){if(Yv(n=Et(n)))return kd("Unsupported field value:",t,n),Kv(n,t);if(n instanceof Cc)return(function(i,s){if(!qv(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let c=mo(a,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=Et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return MA(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=wt.fromDate(i);return{timestampValue:Wa(s.serializer,r)}}if(i instanceof wt){const r=new wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Wa(s.serializer,r)}}if(i instanceof $e)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ae)return{bytesValue:fv(s.serializer,i._byteString)};if(i instanceof Rt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ad(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ue)return(function(o,a){return{mapValue:{fields:{[zy]:{stringValue:jy},[za]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.wc("VectorValues must only contain numeric values.");return sd(a.serializer,l)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${mc(i)}`)})(n,t)}function Kv(n,t){const e={};return Ly(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bi(n,((i,s)=>{const r=mo(s,t.Vc(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function Yv(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof wt||n instanceof $e||n instanceof Ae||n instanceof Rt||n instanceof Cc||n instanceof Ue)}function kd(n,t,e){if(!Yv(e)||!Ny(e)){const i=mc(e);throw i==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+i)}}function gu(n,t,e){if((t=Et(t))instanceof Bs)return t._internalPath;if(typeof t=="string")return Pd(n,t);throw Qa("Field path arguments must be of type string or ",n,!1,void 0,e)}const US=new RegExp("[~\\*/\\[\\]]");function Pd(n,t,e){if(t.search(US)>=0)throw Qa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Bs(...t.split("."))._internalPath}catch{throw Qa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qa(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new q(F.INVALID_ARGUMENT,a+n+c)}function Xv(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class Qv{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Cd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class zS extends Qv{data(){return super.data()}}function Cd(n,t){return typeof t=="string"?Pd(n,t):t instanceof Bs?t._internalPath:t._delegate._internalPath}/**
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
 */function Jv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rd{}class Md extends Rd{}function $s(n,t,...e){let i=[];t instanceof Rd&&i.push(t),i=i.concat(e),(function(r){const o=r.filter((c=>c instanceof Dc)).length,a=r.filter((c=>c instanceof Mc)).length;if(o>1||o>0&&a>0)throw new q(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class Mc extends Md{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new Mc(t,e,i)}_apply(t){const e=this._parse(t);return Zv(t._query,e),new Ln(t.firestore,t.converter,ru(t._query,e))}_parse(t){const e=po(t.firestore);return(function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Hp(h,d);const y=[];for(const _ of h)y.push(jp(c,r,_));f={arrayValue:{values:y}}}else f=jp(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Hp(h,d),f=$S(a,o,h,d==="in"||d==="not-in");return Ut.create(l,d,f)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Dc extends Rd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Dc(t,e)}_parse(t){const e=this._queryConstraints.map((i=>i._parse(t))).filter((i=>i.getFilters().length>0));return e.length===1?e[0]:He.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,r){let o=s;const a=r.getFlattenedFilters();for(const c of a)Zv(o,c),o=ru(o,c)})(t._query,e),new Ln(t.firestore,t.converter,ru(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nc extends Md{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Nc(t,e)}_apply(t){const e=(function(s,r,o){if(s.startAt!==null)throw new q(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zr(r,o)})(t._query,this._field,this._direction);return new Ln(t.firestore,t.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new Ls(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Us(n,t="asc"){const e=t,i=Cd("orderBy",n);return Nc._create(i,e)}function jp(n,t,e){if(typeof(e=Et(e))=="string"){if(e==="")throw new q(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qy(t)&&e.indexOf("/")!==-1)throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(_t.fromString(e));if(!G.isDocumentKey(i))throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return rp(n,new G(i))}if(e instanceof Rt)return rp(n,e._key);throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(e)}.`)}function Hp(n,t){if(!Array.isArray(n)||n.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Zv(n,t){const e=(function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class tb{convertValue(t,e="none"){switch(fi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(hi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return bi(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var e,i,s;const r=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[za].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((o=>Vt(o.doubleValue)));return new Ue(r)}convertGeoPoint(t){return new $e(Vt(t.latitude),Vt(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=vc(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp($r(t));default:return null}}convertTimestamp(t){const e=di(t);return new wt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=_t.fromString(t);ft(bv(i),9688,{name:t});const s=new Ts(i.get(1),i.get(3)),r=new G(i.popFirst(5));return s.isEqual(e)||Pn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */function Dd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class ls{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ii extends Qv{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Cd("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ii._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ii._jsonSchemaVersion="firestore/documentSnapshot/1.0",ii._jsonSchema={type:zt("string",ii._jsonSchemaVersion),bundleSource:zt("string","DocumentSnapshot"),bundleName:zt("string"),bundle:zt("string")};class Sr extends ii{data(t={}){return super.data(t)}}class si{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ls(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new Sr(this._firestore,this._userDataWriter,i.key,i,new ls(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const c=new Sr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ls(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const c=new Sr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ls(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:jS(a.type),doc:c,oldIndex:l,newIndex:d}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=si._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=pc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function jS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
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
 */function Nd(n){n=le(n,Rt);const t=le(n.firestore,qe);return NS(Fs(t),n._key).then((e=>eb(t,n,e)))}si._jsonSchemaVersion="firestore/querySnapshot/1.0",si._jsonSchema={type:zt("string",si._jsonSchemaVersion),bundleSource:zt("string","QuerySnapshot"),bundleName:zt("string"),bundle:zt("string")};class Od extends tb{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ae(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function ri(n){n=le(n,Ln);const t=le(n.firestore,qe),e=Fs(t),i=new Od(t);return Jv(n._query),OS(e,n._query).then((s=>new si(t,i,n,s)))}function Ld(n,t,e){n=le(n,Rt);const i=le(n.firestore,qe),s=Dd(n.converter,t,e);return zs(i,[Sd(po(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ge.none())])}function ke(n,t,e,...i){n=le(n,Rt);const s=le(n.firestore,qe),r=po(s);let o;return o=typeof(t=Et(t))=="string"||t instanceof Bs?Gv(r,"updateDoc",n._key,t,e,i):Wv(r,"updateDoc",n._key,t),zs(s,[o.toMutation(n._key,ge.exists(!0))])}function Oc(n){return zs(le(n.firestore,qe),[new Ic(n._key,ge.none())])}function oi(n,t){const e=le(n.firestore,qe),i=gt(n),s=Dd(n.converter,t);return zs(e,[Sd(po(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,ge.exists(!1))]).then((()=>i))}function Lc(n,...t){var e,i,s;n=Et(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||zp(t[o])||(r=t[o++]);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(zp(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,d;if(n instanceof Rt)l=le(n.firestore,qe),d=bc(n._key.path),c={next:h=>{t[o]&&t[o](eb(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=le(n,Ln);l=le(h.firestore,qe),d=h._query;const f=new Od(l);c={next:p=>{t[o]&&t[o](new si(l,f,h,p))},error:t[o+1],complete:t[o+2]},Jv(n._query)}return(function(f,p,y,_){const v=new Id(_),I=new wd(p,v,y);return f.asyncQueue.enqueueAndForget((async()=>vd(await Xa(f),I))),()=>{v.Ou(),f.asyncQueue.enqueueAndForget((async()=>bd(await Xa(f),I)))}})(Fs(l),d,a,c)}function zs(n,t){return(function(i,s){const r=new In;return i.asyncQueue.enqueueAndForget((async()=>ES(await DS(i),s,r))),r.promise})(Fs(n),t)}function eb(n,t,e){const i=e.docs.get(t._key),s=new Od(n);return new ii(n,s,t._key,i,new ls(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class nb{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=po(t)}set(t,e,i){this._verifyNotCommitted();const s=Sl(t,this._firestore),r=Dd(s.converter,e,i),o=Sd(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,ge.none())),this}update(t,e,i,...s){this._verifyNotCommitted();const r=Sl(t,this._firestore);let o;return o=typeof(e=Et(e))=="string"||e instanceof Bs?Gv(this._dataReader,"WriteBatch.update",r._key,e,i,s):Wv(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(o.toMutation(r._key,ge.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Sl(t,this._firestore);return this._mutations=this._mutations.concat(new Ic(e._key,ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sl(n,t){if((n=Et(n)).firestore!==t)throw new q(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function us(n){return Fs(n=le(n,qe)),new nb(n,(t=>zs(n,t)))}(function(t,e=!0){(function(s){Ds=s})(Ms),ws(new Bi("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new qe(new WI(i.getProvider("auth-internal")),new YI(o,i.getProvider("app-check-internal")),(function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(l.options.projectId,d)})(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),ei(qf,Wf,t),ei(qf,Wf,"esm2017")})();const HS=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:tb,Bytes:Ae,CollectionReference:An,DocumentReference:Rt,DocumentSnapshot:ii,FieldPath:Bs,FieldValue:Cc,Firestore:qe,FirestoreError:q,GeoPoint:$e,Query:Ln,QueryCompositeFilterConstraint:Dc,QueryConstraint:Md,QueryDocumentSnapshot:Sr,QueryFieldFilterConstraint:Mc,QueryOrderByConstraint:Nc,QuerySnapshot:si,SnapshotMetadata:ls,Timestamp:wt,VectorValue:Ue,WriteBatch:nb,_AutoId:pc,_ByteString:Xt,_DatabaseId:Ts,_DocumentKey:G,_EmptyAuthCredentialsProvider:Cy,_FieldPath:Gt,_cast:le,_logWarn:Cn,_validateIsNotUsedTogether:Dy,addDoc:oi,collection:Ft,connectFirestoreEmulator:jv,deleteDoc:Oc,doc:gt,ensureFirestoreConfigured:Fs,executeWrite:zs,getDoc:Nd,getDocs:ri,getFirestore:Ad,onSnapshot:Lc,orderBy:Us,query:$s,setDoc:Ld,updateDoc:ke,writeBatch:us},Symbol.toStringTag,{value:"Module"})),At={},yu={apiKey:(At==null?void 0:At.VITE_FIREBASE_API_KEY)||"AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",authDomain:(At==null?void 0:At.VITE_FIREBASE_AUTH_DOMAIN)||"money-control-e6af5.firebaseapp.com",databaseURL:(At==null?void 0:At.VITE_FIREBASE_DATABASE_URL)||"https://money-control-e6af5-default-rtdb.firebaseio.com",projectId:(At==null?void 0:At.VITE_FIREBASE_PROJECT_ID)||"money-control-e6af5",storageBucket:(At==null?void 0:At.VITE_FIREBASE_STORAGE_BUCKET)||"money-control-e6af5.firebasestorage.app",messagingSenderId:(At==null?void 0:At.VITE_FIREBASE_MESSAGING_SENDER_ID)||"490577558965",appId:(At==null?void 0:At.VITE_FIREBASE_APP_ID)||"1:490577558965:web:09275a065a09844f1eadfc",measurementId:(At==null?void 0:At.VITE_FIREBASE_MEASUREMENT_ID)||"G-JTLBM89W1W"};function ib(){const t=["apiKey","authDomain","projectId","appId"].filter(e=>!yu[e]||String(yu[e]).includes("YOUR_"));return t.length>0?(console.error("⚠️ Firebase configuration is incomplete. Missing fields:",t.join(", ")),{isValid:!1,missing:t}):{isValid:!0,missing:[]}}const Vd=uE().length===0?Lg(yu):Uu(),cn=UI(Vd);try{xT(cn,fy).catch(n=>{console.warn("browserLocalPersistence warning:",n)})}catch(n){console.warn("setPersistence warning:",n)}const Ne=Ad(Vd);function Fd(){return Ne||Ad(Vd)}function U(n){return n==null||isNaN(n)?"₹0":`₹${Number(n).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:0})}`}function an(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function qS(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):""}function Ja(n){if(!n)return"";let t;if(n instanceof Date)t=n;else if(n&&typeof n.toDate=="function")t=n.toDate();else if(n&&typeof n=="object"&&n.seconds!==void 0)t=new Date(n.seconds*1e3);else if(typeof n=="number")t=new Date(n);else if(typeof n=="string"){const o=n.trim();if(/^\d{1,2}:\d{2}\s*(AM|PM)$/i.test(o))return o.toUpperCase();t=new Date(o)}else t=new Date(n);if(!t||isNaN(t.getTime()))return"";let e=t.getHours();const i=t.getMinutes(),s=e>=12?"PM":"AM";e=e%12,e=e||12;const r=String(i).padStart(2,"0");return`${e}:${r} ${s}`}function sb(n){if(!n)return"Time unavailable";const t=n.createdAt||n.timestamp||n.time;if(!t)return"Time unavailable";if(typeof t=="string"&&/^\d{1,2}:\d{2}(:\d{2})?$/.test(t.trim())){const i=n.date||Vn(),s=new Date(`${i}T${t.trim()}`);if(!isNaN(s.getTime()))return Ja(s)||"Time unavailable"}return Ja(t)||"Time unavailable"}function WS(){const n=new Date().getHours();return n<12?"Good Morning":n<17?"Good Afternoon":"Good Evening"}function Vn(){const n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${i}`}function rb(){return`📅 Today — ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`}function GS(n){const t=Vn(),e=new Date;e.setDate(e.getDate()-1);const i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n===t?"Today":n===i?"Yesterday":an(n)}function KS(){return new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function ob(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function YS(n){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n]}function ab(n){const t=new Date(n+"T00:00:00"),e=t.getDay(),i=new Date(t);i.setDate(t.getDate()-e);const s=new Date(i);return s.setDate(i.getDate()+6),{start:i.toISOString().split("T")[0],end:s.toISOString().split("T")[0]}}function me(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}const js=[{value:"Food",label:"🍔 Food",emoji:"🍔"},{value:"Travel",label:"🚌 Travel",emoji:"🚌"},{value:"Recharge",label:"📱 Recharge",emoji:"📱"},{value:"Shopping",label:"🛍️ Shopping",emoji:"🛍️"},{value:"Entertainment",label:"🎮 Entertainment",emoji:"🎮"},{value:"Education",label:"📚 Education",emoji:"📚"},{value:"Software",label:"💻 Software",emoji:"💻"},{value:"Personal",label:"🏠 Personal",emoji:"🏠"},{value:"Other",label:"💊 Other",emoji:"💊"}],Vc=[{value:"Pocket Money",label:"💰 Pocket Money",emoji:"💰"},{value:"Salary",label:"💼 Salary",emoji:"💼"},{value:"Gift",label:"🎁 Gift",emoji:"🎁"},{value:"Freelance",label:"💻 Freelance",emoji:"💻"},{value:"Refund",label:"🔄 Refund",emoji:"🔄"},{value:"Scholarship",label:"🎓 Scholarship",emoji:"🎓"},{value:"Other",label:"💵 Other",emoji:"💵"}];function Fc(n){const t=js.find(e=>e.value===n);return t?t.emoji:"💰"}const XS=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];function cb(n,t){const e=Number(n.initialBalance)||0,i=n.id;let s=e;return t.forEach(r=>{const o=Number(r.amount)||0;r.type==="INCOME"?r.destinationAccountId===i&&(s+=o):r.type==="EXPENSE"?r.sourceAccountId===i&&(s-=o):r.type==="TRANSFER"&&(r.destinationAccountId===i&&(s+=o),r.sourceAccountId===i&&(s-=o))}),s}function Mn(n,t){const e={};let i=0;return n.forEach(s=>{const r=cb(s,t);e[s.id]=r,i+=r}),{balances:e,totalMoney:i}}function Gn(n,t,e=[]){if(!n)return{account:null,balance:0,totalAdded:0,totalSpent:0,totalTransferredIn:0,totalTransferredOut:0,count:0,history:[]};const i=n.id,s=(t||[]).filter(p=>p.sourceAccountId===i||p.destinationAccountId===i),r=[...s].sort((p,y)=>{const _=(p.date||"").localeCompare(y.date||"");if(_!==0)return _;const v=p.time||p.createdAt||"",I=y.time||y.createdAt||"";return v&&I?v.localeCompare(I):0});let o=Number(n.initialBalance)||0,a=0,c=0,l=0,d=0;const f=[...r.map(p=>{const y=Number(p.amount)||0,_=o;let v=p.type,I="🟢",P="Money Added",R="Money Added",N="Current Balance",k="+",V="var(--income)",E="";if(p.type==="INCOME")p.destinationAccountId===i&&(o+=y,a+=y,v="INCOME",I="🟢",P="Income",R="Money Added",N="Current Balance",k="+",V="var(--income)");else if(p.type==="EXPENSE")p.sourceAccountId===i&&(o-=y,c+=y,v="EXPENSE",I="🔴",P="Expense",R="Expense",N="Remaining Balance",k="−",V="var(--expense)");else if(p.type==="TRANSFER"){if(p.destinationAccountId===i){o+=y,l+=y,a+=y,v="TRANSFER_IN",I="🟣",P="Transfer IN",R="Received",N="Balance After",k="+",V="var(--primary-light)";const A=e.find(S=>S.id===p.sourceAccountId);A&&(E=A.name)}else if(p.sourceAccountId===i){o-=y,d+=y,c+=y,v="TRANSFER_OUT",I="🟣",P="Transfer OUT",R="Transferred",N="Balance After",k="−",V="var(--primary-light)";const A=e.find(S=>S.id===p.destinationAccountId);A&&(E=A.name)}}let b=_,w=o;return p.type==="TRANSFER"?v==="TRANSFER_OUT"&&p.sourcePreviousBalance!==void 0?(b=Number(p.sourcePreviousBalance),w=Number(p.sourceBalanceAfter)):v==="TRANSFER_IN"&&p.destinationPreviousBalance!==void 0?(b=Number(p.destinationPreviousBalance),w=Number(p.destinationBalanceAfter)):p.previousBalance!==void 0&&p.balanceAfter!==void 0&&(b=Number(p.previousBalance),w=Number(p.balanceAfter)):p.previousBalance!==void 0&&p.balanceAfter!==void 0&&(b=Number(p.previousBalance),w=Number(p.balanceAfter)),{...p,displayType:v,indicator:I,typeLabel:P,actionLabel:R,resultLabel:N,amountSign:k,amountColor:V,transferAccountName:E,previousBalance:b,balanceAfter:w}})].reverse();return{account:n,balance:o,totalAdded:a,totalSpent:c,totalTransferredIn:l,totalTransferredOut:d,count:s.length,history:f,transactions:s}}function lb(n){return n.filter(t=>t.type==="INCOME"&&!t.isFriendMoney).reduce((t,e)=>t+Number(e.amount),0)}function ub(n){return n.filter(t=>t.type==="EXPENSE"&&!t.isFriendMoney).reduce((t,e)=>t+Number(e.amount),0)}function db(n){return n.filter(t=>t.type==="TRANSFER").reduce((t,e)=>t+Number(e.amount),0)}function go(n,t){const{balances:e,totalMoney:i}=Mn(n,t),s=lb(t),r=ub(t),o=db(t);return{balances:e,totalMoney:i,totalIncome:s,totalExpenses:r,totalTransfers:o}}function Bd(n,t){const e=n.filter(o=>o.date===t&&!o.isFriendMoney),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function hb(n,t){const{start:e,end:i}=ab(t),s=n.filter(c=>c.date>=e&&c.date<=i&&!c.isFriendMoney),r=s.filter(c=>c.type==="INCOME").reduce((c,l)=>c+l.amount,0),o=s.filter(c=>c.type==="EXPENSE").reduce((c,l)=>c+l.amount,0),a=s.filter(c=>c.type==="TRANSFER").reduce((c,l)=>c+l.amount,0);return{added:r,spent:o,transferred:a,net:r-o,count:s.length,transactions:s,startDate:e,endDate:i}}function $d(n,t){const e=n.filter(o=>o.date&&o.date.startsWith(t)&&!o.isFriendMoney),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function fb(n,t){const e=t?n.filter(o=>o.type==="EXPENSE"&&!o.isFriendMoney&&o.date&&o.date.startsWith(t)):n.filter(o=>o.type==="EXPENSE"&&!o.isFriendMoney),i={};let s=0;return e.forEach(o=>{const a=o.category||"Other";i[a]=(i[a]||0)+o.amount,s+=o.amount}),{categories:Object.entries(i).map(([o,a])=>({category:o,amount:a,percentage:s>0?a/s*100:0,emoji:Fc(o)})).sort((o,a)=>a.amount-o.amount),totalExpenses:s}}function Ud(n,t){const{balances:e,totalMoney:i}=Mn(n,t);return n.map(s=>{const r=e[s.id]||0,o=i>0?Math.max(0,r)/i*100:0;return{account:s,balance:r,percentage:o}}).sort((s,r)=>r.balance-s.balance)}function zd(n,t){const{added:e,spent:i,transferred:s,net:r,count:o,transactions:a}=$d(n,t),{categories:c}=fb(n,t),l=c.length>0?c[0]:null,d=a.filter(f=>f.type==="EXPENSE"),h=d.length>0?d.reduce((f,p)=>p.amount>f.amount?p:f,d[0]):null;return{income:e,expenses:i,transfers:s,savings:r,transactionCount:o,categories:c,highestCategory:l,highestExpense:h}}function Za(n=[],t=[]){const e=(n||[]).reduce((c,l)=>c+(Number(l.initialBalance)||0),0),i=[...t||[]].sort((c,l)=>{const d=(c.date||"").localeCompare(l.date||"");if(d!==0)return d;const h=c.time||c.createdAt||"",f=l.time||l.createdAt||"";return h.localeCompare(f)});let s=e;const r=i.map(c=>{const l=Number(c.amount)||0,d=s;let h=c.type,f=0,p="",y="",_="";h==="INCOME"?(s+=l,f=l,p="Money Added",y="+",_="var(--income)"):h==="EXPENSE"?(s-=l,f=-l,p="Expense",y="−",_="var(--expense)"):h==="TRANSFER"&&(f=0,p="Transfer",y="",_="var(--primary-light)");const v=s,I=n.find(N=>N.id===c.sourceAccountId),P=n.find(N=>N.id===c.destinationAccountId);let R="";if(h==="INCOME")R=P?P.name:"Account";else if(h==="EXPENSE")R=I?I.name:"Account";else if(h==="TRANSFER"){const N=I?I.name:"Account",k=P?P.name:"Account";R=`${N} → ${k}`}return{...c,previousTotal:d,newTotal:v,netChange:f,typeLabel:p,amountSign:y,amountColor:_,accountName:R,sourceAccountName:I?I.name:"",destinationAccountName:P?P.name:""}}),o=s,a=[...r].reverse();return{startingTotal:e,currentTotal:o,count:i.length,history:a}}const pb=Object.freeze(Object.defineProperty({__proto__:null,calculateAccountBalance:cb,calculateAccountBalances:Mn,calculateAccountDistribution:Ud,calculateAccountHistory:Gn,calculateCategoryTotals:fb,calculateDailyTotals:Bd,calculateMonthlyTotals:$d,calculateTotalExpenses:ub,calculateTotalIncome:lb,calculateTotalMoneyHistory:Za,calculateTotalTransfers:db,calculateTotals:go,calculateWeeklyTotals:hb,getMonthlyReport:zd},Symbol.toStringTag,{value:"Module"}));function Ot(){return Ne||Fd()}async function mb(n,t){if(!n)return;const e=t&&t.name?String(t.name).trim():"User",i=t&&t.email?String(t.email).trim():"";await Ld(gt(Ot(),"users",n),{name:e,email:i,createdAt:t&&t.createdAt?t.createdAt:new Date().toISOString(),settings:{currency:"INR",theme:"dark",notifications:!0,budgetAlerts:!0,lowBalanceAlert:!0,lowBalanceThreshold:500,allowNegativeBalance:!1}},{merge:!0})}async function qr(n){if(!n)return null;try{const t=await Nd(gt(Ot(),"users",n));if(t&&t.exists())return{id:t.id,...t.data()}}catch(t){console.warn("getUserProfile warning:",t)}return null}async function gb(n,t){n&&(await ke(gt(Ot(),"users",n),{initialBalance:Number(t)}),await _b(n,t))}async function QS(n,t){if(!n)return;const e=await qr(n),i=(e==null?void 0:e.settings)||{};await ke(gt(Ot(),"users",n),{settings:{...i,...t}})}async function JS(n){if(!n)return;const t=us(Ot());(await ri(Ft(Ot(),"users",n,"accounts"))).forEach(r=>t.delete(r.ref)),(await ri(Ft(Ot(),"users",n,"transactions"))).forEach(r=>t.delete(r.ref)),(await ri(Ft(Ot(),"users",n,"budgets"))).forEach(r=>t.delete(r.ref)),t.delete(gt(Ot(),"users",n)),await t.commit()}async function yb(n,t){if(!n)return null;const e=Ft(Ot(),"users",n,"accounts");return(await oi(e,{name:t.name.trim(),type:t.type,initialBalance:Number(t.initialBalance)||0,bankName:(t.bankName||"").trim(),last4Digits:(t.last4Digits||"").trim(),icon:t.icon||vb(t.type),createdAt:new Date().toISOString()})).id}function vb(n){switch(n){case"Cash":return"💵";case"Bank":return"🏦";case"UPI":return"📱";case"Other":return"💳";default:return"💰"}}async function ZS(n,t,e){if(!n||!t)return;const i=gt(Ot(),"users",n,"accounts",t),s={name:e.name.trim(),type:e.type,bankName:(e.bankName||"").trim(),last4Digits:(e.last4Digits||"").trim(),icon:e.icon||vb(e.type),updatedAt:new Date().toISOString()};e.notes!==void 0&&(s.notes=(e.notes||"").trim()),e.initialBalance!==void 0&&(s.initialBalance=Number(e.initialBalance)||0),await ke(i,s)}async function tk(n,t){!n||!t||await Oc(gt(Ot(),"users",n,"accounts",t))}async function bb(n){if(!n)return[];const t=Ft(Ot(),"users",n,"accounts"),e=$s(t,Us("createdAt","asc")),i=await ri(e),s=[];return i.forEach(r=>{s.push({id:r.id,...r.data()})}),s}function ek(n,t){if(!n)return t([]),()=>{};const e=Ft(Ot(),"users",n,"accounts"),i=$s(e,Us("createdAt","asc"));return Lc(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Account subscription error:",s),t([],s)})}async function _b(n,t=0){if(!n)return;(await bb(n)).length===0&&await yb(n,{name:"Cash",type:"Cash",initialBalance:Number(t)||0,icon:"💵"})}async function wb(n,t){if(!n)return null;const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;if(t.date!==i)throw new Error("⚠️ Invalid transaction date. New transactions can only be created for today.");const s=await bb(n),r=await ri($s(Ft(Ot(),"users",n,"transactions"),Us("createdAt","asc"))),o=[];r.forEach(h=>o.push({id:h.id,...h.data()}));const a=Number(t.amount),c=Ft(Ot(),"users",n,"transactions"),l={type:t.type,amount:a,date:t.date,reason:(t.reason||"").trim(),category:t.category||(t.type==="TRANSFER"?"Transfer":"Other"),notes:(t.notes||"").trim(),createdAt:t.createdAt||new Date().toISOString()};if(t.type==="INCOME"){l.destinationAccountId=t.destinationAccountId;const h=s.find(f=>f.id===t.destinationAccountId);if(h){const f=Gn(h,o,s);l.previousBalance=f.balance,l.balanceAfter=f.balance+a}}else if(t.type==="EXPENSE"){l.sourceAccountId=t.sourceAccountId;const h=s.find(f=>f.id===t.sourceAccountId);if(h){const f=Gn(h,o,s);l.previousBalance=f.balance,l.balanceAfter=f.balance-a}}else if(t.type==="TRANSFER"){l.sourceAccountId=t.sourceAccountId,l.destinationAccountId=t.destinationAccountId;const h=s.find(p=>p.id===t.sourceAccountId),f=s.find(p=>p.id===t.destinationAccountId);if(h){const p=Gn(h,o,s);l.sourcePreviousBalance=p.balance,l.sourceBalanceAfter=p.balance-a}if(f){const p=Gn(f,o,s);l.destinationPreviousBalance=p.balance,l.destinationBalanceAfter=p.balance+a}}return(await oi(c,l)).id}async function jd(n,t,e){if(!n||!t)return;const i=gt(Ot(),"users",n,"transactions",t),s={amount:Number(e.amount),date:e.date,reason:(e.reason||"").trim(),category:e.category||(e.type==="TRANSFER"?"Transfer":"Other"),notes:(e.notes||"").trim(),updatedAt:new Date().toISOString()};e.type!==void 0&&(s.type=e.type),e.sourceAccountId!==void 0&&(s.sourceAccountId=e.sourceAccountId),e.destinationAccountId!==void 0&&(s.destinationAccountId=e.destinationAccountId),await ke(i,s)}async function nk(n,t){!n||!t||await Oc(gt(Ot(),"users",n,"transactions",t))}function ik(n,t){if(!n)return t([]),()=>{};const e=Ft(Ot(),"users",n,"transactions"),i=$s(e,Us("createdAt","desc"));return Lc(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Transaction subscription error:",s),t([],s)})}async function Eb(n,t){if(!n)return;const e=t.category||"monthly";await Ld(gt(Ot(),"users",n,"budgets",e),{category:t.category||"monthly",amount:Number(t.amount),month:t.month,updatedAt:new Date().toISOString()})}async function sk(n){if(!n)return[];const t=Ft(Ot(),"users",n,"budgets"),e=await ri(t),i=[];return e.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function rk(n,t){!n||!t||await Oc(gt(Ot(),"users",n,"budgets",t))}async function ok(n,t,e){const i=ib();if(!i.isValid)throw{code:"auth/config-incomplete",message:`Firebase configuration is incomplete. Missing: ${i.missing.join(", ")}`};if(typeof navigator<"u"&&!navigator.onLine)throw{code:"auth/network-request-failed",message:"Network error. Check your internet connection."};const s=(async()=>{const a=(await wT(cn,t.trim(),e)).user;try{n&&n.trim()&&await uy(a,{displayName:n.trim()})}catch(c){console.warn("firebaseUpdateProfile warning:",c)}try{await mb(a.uid,{name:(n||"").trim()||"User",email:(t||"").trim(),createdAt:new Date().toISOString()})}catch(c){console.warn("createUserProfile warning during registration:",c)}return a})(),r=new Promise((o,a)=>{setTimeout(()=>{a({code:"auth/timeout",message:"Registration request timed out. Please try again."})},12e3)});return await Promise.race([s,r])}async function ak(n,t){const e=ib();if(!e.isValid)throw{code:"auth/config-incomplete",message:`Firebase configuration is incomplete. Missing: ${e.missing.join(", ")}`};if(typeof navigator<"u"&&!navigator.onLine)throw{code:"auth/network-request-failed",message:"Network error. Check your internet connection."};const i=(async()=>(await ET(cn,n.trim(),t)).user)(),s=new Promise((r,o)=>{setTimeout(()=>{o({code:"auth/timeout",message:"Login request timed out. Please try again."})},12e3)});return await Promise.race([i,s])}async function Hd(){await CT(cn)}async function ck(n){await _T(cn,n.trim())}function lk(n){return PT(cn,n)}async function uk(n){const t=cn.currentUser;if(!t)throw new Error("No user signed in");await uy(t,{displayName:n.trim()})}async function dk(n,t){const e=cn.currentUser;if(!e)throw new Error("No user signed in");const i=On.credential(e.email,n);await Yu(e,i),await IT(e,t)}async function hk(n){const t=cn.currentUser;if(!t)throw new Error("No user signed in");const e=On.credential(t.email,n);await Yu(t,e),await JS(t.uid),await RT(t)}function kl(n){(n!=null&&n.code||n!=null&&n.message)&&console.error("Firebase Auth Error:",{code:n==null?void 0:n.code,message:n==null?void 0:n.message});const t=(n==null?void 0:n.code)||"",e={"auth/invalid-credential":"Invalid email or password.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect email or password.","auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many login attempts. Please try again later.","auth/network-request-failed":"Network error. Check your internet connection.","auth/email-already-in-use":"An account with this email already exists. Please Log In.","auth/weak-password":"Password is too weak.","auth/operation-not-allowed":"Email/Password sign-in is not enabled in Firebase Console.","auth/requires-recent-login":"Please logout and login again before performing this action.","auth/popup-closed-by-user":"Sign-in popup was closed before completing.","auth/unauthorized-domain":"This domain is not authorized in Firebase Console.","auth/profile-create-failed":"Account created, but your profile could not be saved. Please retry.","auth/config-incomplete":(n==null?void 0:n.message)||"Firebase configuration is incomplete.","auth/timeout":(n==null?void 0:n.message)||"Authentication request timed out. Please try again."};if(e[t])return e[t];if(n!=null&&n.message){const s=String(n.message).replace(/^Firebase:\s*/i,"").replace(/\s*\([^\)]*\)/g,"").trim();if(s&&s!=="Error")return s}return"Unable to log in. Please try again."}function Tb(n,t,e){const i=t.filter(l=>l.type==="EXPENSE"&&l.date&&l.date.startsWith(e)),s=i.reduce((l,d)=>l+d.amount,0),r=n.find(l=>l.category==="monthly"),o=r?{budget:r.amount,spent:s,remaining:r.amount-s,percentage:r.amount>0?Math.min(s/r.amount*100,100):0,exceeded:s>r.amount}:null,c=n.filter(l=>l.category!=="monthly").map(l=>{const d=i.filter(h=>h.category===l.category).reduce((h,f)=>h+f.amount,0);return{category:l.category,budget:l.amount,spent:d,remaining:l.amount-d,percentage:l.amount>0?Math.min(d/l.amount*100,100):0,exceeded:d>l.amount}});return{monthlyProgress:o,categoryProgress:c,totalSpent:s}}function fk(n,t,e){const i=[],{monthlyProgress:s,categoryProgress:r}=Tb(n,t,e);return s&&(s.exceeded?i.push({type:"danger",icon:"🚨",title:"Budget Exceeded",message:`You exceeded your monthly budget by ₹${Math.abs(s.remaining).toLocaleString("en-IN")}.`}):s.percentage>=80&&i.push({type:"warning",icon:"⚠️",title:"Budget Alert",message:`You have used ${s.percentage.toFixed(0)}% of your monthly budget.`})),r.forEach(o=>{o.exceeded&&i.push({type:"danger",icon:"🚨",title:"Category Budget Exceeded",message:`You exceeded your ${o.category} budget by ₹${Math.abs(o.remaining).toLocaleString("en-IN")}.`})}),i}async function pk(n,t,e){await Eb(n,{category:"monthly",amount:Number(t),month:e})}async function mk(n,t,e,i){await Eb(n,{category:t,amount:Number(e),month:i})}async function qd(n){return await sk(n)}async function gk(n,t){await rk(n,t)}let Me=null,xn=!1;function yk(){vk(),bk(),_k(),Ek()}function vk(){if(!("serviceWorker"in navigator))return;if(location.hostname==="localhost"||location.hostname==="127.0.0.1"||location.hostname==="::1"){navigator.serviceWorker.getRegistrations().then(s=>{for(const r of s)r.unregister()}).catch(s=>console.warn("[PWA] SW unregister warning:",s));return}const t="mc_sw_reloaded";let e=!1;function i(){if(!e){if(sessionStorage.getItem(t)){sessionStorage.removeItem(t);return}e=!0,sessionStorage.setItem(t,"1"),console.log("[PWA] New version active — reloading for update."),window.location.reload()}}navigator.serviceWorker.addEventListener("message",s=>{s.data&&s.data.type==="SW_UPDATED"&&(console.log("[PWA] SW_UPDATED received, version:",s.data.version),i())}),navigator.serviceWorker.addEventListener("controllerchange",()=>{console.log("[PWA] Controller changed — new SW is active."),i()}),window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then(s=>{console.log("[PWA] SW registered:",s.scope);function r(o){o.addEventListener("statechange",()=>{o.state==="installed"&&navigator.serviceWorker.controller&&console.log("[PWA] New SW installed and waiting.")})}s.installing&&r(s.installing),s.addEventListener("updatefound",()=>{console.log("[PWA] SW update found."),s.installing&&r(s.installing)}),setInterval(()=>{s.update().catch(()=>{})},60*1e3)}).catch(s=>{console.warn("[PWA] SW registration failed:",s)})})}function bk(){window.matchMedia("(display-mode: standalone)").matches&&(xn=!0),window.navigator.standalone===!0&&(xn=!0),window.addEventListener("appinstalled",()=>{xn=!0,Me=null,vu()})}function _k(){window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Me=n,!localStorage.getItem("mc_install_dismissed")&&!xn&&setTimeout(()=>wk(),3e3)})}function wk(){if(xn||!Me)return;const n=document.getElementById("pwa-install-banner");n&&(n.innerHTML=`
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
  `,n.classList.add("show"),document.getElementById("pwa-install-accept").onclick=async()=>{Me&&(Me.prompt(),(await Me.userChoice).outcome==="accepted"&&(xn=!0),Me=null),vu()},document.getElementById("pwa-install-dismiss").onclick=()=>{localStorage.setItem("mc_install_dismissed","true"),vu()})}function vu(){const n=document.getElementById("pwa-install-banner");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function Ek(){const n=()=>{const t=document.getElementById("offline-banner");t&&(navigator.onLine?(t.classList.remove("show"),setTimeout(()=>{t.innerHTML=""},300)):(t.innerHTML=`
        <div class="offline-content">
          <span class="offline-icon">📡</span>
          <span class="offline-text">You're offline — Reconnect to save new transactions securely.</span>
        </div>
      `,t.classList.add("show")))};window.addEventListener("online",n),window.addEventListener("offline",n),setTimeout(n,1e3)}function Ib(){return navigator.onLine}function Tk(){return xn}function Ik(){return!!Me&&!xn}async function Ak(){if(!Me)return!1;Me.prompt();const n=await Me.userChoice;return n.outcome==="accepted"&&(xn=!0),Me=null,n.outcome==="accepted"}const Ct=4;async function Ab(n){const e=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function xk(n,t){await ke(gt(Ne,"users",n),{pinHash:t,pinEnabled:!0,pinSetupPromptShown:!0})}async function tc(n){try{const t=await Nd(gt(Ne,"users",n));if(t&&t.exists()){const e=t.data();return{pinHash:e.pinHash||null,pinEnabled:e.pinEnabled||!1,pinSetupPromptShown:e.pinSetupPromptShown||!1,autoLockTimeout:e.autoLockTimeout!==void 0?e.autoLockTimeout:5,biometricEnabled:e.biometricEnabled||!1,biometricCredentialId:e.biometricCredentialId||null,hideBalance:e.hideBalance||!1,pinLength:Ct}}}catch(t){console.warn("getPinData warning:",t)}return{pinHash:null,pinEnabled:!1,pinSetupPromptShown:!1,autoLockTimeout:5,biometricEnabled:!1,biometricCredentialId:null,hideBalance:!1,pinLength:Ct}}async function xb(n,t){return await Ab(n)===t}async function Sb(n){await ke(gt(Ne,"users",n),{pinHash:null,pinEnabled:!1})}async function Sk(n,t){await ke(gt(Ne,"users",n),{autoLockTimeout:t})}async function kk(n){await ke(gt(Ne,"users",n),{pinSetupPromptShown:!0})}async function qp(){try{return!window.PublicKeyCredential||typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable!="function"?!1:await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}}async function Pk(n,t){const e=crypto.getRandomValues(new Uint8Array(32)),i=new TextEncoder().encode(n.substring(0,32)),s=await navigator.credentials.create({publicKey:{challenge:e,rp:{name:"Money Control",id:window.location.hostname},user:{id:i,name:t,displayName:t},pubKeyCredParams:[{alg:-7,type:"public-key"},{alg:-257,type:"public-key"}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required"},timeout:6e4,attestation:"none"}}),r=Dk(s.rawId);return await ke(gt(Ne,"users",n),{biometricEnabled:!0,biometricCredentialId:r}),localStorage.setItem(`mc_biometric_cred_${n}`,r),r}async function Ck(n,t){try{const e=crypto.getRandomValues(new Uint8Array(32)),i=Nk(t);return await navigator.credentials.get({publicKey:{challenge:e,rpId:window.location.hostname,allowCredentials:[{id:i,type:"public-key",transports:["internal"]}],userVerification:"required",timeout:6e4}})!==null}catch(e){return console.warn("Biometric verification failed:",e.name,e.message),!1}}async function Rk(n){await ke(gt(Ne,"users",n),{biometricEnabled:!1,biometricCredentialId:null}),localStorage.removeItem(`mc_biometric_cred_${n}`)}async function Mk(n,t){await ke(gt(Ne,"users",n),{hideBalance:t})}function Dk(n){const t=new Uint8Array(n);let e="";for(const i of t)e+=String.fromCharCode(i);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Nk(n){const t=n.replace(/-/g,"+").replace(/_/g,"/"),e=t.padEnd(t.length+(4-t.length%4)%4,"="),i=atob(e),s=new Uint8Array(i.length);for(let r=0;r<i.length;r++)s[r]=i.charCodeAt(r);return s.buffer}let Ok=0;function Wo(n,t="info",e=4e3){const i=document.getElementById("toast-container");if(!i)return;const s=`toast-${++Ok}`,r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"Success",error:"Error",warning:"Warning",info:"Info"},a=document.createElement("div");a.id=s,a.className=`toast toast-${t}`,a.innerHTML=`
    <div class="toast-icon">${r[t]||r.info}</div>
    <div class="toast-content">
      <div class="toast-title">${o[t]||o.info}</div>
      <div class="toast-message">${n}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${e}ms linear;"></div>
  `,i.appendChild(a),requestAnimationFrame(()=>{const d=a.querySelector(".toast-progress");d&&(d.style.width="0%")});const c=setTimeout(()=>{Wp(a)},e);a.querySelector(".toast-close").addEventListener("click",()=>{clearTimeout(c)});const l=i.querySelectorAll(".toast");l.length>4&&Wp(l[0])}function Wp(n){!n||!n.parentNode||(n.classList.add("removing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}const z={success:(n,t)=>Wo(n,"success",t),error:(n,t)=>Wo(n,"error",t),warning:(n,t)=>Wo(n,"warning",t),info:(n,t)=>Wo(n,"info",t)};let M={mode:"lock",pin:"",confirmPin:"",currentPinInput:"",step:"enter",pinLength:Ct,failedAttempts:0,isProcessing:!1,uid:null,storedHash:null,onUnlock:null,onSetupComplete:null,biometricEnabled:!1,biometricCredentialId:null},Gp=!1;function Lk(n,t){M.mode="setup-prompt",M.uid=n,M.onSetupComplete=t,Ie()}function Vk(n,t){M.mode="create",M.uid=n,M.pin="",M.confirmPin="",M.currentPinInput="",M.step="enter",M.pinLength=Ct,M.onSetupComplete=t,Ie()}function Fk(n,t,e){M.mode="change",M.uid=n,M.storedHash=t,M.currentPinInput="",M.pin="",M.confirmPin="",M.step=t?"current":"enter",M.pinLength=Ct,M.onSetupComplete=e,Ie()}function kb(n,t,e,i,s){M.mode="lock",M.uid=n,M.storedHash=t,M.pin="",M.failedAttempts=0,M.isProcessing=!1,M.onUnlock=e,M.biometricEnabled=i||!1,M.biometricCredentialId=s||null,Ie(),i&&s&&setTimeout(()=>Mb(),500)}function ai(){const n=document.getElementById("pin-lock-root");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function Ie(){const n=document.getElementById("pin-lock-root");if(!n)return;let t="";switch(M.mode){case"setup-prompt":t=$k();break;case"create":case"change":t=Uk();break;case"lock":t=zk();break;case"forgot":t=jk();break}n.innerHTML=`<div class="pin-overlay">${t}</div>`,n.classList.add("show"),Hk(),Bk()}function Bk(){Gp||(Gp=!0,window.addEventListener("keydown",n=>{const t=document.getElementById("pin-lock-root");if(!(!t||!t.classList.contains("show"))&&!(n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA")){if(n.key>="0"&&n.key<="9"){if(M.isProcessing)return;Cb(n.key)}else if(n.key==="Backspace"){if(M.isProcessing)return;Rb()}else if(n.key==="Enter"){if(M.isProcessing)return;M.mode==="lock"&&Gd()}}}))}function $k(){return`
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
  `}function Uk(){let n="Create Your PIN",t="Choose a 4-digit PIN to protect your data.",e=M.pin;return M.mode==="change"?M.step==="current"?(n="Current PIN",t="Enter your current 4-digit PIN.",e=M.currentPinInput):M.step==="enter"?(n="New PIN",t="Enter your new 4-digit PIN.",e=M.pin):M.step==="confirm"&&(n="Confirm New PIN",t="Confirm your new 4-digit PIN.",e=M.confirmPin):M.step==="confirm"?(n="Confirm Your PIN",t="Enter your 4-digit PIN again to confirm.",e=M.confirmPin):(n="Enter Your PIN",t="Enter a 4-digit PIN to protect your data.",e=M.pin),`
    <div class="pin-screen pin-create-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">${n}</div>
      <p class="pin-subtitle">${t}</p>

      <div class="pin-dots" id="pin-dots">
        ${Wd(e,Ct)}
      </div>

      <div class="pin-error" id="pin-create-error"></div>

      ${Pb()}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-create-back">
          ← Back
        </button>
      </div>
    </div>
  `}function zk(){return`
    <div class="pin-screen pin-lock-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Money Control</div>
      <p class="pin-subtitle">Welcome Back 👋</p>
      <p class="pin-description">Enter your PIN</p>

      <div class="pin-dots" id="pin-dots">
        ${Wd(M.pin,Ct)}
      </div>

      <div class="pin-error" id="pin-lock-error"></div>

      ${Pb()}

      <button class="pin-btn pin-btn-primary pin-unlock-btn" id="pin-unlock-btn">
        🔓 Unlock
      </button>

      ${M.biometricEnabled&&M.biometricCredentialId?`
        <button class="pin-btn pin-btn-biometric" id="pin-biometric-btn" title="Use fingerprint or face unlock">
          <span class="pin-biometric-icon">🪪</span>
          Use Fingerprint / Biometric
        </button>
      `:""}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-btn">
          Forgot PIN?
        </button>
      </div>
    </div>
  `}function jk(){return`
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
  `}function Wd(n,t=Ct){let e="";for(let i=0;i<t;i++){const s=i<n.length;e+=`<span class="pin-dot ${s?"filled":""}">${s?"●":"○"}</span>`}return e}function Pb(){return`
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
  `}function Ve(){const n=document.getElementById("pin-dots");if(!n)return;let t="";M.mode==="create"?t=M.step==="confirm"?M.confirmPin:M.pin:M.mode==="change"?M.step==="current"?t=M.currentPinInput:M.step==="confirm"?t=M.confirmPin:t=M.pin:M.mode==="lock"&&(t=M.pin),n.innerHTML=Wd(t,Ct)}function Hk(){const n=document.getElementById("pin-setup-set");n&&(n.onclick=()=>{M.mode="create",M.pin="",M.confirmPin="",M.step="enter",Ie()});const t=document.getElementById("pin-setup-skip");t&&(t.onclick=async()=>{M.uid&&await kk(M.uid),ai(),M.onSetupComplete&&M.onSetupComplete()}),document.querySelectorAll(".pin-key[data-key]").forEach(c=>{c.onclick=()=>{if(M.isProcessing)return;const l=c.dataset.key;c.classList.add("pressed"),setTimeout(()=>c.classList.remove("pressed"),150),l==="delete"?Rb():Cb(l)}});const e=document.getElementById("pin-create-back");e&&(e.onclick=()=>{M.mode==="change"?M.step==="confirm"?(M.step="enter",M.confirmPin="",Ie()):M.step==="enter"&&M.storedHash?(M.step="current",M.pin="",Ie()):ai():M.step==="confirm"?(M.step="enter",M.confirmPin="",Ie()):ai()});const i=document.getElementById("pin-unlock-btn");i&&(i.onclick=()=>Gd());const s=document.getElementById("pin-biometric-btn");s&&(s.onclick=()=>Mb());const r=document.getElementById("pin-forgot-btn");r&&(r.onclick=()=>{M.mode="forgot",Ie()});const o=document.getElementById("pin-forgot-verify");o&&(o.onclick=()=>Wk());const a=document.getElementById("pin-forgot-back");a&&(a.onclick=()=>{M.mode="lock",M.pin="",Ie()})}function Cb(n){const t=document.getElementById("pin-create-error");t&&(t.textContent=""),M.mode==="create"?M.step==="confirm"?M.confirmPin.length<Ct&&(M.confirmPin+=n,Ve(),M.confirmPin.length===Ct&&Kp()):M.pin.length<Ct&&(M.pin+=n,Ve(),M.pin.length===Ct&&setTimeout(()=>{M.step="confirm",Ie()},200)):M.mode==="change"?M.step==="current"?M.currentPinInput.length<Ct&&(M.currentPinInput+=n,Ve(),M.currentPinInput.length===Ct&&qk()):M.step==="confirm"?M.confirmPin.length<Ct&&(M.confirmPin+=n,Ve(),M.confirmPin.length===Ct&&Kp()):M.pin.length<Ct&&(M.pin+=n,Ve(),M.pin.length===Ct&&setTimeout(()=>{M.step="confirm",Ie()},200)):M.mode==="lock"&&M.pin.length<Ct&&(M.pin+=n,Ve(),M.pin.length===Ct&&setTimeout(()=>Gd(),150))}function Rb(){M.mode==="create"?M.step==="confirm"?M.confirmPin=M.confirmPin.slice(0,-1):M.pin=M.pin.slice(0,-1):M.mode==="change"?M.step==="current"?M.currentPinInput=M.currentPinInput.slice(0,-1):M.step==="confirm"?M.confirmPin=M.confirmPin.slice(0,-1):M.pin=M.pin.slice(0,-1):M.mode==="lock"&&(M.pin=M.pin.slice(0,-1)),Ve()}async function qk(){const n=document.getElementById("pin-create-error");if(M.currentPinInput.length!==Ct){n&&(n.textContent="Enter your 4-digit PIN.");return}M.isProcessing=!0;try{if(await xb(M.currentPinInput,M.storedHash))M.isProcessing=!1,M.step="enter",M.pin="",M.confirmPin="",Ie();else{M.isProcessing=!1,n&&(n.textContent="Incorrect PIN. Try again."),M.currentPinInput="",Ve();const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500))}}catch{M.isProcessing=!1,n&&(n.textContent="Verification failed. Try again.")}}async function Kp(){const n=document.getElementById("pin-create-error");if(M.pin!==M.confirmPin){n&&(n.textContent="PINs do not match. Please try again."),M.confirmPin="",Ve();const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}M.isProcessing=!0;try{const t=await Ab(M.pin);await xk(M.uid,t),z.success(M.mode==="change"?"🔐 PIN updated successfully!":"🔐 PIN created successfully!"),ai(),M.pin="",M.confirmPin="",M.currentPinInput="",M.isProcessing=!1,M.onSetupComplete&&M.onSetupComplete()}catch{n&&(n.textContent="Failed to save PIN. Please try again."),M.isProcessing=!1}}async function Gd(){if(M.isProcessing)return;const n=document.getElementById("pin-lock-error");if(M.pin.length!==Ct){n&&(n.textContent="Enter your 4-digit PIN.");const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}if(M.isProcessing=!0,M.failedAttempts>=3){const t=Math.min(Math.pow(2,M.failedAttempts-2)*1e3,3e4),e=document.getElementById("pin-unlock-btn");e&&(e.disabled=!0,e.textContent=`Wait ${Math.ceil(t/1e3)}s...`),await new Promise(i=>setTimeout(i,t)),e&&(e.disabled=!1,e.textContent="🔓 Unlock")}try{if(await xb(M.pin,M.storedHash))z.success("Unlocked successfully."),ai(),M.pin="",M.failedAttempts=0,M.isProcessing=!1,M.onUnlock&&M.onUnlock();else{M.failedAttempts++,M.pin="",Ve(),n&&(n.textContent="Incorrect PIN. Try again.");const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500)),M.isProcessing=!1}}catch{n&&(n.textContent="Verification failed. Try again."),M.pin="",Ve(),M.isProcessing=!1}}async function Wk(){const n=document.getElementById("pin-forgot-password"),t=document.getElementById("pin-forgot-error");if(!n)return;const e=n.value;if(!e){t&&(t.textContent="Please enter your password.");return}const i=document.getElementById("pin-forgot-verify");i&&(i.disabled=!0,i.innerHTML='<span class="spinner"></span> Verifying...');try{const s=cn.currentUser;if(!s||!s.email){t&&(t.textContent="No authenticated user found."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN");return}const r=On.credential(s.email,e);await Yu(s,r),await Sb(M.uid),z.success("🔐 PIN removed. You can set a new PIN in Settings."),ai(),M.onUnlock&&M.onUnlock()}catch{t&&(t.textContent="Incorrect password. Please try again."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN")}}async function Mb(){if(!M.biometricCredentialId||M.isProcessing)return;const n=document.getElementById("pin-lock-error"),t=document.getElementById("pin-biometric-btn");n&&(n.textContent=""),t&&(t.disabled=!0,t.innerHTML='<span class="spinner" style="width:16px;height:16px;border-width:2px;"></span> Verifying...');try{await Ck(M.uid,M.biometricCredentialId)?(z.success("✅ Biometric unlock successful!"),ai(),M.pin="",M.failedAttempts=0,M.isProcessing=!1,M.onUnlock&&M.onUnlock()):(n&&(n.textContent="Biometric authentication failed. Please use your PIN."),t&&(t.disabled=!1,t.innerHTML='<span class="pin-biometric-icon">🪪</span> Use Fingerprint / Biometric'))}catch(e){console.warn("Biometric error:",e);let i="Biometric authentication failed. Please use your PIN.";e.name==="NotAllowedError"?i="Biometric was cancelled. Enter your PIN to continue.":e.name==="SecurityError"&&(i="Biometric not available in this context. Use your PIN."),n&&(n.textContent=i),t&&(t.disabled=!1,t.innerHTML='<span class="pin-biometric-icon">🪪</span> Use Fingerprint / Biometric')}}function yo(n,t=!1){if(n===""||n===null||n===void 0)return"Please enter an amount.";const e=Number(n);return isNaN(e)?"Please enter a valid number.":(t?e<0:e<=0)?t?"Amount cannot be negative.":"Amount must be greater than ₹0.":e>99999999?"Amount is too large.":null}function Kd(n){return!n||!n.trim()?"Please enter your email.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())?null:"Please enter a valid email address."}function Yd(n){return n?n.length<6?"Password must be at least 6 characters.":null:"Please enter a password."}function Db(n,t){return t?n!==t?"Passwords do not match.":null:"Please confirm your password."}function Bc(n){return!n||!n.trim()?"Please enter your name.":n.trim().length<2?"Name must be at least 2 characters.":n.trim().length>50?"Name must be less than 50 characters.":null}function Gk(n){if(!n)return"Please select a date.";const t=new Date(n);return isNaN(t.getTime())?"Please enter a valid date.":null}function Xd(n){if(!n)return"Date is required.";const t=new Date(n);if(isNaN(t.getTime()))return"Please enter a valid date.";const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n!==i?"⚠️ Invalid transaction date. New transactions can only be created for today.":null}function Kk(n){return n?null:"Please select a category."}function Nb(n,t=!0){const e={},i=yo(n.amount);if(i&&(e.amount=i),t){const r=Xd(n.date);r&&(e.date=r)}else{const r=Gk(n.date);r&&(e.date=r)}const s=Kk(n.category);return s&&(e.category=s),{isValid:Object.keys(e).length===0,errors:e}}function Yk(n,t){const e={},i=Kd(n);i&&(e.email=i);const s=Yd(t);return s&&(e.password=s),{isValid:Object.keys(e).length===0,errors:e}}function Xk(n,t,e,i){const s={},r=Bc(n);r&&(s.name=r);const o=Kd(t);o&&(s.email=o);const a=Yd(e);a&&(s.password=a);const c=Db(e,i);return c&&(s.confirmPassword=c),{isValid:Object.keys(s).length===0,errors:s}}let ya="login";function Qk(){return`
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 72px; height: 72px; border-radius: 18px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.3);" />
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${Ob()}
        </div>
      </div>
    </div>
  `}function Ob(){if(ya==="login")return`
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
    `;if(ya==="register")return`
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
    `;if(ya==="forgot")return`
      <h2 class="auth-title">Reset Password 🔑</h2>
      <p style="font-size: var(--fs-sm); color: var(--text-secondary); text-align: center; margin-bottom: 24px;">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      <form class="auth-form" id="forgot-form" novalidate>
        <div class="form-group">
          <label class="form-label" for="forgot-email">Email Address</label>
          <input type="email" id="forgot-email" class="form-input" placeholder="Enter Your Email" autocomplete="email" required />
          <div class="form-error" id="forgot-email-error"></div>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-forgot-submit">
          <span class="btn-text">Send Reset Link</span>
        </button>
      </form>

      <div class="auth-footer">
        Back to <span class="auth-link" id="link-login-back">Log In</span>
      </div>
    `}function Lb(n){const t=document.getElementById("auth-card-body");if(!t)return;const e=f=>{ya=f,t.innerHTML=Ob(),Lb()},i=document.getElementById("link-register");i&&(i.onclick=()=>e("register"));const s=document.getElementById("link-login");s&&(s.onclick=()=>e("login"));const r=document.getElementById("link-login-back");r&&(r.onclick=()=>e("login"));const o=document.getElementById("link-forgot");o&&(o.onclick=()=>e("forgot"));const a=document.getElementById("toggle-login-password");a&&(a.onclick=()=>{const f=document.getElementById("login-password");f&&(f.type=f.type==="password"?"text":"password")});const c=document.getElementById("toggle-reg-password");c&&(c.onclick=()=>{const f=document.getElementById("reg-password");f&&(f.type=f.type==="password"?"text":"password")});const l=document.getElementById("login-form");l&&(l.onsubmit=async f=>{f.preventDefault();const p=document.getElementById("login-email").value,y=document.getElementById("login-password").value;document.getElementById("login-email-error").textContent="",document.getElementById("login-password-error").textContent="";const _=Yk(p,y);if(!_.isValid){_.errors.email&&(document.getElementById("login-email-error").textContent=_.errors.email),_.errors.password&&(document.getElementById("login-password-error").textContent=_.errors.password);return}const v=document.getElementById("btn-login-submit");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Logging in...';try{await ak(p,y),z.success("Logged in successfully!")}catch(I){console.error("Login failure:",I);const P=kl(I);z.error(P);const R=document.getElementById("login-password-error");R&&(R.textContent=P)}finally{const I=document.getElementById("btn-login-submit");I&&(I.disabled=!1,I.innerHTML='<span class="btn-text">Log In</span>')}});const d=document.getElementById("register-form");d&&(d.onsubmit=async f=>{f.preventDefault();const p=document.getElementById("reg-name").value,y=document.getElementById("reg-email").value,_=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value;document.getElementById("reg-name-error").textContent="",document.getElementById("reg-email-error").textContent="",document.getElementById("reg-password-error").textContent="",document.getElementById("reg-confirm-error").textContent="";const I=Xk(p,y,_,v);if(!I.isValid){I.errors.name&&(document.getElementById("reg-name-error").textContent=I.errors.name),I.errors.email&&(document.getElementById("reg-email-error").textContent=I.errors.email),I.errors.password&&(document.getElementById("reg-password-error").textContent=I.errors.password),I.errors.confirmPassword&&(document.getElementById("reg-confirm-error").textContent=I.errors.confirmPassword);return}const P=document.getElementById("btn-register-submit");P&&(P.disabled=!0,P.innerHTML='<span class="spinner"></span> Creating Account...');try{await ok(p,y,_),z.success("Account created successfully!")}catch(R){console.error("Registration Error:",R);const N=kl(R);z.error(N);const k=document.getElementById("reg-email-error");k&&(k.textContent=N)}finally{const R=document.getElementById("btn-register-submit");R&&(R.disabled=!1,R.innerHTML='<span class="btn-text">Create Account</span>')}});const h=document.getElementById("forgot-form");h&&(h.onsubmit=async f=>{f.preventDefault();const p=document.getElementById("forgot-email").value;document.getElementById("forgot-email-error").textContent="";const y=Kd(p);if(y){document.getElementById("forgot-email-error").textContent=y;return}const _=document.getElementById("btn-forgot-submit");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Sending...';try{await ck(p),z.success("Password reset email sent! Check your inbox."),e("login")}catch(v){z.error(kl(v)),_.disabled=!1,_.innerHTML='<span class="btn-text">Send Reset Link</span>'}})}function Jk(){return`
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
  `}function Zk(n,t){const e=document.getElementById("onboarding-form");e&&(e.onsubmit=async i=>{i.preventDefault();const s=document.getElementById("initial-balance"),r=document.getElementById("onboarding-error");r.textContent="";const o=s.value,a=yo(o,!0);if(a){r.textContent=a;return}const c=document.getElementById("btn-start-tracking");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Saving...';try{await gb(n,Number(o)),z.success("Initial balance saved!"),t&&t()}catch(l){console.error("Error setting initial balance:",l),z.error("Unable to save initial balance. Please try again."),c.disabled=!1,c.innerHTML="Start Money Tracking"}})}function tP(n){if(!n)return"Unknown Date";const t=Vn(),e=n.split("-");if(e.length<3)return n;const[i,s,r]=e.map(Number),o=YS(s-1),a=t.split("-").map(Number),c=new Date(a[0],a[1]-1,a[2]);c.setDate(c.getDate()-1);const l=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`;return n===t?`Today, ${r} ${o}`:n===l?`Yesterday, ${r} ${o}`:`${r} ${o} ${i}`}function eP(n){return n.type==="TRANSFER"?"↔":n.type==="INCOME"?{"Pocket Money":"👛",Salary:"💼",Gift:"🎁",Freelance:"🖥️",Refund:"↩",Other:"💰"}[n.category]||"💰":Fc(n.category)}function nP(n,t,e){const i=n.type==="INCOME",s=n.type==="EXPENSE",r=n.type==="TRANSFER",o=i?"income":s?"expense":"transfer",a=y=>{const _=t.find(v=>v.id===y);return _?_.name:""},c=me(n.reason||(r?"Account Transfer":n.category||"Transaction")),l=sb(n);let d="";if(i){const y=a(n.destinationAccountId);d=[n.category,y,l].filter(Boolean).join(" · ")}else if(s){const y=a(n.sourceAccountId);d=[n.category,y,l].filter(Boolean).join(" · ")}else{const y=a(n.sourceAccountId),_=a(n.destinationAccountId);d=[y&&_?`${y} → ${_}`:y||_||"","Transfer",l].filter(Boolean).join(" · ")}let h="";i?h=`+${U(n.amount)}`:s?h=`−${U(n.amount)}`:h=U(n.amount);const f=eP(n),p=n.notes?`<span class="tl-notes-badge">${me(n.notes)}</span>`:"";return`
    <div class="tl-row animate-fade-in" data-tx-id="${n.id}">
      <div class="tl-spine">
        <div class="tl-dot tl-dot--${o}"></div>
        ${e?"":'<div class="tl-line"></div>'}
      </div>
      <div class="tl-icon tl-icon--${o}" aria-hidden="true">${f}</div>
      <div class="tl-details">
        <div class="tl-title">${c}</div>
        <div class="tl-meta">${me(d)}${p}</div>
      </div>
      <div class="tl-right">
        <div class="tl-amount tl-amount--${o}">${h}</div>
      </div>
    </div>
  `}function iP(n,t=[]){let e=0,i=0;t.forEach(a=>{a.type==="INCOME"?e+=Number(a.amount)||0:a.type==="EXPENSE"&&(i+=Number(a.amount)||0)});const s=tP(n),r=`+${U(e)}`,o=`-${U(i)}`;return`
    <div class="tl-group-header">
      <span class="tl-group-label">${s}</span>
      <div class="tl-group-totals" style="display: flex; align-items: center; gap: 12px; font-weight: var(--fw-bold, 700); font-size: var(--fs-sm, 0.875rem);">
        <span class="tl-group-added" style="color: var(--income, #10b981);">${r}</span>
        <span class="tl-group-expense" style="color: var(--expense, #ef4444);">${o}</span>
      </div>
    </div>
  `}function kr(n,t={}){if(!n||n.length===0)return"";const{accounts:e=[]}=t,i={},s=[];n.forEach(o=>{const a=o.date||"unknown";i[a]||(i[a]=[],s.push(a)),i[a].push(o)});let r='<div class="tl-container">';return s.forEach(o=>{const a=i[o];r+=iP(o,a),r+='<div class="tl-group">',a.forEach((c,l)=>{r+=nP(c,e,l===a.length-1)}),r+="</div>"}),r+="</div>",r}function Vb(n="No transactions yet",t="Start tracking your money by adding your first transaction."){return`
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">${n}</h3>
      <p class="empty-state-text">${t}</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `}function sP(){return`
    <div class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <h3 class="empty-state-title">No results found</h3>
      <p class="empty-state-text">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  `}function Pl(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📅</span>
      <h3 class="empty-state-title">No transactions on this date</h3>
      <p class="empty-state-text">There are no transactions recorded for the selected date.</p>
    </div>
  `}function rP(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `}let va=null;function Yt(n){kt();const t=document.getElementById("modal-root");if(!t)return;const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`
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
  `,t.appendChild(e),document.body.classList.add("no-scroll"),va={element:e,onClose:n.onClose};const i=e.querySelector("#modal-close-btn");i&&i.addEventListener("click",kt),e.addEventListener("click",r=>{r.target===e&&kt()});const s=r=>{r.key==="Escape"&&(kt(),document.removeEventListener("keydown",s))};return document.addEventListener("keydown",s),n.onOpen&&requestAnimationFrame(()=>n.onOpen(e)),e}function kt(){if(!va)return;const{element:n,onClose:t}=va;n.classList.add("closing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),document.body.classList.remove("no-scroll"),t&&t()},200),va=null}function ci(n){return new Promise(t=>{const e=`
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
    `;Yt({content:e,hideHeader:!0,onOpen:i=>{i.querySelector("#confirm-cancel").addEventListener("click",()=>{kt(),t(!1)}),i.querySelector("#confirm-ok").addEventListener("click",()=>{kt(),t(!0)})},onClose:()=>t(!1)})})}function Wr(){return Ne||Fd()}async function oP(n,t){if(!n)return null;const e=Number(t.amount),i=new Date,s=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,r=Ft(Wr(),"users",n,"friendMoney"),o={friendName:(t.friendName||"").trim(),amount:e,type:t.type,reason:(t.reason||"").trim(),date:t.date||s,createdAt:i.toISOString(),returnedAmount:0,remainingAmount:e,status:"pending",accountId:t.accountId||"",repayments:[]},a=await oi(r,o),c=Ft(Wr(),"users",n,"transactions");return t.type==="GAVE"?await oi(c,{type:"EXPENSE",amount:e,date:s,reason:`Friend Money: Gave to ${o.friendName}`,category:"Friend Money",notes:o.reason||"",sourceAccountId:t.accountId,isFriendMoney:!0,friendMoneyId:a.id,createdAt:i.toISOString()}):t.type==="BORROWED"&&await oi(c,{type:"INCOME",amount:e,date:s,reason:`Friend Money: Borrowed from ${o.friendName}`,category:"Friend Money",notes:o.reason||"",destinationAccountId:t.accountId,isFriendMoney:!0,friendMoneyId:a.id,createdAt:i.toISOString()}),a.id}async function aP(n,t,e,i,s){if(!n||!t)return;const r=Number(e),o=new Date,a=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`,c=(Number(s.returnedAmount)||0)+r,l=Number(s.amount)-c,d=l<=0,h=[...s.repayments||[],{amount:r,date:a,createdAt:o.toISOString()}],f=gt(Wr(),"users",n,"friendMoney",t);await ke(f,{returnedAmount:c,remainingAmount:Math.max(0,l),status:d?"settled":"pending",repayments:h});const p=Ft(Wr(),"users",n,"transactions");s.type==="GAVE"?await oi(p,{type:"INCOME",amount:r,date:a,reason:`Friend Money: ${s.friendName} returned`,category:"Friend Money",notes:"",destinationAccountId:i||s.accountId,isFriendMoney:!0,friendMoneyId:t,createdAt:o.toISOString()}):s.type==="BORROWED"&&await oi(p,{type:"EXPENSE",amount:r,date:a,reason:`Friend Money: Returned to ${s.friendName}`,category:"Friend Money",notes:"",sourceAccountId:i||s.accountId,isFriendMoney:!0,friendMoneyId:t,createdAt:o.toISOString()})}function cP(n,t){if(!n)return t([]),()=>{};const e=Ft(Wr(),"users",n,"friendMoney"),i=$s(e,Us("createdAt","desc"));return Lc(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Friend money subscription error:",s),t([],s)})}function Fb(n){let t=0,e=0,i=0,s=0;return(n||[]).forEach(r=>{r.status==="pending"?(i++,r.type==="GAVE"?t+=Number(r.remainingAmount)||0:r.type==="BORROWED"&&(e+=Number(r.remainingAmount)||0)):s++}),{theyOweMe:t,iOwe:e,pendingCount:i,settledCount:s}}let vt={user:null,profile:null,accounts:[],transactions:[],budgets:[]};function Yp(n){vt={...vt,...n};const{profile:t,accounts:e,transactions:i}=vt;if(vt.dashboardError)return`
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
    `;const s=t!=null&&t.name?t.name.split(" ")[0]:"User",{balances:r,totalMoney:o}=go(e,i),a=vt.hideBalance||!1,c=Vn(),l=Bd(i,c),d=i.filter(p=>p.date===c).slice(0,5),h=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,f=fk(vt.budgets,i,h);return`
    <div class="page animate-fade-in dashboard-page">
      <!-- 1. Greeting + current date -->
      <div class="greeting">
        <h1 class="greeting-text">Good ${WS().replace("Good ","")}, ${s} 👋</h1>
        <p class="greeting-date">${KS()}</p>
      </div>

      <!-- Budget Alert Banner if any -->
      ${f.length>0?`
        <div style="margin-bottom: var(--space-4);">
          ${f.map(p=>`
            <div class="alert-banner alert-banner-${p.type}">
              <span class="alert-banner-icon">${p.icon}</span>
              <div class="alert-banner-text">
                <strong>${p.title}:</strong> ${p.message}
              </div>
            </div>
          `).join("")}
        </div>
      `:""}

      <!-- 2. Total Money card -->
      <div class="balance-card balance-card-interactive" id="dashboard-total-money-card" tabindex="0" role="button" aria-label="View Total Money History">
        <div class="balance-label">
          💰 TOTAL MONEY
          <button class="balance-eye-btn" id="btn-toggle-balance-visibility" title="${a?"Show balance":"Hide balance"}" style="margin-left: 8px; background: none; border: none; cursor: pointer; font-size: 1rem; opacity: 0.7; vertical-align: middle;">
            ${a?"🙈":"👁️"}
          </button>
        </div>
        <div class="balance-amount ${a?"balance-hidden":""}" id="dashboard-total-balance">
          ${a?'<span class="balance-mask">₹••••••</span>':U(o)}
        </div>
        <div class="balance-subtitle">Across ${e.length} account${e.length===1?"":"s"}</div>
      </div>


      <!-- 3. Accounts section -->
      <div class="section accounts-section">
        <div class="section-header">
          <h2 class="section-title-sm">ACCOUNTS</h2>
          <span class="section-link" id="link-manage-accounts">View All →</span>
        </div>
        <div class="account-rows-container card card-flat">
          ${e.length>0?e.map(p=>{const y=r[p.id]||0;return`
              <div class="account-compact-row" data-account-id="${p.id}" style="cursor: pointer;">
                <div class="account-row-left">
                  <span class="account-row-icon">${p.icon||"🏦"}</span>
                  <span class="account-row-name">${p.name}</span>
                </div>
                <div class="account-row-balance ${a?"balance-hidden":""}">
                  ${a?'<span class="balance-mask">₹••••••</span>':U(y)}
                </div>
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
            <div class="today-card-amount income">${U(l.added)}</div>
          </div>
          <div class="today-card expense">
            <div class="today-card-header">
              <span class="today-card-icon">🔴</span>
              <span class="today-card-label">Spent</span>
            </div>
            <div class="today-card-amount expense">${U(l.spent)}</div>
          </div>
        </div>
      </div>


      <!-- 5b. Friends Money Summary Card -->
      ${lP(vt.friendMoneyRecords)}

      <!-- 6. Today Activity -->
      <div class="section recent-transactions">
        <div class="section-header">
          <h2 class="section-title-sm">TODAY ACTIVITY</h2>
          ${i.length>0?`
            <span class="section-link" id="link-view-all-tx">View All →</span>
          `:""}
        </div>

        <div class="card card-flat recent-tx-card">
          ${d.length>0?kr(d,{accounts:vt.accounts}):Vb("No transactions today","Transactions added today will appear here. View full history in Txns.")}
        </div>
      </div>
    </div>
  `}function lP(n){const t=Fb(n||[]);return t.theyOweMe===0&&t.iOwe===0&&t.pendingCount===0&&t.settledCount===0?"":`
    <div class="section">
      <div class="fm-dashboard-card" id="dashboard-friends-money-card" tabindex="0" role="button" aria-label="View Friends Money">
        <div class="fm-dashboard-header">
          <div class="fm-dashboard-title">🤝 Friends Money</div>
        </div>
        <div class="fm-dashboard-stats">
          <div class="fm-dashboard-stat">
            <div class="fm-dashboard-stat-label">They Owe Me</div>
            <div class="fm-dashboard-stat-value green">${U(t.theyOweMe)}</div>
          </div>
          <div class="fm-dashboard-stat">
            <div class="fm-dashboard-stat-label">I Owe</div>
            <div class="fm-dashboard-stat-value purple">${U(t.iOwe)}</div>
          </div>
        </div>
      </div>
    </div>
  `}function Xp(n,t){const e=document.getElementById("btn-retry-dashboard");e&&(e.onclick=()=>{e.disabled=!0,e.innerHTML='<span class="spinner"></span> Loading...',t&&t()});const i=document.getElementById("btn-toggle-balance-visibility");if(i){let h=null;i.onclick=f=>{f.stopPropagation();const p=document.getElementById("dashboard-total-balance");if(p==null?void 0:p.classList.contains("balance-hidden")){const{totalMoney:_,balances:v}=go(vt.accounts,vt.transactions);p&&(p.classList.remove("balance-hidden"),p.textContent=U(_)),i.textContent="👁️",i.title="Hide balance",document.querySelectorAll(".account-row-balance").forEach(I=>{var R;I.classList.remove("balance-hidden");const P=(R=I.closest("[data-account-id]"))==null?void 0:R.dataset.accountId;if(P){const N=v[P]||0;I.textContent=U(N)}}),vt.hideBalance&&(clearTimeout(h),h=setTimeout(()=>{p&&(p.classList.add("balance-hidden"),p.innerHTML='<span class="balance-mask">₹••••••</span>'),i.textContent="🙈",i.title="Show balance",document.querySelectorAll(".account-row-balance").forEach(I=>{I.classList.add("balance-hidden"),I.innerHTML='<span class="balance-mask">₹••••••</span>'})},5e3))}else clearTimeout(h),p&&(p.classList.add("balance-hidden"),p.innerHTML='<span class="balance-mask">₹••••••</span>'),i.textContent="🙈",i.title="Show balance",document.querySelectorAll(".account-row-balance").forEach(_=>{_.classList.add("balance-hidden"),_.innerHTML='<span class="balance-mask">₹••••••</span>'})}}const s=document.getElementById("dashboard-total-money-card");if(s){const h=()=>n("total-money-history");s.onclick=h,s.onkeydown=f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),h())}}const r=document.getElementById("empty-add-account-btn");r&&(r.onclick=()=>n("accounts"));const o=document.getElementById("dashboard-friends-money-card");if(o){const h=()=>n("friends-money");o.onclick=h,o.onkeydown=f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),h())}}document.querySelectorAll(".quick-nav-btn[data-page]").forEach(h=>{h.onclick=()=>n(h.dataset.page)});const a=document.getElementById("link-manage-accounts");a&&(a.onclick=()=>{window.appState&&(window.appState.selectedAccountId=null),n("accounts")});const c=document.querySelector(".account-rows-container");if(c){const h=f=>{const p=f.target.closest("[data-account-id]");if(!p)return;const y=p.dataset.accountId;y&&(window.appState&&(window.appState.selectedAccountId=y,window.appState.accountOriginPage="dashboard"),n("accounts"))};c.onclick=h}const l=document.getElementById("link-view-all-tx");l&&(l.onclick=()=>n("transactions"));const d=document.getElementById("empty-add-money-btn");d&&(d.onclick=()=>bu("INCOME",t)),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(h=>{h.onclick=f=>{f.stopPropagation();const p=h.dataset.action,y=h.dataset.txId,_=vt.transactions.find(v=>v.id===y);_&&(p==="edit"?_.type==="TRANSFER"?$b(_,t):Bb(_,t):p==="delete"&&Ub(_,t))}})}function bu(n="INCOME",t){const e=n==="INCOME",i=e?Vc:js,s=vt.accounts,r=Vn(),o=rb();if(!Ib()){z.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const a=`
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
        <label class="form-label" for="tx-reason">
          Reason${e?' <span style="font-weight:400;color:var(--text-secondary);font-size:0.85em;">(Optional)</span>':' <span style="color:var(--danger);" aria-hidden="true">*</span>'}
        </label>
        <input type="text" id="tx-reason" class="form-input" placeholder="${e?"e.g. Monthly Salary":"e.g. Lunch with friends"}" />
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
  `;Yt({title:e?"💰 Add Money":"💸 Add Expense",content:a,onOpen:c=>{const l=c.querySelector("#tx-modal-form"),d=c.querySelector("#tx-amount"),h=c.querySelector("#tx-account"),f=c.querySelector("#tx-insufficient-warning"),p=c.querySelector("#tx-insufficient-text"),y=()=>{var k,V;if(e)return;const _=h.value,v=Number(d.value)||0;if(!_||v<=0){f.style.display="none";return}const I=s.find(E=>E.id===_),{balances:P}=Mn(s,vt.transactions),R=P[_]||0,N=(V=(k=vt.profile)==null?void 0:k.settings)==null?void 0:V.allowNegativeBalance;v>R&&!N?(p.textContent=`⚠️ Insufficient Balance! Available in ${(I==null?void 0:I.name)||"account"}: ${U(R)}`,f.style.display="flex"):f.style.display="none"};d.oninput=y,h.onchange=y,l.onsubmit=async _=>{var A,S;_.preventDefault();const v=d.value,I=h.value,P=c.querySelector("#tx-date").value,R=c.querySelector("#tx-reason").value,N=c.querySelector("#tx-category").value,k=c.querySelector("#tx-notes").value;c.querySelector("#tx-amount-error").textContent="",c.querySelector("#tx-account-error").textContent="",c.querySelector("#tx-reason-error").textContent="",c.querySelector("#tx-category-error").textContent="";const V=Xd(P);if(V){z.error(V);return}let E=!0;const b=Nb({amount:v,date:P,category:N},!0);if(b.isValid||(b.errors.amount&&(c.querySelector("#tx-amount-error").textContent=b.errors.amount),b.errors.category&&(c.querySelector("#tx-category-error").textContent=b.errors.category),E=!1),!e&&!R.trim()&&(c.querySelector("#tx-reason-error").textContent="Reason is required for expenses.",E=!1),I||(c.querySelector("#tx-account-error").textContent="Please select an account.",E=!1),!E)return;if(!e){const C=s.find(ut=>ut.id===I),{balances:x}=Mn(s,vt.transactions),Y=x[I]||0,K=(S=(A=vt.profile)==null?void 0:A.settings)==null?void 0:S.allowNegativeBalance;if(Number(v)>Y&&!K){p.textContent=`⚠️ Insufficient Balance! Available in ${C==null?void 0:C.name}: ${U(Y)}`,f.style.display="flex",z.warning(`⚠️ You only have ${U(Y)} available in ${C==null?void 0:C.name}.`);return}}const w=c.querySelector("#btn-save-tx");w.disabled=!0,w.innerHTML='<span class="spinner"></span> Saving...';try{const C=vt.user.uid,x={type:n,amount:Number(v),date:P,reason:R,category:N,notes:k};e?x.destinationAccountId=I:x.sourceAccountId=I,await wb(C,x),kt();const Y=s.find(K=>K.id===I);z.success(e?`💰 ${U(v)} added to ${(Y==null?void 0:Y.name)||"account"}!`:`💸 ${U(v)} spent from ${(Y==null?void 0:Y.name)||"account"}.`),t&&t()}catch(C){console.error("Error saving transaction:",C),z.error("Unable to save transaction."),w.disabled=!1,w.innerHTML=e?"💰 Add Money":"💸 Save Expense"}}}})}function uP(n){const t=vt.accounts,e=Vn(),i=rb();if(!Ib()){z.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const s=`
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
        <label class="form-label" for="tr-reason">Reason / Description (Optional)</label>
        <input type="text" id="tr-reason" class="form-input" placeholder="e.g. ATM Withdrawal, Moving to Savings" />
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
  `;Yt({title:"🔄 Transfer Money Between Accounts",content:s,onOpen:r=>{const o=r.querySelector("#transfer-modal-form"),a=r.querySelector("#tr-amount"),c=r.querySelector("#tr-from"),l=r.querySelector("#tr-insufficient-warning"),d=r.querySelector("#tr-insufficient-text"),h=()=>{const f=c.value,p=Number(a.value)||0;if(!f||p<=0){l.style.display="none";return}const{balances:y}=Mn(t,vt.transactions),_=y[f]||0,v=t.find(I=>I.id===f);p>_?(d.textContent=`⚠️ Insufficient Balance! Available in ${v==null?void 0:v.name}: ${U(_)}`,l.style.display="flex"):l.style.display="none"};a.oninput=h,c.onchange=h,o.onsubmit=async f=>{f.preventDefault();const p=a.value,y=c.value,_=r.querySelector("#tr-to").value,v=r.querySelector("#tr-date").value,I=r.querySelector("#tr-reason").value,P=r.querySelector("#tr-notes").value,R=Xd(v);if(R){z.error(R);return}r.querySelector("#tr-amount-error").textContent="",r.querySelector("#tr-from-error").textContent="",r.querySelector("#tr-to-error").textContent="",r.querySelector("#tr-reason-error").textContent="";let N=!0;const k=yo(p);if(k&&(r.querySelector("#tr-amount-error").textContent=k,N=!1),y||(r.querySelector("#tr-from-error").textContent="Select source account.",N=!1),_||(r.querySelector("#tr-to-error").textContent="Select destination account.",N=!1),y&&_&&y===_&&(r.querySelector("#tr-to-error").textContent="From and To accounts cannot be the same!",N=!1),!N)return;const{balances:V}=Mn(t,vt.transactions),E=V[y]||0,b=t.find(S=>S.id===y),w=t.find(S=>S.id===_);if(Number(p)>E){d.textContent=`⚠️ Insufficient Balance! Available in ${b==null?void 0:b.name}: ${U(E)}`,l.style.display="flex",z.warning(`⚠️ You only have ${U(E)} available in ${b==null?void 0:b.name}.`);return}const A=r.querySelector("#btn-save-transfer");A.disabled=!0,A.innerHTML='<span class="spinner"></span> Transferring...';try{const S=vt.user.uid;await wb(S,{type:"TRANSFER",amount:Number(p),date:v,reason:I,category:"Transfer",sourceAccountId:y,destinationAccountId:_,notes:P}),kt(),z.success(`🔄 Transferred ${U(p)} from ${b==null?void 0:b.name} to ${w==null?void 0:w.name}!`),n&&n()}catch(S){console.error("Error saving transfer:",S),z.error("Unable to complete transfer."),A.disabled=!1,A.innerHTML="🔄 Transfer Money"}}}})}function Bb(n,t){const e=n.type==="INCOME",i=e?Vc:js,s=vt.accounts,r=`
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
          📅 ${an(n.date)}
          <span class="date-lock-badge">🔒 Locked</span>
        </div>
        <input type="hidden" id="edit-tx-date" value="${n.date}" />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-reason">
          Reason${e?' <span style="font-weight:400;color:var(--text-secondary);font-size:0.85em;">(Optional)</span>':' <span style="color:var(--danger);" aria-hidden="true">*</span>'}
        </label>
        <input type="text" id="edit-tx-reason" class="form-input" value="${n.reason||""}" />
        <div class="form-error" id="edit-tx-reason-error"></div>
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
  `;Yt({title:"✏️ Edit Transaction",content:r,onOpen:o=>{o.querySelector("#edit-tx-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#edit-tx-amount").value,l=o.querySelector("#edit-tx-account").value,d=o.querySelector("#edit-tx-date").value,h=o.querySelector("#edit-tx-reason").value,f=o.querySelector("#edit-tx-category").value,p=o.querySelector("#edit-tx-notes").value,y=o.querySelector("#edit-tx-reason-error");if(y&&(y.textContent=""),!Nb({amount:c,date:d,category:f},!1).isValid)return;if(!e&&!h.trim()){y&&(y.textContent="Reason is required for expenses.");return}const v=o.querySelector("#btn-update-tx");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Updating...';try{const I=vt.user.uid,P={amount:Number(c),date:d,reason:h,category:f,notes:p};e?P.destinationAccountId=l:P.sourceAccountId=l,await jd(I,n.id,P),kt(),z.success("✅ Transaction updated!"),t&&t()}catch{z.error("Unable to update transaction."),v.disabled=!1,v.innerHTML="✅ Update Transaction"}}}})}function $b(n,t){const e=vt.accounts,i=`
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
          📅 ${an(n.date)}
          <span class="date-lock-badge">🔒 Locked</span>
        </div>
        <input type="hidden" id="edit-tr-date" value="${n.date}" />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tr-reason">Reason (Optional)</label>
        <input type="text" id="edit-tr-reason" class="form-input" value="${n.reason||""}" />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tr-notes">Notes (Optional)</label>
        <textarea id="edit-tr-notes" class="form-textarea">${n.notes||""}</textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-update-tr">
        ✅ Update Transfer
      </button>
    </form>
  `;Yt({title:"✏️ Edit Transfer",content:i,onOpen:s=>{s.querySelector("#edit-tr-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-tr-amount").value,a=s.querySelector("#edit-tr-from").value,c=s.querySelector("#edit-tr-to").value,l=s.querySelector("#edit-tr-date").value,d=s.querySelector("#edit-tr-reason").value,h=s.querySelector("#edit-tr-notes").value;if(a===c){z.error("From and To accounts cannot be the same!");return}const f=s.querySelector("#btn-update-tr");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Updating...';try{const p=vt.user.uid;await jd(p,n.id,{amount:Number(o),date:l,reason:d,sourceAccountId:a,destinationAccountId:c,notes:h}),kt(),z.success("✅ Transfer updated!"),t&&t()}catch{z.error("Unable to update transfer."),f.disabled=!1,f.innerHTML="✅ Update Transfer"}}}})}async function Ub(n,t){const e=n.type==="TRANSFER";if(await ci({icon:"🗑️",title:e?"Delete Transfer":"Delete Transaction",message:e?"Are you sure you want to delete this transfer? Both source and destination account balances will be restored.":"Are you sure you want to delete this transaction? Your account balances will automatically adjust.",confirmText:"Delete",danger:!0}))try{const s=vt.user.uid;await nk(s,n.id),z.success("🗑️ Transaction deleted!"),t&&t()}catch{z.error("Unable to delete transaction.")}}let xt={user:null,profile:null,accounts:[],transactions:[],selectedAccountId:null};function dP(n){xt={...xt,...n};const{accounts:t,transactions:e,selectedAccountId:i}=xt;if(i){const a=t.find(c=>c.id===i);if(a)return hP(a,e)}const{balances:s,totalMoney:r}=Mn(t,e),o=xt.hideBalance||!1;return`
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
        <div style="display:flex; align-items: center; justify-content: space-between;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Total Money Across All Accounts</div>
          ${o?'<button id="btn-accounts-reveal-balance" style="background:none;border:none;cursor:pointer;font-size:1rem;opacity:0.7;" title="Temporarily reveal balances">🙈</button>':""}
        </div>
        <div id="accounts-total-balance" style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: var(--primary); margin-top: 4px;" class="${o?"balance-hidden":""}">
          ${o?'<span class="balance-mask">₹••••••</span>':U(r)}
        </div>
      </div>

      <!-- Account Cards Grid -->
      <div class="accounts-page-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
        ${t.map(a=>{const c=s[a.id]||0;return`
            <div class="card hover-lift account-card-item" style="cursor: pointer; position: relative; touch-action: manipulation; -webkit-tap-highlight-color: rgba(108, 99, 255, 0.15); user-select: none;" data-account-id="${a.id}">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="font-size: 1.8rem; width: 44px; height: 44px; border-radius: 12px; background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center;">
                    ${a.icon||"💰"}
                  </div>
                  <div>
                    <div style="font-weight: var(--fw-bold); font-size: var(--fs-md);">${a.name}</div>
                    <div style="font-size: var(--fs-xs); color: var(--text-secondary);">${a.type} ${a.last4Digits?`(••${a.last4Digits})`:""}</div>
                  </div>
                </div>
              </div>
              <div class="acc-card-balance ${o?"balance-hidden":""}" style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: ${c<0?"var(--expense)":"var(--text-primary)"};"
                   data-balance="${c}">
                ${o?'<span class="balance-mask">₹••••••</span>':U(c)}
              </div>
              <div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-top: 4px;">
                Initial: ${U(a.initialBalance||0)}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function hP(n,t){const e=Gn(n,t,xt.accounts),i=xt.hideBalance||!1;return`
    <div class="page animate-fade-in account-details-page">
      <!-- Back button & Action buttons -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: var(--space-4);">
        <button class="btn btn-ghost btn-sm" id="btn-back-to-accounts" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: var(--text-secondary); cursor: pointer; border: none; background: transparent; padding: 6px 0; font-size: 0.9375rem;">
          ← Back
        </button>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn btn-outline btn-sm" id="btn-edit-account" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
            ✏️ Edit Account
          </button>
          <button class="btn btn-danger btn-sm" id="btn-delete-account" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600;">
            🗑️ Delete Account
          </button>
        </div>
      </div>

      <!-- Account Header & Current Balance -->
      <div class="card card-glass" style="margin-bottom: var(--space-5); padding: 24px; text-align: center; border-radius: var(--radius-2xl);">
        <div style="font-size: 3rem; margin-bottom: 8px;">${n.icon||"🏦"}</div>
        <h1 style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: var(--text-primary); margin-bottom: 4px;">
          ${n.name}
        </h1>
        ${n.type?`<div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-bottom: 12px;">${n.type} ${n.last4Digits?`(••${n.last4Digits})`:""}</div>`:""}
        ${n.notes?`<div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 12px; font-style: italic;">"${n.notes}"</div>`:""}
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 4px;">
          Current Balance
          ${i?'<button id="btn-account-details-reveal-balance" style="background:none;border:none;cursor:pointer;font-size:1rem;opacity:0.7;" title="Temporarily reveal balance">🙈</button>':""}
        </div>
        <div id="account-details-balance" class="${i?"balance-hidden":""}" style="font-size: var(--fs-3xl); font-weight: 900; color: ${e.balance<0?"var(--expense)":"var(--text-primary)"}; margin-top: 4px; letter-spacing: -0.02em;">
          ${i?'<span class="balance-mask">₹••••••</span>':U(e.balance)}
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
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--income);">${U(e.totalAdded)}</div>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Money Spent</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--expense);">${U(e.totalSpent)}</div>
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
            ${e.history.map(s=>fP(s)).join("")}
          </div>
        `:`
          <div class="card card-flat" style="padding: 36px 16px; text-align: center; color: var(--text-tertiary);">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📜</div>
            <div style="font-size: var(--fs-sm); font-weight: 500;">No transaction history for this account yet.</div>
          </div>
        `}
      </div>
    </div>
  `}function fP(n,t){let e=n.reason||n.category||n.typeLabel;n.type==="TRANSFER"&&(n.displayType==="TRANSFER_IN"?e=n.reason?n.reason:n.transferAccountName?`Transfer from ${n.transferAccountName}`:"Transfer Received":n.displayType==="TRANSFER_OUT"&&(e=n.reason?n.reason:n.transferAccountName?`Transfer to ${n.transferAccountName}`:"Transferred"));const i=an(n.date),s=n.createdAt?Ja(n.createdAt):"";return`
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
          <span style="font-weight: 600; color: var(--text-primary);">${U(n.previousBalance)}</span>
        </div>

        <!-- Transaction Action (Expense / Money Added / Transferred) -->
        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); margin-bottom: 8px;">
          <span>${n.actionLabel}</span>
          <span style="font-weight: 700; color: ${n.amountColor};">${n.amountSign}${U(n.amount)}</span>
        </div>

        <!-- Divider Line -->
        <div style="border-top: 1px dashed var(--border-color); margin: 6px 0 8px 0;"></div>

        <!-- Balance After (Remaining Balance / Current Balance) -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-weight: 700;">
          <span style="color: var(--text-primary);">${n.resultLabel}</span>
          <span style="font-size: 0.9375rem; color: ${n.balanceAfter<0?"var(--expense)":"var(--income)"}; font-weight: 800;">${U(n.balanceAfter)}</span>
        </div>

      </div>

      <!-- Card Footer: Type & Timestamp -->
      <div style="font-size: 0.75rem; color: var(--text-tertiary); display: flex; align-items: center; gap: 6px;">
        <span>${n.typeLabel}</span>
        <span>•</span>
        <span>${i}${s?` at ${s}`:""}</span>
      </div>

    </div>
  `}function pP(n){const t=document.getElementById("btn-back-to-accounts");if(t){t.onclick=()=>{var l;const c=(l=window.appState)==null?void 0:l.accountOriginPage;xt.selectedAccountId=null,window.appState&&(window.appState.selectedAccountId=null,window.appState.accountOriginPage=null),c==="dashboard"&&(window.appState&&(window.appState.activePage="dashboard"),window.location.hash="#/dashboard"),n&&n()};const r=document.getElementById("btn-edit-account");r&&(r.onclick=()=>{const c=xt.accounts.find(d=>d.id===xt.selectedAccountId);if(!c)return;const l=Gn(c,xt.transactions,xt.accounts);gP(c,l.balance,n)});const o=document.getElementById("btn-delete-account");o&&(o.onclick=async()=>{const c=xt.accounts.find(d=>d.id===xt.selectedAccountId);if(!c)return;if(await ci({icon:"🗑️",title:"Delete this account?",message:"All account-related transaction history may also be affected. This action cannot be undone.",cancelText:"Cancel",confirmText:"Delete",danger:!0}))try{await tk(xt.user.uid,c.id),xt.selectedAccountId=null,window.appState&&(window.appState.selectedAccountId=null,window.appState.accountOriginPage=null),z.success(`Account "${c.name}" deleted successfully.`),n&&n()}catch(d){console.error("Error deleting account:",d),z.error("Failed to delete account. Please try again.")}});const a=document.getElementById("btn-account-details-reveal-balance");a&&(a.onclick=()=>{const c=document.getElementById("account-details-balance");if(!c)return;const l=xt.accounts.find(h=>h.id===xt.selectedAccountId);if(!l)return;const d=Gn(l,xt.transactions,xt.accounts);c.classList.contains("balance-hidden")?(c.classList.remove("balance-hidden"),c.textContent=U(d.balance),a.textContent="👁️",setTimeout(()=>{c.classList.add("balance-hidden"),c.innerHTML='<span class="balance-mask">₹••••••</span>',a.textContent="🙈"},5e3)):(c.classList.add("balance-hidden"),c.innerHTML='<span class="balance-mask">₹••••••</span>',a.textContent="🙈")});return}const e=document.getElementById("btn-accounts-reveal-balance");e&&(e.onclick=()=>{const r=document.getElementById("accounts-total-balance"),o=document.querySelectorAll(".acc-card-balance");if(r==null?void 0:r.classList.contains("balance-hidden")){if(r){const{totalMoney:c}=Mn(xt.accounts,xt.transactions);r.classList.remove("balance-hidden"),r.textContent=U(c)}o.forEach(c=>{c.classList.remove("balance-hidden");const l=Number(c.dataset.balance)||0;c.textContent=U(l)}),e.textContent="👁️",setTimeout(()=>{r&&(r.classList.add("balance-hidden"),r.innerHTML='<span class="balance-mask">₹••••••</span>'),o.forEach(c=>{c.classList.add("balance-hidden"),c.innerHTML='<span class="balance-mask">₹••••••</span>'}),e.textContent="🙈"},5e3)}else r&&(r.classList.add("balance-hidden"),r.innerHTML='<span class="balance-mask">₹••••••</span>'),o.forEach(c=>{c.classList.add("balance-hidden"),c.innerHTML='<span class="balance-mask">₹••••••</span>'}),e.textContent="🙈"});const i=document.getElementById("btn-add-account-modal");i&&(i.onclick=()=>mP(n));const s=document.querySelector(".accounts-page-grid")||document.querySelector(".page");s&&(s.onclick=r=>{const o=r.target.closest("[data-account-id]");if(!o||r.target.closest("button, a, input, select"))return;const a=o.dataset.accountId;a&&(xt.selectedAccountId=a,window.appState&&(window.appState.selectedAccountId=a),n&&n())})}function mP(n){Yt({title:"🏦 Add New Account",content:`
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
  `,onOpen:e=>{e.querySelector("#add-account-form").onsubmit=async i=>{i.preventDefault();const s=e.querySelector("#acc-name").value,r=e.querySelector("#acc-type").value,o=e.querySelector("#acc-initial").value,a=e.querySelector("#acc-last4").value,c=Bc(s),l=yo(o);if(c){e.querySelector("#acc-name-error").textContent=c;return}if(l){e.querySelector("#acc-initial-error").textContent=l;return}const d=e.querySelector("#btn-save-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Creating...';try{await yb(xt.user.uid,{name:s,type:r,initialBalance:Number(o),last4Digits:a}),kt(),z.success(`🏦 ${s} account created!`),n&&n()}catch{z.error("Unable to create account."),d.disabled=!1,d.innerHTML="Create Account"}}}})}function gP(n,t,e){const i=`
    <form id="edit-account-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="edit-acc-name">Account Name</label>
        <input type="text" id="edit-acc-name" class="form-input" value="${n.name||""}" placeholder="e.g. SBI Savings, GPay, Cash" required autofocus />
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
        <label class="form-label" for="edit-acc-icon">Account Icon</label>
        <input type="text" id="edit-acc-icon" class="form-input" value="${n.icon||"🏦"}" placeholder="e.g. 🏦, 💵, 📱, 💳" required />
        <div class="form-error" id="edit-acc-icon-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label">Current Balance 🔒</label>
        <div style="background: var(--bg-tertiary); padding: 12px 14px; border-radius: var(--radius-lg); font-weight: 800; font-size: 1.1rem; color: ${t<0?"var(--expense)":"var(--income)"}; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between;">
          <span>${U(t)}</span>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 700; letter-spacing: 0.05em; background: rgba(255,255,255,0.06); padding: 4px 8px; border-radius: 6px;">READ-ONLY 🔒</span>
        </div>
        <div style="font-size: 0.75rem; color: var(--text-tertiary); margin-top: 6px;">
          Current balance is calculated automatically from transactions and cannot be changed manually.
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-notes">Notes / Description (Optional)</label>
        <textarea id="edit-acc-notes" class="form-input" rows="2" style="resize: vertical;" placeholder="Add notes about this account...">${n.notes||""}</textarea>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-last4">Last 4 Digits (Optional)</label>
        <input type="text" id="edit-acc-last4" class="form-input" value="${n.last4Digits||""}" placeholder="e.g. 4321" maxlength="4" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-edit-account">
        Save Changes
      </button>
    </form>
  `;Yt({title:"✏️ Edit Account",content:i,onOpen:s=>{s.querySelector("#edit-account-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-acc-name").value,a=s.querySelector("#edit-acc-type").value,c=s.querySelector("#edit-acc-icon").value,l=s.querySelector("#edit-acc-notes").value,d=s.querySelector("#edit-acc-last4").value,h=Bc(o);if(h){s.querySelector("#edit-acc-name-error").textContent=h;return}const f=s.querySelector("#btn-save-edit-account");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{await ZS(xt.user.uid,n.id,{name:o,type:a,icon:c,notes:l,last4Digits:d,bankName:n.bankName||"",initialBalance:n.initialBalance}),kt(),z.success("Account details updated!"),e&&e()}catch(p){console.error("Error updating account:",p),z.error("Unable to update account."),f.disabled=!1,f.innerHTML="Save Changes"}}}})}let Se={user:null,profile:null,accounts:[],transactions:[]},nt={searchQuery:"",typeFilter:"ALL",accountFilter:"ALL",dateFilter:"ALL",customDate:"",categoryFilter:"ALL"};function zb(n){Se={...Se,...n};const t=Hb(),e=[...js.map(i=>i.value),...Vc.map(i=>i.value)];return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">All Activity 📜</h1>
        <p class="page-subtitle">Search, filter, edit, or delete transactions and account transfers.</p>
      </div>

      <!-- Search & Filters Bar -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        <!-- Search Input -->
        <div class="form-group search-bar" style="margin-bottom: var(--space-3);">
          <span class="search-icon">🔍</span>
          <input type="text" id="tx-search-input" class="form-input" placeholder="Search by reason, category, account, or notes..." value="${nt.searchQuery}" />
          <button class="search-clear ${nt.searchQuery?"visible":""}" id="tx-search-clear">✕</button>
        </div>

        <!-- Filter Chips: Type -->
        <div class="chips-scroll" style="margin-bottom: var(--space-3);">
          <button class="chip ${nt.typeFilter==="ALL"?"active":""}" data-filter-type="ALL">All (${Se.transactions.length})</button>
          <button class="chip chip-income ${nt.typeFilter==="INCOME"?"active":""}" data-filter-type="INCOME">🟢 Money Added</button>
          <button class="chip chip-expense ${nt.typeFilter==="EXPENSE"?"active":""}" data-filter-type="EXPENSE">🔴 Expenses</button>
          <button class="chip ${nt.typeFilter==="TRANSFER"?"active":""}" data-filter-type="TRANSFER" style="${nt.typeFilter==="TRANSFER"?"background: var(--primary); color: white;":""}">🔄 Transfers</button>
        </div>

        <!-- Dropdowns: Account, Category, & Date Filters -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <select id="tx-account-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Accounts</option>
            ${Se.accounts.map(i=>`
              <option value="${i.id}" ${nt.accountFilter===i.id?"selected":""}>${i.icon||"🏦"} ${i.name}</option>
            `).join("")}
          </select>

          <div class="chips-scroll" style="margin-bottom: 0;">
            <button class="chip ${nt.dateFilter==="ALL"?"active":""}" data-filter-date="ALL">All Time</button>
            <button class="chip ${nt.dateFilter==="TODAY"?"active":""}" data-filter-date="TODAY">Today</button>
            <button class="chip ${nt.dateFilter==="WEEK"?"active":""}" data-filter-date="WEEK">This Week</button>
            <button class="chip ${nt.dateFilter==="MONTH"?"active":""}" data-filter-date="MONTH">This Month</button>
            <button class="chip ${nt.dateFilter==="CUSTOM"?"active":""}" data-filter-date="CUSTOM">Custom Date</button>
          </div>

          ${nt.dateFilter==="CUSTOM"?`
            <input type="date" id="tx-custom-date" class="form-input" style="width: auto; min-height: 36px; padding: 4px 8px; font-size: 13px;" value="${nt.customDate}" />
          `:""}

          <select id="tx-category-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Categories</option>
            ${Array.from(new Set(e)).map(i=>`
              <option value="${i}" ${nt.categoryFilter===i?"selected":""}>${i}</option>
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
      <div class="card card-flat" style="padding: 0; overflow: hidden; border-radius: var(--radius-xl);" id="tx-list-container">
        ${jb(t)}
      </div>
    </div>
  `}function jb(n){return Se.transactions.length===0?Vb():n.length===0?sP():kr(n,{accounts:Se.accounts})}function Hb(){let n=[...Se.transactions];if(nt.searchQuery){const e=nt.searchQuery.toLowerCase();n=n.filter(i=>{const s=Se.accounts.find(o=>o.id===i.sourceAccountId),r=Se.accounts.find(o=>o.id===i.destinationAccountId);return i.reason&&i.reason.toLowerCase().includes(e)||i.category&&i.category.toLowerCase().includes(e)||i.notes&&i.notes.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)||r&&r.name.toLowerCase().includes(e)})}if(nt.typeFilter!=="ALL"&&(n=n.filter(e=>e.type===nt.typeFilter)),nt.accountFilter!=="ALL"){const e=nt.accountFilter;n=n.filter(i=>i.sourceAccountId===e||i.destinationAccountId===e)}const t=Vn();if(nt.dateFilter==="TODAY")n=n.filter(e=>e.date===t);else if(nt.dateFilter==="WEEK"){const{start:e,end:i}=ab(t);n=n.filter(s=>s.date>=e&&s.date<=i)}else if(nt.dateFilter==="MONTH"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;n=n.filter(i=>i.date&&i.date.startsWith(e))}else nt.dateFilter==="CUSTOM"&&nt.customDate&&(n=n.filter(e=>e.date===nt.customDate));return nt.categoryFilter!=="ALL"&&(n=n.filter(e=>e.category===nt.categoryFilter)),n}function qb(n){const t=()=>{const a=document.getElementById("tx-list-container");if(a){const c=Hb();a.innerHTML=jb(c),Qp(n)}},e=document.getElementById("tx-search-input"),i=document.getElementById("tx-search-clear");e&&(e.oninput=a=>{nt.searchQuery=a.target.value,i&&i.classList.toggle("visible",!!nt.searchQuery),t()}),i&&(i.onclick=()=>{nt.searchQuery="",e&&(e.value=""),i.classList.remove("visible"),t()}),document.querySelectorAll("[data-filter-type]").forEach(a=>{a.onclick=()=>{document.querySelectorAll("[data-filter-type]").forEach(c=>c.classList.remove("active")),a.classList.add("active"),nt.typeFilter=a.dataset.filterType,t()}});const s=document.getElementById("tx-account-filter");s&&(s.onchange=a=>{nt.accountFilter=a.target.value,t()}),document.querySelectorAll("[data-filter-date]").forEach(a=>{a.onclick=()=>{if(document.querySelectorAll("[data-filter-date]").forEach(c=>c.classList.remove("active")),a.classList.add("active"),nt.dateFilter=a.dataset.filterDate,nt.dateFilter==="CUSTOM"){const c=document.querySelector(".page");c&&(c.outerHTML=zb(Se),qb(n))}else t()}});const r=document.getElementById("tx-custom-date");r&&(r.onchange=a=>{nt.customDate=a.target.value,t()});const o=document.getElementById("tx-category-filter");o&&(o.onchange=a=>{nt.categoryFilter=a.target.value,t()}),Qp(n)}function Qp(n){const t=document.getElementById("tx-list-container");t&&t.querySelectorAll(".tl-row, .transaction-item").forEach(e=>{e.onclick=()=>{const i=e.dataset.txId,s=Se.transactions.find(r=>r.id===i);s&&yP(s,n)}})}function yP(n,t){const e=n.type||"EXPENSE",i=Se.accounts||[],s=e==="INCOME"?"Income":e==="EXPENSE"?"Expense":"Transfer",r=f=>i.map(p=>`
      <option value="${p.id}" ${f===p.id?"selected":""}>
        ${p.icon||"🏦"} ${me(p.name)}
      </option>
    `).join(""),o=(f,p)=>f==="TRANSFER"?'<option value="Transfer" selected>Transfer</option>':(f==="INCOME"?Vc:js).map(_=>`
      <option value="${_.value}" ${p===_.value?"selected":""}>
        ${me(_.label)}
      </option>
    `).join(""),a=f=>{var p;return f==="INCOME"?`
        <div class="form-group">
          <label class="form-label" for="details-tx-account">Account</label>
          <select id="details-tx-account" class="form-select" required>
            ${r(n.destinationAccountId||i[0]&&i[0].id)}
          </select>
        </div>
      `:f==="EXPENSE"?`
        <div class="form-group">
          <label class="form-label" for="details-tx-account">Account</label>
          <select id="details-tx-account" class="form-select" required>
            ${r(n.sourceAccountId||i[0]&&i[0].id)}
          </select>
        </div>
      `:`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="details-tx-from-account">From Account</label>
            <select id="details-tx-from-account" class="form-select" required>
              ${r(n.sourceAccountId||i[0]&&i[0].id)}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="details-tx-to-account">To Account</label>
            <select id="details-tx-to-account" class="form-select" required>
              ${r(n.destinationAccountId||(i[1]?i[1].id:(p=i[0])==null?void 0:p.id))}
            </select>
          </div>
        </div>
      `},c=n.type==="TRANSFER"?"↔":n.type==="INCOME"?"💰":Fc(n.category),l=sb(n),d=an(n.date),h=`
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
      <div style="width: 44px; height: 44px; border-radius: var(--radius-lg); background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center; font-size: 22px;">
        ${c}
      </div>
      <div>
        <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em;">Transaction</div>
        <div style="font-size: 1.125rem; font-weight: 800; color: var(--text-primary);">${me(n.reason||n.category||"Transaction")}</div>
      </div>
    </div>

    <form id="details-tx-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="details-tx-reason">Reason (Optional)</label>
        <input type="text" id="details-tx-reason" class="form-input" value="${me(n.reason||"")}" placeholder="Reason (Optional)" />
      </div>

      <div class="form-group">
        <label class="form-label">Type</label>
        <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); font-weight: 600; opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
          <span>${s}</span>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒</span>
        </div>
      </div>

      <div id="details-account-container">
        ${a(e)}
      </div>

      <div class="form-group">
        <label class="form-label" for="details-tx-category">Category</label>
        <select id="details-tx-category" class="form-select">
          ${o(e,n.category)}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Amount</label>
        <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); font-weight: 700; opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
          <span>${U(n.amount)}</span>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒 Read-only</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Date</label>
          <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
            <span>📅 ${d}</span>
            <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Time</label>
          <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
            <span>⏰ ${l}</span>
            <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒</span>
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button type="button" class="btn btn-outline" id="details-tx-cancel" style="flex: 1;">Cancel</button>
        <button type="submit" class="btn btn-primary" id="details-tx-save" style="flex: 1;">Save Changes</button>
      </div>
    </form>
  `;Yt({title:"Transaction Details",content:h,onOpen:f=>{const p=f.querySelector("#details-tx-category"),y=f.querySelector("#details-tx-cancel"),_=f.querySelector("#details-tx-form");y.onclick=()=>kt(),_.onsubmit=async v=>{var N;v.preventDefault();const I=f.querySelector("#details-tx-reason").value.trim(),P=p?p.value:n.category,R=f.querySelector("#details-tx-save");R.disabled=!0,R.innerHTML='<span class="spinner"></span> Saving...';try{const k=(N=Se.user)==null?void 0:N.uid,V={amount:n.amount,date:n.date,reason:I,type:e,category:P,notes:n.notes||""};if(e==="INCOME"){const E=f.querySelector("#details-tx-account");V.destinationAccountId=E?E.value:n.destinationAccountId}else if(e==="EXPENSE"){const E=f.querySelector("#details-tx-account");V.sourceAccountId=E?E.value:n.sourceAccountId}else if(e==="TRANSFER"){const E=f.querySelector("#details-tx-from-account"),b=f.querySelector("#details-tx-to-account");V.sourceAccountId=E?E.value:n.sourceAccountId,V.destinationAccountId=b?b.value:n.destinationAccountId}await jd(k,n.id,V),Object.assign(n,V),kt(),z.success("✅ Transaction updated successfully!"),t&&t()}catch(k){console.error(k),z.error("Unable to save transaction details."),R.disabled=!1,R.innerHTML="Save Changes"}}}})}let Ce={user:null,profile:null,accounts:[],transactions:[]},pn="DAY",fr=Vn(),_u=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;function ba(n){Ce={...Ce,...n};let t="",e="";if(pn==="DAY"){const i=Bd(Ce.transactions,fr);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Added</div>
          <div class="daily-summary-value income">${U(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Spent</div>
          <div class="daily-summary-value expense">${U(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${U(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Change</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${U(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?kr(i.transactions,{accounts:Ce.accounts}):Pl()}else if(pn==="WEEK"){const i=hb(Ce.transactions,fr);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Income</div>
          <div class="daily-summary-value income">${U(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Expenses</div>
          <div class="daily-summary-value expense">${U(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${U(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${U(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?kr(i.transactions,{accounts:Ce.accounts}):Pl()}else if(pn==="MONTH"){const i=$d(Ce.transactions,_u);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Income</div>
          <div class="daily-summary-value income">${U(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Expenses</div>
          <div class="daily-summary-value expense">${U(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${U(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${U(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?kr(i.transactions,{accounts:Ce.accounts}):Pl()}return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Date-wise Money Control 📅</h1>
        <p class="page-subtitle">Track income, expenses, and account transfers on any specific date.</p>
      </div>

      <!-- View Switcher Tabs -->
      <div class="tabs">
        <div class="tab ${pn==="DAY"?"active":""}" data-view="DAY">Day View</div>
        <div class="tab ${pn==="WEEK"?"active":""}" data-view="WEEK">Week View</div>
        <div class="tab ${pn==="MONTH"?"active":""}" data-view="MONTH">Month View</div>
      </div>

      <!-- Date Controls -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        ${pn==="MONTH"?`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <label class="form-label" style="margin: 0; font-weight: var(--fw-semibold);">Select Month:</label>
            <input type="month" id="mc-month-picker" class="form-input" style="width: auto;" value="${_u}" />
          </div>
        `:`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <span style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">
                ${pn==="DAY"?"Selected Date":"Week Containing"}
              </span>
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${qS(fr)}</div>
            </div>
            <input type="date" id="mc-date-picker" class="form-input" style="width: auto;" value="${fr}" />
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
  `}function _a(n){document.querySelectorAll(".tab[data-view]").forEach(i=>{i.onclick=()=>{pn=i.dataset.view;const s=document.querySelector(".page");s&&(s.outerHTML=ba(Ce),_a(n))}});const t=document.getElementById("mc-date-picker");t&&(t.onchange=i=>{fr=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=ba(Ce),_a(n))});const e=document.getElementById("mc-month-picker");e&&(e.onchange=i=>{_u=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=ba(Ce),_a(n))}),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(i=>{i.onclick=s=>{s.stopPropagation();const r=i.dataset.action,o=i.dataset.txId,a=Ce.transactions.find(c=>c.id===o);a&&(r==="edit"?a.type==="TRANSFER"?$b(a,n):Bb(a,n):r==="delete"&&Ub(a,n))}})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function vo(n){return n+.5|0}const Kn=(n,t,e)=>Math.max(Math.min(n,e),t);function pr(n){return Kn(vo(n*2.55),0,255)}function li(n){return Kn(vo(n*255),0,255)}function yn(n){return Kn(vo(n/2.55)/100,0,1)}function Jp(n){return Kn(vo(n*100),0,100)}const Pe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},wu=[..."0123456789ABCDEF"],vP=n=>wu[n&15],bP=n=>wu[(n&240)>>4]+wu[n&15],Go=n=>(n&240)>>4===(n&15),_P=n=>Go(n.r)&&Go(n.g)&&Go(n.b)&&Go(n.a);function wP(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Pe[n[1]]*17,g:255&Pe[n[2]]*17,b:255&Pe[n[3]]*17,a:t===5?Pe[n[4]]*17:255}:(t===7||t===9)&&(e={r:Pe[n[1]]<<4|Pe[n[2]],g:Pe[n[3]]<<4|Pe[n[4]],b:Pe[n[5]]<<4|Pe[n[6]],a:t===9?Pe[n[7]]<<4|Pe[n[8]]:255})),e}const EP=(n,t)=>n<255?t(n):"";function TP(n){var t=_P(n)?vP:bP;return n?"#"+t(n.r)+t(n.g)+t(n.b)+EP(n.a,t):void 0}const IP=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Wb(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function AP(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function xP(n,t,e){const i=Wb(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function SP(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function Qd(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=SP(e,i,s,d,r),c=c*60+.5),[c|0,l||0,a]}function Jd(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(li)}function Zd(n,t,e){return Jd(Wb,n,t,e)}function kP(n,t,e){return Jd(xP,n,t,e)}function PP(n,t,e){return Jd(AP,n,t,e)}function Gb(n){return(n%360+360)%360}function CP(n){const t=IP.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?pr(+t[5]):li(+t[5]));const s=Gb(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=kP(s,r,o):t[1]==="hsv"?i=PP(s,r,o):i=Zd(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function RP(n,t){var e=Qd(n);e[0]=Gb(e[0]+t),e=Zd(e),n.r=e[0],n.g=e[1],n.b=e[2]}function MP(n){if(!n)return;const t=Qd(n),e=t[0],i=Jp(t[1]),s=Jp(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${yn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const Zp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},tm={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function DP(){const n={},t=Object.keys(tm),e=Object.keys(Zp);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Zp[r]);r=parseInt(tm[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Ko;function NP(n){Ko||(Ko=DP(),Ko.transparent=[0,0,0,0]);const t=Ko[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const OP=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function LP(n){const t=OP.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?pr(o):Kn(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?pr(i):Kn(i,0,255)),s=255&(t[4]?pr(s):Kn(s,0,255)),r=255&(t[6]?pr(r):Kn(r,0,255)),{r:i,g:s,b:r,a:e}}}function VP(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${yn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Cl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,es=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function FP(n,t,e){const i=es(yn(n.r)),s=es(yn(n.g)),r=es(yn(n.b));return{r:li(Cl(i+e*(es(yn(t.r))-i))),g:li(Cl(s+e*(es(yn(t.g))-s))),b:li(Cl(r+e*(es(yn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Yo(n,t,e){if(n){let i=Qd(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=Zd(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function Kb(n,t){return n&&Object.assign(t||{},n)}function em(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=li(n[3]))):(t=Kb(n,{r:0,g:0,b:0,a:1}),t.a=li(t.a)),t}function BP(n){return n.charAt(0)==="r"?LP(n):CP(n)}class Gr{constructor(t){if(t instanceof Gr)return t;const e=typeof t;let i;e==="object"?i=em(t):e==="string"&&(i=wP(t)||NP(t)||BP(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Kb(this._rgb);return t&&(t.a=yn(t.a)),t}set rgb(t){this._rgb=em(t)}rgbString(){return this._valid?VP(this._rgb):void 0}hexString(){return this._valid?TP(this._rgb):void 0}hslString(){return this._valid?MP(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=FP(this._rgb,t._rgb,e)),this}clone(){return new Gr(this.rgb)}alpha(t){return this._rgb.a=li(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=vo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Yo(this._rgb,2,t),this}darken(t){return Yo(this._rgb,2,-t),this}saturate(t){return Yo(this._rgb,1,t),this}desaturate(t){return Yo(this._rgb,1,-t),this}rotate(t){return RP(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function fn(){}const $P=(()=>{let n=0;return()=>n++})();function st(n){return n==null}function St(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function at(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Lt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Ee(n,t){return Lt(n)?n:t}function Z(n,t){return typeof n>"u"?t:n}const UP=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Yb=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function bt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function mt(n,t,e,i){let s,r,o;if(St(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(at(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function ec(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function nc(n){if(St(n))return n.map(nc);if(at(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=nc(n[e[s]]);return t}return n}function Xb(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function zP(n,t,e,i){if(!Xb(n))return;const s=t[n],r=e[n];at(s)&&at(r)?Kr(s,r,i):t[n]=nc(r)}function Kr(n,t,e){const i=St(t)?t:[t],s=i.length;if(!at(n))return n;e=e||{};const r=e.merger||zP;let o;for(let a=0;a<s;++a){if(o=i[a],!at(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function Pr(n,t){return Kr(n,t,{merger:jP})}function jP(n,t,e){if(!Xb(n))return;const i=t[n],s=e[n];at(i)&&at(s)?Pr(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=nc(s))}const nm={"":n=>n,x:n=>n.x,y:n=>n.y};function HP(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function qP(n){const t=HP(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function gi(n,t){return(nm[t]||(nm[t]=qP(t)))(n)}function th(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Yr=n=>typeof n<"u",yi=n=>typeof n=="function",im=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function WP(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const ht=Math.PI,It=2*ht,GP=It+ht,ic=Number.POSITIVE_INFINITY,KP=ht/180,Bt=ht/2,xi=ht/4,sm=ht*2/3,Yn=Math.log10,rn=Math.sign;function Cr(n,t,e){return Math.abs(n-t)<e}function rm(n){const t=Math.round(n);n=Cr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Yn(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function YP(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function XP(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function ks(n){return!XP(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function QP(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Qb(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Be(n){return n*(ht/180)}function eh(n){return n*(180/ht)}function om(n){if(!Lt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Jb(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*ht&&(r+=It),{angle:r,distance:s}}function Eu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function JP(n,t){return(n-t+GP)%It-ht}function oe(n){return(n%It+It)%It}function Xr(n,t,e,i){const s=oe(n),r=oe(t),o=oe(e),a=oe(r-s),c=oe(o-s),l=oe(s-r),d=oe(s-o);return s===r||s===o||i&&r===o||a>c&&l<d}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function ZP(n){return Kt(n,-32768,32767)}function _n(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function nh(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const wn=(n,t,e,i)=>nh(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),tC=(n,t,e)=>nh(n,e,i=>n[i][t]>=e);function eC(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const Zb=["push","pop","shift","splice","unshift"];function nC(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Zb.forEach(e=>{const i="_onData"+th(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function am(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(Zb.forEach(r=>{delete n[r]}),delete n._chartjs)}function t_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const e_=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function n_(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,e_.call(window,()=>{i=!1,n.apply(t,e)}))}}function iC(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const ih=n=>n==="start"?"left":n==="end"?"right":"center",se=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,sC=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function i_(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:p,maxDefined:y}=o.getUserBounds();if(p){if(s=Math.min(wn(c,d,h).lo,e?i:wn(t,d,o.getPixelForValue(h)).lo),l){const _=c.slice(0,s+1).reverse().findIndex(v=>!st(v[a.axis]));s-=Math.max(0,_)}s=Kt(s,0,i-1)}if(y){let _=Math.max(wn(c,o.axis,f,!0).hi+1,e?0:wn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const v=c.slice(_-1).findIndex(I=>!st(I[a.axis]));_+=Math.max(0,v)}r=Kt(_,s,i)-s}else r=i-s}return{start:s,count:r}}function s_(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const Xo=n=>n===0||n===1,cm=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*It/e)),lm=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*It/e)+1,Rr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Bt)+1,easeOutSine:n=>Math.sin(n*Bt),easeInOutSine:n=>-.5*(Math.cos(ht*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Xo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Xo(n)?n:cm(n,.075,.3),easeOutElastic:n=>Xo(n)?n:lm(n,.075,.3),easeInOutElastic(n){return Xo(n)?n:n<.5?.5*cm(n*2,.1125,.45):.5+.5*lm(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Rr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Rr.easeInBounce(n*2)*.5:Rr.easeOutBounce(n*2-1)*.5+.5};function sh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function um(n){return sh(n)?n:new Gr(n)}function Rl(n){return sh(n)?n:new Gr(n).saturate(.5).darken(.1).hexString()}const rC=["x","y","borderWidth","radius","tension"],oC=["color","borderColor","backgroundColor"];function aC(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:oC},numbers:{type:"number",properties:rC}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function cC(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const dm=new Map;function lC(n,t){t=t||{};const e=n+JSON.stringify(t);let i=dm.get(e);return i||(i=new Intl.NumberFormat(n,t),dm.set(e,i)),i}function bo(n,t,e){return lC(t,e).format(n)}const r_={values(n){return St(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=uC(n,e)}const o=Yn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),bo(n,i,c)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(Yn(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?r_.numeric.call(this,n,t,e):""}};function uC(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var $c={formatters:r_};function dC(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:$c.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const qi=Object.create(null),Tu=Object.create(null);function Mr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function Ml(n,t,e){return typeof t=="string"?Kr(Mr(n,t),e):Kr(Mr(n,""),t)}class hC{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Rl(s.backgroundColor),this.hoverBorderColor=(i,s)=>Rl(s.borderColor),this.hoverColor=(i,s)=>Rl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ml(this,t,e)}get(t){return Mr(this,t)}describe(t,e){return Ml(Tu,t,e)}override(t,e){return Ml(qi,t,e)}route(t,e,i,s){const r=Mr(this,t),o=Mr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[s];return at(c)?Object.assign({},l,c):Z(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Pt=new hC({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[aC,cC,dC]);function fC(n){return!n||st(n.size)||st(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function sc(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function pC(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!St(h))o=sc(n,s,r,o,h);else if(St(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!St(f)&&(o=sc(n,s,r,o,f));n.restore();const p=r.length/2;if(p>e.length){for(c=0;c<p;c++)delete s[r[c]];r.splice(0,p)}return o}function Si(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function hm(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Iu(n,t,e,i){o_(n,t,e,i,null)}function o_(n,t,e,i,s){let r,o,a,c,l,d,h,f;const p=t.pointStyle,y=t.rotation,_=t.radius;let v=(y||0)*KP;if(p&&typeof p=="object"&&(r=p.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(v),n.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),p){default:s?n.ellipse(e,i,s/2,_,0,0,It):n.arc(e,i,_,0,It),n.closePath();break;case"triangle":d=s?s/2:_,n.moveTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=sm,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=sm,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),n.closePath();break;case"rectRounded":l=_*.516,c=_-l,o=Math.cos(v+xi)*c,h=Math.cos(v+xi)*(s?s/2-l:c),a=Math.sin(v+xi)*c,f=Math.sin(v+xi)*(s?s/2-l:c),n.arc(e-h,i-a,l,v-ht,v-Bt),n.arc(e+f,i-o,l,v-Bt,v),n.arc(e+h,i+a,l,v,v+Bt),n.arc(e-f,i+o,l,v+Bt,v+ht),n.closePath();break;case"rect":if(!y){c=Math.SQRT1_2*_,d=s?s/2:c,n.rect(e-d,i-c,2*d,2*c);break}v+=xi;case"rectRot":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+f,i-o),n.lineTo(e+h,i+a),n.lineTo(e-f,i+o),n.closePath();break;case"crossRot":v+=xi;case"cross":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"star":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o),v+=xi,h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"line":o=s?s/2:Math.cos(v)*_,a=Math.sin(v)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(v)*(s?s/2:_),i+Math.sin(v)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function En(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Uc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function zc(n){n.restore()}function mC(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function gC(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function yC(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),st(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function vC(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=s.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function bC(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Wi(n,t,e,i,s,r={}){const o=St(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=s.string,yC(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&bC(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),st(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,i,r.maxWidth)),n.fillText(l,e,i,r.maxWidth),vC(n,e,i,l,r),i+=Number(s.lineHeight);n.restore()}function Qr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*ht,ht,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,ht,Bt,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Bt,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Bt,!0),n.lineTo(e+o.topLeft,i)}const _C=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,wC=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function EC(n,t){const e=(""+n).match(_C);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const TC=n=>+n||0;function rh(n,t){const e={},i=at(t),s=i?Object.keys(t):t,r=at(n)?i?o=>Z(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=TC(r(o));return e}function a_(n){return rh(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Li(n){return rh(n,["topLeft","topRight","bottomLeft","bottomRight"])}function de(n){const t=a_(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ht(n,t){n=n||{},t=t||Pt.font;let e=Z(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Z(n.style,t.style);i&&!(""+i).match(wC)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Z(n.family,t.family),lineHeight:EC(Z(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Z(n.weight,t.weight),string:""};return s.string=fC(s),s}function mr(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function IC(n,t,e){const{min:i,max:s}=n,r=Yb(t,(s-i)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function wi(n,t){return Object.assign(Object.create(n),t)}function oh(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=d_("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>oh([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return l_(a,c,()=>MC(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return pm(a).includes(c)},ownKeys(a){return pm(a)},set(a,c,l){const d=a._storage||(a._storage=s());return a[c]=d[c]=l,delete a._keys,!0}})}function Ps(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:c_(n,i),setContext:r=>Ps(n,r,e,i),override:r=>Ps(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return l_(r,o,()=>xC(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function c_(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:yi(e)?e:()=>e,isIndexable:yi(i)?i:()=>i}}const AC=(n,t)=>n?n+th(t):t,ah=(n,t)=>at(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function l_(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function xC(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return yi(a)&&o.isScriptable(t)&&(a=SC(t,a,n,e)),St(a)&&a.length&&(a=kC(t,a,n,o.isIndexable)),ah(t,a)&&(a=Ps(a,s,r&&r[t],o)),a}function SC(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||i);return a.delete(n),ah(n,c)&&(c=ch(s._scopes,s,n,c)),c}function kC(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(at(t[0])){const c=t,l=s._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=ch(l,s,n,d);t.push(Ps(h,r,o&&o[n],a))}}return t}function u_(n,t,e){return yi(n)?n(t,e):n}const PC=(n,t)=>n===!0?t:typeof n=="string"?gi(t,n):void 0;function CC(n,t,e,i,s){for(const r of t){const o=PC(e,r);if(o){n.add(o);const a=u_(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function ch(n,t,e,i){const s=t._rootScopes,r=u_(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let c=fm(a,o,e,r||e,i);return c===null||typeof r<"u"&&r!==e&&(c=fm(a,o,r,c,i),c===null)?!1:oh(Array.from(a),[""],s,r,()=>RC(t,e,i))}function fm(n,t,e,i,s){for(;e;)e=CC(n,t,e,i,s);return e}function RC(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return St(s)&&at(e)?e:s||{}}function MC(n,t,e,i){let s;for(const r of t)if(s=d_(AC(r,n),e),typeof s<"u")return ah(n,s)?ch(e,i,n,s):s}function d_(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function pm(n){let t=n._keys;return t||(t=n._keys=DC(n._scopes)),t}function DC(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function h_(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,d;for(a=0,c=i;a<c;++a)l=a+e,d=t[l],o[a]={r:s.parse(gi(d,r),l)};return o}const NC=Number.EPSILON||1e-14,Cs=(n,t)=>t<n.length&&!n[t].skip&&n[t],f_=n=>n==="x"?"y":"x";function OC(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Eu(r,s),c=Eu(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=i*l,f=i*d;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function LC(n,t,e){const i=n.length;let s,r,o,a,c,l=Cs(n,0);for(let d=0;d<i-1;++d)if(c=l,l=Cs(n,d+1),!(!c||!l)){if(Cr(t[d],0,NC)){e[d]=e[d+1]=0;continue}s=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=s*o*t[d],e[d+1]=r*o*t[d])}}function VC(n,t,e="x"){const i=f_(e),s=n.length;let r,o,a,c=Cs(n,0);for(let l=0;l<s;++l){if(o=a,a=c,c=Cs(n,l+1),!a)continue;const d=a[e],h=a[i];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${i}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${i}`]=h+r*t[l])}}function FC(n,t="x"){const e=f_(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=Cs(n,0);for(o=0;o<i;++o)if(a=c,c=l,l=Cs(n,o+1),!!c){if(l){const d=l[t]-c[t];s[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?rn(s[o-1])!==rn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}LC(n,s,r),VC(n,r,t)}function Qo(n,t,e){return Math.max(Math.min(n,e),t)}function BC(n,t){let e,i,s,r,o,a=En(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&En(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=Qo(s.cp1x,t.left,t.right),s.cp1y=Qo(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Qo(s.cp2x,t.left,t.right),s.cp2y=Qo(s.cp2y,t.top,t.bottom)))}function $C(n,t,e,i,s){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")FC(n,s);else{let l=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=OC(l,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&BC(n,e)}function lh(){return typeof window<"u"&&typeof document<"u"}function uh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function rc(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const jc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function UC(n,t){return jc(n).getPropertyValue(t)}const zC=["top","right","bottom","left"];function Vi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=zC[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const jC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function HC(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(jC(s,r,n.target))a=s,c=r;else{const l=t.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Ri(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=jc(e),r=s.boxSizing==="border-box",o=Vi(s,"padding"),a=Vi(s,"border","width"),{x:c,y:l,box:d}=HC(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:p,height:y}=t;return r&&(p-=o.width+a.width,y-=o.height+a.height),{x:Math.round((c-h)/p*e.width/i),y:Math.round((l-f)/y*e.height/i)}}function qC(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&uh(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=jc(r),c=Vi(a,"border","width"),l=Vi(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,i=rc(a.maxWidth,r,"clientWidth"),s=rc(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||ic,maxHeight:s||ic}}const Xn=n=>Math.round(n*10)/10;function WC(n,t,e,i){const s=jc(n),r=Vi(s,"margin"),o=rc(s.maxWidth,n,"clientWidth")||ic,a=rc(s.maxHeight,n,"clientHeight")||ic,c=qC(n,t,e);let{width:l,height:d}=c;if(s.boxSizing==="content-box"){const f=Vi(s,"border","width"),p=Vi(s,"padding");l-=p.width+f.width,d-=p.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,i?l/i:d-r.height),l=Xn(Math.min(l,o,c.maxWidth)),d=Xn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=Xn(l/2)),(t!==void 0||e!==void 0)&&i&&c.height&&d>c.height&&(d=c.height,l=Xn(Math.floor(d*i))),{width:l,height:d}}function mm(n,t,e){const i=t||1,s=Xn(n.height*i),r=Xn(n.width*i);n.height=Xn(n.height),n.width=Xn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const GC=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};lh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function gm(n,t){const e=UC(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Mi(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function KC(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function YC(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Mi(n,s,e),a=Mi(s,r,e),c=Mi(r,t,e),l=Mi(o,a,e),d=Mi(a,c,e);return Mi(l,d,e)}const XC=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},QC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function vs(n,t,e){return n?XC(t,e):QC()}function p_(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function m_(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function g_(n){return n==="angle"?{between:Xr,compare:JP,normalize:oe}:{between:_n,compare:(t,e)=>t-e,normalize:t=>t}}function ym({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function JC(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=g_(i),c=t.length;let{start:l,end:d,loop:h}=n,f,p;if(h){for(l+=c,d+=c,f=0,p=c;f<p&&o(a(t[l%c][i]),s,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function y_(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=g_(i),{start:d,end:h,loop:f,style:p}=JC(n,t,e),y=[];let _=!1,v=null,I,P,R;const N=()=>c(s,R,I)&&a(s,R)!==0,k=()=>a(r,I)===0||c(r,R,I),V=()=>_||N(),E=()=>!_||k();for(let b=d,w=d;b<=h;++b)P=t[b%o],!P.skip&&(I=l(P[i]),I!==R&&(_=c(I,s,r),v===null&&V()&&(v=a(I,s)===0?b:w),v!==null&&E()&&(y.push(ym({start:v,end:b,loop:f,count:o,style:p})),v=null),w=b,R=I));return v!==null&&y.push(ym({start:v,end:h,loop:f,count:o,style:p})),y}function v_(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=y_(i[s],n.points,t);r.length&&e.push(...r)}return e}function ZC(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function tR(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:t%s,end:(c-1)%s,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function eR(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=ZC(e,s,r,i);if(i===!0)return vm(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+s:a,l=!!n._fullLoop&&o===0&&a===s-1;return vm(n,tR(e,o,c,l),e,t)}function vm(n,t,e,i){return!i||!i.setContext||!e?t:nR(n,t,e,i)}function nR(n,t,e,i){const s=n._chart.getContext(),r=bm(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function p(y,_,v,I){const P=a?-1:1;if(y!==_){for(y+=c;e[y%c].skip;)y-=P;for(;e[_%c].skip;)_+=P;y%c!==_%c&&(l.push({start:y%c,end:_%c,loop:v,style:I}),d=I,h=_%c)}}for(const y of t){h=a?h:y.start;let _=e[h%c],v;for(f=h+1;f<=y.end;f++){const I=e[f%c];v=bm(i.setContext(wi(s,{type:"segment",p0:_,p1:I,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),iR(v,d)&&p(h,f-1,y.loop,d),_=I,d=v}h<f-1&&p(h,f-1,y.loop,d)}return l}function bm(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function iR(n,t){if(!t)return!1;const e=[],i=function(s,r){return sh(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function Jo(n,t,e){return n.options.clip?n[e]:t[e]}function sR(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:Jo(e,t,"left"),right:Jo(e,t,"right"),top:Jo(i,t,"top"),bottom:Jo(i,t,"bottom")}:t}function b_(n,t){const e=t._clip;if(e.disabled)return!1;const i=sR(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class rR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=e_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var mn=new rR;const _m="transparent",oR={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=um(n||_m),s=i.valid&&um(t||_m);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class aR{constructor(t,e,i,s){const r=e[i];s=mr([t.to,s,r,t.from]);const o=mr([t.from,r,s]);this._active=!0,this._fn=t.fn||oR[t.type||typeof o],this._easing=Rr[t.easing]||Rr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=mr([t.to,e,s,t.from]),this._from=mr([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}c=e/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class __{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!at(t))return;const e=Object.keys(Pt.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!at(r))return;const o={};for(const a of e)o[a]=r[a];(St(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=lR(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&cR(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new aR(f,t,l,d),s.push(h)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return mn.add(this._chart,i),!0}}function cR(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function lR(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function wm(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function uR(n,t,e){if(e===!1)return!1;const i=wm(n,e),s=wm(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function dR(n){let t,e,i,s;return at(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function w_(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Em(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===e){if(d=!0,i.all)continue;break}l=n.values[c],Lt(l)&&(r||t===0||rn(t)===rn(l))&&(t+=l)}return!d&&!i.all?0:t}function hR(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[s]:d,[r]:n[d]};return a}function Dl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function fR(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function pR(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function mR(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Tm(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Im(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,d=fR(r,o,i),h=t.length;let f;for(let p=0;p<h;++p){const y=t[p],{[c]:_,[l]:v}=y,I=y._stacks||(y._stacks={});f=I[l]=mR(s,d,_),f[a]=v,f._top=Tm(f,o,!0,i.type),f._bottom=Tm(f,o,!1,i.type);const P=f._visualValues||(f._visualValues={});P[a]=v}}function Nl(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function gR(n,t){return wi(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function yR(n,t,e){return wi(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ir(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const Ol=n=>n==="reset"||n==="none",Am=(n,t)=>t?n:Object.assign({},n),vR=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:w_(e,!0),values:null};class ze{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Dl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ir(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(h,f,p,y)=>h==="x"?f:h==="r"?y:p,r=e.xAxisID=Z(i.xAxisID,Nl(t,"x")),o=e.yAxisID=Z(i.yAxisID,Nl(t,"y")),a=e.rAxisID=Z(i.rAxisID,Nl(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),d=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&am(this._data,this),t._stacked&&ir(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(at(e)){const s=this._cachedMeta;this._data=hR(e,s)}else if(i!==e){if(i){am(i,this);const s=this._cachedMeta;ir(s),s._parsed=[]}e&&Object.isExtensible(e)&&nC(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=Dl(e.vScale,e),e.stack!==i.stack&&(s=!0,ir(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(Im(this,e._parsed),e._stacked=Dl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=t===0&&e===s.length?!0:i._sorted,l=t>0&&i._parsed[t-1],d,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{St(s[t])?f=this.parseArrayData(i,s,t,e):at(s[t])?f=this.parseObjectData(i,s,t,e):f=this.parsePrimitiveData(i,s,t,e);const p=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)i._parsed[d+t]=h=f[d],c&&(p()&&(c=!1),l=h);i._sorted=c}o&&Im(this,f)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(s);let f,p,y;for(f=0,p=s;f<p;++f)y=f+i,h[f]={[a]:d||r.parse(l[y],y),[c]:o.parse(e[y],y)};return h}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let c,l,d,h;for(c=0,l=s;c<l;++c)d=c+i,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let d,h,f,p;for(d=0,h=s;d<h;++d)f=d+i,p=e[f],l[d]={x:r.parse(gi(p,a),f),y:o.parse(gi(p,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:w_(s,!0),values:e._stacks[t.axis]._visualValues};return Em(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Em(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),c=vR(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=pR(a);let f,p;function y(){p=s[f];const _=p[a.axis];return!Lt(p[t.axis])||d>_||h<_}for(f=0;f<o&&!(!y()&&(this.updateRangeFromParsed(l,t,p,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!y()){this.updateRangeFromParsed(l,t,p,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],Lt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=dR(Z(this.options.clip,uR(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=s[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=yR(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=gR(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Yr(i);if(a)return Am(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),p=Object.keys(Pt.elements[t]),y=()=>this.getContext(i,s,e),_=l.resolveNamedOptions(f,p,y,h);return _.$shared&&(_.$shared=c,r[o]=Object.freeze(Am(_,c))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,i,e))}const l=new __(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ol(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){Ol(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!Ol(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&ir(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}H(ze,"defaults",{}),H(ze,"datasetElementType",null),H(ze,"dataElementType",null);function bR(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=t_(i.sort((s,r)=>s-r))}return n._cache.$bar}function _R(n){const t=n.iScale,e=bR(t,n.type);let i=t._length,s,r,o,a;const c=()=>{o===32767||o===-32768||(Yr(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),c();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),c();return i}function wR(n,t,e,i){const s=e.barThickness;let r,o;return st(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function ER(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:e.barPercentage,start:l}}function TR(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:s,end:r,min:o,max:a}}function E_(n,t,e,i){return St(n)?TR(n,t,e,i):t[e.axis]=e.parse(n,i),t}function xm(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,c=[];let l,d,h,f;for(l=e,d=e+i;l<d;++l)f=t[l],h={},h[s.axis]=a||s.parse(o[l],l),c.push(E_(f,h,r,l));return c}function Ll(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function IR(n,t,e){return n!==0?rn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function AR(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function xR(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=AR(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=l:(e._bottom||0)===i?s=d:(r[Sm(d,o,a,c)]=!0,s=l)),r[Sm(s,o,a,c)]=!0,n.borderSkipped=r}function Sm(n,t,e,i){return i?(n=SR(n,t,e),n=km(n,e,t)):n=km(n,t,e),n}function SR(n,t,e){return n===t?e:n===e?t:n}function km(n,t,e){return n==="start"?t:n==="end"?e:n}function kR(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class wa extends ze{parsePrimitiveData(t,e,i,s){return xm(t,e,i,s)}parseArrayData(t,e,i,s){return xm(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,p,y,_;for(f=i,p=i+s;f<p;++f)_=e[f],y={},y[r.axis]=r.parse(gi(_,l),f),h.push(E_(gi(_,d),y,o,f));return h}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=Ll(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,s);for(let p=e;p<e+i;p++){const y=this.getParsed(p),_=r||st(y[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(p),v=this._calculateBarIndexPixels(p,d),I=(y._stacks||{})[a.axis],P={horizontal:l,base:_.base,enableBorderRadius:!I||Ll(y._custom)||o===I._top||o===I._bottom,x:l?_.head:v.center,y:l?v.center:_.head,height:l?v.size:Math.abs(_.size),width:l?Math.abs(_.size):v.size};f&&(P.options=h||this.resolveDataElementOptions(p,t[p].active?"active":s));const R=P.options||t[p].options;xR(P,R,I,o),kR(P,R,d.ratio),this.updateElement(t[p],p,P,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[i.axis],l=d=>{const h=d._parsed.find(p=>p[i.axis]===c),f=h&&h[d.vScale.axis];if(st(f)||isNaN(f))return!0};for(const d of s)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Z(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||_R(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=Ll(l);let h=c[e.axis],f=0,p=i?this.applyStack(e,c,i):h,y,_;p!==h&&(f=p-h,p=h),d&&(h=l.barStart,p=l.barEnd-l.barStart,h!==0&&rn(h)!==rn(l.barEnd)&&(f=0),f+=h);const v=!st(r)&&!d?r:f;let I=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(f+p):y=I,_=y-I,Math.abs(_)<o){_=IR(_,e,a)*o,h===a&&(I-=_/2);const P=e.getPixelForDecimal(0),R=e.getPixelForDecimal(1),N=Math.min(P,R),k=Math.max(P,R);I=Math.max(Math.min(I,k),N),y=I+_,i&&!d&&(c._stacks[e.axis]._visualValues[s]=e.getValueForPixel(y)-e.getValueForPixel(I))}if(I===e.getPixelForValue(a)){const P=rn(_)*e.getLineWidthForValue(a)/2;I+=P,_-=P}return{size:_,base:I,head:y,center:y+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=Z(s.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?ER(t,e,s,d*l):wR(t,e,s,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,p=this._getAxis().indexOf(Z(f,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+p;a=h.start+h.chunk*y+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}H(wa,"id","bar"),H(wa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),H(wa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ea extends ze{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Z(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Z(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:i[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,s),d=o.axis,h=a.axis;for(let f=e;f<e+i;f++){const p=t[f],y=!r&&this.getParsed(f),_={},v=_[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(y[d]),I=_[h]=r?a.getBasePixel():a.getPixelForValue(y[h]);_.skip=isNaN(v)||isNaN(I),l&&(_.options=c||this.resolveDataElementOptions(f,p.active?"active":s),r&&(_.options.radius=0)),this.updateElement(p,f,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Z(i&&i._custom,r),s}}H(Ea,"id","bubble"),H(Ea,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),H(Ea,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function PR(n,t,e){let i=1,s=1,r=0,o=0;if(t<It){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),p=(R,N,k)=>Xr(R,a,c,!0)?1:Math.max(N,N*e,k,k*e),y=(R,N,k)=>Xr(R,a,c,!0)?-1:Math.min(N,N*e,k,k*e),_=p(0,l,h),v=p(Bt,d,f),I=y(ht,l,h),P=y(ht+Bt,d,f);i=(_-I)/2,s=(v-P)/2,r=-(_+I)/2,o=-(v+P)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Ni extends ze{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=c=>+i[c];if(at(i[t])){const{key:c="value"}=this._parsing;r=l=>+gi(i[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return Be(this.options.rotation-90)}_getCircumference(){return Be(this.options.circumference)}_getRotationExtents(){let t=It,e=-It;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(UP(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:p,offsetX:y,offsetY:_}=PR(h,d,c),v=(i.width-o)/f,I=(i.height-o)/p,P=Math.max(Math.min(v,I)/2,0),R=Yb(this.options.radius,P),N=Math.max(R*c,0),k=(R-N)/this._getVisibleDatasetWeightTotal();this.offsetX=y*R,this.offsetY=_*R,s.total=this.calculateTotal(),this.outerRadius=R-k*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-k*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/It)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,p=f?0:this.innerRadius,y=f?0:this.outerRadius,{sharedOptions:_,includeOptions:v}=this._getSharedOptions(e,s);let I=this._getRotation(),P;for(P=0;P<e;++P)I+=this._circumference(P,r);for(P=e;P<e+i;++P){const R=this._circumference(P,r),N=t[P],k={x:d+this.offsetX,y:h+this.offsetY,startAngle:I,endAngle:I+R,circumference:R,outerRadius:y,innerRadius:p};v&&(k.options=_||this.resolveDataElementOptions(P,N.active?"active":s)),I+=R,this.updateElement(N,P,k,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?It*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=bo(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,c;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)c=a.resolveDataElementOptions(s),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Z(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}H(Ni,"id","doughnut"),H(Ni,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),H(Ni,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),H(Ni,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class Ta extends ze{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=i_(e,s,o);this._drawStart=a,this._drawCount=c,s_(e)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,s),f=o.axis,p=a.axis,{spanGaps:y,segment:_}=this.options,v=ks(y)?y:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||s==="none",P=e+i,R=t.length;let N=e>0&&this.getParsed(e-1);for(let k=0;k<R;++k){const V=t[k],E=I?V:{};if(k<e||k>=P){E.skip=!0;continue}const b=this.getParsed(k),w=st(b[p]),A=E[f]=o.getPixelForValue(b[f],k),S=E[p]=r||w?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[p],k);E.skip=isNaN(A)||isNaN(S)||w,E.stop=k>0&&Math.abs(b[f]-N[f])>v,_&&(E.parsed=b,E.raw=l.data[k]),h&&(E.options=d||this.resolveDataElementOptions(k,V.active?"active":s)),I||this.updateElement(V,k,E,s),N=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}H(Ta,"id","line"),H(Ta,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),H(Ta,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Dr extends ze{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=bo(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return h_.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*ht;let p=f,y;const _=360/this.countVisibleElements();for(y=0;y<e;++y)p+=this._computeAngle(y,s,_);for(y=e;y<e+i;y++){const v=t[y];let I=p,P=p+this._computeAngle(y,s,_),R=o.getDataVisibility(y)?l.getDistanceFromCenterForValue(this.getParsed(y).r):0;p=P,r&&(c.animateScale&&(R=0),c.animateRotate&&(I=P=f));const N={x:d,y:h,innerRadius:0,outerRadius:R,startAngle:I,endAngle:P,options:this.resolveDataElementOptions(y,v.active?"active":s)};this.updateElement(v,y,N,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Be(this.resolveDataElementOptions(t,e).angle||i):0}}H(Dr,"id","polarArea"),H(Dr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),H(Dr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:s,lineWidth:c.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Au extends Ni{}H(Au,"id","pie"),H(Au,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ia extends ze{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return h_.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":s),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,p={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,p,s)}}}H(Ia,"id","radar"),H(Ia,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),H(Ia,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Aa extends ze{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=i_(e,i,s);if(this._drawStart=r,this._drawCount=o,s_(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,s),h=this.getSharedOptions(d),f=this.includeOptions(s,h),p=o.axis,y=a.axis,{spanGaps:_,segment:v}=this.options,I=ks(_)?_:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||r||s==="none";let R=e>0&&this.getParsed(e-1);for(let N=e;N<e+i;++N){const k=t[N],V=this.getParsed(N),E=P?k:{},b=st(V[y]),w=E[p]=o.getPixelForValue(V[p],N),A=E[y]=r||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,V,c):V[y],N);E.skip=isNaN(w)||isNaN(A)||b,E.stop=N>0&&Math.abs(V[p]-R[p])>I,v&&(E.parsed=V,E.raw=l.data[N]),f&&(E.options=h||this.resolveDataElementOptions(N,k.active?"active":s)),P||this.updateElement(k,N,E,s),R=V}this.updateSharedOptions(h,s,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}H(Aa,"id","scatter"),H(Aa,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),H(Aa,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var CR=Object.freeze({__proto__:null,BarController:wa,BubbleController:Ea,DoughnutController:Ni,LineController:Ta,PieController:Au,PolarAreaController:Dr,RadarController:Ia,ScatterController:Aa});function ki(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class dh{constructor(t){H(this,"options");this.options=t||{}}static override(t){Object.assign(dh.prototype,t)}init(){}formats(){return ki()}parse(){return ki()}format(){return ki()}add(){return ki()}diff(){return ki()}startOf(){return ki()}endOf(){return ki()}}var RR={_date:dh};function MR(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?tC:wn;if(i){if(s._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),p=l(r,t,e+h);return{lo:f.lo,hi:p.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=s._cachedMeta,{_parsed:f}=n,p=f.slice(0,d.lo+1).reverse().findIndex(_=>!st(_[h.axis]));d.lo-=Math.max(0,p);const y=f.slice(d.hi).findIndex(_=>!st(_[h.axis]));d.hi+=Math.max(0,y)}return d}}return{lo:0,hi:r.length-1}}function Hc(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=MR(r[a],t,o,s);for(let p=h;p<=f;++p){const y=d[p];y.skip||i(y,l,p)}}}function DR(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Vl(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||Hc(n,e,t,function(a,c,l){!s&&!En(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function NR(n,t,e,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=Jb(o,{x:t.x,y:t.y});Xr(h,l,d)&&s.push({element:o,datasetIndex:a,index:c})}return Hc(n,e,t,r),s}function OR(n,t,e,i,s,r){let o=[];const a=DR(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const p=d.inRange(t.x,t.y,s);if(i&&!p)return;const y=d.getCenterPoint(s);if(!(!!r||n.isPointInArea(y))&&!p)return;const v=a(t,y);v<c?(o=[{element:d,datasetIndex:h,index:f}],c=v):v===c&&o.push({element:d,datasetIndex:h,index:f})}return Hc(n,e,t,l),o}function Fl(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?NR(n,t,e,s):OR(n,t,e,i,s,r)}function Pm(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Hc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],s)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,s))}),i&&!a?[]:r}var LR={modes:{index(n,t,e,i){const s=Ri(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Vl(n,s,r,i,o):Fl(n,s,r,!1,i,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,i){const s=Ri(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Vl(n,s,r,i,o):Fl(n,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,i){const s=Ri(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Vl(n,s,r,i,o)},nearest(n,t,e,i){const s=Ri(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Fl(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=Ri(t,n);return Pm(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=Ri(t,n);return Pm(n,s,"y",e.intersect,i)}}};const T_=["left","top","right","bottom"];function sr(n,t){return n.filter(e=>e.pos===t)}function Cm(n,t){return n.filter(e=>T_.indexOf(e.pos)===-1&&e.box.axis===t)}function rr(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function VR(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function FR(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!T_.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function BR(n,t){const e=FR(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*i:c&&t.availableWidth,a.height=s):(a.width=i,a.height=d?d*s:c&&t.availableHeight)}return e}function $R(n){const t=VR(n),e=rr(t.filter(l=>l.box.fullSize),!0),i=rr(sr(t,"left"),!0),s=rr(sr(t,"right")),r=rr(sr(t,"top"),!0),o=rr(sr(t,"bottom")),a=Cm(t,"x"),c=Cm(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:sr(t,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function Rm(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function I_(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function UR(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!at(s)){e.size&&(n[s]-=e.size);const h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[s]+=e.size}r.getPadding&&I_(o,r.getPadding());const a=Math.max(0,t.outerWidth-Rm(o,n,"left","right")),c=Math.max(0,t.outerHeight-Rm(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function zR(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function jR(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function gr(n,t,e,i){const s=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,jR(a.horizontal,t));const{same:h,other:f}=UR(t,e,a,i);l|=h&&s.length,d=d||f,c.fullSize||s.push(a)}return l&&gr(s,t,e,i)||d}function Zo(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function Mm(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=i[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Yr(l.start)&&(o=l.start),c.fullSize?Zo(c,s.left,o,e.outerWidth-s.right-s.left,f):Zo(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Yr(l.start)&&(r=l.start),c.fullSize?Zo(c,r,s.top,f,e.outerHeight-s.bottom-s.top):Zo(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var ce={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=de(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=$R(n.boxes),c=a.vertical,l=a.horizontal;mt(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const d=c.reduce((_,v)=>v.box.options&&v.box.options.display===!1?_:_+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},s);I_(f,de(i));const p=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),y=BR(c.concat(l),h);gr(a.fullSize,p,h,y),gr(c,p,h,y),gr(l,p,h,y)&&gr(c,p,h,y),zR(p),Mm(a.leftAndTop,p,h,y),p.x+=p.w,p.y+=p.h,Mm(a.rightAndBottom,p,h,y),n.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},mt(a.chartArea,_=>{const v=_.box;Object.assign(v,n.chartArea),v.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class A_{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class HR extends A_{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const xa="$chartjs",qR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Dm=n=>n===null||n==="";function WR(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[xa]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Dm(s)){const r=gm(n,"width");r!==void 0&&(n.width=r)}if(Dm(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=gm(n,"height");r!==void 0&&(n.height=r)}return n}const x_=GC?{passive:!0}:!1;function GR(n,t,e){n&&n.addEventListener(t,e,x_)}function KR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,x_)}function YR(n,t){const e=qR[n.type]||n.type,{x:i,y:s}=Ri(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function oc(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function XR(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||oc(a.addedNodes,i),o=o&&!oc(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function QR(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||oc(a.removedNodes,i),o=o&&!oc(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Jr=new Map;let Nm=0;function S_(){const n=window.devicePixelRatio;n!==Nm&&(Nm=n,Jr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function JR(n,t){Jr.size||window.addEventListener("resize",S_),Jr.set(n,t)}function ZR(n){Jr.delete(n),Jr.size||window.removeEventListener("resize",S_)}function t1(n,t,e){const i=n.canvas,s=i&&uh(i);if(!s)return;const r=n_((a,c)=>{const l=s.clientWidth;e(a,c),l<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(s),JR(n,r),o}function Bl(n,t,e){e&&e.disconnect(),t==="resize"&&ZR(n)}function e1(n,t,e){const i=n.canvas,s=n_(r=>{n.ctx!==null&&e(YR(r,n))},n);return GR(i,t,s),s}class n1 extends A_{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(WR(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[xa])return!1;const i=e[xa].initial;["height","width"].forEach(r=>{const o=i[r];st(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[xa],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:XR,detach:QR,resize:t1}[e]||e1;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:Bl,detach:Bl,resize:Bl}[e]||KR)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return WC(t,e,i,s)}isAttached(t){const e=t&&uh(t);return!!(e&&e.isConnected)}}function i1(n){return!lh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?HR:n1}class We{constructor(){H(this,"x");H(this,"y");H(this,"active",!1);H(this,"options");H(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return ks(this.x)&&ks(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}H(We,"defaults",{}),H(We,"defaultRoutes");function s1(n,t){const e=n.options.ticks,i=r1(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?a1(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return c1(t,l,r,o/s),l;const d=o1(r,t,s);if(o>0){let h,f;const p=o>1?Math.round((c-a)/(o-1)):null;for(ta(t,l,d,st(p)?0:a-p,a),h=0,f=o-1;h<f;h++)ta(t,l,d,r[h],r[h+1]);return ta(t,l,d,c,st(p)?t.length:c+p),l}return ta(t,l,d),l}function r1(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function o1(n,t,e){const i=l1(n),s=t.length/e;if(!i)return Math.max(s,1);const r=YP(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function a1(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function c1(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function ta(n,t,e,i,s){const r=Z(i,0),o=Math.min(Z(s,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),s&&(c=s-i,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function l1(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const u1=n=>n==="left"?"right":n==="right"?"left":n,Om=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,Lm=(n,t)=>Math.min(t||n,n);function Vm(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function d1(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(s),l;if(!(e&&(i===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(s-1))/2,c+=s<t?l:-l,c<r-a||c>o+a)))return c}function h1(n,t){mt(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function or(n){return n.drawTicks?n.tickLength:0}function Fm(n,t){if(!n.display)return 0;const e=Ht(n.font,t),i=de(n.padding);return(St(n.text)?n.text.length:1)*e.lineHeight+i.height}function f1(n,t){return wi(n,{scale:t,type:"scale"})}function p1(n,t,e){return wi(n,{tick:e,index:t,type:"tick"})}function m1(n,t,e){let i=ih(n);return(e&&t!=="right"||!e&&t==="right")&&(i=u1(i)),i}function g1(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,p,y;const _=o-s,v=a-r;if(n.isHorizontal()){if(p=se(i,r,a),at(e)){const I=Object.keys(e)[0],P=e[I];y=d[I].getPixelForValue(P)+_-t}else e==="center"?y=(l.bottom+l.top)/2+_-t:y=Om(n,e,t);f=a-r}else{if(at(e)){const I=Object.keys(e)[0],P=e[I];p=d[I].getPixelForValue(P)-v+t}else e==="center"?p=(l.left+l.right)/2-v+t:p=Om(n,e,t);y=se(i,o,s),h=e==="left"?-Bt:Bt}return{titleX:p,titleY:y,maxWidth:f,rotation:h}}class Yi extends We{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=Ee(t,Number.POSITIVE_INFINITY),e=Ee(e,Number.NEGATIVE_INFINITY),i=Ee(i,Number.POSITIVE_INFINITY),s=Ee(s,Number.NEGATIVE_INFINITY),{min:Ee(t,i),max:Ee(e,s),minDefined:Lt(t),maxDefined:Lt(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:Ee(e,Ee(i,e)),max:Ee(i,Ee(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){bt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=IC(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?Vm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=s1(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){bt(this.options.afterUpdate,[this])}beforeSetDimensions(){bt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){bt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),bt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){bt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=bt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){bt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){bt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=Lm(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,p=Kt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:p/(i-1),h+6>a&&(a=p/(i-(t.offset?.5:1)),c=this.maxHeight-or(t.grid)-e.padding-Fm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=eh(Math.min(Math.asin(Kt((d.highest.height+6)/a,-1,1)),Math.asin(Kt(c/l,-1,1))-Math.asin(Kt(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){bt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){bt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=Fm(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=or(r)+c):(t.height=this.maxHeight,t.width=or(r)+c),i.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),p=i.padding*2,y=Be(this.labelRotation),_=Math.cos(y),v=Math.sin(y);if(a){const I=i.mirror?0:v*h.width+_*f.height;t.height=Math.min(this.maxHeight,t.height+I+p)}else{const I=i.mirror?0:_*h.width+v*f.height;t.width=Math.min(this.maxWidth,t.width+I+p)}this._calculatePadding(l,d,v,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,p=0;c?l?(f=s*t.width,p=i*e.height):(f=i*t.height,p=s*e.width):r==="start"?p=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,p=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((p-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){bt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)st(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Vm(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/Lm(e,i));let l=0,d=0,h,f,p,y,_,v,I,P,R,N,k;for(h=0;h<e;h+=c){if(y=t[h].label,_=this._resolveTickFontOptions(h),s.font=v=_.string,I=r[v]=r[v]||{data:{},gc:[]},P=_.lineHeight,R=N=0,!st(y)&&!St(y))R=sc(s,I.data,I.gc,R,y),N=P;else if(St(y))for(f=0,p=y.length;f<p;++f)k=y[f],!st(k)&&!St(k)&&(R=sc(s,I.data,I.gc,R,k),N+=P);o.push(R),a.push(N),l=Math.max(R,l),d=Math.max(N,d)}h1(r,e);const V=o.indexOf(l),E=a.indexOf(d),b=w=>({width:o[w]||0,height:a[w]||0});return{first:b(0),last:b(e-1),widest:b(V),highest:b(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return ZP(this._alignToPixels?Si(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=p1(this.getContext(),t,i))}return this.$context||(this.$context=f1(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Be(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=or(r),p=[],y=a.setContext(this.getContext()),_=y.display?y.width:0,v=_/2,I=function(ut){return Si(i,ut,_)};let P,R,N,k,V,E,b,w,A,S,C,x;if(o==="top")P=I(this.bottom),E=this.bottom-f,w=P-v,S=I(t.top)+v,x=t.bottom;else if(o==="bottom")P=I(this.top),S=t.top,x=I(t.bottom)-v,E=P+v,w=this.top+f;else if(o==="left")P=I(this.right),V=this.right-f,b=P-v,A=I(t.left)+v,C=t.right;else if(o==="right")P=I(this.left),A=t.left,C=I(t.right)-v,V=P+v,b=this.left+f;else if(e==="x"){if(o==="center")P=I((t.top+t.bottom)/2+.5);else if(at(o)){const ut=Object.keys(o)[0],pt=o[ut];P=I(this.chart.scales[ut].getPixelForValue(pt))}S=t.top,x=t.bottom,E=P+v,w=E+f}else if(e==="y"){if(o==="center")P=I((t.left+t.right)/2);else if(at(o)){const ut=Object.keys(o)[0],pt=o[ut];P=I(this.chart.scales[ut].getPixelForValue(pt))}V=P-v,b=V-f,A=t.left,C=t.right}const Y=Z(s.ticks.maxTicksLimit,h),K=Math.max(1,Math.ceil(h/Y));for(R=0;R<h;R+=K){const ut=this.getContext(R),pt=r.setContext(ut),$=a.setContext(ut),et=pt.lineWidth,Qt=pt.color,Xi=$.dash||[],he=$.dashOffset,Dt=pt.tickWidth,ln=pt.tickColor,Oe=pt.tickBorderDash||[],un=pt.tickBorderDashOffset;N=d1(this,R,c),N!==void 0&&(k=Si(i,N,et),l?V=b=A=C=k:E=w=S=x=k,p.push({tx1:V,ty1:E,tx2:b,ty2:w,x1:A,y1:S,x2:C,y2:x,width:et,color:Qt,borderDash:Xi,borderDashOffset:he,tickWidth:Dt,tickColor:ln,tickBorderDash:Oe,tickBorderDashOffset:un}))}return this._ticksLength=h,this._borderValue=P,p}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=or(i.grid),p=f+d,y=h?-d:p,_=-Be(this.labelRotation),v=[];let I,P,R,N,k,V,E,b,w,A,S,C,x="middle";if(s==="top")V=this.bottom-y,E=this._getXAxisLabelAlignment();else if(s==="bottom")V=this.top+y,E=this._getXAxisLabelAlignment();else if(s==="left"){const K=this._getYAxisLabelAlignment(f);E=K.textAlign,k=K.x}else if(s==="right"){const K=this._getYAxisLabelAlignment(f);E=K.textAlign,k=K.x}else if(e==="x"){if(s==="center")V=(t.top+t.bottom)/2+p;else if(at(s)){const K=Object.keys(s)[0],ut=s[K];V=this.chart.scales[K].getPixelForValue(ut)+p}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")k=(t.left+t.right)/2-p;else if(at(s)){const K=Object.keys(s)[0],ut=s[K];k=this.chart.scales[K].getPixelForValue(ut)}E=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?x="top":c==="end"&&(x="bottom"));const Y=this._getLabelSizes();for(I=0,P=a.length;I<P;++I){R=a[I],N=R.label;const K=r.setContext(this.getContext(I));b=this.getPixelForTick(I)+r.labelOffset,w=this._resolveTickFontOptions(I),A=w.lineHeight,S=St(N)?N.length:1;const ut=S/2,pt=K.color,$=K.textStrokeColor,et=K.textStrokeWidth;let Qt=E;o?(k=b,E==="inner"&&(I===P-1?Qt=this.options.reverse?"left":"right":I===0?Qt=this.options.reverse?"right":"left":Qt="center"),s==="top"?l==="near"||_!==0?C=-S*A+A/2:l==="center"?C=-Y.highest.height/2-ut*A+A:C=-Y.highest.height+A/2:l==="near"||_!==0?C=A/2:l==="center"?C=Y.highest.height/2-ut*A:C=Y.highest.height-S*A,h&&(C*=-1),_!==0&&!K.showLabelBackdrop&&(k+=A/2*Math.sin(_))):(V=b,C=(1-S)*A/2);let Xi;if(K.showLabelBackdrop){const he=de(K.backdropPadding),Dt=Y.heights[I],ln=Y.widths[I];let Oe=C-he.top,un=0-he.left;switch(x){case"middle":Oe-=Dt/2;break;case"bottom":Oe-=Dt;break}switch(E){case"center":un-=ln/2;break;case"right":un-=ln;break;case"inner":I===P-1?un-=ln:I>0&&(un-=ln/2);break}Xi={left:un,top:Oe,width:ln+he.width,height:Dt+he.height,color:K.backdropColor}}v.push({label:N,font:w,textOffset:C,options:{rotation:_,color:pt,strokeColor:$,strokeWidth:et,textAlign:Qt,textBaseline:x,translation:[k,V],backdrop:Xi}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Be(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?s?(d=this.right+r,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?s?(d=this.left+r,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const c=s[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=Si(t,this.left,o)-o/2,d=Si(t,this.right,a)+a/2,h=f=c):(h=Si(t,this.top,o)-o/2,f=Si(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Uc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Wi(i,l,0,d,c,a)}s&&zc(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=Ht(i.font),o=de(i.padding),a=i.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||at(e)?(c+=o.bottom,St(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=g1(this,c,e,a);Wi(t,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:m1(a,e,s),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Z(t.grid&&t.grid.z,-1),s=Z(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Yi.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Ht(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class ea{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;b1(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,y1(t,o,i),this.override&&Pt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Pt[s]&&(delete Pt[s][i],this.override&&delete qi[i])}}function y1(n,t,e){const i=Kr(Object.create(null),[e?Pt.get(e):{},Pt.get(t),n.defaults]);Pt.set(t,i),n.defaultRoutes&&v1(t,n.defaultRoutes),n.descriptors&&Pt.describe(t,n.descriptors)}function v1(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Pt.route(r,s,c,a)})}function b1(n){return"id"in n&&"defaults"in n}class _1{constructor(){this.controllers=new ea(ze,"datasets",!0),this.elements=new ea(We,"elements"),this.plugins=new ea(Object,"plugins"),this.scales=new ea(Yi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):mt(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=th(t);bt(i["before"+s],[],i),e[t](i),bt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Ye=new _1;class w1{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],c=[e,s,r.options];if(bt(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){st(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Z(i.options&&i.options.plugins,{}),r=E1(i);return s===!1&&!e?[]:I1(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function E1(n){const t={},e=[],i=Object.keys(Ye.plugins.items);for(let r=0;r<i.length;r++)e.push(Ye.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function T1(n,t){return!t&&n===!1?null:n===!0?{}:n}function I1(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=T1(i[c],s);l!==null&&r.push({plugin:a,options:A1(n.config,{plugin:a,local:e[c]},l,o)})}return r}function A1(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function xu(n,t){const e=Pt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function x1(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function S1(n,t){return n===t?"_index_":"_value_"}function Bm(n){if(n==="x"||n==="y"||n==="r")return n}function k1(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Su(n,...t){if(Bm(n))return n;for(const e of t){const i=e.axis||k1(e.position)||n.length>1&&Bm(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function $m(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function P1(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return $m(n,"x",e[0])||$m(n,"y",e[0])}return{}}function C1(n,t){const e=qi[n.type]||{scales:{}},i=t.scales||{},s=xu(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!at(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Su(o,a,P1(o,n),Pt.scales[a.type]),l=S1(c,s),d=e.scales||{};r[o]=Pr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||xu(a,t),d=(qi[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=x1(h,c),p=o[f+"AxisID"]||f;r[p]=r[p]||Object.create(null),Pr(r[p],[{axis:f},i[p],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Pr(a,[Pt.scales[a.type],Pt.scale])}),r}function k_(n){const t=n.options||(n.options={});t.plugins=Z(t.plugins,{}),t.scales=C1(n,t)}function P_(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function R1(n){return n=n||{},n.data=P_(n.data),k_(n),n}const Um=new Map,C_=new Set;function na(n,t){let e=Um.get(n);return e||(e=t(),Um.set(n,e),C_.add(e)),e}const ar=(n,t,e)=>{const i=gi(t,e);i!==void 0&&n.add(i)};class M1{constructor(t){this._config=R1(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=P_(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),k_(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return na(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return na(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return na(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return na(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>ar(c,t,h))),d.forEach(h=>ar(c,s,h)),d.forEach(h=>ar(c,qi[r]||{},h)),d.forEach(h=>ar(c,Pt,h)),d.forEach(h=>ar(c,Tu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),C_.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,qi[e]||{},Pt.datasets[e]||{},{type:e},Pt,Tu]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=zm(this._resolverCache,t,s);let c=o;if(N1(o,e)){r.$shared=!1,i=yi(i)?i():i;const l=this.createResolver(t,i,a);c=Ps(o,i,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,i=[""],s){const{resolver:r}=zm(this._resolverCache,t,i);return at(e)?Ps(r,e,void 0,s):r}}function zm(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:oh(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const D1=n=>at(n)&&Object.getOwnPropertyNames(n).some(t=>yi(n[t]));function N1(n,t){const{isScriptable:e,isIndexable:i}=c_(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(yi(a)||D1(a))||o&&St(a))return!0}return!1}var O1="4.5.1";const L1=["top","bottom","left","right","chartArea"];function jm(n,t){return n==="top"||n==="bottom"||L1.indexOf(n)===-1&&t==="x"}function Hm(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function qm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),bt(e&&e.onComplete,[n],t)}function V1(n){const t=n.chart,e=t.options.animation;bt(e&&e.onProgress,[n],t)}function R_(n){return lh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Sa={},Wm=n=>{const t=R_(n);return Object.values(Sa).filter(e=>e.canvas===t).pop()};function F1(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function B1(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class Ze{static register(...t){Ye.add(...t),Gm()}static unregister(...t){Ye.remove(...t),Gm()}constructor(t,e){const i=this.config=new M1(e),s=R_(t),r=Wm(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||i1(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=$P(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new w1,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=iC(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Sa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}mn.listen(this,"complete",qm),mn.listen(this,"progress",V1),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return st(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Ye}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():mm(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return hm(this.canvas,this.ctx),this}stop(){return mn.stop(this),this}resize(t,e){mn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,mm(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),bt(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};mt(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=Su(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),mt(r,o=>{const a=o.options,c=a.id,l=Su(c,a),d=Z(a.type,o.dtype);(a.position===void 0||jm(a.position,l)!==jm(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===d)h=i[c];else{const f=Ye.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),mt(s,(o,a)=>{o||delete i[a]}),mt(i,o=>{ce.configure(this,o,o.options),ce.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(Hm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||xu(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=Ye.getController(a),{datasetElementType:l,dataElementType:d}=Pt.datasets[a];Object.assign(c,{dataElementType:Ye.getElement(d),datasetElementType:l&&Ye.getElement(l)}),o.controller=new c(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){mt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||mt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Hm("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){mt(this.scales,t=>{ce.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!im(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;F1(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!im(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ce.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],mt(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,yi(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(mn.has(this)?this.attached&&!mn.running(this)&&mn.start(this):(this.draw(),qm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=b_(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&Uc(e,s),t.controller.draw(),s&&zc(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return En(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=LR.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=wi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Yr(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),mn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),hm(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Sa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};mt(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},s=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){mt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},mt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!ec(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),c=WP(t),l=B1(t,this._lastEvent,i,c);i&&(this._lastEvent=null,bt(r.onHover,[t,a,this],this),c&&bt(r.onClick,[t,a,this],this));const d=!ec(a,s);return(d||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,d}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}H(Ze,"defaults",Pt),H(Ze,"instances",Sa),H(Ze,"overrides",qi),H(Ze,"registry",Ye),H(Ze,"version",O1),H(Ze,"getChart",Wm);function Gm(){return mt(Ze.instances,n=>n._plugins.invalidate())}function $1(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,oe(i-e));if(n.beginPath(),n.arc(s,r,o-l/2,i+h/2,e-h/2),a>0){const f=Math.min(l/a,oe(i-e));n.arc(s,r,a+l/2,e-f/2,i+f/2,!0)}else{const f=Math.min(l/2,o*oe(i-e));if(d==="round")n.arc(s,r,f,e-ht/2,i+ht/2,!0);else if(d==="bevel"){const p=2*f*f,y=-p*Math.cos(e+ht/2)+s,_=-p*Math.sin(e+ht/2)+r,v=p*Math.cos(i+ht/2)+s,I=p*Math.sin(i+ht/2)+r;n.lineTo(y,_),n.lineTo(v,I)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function U1(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=s/a;n.beginPath(),n.arc(r,o,a,i-l,e+l),c>s?(l=s/c,n.arc(r,o,c,e+l,i-l,!0)):n.arc(r,o,s,e+Bt,i-Bt),n.closePath(),n.clip()}function z1(n){return rh(n,["outerStart","outerEnd","innerStart","innerEnd"])}function j1(n,t,e,i){const s=z1(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=c=>{const l=(e-Math.min(r,c))*i/2;return Kt(c,0,Math.min(r,l))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Kt(s.innerStart,0,o),innerEnd:Kt(s.innerEnd,0,o)}}function ns(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function ac(n,t,e,i,s,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+i+e-l,0),f=d>0?d+i+e+l:0;let p=0;const y=s-c;if(i){const K=d>0?d-i:0,ut=h>0?h-i:0,pt=(K+ut)/2,$=pt!==0?y*pt/(pt+i):y;p=(y-$)/2}const _=Math.max(.001,y*h-e/ht)/h,v=(y-_)/2,I=c+v+p,P=s-v-p,{outerStart:R,outerEnd:N,innerStart:k,innerEnd:V}=j1(t,f,h,P-I),E=h-R,b=h-N,w=I+R/E,A=P-N/b,S=f+k,C=f+V,x=I+k/S,Y=P-V/C;if(n.beginPath(),r){const K=(w+A)/2;if(n.arc(o,a,h,w,K),n.arc(o,a,h,K,A),N>0){const et=ns(b,A,o,a);n.arc(et.x,et.y,N,A,P+Bt)}const ut=ns(C,P,o,a);if(n.lineTo(ut.x,ut.y),V>0){const et=ns(C,Y,o,a);n.arc(et.x,et.y,V,P+Bt,Y+Math.PI)}const pt=(P-V/f+(I+k/f))/2;if(n.arc(o,a,f,P-V/f,pt,!0),n.arc(o,a,f,pt,I+k/f,!0),k>0){const et=ns(S,x,o,a);n.arc(et.x,et.y,k,x+Math.PI,I-Bt)}const $=ns(E,I,o,a);if(n.lineTo($.x,$.y),R>0){const et=ns(E,w,o,a);n.arc(et.x,et.y,R,I-Bt,w)}}else{n.moveTo(o,a);const K=Math.cos(w)*h+o,ut=Math.sin(w)*h+a;n.lineTo(K,ut);const pt=Math.cos(A)*h+o,$=Math.sin(A)*h+a;n.lineTo(pt,$)}n.closePath()}function H1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){ac(n,t,e,i,c,s);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%It||It))}return ac(n,t,e,i,c,s),n.fill(),c}function q1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:p}=c,y=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,y?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let _=t.endAngle;if(r){ac(n,t,e,i,_,s);for(let v=0;v<r;++v)n.stroke();isNaN(a)||(_=o+(a%It||It))}y&&U1(n,t,_),c.selfJoin&&_-o>=ht&&p===0&&d!=="miter"&&$1(n,t,_),r||(ac(n,t,e,i,_,s),n.stroke())}class yr extends We{constructor(e){super();H(this,"circumference");H(this,"endAngle");H(this,"fullCircles");H(this,"innerRadius");H(this,"outerRadius");H(this,"pixelMargin");H(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=Jb(r,{x:e,y:i}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),p=(this.options.spacing+this.options.borderWidth)/2,y=Z(f,l-c),_=Xr(o,c,l)&&c!==l,v=y>=It||_,I=_n(a,d+p,h+p);return v&&I}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:i+Math.cos(h)*f,y:s+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>It?Math.floor(s/It):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(ht,s||0)),d=r*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,H1(e,this,d,o,a),q1(e,this,d,o,a),e.restore()}}H(yr,"id","arc"),H(yr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),H(yr,"defaultRoutes",{backgroundColor:"backgroundColor"}),H(yr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function M_(n,t,e=t){n.lineCap=Z(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Z(e.borderDash,t.borderDash)),n.lineDashOffset=Z(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Z(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Z(e.borderWidth,t.borderWidth),n.strokeStyle=Z(e.borderColor,t.borderColor)}function W1(n,t,e){n.lineTo(e.x,e.y)}function G1(n){return n.stepped?mC:n.tension||n.cubicInterpolationMode==="monotone"?gC:W1}function D_(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,c=Math.max(s,o),l=Math.min(r,a),d=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!d?i+l-c:l-c}}function K1(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:c,ilen:l}=D_(s,e,i),d=G1(r);let{move:h=!0,reverse:f}=i||{},p,y,_;for(p=0;p<=l;++p)y=s[(a+(f?l-p:p))%o],!y.skip&&(h?(n.moveTo(y.x,y.y),h=!1):d(n,_,y,f,r.stepped),_=y);return c&&(y=s[(a+(f?l:0))%o],d(n,_,y,f,r.stepped)),!!c}function Y1(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=D_(s,e,i),{move:c=!0,reverse:l}=i||{};let d=0,h=0,f,p,y,_,v,I;const P=N=>(o+(l?a-N:N))%r,R=()=>{_!==v&&(n.lineTo(d,v),n.lineTo(d,_),n.lineTo(d,I))};for(c&&(p=s[P(0)],n.moveTo(p.x,p.y)),f=0;f<=a;++f){if(p=s[P(f)],p.skip)continue;const N=p.x,k=p.y,V=N|0;V===y?(k<_?_=k:k>v&&(v=k),d=(h*d+N)/++h):(R(),n.lineTo(N,k),y=V,h=0,_=v=k),I=k}R()}function ku(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Y1:K1}function X1(n){return n.stepped?KC:n.tension||n.cubicInterpolationMode==="monotone"?YC:Mi}function Q1(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),M_(n,t.options),n.stroke(s)}function J1(n,t,e,i){const{segments:s,options:r}=t,o=ku(t);for(const a of s)M_(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const Z1=typeof Path2D=="function";function tM(n,t,e,i){Z1&&!t.options.segment?Q1(n,t,e,i):J1(n,t,e,i)}class Qn extends We{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;$C(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=eR(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=v_(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=X1(i);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],p=r[h],y=r[f];if(p===y){a.push(p);continue}const _=Math.abs((s-p[e])/(y[e]-p[e])),v=c(p,y,_,i.stepped);v[e]=t[e],a.push(v)}return a.length===1?a[0]:a}pathSegment(t,e,i){return ku(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=ku(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),tM(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}H(Qn,"id","line"),H(Qn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),H(Qn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),H(Qn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Km(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class ka extends We{constructor(e){super();H(this,"parsed");H(this,"skip");H(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return Km(this,e,"x",i)}inYRange(e,i){return Km(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!En(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Iu(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}H(ka,"id","point"),H(ka,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),H(ka,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function N_(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,s),c=Math.max(e,s),l=i-h,d=i+h):(h=r/2,a=e-h,c=e+h,l=Math.min(i,s),d=Math.max(i,s)),{left:a,top:l,right:c,bottom:d}}function Jn(n,t,e,i){return n?0:Kt(t,e,i)}function eM(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=a_(i);return{t:Jn(s.top,r.top,0,e),r:Jn(s.right,r.right,0,t),b:Jn(s.bottom,r.bottom,0,e),l:Jn(s.left,r.left,0,t)}}function nM(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Li(s),o=Math.min(t,e),a=n.borderSkipped,c=i||at(s);return{topLeft:Jn(!c||a.top||a.left,r.topLeft,0,o),topRight:Jn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Jn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Jn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function iM(n){const t=N_(n),e=t.right-t.left,i=t.bottom-t.top,s=eM(n,e/2,i/2),r=nM(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function $l(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&N_(n,i);return a&&(s||_n(t,a.left,a.right))&&(r||_n(e,a.top,a.bottom))}function sM(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function rM(n,t){n.rect(t.x,t.y,t.w,t.h)}function Ul(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class Pa extends We{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=iM(this),a=sM(o.radius)?Qr:rM;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Ul(o,e,r)),t.clip(),a(t,Ul(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Ul(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return $l(this,t,e,i)}inXRange(t,e){return $l(this,t,null,e)}inYRange(t,e){return $l(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}H(Pa,"id","bar"),H(Pa,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),H(Pa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var oM=Object.freeze({__proto__:null,ArcElement:yr,BarElement:Pa,LineElement:Qn,PointElement:ka});const Pu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ym=Pu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function O_(n){return Pu[n%Pu.length]}function L_(n){return Ym[n%Ym.length]}function aM(n,t){return n.borderColor=O_(t),n.backgroundColor=L_(t),++t}function cM(n,t){return n.backgroundColor=n.data.map(()=>O_(t++)),t}function lM(n,t){return n.backgroundColor=n.data.map(()=>L_(t++)),t}function uM(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof Ni?t=cM(e,t):s instanceof Dr?t=lM(e,t):s&&(t=aM(e,t))}}function Xm(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function dM(n){return n&&(n.borderColor||n.backgroundColor)}function hM(){return Pt.borderColor!=="rgba(0,0,0,0.1)"||Pt.backgroundColor!=="rgba(0,0,0,0.1)"}var fM={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=Xm(i)||dM(s)||r&&Xm(r)||hM();if(!e.forceOverride&&o)return;const a=uM(n);i.forEach(a)}};function pM(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,p,y,_;for(o[c++]=n[d],h=0;h<r-2;h++){let v=0,I=0,P;const R=Math.floor((h+1)*a)+1+t,N=Math.min(Math.floor((h+2)*a)+1,e)+t,k=N-R;for(P=R;P<N;P++)v+=n[P].x,I+=n[P].y;v/=k,I/=k;const V=Math.floor(h*a)+1+t,E=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:w}=n[d];for(p=y=-1,P=V;P<E;P++)y=.5*Math.abs((b-v)*(n[P].y-w)-(b-n[P].x)*(I-w)),y>p&&(p=y,f=n[P],_=P);o[c++]=f,d=_}return o[c++]=n[l],o}function mM(n,t,e,i){let s=0,r=0,o,a,c,l,d,h,f,p,y,_;const v=[],I=t+e-1,P=n[t].x,N=n[I].x-P;for(o=t;o<t+e;++o){a=n[o],c=(a.x-P)/N*i,l=a.y;const k=c|0;if(k===d)l<y?(y=l,h=o):l>_&&(_=l,f=o),s=(r*s+a.x)/++r;else{const V=o-1;if(!st(h)&&!st(f)){const E=Math.min(h,f),b=Math.max(h,f);E!==p&&E!==V&&v.push({...n[E],x:s}),b!==p&&b!==V&&v.push({...n[b],x:s})}o>0&&V!==p&&v.push(n[V]),v.push(a),d=k,r=0,y=_=l,h=f=p=o}}return v}function V_(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Qm(n){n.data.datasets.forEach(t=>{V_(t)})}function gM(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(i=Kt(wn(t,r.axis,o).lo,0,e-1)),l?s=Kt(wn(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var yM={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Qm(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,c=n.getDatasetMeta(r),l=o||s.data;if(mr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=gM(c,l);const p=e.threshold||4*i;if(f<=p){V_(s);return}st(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let y;switch(e.algorithm){case"lttb":y=pM(l,h,f,i,e);break;case"min-max":y=mM(l,h,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=y})},destroy(n){Qm(n)}};function vM(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:c,end:l}=a;l=qc(c,l,s);const d=Cu(e,s[c],s[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:s[c],end:s[l]});continue}const h=v_(t,d);for(const f of h){const p=Cu(e,r[f.start],r[f.end],f.loop),y=y_(a,s,p);for(const _ of y)o.push({source:_,target:f,start:{[e]:Jm(d,p,"start",Math.max)},end:{[e]:Jm(d,p,"end",Math.min)}})}}return o}function Cu(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=oe(s),r=oe(r)),{property:n,start:s,end:r}}function bM(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=qc(o,a,s);const c=s[o],l=s[a];i!==null?(r.push({x:c.x,y:i}),r.push({x:l.x,y:i})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function qc(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Jm(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function F_(n,t){let e=[],i=!1;return St(n)?(i=!0,e=n):e=bM(n,t),e.length?new Qn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Zm(n){return n&&n.fill!==!1}function _M(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Lt(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function wM(n,t,e){const i=AM(n);if(at(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Lt(s)&&Math.floor(s)===s?EM(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function EM(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function TM(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:at(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function IM(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:at(n)?i=n.value:i=t.getBaseValue(),i}function AM(n){const t=n.options,e=t.fill;let i=Z(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function xM(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=SM(t,e);a.push(F_({x:null,y:t.bottom},i));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)kM(s,o[d],a)}return new Qn({points:s,options:{}})}function SM(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function kM(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:c}=PM(r,t,"x");if(!(!c||o&&a)){if(o)i.unshift(c);else if(n.push(c),!a)break}}n.push(...i)}function PM(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(_n(s,h,f)){a=s===h,c=s===f;break}}return{first:a,last:c,point:i}}class B_{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:It},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function CM(n){const{chart:t,fill:e,line:i}=n;if(Lt(e))return RM(t,e);if(e==="stack")return xM(n);if(e==="shape")return!0;const s=MM(n);return s instanceof B_?s:F_(s,i)}function RM(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function MM(n){return(n.scale||{}).getPointPositionForValue?NM(n):DM(n)}function DM(n){const{scale:t={},fill:e}=n,i=TM(e,t);if(Lt(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function NM(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=IM(e,t,r),a=[];if(i.grid.circular){const c=t.getPointPositionForValue(0,r);return new B_({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)a.push(t.getPointPositionForValue(c,o));return a}function zl(n,t,e){const i=CM(t),{chart:s,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:p=h}=d||{},y=s.getDatasetMeta(r),_=b_(s,y);i&&o.points.length&&(Uc(n,e),OM(n,{line:o,target:i,above:f,below:p,area:e,scale:a,axis:c,clip:_}),zc(n))}function OM(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==s&&(l==="x"?(tg(n,i,o.top),jl(n,{line:e,target:i,color:s,scale:a,property:l,clip:c}),n.restore(),n.save(),tg(n,i,o.bottom)):l==="y"&&(eg(n,i,o.left),jl(n,{line:e,target:i,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),eg(n,i,o.right),d=s)),jl(n,{line:e,target:i,color:d,scale:a,property:l,clip:c}),n.restore()}function tg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[qc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function eg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[qc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function jl(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,c=vM(e,i,s);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:p=r}={}}=l,y=i!==!0;n.save(),n.fillStyle=p,LM(n,o,a,y&&Cu(s,h,f)),n.beginPath();const _=!!e.pathSegment(n,l);let v;if(y){_?n.closePath():ng(n,i,f,s);const I=!!i.pathSegment(n,d,{move:_,reverse:!0});v=_&&I,v||ng(n,i,h,s)}n.closePath(),n.fill(v?"evenodd":"nonzero"),n.restore()}}function LM(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=s.top,d=a,h=s.bottom):(c=s.left,l=o,d=s.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function ng(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var VM={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,c;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Qn&&(c={visible:n.isDatasetVisible(o),index:o,fill:wM(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=_M(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&zl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;Zm(r)&&zl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Zm(i)||e.drawTime!=="beforeDatasetDraw"||zl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const ig=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},FM=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class sg extends We{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=bt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=Ht(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=ig(i,r);let l,d;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=s+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,p=-d;return this.legendItems.forEach((y,_)=>{const v=i+e/2+r.measureText(y.text).width;(_===0||l[l.length-1]+v+2*a>o)&&(h+=d,l[l.length-(_>0?0:1)]=0,p+=d,f++),c[_]={left:0,top:p,row:f,width:v,height:s},l[l.length-1]+=v+a}),h}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,p=0,y=0,_=0;return this.legendItems.forEach((v,I)=>{const{itemWidth:P,itemHeight:R}=BM(i,e,r,v,s);I>0&&p+R+2*a>d&&(h+=f+a,l.push({width:f,height:p}),y+=f+a,_++,f=p=0),c[I]={left:y,top:p,col:_,width:P,height:R},f=Math.max(f,P),p+=R+a}),h+=f,l.push({width:f,height:p}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=vs(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=se(i,this.left+s,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=se(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+t+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=se(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=se(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Uc(t,this),this._draw(),zc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Pt.color,c=vs(t.rtl,this.left,this.width),l=Ht(o.font),{padding:d}=o,h=l.size,f=h/2;let p;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:y,boxHeight:_,itemHeight:v}=ig(o,h),I=function(V,E,b){if(isNaN(y)||y<=0||isNaN(_)||_<0)return;s.save();const w=Z(b.lineWidth,1);if(s.fillStyle=Z(b.fillStyle,a),s.lineCap=Z(b.lineCap,"butt"),s.lineDashOffset=Z(b.lineDashOffset,0),s.lineJoin=Z(b.lineJoin,"miter"),s.lineWidth=w,s.strokeStyle=Z(b.strokeStyle,a),s.setLineDash(Z(b.lineDash,[])),o.usePointStyle){const A={radius:_*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:w},S=c.xPlus(V,y/2),C=E+f;o_(s,A,S,C,o.pointStyleWidth&&y)}else{const A=E+Math.max((h-_)/2,0),S=c.leftForLtr(V,y),C=Li(b.borderRadius);s.beginPath(),Object.values(C).some(x=>x!==0)?Qr(s,{x:S,y:A,w:y,h:_,radius:C}):s.rect(S,A,y,_),s.fill(),w!==0&&s.stroke()}s.restore()},P=function(V,E,b){Wi(s,b.text,V,E+v/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},R=this.isHorizontal(),N=this._computeTitleHeight();R?p={x:se(r,this.left+d,this.right-i[0]),y:this.top+d+N,line:0}:p={x:this.left+d,y:se(r,this.top+N+d,this.bottom-e[0].height),line:0},p_(this.ctx,t.textDirection);const k=v+d;this.legendItems.forEach((V,E)=>{s.strokeStyle=V.fontColor,s.fillStyle=V.fontColor;const b=s.measureText(V.text).width,w=c.textAlign(V.textAlign||(V.textAlign=o.textAlign)),A=y+f+b;let S=p.x,C=p.y;c.setWidth(this.width),R?E>0&&S+A+d>this.right&&(C=p.y+=k,p.line++,S=p.x=se(r,this.left+d,this.right-i[p.line])):E>0&&C+k>this.bottom&&(S=p.x=S+e[p.line].width+d,p.line++,C=p.y=se(r,this.top+N+d,this.bottom-e[p.line].height));const x=c.x(S);if(I(x,C,V),S=sC(w,S+y+f,R?S+A:this.right,t.rtl),P(c.x(S),C,V),R)p.x+=A+d;else if(typeof V.text!="string"){const Y=l.lineHeight;p.y+=$_(V,Y)+d}else p.y+=k}),m_(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=Ht(e.font),s=de(e.padding);if(!e.display)return;const r=vs(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=i.size/2,l=s.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=se(t.align,h,this.right-f);else{const y=this.columnSizes.reduce((_,v)=>Math.max(_,v.height),0);d=l+se(t.align,this.top,this.bottom-y-t.labels.padding-this._computeTitleHeight())}const p=se(a,h,h+f);o.textAlign=r.textAlign(ih(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Wi(o,e.text,p,d,i)}_computeTitleHeight(){const t=this.options.title,e=Ht(t.font),i=de(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(_n(t,this.left,this.right)&&_n(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],_n(t,s.left,s.left+s.width)&&_n(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!zM(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=FM(s,i);s&&!r&&bt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&bt(e.onHover,[t,i,this],this)}else i&&bt(e.onClick,[t,i,this],this)}}function BM(n,t,e,i,s){const r=$M(i,n,t,e),o=UM(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function $M(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function UM(n,t,e){let i=n;return typeof t.text!="string"&&(i=$_(t,e)),i}function $_(n,t){const e=n.text?n.text.length:0;return t*e}function zM(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var jM={id:"legend",_element:sg,start(n,t,e){const i=n.legend=new sg({ctx:n.ctx,options:e,chart:n});ce.configure(n,i,e),ce.addBox(n,i)},stop(n){ce.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;ce.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=de(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class hh extends We{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=St(i.text)?i.text.length:1;this._padding=de(i.padding);const r=s*Ht(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=se(a,i,r),h=e+t,l=r-i):(o.position==="left"?(d=i+t,h=se(a,s,e),c=ht*-.5):(d=r-t,h=se(a,e,s),c=ht*.5),l=s-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Ht(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Wi(t,e.text,0,0,i,{color:e.color,maxWidth:c,rotation:l,textAlign:ih(e.align),textBaseline:"middle",translation:[o,a]})}}function HM(n,t){const e=new hh({ctx:n.ctx,options:t,chart:n});ce.configure(n,e,t),ce.addBox(n,e),n.titleBlock=e}var qM={id:"title",_element:hh,start(n,t,e){HM(n,e)},stop(n){const t=n.titleBlock;ce.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;ce.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ia=new WeakMap;var WM={id:"subtitle",start(n,t,e){const i=new hh({ctx:n.ctx,options:e,chart:n});ce.configure(n,i,e),ce.addBox(n,i),ia.set(n,i)},stop(n){ce.removeBox(n,ia.get(n)),ia.delete(n)},beforeUpdate(n,t,e){const i=ia.get(n);ce.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const vr={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();i.add(c.x),s+=c.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,c)=>a+c)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Eu(t,l);d<s&&(s=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,i=c.y}return{x:e,y:i}}};function Ke(n,t){return t&&(St(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function gn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function GM(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function rg(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Ht(t.bodyFont),l=Ht(t.titleFont),d=Ht(t.footerFont),h=r.length,f=s.length,p=i.length,y=de(t.padding);let _=y.height,v=0,I=i.reduce((N,k)=>N+k.before.length+k.lines.length+k.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,h&&(_+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),I){const N=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;_+=p*N+(I-p)*c.lineHeight+(I-1)*t.bodySpacing}f&&(_+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let P=0;const R=function(N){v=Math.max(v,e.measureText(N).width+P)};return e.save(),e.font=l.string,mt(n.title,R),e.font=c.string,mt(n.beforeBody.concat(n.afterBody),R),P=t.displayColors?o+2+t.boxPadding:0,mt(i,N=>{mt(N.before,R),mt(N.lines,R),mt(N.after,R)}),P=0,e.font=d.string,mt(n.footer,R),e.restore(),v+=y.width,{width:v,height:_}}function KM(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function YM(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function XM(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),YM(l,n,t,e)&&(l="center"),l}function og(n,t,e){const i=e.yAlign||t.yAlign||KM(n,e);return{xAlign:e.xAlign||t.xAlign||XM(n,t,e,i),yAlign:i}}function QM(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function JM(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function ag(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=s+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:p}=Li(o);let y=QM(t,a);const _=JM(t,c,l);return c==="center"?a==="left"?y+=l:a==="right"&&(y-=l):a==="left"?y-=Math.max(d,f)+s:a==="right"&&(y+=Math.max(h,p)+s),{x:Kt(y,0,i.width-t.width),y:Kt(_,0,i.height-t.height)}}function sa(n,t,e){const i=de(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function cg(n){return Ke([],gn(n))}function ZM(n,t,e){return wi(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function lg(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const U_={beforeTitle:fn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:fn,beforeBody:fn,beforeLabel:fn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return st(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:fn,afterBody:fn,beforeFooter:fn,footer:fn,afterFooter:fn};function ye(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?U_[t].call(e,i):s}class Ru extends We{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new __(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=ZM(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=ye(i,"beforeTitle",this,t),r=ye(i,"title",this,t),o=ye(i,"afterTitle",this,t);let a=[];return a=Ke(a,gn(s)),a=Ke(a,gn(r)),a=Ke(a,gn(o)),a}getBeforeBody(t,e){return cg(ye(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return mt(t,r=>{const o={before:[],lines:[],after:[]},a=lg(i,r);Ke(o.before,gn(ye(a,"beforeLabel",this,r))),Ke(o.lines,ye(a,"label",this,r)),Ke(o.after,gn(ye(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return cg(ye(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=ye(i,"beforeFooter",this,t),r=ye(i,"footer",this,t),o=ye(i,"afterFooter",this,t);let a=[];return a=Ke(a,gn(s)),a=Ke(a,gn(r)),a=Ke(a,gn(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(GM(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,i))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,i))),mt(a,d=>{const h=lg(t.callbacks,d);s.push(ye(h,"labelColor",this,d)),r.push(ye(h,"labelPointStyle",this,d)),o.push(ye(h,"labelTextColor",this,d))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=vr[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=rg(this,i),l=Object.assign({},a,c),d=og(this.chart,i,l),h=ag(i,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Li(a),{x:f,y:p}=t,{width:y,height:_}=e;let v,I,P,R,N,k;return r==="center"?(N=p+_/2,s==="left"?(v=f,I=v-o,R=N+o,k=N-o):(v=f+y,I=v+o,R=N-o,k=N+o),P=v):(s==="left"?I=f+Math.max(c,d)+o:s==="right"?I=f+y-Math.max(l,h)-o:I=this.caretX,r==="top"?(R=p,N=R-o,v=I-o,P=I+o):(R=p+_,N=R+o,v=I+o,P=I-o),k=R),{x1:v,x2:I,x3:P,y1:R,y2:N,y3:k}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=vs(i.rtl,this.x,this.width);for(t.x=sa(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=Ht(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,d=Ht(r.bodyFont),h=sa(this,"left",r),f=s.x(h),p=c<d.lineHeight?(d.lineHeight-c)/2:0,y=e.y+p;if(r.usePointStyle){const _={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=s.leftForLtr(f,l)+l/2,I=y+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Iu(t,_,v,I),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Iu(t,_,v,I)}else{t.lineWidth=at(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(f,l),v=s.leftForLtr(s.xPlus(f,1),l-2),I=Li(o.borderRadius);Object.values(I).some(P=>P!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Qr(t,{x:_,y,w:l,h:c,radius:I}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Qr(t,{x:v,y:y+1,w:l-2,h:c-2,radius:I}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,y,l,c),t.strokeRect(_,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(v,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=i,h=Ht(i.bodyFont);let f=h.lineHeight,p=0;const y=vs(i.rtl,this.x,this.width),_=function(b){e.fillText(b,y.x(t.x+p),t.y+f/2),t.y+=f+r},v=y.textAlign(o);let I,P,R,N,k,V,E;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=sa(this,v,i),e.fillStyle=i.bodyColor,mt(this.beforeBody,_),p=a&&v!=="right"?o==="center"?l/2+d:l+2+d:0,N=0,V=s.length;N<V;++N){for(I=s[N],P=this.labelTextColors[N],e.fillStyle=P,mt(I.before,_),R=I.lines,a&&R.length&&(this._drawColorBox(e,t,N,y,i),f=Math.max(h.lineHeight,c)),k=0,E=R.length;k<E;++k)_(R[k]),f=h.lineHeight;mt(I.after,_)}p=0,f=h.lineHeight,mt(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const c=vs(i.rtl,this.x,this.width);for(t.x=sa(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=c.textAlign(i.footerAlign),e.textBaseline="middle",o=Ht(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=i,{topLeft:h,topRight:f,bottomLeft:p,bottomRight:y}=Li(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+l,c+d-y),e.quadraticCurveTo(a+l,c+d,a+l-y,c+d),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+p,c+d),e.quadraticCurveTo(a,c+d,a,c+d-p),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=vr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=rg(this,t),c=Object.assign({},o,this._size),l=og(e,t,c),d=ag(t,c,l,e);(s._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=de(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),p_(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),m_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!ec(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),c=e||!ec(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=vr[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}H(Ru,"positioners",vr);var tD={id:"tooltip",_element:Ru,positioners:vr,afterInit(n,t,e){e&&(n.tooltip=new Ru({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:U_},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},eD=Object.freeze({__proto__:null,Colors:fM,Decimation:yM,Filler:VM,Legend:jM,SubTitle:WM,Title:qM,Tooltip:tD});const nD=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function iD(n,t,e,i){const s=n.indexOf(t);if(s===-1)return nD(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const sD=(n,t)=>n===null?null:Kt(Math.round(n),0,t);function ug(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Mu extends Yi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(st(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:iD(i,t,Z(e,t),this._addedLabels),sD(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return ug.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}H(Mu,"id","category"),H(Mu,"defaults",{ticks:{callback:ug}});function rD(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,p=r||1,y=d-1,{min:_,max:v}=t,I=!st(o),P=!st(a),R=!st(l),N=(v-_)/(h+1);let k=rm((v-_)/y/p)*p,V,E,b,w;if(k<1e-14&&!I&&!P)return[{value:_},{value:v}];w=Math.ceil(v/k)-Math.floor(_/k),w>y&&(k=rm(w*k/y/p)*p),st(c)||(V=Math.pow(10,c),k=Math.ceil(k*V)/V),s==="ticks"?(E=Math.floor(_/k)*k,b=Math.ceil(v/k)*k):(E=_,b=v),I&&P&&r&&QP((a-o)/r,k/1e3)?(w=Math.round(Math.min((a-o)/k,d)),k=(a-o)/w,E=o,b=a):R?(E=I?o:E,b=P?a:b,w=l-1,k=(b-E)/w):(w=(b-E)/k,Cr(w,Math.round(w),k/1e3)?w=Math.round(w):w=Math.ceil(w));const A=Math.max(om(k),om(E));V=Math.pow(10,st(c)?A:c),E=Math.round(E*V)/V,b=Math.round(b*V)/V;let S=0;for(I&&(f&&E!==o?(e.push({value:o}),E<o&&S++,Cr(Math.round((E+S*k)*V)/V,o,dg(o,N,n))&&S++):E<o&&S++);S<w;++S){const C=Math.round((E+S*k)*V)/V;if(P&&C>a)break;e.push({value:C})}return P&&f&&b!==a?e.length&&Cr(e[e.length-1].value,a,dg(a,N,n))?e[e.length-1].value=a:e.push({value:a}):(!P||b===a)&&e.push({value:b}),e}function dg(n,t,{horizontal:e,minRotation:i}){const s=Be(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class cc extends Yi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return st(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=e?s:c,a=c=>r=i?r:c;if(t){const c=rn(s),l=rn(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(s-c)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=rD(s,r);return t.bounds==="ticks"&&Qb(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return bo(t,this.chart.options.locale,this.options.ticks.format)}}class Du extends cc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Lt(t)?t:0,this.max=Lt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Be(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}H(Du,"id","linear"),H(Du,"defaults",{ticks:{callback:$c.formatters.numeric}});const Zr=n=>Math.floor(Yn(n)),Pi=(n,t)=>Math.pow(10,Zr(n)+t);function hg(n){return n/Math.pow(10,Zr(n))===1}function fg(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function oD(n,t){const e=t-n;let i=Zr(e);for(;fg(n,t,i)>10;)i++;for(;fg(n,t,i)<10;)i--;return Math.min(i,Zr(n))}function aD(n,{min:t,max:e}){t=Ee(n.min,t);const i=[],s=Zr(t);let r=oD(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Ee(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)i.push({value:f,major:hg(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const p=Ee(n.max,f);return i.push({value:p,major:hg(p),significand:h}),i}class Nu extends Yi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=cc.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return Lt(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Lt(t)?Math.max(0,t):null,this.max=Lt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Lt(this._userMin)&&(this.min=t===Pi(this.min,0)?Pi(this.min,-1):Pi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Pi(i,-1)),o(Pi(s,1)))),i<=0&&r(Pi(s,-1)),s<=0&&o(Pi(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=aD(e,this);return t.bounds==="ticks"&&Qb(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":bo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Yn(t),this._valueRange=Yn(this.max)-Yn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Yn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}H(Nu,"id","logarithmic"),H(Nu,"defaults",{ticks:{callback:$c.formatters.logarithmic,major:{enabled:!0}}});function Ou(n){const t=n.ticks;if(t.display&&n.display){const e=de(t.backdropPadding);return Z(t.font&&t.font.size,Pt.font.size)+e.height}return 0}function cD(n,t,e){return e=St(e)?e:[e],{w:pC(n,t.string,e),h:e.length*t.lineHeight}}function pg(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function lD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?ht/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));s[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+s[c],a),h=Ht(l.font),f=cD(n.ctx,h,n._pointLabels[c]);i[c]=f;const p=oe(n.getIndexAngle(c)+a),y=Math.round(eh(p)),_=pg(y,d.x,f.w,0,180),v=pg(y,d.y,f.h,90,270);uD(e,t,p,_,v)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=fD(n,i,s)}function uD(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(c=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-c)):s.end>t.b&&(c=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function dD(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,i+s+o,r),l=Math.round(eh(oe(c.angle+Bt))),d=gD(c.y,a.h,l),h=pD(l),f=mD(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function hD(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(En({x:e,y:i},t)||En({x:e,y:r},t)||En({x:s,y:i},t)||En({x:s,y:r},t))}function fD(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Ou(r)/2,additionalAngle:o?ht/s:0};let l;for(let d=0;d<s;d++){c.padding=e[d],c.size=t[d];const h=dD(n,d,c);i.push(h),a==="auto"&&(h.visible=hD(h,l),h.visible&&(l=h))}return i}function pD(n){return n===0||n===180?"center":n<180?"left":"right"}function mD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function gD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function yD(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!st(a)){const c=Li(t.borderRadius),l=de(t.backdropPadding);n.fillStyle=a;const d=i-l.left,h=s-l.top,f=r-i+l.width,p=o-s+l.height;Object.values(c).some(y=>y!==0)?(n.beginPath(),Qr(n,{x:d,y:h,w:f,h:p,radius:c}),n.fill()):n.fillRect(d,h,f,p)}}function vD(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));yD(e,o,r);const a=Ht(o.font),{x:c,y:l,textAlign:d}=r;Wi(e,n._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function z_(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,It);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function bD(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!i||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),z_(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function _D(n,t,e){return wi(n,{label:e,index:t,type:"pointLabel"})}class br extends cc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=de(Ou(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Lt(t)&&!isNaN(t)?t:0,this.max=Lt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ou(this.options))}generateTickLabels(t){cc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=bt(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?lD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=It/(this._pointLabels.length||1),i=this.options.startAngle||0;return oe(t*e+Be(i))}getDistanceFromCenterForValue(t){if(st(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(st(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return _D(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Bt+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),z_(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&vD(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),p=s.setContext(f),y=r.setContext(f);bD(this,p,c,o,y)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const d=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=i.setContext(this.getContext(c)),d=Ht(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=de(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}Wi(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}H(br,"id","radialLinear"),H(br,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:$c.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),H(br,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),H(br,"descriptors",{angleLines:{_fallback:"grid"}});const Wc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},_e=Object.keys(Wc);function mg(n,t){return n-t}function gg(n,t){if(st(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Lt(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(ks(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function yg(n,t,e,i){const s=_e.length;for(let r=_e.indexOf(n);r<s-1;++r){const o=Wc[_e[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return _e[r]}return _e[s-1]}function wD(n,t,e,i,s){for(let r=_e.length-1;r>=_e.indexOf(e);r--){const o=_e[r];if(Wc[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return _e[e?_e.indexOf(e):0]}function ED(n){for(let t=_e.indexOf(n)+1,e=_e.length;t<e;++t)if(Wc[_e[t]].common)return _e[t]}function vg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=nh(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function TD(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=e[a],c>=0&&(t[c].major=!0);return t}function bg(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:TD(n,i,s,e)}class to extends Yi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new RR._date(t.adapters.date);s.init(e),Pr(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:gg(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=Lt(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=Lt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=eC(s,r,o);return this._unit=e.unit||(i.autoSkip?yg(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):wD(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:ED(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),bg(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Kt(e,0,o),i=Kt(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||yg(r.minUnit,e,i,this._getLabelCapacity(e)),a=Z(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=ks(c)||c===!0,d={};let h=e,f,p;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const y=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,p=0;f<i;f=+t.add(f,a,o),p++)vg(d,f,y);return(f===i||s.bounds==="ticks"||p===1)&&vg(d,f,y),Object.keys(d).sort(mg).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return bt(o,[t,e,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=i[e],p=l&&h&&f&&f.major;return this._adapter.format(t,s||(p?h:d))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Be(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,bg(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(gg(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return t_(t.sort(mg))}}H(to,"id","time"),H(to,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ra(n,t,e){let i=0,s=n.length-1,r,o,a,c;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=wn(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:c}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=wn(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:c}=n[s]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Lu extends to{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ra(e,this.min),this._tableRange=ra(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)d=s[o+1],c=s[o-1],l=s[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(ra(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return ra(this._table,i*this._tableRange+this._minPos,!0)}}H(Lu,"id","timeseries"),H(Lu,"defaults",to.defaults);var ID=Object.freeze({__proto__:null,CategoryScale:Mu,LinearScale:Du,LogarithmicScale:Nu,RadialLinearScale:br,TimeScale:to,TimeSeriesScale:Lu});const AD=[CR,oM,eD,ID];Ze.register(...AD);const bs={};function fh(n){bs[n]&&(bs[n].destroy(),delete bs[n])}function j_(){const n=document.documentElement.getAttribute("data-theme")==="dark";return{textColor:n?"#94A3B8":"#64748B",gridColor:n?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",bgColor:n?"#1E2235":"#FFFFFF"}}function _g(n,t){const e=document.getElementById(n);if(!e)return;if(fh(n),!t||t.length===0){e.getContext("2d").clearRect(0,0,e.width,e.height);return}j_();const i=new Ze(e,{type:"doughnut",data:{labels:t.map(s=>`${s.emoji} ${s.category}`),datasets:[{data:t.map(s=>s.amount),backgroundColor:XS.slice(0,t.length),borderWidth:0,hoverBorderWidth:2,hoverBorderColor:"#fff",borderRadius:4,spacing:2}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"65%",plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,titleFont:{size:13,weight:"600"},bodyFont:{size:12},callbacks:{label:function(s){const r=s.dataset.data.reduce((a,c)=>a+c,0),o=(s.parsed/r*100).toFixed(1);return` ₹${s.parsed.toLocaleString("en-IN")} (${o}%)`}}}},animation:{animateRotate:!0,duration:800,easing:"easeOutQuart"}}});return bs[n]=i,i}function xD(n,t,e,i){const s=document.getElementById(n);if(!s)return;fh(n);const{textColor:r,gridColor:o}=j_(),a=new Ze(s,{type:"bar",data:{labels:t,datasets:[{label:"Income",data:e,backgroundColor:"rgba(16, 185, 129, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7},{label:"Expenses",data:i,backgroundColor:"rgba(239, 68, 68, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{color:r,padding:16,usePointStyle:!0,pointStyle:"rectRounded",font:{size:12,weight:"500"}}},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,callbacks:{label:function(c){return` ${c.dataset.label}: ₹${c.parsed.y.toLocaleString("en-IN")}`}}}},scales:{x:{grid:{display:!1},ticks:{color:r,font:{size:11}}},y:{grid:{color:o},ticks:{color:r,font:{size:11},callback:function(c){return"₹"+c.toLocaleString("en-IN")}},beginAtZero:!0}},animation:{duration:800,easing:"easeOutQuart"}}});return bs[n]=a,a}function SD(){Object.keys(bs).forEach(n=>{fh(n)})}let jt={user:null,profile:null,accounts:[],transactions:[],allAccounts:[],allTransactions:[]},Xe=new Date().getMonth(),Nr=new Date().getFullYear();function H_(n){const t=n.allAccounts||n.accounts||jt.allAccounts||jt.accounts||[],e=n.allTransactions||n.transactions||jt.allTransactions||jt.transactions||[];jt={...jt,...n,allAccounts:t,allTransactions:e},jt.transactions=e.filter(l=>!l.isFriendMoney),jt.accounts=t,SD();const{totalMoney:i}=go(t,e),s=Ud(jt.accounts,jt.transactions),r=(n==null?void 0:n.hideBalance)||!1,o=`${Nr}-${String(Xe+1).padStart(2,"0")}`,a=zd(jt.transactions,o),c=a.income>0||a.expenses>0;return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Analytics & Reports 📊</h1>
        <p class="page-subtitle">Understand where your money comes from, where it goes, and where it is currently stored.</p>
      </div>

      <!-- Account Distribution Chart Card -->
      <div class="chart-card" style="margin-bottom: var(--space-6);">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px;">
          <h3 class="chart-title" style="margin-bottom:0;">
            Account Money Distribution (<span id="analytics-total-balance" class="${r?"balance-hidden":""}">${r?'<span class="balance-mask">₹••••••</span>':U(i)}</span>)
          </h3>
          ${r?'<button class="balance-eye-btn" id="btn-analytics-reveal-balance" title="Temporarily reveal balance">🙈</button>':""}
        </div>
        <div class="chart-container">
          <canvas id="accounts-distribution-chart"></canvas>
        </div>

        <div class="category-list">
          ${s.map((l,d)=>`
            <div class="category-item">
              <div class="category-color" style="background: ${oa(d)};"></div>
              <div class="category-info">
                <div class="category-name">${l.account.icon||"🏦"} ${l.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0,l.percentage)}%; background: ${oa(d)};"></div>
                </div>
              </div>
              <div>
                <div class="category-amount ${r?"balance-hidden":""}" data-balance="${l.balance}">
                  ${r?'<span class="balance-mask">₹••••••</span>':U(l.balance)}
                </div>
                <div class="category-percentage">${l.percentage.toFixed(1)}%</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Month Selector Navigation -->
      <div class="month-selector">
        <button class="month-nav-btn" id="btn-month-prev" title="Previous Month">❮</button>
        <div class="month-display">${ob(Xe)} ${Nr}</div>
        <button class="month-nav-btn" id="btn-month-next" title="Next Month">❯</button>
      </div>

      ${c?`
        <!-- Monthly Overview Cards -->
        <div class="analytics-overview">
          <div class="analytics-stat">
            <div class="analytics-stat-icon">📥</div>
            <div class="analytics-stat-value income">${U(a.income)}</div>
            <div class="analytics-stat-label">Total Income</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">📤</div>
            <div class="analytics-stat-value expense">${U(a.expenses)}</div>
            <div class="analytics-stat-label">Total Expenses</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">💰</div>
            <div class="analytics-stat-value savings">${U(a.savings)}</div>
            <div class="analytics-stat-label">Net Savings</div>
          </div>
        </div>

        <!-- Highlight Stats -->
        <div class="highlight-stats">
          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Spending Category</div>
            ${a.highestCategory?`
              <div class="highlight-stat-icon">${a.highestCategory.emoji}</div>
              <div class="highlight-stat-value">${a.highestCategory.category}</div>
              <div class="highlight-stat-detail">${U(a.highestCategory.amount)} (${a.highestCategory.percentage.toFixed(1)}%)</div>
            `:'<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>'}
          </div>

          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Single Expense</div>
            ${a.highestExpense?`
              <div class="highlight-stat-icon">${Fc(a.highestExpense.category)}</div>
              <div class="highlight-stat-value">${a.highestExpense.reason||a.highestExpense.category}</div>
              <div class="highlight-stat-detail">${U(a.highestExpense.amount)}</div>
            `:'<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>'}
          </div>
        </div>

        <!-- Expense Categories Doughnut Chart -->
        ${a.categories.length>0?`
          <div class="chart-card">
            <h3 class="chart-title">Expense Categories Breakdown</h3>
            <div class="chart-container">
              <canvas id="categories-chart"></canvas>
            </div>

            <div class="category-list">
              ${a.categories.map((l,d)=>`
                <div class="category-item">
                  <div class="category-color" style="background: ${oa(d)};"></div>
                  <div class="category-info">
                    <div class="category-name">${l.emoji} ${l.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${l.percentage}%; background: ${oa(d)};"></div>
                    </div>
                  </div>
                  <div>
                    <div class="category-amount">${U(l.amount)}</div>
                    <div class="category-percentage">${l.percentage.toFixed(1)}%</div>
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
      `:rP()}
    </div>
  `}function oa(n){const t=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];return t[n%t.length]}function q_(){const n=document.getElementById("btn-month-prev"),t=document.getElementById("btn-month-next");n&&(n.onclick=()=>{Xe===0?(Xe=11,Nr--):Xe--,wg()}),t&&(t.onclick=()=>{Xe===11?(Xe=0,Nr++):Xe++,wg()});const e=document.getElementById("btn-analytics-reveal-balance");e&&(e.onclick=()=>{const o=document.getElementById("analytics-total-balance"),a=document.querySelectorAll(".chart-card .category-amount");if(o==null?void 0:o.classList.contains("balance-hidden")){if(o){const l=jt.allAccounts||jt.accounts||[],d=jt.allTransactions||jt.transactions||[],{totalMoney:h}=go(l,d);o.classList.remove("balance-hidden"),o.textContent=U(h)}a.forEach(l=>{l.classList.remove("balance-hidden");const d=Number(l.dataset.balance)||0;l.textContent=U(d)}),e.textContent="👁️",setTimeout(()=>{o&&(o.classList.add("balance-hidden"),o.innerHTML='<span class="balance-mask">₹••••••</span>'),a.forEach(l=>{l.classList.add("balance-hidden"),l.innerHTML='<span class="balance-mask">₹••••••</span>'}),e.textContent="🙈"},5e3)}else o&&(o.classList.add("balance-hidden"),o.innerHTML='<span class="balance-mask">₹••••••</span>'),a.forEach(l=>{l.classList.add("balance-hidden"),l.innerHTML='<span class="balance-mask">₹••••••</span>'}),e.textContent="🙈"});const i=Ud(jt.accounts,jt.transactions);i.length>0&&setTimeout(()=>{_g("accounts-distribution-chart",i.map(o=>({category:o.account.name,emoji:o.account.icon||"🏦",amount:o.balance})))},50);const s=`${Nr}-${String(Xe+1).padStart(2,"0")}`,r=zd(jt.transactions,s);r.categories.length>0&&setTimeout(()=>{_g("categories-chart",r.categories)},50),(r.income>0||r.expenses>0)&&setTimeout(()=>{xD("income-expense-bar-chart",[ob(Xe)],[r.income],[r.expenses])},50)}function wg(){const n=document.querySelector(".page");n&&(n.outerHTML=H_(jt),q_())}let ds={user:null,profile:null,transactions:[],budgets:[]};function kD(n){ds={...ds,...n};const t=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{monthlyProgress:e,categoryProgress:i}=Tb(ds.budgets,ds.transactions,t);return`
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
            <div class="budget-title">${e?U(e.budget):"Not Set"}</div>
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
            <div>Spent: <strong>${U(e.spent)}</strong></div>
            <div>Remaining: <strong style="color: ${e.remaining<0?"var(--expense)":"var(--income)"};">${U(e.remaining)}</strong></div>
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
                  <span>Budget: ${U(s.budget)} | Spent: ${U(s.spent)}</span>
                  <span style="font-weight: 600; color: ${s.remaining<0?"var(--expense)":"var(--income)"};">
                    ${s.remaining<0?"Exceeded by ":"Remaining: "}${U(Math.abs(s.remaining))}
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
  `}function PD(n){const t=document.getElementById("btn-set-budget-modal");t&&(t.onclick=()=>Hl(n));const e=document.getElementById("btn-quick-monthly-budget");e&&(e.onclick=()=>Hl(n,"monthly"));const i=document.getElementById("btn-add-category-budget");i&&(i.onclick=()=>Hl(n,"category")),document.querySelectorAll(".btn-delete-budget").forEach(s=>{s.onclick=async()=>{const r=s.dataset.category;if(await ci({icon:"🗑️",title:"Delete Budget",message:`Are you sure you want to remove the budget for ${r}?`,danger:!0}))try{await gk(ds.user.uid,r),z.success("Budget removed!"),n&&n()}catch{z.error("Unable to remove budget.")}}})}function Hl(n,t="monthly"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,i=`
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
          ${js.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
  `;Yt({title:"🎯 Set Budget Limit",content:i,onOpen:s=>{let r=t;const o=s.querySelector("#tab-b-monthly"),a=s.querySelector("#tab-b-category"),c=s.querySelector("#group-b-category");o.onclick=()=>{r="monthly",o.classList.add("active"),a.classList.remove("active"),c.style.display="none"},a.onclick=()=>{r="category",a.classList.add("active"),o.classList.remove("active"),c.style.display="block"},s.querySelector("#set-budget-form").onsubmit=async l=>{l.preventDefault();const d=s.querySelector("#budget-amount").value,h=s.querySelector("#budget-category").value;if(s.querySelector("#budget-amount-error").textContent="",!d||Number(d)<=0){s.querySelector("#budget-amount-error").textContent="Please enter a valid budget amount.";return}const f=s.querySelector("#btn-save-budget");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{const p=ds.user.uid;r==="monthly"?await pk(p,d,e):await mk(p,h,d,e),kt(),z.success("🎯 Budget set successfully!"),n&&n()}catch{z.error("Unable to save budget."),f.disabled=!1,f.innerHTML="Save Budget"}}}})}let De={user:null,accounts:[],friendMoneyRecords:[]},Qe="all",hs="",eo=null;const Eg={GAVE:["🚌 Travel / Ticket","🍔 Food","🎓 College / Education","💳 Fees","💊 Medical","🛍️ Shopping","💰 Emergency","🤝 Help","🎁 Gift","📱 Recharge / Bill","🏠 Personal","💵 Other"],BORROWED:["🚌 Travel / Ticket","🍔 Food","🎓 College / Education","💳 Fees","💊 Medical","🛍️ Shopping","💰 Emergency","🤝 Help","🎁 Gift","📱 Recharge / Bill","🏠 Personal","💵 Other"]};function Tg(n,t=""){const e=Eg[n]||Eg.GAVE;return`
    <option value="" disabled ${t?"":"selected"}>Select Reason</option>
    ${e.map(i=>`<option value="${me(i)}" ${t===i?"selected":""}>${me(i)}</option>`).join("")}
  `}function CD(n){return n?new RegExp("\\p{Extended_Pictographic}","u").test(n)?me(n):`📝 ${me(n)}`:""}function W_(n){var a;De={...De,...n};const{friendMoneyRecords:t,accounts:e}=De,i=t||[],s=Fb(i);if(eo)return RD(eo,i);const r=MD(i,Qe,hs),o=(n==null?void 0:n.hideBalance)||((a=window.appState)==null?void 0:a.hideBalance)||!1;return`
    <div class="page animate-fade-in friends-money-page">
      <div class="page-header">
        <h1 class="page-title">Friends Money 🤝</h1>
        <p class="page-subtitle">Track money you gave to or borrowed from friends.</p>
      </div>

      <!-- Summary Cards -->
      <div class="fm-summary-grid">
        <div class="fm-summary-card gave">
          <div class="fm-summary-icon">💚</div>
          <div class="fm-summary-label">
            They Owe Me
            ${o?'<button class="balance-eye-btn" id="btn-fm-reveal-balance" title="Temporarily reveal balance">🙈</button>':""}
          </div>
          <div class="fm-summary-amount ${o?"balance-hidden":""}" id="fm-summary-they-owe" data-amount="${s.theyOweMe}">
            ${o?'<span class="balance-mask">₹••••••</span>':U(s.theyOweMe)}
          </div>
        </div>
        <div class="fm-summary-card borrowed">
          <div class="fm-summary-icon">💜</div>
          <div class="fm-summary-label">I Owe</div>
          <div class="fm-summary-amount ${o?"balance-hidden":""}" id="fm-summary-i-owe" data-amount="${s.iOwe}">
            ${o?'<span class="balance-mask">₹••••••</span>':U(s.iOwe)}
          </div>
        </div>
      </div>

      <!-- Search & Filters -->
      <div class="fm-controls">
        <div class="fm-search-wrapper">
          <span class="fm-search-icon">🔍</span>
          <input type="text" class="fm-search-input" id="fm-search" placeholder="Search friend..." value="${me(hs)}" />
        </div>
        <div class="fm-filter-tabs">
          <button class="fm-filter-tab ${Qe==="all"?"active":""}" data-filter="all">All</button>
          <button class="fm-filter-tab ${Qe==="gave"?"active":""}" data-filter="gave">They Owe Me</button>
          <button class="fm-filter-tab ${Qe==="borrowed"?"active":""}" data-filter="borrowed">I Owe</button>
          <button class="fm-filter-tab ${Qe==="pending"?"active":""}" data-filter="pending">Pending</button>
          <button class="fm-filter-tab ${Qe==="settled"?"active":""}" data-filter="settled">Settled</button>
        </div>
      </div>

      <!-- Add Button -->
      <button class="fm-add-btn" id="fm-add-btn">
        <span>➕</span> Add Friend Money
      </button>

      <!-- Records List -->
      <div class="fm-records-list">
        ${r.length>0?r.map(c=>G_(c)).join(""):`
          <div class="fm-empty">
            <div class="fm-empty-icon">🤝</div>
            <div class="fm-empty-title">${hs||Qe!=="all"?"No matching records":"No friend money records yet"}</div>
            <div class="fm-empty-text">${hs||Qe!=="all"?"Try changing your search or filter.":'Tap "+ Add Friend Money" to start tracking.'}</div>
          </div>
        `}
      </div>
    </div>
  `}function G_(n){const t=n.friendName?n.friendName.charAt(0).toUpperCase():"?",e=n.type==="GAVE",i=n.status==="pending",s=Number(n.returnedAmount)||0,r=s>0;return`
    <div class="fm-record-card" data-record-id="${n.id}">
      <div class="fm-record-header">
        <div class="fm-record-friend">
          <div class="fm-record-avatar ${e?"gave":"borrowed"}">${t}</div>
          <div>
            <div class="fm-record-name">${me(n.friendName)}</div>
            <div class="fm-record-type ${e?"gave":"borrowed"}">
              ${e?"You gave":"You borrowed"} ${U(n.amount)}
            </div>
          </div>
        </div>
        <div class="fm-record-status ${n.status}">
          ${i?"🟠":"✅"} ${i?"Pending":"Settled"}
        </div>
      </div>

      <div class="fm-record-body">
        <div class="fm-record-amount-row">
          <div class="fm-record-amount">${U(n.amount)}</div>
          <div class="fm-record-remaining ${n.status}">
            ${i?`₹${Number(n.remainingAmount).toLocaleString("en-IN")} remaining`:"✅ Settled"}
          </div>
        </div>

        ${n.reason?`<div class="fm-record-reason">${CD(n.reason)}</div>`:""}
        <div class="fm-record-date">📅 ${an(n.date)}</div>

        ${r?`
          <div class="fm-repayment-breakdown">
            <div class="fm-repayment-row total">
              <span>Total</span>
              <span>${U(n.amount)}</span>
            </div>
            <div class="fm-repayment-row returned">
              <span>− Returned</span>
              <span>${U(s)}</span>
            </div>
            <div class="fm-repayment-row remaining ${n.status}">
              <span>= Remaining</span>
              <span>${U(Math.max(0,Number(n.remainingAmount)))}</span>
            </div>
            ${n.repayments&&n.repayments.length>0?`
              <div class="fm-repayment-history">
                <div class="fm-repayment-history-title">Repayment History</div>
                ${n.repayments.map((o,a)=>`
                  <div class="fm-repayment-entry">
                    <span>#${a+1} · ${an(o.date)}</span>
                    <span class="fm-repayment-entry-amount">${U(o.amount)}</span>
                  </div>
                `).join("")}
              </div>
            `:""}
          </div>
        `:""}
      </div>

      ${i?`
        <div class="fm-record-actions">
          <button class="fm-repay-btn" data-repay-id="${n.id}">↩️ Add Repayment</button>
        </div>
      `:""}
    </div>
  `}function RD(n,t,e){const i=t.filter(c=>c.friendName===n),s=n.charAt(0).toUpperCase();let r=0,o=0,a=0;return i.forEach(c=>{c.status==="pending"&&(a++,c.type==="GAVE"?r+=Number(c.remainingAmount)||0:o+=Number(c.remainingAmount)||0)}),`
    <div class="page animate-fade-in friends-money-page">
      <button class="fm-back-btn" id="fm-back-btn">← Back</button>

      <div class="fm-friend-detail-header">
        <div class="fm-friend-detail-avatar">${s}</div>
        <div class="fm-friend-detail-name">👤 ${me(n)}</div>
      </div>

      <div class="fm-friend-detail-stats">
        <div class="fm-friend-stat">
          <div class="fm-friend-stat-label">They Owe Me</div>
          <div class="fm-friend-stat-value green">${U(r)}</div>
        </div>
        <div class="fm-friend-stat">
          <div class="fm-friend-stat-label">I Owe</div>
          <div class="fm-friend-stat-value purple">${U(o)}</div>
        </div>
        <div class="fm-friend-stat">
          <div class="fm-friend-stat-label">Pending</div>
          <div class="fm-friend-stat-value orange">${a}</div>
        </div>
      </div>

      <div class="fm-section-title">ALL RECORDS</div>

      <div class="fm-records-list">
        ${i.length>0?i.map(c=>G_(c)).join(""):`
          <div class="fm-empty">
            <div class="fm-empty-icon">📭</div>
            <div class="fm-empty-title">No records</div>
            <div class="fm-empty-text">No friend money records found for ${me(n)}.</div>
          </div>
        `}
      </div>
    </div>
  `}function MD(n,t,e){let i=[...n];if(e){const s=e.toLowerCase();i=i.filter(r=>(r.friendName||"").toLowerCase().includes(s)||(r.reason||"").toLowerCase().includes(s))}switch(t){case"gave":i=i.filter(s=>s.type==="GAVE"&&s.status==="pending");break;case"borrowed":i=i.filter(s=>s.type==="BORROWED"&&s.status==="pending");break;case"pending":i=i.filter(s=>s.status==="pending");break;case"settled":i=i.filter(s=>s.status==="settled");break}return i.sort((s,r)=>s.status==="pending"&&r.status!=="pending"?-1:s.status!=="pending"&&r.status==="pending"?1:(r.createdAt||"").localeCompare(s.createdAt||"")),i}function K_(n,t){t&&(De={...De,...t});const e=De.accounts||[],i=Vn(),s=`
    <div style="padding: 4px 0;">
      <div class="fm-form-group">
        <label class="fm-form-label">👤 Friend Name</label>
        <input type="text" class="fm-form-input" id="fm-friend-name" placeholder="Enter friend name" autocomplete="off" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">💰 Amount</label>
        <input type="number" class="fm-form-input" id="fm-amount" placeholder="₹0" min="1" step="1" inputmode="numeric" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">🔄 Type</label>
        <div class="fm-type-toggle">
          <button class="fm-type-option active gave" data-type="GAVE" id="fm-type-gave">🟢 I Gave</button>
          <button class="fm-type-option" data-type="BORROWED" id="fm-type-borrowed">🔵 I Borrowed</button>
        </div>
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label" for="fm-reason">📝 Reason</label>
        <select class="fm-form-select" id="fm-reason" required>
          ${Tg("GAVE")}
        </select>
        <div class="fm-form-error" id="fm-reason-error" style="display: none;"></div>
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">📅 Date</label>
        <input type="date" class="fm-form-input" id="fm-date" value="${i}" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">🏦 Account</label>
        <select class="fm-form-select" id="fm-account">
          ${e.map((r,o)=>`
            <option value="${r.id}" ${o===0?"selected":""}>${r.icon||"🏦"} ${r.name}</option>
          `).join("")}
        </select>
      </div>

      <button class="fm-form-submit" id="fm-submit-btn">✅ Add Record</button>
    </div>
  `;Yt({title:"🤝 Add Friend Money",content:s,onOpen:r=>{let o="GAVE";const a=r.querySelector("#fm-type-gave"),c=r.querySelector("#fm-type-borrowed"),l=r.querySelector("#fm-reason"),d=r.querySelector("#fm-reason-error"),h=()=>{if(a.className=`fm-type-option ${o==="GAVE"?"active gave":""}`,c.className=`fm-type-option ${o==="BORROWED"?"active borrowed":""}`,l){const p=l.value;l.innerHTML=Tg(o,p)}};a.onclick=()=>{o="GAVE",h()},c.onclick=()=>{o="BORROWED",h()},l&&(l.onchange=()=>{d&&l.value&&(d.textContent="",d.style.display="none")});const f=r.querySelector("#fm-submit-btn");f.onclick=async()=>{const p=r.querySelector("#fm-friend-name").value.trim(),y=Number(r.querySelector("#fm-amount").value),_=r.querySelector("#fm-reason").value,v=r.querySelector("#fm-date").value,I=r.querySelector("#fm-account").value;if(!p){z.error("Please enter friend name.");return}if(!y||y<=0){z.error("Please enter a valid amount.");return}if(!_){d&&(d.textContent="Please select a reason.",d.style.display="block"),z.error("Please select a reason.");return}if(!I){z.error("Please select an account.");return}f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{await oP(De.user.uid,{friendName:p,amount:y,type:o,reason:_,date:v,accountId:I}),kt(),z.success(`${o==="GAVE"?"Gave":"Borrowed"} ${U(y)} ${o==="GAVE"?"to":"from"} ${p}`),n&&n()}catch(P){console.error("Add friend money error:",P),z.error("Failed to add record. Try again."),f.disabled=!1,f.innerHTML="✅ Add Record"}}}})}function DD(n,t){const e=Number(n.remainingAmount)||0,i=De.accounts||[],s=`
    <div style="padding: 4px 0;">
      <div class="fm-repayment-breakdown" style="margin-bottom: 16px;">
        <div class="fm-repayment-row total">
          <span>Original Amount</span>
          <span>${U(n.amount)}</span>
        </div>
        <div class="fm-repayment-row returned">
          <span>Already Returned</span>
          <span>${U(Number(n.returnedAmount)||0)}</span>
        </div>
        <div class="fm-repayment-row remaining">
          <span>Remaining</span>
          <span>${U(e)}</span>
        </div>
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">💰 Repayment Amount</label>
        <input type="number" class="fm-form-input" id="fm-repay-amount" placeholder="₹0" min="1" max="${e}" step="1" inputmode="numeric" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">🏦 Account</label>
        <select class="fm-form-select" id="fm-repay-account">
          ${i.map(o=>`
            <option value="${o.id}" ${o.id===n.accountId?"selected":""}>${o.icon||"🏦"} ${o.name}</option>
          `).join("")}
        </select>
      </div>

      <button class="fm-form-submit" id="fm-repay-submit">↩️ Add Repayment</button>
    </div>
  `,r=n.type==="GAVE"?`${n.friendName} returning`:`Returning to ${n.friendName}`;Yt({title:`↩️ ${r}`,content:s,onOpen:o=>{const a=o.querySelector("#fm-repay-submit");a.onclick=async()=>{const c=Number(o.querySelector("#fm-repay-amount").value),l=o.querySelector("#fm-repay-account").value;if(!c||c<=0){z.error("Enter a valid amount.");return}if(c>e){z.error(`Amount cannot exceed ${U(e)}.`);return}a.disabled=!0,a.innerHTML='<span class="spinner"></span> Processing...';try{await aP(De.user.uid,n.id,c,l,n),kt();const d=e-c<=0;z.success(`${U(c)} repayment added${d?" — Settled! ✅":""}`),t&&t()}catch(d){console.error("Repayment error:",d),z.error("Failed to add repayment. Try again."),a.disabled=!1,a.innerHTML="↩️ Add Repayment"}}}})}function Y_(n){const t=document.getElementById("fm-add-btn");t&&(t.onclick=()=>K_(n));const e=document.getElementById("btn-fm-reveal-balance");e&&(e.onclick=()=>{const r=document.getElementById("fm-summary-they-owe"),o=document.getElementById("fm-summary-i-owe");(r==null?void 0:r.classList.contains("balance-hidden"))?(r&&(r.classList.remove("balance-hidden"),r.textContent=U(Number(r.dataset.amount)||0)),o&&(o.classList.remove("balance-hidden"),o.textContent=U(Number(o.dataset.amount)||0)),e.textContent="👁️",setTimeout(()=>{r&&(r.classList.add("balance-hidden"),r.innerHTML='<span class="balance-mask">₹••••••</span>'),o&&(o.classList.add("balance-hidden"),o.innerHTML='<span class="balance-mask">₹••••••</span>'),e.textContent="🙈"},5e3)):(r&&(r.classList.add("balance-hidden"),r.innerHTML='<span class="balance-mask">₹••••••</span>'),o&&(o.classList.add("balance-hidden"),o.innerHTML='<span class="balance-mask">₹••••••</span>'),e.textContent="🙈")});const i=document.getElementById("fm-search");i&&(i.oninput=()=>{hs=i.value,_r()}),document.querySelectorAll(".fm-filter-tab[data-filter]").forEach(r=>{r.onclick=()=>{Qe=r.dataset.filter,_r()}}),document.querySelectorAll(".fm-record-card[data-record-id]").forEach(r=>{r.onclick=o=>{if(o.target.closest(".fm-repay-btn"))return;const a=r.dataset.recordId,c=(De.friendMoneyRecords||[]).find(l=>l.id===a);c&&(eo=c.friendName,_r())}}),document.querySelectorAll(".fm-repay-btn[data-repay-id]").forEach(r=>{r.onclick=o=>{o.stopPropagation();const a=r.dataset.repayId,c=(De.friendMoneyRecords||[]).find(l=>l.id===a);c&&DD(c,n)}});const s=document.getElementById("fm-back-btn");s&&(s.onclick=()=>{eo=null,_r()})}function _r(){const n=document.querySelector(".friends-money-page");if(n){const t=n.parentElement;t&&(t.innerHTML=W_(De),Y_(()=>{_r()}))}}function ND(){eo=null,hs="",Qe="all"}let fs={user:null,profile:null};function OD(n){var a;fs={...fs,...n};const{user:t,profile:e}=fs,i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(t==null?void 0:t.email)||(e==null?void 0:e.email)||"",r=i.charAt(0).toUpperCase(),o=e!=null&&e.createdAt?an(e.createdAt.split("T")[0]):"Recently";return`
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

        ${(a=fs.profile)!=null&&a.pinEnabled?`
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
  `}function LD(n,t){const e=document.getElementById("btn-edit-profile");e&&(e.onclick=()=>{var c,l;const a=`
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${((c=fs.profile)==null?void 0:c.name)||((l=fs.user)==null?void 0:l.displayName)||""}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;Yt({title:"✏️ Edit Profile",content:a,onOpen:d=>{d.querySelector("#edit-profile-form").onsubmit=async h=>{h.preventDefault();const f=d.querySelector("#profile-name-input").value,p=Bc(f);if(p){d.querySelector("#profile-name-error").textContent=p;return}const y=d.querySelector("#btn-save-profile-name");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Saving...';try{await uk(f),kt(),z.success("Profile updated!"),t&&t()}catch{z.error("Unable to update profile."),y.disabled=!1,y.innerHTML="Save Changes"}}}})});const i=document.getElementById("btn-change-password");i&&(i.onclick=()=>{Yt({title:"🔑 Change Password",content:`
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
      `,onOpen:a=>{a.querySelector("#change-pass-form").onsubmit=async c=>{c.preventDefault();const l=a.querySelector("#curr-pass").value,d=a.querySelector("#new-pass").value,h=a.querySelector("#confirm-new-pass").value;a.querySelector("#curr-pass-error").textContent="",a.querySelector("#new-pass-error").textContent="",a.querySelector("#confirm-new-pass-error").textContent="";const f=Yd(d);if(f){a.querySelector("#new-pass-error").textContent=f;return}const p=Db(d,h);if(p){a.querySelector("#confirm-new-pass-error").textContent=p;return}const y=a.querySelector("#btn-save-new-pass");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Updating...';try{await dk(l,d),kt(),z.success("Password updated successfully!")}catch{a.querySelector("#curr-pass-error").textContent="Incorrect current password or re-authentication failed.",y.disabled=!1,y.innerHTML="Update Password"}}}})});const s=document.getElementById("btn-profile-logout");s&&(s.onclick=async()=>{await ci({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out of Money Control?",confirmText:"Log Out",danger:!0})&&(await Hd(),z.info("Logged out."),n&&n())});const r=document.getElementById("btn-profile-lock-app");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))})}const VD="modulepreload",FD=function(n){return"/"+n},Ig={},_s=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let o=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(e.map(l=>{if(l=FD(l),l in Ig)return;Ig[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":VD,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((p,y)=>{f.addEventListener("load",p),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};function BD(n,t,e){const i=new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}function $D(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function UD(n,t=[],e="money-control-transactions"){if(!n||n.length===0)throw new Error("No transactions to export.");const i=a=>{const c=t.find(l=>l.id===a);return c?c.name:""},s=["Date","Type","Amount","Reason","Category","From Account","To Account","Notes"],r=n.sort((a,c)=>new Date(a.date)-new Date(c.date)).map(a=>[a.date,a.type,a.amount,`"${(a.reason||"").replace(/"/g,'""')}"`,a.category||"",`"${i(a.sourceAccountId).replace(/"/g,'""')}"`,`"${i(a.destinationAccountId).replace(/"/g,'""')}"`,`"${(a.notes||"").replace(/"/g,'""')}"`]),o=[s.join(","),...r.map(a=>a.join(","))].join(`
`);BD(o,`${e}.csv`,"text/csv")}async function zD(n,t,e){const i=await _s(()=>import("./xlsx.CkFp8p6R.js"),[]),s=w=>{const A=t.find(S=>S.id===w);return A?A.name:""},r=["Date","Type","Amount (₹)","Reason","Category","From Account","To Account","Notes"],o=(n||[]).slice().sort((w,A)=>new Date(w.date)-new Date(A.date)).map(w=>[w.date||"",w.type||"",Number(w.amount)||0,w.reason||"",w.category||"",s(w.sourceAccountId)||"",s(w.destinationAccountId)||"",w.notes||""]),a=i.utils.aoa_to_sheet([r,...o]);a["!cols"]=[{wch:12},{wch:10},{wch:14},{wch:30},{wch:16},{wch:20},{wch:20},{wch:30}];const c=["Account Name","Type","Initial Balance (₹)","Current Balance (₹)","Bank Name","Last 4 Digits"],{calculateAccountBalances:l}=await _s(async()=>{const{calculateAccountBalances:w}=await Promise.resolve().then(()=>pb);return{calculateAccountBalances:w}},void 0),{balances:d}=l(t,n),h=(t||[]).map(w=>[w.name||"",w.type||"",Number(w.initialBalance)||0,Number(d[w.id])||0,w.bankName||"",w.last4Digits||""]),f=i.utils.aoa_to_sheet([c,...h]);f["!cols"]=[{wch:22},{wch:10},{wch:20},{wch:20},{wch:22},{wch:14}];const p=["Friend Name","Type","Original Amount (₹)","Returned Amount (₹)","Remaining (₹)","Status","Date","Reason"],y=(e||[]).map(w=>[w.friendName||"",w.type==="GAVE"?"They Owe Me":"I Owe",Number(w.amount)||0,Number(w.returnedAmount)||0,Number(w.remainingAmount)||0,w.status||"pending",w.date||"",w.reason||""]),_=i.utils.aoa_to_sheet([p,...y]);_["!cols"]=[{wch:20},{wch:14},{wch:20},{wch:20},{wch:16},{wch:12},{wch:12},{wch:30}];const v=(n||[]).filter(w=>w.type==="INCOME").reduce((w,A)=>w+(Number(A.amount)||0),0),I=(n||[]).filter(w=>w.type==="EXPENSE").reduce((w,A)=>w+(Number(A.amount)||0),0),P=(n||[]).filter(w=>w.type==="TRANSFER").reduce((w,A)=>w+(Number(A.amount)||0),0),R=Object.values(d).reduce((w,A)=>w+(Number(A)||0),0),N=(e||[]).filter(w=>w.status==="pending").reduce((w,A)=>w+(Number(A.remainingAmount)||0),0),k=[["Money Control Financial Summary",""],["Generated On",new Date().toLocaleString("en-IN")],["",""],["METRIC","VALUE (₹)"],["Total Income (All Time)",v],["Total Expenses (All Time)",I],["Total Transfers (All Time)",P],["Net Savings (Income - Expenses)",v-I],["Total Current Balance",R],["",""],["ACCOUNTS","BALANCE (₹)"],...(t||[]).map(w=>[w.name,Number(d[w.id])||0]),["",""],["FRIENDS MONEY","AMOUNT (₹)"],["Total Pending (All Friends)",N],["Total Transactions",(n||[]).length],["Total Friend Money Records",(e||[]).length]],V=i.utils.aoa_to_sheet(k);V["!cols"]=[{wch:35},{wch:20}];const E=i.utils.book_new();i.utils.book_append_sheet(E,a,"Transactions"),i.utils.book_append_sheet(E,f,"Accounts"),i.utils.book_append_sheet(E,_,"Friends Money"),i.utils.book_append_sheet(E,V,"Summary");const b=new Date().toISOString().split("T")[0];i.writeFile(E,`money-control-${b}.xlsx`)}async function jD(n,t,e,i,s){const{default:r}=await _s(async()=>{const{default:$}=await import("./jspdf.es.min.D0ylOq2I.js").then(et=>et.j);return{default:$}},[]),o=(await _s(async()=>{const{default:$}=await import("./jspdf.plugin.autotable.Cmu-wMtt.js");return{default:$}},[])).default,a=$D(i),c=`${s}-${String(i+1).padStart(2,"0")}`,l=(n||[]).filter($=>$.date&&$.date.startsWith(c)),d=$=>{const et=t.find(Qt=>Qt.id===$);return et?et.name:"—"},{calculateAccountBalances:h}=await _s(async()=>{const{calculateAccountBalances:$}=await Promise.resolve().then(()=>pb);return{calculateAccountBalances:$}},void 0),{balances:f}=h(t,n),p=l.filter($=>$.type==="INCOME").reduce(($,et)=>$+(Number(et.amount)||0),0),y=l.filter($=>$.type==="EXPENSE").reduce(($,et)=>$+(Number(et.amount)||0),0),_=l.filter($=>$.type==="TRANSFER").reduce(($,et)=>$+(Number(et.amount)||0),0),v=Object.values(f).reduce(($,et)=>$+(Number(et)||0),0),I={};l.filter($=>$.type==="EXPENSE").forEach($=>{const et=$.category||"Other";I[et]=(I[et]||0)+(Number($.amount)||0)});const P=Object.entries(I).sort(($,et)=>et[1]-$[1]),{theyOweMe:R,iOwe:N}=qD(e),k=new r({orientation:"portrait",unit:"mm",format:"a4"}),V=k.internal.pageSize.getWidth();let E=0;const b=$=>`Rs.${Number($).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`,w=($=30)=>{E+$>270&&(k.addPage(),E=20)};k.setFillColor(108,99,255),k.rect(0,0,V,32,"F"),k.setTextColor(255,255,255),k.setFontSize(20),k.setFont("helvetica","bold"),k.text(`${a} ${s} Money Report`,V/2,14,{align:"center"}),k.setFontSize(10),k.setFont("helvetica","normal"),k.text(`Generated on ${new Date().toLocaleString("en-IN",{dateStyle:"long",timeStyle:"short"})}`,V/2,22,{align:"center"}),k.text("Money Control — Personal Finance Tracker",V/2,28,{align:"center"}),E=42,k.setTextColor(30,30,50),k.setFontSize(13),k.setFont("helvetica","bold"),k.text("Monthly Summary",14,E),E+=6;const A=[{label:"Total Income",value:b(p),color:[16,185,129]},{label:"Total Expenses",value:b(y),color:[239,68,68]},{label:"Net Savings",value:b(p-y),color:[108,99,255]}],S=(V-28-8)/3;A.forEach(($,et)=>{const Qt=14+et*(S+4);k.setFillColor(248,249,252),k.roundedRect(Qt,E,S,22,3,3,"F"),k.setDrawColor(...$.color),k.setLineWidth(.8),k.line(Qt,E,Qt,E+22),k.setLineWidth(.2),k.setDrawColor(220,220,230),k.setFontSize(7.5),k.setFont("helvetica","normal"),k.setTextColor(100,116,139),k.text($.label.toUpperCase(),Qt+4,E+7),k.setFontSize(11),k.setFont("helvetica","bold"),k.setTextColor(...$.color),k.text($.value,Qt+4,E+15)}),E+=28,w(40),k.setTextColor(30,30,50),k.setFontSize(12),k.setFont("helvetica","bold"),k.text("1. Income",14,E),E+=4;const C=l.filter($=>$.type==="INCOME");C.length>0?(o(k,{startY:E,head:[["Date","Reason","Category","Account","Amount"]],body:C.map($=>[$.date||"—",$.reason||"—",$.category||"—",d($.destinationAccountId),b($.amount)]),foot:[["","","","Total Income",b(p)]],theme:"grid",headStyles:{fillColor:[16,185,129],textColor:255,fontStyle:"bold",fontSize:8},footStyles:{fillColor:[230,255,245],textColor:[16,185,129],fontStyle:"bold"},bodyStyles:{fontSize:8},columnStyles:{4:{halign:"right",textColor:[16,185,129],fontStyle:"bold"}},margin:{left:14,right:14}}),E=k.lastAutoTable.finalY+8):(k.setFontSize(9),k.setFont("helvetica","normal"),k.setTextColor(150,150,150),k.text("No income transactions this month.",14,E+4),E+=10),w(40),k.setTextColor(30,30,50),k.setFontSize(12),k.setFont("helvetica","bold"),k.text("2. Expenses",14,E),E+=4;const x=l.filter($=>$.type==="EXPENSE");x.length>0?(o(k,{startY:E,head:[["Date","Reason","Category","Account","Amount"]],body:x.map($=>[$.date||"—",$.reason||"—",$.category||"—",d($.sourceAccountId),b($.amount)]),foot:[["","","","Total Expenses",b(y)]],theme:"grid",headStyles:{fillColor:[239,68,68],textColor:255,fontStyle:"bold",fontSize:8},footStyles:{fillColor:[255,240,240],textColor:[239,68,68],fontStyle:"bold"},bodyStyles:{fontSize:8},columnStyles:{4:{halign:"right",textColor:[239,68,68],fontStyle:"bold"}},margin:{left:14,right:14}}),E=k.lastAutoTable.finalY+6,P.length>0&&(w(30),k.setFontSize(10),k.setFont("helvetica","bold"),k.setTextColor(30,30,50),k.text("Category-wise Expense Summary",14,E),E+=3,o(k,{startY:E,head:[["Category","Amount","% of Total"]],body:P.map(([$,et])=>[$,b(et),y>0?`${(et/y*100).toFixed(1)}%`:"0%"]),theme:"striped",headStyles:{fillColor:[100,100,130],textColor:255,fontSize:8},bodyStyles:{fontSize:8},columnStyles:{1:{halign:"right"},2:{halign:"right"}},margin:{left:14,right:14}}),E=k.lastAutoTable.finalY+8)):(k.setFontSize(9),k.setFont("helvetica","normal"),k.setTextColor(150,150,150),k.text("No expense transactions this month.",14,E+4),E+=10),w(30),k.setTextColor(30,30,50),k.setFontSize(12),k.setFont("helvetica","bold"),k.text("3. Transfers",14,E),E+=4;const Y=l.filter($=>$.type==="TRANSFER");Y.length>0?(o(k,{startY:E,head:[["Date","Reason","From Account","To Account","Amount"]],body:Y.map($=>[$.date||"—",$.reason||"—",d($.sourceAccountId),d($.destinationAccountId),b($.amount)]),foot:[["","","","Total Transfers",b(_)]],theme:"grid",headStyles:{fillColor:[108,99,255],textColor:255,fontStyle:"bold",fontSize:8},footStyles:{fillColor:[240,238,255],textColor:[108,99,255],fontStyle:"bold"},bodyStyles:{fontSize:8},columnStyles:{4:{halign:"right",textColor:[108,99,255],fontStyle:"bold"}},margin:{left:14,right:14}}),E=k.lastAutoTable.finalY+8):(k.setFontSize(9),k.setFont("helvetica","normal"),k.setTextColor(150,150,150),k.text("No transfers this month.",14,E+4),E+=10),w(40),k.setTextColor(30,30,50),k.setFontSize(12),k.setFont("helvetica","bold"),k.text("4. Accounts",14,E),E+=4,o(k,{startY:E,head:[["Account","Type","Current Balance"]],body:(t||[]).map($=>[$.name,$.type,b(f[$.id]||0)]),foot:[["Total Balance","",b(v)]],theme:"grid",headStyles:{fillColor:[30,30,60],textColor:255,fontStyle:"bold",fontSize:8},footStyles:{fillColor:[235,235,255],textColor:[30,30,60],fontStyle:"bold"},bodyStyles:{fontSize:8},columnStyles:{2:{halign:"right",fontStyle:"bold"}},margin:{left:14,right:14}}),E=k.lastAutoTable.finalY+8,w(40),k.setTextColor(30,30,50),k.setFontSize(12),k.setFont("helvetica","bold"),k.text("5. Friends Money",14,E),E+=4;const K=e||[];K.length>0?(o(k,{startY:E,head:[["Friend","Type","Original","Returned","Remaining","Status"]],body:K.map($=>[$.friendName||"—",$.type==="GAVE"?"They Owe Me":"I Owe",b($.amount||0),b($.returnedAmount||0),b($.remainingAmount||0),$.status==="settled"?"✓ Settled":"⏳ Pending"]),foot:[["They Owe Me Total","","","",b(R),""],["I Owe Total","","","",b(N),""]],theme:"grid",headStyles:{fillColor:[139,92,246],textColor:255,fontStyle:"bold",fontSize:8},footStyles:{fillColor:[245,240,255],textColor:[100,60,200],fontStyle:"bold"},bodyStyles:{fontSize:8},columnStyles:{2:{halign:"right"},3:{halign:"right"},4:{halign:"right",fontStyle:"bold"}},margin:{left:14,right:14}}),E=k.lastAutoTable.finalY+8):(k.setFontSize(9),k.setFont("helvetica","normal"),k.setTextColor(150,150,150),k.text("No friend money records.",14,E+4),E+=10),w(50),k.setTextColor(30,30,50),k.setFontSize(12),k.setFont("helvetica","bold"),k.text("6. Summary",14,E),E+=4,o(k,{startY:E,head:[["Metric","Value"]],body:[["Total Income (this month)",b(p)],["Total Expenses (this month)",b(y)],["Total Transfers (this month)",b(_)],["Net Savings (this month)",b(p-y)],["Current Total Balance",b(v)],["Total Transactions (this month)",String(l.length)],["They Owe Me (Friends)",b(R)],["I Owe (Friends)",b(N)]],theme:"striped",headStyles:{fillColor:[108,99,255],textColor:255,fontStyle:"bold",fontSize:9},bodyStyles:{fontSize:9},columnStyles:{1:{halign:"right",fontStyle:"bold"}},margin:{left:14,right:14}}),E=k.lastAutoTable.finalY+8;const ut=k.getNumberOfPages();for(let $=1;$<=ut;$++)k.setPage($),k.setFontSize(7),k.setTextColor(160,160,180),k.text(`Money Control | ${a} ${s} Report | Page ${$} of ${ut}`,V/2,290,{align:"center"});const pt=new Date().toISOString().split("T")[0];k.save(`money-control-${a.toLowerCase()}-${s}-report-${pt}.pdf`)}function HD(n,t,e,i){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],r=`${i}-${String(e+1).padStart(2,"0")}`,o=n.filter(v=>v.date&&v.date.startsWith(r)),a=v=>{const I=t.find(P=>P.id===v);return I?I.name:""},c=o.filter(v=>v.type==="INCOME").reduce((v,I)=>v+I.amount,0),l=o.filter(v=>v.type==="EXPENSE").reduce((v,I)=>v+I.amount,0),d={};o.filter(v=>v.type==="EXPENSE").forEach(v=>{const I=v.category||"Other";d[I]=(d[I]||0)+v.amount});const h=Object.entries(d).sort((v,I)=>I[1]-v[1]),f=`
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
      ${h.map(([v,I])=>`
        <tr>
          <td>${v}</td>
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
      ${o.sort((v,I)=>new Date(v.date)-new Date(I.date)).map(v=>{let I="";return v.type==="INCOME"?I=`→ ${a(v.destinationAccountId)}`:v.type==="EXPENSE"?I=`← ${a(v.sourceAccountId)}`:v.type==="TRANSFER"&&(I=`${a(v.sourceAccountId)} → ${a(v.destinationAccountId)}`),`
            <tr class="${v.type==="INCOME"?"income-row":v.type==="EXPENSE"?"expense-row":"transfer-row"}">
              <td>${v.date}</td>
              <td>${v.reason||"-"}</td>
              <td>${v.type==="INCOME"?"+":v.type==="EXPENSE"?"-":"↔ "}₹${v.amount.toLocaleString("en-IN")}</td>
              <td>${v.category||"-"}</td>
              <td>${I||"-"}</td>
              <td>${v.type}</td>
            </tr>
          `}).join("")}
    </tbody>
  </table>

  <div class="footer">
    Generated by Money Control V3 on ${new Date().toLocaleDateString("en-IN",{dateStyle:"long"})}
  </div>
</body>
</html>`,p=new Blob([f],{type:"text/html"}),y=URL.createObjectURL(p),_=window.open(y,"_blank");_&&(_.onload=()=>{setTimeout(()=>URL.revokeObjectURL(y),1e3)})}function qD(n){let t=0,e=0,i=0,s=0;return(n||[]).forEach(r=>{r.status==="pending"?(i++,r.type==="GAVE"?t+=Number(r.remainingAmount)||0:r.type==="BORROWED"&&(e+=Number(r.remainingAmount)||0)):s++}),{theyOweMe:t,iOwe:e,pendingCount:i,settledCount:s}}const WD="3.0";function GD(){return Ne||Fd()}function KD(n,t,e,i,s){var y,_;if(!n)throw new Error("User not authenticated.");const r=new Date,o={name:(s==null?void 0:s.name)||"",email:(s==null?void 0:s.email)||"",initialBalance:(s==null?void 0:s.initialBalance)||0,settings:{currency:((y=s==null?void 0:s.settings)==null?void 0:y.currency)||"INR",allowNegativeBalance:((_=s==null?void 0:s.settings)==null?void 0:_.allowNegativeBalance)||!1},createdAt:(s==null?void 0:s.createdAt)||r.toISOString()},a={version:WD,exportedAt:r.toISOString(),exportedAtDisplay:r.toLocaleString("en-IN",{dateStyle:"long",timeStyle:"short"}),uid_prefix:n.substring(0,6)+"...",profile:o,accounts:(t||[]).map(v=>({id:v.id,name:v.name,type:v.type,initialBalance:v.initialBalance||0,bankName:v.bankName||"",last4Digits:v.last4Digits||"",icon:v.icon||"💰",createdAt:v.createdAt||r.toISOString()})),transactions:(e||[]).map(v=>({id:v.id,type:v.type,amount:v.amount,date:v.date,reason:v.reason||"",category:v.category||"",notes:v.notes||"",sourceAccountId:v.sourceAccountId||null,destinationAccountId:v.destinationAccountId||null,isFriendMoney:v.isFriendMoney||!1,friendMoneyId:v.friendMoneyId||null,createdAt:v.createdAt||r.toISOString()})),friendMoney:(i||[]).map(v=>({id:v.id,friendName:v.friendName||"",amount:v.amount||0,type:v.type,reason:v.reason||"",date:v.date||"",createdAt:v.createdAt||r.toISOString(),returnedAmount:v.returnedAmount||0,remainingAmount:v.remainingAmount||0,status:v.status||"pending",accountId:v.accountId||"",repayments:v.repayments||[]}))},c=JSON.stringify(a,null,2),d=`money-control-backup-${`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}.json`,h=new Blob([c],{type:"application/json"}),f=URL.createObjectURL(h),p=document.createElement("a");return p.href=f,p.download=d,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(f),{filename:d,exportedAt:r.toISOString(),recordCounts:{accounts:a.accounts.length,transactions:a.transactions.length,friendMoney:a.friendMoney.length}}}function YD(n){return!n||typeof n!="object"?{valid:!1,error:"Invalid backup file: not a valid JSON object."}:n.version?Array.isArray(n.accounts)?Array.isArray(n.transactions)?Array.isArray(n.friendMoney)?{valid:!0,version:n.version,exportedAt:n.exportedAtDisplay||n.exportedAt,recordCounts:{accounts:n.accounts.length,transactions:n.transactions.length,friendMoney:n.friendMoney.length}}:{valid:!1,error:"Invalid backup file: friend money data is missing or corrupted."}:{valid:!1,error:"Invalid backup file: transactions data is missing or corrupted."}:{valid:!1,error:"Invalid backup file: accounts data is missing or corrupted."}:{valid:!1,error:"Invalid backup file: missing version field."}}function XD(n){return new Promise((t,e)=>{if(!n){e(new Error("No file provided."));return}if(!n.name.endsWith(".json")){e(new Error("Invalid file type. Please select a .json backup file."));return}if(n.size>50*1024*1024){e(new Error("Backup file is too large (max 50MB)."));return}const i=new FileReader;i.onload=s=>{try{const r=JSON.parse(s.target.result);t(r)}catch{e(new Error("Could not parse backup file. The file may be corrupted."))}},i.onerror=()=>e(new Error("Failed to read the backup file.")),i.readAsText(n)})}async function QD(n,t,e){var d;if(!n)throw new Error("User not authenticated.");const i=h=>{e&&e(h)},s=GD();async function r(h){const p=(await ri(h)).docs,y=aa(p,400);for(const _ of y){const v=us(s);_.forEach(I=>v.delete(I.ref)),await v.commit()}}i("Clearing existing accounts..."),await r(Ft(s,"users",n,"accounts")),i("Clearing existing transactions..."),await r(Ft(s,"users",n,"transactions")),i("Clearing existing friend money records..."),await r(Ft(s,"users",n,"friendMoney")),i(`Restoring ${t.accounts.length} accounts...`);const o=aa(t.accounts,400);for(const h of o){const f=us(s);for(const p of h){const y={name:p.name||"Account",type:p.type||"Cash",initialBalance:Number(p.initialBalance)||0,bankName:p.bankName||"",last4Digits:p.last4Digits||"",icon:p.icon||"💰",createdAt:p.createdAt||new Date().toISOString()},_=p.id?gt(s,"users",n,"accounts",p.id):gt(Ft(s,"users",n,"accounts"));f.set(_,y)}await f.commit()}i(`Restoring ${t.transactions.length} transactions...`);const c=aa(t.transactions,400);for(const h of c){const f=us(s);for(const p of h){const y={type:p.type,amount:Number(p.amount)||0,date:p.date||"",reason:p.reason||"",category:p.category||"Other",notes:p.notes||"",createdAt:p.createdAt||new Date().toISOString()};p.sourceAccountId&&(y.sourceAccountId=p.sourceAccountId),p.destinationAccountId&&(y.destinationAccountId=p.destinationAccountId),p.isFriendMoney&&(y.isFriendMoney=!0),p.friendMoneyId&&(y.friendMoneyId=p.friendMoneyId);const _=p.id?gt(s,"users",n,"transactions",p.id):gt(Ft(s,"users",n,"transactions"));f.set(_,y)}await f.commit()}i(`Restoring ${t.friendMoney.length} friend money records...`);const l=aa(t.friendMoney,400);for(const h of l){const f=us(s);for(const p of h){const y={friendName:p.friendName||"",amount:Number(p.amount)||0,type:p.type||"GAVE",reason:p.reason||"",date:p.date||"",createdAt:p.createdAt||new Date().toISOString(),returnedAmount:Number(p.returnedAmount)||0,remainingAmount:Number(p.remainingAmount)||0,status:p.status||"pending",accountId:p.accountId||"",repayments:p.repayments||[]},_=p.id?gt(s,"users",n,"friendMoney",p.id):gt(Ft(s,"users",n,"friendMoney"));f.set(_,y)}await f.commit()}if(((d=t.profile)==null?void 0:d.initialBalance)!==void 0){i("Restoring profile settings...");const{updateDoc:h}=await _s(async()=>{const{updateDoc:f}=await Promise.resolve().then(()=>HS);return{updateDoc:f}},void 0);await h(gt(s,"users",n),{initialBalance:Number(t.profile.initialBalance)||0})}i("Restore complete!")}function aa(n,t){const e=[];for(let i=0;i<n.length;i+=t)e.push(n.slice(i,i+t));return e}let ct={user:null,profile:null,transactions:[],accounts:[],friendMoneyRecords:[]};function X_(n){var h;ct={...ct,...n};const{profile:t}=ct,e=document.documentElement.getAttribute("data-theme")||"light",i=((h=t==null?void 0:t.settings)==null?void 0:h.allowNegativeBalance)||!1,s=(t==null?void 0:t.initialBalance)||0,r=(t==null?void 0:t.pinEnabled)||!1,o=(t==null?void 0:t.autoLockTimeout)!==void 0?t.autoLockTimeout:5,a=(n==null?void 0:n.biometricEnabled)||!1,c=(n==null?void 0:n.hideBalance)||!1,l=Ik(),d=Tk();return`
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
            <div class="settings-item" id="btn-change-pin" style="cursor:pointer;">
              <div class="settings-item-left">
                <div class="settings-item-icon">🔑</div>
                <div>
                  <div class="settings-item-text">Change PIN</div>
                  <div class="settings-item-subtitle">Set a new PIN for your account</div>
                </div>
              </div>
              <div class="settings-item-right">❯</div>
            </div>

            <div class="settings-item" id="settings-biometric-row">
              <div class="settings-item-left">
                <div class="settings-item-icon">🪪</div>
                <div>
                  <div class="settings-item-text">Fingerprint / Biometric</div>
                  <div class="settings-item-subtitle" id="biometric-subtitle">${a?"Biometric unlock is enabled":"Use fingerprint or face unlock"}</div>
                </div>
              </div>
              <label class="toggle" id="biometric-toggle-wrapper">
                <input type="checkbox" id="toggle-biometric" ${a?"checked":""} />
                <span class="toggle-slider"></span>
              </label>
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

          <!-- Hide Balance — always visible (no PIN required) -->
          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">👁️</div>
              <div>
                <div class="settings-item-text">Hide Balance</div>
                <div class="settings-item-subtitle">Show ₹•••••• instead of actual balance</div>
              </div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-hide-balance" ${c?"checked":""} />
              <span class="toggle-slider"></span>
            </label>
          </div>
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
      ${l||d?`
        <div class="settings-section">
          <div class="settings-section-title">📱 App</div>
          <div class="settings-group">
            ${l?`
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
            ${d?`
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
                <div class="settings-item-subtitle">Current: ${U(s)}</div>
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

      <!-- Export & Backup Section -->
      <div class="settings-section">
        <div class="settings-section-title">📤 Export & Backup</div>
        <div class="settings-group">

          <div class="settings-item" id="btn-export-csv" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📄</div>
              <div>
                <div class="settings-item-text">Export as CSV</div>
                <div class="settings-item-subtitle">Download all transactions as a CSV spreadsheet</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-excel" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📊</div>
              <div>
                <div class="settings-item-text">Export as Excel</div>
                <div class="settings-item-subtitle">Download .xlsx with Transactions, Accounts, Friends Money & Summary sheets</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-pdf" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📑</div>
              <div>
                <div class="settings-item-text">Export as PDF</div>
                <div class="settings-item-subtitle">Download professional monthly report as PDF</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-report" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">🖨️</div>
              <div>
                <div class="settings-item-text">Print Monthly Report</div>
                <div class="settings-item-subtitle">Generate printable HTML report for the current month</div>
              </div>
            </div>
            <div class="settings-item-right">🖨️</div>
          </div>

          <div class="settings-divider" style="height:1px;background:var(--border-color);margin:4px 0;"></div>

          <div class="settings-item" id="btn-create-backup" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">💾</div>
              <div>
                <div class="settings-item-text">Create Backup</div>
                <div class="settings-item-subtitle">Download a backup file of all your financial data</div>
              </div>
            </div>
            <div class="settings-item-right">📤</div>
          </div>

          <div class="settings-item" id="btn-restore-backup" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📥</div>
              <div>
                <div class="settings-item-text">Restore Backup</div>
                <div class="settings-item-subtitle">Restore data from a backup file</div>
              </div>
            </div>
            <div class="settings-item-right">⚠️ ❯</div>
          </div>

          <!-- Hidden file input for backup restore -->
          <input type="file" id="restore-backup-file-input" accept=".json" style="display:none;" />
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
  `}function Q_(n,t){const e=document.getElementById("toggle-pin-lock");e&&(e.onchange=async b=>{if(b.target.checked)Vk(ct.user.uid,()=>{t&&t()}),b.target.checked=!1;else if(await ci({icon:"🔓",title:"Disable PIN Lock",message:"Are you sure you want to remove PIN protection? Your financial data will no longer be locked.",confirmText:"Remove PIN",danger:!0}))try{await Sb(ct.user.uid),z.success("🔓 PIN lock disabled."),t&&t()}catch{z.error("Unable to disable PIN."),b.target.checked=!0}else b.target.checked=!0});const i=document.getElementById("btn-change-pin");i&&(i.onclick=async()=>{const b=await tc(ct.user.uid);Fk(ct.user.uid,b.pinHash,()=>{t&&t()})});const s=document.getElementById("toggle-biometric"),r=document.getElementById("biometric-subtitle"),o=document.getElementById("biometric-toggle-wrapper");s&&(qp().then(b=>{b||(s.disabled=!0,r&&(r.textContent="Biometric authentication is not available on this device."),o&&(o.style.opacity="0.5"))}).catch(()=>{}),s.onchange=async b=>{var A,S;if(b.target.checked){if(!await qp()){z.error("Biometric authentication is not available on this device."),b.target.checked=!1;const x=document.getElementById("biometric-subtitle");x&&(x.textContent="Biometric authentication is not available on this device.");return}try{const x=((A=ct.profile)==null?void 0:A.name)||((S=ct.user)==null?void 0:S.email)||"User";await Pk(ct.user.uid,x),z.success("🪪 Biometric unlock enabled!"),t&&t()}catch(x){console.error("Biometric registration error:",x);let Y="Failed to enable biometric authentication.";x.name==="NotAllowedError"?Y="Biometric permission denied. Please allow access in your device settings.":x.name==="SecurityError"&&(Y="Biometric requires HTTPS or localhost."),z.error(Y),b.target.checked=!1}}else if(await ci({icon:"🪪",title:"Disable Biometric",message:"Disable fingerprint/biometric unlock? You can re-enable it anytime. PIN will remain your unlock method.",confirmText:"Disable Biometric",danger:!1}))try{await Rk(ct.user.uid),z.success("Biometric unlock disabled."),t&&t()}catch{z.error("Unable to disable biometric."),b.target.checked=!0}else b.target.checked=!0});const a=document.getElementById("select-auto-lock");a&&(a.onchange=async b=>{const w=parseInt(b.target.value);try{await Sk(ct.user.uid,w),z.success("⏱️ Auto-lock updated."),t&&t()}catch{z.error("Unable to update auto-lock setting.")}});const c=document.getElementById("btn-lock-app-now");c&&(c.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))});const l=document.getElementById("toggle-hide-balance");l&&(l.onchange=async b=>{const w=b.target.checked;try{await Mk(ct.user.uid,w),window.appState&&(window.appState.hideBalance=w),z.success(w?"👁️ Balances hidden.":"👁️ Balances visible."),t&&t()}catch{z.error("Unable to update hide balance setting."),b.target.checked=!w}});const d=document.getElementById("btn-install-pwa");d&&(d.onclick=async()=>{await Ak()&&(z.success("📲 Money Control installed!"),t&&t())});const h=document.getElementById("btn-theme-light");h&&(h.onclick=()=>{document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),Ag()});const f=document.getElementById("btn-theme-dark");f&&(f.onclick=()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),Ag()});const p=document.getElementById("toggle-negative-balance");p&&(p.onchange=async b=>{const w=b.target.checked;try{await QS(ct.user.uid,{allowNegativeBalance:w}),z.success(`Negative balance ${w?"enabled":"disabled"}.`),t&&t()}catch{z.error("Unable to update setting."),b.target.checked=!w}});const y=document.getElementById("btn-edit-initial-balance");y&&(y.onclick=()=>{var A;const w=`
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
              <input type="number" id="new-initial-input" class="form-input" value="${((A=ct.profile)==null?void 0:A.initialBalance)||0}" step="any" min="0" required autofocus />
            </div>
            <div class="form-error" id="new-initial-error"></div>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-initial">Save Initial Balance</button>
        </form>
      `;Yt({title:"💵 Edit Initial Balance",content:w,onOpen:S=>{S.querySelector("#edit-initial-form").onsubmit=async C=>{C.preventDefault();const x=S.querySelector("#new-initial-input").value,Y=yo(x);if(Y){S.querySelector("#new-initial-error").textContent=Y;return}const K=S.querySelector("#btn-save-initial");K.disabled=!0,K.innerHTML='<span class="spinner"></span> Saving...';try{await gb(ct.user.uid,Number(x)),kt(),z.success("Initial balance updated!"),t&&t()}catch{z.error("Unable to update initial balance."),K.disabled=!1,K.innerHTML="Save Initial Balance"}}}})});const _=document.getElementById("btn-export-csv");_&&(_.onclick=()=>{try{UD(ct.transactions,ct.accounts),z.success("📄 Transactions exported to CSV!")}catch(b){z.error(b.message||"Unable to export transactions.")}});const v=document.getElementById("btn-export-excel");v&&(v.onclick=async()=>{if(!ct.transactions||ct.transactions.length===0){z.error("No transactions to export.");return}try{v.style.opacity="0.6",v.style.pointerEvents="none",await zD(ct.transactions,ct.accounts,ct.friendMoneyRecords),z.success("📊 Exported to Excel successfully!")}catch(b){console.error("Excel export error:",b),z.error("Unable to export to Excel.")}finally{v.style.opacity="",v.style.pointerEvents=""}});const I=document.getElementById("btn-export-pdf");I&&(I.onclick=async()=>{try{I.style.opacity="0.6",I.style.pointerEvents="none";const b=new Date;await jD(ct.transactions,ct.accounts,ct.friendMoneyRecords,b.getMonth(),b.getFullYear()),z.success("📑 PDF report downloaded!")}catch(b){console.error("PDF export error:",b),z.error("Unable to generate PDF report.")}finally{I.style.opacity="",I.style.pointerEvents=""}});const P=document.getElementById("btn-export-report");P&&(P.onclick=()=>{try{const b=new Date;HD(ct.transactions,ct.accounts,b.getMonth(),b.getFullYear()),z.success("📑 Printable report opened!")}catch{z.error("Unable to generate report.")}});const R=document.getElementById("btn-create-backup");R&&(R.onclick=async()=>{try{R.style.opacity="0.6",R.style.pointerEvents="none";const b=KD(ct.user.uid,ct.accounts,ct.transactions,ct.friendMoneyRecords,ct.profile);z.success(`💾 Backup created! (${b.recordCounts.transactions} transactions, ${b.recordCounts.accounts} accounts)`)}catch(b){console.error("Backup error:",b),z.error(b.message||"Unable to create backup.")}finally{R.style.opacity="",R.style.pointerEvents=""}});const N=document.getElementById("btn-restore-backup"),k=document.getElementById("restore-backup-file-input");N&&k&&(N.onclick=()=>{k.value="",k.click()},k.onchange=async b=>{const w=b.target.files[0];if(!w)return;let A;try{A=await XD(w)}catch(x){z.error(x.message||"Could not read backup file.");return}const S=YD(A);if(!S.valid){z.error(S.error||"Invalid backup file.");return}const C=`
        <div class="alert-banner alert-banner-danger" style="margin-bottom: 16px;">
          <span class="alert-banner-icon">⚠️</span>
          <div class="alert-banner-text">
            <strong>This will REPLACE all your current data</strong> with the backup contents. This cannot be undone.
          </div>
        </div>

        <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
          <div style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">Backup Details</div>
          <div style="display: grid; gap: 8px;">
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Exported on</span>
              <span style="font-weight: 600;">${S.exportedAt||"Unknown"}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Accounts</span>
              <span style="font-weight: 600;">${S.recordCounts.accounts}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Transactions</span>
              <span style="font-weight: 600;">${S.recordCounts.transactions}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Friend Money Records</span>
              <span style="font-weight: 600;">${S.recordCounts.friendMoney}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button class="btn btn-danger btn-block" id="btn-confirm-restore">⚠️ Restore Backup Now</button>
          <button class="btn btn-secondary btn-block" id="btn-cancel-restore">Cancel</button>
        </div>
      `;Yt({title:"📥 Restore Backup",content:C,onOpen:x=>{x.querySelector("#btn-cancel-restore").onclick=()=>kt(),x.querySelector("#btn-confirm-restore").onclick=async()=>{const Y=x.querySelector("#btn-confirm-restore");Y.disabled=!0,Y.innerHTML='<span class="spinner"></span> Restoring...';try{await QD(ct.user.uid,A,K=>{Y.innerHTML=`<span class="spinner"></span> ${K}`}),kt(),z.success("✅ Backup restored successfully! Reloading data..."),t&&setTimeout(()=>t(),500)}catch(K){console.error("Restore error:",K),z.error(K.message||"Restore failed. Please try again."),Y.disabled=!1,Y.innerHTML="⚠️ Restore Backup Now"}}}})});const V=document.getElementById("btn-settings-logout");V&&(V.onclick=async()=>{await ci({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out?",confirmText:"Log Out",danger:!0})&&(await Hd(),z.info("Logged out."),n&&n())});const E=document.getElementById("btn-settings-delete-account");E&&(E.onclick=()=>{Yt({title:"🚨 Delete Account",content:`
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
      `,onOpen:w=>{w.querySelector("#delete-acc-form").onsubmit=async A=>{A.preventDefault();const S=w.querySelector("#del-pass-input").value;if(w.querySelector("#del-pass-error").textContent="",!S){w.querySelector("#del-pass-error").textContent="Please enter your password.";return}const C=w.querySelector("#btn-confirm-delete-acc");C.disabled=!0,C.innerHTML='<span class="spinner"></span> Deleting...';try{await hk(S),kt(),z.info("Account deleted."),n&&n()}catch{w.querySelector("#del-pass-error").textContent="Incorrect password or re-authentication failed.",C.disabled=!1,C.innerHTML="Delete My Account Permanently"}}}})})}function Ag(){const n=document.querySelector(".page");n&&(n.outerHTML=X_(ct),Q_())}let Oi={accounts:[],transactions:[]};function JD(n){var a;Oi={...Oi,...n};const{accounts:t,transactions:e}=Oi,i=(n==null?void 0:n.hideBalance)||((a=window.appState)==null?void 0:a.hideBalance)||!1,{startingTotal:s,currentTotal:r,history:o}=Za(t,e);return`
    <div class="page animate-fade-in total-money-history-page">
      <!-- 1. Header with Back Button -->
      <div class="tmh-header">
        <button class="btn btn-ghost tmh-back-btn" id="tmh-back-btn" aria-label="Back to Dashboard">
          <span style="font-size: 1.2rem;">←</span> Back
        </button>
        <h1 class="tmh-title">Total Money History</h1>
      </div>

      <!-- 2. Current Total Hero Card -->
      <div class="balance-card tmh-hero-card">
        <div class="balance-label">
          💰 TOTAL MONEY HISTORY
          ${i?'<button class="balance-eye-btn" id="btn-tmh-reveal-balance" title="Temporarily reveal balance">🙈</button>':""}
        </div>
        <div id="tmh-current-total" class="balance-amount ${i?"balance-hidden":""}">
          ${i?'<span class="balance-mask">₹••••••</span>':U(r)}
        </div>
        <div class="balance-subtitle">Current Total • Across ${t.length} account${t.length===1?"":"s"}</div>
      </div>

      <!-- 3. Timeline Container -->
      <div class="tmh-timeline-container">
        ${o.length>0?ZD(o,s):tN(s)}
      </div>
    </div>
  `}function ZD(n,t){return`
    <div class="tmh-timeline">
      ${n.map((e,i)=>{const s=e.type==="TRANSFER",r=an(e.date),o=GS(e.date),a=o===r?r:`${o} (${r})`;return`
          <div class="tmh-timeline-step">
            <!-- Upward Connector Arrow before item -->
            <div class="tmh-connector">
              <span class="tmh-connector-line"></span>
              <span class="tmh-connector-arrow">↑</span>
            </div>

            <!-- History Item Card -->
            <div class="card tmh-item-card" data-tx-id="${e.id}" tabindex="0" role="button" aria-label="View transaction details">
              <div class="tmh-item-header">
                <span class="tmh-item-date">${a}</span>
                <span class="tmh-badge tmh-badge-${e.type.toLowerCase()}">${e.typeLabel}</span>
              </div>

              <div class="tmh-item-body">
                <div class="tmh-item-total">
                  <span class="tmh-total-label">${s?"Total Balance":"New Total"}</span>
                  <span class="tmh-total-amount">${U(e.newTotal)}</span>
                </div>

                <div class="tmh-item-change">
                  <span class="tmh-change-label">${e.reason||e.typeLabel}</span>
                  ${s?`
                    <span class="tmh-change-amount" style="color: var(--primary-light);">
                      Total unchanged: ${U(e.newTotal)}
                    </span>
                  `:`
                    <span class="tmh-change-amount" style="color: ${e.amountColor};">
                      ${e.amountSign}${U(e.amount)}
                    </span>
                  `}
                </div>

                ${e.accountName?`
                  <div class="tmh-item-account">
                    <span>${s?"🔄":"🏦"} ${e.accountName}</span>
                  </div>
                `:""}
              </div>

              <div class="tmh-item-footer">
                <span class="tmh-tap-hint">Tap for full details →</span>
              </div>
            </div>
          </div>
        `}).join("")}

      <!-- Bottom Connector to Starting Total -->
      <div class="tmh-connector">
        <span class="tmh-connector-line"></span>
        <span class="tmh-connector-arrow">↑ Starting Balance</span>
      </div>

      <!-- 4. Starting Total Card (At Bottom) -->
      <div class="card tmh-starting-card">
        <div class="tmh-starting-icon">🏁</div>
        <div class="tmh-starting-info">
          <div class="tmh-starting-label">STARTING TOTAL</div>
          <div class="tmh-starting-subtitle">Initial balance when tracking started</div>
        </div>
        <div class="tmh-starting-amount">${U(t)}</div>
      </div>
    </div>
  `}function tN(n,t){return`
    <div class="tmh-empty-state card card-flat">
      <div class="tmh-empty-icon">📊</div>
      <h3 class="tmh-empty-title">No money activity yet</h3>
      <p class="tmh-empty-desc">
        When you add income, record expenses, or transfer money between accounts, your Total Money History timeline will appear here.
      </p>

      <div class="tmh-starting-card" style="margin-top: 20px; width: 100%;">
        <div class="tmh-starting-icon">🏁</div>
        <div class="tmh-starting-info">
          <div class="tmh-starting-label">STARTING TOTAL</div>
          <div class="tmh-starting-subtitle">Current Total = Starting Total</div>
        </div>
        <div class="tmh-starting-amount">${U(n)}</div>
      </div>
    </div>
  `}function eN(n){const t=document.getElementById("tmh-back-btn");t&&(t.onclick=()=>{n("dashboard")});const e=document.getElementById("btn-tmh-reveal-balance");e&&(e.onclick=()=>{const s=document.getElementById("tmh-current-total");if(s==null?void 0:s.classList.contains("balance-hidden")){if(s){const{currentTotal:o}=Za(Oi.accounts,Oi.transactions);s.classList.remove("balance-hidden"),s.textContent=U(o)}e.textContent="👁️",setTimeout(()=>{s&&(s.classList.add("balance-hidden"),s.innerHTML='<span class="balance-mask">₹••••••</span>'),e.textContent="🙈"},5e3)}else s&&(s.classList.add("balance-hidden"),s.innerHTML='<span class="balance-mask">₹••••••</span>'),e.textContent="🙈"}),document.querySelectorAll(".tmh-item-card[data-tx-id]").forEach(s=>{const r=()=>{const o=s.dataset.txId,{history:a}=Za(Oi.accounts,Oi.transactions),c=a.find(l=>l.id===o);c&&nN(c)};s.onclick=r,s.onkeydown=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),r())}})}function nN(n){const t=n.type==="INCOME",e=n.type==="EXPENSE",i=n.type==="TRANSFER";let s="Transaction Details";t?s="💰 INCOME DETAILS":e?s="💸 EXPENSE DETAILS":i&&(s="🔄 TRANSFER DETAILS");const r=an(n.date),o=n.createdAt?Ja(n.createdAt):"",a=`
    <div class="tmh-detail-modal">
      <div class="tmh-detail-row">
        <span class="tmh-detail-label">Date</span>
        <span class="tmh-detail-value">${r}</span>
      </div>

      ${o?`
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Time</span>
          <span class="tmh-detail-value">${o}</span>
        </div>
      `:""}

      <div class="tmh-detail-row">
        <span class="tmh-detail-label">Previous Total</span>
        <span class="tmh-detail-value font-mono">${U(n.previousTotal)}</span>
      </div>

      <div class="tmh-detail-row highlight">
        <span class="tmh-detail-label">${n.typeLabel}</span>
        ${i?`
          <span class="tmh-detail-value" style="color: var(--primary-light); font-weight: 700;">
            ${U(n.amount)} (Total Unchanged)
          </span>
        `:`
          <span class="tmh-detail-value" style="color: ${n.amountColor}; font-weight: 700;">
            ${n.amountSign}${U(n.amount)}
          </span>
        `}
      </div>

      ${n.accountName?`
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Account</span>
          <span class="tmh-detail-value">${n.accountName}</span>
        </div>
      `:""}

      ${n.reason?`
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Description</span>
          <span class="tmh-detail-value">${n.reason}</span>
        </div>
      `:""}

      ${n.category?`
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Category</span>
          <span class="tmh-detail-value">${n.category}</span>
        </div>
      `:""}

      ${n.notes?`
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Notes</span>
          <span class="tmh-detail-value">${n.notes}</span>
        </div>
      `:""}

      <div class="tmh-detail-divider"></div>

      <div class="tmh-detail-row new-total-row">
        <span class="tmh-detail-label">New Total</span>
        <span class="tmh-detail-value font-mono">${U(n.newTotal)}</span>
      </div>
    </div>
  `;Yt({title:s,content:a})}function J_(n){return`
    <aside class="sidebar">
      <div class="sidebar-logo">
        <img src="/icon-192.png" alt="Money Control" class="sidebar-logo-icon" style="width: 32px; height: 32px; border-radius: 8px;" />
        <span class="sidebar-logo-text">Money Control</span>
      </div>
      <nav class="sidebar-nav">
        ${[{id:"dashboard",icon:"🏠",label:"Dashboard"},{id:"accounts",icon:"🏦",label:"Accounts"},{id:"transactions",icon:"💸",label:"Transactions"},{id:"analytics",icon:"📊",label:"Analytics"},{id:"budget",icon:"🎯",label:"Budget"},{id:"friends-money",icon:"🤝",label:"Friends Money"},{id:"money-control",icon:"📅",label:"Money Control"},{id:"profile",icon:"👤",label:"Profile"},{id:"settings",icon:"⚙️",label:"Settings"}].map(e=>`
          <div class="sidebar-link ${n===e.id?"active":""}" data-page="${e.id}">
            <span class="sidebar-link-icon">${e.icon}</span>
            <span>${e.label}</span>
          </div>
        `).join("")}
      </nav>
    </aside>
  `}function Z_(){return`
    <header class="mobile-header">
      <button class="mobile-hamburger-btn" id="mobile-hamburger-btn" aria-label="Open Navigation Menu">
        <span>☰</span>
      </button>
      <div class="mobile-header-brand">
        <img src="/icon-192.png" alt="Money Control" class="mobile-header-logo" />
        <span class="mobile-header-title">Money Control</span>
      </div>
    </header>
  `}function tw(n,t,e){const i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(e==null?void 0:e.email)||(t==null?void 0:t.email)||"";return`
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
        ${[{id:"budget",icon:"🎯",label:"Budget"},{id:"money-control",icon:"📅",label:"Money Control"},{id:"friends-money",icon:"🤝",label:"Friends Money"},{id:"profile",icon:"👤",label:"Profile"},{id:"settings",icon:"⚙️",label:"Settings"}].map(a=>`
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
  `}function ew(n){return`
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
  `}function iN(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.add("open"),t&&t.classList.add("open"),document.body.style.overflow="hidden"}function is(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}function sN(n,t){document.querySelectorAll(".sidebar-link[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}}),document.querySelectorAll(".bottom-nav-item[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}});const e=document.getElementById("mobile-add-btn");e&&(e.onclick=()=>{window.dispatchEvent(new CustomEvent("open-add-menu"))});const i=document.getElementById("mobile-hamburger-btn");i&&(i.onclick=()=>iN());const s=document.getElementById("mobile-drawer-close");s&&(s.onclick=()=>is());const r=document.getElementById("mobile-drawer-overlay");r&&(r.onclick=()=>is()),document.querySelectorAll(".mobile-drawer-item[data-page]").forEach(l=>{l.onclick=()=>{is();const d=l.dataset.page;n(d)}});const o=document.getElementById("mobile-drawer-lock-app");o&&(o.onclick=()=>{is(),t&&t.pinEnabled&&t.pinHash?window.dispatchEvent(new CustomEvent("lock-app")):(z.info("🔒 PIN Lock is not enabled. Go to Settings → PIN Lock to set your PIN."),n("settings"))});const a=document.getElementById("mobile-drawer-logout");a&&(a.onclick=async()=>{is(),await ci({icon:"🚪",title:"Logout?",message:"Are you sure you want to log out of Money Control?",confirmText:"Logout",danger:!0})&&(await Hd(),z.info("Logged out successfully."))});const c=document.getElementById("mobile-drawer");if(c){let l=0;c.ontouchstart=d=>{l=d.touches[0].clientX},c.ontouchmove=d=>{const h=d.touches[0].clientX;l-h>50&&is()}}}function rN(){return`
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
      ${oN(3)}
    </div>
  `}function oN(n=5){let t="";for(let e=0;e<n;e++)t+=`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;return t}const O={user:null,profile:null,accounts:[],transactions:[],budgets:[],friendMoneyRecords:[],activePage:"dashboard",selectedAccountId:null,unsubscribeAccounts:null,unsubscribeTx:null,unsubscribeFriendMoney:null,authLoading:!0,dashboardError:null,isLocked:!1,pinEnabled:!1,pinHash:null,autoLockTimeout:5,lastActivityTime:Date.now(),biometricEnabled:!1,biometricCredentialId:null,hideBalance:!1};window.appState=O;let Ca=null;function aN(){try{const n=localStorage.getItem("theme");n?document.documentElement.setAttribute("data-theme",n):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.setAttribute("data-theme","dark"))}catch{document.documentElement.setAttribute("data-theme","dark")}}aN();try{yk()}catch(n){console.warn("PWA initialization warning:",n)}const _o=document.getElementById("app");function cN(){_o.innerHTML=`
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
  `}function lN(){cN(),lk(async n=>{if(O.authLoading=!1,O.unsubscribeAccounts&&(O.unsubscribeAccounts(),O.unsubscribeAccounts=null),O.unsubscribeTx&&(O.unsubscribeTx(),O.unsubscribeTx=null),O.unsubscribeFriendMoney&&(O.unsubscribeFriendMoney(),O.unsubscribeFriendMoney=null),!n){O.user=null,O.profile=null,O.accounts=[],O.transactions=[],O.budgets=[],O.friendMoneyRecords=[],O.isLocked=!1,O.pinEnabled=!1,O.pinHash=null,O.dashboardError=null,ai(),iw(),Vu();return}O.user=n,dN();try{await nw(n.uid)}catch(t){console.error("Error loading user data:",t),O.dashboardError=t,Te()}}),window.addEventListener("hashchange",pN),window.addEventListener("open-add-menu",()=>{gN()}),window.addEventListener("lock-app",()=>{lc()}),mN()}async function nw(n){var t,e,i,s,r;O.dashboardError=null;try{const o=new Promise(l=>setTimeout(()=>l(null),3e3));let a=await Promise.race([qr(n),o]);if(!a){const l=((t=O.user)==null?void 0:t.displayName)||((i=(e=O.user)==null?void 0:e.email)==null?void 0:i.split("@")[0])||"User";try{await mb(n,{name:l,email:((s=O.user)==null?void 0:s.email)||"",createdAt:new Date().toISOString()}),a=await qr(n)}catch(d){console.warn("Profile creation fallback:",d),a={name:l,email:((r=O.user)==null?void 0:r.email)||"",initialBalance:0}}}if(O.profile=a,!a||a.initialBalance===null||a.initialBalance===void 0){uN();return}try{await _b(n,a.initialBalance)}catch(l){console.warn("ensureDefaultAccounts warning:",l)}try{O.budgets=await qd(n)}catch{O.budgets=[]}let c;try{c=await tc(n)}catch(l){console.warn("getPinData warning in loadUserData:",l),c={pinHash:null,pinEnabled:!1,pinSetupPromptShown:!0,autoLockTimeout:5}}O.pinEnabled=c.pinEnabled,O.pinHash=c.pinHash,O.autoLockTimeout=c.autoLockTimeout!==void 0?c.autoLockTimeout:5,O.biometricEnabled=c.biometricEnabled||!1,O.biometricCredentialId=c.biometricCredentialId||null,O.hideBalance=c.hideBalance||!1,O.unsubscribeAccounts=ek(n,(l,d)=>{d?(console.error("Accounts subscription error:",d),O.dashboardError=d):O.accounts=l,O.isLocked||Te()}),O.unsubscribeTx=ik(n,(l,d)=>{d?console.error("Transactions subscription error:",d):O.transactions=l,O.isLocked||Te()}),O.unsubscribeFriendMoney=cP(n,(l,d)=>{d?console.error("Friend money subscription error:",d):O.friendMoneyRecords=l,O.isLocked||Te()}),O.pinEnabled&&O.pinHash?(O.isLocked=!0,kb(n,O.pinHash,()=>{O.isLocked=!1,O.lastActivityTime=Date.now(),Ra(),Te()},O.biometricEnabled,O.biometricCredentialId)):c.pinSetupPromptShown?(O.isLocked=!1,Ra(),Te()):Lk(n,()=>{tc(n).then(l=>{O.pinEnabled=l.pinEnabled,O.pinHash=l.pinHash,O.pinEnabled&&Ra(),Te()})})}catch(o){console.error("loadUserData error:",o),O.dashboardError=o,Te()}}function Vu(){_o.innerHTML=Qk(),Lb()}function uN(){_o.innerHTML=Jk(),Zk(O.user.uid,async()=>{await nw(O.user.uid)})}function dN(){_o.innerHTML=`
    <div class="app-layout">
      ${Z_()}
      ${J_(O.activePage)}
      <main class="main-content">
        ${rN()}
      </main>
      ${ew(O.activePage)}
      ${tw(O.activePage,O.user,O.profile)}
    </div>
  `}function Te(){if(O.isLocked)return;const n=window.location.hash.replace("#/","").replace("#","");n&&["dashboard","accounts","transactions","money-control","analytics","budget","friends-money","profile","settings","total-money-history"].includes(n)?O.activePage=n:O.activePage="dashboard";const t=hN(O.activePage);_o.innerHTML=`
    <div class="app-layout">
      ${Z_()}
      ${J_(O.activePage)}
      <main class="main-content" id="main-content-area">
        ${t}
      </main>
      ${ew(O.activePage)}
      ${tw(O.activePage,O.user,O.profile)}
    </div>
  `,sN(Or,O),fN(O.activePage)}function hN(n){switch(n){case"dashboard":return Yp(O);case"accounts":return dP(O);case"transactions":return zb(O);case"money-control":return ba(O);case"analytics":return H_(O);case"budget":return kD(O);case"friends-money":return W_(O);case"profile":return OD(O);case"settings":return X_(O);case"total-money-history":return JD(O);default:return Yp(O)}}function fN(n){const t=async()=>{if(O.user){O.profile=await qr(O.user.uid),O.budgets=await qd(O.user.uid);const e=await tc(O.user.uid);O.pinEnabled=e.pinEnabled,O.pinHash=e.pinHash,O.autoLockTimeout=e.autoLockTimeout!==void 0?e.autoLockTimeout:5,O.biometricEnabled=e.biometricEnabled||!1,O.biometricCredentialId=e.biometricCredentialId||null,O.hideBalance=e.hideBalance||!1,Te()}};switch(n){case"dashboard":Xp(Or,t);break;case"accounts":pP(t);break;case"transactions":qb(t);break;case"money-control":_a(t);break;case"analytics":q_();break;case"budget":PD(t);break;case"friends-money":Y_(t);break;case"profile":LD(()=>Vu(),t);break;case"settings":Q_(()=>Vu(),t);break;case"total-money-history":eN(Or);break;default:Xp(Or,t);break}}function Or(n){n!=="accounts"&&(O.selectedAccountId=null),n!=="friends-money"&&ND(),O.activePage=n,window.location.hash===`#/${n}`?Te():window.location.hash=`#/${n}`}function pN(){var n;O.user&&((n=O.profile)==null?void 0:n.initialBalance)!==null&&!O.isLocked&&Te()}function lc(){!O.pinEnabled||!O.pinHash||!O.user||(O.isLocked=!0,kb(O.user.uid,O.pinHash,()=>{O.isLocked=!1,O.lastActivityTime=Date.now(),Ra(),Te()},O.biometricEnabled,O.biometricCredentialId))}function Ra(){if(iw(),!O.pinEnabled||!O.pinHash||O.autoLockTimeout<0)return;const n=O.autoLockTimeout===0?0:O.autoLockTimeout*60*1e3;n>0&&(Ca=setInterval(()=>{Date.now()-O.lastActivityTime>=n&&!O.isLocked&&lc()},1e4))}function iw(){Ca&&(clearInterval(Ca),Ca=null)}function mN(){const n=()=>{O.lastActivityTime=Date.now()};["click","keydown","touchstart","scroll"].forEach(t=>{document.addEventListener(t,n,{passive:!0})}),document.addEventListener("visibilitychange",()=>{if(document.hidden||!O.pinEnabled||!O.pinHash||O.isLocked)return;const t=Date.now()-O.lastActivityTime;if(O.autoLockTimeout===0)lc();else if(O.autoLockTimeout>0){const e=O.autoLockTimeout*60*1e3;t>=e&&lc()}})}function gN(){Yt({title:"⚡ Quick Action",content:`
    <div style="display: flex; flex-direction: column; gap: 12px; padding: 12px 0;">
      <button class="quick-action-btn income" id="fab-modal-add-income">
        <span>➕</span> Add Money (Income)
      </button>
      <button class="quick-action-btn expense" id="fab-modal-add-expense">
        <span>➖</span> Add Expense
      </button>
      <button class="quick-action-btn transfer" id="fab-modal-transfer" style="background: var(--primary-bg); color: var(--primary); border: 1.5px solid var(--primary-light);">
        <span>↔</span> Transfer Money
      </button>
      <button class="quick-action-btn friends" id="fab-modal-friends-money" style="background: rgba(139, 92, 246, 0.12); color: #8B5CF6; border: 1.5px solid rgba(139, 92, 246, 0.25);">
        <span>🤝</span> Friends Money
      </button>
    </div>
  `,onOpen:t=>{const e=t.querySelector("#fab-modal-add-income"),i=t.querySelector("#fab-modal-add-expense"),s=t.querySelector("#fab-modal-transfer"),r=t.querySelector("#fab-modal-friends-money"),o=async()=>{O.user&&(O.profile=await qr(O.user.uid),O.budgets=await qd(O.user.uid),Te())};e&&(e.onclick=()=>bu("INCOME",o)),i&&(i.onclick=()=>bu("EXPENSE",o)),s&&(s.onclick=()=>uP(o)),r&&(r.onclick=()=>{kt(),Or("friends-money"),setTimeout(()=>{K_(o,O)},60)})}})}lN();export{_s as _};
