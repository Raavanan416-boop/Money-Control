var bE=Object.defineProperty;var wE=(n,t,e)=>t in n?bE(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var z=(n,t,e)=>wE(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const EE=()=>{};var Of={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},IE=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),i.push(e[d],e[h],e[f],e[g])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Wm(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):IE(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new TE;const f=r<<2|a>>4;if(i.push(f),l!==64){const g=a<<4&240|l>>2;if(i.push(g),h!==64){const y=l<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class TE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AE=function(n){const t=Wm(n);return Gm.encodeByteArray(t,!0)},La=function(n){return AE(n).replace(/\./g,"")},Km=function(n){try{return Gm.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function SE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xE=()=>SE().__FIREBASE_DEFAULTS__,PE=()=>{if(typeof process>"u"||typeof Of>"u")return;const n=Of.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Km(n[1]);return t&&JSON.parse(t)},hc=()=>{try{return EE()||xE()||PE()||kE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ym=n=>{var t,e;return(e=(t=hc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},CE=n=>{const t=Ym(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Xm=()=>{var n;return(n=hc())===null||n===void 0?void 0:n.config},Qm=n=>{var t;return(t=hc())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function DE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[La(JSON.stringify(e)),La(JSON.stringify(o)),""].join(".")}const vr={};function ME(){const n={prod:[],emulator:[]};for(const t of Object.keys(vr))vr[t]?n.emulator.push(t):n.prod.push(t);return n}function OE(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Nf=!1;function Zm(n,t){if(typeof window>"u"||typeof document>"u"||!Ss(window.location.host)||vr[n]===t||vr[n]||Nf)return;vr[n]=t;function e(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=ME().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,g){f.setAttribute("width","24"),f.setAttribute("id",g),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Nf=!0,o()},f}function d(f,g){f.setAttribute("id",g),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=OE(i),g=e("text"),y=document.getElementById(g)||document.createElement("span"),_=e("learnmore"),v=document.getElementById(_)||document.createElement("a"),I=e("preprendIcon"),k=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const D=f.element;a(D),d(v,_);const M=l();c(k,I),D.append(k,y,v,M),document.body.appendChild(D)}r?(y.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function LE(){var n;const t=(n=hc())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function FE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function BE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UE(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $E(){return!LE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zE(){try{return typeof indexedDB=="object"}catch{return!1}}function jE(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="FirebaseError";class Nn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=HE,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?qE(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,a,i)}}function qE(n,t){return n.replace(WE,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const WE=/\{\$([^}]+)}/g;function GE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Fi(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(Lf(r)&&Lf(o)){if(!Fi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Lf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function sr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function rr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function KE(n,t){const e=new YE(n,t);return e.subscribe.bind(e)}class YE{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");XE(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=yl),s.error===void 0&&(s.error=yl),s.complete===void 0&&(s.complete=yl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XE(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function yl(){}/**
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
 */function K(n){return n&&n._delegate?n._delegate:n}class Bi{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class QE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new RE;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ZE(t))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ai){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ai){return this.instances.has(t)}getOptions(t=Ai){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:JE(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ai){return this.component?this.component.multipleInstances?t:Ai:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(n){return n===Ai?void 0:n}function ZE(n){return n.instantiationMode==="EAGER"}/**
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
 */class tI{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new QE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const eI={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},nI=it.INFO,iI={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},sI=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=iI[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ju{constructor(t){this.name=t,this._logLevel=nI,this._logHandler=sI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const rI=(n,t)=>t.some(e=>n instanceof e);let Vf,Ff;function oI(){return Vf||(Vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,Ql=new WeakMap,ey=new WeakMap,vl=new WeakMap,Hu=new WeakMap;function cI(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Kn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&ty.set(e,n)}).catch(()=>{}),Hu.set(t,n),t}function lI(n){if(Ql.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ql.set(n,t)}let Jl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ql.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ey.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Kn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function uI(n){Jl=n(Jl)}function dI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(_l(this),t,...e);return ey.set(i,t.sort?t.sort():[t]),Kn(i)}:aI().includes(n)?function(...t){return n.apply(_l(this),t),Kn(ty.get(this))}:function(...t){return Kn(n.apply(_l(this),t))}}function hI(n){return typeof n=="function"?dI(n):(n instanceof IDBTransaction&&lI(n),rI(n,oI())?new Proxy(n,Jl):n)}function Kn(n){if(n instanceof IDBRequest)return cI(n);if(vl.has(n))return vl.get(n);const t=hI(n);return t!==n&&(vl.set(n,t),Hu.set(t,n)),t}const _l=n=>Hu.get(n);function fI(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Kn(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Kn(o.result),c.oldVersion,c.newVersion,Kn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],bl=new Map;function Bf(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bl.get(t))return bl.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=gI.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||pI.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return bl.set(t,r),r}uI(n=>({...n,get:(t,e,i)=>Bf(t,e)||n.get(t,e,i),has:(t,e)=>!!Bf(t,e)||n.has(t,e)}));/**
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
 */class mI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(yI(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function yI(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zl="@firebase/app",Uf="0.13.2";/**
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
 */const kn=new ju("@firebase/app"),vI="@firebase/app-compat",_I="@firebase/analytics-compat",bI="@firebase/analytics",wI="@firebase/app-check-compat",EI="@firebase/app-check",II="@firebase/auth",TI="@firebase/auth-compat",AI="@firebase/database",SI="@firebase/data-connect",xI="@firebase/database-compat",PI="@firebase/functions",kI="@firebase/functions-compat",CI="@firebase/installations",RI="@firebase/installations-compat",DI="@firebase/messaging",MI="@firebase/messaging-compat",OI="@firebase/performance",NI="@firebase/performance-compat",LI="@firebase/remote-config",VI="@firebase/remote-config-compat",FI="@firebase/storage",BI="@firebase/storage-compat",UI="@firebase/firestore",$I="@firebase/ai",zI="@firebase/firestore-compat",jI="firebase",HI="11.10.0";/**
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
 */const tu="[DEFAULT]",qI={[Zl]:"fire-core",[vI]:"fire-core-compat",[bI]:"fire-analytics",[_I]:"fire-analytics-compat",[EI]:"fire-app-check",[wI]:"fire-app-check-compat",[II]:"fire-auth",[TI]:"fire-auth-compat",[AI]:"fire-rtdb",[SI]:"fire-data-connect",[xI]:"fire-rtdb-compat",[PI]:"fire-fn",[kI]:"fire-fn-compat",[CI]:"fire-iid",[RI]:"fire-iid-compat",[DI]:"fire-fcm",[MI]:"fire-fcm-compat",[OI]:"fire-perf",[NI]:"fire-perf-compat",[LI]:"fire-rc",[VI]:"fire-rc-compat",[FI]:"fire-gcs",[BI]:"fire-gcs-compat",[UI]:"fire-fst",[zI]:"fire-fst-compat",[$I]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
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
 */const Va=new Map,WI=new Map,eu=new Map;function $f(n,t){try{n.container.addComponent(t)}catch(e){kn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ms(n){const t=n.name;if(eu.has(t))return kn.debug(`There were multiple attempts to register component ${t}.`),!1;eu.set(t,n);for(const e of Va.values())$f(e,n);for(const e of WI.values())$f(e,n);return!0}function qu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function At(n){return n==null?!1:n.settings!==void 0}/**
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
 */const GI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new eo("app","Firebase",GI);/**
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
 */class KI{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=HI;function ny(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:tu,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw Yn.create("bad-app-name",{appName:String(s)});if(e||(e=Xm()),!e)throw Yn.create("no-options");const r=Va.get(s);if(r){if(Fi(e,r.options)&&Fi(i,r.config))return r;throw Yn.create("duplicate-app",{appName:s})}const o=new tI(s);for(const c of eu.values())o.addComponent(c);const a=new KI(e,i,o);return Va.set(s,a),a}function iy(n=tu){const t=Va.get(n);if(!t&&n===tu&&Xm())return ny();if(!t)throw Yn.create("no-app",{appName:n});return t}function Xn(n,t,e){var i;let s=(i=qI[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}ms(new Bi(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const YI="firebase-heartbeat-database",XI=1,Or="firebase-heartbeat-store";let wl=null;function sy(){return wl||(wl=fI(YI,XI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Or)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yn.create("idb-open",{originalErrorMessage:n.message})})),wl}async function QI(n){try{const e=(await sy()).transaction(Or),i=await e.objectStore(Or).get(ry(n));return await e.done,i}catch(t){if(t instanceof Nn)kn.warn(t.message);else{const e=Yn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kn.warn(e.message)}}}async function zf(n,t){try{const i=(await sy()).transaction(Or,"readwrite");await i.objectStore(Or).put(t,ry(n)),await i.done}catch(e){if(e instanceof Nn)kn.warn(e.message);else{const i=Yn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kn.warn(i.message)}}}function ry(n){return`${n.name}!${n.options.appId}`}/**
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
 */const JI=1024,ZI=30;class tT{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new nT(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jf();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>ZI){const o=iT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){kn.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jf(),{heartbeatsToSend:i,unsentEntries:s}=eT(this._heartbeatsCache.heartbeats),r=La(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return kn.warn(e),""}}}function jf(){return new Date().toISOString().substring(0,10)}function eT(n,t=JI){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Hf(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Hf(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class nT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zE()?jE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await QI(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Hf(n){return La(JSON.stringify({version:2,heartbeats:n})).length}function iT(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function sT(n){ms(new Bi("platform-logger",t=>new mI(t),"PRIVATE")),ms(new Bi("heartbeat",t=>new tT(t),"PRIVATE")),Xn(Zl,Uf,n),Xn(Zl,Uf,"esm2017"),Xn("fire-js","")}sT("");function Wu(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}/**
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
 */const rT={PHONE:"phone",TOTP:"totp"},oT={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},aT={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},cT={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},lT={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dT=uT,ay=oy,cy=new eo("auth","Firebase",oy()),hT={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new ju("@firebase/auth");function fT(n,...t){Fa.logLevel<=it.WARN&&Fa.warn(`Auth (${Ps}): ${n}`,...t)}function da(n,...t){Fa.logLevel<=it.ERROR&&Fa.error(`Auth (${Ps}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,...t){throw Ku(n,...t)}function pe(n,...t){return Ku(n,...t)}function Gu(n,t,e){const i=Object.assign(Object.assign({},ay()),{[t]:e});return new eo("auth","Firebase",i).create(t,{appName:n.name})}function Wt(n){return Gu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ks(n,t,e){const i=e;if(!(t instanceof i))throw i.name!==t.constructor.name&&we(n,"argument-error"),Gu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ku(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return cy.create(n,...t)}function U(n,t,...e){if(!n)throw Ku(t,...e)}function Ye(n){const t="INTERNAL ASSERTION FAILED: "+n;throw da(t),new Error(t)}function Cn(n,t){n||Ye(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Yu(){return qf()==="http:"||qf()==="https:"}function qf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yu()||FE()||"connection"in navigator)?navigator.onLine:!0}function gT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e){this.shortDelay=t,this.longDelay=e,Cn(e>t,"Short delay should be less than long delay!"),this.isMobile=NE()||BE()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ly{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vT=new no(3e4,6e4);function wt(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Et(n,t,e,i,s={}){return uy(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=xs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return VE()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Ss(n.emulatorConfig.host)&&(l.credentials="include"),ly.fetch()(await dy(n,n.config.apiHost,e,a),l)})}async function uy(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},mT),t);try{const s=new bT(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw or(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gu(n,d,l);we(n,d)}}catch(s){if(s instanceof Nn)throw s;we(n,"network-request-failed",{message:String(s)})}}async function Ln(n,t,e,i,s={}){const r=await Et(n,t,e,i,s);return"mfaPendingCredential"in r&&we(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function dy(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?Xu(n.config,s):`${n.config.apiScheme}://${s}`;return yT.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function _T(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(pe(this.auth,"network-request-failed")),vT.get())})}}function or(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=pe(n,t,i);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n){return n!==void 0&&n.getResponse!==void 0}function Gf(n){return n!==void 0&&n.enterprise!==void 0}class hy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return _T(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(n){return(await Et(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function fy(n,t){return Et(n,"GET","/v2/recaptchaConfig",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(n,t){return Et(n,"POST","/v1/accounts:delete",t)}async function IT(n,t){return Et(n,"POST","/v1/accounts:update",t)}async function Ba(n,t){return Et(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function TT(n,t=!1){return K(n).getIdToken(t)}async function py(n,t=!1){const e=K(n),i=await e.getIdToken(t),s=fc(i);U(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:_r(El(s.auth_time)),issuedAtTime:_r(El(s.iat)),expirationTime:_r(El(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function El(n){return Number(n)*1e3}function fc(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const s=Km(e);return s?JSON.parse(s):(da("Failed to decode base64 JWT payload"),null)}catch(s){return da("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kf(n){const t=fc(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof Nn&&AT(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function AT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Lr(n){var t;const e=n.auth,i=await n.getIdToken(),s=await Rn(n,Ba(e,{idToken:i}));U(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?my(r.providerUserInfo):[],a=xT(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new nu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function gy(n){const t=K(n);await Lr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function xT(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function my(n){return n.map(t=>{var{providerId:e}=t,i=Wu(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(n,t){const e=await uy(n,{},async()=>{const i=xs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await dy(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return n.emulatorConfig&&Ss(n.emulatorConfig.host)&&(c.credentials="include"),ly.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function kT(n,t){return Et(n,"POST","/v2/accounts:revokeToken",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Kf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){U(t.length!==0,"internal-error");const e=Kf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await PT(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new ls;return i&&(U(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(U(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(U(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Ve{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,r=Wu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ST(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Rn(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return py(this,t)}reload(){return gy(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ve(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Lr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Wt(this.auth));const t=await this.getIdToken();return await Rn(this,ET(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,r,o,a,c,l,d;const h=(i=e.displayName)!==null&&i!==void 0?i:void 0,f=(s=e.email)!==null&&s!==void 0?s:void 0,g=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,v=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=e.createdAt)!==null&&l!==void 0?l:void 0,k=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:D,emailVerified:M,isAnonymous:N,providerData:F,stsTokenManager:T}=e;U(D&&T,t,"internal-error");const b=ls.fromJSON(this.name,T);U(typeof D=="string",t,"internal-error"),$n(h,t.name),$n(f,t.name),U(typeof M=="boolean",t,"internal-error"),U(typeof N=="boolean",t,"internal-error"),$n(g,t.name),$n(y,t.name),$n(_,t.name),$n(v,t.name),$n(I,t.name),$n(k,t.name);const E=new Ve({uid:D,auth:t,email:f,emailVerified:M,displayName:h,isAnonymous:N,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:b,createdAt:I,lastLoginAt:k});return F&&Array.isArray(F)&&(E.providerData=F.map(S=>Object.assign({},S))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(t,e,i=!1){const s=new ls;s.updateFromServerResponse(e);const r=new Ve({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Lr(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];U(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?my(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new ls;a.updateFromIdToken(i);const c=new Ve({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new nu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new Map;function bn(n){Cn(n instanceof Function,"Expected a class definition");let t=Yf.get(n);return t?(Cn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Yf.set(n,t),t)}/**
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
 */class yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}yy.type="NONE";const iu=yy;/**
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
 */function ha(n,t,e){return`firebase:${n}:${t}:${e}`}class us{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ha(this.userKey,s.apiKey,r),this.fullPersistenceKey=ha("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Ba(this.auth,{idToken:t}).catch(()=>{});return e?Ve._fromGetAccountInfoResponse(this.auth,e,t):null}return Ve._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new us(bn(iu),t,i);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||bn(iu);const o=ha(i,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){let h;if(typeof d=="string"){const f=await Ba(t,{idToken:d}).catch(()=>{});if(!f)break;h=await Ve._fromGetAccountInfoResponse(t,f,d)}else h=Ve._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new us(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new us(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Iy(t))return"Blackberry";if(Ty(t))return"Webos";if(_y(t))return"Safari";if((t.includes("chrome/")||by(t))&&!t.includes("edge/"))return"Chrome";if(Ey(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vy(n=le()){return/firefox\//i.test(n)}function _y(n=le()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function by(n=le()){return/crios\//i.test(n)}function wy(n=le()){return/iemobile/i.test(n)}function Ey(n=le()){return/android/i.test(n)}function Iy(n=le()){return/blackberry/i.test(n)}function Ty(n=le()){return/webos/i.test(n)}function Qu(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CT(n=le()){var t;return Qu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function RT(){return UE()&&document.documentMode===10}function Ay(n=le()){return Qu(n)||Ey(n)||Ty(n)||Iy(n)||/windows phone/i.test(n)||wy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n,t=[]){let e;switch(n){case"Browser":e=Xf(le());break;case"Worker":e=`${Xf(le())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ps}/${i}`}/**
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
 */class DT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function MT(n,t={}){return Et(n,"GET","/v2/passwordPolicy",wt(n,t))}/**
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
 */const OT=6;class NT{constructor(t){var e,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:OT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qf(this),this.idTokenSubscription=new Qf(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=bn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await us.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ba(this,{idToken:t}),i=await Ve._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Lr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=gT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(At(this.app))return Promise.reject(Wt(this));const e=t?K(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return At(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await MT(this),e=new NT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new eo("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await kT(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&bn(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[bn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,i,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&fT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mt(n){return K(n)}class Qf{constructor(t){this.auth=t,this.observer=null,this.addObserver=KE(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VT(n){io=n}function Ju(n){return io.loadJS(n)}function FT(){return io.recaptchaV2Script}function BT(){return io.recaptchaEnterpriseScript}function UT(){return io.gapiScript}function xy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=500,zT=6e4,zo=1e12;class jT{constructor(t){this.auth=t,this.counter=zo,this._widgets=new Map}render(t,e){const i=this.counter;return this._widgets.set(i,new WT(t,this.auth.name,e||{})),this.counter++,i}reset(t){var e;const i=t||zo;(e=this._widgets.get(i))===null||e===void 0||e.delete(),this._widgets.delete(i)}getResponse(t){var e;const i=t||zo;return((e=this._widgets.get(i))===null||e===void 0?void 0:e.getResponse())||""}async execute(t){var e;const i=t||zo;return(e=this._widgets.get(i))===null||e===void 0||e.execute(),""}}class HT{constructor(){this.enterprise=new qT}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class qT{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class WT{constructor(t,e,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof t=="string"?document.getElementById(t):t;U(s,"argument-error",{appName:e}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=GT(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch{}this.isVisible&&this.execute()},zT)},$T))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function GT(n){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}const KT="recaptcha-enterprise",br="NO_RECAPTCHA";class Py{constructor(t){this.type=KT,this.auth=Mt(t)}async verify(t="verify",e=!1){async function i(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{fy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new hy(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Gf(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(br)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HT().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!e&&Gf(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=BT();c.length!==0&&(c+=a),Ju(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Js(n,t,e,i=!1,s=!1){const r=new Py(n);let o;if(s)o=br;else try{o=await r.verify(e)}catch{o=await r.verify(e,!0)}const a=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Qn(n,t,e,i,s){var r,o;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Js(n,t,e,e==="getOobCode");return i(n,a)}else return i(n,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Js(n,t,e,e==="getOobCode");return i(n,c)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Js(n,t,e);return i(n,a).catch(async c=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${e} flow.`);const d=await Js(n,t,e,!1,!0);return i(n,d)}return Promise.reject(c)})}else{const a=await Js(n,t,e,!1,!0);return i(n,a)}else return Promise.reject(s+" provider is not supported.")}async function ky(n){const t=Mt(n),e=await fy(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new hy(e);t.tenantId==null?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.isAnyProviderEnabled()&&new Py(t).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n,t){const e=qu(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(Fi(r,t??{}))return s;we(s,"already-initialized")}return e.initialize({options:t})}function YT(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(bn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function Ry(n,t,e){const i=Mt(n);U(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(e!=null&&e.disableWarnings),r=Dy(t),{host:o,port:a}=XT(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){U(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),U(Fi(l,i.config.emulator)&&Fi(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Ss(o)?(Jm(`${r}//${o}${c}`),Zm("Auth",!0)):s||QT()}function Dy(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function XT(n){const t=Dy(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Jf(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Jf(o)}}}function Jf(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function QT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function My(n,t){return Et(n,"POST","/v1/accounts:resetPassword",wt(n,t))}async function JT(n,t){return Et(n,"POST","/v1/accounts:update",t)}async function ZT(n,t){return Et(n,"POST","/v1/accounts:signUp",t)}async function t0(n,t){return Et(n,"POST","/v1/accounts:update",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(n,t){return Ln(n,"POST","/v1/accounts:signInWithPassword",wt(n,t))}async function pc(n,t){return Et(n,"POST","/v1/accounts:sendOobCode",wt(n,t))}async function n0(n,t){return pc(n,t)}async function i0(n,t){return pc(n,t)}async function s0(n,t){return pc(n,t)}async function r0(n,t){return pc(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(n,t){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,t))}async function a0(n,t){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Cs{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new ys(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new ys(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qn(t,e,"signInWithPassword",e0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return o0(t,{email:this._email,oobCode:this._password});default:we(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qn(t,i,"signUpPassword",ZT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return a0(t,{idToken:e,email:this._email,oobCode:this._password});default:we(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n,t){return Ln(n,"POST","/v1/accounts:signInWithIdp",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="http://localhost";class en extends Cs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new en(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):we("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,r=Wu(e,["providerId","signInMethod"]);if(!i||!s)return null;const o=new en(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return An(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,An(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,An(t,e)}buildRequest(){const t={requestUri:c0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=xs(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(n,t){return Et(n,"POST","/v1/accounts:sendVerificationCode",wt(n,t))}async function l0(n,t){return Ln(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,t))}async function u0(n,t){const e=await Ln(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,t));if(e.temporaryProof)throw or(n,"account-exists-with-different-credential",e);return e}const d0={USER_NOT_FOUND:"user-not-found"};async function h0(n,t){const e=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Ln(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,e),d0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Cs{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Jn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Jn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return l0(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return u0(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return h0(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:i,verificationCode:s}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:i,code:s}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:e,verificationCode:i,phoneNumber:s,temporaryProof:r}=t;return!i&&!e&&!s&&!r?null:new Jn({verificationId:e,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p0(n){const t=sr(rr(n)).link,e=t?sr(rr(t)).deep_link_id:null,i=sr(rr(n)).deep_link_id;return(i?sr(rr(i)).link:null)||i||e||t||n}class Rs{constructor(t){var e,i,s,r,o,a;const c=sr(rr(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,h=f0((s=c.mode)!==null&&s!==void 0?s:null);U(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=p0(t);try{return new Rs(e)}catch{return null}}}function g0(n){return Rs.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends Vn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class wr extends Ds{static credentialFromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;return U("providerId"in e&&"signInMethod"in e,"argument-error"),en._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return U(t.idToken||t.accessToken,"argument-error"),en._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return wr.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return wr.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:a}=t;if(!i&&!s&&!e&&!r||!a)return null;try{return new wr(a)._credential({idToken:e,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Ds{constructor(){super("facebook.com")}static credential(t){return en._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return mn.credential(t.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const y0="saml.";class Ua extends Vn{constructor(t){U(t.startsWith(y0),"argument-error"),super(t)}static credentialFromResult(t){return Ua.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return Ua.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=Vr.fromJSON(t);return U(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:i}=t;if(!e||!i)return null;try{return Vr._create(i,e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Oy(n,t){return Ln(n,"POST","/v1/accounts:signUp",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Ve._fromIdTokenResponse(t,i,s),o=tp(i);return new Re({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=tp(i);return new Re({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function tp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(n){var t;if(At(n.app))return Promise.reject(Wt(n));const e=Mt(n);if(await e._initializationPromise,!((t=e.currentUser)===null||t===void 0)&&t.isAnonymous)return new Re({user:e.currentUser,providerId:null,operationType:"signIn"});const i=await Oy(e,{returnSecureToken:!0}),s=await Re._fromIdTokenResponse(e,"signIn",i,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Nn{constructor(t,e,i,s){var r;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new $a(t,e,i,s)}}function Ny(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(n,r,t,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(n){return new Set(n.map(({providerId:t})=>t).filter(t=>!!t))}/**
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
 */async function _0(n,t){const e=K(n);await gc(!0,e,t);const{providerUserInfo:i}=await IT(e.auth,{idToken:await e.getIdToken(),deleteProvider:[t]}),s=Ly(i||[]);return e.providerData=e.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(e.phoneNumber=null),await e.auth._persistUserIfCurrent(e),e}async function Zu(n,t,e=!1){const i=await Rn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Re._forOperation(n,"link",i)}async function gc(n,t,e){await Lr(t);const i=Ly(t.providerData),s=n===!1?"provider-already-linked":"no-such-provider";U(i.has(e)===n,t.auth,s)}/**
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
 */async function Vy(n,t,e=!1){const{auth:i}=n;if(At(i.app))return Promise.reject(Wt(i));const s="reauthenticate";try{const r=await Rn(n,Ny(i,s,t,n),e);U(r.idToken,i,"internal-error");const o=fc(r.idToken);U(o,i,"internal-error");const{sub:a}=o;return U(n.uid===a,i,"user-mismatch"),Re._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&we(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(n,t,e=!1){if(At(n.app))return Promise.reject(Wt(n));const i="signIn",s=await Ny(n,i,t),r=await Re._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}async function mc(n,t){return Fy(Mt(n),t)}async function By(n,t){const e=K(n);return await gc(!1,e,t.providerId),Zu(e,t)}async function yc(n,t){return Vy(K(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(n,t){return Ln(n,"POST","/v1/accounts:signInWithCustomToken",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(n,t){if(At(n.app))return Promise.reject(Wt(n));const e=Mt(n),i=await b0(e,{token:t,returnSecureToken:!0}),s=await Re._fromIdTokenResponse(e,"signIn",i);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function vc(n,t,e){var i;U(((i=e.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),U(typeof e.dynamicLinkDomain>"u"||e.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),U(typeof e.linkDomain>"u"||e.linkDomain.length>0,n,"invalid-hosting-link-domain"),t.continueUrl=e.url,t.dynamicLinkDomain=e.dynamicLinkDomain,t.linkDomain=e.linkDomain,t.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(U(e.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),t.iOSBundleId=e.iOS.bundleId),e.android&&(U(e.android.packageName.length>0,n,"missing-android-pkg-name"),t.androidInstallApp=e.android.installApp,t.androidMinimumVersionCode=e.android.minimumVersion,t.androidPackageName=e.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(n){const t=Mt(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Uy(n,t,e){const i=Mt(n),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};e&&vc(i,s,e),await Qn(i,s,"getOobCode",i0,"EMAIL_PASSWORD_PROVIDER")}async function E0(n,t,e){await My(K(n),{oobCode:t,newPassword:e}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&nd(n),i})}async function I0(n,t){await t0(K(n),{oobCode:t})}async function $y(n,t){const e=K(n),i=await My(e,{oobCode:t}),s=i.requestType;switch(U(s,e,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(i.newEmail,e,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(i.mfaInfo,e,"internal-error");default:U(i.email,e,"internal-error")}let r=null;return i.mfaInfo&&(r=so._fromServerResponse(Mt(e),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function T0(n,t){const{data:e}=await $y(K(n),t);return e.email}async function zy(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n),o=await Qn(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Oy,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nd(n),c}),a=await Re._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function jy(n,t,e){return At(n.app)?Promise.reject(Wt(n)):mc(K(n),rn.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&nd(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(n,t,e){const i=Mt(n),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function r(o,a){U(a.handleCodeInApp,i,"argument-error"),a&&vc(i,o,a)}r(s,e),await Qn(i,s,"getOobCode",s0,"EMAIL_PASSWORD_PROVIDER")}function S0(n,t){const e=Rs.parseLink(t);return(e==null?void 0:e.operation)==="EMAIL_SIGNIN"}async function x0(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=K(n),s=rn.credentialWithLink(t,e||Nr());return U(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),mc(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(n,t){return Et(n,"POST","/v1/accounts:createAuthUri",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(n,t){const e=Yu()?Nr():"http://localhost",i={identifier:t,continueUri:e},{signinMethods:s}=await P0(K(n),i);return s||[]}async function C0(n,t){const e=K(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};t&&vc(e.auth,s,t);const{email:r}=await n0(e.auth,s);r!==n.email&&await n.reload()}async function R0(n,t,e){const i=K(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:t};e&&vc(i.auth,r,e);const{email:o}=await r0(i.auth,r);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n,t){return Et(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function id(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const i=K(n),r={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await Rn(i,D0(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function M0(n,t){const e=K(n);return At(e.auth.app)?Promise.reject(Wt(e.auth)):qy(e,t,null)}function Hy(n,t){return qy(K(n),null,t)}async function qy(n,t,e){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(r.email=t),e&&(r.password=e);const o=await Rn(n,JT(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function O0(n){var t,e;if(!n)return null;const{providerId:i}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const o=(e=(t=fc(n.idToken))===null||t===void 0?void 0:t.firebase)===null||e===void 0?void 0:e.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ds(r,a)}}if(!i)return null;switch(i){case"facebook.com":return new N0(r,s);case"github.com":return new L0(r,s);case"google.com":return new V0(r,s);case"twitter.com":return new F0(r,s,n.screenName||null);case"custom":case"anonymous":return new ds(r,null);default:return new ds(r,i,s)}}class ds{constructor(t,e,i={}){this.isNewUser=t,this.providerId=e,this.profile=i}}class Wy extends ds{constructor(t,e,i,s){super(t,e,i),this.username=s}}class N0 extends ds{constructor(t,e){super(t,"facebook.com",e)}}class L0 extends Wy{constructor(t,e){super(t,"github.com",e,typeof(e==null?void 0:e.login)=="string"?e==null?void 0:e.login:null)}}class V0 extends ds{constructor(t,e){super(t,"google.com",e)}}class F0 extends Wy{constructor(t,e,i){super(t,"twitter.com",e,i)}}function B0(n){const{user:t,_tokenResponse:e}=n;return t.isAnonymous&&!e?{providerId:null,isNewUser:!1,profile:null}:O0(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(n,t){return K(n).setPersistence(t)}function U0(n){return ky(n)}async function $0(n,t){return Mt(n).validatePassword(t)}function Ky(n,t,e,i){return K(n).onIdTokenChanged(t,e,i)}function Yy(n,t,e){return K(n).beforeAuthStateChanged(t,e)}function Xy(n,t,e,i){return K(n).onAuthStateChanged(t,e,i)}function z0(n){K(n).useDeviceLanguage()}function j0(n,t){return K(n).updateCurrentUser(t)}function Qy(n){return K(n).signOut()}function H0(n,t){return Mt(n).revokeAccessToken(t)}async function Jy(n){return K(n).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sd{constructor(t,e,i){this.session=t,this.hints=e,this.signInResolver=i}static _fromError(t,e){const i=Mt(t),s=e.customData._serverResponse,r=(s.mfaInfo||[]).map(a=>so._fromServerResponse(i,a));U(s.mfaPendingCredential,i,"internal-error");const o=Pi._fromMfaPendingCredential(s.mfaPendingCredential);return new sd(o,r,async a=>{const c=await a._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(e.operationType){case"signIn":const d=await Re._fromIdTokenResponse(i,e.operationType,l);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return U(e.user,i,"internal-error"),Re._forOperation(e.user,e.operationType,l);default:we(i,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function q0(n,t){var e;const i=K(n),s=t;return U(t.customData.operationType,i,"argument-error"),U((e=s.customData._serverResponse)===null||e===void 0?void 0:e.mfaPendingCredential,i,"argument-error"),sd._fromError(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:start",wt(n,t))}function W0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:finalize",wt(n,t))}function G0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:start",wt(n,t))}function K0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:finalize",wt(n,t))}function Y0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:withdraw",wt(n,t))}class rd{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(i=>so._fromServerResponse(t.auth,i)))})}static _fromUser(t){return new rd(t)}async getSession(){return Pi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(t,e){const i=t,s=await this.getSession(),r=await Rn(this.user,i._process(this.user.auth,s,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){const e=typeof t=="string"?t:t.uid,i=await this.user.getIdToken();try{const s=await Rn(this.user,Y0(this.user.auth,{idToken:i,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==e),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const Il=new WeakMap;function X0(n){const t=K(n);return Il.has(t)||Il.set(t,rd._fromUser(t)),Il.get(t)}const za="__sak";/**
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
 */class Zy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(za,"1"),this.storage.removeItem(za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=1e3,J0=10;class tv extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ay(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);RT()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,J0):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},Q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}tv.type="LOCAL";const od=tv;/**
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
 */const Z0=1e3;function Tl(n){var t,e;const i=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),s=RegExp(`${i}=([^;]+)`);return(e=(t=document.cookie.match(s))===null||t===void 0?void 0:t[1])!==null&&e!==void 0?e:null}function Al(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class ev{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(t){if(typeof window===void 0)return t;const e=new URL(`${window.location.origin}/__cookies__`);return e.searchParams.set("finalTarget",t),e}async _isAvailable(){var t;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(t=navigator.cookieEnabled)!==null&&t!==void 0?t:!0}async _set(t,e){}async _get(t){if(!this._isAvailable())return null;const e=Al(t);if(window.cookieStore){const i=await window.cookieStore.get(e);return i==null?void 0:i.value}return Tl(e)}async _remove(t){if(!this._isAvailable()||!await this._get(t))return;const i=Al(t);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(t,e){if(!this._isAvailable())return;const i=Al(t);if(window.cookieStore){const a=(l=>{const d=l.changed.find(f=>f.name===i);d&&e(d.value),l.deleted.find(f=>f.name===i)&&e(null)}),c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(e,c),window.cookieStore.addEventListener("change",a)}let s=Tl(i);const r=setInterval(()=>{const a=Tl(i);a!==s&&(e(a),s=a)},Z0),o=()=>clearInterval(r);this.listenerUnsubscribes.set(e,o)}_removeListener(t,e){const i=this.listenerUnsubscribes.get(e);i&&(i(),this.listenerUnsubscribes.delete(e))}}ev.type="COOKIE";const tA=ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}nv.type="SESSION";const ad=nv;/**
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
 */function eA(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class _c{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new _c(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await eA(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class nA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=bc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function iA(n){Ft().location.href=n}/**
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
 */function cd(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function sA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oA(){return cd()?self:null}/**
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
 */const iv="firebaseLocalStorageDb",aA=1,ja="firebaseLocalStorage",sv="fbase_key";class ro{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function wc(n,t){return n.transaction([ja],t?"readwrite":"readonly").objectStore(ja)}function cA(){const n=indexedDB.deleteDatabase(iv);return new ro(n).toPromise()}function su(){const n=indexedDB.open(iv,aA);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ja,{keyPath:sv})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ja)?t(i):(i.close(),await cA(),t(await su()))})})}async function np(n,t,e){const i=wc(n,!0).put({[sv]:t,value:e});return new ro(i).toPromise()}async function lA(n,t){const e=wc(n,!1).get(t),i=await new ro(e).toPromise();return i===void 0?null:i.value}function ip(n,t){const e=wc(n,!0).delete(t);return new ro(e).toPromise()}const uA=800,dA=3;class rv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>dA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(oA()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await sA(),!this.activeServiceWorker)return;this.sender=new nA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await su();return await np(t,za,"1"),await ip(t,za),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>np(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>lA(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ip(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=wc(s,!1).getAll();return new ro(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rv.type="LOCAL";const ov=rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:start",wt(n,t))}function hA(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:finalize",wt(n,t))}function fA(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:finalize",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=xy("rcb"),pA=new no(3e4,6e4);class gA{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Ft().grecaptcha)===null||t===void 0)&&t.render)}load(t,e=""){return U(mA(e),t,"argument-error"),this.shouldResolveImmediately(e)&&Wf(Ft().grecaptcha)?Promise.resolve(Ft().grecaptcha):new Promise((i,s)=>{const r=Ft().setTimeout(()=>{s(pe(t,"network-request-failed"))},pA.get());Ft()[Sl]=()=>{Ft().clearTimeout(r),delete Ft()[Sl];const a=Ft().grecaptcha;if(!a||!Wf(a)){s(pe(t,"internal-error"));return}const c=a.render;a.render=(l,d)=>{const h=c(l,d);return this.counter++,h},this.hostLanguage=e,i(a)};const o=`${FT()}?${xs({onload:Sl,render:"explicit",hl:e})}`;Ju(o).catch(()=>{clearTimeout(r),s(pe(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var e;return!!(!((e=Ft().grecaptcha)===null||e===void 0)&&e.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mA(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class yA{async load(t){return new jT(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="recaptcha",vA={theme:"light",type:"image"};class _A{constructor(t,e,i=Object.assign({},vA)){this.parameters=i,this.type=Er,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Mt(t),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;U(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yA:new gA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),i=e.getResponse(t);return i||new Promise(s=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(i=>i(e)),typeof t=="function")t(e);else if(typeof t=="string"){const i=Ft()[t];typeof i=="function"&&i(e)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){U(Yu()&&!cd(),this.auth,"internal-error"),await bA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await wT(this.auth);U(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function bA(){let n=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}n=()=>t(),window.addEventListener("load",n)}).catch(t=>{throw n&&window.removeEventListener("load",n),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=Jn._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function wA(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n),s=await Ec(i,t,K(e));return new ld(s,r=>mc(i,r))}async function EA(n,t,e){const i=K(n);await gc(!1,i,"phone");const s=await Ec(i.auth,t,K(e));return new ld(s,r=>By(i,r))}async function IA(n,t,e){const i=K(n);if(At(i.auth.app))return Promise.reject(Wt(i.auth));const s=await Ec(i.auth,t,K(e));return new ld(s,r=>yc(i,r))}async function Ec(n,t,e){var i;if(!n._getRecaptchaConfig())try{await ky(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof t=="string"?s={phoneNumber:t}:s=t,"session"in s){const r=s.session;if("phoneNumber"in s){U(r.type==="enroll",n,"internal-error");const o={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Qn(n,o,"mfaSmsEnrollment",async(d,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===br){U((e==null?void 0:e.type)===Er,d,"argument-error");const f=await xl(d,h,e);return ep(d,f)}return ep(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{U(r.type==="signin",n,"internal-error");const o=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;U(o,n,"missing-multi-factor-info");const a={mfaPendingCredential:r.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Qn(n,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===br){U((e==null?void 0:e.type)===Er,h,"argument-error");const g=await xl(h,f,e);return sp(h,g)}return sp(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const r={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Qn(n,r,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===br){U((e==null?void 0:e.type)===Er,l,"argument-error");const h=await xl(l,d,e);return Zf(l,h)}return Zf(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{e==null||e._reset()}}async function TA(n,t){const e=K(n);if(At(e.auth.app))return Promise.reject(Wt(e.auth));await Zu(e,t)}async function xl(n,t,e){U(e.type===Er,n,"argument-error");const i=await e.verify();U(typeof i=="string",n,"argument-error");const s=Object.assign({},t);if("phoneEnrollmentInfo"in s){const r=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,c=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:r,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:c}}),s}else if("phoneSignInInfo"in s){const r=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:r,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.providerId=Ri.PROVIDER_ID,this.auth=Mt(t)}verifyPhoneNumber(t,e){return Ec(this.auth,t,K(e))}static credential(t,e){return Jn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ri.credentialFromTaggedObject(e)}static credentialFromError(t){return Ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:i}=t;return e&&i?Jn._fromTokenResponse(e,i):null}}Ri.PROVIDER_ID="phone";Ri.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class ud extends Cs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return An(t,this._buildIdpRequest())}_linkToIdToken(t,e){return An(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return An(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function AA(n){return Fy(n.auth,new ud(n),n.bypassAuthState)}function SA(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Vy(e,new ud(n),n.bypassAuthState)}async function xA(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Zu(e,new ud(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return AA;case"linkViaPopup":case"linkViaRedirect":return xA;case"reauthViaPopup":case"reauthViaRedirect":return SA;default:we(this.auth,"internal-error")}}resolve(t){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new no(2e3,1e4);async function kA(n,t,e){if(At(n.app))return Promise.reject(pe(n,"operation-not-supported-in-this-environment"));const i=Mt(n);ks(n,t,Vn);const s=qi(i,e);return new wn(i,"signInViaPopup",t,s).executeNotNull()}async function CA(n,t,e){const i=K(n);if(At(i.auth.app))return Promise.reject(pe(i.auth,"operation-not-supported-in-this-environment"));ks(i.auth,t,Vn);const s=qi(i.auth,e);return new wn(i.auth,"reauthViaPopup",t,s,i).executeNotNull()}async function RA(n,t,e){const i=K(n);ks(i.auth,t,Vn);const s=qi(i.auth,e);return new wn(i.auth,"linkViaPopup",t,s,i).executeNotNull()}class wn extends av{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const t=bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,PA.get())};t()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="pendingRedirect",fa=new Map;class MA extends av{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=fa.get(this.auth._key());if(!t){try{const i=await OA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}fa.set(this.auth._key(),t)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OA(n,t){const e=lv(t),i=cv(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}async function dd(n,t){return cv(n)._set(lv(t),"true")}function NA(n,t){fa.set(n._key(),t)}function cv(n){return bn(n._redirectPersistence)}function lv(n){return ha(DA,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n,t,e){return VA(n,t,e)}async function VA(n,t,e){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n);ks(n,t,Vn),await i._initializationPromise;const s=qi(i,e);return await dd(s,i),s._openRedirect(i,t,"signInViaRedirect")}function FA(n,t,e){return BA(n,t,e)}async function BA(n,t,e){const i=K(n);if(ks(i.auth,t,Vn),At(i.auth.app))return Promise.reject(Wt(i.auth));await i.auth._initializationPromise;const s=qi(i.auth,e);await dd(s,i.auth);const r=await dv(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",r)}function UA(n,t,e){return $A(n,t,e)}async function $A(n,t,e){const i=K(n);ks(i.auth,t,Vn),await i.auth._initializationPromise;const s=qi(i.auth,e);await gc(!1,i,t.providerId),await dd(s,i.auth);const r=await dv(i);return s._openRedirect(i.auth,t,"linkViaRedirect",r)}async function zA(n,t){return await Mt(n)._initializationPromise,uv(n,t,!1)}async function uv(n,t,e=!1){if(At(n.app))return Promise.reject(Wt(n));const i=Mt(n),s=qi(i,t),o=await new MA(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function dv(n){const t=bc(`${n.uid}:::`);return n._redirectEventId=t,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=600*1e3;class HA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qA(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!hv(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(pe(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jA&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(t))}saveEventToCache(t){this.cachedEventUids.add(rp(t)),this.lastProcessedEventTime=Date.now()}}function rp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function hv({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function qA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,t={}){return Et(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KA=/^https?/;async function YA(n){if(n.config.emulator)return;const{authorizedDomains:t}=await WA(n);for(const e of t)try{if(XA(e))return}catch{}we(n,"unauthorized-domain")}function XA(n){const t=Nr(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!KA.test(e))return!1;if(GA.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const QA=new no(3e4,6e4);function op(){const n=Ft().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function JA(n){return new Promise((t,e)=>{var i,s,r;function o(){op(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{op(),e(pe(n,"network-request-failed"))},timeout:QA.get()})}if(!((s=(i=Ft().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=Ft().gapi)===null||r===void 0)&&r.load)o();else{const a=xy("iframefcb");return Ft()[a]=()=>{gapi.load?o():e(pe(n,"network-request-failed"))},Ju(`${UT()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw pa=null,t})}let pa=null;function ZA(n){return pa=pa||JA(n),pa}/**
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
 */const tS=new no(5e3,15e3),eS="__/auth/iframe",nS="emulator/auth/iframe",iS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rS(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Xu(t,nS):`https://${n.config.authDomain}/${eS}`,i={apiKey:t.apiKey,appName:n.name,v:Ps},s=sS.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${xs(i).slice(1)}`}async function oS(n){const t=await ZA(n),e=Ft().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:rS(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=pe(n,"network-request-failed"),a=Ft().setTimeout(()=>{r(o)},tS.get());function c(){Ft().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const aS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cS=500,lS=600,uS="_blank",dS="http://localhost";class ap{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hS(n,t,e,i=cS,s=lS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},aS),{width:i.toString(),height:s.toString(),top:r,left:o}),l=le().toLowerCase();e&&(a=by(l)?uS:e),vy(l)&&(t=t||dS,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(CT(l)&&a!=="_self")return fS(t||"",a),new ap(null);const h=window.open(t||"",a,d);U(h,n,"popup-blocked");try{h.focus()}catch{}return new ap(h)}function fS(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const pS="__/auth/handler",gS="emulator/auth/handler",mS=encodeURIComponent("fac");async function cp(n,t,e,i,s,r){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:Ps,eventId:s};if(t instanceof Vn){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",GE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof Ds){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${mS}=${encodeURIComponent(c)}`:"";return`${yS(n)}?${xs(a).slice(1)}${l}`}function yS({config:n}){return n.emulator?Xu(n,gS):`https://${n.authDomain}/${pS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class vS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ad,this._completeRedirectFn=uv,this._overrideRedirectResult=NA}async _openPopup(t,e,i,s){var r;Cn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await cp(t,e,i,Nr(),s);return hS(t,o,bc())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await cp(t,e,i,Nr(),s);return iA(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(Cn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await oS(t),i=new HA(t);return e.register("authEvent",s=>(U(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Pl,{type:Pl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Pl];o!==void 0&&e(!!o),we(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=YA(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ay()||_y()||Qu()}}const fv=vS;class pv{constructor(t){this.factorId=t}_process(t,e,i){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,i);case"signin":return this._finalizeSignIn(t,e.credential);default:return Ye("unexpected MultiFactorSessionType")}}}class hd extends pv{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new hd(t)}_finalizeEnroll(t,e,i){return W0(t,{idToken:e,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return hA(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gv{constructor(){}static assertion(t){return hd._fromCredential(t)}}gv.FACTOR_ID="phone";class mv{static assertionForEnrollment(t,e){return Fr._fromSecret(t,e)}static assertionForSignIn(t,e){return Fr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const i=t;U(typeof((e=i.user)===null||e===void 0?void 0:e.auth)<"u","internal-error");const s=await G0(i.user.auth,{idToken:i.credential,totpEnrollmentInfo:{}});return Ic._fromStartTotpMfaEnrollmentResponse(s,i.user.auth)}}mv.FACTOR_ID="totp";class Fr extends pv{constructor(t,e,i){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=i}static _fromSecret(t,e){return new Fr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Fr(e,t)}async _finalizeEnroll(t,e,i){return U(typeof this.secret<"u",t,"argument-error"),K0(t,{idToken:e,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){U(this.enrollmentId!==void 0&&this.otp!==void 0,t,"argument-error");const i={verificationCode:this.otp};return fA(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}}class Ic{constructor(t,e,i,s,r,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=i,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Ic(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var i;let s=!1;return(jo(t)||jo(e))&&(s=!0),s&&(jo(t)&&(t=((i=this.auth.currentUser)===null||i===void 0?void 0:i.email)||"unknownuser"),jo(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function jo(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var lp="@firebase/auth",up="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wS(n){ms(new Bi("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sy(n)},l=new LT(i,s,r,c);return YT(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),ms(new Bi("auth-internal",t=>{const e=Mt(t.getProvider("auth").getImmediate());return(i=>new _S(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(lp,up,bS(n)),Xn(lp,up,"esm2017")}/**
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
 */const ES=300,IS=Qm("authIdTokenMaxAge")||ES;let dp=null;const TS=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>IS)return;const s=e==null?void 0:e.token;dp!==s&&(dp=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yv(n=iy()){const t=qu(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Cy(n,{popupRedirectResolver:fv,persistence:[ov,od,ad]}),i=Qm("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=TS(r.toString());Yy(e,o,()=>o(e.currentUser)),Ky(e,a=>o(a))}}const s=Ym("auth");return s&&Ry(e,`http://${s}`),e}function AS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}VT({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=pe("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",AS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wS("Browser");const SS=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:lT,ActionCodeURL:Rs,AuthCredential:Cs,AuthErrorCodes:hT,EmailAuthCredential:ys,EmailAuthProvider:rn,FacebookAuthProvider:mn,FactorId:rT,GithubAuthProvider:vn,GoogleAuthProvider:yn,OAuthCredential:en,OAuthProvider:wr,OperationType:cT,PhoneAuthCredential:Jn,PhoneAuthProvider:Ri,PhoneMultiFactorGenerator:gv,ProviderId:oT,RecaptchaVerifier:_A,SAMLAuthProvider:Ua,SignInMethod:aT,TotpMultiFactorGenerator:mv,TotpSecret:Ic,TwitterAuthProvider:_n,applyActionCode:I0,beforeAuthStateChanged:Yy,browserCookiePersistence:tA,browserLocalPersistence:od,browserPopupRedirectResolver:fv,browserSessionPersistence:ad,checkActionCode:$y,confirmPasswordReset:E0,connectAuthEmulator:Ry,createUserWithEmailAndPassword:zy,debugErrorMap:dT,deleteUser:Jy,fetchSignInMethodsForEmail:k0,getAdditionalUserInfo:B0,getAuth:yv,getIdToken:TT,getIdTokenResult:py,getMultiFactorResolver:q0,getRedirectResult:zA,inMemoryPersistence:iu,indexedDBLocalPersistence:ov,initializeAuth:Cy,initializeRecaptchaConfig:U0,isSignInWithEmailLink:S0,linkWithCredential:By,linkWithPhoneNumber:EA,linkWithPopup:RA,linkWithRedirect:UA,multiFactor:X0,onAuthStateChanged:Xy,onIdTokenChanged:Ky,parseActionCodeURL:g0,prodErrorMap:ay,reauthenticateWithCredential:yc,reauthenticateWithPhoneNumber:IA,reauthenticateWithPopup:CA,reauthenticateWithRedirect:FA,reload:gy,revokeAccessToken:H0,sendEmailVerification:C0,sendPasswordResetEmail:Uy,sendSignInLinkToEmail:A0,setPersistence:Gy,signInAnonymously:v0,signInWithCredential:mc,signInWithCustomToken:w0,signInWithEmailAndPassword:jy,signInWithEmailLink:x0,signInWithPhoneNumber:wA,signInWithPopup:kA,signInWithRedirect:LA,signOut:Qy,unlink:_0,updateCurrentUser:j0,updateEmail:M0,updatePassword:Hy,updatePhoneNumber:TA,updateProfile:id,useDeviceLanguage:z0,validatePassword:$0,verifyBeforeUpdateEmail:R0,verifyPasswordResetCode:T0},Symbol.toStringTag,{value:"Module"}));var xS="firebase",PS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(xS,PS,"app");var hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,vv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,b){function E(){}E.prototype=b.prototype,T.D=b.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(S,x,P){for(var A=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)A[ot-2]=arguments[ot];return b.prototype[x].apply(S,A)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,b,E){E||(E=0);var S=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)S[x]=b.charCodeAt(E++)|b.charCodeAt(E++)<<8|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<24;else for(x=0;16>x;++x)S[x]=b[E++]|b[E++]<<8|b[E++]<<16|b[E++]<<24;b=T.g[0],E=T.g[1],x=T.g[2];var P=T.g[3],A=b+(P^E&(x^P))+S[0]+3614090360&4294967295;b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[1]+3905402710&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[2]+606105819&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[3]+3250441966&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[4]+4118548399&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[5]+1200080426&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[6]+2821735955&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[7]+4249261313&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[8]+1770035416&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[9]+2336552879&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[10]+4294925233&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[11]+2304563134&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[12]+1804603682&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[13]+4254626195&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[14]+2792965006&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[15]+1236535329&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(x^P&(E^x))+S[1]+4129170786&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[6]+3225465664&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[11]+643717713&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[0]+3921069994&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[5]+3593408605&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[10]+38016083&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[15]+3634488961&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[4]+3889429448&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[9]+568446438&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[14]+3275163606&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[3]+4107603335&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[8]+1163531501&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[13]+2850285829&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[2]+4243563512&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[7]+1735328473&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[12]+2368359562&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(E^x^P)+S[5]+4294588738&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[8]+2272392833&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[11]+1839030562&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[14]+4259657740&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[1]+2763975236&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[4]+1272893353&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[7]+4139469664&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[10]+3200236656&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[13]+681279174&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[0]+3936430074&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[3]+3572445317&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[6]+76029189&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[9]+3654602809&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[12]+3873151461&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[15]+530742520&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[2]+3299628645&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(x^(E|~P))+S[0]+4096336452&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[7]+1126891415&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[14]+2878612391&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[5]+4237533241&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[12]+1700485571&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[3]+2399980690&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[10]+4293915773&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[1]+2240044497&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[8]+1873313359&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[15]+4264355552&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[6]+2734768916&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[13]+1309151649&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[4]+4149444226&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[11]+3174756917&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[2]+718787259&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+b&4294967295,T.g[1]=T.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+P&4294967295}i.prototype.u=function(T,b){b===void 0&&(b=T.length);for(var E=b-this.blockSize,S=this.B,x=this.h,P=0;P<b;){if(x==0)for(;P<=E;)s(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<b;)if(S[x++]=T.charCodeAt(P++),x==this.blockSize){s(this,S),x=0;break}}else for(;P<b;)if(S[x++]=T[P++],x==this.blockSize){s(this,S),x=0;break}}this.h=x,this.o+=b},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var b=1;b<T.length-8;++b)T[b]=0;var E=8*this.o;for(b=T.length-8;b<T.length;++b)T[b]=E&255,E/=256;for(this.u(T),T=Array(16),b=E=0;4>b;++b)for(var S=0;32>S;S+=8)T[E++]=this.g[b]>>>S&255;return T};function r(T,b){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=b(T)}function o(T,b){this.h=b;for(var E=[],S=!0,x=T.length-1;0<=x;x--){var P=T[x]|0;S&&P==b||(E[x]=P,S=!1)}this.g=E}var a={};function c(T){return-128<=T&&128>T?r(T,function(b){return new o([b|0],0>b?-1:0)}):new o([T|0],0>T?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return v(l(-T));for(var b=[],E=1,S=0;T>=E;S++)b[S]=T/E|0,E*=4294967296;return new o(b,0)}function d(T,b){if(T.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T.charAt(0)=="-")return v(d(T.substring(1),b));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=l(Math.pow(b,8)),S=h,x=0;x<T.length;x+=8){var P=Math.min(8,T.length-x),A=parseInt(T.substring(x,x+P),b);8>P?(P=l(Math.pow(b,P)),S=S.j(P).add(l(A))):(S=S.j(E),S=S.add(l(A)))}return S}var h=c(0),f=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(_(this))return-v(this).m();for(var T=0,b=1,E=0;E<this.g.length;E++){var S=this.i(E);T+=(0<=S?S:4294967296+S)*b,b*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(_(this))return"-"+v(this).toString(T);for(var b=l(Math.pow(T,6)),E=this,S="";;){var x=M(E,b).g;E=I(E,x.j(b));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=x,y(E))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var b=0;b<T.g.length;b++)if(T.g[b]!=0)return!1;return!0}function _(T){return T.h==-1}n.l=function(T){return T=I(this,T),_(T)?-1:y(T)?0:1};function v(T){for(var b=T.g.length,E=[],S=0;S<b;S++)E[S]=~T.g[S];return new o(E,~T.h).add(f)}n.abs=function(){return _(this)?v(this):this},n.add=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0,x=0;x<=b;x++){var P=S+(this.i(x)&65535)+(T.i(x)&65535),A=(P>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);S=A>>>16,P&=65535,A&=65535,E[x]=A<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(T,b){return T.add(v(b))}n.j=function(T){if(y(this)||y(T))return h;if(_(this))return _(T)?v(this).j(v(T)):v(v(this).j(T));if(_(T))return v(this.j(v(T)));if(0>this.l(g)&&0>T.l(g))return l(this.m()*T.m());for(var b=this.g.length+T.g.length,E=[],S=0;S<2*b;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var x=0;x<T.g.length;x++){var P=this.i(S)>>>16,A=this.i(S)&65535,ot=T.i(x)>>>16,et=T.i(x)&65535;E[2*S+2*x]+=A*et,k(E,2*S+2*x),E[2*S+2*x+1]+=P*et,k(E,2*S+2*x+1),E[2*S+2*x+1]+=A*ot,k(E,2*S+2*x+1),E[2*S+2*x+2]+=P*ot,k(E,2*S+2*x+2)}for(S=0;S<b;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=b;S<2*b;S++)E[S]=0;return new o(E,0)};function k(T,b){for(;(T[b]&65535)!=T[b];)T[b+1]+=T[b]>>>16,T[b]&=65535,b++}function D(T,b){this.g=T,this.h=b}function M(T,b){if(y(b))throw Error("division by zero");if(y(T))return new D(h,h);if(_(T))return b=M(v(T),b),new D(v(b.g),v(b.h));if(_(b))return b=M(T,v(b)),new D(v(b.g),b.h);if(30<T.g.length){if(_(T)||_(b))throw Error("slowDivide_ only works with positive integers.");for(var E=f,S=b;0>=S.l(T);)E=N(E),S=N(S);var x=F(E,1),P=F(S,1);for(S=F(S,2),E=F(E,2);!y(S);){var A=P.add(S);0>=A.l(T)&&(x=x.add(E),P=A),S=F(S,1),E=F(E,1)}return b=I(T,x.j(b)),new D(x,b)}for(x=h;0<=T.l(b);){for(E=Math.max(1,Math.floor(T.m()/b.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=l(E),A=P.j(b);_(A)||0<A.l(T);)E-=S,P=l(E),A=P.j(b);y(P)&&(P=f),x=x.add(P),T=I(T,A)}return new D(x,T)}n.A=function(T){return M(this,T).h},n.and=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)&T.i(S);return new o(E,this.h&T.h)},n.or=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)|T.i(S);return new o(E,this.h|T.h)},n.xor=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)^T.i(S);return new o(E,this.h^T.h)};function N(T){for(var b=T.g.length+1,E=[],S=0;S<b;S++)E[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(E,T.h)}function F(T,b){var E=b>>5;b%=32;for(var S=T.g.length-E,x=[],P=0;P<S;P++)x[P]=0<b?T.i(P+E)>>>b|T.i(P+E+1)<<32-b:T.i(P+E);return new o(x,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,vv=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Zn=o}).apply(typeof hp<"u"?hp:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _v,ar,bv,ga,ru,wv,Ev,Iv;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,m){return u==Array.prototype||u==Object.prototype||(u[p]=m.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var p=0;p<u.length;++p){var m=u[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=e(this);function s(u,p){if(p)t:{var m=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var R=u[w];if(!(R in m))break t;m=m[R]}u=u[u.length-1],w=m[u],p=p(w),p!=w&&p!=null&&t(m,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var m=0,w=!1,R={next:function(){if(!w&&m<u.length){var O=m++;return{value:p(O,u[O]),done:!1}}return w=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(u){return u||function(){return r(this,function(p,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,m){return u.call.apply(u.bind,arguments)}function h(u,p,m){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,w),u.apply(p,R)}}return function(){return u.apply(p,arguments)}}function f(u,p,m){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function g(u,p){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function y(u,p){function m(){}m.prototype=p.prototype,u.aa=p.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(w,R,O){for(var $=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)$[pt-2]=arguments[pt];return p.prototype[R].apply(w,$)}}function _(u){const p=u.length;if(0<p){const m=Array(p);for(let w=0;w<p;w++)m[w]=u[w];return m}return[]}function v(u,p){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const R=u.length||0,O=w.length||0;u.length=R+O;for(let $=0;$<O;$++)u[R+$]=w[$]}else u.push(w)}}class I{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function k(u){return/^[\s\xa0]*$/.test(u)}function D(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function M(u){return M[" "](u),u}M[" "]=function(){};var N=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function F(u,p,m){for(const w in u)p.call(m,u[w],w,u)}function T(u,p){for(const m in u)p.call(void 0,u[m],m,u)}function b(u){const p={};for(const m in u)p[m]=u[m];return p}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(u,p){let m,w;for(let R=1;R<arguments.length;R++){w=arguments[R];for(m in w)u[m]=w[m];for(let O=0;O<E.length;O++)m=E[O],Object.prototype.hasOwnProperty.call(w,m)&&(u[m]=w[m])}}function x(u){var p=1;u=u.split(":");const m=[];for(;0<p&&u.length;)m.push(u.shift()),p--;return u.length&&m.push(u.join(":")),m}function P(u){a.setTimeout(()=>{throw u},0)}function A(){var u=Lt;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ot{constructor(){this.h=this.g=null}add(p,m){const w=et.get();w.set(p,m),this.h?this.h.next=w:this.g=w,this.h=w}}var et=new I(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,Gt=!1,Lt=new ot,on=()=>{const u=a.Promise.resolve(void 0);ft=()=>{u.then(Yi)}};var Yi=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(m){P(m)}var p=et;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Gt=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xt(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var an=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,p),a.removeEventListener("test",m,p)}catch{}return u})();function De(u,p){if(xt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(N){t:{try{M(p.nodeName);var R=!0;break t}catch{}R=!1}R||(p=null)}}else m=="mouseover"?p=u.fromElement:m=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:cn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&De.aa.h.call(this)}}y(De,xt);var cn={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Io="closure_listenable_"+(1e6*Math.random()|0),jw=0;function Hw(u,p,m,w,R){this.listener=u,this.proxy=null,this.src=p,this.type=m,this.capture=!!w,this.ha=R,this.key=++jw,this.da=this.fa=!1}function To(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ao(u){this.src=u,this.g={},this.h=0}Ao.prototype.add=function(u,p,m,w,R){var O=u.toString();u=this.g[O],u||(u=this.g[O]=[],this.h++);var $=Yc(u,p,w,R);return-1<$?(p=u[$],m||(p.fa=!1)):(p=new Hw(p,this.src,O,!!w,R),p.fa=m,u.push(p)),p};function Kc(u,p){var m=p.type;if(m in u.g){var w=u.g[m],R=Array.prototype.indexOf.call(w,p,void 0),O;(O=0<=R)&&Array.prototype.splice.call(w,R,1),O&&(To(p),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Yc(u,p,m,w){for(var R=0;R<u.length;++R){var O=u[R];if(!O.da&&O.listener==p&&O.capture==!!m&&O.ha==w)return R}return-1}var Xc="closure_lm_"+(1e6*Math.random()|0),Qc={};function Oh(u,p,m,w,R){if(Array.isArray(p)){for(var O=0;O<p.length;O++)Oh(u,p[O],m,w,R);return null}return m=Vh(m),u&&u[Io]?u.K(p,m,l(w)?!!w.capture:!1,R):qw(u,p,m,!1,w,R)}function qw(u,p,m,w,R,O){if(!p)throw Error("Invalid event type");var $=l(R)?!!R.capture:!!R,pt=Zc(u);if(pt||(u[Xc]=pt=new Ao(u)),m=pt.add(p,m,w,$,O),m.proxy)return m;if(w=Ww(),m.proxy=w,w.src=u,w.listener=m,u.addEventListener)an||(R=$),R===void 0&&(R=!1),u.addEventListener(p.toString(),w,R);else if(u.attachEvent)u.attachEvent(Lh(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ww(){function u(m){return p.call(u.src,u.listener,m)}const p=Gw;return u}function Nh(u,p,m,w,R){if(Array.isArray(p))for(var O=0;O<p.length;O++)Nh(u,p[O],m,w,R);else w=l(w)?!!w.capture:!!w,m=Vh(m),u&&u[Io]?(u=u.i,p=String(p).toString(),p in u.g&&(O=u.g[p],m=Yc(O,m,w,R),-1<m&&(To(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete u.g[p],u.h--)))):u&&(u=Zc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Yc(p,m,w,R)),(m=-1<u?p[u]:null)&&Jc(m))}function Jc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Io])Kc(p.i,u);else{var m=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(m,w,u.capture):p.detachEvent?p.detachEvent(Lh(m),w):p.addListener&&p.removeListener&&p.removeListener(w),(m=Zc(p))?(Kc(m,u),m.h==0&&(m.src=null,p[Xc]=null)):To(u)}}}function Lh(u){return u in Qc?Qc[u]:Qc[u]="on"+u}function Gw(u,p){if(u.da)u=!0;else{p=new De(p,this);var m=u.listener,w=u.ha||u.src;u.fa&&Jc(u),u=m.call(w,p)}return u}function Zc(u){return u=u[Xc],u instanceof Ao?u:null}var tl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vh(u){return typeof u=="function"?u:(u[tl]||(u[tl]=function(p){return u.handleEvent(p)}),u[tl])}function Zt(){de.call(this),this.i=new Ao(this),this.M=this,this.F=null}y(Zt,de),Zt.prototype[Io]=!0,Zt.prototype.removeEventListener=function(u,p,m,w){Nh(this,u,p,m,w)};function he(u,p){var m,w=u.F;if(w)for(m=[];w;w=w.F)m.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new xt(p,u);else if(p instanceof xt)p.target=p.target||u;else{var R=p;p=new xt(w,u),S(p,R)}if(R=!0,m)for(var O=m.length-1;0<=O;O--){var $=p.g=m[O];R=So($,w,!0,p)&&R}if($=p.g=u,R=So($,w,!0,p)&&R,R=So($,w,!1,p)&&R,m)for(O=0;O<m.length;O++)$=p.g=m[O],R=So($,w,!1,p)&&R}Zt.prototype.N=function(){if(Zt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var m=u.g[p],w=0;w<m.length;w++)To(m[w]);delete u.g[p],u.h--}}this.F=null},Zt.prototype.K=function(u,p,m,w){return this.i.add(String(u),p,!1,m,w)},Zt.prototype.L=function(u,p,m,w){return this.i.add(String(u),p,!0,m,w)};function So(u,p,m,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var R=!0,O=0;O<p.length;++O){var $=p[O];if($&&!$.da&&$.capture==m){var pt=$.listener,Kt=$.ha||$.src;$.fa&&Kc(u.i,$),R=pt.call(Kt,w)!==!1&&R}}return R&&!w.defaultPrevented}function Fh(u,p,m){if(typeof u=="function")m&&(u=f(u,m));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Bh(u){u.g=Fh(()=>{u.g=null,u.i&&(u.i=!1,Bh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Kw extends de{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Bh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bs(u){de.call(this),this.h=u,this.g={}}y(Bs,de);var Uh=[];function $h(u){F(u.g,function(p,m){this.g.hasOwnProperty(m)&&Jc(p)},u),u.g={}}Bs.prototype.N=function(){Bs.aa.N.call(this),$h(this)},Bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var el=a.JSON.stringify,Yw=a.JSON.parse,Xw=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function nl(){}nl.prototype.h=null;function zh(u){return u.h||(u.h=u.i())}function jh(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function il(){xt.call(this,"d")}y(il,xt);function sl(){xt.call(this,"c")}y(sl,xt);var yi={},Hh=null;function xo(){return Hh=Hh||new Zt}yi.La="serverreachability";function qh(u){xt.call(this,yi.La,u)}y(qh,xt);function $s(u){const p=xo();he(p,new qh(p))}yi.STAT_EVENT="statevent";function Wh(u,p){xt.call(this,yi.STAT_EVENT,u),this.stat=p}y(Wh,xt);function fe(u){const p=xo();he(p,new Wh(p,u))}yi.Ma="timingevent";function Gh(u,p){xt.call(this,yi.Ma,u),this.size=p}y(Gh,xt);function zs(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function js(){this.g=!0}js.prototype.xa=function(){this.g=!1};function Qw(u,p,m,w,R,O){u.info(function(){if(u.g)if(O)for(var $="",pt=O.split("&"),Kt=0;Kt<pt.length;Kt++){var ct=pt[Kt].split("=");if(1<ct.length){var te=ct[0];ct=ct[1];var ee=te.split("_");$=2<=ee.length&&ee[1]=="type"?$+(te+"="+ct+"&"):$+(te+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+w+") [attempt "+R+"]: "+p+`
`+m+`
`+$})}function Jw(u,p,m,w,R,O,$){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+R+"]: "+p+`
`+m+`
`+O+" "+$})}function Xi(u,p,m,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+tE(u,m)+(w?" "+w:"")})}function Zw(u,p){u.info(function(){return"TIMEOUT: "+p})}js.prototype.info=function(){};function tE(u,p){if(!u.g)return p;if(!p)return null;try{var m=JSON.parse(p);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var w=m[u];if(!(2>w.length)){var R=w[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return el(m)}catch{return p}}var Po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rl;function ko(){}y(ko,nl),ko.prototype.g=function(){return new XMLHttpRequest},ko.prototype.i=function(){return{}},rl=new ko;function Fn(u,p,m,w){this.j=u,this.i=p,this.l=m,this.R=w||1,this.U=new Bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yh}function Yh(){this.i=null,this.g="",this.h=!1}var Xh={},ol={};function al(u,p,m){u.L=1,u.v=Mo(ln(p)),u.m=m,u.P=!0,Qh(u,null)}function Qh(u,p){u.F=Date.now(),Co(u),u.A=ln(u.v);var m=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),hf(m.i,"t",w),u.C=0,m=u.j.J,u.h=new Yh,u.g=Cf(u.j,m?p:null,!u.m),0<u.O&&(u.M=new Kw(f(u.Y,u,u.g),u.O)),p=u.U,m=u.g,w=u.ca;var R="readystatechange";Array.isArray(R)||(R&&(Uh[0]=R.toString()),R=Uh);for(var O=0;O<R.length;O++){var $=Oh(m,R[O],w||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),$s(),Qw(u.i,u.u,u.A,u.l,u.R,u.m)}Fn.prototype.ca=function(u){u=u.target;const p=this.M;p&&un(u)==3?p.j():this.Y(u)},Fn.prototype.Y=function(u){try{if(u==this.g)t:{const ee=un(this.g);var p=this.g.Ba();const Zi=this.g.Z();if(!(3>ee)&&(ee!=3||this.g&&(this.h.h||this.g.oa()||_f(this.g)))){this.J||ee!=4||p==7||(p==8||0>=Zi?$s(3):$s(2)),cl(this);var m=this.g.Z();this.X=m;e:if(Jh(this)){var w=_f(this.g);u="";var R=w.length,O=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vi(this),Hs(this);var $="";break e}this.h.i=new a.TextDecoder}for(p=0;p<R;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(O&&p==R-1)});w.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=m==200,Jw(this.i,this.u,this.A,this.l,this.R,ee,m),this.o){if(this.T&&!this.K){e:{if(this.g){var pt,Kt=this.g;if((pt=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(pt)){var ct=pt;break e}}ct=null}if(m=ct)Xi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ll(this,m);else{this.o=!1,this.s=3,fe(12),vi(this),Hs(this);break t}}if(this.P){m=!0;let Me;for(;!this.J&&this.C<$.length;)if(Me=eE(this,$),Me==ol){ee==4&&(this.s=4,fe(14),m=!1),Xi(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==Xh){this.s=4,fe(15),Xi(this.i,this.l,$,"[Invalid Chunk]"),m=!1;break}else Xi(this.i,this.l,Me,null),ll(this,Me);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||$.length!=0||this.h.h||(this.s=1,fe(16),m=!1),this.o=this.o&&m,!m)Xi(this.i,this.l,$,"[Invalid Chunked Response]"),vi(this),Hs(this);else if(0<$.length&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.ba&&!te.M&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),gl(te),te.M=!0,fe(11))}}else Xi(this.i,this.l,$,null),ll(this,$);ee==4&&vi(this),this.o&&!this.J&&(ee==4?Sf(this.j,this):(this.o=!1,Co(this)))}else vE(this.g),m==400&&0<$.indexOf("Unknown SID")?(this.s=3,fe(12)):(this.s=0,fe(13)),vi(this),Hs(this)}}}catch{}finally{}};function Jh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function eE(u,p){var m=u.C,w=p.indexOf(`
`,m);return w==-1?ol:(m=Number(p.substring(m,w)),isNaN(m)?Xh:(w+=1,w+m>p.length?ol:(p=p.slice(w,w+m),u.C=w+m,p)))}Fn.prototype.cancel=function(){this.J=!0,vi(this)};function Co(u){u.S=Date.now()+u.I,Zh(u,u.I)}function Zh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=zs(f(u.ba,u),p)}function cl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Fn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Zw(this.i,this.A),this.L!=2&&($s(),fe(17)),vi(this),this.s=2,Hs(this)):Zh(this,this.S-u)};function Hs(u){u.j.G==0||u.J||Sf(u.j,u)}function vi(u){cl(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,$h(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ll(u,p){try{var m=u.j;if(m.G!=0&&(m.g==u||ul(m.h,u))){if(!u.K&&ul(m.h,u)&&m.G==3){try{var w=m.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var R=w;if(R[0]==0){t:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Bo(m),Vo(m);else break t;pl(m),fe(18)}}else m.za=R[1],0<m.za-m.T&&37500>R[2]&&m.F&&m.v==0&&!m.C&&(m.C=zs(f(m.Za,m),6e3));if(1>=nf(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else bi(m,11)}else if((u.K||m.g==u)&&Bo(m),!k(p))for(R=m.Da.g.parse(p),p=0;p<R.length;p++){let ct=R[p];if(m.T=ct[0],ct=ct[1],m.G==2)if(ct[0]=="c"){m.K=ct[1],m.ia=ct[2];const te=ct[3];te!=null&&(m.la=te,m.j.info("VER="+m.la));const ee=ct[4];ee!=null&&(m.Aa=ee,m.j.info("SVER="+m.Aa));const Zi=ct[5];Zi!=null&&typeof Zi=="number"&&0<Zi&&(w=1.5*Zi,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Me=u.g;if(Me){const $o=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($o){var O=w.h;O.g||$o.indexOf("spdy")==-1&&$o.indexOf("quic")==-1&&$o.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(dl(O,O.h),O.h=null))}if(w.D){const ml=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(w.ya=ml,vt(w.I,w.D,ml))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var $=u;if(w.qa=kf(w,w.J?w.ia:null,w.W),$.K){sf(w.h,$);var pt=$,Kt=w.L;Kt&&(pt.I=Kt),pt.B&&(cl(pt),Co(pt)),w.g=$}else Tf(w);0<m.i.length&&Fo(m)}else ct[0]!="stop"&&ct[0]!="close"||bi(m,7);else m.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?bi(m,7):fl(m):ct[0]!="noop"&&m.l&&m.l.ta(ct),m.v=0)}}$s(4)}catch{}}var nE=class{constructor(u,p){this.g=u,this.map=p}};function tf(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ef(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function nf(u){return u.h?1:u.g?u.g.size:0}function ul(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function dl(u,p){u.g?u.g.add(p):u.h=p}function sf(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}tf.prototype.cancel=function(){if(this.i=rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function rf(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const m of u.g.values())p=p.concat(m.D);return p}return _(u.i)}function iE(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],m=u.length,w=0;w<m;w++)p.push(u[w]);return p}p=[],m=0;for(w in u)p[m++]=u[w];return p}function sE(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var m=0;m<u;m++)p.push(m);return p}p=[],m=0;for(const w in u)p[m++]=w;return p}}}function of(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var m=sE(u),w=iE(u),R=w.length,O=0;O<R;O++)p.call(void 0,w[O],m&&m[O],u)}var af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rE(u,p){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var w=u[m].indexOf("="),R=null;if(0<=w){var O=u[m].substring(0,w);R=u[m].substring(w+1)}else O=u[m];p(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function _i(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _i){this.h=u.h,Ro(this,u.j),this.o=u.o,this.g=u.g,Do(this,u.s),this.l=u.l;var p=u.i,m=new Gs;m.i=p.i,p.g&&(m.g=new Map(p.g),m.h=p.h),cf(this,m),this.m=u.m}else u&&(p=String(u).match(af))?(this.h=!1,Ro(this,p[1]||"",!0),this.o=qs(p[2]||""),this.g=qs(p[3]||"",!0),Do(this,p[4]),this.l=qs(p[5]||"",!0),cf(this,p[6]||"",!0),this.m=qs(p[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}_i.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Ws(p,lf,!0),":");var m=this.g;return(m||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Ws(p,lf,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Ws(m,m.charAt(0)=="/"?cE:aE,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Ws(m,uE)),u.join("")};function ln(u){return new _i(u)}function Ro(u,p,m){u.j=m?qs(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Do(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function cf(u,p,m){p instanceof Gs?(u.i=p,dE(u.i,u.h)):(m||(p=Ws(p,lE)),u.i=new Gs(p,u.h))}function vt(u,p,m){u.i.set(p,m)}function Mo(u){return vt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function qs(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ws(u,p,m){return typeof u=="string"?(u=encodeURI(u).replace(p,oE),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function oE(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var lf=/[#\/\?@]/g,aE=/[#\?:]/g,cE=/[#\?]/g,lE=/[#\?@]/g,uE=/#/g;function Gs(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Bn(u){u.g||(u.g=new Map,u.h=0,u.i&&rE(u.i,function(p,m){u.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}n=Gs.prototype,n.add=function(u,p){Bn(this),this.i=null,u=Qi(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(p),this.h+=1,this};function uf(u,p){Bn(u),p=Qi(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function df(u,p){return Bn(u),p=Qi(u,p),u.g.has(p)}n.forEach=function(u,p){Bn(this),this.g.forEach(function(m,w){m.forEach(function(R){u.call(p,R,w,this)},this)},this)},n.na=function(){Bn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),m=[];for(let w=0;w<p.length;w++){const R=u[w];for(let O=0;O<R.length;O++)m.push(p[w])}return m},n.V=function(u){Bn(this);let p=[];if(typeof u=="string")df(this,u)&&(p=p.concat(this.g.get(Qi(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)p=p.concat(u[m])}return p},n.set=function(u,p){return Bn(this),this.i=null,u=Qi(this,u),df(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function hf(u,p,m){uf(u,p),0<m.length&&(u.i=null,u.g.set(Qi(u,p),_(m)),u.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var m=0;m<p.length;m++){var w=p[m];const O=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var R=O;$[w]!==""&&(R+="="+encodeURIComponent(String($[w]))),u.push(R)}}return this.i=u.join("&")};function Qi(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function dE(u,p){p&&!u.j&&(Bn(u),u.i=null,u.g.forEach(function(m,w){var R=w.toLowerCase();w!=R&&(uf(this,w),hf(this,R,m))},u)),u.j=p}function hE(u,p){const m=new js;if(a.Image){const w=new Image;w.onload=g(Un,m,"TestLoadImage: loaded",!0,p,w),w.onerror=g(Un,m,"TestLoadImage: error",!1,p,w),w.onabort=g(Un,m,"TestLoadImage: abort",!1,p,w),w.ontimeout=g(Un,m,"TestLoadImage: timeout",!1,p,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function fE(u,p){const m=new js,w=new AbortController,R=setTimeout(()=>{w.abort(),Un(m,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(O=>{clearTimeout(R),O.ok?Un(m,"TestPingServer: ok",!0,p):Un(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(R),Un(m,"TestPingServer: error",!1,p)})}function Un(u,p,m,w,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),w(m)}catch{}}function pE(){this.g=new Xw}function gE(u,p,m){const w=m||"";try{of(u,function(R,O){let $=R;l(R)&&($=el(R)),p.push(w+O+"="+encodeURIComponent($))})}catch(R){throw p.push(w+"type="+encodeURIComponent("_badmap")),R}}function Oo(u){this.l=u.Ub||null,this.j=u.eb||!1}y(Oo,nl),Oo.prototype.g=function(){return new No(this.l,this.j)},Oo.prototype.i=(function(u){return function(){return u}})({});function No(u,p){Zt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(No,Zt),n=No.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ys(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ff(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ff(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Ks(this):Ys(this),this.readyState==3&&ff(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Ks(this))},n.Qa=function(u){this.g&&(this.response=u,Ks(this))},n.ga=function(){this.g&&Ks(this)};function Ks(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ys(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=p.next();return u.join(`\r
`)};function Ys(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(No.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function pf(u){let p="";return F(u,function(m,w){p+=w,p+=":",p+=m,p+=`\r
`}),p}function hl(u,p,m){t:{for(w in m){var w=!1;break t}w=!0}w||(m=pf(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):vt(u,p,m))}function Pt(u){Zt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Pt,Zt);var mE=/^https?$/i,yE=["POST","PUT"];n=Pt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rl.g(),this.v=this.o?zh(this.o):zh(rl),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(O){gf(this,O);return}if(u=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var R in w)m.set(R,w[R]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())m.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),R=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(yE,p,void 0))||w||R||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of m)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vf(this),this.u=!0,this.g.send(u),this.u=!1}catch(O){gf(this,O)}};function gf(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,mf(u),Lo(u)}function mf(u){u.A||(u.A=!0,he(u,"complete"),he(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,he(this,"complete"),he(this,"abort"),Lo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),Pt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yf(this):this.bb())},n.bb=function(){yf(this)};function yf(u){if(u.h&&typeof o<"u"&&(!u.v[1]||un(u)!=4||u.Z()!=2)){if(u.u&&un(u)==4)Fh(u.Ea,0,u);else if(he(u,"readystatechange"),un(u)==4){u.h=!1;try{const $=u.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var m;if(!(m=p)){var w;if(w=$===0){var R=String(u.D).match(af)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),w=!mE.test(R?R.toLowerCase():"")}m=w}if(m)he(u,"complete"),he(u,"success");else{u.m=6;try{var O=2<un(u)?u.g.statusText:""}catch{O=""}u.l=O+" ["+u.Z()+"]",mf(u)}}finally{Lo(u)}}}}function Lo(u,p){if(u.g){vf(u);const m=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||he(u,"ready");try{m.onreadystatechange=w}catch{}}}function vf(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function un(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Yw(p)}};function _f(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function vE(u){const p={};u=(u.g&&2<=un(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(k(u[w]))continue;var m=x(u[w]);const R=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=p[R]||[];p[R]=O,O.push(m)}T(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(u,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||p}function bf(u){this.Aa=0,this.i=[],this.j=new js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xs("baseRetryDelayMs",5e3,u),this.cb=Xs("retryDelaySeedMs",1e4,u),this.Wa=Xs("forwardChannelMaxRetries",2,u),this.wa=Xs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new tf(u&&u.concurrentRequestLimit),this.Da=new pE,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=bf.prototype,n.la=8,n.G=1,n.connect=function(u,p,m,w){fe(0),this.W=u,this.H=p||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=kf(this,null,this.W),Fo(this)};function fl(u){if(wf(u),u.G==3){var p=u.U++,m=ln(u.I);if(vt(m,"SID",u.K),vt(m,"RID",p),vt(m,"TYPE","terminate"),Qs(u,m),p=new Fn(u,u.j,p),p.L=2,p.v=Mo(ln(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=p.v,m=!0),m||(p.g=Cf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Co(p)}Pf(u)}function Vo(u){u.g&&(gl(u),u.g.cancel(),u.g=null)}function wf(u){Vo(u),u.u&&(a.clearTimeout(u.u),u.u=null),Bo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Fo(u){if(!ef(u.h)&&!u.s){u.s=!0;var p=u.Ga;ft||on(),Gt||(ft(),Gt=!0),Lt.add(p,u),u.B=0}}function _E(u,p){return nf(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=zs(f(u.Ga,u,p),xf(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const R=new Fn(this,this.j,u);let O=this.o;if(this.S&&(O?(O=b(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)t:{for(var p=0,m=0;m<this.i.length;m++){e:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=m;break t}if(p===4096||m===this.i.length-1){p=m+1;break t}}p=1e3}else p=1e3;p=If(this,R,p),m=ln(this.I),vt(m,"RID",u),vt(m,"CVER",22),this.D&&vt(m,"X-HTTP-Session-Id",this.D),Qs(this,m),O&&(this.O?p="headers="+encodeURIComponent(String(pf(O)))+"&"+p:this.m&&hl(m,this.m,O)),dl(this.h,R),this.Ua&&vt(m,"TYPE","init"),this.P?(vt(m,"$req",p),vt(m,"SID","null"),R.T=!0,al(R,m,null)):al(R,m,p),this.G=2}}else this.G==3&&(u?Ef(this,u):this.i.length==0||ef(this.h)||Ef(this))};function Ef(u,p){var m;p?m=p.l:m=u.U++;const w=ln(u.I);vt(w,"SID",u.K),vt(w,"RID",m),vt(w,"AID",u.T),Qs(u,w),u.m&&u.o&&hl(w,u.m,u.o),m=new Fn(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),p&&(u.i=p.D.concat(u.i)),p=If(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),dl(u.h,m),al(m,w,p)}function Qs(u,p){u.H&&F(u.H,function(m,w){vt(p,w,m)}),u.l&&of({},function(m,w){vt(p,w,m)})}function If(u,p,m){m=Math.min(u.i.length,m);var w=u.l?f(u.l.Na,u.l,u):null;t:{var R=u.i;let O=-1;for(;;){const $=["count="+m];O==-1?0<m?(O=R[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let pt=!0;for(let Kt=0;Kt<m;Kt++){let ct=R[Kt].g;const te=R[Kt].map;if(ct-=O,0>ct)O=Math.max(0,R[Kt].g-100),pt=!1;else try{gE(te,$,"req"+ct+"_")}catch{w&&w(te)}}if(pt){w=$.join("&");break t}}}return u=u.i.splice(0,m),p.D=u,w}function Tf(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ft||on(),Gt||(ft(),Gt=!0),Lt.add(p,u),u.v=0}}function pl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=zs(f(u.Fa,u),xf(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Af(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=zs(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,fe(10),Vo(this),Af(this))};function gl(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Af(u){u.g=new Fn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=ln(u.qa);vt(p,"RID","rpc"),vt(p,"SID",u.K),vt(p,"AID",u.T),vt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&vt(p,"TO",u.ja),vt(p,"TYPE","xmlhttp"),Qs(u,p),u.m&&u.o&&hl(p,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Mo(ln(p)),m.m=null,m.P=!0,Qh(m,u)}n.Za=function(){this.C!=null&&(this.C=null,Vo(this),pl(this),fe(19))};function Bo(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Sf(u,p){var m=null;if(u.g==p){Bo(u),gl(u),u.g=null;var w=2}else if(ul(u.h,p))m=p.D,sf(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){m=p.m?p.m.length:0,p=Date.now()-p.F;var R=u.B;w=xo(),he(w,new Gh(w,m)),Fo(u)}else Tf(u);else if(R=p.s,R==3||R==0&&0<p.X||!(w==1&&_E(u,p)||w==2&&pl(u)))switch(m&&0<m.length&&(p=u.h,p.i=p.i.concat(m)),R){case 1:bi(u,5);break;case 4:bi(u,10);break;case 3:bi(u,6);break;default:bi(u,2)}}}function xf(u,p){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*p}function bi(u,p){if(u.j.info("Error code "+p),p==2){var m=f(u.fb,u),w=u.Xa;const R=!w;w=new _i(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ro(w,"https"),Mo(w),R?hE(w.toString(),m):fE(w.toString(),m)}else fe(2);u.G=0,u.l&&u.l.sa(p),Pf(u),wf(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),fe(2)):(this.j.info("Failed to ping google.com"),fe(1))};function Pf(u){if(u.G=0,u.ka=[],u.l){const p=rf(u.h);(p.length!=0||u.i.length!=0)&&(v(u.ka,p),v(u.ka,u.i),u.h.i.length=0,_(u.i),u.i.length=0),u.l.ra()}}function kf(u,p,m){var w=m instanceof _i?ln(m):new _i(m);if(w.g!="")p&&(w.g=p+"."+w.g),Do(w,w.s);else{var R=a.location;w=R.protocol,p=p?p+"."+R.hostname:R.hostname,R=+R.port;var O=new _i(null);w&&Ro(O,w),p&&(O.g=p),R&&Do(O,R),m&&(O.l=m),w=O}return m=u.D,p=u.ya,m&&p&&vt(w,m,p),vt(w,"VER",u.la),Qs(u,w),w}function Cf(u,p,m){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Pt(new Oo({eb:m})):new Pt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rf(){}n=Rf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Uo(){}Uo.prototype.g=function(u,p){return new Ie(u,p)};function Ie(u,p){Zt.call(this),this.g=new bf(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!k(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!k(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Ji(this)}y(Ie,Zt),Ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ie.prototype.close=function(){fl(this.g)},Ie.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=el(u),u=m);p.i.push(new nE(p.Ya++,u)),p.G==3&&Fo(p)},Ie.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,Ie.aa.N.call(this)};function Df(u){il.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const m in p){u=m;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}y(Df,il);function Mf(){sl.call(this),this.status=1}y(Mf,sl);function Ji(u){this.g=u}y(Ji,Rf),Ji.prototype.ua=function(){he(this.g,"a")},Ji.prototype.ta=function(u){he(this.g,new Df(u))},Ji.prototype.sa=function(u){he(this.g,new Mf)},Ji.prototype.ra=function(){he(this.g,"b")},Uo.prototype.createWebChannel=Uo.prototype.g,Ie.prototype.send=Ie.prototype.o,Ie.prototype.open=Ie.prototype.m,Ie.prototype.close=Ie.prototype.close,Iv=function(){return new Uo},Ev=function(){return xo()},wv=yi,ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Po.NO_ERROR=0,Po.TIMEOUT=8,Po.HTTP_ERROR=6,ga=Po,Kh.COMPLETE="complete",bv=Kh,jh.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",Zt.prototype.listen=Zt.prototype.K,ar=jh,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,_v=Pt}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const fp="@firebase/firestore",pp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ui=new ju("@firebase/firestore");function is(){return Ui.logLevel}function H(n,...t){if(Ui.logLevel<=it.DEBUG){const e=t.map(fd);Ui.debug(`Firestore (${Ms}): ${n}`,...e)}}function Dn(n,...t){if(Ui.logLevel<=it.ERROR){const e=t.map(fd);Ui.error(`Firestore (${Ms}): ${n}`,...e)}}function ii(n,...t){if(Ui.logLevel<=it.WARN){const e=t.map(fd);Ui.warn(`Firestore (${Ms}): ${n}`,...e)}}function fd(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,Tv(n,i,e)}function Tv(n,t,e){let i=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw Dn(i),new Error(i)}function ut(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||Tv(t,s,i)}function J(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Nn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Av{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(re.UNAUTHENTICATED)))}shutdown(){}}class CS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class RS{constructor(t){this.t=t,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ut(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let r=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Sn,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=r;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Sn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ut(typeof i.accessToken=="string",31837,{l:i}),new Av(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ut(t===null||typeof t=="string",2055,{h:t}),new re(t)}}class DS{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class MS{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new DS(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OS{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ut(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gp(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(ut(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new gp(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function Sv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=NS(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function tt(n,t){return n<t?-1:n>t?1:0}function ou(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return tt(i,s);{const r=Sv(),o=LS(r.encode(mp(n,e)),r.encode(mp(t,e)));return o!==0?o:tt(i,s)}}e+=i>65535?2:1}return tt(n.length,t.length)}function mp(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function LS(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return tt(n[e],t[e]);return tt(n.length,t.length)}function vs(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="__name__";class Ge{constructor(t,e,i){e===void 0?e=0:e>t.length&&Y(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&Y(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ge.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ge?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=Ge.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return tt(t.length,e.length)}static compareSegments(t,e){const i=Ge.isNumericId(t),s=Ge.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?Ge.extractNumericId(t).compare(Ge.extractNumericId(e)):ou(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Zn.fromString(t.substring(4,t.length-2))}}class yt extends Ge{construct(t,e,i){return new yt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new j(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new yt(e)}static emptyPath(){return new yt([])}}const VS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends Ge{construct(t,e,i){return new Xt(t,e,i)}static isValidIdentifier(t){return VS.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yp}static keyField(){return new Xt([yp])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new j(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new j(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xt(e)}static emptyPath(){return new Xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(yt.fromString(t))}static fromName(t){return new G(yt.fromString(t).popFirst(5))}static empty(){return new G(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&yt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return yt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new yt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n,t,e){if(!e)throw new j(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function FS(n,t,e,i){if(t===!0&&i===!0)throw new j(L.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function vp(n){if(!G.isDocumentKey(n))throw new j(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _p(n){if(G.isDocumentKey(n))throw new j(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Tc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function ge(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Tc(n);throw new j(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Ut(n,t){const e={typeString:n};return t&&(e.value=t),e}function oo(n,t){if(!Pv(n))throw new j(L.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new j(L.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=-62135596800,wp=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(t){return _t.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*wp);return new _t(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<bp)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wp}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(oo(t,_t._jsonSchema))return new _t(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-bp;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:Ut("string",_t._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Br=-1;function BS(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(i===1e9?new _t(e+1,0):new _t(e,i));return new si(s,G.empty(),t)}function US(n){return new si(n.readTime,n.key,Br)}class si{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new si(X.min(),G.empty(),Br)}static max(){return new si(X.max(),G.empty(),Br)}}function $S(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==zS)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):B.reject(e)}static resolve(t){return new B(((e,i)=>{e(t)}))}static reject(t){return new B(((e,i)=>{i(t)}))}static waitFor(t){return new B(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(c=>i(c)))})),o=!0,r===s&&e()}))}static or(t){let e=B.resolve(!1);for(const i of t)e=e.next((s=>s?B.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new B(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next((d=>{o[l]=d,++a,a===r&&i(o)}),(d=>s(d)))}}))}static doWhile(t,e){return new B(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function HS(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ns(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ac{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this._e(i),this.ae=i=>e.writeSequenceNumber(i))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Ac.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=-1;function Sc(n){return n==null}function Ha(n){return n===0&&1/n==-1/0}function qS(n){return typeof n=="number"&&Number.isInteger(n)&&!Ha(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="";function WS(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ep(t)),t=GS(n.get(e),t);return Ep(t)}function GS(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case kv:e+="";break;default:e+=r}}return e}function Ep(n){return n+kv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function hi(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Cv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.comparator=t,this.root=e||Yt.EMPTY}insert(t,e){return new St(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qo(this.root,t,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qo(this.root,t,this.comparator,!0)}}class qo{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yt{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??Yt.RED,this.left=s??Yt.EMPTY,this.right=r??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new Yt(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Yt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Y(27949);return t+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new Yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Tp(this.data.getIterator())}getIteratorFrom(t){return new Tp(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class Tp{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Rv("Invalid base64 string: "+r):r}})(t);return new Qt(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const KS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ri(n){if(ut(!!n,39018),typeof n=="string"){let t=0;const e=KS.exec(n);if(ut(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ot(n.seconds),nanos:Ot(n.nanos)}}function Ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function oi(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="server_timestamp",Mv="__type__",Ov="__previous_value__",Nv="__local_write_time__";function md(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Mv])===null||e===void 0?void 0:e.stringValue)===Dv}function xc(n){const t=n.mapValue.fields[Ov];return md(t)?xc(t):t}function Ur(n){const t=ri(n.mapValue.fields[Nv].timestampValue);return new _t(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(t,e,i,s,r,o,a,c,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const qa="(default)";class $r{constructor(t,e){this.projectId=t,this.database=e||qa}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===qa}isEqual(t){return t instanceof $r&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="__type__",XS="__max__",Wo={mapValue:{}},Vv="__vector__",Wa="value";function ai(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?md(n)?4:JS(n)?9007199254740991:QS(n)?10:11:Y(28295,{value:n})}function nn(n,t){if(n===t)return!0;const e=ai(n);if(e!==ai(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ur(n).isEqual(Ur(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=ri(s.timestampValue),a=ri(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return oi(s.bytesValue).isEqual(oi(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return Ot(s.geoPointValue.latitude)===Ot(r.geoPointValue.latitude)&&Ot(s.geoPointValue.longitude)===Ot(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return Ot(s.integerValue)===Ot(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Ot(s.doubleValue),a=Ot(r.doubleValue);return o===a?Ha(o)===Ha(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return vs(n.arrayValue.values||[],t.arrayValue.values||[],nn);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Ip(o)!==Ip(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nn(o[c],a[c])))return!1;return!0})(n,t);default:return Y(52216,{left:n})}}function zr(n,t){return(n.values||[]).find((e=>nn(e,t)))!==void 0}function _s(n,t){if(n===t)return 0;const e=ai(n),i=ai(t);if(e!==i)return tt(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=Ot(r.integerValue||r.doubleValue),c=Ot(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,t);case 3:return Ap(n.timestampValue,t.timestampValue);case 4:return Ap(Ur(n),Ur(t));case 5:return ou(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=oi(r),c=oi(o);return a.compareTo(c)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=tt(a[l],c[l]);if(d!==0)return d}return tt(a.length,c.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=tt(Ot(r.latitude),Ot(o.latitude));return a!==0?a:tt(Ot(r.longitude),Ot(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Sp(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},g=(a=h[Wa])===null||a===void 0?void 0:a.arrayValue,y=(c=f[Wa])===null||c===void 0?void 0:c.arrayValue,_=tt(((l=g==null?void 0:g.values)===null||l===void 0?void 0:l.length)||0,((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0);return _!==0?_:Sp(g,y)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===Wo.mapValue&&o===Wo.mapValue)return 0;if(r===Wo.mapValue)return 1;if(o===Wo.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=ou(c[h],d[h]);if(f!==0)return f;const g=_s(a[c[h]],l[d[h]]);if(g!==0)return g}return tt(c.length,d.length)})(n.mapValue,t.mapValue);default:throw Y(23264,{le:e})}}function Ap(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=ri(n),i=ri(t),s=tt(e.seconds,i.seconds);return s!==0?s:tt(e.nanos,i.nanos)}function Sp(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=_s(e[s],i[s]);if(r)return r}return tt(e.length,i.length)}function bs(n){return au(n)}function au(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=ri(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return oi(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return G.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=au(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${au(e.fields[o])}`;return s+"}"})(n.mapValue):Y(61005,{value:n})}function ma(n){switch(ai(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=xc(n);return t?16+ma(t):16;case 5:return 2*n.stringValue.length;case 6:return oi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+ma(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return hi(i.fields,((r,o)=>{s+=r.length+ma(o)})),s})(n.mapValue);default:throw Y(13486,{value:n})}}function xp(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function cu(n){return!!n&&"integerValue"in n}function yd(n){return!!n&&"arrayValue"in n}function Pp(n){return!!n&&"nullValue"in n}function kp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ya(n){return!!n&&"mapValue"in n}function QS(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Lv])===null||e===void 0?void 0:e.stringValue)===Vv}function Ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return hi(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=Ir(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ir(n.arrayValue.values[e]);return t}return Object.assign({},n)}function JS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===XS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.value=t}static empty(){return new _e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!ya(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ir(e)}setAll(t){let e=Xt.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=Ir(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());ya(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];ya(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){hi(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new _e(Ir(this.value))}}function Fv(n){const t=[];return hi(n.fields,((e,i)=>{const s=new Xt([e]);if(ya(i)){const r=Fv(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new Se(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ga{constructor(t,e){this.position=t,this.inclusive=e}}function Cp(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),e.key):i=_s(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Rp(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!nn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class jr{constructor(t,e="asc"){this.field=t,this.dir=e}}function ZS(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Bv{}class Bt extends Bv{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new ex(t,e,i):e==="array-contains"?new sx(t,i):e==="in"?new rx(t,i):e==="not-in"?new ox(t,i):e==="array-contains-any"?new ax(t,i):new Bt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new nx(t,i):new ix(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(_s(e,this.value)):e!==null&&ai(this.value)===ai(e)&&this.matchesComparison(_s(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Bv{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new $e(t,e)}matches(t){return Uv(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Uv(n){return n.op==="and"}function $v(n){return tx(n)&&Uv(n)}function tx(n){for(const t of n.filters)if(t instanceof $e)return!1;return!0}function lu(n){if(n instanceof Bt)return n.field.canonicalString()+n.op.toString()+bs(n.value);if($v(n))return n.filters.map((t=>lu(t))).join(",");{const t=n.filters.map((e=>lu(e))).join(",");return`${n.op}(${t})`}}function zv(n,t){return n instanceof Bt?(function(i,s){return s instanceof Bt&&i.op===s.op&&i.field.isEqual(s.field)&&nn(i.value,s.value)})(n,t):n instanceof $e?(function(i,s){return s instanceof $e&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&zv(o,s.filters[a])),!0):!1})(n,t):void Y(19439)}function jv(n){return n instanceof Bt?(function(e){return`${e.field.canonicalString()} ${e.op} ${bs(e.value)}`})(n):n instanceof $e?(function(e){return e.op.toString()+" {"+e.getFilters().map(jv).join(" ,")+"}"})(n):"Filter"}class ex extends Bt{constructor(t,e,i){super(t,e,i),this.key=G.fromName(i.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class nx extends Bt{constructor(t,e){super(t,"in",e),this.keys=Hv("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ix extends Bt{constructor(t,e){super(t,"not-in",e),this.keys=Hv("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Hv(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((i=>G.fromName(i.referenceValue)))}class sx extends Bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yd(e)&&zr(e.arrayValue,this.value)}}class rx extends Bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&zr(this.value.arrayValue,e)}}class ox extends Bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!zr(this.value.arrayValue,e)}}class ax extends Bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yd(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>zr(this.value.arrayValue,i)))}}/**
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
 */class cx{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Pe=null}}function Dp(n,t=null,e=[],i=[],s=null,r=null,o=null){return new cx(n,t,e,i,s,r,o)}function vd(n){const t=J(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>lu(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Sc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>bs(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>bs(i))).join(",")),t.Pe=e}return t.Pe}function _d(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ZS(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!zv(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Rp(n.startAt,t.startAt)&&Rp(n.endAt,t.endAt)}function uu(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function lx(n,t,e,i,s,r,o,a){return new Ls(n,t,e,i,s,r,o,a)}function Pc(n){return new Ls(n)}function Mp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qv(n){return n.collectionGroup!==null}function Tr(n){const t=J(n);if(t.Te===null){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new jt(Xt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new jr(r,i))})),e.has(Xt.keyField().canonicalString())||t.Te.push(new jr(Xt.keyField(),i))}return t.Te}function Xe(n){const t=J(n);return t.Ie||(t.Ie=ux(t,Tr(n))),t.Ie}function ux(n,t){if(n.limitType==="F")return Dp(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new jr(s.field,r)}));const e=n.endAt?new Ga(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ga(n.startAt.position,n.startAt.inclusive):null;return Dp(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function du(n,t){const e=n.filters.concat([t]);return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function hu(n,t,e){return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function kc(n,t){return _d(Xe(n),Xe(t))&&n.limitType===t.limitType}function Wv(n){return`${vd(Xe(n))}|lt:${n.limitType}`}function ss(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>jv(s))).join(", ")}]`),Sc(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>bs(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>bs(s))).join(",")),`Target(${i})`})(Xe(n))}; limitType=${n.limitType})`}function Cc(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):G.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of Tr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,c){const l=Cp(o,a,c);return o.inclusive?l<=0:l<0})(i.startAt,Tr(i),s)||i.endAt&&!(function(o,a,c){const l=Cp(o,a,c);return o.inclusive?l>=0:l>0})(i.endAt,Tr(i),s))})(n,t)}function dx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gv(n){return(t,e)=>{let i=!1;for(const s of Tr(n)){const r=hx(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function hx(n,t,e){const i=n.field.isKeyField()?G.comparator(t.key,e.key):(function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?_s(c,l):Y(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){hi(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return Cv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new St(G.comparator);function Mn(){return fx}const Kv=new St(G.comparator);function cr(...n){let t=Kv;for(const e of n)t=t.insert(e.key,e);return t}function Yv(n){let t=Kv;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function ki(){return Ar()}function Xv(){return Ar()}function Ar(){return new Wi((n=>n.toString()),((n,t)=>n.isEqual(t)))}const px=new St(G.comparator),gx=new jt(G.comparator);function st(...n){let t=gx;for(const e of n)t=t.add(e);return t}const mx=new jt(tt);function yx(){return mx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ha(t)?"-0":t}}function Qv(n){return{integerValue:""+n}}function vx(n,t){return qS(t)?Qv(t):bd(n,t)}/**
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
 */class Rc{constructor(){this._=void 0}}function _x(n,t,e){return n instanceof Ka?(function(s,r){const o={fields:{[Mv]:{stringValue:Dv},[Nv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&md(r)&&(r=xc(r)),r&&(o.fields[Ov]=r),{mapValue:o}})(e,t):n instanceof Hr?Zv(n,t):n instanceof qr?t_(n,t):(function(s,r){const o=Jv(s,r),a=Op(o)+Op(s.Ee);return cu(o)&&cu(s.Ee)?Qv(a):bd(s.serializer,a)})(n,t)}function bx(n,t,e){return n instanceof Hr?Zv(n,t):n instanceof qr?t_(n,t):e}function Jv(n,t){return n instanceof Ya?(function(i){return cu(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class Ka extends Rc{}class Hr extends Rc{constructor(t){super(),this.elements=t}}function Zv(n,t){const e=e_(t);for(const i of n.elements)e.some((s=>nn(s,i)))||e.push(i);return{arrayValue:{values:e}}}class qr extends Rc{constructor(t){super(),this.elements=t}}function t_(n,t){let e=e_(t);for(const i of n.elements)e=e.filter((s=>!nn(s,i)));return{arrayValue:{values:e}}}class Ya extends Rc{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Op(n){return Ot(n.integerValue||n.doubleValue)}function e_(n){return yd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wx(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof Hr&&s instanceof Hr||i instanceof qr&&s instanceof qr?vs(i.elements,s.elements,nn):i instanceof Ya&&s instanceof Ya?nn(i.Ee,s.Ee):i instanceof Ka&&s instanceof Ka})(n.transform,t.transform)}class Ex{constructor(t,e){this.version=t,this.transformResults=e}}class me{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new me}static exists(t){return new me(void 0,t)}static updateTime(t){return new me(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function va(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Dc{}function n_(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Mc(n.key,me.none()):new ao(n.key,n.data,me.none());{const e=n.data,i=_e.empty();let s=new jt(Xt.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new fi(n.key,i,new Se(s.toArray()),me.none())}}function Ix(n,t,e){n instanceof ao?(function(s,r,o){const a=s.value.clone(),c=Lp(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof fi?(function(s,r,o){if(!va(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Lp(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(i_(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function Sr(n,t,e,i){return n instanceof ao?(function(r,o,a,c){if(!va(r.precondition,o))return a;const l=r.value.clone(),d=Vp(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,t,e,i):n instanceof fi?(function(r,o,a,c){if(!va(r.precondition,o))return a;const l=Vp(r.fieldTransforms,c,o),d=o.data;return d.setAll(i_(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((h=>h.field)))})(n,t,e,i):(function(r,o,a){return va(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function Tx(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=Jv(i.transform,s||null);r!=null&&(e===null&&(e=_e.empty()),e.set(i.field,r))}return e||null}function Np(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&vs(i,s,((r,o)=>wx(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ao extends Dc{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fi extends Dc{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function i_(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function Lp(n,t,e){const i=new Map;ut(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,bx(o,a,e[s]))}return i}function Vp(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,_x(r,o,t))}return i}class Mc extends Dc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ax extends Dc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&Ix(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Sr(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Sr(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Xv();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const c=n_(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),st())}isEqual(t){return this.batchId===t.batchId&&vs(this.mutations,t.mutations,((e,i)=>Np(e,i)))&&vs(this.baseMutations,t.baseMutations,((e,i)=>Np(e,i)))}}class wd{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){ut(t.mutations.length===i.length,58842,{Ve:t.mutations.length,me:i.length});let s=(function(){return px})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new wd(t,e,i,s)}}/**
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
 */class xx{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Px{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt,at;function kx(n){switch(n){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function s_(n){if(n===void 0)return Dn("GRPC error has no .code"),L.UNKNOWN;switch(n){case Vt.OK:return L.OK;case Vt.CANCELLED:return L.CANCELLED;case Vt.UNKNOWN:return L.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return L.INTERNAL;case Vt.UNAVAILABLE:return L.UNAVAILABLE;case Vt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Vt.NOT_FOUND:return L.NOT_FOUND;case Vt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Vt.ABORTED:return L.ABORTED;case Vt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Vt.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:n})}}(at=Vt||(Vt={}))[at.OK=0]="OK",at[at.CANCELLED=1]="CANCELLED",at[at.UNKNOWN=2]="UNKNOWN",at[at.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",at[at.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",at[at.NOT_FOUND=5]="NOT_FOUND",at[at.ALREADY_EXISTS=6]="ALREADY_EXISTS",at[at.PERMISSION_DENIED=7]="PERMISSION_DENIED",at[at.UNAUTHENTICATED=16]="UNAUTHENTICATED",at[at.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",at[at.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",at[at.ABORTED=10]="ABORTED",at[at.OUT_OF_RANGE=11]="OUT_OF_RANGE",at[at.UNIMPLEMENTED=12]="UNIMPLEMENTED",at[at.INTERNAL=13]="INTERNAL",at[at.UNAVAILABLE=14]="UNAVAILABLE",at[at.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Cx=new Zn([4294967295,4294967295],0);function Fp(n){const t=Sv().encode(n),e=new vv;return e.update(t),new Uint8Array(e.digest())}function Bp(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Zn([e,i],0),new Zn([s,r],0)]}class Ed{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new lr(`Invalid padding: ${e}`);if(i<0)throw new lr(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new lr(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new lr(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Zn.fromNumber(this.fe)}pe(t,e,i){let s=t.add(e.multiply(Zn.fromNumber(i)));return s.compare(Cx)===1&&(s=new Zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Fp(t),[i,s]=Bp(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);if(!this.ye(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Ed(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.fe===0)return;const e=Fp(t),[i,s]=Bp(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);this.we(o)}}we(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,co.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Oc(X.min(),s,new St(tt),Mn(),st())}}class co{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new co(i,e,st(),st(),st())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.be=s}}class r_{constructor(t,e){this.targetId=t,this.De=e}}class o_{constructor(t,e,i=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class Up{constructor(){this.ve=0,this.Ce=$p(),this.Fe=Qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=st(),e=st(),i=st();return this.Ce.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:Y(38017,{changeType:r})}})),new co(this.Fe,this.Me,t,e,i)}ke(){this.xe=!1,this.Ce=$p()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,ut(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Rx{constructor(t){this.We=t,this.Ge=new Map,this.ze=Mn(),this.je=Go(),this.Je=Go(),this.He=new St(tt)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const i=this.tt(e);switch(t.state){case 0:this.nt(e)&&i.Be(t.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(t.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(i.Ke(),i.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),i.Be(t.resumeToken));break;default:Y(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((i,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,i=t.De.count,s=this.st(e);if(s){const r=s.target;if(uu(r))if(i===0){const o=new G(r.path);this.Xe(e,o,ae.newNoDocument(o,X.min()))}else ut(i===1,20013,{expectedCount:i});else{const o=this.ot(e);if(o!==i){const a=this._t(t),c=a?this.ut(a,t,o):1;if(c!==0){this.rt(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,l)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=oi(i).toUint8Array()}catch(c){if(c instanceof Rv)return ii("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ed(o,s,r)}catch(c){return ii(c instanceof lr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(t,e,i){return e.De.count===i-this.ht(t,e.targetId)?0:2}ht(t,e){const i=this.We.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Xe(e,r,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((r,o)=>{const a=this.st(o);if(a){if(r.current&&uu(a.target)){const c=new G(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,ae.newNoDocument(c,t))}r.Ne&&(e.set(o,r.Le()),r.ke())}}));let i=st();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.ze.forEach(((r,o)=>o.setReadTime(t)));const s=new Oc(t,e,this.He,this.ze,i);return this.ze=Mn(),this.je=Go(),this.Je=Go(),this.He=new St(tt),s}Ze(t,e){if(!this.nt(t))return;const i=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,i),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,i){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),i&&(this.ze=this.ze.insert(e,i))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Up,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new jt(tt),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new jt(tt),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||H("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Up),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Go(){return new St(G.comparator)}function $p(){return new St(G.comparator)}const Dx={asc:"ASCENDING",desc:"DESCENDING"},Mx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ox={and:"AND",or:"OR"};class Nx{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function fu(n,t){return n.useProto3Json||Sc(t)?t:{value:t}}function Xa(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function a_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Lx(n,t){return Xa(n,t.toTimestamp())}function Qe(n){return ut(!!n,49232),X.fromTimestamp((function(e){const i=ri(e);return new _t(i.seconds,i.nanos)})(n))}function Id(n,t){return pu(n,t).canonicalString()}function pu(n,t){const e=(function(s){return new yt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function c_(n){const t=yt.fromString(n);return ut(f_(t),10190,{key:t.toString()}),t}function gu(n,t){return Id(n.databaseId,t.path)}function kl(n,t){const e=c_(t);if(e.get(1)!==n.databaseId.projectId)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new G(u_(e))}function l_(n,t){return Id(n.databaseId,t)}function Vx(n){const t=c_(n);return t.length===4?yt.emptyPath():u_(t)}function mu(n){return new yt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function u_(n){return ut(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zp(n,t,e){return{name:gu(n,t),fields:e.value.mapValue.fields}}function Fx(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y(39313,{state:l})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(l,d){return l.useProto3Json?(ut(d===void 0||typeof d=="string",58123),Qt.fromBase64String(d||"")):(ut(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qt.fromUint8Array(d||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(l){const d=l.code===void 0?L.UNKNOWN:s_(l.code);return new j(d,l.message||"")})(o);e=new o_(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=kl(n,i.document.name),r=Qe(i.document.updateTime),o=i.document.createTime?Qe(i.document.createTime):X.min(),a=new _e({mapValue:{fields:i.document.fields}}),c=ae.newFoundDocument(s,r,o,a),l=i.targetIds||[],d=i.removedTargetIds||[];e=new _a(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=kl(n,i.document),r=i.readTime?Qe(i.readTime):X.min(),o=ae.newNoDocument(s,r),a=i.removedTargetIds||[];e=new _a([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=kl(n,i.document),r=i.removedTargetIds||[];e=new _a([],r,s,null)}else{if(!("filter"in t))return Y(11601,{At:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new Px(s,r),a=i.targetId;e=new r_(a,o)}}return e}function Bx(n,t){let e;if(t instanceof ao)e={update:zp(n,t.key,t.value)};else if(t instanceof Mc)e={delete:gu(n,t.key)};else if(t instanceof fi)e={update:zp(n,t.key,t.data),updateMask:Kx(t.fieldMask)};else{if(!(t instanceof Ax))return Y(16599,{Rt:t.type});e={verify:gu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Y(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:Lx(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y(27497)})(n,t.precondition)),e}function Ux(n,t){return n&&n.length>0?(ut(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?Qe(s.updateTime):Qe(r);return o.isEqual(X.min())&&(o=Qe(r)),new Ex(o,s.transformResults||[])})(e,t)))):[]}function $x(n,t){return{documents:[l_(n,t.path)]}}function zx(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=l_(n,s);const r=(function(l){if(l.length!==0)return h_($e.create(l,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(l){if(l.length!==0)return l.map((d=>(function(f){return{field:rs(f.field),direction:qx(f.dir)}})(d)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=fu(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(t.endAt)),{Vt:e,parent:s}}function jx(n){let t=Vx(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){ut(i===1,65062);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=(function(h){const f=d_(h);return f instanceof $e&&$v(f)?f.getFilters():[f]})(e.where));let o=[];e.orderBy&&(o=(function(h){return h.map((f=>(function(y){return new jr(os(y.field),(function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(f)))})(e.orderBy));let a=null;e.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,Sc(f)?null:f})(e.limit));let c=null;e.startAt&&(c=(function(h){const f=!!h.before,g=h.values||[];return new Ga(g,f)})(e.startAt));let l=null;return e.endAt&&(l=(function(h){const f=!h.before,g=h.values||[];return new Ga(g,f)})(e.endAt)),lx(t,s,o,r,a,"F",c,l)}function Hx(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function d_(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=os(e.unaryFilter.field);return Bt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=os(e.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=os(e.unaryFilter.field);return Bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=os(e.unaryFilter.field);return Bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Bt.create(os(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return $e.create(e.compositeFilter.filters.map((i=>d_(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(e.compositeFilter.op))})(n):Y(30097,{filter:n})}function qx(n){return Dx[n]}function Wx(n){return Mx[n]}function Gx(n){return Ox[n]}function rs(n){return{fieldPath:n.canonicalString()}}function os(n){return Xt.fromServerFormat(n.fieldPath)}function h_(n){return n instanceof Bt?(function(e){if(e.op==="=="){if(kp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NAN"}};if(Pp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(kp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NAN"}};if(Pp(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(e.field),op:Wx(e.op),value:e.value}}})(n):n instanceof $e?(function(e){const i=e.getFilters().map((s=>h_(s)));return i.length===1?i[0]:{compositeFilter:{op:Gx(e.op),filters:i}}})(n):Y(54877,{filter:n})}function Kx(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function f_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,i,s,r=X.min(),o=X.min(),a=Qt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new zn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(t){this.gt=t}}function Xx(n){const t=jx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hu(t,t.limit,"L"):t}/**
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
 */class Qx{constructor(){this.Dn=new Jx}addToCollectionParentIndex(t,e){return this.Dn.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(si.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(si.min())}updateCollectionGroup(t,e,i){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class Jx{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new jt(yt.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new jt(yt.comparator)).toArray()}}/**
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
 */const jp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},p_=41943040;class ve{static withCacheSize(t){return new ve(t,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(p_,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Hp="LruGarbageCollector",Zx=1048576;function qp([n,t],[e,i]){const s=tt(n,e);return s===0?tt(t,i):s}class tP{constructor(t){this.Tr=t,this.buffer=new jt(qp),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();qp(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class eP{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){H(Hp,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ns(e)?H(Hp,"Ignoring IndexedDB error during garbage collection: ",e):await Os(e)}await this.Rr(3e5)}))}}class nP{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return B.resolve(Ac.ue);const i=new tP(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(jp)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jp):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let i,s,r,o,a,c,l;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(t,s)))).next((h=>(i=h,a=Date.now(),this.removeTargets(t,i,e)))).next((h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(t,i)))).next((h=>(l=Date.now(),is()<=it.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h}))))}}function iP(n,t){return new nP(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changes=new Wi((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ae.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?B.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rP{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&Sr(i.mutation,s,Se.empty(),_t.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,st()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=st()){const s=ki();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=cr();return r.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=ki();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,st())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=Mn();const o=Ar(),a=(function(){return Ar()})();return e.forEach(((c,l)=>{const d=i.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof fi)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Sr(d.mutation,l,d.mutation.getFieldMask(),_t.now())):o.set(l.key,Se.empty())})),this.recalculateAndSaveOverlays(t,r).next((c=>(c.forEach(((l,d)=>o.set(l,d))),e.forEach(((l,d)=>{var h;return a.set(l,new rP(d,(h=o.get(l))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(t,e){const i=Ar();let s=new St(((o,a)=>o-a)),r=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((c=>{const l=e.get(c);if(l===null)return;let d=i.get(c)||Se.empty();d=a.applyToLocalView(l,d),i.set(c,d);const h=(s.get(a.batchId)||st()).add(c);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=Xv();d.forEach((f=>{if(!r.has(f)){const g=n_(e.get(f),i.get(f));g!==null&&h.set(f,g),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return B.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return(function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):qv(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):B.resolve(ki());let a=Br,c=r;return o.next((l=>B.forEach(l,((d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?B.resolve():this.remoteDocumentCache.getEntry(t,d).next((f=>{c=c.insert(d,f)}))))).next((()=>this.populateOverlays(t,l,r))).next((()=>this.computeViews(t,c,l,st()))).next((d=>({batchId:a,changes:Yv(d)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next((i=>{let s=cr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=cr();return this.indexManager.getCollectionParents(t,r).next((a=>B.forEach(a,(c=>{const l=(function(h,f){return new Ls(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,i,s).next((d=>{d.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,ae.newInvalidDocument(d)))}));let a=cr();return o.forEach(((c,l)=>{const d=r.get(c);d!==void 0&&Sr(d.mutation,l,Se.empty(),_t.now()),Cc(e,l)&&(a=a.insert(c,l))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return B.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}})(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Xx(s.bundledQuery),readTime:Qe(s.readTime)}})(e)),B.resolve()}}/**
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
 */class cP{constructor(){this.overlays=new St(G.comparator),this.kr=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const i=ki();return B.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.wt(t,e,r)})),B.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),B.resolve()}getOverlaysForCollection(t,e,i){const s=ki(),r=e.length+1,o=new G(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new St(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>i){let d=r.get(l.largestBatchId);d===null&&(d=ki(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=ki(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,d)=>a.set(l,d))),!(a.size()>=s)););return B.resolve(a)}wt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new xx(e,i));let r=this.kr.get(e);r===void 0&&(r=st(),this.kr.set(e,r)),this.kr.set(e,r.add(i.key))}}/**
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
 */class lP{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.qr=new jt(Ht.Qr),this.$r=new jt(Ht.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const i=new Ht(t,e);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new Ht(t,e))}Gr(t,e){t.forEach((i=>this.removeReference(i,e)))}zr(t){const e=new G(new yt([])),i=new Ht(e,t),s=new Ht(e,t+1),r=[];return this.$r.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new G(new yt([])),i=new Ht(e,t),s=new Ht(e,t+1);let r=st();return this.$r.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new Ht(t,0),i=this.qr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Ht{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return G.comparator(t.key,e.key)||tt(t.Hr,e.Hr)}static Ur(t,e){return tt(t.Hr,e.Hr)||G.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new jt(Ht.Qr)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sx(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new Ht(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,e){return B.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?gd:this.er-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Ht(e,0),s=new Ht(e,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new jt(tt);return e.forEach((s=>{const r=new Ht(s,0),o=new Ht(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),B.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;G.isDocumentKey(r)||(r=r.child(""));const o=new Ht(new G(r),0);let a=new jt(tt);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Hr)),!0)}),o),B.resolve(this.ei(a))}ei(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){ut(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return B.forEach(e.mutations,(s=>{const r=new Ht(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=i}))}rr(t){}containsKey(t,e){const i=new Ht(e,0),s=this.Yr.firstAfterOrEqual(i);return B.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(t){this.ni=t,this.docs=(function(){return new St(G.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return B.resolve(i?i.document.mutableCopy():ae.newInvalidDocument(e))}getEntries(t,e){let i=Mn();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ae.newInvalidDocument(s))})),B.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=Mn();const o=e.path,a=new G(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||$S(US(d),i)<=0||(s.has(d.key)||Cc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(t,e,i,s){Y(9500)}ri(t,e){return B.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new hP(this)}getSize(t){return B.resolve(this.size)}}class hP extends sP{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(i)})),B.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(t){this.persistence=t,this.ii=new Wi((e=>vd(e)),_d),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.si=0,this.oi=new Td,this.targetCount=0,this._i=ws.ar()}forEachTarget(t,e){return this.ii.forEach(((i,s)=>e(s))),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.si&&(this.si=e),B.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ws(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.hr(e),B.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),B.waitFor(r).next((()=>s))}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const i=this.ii.get(e)||null;return B.resolve(i)}addMatchingKeys(t,e,i){return this.oi.Kr(e,i),B.resolve()}removeMatchingKeys(t,e,i){this.oi.Gr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),B.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const i=this.oi.Jr(e);return B.resolve(i)}containsKey(t,e){return B.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,e){this.ai={},this.overlays={},this.ui=new Ac(0),this.ci=!1,this.ci=!0,this.li=new lP,this.referenceDelegate=t(this),this.hi=new fP(this),this.indexManager=new Qx,this.remoteDocumentCache=(function(s){return new dP(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new Yx(e),this.Ti=new aP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new cP,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ai[t.toKey()];return i||(i=new uP(e,this.referenceDelegate),this.ai[t.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,i){H("MemoryPersistence","Starting transaction:",t);const s=new pP(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return B.or(Object.values(this.ai).map((i=>()=>i.containsKey(t,e))))}}class pP extends jS{constructor(t){super(),this.currentSequenceNumber=t}}class Ad{constructor(t){this.persistence=t,this.Ai=new Td,this.Ri=null}static Vi(t){return new Ad(t)}get mi(){if(this.Ri)return this.Ri;throw Y(60996)}addReference(t,e,i){return this.Ai.addReference(i,e),this.mi.delete(i.toString()),B.resolve()}removeReference(t,e,i){return this.Ai.removeReference(i,e),this.mi.add(i.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),B.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,(i=>{const s=G.fromPath(i);return this.fi(t,s).next((r=>{r||e.removeEntry(s,X.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((i=>{i?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return B.or([()=>B.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Qa{constructor(t,e){this.persistence=t,this.gi=new Wi((i=>WS(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=iP(this,e)}static Vi(t,e){return new Qa(t,e)}Ii(){}di(t){return B.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}yr(t){let e=0;return this.gr(t,(i=>{e++})).next((()=>e))}gr(t,e){return B.forEach(this.gi,((i,s)=>this.Sr(t,i,s).next((r=>r?B.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(t,(o=>this.Sr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,X.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}removeReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ma(t.data.value)),e}Sr(t,e,i){return B.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return B.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class mP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return $E()?8:HS(le())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ps(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ys(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new gP;return this.ws(t,e,o).next((a=>{if(r.result=a,this.Rs)return this.Ss(t,e,o,a.size)}))})).next((()=>r.result))}Ss(t,e,i,s){return i.documentReadCount<this.Vs?(is()<=it.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ss(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(is()<=it.DEBUG&&H("QueryEngine","Query:",ss(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(is()<=it.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ss(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xe(e))):B.resolve())}ps(t,e){if(Mp(e))return B.resolve(null);let i=Xe(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=hu(e,null,"F"),i=Xe(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=st(...r);return this.gs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((c=>{const l=this.bs(e,a);return this.Ds(e,l,o,c.readTime)?this.ps(t,hu(e,null,"F")):this.vs(t,l,e,c)}))))})))))}ys(t,e,i,s){return Mp(e)||s.isEqual(X.min())?B.resolve(null):this.gs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ds(e,o,i,s)?B.resolve(null):(is()<=it.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ss(e)),this.vs(t,o,e,BS(s,Br)).next((a=>a)))}))}bs(t,e){let i=new jt(Gv(t));return e.forEach(((s,r)=>{Cc(t,r)&&(i=i.add(r))})),i}Ds(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(t,e,i){return is()<=it.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ss(e)),this.gs.getDocumentsMatchingQuery(t,e,si.min(),i)}vs(t,e,i,s){return this.gs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="LocalStore",yP=3e8;class vP{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new St(tt),this.Ms=new Wi((r=>vd(r)),_d),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(i)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new oP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function _P(n,t,e,i){return new vP(n,t,e,i)}async function m_(n,t){const e=J(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Ns(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let c=st();for(const l of s){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(i,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function bP(n,t){const e=J(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.Os.newChangeBuffer({trackRemovals:!0});return(function(a,c,l,d){const h=l.batch,f=h.keys();let g=B.resolve();return f.forEach((y=>{g=g.next((()=>d.getEntry(c,y))).next((_=>{const v=l.docVersions.get(y);ut(v!==null,48541),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),d.addEntry(_)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,h)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let c=st();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function y_(n){const t=J(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function wP(n,t){const e=J(n),i=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const a=[];t.targetChanges.forEach(((d,h)=>{const f=s.get(h);if(!f)return;a.push(e.hi.removeMatchingKeys(r,d.removedDocuments,h).next((()=>e.hi.addMatchingKeys(r,d.addedDocuments,h))));let g=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Qt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,i)),s=s.insert(h,g),(function(_,v,I){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=yP?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0})(f,g,d)&&a.push(e.hi.updateTargetData(r,g))}));let c=Mn(),l=st();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))})),a.push(EP(r,o,t.documentUpdates).next((d=>{c=d.Ls,l=d.ks}))),!i.isEqual(X.min())){const d=e.hi.getLastRemoteSnapshotVersion(r).next((h=>e.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(d)}return B.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,c,l))).next((()=>c))})).then((r=>(e.Fs=s,r)))}function EP(n,t,e){let i=st(),s=st();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=Mn();return e.forEach(((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):H(xd,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function IP(n,t){const e=J(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=gd),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function TP(n,t){const e=J(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.hi.getTargetData(i,t).next((r=>r?(s=r,B.resolve(s)):e.hi.allocateTargetId(i).next((o=>(s=new zn(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(i.targetId,i),e.Ms.set(t,i.targetId)),i}))}async function yu(n,t,e){const i=J(n),s=i.Fs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ns(o))throw o;H(xd,`Failed to update sequence numbers for target ${t}: ${o}`)}i.Fs=i.Fs.remove(t),i.Ms.delete(s.target)}function Wp(n,t,e){const i=J(n);let s=X.min(),r=st();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,d){const h=J(c),f=h.Ms.get(d);return f!==void 0?B.resolve(h.Fs.get(f)):h.hi.getTargetData(l,d)})(i,o,Xe(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{r=c}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:X.min(),e?r:st()))).next((a=>(AP(i,dx(t),a),{documents:a,qs:r})))))}function AP(n,t,e){let i=n.xs.get(t)||X.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(t,i)}class Gp{constructor(){this.activeTargetIds=yx()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class SP{constructor(){this.Fo=new Gp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,i){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Gp,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class xP{xo(t){}shutdown(){}}/**
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
 */const Kp="ConnectivityMonitor";class Yp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){H(Kp,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){H(Kp,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ko=null;function vu(){return Ko===null?Ko=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ko++,"0x"+Ko.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="RestConnection",PP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kP{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===qa?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=vu(),a=this.Go(t,e.toUriEncodedString());H(Cl,`Sending RPC '${t}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,r);const{host:l}=new URL(a),d=Ss(l);return this.jo(t,a,c,i,d).then((h=>(H(Cl,`Received RPC '${t}' ${o}: `,h),h)),(h=>{throw ii(Cl,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",i),h}))}Jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}zo(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ms})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Go(t,e){const i=PP[t];return`${this.$o}/v1/${e}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="WebChannelConnection";class RP extends kP{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,i,s,r){const o=vu();return new Promise(((a,c)=>{const l=new _v;l.setWithCredentials(!0),l.listenOnce(bv.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case ga.NO_ERROR:const h=l.getResponseJson();H(ne,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(h)),a(h);break;case ga.TIMEOUT:H(ne,`RPC '${t}' ${o} timed out`),c(new j(L.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const f=l.getStatus();if(H(ne,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const _=(function(I){const k=I.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(k)>=0?k:L.UNKNOWN})(y.status);c(new j(_,y.message))}else c(new j(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{c_:t,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{H(ne,`RPC '${t}' ${o} completed.`)}}));const d=JSON.stringify(s);H(ne,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",d,i,15)}))}P_(t,e,i){const s=vu(),r=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Iv(),a=Ev(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const d=r.join("");H(ne,`Creating RPC '${t}' stream ${s}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let f=!1,g=!1;const y=new CP({Ho:v=>{g?H(ne,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(H(ne,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),H(ne,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},Yo:()=>h.close()}),_=(v,I,k)=>{v.listen(I,(D=>{try{k(D)}catch(M){setTimeout((()=>{throw M}),0)}}))};return _(h,ar.EventType.OPEN,(()=>{g||(H(ne,`RPC '${t}' stream ${s} transport opened.`),y.s_())})),_(h,ar.EventType.CLOSE,(()=>{g||(g=!0,H(ne,`RPC '${t}' stream ${s} transport closed`),y.__(),this.I_(h))})),_(h,ar.EventType.ERROR,(v=>{g||(g=!0,ii(ne,`RPC '${t}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),y.__(new j(L.UNAVAILABLE,"The operation could not be completed")))})),_(h,ar.EventType.MESSAGE,(v=>{var I;if(!g){const k=v.data[0];ut(!!k,16349);const D=k,M=(D==null?void 0:D.error)||((I=D[0])===null||I===void 0?void 0:I.error);if(M){H(ne,`RPC '${t}' stream ${s} received error:`,M);const N=M.status;let F=(function(E){const S=Vt[E];if(S!==void 0)return s_(S)})(N),T=M.message;F===void 0&&(F=L.INTERNAL,T="Unknown error status: "+N+" with message "+M.message),g=!0,y.__(new j(F,T)),h.close()}else H(ne,`RPC '${t}' stream ${s} received:`,k),y.a_(k)}})),_(a,wv.STAT_EVENT,(v=>{v.stat===ru.PROXY?H(ne,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===ru.NOPROXY&&H(ne,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{y.o_()}),0),y}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Rl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){return new Nx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Fi=t,this.timerId=e,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="PersistentStream";class __{constructor(t,e,i,s,r,o,a,c){this.Fi=t,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new v_(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(Dn(e.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===e&&this.W_(i,s)}),(i=>{t((()=>{const s=new j(L.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(t,e){const i=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return H(Xp,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(H(Xp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class DP extends __{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Fx(this.serializer,t),i=(function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Qe(o.readTime):X.min()})(t);return this.listener.J_(e,i)}H_(t){const e={};e.database=mu(this.serializer),e.addTarget=(function(r,o){let a;const c=o.target;if(a=uu(c)?{documents:$x(r,c)}:{query:zx(r,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=a_(r,o.resumeToken);const l=fu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Xa(r,o.snapshotVersion.toTimestamp());const l=fu(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,t);const i=Hx(this.serializer,t);i&&(e.labels=i),this.k_(e)}Y_(t){const e={};e.database=mu(this.serializer),e.removeTarget=t,this.k_(e)}}class MP extends __{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return ut(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ut(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){ut(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Ux(t.writeResults,t.commitTime),i=Qe(t.commitTime);return this.listener.ta(i,e)}na(){const t={};t.database=mu(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>Bx(this.serializer,i)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{}class NP extends OP{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,pu(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(L.UNKNOWN,r.toString())}))}Jo(t,e,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(t,pu(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(L.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class LP{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */const $i="RemoteStore";class VP{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((o=>{i.enqueueAndForget((async()=>{Gi(this)&&(H($i,"Restarting streams for network reachability change."),await(async function(c){const l=J(c);l.Ia.add(4),await lo(l),l.Aa.set("Unknown"),l.Ia.delete(4),await Lc(l)})(this))}))})),this.Aa=new LP(i,s)}}async function Lc(n){if(Gi(n))for(const t of n.da)await t(!0)}async function lo(n){for(const t of n.da)await t(!1)}function b_(n,t){const e=J(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Rd(e)?Cd(e):Vs(e).x_()&&kd(e,t))}function Pd(n,t){const e=J(n),i=Vs(e);e.Ta.delete(t),i.x_()&&w_(e,t),e.Ta.size===0&&(i.x_()?i.B_():Gi(e)&&e.Aa.set("Unknown"))}function kd(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Vs(n).H_(t)}function w_(n,t){n.Ra.$e(t),Vs(n).Y_(t)}function Cd(n){n.Ra=new Rx({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),Vs(n).start(),n.Aa.aa()}function Rd(n){return Gi(n)&&!Vs(n).M_()&&n.Ta.size>0}function Gi(n){return J(n).Ia.size===0}function E_(n){n.Ra=void 0}async function FP(n){n.Aa.set("Online")}async function BP(n){n.Ta.forEach(((t,e)=>{kd(n,t)}))}async function UP(n,t){E_(n),Rd(n)?(n.Aa.la(t),Cd(n)):n.Aa.set("Unknown")}async function $P(n,t,e){if(n.Aa.set("Online"),t instanceof o_&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,t)}catch(i){H($i,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ja(n,i)}else if(t instanceof _a?n.Ra.Ye(t):t instanceof r_?n.Ra.it(t):n.Ra.et(t),!e.isEqual(X.min()))try{const i=await y_(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.Ra.Pt(o);return a.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ta.get(l);d&&r.Ta.set(l,d.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,l)=>{const d=r.Ta.get(c);if(!d)return;r.Ta.set(c,d.withResumeToken(Qt.EMPTY_BYTE_STRING,d.snapshotVersion)),w_(r,c);const h=new zn(d.target,c,l,d.sequenceNumber);kd(r,h)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){H($i,"Failed to raise snapshot:",i),await Ja(n,i)}}async function Ja(n,t,e){if(!Ns(t))throw t;n.Ia.add(1),await lo(n),n.Aa.set("Offline"),e||(e=()=>y_(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H($i,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Lc(n)}))}function I_(n,t){return t().catch((e=>Ja(n,e,t)))}async function Vc(n){const t=J(n),e=ci(t);let i=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:gd;for(;zP(t);)try{const s=await IP(t.localStore,i);if(s===null){t.Pa.length===0&&e.B_();break}i=s.batchId,jP(t,s)}catch(s){await Ja(t,s)}T_(t)&&A_(t)}function zP(n){return Gi(n)&&n.Pa.length<10}function jP(n,t){n.Pa.push(t);const e=ci(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function T_(n){return Gi(n)&&!ci(n).M_()&&n.Pa.length>0}function A_(n){ci(n).start()}async function HP(n){ci(n).na()}async function qP(n){const t=ci(n);for(const e of n.Pa)t.X_(e.mutations)}async function WP(n,t,e){const i=n.Pa.shift(),s=wd.from(i,t,e);await I_(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Vc(n)}async function GP(n,t){t&&ci(n).Z_&&await(async function(i,s){if((function(o){return kx(o)&&o!==L.ABORTED})(s.code)){const r=i.Pa.shift();ci(i).N_(),await I_(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Vc(i)}})(n,t),T_(n)&&A_(n)}async function Qp(n,t){const e=J(n);e.asyncQueue.verifyOperationInProgress(),H($i,"RemoteStore received new credentials");const i=Gi(e);e.Ia.add(3),await lo(e),i&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Lc(e)}async function KP(n,t){const e=J(n);t?(e.Ia.delete(2),await Lc(e)):t||(e.Ia.add(2),await lo(e),e.Aa.set("Unknown"))}function Vs(n){return n.Va||(n.Va=(function(e,i,s){const r=J(e);return r.ia(),new DP(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:FP.bind(null,n),e_:BP.bind(null,n),n_:UP.bind(null,n),J_:$P.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Rd(n)?Cd(n):n.Aa.set("Unknown")):(await n.Va.stop(),E_(n))}))),n.Va}function ci(n){return n.ma||(n.ma=(function(e,i,s){const r=J(e);return r.ia(),new MP(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:HP.bind(null,n),n_:GP.bind(null,n),ea:qP.bind(null,n),ta:WP.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Vc(n)):(await n.ma.stop(),n.Pa.length>0&&(H($i,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hs{static emptySet(t){return new hs(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||G.comparator(e.key,i.key):(e,i)=>G.comparator(e.key,i.key),this.keyedMap=cr(),this.sortedSet=new St(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof hs)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Jp{constructor(){this.fa=new St(G.comparator)}track(t){const e=t.doc.key,i=this.fa.get(e);i?t.type!==0&&i.type===3?this.fa=this.fa.insert(e,t):t.type===3&&i.type!==1?this.fa=this.fa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.fa=this.fa.remove(e):t.type===1&&i.type===2?this.fa=this.fa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):Y(63341,{At:t,ga:i}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,i)=>{t.push(i)})),t}}class Es{constructor(t,e,i,s,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new Es(t,e,hs.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class XP{constructor(){this.queries=Zp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,i){const s=J(e),r=s.queries;s.queries=Zp(),r.forEach(((o,a)=>{for(const c of a.wa)c.onError(i)}))})(this,new j(L.ABORTED,"Firestore shutting down"))}}function Zp(){return new Wi((n=>Wv(n)),kc)}async function Od(n,t){const e=J(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.ba()&&(i=2):(r=new YP,i=t.ba()?0:1);try{switch(i){case 0:r.ya=await e.onListen(s,!0);break;case 1:r.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Md(o,`Initialization of query '${ss(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.wa.push(t),t.va(e.onlineState),r.ya&&t.Ca(r.ya)&&Ld(e)}async function Nd(n,t){const e=J(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.wa.indexOf(t);o>=0&&(r.wa.splice(o,1),r.wa.length===0?s=t.ba()?0:1:!r.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function QP(n,t){const e=J(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.wa)a.Ca(s)&&(i=!0);o.ya=s}}i&&Ld(e)}function JP(n,t,e){const i=J(n),s=i.queries.get(t);if(s)for(const r of s.wa)r.onError(e);i.queries.delete(t)}function Ld(n){n.Da.forEach((t=>{t.next()}))}var _u,tg;(tg=_u||(_u={})).Fa="default",tg.Cache="cache";class Vd{constructor(t,e,i){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Es(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const i=e!=="Offline";return(!this.options.ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Es.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==_u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.key=t}}class x_{constructor(t){this.key=t}}class ZP{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=st(),this.mutatedKeys=st(),this.Xa=Gv(t),this.eu=new hs(this.Xa)}get tu(){return this.Ha}nu(t,e){const i=e?e.ru:new Jp,s=e?e.eu:this.eu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,h)=>{const f=s.get(d),g=Cc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?y!==_&&(i.track({type:3,doc:g}),v=!0):this.iu(f,g)||(i.track({type:2,doc:g}),v=!0,(c&&this.Xa(g,c)>0||l&&this.Xa(g,l)<0)&&(a=!0)):!f&&g?(i.track({type:0,doc:g}),v=!0):f&&!g&&(i.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),r=_?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{eu:o,ru:i,Ds:a,mutatedKeys:r}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const o=t.ru.pa();o.sort(((d,h)=>(function(g,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{At:v})}};return _(g)-_(y)})(d.type,h.type)||this.Xa(d.doc,h.doc))),this.su(i),s=s!=null&&s;const a=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new Es(this.query,t.eu,r,o,t.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Jp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=st(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const e=[];return t.forEach((i=>{this.Za.has(i)||e.push(new x_(i))})),this.Za.forEach((i=>{t.has(i)||e.push(new S_(i))})),e}uu(t){this.Ha=t.qs,this.Za=st();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Es.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Fd="SyncEngine";class tk{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class ek{constructor(t){this.key=t,this.lu=!1}}class nk{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Wi((a=>Wv(a)),kc),this.Tu=new Map,this.Iu=new Set,this.du=new St(G.comparator),this.Eu=new Map,this.Au=new Td,this.Ru={},this.Vu=new Map,this.mu=ws.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ik(n,t,e=!0){const i=M_(n);let s;const r=i.Pu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await P_(i,t,e,!0),s}async function sk(n,t){const e=M_(n);await P_(e,t,!0,!1)}async function P_(n,t,e,i){const s=await TP(n.localStore,Xe(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await rk(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&b_(n.remoteStore,s),a}async function rk(n,t,e,i,s){n.gu=(h,f,g)=>(async function(_,v,I,k){let D=v.view.nu(I);D.Ds&&(D=await Wp(_.localStore,v.query,!1).then((({documents:T})=>v.view.nu(T,D))));const M=k&&k.targetChanges.get(v.targetId),N=k&&k.targetMismatches.get(v.targetId)!=null,F=v.view.applyChanges(D,_.isPrimaryClient,M,N);return ng(_,v.targetId,F._u),F.snapshot})(n,h,f,g);const r=await Wp(n.localStore,t,!0),o=new ZP(t,r.qs),a=o.nu(r.documents),c=co.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);ng(n,e,l._u);const d=new tk(t,e,o);return n.Pu.set(t,d),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),l.snapshot}async function ok(n,t,e){const i=J(n),s=i.Pu.get(t),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((o=>!kc(o,t)))),void i.Pu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await yu(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Pd(i.remoteStore,s.targetId),bu(i,s.targetId)})).catch(Os)):(bu(i,s.targetId),await yu(i.localStore,s.targetId,!0))}async function ak(n,t){const e=J(n),i=e.Pu.get(t),s=e.Tu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Pd(e.remoteStore,i.targetId))}async function ck(n,t,e){const i=gk(n);try{const s=await(function(o,a){const c=J(o),l=_t.now(),d=a.reduce(((g,y)=>g.add(y.key)),st());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let y=Mn(),_=st();return c.Os.getEntries(g,d).next((v=>{y=v,y.forEach(((I,k)=>{k.isValidDocument()||(_=_.add(I))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,y))).next((v=>{h=v;const I=[];for(const k of a){const D=Tx(k,h.get(k.key).overlayedDocument);D!=null&&I.push(new fi(k.key,D,Fv(D.value.mapValue),me.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,I,a)})).next((v=>{f=v;const I=v.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(g,v.batchId,I)}))})).then((()=>({batchId:f.batchId,changes:Yv(h)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new St(tt)),l=l.insert(a,c),o.Ru[o.currentUser.toKey()]=l})(i,s.batchId,e),await uo(i,s.changes),await Vc(i.remoteStore)}catch(s){const r=Md(s,"Failed to persist write");e.reject(r)}}async function k_(n,t){const e=J(n);try{const i=await wP(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Eu.get(r);o&&(ut(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ut(o.lu,14607):s.removedDocuments.size>0&&(ut(o.lu,42227),o.lu=!1))})),await uo(e,i,t)}catch(i){await Os(i)}}function eg(n,t,e){const i=J(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Pu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach(((d,h)=>{for(const f of h.wa)f.va(a)&&(l=!0)})),l&&Ld(c)})(i.eventManager,t),s.length&&i.hu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function lk(n,t,e){const i=J(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),r=s&&s.key;if(r){let o=new St(G.comparator);o=o.insert(r,ae.newNoDocument(r,X.min()));const a=st().add(r),c=new Oc(X.min(),new Map,new St(tt),o,a);await k_(i,c),i.du=i.du.remove(r),i.Eu.delete(t),Bd(i)}else await yu(i.localStore,t,!1).then((()=>bu(i,t,e))).catch(Os)}async function uk(n,t){const e=J(n),i=t.batch.batchId;try{const s=await bP(e.localStore,t);R_(e,i,null),C_(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await uo(e,s)}catch(s){await Os(s)}}async function dk(n,t,e){const i=J(n);try{const s=await(function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next((h=>(ut(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>c.localDocuments.getDocuments(l,d)))}))})(i.localStore,t);R_(i,t,e),C_(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await uo(i,s)}catch(s){await Os(s)}}function C_(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function R_(n,t,e){const i=J(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Ru[i.currentUser.toKey()]=s}}function bu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Tu.get(t))n.Pu.delete(i),e&&n.hu.pu(i,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((i=>{n.Au.containsKey(i)||D_(n,i)}))}function D_(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Pd(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Bd(n))}function ng(n,t,e){for(const i of e)i instanceof S_?(n.Au.addReference(i.key,t),hk(n,i)):i instanceof x_?(H(Fd,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,t),n.Au.containsKey(i.key)||D_(n,i.key)):Y(19791,{yu:i})}function hk(n,t){const e=t.key,i=e.path.canonicalString();n.du.get(e)||n.Iu.has(i)||(H(Fd,"New document in limbo: "+e),n.Iu.add(i),Bd(n))}function Bd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new G(yt.fromString(t)),i=n.mu.next();n.Eu.set(i,new ek(e)),n.du=n.du.insert(e,i),b_(n.remoteStore,new zn(Xe(Pc(e.path)),i,"TargetPurposeLimboResolution",Ac.ue))}}async function uo(n,t,e){const i=J(n),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach(((a,c)=>{o.push(i.gu(c,t,e).then((l=>{var d;if((l||e)&&i.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){s.push(l);const h=Sd.Es(c.targetId,l);r.push(h)}})))})),await Promise.all(o),i.hu.J_(s),await(async function(c,l){const d=J(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>B.forEach(l,(f=>B.forEach(f.Is,(g=>d.persistence.referenceDelegate.addReference(h,f.targetId,g))).next((()=>B.forEach(f.ds,(g=>d.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))))))}catch(h){if(!Ns(h))throw h;H(xd,"Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=d.Fs.get(f),y=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(y);d.Fs=d.Fs.insert(f,_)}}})(i.localStore,r))}async function fk(n,t){const e=J(n);if(!e.currentUser.isEqual(t)){H(Fd,"User change. New user:",t.toKey());const i=await m_(e.localStore,t);e.currentUser=t,(function(r,o){r.Vu.forEach((a=>{a.forEach((c=>{c.reject(new j(L.CANCELLED,o))}))})),r.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await uo(e,i.Bs)}}function pk(n,t){const e=J(n),i=e.Eu.get(t);if(i&&i.lu)return st().add(i.key);{let s=st();const r=e.Tu.get(t);if(!r)return s;for(const o of r){const a=e.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function M_(n){const t=J(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=k_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lk.bind(null,t),t.hu.J_=QP.bind(null,t.eventManager),t.hu.pu=JP.bind(null,t.eventManager),t}function gk(n){const t=J(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dk.bind(null,t),t}class Za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Nc(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return _P(this.persistence,new mP,t.initialUser,this.serializer)}Du(t){return new g_(Ad.Vi,this.serializer)}bu(t){return new SP}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Za.provider={build:()=>new Za};class mk extends Za{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){ut(this.persistence.referenceDelegate instanceof Qa,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new eP(i,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new g_((i=>Qa.Vi(i,e)),this.serializer)}}class wu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>eg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fk.bind(null,this.syncEngine),await KP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new XP})()}createDatastore(t){const e=Nc(t.databaseInfo.databaseId),i=(function(r){return new RP(r)})(t.databaseInfo);return(function(r,o,a,c){return new NP(r,o,a,c)})(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new VP(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>eg(this.syncEngine,e,0)),(function(){return Yp.C()?new Yp:new xP})())}createSyncEngine(t,e){return(function(s,r,o,a,c,l,d){const h=new nk(s,r,o,a,c,l);return d&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=J(s);H($i,"RemoteStore shutting down."),r.Ia.add(5),await lo(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}wu.provider={build:()=>new wu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const li="FirestoreClient";class yk{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=re.UNAUTHENTICATED,this.clientId=pd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{H(li,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(H(li,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Md(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function Dl(n,t){n.asyncQueue.verifyOperationInProgress(),H(li,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await m_(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>{ii("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{H("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ii("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function ig(n,t){n.asyncQueue.verifyOperationInProgress();const e=await vk(n);H(li,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>Qp(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Qp(t.remoteStore,s))),n._onlineComponents=t}async function vk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(li,"Using user provided OfflineComponentProvider");try{await Dl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ii("Error using user provided cache. Falling back to memory cache: "+e),await Dl(n,new Za)}}else H(li,"Using default OfflineComponentProvider"),await Dl(n,new mk(void 0));return n._offlineComponents}async function O_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(li,"Using user provided OnlineComponentProvider"),await ig(n,n._uninitializedComponentsProvider._online)):(H(li,"Using default OnlineComponentProvider"),await ig(n,new wu))),n._onlineComponents}function _k(n){return O_(n).then((t=>t.syncEngine))}async function tc(n){const t=await O_(n),e=t.eventManager;return e.onListen=ik.bind(null,t.syncEngine),e.onUnlisten=ok.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=sk.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ak.bind(null,t.syncEngine),e}function bk(n,t,e={}){const i=new Sn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Ud({next:f=>{d.Ou(),o.enqueueAndForget((()=>Nd(r,h)));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new j(L.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new j(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Vd(Pc(a.path),d,{includeMetadataChanges:!0,ka:!0});return Od(r,h)})(await tc(n),n.asyncQueue,t,e,i))),i.promise}function wk(n,t,e={}){const i=new Sn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Ud({next:f=>{d.Ou(),o.enqueueAndForget((()=>Nd(r,h))),f.fromCache&&c.source==="server"?l.reject(new j(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Vd(a,d,{includeMetadataChanges:!0,ka:!0});return Od(r,h)})(await tc(n),n.asyncQueue,t,e,i))),i.promise}/**
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
 */function N_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="firestore.googleapis.com",rg=!0;class og{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new j(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=L_,this.ssl=rg}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:rg;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=p_;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Zx)throw new j(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}FS("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=N_((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fc{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new og({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new og(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new kS;switch(i.type){case"firstParty":return new MS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=sg.get(e);i&&(H("ComponentProvider","Removing Datastore"),sg.delete(e),i.terminate())})(this),Promise.resolve()}}function Ek(n,t,e,i={}){var s;n=ge(n,Fc);const r=Ss(t),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;r&&(Jm(`https://${c}`),Zm("Firestore",!0)),o.host!==L_&&o.host!==c&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!Fi(l,a)&&(n._setSettings(l),i.mockUserToken)){let d,h;if(typeof i.mockUserToken=="string")d=i.mockUserToken,h=re.MOCK_USER;else{d=DE(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new j(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new re(f)}n._authCredentials=new CS(new Av(d,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new pi(this.firestore,t,this._query)}}class Rt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(oo(e,Rt._jsonSchema))return new Rt(t,i||null,new G(yt.fromString(e.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Ut("string",Rt._jsonSchemaVersion),referencePath:Ut("string")};class ti extends pi{constructor(t,e,i){super(t,e,Pc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new G(t))}withConverter(t){return new ti(this.firestore,t,this._path)}}function xn(n,t,...e){if(n=K(n),xv("collection","path",t),n instanceof Fc){const i=yt.fromString(t,...e);return _p(i),new ti(n,null,i)}{if(!(n instanceof Rt||n instanceof ti))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(t,...e));return _p(i),new ti(n.firestore,null,i)}}function Jt(n,t,...e){if(n=K(n),arguments.length===1&&(t=pd.newId()),xv("doc","path",t),n instanceof Fc){const i=yt.fromString(t,...e);return vp(i),new Rt(n,null,new G(i))}{if(!(n instanceof Rt||n instanceof ti))throw new j(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(t,...e));return vp(i),new Rt(n.firestore,n instanceof ti?n.converter:null,new G(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="AsyncQueue";class cg{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new v_(this,"async_queue_retry"),this.oc=()=>{const i=Rl();i&&H(ag,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=t;const e=Rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Rl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Sn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Ns(t))throw t;H(ag,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((i=>{throw this.tc=i,this.nc=!1,Dn("INTERNAL UNHANDLED ERROR: ",lg(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=e,e}enqueueAfterDelay(t,e,i){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Dd.createAndSchedule(this,t,e,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&Y(47125,{hc:lg(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function lg(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function ug(n){return(function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class sn extends Fc{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new cg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cg(t),this._firestoreClient=void 0,await t}}}function Ik(n,t){const e=typeof n=="object"?n:iy(),i=typeof n=="string"?n:qa,s=qu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=CE("firestore");r&&Ek(s,...r)}return s}function ho(n){if(n._terminated)throw new j(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Tk(n),n._firestoreClient}function Tk(n){var t,e,i;const s=n._freezeSettings(),r=(function(a,c,l,d){return new YS(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,N_(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new yk(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ak=/^__.*__$/;class Sk{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new fi(t,this.data,this.fieldMask,e,this.fieldTransforms):new ao(t,this.data,e,this.fieldTransforms)}}class V_{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new fi(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function F_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ec:n})}}class zd{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new zd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.fc(t),s}gc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ec(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(F_(this.Ec)&&Ak.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class xk{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Nc(t)}Dc(t,e,i,s=!1){return new zd({Ec:t,methodName:e,bc:i,path:Xt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function po(n){const t=n._freezeSettings(),e=Nc(n._databaseId);return new xk(n._databaseId,!!t.ignoreUndefinedProperties,e)}function jd(n,t,e,i,s,r={}){const o=n.Dc(r.merge||r.mergeFields?2:0,t,e,s);Hd("Data must be an object, but it was:",o,i);const a=$_(i,o);let c,l;if(r.merge)c=new Se(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=Eu(t,h,e);if(!o.contains(f))throw new j(L.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);j_(d,f)||d.push(f)}c=new Se(d),l=o.fieldTransforms.filter((h=>c.covers(h.field)))}else c=null,l=o.fieldTransforms;return new Sk(new _e(a),c,l)}class Bc extends $d{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Bc}}function B_(n,t,e,i){const s=n.Dc(1,t,e);Hd("Data must be an object, but it was:",s,i);const r=[],o=_e.empty();hi(i,((c,l)=>{const d=qd(t,c,e);l=K(l);const h=s.gc(d);if(l instanceof Bc)r.push(d);else{const f=go(l,h);f!=null&&(r.push(d),o.set(d,f))}}));const a=new Se(r);return new V_(o,a,s.fieldTransforms)}function U_(n,t,e,i,s,r){const o=n.Dc(1,t,e),a=[Eu(t,i,e)],c=[s];if(r.length%2!=0)throw new j(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Eu(t,r[f])),c.push(r[f+1]);const l=[],d=_e.empty();for(let f=a.length-1;f>=0;--f)if(!j_(l,a[f])){const g=a[f];let y=c[f];y=K(y);const _=o.gc(g);if(y instanceof Bc)l.push(g);else{const v=go(y,_);v!=null&&(l.push(g),d.set(g,v))}}const h=new Se(l);return new V_(d,h,o.fieldTransforms)}function Pk(n,t,e,i=!1){return go(e,n.Dc(i?4:3,t))}function go(n,t){if(z_(n=K(n)))return Hd("Unsupported field value:",t,n),$_(n,t);if(n instanceof $d)return(function(i,s){if(!F_(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let c=go(a,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=K(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return vx(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=_t.fromDate(i);return{timestampValue:Xa(s.serializer,r)}}if(i instanceof _t){const r=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Xa(s.serializer,r)}}if(i instanceof Je)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ke)return{bytesValue:a_(s.serializer,i._byteString)};if(i instanceof Rt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Id(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ze)return(function(o,a){return{mapValue:{fields:{[Lv]:{stringValue:Vv},[Wa]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.wc("VectorValues must only contain numeric values.");return bd(a.serializer,l)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${Tc(i)}`)})(n,t)}function $_(n,t){const e={};return Cv(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hi(n,((i,s)=>{const r=go(s,t.Vc(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function z_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Je||n instanceof ke||n instanceof Rt||n instanceof $d||n instanceof Ze)}function Hd(n,t,e){if(!z_(e)||!Pv(e)){const i=Tc(e);throw i==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+i)}}function Eu(n,t,e){if((t=K(t))instanceof fo)return t._internalPath;if(typeof t=="string")return qd(n,t);throw ec("Field path arguments must be of type string or ",n,!1,void 0,e)}const kk=new RegExp("[~\\*/\\[\\]]");function qd(n,t,e){if(t.search(kk)>=0)throw ec(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new fo(...t.split("."))._internalPath}catch{throw ec(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ec(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new j(L.INVALID_ARGUMENT,a+n+c)}function j_(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ck extends H_{data(){return super.data()}}function Wd(n,t){return typeof t=="string"?qd(n,t):t instanceof fo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gd{}class W_ extends Gd{}function Kd(n,t,...e){let i=[];t instanceof Gd&&i.push(t),i=i.concat(e),(function(r){const o=r.filter((c=>c instanceof Xd)).length,a=r.filter((c=>c instanceof Yd)).length;if(o>1||o>0&&a>0)throw new j(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class Yd extends W_{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new Yd(t,e,i)}_apply(t){const e=this._parse(t);return G_(t._query,e),new pi(t.firestore,t.converter,du(t._query,e))}_parse(t){const e=po(t.firestore);return(function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hg(h,d);const y=[];for(const _ of h)y.push(dg(c,r,_));f={arrayValue:{values:y}}}else f=dg(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hg(h,d),f=Pk(a,o,h,d==="in"||d==="not-in");return Bt.create(l,d,f)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Xd extends Gd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Xd(t,e)}_parse(t){const e=this._queryConstraints.map((i=>i._parse(t))).filter((i=>i.getFilters().length>0));return e.length===1?e[0]:$e.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,r){let o=s;const a=r.getFlattenedFilters();for(const c of a)G_(o,c),o=du(o,c)})(t._query,e),new pi(t.firestore,t.converter,du(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qd extends W_{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Qd(t,e)}_apply(t){const e=(function(s,r,o){if(s.startAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jr(r,o)})(t._query,this._field,this._direction);return new pi(t.firestore,t.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new Ls(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Jd(n,t="asc"){const e=t,i=Wd("orderBy",n);return Qd._create(i,e)}function dg(n,t,e){if(typeof(e=K(e))=="string"){if(e==="")throw new j(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qv(t)&&e.indexOf("/")!==-1)throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(yt.fromString(e));if(!G.isDocumentKey(i))throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return xp(n,new G(i))}if(e instanceof Rt)return xp(n,e._key);throw new j(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tc(e)}.`)}function hg(n,t){if(!Array.isArray(n)||n.length===0)throw new j(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function G_(n,t){const e=(function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Rk{convertValue(t,e="none"){switch(ai(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Y(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return hi(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var e,i,s;const r=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[Wa].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((o=>Ot(o.doubleValue)));return new Ze(r)}convertGeoPoint(t){return new Je(Ot(t.latitude),Ot(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=xc(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Ur(t));default:return null}}convertTimestamp(t){const e=ri(t);return new _t(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=yt.fromString(t);ut(f_(i),9688,{name:t});const s=new $r(i.get(1),i.get(3)),r=new G(i.popFirst(5));return s.isEqual(e)||Dn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class ur{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Di extends H_{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Wd("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Di._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Di._jsonSchemaVersion="firestore/documentSnapshot/1.0",Di._jsonSchema={type:Ut("string",Di._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class ba extends Di{data(t={}){return super.data(t)}}class Mi{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ur(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new ba(this._firestore,this._userDataWriter,i.key,i,new ur(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const c=new ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ur(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const c=new ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ur(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:Dk(a.type),doc:c,oldIndex:l,newIndex:d}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Mi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=pd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Dk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){n=ge(n,Rt);const t=ge(n.firestore,sn);return bk(ho(t),n._key).then((e=>J_(t,n,e)))}Mi._jsonSchemaVersion="firestore/querySnapshot/1.0",Mi._jsonSchema={type:Ut("string",Mi._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class th extends Rk{constructor(t){super(),this.firestore=t}convertBytes(t){return new ke(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function xr(n){n=ge(n,pi);const t=ge(n.firestore,sn),e=ho(t),i=new th(t);return q_(n._query),wk(e,n._query).then((s=>new Mi(t,i,n,s)))}function Y_(n,t,e){n=ge(n,Rt);const i=ge(n.firestore,sn),s=Zd(n.converter,t,e);return mo(i,[jd(po(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,me.none())])}function gi(n,t,e,...i){n=ge(n,Rt);const s=ge(n.firestore,sn),r=po(s);let o;return o=typeof(t=K(t))=="string"||t instanceof fo?U_(r,"updateDoc",n._key,t,e,i):B_(r,"updateDoc",n._key,t),mo(s,[o.toMutation(n._key,me.exists(!0))])}function eh(n){return mo(ge(n.firestore,sn),[new Mc(n._key,me.none())])}function X_(n,t){const e=ge(n.firestore,sn),i=Jt(n),s=Zd(n.converter,t);return mo(e,[jd(po(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,me.exists(!1))]).then((()=>i))}function Q_(n,...t){var e,i,s;n=K(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||ug(t[o])||(r=t[o++]);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(ug(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,d;if(n instanceof Rt)l=ge(n.firestore,sn),d=Pc(n._key.path),c={next:h=>{t[o]&&t[o](J_(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=ge(n,pi);l=ge(h.firestore,sn),d=h._query;const f=new th(l);c={next:g=>{t[o]&&t[o](new Mi(l,f,h,g))},error:t[o+1],complete:t[o+2]},q_(n._query)}return(function(f,g,y,_){const v=new Ud(_),I=new Vd(g,v,y);return f.asyncQueue.enqueueAndForget((async()=>Od(await tc(f),I))),()=>{v.Ou(),f.asyncQueue.enqueueAndForget((async()=>Nd(await tc(f),I)))}})(ho(l),d,a,c)}function mo(n,t){return(function(i,s){const r=new Sn;return i.asyncQueue.enqueueAndForget((async()=>ck(await _k(i),s,r))),r.promise})(ho(n),t)}function J_(n,t,e){const i=e.docs.get(t._key),s=new th(n);return new Di(n,s,t._key,i,new ur(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=po(t)}set(t,e,i){this._verifyNotCommitted();const s=Ml(t,this._firestore),r=Zd(s.converter,e,i),o=jd(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,me.none())),this}update(t,e,i,...s){this._verifyNotCommitted();const r=Ml(t,this._firestore);let o;return o=typeof(e=K(e))=="string"||e instanceof fo?U_(this._dataReader,"WriteBatch.update",r._key,e,i,s):B_(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(o.toMutation(r._key,me.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Ml(t,this._firestore);return this._mutations=this._mutations.concat(new Mc(e._key,me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ml(n,t){if((n=K(n)).firestore!==t)throw new j(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(n){return ho(n=ge(n,sn)),new Mk(n,(t=>mo(n,t)))}(function(t,e=!0){(function(s){Ms=s})(Ps),ms(new Bi("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new sn(new RS(i.getProvider("auth-internal")),new OS(o,i.getProvider("app-check-internal")),(function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(l.options.projectId,d)})(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),Xn(fp,pp,t),Xn(fp,pp,"esm2017")})();const Nk={apiKey:"AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",authDomain:"money-control-e6af5.firebaseapp.com",databaseURL:"https://money-control-e6af5-default-rtdb.firebaseio.com",projectId:"money-control-e6af5",storageBucket:"money-control-e6af5.firebasestorage.app",messagingSenderId:"490577558965",appId:"1:490577558965:web:09275a065a09844f1eadfc",measurementId:"G-JTLBM89W1W"},nh=ny(Nk),je=yv(nh),gt=Ik(nh),Lk=Object.freeze(Object.defineProperty({__proto__:null,auth:je,db:gt,default:nh},Symbol.toStringTag,{value:"Module"}));async function Z_(n,t){await Y_(Jt(gt,"users",n),{name:t.name,email:t.email,createdAt:t.createdAt||new Date().toISOString(),settings:{currency:"INR",theme:"light",notifications:!0,budgetAlerts:!0,lowBalanceAlert:!0,lowBalanceThreshold:500,allowNegativeBalance:!1}})}async function Wr(n){const t=await K_(Jt(gt,"users",n));return t.exists()?{id:t.id,...t.data()}:null}async function tb(n,t){await gi(Jt(gt,"users",n),{initialBalance:Number(t)}),await ib(n,t)}async function Vk(n,t){const e=await Wr(n),i=(e==null?void 0:e.settings)||{};await gi(Jt(gt,"users",n),{settings:{...i,...t}})}async function Fk(n){const t=Ok(gt);(await xr(xn(gt,"users",n,"accounts"))).forEach(r=>t.delete(r.ref)),(await xr(xn(gt,"users",n,"transactions"))).forEach(r=>t.delete(r.ref)),(await xr(xn(gt,"users",n,"budgets"))).forEach(r=>t.delete(r.ref)),t.delete(Jt(gt,"users",n)),await t.commit()}async function eb(n,t){const e=xn(gt,"users",n,"accounts");return(await X_(e,{name:t.name.trim(),type:t.type,initialBalance:Number(t.initialBalance)||0,bankName:(t.bankName||"").trim(),last4Digits:(t.last4Digits||"").trim(),icon:t.icon||nb(t.type),createdAt:new Date().toISOString()})).id}function nb(n){switch(n){case"Cash":return"💵";case"Bank":return"🏦";case"UPI":return"📱";case"Other":return"💳";default:return"💰"}}async function Bk(n,t,e){const i=Jt(gt,"users",n,"accounts",t);await gi(i,{name:e.name.trim(),type:e.type,initialBalance:Number(e.initialBalance)||0,bankName:(e.bankName||"").trim(),last4Digits:(e.last4Digits||"").trim(),icon:e.icon||nb(e.type),updatedAt:new Date().toISOString()})}async function Uk(n,t){await eh(Jt(gt,"users",n,"accounts",t))}async function $k(n){const t=xn(gt,"users",n,"accounts"),e=Kd(t,Jd("createdAt","asc")),i=await xr(e),s=[];return i.forEach(r=>{s.push({id:r.id,...r.data()})}),s}function zk(n,t){const e=xn(gt,"users",n,"accounts"),i=Kd(e,Jd("createdAt","asc"));return Q_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Account subscription error:",s),t([],s)})}async function ib(n,t=0){(await $k(n)).length===0&&await eb(n,{name:"Cash",type:"Cash",initialBalance:Number(t)||0,icon:"💵"})}async function sb(n,t){const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;if(t.date!==i)throw new Error("⚠️ Invalid transaction date. New transactions can only be created for today.");const s=xn(gt,"users",n,"transactions"),r={type:t.type,amount:Number(t.amount),date:t.date,reason:t.reason.trim(),category:t.category||(t.type==="TRANSFER"?"Transfer":"Other"),notes:(t.notes||"").trim(),createdAt:new Date().toISOString()};return t.type==="INCOME"?r.destinationAccountId=t.destinationAccountId:t.type==="EXPENSE"?r.sourceAccountId=t.sourceAccountId:t.type==="TRANSFER"&&(r.sourceAccountId=t.sourceAccountId,r.destinationAccountId=t.destinationAccountId),(await X_(s,r)).id}async function rb(n,t,e){const i=Jt(gt,"users",n,"transactions",t),s={amount:Number(e.amount),date:e.date,reason:e.reason.trim(),category:e.category||(e.type==="TRANSFER"?"Transfer":"Other"),notes:(e.notes||"").trim(),updatedAt:new Date().toISOString()};e.sourceAccountId!==void 0&&(s.sourceAccountId=e.sourceAccountId),e.destinationAccountId!==void 0&&(s.destinationAccountId=e.destinationAccountId),await gi(i,s)}async function jk(n,t){await eh(Jt(gt,"users",n,"transactions",t))}function Hk(n,t){const e=xn(gt,"users",n,"transactions"),i=Kd(e,Jd("createdAt","desc"));return Q_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Transaction subscription error:",s),t([],s)})}async function ob(n,t){const e=t.category||"monthly";await Y_(Jt(gt,"users",n,"budgets",e),{category:t.category||"monthly",amount:Number(t.amount),month:t.month,updatedAt:new Date().toISOString()})}async function qk(n){const t=xn(gt,"users",n,"budgets"),e=await xr(t),i=[];return e.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function Wk(n,t){await eh(Jt(gt,"users",n,"budgets",t))}Gy(je,od).catch(n=>{console.warn("Firebase setPersistence warning:",n)});async function Gk(n,t,e){const s=(await zy(je,t,e)).user;return await id(s,{displayName:n}),await Z_(s.uid,{name:n,email:t,createdAt:new Date().toISOString()}),s}async function Kk(n,t){return(await jy(je,n,t)).user}async function ih(){await Qy(je)}async function Yk(n){await Uy(je,n)}function Xk(n){return Xy(je,n)}function Qk(){return je.currentUser}async function Jk(n){const t=je.currentUser;if(!t)throw new Error("No user signed in");await id(t,{displayName:n})}async function Zk(n,t){const e=je.currentUser;if(!e)throw new Error("No user signed in");const i=rn.credential(e.email,n);await yc(e,i),await Hy(e,t)}async function tC(n){const t=je.currentUser;if(!t)throw new Error("No user signed in");const e=rn.credential(t.email,n);await yc(t,e),await Fk(t.uid),await Jy(t)}function Ol(n){const t=n.code||"";return{"auth/email-already-in-use":"This email is already registered. Try logging in instead.","auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled. Contact support.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password. Please try again.","auth/invalid-credential":"Invalid email or password. Please try again.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/weak-password":"Password should be at least 6 characters.","auth/network-request-failed":"Network error. Check your internet connection.","auth/requires-recent-login":"Please logout and login again before this action.","auth/operation-not-allowed":"Email/password sign-in is not enabled. Enable it in Firebase Console."}[t]||"Something went wrong. Please try again."}function ab(n,t,e){const i=t.filter(l=>l.type==="EXPENSE"&&l.date&&l.date.startsWith(e)),s=i.reduce((l,d)=>l+d.amount,0),r=n.find(l=>l.category==="monthly"),o=r?{budget:r.amount,spent:s,remaining:r.amount-s,percentage:r.amount>0?Math.min(s/r.amount*100,100):0,exceeded:s>r.amount}:null,c=n.filter(l=>l.category!=="monthly").map(l=>{const d=i.filter(h=>h.category===l.category).reduce((h,f)=>h+f.amount,0);return{category:l.category,budget:l.amount,spent:d,remaining:l.amount-d,percentage:l.amount>0?Math.min(d/l.amount*100,100):0,exceeded:d>l.amount}});return{monthlyProgress:o,categoryProgress:c,totalSpent:s}}function eC(n,t,e){const i=[],{monthlyProgress:s,categoryProgress:r}=ab(n,t,e);return s&&(s.exceeded?i.push({type:"danger",icon:"🚨",title:"Budget Exceeded",message:`You exceeded your monthly budget by ₹${Math.abs(s.remaining).toLocaleString("en-IN")}.`}):s.percentage>=80&&i.push({type:"warning",icon:"⚠️",title:"Budget Alert",message:`You have used ${s.percentage.toFixed(0)}% of your monthly budget.`})),r.forEach(o=>{o.exceeded&&i.push({type:"danger",icon:"🚨",title:"Category Budget Exceeded",message:`You exceeded your ${o.category} budget by ₹${Math.abs(o.remaining).toLocaleString("en-IN")}.`})}),i}async function nC(n,t,e){await ob(n,{category:"monthly",amount:Number(t),month:e})}async function iC(n,t,e,i){await ob(n,{category:t,amount:Number(e),month:i})}async function sh(n){return await qk(n)}async function sC(n,t){await Wk(n,t)}let Ce=null,Pn=!1;function rC(){oC(),aC(),cC(),uC()}function oC(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})})}function aC(){window.matchMedia("(display-mode: standalone)").matches&&(Pn=!0),window.navigator.standalone===!0&&(Pn=!0),window.addEventListener("appinstalled",()=>{Pn=!0,Ce=null,Iu()})}function cC(){window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Ce=n,!localStorage.getItem("mc_install_dismissed")&&!Pn&&setTimeout(()=>lC(),3e3)})}function lC(){if(Pn||!Ce)return;const n=document.getElementById("pwa-install-banner");n&&(n.innerHTML=`
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
  `,n.classList.add("show"),document.getElementById("pwa-install-accept").onclick=async()=>{Ce&&(Ce.prompt(),(await Ce.userChoice).outcome==="accepted"&&(Pn=!0),Ce=null),Iu()},document.getElementById("pwa-install-dismiss").onclick=()=>{localStorage.setItem("mc_install_dismissed","true"),Iu()})}function Iu(){const n=document.getElementById("pwa-install-banner");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function uC(){const n=()=>{const t=document.getElementById("offline-banner");t&&(navigator.onLine?(t.classList.remove("show"),setTimeout(()=>{t.innerHTML=""},300)):(t.innerHTML=`
        <div class="offline-content">
          <span class="offline-icon">📡</span>
          <span class="offline-text">You're offline — Reconnect to save new transactions securely.</span>
        </div>
      `,t.classList.add("show")))};window.addEventListener("online",n),window.addEventListener("offline",n),setTimeout(n,1e3)}function cb(){return navigator.onLine}function dC(){return Pn}function hC(){return!!Ce&&!Pn}async function fC(){if(!Ce)return!1;Ce.prompt();const n=await Ce.userChoice;return n.outcome==="accepted"&&(Pn=!0),Ce=null,n.outcome==="accepted"}const kt=4;async function lb(n){const e=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function pC(n,t){await gi(Jt(gt,"users",n),{pinHash:t,pinEnabled:!0,pinSetupPromptShown:!0})}async function nc(n){const t=await K_(Jt(gt,"users",n));if(t.exists()){const e=t.data();return{pinHash:e.pinHash||null,pinEnabled:e.pinEnabled||!1,pinSetupPromptShown:e.pinSetupPromptShown||!1,autoLockTimeout:e.autoLockTimeout!==void 0?e.autoLockTimeout:5,pinLength:kt}}return{pinHash:null,pinEnabled:!1,pinSetupPromptShown:!1,autoLockTimeout:5,pinLength:kt}}async function ub(n,t){return await lb(n)===t}async function db(n){await gi(Jt(gt,"users",n),{pinHash:null,pinEnabled:!1})}async function gC(n,t){await gi(Jt(gt,"users",n),{autoLockTimeout:t})}async function mC(n){await gi(Jt(gt,"users",n),{pinSetupPromptShown:!0})}const yC="modulepreload",vC=function(n){return"/"+n},fg={},pg=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let o=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(e.map(l=>{if(l=vC(l),l in fg)return;fg[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":yC,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((g,y)=>{f.addEventListener("load",g),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};let _C=0;function Yo(n,t="info",e=4e3){const i=document.getElementById("toast-container");if(!i)return;const s=`toast-${++_C}`,r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"Success",error:"Error",warning:"Warning",info:"Info"},a=document.createElement("div");a.id=s,a.className=`toast toast-${t}`,a.innerHTML=`
    <div class="toast-icon">${r[t]||r.info}</div>
    <div class="toast-content">
      <div class="toast-title">${o[t]||o.info}</div>
      <div class="toast-message">${n}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${e}ms linear;"></div>
  `,i.appendChild(a),requestAnimationFrame(()=>{const d=a.querySelector(".toast-progress");d&&(d.style.width="0%")});const c=setTimeout(()=>{gg(a)},e);a.querySelector(".toast-close").addEventListener("click",()=>{clearTimeout(c)});const l=i.querySelectorAll(".toast");l.length>4&&gg(l[0])}function gg(n){!n||!n.parentNode||(n.classList.add("removing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}const q={success:(n,t)=>Yo(n,"success",t),error:(n,t)=>Yo(n,"error",t),warning:(n,t)=>Yo(n,"warning",t),info:(n,t)=>Yo(n,"info",t)};let C={mode:"lock",pin:"",confirmPin:"",currentPinInput:"",step:"enter",pinLength:kt,failedAttempts:0,isProcessing:!1,uid:null,storedHash:null,onUnlock:null,onSetupComplete:null},mg=!1;function bC(n,t){C.mode="setup-prompt",C.uid=n,C.onSetupComplete=t,Ae()}function wC(n,t){C.mode="create",C.uid=n,C.pin="",C.confirmPin="",C.currentPinInput="",C.step="enter",C.pinLength=kt,C.onSetupComplete=t,Ae()}function EC(n,t,e){C.mode="change",C.uid=n,C.storedHash=t,C.currentPinInput="",C.pin="",C.confirmPin="",C.step=t?"current":"enter",C.pinLength=kt,C.onSetupComplete=e,Ae()}function hb(n,t,e){C.mode="lock",C.uid=n,C.storedHash=t,C.pin="",C.failedAttempts=0,C.isProcessing=!1,C.onUnlock=e,Ae()}function Oi(){const n=document.getElementById("pin-lock-root");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function Ae(){const n=document.getElementById("pin-lock-root");if(!n)return;let t="";switch(C.mode){case"setup-prompt":t=TC();break;case"create":case"change":t=AC();break;case"lock":t=SC();break;case"forgot":t=xC();break}n.innerHTML=`<div class="pin-overlay">${t}</div>`,n.classList.add("show"),PC(),IC()}function IC(){mg||(mg=!0,window.addEventListener("keydown",n=>{const t=document.getElementById("pin-lock-root");if(!(!t||!t.classList.contains("show"))&&!(n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA")){if(n.key>="0"&&n.key<="9"){if(C.isProcessing)return;pb(n.key)}else if(n.key==="Backspace"){if(C.isProcessing)return;gb()}else if(n.key==="Enter"){if(C.isProcessing)return;C.mode==="lock"&&mb()}}}))}function TC(){return`
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
  `}function AC(){let n="Create Your PIN",t="Choose a 4-digit PIN to protect your data.",e=C.pin;return C.mode==="change"?C.step==="current"?(n="Current PIN",t="Enter your current 4-digit PIN.",e=C.currentPinInput):C.step==="enter"?(n="New PIN",t="Enter your new 4-digit PIN.",e=C.pin):C.step==="confirm"&&(n="Confirm New PIN",t="Confirm your new 4-digit PIN.",e=C.confirmPin):C.step==="confirm"?(n="Confirm Your PIN",t="Enter your 4-digit PIN again to confirm.",e=C.confirmPin):(n="Enter Your PIN",t="Enter a 4-digit PIN to protect your data.",e=C.pin),`
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

      ${fb()}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-create-back">
          ← Back
        </button>
      </div>
    </div>
  `}function SC(){return`
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

      ${fb()}

      <button class="pin-btn pin-btn-primary pin-unlock-btn" id="pin-unlock-btn">
        🔓 Unlock
      </button>

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-btn">
          Forgot PIN?
        </button>
      </div>
    </div>
  `}function xC(){return`
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
  `}function rh(n,t=kt){let e="";for(let i=0;i<t;i++){const s=i<n.length;e+=`<span class="pin-dot ${s?"filled":""}">${s?"●":"○"}</span>`}return e}function fb(){return`
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
  `}function Ne(){const n=document.getElementById("pin-dots");if(!n)return;let t="";C.mode==="create"?t=C.step==="confirm"?C.confirmPin:C.pin:C.mode==="change"?C.step==="current"?t=C.currentPinInput:C.step==="confirm"?t=C.confirmPin:t=C.pin:C.mode==="lock"&&(t=C.pin),n.innerHTML=rh(t,kt)}function PC(){const n=document.getElementById("pin-setup-set");n&&(n.onclick=()=>{C.mode="create",C.pin="",C.confirmPin="",C.step="enter",Ae()});const t=document.getElementById("pin-setup-skip");t&&(t.onclick=async()=>{C.uid&&await mC(C.uid),Oi(),C.onSetupComplete&&C.onSetupComplete()}),document.querySelectorAll(".pin-key[data-key]").forEach(a=>{a.onclick=()=>{if(C.isProcessing)return;const c=a.dataset.key;a.classList.add("pressed"),setTimeout(()=>a.classList.remove("pressed"),150),c==="delete"?gb():pb(c)}});const e=document.getElementById("pin-create-back");e&&(e.onclick=()=>{C.mode==="change"?C.step==="confirm"?(C.step="enter",C.confirmPin="",Ae()):C.step==="enter"&&C.storedHash?(C.step="current",C.pin="",Ae()):Oi():C.step==="confirm"?(C.step="enter",C.confirmPin="",Ae()):Oi()});const i=document.getElementById("pin-unlock-btn");i&&(i.onclick=()=>mb());const s=document.getElementById("pin-forgot-btn");s&&(s.onclick=()=>{C.mode="forgot",Ae()});const r=document.getElementById("pin-forgot-verify");r&&(r.onclick=()=>CC());const o=document.getElementById("pin-forgot-back");o&&(o.onclick=()=>{C.mode="lock",C.pin="",Ae()})}function pb(n){const t=document.getElementById("pin-create-error");t&&(t.textContent=""),C.mode==="create"?C.step==="confirm"?C.confirmPin.length<kt&&(C.confirmPin+=n,Ne(),C.confirmPin.length===kt&&yg()):C.pin.length<kt&&(C.pin+=n,Ne(),C.pin.length===kt&&setTimeout(()=>{C.step="confirm",Ae()},200)):C.mode==="change"?C.step==="current"?C.currentPinInput.length<kt&&(C.currentPinInput+=n,Ne(),C.currentPinInput.length===kt&&kC()):C.step==="confirm"?C.confirmPin.length<kt&&(C.confirmPin+=n,Ne(),C.confirmPin.length===kt&&yg()):C.pin.length<kt&&(C.pin+=n,Ne(),C.pin.length===kt&&setTimeout(()=>{C.step="confirm",Ae()},200)):C.mode==="lock"&&C.pin.length<kt&&(C.pin+=n,Ne())}function gb(){C.mode==="create"?C.step==="confirm"?C.confirmPin=C.confirmPin.slice(0,-1):C.pin=C.pin.slice(0,-1):C.mode==="change"?C.step==="current"?C.currentPinInput=C.currentPinInput.slice(0,-1):C.step==="confirm"?C.confirmPin=C.confirmPin.slice(0,-1):C.pin=C.pin.slice(0,-1):C.mode==="lock"&&(C.pin=C.pin.slice(0,-1)),Ne()}async function kC(){const n=document.getElementById("pin-create-error");if(C.currentPinInput.length!==kt){n&&(n.textContent="Enter your 4-digit PIN.");return}C.isProcessing=!0;try{if(await ub(C.currentPinInput,C.storedHash))C.isProcessing=!1,C.step="enter",C.pin="",C.confirmPin="",Ae();else{C.isProcessing=!1,n&&(n.textContent="Incorrect PIN. Try again."),C.currentPinInput="",Ne();const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500))}}catch{C.isProcessing=!1,n&&(n.textContent="Verification failed. Try again.")}}async function yg(){const n=document.getElementById("pin-create-error");if(C.pin!==C.confirmPin){n&&(n.textContent="PINs do not match. Please try again."),C.confirmPin="",Ne();const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}C.isProcessing=!0;try{const t=await lb(C.pin);await pC(C.uid,t),q.success(C.mode==="change"?"🔐 PIN updated successfully!":"🔐 PIN created successfully!"),Oi(),C.pin="",C.confirmPin="",C.currentPinInput="",C.isProcessing=!1,C.onSetupComplete&&C.onSetupComplete()}catch{n&&(n.textContent="Failed to save PIN. Please try again."),C.isProcessing=!1}}async function mb(){if(C.isProcessing)return;const n=document.getElementById("pin-lock-error");if(C.pin.length!==kt){n&&(n.textContent="Enter your 4-digit PIN.");const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}if(C.isProcessing=!0,C.failedAttempts>=3){const t=Math.min(Math.pow(2,C.failedAttempts-2)*1e3,3e4),e=document.getElementById("pin-unlock-btn");e&&(e.disabled=!0,e.textContent=`Wait ${Math.ceil(t/1e3)}s...`),await new Promise(i=>setTimeout(i,t)),e&&(e.disabled=!1,e.textContent="🔓 Unlock")}try{if(await ub(C.pin,C.storedHash))q.success("Unlocked successfully."),Oi(),C.pin="",C.failedAttempts=0,C.isProcessing=!1,C.onUnlock&&C.onUnlock();else{C.failedAttempts++,C.pin="",Ne(),n&&(n.textContent="Incorrect PIN. Try again.");const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500)),C.isProcessing=!1}}catch{n&&(n.textContent="Verification failed. Try again."),C.pin="",Ne(),C.isProcessing=!1}}async function CC(){const n=document.getElementById("pin-forgot-password"),t=document.getElementById("pin-forgot-error");if(!n)return;const e=n.value;if(!e){t&&(t.textContent="Please enter your password.");return}const i=document.getElementById("pin-forgot-verify");i&&(i.disabled=!0,i.innerHTML='<span class="spinner"></span> Verifying...');try{const{EmailAuthProvider:s,reauthenticateWithCredential:r}=await pg(async()=>{const{EmailAuthProvider:l,reauthenticateWithCredential:d}=await Promise.resolve().then(()=>SS);return{EmailAuthProvider:l,reauthenticateWithCredential:d}},void 0),{auth:o}=await pg(async()=>{const{auth:l}=await Promise.resolve().then(()=>Lk);return{auth:l}},void 0),a=o.currentUser;if(!a||!a.email){t&&(t.textContent="No authenticated user found."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN");return}const c=s.credential(a.email,e);await r(a,c),await db(C.uid),q.success("🔐 PIN removed. You can set a new PIN in Settings."),Oi(),C.onUnlock&&C.onUnlock()}catch{t&&(t.textContent="Incorrect password. Please try again."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN")}}function yo(n){if(n===""||n===null||n===void 0)return"Please enter an amount.";const t=Number(n);return isNaN(t)?"Please enter a valid number.":t<=0?"Amount must be greater than ₹0.":t>99999999?"Amount is too large.":null}function oh(n){return!n||!n.trim()?"Please enter your email.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())?null:"Please enter a valid email address."}function ah(n){return n?n.length<6?"Password must be at least 6 characters.":null:"Please enter a password."}function yb(n,t){return t?n!==t?"Passwords do not match.":null:"Please confirm your password."}function vb(n,t){return!n||!String(n).trim()?`Please enter ${t}.`:null}function Uc(n){return!n||!n.trim()?"Please enter your name.":n.trim().length<2?"Name must be at least 2 characters.":n.trim().length>50?"Name must be less than 50 characters.":null}function RC(n){if(!n)return"Please select a date.";const t=new Date(n);return isNaN(t.getTime())?"Please enter a valid date.":null}function ch(n){if(!n)return"Date is required.";const t=new Date(n);if(isNaN(t.getTime()))return"Please enter a valid date.";const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n!==i?"⚠️ Invalid transaction date. New transactions can only be created for today.":null}function DC(n){return n?null:"Please select a category."}function _b(n,t=!0){const e={},i=yo(n.amount);if(i&&(e.amount=i),t){const o=ch(n.date);o&&(e.date=o)}else{const o=RC(n.date);o&&(e.date=o)}const s=vb(n.reason,"a reason");s&&(e.reason=s);const r=DC(n.category);return r&&(e.category=r),{isValid:Object.keys(e).length===0,errors:e}}function MC(n,t){const e={},i=oh(n);i&&(e.email=i);const s=ah(t);return s&&(e.password=s),{isValid:Object.keys(e).length===0,errors:e}}function OC(n,t,e,i){const s={},r=Uc(n);r&&(s.name=r);const o=oh(t);o&&(s.email=o);const a=ah(e);a&&(s.password=a);const c=yb(e,i);return c&&(s.confirmPassword=c),{isValid:Object.keys(s).length===0,errors:s}}let wa="login";function NC(){return`
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 72px; height: 72px; border-radius: 18px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.3);" />
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${bb()}
        </div>
      </div>
    </div>
  `}function bb(){if(wa==="login")return`
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
    `;if(wa==="register")return`
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
    `;if(wa==="forgot")return`
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
    `}function wb(n){const t=document.getElementById("auth-card-body");if(!t)return;const e=f=>{wa=f,t.innerHTML=bb(),wb(n)},i=document.getElementById("link-register");i&&(i.onclick=()=>e("register"));const s=document.getElementById("link-login");s&&(s.onclick=()=>e("login"));const r=document.getElementById("link-login-back");r&&(r.onclick=()=>e("login"));const o=document.getElementById("link-forgot");o&&(o.onclick=()=>e("forgot"));const a=document.getElementById("toggle-login-password");a&&(a.onclick=()=>{const f=document.getElementById("login-password");f&&(f.type=f.type==="password"?"text":"password")});const c=document.getElementById("toggle-reg-password");c&&(c.onclick=()=>{const f=document.getElementById("reg-password");f&&(f.type=f.type==="password"?"text":"password")});const l=document.getElementById("login-form");l&&(l.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("login-email").value,y=document.getElementById("login-password").value;document.getElementById("login-email-error").textContent="",document.getElementById("login-password-error").textContent="";const _=MC(g,y);if(!_.isValid){_.errors.email&&(document.getElementById("login-email-error").textContent=_.errors.email),_.errors.password&&(document.getElementById("login-password-error").textContent=_.errors.password);return}const v=document.getElementById("btn-login-submit");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Logging in...';try{await Kk(g,y),q.success("Logged in successfully!"),n&&n()}catch(I){q.error(Ol(I))}finally{const I=document.getElementById("btn-login-submit");I&&(I.disabled=!1,I.innerHTML='<span class="btn-text">Log In</span>')}});const d=document.getElementById("register-form");d&&(d.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("reg-name").value,y=document.getElementById("reg-email").value,_=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value;document.getElementById("reg-name-error").textContent="",document.getElementById("reg-email-error").textContent="",document.getElementById("reg-password-error").textContent="",document.getElementById("reg-confirm-error").textContent="";const I=OC(g,y,_,v);if(!I.isValid){I.errors.name&&(document.getElementById("reg-name-error").textContent=I.errors.name),I.errors.email&&(document.getElementById("reg-email-error").textContent=I.errors.email),I.errors.password&&(document.getElementById("reg-password-error").textContent=I.errors.password),I.errors.confirmPassword&&(document.getElementById("reg-confirm-error").textContent=I.errors.confirmPassword);return}const k=document.getElementById("btn-register-submit");k.disabled=!0,k.innerHTML='<span class="spinner"></span> Creating Account...';try{await Gk(g,y,_),q.success("Account created successfully!"),n&&n()}catch(D){q.error(Ol(D))}finally{const D=document.getElementById("btn-register-submit");D&&(D.disabled=!1,D.innerHTML='<span class="btn-text">Create Account</span>')}});const h=document.getElementById("forgot-form");h&&(h.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("forgot-email").value;document.getElementById("forgot-email-error").textContent="";const y=oh(g);if(y){document.getElementById("forgot-email-error").textContent=y;return}const _=document.getElementById("btn-forgot-submit");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Sending...';try{await Yk(g),q.success("Password reset email sent! Check your inbox."),e("login")}catch(v){q.error(Ol(v)),_.disabled=!1,_.innerHTML='<span class="btn-text">Send Reset Link</span>'}})}function LC(){return`
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
  `}function VC(n,t){const e=document.getElementById("onboarding-form");e&&(e.onsubmit=async i=>{i.preventDefault();const s=document.getElementById("initial-balance"),r=document.getElementById("onboarding-error");r.textContent="";const o=s.value,a=yo(o);if(a){r.textContent=a;return}const c=document.getElementById("btn-start-tracking");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Saving...';try{await tb(n,Number(o)),q.success("Initial balance saved!"),t&&t()}catch(l){console.error("Error setting initial balance:",l),q.error("Unable to save initial balance. Please try again."),c.disabled=!1,c.innerHTML="Start Money Tracking"}})}function W(n){return n==null||isNaN(n)?"₹0":`₹${Number(n).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:0})}`}function vo(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function FC(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):""}function BC(n){return n?new Date(n).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit",hour12:!0}):""}function UC(){const n=new Date().getHours();return n<12?"Good Morning":n<17?"Good Afternoon":"Good Evening"}function Fs(){const n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${i}`}function Eb(){return`📅 Today — ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`}function $C(){return new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Ib(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function Tb(n){const t=new Date(n+"T00:00:00"),e=t.getDay(),i=new Date(t);i.setDate(t.getDate()-e);const s=new Date(i);return s.setDate(i.getDate()+6),{start:i.toISOString().split("T")[0],end:s.toISOString().split("T")[0]}}function Xo(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}const _o=[{value:"Food",label:"🍔 Food",emoji:"🍔"},{value:"Travel",label:"🚌 Travel",emoji:"🚌"},{value:"Recharge",label:"📱 Recharge",emoji:"📱"},{value:"Shopping",label:"🛍️ Shopping",emoji:"🛍️"},{value:"Entertainment",label:"🎮 Entertainment",emoji:"🎮"},{value:"Education",label:"📚 Education",emoji:"📚"},{value:"Software",label:"💻 Software",emoji:"💻"},{value:"Personal",label:"🏠 Personal",emoji:"🏠"},{value:"Other",label:"💊 Other",emoji:"💊"}],lh=[{value:"Pocket Money",label:"Pocket Money"},{value:"Salary",label:"Salary"},{value:"Gift",label:"Gift"},{value:"Freelance",label:"Freelance"},{value:"Refund",label:"Refund"},{value:"Other",label:"Other"}];function uh(n){const t=_o.find(e=>e.value===n);return t?t.emoji:"💰"}const zC=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];function Ab(n,t){const e=Number(n.initialBalance)||0,i=n.id;let s=e;return t.forEach(r=>{const o=Number(r.amount)||0;r.type==="INCOME"?r.destinationAccountId===i&&(s+=o):r.type==="EXPENSE"?r.sourceAccountId===i&&(s-=o):r.type==="TRANSFER"&&(r.destinationAccountId===i&&(s+=o),r.sourceAccountId===i&&(s-=o))}),s}function On(n,t){const e={};let i=0;return n.forEach(s=>{const r=Ab(s,t);e[s.id]=r,i+=r}),{balances:e,totalMoney:i}}function jC(n,t){const e=n.id,i=t.filter(l=>l.sourceAccountId===e||l.destinationAccountId===e);let s=0,r=0,o=0,a=0;i.forEach(l=>{const d=Number(l.amount)||0;l.type==="INCOME"&&l.destinationAccountId===e?s+=d:l.type==="EXPENSE"&&l.sourceAccountId===e?r+=d:l.type==="TRANSFER"&&(l.sourceAccountId===e&&(o+=d),l.destinationAccountId===e&&(a+=d))});const c=Ab(n,t);return{account:n,balance:c,totalAdded:s,totalSpent:r,totalTransferredOut:o,totalTransferredIn:a,transactions:i}}function HC(n){return n.filter(t=>t.type==="INCOME").reduce((t,e)=>t+Number(e.amount),0)}function qC(n){return n.filter(t=>t.type==="EXPENSE").reduce((t,e)=>t+Number(e.amount),0)}function WC(n){return n.filter(t=>t.type==="TRANSFER").reduce((t,e)=>t+Number(e.amount),0)}function GC(n,t){const{balances:e,totalMoney:i}=On(n,t),s=HC(t),r=qC(t),o=WC(t);return{balances:e,totalMoney:i,totalIncome:s,totalExpenses:r,totalTransfers:o}}function dh(n,t){const e=n.filter(o=>o.date===t),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function KC(n,t){const{start:e,end:i}=Tb(t),s=n.filter(c=>c.date>=e&&c.date<=i),r=s.filter(c=>c.type==="INCOME").reduce((c,l)=>c+l.amount,0),o=s.filter(c=>c.type==="EXPENSE").reduce((c,l)=>c+l.amount,0),a=s.filter(c=>c.type==="TRANSFER").reduce((c,l)=>c+l.amount,0);return{added:r,spent:o,transferred:a,net:r-o,count:s.length,transactions:s,startDate:e,endDate:i}}function Sb(n,t){const e=n.filter(o=>o.date&&o.date.startsWith(t)),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function xb(n,t){const e=t?n.filter(o=>o.type==="EXPENSE"&&o.date&&o.date.startsWith(t)):n.filter(o=>o.type==="EXPENSE"),i={};let s=0;return e.forEach(o=>{const a=o.category||"Other";i[a]=(i[a]||0)+o.amount,s+=o.amount}),{categories:Object.entries(i).map(([o,a])=>({category:o,amount:a,percentage:s>0?a/s*100:0,emoji:uh(o)})).sort((o,a)=>a.amount-o.amount),totalExpenses:s}}function Pb(n,t){const{balances:e,totalMoney:i}=On(n,t);return n.map(s=>{const r=e[s.id]||0,o=i>0?Math.max(0,r)/i*100:0;return{account:s,balance:r,percentage:o}}).sort((s,r)=>r.balance-s.balance)}function kb(n,t){const{added:e,spent:i,transferred:s,net:r,count:o,transactions:a}=Sb(n,t),{categories:c}=xb(n,t),l=c.length>0?c[0]:null,d=a.filter(f=>f.type==="EXPENSE"),h=d.length>0?d.reduce((f,g)=>g.amount>f.amount?g:f,d[0]):null;return{income:e,expenses:i,transfers:s,savings:r,transactionCount:o,categories:c,highestCategory:l,highestExpense:h}}function YC(n,t){const e=[],i=Fs(),{balances:s}=On(n,t),r=dh(t,i);if(r.spent>0&&e.push({icon:"📅",text:`You spent <strong>${W(r.spent)}</strong> today.`}),n.length>0){const c=n.reduce((d,h)=>(s[h.id]||0)>(s[d.id]||0)?h:d,n[0]),l=s[c.id]||0;l>0&&e.push({icon:c.icon||"🏦",text:`Your <strong>${c.name}</strong> account has your highest balance (${W(l)}).`})}const o=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{categories:a}=xb(t,o);if(a.length>0){const c=a[0];e.push({icon:c.emoji,text:`<strong>${c.category}</strong> accounts for <strong>${c.percentage.toFixed(0)}%</strong> of your expenses this month.`})}return n.forEach(c=>{const l=s[c.id]||0;l>=0&&l<500&&e.push({icon:"⚠️",text:`Your <strong>${c.name}</strong> balance is low (${W(l)}).`})}),e.slice(0,5)}function XC(n,t={}){const{showActions:e=!1,showDate:i=!0,showNotes:s=!1,accounts:r=[]}=t,o=n.type==="INCOME",a=n.type==="EXPENSE",c=n.type==="TRANSFER",l=o?"income":a?"expense":"balance",d=y=>{const _=r.find(v=>v.id===y);return _?_.name:""};let h="💰",f="",g="";if(o){h="💰",g="+";const y=d(n.destinationAccountId);f=y?`→ ${y}`:""}else if(a){h=uh(n.category),g="-";const y=d(n.sourceAccountId);f=y?`← ${y}`:""}else if(c){h="🔄",g="↔ ";const y=d(n.sourceAccountId)||"Source",_=d(n.destinationAccountId)||"Dest";f=`${y} → ${_}`}return`
    <div class="transaction-item animate-fade-in" data-tx-id="${n.id}">
      <div class="transaction-icon ${l}">
        ${h}
      </div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${Xo(n.reason)||(c?"Account Transfer":"No reason")}
        </div>
        <div class="transaction-meta">
          <span class="transaction-category" style="font-weight: 600; color: ${c?"var(--primary)":"var(--text-secondary)"};">
            ${c?"🔄 Transfer":Xo(n.category)||""}
          </span>
          ${f?`
            <span class="transaction-dot"></span>
            <span style="font-weight: 500; color: var(--text-primary);">${Xo(f)}</span>
          `:""}
          ${i?`
            <span class="transaction-dot"></span>
            <span>${vo(n.date)}</span>
          `:""}
          ${n.createdAt?`
            <span class="transaction-dot"></span>
            <span>${BC(n.createdAt)}</span>
          `:""}
        </div>
        ${s&&n.notes?`
          <div class="transaction-meta" style="margin-top: 4px; font-style: italic;">
            ${Xo(n.notes)}
          </div>
        `:""}
      </div>
      <div class="transaction-amount">
        <div class="transaction-amount-value ${l}" style="${c?"color: var(--primary);":""}">
          ${g}${W(n.amount)}
        </div>
      </div>
      ${e?`
        <div class="transaction-actions">
          <button class="transaction-action-btn edit" data-action="edit" data-tx-id="${n.id}" title="Edit">✏️</button>
          <button class="transaction-action-btn delete" data-action="delete" data-tx-id="${n.id}" title="Delete">🗑️</button>
        </div>
      `:""}
    </div>
  `}function fs(n,t={}){return!n||n.length===0?"":n.map(e=>XC(e,t)).join("")}function Cb(){return`
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">No transactions yet</h3>
      <p class="empty-state-text">Start tracking your money by adding your first transaction.</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `}function QC(){return`
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
  `}function JC(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `}let Ea=null;function Ee(n){$t();const t=document.getElementById("modal-root");if(!t)return;const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`
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
  `,t.appendChild(e),document.body.classList.add("no-scroll"),Ea={element:e,onClose:n.onClose};const i=e.querySelector("#modal-close-btn");i&&i.addEventListener("click",$t),e.addEventListener("click",r=>{r.target===e&&$t()});const s=r=>{r.key==="Escape"&&($t(),document.removeEventListener("keydown",s))};return document.addEventListener("keydown",s),n.onOpen&&requestAnimationFrame(()=>n.onOpen(e)),e}function $t(){if(!Ea)return;const{element:n,onClose:t}=Ea;n.classList.add("closing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),document.body.classList.remove("no-scroll"),t&&t()},200),Ea=null}function zi(n){return new Promise(t=>{const e=`
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
    `;Ee({content:e,hideHeader:!0,onOpen:i=>{i.querySelector("#confirm-cancel").addEventListener("click",()=>{$t(),t(!1)}),i.querySelector("#confirm-ok").addEventListener("click",()=>{$t(),t(!0)})},onClose:()=>t(!1)})})}let Ct={user:null,profile:null,accounts:[],transactions:[],budgets:[]};function vg(n){Ct={...Ct,...n};const{profile:t,accounts:e,transactions:i}=Ct;if(Ct.dashboardError)return`
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
    `;const s=t!=null&&t.name?t.name.split(" ")[0]:"User",{balances:r,totalMoney:o,totalIncome:a,totalExpenses:c,totalTransfers:l}=GC(e,i),d=Fs(),h=dh(i,d),f=i.slice(0,5),g=YC(e,i),y=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,_=eC(Ct.budgets,i,y);return`
    <div class="page animate-fade-in">
      <!-- Greeting -->
      <div class="greeting">
        <h1 class="greeting-text">${UC()}, ${s} 👋</h1>
        <p class="greeting-date">${$C()}</p>
      </div>

      <!-- Budget Alert Banner if any -->
      ${_.length>0?`
        <div style="margin-bottom: var(--space-6);">
          ${_.map(v=>`
            <div class="alert-banner alert-banner-${v.type}">
              <span class="alert-banner-icon">${v.icon}</span>
              <div class="alert-banner-text">
                <strong>${v.title}:</strong> ${v.message}
              </div>
            </div>
          `).join("")}
        </div>
      `:""}

      <!-- Main Balance Card: Total Money -->
      <div class="balance-card">
        <div class="balance-label">Total Money Across All Accounts</div>
        <div class="balance-amount">${W(o)}</div>
        <div class="balance-subtitle">Available funds in Cash, Banks & Wallets</div>
      </div>

      <!-- Account Breakdown Pills or Empty State -->
      ${e.length>0?`
        <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
            <div style="font-weight: var(--fw-semibold); font-size: var(--fs-sm); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.03em;">
              Account Breakdown
            </div>
            <span class="section-link" id="link-manage-accounts">Manage Accounts →</span>
          </div>
          <div style="display: flex; gap: var(--space-3); overflow-x: auto; padding-bottom: 4px;">
            ${e.map(v=>{const I=r[v.id]||0;return`
                <div style="background: var(--bg-tertiary); padding: 8px 14px; border-radius: var(--radius-lg); flex-shrink: 0; min-width: 120px;">
                  <div style="font-size: var(--fs-xs); color: var(--text-secondary);">${v.icon||"🏦"} ${v.name}</div>
                  <div style="font-weight: var(--fw-bold); font-size: var(--fs-base); margin-top: 2px;">${W(I)}</div>
                </div>
              `}).join("")}
          </div>
        </div>
      `:`
        <div class="card card-flat" style="margin-bottom: var(--space-6); padding: 24px; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🏦</div>
          <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 4px;">No accounts yet</h3>
          <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 16px;">Add your first account to start tracking your money.</p>
          <button class="btn btn-primary btn-sm" id="empty-add-account-btn" style="margin: 0 auto; display: inline-flex;">➕ Add Account</button>
        </div>
      `}

      <!-- Today's Money Activity -->
      <div class="today-activity-card">
        <div class="today-activity-header">
          <div class="today-activity-title">Today's Money Activity</div>
          <div class="today-activity-date">${vo(d)}</div>
        </div>
        <div class="today-activity-grid">
          <div class="today-activity-item">
            <span class="today-activity-icon">🟢</span>
            <span class="today-activity-label">Added</span>
            <span class="today-activity-amount income">${W(h.added)}</span>
          </div>
          <div class="today-activity-item">
            <span class="today-activity-icon">🔴</span>
            <span class="today-activity-label">Spent</span>
            <span class="today-activity-amount expense">${W(h.spent)}</span>
          </div>
          <div class="today-activity-item">
            <span class="today-activity-icon">🔄</span>
            <span class="today-activity-label">Transferred</span>
            <span class="today-activity-amount transfer">${W(h.transferred)}</span>
          </div>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="summary-grid" style="grid-template-columns: repeat(4, 1fr);">
        <div class="summary-card">
          <div class="summary-card-icon income">📥</div>
          <div class="summary-card-amount" style="color: var(--income);">${W(a)}</div>
          <div class="summary-card-label">Money Added</div>
        </div>

        <div class="summary-card">
          <div class="summary-card-icon expense">📤</div>
          <div class="summary-card-amount" style="color: var(--expense);">${W(c)}</div>
          <div class="summary-card-label">Money Spent</div>
        </div>

        <div class="summary-card">
          <div class="summary-card-icon balance" style="background: var(--primary-bg); color: var(--primary);">🔄</div>
          <div class="summary-card-amount" style="color: var(--primary);">${W(l)}</div>
          <div class="summary-card-label">Transferred</div>
        </div>

        <div class="summary-card">
          <div class="summary-card-icon balance">💰</div>
          <div class="summary-card-amount">${W(o)}</div>
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
          ${f.length>0?fs(f,{showActions:!0,showDate:!0,accounts:Ct.accounts}):Cb()}
        </div>
      </div>

      <!-- Smart Insights -->
      ${g.length>0?`
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">Money Control Insights 💡</h2>
          </div>
          <div class="insights-card">
            ${g.map(v=>`
              <div class="insight-item">
                <span class="insight-icon">${v.icon}</span>
                <div class="insight-text">${v.text}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}
    </div>
  `}function _g(n,t){const e=document.getElementById("btn-retry-dashboard");e&&(e.onclick=()=>{e.disabled=!0,e.innerHTML='<span class="spinner"></span> Loading...',t&&t()});const i=document.getElementById("empty-add-account-btn");i&&(i.onclick=()=>n("accounts")),document.querySelectorAll(".quick-nav-btn[data-page]").forEach(d=>{d.onclick=()=>n(d.dataset.page)});const s=document.getElementById("link-manage-accounts");s&&(s.onclick=()=>n("accounts"));const r=document.getElementById("link-view-all-tx");r&&(r.onclick=()=>n("transactions"));const o=document.getElementById("btn-quick-add-money");o&&(o.onclick=()=>Ni("INCOME",t));const a=document.getElementById("btn-quick-add-expense");a&&(a.onclick=()=>Ni("EXPENSE",t));const c=document.getElementById("btn-quick-transfer");c&&(c.onclick=()=>hh(t));const l=document.getElementById("empty-add-money-btn");l&&(l.onclick=()=>Ni("INCOME",t)),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(d=>{d.onclick=h=>{h.stopPropagation();const f=d.dataset.action,g=d.dataset.txId,y=Ct.transactions.find(_=>_.id===g);y&&(f==="edit"?y.type==="TRANSFER"?ph(y,t):fh(y,t):f==="delete"&&gh(y,t))}})}function Ni(n="INCOME",t){const e=n==="INCOME",i=e?lh:_o,s=Ct.accounts,r=Fs(),o=Eb();if(!cb()){q.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const a=`
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
  `;Ee({title:e?"💰 Add Money":"💸 Add Expense",content:a,onOpen:c=>{const l=c.querySelector("#tx-modal-form"),d=c.querySelector("#tx-amount"),h=c.querySelector("#tx-account"),f=c.querySelector("#tx-insufficient-warning"),g=c.querySelector("#tx-insufficient-text"),y=()=>{var N,F;if(e)return;const _=h.value,v=Number(d.value)||0;if(!_||v<=0){f.style.display="none";return}const I=s.find(T=>T.id===_),{balances:k}=On(s,Ct.transactions),D=k[_]||0,M=(F=(N=Ct.profile)==null?void 0:N.settings)==null?void 0:F.allowNegativeBalance;v>D&&!M?(g.textContent=`⚠️ Insufficient Balance! Available in ${(I==null?void 0:I.name)||"account"}: ${W(D)}`,f.style.display="flex"):f.style.display="none"};d.oninput=y,h.onchange=y,l.onsubmit=async _=>{var S,x;_.preventDefault();const v=d.value,I=h.value,k=c.querySelector("#tx-date").value,D=c.querySelector("#tx-reason").value,M=c.querySelector("#tx-category").value,N=c.querySelector("#tx-notes").value;c.querySelector("#tx-amount-error").textContent="",c.querySelector("#tx-account-error").textContent="",c.querySelector("#tx-reason-error").textContent="",c.querySelector("#tx-category-error").textContent="";const F=ch(k);if(F){q.error(F);return}let T=!0;const b=_b({amount:v,date:k,reason:D,category:M},!0);if(b.isValid||(b.errors.amount&&(c.querySelector("#tx-amount-error").textContent=b.errors.amount),b.errors.reason&&(c.querySelector("#tx-reason-error").textContent=b.errors.reason),b.errors.category&&(c.querySelector("#tx-category-error").textContent=b.errors.category),T=!1),I||(c.querySelector("#tx-account-error").textContent="Please select an account.",T=!1),!T)return;if(!e){const P=s.find(ht=>ht.id===I),{balances:A}=On(s,Ct.transactions),ot=A[I]||0,et=(x=(S=Ct.profile)==null?void 0:S.settings)==null?void 0:x.allowNegativeBalance;if(Number(v)>ot&&!et){g.textContent=`⚠️ Insufficient Balance! Available in ${P==null?void 0:P.name}: ${W(ot)}`,f.style.display="flex",q.warning(`⚠️ You only have ${W(ot)} available in ${P==null?void 0:P.name}.`);return}}const E=c.querySelector("#btn-save-tx");E.disabled=!0,E.innerHTML='<span class="spinner"></span> Saving...';try{const P=Ct.user.uid,A={type:n,amount:Number(v),date:k,reason:D,category:M,notes:N};e?A.destinationAccountId=I:A.sourceAccountId=I,await sb(P,A),$t();const ot=s.find(et=>et.id===I);q.success(e?`💰 ${W(v)} added to ${(ot==null?void 0:ot.name)||"account"}!`:`💸 ${W(v)} spent from ${(ot==null?void 0:ot.name)||"account"}.`),t&&t()}catch(P){console.error("Error saving transaction:",P),q.error("Unable to save transaction."),E.disabled=!1,E.innerHTML=e?"💰 Add Money":"💸 Save Expense"}}}})}function hh(n){const t=Ct.accounts,e=Fs(),i=Eb();if(!cb()){q.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const s=`
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
  `;Ee({title:"🔄 Transfer Money Between Accounts",content:s,onOpen:r=>{const o=r.querySelector("#transfer-modal-form"),a=r.querySelector("#tr-amount"),c=r.querySelector("#tr-from"),l=r.querySelector("#tr-insufficient-warning"),d=r.querySelector("#tr-insufficient-text"),h=()=>{const f=c.value,g=Number(a.value)||0;if(!f||g<=0){l.style.display="none";return}const{balances:y}=On(t,Ct.transactions),_=y[f]||0,v=t.find(I=>I.id===f);g>_?(d.textContent=`⚠️ Insufficient Balance! Available in ${v==null?void 0:v.name}: ${W(_)}`,l.style.display="flex"):l.style.display="none"};a.oninput=h,c.onchange=h,o.onsubmit=async f=>{f.preventDefault();const g=a.value,y=c.value,_=r.querySelector("#tr-to").value,v=r.querySelector("#tr-date").value,I=r.querySelector("#tr-reason").value,k=r.querySelector("#tr-notes").value,D=ch(v);if(D){q.error(D);return}r.querySelector("#tr-amount-error").textContent="",r.querySelector("#tr-from-error").textContent="",r.querySelector("#tr-to-error").textContent="",r.querySelector("#tr-reason-error").textContent="";let M=!0;const N=yo(g);N&&(r.querySelector("#tr-amount-error").textContent=N,M=!1),y||(r.querySelector("#tr-from-error").textContent="Select source account.",M=!1),_||(r.querySelector("#tr-to-error").textContent="Select destination account.",M=!1),y&&_&&y===_&&(r.querySelector("#tr-to-error").textContent="From and To accounts cannot be the same!",M=!1);const F=vb(I,"a reason");if(F&&(r.querySelector("#tr-reason-error").textContent=F,M=!1),!M)return;const{balances:T}=On(t,Ct.transactions),b=T[y]||0,E=t.find(P=>P.id===y),S=t.find(P=>P.id===_);if(Number(g)>b){d.textContent=`⚠️ Insufficient Balance! Available in ${E==null?void 0:E.name}: ${W(b)}`,l.style.display="flex",q.warning(`⚠️ You only have ${W(b)} available in ${E==null?void 0:E.name}.`);return}const x=r.querySelector("#btn-save-transfer");x.disabled=!0,x.innerHTML='<span class="spinner"></span> Transferring...';try{const P=Ct.user.uid;await sb(P,{type:"TRANSFER",amount:Number(g),date:v,reason:I,category:"Transfer",sourceAccountId:y,destinationAccountId:_,notes:k}),$t(),q.success(`🔄 Transferred ${W(g)} from ${E==null?void 0:E.name} to ${S==null?void 0:S.name}!`),n&&n()}catch(P){console.error("Error saving transfer:",P),q.error("Unable to complete transfer."),x.disabled=!1,x.innerHTML="🔄 Transfer Money"}}}})}function fh(n,t){const e=n.type==="INCOME",i=e?lh:_o,s=Ct.accounts,r=`
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
          📅 ${vo(n.date)}
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
  `;Ee({title:"✏️ Edit Transaction",content:r,onOpen:o=>{o.querySelector("#edit-tx-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#edit-tx-amount").value,l=o.querySelector("#edit-tx-account").value,d=o.querySelector("#edit-tx-date").value,h=o.querySelector("#edit-tx-reason").value,f=o.querySelector("#edit-tx-category").value,g=o.querySelector("#edit-tx-notes").value;if(!_b({amount:c,date:d,reason:h,category:f},!1).isValid)return;const _=o.querySelector("#btn-update-tx");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Updating...';try{const v=Ct.user.uid,I={amount:Number(c),date:d,reason:h,category:f,notes:g};e?I.destinationAccountId=l:I.sourceAccountId=l,await rb(v,n.id,I),$t(),q.success("✅ Transaction updated!"),t&&t()}catch{q.error("Unable to update transaction."),_.disabled=!1,_.innerHTML="✅ Update Transaction"}}}})}function ph(n,t){const e=Ct.accounts,i=`
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
          📅 ${vo(n.date)}
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
  `;Ee({title:"✏️ Edit Transfer",content:i,onOpen:s=>{s.querySelector("#edit-tr-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-tr-amount").value,a=s.querySelector("#edit-tr-from").value,c=s.querySelector("#edit-tr-to").value,l=s.querySelector("#edit-tr-date").value,d=s.querySelector("#edit-tr-reason").value,h=s.querySelector("#edit-tr-notes").value;if(a===c){q.error("From and To accounts cannot be the same!");return}const f=s.querySelector("#btn-update-tr");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Updating...';try{const g=Ct.user.uid;await rb(g,n.id,{amount:Number(o),date:l,reason:d,sourceAccountId:a,destinationAccountId:c,notes:h}),$t(),q.success("✅ Transfer updated!"),t&&t()}catch{q.error("Unable to update transfer."),f.disabled=!1,f.innerHTML="✅ Update Transfer"}}}})}async function gh(n,t){const e=n.type==="TRANSFER";if(await zi({icon:"🗑️",title:e?"Delete Transfer":"Delete Transaction",message:e?"Are you sure you want to delete this transfer? Both source and destination account balances will be restored.":"Are you sure you want to delete this transaction? Your account balances will automatically adjust.",confirmText:"Delete",danger:!0}))try{const s=Ct.user.uid;await jk(s,n.id),q.success("🗑️ Transaction deleted!"),t&&t()}catch{q.error("Unable to delete transaction.")}}let ei={user:null,profile:null,accounts:[],transactions:[]};function ZC(n){ei={...ei,...n};const{accounts:t,transactions:e}=ei,{balances:i,totalMoney:s}=On(t,e);return`
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
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: var(--primary); margin-top: 4px;">${W(s)}</div>
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
                ${W(o)}
              </div>
              <div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-top: 4px;">
                Initial: ${W(r.initialBalance||0)}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function tR(n){const t=document.getElementById("btn-add-account-modal");t&&(t.onclick=()=>eR(n)),document.querySelectorAll("[data-account-id]").forEach(e=>{e.onclick=()=>{const i=e.dataset.accountId,s=ei.accounts.find(r=>r.id===i);s&&nR(s,n)}})}function eR(n){Ee({title:"🏦 Add New Account",content:`
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
  `,onOpen:e=>{e.querySelector("#add-account-form").onsubmit=async i=>{i.preventDefault();const s=e.querySelector("#acc-name").value,r=e.querySelector("#acc-type").value,o=e.querySelector("#acc-initial").value,a=e.querySelector("#acc-last4").value,c=Uc(s),l=yo(o);if(c){e.querySelector("#acc-name-error").textContent=c;return}if(l){e.querySelector("#acc-initial-error").textContent=l;return}const d=e.querySelector("#btn-save-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Creating...';try{await eb(ei.user.uid,{name:s,type:r,initialBalance:Number(o),last4Digits:a}),$t(),q.success(`🏦 ${s} account created!`),n&&n()}catch{q.error("Unable to create account."),d.disabled=!1,d.innerHTML="Create Account"}}}})}function nR(n,t){const e=jC(n,ei.transactions),i=`
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
          ${W(e.balance)}
        </div>
      </div>

      <!-- Account Breakdown Stats -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: var(--space-4);">
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Added</div>
          <div style="font-weight: var(--fw-bold); color: var(--income);">${W(e.totalAdded)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Spent</div>
          <div style="font-weight: var(--fw-bold); color: var(--expense);">${W(e.totalSpent)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred Out</div>
          <div style="font-weight: var(--fw-bold); color: var(--primary);">${W(e.totalTransferredOut)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred In</div>
          <div style="font-weight: var(--fw-bold); color: var(--info);">${W(e.totalTransferredIn)}</div>
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
  `,onOpen:r=>{r.querySelector("#btn-edit-account").onclick=()=>{$t(),iR(n,t)},r.querySelector("#btn-delete-account").onclick=async()=>{if($t(),await zi({icon:"🗑️",title:"Delete Account",message:`Are you sure you want to delete ${n.name}? Transactions assigned to this account will remain in history.`,danger:!0}))try{await Uk(ei.user.uid,n.id),q.success(`Account ${n.name} deleted.`),t&&t()}catch{q.error("Unable to delete account.")}}}})}function iR(n,t){const e=`
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
  `;Ee({title:"✏️ Edit Account",content:e,onOpen:i=>{i.querySelector("#edit-account-form").onsubmit=async s=>{s.preventDefault();const r=i.querySelector("#edit-acc-name").value,o=i.querySelector("#edit-acc-type").value,a=i.querySelector("#edit-acc-initial").value,c=i.querySelector("#edit-acc-last4").value,l=Uc(r);if(l){i.querySelector("#edit-acc-name-error").textContent=l;return}const d=i.querySelector("#btn-update-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Updating...';try{await Bk(ei.user.uid,n.id,{name:r,type:o,initialBalance:Number(a),last4Digits:c}),$t(),q.success("Account updated!"),t&&t()}catch{q.error("Unable to update account."),d.disabled=!1,d.innerHTML="Update Account"}}}})}let Fe={user:null,profile:null,accounts:[],transactions:[]},Z={searchQuery:"",typeFilter:"ALL",accountFilter:"ALL",dateFilter:"ALL",customDate:"",categoryFilter:"ALL"};function Rb(n){Fe={...Fe,...n};const t=Mb(),e=[..._o.map(i=>i.value),...lh.map(i=>i.value)];return`
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
        ${Db(t)}
      </div>
    </div>
  `}function Db(n){return Fe.transactions.length===0?Cb():n.length===0?QC():fs(n,{showActions:!0,showDate:!0,showNotes:!0,accounts:Fe.accounts})}function Mb(){let n=[...Fe.transactions];if(Z.searchQuery){const e=Z.searchQuery.toLowerCase();n=n.filter(i=>{const s=Fe.accounts.find(o=>o.id===i.sourceAccountId),r=Fe.accounts.find(o=>o.id===i.destinationAccountId);return i.reason&&i.reason.toLowerCase().includes(e)||i.category&&i.category.toLowerCase().includes(e)||i.notes&&i.notes.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)||r&&r.name.toLowerCase().includes(e)})}if(Z.typeFilter!=="ALL"&&(n=n.filter(e=>e.type===Z.typeFilter)),Z.accountFilter!=="ALL"){const e=Z.accountFilter;n=n.filter(i=>i.sourceAccountId===e||i.destinationAccountId===e)}const t=Fs();if(Z.dateFilter==="TODAY")n=n.filter(e=>e.date===t);else if(Z.dateFilter==="WEEK"){const{start:e,end:i}=Tb(t);n=n.filter(s=>s.date>=e&&s.date<=i)}else if(Z.dateFilter==="MONTH"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;n=n.filter(i=>i.date&&i.date.startsWith(e))}else Z.dateFilter==="CUSTOM"&&Z.customDate&&(n=n.filter(e=>e.date===Z.customDate));return Z.categoryFilter!=="ALL"&&(n=n.filter(e=>e.category===Z.categoryFilter)),n}function Ob(n){const t=()=>{const d=document.getElementById("tx-list-container");if(d){const h=Mb();d.innerHTML=Db(h),bg(n)}},e=document.getElementById("tx-search-input"),i=document.getElementById("tx-search-clear");e&&(e.oninput=d=>{Z.searchQuery=d.target.value,i&&i.classList.toggle("visible",!!Z.searchQuery),t()}),i&&(i.onclick=()=>{Z.searchQuery="",e&&(e.value=""),i.classList.remove("visible"),t()}),document.querySelectorAll("[data-filter-type]").forEach(d=>{d.onclick=()=>{document.querySelectorAll("[data-filter-type]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),Z.typeFilter=d.dataset.filterType,t()}});const s=document.getElementById("tx-account-filter");s&&(s.onchange=d=>{Z.accountFilter=d.target.value,t()}),document.querySelectorAll("[data-filter-date]").forEach(d=>{d.onclick=()=>{if(document.querySelectorAll("[data-filter-date]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),Z.dateFilter=d.dataset.filterDate,Z.dateFilter==="CUSTOM"){const h=document.querySelector(".page");h&&(h.outerHTML=Rb(Fe),Ob(n))}else t()}});const r=document.getElementById("tx-custom-date");r&&(r.onchange=d=>{Z.customDate=d.target.value,t()});const o=document.getElementById("tx-category-filter");o&&(o.onchange=d=>{Z.categoryFilter=d.target.value,t()});const a=document.getElementById("btn-tx-add-income");a&&(a.onclick=()=>Ni("INCOME",n));const c=document.getElementById("btn-tx-add-expense");c&&(c.onclick=()=>Ni("EXPENSE",n));const l=document.getElementById("btn-tx-transfer");l&&(l.onclick=()=>hh(n)),bg(n)}function bg(n){document.querySelectorAll("#tx-list-container .transaction-action-btn[data-action]").forEach(t=>{t.onclick=e=>{e.stopPropagation();const i=t.dataset.action,s=t.dataset.txId,r=Fe.transactions.find(o=>o.id===s);r&&(i==="edit"?r.type==="TRANSFER"?ph(r,n):fh(r,n):i==="delete"&&gh(r,n))}})}let Pe={user:null,profile:null,accounts:[],transactions:[]},hn="DAY",dr=Fs(),Tu=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;function Ia(n){Pe={...Pe,...n};let t="",e="";if(hn==="DAY"){const i=dh(Pe.transactions,dr);t=`
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
    `,e=i.transactions.length>0?fs(i.transactions,{showActions:!0,showDate:!1,accounts:Pe.accounts}):Nl()}else if(hn==="WEEK"){const i=KC(Pe.transactions,dr);t=`
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
    `,e=i.transactions.length>0?fs(i.transactions,{showActions:!0,showDate:!0,accounts:Pe.accounts}):Nl()}else if(hn==="MONTH"){const i=Sb(Pe.transactions,Tu);t=`
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
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${FC(dr)}</div>
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
  `}function Ta(n){document.querySelectorAll(".tab[data-view]").forEach(i=>{i.onclick=()=>{hn=i.dataset.view;const s=document.querySelector(".page");s&&(s.outerHTML=Ia(Pe),Ta(n))}});const t=document.getElementById("mc-date-picker");t&&(t.onchange=i=>{dr=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=Ia(Pe),Ta(n))});const e=document.getElementById("mc-month-picker");e&&(e.onchange=i=>{Tu=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=Ia(Pe),Ta(n))}),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(i=>{i.onclick=s=>{s.stopPropagation();const r=i.dataset.action,o=i.dataset.txId,a=Pe.transactions.find(c=>c.id===o);a&&(r==="edit"?a.type==="TRANSFER"?ph(a,n):fh(a,n):r==="delete"&&gh(a,n))}})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function bo(n){return n+.5|0}const jn=(n,t,e)=>Math.max(Math.min(n,e),t);function hr(n){return jn(bo(n*2.55),0,255)}function ni(n){return jn(bo(n*255),0,255)}function gn(n){return jn(bo(n/2.55)/100,0,1)}function wg(n){return jn(bo(n*100),0,100)}const xe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Au=[..."0123456789ABCDEF"],sR=n=>Au[n&15],rR=n=>Au[(n&240)>>4]+Au[n&15],Qo=n=>(n&240)>>4===(n&15),oR=n=>Qo(n.r)&&Qo(n.g)&&Qo(n.b)&&Qo(n.a);function aR(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&xe[n[1]]*17,g:255&xe[n[2]]*17,b:255&xe[n[3]]*17,a:t===5?xe[n[4]]*17:255}:(t===7||t===9)&&(e={r:xe[n[1]]<<4|xe[n[2]],g:xe[n[3]]<<4|xe[n[4]],b:xe[n[5]]<<4|xe[n[6]],a:t===9?xe[n[7]]<<4|xe[n[8]]:255})),e}const cR=(n,t)=>n<255?t(n):"";function lR(n){var t=oR(n)?sR:rR;return n?"#"+t(n.r)+t(n.g)+t(n.b)+cR(n.a,t):void 0}const uR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Nb(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function dR(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function hR(n,t,e){const i=Nb(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function fR(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function mh(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=fR(e,i,s,d,r),c=c*60+.5),[c|0,l||0,a]}function yh(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(ni)}function vh(n,t,e){return yh(Nb,n,t,e)}function pR(n,t,e){return yh(hR,n,t,e)}function gR(n,t,e){return yh(dR,n,t,e)}function Lb(n){return(n%360+360)%360}function mR(n){const t=uR.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?hr(+t[5]):ni(+t[5]));const s=Lb(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=pR(s,r,o):t[1]==="hsv"?i=gR(s,r,o):i=vh(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function yR(n,t){var e=mh(n);e[0]=Lb(e[0]+t),e=vh(e),n.r=e[0],n.g=e[1],n.b=e[2]}function vR(n){if(!n)return;const t=mh(n),e=t[0],i=wg(t[1]),s=wg(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${gn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const Eg={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ig={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function _R(){const n={},t=Object.keys(Ig),e=Object.keys(Eg);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Eg[r]);r=parseInt(Ig[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Jo;function bR(n){Jo||(Jo=_R(),Jo.transparent=[0,0,0,0]);const t=Jo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const wR=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ER(n){const t=wR.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?hr(o):jn(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?hr(i):jn(i,0,255)),s=255&(t[4]?hr(s):jn(s,0,255)),r=255&(t[6]?hr(r):jn(r,0,255)),{r:i,g:s,b:r,a:e}}}function IR(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${gn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Ll=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,ts=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function TR(n,t,e){const i=ts(gn(n.r)),s=ts(gn(n.g)),r=ts(gn(n.b));return{r:ni(Ll(i+e*(ts(gn(t.r))-i))),g:ni(Ll(s+e*(ts(gn(t.g))-s))),b:ni(Ll(r+e*(ts(gn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Zo(n,t,e){if(n){let i=mh(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=vh(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function Vb(n,t){return n&&Object.assign(t||{},n)}function Tg(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=ni(n[3]))):(t=Vb(n,{r:0,g:0,b:0,a:1}),t.a=ni(t.a)),t}function AR(n){return n.charAt(0)==="r"?ER(n):mR(n)}class Gr{constructor(t){if(t instanceof Gr)return t;const e=typeof t;let i;e==="object"?i=Tg(t):e==="string"&&(i=aR(t)||bR(t)||AR(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Vb(this._rgb);return t&&(t.a=gn(t.a)),t}set rgb(t){this._rgb=Tg(t)}rgbString(){return this._valid?IR(this._rgb):void 0}hexString(){return this._valid?lR(this._rgb):void 0}hslString(){return this._valid?vR(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=TR(this._rgb,t._rgb,e)),this}clone(){return new Gr(this.rgb)}alpha(t){return this._rgb.a=ni(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=bo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Zo(this._rgb,2,t),this}darken(t){return Zo(this._rgb,2,-t),this}saturate(t){return Zo(this._rgb,1,t),this}desaturate(t){return Zo(this._rgb,1,-t),this}rotate(t){return yR(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function dn(){}const SR=(()=>{let n=0;return()=>n++})();function nt(n){return n==null}function It(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function rt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Dt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Te(n,t){return Dt(n)?n:t}function Q(n,t){return typeof n>"u"?t:n}const xR=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Fb=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function mt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function dt(n,t,e,i){let s,r,o;if(It(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(rt(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function ic(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function sc(n){if(It(n))return n.map(sc);if(rt(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=sc(n[e[s]]);return t}return n}function Bb(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function PR(n,t,e,i){if(!Bb(n))return;const s=t[n],r=e[n];rt(s)&&rt(r)?Kr(s,r,i):t[n]=sc(r)}function Kr(n,t,e){const i=It(t)?t:[t],s=i.length;if(!rt(n))return n;e=e||{};const r=e.merger||PR;let o;for(let a=0;a<s;++a){if(o=i[a],!rt(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function Pr(n,t){return Kr(n,t,{merger:kR})}function kR(n,t,e){if(!Bb(n))return;const i=t[n],s=e[n];rt(i)&&rt(s)?Pr(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=sc(s))}const Ag={"":n=>n,x:n=>n.x,y:n=>n.y};function CR(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function RR(n){const t=CR(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function ui(n,t){return(Ag[t]||(Ag[t]=RR(t)))(n)}function _h(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Yr=n=>typeof n<"u",di=n=>typeof n=="function",Sg=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function DR(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const lt=Math.PI,bt=2*lt,MR=bt+lt,rc=Number.POSITIVE_INFINITY,OR=lt/180,Nt=lt/2,wi=lt/4,xg=lt*2/3,Hn=Math.log10,tn=Math.sign;function kr(n,t,e){return Math.abs(n-t)<e}function Pg(n){const t=Math.round(n);n=kr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Hn(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function NR(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function LR(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Is(n){return!LR(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function VR(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Ub(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Be(n){return n*(lt/180)}function bh(n){return n*(180/lt)}function kg(n){if(!Dt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function $b(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*lt&&(r+=bt),{angle:r,distance:s}}function Su(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function FR(n,t){return(n-t+MR)%bt-lt}function oe(n){return(n%bt+bt)%bt}function Xr(n,t,e,i){const s=oe(n),r=oe(t),o=oe(e),a=oe(r-s),c=oe(o-s),l=oe(s-r),d=oe(s-o);return s===r||s===o||i&&r===o||a>c&&l<d}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function BR(n){return qt(n,-32768,32767)}function En(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function wh(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const In=(n,t,e,i)=>wh(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),UR=(n,t,e)=>wh(n,e,i=>n[i][t]>=e);function $R(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const zb=["push","pop","shift","splice","unshift"];function zR(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),zb.forEach(e=>{const i="_onData"+_h(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Cg(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(zb.forEach(r=>{delete n[r]}),delete n._chartjs)}function jb(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const Hb=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function qb(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,Hb.call(window,()=>{i=!1,n.apply(t,e)}))}}function jR(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const Eh=n=>n==="start"?"left":n==="end"?"right":"center",se=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,HR=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function Wb(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:g,maxDefined:y}=o.getUserBounds();if(g){if(s=Math.min(In(c,d,h).lo,e?i:In(t,d,o.getPixelForValue(h)).lo),l){const _=c.slice(0,s+1).reverse().findIndex(v=>!nt(v[a.axis]));s-=Math.max(0,_)}s=qt(s,0,i-1)}if(y){let _=Math.max(In(c,o.axis,f,!0).hi+1,e?0:In(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const v=c.slice(_-1).findIndex(I=>!nt(I[a.axis]));_+=Math.max(0,v)}r=qt(_,s,i)-s}else r=i-s}return{start:s,count:r}}function Gb(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const ta=n=>n===0||n===1,Rg=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*bt/e)),Dg=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*bt/e)+1,Cr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Nt)+1,easeOutSine:n=>Math.sin(n*Nt),easeInOutSine:n=>-.5*(Math.cos(lt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>ta(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>ta(n)?n:Rg(n,.075,.3),easeOutElastic:n=>ta(n)?n:Dg(n,.075,.3),easeInOutElastic(n){return ta(n)?n:n<.5?.5*Rg(n*2,.1125,.45):.5+.5*Dg(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Cr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Cr.easeInBounce(n*2)*.5:Cr.easeOutBounce(n*2-1)*.5+.5};function Ih(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Mg(n){return Ih(n)?n:new Gr(n)}function Vl(n){return Ih(n)?n:new Gr(n).saturate(.5).darken(.1).hexString()}const qR=["x","y","borderWidth","radius","tension"],WR=["color","borderColor","backgroundColor"];function GR(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:WR},numbers:{type:"number",properties:qR}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function KR(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Og=new Map;function YR(n,t){t=t||{};const e=n+JSON.stringify(t);let i=Og.get(e);return i||(i=new Intl.NumberFormat(n,t),Og.set(e,i)),i}function wo(n,t,e){return YR(t,e).format(n)}const Kb={values(n){return It(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=XR(n,e)}const o=Hn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),wo(n,i,c)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(Hn(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Kb.numeric.call(this,n,t,e):""}};function XR(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var $c={formatters:Kb};function QR(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:$c.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ji=Object.create(null),xu=Object.create(null);function Rr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function Fl(n,t,e){return typeof t=="string"?Kr(Rr(n,t),e):Kr(Rr(n,""),t)}class JR{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Vl(s.backgroundColor),this.hoverBorderColor=(i,s)=>Vl(s.borderColor),this.hoverColor=(i,s)=>Vl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Fl(this,t,e)}get(t){return Rr(this,t)}describe(t,e){return Fl(xu,t,e)}override(t,e){return Fl(ji,t,e)}route(t,e,i,s){const r=Rr(this,t),o=Rr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[s];return rt(c)?Object.assign({},l,c):Q(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Tt=new JR({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[GR,KR,QR]);function ZR(n){return!n||nt(n.size)||nt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function oc(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function tD(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!It(h))o=oc(n,s,r,o,h);else if(It(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!It(f)&&(o=oc(n,s,r,o,f));n.restore();const g=r.length/2;if(g>e.length){for(c=0;c<g;c++)delete s[r[c]];r.splice(0,g)}return o}function Ei(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Ng(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Pu(n,t,e,i){Yb(n,t,e,i,null)}function Yb(n,t,e,i,s){let r,o,a,c,l,d,h,f;const g=t.pointStyle,y=t.rotation,_=t.radius;let v=(y||0)*OR;if(g&&typeof g=="object"&&(r=g.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(v),n.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),g){default:s?n.ellipse(e,i,s/2,_,0,0,bt):n.arc(e,i,_,0,bt),n.closePath();break;case"triangle":d=s?s/2:_,n.moveTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=xg,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),v+=xg,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*_),n.closePath();break;case"rectRounded":l=_*.516,c=_-l,o=Math.cos(v+wi)*c,h=Math.cos(v+wi)*(s?s/2-l:c),a=Math.sin(v+wi)*c,f=Math.sin(v+wi)*(s?s/2-l:c),n.arc(e-h,i-a,l,v-lt,v-Nt),n.arc(e+f,i-o,l,v-Nt,v),n.arc(e+h,i+a,l,v,v+Nt),n.arc(e-f,i+o,l,v+Nt,v+lt),n.closePath();break;case"rect":if(!y){c=Math.SQRT1_2*_,d=s?s/2:c,n.rect(e-d,i-c,2*d,2*c);break}v+=wi;case"rectRot":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+f,i-o),n.lineTo(e+h,i+a),n.lineTo(e-f,i+o),n.closePath();break;case"crossRot":v+=wi;case"cross":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"star":h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o),v+=wi,h=Math.cos(v)*(s?s/2:_),o=Math.cos(v)*_,a=Math.sin(v)*_,f=Math.sin(v)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"line":o=s?s/2:Math.cos(v)*_,a=Math.sin(v)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(v)*(s?s/2:_),i+Math.sin(v)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Tn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function zc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function jc(n){n.restore()}function eD(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function nD(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function iD(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),nt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function sD(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=s.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function rD(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Hi(n,t,e,i,s,r={}){const o=It(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=s.string,iD(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&rD(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),nt(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,i,r.maxWidth)),n.fillText(l,e,i,r.maxWidth),sD(n,e,i,l,r),i+=Number(s.lineHeight);n.restore()}function Qr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*lt,lt,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,lt,Nt,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Nt,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Nt,!0),n.lineTo(e+o.topLeft,i)}const oD=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,aD=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function cD(n,t){const e=(""+n).match(oD);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const lD=n=>+n||0;function Th(n,t){const e={},i=rt(t),s=i?Object.keys(t):t,r=rt(n)?i?o=>Q(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=lD(r(o));return e}function Xb(n){return Th(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Li(n){return Th(n,["topLeft","topRight","bottomLeft","bottomRight"])}function ue(n){const t=Xb(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function zt(n,t){n=n||{},t=t||Tt.font;let e=Q(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Q(n.style,t.style);i&&!(""+i).match(aD)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Q(n.family,t.family),lineHeight:cD(Q(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Q(n.weight,t.weight),string:""};return s.string=ZR(s),s}function fr(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function uD(n,t,e){const{min:i,max:s}=n,r=Fb(t,(s-i)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function mi(n,t){return Object.assign(Object.create(n),t)}function Ah(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=tw("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Ah([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Jb(a,c,()=>vD(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Vg(a).includes(c)},ownKeys(a){return Vg(a)},set(a,c,l){const d=a._storage||(a._storage=s());return a[c]=d[c]=l,delete a._keys,!0}})}function Ts(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Qb(n,i),setContext:r=>Ts(n,r,e,i),override:r=>Ts(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Jb(r,o,()=>hD(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function Qb(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:di(e)?e:()=>e,isIndexable:di(i)?i:()=>i}}const dD=(n,t)=>n?n+_h(t):t,Sh=(n,t)=>rt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Jb(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function hD(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return di(a)&&o.isScriptable(t)&&(a=fD(t,a,n,e)),It(a)&&a.length&&(a=pD(t,a,n,o.isIndexable)),Sh(t,a)&&(a=Ts(a,s,r&&r[t],o)),a}function fD(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||i);return a.delete(n),Sh(n,c)&&(c=xh(s._scopes,s,n,c)),c}function pD(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(rt(t[0])){const c=t,l=s._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=xh(l,s,n,d);t.push(Ts(h,r,o&&o[n],a))}}return t}function Zb(n,t,e){return di(n)?n(t,e):n}const gD=(n,t)=>n===!0?t:typeof n=="string"?ui(t,n):void 0;function mD(n,t,e,i,s){for(const r of t){const o=gD(e,r);if(o){n.add(o);const a=Zb(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function xh(n,t,e,i){const s=t._rootScopes,r=Zb(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let c=Lg(a,o,e,r||e,i);return c===null||typeof r<"u"&&r!==e&&(c=Lg(a,o,r,c,i),c===null)?!1:Ah(Array.from(a),[""],s,r,()=>yD(t,e,i))}function Lg(n,t,e,i,s){for(;e;)e=mD(n,t,e,i,s);return e}function yD(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return It(s)&&rt(e)?e:s||{}}function vD(n,t,e,i){let s;for(const r of t)if(s=tw(dD(r,n),e),typeof s<"u")return Sh(n,s)?xh(e,i,n,s):s}function tw(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function Vg(n){let t=n._keys;return t||(t=n._keys=_D(n._scopes)),t}function _D(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function ew(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,d;for(a=0,c=i;a<c;++a)l=a+e,d=t[l],o[a]={r:s.parse(ui(d,r),l)};return o}const bD=Number.EPSILON||1e-14,As=(n,t)=>t<n.length&&!n[t].skip&&n[t],nw=n=>n==="x"?"y":"x";function wD(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Su(r,s),c=Su(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=i*l,f=i*d;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function ED(n,t,e){const i=n.length;let s,r,o,a,c,l=As(n,0);for(let d=0;d<i-1;++d)if(c=l,l=As(n,d+1),!(!c||!l)){if(kr(t[d],0,bD)){e[d]=e[d+1]=0;continue}s=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=s*o*t[d],e[d+1]=r*o*t[d])}}function ID(n,t,e="x"){const i=nw(e),s=n.length;let r,o,a,c=As(n,0);for(let l=0;l<s;++l){if(o=a,a=c,c=As(n,l+1),!a)continue;const d=a[e],h=a[i];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${i}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${i}`]=h+r*t[l])}}function TD(n,t="x"){const e=nw(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=As(n,0);for(o=0;o<i;++o)if(a=c,c=l,l=As(n,o+1),!!c){if(l){const d=l[t]-c[t];s[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?tn(s[o-1])!==tn(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}ED(n,s,r),ID(n,r,t)}function ea(n,t,e){return Math.max(Math.min(n,e),t)}function AD(n,t){let e,i,s,r,o,a=Tn(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&Tn(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=ea(s.cp1x,t.left,t.right),s.cp1y=ea(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=ea(s.cp2x,t.left,t.right),s.cp2y=ea(s.cp2y,t.top,t.bottom)))}function SD(n,t,e,i,s){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")TD(n,s);else{let l=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=wD(l,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&AD(n,e)}function Ph(){return typeof window<"u"&&typeof document<"u"}function kh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function ac(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const Hc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function xD(n,t){return Hc(n).getPropertyValue(t)}const PD=["top","right","bottom","left"];function Vi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=PD[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const kD=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function CD(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(kD(s,r,n.target))a=s,c=r;else{const l=t.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Si(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=Hc(e),r=s.boxSizing==="border-box",o=Vi(s,"padding"),a=Vi(s,"border","width"),{x:c,y:l,box:d}=CD(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:g,height:y}=t;return r&&(g-=o.width+a.width,y-=o.height+a.height),{x:Math.round((c-h)/g*e.width/i),y:Math.round((l-f)/y*e.height/i)}}function RD(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&kh(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Hc(r),c=Vi(a,"border","width"),l=Vi(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,i=ac(a.maxWidth,r,"clientWidth"),s=ac(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||rc,maxHeight:s||rc}}const qn=n=>Math.round(n*10)/10;function DD(n,t,e,i){const s=Hc(n),r=Vi(s,"margin"),o=ac(s.maxWidth,n,"clientWidth")||rc,a=ac(s.maxHeight,n,"clientHeight")||rc,c=RD(n,t,e);let{width:l,height:d}=c;if(s.boxSizing==="content-box"){const f=Vi(s,"border","width"),g=Vi(s,"padding");l-=g.width+f.width,d-=g.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,i?l/i:d-r.height),l=qn(Math.min(l,o,c.maxWidth)),d=qn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=qn(l/2)),(t!==void 0||e!==void 0)&&i&&c.height&&d>c.height&&(d=c.height,l=qn(Math.floor(d*i))),{width:l,height:d}}function Fg(n,t,e){const i=t||1,s=qn(n.height*i),r=qn(n.width*i);n.height=qn(n.height),n.width=qn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const MD=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Ph()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Bg(n,t){const e=xD(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function xi(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function OD(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function ND(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=xi(n,s,e),a=xi(s,r,e),c=xi(r,t,e),l=xi(o,a,e),d=xi(a,c,e);return xi(l,d,e)}const LD=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},VD=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function ps(n,t,e){return n?LD(t,e):VD()}function iw(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function sw(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function rw(n){return n==="angle"?{between:Xr,compare:FR,normalize:oe}:{between:En,compare:(t,e)=>t-e,normalize:t=>t}}function Ug({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function FD(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=rw(i),c=t.length;let{start:l,end:d,loop:h}=n,f,g;if(h){for(l+=c,d+=c,f=0,g=c;f<g&&o(a(t[l%c][i]),s,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function ow(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=rw(i),{start:d,end:h,loop:f,style:g}=FD(n,t,e),y=[];let _=!1,v=null,I,k,D;const M=()=>c(s,D,I)&&a(s,D)!==0,N=()=>a(r,I)===0||c(r,D,I),F=()=>_||M(),T=()=>!_||N();for(let b=d,E=d;b<=h;++b)k=t[b%o],!k.skip&&(I=l(k[i]),I!==D&&(_=c(I,s,r),v===null&&F()&&(v=a(I,s)===0?b:E),v!==null&&T()&&(y.push(Ug({start:v,end:b,loop:f,count:o,style:g})),v=null),E=b,D=I));return v!==null&&y.push(Ug({start:v,end:h,loop:f,count:o,style:g})),y}function aw(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=ow(i[s],n.points,t);r.length&&e.push(...r)}return e}function BD(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function UD(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:t%s,end:(c-1)%s,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function $D(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=BD(e,s,r,i);if(i===!0)return $g(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+s:a,l=!!n._fullLoop&&o===0&&a===s-1;return $g(n,UD(e,o,c,l),e,t)}function $g(n,t,e,i){return!i||!i.setContext||!e?t:zD(n,t,e,i)}function zD(n,t,e,i){const s=n._chart.getContext(),r=zg(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function g(y,_,v,I){const k=a?-1:1;if(y!==_){for(y+=c;e[y%c].skip;)y-=k;for(;e[_%c].skip;)_+=k;y%c!==_%c&&(l.push({start:y%c,end:_%c,loop:v,style:I}),d=I,h=_%c)}}for(const y of t){h=a?h:y.start;let _=e[h%c],v;for(f=h+1;f<=y.end;f++){const I=e[f%c];v=zg(i.setContext(mi(s,{type:"segment",p0:_,p1:I,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),jD(v,d)&&g(h,f-1,y.loop,d),_=I,d=v}h<f-1&&g(h,f-1,y.loop,d)}return l}function zg(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function jD(n,t){if(!t)return!1;const e=[],i=function(s,r){return Ih(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function na(n,t,e){return n.options.clip?n[e]:t[e]}function HD(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:na(e,t,"left"),right:na(e,t,"right"),top:na(i,t,"top"),bottom:na(i,t,"bottom")}:t}function cw(n,t){const e=t._clip;if(e.disabled)return!1;const i=HD(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class qD{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Hb.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var fn=new qD;const jg="transparent",WD={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Mg(n||jg),s=i.valid&&Mg(t||jg);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class GD{constructor(t,e,i,s){const r=e[i];s=fr([t.to,s,r,t.from]);const o=fr([t.from,r,s]);this._active=!0,this._fn=t.fn||WD[t.type||typeof o],this._easing=Cr[t.easing]||Cr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=fr([t.to,e,s,t.from]),this._from=fr([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}c=e/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class lw{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!rt(t))return;const e=Object.keys(Tt.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!rt(r))return;const o={};for(const a of e)o[a]=r[a];(It(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=YD(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&KD(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new GD(f,t,l,d),s.push(h)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return fn.add(this._chart,i),!0}}function KD(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function YD(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Hg(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function XD(n,t,e){if(e===!1)return!1;const i=Hg(n,e),s=Hg(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function QD(n){let t,e,i,s;return rt(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function uw(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function qg(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===e){if(d=!0,i.all)continue;break}l=n.values[c],Dt(l)&&(r||t===0||tn(t)===tn(l))&&(t+=l)}return!d&&!i.all?0:t}function JD(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[s]:d,[r]:n[d]};return a}function Bl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function ZD(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function tM(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function eM(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Wg(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Gg(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,d=ZD(r,o,i),h=t.length;let f;for(let g=0;g<h;++g){const y=t[g],{[c]:_,[l]:v}=y,I=y._stacks||(y._stacks={});f=I[l]=eM(s,d,_),f[a]=v,f._top=Wg(f,o,!0,i.type),f._bottom=Wg(f,o,!1,i.type);const k=f._visualValues||(f._visualValues={});k[a]=v}}function Ul(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function nM(n,t){return mi(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function iM(n,t,e){return mi(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Zs(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const $l=n=>n==="reset"||n==="none",Kg=(n,t)=>t?n:Object.assign({},n),sM=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:uw(e,!0),values:null};class Ue{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Bl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Zs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(h,f,g,y)=>h==="x"?f:h==="r"?y:g,r=e.xAxisID=Q(i.xAxisID,Ul(t,"x")),o=e.yAxisID=Q(i.yAxisID,Ul(t,"y")),a=e.rAxisID=Q(i.rAxisID,Ul(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),d=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Cg(this._data,this),t._stacked&&Zs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(rt(e)){const s=this._cachedMeta;this._data=JD(e,s)}else if(i!==e){if(i){Cg(i,this);const s=this._cachedMeta;Zs(s),s._parsed=[]}e&&Object.isExtensible(e)&&zR(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=Bl(e.vScale,e),e.stack!==i.stack&&(s=!0,Zs(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(Gg(this,e._parsed),e._stacked=Bl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=t===0&&e===s.length?!0:i._sorted,l=t>0&&i._parsed[t-1],d,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{It(s[t])?f=this.parseArrayData(i,s,t,e):rt(s[t])?f=this.parseObjectData(i,s,t,e):f=this.parsePrimitiveData(i,s,t,e);const g=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)i._parsed[d+t]=h=f[d],c&&(g()&&(c=!1),l=h);i._sorted=c}o&&Gg(this,f)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(s);let f,g,y;for(f=0,g=s;f<g;++f)y=f+i,h[f]={[a]:d||r.parse(l[y],y),[c]:o.parse(e[y],y)};return h}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let c,l,d,h;for(c=0,l=s;c<l;++c)d=c+i,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let d,h,f,g;for(d=0,h=s;d<h;++d)f=d+i,g=e[f],l[d]={x:r.parse(ui(g,a),f),y:o.parse(ui(g,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:uw(s,!0),values:e._stacks[t.axis]._visualValues};return qg(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=qg(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),c=sM(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=tM(a);let f,g;function y(){g=s[f];const _=g[a.axis];return!Dt(g[t.axis])||d>_||h<_}for(f=0;f<o&&!(!y()&&(this.updateRangeFromParsed(l,t,g,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!y()){this.updateRangeFromParsed(l,t,g,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],Dt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=QD(Q(this.options.clip,XD(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=s[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=iM(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=nM(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Yr(i);if(a)return Kg(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),g=Object.keys(Tt.elements[t]),y=()=>this.getContext(i,s,e),_=l.resolveNamedOptions(f,g,y,h);return _.$shared&&(_.$shared=c,r[o]=Object.freeze(Kg(_,c))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,i,e))}const l=new lw(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||$l(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){$l(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!$l(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Zs(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}z(Ue,"defaults",{}),z(Ue,"datasetElementType",null),z(Ue,"dataElementType",null);function rM(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=jb(i.sort((s,r)=>s-r))}return n._cache.$bar}function oM(n){const t=n.iScale,e=rM(t,n.type);let i=t._length,s,r,o,a;const c=()=>{o===32767||o===-32768||(Yr(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),c();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),c();return i}function aM(n,t,e,i){const s=e.barThickness;let r,o;return nt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function cM(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:e.barPercentage,start:l}}function lM(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:s,end:r,min:o,max:a}}function dw(n,t,e,i){return It(n)?lM(n,t,e,i):t[e.axis]=e.parse(n,i),t}function Yg(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,c=[];let l,d,h,f;for(l=e,d=e+i;l<d;++l)f=t[l],h={},h[s.axis]=a||s.parse(o[l],l),c.push(dw(f,h,r,l));return c}function zl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function uM(n,t,e){return n!==0?tn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function dM(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function hM(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=dM(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=l:(e._bottom||0)===i?s=d:(r[Xg(d,o,a,c)]=!0,s=l)),r[Xg(s,o,a,c)]=!0,n.borderSkipped=r}function Xg(n,t,e,i){return i?(n=fM(n,t,e),n=Qg(n,e,t)):n=Qg(n,t,e),n}function fM(n,t,e){return n===t?e:n===e?t:n}function Qg(n,t,e){return n==="start"?t:n==="end"?e:n}function pM(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Aa extends Ue{parsePrimitiveData(t,e,i,s){return Yg(t,e,i,s)}parseArrayData(t,e,i,s){return Yg(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,g,y,_;for(f=i,g=i+s;f<g;++f)_=e[f],y={},y[r.axis]=r.parse(ui(_,l),f),h.push(dw(ui(_,d),y,o,f));return h}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=zl(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,s);for(let g=e;g<e+i;g++){const y=this.getParsed(g),_=r||nt(y[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(g),v=this._calculateBarIndexPixels(g,d),I=(y._stacks||{})[a.axis],k={horizontal:l,base:_.base,enableBorderRadius:!I||zl(y._custom)||o===I._top||o===I._bottom,x:l?_.head:v.center,y:l?v.center:_.head,height:l?v.size:Math.abs(_.size),width:l?Math.abs(_.size):v.size};f&&(k.options=h||this.resolveDataElementOptions(g,t[g].active?"active":s));const D=k.options||t[g].options;hM(k,D,I,o),pM(k,D,d.ratio),this.updateElement(t[g],g,k,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[i.axis],l=d=>{const h=d._parsed.find(g=>g[i.axis]===c),f=h&&h[d.vScale.axis];if(nt(f)||isNaN(f))return!0};for(const d of s)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Q(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||oM(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=zl(l);let h=c[e.axis],f=0,g=i?this.applyStack(e,c,i):h,y,_;g!==h&&(f=g-h,g=h),d&&(h=l.barStart,g=l.barEnd-l.barStart,h!==0&&tn(h)!==tn(l.barEnd)&&(f=0),f+=h);const v=!nt(r)&&!d?r:f;let I=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(f+g):y=I,_=y-I,Math.abs(_)<o){_=uM(_,e,a)*o,h===a&&(I-=_/2);const k=e.getPixelForDecimal(0),D=e.getPixelForDecimal(1),M=Math.min(k,D),N=Math.max(k,D);I=Math.max(Math.min(I,N),M),y=I+_,i&&!d&&(c._stacks[e.axis]._visualValues[s]=e.getValueForPixel(y)-e.getValueForPixel(I))}if(I===e.getPixelForValue(a)){const k=tn(_)*e.getLineWidthForValue(a)/2;I+=k,_-=k}return{size:_,base:I,head:y,center:y+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=Q(s.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?cM(t,e,s,d*l):aM(t,e,s,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(Q(f,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+g;a=h.start+h.chunk*y+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}z(Aa,"id","bar"),z(Aa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),z(Aa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Sa extends Ue{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Q(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Q(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:i[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,s),d=o.axis,h=a.axis;for(let f=e;f<e+i;f++){const g=t[f],y=!r&&this.getParsed(f),_={},v=_[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(y[d]),I=_[h]=r?a.getBasePixel():a.getPixelForValue(y[h]);_.skip=isNaN(v)||isNaN(I),l&&(_.options=c||this.resolveDataElementOptions(f,g.active?"active":s),r&&(_.options.radius=0)),this.updateElement(g,f,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Q(i&&i._custom,r),s}}z(Sa,"id","bubble"),z(Sa,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),z(Sa,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function gM(n,t,e){let i=1,s=1,r=0,o=0;if(t<bt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),g=(D,M,N)=>Xr(D,a,c,!0)?1:Math.max(M,M*e,N,N*e),y=(D,M,N)=>Xr(D,a,c,!0)?-1:Math.min(M,M*e,N,N*e),_=g(0,l,h),v=g(Nt,d,f),I=y(lt,l,h),k=y(lt+Nt,d,f);i=(_-I)/2,s=(v-k)/2,r=-(_+I)/2,o=-(v+k)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Ci extends Ue{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=c=>+i[c];if(rt(i[t])){const{key:c="value"}=this._parsing;r=l=>+ui(i[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return Be(this.options.rotation-90)}_getCircumference(){return Be(this.options.circumference)}_getRotationExtents(){let t=bt,e=-bt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(xR(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:y,offsetY:_}=gM(h,d,c),v=(i.width-o)/f,I=(i.height-o)/g,k=Math.max(Math.min(v,I)/2,0),D=Fb(this.options.radius,k),M=Math.max(D*c,0),N=(D-M)/this._getVisibleDatasetWeightTotal();this.offsetX=y*D,this.offsetY=_*D,s.total=this.calculateTotal(),this.outerRadius=D-N*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-N*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/bt)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,g=f?0:this.innerRadius,y=f?0:this.outerRadius,{sharedOptions:_,includeOptions:v}=this._getSharedOptions(e,s);let I=this._getRotation(),k;for(k=0;k<e;++k)I+=this._circumference(k,r);for(k=e;k<e+i;++k){const D=this._circumference(k,r),M=t[k],N={x:d+this.offsetX,y:h+this.offsetY,startAngle:I,endAngle:I+D,circumference:D,outerRadius:y,innerRadius:g};v&&(N.options=_||this.resolveDataElementOptions(k,M.active?"active":s)),I+=D,this.updateElement(M,k,N,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?bt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=wo(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,c;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)c=a.resolveDataElementOptions(s),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Q(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}z(Ci,"id","doughnut"),z(Ci,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),z(Ci,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),z(Ci,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class xa extends Ue{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=Wb(e,s,o);this._drawStart=a,this._drawCount=c,Gb(e)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,s),f=o.axis,g=a.axis,{spanGaps:y,segment:_}=this.options,v=Is(y)?y:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||s==="none",k=e+i,D=t.length;let M=e>0&&this.getParsed(e-1);for(let N=0;N<D;++N){const F=t[N],T=I?F:{};if(N<e||N>=k){T.skip=!0;continue}const b=this.getParsed(N),E=nt(b[g]),S=T[f]=o.getPixelForValue(b[f],N),x=T[g]=r||E?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[g],N);T.skip=isNaN(S)||isNaN(x)||E,T.stop=N>0&&Math.abs(b[f]-M[f])>v,_&&(T.parsed=b,T.raw=l.data[N]),h&&(T.options=d||this.resolveDataElementOptions(N,F.active?"active":s)),I||this.updateElement(F,N,T,s),M=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}z(xa,"id","line"),z(xa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),z(xa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Dr extends Ue{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=wo(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return ew.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*lt;let g=f,y;const _=360/this.countVisibleElements();for(y=0;y<e;++y)g+=this._computeAngle(y,s,_);for(y=e;y<e+i;y++){const v=t[y];let I=g,k=g+this._computeAngle(y,s,_),D=o.getDataVisibility(y)?l.getDistanceFromCenterForValue(this.getParsed(y).r):0;g=k,r&&(c.animateScale&&(D=0),c.animateRotate&&(I=k=f));const M={x:d,y:h,innerRadius:0,outerRadius:D,startAngle:I,endAngle:k,options:this.resolveDataElementOptions(y,v.active?"active":s)};this.updateElement(v,y,M,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Be(this.resolveDataElementOptions(t,e).angle||i):0}}z(Dr,"id","polarArea"),z(Dr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),z(Dr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:s,lineWidth:c.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ku extends Ci{}z(ku,"id","pie"),z(ku,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Pa extends Ue{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return ew.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":s),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,g={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,g,s)}}}z(Pa,"id","radar"),z(Pa,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),z(Pa,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ka extends Ue{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=Wb(e,i,s);if(this._drawStart=r,this._drawCount=o,Gb(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,s),h=this.getSharedOptions(d),f=this.includeOptions(s,h),g=o.axis,y=a.axis,{spanGaps:_,segment:v}=this.options,I=Is(_)?_:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||s==="none";let D=e>0&&this.getParsed(e-1);for(let M=e;M<e+i;++M){const N=t[M],F=this.getParsed(M),T=k?N:{},b=nt(F[y]),E=T[g]=o.getPixelForValue(F[g],M),S=T[y]=r||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,F,c):F[y],M);T.skip=isNaN(E)||isNaN(S)||b,T.stop=M>0&&Math.abs(F[g]-D[g])>I,v&&(T.parsed=F,T.raw=l.data[M]),f&&(T.options=h||this.resolveDataElementOptions(M,N.active?"active":s)),k||this.updateElement(N,M,T,s),D=F}this.updateSharedOptions(h,s,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}z(ka,"id","scatter"),z(ka,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),z(ka,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var mM=Object.freeze({__proto__:null,BarController:Aa,BubbleController:Sa,DoughnutController:Ci,LineController:xa,PieController:ku,PolarAreaController:Dr,RadarController:Pa,ScatterController:ka});function Ii(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ch{constructor(t){z(this,"options");this.options=t||{}}static override(t){Object.assign(Ch.prototype,t)}init(){}formats(){return Ii()}parse(){return Ii()}format(){return Ii()}add(){return Ii()}diff(){return Ii()}startOf(){return Ii()}endOf(){return Ii()}}var yM={_date:Ch};function vM(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?UR:In;if(i){if(s._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),g=l(r,t,e+h);return{lo:f.lo,hi:g.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=s._cachedMeta,{_parsed:f}=n,g=f.slice(0,d.lo+1).reverse().findIndex(_=>!nt(_[h.axis]));d.lo-=Math.max(0,g);const y=f.slice(d.hi).findIndex(_=>!nt(_[h.axis]));d.hi+=Math.max(0,y)}return d}}return{lo:0,hi:r.length-1}}function qc(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=vM(r[a],t,o,s);for(let g=h;g<=f;++g){const y=d[g];y.skip||i(y,l,g)}}}function _M(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function jl(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||qc(n,e,t,function(a,c,l){!s&&!Tn(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function bM(n,t,e,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=$b(o,{x:t.x,y:t.y});Xr(h,l,d)&&s.push({element:o,datasetIndex:a,index:c})}return qc(n,e,t,r),s}function wM(n,t,e,i,s,r){let o=[];const a=_M(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const g=d.inRange(t.x,t.y,s);if(i&&!g)return;const y=d.getCenterPoint(s);if(!(!!r||n.isPointInArea(y))&&!g)return;const v=a(t,y);v<c?(o=[{element:d,datasetIndex:h,index:f}],c=v):v===c&&o.push({element:d,datasetIndex:h,index:f})}return qc(n,e,t,l),o}function Hl(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?bM(n,t,e,s):wM(n,t,e,i,s,r)}function Jg(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return qc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],s)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,s))}),i&&!a?[]:r}var EM={modes:{index(n,t,e,i){const s=Si(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?jl(n,s,r,i,o):Hl(n,s,r,!1,i,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?jl(n,s,r,i,o):Hl(n,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return jl(n,s,r,i,o)},nearest(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Hl(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=Si(t,n);return Jg(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=Si(t,n);return Jg(n,s,"y",e.intersect,i)}}};const hw=["left","top","right","bottom"];function tr(n,t){return n.filter(e=>e.pos===t)}function Zg(n,t){return n.filter(e=>hw.indexOf(e.pos)===-1&&e.box.axis===t)}function er(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function IM(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function TM(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!hw.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function AM(n,t){const e=TM(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*i:c&&t.availableWidth,a.height=s):(a.width=i,a.height=d?d*s:c&&t.availableHeight)}return e}function SM(n){const t=IM(n),e=er(t.filter(l=>l.box.fullSize),!0),i=er(tr(t,"left"),!0),s=er(tr(t,"right")),r=er(tr(t,"top"),!0),o=er(tr(t,"bottom")),a=Zg(t,"x"),c=Zg(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:tr(t,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function tm(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function fw(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function xM(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!rt(s)){e.size&&(n[s]-=e.size);const h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[s]+=e.size}r.getPadding&&fw(o,r.getPadding());const a=Math.max(0,t.outerWidth-tm(o,n,"left","right")),c=Math.max(0,t.outerHeight-tm(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function PM(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function kM(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function pr(n,t,e,i){const s=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,kM(a.horizontal,t));const{same:h,other:f}=xM(t,e,a,i);l|=h&&s.length,d=d||f,c.fullSize||s.push(a)}return l&&pr(s,t,e,i)||d}function ia(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function em(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=i[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Yr(l.start)&&(o=l.start),c.fullSize?ia(c,s.left,o,e.outerWidth-s.right-s.left,f):ia(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Yr(l.start)&&(r=l.start),c.fullSize?ia(c,r,s.top,f,e.outerHeight-s.bottom-s.top):ia(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var ce={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=ue(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=SM(n.boxes),c=a.vertical,l=a.horizontal;dt(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const d=c.reduce((_,v)=>v.box.options&&v.box.options.display===!1?_:_+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},s);fw(f,ue(i));const g=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),y=AM(c.concat(l),h);pr(a.fullSize,g,h,y),pr(c,g,h,y),pr(l,g,h,y)&&pr(c,g,h,y),PM(g),em(a.leftAndTop,g,h,y),g.x+=g.w,g.y+=g.h,em(a.rightAndBottom,g,h,y),n.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},dt(a.chartArea,_=>{const v=_.box;Object.assign(v,n.chartArea),v.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class pw{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class CM extends pw{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ca="$chartjs",RM={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},nm=n=>n===null||n==="";function DM(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[Ca]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",nm(s)){const r=Bg(n,"width");r!==void 0&&(n.width=r)}if(nm(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Bg(n,"height");r!==void 0&&(n.height=r)}return n}const gw=MD?{passive:!0}:!1;function MM(n,t,e){n&&n.addEventListener(t,e,gw)}function OM(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,gw)}function NM(n,t){const e=RM[n.type]||n.type,{x:i,y:s}=Si(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function cc(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function LM(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||cc(a.addedNodes,i),o=o&&!cc(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function VM(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||cc(a.removedNodes,i),o=o&&!cc(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Jr=new Map;let im=0;function mw(){const n=window.devicePixelRatio;n!==im&&(im=n,Jr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function FM(n,t){Jr.size||window.addEventListener("resize",mw),Jr.set(n,t)}function BM(n){Jr.delete(n),Jr.size||window.removeEventListener("resize",mw)}function UM(n,t,e){const i=n.canvas,s=i&&kh(i);if(!s)return;const r=qb((a,c)=>{const l=s.clientWidth;e(a,c),l<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(s),FM(n,r),o}function ql(n,t,e){e&&e.disconnect(),t==="resize"&&BM(n)}function $M(n,t,e){const i=n.canvas,s=qb(r=>{n.ctx!==null&&e(NM(r,n))},n);return MM(i,t,s),s}class zM extends pw{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(DM(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[Ca])return!1;const i=e[Ca].initial;["height","width"].forEach(r=>{const o=i[r];nt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[Ca],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:LM,detach:VM,resize:UM}[e]||$M;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:ql,detach:ql,resize:ql}[e]||OM)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return DD(t,e,i,s)}isAttached(t){const e=t&&kh(t);return!!(e&&e.isConnected)}}function jM(n){return!Ph()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?CM:zM}class ze{constructor(){z(this,"x");z(this,"y");z(this,"active",!1);z(this,"options");z(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Is(this.x)&&Is(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}z(ze,"defaults",{}),z(ze,"defaultRoutes");function HM(n,t){const e=n.options.ticks,i=qM(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?GM(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return KM(t,l,r,o/s),l;const d=WM(r,t,s);if(o>0){let h,f;const g=o>1?Math.round((c-a)/(o-1)):null;for(sa(t,l,d,nt(g)?0:a-g,a),h=0,f=o-1;h<f;h++)sa(t,l,d,r[h],r[h+1]);return sa(t,l,d,c,nt(g)?t.length:c+g),l}return sa(t,l,d),l}function qM(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function WM(n,t,e){const i=YM(n),s=t.length/e;if(!i)return Math.max(s,1);const r=NR(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function GM(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function KM(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function sa(n,t,e,i,s){const r=Q(i,0),o=Math.min(Q(s,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),s&&(c=s-i,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function YM(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const XM=n=>n==="left"?"right":n==="right"?"left":n,sm=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,rm=(n,t)=>Math.min(t||n,n);function om(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function QM(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(s),l;if(!(e&&(i===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(s-1))/2,c+=s<t?l:-l,c<r-a||c>o+a)))return c}function JM(n,t){dt(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function nr(n){return n.drawTicks?n.tickLength:0}function am(n,t){if(!n.display)return 0;const e=zt(n.font,t),i=ue(n.padding);return(It(n.text)?n.text.length:1)*e.lineHeight+i.height}function ZM(n,t){return mi(n,{scale:t,type:"scale"})}function t1(n,t,e){return mi(n,{tick:e,index:t,type:"tick"})}function e1(n,t,e){let i=Eh(n);return(e&&t!=="right"||!e&&t==="right")&&(i=XM(i)),i}function n1(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,g,y;const _=o-s,v=a-r;if(n.isHorizontal()){if(g=se(i,r,a),rt(e)){const I=Object.keys(e)[0],k=e[I];y=d[I].getPixelForValue(k)+_-t}else e==="center"?y=(l.bottom+l.top)/2+_-t:y=sm(n,e,t);f=a-r}else{if(rt(e)){const I=Object.keys(e)[0],k=e[I];g=d[I].getPixelForValue(k)-v+t}else e==="center"?g=(l.left+l.right)/2-v+t:g=sm(n,e,t);y=se(i,o,s),h=e==="left"?-Nt:Nt}return{titleX:g,titleY:y,maxWidth:f,rotation:h}}class Ki extends ze{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=Te(t,Number.POSITIVE_INFINITY),e=Te(e,Number.NEGATIVE_INFINITY),i=Te(i,Number.POSITIVE_INFINITY),s=Te(s,Number.NEGATIVE_INFINITY),{min:Te(t,i),max:Te(e,s),minDefined:Dt(t),maxDefined:Dt(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:Te(e,Te(i,e)),max:Te(i,Te(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){mt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=uD(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?om(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=HM(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){mt(this.options.afterUpdate,[this])}beforeSetDimensions(){mt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){mt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),mt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){mt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=mt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){mt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){mt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=rm(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,g=qt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:g/(i-1),h+6>a&&(a=g/(i-(t.offset?.5:1)),c=this.maxHeight-nr(t.grid)-e.padding-am(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=bh(Math.min(Math.asin(qt((d.highest.height+6)/a,-1,1)),Math.asin(qt(c/l,-1,1))-Math.asin(qt(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){mt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){mt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=am(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=nr(r)+c):(t.height=this.maxHeight,t.width=nr(r)+c),i.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),g=i.padding*2,y=Be(this.labelRotation),_=Math.cos(y),v=Math.sin(y);if(a){const I=i.mirror?0:v*h.width+_*f.height;t.height=Math.min(this.maxHeight,t.height+I+g)}else{const I=i.mirror?0:_*h.width+v*f.height;t.width=Math.min(this.maxWidth,t.width+I+g)}this._calculatePadding(l,d,v,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,g=0;c?l?(f=s*t.width,g=i*e.height):(f=i*t.height,g=s*e.width):r==="start"?g=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,g=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((g-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){mt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)nt(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=om(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/rm(e,i));let l=0,d=0,h,f,g,y,_,v,I,k,D,M,N;for(h=0;h<e;h+=c){if(y=t[h].label,_=this._resolveTickFontOptions(h),s.font=v=_.string,I=r[v]=r[v]||{data:{},gc:[]},k=_.lineHeight,D=M=0,!nt(y)&&!It(y))D=oc(s,I.data,I.gc,D,y),M=k;else if(It(y))for(f=0,g=y.length;f<g;++f)N=y[f],!nt(N)&&!It(N)&&(D=oc(s,I.data,I.gc,D,N),M+=k);o.push(D),a.push(M),l=Math.max(D,l),d=Math.max(M,d)}JM(r,e);const F=o.indexOf(l),T=a.indexOf(d),b=E=>({width:o[E]||0,height:a[E]||0});return{first:b(0),last:b(e-1),widest:b(F),highest:b(T),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return BR(this._alignToPixels?Ei(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=t1(this.getContext(),t,i))}return this.$context||(this.$context=ZM(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Be(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=nr(r),g=[],y=a.setContext(this.getContext()),_=y.display?y.width:0,v=_/2,I=function(ht){return Ei(i,ht,_)};let k,D,M,N,F,T,b,E,S,x,P,A;if(o==="top")k=I(this.bottom),T=this.bottom-f,E=k-v,x=I(t.top)+v,A=t.bottom;else if(o==="bottom")k=I(this.top),x=t.top,A=I(t.bottom)-v,T=k+v,E=this.top+f;else if(o==="left")k=I(this.right),F=this.right-f,b=k-v,S=I(t.left)+v,P=t.right;else if(o==="right")k=I(this.left),S=t.left,P=I(t.right)-v,F=k+v,b=this.left+f;else if(e==="x"){if(o==="center")k=I((t.top+t.bottom)/2+.5);else if(rt(o)){const ht=Object.keys(o)[0],ft=o[ht];k=I(this.chart.scales[ht].getPixelForValue(ft))}x=t.top,A=t.bottom,T=k+v,E=T+f}else if(e==="y"){if(o==="center")k=I((t.left+t.right)/2);else if(rt(o)){const ht=Object.keys(o)[0],ft=o[ht];k=I(this.chart.scales[ht].getPixelForValue(ft))}F=k-v,b=F-f,S=t.left,P=t.right}const ot=Q(s.ticks.maxTicksLimit,h),et=Math.max(1,Math.ceil(h/ot));for(D=0;D<h;D+=et){const ht=this.getContext(D),ft=r.setContext(ht),Gt=a.setContext(ht),Lt=ft.lineWidth,on=ft.color,Yi=Gt.dash||[],de=Gt.dashOffset,xt=ft.tickWidth,an=ft.tickColor,De=ft.tickBorderDash||[],cn=ft.tickBorderDashOffset;M=QM(this,D,c),M!==void 0&&(N=Ei(i,M,Lt),l?F=b=S=P=N:T=E=x=A=N,g.push({tx1:F,ty1:T,tx2:b,ty2:E,x1:S,y1:x,x2:P,y2:A,width:Lt,color:on,borderDash:Yi,borderDashOffset:de,tickWidth:xt,tickColor:an,tickBorderDash:De,tickBorderDashOffset:cn}))}return this._ticksLength=h,this._borderValue=k,g}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=nr(i.grid),g=f+d,y=h?-d:g,_=-Be(this.labelRotation),v=[];let I,k,D,M,N,F,T,b,E,S,x,P,A="middle";if(s==="top")F=this.bottom-y,T=this._getXAxisLabelAlignment();else if(s==="bottom")F=this.top+y,T=this._getXAxisLabelAlignment();else if(s==="left"){const et=this._getYAxisLabelAlignment(f);T=et.textAlign,N=et.x}else if(s==="right"){const et=this._getYAxisLabelAlignment(f);T=et.textAlign,N=et.x}else if(e==="x"){if(s==="center")F=(t.top+t.bottom)/2+g;else if(rt(s)){const et=Object.keys(s)[0],ht=s[et];F=this.chart.scales[et].getPixelForValue(ht)+g}T=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")N=(t.left+t.right)/2-g;else if(rt(s)){const et=Object.keys(s)[0],ht=s[et];N=this.chart.scales[et].getPixelForValue(ht)}T=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?A="top":c==="end"&&(A="bottom"));const ot=this._getLabelSizes();for(I=0,k=a.length;I<k;++I){D=a[I],M=D.label;const et=r.setContext(this.getContext(I));b=this.getPixelForTick(I)+r.labelOffset,E=this._resolveTickFontOptions(I),S=E.lineHeight,x=It(M)?M.length:1;const ht=x/2,ft=et.color,Gt=et.textStrokeColor,Lt=et.textStrokeWidth;let on=T;o?(N=b,T==="inner"&&(I===k-1?on=this.options.reverse?"left":"right":I===0?on=this.options.reverse?"right":"left":on="center"),s==="top"?l==="near"||_!==0?P=-x*S+S/2:l==="center"?P=-ot.highest.height/2-ht*S+S:P=-ot.highest.height+S/2:l==="near"||_!==0?P=S/2:l==="center"?P=ot.highest.height/2-ht*S:P=ot.highest.height-x*S,h&&(P*=-1),_!==0&&!et.showLabelBackdrop&&(N+=S/2*Math.sin(_))):(F=b,P=(1-x)*S/2);let Yi;if(et.showLabelBackdrop){const de=ue(et.backdropPadding),xt=ot.heights[I],an=ot.widths[I];let De=P-de.top,cn=0-de.left;switch(A){case"middle":De-=xt/2;break;case"bottom":De-=xt;break}switch(T){case"center":cn-=an/2;break;case"right":cn-=an;break;case"inner":I===k-1?cn-=an:I>0&&(cn-=an/2);break}Yi={left:cn,top:De,width:an+de.width,height:xt+de.height,color:et.backdropColor}}v.push({label:M,font:E,textOffset:P,options:{rotation:_,color:ft,strokeColor:Gt,strokeWidth:Lt,textAlign:on,textBaseline:A,translation:[N,F],backdrop:Yi}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Be(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?s?(d=this.right+r,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?s?(d=this.left+r,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const c=s[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=Ei(t,this.left,o)-o/2,d=Ei(t,this.right,a)+a/2,h=f=c):(h=Ei(t,this.top,o)-o/2,f=Ei(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&zc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Hi(i,l,0,d,c,a)}s&&jc(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=zt(i.font),o=ue(i.padding),a=i.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||rt(e)?(c+=o.bottom,It(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=n1(this,c,e,a);Hi(t,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:e1(a,e,s),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Q(t.grid&&t.grid.z,-1),s=Q(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ki.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return zt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class ra{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;r1(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,i1(t,o,i),this.override&&Tt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Tt[s]&&(delete Tt[s][i],this.override&&delete ji[i])}}function i1(n,t,e){const i=Kr(Object.create(null),[e?Tt.get(e):{},Tt.get(t),n.defaults]);Tt.set(t,i),n.defaultRoutes&&s1(t,n.defaultRoutes),n.descriptors&&Tt.describe(t,n.descriptors)}function s1(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Tt.route(r,s,c,a)})}function r1(n){return"id"in n&&"defaults"in n}class o1{constructor(){this.controllers=new ra(Ue,"datasets",!0),this.elements=new ra(ze,"elements"),this.plugins=new ra(Object,"plugins"),this.scales=new ra(Ki,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):dt(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=_h(t);mt(i["before"+s],[],i),e[t](i),mt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var qe=new o1;class a1{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],c=[e,s,r.options];if(mt(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){nt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Q(i.options&&i.options.plugins,{}),r=c1(i);return s===!1&&!e?[]:u1(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function c1(n){const t={},e=[],i=Object.keys(qe.plugins.items);for(let r=0;r<i.length;r++)e.push(qe.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function l1(n,t){return!t&&n===!1?null:n===!0?{}:n}function u1(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=l1(i[c],s);l!==null&&r.push({plugin:a,options:d1(n.config,{plugin:a,local:e[c]},l,o)})}return r}function d1(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Cu(n,t){const e=Tt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function h1(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function f1(n,t){return n===t?"_index_":"_value_"}function cm(n){if(n==="x"||n==="y"||n==="r")return n}function p1(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Ru(n,...t){if(cm(n))return n;for(const e of t){const i=e.axis||p1(e.position)||n.length>1&&cm(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function lm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function g1(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return lm(n,"x",e[0])||lm(n,"y",e[0])}return{}}function m1(n,t){const e=ji[n.type]||{scales:{}},i=t.scales||{},s=Cu(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!rt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Ru(o,a,g1(o,n),Tt.scales[a.type]),l=f1(c,s),d=e.scales||{};r[o]=Pr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||Cu(a,t),d=(ji[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=h1(h,c),g=o[f+"AxisID"]||f;r[g]=r[g]||Object.create(null),Pr(r[g],[{axis:f},i[g],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Pr(a,[Tt.scales[a.type],Tt.scale])}),r}function yw(n){const t=n.options||(n.options={});t.plugins=Q(t.plugins,{}),t.scales=m1(n,t)}function vw(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function y1(n){return n=n||{},n.data=vw(n.data),yw(n),n}const um=new Map,_w=new Set;function oa(n,t){let e=um.get(n);return e||(e=t(),um.set(n,e),_w.add(e)),e}const ir=(n,t,e)=>{const i=ui(t,e);i!==void 0&&n.add(i)};class v1{constructor(t){this._config=y1(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=vw(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),yw(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return oa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return oa(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return oa(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return oa(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>ir(c,t,h))),d.forEach(h=>ir(c,s,h)),d.forEach(h=>ir(c,ji[r]||{},h)),d.forEach(h=>ir(c,Tt,h)),d.forEach(h=>ir(c,xu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),_w.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,ji[e]||{},Tt.datasets[e]||{},{type:e},Tt,xu]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=dm(this._resolverCache,t,s);let c=o;if(b1(o,e)){r.$shared=!1,i=di(i)?i():i;const l=this.createResolver(t,i,a);c=Ts(o,i,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,i=[""],s){const{resolver:r}=dm(this._resolverCache,t,i);return rt(e)?Ts(r,e,void 0,s):r}}function dm(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:Ah(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const _1=n=>rt(n)&&Object.getOwnPropertyNames(n).some(t=>di(n[t]));function b1(n,t){const{isScriptable:e,isIndexable:i}=Qb(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(di(a)||_1(a))||o&&It(a))return!0}return!1}var w1="4.5.1";const E1=["top","bottom","left","right","chartArea"];function hm(n,t){return n==="top"||n==="bottom"||E1.indexOf(n)===-1&&t==="x"}function fm(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function pm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),mt(e&&e.onComplete,[n],t)}function I1(n){const t=n.chart,e=t.options.animation;mt(e&&e.onProgress,[n],t)}function bw(n){return Ph()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Ra={},gm=n=>{const t=bw(n);return Object.values(Ra).filter(e=>e.canvas===t).pop()};function T1(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function A1(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class Ke{static register(...t){qe.add(...t),mm()}static unregister(...t){qe.remove(...t),mm()}constructor(t,e){const i=this.config=new v1(e),s=bw(t),r=gm(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||jM(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=SR(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new a1,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=jR(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Ra[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}fn.listen(this,"complete",pm),fn.listen(this,"progress",I1),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return nt(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return qe}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Fg(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ng(this.canvas,this.ctx),this}stop(){return fn.stop(this),this}resize(t,e){fn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Fg(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),mt(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};dt(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=Ru(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),dt(r,o=>{const a=o.options,c=a.id,l=Ru(c,a),d=Q(a.type,o.dtype);(a.position===void 0||hm(a.position,l)!==hm(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===d)h=i[c];else{const f=qe.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),dt(s,(o,a)=>{o||delete i[a]}),dt(i,o=>{ce.configure(this,o,o.options),ce.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(fm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Cu(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=qe.getController(a),{datasetElementType:l,dataElementType:d}=Tt.datasets[a];Object.assign(c,{dataElementType:qe.getElement(d),datasetElementType:l&&qe.getElement(l)}),o.controller=new c(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){dt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||dt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(fm("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){dt(this.scales,t=>{ce.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Sg(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;T1(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!Sg(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ce.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],dt(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,di(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(fn.has(this)?this.attached&&!fn.running(this)&&fn.start(this):(this.draw(),pm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=cw(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&zc(e,s),t.controller.draw(),s&&jc(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return Tn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=EM.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=mi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Yr(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),fn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Ng(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ra[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};dt(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},s=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){dt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},dt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!ic(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),c=DR(t),l=A1(t,this._lastEvent,i,c);i&&(this._lastEvent=null,mt(r.onHover,[t,a,this],this),c&&mt(r.onClick,[t,a,this],this));const d=!ic(a,s);return(d||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,d}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}z(Ke,"defaults",Tt),z(Ke,"instances",Ra),z(Ke,"overrides",ji),z(Ke,"registry",qe),z(Ke,"version",w1),z(Ke,"getChart",gm);function mm(){return dt(Ke.instances,n=>n._plugins.invalidate())}function S1(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,oe(i-e));if(n.beginPath(),n.arc(s,r,o-l/2,i+h/2,e-h/2),a>0){const f=Math.min(l/a,oe(i-e));n.arc(s,r,a+l/2,e-f/2,i+f/2,!0)}else{const f=Math.min(l/2,o*oe(i-e));if(d==="round")n.arc(s,r,f,e-lt/2,i+lt/2,!0);else if(d==="bevel"){const g=2*f*f,y=-g*Math.cos(e+lt/2)+s,_=-g*Math.sin(e+lt/2)+r,v=g*Math.cos(i+lt/2)+s,I=g*Math.sin(i+lt/2)+r;n.lineTo(y,_),n.lineTo(v,I)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function x1(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=s/a;n.beginPath(),n.arc(r,o,a,i-l,e+l),c>s?(l=s/c,n.arc(r,o,c,e+l,i-l,!0)):n.arc(r,o,s,e+Nt,i-Nt),n.closePath(),n.clip()}function P1(n){return Th(n,["outerStart","outerEnd","innerStart","innerEnd"])}function k1(n,t,e,i){const s=P1(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=c=>{const l=(e-Math.min(r,c))*i/2;return qt(c,0,Math.min(r,l))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:qt(s.innerStart,0,o),innerEnd:qt(s.innerEnd,0,o)}}function es(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function lc(n,t,e,i,s,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+i+e-l,0),f=d>0?d+i+e+l:0;let g=0;const y=s-c;if(i){const et=d>0?d-i:0,ht=h>0?h-i:0,ft=(et+ht)/2,Gt=ft!==0?y*ft/(ft+i):y;g=(y-Gt)/2}const _=Math.max(.001,y*h-e/lt)/h,v=(y-_)/2,I=c+v+g,k=s-v-g,{outerStart:D,outerEnd:M,innerStart:N,innerEnd:F}=k1(t,f,h,k-I),T=h-D,b=h-M,E=I+D/T,S=k-M/b,x=f+N,P=f+F,A=I+N/x,ot=k-F/P;if(n.beginPath(),r){const et=(E+S)/2;if(n.arc(o,a,h,E,et),n.arc(o,a,h,et,S),M>0){const Lt=es(b,S,o,a);n.arc(Lt.x,Lt.y,M,S,k+Nt)}const ht=es(P,k,o,a);if(n.lineTo(ht.x,ht.y),F>0){const Lt=es(P,ot,o,a);n.arc(Lt.x,Lt.y,F,k+Nt,ot+Math.PI)}const ft=(k-F/f+(I+N/f))/2;if(n.arc(o,a,f,k-F/f,ft,!0),n.arc(o,a,f,ft,I+N/f,!0),N>0){const Lt=es(x,A,o,a);n.arc(Lt.x,Lt.y,N,A+Math.PI,I-Nt)}const Gt=es(T,I,o,a);if(n.lineTo(Gt.x,Gt.y),D>0){const Lt=es(T,E,o,a);n.arc(Lt.x,Lt.y,D,I-Nt,E)}}else{n.moveTo(o,a);const et=Math.cos(E)*h+o,ht=Math.sin(E)*h+a;n.lineTo(et,ht);const ft=Math.cos(S)*h+o,Gt=Math.sin(S)*h+a;n.lineTo(ft,Gt)}n.closePath()}function C1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){lc(n,t,e,i,c,s);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%bt||bt))}return lc(n,t,e,i,c,s),n.fill(),c}function R1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:g}=c,y=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,y?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let _=t.endAngle;if(r){lc(n,t,e,i,_,s);for(let v=0;v<r;++v)n.stroke();isNaN(a)||(_=o+(a%bt||bt))}y&&x1(n,t,_),c.selfJoin&&_-o>=lt&&g===0&&d!=="miter"&&S1(n,t,_),r||(lc(n,t,e,i,_,s),n.stroke())}class gr extends ze{constructor(e){super();z(this,"circumference");z(this,"endAngle");z(this,"fullCircles");z(this,"innerRadius");z(this,"outerRadius");z(this,"pixelMargin");z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=$b(r,{x:e,y:i}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),g=(this.options.spacing+this.options.borderWidth)/2,y=Q(f,l-c),_=Xr(o,c,l)&&c!==l,v=y>=bt||_,I=En(a,d+g,h+g);return v&&I}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:i+Math.cos(h)*f,y:s+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>bt?Math.floor(s/bt):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(lt,s||0)),d=r*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,C1(e,this,d,o,a),R1(e,this,d,o,a),e.restore()}}z(gr,"id","arc"),z(gr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),z(gr,"defaultRoutes",{backgroundColor:"backgroundColor"}),z(gr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function ww(n,t,e=t){n.lineCap=Q(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Q(e.borderDash,t.borderDash)),n.lineDashOffset=Q(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Q(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Q(e.borderWidth,t.borderWidth),n.strokeStyle=Q(e.borderColor,t.borderColor)}function D1(n,t,e){n.lineTo(e.x,e.y)}function M1(n){return n.stepped?eD:n.tension||n.cubicInterpolationMode==="monotone"?nD:D1}function Ew(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,c=Math.max(s,o),l=Math.min(r,a),d=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!d?i+l-c:l-c}}function O1(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:c,ilen:l}=Ew(s,e,i),d=M1(r);let{move:h=!0,reverse:f}=i||{},g,y,_;for(g=0;g<=l;++g)y=s[(a+(f?l-g:g))%o],!y.skip&&(h?(n.moveTo(y.x,y.y),h=!1):d(n,_,y,f,r.stepped),_=y);return c&&(y=s[(a+(f?l:0))%o],d(n,_,y,f,r.stepped)),!!c}function N1(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=Ew(s,e,i),{move:c=!0,reverse:l}=i||{};let d=0,h=0,f,g,y,_,v,I;const k=M=>(o+(l?a-M:M))%r,D=()=>{_!==v&&(n.lineTo(d,v),n.lineTo(d,_),n.lineTo(d,I))};for(c&&(g=s[k(0)],n.moveTo(g.x,g.y)),f=0;f<=a;++f){if(g=s[k(f)],g.skip)continue;const M=g.x,N=g.y,F=M|0;F===y?(N<_?_=N:N>v&&(v=N),d=(h*d+M)/++h):(D(),n.lineTo(M,N),y=F,h=0,_=v=N),I=N}D()}function Du(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?N1:O1}function L1(n){return n.stepped?OD:n.tension||n.cubicInterpolationMode==="monotone"?ND:xi}function V1(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),ww(n,t.options),n.stroke(s)}function F1(n,t,e,i){const{segments:s,options:r}=t,o=Du(t);for(const a of s)ww(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const B1=typeof Path2D=="function";function U1(n,t,e,i){B1&&!t.options.segment?V1(n,t,e,i):F1(n,t,e,i)}class Wn extends ze{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;SD(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=$D(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=aw(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=L1(i);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],g=r[h],y=r[f];if(g===y){a.push(g);continue}const _=Math.abs((s-g[e])/(y[e]-g[e])),v=c(g,y,_,i.stepped);v[e]=t[e],a.push(v)}return a.length===1?a[0]:a}pathSegment(t,e,i){return Du(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=Du(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),U1(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}z(Wn,"id","line"),z(Wn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),z(Wn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),z(Wn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function ym(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class Da extends ze{constructor(e){super();z(this,"parsed");z(this,"skip");z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return ym(this,e,"x",i)}inYRange(e,i){return ym(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!Tn(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,Pu(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}z(Da,"id","point"),z(Da,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),z(Da,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Iw(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,s),c=Math.max(e,s),l=i-h,d=i+h):(h=r/2,a=e-h,c=e+h,l=Math.min(i,s),d=Math.max(i,s)),{left:a,top:l,right:c,bottom:d}}function Gn(n,t,e,i){return n?0:qt(t,e,i)}function $1(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=Xb(i);return{t:Gn(s.top,r.top,0,e),r:Gn(s.right,r.right,0,t),b:Gn(s.bottom,r.bottom,0,e),l:Gn(s.left,r.left,0,t)}}function z1(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Li(s),o=Math.min(t,e),a=n.borderSkipped,c=i||rt(s);return{topLeft:Gn(!c||a.top||a.left,r.topLeft,0,o),topRight:Gn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Gn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Gn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function j1(n){const t=Iw(n),e=t.right-t.left,i=t.bottom-t.top,s=$1(n,e/2,i/2),r=z1(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function Wl(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&Iw(n,i);return a&&(s||En(t,a.left,a.right))&&(r||En(e,a.top,a.bottom))}function H1(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function q1(n,t){n.rect(t.x,t.y,t.w,t.h)}function Gl(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class Ma extends ze{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=j1(this),a=H1(o.radius)?Qr:q1;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Gl(o,e,r)),t.clip(),a(t,Gl(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Gl(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return Wl(this,t,e,i)}inXRange(t,e){return Wl(this,t,null,e)}inYRange(t,e){return Wl(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}z(Ma,"id","bar"),z(Ma,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),z(Ma,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var W1=Object.freeze({__proto__:null,ArcElement:gr,BarElement:Ma,LineElement:Wn,PointElement:Da});const Mu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],vm=Mu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Tw(n){return Mu[n%Mu.length]}function Aw(n){return vm[n%vm.length]}function G1(n,t){return n.borderColor=Tw(t),n.backgroundColor=Aw(t),++t}function K1(n,t){return n.backgroundColor=n.data.map(()=>Tw(t++)),t}function Y1(n,t){return n.backgroundColor=n.data.map(()=>Aw(t++)),t}function X1(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof Ci?t=K1(e,t):s instanceof Dr?t=Y1(e,t):s&&(t=G1(e,t))}}function _m(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function Q1(n){return n&&(n.borderColor||n.backgroundColor)}function J1(){return Tt.borderColor!=="rgba(0,0,0,0.1)"||Tt.backgroundColor!=="rgba(0,0,0,0.1)"}var Z1={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=_m(i)||Q1(s)||r&&_m(r)||J1();if(!e.forceOverride&&o)return;const a=X1(n);i.forEach(a)}};function tO(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,g,y,_;for(o[c++]=n[d],h=0;h<r-2;h++){let v=0,I=0,k;const D=Math.floor((h+1)*a)+1+t,M=Math.min(Math.floor((h+2)*a)+1,e)+t,N=M-D;for(k=D;k<M;k++)v+=n[k].x,I+=n[k].y;v/=N,I/=N;const F=Math.floor(h*a)+1+t,T=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:E}=n[d];for(g=y=-1,k=F;k<T;k++)y=.5*Math.abs((b-v)*(n[k].y-E)-(b-n[k].x)*(I-E)),y>g&&(g=y,f=n[k],_=k);o[c++]=f,d=_}return o[c++]=n[l],o}function eO(n,t,e,i){let s=0,r=0,o,a,c,l,d,h,f,g,y,_;const v=[],I=t+e-1,k=n[t].x,M=n[I].x-k;for(o=t;o<t+e;++o){a=n[o],c=(a.x-k)/M*i,l=a.y;const N=c|0;if(N===d)l<y?(y=l,h=o):l>_&&(_=l,f=o),s=(r*s+a.x)/++r;else{const F=o-1;if(!nt(h)&&!nt(f)){const T=Math.min(h,f),b=Math.max(h,f);T!==g&&T!==F&&v.push({...n[T],x:s}),b!==g&&b!==F&&v.push({...n[b],x:s})}o>0&&F!==g&&v.push(n[F]),v.push(a),d=N,r=0,y=_=l,h=f=g=o}}return v}function Sw(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function bm(n){n.data.datasets.forEach(t=>{Sw(t)})}function nO(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(i=qt(In(t,r.axis,o).lo,0,e-1)),l?s=qt(In(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var iO={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){bm(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,c=n.getDatasetMeta(r),l=o||s.data;if(fr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=nO(c,l);const g=e.threshold||4*i;if(f<=g){Sw(s);return}nt(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let y;switch(e.algorithm){case"lttb":y=tO(l,h,f,i,e);break;case"min-max":y=eO(l,h,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=y})},destroy(n){bm(n)}};function sO(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:c,end:l}=a;l=Wc(c,l,s);const d=Ou(e,s[c],s[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:s[c],end:s[l]});continue}const h=aw(t,d);for(const f of h){const g=Ou(e,r[f.start],r[f.end],f.loop),y=ow(a,s,g);for(const _ of y)o.push({source:_,target:f,start:{[e]:wm(d,g,"start",Math.max)},end:{[e]:wm(d,g,"end",Math.min)}})}}return o}function Ou(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=oe(s),r=oe(r)),{property:n,start:s,end:r}}function rO(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Wc(o,a,s);const c=s[o],l=s[a];i!==null?(r.push({x:c.x,y:i}),r.push({x:l.x,y:i})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function Wc(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function wm(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function xw(n,t){let e=[],i=!1;return It(n)?(i=!0,e=n):e=rO(n,t),e.length?new Wn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Em(n){return n&&n.fill!==!1}function oO(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Dt(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function aO(n,t,e){const i=dO(n);if(rt(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Dt(s)&&Math.floor(s)===s?cO(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function cO(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function lO(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:rt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function uO(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:rt(n)?i=n.value:i=t.getBaseValue(),i}function dO(n){const t=n.options,e=t.fill;let i=Q(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function hO(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=fO(t,e);a.push(xw({x:null,y:t.bottom},i));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)pO(s,o[d],a)}return new Wn({points:s,options:{}})}function fO(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function pO(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:c}=gO(r,t,"x");if(!(!c||o&&a)){if(o)i.unshift(c);else if(n.push(c),!a)break}}n.push(...i)}function gO(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(En(s,h,f)){a=s===h,c=s===f;break}}return{first:a,last:c,point:i}}class Pw{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:bt},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function mO(n){const{chart:t,fill:e,line:i}=n;if(Dt(e))return yO(t,e);if(e==="stack")return hO(n);if(e==="shape")return!0;const s=vO(n);return s instanceof Pw?s:xw(s,i)}function yO(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function vO(n){return(n.scale||{}).getPointPositionForValue?bO(n):_O(n)}function _O(n){const{scale:t={},fill:e}=n,i=lO(e,t);if(Dt(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function bO(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=uO(e,t,r),a=[];if(i.grid.circular){const c=t.getPointPositionForValue(0,r);return new Pw({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)a.push(t.getPointPositionForValue(c,o));return a}function Kl(n,t,e){const i=mO(t),{chart:s,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:g=h}=d||{},y=s.getDatasetMeta(r),_=cw(s,y);i&&o.points.length&&(zc(n,e),wO(n,{line:o,target:i,above:f,below:g,area:e,scale:a,axis:c,clip:_}),jc(n))}function wO(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==s&&(l==="x"?(Im(n,i,o.top),Yl(n,{line:e,target:i,color:s,scale:a,property:l,clip:c}),n.restore(),n.save(),Im(n,i,o.bottom)):l==="y"&&(Tm(n,i,o.left),Yl(n,{line:e,target:i,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Tm(n,i,o.right),d=s)),Yl(n,{line:e,target:i,color:d,scale:a,property:l,clip:c}),n.restore()}function Im(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[Wc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Tm(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[Wc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Yl(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,c=sO(e,i,s);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:g=r}={}}=l,y=i!==!0;n.save(),n.fillStyle=g,EO(n,o,a,y&&Ou(s,h,f)),n.beginPath();const _=!!e.pathSegment(n,l);let v;if(y){_?n.closePath():Am(n,i,f,s);const I=!!i.pathSegment(n,d,{move:_,reverse:!0});v=_&&I,v||Am(n,i,h,s)}n.closePath(),n.fill(v?"evenodd":"nonzero"),n.restore()}}function EO(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=s.top,d=a,h=s.bottom):(c=s.left,l=o,d=s.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Am(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var IO={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,c;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Wn&&(c={visible:n.isDatasetVisible(o),index:o,fill:aO(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=oO(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&Kl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;Em(r)&&Kl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Em(i)||e.drawTime!=="beforeDatasetDraw"||Kl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Sm=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},TO=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class xm extends ze{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=mt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=zt(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Sm(i,r);let l,d;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=s+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,g=-d;return this.legendItems.forEach((y,_)=>{const v=i+e/2+r.measureText(y.text).width;(_===0||l[l.length-1]+v+2*a>o)&&(h+=d,l[l.length-(_>0?0:1)]=0,g+=d,f++),c[_]={left:0,top:g,row:f,width:v,height:s},l[l.length-1]+=v+a}),h}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,g=0,y=0,_=0;return this.legendItems.forEach((v,I)=>{const{itemWidth:k,itemHeight:D}=AO(i,e,r,v,s);I>0&&g+D+2*a>d&&(h+=f+a,l.push({width:f,height:g}),y+=f+a,_++,f=g=0),c[I]={left:y,top:g,col:_,width:k,height:D},f=Math.max(f,k),g+=D+a}),h+=f,l.push({width:f,height:g}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=ps(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=se(i,this.left+s,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=se(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+t+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=se(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=se(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;zc(t,this),this._draw(),jc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Tt.color,c=ps(t.rtl,this.left,this.width),l=zt(o.font),{padding:d}=o,h=l.size,f=h/2;let g;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:y,boxHeight:_,itemHeight:v}=Sm(o,h),I=function(F,T,b){if(isNaN(y)||y<=0||isNaN(_)||_<0)return;s.save();const E=Q(b.lineWidth,1);if(s.fillStyle=Q(b.fillStyle,a),s.lineCap=Q(b.lineCap,"butt"),s.lineDashOffset=Q(b.lineDashOffset,0),s.lineJoin=Q(b.lineJoin,"miter"),s.lineWidth=E,s.strokeStyle=Q(b.strokeStyle,a),s.setLineDash(Q(b.lineDash,[])),o.usePointStyle){const S={radius:_*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:E},x=c.xPlus(F,y/2),P=T+f;Yb(s,S,x,P,o.pointStyleWidth&&y)}else{const S=T+Math.max((h-_)/2,0),x=c.leftForLtr(F,y),P=Li(b.borderRadius);s.beginPath(),Object.values(P).some(A=>A!==0)?Qr(s,{x,y:S,w:y,h:_,radius:P}):s.rect(x,S,y,_),s.fill(),E!==0&&s.stroke()}s.restore()},k=function(F,T,b){Hi(s,b.text,F,T+v/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},D=this.isHorizontal(),M=this._computeTitleHeight();D?g={x:se(r,this.left+d,this.right-i[0]),y:this.top+d+M,line:0}:g={x:this.left+d,y:se(r,this.top+M+d,this.bottom-e[0].height),line:0},iw(this.ctx,t.textDirection);const N=v+d;this.legendItems.forEach((F,T)=>{s.strokeStyle=F.fontColor,s.fillStyle=F.fontColor;const b=s.measureText(F.text).width,E=c.textAlign(F.textAlign||(F.textAlign=o.textAlign)),S=y+f+b;let x=g.x,P=g.y;c.setWidth(this.width),D?T>0&&x+S+d>this.right&&(P=g.y+=N,g.line++,x=g.x=se(r,this.left+d,this.right-i[g.line])):T>0&&P+N>this.bottom&&(x=g.x=x+e[g.line].width+d,g.line++,P=g.y=se(r,this.top+M+d,this.bottom-e[g.line].height));const A=c.x(x);if(I(A,P,F),x=HR(E,x+y+f,D?x+S:this.right,t.rtl),k(c.x(x),P,F),D)g.x+=S+d;else if(typeof F.text!="string"){const ot=l.lineHeight;g.y+=kw(F,ot)+d}else g.y+=N}),sw(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=zt(e.font),s=ue(e.padding);if(!e.display)return;const r=ps(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=i.size/2,l=s.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=se(t.align,h,this.right-f);else{const y=this.columnSizes.reduce((_,v)=>Math.max(_,v.height),0);d=l+se(t.align,this.top,this.bottom-y-t.labels.padding-this._computeTitleHeight())}const g=se(a,h,h+f);o.textAlign=r.textAlign(Eh(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Hi(o,e.text,g,d,i)}_computeTitleHeight(){const t=this.options.title,e=zt(t.font),i=ue(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(En(t,this.left,this.right)&&En(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],En(t,s.left,s.left+s.width)&&En(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!PO(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=TO(s,i);s&&!r&&mt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&mt(e.onHover,[t,i,this],this)}else i&&mt(e.onClick,[t,i,this],this)}}function AO(n,t,e,i,s){const r=SO(i,n,t,e),o=xO(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function SO(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function xO(n,t,e){let i=n;return typeof t.text!="string"&&(i=kw(t,e)),i}function kw(n,t){const e=n.text?n.text.length:0;return t*e}function PO(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var kO={id:"legend",_element:xm,start(n,t,e){const i=n.legend=new xm({ctx:n.ctx,options:e,chart:n});ce.configure(n,i,e),ce.addBox(n,i)},stop(n){ce.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;ce.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=ue(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class Rh extends ze{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=It(i.text)?i.text.length:1;this._padding=ue(i.padding);const r=s*zt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=se(a,i,r),h=e+t,l=r-i):(o.position==="left"?(d=i+t,h=se(a,s,e),c=lt*-.5):(d=r-t,h=se(a,e,s),c=lt*.5),l=s-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=zt(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Hi(t,e.text,0,0,i,{color:e.color,maxWidth:c,rotation:l,textAlign:Eh(e.align),textBaseline:"middle",translation:[o,a]})}}function CO(n,t){const e=new Rh({ctx:n.ctx,options:t,chart:n});ce.configure(n,e,t),ce.addBox(n,e),n.titleBlock=e}var RO={id:"title",_element:Rh,start(n,t,e){CO(n,e)},stop(n){const t=n.titleBlock;ce.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;ce.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const aa=new WeakMap;var DO={id:"subtitle",start(n,t,e){const i=new Rh({ctx:n.ctx,options:e,chart:n});ce.configure(n,i,e),ce.addBox(n,i),aa.set(n,i)},stop(n){ce.removeBox(n,aa.get(n)),aa.delete(n)},beforeUpdate(n,t,e){const i=aa.get(n);ce.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const mr={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();i.add(c.x),s+=c.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,c)=>a+c)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Su(t,l);d<s&&(s=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,i=c.y}return{x:e,y:i}}};function He(n,t){return t&&(It(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function pn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function MO(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Pm(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=zt(t.bodyFont),l=zt(t.titleFont),d=zt(t.footerFont),h=r.length,f=s.length,g=i.length,y=ue(t.padding);let _=y.height,v=0,I=i.reduce((M,N)=>M+N.before.length+N.lines.length+N.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,h&&(_+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),I){const M=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;_+=g*M+(I-g)*c.lineHeight+(I-1)*t.bodySpacing}f&&(_+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let k=0;const D=function(M){v=Math.max(v,e.measureText(M).width+k)};return e.save(),e.font=l.string,dt(n.title,D),e.font=c.string,dt(n.beforeBody.concat(n.afterBody),D),k=t.displayColors?o+2+t.boxPadding:0,dt(i,M=>{dt(M.before,D),dt(M.lines,D),dt(M.after,D)}),k=0,e.font=d.string,dt(n.footer,D),e.restore(),v+=y.width,{width:v,height:_}}function OO(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function NO(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function LO(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),NO(l,n,t,e)&&(l="center"),l}function km(n,t,e){const i=e.yAlign||t.yAlign||OO(n,e);return{xAlign:e.xAlign||t.xAlign||LO(n,t,e,i),yAlign:i}}function VO(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function FO(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Cm(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=s+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:g}=Li(o);let y=VO(t,a);const _=FO(t,c,l);return c==="center"?a==="left"?y+=l:a==="right"&&(y-=l):a==="left"?y-=Math.max(d,f)+s:a==="right"&&(y+=Math.max(h,g)+s),{x:qt(y,0,i.width-t.width),y:qt(_,0,i.height-t.height)}}function ca(n,t,e){const i=ue(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Rm(n){return He([],pn(n))}function BO(n,t,e){return mi(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Dm(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Cw={beforeTitle:dn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:dn,beforeBody:dn,beforeLabel:dn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return nt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:dn,afterBody:dn,beforeFooter:dn,footer:dn,afterFooter:dn};function ye(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?Cw[t].call(e,i):s}class Nu extends ze{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new lw(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=BO(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=ye(i,"beforeTitle",this,t),r=ye(i,"title",this,t),o=ye(i,"afterTitle",this,t);let a=[];return a=He(a,pn(s)),a=He(a,pn(r)),a=He(a,pn(o)),a}getBeforeBody(t,e){return Rm(ye(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return dt(t,r=>{const o={before:[],lines:[],after:[]},a=Dm(i,r);He(o.before,pn(ye(a,"beforeLabel",this,r))),He(o.lines,ye(a,"label",this,r)),He(o.after,pn(ye(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Rm(ye(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=ye(i,"beforeFooter",this,t),r=ye(i,"footer",this,t),o=ye(i,"afterFooter",this,t);let a=[];return a=He(a,pn(s)),a=He(a,pn(r)),a=He(a,pn(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(MO(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,i))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,i))),dt(a,d=>{const h=Dm(t.callbacks,d);s.push(ye(h,"labelColor",this,d)),r.push(ye(h,"labelPointStyle",this,d)),o.push(ye(h,"labelTextColor",this,d))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=mr[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=Pm(this,i),l=Object.assign({},a,c),d=km(this.chart,i,l),h=Cm(i,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Li(a),{x:f,y:g}=t,{width:y,height:_}=e;let v,I,k,D,M,N;return r==="center"?(M=g+_/2,s==="left"?(v=f,I=v-o,D=M+o,N=M-o):(v=f+y,I=v+o,D=M-o,N=M+o),k=v):(s==="left"?I=f+Math.max(c,d)+o:s==="right"?I=f+y-Math.max(l,h)-o:I=this.caretX,r==="top"?(D=g,M=D-o,v=I-o,k=I+o):(D=g+_,M=D+o,v=I+o,k=I-o),N=D),{x1:v,x2:I,x3:k,y1:D,y2:M,y3:N}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=ps(i.rtl,this.x,this.width);for(t.x=ca(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=zt(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,d=zt(r.bodyFont),h=ca(this,"left",r),f=s.x(h),g=c<d.lineHeight?(d.lineHeight-c)/2:0,y=e.y+g;if(r.usePointStyle){const _={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=s.leftForLtr(f,l)+l/2,I=y+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Pu(t,_,v,I),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Pu(t,_,v,I)}else{t.lineWidth=rt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(f,l),v=s.leftForLtr(s.xPlus(f,1),l-2),I=Li(o.borderRadius);Object.values(I).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Qr(t,{x:_,y,w:l,h:c,radius:I}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Qr(t,{x:v,y:y+1,w:l-2,h:c-2,radius:I}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,y,l,c),t.strokeRect(_,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(v,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=i,h=zt(i.bodyFont);let f=h.lineHeight,g=0;const y=ps(i.rtl,this.x,this.width),_=function(b){e.fillText(b,y.x(t.x+g),t.y+f/2),t.y+=f+r},v=y.textAlign(o);let I,k,D,M,N,F,T;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=ca(this,v,i),e.fillStyle=i.bodyColor,dt(this.beforeBody,_),g=a&&v!=="right"?o==="center"?l/2+d:l+2+d:0,M=0,F=s.length;M<F;++M){for(I=s[M],k=this.labelTextColors[M],e.fillStyle=k,dt(I.before,_),D=I.lines,a&&D.length&&(this._drawColorBox(e,t,M,y,i),f=Math.max(h.lineHeight,c)),N=0,T=D.length;N<T;++N)_(D[N]),f=h.lineHeight;dt(I.after,_)}g=0,f=h.lineHeight,dt(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const c=ps(i.rtl,this.x,this.width);for(t.x=ca(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=c.textAlign(i.footerAlign),e.textBaseline="middle",o=zt(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=i,{topLeft:h,topRight:f,bottomLeft:g,bottomRight:y}=Li(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+l,c+d-y),e.quadraticCurveTo(a+l,c+d,a+l-y,c+d),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+g,c+d),e.quadraticCurveTo(a,c+d,a,c+d-g),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=mr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Pm(this,t),c=Object.assign({},o,this._size),l=km(e,t,c),d=Cm(t,c,l,e);(s._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=ue(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),iw(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),sw(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!ic(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),c=e||!ic(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=mr[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}z(Nu,"positioners",mr);var UO={id:"tooltip",_element:Nu,positioners:mr,afterInit(n,t,e){e&&(n.tooltip=new Nu({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Cw},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},$O=Object.freeze({__proto__:null,Colors:Z1,Decimation:iO,Filler:IO,Legend:kO,SubTitle:DO,Title:RO,Tooltip:UO});const zO=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function jO(n,t,e,i){const s=n.indexOf(t);if(s===-1)return zO(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const HO=(n,t)=>n===null?null:qt(Math.round(n),0,t);function Mm(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Lu extends Ki{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(nt(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:jO(i,t,Q(e,t),this._addedLabels),HO(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Mm.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}z(Lu,"id","category"),z(Lu,"defaults",{ticks:{callback:Mm}});function qO(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,g=r||1,y=d-1,{min:_,max:v}=t,I=!nt(o),k=!nt(a),D=!nt(l),M=(v-_)/(h+1);let N=Pg((v-_)/y/g)*g,F,T,b,E;if(N<1e-14&&!I&&!k)return[{value:_},{value:v}];E=Math.ceil(v/N)-Math.floor(_/N),E>y&&(N=Pg(E*N/y/g)*g),nt(c)||(F=Math.pow(10,c),N=Math.ceil(N*F)/F),s==="ticks"?(T=Math.floor(_/N)*N,b=Math.ceil(v/N)*N):(T=_,b=v),I&&k&&r&&VR((a-o)/r,N/1e3)?(E=Math.round(Math.min((a-o)/N,d)),N=(a-o)/E,T=o,b=a):D?(T=I?o:T,b=k?a:b,E=l-1,N=(b-T)/E):(E=(b-T)/N,kr(E,Math.round(E),N/1e3)?E=Math.round(E):E=Math.ceil(E));const S=Math.max(kg(N),kg(T));F=Math.pow(10,nt(c)?S:c),T=Math.round(T*F)/F,b=Math.round(b*F)/F;let x=0;for(I&&(f&&T!==o?(e.push({value:o}),T<o&&x++,kr(Math.round((T+x*N)*F)/F,o,Om(o,M,n))&&x++):T<o&&x++);x<E;++x){const P=Math.round((T+x*N)*F)/F;if(k&&P>a)break;e.push({value:P})}return k&&f&&b!==a?e.length&&kr(e[e.length-1].value,a,Om(a,M,n))?e[e.length-1].value=a:e.push({value:a}):(!k||b===a)&&e.push({value:b}),e}function Om(n,t,{horizontal:e,minRotation:i}){const s=Be(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class uc extends Ki{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return nt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=e?s:c,a=c=>r=i?r:c;if(t){const c=tn(s),l=tn(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(s-c)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=qO(s,r);return t.bounds==="ticks"&&Ub(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return wo(t,this.chart.options.locale,this.options.ticks.format)}}class Vu extends uc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Dt(t)?t:0,this.max=Dt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Be(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}z(Vu,"id","linear"),z(Vu,"defaults",{ticks:{callback:$c.formatters.numeric}});const Zr=n=>Math.floor(Hn(n)),Ti=(n,t)=>Math.pow(10,Zr(n)+t);function Nm(n){return n/Math.pow(10,Zr(n))===1}function Lm(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function WO(n,t){const e=t-n;let i=Zr(e);for(;Lm(n,t,i)>10;)i++;for(;Lm(n,t,i)<10;)i--;return Math.min(i,Zr(n))}function GO(n,{min:t,max:e}){t=Te(n.min,t);const i=[],s=Zr(t);let r=WO(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Te(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)i.push({value:f,major:Nm(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const g=Te(n.max,f);return i.push({value:g,major:Nm(g),significand:h}),i}class Fu extends Ki{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=uc.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return Dt(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Dt(t)?Math.max(0,t):null,this.max=Dt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Dt(this._userMin)&&(this.min=t===Ti(this.min,0)?Ti(this.min,-1):Ti(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(Ti(i,-1)),o(Ti(s,1)))),i<=0&&r(Ti(s,-1)),s<=0&&o(Ti(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=GO(e,this);return t.bounds==="ticks"&&Ub(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":wo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Hn(t),this._valueRange=Hn(this.max)-Hn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Hn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}z(Fu,"id","logarithmic"),z(Fu,"defaults",{ticks:{callback:$c.formatters.logarithmic,major:{enabled:!0}}});function Bu(n){const t=n.ticks;if(t.display&&n.display){const e=ue(t.backdropPadding);return Q(t.font&&t.font.size,Tt.font.size)+e.height}return 0}function KO(n,t,e){return e=It(e)?e:[e],{w:tD(n,t.string,e),h:e.length*t.lineHeight}}function Vm(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function YO(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?lt/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));s[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+s[c],a),h=zt(l.font),f=KO(n.ctx,h,n._pointLabels[c]);i[c]=f;const g=oe(n.getIndexAngle(c)+a),y=Math.round(bh(g)),_=Vm(y,d.x,f.w,0,180),v=Vm(y,d.y,f.h,90,270);XO(e,t,g,_,v)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=ZO(n,i,s)}function XO(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(c=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-c)):s.end>t.b&&(c=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function QO(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,i+s+o,r),l=Math.round(bh(oe(c.angle+Nt))),d=nN(c.y,a.h,l),h=tN(l),f=eN(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function JO(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(Tn({x:e,y:i},t)||Tn({x:e,y:r},t)||Tn({x:s,y:i},t)||Tn({x:s,y:r},t))}function ZO(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Bu(r)/2,additionalAngle:o?lt/s:0};let l;for(let d=0;d<s;d++){c.padding=e[d],c.size=t[d];const h=QO(n,d,c);i.push(h),a==="auto"&&(h.visible=JO(h,l),h.visible&&(l=h))}return i}function tN(n){return n===0||n===180?"center":n<180?"left":"right"}function eN(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function nN(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function iN(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!nt(a)){const c=Li(t.borderRadius),l=ue(t.backdropPadding);n.fillStyle=a;const d=i-l.left,h=s-l.top,f=r-i+l.width,g=o-s+l.height;Object.values(c).some(y=>y!==0)?(n.beginPath(),Qr(n,{x:d,y:h,w:f,h:g,radius:c}),n.fill()):n.fillRect(d,h,f,g)}}function sN(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));iN(e,o,r);const a=zt(o.font),{x:c,y:l,textAlign:d}=r;Hi(e,n._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function Rw(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,bt);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function rN(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!i||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),Rw(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function oN(n,t,e){return mi(n,{label:e,index:t,type:"pointLabel"})}class yr extends uc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ue(Bu(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Dt(t)&&!isNaN(t)?t:0,this.max=Dt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Bu(this.options))}generateTickLabels(t){uc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=mt(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?YO(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=bt/(this._pointLabels.length||1),i=this.options.startAngle||0;return oe(t*e+Be(i))}getDistanceFromCenterForValue(t){if(nt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(nt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return oN(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Nt+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Rw(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&sN(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),g=s.setContext(f),y=r.setContext(f);rN(this,g,c,o,y)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const d=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=i.setContext(this.getContext(c)),d=zt(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=ue(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}Hi(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}z(yr,"id","radialLinear"),z(yr,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:$c.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),z(yr,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),z(yr,"descriptors",{angleLines:{_fallback:"grid"}});const Gc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},be=Object.keys(Gc);function Fm(n,t){return n-t}function Bm(n,t){if(nt(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Dt(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(Is(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Um(n,t,e,i){const s=be.length;for(let r=be.indexOf(n);r<s-1;++r){const o=Gc[be[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return be[r]}return be[s-1]}function aN(n,t,e,i,s){for(let r=be.length-1;r>=be.indexOf(e);r--){const o=be[r];if(Gc[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return be[e?be.indexOf(e):0]}function cN(n){for(let t=be.indexOf(n)+1,e=be.length;t<e;++t)if(Gc[be[t]].common)return be[t]}function $m(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=wh(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function lN(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=e[a],c>=0&&(t[c].major=!0);return t}function zm(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:lN(n,i,s,e)}class to extends Ki{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new yM._date(t.adapters.date);s.init(e),Pr(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Bm(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=Dt(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=Dt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=$R(s,r,o);return this._unit=e.unit||(i.autoSkip?Um(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):aN(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:cN(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),zm(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=qt(e,0,o),i=qt(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Um(r.minUnit,e,i,this._getLabelCapacity(e)),a=Q(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=Is(c)||c===!0,d={};let h=e,f,g;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const y=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,g=0;f<i;f=+t.add(f,a,o),g++)$m(d,f,y);return(f===i||s.bounds==="ticks"||g===1)&&$m(d,f,y),Object.keys(d).sort(Fm).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return mt(o,[t,e,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=i[e],g=l&&h&&f&&f.major;return this._adapter.format(t,s||(g?h:d))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Be(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,zm(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Bm(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return jb(t.sort(Fm))}}z(to,"id","time"),z(to,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function la(n,t,e){let i=0,s=n.length-1,r,o,a,c;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=In(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:c}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=In(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:c}=n[s]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Uu extends to{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=la(e,this.min),this._tableRange=la(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)d=s[o+1],c=s[o-1],l=s[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(la(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return la(this._table,i*this._tableRange+this._minPos,!0)}}z(Uu,"id","timeseries"),z(Uu,"defaults",to.defaults);var uN=Object.freeze({__proto__:null,CategoryScale:Lu,LinearScale:Vu,LogarithmicScale:Fu,RadialLinearScale:yr,TimeScale:to,TimeSeriesScale:Uu});const dN=[mM,W1,$O,uN];Ke.register(...dN);const gs={};function Dh(n){gs[n]&&(gs[n].destroy(),delete gs[n])}function Dw(){const n=document.documentElement.getAttribute("data-theme")==="dark";return{textColor:n?"#94A3B8":"#64748B",gridColor:n?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",bgColor:n?"#1E2235":"#FFFFFF"}}function jm(n,t){const e=document.getElementById(n);if(!e)return;if(Dh(n),!t||t.length===0){e.getContext("2d").clearRect(0,0,e.width,e.height);return}Dw();const i=new Ke(e,{type:"doughnut",data:{labels:t.map(s=>`${s.emoji} ${s.category}`),datasets:[{data:t.map(s=>s.amount),backgroundColor:zC.slice(0,t.length),borderWidth:0,hoverBorderWidth:2,hoverBorderColor:"#fff",borderRadius:4,spacing:2}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"65%",plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,titleFont:{size:13,weight:"600"},bodyFont:{size:12},callbacks:{label:function(s){const r=s.dataset.data.reduce((a,c)=>a+c,0),o=(s.parsed/r*100).toFixed(1);return` ₹${s.parsed.toLocaleString("en-IN")} (${o}%)`}}}},animation:{animateRotate:!0,duration:800,easing:"easeOutQuart"}}});return gs[n]=i,i}function hN(n,t,e,i){const s=document.getElementById(n);if(!s)return;Dh(n);const{textColor:r,gridColor:o}=Dw(),a=new Ke(s,{type:"bar",data:{labels:t,datasets:[{label:"Income",data:e,backgroundColor:"rgba(16, 185, 129, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7},{label:"Expenses",data:i,backgroundColor:"rgba(239, 68, 68, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{color:r,padding:16,usePointStyle:!0,pointStyle:"rectRounded",font:{size:12,weight:"500"}}},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,callbacks:{label:function(c){return` ${c.dataset.label}: ₹${c.parsed.y.toLocaleString("en-IN")}`}}}},scales:{x:{grid:{display:!1},ticks:{color:r,font:{size:11}}},y:{grid:{color:o},ticks:{color:r,font:{size:11},callback:function(c){return"₹"+c.toLocaleString("en-IN")}},beginAtZero:!0}},animation:{duration:800,easing:"easeOutQuart"}}});return gs[n]=a,a}function fN(){Object.keys(gs).forEach(n=>{Dh(n)})}let Oe={user:null,profile:null,accounts:[],transactions:[]},We=new Date().getMonth(),Mr=new Date().getFullYear();function Mw(n){Oe={...Oe,...n},fN();const{totalMoney:t}=On(Oe.accounts,Oe.transactions),e=Pb(Oe.accounts,Oe.transactions),i=`${Mr}-${String(We+1).padStart(2,"0")}`,s=kb(Oe.transactions,i),r=s.income>0||s.expenses>0;return`
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
              <div class="category-color" style="background: ${ua(a)};"></div>
              <div class="category-info">
                <div class="category-name">${o.account.icon||"🏦"} ${o.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0,o.percentage)}%; background: ${ua(a)};"></div>
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
        <div class="month-display">${Ib(We)} ${Mr}</div>
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
              <div class="highlight-stat-icon">${uh(s.highestExpense.category)}</div>
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
                  <div class="category-color" style="background: ${ua(a)};"></div>
                  <div class="category-info">
                    <div class="category-name">${o.emoji} ${o.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${o.percentage}%; background: ${ua(a)};"></div>
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
      `:JC()}
    </div>
  `}function ua(n){const t=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];return t[n%t.length]}function Ow(){const n=document.getElementById("btn-month-prev"),t=document.getElementById("btn-month-next");n&&(n.onclick=()=>{We===0?(We=11,Mr--):We--,Hm()}),t&&(t.onclick=()=>{We===11?(We=0,Mr++):We++,Hm()});const e=Pb(Oe.accounts,Oe.transactions);e.length>0&&setTimeout(()=>{jm("accounts-distribution-chart",e.map(r=>({category:r.account.name,emoji:r.account.icon||"🏦",amount:r.balance})))},50);const i=`${Mr}-${String(We+1).padStart(2,"0")}`,s=kb(Oe.transactions,i);s.categories.length>0&&setTimeout(()=>{jm("categories-chart",s.categories)},50),(s.income>0||s.expenses>0)&&setTimeout(()=>{hN("income-expense-bar-chart",[Ib(We)],[s.income],[s.expenses])},50)}function Hm(){const n=document.querySelector(".page");n&&(n.outerHTML=Mw(Oe),Ow())}let as={user:null,profile:null,transactions:[],budgets:[]};function pN(n){as={...as,...n};const t=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{monthlyProgress:e,categoryProgress:i}=ab(as.budgets,as.transactions,t);return`
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
  `}function gN(n){const t=document.getElementById("btn-set-budget-modal");t&&(t.onclick=()=>Xl(n));const e=document.getElementById("btn-quick-monthly-budget");e&&(e.onclick=()=>Xl(n,"monthly"));const i=document.getElementById("btn-add-category-budget");i&&(i.onclick=()=>Xl(n,"category")),document.querySelectorAll(".btn-delete-budget").forEach(s=>{s.onclick=async()=>{const r=s.dataset.category;if(await zi({icon:"🗑️",title:"Delete Budget",message:`Are you sure you want to remove the budget for ${r}?`,danger:!0}))try{await sC(as.user.uid,r),q.success("Budget removed!"),n&&n()}catch{q.error("Unable to remove budget.")}}})}function Xl(n,t="monthly"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,i=`
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
          ${_o.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
  `;Ee({title:"🎯 Set Budget Limit",content:i,onOpen:s=>{let r=t;const o=s.querySelector("#tab-b-monthly"),a=s.querySelector("#tab-b-category"),c=s.querySelector("#group-b-category");o.onclick=()=>{r="monthly",o.classList.add("active"),a.classList.remove("active"),c.style.display="none"},a.onclick=()=>{r="category",a.classList.add("active"),o.classList.remove("active"),c.style.display="block"},s.querySelector("#set-budget-form").onsubmit=async l=>{l.preventDefault();const d=s.querySelector("#budget-amount").value,h=s.querySelector("#budget-category").value;if(s.querySelector("#budget-amount-error").textContent="",!d||Number(d)<=0){s.querySelector("#budget-amount-error").textContent="Please enter a valid budget amount.";return}const f=s.querySelector("#btn-save-budget");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{const g=as.user.uid;r==="monthly"?await nC(g,d,e):await iC(g,h,d,e),$t(),q.success("🎯 Budget set successfully!"),n&&n()}catch{q.error("Unable to save budget."),f.disabled=!1,f.innerHTML="Save Budget"}}}})}let cs={user:null,profile:null};function mN(n){var a;cs={...cs,...n};const{user:t,profile:e}=cs,i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(t==null?void 0:t.email)||(e==null?void 0:e.email)||"",r=i.charAt(0).toUpperCase(),o=e!=null&&e.createdAt?vo(e.createdAt.split("T")[0]):"Recently";return`
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
  `}function yN(n,t){const e=document.getElementById("btn-edit-profile");e&&(e.onclick=()=>{var c,l;const a=`
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${((c=cs.profile)==null?void 0:c.name)||((l=cs.user)==null?void 0:l.displayName)||""}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;Ee({title:"✏️ Edit Profile",content:a,onOpen:d=>{d.querySelector("#edit-profile-form").onsubmit=async h=>{h.preventDefault();const f=d.querySelector("#profile-name-input").value,g=Uc(f);if(g){d.querySelector("#profile-name-error").textContent=g;return}const y=d.querySelector("#btn-save-profile-name");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Saving...';try{await Jk(f),$t(),q.success("Profile updated!"),t&&t()}catch{q.error("Unable to update profile."),y.disabled=!1,y.innerHTML="Save Changes"}}}})});const i=document.getElementById("btn-change-password");i&&(i.onclick=()=>{Ee({title:"🔑 Change Password",content:`
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
      `,onOpen:a=>{a.querySelector("#change-pass-form").onsubmit=async c=>{c.preventDefault();const l=a.querySelector("#curr-pass").value,d=a.querySelector("#new-pass").value,h=a.querySelector("#confirm-new-pass").value;a.querySelector("#curr-pass-error").textContent="",a.querySelector("#new-pass-error").textContent="",a.querySelector("#confirm-new-pass-error").textContent="";const f=ah(d);if(f){a.querySelector("#new-pass-error").textContent=f;return}const g=yb(d,h);if(g){a.querySelector("#confirm-new-pass-error").textContent=g;return}const y=a.querySelector("#btn-save-new-pass");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Updating...';try{await Zk(l,d),$t(),q.success("Password updated successfully!")}catch{a.querySelector("#curr-pass-error").textContent="Incorrect current password or re-authentication failed.",y.disabled=!1,y.innerHTML="Update Password"}}}})});const s=document.getElementById("btn-profile-logout");s&&(s.onclick=async()=>{await zi({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out of Money Control?",confirmText:"Log Out",danger:!0})&&(await ih(),q.info("Logged out."),n&&n())});const r=document.getElementById("btn-profile-lock-app");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))})}function vN(n,t=[],e="money-control-transactions"){if(!n||n.length===0)throw new Error("No transactions to export.");const i=a=>{const c=t.find(l=>l.id===a);return c?c.name:""},s=["Date","Type","Amount","Reason","Category","From Account","To Account","Notes"],r=n.sort((a,c)=>new Date(a.date)-new Date(c.date)).map(a=>[a.date,a.type,a.amount,`"${(a.reason||"").replace(/"/g,'""')}"`,a.category||"",`"${i(a.sourceAccountId).replace(/"/g,'""')}"`,`"${i(a.destinationAccountId).replace(/"/g,'""')}"`,`"${(a.notes||"").replace(/"/g,'""')}"`]),o=[s.join(","),...r.map(a=>a.join(","))].join(`
`);bN(o,`${e}.csv`,"text/csv")}function _N(n,t,e,i){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],r=`${i}-${String(e+1).padStart(2,"0")}`,o=n.filter(v=>v.date&&v.date.startsWith(r)),a=v=>{const I=t.find(k=>k.id===v);return I?I.name:""},c=o.filter(v=>v.type==="INCOME").reduce((v,I)=>v+I.amount,0),l=o.filter(v=>v.type==="EXPENSE").reduce((v,I)=>v+I.amount,0),d={};o.filter(v=>v.type==="EXPENSE").forEach(v=>{const I=v.category||"Other";d[I]=(d[I]||0)+v.amount});const h=Object.entries(d).sort((v,I)=>I[1]-v[1]),f=`
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
</html>`,g=new Blob([f],{type:"text/html"}),y=URL.createObjectURL(g),_=window.open(y,"_blank");_&&(_.onload=()=>{setTimeout(()=>URL.revokeObjectURL(y),1e3)})}function bN(n,t,e){const i=new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}let ie={user:null,profile:null,transactions:[]};function Nw(n){var l;ie={...ie,...n};const{profile:t}=ie,e=document.documentElement.getAttribute("data-theme")||"light",i=((l=t==null?void 0:t.settings)==null?void 0:l.allowNegativeBalance)||!1,s=(t==null?void 0:t.initialBalance)||0,r=(t==null?void 0:t.pinEnabled)||!1,o=(t==null?void 0:t.autoLockTimeout)!==void 0?t.autoLockTimeout:5,a=hC(),c=dC();return`
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
  `}function Lw(n,t){const e=document.getElementById("toggle-pin-lock");e&&(e.onchange=async _=>{if(_.target.checked)wC(ie.user.uid,()=>{t&&t()}),_.target.checked=!1;else if(await zi({icon:"🔓",title:"Disable PIN Lock",message:"Are you sure you want to remove PIN protection? Your financial data will no longer be locked.",confirmText:"Remove PIN",danger:!0}))try{await db(ie.user.uid),q.success("🔓 PIN lock disabled."),t&&t()}catch{q.error("Unable to disable PIN."),_.target.checked=!0}else _.target.checked=!0});const i=document.getElementById("btn-change-pin");i&&(i.onclick=async()=>{const _=await nc(ie.user.uid);EC(ie.user.uid,_.pinHash,()=>{t&&t()})});const s=document.getElementById("select-auto-lock");s&&(s.onchange=async _=>{const v=parseInt(_.target.value);try{await gC(ie.user.uid,v),q.success("⏱️ Auto-lock updated."),t&&t()}catch{q.error("Unable to update auto-lock setting.")}});const r=document.getElementById("btn-lock-app-now");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))});const o=document.getElementById("btn-install-pwa");o&&(o.onclick=async()=>{await fC()&&(q.success("📲 Money Control installed!"),t&&t())});const a=document.getElementById("btn-theme-light");a&&(a.onclick=()=>{document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),qm()});const c=document.getElementById("btn-theme-dark");c&&(c.onclick=()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),qm()});const l=document.getElementById("toggle-negative-balance");l&&(l.onchange=async _=>{const v=_.target.checked;try{await Vk(ie.user.uid,{allowNegativeBalance:v}),q.success(`Negative balance ${v?"enabled":"disabled"}.`),t&&t()}catch{q.error("Unable to update setting."),_.target.checked=!v}});const d=document.getElementById("btn-edit-initial-balance");d&&(d.onclick=()=>{var I;const v=`
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
      `;Ee({title:"💵 Edit Initial Balance",content:v,onOpen:k=>{k.querySelector("#edit-initial-form").onsubmit=async D=>{D.preventDefault();const M=k.querySelector("#new-initial-input").value,N=yo(M);if(N){k.querySelector("#new-initial-error").textContent=N;return}const F=k.querySelector("#btn-save-initial");F.disabled=!0,F.innerHTML='<span class="spinner"></span> Saving...';try{await tb(ie.user.uid,Number(M)),$t(),q.success("Initial balance updated!"),t&&t()}catch{q.error("Unable to update initial balance."),F.disabled=!1,F.innerHTML="Save Initial Balance"}}}})});const h=document.getElementById("btn-export-csv");h&&(h.onclick=()=>{try{vN(ie.transactions,ie.accounts),q.success("📊 Transactions exported to CSV!")}catch(_){q.error(_.message||"Unable to export transactions.")}});const f=document.getElementById("btn-export-report");f&&(f.onclick=()=>{try{const _=new Date;_N(ie.transactions,ie.accounts,_.getMonth(),_.getFullYear()),q.success("📑 Printable report opened!")}catch{q.error("Unable to generate report.")}});const g=document.getElementById("btn-settings-logout");g&&(g.onclick=async()=>{await zi({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out?",confirmText:"Log Out",danger:!0})&&(await ih(),q.info("Logged out."),n&&n())});const y=document.getElementById("btn-settings-delete-account");y&&(y.onclick=()=>{Ee({title:"🚨 Delete Account",content:`
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
      `,onOpen:v=>{v.querySelector("#delete-acc-form").onsubmit=async I=>{I.preventDefault();const k=v.querySelector("#del-pass-input").value;if(v.querySelector("#del-pass-error").textContent="",!k){v.querySelector("#del-pass-error").textContent="Please enter your password.";return}const D=v.querySelector("#btn-confirm-delete-acc");D.disabled=!0,D.innerHTML='<span class="spinner"></span> Deleting...';try{await tC(k),$t(),q.info("Account deleted."),n&&n()}catch{v.querySelector("#del-pass-error").textContent="Incorrect password or re-authentication failed.",D.disabled=!1,D.innerHTML="Delete My Account Permanently"}}}})})}function qm(){const n=document.querySelector(".page");n&&(n.outerHTML=Nw(ie),Lw())}function Vw(n){return`
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
  `}function Fw(){return`
    <header class="mobile-header">
      <button class="mobile-hamburger-btn" id="mobile-hamburger-btn" aria-label="Open Navigation Menu">
        <span>☰</span>
      </button>
      <div class="mobile-header-brand">
        <img src="/icon-192.png" alt="Money Control" class="mobile-header-logo" />
        <span class="mobile-header-title">Money Control</span>
      </div>
    </header>
  `}function Bw(n,t,e){const i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(e==null?void 0:e.email)||(t==null?void 0:t.email)||"";return`
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
  `}function Uw(n){return`
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
  `}function wN(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.add("open"),t&&t.classList.add("open"),document.body.style.overflow="hidden"}function ns(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}function EN(n,t){document.querySelectorAll(".sidebar-link[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}}),document.querySelectorAll(".bottom-nav-item[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}});const e=document.getElementById("mobile-add-btn");e&&(e.onclick=()=>{window.dispatchEvent(new CustomEvent("open-add-menu"))});const i=document.getElementById("mobile-hamburger-btn");i&&(i.onclick=()=>wN());const s=document.getElementById("mobile-drawer-close");s&&(s.onclick=()=>ns());const r=document.getElementById("mobile-drawer-overlay");r&&(r.onclick=()=>ns()),document.querySelectorAll(".mobile-drawer-item[data-page]").forEach(l=>{l.onclick=()=>{ns();const d=l.dataset.page;n(d)}});const o=document.getElementById("mobile-drawer-lock-app");o&&(o.onclick=()=>{ns(),t&&t.pinEnabled&&t.pinHash?window.dispatchEvent(new CustomEvent("lock-app")):(q.info("🔒 PIN Lock is not enabled. Go to Settings → PIN Lock to set your PIN."),n("settings"))});const a=document.getElementById("mobile-drawer-logout");a&&(a.onclick=async()=>{ns(),await zi({icon:"🚪",title:"Logout?",message:"Are you sure you want to log out of Money Control?",confirmText:"Logout",danger:!0})&&(await ih(),q.info("Logged out successfully."))});const c=document.getElementById("mobile-drawer");if(c){let l=0;c.ontouchstart=d=>{l=d.touches[0].clientX},c.ontouchmove=d=>{const h=d.touches[0].clientX;l-h>50&&ns()}}}function IN(){return`
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
      ${TN(3)}
    </div>
  `}function TN(n=5){let t="";for(let e=0;e<n;e++)t+=`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;return t}const V={user:null,profile:null,accounts:[],transactions:[],budgets:[],activePage:"dashboard",unsubscribeAccounts:null,unsubscribeTx:null,authLoading:!0,dashboardError:null,isLocked:!1,pinEnabled:!1,pinHash:null,autoLockTimeout:5,lastActivityTime:Date.now()};let Oa=null;function AN(){const n=localStorage.getItem("theme");n?document.documentElement.setAttribute("data-theme",n):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}AN();rC();const Eo=document.getElementById("app");function SN(){Eo.innerHTML=`
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
  `}function xN(){SN(),Xk(async n=>{if(V.authLoading=!1,V.unsubscribeAccounts&&(V.unsubscribeAccounts(),V.unsubscribeAccounts=null),V.unsubscribeTx&&(V.unsubscribeTx(),V.unsubscribeTx=null),!n){V.user=null,V.profile=null,V.accounts=[],V.transactions=[],V.budgets=[],V.isLocked=!1,V.pinEnabled=!1,V.pinHash=null,V.dashboardError=null,Oi(),zw(),$u();return}V.user=n,$w();try{await Mh(n.uid)}catch(t){console.error("Error loading user data:",t),V.dashboardError=t,Le()}}),window.addEventListener("hashchange",RN),window.addEventListener("open-add-menu",()=>{MN()}),window.addEventListener("lock-app",()=>{dc()}),DN()}async function Mh(n){var t,e,i,s;V.dashboardError=null;try{let r=await Wr(n);if(!r){const a=((t=V.user)==null?void 0:t.displayName)||((i=(e=V.user)==null?void 0:e.email)==null?void 0:i.split("@")[0])||"User";await Z_(n,{name:a,email:((s=V.user)==null?void 0:s.email)||"",createdAt:new Date().toISOString()}),r=await Wr(n)}if(V.profile=r,!r||r.initialBalance===null||r.initialBalance===void 0){PN();return}await ib(n,r.initialBalance);try{V.budgets=await sh(n)}catch{V.budgets=[]}const o=await nc(n);V.pinEnabled=o.pinEnabled,V.pinHash=o.pinHash,V.autoLockTimeout=o.autoLockTimeout!==void 0?o.autoLockTimeout:5,V.unsubscribeAccounts=zk(n,(a,c)=>{c?(console.error("Accounts subscription error:",c),V.dashboardError=c):V.accounts=a,V.isLocked||Le()}),V.unsubscribeTx=Hk(n,(a,c)=>{c?console.error("Transactions subscription error:",c):V.transactions=a,V.isLocked||Le()}),V.pinEnabled&&V.pinHash?(V.isLocked=!0,hb(n,V.pinHash,()=>{V.isLocked=!1,V.lastActivityTime=Date.now(),Na(),Le()})):o.pinSetupPromptShown?(V.isLocked=!1,Na(),Le()):bC(n,()=>{nc(n).then(a=>{V.pinEnabled=a.pinEnabled,V.pinHash=a.pinHash,V.pinEnabled&&Na(),Le()})})}catch(r){console.error("loadUserData error:",r),V.dashboardError=r,Le()}}function $u(){Eo.innerHTML=NC(),wb(async()=>{const n=Qk();n&&(V.user=n,$w(),await Mh(n.uid))})}function PN(){Eo.innerHTML=LC(),VC(V.user.uid,async()=>{await Mh(V.user.uid)})}function $w(){Eo.innerHTML=`
    <div class="app-layout">
      ${Fw()}
      ${Vw(V.activePage)}
      <main class="main-content">
        ${IN()}
      </main>
      ${Uw(V.activePage)}
      ${Bw(V.activePage,V.user,V.profile)}
    </div>
  `}function Le(){if(V.isLocked)return;const n=window.location.hash.replace("#/","").replace("#","");n&&["dashboard","accounts","transactions","money-control","analytics","budget","profile","settings"].includes(n)?V.activePage=n:V.activePage="dashboard";const t=kN(V.activePage);Eo.innerHTML=`
    <div class="app-layout">
      ${Fw()}
      ${Vw(V.activePage)}
      <main class="main-content" id="main-content-area">
        ${t}
      </main>
      ${Uw(V.activePage)}
      ${Bw(V.activePage,V.user,V.profile)}
    </div>
  `,EN(zu,V),CN(V.activePage)}function kN(n){switch(n){case"dashboard":return vg(V);case"accounts":return ZC(V);case"transactions":return Rb(V);case"money-control":return Ia(V);case"analytics":return Mw(V);case"budget":return pN(V);case"profile":return mN(V);case"settings":return Nw(V);default:return vg(V)}}function CN(n){const t=async()=>{if(V.user){V.profile=await Wr(V.user.uid),V.budgets=await sh(V.user.uid);const e=await nc(V.user.uid);V.pinEnabled=e.pinEnabled,V.pinHash=e.pinHash,V.autoLockTimeout=e.autoLockTimeout!==void 0?e.autoLockTimeout:5,Le()}};switch(n){case"dashboard":_g(zu,t);break;case"accounts":tR(t);break;case"transactions":Ob(t);break;case"money-control":Ta(t);break;case"analytics":Ow();break;case"budget":gN(t);break;case"profile":yN(()=>$u(),t);break;case"settings":Lw(()=>$u(),t);break;default:_g(zu,t);break}}function zu(n){V.activePage=n,window.location.hash=`#/${n}`}function RN(){var n;V.user&&((n=V.profile)==null?void 0:n.initialBalance)!==null&&!V.isLocked&&Le()}function dc(){!V.pinEnabled||!V.pinHash||!V.user||(V.isLocked=!0,hb(V.user.uid,V.pinHash,()=>{V.isLocked=!1,V.lastActivityTime=Date.now(),Na(),Le()}))}function Na(){if(zw(),!V.pinEnabled||!V.pinHash||V.autoLockTimeout<0)return;const n=V.autoLockTimeout===0?0:V.autoLockTimeout*60*1e3;n>0&&(Oa=setInterval(()=>{Date.now()-V.lastActivityTime>=n&&!V.isLocked&&dc()},1e4))}function zw(){Oa&&(clearInterval(Oa),Oa=null)}function DN(){const n=()=>{V.lastActivityTime=Date.now()};["click","keydown","touchstart","scroll"].forEach(t=>{document.addEventListener(t,n,{passive:!0})}),document.addEventListener("visibilitychange",()=>{if(document.hidden||!V.pinEnabled||!V.pinHash||V.isLocked)return;const t=Date.now()-V.lastActivityTime;if(V.autoLockTimeout===0)dc();else if(V.autoLockTimeout>0){const e=V.autoLockTimeout*60*1e3;t>=e&&dc()}})}function MN(){Ee({title:"⚡ Quick Action",content:`
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
  `,onOpen:t=>{const e=t.querySelector("#fab-modal-add-income"),i=t.querySelector("#fab-modal-add-expense"),s=t.querySelector("#fab-modal-transfer"),r=async()=>{V.user&&(V.profile=await Wr(V.user.uid),V.budgets=await sh(V.user.uid),Le())};e&&(e.onclick=()=>Ni("INCOME",r)),i&&(i.onclick=()=>Ni("EXPENSE",r)),s&&(s.onclick=()=>hh(r))}})}xN();
