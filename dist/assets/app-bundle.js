var _E=Object.defineProperty;var bE=(n,t,e)=>t in n?_E(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var z=(n,t,e)=>bE(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();window.__appLoaded=!1;window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{if(!window.__appLoaded){console.warn("Vite dev server not active. Mounting application bundle...");const n=document.createElement("script");n.type="module",n.src="/dist/assets/app-bundle.js",document.body.appendChild(n)}},250)});const wE=()=>{};var Df={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},EE=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),i.push(e[d],e[h],e[f],e[m])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Hg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):EE(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new IE;const f=r<<2|a>>4;if(i.push(f),l!==64){const m=a<<4&240|l>>2;if(i.push(m),h!==64){const y=l<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class IE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TE=function(n){const t=Hg(n);return qg.encodeByteArray(t,!0)},Na=function(n){return TE(n).replace(/\./g,"")},Wg=function(n){try{return qg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function AE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SE=()=>AE().__FIREBASE_DEFAULTS__,xE=()=>{if(typeof process>"u"||typeof Df>"u")return;const n=Df.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},PE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Wg(n[1]);return t&&JSON.parse(t)},dc=()=>{try{return wE()||SE()||xE()||PE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gg=n=>{var t,e;return(e=(t=dc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},kE=n=>{const t=Gg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Kg=()=>{var n;return(n=dc())===null||n===void 0?void 0:n.config},Yg=n=>{var t;return(t=dc())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xg(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function RE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Na(JSON.stringify(e)),Na(JSON.stringify(o)),""].join(".")}const vr={};function DE(){const n={prod:[],emulator:[]};for(const t of Object.keys(vr))vr[t]?n.emulator.push(t):n.prod.push(t);return n}function ME(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Mf=!1;function Qg(n,t){if(typeof window>"u"||typeof document>"u"||!Ss(window.location.host)||vr[n]===t||vr[n]||Mf)return;vr[n]=t;function e(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=DE().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,m){f.setAttribute("width","24"),f.setAttribute("id",m),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Mf=!0,o()},f}function d(f,m){f.setAttribute("id",m),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=ME(i),m=e("text"),y=document.getElementById(m)||document.createElement("span"),_=e("learnmore"),v=document.getElementById(_)||document.createElement("a"),I=e("preprendIcon"),k=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const D=f.element;a(D),d(v,_);const M=l();c(k,I),D.append(k,y,v,M),document.body.appendChild(D)}r?(y.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function NE(){var n;const t=(n=dc())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function FE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BE(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function UE(){return!NE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $E(){try{return typeof indexedDB=="object"}catch{return!1}}function zE(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="FirebaseError";class On extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=jE,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?HE(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new On(s,a,i)}}function HE(n,t){return n.replace(qE,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const qE=/\{\$([^}]+)}/g;function WE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Fi(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(Of(r)&&Of(o)){if(!Fi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Of(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function sr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function rr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function GE(n,t){const e=new KE(n,t);return e.subscribe.bind(e)}class KE{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");YE(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=yl),s.error===void 0&&(s.error=yl),s.complete===void 0&&(s.complete=yl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YE(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function yl(){}/**
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
 */function G(n){return n&&n._delegate?n._delegate:n}class Bi{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class XE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new CE;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(JE(t))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ai){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ai){return this.instances.has(t)}getOptions(t=Ai){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:QE(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ai){return this.component?this.component.multipleInstances?t:Ai:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QE(n){return n===Ai?void 0:n}function JE(n){return n.instantiationMode==="EAGER"}/**
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
 */class ZE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new XE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const tI={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},eI=it.INFO,nI={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},iI=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=nI[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ju{constructor(t){this.name=t,this._logLevel=eI,this._logHandler=iI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const sI=(n,t)=>t.some(e=>n instanceof e);let Nf,Lf;function rI(){return Nf||(Nf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oI(){return Lf||(Lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jg=new WeakMap,Ql=new WeakMap,Zg=new WeakMap,vl=new WeakMap,Hu=new WeakMap;function aI(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Gn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Jg.set(e,n)}).catch(()=>{}),Hu.set(t,n),t}function cI(n){if(Ql.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ql.set(n,t)}let Jl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ql.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Zg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Gn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function lI(n){Jl=n(Jl)}function uI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(_l(this),t,...e);return Zg.set(i,t.sort?t.sort():[t]),Gn(i)}:oI().includes(n)?function(...t){return n.apply(_l(this),t),Gn(Jg.get(this))}:function(...t){return Gn(n.apply(_l(this),t))}}function dI(n){return typeof n=="function"?uI(n):(n instanceof IDBTransaction&&cI(n),sI(n,rI())?new Proxy(n,Jl):n)}function Gn(n){if(n instanceof IDBRequest)return aI(n);if(vl.has(n))return vl.get(n);const t=dI(n);return t!==n&&(vl.set(n,t),Hu.set(t,n)),t}const _l=n=>Hu.get(n);function hI(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Gn(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Gn(o.result),c.oldVersion,c.newVersion,Gn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const fI=["get","getKey","getAll","getAllKeys","count"],pI=["put","add","delete","clear"],bl=new Map;function Vf(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bl.get(t))return bl.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=pI.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||fI.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return bl.set(t,r),r}lI(n=>({...n,get:(t,e,i)=>Vf(t,e)||n.get(t,e,i),has:(t,e)=>!!Vf(t,e)||n.has(t,e)}));/**
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
 */class mI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(gI(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function gI(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zl="@firebase/app",Ff="0.13.2";/**
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
 */const kn=new ju("@firebase/app"),yI="@firebase/app-compat",vI="@firebase/analytics-compat",_I="@firebase/analytics",bI="@firebase/app-check-compat",wI="@firebase/app-check",EI="@firebase/auth",II="@firebase/auth-compat",TI="@firebase/database",AI="@firebase/data-connect",SI="@firebase/database-compat",xI="@firebase/functions",PI="@firebase/functions-compat",kI="@firebase/installations",CI="@firebase/installations-compat",RI="@firebase/messaging",DI="@firebase/messaging-compat",MI="@firebase/performance",OI="@firebase/performance-compat",NI="@firebase/remote-config",LI="@firebase/remote-config-compat",VI="@firebase/storage",FI="@firebase/storage-compat",BI="@firebase/firestore",UI="@firebase/ai",$I="@firebase/firestore-compat",zI="firebase",jI="11.10.0";/**
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
 */const tu="[DEFAULT]",HI={[Zl]:"fire-core",[yI]:"fire-core-compat",[_I]:"fire-analytics",[vI]:"fire-analytics-compat",[wI]:"fire-app-check",[bI]:"fire-app-check-compat",[EI]:"fire-auth",[II]:"fire-auth-compat",[TI]:"fire-rtdb",[AI]:"fire-data-connect",[SI]:"fire-rtdb-compat",[xI]:"fire-fn",[PI]:"fire-fn-compat",[kI]:"fire-iid",[CI]:"fire-iid-compat",[RI]:"fire-fcm",[DI]:"fire-fcm-compat",[MI]:"fire-perf",[OI]:"fire-perf-compat",[NI]:"fire-rc",[LI]:"fire-rc-compat",[VI]:"fire-gcs",[FI]:"fire-gcs-compat",[BI]:"fire-fst",[$I]:"fire-fst-compat",[UI]:"fire-vertex","fire-js":"fire-js",[zI]:"fire-js-all"};/**
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
 */const La=new Map,qI=new Map,eu=new Map;function Bf(n,t){try{n.container.addComponent(t)}catch(e){kn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function gs(n){const t=n.name;if(eu.has(t))return kn.debug(`There were multiple attempts to register component ${t}.`),!1;eu.set(t,n);for(const e of La.values())Bf(e,n);for(const e of qI.values())Bf(e,n);return!0}function qu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function At(n){return n==null?!1:n.settings!==void 0}/**
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
 */const WI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new eo("app","Firebase",WI);/**
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
 */class GI{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=jI;function ty(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:tu,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(e||(e=Kg()),!e)throw Kn.create("no-options");const r=La.get(s);if(r){if(Fi(e,r.options)&&Fi(i,r.config))return r;throw Kn.create("duplicate-app",{appName:s})}const o=new ZE(s);for(const c of eu.values())o.addComponent(c);const a=new GI(e,i,o);return La.set(s,a),a}function ey(n=tu){const t=La.get(n);if(!t&&n===tu&&Kg())return ty();if(!t)throw Kn.create("no-app",{appName:n});return t}function Yn(n,t,e){var i;let s=(i=HI[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}gs(new Bi(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const KI="firebase-heartbeat-database",YI=1,Or="firebase-heartbeat-store";let wl=null;function ny(){return wl||(wl=hI(KI,YI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Or)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),wl}async function XI(n){try{const e=(await ny()).transaction(Or),i=await e.objectStore(Or).get(iy(n));return await e.done,i}catch(t){if(t instanceof On)kn.warn(t.message);else{const e=Kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kn.warn(e.message)}}}async function Uf(n,t){try{const i=(await ny()).transaction(Or,"readwrite");await i.objectStore(Or).put(t,iy(n)),await i.done}catch(e){if(e instanceof On)kn.warn(e.message);else{const i=Kn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kn.warn(i.message)}}}function iy(n){return`${n.name}!${n.options.appId}`}/**
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
 */const QI=1024,JI=30;class ZI{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new eT(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$f();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>JI){const o=nT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){kn.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$f(),{heartbeatsToSend:i,unsentEntries:s}=tT(this._heartbeatsCache.heartbeats),r=Na(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return kn.warn(e),""}}}function $f(){return new Date().toISOString().substring(0,10)}function tT(n,t=QI){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),zf(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),zf(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class eT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?zE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await XI(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function zf(n){return Na(JSON.stringify({version:2,heartbeats:n})).length}function nT(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function iT(n){gs(new Bi("platform-logger",t=>new mI(t),"PRIVATE")),gs(new Bi("heartbeat",t=>new ZI(t),"PRIVATE")),Yn(Zl,Ff,n),Yn(Zl,Ff,"esm2017"),Yn("fire-js","")}iT("");function Wu(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}/**
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
 */const sT={PHONE:"phone",TOTP:"totp"},rT={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},oT={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},aT={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},cT={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uT=lT,ry=sy,oy=new eo("auth","Firebase",sy()),dT={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new ju("@firebase/auth");function hT(n,...t){Va.logLevel<=it.WARN&&Va.warn(`Auth (${Ps}): ${n}`,...t)}function ua(n,...t){Va.logLevel<=it.ERROR&&Va.error(`Auth (${Ps}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,...t){throw Ku(n,...t)}function pe(n,...t){return Ku(n,...t)}function Gu(n,t,e){const i=Object.assign(Object.assign({},ry()),{[t]:e});return new eo("auth","Firebase",i).create(t,{appName:n.name})}function Wt(n){return Gu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ks(n,t,e){const i=e;if(!(t instanceof i))throw i.name!==t.constructor.name&&we(n,"argument-error"),Gu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ku(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return oy.create(n,...t)}function U(n,t,...e){if(!n)throw Ku(t,...e)}function Ye(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ua(t),new Error(t)}function Cn(n,t){n||Ye(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Yu(){return jf()==="http:"||jf()==="https:"}function jf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yu()||VE()||"connection"in navigator)?navigator.onLine:!0}function pT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e){this.shortDelay=t,this.longDelay=e,Cn(e>t,"Short delay should be less than long delay!"),this.isMobile=OE()||FE()}get(){return fT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n,t){Cn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yT=new no(3e4,6e4);function wt(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Et(n,t,e,i,s={}){return cy(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=xs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return LE()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Ss(n.emulatorConfig.host)&&(l.credentials="include"),ay.fetch()(await ly(n,n.config.apiHost,e,a),l)})}async function cy(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},mT),t);try{const s=new _T(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw or(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gu(n,d,l);we(n,d)}}catch(s){if(s instanceof On)throw s;we(n,"network-request-failed",{message:String(s)})}}async function Nn(n,t,e,i,s={}){const r=await Et(n,t,e,i,s);return"mfaPendingCredential"in r&&we(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function ly(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?Xu(n.config,s):`${n.config.apiScheme}://${s}`;return gT.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function vT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _T{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(pe(this.auth,"network-request-failed")),yT.get())})}}function or(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=pe(n,t,i);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){return n!==void 0&&n.getResponse!==void 0}function qf(n){return n!==void 0&&n.enterprise!==void 0}class uy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return vT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(n){return(await Et(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function dy(n,t){return Et(n,"GET","/v2/recaptchaConfig",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(n,t){return Et(n,"POST","/v1/accounts:delete",t)}async function ET(n,t){return Et(n,"POST","/v1/accounts:update",t)}async function Fa(n,t){return Et(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,t=!1){return G(n).getIdToken(t)}async function hy(n,t=!1){const e=G(n),i=await e.getIdToken(t),s=hc(i);U(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:_r(El(s.auth_time)),issuedAtTime:_r(El(s.iat)),expirationTime:_r(El(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function El(n){return Number(n)*1e3}function hc(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wg(e);return s?JSON.parse(s):(ua("Failed to decode base64 JWT payload"),null)}catch(s){return ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wf(n){const t=hc(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof On&&TT(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function TT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lr(n){var t;const e=n.auth,i=await n.getIdToken(),s=await Rn(n,Fa(e,{idToken:i}));U(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?py(r.providerUserInfo):[],a=ST(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function fy(n){const t=G(n);await Lr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ST(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function py(n){return n.map(t=>{var{providerId:e}=t,i=Wu(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(n,t){const e=await cy(n,{},async()=>{const i=xs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await ly(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return n.emulatorConfig&&Ss(n.emulatorConfig.host)&&(c.credentials="include"),ay.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function PT(n,t){return Et(n,"POST","/v2/accounts:revokeToken",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){U(t.length!==0,"internal-error");const e=Wf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await xT(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new ls;return i&&(U(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(U(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(U(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Ve{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,r=Wu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Rn(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return hy(this,t)}reload(){return fy(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ve(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Lr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Wt(this.auth));const t=await this.getIdToken();return await Rn(this,wT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,r,o,a,c,l,d;const h=(i=e.displayName)!==null&&i!==void 0?i:void 0,f=(s=e.email)!==null&&s!==void 0?s:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,v=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=e.createdAt)!==null&&l!==void 0?l:void 0,k=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:D,emailVerified:M,isAnonymous:N,providerData:F,stsTokenManager:T}=e;U(D&&T,t,"internal-error");const b=ls.fromJSON(this.name,T);U(typeof D=="string",t,"internal-error"),Un(h,t.name),Un(f,t.name),U(typeof M=="boolean",t,"internal-error"),U(typeof N=="boolean",t,"internal-error"),Un(m,t.name),Un(y,t.name),Un(_,t.name),Un(v,t.name),Un(I,t.name),Un(k,t.name);const E=new Ve({uid:D,auth:t,email:f,emailVerified:M,displayName:h,isAnonymous:N,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:b,createdAt:I,lastLoginAt:k});return F&&Array.isArray(F)&&(E.providerData=F.map(S=>Object.assign({},S))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(t,e,i=!1){const s=new ls;s.updateFromServerResponse(e);const r=new Ve({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Lr(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];U(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?py(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new ls;a.updateFromIdToken(i);const c=new Ve({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new nu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new Map;function bn(n){Cn(n instanceof Function,"Expected a class definition");let t=Gf.get(n);return t?(Cn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Gf.set(n,t),t)}/**
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
 */class my{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}my.type="NONE";const iu=my;/**
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
 */function da(n,t,e){return`firebase:${n}:${t}:${e}`}class us{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=da(this.userKey,s.apiKey,r),this.fullPersistenceKey=da("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Fa(this.auth,{idToken:t}).catch(()=>{});return e?Ve._fromGetAccountInfoResponse(this.auth,e,t):null}return Ve._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new us(bn(iu),t,i);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||bn(iu);const o=da(i,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){let h;if(typeof d=="string"){const f=await Fa(t,{idToken:d}).catch(()=>{});if(!f)break;h=await Ve._fromGetAccountInfoResponse(t,f,d)}else h=Ve._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new us(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new us(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_y(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wy(t))return"Blackberry";if(Ey(t))return"Webos";if(yy(t))return"Safari";if((t.includes("chrome/")||vy(t))&&!t.includes("edge/"))return"Chrome";if(by(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gy(n=le()){return/firefox\//i.test(n)}function yy(n=le()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vy(n=le()){return/crios\//i.test(n)}function _y(n=le()){return/iemobile/i.test(n)}function by(n=le()){return/android/i.test(n)}function wy(n=le()){return/blackberry/i.test(n)}function Ey(n=le()){return/webos/i.test(n)}function Qu(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kT(n=le()){var t;return Qu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function CT(){return BE()&&document.documentMode===10}function Iy(n=le()){return Qu(n)||by(n)||Ey(n)||wy(n)||/windows phone/i.test(n)||_y(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n,t=[]){let e;switch(n){case"Browser":e=Kf(le());break;case"Worker":e=`${Kf(le())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ps}/${i}`}/**
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
 */class RT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function DT(n,t={}){return Et(n,"GET","/v2/passwordPolicy",wt(n,t))}/**
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
 */const MT=6;class OT{constructor(t){var e,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:MT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yf(this),this.idTokenSubscription=new Yf(this),this.beforeStateQueue=new RT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=bn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await us.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Fa(this,{idToken:t}),i=await Ve._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Lr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(At(this.app))return Promise.reject(Wt(this));const e=t?G(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return At(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await DT(this),e=new OT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new eo("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await PT(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&bn(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[bn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,i,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ty(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&hT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mt(n){return G(n)}class Yf{constructor(t){this.auth=t,this.observer=null,this.addObserver=GE(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LT(n){io=n}function Ju(n){return io.loadJS(n)}function VT(){return io.recaptchaV2Script}function FT(){return io.recaptchaEnterpriseScript}function BT(){return io.gapiScript}function Ay(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=500,$T=6e4,$o=1e12;class zT{constructor(t){this.auth=t,this.counter=$o,this._widgets=new Map}render(t,e){const i=this.counter;return this._widgets.set(i,new qT(t,this.auth.name,e||{})),this.counter++,i}reset(t){var e;const i=t||$o;(e=this._widgets.get(i))===null||e===void 0||e.delete(),this._widgets.delete(i)}getResponse(t){var e;const i=t||$o;return((e=this._widgets.get(i))===null||e===void 0?void 0:e.getResponse())||""}async execute(t){var e;const i=t||$o;return(e=this._widgets.get(i))===null||e===void 0||e.execute(),""}}class jT{constructor(){this.enterprise=new HT}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class HT{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class qT{constructor(t,e,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof t=="string"?document.getElementById(t):t;U(s,"argument-error",{appName:e}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=WT(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch{}this.isVisible&&this.execute()},$T)},UT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function WT(n){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}const GT="recaptcha-enterprise",br="NO_RECAPTCHA";class Sy{constructor(t){this.type=GT,this.auth=Mt(t)}async verify(t="verify",e=!1){async function i(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{dy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new uy(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;qf(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(br)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jT().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!e&&qf(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=FT();c.length!==0&&(c+=a),Ju(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Js(n,t,e,i=!1,s=!1){const r=new Sy(n);let o;if(s)o=br;else try{o=await r.verify(e)}catch{o=await r.verify(e,!0)}const a=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xn(n,t,e,i,s){var r,o;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Js(n,t,e,e==="getOobCode");return i(n,a)}else return i(n,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Js(n,t,e,e==="getOobCode");return i(n,c)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Js(n,t,e);return i(n,a).catch(async c=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${e} flow.`);const d=await Js(n,t,e,!1,!0);return i(n,d)}return Promise.reject(c)})}else{const a=await Js(n,t,e,!1,!0);return i(n,a)}else return Promise.reject(s+" provider is not supported.")}async function xy(n){const t=Mt(n),e=await dy(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new uy(e);t.tenantId==null?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.isAnyProviderEnabled()&&new Sy(t).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n,t){const e=qu(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(Fi(r,t??{}))return s;we(s,"already-initialized")}return e.initialize({options:t})}function KT(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(bn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function ky(n,t,e){const i=Mt(n);U(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(e!=null&&e.disableWarnings),r=Cy(t),{host:o,port:a}=YT(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){U(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),U(Fi(l,i.config.emulator)&&Fi(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Ss(o)?(Xg(`${r}//${o}${c}`),Qg("Auth",!0)):s||XT()}function Cy(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function YT(n){const t=Cy(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Xf(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Xf(o)}}}function Xf(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function XT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ye("not implemented")}_getIdTokenResponse(t){return Ye("not implemented")}_linkToIdToken(t,e){return Ye("not implemented")}_getReauthenticationResolver(t){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(n,t){return Et(n,"POST","/v1/accounts:resetPassword",wt(n,t))}async function QT(n,t){return Et(n,"POST","/v1/accounts:update",t)}async function JT(n,t){return Et(n,"POST","/v1/accounts:signUp",t)}async function ZT(n,t){return Et(n,"POST","/v1/accounts:update",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(n,t){return Nn(n,"POST","/v1/accounts:signInWithPassword",wt(n,t))}async function fc(n,t){return Et(n,"POST","/v1/accounts:sendOobCode",wt(n,t))}async function e0(n,t){return fc(n,t)}async function n0(n,t){return fc(n,t)}async function i0(n,t){return fc(n,t)}async function s0(n,t){return fc(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(n,t){return Nn(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,t))}async function o0(n,t){return Nn(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Cs{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new ys(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new ys(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(t,e,"signInWithPassword",t0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return r0(t,{email:this._email,oobCode:this._password});default:we(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(t,i,"signUpPassword",JT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return o0(t,{idToken:e,email:this._email,oobCode:this._password});default:we(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n,t){return Nn(n,"POST","/v1/accounts:signInWithIdp",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="http://localhost";class en extends Cs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new en(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):we("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,r=Wu(e,["providerId","signInMethod"]);if(!i||!s)return null;const o=new en(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return An(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,An(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,An(t,e)}buildRequest(){const t={requestUri:a0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=xs(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(n,t){return Et(n,"POST","/v1/accounts:sendVerificationCode",wt(n,t))}async function c0(n,t){return Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,t))}async function l0(n,t){const e=await Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,t));if(e.temporaryProof)throw or(n,"account-exists-with-different-credential",e);return e}const u0={USER_NOT_FOUND:"user-not-found"};async function d0(n,t){const e=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Nn(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,e),u0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Cs{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Qn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Qn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return c0(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return l0(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return d0(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:i,verificationCode:s}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:i,code:s}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:e,verificationCode:i,phoneNumber:s,temporaryProof:r}=t;return!i&&!e&&!s&&!r?null:new Qn({verificationId:e,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f0(n){const t=sr(rr(n)).link,e=t?sr(rr(t)).deep_link_id:null,i=sr(rr(n)).deep_link_id;return(i?sr(rr(i)).link:null)||i||e||t||n}class Rs{constructor(t){var e,i,s,r,o,a;const c=sr(rr(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,h=h0((s=c.mode)!==null&&s!==void 0?s:null);U(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=f0(t);try{return new Rs(e)}catch{return null}}}function p0(n){return Rs.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.providerId=rn.PROVIDER_ID}static credential(t,e){return ys._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=Rs.parseLink(e);return U(i,"argument-error"),ys._fromEmailAndCode(t,i.code,i.tenantId)}}rn.PROVIDER_ID="password";rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends Ln{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class wr extends Ds{static credentialFromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;return U("providerId"in e&&"signInMethod"in e,"argument-error"),en._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return U(t.idToken||t.accessToken,"argument-error"),en._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return wr.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return wr.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:a}=t;if(!i&&!s&&!e&&!r||!a)return null;try{return new wr(a)._credential({idToken:e,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ds{constructor(){super("facebook.com")}static credential(t){return en._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return gn.credential(t.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return en._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return yn.credential(e,i)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ds{constructor(){super("github.com")}static credential(t){return en._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vn.credential(t.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="http://localhost";class Vr extends Cs{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return An(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,An(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,An(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s,pendingToken:r}=e;return!i||!s||!r||i!==s?null:new Vr(i,r)}static _create(t,e){return new Vr(t,e)}buildRequest(){return{requestUri:m0,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="saml.";class Ba extends Ln{constructor(t){U(t.startsWith(g0),"argument-error"),super(t)}static credentialFromResult(t){return Ba.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return Ba.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=Vr.fromJSON(t);return U(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:i}=t;if(!e||!i)return null;try{return Vr._create(i,e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ds{constructor(){super("twitter.com")}static credential(t,e){return en._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return _n.credential(e,i)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(n,t){return Nn(n,"POST","/v1/accounts:signUp",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Ve._fromIdTokenResponse(t,i,s),o=Jf(i);return new Re({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=Jf(i);return new Re({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function Jf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(n){var t;if(At(n.app))return Promise.reject(Wt(n));const e=Mt(n);if(await e._initializationPromise,!((t=e.currentUser)===null||t===void 0)&&t.isAnonymous)return new Re({user:e.currentUser,providerId:null,operationType:"signIn"});const i=await Dy(e,{returnSecureToken:!0}),s=await Re._fromIdTokenResponse(e,"signIn",i,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends On{constructor(t,e,i,s){var r;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new Ua(t,e,i,s)}}function My(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(n,r,t,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){return new Set(n.map(({providerId:t})=>t).filter(t=>!!t))}/**
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
 */async function v0(n,t){const e=G(n);await pc(!0,e,t);const{providerUserInfo:i}=await ET(e.auth,{idToken:await e.getIdToken(),deleteProvider:[t]}),s=Oy(i||[]);return e.providerData=e.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(e.phoneNumber=null),await e.auth._persistUserIfCurrent(e),e}async function Zu(n,t,e=!1){const i=await Rn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Re._forOperation(n,"link",i)}async function pc(n,t,e){await Lr(t);const i=Oy(t.providerData),s=n===!1?"provider-already-linked":"no-such-provider";U(i.has(e)===n,t.auth,s)}/**
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
 */async function Ny(n,t,e=!1){const{auth:i}=n;if(At(i.app))return Promise.reject(Wt(i));const s="reauthenticate";try{const r=await Rn(n,My(i,s,t,n),e);U(r.idToken,i,"internal-error");const o=hc(r.idToken);U(o,i,"internal-error");const{sub:a}=o;return U(n.uid===a,i,"user-mismatch"),Re._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&we(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n,t,e=!1){if(At(n.app))return Promise.reject(Wt(n));const i="signIn",s=await My(n,i,t),r=await Re._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}async function mc(n,t){return Ly(Mt(n),t)}async function Vy(n,t){const e=G(n);return await pc(!1,e,t.providerId),Zu(e,t)}async function gc(n,t){return Ny(G(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(n,t){return Nn(n,"POST","/v1/accounts:signInWithCustomToken",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(n,t){if(At(n.app))return Promise.reject(Wt(n));const e=Mt(n),i=await _0(e,{token:t,returnSecureToken:!0}),s=await Re._fromIdTokenResponse(e,"signIn",i);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?td._fromServerResponse(t,e):"totpInfo"in e?ed._fromServerResponse(t,e):we(t,"internal-error")}}class td extends so{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new td(e)}}class ed extends so{constructor(t){super("totp",t)}static _fromServerResponse(t,e){return new ed(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n,t,e){var i;U(((i=e.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),U(typeof e.dynamicLinkDomain>"u"||e.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),U(typeof e.linkDomain>"u"||e.linkDomain.length>0,n,"invalid-hosting-link-domain"),t.continueUrl=e.url,t.dynamicLinkDomain=e.dynamicLinkDomain,t.linkDomain=e.linkDomain,t.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(U(e.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),t.iOSBundleId=e.iOS.bundleId),e.android&&(U(e.android.packageName.length>0,n,"missing-android-pkg-name"),t.androidInstallApp=e.android.installApp,t.androidMinimumVersionCode=e.android.minimumVersion,t.androidPackageName=e.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(n){const t=Mt(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Fy(n,t,e){const i=Mt(n),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};e&&yc(i,s,e),await Xn(i,s,"getOobCode",n0,"EMAIL_PASSWORD_PROVIDER")}async function w0(n,t,e){await Ry(G(n),{oobCode:t,newPassword:e}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&nd(n),i})}async function E0(n,t){await ZT(G(n),{oobCode:t})}async function By(n,t){const e=G(n),i=await Ry(e,{oobCode:t}),s=i.requestType;switch(U(s,e,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(i.newEmail,e,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(i.mfaInfo,e,"internal-error");default:U(i.email,e,"internal-error")}let r=null;return i.mfaInfo&&(r=so._fromServerResponse(Mt(e),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function I0(n,t){const{data:e}=await By(G(n),t);return e.email}async function Uy(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n),o=await Xn(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dy,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nd(n),c}),a=await Re._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function $y(n,t,e){return At(n.app)?Promise.reject(Wt(n)):mc(G(n),rn.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&nd(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(n,t,e){const i=Mt(n),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function r(o,a){U(a.handleCodeInApp,i,"argument-error"),a&&yc(i,o,a)}r(s,e),await Xn(i,s,"getOobCode",i0,"EMAIL_PASSWORD_PROVIDER")}function A0(n,t){const e=Rs.parseLink(t);return(e==null?void 0:e.operation)==="EMAIL_SIGNIN"}async function S0(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=G(n),s=rn.credentialWithLink(t,e||Nr());return U(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),mc(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(n,t){return Et(n,"POST","/v1/accounts:createAuthUri",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(n,t){const e=Yu()?Nr():"http://localhost",i={identifier:t,continueUri:e},{signinMethods:s}=await x0(G(n),i);return s||[]}async function k0(n,t){const e=G(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};t&&yc(e.auth,s,t);const{email:r}=await e0(e.auth,s);r!==n.email&&await n.reload()}async function C0(n,t,e){const i=G(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:t};e&&yc(i.auth,r,e);const{email:o}=await s0(i.auth,r);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(n,t){return Et(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function id(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const i=G(n),r={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await Rn(i,R0(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function D0(n,t){const e=G(n);return At(e.auth.app)?Promise.reject(Wt(e.auth)):jy(e,t,null)}function zy(n,t){return jy(G(n),null,t)}async function jy(n,t,e){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(r.email=t),e&&(r.password=e);const o=await Rn(n,QT(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function M0(n){var t,e;if(!n)return null;const{providerId:i}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const o=(e=(t=hc(n.idToken))===null||t===void 0?void 0:t.firebase)===null||e===void 0?void 0:e.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ds(r,a)}}if(!i)return null;switch(i){case"facebook.com":return new O0(r,s);case"github.com":return new N0(r,s);case"google.com":return new L0(r,s);case"twitter.com":return new V0(r,s,n.screenName||null);case"custom":case"anonymous":return new ds(r,null);default:return new ds(r,i,s)}}class ds{constructor(t,e,i={}){this.isNewUser=t,this.providerId=e,this.profile=i}}class Hy extends ds{constructor(t,e,i,s){super(t,e,i),this.username=s}}class O0 extends ds{constructor(t,e){super(t,"facebook.com",e)}}class N0 extends Hy{constructor(t,e){super(t,"github.com",e,typeof(e==null?void 0:e.login)=="string"?e==null?void 0:e.login:null)}}class L0 extends ds{constructor(t,e){super(t,"google.com",e)}}class V0 extends Hy{constructor(t,e,i){super(t,"twitter.com",e,i)}}function F0(n){const{user:t,_tokenResponse:e}=n;return t.isAnonymous&&!e?{providerId:null,isNewUser:!1,profile:null}:M0(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n,t){return G(n).setPersistence(t)}function B0(n){return xy(n)}async function U0(n,t){return Mt(n).validatePassword(t)}function Wy(n,t,e,i){return G(n).onIdTokenChanged(t,e,i)}function Gy(n,t,e){return G(n).beforeAuthStateChanged(t,e)}function Ky(n,t,e,i){return G(n).onAuthStateChanged(t,e,i)}function $0(n){G(n).useDeviceLanguage()}function z0(n,t){return G(n).updateCurrentUser(t)}function Yy(n){return G(n).signOut()}function j0(n,t){return Mt(n).revokeAccessToken(t)}async function Xy(n){return G(n).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,i){this.type=t,this.credential=e,this.user=i}static _fromIdtoken(t,e){return new Pi("enroll",t,e)}static _fromMfaPendingCredential(t){return new Pi("signin",t)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(t){var e,i;if(t!=null&&t.multiFactorSession){if(!((e=t.multiFactorSession)===null||e===void 0)&&e.pendingCredential)return Pi._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(!((i=t.multiFactorSession)===null||i===void 0)&&i.idToken)return Pi._fromIdtoken(t.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e,i){this.session=t,this.hints=e,this.signInResolver=i}static _fromError(t,e){const i=Mt(t),s=e.customData._serverResponse,r=(s.mfaInfo||[]).map(a=>so._fromServerResponse(i,a));U(s.mfaPendingCredential,i,"internal-error");const o=Pi._fromMfaPendingCredential(s.mfaPendingCredential);return new sd(o,r,async a=>{const c=await a._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(e.operationType){case"signIn":const d=await Re._fromIdTokenResponse(i,e.operationType,l);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return U(e.user,i,"internal-error"),Re._forOperation(e.user,e.operationType,l);default:we(i,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function H0(n,t){var e;const i=G(n),s=t;return U(t.customData.operationType,i,"argument-error"),U((e=s.customData._serverResponse)===null||e===void 0?void 0:e.mfaPendingCredential,i,"argument-error"),sd._fromError(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:start",wt(n,t))}function q0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:finalize",wt(n,t))}function W0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:start",wt(n,t))}function G0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:finalize",wt(n,t))}function K0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:withdraw",wt(n,t))}class rd{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(i=>so._fromServerResponse(t.auth,i)))})}static _fromUser(t){return new rd(t)}async getSession(){return Pi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(t,e){const i=t,s=await this.getSession(),r=await Rn(this.user,i._process(this.user.auth,s,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){const e=typeof t=="string"?t:t.uid,i=await this.user.getIdToken();try{const s=await Rn(this.user,K0(this.user.auth,{idToken:i,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==e),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const Il=new WeakMap;function Y0(n){const t=G(n);return Il.has(t)||Il.set(t,rd._fromUser(t)),Il.get(t)}const $a="__sak";/**
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
 */class Qy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=1e3,Q0=10;class Jy extends Qy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);CT()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Q0):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},X0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jy.type="LOCAL";const od=Jy;/**
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
 */const J0=1e3;function Tl(n){var t,e;const i=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),s=RegExp(`${i}=([^;]+)`);return(e=(t=document.cookie.match(s))===null||t===void 0?void 0:t[1])!==null&&e!==void 0?e:null}function Al(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class Zy{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(t){if(typeof window===void 0)return t;const e=new URL(`${window.location.origin}/__cookies__`);return e.searchParams.set("finalTarget",t),e}async _isAvailable(){var t;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(t=navigator.cookieEnabled)!==null&&t!==void 0?t:!0}async _set(t,e){}async _get(t){if(!this._isAvailable())return null;const e=Al(t);if(window.cookieStore){const i=await window.cookieStore.get(e);return i==null?void 0:i.value}return Tl(e)}async _remove(t){if(!this._isAvailable()||!await this._get(t))return;const i=Al(t);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(t,e){if(!this._isAvailable())return;const i=Al(t);if(window.cookieStore){const a=(l=>{const d=l.changed.find(f=>f.name===i);d&&e(d.value),l.deleted.find(f=>f.name===i)&&e(null)}),c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(e,c),window.cookieStore.addEventListener("change",a)}let s=Tl(i);const r=setInterval(()=>{const a=Tl(i);a!==s&&(e(a),s=a)},J0),o=()=>clearInterval(r);this.listenerUnsubscribes.set(e,o)}_removeListener(t,e){const i=this.listenerUnsubscribes.get(e);i&&(i(),this.listenerUnsubscribes.delete(e))}}Zy.type="COOKIE";const Z0=Zy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends Qy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}tv.type="SESSION";const ad=tv;/**
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
 */function tA(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class vc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new vc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await tA(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class eA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=_c("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function nA(n){Ft().location.href=n}/**
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
 */function cd(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function iA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rA(){return cd()?self:null}/**
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
 */const ev="firebaseLocalStorageDb",oA=1,za="firebaseLocalStorage",nv="fbase_key";class ro{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function bc(n,t){return n.transaction([za],t?"readwrite":"readonly").objectStore(za)}function aA(){const n=indexedDB.deleteDatabase(ev);return new ro(n).toPromise()}function su(){const n=indexedDB.open(ev,oA);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(za,{keyPath:nv})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(za)?t(i):(i.close(),await aA(),t(await su()))})})}async function tp(n,t,e){const i=bc(n,!0).put({[nv]:t,value:e});return new ro(i).toPromise()}async function cA(n,t){const e=bc(n,!1).get(t),i=await new ro(e).toPromise();return i===void 0?null:i.value}function ep(n,t){const e=bc(n,!0).delete(t);return new ro(e).toPromise()}const lA=800,uA=3;class iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>uA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(rA()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await iA(),!this.activeServiceWorker)return;this.sender=new eA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await su();return await tp(t,$a,"1"),await ep(t,$a),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>tp(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>cA(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ep(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=bc(s,!1).getAll();return new ro(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iv.type="LOCAL";const sv=iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:start",wt(n,t))}function dA(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:finalize",wt(n,t))}function hA(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:finalize",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=Ay("rcb"),fA=new no(3e4,6e4);class pA{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Ft().grecaptcha)===null||t===void 0)&&t.render)}load(t,e=""){return U(mA(e),t,"argument-error"),this.shouldResolveImmediately(e)&&Hf(Ft().grecaptcha)?Promise.resolve(Ft().grecaptcha):new Promise((i,s)=>{const r=Ft().setTimeout(()=>{s(pe(t,"network-request-failed"))},fA.get());Ft()[Sl]=()=>{Ft().clearTimeout(r),delete Ft()[Sl];const a=Ft().grecaptcha;if(!a||!Hf(a)){s(pe(t,"internal-error"));return}const c=a.render;a.render=(l,d)=>{const h=c(l,d);return this.counter++,h},this.hostLanguage=e,i(a)};const o=`${VT()}?${xs({onload:Sl,render:"explicit",hl:e})}`;Ju(o).catch(()=>{clearTimeout(r),s(pe(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var e;return!!(!((e=Ft().grecaptcha)===null||e===void 0)&&e.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mA(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class gA{async load(t){return new zT(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="recaptcha",yA={theme:"light",type:"image"};class vA{constructor(t,e,i=Object.assign({},yA)){this.parameters=i,this.type=Er,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Mt(t),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;U(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gA:new pA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),i=e.getResponse(t);return i||new Promise(s=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(i=>i(e)),typeof t=="function")t(e);else if(typeof t=="string"){const i=Ft()[t];typeof i=="function"&&i(e)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){U(Yu()&&!cd(),this.auth,"internal-error"),await _A(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await bT(this.auth);U(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function _A(){let n=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}n=()=>t(),window.addEventListener("load",n)}).catch(t=>{throw n&&window.removeEventListener("load",n),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=Qn._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function bA(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n),s=await wc(i,t,G(e));return new ld(s,r=>mc(i,r))}async function wA(n,t,e){const i=G(n);await pc(!1,i,"phone");const s=await wc(i.auth,t,G(e));return new ld(s,r=>Vy(i,r))}async function EA(n,t,e){const i=G(n);if(At(i.auth.app))return Promise.reject(Wt(i.auth));const s=await wc(i.auth,t,G(e));return new ld(s,r=>gc(i,r))}async function wc(n,t,e){var i;if(!n._getRecaptchaConfig())try{await xy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof t=="string"?s={phoneNumber:t}:s=t,"session"in s){const r=s.session;if("phoneNumber"in s){U(r.type==="enroll",n,"internal-error");const o={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Xn(n,o,"mfaSmsEnrollment",async(d,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===br){U((e==null?void 0:e.type)===Er,d,"argument-error");const f=await xl(d,h,e);return Zf(d,f)}return Zf(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{U(r.type==="signin",n,"internal-error");const o=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;U(o,n,"missing-multi-factor-info");const a={mfaPendingCredential:r.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Xn(n,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===br){U((e==null?void 0:e.type)===Er,h,"argument-error");const m=await xl(h,f,e);return np(h,m)}return np(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const r={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Xn(n,r,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===br){U((e==null?void 0:e.type)===Er,l,"argument-error");const h=await xl(l,d,e);return Qf(l,h)}return Qf(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{e==null||e._reset()}}async function IA(n,t){const e=G(n);if(At(e.auth.app))return Promise.reject(Wt(e.auth));await Zu(e,t)}async function xl(n,t,e){U(e.type===Er,n,"argument-error");const i=await e.verify();U(typeof i=="string",n,"argument-error");const s=Object.assign({},t);if("phoneEnrollmentInfo"in s){const r=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,c=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:r,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:c}}),s}else if("phoneSignInInfo"in s){const r=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:r,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.providerId=Ri.PROVIDER_ID,this.auth=Mt(t)}verifyPhoneNumber(t,e){return wc(this.auth,t,G(e))}static credential(t,e){return Qn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ri.credentialFromTaggedObject(e)}static credentialFromError(t){return Ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:i}=t;return e&&i?Qn._fromTokenResponse(e,i):null}}Ri.PROVIDER_ID="phone";Ri.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function qi(n,t){return t?bn(t):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ud extends Cs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return An(t,this._buildIdpRequest())}_linkToIdToken(t,e){return An(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return An(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function TA(n){return Ly(n.auth,new ud(n),n.bypassAuthState)}function AA(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Ny(e,new ud(n),n.bypassAuthState)}async function SA(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Zu(e,new ud(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return TA;case"linkViaPopup":case"linkViaRedirect":return SA;case"reauthViaPopup":case"reauthViaRedirect":return AA;default:we(this.auth,"internal-error")}}resolve(t){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=new no(2e3,1e4);async function PA(n,t,e){if(At(n.app))return Promise.reject(pe(n,"operation-not-supported-in-this-environment"));const i=Mt(n);ks(n,t,Ln);const s=qi(i,e);return new wn(i,"signInViaPopup",t,s).executeNotNull()}async function kA(n,t,e){const i=G(n);if(At(i.auth.app))return Promise.reject(pe(i.auth,"operation-not-supported-in-this-environment"));ks(i.auth,t,Ln);const s=qi(i.auth,e);return new wn(i.auth,"reauthViaPopup",t,s,i).executeNotNull()}async function CA(n,t,e){const i=G(n);ks(i.auth,t,Ln);const s=qi(i.auth,e);return new wn(i.auth,"linkViaPopup",t,s,i).executeNotNull()}class wn extends rv{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const t=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xA.get())};t()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="pendingRedirect",ha=new Map;class DA extends rv{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=ha.get(this.auth._key());if(!t){try{const i=await MA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}ha.set(this.auth._key(),t)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MA(n,t){const e=av(t),i=ov(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}async function dd(n,t){return ov(n)._set(av(t),"true")}function OA(n,t){ha.set(n._key(),t)}function ov(n){return bn(n._redirectPersistence)}function av(n){return da(RA,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n,t,e){return LA(n,t,e)}async function LA(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n);ks(n,t,Ln),await i._initializationPromise;const s=qi(i,e);return await dd(s,i),s._openRedirect(i,t,"signInViaRedirect")}function VA(n,t,e){return FA(n,t,e)}async function FA(n,t,e){const i=G(n);if(ks(i.auth,t,Ln),At(i.auth.app))return Promise.reject(Wt(i.auth));await i.auth._initializationPromise;const s=qi(i.auth,e);await dd(s,i.auth);const r=await lv(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",r)}function BA(n,t,e){return UA(n,t,e)}async function UA(n,t,e){const i=G(n);ks(i.auth,t,Ln),await i.auth._initializationPromise;const s=qi(i.auth,e);await pc(!1,i,t.providerId),await dd(s,i.auth);const r=await lv(i);return s._openRedirect(i.auth,t,"linkViaRedirect",r)}async function $A(n,t){return await Mt(n)._initializationPromise,cv(n,t,!1)}async function cv(n,t,e=!1){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n),s=qi(i,t),o=await new DA(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function lv(n){const t=_c(`${n.uid}:::`);return n._redirectEventId=t,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=600*1e3;class jA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!HA(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!uv(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(pe(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=zA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ip(t))}saveEventToCache(t){this.cachedEventUids.add(ip(t)),this.lastProcessedEventTime=Date.now()}}function ip(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function uv({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function HA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(n,t={}){return Et(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GA=/^https?/;async function KA(n){if(n.config.emulator)return;const{authorizedDomains:t}=await qA(n);for(const e of t)try{if(YA(e))return}catch{}we(n,"unauthorized-domain")}function YA(n){const t=Nr(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!GA.test(e))return!1;if(WA.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const XA=new no(3e4,6e4);function sp(){const n=Ft().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function QA(n){return new Promise((t,e)=>{var i,s,r;function o(){sp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{sp(),e(pe(n,"network-request-failed"))},timeout:XA.get()})}if(!((s=(i=Ft().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=Ft().gapi)===null||r===void 0)&&r.load)o();else{const a=Ay("iframefcb");return Ft()[a]=()=>{gapi.load?o():e(pe(n,"network-request-failed"))},Ju(`${BT()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw fa=null,t})}let fa=null;function JA(n){return fa=fa||QA(n),fa}/**
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
 */const ZA=new no(5e3,15e3),tS="__/auth/iframe",eS="emulator/auth/iframe",nS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sS(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Xu(t,eS):`https://${n.config.authDomain}/${tS}`,i={apiKey:t.apiKey,appName:n.name,v:Ps},s=iS.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${xs(i).slice(1)}`}async function rS(n){const t=await JA(n),e=Ft().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:sS(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=pe(n,"network-request-failed"),a=Ft().setTimeout(()=>{r(o)},ZA.get());function c(){Ft().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const oS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aS=500,cS=600,lS="_blank",uS="http://localhost";class rp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dS(n,t,e,i=aS,s=cS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oS),{width:i.toString(),height:s.toString(),top:r,left:o}),l=le().toLowerCase();e&&(a=vy(l)?lS:e),gy(l)&&(t=t||uS,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(kT(l)&&a!=="_self")return hS(t||"",a),new rp(null);const h=window.open(t||"",a,d);U(h,n,"popup-blocked");try{h.focus()}catch{}return new rp(h)}function hS(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const fS="__/auth/handler",pS="emulator/auth/handler",mS=encodeURIComponent("fac");async function op(n,t,e,i,s,r){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:Ps,eventId:s};if(t instanceof Ln){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",WE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof Ds){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${mS}=${encodeURIComponent(c)}`:"";return`${gS(n)}?${xs(a).slice(1)}${l}`}function gS({config:n}){return n.emulator?Xu(n,pS):`https://${n.authDomain}/${fS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class yS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ad,this._completeRedirectFn=cv,this._overrideRedirectResult=OA}async _openPopup(t,e,i,s){var r;Cn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await op(t,e,i,Nr(),s);return dS(t,o,_c())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await op(t,e,i,Nr(),s);return nA(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(Cn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await rS(t),i=new jA(t);return e.register("authEvent",s=>(U(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Pl,{type:Pl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Pl];o!==void 0&&e(!!o),we(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=KA(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Iy()||yy()||Qu()}}const dv=yS;class hv{constructor(t){this.factorId=t}_process(t,e,i){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,i);case"signin":return this._finalizeSignIn(t,e.credential);default:return Ye("unexpected MultiFactorSessionType")}}}class hd extends hv{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new hd(t)}_finalizeEnroll(t,e,i){return q0(t,{idToken:e,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return dA(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fv{constructor(){}static assertion(t){return hd._fromCredential(t)}}fv.FACTOR_ID="phone";class pv{static assertionForEnrollment(t,e){return Fr._fromSecret(t,e)}static assertionForSignIn(t,e){return Fr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const i=t;U(typeof((e=i.user)===null||e===void 0?void 0:e.auth)<"u","internal-error");const s=await W0(i.user.auth,{idToken:i.credential,totpEnrollmentInfo:{}});return Ec._fromStartTotpMfaEnrollmentResponse(s,i.user.auth)}}pv.FACTOR_ID="totp";class Fr extends hv{constructor(t,e,i){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=i}static _fromSecret(t,e){return new Fr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Fr(e,t)}async _finalizeEnroll(t,e,i){return U(typeof this.secret<"u",t,"argument-error"),G0(t,{idToken:e,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){U(this.enrollmentId!==void 0&&this.otp!==void 0,t,"argument-error");const i={verificationCode:this.otp};return hA(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}}class Ec{constructor(t,e,i,s,r,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=i,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Ec(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var i;let s=!1;return(zo(t)||zo(e))&&(s=!0),s&&(zo(t)&&(t=((i=this.auth.currentUser)===null||i===void 0?void 0:i.email)||"unknownuser"),zo(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function zo(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var ap="@firebase/auth",cp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bS(n){gs(new Bi("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ty(n)},l=new NT(i,s,r,c);return KT(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),gs(new Bi("auth-internal",t=>{const e=Mt(t.getProvider("auth").getImmediate());return(i=>new vS(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(ap,cp,_S(n)),Yn(ap,cp,"esm2017")}/**
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
 */const wS=300,ES=Yg("authIdTokenMaxAge")||wS;let lp=null;const IS=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>ES)return;const s=e==null?void 0:e.token;lp!==s&&(lp=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mv(n=ey()){const t=qu(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Py(n,{popupRedirectResolver:dv,persistence:[sv,od,ad]}),i=Yg("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=IS(r.toString());Gy(e,o,()=>o(e.currentUser)),Wy(e,a=>o(a))}}const s=Gg("auth");return s&&ky(e,`http://${s}`),e}function TS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}LT({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=pe("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",TS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bS("Browser");const AS=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:cT,ActionCodeURL:Rs,AuthCredential:Cs,AuthErrorCodes:dT,EmailAuthCredential:ys,EmailAuthProvider:rn,FacebookAuthProvider:gn,FactorId:sT,GithubAuthProvider:vn,GoogleAuthProvider:yn,OAuthCredential:en,OAuthProvider:wr,OperationType:aT,PhoneAuthCredential:Qn,PhoneAuthProvider:Ri,PhoneMultiFactorGenerator:fv,ProviderId:rT,RecaptchaVerifier:vA,SAMLAuthProvider:Ba,SignInMethod:oT,TotpMultiFactorGenerator:pv,TotpSecret:Ec,TwitterAuthProvider:_n,applyActionCode:E0,beforeAuthStateChanged:Gy,browserCookiePersistence:Z0,browserLocalPersistence:od,browserPopupRedirectResolver:dv,browserSessionPersistence:ad,checkActionCode:By,confirmPasswordReset:w0,connectAuthEmulator:ky,createUserWithEmailAndPassword:Uy,debugErrorMap:uT,deleteUser:Xy,fetchSignInMethodsForEmail:P0,getAdditionalUserInfo:F0,getAuth:mv,getIdToken:IT,getIdTokenResult:hy,getMultiFactorResolver:H0,getRedirectResult:$A,inMemoryPersistence:iu,indexedDBLocalPersistence:sv,initializeAuth:Py,initializeRecaptchaConfig:B0,isSignInWithEmailLink:A0,linkWithCredential:Vy,linkWithPhoneNumber:wA,linkWithPopup:CA,linkWithRedirect:BA,multiFactor:Y0,onAuthStateChanged:Ky,onIdTokenChanged:Wy,parseActionCodeURL:p0,prodErrorMap:ry,reauthenticateWithCredential:gc,reauthenticateWithPhoneNumber:EA,reauthenticateWithPopup:kA,reauthenticateWithRedirect:VA,reload:fy,revokeAccessToken:j0,sendEmailVerification:k0,sendPasswordResetEmail:Fy,sendSignInLinkToEmail:T0,setPersistence:qy,signInAnonymously:y0,signInWithCredential:mc,signInWithCustomToken:b0,signInWithEmailAndPassword:$y,signInWithEmailLink:S0,signInWithPhoneNumber:bA,signInWithPopup:PA,signInWithRedirect:NA,signOut:Yy,unlink:v0,updateCurrentUser:z0,updateEmail:D0,updatePassword:zy,updatePhoneNumber:IA,updateProfile:id,useDeviceLanguage:$0,validatePassword:U0,verifyBeforeUpdateEmail:C0,verifyPasswordResetCode:I0},Symbol.toStringTag,{value:"Module"}));var SS="firebase",xS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(SS,xS,"app");var up=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,gv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,b){function E(){}E.prototype=b.prototype,T.D=b.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(S,x,P){for(var A=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)A[ot-2]=arguments[ot];return b.prototype[x].apply(S,A)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,b,E){E||(E=0);var S=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)S[x]=b.charCodeAt(E++)|b.charCodeAt(E++)<<8|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<24;else for(x=0;16>x;++x)S[x]=b[E++]|b[E++]<<8|b[E++]<<16|b[E++]<<24;b=T.g[0],E=T.g[1],x=T.g[2];var P=T.g[3],A=b+(P^E&(x^P))+S[0]+3614090360&4294967295;b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[1]+3905402710&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[2]+606105819&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[3]+3250441966&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[4]+4118548399&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[5]+1200080426&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[6]+2821735955&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[7]+4249261313&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[8]+1770035416&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[9]+2336552879&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[10]+4294925233&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[11]+2304563134&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[12]+1804603682&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[13]+4254626195&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[14]+2792965006&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[15]+1236535329&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(x^P&(E^x))+S[1]+4129170786&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[6]+3225465664&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[11]+643717713&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[0]+3921069994&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[5]+3593408605&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[10]+38016083&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[15]+3634488961&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[4]+3889429448&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[9]+568446438&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[14]+3275163606&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[3]+4107603335&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[8]+1163531501&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[13]+2850285829&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[2]+4243563512&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[7]+1735328473&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[12]+2368359562&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(E^x^P)+S[5]+4294588738&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[8]+2272392833&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[11]+1839030562&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[14]+4259657740&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[1]+2763975236&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[4]+1272893353&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[7]+4139469664&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[10]+3200236656&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[13]+681279174&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[0]+3936430074&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[3]+3572445317&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[6]+76029189&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[9]+3654602809&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[12]+3873151461&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[15]+530742520&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[2]+3299628645&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(x^(E|~P))+S[0]+4096336452&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[7]+1126891415&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[14]+2878612391&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[5]+4237533241&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[12]+1700485571&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[3]+2399980690&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[10]+4293915773&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[1]+2240044497&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[8]+1873313359&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[15]+4264355552&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[6]+2734768916&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[13]+1309151649&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[4]+4149444226&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[11]+3174756917&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[2]+718787259&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+b&4294967295,T.g[1]=T.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+P&4294967295}i.prototype.u=function(T,b){b===void 0&&(b=T.length);for(var E=b-this.blockSize,S=this.B,x=this.h,P=0;P<b;){if(x==0)for(;P<=E;)s(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<b;)if(S[x++]=T.charCodeAt(P++),x==this.blockSize){s(this,S),x=0;break}}else for(;P<b;)if(S[x++]=T[P++],x==this.blockSize){s(this,S),x=0;break}}this.h=x,this.o+=b},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var b=1;b<T.length-8;++b)T[b]=0;var E=8*this.o;for(b=T.length-8;b<T.length;++b)T[b]=E&255,E/=256;for(this.u(T),T=Array(16),b=E=0;4>b;++b)for(var S=0;32>S;S+=8)T[E++]=this.g[b]>>>S&255;return T};function r(T,b){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=b(T)}function o(T,b){this.h=b;for(var E=[],S=!0,x=T.length-1;0<=x;x--){var P=T[x]|0;S&&P==b||(E[x]=P,S=!1)}this.g=E}var a={};function c(T){return-128<=T&&128>T?r(T,function(b){return new o([b|0],0>b?-1:0)}):new o([T|0],0>T?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return v(l(-T));for(var b=[],E=1,S=0;T>=E;S++)b[S]=T/E|0,E*=4294967296;return new o(b,0)}function d(T,b){if(T.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T.charAt(0)=="-")return v(d(T.substring(1),b));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=l(Math.pow(b,8)),S=h,x=0;x<T.length;x+=8){var P=Math.min(8,T.length-x),A=parseInt(T.substring(x,x+P),b);8>P?(P=l(Math.pow(b,P)),S=S.j(P).add(l(A))):(S=S.j(E),S=S.add(l(A)))}return S}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(_(this))return-v(this).m();for(var T=0,b=1,E=0;E<this.g.length;E++){var S=this.i(E);T+=(0<=S?S:4294967296+S)*b,b*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(_(this))return"-"+v(this).toString(T);for(var b=l(Math.pow(T,6)),E=this,S="";;){var x=M(E,b).g;E=I(E,x.j(b));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=x,y(E))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var b=0;b<T.g.length;b++)if(T.g[b]!=0)return!1;return!0}function _(T){return T.h==-1}n.l=function(T){return T=I(this,T),_(T)?-1:y(T)?0:1};function v(T){for(var b=T.g.length,E=[],S=0;S<b;S++)E[S]=~T.g[S];return new o(E,~T.h).add(f)}n.abs=function(){return _(this)?v(this):this},n.add=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0,x=0;x<=b;x++){var P=S+(this.i(x)&65535)+(T.i(x)&65535),A=(P>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);S=A>>>16,P&=65535,A&=65535,E[x]=A<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(T,b){return T.add(v(b))}n.j=function(T){if(y(this)||y(T))return h;if(_(this))return _(T)?v(this).j(v(T)):v(v(this).j(T));if(_(T))return v(this.j(v(T)));if(0>this.l(m)&&0>T.l(m))return l(this.m()*T.m());for(var b=this.g.length+T.g.length,E=[],S=0;S<2*b;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var x=0;x<T.g.length;x++){var P=this.i(S)>>>16,A=this.i(S)&65535,ot=T.i(x)>>>16,et=T.i(x)&65535;E[2*S+2*x]+=A*et,k(E,2*S+2*x),E[2*S+2*x+1]+=P*et,k(E,2*S+2*x+1),E[2*S+2*x+1]+=A*ot,k(E,2*S+2*x+1),E[2*S+2*x+2]+=P*ot,k(E,2*S+2*x+2)}for(S=0;S<b;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=b;S<2*b;S++)E[S]=0;return new o(E,0)};function k(T,b){for(;(T[b]&65535)!=T[b];)T[b+1]+=T[b]>>>16,T[b]&=65535,b++}function D(T,b){this.g=T,this.h=b}function M(T,b){if(y(b))throw Error("division by zero");if(y(T))return new D(h,h);if(_(T))return b=M(v(T),b),new D(v(b.g),v(b.h));if(_(b))return b=M(T,v(b)),new D(v(b.g),b.h);if(30<T.g.length){if(_(T)||_(b))throw Error("slowDivide_ only works with positive integers.");for(var E=f,S=b;0>=S.l(T);)E=N(E),S=N(S);var x=F(E,1),P=F(S,1);for(S=F(S,2),E=F(E,2);!y(S);){var A=P.add(S);0>=A.l(T)&&(x=x.add(E),P=A),S=F(S,1),E=F(E,1)}return b=I(T,x.j(b)),new D(x,b)}for(x=h;0<=T.l(b);){for(E=Math.max(1,Math.floor(T.m()/b.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=l(E),A=P.j(b);_(A)||0<A.l(T);)E-=S,P=l(E),A=P.j(b);y(P)&&(P=f),x=x.add(P),T=I(T,A)}return new D(x,T)}n.A=function(T){return M(this,T).h},n.and=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)&T.i(S);return new o(E,this.h&T.h)},n.or=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)|T.i(S);return new o(E,this.h|T.h)},n.xor=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)^T.i(S);return new o(E,this.h^T.h)};function N(T){for(var b=T.g.length+1,E=[],S=0;S<b;S++)E[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(E,T.h)}function F(T,b){var E=b>>5;b%=32;for(var S=T.g.length-E,x=[],P=0;P<S;P++)x[P]=0<b?T.i(P+E)>>>b|T.i(P+E+1)<<32-b:T.i(P+E);return new o(x,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,gv=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Jn=o}).apply(typeof up<"u"?up:typeof self<"u"?self:typeof window<"u"?window:{});var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yv,ar,vv,pa,ru,_v,bv,wv;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,g){return u==Array.prototype||u==Object.prototype||(u[p]=g.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var p=0;p<u.length;++p){var g=u[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var i=e(this);function s(u,p){if(p)t:{var g=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var R=u[w];if(!(R in g))break t;g=g[R]}u=u[u.length-1],w=g[u],p=p(w),p!=w&&p!=null&&t(g,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var g=0,w=!1,R={next:function(){if(!w&&g<u.length){var O=g++;return{value:p(O,u[O]),done:!1}}return w=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(u){return u||function(){return r(this,function(p,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,g){return u.call.apply(u.bind,arguments)}function h(u,p,g){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,w),u.apply(p,R)}}return function(){return u.apply(p,arguments)}}function f(u,p,g){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function y(u,p){function g(){}g.prototype=p.prototype,u.aa=p.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(w,R,O){for(var $=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)$[pt-2]=arguments[pt];return p.prototype[R].apply(w,$)}}function _(u){const p=u.length;if(0<p){const g=Array(p);for(let w=0;w<p;w++)g[w]=u[w];return g}return[]}function v(u,p){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(c(w)){const R=u.length||0,O=w.length||0;u.length=R+O;for(let $=0;$<O;$++)u[R+$]=w[$]}else u.push(w)}}class I{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function k(u){return/^[\s\xa0]*$/.test(u)}function D(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function M(u){return M[" "](u),u}M[" "]=function(){};var N=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function F(u,p,g){for(const w in u)p.call(g,u[w],w,u)}function T(u,p){for(const g in u)p.call(void 0,u[g],g,u)}function b(u){const p={};for(const g in u)p[g]=u[g];return p}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(u,p){let g,w;for(let R=1;R<arguments.length;R++){w=arguments[R];for(g in w)u[g]=w[g];for(let O=0;O<E.length;O++)g=E[O],Object.prototype.hasOwnProperty.call(w,g)&&(u[g]=w[g])}}function x(u){var p=1;u=u.split(":");const g=[];for(;0<p&&u.length;)g.push(u.shift()),p--;return u.length&&g.push(u.join(":")),g}function P(u){a.setTimeout(()=>{throw u},0)}function A(){var u=Lt;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ot{constructor(){this.h=this.g=null}add(p,g){const w=et.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var et=new I(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,Gt=!1,Lt=new ot,on=()=>{const u=a.Promise.resolve(void 0);ft=()=>{u.then(Yi)}};var Yi=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(g){P(g)}var p=et;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Gt=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xt(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var an=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};a.addEventListener("test",g,p),a.removeEventListener("test",g,p)}catch{}return u})();function De(u,p){if(xt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(N){t:{try{M(p.nodeName);var R=!0;break t}catch{}R=!1}R||(p=null)}}else g=="mouseover"?p=u.fromElement:g=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:cn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&De.aa.h.call(this)}}y(De,xt);var cn={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Eo="closure_listenable_"+(1e6*Math.random()|0),zw=0;function jw(u,p,g,w,R){this.listener=u,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=R,this.key=++zw,this.da=this.fa=!1}function Io(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function To(u){this.src=u,this.g={},this.h=0}To.prototype.add=function(u,p,g,w,R){var O=u.toString();u=this.g[O],u||(u=this.g[O]=[],this.h++);var $=Yc(u,p,w,R);return-1<$?(p=u[$],g||(p.fa=!1)):(p=new jw(p,this.src,O,!!w,R),p.fa=g,u.push(p)),p};function Kc(u,p){var g=p.type;if(g in u.g){var w=u.g[g],R=Array.prototype.indexOf.call(w,p,void 0),O;(O=0<=R)&&Array.prototype.splice.call(w,R,1),O&&(Io(p),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Yc(u,p,g,w){for(var R=0;R<u.length;++R){var O=u[R];if(!O.da&&O.listener==p&&O.capture==!!g&&O.ha==w)return R}return-1}var Xc="closure_lm_"+(1e6*Math.random()|0),Qc={};function Dh(u,p,g,w,R){if(Array.isArray(p)){for(var O=0;O<p.length;O++)Dh(u,p[O],g,w,R);return null}return g=Nh(g),u&&u[Eo]?u.K(p,g,l(w)?!!w.capture:!1,R):Hw(u,p,g,!1,w,R)}function Hw(u,p,g,w,R,O){if(!p)throw Error("Invalid event type");var $=l(R)?!!R.capture:!!R,pt=Zc(u);if(pt||(u[Xc]=pt=new To(u)),g=pt.add(p,g,w,$,O),g.proxy)return g;if(w=qw(),g.proxy=w,w.src=u,w.listener=g,u.addEventListener)an||(R=$),R===void 0&&(R=!1),u.addEventListener(p.toString(),w,R);else if(u.attachEvent)u.attachEvent(Oh(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function qw(){function u(g){return p.call(u.src,u.listener,g)}const p=Ww;return u}function Mh(u,p,g,w,R){if(Array.isArray(p))for(var O=0;O<p.length;O++)Mh(u,p[O],g,w,R);else w=l(w)?!!w.capture:!!w,g=Nh(g),u&&u[Eo]?(u=u.i,p=String(p).toString(),p in u.g&&(O=u.g[p],g=Yc(O,g,w,R),-1<g&&(Io(O[g]),Array.prototype.splice.call(O,g,1),O.length==0&&(delete u.g[p],u.h--)))):u&&(u=Zc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Yc(p,g,w,R)),(g=-1<u?p[u]:null)&&Jc(g))}function Jc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Eo])Kc(p.i,u);else{var g=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(g,w,u.capture):p.detachEvent?p.detachEvent(Oh(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=Zc(p))?(Kc(g,u),g.h==0&&(g.src=null,p[Xc]=null)):Io(u)}}}function Oh(u){return u in Qc?Qc[u]:Qc[u]="on"+u}function Ww(u,p){if(u.da)u=!0;else{p=new De(p,this);var g=u.listener,w=u.ha||u.src;u.fa&&Jc(u),u=g.call(w,p)}return u}function Zc(u){return u=u[Xc],u instanceof To?u:null}var tl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nh(u){return typeof u=="function"?u:(u[tl]||(u[tl]=function(p){return u.handleEvent(p)}),u[tl])}function Zt(){de.call(this),this.i=new To(this),this.M=this,this.F=null}y(Zt,de),Zt.prototype[Eo]=!0,Zt.prototype.removeEventListener=function(u,p,g,w){Mh(this,u,p,g,w)};function he(u,p){var g,w=u.F;if(w)for(g=[];w;w=w.F)g.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new xt(p,u);else if(p instanceof xt)p.target=p.target||u;else{var R=p;p=new xt(w,u),S(p,R)}if(R=!0,g)for(var O=g.length-1;0<=O;O--){var $=p.g=g[O];R=Ao($,w,!0,p)&&R}if($=p.g=u,R=Ao($,w,!0,p)&&R,R=Ao($,w,!1,p)&&R,g)for(O=0;O<g.length;O++)$=p.g=g[O],R=Ao($,w,!1,p)&&R}Zt.prototype.N=function(){if(Zt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var g=u.g[p],w=0;w<g.length;w++)Io(g[w]);delete u.g[p],u.h--}}this.F=null},Zt.prototype.K=function(u,p,g,w){return this.i.add(String(u),p,!1,g,w)},Zt.prototype.L=function(u,p,g,w){return this.i.add(String(u),p,!0,g,w)};function Ao(u,p,g,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var R=!0,O=0;O<p.length;++O){var $=p[O];if($&&!$.da&&$.capture==g){var pt=$.listener,Kt=$.ha||$.src;$.fa&&Kc(u.i,$),R=pt.call(Kt,w)!==!1&&R}}return R&&!w.defaultPrevented}function Lh(u,p,g){if(typeof u=="function")g&&(u=f(u,g));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Vh(u){u.g=Lh(()=>{u.g=null,u.i&&(u.i=!1,Vh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Gw extends de{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bs(u){de.call(this),this.h=u,this.g={}}y(Bs,de);var Fh=[];function Bh(u){F(u.g,function(p,g){this.g.hasOwnProperty(g)&&Jc(p)},u),u.g={}}Bs.prototype.N=function(){Bs.aa.N.call(this),Bh(this)},Bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var el=a.JSON.stringify,Kw=a.JSON.parse,Yw=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function nl(){}nl.prototype.h=null;function Uh(u){return u.h||(u.h=u.i())}function $h(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function il(){xt.call(this,"d")}y(il,xt);function sl(){xt.call(this,"c")}y(sl,xt);var yi={},zh=null;function So(){return zh=zh||new Zt}yi.La="serverreachability";function jh(u){xt.call(this,yi.La,u)}y(jh,xt);function $s(u){const p=So();he(p,new jh(p))}yi.STAT_EVENT="statevent";function Hh(u,p){xt.call(this,yi.STAT_EVENT,u),this.stat=p}y(Hh,xt);function fe(u){const p=So();he(p,new Hh(p,u))}yi.Ma="timingevent";function qh(u,p){xt.call(this,yi.Ma,u),this.size=p}y(qh,xt);function zs(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function js(){this.g=!0}js.prototype.xa=function(){this.g=!1};function Xw(u,p,g,w,R,O){u.info(function(){if(u.g)if(O)for(var $="",pt=O.split("&"),Kt=0;Kt<pt.length;Kt++){var ct=pt[Kt].split("=");if(1<ct.length){var te=ct[0];ct=ct[1];var ee=te.split("_");$=2<=ee.length&&ee[1]=="type"?$+(te+"="+ct+"&"):$+(te+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+w+") [attempt "+R+"]: "+p+`
`+g+`
`+$})}function Qw(u,p,g,w,R,O,$){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+R+"]: "+p+`
`+g+`
`+O+" "+$})}function Xi(u,p,g,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Zw(u,g)+(w?" "+w:"")})}function Jw(u,p){u.info(function(){return"TIMEOUT: "+p})}js.prototype.info=function(){};function Zw(u,p){if(!u.g)return p;if(!p)return null;try{var g=JSON.parse(p);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var w=g[u];if(!(2>w.length)){var R=w[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return el(g)}catch{return p}}var xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rl;function Po(){}y(Po,nl),Po.prototype.g=function(){return new XMLHttpRequest},Po.prototype.i=function(){return{}},rl=new Po;function Vn(u,p,g,w){this.j=u,this.i=p,this.l=g,this.R=w||1,this.U=new Bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gh}function Gh(){this.i=null,this.g="",this.h=!1}var Kh={},ol={};function al(u,p,g){u.L=1,u.v=Do(ln(p)),u.m=g,u.P=!0,Yh(u,null)}function Yh(u,p){u.F=Date.now(),ko(u),u.A=ln(u.v);var g=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),uf(g.i,"t",w),u.C=0,g=u.j.J,u.h=new Gh,u.g=Pf(u.j,g?p:null,!u.m),0<u.O&&(u.M=new Gw(f(u.Y,u,u.g),u.O)),p=u.U,g=u.g,w=u.ca;var R="readystatechange";Array.isArray(R)||(R&&(Fh[0]=R.toString()),R=Fh);for(var O=0;O<R.length;O++){var $=Dh(g,R[O],w||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),$s(),Xw(u.i,u.u,u.A,u.l,u.R,u.m)}Vn.prototype.ca=function(u){u=u.target;const p=this.M;p&&un(u)==3?p.j():this.Y(u)},Vn.prototype.Y=function(u){try{if(u==this.g)t:{const ee=un(this.g);var p=this.g.Ba();const Zi=this.g.Z();if(!(3>ee)&&(ee!=3||this.g&&(this.h.h||this.g.oa()||yf(this.g)))){this.J||ee!=4||p==7||(p==8||0>=Zi?$s(3):$s(2)),cl(this);var g=this.g.Z();this.X=g;e:if(Xh(this)){var w=yf(this.g);u="";var R=w.length,O=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vi(this),Hs(this);var $="";break e}this.h.i=new a.TextDecoder}for(p=0;p<R;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(O&&p==R-1)});w.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=g==200,Qw(this.i,this.u,this.A,this.l,this.R,ee,g),this.o){if(this.T&&!this.K){e:{if(this.g){var pt,Kt=this.g;if((pt=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(pt)){var ct=pt;break e}}ct=null}if(g=ct)Xi(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ll(this,g);else{this.o=!1,this.s=3,fe(12),vi(this),Hs(this);break t}}if(this.P){g=!0;let Me;for(;!this.J&&this.C<$.length;)if(Me=tE(this,$),Me==ol){ee==4&&(this.s=4,fe(14),g=!1),Xi(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==Kh){this.s=4,fe(15),Xi(this.i,this.l,$,"[Invalid Chunk]"),g=!1;break}else Xi(this.i,this.l,Me,null),ll(this,Me);if(Xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||$.length!=0||this.h.h||(this.s=1,fe(16),g=!1),this.o=this.o&&g,!g)Xi(this.i,this.l,$,"[Invalid Chunked Response]"),vi(this),Hs(this);else if(0<$.length&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.ba&&!te.M&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),ml(te),te.M=!0,fe(11))}}else Xi(this.i,this.l,$,null),ll(this,$);ee==4&&vi(this),this.o&&!this.J&&(ee==4?Tf(this.j,this):(this.o=!1,ko(this)))}else yE(this.g),g==400&&0<$.indexOf("Unknown SID")?(this.s=3,fe(12)):(this.s=0,fe(13)),vi(this),Hs(this)}}}catch{}finally{}};function Xh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function tE(u,p){var g=u.C,w=p.indexOf(`
`,g);return w==-1?ol:(g=Number(p.substring(g,w)),isNaN(g)?Kh:(w+=1,w+g>p.length?ol:(p=p.slice(w,w+g),u.C=w+g,p)))}Vn.prototype.cancel=function(){this.J=!0,vi(this)};function ko(u){u.S=Date.now()+u.I,Qh(u,u.I)}function Qh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=zs(f(u.ba,u),p)}function cl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Vn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Jw(this.i,this.A),this.L!=2&&($s(),fe(17)),vi(this),this.s=2,Hs(this)):Qh(this,this.S-u)};function Hs(u){u.j.G==0||u.J||Tf(u.j,u)}function vi(u){cl(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Bh(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ll(u,p){try{var g=u.j;if(g.G!=0&&(g.g==u||ul(g.h,u))){if(!u.K&&ul(g.h,u)&&g.G==3){try{var w=g.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var R=w;if(R[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)Fo(g),Lo(g);else break t;pl(g),fe(18)}}else g.za=R[1],0<g.za-g.T&&37500>R[2]&&g.F&&g.v==0&&!g.C&&(g.C=zs(f(g.Za,g),6e3));if(1>=tf(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else bi(g,11)}else if((u.K||g.g==u)&&Fo(g),!k(p))for(R=g.Da.g.parse(p),p=0;p<R.length;p++){let ct=R[p];if(g.T=ct[0],ct=ct[1],g.G==2)if(ct[0]=="c"){g.K=ct[1],g.ia=ct[2];const te=ct[3];te!=null&&(g.la=te,g.j.info("VER="+g.la));const ee=ct[4];ee!=null&&(g.Aa=ee,g.j.info("SVER="+g.Aa));const Zi=ct[5];Zi!=null&&typeof Zi=="number"&&0<Zi&&(w=1.5*Zi,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Me=u.g;if(Me){const Uo=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uo){var O=w.h;O.g||Uo.indexOf("spdy")==-1&&Uo.indexOf("quic")==-1&&Uo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(dl(O,O.h),O.h=null))}if(w.D){const gl=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;gl&&(w.ya=gl,vt(w.I,w.D,gl))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var $=u;if(w.qa=xf(w,w.J?w.ia:null,w.W),$.K){ef(w.h,$);var pt=$,Kt=w.L;Kt&&(pt.I=Kt),pt.B&&(cl(pt),ko(pt)),w.g=$}else Ef(w);0<g.i.length&&Vo(g)}else ct[0]!="stop"&&ct[0]!="close"||bi(g,7);else g.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?bi(g,7):fl(g):ct[0]!="noop"&&g.l&&g.l.ta(ct),g.v=0)}}$s(4)}catch{}}var eE=class{constructor(u,p){this.g=u,this.map=p}};function Jh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function tf(u){return u.h?1:u.g?u.g.size:0}function ul(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function dl(u,p){u.g?u.g.add(p):u.h=p}function ef(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Jh.prototype.cancel=function(){if(this.i=nf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function nf(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const g of u.g.values())p=p.concat(g.D);return p}return _(u.i)}function nE(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],g=u.length,w=0;w<g;w++)p.push(u[w]);return p}p=[],g=0;for(w in u)p[g++]=u[w];return p}function iE(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var g=0;g<u;g++)p.push(g);return p}p=[],g=0;for(const w in u)p[g++]=w;return p}}}function sf(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var g=iE(u),w=nE(u),R=w.length,O=0;O<R;O++)p.call(void 0,w[O],g&&g[O],u)}var rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sE(u,p){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var w=u[g].indexOf("="),R=null;if(0<=w){var O=u[g].substring(0,w);R=u[g].substring(w+1)}else O=u[g];p(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function _i(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _i){this.h=u.h,Co(this,u.j),this.o=u.o,this.g=u.g,Ro(this,u.s),this.l=u.l;var p=u.i,g=new Gs;g.i=p.i,p.g&&(g.g=new Map(p.g),g.h=p.h),of(this,g),this.m=u.m}else u&&(p=String(u).match(rf))?(this.h=!1,Co(this,p[1]||"",!0),this.o=qs(p[2]||""),this.g=qs(p[3]||"",!0),Ro(this,p[4]),this.l=qs(p[5]||"",!0),of(this,p[6]||"",!0),this.m=qs(p[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}_i.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Ws(p,af,!0),":");var g=this.g;return(g||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ws(p,af,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(Ws(g,g.charAt(0)=="/"?aE:oE,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",Ws(g,lE)),u.join("")};function ln(u){return new _i(u)}function Co(u,p,g){u.j=g?qs(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Ro(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function of(u,p,g){p instanceof Gs?(u.i=p,uE(u.i,u.h)):(g||(p=Ws(p,cE)),u.i=new Gs(p,u.h))}function vt(u,p,g){u.i.set(p,g)}function Do(u){return vt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function qs(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ws(u,p,g){return typeof u=="string"?(u=encodeURI(u).replace(p,rE),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function rE(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var af=/[#\/\?@]/g,oE=/[#\?:]/g,aE=/[#\?]/g,cE=/[#\?@]/g,lE=/#/g;function Gs(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Fn(u){u.g||(u.g=new Map,u.h=0,u.i&&sE(u.i,function(p,g){u.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}n=Gs.prototype,n.add=function(u,p){Fn(this),this.i=null,u=Qi(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(p),this.h+=1,this};function cf(u,p){Fn(u),p=Qi(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function lf(u,p){return Fn(u),p=Qi(u,p),u.g.has(p)}n.forEach=function(u,p){Fn(this),this.g.forEach(function(g,w){g.forEach(function(R){u.call(p,R,w,this)},this)},this)},n.na=function(){Fn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),g=[];for(let w=0;w<p.length;w++){const R=u[w];for(let O=0;O<R.length;O++)g.push(p[w])}return g},n.V=function(u){Fn(this);let p=[];if(typeof u=="string")lf(this,u)&&(p=p.concat(this.g.get(Qi(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)p=p.concat(u[g])}return p},n.set=function(u,p){return Fn(this),this.i=null,u=Qi(this,u),lf(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function uf(u,p,g){cf(u,p),0<g.length&&(u.i=null,u.g.set(Qi(u,p),_(g)),u.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var g=0;g<p.length;g++){var w=p[g];const O=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var R=O;$[w]!==""&&(R+="="+encodeURIComponent(String($[w]))),u.push(R)}}return this.i=u.join("&")};function Qi(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function uE(u,p){p&&!u.j&&(Fn(u),u.i=null,u.g.forEach(function(g,w){var R=w.toLowerCase();w!=R&&(cf(this,w),uf(this,R,g))},u)),u.j=p}function dE(u,p){const g=new js;if(a.Image){const w=new Image;w.onload=m(Bn,g,"TestLoadImage: loaded",!0,p,w),w.onerror=m(Bn,g,"TestLoadImage: error",!1,p,w),w.onabort=m(Bn,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=m(Bn,g,"TestLoadImage: timeout",!1,p,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function hE(u,p){const g=new js,w=new AbortController,R=setTimeout(()=>{w.abort(),Bn(g,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(O=>{clearTimeout(R),O.ok?Bn(g,"TestPingServer: ok",!0,p):Bn(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(R),Bn(g,"TestPingServer: error",!1,p)})}function Bn(u,p,g,w,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),w(g)}catch{}}function fE(){this.g=new Yw}function pE(u,p,g){const w=g||"";try{sf(u,function(R,O){let $=R;l(R)&&($=el(R)),p.push(w+O+"="+encodeURIComponent($))})}catch(R){throw p.push(w+"type="+encodeURIComponent("_badmap")),R}}function Mo(u){this.l=u.Ub||null,this.j=u.eb||!1}y(Mo,nl),Mo.prototype.g=function(){return new Oo(this.l,this.j)},Mo.prototype.i=(function(u){return function(){return u}})({});function Oo(u,p){Zt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Oo,Zt),n=Oo.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ys(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;df(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function df(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Ks(this):Ys(this),this.readyState==3&&df(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Ks(this))},n.Qa=function(u){this.g&&(this.response=u,Ks(this))},n.ga=function(){this.g&&Ks(this)};function Ks(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ys(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=p.next();return u.join(`\r
`)};function Ys(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function hf(u){let p="";return F(u,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function hl(u,p,g){t:{for(w in g){var w=!1;break t}w=!0}w||(g=hf(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):vt(u,p,g))}function Pt(u){Zt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Pt,Zt);var mE=/^https?$/i,gE=["POST","PUT"];n=Pt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rl.g(),this.v=this.o?Uh(this.o):Uh(rl),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(O){ff(this,O);return}if(u=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var R in w)g.set(R,w[R]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())g.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),R=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gE,p,void 0))||w||R||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of g)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gf(this),this.u=!0,this.g.send(u),this.u=!1}catch(O){ff(this,O)}};function ff(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,pf(u),No(u)}function pf(u){u.A||(u.A=!0,he(u,"complete"),he(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,he(this,"complete"),he(this,"abort"),No(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),Pt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mf(this):this.bb())},n.bb=function(){mf(this)};function mf(u){if(u.h&&typeof o<"u"&&(!u.v[1]||un(u)!=4||u.Z()!=2)){if(u.u&&un(u)==4)Lh(u.Ea,0,u);else if(he(u,"readystatechange"),un(u)==4){u.h=!1;try{const $=u.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var g;if(!(g=p)){var w;if(w=$===0){var R=String(u.D).match(rf)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),w=!mE.test(R?R.toLowerCase():"")}g=w}if(g)he(u,"complete"),he(u,"success");else{u.m=6;try{var O=2<un(u)?u.g.statusText:""}catch{O=""}u.l=O+" ["+u.Z()+"]",pf(u)}}finally{No(u)}}}}function No(u,p){if(u.g){gf(u);const g=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||he(u,"ready");try{g.onreadystatechange=w}catch{}}}function gf(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function un(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Kw(p)}};function yf(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function yE(u){const p={};u=(u.g&&2<=un(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(k(u[w]))continue;var g=x(u[w]);const R=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=p[R]||[];p[R]=O,O.push(g)}T(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(u,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||p}function vf(u){this.Aa=0,this.i=[],this.j=new js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,u),this.cb=Xs("retryDelaySeedMs",1e4,u),this.Wa=Xs("forwardChannelMaxRetries",2,u),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Jh(u&&u.concurrentRequestLimit),this.Da=new fE,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vf.prototype,n.la=8,n.G=1,n.connect=function(u,p,g,w){fe(0),this.W=u,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=xf(this,null,this.W),Vo(this)};function fl(u){if(_f(u),u.G==3){var p=u.U++,g=ln(u.I);if(vt(g,"SID",u.K),vt(g,"RID",p),vt(g,"TYPE","terminate"),Qs(u,g),p=new Vn(u,u.j,p),p.L=2,p.v=Do(ln(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=p.v,g=!0),g||(p.g=Pf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),ko(p)}Sf(u)}function Lo(u){u.g&&(ml(u),u.g.cancel(),u.g=null)}function _f(u){Lo(u),u.u&&(a.clearTimeout(u.u),u.u=null),Fo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Vo(u){if(!Zh(u.h)&&!u.s){u.s=!0;var p=u.Ga;ft||on(),Gt||(ft(),Gt=!0),Lt.add(p,u),u.B=0}}function vE(u,p){return tf(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=zs(f(u.Ga,u,p),Af(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const R=new Vn(this,this.j,u);let O=this.o;if(this.S&&(O?(O=b(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)t:{for(var p=0,g=0;g<this.i.length;g++){e:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=g;break t}if(p===4096||g===this.i.length-1){p=g+1;break t}}p=1e3}else p=1e3;p=wf(this,R,p),g=ln(this.I),vt(g,"RID",u),vt(g,"CVER",22),this.D&&vt(g,"X-HTTP-Session-Id",this.D),Qs(this,g),O&&(this.O?p="headers="+encodeURIComponent(String(hf(O)))+"&"+p:this.m&&hl(g,this.m,O)),dl(this.h,R),this.Ua&&vt(g,"TYPE","init"),this.P?(vt(g,"$req",p),vt(g,"SID","null"),R.T=!0,al(R,g,null)):al(R,g,p),this.G=2}}else this.G==3&&(u?bf(this,u):this.i.length==0||Zh(this.h)||bf(this))};function bf(u,p){var g;p?g=p.l:g=u.U++;const w=ln(u.I);vt(w,"SID",u.K),vt(w,"RID",g),vt(w,"AID",u.T),Qs(u,w),u.m&&u.o&&hl(w,u.m,u.o),g=new Vn(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),p&&(u.i=p.D.concat(u.i)),p=wf(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),dl(u.h,g),al(g,w,p)}function Qs(u,p){u.H&&F(u.H,function(g,w){vt(p,w,g)}),u.l&&sf({},function(g,w){vt(p,w,g)})}function wf(u,p,g){g=Math.min(u.i.length,g);var w=u.l?f(u.l.Na,u.l,u):null;t:{var R=u.i;let O=-1;for(;;){const $=["count="+g];O==-1?0<g?(O=R[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let pt=!0;for(let Kt=0;Kt<g;Kt++){let ct=R[Kt].g;const te=R[Kt].map;if(ct-=O,0>ct)O=Math.max(0,R[Kt].g-100),pt=!1;else try{pE(te,$,"req"+ct+"_")}catch{w&&w(te)}}if(pt){w=$.join("&");break t}}}return u=u.i.splice(0,g),p.D=u,w}function Ef(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ft||on(),Gt||(ft(),Gt=!0),Lt.add(p,u),u.v=0}}function pl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=zs(f(u.Fa,u),Af(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,If(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=zs(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,fe(10),Lo(this),If(this))};function ml(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function If(u){u.g=new Vn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=ln(u.qa);vt(p,"RID","rpc"),vt(p,"SID",u.K),vt(p,"AID",u.T),vt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&vt(p,"TO",u.ja),vt(p,"TYPE","xmlhttp"),Qs(u,p),u.m&&u.o&&hl(p,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Do(ln(p)),g.m=null,g.P=!0,Yh(g,u)}n.Za=function(){this.C!=null&&(this.C=null,Lo(this),pl(this),fe(19))};function Fo(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Tf(u,p){var g=null;if(u.g==p){Fo(u),ml(u),u.g=null;var w=2}else if(ul(u.h,p))g=p.D,ef(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){g=p.m?p.m.length:0,p=Date.now()-p.F;var R=u.B;w=So(),he(w,new qh(w,g)),Vo(u)}else Ef(u);else if(R=p.s,R==3||R==0&&0<p.X||!(w==1&&vE(u,p)||w==2&&pl(u)))switch(g&&0<g.length&&(p=u.h,p.i=p.i.concat(g)),R){case 1:bi(u,5);break;case 4:bi(u,10);break;case 3:bi(u,6);break;default:bi(u,2)}}}function Af(u,p){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*p}function bi(u,p){if(u.j.info("Error code "+p),p==2){var g=f(u.fb,u),w=u.Xa;const R=!w;w=new _i(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Co(w,"https"),Do(w),R?dE(w.toString(),g):hE(w.toString(),g)}else fe(2);u.G=0,u.l&&u.l.sa(p),Sf(u),_f(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),fe(2)):(this.j.info("Failed to ping google.com"),fe(1))};function Sf(u){if(u.G=0,u.ka=[],u.l){const p=nf(u.h);(p.length!=0||u.i.length!=0)&&(v(u.ka,p),v(u.ka,u.i),u.h.i.length=0,_(u.i),u.i.length=0),u.l.ra()}}function xf(u,p,g){var w=g instanceof _i?ln(g):new _i(g);if(w.g!="")p&&(w.g=p+"."+w.g),Ro(w,w.s);else{var R=a.location;w=R.protocol,p=p?p+"."+R.hostname:R.hostname,R=+R.port;var O=new _i(null);w&&Co(O,w),p&&(O.g=p),R&&Ro(O,R),g&&(O.l=g),w=O}return g=u.D,p=u.ya,g&&p&&vt(w,g,p),vt(w,"VER",u.la),Qs(u,w),w}function Pf(u,p,g){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Pt(new Mo({eb:g})):new Pt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kf(){}n=kf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Bo(){}Bo.prototype.g=function(u,p){return new Ie(u,p)};function Ie(u,p){Zt.call(this),this.g=new vf(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!k(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!k(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Ji(this)}y(Ie,Zt),Ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ie.prototype.close=function(){fl(this.g)},Ie.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=el(u),u=g);p.i.push(new eE(p.Ya++,u)),p.G==3&&Vo(p)},Ie.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,Ie.aa.N.call(this)};function Cf(u){il.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const g in p){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}y(Cf,il);function Rf(){sl.call(this),this.status=1}y(Rf,sl);function Ji(u){this.g=u}y(Ji,kf),Ji.prototype.ua=function(){he(this.g,"a")},Ji.prototype.ta=function(u){he(this.g,new Cf(u))},Ji.prototype.sa=function(u){he(this.g,new Rf)},Ji.prototype.ra=function(){he(this.g,"b")},Bo.prototype.createWebChannel=Bo.prototype.g,Ie.prototype.send=Ie.prototype.o,Ie.prototype.open=Ie.prototype.m,Ie.prototype.close=Ie.prototype.close,wv=function(){return new Bo},bv=function(){return So()},_v=yi,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,pa=xo,Wh.COMPLETE="complete",vv=Wh,$h.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",Zt.prototype.listen=Zt.prototype.K,ar=$h,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,yv=Pt}).apply(typeof jo<"u"?jo:typeof self<"u"?self:typeof window<"u"?window:{});const dp="@firebase/firestore",hp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ms="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new ju("@firebase/firestore");function is(){return Ui.logLevel}function H(n,...t){if(Ui.logLevel<=it.DEBUG){const e=t.map(fd);Ui.debug(`Firestore (${Ms}): ${n}`,...e)}}function Dn(n,...t){if(Ui.logLevel<=it.ERROR){const e=t.map(fd);Ui.error(`Firestore (${Ms}): ${n}`,...e)}}function ni(n,...t){if(Ui.logLevel<=it.WARN){const e=t.map(fd);Ui.warn(`Firestore (${Ms}): ${n}`,...e)}}function fd(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,Ev(n,i,e)}function Ev(n,t,e){let i=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw Dn(i),new Error(i)}function ut(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||Ev(t,s,i)}function J(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends On{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class PS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(re.UNAUTHENTICATED)))}shutdown(){}}class kS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class CS{constructor(t){this.t=t,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ut(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let r=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Sn,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=r;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Sn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ut(typeof i.accessToken=="string",31837,{l:i}),new Iv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ut(t===null||typeof t=="string",2055,{h:t}),new re(t)}}class RS{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class DS{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new RS(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MS{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ut(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fp(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(ut(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new fp(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function Tv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=OS(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function tt(n,t){return n<t?-1:n>t?1:0}function ou(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return tt(i,s);{const r=Tv(),o=NS(r.encode(pp(n,e)),r.encode(pp(t,e)));return o!==0?o:tt(i,s)}}e+=i>65535?2:1}return tt(n.length,t.length)}function pp(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function NS(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return tt(n[e],t[e]);return tt(n.length,t.length)}function vs(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="__name__";class Ge{constructor(t,e,i){e===void 0?e=0:e>t.length&&Y(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&Y(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ge.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ge?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=Ge.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return tt(t.length,e.length)}static compareSegments(t,e){const i=Ge.isNumericId(t),s=Ge.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?Ge.extractNumericId(t).compare(Ge.extractNumericId(e)):ou(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jn.fromString(t.substring(4,t.length-2))}}class yt extends Ge{construct(t,e,i){return new yt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new yt(e)}static emptyPath(){return new yt([])}}const LS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends Ge{construct(t,e,i){return new Xt(t,e,i)}static isValidIdentifier(t){return LS.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mp}static keyField(){return new Xt([mp])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new j(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new j(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xt(e)}static emptyPath(){return new Xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(yt.fromString(t))}static fromName(t){return new W(yt.fromString(t).popFirst(5))}static empty(){return new W(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&yt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return yt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new yt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n,t,e){if(!e)throw new j(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function VS(n,t,e,i){if(t===!0&&i===!0)throw new j(L.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function gp(n){if(!W.isDocumentKey(n))throw new j(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yp(n){if(W.isDocumentKey(n))throw new j(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ic(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function me(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ic(n);throw new j(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Ut(n,t){const e={typeString:n};return t&&(e.value=t),e}function oo(n,t){if(!Sv(n))throw new j(L.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new j(L.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=-62135596800,_p=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(t){return _t.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*_p);return new _t(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<vp)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_p}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(oo(t,_t._jsonSchema))return new _t(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-vp;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:Ut("string",_t._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(t){return new X(t)}static min(){return new X(new _t(0,0))}static max(){return new X(new _t(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Br=-1;function FS(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(i===1e9?new _t(e+1,0):new _t(e,i));return new ii(s,W.empty(),t)}function BS(n){return new ii(n.readTime,n.key,Br)}class ii{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new ii(X.min(),W.empty(),Br)}static max(){return new ii(X.max(),W.empty(),Br)}}function US(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==$S)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):B.reject(e)}static resolve(t){return new B(((e,i)=>{e(t)}))}static reject(t){return new B(((e,i)=>{i(t)}))}static waitFor(t){return new B(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(c=>i(c)))})),o=!0,r===s&&e()}))}static or(t){let e=B.resolve(!1);for(const i of t)e=e.next((s=>s?B.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new B(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next((d=>{o[l]=d,++a,a===r&&i(o)}),(d=>s(d)))}}))}static doWhile(t,e){return new B(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function jS(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ns(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Tc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this._e(i),this.ae=i=>e.writeSequenceNumber(i))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Tc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=-1;function Ac(n){return n==null}function ja(n){return n===0&&1/n==-1/0}function HS(n){return typeof n=="number"&&Number.isInteger(n)&&!ja(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="";function qS(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=bp(t)),t=WS(n.get(e),t);return bp(t)}function WS(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case xv:e+="";break;default:e+=r}}return e}function bp(n){return n+xv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function hi(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Pv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.comparator=t,this.root=e||Yt.EMPTY}insert(t,e){return new St(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ho(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ho(this.root,t,this.comparator,!0)}}class Ho{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yt{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??Yt.RED,this.left=s??Yt.EMPTY,this.right=r??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new Yt(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Yt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Y(27949);return t+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new Yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ep(this.data.getIterator())}getIteratorFrom(t){return new Ep(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class Ep{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.fields=t,t.sort(Xt.comparator)}static empty(){return new Se([])}unionWith(t){let e=new jt(Xt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Se(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return vs(this.fields,t.fields,((e,i)=>e.isEqual(i)))}}/**
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
 */class kv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kv("Invalid base64 string: "+r):r}})(t);return new Qt(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const GS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(n){if(ut(!!n,39018),typeof n=="string"){let t=0;const e=GS.exec(n);if(ut(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ot(n.seconds),nanos:Ot(n.nanos)}}function Ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ri(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="server_timestamp",Rv="__type__",Dv="__previous_value__",Mv="__local_write_time__";function gd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Rv])===null||e===void 0?void 0:e.stringValue)===Cv}function Sc(n){const t=n.mapValue.fields[Dv];return gd(t)?Sc(t):t}function Ur(n){const t=si(n.mapValue.fields[Mv].timestampValue);return new _t(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(t,e,i,s,r,o,a,c,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const Ha="(default)";class $r{constructor(t,e){this.projectId=t,this.database=e||Ha}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===Ha}isEqual(t){return t instanceof $r&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="__type__",YS="__max__",qo={mapValue:{}},Nv="__vector__",qa="value";function oi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gd(n)?4:QS(n)?9007199254740991:XS(n)?10:11:Y(28295,{value:n})}function nn(n,t){if(n===t)return!0;const e=oi(n);if(e!==oi(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ur(n).isEqual(Ur(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=si(s.timestampValue),a=si(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return ri(s.bytesValue).isEqual(ri(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return Ot(s.geoPointValue.latitude)===Ot(r.geoPointValue.latitude)&&Ot(s.geoPointValue.longitude)===Ot(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return Ot(s.integerValue)===Ot(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Ot(s.doubleValue),a=Ot(r.doubleValue);return o===a?ja(o)===ja(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return vs(n.arrayValue.values||[],t.arrayValue.values||[],nn);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(wp(o)!==wp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nn(o[c],a[c])))return!1;return!0})(n,t);default:return Y(52216,{left:n})}}function zr(n,t){return(n.values||[]).find((e=>nn(e,t)))!==void 0}function _s(n,t){if(n===t)return 0;const e=oi(n),i=oi(t);if(e!==i)return tt(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=Ot(r.integerValue||r.doubleValue),c=Ot(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,t);case 3:return Ip(n.timestampValue,t.timestampValue);case 4:return Ip(Ur(n),Ur(t));case 5:return ou(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=ri(r),c=ri(o);return a.compareTo(c)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=tt(a[l],c[l]);if(d!==0)return d}return tt(a.length,c.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=tt(Ot(r.latitude),Ot(o.latitude));return a!==0?a:tt(Ot(r.longitude),Ot(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Tp(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},m=(a=h[qa])===null||a===void 0?void 0:a.arrayValue,y=(c=f[qa])===null||c===void 0?void 0:c.arrayValue,_=tt(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0);return _!==0?_:Tp(m,y)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===qo.mapValue&&o===qo.mapValue)return 0;if(r===qo.mapValue)return 1;if(o===qo.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=ou(c[h],d[h]);if(f!==0)return f;const m=_s(a[c[h]],l[d[h]]);if(m!==0)return m}return tt(c.length,d.length)})(n.mapValue,t.mapValue);default:throw Y(23264,{le:e})}}function Ip(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=si(n),i=si(t),s=tt(e.seconds,i.seconds);return s!==0?s:tt(e.nanos,i.nanos)}function Tp(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=_s(e[s],i[s]);if(r)return r}return tt(e.length,i.length)}function bs(n){return au(n)}function au(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=si(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ri(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return W.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=au(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${au(e.fields[o])}`;return s+"}"})(n.mapValue):Y(61005,{value:n})}function ma(n){switch(oi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Sc(n);return t?16+ma(t):16;case 5:return 2*n.stringValue.length;case 6:return ri(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+ma(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return hi(i.fields,((r,o)=>{s+=r.length+ma(o)})),s})(n.mapValue);default:throw Y(13486,{value:n})}}function Ap(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function cu(n){return!!n&&"integerValue"in n}function yd(n){return!!n&&"arrayValue"in n}function Sp(n){return!!n&&"nullValue"in n}function xp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ga(n){return!!n&&"mapValue"in n}function XS(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ov])===null||e===void 0?void 0:e.stringValue)===Nv}function Ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return hi(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=Ir(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ir(n.arrayValue.values[e]);return t}return Object.assign({},n)}function QS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===YS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.value=t}static empty(){return new _e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!ga(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ir(e)}setAll(t){let e=Xt.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=Ir(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());ga(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];ga(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){hi(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new _e(Ir(this.value))}}function Lv(n){const t=[];return hi(n.fields,((e,i)=>{const s=new Xt([e]);if(ga(i)){const r=Lv(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new Se(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ae(t,0,X.min(),X.min(),X.min(),_e.empty(),0)}static newFoundDocument(t,e,i,s){return new ae(t,1,e,X.min(),i,s,0)}static newNoDocument(t,e){return new ae(t,2,e,X.min(),X.min(),_e.empty(),0)}static newUnknownDocument(t,e){return new ae(t,3,e,X.min(),X.min(),_e.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ae&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wa{constructor(t,e){this.position=t,this.inclusive=e}}function Pp(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=W.comparator(W.fromName(o.referenceValue),e.key):i=_s(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function kp(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!nn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class jr{constructor(t,e="asc"){this.field=t,this.dir=e}}function JS(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Vv{}class Bt extends Vv{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new tx(t,e,i):e==="array-contains"?new ix(t,i):e==="in"?new sx(t,i):e==="not-in"?new rx(t,i):e==="array-contains-any"?new ox(t,i):new Bt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new ex(t,i):new nx(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(_s(e,this.value)):e!==null&&oi(this.value)===oi(e)&&this.matchesComparison(_s(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Vv{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new $e(t,e)}matches(t){return Fv(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Fv(n){return n.op==="and"}function Bv(n){return ZS(n)&&Fv(n)}function ZS(n){for(const t of n.filters)if(t instanceof $e)return!1;return!0}function lu(n){if(n instanceof Bt)return n.field.canonicalString()+n.op.toString()+bs(n.value);if(Bv(n))return n.filters.map((t=>lu(t))).join(",");{const t=n.filters.map((e=>lu(e))).join(",");return`${n.op}(${t})`}}function Uv(n,t){return n instanceof Bt?(function(i,s){return s instanceof Bt&&i.op===s.op&&i.field.isEqual(s.field)&&nn(i.value,s.value)})(n,t):n instanceof $e?(function(i,s){return s instanceof $e&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&Uv(o,s.filters[a])),!0):!1})(n,t):void Y(19439)}function $v(n){return n instanceof Bt?(function(e){return`${e.field.canonicalString()} ${e.op} ${bs(e.value)}`})(n):n instanceof $e?(function(e){return e.op.toString()+" {"+e.getFilters().map($v).join(" ,")+"}"})(n):"Filter"}class tx extends Bt{constructor(t,e,i){super(t,e,i),this.key=W.fromName(i.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class ex extends Bt{constructor(t,e){super(t,"in",e),this.keys=zv("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class nx extends Bt{constructor(t,e){super(t,"not-in",e),this.keys=zv("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function zv(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((i=>W.fromName(i.referenceValue)))}class ix extends Bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yd(e)&&zr(e.arrayValue,this.value)}}class sx extends Bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&zr(this.value.arrayValue,e)}}class rx extends Bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!zr(this.value.arrayValue,e)}}class ox extends Bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yd(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>zr(this.value.arrayValue,i)))}}/**
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
 */class ax{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Pe=null}}function Cp(n,t=null,e=[],i=[],s=null,r=null,o=null){return new ax(n,t,e,i,s,r,o)}function vd(n){const t=J(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>lu(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Ac(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>bs(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>bs(i))).join(",")),t.Pe=e}return t.Pe}function _d(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!JS(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Uv(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!kp(n.startAt,t.startAt)&&kp(n.endAt,t.endAt)}function uu(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function cx(n,t,e,i,s,r,o,a){return new Ls(n,t,e,i,s,r,o,a)}function xc(n){return new Ls(n)}function Rp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jv(n){return n.collectionGroup!==null}function Tr(n){const t=J(n);if(t.Te===null){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new jt(Xt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new jr(r,i))})),e.has(Xt.keyField().canonicalString())||t.Te.push(new jr(Xt.keyField(),i))}return t.Te}function Xe(n){const t=J(n);return t.Ie||(t.Ie=lx(t,Tr(n))),t.Ie}function lx(n,t){if(n.limitType==="F")return Cp(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new jr(s.field,r)}));const e=n.endAt?new Wa(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Wa(n.startAt.position,n.startAt.inclusive):null;return Cp(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function du(n,t){const e=n.filters.concat([t]);return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function hu(n,t,e){return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pc(n,t){return _d(Xe(n),Xe(t))&&n.limitType===t.limitType}function Hv(n){return`${vd(Xe(n))}|lt:${n.limitType}`}function ss(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>$v(s))).join(", ")}]`),Ac(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>bs(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>bs(s))).join(",")),`Target(${i})`})(Xe(n))}; limitType=${n.limitType})`}function kc(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):W.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of Tr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,c){const l=Pp(o,a,c);return o.inclusive?l<=0:l<0})(i.startAt,Tr(i),s)||i.endAt&&!(function(o,a,c){const l=Pp(o,a,c);return o.inclusive?l>=0:l>0})(i.endAt,Tr(i),s))})(n,t)}function ux(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qv(n){return(t,e)=>{let i=!1;for(const s of Tr(n)){const r=dx(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function dx(n,t,e){const i=n.field.isKeyField()?W.comparator(t.key,e.key):(function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?_s(c,l):Y(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){hi(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return Pv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=new St(W.comparator);function Mn(){return hx}const Wv=new St(W.comparator);function cr(...n){let t=Wv;for(const e of n)t=t.insert(e.key,e);return t}function Gv(n){let t=Wv;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function ki(){return Ar()}function Kv(){return Ar()}function Ar(){return new Wi((n=>n.toString()),((n,t)=>n.isEqual(t)))}const fx=new St(W.comparator),px=new jt(W.comparator);function st(...n){let t=px;for(const e of n)t=t.add(e);return t}const mx=new jt(tt);function gx(){return mx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ja(t)?"-0":t}}function Yv(n){return{integerValue:""+n}}function yx(n,t){return HS(t)?Yv(t):bd(n,t)}/**
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
 */class Cc{constructor(){this._=void 0}}function vx(n,t,e){return n instanceof Ga?(function(s,r){const o={fields:{[Rv]:{stringValue:Cv},[Mv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&gd(r)&&(r=Sc(r)),r&&(o.fields[Dv]=r),{mapValue:o}})(e,t):n instanceof Hr?Qv(n,t):n instanceof qr?Jv(n,t):(function(s,r){const o=Xv(s,r),a=Dp(o)+Dp(s.Ee);return cu(o)&&cu(s.Ee)?Yv(a):bd(s.serializer,a)})(n,t)}function _x(n,t,e){return n instanceof Hr?Qv(n,t):n instanceof qr?Jv(n,t):e}function Xv(n,t){return n instanceof Ka?(function(i){return cu(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class Ga extends Cc{}class Hr extends Cc{constructor(t){super(),this.elements=t}}function Qv(n,t){const e=Zv(t);for(const i of n.elements)e.some((s=>nn(s,i)))||e.push(i);return{arrayValue:{values:e}}}class qr extends Cc{constructor(t){super(),this.elements=t}}function Jv(n,t){let e=Zv(t);for(const i of n.elements)e=e.filter((s=>!nn(s,i)));return{arrayValue:{values:e}}}class Ka extends Cc{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Dp(n){return Ot(n.integerValue||n.doubleValue)}function Zv(n){return yd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function bx(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof Hr&&s instanceof Hr||i instanceof qr&&s instanceof qr?vs(i.elements,s.elements,nn):i instanceof Ka&&s instanceof Ka?nn(i.Ee,s.Ee):i instanceof Ga&&s instanceof Ga})(n.transform,t.transform)}class wx{constructor(t,e){this.version=t,this.transformResults=e}}class ge{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ya(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Rc{}function t_(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Dc(n.key,ge.none()):new ao(n.key,n.data,ge.none());{const e=n.data,i=_e.empty();let s=new jt(Xt.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new fi(n.key,i,new Se(s.toArray()),ge.none())}}function Ex(n,t,e){n instanceof ao?(function(s,r,o){const a=s.value.clone(),c=Op(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof fi?(function(s,r,o){if(!ya(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Op(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(e_(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function Sr(n,t,e,i){return n instanceof ao?(function(r,o,a,c){if(!ya(r.precondition,o))return a;const l=r.value.clone(),d=Np(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,t,e,i):n instanceof fi?(function(r,o,a,c){if(!ya(r.precondition,o))return a;const l=Np(r.fieldTransforms,c,o),d=o.data;return d.setAll(e_(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((h=>h.field)))})(n,t,e,i):(function(r,o,a){return ya(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function Ix(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=Xv(i.transform,s||null);r!=null&&(e===null&&(e=_e.empty()),e.set(i.field,r))}return e||null}function Mp(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&vs(i,s,((r,o)=>bx(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ao extends Rc{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fi extends Rc{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function e_(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function Op(n,t,e){const i=new Map;ut(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,_x(o,a,e[s]))}return i}function Np(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,vx(r,o,t))}return i}class Dc extends Rc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tx extends Rc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&Ex(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Sr(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Sr(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Kv();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const c=t_(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),st())}isEqual(t){return this.batchId===t.batchId&&vs(this.mutations,t.mutations,((e,i)=>Mp(e,i)))&&vs(this.baseMutations,t.baseMutations,((e,i)=>Mp(e,i)))}}class wd{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){ut(t.mutations.length===i.length,58842,{Ve:t.mutations.length,me:i.length});let s=(function(){return fx})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new wd(t,e,i,s)}}/**
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
 */class Sx{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class xx{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt,at;function Px(n){switch(n){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function n_(n){if(n===void 0)return Dn("GRPC error has no .code"),L.UNKNOWN;switch(n){case Vt.OK:return L.OK;case Vt.CANCELLED:return L.CANCELLED;case Vt.UNKNOWN:return L.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return L.INTERNAL;case Vt.UNAVAILABLE:return L.UNAVAILABLE;case Vt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Vt.NOT_FOUND:return L.NOT_FOUND;case Vt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Vt.ABORTED:return L.ABORTED;case Vt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Vt.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:n})}}(at=Vt||(Vt={}))[at.OK=0]="OK",at[at.CANCELLED=1]="CANCELLED",at[at.UNKNOWN=2]="UNKNOWN",at[at.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",at[at.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",at[at.NOT_FOUND=5]="NOT_FOUND",at[at.ALREADY_EXISTS=6]="ALREADY_EXISTS",at[at.PERMISSION_DENIED=7]="PERMISSION_DENIED",at[at.UNAUTHENTICATED=16]="UNAUTHENTICATED",at[at.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",at[at.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",at[at.ABORTED=10]="ABORTED",at[at.OUT_OF_RANGE=11]="OUT_OF_RANGE",at[at.UNIMPLEMENTED=12]="UNIMPLEMENTED",at[at.INTERNAL=13]="INTERNAL",at[at.UNAVAILABLE=14]="UNAVAILABLE",at[at.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const kx=new Jn([4294967295,4294967295],0);function Lp(n){const t=Tv().encode(n),e=new gv;return e.update(t),new Uint8Array(e.digest())}function Vp(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Jn([e,i],0),new Jn([s,r],0)]}class Ed{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new lr(`Invalid padding: ${e}`);if(i<0)throw new lr(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new lr(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new lr(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Jn.fromNumber(this.fe)}pe(t,e,i){let s=t.add(e.multiply(Jn.fromNumber(i)));return s.compare(kx)===1&&(s=new Jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Lp(t),[i,s]=Vp(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);if(!this.ye(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Ed(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.fe===0)return;const e=Lp(t),[i,s]=Vp(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);this.we(o)}}we(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,co.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Mc(X.min(),s,new St(tt),Mn(),st())}}class co{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new co(i,e,st(),st(),st())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.be=s}}class i_{constructor(t,e){this.targetId=t,this.De=e}}class s_{constructor(t,e,i=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class Fp{constructor(){this.ve=0,this.Ce=Bp(),this.Fe=Qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=st(),e=st(),i=st();return this.Ce.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:Y(38017,{changeType:r})}})),new co(this.Fe,this.Me,t,e,i)}ke(){this.xe=!1,this.Ce=Bp()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,ut(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Cx{constructor(t){this.We=t,this.Ge=new Map,this.ze=Mn(),this.je=Wo(),this.Je=Wo(),this.He=new St(tt)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const i=this.tt(e);switch(t.state){case 0:this.nt(e)&&i.Be(t.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(t.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(i.Ke(),i.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),i.Be(t.resumeToken));break;default:Y(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((i,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,i=t.De.count,s=this.st(e);if(s){const r=s.target;if(uu(r))if(i===0){const o=new W(r.path);this.Xe(e,o,ae.newNoDocument(o,X.min()))}else ut(i===1,20013,{expectedCount:i});else{const o=this.ot(e);if(o!==i){const a=this._t(t),c=a?this.ut(a,t,o):1;if(c!==0){this.rt(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,l)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=ri(i).toUint8Array()}catch(c){if(c instanceof kv)return ni("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ed(o,s,r)}catch(c){return ni(c instanceof lr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(t,e,i){return e.De.count===i-this.ht(t,e.targetId)?0:2}ht(t,e){const i=this.We.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Xe(e,r,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((r,o)=>{const a=this.st(o);if(a){if(r.current&&uu(a.target)){const c=new W(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,ae.newNoDocument(c,t))}r.Ne&&(e.set(o,r.Le()),r.ke())}}));let i=st();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.ze.forEach(((r,o)=>o.setReadTime(t)));const s=new Mc(t,e,this.He,this.ze,i);return this.ze=Mn(),this.je=Wo(),this.Je=Wo(),this.He=new St(tt),s}Ze(t,e){if(!this.nt(t))return;const i=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,i),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,i){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),i&&(this.ze=this.ze.insert(e,i))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Fp,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new jt(tt),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new jt(tt),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||H("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Fp),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Wo(){return new St(W.comparator)}function Bp(){return new St(W.comparator)}const Rx={asc:"ASCENDING",desc:"DESCENDING"},Dx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mx={and:"AND",or:"OR"};class Ox{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function fu(n,t){return n.useProto3Json||Ac(t)?t:{value:t}}function Ya(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function r_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Nx(n,t){return Ya(n,t.toTimestamp())}function Qe(n){return ut(!!n,49232),X.fromTimestamp((function(e){const i=si(e);return new _t(i.seconds,i.nanos)})(n))}function Id(n,t){return pu(n,t).canonicalString()}function pu(n,t){const e=(function(s){return new yt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function o_(n){const t=yt.fromString(n);return ut(d_(t),10190,{key:t.toString()}),t}function mu(n,t){return Id(n.databaseId,t.path)}function kl(n,t){const e=o_(t);if(e.get(1)!==n.databaseId.projectId)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new W(c_(e))}function a_(n,t){return Id(n.databaseId,t)}function Lx(n){const t=o_(n);return t.length===4?yt.emptyPath():c_(t)}function gu(n){return new yt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function c_(n){return ut(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Up(n,t,e){return{name:mu(n,t),fields:e.value.mapValue.fields}}function Vx(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y(39313,{state:l})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(l,d){return l.useProto3Json?(ut(d===void 0||typeof d=="string",58123),Qt.fromBase64String(d||"")):(ut(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qt.fromUint8Array(d||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(l){const d=l.code===void 0?L.UNKNOWN:n_(l.code);return new j(d,l.message||"")})(o);e=new s_(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=kl(n,i.document.name),r=Qe(i.document.updateTime),o=i.document.createTime?Qe(i.document.createTime):X.min(),a=new _e({mapValue:{fields:i.document.fields}}),c=ae.newFoundDocument(s,r,o,a),l=i.targetIds||[],d=i.removedTargetIds||[];e=new va(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=kl(n,i.document),r=i.readTime?Qe(i.readTime):X.min(),o=ae.newNoDocument(s,r),a=i.removedTargetIds||[];e=new va([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=kl(n,i.document),r=i.removedTargetIds||[];e=new va([],r,s,null)}else{if(!("filter"in t))return Y(11601,{At:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new xx(s,r),a=i.targetId;e=new i_(a,o)}}return e}function Fx(n,t){let e;if(t instanceof ao)e={update:Up(n,t.key,t.value)};else if(t instanceof Dc)e={delete:mu(n,t.key)};else if(t instanceof fi)e={update:Up(n,t.key,t.data),updateMask:Gx(t.fieldMask)};else{if(!(t instanceof Tx))return Y(16599,{Rt:t.type});e={verify:mu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ka)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Y(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:Nx(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y(27497)})(n,t.precondition)),e}function Bx(n,t){return n&&n.length>0?(ut(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?Qe(s.updateTime):Qe(r);return o.isEqual(X.min())&&(o=Qe(r)),new wx(o,s.transformResults||[])})(e,t)))):[]}function Ux(n,t){return{documents:[a_(n,t.path)]}}function $x(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=a_(n,s);const r=(function(l){if(l.length!==0)return u_($e.create(l,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(l){if(l.length!==0)return l.map((d=>(function(f){return{field:rs(f.field),direction:Hx(f.dir)}})(d)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=fu(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(t.endAt)),{Vt:e,parent:s}}function zx(n){let t=Lx(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){ut(i===1,65062);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=(function(h){const f=l_(h);return f instanceof $e&&Bv(f)?f.getFilters():[f]})(e.where));let o=[];e.orderBy&&(o=(function(h){return h.map((f=>(function(y){return new jr(os(y.field),(function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(f)))})(e.orderBy));let a=null;e.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,Ac(f)?null:f})(e.limit));let c=null;e.startAt&&(c=(function(h){const f=!!h.before,m=h.values||[];return new Wa(m,f)})(e.startAt));let l=null;return e.endAt&&(l=(function(h){const f=!h.before,m=h.values||[];return new Wa(m,f)})(e.endAt)),cx(t,s,o,r,a,"F",c,l)}function jx(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function l_(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=os(e.unaryFilter.field);return Bt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=os(e.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=os(e.unaryFilter.field);return Bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=os(e.unaryFilter.field);return Bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Bt.create(os(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return $e.create(e.compositeFilter.filters.map((i=>l_(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(e.compositeFilter.op))})(n):Y(30097,{filter:n})}function Hx(n){return Rx[n]}function qx(n){return Dx[n]}function Wx(n){return Mx[n]}function rs(n){return{fieldPath:n.canonicalString()}}function os(n){return Xt.fromServerFormat(n.fieldPath)}function u_(n){return n instanceof Bt?(function(e){if(e.op==="=="){if(xp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NAN"}};if(Sp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NAN"}};if(Sp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(e.field),op:qx(e.op),value:e.value}}})(n):n instanceof $e?(function(e){const i=e.getFilters().map((s=>u_(s)));return i.length===1?i[0]:{compositeFilter:{op:Wx(e.op),filters:i}}})(n):Y(54877,{filter:n})}function Gx(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function d_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,i,s,r=X.min(),o=X.min(),a=Qt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new $n(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(t){this.gt=t}}function Yx(n){const t=zx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hu(t,t.limit,"L"):t}/**
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
 */class Xx{constructor(){this.Dn=new Qx}addToCollectionParentIndex(t,e){return this.Dn.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(ii.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(ii.min())}updateCollectionGroup(t,e,i){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class Qx{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new jt(yt.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new jt(yt.comparator)).toArray()}}/**
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
 */const $p={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},h_=41943040;class ve{static withCacheSize(t){return new ve(t,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(h_,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new ws(0)}static ur(){return new ws(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="LruGarbageCollector",Jx=1048576;function jp([n,t],[e,i]){const s=tt(n,e);return s===0?tt(t,i):s}class Zx{constructor(t){this.Tr=t,this.buffer=new jt(jp),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();jp(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class tP{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){H(zp,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ns(e)?H(zp,"Ignoring IndexedDB error during garbage collection: ",e):await Os(e)}await this.Rr(3e5)}))}}class eP{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return B.resolve(Tc.ue);const i=new Zx(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve($p)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$p):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let i,s,r,o,a,c,l;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(t,s)))).next((h=>(i=h,a=Date.now(),this.removeTargets(t,i,e)))).next((h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(t,i)))).next((h=>(l=Date.now(),is()<=it.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h}))))}}function nP(n,t){return new eP(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.changes=new Wi((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?B.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sP{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&Sr(i.mutation,s,Se.empty(),_t.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,st()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=st()){const s=ki();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=cr();return r.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=ki();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,st())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=Mn();const o=Ar(),a=(function(){return Ar()})();return e.forEach(((c,l)=>{const d=i.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof fi)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Sr(d.mutation,l,d.mutation.getFieldMask(),_t.now())):o.set(l.key,Se.empty())})),this.recalculateAndSaveOverlays(t,r).next((c=>(c.forEach(((l,d)=>o.set(l,d))),e.forEach(((l,d)=>{var h;return a.set(l,new sP(d,(h=o.get(l))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(t,e){const i=Ar();let s=new St(((o,a)=>o-a)),r=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((c=>{const l=e.get(c);if(l===null)return;let d=i.get(c)||Se.empty();d=a.applyToLocalView(l,d),i.set(c,d);const h=(s.get(a.batchId)||st()).add(c);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=Kv();d.forEach((f=>{if(!r.has(f)){const m=t_(e.get(f),i.get(f));m!==null&&h.set(f,m),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return B.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return(function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):jv(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):B.resolve(ki());let a=Br,c=r;return o.next((l=>B.forEach(l,((d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?B.resolve():this.remoteDocumentCache.getEntry(t,d).next((f=>{c=c.insert(d,f)}))))).next((()=>this.populateOverlays(t,l,r))).next((()=>this.computeViews(t,c,l,st()))).next((d=>({batchId:a,changes:Gv(d)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next((i=>{let s=cr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=cr();return this.indexManager.getCollectionParents(t,r).next((a=>B.forEach(a,(c=>{const l=(function(h,f){return new Ls(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,i,s).next((d=>{d.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,ae.newInvalidDocument(d)))}));let a=cr();return o.forEach(((c,l)=>{const d=r.get(c);d!==void 0&&Sr(d.mutation,l,Se.empty(),_t.now()),kc(e,l)&&(a=a.insert(c,l))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return B.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}})(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Yx(s.bundledQuery),readTime:Qe(s.readTime)}})(e)),B.resolve()}}/**
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
 */class aP{constructor(){this.overlays=new St(W.comparator),this.kr=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ki();return B.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.wt(t,e,r)})),B.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),B.resolve()}getOverlaysForCollection(t,e,i){const s=ki(),r=e.length+1,o=new W(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new St(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>i){let d=r.get(l.largestBatchId);d===null&&(d=ki(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=ki(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,d)=>a.set(l,d))),!(a.size()>=s)););return B.resolve(a)}wt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Sx(e,i));let r=this.kr.get(e);r===void 0&&(r=st(),this.kr.set(e,r)),this.kr.set(e,r.add(i.key))}}/**
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
 */class cP{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.qr=new jt(Ht.Qr),this.$r=new jt(Ht.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const i=new Ht(t,e);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new Ht(t,e))}Gr(t,e){t.forEach((i=>this.removeReference(i,e)))}zr(t){const e=new W(new yt([])),i=new Ht(e,t),s=new Ht(e,t+1),r=[];return this.$r.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new W(new yt([])),i=new Ht(e,t),s=new Ht(e,t+1);let r=st();return this.$r.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new Ht(t,0),i=this.qr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Ht{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return W.comparator(t.key,e.key)||tt(t.Hr,e.Hr)}static Ur(t,e){return tt(t.Hr,e.Hr)||W.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new jt(Ht.Qr)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ax(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new Ht(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,e){return B.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?md:this.er-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Ht(e,0),s=new Ht(e,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new jt(tt);return e.forEach((s=>{const r=new Ht(s,0),o=new Ht(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),B.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;W.isDocumentKey(r)||(r=r.child(""));const o=new Ht(new W(r),0);let a=new jt(tt);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Hr)),!0)}),o),B.resolve(this.ei(a))}ei(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){ut(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return B.forEach(e.mutations,(s=>{const r=new Ht(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=i}))}rr(t){}containsKey(t,e){const i=new Ht(e,0),s=this.Yr.firstAfterOrEqual(i);return B.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(t){this.ni=t,this.docs=(function(){return new St(W.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return B.resolve(i?i.document.mutableCopy():ae.newInvalidDocument(e))}getEntries(t,e){let i=Mn();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ae.newInvalidDocument(s))})),B.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=Mn();const o=e.path,a=new W(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||US(BS(d),i)<=0||(s.has(d.key)||kc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(t,e,i,s){Y(9500)}ri(t,e){return B.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new dP(this)}getSize(t){return B.resolve(this.size)}}class dP extends iP{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(i)})),B.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(t){this.persistence=t,this.ii=new Wi((e=>vd(e)),_d),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.si=0,this.oi=new Td,this.targetCount=0,this._i=ws.ar()}forEachTarget(t,e){return this.ii.forEach(((i,s)=>e(s))),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.si&&(this.si=e),B.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ws(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.hr(e),B.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),B.waitFor(r).next((()=>s))}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const i=this.ii.get(e)||null;return B.resolve(i)}addMatchingKeys(t,e,i){return this.oi.Kr(e,i),B.resolve()}removeMatchingKeys(t,e,i){this.oi.Gr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),B.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const i=this.oi.Jr(e);return B.resolve(i)}containsKey(t,e){return B.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,e){this.ai={},this.overlays={},this.ui=new Tc(0),this.ci=!1,this.ci=!0,this.li=new cP,this.referenceDelegate=t(this),this.hi=new hP(this),this.indexManager=new Xx,this.remoteDocumentCache=(function(s){return new uP(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new Kx(e),this.Ti=new oP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new aP,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ai[t.toKey()];return i||(i=new lP(e,this.referenceDelegate),this.ai[t.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,i){H("MemoryPersistence","Starting transaction:",t);const s=new fP(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return B.or(Object.values(this.ai).map((i=>()=>i.containsKey(t,e))))}}class fP extends zS{constructor(t){super(),this.currentSequenceNumber=t}}class Ad{constructor(t){this.persistence=t,this.Ai=new Td,this.Ri=null}static Vi(t){return new Ad(t)}get mi(){if(this.Ri)return this.Ri;throw Y(60996)}addReference(t,e,i){return this.Ai.addReference(i,e),this.mi.delete(i.toString()),B.resolve()}removeReference(t,e,i){return this.Ai.removeReference(i,e),this.mi.add(i.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),B.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,(i=>{const s=W.fromPath(i);return this.fi(t,s).next((r=>{r||e.removeEntry(s,X.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((i=>{i?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return B.or([()=>B.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Xa{constructor(t,e){this.persistence=t,this.gi=new Wi((i=>qS(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=nP(this,e)}static Vi(t,e){return new Xa(t,e)}Ii(){}di(t){return B.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}yr(t){let e=0;return this.gr(t,(i=>{e++})).next((()=>e))}gr(t,e){return B.forEach(this.gi,((i,s)=>this.Sr(t,i,s).next((r=>r?B.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(t,(o=>this.Sr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,X.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}removeReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ma(t.data.value)),e}Sr(t,e,i){return B.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return B.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Is=i,this.ds=s}static Es(t,e){let i=st(),s=st();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Sd(t,e.fromCache,i,s)}}/**
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
 */class pP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class mP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return UE()?8:jS(le())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ps(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ys(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new pP;return this.ws(t,e,o).next((a=>{if(r.result=a,this.Rs)return this.Ss(t,e,o,a.size)}))})).next((()=>r.result))}Ss(t,e,i,s){return i.documentReadCount<this.Vs?(is()<=it.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ss(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(is()<=it.DEBUG&&H("QueryEngine","Query:",ss(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(is()<=it.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ss(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xe(e))):B.resolve())}ps(t,e){if(Rp(e))return B.resolve(null);let i=Xe(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=hu(e,null,"F"),i=Xe(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=st(...r);return this.gs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((c=>{const l=this.bs(e,a);return this.Ds(e,l,o,c.readTime)?this.ps(t,hu(e,null,"F")):this.vs(t,l,e,c)}))))})))))}ys(t,e,i,s){return Rp(e)||s.isEqual(X.min())?B.resolve(null):this.gs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ds(e,o,i,s)?B.resolve(null):(is()<=it.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ss(e)),this.vs(t,o,e,FS(s,Br)).next((a=>a)))}))}bs(t,e){let i=new jt(qv(t));return e.forEach(((s,r)=>{kc(t,r)&&(i=i.add(r))})),i}Ds(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(t,e,i){return is()<=it.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ss(e)),this.gs.getDocumentsMatchingQuery(t,e,ii.min(),i)}vs(t,e,i,s){return this.gs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="LocalStore",gP=3e8;class yP{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new St(tt),this.Ms=new Wi((r=>vd(r)),_d),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(i)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function vP(n,t,e,i){return new yP(n,t,e,i)}async function p_(n,t){const e=J(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Ns(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let c=st();for(const l of s){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(i,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function _P(n,t){const e=J(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.Os.newChangeBuffer({trackRemovals:!0});return(function(a,c,l,d){const h=l.batch,f=h.keys();let m=B.resolve();return f.forEach((y=>{m=m.next((()=>d.getEntry(c,y))).next((_=>{const v=l.docVersions.get(y);ut(v!==null,48541),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),d.addEntry(_)))}))})),m.next((()=>a.mutationQueue.removeMutationBatch(c,h)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let c=st();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function m_(n){const t=J(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function bP(n,t){const e=J(n),i=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const a=[];t.targetChanges.forEach(((d,h)=>{const f=s.get(h);if(!f)return;a.push(e.hi.removeMatchingKeys(r,d.removedDocuments,h).next((()=>e.hi.addMatchingKeys(r,d.addedDocuments,h))));let m=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(Qt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,i)),s=s.insert(h,m),(function(_,v,I){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=gP?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0})(f,m,d)&&a.push(e.hi.updateTargetData(r,m))}));let c=Mn(),l=st();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))})),a.push(wP(r,o,t.documentUpdates).next((d=>{c=d.Ls,l=d.ks}))),!i.isEqual(X.min())){const d=e.hi.getLastRemoteSnapshotVersion(r).next((h=>e.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(d)}return B.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,c,l))).next((()=>c))})).then((r=>(e.Fs=s,r)))}function wP(n,t,e){let i=st(),s=st();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=Mn();return e.forEach(((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):H(xd,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function EP(n,t){const e=J(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=md),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function IP(n,t){const e=J(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.hi.getTargetData(i,t).next((r=>r?(s=r,B.resolve(s)):e.hi.allocateTargetId(i).next((o=>(s=new $n(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(i.targetId,i),e.Ms.set(t,i.targetId)),i}))}async function yu(n,t,e){const i=J(n),s=i.Fs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ns(o))throw o;H(xd,`Failed to update sequence numbers for target ${t}: ${o}`)}i.Fs=i.Fs.remove(t),i.Ms.delete(s.target)}function Hp(n,t,e){const i=J(n);let s=X.min(),r=st();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,d){const h=J(c),f=h.Ms.get(d);return f!==void 0?B.resolve(h.Fs.get(f)):h.hi.getTargetData(l,d)})(i,o,Xe(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{r=c}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:X.min(),e?r:st()))).next((a=>(TP(i,ux(t),a),{documents:a,qs:r})))))}function TP(n,t,e){let i=n.xs.get(t)||X.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(t,i)}class qp{constructor(){this.activeTargetIds=gx()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class AP{constructor(){this.Fo=new qp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,i){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new qp,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class SP{xo(t){}shutdown(){}}/**
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
 */const Wp="ConnectivityMonitor";class Gp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){H(Wp,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){H(Wp,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Go=null;function vu(){return Go===null?Go=(function(){return 268435456+Math.round(2147483648*Math.random())})():Go++,"0x"+Go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="RestConnection",xP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class PP{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===Ha?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=vu(),a=this.Go(t,e.toUriEncodedString());H(Cl,`Sending RPC '${t}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,r);const{host:l}=new URL(a),d=Ss(l);return this.jo(t,a,c,i,d).then((h=>(H(Cl,`Received RPC '${t}' ${o}: `,h),h)),(h=>{throw ni(Cl,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",i),h}))}Jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}zo(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ms})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Go(t,e){const i=xP[t];return`${this.$o}/v1/${e}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="WebChannelConnection";class CP extends PP{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,i,s,r){const o=vu();return new Promise(((a,c)=>{const l=new yv;l.setWithCredentials(!0),l.listenOnce(vv.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case pa.NO_ERROR:const h=l.getResponseJson();H(ne,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(h)),a(h);break;case pa.TIMEOUT:H(ne,`RPC '${t}' ${o} timed out`),c(new j(L.DEADLINE_EXCEEDED,"Request time out"));break;case pa.HTTP_ERROR:const f=l.getStatus();if(H(ne,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const _=(function(I){const k=I.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(k)>=0?k:L.UNKNOWN})(y.status);c(new j(_,y.message))}else c(new j(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{c_:t,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{H(ne,`RPC '${t}' ${o} completed.`)}}));const d=JSON.stringify(s);H(ne,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",d,i,15)}))}P_(t,e,i){const s=vu(),r=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=wv(),a=bv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const d=r.join("");H(ne,`Creating RPC '${t}' stream ${s}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let f=!1,m=!1;const y=new kP({Ho:v=>{m?H(ne,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(H(ne,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),H(ne,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},Yo:()=>h.close()}),_=(v,I,k)=>{v.listen(I,(D=>{try{k(D)}catch(M){setTimeout((()=>{throw M}),0)}}))};return _(h,ar.EventType.OPEN,(()=>{m||(H(ne,`RPC '${t}' stream ${s} transport opened.`),y.s_())})),_(h,ar.EventType.CLOSE,(()=>{m||(m=!0,H(ne,`RPC '${t}' stream ${s} transport closed`),y.__(),this.I_(h))})),_(h,ar.EventType.ERROR,(v=>{m||(m=!0,ni(ne,`RPC '${t}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),y.__(new j(L.UNAVAILABLE,"The operation could not be completed")))})),_(h,ar.EventType.MESSAGE,(v=>{var I;if(!m){const k=v.data[0];ut(!!k,16349);const D=k,M=(D==null?void 0:D.error)||((I=D[0])===null||I===void 0?void 0:I.error);if(M){H(ne,`RPC '${t}' stream ${s} received error:`,M);const N=M.status;let F=(function(E){const S=Vt[E];if(S!==void 0)return n_(S)})(N),T=M.message;F===void 0&&(F=L.INTERNAL,T="Unknown error status: "+N+" with message "+M.message),m=!0,y.__(new j(F,T)),h.close()}else H(ne,`RPC '${t}' stream ${s} received:`,k),y.a_(k)}})),_(a,_v.STAT_EVENT,(v=>{v.stat===ru.PROXY?H(ne,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===ru.NOPROXY&&H(ne,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{y.o_()}),0),y}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Rl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){return new Ox(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Fi=t,this.timerId=e,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="PersistentStream";class y_{constructor(t,e,i,s,r,o,a,c){this.Fi=t,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new g_(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(Dn(e.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===e&&this.W_(i,s)}),(i=>{t((()=>{const s=new j(L.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(t,e){const i=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return H(Kp,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(H(Kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class RP extends y_{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Vx(this.serializer,t),i=(function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Qe(o.readTime):X.min()})(t);return this.listener.J_(e,i)}H_(t){const e={};e.database=gu(this.serializer),e.addTarget=(function(r,o){let a;const c=o.target;if(a=uu(c)?{documents:Ux(r,c)}:{query:$x(r,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=r_(r,o.resumeToken);const l=fu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Ya(r,o.snapshotVersion.toTimestamp());const l=fu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,t);const i=jx(this.serializer,t);i&&(e.labels=i),this.k_(e)}Y_(t){const e={};e.database=gu(this.serializer),e.removeTarget=t,this.k_(e)}}class DP extends y_{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return ut(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ut(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){ut(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Bx(t.writeResults,t.commitTime),i=Qe(t.commitTime);return this.listener.ta(i,e)}na(){const t={};t.database=gu(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>Fx(this.serializer,i)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{}class OP extends MP{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,pu(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(L.UNKNOWN,r.toString())}))}Jo(t,e,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(t,pu(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(L.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class NP{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Dn(e),this._a=!1):H("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="RemoteStore";class LP{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((o=>{i.enqueueAndForget((async()=>{Gi(this)&&(H($i,"Restarting streams for network reachability change."),await(async function(c){const l=J(c);l.Ia.add(4),await lo(l),l.Aa.set("Unknown"),l.Ia.delete(4),await Nc(l)})(this))}))})),this.Aa=new NP(i,s)}}async function Nc(n){if(Gi(n))for(const t of n.da)await t(!0)}async function lo(n){for(const t of n.da)await t(!1)}function v_(n,t){const e=J(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Rd(e)?Cd(e):Vs(e).x_()&&kd(e,t))}function Pd(n,t){const e=J(n),i=Vs(e);e.Ta.delete(t),i.x_()&&__(e,t),e.Ta.size===0&&(i.x_()?i.B_():Gi(e)&&e.Aa.set("Unknown"))}function kd(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Vs(n).H_(t)}function __(n,t){n.Ra.$e(t),Vs(n).Y_(t)}function Cd(n){n.Ra=new Cx({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),Vs(n).start(),n.Aa.aa()}function Rd(n){return Gi(n)&&!Vs(n).M_()&&n.Ta.size>0}function Gi(n){return J(n).Ia.size===0}function b_(n){n.Ra=void 0}async function VP(n){n.Aa.set("Online")}async function FP(n){n.Ta.forEach(((t,e)=>{kd(n,t)}))}async function BP(n,t){b_(n),Rd(n)?(n.Aa.la(t),Cd(n)):n.Aa.set("Unknown")}async function UP(n,t,e){if(n.Aa.set("Online"),t instanceof s_&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,t)}catch(i){H($i,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Qa(n,i)}else if(t instanceof va?n.Ra.Ye(t):t instanceof i_?n.Ra.it(t):n.Ra.et(t),!e.isEqual(X.min()))try{const i=await m_(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.Ra.Pt(o);return a.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ta.get(l);d&&r.Ta.set(l,d.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,l)=>{const d=r.Ta.get(c);if(!d)return;r.Ta.set(c,d.withResumeToken(Qt.EMPTY_BYTE_STRING,d.snapshotVersion)),__(r,c);const h=new $n(d.target,c,l,d.sequenceNumber);kd(r,h)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){H($i,"Failed to raise snapshot:",i),await Qa(n,i)}}async function Qa(n,t,e){if(!Ns(t))throw t;n.Ia.add(1),await lo(n),n.Aa.set("Offline"),e||(e=()=>m_(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H($i,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Nc(n)}))}function w_(n,t){return t().catch((e=>Qa(n,e,t)))}async function Lc(n){const t=J(n),e=ai(t);let i=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:md;for(;$P(t);)try{const s=await EP(t.localStore,i);if(s===null){t.Pa.length===0&&e.B_();break}i=s.batchId,zP(t,s)}catch(s){await Qa(t,s)}E_(t)&&I_(t)}function $P(n){return Gi(n)&&n.Pa.length<10}function zP(n,t){n.Pa.push(t);const e=ai(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function E_(n){return Gi(n)&&!ai(n).M_()&&n.Pa.length>0}function I_(n){ai(n).start()}async function jP(n){ai(n).na()}async function HP(n){const t=ai(n);for(const e of n.Pa)t.X_(e.mutations)}async function qP(n,t,e){const i=n.Pa.shift(),s=wd.from(i,t,e);await w_(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Lc(n)}async function WP(n,t){t&&ai(n).Z_&&await(async function(i,s){if((function(o){return Px(o)&&o!==L.ABORTED})(s.code)){const r=i.Pa.shift();ai(i).N_(),await w_(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Lc(i)}})(n,t),E_(n)&&I_(n)}async function Yp(n,t){const e=J(n);e.asyncQueue.verifyOperationInProgress(),H($i,"RemoteStore received new credentials");const i=Gi(e);e.Ia.add(3),await lo(e),i&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Nc(e)}async function GP(n,t){const e=J(n);t?(e.Ia.delete(2),await Nc(e)):t||(e.Ia.add(2),await lo(e),e.Aa.set("Unknown"))}function Vs(n){return n.Va||(n.Va=(function(e,i,s){const r=J(e);return r.ia(),new RP(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:VP.bind(null,n),e_:FP.bind(null,n),n_:BP.bind(null,n),J_:UP.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Rd(n)?Cd(n):n.Aa.set("Unknown")):(await n.Va.stop(),b_(n))}))),n.Va}function ai(n){return n.ma||(n.ma=(function(e,i,s){const r=J(e);return r.ia(),new DP(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:jP.bind(null,n),n_:WP.bind(null,n),ea:HP.bind(null,n),ta:qP.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Lc(n)):(await n.ma.stop(),n.Pa.length>0&&(H($i,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new Dd(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(n,t){if(Dn("AsyncQueue",`${t}: ${n}`),Ns(n))return new j(L.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{static emptySet(t){return new hs(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||W.comparator(e.key,i.key):(e,i)=>W.comparator(e.key,i.key),this.keyedMap=cr(),this.sortedSet=new St(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof hs)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new hs;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.fa=new St(W.comparator)}track(t){const e=t.doc.key,i=this.fa.get(e);i?t.type!==0&&i.type===3?this.fa=this.fa.insert(e,t):t.type===3&&i.type!==1?this.fa=this.fa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.fa=this.fa.remove(e):t.type===1&&i.type===2?this.fa=this.fa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):Y(63341,{At:t,ga:i}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,i)=>{t.push(i)})),t}}class Es{constructor(t,e,i,s,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new Es(t,e,hs.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class YP{constructor(){this.queries=Qp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,i){const s=J(e),r=s.queries;s.queries=Qp(),r.forEach(((o,a)=>{for(const c of a.wa)c.onError(i)}))})(this,new j(L.ABORTED,"Firestore shutting down"))}}function Qp(){return new Wi((n=>Hv(n)),Pc)}async function Od(n,t){const e=J(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.ba()&&(i=2):(r=new KP,i=t.ba()?0:1);try{switch(i){case 0:r.ya=await e.onListen(s,!0);break;case 1:r.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Md(o,`Initialization of query '${ss(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.wa.push(t),t.va(e.onlineState),r.ya&&t.Ca(r.ya)&&Ld(e)}async function Nd(n,t){const e=J(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.wa.indexOf(t);o>=0&&(r.wa.splice(o,1),r.wa.length===0?s=t.ba()?0:1:!r.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function XP(n,t){const e=J(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.wa)a.Ca(s)&&(i=!0);o.ya=s}}i&&Ld(e)}function QP(n,t,e){const i=J(n),s=i.queries.get(t);if(s)for(const r of s.wa)r.onError(e);i.queries.delete(t)}function Ld(n){n.Da.forEach((t=>{t.next()}))}var _u,Jp;(Jp=_u||(_u={})).Fa="default",Jp.Cache="cache";class Vd{constructor(t,e,i){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Es(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const i=e!=="Offline";return(!this.options.ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Es.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==_u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.key=t}}class A_{constructor(t){this.key=t}}class JP{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=st(),this.mutatedKeys=st(),this.Xa=qv(t),this.eu=new hs(this.Xa)}get tu(){return this.Ha}nu(t,e){const i=e?e.ru:new Xp,s=e?e.eu:this.eu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,h)=>{const f=s.get(d),m=kc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;f&&m?f.data.isEqual(m.data)?y!==_&&(i.track({type:3,doc:m}),v=!0):this.iu(f,m)||(i.track({type:2,doc:m}),v=!0,(c&&this.Xa(m,c)>0||l&&this.Xa(m,l)<0)&&(a=!0)):!f&&m?(i.track({type:0,doc:m}),v=!0):f&&!m&&(i.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(m?(o=o.add(m),r=_?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{eu:o,ru:i,Ds:a,mutatedKeys:r}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const o=t.ru.pa();o.sort(((d,h)=>(function(m,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{At:v})}};return _(m)-_(y)})(d.type,h.type)||this.Xa(d.doc,h.doc))),this.su(i),s=s!=null&&s;const a=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new Es(this.query,t.eu,r,o,t.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Xp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=st(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const e=[];return t.forEach((i=>{this.Za.has(i)||e.push(new A_(i))})),this.Za.forEach((i=>{t.has(i)||e.push(new T_(i))})),e}uu(t){this.Ha=t.qs,this.Za=st();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Es.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Fd="SyncEngine";class ZP{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class tk{constructor(t){this.key=t,this.lu=!1}}class ek{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Wi((a=>Hv(a)),Pc),this.Tu=new Map,this.Iu=new Set,this.du=new St(W.comparator),this.Eu=new Map,this.Au=new Td,this.Ru={},this.Vu=new Map,this.mu=ws.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function nk(n,t,e=!0){const i=R_(n);let s;const r=i.Pu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await S_(i,t,e,!0),s}async function ik(n,t){const e=R_(n);await S_(e,t,!0,!1)}async function S_(n,t,e,i){const s=await IP(n.localStore,Xe(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await sk(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&v_(n.remoteStore,s),a}async function sk(n,t,e,i,s){n.gu=(h,f,m)=>(async function(_,v,I,k){let D=v.view.nu(I);D.Ds&&(D=await Hp(_.localStore,v.query,!1).then((({documents:T})=>v.view.nu(T,D))));const M=k&&k.targetChanges.get(v.targetId),N=k&&k.targetMismatches.get(v.targetId)!=null,F=v.view.applyChanges(D,_.isPrimaryClient,M,N);return tm(_,v.targetId,F._u),F.snapshot})(n,h,f,m);const r=await Hp(n.localStore,t,!0),o=new JP(t,r.qs),a=o.nu(r.documents),c=co.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);tm(n,e,l._u);const d=new ZP(t,e,o);return n.Pu.set(t,d),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),l.snapshot}async function rk(n,t,e){const i=J(n),s=i.Pu.get(t),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((o=>!Pc(o,t)))),void i.Pu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await yu(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Pd(i.remoteStore,s.targetId),bu(i,s.targetId)})).catch(Os)):(bu(i,s.targetId),await yu(i.localStore,s.targetId,!0))}async function ok(n,t){const e=J(n),i=e.Pu.get(t),s=e.Tu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Pd(e.remoteStore,i.targetId))}async function ak(n,t,e){const i=pk(n);try{const s=await(function(o,a){const c=J(o),l=_t.now(),d=a.reduce(((m,y)=>m.add(y.key)),st());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(m=>{let y=Mn(),_=st();return c.Os.getEntries(m,d).next((v=>{y=v,y.forEach(((I,k)=>{k.isValidDocument()||(_=_.add(I))}))})).next((()=>c.localDocuments.getOverlayedDocuments(m,y))).next((v=>{h=v;const I=[];for(const k of a){const D=Ix(k,h.get(k.key).overlayedDocument);D!=null&&I.push(new fi(k.key,D,Lv(D.value.mapValue),ge.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,I,a)})).next((v=>{f=v;const I=v.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(m,v.batchId,I)}))})).then((()=>({batchId:f.batchId,changes:Gv(h)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new St(tt)),l=l.insert(a,c),o.Ru[o.currentUser.toKey()]=l})(i,s.batchId,e),await uo(i,s.changes),await Lc(i.remoteStore)}catch(s){const r=Md(s,"Failed to persist write");e.reject(r)}}async function x_(n,t){const e=J(n);try{const i=await bP(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Eu.get(r);o&&(ut(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ut(o.lu,14607):s.removedDocuments.size>0&&(ut(o.lu,42227),o.lu=!1))})),await uo(e,i,t)}catch(i){await Os(i)}}function Zp(n,t,e){const i=J(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Pu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach(((d,h)=>{for(const f of h.wa)f.va(a)&&(l=!0)})),l&&Ld(c)})(i.eventManager,t),s.length&&i.hu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function ck(n,t,e){const i=J(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),r=s&&s.key;if(r){let o=new St(W.comparator);o=o.insert(r,ae.newNoDocument(r,X.min()));const a=st().add(r),c=new Mc(X.min(),new Map,new St(tt),o,a);await x_(i,c),i.du=i.du.remove(r),i.Eu.delete(t),Bd(i)}else await yu(i.localStore,t,!1).then((()=>bu(i,t,e))).catch(Os)}async function lk(n,t){const e=J(n),i=t.batch.batchId;try{const s=await _P(e.localStore,t);k_(e,i,null),P_(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await uo(e,s)}catch(s){await Os(s)}}async function uk(n,t,e){const i=J(n);try{const s=await(function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next((h=>(ut(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>c.localDocuments.getDocuments(l,d)))}))})(i.localStore,t);k_(i,t,e),P_(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await uo(i,s)}catch(s){await Os(s)}}function P_(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function k_(n,t,e){const i=J(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Ru[i.currentUser.toKey()]=s}}function bu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Tu.get(t))n.Pu.delete(i),e&&n.hu.pu(i,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((i=>{n.Au.containsKey(i)||C_(n,i)}))}function C_(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Pd(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Bd(n))}function tm(n,t,e){for(const i of e)i instanceof T_?(n.Au.addReference(i.key,t),dk(n,i)):i instanceof A_?(H(Fd,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,t),n.Au.containsKey(i.key)||C_(n,i.key)):Y(19791,{yu:i})}function dk(n,t){const e=t.key,i=e.path.canonicalString();n.du.get(e)||n.Iu.has(i)||(H(Fd,"New document in limbo: "+e),n.Iu.add(i),Bd(n))}function Bd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new W(yt.fromString(t)),i=n.mu.next();n.Eu.set(i,new tk(e)),n.du=n.du.insert(e,i),v_(n.remoteStore,new $n(Xe(xc(e.path)),i,"TargetPurposeLimboResolution",Tc.ue))}}async function uo(n,t,e){const i=J(n),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach(((a,c)=>{o.push(i.gu(c,t,e).then((l=>{var d;if((l||e)&&i.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){s.push(l);const h=Sd.Es(c.targetId,l);r.push(h)}})))})),await Promise.all(o),i.hu.J_(s),await(async function(c,l){const d=J(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>B.forEach(l,(f=>B.forEach(f.Is,(m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m))).next((()=>B.forEach(f.ds,(m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))))))}catch(h){if(!Ns(h))throw h;H(xd,"Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.Fs.get(f),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);d.Fs=d.Fs.insert(f,_)}}})(i.localStore,r))}async function hk(n,t){const e=J(n);if(!e.currentUser.isEqual(t)){H(Fd,"User change. New user:",t.toKey());const i=await p_(e.localStore,t);e.currentUser=t,(function(r,o){r.Vu.forEach((a=>{a.forEach((c=>{c.reject(new j(L.CANCELLED,o))}))})),r.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await uo(e,i.Bs)}}function fk(n,t){const e=J(n),i=e.Eu.get(t);if(i&&i.lu)return st().add(i.key);{let s=st();const r=e.Tu.get(t);if(!r)return s;for(const o of r){const a=e.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function R_(n){const t=J(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=x_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ck.bind(null,t),t.hu.J_=XP.bind(null,t.eventManager),t.hu.pu=QP.bind(null,t.eventManager),t}function pk(n){const t=J(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uk.bind(null,t),t}class Ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Oc(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return vP(this.persistence,new mP,t.initialUser,this.serializer)}Du(t){return new f_(Ad.Vi,this.serializer)}bu(t){return new AP}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ja.provider={build:()=>new Ja};class mk extends Ja{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){ut(this.persistence.referenceDelegate instanceof Xa,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new tP(i,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new f_((i=>Xa.Vi(i,e)),this.serializer)}}class wu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Zp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hk.bind(null,this.syncEngine),await GP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new YP})()}createDatastore(t){const e=Oc(t.databaseInfo.databaseId),i=(function(r){return new CP(r)})(t.databaseInfo);return(function(r,o,a,c){return new OP(r,o,a,c)})(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new LP(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>Zp(this.syncEngine,e,0)),(function(){return Gp.C()?new Gp:new SP})())}createSyncEngine(t,e){return(function(s,r,o,a,c,l,d){const h=new ek(s,r,o,a,c,l);return d&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=J(s);H($i,"RemoteStore shutting down."),r.Ia.add(5),await lo(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}wu.provider={build:()=>new wu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ud{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Dn("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="FirestoreClient";class gk{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=re.UNAUTHENTICATED,this.clientId=pd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{H(ci,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(H(ci,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Md(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function Dl(n,t){n.asyncQueue.verifyOperationInProgress(),H(ci,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await p_(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>{ni("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{H("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ni("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function em(n,t){n.asyncQueue.verifyOperationInProgress();const e=await yk(n);H(ci,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>Yp(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Yp(t.remoteStore,s))),n._onlineComponents=t}async function yk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(ci,"Using user provided OfflineComponentProvider");try{await Dl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ni("Error using user provided cache. Falling back to memory cache: "+e),await Dl(n,new Ja)}}else H(ci,"Using default OfflineComponentProvider"),await Dl(n,new mk(void 0));return n._offlineComponents}async function D_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(ci,"Using user provided OnlineComponentProvider"),await em(n,n._uninitializedComponentsProvider._online)):(H(ci,"Using default OnlineComponentProvider"),await em(n,new wu))),n._onlineComponents}function vk(n){return D_(n).then((t=>t.syncEngine))}async function Za(n){const t=await D_(n),e=t.eventManager;return e.onListen=nk.bind(null,t.syncEngine),e.onUnlisten=rk.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ik.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ok.bind(null,t.syncEngine),e}function _k(n,t,e={}){const i=new Sn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Ud({next:f=>{d.Ou(),o.enqueueAndForget((()=>Nd(r,h)));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new j(L.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new j(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Vd(xc(a.path),d,{includeMetadataChanges:!0,ka:!0});return Od(r,h)})(await Za(n),n.asyncQueue,t,e,i))),i.promise}function bk(n,t,e={}){const i=new Sn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Ud({next:f=>{d.Ou(),o.enqueueAndForget((()=>Nd(r,h))),f.fromCache&&c.source==="server"?l.reject(new j(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Vd(a,d,{includeMetadataChanges:!0,ka:!0});return Od(r,h)})(await Za(n),n.asyncQueue,t,e,i))),i.promise}/**
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
 */function M_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firestore.googleapis.com",im=!0;class sm{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new j(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=O_,this.ssl=im}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:im;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=h_;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Jx)throw new j(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}VS("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=M_((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vc{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sm(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new PS;switch(i.type){case"firstParty":return new DS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=nm.get(e);i&&(H("ComponentProvider","Removing Datastore"),nm.delete(e),i.terminate())})(this),Promise.resolve()}}function wk(n,t,e,i={}){var s;n=me(n,Vc);const r=Ss(t),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;r&&(Xg(`https://${c}`),Qg("Firestore",!0)),o.host!==O_&&o.host!==c&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!Fi(l,a)&&(n._setSettings(l),i.mockUserToken)){let d,h;if(typeof i.mockUserToken=="string")d=i.mockUserToken,h=re.MOCK_USER;else{d=RE(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new j(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new re(f)}n._authCredentials=new kS(new Iv(d,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new pi(this.firestore,t,this._query)}}class Rt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(oo(e,Rt._jsonSchema))return new Rt(t,i||null,new W(yt.fromString(e.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Ut("string",Rt._jsonSchemaVersion),referencePath:Ut("string")};class Zn extends pi{constructor(t,e,i){super(t,e,xc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new W(t))}withConverter(t){return new Zn(this.firestore,t,this._path)}}function xn(n,t,...e){if(n=G(n),Av("collection","path",t),n instanceof Vc){const i=yt.fromString(t,...e);return yp(i),new Zn(n,null,i)}{if(!(n instanceof Rt||n instanceof Zn))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(t,...e));return yp(i),new Zn(n.firestore,null,i)}}function Jt(n,t,...e){if(n=G(n),arguments.length===1&&(t=pd.newId()),Av("doc","path",t),n instanceof Vc){const i=yt.fromString(t,...e);return gp(i),new Rt(n,null,new W(i))}{if(!(n instanceof Rt||n instanceof Zn))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(t,...e));return gp(i),new Rt(n.firestore,n instanceof Zn?n.converter:null,new W(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="AsyncQueue";class om{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new g_(this,"async_queue_retry"),this.oc=()=>{const i=Rl();i&&H(rm,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=t;const e=Rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Rl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Sn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Ns(t))throw t;H(rm,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((i=>{throw this.tc=i,this.nc=!1,Dn("INTERNAL UNHANDLED ERROR: ",am(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=e,e}enqueueAfterDelay(t,e,i){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Dd.createAndSchedule(this,t,e,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&Y(47125,{hc:am(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function am(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function cm(n){return(function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class sn extends Vc{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new om,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new om(t),this._firestoreClient=void 0,await t}}}function Ek(n,t){const e=typeof n=="object"?n:ey(),i=typeof n=="string"?n:Ha,s=qu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=kE("firestore");r&&wk(s,...r)}return s}function ho(n){if(n._terminated)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ik(n),n._firestoreClient}function Ik(n){var t,e,i;const s=n._freezeSettings(),r=(function(a,c,l,d){return new KS(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,M_(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new gk(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ke(Qt.fromBase64String(t))}catch(e){throw new j(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ke(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(oo(t,ke._jsonSchema))return ke.fromBase64String(t.bytes)}}ke._jsonSchemaVersion="firestore/bytes/1.0",ke._jsonSchema={type:Ut("string",ke._jsonSchemaVersion),bytes:Ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(t){if(oo(t,Je._jsonSchema))return new Je(t.latitude,t.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:Ut("string",Je._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
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
 */class Ze{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(oo(t,Ze._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ze(t.vectorValues);throw new j(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:Ut("string",Ze._jsonSchemaVersion),vectorValues:Ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=/^__.*__$/;class Ak{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new fi(t,this.data,this.fieldMask,e,this.fieldTransforms):new ao(t,this.data,e,this.fieldTransforms)}}class N_{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new fi(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function L_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ec:n})}}class zd{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new zd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.fc(t),s}gc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return tc(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(L_(this.Ec)&&Tk.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Sk{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Oc(t)}Dc(t,e,i,s=!1){return new zd({Ec:t,methodName:e,bc:i,path:Xt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function po(n){const t=n._freezeSettings(),e=Oc(n._databaseId);return new Sk(n._databaseId,!!t.ignoreUndefinedProperties,e)}function jd(n,t,e,i,s,r={}){const o=n.Dc(r.merge||r.mergeFields?2:0,t,e,s);Hd("Data must be an object, but it was:",o,i);const a=B_(i,o);let c,l;if(r.merge)c=new Se(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=Eu(t,h,e);if(!o.contains(f))throw new j(L.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$_(d,f)||d.push(f)}c=new Se(d),l=o.fieldTransforms.filter((h=>c.covers(h.field)))}else c=null,l=o.fieldTransforms;return new Ak(new _e(a),c,l)}class Fc extends $d{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Fc}}function V_(n,t,e,i){const s=n.Dc(1,t,e);Hd("Data must be an object, but it was:",s,i);const r=[],o=_e.empty();hi(i,((c,l)=>{const d=qd(t,c,e);l=G(l);const h=s.gc(d);if(l instanceof Fc)r.push(d);else{const f=mo(l,h);f!=null&&(r.push(d),o.set(d,f))}}));const a=new Se(r);return new N_(o,a,s.fieldTransforms)}function F_(n,t,e,i,s,r){const o=n.Dc(1,t,e),a=[Eu(t,i,e)],c=[s];if(r.length%2!=0)throw new j(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Eu(t,r[f])),c.push(r[f+1]);const l=[],d=_e.empty();for(let f=a.length-1;f>=0;--f)if(!$_(l,a[f])){const m=a[f];let y=c[f];y=G(y);const _=o.gc(m);if(y instanceof Fc)l.push(m);else{const v=mo(y,_);v!=null&&(l.push(m),d.set(m,v))}}const h=new Se(l);return new N_(d,h,o.fieldTransforms)}function xk(n,t,e,i=!1){return mo(e,n.Dc(i?4:3,t))}function mo(n,t){if(U_(n=G(n)))return Hd("Unsupported field value:",t,n),B_(n,t);if(n instanceof $d)return(function(i,s){if(!L_(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let c=mo(a,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=G(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return yx(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=_t.fromDate(i);return{timestampValue:Ya(s.serializer,r)}}if(i instanceof _t){const r=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ya(s.serializer,r)}}if(i instanceof Je)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ke)return{bytesValue:r_(s.serializer,i._byteString)};if(i instanceof Rt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Id(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ze)return(function(o,a){return{mapValue:{fields:{[Ov]:{stringValue:Nv},[qa]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.wc("VectorValues must only contain numeric values.");return bd(a.serializer,l)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${Ic(i)}`)})(n,t)}function B_(n,t){const e={};return Pv(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hi(n,((i,s)=>{const r=mo(s,t.Vc(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function U_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Je||n instanceof ke||n instanceof Rt||n instanceof $d||n instanceof Ze)}function Hd(n,t,e){if(!U_(e)||!Sv(e)){const i=Ic(e);throw i==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+i)}}function Eu(n,t,e){if((t=G(t))instanceof fo)return t._internalPath;if(typeof t=="string")return qd(n,t);throw tc("Field path arguments must be of type string or ",n,!1,void 0,e)}const Pk=new RegExp("[~\\*/\\[\\]]");function qd(n,t,e){if(t.search(Pk)>=0)throw tc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new fo(...t.split("."))._internalPath}catch{throw tc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function tc(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new j(L.INVALID_ARGUMENT,a+n+c)}function $_(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kk extends z_{data(){return super.data()}}function Wd(n,t){return typeof t=="string"?qd(n,t):t instanceof fo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gd{}class H_ extends Gd{}function Kd(n,t,...e){let i=[];t instanceof Gd&&i.push(t),i=i.concat(e),(function(r){const o=r.filter((c=>c instanceof Xd)).length,a=r.filter((c=>c instanceof Yd)).length;if(o>1||o>0&&a>0)throw new j(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class Yd extends H_{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new Yd(t,e,i)}_apply(t){const e=this._parse(t);return q_(t._query,e),new pi(t.firestore,t.converter,du(t._query,e))}_parse(t){const e=po(t.firestore);return(function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){um(h,d);const y=[];for(const _ of h)y.push(lm(c,r,_));f={arrayValue:{values:y}}}else f=lm(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||um(h,d),f=xk(a,o,h,d==="in"||d==="not-in");return Bt.create(l,d,f)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Xd extends Gd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Xd(t,e)}_parse(t){const e=this._queryConstraints.map((i=>i._parse(t))).filter((i=>i.getFilters().length>0));return e.length===1?e[0]:$e.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,r){let o=s;const a=r.getFlattenedFilters();for(const c of a)q_(o,c),o=du(o,c)})(t._query,e),new pi(t.firestore,t.converter,du(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qd extends H_{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Qd(t,e)}_apply(t){const e=(function(s,r,o){if(s.startAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jr(r,o)})(t._query,this._field,this._direction);return new pi(t.firestore,t.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new Ls(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Jd(n,t="asc"){const e=t,i=Wd("orderBy",n);return Qd._create(i,e)}function lm(n,t,e){if(typeof(e=G(e))=="string"){if(e==="")throw new j(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jv(t)&&e.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(yt.fromString(e));if(!W.isDocumentKey(i))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ap(n,new W(i))}if(e instanceof Rt)return Ap(n,e._key);throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ic(e)}.`)}function um(n,t){if(!Array.isArray(n)||n.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function q_(n,t){const e=(function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Ck{convertValue(t,e="none"){switch(oi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ri(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Y(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return hi(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var e,i,s;const r=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[qa].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((o=>Ot(o.doubleValue)));return new Ze(r)}convertGeoPoint(t){return new Je(Ot(t.latitude),Ot(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Sc(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Ur(t));default:return null}}convertTimestamp(t){const e=si(t);return new _t(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=yt.fromString(t);ut(d_(i),9688,{name:t});const s=new $r(i.get(1),i.get(3)),r=new W(i.popFirst(5));return s.isEqual(e)||Dn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class ur{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Di extends z_{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new _a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Wd("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Di._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Di._jsonSchemaVersion="firestore/documentSnapshot/1.0",Di._jsonSchema={type:Ut("string",Di._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class _a extends Di{data(t={}){return super.data(t)}}class Mi{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ur(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new _a(this._firestore,this._userDataWriter,i.key,i,new ur(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const c=new _a(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ur(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const c=new _a(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ur(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:Rk(a.type),doc:c,oldIndex:l,newIndex:d}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Mi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=pd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Rk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n){n=me(n,Rt);const t=me(n.firestore,sn);return _k(ho(t),n._key).then((e=>X_(t,n,e)))}Mi._jsonSchemaVersion="firestore/querySnapshot/1.0",Mi._jsonSchema={type:Ut("string",Mi._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class th extends Ck{constructor(t){super(),this.firestore=t}convertBytes(t){return new ke(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function xr(n){n=me(n,pi);const t=me(n.firestore,sn),e=ho(t),i=new th(t);return j_(n._query),bk(e,n._query).then((s=>new Mi(t,i,n,s)))}function G_(n,t,e){n=me(n,Rt);const i=me(n.firestore,sn),s=Zd(n.converter,t,e);return go(i,[jd(po(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ge.none())])}function mi(n,t,e,...i){n=me(n,Rt);const s=me(n.firestore,sn),r=po(s);let o;return o=typeof(t=G(t))=="string"||t instanceof fo?F_(r,"updateDoc",n._key,t,e,i):V_(r,"updateDoc",n._key,t),go(s,[o.toMutation(n._key,ge.exists(!0))])}function eh(n){return go(me(n.firestore,sn),[new Dc(n._key,ge.none())])}function K_(n,t){const e=me(n.firestore,sn),i=Jt(n),s=Zd(n.converter,t);return go(e,[jd(po(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,ge.exists(!1))]).then((()=>i))}function Y_(n,...t){var e,i,s;n=G(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||cm(t[o])||(r=t[o++]);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(cm(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,d;if(n instanceof Rt)l=me(n.firestore,sn),d=xc(n._key.path),c={next:h=>{t[o]&&t[o](X_(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=me(n,pi);l=me(h.firestore,sn),d=h._query;const f=new th(l);c={next:m=>{t[o]&&t[o](new Mi(l,f,h,m))},error:t[o+1],complete:t[o+2]},j_(n._query)}return(function(f,m,y,_){const v=new Ud(_),I=new Vd(m,v,y);return f.asyncQueue.enqueueAndForget((async()=>Od(await Za(f),I))),()=>{v.Ou(),f.asyncQueue.enqueueAndForget((async()=>Nd(await Za(f),I)))}})(ho(l),d,a,c)}function go(n,t){return(function(i,s){const r=new Sn;return i.asyncQueue.enqueueAndForget((async()=>ak(await vk(i),s,r))),r.promise})(ho(n),t)}function X_(n,t,e){const i=e.docs.get(t._key),s=new th(n);return new Di(n,s,t._key,i,new ur(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=po(t)}set(t,e,i){this._verifyNotCommitted();const s=Ml(t,this._firestore),r=Zd(s.converter,e,i),o=jd(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,ge.none())),this}update(t,e,i,...s){this._verifyNotCommitted();const r=Ml(t,this._firestore);let o;return o=typeof(e=G(e))=="string"||e instanceof fo?F_(this._dataReader,"WriteBatch.update",r._key,e,i,s):V_(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(o.toMutation(r._key,ge.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Ml(t,this._firestore);return this._mutations=this._mutations.concat(new Dc(e._key,ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ml(n,t){if((n=G(n)).firestore!==t)throw new j(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(n){return ho(n=me(n,sn)),new Dk(n,(t=>go(n,t)))}(function(t,e=!0){(function(s){Ms=s})(Ps),gs(new Bi("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new sn(new CS(i.getProvider("auth-internal")),new MS(o,i.getProvider("app-check-internal")),(function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(l.options.projectId,d)})(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),Yn(dp,hp,t),Yn(dp,hp,"esm2017")})();const Ok={apiKey:"AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",authDomain:"money-control-e6af5.firebaseapp.com",databaseURL:"https://money-control-e6af5-default-rtdb.firebaseio.com",projectId:"money-control-e6af5",storageBucket:"money-control-e6af5.firebasestorage.app",messagingSenderId:"490577558965",appId:"1:490577558965:web:09275a065a09844f1eadfc",measurementId:"G-JTLBM89W1W"},nh=ty(Ok),je=mv(nh),mt=Ek(nh),Nk=Object.freeze(Object.defineProperty({__proto__:null,auth:je,db:mt,default:nh},Symbol.toStringTag,{value:"Module"}));async function Q_(n,t){await G_(Jt(mt,"users",n),{name:t.name,email:t.email,createdAt:t.createdAt||new Date().toISOString(),settings:{currency:"INR",theme:"light",notifications:!0,budgetAlerts:!0,lowBalanceAlert:!0,lowBalanceThreshold:500,allowNegativeBalance:!1}})}async function Wr(n){const t=await W_(Jt(mt,"users",n));return t.exists()?{id:t.id,...t.data()}:null}async function J_(n,t){await mi(Jt(mt,"users",n),{initialBalance:Number(t)}),await eb(n,t)}async function Lk(n,t){const e=await Wr(n),i=(e==null?void 0:e.settings)||{};await mi(Jt(mt,"users",n),{settings:{...i,...t}})}async function Vk(n){const t=Mk(mt);(await xr(xn(mt,"users",n,"accounts"))).forEach(r=>t.delete(r.ref)),(await xr(xn(mt,"users",n,"transactions"))).forEach(r=>t.delete(r.ref)),(await xr(xn(mt,"users",n,"budgets"))).forEach(r=>t.delete(r.ref)),t.delete(Jt(mt,"users",n)),await t.commit()}async function Z_(n,t){const e=xn(mt,"users",n,"accounts");return(await K_(e,{name:t.name.trim(),type:t.type,initialBalance:Number(t.initialBalance)||0,bankName:(t.bankName||"").trim(),last4Digits:(t.last4Digits||"").trim(),icon:t.icon||tb(t.type),createdAt:new Date().toISOString()})).id}function tb(n){switch(n){case"Cash":return"💵";case"Bank":return"🏦";case"UPI":return"📱";case"Other":return"💳";default:return"💰"}}async function Fk(n,t,e){const i=Jt(mt,"users",n,"accounts",t);await mi(i,{name:e.name.trim(),type:e.type,initialBalance:Number(e.initialBalance)||0,bankName:(e.bankName||"").trim(),last4Digits:(e.last4Digits||"").trim(),icon:e.icon||tb(e.type),updatedAt:new Date().toISOString()})}async function Bk(n,t){await eh(Jt(mt,"users",n,"accounts",t))}async function Uk(n){const t=xn(mt,"users",n,"accounts"),e=Kd(t,Jd("createdAt","asc")),i=await xr(e),s=[];return i.forEach(r=>{s.push({id:r.id,...r.data()})}),s}function $k(n,t){const e=xn(mt,"users",n,"accounts"),i=Kd(e,Jd("createdAt","asc"));return Y_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Account subscription error:",s),t([],s)})}async function eb(n,t=0){(await Uk(n)).length===0&&await Z_(n,{name:"Cash",type:"Cash",initialBalance:Number(t)||0,icon:"💵"})}async function nb(n,t){const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;if(t.date!==i)throw new Error("⚠️ Invalid transaction date. New transactions can only be created for today.");const s=xn(mt,"users",n,"transactions"),r={type:t.type,amount:Number(t.amount),date:t.date,reason:t.reason.trim(),category:t.category||(t.type==="TRANSFER"?"Transfer":"Other"),notes:(t.notes||"").trim(),createdAt:new Date().toISOString()};return t.type==="INCOME"?r.destinationAccountId=t.destinationAccountId:t.type==="EXPENSE"?r.sourceAccountId=t.sourceAccountId:t.type==="TRANSFER"&&(r.sourceAccountId=t.sourceAccountId,r.destinationAccountId=t.destinationAccountId),(await K_(s,r)).id}async function ib(n,t,e){const i=Jt(mt,"users",n,"transactions",t),s={amount:Number(e.amount),date:e.date,reason:e.reason.trim(),category:e.category||(e.type==="TRANSFER"?"Transfer":"Other"),notes:(e.notes||"").trim(),updatedAt:new Date().toISOString()};e.sourceAccountId!==void 0&&(s.sourceAccountId=e.sourceAccountId),e.destinationAccountId!==void 0&&(s.destinationAccountId=e.destinationAccountId),await mi(i,s)}async function zk(n,t){await eh(Jt(mt,"users",n,"transactions",t))}function jk(n,t){const e=xn(mt,"users",n,"transactions"),i=Kd(e,Jd("createdAt","desc"));return Y_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Transaction subscription error:",s),t([],s)})}async function sb(n,t){const e=t.category||"monthly";await G_(Jt(mt,"users",n,"budgets",e),{category:t.category||"monthly",amount:Number(t.amount),month:t.month,updatedAt:new Date().toISOString()})}async function Hk(n){const t=xn(mt,"users",n,"budgets"),e=await xr(t),i=[];return e.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function qk(n,t){await eh(Jt(mt,"users",n,"budgets",t))}qy(je,od).catch(n=>{console.warn("Firebase setPersistence warning:",n)});async function Wk(n,t,e){const i=new Promise((r,o)=>{setTimeout(()=>{o({code:"auth/network-request-failed",message:"Registration request timed out."})},15e3)}),s=(async()=>{const o=(await Uy(je,t.trim(),e)).user;return await id(o,{displayName:n.trim()}),await Q_(o.uid,{name:n.trim(),email:t.trim(),createdAt:new Date().toISOString()}),o})();return await Promise.race([s,i])}async function Gk(n,t){const e=new Promise((r,o)=>{setTimeout(()=>{o({code:"auth/network-request-failed",message:"Login request timed out."})},15e3)}),i=$y(je,n.trim(),t);return(await Promise.race([i,e])).user}async function ih(){await Yy(je)}async function Kk(n){await Fy(je,n.trim())}function Yk(n){return Ky(je,n)}function Xk(){return je.currentUser}async function Qk(n){const t=je.currentUser;if(!t)throw new Error("No user signed in");await id(t,{displayName:n.trim()})}async function Jk(n,t){const e=je.currentUser;if(!e)throw new Error("No user signed in");const i=rn.credential(e.email,n);await gc(e,i),await zy(e,t)}async function Zk(n){const t=je.currentUser;if(!t)throw new Error("No user signed in");const e=rn.credential(t.email,n);await gc(t,e),await Vk(t.uid),await Xy(t)}function Ol(n){const t=(n==null?void 0:n.code)||"";return{"auth/email-already-in-use":"This email is already registered. Try logging in instead.","auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled. Contact support.","auth/user-not-found":'No account found with this email. Click "Create Account" below to register.',"auth/wrong-password":'Incorrect password. Please check your password or click "Forgot Password?".',"auth/invalid-credential":`No account found or invalid credentials. If you haven't created an account yet, click "Create Account" below.`,"auth/too-many-requests":"Too many failed attempts. Please wait a moment and try again.","auth/weak-password":"Password should be at least 6 characters.","auth/network-request-failed":"Network timeout or connection error. Please check your internet connection.","auth/requires-recent-login":"Please logout and login again before this action.","auth/operation-not-allowed":"Email/password sign-in is not enabled. Enable it in Firebase Console."}[t]||(n==null?void 0:n.message)||'Unable to log in. Check your credentials or click "Create Account".'}function rb(n,t,e){const i=t.filter(l=>l.type==="EXPENSE"&&l.date&&l.date.startsWith(e)),s=i.reduce((l,d)=>l+d.amount,0),r=n.find(l=>l.category==="monthly"),o=r?{budget:r.amount,spent:s,remaining:r.amount-s,percentage:r.amount>0?Math.min(s/r.amount*100,100):0,exceeded:s>r.amount}:null,c=n.filter(l=>l.category!=="monthly").map(l=>{const d=i.filter(h=>h.category===l.category).reduce((h,f)=>h+f.amount,0);return{category:l.category,budget:l.amount,spent:d,remaining:l.amount-d,percentage:l.amount>0?Math.min(d/l.amount*100,100):0,exceeded:d>l.amount}});return{monthlyProgress:o,categoryProgress:c,totalSpent:s}}function tC(n,t,e){const i=[],{monthlyProgress:s,categoryProgress:r}=rb(n,t,e);return s&&(s.exceeded?i.push({type:"danger",icon:"🚨",title:"Budget Exceeded",message:`You exceeded your monthly budget by ₹${Math.abs(s.remaining).toLocaleString("en-IN")}.`}):s.percentage>=80&&i.push({type:"warning",icon:"⚠️",title:"Budget Alert",message:`You have used ${s.percentage.toFixed(0)}% of your monthly budget.`})),r.forEach(o=>{o.exceeded&&i.push({type:"danger",icon:"🚨",title:"Category Budget Exceeded",message:`You exceeded your ${o.category} budget by ₹${Math.abs(o.remaining).toLocaleString("en-IN")}.`})}),i}async function eC(n,t,e){await sb(n,{category:"monthly",amount:Number(t),month:e})}async function nC(n,t,e,i){await sb(n,{category:t,amount:Number(e),month:i})}async function sh(n){return await Hk(n)}async function iC(n,t){await qk(n,t)}let Ce=null,Pn=!1;function sC(){rC(),oC(),aC(),lC()}function rC(){"serviceWorker"in navigator&&(location.hostname==="localhost"||location.hostname==="127.0.0.1"||location.hostname==="::1"?navigator.serviceWorker.getRegistrations().then(t=>{for(let e of t)e.unregister()}).catch(t=>console.warn("SW unregister warning:",t)):window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})}))}function oC(){window.matchMedia("(display-mode: standalone)").matches&&(Pn=!0),window.navigator.standalone===!0&&(Pn=!0),window.addEventListener("appinstalled",()=>{Pn=!0,Ce=null,Iu()})}function aC(){window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Ce=n,!localStorage.getItem("mc_install_dismissed")&&!Pn&&setTimeout(()=>cC(),3e3)})}function cC(){if(Pn||!Ce)return;const n=document.getElementById("pwa-install-banner");n&&(n.innerHTML=`
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
  `,n.classList.add("show"),document.getElementById("pwa-install-accept").onclick=async()=>{Ce&&(Ce.prompt(),(await Ce.userChoice).outcome==="accepted"&&(Pn=!0),Ce=null),Iu()},document.getElementById("pwa-install-dismiss").onclick=()=>{localStorage.setItem("mc_install_dismissed","true"),Iu()})}function Iu(){const n=document.getElementById("pwa-install-banner");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function lC(){const n=()=>{const t=document.getElementById("offline-banner");t&&(navigator.onLine?(t.classList.remove("show"),setTimeout(()=>{t.innerHTML=""},300)):(t.innerHTML=`
        <div class="offline-content">
          <span class="offline-icon">📡</span>
          <span class="offline-text">You're offline — Reconnect to save new transactions securely.</span>
        </div>
      `,t.classList.add("show")))};window.addEventListener("online",n),window.addEventListener("offline",n),setTimeout(n,1e3)}function ob(){return navigator.onLine}function uC(){return Pn}function dC(){return!!Ce&&!Pn}async function hC(){if(!Ce)return!1;Ce.prompt();const n=await Ce.userChoice;return n.outcome==="accepted"&&(Pn=!0),Ce=null,n.outcome==="accepted"}const kt=4;async function ab(n){const e=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function fC(n,t){await mi(Jt(mt,"users",n),{pinHash:t,pinEnabled:!0,pinSetupPromptShown:!0})}async function ec(n){const t=await W_(Jt(mt,"users",n));if(t.exists()){const e=t.data();return{pinHash:e.pinHash||null,pinEnabled:e.pinEnabled||!1,pinSetupPromptShown:e.pinSetupPromptShown||!1,autoLockTimeout:e.autoLockTimeout!==void 0?e.autoLockTimeout:5,pinLength:kt}}return{pinHash:null,pinEnabled:!1,pinSetupPromptShown:!1,autoLockTimeout:5,pinLength:kt}}async function cb(n,t){return await ab(n)===t}async function lb(n){await mi(Jt(mt,"users",n),{pinHash:null,pinEnabled:!1})}async function pC(n,t){await mi(Jt(mt,"users",n),{autoLockTimeout:t})}async function mC(n){await mi(Jt(mt,"users",n),{pinSetupPromptShown:!0})}const gC="modulepreload",yC=function(n){return"/"+n},dm={},hm=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let o=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(e.map(l=>{if(l=yC(l),l in dm)return;dm[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":gC,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((m,y)=>{f.addEventListener("load",m),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};let vC=0;function Ko(n,t="info",e=4e3){const i=document.getElementById("toast-container");if(!i)return;const s=`toast-${++vC}`,r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"Success",error:"Error",warning:"Warning",info:"Info"},a=document.createElement("div");a.id=s,a.className=`toast toast-${t}`,a.innerHTML=`
    <div class="toast-icon">${r[t]||r.info}</div>
    <div class="toast-content">
      <div class="toast-title">${o[t]||o.info}</div>
      <div class="toast-message">${n}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${e}ms linear;"></div>
  `,i.appendChild(a),requestAnimationFrame(()=>{const d=a.querySelector(".toast-progress");d&&(d.style.width="0%")});const c=setTimeout(()=>{fm(a)},e);a.querySelector(".toast-close").addEventListener("click",()=>{clearTimeout(c)});const l=i.querySelectorAll(".toast");l.length>4&&fm(l[0])}function fm(n){!n||!n.parentNode||(n.classList.add("removing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}const q={success:(n,t)=>Ko(n,"success",t),error:(n,t)=>Ko(n,"error",t),warning:(n,t)=>Ko(n,"warning",t),info:(n,t)=>Ko(n,"info",t)};let C={mode:"lock",pin:"",confirmPin:"",currentPinInput:"",step:"enter",pinLength:kt,failedAttempts:0,isProcessing:!1,uid:null,storedHash:null,onUnlock:null,onSetupComplete:null},pm=!1;function _C(n,t){C.mode="setup-prompt",C.uid=n,C.onSetupComplete=t,Ae()}function bC(n,t){C.mode="create",C.uid=n,C.pin="",C.confirmPin="",C.currentPinInput="",C.step="enter",C.pinLength=kt,C.onSetupComplete=t,Ae()}function wC(n,t,e){C.mode="change",C.uid=n,C.storedHash=t,C.currentPinInput="",C.pin="",C.confirmPin="",C.step=t?"current":"enter",C.pinLength=kt,C.onSetupComplete=e,Ae()}function ub(n,t,e){C.mode="lock",C.uid=n,C.storedHash=t,C.pin="",C.failedAttempts=0,C.isProcessing=!1,C.onUnlock=e,Ae()}function Oi(){const n=document.getElementById("pin-lock-root");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function Ae(){const n=document.getElementById("pin-lock-root");if(!n)return;let t="";switch(C.mode){case"setup-prompt":t=IC();break;case"create":case"change":t=TC();break;case"lock":t=AC();break;case"forgot":t=SC();break}n.innerHTML=`<div class="pin-overlay">${t}</div>`,n.classList.add("show"),xC(),EC()}function EC(){pm||(pm=!0,window.addEventListener("keydown",n=>{const t=document.getElementById("pin-lock-root");if(!(!t||!t.classList.contains("show"))&&!(n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA")){if(n.key>="0"&&n.key<="9"){if(C.isProcessing)return;hb(n.key)}else if(n.key==="Backspace"){if(C.isProcessing)return;fb()}else if(n.key==="Enter"){if(C.isProcessing)return;C.mode==="lock"&&pb()}}}))}function IC(){return`
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
  `}function TC(){let n="Create Your PIN",t="Choose a 4-digit PIN to protect your data.",e=C.pin;return C.mode==="change"?C.step==="current"?(n="Current PIN",t="Enter your current 4-digit PIN.",e=C.currentPinInput):C.step==="enter"?(n="New PIN",t="Enter your new 4-digit PIN.",e=C.pin):C.step==="confirm"&&(n="Confirm New PIN",t="Confirm your new 4-digit PIN.",e=C.confirmPin):C.step==="confirm"?(n="Confirm Your PIN",t="Enter your 4-digit PIN again to confirm.",e=C.confirmPin):(n="Enter Your PIN",t="Enter a 4-digit PIN to protect your data.",e=C.pin),`
    <div class="pin-screen pin-create-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">${n}</div>
      <p class="pin-subtitle">${t}</p>

      <div class="pin-dots" id="pin-dots">
        ${rh(e,kt)}
      </div>

      <div class="pin-error" id="pin-create-error"></div>

      ${db()}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-create-back">
          ← Back
        </button>
      </div>
    </div>
  `}function AC(){return`
    <div class="pin-screen pin-lock-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Money Control</div>
      <p class="pin-subtitle">Welcome Back 👋</p>
      <p class="pin-description">Enter your PIN</p>

      <div class="pin-dots" id="pin-dots">
        ${rh(C.pin,kt)}
      </div>

      <div class="pin-error" id="pin-lock-error"></div>

      ${db()}

      <button class="pin-btn pin-btn-primary pin-unlock-btn" id="pin-unlock-btn">
        🔓 Unlock
      </button>

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-btn">
          Forgot PIN?
        </button>
      </div>
    </div>
  `}function SC(){return`
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
  `}function rh(n,t=kt){let e="";for(let i=0;i<t;i++){const s=i<n.length;e+=`<span class="pin-dot ${s?"filled":""}">${s?"●":"○"}</span>`}return e}function db(){return`
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
  `}function Ne(){const n=document.getElementById("pin-dots");if(!n)return;let t="";C.mode==="create"?t=C.step==="confirm"?C.confirmPin:C.pin:C.mode==="change"?C.step==="current"?t=C.currentPinInput:C.step==="confirm"?t=C.confirmPin:t=C.pin:C.mode==="lock"&&(t=C.pin),n.innerHTML=rh(t,kt)}function xC(){const n=document.getElementById("pin-setup-set");n&&(n.onclick=()=>{C.mode="create",C.pin="",C.confirmPin="",C.step="enter",Ae()});const t=document.getElementById("pin-setup-skip");t&&(t.onclick=async()=>{C.uid&&await mC(C.uid),Oi(),C.onSetupComplete&&C.onSetupComplete()}),document.querySelectorAll(".pin-key[data-key]").forEach(a=>{a.onclick=()=>{if(C.isProcessing)return;const c=a.dataset.key;a.classList.add("pressed"),setTimeout(()=>a.classList.remove("pressed"),150),c==="delete"?fb():hb(c)}});const e=document.getElementById("pin-create-back");e&&(e.onclick=()=>{C.mode==="change"?C.step==="confirm"?(C.step="enter",C.confirmPin="",Ae()):C.step==="enter"&&C.storedHash?(C.step="current",C.pin="",Ae()):Oi():C.step==="confirm"?(C.step="enter",C.confirmPin="",Ae()):Oi()});const i=document.getElementById("pin-unlock-btn");i&&(i.onclick=()=>pb());const s=document.getElementById("pin-forgot-btn");s&&(s.onclick=()=>{C.mode="forgot",Ae()});const r=document.getElementById("pin-forgot-verify");r&&(r.onclick=()=>kC());const o=document.getElementById("pin-forgot-back");o&&(o.onclick=()=>{C.mode="lock",C.pin="",Ae()})}function hb(n){const t=document.getElementById("pin-create-error");t&&(t.textContent=""),C.mode==="create"?C.step==="confirm"?C.confirmPin.length<kt&&(C.confirmPin+=n,Ne(),C.confirmPin.length===kt&&mm()):C.pin.length<kt&&(C.pin+=n,Ne(),C.pin.length===kt&&setTimeout(()=>{C.step="confirm",Ae()},200)):C.mode==="change"?C.step==="current"?C.currentPinInput.length<kt&&(C.currentPinInput+=n,Ne(),C.currentPinInput.length===kt&&PC()):C.step==="confirm"?C.confirmPin.length<kt&&(C.confirmPin+=n,Ne(),C.confirmPin.length===kt&&mm()):C.pin.length<kt&&(C.pin+=n,Ne(),C.pin.length===kt&&setTimeout(()=>{C.step="confirm",Ae()},200)):C.mode==="lock"&&C.pin.length<kt&&(C.pin+=n,Ne())}function fb(){C.mode==="create"?C.step==="confirm"?C.confirmPin=C.confirmPin.slice(0,-1):C.pin=C.pin.slice(0,-1):C.mode==="change"?C.step==="current"?C.currentPinInput=C.currentPinInput.slice(0,-1):C.step==="confirm"?C.confirmPin=C.confirmPin.slice(0,-1):C.pin=C.pin.slice(0,-1):C.mode==="lock"&&(C.pin=C.pin.slice(0,-1)),Ne()}async function PC(){const n=document.getElementById("pin-create-error");if(C.currentPinInput.length!==kt){n&&(n.textContent="Enter your 4-digit PIN.");return}C.isProcessing=!0;try{if(await cb(C.currentPinInput,C.storedHash))C.isProcessing=!1,C.step="enter",C.pin="",C.confirmPin="",Ae();else{C.isProcessing=!1,n&&(n.textContent="Incorrect PIN. Try again."),C.currentPinInput="",Ne();const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500))}}catch{C.isProcessing=!1,n&&(n.textContent="Verification failed. Try again.")}}async function mm(){const n=document.getElementById("pin-create-error");if(C.pin!==C.confirmPin){n&&(n.textContent="PINs do not match. Please try again."),C.confirmPin="",Ne();const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}C.isProcessing=!0;try{const t=await ab(C.pin);await fC(C.uid,t),q.success(C.mode==="change"?"🔐 PIN updated successfully!":"🔐 PIN created successfully!"),Oi(),C.pin="",C.confirmPin="",C.currentPinInput="",C.isProcessing=!1,C.onSetupComplete&&C.onSetupComplete()}catch{n&&(n.textContent="Failed to save PIN. Please try again."),C.isProcessing=!1}}async function pb(){if(C.isProcessing)return;const n=document.getElementById("pin-lock-error");if(C.pin.length!==kt){n&&(n.textContent="Enter your 4-digit PIN.");const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}if(C.isProcessing=!0,C.failedAttempts>=3){const t=Math.min(Math.pow(2,C.failedAttempts-2)*1e3,3e4),e=document.getElementById("pin-unlock-btn");e&&(e.disabled=!0,e.textContent=`Wait ${Math.ceil(t/1e3)}s...`),await new Promise(i=>setTimeout(i,t)),e&&(e.disabled=!1,e.textContent="🔓 Unlock")}try{if(await cb(C.pin,C.storedHash))q.success("Unlocked successfully."),Oi(),C.pin="",C.failedAttempts=0,C.isProcessing=!1,C.onUnlock&&C.onUnlock();else{C.failedAttempts++,C.pin="",Ne(),n&&(n.textContent="Incorrect PIN. Try again.");const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500)),C.isProcessing=!1}}catch{n&&(n.textContent="Verification failed. Try again."),C.pin="",Ne(),C.isProcessing=!1}}async function kC(){const n=document.getElementById("pin-forgot-password"),t=document.getElementById("pin-forgot-error");if(!n)return;const e=n.value;if(!e){t&&(t.textContent="Please enter your password.");return}const i=document.getElementById("pin-forgot-verify");i&&(i.disabled=!0,i.innerHTML='<span class="spinner"></span> Verifying...');try{const{EmailAuthProvider:s,reauthenticateWithCredential:r}=await hm(async()=>{const{EmailAuthProvider:l,reauthenticateWithCredential:d}=await Promise.resolve().then(()=>AS);return{EmailAuthProvider:l,reauthenticateWithCredential:d}},void 0),{auth:o}=await hm(async()=>{const{auth:l}=await Promise.resolve().then(()=>Nk);return{auth:l}},void 0),a=o.currentUser;if(!a||!a.email){t&&(t.textContent="No authenticated user found."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN");return}const c=s.credential(a.email,e);await r(a,c),await lb(C.uid),q.success("🔐 PIN removed. You can set a new PIN in Settings."),Oi(),C.onUnlock&&C.onUnlock()}catch{t&&(t.textContent="Incorrect password. Please try again."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN")}}function yo(n,t=!1){if(n===""||n===null||n===void 0)return"Please enter an amount.";const e=Number(n);return isNaN(e)?"Please enter a valid number.":(t?e<0:e<=0)?t?"Amount cannot be negative.":"Amount must be greater than ₹0.":e>99999999?"Amount is too large.":null}function oh(n){return!n||!n.trim()?"Please enter your email.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())?null:"Please enter a valid email address."}function ah(n){return n?n.length<6?"Password must be at least 6 characters.":null:"Please enter a password."}function mb(n,t){return t?n!==t?"Passwords do not match.":null:"Please confirm your password."}function gb(n,t){return!n||!String(n).trim()?`Please enter ${t}.`:null}function Bc(n){return!n||!n.trim()?"Please enter your name.":n.trim().length<2?"Name must be at least 2 characters.":n.trim().length>50?"Name must be less than 50 characters.":null}function CC(n){if(!n)return"Please select a date.";const t=new Date(n);return isNaN(t.getTime())?"Please enter a valid date.":null}function ch(n){if(!n)return"Date is required.";const t=new Date(n);if(isNaN(t.getTime()))return"Please enter a valid date.";const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n!==i?"⚠️ Invalid transaction date. New transactions can only be created for today.":null}function RC(n){return n?null:"Please select a category."}function yb(n,t=!0){const e={},i=yo(n.amount);if(i&&(e.amount=i),t){const o=ch(n.date);o&&(e.date=o)}else{const o=CC(n.date);o&&(e.date=o)}const s=gb(n.reason,"a reason");s&&(e.reason=s);const r=RC(n.category);return r&&(e.category=r),{isValid:Object.keys(e).length===0,errors:e}}function DC(n,t){const e={},i=oh(n);i&&(e.email=i);const s=ah(t);return s&&(e.password=s),{isValid:Object.keys(e).length===0,errors:e}}function MC(n,t,e,i){const s={},r=Bc(n);r&&(s.name=r);const o=oh(t);o&&(s.email=o);const a=ah(e);a&&(s.password=a);const c=mb(e,i);return c&&(s.confirmPassword=c),{isValid:Object.keys(s).length===0,errors:s}}let ba="login";function OC(){return`
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 72px; height: 72px; border-radius: 18px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.3);" />
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${vb()}
        </div>
      </div>
    </div>
  `}function vb(){if(ba==="login")return`
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
    `;if(ba==="register")return`
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
    `;if(ba==="forgot")return`
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
    `}function _b(n){const t=document.getElementById("auth-card-body");if(!t)return;const e=f=>{ba=f,t.innerHTML=vb(),_b(n)},i=document.getElementById("link-register");i&&(i.onclick=()=>e("register"));const s=document.getElementById("link-login");s&&(s.onclick=()=>e("login"));const r=document.getElementById("link-login-back");r&&(r.onclick=()=>e("login"));const o=document.getElementById("link-forgot");o&&(o.onclick=()=>e("forgot"));const a=document.getElementById("toggle-login-password");a&&(a.onclick=()=>{const f=document.getElementById("login-password");f&&(f.type=f.type==="password"?"text":"password")});const c=document.getElementById("toggle-reg-password");c&&(c.onclick=()=>{const f=document.getElementById("reg-password");f&&(f.type=f.type==="password"?"text":"password")});const l=document.getElementById("login-form");l&&(l.onsubmit=async f=>{f.preventDefault();const m=document.getElementById("login-email").value,y=document.getElementById("login-password").value;document.getElementById("login-email-error").textContent="",document.getElementById("login-password-error").textContent="";const _=DC(m,y);if(!_.isValid){_.errors.email&&(document.getElementById("login-email-error").textContent=_.errors.email),_.errors.password&&(document.getElementById("login-password-error").textContent=_.errors.password);return}const v=document.getElementById("btn-login-submit");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Logging in...';try{await Gk(m,y),q.success("Logged in successfully!"),n&&n()}catch(I){console.error("Login failure:",I);const k=Ol(I);q.error(k);const D=document.getElementById("login-password-error");D&&(D.textContent=k)}finally{const I=document.getElementById("btn-login-submit");I&&(I.disabled=!1,I.innerHTML='<span class="btn-text">Log In</span>')}});const d=document.getElementById("register-form");d&&(d.onsubmit=async f=>{f.preventDefault();const m=document.getElementById("reg-name").value,y=document.getElementById("reg-email").value,_=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value;document.getElementById("reg-name-error").textContent="",document.getElementById("reg-email-error").textContent="",document.getElementById("reg-password-error").textContent="",document.getElementById("reg-confirm-error").textContent="";const I=MC(m,y,_,v);if(!I.isValid){I.errors.name&&(document.getElementById("reg-name-error").textContent=I.errors.name),I.errors.email&&(document.getElementById("reg-email-error").textContent=I.errors.email),I.errors.password&&(document.getElementById("reg-password-error").textContent=I.errors.password),I.errors.confirmPassword&&(document.getElementById("reg-confirm-error").textContent=I.errors.confirmPassword);return}const k=document.getElementById("btn-register-submit");k.disabled=!0,k.innerHTML='<span class="spinner"></span> Creating Account...';try{await Wk(m,y,_),q.success("Account created successfully!"),n&&n()}catch(D){q.error(Ol(D))}finally{const D=document.getElementById("btn-register-submit");D&&(D.disabled=!1,D.innerHTML='<span class="btn-text">Create Account</span>')}});const h=document.getElementById("forgot-form");h&&(h.onsubmit=async f=>{f.preventDefault();const m=document.getElementById("forgot-email").value;document.getElementById("forgot-email-error").textContent="";const y=oh(m);if(y){document.getElementById("forgot-email-error").textContent=y;return}const _=document.getElementById("btn-forgot-submit");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Sending...';try{await Kk(m),q.success("Password reset email sent! Check your inbox."),e("login")}catch(v){q.error(Ol(v)),_.disabled=!1,_.innerHTML='<span class="btn-text">Send Reset Link</span>'}})}function NC(){return`
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
  `}function LC(n,t){const e=document.getElementById("onboarding-form");e&&(e.onsubmit=async i=>{i.preventDefault();const s=document.getElementById("initial-balance"),r=document.getElementById("onboarding-error");r.textContent="";const o=s.value,a=yo(o,!0);if(a){r.textContent=a;return}const c=document.getElementById("btn-start-tracking");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Saving...';try{await J_(n,Number(o)),q.success("Initial balance saved!"),t&&t()}catch(l){console.error("Error setting initial balance:",l),q.error("Unable to save initial balance. Please try again."),c.disabled=!1,c.innerHTML="Start Money Tracking"}})}function K(n){return n==null||isNaN(n)?"₹0":`₹${Number(n).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:0})}`}function Uc(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function VC(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):""}function FC(){const n=new Date().getHours();return n<12?"Good Morning":n<17?"Good Afternoon":"Good Evening"}function Fs(){const n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${i}`}function bb(){return`📅 Today — ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`}function BC(n){const t=Fs(),e=new Date;e.setDate(e.getDate()-1);const i=e.toISOString().split("T")[0];return n===t?"Today":n===i?"Yesterday":Uc(n)}function UC(){return new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function wb(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function Eb(n){const t=new Date(n+"T00:00:00"),e=t.getDay(),i=new Date(t);i.setDate(t.getDate()-e);const s=new Date(i);return s.setDate(i.getDate()+6),{start:i.toISOString().split("T")[0],end:s.toISOString().split("T")[0]}}function Yo(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}const vo=[{value:"Food",label:"🍔 Food",emoji:"🍔"},{value:"Travel",label:"🚌 Travel",emoji:"🚌"},{value:"Recharge",label:"📱 Recharge",emoji:"📱"},{value:"Shopping",label:"🛍️ Shopping",emoji:"🛍️"},{value:"Entertainment",label:"🎮 Entertainment",emoji:"🎮"},{value:"Education",label:"📚 Education",emoji:"📚"},{value:"Software",label:"💻 Software",emoji:"💻"},{value:"Personal",label:"🏠 Personal",emoji:"🏠"},{value:"Other",label:"💊 Other",emoji:"💊"}],lh=[{value:"Pocket Money",label:"Pocket Money"},{value:"Salary",label:"Salary"},{value:"Gift",label:"Gift"},{value:"Freelance",label:"Freelance"},{value:"Refund",label:"Refund"},{value:"Other",label:"Other"}];function Ib(n){const t=vo.find(e=>e.value===n);return t?t.emoji:"💰"}const $C=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];function Tb(n,t){const e=Number(n.initialBalance)||0,i=n.id;let s=e;return t.forEach(r=>{const o=Number(r.amount)||0;r.type==="INCOME"?r.destinationAccountId===i&&(s+=o):r.type==="EXPENSE"?r.sourceAccountId===i&&(s-=o):r.type==="TRANSFER"&&(r.destinationAccountId===i&&(s+=o),r.sourceAccountId===i&&(s-=o))}),s}function li(n,t){const e={};let i=0;return n.forEach(s=>{const r=Tb(s,t);e[s.id]=r,i+=r}),{balances:e,totalMoney:i}}function zC(n,t){const e=n.id,i=t.filter(l=>l.sourceAccountId===e||l.destinationAccountId===e);let s=0,r=0,o=0,a=0;i.forEach(l=>{const d=Number(l.amount)||0;l.type==="INCOME"&&l.destinationAccountId===e?s+=d:l.type==="EXPENSE"&&l.sourceAccountId===e?r+=d:l.type==="TRANSFER"&&(l.sourceAccountId===e&&(o+=d),l.destinationAccountId===e&&(a+=d))});const c=Tb(n,t);return{account:n,balance:c,totalAdded:s,totalSpent:r,totalTransferredOut:o,totalTransferredIn:a,transactions:i}}function jC(n){return n.filter(t=>t.type==="INCOME").reduce((t,e)=>t+Number(e.amount),0)}function HC(n){return n.filter(t=>t.type==="EXPENSE").reduce((t,e)=>t+Number(e.amount),0)}function qC(n){return n.filter(t=>t.type==="TRANSFER").reduce((t,e)=>t+Number(e.amount),0)}function WC(n,t){const{balances:e,totalMoney:i}=li(n,t),s=jC(t),r=HC(t),o=qC(t);return{balances:e,totalMoney:i,totalIncome:s,totalExpenses:r,totalTransfers:o}}function Ab(n,t){const e=n.filter(o=>o.date===t),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function GC(n,t){const{start:e,end:i}=Eb(t),s=n.filter(c=>c.date>=e&&c.date<=i),r=s.filter(c=>c.type==="INCOME").reduce((c,l)=>c+l.amount,0),o=s.filter(c=>c.type==="EXPENSE").reduce((c,l)=>c+l.amount,0),a=s.filter(c=>c.type==="TRANSFER").reduce((c,l)=>c+l.amount,0);return{added:r,spent:o,transferred:a,net:r-o,count:s.length,transactions:s,startDate:e,endDate:i}}function Sb(n,t){const e=n.filter(o=>o.date&&o.date.startsWith(t)),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function KC(n,t){const e=t?n.filter(o=>o.type==="EXPENSE"&&o.date&&o.date.startsWith(t)):n.filter(o=>o.type==="EXPENSE"),i={};let s=0;return e.forEach(o=>{const a=o.category||"Other";i[a]=(i[a]||0)+o.amount,s+=o.amount}),{categories:Object.entries(i).map(([o,a])=>({category:o,amount:a,percentage:s>0?a/s*100:0,emoji:Ib(o)})).sort((o,a)=>a.amount-o.amount),totalExpenses:s}}function xb(n,t){const{balances:e,totalMoney:i}=li(n,t);return n.map(s=>{const r=e[s.id]||0,o=i>0?Math.max(0,r)/i*100:0;return{account:s,balance:r,percentage:o}}).sort((s,r)=>r.balance-s.balance)}function Pb(n,t){const{added:e,spent:i,transferred:s,net:r,count:o,transactions:a}=Sb(n,t),{categories:c}=KC(n,t),l=c.length>0?c[0]:null,d=a.filter(f=>f.type==="EXPENSE"),h=d.length>0?d.reduce((f,m)=>m.amount>f.amount?m:f,d[0]):null;return{income:e,expenses:i,transfers:s,savings:r,transactionCount:o,categories:c,highestCategory:l,highestExpense:h}}function YC(n,t={}){const{showActions:e=!1,showDate:i=!0,showNotes:s=!1,accounts:r=[]}=t,o=n.type==="INCOME",a=n.type==="EXPENSE",c=n.type==="TRANSFER",l=o?"income":a?"expense":"balance",d=v=>{const I=r.find(k=>k.id===v);return I?I.name:""};let h="🔴",f="",m="";if(o)h="🟢",m="+",f=d(n.destinationAccountId)||"Account";else if(a)h="🔴",m="−",f=d(n.sourceAccountId)||"Account";else if(c){h="🟣",m="↕";const v=d(n.sourceAccountId)||"Source",I=d(n.destinationAccountId)||"Dest";f=`${v} → ${I}`}const y=BC(n.date),_=`${f} • ${y}`;return`
    <div class="transaction-item animate-fade-in" data-tx-id="${n.id}">
      <div class="transaction-type-badge ${l}">
        ${h}
      </div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${Yo(n.reason)||(c?"Account Transfer":Yo(n.category)||"Transaction")}
        </div>
        <div class="transaction-meta">
          <span>${Yo(_)}</span>
        </div>
        ${s&&n.notes?`
          <div class="transaction-notes-sub">
            ${Yo(n.notes)}
          </div>
        `:""}
      </div>
      <div class="transaction-amount">
        <div class="transaction-amount-value ${l}" style="${c?"color: var(--primary);":""}">
          ${m}${K(n.amount)}
        </div>
      </div>
      ${e?`
        <div class="transaction-actions">
          <button class="transaction-action-btn edit" data-action="edit" data-tx-id="${n.id}" title="Edit">✏️</button>
          <button class="transaction-action-btn delete" data-action="delete" data-tx-id="${n.id}" title="Delete">🗑️</button>
        </div>
      `:""}
    </div>
  `}function fs(n,t={}){return!n||n.length===0?"":n.map(e=>YC(e,t)).join("")}function kb(){return`
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">No transactions yet</h3>
      <p class="empty-state-text">Start tracking your money by adding your first transaction.</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `}function XC(){return`
    <div class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <h3 class="empty-state-title">No results found</h3>
      <p class="empty-state-text">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  `}function Nl(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📅</span>
      <h3 class="empty-state-title">No transactions on this date</h3>
      <p class="empty-state-text">There are no transactions recorded for the selected date.</p>
    </div>
  `}function QC(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `}let wa=null;function Ee(n){$t();const t=document.getElementById("modal-root");if(!t)return;const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`
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
  `,t.appendChild(e),document.body.classList.add("no-scroll"),wa={element:e,onClose:n.onClose};const i=e.querySelector("#modal-close-btn");i&&i.addEventListener("click",$t),e.addEventListener("click",r=>{r.target===e&&$t()});const s=r=>{r.key==="Escape"&&($t(),document.removeEventListener("keydown",s))};return document.addEventListener("keydown",s),n.onOpen&&requestAnimationFrame(()=>n.onOpen(e)),e}function $t(){if(!wa)return;const{element:n,onClose:t}=wa;n.classList.add("closing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),document.body.classList.remove("no-scroll"),t&&t()},200),wa=null}function zi(n){return new Promise(t=>{const e=`
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
    `;Ee({content:e,hideHeader:!0,onOpen:i=>{i.querySelector("#confirm-cancel").addEventListener("click",()=>{$t(),t(!1)}),i.querySelector("#confirm-ok").addEventListener("click",()=>{$t(),t(!0)})},onClose:()=>t(!1)})})}let Ct={user:null,profile:null,accounts:[],transactions:[],budgets:[]};function gm(n){Ct={...Ct,...n};const{profile:t,accounts:e,transactions:i}=Ct;if(Ct.dashboardError)return`
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
    `;const s=t!=null&&t.name?t.name.split(" ")[0]:"User",{balances:r,totalMoney:o}=WC(e,i),a=Fs(),c=Ab(i,a),l=i.slice(0,5),d=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,h=tC(Ct.budgets,i,d);return`
    <div class="page animate-fade-in dashboard-page">
      <!-- 1. Greeting + current date -->
      <div class="greeting">
        <h1 class="greeting-text">Good ${FC().replace("Good ","")}, ${s} 👋</h1>
        <p class="greeting-date">${UC()}</p>
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
        <div class="balance-amount">${K(o)}</div>
        <div class="balance-subtitle">Across ${e.length} account${e.length===1?"":"s"}</div>
      </div>

      <!-- 3. Accounts section -->
      <div class="section accounts-section">
        <div class="section-header">
          <h2 class="section-title-sm">ACCOUNTS</h2>
          <span class="section-link" id="link-manage-accounts">View All →</span>
        </div>
        <div class="account-rows-container card card-flat">
          ${e.length>0?e.map(f=>{const m=r[f.id]||0;return`
              <div class="account-compact-row">
                <div class="account-row-left">
                  <span class="account-row-icon">${f.icon||"🏦"}</span>
                  <span class="account-row-name">${f.name}</span>
                </div>
                <div class="account-row-balance">${K(m)}</div>
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
            <div class="today-card-amount income">${K(c.added)}</div>
          </div>
          <div class="today-card expense">
            <div class="today-card-header">
              <span class="today-card-icon">🔴</span>
              <span class="today-card-label">Spent</span>
            </div>
            <div class="today-card-amount expense">${K(c.spent)}</div>
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
          ${l.length>0?fs(l,{showActions:!0,showDate:!0,accounts:Ct.accounts}):kb()}
        </div>
      </div>
    </div>
  `}function ym(n,t){const e=document.getElementById("btn-retry-dashboard");e&&(e.onclick=()=>{e.disabled=!0,e.innerHTML='<span class="spinner"></span> Loading...',t&&t()});const i=document.getElementById("empty-add-account-btn");i&&(i.onclick=()=>n("accounts")),document.querySelectorAll(".quick-nav-btn[data-page]").forEach(d=>{d.onclick=()=>n(d.dataset.page)});const s=document.getElementById("link-manage-accounts");s&&(s.onclick=()=>n("accounts"));const r=document.getElementById("link-view-all-tx");r&&(r.onclick=()=>n("transactions"));const o=document.getElementById("btn-quick-add-money");o&&(o.onclick=()=>Ni("INCOME",t));const a=document.getElementById("btn-quick-add-expense");a&&(a.onclick=()=>Ni("EXPENSE",t));const c=document.getElementById("btn-quick-transfer");c&&(c.onclick=()=>uh(t));const l=document.getElementById("empty-add-money-btn");l&&(l.onclick=()=>Ni("INCOME",t)),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(d=>{d.onclick=h=>{h.stopPropagation();const f=d.dataset.action,m=d.dataset.txId,y=Ct.transactions.find(_=>_.id===m);y&&(f==="edit"?y.type==="TRANSFER"?hh(y,t):dh(y,t):f==="delete"&&fh(y,t))}})}function Ni(n="INCOME",t){const e=n==="INCOME",i=e?lh:vo,s=Ct.accounts,r=Fs(),o=bb();if(!ob()){q.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const a=`
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
  `;Ee({title:e?"💰 Add Money":"💸 Add Expense",content:a,onOpen:c=>{const l=c.querySelector("#tx-modal-form"),d=c.querySelector("#tx-amount"),h=c.querySelector("#tx-account"),f=c.querySelector("#tx-insufficient-warning"),m=c.querySelector("#tx-insufficient-text"),y=()=>{var N,F;if(e)return;const _=h.value,v=Number(d.value)||0;if(!_||v<=0){f.style.display="none";return}const I=s.find(T=>T.id===_),{balances:k}=li(s,Ct.transactions),D=k[_]||0,M=(F=(N=Ct.profile)==null?void 0:N.settings)==null?void 0:F.allowNegativeBalance;v>D&&!M?(m.textContent=`⚠️ Insufficient Balance! Available in ${(I==null?void 0:I.name)||"account"}: ${K(D)}`,f.style.display="flex"):f.style.display="none"};d.oninput=y,h.onchange=y,l.onsubmit=async _=>{var S,x;_.preventDefault();const v=d.value,I=h.value,k=c.querySelector("#tx-date").value,D=c.querySelector("#tx-reason").value,M=c.querySelector("#tx-category").value,N=c.querySelector("#tx-notes").value;c.querySelector("#tx-amount-error").textContent="",c.querySelector("#tx-account-error").textContent="",c.querySelector("#tx-reason-error").textContent="",c.querySelector("#tx-category-error").textContent="";const F=ch(k);if(F){q.error(F);return}let T=!0;const b=yb({amount:v,date:k,reason:D,category:M},!0);if(b.isValid||(b.errors.amount&&(c.querySelector("#tx-amount-error").textContent=b.errors.amount),b.errors.reason&&(c.querySelector("#tx-reason-error").textContent=b.errors.reason),b.errors.category&&(c.querySelector("#tx-category-error").textContent=b.errors.category),T=!1),I||(c.querySelector("#tx-account-error").textContent="Please select an account.",T=!1),!T)return;if(!e){const P=s.find(ht=>ht.id===I),{balances:A}=li(s,Ct.transactions),ot=A[I]||0,et=(x=(S=Ct.profile)==null?void 0:S.settings)==null?void 0:x.allowNegativeBalance;if(Number(v)>ot&&!et){m.textContent=`⚠️ Insufficient Balance! Available in ${P==null?void 0:P.name}: ${K(ot)}`,f.style.display="flex",q.warning(`⚠️ You only have ${K(ot)} available in ${P==null?void 0:P.name}.`);return}}const E=c.querySelector("#btn-save-tx");E.disabled=!0,E.innerHTML='<span class="spinner"></span> Saving...';try{const P=Ct.user.uid,A={type:n,amount:Number(v),date:k,reason:D,category:M,notes:N};e?A.destinationAccountId=I:A.sourceAccountId=I,await nb(P,A),$t();const ot=s.find(et=>et.id===I);q.success(e?`💰 ${K(v)} added to ${(ot==null?void 0:ot.name)||"account"}!`:`💸 ${K(v)} spent from ${(ot==null?void 0:ot.name)||"account"}.`),t&&t()}catch(P){console.error("Error saving transaction:",P),q.error("Unable to save transaction."),E.disabled=!1,E.innerHTML=e?"💰 Add Money":"💸 Save Expense"}}}})}function uh(n){const t=Ct.accounts,e=Fs(),i=bb();if(!ob()){q.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const s=`
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
  `;Ee({title:"🔄 Transfer Money Between Accounts",content:s,onOpen:r=>{const o=r.querySelector("#transfer-modal-form"),a=r.querySelector("#tr-amount"),c=r.querySelector("#tr-from"),l=r.querySelector("#tr-insufficient-warning"),d=r.querySelector("#tr-insufficient-text"),h=()=>{const f=c.value,m=Number(a.value)||0;if(!f||m<=0){l.style.display="none";return}const{balances:y}=li(t,Ct.transactions),_=y[f]||0,v=t.find(I=>I.id===f);m>_?(d.textContent=`⚠️ Insufficient Balance! Available in ${v==null?void 0:v.name}: ${K(_)}`,l.style.display="flex"):l.style.display="none"};a.oninput=h,c.onchange=h,o.onsubmit=async f=>{f.preventDefault();const m=a.value,y=c.value,_=r.querySelector("#tr-to").value,v=r.querySelector("#tr-date").value,I=r.querySelector("#tr-reason").value,k=r.querySelector("#tr-notes").value,D=ch(v);if(D){q.error(D);return}r.querySelector("#tr-amount-error").textContent="",r.querySelector("#tr-from-error").textContent="",r.querySelector("#tr-to-error").textContent="",r.querySelector("#tr-reason-error").textContent="";let M=!0;const N=yo(m);N&&(r.querySelector("#tr-amount-error").textContent=N,M=!1),y||(r.querySelector("#tr-from-error").textContent="Select source account.",M=!1),_||(r.querySelector("#tr-to-error").textContent="Select destination account.",M=!1),y&&_&&y===_&&(r.querySelector("#tr-to-error").textContent="From and To accounts cannot be the same!",M=!1);const F=gb(I,"a reason");if(F&&(r.querySelector("#tr-reason-error").textContent=F,M=!1),!M)return;const{balances:T}=li(t,Ct.transactions),b=T[y]||0,E=t.find(P=>P.id===y),S=t.find(P=>P.id===_);if(Number(m)>b){d.textContent=`⚠️ Insufficient Balance! Available in ${E==null?void 0:E.name}: ${K(b)}`,l.style.display="flex",q.warning(`⚠️ You only have ${K(b)} available in ${E==null?void 0:E.name}.`);return}const x=r.querySelector("#btn-save-transfer");x.disabled=!0,x.innerHTML='<span class="spinner"></span> Transferring...';try{const P=Ct.user.uid;await nb(P,{type:"TRANSFER",amount:Number(m),date:v,reason:I,category:"Transfer",sourceAccountId:y,destinationAccountId:_,notes:k}),$t(),q.success(`🔄 Transferred ${K(m)} from ${E==null?void 0:E.name} to ${S==null?void 0:S.name}!`),n&&n()}catch(P){console.error("Error saving transfer:",P),q.error("Unable to complete transfer."),x.disabled=!1,x.innerHTML="🔄 Transfer Money"}}}})}function dh(n,t){const e=n.type==="INCOME",i=e?lh:vo,s=Ct.accounts,r=`
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
          📅 ${Uc(n.date)}
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
  `;Ee({title:"✏️ Edit Transaction",content:r,onOpen:o=>{o.querySelector("#edit-tx-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#edit-tx-amount").value,l=o.querySelector("#edit-tx-account").value,d=o.querySelector("#edit-tx-date").value,h=o.querySelector("#edit-tx-reason").value,f=o.querySelector("#edit-tx-category").value,m=o.querySelector("#edit-tx-notes").value;if(!yb({amount:c,date:d,reason:h,category:f},!1).isValid)return;const _=o.querySelector("#btn-update-tx");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Updating...';try{const v=Ct.user.uid,I={amount:Number(c),date:d,reason:h,category:f,notes:m};e?I.destinationAccountId=l:I.sourceAccountId=l,await ib(v,n.id,I),$t(),q.success("✅ Transaction updated!"),t&&t()}catch{q.error("Unable to update transaction."),_.disabled=!1,_.innerHTML="✅ Update Transaction"}}}})}function hh(n,t){const e=Ct.accounts,i=`
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
          📅 ${Uc(n.date)}
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
  `;Ee({title:"✏️ Edit Transfer",content:i,onOpen:s=>{s.querySelector("#edit-tr-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-tr-amount").value,a=s.querySelector("#edit-tr-from").value,c=s.querySelector("#edit-tr-to").value,l=s.querySelector("#edit-tr-date").value,d=s.querySelector("#edit-tr-reason").value,h=s.querySelector("#edit-tr-notes").value;if(a===c){q.error("From and To accounts cannot be the same!");return}const f=s.querySelector("#btn-update-tr");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Updating...';try{const m=Ct.user.uid;await ib(m,n.id,{amount:Number(o),date:l,reason:d,sourceAccountId:a,destinationAccountId:c,notes:h}),$t(),q.success("✅ Transfer updated!"),t&&t()}catch{q.error("Unable to update transfer."),f.disabled=!1,f.innerHTML="✅ Update Transfer"}}}})}async function fh(n,t){const e=n.type==="TRANSFER";if(await zi({icon:"🗑️",title:e?"Delete Transfer":"Delete Transaction",message:e?"Are you sure you want to delete this transfer? Both source and destination account balances will be restored.":"Are you sure you want to delete this transaction? Your account balances will automatically adjust.",confirmText:"Delete",danger:!0}))try{const s=Ct.user.uid;await zk(s,n.id),q.success("🗑️ Transaction deleted!"),t&&t()}catch{q.error("Unable to delete transaction.")}}let ti={user:null,profile:null,accounts:[],transactions:[]};function JC(n){ti={...ti,...n};const{accounts:t,transactions:e}=ti,{balances:i,totalMoney:s}=li(t,e);return`
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
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: var(--primary); margin-top: 4px;">${K(s)}</div>
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
                ${K(o)}
              </div>
              <div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-top: 4px;">
                Initial: ${K(r.initialBalance||0)}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function ZC(n){const t=document.getElementById("btn-add-account-modal");t&&(t.onclick=()=>tR(n)),document.querySelectorAll("[data-account-id]").forEach(e=>{e.onclick=()=>{const i=e.dataset.accountId,s=ti.accounts.find(r=>r.id===i);s&&eR(s,n)}})}function tR(n){Ee({title:"🏦 Add New Account",content:`
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
  `,onOpen:e=>{e.querySelector("#add-account-form").onsubmit=async i=>{i.preventDefault();const s=e.querySelector("#acc-name").value,r=e.querySelector("#acc-type").value,o=e.querySelector("#acc-initial").value,a=e.querySelector("#acc-last4").value,c=Bc(s),l=yo(o);if(c){e.querySelector("#acc-name-error").textContent=c;return}if(l){e.querySelector("#acc-initial-error").textContent=l;return}const d=e.querySelector("#btn-save-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Creating...';try{await Z_(ti.user.uid,{name:s,type:r,initialBalance:Number(o),last4Digits:a}),$t(),q.success(`🏦 ${s} account created!`),n&&n()}catch{q.error("Unable to create account."),d.disabled=!1,d.innerHTML="Create Account"}}}})}function eR(n,t){const e=zC(n,ti.transactions),i=`
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
          ${K(e.balance)}
        </div>
      </div>

      <!-- Account Breakdown Stats -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: var(--space-4);">
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Added</div>
          <div style="font-weight: var(--fw-bold); color: var(--income);">${K(e.totalAdded)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Spent</div>
          <div style="font-weight: var(--fw-bold); color: var(--expense);">${K(e.totalSpent)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred Out</div>
          <div style="font-weight: var(--fw-bold); color: var(--primary);">${K(e.totalTransferredOut)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred In</div>
          <div style="font-weight: var(--fw-bold); color: var(--info);">${K(e.totalTransferredIn)}</div>
        </div>
      </div>

      <h4 style="font-size: var(--fs-md); font-weight: var(--fw-bold); margin-bottom: var(--space-2);">Account Transactions</h4>
      <div style="max-height: 250px; overflow-y: auto;">
        ${e.transactions.length>0?fs(e.transactions,{showActions:!1,showDate:!0}):'<div style="font-size: var(--fs-sm); color: var(--text-tertiary); text-align: center; padding: 16px;">No transactions for this account.</div>'}
      </div>
    </div>
  `;Ee({title:"Account Details",content:i,footer:`
    <button class="btn btn-outline btn-sm" id="btn-edit-account">✏️ Edit Account</button>
    <button class="btn btn-danger btn-sm" id="btn-delete-account">🗑️ Delete Account</button>
  `,onOpen:r=>{r.querySelector("#btn-edit-account").onclick=()=>{$t(),nR(n,t)},r.querySelector("#btn-delete-account").onclick=async()=>{if($t(),await zi({icon:"🗑️",title:"Delete Account",message:`Are you sure you want to delete ${n.name}? Transactions assigned to this account will remain in history.`,danger:!0}))try{await Bk(ti.user.uid,n.id),q.success(`Account ${n.name} deleted.`),t&&t()}catch{q.error("Unable to delete account.")}}}})}function nR(n,t){const e=`
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
  `;Ee({title:"✏️ Edit Account",content:e,onOpen:i=>{i.querySelector("#edit-account-form").onsubmit=async s=>{s.preventDefault();const r=i.querySelector("#edit-acc-name").value,o=i.querySelector("#edit-acc-type").value,a=i.querySelector("#edit-acc-initial").value,c=i.querySelector("#edit-acc-last4").value,l=Bc(r);if(l){i.querySelector("#edit-acc-name-error").textContent=l;return}const d=i.querySelector("#btn-update-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Updating...';try{await Fk(ti.user.uid,n.id,{name:r,type:o,initialBalance:Number(a),last4Digits:c}),$t(),q.success("Account updated!"),t&&t()}catch{q.error("Unable to update account."),d.disabled=!1,d.innerHTML="Update Account"}}}})}let Fe={user:null,profile:null,accounts:[],transactions:[]},Z={searchQuery:"",typeFilter:"ALL",accountFilter:"ALL",dateFilter:"ALL",customDate:"",categoryFilter:"ALL"};function Cb(n){Fe={...Fe,...n};const t=Db(),e=[...vo.map(i=>i.value),...lh.map(i=>i.value)];return`
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
          <input type="text" id="tx-search-input" class="form-input" placeholder="Search by reason, category, account, or notes..." value="${Z.searchQuery}" />
          <button class="search-clear ${Z.searchQuery?"visible":""}" id="tx-search-clear">✕</button>
        </div>

        <!-- Filter Chips: Type -->
        <div class="chips-scroll" style="margin-bottom: var(--space-3);">
          <button class="chip ${Z.typeFilter==="ALL"?"active":""}" data-filter-type="ALL">All (${Fe.transactions.length})</button>
          <button class="chip chip-income ${Z.typeFilter==="INCOME"?"active":""}" data-filter-type="INCOME">🟢 Money Added</button>
          <button class="chip chip-expense ${Z.typeFilter==="EXPENSE"?"active":""}" data-filter-type="EXPENSE">🔴 Expenses</button>
          <button class="chip ${Z.typeFilter==="TRANSFER"?"active":""}" data-filter-type="TRANSFER" style="${Z.typeFilter==="TRANSFER"?"background: var(--primary); color: white;":""}">🔄 Transfers</button>
        </div>

        <!-- Dropdowns: Account, Category, & Date Filters -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <select id="tx-account-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Accounts</option>
            ${Fe.accounts.map(i=>`
              <option value="${i.id}" ${Z.accountFilter===i.id?"selected":""}>${i.icon||"🏦"} ${i.name}</option>
            `).join("")}
          </select>

          <div class="chips-scroll" style="margin-bottom: 0;">
            <button class="chip ${Z.dateFilter==="ALL"?"active":""}" data-filter-date="ALL">All Time</button>
            <button class="chip ${Z.dateFilter==="TODAY"?"active":""}" data-filter-date="TODAY">Today</button>
            <button class="chip ${Z.dateFilter==="WEEK"?"active":""}" data-filter-date="WEEK">This Week</button>
            <button class="chip ${Z.dateFilter==="MONTH"?"active":""}" data-filter-date="MONTH">This Month</button>
            <button class="chip ${Z.dateFilter==="CUSTOM"?"active":""}" data-filter-date="CUSTOM">Custom Date</button>
          </div>

          ${Z.dateFilter==="CUSTOM"?`
            <input type="date" id="tx-custom-date" class="form-input" style="width: auto; min-height: 36px; padding: 4px 8px; font-size: 13px;" value="${Z.customDate}" />
          `:""}

          <select id="tx-category-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Categories</option>
            ${Array.from(new Set(e)).map(i=>`
              <option value="${i}" ${Z.categoryFilter===i?"selected":""}>${i}</option>
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
        ${Rb(t)}
      </div>
    </div>
  `}function Rb(n){return Fe.transactions.length===0?kb():n.length===0?XC():fs(n,{showActions:!0,showDate:!0,showNotes:!0,accounts:Fe.accounts})}function Db(){let n=[...Fe.transactions];if(Z.searchQuery){const e=Z.searchQuery.toLowerCase();n=n.filter(i=>{const s=Fe.accounts.find(o=>o.id===i.sourceAccountId),r=Fe.accounts.find(o=>o.id===i.destinationAccountId);return i.reason&&i.reason.toLowerCase().includes(e)||i.category&&i.category.toLowerCase().includes(e)||i.notes&&i.notes.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)||r&&r.name.toLowerCase().includes(e)})}if(Z.typeFilter!=="ALL"&&(n=n.filter(e=>e.type===Z.typeFilter)),Z.accountFilter!=="ALL"){const e=Z.accountFilter;n=n.filter(i=>i.sourceAccountId===e||i.destinationAccountId===e)}const t=Fs();if(Z.dateFilter==="TODAY")n=n.filter(e=>e.date===t);else if(Z.dateFilter==="WEEK"){const{start:e,end:i}=Eb(t);n=n.filter(s=>s.date>=e&&s.date<=i)}else if(Z.dateFilter==="MONTH"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;n=n.filter(i=>i.date&&i.date.startsWith(e))}else Z.dateFilter==="CUSTOM"&&Z.customDate&&(n=n.filter(e=>e.date===Z.customDate));return Z.categoryFilter!=="ALL"&&(n=n.filter(e=>e.category===Z.categoryFilter)),n}function Mb(n){const t=()=>{const d=document.getElementById("tx-list-container");if(d){const h=Db();d.innerHTML=Rb(h),vm(n)}},e=document.getElementById("tx-search-input"),i=document.getElementById("tx-search-clear");e&&(e.oninput=d=>{Z.searchQuery=d.target.value,i&&i.classList.toggle("visible",!!Z.searchQuery),t()}),i&&(i.onclick=()=>{Z.searchQuery="",e&&(e.value=""),i.classList.remove("visible"),t()}),document.querySelectorAll("[data-filter-type]").forEach(d=>{d.onclick=()=>{document.querySelectorAll("[data-filter-type]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),Z.typeFilter=d.dataset.filterType,t()}});const s=document.getElementById("tx-account-filter");s&&(s.onchange=d=>{Z.accountFilter=d.target.value,t()}),document.querySelectorAll("[data-filter-date]").forEach(d=>{d.onclick=()=>{if(document.querySelectorAll("[data-filter-date]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),Z.dateFilter=d.dataset.filterDate,Z.dateFilter==="CUSTOM"){const h=document.querySelector(".page");h&&(h.outerHTML=Cb(Fe),Mb(n))}else t()}});const r=document.getElementById("tx-custom-date");r&&(r.onchange=d=>{Z.customDate=d.target.value,t()});const o=document.getElementById("tx-category-filter");o&&(o.onchange=d=>{Z.categoryFilter=d.target.value,t()});const a=document.getElementById("btn-tx-add-income");a&&(a.onclick=()=>Ni("INCOME",n));const c=document.getElementById("btn-tx-add-expense");c&&(c.onclick=()=>Ni("EXPENSE",n));const l=document.getElementById("btn-tx-transfer");l&&(l.onclick=()=>uh(n)),vm(n)}function vm(n){document.querySelectorAll("#tx-list-container .transaction-action-btn[data-action]").forEach(t=>{t.onclick=e=>{e.stopPropagation();const i=t.dataset.action,s=t.dataset.txId,r=Fe.transactions.find(o=>o.id===s);r&&(i==="edit"?r.type==="TRANSFER"?hh(r,n):dh(r,n):i==="delete"&&fh(r,n))}})}let Pe={user:null,profile:null,accounts:[],transactions:[]},hn="DAY",dr=Fs(),Tu=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;function Ea(n){Pe={...Pe,...n};let t="",e="";if(hn==="DAY"){const i=Ab(Pe.transactions,dr);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Added</div>
          <div class="daily-summary-value income">${K(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Spent</div>
          <div class="daily-summary-value expense">${K(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${K(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Change</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${K(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?fs(i.transactions,{showActions:!0,showDate:!1,accounts:Pe.accounts}):Nl()}else if(hn==="WEEK"){const i=GC(Pe.transactions,dr);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Income</div>
          <div class="daily-summary-value income">${K(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Expenses</div>
          <div class="daily-summary-value expense">${K(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${K(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${K(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?fs(i.transactions,{showActions:!0,showDate:!0,accounts:Pe.accounts}):Nl()}else if(hn==="MONTH"){const i=Sb(Pe.transactions,Tu);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Income</div>
          <div class="daily-summary-value income">${K(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Expenses</div>
          <div class="daily-summary-value expense">${K(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${K(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${K(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?fs(i.transactions,{showActions:!0,showDate:!0,accounts:Pe.accounts}):Nl()}return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Date-wise Money Control 📅</h1>
        <p class="page-subtitle">Track income, expenses, and account transfers on any specific date.</p>
      </div>

      <!-- View Switcher Tabs -->
      <div class="tabs">
        <div class="tab ${hn==="DAY"?"active":""}" data-view="DAY">Day View</div>
        <div class="tab ${hn==="WEEK"?"active":""}" data-view="WEEK">Week View</div>
        <div class="tab ${hn==="MONTH"?"active":""}" data-view="MONTH">Month View</div>
      </div>

      <!-- Date Controls -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        ${hn==="MONTH"?`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <label class="form-label" style="margin: 0; font-weight: var(--fw-semibold);">Select Month:</label>
            <input type="month" id="mc-month-picker" class="form-input" style="width: auto;" value="${Tu}" />
          </div>
        `:`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <span style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">
                ${hn==="DAY"?"Selected Date":"Week Containing"}
              </span>
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${VC(dr)}</div>
            </div>
            <input type="date" id="mc-date-picker" class="form-input" style="width: auto;" value="${dr}" />
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
  `}function Ia(n){document.querySelectorAll(".tab[data-view]").forEach(i=>{i.onclick=()=>{hn=i.dataset.view;const s=document.querySelector(".page");s&&(s.outerHTML=Ea(Pe),Ia(n))}});const t=document.getElementById("mc-date-picker");t&&(t.onchange=i=>{dr=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=Ea(Pe),Ia(n))});const e=document.getElementById("mc-month-picker");e&&(e.onchange=i=>{Tu=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=Ea(Pe),Ia(n))}),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(i=>{i.onclick=s=>{s.stopPropagation();const r=i.dataset.action,o=i.dataset.txId,a=Pe.transactions.find(c=>c.id===o);a&&(r==="edit"?a.type==="TRANSFER"?hh(a,n):dh(a,n):r==="delete"&&fh(a,n))}})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function _o(n){return n+.5|0}const zn=(n,t,e)=>Math.max(Math.min(n,e),t);function hr(n){return zn(_o(n*2.55),0,255)}function ei(n){return zn(_o(n*255),0,255)}function mn(n){return zn(_o(n/2.55)/100,0,1)}function _m(n){return zn(_o(n*100),0,100)}const xe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Au=[..."0123456789ABCDEF"],iR=n=>Au[n&15],sR=n=>Au[(n&240)>>4]+Au[n&15],Xo=n=>(n&240)>>4===(n&15),rR=n=>Xo(n.r)&&Xo(n.g)&&Xo(n.b)&&Xo(n.a);function oR(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&xe[n[1]]*17,g:255&xe[n[2]]*17,b:255&xe[n[3]]*17,a:t===5?xe[n[4]]*17:255}:(t===7||t===9)&&(e={r:xe[n[1]]<<4|xe[n[2]],g:xe[n[3]]<<4|xe[n[4]],b:xe[n[5]]<<4|xe[n[6]],a:t===9?xe[n[7]]<<4|xe[n[8]]:255})),e}const aR=(n,t)=>n<255?t(n):"";function cR(n){var t=rR(n)?iR:sR;return n?"#"+t(n.r)+t(n.g)+t(n.b)+aR(n.a,t):void 0}const lR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ob(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function uR(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function dR(n,t,e){const i=Ob(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function hR(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function ph(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=hR(e,i,s,d,r),c=c*60+.5),[c|0,l||0,a]}function mh(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(ei)}function gh(n,t,e){return mh(Ob,n,t,e)}function fR(n,t,e){return mh(dR,n,t,e)}function pR(n,t,e){return mh(uR,n,t,e)}function Nb(n){return(n%360+360)%360}function mR(n){const t=lR.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?hr(+t[5]):ei(+t[5]));const s=Nb(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=fR(s,r,o):t[1]==="hsv"?i=pR(s,r,o):i=gh(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function gR(n,t){var e=ph(n);e[0]=Nb(e[0]+t),e=gh(e),n.r=e[0],n.g=e[1],n.b=e[2]}function yR(n){if(!n)return;const t=ph(n),e=t[0],i=_m(t[1]),s=_m(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${mn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const bm={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},wm={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function vR(){const n={},t=Object.keys(wm),e=Object.keys(bm);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,bm[r]);r=parseInt(wm[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Qo;function _R(n){Qo||(Qo=vR(),Qo.transparent=[0,0,0,0]);const t=Qo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const bR=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function wR(n){const t=bR.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?hr(o):zn(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?hr(i):zn(i,0,255)),s=255&(t[4]?hr(s):zn(s,0,255)),r=255&(t[6]?hr(r):zn(r,0,255)),{r:i,g:s,b:r,a:e}}}function ER(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${mn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Ll=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,ts=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function IR(n,t,e){const i=ts(mn(n.r)),s=ts(mn(n.g)),r=ts(mn(n.b));return{r:ei(Ll(i+e*(ts(mn(t.r))-i))),g:ei(Ll(s+e*(ts(mn(t.g))-s))),b:ei(Ll(r+e*(ts(mn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Jo(n,t,e){if(n){let i=ph(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=gh(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function Lb(n,t){return n&&Object.assign(t||{},n)}function Em(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=ei(n[3]))):(t=Lb(n,{r:0,g:0,b:0,a:1}),t.a=ei(t.a)),t}function TR(n){return n.charAt(0)==="r"?wR(n):mR(n)}class Gr{constructor(t){if(t instanceof Gr)return t;const e=typeof t;let i;e==="object"?i=Em(t):e==="string"&&(i=oR(t)||_R(t)||TR(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Lb(this._rgb);return t&&(t.a=mn(t.a)),t}set rgb(t){this._rgb=Em(t)}rgbString(){return this._valid?ER(this._rgb):void 0}hexString(){return this._valid?cR(this._rgb):void 0}hslString(){return this._valid?yR(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=IR(this._rgb,t._rgb,e)),this}clone(){return new Gr(this.rgb)}alpha(t){return this._rgb.a=ei(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=_o(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Jo(this._rgb,2,t),this}darken(t){return Jo(this._rgb,2,-t),this}saturate(t){return Jo(this._rgb,1,t),this}desaturate(t){return Jo(this._rgb,1,-t),this}rotate(t){return gR(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function dn(){}const AR=(()=>{let n=0;return()=>n++})();function nt(n){return n==null}function It(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function rt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Dt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Te(n,t){return Dt(n)?n:t}function Q(n,t){return typeof n>"u"?t:n}const SR=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Vb=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function gt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function dt(n,t,e,i){let s,r,o;if(It(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(rt(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function nc(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function ic(n){if(It(n))return n.map(ic);if(rt(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=ic(n[e[s]]);return t}return n}function Fb(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function xR(n,t,e,i){if(!Fb(n))return;const s=t[n],r=e[n];rt(s)&&rt(r)?Kr(s,r,i):t[n]=ic(r)}function Kr(n,t,e){const i=It(t)?t:[t],s=i.length;if(!rt(n))return n;e=e||{};const r=e.merger||xR;let o;for(let a=0;a<s;++a){if(o=i[a],!rt(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function Pr(n,t){return Kr(n,t,{merger:PR})}function PR(n,t,e){if(!Fb(n))return;const i=t[n],s=e[n];rt(i)&&rt(s)?Pr(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=ic(s))}const Im={"":n=>n,x:n=>n.x,y:n=>n.y};function kR(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function CR(n){const t=kR(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function ui(n,t){return(Im[t]||(Im[t]=CR(t)))(n)}function yh(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Yr=n=>typeof n<"u",di=n=>typeof n=="function",Tm=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function RR(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const lt=Math.PI,bt=2*lt,DR=bt+lt,sc=Number.POSITIVE_INFINITY,MR=lt/180,Nt=lt/2,wi=lt/4,Am=lt*2/3,jn=Math.log10,tn=Math.sign;function kr(n,t,e){return Math.abs(n-t)<e}function Sm(n){const t=Math.round(n);n=kr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(jn(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function OR(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function NR(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Is(n){return!NR(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function LR(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Bb(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Be(n){return n*(lt/180)}function vh(n){return n*(180/lt)}function xm(n){if(!Dt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Ub(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*lt&&(r+=bt),{angle:r,distance:s}}function Su(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function VR(n,t){return(n-t+DR)%bt-lt}function oe(n){return(n%bt+bt)%bt}function Xr(n,t,e,i){const s=oe(n),r=oe(t),o=oe(e),a=oe(r-s),c=oe(o-s),l=oe(s-r),d=oe(s-o);return s===r||s===o||i&&r===o||a>c&&l<d}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function FR(n){return qt(n,-32768,32767)}function En(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function _h(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const In=(n,t,e,i)=>_h(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),BR=(n,t,e)=>_h(n,e,i=>n[i][t]>=e);function UR(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const $b=["push","pop","shift","splice","unshift"];function $R(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),$b.forEach(e=>{const i="_onData"+yh(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Pm(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&($b.forEach(r=>{delete n[r]}),delete n._chartjs)}function zb(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const jb=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function Hb(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,jb.call(window,()=>{i=!1,n.apply(t,e)}))}}function zR(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const bh=n=>n==="start"?"left":n==="end"?"right":"center",se=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,jR=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function qb(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:y}=o.getUserBounds();if(m){if(s=Math.min(In(c,d,h).lo,e?i:In(t,d,o.getPixelForValue(h)).lo),l){const _=c.slice(0,s+1).reverse().findIndex(v=>!nt(v[a.axis]));s-=Math.max(0,_)}s=qt(s,0,i-1)}if(y){let _=Math.max(In(c,o.axis,f,!0).hi+1,e?0:In(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const v=c.slice(_-1).findIndex(I=>!nt(I[a.axis]));_+=Math.max(0,v)}r=qt(_,s,i)-s}else r=i-s}return{start:s,count:r}}function Wb(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const Zo=n=>n===0||n===1,km=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*bt/e)),Cm=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*bt/e)+1,Cr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Nt)+1,easeOutSine:n=>Math.sin(n*Nt),easeInOutSine:n=>-.5*(Math.cos(lt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Zo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Zo(n)?n:km(n,.075,.3),easeOutElastic:n=>Zo(n)?n:Cm(n,.075,.3),easeInOutElastic(n){return Zo(n)?n:n<.5?.5*km(n*2,.1125,.45):.5+.5*Cm(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Cr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Cr.easeInBounce(n*2)*.5:Cr.easeOutBounce(n*2-1)*.5+.5};function wh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Rm(n){return wh(n)?n:new Gr(n)}function Vl(n){return wh(n)?n:new Gr(n).saturate(.5).darken(.1).hexString()}const HR=["x","y","borderWidth","radius","tension"],qR=["color","borderColor","backgroundColor"];function WR(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:qR},numbers:{type:"number",properties:HR}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function GR(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Dm=new Map;function KR(n,t){t=t||{};const e=n+JSON.stringify(t);let i=Dm.get(e);return i||(i=new Intl.NumberFormat(n,t),Dm.set(e,i)),i}function bo(n,t,e){return KR(t,e).format(n)}const Gb={values(n){return It(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=YR(n,e)}const o=jn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),bo(n,i,c)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(jn(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Gb.numeric.call(this,n,t,e):""}};function YR(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var $c={formatters:Gb};function XR(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:$c.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ji=Object.create(null),xu=Object.create(null);function Rr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function Fl(n,t,e){return typeof t=="string"?Kr(Rr(n,t),e):Kr(Rr(n,""),t)}class QR{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Vl(s.backgroundColor),this.hoverBorderColor=(i,s)=>Vl(s.borderColor),this.hoverColor=(i,s)=>Vl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Fl(this,t,e)}get(t){return Rr(this,t)}describe(t,e){return Fl(xu,t,e)}override(t,e){return Fl(ji,t,e)}route(t,e,i,s){const r=Rr(this,t),o=Rr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[s];return rt(c)?Object.assign({},l,c):Q(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Tt=new QR({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[WR,GR,XR]);function JR(n){return!n||nt(n.size)||nt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function rc(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function ZR(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!It(h))o=rc(n,s,r,o,h);else if(It(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!It(f)&&(o=rc(n,s,r,o,f));n.restore();const m=r.length/2;if(m>e.length){for(c=0;c<m;c++)delete s[r[c]];r.splice(0,m)}return o}function Ei(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Mm(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Pu(n,t,e,i){Kb(n,t,e,i,null)}function Kb(n,t,e,i,s){let r,o,a,c,l,d,h,f;const m=t.pointStyle,y=t.rotation,_=t.radius;let v=(y||0)*MR;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(v),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),m){default:s?n.ellipse(e,i,s/2,_,0,0,bt):n.arc(e,i,_,0,bt),n.closePath();break;case"triangle":d=s?s/2:_,n.moveTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=Am,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=Am,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),n.closePath();break;case"rectRounded":l=_*.516,c=_-l,o=Math.cos(v+wi)*c,h=Math.cos(v+wi)*(s?s/2-l:c),a=Math.sin(v+wi)*c,f=Math.sin(v+wi)*(s?s/2-l:c),n.arc(e-h,i-a,l,v-lt,v-Nt),n.arc(e+f,i-o,l,v-Nt,v),n.arc(e+h,i+a,l,v,v+Nt),n.arc(e-f,i+o,l,v+Nt,v+lt),n.closePath();break;case"rect":if(!y){c=Math.SQRT1_2*_,d=s?s/2:c,n.rect(e-d,i-c,2*d,2*c);break}v+=wi;case"rectRot":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+f,i-o),n.lineTo(e+h,i+a),n.lineTo(e-f,i+o),n.closePath();break;case"crossRot":v+=wi;case"cross":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"star":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o),v+=wi,h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"line":o=s?s/2:Math.cos(v)*_,a=Math.sin(v)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(v)*(s?s/2:_),i+Math.sin(v)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Tn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function zc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function jc(n){n.restore()}function tD(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function eD(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function nD(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),nt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function iD(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=s.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function sD(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Hi(n,t,e,i,s,r={}){const o=It(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=s.string,nD(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&sD(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),nt(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,i,r.maxWidth)),n.fillText(l,e,i,r.maxWidth),iD(n,e,i,l,r),i+=Number(s.lineHeight);n.restore()}function Qr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*lt,lt,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,lt,Nt,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Nt,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Nt,!0),n.lineTo(e+o.topLeft,i)}const rD=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,oD=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function aD(n,t){const e=(""+n).match(rD);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const cD=n=>+n||0;function Eh(n,t){const e={},i=rt(t),s=i?Object.keys(t):t,r=rt(n)?i?o=>Q(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=cD(r(o));return e}function Yb(n){return Eh(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Li(n){return Eh(n,["topLeft","topRight","bottomLeft","bottomRight"])}function ue(n){const t=Yb(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function zt(n,t){n=n||{},t=t||Tt.font;let e=Q(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Q(n.style,t.style);i&&!(""+i).match(oD)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Q(n.family,t.family),lineHeight:aD(Q(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Q(n.weight,t.weight),string:""};return s.string=JR(s),s}function fr(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function lD(n,t,e){const{min:i,max:s}=n,r=Vb(t,(s-i)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function gi(n,t){return Object.assign(Object.create(n),t)}function Ih(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=Zb("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Ih([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Qb(a,c,()=>yD(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Nm(a).includes(c)},ownKeys(a){return Nm(a)},set(a,c,l){const d=a._storage||(a._storage=s());return a[c]=d[c]=l,delete a._keys,!0}})}function Ts(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Xb(n,i),setContext:r=>Ts(n,r,e,i),override:r=>Ts(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Qb(r,o,()=>dD(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function Xb(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:di(e)?e:()=>e,isIndexable:di(i)?i:()=>i}}const uD=(n,t)=>n?n+yh(t):t,Th=(n,t)=>rt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Qb(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function dD(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return di(a)&&o.isScriptable(t)&&(a=hD(t,a,n,e)),It(a)&&a.length&&(a=fD(t,a,n,o.isIndexable)),Th(t,a)&&(a=Ts(a,s,r&&r[t],o)),a}function hD(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||i);return a.delete(n),Th(n,c)&&(c=Ah(s._scopes,s,n,c)),c}function fD(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(rt(t[0])){const c=t,l=s._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=Ah(l,s,n,d);t.push(Ts(h,r,o&&o[n],a))}}return t}function Jb(n,t,e){return di(n)?n(t,e):n}const pD=(n,t)=>n===!0?t:typeof n=="string"?ui(t,n):void 0;function mD(n,t,e,i,s){for(const r of t){const o=pD(e,r);if(o){n.add(o);const a=Jb(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function Ah(n,t,e,i){const s=t._rootScopes,r=Jb(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let c=Om(a,o,e,r||e,i);return c===null||typeof r<"u"&&r!==e&&(c=Om(a,o,r,c,i),c===null)?!1:Ih(Array.from(a),[""],s,r,()=>gD(t,e,i))}function Om(n,t,e,i,s){for(;e;)e=mD(n,t,e,i,s);return e}function gD(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return It(s)&&rt(e)?e:s||{}}function yD(n,t,e,i){let s;for(const r of t)if(s=Zb(uD(r,n),e),typeof s<"u")return Th(n,s)?Ah(e,i,n,s):s}function Zb(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function Nm(n){let t=n._keys;return t||(t=n._keys=vD(n._scopes)),t}function vD(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function tw(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,d;for(a=0,c=i;a<c;++a)l=a+e,d=t[l],o[a]={r:s.parse(ui(d,r),l)};return o}const _D=Number.EPSILON||1e-14,As=(n,t)=>t<n.length&&!n[t].skip&&n[t],ew=n=>n==="x"?"y":"x";function bD(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Su(r,s),c=Su(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=i*l,f=i*d;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function wD(n,t,e){const i=n.length;let s,r,o,a,c,l=As(n,0);for(let d=0;d<i-1;++d)if(c=l,l=As(n,d+1),!(!c||!l)){if(kr(t[d],0,_D)){e[d]=e[d+1]=0;continue}s=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=s*o*t[d],e[d+1]=r*o*t[d])}}function ED(n,t,e="x"){const i=ew(e),s=n.length;let r,o,a,c=As(n,0);for(let l=0;l<s;++l){if(o=a,a=c,c=As(n,l+1),!a)continue;const d=a[e],h=a[i];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${i}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${i}`]=h+r*t[l])}}function ID(n,t="x"){const e=ew(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=As(n,0);for(o=0;o<i;++o)if(a=c,c=l,l=As(n,o+1),!!c){if(l){const d=l[t]-c[t];s[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?tn(s[o-1])!==tn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}wD(n,s,r),ED(n,r,t)}function ta(n,t,e){return Math.max(Math.min(n,e),t)}function TD(n,t){let e,i,s,r,o,a=Tn(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&Tn(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=ta(s.cp1x,t.left,t.right),s.cp1y=ta(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=ta(s.cp2x,t.left,t.right),s.cp2y=ta(s.cp2y,t.top,t.bottom)))}function AD(n,t,e,i,s){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")ID(n,s);else{let l=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=bD(l,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&TD(n,e)}function Sh(){return typeof window<"u"&&typeof document<"u"}function xh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function oc(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const Hc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function SD(n,t){return Hc(n).getPropertyValue(t)}const xD=["top","right","bottom","left"];function Vi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=xD[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const PD=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function kD(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(PD(s,r,n.target))a=s,c=r;else{const l=t.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Si(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=Hc(e),r=s.boxSizing==="border-box",o=Vi(s,"padding"),a=Vi(s,"border","width"),{x:c,y:l,box:d}=kD(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:y}=t;return r&&(m-=o.width+a.width,y-=o.height+a.height),{x:Math.round((c-h)/m*e.width/i),y:Math.round((l-f)/y*e.height/i)}}function CD(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&xh(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Hc(r),c=Vi(a,"border","width"),l=Vi(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,i=oc(a.maxWidth,r,"clientWidth"),s=oc(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||sc,maxHeight:s||sc}}const Hn=n=>Math.round(n*10)/10;function RD(n,t,e,i){const s=Hc(n),r=Vi(s,"margin"),o=oc(s.maxWidth,n,"clientWidth")||sc,a=oc(s.maxHeight,n,"clientHeight")||sc,c=CD(n,t,e);let{width:l,height:d}=c;if(s.boxSizing==="content-box"){const f=Vi(s,"border","width"),m=Vi(s,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,i?l/i:d-r.height),l=Hn(Math.min(l,o,c.maxWidth)),d=Hn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=Hn(l/2)),(t!==void 0||e!==void 0)&&i&&c.height&&d>c.height&&(d=c.height,l=Hn(Math.floor(d*i))),{width:l,height:d}}function Lm(n,t,e){const i=t||1,s=Hn(n.height*i),r=Hn(n.width*i);n.height=Hn(n.height),n.width=Hn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const DD=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Sh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Vm(n,t){const e=SD(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function xi(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function MD(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function OD(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=xi(n,s,e),a=xi(s,r,e),c=xi(r,t,e),l=xi(o,a,e),d=xi(a,c,e);return xi(l,d,e)}const ND=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},LD=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function ps(n,t,e){return n?ND(t,e):LD()}function nw(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function iw(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function sw(n){return n==="angle"?{between:Xr,compare:VR,normalize:oe}:{between:En,compare:(t,e)=>t-e,normalize:t=>t}}function Fm({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function VD(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=sw(i),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][i]),s,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function rw(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=sw(i),{start:d,end:h,loop:f,style:m}=VD(n,t,e),y=[];let _=!1,v=null,I,k,D;const M=()=>c(s,D,I)&&a(s,D)!==0,N=()=>a(r,I)===0||c(r,D,I),F=()=>_||M(),T=()=>!_||N();for(let b=d,E=d;b<=h;++b)k=t[b%o],!k.skip&&(I=l(k[i]),I!==D&&(_=c(I,s,r),v===null&&F()&&(v=a(I,s)===0?b:E),v!==null&&T()&&(y.push(Fm({start:v,end:b,loop:f,count:o,style:m})),v=null),E=b,D=I));return v!==null&&y.push(Fm({start:v,end:h,loop:f,count:o,style:m})),y}function ow(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=rw(i[s],n.points,t);r.length&&e.push(...r)}return e}function FD(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function BD(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:t%s,end:(c-1)%s,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function UD(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=FD(e,s,r,i);if(i===!0)return Bm(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+s:a,l=!!n._fullLoop&&o===0&&a===s-1;return Bm(n,BD(e,o,c,l),e,t)}function Bm(n,t,e,i){return!i||!i.setContext||!e?t:$D(n,t,e,i)}function $D(n,t,e,i){const s=n._chart.getContext(),r=Um(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function m(y,_,v,I){const k=a?-1:1;if(y!==_){for(y+=c;e[y%c].skip;)y-=k;for(;e[_%c].skip;)_+=k;y%c!==_%c&&(l.push({start:y%c,end:_%c,loop:v,style:I}),d=I,h=_%c)}}for(const y of t){h=a?h:y.start;let _=e[h%c],v;for(f=h+1;f<=y.end;f++){const I=e[f%c];v=Um(i.setContext(gi(s,{type:"segment",p0:_,p1:I,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),zD(v,d)&&m(h,f-1,y.loop,d),_=I,d=v}h<f-1&&m(h,f-1,y.loop,d)}return l}function Um(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function zD(n,t){if(!t)return!1;const e=[],i=function(s,r){return wh(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function ea(n,t,e){return n.options.clip?n[e]:t[e]}function jD(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:ea(e,t,"left"),right:ea(e,t,"right"),top:ea(i,t,"top"),bottom:ea(i,t,"bottom")}:t}function aw(n,t){const e=t._clip;if(e.disabled)return!1;const i=jD(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class HD{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=jb.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var fn=new HD;const $m="transparent",qD={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Rm(n||$m),s=i.valid&&Rm(t||$m);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class WD{constructor(t,e,i,s){const r=e[i];s=fr([t.to,s,r,t.from]);const o=fr([t.from,r,s]);this._active=!0,this._fn=t.fn||qD[t.type||typeof o],this._easing=Cr[t.easing]||Cr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=fr([t.to,e,s,t.from]),this._from=fr([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}c=e/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class cw{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!rt(t))return;const e=Object.keys(Tt.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!rt(r))return;const o={};for(const a of e)o[a]=r[a];(It(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=KD(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&GD(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new WD(f,t,l,d),s.push(h)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return fn.add(this._chart,i),!0}}function GD(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function KD(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function zm(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function YD(n,t,e){if(e===!1)return!1;const i=zm(n,e),s=zm(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function XD(n){let t,e,i,s;return rt(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function lw(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function jm(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===e){if(d=!0,i.all)continue;break}l=n.values[c],Dt(l)&&(r||t===0||tn(t)===tn(l))&&(t+=l)}return!d&&!i.all?0:t}function QD(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[s]:d,[r]:n[d]};return a}function Bl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function JD(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function ZD(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function tM(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Hm(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function qm(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,d=JD(r,o,i),h=t.length;let f;for(let m=0;m<h;++m){const y=t[m],{[c]:_,[l]:v}=y,I=y._stacks||(y._stacks={});f=I[l]=tM(s,d,_),f[a]=v,f._top=Hm(f,o,!0,i.type),f._bottom=Hm(f,o,!1,i.type);const k=f._visualValues||(f._visualValues={});k[a]=v}}function Ul(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function eM(n,t){return gi(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function nM(n,t,e){return gi(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Zs(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const $l=n=>n==="reset"||n==="none",Wm=(n,t)=>t?n:Object.assign({},n),iM=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:lw(e,!0),values:null};class Ue{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Bl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Zs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(h,f,m,y)=>h==="x"?f:h==="r"?y:m,r=e.xAxisID=Q(i.xAxisID,Ul(t,"x")),o=e.yAxisID=Q(i.yAxisID,Ul(t,"y")),a=e.rAxisID=Q(i.rAxisID,Ul(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),d=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Pm(this._data,this),t._stacked&&Zs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(rt(e)){const s=this._cachedMeta;this._data=QD(e,s)}else if(i!==e){if(i){Pm(i,this);const s=this._cachedMeta;Zs(s),s._parsed=[]}e&&Object.isExtensible(e)&&$R(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=Bl(e.vScale,e),e.stack!==i.stack&&(s=!0,Zs(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(qm(this,e._parsed),e._stacked=Bl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=t===0&&e===s.length?!0:i._sorted,l=t>0&&i._parsed[t-1],d,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{It(s[t])?f=this.parseArrayData(i,s,t,e):rt(s[t])?f=this.parseObjectData(i,s,t,e):f=this.parsePrimitiveData(i,s,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)i._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);i._sorted=c}o&&qm(this,f)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(s);let f,m,y;for(f=0,m=s;f<m;++f)y=f+i,h[f]={[a]:d||r.parse(l[y],y),[c]:o.parse(e[y],y)};return h}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let c,l,d,h;for(c=0,l=s;c<l;++c)d=c+i,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let d,h,f,m;for(d=0,h=s;d<h;++d)f=d+i,m=e[f],l[d]={x:r.parse(ui(m,a),f),y:o.parse(ui(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:lw(s,!0),values:e._stacks[t.axis]._visualValues};return jm(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=jm(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),c=iM(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=ZD(a);let f,m;function y(){m=s[f];const _=m[a.axis];return!Dt(m[t.axis])||d>_||h<_}for(f=0;f<o&&!(!y()&&(this.updateRangeFromParsed(l,t,m,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!y()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],Dt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=XD(Q(this.options.clip,YD(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=s[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=nM(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=eM(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Yr(i);if(a)return Wm(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys(Tt.elements[t]),y=()=>this.getContext(i,s,e),_=l.resolveNamedOptions(f,m,y,h);return _.$shared&&(_.$shared=c,r[o]=Object.freeze(Wm(_,c))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,i,e))}const l=new cw(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||$l(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){$l(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!$l(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Zs(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}z(Ue,"defaults",{}),z(Ue,"datasetElementType",null),z(Ue,"dataElementType",null);function sM(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=zb(i.sort((s,r)=>s-r))}return n._cache.$bar}function rM(n){const t=n.iScale,e=sM(t,n.type);let i=t._length,s,r,o,a;const c=()=>{o===32767||o===-32768||(Yr(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),c();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),c();return i}function oM(n,t,e,i){const s=e.barThickness;let r,o;return nt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function aM(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:e.barPercentage,start:l}}function cM(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:s,end:r,min:o,max:a}}function uw(n,t,e,i){return It(n)?cM(n,t,e,i):t[e.axis]=e.parse(n,i),t}function Gm(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,c=[];let l,d,h,f;for(l=e,d=e+i;l<d;++l)f=t[l],h={},h[s.axis]=a||s.parse(o[l],l),c.push(uw(f,h,r,l));return c}function zl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function lM(n,t,e){return n!==0?tn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function uM(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function dM(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=uM(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=l:(e._bottom||0)===i?s=d:(r[Km(d,o,a,c)]=!0,s=l)),r[Km(s,o,a,c)]=!0,n.borderSkipped=r}function Km(n,t,e,i){return i?(n=hM(n,t,e),n=Ym(n,e,t)):n=Ym(n,t,e),n}function hM(n,t,e){return n===t?e:n===e?t:n}function Ym(n,t,e){return n==="start"?t:n==="end"?e:n}function fM(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Ta extends Ue{parsePrimitiveData(t,e,i,s){return Gm(t,e,i,s)}parseArrayData(t,e,i,s){return Gm(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,y,_;for(f=i,m=i+s;f<m;++f)_=e[f],y={},y[r.axis]=r.parse(ui(_,l),f),h.push(uw(ui(_,d),y,o,f));return h}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=zl(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,s);for(let m=e;m<e+i;m++){const y=this.getParsed(m),_=r||nt(y[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),v=this._calculateBarIndexPixels(m,d),I=(y._stacks||{})[a.axis],k={horizontal:l,base:_.base,enableBorderRadius:!I||zl(y._custom)||o===I._top||o===I._bottom,x:l?_.head:v.center,y:l?v.center:_.head,height:l?v.size:Math.abs(_.size),width:l?Math.abs(_.size):v.size};f&&(k.options=h||this.resolveDataElementOptions(m,t[m].active?"active":s));const D=k.options||t[m].options;dM(k,D,I,o),fM(k,D,d.ratio),this.updateElement(t[m],m,k,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[i.axis],l=d=>{const h=d._parsed.find(m=>m[i.axis]===c),f=h&&h[d.vScale.axis];if(nt(f)||isNaN(f))return!0};for(const d of s)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Q(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||rM(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=zl(l);let h=c[e.axis],f=0,m=i?this.applyStack(e,c,i):h,y,_;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&tn(h)!==tn(l.barEnd)&&(f=0),f+=h);const v=!nt(r)&&!d?r:f;let I=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(f+m):y=I,_=y-I,Math.abs(_)<o){_=lM(_,e,a)*o,h===a&&(I-=_/2);const k=e.getPixelForDecimal(0),D=e.getPixelForDecimal(1),M=Math.min(k,D),N=Math.max(k,D);I=Math.max(Math.min(I,N),M),y=I+_,i&&!d&&(c._stacks[e.axis]._visualValues[s]=e.getValueForPixel(y)-e.getValueForPixel(I))}if(I===e.getPixelForValue(a)){const k=tn(_)*e.getLineWidthForValue(a)/2;I+=k,_-=k}return{size:_,base:I,head:y,center:y+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=Q(s.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?aM(t,e,s,d*l):oM(t,e,s,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(Q(f,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=h.start+h.chunk*y+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}z(Ta,"id","bar"),z(Ta,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),z(Ta,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Aa extends Ue{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Q(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Q(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:i[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,s),d=o.axis,h=a.axis;for(let f=e;f<e+i;f++){const m=t[f],y=!r&&this.getParsed(f),_={},v=_[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(y[d]),I=_[h]=r?a.getBasePixel():a.getPixelForValue(y[h]);_.skip=isNaN(v)||isNaN(I),l&&(_.options=c||this.resolveDataElementOptions(f,m.active?"active":s),r&&(_.options.radius=0)),this.updateElement(m,f,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Q(i&&i._custom,r),s}}z(Aa,"id","bubble"),z(Aa,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),z(Aa,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function pM(n,t,e){let i=1,s=1,r=0,o=0;if(t<bt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(D,M,N)=>Xr(D,a,c,!0)?1:Math.max(M,M*e,N,N*e),y=(D,M,N)=>Xr(D,a,c,!0)?-1:Math.min(M,M*e,N,N*e),_=m(0,l,h),v=m(Nt,d,f),I=y(lt,l,h),k=y(lt+Nt,d,f);i=(_-I)/2,s=(v-k)/2,r=-(_+I)/2,o=-(v+k)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Ci extends Ue{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=c=>+i[c];if(rt(i[t])){const{key:c="value"}=this._parsing;r=l=>+ui(i[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return Be(this.options.rotation-90)}_getCircumference(){return Be(this.options.circumference)}_getRotationExtents(){let t=bt,e=-bt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(SR(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:y,offsetY:_}=pM(h,d,c),v=(i.width-o)/f,I=(i.height-o)/m,k=Math.max(Math.min(v,I)/2,0),D=Vb(this.options.radius,k),M=Math.max(D*c,0),N=(D-M)/this._getVisibleDatasetWeightTotal();this.offsetX=y*D,this.offsetY=_*D,s.total=this.calculateTotal(),this.outerRadius=D-N*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-N*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/bt)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,m=f?0:this.innerRadius,y=f?0:this.outerRadius,{sharedOptions:_,includeOptions:v}=this._getSharedOptions(e,s);let I=this._getRotation(),k;for(k=0;k<e;++k)I+=this._circumference(k,r);for(k=e;k<e+i;++k){const D=this._circumference(k,r),M=t[k],N={x:d+this.offsetX,y:h+this.offsetY,startAngle:I,endAngle:I+D,circumference:D,outerRadius:y,innerRadius:m};v&&(N.options=_||this.resolveDataElementOptions(k,M.active?"active":s)),I+=D,this.updateElement(M,k,N,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?bt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=bo(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,c;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)c=a.resolveDataElementOptions(s),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Q(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}z(Ci,"id","doughnut"),z(Ci,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),z(Ci,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),z(Ci,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class Sa extends Ue{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=qb(e,s,o);this._drawStart=a,this._drawCount=c,Wb(e)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,s),f=o.axis,m=a.axis,{spanGaps:y,segment:_}=this.options,v=Is(y)?y:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||s==="none",k=e+i,D=t.length;let M=e>0&&this.getParsed(e-1);for(let N=0;N<D;++N){const F=t[N],T=I?F:{};if(N<e||N>=k){T.skip=!0;continue}const b=this.getParsed(N),E=nt(b[m]),S=T[f]=o.getPixelForValue(b[f],N),x=T[m]=r||E?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[m],N);T.skip=isNaN(S)||isNaN(x)||E,T.stop=N>0&&Math.abs(b[f]-M[f])>v,_&&(T.parsed=b,T.raw=l.data[N]),h&&(T.options=d||this.resolveDataElementOptions(N,F.active?"active":s)),I||this.updateElement(F,N,T,s),M=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}z(Sa,"id","line"),z(Sa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),z(Sa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Dr extends Ue{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=bo(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return tw.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*lt;let m=f,y;const _=360/this.countVisibleElements();for(y=0;y<e;++y)m+=this._computeAngle(y,s,_);for(y=e;y<e+i;y++){const v=t[y];let I=m,k=m+this._computeAngle(y,s,_),D=o.getDataVisibility(y)?l.getDistanceFromCenterForValue(this.getParsed(y).r):0;m=k,r&&(c.animateScale&&(D=0),c.animateRotate&&(I=k=f));const M={x:d,y:h,innerRadius:0,outerRadius:D,startAngle:I,endAngle:k,options:this.resolveDataElementOptions(y,v.active?"active":s)};this.updateElement(v,y,M,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Be(this.resolveDataElementOptions(t,e).angle||i):0}}z(Dr,"id","polarArea"),z(Dr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),z(Dr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:s,lineWidth:c.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ku extends Ci{}z(ku,"id","pie"),z(ku,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class xa extends Ue{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return tw.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":s),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,s)}}}z(xa,"id","radar"),z(xa,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),z(xa,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Pa extends Ue{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=qb(e,i,s);if(this._drawStart=r,this._drawCount=o,Wb(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,s),h=this.getSharedOptions(d),f=this.includeOptions(s,h),m=o.axis,y=a.axis,{spanGaps:_,segment:v}=this.options,I=Is(_)?_:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||s==="none";let D=e>0&&this.getParsed(e-1);for(let M=e;M<e+i;++M){const N=t[M],F=this.getParsed(M),T=k?N:{},b=nt(F[y]),E=T[m]=o.getPixelForValue(F[m],M),S=T[y]=r||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,F,c):F[y],M);T.skip=isNaN(E)||isNaN(S)||b,T.stop=M>0&&Math.abs(F[m]-D[m])>I,v&&(T.parsed=F,T.raw=l.data[M]),f&&(T.options=h||this.resolveDataElementOptions(M,N.active?"active":s)),k||this.updateElement(N,M,T,s),D=F}this.updateSharedOptions(h,s,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}z(Pa,"id","scatter"),z(Pa,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),z(Pa,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var mM=Object.freeze({__proto__:null,BarController:Ta,BubbleController:Aa,DoughnutController:Ci,LineController:Sa,PieController:ku,PolarAreaController:Dr,RadarController:xa,ScatterController:Pa});function Ii(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ph{constructor(t){z(this,"options");this.options=t||{}}static override(t){Object.assign(Ph.prototype,t)}init(){}formats(){return Ii()}parse(){return Ii()}format(){return Ii()}add(){return Ii()}diff(){return Ii()}startOf(){return Ii()}endOf(){return Ii()}}var gM={_date:Ph};function yM(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?BR:In;if(i){if(s._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),m=l(r,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=s._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(_=>!nt(_[h.axis]));d.lo-=Math.max(0,m);const y=f.slice(d.hi).findIndex(_=>!nt(_[h.axis]));d.hi+=Math.max(0,y)}return d}}return{lo:0,hi:r.length-1}}function qc(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=yM(r[a],t,o,s);for(let m=h;m<=f;++m){const y=d[m];y.skip||i(y,l,m)}}}function vM(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function jl(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||qc(n,e,t,function(a,c,l){!s&&!Tn(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function _M(n,t,e,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=Ub(o,{x:t.x,y:t.y});Xr(h,l,d)&&s.push({element:o,datasetIndex:a,index:c})}return qc(n,e,t,r),s}function bM(n,t,e,i,s,r){let o=[];const a=vM(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,s);if(i&&!m)return;const y=d.getCenterPoint(s);if(!(!!r||n.isPointInArea(y))&&!m)return;const v=a(t,y);v<c?(o=[{element:d,datasetIndex:h,index:f}],c=v):v===c&&o.push({element:d,datasetIndex:h,index:f})}return qc(n,e,t,l),o}function Hl(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?_M(n,t,e,s):bM(n,t,e,i,s,r)}function Xm(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return qc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],s)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,s))}),i&&!a?[]:r}var wM={modes:{index(n,t,e,i){const s=Si(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?jl(n,s,r,i,o):Hl(n,s,r,!1,i,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?jl(n,s,r,i,o):Hl(n,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return jl(n,s,r,i,o)},nearest(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Hl(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=Si(t,n);return Xm(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=Si(t,n);return Xm(n,s,"y",e.intersect,i)}}};const dw=["left","top","right","bottom"];function tr(n,t){return n.filter(e=>e.pos===t)}function Qm(n,t){return n.filter(e=>dw.indexOf(e.pos)===-1&&e.box.axis===t)}function er(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function EM(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function IM(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!dw.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function TM(n,t){const e=IM(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*i:c&&t.availableWidth,a.height=s):(a.width=i,a.height=d?d*s:c&&t.availableHeight)}return e}function AM(n){const t=EM(n),e=er(t.filter(l=>l.box.fullSize),!0),i=er(tr(t,"left"),!0),s=er(tr(t,"right")),r=er(tr(t,"top"),!0),o=er(tr(t,"bottom")),a=Qm(t,"x"),c=Qm(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:tr(t,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function Jm(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function hw(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function SM(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!rt(s)){e.size&&(n[s]-=e.size);const h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[s]+=e.size}r.getPadding&&hw(o,r.getPadding());const a=Math.max(0,t.outerWidth-Jm(o,n,"left","right")),c=Math.max(0,t.outerHeight-Jm(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function xM(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function PM(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function pr(n,t,e,i){const s=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,PM(a.horizontal,t));const{same:h,other:f}=SM(t,e,a,i);l|=h&&s.length,d=d||f,c.fullSize||s.push(a)}return l&&pr(s,t,e,i)||d}function na(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function Zm(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=i[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Yr(l.start)&&(o=l.start),c.fullSize?na(c,s.left,o,e.outerWidth-s.right-s.left,f):na(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Yr(l.start)&&(r=l.start),c.fullSize?na(c,r,s.top,f,e.outerHeight-s.bottom-s.top):na(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var ce={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=ue(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=AM(n.boxes),c=a.vertical,l=a.horizontal;dt(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const d=c.reduce((_,v)=>v.box.options&&v.box.options.display===!1?_:_+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},s);hw(f,ue(i));const m=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),y=TM(c.concat(l),h);pr(a.fullSize,m,h,y),pr(c,m,h,y),pr(l,m,h,y)&&pr(c,m,h,y),xM(m),Zm(a.leftAndTop,m,h,y),m.x+=m.w,m.y+=m.h,Zm(a.rightAndBottom,m,h,y),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},dt(a.chartArea,_=>{const v=_.box;Object.assign(v,n.chartArea),v.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class fw{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class kM extends fw{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ka="$chartjs",CM={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},tg=n=>n===null||n==="";function RM(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[ka]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",tg(s)){const r=Vm(n,"width");r!==void 0&&(n.width=r)}if(tg(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Vm(n,"height");r!==void 0&&(n.height=r)}return n}const pw=DD?{passive:!0}:!1;function DM(n,t,e){n&&n.addEventListener(t,e,pw)}function MM(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,pw)}function OM(n,t){const e=CM[n.type]||n.type,{x:i,y:s}=Si(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function ac(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function NM(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ac(a.addedNodes,i),o=o&&!ac(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function LM(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ac(a.removedNodes,i),o=o&&!ac(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Jr=new Map;let eg=0;function mw(){const n=window.devicePixelRatio;n!==eg&&(eg=n,Jr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function VM(n,t){Jr.size||window.addEventListener("resize",mw),Jr.set(n,t)}function FM(n){Jr.delete(n),Jr.size||window.removeEventListener("resize",mw)}function BM(n,t,e){const i=n.canvas,s=i&&xh(i);if(!s)return;const r=Hb((a,c)=>{const l=s.clientWidth;e(a,c),l<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(s),VM(n,r),o}function ql(n,t,e){e&&e.disconnect(),t==="resize"&&FM(n)}function UM(n,t,e){const i=n.canvas,s=Hb(r=>{n.ctx!==null&&e(OM(r,n))},n);return DM(i,t,s),s}class $M extends fw{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(RM(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[ka])return!1;const i=e[ka].initial;["height","width"].forEach(r=>{const o=i[r];nt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[ka],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:NM,detach:LM,resize:BM}[e]||UM;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:ql,detach:ql,resize:ql}[e]||MM)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return RD(t,e,i,s)}isAttached(t){const e=t&&xh(t);return!!(e&&e.isConnected)}}function zM(n){return!Sh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?kM:$M}class ze{constructor(){z(this,"x");z(this,"y");z(this,"active",!1);z(this,"options");z(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Is(this.x)&&Is(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}z(ze,"defaults",{}),z(ze,"defaultRoutes");function jM(n,t){const e=n.options.ticks,i=HM(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?WM(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return GM(t,l,r,o/s),l;const d=qM(r,t,s);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(ia(t,l,d,nt(m)?0:a-m,a),h=0,f=o-1;h<f;h++)ia(t,l,d,r[h],r[h+1]);return ia(t,l,d,c,nt(m)?t.length:c+m),l}return ia(t,l,d),l}function HM(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function qM(n,t,e){const i=KM(n),s=t.length/e;if(!i)return Math.max(s,1);const r=OR(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function WM(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function GM(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function ia(n,t,e,i,s){const r=Q(i,0),o=Math.min(Q(s,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),s&&(c=s-i,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function KM(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const YM=n=>n==="left"?"right":n==="right"?"left":n,ng=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,ig=(n,t)=>Math.min(t||n,n);function sg(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function XM(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(s),l;if(!(e&&(i===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(s-1))/2,c+=s<t?l:-l,c<r-a||c>o+a)))return c}function QM(n,t){dt(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function nr(n){return n.drawTicks?n.tickLength:0}function rg(n,t){if(!n.display)return 0;const e=zt(n.font,t),i=ue(n.padding);return(It(n.text)?n.text.length:1)*e.lineHeight+i.height}function JM(n,t){return gi(n,{scale:t,type:"scale"})}function ZM(n,t,e){return gi(n,{tick:e,index:t,type:"tick"})}function t1(n,t,e){let i=bh(n);return(e&&t!=="right"||!e&&t==="right")&&(i=YM(i)),i}function e1(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,y;const _=o-s,v=a-r;if(n.isHorizontal()){if(m=se(i,r,a),rt(e)){const I=Object.keys(e)[0],k=e[I];y=d[I].getPixelForValue(k)+_-t}else e==="center"?y=(l.bottom+l.top)/2+_-t:y=ng(n,e,t);f=a-r}else{if(rt(e)){const I=Object.keys(e)[0],k=e[I];m=d[I].getPixelForValue(k)-v+t}else e==="center"?m=(l.left+l.right)/2-v+t:m=ng(n,e,t);y=se(i,o,s),h=e==="left"?-Nt:Nt}return{titleX:m,titleY:y,maxWidth:f,rotation:h}}class Ki extends ze{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=Te(t,Number.POSITIVE_INFINITY),e=Te(e,Number.NEGATIVE_INFINITY),i=Te(i,Number.POSITIVE_INFINITY),s=Te(s,Number.NEGATIVE_INFINITY),{min:Te(t,i),max:Te(e,s),minDefined:Dt(t),maxDefined:Dt(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:Te(e,Te(i,e)),max:Te(i,Te(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){gt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=lD(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?sg(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=jM(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){gt(this.options.afterUpdate,[this])}beforeSetDimensions(){gt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){gt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),gt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){gt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=gt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){gt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){gt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=ig(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=qt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:m/(i-1),h+6>a&&(a=m/(i-(t.offset?.5:1)),c=this.maxHeight-nr(t.grid)-e.padding-rg(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=vh(Math.min(Math.asin(qt((d.highest.height+6)/a,-1,1)),Math.asin(qt(c/l,-1,1))-Math.asin(qt(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){gt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){gt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=rg(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=nr(r)+c):(t.height=this.maxHeight,t.width=nr(r)+c),i.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=i.padding*2,y=Be(this.labelRotation),_=Math.cos(y),v=Math.sin(y);if(a){const I=i.mirror?0:v*h.width+_*f.height;t.height=Math.min(this.maxHeight,t.height+I+m)}else{const I=i.mirror?0:_*h.width+v*f.height;t.width=Math.min(this.maxWidth,t.width+I+m)}this._calculatePadding(l,d,v,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=s*t.width,m=i*e.height):(f=i*t.height,m=s*e.width):r==="start"?m=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){gt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)nt(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=sg(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/ig(e,i));let l=0,d=0,h,f,m,y,_,v,I,k,D,M,N;for(h=0;h<e;h+=c){if(y=t[h].label,_=this._resolveTickFontOptions(h),s.font=v=_.string,I=r[v]=r[v]||{data:{},gc:[]},k=_.lineHeight,D=M=0,!nt(y)&&!It(y))D=rc(s,I.data,I.gc,D,y),M=k;else if(It(y))for(f=0,m=y.length;f<m;++f)N=y[f],!nt(N)&&!It(N)&&(D=rc(s,I.data,I.gc,D,N),M+=k);o.push(D),a.push(M),l=Math.max(D,l),d=Math.max(M,d)}QM(r,e);const F=o.indexOf(l),T=a.indexOf(d),b=E=>({width:o[E]||0,height:a[E]||0});return{first:b(0),last:b(e-1),widest:b(F),highest:b(T),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return FR(this._alignToPixels?Ei(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=ZM(this.getContext(),t,i))}return this.$context||(this.$context=JM(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Be(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=nr(r),m=[],y=a.setContext(this.getContext()),_=y.display?y.width:0,v=_/2,I=function(ht){return Ei(i,ht,_)};let k,D,M,N,F,T,b,E,S,x,P,A;if(o==="top")k=I(this.bottom),T=this.bottom-f,E=k-v,x=I(t.top)+v,A=t.bottom;else if(o==="bottom")k=I(this.top),x=t.top,A=I(t.bottom)-v,T=k+v,E=this.top+f;else if(o==="left")k=I(this.right),F=this.right-f,b=k-v,S=I(t.left)+v,P=t.right;else if(o==="right")k=I(this.left),S=t.left,P=I(t.right)-v,F=k+v,b=this.left+f;else if(e==="x"){if(o==="center")k=I((t.top+t.bottom)/2+.5);else if(rt(o)){const ht=Object.keys(o)[0],ft=o[ht];k=I(this.chart.scales[ht].getPixelForValue(ft))}x=t.top,A=t.bottom,T=k+v,E=T+f}else if(e==="y"){if(o==="center")k=I((t.left+t.right)/2);else if(rt(o)){const ht=Object.keys(o)[0],ft=o[ht];k=I(this.chart.scales[ht].getPixelForValue(ft))}F=k-v,b=F-f,S=t.left,P=t.right}const ot=Q(s.ticks.maxTicksLimit,h),et=Math.max(1,Math.ceil(h/ot));for(D=0;D<h;D+=et){const ht=this.getContext(D),ft=r.setContext(ht),Gt=a.setContext(ht),Lt=ft.lineWidth,on=ft.color,Yi=Gt.dash||[],de=Gt.dashOffset,xt=ft.tickWidth,an=ft.tickColor,De=ft.tickBorderDash||[],cn=ft.tickBorderDashOffset;M=XM(this,D,c),M!==void 0&&(N=Ei(i,M,Lt),l?F=b=S=P=N:T=E=x=A=N,m.push({tx1:F,ty1:T,tx2:b,ty2:E,x1:S,y1:x,x2:P,y2:A,width:Lt,color:on,borderDash:Yi,borderDashOffset:de,tickWidth:xt,tickColor:an,tickBorderDash:De,tickBorderDashOffset:cn}))}return this._ticksLength=h,this._borderValue=k,m}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=nr(i.grid),m=f+d,y=h?-d:m,_=-Be(this.labelRotation),v=[];let I,k,D,M,N,F,T,b,E,S,x,P,A="middle";if(s==="top")F=this.bottom-y,T=this._getXAxisLabelAlignment();else if(s==="bottom")F=this.top+y,T=this._getXAxisLabelAlignment();else if(s==="left"){const et=this._getYAxisLabelAlignment(f);T=et.textAlign,N=et.x}else if(s==="right"){const et=this._getYAxisLabelAlignment(f);T=et.textAlign,N=et.x}else if(e==="x"){if(s==="center")F=(t.top+t.bottom)/2+m;else if(rt(s)){const et=Object.keys(s)[0],ht=s[et];F=this.chart.scales[et].getPixelForValue(ht)+m}T=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")N=(t.left+t.right)/2-m;else if(rt(s)){const et=Object.keys(s)[0],ht=s[et];N=this.chart.scales[et].getPixelForValue(ht)}T=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?A="top":c==="end"&&(A="bottom"));const ot=this._getLabelSizes();for(I=0,k=a.length;I<k;++I){D=a[I],M=D.label;const et=r.setContext(this.getContext(I));b=this.getPixelForTick(I)+r.labelOffset,E=this._resolveTickFontOptions(I),S=E.lineHeight,x=It(M)?M.length:1;const ht=x/2,ft=et.color,Gt=et.textStrokeColor,Lt=et.textStrokeWidth;let on=T;o?(N=b,T==="inner"&&(I===k-1?on=this.options.reverse?"left":"right":I===0?on=this.options.reverse?"right":"left":on="center"),s==="top"?l==="near"||_!==0?P=-x*S+S/2:l==="center"?P=-ot.highest.height/2-ht*S+S:P=-ot.highest.height+S/2:l==="near"||_!==0?P=S/2:l==="center"?P=ot.highest.height/2-ht*S:P=ot.highest.height-x*S,h&&(P*=-1),_!==0&&!et.showLabelBackdrop&&(N+=S/2*Math.sin(_))):(F=b,P=(1-x)*S/2);let Yi;if(et.showLabelBackdrop){const de=ue(et.backdropPadding),xt=ot.heights[I],an=ot.widths[I];let De=P-de.top,cn=0-de.left;switch(A){case"middle":De-=xt/2;break;case"bottom":De-=xt;break}switch(T){case"center":cn-=an/2;break;case"right":cn-=an;break;case"inner":I===k-1?cn-=an:I>0&&(cn-=an/2);break}Yi={left:cn,top:De,width:an+de.width,height:xt+de.height,color:et.backdropColor}}v.push({label:M,font:E,textOffset:P,options:{rotation:_,color:ft,strokeColor:Gt,strokeWidth:Lt,textAlign:on,textBaseline:A,translation:[N,F],backdrop:Yi}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Be(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?s?(d=this.right+r,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?s?(d=this.left+r,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const c=s[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=Ei(t,this.left,o)-o/2,d=Ei(t,this.right,a)+a/2,h=f=c):(h=Ei(t,this.top,o)-o/2,f=Ei(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&zc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Hi(i,l,0,d,c,a)}s&&jc(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=zt(i.font),o=ue(i.padding),a=i.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||rt(e)?(c+=o.bottom,It(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=e1(this,c,e,a);Hi(t,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:t1(a,e,s),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Q(t.grid&&t.grid.z,-1),s=Q(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ki.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return zt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class sa{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;s1(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,n1(t,o,i),this.override&&Tt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Tt[s]&&(delete Tt[s][i],this.override&&delete ji[i])}}function n1(n,t,e){const i=Kr(Object.create(null),[e?Tt.get(e):{},Tt.get(t),n.defaults]);Tt.set(t,i),n.defaultRoutes&&i1(t,n.defaultRoutes),n.descriptors&&Tt.describe(t,n.descriptors)}function i1(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Tt.route(r,s,c,a)})}function s1(n){return"id"in n&&"defaults"in n}class r1{constructor(){this.controllers=new sa(Ue,"datasets",!0),this.elements=new sa(ze,"elements"),this.plugins=new sa(Object,"plugins"),this.scales=new sa(Ki,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):dt(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=yh(t);gt(i["before"+s],[],i),e[t](i),gt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var qe=new r1;class o1{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],c=[e,s,r.options];if(gt(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){nt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Q(i.options&&i.options.plugins,{}),r=a1(i);return s===!1&&!e?[]:l1(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function a1(n){const t={},e=[],i=Object.keys(qe.plugins.items);for(let r=0;r<i.length;r++)e.push(qe.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function c1(n,t){return!t&&n===!1?null:n===!0?{}:n}function l1(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=c1(i[c],s);l!==null&&r.push({plugin:a,options:u1(n.config,{plugin:a,local:e[c]},l,o)})}return r}function u1(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Cu(n,t){const e=Tt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function d1(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function h1(n,t){return n===t?"_index_":"_value_"}function og(n){if(n==="x"||n==="y"||n==="r")return n}function f1(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Ru(n,...t){if(og(n))return n;for(const e of t){const i=e.axis||f1(e.position)||n.length>1&&og(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function ag(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function p1(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return ag(n,"x",e[0])||ag(n,"y",e[0])}return{}}function m1(n,t){const e=ji[n.type]||{scales:{}},i=t.scales||{},s=Cu(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!rt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Ru(o,a,p1(o,n),Tt.scales[a.type]),l=h1(c,s),d=e.scales||{};r[o]=Pr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||Cu(a,t),d=(ji[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=d1(h,c),m=o[f+"AxisID"]||f;r[m]=r[m]||Object.create(null),Pr(r[m],[{axis:f},i[m],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Pr(a,[Tt.scales[a.type],Tt.scale])}),r}function gw(n){const t=n.options||(n.options={});t.plugins=Q(t.plugins,{}),t.scales=m1(n,t)}function yw(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function g1(n){return n=n||{},n.data=yw(n.data),gw(n),n}const cg=new Map,vw=new Set;function ra(n,t){let e=cg.get(n);return e||(e=t(),cg.set(n,e),vw.add(e)),e}const ir=(n,t,e)=>{const i=ui(t,e);i!==void 0&&n.add(i)};class y1{constructor(t){this._config=g1(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=yw(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),gw(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ra(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ra(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ra(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return ra(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>ir(c,t,h))),d.forEach(h=>ir(c,s,h)),d.forEach(h=>ir(c,ji[r]||{},h)),d.forEach(h=>ir(c,Tt,h)),d.forEach(h=>ir(c,xu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),vw.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,ji[e]||{},Tt.datasets[e]||{},{type:e},Tt,xu]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=lg(this._resolverCache,t,s);let c=o;if(_1(o,e)){r.$shared=!1,i=di(i)?i():i;const l=this.createResolver(t,i,a);c=Ts(o,i,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,i=[""],s){const{resolver:r}=lg(this._resolverCache,t,i);return rt(e)?Ts(r,e,void 0,s):r}}function lg(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:Ih(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const v1=n=>rt(n)&&Object.getOwnPropertyNames(n).some(t=>di(n[t]));function _1(n,t){const{isScriptable:e,isIndexable:i}=Xb(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(di(a)||v1(a))||o&&It(a))return!0}return!1}var b1="4.5.1";const w1=["top","bottom","left","right","chartArea"];function ug(n,t){return n==="top"||n==="bottom"||w1.indexOf(n)===-1&&t==="x"}function dg(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function hg(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),gt(e&&e.onComplete,[n],t)}function E1(n){const t=n.chart,e=t.options.animation;gt(e&&e.onProgress,[n],t)}function _w(n){return Sh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Ca={},fg=n=>{const t=_w(n);return Object.values(Ca).filter(e=>e.canvas===t).pop()};function I1(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function T1(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class Ke{static register(...t){qe.add(...t),pg()}static unregister(...t){qe.remove(...t),pg()}constructor(t,e){const i=this.config=new y1(e),s=_w(t),r=fg(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||zM(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=AR(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new o1,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=zR(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Ca[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}fn.listen(this,"complete",hg),fn.listen(this,"progress",E1),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return nt(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return qe}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Lm(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Mm(this.canvas,this.ctx),this}stop(){return fn.stop(this),this}resize(t,e){fn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Lm(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),gt(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};dt(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=Ru(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),dt(r,o=>{const a=o.options,c=a.id,l=Ru(c,a),d=Q(a.type,o.dtype);(a.position===void 0||ug(a.position,l)!==ug(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===d)h=i[c];else{const f=qe.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),dt(s,(o,a)=>{o||delete i[a]}),dt(i,o=>{ce.configure(this,o,o.options),ce.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(dg("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Cu(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=qe.getController(a),{datasetElementType:l,dataElementType:d}=Tt.datasets[a];Object.assign(c,{dataElementType:qe.getElement(d),datasetElementType:l&&qe.getElement(l)}),o.controller=new c(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){dt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||dt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(dg("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){dt(this.scales,t=>{ce.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Tm(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;I1(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!Tm(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ce.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],dt(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,di(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(fn.has(this)?this.attached&&!fn.running(this)&&fn.start(this):(this.draw(),hg({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=aw(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&zc(e,s),t.controller.draw(),s&&jc(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return Tn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=wM.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=gi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Yr(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),fn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Mm(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ca[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};dt(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},s=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){dt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},dt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!nc(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),c=RR(t),l=T1(t,this._lastEvent,i,c);i&&(this._lastEvent=null,gt(r.onHover,[t,a,this],this),c&&gt(r.onClick,[t,a,this],this));const d=!nc(a,s);return(d||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,d}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}z(Ke,"defaults",Tt),z(Ke,"instances",Ca),z(Ke,"overrides",ji),z(Ke,"registry",qe),z(Ke,"version",b1),z(Ke,"getChart",fg);function pg(){return dt(Ke.instances,n=>n._plugins.invalidate())}function A1(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,oe(i-e));if(n.beginPath(),n.arc(s,r,o-l/2,i+h/2,e-h/2),a>0){const f=Math.min(l/a,oe(i-e));n.arc(s,r,a+l/2,e-f/2,i+f/2,!0)}else{const f=Math.min(l/2,o*oe(i-e));if(d==="round")n.arc(s,r,f,e-lt/2,i+lt/2,!0);else if(d==="bevel"){const m=2*f*f,y=-m*Math.cos(e+lt/2)+s,_=-m*Math.sin(e+lt/2)+r,v=m*Math.cos(i+lt/2)+s,I=m*Math.sin(i+lt/2)+r;n.lineTo(y,_),n.lineTo(v,I)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function S1(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=s/a;n.beginPath(),n.arc(r,o,a,i-l,e+l),c>s?(l=s/c,n.arc(r,o,c,e+l,i-l,!0)):n.arc(r,o,s,e+Nt,i-Nt),n.closePath(),n.clip()}function x1(n){return Eh(n,["outerStart","outerEnd","innerStart","innerEnd"])}function P1(n,t,e,i){const s=x1(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=c=>{const l=(e-Math.min(r,c))*i/2;return qt(c,0,Math.min(r,l))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:qt(s.innerStart,0,o),innerEnd:qt(s.innerEnd,0,o)}}function es(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function cc(n,t,e,i,s,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+i+e-l,0),f=d>0?d+i+e+l:0;let m=0;const y=s-c;if(i){const et=d>0?d-i:0,ht=h>0?h-i:0,ft=(et+ht)/2,Gt=ft!==0?y*ft/(ft+i):y;m=(y-Gt)/2}const _=Math.max(.001,y*h-e/lt)/h,v=(y-_)/2,I=c+v+m,k=s-v-m,{outerStart:D,outerEnd:M,innerStart:N,innerEnd:F}=P1(t,f,h,k-I),T=h-D,b=h-M,E=I+D/T,S=k-M/b,x=f+N,P=f+F,A=I+N/x,ot=k-F/P;if(n.beginPath(),r){const et=(E+S)/2;if(n.arc(o,a,h,E,et),n.arc(o,a,h,et,S),M>0){const Lt=es(b,S,o,a);n.arc(Lt.x,Lt.y,M,S,k+Nt)}const ht=es(P,k,o,a);if(n.lineTo(ht.x,ht.y),F>0){const Lt=es(P,ot,o,a);n.arc(Lt.x,Lt.y,F,k+Nt,ot+Math.PI)}const ft=(k-F/f+(I+N/f))/2;if(n.arc(o,a,f,k-F/f,ft,!0),n.arc(o,a,f,ft,I+N/f,!0),N>0){const Lt=es(x,A,o,a);n.arc(Lt.x,Lt.y,N,A+Math.PI,I-Nt)}const Gt=es(T,I,o,a);if(n.lineTo(Gt.x,Gt.y),D>0){const Lt=es(T,E,o,a);n.arc(Lt.x,Lt.y,D,I-Nt,E)}}else{n.moveTo(o,a);const et=Math.cos(E)*h+o,ht=Math.sin(E)*h+a;n.lineTo(et,ht);const ft=Math.cos(S)*h+o,Gt=Math.sin(S)*h+a;n.lineTo(ft,Gt)}n.closePath()}function k1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){cc(n,t,e,i,c,s);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%bt||bt))}return cc(n,t,e,i,c,s),n.fill(),c}function C1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,y=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,y?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let _=t.endAngle;if(r){cc(n,t,e,i,_,s);for(let v=0;v<r;++v)n.stroke();isNaN(a)||(_=o+(a%bt||bt))}y&&S1(n,t,_),c.selfJoin&&_-o>=lt&&m===0&&d!=="miter"&&A1(n,t,_),r||(cc(n,t,e,i,_,s),n.stroke())}class mr extends ze{constructor(e){super();z(this,"circumference");z(this,"endAngle");z(this,"fullCircles");z(this,"innerRadius");z(this,"outerRadius");z(this,"pixelMargin");z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=Ub(r,{x:e,y:i}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),m=(this.options.spacing+this.options.borderWidth)/2,y=Q(f,l-c),_=Xr(o,c,l)&&c!==l,v=y>=bt||_,I=En(a,d+m,h+m);return v&&I}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:i+Math.cos(h)*f,y:s+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>bt?Math.floor(s/bt):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(lt,s||0)),d=r*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,k1(e,this,d,o,a),C1(e,this,d,o,a),e.restore()}}z(mr,"id","arc"),z(mr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),z(mr,"defaultRoutes",{backgroundColor:"backgroundColor"}),z(mr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function bw(n,t,e=t){n.lineCap=Q(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Q(e.borderDash,t.borderDash)),n.lineDashOffset=Q(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Q(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Q(e.borderWidth,t.borderWidth),n.strokeStyle=Q(e.borderColor,t.borderColor)}function R1(n,t,e){n.lineTo(e.x,e.y)}function D1(n){return n.stepped?tD:n.tension||n.cubicInterpolationMode==="monotone"?eD:R1}function ww(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,c=Math.max(s,o),l=Math.min(r,a),d=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!d?i+l-c:l-c}}function M1(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:c,ilen:l}=ww(s,e,i),d=D1(r);let{move:h=!0,reverse:f}=i||{},m,y,_;for(m=0;m<=l;++m)y=s[(a+(f?l-m:m))%o],!y.skip&&(h?(n.moveTo(y.x,y.y),h=!1):d(n,_,y,f,r.stepped),_=y);return c&&(y=s[(a+(f?l:0))%o],d(n,_,y,f,r.stepped)),!!c}function O1(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=ww(s,e,i),{move:c=!0,reverse:l}=i||{};let d=0,h=0,f,m,y,_,v,I;const k=M=>(o+(l?a-M:M))%r,D=()=>{_!==v&&(n.lineTo(d,v),n.lineTo(d,_),n.lineTo(d,I))};for(c&&(m=s[k(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=s[k(f)],m.skip)continue;const M=m.x,N=m.y,F=M|0;F===y?(N<_?_=N:N>v&&(v=N),d=(h*d+M)/++h):(D(),n.lineTo(M,N),y=F,h=0,_=v=N),I=N}D()}function Du(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?O1:M1}function N1(n){return n.stepped?MD:n.tension||n.cubicInterpolationMode==="monotone"?OD:xi}function L1(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),bw(n,t.options),n.stroke(s)}function V1(n,t,e,i){const{segments:s,options:r}=t,o=Du(t);for(const a of s)bw(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const F1=typeof Path2D=="function";function B1(n,t,e,i){F1&&!t.options.segment?L1(n,t,e,i):V1(n,t,e,i)}class qn extends ze{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;AD(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=UD(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=ow(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=N1(i);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=r[h],y=r[f];if(m===y){a.push(m);continue}const _=Math.abs((s-m[e])/(y[e]-m[e])),v=c(m,y,_,i.stepped);v[e]=t[e],a.push(v)}return a.length===1?a[0]:a}pathSegment(t,e,i){return Du(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=Du(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),B1(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}z(qn,"id","line"),z(qn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),z(qn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),z(qn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function mg(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class Ra extends ze{constructor(e){super();z(this,"parsed");z(this,"skip");z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return mg(this,e,"x",i)}inYRange(e,i){return mg(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!Tn(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Pu(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}z(Ra,"id","point"),z(Ra,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),z(Ra,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Ew(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,s),c=Math.max(e,s),l=i-h,d=i+h):(h=r/2,a=e-h,c=e+h,l=Math.min(i,s),d=Math.max(i,s)),{left:a,top:l,right:c,bottom:d}}function Wn(n,t,e,i){return n?0:qt(t,e,i)}function U1(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=Yb(i);return{t:Wn(s.top,r.top,0,e),r:Wn(s.right,r.right,0,t),b:Wn(s.bottom,r.bottom,0,e),l:Wn(s.left,r.left,0,t)}}function $1(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Li(s),o=Math.min(t,e),a=n.borderSkipped,c=i||rt(s);return{topLeft:Wn(!c||a.top||a.left,r.topLeft,0,o),topRight:Wn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Wn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Wn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function z1(n){const t=Ew(n),e=t.right-t.left,i=t.bottom-t.top,s=U1(n,e/2,i/2),r=$1(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function Wl(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&Ew(n,i);return a&&(s||En(t,a.left,a.right))&&(r||En(e,a.top,a.bottom))}function j1(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function H1(n,t){n.rect(t.x,t.y,t.w,t.h)}function Gl(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class Da extends ze{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=z1(this),a=j1(o.radius)?Qr:H1;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Gl(o,e,r)),t.clip(),a(t,Gl(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Gl(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return Wl(this,t,e,i)}inXRange(t,e){return Wl(this,t,null,e)}inYRange(t,e){return Wl(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}z(Da,"id","bar"),z(Da,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),z(Da,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var q1=Object.freeze({__proto__:null,ArcElement:mr,BarElement:Da,LineElement:qn,PointElement:Ra});const Mu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],gg=Mu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Iw(n){return Mu[n%Mu.length]}function Tw(n){return gg[n%gg.length]}function W1(n,t){return n.borderColor=Iw(t),n.backgroundColor=Tw(t),++t}function G1(n,t){return n.backgroundColor=n.data.map(()=>Iw(t++)),t}function K1(n,t){return n.backgroundColor=n.data.map(()=>Tw(t++)),t}function Y1(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof Ci?t=G1(e,t):s instanceof Dr?t=K1(e,t):s&&(t=W1(e,t))}}function yg(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function X1(n){return n&&(n.borderColor||n.backgroundColor)}function Q1(){return Tt.borderColor!=="rgba(0,0,0,0.1)"||Tt.backgroundColor!=="rgba(0,0,0,0.1)"}var J1={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=yg(i)||X1(s)||r&&yg(r)||Q1();if(!e.forceOverride&&o)return;const a=Y1(n);i.forEach(a)}};function Z1(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,m,y,_;for(o[c++]=n[d],h=0;h<r-2;h++){let v=0,I=0,k;const D=Math.floor((h+1)*a)+1+t,M=Math.min(Math.floor((h+2)*a)+1,e)+t,N=M-D;for(k=D;k<M;k++)v+=n[k].x,I+=n[k].y;v/=N,I/=N;const F=Math.floor(h*a)+1+t,T=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:E}=n[d];for(m=y=-1,k=F;k<T;k++)y=.5*Math.abs((b-v)*(n[k].y-E)-(b-n[k].x)*(I-E)),y>m&&(m=y,f=n[k],_=k);o[c++]=f,d=_}return o[c++]=n[l],o}function tO(n,t,e,i){let s=0,r=0,o,a,c,l,d,h,f,m,y,_;const v=[],I=t+e-1,k=n[t].x,M=n[I].x-k;for(o=t;o<t+e;++o){a=n[o],c=(a.x-k)/M*i,l=a.y;const N=c|0;if(N===d)l<y?(y=l,h=o):l>_&&(_=l,f=o),s=(r*s+a.x)/++r;else{const F=o-1;if(!nt(h)&&!nt(f)){const T=Math.min(h,f),b=Math.max(h,f);T!==m&&T!==F&&v.push({...n[T],x:s}),b!==m&&b!==F&&v.push({...n[b],x:s})}o>0&&F!==m&&v.push(n[F]),v.push(a),d=N,r=0,y=_=l,h=f=m=o}}return v}function Aw(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function vg(n){n.data.datasets.forEach(t=>{Aw(t)})}function eO(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(i=qt(In(t,r.axis,o).lo,0,e-1)),l?s=qt(In(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var nO={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){vg(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,c=n.getDatasetMeta(r),l=o||s.data;if(fr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=eO(c,l);const m=e.threshold||4*i;if(f<=m){Aw(s);return}nt(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let y;switch(e.algorithm){case"lttb":y=Z1(l,h,f,i,e);break;case"min-max":y=tO(l,h,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=y})},destroy(n){vg(n)}};function iO(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:c,end:l}=a;l=Wc(c,l,s);const d=Ou(e,s[c],s[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:s[c],end:s[l]});continue}const h=ow(t,d);for(const f of h){const m=Ou(e,r[f.start],r[f.end],f.loop),y=rw(a,s,m);for(const _ of y)o.push({source:_,target:f,start:{[e]:_g(d,m,"start",Math.max)},end:{[e]:_g(d,m,"end",Math.min)}})}}return o}function Ou(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=oe(s),r=oe(r)),{property:n,start:s,end:r}}function sO(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Wc(o,a,s);const c=s[o],l=s[a];i!==null?(r.push({x:c.x,y:i}),r.push({x:l.x,y:i})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function Wc(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function _g(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function Sw(n,t){let e=[],i=!1;return It(n)?(i=!0,e=n):e=sO(n,t),e.length?new qn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function bg(n){return n&&n.fill!==!1}function rO(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Dt(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function oO(n,t,e){const i=uO(n);if(rt(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Dt(s)&&Math.floor(s)===s?aO(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function aO(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function cO(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:rt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function lO(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:rt(n)?i=n.value:i=t.getBaseValue(),i}function uO(n){const t=n.options,e=t.fill;let i=Q(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function dO(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=hO(t,e);a.push(Sw({x:null,y:t.bottom},i));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)fO(s,o[d],a)}return new qn({points:s,options:{}})}function hO(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function fO(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:c}=pO(r,t,"x");if(!(!c||o&&a)){if(o)i.unshift(c);else if(n.push(c),!a)break}}n.push(...i)}function pO(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(En(s,h,f)){a=s===h,c=s===f;break}}return{first:a,last:c,point:i}}class xw{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:bt},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function mO(n){const{chart:t,fill:e,line:i}=n;if(Dt(e))return gO(t,e);if(e==="stack")return dO(n);if(e==="shape")return!0;const s=yO(n);return s instanceof xw?s:Sw(s,i)}function gO(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function yO(n){return(n.scale||{}).getPointPositionForValue?_O(n):vO(n)}function vO(n){const{scale:t={},fill:e}=n,i=cO(e,t);if(Dt(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function _O(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=lO(e,t,r),a=[];if(i.grid.circular){const c=t.getPointPositionForValue(0,r);return new xw({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)a.push(t.getPointPositionForValue(c,o));return a}function Kl(n,t,e){const i=mO(t),{chart:s,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},y=s.getDatasetMeta(r),_=aw(s,y);i&&o.points.length&&(zc(n,e),bO(n,{line:o,target:i,above:f,below:m,area:e,scale:a,axis:c,clip:_}),jc(n))}function bO(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==s&&(l==="x"?(wg(n,i,o.top),Yl(n,{line:e,target:i,color:s,scale:a,property:l,clip:c}),n.restore(),n.save(),wg(n,i,o.bottom)):l==="y"&&(Eg(n,i,o.left),Yl(n,{line:e,target:i,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Eg(n,i,o.right),d=s)),Yl(n,{line:e,target:i,color:d,scale:a,property:l,clip:c}),n.restore()}function wg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[Wc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Eg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[Wc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Yl(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,c=iO(e,i,s);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=r}={}}=l,y=i!==!0;n.save(),n.fillStyle=m,wO(n,o,a,y&&Ou(s,h,f)),n.beginPath();const _=!!e.pathSegment(n,l);let v;if(y){_?n.closePath():Ig(n,i,f,s);const I=!!i.pathSegment(n,d,{move:_,reverse:!0});v=_&&I,v||Ig(n,i,h,s)}n.closePath(),n.fill(v?"evenodd":"nonzero"),n.restore()}}function wO(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=s.top,d=a,h=s.bottom):(c=s.left,l=o,d=s.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Ig(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var EO={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,c;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof qn&&(c={visible:n.isDatasetVisible(o),index:o,fill:oO(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=rO(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&Kl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;bg(r)&&Kl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!bg(i)||e.drawTime!=="beforeDatasetDraw"||Kl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Tg=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},IO=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Ag extends ze{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=gt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=zt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Tg(i,r);let l,d;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=s+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((y,_)=>{const v=i+e/2+r.measureText(y.text).width;(_===0||l[l.length-1]+v+2*a>o)&&(h+=d,l[l.length-(_>0?0:1)]=0,m+=d,f++),c[_]={left:0,top:m,row:f,width:v,height:s},l[l.length-1]+=v+a}),h}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,y=0,_=0;return this.legendItems.forEach((v,I)=>{const{itemWidth:k,itemHeight:D}=TO(i,e,r,v,s);I>0&&m+D+2*a>d&&(h+=f+a,l.push({width:f,height:m}),y+=f+a,_++,f=m=0),c[I]={left:y,top:m,col:_,width:k,height:D},f=Math.max(f,k),m+=D+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=ps(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=se(i,this.left+s,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=se(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+t+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=se(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=se(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;zc(t,this),this._draw(),jc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Tt.color,c=ps(t.rtl,this.left,this.width),l=zt(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:y,boxHeight:_,itemHeight:v}=Tg(o,h),I=function(F,T,b){if(isNaN(y)||y<=0||isNaN(_)||_<0)return;s.save();const E=Q(b.lineWidth,1);if(s.fillStyle=Q(b.fillStyle,a),s.lineCap=Q(b.lineCap,"butt"),s.lineDashOffset=Q(b.lineDashOffset,0),s.lineJoin=Q(b.lineJoin,"miter"),s.lineWidth=E,s.strokeStyle=Q(b.strokeStyle,a),s.setLineDash(Q(b.lineDash,[])),o.usePointStyle){const S={radius:_*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:E},x=c.xPlus(F,y/2),P=T+f;Kb(s,S,x,P,o.pointStyleWidth&&y)}else{const S=T+Math.max((h-_)/2,0),x=c.leftForLtr(F,y),P=Li(b.borderRadius);s.beginPath(),Object.values(P).some(A=>A!==0)?Qr(s,{x,y:S,w:y,h:_,radius:P}):s.rect(x,S,y,_),s.fill(),E!==0&&s.stroke()}s.restore()},k=function(F,T,b){Hi(s,b.text,F,T+v/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},D=this.isHorizontal(),M=this._computeTitleHeight();D?m={x:se(r,this.left+d,this.right-i[0]),y:this.top+d+M,line:0}:m={x:this.left+d,y:se(r,this.top+M+d,this.bottom-e[0].height),line:0},nw(this.ctx,t.textDirection);const N=v+d;this.legendItems.forEach((F,T)=>{s.strokeStyle=F.fontColor,s.fillStyle=F.fontColor;const b=s.measureText(F.text).width,E=c.textAlign(F.textAlign||(F.textAlign=o.textAlign)),S=y+f+b;let x=m.x,P=m.y;c.setWidth(this.width),D?T>0&&x+S+d>this.right&&(P=m.y+=N,m.line++,x=m.x=se(r,this.left+d,this.right-i[m.line])):T>0&&P+N>this.bottom&&(x=m.x=x+e[m.line].width+d,m.line++,P=m.y=se(r,this.top+M+d,this.bottom-e[m.line].height));const A=c.x(x);if(I(A,P,F),x=jR(E,x+y+f,D?x+S:this.right,t.rtl),k(c.x(x),P,F),D)m.x+=S+d;else if(typeof F.text!="string"){const ot=l.lineHeight;m.y+=Pw(F,ot)+d}else m.y+=N}),iw(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=zt(e.font),s=ue(e.padding);if(!e.display)return;const r=ps(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=i.size/2,l=s.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=se(t.align,h,this.right-f);else{const y=this.columnSizes.reduce((_,v)=>Math.max(_,v.height),0);d=l+se(t.align,this.top,this.bottom-y-t.labels.padding-this._computeTitleHeight())}const m=se(a,h,h+f);o.textAlign=r.textAlign(bh(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Hi(o,e.text,m,d,i)}_computeTitleHeight(){const t=this.options.title,e=zt(t.font),i=ue(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(En(t,this.left,this.right)&&En(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],En(t,s.left,s.left+s.width)&&En(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!xO(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=IO(s,i);s&&!r&&gt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&gt(e.onHover,[t,i,this],this)}else i&&gt(e.onClick,[t,i,this],this)}}function TO(n,t,e,i,s){const r=AO(i,n,t,e),o=SO(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function AO(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function SO(n,t,e){let i=n;return typeof t.text!="string"&&(i=Pw(t,e)),i}function Pw(n,t){const e=n.text?n.text.length:0;return t*e}function xO(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var PO={id:"legend",_element:Ag,start(n,t,e){const i=n.legend=new Ag({ctx:n.ctx,options:e,chart:n});ce.configure(n,i,e),ce.addBox(n,i)},stop(n){ce.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;ce.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=ue(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class kh extends ze{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=It(i.text)?i.text.length:1;this._padding=ue(i.padding);const r=s*zt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=se(a,i,r),h=e+t,l=r-i):(o.position==="left"?(d=i+t,h=se(a,s,e),c=lt*-.5):(d=r-t,h=se(a,e,s),c=lt*.5),l=s-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=zt(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Hi(t,e.text,0,0,i,{color:e.color,maxWidth:c,rotation:l,textAlign:bh(e.align),textBaseline:"middle",translation:[o,a]})}}function kO(n,t){const e=new kh({ctx:n.ctx,options:t,chart:n});ce.configure(n,e,t),ce.addBox(n,e),n.titleBlock=e}var CO={id:"title",_element:kh,start(n,t,e){kO(n,e)},stop(n){const t=n.titleBlock;ce.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;ce.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const oa=new WeakMap;var RO={id:"subtitle",start(n,t,e){const i=new kh({ctx:n.ctx,options:e,chart:n});ce.configure(n,i,e),ce.addBox(n,i),oa.set(n,i)},stop(n){ce.removeBox(n,oa.get(n)),oa.delete(n)},beforeUpdate(n,t,e){const i=oa.get(n);ce.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const gr={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();i.add(c.x),s+=c.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,c)=>a+c)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Su(t,l);d<s&&(s=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,i=c.y}return{x:e,y:i}}};function He(n,t){return t&&(It(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function pn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function DO(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Sg(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=zt(t.bodyFont),l=zt(t.titleFont),d=zt(t.footerFont),h=r.length,f=s.length,m=i.length,y=ue(t.padding);let _=y.height,v=0,I=i.reduce((M,N)=>M+N.before.length+N.lines.length+N.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,h&&(_+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),I){const M=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;_+=m*M+(I-m)*c.lineHeight+(I-1)*t.bodySpacing}f&&(_+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let k=0;const D=function(M){v=Math.max(v,e.measureText(M).width+k)};return e.save(),e.font=l.string,dt(n.title,D),e.font=c.string,dt(n.beforeBody.concat(n.afterBody),D),k=t.displayColors?o+2+t.boxPadding:0,dt(i,M=>{dt(M.before,D),dt(M.lines,D),dt(M.after,D)}),k=0,e.font=d.string,dt(n.footer,D),e.restore(),v+=y.width,{width:v,height:_}}function MO(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function OO(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function NO(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),OO(l,n,t,e)&&(l="center"),l}function xg(n,t,e){const i=e.yAlign||t.yAlign||MO(n,e);return{xAlign:e.xAlign||t.xAlign||NO(n,t,e,i),yAlign:i}}function LO(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function VO(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Pg(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=s+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=Li(o);let y=LO(t,a);const _=VO(t,c,l);return c==="center"?a==="left"?y+=l:a==="right"&&(y-=l):a==="left"?y-=Math.max(d,f)+s:a==="right"&&(y+=Math.max(h,m)+s),{x:qt(y,0,i.width-t.width),y:qt(_,0,i.height-t.height)}}function aa(n,t,e){const i=ue(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function kg(n){return He([],pn(n))}function FO(n,t,e){return gi(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Cg(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const kw={beforeTitle:dn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:dn,beforeBody:dn,beforeLabel:dn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return nt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:dn,afterBody:dn,beforeFooter:dn,footer:dn,afterFooter:dn};function ye(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?kw[t].call(e,i):s}class Nu extends ze{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new cw(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=FO(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=ye(i,"beforeTitle",this,t),r=ye(i,"title",this,t),o=ye(i,"afterTitle",this,t);let a=[];return a=He(a,pn(s)),a=He(a,pn(r)),a=He(a,pn(o)),a}getBeforeBody(t,e){return kg(ye(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return dt(t,r=>{const o={before:[],lines:[],after:[]},a=Cg(i,r);He(o.before,pn(ye(a,"beforeLabel",this,r))),He(o.lines,ye(a,"label",this,r)),He(o.after,pn(ye(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return kg(ye(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=ye(i,"beforeFooter",this,t),r=ye(i,"footer",this,t),o=ye(i,"afterFooter",this,t);let a=[];return a=He(a,pn(s)),a=He(a,pn(r)),a=He(a,pn(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(DO(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,i))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,i))),dt(a,d=>{const h=Cg(t.callbacks,d);s.push(ye(h,"labelColor",this,d)),r.push(ye(h,"labelPointStyle",this,d)),o.push(ye(h,"labelTextColor",this,d))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=gr[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=Sg(this,i),l=Object.assign({},a,c),d=xg(this.chart,i,l),h=Pg(i,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Li(a),{x:f,y:m}=t,{width:y,height:_}=e;let v,I,k,D,M,N;return r==="center"?(M=m+_/2,s==="left"?(v=f,I=v-o,D=M+o,N=M-o):(v=f+y,I=v+o,D=M-o,N=M+o),k=v):(s==="left"?I=f+Math.max(c,d)+o:s==="right"?I=f+y-Math.max(l,h)-o:I=this.caretX,r==="top"?(D=m,M=D-o,v=I-o,k=I+o):(D=m+_,M=D+o,v=I+o,k=I-o),N=D),{x1:v,x2:I,x3:k,y1:D,y2:M,y3:N}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=ps(i.rtl,this.x,this.width);for(t.x=aa(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=zt(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,d=zt(r.bodyFont),h=aa(this,"left",r),f=s.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,y=e.y+m;if(r.usePointStyle){const _={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=s.leftForLtr(f,l)+l/2,I=y+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Pu(t,_,v,I),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Pu(t,_,v,I)}else{t.lineWidth=rt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(f,l),v=s.leftForLtr(s.xPlus(f,1),l-2),I=Li(o.borderRadius);Object.values(I).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Qr(t,{x:_,y,w:l,h:c,radius:I}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Qr(t,{x:v,y:y+1,w:l-2,h:c-2,radius:I}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,y,l,c),t.strokeRect(_,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(v,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=i,h=zt(i.bodyFont);let f=h.lineHeight,m=0;const y=ps(i.rtl,this.x,this.width),_=function(b){e.fillText(b,y.x(t.x+m),t.y+f/2),t.y+=f+r},v=y.textAlign(o);let I,k,D,M,N,F,T;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=aa(this,v,i),e.fillStyle=i.bodyColor,dt(this.beforeBody,_),m=a&&v!=="right"?o==="center"?l/2+d:l+2+d:0,M=0,F=s.length;M<F;++M){for(I=s[M],k=this.labelTextColors[M],e.fillStyle=k,dt(I.before,_),D=I.lines,a&&D.length&&(this._drawColorBox(e,t,M,y,i),f=Math.max(h.lineHeight,c)),N=0,T=D.length;N<T;++N)_(D[N]),f=h.lineHeight;dt(I.after,_)}m=0,f=h.lineHeight,dt(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const c=ps(i.rtl,this.x,this.width);for(t.x=aa(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=c.textAlign(i.footerAlign),e.textBaseline="middle",o=zt(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=i,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:y}=Li(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+l,c+d-y),e.quadraticCurveTo(a+l,c+d,a+l-y,c+d),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=gr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Sg(this,t),c=Object.assign({},o,this._size),l=xg(e,t,c),d=Pg(t,c,l,e);(s._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=ue(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),nw(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),iw(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!nc(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),c=e||!nc(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=gr[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}z(Nu,"positioners",gr);var BO={id:"tooltip",_element:Nu,positioners:gr,afterInit(n,t,e){e&&(n.tooltip=new Nu({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:kw},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},UO=Object.freeze({__proto__:null,Colors:J1,Decimation:nO,Filler:EO,Legend:PO,SubTitle:RO,Title:CO,Tooltip:BO});const $O=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function zO(n,t,e,i){const s=n.indexOf(t);if(s===-1)return $O(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const jO=(n,t)=>n===null?null:qt(Math.round(n),0,t);function Rg(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Lu extends Ki{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(nt(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:zO(i,t,Q(e,t),this._addedLabels),jO(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Rg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}z(Lu,"id","category"),z(Lu,"defaults",{ticks:{callback:Rg}});function HO(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=r||1,y=d-1,{min:_,max:v}=t,I=!nt(o),k=!nt(a),D=!nt(l),M=(v-_)/(h+1);let N=Sm((v-_)/y/m)*m,F,T,b,E;if(N<1e-14&&!I&&!k)return[{value:_},{value:v}];E=Math.ceil(v/N)-Math.floor(_/N),E>y&&(N=Sm(E*N/y/m)*m),nt(c)||(F=Math.pow(10,c),N=Math.ceil(N*F)/F),s==="ticks"?(T=Math.floor(_/N)*N,b=Math.ceil(v/N)*N):(T=_,b=v),I&&k&&r&&LR((a-o)/r,N/1e3)?(E=Math.round(Math.min((a-o)/N,d)),N=(a-o)/E,T=o,b=a):D?(T=I?o:T,b=k?a:b,E=l-1,N=(b-T)/E):(E=(b-T)/N,kr(E,Math.round(E),N/1e3)?E=Math.round(E):E=Math.ceil(E));const S=Math.max(xm(N),xm(T));F=Math.pow(10,nt(c)?S:c),T=Math.round(T*F)/F,b=Math.round(b*F)/F;let x=0;for(I&&(f&&T!==o?(e.push({value:o}),T<o&&x++,kr(Math.round((T+x*N)*F)/F,o,Dg(o,M,n))&&x++):T<o&&x++);x<E;++x){const P=Math.round((T+x*N)*F)/F;if(k&&P>a)break;e.push({value:P})}return k&&f&&b!==a?e.length&&kr(e[e.length-1].value,a,Dg(a,M,n))?e[e.length-1].value=a:e.push({value:a}):(!k||b===a)&&e.push({value:b}),e}function Dg(n,t,{horizontal:e,minRotation:i}){const s=Be(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class lc extends Ki{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return nt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=e?s:c,a=c=>r=i?r:c;if(t){const c=tn(s),l=tn(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(s-c)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=HO(s,r);return t.bounds==="ticks"&&Bb(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return bo(t,this.chart.options.locale,this.options.ticks.format)}}class Vu extends lc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Dt(t)?t:0,this.max=Dt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Be(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}z(Vu,"id","linear"),z(Vu,"defaults",{ticks:{callback:$c.formatters.numeric}});const Zr=n=>Math.floor(jn(n)),Ti=(n,t)=>Math.pow(10,Zr(n)+t);function Mg(n){return n/Math.pow(10,Zr(n))===1}function Og(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function qO(n,t){const e=t-n;let i=Zr(e);for(;Og(n,t,i)>10;)i++;for(;Og(n,t,i)<10;)i--;return Math.min(i,Zr(n))}function WO(n,{min:t,max:e}){t=Te(n.min,t);const i=[],s=Zr(t);let r=qO(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Te(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)i.push({value:f,major:Mg(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const m=Te(n.max,f);return i.push({value:m,major:Mg(m),significand:h}),i}class Fu extends Ki{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=lc.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return Dt(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Dt(t)?Math.max(0,t):null,this.max=Dt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Dt(this._userMin)&&(this.min=t===Ti(this.min,0)?Ti(this.min,-1):Ti(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Ti(i,-1)),o(Ti(s,1)))),i<=0&&r(Ti(s,-1)),s<=0&&o(Ti(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=WO(e,this);return t.bounds==="ticks"&&Bb(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":bo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=jn(t),this._valueRange=jn(this.max)-jn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(jn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}z(Fu,"id","logarithmic"),z(Fu,"defaults",{ticks:{callback:$c.formatters.logarithmic,major:{enabled:!0}}});function Bu(n){const t=n.ticks;if(t.display&&n.display){const e=ue(t.backdropPadding);return Q(t.font&&t.font.size,Tt.font.size)+e.height}return 0}function GO(n,t,e){return e=It(e)?e:[e],{w:ZR(n,t.string,e),h:e.length*t.lineHeight}}function Ng(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function KO(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?lt/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));s[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+s[c],a),h=zt(l.font),f=GO(n.ctx,h,n._pointLabels[c]);i[c]=f;const m=oe(n.getIndexAngle(c)+a),y=Math.round(vh(m)),_=Ng(y,d.x,f.w,0,180),v=Ng(y,d.y,f.h,90,270);YO(e,t,m,_,v)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=JO(n,i,s)}function YO(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(c=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-c)):s.end>t.b&&(c=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function XO(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,i+s+o,r),l=Math.round(vh(oe(c.angle+Nt))),d=eN(c.y,a.h,l),h=ZO(l),f=tN(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function QO(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(Tn({x:e,y:i},t)||Tn({x:e,y:r},t)||Tn({x:s,y:i},t)||Tn({x:s,y:r},t))}function JO(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Bu(r)/2,additionalAngle:o?lt/s:0};let l;for(let d=0;d<s;d++){c.padding=e[d],c.size=t[d];const h=XO(n,d,c);i.push(h),a==="auto"&&(h.visible=QO(h,l),h.visible&&(l=h))}return i}function ZO(n){return n===0||n===180?"center":n<180?"left":"right"}function tN(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function eN(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function nN(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!nt(a)){const c=Li(t.borderRadius),l=ue(t.backdropPadding);n.fillStyle=a;const d=i-l.left,h=s-l.top,f=r-i+l.width,m=o-s+l.height;Object.values(c).some(y=>y!==0)?(n.beginPath(),Qr(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function iN(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));nN(e,o,r);const a=zt(o.font),{x:c,y:l,textAlign:d}=r;Hi(e,n._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function Cw(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,bt);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function sN(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!i||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),Cw(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function rN(n,t,e){return gi(n,{label:e,index:t,type:"pointLabel"})}class yr extends lc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ue(Bu(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Dt(t)&&!isNaN(t)?t:0,this.max=Dt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Bu(this.options))}generateTickLabels(t){lc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=gt(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?KO(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=bt/(this._pointLabels.length||1),i=this.options.startAngle||0;return oe(t*e+Be(i))}getDistanceFromCenterForValue(t){if(nt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(nt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return rN(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Nt+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Cw(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&iN(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=s.setContext(f),y=r.setContext(f);sN(this,m,c,o,y)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const d=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=i.setContext(this.getContext(c)),d=zt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=ue(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}Hi(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}z(yr,"id","radialLinear"),z(yr,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:$c.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),z(yr,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),z(yr,"descriptors",{angleLines:{_fallback:"grid"}});const Gc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},be=Object.keys(Gc);function Lg(n,t){return n-t}function Vg(n,t){if(nt(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Dt(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(Is(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Fg(n,t,e,i){const s=be.length;for(let r=be.indexOf(n);r<s-1;++r){const o=Gc[be[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return be[r]}return be[s-1]}function oN(n,t,e,i,s){for(let r=be.length-1;r>=be.indexOf(e);r--){const o=be[r];if(Gc[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return be[e?be.indexOf(e):0]}function aN(n){for(let t=be.indexOf(n)+1,e=be.length;t<e;++t)if(Gc[be[t]].common)return be[t]}function Bg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=_h(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function cN(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=e[a],c>=0&&(t[c].major=!0);return t}function Ug(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:cN(n,i,s,e)}class to extends Ki{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new gM._date(t.adapters.date);s.init(e),Pr(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Vg(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=Dt(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=Dt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=UR(s,r,o);return this._unit=e.unit||(i.autoSkip?Fg(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):oN(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:aN(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Ug(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=qt(e,0,o),i=qt(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Fg(r.minUnit,e,i,this._getLabelCapacity(e)),a=Q(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=Is(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const y=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<i;f=+t.add(f,a,o),m++)Bg(d,f,y);return(f===i||s.bounds==="ticks"||m===1)&&Bg(d,f,y),Object.keys(d).sort(Lg).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return gt(o,[t,e,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=i[e],m=l&&h&&f&&f.major;return this._adapter.format(t,s||(m?h:d))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Be(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,Ug(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Vg(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return zb(t.sort(Lg))}}z(to,"id","time"),z(to,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ca(n,t,e){let i=0,s=n.length-1,r,o,a,c;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=In(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:c}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=In(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:c}=n[s]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Uu extends to{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ca(e,this.min),this._tableRange=ca(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)d=s[o+1],c=s[o-1],l=s[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(ca(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return ca(this._table,i*this._tableRange+this._minPos,!0)}}z(Uu,"id","timeseries"),z(Uu,"defaults",to.defaults);var lN=Object.freeze({__proto__:null,CategoryScale:Lu,LinearScale:Vu,LogarithmicScale:Fu,RadialLinearScale:yr,TimeScale:to,TimeSeriesScale:Uu});const uN=[mM,q1,UO,lN];Ke.register(...uN);const ms={};function Ch(n){ms[n]&&(ms[n].destroy(),delete ms[n])}function Rw(){const n=document.documentElement.getAttribute("data-theme")==="dark";return{textColor:n?"#94A3B8":"#64748B",gridColor:n?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",bgColor:n?"#1E2235":"#FFFFFF"}}function $g(n,t){const e=document.getElementById(n);if(!e)return;if(Ch(n),!t||t.length===0){e.getContext("2d").clearRect(0,0,e.width,e.height);return}Rw();const i=new Ke(e,{type:"doughnut",data:{labels:t.map(s=>`${s.emoji} ${s.category}`),datasets:[{data:t.map(s=>s.amount),backgroundColor:$C.slice(0,t.length),borderWidth:0,hoverBorderWidth:2,hoverBorderColor:"#fff",borderRadius:4,spacing:2}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"65%",plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,titleFont:{size:13,weight:"600"},bodyFont:{size:12},callbacks:{label:function(s){const r=s.dataset.data.reduce((a,c)=>a+c,0),o=(s.parsed/r*100).toFixed(1);return` ₹${s.parsed.toLocaleString("en-IN")} (${o}%)`}}}},animation:{animateRotate:!0,duration:800,easing:"easeOutQuart"}}});return ms[n]=i,i}function dN(n,t,e,i){const s=document.getElementById(n);if(!s)return;Ch(n);const{textColor:r,gridColor:o}=Rw(),a=new Ke(s,{type:"bar",data:{labels:t,datasets:[{label:"Income",data:e,backgroundColor:"rgba(16, 185, 129, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7},{label:"Expenses",data:i,backgroundColor:"rgba(239, 68, 68, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{color:r,padding:16,usePointStyle:!0,pointStyle:"rectRounded",font:{size:12,weight:"500"}}},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,callbacks:{label:function(c){return` ${c.dataset.label}: ₹${c.parsed.y.toLocaleString("en-IN")}`}}}},scales:{x:{grid:{display:!1},ticks:{color:r,font:{size:11}}},y:{grid:{color:o},ticks:{color:r,font:{size:11},callback:function(c){return"₹"+c.toLocaleString("en-IN")}},beginAtZero:!0}},animation:{duration:800,easing:"easeOutQuart"}}});return ms[n]=a,a}function hN(){Object.keys(ms).forEach(n=>{Ch(n)})}let Oe={user:null,profile:null,accounts:[],transactions:[]},We=new Date().getMonth(),Mr=new Date().getFullYear();function Dw(n){Oe={...Oe,...n},hN();const{totalMoney:t}=li(Oe.accounts,Oe.transactions),e=xb(Oe.accounts,Oe.transactions),i=`${Mr}-${String(We+1).padStart(2,"0")}`,s=Pb(Oe.transactions,i),r=s.income>0||s.expenses>0;return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Analytics & Reports 📊</h1>
        <p class="page-subtitle">Understand where your money comes from, where it goes, and where it is currently stored.</p>
      </div>

      <!-- Account Distribution Chart Card -->
      <div class="chart-card" style="margin-bottom: var(--space-6);">
        <h3 class="chart-title">Account Money Distribution (${K(t)})</h3>
        <div class="chart-container">
          <canvas id="accounts-distribution-chart"></canvas>
        </div>

        <div class="category-list">
          ${e.map((o,a)=>`
            <div class="category-item">
              <div class="category-color" style="background: ${la(a)};"></div>
              <div class="category-info">
                <div class="category-name">${o.account.icon||"🏦"} ${o.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0,o.percentage)}%; background: ${la(a)};"></div>
                </div>
              </div>
              <div>
                <div class="category-amount">${K(o.balance)}</div>
                <div class="category-percentage">${o.percentage.toFixed(1)}%</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Month Selector Navigation -->
      <div class="month-selector">
        <button class="month-nav-btn" id="btn-month-prev" title="Previous Month">❮</button>
        <div class="month-display">${wb(We)} ${Mr}</div>
        <button class="month-nav-btn" id="btn-month-next" title="Next Month">❯</button>
      </div>

      ${r?`
        <!-- Monthly Overview Cards -->
        <div class="analytics-overview">
          <div class="analytics-stat">
            <div class="analytics-stat-icon">📥</div>
            <div class="analytics-stat-value income">${K(s.income)}</div>
            <div class="analytics-stat-label">Total Income</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">📤</div>
            <div class="analytics-stat-value expense">${K(s.expenses)}</div>
            <div class="analytics-stat-label">Total Expenses</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">💰</div>
            <div class="analytics-stat-value savings">${K(s.savings)}</div>
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
              <div class="highlight-stat-detail">${K(s.highestCategory.amount)} (${s.highestCategory.percentage.toFixed(1)}%)</div>
            `:'<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>'}
          </div>

          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Single Expense</div>
            ${s.highestExpense?`
              <div class="highlight-stat-icon">${Ib(s.highestExpense.category)}</div>
              <div class="highlight-stat-value">${s.highestExpense.reason||s.highestExpense.category}</div>
              <div class="highlight-stat-detail">${K(s.highestExpense.amount)}</div>
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
                  <div class="category-color" style="background: ${la(a)};"></div>
                  <div class="category-info">
                    <div class="category-name">${o.emoji} ${o.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${o.percentage}%; background: ${la(a)};"></div>
                    </div>
                  </div>
                  <div>
                    <div class="category-amount">${K(o.amount)}</div>
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
      `:QC()}
    </div>
  `}function la(n){const t=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];return t[n%t.length]}function Mw(){const n=document.getElementById("btn-month-prev"),t=document.getElementById("btn-month-next");n&&(n.onclick=()=>{We===0?(We=11,Mr--):We--,zg()}),t&&(t.onclick=()=>{We===11?(We=0,Mr++):We++,zg()});const e=xb(Oe.accounts,Oe.transactions);e.length>0&&setTimeout(()=>{$g("accounts-distribution-chart",e.map(r=>({category:r.account.name,emoji:r.account.icon||"🏦",amount:r.balance})))},50);const i=`${Mr}-${String(We+1).padStart(2,"0")}`,s=Pb(Oe.transactions,i);s.categories.length>0&&setTimeout(()=>{$g("categories-chart",s.categories)},50),(s.income>0||s.expenses>0)&&setTimeout(()=>{dN("income-expense-bar-chart",[wb(We)],[s.income],[s.expenses])},50)}function zg(){const n=document.querySelector(".page");n&&(n.outerHTML=Dw(Oe),Mw())}let as={user:null,profile:null,transactions:[],budgets:[]};function fN(n){as={...as,...n};const t=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{monthlyProgress:e,categoryProgress:i}=rb(as.budgets,as.transactions,t);return`
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
            <div class="budget-title">${e?K(e.budget):"Not Set"}</div>
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
            <div>Spent: <strong>${K(e.spent)}</strong></div>
            <div>Remaining: <strong style="color: ${e.remaining<0?"var(--expense)":"var(--income)"};">${K(e.remaining)}</strong></div>
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
                  <span>Budget: ${K(s.budget)} | Spent: ${K(s.spent)}</span>
                  <span style="font-weight: 600; color: ${s.remaining<0?"var(--expense)":"var(--income)"};">
                    ${s.remaining<0?"Exceeded by ":"Remaining: "}${K(Math.abs(s.remaining))}
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
  `}function pN(n){const t=document.getElementById("btn-set-budget-modal");t&&(t.onclick=()=>Xl(n));const e=document.getElementById("btn-quick-monthly-budget");e&&(e.onclick=()=>Xl(n,"monthly"));const i=document.getElementById("btn-add-category-budget");i&&(i.onclick=()=>Xl(n,"category")),document.querySelectorAll(".btn-delete-budget").forEach(s=>{s.onclick=async()=>{const r=s.dataset.category;if(await zi({icon:"🗑️",title:"Delete Budget",message:`Are you sure you want to remove the budget for ${r}?`,danger:!0}))try{await iC(as.user.uid,r),q.success("Budget removed!"),n&&n()}catch{q.error("Unable to remove budget.")}}})}function Xl(n,t="monthly"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,i=`
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
          ${vo.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
  `;Ee({title:"🎯 Set Budget Limit",content:i,onOpen:s=>{let r=t;const o=s.querySelector("#tab-b-monthly"),a=s.querySelector("#tab-b-category"),c=s.querySelector("#group-b-category");o.onclick=()=>{r="monthly",o.classList.add("active"),a.classList.remove("active"),c.style.display="none"},a.onclick=()=>{r="category",a.classList.add("active"),o.classList.remove("active"),c.style.display="block"},s.querySelector("#set-budget-form").onsubmit=async l=>{l.preventDefault();const d=s.querySelector("#budget-amount").value,h=s.querySelector("#budget-category").value;if(s.querySelector("#budget-amount-error").textContent="",!d||Number(d)<=0){s.querySelector("#budget-amount-error").textContent="Please enter a valid budget amount.";return}const f=s.querySelector("#btn-save-budget");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{const m=as.user.uid;r==="monthly"?await eC(m,d,e):await nC(m,h,d,e),$t(),q.success("🎯 Budget set successfully!"),n&&n()}catch{q.error("Unable to save budget."),f.disabled=!1,f.innerHTML="Save Budget"}}}})}let cs={user:null,profile:null};function mN(n){var a;cs={...cs,...n};const{user:t,profile:e}=cs,i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(t==null?void 0:t.email)||(e==null?void 0:e.email)||"",r=i.charAt(0).toUpperCase(),o=e!=null&&e.createdAt?Uc(e.createdAt.split("T")[0]):"Recently";return`
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

        ${(a=cs.profile)!=null&&a.pinEnabled?`
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
  `}function gN(n,t){const e=document.getElementById("btn-edit-profile");e&&(e.onclick=()=>{var c,l;const a=`
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${((c=cs.profile)==null?void 0:c.name)||((l=cs.user)==null?void 0:l.displayName)||""}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;Ee({title:"✏️ Edit Profile",content:a,onOpen:d=>{d.querySelector("#edit-profile-form").onsubmit=async h=>{h.preventDefault();const f=d.querySelector("#profile-name-input").value,m=Bc(f);if(m){d.querySelector("#profile-name-error").textContent=m;return}const y=d.querySelector("#btn-save-profile-name");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Saving...';try{await Qk(f),$t(),q.success("Profile updated!"),t&&t()}catch{q.error("Unable to update profile."),y.disabled=!1,y.innerHTML="Save Changes"}}}})});const i=document.getElementById("btn-change-password");i&&(i.onclick=()=>{Ee({title:"🔑 Change Password",content:`
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
      `,onOpen:a=>{a.querySelector("#change-pass-form").onsubmit=async c=>{c.preventDefault();const l=a.querySelector("#curr-pass").value,d=a.querySelector("#new-pass").value,h=a.querySelector("#confirm-new-pass").value;a.querySelector("#curr-pass-error").textContent="",a.querySelector("#new-pass-error").textContent="",a.querySelector("#confirm-new-pass-error").textContent="";const f=ah(d);if(f){a.querySelector("#new-pass-error").textContent=f;return}const m=mb(d,h);if(m){a.querySelector("#confirm-new-pass-error").textContent=m;return}const y=a.querySelector("#btn-save-new-pass");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Updating...';try{await Jk(l,d),$t(),q.success("Password updated successfully!")}catch{a.querySelector("#curr-pass-error").textContent="Incorrect current password or re-authentication failed.",y.disabled=!1,y.innerHTML="Update Password"}}}})});const s=document.getElementById("btn-profile-logout");s&&(s.onclick=async()=>{await zi({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out of Money Control?",confirmText:"Log Out",danger:!0})&&(await ih(),q.info("Logged out."),n&&n())});const r=document.getElementById("btn-profile-lock-app");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))})}function yN(n,t=[],e="money-control-transactions"){if(!n||n.length===0)throw new Error("No transactions to export.");const i=a=>{const c=t.find(l=>l.id===a);return c?c.name:""},s=["Date","Type","Amount","Reason","Category","From Account","To Account","Notes"],r=n.sort((a,c)=>new Date(a.date)-new Date(c.date)).map(a=>[a.date,a.type,a.amount,`"${(a.reason||"").replace(/"/g,'""')}"`,a.category||"",`"${i(a.sourceAccountId).replace(/"/g,'""')}"`,`"${i(a.destinationAccountId).replace(/"/g,'""')}"`,`"${(a.notes||"").replace(/"/g,'""')}"`]),o=[s.join(","),...r.map(a=>a.join(","))].join(`
`);_N(o,`${e}.csv`,"text/csv")}function vN(n,t,e,i){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],r=`${i}-${String(e+1).padStart(2,"0")}`,o=n.filter(v=>v.date&&v.date.startsWith(r)),a=v=>{const I=t.find(k=>k.id===v);return I?I.name:""},c=o.filter(v=>v.type==="INCOME").reduce((v,I)=>v+I.amount,0),l=o.filter(v=>v.type==="EXPENSE").reduce((v,I)=>v+I.amount,0),d={};o.filter(v=>v.type==="EXPENSE").forEach(v=>{const I=v.category||"Other";d[I]=(d[I]||0)+v.amount});const h=Object.entries(d).sort((v,I)=>I[1]-v[1]),f=`
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
    Generated by Money Control V2 on ${new Date().toLocaleDateString("en-IN",{dateStyle:"long"})}
  </div>
</body>
</html>`,m=new Blob([f],{type:"text/html"}),y=URL.createObjectURL(m),_=window.open(y,"_blank");_&&(_.onload=()=>{setTimeout(()=>URL.revokeObjectURL(y),1e3)})}function _N(n,t,e){const i=new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}let ie={user:null,profile:null,transactions:[]};function Ow(n){var l;ie={...ie,...n};const{profile:t}=ie,e=document.documentElement.getAttribute("data-theme")||"light",i=((l=t==null?void 0:t.settings)==null?void 0:l.allowNegativeBalance)||!1,s=(t==null?void 0:t.initialBalance)||0,r=(t==null?void 0:t.pinEnabled)||!1,o=(t==null?void 0:t.autoLockTimeout)!==void 0?t.autoLockTimeout:5,a=dC(),c=uC();return`
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
                <div class="settings-item-subtitle">Current: ${K(s)}</div>
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
  `}function Nw(n,t){const e=document.getElementById("toggle-pin-lock");e&&(e.onchange=async _=>{if(_.target.checked)bC(ie.user.uid,()=>{t&&t()}),_.target.checked=!1;else if(await zi({icon:"🔓",title:"Disable PIN Lock",message:"Are you sure you want to remove PIN protection? Your financial data will no longer be locked.",confirmText:"Remove PIN",danger:!0}))try{await lb(ie.user.uid),q.success("🔓 PIN lock disabled."),t&&t()}catch{q.error("Unable to disable PIN."),_.target.checked=!0}else _.target.checked=!0});const i=document.getElementById("btn-change-pin");i&&(i.onclick=async()=>{const _=await ec(ie.user.uid);wC(ie.user.uid,_.pinHash,()=>{t&&t()})});const s=document.getElementById("select-auto-lock");s&&(s.onchange=async _=>{const v=parseInt(_.target.value);try{await pC(ie.user.uid,v),q.success("⏱️ Auto-lock updated."),t&&t()}catch{q.error("Unable to update auto-lock setting.")}});const r=document.getElementById("btn-lock-app-now");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))});const o=document.getElementById("btn-install-pwa");o&&(o.onclick=async()=>{await hC()&&(q.success("📲 Money Control installed!"),t&&t())});const a=document.getElementById("btn-theme-light");a&&(a.onclick=()=>{document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),jg()});const c=document.getElementById("btn-theme-dark");c&&(c.onclick=()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),jg()});const l=document.getElementById("toggle-negative-balance");l&&(l.onchange=async _=>{const v=_.target.checked;try{await Lk(ie.user.uid,{allowNegativeBalance:v}),q.success(`Negative balance ${v?"enabled":"disabled"}.`),t&&t()}catch{q.error("Unable to update setting."),_.target.checked=!v}});const d=document.getElementById("btn-edit-initial-balance");d&&(d.onclick=()=>{var I;const v=`
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
              <input type="number" id="new-initial-input" class="form-input" value="${((I=ie.profile)==null?void 0:I.initialBalance)||0}" step="any" min="0" required autofocus />
            </div>
            <div class="form-error" id="new-initial-error"></div>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-initial">Save Initial Balance</button>
        </form>
      `;Ee({title:"💵 Edit Initial Balance",content:v,onOpen:k=>{k.querySelector("#edit-initial-form").onsubmit=async D=>{D.preventDefault();const M=k.querySelector("#new-initial-input").value,N=yo(M);if(N){k.querySelector("#new-initial-error").textContent=N;return}const F=k.querySelector("#btn-save-initial");F.disabled=!0,F.innerHTML='<span class="spinner"></span> Saving...';try{await J_(ie.user.uid,Number(M)),$t(),q.success("Initial balance updated!"),t&&t()}catch{q.error("Unable to update initial balance."),F.disabled=!1,F.innerHTML="Save Initial Balance"}}}})});const h=document.getElementById("btn-export-csv");h&&(h.onclick=()=>{try{yN(ie.transactions,ie.accounts),q.success("📊 Transactions exported to CSV!")}catch(_){q.error(_.message||"Unable to export transactions.")}});const f=document.getElementById("btn-export-report");f&&(f.onclick=()=>{try{const _=new Date;vN(ie.transactions,ie.accounts,_.getMonth(),_.getFullYear()),q.success("📑 Printable report opened!")}catch{q.error("Unable to generate report.")}});const m=document.getElementById("btn-settings-logout");m&&(m.onclick=async()=>{await zi({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out?",confirmText:"Log Out",danger:!0})&&(await ih(),q.info("Logged out."),n&&n())});const y=document.getElementById("btn-settings-delete-account");y&&(y.onclick=()=>{Ee({title:"🚨 Delete Account",content:`
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
      `,onOpen:v=>{v.querySelector("#delete-acc-form").onsubmit=async I=>{I.preventDefault();const k=v.querySelector("#del-pass-input").value;if(v.querySelector("#del-pass-error").textContent="",!k){v.querySelector("#del-pass-error").textContent="Please enter your password.";return}const D=v.querySelector("#btn-confirm-delete-acc");D.disabled=!0,D.innerHTML='<span class="spinner"></span> Deleting...';try{await Zk(k),$t(),q.info("Account deleted."),n&&n()}catch{v.querySelector("#del-pass-error").textContent="Incorrect password or re-authentication failed.",D.disabled=!1,D.innerHTML="Delete My Account Permanently"}}}})})}function jg(){const n=document.querySelector(".page");n&&(n.outerHTML=Ow(ie),Nw())}function Lw(n){return`
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
  `}function Vw(){return`
    <header class="mobile-header">
      <button class="mobile-hamburger-btn" id="mobile-hamburger-btn" aria-label="Open Navigation Menu">
        <span>☰</span>
      </button>
      <div class="mobile-header-brand">
        <img src="/icon-192.png" alt="Money Control" class="mobile-header-logo" />
        <span class="mobile-header-title">Money Control</span>
      </div>
    </header>
  `}function Fw(n,t,e){const i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(e==null?void 0:e.email)||(t==null?void 0:t.email)||"";return`
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
        <div class="mobile-drawer-avatar">${i.charAt(0).toUpperCase()}</div>
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
  `}function Bw(n){return`
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
  `}function bN(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.add("open"),t&&t.classList.add("open"),document.body.style.overflow="hidden"}function ns(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}function wN(n,t){document.querySelectorAll(".sidebar-link[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}}),document.querySelectorAll(".bottom-nav-item[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}});const e=document.getElementById("mobile-add-btn");e&&(e.onclick=()=>{window.dispatchEvent(new CustomEvent("open-add-menu"))});const i=document.getElementById("mobile-hamburger-btn");i&&(i.onclick=()=>bN());const s=document.getElementById("mobile-drawer-close");s&&(s.onclick=()=>ns());const r=document.getElementById("mobile-drawer-overlay");r&&(r.onclick=()=>ns()),document.querySelectorAll(".mobile-drawer-item[data-page]").forEach(l=>{l.onclick=()=>{ns();const d=l.dataset.page;n(d)}});const o=document.getElementById("mobile-drawer-lock-app");o&&(o.onclick=()=>{ns(),t&&t.pinEnabled&&t.pinHash?window.dispatchEvent(new CustomEvent("lock-app")):(q.info("🔒 PIN Lock is not enabled. Go to Settings → PIN Lock to set your PIN."),n("settings"))});const a=document.getElementById("mobile-drawer-logout");a&&(a.onclick=async()=>{ns(),await zi({icon:"🚪",title:"Logout?",message:"Are you sure you want to log out of Money Control?",confirmText:"Logout",danger:!0})&&(await ih(),q.info("Logged out successfully."))});const c=document.getElementById("mobile-drawer");if(c){let l=0;c.ontouchstart=d=>{l=d.touches[0].clientX},c.ontouchmove=d=>{const h=d.touches[0].clientX;l-h>50&&ns()}}}function EN(){return`
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
      ${IN(3)}
    </div>
  `}function IN(n=5){let t="";for(let e=0;e<n;e++)t+=`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;return t}const V={user:null,profile:null,accounts:[],transactions:[],budgets:[],activePage:"dashboard",unsubscribeAccounts:null,unsubscribeTx:null,authLoading:!0,dashboardError:null,isLocked:!1,pinEnabled:!1,pinHash:null,autoLockTimeout:5,lastActivityTime:Date.now()};let Ma=null;function TN(){try{const n=localStorage.getItem("theme");n?document.documentElement.setAttribute("data-theme",n):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.setAttribute("data-theme","dark"))}catch{document.documentElement.setAttribute("data-theme","dark")}}TN();try{sC()}catch(n){console.warn("PWA initialization warning:",n)}const wo=document.getElementById("app");function AN(){wo.innerHTML=`
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
  `}function SN(){AN(),Yk(async n=>{if(V.authLoading=!1,V.unsubscribeAccounts&&(V.unsubscribeAccounts(),V.unsubscribeAccounts=null),V.unsubscribeTx&&(V.unsubscribeTx(),V.unsubscribeTx=null),!n){V.user=null,V.profile=null,V.accounts=[],V.transactions=[],V.budgets=[],V.isLocked=!1,V.pinEnabled=!1,V.pinHash=null,V.dashboardError=null,Oi(),$w(),$u();return}V.user=n,Uw();try{await Rh(n.uid)}catch(t){console.error("Error loading user data:",t),V.dashboardError=t,Le()}}),window.addEventListener("hashchange",CN),window.addEventListener("open-add-menu",()=>{DN()}),window.addEventListener("lock-app",()=>{uc()}),RN()}async function Rh(n){var t,e,i,s,r;V.dashboardError=null;try{const o=new Promise(l=>setTimeout(()=>l(null),8e3));let a=await Promise.race([Wr(n),o]);if(!a){const l=((t=V.user)==null?void 0:t.displayName)||((i=(e=V.user)==null?void 0:e.email)==null?void 0:i.split("@")[0])||"User";try{await Q_(n,{name:l,email:((s=V.user)==null?void 0:s.email)||"",createdAt:new Date().toISOString()}),a=await Wr(n)}catch(d){console.warn("Profile creation fallback:",d),a={name:l,email:((r=V.user)==null?void 0:r.email)||"",initialBalance:0}}}if(V.profile=a,!a||a.initialBalance===null||a.initialBalance===void 0){xN();return}try{await eb(n,a.initialBalance)}catch(l){console.warn("ensureDefaultAccounts warning:",l)}try{V.budgets=await sh(n)}catch{V.budgets=[]}const c=await ec(n);V.pinEnabled=c.pinEnabled,V.pinHash=c.pinHash,V.autoLockTimeout=c.autoLockTimeout!==void 0?c.autoLockTimeout:5,V.unsubscribeAccounts=$k(n,(l,d)=>{d?(console.error("Accounts subscription error:",d),V.dashboardError=d):V.accounts=l,V.isLocked||Le()}),V.unsubscribeTx=jk(n,(l,d)=>{d?console.error("Transactions subscription error:",d):V.transactions=l,V.isLocked||Le()}),V.pinEnabled&&V.pinHash?(V.isLocked=!0,ub(n,V.pinHash,()=>{V.isLocked=!1,V.lastActivityTime=Date.now(),Oa(),Le()})):c.pinSetupPromptShown?(V.isLocked=!1,Oa(),Le()):_C(n,()=>{ec(n).then(l=>{V.pinEnabled=l.pinEnabled,V.pinHash=l.pinHash,V.pinEnabled&&Oa(),Le()})})}catch(o){console.error("loadUserData error:",o),V.dashboardError=o,Le()}}function $u(){wo.innerHTML=OC(),_b(async()=>{const n=Xk();n&&(V.user=n,Uw(),await Rh(n.uid))})}function xN(){wo.innerHTML=NC(),LC(V.user.uid,async()=>{await Rh(V.user.uid)})}function Uw(){wo.innerHTML=`
    <div class="app-layout">
      ${Vw()}
      ${Lw(V.activePage)}
      <main class="main-content">
        ${EN()}
      </main>
      ${Bw(V.activePage)}
      ${Fw(V.activePage,V.user,V.profile)}
    </div>
  `}function Le(){if(V.isLocked)return;const n=window.location.hash.replace("#/","").replace("#","");n&&["dashboard","accounts","transactions","money-control","analytics","budget","profile","settings"].includes(n)?V.activePage=n:V.activePage="dashboard";const t=PN(V.activePage);wo.innerHTML=`
    <div class="app-layout">
      ${Vw()}
      ${Lw(V.activePage)}
      <main class="main-content" id="main-content-area">
        ${t}
      </main>
      ${Bw(V.activePage)}
      ${Fw(V.activePage,V.user,V.profile)}
    </div>
  `,wN(zu,V),kN(V.activePage)}function PN(n){switch(n){case"dashboard":return gm(V);case"accounts":return JC(V);case"transactions":return Cb(V);case"money-control":return Ea(V);case"analytics":return Dw(V);case"budget":return fN(V);case"profile":return mN(V);case"settings":return Ow(V);default:return gm(V)}}function kN(n){const t=async()=>{if(V.user){V.profile=await Wr(V.user.uid),V.budgets=await sh(V.user.uid);const e=await ec(V.user.uid);V.pinEnabled=e.pinEnabled,V.pinHash=e.pinHash,V.autoLockTimeout=e.autoLockTimeout!==void 0?e.autoLockTimeout:5,Le()}};switch(n){case"dashboard":ym(zu,t);break;case"accounts":ZC(t);break;case"transactions":Mb(t);break;case"money-control":Ia(t);break;case"analytics":Mw();break;case"budget":pN(t);break;case"profile":gN(()=>$u(),t);break;case"settings":Nw(()=>$u(),t);break;default:ym(zu,t);break}}function zu(n){V.activePage=n,window.location.hash=`#/${n}`}function CN(){var n;V.user&&((n=V.profile)==null?void 0:n.initialBalance)!==null&&!V.isLocked&&Le()}function uc(){!V.pinEnabled||!V.pinHash||!V.user||(V.isLocked=!0,ub(V.user.uid,V.pinHash,()=>{V.isLocked=!1,V.lastActivityTime=Date.now(),Oa(),Le()}))}function Oa(){if($w(),!V.pinEnabled||!V.pinHash||V.autoLockTimeout<0)return;const n=V.autoLockTimeout===0?0:V.autoLockTimeout*60*1e3;n>0&&(Ma=setInterval(()=>{Date.now()-V.lastActivityTime>=n&&!V.isLocked&&uc()},1e4))}function $w(){Ma&&(clearInterval(Ma),Ma=null)}function RN(){const n=()=>{V.lastActivityTime=Date.now()};["click","keydown","touchstart","scroll"].forEach(t=>{document.addEventListener(t,n,{passive:!0})}),document.addEventListener("visibilitychange",()=>{if(document.hidden||!V.pinEnabled||!V.pinHash||V.isLocked)return;const t=Date.now()-V.lastActivityTime;if(V.autoLockTimeout===0)uc();else if(V.autoLockTimeout>0){const e=V.autoLockTimeout*60*1e3;t>=e&&uc()}})}function DN(){Ee({title:"⚡ Quick Action",content:`
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
  `,onOpen:t=>{const e=t.querySelector("#fab-modal-add-income"),i=t.querySelector("#fab-modal-add-expense"),s=t.querySelector("#fab-modal-transfer"),r=async()=>{V.user&&(V.profile=await Wr(V.user.uid),V.budgets=await sh(V.user.uid),Le())};e&&(e.onclick=()=>Ni("INCOME",r)),i&&(i.onclick=()=>Ni("EXPENSE",r)),s&&(s.onclick=()=>uh(r))}})}SN();window.__appLoaded=!0;
