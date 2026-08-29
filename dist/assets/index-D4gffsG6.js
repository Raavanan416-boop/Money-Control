var cE=Object.defineProperty;var lE=(n,t,e)=>t in n?cE(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var z=(n,t,e)=>lE(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const uE=()=>{};var kf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},dE=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},$m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),i.push(e[d],e[h],e[f],e[g])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Um(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dE(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new hE;const f=r<<2|a>>4;if(i.push(f),l!==64){const g=a<<4&240|l>>2;if(i.push(g),h!==64){const v=l<<6&192|h;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fE=function(n){const t=Um(n);return $m.encodeByteArray(t,!0)},Da=function(n){return fE(n).replace(/\./g,"")},zm=function(n){try{return $m.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function pE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gE=()=>pE().__FIREBASE_DEFAULTS__,mE=()=>{if(typeof process>"u"||typeof kf>"u")return;const n=kf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&zm(n[1]);return t&&JSON.parse(t)},cc=()=>{try{return uE()||gE()||mE()||yE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jm=n=>{var t,e;return(e=(t=cc())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},vE=n=>{const t=jm(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},qm=()=>{var n;return(n=cc())===null||n===void 0?void 0:n.config},Hm=n=>{var t;return(t=cc())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Is(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Da(JSON.stringify(e)),Da(JSON.stringify(o)),""].join(".")}const gr={};function wE(){const n={prod:[],emulator:[]};for(const t of Object.keys(gr))gr[t]?n.emulator.push(t):n.prod.push(t);return n}function EE(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Cf=!1;function Gm(n,t){if(typeof window>"u"||typeof document>"u"||!Is(window.location.host)||gr[n]===t||gr[n]||Cf)return;gr[n]=t;function e(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=wE().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,g){f.setAttribute("width","24"),f.setAttribute("id",g),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Cf=!0,o()},f}function d(f,g){f.setAttribute("id",g),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=EE(i),g=e("text"),v=document.getElementById(g)||document.createElement("span"),_=e("learnmore"),y=document.getElementById(_)||document.createElement("a"),I=e("preprendIcon"),k=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const R=f.element;a(R),d(y,_);const D=l();c(k,I),R.append(k,v,y,D),document.body.appendChild(R)}r?(v.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function TE(){var n;const t=(n=cc())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PE(){const n=ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kE(){return!TE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CE(){try{return typeof indexedDB=="object"}catch{return!1}}function RE(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="FirebaseError";class Rn extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=DE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?ME(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Rn(s,a,i)}}function ME(n,t){return n.replace(OE,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const OE=/\{\$([^}]+)}/g;function NE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Li(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(Rf(r)&&Rf(o)){if(!Li(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Rf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function er(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function nr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function LE(n,t){const e=new VE(n,t);return e.subscribe.bind(e)}class VE{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");FE(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=gl),s.error===void 0&&(s.error=gl),s.complete===void 0&&(s.complete=gl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function gl(){}/**
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
 */function K(n){return n&&n._delegate?n._delegate:n}class Vi{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ei="[DEFAULT]";/**
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
 */class BE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new _E;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($E(t))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ei){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ei){return this.instances.has(t)}getOptions(t=Ei){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:UE(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ei){return this.component?this.component.multipleInstances?t:Ei:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UE(n){return n===Ei?void 0:n}function $E(n){return n.instantiationMode==="EAGER"}/**
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
 */class zE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new BE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(it||(it={}));const jE={debug:it.DEBUG,verbose:it.VERBOSE,info:it.INFO,warn:it.WARN,error:it.ERROR,silent:it.SILENT},qE=it.INFO,HE={[it.DEBUG]:"log",[it.VERBOSE]:"log",[it.INFO]:"info",[it.WARN]:"warn",[it.ERROR]:"error"},WE=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=HE[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $u{constructor(t){this.name=t,this._logLevel=qE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in it))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,it.DEBUG,...t),this._logHandler(this,it.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,it.VERBOSE,...t),this._logHandler(this,it.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,it.INFO,...t),this._logHandler(this,it.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,it.WARN,...t),this._logHandler(this,it.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,it.ERROR,...t),this._logHandler(this,it.ERROR,...t)}}const GE=(n,t)=>t.some(e=>n instanceof e);let Df,Mf;function KE(){return Df||(Df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YE(){return Mf||(Mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Km=new WeakMap,Yl=new WeakMap,Ym=new WeakMap,ml=new WeakMap,zu=new WeakMap;function XE(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Hn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Km.set(e,n)}).catch(()=>{}),zu.set(t,n),t}function QE(n){if(Yl.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Yl.set(n,t)}let Xl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Yl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ym.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Hn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function JE(n){Xl=n(Xl)}function ZE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(yl(this),t,...e);return Ym.set(i,t.sort?t.sort():[t]),Hn(i)}:YE().includes(n)?function(...t){return n.apply(yl(this),t),Hn(Km.get(this))}:function(...t){return Hn(n.apply(yl(this),t))}}function tI(n){return typeof n=="function"?ZE(n):(n instanceof IDBTransaction&&QE(n),GE(n,KE())?new Proxy(n,Xl):n)}function Hn(n){if(n instanceof IDBRequest)return XE(n);if(ml.has(n))return ml.get(n);const t=tI(n);return t!==n&&(ml.set(n,t),zu.set(t,n)),t}const yl=n=>zu.get(n);function eI(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Hn(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Hn(o.result),c.oldVersion,c.newVersion,Hn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const nI=["get","getKey","getAll","getAllKeys","count"],iI=["put","add","delete","clear"],vl=new Map;function Of(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(vl.get(t))return vl.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=iI.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||nI.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return vl.set(t,r),r}JE(n=>({...n,get:(t,e,i)=>Of(t,e)||n.get(t,e,i),has:(t,e)=>!!Of(t,e)||n.has(t,e)}));/**
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
 */class sI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rI(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function rI(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ql="@firebase/app",Nf="0.13.2";/**
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
 */const An=new $u("@firebase/app"),oI="@firebase/app-compat",aI="@firebase/analytics-compat",cI="@firebase/analytics",lI="@firebase/app-check-compat",uI="@firebase/app-check",dI="@firebase/auth",hI="@firebase/auth-compat",fI="@firebase/database",pI="@firebase/data-connect",gI="@firebase/database-compat",mI="@firebase/functions",yI="@firebase/functions-compat",vI="@firebase/installations",_I="@firebase/installations-compat",bI="@firebase/messaging",wI="@firebase/messaging-compat",EI="@firebase/performance",II="@firebase/performance-compat",TI="@firebase/remote-config",AI="@firebase/remote-config-compat",SI="@firebase/storage",xI="@firebase/storage-compat",PI="@firebase/firestore",kI="@firebase/ai",CI="@firebase/firestore-compat",RI="firebase",DI="11.10.0";/**
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
 */const Jl="[DEFAULT]",MI={[Ql]:"fire-core",[oI]:"fire-core-compat",[cI]:"fire-analytics",[aI]:"fire-analytics-compat",[uI]:"fire-app-check",[lI]:"fire-app-check-compat",[dI]:"fire-auth",[hI]:"fire-auth-compat",[fI]:"fire-rtdb",[pI]:"fire-data-connect",[gI]:"fire-rtdb-compat",[mI]:"fire-fn",[yI]:"fire-fn-compat",[vI]:"fire-iid",[_I]:"fire-iid-compat",[bI]:"fire-fcm",[wI]:"fire-fcm-compat",[EI]:"fire-perf",[II]:"fire-perf-compat",[TI]:"fire-rc",[AI]:"fire-rc-compat",[SI]:"fire-gcs",[xI]:"fire-gcs-compat",[PI]:"fire-fst",[CI]:"fire-fst-compat",[kI]:"fire-vertex","fire-js":"fire-js",[RI]:"fire-js-all"};/**
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
 */const Ma=new Map,OI=new Map,Zl=new Map;function Lf(n,t){try{n.container.addComponent(t)}catch(e){An.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function hs(n){const t=n.name;if(Zl.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;Zl.set(t,n);for(const e of Ma.values())Lf(e,n);for(const e of OI.values())Lf(e,n);return!0}function ju(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function At(n){return n==null?!1:n.settings!==void 0}/**
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
 */const NI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Qr("app","Firebase",NI);/**
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
 */class LI{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const As=DI;function Xm(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Jl,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(e||(e=qm()),!e)throw Wn.create("no-options");const r=Ma.get(s);if(r){if(Li(e,r.options)&&Li(i,r.config))return r;throw Wn.create("duplicate-app",{appName:s})}const o=new zE(s);for(const c of Zl.values())o.addComponent(c);const a=new LI(e,i,o);return Ma.set(s,a),a}function Qm(n=Jl){const t=Ma.get(n);if(!t&&n===Jl&&qm())return Xm();if(!t)throw Wn.create("no-app",{appName:n});return t}function Gn(n,t,e){var i;let s=(i=MI[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}hs(new Vi(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const VI="firebase-heartbeat-database",FI=1,Rr="firebase-heartbeat-store";let _l=null;function Jm(){return _l||(_l=eI(VI,FI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Rr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Wn.create("idb-open",{originalErrorMessage:n.message})})),_l}async function BI(n){try{const e=(await Jm()).transaction(Rr),i=await e.objectStore(Rr).get(Zm(n));return await e.done,i}catch(t){if(t instanceof Rn)An.warn(t.message);else{const e=Wn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});An.warn(e.message)}}}async function Vf(n,t){try{const i=(await Jm()).transaction(Rr,"readwrite");await i.objectStore(Rr).put(t,Zm(n)),await i.done}catch(e){if(e instanceof Rn)An.warn(e.message);else{const i=Wn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});An.warn(i.message)}}}function Zm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const UI=1024,$I=30;class zI{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qI(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ff();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>$I){const o=HI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){An.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ff(),{heartbeatsToSend:i,unsentEntries:s}=jI(this._heartbeatsCache.heartbeats),r=Da(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return An.warn(e),""}}}function Ff(){return new Date().toISOString().substring(0,10)}function jI(n,t=UI){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Bf(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Bf(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class qI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?RE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await BI(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Bf(n){return Da(JSON.stringify({version:2,heartbeats:n})).length}function HI(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function WI(n){hs(new Vi("platform-logger",t=>new sI(t),"PRIVATE")),hs(new Vi("heartbeat",t=>new zI(t),"PRIVATE")),Gn(Ql,Nf,n),Gn(Ql,Nf,"esm2017"),Gn("fire-js","")}WI("");function qu(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}/**
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
 */const GI={PHONE:"phone",TOTP:"totp"},KI={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},YI={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},XI={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},QI={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZI=JI,ey=ty,ny=new Qr("auth","Firebase",ty()),tT={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new $u("@firebase/auth");function eT(n,...t){Oa.logLevel<=it.WARN&&Oa.warn(`Auth (${As}): ${n}`,...t)}function aa(n,...t){Oa.logLevel<=it.ERROR&&Oa.error(`Auth (${As}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,...t){throw Wu(n,...t)}function fe(n,...t){return Wu(n,...t)}function Hu(n,t,e){const i=Object.assign(Object.assign({},ey()),{[t]:e});return new Qr("auth","Firebase",i).create(t,{appName:n.name})}function Ht(n){return Hu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ss(n,t,e){const i=e;if(!(t instanceof i))throw i.name!==t.constructor.name&&be(n,"argument-error"),Hu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wu(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return ny.create(n,...t)}function U(n,t,...e){if(!n)throw Wu(t,...e)}function He(n){const t="INTERNAL ASSERTION FAILED: "+n;throw aa(t),new Error(t)}function Sn(n,t){n||He(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gu(){return Uf()==="http:"||Uf()==="https:"}function Uf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gu()||SE()||"connection"in navigator)?navigator.onLine:!0}function iT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Sn(e>t,"Short delay should be less than long delay!"),this.isMobile=IE()||xE()}get(){return nT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n,t){Sn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oT=new Jr(3e4,6e4);function wt(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Et(n,t,e,i,s={}){return sy(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ts(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return AE()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Is(n.emulatorConfig.host)&&(l.credentials="include"),iy.fetch()(await ry(n,n.config.apiHost,e,a),l)})}async function sy(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},sT),t);try{const s=new cT(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ir(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ir(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ir(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ir(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hu(n,d,l);be(n,d)}}catch(s){if(s instanceof Rn)throw s;be(n,"network-request-failed",{message:String(s)})}}async function Dn(n,t,e,i,s={}){const r=await Et(n,t,e,i,s);return"mfaPendingCredential"in r&&be(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function ry(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?Ku(n.config,s):`${n.config.apiScheme}://${s}`;return rT.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function aT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(fe(this.auth,"network-request-failed")),oT.get())})}}function ir(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=fe(n,t,i);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){return n!==void 0&&n.getResponse!==void 0}function zf(n){return n!==void 0&&n.enterprise!==void 0}class oy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return aT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(n){return(await Et(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ay(n,t){return Et(n,"GET","/v2/recaptchaConfig",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(n,t){return Et(n,"POST","/v1/accounts:delete",t)}async function dT(n,t){return Et(n,"POST","/v1/accounts:update",t)}async function Na(n,t){return Et(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n,t=!1){return K(n).getIdToken(t)}async function cy(n,t=!1){const e=K(n),i=await e.getIdToken(t),s=lc(i);U(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:mr(bl(s.auth_time)),issuedAtTime:mr(bl(s.iat)),expirationTime:mr(bl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function bl(n){return Number(n)*1e3}function lc(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=zm(e);return s?JSON.parse(s):(aa("Failed to decode base64 JWT payload"),null)}catch(s){return aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jf(n){const t=lc(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof Rn&&fT(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function fT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mr(n){var t;const e=n.auth,i=await n.getIdToken(),s=await xn(n,Na(e,{idToken:i}));U(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?uy(r.providerUserInfo):[],a=gT(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new tu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function ly(n){const t=K(n);await Mr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gT(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function uy(n){return n.map(t=>{var{providerId:e}=t,i=qu(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(n,t){const e=await sy(n,{},async()=>{const i=Ts({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await ry(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return n.emulatorConfig&&Is(n.emulatorConfig.host)&&(c.credentials="include"),iy.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function yT(n,t){return Et(n,"POST","/v2/accounts:revokeToken",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):jf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){U(t.length!==0,"internal-error");const e=jf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await mT(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new rs;return i&&(U(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(U(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(U(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Me{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,r=qu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await xn(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return cy(this,t)}reload(){return ly(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Me(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Mr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Ht(this.auth));const t=await this.getIdToken();return await xn(this,uT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,r,o,a,c,l,d;const h=(i=e.displayName)!==null&&i!==void 0?i:void 0,f=(s=e.email)!==null&&s!==void 0?s:void 0,g=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=e.photoURL)!==null&&o!==void 0?o:void 0,_=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=e.createdAt)!==null&&l!==void 0?l:void 0,k=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:D,isAnonymous:O,providerData:L,stsTokenManager:T}=e;U(R&&T,t,"internal-error");const b=rs.fromJSON(this.name,T);U(typeof R=="string",t,"internal-error"),Fn(h,t.name),Fn(f,t.name),U(typeof D=="boolean",t,"internal-error"),U(typeof O=="boolean",t,"internal-error"),Fn(g,t.name),Fn(v,t.name),Fn(_,t.name),Fn(y,t.name),Fn(I,t.name),Fn(k,t.name);const E=new Me({uid:R,auth:t,email:f,emailVerified:D,displayName:h,isAnonymous:O,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:b,createdAt:I,lastLoginAt:k});return L&&Array.isArray(L)&&(E.providerData=L.map(S=>Object.assign({},S))),y&&(E._redirectEventId=y),E}static async _fromIdTokenResponse(t,e,i=!1){const s=new rs;s.updateFromServerResponse(e);const r=new Me({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Mr(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];U(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?uy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new rs;a.updateFromIdToken(i);const c=new Me({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new tu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new Map;function mn(n){Sn(n instanceof Function,"Expected a class definition");let t=qf.get(n);return t?(Sn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,qf.set(n,t),t)}/**
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
 */class dy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}dy.type="NONE";const eu=dy;/**
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
 */function ca(n,t,e){return`firebase:${n}:${t}:${e}`}class os{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ca(this.userKey,s.apiKey,r),this.fullPersistenceKey=ca("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Na(this.auth,{idToken:t}).catch(()=>{});return e?Me._fromGetAccountInfoResponse(this.auth,e,t):null}return Me._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new os(mn(eu),t,i);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||mn(eu);const o=ca(i,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){let h;if(typeof d=="string"){const f=await Na(t,{idToken:d}).catch(()=>{});if(!f)break;h=await Me._fromGetAccountInfoResponse(t,f,d)}else h=Me._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new os(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new os(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(gy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yy(t))return"Blackberry";if(vy(t))return"Webos";if(fy(t))return"Safari";if((t.includes("chrome/")||py(t))&&!t.includes("edge/"))return"Chrome";if(my(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function hy(n=ae()){return/firefox\//i.test(n)}function fy(n=ae()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function py(n=ae()){return/crios\//i.test(n)}function gy(n=ae()){return/iemobile/i.test(n)}function my(n=ae()){return/android/i.test(n)}function yy(n=ae()){return/blackberry/i.test(n)}function vy(n=ae()){return/webos/i.test(n)}function Yu(n=ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vT(n=ae()){var t;return Yu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function _T(){return PE()&&document.documentMode===10}function _y(n=ae()){return Yu(n)||my(n)||vy(n)||yy(n)||/windows phone/i.test(n)||gy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,t=[]){let e;switch(n){case"Browser":e=Hf(ae());break;case"Worker":e=`${Hf(ae())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${As}/${i}`}/**
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
 */class bT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function wT(n,t={}){return Et(n,"GET","/v2/passwordPolicy",wt(n,t))}/**
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
 */const ET=6;class IT{constructor(t){var e,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:ET,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wf(this),this.idTokenSubscription=new Wf(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=mn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await os.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Na(this,{idToken:t}),i=await Me._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Mr(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=iT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(At(this.app))return Promise.reject(Ht(this));const e=t?K(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return At(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wT(this),e=new IT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Qr("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await yT(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&mn(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[mn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,i,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=by(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&eT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rt(n){return K(n)}class Wf{constructor(t){this.auth=t,this.observer=null,this.addObserver=LE(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AT(n){Zr=n}function Xu(n){return Zr.loadJS(n)}function ST(){return Zr.recaptchaV2Script}function xT(){return Zr.recaptchaEnterpriseScript}function PT(){return Zr.gapiScript}function wy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=500,CT=6e4,Fo=1e12;class RT{constructor(t){this.auth=t,this.counter=Fo,this._widgets=new Map}render(t,e){const i=this.counter;return this._widgets.set(i,new OT(t,this.auth.name,e||{})),this.counter++,i}reset(t){var e;const i=t||Fo;(e=this._widgets.get(i))===null||e===void 0||e.delete(),this._widgets.delete(i)}getResponse(t){var e;const i=t||Fo;return((e=this._widgets.get(i))===null||e===void 0?void 0:e.getResponse())||""}async execute(t){var e;const i=t||Fo;return(e=this._widgets.get(i))===null||e===void 0||e.execute(),""}}class DT{constructor(){this.enterprise=new MT}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class MT{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class OT{constructor(t,e,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof t=="string"?document.getElementById(t):t;U(s,"argument-error",{appName:e}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=NT(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch{}this.isVisible&&this.execute()},CT)},kT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function NT(n){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}const LT="recaptcha-enterprise",yr="NO_RECAPTCHA";class Ey{constructor(t){this.type=LT,this.auth=Rt(t)}async verify(t="verify",e=!1){async function i(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ay(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new oy(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;zf(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(yr)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DT().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!e&&zf(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xT();c.length!==0&&(c+=a),Xu(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ys(n,t,e,i=!1,s=!1){const r=new Ey(n);let o;if(s)o=yr;else try{o=await r.verify(e)}catch{o=await r.verify(e,!0)}const a=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Kn(n,t,e,i,s){var r,o;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ys(n,t,e,e==="getOobCode");return i(n,a)}else return i(n,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ys(n,t,e,e==="getOobCode");return i(n,c)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ys(n,t,e);return i(n,a).catch(async c=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${e} flow.`);const d=await Ys(n,t,e,!1,!0);return i(n,d)}return Promise.reject(c)})}else{const a=await Ys(n,t,e,!1,!0);return i(n,a)}else return Promise.reject(s+" provider is not supported.")}async function Iy(n){const t=Rt(n),e=await ay(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new oy(e);t.tenantId==null?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.isAnyProviderEnabled()&&new Ey(t).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n,t){const e=ju(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(Li(r,t??{}))return s;be(s,"already-initialized")}return e.initialize({options:t})}function VT(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(mn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function Ay(n,t,e){const i=Rt(n);U(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(e!=null&&e.disableWarnings),r=Sy(t),{host:o,port:a}=FT(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){U(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),U(Li(l,i.config.emulator)&&Li(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Is(o)?(Wm(`${r}//${o}${c}`),Gm("Auth",!0)):s||BT()}function Sy(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function FT(n){const t=Sy(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Gf(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Gf(o)}}}function Gf(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function BT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return He("not implemented")}_getIdTokenResponse(t){return He("not implemented")}_linkToIdToken(t,e){return He("not implemented")}_getReauthenticationResolver(t){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(n,t){return Et(n,"POST","/v1/accounts:resetPassword",wt(n,t))}async function UT(n,t){return Et(n,"POST","/v1/accounts:update",t)}async function $T(n,t){return Et(n,"POST","/v1/accounts:signUp",t)}async function zT(n,t){return Et(n,"POST","/v1/accounts:update",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(n,t){return Dn(n,"POST","/v1/accounts:signInWithPassword",wt(n,t))}async function uc(n,t){return Et(n,"POST","/v1/accounts:sendOobCode",wt(n,t))}async function qT(n,t){return uc(n,t)}async function HT(n,t){return uc(n,t)}async function WT(n,t){return uc(n,t)}async function GT(n,t){return uc(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(n,t){return Dn(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,t))}async function YT(n,t){return Dn(n,"POST","/v1/accounts:signInWithEmailLink",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends xs{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new fs(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new fs(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kn(t,e,"signInWithPassword",jT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return KT(t,{email:this._email,oobCode:this._password});default:be(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kn(t,i,"signUpPassword",$T,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return YT(t,{idToken:e,email:this._email,oobCode:this._password});default:be(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,t){return Dn(n,"POST","/v1/accounts:signInWithIdp",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="http://localhost";class Qe extends xs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Qe(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):be("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,r=qu(e,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Qe(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return wn(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,wn(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wn(t,e)}buildRequest(){const t={requestUri:XT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ts(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(n,t){return Et(n,"POST","/v1/accounts:sendVerificationCode",wt(n,t))}async function QT(n,t){return Dn(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,t))}async function JT(n,t){const e=await Dn(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,t));if(e.temporaryProof)throw ir(n,"account-exists-with-different-credential",e);return e}const ZT={USER_NOT_FOUND:"user-not-found"};async function t0(n,t){const e=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Dn(n,"POST","/v1/accounts:signInWithPhoneNumber",wt(n,e),ZT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends xs{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Yn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Yn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return QT(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return JT(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return t0(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:i,verificationCode:s}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:i,code:s}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:e,verificationCode:i,phoneNumber:s,temporaryProof:r}=t;return!i&&!e&&!s&&!r?null:new Yn({verificationId:e,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n0(n){const t=er(nr(n)).link,e=t?er(nr(t)).deep_link_id:null,i=er(nr(n)).deep_link_id;return(i?er(nr(i)).link:null)||i||e||t||n}class Ps{constructor(t){var e,i,s,r,o,a;const c=er(nr(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,h=e0((s=c.mode)!==null&&s!==void 0?s:null);U(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=n0(t);try{return new Ps(e)}catch{return null}}}function i0(n){return Ps.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.providerId=tn.PROVIDER_ID}static credential(t,e){return fs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=Ps.parseLink(e);return U(i,"argument-error"),fs._fromEmailAndCode(t,i.code,i.tenantId)}}tn.PROVIDER_ID="password";tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends Mn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class vr extends ks{static credentialFromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;return U("providerId"in e&&"signInMethod"in e,"argument-error"),Qe._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return U(t.idToken||t.accessToken,"argument-error"),Qe._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return vr.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return vr.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:a}=t;if(!i&&!s&&!e&&!r||!a)return null;try{return new vr(a)._credential({idToken:e,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ks{constructor(){super("facebook.com")}static credential(t){return Qe._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hn.credential(t.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Qe._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return fn.credential(e,i)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ks{constructor(){super("github.com")}static credential(t){return Qe._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pn.credential(t.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="http://localhost";class Or extends xs{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return wn(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,wn(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wn(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s,pendingToken:r}=e;return!i||!s||!r||i!==s?null:new Or(i,r)}static _create(t,e){return new Or(t,e)}buildRequest(){return{requestUri:s0,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="saml.";class La extends Mn{constructor(t){U(t.startsWith(r0),"argument-error"),super(t)}static credentialFromResult(t){return La.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return La.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=Or.fromJSON(t);return U(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:i}=t;if(!e||!i)return null;try{return Or._create(i,e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ks{constructor(){super("twitter.com")}static credential(t,e){return Qe._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return gn.credential(e,i)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py(n,t){return Dn(n,"POST","/v1/accounts:signUp",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Me._fromIdTokenResponse(t,i,s),o=Yf(i);return new ke({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=Yf(i);return new ke({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function Yf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(n){var t;if(At(n.app))return Promise.reject(Ht(n));const e=Rt(n);if(await e._initializationPromise,!((t=e.currentUser)===null||t===void 0)&&t.isAnonymous)return new ke({user:e.currentUser,providerId:null,operationType:"signIn"});const i=await Py(e,{returnSecureToken:!0}),s=await ke._fromIdTokenResponse(e,"signIn",i,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Rn{constructor(t,e,i,s){var r;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Va.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new Va(t,e,i,s)}}function ky(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(n,r,t,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n){return new Set(n.map(({providerId:t})=>t).filter(t=>!!t))}/**
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
 */async function a0(n,t){const e=K(n);await dc(!0,e,t);const{providerUserInfo:i}=await dT(e.auth,{idToken:await e.getIdToken(),deleteProvider:[t]}),s=Cy(i||[]);return e.providerData=e.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(e.phoneNumber=null),await e.auth._persistUserIfCurrent(e),e}async function Qu(n,t,e=!1){const i=await xn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return ke._forOperation(n,"link",i)}async function dc(n,t,e){await Mr(t);const i=Cy(t.providerData),s=n===!1?"provider-already-linked":"no-such-provider";U(i.has(e)===n,t.auth,s)}/**
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
 */async function Ry(n,t,e=!1){const{auth:i}=n;if(At(i.app))return Promise.reject(Ht(i));const s="reauthenticate";try{const r=await xn(n,ky(i,s,t,n),e);U(r.idToken,i,"internal-error");const o=lc(r.idToken);U(o,i,"internal-error");const{sub:a}=o;return U(n.uid===a,i,"user-mismatch"),ke._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&be(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(n,t,e=!1){if(At(n.app))return Promise.reject(Ht(n));const i="signIn",s=await ky(n,i,t),r=await ke._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}async function hc(n,t){return Dy(Rt(n),t)}async function My(n,t){const e=K(n);return await dc(!1,e,t.providerId),Qu(e,t)}async function fc(n,t){return Ry(K(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(n,t){return Dn(n,"POST","/v1/accounts:signInWithCustomToken",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(n,t){if(At(n.app))return Promise.reject(Ht(n));const e=Rt(n),i=await c0(e,{token:t,returnSecureToken:!0}),s=await ke._fromIdTokenResponse(e,"signIn",i);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?Ju._fromServerResponse(t,e):"totpInfo"in e?Zu._fromServerResponse(t,e):be(t,"internal-error")}}class Ju extends to{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new Ju(e)}}class Zu extends to{constructor(t){super("totp",t)}static _fromServerResponse(t,e){return new Zu(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,t,e){var i;U(((i=e.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),U(typeof e.dynamicLinkDomain>"u"||e.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),U(typeof e.linkDomain>"u"||e.linkDomain.length>0,n,"invalid-hosting-link-domain"),t.continueUrl=e.url,t.dynamicLinkDomain=e.dynamicLinkDomain,t.linkDomain=e.linkDomain,t.canHandleCodeInApp=e.handleCodeInApp,e.iOS&&(U(e.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),t.iOSBundleId=e.iOS.bundleId),e.android&&(U(e.android.packageName.length>0,n,"missing-android-pkg-name"),t.androidInstallApp=e.android.installApp,t.androidMinimumVersionCode=e.android.minimumVersion,t.androidPackageName=e.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(n){const t=Rt(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Oy(n,t,e){const i=Rt(n),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};e&&pc(i,s,e),await Kn(i,s,"getOobCode",HT,"EMAIL_PASSWORD_PROVIDER")}async function u0(n,t,e){await xy(K(n),{oobCode:t,newPassword:e}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&td(n),i})}async function d0(n,t){await zT(K(n),{oobCode:t})}async function Ny(n,t){const e=K(n),i=await xy(e,{oobCode:t}),s=i.requestType;switch(U(s,e,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(i.newEmail,e,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(i.mfaInfo,e,"internal-error");default:U(i.email,e,"internal-error")}let r=null;return i.mfaInfo&&(r=to._fromServerResponse(Rt(e),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function h0(n,t){const{data:e}=await Ny(K(n),t);return e.email}async function Ly(n,t,e){if(At(n.app))return Promise.reject(Ht(n));const i=Rt(n),o=await Kn(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Py,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&td(n),c}),a=await ke._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Vy(n,t,e){return At(n.app)?Promise.reject(Ht(n)):hc(K(n),tn.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&td(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(n,t,e){const i=Rt(n),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function r(o,a){U(a.handleCodeInApp,i,"argument-error"),a&&pc(i,o,a)}r(s,e),await Kn(i,s,"getOobCode",WT,"EMAIL_PASSWORD_PROVIDER")}function p0(n,t){const e=Ps.parseLink(t);return(e==null?void 0:e.operation)==="EMAIL_SIGNIN"}async function g0(n,t,e){if(At(n.app))return Promise.reject(Ht(n));const i=K(n),s=tn.credentialWithLink(t,e||Dr());return U(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),hc(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(n,t){return Et(n,"POST","/v1/accounts:createAuthUri",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(n,t){const e=Gu()?Dr():"http://localhost",i={identifier:t,continueUri:e},{signinMethods:s}=await m0(K(n),i);return s||[]}async function v0(n,t){const e=K(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};t&&pc(e.auth,s,t);const{email:r}=await qT(e.auth,s);r!==n.email&&await n.reload()}async function _0(n,t,e){const i=K(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:t};e&&pc(i.auth,r,e);const{email:o}=await GT(i.auth,r);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(n,t){return Et(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const i=K(n),r={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await xn(i,b0(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function w0(n,t){const e=K(n);return At(e.auth.app)?Promise.reject(Ht(e.auth)):By(e,t,null)}function Fy(n,t){return By(K(n),null,t)}async function By(n,t,e){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(r.email=t),e&&(r.password=e);const o=await xn(n,UT(i,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function E0(n){var t,e;if(!n)return null;const{providerId:i}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(n!=null&&n.idToken)){const o=(e=(t=lc(n.idToken))===null||t===void 0?void 0:t.firebase)===null||e===void 0?void 0:e.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new as(r,a)}}if(!i)return null;switch(i){case"facebook.com":return new I0(r,s);case"github.com":return new T0(r,s);case"google.com":return new A0(r,s);case"twitter.com":return new S0(r,s,n.screenName||null);case"custom":case"anonymous":return new as(r,null);default:return new as(r,i,s)}}class as{constructor(t,e,i={}){this.isNewUser=t,this.providerId=e,this.profile=i}}class Uy extends as{constructor(t,e,i,s){super(t,e,i),this.username=s}}class I0 extends as{constructor(t,e){super(t,"facebook.com",e)}}class T0 extends Uy{constructor(t,e){super(t,"github.com",e,typeof(e==null?void 0:e.login)=="string"?e==null?void 0:e.login:null)}}class A0 extends as{constructor(t,e){super(t,"google.com",e)}}class S0 extends Uy{constructor(t,e,i){super(t,"twitter.com",e,i)}}function x0(n){const{user:t,_tokenResponse:e}=n;return t.isAnonymous&&!e?{providerId:null,isNewUser:!1,profile:null}:E0(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(n,t){return K(n).setPersistence(t)}function k0(n){return Iy(n)}async function C0(n,t){return Rt(n).validatePassword(t)}function $y(n,t,e,i){return K(n).onIdTokenChanged(t,e,i)}function zy(n,t,e){return K(n).beforeAuthStateChanged(t,e)}function jy(n,t,e,i){return K(n).onAuthStateChanged(t,e,i)}function R0(n){K(n).useDeviceLanguage()}function D0(n,t){return K(n).updateCurrentUser(t)}function qy(n){return K(n).signOut()}function M0(n,t){return Rt(n).revokeAccessToken(t)}async function Hy(n){return K(n).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,i){this.type=t,this.credential=e,this.user=i}static _fromIdtoken(t,e){return new Ai("enroll",t,e)}static _fromMfaPendingCredential(t){return new Ai("signin",t)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(t){var e,i;if(t!=null&&t.multiFactorSession){if(!((e=t.multiFactorSession)===null||e===void 0)&&e.pendingCredential)return Ai._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(!((i=t.multiFactorSession)===null||i===void 0)&&i.idToken)return Ai._fromIdtoken(t.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,i){this.session=t,this.hints=e,this.signInResolver=i}static _fromError(t,e){const i=Rt(t),s=e.customData._serverResponse,r=(s.mfaInfo||[]).map(a=>to._fromServerResponse(i,a));U(s.mfaPendingCredential,i,"internal-error");const o=Ai._fromMfaPendingCredential(s.mfaPendingCredential);return new nd(o,r,async a=>{const c=await a._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(e.operationType){case"signIn":const d=await ke._fromIdTokenResponse(i,e.operationType,l);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return U(e.user,i,"internal-error"),ke._forOperation(e.user,e.operationType,l);default:be(i,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function O0(n,t){var e;const i=K(n),s=t;return U(t.customData.operationType,i,"argument-error"),U((e=s.customData._serverResponse)===null||e===void 0?void 0:e.mfaPendingCredential,i,"argument-error"),nd._fromError(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:start",wt(n,t))}function N0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:finalize",wt(n,t))}function L0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:start",wt(n,t))}function V0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:finalize",wt(n,t))}function F0(n,t){return Et(n,"POST","/v2/accounts/mfaEnrollment:withdraw",wt(n,t))}class id{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(i=>to._fromServerResponse(t.auth,i)))})}static _fromUser(t){return new id(t)}async getSession(){return Ai._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(t,e){const i=t,s=await this.getSession(),r=await xn(this.user,i._process(this.user.auth,s,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){const e=typeof t=="string"?t:t.uid,i=await this.user.getIdToken();try{const s=await xn(this.user,F0(this.user.auth,{idToken:i,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==e),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const wl=new WeakMap;function B0(n){const t=K(n);return wl.has(t)||wl.set(t,id._fromUser(t)),wl.get(t)}const Fa="__sak";/**
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
 */class Wy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=1e3,$0=10;class Gy extends Wy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_y(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);_T()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,$0):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},U0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gy.type="LOCAL";const Ky=Gy;/**
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
 */const z0=1e3;function El(n){var t,e;const i=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),s=RegExp(`${i}=([^;]+)`);return(e=(t=document.cookie.match(s))===null||t===void 0?void 0:t[1])!==null&&e!==void 0?e:null}function Il(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class Yy{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(t){if(typeof window===void 0)return t;const e=new URL(`${window.location.origin}/__cookies__`);return e.searchParams.set("finalTarget",t),e}async _isAvailable(){var t;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(t=navigator.cookieEnabled)!==null&&t!==void 0?t:!0}async _set(t,e){}async _get(t){if(!this._isAvailable())return null;const e=Il(t);if(window.cookieStore){const i=await window.cookieStore.get(e);return i==null?void 0:i.value}return El(e)}async _remove(t){if(!this._isAvailable()||!await this._get(t))return;const i=Il(t);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(t,e){if(!this._isAvailable())return;const i=Il(t);if(window.cookieStore){const a=(l=>{const d=l.changed.find(f=>f.name===i);d&&e(d.value),l.deleted.find(f=>f.name===i)&&e(null)}),c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(e,c),window.cookieStore.addEventListener("change",a)}let s=El(i);const r=setInterval(()=>{const a=El(i);a!==s&&(e(a),s=a)},z0),o=()=>clearInterval(r);this.listenerUnsubscribes.set(e,o)}_removeListener(t,e){const i=this.listenerUnsubscribes.get(e);i&&(i(),this.listenerUnsubscribes.delete(e))}}Yy.type="COOKIE";const j0=Yy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends Wy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Xy.type="SESSION";const sd=Xy;/**
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
 */function q0(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class gc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new gc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await q0(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class H0{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=mc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function W0(n){Vt().location.href=n}/**
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
 */function rd(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function G0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Y0(){return rd()?self:null}/**
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
 */const Qy="firebaseLocalStorageDb",X0=1,Ba="firebaseLocalStorage",Jy="fbase_key";class eo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function yc(n,t){return n.transaction([Ba],t?"readwrite":"readonly").objectStore(Ba)}function Q0(){const n=indexedDB.deleteDatabase(Qy);return new eo(n).toPromise()}function nu(){const n=indexedDB.open(Qy,X0);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ba,{keyPath:Jy})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ba)?t(i):(i.close(),await Q0(),t(await nu()))})})}async function Qf(n,t,e){const i=yc(n,!0).put({[Jy]:t,value:e});return new eo(i).toPromise()}async function J0(n,t){const e=yc(n,!1).get(t),i=await new eo(e).toPromise();return i===void 0?null:i.value}function Jf(n,t){const e=yc(n,!0).delete(t);return new eo(e).toPromise()}const Z0=800,tA=3;class Zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>tA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(Y0()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await G0(),!this.activeServiceWorker)return;this.sender=new H0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||K0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await nu();return await Qf(t,Fa,"1"),await Jf(t,Fa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qf(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>J0(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Jf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=yc(s,!1).getAll();return new eo(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zy.type="LOCAL";const tv=Zy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:start",wt(n,t))}function eA(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:finalize",wt(n,t))}function nA(n,t){return Et(n,"POST","/v2/accounts/mfaSignIn:finalize",wt(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=wy("rcb"),iA=new Jr(3e4,6e4);class sA{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Vt().grecaptcha)===null||t===void 0)&&t.render)}load(t,e=""){return U(rA(e),t,"argument-error"),this.shouldResolveImmediately(e)&&$f(Vt().grecaptcha)?Promise.resolve(Vt().grecaptcha):new Promise((i,s)=>{const r=Vt().setTimeout(()=>{s(fe(t,"network-request-failed"))},iA.get());Vt()[Tl]=()=>{Vt().clearTimeout(r),delete Vt()[Tl];const a=Vt().grecaptcha;if(!a||!$f(a)){s(fe(t,"internal-error"));return}const c=a.render;a.render=(l,d)=>{const h=c(l,d);return this.counter++,h},this.hostLanguage=e,i(a)};const o=`${ST()}?${Ts({onload:Tl,render:"explicit",hl:e})}`;Xu(o).catch(()=>{clearTimeout(r),s(fe(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var e;return!!(!((e=Vt().grecaptcha)===null||e===void 0)&&e.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function rA(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class oA{async load(t){return new RT(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="recaptcha",aA={theme:"light",type:"image"};class cA{constructor(t,e,i=Object.assign({},aA)){this.parameters=i,this.type=_r,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Rt(t),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;U(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new oA:new sA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),i=e.getResponse(t);return i||new Promise(s=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(i=>i(e)),typeof t=="function")t(e);else if(typeof t=="string"){const i=Vt()[t];typeof i=="function"&&i(e)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){U(Gu()&&!rd(),this.auth,"internal-error"),await lA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await lT(this.auth);U(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function lA(){let n=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}n=()=>t(),window.addEventListener("load",n)}).catch(t=>{throw n&&window.removeEventListener("load",n),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=Yn._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function uA(n,t,e){if(At(n.app))return Promise.reject(Ht(n));const i=Rt(n),s=await vc(i,t,K(e));return new od(s,r=>hc(i,r))}async function dA(n,t,e){const i=K(n);await dc(!1,i,"phone");const s=await vc(i.auth,t,K(e));return new od(s,r=>My(i,r))}async function hA(n,t,e){const i=K(n);if(At(i.auth.app))return Promise.reject(Ht(i.auth));const s=await vc(i.auth,t,K(e));return new od(s,r=>fc(i,r))}async function vc(n,t,e){var i;if(!n._getRecaptchaConfig())try{await Iy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof t=="string"?s={phoneNumber:t}:s=t,"session"in s){const r=s.session;if("phoneNumber"in s){U(r.type==="enroll",n,"internal-error");const o={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Kn(n,o,"mfaSmsEnrollment",async(d,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===yr){U((e==null?void 0:e.type)===_r,d,"argument-error");const f=await Al(d,h,e);return Xf(d,f)}return Xf(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{U(r.type==="signin",n,"internal-error");const o=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;U(o,n,"missing-multi-factor-info");const a={mfaPendingCredential:r.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Kn(n,a,"mfaSmsSignIn",async(h,f)=>{if(f.phoneSignInInfo.captchaResponse===yr){U((e==null?void 0:e.type)===_r,h,"argument-error");const g=await Al(h,f,e);return Zf(h,g)}return Zf(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const r={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Kn(n,r,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===yr){U((e==null?void 0:e.type)===_r,l,"argument-error");const h=await Al(l,d,e);return Kf(l,h)}return Kf(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{e==null||e._reset()}}async function fA(n,t){const e=K(n);if(At(e.auth.app))return Promise.reject(Ht(e.auth));await Qu(e,t)}async function Al(n,t,e){U(e.type===_r,n,"argument-error");const i=await e.verify();U(typeof i=="string",n,"argument-error");const s=Object.assign({},t);if("phoneEnrollmentInfo"in s){const r=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,c=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:r,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:c}}),s}else if("phoneSignInInfo"in s){const r=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:r,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:i}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.providerId=Pi.PROVIDER_ID,this.auth=Rt(t)}verifyPhoneNumber(t,e){return vc(this.auth,t,K(e))}static credential(t,e){return Yn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Pi.credentialFromTaggedObject(e)}static credentialFromError(t){return Pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:i}=t;return e&&i?Yn._fromTokenResponse(e,i):null}}Pi.PROVIDER_ID="phone";Pi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function zi(n,t){return t?mn(t):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ad extends xs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return wn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return wn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function pA(n){return Dy(n.auth,new ad(n),n.bypassAuthState)}function gA(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Ry(e,new ad(n),n.bypassAuthState)}async function mA(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),Qu(e,new ad(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pA;case"linkViaPopup":case"linkViaRedirect":return mA;case"reauthViaPopup":case"reauthViaRedirect":return gA;default:be(this.auth,"internal-error")}}resolve(t){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new Jr(2e3,1e4);async function vA(n,t,e){if(At(n.app))return Promise.reject(fe(n,"operation-not-supported-in-this-environment"));const i=Rt(n);Ss(n,t,Mn);const s=zi(i,e);return new yn(i,"signInViaPopup",t,s).executeNotNull()}async function _A(n,t,e){const i=K(n);if(At(i.auth.app))return Promise.reject(fe(i.auth,"operation-not-supported-in-this-environment"));Ss(i.auth,t,Mn);const s=zi(i.auth,e);return new yn(i.auth,"reauthViaPopup",t,s,i).executeNotNull()}async function bA(n,t,e){const i=K(n);Ss(i.auth,t,Mn);const s=zi(i.auth,e);return new yn(i.auth,"linkViaPopup",t,s,i).executeNotNull()}class yn extends ev{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const t=mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,yA.get())};t()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="pendingRedirect",la=new Map;class EA extends ev{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=la.get(this.auth._key());if(!t){try{const i=await IA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}la.set(this.auth._key(),t)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IA(n,t){const e=iv(t),i=nv(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}async function cd(n,t){return nv(n)._set(iv(t),"true")}function TA(n,t){la.set(n._key(),t)}function nv(n){return mn(n._redirectPersistence)}function iv(n){return ca(wA,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n,t,e){return SA(n,t,e)}async function SA(n,t,e){if(At(n.app))return Promise.reject(Ht(n));const i=Rt(n);Ss(n,t,Mn),await i._initializationPromise;const s=zi(i,e);return await cd(s,i),s._openRedirect(i,t,"signInViaRedirect")}function xA(n,t,e){return PA(n,t,e)}async function PA(n,t,e){const i=K(n);if(Ss(i.auth,t,Mn),At(i.auth.app))return Promise.reject(Ht(i.auth));await i.auth._initializationPromise;const s=zi(i.auth,e);await cd(s,i.auth);const r=await rv(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",r)}function kA(n,t,e){return CA(n,t,e)}async function CA(n,t,e){const i=K(n);Ss(i.auth,t,Mn),await i.auth._initializationPromise;const s=zi(i.auth,e);await dc(!1,i,t.providerId),await cd(s,i.auth);const r=await rv(i);return s._openRedirect(i.auth,t,"linkViaRedirect",r)}async function RA(n,t){return await Rt(n)._initializationPromise,sv(n,t,!1)}async function sv(n,t,e=!1){if(At(n.app))return Promise.reject(Ht(n));const i=Rt(n),s=zi(i,t),o=await new EA(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function rv(n){const t=mc(`${n.uid}:::`);return n._redirectEventId=t,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=600*1e3;class MA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!OA(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!ov(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(fe(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=DA&&this.cachedEventUids.clear(),this.cachedEventUids.has(tp(t))}saveEventToCache(t){this.cachedEventUids.add(tp(t)),this.lastProcessedEventTime=Date.now()}}function tp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function ov({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function OA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ov(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(n,t={}){return Et(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VA=/^https?/;async function FA(n){if(n.config.emulator)return;const{authorizedDomains:t}=await NA(n);for(const e of t)try{if(BA(e))return}catch{}be(n,"unauthorized-domain")}function BA(n){const t=Dr(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!VA.test(e))return!1;if(LA.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const UA=new Jr(3e4,6e4);function ep(){const n=Vt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function $A(n){return new Promise((t,e)=>{var i,s,r;function o(){ep(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ep(),e(fe(n,"network-request-failed"))},timeout:UA.get()})}if(!((s=(i=Vt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=Vt().gapi)===null||r===void 0)&&r.load)o();else{const a=wy("iframefcb");return Vt()[a]=()=>{gapi.load?o():e(fe(n,"network-request-failed"))},Xu(`${PT()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw ua=null,t})}let ua=null;function zA(n){return ua=ua||$A(n),ua}/**
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
 */const jA=new Jr(5e3,15e3),qA="__/auth/iframe",HA="emulator/auth/iframe",WA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KA(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Ku(t,HA):`https://${n.config.authDomain}/${qA}`,i={apiKey:t.apiKey,appName:n.name,v:As},s=GA.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${Ts(i).slice(1)}`}async function YA(n){const t=await zA(n),e=Vt().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:KA(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WA,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=fe(n,"network-request-failed"),a=Vt().setTimeout(()=>{r(o)},jA.get());function c(){Vt().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const XA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QA=500,JA=600,ZA="_blank",tS="http://localhost";class np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eS(n,t,e,i=QA,s=JA){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},XA),{width:i.toString(),height:s.toString(),top:r,left:o}),l=ae().toLowerCase();e&&(a=py(l)?ZA:e),hy(l)&&(t=t||tS,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(vT(l)&&a!=="_self")return nS(t||"",a),new np(null);const h=window.open(t||"",a,d);U(h,n,"popup-blocked");try{h.focus()}catch{}return new np(h)}function nS(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const iS="__/auth/handler",sS="emulator/auth/handler",rS=encodeURIComponent("fac");async function ip(n,t,e,i,s,r){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:As,eventId:s};if(t instanceof Mn){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",NE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof ks){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${rS}=${encodeURIComponent(c)}`:"";return`${oS(n)}?${Ts(a).slice(1)}${l}`}function oS({config:n}){return n.emulator?Ku(n,sS):`https://${n.authDomain}/${iS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="webStorageSupport";class aS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sd,this._completeRedirectFn=sv,this._overrideRedirectResult=TA}async _openPopup(t,e,i,s){var r;Sn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ip(t,e,i,Dr(),s);return eS(t,o,mc())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await ip(t,e,i,Dr(),s);return W0(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(Sn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await YA(t),i=new MA(t);return e.register("authEvent",s=>(U(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Sl,{type:Sl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Sl];o!==void 0&&e(!!o),be(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=FA(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _y()||fy()||Yu()}}const av=aS;class cv{constructor(t){this.factorId=t}_process(t,e,i){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,i);case"signin":return this._finalizeSignIn(t,e.credential);default:return He("unexpected MultiFactorSessionType")}}}class ld extends cv{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ld(t)}_finalizeEnroll(t,e,i){return N0(t,{idToken:e,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return eA(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lv{constructor(){}static assertion(t){return ld._fromCredential(t)}}lv.FACTOR_ID="phone";class uv{static assertionForEnrollment(t,e){return Nr._fromSecret(t,e)}static assertionForSignIn(t,e){return Nr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const i=t;U(typeof((e=i.user)===null||e===void 0?void 0:e.auth)<"u","internal-error");const s=await L0(i.user.auth,{idToken:i.credential,totpEnrollmentInfo:{}});return _c._fromStartTotpMfaEnrollmentResponse(s,i.user.auth)}}uv.FACTOR_ID="totp";class Nr extends cv{constructor(t,e,i){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=i}static _fromSecret(t,e){return new Nr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Nr(e,t)}async _finalizeEnroll(t,e,i){return U(typeof this.secret<"u",t,"argument-error"),V0(t,{idToken:e,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){U(this.enrollmentId!==void 0&&this.otp!==void 0,t,"argument-error");const i={verificationCode:this.otp};return nA(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}}class _c{constructor(t,e,i,s,r,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=i,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new _c(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var i;let s=!1;return(Bo(t)||Bo(e))&&(s=!0),s&&(Bo(t)&&(t=((i=this.auth.currentUser)===null||i===void 0?void 0:i.email)||"unknownuser"),Bo(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Bo(n){return typeof n>"u"||(n==null?void 0:n.length)===0}var sp="@firebase/auth",rp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uS(n){hs(new Vi("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:by(n)},l=new TT(i,s,r,c);return VT(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),hs(new Vi("auth-internal",t=>{const e=Rt(t.getProvider("auth").getImmediate());return(i=>new cS(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(sp,rp,lS(n)),Gn(sp,rp,"esm2017")}/**
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
 */const dS=300,hS=Hm("authIdTokenMaxAge")||dS;let op=null;const fS=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>hS)return;const s=e==null?void 0:e.token;op!==s&&(op=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dv(n=Qm()){const t=ju(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Ty(n,{popupRedirectResolver:av,persistence:[tv,Ky,sd]}),i=Hm("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=fS(r.toString());zy(e,o,()=>o(e.currentUser)),$y(e,a=>o(a))}}const s=jm("auth");return s&&Ay(e,`http://${s}`),e}function pS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}AT({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=fe("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",pS().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uS("Browser");const gS=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:QI,ActionCodeURL:Ps,AuthCredential:xs,AuthErrorCodes:tT,EmailAuthCredential:fs,EmailAuthProvider:tn,FacebookAuthProvider:hn,FactorId:GI,GithubAuthProvider:pn,GoogleAuthProvider:fn,OAuthCredential:Qe,OAuthProvider:vr,OperationType:XI,PhoneAuthCredential:Yn,PhoneAuthProvider:Pi,PhoneMultiFactorGenerator:lv,ProviderId:KI,RecaptchaVerifier:cA,SAMLAuthProvider:La,SignInMethod:YI,TotpMultiFactorGenerator:uv,TotpSecret:_c,TwitterAuthProvider:gn,applyActionCode:d0,beforeAuthStateChanged:zy,browserCookiePersistence:j0,browserLocalPersistence:Ky,browserPopupRedirectResolver:av,browserSessionPersistence:sd,checkActionCode:Ny,confirmPasswordReset:u0,connectAuthEmulator:Ay,createUserWithEmailAndPassword:Ly,debugErrorMap:ZI,deleteUser:Hy,fetchSignInMethodsForEmail:y0,getAdditionalUserInfo:x0,getAuth:dv,getIdToken:hT,getIdTokenResult:cy,getMultiFactorResolver:O0,getRedirectResult:RA,inMemoryPersistence:eu,indexedDBLocalPersistence:tv,initializeAuth:Ty,initializeRecaptchaConfig:k0,isSignInWithEmailLink:p0,linkWithCredential:My,linkWithPhoneNumber:dA,linkWithPopup:bA,linkWithRedirect:kA,multiFactor:B0,onAuthStateChanged:jy,onIdTokenChanged:$y,parseActionCodeURL:i0,prodErrorMap:ey,reauthenticateWithCredential:fc,reauthenticateWithPhoneNumber:hA,reauthenticateWithPopup:_A,reauthenticateWithRedirect:xA,reload:ly,revokeAccessToken:M0,sendEmailVerification:v0,sendPasswordResetEmail:Oy,sendSignInLinkToEmail:f0,setPersistence:P0,signInAnonymously:o0,signInWithCredential:hc,signInWithCustomToken:l0,signInWithEmailAndPassword:Vy,signInWithEmailLink:g0,signInWithPhoneNumber:uA,signInWithPopup:vA,signInWithRedirect:AA,signOut:qy,unlink:a0,updateCurrentUser:D0,updateEmail:w0,updatePassword:Fy,updatePhoneNumber:fA,updateProfile:ed,useDeviceLanguage:R0,validatePassword:C0,verifyBeforeUpdateEmail:_0,verifyPasswordResetCode:h0},Symbol.toStringTag,{value:"Module"}));var mS="firebase",yS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(mS,yS,"app");var ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,hv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,b){function E(){}E.prototype=b.prototype,T.D=b.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(S,x,P){for(var A=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)A[ot-2]=arguments[ot];return b.prototype[x].apply(S,A)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,b,E){E||(E=0);var S=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)S[x]=b.charCodeAt(E++)|b.charCodeAt(E++)<<8|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<24;else for(x=0;16>x;++x)S[x]=b[E++]|b[E++]<<8|b[E++]<<16|b[E++]<<24;b=T.g[0],E=T.g[1],x=T.g[2];var P=T.g[3],A=b+(P^E&(x^P))+S[0]+3614090360&4294967295;b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[1]+3905402710&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[2]+606105819&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[3]+3250441966&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[4]+4118548399&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[5]+1200080426&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[6]+2821735955&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[7]+4249261313&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[8]+1770035416&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[9]+2336552879&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[10]+4294925233&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[11]+2304563134&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(P^E&(x^P))+S[12]+1804603682&4294967295,b=E+(A<<7&4294967295|A>>>25),A=P+(x^b&(E^x))+S[13]+4254626195&4294967295,P=b+(A<<12&4294967295|A>>>20),A=x+(E^P&(b^E))+S[14]+2792965006&4294967295,x=P+(A<<17&4294967295|A>>>15),A=E+(b^x&(P^b))+S[15]+1236535329&4294967295,E=x+(A<<22&4294967295|A>>>10),A=b+(x^P&(E^x))+S[1]+4129170786&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[6]+3225465664&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[11]+643717713&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[0]+3921069994&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[5]+3593408605&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[10]+38016083&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[15]+3634488961&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[4]+3889429448&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[9]+568446438&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[14]+3275163606&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[3]+4107603335&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[8]+1163531501&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(x^P&(E^x))+S[13]+2850285829&4294967295,b=E+(A<<5&4294967295|A>>>27),A=P+(E^x&(b^E))+S[2]+4243563512&4294967295,P=b+(A<<9&4294967295|A>>>23),A=x+(b^E&(P^b))+S[7]+1735328473&4294967295,x=P+(A<<14&4294967295|A>>>18),A=E+(P^b&(x^P))+S[12]+2368359562&4294967295,E=x+(A<<20&4294967295|A>>>12),A=b+(E^x^P)+S[5]+4294588738&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[8]+2272392833&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[11]+1839030562&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[14]+4259657740&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[1]+2763975236&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[4]+1272893353&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[7]+4139469664&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[10]+3200236656&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[13]+681279174&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[0]+3936430074&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[3]+3572445317&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[6]+76029189&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(E^x^P)+S[9]+3654602809&4294967295,b=E+(A<<4&4294967295|A>>>28),A=P+(b^E^x)+S[12]+3873151461&4294967295,P=b+(A<<11&4294967295|A>>>21),A=x+(P^b^E)+S[15]+530742520&4294967295,x=P+(A<<16&4294967295|A>>>16),A=E+(x^P^b)+S[2]+3299628645&4294967295,E=x+(A<<23&4294967295|A>>>9),A=b+(x^(E|~P))+S[0]+4096336452&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[7]+1126891415&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[14]+2878612391&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[5]+4237533241&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[12]+1700485571&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[3]+2399980690&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[10]+4293915773&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[1]+2240044497&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[8]+1873313359&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[15]+4264355552&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[6]+2734768916&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[13]+1309151649&4294967295,E=x+(A<<21&4294967295|A>>>11),A=b+(x^(E|~P))+S[4]+4149444226&4294967295,b=E+(A<<6&4294967295|A>>>26),A=P+(E^(b|~x))+S[11]+3174756917&4294967295,P=b+(A<<10&4294967295|A>>>22),A=x+(b^(P|~E))+S[2]+718787259&4294967295,x=P+(A<<15&4294967295|A>>>17),A=E+(P^(x|~b))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+b&4294967295,T.g[1]=T.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+P&4294967295}i.prototype.u=function(T,b){b===void 0&&(b=T.length);for(var E=b-this.blockSize,S=this.B,x=this.h,P=0;P<b;){if(x==0)for(;P<=E;)s(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<b;)if(S[x++]=T.charCodeAt(P++),x==this.blockSize){s(this,S),x=0;break}}else for(;P<b;)if(S[x++]=T[P++],x==this.blockSize){s(this,S),x=0;break}}this.h=x,this.o+=b},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var b=1;b<T.length-8;++b)T[b]=0;var E=8*this.o;for(b=T.length-8;b<T.length;++b)T[b]=E&255,E/=256;for(this.u(T),T=Array(16),b=E=0;4>b;++b)for(var S=0;32>S;S+=8)T[E++]=this.g[b]>>>S&255;return T};function r(T,b){var E=a;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=b(T)}function o(T,b){this.h=b;for(var E=[],S=!0,x=T.length-1;0<=x;x--){var P=T[x]|0;S&&P==b||(E[x]=P,S=!1)}this.g=E}var a={};function c(T){return-128<=T&&128>T?r(T,function(b){return new o([b|0],0>b?-1:0)}):new o([T|0],0>T?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return y(l(-T));for(var b=[],E=1,S=0;T>=E;S++)b[S]=T/E|0,E*=4294967296;return new o(b,0)}function d(T,b){if(T.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(T.charAt(0)=="-")return y(d(T.substring(1),b));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=l(Math.pow(b,8)),S=h,x=0;x<T.length;x+=8){var P=Math.min(8,T.length-x),A=parseInt(T.substring(x,x+P),b);8>P?(P=l(Math.pow(b,P)),S=S.j(P).add(l(A))):(S=S.j(E),S=S.add(l(A)))}return S}var h=c(0),f=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(_(this))return-y(this).m();for(var T=0,b=1,E=0;E<this.g.length;E++){var S=this.i(E);T+=(0<=S?S:4294967296+S)*b,b*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(v(this))return"0";if(_(this))return"-"+y(this).toString(T);for(var b=l(Math.pow(T,6)),E=this,S="";;){var x=D(E,b).g;E=I(E,x.j(b));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=x,v(E))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function v(T){if(T.h!=0)return!1;for(var b=0;b<T.g.length;b++)if(T.g[b]!=0)return!1;return!0}function _(T){return T.h==-1}n.l=function(T){return T=I(this,T),_(T)?-1:v(T)?0:1};function y(T){for(var b=T.g.length,E=[],S=0;S<b;S++)E[S]=~T.g[S];return new o(E,~T.h).add(f)}n.abs=function(){return _(this)?y(this):this},n.add=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0,x=0;x<=b;x++){var P=S+(this.i(x)&65535)+(T.i(x)&65535),A=(P>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);S=A>>>16,P&=65535,A&=65535,E[x]=A<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(T,b){return T.add(y(b))}n.j=function(T){if(v(this)||v(T))return h;if(_(this))return _(T)?y(this).j(y(T)):y(y(this).j(T));if(_(T))return y(this.j(y(T)));if(0>this.l(g)&&0>T.l(g))return l(this.m()*T.m());for(var b=this.g.length+T.g.length,E=[],S=0;S<2*b;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var x=0;x<T.g.length;x++){var P=this.i(S)>>>16,A=this.i(S)&65535,ot=T.i(x)>>>16,et=T.i(x)&65535;E[2*S+2*x]+=A*et,k(E,2*S+2*x),E[2*S+2*x+1]+=P*et,k(E,2*S+2*x+1),E[2*S+2*x+1]+=A*ot,k(E,2*S+2*x+1),E[2*S+2*x+2]+=P*ot,k(E,2*S+2*x+2)}for(S=0;S<b;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=b;S<2*b;S++)E[S]=0;return new o(E,0)};function k(T,b){for(;(T[b]&65535)!=T[b];)T[b+1]+=T[b]>>>16,T[b]&=65535,b++}function R(T,b){this.g=T,this.h=b}function D(T,b){if(v(b))throw Error("division by zero");if(v(T))return new R(h,h);if(_(T))return b=D(y(T),b),new R(y(b.g),y(b.h));if(_(b))return b=D(T,y(b)),new R(y(b.g),b.h);if(30<T.g.length){if(_(T)||_(b))throw Error("slowDivide_ only works with positive integers.");for(var E=f,S=b;0>=S.l(T);)E=O(E),S=O(S);var x=L(E,1),P=L(S,1);for(S=L(S,2),E=L(E,2);!v(S);){var A=P.add(S);0>=A.l(T)&&(x=x.add(E),P=A),S=L(S,1),E=L(E,1)}return b=I(T,x.j(b)),new R(x,b)}for(x=h;0<=T.l(b);){for(E=Math.max(1,Math.floor(T.m()/b.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=l(E),A=P.j(b);_(A)||0<A.l(T);)E-=S,P=l(E),A=P.j(b);v(P)&&(P=f),x=x.add(P),T=I(T,A)}return new R(x,T)}n.A=function(T){return D(this,T).h},n.and=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)&T.i(S);return new o(E,this.h&T.h)},n.or=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)|T.i(S);return new o(E,this.h|T.h)},n.xor=function(T){for(var b=Math.max(this.g.length,T.g.length),E=[],S=0;S<b;S++)E[S]=this.i(S)^T.i(S);return new o(E,this.h^T.h)};function O(T){for(var b=T.g.length+1,E=[],S=0;S<b;S++)E[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(E,T.h)}function L(T,b){var E=b>>5;b%=32;for(var S=T.g.length-E,x=[],P=0;P<S;P++)x[P]=0<b?T.i(P+E)>>>b|T.i(P+E+1)<<32-b:T.i(P+E);return new o(x,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,hv=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Xn=o}).apply(typeof ap<"u"?ap:typeof self<"u"?self:typeof window<"u"?window:{});var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fv,sr,pv,da,iu,gv,mv,yv;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,m){return u==Array.prototype||u==Object.prototype||(u[p]=m.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uo=="object"&&Uo];for(var p=0;p<u.length;++p){var m=u[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=e(this);function s(u,p){if(p)t:{var m=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var C=u[w];if(!(C in m))break t;m=m[C]}u=u[u.length-1],w=m[u],p=p(w),p!=w&&p!=null&&t(m,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var m=0,w=!1,C={next:function(){if(!w&&m<u.length){var M=m++;return{value:p(M,u[M]),done:!1}}return w=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(u){return u||function(){return r(this,function(p,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,m){return u.call.apply(u.bind,arguments)}function h(u,p,m){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,w),u.apply(p,C)}}return function(){return u.apply(p,arguments)}}function f(u,p,m){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function g(u,p){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function v(u,p){function m(){}m.prototype=p.prototype,u.aa=p.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(w,C,M){for(var $=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)$[pt-2]=arguments[pt];return p.prototype[C].apply(w,$)}}function _(u){const p=u.length;if(0<p){const m=Array(p);for(let w=0;w<p;w++)m[w]=u[w];return m}return[]}function y(u,p){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const C=u.length||0,M=w.length||0;u.length=C+M;for(let $=0;$<M;$++)u[C+$]=w[$]}else u.push(w)}}class I{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function k(u){return/^[\s\xa0]*$/.test(u)}function R(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var O=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function L(u,p,m){for(const w in u)p.call(m,u[w],w,u)}function T(u,p){for(const m in u)p.call(void 0,u[m],m,u)}function b(u){const p={};for(const m in u)p[m]=u[m];return p}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(u,p){let m,w;for(let C=1;C<arguments.length;C++){w=arguments[C];for(m in w)u[m]=w[m];for(let M=0;M<E.length;M++)m=E[M],Object.prototype.hasOwnProperty.call(w,m)&&(u[m]=w[m])}}function x(u){var p=1;u=u.split(":");const m=[];for(;0<p&&u.length;)m.push(u.shift()),p--;return u.length&&m.push(u.join(":")),m}function P(u){a.setTimeout(()=>{throw u},0)}function A(){var u=Nt;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ot{constructor(){this.h=this.g=null}add(p,m){const w=et.get();w.set(p,m),this.h?this.h.next=w:this.g=w,this.h=w}}var et=new I(()=>new ht,u=>u.reset());class ht{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ft,Wt=!1,Nt=new ot,en=()=>{const u=a.Promise.resolve(void 0);ft=()=>{u.then(Wi)}};var Wi=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(m){P(m)}var p=et;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Wt=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xt(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var nn=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,p),a.removeEventListener("test",m,p)}catch{}return u})();function Ce(u,p){if(xt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(O){t:{try{D(p.nodeName);var C=!0;break t}catch{}C=!1}C||(p=null)}}else m=="mouseover"?p=u.fromElement:m=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:sn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}v(Ce,xt);var sn={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var _o="closure_listenable_"+(1e6*Math.random()|0),Rw=0;function Dw(u,p,m,w,C){this.listener=u,this.proxy=null,this.src=p,this.type=m,this.capture=!!w,this.ha=C,this.key=++Rw,this.da=this.fa=!1}function bo(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function wo(u){this.src=u,this.g={},this.h=0}wo.prototype.add=function(u,p,m,w,C){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var $=Gc(u,p,w,C);return-1<$?(p=u[$],m||(p.fa=!1)):(p=new Dw(p,this.src,M,!!w,C),p.fa=m,u.push(p)),p};function Wc(u,p){var m=p.type;if(m in u.g){var w=u.g[m],C=Array.prototype.indexOf.call(w,p,void 0),M;(M=0<=C)&&Array.prototype.splice.call(w,C,1),M&&(bo(p),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Gc(u,p,m,w){for(var C=0;C<u.length;++C){var M=u[C];if(!M.da&&M.listener==p&&M.capture==!!m&&M.ha==w)return C}return-1}var Kc="closure_lm_"+(1e6*Math.random()|0),Yc={};function kh(u,p,m,w,C){if(Array.isArray(p)){for(var M=0;M<p.length;M++)kh(u,p[M],m,w,C);return null}return m=Dh(m),u&&u[_o]?u.K(p,m,l(w)?!!w.capture:!1,C):Mw(u,p,m,!1,w,C)}function Mw(u,p,m,w,C,M){if(!p)throw Error("Invalid event type");var $=l(C)?!!C.capture:!!C,pt=Qc(u);if(pt||(u[Kc]=pt=new wo(u)),m=pt.add(p,m,w,$,M),m.proxy)return m;if(w=Ow(),m.proxy=w,w.src=u,w.listener=m,u.addEventListener)nn||(C=$),C===void 0&&(C=!1),u.addEventListener(p.toString(),w,C);else if(u.attachEvent)u.attachEvent(Rh(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ow(){function u(m){return p.call(u.src,u.listener,m)}const p=Nw;return u}function Ch(u,p,m,w,C){if(Array.isArray(p))for(var M=0;M<p.length;M++)Ch(u,p[M],m,w,C);else w=l(w)?!!w.capture:!!w,m=Dh(m),u&&u[_o]?(u=u.i,p=String(p).toString(),p in u.g&&(M=u.g[p],m=Gc(M,m,w,C),-1<m&&(bo(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete u.g[p],u.h--)))):u&&(u=Qc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Gc(p,m,w,C)),(m=-1<u?p[u]:null)&&Xc(m))}function Xc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[_o])Wc(p.i,u);else{var m=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(m,w,u.capture):p.detachEvent?p.detachEvent(Rh(m),w):p.addListener&&p.removeListener&&p.removeListener(w),(m=Qc(p))?(Wc(m,u),m.h==0&&(m.src=null,p[Kc]=null)):bo(u)}}}function Rh(u){return u in Yc?Yc[u]:Yc[u]="on"+u}function Nw(u,p){if(u.da)u=!0;else{p=new Ce(p,this);var m=u.listener,w=u.ha||u.src;u.fa&&Xc(u),u=m.call(w,p)}return u}function Qc(u){return u=u[Kc],u instanceof wo?u:null}var Jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dh(u){return typeof u=="function"?u:(u[Jc]||(u[Jc]=function(p){return u.handleEvent(p)}),u[Jc])}function Jt(){le.call(this),this.i=new wo(this),this.M=this,this.F=null}v(Jt,le),Jt.prototype[_o]=!0,Jt.prototype.removeEventListener=function(u,p,m,w){Ch(this,u,p,m,w)};function ue(u,p){var m,w=u.F;if(w)for(m=[];w;w=w.F)m.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new xt(p,u);else if(p instanceof xt)p.target=p.target||u;else{var C=p;p=new xt(w,u),S(p,C)}if(C=!0,m)for(var M=m.length-1;0<=M;M--){var $=p.g=m[M];C=Eo($,w,!0,p)&&C}if($=p.g=u,C=Eo($,w,!0,p)&&C,C=Eo($,w,!1,p)&&C,m)for(M=0;M<m.length;M++)$=p.g=m[M],C=Eo($,w,!1,p)&&C}Jt.prototype.N=function(){if(Jt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var m=u.g[p],w=0;w<m.length;w++)bo(m[w]);delete u.g[p],u.h--}}this.F=null},Jt.prototype.K=function(u,p,m,w){return this.i.add(String(u),p,!1,m,w)},Jt.prototype.L=function(u,p,m,w){return this.i.add(String(u),p,!0,m,w)};function Eo(u,p,m,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var C=!0,M=0;M<p.length;++M){var $=p[M];if($&&!$.da&&$.capture==m){var pt=$.listener,Gt=$.ha||$.src;$.fa&&Wc(u.i,$),C=pt.call(Gt,w)!==!1&&C}}return C&&!w.defaultPrevented}function Mh(u,p,m){if(typeof u=="function")m&&(u=f(u,m));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Oh(u){u.g=Mh(()=>{u.g=null,u.i&&(u.i=!1,Oh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Lw extends le{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Oh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(u){le.call(this),this.h=u,this.g={}}v(Ls,le);var Nh=[];function Lh(u){L(u.g,function(p,m){this.g.hasOwnProperty(m)&&Xc(p)},u),u.g={}}Ls.prototype.N=function(){Ls.aa.N.call(this),Lh(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zc=a.JSON.stringify,Vw=a.JSON.parse,Fw=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function tl(){}tl.prototype.h=null;function Vh(u){return u.h||(u.h=u.i())}function Fh(){}var Vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function el(){xt.call(this,"d")}v(el,xt);function nl(){xt.call(this,"c")}v(nl,xt);var pi={},Bh=null;function Io(){return Bh=Bh||new Jt}pi.La="serverreachability";function Uh(u){xt.call(this,pi.La,u)}v(Uh,xt);function Fs(u){const p=Io();ue(p,new Uh(p))}pi.STAT_EVENT="statevent";function $h(u,p){xt.call(this,pi.STAT_EVENT,u),this.stat=p}v($h,xt);function de(u){const p=Io();ue(p,new $h(p,u))}pi.Ma="timingevent";function zh(u,p){xt.call(this,pi.Ma,u),this.size=p}v(zh,xt);function Bs(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function Bw(u,p,m,w,C,M){u.info(function(){if(u.g)if(M)for(var $="",pt=M.split("&"),Gt=0;Gt<pt.length;Gt++){var ct=pt[Gt].split("=");if(1<ct.length){var Zt=ct[0];ct=ct[1];var te=Zt.split("_");$=2<=te.length&&te[1]=="type"?$+(Zt+"="+ct+"&"):$+(Zt+"=redacted&")}}else $=null;else $=M;return"XMLHTTP REQ ("+w+") [attempt "+C+"]: "+p+`
`+m+`
`+$})}function Uw(u,p,m,w,C,M,$){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+C+"]: "+p+`
`+m+`
`+M+" "+$})}function Gi(u,p,m,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+zw(u,m)+(w?" "+w:"")})}function $w(u,p){u.info(function(){return"TIMEOUT: "+p})}Us.prototype.info=function(){};function zw(u,p){if(!u.g)return p;if(!p)return null;try{var m=JSON.parse(p);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var w=m[u];if(!(2>w.length)){var C=w[1];if(Array.isArray(C)&&!(1>C.length)){var M=C[0];if(M!="noop"&&M!="stop"&&M!="close")for(var $=1;$<C.length;$++)C[$]=""}}}}return Zc(m)}catch{return p}}var To={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},il;function Ao(){}v(Ao,tl),Ao.prototype.g=function(){return new XMLHttpRequest},Ao.prototype.i=function(){return{}},il=new Ao;function Nn(u,p,m,w){this.j=u,this.i=p,this.l=m,this.R=w||1,this.U=new Ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qh}function qh(){this.i=null,this.g="",this.h=!1}var Hh={},sl={};function rl(u,p,m){u.L=1,u.v=ko(rn(p)),u.m=m,u.P=!0,Wh(u,null)}function Wh(u,p){u.F=Date.now(),So(u),u.A=rn(u.v);var m=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),af(m.i,"t",w),u.C=0,m=u.j.J,u.h=new qh,u.g=Af(u.j,m?p:null,!u.m),0<u.O&&(u.M=new Lw(f(u.Y,u,u.g),u.O)),p=u.U,m=u.g,w=u.ca;var C="readystatechange";Array.isArray(C)||(C&&(Nh[0]=C.toString()),C=Nh);for(var M=0;M<C.length;M++){var $=kh(m,C[M],w||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Fs(),Bw(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&on(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)t:{const te=on(this.g);var p=this.g.Ba();const Xi=this.g.Z();if(!(3>te)&&(te!=3||this.g&&(this.h.h||this.g.oa()||pf(this.g)))){this.J||te!=4||p==7||(p==8||0>=Xi?Fs(3):Fs(2)),ol(this);var m=this.g.Z();this.X=m;e:if(Gh(this)){var w=pf(this.g);u="";var C=w.length,M=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gi(this),$s(this);var $="";break e}this.h.i=new a.TextDecoder}for(p=0;p<C;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(M&&p==C-1)});w.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=m==200,Uw(this.i,this.u,this.A,this.l,this.R,te,m),this.o){if(this.T&&!this.K){e:{if(this.g){var pt,Gt=this.g;if((pt=Gt.g?Gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(pt)){var ct=pt;break e}}ct=null}if(m=ct)Gi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,al(this,m);else{this.o=!1,this.s=3,de(12),gi(this),$s(this);break t}}if(this.P){m=!0;let Re;for(;!this.J&&this.C<$.length;)if(Re=jw(this,$),Re==sl){te==4&&(this.s=4,de(14),m=!1),Gi(this.i,this.l,null,"[Incomplete Response]");break}else if(Re==Hh){this.s=4,de(15),Gi(this.i,this.l,$,"[Invalid Chunk]"),m=!1;break}else Gi(this.i,this.l,Re,null),al(this,Re);if(Gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||$.length!=0||this.h.h||(this.s=1,de(16),m=!1),this.o=this.o&&m,!m)Gi(this.i,this.l,$,"[Invalid Chunked Response]"),gi(this),$s(this);else if(0<$.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),fl(Zt),Zt.M=!0,de(11))}}else Gi(this.i,this.l,$,null),al(this,$);te==4&&gi(this),this.o&&!this.J&&(te==4?wf(this.j,this):(this.o=!1,So(this)))}else oE(this.g),m==400&&0<$.indexOf("Unknown SID")?(this.s=3,de(12)):(this.s=0,de(13)),gi(this),$s(this)}}}catch{}finally{}};function Gh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jw(u,p){var m=u.C,w=p.indexOf(`
`,m);return w==-1?sl:(m=Number(p.substring(m,w)),isNaN(m)?Hh:(w+=1,w+m>p.length?sl:(p=p.slice(w,w+m),u.C=w+m,p)))}Nn.prototype.cancel=function(){this.J=!0,gi(this)};function So(u){u.S=Date.now()+u.I,Kh(u,u.I)}function Kh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Bs(f(u.ba,u),p)}function ol(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?($w(this.i,this.A),this.L!=2&&(Fs(),de(17)),gi(this),this.s=2,$s(this)):Kh(this,this.S-u)};function $s(u){u.j.G==0||u.J||wf(u.j,u)}function gi(u){ol(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Lh(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function al(u,p){try{var m=u.j;if(m.G!=0&&(m.g==u||cl(m.h,u))){if(!u.K&&cl(m.h,u)&&m.G==3){try{var w=m.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var C=w;if(C[0]==0){t:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)No(m),Mo(m);else break t;hl(m),de(18)}}else m.za=C[1],0<m.za-m.T&&37500>C[2]&&m.F&&m.v==0&&!m.C&&(m.C=Bs(f(m.Za,m),6e3));if(1>=Qh(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else yi(m,11)}else if((u.K||m.g==u)&&No(m),!k(p))for(C=m.Da.g.parse(p),p=0;p<C.length;p++){let ct=C[p];if(m.T=ct[0],ct=ct[1],m.G==2)if(ct[0]=="c"){m.K=ct[1],m.ia=ct[2];const Zt=ct[3];Zt!=null&&(m.la=Zt,m.j.info("VER="+m.la));const te=ct[4];te!=null&&(m.Aa=te,m.j.info("SVER="+m.Aa));const Xi=ct[5];Xi!=null&&typeof Xi=="number"&&0<Xi&&(w=1.5*Xi,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Re=u.g;if(Re){const Vo=Re.g?Re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vo){var M=w.h;M.g||Vo.indexOf("spdy")==-1&&Vo.indexOf("quic")==-1&&Vo.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ll(M,M.h),M.h=null))}if(w.D){const pl=Re.g?Re.g.getResponseHeader("X-HTTP-Session-Id"):null;pl&&(w.ya=pl,vt(w.I,w.D,pl))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var $=u;if(w.qa=Tf(w,w.J?w.ia:null,w.W),$.K){Jh(w.h,$);var pt=$,Gt=w.L;Gt&&(pt.I=Gt),pt.B&&(ol(pt),So(pt)),w.g=$}else _f(w);0<m.i.length&&Oo(m)}else ct[0]!="stop"&&ct[0]!="close"||yi(m,7);else m.G==3&&(ct[0]=="stop"||ct[0]=="close"?ct[0]=="stop"?yi(m,7):dl(m):ct[0]!="noop"&&m.l&&m.l.ta(ct),m.v=0)}}Fs(4)}catch{}}var qw=class{constructor(u,p){this.g=u,this.map=p}};function Yh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Qh(u){return u.h?1:u.g?u.g.size:0}function cl(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ll(u,p){u.g?u.g.add(p):u.h=p}function Jh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Yh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Zh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const m of u.g.values())p=p.concat(m.D);return p}return _(u.i)}function Hw(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],m=u.length,w=0;w<m;w++)p.push(u[w]);return p}p=[],m=0;for(w in u)p[m++]=u[w];return p}function Ww(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var m=0;m<u;m++)p.push(m);return p}p=[],m=0;for(const w in u)p[m++]=w;return p}}}function tf(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var m=Ww(u),w=Hw(u),C=w.length,M=0;M<C;M++)p.call(void 0,w[M],m&&m[M],u)}var ef=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gw(u,p){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var w=u[m].indexOf("="),C=null;if(0<=w){var M=u[m].substring(0,w);C=u[m].substring(w+1)}else M=u[m];p(M,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function mi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mi){this.h=u.h,xo(this,u.j),this.o=u.o,this.g=u.g,Po(this,u.s),this.l=u.l;var p=u.i,m=new qs;m.i=p.i,p.g&&(m.g=new Map(p.g),m.h=p.h),nf(this,m),this.m=u.m}else u&&(p=String(u).match(ef))?(this.h=!1,xo(this,p[1]||"",!0),this.o=zs(p[2]||""),this.g=zs(p[3]||"",!0),Po(this,p[4]),this.l=zs(p[5]||"",!0),nf(this,p[6]||"",!0),this.m=zs(p[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}mi.prototype.toString=function(){var u=[],p=this.j;p&&u.push(js(p,sf,!0),":");var m=this.g;return(m||p=="file")&&(u.push("//"),(p=this.o)&&u.push(js(p,sf,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(js(m,m.charAt(0)=="/"?Xw:Yw,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",js(m,Jw)),u.join("")};function rn(u){return new mi(u)}function xo(u,p,m){u.j=m?zs(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Po(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function nf(u,p,m){p instanceof qs?(u.i=p,Zw(u.i,u.h)):(m||(p=js(p,Qw)),u.i=new qs(p,u.h))}function vt(u,p,m){u.i.set(p,m)}function ko(u){return vt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function zs(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function js(u,p,m){return typeof u=="string"?(u=encodeURI(u).replace(p,Kw),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Kw(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var sf=/[#\/\?@]/g,Yw=/[#\?:]/g,Xw=/[#\?]/g,Qw=/[#\?@]/g,Jw=/#/g;function qs(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Ln(u){u.g||(u.g=new Map,u.h=0,u.i&&Gw(u.i,function(p,m){u.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}n=qs.prototype,n.add=function(u,p){Ln(this),this.i=null,u=Ki(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(p),this.h+=1,this};function rf(u,p){Ln(u),p=Ki(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function of(u,p){return Ln(u),p=Ki(u,p),u.g.has(p)}n.forEach=function(u,p){Ln(this),this.g.forEach(function(m,w){m.forEach(function(C){u.call(p,C,w,this)},this)},this)},n.na=function(){Ln(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),m=[];for(let w=0;w<p.length;w++){const C=u[w];for(let M=0;M<C.length;M++)m.push(p[w])}return m},n.V=function(u){Ln(this);let p=[];if(typeof u=="string")of(this,u)&&(p=p.concat(this.g.get(Ki(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)p=p.concat(u[m])}return p},n.set=function(u,p){return Ln(this),this.i=null,u=Ki(this,u),of(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function af(u,p,m){rf(u,p),0<m.length&&(u.i=null,u.g.set(Ki(u,p),_(m)),u.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var m=0;m<p.length;m++){var w=p[m];const M=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var C=M;$[w]!==""&&(C+="="+encodeURIComponent(String($[w]))),u.push(C)}}return this.i=u.join("&")};function Ki(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Zw(u,p){p&&!u.j&&(Ln(u),u.i=null,u.g.forEach(function(m,w){var C=w.toLowerCase();w!=C&&(rf(this,w),af(this,C,m))},u)),u.j=p}function tE(u,p){const m=new Us;if(a.Image){const w=new Image;w.onload=g(Vn,m,"TestLoadImage: loaded",!0,p,w),w.onerror=g(Vn,m,"TestLoadImage: error",!1,p,w),w.onabort=g(Vn,m,"TestLoadImage: abort",!1,p,w),w.ontimeout=g(Vn,m,"TestLoadImage: timeout",!1,p,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function eE(u,p){const m=new Us,w=new AbortController,C=setTimeout(()=>{w.abort(),Vn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(M=>{clearTimeout(C),M.ok?Vn(m,"TestPingServer: ok",!0,p):Vn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(C),Vn(m,"TestPingServer: error",!1,p)})}function Vn(u,p,m,w,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),w(m)}catch{}}function nE(){this.g=new Fw}function iE(u,p,m){const w=m||"";try{tf(u,function(C,M){let $=C;l(C)&&($=Zc(C)),p.push(w+M+"="+encodeURIComponent($))})}catch(C){throw p.push(w+"type="+encodeURIComponent("_badmap")),C}}function Co(u){this.l=u.Ub||null,this.j=u.eb||!1}v(Co,tl),Co.prototype.g=function(){return new Ro(this.l,this.j)},Co.prototype.i=(function(u){return function(){return u}})({});function Ro(u,p){Jt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Ro,Jt),n=Ro.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ws(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cf(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function cf(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Hs(this):Ws(this),this.readyState==3&&cf(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Hs(this))},n.Qa=function(u){this.g&&(this.response=u,Hs(this))},n.ga=function(){this.g&&Hs(this)};function Hs(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ws(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=p.next();return u.join(`\r
`)};function Ws(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function lf(u){let p="";return L(u,function(m,w){p+=w,p+=":",p+=m,p+=`\r
`}),p}function ul(u,p,m){t:{for(w in m){var w=!1;break t}w=!0}w||(m=lf(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):vt(u,p,m))}function Pt(u){Jt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(Pt,Jt);var sE=/^https?$/i,rE=["POST","PUT"];n=Pt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():il.g(),this.v=this.o?Vh(this.o):Vh(il),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(M){uf(this,M);return}if(u=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var C in w)m.set(C,w[C]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const M of w.keys())m.set(M,w.get(M));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),C=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(rE,p,void 0))||w||C||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of m)this.g.setRequestHeader(M,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ff(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){uf(this,M)}};function uf(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,df(u),Do(u)}function df(u){u.A||(u.A=!0,ue(u,"complete"),ue(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ue(this,"complete"),ue(this,"abort"),Do(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),Pt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hf(this):this.bb())},n.bb=function(){hf(this)};function hf(u){if(u.h&&typeof o<"u"&&(!u.v[1]||on(u)!=4||u.Z()!=2)){if(u.u&&on(u)==4)Mh(u.Ea,0,u);else if(ue(u,"readystatechange"),on(u)==4){u.h=!1;try{const $=u.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var m;if(!(m=p)){var w;if(w=$===0){var C=String(u.D).match(ef)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),w=!sE.test(C?C.toLowerCase():"")}m=w}if(m)ue(u,"complete"),ue(u,"success");else{u.m=6;try{var M=2<on(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",df(u)}}finally{Do(u)}}}}function Do(u,p){if(u.g){ff(u);const m=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ue(u,"ready");try{m.onreadystatechange=w}catch{}}}function ff(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function on(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Vw(p)}};function pf(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function oE(u){const p={};u=(u.g&&2<=on(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(k(u[w]))continue;var m=x(u[w]);const C=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=p[C]||[];p[C]=M,M.push(m)}T(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(u,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||p}function gf(u){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,u),this.cb=Gs("retryDelaySeedMs",1e4,u),this.Wa=Gs("forwardChannelMaxRetries",2,u),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Yh(u&&u.concurrentRequestLimit),this.Da=new nE,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=gf.prototype,n.la=8,n.G=1,n.connect=function(u,p,m,w){de(0),this.W=u,this.H=p||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=Tf(this,null,this.W),Oo(this)};function dl(u){if(mf(u),u.G==3){var p=u.U++,m=rn(u.I);if(vt(m,"SID",u.K),vt(m,"RID",p),vt(m,"TYPE","terminate"),Ks(u,m),p=new Nn(u,u.j,p),p.L=2,p.v=ko(rn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=p.v,m=!0),m||(p.g=Af(p.j,null),p.g.ea(p.v)),p.F=Date.now(),So(p)}If(u)}function Mo(u){u.g&&(fl(u),u.g.cancel(),u.g=null)}function mf(u){Mo(u),u.u&&(a.clearTimeout(u.u),u.u=null),No(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Oo(u){if(!Xh(u.h)&&!u.s){u.s=!0;var p=u.Ga;ft||en(),Wt||(ft(),Wt=!0),Nt.add(p,u),u.B=0}}function aE(u,p){return Qh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Bs(f(u.Ga,u,p),Ef(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const C=new Nn(this,this.j,u);let M=this.o;if(this.S&&(M?(M=b(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(C.H=M,M=null),this.P)t:{for(var p=0,m=0;m<this.i.length;m++){e:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=m;break t}if(p===4096||m===this.i.length-1){p=m+1;break t}}p=1e3}else p=1e3;p=vf(this,C,p),m=rn(this.I),vt(m,"RID",u),vt(m,"CVER",22),this.D&&vt(m,"X-HTTP-Session-Id",this.D),Ks(this,m),M&&(this.O?p="headers="+encodeURIComponent(String(lf(M)))+"&"+p:this.m&&ul(m,this.m,M)),ll(this.h,C),this.Ua&&vt(m,"TYPE","init"),this.P?(vt(m,"$req",p),vt(m,"SID","null"),C.T=!0,rl(C,m,null)):rl(C,m,p),this.G=2}}else this.G==3&&(u?yf(this,u):this.i.length==0||Xh(this.h)||yf(this))};function yf(u,p){var m;p?m=p.l:m=u.U++;const w=rn(u.I);vt(w,"SID",u.K),vt(w,"RID",m),vt(w,"AID",u.T),Ks(u,w),u.m&&u.o&&ul(w,u.m,u.o),m=new Nn(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),p&&(u.i=p.D.concat(u.i)),p=vf(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ll(u.h,m),rl(m,w,p)}function Ks(u,p){u.H&&L(u.H,function(m,w){vt(p,w,m)}),u.l&&tf({},function(m,w){vt(p,w,m)})}function vf(u,p,m){m=Math.min(u.i.length,m);var w=u.l?f(u.l.Na,u.l,u):null;t:{var C=u.i;let M=-1;for(;;){const $=["count="+m];M==-1?0<m?(M=C[0].g,$.push("ofs="+M)):M=0:$.push("ofs="+M);let pt=!0;for(let Gt=0;Gt<m;Gt++){let ct=C[Gt].g;const Zt=C[Gt].map;if(ct-=M,0>ct)M=Math.max(0,C[Gt].g-100),pt=!1;else try{iE(Zt,$,"req"+ct+"_")}catch{w&&w(Zt)}}if(pt){w=$.join("&");break t}}}return u=u.i.splice(0,m),p.D=u,w}function _f(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ft||en(),Wt||(ft(),Wt=!0),Nt.add(p,u),u.v=0}}function hl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Bs(f(u.Fa,u),Ef(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Bs(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,de(10),Mo(this),bf(this))};function fl(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function bf(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=rn(u.qa);vt(p,"RID","rpc"),vt(p,"SID",u.K),vt(p,"AID",u.T),vt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&vt(p,"TO",u.ja),vt(p,"TYPE","xmlhttp"),Ks(u,p),u.m&&u.o&&ul(p,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=ko(rn(p)),m.m=null,m.P=!0,Wh(m,u)}n.Za=function(){this.C!=null&&(this.C=null,Mo(this),hl(this),de(19))};function No(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function wf(u,p){var m=null;if(u.g==p){No(u),fl(u),u.g=null;var w=2}else if(cl(u.h,p))m=p.D,Jh(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){m=p.m?p.m.length:0,p=Date.now()-p.F;var C=u.B;w=Io(),ue(w,new zh(w,m)),Oo(u)}else _f(u);else if(C=p.s,C==3||C==0&&0<p.X||!(w==1&&aE(u,p)||w==2&&hl(u)))switch(m&&0<m.length&&(p=u.h,p.i=p.i.concat(m)),C){case 1:yi(u,5);break;case 4:yi(u,10);break;case 3:yi(u,6);break;default:yi(u,2)}}}function Ef(u,p){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*p}function yi(u,p){if(u.j.info("Error code "+p),p==2){var m=f(u.fb,u),w=u.Xa;const C=!w;w=new mi(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xo(w,"https"),ko(w),C?tE(w.toString(),m):eE(w.toString(),m)}else de(2);u.G=0,u.l&&u.l.sa(p),If(u),mf(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),de(2)):(this.j.info("Failed to ping google.com"),de(1))};function If(u){if(u.G=0,u.ka=[],u.l){const p=Zh(u.h);(p.length!=0||u.i.length!=0)&&(y(u.ka,p),y(u.ka,u.i),u.h.i.length=0,_(u.i),u.i.length=0),u.l.ra()}}function Tf(u,p,m){var w=m instanceof mi?rn(m):new mi(m);if(w.g!="")p&&(w.g=p+"."+w.g),Po(w,w.s);else{var C=a.location;w=C.protocol,p=p?p+"."+C.hostname:C.hostname,C=+C.port;var M=new mi(null);w&&xo(M,w),p&&(M.g=p),C&&Po(M,C),m&&(M.l=m),w=M}return m=u.D,p=u.ya,m&&p&&vt(w,m,p),vt(w,"VER",u.la),Ks(u,w),w}function Af(u,p,m){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Pt(new Co({eb:m})):new Pt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sf(){}n=Sf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Lo(){}Lo.prototype.g=function(u,p){return new Ee(u,p)};function Ee(u,p){Jt.call(this),this.g=new gf(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!k(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!k(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Yi(this)}v(Ee,Jt),Ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ee.prototype.close=function(){dl(this.g)},Ee.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Zc(u),u=m);p.i.push(new qw(p.Ya++,u)),p.G==3&&Oo(p)},Ee.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,Ee.aa.N.call(this)};function xf(u){el.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const m in p){u=m;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}v(xf,el);function Pf(){nl.call(this),this.status=1}v(Pf,nl);function Yi(u){this.g=u}v(Yi,Sf),Yi.prototype.ua=function(){ue(this.g,"a")},Yi.prototype.ta=function(u){ue(this.g,new xf(u))},Yi.prototype.sa=function(u){ue(this.g,new Pf)},Yi.prototype.ra=function(){ue(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,Ee.prototype.send=Ee.prototype.o,Ee.prototype.open=Ee.prototype.m,Ee.prototype.close=Ee.prototype.close,yv=function(){return new Lo},mv=function(){return Io()},gv=pi,iu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,da=To,jh.COMPLETE="complete",pv=jh,Fh.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",Jt.prototype.listen=Jt.prototype.K,sr=Fh,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,fv=Pt}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});const cp="@firebase/firestore",lp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new $u("@firebase/firestore");function Zi(){return Fi.logLevel}function q(n,...t){if(Fi.logLevel<=it.DEBUG){const e=t.map(ud);Fi.debug(`Firestore (${Cs}): ${n}`,...e)}}function Pn(n,...t){if(Fi.logLevel<=it.ERROR){const e=t.map(ud);Fi.error(`Firestore (${Cs}): ${n}`,...e)}}function ti(n,...t){if(Fi.logLevel<=it.WARN){const e=t.map(ud);Fi.warn(`Firestore (${Cs}): ${n}`,...e)}}function ud(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,vv(n,i,e)}function vv(n,t,e){let i=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw Pn(i),new Error(i)}function ut(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||vv(t,s,i)}function J(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Rn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ie.UNAUTHENTICATED)))}shutdown(){}}class _S{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class bS{constructor(t){this.t=t,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ut(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let r=new En;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new En,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=r;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new En)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ut(typeof i.accessToken=="string",31837,{l:i}),new _v(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ut(t===null||typeof t=="string",2055,{h:t}),new ie(t)}}class wS{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ES{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new wS(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class up{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IS{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ut(this.o===void 0,3512);const i=r=>{r.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new up(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(ut(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new up(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function bv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=TS(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function tt(n,t){return n<t?-1:n>t?1:0}function su(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return tt(i,s);{const r=bv(),o=AS(r.encode(dp(n,e)),r.encode(dp(t,e)));return o!==0?o:tt(i,s)}}e+=i>65535?2:1}return tt(n.length,t.length)}function dp(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function AS(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return tt(n[e],t[e]);return tt(n.length,t.length)}function ps(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="__name__";class ze{constructor(t,e,i){e===void 0?e=0:e>t.length&&Y(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&Y(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return ze.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ze?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=ze.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return tt(t.length,e.length)}static compareSegments(t,e){const i=ze.isNumericId(t),s=ze.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?ze.extractNumericId(t).compare(ze.extractNumericId(e)):su(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xn.fromString(t.substring(4,t.length-2))}}class yt extends ze{construct(t,e,i){return new yt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new j(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new yt(e)}static emptyPath(){return new yt([])}}const SS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends ze{construct(t,e,i){return new Yt(t,e,i)}static isValidIdentifier(t){return SS.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hp}static keyField(){return new Yt([hp])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new j(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new j(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Yt(e)}static emptyPath(){return new Yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function wv(n,t,e){if(!e)throw new j(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xS(n,t,e,i){if(t===!0&&i===!0)throw new j(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fp(n){if(!G.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pp(n){if(G.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ev(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function pe(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=bc(n);throw new j(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Bt(n,t){const e={typeString:n};return t&&(e.value=t),e}function no(n,t){if(!Ev(n))throw new j(N.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new j(N.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=-62135596800,mp=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(t){return _t.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*mp);return new _t(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<gp)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mp}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(no(t,_t._jsonSchema))return new _t(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-gp;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:Bt("string",_t._jsonSchemaVersion),seconds:Bt("number"),nanoseconds:Bt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Lr=-1;function PS(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(i===1e9?new _t(e+1,0):new _t(e,i));return new ei(s,G.empty(),t)}function kS(n){return new ei(n.readTime,n.key,Lr)}class ei{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new ei(X.min(),G.empty(),Lr)}static max(){return new ei(X.max(),G.empty(),Lr)}}function CS(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==RS)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):V.reject(e)}static resolve(t){return new V(((e,i)=>{e(t)}))}static reject(t){return new V(((e,i)=>{i(t)}))}static waitFor(t){return new V(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(c=>i(c)))})),o=!0,r===s&&e()}))}static or(t){let e=V.resolve(!1);for(const i of t)e=e.next((s=>s?V.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new V(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next((d=>{o[l]=d,++a,a===r&&i(o)}),(d=>s(d)))}}))}static doWhile(t,e){return new V(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function MS(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ds(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this._e(i),this.ae=i=>e.writeSequenceNumber(i))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}wc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-1;function Ec(n){return n==null}function Ua(n){return n===0&&1/n==-1/0}function OS(n){return typeof n=="number"&&Number.isInteger(n)&&!Ua(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="";function NS(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=yp(t)),t=LS(n.get(e),t);return yp(t)}function LS(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case Iv:e+="";break;default:e+=r}}return e}function yp(n){return n+Iv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function li(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Tv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.comparator=t,this.root=e||Kt.EMPTY}insert(t,e){return new St(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $o(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $o(this.root,t,this.comparator,!1)}getReverseIterator(){return new $o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $o(this.root,t,this.comparator,!0)}}class $o{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Kt{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??Kt.RED,this.left=s??Kt.EMPTY,this.right=r??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new Kt(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Y(27949);return t+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new Kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _p(this.data.getIterator())}getIteratorFrom(t){return new _p(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof zt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new zt(this.comparator);return e.data=t,e}}class _p{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.fields=t,t.sort(Yt.comparator)}static empty(){return new Te([])}unionWith(t){let e=new zt(Yt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ps(this.fields,t.fields,((e,i)=>e.isEqual(i)))}}/**
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
 */class Av extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Av("Invalid base64 string: "+r):r}})(t);return new Xt(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new Xt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const VS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(n){if(ut(!!n,39018),typeof n=="string"){let t=0;const e=VS.exec(n);if(ut(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Dt(n.seconds),nanos:Dt(n.nanos)}}function Dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ii(n){return typeof n=="string"?Xt.fromBase64String(n):Xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="server_timestamp",xv="__type__",Pv="__previous_value__",kv="__local_write_time__";function fd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[xv])===null||e===void 0?void 0:e.stringValue)===Sv}function Ic(n){const t=n.mapValue.fields[Pv];return fd(t)?Ic(t):t}function Vr(n){const t=ni(n.mapValue.fields[kv].timestampValue);return new _t(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(t,e,i,s,r,o,a,c,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const $a="(default)";class Fr{constructor(t,e){this.projectId=t,this.database=e||$a}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database===$a}isEqual(t){return t instanceof Fr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="__type__",BS="__max__",zo={mapValue:{}},Rv="__vector__",za="value";function si(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fd(n)?4:$S(n)?9007199254740991:US(n)?10:11:Y(28295,{value:n})}function Je(n,t){if(n===t)return!0;const e=si(n);if(e!==si(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Vr(n).isEqual(Vr(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=ni(s.timestampValue),a=ni(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return ii(s.bytesValue).isEqual(ii(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return Dt(s.geoPointValue.latitude)===Dt(r.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return Dt(s.integerValue)===Dt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Dt(s.doubleValue),a=Dt(r.doubleValue);return o===a?Ua(o)===Ua(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return ps(n.arrayValue.values||[],t.arrayValue.values||[],Je);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(vp(o)!==vp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Je(o[c],a[c])))return!1;return!0})(n,t);default:return Y(52216,{left:n})}}function Br(n,t){return(n.values||[]).find((e=>Je(e,t)))!==void 0}function gs(n,t){if(n===t)return 0;const e=si(n),i=si(t);if(e!==i)return tt(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=Dt(r.integerValue||r.doubleValue),c=Dt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,t);case 3:return bp(n.timestampValue,t.timestampValue);case 4:return bp(Vr(n),Vr(t));case 5:return su(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=ii(r),c=ii(o);return a.compareTo(c)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=tt(a[l],c[l]);if(d!==0)return d}return tt(a.length,c.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=tt(Dt(r.latitude),Dt(o.latitude));return a!==0?a:tt(Dt(r.longitude),Dt(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return wp(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},g=(a=h[za])===null||a===void 0?void 0:a.arrayValue,v=(c=f[za])===null||c===void 0?void 0:c.arrayValue,_=tt(((l=g==null?void 0:g.values)===null||l===void 0?void 0:l.length)||0,((d=v==null?void 0:v.values)===null||d===void 0?void 0:d.length)||0);return _!==0?_:wp(g,v)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===zo.mapValue&&o===zo.mapValue)return 0;if(r===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=su(c[h],d[h]);if(f!==0)return f;const g=gs(a[c[h]],l[d[h]]);if(g!==0)return g}return tt(c.length,d.length)})(n.mapValue,t.mapValue);default:throw Y(23264,{le:e})}}function bp(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=ni(n),i=ni(t),s=tt(e.seconds,i.seconds);return s!==0?s:tt(e.nanos,i.nanos)}function wp(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=gs(e[s],i[s]);if(r)return r}return tt(e.length,i.length)}function ms(n){return ru(n)}function ru(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=ni(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ii(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return G.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=ru(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${ru(e.fields[o])}`;return s+"}"})(n.mapValue):Y(61005,{value:n})}function ha(n){switch(si(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ic(n);return t?16+ha(t):16;case 5:return 2*n.stringValue.length;case 6:return ii(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+ha(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return li(i.fields,((r,o)=>{s+=r.length+ha(o)})),s})(n.mapValue);default:throw Y(13486,{value:n})}}function Ep(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ou(n){return!!n&&"integerValue"in n}function pd(n){return!!n&&"arrayValue"in n}function Ip(n){return!!n&&"nullValue"in n}function Tp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fa(n){return!!n&&"mapValue"in n}function US(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Cv])===null||e===void 0?void 0:e.stringValue)===Rv}function br(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return li(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=br(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=br(n.arrayValue.values[e]);return t}return Object.assign({},n)}function $S(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===BS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.value=t}static empty(){return new ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!fa(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=br(e)}setAll(t){let e=Yt.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=br(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());fa(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];fa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){li(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new ve(br(this.value))}}function Dv(n){const t=[];return li(n.fields,((e,i)=>{const s=new Yt([e]);if(fa(i)){const r=Dv(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new Te(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new re(t,0,X.min(),X.min(),X.min(),ve.empty(),0)}static newFoundDocument(t,e,i,s){return new re(t,1,e,X.min(),i,s,0)}static newNoDocument(t,e){return new re(t,2,e,X.min(),X.min(),ve.empty(),0)}static newUnknownDocument(t,e){return new re(t,3,e,X.min(),X.min(),ve.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof re&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ja{constructor(t,e){this.position=t,this.inclusive=e}}function Ap(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),e.key):i=gs(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Sp(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Je(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function zS(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Mv{}class Ft extends Mv{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new qS(t,e,i):e==="array-contains"?new GS(t,i):e==="in"?new KS(t,i):e==="not-in"?new YS(t,i):e==="array-contains-any"?new XS(t,i):new Ft(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new HS(t,i):new WS(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(gs(e,this.value)):e!==null&&si(this.value)===si(e)&&this.matchesComparison(gs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ve extends Mv{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ve(t,e)}matches(t){return Ov(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ov(n){return n.op==="and"}function Nv(n){return jS(n)&&Ov(n)}function jS(n){for(const t of n.filters)if(t instanceof Ve)return!1;return!0}function au(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+ms(n.value);if(Nv(n))return n.filters.map((t=>au(t))).join(",");{const t=n.filters.map((e=>au(e))).join(",");return`${n.op}(${t})`}}function Lv(n,t){return n instanceof Ft?(function(i,s){return s instanceof Ft&&i.op===s.op&&i.field.isEqual(s.field)&&Je(i.value,s.value)})(n,t):n instanceof Ve?(function(i,s){return s instanceof Ve&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&Lv(o,s.filters[a])),!0):!1})(n,t):void Y(19439)}function Vv(n){return n instanceof Ft?(function(e){return`${e.field.canonicalString()} ${e.op} ${ms(e.value)}`})(n):n instanceof Ve?(function(e){return e.op.toString()+" {"+e.getFilters().map(Vv).join(" ,")+"}"})(n):"Filter"}class qS extends Ft{constructor(t,e,i){super(t,e,i),this.key=G.fromName(i.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class HS extends Ft{constructor(t,e){super(t,"in",e),this.keys=Fv("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class WS extends Ft{constructor(t,e){super(t,"not-in",e),this.keys=Fv("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Fv(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((i=>G.fromName(i.referenceValue)))}class GS extends Ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pd(e)&&Br(e.arrayValue,this.value)}}class KS extends Ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Br(this.value.arrayValue,e)}}class YS extends Ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(Br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Br(this.value.arrayValue,e)}}class XS extends Ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pd(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>Br(this.value.arrayValue,i)))}}/**
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
 */class QS{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Pe=null}}function xp(n,t=null,e=[],i=[],s=null,r=null,o=null){return new QS(n,t,e,i,s,r,o)}function gd(n){const t=J(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>au(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Ec(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>ms(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>ms(i))).join(",")),t.Pe=e}return t.Pe}function md(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!zS(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Lv(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Sp(n.startAt,t.startAt)&&Sp(n.endAt,t.endAt)}function cu(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function JS(n,t,e,i,s,r,o,a){return new Ms(n,t,e,i,s,r,o,a)}function Tc(n){return new Ms(n)}function Pp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bv(n){return n.collectionGroup!==null}function wr(n){const t=J(n);if(t.Te===null){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new zt(Yt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new Ur(r,i))})),e.has(Yt.keyField().canonicalString())||t.Te.push(new Ur(Yt.keyField(),i))}return t.Te}function We(n){const t=J(n);return t.Ie||(t.Ie=ZS(t,wr(n))),t.Ie}function ZS(n,t){if(n.limitType==="F")return xp(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Ur(s.field,r)}));const e=n.endAt?new ja(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ja(n.startAt.position,n.startAt.inclusive):null;return xp(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function lu(n,t){const e=n.filters.concat([t]);return new Ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function uu(n,t,e){return new Ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ac(n,t){return md(We(n),We(t))&&n.limitType===t.limitType}function Uv(n){return`${gd(We(n))}|lt:${n.limitType}`}function ts(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>Vv(s))).join(", ")}]`),Ec(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>ms(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>ms(s))).join(",")),`Target(${i})`})(We(n))}; limitType=${n.limitType})`}function Sc(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):G.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of wr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,c){const l=Ap(o,a,c);return o.inclusive?l<=0:l<0})(i.startAt,wr(i),s)||i.endAt&&!(function(o,a,c){const l=Ap(o,a,c);return o.inclusive?l>=0:l>0})(i.endAt,wr(i),s))})(n,t)}function tx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $v(n){return(t,e)=>{let i=!1;for(const s of wr(n)){const r=ex(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function ex(n,t,e){const i=n.field.isKeyField()?G.comparator(t.key,e.key):(function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?gs(c,l):Y(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){li(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return Tv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=new St(G.comparator);function kn(){return nx}const zv=new St(G.comparator);function rr(...n){let t=zv;for(const e of n)t=t.insert(e.key,e);return t}function jv(n){let t=zv;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function Si(){return Er()}function qv(){return Er()}function Er(){return new ji((n=>n.toString()),((n,t)=>n.isEqual(t)))}const ix=new St(G.comparator),sx=new zt(G.comparator);function st(...n){let t=sx;for(const e of n)t=t.add(e);return t}const rx=new zt(tt);function ox(){return rx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(t)?"-0":t}}function Hv(n){return{integerValue:""+n}}function ax(n,t){return OS(t)?Hv(t):yd(n,t)}/**
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
 */class xc{constructor(){this._=void 0}}function cx(n,t,e){return n instanceof qa?(function(s,r){const o={fields:{[xv]:{stringValue:Sv},[kv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&fd(r)&&(r=Ic(r)),r&&(o.fields[Pv]=r),{mapValue:o}})(e,t):n instanceof $r?Gv(n,t):n instanceof zr?Kv(n,t):(function(s,r){const o=Wv(s,r),a=kp(o)+kp(s.Ee);return ou(o)&&ou(s.Ee)?Hv(a):yd(s.serializer,a)})(n,t)}function lx(n,t,e){return n instanceof $r?Gv(n,t):n instanceof zr?Kv(n,t):e}function Wv(n,t){return n instanceof Ha?(function(i){return ou(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class qa extends xc{}class $r extends xc{constructor(t){super(),this.elements=t}}function Gv(n,t){const e=Yv(t);for(const i of n.elements)e.some((s=>Je(s,i)))||e.push(i);return{arrayValue:{values:e}}}class zr extends xc{constructor(t){super(),this.elements=t}}function Kv(n,t){let e=Yv(t);for(const i of n.elements)e=e.filter((s=>!Je(s,i)));return{arrayValue:{values:e}}}class Ha extends xc{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function kp(n){return Dt(n.integerValue||n.doubleValue)}function Yv(n){return pd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ux(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof $r&&s instanceof $r||i instanceof zr&&s instanceof zr?ps(i.elements,s.elements,Je):i instanceof Ha&&s instanceof Ha?Je(i.Ee,s.Ee):i instanceof qa&&s instanceof qa})(n.transform,t.transform)}class dx{constructor(t,e){this.version=t,this.transformResults=e}}class ge{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function pa(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pc{}function Xv(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new kc(n.key,ge.none()):new io(n.key,n.data,ge.none());{const e=n.data,i=ve.empty();let s=new zt(Yt.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ui(n.key,i,new Te(s.toArray()),ge.none())}}function hx(n,t,e){n instanceof io?(function(s,r,o){const a=s.value.clone(),c=Rp(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof ui?(function(s,r,o){if(!pa(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Rp(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Qv(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function Ir(n,t,e,i){return n instanceof io?(function(r,o,a,c){if(!pa(r.precondition,o))return a;const l=r.value.clone(),d=Dp(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,t,e,i):n instanceof ui?(function(r,o,a,c){if(!pa(r.precondition,o))return a;const l=Dp(r.fieldTransforms,c,o),d=o.data;return d.setAll(Qv(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((h=>h.field)))})(n,t,e,i):(function(r,o,a){return pa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function fx(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=Wv(i.transform,s||null);r!=null&&(e===null&&(e=ve.empty()),e.set(i.field,r))}return e||null}function Cp(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ps(i,s,((r,o)=>ux(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class io extends Pc{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ui extends Pc{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Qv(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function Rp(n,t,e){const i=new Map;ut(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,lx(o,a,e[s]))}return i}function Dp(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,cx(r,o,t))}return i}class kc extends Pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class px extends Pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&hx(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ir(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ir(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=qv();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const c=Xv(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),st())}isEqual(t){return this.batchId===t.batchId&&ps(this.mutations,t.mutations,((e,i)=>Cp(e,i)))&&ps(this.baseMutations,t.baseMutations,((e,i)=>Cp(e,i)))}}class vd{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){ut(t.mutations.length===i.length,58842,{Ve:t.mutations.length,me:i.length});let s=(function(){return ix})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new vd(t,e,i,s)}}/**
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
 */class mx{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class yx{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt,at;function vx(n){switch(n){case N.OK:return Y(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function Jv(n){if(n===void 0)return Pn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Lt.OK:return N.OK;case Lt.CANCELLED:return N.CANCELLED;case Lt.UNKNOWN:return N.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return N.INTERNAL;case Lt.UNAVAILABLE:return N.UNAVAILABLE;case Lt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Lt.NOT_FOUND:return N.NOT_FOUND;case Lt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Lt.ABORTED:return N.ABORTED;case Lt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Lt.DATA_LOSS:return N.DATA_LOSS;default:return Y(39323,{code:n})}}(at=Lt||(Lt={}))[at.OK=0]="OK",at[at.CANCELLED=1]="CANCELLED",at[at.UNKNOWN=2]="UNKNOWN",at[at.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",at[at.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",at[at.NOT_FOUND=5]="NOT_FOUND",at[at.ALREADY_EXISTS=6]="ALREADY_EXISTS",at[at.PERMISSION_DENIED=7]="PERMISSION_DENIED",at[at.UNAUTHENTICATED=16]="UNAUTHENTICATED",at[at.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",at[at.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",at[at.ABORTED=10]="ABORTED",at[at.OUT_OF_RANGE=11]="OUT_OF_RANGE",at[at.UNIMPLEMENTED=12]="UNIMPLEMENTED",at[at.INTERNAL=13]="INTERNAL",at[at.UNAVAILABLE=14]="UNAVAILABLE",at[at.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const _x=new Xn([4294967295,4294967295],0);function Mp(n){const t=bv().encode(n),e=new hv;return e.update(t),new Uint8Array(e.digest())}function Op(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Xn([e,i],0),new Xn([s,r],0)]}class _d{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new or(`Invalid padding: ${e}`);if(i<0)throw new or(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new or(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Xn.fromNumber(this.fe)}pe(t,e,i){let s=t.add(e.multiply(Xn.fromNumber(i)));return s.compare(_x)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Mp(t),[i,s]=Op(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);if(!this.ye(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new _d(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.fe===0)return;const e=Mp(t),[i,s]=Op(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);this.we(o)}}we(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,so.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Cc(X.min(),s,new St(tt),kn(),st())}}class so{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new so(i,e,st(),st(),st())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.be=s}}class Zv{constructor(t,e){this.targetId=t,this.De=e}}class t_{constructor(t,e,i=Xt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class Np{constructor(){this.ve=0,this.Ce=Lp(),this.Fe=Xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=st(),e=st(),i=st();return this.Ce.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:Y(38017,{changeType:r})}})),new so(this.Fe,this.Me,t,e,i)}ke(){this.xe=!1,this.Ce=Lp()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,ut(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class bx{constructor(t){this.We=t,this.Ge=new Map,this.ze=kn(),this.je=jo(),this.Je=jo(),this.He=new St(tt)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const i=this.tt(e);switch(t.state){case 0:this.nt(e)&&i.Be(t.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(t.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(i.Ke(),i.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),i.Be(t.resumeToken));break;default:Y(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((i,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,i=t.De.count,s=this.st(e);if(s){const r=s.target;if(cu(r))if(i===0){const o=new G(r.path);this.Xe(e,o,re.newNoDocument(o,X.min()))}else ut(i===1,20013,{expectedCount:i});else{const o=this.ot(e);if(o!==i){const a=this._t(t),c=a?this.ut(a,t,o):1;if(c!==0){this.rt(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,l)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=ii(i).toUint8Array()}catch(c){if(c instanceof Av)return ti("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new _d(o,s,r)}catch(c){return ti(c instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(t,e,i){return e.De.count===i-this.ht(t,e.targetId)?0:2}ht(t,e){const i=this.We.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Xe(e,r,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((r,o)=>{const a=this.st(o);if(a){if(r.current&&cu(a.target)){const c=new G(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,re.newNoDocument(c,t))}r.Ne&&(e.set(o,r.Le()),r.ke())}}));let i=st();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.ze.forEach(((r,o)=>o.setReadTime(t)));const s=new Cc(t,e,this.He,this.ze,i);return this.ze=kn(),this.je=jo(),this.Je=jo(),this.He=new St(tt),s}Ze(t,e){if(!this.nt(t))return;const i=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,i),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,i){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),i&&(this.ze=this.ze.insert(e,i))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Np,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new zt(tt),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new zt(tt),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||q("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Np),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function jo(){return new St(G.comparator)}function Lp(){return new St(G.comparator)}const wx={asc:"ASCENDING",desc:"DESCENDING"},Ex={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ix={and:"AND",or:"OR"};class Tx{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function du(n,t){return n.useProto3Json||Ec(t)?t:{value:t}}function Wa(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function e_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ax(n,t){return Wa(n,t.toTimestamp())}function Ge(n){return ut(!!n,49232),X.fromTimestamp((function(e){const i=ni(e);return new _t(i.seconds,i.nanos)})(n))}function bd(n,t){return hu(n,t).canonicalString()}function hu(n,t){const e=(function(s){return new yt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function n_(n){const t=yt.fromString(n);return ut(a_(t),10190,{key:t.toString()}),t}function fu(n,t){return bd(n.databaseId,t.path)}function xl(n,t){const e=n_(t);if(e.get(1)!==n.databaseId.projectId)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new G(s_(e))}function i_(n,t){return bd(n.databaseId,t)}function Sx(n){const t=n_(n);return t.length===4?yt.emptyPath():s_(t)}function pu(n){return new yt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function s_(n){return ut(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vp(n,t,e){return{name:fu(n,t),fields:e.value.mapValue.fields}}function xx(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y(39313,{state:l})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(l,d){return l.useProto3Json?(ut(d===void 0||typeof d=="string",58123),Xt.fromBase64String(d||"")):(ut(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Xt.fromUint8Array(d||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(l){const d=l.code===void 0?N.UNKNOWN:Jv(l.code);return new j(d,l.message||"")})(o);e=new t_(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=xl(n,i.document.name),r=Ge(i.document.updateTime),o=i.document.createTime?Ge(i.document.createTime):X.min(),a=new ve({mapValue:{fields:i.document.fields}}),c=re.newFoundDocument(s,r,o,a),l=i.targetIds||[],d=i.removedTargetIds||[];e=new ga(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=xl(n,i.document),r=i.readTime?Ge(i.readTime):X.min(),o=re.newNoDocument(s,r),a=i.removedTargetIds||[];e=new ga([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=xl(n,i.document),r=i.removedTargetIds||[];e=new ga([],r,s,null)}else{if(!("filter"in t))return Y(11601,{At:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new yx(s,r),a=i.targetId;e=new Zv(a,o)}}return e}function Px(n,t){let e;if(t instanceof io)e={update:Vp(n,t.key,t.value)};else if(t instanceof kc)e={delete:fu(n,t.key)};else if(t instanceof ui)e={update:Vp(n,t.key,t.data),updateMask:Vx(t.fieldMask)};else{if(!(t instanceof px))return Y(16599,{Rt:t.type});e={verify:fu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof qa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $r)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Y(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:Ax(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y(27497)})(n,t.precondition)),e}function kx(n,t){return n&&n.length>0?(ut(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?Ge(s.updateTime):Ge(r);return o.isEqual(X.min())&&(o=Ge(r)),new dx(o,s.transformResults||[])})(e,t)))):[]}function Cx(n,t){return{documents:[i_(n,t.path)]}}function Rx(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=i_(n,s);const r=(function(l){if(l.length!==0)return o_(Ve.create(l,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(l){if(l.length!==0)return l.map((d=>(function(f){return{field:es(f.field),direction:Ox(f.dir)}})(d)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=du(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(t.endAt)),{Vt:e,parent:s}}function Dx(n){let t=Sx(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){ut(i===1,65062);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=(function(h){const f=r_(h);return f instanceof Ve&&Nv(f)?f.getFilters():[f]})(e.where));let o=[];e.orderBy&&(o=(function(h){return h.map((f=>(function(v){return new Ur(ns(v.field),(function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(v.direction))})(f)))})(e.orderBy));let a=null;e.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,Ec(f)?null:f})(e.limit));let c=null;e.startAt&&(c=(function(h){const f=!!h.before,g=h.values||[];return new ja(g,f)})(e.startAt));let l=null;return e.endAt&&(l=(function(h){const f=!h.before,g=h.values||[];return new ja(g,f)})(e.endAt)),JS(t,s,o,r,a,"F",c,l)}function Mx(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function r_(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ns(e.unaryFilter.field);return Ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(e.unaryFilter.field);return Ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ns(e.unaryFilter.field);return Ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(e.unaryFilter.field);return Ft.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Ft.create(ns(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ve.create(e.compositeFilter.filters.map((i=>r_(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(e.compositeFilter.op))})(n):Y(30097,{filter:n})}function Ox(n){return wx[n]}function Nx(n){return Ex[n]}function Lx(n){return Ix[n]}function es(n){return{fieldPath:n.canonicalString()}}function ns(n){return Yt.fromServerFormat(n.fieldPath)}function o_(n){return n instanceof Ft?(function(e){if(e.op==="=="){if(Tp(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NAN"}};if(Ip(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tp(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NAN"}};if(Ip(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(e.field),op:Nx(e.op),value:e.value}}})(n):n instanceof Ve?(function(e){const i=e.getFilters().map((s=>o_(s)));return i.length===1?i[0]:{compositeFilter:{op:Lx(e.op),filters:i}}})(n):Y(54877,{filter:n})}function Vx(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function a_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e,i,s,r=X.min(),o=X.min(),a=Xt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Bn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(t){this.gt=t}}function Bx(n){const t=Dx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uu(t,t.limit,"L"):t}/**
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
 */class Ux{constructor(){this.Dn=new $x}addToCollectionParentIndex(t,e){return this.Dn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(ei.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(ei.min())}updateCollectionGroup(t,e,i){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class $x{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new zt(yt.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new zt(yt.comparator)).toArray()}}/**
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
 */const Fp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c_=41943040;class ye{static withCacheSize(t){return new ye(t,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.DEFAULT_COLLECTION_PERCENTILE=10,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ye.DEFAULT=new ye(c_,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ye.DISABLED=new ye(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new ys(0)}static ur(){return new ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="LruGarbageCollector",zx=1048576;function Up([n,t],[e,i]){const s=tt(n,e);return s===0?tt(t,i):s}class jx{constructor(t){this.Tr=t,this.buffer=new zt(Up),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();Up(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qx{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){q(Bp,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ds(e)?q(Bp,"Ignoring IndexedDB error during garbage collection: ",e):await Rs(e)}await this.Rr(3e5)}))}}class Hx{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return V.resolve(wc.ue);const i=new jx(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Fp)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fp):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let i,s,r,o,a,c,l;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(t,s)))).next((h=>(i=h,a=Date.now(),this.removeTargets(t,i,e)))).next((h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(t,i)))).next((h=>(l=Date.now(),Zi()<=it.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h}))))}}function Wx(n,t){return new Hx(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.changes=new ji((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,re.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?V.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kx{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&Ir(i.mutation,s,Te.empty(),_t.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,st()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=st()){const s=Si();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=rr();return r.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=Si();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,st())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=kn();const o=Er(),a=(function(){return Er()})();return e.forEach(((c,l)=>{const d=i.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof ui)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Ir(d.mutation,l,d.mutation.getFieldMask(),_t.now())):o.set(l.key,Te.empty())})),this.recalculateAndSaveOverlays(t,r).next((c=>(c.forEach(((l,d)=>o.set(l,d))),e.forEach(((l,d)=>{var h;return a.set(l,new Kx(d,(h=o.get(l))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(t,e){const i=Er();let s=new St(((o,a)=>o-a)),r=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((c=>{const l=e.get(c);if(l===null)return;let d=i.get(c)||Te.empty();d=a.applyToLocalView(l,d),i.set(c,d);const h=(s.get(a.batchId)||st()).add(c);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=qv();d.forEach((f=>{if(!r.has(f)){const g=Xv(e.get(f),i.get(f));g!==null&&h.set(f,g),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return V.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return(function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bv(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):V.resolve(Si());let a=Lr,c=r;return o.next((l=>V.forEach(l,((d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next((f=>{c=c.insert(d,f)}))))).next((()=>this.populateOverlays(t,l,r))).next((()=>this.computeViews(t,c,l,st()))).next((d=>({batchId:a,changes:jv(d)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next((i=>{let s=rr();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=rr();return this.indexManager.getCollectionParents(t,r).next((a=>V.forEach(a,(c=>{const l=(function(h,f){return new Ms(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,i,s).next((d=>{d.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,re.newInvalidDocument(d)))}));let a=rr();return o.forEach(((c,l)=>{const d=r.get(c);d!==void 0&&Ir(d.mutation,l,Te.empty(),_t.now()),Sc(e,l)&&(a=a.insert(c,l))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return V.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ge(s.createTime)}})(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Bx(s.bundledQuery),readTime:Ge(s.readTime)}})(e)),V.resolve()}}/**
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
 */class Qx{constructor(){this.overlays=new St(G.comparator),this.kr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Si();return V.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.wt(t,e,r)})),V.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),V.resolve()}getOverlaysForCollection(t,e,i){const s=Si(),r=e.length+1,o=new G(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new St(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>i){let d=r.get(l.largestBatchId);d===null&&(d=Si(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Si(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,d)=>a.set(l,d))),!(a.size()>=s)););return V.resolve(a)}wt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new mx(e,i));let r=this.kr.get(e);r===void 0&&(r=st(),this.kr.set(e,r)),this.kr.set(e,r.add(i.key))}}/**
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
 */class Jx{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.qr=new zt(jt.Qr),this.$r=new zt(jt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const i=new jt(t,e);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new jt(t,e))}Gr(t,e){t.forEach((i=>this.removeReference(i,e)))}zr(t){const e=new G(new yt([])),i=new jt(e,t),s=new jt(e,t+1),r=[];return this.$r.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new G(new yt([])),i=new jt(e,t),s=new jt(e,t+1);let r=st();return this.$r.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new jt(t,0),i=this.qr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class jt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return G.comparator(t.key,e.key)||tt(t.Hr,e.Hr)}static Ur(t,e){return tt(t.Hr,e.Hr)||G.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new zt(jt.Qr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gx(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new jt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?hd:this.er-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new jt(e,0),s=new jt(e,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new zt(tt);return e.forEach((s=>{const r=new jt(s,0),o=new jt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),V.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;G.isDocumentKey(r)||(r=r.child(""));const o=new jt(new G(r),0);let a=new zt(tt);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Hr)),!0)}),o),V.resolve(this.ei(a))}ei(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){ut(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return V.forEach(e.mutations,(s=>{const r=new jt(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=i}))}rr(t){}containsKey(t,e){const i=new jt(e,0),s=this.Yr.firstAfterOrEqual(i);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(t){this.ni=t,this.docs=(function(){return new St(G.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return V.resolve(i?i.document.mutableCopy():re.newInvalidDocument(e))}getEntries(t,e){let i=kn();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():re.newInvalidDocument(s))})),V.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=kn();const o=e.path,a=new G(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||CS(kS(d),i)<=0||(s.has(d.key)||Sc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,i,s){Y(9500)}ri(t,e){return V.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new eP(this)}getSize(t){return V.resolve(this.size)}}class eP extends Gx{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(i)})),V.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(t){this.persistence=t,this.ii=new ji((e=>gd(e)),md),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.si=0,this.oi=new wd,this.targetCount=0,this._i=ys.ar()}forEachTarget(t,e){return this.ii.forEach(((i,s)=>e(s))),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.si&&(this.si=e),V.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ys(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.hr(e),V.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),V.waitFor(r).next((()=>s))}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const i=this.ii.get(e)||null;return V.resolve(i)}addMatchingKeys(t,e,i){return this.oi.Kr(e,i),V.resolve()}removeMatchingKeys(t,e,i){this.oi.Gr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const i=this.oi.Jr(e);return V.resolve(i)}containsKey(t,e){return V.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,e){this.ai={},this.overlays={},this.ui=new wc(0),this.ci=!1,this.ci=!0,this.li=new Jx,this.referenceDelegate=t(this),this.hi=new nP(this),this.indexManager=new Ux,this.remoteDocumentCache=(function(s){return new tP(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new Fx(e),this.Ti=new Xx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qx,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ai[t.toKey()];return i||(i=new Zx(e,this.referenceDelegate),this.ai[t.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,i){q("MemoryPersistence","Starting transaction:",t);const s=new iP(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return V.or(Object.values(this.ai).map((i=>()=>i.containsKey(t,e))))}}class iP extends DS{constructor(t){super(),this.currentSequenceNumber=t}}class Ed{constructor(t){this.persistence=t,this.Ai=new wd,this.Ri=null}static Vi(t){return new Ed(t)}get mi(){if(this.Ri)return this.Ri;throw Y(60996)}addReference(t,e,i){return this.Ai.addReference(i,e),this.mi.delete(i.toString()),V.resolve()}removeReference(t,e,i){return this.Ai.removeReference(i,e),this.mi.add(i.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,(i=>{const s=G.fromPath(i);return this.fi(t,s).next((r=>{r||e.removeEntry(s,X.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((i=>{i?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return V.or([()=>V.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Ga{constructor(t,e){this.persistence=t,this.gi=new ji((i=>NS(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=Wx(this,e)}static Vi(t,e){return new Ga(t,e)}Ii(){}di(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}yr(t){let e=0;return this.gr(t,(i=>{e++})).next((()=>e))}gr(t,e){return V.forEach(this.gi,((i,s)=>this.Sr(t,i,s).next((r=>r?V.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(t,(o=>this.Sr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,X.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),V.resolve()}removeReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ha(t.data.value)),e}Sr(t,e,i){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return V.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Is=i,this.ds=s}static Es(t,e){let i=st(),s=st();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Id(t,e.fromCache,i,s)}}/**
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
 */class sP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class rP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return kE()?8:MS(ae())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ps(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ys(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new sP;return this.ws(t,e,o).next((a=>{if(r.result=a,this.Rs)return this.Ss(t,e,o,a.size)}))})).next((()=>r.result))}Ss(t,e,i,s){return i.documentReadCount<this.Vs?(Zi()<=it.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ts(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Zi()<=it.DEBUG&&q("QueryEngine","Query:",ts(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(Zi()<=it.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ts(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,We(e))):V.resolve())}ps(t,e){if(Pp(e))return V.resolve(null);let i=We(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=uu(e,null,"F"),i=We(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=st(...r);return this.gs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((c=>{const l=this.bs(e,a);return this.Ds(e,l,o,c.readTime)?this.ps(t,uu(e,null,"F")):this.vs(t,l,e,c)}))))})))))}ys(t,e,i,s){return Pp(e)||s.isEqual(X.min())?V.resolve(null):this.gs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ds(e,o,i,s)?V.resolve(null):(Zi()<=it.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ts(e)),this.vs(t,o,e,PS(s,Lr)).next((a=>a)))}))}bs(t,e){let i=new zt($v(t));return e.forEach(((s,r)=>{Sc(t,r)&&(i=i.add(r))})),i}Ds(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(t,e,i){return Zi()<=it.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ts(e)),this.gs.getDocumentsMatchingQuery(t,e,ei.min(),i)}vs(t,e,i,s){return this.gs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="LocalStore",oP=3e8;class aP{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new St(tt),this.Ms=new ji((r=>gd(r)),md),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(i)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Yx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function cP(n,t,e,i){return new aP(n,t,e,i)}async function u_(n,t){const e=J(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Ns(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let c=st();for(const l of s){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(i,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function lP(n,t){const e=J(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.Os.newChangeBuffer({trackRemovals:!0});return(function(a,c,l,d){const h=l.batch,f=h.keys();let g=V.resolve();return f.forEach((v=>{g=g.next((()=>d.getEntry(c,v))).next((_=>{const y=l.docVersions.get(v);ut(y!==null,48541),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),d.addEntry(_)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,h)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let c=st();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function d_(n){const t=J(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function uP(n,t){const e=J(n),i=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const a=[];t.targetChanges.forEach(((d,h)=>{const f=s.get(h);if(!f)return;a.push(e.hi.removeMatchingKeys(r,d.removedDocuments,h).next((()=>e.hi.addMatchingKeys(r,d.addedDocuments,h))));let g=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Xt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,i)),s=s.insert(h,g),(function(_,y,I){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=oP?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0})(f,g,d)&&a.push(e.hi.updateTargetData(r,g))}));let c=kn(),l=st();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))})),a.push(dP(r,o,t.documentUpdates).next((d=>{c=d.Ls,l=d.ks}))),!i.isEqual(X.min())){const d=e.hi.getLastRemoteSnapshotVersion(r).next((h=>e.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(d)}return V.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,c,l))).next((()=>c))})).then((r=>(e.Fs=s,r)))}function dP(n,t,e){let i=st(),s=st();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=kn();return e.forEach(((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):q(Td,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function hP(n,t){const e=J(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=hd),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function fP(n,t){const e=J(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.hi.getTargetData(i,t).next((r=>r?(s=r,V.resolve(s)):e.hi.allocateTargetId(i).next((o=>(s=new Bn(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(i.targetId,i),e.Ms.set(t,i.targetId)),i}))}async function gu(n,t,e){const i=J(n),s=i.Fs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ds(o))throw o;q(Td,`Failed to update sequence numbers for target ${t}: ${o}`)}i.Fs=i.Fs.remove(t),i.Ms.delete(s.target)}function $p(n,t,e){const i=J(n);let s=X.min(),r=st();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,d){const h=J(c),f=h.Ms.get(d);return f!==void 0?V.resolve(h.Fs.get(f)):h.hi.getTargetData(l,d)})(i,o,We(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{r=c}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:X.min(),e?r:st()))).next((a=>(pP(i,tx(t),a),{documents:a,qs:r})))))}function pP(n,t,e){let i=n.xs.get(t)||X.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(t,i)}class zp{constructor(){this.activeTargetIds=ox()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gP{constructor(){this.Fo=new zp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,i){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new zp,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class mP{xo(t){}shutdown(){}}/**
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
 */const jp="ConnectivityMonitor";class qp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){q(jp,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){q(jp,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qo=null;function mu(){return qo===null?qo=(function(){return 268435456+Math.round(2147483648*Math.random())})():qo++,"0x"+qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="RestConnection",yP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vP{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===$a?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=mu(),a=this.Go(t,e.toUriEncodedString());q(Pl,`Sending RPC '${t}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,r);const{host:l}=new URL(a),d=Is(l);return this.jo(t,a,c,i,d).then((h=>(q(Pl,`Received RPC '${t}' ${o}: `,h),h)),(h=>{throw ti(Pl,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",i),h}))}Jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}zo(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Cs})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Go(t,e){const i=yP[t];return`${this.$o}/v1/${e}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="WebChannelConnection";class bP extends vP{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,i,s,r){const o=mu();return new Promise(((a,c)=>{const l=new fv;l.setWithCredentials(!0),l.listenOnce(pv.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case da.NO_ERROR:const h=l.getResponseJson();q(ee,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(h)),a(h);break;case da.TIMEOUT:q(ee,`RPC '${t}' ${o} timed out`),c(new j(N.DEADLINE_EXCEEDED,"Request time out"));break;case da.HTTP_ERROR:const f=l.getStatus();if(q(ee,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const _=(function(I){const k=I.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(k)>=0?k:N.UNKNOWN})(v.status);c(new j(_,v.message))}else c(new j(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new j(N.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{c_:t,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{q(ee,`RPC '${t}' ${o} completed.`)}}));const d=JSON.stringify(s);q(ee,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",d,i,15)}))}P_(t,e,i){const s=mu(),r=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=yv(),a=mv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const d=r.join("");q(ee,`Creating RPC '${t}' stream ${s}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let f=!1,g=!1;const v=new _P({Ho:y=>{g?q(ee,`Not sending because RPC '${t}' stream ${s} is closed:`,y):(f||(q(ee,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),q(ee,`RPC '${t}' stream ${s} sending:`,y),h.send(y))},Yo:()=>h.close()}),_=(y,I,k)=>{y.listen(I,(R=>{try{k(R)}catch(D){setTimeout((()=>{throw D}),0)}}))};return _(h,sr.EventType.OPEN,(()=>{g||(q(ee,`RPC '${t}' stream ${s} transport opened.`),v.s_())})),_(h,sr.EventType.CLOSE,(()=>{g||(g=!0,q(ee,`RPC '${t}' stream ${s} transport closed`),v.__(),this.I_(h))})),_(h,sr.EventType.ERROR,(y=>{g||(g=!0,ti(ee,`RPC '${t}' stream ${s} transport errored. Name:`,y.name,"Message:",y.message),v.__(new j(N.UNAVAILABLE,"The operation could not be completed")))})),_(h,sr.EventType.MESSAGE,(y=>{var I;if(!g){const k=y.data[0];ut(!!k,16349);const R=k,D=(R==null?void 0:R.error)||((I=R[0])===null||I===void 0?void 0:I.error);if(D){q(ee,`RPC '${t}' stream ${s} received error:`,D);const O=D.status;let L=(function(E){const S=Lt[E];if(S!==void 0)return Jv(S)})(O),T=D.message;L===void 0&&(L=N.INTERNAL,T="Unknown error status: "+O+" with message "+D.message),g=!0,v.__(new j(L,T)),h.close()}else q(ee,`RPC '${t}' stream ${s} received:`,k),v.a_(k)}})),_(a,gv.STAT_EVENT,(y=>{y.stat===iu.PROXY?q(ee,`RPC '${t}' stream ${s} detected buffering proxy`):y.stat===iu.NOPROXY&&q(ee,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{v.o_()}),0),v}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function kl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n){return new Tx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Fi=t,this.timerId=e,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-i);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="PersistentStream";class f_{constructor(t,e,i,s,r,o,a,c){this.Fi=t,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new h_(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(Pn(e.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===e&&this.W_(i,s)}),(i=>{t((()=>{const s=new j(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(t,e){const i=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return q(Hp,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(q(Hp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wP extends f_{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=xx(this.serializer,t),i=(function(r){if(!("targetChange"in r))return X.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Ge(o.readTime):X.min()})(t);return this.listener.J_(e,i)}H_(t){const e={};e.database=pu(this.serializer),e.addTarget=(function(r,o){let a;const c=o.target;if(a=cu(c)?{documents:Cx(r,c)}:{query:Rx(r,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=e_(r,o.resumeToken);const l=du(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Wa(r,o.snapshotVersion.toTimestamp());const l=du(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,t);const i=Mx(this.serializer,t);i&&(e.labels=i),this.k_(e)}Y_(t){const e={};e.database=pu(this.serializer),e.removeTarget=t,this.k_(e)}}class EP extends f_{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return ut(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ut(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){ut(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=kx(t.writeResults,t.commitTime),i=Ge(t.commitTime);return this.listener.ta(i,e)}na(){const t={};t.database=pu(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>Px(this.serializer,i)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{}class TP extends IP{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,hu(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(N.UNKNOWN,r.toString())}))}Jo(t,e,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(t,hu(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(N.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class AP{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Pn(e),this._a=!1):q("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="RemoteStore";class SP{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((o=>{i.enqueueAndForget((async()=>{qi(this)&&(q(Bi,"Restarting streams for network reachability change."),await(async function(c){const l=J(c);l.Ia.add(4),await ro(l),l.Aa.set("Unknown"),l.Ia.delete(4),await Dc(l)})(this))}))})),this.Aa=new AP(i,s)}}async function Dc(n){if(qi(n))for(const t of n.da)await t(!0)}async function ro(n){for(const t of n.da)await t(!1)}function p_(n,t){const e=J(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Pd(e)?xd(e):Os(e).x_()&&Sd(e,t))}function Ad(n,t){const e=J(n),i=Os(e);e.Ta.delete(t),i.x_()&&g_(e,t),e.Ta.size===0&&(i.x_()?i.B_():qi(e)&&e.Aa.set("Unknown"))}function Sd(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Os(n).H_(t)}function g_(n,t){n.Ra.$e(t),Os(n).Y_(t)}function xd(n){n.Ra=new bx({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),Os(n).start(),n.Aa.aa()}function Pd(n){return qi(n)&&!Os(n).M_()&&n.Ta.size>0}function qi(n){return J(n).Ia.size===0}function m_(n){n.Ra=void 0}async function xP(n){n.Aa.set("Online")}async function PP(n){n.Ta.forEach(((t,e)=>{Sd(n,t)}))}async function kP(n,t){m_(n),Pd(n)?(n.Aa.la(t),xd(n)):n.Aa.set("Unknown")}async function CP(n,t,e){if(n.Aa.set("Online"),t instanceof t_&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,t)}catch(i){q(Bi,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ka(n,i)}else if(t instanceof ga?n.Ra.Ye(t):t instanceof Zv?n.Ra.it(t):n.Ra.et(t),!e.isEqual(X.min()))try{const i=await d_(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.Ra.Pt(o);return a.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ta.get(l);d&&r.Ta.set(l,d.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,l)=>{const d=r.Ta.get(c);if(!d)return;r.Ta.set(c,d.withResumeToken(Xt.EMPTY_BYTE_STRING,d.snapshotVersion)),g_(r,c);const h=new Bn(d.target,c,l,d.sequenceNumber);Sd(r,h)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){q(Bi,"Failed to raise snapshot:",i),await Ka(n,i)}}async function Ka(n,t,e){if(!Ds(t))throw t;n.Ia.add(1),await ro(n),n.Aa.set("Offline"),e||(e=()=>d_(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{q(Bi,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Dc(n)}))}function y_(n,t){return t().catch((e=>Ka(n,e,t)))}async function Mc(n){const t=J(n),e=ri(t);let i=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:hd;for(;RP(t);)try{const s=await hP(t.localStore,i);if(s===null){t.Pa.length===0&&e.B_();break}i=s.batchId,DP(t,s)}catch(s){await Ka(t,s)}v_(t)&&__(t)}function RP(n){return qi(n)&&n.Pa.length<10}function DP(n,t){n.Pa.push(t);const e=ri(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function v_(n){return qi(n)&&!ri(n).M_()&&n.Pa.length>0}function __(n){ri(n).start()}async function MP(n){ri(n).na()}async function OP(n){const t=ri(n);for(const e of n.Pa)t.X_(e.mutations)}async function NP(n,t,e){const i=n.Pa.shift(),s=vd.from(i,t,e);await y_(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Mc(n)}async function LP(n,t){t&&ri(n).Z_&&await(async function(i,s){if((function(o){return vx(o)&&o!==N.ABORTED})(s.code)){const r=i.Pa.shift();ri(i).N_(),await y_(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Mc(i)}})(n,t),v_(n)&&__(n)}async function Wp(n,t){const e=J(n);e.asyncQueue.verifyOperationInProgress(),q(Bi,"RemoteStore received new credentials");const i=qi(e);e.Ia.add(3),await ro(e),i&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Dc(e)}async function VP(n,t){const e=J(n);t?(e.Ia.delete(2),await Dc(e)):t||(e.Ia.add(2),await ro(e),e.Aa.set("Unknown"))}function Os(n){return n.Va||(n.Va=(function(e,i,s){const r=J(e);return r.ia(),new wP(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:xP.bind(null,n),e_:PP.bind(null,n),n_:kP.bind(null,n),J_:CP.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Pd(n)?xd(n):n.Aa.set("Unknown")):(await n.Va.stop(),m_(n))}))),n.Va}function ri(n){return n.ma||(n.ma=(function(e,i,s){const r=J(e);return r.ia(),new EP(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:MP.bind(null,n),n_:LP.bind(null,n),ea:OP.bind(null,n),ta:NP.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Mc(n)):(await n.ma.stop(),n.Pa.length>0&&(q(Bi,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new kd(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cd(n,t){if(Pn("AsyncQueue",`${t}: ${n}`),Ds(n))return new j(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static emptySet(t){return new cs(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||G.comparator(e.key,i.key):(e,i)=>G.comparator(e.key,i.key),this.keyedMap=rr(),this.sortedSet=new St(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof cs)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new cs;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.fa=new St(G.comparator)}track(t){const e=t.doc.key,i=this.fa.get(e);i?t.type!==0&&i.type===3?this.fa=this.fa.insert(e,t):t.type===3&&i.type!==1?this.fa=this.fa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.fa=this.fa.remove(e):t.type===1&&i.type===2?this.fa=this.fa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):Y(63341,{At:t,ga:i}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,i)=>{t.push(i)})),t}}class vs{constructor(t,e,i,s,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new vs(t,e,cs.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ac(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class BP{constructor(){this.queries=Kp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,i){const s=J(e),r=s.queries;s.queries=Kp(),r.forEach(((o,a)=>{for(const c of a.wa)c.onError(i)}))})(this,new j(N.ABORTED,"Firestore shutting down"))}}function Kp(){return new ji((n=>Uv(n)),Ac)}async function Rd(n,t){const e=J(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.ba()&&(i=2):(r=new FP,i=t.ba()?0:1);try{switch(i){case 0:r.ya=await e.onListen(s,!0);break;case 1:r.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Cd(o,`Initialization of query '${ts(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.wa.push(t),t.va(e.onlineState),r.ya&&t.Ca(r.ya)&&Md(e)}async function Dd(n,t){const e=J(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.wa.indexOf(t);o>=0&&(r.wa.splice(o,1),r.wa.length===0?s=t.ba()?0:1:!r.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function UP(n,t){const e=J(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.wa)a.Ca(s)&&(i=!0);o.ya=s}}i&&Md(e)}function $P(n,t,e){const i=J(n),s=i.queries.get(t);if(s)for(const r of s.wa)r.onError(e);i.queries.delete(t)}function Md(n){n.Da.forEach((t=>{t.next()}))}var yu,Yp;(Yp=yu||(yu={})).Fa="default",Yp.Cache="cache";class Od{constructor(t,e,i){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new vs(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const i=e!=="Offline";return(!this.options.ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=vs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==yu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t){this.key=t}}class w_{constructor(t){this.key=t}}class zP{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=st(),this.mutatedKeys=st(),this.Xa=$v(t),this.eu=new cs(this.Xa)}get tu(){return this.Ha}nu(t,e){const i=e?e.ru:new Gp,s=e?e.eu:this.eu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,h)=>{const f=s.get(d),g=Sc(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let y=!1;f&&g?f.data.isEqual(g.data)?v!==_&&(i.track({type:3,doc:g}),y=!0):this.iu(f,g)||(i.track({type:2,doc:g}),y=!0,(c&&this.Xa(g,c)>0||l&&this.Xa(g,l)<0)&&(a=!0)):!f&&g?(i.track({type:0,doc:g}),y=!0):f&&!g&&(i.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(g?(o=o.add(g),r=_?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{eu:o,ru:i,Ds:a,mutatedKeys:r}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const o=t.ru.pa();o.sort(((d,h)=>(function(g,v){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{At:y})}};return _(g)-_(v)})(d.type,h.type)||this.Xa(d.doc,h.doc))),this.su(i),s=s!=null&&s;const a=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new vs(this.query,t.eu,r,o,t.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Gp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=st(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const e=[];return t.forEach((i=>{this.Za.has(i)||e.push(new w_(i))})),this.Za.forEach((i=>{t.has(i)||e.push(new b_(i))})),e}uu(t){this.Ha=t.qs,this.Za=st();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return vs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nd="SyncEngine";class jP{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class qP{constructor(t){this.key=t,this.lu=!1}}class HP{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new ji((a=>Uv(a)),Ac),this.Tu=new Map,this.Iu=new Set,this.du=new St(G.comparator),this.Eu=new Map,this.Au=new wd,this.Ru={},this.Vu=new Map,this.mu=ys.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function WP(n,t,e=!0){const i=x_(n);let s;const r=i.Pu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await E_(i,t,e,!0),s}async function GP(n,t){const e=x_(n);await E_(e,t,!0,!1)}async function E_(n,t,e,i){const s=await fP(n.localStore,We(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await KP(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&p_(n.remoteStore,s),a}async function KP(n,t,e,i,s){n.gu=(h,f,g)=>(async function(_,y,I,k){let R=y.view.nu(I);R.Ds&&(R=await $p(_.localStore,y.query,!1).then((({documents:T})=>y.view.nu(T,R))));const D=k&&k.targetChanges.get(y.targetId),O=k&&k.targetMismatches.get(y.targetId)!=null,L=y.view.applyChanges(R,_.isPrimaryClient,D,O);return Qp(_,y.targetId,L._u),L.snapshot})(n,h,f,g);const r=await $p(n.localStore,t,!0),o=new zP(t,r.qs),a=o.nu(r.documents),c=so.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Qp(n,e,l._u);const d=new jP(t,e,o);return n.Pu.set(t,d),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),l.snapshot}async function YP(n,t,e){const i=J(n),s=i.Pu.get(t),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((o=>!Ac(o,t)))),void i.Pu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await gu(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Ad(i.remoteStore,s.targetId),vu(i,s.targetId)})).catch(Rs)):(vu(i,s.targetId),await gu(i.localStore,s.targetId,!0))}async function XP(n,t){const e=J(n),i=e.Pu.get(t),s=e.Tu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Ad(e.remoteStore,i.targetId))}async function QP(n,t,e){const i=sk(n);try{const s=await(function(o,a){const c=J(o),l=_t.now(),d=a.reduce(((g,v)=>g.add(v.key)),st());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let v=kn(),_=st();return c.Os.getEntries(g,d).next((y=>{v=y,v.forEach(((I,k)=>{k.isValidDocument()||(_=_.add(I))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,v))).next((y=>{h=y;const I=[];for(const k of a){const R=fx(k,h.get(k.key).overlayedDocument);R!=null&&I.push(new ui(k.key,R,Dv(R.value.mapValue),ge.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,I,a)})).next((y=>{f=y;const I=y.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(g,y.batchId,I)}))})).then((()=>({batchId:f.batchId,changes:jv(h)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new St(tt)),l=l.insert(a,c),o.Ru[o.currentUser.toKey()]=l})(i,s.batchId,e),await oo(i,s.changes),await Mc(i.remoteStore)}catch(s){const r=Cd(s,"Failed to persist write");e.reject(r)}}async function I_(n,t){const e=J(n);try{const i=await uP(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Eu.get(r);o&&(ut(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ut(o.lu,14607):s.removedDocuments.size>0&&(ut(o.lu,42227),o.lu=!1))})),await oo(e,i,t)}catch(i){await Rs(i)}}function Xp(n,t,e){const i=J(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Pu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach(((d,h)=>{for(const f of h.wa)f.va(a)&&(l=!0)})),l&&Md(c)})(i.eventManager,t),s.length&&i.hu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function JP(n,t,e){const i=J(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),r=s&&s.key;if(r){let o=new St(G.comparator);o=o.insert(r,re.newNoDocument(r,X.min()));const a=st().add(r),c=new Cc(X.min(),new Map,new St(tt),o,a);await I_(i,c),i.du=i.du.remove(r),i.Eu.delete(t),Ld(i)}else await gu(i.localStore,t,!1).then((()=>vu(i,t,e))).catch(Rs)}async function ZP(n,t){const e=J(n),i=t.batch.batchId;try{const s=await lP(e.localStore,t);A_(e,i,null),T_(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await oo(e,s)}catch(s){await Rs(s)}}async function tk(n,t,e){const i=J(n);try{const s=await(function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next((h=>(ut(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>c.localDocuments.getDocuments(l,d)))}))})(i.localStore,t);A_(i,t,e),T_(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await oo(i,s)}catch(s){await Rs(s)}}function T_(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function A_(n,t,e){const i=J(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Ru[i.currentUser.toKey()]=s}}function vu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Tu.get(t))n.Pu.delete(i),e&&n.hu.pu(i,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((i=>{n.Au.containsKey(i)||S_(n,i)}))}function S_(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ad(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Ld(n))}function Qp(n,t,e){for(const i of e)i instanceof b_?(n.Au.addReference(i.key,t),ek(n,i)):i instanceof w_?(q(Nd,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,t),n.Au.containsKey(i.key)||S_(n,i.key)):Y(19791,{yu:i})}function ek(n,t){const e=t.key,i=e.path.canonicalString();n.du.get(e)||n.Iu.has(i)||(q(Nd,"New document in limbo: "+e),n.Iu.add(i),Ld(n))}function Ld(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new G(yt.fromString(t)),i=n.mu.next();n.Eu.set(i,new qP(e)),n.du=n.du.insert(e,i),p_(n.remoteStore,new Bn(We(Tc(e.path)),i,"TargetPurposeLimboResolution",wc.ue))}}async function oo(n,t,e){const i=J(n),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach(((a,c)=>{o.push(i.gu(c,t,e).then((l=>{var d;if((l||e)&&i.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){s.push(l);const h=Id.Es(c.targetId,l);r.push(h)}})))})),await Promise.all(o),i.hu.J_(s),await(async function(c,l){const d=J(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>V.forEach(l,(f=>V.forEach(f.Is,(g=>d.persistence.referenceDelegate.addReference(h,f.targetId,g))).next((()=>V.forEach(f.ds,(g=>d.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))))))}catch(h){if(!Ds(h))throw h;q(Td,"Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=d.Fs.get(f),v=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(v);d.Fs=d.Fs.insert(f,_)}}})(i.localStore,r))}async function nk(n,t){const e=J(n);if(!e.currentUser.isEqual(t)){q(Nd,"User change. New user:",t.toKey());const i=await u_(e.localStore,t);e.currentUser=t,(function(r,o){r.Vu.forEach((a=>{a.forEach((c=>{c.reject(new j(N.CANCELLED,o))}))})),r.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await oo(e,i.Bs)}}function ik(n,t){const e=J(n),i=e.Eu.get(t);if(i&&i.lu)return st().add(i.key);{let s=st();const r=e.Tu.get(t);if(!r)return s;for(const o of r){const a=e.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function x_(n){const t=J(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=I_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ik.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=JP.bind(null,t),t.hu.J_=UP.bind(null,t.eventManager),t.hu.pu=$P.bind(null,t.eventManager),t}function sk(n){const t=J(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ZP.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tk.bind(null,t),t}class Ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rc(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return cP(this.persistence,new rP,t.initialUser,this.serializer)}Du(t){return new l_(Ed.Vi,this.serializer)}bu(t){return new gP}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ya.provider={build:()=>new Ya};class rk extends Ya{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){ut(this.persistence.referenceDelegate instanceof Ga,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new qx(i,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new l_((i=>Ga.Vi(i,e)),this.serializer)}}class _u{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Xp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=nk.bind(null,this.syncEngine),await VP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new BP})()}createDatastore(t){const e=Rc(t.databaseInfo.databaseId),i=(function(r){return new bP(r)})(t.databaseInfo);return(function(r,o,a,c){return new TP(r,o,a,c)})(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new SP(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>Xp(this.syncEngine,e,0)),(function(){return qp.C()?new qp:new mP})())}createSyncEngine(t,e){return(function(s,r,o,a,c,l,d){const h=new HP(s,r,o,a,c,l);return d&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=J(s);q(Bi,"RemoteStore shutting down."),r.Ia.add(5),await ro(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}_u.provider={build:()=>new _u};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Pn("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="FirestoreClient";class ok{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ie.UNAUTHENTICATED,this.clientId=dd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{q(oi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(q(oi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Cd(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function Cl(n,t){n.asyncQueue.verifyOperationInProgress(),q(oi,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await u_(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>{ti("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{q("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ti("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function Jp(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ak(n);q(oi,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>Wp(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Wp(t.remoteStore,s))),n._onlineComponents=t}async function ak(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(oi,"Using user provided OfflineComponentProvider");try{await Cl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ti("Error using user provided cache. Falling back to memory cache: "+e),await Cl(n,new Ya)}}else q(oi,"Using default OfflineComponentProvider"),await Cl(n,new rk(void 0));return n._offlineComponents}async function P_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(oi,"Using user provided OnlineComponentProvider"),await Jp(n,n._uninitializedComponentsProvider._online)):(q(oi,"Using default OnlineComponentProvider"),await Jp(n,new _u))),n._onlineComponents}function ck(n){return P_(n).then((t=>t.syncEngine))}async function Xa(n){const t=await P_(n),e=t.eventManager;return e.onListen=WP.bind(null,t.syncEngine),e.onUnlisten=YP.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=GP.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=XP.bind(null,t.syncEngine),e}function lk(n,t,e={}){const i=new En;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Vd({next:f=>{d.Ou(),o.enqueueAndForget((()=>Dd(r,h)));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new j(N.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new j(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Od(Tc(a.path),d,{includeMetadataChanges:!0,ka:!0});return Rd(r,h)})(await Xa(n),n.asyncQueue,t,e,i))),i.promise}function uk(n,t,e={}){const i=new En;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new Vd({next:f=>{d.Ou(),o.enqueueAndForget((()=>Dd(r,h))),f.fromCache&&c.source==="server"?l.reject(new j(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Od(a,d,{includeMetadataChanges:!0,ka:!0});return Rd(r,h)})(await Xa(n),n.asyncQueue,t,e,i))),i.promise}/**
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
 */function k_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="firestore.googleapis.com",tg=!0;class eg{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new j(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=C_,this.ssl=tg}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:tg;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=c_;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<zx)throw new j(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xS("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k_((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Oc{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eg(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new vS;switch(i.type){case"firstParty":return new ES(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=Zp.get(e);i&&(q("ComponentProvider","Removing Datastore"),Zp.delete(e),i.terminate())})(this),Promise.resolve()}}function dk(n,t,e,i={}){var s;n=pe(n,Oc);const r=Is(t),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;r&&(Wm(`https://${c}`),Gm("Firestore",!0)),o.host!==C_&&o.host!==c&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!Li(l,a)&&(n._setSettings(l),i.mockUserToken)){let d,h;if(typeof i.mockUserToken=="string")d=i.mockUserToken,h=ie.MOCK_USER;else{d=bE(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new j(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ie(f)}n._authCredentials=new _S(new _v(d,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new di(this.firestore,t,this._query)}}class kt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(no(e,kt._jsonSchema))return new kt(t,i||null,new G(yt.fromString(e.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:Bt("string",kt._jsonSchemaVersion),referencePath:Bt("string")};class Qn extends di{constructor(t,e,i){super(t,e,Tc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new G(t))}withConverter(t){return new Qn(this.firestore,t,this._path)}}function In(n,t,...e){if(n=K(n),wv("collection","path",t),n instanceof Oc){const i=yt.fromString(t,...e);return pp(i),new Qn(n,null,i)}{if(!(n instanceof kt||n instanceof Qn))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(t,...e));return pp(i),new Qn(n.firestore,null,i)}}function Qt(n,t,...e){if(n=K(n),arguments.length===1&&(t=dd.newId()),wv("doc","path",t),n instanceof Oc){const i=yt.fromString(t,...e);return fp(i),new kt(n,null,new G(i))}{if(!(n instanceof kt||n instanceof Qn))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(t,...e));return fp(i),new kt(n.firestore,n instanceof Qn?n.converter:null,new G(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="AsyncQueue";class ig{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new h_(this,"async_queue_retry"),this.oc=()=>{const i=kl();i&&q(ng,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=t;const e=kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=kl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new En;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Ds(t))throw t;q(ng,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((i=>{throw this.tc=i,this.nc=!1,Pn("INTERNAL UNHANDLED ERROR: ",sg(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=e,e}enqueueAfterDelay(t,e,i){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=kd.createAndSchedule(this,t,e,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&Y(47125,{hc:sg(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function sg(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function rg(n){return(function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class Ze extends Oc{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new ig,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ig(t),this._firestoreClient=void 0,await t}}}function hk(n,t){const e=typeof n=="object"?n:Qm(),i=typeof n=="string"?n:$a,s=ju(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=vE("firestore");r&&dk(s,...r)}return s}function ao(n){if(n._terminated)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fk(n),n._firestoreClient}function fk(n){var t,e,i;const s=n._freezeSettings(),r=(function(a,c,l,d){return new FS(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,k_(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ok(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xe(Xt.fromBase64String(t))}catch(e){throw new j(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xe(Xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(no(t,xe._jsonSchema))return xe.fromBase64String(t.bytes)}}xe._jsonSchemaVersion="firestore/bytes/1.0",xe._jsonSchema={type:Bt("string",xe._jsonSchemaVersion),bytes:Bt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ke._jsonSchemaVersion}}static fromJSON(t){if(no(t,Ke._jsonSchema))return new Ke(t.latitude,t.longitude)}}Ke._jsonSchemaVersion="firestore/geoPoint/1.0",Ke._jsonSchema={type:Bt("string",Ke._jsonSchemaVersion),latitude:Bt("number"),longitude:Bt("number")};/**
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
 */class Ye{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(no(t,Ye._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ye(t.vectorValues);throw new j(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:Bt("string",Ye._jsonSchemaVersion),vectorValues:Bt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=/^__.*__$/;class gk{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ui(t,this.data,this.fieldMask,e,this.fieldTransforms):new io(t,this.data,e,this.fieldTransforms)}}class R_{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new ui(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function D_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ec:n})}}class Bd{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Bd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.fc(t),s}gc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Qa(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(D_(this.Ec)&&pk.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class mk{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Rc(t)}Dc(t,e,i,s=!1){return new Bd({Ec:t,methodName:e,bc:i,path:Yt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lo(n){const t=n._freezeSettings(),e=Rc(n._databaseId);return new mk(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ud(n,t,e,i,s,r={}){const o=n.Dc(r.merge||r.mergeFields?2:0,t,e,s);$d("Data must be an object, but it was:",o,i);const a=N_(i,o);let c,l;if(r.merge)c=new Te(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=bu(t,h,e);if(!o.contains(f))throw new j(N.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);V_(d,f)||d.push(f)}c=new Te(d),l=o.fieldTransforms.filter((h=>c.covers(h.field)))}else c=null,l=o.fieldTransforms;return new gk(new ve(a),c,l)}class Nc extends Fd{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Nc}}function M_(n,t,e,i){const s=n.Dc(1,t,e);$d("Data must be an object, but it was:",s,i);const r=[],o=ve.empty();li(i,((c,l)=>{const d=zd(t,c,e);l=K(l);const h=s.gc(d);if(l instanceof Nc)r.push(d);else{const f=uo(l,h);f!=null&&(r.push(d),o.set(d,f))}}));const a=new Te(r);return new R_(o,a,s.fieldTransforms)}function O_(n,t,e,i,s,r){const o=n.Dc(1,t,e),a=[bu(t,i,e)],c=[s];if(r.length%2!=0)throw new j(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(bu(t,r[f])),c.push(r[f+1]);const l=[],d=ve.empty();for(let f=a.length-1;f>=0;--f)if(!V_(l,a[f])){const g=a[f];let v=c[f];v=K(v);const _=o.gc(g);if(v instanceof Nc)l.push(g);else{const y=uo(v,_);y!=null&&(l.push(g),d.set(g,y))}}const h=new Te(l);return new R_(d,h,o.fieldTransforms)}function yk(n,t,e,i=!1){return uo(e,n.Dc(i?4:3,t))}function uo(n,t){if(L_(n=K(n)))return $d("Unsupported field value:",t,n),N_(n,t);if(n instanceof Fd)return(function(i,s){if(!D_(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let c=uo(a,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=K(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return ax(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=_t.fromDate(i);return{timestampValue:Wa(s.serializer,r)}}if(i instanceof _t){const r=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Wa(s.serializer,r)}}if(i instanceof Ke)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof xe)return{bytesValue:e_(s.serializer,i._byteString)};if(i instanceof kt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:bd(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ye)return(function(o,a){return{mapValue:{fields:{[Cv]:{stringValue:Rv},[za]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.wc("VectorValues must only contain numeric values.");return yd(a.serializer,l)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${bc(i)}`)})(n,t)}function N_(n,t){const e={};return Tv(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):li(n,((i,s)=>{const r=uo(s,t.Vc(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function L_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Ke||n instanceof xe||n instanceof kt||n instanceof Fd||n instanceof Ye)}function $d(n,t,e){if(!L_(e)||!Ev(e)){const i=bc(e);throw i==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+i)}}function bu(n,t,e){if((t=K(t))instanceof co)return t._internalPath;if(typeof t=="string")return zd(n,t);throw Qa("Field path arguments must be of type string or ",n,!1,void 0,e)}const vk=new RegExp("[~\\*/\\[\\]]");function zd(n,t,e){if(t.search(vk)>=0)throw Qa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new co(...t.split("."))._internalPath}catch{throw Qa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qa(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new j(N.INVALID_ARGUMENT,a+n+c)}function V_(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _k(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(jd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class _k extends F_{data(){return super.data()}}function jd(n,t){return typeof t=="string"?zd(n,t):t instanceof co?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qd{}class U_ extends qd{}function Hd(n,t,...e){let i=[];t instanceof qd&&i.push(t),i=i.concat(e),(function(r){const o=r.filter((c=>c instanceof Gd)).length,a=r.filter((c=>c instanceof Wd)).length;if(o>1||o>0&&a>0)throw new j(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class Wd extends U_{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new Wd(t,e,i)}_apply(t){const e=this._parse(t);return $_(t._query,e),new di(t.firestore,t.converter,lu(t._query,e))}_parse(t){const e=lo(t.firestore);return(function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ag(h,d);const v=[];for(const _ of h)v.push(og(c,r,_));f={arrayValue:{values:v}}}else f=og(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ag(h,d),f=yk(a,o,h,d==="in"||d==="not-in");return Ft.create(l,d,f)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Gd extends qd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Gd(t,e)}_parse(t){const e=this._queryConstraints.map((i=>i._parse(t))).filter((i=>i.getFilters().length>0));return e.length===1?e[0]:Ve.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,r){let o=s;const a=r.getFlattenedFilters();for(const c of a)$_(o,c),o=lu(o,c)})(t._query,e),new di(t.firestore,t.converter,lu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kd extends U_{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Kd(t,e)}_apply(t){const e=(function(s,r,o){if(s.startAt!==null)throw new j(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ur(r,o)})(t._query,this._field,this._direction);return new di(t.firestore,t.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new Ms(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Yd(n,t="asc"){const e=t,i=jd("orderBy",n);return Kd._create(i,e)}function og(n,t,e){if(typeof(e=K(e))=="string"){if(e==="")throw new j(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bv(t)&&e.indexOf("/")!==-1)throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(yt.fromString(e));if(!G.isDocumentKey(i))throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ep(n,new G(i))}if(e instanceof kt)return Ep(n,e._key);throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bc(e)}.`)}function ag(n,t){if(!Array.isArray(n)||n.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function $_(n,t){const e=(function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new j(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class bk{convertValue(t,e="none"){switch(si(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ii(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Y(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return li(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var e,i,s;const r=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[za].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((o=>Dt(o.doubleValue)));return new Ye(r)}convertGeoPoint(t){return new Ke(Dt(t.latitude),Dt(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Ic(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(Vr(t));default:return null}}convertTimestamp(t){const e=ni(t);return new _t(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=yt.fromString(t);ut(a_(i),9688,{name:t});const s=new Fr(i.get(1),i.get(3)),r=new G(i.popFirst(5));return s.isEqual(e)||Pn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class ar{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ki extends F_{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(jd("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ki._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ki._jsonSchemaVersion="firestore/documentSnapshot/1.0",ki._jsonSchema={type:Bt("string",ki._jsonSchemaVersion),bundleSource:Bt("string","DocumentSnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class ma extends ki{data(t={}){return super.data(t)}}class Ci{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ar(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new ma(this._firestore,this._userDataWriter,i.key,i,new ar(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const c=new ma(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ar(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const c=new ma(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ar(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:wk(a.type),doc:c,oldIndex:l,newIndex:d}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ci._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=dd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function wk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n){n=pe(n,kt);const t=pe(n.firestore,Ze);return lk(ao(t),n._key).then((e=>W_(t,n,e)))}Ci._jsonSchemaVersion="firestore/querySnapshot/1.0",Ci._jsonSchema={type:Bt("string",Ci._jsonSchemaVersion),bundleSource:Bt("string","QuerySnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class Qd extends bk{constructor(t){super(),this.firestore=t}convertBytes(t){return new xe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,e)}}function Tr(n){n=pe(n,di);const t=pe(n.firestore,Ze),e=ao(t),i=new Qd(t);return B_(n._query),uk(e,n._query).then((s=>new Ci(t,i,n,s)))}function j_(n,t,e){n=pe(n,kt);const i=pe(n.firestore,Ze),s=Xd(n.converter,t,e);return ho(i,[Ud(lo(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ge.none())])}function hi(n,t,e,...i){n=pe(n,kt);const s=pe(n.firestore,Ze),r=lo(s);let o;return o=typeof(t=K(t))=="string"||t instanceof co?O_(r,"updateDoc",n._key,t,e,i):M_(r,"updateDoc",n._key,t),ho(s,[o.toMutation(n._key,ge.exists(!0))])}function Jd(n){return ho(pe(n.firestore,Ze),[new kc(n._key,ge.none())])}function q_(n,t){const e=pe(n.firestore,Ze),i=Qt(n),s=Xd(n.converter,t);return ho(e,[Ud(lo(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,ge.exists(!1))]).then((()=>i))}function H_(n,...t){var e,i,s;n=K(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||rg(t[o])||(r=t[o++]);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(rg(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,d;if(n instanceof kt)l=pe(n.firestore,Ze),d=Tc(n._key.path),c={next:h=>{t[o]&&t[o](W_(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=pe(n,di);l=pe(h.firestore,Ze),d=h._query;const f=new Qd(l);c={next:g=>{t[o]&&t[o](new Ci(l,f,h,g))},error:t[o+1],complete:t[o+2]},B_(n._query)}return(function(f,g,v,_){const y=new Vd(_),I=new Od(g,y,v);return f.asyncQueue.enqueueAndForget((async()=>Rd(await Xa(f),I))),()=>{y.Ou(),f.asyncQueue.enqueueAndForget((async()=>Dd(await Xa(f),I)))}})(ao(l),d,a,c)}function ho(n,t){return(function(i,s){const r=new En;return i.asyncQueue.enqueueAndForget((async()=>QP(await ck(i),s,r))),r.promise})(ao(n),t)}function W_(n,t,e){const i=e.docs.get(t._key),s=new Qd(n);return new ki(n,s,t._key,i,new ar(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=lo(t)}set(t,e,i){this._verifyNotCommitted();const s=Rl(t,this._firestore),r=Xd(s.converter,e,i),o=Ud(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,ge.none())),this}update(t,e,i,...s){this._verifyNotCommitted();const r=Rl(t,this._firestore);let o;return o=typeof(e=K(e))=="string"||e instanceof co?O_(this._dataReader,"WriteBatch.update",r._key,e,i,s):M_(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(o.toMutation(r._key,ge.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Rl(t,this._firestore);return this._mutations=this._mutations.concat(new kc(e._key,ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Rl(n,t){if((n=K(n)).firestore!==t)throw new j(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(n){return ao(n=pe(n,Ze)),new Ek(n,(t=>ho(n,t)))}(function(t,e=!0){(function(s){Cs=s})(As),hs(new Vi("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Ze(new bS(i.getProvider("auth-internal")),new IS(o,i.getProvider("app-check-internal")),(function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(l.options.projectId,d)})(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),Gn(cp,lp,t),Gn(cp,lp,"esm2017")})();const Tk={apiKey:"AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",authDomain:"money-control-e6af5.firebaseapp.com",databaseURL:"https://money-control-e6af5-default-rtdb.firebaseio.com",projectId:"money-control-e6af5",storageBucket:"money-control-e6af5.firebasestorage.app",messagingSenderId:"490577558965",appId:"1:490577558965:web:09275a065a09844f1eadfc",measurementId:"G-JTLBM89W1W"},Zd=Xm(Tk),On=dv(Zd),gt=hk(Zd),Ak=Object.freeze(Object.defineProperty({__proto__:null,auth:On,db:gt,default:Zd},Symbol.toStringTag,{value:"Module"}));async function Sk(n,t){await j_(Qt(gt,"users",n),{name:t.name,email:t.email,createdAt:t.createdAt||new Date().toISOString(),settings:{currency:"INR",theme:"light",notifications:!0,budgetAlerts:!0,lowBalanceAlert:!0,lowBalanceThreshold:500,allowNegativeBalance:!1}})}async function Lc(n){const t=await z_(Qt(gt,"users",n));return t.exists()?{id:t.id,...t.data()}:null}async function G_(n,t){await hi(Qt(gt,"users",n),{initialBalance:Number(t)}),await X_(n,t)}async function xk(n,t){const e=await Lc(n),i=(e==null?void 0:e.settings)||{};await hi(Qt(gt,"users",n),{settings:{...i,...t}})}async function Pk(n){const t=Ik(gt);(await Tr(In(gt,"users",n,"accounts"))).forEach(r=>t.delete(r.ref)),(await Tr(In(gt,"users",n,"transactions"))).forEach(r=>t.delete(r.ref)),(await Tr(In(gt,"users",n,"budgets"))).forEach(r=>t.delete(r.ref)),t.delete(Qt(gt,"users",n)),await t.commit()}async function K_(n,t){const e=In(gt,"users",n,"accounts");return(await q_(e,{name:t.name.trim(),type:t.type,initialBalance:Number(t.initialBalance)||0,bankName:(t.bankName||"").trim(),last4Digits:(t.last4Digits||"").trim(),icon:t.icon||Y_(t.type),createdAt:new Date().toISOString()})).id}function Y_(n){switch(n){case"Cash":return"💵";case"Bank":return"🏦";case"UPI":return"📱";case"Other":return"💳";default:return"💰"}}async function kk(n,t,e){const i=Qt(gt,"users",n,"accounts",t);await hi(i,{name:e.name.trim(),type:e.type,initialBalance:Number(e.initialBalance)||0,bankName:(e.bankName||"").trim(),last4Digits:(e.last4Digits||"").trim(),icon:e.icon||Y_(e.type),updatedAt:new Date().toISOString()})}async function Ck(n,t){await Jd(Qt(gt,"users",n,"accounts",t))}async function Rk(n){const t=In(gt,"users",n,"accounts"),e=Hd(t,Yd("createdAt","asc")),i=await Tr(e),s=[];return i.forEach(r=>{s.push({id:r.id,...r.data()})}),s}function Dk(n,t){const e=In(gt,"users",n,"accounts"),i=Hd(e,Yd("createdAt","asc"));return H_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Account subscription error:",s),t([],s)})}async function X_(n,t=0){(await Rk(n)).length===0&&await K_(n,{name:"Cash",type:"Cash",initialBalance:Number(t)||0,icon:"💵"})}async function Q_(n,t){const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;if(t.date!==i)throw new Error("⚠️ Invalid transaction date. New transactions can only be created for today.");const s=In(gt,"users",n,"transactions"),r={type:t.type,amount:Number(t.amount),date:t.date,reason:t.reason.trim(),category:t.category||(t.type==="TRANSFER"?"Transfer":"Other"),notes:(t.notes||"").trim(),createdAt:new Date().toISOString()};return t.type==="INCOME"?r.destinationAccountId=t.destinationAccountId:t.type==="EXPENSE"?r.sourceAccountId=t.sourceAccountId:t.type==="TRANSFER"&&(r.sourceAccountId=t.sourceAccountId,r.destinationAccountId=t.destinationAccountId),(await q_(s,r)).id}async function J_(n,t,e){const i=Qt(gt,"users",n,"transactions",t),s={amount:Number(e.amount),date:e.date,reason:e.reason.trim(),category:e.category||(e.type==="TRANSFER"?"Transfer":"Other"),notes:(e.notes||"").trim(),updatedAt:new Date().toISOString()};e.sourceAccountId!==void 0&&(s.sourceAccountId=e.sourceAccountId),e.destinationAccountId!==void 0&&(s.destinationAccountId=e.destinationAccountId),await hi(i,s)}async function Mk(n,t){await Jd(Qt(gt,"users",n,"transactions",t))}function Ok(n,t){const e=In(gt,"users",n,"transactions"),i=Hd(e,Yd("createdAt","desc"));return H_(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Transaction subscription error:",s),t([],s)})}async function Z_(n,t){const e=t.category||"monthly";await j_(Qt(gt,"users",n,"budgets",e),{category:t.category||"monthly",amount:Number(t.amount),month:t.month,updatedAt:new Date().toISOString()})}async function Nk(n){const t=In(gt,"users",n,"budgets"),e=await Tr(t),i=[];return e.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function Lk(n,t){await Jd(Qt(gt,"users",n,"budgets",t))}async function Vk(n,t,e){const s=(await Ly(On,t,e)).user;return await ed(s,{displayName:n}),await Sk(s.uid,{name:n,email:t,createdAt:new Date().toISOString()}),s}async function Fk(n,t){return(await Vy(On,n,t)).user}async function tb(){await qy(On)}async function Bk(n){await Oy(On,n)}function Uk(n){return jy(On,n)}async function $k(n){const t=On.currentUser;if(!t)throw new Error("No user signed in");await ed(t,{displayName:n})}async function zk(n,t){const e=On.currentUser;if(!e)throw new Error("No user signed in");const i=tn.credential(e.email,n);await fc(e,i),await Fy(e,t)}async function jk(n){const t=On.currentUser;if(!t)throw new Error("No user signed in");const e=tn.credential(t.email,n);await fc(t,e),await Pk(t.uid),await Hy(t)}function Dl(n){const t=n.code||"";return{"auth/email-already-in-use":"This email is already registered. Try logging in instead.","auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled. Contact support.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password. Please try again.","auth/invalid-credential":"Invalid email or password. Please try again.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/weak-password":"Password should be at least 6 characters.","auth/network-request-failed":"Network error. Check your internet connection.","auth/requires-recent-login":"Please logout and login again before this action.","auth/operation-not-allowed":"Email/password sign-in is not enabled. Enable it in Firebase Console."}[t]||"Something went wrong. Please try again."}function eb(n,t,e){const i=t.filter(l=>l.type==="EXPENSE"&&l.date&&l.date.startsWith(e)),s=i.reduce((l,d)=>l+d.amount,0),r=n.find(l=>l.category==="monthly"),o=r?{budget:r.amount,spent:s,remaining:r.amount-s,percentage:r.amount>0?Math.min(s/r.amount*100,100):0,exceeded:s>r.amount}:null,c=n.filter(l=>l.category!=="monthly").map(l=>{const d=i.filter(h=>h.category===l.category).reduce((h,f)=>h+f.amount,0);return{category:l.category,budget:l.amount,spent:d,remaining:l.amount-d,percentage:l.amount>0?Math.min(d/l.amount*100,100):0,exceeded:d>l.amount}});return{monthlyProgress:o,categoryProgress:c,totalSpent:s}}function qk(n,t,e){const i=[],{monthlyProgress:s,categoryProgress:r}=eb(n,t,e);return s&&(s.exceeded?i.push({type:"danger",icon:"🚨",title:"Budget Exceeded",message:`You exceeded your monthly budget by ₹${Math.abs(s.remaining).toLocaleString("en-IN")}.`}):s.percentage>=80&&i.push({type:"warning",icon:"⚠️",title:"Budget Alert",message:`You have used ${s.percentage.toFixed(0)}% of your monthly budget.`})),r.forEach(o=>{o.exceeded&&i.push({type:"danger",icon:"🚨",title:"Category Budget Exceeded",message:`You exceeded your ${o.category} budget by ₹${Math.abs(o.remaining).toLocaleString("en-IN")}.`})}),i}async function Hk(n,t,e){await Z_(n,{category:"monthly",amount:Number(t),month:e})}async function Wk(n,t,e,i){await Z_(n,{category:t,amount:Number(e),month:i})}async function th(n){return await Nk(n)}async function Gk(n,t){await Lk(n,t)}let Pe=null,Tn=!1;function Kk(){Yk(),Xk(),Qk(),Zk()}function Yk(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})})}function Xk(){window.matchMedia("(display-mode: standalone)").matches&&(Tn=!0),window.navigator.standalone===!0&&(Tn=!0),window.addEventListener("appinstalled",()=>{Tn=!0,Pe=null,wu()})}function Qk(){window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Pe=n,!localStorage.getItem("mc_install_dismissed")&&!Tn&&setTimeout(()=>Jk(),3e3)})}function Jk(){if(Tn||!Pe)return;const n=document.getElementById("pwa-install-banner");n&&(n.innerHTML=`
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
  `,n.classList.add("show"),document.getElementById("pwa-install-accept").onclick=async()=>{Pe&&(Pe.prompt(),(await Pe.userChoice).outcome==="accepted"&&(Tn=!0),Pe=null),wu()},document.getElementById("pwa-install-dismiss").onclick=()=>{localStorage.setItem("mc_install_dismissed","true"),wu()})}function wu(){const n=document.getElementById("pwa-install-banner");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function Zk(){const n=()=>{const t=document.getElementById("offline-banner");t&&(navigator.onLine?(t.classList.remove("show"),setTimeout(()=>{t.innerHTML=""},300)):(t.innerHTML=`
        <div class="offline-content">
          <span class="offline-icon">📡</span>
          <span class="offline-text">You're offline — Reconnect to save new transactions securely.</span>
        </div>
      `,t.classList.add("show")))};window.addEventListener("online",n),window.addEventListener("offline",n),setTimeout(n,1e3)}function nb(){return navigator.onLine}function tC(){return Tn}function eC(){return!!Pe&&!Tn}async function nC(){if(!Pe)return!1;Pe.prompt();const n=await Pe.userChoice;return n.outcome==="accepted"&&(Tn=!0),Pe=null,n.outcome==="accepted"}async function ib(n){const e=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function iC(n,t){await hi(Qt(gt,"users",n),{pinHash:t,pinEnabled:!0,pinSetupPromptShown:!0})}async function Eu(n){const t=await z_(Qt(gt,"users",n));if(t.exists()){const e=t.data();return{pinHash:e.pinHash||null,pinEnabled:e.pinEnabled||!1,pinSetupPromptShown:e.pinSetupPromptShown||!1,autoLockTimeout:e.autoLockTimeout!==void 0?e.autoLockTimeout:5}}return{pinHash:null,pinEnabled:!1,pinSetupPromptShown:!1,autoLockTimeout:5}}async function sC(n,t){return await ib(n)===t}async function sb(n){await hi(Qt(gt,"users",n),{pinHash:null,pinEnabled:!1})}async function rC(n,t){await hi(Qt(gt,"users",n),{autoLockTimeout:t})}async function oC(n){await hi(Qt(gt,"users",n),{pinSetupPromptShown:!0})}const aC="modulepreload",cC=function(n){return"/"+n},cg={},lg=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let o=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(e.map(l=>{if(l=cC(l),l in cg)return;cg[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":aC,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};let lC=0;function Ho(n,t="info",e=4e3){const i=document.getElementById("toast-container");if(!i)return;const s=`toast-${++lC}`,r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"Success",error:"Error",warning:"Warning",info:"Info"},a=document.createElement("div");a.id=s,a.className=`toast toast-${t}`,a.innerHTML=`
    <div class="toast-icon">${r[t]||r.info}</div>
    <div class="toast-content">
      <div class="toast-title">${o[t]||o.info}</div>
      <div class="toast-message">${n}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${e}ms linear;"></div>
  `,i.appendChild(a),requestAnimationFrame(()=>{const d=a.querySelector(".toast-progress");d&&(d.style.width="0%")});const c=setTimeout(()=>{ug(a)},e);a.querySelector(".toast-close").addEventListener("click",()=>{clearTimeout(c)});const l=i.querySelectorAll(".toast");l.length>4&&ug(l[0])}function ug(n){!n||!n.parentNode||(n.classList.add("removing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}const H={success:(n,t)=>Ho(n,"success",t),error:(n,t)=>Ho(n,"error",t),warning:(n,t)=>Ho(n,"warning",t),info:(n,t)=>Ho(n,"info",t)};let F={mode:"lock",pin:"",confirmPin:"",step:"enter",pinLength:4,failedAttempts:0,isProcessing:!1,uid:null,storedHash:null,onUnlock:null,onSetupComplete:null};function uC(n,t){F.mode="setup-prompt",F.uid=n,F.onSetupComplete=t,je()}function dg(n,t){F.mode="create",F.uid=n,F.pin="",F.confirmPin="",F.step="enter",F.pinLength=4,F.onSetupComplete=t,je()}function rb(n,t,e){F.mode="lock",F.uid=n,F.storedHash=t,F.pin="",F.failedAttempts=0,F.isProcessing=!1,F.onUnlock=e,je()}function fo(){const n=document.getElementById("pin-lock-root");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function je(){const n=document.getElementById("pin-lock-root");if(!n)return;let t="";switch(F.mode){case"setup-prompt":t=dC();break;case"create":t=hC();break;case"lock":t=fC();break;case"forgot":t=pC();break}n.innerHTML=`<div class="pin-overlay">${t}</div>`,n.classList.add("show"),gC()}function dC(){return`
    <div class="pin-screen pin-setup-prompt animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">🔐 Secure Your Money</div>
      <p class="pin-subtitle">Protect your financial information with a PIN.</p>
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
  `}function hC(){const n=F.step==="confirm",t=F.pinLength,e=n?F.confirmPin:F.pin;return`
    <div class="pin-screen pin-create-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">${n?"Confirm Your PIN":"Create Your PIN"}</div>
      <p class="pin-subtitle">${n?"Enter your PIN again to confirm.":"Choose a secure PIN to protect your data."}</p>

      ${n?"":`
        <div class="pin-length-selector">
          <button class="pin-length-btn ${t===4?"active":""}" data-len="4">4 Digits</button>
          <button class="pin-length-btn ${t===6?"active":""}" data-len="6">6 Digits</button>
        </div>
      `}

      <div class="pin-dots" id="pin-dots">
        ${eh(e,t)}
      </div>

      <div class="pin-error" id="pin-create-error"></div>

      ${ob()}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-create-back">
          ← Back
        </button>
      </div>
    </div>
  `}function fC(){return F.storedHash&&F.storedHash.length>0,`
    <div class="pin-screen pin-lock-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Money Control</div>
      <p class="pin-subtitle">Welcome Back 👋</p>
      <p class="pin-description">Enter your PIN to unlock</p>

      <div class="pin-dots" id="pin-dots">
        ${eh(F.pin,6)}
      </div>

      <div class="pin-error" id="pin-lock-error"></div>

      ${ob()}

      <button class="pin-btn pin-btn-primary pin-unlock-btn" id="pin-unlock-btn">
        🔓 Unlock
      </button>

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-btn">
          Forgot PIN?
        </button>
      </div>
    </div>
  `}function pC(){return`
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
  `}function eh(n,t){let e="";for(let i=0;i<t;i++){const s=i<n.length;e+=`<span class="pin-dot ${s?"filled":""}">●</span>`}return e}function ob(){return`
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
  `}function Ri(){const n=document.getElementById("pin-dots");if(!n)return;let t="",e=4;F.mode==="create"?(t=F.step==="confirm"?F.confirmPin:F.pin,e=F.pinLength):F.mode==="lock"&&(t=F.pin,e=6),n.innerHTML=eh(t,e)}function gC(){const n=document.getElementById("pin-setup-set");n&&(n.onclick=()=>{F.mode="create",F.pin="",F.confirmPin="",F.step="enter",je()});const t=document.getElementById("pin-setup-skip");t&&(t.onclick=async()=>{F.uid&&await oC(F.uid),fo(),F.onSetupComplete&&F.onSetupComplete()}),document.querySelectorAll(".pin-length-btn").forEach(a=>{a.onclick=()=>{const c=parseInt(a.dataset.len);F.pinLength=c,F.pin="",F.confirmPin="",F.step="enter",je()}}),document.querySelectorAll(".pin-key[data-key]").forEach(a=>{a.onclick=()=>{if(F.isProcessing)return;const c=a.dataset.key;a.classList.add("pressed"),setTimeout(()=>a.classList.remove("pressed"),150),c==="delete"?yC():mC(c)}});const e=document.getElementById("pin-create-back");e&&(e.onclick=()=>{F.step==="confirm"?(F.step="enter",F.confirmPin="",je()):(F.mode="setup-prompt",je())});const i=document.getElementById("pin-unlock-btn");i&&(i.onclick=()=>_C());const s=document.getElementById("pin-forgot-btn");s&&(s.onclick=()=>{F.mode="forgot",je()});const r=document.getElementById("pin-forgot-verify");r&&(r.onclick=()=>bC());const o=document.getElementById("pin-forgot-back");o&&(o.onclick=()=>{F.mode="lock",F.pin="",je()})}function mC(n){F.mode==="create"?F.step==="confirm"?F.confirmPin.length<F.pinLength&&(F.confirmPin+=n,Ri(),F.confirmPin.length===F.pinLength&&vC()):F.pin.length<F.pinLength&&(F.pin+=n,Ri(),F.pin.length===F.pinLength&&setTimeout(()=>{F.step="confirm",je()},300)):F.mode==="lock"&&F.pin.length<6&&(F.pin+=n,Ri())}function yC(){F.mode==="create"?F.step==="confirm"?F.confirmPin=F.confirmPin.slice(0,-1):F.pin=F.pin.slice(0,-1):F.mode==="lock"&&(F.pin=F.pin.slice(0,-1)),Ri()}async function vC(){const n=document.getElementById("pin-create-error");if(F.pin!==F.confirmPin){n&&(n.textContent="PINs do not match. Please try again."),F.confirmPin="",Ri();const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}F.isProcessing=!0;try{const t=await ib(F.pin);await iC(F.uid,t),H.success("🔐 PIN created successfully!"),fo(),F.pin="",F.confirmPin="",F.isProcessing=!1,F.onSetupComplete&&F.onSetupComplete()}catch{n&&(n.textContent="Failed to save PIN. Please try again."),F.isProcessing=!1}}async function _C(){if(F.isProcessing||!F.pin)return;const n=document.getElementById("pin-lock-error");if(F.isProcessing=!0,F.failedAttempts>=3){const t=Math.min(Math.pow(2,F.failedAttempts-2)*1e3,3e4),e=document.getElementById("pin-unlock-btn");e&&(e.disabled=!0,e.textContent=`Wait ${Math.ceil(t/1e3)}s...`),await new Promise(i=>setTimeout(i,t)),e&&(e.disabled=!1,e.textContent="🔓 Unlock")}try{if(await sC(F.pin,F.storedHash))H.success("🔓 Unlocked!"),fo(),F.pin="",F.failedAttempts=0,F.isProcessing=!1,F.onUnlock&&F.onUnlock();else{F.failedAttempts++,F.pin="",Ri(),n&&(n.textContent="Incorrect PIN. Try again.");const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500)),F.isProcessing=!1}}catch{n&&(n.textContent="Verification failed. Try again."),F.pin="",Ri(),F.isProcessing=!1}}async function bC(){const n=document.getElementById("pin-forgot-password"),t=document.getElementById("pin-forgot-error");if(!n)return;const e=n.value;if(!e){t&&(t.textContent="Please enter your password.");return}const i=document.getElementById("pin-forgot-verify");i&&(i.disabled=!0,i.innerHTML='<span class="spinner"></span> Verifying...');try{const{EmailAuthProvider:s,reauthenticateWithCredential:r}=await lg(async()=>{const{EmailAuthProvider:l,reauthenticateWithCredential:d}=await Promise.resolve().then(()=>gS);return{EmailAuthProvider:l,reauthenticateWithCredential:d}},void 0),{auth:o}=await lg(async()=>{const{auth:l}=await Promise.resolve().then(()=>Ak);return{auth:l}},void 0),a=o.currentUser;if(!a||!a.email){t&&(t.textContent="No authenticated user found."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN");return}const c=s.credential(a.email,e);await r(a,c),await sb(F.uid),H.success("🔐 PIN removed. You can set a new PIN in Settings."),fo(),F.onUnlock&&F.onUnlock()}catch{t&&(t.textContent="Incorrect password. Please try again."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN")}}function po(n){if(n===""||n===null||n===void 0)return"Please enter an amount.";const t=Number(n);return isNaN(t)?"Please enter a valid number.":t<=0?"Amount must be greater than ₹0.":t>99999999?"Amount is too large.":null}function nh(n){return!n||!n.trim()?"Please enter your email.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())?null:"Please enter a valid email address."}function ih(n){return n?n.length<6?"Password must be at least 6 characters.":null:"Please enter a password."}function ab(n,t){return t?n!==t?"Passwords do not match.":null:"Please confirm your password."}function cb(n,t){return!n||!String(n).trim()?`Please enter ${t}.`:null}function Vc(n){return!n||!n.trim()?"Please enter your name.":n.trim().length<2?"Name must be at least 2 characters.":n.trim().length>50?"Name must be less than 50 characters.":null}function wC(n){if(!n)return"Please select a date.";const t=new Date(n);return isNaN(t.getTime())?"Please enter a valid date.":null}function sh(n){if(!n)return"Date is required.";const t=new Date(n);if(isNaN(t.getTime()))return"Please enter a valid date.";const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n!==i?"⚠️ Invalid transaction date. New transactions can only be created for today.":null}function EC(n){return n?null:"Please select a category."}function lb(n,t=!0){const e={},i=po(n.amount);if(i&&(e.amount=i),t){const o=sh(n.date);o&&(e.date=o)}else{const o=wC(n.date);o&&(e.date=o)}const s=cb(n.reason,"a reason");s&&(e.reason=s);const r=EC(n.category);return r&&(e.category=r),{isValid:Object.keys(e).length===0,errors:e}}function IC(n,t){const e={},i=nh(n);i&&(e.email=i);const s=ih(t);return s&&(e.password=s),{isValid:Object.keys(e).length===0,errors:e}}function TC(n,t,e,i){const s={},r=Vc(n);r&&(s.name=r);const o=nh(t);o&&(s.email=o);const a=ih(e);a&&(s.password=a);const c=ab(e,i);return c&&(s.confirmPassword=c),{isValid:Object.keys(s).length===0,errors:s}}let ya="login";function AC(){return`
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 72px; height: 72px; border-radius: 18px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.3);" />
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${ub()}
        </div>
      </div>
    </div>
  `}function ub(){if(ya==="login")return`
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
    `}function db(n){const t=document.getElementById("auth-card-body");if(!t)return;const e=f=>{ya=f,t.innerHTML=ub(),db(n)},i=document.getElementById("link-register");i&&(i.onclick=()=>e("register"));const s=document.getElementById("link-login");s&&(s.onclick=()=>e("login"));const r=document.getElementById("link-login-back");r&&(r.onclick=()=>e("login"));const o=document.getElementById("link-forgot");o&&(o.onclick=()=>e("forgot"));const a=document.getElementById("toggle-login-password");a&&(a.onclick=()=>{const f=document.getElementById("login-password");f&&(f.type=f.type==="password"?"text":"password")});const c=document.getElementById("toggle-reg-password");c&&(c.onclick=()=>{const f=document.getElementById("reg-password");f&&(f.type=f.type==="password"?"text":"password")});const l=document.getElementById("login-form");l&&(l.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("login-email").value,v=document.getElementById("login-password").value;document.getElementById("login-email-error").textContent="",document.getElementById("login-password-error").textContent="";const _=IC(g,v);if(!_.isValid){_.errors.email&&(document.getElementById("login-email-error").textContent=_.errors.email),_.errors.password&&(document.getElementById("login-password-error").textContent=_.errors.password);return}const y=document.getElementById("btn-login-submit");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Logging in...';try{await Fk(g,v),H.success("LoggedIn successfully!"),n&&n()}catch(I){H.error(Dl(I)),y.disabled=!1,y.innerHTML='<span class="btn-text">Log In</span>'}});const d=document.getElementById("register-form");d&&(d.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("reg-name").value,v=document.getElementById("reg-email").value,_=document.getElementById("reg-password").value,y=document.getElementById("reg-confirm").value;document.getElementById("reg-name-error").textContent="",document.getElementById("reg-email-error").textContent="",document.getElementById("reg-password-error").textContent="",document.getElementById("reg-confirm-error").textContent="";const I=TC(g,v,_,y);if(!I.isValid){I.errors.name&&(document.getElementById("reg-name-error").textContent=I.errors.name),I.errors.email&&(document.getElementById("reg-email-error").textContent=I.errors.email),I.errors.password&&(document.getElementById("reg-password-error").textContent=I.errors.password),I.errors.confirmPassword&&(document.getElementById("reg-confirm-error").textContent=I.errors.confirmPassword);return}const k=document.getElementById("btn-register-submit");k.disabled=!0,k.innerHTML='<span class="spinner"></span> Creating Account...';try{await Vk(g,v,_),H.success("Account created successfully!"),n&&n()}catch(R){H.error(Dl(R)),k.disabled=!1,k.innerHTML='<span class="btn-text">Create Account</span>'}});const h=document.getElementById("forgot-form");h&&(h.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("forgot-email").value;document.getElementById("forgot-email-error").textContent="";const v=nh(g);if(v){document.getElementById("forgot-email-error").textContent=v;return}const _=document.getElementById("btn-forgot-submit");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Sending...';try{await Bk(g),H.success("Password reset email sent! Check your inbox."),e("login")}catch(y){H.error(Dl(y)),_.disabled=!1,_.innerHTML='<span class="btn-text">Send Reset Link</span>'}})}function SC(){return`
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
  `}function xC(n,t){const e=document.getElementById("onboarding-form");e&&(e.onsubmit=async i=>{i.preventDefault();const s=document.getElementById("initial-balance"),r=document.getElementById("onboarding-error");r.textContent="";const o=s.value,a=po(o);if(a){r.textContent=a;return}const c=document.getElementById("btn-start-tracking");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Saving...';try{await G_(n,Number(o)),H.success("Initial balance saved!"),t&&t()}catch(l){console.error("Error setting initial balance:",l),H.error("Unable to save initial balance. Please try again."),c.disabled=!1,c.innerHTML="Start Money Tracking"}})}function W(n){return n==null||isNaN(n)?"₹0":`₹${Number(n).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:0})}`}function go(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function PC(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):""}function kC(n){return n?new Date(n).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit",hour12:!0}):""}function CC(){const n=new Date().getHours();return n<12?"Good Morning":n<17?"Good Afternoon":"Good Evening"}function Ns(){const n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${i}`}function hb(){return`📅 Today — ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`}function RC(){return new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function fb(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function pb(n){const t=new Date(n+"T00:00:00"),e=t.getDay(),i=new Date(t);i.setDate(t.getDate()-e);const s=new Date(i);return s.setDate(i.getDate()+6),{start:i.toISOString().split("T")[0],end:s.toISOString().split("T")[0]}}function Wo(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}const mo=[{value:"Food",label:"🍔 Food",emoji:"🍔"},{value:"Travel",label:"🚌 Travel",emoji:"🚌"},{value:"Recharge",label:"📱 Recharge",emoji:"📱"},{value:"Shopping",label:"🛍️ Shopping",emoji:"🛍️"},{value:"Entertainment",label:"🎮 Entertainment",emoji:"🎮"},{value:"Education",label:"📚 Education",emoji:"📚"},{value:"Software",label:"💻 Software",emoji:"💻"},{value:"Personal",label:"🏠 Personal",emoji:"🏠"},{value:"Other",label:"💊 Other",emoji:"💊"}],rh=[{value:"Pocket Money",label:"Pocket Money"},{value:"Salary",label:"Salary"},{value:"Gift",label:"Gift"},{value:"Freelance",label:"Freelance"},{value:"Refund",label:"Refund"},{value:"Other",label:"Other"}];function oh(n){const t=mo.find(e=>e.value===n);return t?t.emoji:"💰"}const DC=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];function gb(n,t){const e=Number(n.initialBalance)||0,i=n.id;let s=e;return t.forEach(r=>{const o=Number(r.amount)||0;r.type==="INCOME"?r.destinationAccountId===i&&(s+=o):r.type==="EXPENSE"?r.sourceAccountId===i&&(s-=o):r.type==="TRANSFER"&&(r.destinationAccountId===i&&(s+=o),r.sourceAccountId===i&&(s-=o))}),s}function Cn(n,t){const e={};let i=0;return n.forEach(s=>{const r=gb(s,t);e[s.id]=r,i+=r}),{balances:e,totalMoney:i}}function MC(n,t){const e=n.id,i=t.filter(l=>l.sourceAccountId===e||l.destinationAccountId===e);let s=0,r=0,o=0,a=0;i.forEach(l=>{const d=Number(l.amount)||0;l.type==="INCOME"&&l.destinationAccountId===e?s+=d:l.type==="EXPENSE"&&l.sourceAccountId===e?r+=d:l.type==="TRANSFER"&&(l.sourceAccountId===e&&(o+=d),l.destinationAccountId===e&&(a+=d))});const c=gb(n,t);return{account:n,balance:c,totalAdded:s,totalSpent:r,totalTransferredOut:o,totalTransferredIn:a,transactions:i}}function OC(n){return n.filter(t=>t.type==="INCOME").reduce((t,e)=>t+Number(e.amount),0)}function NC(n){return n.filter(t=>t.type==="EXPENSE").reduce((t,e)=>t+Number(e.amount),0)}function LC(n){return n.filter(t=>t.type==="TRANSFER").reduce((t,e)=>t+Number(e.amount),0)}function VC(n,t){const{balances:e,totalMoney:i}=Cn(n,t),s=OC(t),r=NC(t),o=LC(t);return{balances:e,totalMoney:i,totalIncome:s,totalExpenses:r,totalTransfers:o}}function ah(n,t){const e=n.filter(o=>o.date===t),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function FC(n,t){const{start:e,end:i}=pb(t),s=n.filter(c=>c.date>=e&&c.date<=i),r=s.filter(c=>c.type==="INCOME").reduce((c,l)=>c+l.amount,0),o=s.filter(c=>c.type==="EXPENSE").reduce((c,l)=>c+l.amount,0),a=s.filter(c=>c.type==="TRANSFER").reduce((c,l)=>c+l.amount,0);return{added:r,spent:o,transferred:a,net:r-o,count:s.length,transactions:s,startDate:e,endDate:i}}function mb(n,t){const e=n.filter(o=>o.date&&o.date.startsWith(t)),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function yb(n,t){const e=t?n.filter(o=>o.type==="EXPENSE"&&o.date&&o.date.startsWith(t)):n.filter(o=>o.type==="EXPENSE"),i={};let s=0;return e.forEach(o=>{const a=o.category||"Other";i[a]=(i[a]||0)+o.amount,s+=o.amount}),{categories:Object.entries(i).map(([o,a])=>({category:o,amount:a,percentage:s>0?a/s*100:0,emoji:oh(o)})).sort((o,a)=>a.amount-o.amount),totalExpenses:s}}function vb(n,t){const{balances:e,totalMoney:i}=Cn(n,t);return n.map(s=>{const r=e[s.id]||0,o=i>0?Math.max(0,r)/i*100:0;return{account:s,balance:r,percentage:o}}).sort((s,r)=>r.balance-s.balance)}function _b(n,t){const{added:e,spent:i,transferred:s,net:r,count:o,transactions:a}=mb(n,t),{categories:c}=yb(n,t),l=c.length>0?c[0]:null,d=a.filter(f=>f.type==="EXPENSE"),h=d.length>0?d.reduce((f,g)=>g.amount>f.amount?g:f,d[0]):null;return{income:e,expenses:i,transfers:s,savings:r,transactionCount:o,categories:c,highestCategory:l,highestExpense:h}}function BC(n,t){const e=[],i=Ns(),{balances:s}=Cn(n,t),r=ah(t,i);if(r.spent>0&&e.push({icon:"📅",text:`You spent <strong>${W(r.spent)}</strong> today.`}),n.length>0){const c=n.reduce((d,h)=>(s[h.id]||0)>(s[d.id]||0)?h:d,n[0]),l=s[c.id]||0;l>0&&e.push({icon:c.icon||"🏦",text:`Your <strong>${c.name}</strong> account has your highest balance (${W(l)}).`})}const o=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{categories:a}=yb(t,o);if(a.length>0){const c=a[0];e.push({icon:c.emoji,text:`<strong>${c.category}</strong> accounts for <strong>${c.percentage.toFixed(0)}%</strong> of your expenses this month.`})}return n.forEach(c=>{const l=s[c.id]||0;l>=0&&l<500&&e.push({icon:"⚠️",text:`Your <strong>${c.name}</strong> balance is low (${W(l)}).`})}),e.slice(0,5)}function UC(n,t={}){const{showActions:e=!1,showDate:i=!0,showNotes:s=!1,accounts:r=[]}=t,o=n.type==="INCOME",a=n.type==="EXPENSE",c=n.type==="TRANSFER",l=o?"income":a?"expense":"balance",d=v=>{const _=r.find(y=>y.id===v);return _?_.name:""};let h="💰",f="",g="";if(o){h="💰",g="+";const v=d(n.destinationAccountId);f=v?`→ ${v}`:""}else if(a){h=oh(n.category),g="-";const v=d(n.sourceAccountId);f=v?`← ${v}`:""}else if(c){h="🔄",g="↔ ";const v=d(n.sourceAccountId)||"Source",_=d(n.destinationAccountId)||"Dest";f=`${v} → ${_}`}return`
    <div class="transaction-item animate-fade-in" data-tx-id="${n.id}">
      <div class="transaction-icon ${l}">
        ${h}
      </div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${Wo(n.reason)||(c?"Account Transfer":"No reason")}
        </div>
        <div class="transaction-meta">
          <span class="transaction-category" style="font-weight: 600; color: ${c?"var(--primary)":"var(--text-secondary)"};">
            ${c?"🔄 Transfer":Wo(n.category)||""}
          </span>
          ${f?`
            <span class="transaction-dot"></span>
            <span style="font-weight: 500; color: var(--text-primary);">${Wo(f)}</span>
          `:""}
          ${i?`
            <span class="transaction-dot"></span>
            <span>${go(n.date)}</span>
          `:""}
          ${n.createdAt?`
            <span class="transaction-dot"></span>
            <span>${kC(n.createdAt)}</span>
          `:""}
        </div>
        ${s&&n.notes?`
          <div class="transaction-meta" style="margin-top: 4px; font-style: italic;">
            ${Wo(n.notes)}
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
  `}function ls(n,t={}){return!n||n.length===0?"":n.map(e=>UC(e,t)).join("")}function bb(){return`
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">No transactions yet</h3>
      <p class="empty-state-text">Start tracking your money by adding your first transaction.</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `}function $C(){return`
    <div class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <h3 class="empty-state-title">No results found</h3>
      <p class="empty-state-text">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  `}function Ml(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📅</span>
      <h3 class="empty-state-title">No transactions on this date</h3>
      <p class="empty-state-text">There are no transactions recorded for the selected date.</p>
    </div>
  `}function zC(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `}let va=null;function we(n){Ut();const t=document.getElementById("modal-root");if(!t)return;const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`
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
  `,t.appendChild(e),document.body.classList.add("no-scroll"),va={element:e,onClose:n.onClose};const i=e.querySelector("#modal-close-btn");i&&i.addEventListener("click",Ut),e.addEventListener("click",r=>{r.target===e&&Ut()});const s=r=>{r.key==="Escape"&&(Ut(),document.removeEventListener("keydown",s))};return document.addEventListener("keydown",s),n.onOpen&&requestAnimationFrame(()=>n.onOpen(e)),e}function Ut(){if(!va)return;const{element:n,onClose:t}=va;n.classList.add("closing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),document.body.classList.remove("no-scroll"),t&&t()},200),va=null}function _s(n){return new Promise(t=>{const e=`
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
    `;we({content:e,hideHeader:!0,onOpen:i=>{i.querySelector("#confirm-cancel").addEventListener("click",()=>{Ut(),t(!1)}),i.querySelector("#confirm-ok").addEventListener("click",()=>{Ut(),t(!0)})},onClose:()=>t(!1)})})}let Mt={user:null,profile:null,accounts:[],transactions:[],budgets:[]};function hg(n){Mt={...Mt,...n};const{profile:t,accounts:e,transactions:i}=Mt,s=t!=null&&t.name?t.name.split(" ")[0]:"User",{balances:r,totalMoney:o,totalIncome:a,totalExpenses:c,totalTransfers:l}=VC(e,i),d=Ns(),h=ah(i,d),f=i.slice(0,5),g=BC(e,i),v=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,_=qk(Mt.budgets,i,v);return`
    <div class="page animate-fade-in">
      <!-- Greeting -->
      <div class="greeting">
        <h1 class="greeting-text">${CC()}, ${s} 👋</h1>
        <p class="greeting-date">${RC()}</p>
      </div>

      <!-- Budget Alert Banner if any -->
      ${_.length>0?`
        <div style="margin-bottom: var(--space-6);">
          ${_.map(y=>`
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
        <div class="balance-amount">${W(o)}</div>
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
            ${e.map(y=>{const I=r[y.id]||0;return`
                <div style="background: var(--bg-tertiary); padding: 8px 14px; border-radius: var(--radius-lg); flex-shrink: 0; min-width: 120px;">
                  <div style="font-size: var(--fs-xs); color: var(--text-secondary);">${y.icon||"🏦"} ${y.name}</div>
                  <div style="font-weight: var(--fw-bold); font-size: var(--fs-base); margin-top: 2px;">${W(I)}</div>
                </div>
              `}).join("")}
          </div>
        </div>
      `:""}

      <!-- Today's Money Activity -->
      <div class="today-activity-card">
        <div class="today-activity-header">
          <div class="today-activity-title">Today's Money Activity</div>
          <div class="today-activity-date">${go(d)}</div>
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
          ${f.length>0?ls(f,{showActions:!0,showDate:!0,accounts:Mt.accounts}):bb()}
        </div>
      </div>

      <!-- Smart Insights -->
      ${g.length>0?`
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">Money Control Insights 💡</h2>
          </div>
          <div class="insights-card">
            ${g.map(y=>`
              <div class="insight-item">
                <span class="insight-icon">${y.icon}</span>
                <div class="insight-text">${y.text}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}
    </div>
  `}function fg(n,t){document.querySelectorAll(".quick-nav-btn[data-page]").forEach(c=>{c.onclick=()=>n(c.dataset.page)});const e=document.getElementById("link-manage-accounts");e&&(e.onclick=()=>n("accounts"));const i=document.getElementById("link-view-all-tx");i&&(i.onclick=()=>n("transactions"));const s=document.getElementById("btn-quick-add-money");s&&(s.onclick=()=>Di("INCOME",t));const r=document.getElementById("btn-quick-add-expense");r&&(r.onclick=()=>Di("EXPENSE",t));const o=document.getElementById("btn-quick-transfer");o&&(o.onclick=()=>ch(t));const a=document.getElementById("empty-add-money-btn");a&&(a.onclick=()=>Di("INCOME",t)),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(c=>{c.onclick=l=>{l.stopPropagation();const d=c.dataset.action,h=c.dataset.txId,f=Mt.transactions.find(g=>g.id===h);f&&(d==="edit"?f.type==="TRANSFER"?uh(f,t):lh(f,t):d==="delete"&&dh(f,t))}})}function Di(n="INCOME",t){const e=n==="INCOME",i=e?rh:mo,s=Mt.accounts,r=Ns(),o=hb();if(!nb()){H.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const a=`
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
  `;we({title:e?"💰 Add Money":"💸 Add Expense",content:a,onOpen:c=>{const l=c.querySelector("#tx-modal-form"),d=c.querySelector("#tx-amount"),h=c.querySelector("#tx-account"),f=c.querySelector("#tx-insufficient-warning"),g=c.querySelector("#tx-insufficient-text"),v=()=>{var O,L;if(e)return;const _=h.value,y=Number(d.value)||0;if(!_||y<=0){f.style.display="none";return}const I=s.find(T=>T.id===_),{balances:k}=Cn(s,Mt.transactions),R=k[_]||0,D=(L=(O=Mt.profile)==null?void 0:O.settings)==null?void 0:L.allowNegativeBalance;y>R&&!D?(g.textContent=`⚠️ Insufficient Balance! Available in ${(I==null?void 0:I.name)||"account"}: ${W(R)}`,f.style.display="flex"):f.style.display="none"};d.oninput=v,h.onchange=v,l.onsubmit=async _=>{var S,x;_.preventDefault();const y=d.value,I=h.value,k=c.querySelector("#tx-date").value,R=c.querySelector("#tx-reason").value,D=c.querySelector("#tx-category").value,O=c.querySelector("#tx-notes").value;c.querySelector("#tx-amount-error").textContent="",c.querySelector("#tx-account-error").textContent="",c.querySelector("#tx-reason-error").textContent="",c.querySelector("#tx-category-error").textContent="";const L=sh(k);if(L){H.error(L);return}let T=!0;const b=lb({amount:y,date:k,reason:R,category:D},!0);if(b.isValid||(b.errors.amount&&(c.querySelector("#tx-amount-error").textContent=b.errors.amount),b.errors.reason&&(c.querySelector("#tx-reason-error").textContent=b.errors.reason),b.errors.category&&(c.querySelector("#tx-category-error").textContent=b.errors.category),T=!1),I||(c.querySelector("#tx-account-error").textContent="Please select an account.",T=!1),!T)return;if(!e){const P=s.find(ht=>ht.id===I),{balances:A}=Cn(s,Mt.transactions),ot=A[I]||0,et=(x=(S=Mt.profile)==null?void 0:S.settings)==null?void 0:x.allowNegativeBalance;if(Number(y)>ot&&!et){g.textContent=`⚠️ Insufficient Balance! Available in ${P==null?void 0:P.name}: ${W(ot)}`,f.style.display="flex",H.warning(`⚠️ You only have ${W(ot)} available in ${P==null?void 0:P.name}.`);return}}const E=c.querySelector("#btn-save-tx");E.disabled=!0,E.innerHTML='<span class="spinner"></span> Saving...';try{const P=Mt.user.uid,A={type:n,amount:Number(y),date:k,reason:R,category:D,notes:O};e?A.destinationAccountId=I:A.sourceAccountId=I,await Q_(P,A),Ut();const ot=s.find(et=>et.id===I);H.success(e?`💰 ${W(y)} added to ${(ot==null?void 0:ot.name)||"account"}!`:`💸 ${W(y)} spent from ${(ot==null?void 0:ot.name)||"account"}.`),t&&t()}catch(P){console.error("Error saving transaction:",P),H.error("Unable to save transaction."),E.disabled=!1,E.innerHTML=e?"💰 Add Money":"💸 Save Expense"}}}})}function ch(n){const t=Mt.accounts,e=Ns(),i=hb();if(!nb()){H.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const s=`
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
  `;we({title:"🔄 Transfer Money Between Accounts",content:s,onOpen:r=>{const o=r.querySelector("#transfer-modal-form"),a=r.querySelector("#tr-amount"),c=r.querySelector("#tr-from"),l=r.querySelector("#tr-insufficient-warning"),d=r.querySelector("#tr-insufficient-text"),h=()=>{const f=c.value,g=Number(a.value)||0;if(!f||g<=0){l.style.display="none";return}const{balances:v}=Cn(t,Mt.transactions),_=v[f]||0,y=t.find(I=>I.id===f);g>_?(d.textContent=`⚠️ Insufficient Balance! Available in ${y==null?void 0:y.name}: ${W(_)}`,l.style.display="flex"):l.style.display="none"};a.oninput=h,c.onchange=h,o.onsubmit=async f=>{f.preventDefault();const g=a.value,v=c.value,_=r.querySelector("#tr-to").value,y=r.querySelector("#tr-date").value,I=r.querySelector("#tr-reason").value,k=r.querySelector("#tr-notes").value,R=sh(y);if(R){H.error(R);return}r.querySelector("#tr-amount-error").textContent="",r.querySelector("#tr-from-error").textContent="",r.querySelector("#tr-to-error").textContent="",r.querySelector("#tr-reason-error").textContent="";let D=!0;const O=po(g);O&&(r.querySelector("#tr-amount-error").textContent=O,D=!1),v||(r.querySelector("#tr-from-error").textContent="Select source account.",D=!1),_||(r.querySelector("#tr-to-error").textContent="Select destination account.",D=!1),v&&_&&v===_&&(r.querySelector("#tr-to-error").textContent="From and To accounts cannot be the same!",D=!1);const L=cb(I,"a reason");if(L&&(r.querySelector("#tr-reason-error").textContent=L,D=!1),!D)return;const{balances:T}=Cn(t,Mt.transactions),b=T[v]||0,E=t.find(P=>P.id===v),S=t.find(P=>P.id===_);if(Number(g)>b){d.textContent=`⚠️ Insufficient Balance! Available in ${E==null?void 0:E.name}: ${W(b)}`,l.style.display="flex",H.warning(`⚠️ You only have ${W(b)} available in ${E==null?void 0:E.name}.`);return}const x=r.querySelector("#btn-save-transfer");x.disabled=!0,x.innerHTML='<span class="spinner"></span> Transferring...';try{const P=Mt.user.uid;await Q_(P,{type:"TRANSFER",amount:Number(g),date:y,reason:I,category:"Transfer",sourceAccountId:v,destinationAccountId:_,notes:k}),Ut(),H.success(`🔄 Transferred ${W(g)} from ${E==null?void 0:E.name} to ${S==null?void 0:S.name}!`),n&&n()}catch(P){console.error("Error saving transfer:",P),H.error("Unable to complete transfer."),x.disabled=!1,x.innerHTML="🔄 Transfer Money"}}}})}function lh(n,t){const e=n.type==="INCOME",i=e?rh:mo,s=Mt.accounts,r=`
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
          📅 ${go(n.date)}
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
  `;we({title:"✏️ Edit Transaction",content:r,onOpen:o=>{o.querySelector("#edit-tx-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#edit-tx-amount").value,l=o.querySelector("#edit-tx-account").value,d=o.querySelector("#edit-tx-date").value,h=o.querySelector("#edit-tx-reason").value,f=o.querySelector("#edit-tx-category").value,g=o.querySelector("#edit-tx-notes").value;if(!lb({amount:c,date:d,reason:h,category:f},!1).isValid)return;const _=o.querySelector("#btn-update-tx");_.disabled=!0,_.innerHTML='<span class="spinner"></span> Updating...';try{const y=Mt.user.uid,I={amount:Number(c),date:d,reason:h,category:f,notes:g};e?I.destinationAccountId=l:I.sourceAccountId=l,await J_(y,n.id,I),Ut(),H.success("✅ Transaction updated!"),t&&t()}catch{H.error("Unable to update transaction."),_.disabled=!1,_.innerHTML="✅ Update Transaction"}}}})}function uh(n,t){const e=Mt.accounts,i=`
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
          📅 ${go(n.date)}
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
  `;we({title:"✏️ Edit Transfer",content:i,onOpen:s=>{s.querySelector("#edit-tr-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-tr-amount").value,a=s.querySelector("#edit-tr-from").value,c=s.querySelector("#edit-tr-to").value,l=s.querySelector("#edit-tr-date").value,d=s.querySelector("#edit-tr-reason").value,h=s.querySelector("#edit-tr-notes").value;if(a===c){H.error("From and To accounts cannot be the same!");return}const f=s.querySelector("#btn-update-tr");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Updating...';try{const g=Mt.user.uid;await J_(g,n.id,{amount:Number(o),date:l,reason:d,sourceAccountId:a,destinationAccountId:c,notes:h}),Ut(),H.success("✅ Transfer updated!"),t&&t()}catch{H.error("Unable to update transfer."),f.disabled=!1,f.innerHTML="✅ Update Transfer"}}}})}async function dh(n,t){const e=n.type==="TRANSFER";if(await _s({icon:"🗑️",title:e?"Delete Transfer":"Delete Transaction",message:e?"Are you sure you want to delete this transfer? Both source and destination account balances will be restored.":"Are you sure you want to delete this transaction? Your account balances will automatically adjust.",confirmText:"Delete",danger:!0}))try{const s=Mt.user.uid;await Mk(s,n.id),H.success("🗑️ Transaction deleted!"),t&&t()}catch{H.error("Unable to delete transaction.")}}let Jn={user:null,profile:null,accounts:[],transactions:[]};function jC(n){Jn={...Jn,...n};const{accounts:t,transactions:e}=Jn,{balances:i,totalMoney:s}=Cn(t,e);return`
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
  `}function qC(n){const t=document.getElementById("btn-add-account-modal");t&&(t.onclick=()=>HC(n)),document.querySelectorAll("[data-account-id]").forEach(e=>{e.onclick=()=>{const i=e.dataset.accountId,s=Jn.accounts.find(r=>r.id===i);s&&WC(s,n)}})}function HC(n){we({title:"🏦 Add New Account",content:`
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
  `,onOpen:e=>{e.querySelector("#add-account-form").onsubmit=async i=>{i.preventDefault();const s=e.querySelector("#acc-name").value,r=e.querySelector("#acc-type").value,o=e.querySelector("#acc-initial").value,a=e.querySelector("#acc-last4").value,c=Vc(s),l=po(o);if(c){e.querySelector("#acc-name-error").textContent=c;return}if(l){e.querySelector("#acc-initial-error").textContent=l;return}const d=e.querySelector("#btn-save-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Creating...';try{await K_(Jn.user.uid,{name:s,type:r,initialBalance:Number(o),last4Digits:a}),Ut(),H.success(`🏦 ${s} account created!`),n&&n()}catch{H.error("Unable to create account."),d.disabled=!1,d.innerHTML="Create Account"}}}})}function WC(n,t){const e=MC(n,Jn.transactions),i=`
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
        ${e.transactions.length>0?ls(e.transactions,{showActions:!1,showDate:!0}):'<div style="font-size: var(--fs-sm); color: var(--text-tertiary); text-align: center; padding: 16px;">No transactions for this account.</div>'}
      </div>
    </div>
  `;we({title:"Account Details",content:i,footer:`
    <button class="btn btn-outline btn-sm" id="btn-edit-account">✏️ Edit Account</button>
    <button class="btn btn-danger btn-sm" id="btn-delete-account">🗑️ Delete Account</button>
  `,onOpen:r=>{r.querySelector("#btn-edit-account").onclick=()=>{Ut(),GC(n,t)},r.querySelector("#btn-delete-account").onclick=async()=>{if(Ut(),await _s({icon:"🗑️",title:"Delete Account",message:`Are you sure you want to delete ${n.name}? Transactions assigned to this account will remain in history.`,danger:!0}))try{await Ck(Jn.user.uid,n.id),H.success(`Account ${n.name} deleted.`),t&&t()}catch{H.error("Unable to delete account.")}}}})}function GC(n,t){const e=`
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
  `;we({title:"✏️ Edit Account",content:e,onOpen:i=>{i.querySelector("#edit-account-form").onsubmit=async s=>{s.preventDefault();const r=i.querySelector("#edit-acc-name").value,o=i.querySelector("#edit-acc-type").value,a=i.querySelector("#edit-acc-initial").value,c=i.querySelector("#edit-acc-last4").value,l=Vc(r);if(l){i.querySelector("#edit-acc-name-error").textContent=l;return}const d=i.querySelector("#btn-update-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Updating...';try{await kk(Jn.user.uid,n.id,{name:r,type:o,initialBalance:Number(a),last4Digits:c}),Ut(),H.success("Account updated!"),t&&t()}catch{H.error("Unable to update account."),d.disabled=!1,d.innerHTML="Update Account"}}}})}let Oe={user:null,profile:null,accounts:[],transactions:[]},Z={searchQuery:"",typeFilter:"ALL",accountFilter:"ALL",dateFilter:"ALL",customDate:"",categoryFilter:"ALL"};function wb(n){Oe={...Oe,...n};const t=Ib(),e=[...mo.map(i=>i.value),...rh.map(i=>i.value)];return`
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
          <button class="chip ${Z.typeFilter==="ALL"?"active":""}" data-filter-type="ALL">All (${Oe.transactions.length})</button>
          <button class="chip chip-income ${Z.typeFilter==="INCOME"?"active":""}" data-filter-type="INCOME">🟢 Money Added</button>
          <button class="chip chip-expense ${Z.typeFilter==="EXPENSE"?"active":""}" data-filter-type="EXPENSE">🔴 Expenses</button>
          <button class="chip ${Z.typeFilter==="TRANSFER"?"active":""}" data-filter-type="TRANSFER" style="${Z.typeFilter==="TRANSFER"?"background: var(--primary); color: white;":""}">🔄 Transfers</button>
        </div>

        <!-- Dropdowns: Account, Category, & Date Filters -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <select id="tx-account-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Accounts</option>
            ${Oe.accounts.map(i=>`
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
        ${Eb(t)}
      </div>
    </div>
  `}function Eb(n){return Oe.transactions.length===0?bb():n.length===0?$C():ls(n,{showActions:!0,showDate:!0,showNotes:!0,accounts:Oe.accounts})}function Ib(){let n=[...Oe.transactions];if(Z.searchQuery){const e=Z.searchQuery.toLowerCase();n=n.filter(i=>{const s=Oe.accounts.find(o=>o.id===i.sourceAccountId),r=Oe.accounts.find(o=>o.id===i.destinationAccountId);return i.reason&&i.reason.toLowerCase().includes(e)||i.category&&i.category.toLowerCase().includes(e)||i.notes&&i.notes.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)||r&&r.name.toLowerCase().includes(e)})}if(Z.typeFilter!=="ALL"&&(n=n.filter(e=>e.type===Z.typeFilter)),Z.accountFilter!=="ALL"){const e=Z.accountFilter;n=n.filter(i=>i.sourceAccountId===e||i.destinationAccountId===e)}const t=Ns();if(Z.dateFilter==="TODAY")n=n.filter(e=>e.date===t);else if(Z.dateFilter==="WEEK"){const{start:e,end:i}=pb(t);n=n.filter(s=>s.date>=e&&s.date<=i)}else if(Z.dateFilter==="MONTH"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;n=n.filter(i=>i.date&&i.date.startsWith(e))}else Z.dateFilter==="CUSTOM"&&Z.customDate&&(n=n.filter(e=>e.date===Z.customDate));return Z.categoryFilter!=="ALL"&&(n=n.filter(e=>e.category===Z.categoryFilter)),n}function Tb(n){const t=()=>{const d=document.getElementById("tx-list-container");if(d){const h=Ib();d.innerHTML=Eb(h),pg(n)}},e=document.getElementById("tx-search-input"),i=document.getElementById("tx-search-clear");e&&(e.oninput=d=>{Z.searchQuery=d.target.value,i&&i.classList.toggle("visible",!!Z.searchQuery),t()}),i&&(i.onclick=()=>{Z.searchQuery="",e&&(e.value=""),i.classList.remove("visible"),t()}),document.querySelectorAll("[data-filter-type]").forEach(d=>{d.onclick=()=>{document.querySelectorAll("[data-filter-type]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),Z.typeFilter=d.dataset.filterType,t()}});const s=document.getElementById("tx-account-filter");s&&(s.onchange=d=>{Z.accountFilter=d.target.value,t()}),document.querySelectorAll("[data-filter-date]").forEach(d=>{d.onclick=()=>{if(document.querySelectorAll("[data-filter-date]").forEach(h=>h.classList.remove("active")),d.classList.add("active"),Z.dateFilter=d.dataset.filterDate,Z.dateFilter==="CUSTOM"){const h=document.querySelector(".page");h&&(h.outerHTML=wb(Oe),Tb(n))}else t()}});const r=document.getElementById("tx-custom-date");r&&(r.onchange=d=>{Z.customDate=d.target.value,t()});const o=document.getElementById("tx-category-filter");o&&(o.onchange=d=>{Z.categoryFilter=d.target.value,t()});const a=document.getElementById("btn-tx-add-income");a&&(a.onclick=()=>Di("INCOME",n));const c=document.getElementById("btn-tx-add-expense");c&&(c.onclick=()=>Di("EXPENSE",n));const l=document.getElementById("btn-tx-transfer");l&&(l.onclick=()=>ch(n)),pg(n)}function pg(n){document.querySelectorAll("#tx-list-container .transaction-action-btn[data-action]").forEach(t=>{t.onclick=e=>{e.stopPropagation();const i=t.dataset.action,s=t.dataset.txId,r=Oe.transactions.find(o=>o.id===s);r&&(i==="edit"?r.type==="TRANSFER"?uh(r,n):lh(r,n):i==="delete"&&dh(r,n))}})}let Se={user:null,profile:null,accounts:[],transactions:[]},cn="DAY",cr=Ns(),Iu=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;function _a(n){Se={...Se,...n};let t="",e="";if(cn==="DAY"){const i=ah(Se.transactions,cr);t=`
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
    `,e=i.transactions.length>0?ls(i.transactions,{showActions:!0,showDate:!1,accounts:Se.accounts}):Ml()}else if(cn==="WEEK"){const i=FC(Se.transactions,cr);t=`
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
    `,e=i.transactions.length>0?ls(i.transactions,{showActions:!0,showDate:!0,accounts:Se.accounts}):Ml()}else if(cn==="MONTH"){const i=mb(Se.transactions,Iu);t=`
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
    `,e=i.transactions.length>0?ls(i.transactions,{showActions:!0,showDate:!0,accounts:Se.accounts}):Ml()}return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Date-wise Money Control 📅</h1>
        <p class="page-subtitle">Track income, expenses, and account transfers on any specific date.</p>
      </div>

      <!-- View Switcher Tabs -->
      <div class="tabs">
        <div class="tab ${cn==="DAY"?"active":""}" data-view="DAY">Day View</div>
        <div class="tab ${cn==="WEEK"?"active":""}" data-view="WEEK">Week View</div>
        <div class="tab ${cn==="MONTH"?"active":""}" data-view="MONTH">Month View</div>
      </div>

      <!-- Date Controls -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        ${cn==="MONTH"?`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <label class="form-label" style="margin: 0; font-weight: var(--fw-semibold);">Select Month:</label>
            <input type="month" id="mc-month-picker" class="form-input" style="width: auto;" value="${Iu}" />
          </div>
        `:`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <span style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">
                ${cn==="DAY"?"Selected Date":"Week Containing"}
              </span>
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${PC(cr)}</div>
            </div>
            <input type="date" id="mc-date-picker" class="form-input" style="width: auto;" value="${cr}" />
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
  `}function ba(n){document.querySelectorAll(".tab[data-view]").forEach(i=>{i.onclick=()=>{cn=i.dataset.view;const s=document.querySelector(".page");s&&(s.outerHTML=_a(Se),ba(n))}});const t=document.getElementById("mc-date-picker");t&&(t.onchange=i=>{cr=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=_a(Se),ba(n))});const e=document.getElementById("mc-month-picker");e&&(e.onchange=i=>{Iu=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=_a(Se),ba(n))}),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(i=>{i.onclick=s=>{s.stopPropagation();const r=i.dataset.action,o=i.dataset.txId,a=Se.transactions.find(c=>c.id===o);a&&(r==="edit"?a.type==="TRANSFER"?uh(a,n):lh(a,n):r==="delete"&&dh(a,n))}})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function yo(n){return n+.5|0}const Un=(n,t,e)=>Math.max(Math.min(n,e),t);function lr(n){return Un(yo(n*2.55),0,255)}function Zn(n){return Un(yo(n*255),0,255)}function dn(n){return Un(yo(n/2.55)/100,0,1)}function gg(n){return Un(yo(n*100),0,100)}const Ae={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Tu=[..."0123456789ABCDEF"],KC=n=>Tu[n&15],YC=n=>Tu[(n&240)>>4]+Tu[n&15],Go=n=>(n&240)>>4===(n&15),XC=n=>Go(n.r)&&Go(n.g)&&Go(n.b)&&Go(n.a);function QC(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Ae[n[1]]*17,g:255&Ae[n[2]]*17,b:255&Ae[n[3]]*17,a:t===5?Ae[n[4]]*17:255}:(t===7||t===9)&&(e={r:Ae[n[1]]<<4|Ae[n[2]],g:Ae[n[3]]<<4|Ae[n[4]],b:Ae[n[5]]<<4|Ae[n[6]],a:t===9?Ae[n[7]]<<4|Ae[n[8]]:255})),e}const JC=(n,t)=>n<255?t(n):"";function ZC(n){var t=XC(n)?KC:YC;return n?"#"+t(n.r)+t(n.g)+t(n.b)+JC(n.a,t):void 0}const tR=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ab(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function eR(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function nR(n,t,e){const i=Ab(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function iR(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function hh(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=iR(e,i,s,d,r),c=c*60+.5),[c|0,l||0,a]}function fh(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(Zn)}function ph(n,t,e){return fh(Ab,n,t,e)}function sR(n,t,e){return fh(nR,n,t,e)}function rR(n,t,e){return fh(eR,n,t,e)}function Sb(n){return(n%360+360)%360}function oR(n){const t=tR.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?lr(+t[5]):Zn(+t[5]));const s=Sb(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=sR(s,r,o):t[1]==="hsv"?i=rR(s,r,o):i=ph(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function aR(n,t){var e=hh(n);e[0]=Sb(e[0]+t),e=ph(e),n.r=e[0],n.g=e[1],n.b=e[2]}function cR(n){if(!n)return;const t=hh(n),e=t[0],i=gg(t[1]),s=gg(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${dn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const mg={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},yg={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function lR(){const n={},t=Object.keys(yg),e=Object.keys(mg);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,mg[r]);r=parseInt(yg[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Ko;function uR(n){Ko||(Ko=lR(),Ko.transparent=[0,0,0,0]);const t=Ko[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const dR=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function hR(n){const t=dR.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?lr(o):Un(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?lr(i):Un(i,0,255)),s=255&(t[4]?lr(s):Un(s,0,255)),r=255&(t[6]?lr(r):Un(r,0,255)),{r:i,g:s,b:r,a:e}}}function fR(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${dn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Ol=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Qi=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function pR(n,t,e){const i=Qi(dn(n.r)),s=Qi(dn(n.g)),r=Qi(dn(n.b));return{r:Zn(Ol(i+e*(Qi(dn(t.r))-i))),g:Zn(Ol(s+e*(Qi(dn(t.g))-s))),b:Zn(Ol(r+e*(Qi(dn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Yo(n,t,e){if(n){let i=hh(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=ph(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function xb(n,t){return n&&Object.assign(t||{},n)}function vg(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Zn(n[3]))):(t=xb(n,{r:0,g:0,b:0,a:1}),t.a=Zn(t.a)),t}function gR(n){return n.charAt(0)==="r"?hR(n):oR(n)}class jr{constructor(t){if(t instanceof jr)return t;const e=typeof t;let i;e==="object"?i=vg(t):e==="string"&&(i=QC(t)||uR(t)||gR(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=xb(this._rgb);return t&&(t.a=dn(t.a)),t}set rgb(t){this._rgb=vg(t)}rgbString(){return this._valid?fR(this._rgb):void 0}hexString(){return this._valid?ZC(this._rgb):void 0}hslString(){return this._valid?cR(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=pR(this._rgb,t._rgb,e)),this}clone(){return new jr(this.rgb)}alpha(t){return this._rgb.a=Zn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=yo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Yo(this._rgb,2,t),this}darken(t){return Yo(this._rgb,2,-t),this}saturate(t){return Yo(this._rgb,1,t),this}desaturate(t){return Yo(this._rgb,1,-t),this}rotate(t){return aR(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function an(){}const mR=(()=>{let n=0;return()=>n++})();function nt(n){return n==null}function It(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function rt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Ct(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Ie(n,t){return Ct(n)?n:t}function Q(n,t){return typeof n>"u"?t:n}const yR=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Pb=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function mt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function dt(n,t,e,i){let s,r,o;if(It(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(rt(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function Ja(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Za(n){if(It(n))return n.map(Za);if(rt(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=Za(n[e[s]]);return t}return n}function kb(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function vR(n,t,e,i){if(!kb(n))return;const s=t[n],r=e[n];rt(s)&&rt(r)?qr(s,r,i):t[n]=Za(r)}function qr(n,t,e){const i=It(t)?t:[t],s=i.length;if(!rt(n))return n;e=e||{};const r=e.merger||vR;let o;for(let a=0;a<s;++a){if(o=i[a],!rt(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function Ar(n,t){return qr(n,t,{merger:_R})}function _R(n,t,e){if(!kb(n))return;const i=t[n],s=e[n];rt(i)&&rt(s)?Ar(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Za(s))}const _g={"":n=>n,x:n=>n.x,y:n=>n.y};function bR(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function wR(n){const t=bR(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function ai(n,t){return(_g[t]||(_g[t]=wR(t)))(n)}function gh(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Hr=n=>typeof n<"u",ci=n=>typeof n=="function",bg=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function ER(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const lt=Math.PI,bt=2*lt,IR=bt+lt,tc=Number.POSITIVE_INFINITY,TR=lt/180,Ot=lt/2,vi=lt/4,wg=lt*2/3,$n=Math.log10,Xe=Math.sign;function Sr(n,t,e){return Math.abs(n-t)<e}function Eg(n){const t=Math.round(n);n=Sr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor($n(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function AR(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function SR(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function bs(n){return!SR(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function xR(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Cb(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Ne(n){return n*(lt/180)}function mh(n){return n*(180/lt)}function Ig(n){if(!Ct(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Rb(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*lt&&(r+=bt),{angle:r,distance:s}}function Au(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function PR(n,t){return(n-t+IR)%bt-lt}function se(n){return(n%bt+bt)%bt}function Wr(n,t,e,i){const s=se(n),r=se(t),o=se(e),a=se(r-s),c=se(o-s),l=se(s-r),d=se(s-o);return s===r||s===o||i&&r===o||a>c&&l<d}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function kR(n){return qt(n,-32768,32767)}function vn(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function yh(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const _n=(n,t,e,i)=>yh(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),CR=(n,t,e)=>yh(n,e,i=>n[i][t]>=e);function RR(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const Db=["push","pop","shift","splice","unshift"];function DR(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Db.forEach(e=>{const i="_onData"+gh(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Tg(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(Db.forEach(r=>{delete n[r]}),delete n._chartjs)}function Mb(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const Ob=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function Nb(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,Ob.call(window,()=>{i=!1,n.apply(t,e)}))}}function MR(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const vh=n=>n==="start"?"left":n==="end"?"right":"center",ne=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,OR=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function Lb(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:g,maxDefined:v}=o.getUserBounds();if(g){if(s=Math.min(_n(c,d,h).lo,e?i:_n(t,d,o.getPixelForValue(h)).lo),l){const _=c.slice(0,s+1).reverse().findIndex(y=>!nt(y[a.axis]));s-=Math.max(0,_)}s=qt(s,0,i-1)}if(v){let _=Math.max(_n(c,o.axis,f,!0).hi+1,e?0:_n(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const y=c.slice(_-1).findIndex(I=>!nt(I[a.axis]));_+=Math.max(0,y)}r=qt(_,s,i)-s}else r=i-s}return{start:s,count:r}}function Vb(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const Xo=n=>n===0||n===1,Ag=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*bt/e)),Sg=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*bt/e)+1,xr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Ot)+1,easeOutSine:n=>Math.sin(n*Ot),easeInOutSine:n=>-.5*(Math.cos(lt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Xo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Xo(n)?n:Ag(n,.075,.3),easeOutElastic:n=>Xo(n)?n:Sg(n,.075,.3),easeInOutElastic(n){return Xo(n)?n:n<.5?.5*Ag(n*2,.1125,.45):.5+.5*Sg(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-xr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?xr.easeInBounce(n*2)*.5:xr.easeOutBounce(n*2-1)*.5+.5};function _h(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function xg(n){return _h(n)?n:new jr(n)}function Nl(n){return _h(n)?n:new jr(n).saturate(.5).darken(.1).hexString()}const NR=["x","y","borderWidth","radius","tension"],LR=["color","borderColor","backgroundColor"];function VR(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:LR},numbers:{type:"number",properties:NR}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function FR(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Pg=new Map;function BR(n,t){t=t||{};const e=n+JSON.stringify(t);let i=Pg.get(e);return i||(i=new Intl.NumberFormat(n,t),Pg.set(e,i)),i}function vo(n,t,e){return BR(t,e).format(n)}const Fb={values(n){return It(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=UR(n,e)}const o=$n(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),vo(n,i,c)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor($n(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Fb.numeric.call(this,n,t,e):""}};function UR(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Fc={formatters:Fb};function $R(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Fc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Ui=Object.create(null),Su=Object.create(null);function Pr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function Ll(n,t,e){return typeof t=="string"?qr(Pr(n,t),e):qr(Pr(n,""),t)}class zR{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Nl(s.backgroundColor),this.hoverBorderColor=(i,s)=>Nl(s.borderColor),this.hoverColor=(i,s)=>Nl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ll(this,t,e)}get(t){return Pr(this,t)}describe(t,e){return Ll(Su,t,e)}override(t,e){return Ll(Ui,t,e)}route(t,e,i,s){const r=Pr(this,t),o=Pr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[s];return rt(c)?Object.assign({},l,c):Q(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Tt=new zR({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[VR,FR,$R]);function jR(n){return!n||nt(n.size)||nt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function ec(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function qR(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!It(h))o=ec(n,s,r,o,h);else if(It(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!It(f)&&(o=ec(n,s,r,o,f));n.restore();const g=r.length/2;if(g>e.length){for(c=0;c<g;c++)delete s[r[c]];r.splice(0,g)}return o}function _i(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function kg(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function xu(n,t,e,i){Bb(n,t,e,i,null)}function Bb(n,t,e,i,s){let r,o,a,c,l,d,h,f;const g=t.pointStyle,v=t.rotation,_=t.radius;let y=(v||0)*TR;if(g&&typeof g=="object"&&(r=g.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(y),n.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),g){default:s?n.ellipse(e,i,s/2,_,0,0,bt):n.arc(e,i,_,0,bt),n.closePath();break;case"triangle":d=s?s/2:_,n.moveTo(e+Math.sin(y)*d,i-Math.cos(y)*_),y+=wg,n.lineTo(e+Math.sin(y)*d,i-Math.cos(y)*_),y+=wg,n.lineTo(e+Math.sin(y)*d,i-Math.cos(y)*_),n.closePath();break;case"rectRounded":l=_*.516,c=_-l,o=Math.cos(y+vi)*c,h=Math.cos(y+vi)*(s?s/2-l:c),a=Math.sin(y+vi)*c,f=Math.sin(y+vi)*(s?s/2-l:c),n.arc(e-h,i-a,l,y-lt,y-Ot),n.arc(e+f,i-o,l,y-Ot,y),n.arc(e+h,i+a,l,y,y+Ot),n.arc(e-f,i+o,l,y+Ot,y+lt),n.closePath();break;case"rect":if(!v){c=Math.SQRT1_2*_,d=s?s/2:c,n.rect(e-d,i-c,2*d,2*c);break}y+=vi;case"rectRot":h=Math.cos(y)*(s?s/2:_),o=Math.cos(y)*_,a=Math.sin(y)*_,f=Math.sin(y)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+f,i-o),n.lineTo(e+h,i+a),n.lineTo(e-f,i+o),n.closePath();break;case"crossRot":y+=vi;case"cross":h=Math.cos(y)*(s?s/2:_),o=Math.cos(y)*_,a=Math.sin(y)*_,f=Math.sin(y)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"star":h=Math.cos(y)*(s?s/2:_),o=Math.cos(y)*_,a=Math.sin(y)*_,f=Math.sin(y)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o),y+=vi,h=Math.cos(y)*(s?s/2:_),o=Math.cos(y)*_,a=Math.sin(y)*_,f=Math.sin(y)*(s?s/2:_),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"line":o=s?s/2:Math.cos(y)*_,a=Math.sin(y)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(y)*(s?s/2:_),i+Math.sin(y)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function bn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Bc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Uc(n){n.restore()}function HR(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function WR(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function GR(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),nt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function KR(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=s.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function YR(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function $i(n,t,e,i,s,r={}){const o=It(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=s.string,GR(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&YR(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),nt(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,i,r.maxWidth)),n.fillText(l,e,i,r.maxWidth),KR(n,e,i,l,r),i+=Number(s.lineHeight);n.restore()}function Gr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*lt,lt,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,lt,Ot,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Ot,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Ot,!0),n.lineTo(e+o.topLeft,i)}const XR=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,QR=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function JR(n,t){const e=(""+n).match(XR);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const ZR=n=>+n||0;function bh(n,t){const e={},i=rt(t),s=i?Object.keys(t):t,r=rt(n)?i?o=>Q(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=ZR(r(o));return e}function Ub(n){return bh(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Mi(n){return bh(n,["topLeft","topRight","bottomLeft","bottomRight"])}function ce(n){const t=Ub(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function $t(n,t){n=n||{},t=t||Tt.font;let e=Q(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Q(n.style,t.style);i&&!(""+i).match(QR)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Q(n.family,t.family),lineHeight:JR(Q(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Q(n.weight,t.weight),string:""};return s.string=jR(s),s}function ur(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function tD(n,t,e){const{min:i,max:s}=n,r=Pb(t,(s-i)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function fi(n,t){return Object.assign(Object.create(n),t)}function wh(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=qb("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>wh([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return zb(a,c,()=>cD(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Rg(a).includes(c)},ownKeys(a){return Rg(a)},set(a,c,l){const d=a._storage||(a._storage=s());return a[c]=d[c]=l,delete a._keys,!0}})}function ws(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:$b(n,i),setContext:r=>ws(n,r,e,i),override:r=>ws(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return zb(r,o,()=>nD(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function $b(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:ci(e)?e:()=>e,isIndexable:ci(i)?i:()=>i}}const eD=(n,t)=>n?n+gh(t):t,Eh=(n,t)=>rt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function zb(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function nD(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return ci(a)&&o.isScriptable(t)&&(a=iD(t,a,n,e)),It(a)&&a.length&&(a=sD(t,a,n,o.isIndexable)),Eh(t,a)&&(a=ws(a,s,r&&r[t],o)),a}function iD(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||i);return a.delete(n),Eh(n,c)&&(c=Ih(s._scopes,s,n,c)),c}function sD(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(rt(t[0])){const c=t,l=s._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=Ih(l,s,n,d);t.push(ws(h,r,o&&o[n],a))}}return t}function jb(n,t,e){return ci(n)?n(t,e):n}const rD=(n,t)=>n===!0?t:typeof n=="string"?ai(t,n):void 0;function oD(n,t,e,i,s){for(const r of t){const o=rD(e,r);if(o){n.add(o);const a=jb(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function Ih(n,t,e,i){const s=t._rootScopes,r=jb(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let c=Cg(a,o,e,r||e,i);return c===null||typeof r<"u"&&r!==e&&(c=Cg(a,o,r,c,i),c===null)?!1:wh(Array.from(a),[""],s,r,()=>aD(t,e,i))}function Cg(n,t,e,i,s){for(;e;)e=oD(n,t,e,i,s);return e}function aD(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return It(s)&&rt(e)?e:s||{}}function cD(n,t,e,i){let s;for(const r of t)if(s=qb(eD(r,n),e),typeof s<"u")return Eh(n,s)?Ih(e,i,n,s):s}function qb(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function Rg(n){let t=n._keys;return t||(t=n._keys=lD(n._scopes)),t}function lD(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function Hb(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,d;for(a=0,c=i;a<c;++a)l=a+e,d=t[l],o[a]={r:s.parse(ai(d,r),l)};return o}const uD=Number.EPSILON||1e-14,Es=(n,t)=>t<n.length&&!n[t].skip&&n[t],Wb=n=>n==="x"?"y":"x";function dD(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Au(r,s),c=Au(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=i*l,f=i*d;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function hD(n,t,e){const i=n.length;let s,r,o,a,c,l=Es(n,0);for(let d=0;d<i-1;++d)if(c=l,l=Es(n,d+1),!(!c||!l)){if(Sr(t[d],0,uD)){e[d]=e[d+1]=0;continue}s=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=s*o*t[d],e[d+1]=r*o*t[d])}}function fD(n,t,e="x"){const i=Wb(e),s=n.length;let r,o,a,c=Es(n,0);for(let l=0;l<s;++l){if(o=a,a=c,c=Es(n,l+1),!a)continue;const d=a[e],h=a[i];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${i}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${i}`]=h+r*t[l])}}function pD(n,t="x"){const e=Wb(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=Es(n,0);for(o=0;o<i;++o)if(a=c,c=l,l=Es(n,o+1),!!c){if(l){const d=l[t]-c[t];s[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?Xe(s[o-1])!==Xe(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}hD(n,s,r),fD(n,r,t)}function Qo(n,t,e){return Math.max(Math.min(n,e),t)}function gD(n,t){let e,i,s,r,o,a=bn(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&bn(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=Qo(s.cp1x,t.left,t.right),s.cp1y=Qo(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Qo(s.cp2x,t.left,t.right),s.cp2y=Qo(s.cp2y,t.top,t.bottom)))}function mD(n,t,e,i,s){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")pD(n,s);else{let l=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=dD(l,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&gD(n,e)}function Th(){return typeof window<"u"&&typeof document<"u"}function Ah(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function nc(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const $c=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function yD(n,t){return $c(n).getPropertyValue(t)}const vD=["top","right","bottom","left"];function Oi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=vD[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const _D=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function bD(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(_D(s,r,n.target))a=s,c=r;else{const l=t.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Ii(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=$c(e),r=s.boxSizing==="border-box",o=Oi(s,"padding"),a=Oi(s,"border","width"),{x:c,y:l,box:d}=bD(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:g,height:v}=t;return r&&(g-=o.width+a.width,v-=o.height+a.height),{x:Math.round((c-h)/g*e.width/i),y:Math.round((l-f)/v*e.height/i)}}function wD(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&Ah(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=$c(r),c=Oi(a,"border","width"),l=Oi(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,i=nc(a.maxWidth,r,"clientWidth"),s=nc(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||tc,maxHeight:s||tc}}const zn=n=>Math.round(n*10)/10;function ED(n,t,e,i){const s=$c(n),r=Oi(s,"margin"),o=nc(s.maxWidth,n,"clientWidth")||tc,a=nc(s.maxHeight,n,"clientHeight")||tc,c=wD(n,t,e);let{width:l,height:d}=c;if(s.boxSizing==="content-box"){const f=Oi(s,"border","width"),g=Oi(s,"padding");l-=g.width+f.width,d-=g.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,i?l/i:d-r.height),l=zn(Math.min(l,o,c.maxWidth)),d=zn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=zn(l/2)),(t!==void 0||e!==void 0)&&i&&c.height&&d>c.height&&(d=c.height,l=zn(Math.floor(d*i))),{width:l,height:d}}function Dg(n,t,e){const i=t||1,s=zn(n.height*i),r=zn(n.width*i);n.height=zn(n.height),n.width=zn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const ID=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Th()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Mg(n,t){const e=yD(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Ti(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function TD(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function AD(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Ti(n,s,e),a=Ti(s,r,e),c=Ti(r,t,e),l=Ti(o,a,e),d=Ti(a,c,e);return Ti(l,d,e)}const SD=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},xD=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function us(n,t,e){return n?SD(t,e):xD()}function Gb(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function Kb(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Yb(n){return n==="angle"?{between:Wr,compare:PR,normalize:se}:{between:vn,compare:(t,e)=>t-e,normalize:t=>t}}function Og({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function PD(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=Yb(i),c=t.length;let{start:l,end:d,loop:h}=n,f,g;if(h){for(l+=c,d+=c,f=0,g=c;f<g&&o(a(t[l%c][i]),s,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function Xb(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=Yb(i),{start:d,end:h,loop:f,style:g}=PD(n,t,e),v=[];let _=!1,y=null,I,k,R;const D=()=>c(s,R,I)&&a(s,R)!==0,O=()=>a(r,I)===0||c(r,R,I),L=()=>_||D(),T=()=>!_||O();for(let b=d,E=d;b<=h;++b)k=t[b%o],!k.skip&&(I=l(k[i]),I!==R&&(_=c(I,s,r),y===null&&L()&&(y=a(I,s)===0?b:E),y!==null&&T()&&(v.push(Og({start:y,end:b,loop:f,count:o,style:g})),y=null),E=b,R=I));return y!==null&&v.push(Og({start:y,end:h,loop:f,count:o,style:g})),v}function Qb(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=Xb(i[s],n.points,t);r.length&&e.push(...r)}return e}function kD(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function CD(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:t%s,end:(c-1)%s,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function RD(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=kD(e,s,r,i);if(i===!0)return Ng(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+s:a,l=!!n._fullLoop&&o===0&&a===s-1;return Ng(n,CD(e,o,c,l),e,t)}function Ng(n,t,e,i){return!i||!i.setContext||!e?t:DD(n,t,e,i)}function DD(n,t,e,i){const s=n._chart.getContext(),r=Lg(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function g(v,_,y,I){const k=a?-1:1;if(v!==_){for(v+=c;e[v%c].skip;)v-=k;for(;e[_%c].skip;)_+=k;v%c!==_%c&&(l.push({start:v%c,end:_%c,loop:y,style:I}),d=I,h=_%c)}}for(const v of t){h=a?h:v.start;let _=e[h%c],y;for(f=h+1;f<=v.end;f++){const I=e[f%c];y=Lg(i.setContext(fi(s,{type:"segment",p0:_,p1:I,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),MD(y,d)&&g(h,f-1,v.loop,d),_=I,d=y}h<f-1&&g(h,f-1,v.loop,d)}return l}function Lg(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function MD(n,t){if(!t)return!1;const e=[],i=function(s,r){return _h(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function Jo(n,t,e){return n.options.clip?n[e]:t[e]}function OD(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:Jo(e,t,"left"),right:Jo(e,t,"right"),top:Jo(i,t,"top"),bottom:Jo(i,t,"bottom")}:t}function Jb(n,t){const e=t._clip;if(e.disabled)return!1;const i=OD(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class ND{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Ob.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var ln=new ND;const Vg="transparent",LD={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=xg(n||Vg),s=i.valid&&xg(t||Vg);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class VD{constructor(t,e,i,s){const r=e[i];s=ur([t.to,s,r,t.from]);const o=ur([t.from,r,s]);this._active=!0,this._fn=t.fn||LD[t.type||typeof o],this._easing=xr[t.easing]||xr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=ur([t.to,e,s,t.from]),this._from=ur([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}c=e/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class Zb{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!rt(t))return;const e=Object.keys(Tt.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!rt(r))return;const o={};for(const a of e)o[a]=r[a];(It(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=BD(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&FD(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new VD(f,t,l,d),s.push(h)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return ln.add(this._chart,i),!0}}function FD(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function BD(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Fg(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function UD(n,t,e){if(e===!1)return!1;const i=Fg(n,e),s=Fg(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function $D(n){let t,e,i,s;return rt(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function tw(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Bg(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===e){if(d=!0,i.all)continue;break}l=n.values[c],Ct(l)&&(r||t===0||Xe(t)===Xe(l))&&(t+=l)}return!d&&!i.all?0:t}function zD(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[s]:d,[r]:n[d]};return a}function Vl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function jD(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function qD(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function HD(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function Ug(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function $g(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,d=jD(r,o,i),h=t.length;let f;for(let g=0;g<h;++g){const v=t[g],{[c]:_,[l]:y}=v,I=v._stacks||(v._stacks={});f=I[l]=HD(s,d,_),f[a]=y,f._top=Ug(f,o,!0,i.type),f._bottom=Ug(f,o,!1,i.type);const k=f._visualValues||(f._visualValues={});k[a]=y}}function Fl(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function WD(n,t){return fi(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function GD(n,t,e){return fi(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Xs(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const Bl=n=>n==="reset"||n==="none",zg=(n,t)=>t?n:Object.assign({},n),KD=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:tw(e,!0),values:null};class Le{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Vl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Xs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(h,f,g,v)=>h==="x"?f:h==="r"?v:g,r=e.xAxisID=Q(i.xAxisID,Fl(t,"x")),o=e.yAxisID=Q(i.yAxisID,Fl(t,"y")),a=e.rAxisID=Q(i.rAxisID,Fl(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),d=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Tg(this._data,this),t._stacked&&Xs(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(rt(e)){const s=this._cachedMeta;this._data=zD(e,s)}else if(i!==e){if(i){Tg(i,this);const s=this._cachedMeta;Xs(s),s._parsed=[]}e&&Object.isExtensible(e)&&DR(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=Vl(e.vScale,e),e.stack!==i.stack&&(s=!0,Xs(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&($g(this,e._parsed),e._stacked=Vl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=t===0&&e===s.length?!0:i._sorted,l=t>0&&i._parsed[t-1],d,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{It(s[t])?f=this.parseArrayData(i,s,t,e):rt(s[t])?f=this.parseObjectData(i,s,t,e):f=this.parsePrimitiveData(i,s,t,e);const g=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)i._parsed[d+t]=h=f[d],c&&(g()&&(c=!1),l=h);i._sorted=c}o&&$g(this,f)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(s);let f,g,v;for(f=0,g=s;f<g;++f)v=f+i,h[f]={[a]:d||r.parse(l[v],v),[c]:o.parse(e[v],v)};return h}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let c,l,d,h;for(c=0,l=s;c<l;++c)d=c+i,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let d,h,f,g;for(d=0,h=s;d<h;++d)f=d+i,g=e[f],l[d]={x:r.parse(ai(g,a),f),y:o.parse(ai(g,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:tw(s,!0),values:e._stacks[t.axis]._visualValues};return Bg(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Bg(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),c=KD(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=qD(a);let f,g;function v(){g=s[f];const _=g[a.axis];return!Ct(g[t.axis])||d>_||h<_}for(f=0;f<o&&!(!v()&&(this.updateRangeFromParsed(l,t,g,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!v()){this.updateRangeFromParsed(l,t,g,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],Ct(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=$D(Q(this.options.clip,UD(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=s[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=GD(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=WD(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Hr(i);if(a)return zg(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),g=Object.keys(Tt.elements[t]),v=()=>this.getContext(i,s,e),_=l.resolveNamedOptions(f,g,v,h);return _.$shared&&(_.$shared=c,r[o]=Object.freeze(zg(_,c))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,i,e))}const l=new Zb(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Bl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){Bl(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!Bl(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Xs(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}z(Le,"defaults",{}),z(Le,"datasetElementType",null),z(Le,"dataElementType",null);function YD(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=Mb(i.sort((s,r)=>s-r))}return n._cache.$bar}function XD(n){const t=n.iScale,e=YD(t,n.type);let i=t._length,s,r,o,a;const c=()=>{o===32767||o===-32768||(Hr(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),c();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),c();return i}function QD(n,t,e,i){const s=e.barThickness;let r,o;return nt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function JD(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:e.barPercentage,start:l}}function ZD(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:s,end:r,min:o,max:a}}function ew(n,t,e,i){return It(n)?ZD(n,t,e,i):t[e.axis]=e.parse(n,i),t}function jg(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,c=[];let l,d,h,f;for(l=e,d=e+i;l<d;++l)f=t[l],h={},h[s.axis]=a||s.parse(o[l],l),c.push(ew(f,h,r,l));return c}function Ul(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function tM(n,t,e){return n!==0?Xe(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function eM(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function nM(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=eM(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=l:(e._bottom||0)===i?s=d:(r[qg(d,o,a,c)]=!0,s=l)),r[qg(s,o,a,c)]=!0,n.borderSkipped=r}function qg(n,t,e,i){return i?(n=iM(n,t,e),n=Hg(n,e,t)):n=Hg(n,t,e),n}function iM(n,t,e){return n===t?e:n===e?t:n}function Hg(n,t,e){return n==="start"?t:n==="end"?e:n}function sM(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class wa extends Le{parsePrimitiveData(t,e,i,s){return jg(t,e,i,s)}parseArrayData(t,e,i,s){return jg(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,g,v,_;for(f=i,g=i+s;f<g;++f)_=e[f],v={},v[r.axis]=r.parse(ai(_,l),f),h.push(ew(ai(_,d),v,o,f));return h}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=Ul(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,s);for(let g=e;g<e+i;g++){const v=this.getParsed(g),_=r||nt(v[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(g),y=this._calculateBarIndexPixels(g,d),I=(v._stacks||{})[a.axis],k={horizontal:l,base:_.base,enableBorderRadius:!I||Ul(v._custom)||o===I._top||o===I._bottom,x:l?_.head:y.center,y:l?y.center:_.head,height:l?y.size:Math.abs(_.size),width:l?Math.abs(_.size):y.size};f&&(k.options=h||this.resolveDataElementOptions(g,t[g].active?"active":s));const R=k.options||t[g].options;nM(k,R,I,o),sM(k,R,d.ratio),this.updateElement(t[g],g,k,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[i.axis],l=d=>{const h=d._parsed.find(g=>g[i.axis]===c),f=h&&h[d.vScale.axis];if(nt(f)||isNaN(f))return!0};for(const d of s)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[Q(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||XD(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=Ul(l);let h=c[e.axis],f=0,g=i?this.applyStack(e,c,i):h,v,_;g!==h&&(f=g-h,g=h),d&&(h=l.barStart,g=l.barEnd-l.barStart,h!==0&&Xe(h)!==Xe(l.barEnd)&&(f=0),f+=h);const y=!nt(r)&&!d?r:f;let I=e.getPixelForValue(y);if(this.chart.getDataVisibility(t)?v=e.getPixelForValue(f+g):v=I,_=v-I,Math.abs(_)<o){_=tM(_,e,a)*o,h===a&&(I-=_/2);const k=e.getPixelForDecimal(0),R=e.getPixelForDecimal(1),D=Math.min(k,R),O=Math.max(k,R);I=Math.max(Math.min(I,O),D),v=I+_,i&&!d&&(c._stacks[e.axis]._visualValues[s]=e.getValueForPixel(v)-e.getValueForPixel(I))}if(I===e.getPixelForValue(a)){const k=Xe(_)*e.getLineWidthForValue(a)/2;I+=k,_-=k}return{size:_,base:I,head:v,center:v+_/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=Q(s.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?JD(t,e,s,d*l):QD(t,e,s,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(Q(f,this.getFirstScaleIdForIndexAxis())),v=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+g;a=h.start+h.chunk*v+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}z(wa,"id","bar"),z(wa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),z(wa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ea extends Le{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Q(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=Q(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:i[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,s),d=o.axis,h=a.axis;for(let f=e;f<e+i;f++){const g=t[f],v=!r&&this.getParsed(f),_={},y=_[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(v[d]),I=_[h]=r?a.getBasePixel():a.getPixelForValue(v[h]);_.skip=isNaN(y)||isNaN(I),l&&(_.options=c||this.resolveDataElementOptions(f,g.active?"active":s),r&&(_.options.radius=0)),this.updateElement(g,f,_,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=Q(i&&i._custom,r),s}}z(Ea,"id","bubble"),z(Ea,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),z(Ea,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function rM(n,t,e){let i=1,s=1,r=0,o=0;if(t<bt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),g=(R,D,O)=>Wr(R,a,c,!0)?1:Math.max(D,D*e,O,O*e),v=(R,D,O)=>Wr(R,a,c,!0)?-1:Math.min(D,D*e,O,O*e),_=g(0,l,h),y=g(Ot,d,f),I=v(lt,l,h),k=v(lt+Ot,d,f);i=(_-I)/2,s=(y-k)/2,r=-(_+I)/2,o=-(y+k)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class xi extends Le{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=c=>+i[c];if(rt(i[t])){const{key:c="value"}=this._parsing;r=l=>+ai(i[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return Ne(this.options.rotation-90)}_getCircumference(){return Ne(this.options.circumference)}_getRotationExtents(){let t=bt,e=-bt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(yR(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:v,offsetY:_}=rM(h,d,c),y=(i.width-o)/f,I=(i.height-o)/g,k=Math.max(Math.min(y,I)/2,0),R=Pb(this.options.radius,k),D=Math.max(R*c,0),O=(R-D)/this._getVisibleDatasetWeightTotal();this.offsetX=v*R,this.offsetY=_*R,s.total=this.calculateTotal(),this.outerRadius=R-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/bt)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,g=f?0:this.innerRadius,v=f?0:this.outerRadius,{sharedOptions:_,includeOptions:y}=this._getSharedOptions(e,s);let I=this._getRotation(),k;for(k=0;k<e;++k)I+=this._circumference(k,r);for(k=e;k<e+i;++k){const R=this._circumference(k,r),D=t[k],O={x:d+this.offsetX,y:h+this.offsetY,startAngle:I,endAngle:I+R,circumference:R,outerRadius:v,innerRadius:g};y&&(O.options=_||this.resolveDataElementOptions(k,D.active?"active":s)),I+=R,this.updateElement(D,k,O,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?bt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=vo(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,c;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)c=a.resolveDataElementOptions(s),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(Q(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}z(xi,"id","doughnut"),z(xi,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),z(xi,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),z(xi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class Ia extends Le{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=Lb(e,s,o);this._drawStart=a,this._drawCount=c,Vb(e)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,s),f=o.axis,g=a.axis,{spanGaps:v,segment:_}=this.options,y=bs(v)?v:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||s==="none",k=e+i,R=t.length;let D=e>0&&this.getParsed(e-1);for(let O=0;O<R;++O){const L=t[O],T=I?L:{};if(O<e||O>=k){T.skip=!0;continue}const b=this.getParsed(O),E=nt(b[g]),S=T[f]=o.getPixelForValue(b[f],O),x=T[g]=r||E?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[g],O);T.skip=isNaN(S)||isNaN(x)||E,T.stop=O>0&&Math.abs(b[f]-D[f])>y,_&&(T.parsed=b,T.raw=l.data[O]),h&&(T.options=d||this.resolveDataElementOptions(O,L.active?"active":s)),I||this.updateElement(L,O,T,s),D=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}z(Ia,"id","line"),z(Ia,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),z(Ia,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class kr extends Le{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=vo(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return Hb.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*lt;let g=f,v;const _=360/this.countVisibleElements();for(v=0;v<e;++v)g+=this._computeAngle(v,s,_);for(v=e;v<e+i;v++){const y=t[v];let I=g,k=g+this._computeAngle(v,s,_),R=o.getDataVisibility(v)?l.getDistanceFromCenterForValue(this.getParsed(v).r):0;g=k,r&&(c.animateScale&&(R=0),c.animateRotate&&(I=k=f));const D={x:d,y:h,innerRadius:0,outerRadius:R,startAngle:I,endAngle:k,options:this.resolveDataElementOptions(v,y.active?"active":s)};this.updateElement(y,v,D,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Ne(this.resolveDataElementOptions(t,e).angle||i):0}}z(kr,"id","polarArea"),z(kr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),z(kr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:s,lineWidth:c.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Pu extends xi{}z(Pu,"id","pie"),z(Pu,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ta extends Le{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return Hb.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":s),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,g={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,g,s)}}}z(Ta,"id","radar"),z(Ta,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),z(Ta,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Aa extends Le{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=Lb(e,i,s);if(this._drawStart=r,this._drawCount=o,Vb(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,s),h=this.getSharedOptions(d),f=this.includeOptions(s,h),g=o.axis,v=a.axis,{spanGaps:_,segment:y}=this.options,I=bs(_)?_:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||s==="none";let R=e>0&&this.getParsed(e-1);for(let D=e;D<e+i;++D){const O=t[D],L=this.getParsed(D),T=k?O:{},b=nt(L[v]),E=T[g]=o.getPixelForValue(L[g],D),S=T[v]=r||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,L,c):L[v],D);T.skip=isNaN(E)||isNaN(S)||b,T.stop=D>0&&Math.abs(L[g]-R[g])>I,y&&(T.parsed=L,T.raw=l.data[D]),f&&(T.options=h||this.resolveDataElementOptions(D,O.active?"active":s)),k||this.updateElement(O,D,T,s),R=L}this.updateSharedOptions(h,s,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}z(Aa,"id","scatter"),z(Aa,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),z(Aa,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var oM=Object.freeze({__proto__:null,BarController:wa,BubbleController:Ea,DoughnutController:xi,LineController:Ia,PieController:Pu,PolarAreaController:kr,RadarController:Ta,ScatterController:Aa});function bi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Sh{constructor(t){z(this,"options");this.options=t||{}}static override(t){Object.assign(Sh.prototype,t)}init(){}formats(){return bi()}parse(){return bi()}format(){return bi()}add(){return bi()}diff(){return bi()}startOf(){return bi()}endOf(){return bi()}}var aM={_date:Sh};function cM(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?CR:_n;if(i){if(s._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),g=l(r,t,e+h);return{lo:f.lo,hi:g.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=s._cachedMeta,{_parsed:f}=n,g=f.slice(0,d.lo+1).reverse().findIndex(_=>!nt(_[h.axis]));d.lo-=Math.max(0,g);const v=f.slice(d.hi).findIndex(_=>!nt(_[h.axis]));d.hi+=Math.max(0,v)}return d}}return{lo:0,hi:r.length-1}}function zc(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=cM(r[a],t,o,s);for(let g=h;g<=f;++g){const v=d[g];v.skip||i(v,l,g)}}}function lM(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function $l(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||zc(n,e,t,function(a,c,l){!s&&!bn(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function uM(n,t,e,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=Rb(o,{x:t.x,y:t.y});Wr(h,l,d)&&s.push({element:o,datasetIndex:a,index:c})}return zc(n,e,t,r),s}function dM(n,t,e,i,s,r){let o=[];const a=lM(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const g=d.inRange(t.x,t.y,s);if(i&&!g)return;const v=d.getCenterPoint(s);if(!(!!r||n.isPointInArea(v))&&!g)return;const y=a(t,v);y<c?(o=[{element:d,datasetIndex:h,index:f}],c=y):y===c&&o.push({element:d,datasetIndex:h,index:f})}return zc(n,e,t,l),o}function zl(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?uM(n,t,e,s):dM(n,t,e,i,s,r)}function Wg(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return zc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],s)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,s))}),i&&!a?[]:r}var hM={modes:{index(n,t,e,i){const s=Ii(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?$l(n,s,r,i,o):zl(n,s,r,!1,i,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,i){const s=Ii(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?$l(n,s,r,i,o):zl(n,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,i){const s=Ii(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return $l(n,s,r,i,o)},nearest(n,t,e,i){const s=Ii(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return zl(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=Ii(t,n);return Wg(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=Ii(t,n);return Wg(n,s,"y",e.intersect,i)}}};const nw=["left","top","right","bottom"];function Qs(n,t){return n.filter(e=>e.pos===t)}function Gg(n,t){return n.filter(e=>nw.indexOf(e.pos)===-1&&e.box.axis===t)}function Js(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function fM(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function pM(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!nw.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function gM(n,t){const e=pM(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*i:c&&t.availableWidth,a.height=s):(a.width=i,a.height=d?d*s:c&&t.availableHeight)}return e}function mM(n){const t=fM(n),e=Js(t.filter(l=>l.box.fullSize),!0),i=Js(Qs(t,"left"),!0),s=Js(Qs(t,"right")),r=Js(Qs(t,"top"),!0),o=Js(Qs(t,"bottom")),a=Gg(t,"x"),c=Gg(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:Qs(t,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function Kg(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function iw(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function yM(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!rt(s)){e.size&&(n[s]-=e.size);const h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[s]+=e.size}r.getPadding&&iw(o,r.getPadding());const a=Math.max(0,t.outerWidth-Kg(o,n,"left","right")),c=Math.max(0,t.outerHeight-Kg(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function vM(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function _M(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function dr(n,t,e,i){const s=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,_M(a.horizontal,t));const{same:h,other:f}=yM(t,e,a,i);l|=h&&s.length,d=d||f,c.fullSize||s.push(a)}return l&&dr(s,t,e,i)||d}function Zo(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function Yg(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=i[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Hr(l.start)&&(o=l.start),c.fullSize?Zo(c,s.left,o,e.outerWidth-s.right-s.left,f):Zo(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Hr(l.start)&&(r=l.start),c.fullSize?Zo(c,r,s.top,f,e.outerHeight-s.bottom-s.top):Zo(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var oe={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=ce(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=mM(n.boxes),c=a.vertical,l=a.horizontal;dt(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const d=c.reduce((_,y)=>y.box.options&&y.box.options.display===!1?_:_+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},s);iw(f,ce(i));const g=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),v=gM(c.concat(l),h);dr(a.fullSize,g,h,v),dr(c,g,h,v),dr(l,g,h,v)&&dr(c,g,h,v),vM(g),Yg(a.leftAndTop,g,h,v),g.x+=g.w,g.y+=g.h,Yg(a.rightAndBottom,g,h,v),n.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},dt(a.chartArea,_=>{const y=_.box;Object.assign(y,n.chartArea),y.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class sw{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class bM extends sw{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Sa="$chartjs",wM={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Xg=n=>n===null||n==="";function EM(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[Sa]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Xg(s)){const r=Mg(n,"width");r!==void 0&&(n.width=r)}if(Xg(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Mg(n,"height");r!==void 0&&(n.height=r)}return n}const rw=ID?{passive:!0}:!1;function IM(n,t,e){n&&n.addEventListener(t,e,rw)}function TM(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,rw)}function AM(n,t){const e=wM[n.type]||n.type,{x:i,y:s}=Ii(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function ic(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function SM(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ic(a.addedNodes,i),o=o&&!ic(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function xM(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ic(a.removedNodes,i),o=o&&!ic(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Kr=new Map;let Qg=0;function ow(){const n=window.devicePixelRatio;n!==Qg&&(Qg=n,Kr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function PM(n,t){Kr.size||window.addEventListener("resize",ow),Kr.set(n,t)}function kM(n){Kr.delete(n),Kr.size||window.removeEventListener("resize",ow)}function CM(n,t,e){const i=n.canvas,s=i&&Ah(i);if(!s)return;const r=Nb((a,c)=>{const l=s.clientWidth;e(a,c),l<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(s),PM(n,r),o}function jl(n,t,e){e&&e.disconnect(),t==="resize"&&kM(n)}function RM(n,t,e){const i=n.canvas,s=Nb(r=>{n.ctx!==null&&e(AM(r,n))},n);return IM(i,t,s),s}class DM extends sw{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(EM(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[Sa])return!1;const i=e[Sa].initial;["height","width"].forEach(r=>{const o=i[r];nt(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[Sa],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:SM,detach:xM,resize:CM}[e]||RM;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:jl,detach:jl,resize:jl}[e]||TM)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return ED(t,e,i,s)}isAttached(t){const e=t&&Ah(t);return!!(e&&e.isConnected)}}function MM(n){return!Th()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?bM:DM}class Fe{constructor(){z(this,"x");z(this,"y");z(this,"active",!1);z(this,"options");z(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return bs(this.x)&&bs(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}z(Fe,"defaults",{}),z(Fe,"defaultRoutes");function OM(n,t){const e=n.options.ticks,i=NM(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?VM(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return FM(t,l,r,o/s),l;const d=LM(r,t,s);if(o>0){let h,f;const g=o>1?Math.round((c-a)/(o-1)):null;for(ta(t,l,d,nt(g)?0:a-g,a),h=0,f=o-1;h<f;h++)ta(t,l,d,r[h],r[h+1]);return ta(t,l,d,c,nt(g)?t.length:c+g),l}return ta(t,l,d),l}function NM(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function LM(n,t,e){const i=BM(n),s=t.length/e;if(!i)return Math.max(s,1);const r=AR(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function VM(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function FM(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function ta(n,t,e,i,s){const r=Q(i,0),o=Math.min(Q(s,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),s&&(c=s-i,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function BM(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const UM=n=>n==="left"?"right":n==="right"?"left":n,Jg=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,Zg=(n,t)=>Math.min(t||n,n);function tm(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function $M(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(s),l;if(!(e&&(i===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(s-1))/2,c+=s<t?l:-l,c<r-a||c>o+a)))return c}function zM(n,t){dt(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function Zs(n){return n.drawTicks?n.tickLength:0}function em(n,t){if(!n.display)return 0;const e=$t(n.font,t),i=ce(n.padding);return(It(n.text)?n.text.length:1)*e.lineHeight+i.height}function jM(n,t){return fi(n,{scale:t,type:"scale"})}function qM(n,t,e){return fi(n,{tick:e,index:t,type:"tick"})}function HM(n,t,e){let i=vh(n);return(e&&t!=="right"||!e&&t==="right")&&(i=UM(i)),i}function WM(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,g,v;const _=o-s,y=a-r;if(n.isHorizontal()){if(g=ne(i,r,a),rt(e)){const I=Object.keys(e)[0],k=e[I];v=d[I].getPixelForValue(k)+_-t}else e==="center"?v=(l.bottom+l.top)/2+_-t:v=Jg(n,e,t);f=a-r}else{if(rt(e)){const I=Object.keys(e)[0],k=e[I];g=d[I].getPixelForValue(k)-y+t}else e==="center"?g=(l.left+l.right)/2-y+t:g=Jg(n,e,t);v=ne(i,o,s),h=e==="left"?-Ot:Ot}return{titleX:g,titleY:v,maxWidth:f,rotation:h}}class Hi extends Fe{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=Ie(t,Number.POSITIVE_INFINITY),e=Ie(e,Number.NEGATIVE_INFINITY),i=Ie(i,Number.POSITIVE_INFINITY),s=Ie(s,Number.NEGATIVE_INFINITY),{min:Ie(t,i),max:Ie(e,s),minDefined:Ct(t),maxDefined:Ct(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:Ie(e,Ie(i,e)),max:Ie(i,Ie(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){mt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=tD(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?tm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=OM(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){mt(this.options.afterUpdate,[this])}beforeSetDimensions(){mt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){mt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),mt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){mt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=mt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){mt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){mt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=Zg(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,g=qt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:g/(i-1),h+6>a&&(a=g/(i-(t.offset?.5:1)),c=this.maxHeight-Zs(t.grid)-e.padding-em(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=mh(Math.min(Math.asin(qt((d.highest.height+6)/a,-1,1)),Math.asin(qt(c/l,-1,1))-Math.asin(qt(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){mt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){mt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=em(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Zs(r)+c):(t.height=this.maxHeight,t.width=Zs(r)+c),i.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),g=i.padding*2,v=Ne(this.labelRotation),_=Math.cos(v),y=Math.sin(v);if(a){const I=i.mirror?0:y*h.width+_*f.height;t.height=Math.min(this.maxHeight,t.height+I+g)}else{const I=i.mirror?0:_*h.width+y*f.height;t.width=Math.min(this.maxWidth,t.width+I+g)}this._calculatePadding(l,d,y,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,g=0;c?l?(f=s*t.width,g=i*e.height):(f=i*t.height,g=s*e.width):r==="start"?g=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,g=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((g-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){mt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)nt(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=tm(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/Zg(e,i));let l=0,d=0,h,f,g,v,_,y,I,k,R,D,O;for(h=0;h<e;h+=c){if(v=t[h].label,_=this._resolveTickFontOptions(h),s.font=y=_.string,I=r[y]=r[y]||{data:{},gc:[]},k=_.lineHeight,R=D=0,!nt(v)&&!It(v))R=ec(s,I.data,I.gc,R,v),D=k;else if(It(v))for(f=0,g=v.length;f<g;++f)O=v[f],!nt(O)&&!It(O)&&(R=ec(s,I.data,I.gc,R,O),D+=k);o.push(R),a.push(D),l=Math.max(R,l),d=Math.max(D,d)}zM(r,e);const L=o.indexOf(l),T=a.indexOf(d),b=E=>({width:o[E]||0,height:a[E]||0});return{first:b(0),last:b(e-1),widest:b(L),highest:b(T),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return kR(this._alignToPixels?_i(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=qM(this.getContext(),t,i))}return this.$context||(this.$context=jM(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Ne(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=Zs(r),g=[],v=a.setContext(this.getContext()),_=v.display?v.width:0,y=_/2,I=function(ht){return _i(i,ht,_)};let k,R,D,O,L,T,b,E,S,x,P,A;if(o==="top")k=I(this.bottom),T=this.bottom-f,E=k-y,x=I(t.top)+y,A=t.bottom;else if(o==="bottom")k=I(this.top),x=t.top,A=I(t.bottom)-y,T=k+y,E=this.top+f;else if(o==="left")k=I(this.right),L=this.right-f,b=k-y,S=I(t.left)+y,P=t.right;else if(o==="right")k=I(this.left),S=t.left,P=I(t.right)-y,L=k+y,b=this.left+f;else if(e==="x"){if(o==="center")k=I((t.top+t.bottom)/2+.5);else if(rt(o)){const ht=Object.keys(o)[0],ft=o[ht];k=I(this.chart.scales[ht].getPixelForValue(ft))}x=t.top,A=t.bottom,T=k+y,E=T+f}else if(e==="y"){if(o==="center")k=I((t.left+t.right)/2);else if(rt(o)){const ht=Object.keys(o)[0],ft=o[ht];k=I(this.chart.scales[ht].getPixelForValue(ft))}L=k-y,b=L-f,S=t.left,P=t.right}const ot=Q(s.ticks.maxTicksLimit,h),et=Math.max(1,Math.ceil(h/ot));for(R=0;R<h;R+=et){const ht=this.getContext(R),ft=r.setContext(ht),Wt=a.setContext(ht),Nt=ft.lineWidth,en=ft.color,Wi=Wt.dash||[],le=Wt.dashOffset,xt=ft.tickWidth,nn=ft.tickColor,Ce=ft.tickBorderDash||[],sn=ft.tickBorderDashOffset;D=$M(this,R,c),D!==void 0&&(O=_i(i,D,Nt),l?L=b=S=P=O:T=E=x=A=O,g.push({tx1:L,ty1:T,tx2:b,ty2:E,x1:S,y1:x,x2:P,y2:A,width:Nt,color:en,borderDash:Wi,borderDashOffset:le,tickWidth:xt,tickColor:nn,tickBorderDash:Ce,tickBorderDashOffset:sn}))}return this._ticksLength=h,this._borderValue=k,g}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=Zs(i.grid),g=f+d,v=h?-d:g,_=-Ne(this.labelRotation),y=[];let I,k,R,D,O,L,T,b,E,S,x,P,A="middle";if(s==="top")L=this.bottom-v,T=this._getXAxisLabelAlignment();else if(s==="bottom")L=this.top+v,T=this._getXAxisLabelAlignment();else if(s==="left"){const et=this._getYAxisLabelAlignment(f);T=et.textAlign,O=et.x}else if(s==="right"){const et=this._getYAxisLabelAlignment(f);T=et.textAlign,O=et.x}else if(e==="x"){if(s==="center")L=(t.top+t.bottom)/2+g;else if(rt(s)){const et=Object.keys(s)[0],ht=s[et];L=this.chart.scales[et].getPixelForValue(ht)+g}T=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")O=(t.left+t.right)/2-g;else if(rt(s)){const et=Object.keys(s)[0],ht=s[et];O=this.chart.scales[et].getPixelForValue(ht)}T=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?A="top":c==="end"&&(A="bottom"));const ot=this._getLabelSizes();for(I=0,k=a.length;I<k;++I){R=a[I],D=R.label;const et=r.setContext(this.getContext(I));b=this.getPixelForTick(I)+r.labelOffset,E=this._resolveTickFontOptions(I),S=E.lineHeight,x=It(D)?D.length:1;const ht=x/2,ft=et.color,Wt=et.textStrokeColor,Nt=et.textStrokeWidth;let en=T;o?(O=b,T==="inner"&&(I===k-1?en=this.options.reverse?"left":"right":I===0?en=this.options.reverse?"right":"left":en="center"),s==="top"?l==="near"||_!==0?P=-x*S+S/2:l==="center"?P=-ot.highest.height/2-ht*S+S:P=-ot.highest.height+S/2:l==="near"||_!==0?P=S/2:l==="center"?P=ot.highest.height/2-ht*S:P=ot.highest.height-x*S,h&&(P*=-1),_!==0&&!et.showLabelBackdrop&&(O+=S/2*Math.sin(_))):(L=b,P=(1-x)*S/2);let Wi;if(et.showLabelBackdrop){const le=ce(et.backdropPadding),xt=ot.heights[I],nn=ot.widths[I];let Ce=P-le.top,sn=0-le.left;switch(A){case"middle":Ce-=xt/2;break;case"bottom":Ce-=xt;break}switch(T){case"center":sn-=nn/2;break;case"right":sn-=nn;break;case"inner":I===k-1?sn-=nn:I>0&&(sn-=nn/2);break}Wi={left:sn,top:Ce,width:nn+le.width,height:xt+le.height,color:et.backdropColor}}y.push({label:D,font:E,textOffset:P,options:{rotation:_,color:ft,strokeColor:Wt,strokeWidth:Nt,textAlign:en,textBaseline:A,translation:[O,L],backdrop:Wi}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Ne(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?s?(d=this.right+r,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?s?(d=this.left+r,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const c=s[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=_i(t,this.left,o)-o/2,d=_i(t,this.right,a)+a/2,h=f=c):(h=_i(t,this.top,o)-o/2,f=_i(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Bc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;$i(i,l,0,d,c,a)}s&&Uc(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=$t(i.font),o=ce(i.padding),a=i.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||rt(e)?(c+=o.bottom,It(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=WM(this,c,e,a);$i(t,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:HM(a,e,s),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Q(t.grid&&t.grid.z,-1),s=Q(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Hi.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return $t(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class ea{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;YM(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,GM(t,o,i),this.override&&Tt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Tt[s]&&(delete Tt[s][i],this.override&&delete Ui[i])}}function GM(n,t,e){const i=qr(Object.create(null),[e?Tt.get(e):{},Tt.get(t),n.defaults]);Tt.set(t,i),n.defaultRoutes&&KM(t,n.defaultRoutes),n.descriptors&&Tt.describe(t,n.descriptors)}function KM(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Tt.route(r,s,c,a)})}function YM(n){return"id"in n&&"defaults"in n}class XM{constructor(){this.controllers=new ea(Le,"datasets",!0),this.elements=new ea(Fe,"elements"),this.plugins=new ea(Object,"plugins"),this.scales=new ea(Hi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):dt(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=gh(t);mt(i["before"+s],[],i),e[t](i),mt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Ue=new XM;class QM{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],c=[e,s,r.options];if(mt(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){nt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Q(i.options&&i.options.plugins,{}),r=JM(i);return s===!1&&!e?[]:t1(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function JM(n){const t={},e=[],i=Object.keys(Ue.plugins.items);for(let r=0;r<i.length;r++)e.push(Ue.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function ZM(n,t){return!t&&n===!1?null:n===!0?{}:n}function t1(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=ZM(i[c],s);l!==null&&r.push({plugin:a,options:e1(n.config,{plugin:a,local:e[c]},l,o)})}return r}function e1(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ku(n,t){const e=Tt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function n1(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function i1(n,t){return n===t?"_index_":"_value_"}function nm(n){if(n==="x"||n==="y"||n==="r")return n}function s1(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Cu(n,...t){if(nm(n))return n;for(const e of t){const i=e.axis||s1(e.position)||n.length>1&&nm(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function im(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function r1(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return im(n,"x",e[0])||im(n,"y",e[0])}return{}}function o1(n,t){const e=Ui[n.type]||{scales:{}},i=t.scales||{},s=ku(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!rt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Cu(o,a,r1(o,n),Tt.scales[a.type]),l=i1(c,s),d=e.scales||{};r[o]=Ar(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||ku(a,t),d=(Ui[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=n1(h,c),g=o[f+"AxisID"]||f;r[g]=r[g]||Object.create(null),Ar(r[g],[{axis:f},i[g],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Ar(a,[Tt.scales[a.type],Tt.scale])}),r}function aw(n){const t=n.options||(n.options={});t.plugins=Q(t.plugins,{}),t.scales=o1(n,t)}function cw(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function a1(n){return n=n||{},n.data=cw(n.data),aw(n),n}const sm=new Map,lw=new Set;function na(n,t){let e=sm.get(n);return e||(e=t(),sm.set(n,e),lw.add(e)),e}const tr=(n,t,e)=>{const i=ai(t,e);i!==void 0&&n.add(i)};class c1{constructor(t){this._config=a1(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=cw(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),aw(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return na(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return na(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return na(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return na(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>tr(c,t,h))),d.forEach(h=>tr(c,s,h)),d.forEach(h=>tr(c,Ui[r]||{},h)),d.forEach(h=>tr(c,Tt,h)),d.forEach(h=>tr(c,Su,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),lw.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Ui[e]||{},Tt.datasets[e]||{},{type:e},Tt,Su]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=rm(this._resolverCache,t,s);let c=o;if(u1(o,e)){r.$shared=!1,i=ci(i)?i():i;const l=this.createResolver(t,i,a);c=ws(o,i,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,i=[""],s){const{resolver:r}=rm(this._resolverCache,t,i);return rt(e)?ws(r,e,void 0,s):r}}function rm(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:wh(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const l1=n=>rt(n)&&Object.getOwnPropertyNames(n).some(t=>ci(n[t]));function u1(n,t){const{isScriptable:e,isIndexable:i}=$b(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(ci(a)||l1(a))||o&&It(a))return!0}return!1}var d1="4.5.1";const h1=["top","bottom","left","right","chartArea"];function om(n,t){return n==="top"||n==="bottom"||h1.indexOf(n)===-1&&t==="x"}function am(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function cm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),mt(e&&e.onComplete,[n],t)}function f1(n){const t=n.chart,e=t.options.animation;mt(e&&e.onProgress,[n],t)}function uw(n){return Th()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const xa={},lm=n=>{const t=uw(n);return Object.values(xa).filter(e=>e.canvas===t).pop()};function p1(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function g1(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class qe{static register(...t){Ue.add(...t),um()}static unregister(...t){Ue.remove(...t),um()}constructor(t,e){const i=this.config=new c1(e),s=uw(t),r=lm(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||MM(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=mR(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new QM,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=MR(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],xa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}ln.listen(this,"complete",cm),ln.listen(this,"progress",f1),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return nt(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Ue}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Dg(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return kg(this.canvas,this.ctx),this}stop(){return ln.stop(this),this}resize(t,e){ln.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Dg(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),mt(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};dt(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=Cu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),dt(r,o=>{const a=o.options,c=a.id,l=Cu(c,a),d=Q(a.type,o.dtype);(a.position===void 0||om(a.position,l)!==om(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===d)h=i[c];else{const f=Ue.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),dt(s,(o,a)=>{o||delete i[a]}),dt(i,o=>{oe.configure(this,o,o.options),oe.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(am("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||ku(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=Ue.getController(a),{datasetElementType:l,dataElementType:d}=Tt.datasets[a];Object.assign(c,{dataElementType:Ue.getElement(d),datasetElementType:l&&Ue.getElement(l)}),o.controller=new c(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){dt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||dt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(am("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){dt(this.scales,t=>{oe.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!bg(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;p1(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!bg(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;oe.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],dt(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,ci(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ln.has(this)?this.attached&&!ln.running(this)&&ln.start(this):(this.draw(),cm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=Jb(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&Bc(e,s),t.controller.draw(),s&&Uc(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return bn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=hM.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=fi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Hr(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ln.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),kg(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete xa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};dt(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},s=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){dt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},dt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Ja(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),c=ER(t),l=g1(t,this._lastEvent,i,c);i&&(this._lastEvent=null,mt(r.onHover,[t,a,this],this),c&&mt(r.onClick,[t,a,this],this));const d=!Ja(a,s);return(d||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,d}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}z(qe,"defaults",Tt),z(qe,"instances",xa),z(qe,"overrides",Ui),z(qe,"registry",Ue),z(qe,"version",d1),z(qe,"getChart",lm);function um(){return dt(qe.instances,n=>n._plugins.invalidate())}function m1(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,se(i-e));if(n.beginPath(),n.arc(s,r,o-l/2,i+h/2,e-h/2),a>0){const f=Math.min(l/a,se(i-e));n.arc(s,r,a+l/2,e-f/2,i+f/2,!0)}else{const f=Math.min(l/2,o*se(i-e));if(d==="round")n.arc(s,r,f,e-lt/2,i+lt/2,!0);else if(d==="bevel"){const g=2*f*f,v=-g*Math.cos(e+lt/2)+s,_=-g*Math.sin(e+lt/2)+r,y=g*Math.cos(i+lt/2)+s,I=g*Math.sin(i+lt/2)+r;n.lineTo(v,_),n.lineTo(y,I)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function y1(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=s/a;n.beginPath(),n.arc(r,o,a,i-l,e+l),c>s?(l=s/c,n.arc(r,o,c,e+l,i-l,!0)):n.arc(r,o,s,e+Ot,i-Ot),n.closePath(),n.clip()}function v1(n){return bh(n,["outerStart","outerEnd","innerStart","innerEnd"])}function _1(n,t,e,i){const s=v1(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=c=>{const l=(e-Math.min(r,c))*i/2;return qt(c,0,Math.min(r,l))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:qt(s.innerStart,0,o),innerEnd:qt(s.innerEnd,0,o)}}function Ji(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function sc(n,t,e,i,s,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+i+e-l,0),f=d>0?d+i+e+l:0;let g=0;const v=s-c;if(i){const et=d>0?d-i:0,ht=h>0?h-i:0,ft=(et+ht)/2,Wt=ft!==0?v*ft/(ft+i):v;g=(v-Wt)/2}const _=Math.max(.001,v*h-e/lt)/h,y=(v-_)/2,I=c+y+g,k=s-y-g,{outerStart:R,outerEnd:D,innerStart:O,innerEnd:L}=_1(t,f,h,k-I),T=h-R,b=h-D,E=I+R/T,S=k-D/b,x=f+O,P=f+L,A=I+O/x,ot=k-L/P;if(n.beginPath(),r){const et=(E+S)/2;if(n.arc(o,a,h,E,et),n.arc(o,a,h,et,S),D>0){const Nt=Ji(b,S,o,a);n.arc(Nt.x,Nt.y,D,S,k+Ot)}const ht=Ji(P,k,o,a);if(n.lineTo(ht.x,ht.y),L>0){const Nt=Ji(P,ot,o,a);n.arc(Nt.x,Nt.y,L,k+Ot,ot+Math.PI)}const ft=(k-L/f+(I+O/f))/2;if(n.arc(o,a,f,k-L/f,ft,!0),n.arc(o,a,f,ft,I+O/f,!0),O>0){const Nt=Ji(x,A,o,a);n.arc(Nt.x,Nt.y,O,A+Math.PI,I-Ot)}const Wt=Ji(T,I,o,a);if(n.lineTo(Wt.x,Wt.y),R>0){const Nt=Ji(T,E,o,a);n.arc(Nt.x,Nt.y,R,I-Ot,E)}}else{n.moveTo(o,a);const et=Math.cos(E)*h+o,ht=Math.sin(E)*h+a;n.lineTo(et,ht);const ft=Math.cos(S)*h+o,Wt=Math.sin(S)*h+a;n.lineTo(ft,Wt)}n.closePath()}function b1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){sc(n,t,e,i,c,s);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%bt||bt))}return sc(n,t,e,i,c,s),n.fill(),c}function w1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:g}=c,v=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,v?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let _=t.endAngle;if(r){sc(n,t,e,i,_,s);for(let y=0;y<r;++y)n.stroke();isNaN(a)||(_=o+(a%bt||bt))}v&&y1(n,t,_),c.selfJoin&&_-o>=lt&&g===0&&d!=="miter"&&m1(n,t,_),r||(sc(n,t,e,i,_,s),n.stroke())}class hr extends Fe{constructor(e){super();z(this,"circumference");z(this,"endAngle");z(this,"fullCircles");z(this,"innerRadius");z(this,"outerRadius");z(this,"pixelMargin");z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=Rb(r,{x:e,y:i}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),g=(this.options.spacing+this.options.borderWidth)/2,v=Q(f,l-c),_=Wr(o,c,l)&&c!==l,y=v>=bt||_,I=vn(a,d+g,h+g);return y&&I}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:i+Math.cos(h)*f,y:s+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>bt?Math.floor(s/bt):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(lt,s||0)),d=r*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,b1(e,this,d,o,a),w1(e,this,d,o,a),e.restore()}}z(hr,"id","arc"),z(hr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),z(hr,"defaultRoutes",{backgroundColor:"backgroundColor"}),z(hr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function dw(n,t,e=t){n.lineCap=Q(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Q(e.borderDash,t.borderDash)),n.lineDashOffset=Q(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Q(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Q(e.borderWidth,t.borderWidth),n.strokeStyle=Q(e.borderColor,t.borderColor)}function E1(n,t,e){n.lineTo(e.x,e.y)}function I1(n){return n.stepped?HR:n.tension||n.cubicInterpolationMode==="monotone"?WR:E1}function hw(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,c=Math.max(s,o),l=Math.min(r,a),d=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!d?i+l-c:l-c}}function T1(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:c,ilen:l}=hw(s,e,i),d=I1(r);let{move:h=!0,reverse:f}=i||{},g,v,_;for(g=0;g<=l;++g)v=s[(a+(f?l-g:g))%o],!v.skip&&(h?(n.moveTo(v.x,v.y),h=!1):d(n,_,v,f,r.stepped),_=v);return c&&(v=s[(a+(f?l:0))%o],d(n,_,v,f,r.stepped)),!!c}function A1(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=hw(s,e,i),{move:c=!0,reverse:l}=i||{};let d=0,h=0,f,g,v,_,y,I;const k=D=>(o+(l?a-D:D))%r,R=()=>{_!==y&&(n.lineTo(d,y),n.lineTo(d,_),n.lineTo(d,I))};for(c&&(g=s[k(0)],n.moveTo(g.x,g.y)),f=0;f<=a;++f){if(g=s[k(f)],g.skip)continue;const D=g.x,O=g.y,L=D|0;L===v?(O<_?_=O:O>y&&(y=O),d=(h*d+D)/++h):(R(),n.lineTo(D,O),v=L,h=0,_=y=O),I=O}R()}function Ru(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?A1:T1}function S1(n){return n.stepped?TD:n.tension||n.cubicInterpolationMode==="monotone"?AD:Ti}function x1(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),dw(n,t.options),n.stroke(s)}function P1(n,t,e,i){const{segments:s,options:r}=t,o=Ru(t);for(const a of s)dw(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const k1=typeof Path2D=="function";function C1(n,t,e,i){k1&&!t.options.segment?x1(n,t,e,i):P1(n,t,e,i)}class jn extends Fe{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;mD(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=RD(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=Qb(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=S1(i);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],g=r[h],v=r[f];if(g===v){a.push(g);continue}const _=Math.abs((s-g[e])/(v[e]-g[e])),y=c(g,v,_,i.stepped);y[e]=t[e],a.push(y)}return a.length===1?a[0]:a}pathSegment(t,e,i){return Ru(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=Ru(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),C1(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}z(jn,"id","line"),z(jn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),z(jn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),z(jn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function dm(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class Pa extends Fe{constructor(e){super();z(this,"parsed");z(this,"skip");z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return dm(this,e,"x",i)}inYRange(e,i){return dm(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!bn(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,xu(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}z(Pa,"id","point"),z(Pa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),z(Pa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function fw(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,s),c=Math.max(e,s),l=i-h,d=i+h):(h=r/2,a=e-h,c=e+h,l=Math.min(i,s),d=Math.max(i,s)),{left:a,top:l,right:c,bottom:d}}function qn(n,t,e,i){return n?0:qt(t,e,i)}function R1(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=Ub(i);return{t:qn(s.top,r.top,0,e),r:qn(s.right,r.right,0,t),b:qn(s.bottom,r.bottom,0,e),l:qn(s.left,r.left,0,t)}}function D1(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Mi(s),o=Math.min(t,e),a=n.borderSkipped,c=i||rt(s);return{topLeft:qn(!c||a.top||a.left,r.topLeft,0,o),topRight:qn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:qn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:qn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function M1(n){const t=fw(n),e=t.right-t.left,i=t.bottom-t.top,s=R1(n,e/2,i/2),r=D1(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function ql(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&fw(n,i);return a&&(s||vn(t,a.left,a.right))&&(r||vn(e,a.top,a.bottom))}function O1(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function N1(n,t){n.rect(t.x,t.y,t.w,t.h)}function Hl(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class ka extends Fe{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=M1(this),a=O1(o.radius)?Gr:N1;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Hl(o,e,r)),t.clip(),a(t,Hl(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Hl(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return ql(this,t,e,i)}inXRange(t,e){return ql(this,t,null,e)}inYRange(t,e){return ql(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}z(ka,"id","bar"),z(ka,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),z(ka,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var L1=Object.freeze({__proto__:null,ArcElement:hr,BarElement:ka,LineElement:jn,PointElement:Pa});const Du=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],hm=Du.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function pw(n){return Du[n%Du.length]}function gw(n){return hm[n%hm.length]}function V1(n,t){return n.borderColor=pw(t),n.backgroundColor=gw(t),++t}function F1(n,t){return n.backgroundColor=n.data.map(()=>pw(t++)),t}function B1(n,t){return n.backgroundColor=n.data.map(()=>gw(t++)),t}function U1(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof xi?t=F1(e,t):s instanceof kr?t=B1(e,t):s&&(t=V1(e,t))}}function fm(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function $1(n){return n&&(n.borderColor||n.backgroundColor)}function z1(){return Tt.borderColor!=="rgba(0,0,0,0.1)"||Tt.backgroundColor!=="rgba(0,0,0,0.1)"}var j1={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=fm(i)||$1(s)||r&&fm(r)||z1();if(!e.forceOverride&&o)return;const a=U1(n);i.forEach(a)}};function q1(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,g,v,_;for(o[c++]=n[d],h=0;h<r-2;h++){let y=0,I=0,k;const R=Math.floor((h+1)*a)+1+t,D=Math.min(Math.floor((h+2)*a)+1,e)+t,O=D-R;for(k=R;k<D;k++)y+=n[k].x,I+=n[k].y;y/=O,I/=O;const L=Math.floor(h*a)+1+t,T=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:E}=n[d];for(g=v=-1,k=L;k<T;k++)v=.5*Math.abs((b-y)*(n[k].y-E)-(b-n[k].x)*(I-E)),v>g&&(g=v,f=n[k],_=k);o[c++]=f,d=_}return o[c++]=n[l],o}function H1(n,t,e,i){let s=0,r=0,o,a,c,l,d,h,f,g,v,_;const y=[],I=t+e-1,k=n[t].x,D=n[I].x-k;for(o=t;o<t+e;++o){a=n[o],c=(a.x-k)/D*i,l=a.y;const O=c|0;if(O===d)l<v?(v=l,h=o):l>_&&(_=l,f=o),s=(r*s+a.x)/++r;else{const L=o-1;if(!nt(h)&&!nt(f)){const T=Math.min(h,f),b=Math.max(h,f);T!==g&&T!==L&&y.push({...n[T],x:s}),b!==g&&b!==L&&y.push({...n[b],x:s})}o>0&&L!==g&&y.push(n[L]),y.push(a),d=O,r=0,v=_=l,h=f=g=o}}return y}function mw(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function pm(n){n.data.datasets.forEach(t=>{mw(t)})}function W1(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(i=qt(_n(t,r.axis,o).lo,0,e-1)),l?s=qt(_n(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var G1={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){pm(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,c=n.getDatasetMeta(r),l=o||s.data;if(ur([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=W1(c,l);const g=e.threshold||4*i;if(f<=g){mw(s);return}nt(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let v;switch(e.algorithm){case"lttb":v=q1(l,h,f,i,e);break;case"min-max":v=H1(l,h,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=v})},destroy(n){pm(n)}};function K1(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:c,end:l}=a;l=jc(c,l,s);const d=Mu(e,s[c],s[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:s[c],end:s[l]});continue}const h=Qb(t,d);for(const f of h){const g=Mu(e,r[f.start],r[f.end],f.loop),v=Xb(a,s,g);for(const _ of v)o.push({source:_,target:f,start:{[e]:gm(d,g,"start",Math.max)},end:{[e]:gm(d,g,"end",Math.min)}})}}return o}function Mu(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=se(s),r=se(r)),{property:n,start:s,end:r}}function Y1(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=jc(o,a,s);const c=s[o],l=s[a];i!==null?(r.push({x:c.x,y:i}),r.push({x:l.x,y:i})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function jc(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function gm(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function yw(n,t){let e=[],i=!1;return It(n)?(i=!0,e=n):e=Y1(n,t),e.length?new jn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function mm(n){return n&&n.fill!==!1}function X1(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Ct(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function Q1(n,t,e){const i=eO(n);if(rt(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Ct(s)&&Math.floor(s)===s?J1(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function J1(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function Z1(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:rt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function tO(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:rt(n)?i=n.value:i=t.getBaseValue(),i}function eO(n){const t=n.options,e=t.fill;let i=Q(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function nO(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=iO(t,e);a.push(yw({x:null,y:t.bottom},i));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)sO(s,o[d],a)}return new jn({points:s,options:{}})}function iO(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function sO(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:c}=rO(r,t,"x");if(!(!c||o&&a)){if(o)i.unshift(c);else if(n.push(c),!a)break}}n.push(...i)}function rO(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(vn(s,h,f)){a=s===h,c=s===f;break}}return{first:a,last:c,point:i}}class vw{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:bt},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function oO(n){const{chart:t,fill:e,line:i}=n;if(Ct(e))return aO(t,e);if(e==="stack")return nO(n);if(e==="shape")return!0;const s=cO(n);return s instanceof vw?s:yw(s,i)}function aO(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function cO(n){return(n.scale||{}).getPointPositionForValue?uO(n):lO(n)}function lO(n){const{scale:t={},fill:e}=n,i=Z1(e,t);if(Ct(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function uO(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=tO(e,t,r),a=[];if(i.grid.circular){const c=t.getPointPositionForValue(0,r);return new vw({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)a.push(t.getPointPositionForValue(c,o));return a}function Wl(n,t,e){const i=oO(t),{chart:s,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:g=h}=d||{},v=s.getDatasetMeta(r),_=Jb(s,v);i&&o.points.length&&(Bc(n,e),dO(n,{line:o,target:i,above:f,below:g,area:e,scale:a,axis:c,clip:_}),Uc(n))}function dO(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==s&&(l==="x"?(ym(n,i,o.top),Gl(n,{line:e,target:i,color:s,scale:a,property:l,clip:c}),n.restore(),n.save(),ym(n,i,o.bottom)):l==="y"&&(vm(n,i,o.left),Gl(n,{line:e,target:i,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),vm(n,i,o.right),d=s)),Gl(n,{line:e,target:i,color:d,scale:a,property:l,clip:c}),n.restore()}function ym(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[jc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function vm(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[jc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Gl(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,c=K1(e,i,s);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:g=r}={}}=l,v=i!==!0;n.save(),n.fillStyle=g,hO(n,o,a,v&&Mu(s,h,f)),n.beginPath();const _=!!e.pathSegment(n,l);let y;if(v){_?n.closePath():_m(n,i,f,s);const I=!!i.pathSegment(n,d,{move:_,reverse:!0});y=_&&I,y||_m(n,i,h,s)}n.closePath(),n.fill(y?"evenodd":"nonzero"),n.restore()}}function hO(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=s.top,d=a,h=s.bottom):(c=s.left,l=o,d=s.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function _m(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var fO={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,c;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof jn&&(c={visible:n.isDatasetVisible(o),index:o,fill:Q1(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=X1(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&Wl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;mm(r)&&Wl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!mm(i)||e.drawTime!=="beforeDatasetDraw"||Wl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const bm=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},pO=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class wm extends Fe{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=mt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=$t(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=bm(i,r);let l,d;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=s+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,g=-d;return this.legendItems.forEach((v,_)=>{const y=i+e/2+r.measureText(v.text).width;(_===0||l[l.length-1]+y+2*a>o)&&(h+=d,l[l.length-(_>0?0:1)]=0,g+=d,f++),c[_]={left:0,top:g,row:f,width:y,height:s},l[l.length-1]+=y+a}),h}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,g=0,v=0,_=0;return this.legendItems.forEach((y,I)=>{const{itemWidth:k,itemHeight:R}=gO(i,e,r,y,s);I>0&&g+R+2*a>d&&(h+=f+a,l.push({width:f,height:g}),v+=f+a,_++,f=g=0),c[I]={left:v,top:g,col:_,width:k,height:R},f=Math.max(f,k),g+=R+a}),h+=f,l.push({width:f,height:g}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=us(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=ne(i,this.left+s,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=ne(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+t+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=ne(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=ne(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Bc(t,this),this._draw(),Uc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Tt.color,c=us(t.rtl,this.left,this.width),l=$t(o.font),{padding:d}=o,h=l.size,f=h/2;let g;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:v,boxHeight:_,itemHeight:y}=bm(o,h),I=function(L,T,b){if(isNaN(v)||v<=0||isNaN(_)||_<0)return;s.save();const E=Q(b.lineWidth,1);if(s.fillStyle=Q(b.fillStyle,a),s.lineCap=Q(b.lineCap,"butt"),s.lineDashOffset=Q(b.lineDashOffset,0),s.lineJoin=Q(b.lineJoin,"miter"),s.lineWidth=E,s.strokeStyle=Q(b.strokeStyle,a),s.setLineDash(Q(b.lineDash,[])),o.usePointStyle){const S={radius:_*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:E},x=c.xPlus(L,v/2),P=T+f;Bb(s,S,x,P,o.pointStyleWidth&&v)}else{const S=T+Math.max((h-_)/2,0),x=c.leftForLtr(L,v),P=Mi(b.borderRadius);s.beginPath(),Object.values(P).some(A=>A!==0)?Gr(s,{x,y:S,w:v,h:_,radius:P}):s.rect(x,S,v,_),s.fill(),E!==0&&s.stroke()}s.restore()},k=function(L,T,b){$i(s,b.text,L,T+y/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},R=this.isHorizontal(),D=this._computeTitleHeight();R?g={x:ne(r,this.left+d,this.right-i[0]),y:this.top+d+D,line:0}:g={x:this.left+d,y:ne(r,this.top+D+d,this.bottom-e[0].height),line:0},Gb(this.ctx,t.textDirection);const O=y+d;this.legendItems.forEach((L,T)=>{s.strokeStyle=L.fontColor,s.fillStyle=L.fontColor;const b=s.measureText(L.text).width,E=c.textAlign(L.textAlign||(L.textAlign=o.textAlign)),S=v+f+b;let x=g.x,P=g.y;c.setWidth(this.width),R?T>0&&x+S+d>this.right&&(P=g.y+=O,g.line++,x=g.x=ne(r,this.left+d,this.right-i[g.line])):T>0&&P+O>this.bottom&&(x=g.x=x+e[g.line].width+d,g.line++,P=g.y=ne(r,this.top+D+d,this.bottom-e[g.line].height));const A=c.x(x);if(I(A,P,L),x=OR(E,x+v+f,R?x+S:this.right,t.rtl),k(c.x(x),P,L),R)g.x+=S+d;else if(typeof L.text!="string"){const ot=l.lineHeight;g.y+=_w(L,ot)+d}else g.y+=O}),Kb(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=$t(e.font),s=ce(e.padding);if(!e.display)return;const r=us(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=i.size/2,l=s.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=ne(t.align,h,this.right-f);else{const v=this.columnSizes.reduce((_,y)=>Math.max(_,y.height),0);d=l+ne(t.align,this.top,this.bottom-v-t.labels.padding-this._computeTitleHeight())}const g=ne(a,h,h+f);o.textAlign=r.textAlign(vh(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,$i(o,e.text,g,d,i)}_computeTitleHeight(){const t=this.options.title,e=$t(t.font),i=ce(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(vn(t,this.left,this.right)&&vn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],vn(t,s.left,s.left+s.width)&&vn(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!vO(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=pO(s,i);s&&!r&&mt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&mt(e.onHover,[t,i,this],this)}else i&&mt(e.onClick,[t,i,this],this)}}function gO(n,t,e,i,s){const r=mO(i,n,t,e),o=yO(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function mO(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function yO(n,t,e){let i=n;return typeof t.text!="string"&&(i=_w(t,e)),i}function _w(n,t){const e=n.text?n.text.length:0;return t*e}function vO(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var _O={id:"legend",_element:wm,start(n,t,e){const i=n.legend=new wm({ctx:n.ctx,options:e,chart:n});oe.configure(n,i,e),oe.addBox(n,i)},stop(n){oe.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;oe.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=ce(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class xh extends Fe{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=It(i.text)?i.text.length:1;this._padding=ce(i.padding);const r=s*$t(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=ne(a,i,r),h=e+t,l=r-i):(o.position==="left"?(d=i+t,h=ne(a,s,e),c=lt*-.5):(d=r-t,h=ne(a,e,s),c=lt*.5),l=s-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=$t(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);$i(t,e.text,0,0,i,{color:e.color,maxWidth:c,rotation:l,textAlign:vh(e.align),textBaseline:"middle",translation:[o,a]})}}function bO(n,t){const e=new xh({ctx:n.ctx,options:t,chart:n});oe.configure(n,e,t),oe.addBox(n,e),n.titleBlock=e}var wO={id:"title",_element:xh,start(n,t,e){bO(n,e)},stop(n){const t=n.titleBlock;oe.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;oe.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ia=new WeakMap;var EO={id:"subtitle",start(n,t,e){const i=new xh({ctx:n.ctx,options:e,chart:n});oe.configure(n,i,e),oe.addBox(n,i),ia.set(n,i)},stop(n){oe.removeBox(n,ia.get(n)),ia.delete(n)},beforeUpdate(n,t,e){const i=ia.get(n);oe.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const fr={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();i.add(c.x),s+=c.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,c)=>a+c)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Au(t,l);d<s&&(s=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,i=c.y}return{x:e,y:i}}};function Be(n,t){return t&&(It(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function un(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function IO(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Em(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=$t(t.bodyFont),l=$t(t.titleFont),d=$t(t.footerFont),h=r.length,f=s.length,g=i.length,v=ce(t.padding);let _=v.height,y=0,I=i.reduce((D,O)=>D+O.before.length+O.lines.length+O.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,h&&(_+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),I){const D=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;_+=g*D+(I-g)*c.lineHeight+(I-1)*t.bodySpacing}f&&(_+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let k=0;const R=function(D){y=Math.max(y,e.measureText(D).width+k)};return e.save(),e.font=l.string,dt(n.title,R),e.font=c.string,dt(n.beforeBody.concat(n.afterBody),R),k=t.displayColors?o+2+t.boxPadding:0,dt(i,D=>{dt(D.before,R),dt(D.lines,R),dt(D.after,R)}),k=0,e.font=d.string,dt(n.footer,R),e.restore(),y+=v.width,{width:y,height:_}}function TO(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function AO(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function SO(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),AO(l,n,t,e)&&(l="center"),l}function Im(n,t,e){const i=e.yAlign||t.yAlign||TO(n,e);return{xAlign:e.xAlign||t.xAlign||SO(n,t,e,i),yAlign:i}}function xO(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function PO(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Tm(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=s+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:g}=Mi(o);let v=xO(t,a);const _=PO(t,c,l);return c==="center"?a==="left"?v+=l:a==="right"&&(v-=l):a==="left"?v-=Math.max(d,f)+s:a==="right"&&(v+=Math.max(h,g)+s),{x:qt(v,0,i.width-t.width),y:qt(_,0,i.height-t.height)}}function sa(n,t,e){const i=ce(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Am(n){return Be([],un(n))}function kO(n,t,e){return fi(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Sm(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const bw={beforeTitle:an,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:an,beforeBody:an,beforeLabel:an,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return nt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:an,afterBody:an,beforeFooter:an,footer:an,afterFooter:an};function me(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?bw[t].call(e,i):s}class Ou extends Fe{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new Zb(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=kO(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=me(i,"beforeTitle",this,t),r=me(i,"title",this,t),o=me(i,"afterTitle",this,t);let a=[];return a=Be(a,un(s)),a=Be(a,un(r)),a=Be(a,un(o)),a}getBeforeBody(t,e){return Am(me(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return dt(t,r=>{const o={before:[],lines:[],after:[]},a=Sm(i,r);Be(o.before,un(me(a,"beforeLabel",this,r))),Be(o.lines,me(a,"label",this,r)),Be(o.after,un(me(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Am(me(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=me(i,"beforeFooter",this,t),r=me(i,"footer",this,t),o=me(i,"afterFooter",this,t);let a=[];return a=Be(a,un(s)),a=Be(a,un(r)),a=Be(a,un(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(IO(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,i))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,i))),dt(a,d=>{const h=Sm(t.callbacks,d);s.push(me(h,"labelColor",this,d)),r.push(me(h,"labelPointStyle",this,d)),o.push(me(h,"labelTextColor",this,d))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=fr[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=Em(this,i),l=Object.assign({},a,c),d=Im(this.chart,i,l),h=Tm(i,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Mi(a),{x:f,y:g}=t,{width:v,height:_}=e;let y,I,k,R,D,O;return r==="center"?(D=g+_/2,s==="left"?(y=f,I=y-o,R=D+o,O=D-o):(y=f+v,I=y+o,R=D-o,O=D+o),k=y):(s==="left"?I=f+Math.max(c,d)+o:s==="right"?I=f+v-Math.max(l,h)-o:I=this.caretX,r==="top"?(R=g,D=R-o,y=I-o,k=I+o):(R=g+_,D=R+o,y=I+o,k=I-o),O=R),{x1:y,x2:I,x3:k,y1:R,y2:D,y3:O}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=us(i.rtl,this.x,this.width);for(t.x=sa(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=$t(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,d=$t(r.bodyFont),h=sa(this,"left",r),f=s.x(h),g=c<d.lineHeight?(d.lineHeight-c)/2:0,v=e.y+g;if(r.usePointStyle){const _={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},y=s.leftForLtr(f,l)+l/2,I=v+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,xu(t,_,y,I),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,xu(t,_,y,I)}else{t.lineWidth=rt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(f,l),y=s.leftForLtr(s.xPlus(f,1),l-2),I=Mi(o.borderRadius);Object.values(I).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Gr(t,{x:_,y:v,w:l,h:c,radius:I}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Gr(t,{x:y,y:v+1,w:l-2,h:c-2,radius:I}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,v,l,c),t.strokeRect(_,v,l,c),t.fillStyle=o.backgroundColor,t.fillRect(y,v+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=i,h=$t(i.bodyFont);let f=h.lineHeight,g=0;const v=us(i.rtl,this.x,this.width),_=function(b){e.fillText(b,v.x(t.x+g),t.y+f/2),t.y+=f+r},y=v.textAlign(o);let I,k,R,D,O,L,T;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=sa(this,y,i),e.fillStyle=i.bodyColor,dt(this.beforeBody,_),g=a&&y!=="right"?o==="center"?l/2+d:l+2+d:0,D=0,L=s.length;D<L;++D){for(I=s[D],k=this.labelTextColors[D],e.fillStyle=k,dt(I.before,_),R=I.lines,a&&R.length&&(this._drawColorBox(e,t,D,v,i),f=Math.max(h.lineHeight,c)),O=0,T=R.length;O<T;++O)_(R[O]),f=h.lineHeight;dt(I.after,_)}g=0,f=h.lineHeight,dt(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const c=us(i.rtl,this.x,this.width);for(t.x=sa(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=c.textAlign(i.footerAlign),e.textBaseline="middle",o=$t(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=i,{topLeft:h,topRight:f,bottomLeft:g,bottomRight:v}=Mi(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+l,c+d-v),e.quadraticCurveTo(a+l,c+d,a+l-v,c+d),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+g,c+d),e.quadraticCurveTo(a,c+d,a,c+d-g),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=fr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Em(this,t),c=Object.assign({},o,this._size),l=Im(e,t,c),d=Tm(t,c,l,e);(s._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=ce(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),Gb(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),Kb(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!Ja(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),c=e||!Ja(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=fr[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}z(Ou,"positioners",fr);var CO={id:"tooltip",_element:Ou,positioners:fr,afterInit(n,t,e){e&&(n.tooltip=new Ou({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:bw},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},RO=Object.freeze({__proto__:null,Colors:j1,Decimation:G1,Filler:fO,Legend:_O,SubTitle:EO,Title:wO,Tooltip:CO});const DO=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function MO(n,t,e,i){const s=n.indexOf(t);if(s===-1)return DO(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const OO=(n,t)=>n===null?null:qt(Math.round(n),0,t);function xm(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Nu extends Hi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(nt(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:MO(i,t,Q(e,t),this._addedLabels),OO(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return xm.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}z(Nu,"id","category"),z(Nu,"defaults",{ticks:{callback:xm}});function NO(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,g=r||1,v=d-1,{min:_,max:y}=t,I=!nt(o),k=!nt(a),R=!nt(l),D=(y-_)/(h+1);let O=Eg((y-_)/v/g)*g,L,T,b,E;if(O<1e-14&&!I&&!k)return[{value:_},{value:y}];E=Math.ceil(y/O)-Math.floor(_/O),E>v&&(O=Eg(E*O/v/g)*g),nt(c)||(L=Math.pow(10,c),O=Math.ceil(O*L)/L),s==="ticks"?(T=Math.floor(_/O)*O,b=Math.ceil(y/O)*O):(T=_,b=y),I&&k&&r&&xR((a-o)/r,O/1e3)?(E=Math.round(Math.min((a-o)/O,d)),O=(a-o)/E,T=o,b=a):R?(T=I?o:T,b=k?a:b,E=l-1,O=(b-T)/E):(E=(b-T)/O,Sr(E,Math.round(E),O/1e3)?E=Math.round(E):E=Math.ceil(E));const S=Math.max(Ig(O),Ig(T));L=Math.pow(10,nt(c)?S:c),T=Math.round(T*L)/L,b=Math.round(b*L)/L;let x=0;for(I&&(f&&T!==o?(e.push({value:o}),T<o&&x++,Sr(Math.round((T+x*O)*L)/L,o,Pm(o,D,n))&&x++):T<o&&x++);x<E;++x){const P=Math.round((T+x*O)*L)/L;if(k&&P>a)break;e.push({value:P})}return k&&f&&b!==a?e.length&&Sr(e[e.length-1].value,a,Pm(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!k||b===a)&&e.push({value:b}),e}function Pm(n,t,{horizontal:e,minRotation:i}){const s=Ne(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class rc extends Hi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return nt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=e?s:c,a=c=>r=i?r:c;if(t){const c=Xe(s),l=Xe(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(s-c)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=NO(s,r);return t.bounds==="ticks"&&Cb(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return vo(t,this.chart.options.locale,this.options.ticks.format)}}class Lu extends rc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ct(t)?t:0,this.max=Ct(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Ne(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}z(Lu,"id","linear"),z(Lu,"defaults",{ticks:{callback:Fc.formatters.numeric}});const Yr=n=>Math.floor($n(n)),wi=(n,t)=>Math.pow(10,Yr(n)+t);function km(n){return n/Math.pow(10,Yr(n))===1}function Cm(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function LO(n,t){const e=t-n;let i=Yr(e);for(;Cm(n,t,i)>10;)i++;for(;Cm(n,t,i)<10;)i--;return Math.min(i,Yr(n))}function VO(n,{min:t,max:e}){t=Ie(n.min,t);const i=[],s=Yr(t);let r=LO(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Ie(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)i.push({value:f,major:km(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const g=Ie(n.max,f);return i.push({value:g,major:km(g),significand:h}),i}class Vu extends Hi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=rc.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return Ct(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ct(t)?Math.max(0,t):null,this.max=Ct(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ct(this._userMin)&&(this.min=t===wi(this.min,0)?wi(this.min,-1):wi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(wi(i,-1)),o(wi(s,1)))),i<=0&&r(wi(s,-1)),s<=0&&o(wi(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=VO(e,this);return t.bounds==="ticks"&&Cb(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":vo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=$n(t),this._valueRange=$n(this.max)-$n(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:($n(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}z(Vu,"id","logarithmic"),z(Vu,"defaults",{ticks:{callback:Fc.formatters.logarithmic,major:{enabled:!0}}});function Fu(n){const t=n.ticks;if(t.display&&n.display){const e=ce(t.backdropPadding);return Q(t.font&&t.font.size,Tt.font.size)+e.height}return 0}function FO(n,t,e){return e=It(e)?e:[e],{w:qR(n,t.string,e),h:e.length*t.lineHeight}}function Rm(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function BO(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?lt/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));s[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+s[c],a),h=$t(l.font),f=FO(n.ctx,h,n._pointLabels[c]);i[c]=f;const g=se(n.getIndexAngle(c)+a),v=Math.round(mh(g)),_=Rm(v,d.x,f.w,0,180),y=Rm(v,d.y,f.h,90,270);UO(e,t,g,_,y)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=jO(n,i,s)}function UO(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(c=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-c)):s.end>t.b&&(c=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function $O(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,i+s+o,r),l=Math.round(mh(se(c.angle+Ot))),d=WO(c.y,a.h,l),h=qO(l),f=HO(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function zO(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(bn({x:e,y:i},t)||bn({x:e,y:r},t)||bn({x:s,y:i},t)||bn({x:s,y:r},t))}function jO(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Fu(r)/2,additionalAngle:o?lt/s:0};let l;for(let d=0;d<s;d++){c.padding=e[d],c.size=t[d];const h=$O(n,d,c);i.push(h),a==="auto"&&(h.visible=zO(h,l),h.visible&&(l=h))}return i}function qO(n){return n===0||n===180?"center":n<180?"left":"right"}function HO(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function WO(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function GO(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!nt(a)){const c=Mi(t.borderRadius),l=ce(t.backdropPadding);n.fillStyle=a;const d=i-l.left,h=s-l.top,f=r-i+l.width,g=o-s+l.height;Object.values(c).some(v=>v!==0)?(n.beginPath(),Gr(n,{x:d,y:h,w:f,h:g,radius:c}),n.fill()):n.fillRect(d,h,f,g)}}function KO(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));GO(e,o,r);const a=$t(o.font),{x:c,y:l,textAlign:d}=r;$i(e,n._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function ww(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,bt);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function YO(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!i||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),ww(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function XO(n,t,e){return fi(n,{label:e,index:t,type:"pointLabel"})}class pr extends rc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ce(Fu(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Ct(t)&&!isNaN(t)?t:0,this.max=Ct(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Fu(this.options))}generateTickLabels(t){rc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=mt(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?BO(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=bt/(this._pointLabels.length||1),i=this.options.startAngle||0;return se(t*e+Ne(i))}getDistanceFromCenterForValue(t){if(nt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(nt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return XO(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Ot+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),ww(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&KO(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),g=s.setContext(f),v=r.setContext(f);YO(this,g,c,o,v)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const d=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=i.setContext(this.getContext(c)),d=$t(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=ce(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}$i(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}z(pr,"id","radialLinear"),z(pr,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Fc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),z(pr,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),z(pr,"descriptors",{angleLines:{_fallback:"grid"}});const qc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},_e=Object.keys(qc);function Dm(n,t){return n-t}function Mm(n,t){if(nt(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Ct(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(bs(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Om(n,t,e,i){const s=_e.length;for(let r=_e.indexOf(n);r<s-1;++r){const o=qc[_e[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return _e[r]}return _e[s-1]}function QO(n,t,e,i,s){for(let r=_e.length-1;r>=_e.indexOf(e);r--){const o=_e[r];if(qc[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return _e[e?_e.indexOf(e):0]}function JO(n){for(let t=_e.indexOf(n)+1,e=_e.length;t<e;++t)if(qc[_e[t]].common)return _e[t]}function Nm(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=yh(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function ZO(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=e[a],c>=0&&(t[c].major=!0);return t}function Lm(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:ZO(n,i,s,e)}class Xr extends Hi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new aM._date(t.adapters.date);s.init(e),Ar(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Mm(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=Ct(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=Ct(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=RR(s,r,o);return this._unit=e.unit||(i.autoSkip?Om(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):QO(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:JO(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Lm(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=qt(e,0,o),i=qt(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Om(r.minUnit,e,i,this._getLabelCapacity(e)),a=Q(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=bs(c)||c===!0,d={};let h=e,f,g;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const v=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,g=0;f<i;f=+t.add(f,a,o),g++)Nm(d,f,v);return(f===i||s.bounds==="ticks"||g===1)&&Nm(d,f,v),Object.keys(d).sort(Dm).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return mt(o,[t,e,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=i[e],g=l&&h&&f&&f.major;return this._adapter.format(t,s||(g?h:d))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Ne(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,Lm(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Mm(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Mb(t.sort(Dm))}}z(Xr,"id","time"),z(Xr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ra(n,t,e){let i=0,s=n.length-1,r,o,a,c;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=_n(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:c}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=_n(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:c}=n[s]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Bu extends Xr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ra(e,this.min),this._tableRange=ra(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)d=s[o+1],c=s[o-1],l=s[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(ra(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return ra(this._table,i*this._tableRange+this._minPos,!0)}}z(Bu,"id","timeseries"),z(Bu,"defaults",Xr.defaults);var tN=Object.freeze({__proto__:null,CategoryScale:Nu,LinearScale:Lu,LogarithmicScale:Vu,RadialLinearScale:pr,TimeScale:Xr,TimeSeriesScale:Bu});const eN=[oM,L1,RO,tN];qe.register(...eN);const ds={};function Ph(n){ds[n]&&(ds[n].destroy(),delete ds[n])}function Ew(){const n=document.documentElement.getAttribute("data-theme")==="dark";return{textColor:n?"#94A3B8":"#64748B",gridColor:n?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",bgColor:n?"#1E2235":"#FFFFFF"}}function Vm(n,t){const e=document.getElementById(n);if(!e)return;if(Ph(n),!t||t.length===0){e.getContext("2d").clearRect(0,0,e.width,e.height);return}Ew();const i=new qe(e,{type:"doughnut",data:{labels:t.map(s=>`${s.emoji} ${s.category}`),datasets:[{data:t.map(s=>s.amount),backgroundColor:DC.slice(0,t.length),borderWidth:0,hoverBorderWidth:2,hoverBorderColor:"#fff",borderRadius:4,spacing:2}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"65%",plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,titleFont:{size:13,weight:"600"},bodyFont:{size:12},callbacks:{label:function(s){const r=s.dataset.data.reduce((a,c)=>a+c,0),o=(s.parsed/r*100).toFixed(1);return` ₹${s.parsed.toLocaleString("en-IN")} (${o}%)`}}}},animation:{animateRotate:!0,duration:800,easing:"easeOutQuart"}}});return ds[n]=i,i}function nN(n,t,e,i){const s=document.getElementById(n);if(!s)return;Ph(n);const{textColor:r,gridColor:o}=Ew(),a=new qe(s,{type:"bar",data:{labels:t,datasets:[{label:"Income",data:e,backgroundColor:"rgba(16, 185, 129, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7},{label:"Expenses",data:i,backgroundColor:"rgba(239, 68, 68, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{color:r,padding:16,usePointStyle:!0,pointStyle:"rectRounded",font:{size:12,weight:"500"}}},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,callbacks:{label:function(c){return` ${c.dataset.label}: ₹${c.parsed.y.toLocaleString("en-IN")}`}}}},scales:{x:{grid:{display:!1},ticks:{color:r,font:{size:11}}},y:{grid:{color:o},ticks:{color:r,font:{size:11},callback:function(c){return"₹"+c.toLocaleString("en-IN")}},beginAtZero:!0}},animation:{duration:800,easing:"easeOutQuart"}}});return ds[n]=a,a}function iN(){Object.keys(ds).forEach(n=>{Ph(n)})}let De={user:null,profile:null,accounts:[],transactions:[]},$e=new Date().getMonth(),Cr=new Date().getFullYear();function Iw(n){De={...De,...n},iN();const{totalMoney:t}=Cn(De.accounts,De.transactions),e=vb(De.accounts,De.transactions),i=`${Cr}-${String($e+1).padStart(2,"0")}`,s=_b(De.transactions,i),r=s.income>0||s.expenses>0;return`
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
              <div class="category-color" style="background: ${oa(a)};"></div>
              <div class="category-info">
                <div class="category-name">${o.account.icon||"🏦"} ${o.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0,o.percentage)}%; background: ${oa(a)};"></div>
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
        <div class="month-display">${fb($e)} ${Cr}</div>
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
              <div class="highlight-stat-icon">${oh(s.highestExpense.category)}</div>
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
                  <div class="category-color" style="background: ${oa(a)};"></div>
                  <div class="category-info">
                    <div class="category-name">${o.emoji} ${o.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${o.percentage}%; background: ${oa(a)};"></div>
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
      `:zC()}
    </div>
  `}function oa(n){const t=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];return t[n%t.length]}function Tw(){const n=document.getElementById("btn-month-prev"),t=document.getElementById("btn-month-next");n&&(n.onclick=()=>{$e===0?($e=11,Cr--):$e--,Fm()}),t&&(t.onclick=()=>{$e===11?($e=0,Cr++):$e++,Fm()});const e=vb(De.accounts,De.transactions);e.length>0&&setTimeout(()=>{Vm("accounts-distribution-chart",e.map(r=>({category:r.account.name,emoji:r.account.icon||"🏦",amount:r.balance})))},50);const i=`${Cr}-${String($e+1).padStart(2,"0")}`,s=_b(De.transactions,i);s.categories.length>0&&setTimeout(()=>{Vm("categories-chart",s.categories)},50),(s.income>0||s.expenses>0)&&setTimeout(()=>{nN("income-expense-bar-chart",[fb($e)],[s.income],[s.expenses])},50)}function Fm(){const n=document.querySelector(".page");n&&(n.outerHTML=Iw(De),Tw())}let is={user:null,profile:null,transactions:[],budgets:[]};function sN(n){is={...is,...n};const t=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{monthlyProgress:e,categoryProgress:i}=eb(is.budgets,is.transactions,t);return`
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
  `}function rN(n){const t=document.getElementById("btn-set-budget-modal");t&&(t.onclick=()=>Kl(n));const e=document.getElementById("btn-quick-monthly-budget");e&&(e.onclick=()=>Kl(n,"monthly"));const i=document.getElementById("btn-add-category-budget");i&&(i.onclick=()=>Kl(n,"category")),document.querySelectorAll(".btn-delete-budget").forEach(s=>{s.onclick=async()=>{const r=s.dataset.category;if(await _s({icon:"🗑️",title:"Delete Budget",message:`Are you sure you want to remove the budget for ${r}?`,danger:!0}))try{await Gk(is.user.uid,r),H.success("Budget removed!"),n&&n()}catch{H.error("Unable to remove budget.")}}})}function Kl(n,t="monthly"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,i=`
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
          ${mo.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
  `;we({title:"🎯 Set Budget Limit",content:i,onOpen:s=>{let r=t;const o=s.querySelector("#tab-b-monthly"),a=s.querySelector("#tab-b-category"),c=s.querySelector("#group-b-category");o.onclick=()=>{r="monthly",o.classList.add("active"),a.classList.remove("active"),c.style.display="none"},a.onclick=()=>{r="category",a.classList.add("active"),o.classList.remove("active"),c.style.display="block"},s.querySelector("#set-budget-form").onsubmit=async l=>{l.preventDefault();const d=s.querySelector("#budget-amount").value,h=s.querySelector("#budget-category").value;if(s.querySelector("#budget-amount-error").textContent="",!d||Number(d)<=0){s.querySelector("#budget-amount-error").textContent="Please enter a valid budget amount.";return}const f=s.querySelector("#btn-save-budget");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{const g=is.user.uid;r==="monthly"?await Hk(g,d,e):await Wk(g,h,d,e),Ut(),H.success("🎯 Budget set successfully!"),n&&n()}catch{H.error("Unable to save budget."),f.disabled=!1,f.innerHTML="Save Budget"}}}})}let ss={user:null,profile:null};function oN(n){var a;ss={...ss,...n};const{user:t,profile:e}=ss,i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(t==null?void 0:t.email)||(e==null?void 0:e.email)||"",r=i.charAt(0).toUpperCase(),o=e!=null&&e.createdAt?go(e.createdAt.split("T")[0]):"Recently";return`
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

        ${(a=ss.profile)!=null&&a.pinEnabled?`
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
  `}function aN(n,t){const e=document.getElementById("btn-edit-profile");e&&(e.onclick=()=>{var c,l;const a=`
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${((c=ss.profile)==null?void 0:c.name)||((l=ss.user)==null?void 0:l.displayName)||""}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;we({title:"✏️ Edit Profile",content:a,onOpen:d=>{d.querySelector("#edit-profile-form").onsubmit=async h=>{h.preventDefault();const f=d.querySelector("#profile-name-input").value,g=Vc(f);if(g){d.querySelector("#profile-name-error").textContent=g;return}const v=d.querySelector("#btn-save-profile-name");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Saving...';try{await $k(f),Ut(),H.success("Profile updated!"),t&&t()}catch{H.error("Unable to update profile."),v.disabled=!1,v.innerHTML="Save Changes"}}}})});const i=document.getElementById("btn-change-password");i&&(i.onclick=()=>{we({title:"🔑 Change Password",content:`
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
      `,onOpen:a=>{a.querySelector("#change-pass-form").onsubmit=async c=>{c.preventDefault();const l=a.querySelector("#curr-pass").value,d=a.querySelector("#new-pass").value,h=a.querySelector("#confirm-new-pass").value;a.querySelector("#curr-pass-error").textContent="",a.querySelector("#new-pass-error").textContent="",a.querySelector("#confirm-new-pass-error").textContent="";const f=ih(d);if(f){a.querySelector("#new-pass-error").textContent=f;return}const g=ab(d,h);if(g){a.querySelector("#confirm-new-pass-error").textContent=g;return}const v=a.querySelector("#btn-save-new-pass");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Updating...';try{await zk(l,d),Ut(),H.success("Password updated successfully!")}catch{a.querySelector("#curr-pass-error").textContent="Incorrect current password or re-authentication failed.",v.disabled=!1,v.innerHTML="Update Password"}}}})});const s=document.getElementById("btn-profile-logout");s&&(s.onclick=async()=>{await _s({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out of Money Control?",confirmText:"Log Out",danger:!0})&&(await tb(),H.info("Logged out."),n&&n())});const r=document.getElementById("btn-profile-lock-app");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))})}function cN(n,t=[],e="money-control-transactions"){if(!n||n.length===0)throw new Error("No transactions to export.");const i=a=>{const c=t.find(l=>l.id===a);return c?c.name:""},s=["Date","Type","Amount","Reason","Category","From Account","To Account","Notes"],r=n.sort((a,c)=>new Date(a.date)-new Date(c.date)).map(a=>[a.date,a.type,a.amount,`"${(a.reason||"").replace(/"/g,'""')}"`,a.category||"",`"${i(a.sourceAccountId).replace(/"/g,'""')}"`,`"${i(a.destinationAccountId).replace(/"/g,'""')}"`,`"${(a.notes||"").replace(/"/g,'""')}"`]),o=[s.join(","),...r.map(a=>a.join(","))].join(`
`);uN(o,`${e}.csv`,"text/csv")}function lN(n,t,e,i){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],r=`${i}-${String(e+1).padStart(2,"0")}`,o=n.filter(y=>y.date&&y.date.startsWith(r)),a=y=>{const I=t.find(k=>k.id===y);return I?I.name:""},c=o.filter(y=>y.type==="INCOME").reduce((y,I)=>y+I.amount,0),l=o.filter(y=>y.type==="EXPENSE").reduce((y,I)=>y+I.amount,0),d={};o.filter(y=>y.type==="EXPENSE").forEach(y=>{const I=y.category||"Other";d[I]=(d[I]||0)+y.amount});const h=Object.entries(d).sort((y,I)=>I[1]-y[1]),f=`
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
      ${h.map(([y,I])=>`
        <tr>
          <td>${y}</td>
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
      ${o.sort((y,I)=>new Date(y.date)-new Date(I.date)).map(y=>{let I="";return y.type==="INCOME"?I=`→ ${a(y.destinationAccountId)}`:y.type==="EXPENSE"?I=`← ${a(y.sourceAccountId)}`:y.type==="TRANSFER"&&(I=`${a(y.sourceAccountId)} → ${a(y.destinationAccountId)}`),`
            <tr class="${y.type==="INCOME"?"income-row":y.type==="EXPENSE"?"expense-row":"transfer-row"}">
              <td>${y.date}</td>
              <td>${y.reason||"-"}</td>
              <td>${y.type==="INCOME"?"+":y.type==="EXPENSE"?"-":"↔ "}₹${y.amount.toLocaleString("en-IN")}</td>
              <td>${y.category||"-"}</td>
              <td>${I||"-"}</td>
              <td>${y.type}</td>
            </tr>
          `}).join("")}
    </tbody>
  </table>

  <div class="footer">
    Generated by Money Control V2 on ${new Date().toLocaleDateString("en-IN",{dateStyle:"long"})}
  </div>
</body>
</html>`,g=new Blob([f],{type:"text/html"}),v=URL.createObjectURL(g),_=window.open(v,"_blank");_&&(_.onload=()=>{setTimeout(()=>URL.revokeObjectURL(v),1e3)})}function uN(n,t,e){const i=new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}let he={user:null,profile:null,transactions:[]};function Aw(n){var l;he={...he,...n};const{profile:t}=he,e=document.documentElement.getAttribute("data-theme")||"light",i=((l=t==null?void 0:t.settings)==null?void 0:l.allowNegativeBalance)||!1,s=(t==null?void 0:t.initialBalance)||0,r=(t==null?void 0:t.pinEnabled)||!1,o=(t==null?void 0:t.autoLockTimeout)!==void 0?t.autoLockTimeout:5,a=eC(),c=tC();return`
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
  `}function Sw(n,t){const e=document.getElementById("toggle-pin-lock");e&&(e.onchange=async _=>{if(_.target.checked)dg(he.user.uid,()=>{t&&t()}),_.target.checked=!1;else if(await _s({icon:"🔓",title:"Disable PIN Lock",message:"Are you sure you want to remove PIN protection? Your financial data will no longer be locked.",confirmText:"Remove PIN",danger:!0}))try{await sb(he.user.uid),H.success("🔓 PIN lock disabled."),t&&t()}catch{H.error("Unable to disable PIN."),_.target.checked=!0}else _.target.checked=!0});const i=document.getElementById("btn-change-pin");i&&(i.onclick=()=>{dg(he.user.uid,()=>{H.success("🔐 PIN updated!"),t&&t()})});const s=document.getElementById("select-auto-lock");s&&(s.onchange=async _=>{const y=parseInt(_.target.value);try{await rC(he.user.uid,y),H.success("⏱️ Auto-lock updated."),t&&t()}catch{H.error("Unable to update auto-lock setting.")}});const r=document.getElementById("btn-lock-app-now");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))});const o=document.getElementById("btn-install-pwa");o&&(o.onclick=async()=>{await nC()&&(H.success("📲 Money Control installed!"),t&&t())});const a=document.getElementById("btn-theme-light");a&&(a.onclick=()=>{document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),Bm()});const c=document.getElementById("btn-theme-dark");c&&(c.onclick=()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),Bm()});const l=document.getElementById("toggle-negative-balance");l&&(l.onchange=async _=>{const y=_.target.checked;try{await xk(he.user.uid,{allowNegativeBalance:y}),H.success(`Negative balance ${y?"enabled":"disabled"}.`),t&&t()}catch{H.error("Unable to update setting."),_.target.checked=!y}});const d=document.getElementById("btn-edit-initial-balance");d&&(d.onclick=()=>{var I;const y=`
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
              <input type="number" id="new-initial-input" class="form-input" value="${((I=he.profile)==null?void 0:I.initialBalance)||0}" step="any" min="0" required autofocus />
            </div>
            <div class="form-error" id="new-initial-error"></div>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-initial">Save Initial Balance</button>
        </form>
      `;we({title:"💵 Edit Initial Balance",content:y,onOpen:k=>{k.querySelector("#edit-initial-form").onsubmit=async R=>{R.preventDefault();const D=k.querySelector("#new-initial-input").value,O=po(D);if(O){k.querySelector("#new-initial-error").textContent=O;return}const L=k.querySelector("#btn-save-initial");L.disabled=!0,L.innerHTML='<span class="spinner"></span> Saving...';try{await G_(he.user.uid,Number(D)),Ut(),H.success("Initial balance updated!"),t&&t()}catch{H.error("Unable to update initial balance."),L.disabled=!1,L.innerHTML="Save Initial Balance"}}}})});const h=document.getElementById("btn-export-csv");h&&(h.onclick=()=>{try{cN(he.transactions,he.accounts),H.success("📊 Transactions exported to CSV!")}catch(_){H.error(_.message||"Unable to export transactions.")}});const f=document.getElementById("btn-export-report");f&&(f.onclick=()=>{try{const _=new Date;lN(he.transactions,he.accounts,_.getMonth(),_.getFullYear()),H.success("📑 Printable report opened!")}catch{H.error("Unable to generate report.")}});const g=document.getElementById("btn-settings-logout");g&&(g.onclick=async()=>{await _s({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out?",confirmText:"Log Out",danger:!0})&&(await tb(),H.info("Logged out."),n&&n())});const v=document.getElementById("btn-settings-delete-account");v&&(v.onclick=()=>{we({title:"🚨 Delete Account",content:`
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
      `,onOpen:y=>{y.querySelector("#delete-acc-form").onsubmit=async I=>{I.preventDefault();const k=y.querySelector("#del-pass-input").value;if(y.querySelector("#del-pass-error").textContent="",!k){y.querySelector("#del-pass-error").textContent="Please enter your password.";return}const R=y.querySelector("#btn-confirm-delete-acc");R.disabled=!0,R.innerHTML='<span class="spinner"></span> Deleting...';try{await jk(k),Ut(),H.info("Account deleted."),n&&n()}catch{y.querySelector("#del-pass-error").textContent="Incorrect password or re-authentication failed.",R.disabled=!1,R.innerHTML="Delete My Account Permanently"}}}})})}function Bm(){const n=document.querySelector(".page");n&&(n.outerHTML=Aw(he),Sw())}function xw(n){return`
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
  `}function Pw(n){return`
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
  `}function dN(n){document.querySelectorAll(".sidebar-link[data-page]").forEach(e=>{e.onclick=()=>{const i=e.dataset.page;n(i)}}),document.querySelectorAll(".bottom-nav-item[data-page]").forEach(e=>{e.onclick=()=>{const i=e.dataset.page;n(i)}});const t=document.getElementById("mobile-add-btn");t&&(t.onclick=()=>{window.dispatchEvent(new CustomEvent("open-add-menu"))})}function hN(){return`
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
      ${fN(3)}
    </div>
  `}function fN(n=5){let t="";for(let e=0;e<n;e++)t+=`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;return t}const B={user:null,profile:null,accounts:[],transactions:[],budgets:[],activePage:"dashboard",unsubscribeAccounts:null,unsubscribeTx:null,isLocked:!1,pinEnabled:!1,pinHash:null,autoLockTimeout:5,lastActivityTime:Date.now()};let Ca=null;function pN(){const n=localStorage.getItem("theme");n?document.documentElement.setAttribute("data-theme",n):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}pN();Kk();const Hc=document.getElementById("app");function gN(){Uk(async n=>{if(B.unsubscribeAccounts&&(B.unsubscribeAccounts(),B.unsubscribeAccounts=null),B.unsubscribeTx&&(B.unsubscribeTx(),B.unsubscribeTx=null),!n){B.user=null,B.profile=null,B.accounts=[],B.transactions=[],B.budgets=[],B.isLocked=!1,B.pinEnabled=!1,B.pinHash=null,fo(),Cw(),oc();return}B.user=n,yN();try{await kw(n.uid)}catch{oc()}}),window.addEventListener("hashchange",bN),window.addEventListener("open-add-menu",()=>{EN()}),window.addEventListener("lock-app",()=>{ac()}),wN()}async function kw(n){const t=await Lc(n);if(B.profile=t,!t||t.initialBalance===null||t.initialBalance===void 0){mN();return}await X_(n,t.initialBalance),B.budgets=await th(n);const e=await Eu(n);B.pinEnabled=e.pinEnabled,B.pinHash=e.pinHash,B.autoLockTimeout=e.autoLockTimeout!==void 0?e.autoLockTimeout:5,B.unsubscribeAccounts=Dk(n,i=>{B.accounts=i,B.isLocked||Ni()}),B.unsubscribeTx=Ok(n,i=>{B.transactions=i,B.isLocked||Ni()}),B.pinEnabled&&B.pinHash?(B.isLocked=!0,rb(n,B.pinHash,()=>{B.isLocked=!1,B.lastActivityTime=Date.now(),Ra(),Ni()})):e.pinSetupPromptShown?Ra():uC(n,()=>{Eu(n).then(i=>{B.pinEnabled=i.pinEnabled,B.pinHash=i.pinHash,B.pinEnabled&&Ra()})})}function oc(){Hc.innerHTML=AC(),db(()=>{})}function mN(){Hc.innerHTML=SC(),xC(B.user.uid,async()=>{await kw(B.user.uid)})}function yN(){Hc.innerHTML=`
    <div class="app-layout">
      ${xw(B.activePage)}
      <main class="main-content">
        ${hN()}
      </main>
      ${Pw(B.activePage)}
    </div>
  `}function Ni(){if(B.isLocked)return;const n=window.location.hash.replace("#/","").replace("#","");n&&["dashboard","accounts","transactions","money-control","analytics","budget","profile","settings"].includes(n)?B.activePage=n:B.activePage="dashboard";const t=vN(B.activePage);Hc.innerHTML=`
    <div class="app-layout">
      ${xw(B.activePage)}
      <main class="main-content" id="main-content-area">
        ${t}
      </main>
      ${Pw(B.activePage)}
    </div>
  `,dN(Uu),_N(B.activePage)}function vN(n){switch(n){case"dashboard":return hg(B);case"accounts":return jC(B);case"transactions":return wb(B);case"money-control":return _a(B);case"analytics":return Iw(B);case"budget":return sN(B);case"profile":return oN(B);case"settings":return Aw(B);default:return hg(B)}}function _N(n){const t=async()=>{if(B.user){B.profile=await Lc(B.user.uid),B.budgets=await th(B.user.uid);const e=await Eu(B.user.uid);B.pinEnabled=e.pinEnabled,B.pinHash=e.pinHash,B.autoLockTimeout=e.autoLockTimeout!==void 0?e.autoLockTimeout:5,Ni()}};switch(n){case"dashboard":fg(Uu,t);break;case"accounts":qC(t);break;case"transactions":Tb(t);break;case"money-control":ba(t);break;case"analytics":Tw();break;case"budget":rN(t);break;case"profile":aN(()=>oc(),t);break;case"settings":Sw(()=>oc(),t);break;default:fg(Uu,t);break}}function Uu(n){B.activePage=n,window.location.hash=`#/${n}`}function bN(){var n;B.user&&((n=B.profile)==null?void 0:n.initialBalance)!==null&&!B.isLocked&&Ni()}function ac(){!B.pinEnabled||!B.pinHash||!B.user||(B.isLocked=!0,rb(B.user.uid,B.pinHash,()=>{B.isLocked=!1,B.lastActivityTime=Date.now(),Ra(),Ni()}))}function Ra(){if(Cw(),!B.pinEnabled||!B.pinHash||B.autoLockTimeout<0)return;const n=B.autoLockTimeout===0?0:B.autoLockTimeout*60*1e3;n>0&&(Ca=setInterval(()=>{Date.now()-B.lastActivityTime>=n&&!B.isLocked&&ac()},1e4))}function Cw(){Ca&&(clearInterval(Ca),Ca=null)}function wN(){const n=()=>{B.lastActivityTime=Date.now()};["click","keydown","touchstart","scroll"].forEach(t=>{document.addEventListener(t,n,{passive:!0})}),document.addEventListener("visibilitychange",()=>{if(document.hidden||!B.pinEnabled||!B.pinHash||B.isLocked)return;const t=Date.now()-B.lastActivityTime;if(B.autoLockTimeout===0)ac();else if(B.autoLockTimeout>0){const e=B.autoLockTimeout*60*1e3;t>=e&&ac()}})}function EN(){we({title:"⚡ Quick Action",content:`
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
  `,onOpen:t=>{const e=t.querySelector("#fab-modal-add-income"),i=t.querySelector("#fab-modal-add-expense"),s=t.querySelector("#fab-modal-transfer"),r=async()=>{B.user&&(B.profile=await Lc(B.user.uid),B.budgets=await th(B.user.uid),Ni())};e&&(e.onclick=()=>Di("INCOME",r)),i&&(i.onclick=()=>Di("EXPENSE",r)),s&&(s.onclick=()=>ch(r))}})}gN();
