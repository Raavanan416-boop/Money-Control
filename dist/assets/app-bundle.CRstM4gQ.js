var iw=Object.defineProperty;var sw=(n,t,e)=>t in n?iw(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var U=(n,t,e)=>sw(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const rw=()=>{};var qh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ow=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},em={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),i.push(e[d],e[h],e[f],e[g])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(tm(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ow(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new aw;const f=r<<2|a>>4;if(i.push(f),l!==64){const g=a<<4&240|l>>2;if(i.push(g),h!==64){const y=l<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class aw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cw=function(n){const t=tm(n);return em.encodeByteArray(t,!0)},_a=function(n){return cw(n).replace(/\./g,"")},nm=function(n){try{return em.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uw=()=>lw().__FIREBASE_DEFAULTS__,dw=()=>{if(typeof process>"u"||typeof qh>"u")return;const n=qh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&nm(n[1]);return t&&JSON.parse(t)},Qa=()=>{try{return rw()||uw()||dw()||hw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},im=n=>{var t,e;return(e=(t=Qa())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},fw=n=>{const t=im(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},sm=()=>{var n;return(n=Qa())===null||n===void 0?void 0:n.config},rm=n=>{var t;return(t=Qa())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Es(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function om(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function gw(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_a(JSON.stringify(e)),_a(JSON.stringify(o)),""].join(".")}const ar={};function mw(){const n={prod:[],emulator:[]};for(const t of Object.keys(ar))ar[t]?n.emulator.push(t):n.prod.push(t);return n}function yw(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Wh=!1;function am(n,t){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||ar[n]===t||ar[n]||Wh)return;ar[n]=t;function e(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=mw().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,g){f.setAttribute("width","24"),f.setAttribute("id",g),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Wh=!0,o()},f}function d(f,g){f.setAttribute("id",g),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=yw(i),g=e("text"),y=document.getElementById(g)||document.createElement("span"),b=e("learnmore"),v=document.getElementById(b)||document.createElement("a"),E=e("preprendIcon"),P=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const C=f.element;a(C),d(v,b);const D=l();c(P,E),C.append(P,y,v,D),document.body.appendChild(C)}r?(y.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function bw(){var n;const t=(n=Qa())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _w(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ww(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tw(){const n=re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Iw(){return!bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Aw(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="FirebaseError";class In extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Sw,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Pw(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,i)}}function Pw(n,t){return n.replace(kw,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const kw=/\{\$([^}]+)}/g;function Cw(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ci(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(Gh(r)&&Gh(o)){if(!Ci(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Gh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ks(n){const t={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function Ys(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Rw(n,t){const e=new Mw(n,t);return e.subscribe.bind(e)}class Mw{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Dw(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=Jc),s.error===void 0&&(s.error=Jc),s.complete===void 0&&(s.complete=Jc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dw(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Jc(){}/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Ri{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const bi="[DEFAULT]";/**
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
 */class Ow{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new pw;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Lw(t))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=bi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=bi){return this.instances.has(t)}getOptions(t=bi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Nw(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=bi){return this.component?this.component.multipleInstances?t:bi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nw(n){return n===bi?void 0:n}function Lw(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ow(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(nt||(nt={}));const Fw={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},Bw=nt.INFO,$w={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},Uw=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=$w[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bu{constructor(t){this.name=t,this._logLevel=Bw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...t),this._logHandler(this,nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...t),this._logHandler(this,nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...t),this._logHandler(this,nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...t),this._logHandler(this,nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...t),this._logHandler(this,nt.ERROR,...t)}}const zw=(n,t)=>t.some(e=>n instanceof e);let Kh,Yh;function jw(){return Kh||(Kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hw(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cm=new WeakMap,Sl=new WeakMap,lm=new WeakMap,Zc=new WeakMap,_u=new WeakMap;function qw(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Un(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&cm.set(e,n)}).catch(()=>{}),_u.set(t,n),t}function Ww(n){if(Sl.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Sl.set(n,t)}let Pl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Sl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||lm.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Un(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Gw(n){Pl=n(Pl)}function Kw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(tl(this),t,...e);return lm.set(i,t.sort?t.sort():[t]),Un(i)}:Hw().includes(n)?function(...t){return n.apply(tl(this),t),Un(cm.get(this))}:function(...t){return Un(n.apply(tl(this),t))}}function Yw(n){return typeof n=="function"?Kw(n):(n instanceof IDBTransaction&&Ww(n),zw(n,jw())?new Proxy(n,Pl):n)}function Un(n){if(n instanceof IDBRequest)return qw(n);if(Zc.has(n))return Zc.get(n);const t=Yw(n);return t!==n&&(Zc.set(n,t),_u.set(t,n)),t}const tl=n=>_u.get(n);function Xw(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Un(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Qw=["get","getKey","getAll","getAllKeys","count"],Jw=["put","add","delete","clear"],el=new Map;function Xh(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(el.get(t))return el.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Jw.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Qw.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return el.set(t,r),r}Gw(n=>({...n,get:(t,e,i)=>Xh(t,e)||n.get(t,e,i),has:(t,e)=>!!Xh(t,e)||n.has(t,e)}));/**
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
 */class Zw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(t0(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function t0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kl="@firebase/app",Qh="0.13.2";/**
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
 */const _n=new bu("@firebase/app"),e0="@firebase/app-compat",n0="@firebase/analytics-compat",i0="@firebase/analytics",s0="@firebase/app-check-compat",r0="@firebase/app-check",o0="@firebase/auth",a0="@firebase/auth-compat",c0="@firebase/database",l0="@firebase/data-connect",u0="@firebase/database-compat",d0="@firebase/functions",h0="@firebase/functions-compat",f0="@firebase/installations",p0="@firebase/installations-compat",g0="@firebase/messaging",m0="@firebase/messaging-compat",y0="@firebase/performance",v0="@firebase/performance-compat",b0="@firebase/remote-config",_0="@firebase/remote-config-compat",w0="@firebase/storage",E0="@firebase/storage-compat",T0="@firebase/firestore",I0="@firebase/ai",A0="@firebase/firestore-compat",x0="firebase",S0="11.10.0";/**
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
 */const Cl="[DEFAULT]",P0={[kl]:"fire-core",[e0]:"fire-core-compat",[i0]:"fire-analytics",[n0]:"fire-analytics-compat",[r0]:"fire-app-check",[s0]:"fire-app-check-compat",[o0]:"fire-auth",[a0]:"fire-auth-compat",[c0]:"fire-rtdb",[l0]:"fire-data-connect",[u0]:"fire-rtdb-compat",[d0]:"fire-fn",[h0]:"fire-fn-compat",[f0]:"fire-iid",[p0]:"fire-iid-compat",[g0]:"fire-fcm",[m0]:"fire-fcm-compat",[y0]:"fire-perf",[v0]:"fire-perf-compat",[b0]:"fire-rc",[_0]:"fire-rc-compat",[w0]:"fire-gcs",[E0]:"fire-gcs-compat",[T0]:"fire-fst",[A0]:"fire-fst-compat",[I0]:"fire-vertex","fire-js":"fire-js",[x0]:"fire-js-all"};/**
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
 */const Er=new Map,k0=new Map,Rl=new Map;function Jh(n,t){try{n.container.addComponent(t)}catch(e){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function fs(n){const t=n.name;if(Rl.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;Rl.set(t,n);for(const e of Er.values())Jh(e,n);for(const e of k0.values())Jh(e,n);return!0}function wu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ie(n){return n==null?!1:n.settings!==void 0}/**
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
 */const C0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Ur("app","Firebase",C0);/**
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
 */class R0{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=S0;function um(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Cl,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(e||(e=sm()),!e)throw zn.create("no-options");const r=Er.get(s);if(r){if(Ci(e,r.options)&&Ci(i,r.config))return r;throw zn.create("duplicate-app",{appName:s})}const o=new Vw(s);for(const c of Rl.values())o.addComponent(c);const a=new R0(e,i,o);return Er.set(s,a),a}function Eu(n=Cl){const t=Er.get(n);if(!t&&n===Cl&&sm())return um();if(!t)throw zn.create("no-app",{appName:n});return t}function M0(){return Array.from(Er.values())}function jn(n,t,e){var i;let s=(i=P0[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}fs(new Ri(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const D0="firebase-heartbeat-database",O0=1,Tr="firebase-heartbeat-store";let nl=null;function dm(){return nl||(nl=Xw(D0,O0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Tr)}catch(e){console.warn(e)}}}}).catch(n=>{throw zn.create("idb-open",{originalErrorMessage:n.message})})),nl}async function N0(n){try{const e=(await dm()).transaction(Tr),i=await e.objectStore(Tr).get(hm(n));return await e.done,i}catch(t){if(t instanceof In)_n.warn(t.message);else{const e=zn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_n.warn(e.message)}}}async function Zh(n,t){try{const i=(await dm()).transaction(Tr,"readwrite");await i.objectStore(Tr).put(t,hm(n)),await i.done}catch(e){if(e instanceof In)_n.warn(e.message);else{const i=zn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});_n.warn(i.message)}}}function hm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const L0=1024,V0=30;class F0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $0(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tf();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>V0){const o=U0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){_n.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tf(),{heartbeatsToSend:i,unsentEntries:s}=B0(this._heartbeatsCache.heartbeats),r=_a(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return _n.warn(e),""}}}function tf(){return new Date().toISOString().substring(0,10)}function B0(n,t=L0){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ef(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ef(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class $0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aw()?xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await N0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ef(n){return _a(JSON.stringify({version:2,heartbeats:n})).length}function U0(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function z0(n){fs(new Ri("platform-logger",t=>new Zw(t),"PRIVATE")),fs(new Ri("heartbeat",t=>new F0(t),"PRIVATE")),jn(kl,Qh,n),jn(kl,Qh,"esm2017"),jn("fire-js","")}z0("");function Tu(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(e[i[s]]=n[i[s]]);return e}function fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j0=fm,pm=new Ur("auth","Firebase",fm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new bu("@firebase/auth");function H0(n,...t){wa.logLevel<=nt.WARN&&wa.warn(`Auth (${Ts}): ${n}`,...t)}function Ko(n,...t){wa.logLevel<=nt.ERROR&&wa.error(`Auth (${Ts}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n,...t){throw Iu(n,...t)}function He(n,...t){return Iu(n,...t)}function gm(n,t,e){const i=Object.assign(Object.assign({},j0()),{[t]:e});return new Ur("auth","Firebase",i).create(t,{appName:n.name})}function yn(n){return gm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Iu(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return pm.create(n,...t)}function G(n,t,...e){if(!n)throw Iu(t,...e)}function hn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ko(t),new Error(t)}function wn(n,t){n||hn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function q0(){return nf()==="http:"||nf()==="https:"}function nf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q0()||ww()||"connection"in navigator)?navigator.onLine:!0}function G0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e){this.shortDelay=t,this.longDelay=e,wn(e>t,"Short delay should be less than long delay!"),this.isMobile=vw()||Ew()}get(){return W0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n,t){wn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X0=new jr(3e4,6e4);function An(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Fe(n,t,e,i,s={}){return ym(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=zr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return _w()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Es(n.emulatorConfig.host)&&(l.credentials="include"),mm.fetch()(await vm(n,n.config.apiHost,e,a),l)})}async function ym(n,t,e){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},K0),t);try{const s=new J0(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw So(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw So(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw So(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gm(n,d,l);Ne(n,d)}}catch(s){if(s instanceof In)throw s;Ne(n,"network-request-failed",{message:String(s)})}}async function Hr(n,t,e,i,s={}){const r=await Fe(n,t,e,i,s);return"mfaPendingCredential"in r&&Ne(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function vm(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?Au(n.config,s):`${n.config.apiScheme}://${s}`;return Y0.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Q0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class J0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(He(this.auth,"network-request-failed")),X0.get())})}}function So(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=He(n,t,i);return s.customData._tokenResponse=e,s}function sf(n){return n!==void 0&&n.enterprise!==void 0}class Z0{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Q0(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tE(n,t){return Fe(n,"GET","/v2/recaptchaConfig",An(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(n,t){return Fe(n,"POST","/v1/accounts:delete",t)}async function Ea(n,t){return Fe(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function nE(n,t=!1){const e=mt(n),i=await e.getIdToken(t),s=xu(i);G(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:cr(il(s.auth_time)),issuedAtTime:cr(il(s.iat)),expirationTime:cr(il(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function il(n){return Number(n)*1e3}function xu(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=nm(e);return s?JSON.parse(s):(Ko("Failed to decode base64 JWT payload"),null)}catch(s){return Ko("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rf(n){const t=xu(n);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof In&&iE(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function iE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ta(n){var t;const e=n.auth,i=await n.getIdToken(),s=await Mi(n,Ea(e,{idToken:i}));G(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?bm(r.providerUserInfo):[],a=oE(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Dl(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function rE(n){const t=mt(n);await Ta(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oE(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function bm(n){return n.map(t=>{var{providerId:e}=t,i=Tu(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(n,t){const e=await ym(n,{},async()=>{const i=zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await vm(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return n.emulatorConfig&&Es(n.emulatorConfig.host)&&(c.credentials="include"),mm.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function cE(n,t){return Fe(n,"POST","/v2/accounts:revokeToken",An(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):rf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){G(t.length!==0,"internal-error");const e=rf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await aE(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new os;return i&&(G(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(G(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n,t){G(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Me{constructor(t){var{uid:e,auth:i,stsTokenManager:s}=t,r=Tu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Dl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Mi(this,this.stsTokenManager.getToken(this.auth,t));return G(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return nE(this,t)}reload(){return rE(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Me(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Ta(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ie(this.auth.app))return Promise.reject(yn(this.auth));const t=await this.getIdToken();return await Mi(this,eE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,s,r,o,a,c,l,d;const h=(i=e.displayName)!==null&&i!==void 0?i:void 0,f=(s=e.email)!==null&&s!==void 0?s:void 0,g=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,b=(a=e.tenantId)!==null&&a!==void 0?a:void 0,v=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=e.createdAt)!==null&&l!==void 0?l:void 0,P=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:D,isAnonymous:O,providerData:L,stsTokenManager:I}=e;G(C&&I,t,"internal-error");const _=os.fromJSON(this.name,I);G(typeof C=="string",t,"internal-error"),Cn(h,t.name),Cn(f,t.name),G(typeof D=="boolean",t,"internal-error"),G(typeof O=="boolean",t,"internal-error"),Cn(g,t.name),Cn(y,t.name),Cn(b,t.name),Cn(v,t.name),Cn(E,t.name),Cn(P,t.name);const T=new Me({uid:C,auth:t,email:f,emailVerified:D,displayName:h,isAnonymous:O,photoURL:y,phoneNumber:g,tenantId:b,stsTokenManager:_,createdAt:E,lastLoginAt:P});return L&&Array.isArray(L)&&(T.providerData=L.map(A=>Object.assign({},A))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(t,e,i=!1){const s=new os;s.updateFromServerResponse(e);const r=new Me({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Ta(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];G(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?bm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new os;a.updateFromIdToken(i);const c=new Me({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new Map;function fn(n){wn(n instanceof Function,"Expected a class definition");let t=of.get(n);return t?(wn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,of.set(n,t),t)}/**
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
 */class _m{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}_m.type="NONE";const af=_m;/**
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
 */function Yo(n,t,e){return`firebase:${n}:${t}:${e}`}class as{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Yo(this.userKey,s.apiKey,r),this.fullPersistenceKey=Yo("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Ea(this.auth,{idToken:t}).catch(()=>{});return e?Me._fromGetAccountInfoResponse(this.auth,e,t):null}return Me._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new as(fn(af),t,i);const s=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||fn(af);const o=Yo(i,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){let h;if(typeof d=="string"){const f=await Ea(t,{idToken:d}).catch(()=>{});if(!f)break;h=await Me._fromGetAccountInfoResponse(t,f,d)}else h=Me._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new as(r,t,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new as(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Im(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xm(t))return"Blackberry";if(Sm(t))return"Webos";if(Em(t))return"Safari";if((t.includes("chrome/")||Tm(t))&&!t.includes("edge/"))return"Chrome";if(Am(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function wm(n=re()){return/firefox\//i.test(n)}function Em(n=re()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tm(n=re()){return/crios\//i.test(n)}function Im(n=re()){return/iemobile/i.test(n)}function Am(n=re()){return/android/i.test(n)}function xm(n=re()){return/blackberry/i.test(n)}function Sm(n=re()){return/webos/i.test(n)}function Su(n=re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lE(n=re()){var t;return Su(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function uE(){return Tw()&&document.documentMode===10}function Pm(n=re()){return Su(n)||Am(n)||Sm(n)||xm(n)||/windows phone/i.test(n)||Im(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n,t=[]){let e;switch(n){case"Browser":e=cf(re());break;case"Worker":e=`${cf(re())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ts}/${i}`}/**
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
 */class dE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function hE(n,t={}){return Fe(n,"GET","/v2/passwordPolicy",An(n,t))}/**
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
 */const fE=6;class pE{constructor(t){var e,i,s,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:fE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new dE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=fn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await as.create(this,t),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ea(this,{idToken:t}),i=await Me._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Ie(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ta(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=G0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ie(this.app))return Promise.reject(yn(this));const e=t?mt(t):null;return e&&G(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ie(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ie(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await hE(this),e=new pE(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ur("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await cE(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&fn(t)||this._popupRedirectResolver;G(e,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[fn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,i,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&H0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ii(n){return mt(n)}class lf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Rw(e=>this.observer=e)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mE(n){Ja=n}function Cm(n){return Ja.loadJS(n)}function yE(){return Ja.recaptchaEnterpriseScript}function vE(){return Ja.gapiScript}function bE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _E{constructor(){this.enterprise=new wE}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class wE{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const EE="recaptcha-enterprise",Rm="NO_RECAPTCHA";class TE{constructor(t){this.type=EE,this.auth=ii(t)}async verify(t="verify",e=!1){async function i(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{tE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Z0(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;sf(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(Rm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _E().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!e&&sf(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=yE();c.length!==0&&(c+=a),Cm(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function uf(n,t,e,i=!1,s=!1){const r=new TE(n);let o;if(s)o=Rm;else try{o=await r.verify(e)}catch{o=await r.verify(e,!0)}const a=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ia(n,t,e,i,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await uf(n,t,e,e==="getOobCode");return i(n,o)}else return i(n,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await uf(n,t,e,e==="getOobCode");return i(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n,t){const e=wu(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(Ci(r,t??{}))return s;Ne(s,"already-initialized")}return e.initialize({options:t})}function AE(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(fn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function xE(n,t,e){const i=ii(n);G(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=Mm(t),{host:o,port:a}=SE(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Ci(l,i.config.emulator)&&Ci(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Es(o)?(om(`${r}//${o}${c}`),am("Auth",!0)):PE()}function Mm(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function SE(n){const t=Mm(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:df(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:df(o)}}}function df(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function PE(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return hn("not implemented")}_getIdTokenResponse(t){return hn("not implemented")}_linkToIdToken(t,e){return hn("not implemented")}_getReauthenticationResolver(t){return hn("not implemented")}}async function kE(n,t){return Fe(n,"POST","/v1/accounts:update",t)}async function CE(n,t){return Fe(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(n,t){return Hr(n,"POST","/v1/accounts:signInWithPassword",An(n,t))}async function ME(n,t){return Fe(n,"POST","/v1/accounts:sendOobCode",An(n,t))}async function DE(n,t){return ME(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(n,t){return Hr(n,"POST","/v1/accounts:signInWithEmailLink",An(n,t))}async function NE(n,t){return Hr(n,"POST","/v1/accounts:signInWithEmailLink",An(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Pu{constructor(t,e,i,s=null){super("password",i),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Ir(t,e,"password")}static _fromEmailAndCode(t,e,i=null){return new Ir(t,e,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(t,e,"signInWithPassword",RE);case"emailLink":return OE(t,{email:this._email,oobCode:this._password});default:Ne(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const i={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(t,i,"signUpPassword",CE);case"emailLink":return NE(t,{idToken:e,email:this._email,oobCode:this._password});default:Ne(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n,t){return Hr(n,"POST","/v1/accounts:signInWithIdp",An(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="http://localhost";class Di extends Pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Di(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ne("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=e,r=Tu(e,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Di(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return cs(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,cs(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,cs(t,e)}buildRequest(){const t={requestUri:LE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=zr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FE(n){const t=Ks(Ys(n)).link,e=t?Ks(Ys(t)).deep_link_id:null,i=Ks(Ys(n)).deep_link_id;return(i?Ks(Ys(i)).link:null)||i||e||t||n}class ku{constructor(t){var e,i,s,r,o,a;const c=Ks(Ys(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,h=VE((s=c.mode)!==null&&s!==void 0?s:null);G(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=FE(t);try{return new ku(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(t,e){return Ir._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const i=ku.parseLink(e);return G(i,"argument-error"),Ir._fromEmailAndCode(t,i.code,i.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qr extends Dm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends qr{constructor(){super("facebook.com")}static credential(t){return Di._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rn.credential(t.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Di._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Mn.credentialFromTaggedObject(t)}static credentialFromError(t){return Mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return Mn.credential(e,i)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends qr{constructor(){super("github.com")}static credential(t){return Di._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dn.credentialFromTaggedObject(t)}static credentialFromError(t){return Dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dn.credential(t.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends qr{constructor(){super("twitter.com")}static credential(t,e){return Di._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return On.credentialFromTaggedObject(t)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return On.credential(e,i)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n,t){return Hr(n,"POST","/v1/accounts:signUp",An(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Me._fromIdTokenResponse(t,i,s),o=hf(i);return new Oi({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=hf(i);return new Oi({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function hf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends In{constructor(t,e,i,s){var r;super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new Aa(t,e,i,s)}}function Om(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(n,r,t,i):r})}async function $E(n,t,e=!1){const i=await Mi(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Oi._forOperation(n,"link",i)}/**
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
 */async function Nm(n,t,e=!1){const{auth:i}=n;if(Ie(i.app))return Promise.reject(yn(i));const s="reauthenticate";try{const r=await Mi(n,Om(i,s,t,n),e);G(r.idToken,i,"internal-error");const o=xu(r.idToken);G(o,i,"internal-error");const{sub:a}=o;return G(n.uid===a,i,"user-mismatch"),Oi._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ne(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(n,t,e=!1){if(Ie(n.app))return Promise.reject(yn(n));const i="signIn",s=await Om(n,i,t),r=await Oi._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}async function UE(n,t){return Lm(ii(n),t)}async function Cu(n,t){return Nm(mt(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(n){const t=ii(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function zE(n,t,e){const i=ii(n);await Ia(i,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",DE)}async function jE(n,t,e){if(Ie(n.app))return Promise.reject(yn(n));const i=ii(n),o=await Ia(i,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BE).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Vm(n),c}),a=await Oi._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function HE(n,t,e){return Ie(n.app)?Promise.reject(yn(n)):UE(mt(n),xn.credential(t,e)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Vm(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(n,t){return Fe(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const i=mt(n),r={idToken:await i.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},o=await Mi(i,qE(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function WE(n,t){return GE(mt(n),null,t)}async function GE(n,t,e){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.password=e);const o=await Mi(n,kE(i,r));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(n,t){return mt(n).setPersistence(t)}function YE(n,t,e,i){return mt(n).onIdTokenChanged(t,e,i)}function XE(n,t,e){return mt(n).beforeAuthStateChanged(t,e)}function QE(n,t,e,i){return mt(n).onAuthStateChanged(t,e,i)}function JE(n){return mt(n).signOut()}async function ZE(n){return mt(n).delete()}const xa="__sak";/**
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
 */class Bm{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(xa,"1"),this.storage.removeItem(xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=1e3,eT=10;class $m extends Bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);uE()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,eT):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},tT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}$m.type="LOCAL";const Um=$m;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm extends Bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}zm.type="SESSION";const jm=zm;/**
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
 */function nT(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Za{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new Za(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await nT(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class iT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Ru("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function sT(n){qe().location.href=n}/**
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
 */function Hm(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aT(){return Hm()?self:null}/**
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
 */const qm="firebaseLocalStorageDb",cT=1,Sa="firebaseLocalStorage",Wm="fbase_key";class Wr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function tc(n,t){return n.transaction([Sa],t?"readwrite":"readonly").objectStore(Sa)}function lT(){const n=indexedDB.deleteDatabase(qm);return new Wr(n).toPromise()}function Ol(){const n=indexedDB.open(qm,cT);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sa,{keyPath:Wm})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sa)?t(i):(i.close(),await lT(),t(await Ol()))})})}async function ff(n,t,e){const i=tc(n,!0).put({[Wm]:t,value:e});return new Wr(i).toPromise()}async function uT(n,t){const e=tc(n,!1).get(t),i=await new Wr(e).toPromise();return i===void 0?null:i.value}function pf(n,t){const e=tc(n,!0).delete(t);return new Wr(e).toPromise()}const dT=800,hT=3;class Gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ol(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>hT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Za._getInstance(aT()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new iT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((e=i[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||oT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ol();return await ff(t,xa,"1"),await pf(t,xa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>ff(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>uT(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>pf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=tc(s,!1).getAll();return new Wr(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gm.type="LOCAL";const fT=Gm;new jr(3e4,6e4);/**
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
 */function pT(n,t){return t?fn(t):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mu extends Pu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return cs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return cs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return cs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function gT(n){return Lm(n.auth,new Mu(n),n.bypassAuthState)}function mT(n){const{auth:t,user:e}=n;return G(e,t,"internal-error"),Nm(e,new Mu(n),n.bypassAuthState)}async function yT(n){const{auth:t,user:e}=n;return G(e,t,"internal-error"),$E(e,new Mu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gT;case"linkViaPopup":case"linkViaRedirect":return yT;case"reauthViaPopup":case"reauthViaRedirect":return mT;default:Ne(this.auth,"internal-error")}}resolve(t){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new jr(2e3,1e4);class ns extends Km{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const t=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if(!((i=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,vT.get())};t()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="pendingRedirect",Xo=new Map;class _T extends Km{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=Xo.get(this.auth._key());if(!t){try{const i=await wT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}Xo.set(this.auth._key(),t)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wT(n,t){const e=IT(t),i=TT(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}function ET(n,t){Xo.set(n._key(),t)}function TT(n){return fn(n._redirectPersistence)}function IT(n){return Yo(bT,n.config.apiKey,n.name)}async function AT(n,t,e=!1){if(Ie(n.app))return Promise.reject(yn(n));const i=ii(n),s=pT(i,t),o=await new _T(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=600*1e3;class ST{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!PT(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!Ym(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";e.onError(He(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=xT&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(t))}saveEventToCache(t){this.cachedEventUids.add(gf(t)),this.lastProcessedEventTime=Date.now()}}function gf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Ym({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function PT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ym(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(n,t={}){return Fe(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RT=/^https?/;async function MT(n){if(n.config.emulator)return;const{authorizedDomains:t}=await kT(n);for(const e of t)try{if(DT(e))return}catch{}Ne(n,"unauthorized-domain")}function DT(n){const t=Ml(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!RT.test(e))return!1;if(CT.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const OT=new jr(3e4,6e4);function mf(){const n=qe().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function NT(n){return new Promise((t,e)=>{var i,s,r;function o(){mf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mf(),e(He(n,"network-request-failed"))},timeout:OT.get()})}if(!((s=(i=qe().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=qe().gapi)===null||r===void 0)&&r.load)o();else{const a=bE("iframefcb");return qe()[a]=()=>{gapi.load?o():e(He(n,"network-request-failed"))},Cm(`${vE()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Qo=null,t})}let Qo=null;function LT(n){return Qo=Qo||NT(n),Qo}/**
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
 */const VT=new jr(5e3,15e3),FT="__/auth/iframe",BT="emulator/auth/iframe",$T={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zT(n){const t=n.config;G(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Au(t,BT):`https://${n.config.authDomain}/${FT}`,i={apiKey:t.apiKey,appName:n.name,v:Ts},s=UT.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${zr(i).slice(1)}`}async function jT(n){const t=await LT(n),e=qe().gapi;return G(e,n,"internal-error"),t.open({where:document.body,url:zT(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$T,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=He(n,"network-request-failed"),a=qe().setTimeout(()=>{r(o)},VT.get());function c(){qe().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const HT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qT=500,WT=600,GT="_blank",KT="http://localhost";class yf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YT(n,t,e,i=qT,s=WT){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},HT),{width:i.toString(),height:s.toString(),top:r,left:o}),l=re().toLowerCase();e&&(a=Tm(l)?GT:e),wm(l)&&(t=t||KT,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(lE(l)&&a!=="_self")return XT(t||"",a),new yf(null);const h=window.open(t||"",a,d);G(h,n,"popup-blocked");try{h.focus()}catch{}return new yf(h)}function XT(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const QT="__/auth/handler",JT="emulator/auth/handler",ZT=encodeURIComponent("fac");async function vf(n,t,e,i,s,r){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:Ts,eventId:s};if(t instanceof Dm){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Cw(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof qr){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${ZT}=${encodeURIComponent(c)}`:"";return`${tI(n)}?${zr(a).slice(1)}${l}`}function tI({config:n}){return n.emulator?Au(n,JT):`https://${n.authDomain}/${QT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="webStorageSupport";class eI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jm,this._completeRedirectFn=AT,this._overrideRedirectResult=ET}async _openPopup(t,e,i,s){var r;wn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await vf(t,e,i,Ml(),s);return YT(t,o,Ru())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await vf(t,e,i,Ml(),s);return sT(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(wn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await jT(t),i=new ST(t);return e.register("authEvent",s=>(G(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(sl,{type:sl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[sl];o!==void 0&&e(!!o),Ne(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=MT(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Pm()||Em()||Su()}}const nI=eI;var bf="@firebase/auth",_f="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rI(n){fs(new Ri("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:km(n)},l=new gE(i,s,r,c);return AE(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),fs(new Ri("auth-internal",t=>{const e=ii(t.getProvider("auth").getImmediate());return(i=>new iI(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(bf,_f,sI(n)),jn(bf,_f,"esm2017")}/**
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
 */const oI=300,aI=rm("authIdTokenMaxAge")||oI;let wf=null;const cI=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>aI)return;const s=e==null?void 0:e.token;wf!==s&&(wf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lI(n=Eu()){const t=wu(n,"auth");if(t.isInitialized())return t.getImmediate();const e=IE(n,{popupRedirectResolver:nI,persistence:[fT,Um,jm]}),i=rm("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=cI(r.toString());XE(e,o,()=>o(e.currentUser)),YE(e,a=>o(a))}}const s=im("auth");return s&&xE(e,`http://${s}`),e}function uI(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}mE({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=He("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",uI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rI("Browser");var dI="firebase",hI="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(dI,hI,"app");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,Xm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,_){function T(){}T.prototype=_.prototype,I.D=_.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,S,k){for(var x=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)x[rt-2]=arguments[rt];return _.prototype[S].apply(A,x)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,T){T||(T=0);var A=Array(16);if(typeof _=="string")for(var S=0;16>S;++S)A[S]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(S=0;16>S;++S)A[S]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=I.g[0],T=I.g[1],S=I.g[2];var k=I.g[3],x=_+(k^T&(S^k))+A[0]+3614090360&4294967295;_=T+(x<<7&4294967295|x>>>25),x=k+(S^_&(T^S))+A[1]+3905402710&4294967295,k=_+(x<<12&4294967295|x>>>20),x=S+(T^k&(_^T))+A[2]+606105819&4294967295,S=k+(x<<17&4294967295|x>>>15),x=T+(_^S&(k^_))+A[3]+3250441966&4294967295,T=S+(x<<22&4294967295|x>>>10),x=_+(k^T&(S^k))+A[4]+4118548399&4294967295,_=T+(x<<7&4294967295|x>>>25),x=k+(S^_&(T^S))+A[5]+1200080426&4294967295,k=_+(x<<12&4294967295|x>>>20),x=S+(T^k&(_^T))+A[6]+2821735955&4294967295,S=k+(x<<17&4294967295|x>>>15),x=T+(_^S&(k^_))+A[7]+4249261313&4294967295,T=S+(x<<22&4294967295|x>>>10),x=_+(k^T&(S^k))+A[8]+1770035416&4294967295,_=T+(x<<7&4294967295|x>>>25),x=k+(S^_&(T^S))+A[9]+2336552879&4294967295,k=_+(x<<12&4294967295|x>>>20),x=S+(T^k&(_^T))+A[10]+4294925233&4294967295,S=k+(x<<17&4294967295|x>>>15),x=T+(_^S&(k^_))+A[11]+2304563134&4294967295,T=S+(x<<22&4294967295|x>>>10),x=_+(k^T&(S^k))+A[12]+1804603682&4294967295,_=T+(x<<7&4294967295|x>>>25),x=k+(S^_&(T^S))+A[13]+4254626195&4294967295,k=_+(x<<12&4294967295|x>>>20),x=S+(T^k&(_^T))+A[14]+2792965006&4294967295,S=k+(x<<17&4294967295|x>>>15),x=T+(_^S&(k^_))+A[15]+1236535329&4294967295,T=S+(x<<22&4294967295|x>>>10),x=_+(S^k&(T^S))+A[1]+4129170786&4294967295,_=T+(x<<5&4294967295|x>>>27),x=k+(T^S&(_^T))+A[6]+3225465664&4294967295,k=_+(x<<9&4294967295|x>>>23),x=S+(_^T&(k^_))+A[11]+643717713&4294967295,S=k+(x<<14&4294967295|x>>>18),x=T+(k^_&(S^k))+A[0]+3921069994&4294967295,T=S+(x<<20&4294967295|x>>>12),x=_+(S^k&(T^S))+A[5]+3593408605&4294967295,_=T+(x<<5&4294967295|x>>>27),x=k+(T^S&(_^T))+A[10]+38016083&4294967295,k=_+(x<<9&4294967295|x>>>23),x=S+(_^T&(k^_))+A[15]+3634488961&4294967295,S=k+(x<<14&4294967295|x>>>18),x=T+(k^_&(S^k))+A[4]+3889429448&4294967295,T=S+(x<<20&4294967295|x>>>12),x=_+(S^k&(T^S))+A[9]+568446438&4294967295,_=T+(x<<5&4294967295|x>>>27),x=k+(T^S&(_^T))+A[14]+3275163606&4294967295,k=_+(x<<9&4294967295|x>>>23),x=S+(_^T&(k^_))+A[3]+4107603335&4294967295,S=k+(x<<14&4294967295|x>>>18),x=T+(k^_&(S^k))+A[8]+1163531501&4294967295,T=S+(x<<20&4294967295|x>>>12),x=_+(S^k&(T^S))+A[13]+2850285829&4294967295,_=T+(x<<5&4294967295|x>>>27),x=k+(T^S&(_^T))+A[2]+4243563512&4294967295,k=_+(x<<9&4294967295|x>>>23),x=S+(_^T&(k^_))+A[7]+1735328473&4294967295,S=k+(x<<14&4294967295|x>>>18),x=T+(k^_&(S^k))+A[12]+2368359562&4294967295,T=S+(x<<20&4294967295|x>>>12),x=_+(T^S^k)+A[5]+4294588738&4294967295,_=T+(x<<4&4294967295|x>>>28),x=k+(_^T^S)+A[8]+2272392833&4294967295,k=_+(x<<11&4294967295|x>>>21),x=S+(k^_^T)+A[11]+1839030562&4294967295,S=k+(x<<16&4294967295|x>>>16),x=T+(S^k^_)+A[14]+4259657740&4294967295,T=S+(x<<23&4294967295|x>>>9),x=_+(T^S^k)+A[1]+2763975236&4294967295,_=T+(x<<4&4294967295|x>>>28),x=k+(_^T^S)+A[4]+1272893353&4294967295,k=_+(x<<11&4294967295|x>>>21),x=S+(k^_^T)+A[7]+4139469664&4294967295,S=k+(x<<16&4294967295|x>>>16),x=T+(S^k^_)+A[10]+3200236656&4294967295,T=S+(x<<23&4294967295|x>>>9),x=_+(T^S^k)+A[13]+681279174&4294967295,_=T+(x<<4&4294967295|x>>>28),x=k+(_^T^S)+A[0]+3936430074&4294967295,k=_+(x<<11&4294967295|x>>>21),x=S+(k^_^T)+A[3]+3572445317&4294967295,S=k+(x<<16&4294967295|x>>>16),x=T+(S^k^_)+A[6]+76029189&4294967295,T=S+(x<<23&4294967295|x>>>9),x=_+(T^S^k)+A[9]+3654602809&4294967295,_=T+(x<<4&4294967295|x>>>28),x=k+(_^T^S)+A[12]+3873151461&4294967295,k=_+(x<<11&4294967295|x>>>21),x=S+(k^_^T)+A[15]+530742520&4294967295,S=k+(x<<16&4294967295|x>>>16),x=T+(S^k^_)+A[2]+3299628645&4294967295,T=S+(x<<23&4294967295|x>>>9),x=_+(S^(T|~k))+A[0]+4096336452&4294967295,_=T+(x<<6&4294967295|x>>>26),x=k+(T^(_|~S))+A[7]+1126891415&4294967295,k=_+(x<<10&4294967295|x>>>22),x=S+(_^(k|~T))+A[14]+2878612391&4294967295,S=k+(x<<15&4294967295|x>>>17),x=T+(k^(S|~_))+A[5]+4237533241&4294967295,T=S+(x<<21&4294967295|x>>>11),x=_+(S^(T|~k))+A[12]+1700485571&4294967295,_=T+(x<<6&4294967295|x>>>26),x=k+(T^(_|~S))+A[3]+2399980690&4294967295,k=_+(x<<10&4294967295|x>>>22),x=S+(_^(k|~T))+A[10]+4293915773&4294967295,S=k+(x<<15&4294967295|x>>>17),x=T+(k^(S|~_))+A[1]+2240044497&4294967295,T=S+(x<<21&4294967295|x>>>11),x=_+(S^(T|~k))+A[8]+1873313359&4294967295,_=T+(x<<6&4294967295|x>>>26),x=k+(T^(_|~S))+A[15]+4264355552&4294967295,k=_+(x<<10&4294967295|x>>>22),x=S+(_^(k|~T))+A[6]+2734768916&4294967295,S=k+(x<<15&4294967295|x>>>17),x=T+(k^(S|~_))+A[13]+1309151649&4294967295,T=S+(x<<21&4294967295|x>>>11),x=_+(S^(T|~k))+A[4]+4149444226&4294967295,_=T+(x<<6&4294967295|x>>>26),x=k+(T^(_|~S))+A[11]+3174756917&4294967295,k=_+(x<<10&4294967295|x>>>22),x=S+(_^(k|~T))+A[2]+718787259&4294967295,S=k+(x<<15&4294967295|x>>>17),x=T+(k^(S|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(S+(x<<21&4294967295|x>>>11))&4294967295,I.g[2]=I.g[2]+S&4294967295,I.g[3]=I.g[3]+k&4294967295}i.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var T=_-this.blockSize,A=this.B,S=this.h,k=0;k<_;){if(S==0)for(;k<=T;)s(this,I,k),k+=this.blockSize;if(typeof I=="string"){for(;k<_;)if(A[S++]=I.charCodeAt(k++),S==this.blockSize){s(this,A),S=0;break}}else for(;k<_;)if(A[S++]=I[k++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=_},i.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var T=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=T&255,T/=256;for(this.u(I),I=Array(16),_=T=0;4>_;++_)for(var A=0;32>A;A+=8)I[T++]=this.g[_]>>>A&255;return I};function r(I,_){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=_(I)}function o(I,_){this.h=_;for(var T=[],A=!0,S=I.length-1;0<=S;S--){var k=I[S]|0;A&&k==_||(T[S]=k,A=!1)}this.g=T}var a={};function c(I){return-128<=I&&128>I?r(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function l(I){if(isNaN(I)||!isFinite(I))return h;if(0>I)return v(l(-I));for(var _=[],T=1,A=0;I>=T;A++)_[A]=I/T|0,T*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return v(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=l(Math.pow(_,8)),A=h,S=0;S<I.length;S+=8){var k=Math.min(8,I.length-S),x=parseInt(I.substring(S,S+k),_);8>k?(k=l(Math.pow(_,k)),A=A.j(k).add(l(x))):(A=A.j(T),A=A.add(l(x)))}return A}var h=c(0),f=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(b(this))return-v(this).m();for(var I=0,_=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(y(this))return"0";if(b(this))return"-"+v(this).toString(I);for(var _=l(Math.pow(I,6)),T=this,A="";;){var S=D(T,_).g;T=E(T,S.j(_));var k=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=S,y(T))return k+A;for(;6>k.length;)k="0"+k;A=k+A}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function y(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function b(I){return I.h==-1}n.l=function(I){return I=E(this,I),b(I)?-1:y(I)?0:1};function v(I){for(var _=I.g.length,T=[],A=0;A<_;A++)T[A]=~I.g[A];return new o(T,~I.h).add(f)}n.abs=function(){return b(this)?v(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],A=0,S=0;S<=_;S++){var k=A+(this.i(S)&65535)+(I.i(S)&65535),x=(k>>>16)+(this.i(S)>>>16)+(I.i(S)>>>16);A=x>>>16,k&=65535,x&=65535,T[S]=x<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(I,_){return I.add(v(_))}n.j=function(I){if(y(this)||y(I))return h;if(b(this))return b(I)?v(this).j(v(I)):v(v(this).j(I));if(b(I))return v(this.j(v(I)));if(0>this.l(g)&&0>I.l(g))return l(this.m()*I.m());for(var _=this.g.length+I.g.length,T=[],A=0;A<2*_;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<I.g.length;S++){var k=this.i(A)>>>16,x=this.i(A)&65535,rt=I.i(S)>>>16,tt=I.i(S)&65535;T[2*A+2*S]+=x*tt,P(T,2*A+2*S),T[2*A+2*S+1]+=k*tt,P(T,2*A+2*S+1),T[2*A+2*S+1]+=x*rt,P(T,2*A+2*S+1),T[2*A+2*S+2]+=k*rt,P(T,2*A+2*S+2)}for(A=0;A<_;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=_;A<2*_;A++)T[A]=0;return new o(T,0)};function P(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function C(I,_){this.g=I,this.h=_}function D(I,_){if(y(_))throw Error("division by zero");if(y(I))return new C(h,h);if(b(I))return _=D(v(I),_),new C(v(_.g),v(_.h));if(b(_))return _=D(I,v(_)),new C(v(_.g),_.h);if(30<I.g.length){if(b(I)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var T=f,A=_;0>=A.l(I);)T=O(T),A=O(A);var S=L(T,1),k=L(A,1);for(A=L(A,2),T=L(T,2);!y(A);){var x=k.add(A);0>=x.l(I)&&(S=S.add(T),k=x),A=L(A,1),T=L(T,1)}return _=E(I,S.j(_)),new C(S,_)}for(S=h;0<=I.l(_);){for(T=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),k=l(T),x=k.j(_);b(x)||0<x.l(I);)T-=A,k=l(T),x=k.j(_);y(k)&&(k=f),S=S.add(k),I=E(I,x)}return new C(S,I)}n.A=function(I){return D(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],A=0;A<_;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],A=0;A<_;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),T=[],A=0;A<_;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function O(I){for(var _=I.g.length+1,T=[],A=0;A<_;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function L(I,_){var T=_>>5;_%=32;for(var A=I.g.length-T,S=[],k=0;k<A;k++)S[k]=0<_?I.i(k+T)>>>_|I.i(k+T+1)<<32-_:I.i(k+T);return new o(S,I.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Xm=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Hn=o}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});var Po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qm,Xs,Jm,Jo,Nl,Zm,ty,ey;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,m){return u==Array.prototype||u==Object.prototype||(u[p]=m.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Po=="object"&&Po];for(var p=0;p<u.length;++p){var m=u[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=e(this);function s(u,p){if(p)t:{var m=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var M=u[w];if(!(M in m))break t;m=m[M]}u=u[u.length-1],w=m[u],p=p(w),p!=w&&p!=null&&t(m,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var m=0,w=!1,M={next:function(){if(!w&&m<u.length){var N=m++;return{value:p(N,u[N]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(u){return u||function(){return r(this,function(p,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,m){return u.call.apply(u.bind,arguments)}function h(u,p,m){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function f(u,p,m){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function g(u,p){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function y(u,p){function m(){}m.prototype=p.prototype,u.aa=p.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(w,M,N){for(var $=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)$[ft-2]=arguments[ft];return p.prototype[M].apply(w,$)}}function b(u){const p=u.length;if(0<p){const m=Array(p);for(let w=0;w<p;w++)m[w]=u[w];return m}return[]}function v(u,p){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const M=u.length||0,N=w.length||0;u.length=M+N;for(let $=0;$<N;$++)u[M+$]=w[$]}else u.push(w)}}class E{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function P(u){return/^[\s\xa0]*$/.test(u)}function C(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var O=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function L(u,p,m){for(const w in u)p.call(m,u[w],w,u)}function I(u,p){for(const m in u)p.call(void 0,u[m],m,u)}function _(u){const p={};for(const m in u)p[m]=u[m];return p}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,p){let m,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(m in w)u[m]=w[m];for(let N=0;N<T.length;N++)m=T[N],Object.prototype.hasOwnProperty.call(w,m)&&(u[m]=w[m])}}function S(u){var p=1;u=u.split(":");const m=[];for(;0<p&&u.length;)m.push(u.shift()),p--;return u.length&&m.push(u.join(":")),m}function k(u){a.setTimeout(()=>{throw u},0)}function x(){var u=Dt;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class rt{constructor(){this.h=this.g=null}add(p,m){const w=tt.get();w.set(p,m),this.h?this.h.next=w:this.g=w,this.h=w}}var tt=new E(()=>new dt,u=>u.reset());class dt{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,zt=!1,Dt=new rt,en=()=>{const u=a.Promise.resolve(void 0);ht=()=>{u.then(Hi)}};var Hi=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(m){k(m)}var p=tt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}zt=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function At(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var nn=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,p),a.removeEventListener("test",m,p)}catch{}return u})();function Se(u,p){if(At.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(O){t:{try{D(p.nodeName);var M=!0;break t}catch{}M=!1}M||(p=null)}}else m=="mouseover"?p=u.fromElement:m=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:sn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}y(Se,At);var sn={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ao="closure_listenable_"+(1e6*Math.random()|0),x_=0;function S_(u,p,m,w,M){this.listener=u,this.proxy=null,this.src=p,this.type=m,this.capture=!!w,this.ha=M,this.key=++x_,this.da=this.fa=!1}function co(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function lo(u){this.src=u,this.g={},this.h=0}lo.prototype.add=function(u,p,m,w,M){var N=u.toString();u=this.g[N],u||(u=this.g[N]=[],this.h++);var $=Cc(u,p,w,M);return-1<$?(p=u[$],m||(p.fa=!1)):(p=new S_(p,this.src,N,!!w,M),p.fa=m,u.push(p)),p};function kc(u,p){var m=p.type;if(m in u.g){var w=u.g[m],M=Array.prototype.indexOf.call(w,p,void 0),N;(N=0<=M)&&Array.prototype.splice.call(w,M,1),N&&(co(p),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Cc(u,p,m,w){for(var M=0;M<u.length;++M){var N=u[M];if(!N.da&&N.listener==p&&N.capture==!!m&&N.ha==w)return M}return-1}var Rc="closure_lm_"+(1e6*Math.random()|0),Mc={};function Wd(u,p,m,w,M){if(Array.isArray(p)){for(var N=0;N<p.length;N++)Wd(u,p[N],m,w,M);return null}return m=Yd(m),u&&u[ao]?u.K(p,m,l(w)?!!w.capture:!1,M):P_(u,p,m,!1,w,M)}function P_(u,p,m,w,M,N){if(!p)throw Error("Invalid event type");var $=l(M)?!!M.capture:!!M,ft=Oc(u);if(ft||(u[Rc]=ft=new lo(u)),m=ft.add(p,m,w,$,N),m.proxy)return m;if(w=k_(),m.proxy=w,w.src=u,w.listener=m,u.addEventListener)nn||(M=$),M===void 0&&(M=!1),u.addEventListener(p.toString(),w,M);else if(u.attachEvent)u.attachEvent(Kd(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function k_(){function u(m){return p.call(u.src,u.listener,m)}const p=C_;return u}function Gd(u,p,m,w,M){if(Array.isArray(p))for(var N=0;N<p.length;N++)Gd(u,p[N],m,w,M);else w=l(w)?!!w.capture:!!w,m=Yd(m),u&&u[ao]?(u=u.i,p=String(p).toString(),p in u.g&&(N=u.g[p],m=Cc(N,m,w,M),-1<m&&(co(N[m]),Array.prototype.splice.call(N,m,1),N.length==0&&(delete u.g[p],u.h--)))):u&&(u=Oc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Cc(p,m,w,M)),(m=-1<u?p[u]:null)&&Dc(m))}function Dc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ao])kc(p.i,u);else{var m=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(m,w,u.capture):p.detachEvent?p.detachEvent(Kd(m),w):p.addListener&&p.removeListener&&p.removeListener(w),(m=Oc(p))?(kc(m,u),m.h==0&&(m.src=null,p[Rc]=null)):co(u)}}}function Kd(u){return u in Mc?Mc[u]:Mc[u]="on"+u}function C_(u,p){if(u.da)u=!0;else{p=new Se(p,this);var m=u.listener,w=u.ha||u.src;u.fa&&Dc(u),u=m.call(w,p)}return u}function Oc(u){return u=u[Rc],u instanceof lo?u:null}var Nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yd(u){return typeof u=="function"?u:(u[Nc]||(u[Nc]=function(p){return u.handleEvent(p)}),u[Nc])}function Kt(){ae.call(this),this.i=new lo(this),this.M=this,this.F=null}y(Kt,ae),Kt.prototype[ao]=!0,Kt.prototype.removeEventListener=function(u,p,m,w){Gd(this,u,p,m,w)};function ce(u,p){var m,w=u.F;if(w)for(m=[];w;w=w.F)m.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new At(p,u);else if(p instanceof At)p.target=p.target||u;else{var M=p;p=new At(w,u),A(p,M)}if(M=!0,m)for(var N=m.length-1;0<=N;N--){var $=p.g=m[N];M=uo($,w,!0,p)&&M}if($=p.g=u,M=uo($,w,!0,p)&&M,M=uo($,w,!1,p)&&M,m)for(N=0;N<m.length;N++)$=p.g=m[N],M=uo($,w,!1,p)&&M}Kt.prototype.N=function(){if(Kt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var m=u.g[p],w=0;w<m.length;w++)co(m[w]);delete u.g[p],u.h--}}this.F=null},Kt.prototype.K=function(u,p,m,w){return this.i.add(String(u),p,!1,m,w)},Kt.prototype.L=function(u,p,m,w){return this.i.add(String(u),p,!0,m,w)};function uo(u,p,m,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,N=0;N<p.length;++N){var $=p[N];if($&&!$.da&&$.capture==m){var ft=$.listener,jt=$.ha||$.src;$.fa&&kc(u.i,$),M=ft.call(jt,w)!==!1&&M}}return M&&!w.defaultPrevented}function Xd(u,p,m){if(typeof u=="function")m&&(u=f(u,m));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Qd(u){u.g=Xd(()=>{u.g=null,u.i&&(u.i=!1,Qd(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class R_ extends ae{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Qd(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(u){ae.call(this),this.h=u,this.g={}}y(Cs,ae);var Jd=[];function Zd(u){L(u.g,function(p,m){this.g.hasOwnProperty(m)&&Dc(p)},u),u.g={}}Cs.prototype.N=function(){Cs.aa.N.call(this),Zd(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lc=a.JSON.stringify,M_=a.JSON.parse,D_=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Vc(){}Vc.prototype.h=null;function th(u){return u.h||(u.h=u.i())}function eh(){}var Rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fc(){At.call(this,"d")}y(Fc,At);function Bc(){At.call(this,"c")}y(Bc,At);var di={},nh=null;function ho(){return nh=nh||new Kt}di.La="serverreachability";function ih(u){At.call(this,di.La,u)}y(ih,At);function Ms(u){const p=ho();ce(p,new ih(p))}di.STAT_EVENT="statevent";function sh(u,p){At.call(this,di.STAT_EVENT,u),this.stat=p}y(sh,At);function le(u){const p=ho();ce(p,new sh(p,u))}di.Ma="timingevent";function rh(u,p){At.call(this,di.Ma,u),this.size=p}y(rh,At);function Ds(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Os(){this.g=!0}Os.prototype.xa=function(){this.g=!1};function O_(u,p,m,w,M,N){u.info(function(){if(u.g)if(N)for(var $="",ft=N.split("&"),jt=0;jt<ft.length;jt++){var at=ft[jt].split("=");if(1<at.length){var Yt=at[0];at=at[1];var Xt=Yt.split("_");$=2<=Xt.length&&Xt[1]=="type"?$+(Yt+"="+at+"&"):$+(Yt+"=redacted&")}}else $=null;else $=N;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+m+`
`+$})}function N_(u,p,m,w,M,N,$){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+m+`
`+N+" "+$})}function qi(u,p,m,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+V_(u,m)+(w?" "+w:"")})}function L_(u,p){u.info(function(){return"TIMEOUT: "+p})}Os.prototype.info=function(){};function V_(u,p){if(!u.g)return p;if(!p)return null;try{var m=JSON.parse(p);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var w=m[u];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var N=M[0];if(N!="noop"&&N!="stop"&&N!="close")for(var $=1;$<M.length;$++)M[$]=""}}}}return Lc(m)}catch{return p}}var fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function po(){}y(po,Vc),po.prototype.g=function(){return new XMLHttpRequest},po.prototype.i=function(){return{}},$c=new po;function Sn(u,p,m,w){this.j=u,this.i=p,this.l=m,this.R=w||1,this.U=new Cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var ch={},Uc={};function zc(u,p,m){u.L=1,u.v=vo(rn(p)),u.m=m,u.P=!0,lh(u,null)}function lh(u,p){u.F=Date.now(),go(u),u.A=rn(u.v);var m=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Th(m.i,"t",w),u.C=0,m=u.j.J,u.h=new ah,u.g=Uh(u.j,m?p:null,!u.m),0<u.O&&(u.M=new R_(f(u.Y,u,u.g),u.O)),p=u.U,m=u.g,w=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Jd[0]=M.toString()),M=Jd);for(var N=0;N<M.length;N++){var $=Wd(m,M[N],w||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Ms(),O_(u.i,u.u,u.A,u.l,u.R,u.m)}Sn.prototype.ca=function(u){u=u.target;const p=this.M;p&&on(u)==3?p.j():this.Y(u)},Sn.prototype.Y=function(u){try{if(u==this.g)t:{const Xt=on(this.g);var p=this.g.Ba();const Ki=this.g.Z();if(!(3>Xt)&&(Xt!=3||this.g&&(this.h.h||this.g.oa()||Ch(this.g)))){this.J||Xt!=4||p==7||(p==8||0>=Ki?Ms(3):Ms(2)),jc(this);var m=this.g.Z();this.X=m;e:if(uh(this)){var w=Ch(this.g);u="";var M=w.length,N=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),Ns(this);var $="";break e}this.h.i=new a.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(N&&p==M-1)});w.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=m==200,N_(this.i,this.u,this.A,this.l,this.R,Xt,m),this.o){if(this.T&&!this.K){e:{if(this.g){var ft,jt=this.g;if((ft=jt.g?jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(ft)){var at=ft;break e}}at=null}if(m=at)qi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hc(this,m);else{this.o=!1,this.s=3,le(12),hi(this),Ns(this);break t}}if(this.P){m=!0;let Pe;for(;!this.J&&this.C<$.length;)if(Pe=F_(this,$),Pe==Uc){Xt==4&&(this.s=4,le(14),m=!1),qi(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==ch){this.s=4,le(15),qi(this.i,this.l,$,"[Invalid Chunk]"),m=!1;break}else qi(this.i,this.l,Pe,null),Hc(this,Pe);if(uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xt!=4||$.length!=0||this.h.h||(this.s=1,le(16),m=!1),this.o=this.o&&m,!m)qi(this.i,this.l,$,"[Invalid Chunked Response]"),hi(this),Ns(this);else if(0<$.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Xc(Yt),Yt.M=!0,le(11))}}else qi(this.i,this.l,$,null),Hc(this,$);Xt==4&&hi(this),this.o&&!this.J&&(Xt==4?Vh(this.j,this):(this.o=!1,go(this)))}else ew(this.g),m==400&&0<$.indexOf("Unknown SID")?(this.s=3,le(12)):(this.s=0,le(13)),hi(this),Ns(this)}}}catch{}finally{}};function uh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function F_(u,p){var m=u.C,w=p.indexOf(`
`,m);return w==-1?Uc:(m=Number(p.substring(m,w)),isNaN(m)?ch:(w+=1,w+m>p.length?Uc:(p=p.slice(w,w+m),u.C=w+m,p)))}Sn.prototype.cancel=function(){this.J=!0,hi(this)};function go(u){u.S=Date.now()+u.I,dh(u,u.I)}function dh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ds(f(u.ba,u),p)}function jc(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Sn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(L_(this.i,this.A),this.L!=2&&(Ms(),le(17)),hi(this),this.s=2,Ns(this)):dh(this,this.S-u)};function Ns(u){u.j.G==0||u.J||Vh(u.j,u)}function hi(u){jc(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Zd(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Hc(u,p){try{var m=u.j;if(m.G!=0&&(m.g==u||qc(m.h,u))){if(!u.K&&qc(m.h,u)&&m.G==3){try{var w=m.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){t:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Io(m),Eo(m);else break t;Yc(m),le(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ds(f(m.Za,m),6e3));if(1>=ph(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else pi(m,11)}else if((u.K||m.g==u)&&Io(m),!P(p))for(M=m.Da.g.parse(p),p=0;p<M.length;p++){let at=M[p];if(m.T=at[0],at=at[1],m.G==2)if(at[0]=="c"){m.K=at[1],m.ia=at[2];const Yt=at[3];Yt!=null&&(m.la=Yt,m.j.info("VER="+m.la));const Xt=at[4];Xt!=null&&(m.Aa=Xt,m.j.info("SVER="+m.Aa));const Ki=at[5];Ki!=null&&typeof Ki=="number"&&0<Ki&&(w=1.5*Ki,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Pe=u.g;if(Pe){const xo=Pe.g?Pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var N=w.h;N.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Wc(N,N.h),N.h=null))}if(w.D){const Qc=Pe.g?Pe.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(w.ya=Qc,yt(w.I,w.D,Qc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var $=u;if(w.qa=$h(w,w.J?w.ia:null,w.W),$.K){gh(w.h,$);var ft=$,jt=w.L;jt&&(ft.I=jt),ft.B&&(jc(ft),go(ft)),w.g=$}else Nh(w);0<m.i.length&&To(m)}else at[0]!="stop"&&at[0]!="close"||pi(m,7);else m.G==3&&(at[0]=="stop"||at[0]=="close"?at[0]=="stop"?pi(m,7):Kc(m):at[0]!="noop"&&m.l&&m.l.ta(at),m.v=0)}}Ms(4)}catch{}}var B_=class{constructor(u,p){this.g=u,this.map=p}};function hh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ph(u){return u.h?1:u.g?u.g.size:0}function qc(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Wc(u,p){u.g?u.g.add(p):u.h=p}function gh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}hh.prototype.cancel=function(){if(this.i=mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function mh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const m of u.g.values())p=p.concat(m.D);return p}return b(u.i)}function $_(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],m=u.length,w=0;w<m;w++)p.push(u[w]);return p}p=[],m=0;for(w in u)p[m++]=u[w];return p}function U_(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var m=0;m<u;m++)p.push(m);return p}p=[],m=0;for(const w in u)p[m++]=w;return p}}}function yh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var m=U_(u),w=$_(u),M=w.length,N=0;N<M;N++)p.call(void 0,w[N],m&&m[N],u)}var vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z_(u,p){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var w=u[m].indexOf("="),M=null;if(0<=w){var N=u[m].substring(0,w);M=u[m].substring(w+1)}else N=u[m];p(N,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function fi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof fi){this.h=u.h,mo(this,u.j),this.o=u.o,this.g=u.g,yo(this,u.s),this.l=u.l;var p=u.i,m=new Fs;m.i=p.i,p.g&&(m.g=new Map(p.g),m.h=p.h),bh(this,m),this.m=u.m}else u&&(p=String(u).match(vh))?(this.h=!1,mo(this,p[1]||"",!0),this.o=Ls(p[2]||""),this.g=Ls(p[3]||"",!0),yo(this,p[4]),this.l=Ls(p[5]||"",!0),bh(this,p[6]||"",!0),this.m=Ls(p[7]||"")):(this.h=!1,this.i=new Fs(null,this.h))}fi.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Vs(p,_h,!0),":");var m=this.g;return(m||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Vs(p,_h,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Vs(m,m.charAt(0)=="/"?q_:H_,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Vs(m,G_)),u.join("")};function rn(u){return new fi(u)}function mo(u,p,m){u.j=m?Ls(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function yo(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function bh(u,p,m){p instanceof Fs?(u.i=p,K_(u.i,u.h)):(m||(p=Vs(p,W_)),u.i=new Fs(p,u.h))}function yt(u,p,m){u.i.set(p,m)}function vo(u){return yt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ls(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Vs(u,p,m){return typeof u=="string"?(u=encodeURI(u).replace(p,j_),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function j_(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var _h=/[#\/\?@]/g,H_=/[#\?:]/g,q_=/[#\?]/g,W_=/[#\?@]/g,G_=/#/g;function Fs(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Pn(u){u.g||(u.g=new Map,u.h=0,u.i&&z_(u.i,function(p,m){u.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}n=Fs.prototype,n.add=function(u,p){Pn(this),this.i=null,u=Wi(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(p),this.h+=1,this};function wh(u,p){Pn(u),p=Wi(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Eh(u,p){return Pn(u),p=Wi(u,p),u.g.has(p)}n.forEach=function(u,p){Pn(this),this.g.forEach(function(m,w){m.forEach(function(M){u.call(p,M,w,this)},this)},this)},n.na=function(){Pn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),m=[];for(let w=0;w<p.length;w++){const M=u[w];for(let N=0;N<M.length;N++)m.push(p[w])}return m},n.V=function(u){Pn(this);let p=[];if(typeof u=="string")Eh(this,u)&&(p=p.concat(this.g.get(Wi(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)p=p.concat(u[m])}return p},n.set=function(u,p){return Pn(this),this.i=null,u=Wi(this,u),Eh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Th(u,p,m){wh(u,p),0<m.length&&(u.i=null,u.g.set(Wi(u,p),b(m)),u.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var m=0;m<p.length;m++){var w=p[m];const N=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var M=N;$[w]!==""&&(M+="="+encodeURIComponent(String($[w]))),u.push(M)}}return this.i=u.join("&")};function Wi(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function K_(u,p){p&&!u.j&&(Pn(u),u.i=null,u.g.forEach(function(m,w){var M=w.toLowerCase();w!=M&&(wh(this,w),Th(this,M,m))},u)),u.j=p}function Y_(u,p){const m=new Os;if(a.Image){const w=new Image;w.onload=g(kn,m,"TestLoadImage: loaded",!0,p,w),w.onerror=g(kn,m,"TestLoadImage: error",!1,p,w),w.onabort=g(kn,m,"TestLoadImage: abort",!1,p,w),w.ontimeout=g(kn,m,"TestLoadImage: timeout",!1,p,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function X_(u,p){const m=new Os,w=new AbortController,M=setTimeout(()=>{w.abort(),kn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(N=>{clearTimeout(M),N.ok?kn(m,"TestPingServer: ok",!0,p):kn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),kn(m,"TestPingServer: error",!1,p)})}function kn(u,p,m,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(m)}catch{}}function Q_(){this.g=new D_}function J_(u,p,m){const w=m||"";try{yh(u,function(M,N){let $=M;l(M)&&($=Lc(M)),p.push(w+N+"="+encodeURIComponent($))})}catch(M){throw p.push(w+"type="+encodeURIComponent("_badmap")),M}}function bo(u){this.l=u.Ub||null,this.j=u.eb||!1}y(bo,Vc),bo.prototype.g=function(){return new _o(this.l,this.j)},bo.prototype.i=(function(u){return function(){return u}})({});function _o(u,p){Kt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(_o,Kt),n=_o.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,$s(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ih(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ih(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Bs(this):$s(this),this.readyState==3&&Ih(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Bs(this))},n.Qa=function(u){this.g&&(this.response=u,Bs(this))},n.ga=function(){this.g&&Bs(this)};function Bs(u){u.readyState=4,u.l=null,u.j=null,u.v=null,$s(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=p.next();return u.join(`\r
`)};function $s(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ah(u){let p="";return L(u,function(m,w){p+=w,p+=":",p+=m,p+=`\r
`}),p}function Gc(u,p,m){t:{for(w in m){var w=!1;break t}w=!0}w||(m=Ah(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):yt(u,p,m))}function xt(u){Kt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(xt,Kt);var Z_=/^https?$/i,tw=["POST","PUT"];n=xt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?th(this.o):th($c),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(N){xh(this,N);return}if(u=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)m.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const N of w.keys())m.set(N,w.get(N));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(N=>N.toLowerCase()=="content-type"),M=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tw,p,void 0))||w||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of m)this.g.setRequestHeader(N,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{kh(this),this.u=!0,this.g.send(u),this.u=!1}catch(N){xh(this,N)}};function xh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Sh(u),wo(u)}function Sh(u){u.A||(u.A=!0,ce(u,"complete"),ce(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ce(this,"complete"),ce(this,"abort"),wo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),xt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ph(this):this.bb())},n.bb=function(){Ph(this)};function Ph(u){if(u.h&&typeof o<"u"&&(!u.v[1]||on(u)!=4||u.Z()!=2)){if(u.u&&on(u)==4)Xd(u.Ea,0,u);else if(ce(u,"readystatechange"),on(u)==4){u.h=!1;try{const $=u.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var m;if(!(m=p)){var w;if(w=$===0){var M=String(u.D).match(vh)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),w=!Z_.test(M?M.toLowerCase():"")}m=w}if(m)ce(u,"complete"),ce(u,"success");else{u.m=6;try{var N=2<on(u)?u.g.statusText:""}catch{N=""}u.l=N+" ["+u.Z()+"]",Sh(u)}}finally{wo(u)}}}}function wo(u,p){if(u.g){kh(u);const m=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ce(u,"ready");try{m.onreadystatechange=w}catch{}}}function kh(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function on(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),M_(p)}};function Ch(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ew(u){const p={};u=(u.g&&2<=on(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(P(u[w]))continue;var m=S(u[w]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const N=p[M]||[];p[M]=N,N.push(m)}I(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(u,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||p}function Rh(u){this.Aa=0,this.i=[],this.j=new Os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Us("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Us("baseRetryDelayMs",5e3,u),this.cb=Us("retryDelaySeedMs",1e4,u),this.Wa=Us("forwardChannelMaxRetries",2,u),this.wa=Us("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new hh(u&&u.concurrentRequestLimit),this.Da=new Q_,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Rh.prototype,n.la=8,n.G=1,n.connect=function(u,p,m,w){le(0),this.W=u,this.H=p||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=$h(this,null,this.W),To(this)};function Kc(u){if(Mh(u),u.G==3){var p=u.U++,m=rn(u.I);if(yt(m,"SID",u.K),yt(m,"RID",p),yt(m,"TYPE","terminate"),zs(u,m),p=new Sn(u,u.j,p),p.L=2,p.v=vo(rn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=p.v,m=!0),m||(p.g=Uh(p.j,null),p.g.ea(p.v)),p.F=Date.now(),go(p)}Bh(u)}function Eo(u){u.g&&(Xc(u),u.g.cancel(),u.g=null)}function Mh(u){Eo(u),u.u&&(a.clearTimeout(u.u),u.u=null),Io(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function To(u){if(!fh(u.h)&&!u.s){u.s=!0;var p=u.Ga;ht||en(),zt||(ht(),zt=!0),Dt.add(p,u),u.B=0}}function nw(u,p){return ph(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ds(f(u.Ga,u,p),Fh(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Sn(this,this.j,u);let N=this.o;if(this.S&&(N?(N=_(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(M.H=N,N=null),this.P)t:{for(var p=0,m=0;m<this.i.length;m++){e:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=m;break t}if(p===4096||m===this.i.length-1){p=m+1;break t}}p=1e3}else p=1e3;p=Oh(this,M,p),m=rn(this.I),yt(m,"RID",u),yt(m,"CVER",22),this.D&&yt(m,"X-HTTP-Session-Id",this.D),zs(this,m),N&&(this.O?p="headers="+encodeURIComponent(String(Ah(N)))+"&"+p:this.m&&Gc(m,this.m,N)),Wc(this.h,M),this.Ua&&yt(m,"TYPE","init"),this.P?(yt(m,"$req",p),yt(m,"SID","null"),M.T=!0,zc(M,m,null)):zc(M,m,p),this.G=2}}else this.G==3&&(u?Dh(this,u):this.i.length==0||fh(this.h)||Dh(this))};function Dh(u,p){var m;p?m=p.l:m=u.U++;const w=rn(u.I);yt(w,"SID",u.K),yt(w,"RID",m),yt(w,"AID",u.T),zs(u,w),u.m&&u.o&&Gc(w,u.m,u.o),m=new Sn(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Oh(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Wc(u.h,m),zc(m,w,p)}function zs(u,p){u.H&&L(u.H,function(m,w){yt(p,w,m)}),u.l&&yh({},function(m,w){yt(p,w,m)})}function Oh(u,p,m){m=Math.min(u.i.length,m);var w=u.l?f(u.l.Na,u.l,u):null;t:{var M=u.i;let N=-1;for(;;){const $=["count="+m];N==-1?0<m?(N=M[0].g,$.push("ofs="+N)):N=0:$.push("ofs="+N);let ft=!0;for(let jt=0;jt<m;jt++){let at=M[jt].g;const Yt=M[jt].map;if(at-=N,0>at)N=Math.max(0,M[jt].g-100),ft=!1;else try{J_(Yt,$,"req"+at+"_")}catch{w&&w(Yt)}}if(ft){w=$.join("&");break t}}}return u=u.i.splice(0,m),p.D=u,w}function Nh(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ht||en(),zt||(ht(),zt=!0),Dt.add(p,u),u.v=0}}function Yc(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ds(f(u.Fa,u),Fh(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Lh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ds(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,le(10),Eo(this),Lh(this))};function Xc(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Lh(u){u.g=new Sn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=rn(u.qa);yt(p,"RID","rpc"),yt(p,"SID",u.K),yt(p,"AID",u.T),yt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&yt(p,"TO",u.ja),yt(p,"TYPE","xmlhttp"),zs(u,p),u.m&&u.o&&Gc(p,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=vo(rn(p)),m.m=null,m.P=!0,lh(m,u)}n.Za=function(){this.C!=null&&(this.C=null,Eo(this),Yc(this),le(19))};function Io(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function Vh(u,p){var m=null;if(u.g==p){Io(u),Xc(u),u.g=null;var w=2}else if(qc(u.h,p))m=p.D,gh(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){m=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;w=ho(),ce(w,new rh(w,m)),To(u)}else Nh(u);else if(M=p.s,M==3||M==0&&0<p.X||!(w==1&&nw(u,p)||w==2&&Yc(u)))switch(m&&0<m.length&&(p=u.h,p.i=p.i.concat(m)),M){case 1:pi(u,5);break;case 4:pi(u,10);break;case 3:pi(u,6);break;default:pi(u,2)}}}function Fh(u,p){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*p}function pi(u,p){if(u.j.info("Error code "+p),p==2){var m=f(u.fb,u),w=u.Xa;const M=!w;w=new fi(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mo(w,"https"),vo(w),M?Y_(w.toString(),m):X_(w.toString(),m)}else le(2);u.G=0,u.l&&u.l.sa(p),Bh(u),Mh(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))};function Bh(u){if(u.G=0,u.ka=[],u.l){const p=mh(u.h);(p.length!=0||u.i.length!=0)&&(v(u.ka,p),v(u.ka,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.ra()}}function $h(u,p,m){var w=m instanceof fi?rn(m):new fi(m);if(w.g!="")p&&(w.g=p+"."+w.g),yo(w,w.s);else{var M=a.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var N=new fi(null);w&&mo(N,w),p&&(N.g=p),M&&yo(N,M),m&&(N.l=m),w=N}return m=u.D,p=u.ya,m&&p&&yt(w,m,p),yt(w,"VER",u.la),zs(u,w),w}function Uh(u,p,m){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new xt(new bo({eb:m})):new xt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function zh(){}n=zh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ao(){}Ao.prototype.g=function(u,p){return new ye(u,p)};function ye(u,p){Kt.call(this),this.g=new Rh(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!P(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!P(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Gi(this)}y(ye,Kt),ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ye.prototype.close=function(){Kc(this.g)},ye.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Lc(u),u=m);p.i.push(new B_(p.Ya++,u)),p.G==3&&To(p)},ye.prototype.N=function(){this.g.l=null,delete this.j,Kc(this.g),delete this.g,ye.aa.N.call(this)};function jh(u){Fc.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const m in p){u=m;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}y(jh,Fc);function Hh(){Bc.call(this),this.status=1}y(Hh,Bc);function Gi(u){this.g=u}y(Gi,zh),Gi.prototype.ua=function(){ce(this.g,"a")},Gi.prototype.ta=function(u){ce(this.g,new jh(u))},Gi.prototype.sa=function(u){ce(this.g,new Hh)},Gi.prototype.ra=function(){ce(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,ye.prototype.send=ye.prototype.o,ye.prototype.open=ye.prototype.m,ye.prototype.close=ye.prototype.close,ey=function(){return new Ao},ty=function(){return ho()},Zm=di,Nl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fo.NO_ERROR=0,fo.TIMEOUT=8,fo.HTTP_ERROR=6,Jo=fo,oh.COMPLETE="complete",Jm=oh,eh.EventType=Rs,Rs.OPEN="a",Rs.CLOSE="b",Rs.ERROR="c",Rs.MESSAGE="d",Kt.prototype.listen=Kt.prototype.K,Xs=eh,xt.prototype.listenOnce=xt.prototype.L,xt.prototype.getLastError=xt.prototype.Ka,xt.prototype.getLastErrorCode=xt.prototype.Ba,xt.prototype.getStatus=xt.prototype.Z,xt.prototype.getResponseJson=xt.prototype.Oa,xt.prototype.getResponseText=xt.prototype.oa,xt.prototype.send=xt.prototype.ea,xt.prototype.setWithCredentials=xt.prototype.Ha,Qm=xt}).apply(typeof Po<"u"?Po:typeof self<"u"?self:typeof window<"u"?window:{});const Tf="@firebase/firestore",If="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new bu("@firebase/firestore");function Ji(){return Ni.logLevel}function j(n,...t){if(Ni.logLevel<=nt.DEBUG){const e=t.map(Du);Ni.debug(`Firestore (${Is}): ${n}`,...e)}}function En(n,...t){if(Ni.logLevel<=nt.ERROR){const e=t.map(Du);Ni.error(`Firestore (${Is}): ${n}`,...e)}}function Gn(n,...t){if(Ni.logLevel<=nt.WARN){const e=t.map(Du);Ni.warn(`Firestore (${Is}): ${n}`,...e)}}function Du(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,ny(n,i,e)}function ny(n,t,e){let i=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw En(i),new Error(i)}function lt(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||ny(t,s,i)}function Q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends In{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ee.UNAUTHENTICATED)))}shutdown(){}}class pI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class gI{constructor(t){this.t=t,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){lt(this.o===void 0,42304);let i=this.i;const s=c=>this.i!==i?(i=this.i,e(c)):Promise.resolve();let r=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vn,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=r;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string",31837,{l:i}),new iy(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string",2055,{h:t}),new ee(t)}}class mI{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yI{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new mI(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(ee.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Af{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vI{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ie(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){lt(this.o===void 0,3512);const i=r=>{r.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Af(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(lt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Af(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function sy(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=bI(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function Z(n,t){return n<t?-1:n>t?1:0}function Ll(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return Z(i,s);{const r=sy(),o=_I(r.encode(xf(n,e)),r.encode(xf(t,e)));return o!==0?o:Z(i,s)}}e+=i>65535?2:1}return Z(n.length,t.length)}function xf(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function _I(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return Z(n[e],t[e]);return Z(n.length,t.length)}function ps(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="__name__";class ze{constructor(t,e,i){e===void 0?e=0:e>t.length&&K(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&K(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return ze.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ze?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=ze.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return Z(t.length,e.length)}static compareSegments(t,e){const i=ze.isNumericId(t),s=ze.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?ze.extractNumericId(t).compare(ze.extractNumericId(e)):Ll(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Hn.fromString(t.substring(4,t.length-2))}}class gt extends ze{construct(t,e,i){return new gt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new gt(e)}static emptyPath(){return new gt([])}}const wI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends ze{construct(t,e,i){return new qt(t,e,i)}static isValidIdentifier(t){return wI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sf}static keyField(){return new qt([Sf])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qt(e)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(gt.fromString(t))}static fromName(t){return new W(gt.fromString(t).popFirst(5))}static empty(){return new W(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return gt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new gt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n,t,e){if(!e)throw new z(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function EI(n,t,e,i){if(t===!0&&i===!0)throw new z(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Pf(n){if(!W.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function kf(n){if(W.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oy(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ec(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function ue(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ec(n);throw new z(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Lt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Gr(n,t){if(!oy(n))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new z(V.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=-62135596800,Rf=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*Rf);return new vt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Cf)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rf}_compareTo(t){return this.seconds===t.seconds?Z(this.nanoseconds,t.nanoseconds):Z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Gr(t,vt._jsonSchema))return new vt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Cf;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Lt("string",vt._jsonSchemaVersion),seconds:Lt("number"),nanoseconds:Lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ar=-1;function TI(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new vt(e+1,0):new vt(e,i));return new Kn(s,W.empty(),t)}function II(n){return new Kn(n.readTime,n.key,Ar)}class Kn{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Kn(Y.min(),W.empty(),Ar)}static max(){return new Kn(Y.max(),W.empty(),Ar)}}function AI(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:Z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==xI)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):B.reject(e)}static resolve(t){return new B(((e,i)=>{e(t)}))}static reject(t){return new B(((e,i)=>{i(t)}))}static waitFor(t){return new B(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(c=>i(c)))})),o=!0,r===s&&e()}))}static or(t){let e=B.resolve(!1);for(const i of t)e=e.next((s=>s?B.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new B(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next((d=>{o[l]=d,++a,a===r&&i(o)}),(d=>s(d)))}}))}static doWhile(t,e){return new B(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function PI(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class nc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this._e(i),this.ae=i=>e.writeSequenceNumber(i))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}nc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=-1;function ic(n){return n==null}function Pa(n){return n===0&&1/n==-1/0}function kI(n){return typeof n=="number"&&Number.isInteger(n)&&!Pa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="";function CI(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Mf(t)),t=RI(n.get(e),t);return Mf(t)}function RI(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case ay:e+="";break;default:e+=r}}return e}function Mf(n){return n+ay+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function si(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function cy(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){this.comparator=t,this.root=e||Ht.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ko(this.root,t,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ko(this.root,t,this.comparator,!0)}}class ko{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ht{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??Ht.RED,this.left=s??Ht.EMPTY,this.right=r??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new Ht(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw K(27949);return t+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new Ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Of(this.data.getIterator())}getIteratorFrom(t){return new Of(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Bt(this.comparator);return e.data=t,e}}class Of{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.fields=t,t.sort(qt.comparator)}static empty(){return new _e([])}unionWith(t){let e=new Bt(qt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new _e(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ps(this.fields,t.fields,((e,i)=>e.isEqual(i)))}}/**
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
 */class ly extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ly("Invalid base64 string: "+r):r}})(t);return new Wt(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new Wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const MI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(n){if(lt(!!n,39018),typeof n=="string"){let t=0;const e=MI.exec(n);if(lt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xn(n){return typeof n=="string"?Wt.fromBase64String(n):Wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="server_timestamp",dy="__type__",hy="__previous_value__",fy="__local_write_time__";function Lu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[dy])===null||e===void 0?void 0:e.stringValue)===uy}function sc(n){const t=n.mapValue.fields[hy];return Lu(t)?sc(t):t}function xr(n){const t=Yn(n.mapValue.fields[fy].timestampValue);return new vt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t,e,i,s,r,o,a,c,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const ka="(default)";class Sr{constructor(t,e){this.projectId=t,this.database=e||ka}static empty(){return new Sr("","")}get isDefaultDatabase(){return this.database===ka}isEqual(t){return t instanceof Sr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="__type__",OI="__max__",Co={mapValue:{}},gy="__vector__",Ca="value";function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lu(n)?4:LI(n)?9007199254740991:NI(n)?10:11:K(28295,{value:n})}function Je(n,t){if(n===t)return!0;const e=Qn(n);if(e!==Qn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return xr(n).isEqual(xr(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Yn(s.timestampValue),a=Yn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return Xn(s.bytesValue).isEqual(Xn(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return Rt(s.geoPointValue.latitude)===Rt(r.geoPointValue.latitude)&&Rt(s.geoPointValue.longitude)===Rt(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return Rt(s.integerValue)===Rt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Rt(s.doubleValue),a=Rt(r.doubleValue);return o===a?Pa(o)===Pa(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return ps(n.arrayValue.values||[],t.arrayValue.values||[],Je);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Df(o)!==Df(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Je(o[c],a[c])))return!1;return!0})(n,t);default:return K(52216,{left:n})}}function Pr(n,t){return(n.values||[]).find((e=>Je(e,t)))!==void 0}function gs(n,t){if(n===t)return 0;const e=Qn(n),i=Qn(t);if(e!==i)return Z(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=Rt(r.integerValue||r.doubleValue),c=Rt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,t);case 3:return Nf(n.timestampValue,t.timestampValue);case 4:return Nf(xr(n),xr(t));case 5:return Ll(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=Xn(r),c=Xn(o);return a.compareTo(c)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=Z(a[l],c[l]);if(d!==0)return d}return Z(a.length,c.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=Z(Rt(r.latitude),Rt(o.latitude));return a!==0?a:Z(Rt(r.longitude),Rt(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Lf(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},g=(a=h[Ca])===null||a===void 0?void 0:a.arrayValue,y=(c=f[Ca])===null||c===void 0?void 0:c.arrayValue,b=Z(((l=g==null?void 0:g.values)===null||l===void 0?void 0:l.length)||0,((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0);return b!==0?b:Lf(g,y)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===Co.mapValue&&o===Co.mapValue)return 0;if(r===Co.mapValue)return 1;if(o===Co.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=Ll(c[h],d[h]);if(f!==0)return f;const g=gs(a[c[h]],l[d[h]]);if(g!==0)return g}return Z(c.length,d.length)})(n.mapValue,t.mapValue);default:throw K(23264,{le:e})}}function Nf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Z(n,t);const e=Yn(n),i=Yn(t),s=Z(e.seconds,i.seconds);return s!==0?s:Z(e.nanos,i.nanos)}function Lf(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=gs(e[s],i[s]);if(r)return r}return Z(e.length,i.length)}function ms(n){return Vl(n)}function Vl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=Yn(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Xn(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return W.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=Vl(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Vl(e.fields[o])}`;return s+"}"})(n.mapValue):K(61005,{value:n})}function Zo(n){switch(Qn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=sc(n);return t?16+Zo(t):16;case 5:return 2*n.stringValue.length;case 6:return Xn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Zo(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return si(i.fields,((r,o)=>{s+=r.length+Zo(o)})),s})(n.mapValue);default:throw K(13486,{value:n})}}function Vf(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Fl(n){return!!n&&"integerValue"in n}function Vu(n){return!!n&&"arrayValue"in n}function Ff(n){return!!n&&"nullValue"in n}function Bf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ta(n){return!!n&&"mapValue"in n}function NI(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[py])===null||e===void 0?void 0:e.stringValue)===gy}function lr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return si(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=lr(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=lr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function LI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===OI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.value=t}static empty(){return new ge({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!ta(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=lr(e)}setAll(t){let e=qt.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=lr(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());ta(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){si(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new ge(lr(this.value))}}function my(n){const t=[];return si(n.fields,((e,i)=>{const s=new qt([e]);if(ta(i)){const r=my(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new _e(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ie(t,0,Y.min(),Y.min(),Y.min(),ge.empty(),0)}static newFoundDocument(t,e,i,s){return new ie(t,1,e,Y.min(),i,s,0)}static newNoDocument(t,e){return new ie(t,2,e,Y.min(),Y.min(),ge.empty(),0)}static newUnknownDocument(t,e){return new ie(t,3,e,Y.min(),Y.min(),ge.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ge.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ie&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ra{constructor(t,e){this.position=t,this.inclusive=e}}function $f(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=W.comparator(W.fromName(o.referenceValue),e.key):i=gs(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Uf(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Je(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class kr{constructor(t,e="asc"){this.field=t,this.dir=e}}function VI(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class yy{}class Nt extends yy{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new BI(t,e,i):e==="array-contains"?new zI(t,i):e==="in"?new jI(t,i):e==="not-in"?new HI(t,i):e==="array-contains-any"?new qI(t,i):new Nt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new $I(t,i):new UI(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(gs(e,this.value)):e!==null&&Qn(this.value)===Qn(e)&&this.matchesComparison(gs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Le extends yy{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Le(t,e)}matches(t){return vy(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function vy(n){return n.op==="and"}function by(n){return FI(n)&&vy(n)}function FI(n){for(const t of n.filters)if(t instanceof Le)return!1;return!0}function Bl(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+ms(n.value);if(by(n))return n.filters.map((t=>Bl(t))).join(",");{const t=n.filters.map((e=>Bl(e))).join(",");return`${n.op}(${t})`}}function _y(n,t){return n instanceof Nt?(function(i,s){return s instanceof Nt&&i.op===s.op&&i.field.isEqual(s.field)&&Je(i.value,s.value)})(n,t):n instanceof Le?(function(i,s){return s instanceof Le&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&_y(o,s.filters[a])),!0):!1})(n,t):void K(19439)}function wy(n){return n instanceof Nt?(function(e){return`${e.field.canonicalString()} ${e.op} ${ms(e.value)}`})(n):n instanceof Le?(function(e){return e.op.toString()+" {"+e.getFilters().map(wy).join(" ,")+"}"})(n):"Filter"}class BI extends Nt{constructor(t,e,i){super(t,e,i),this.key=W.fromName(i.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class $I extends Nt{constructor(t,e){super(t,"in",e),this.keys=Ey("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class UI extends Nt{constructor(t,e){super(t,"not-in",e),this.keys=Ey("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ey(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((i=>W.fromName(i.referenceValue)))}class zI extends Nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vu(e)&&Pr(e.arrayValue,this.value)}}class jI extends Nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Pr(this.value.arrayValue,e)}}class HI extends Nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Pr(this.value.arrayValue,e)}}class qI extends Nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>Pr(this.value.arrayValue,i)))}}/**
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
 */class WI{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Pe=null}}function zf(n,t=null,e=[],i=[],s=null,r=null,o=null){return new WI(n,t,e,i,s,r,o)}function Fu(n){const t=Q(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>Bl(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),ic(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>ms(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>ms(i))).join(",")),t.Pe=e}return t.Pe}function Bu(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!VI(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!_y(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Uf(n.startAt,t.startAt)&&Uf(n.endAt,t.endAt)}function $l(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function GI(n,t,e,i,s,r,o,a){return new Ss(n,t,e,i,s,r,o,a)}function rc(n){return new Ss(n)}function jf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ty(n){return n.collectionGroup!==null}function ur(n){const t=Q(n);if(t.Te===null){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Bt(qt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new kr(r,i))})),e.has(qt.keyField().canonicalString())||t.Te.push(new kr(qt.keyField(),i))}return t.Te}function We(n){const t=Q(n);return t.Ie||(t.Ie=KI(t,ur(n))),t.Ie}function KI(n,t){if(n.limitType==="F")return zf(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new kr(s.field,r)}));const e=n.endAt?new Ra(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ra(n.startAt.position,n.startAt.inclusive):null;return zf(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Ul(n,t){const e=n.filters.concat([t]);return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function zl(n,t,e){return new Ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function oc(n,t){return Bu(We(n),We(t))&&n.limitType===t.limitType}function Iy(n){return`${Fu(We(n))}|lt:${n.limitType}`}function Zi(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>wy(s))).join(", ")}]`),ic(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>ms(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>ms(s))).join(",")),`Target(${i})`})(We(n))}; limitType=${n.limitType})`}function ac(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):W.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of ur(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,c){const l=$f(o,a,c);return o.inclusive?l<=0:l<0})(i.startAt,ur(i),s)||i.endAt&&!(function(o,a,c){const l=$f(o,a,c);return o.inclusive?l>=0:l>0})(i.endAt,ur(i),s))})(n,t)}function YI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ay(n){return(t,e)=>{let i=!1;for(const s of ur(n)){const r=XI(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function XI(n,t,e){const i=n.field.isKeyField()?W.comparator(t.key,e.key):(function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?gs(c,l):K(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return K(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){si(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return cy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new It(W.comparator);function Tn(){return QI}const xy=new It(W.comparator);function Qs(...n){let t=xy;for(const e of n)t=t.insert(e.key,e);return t}function Sy(n){let t=xy;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function Ei(){return dr()}function Py(){return dr()}function dr(){return new $i((n=>n.toString()),((n,t)=>n.isEqual(t)))}const JI=new It(W.comparator),ZI=new Bt(W.comparator);function it(...n){let t=ZI;for(const e of n)t=t.add(e);return t}const tA=new Bt(Z);function eA(){return tA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(t)?"-0":t}}function ky(n){return{integerValue:""+n}}function nA(n,t){return kI(t)?ky(t):$u(n,t)}/**
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
 */class cc{constructor(){this._=void 0}}function iA(n,t,e){return n instanceof Ma?(function(s,r){const o={fields:{[dy]:{stringValue:uy},[fy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Lu(r)&&(r=sc(r)),r&&(o.fields[hy]=r),{mapValue:o}})(e,t):n instanceof Cr?Ry(n,t):n instanceof Rr?My(n,t):(function(s,r){const o=Cy(s,r),a=Hf(o)+Hf(s.Ee);return Fl(o)&&Fl(s.Ee)?ky(a):$u(s.serializer,a)})(n,t)}function sA(n,t,e){return n instanceof Cr?Ry(n,t):n instanceof Rr?My(n,t):e}function Cy(n,t){return n instanceof Da?(function(i){return Fl(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class Ma extends cc{}class Cr extends cc{constructor(t){super(),this.elements=t}}function Ry(n,t){const e=Dy(t);for(const i of n.elements)e.some((s=>Je(s,i)))||e.push(i);return{arrayValue:{values:e}}}class Rr extends cc{constructor(t){super(),this.elements=t}}function My(n,t){let e=Dy(t);for(const i of n.elements)e=e.filter((s=>!Je(s,i)));return{arrayValue:{values:e}}}class Da extends cc{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Hf(n){return Rt(n.integerValue||n.doubleValue)}function Dy(n){return Vu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function rA(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof Cr&&s instanceof Cr||i instanceof Rr&&s instanceof Rr?ps(i.elements,s.elements,Je):i instanceof Da&&s instanceof Da?Je(i.Ee,s.Ee):i instanceof Ma&&s instanceof Ma})(n.transform,t.transform)}class oA{constructor(t,e){this.version=t,this.transformResults=e}}class de{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new de}static exists(t){return new de(void 0,t)}static updateTime(t){return new de(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ea(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class lc{}function Oy(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new uc(n.key,de.none()):new Kr(n.key,n.data,de.none());{const e=n.data,i=ge.empty();let s=new Bt(qt.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new ri(n.key,i,new _e(s.toArray()),de.none())}}function aA(n,t,e){n instanceof Kr?(function(s,r,o){const a=s.value.clone(),c=Wf(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof ri?(function(s,r,o){if(!ea(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Wf(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Ny(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function hr(n,t,e,i){return n instanceof Kr?(function(r,o,a,c){if(!ea(r.precondition,o))return a;const l=r.value.clone(),d=Gf(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,t,e,i):n instanceof ri?(function(r,o,a,c){if(!ea(r.precondition,o))return a;const l=Gf(r.fieldTransforms,c,o),d=o.data;return d.setAll(Ny(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((h=>h.field)))})(n,t,e,i):(function(r,o,a){return ea(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function cA(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=Cy(i.transform,s||null);r!=null&&(e===null&&(e=ge.empty()),e.set(i.field,r))}return e||null}function qf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ps(i,s,((r,o)=>rA(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Kr extends lc{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ri extends lc{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ny(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function Wf(n,t,e){const i=new Map;lt(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,sA(o,a,e[s]))}return i}function Gf(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,iA(r,o,t))}return i}class uc extends lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lA extends lc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&aA(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=hr(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=hr(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Py();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const c=Oy(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),it())}isEqual(t){return this.batchId===t.batchId&&ps(this.mutations,t.mutations,((e,i)=>qf(e,i)))&&ps(this.baseMutations,t.baseMutations,((e,i)=>qf(e,i)))}}class Uu{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){lt(t.mutations.length===i.length,58842,{Ve:t.mutations.length,me:i.length});let s=(function(){return JI})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Uu(t,e,i,s)}}/**
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
 */class dA{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class hA{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,ot;function fA(n){switch(n){case V.OK:return K(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Ly(n){if(n===void 0)return En("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ot.OK:return V.OK;case Ot.CANCELLED:return V.CANCELLED;case Ot.UNKNOWN:return V.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return V.INTERNAL;case Ot.UNAVAILABLE:return V.UNAVAILABLE;case Ot.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ot.NOT_FOUND:return V.NOT_FOUND;case Ot.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ot.ABORTED:return V.ABORTED;case Ot.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ot.DATA_LOSS:return V.DATA_LOSS;default:return K(39323,{code:n})}}(ot=Ot||(Ot={}))[ot.OK=0]="OK",ot[ot.CANCELLED=1]="CANCELLED",ot[ot.UNKNOWN=2]="UNKNOWN",ot[ot.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ot[ot.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ot[ot.NOT_FOUND=5]="NOT_FOUND",ot[ot.ALREADY_EXISTS=6]="ALREADY_EXISTS",ot[ot.PERMISSION_DENIED=7]="PERMISSION_DENIED",ot[ot.UNAUTHENTICATED=16]="UNAUTHENTICATED",ot[ot.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ot[ot.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ot[ot.ABORTED=10]="ABORTED",ot[ot.OUT_OF_RANGE=11]="OUT_OF_RANGE",ot[ot.UNIMPLEMENTED=12]="UNIMPLEMENTED",ot[ot.INTERNAL=13]="INTERNAL",ot[ot.UNAVAILABLE=14]="UNAVAILABLE",ot[ot.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const pA=new Hn([4294967295,4294967295],0);function Kf(n){const t=sy().encode(n),e=new Xm;return e.update(t),new Uint8Array(e.digest())}function Yf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Hn([e,i],0),new Hn([s,r],0)]}class zu{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new Js(`Invalid padding: ${e}`);if(i<0)throw new Js(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new Js(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Hn.fromNumber(this.fe)}pe(t,e,i){let s=t.add(e.multiply(Hn.fromNumber(i)));return s.compare(pA)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Kf(t),[i,s]=Yf(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);if(!this.ye(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new zu(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.fe===0)return;const e=Kf(t),[i,s]=Yf(e);for(let r=0;r<this.hashCount;r++){const o=this.pe(i,s,r);this.we(o)}}we(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,Yr.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new dc(Y.min(),s,new It(Z),Tn(),it())}}class Yr{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Yr(i,e,it(),it(),it())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.be=s}}class Vy{constructor(t,e){this.targetId=t,this.De=e}}class Fy{constructor(t,e,i=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class Xf{constructor(){this.ve=0,this.Ce=Qf(),this.Fe=Wt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=it(),e=it(),i=it();return this.Ce.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:K(38017,{changeType:r})}})),new Yr(this.Fe,this.Me,t,e,i)}ke(){this.xe=!1,this.Ce=Qf()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class gA{constructor(t){this.We=t,this.Ge=new Map,this.ze=Tn(),this.je=Ro(),this.Je=Ro(),this.He=new It(Z)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const i=this.tt(e);switch(t.state){case 0:this.nt(e)&&i.Be(t.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(t.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(i.Ke(),i.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),i.Be(t.resumeToken));break;default:K(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((i,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,i=t.De.count,s=this.st(e);if(s){const r=s.target;if($l(r))if(i===0){const o=new W(r.path);this.Xe(e,o,ie.newNoDocument(o,Y.min()))}else lt(i===1,20013,{expectedCount:i});else{const o=this.ot(e);if(o!==i){const a=this._t(t),c=a?this.ut(a,t,o):1;if(c!==0){this.rt(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,l)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=Xn(i).toUint8Array()}catch(c){if(c instanceof ly)return Gn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new zu(o,s,r)}catch(c){return Gn(c instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(t,e,i){return e.De.count===i-this.ht(t,e.targetId)?0:2}ht(t,e){const i=this.We.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Xe(e,r,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((r,o)=>{const a=this.st(o);if(a){if(r.current&&$l(a.target)){const c=new W(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,ie.newNoDocument(c,t))}r.Ne&&(e.set(o,r.Le()),r.ke())}}));let i=it();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.ze.forEach(((r,o)=>o.setReadTime(t)));const s=new dc(t,e,this.He,this.ze,i);return this.ze=Tn(),this.je=Ro(),this.Je=Ro(),this.He=new It(Z),s}Ze(t,e){if(!this.nt(t))return;const i=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,i),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,i){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),i&&(this.ze=this.ze.insert(e,i))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Xf,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new Bt(Z),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new Bt(Z),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||j("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Xf),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Ro(){return new It(W.comparator)}function Qf(){return new It(W.comparator)}const mA={asc:"ASCENDING",desc:"DESCENDING"},yA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vA={and:"AND",or:"OR"};class bA{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function jl(n,t){return n.useProto3Json||ic(t)?t:{value:t}}function Oa(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function By(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function _A(n,t){return Oa(n,t.toTimestamp())}function Ge(n){return lt(!!n,49232),Y.fromTimestamp((function(e){const i=Yn(e);return new vt(i.seconds,i.nanos)})(n))}function ju(n,t){return Hl(n,t).canonicalString()}function Hl(n,t){const e=(function(s){return new gt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function $y(n){const t=gt.fromString(n);return lt(qy(t),10190,{key:t.toString()}),t}function ql(n,t){return ju(n.databaseId,t.path)}function rl(n,t){const e=$y(t);if(e.get(1)!==n.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new W(zy(e))}function Uy(n,t){return ju(n.databaseId,t)}function wA(n){const t=$y(n);return t.length===4?gt.emptyPath():zy(t)}function Wl(n){return new gt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zy(n){return lt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jf(n,t,e){return{name:ql(n,t),fields:e.value.mapValue.fields}}function EA(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K(39313,{state:l})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(l,d){return l.useProto3Json?(lt(d===void 0||typeof d=="string",58123),Wt.fromBase64String(d||"")):(lt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Wt.fromUint8Array(d||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(l){const d=l.code===void 0?V.UNKNOWN:Ly(l.code);return new z(d,l.message||"")})(o);e=new Fy(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=rl(n,i.document.name),r=Ge(i.document.updateTime),o=i.document.createTime?Ge(i.document.createTime):Y.min(),a=new ge({mapValue:{fields:i.document.fields}}),c=ie.newFoundDocument(s,r,o,a),l=i.targetIds||[],d=i.removedTargetIds||[];e=new na(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=rl(n,i.document),r=i.readTime?Ge(i.readTime):Y.min(),o=ie.newNoDocument(s,r),a=i.removedTargetIds||[];e=new na([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=rl(n,i.document),r=i.removedTargetIds||[];e=new na([],r,s,null)}else{if(!("filter"in t))return K(11601,{At:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new hA(s,r),a=i.targetId;e=new Vy(a,o)}}return e}function TA(n,t){let e;if(t instanceof Kr)e={update:Jf(n,t.key,t.value)};else if(t instanceof uc)e={delete:ql(n,t.key)};else if(t instanceof ri)e={update:Jf(n,t.key,t.data),updateMask:MA(t.fieldMask)};else{if(!(t instanceof lA))return K(16599,{Rt:t.type});e={verify:ql(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Cr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Da)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw K(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:_A(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K(27497)})(n,t.precondition)),e}function IA(n,t){return n&&n.length>0?(lt(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?Ge(s.updateTime):Ge(r);return o.isEqual(Y.min())&&(o=Ge(r)),new oA(o,s.transformResults||[])})(e,t)))):[]}function AA(n,t){return{documents:[Uy(n,t.path)]}}function xA(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Uy(n,s);const r=(function(l){if(l.length!==0)return Hy(Le.create(l,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(l){if(l.length!==0)return l.map((d=>(function(f){return{field:ts(f.field),direction:kA(f.dir)}})(d)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=jl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(t.endAt)),{Vt:e,parent:s}}function SA(n){let t=wA(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){lt(i===1,65062);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=(function(h){const f=jy(h);return f instanceof Le&&by(f)?f.getFilters():[f]})(e.where));let o=[];e.orderBy&&(o=(function(h){return h.map((f=>(function(y){return new kr(es(y.field),(function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(y.direction))})(f)))})(e.orderBy));let a=null;e.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,ic(f)?null:f})(e.limit));let c=null;e.startAt&&(c=(function(h){const f=!!h.before,g=h.values||[];return new Ra(g,f)})(e.startAt));let l=null;return e.endAt&&(l=(function(h){const f=!h.before,g=h.values||[];return new Ra(g,f)})(e.endAt)),GI(t,s,o,r,a,"F",c,l)}function PA(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function jy(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=es(e.unaryFilter.field);return Nt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=es(e.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=es(e.unaryFilter.field);return Nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(e.unaryFilter.field);return Nt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Nt.create(es(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Le.create(e.compositeFilter.filters.map((i=>jy(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(e.compositeFilter.op))})(n):K(30097,{filter:n})}function kA(n){return mA[n]}function CA(n){return yA[n]}function RA(n){return vA[n]}function ts(n){return{fieldPath:n.canonicalString()}}function es(n){return qt.fromServerFormat(n.fieldPath)}function Hy(n){return n instanceof Nt?(function(e){if(e.op==="=="){if(Bf(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NAN"}};if(Ff(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bf(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NOT_NAN"}};if(Ff(e.value))return{unaryFilter:{field:ts(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(e.field),op:CA(e.op),value:e.value}}})(n):n instanceof Le?(function(e){const i=e.getFilters().map((s=>Hy(s)));return i.length===1?i[0]:{compositeFilter:{op:RA(e.op),filters:i}}})(n):K(54877,{filter:n})}function MA(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function qy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e,i,s,r=Y.min(),o=Y.min(),a=Wt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Nn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(t){this.gt=t}}function OA(n){const t=SA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zl(t,t.limit,"L"):t}/**
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
 */class NA{constructor(){this.Dn=new LA}addToCollectionParentIndex(t,e){return this.Dn.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(Kn.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(Kn.min())}updateCollectionGroup(t,e,i){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class LA{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new Bt(gt.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Bt(gt.comparator)).toArray()}}/**
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
 */const Zf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wy=41943040;class pe{static withCacheSize(t){return new pe(t,pe.DEFAULT_COLLECTION_PERCENTILE,pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe.DEFAULT_COLLECTION_PERCENTILE=10,pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pe.DEFAULT=new pe(Wy,pe.DEFAULT_COLLECTION_PERCENTILE,pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pe.DISABLED=new pe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const tp="LruGarbageCollector",VA=1048576;function ep([n,t],[e,i]){const s=Z(n,e);return s===0?Z(t,i):s}class FA{constructor(t){this.Tr=t,this.buffer=new Bt(ep),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();ep(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class BA{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){j(tp,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xs(e)?j(tp,"Ignoring IndexedDB error during garbage collection: ",e):await As(e)}await this.Rr(3e5)}))}}class $A{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return B.resolve(nc.ue);const i=new FA(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Zf)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zf):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let i,s,r,o,a,c,l;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(t,s)))).next((h=>(i=h,a=Date.now(),this.removeTargets(t,i,e)))).next((h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(t,i)))).next((h=>(l=Date.now(),Ji()<=nt.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h}))))}}function UA(n,t){return new $A(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.changes=new $i((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ie.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?B.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jA{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&hr(i.mutation,s,_e.empty(),vt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,it()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=it()){const s=Ei();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=Qs();return r.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=Ei();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,it())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=Tn();const o=dr(),a=(function(){return dr()})();return e.forEach(((c,l)=>{const d=i.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof ri)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),hr(d.mutation,l,d.mutation.getFieldMask(),vt.now())):o.set(l.key,_e.empty())})),this.recalculateAndSaveOverlays(t,r).next((c=>(c.forEach(((l,d)=>o.set(l,d))),e.forEach(((l,d)=>{var h;return a.set(l,new jA(d,(h=o.get(l))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(t,e){const i=dr();let s=new It(((o,a)=>o-a)),r=it();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((c=>{const l=e.get(c);if(l===null)return;let d=i.get(c)||_e.empty();d=a.applyToLocalView(l,d),i.set(c,d);const h=(s.get(a.batchId)||it()).add(c);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=Py();d.forEach((f=>{if(!r.has(f)){const g=Oy(e.get(f),i.get(f));g!==null&&h.set(f,g),r=r.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return B.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return(function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ty(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):B.resolve(Ei());let a=Ar,c=r;return o.next((l=>B.forEach(l,((d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?B.resolve():this.remoteDocumentCache.getEntry(t,d).next((f=>{c=c.insert(d,f)}))))).next((()=>this.populateOverlays(t,l,r))).next((()=>this.computeViews(t,c,l,it()))).next((d=>({batchId:a,changes:Sy(d)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next((i=>{let s=Qs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=Qs();return this.indexManager.getCollectionParents(t,r).next((a=>B.forEach(a,(c=>{const l=(function(h,f){return new Ss(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,i,s).next((d=>{d.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,ie.newInvalidDocument(d)))}));let a=Qs();return o.forEach(((c,l)=>{const d=r.get(c);d!==void 0&&hr(d.mutation,l,_e.empty(),vt.now()),ac(e,l)&&(a=a.insert(c,l))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return B.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ge(s.createTime)}})(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:OA(s.bundledQuery),readTime:Ge(s.readTime)}})(e)),B.resolve()}}/**
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
 */class WA{constructor(){this.overlays=new It(W.comparator),this.kr=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Ei();return B.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.wt(t,e,r)})),B.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.kr.delete(i)),B.resolve()}getOverlaysForCollection(t,e,i){const s=Ei(),r=e.length+1,o=new W(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new It(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>i){let d=r.get(l.largestBatchId);d===null&&(d=Ei(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Ei(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,d)=>a.set(l,d))),!(a.size()>=s)););return B.resolve(a)}wt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new dA(e,i));let r=this.kr.get(e);r===void 0&&(r=it(),this.kr.set(e,r)),this.kr.set(e,r.add(i.key))}}/**
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
 */class GA{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.qr=new Bt($t.Qr),this.$r=new Bt($t.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const i=new $t(t,e);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new $t(t,e))}Gr(t,e){t.forEach((i=>this.removeReference(i,e)))}zr(t){const e=new W(new gt([])),i=new $t(e,t),s=new $t(e,t+1),r=[];return this.$r.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new W(new gt([])),i=new $t(e,t),s=new $t(e,t+1);let r=it();return this.$r.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new $t(t,0),i=this.qr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class $t{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return W.comparator(t.key,e.key)||Z(t.Hr,e.Hr)}static Ur(t,e){return Z(t.Hr,e.Hr)||W.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new Bt($t.Qr)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uA(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new $t(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,e){return B.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return B.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Nu:this.er-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new $t(e,0),s=new $t(e,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),B.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new Bt(Z);return e.forEach((s=>{const r=new $t(s,0),o=new $t(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),B.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;W.isDocumentKey(r)||(r=r.child(""));const o=new $t(new W(r),0);let a=new Bt(Z);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.Hr)),!0)}),o),B.resolve(this.ei(a))}ei(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){lt(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return B.forEach(e.mutations,(s=>{const r=new $t(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=i}))}rr(t){}containsKey(t,e){const i=new $t(e,0),s=this.Yr.firstAfterOrEqual(i);return B.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(t){this.ni=t,this.docs=(function(){return new It(W.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ni(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return B.resolve(i?i.document.mutableCopy():ie.newInvalidDocument(e))}getEntries(t,e){let i=Tn();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ie.newInvalidDocument(s))})),B.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=Tn();const o=e.path,a=new W(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||AI(II(d),i)<=0||(s.has(d.key)||ac(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return B.resolve(r)}getAllFromCollectionGroup(t,e,i,s){K(9500)}ri(t,e){return B.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new XA(this)}getSize(t){return B.resolve(this.size)}}class XA extends zA{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(i)})),B.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(t){this.persistence=t,this.ii=new $i((e=>Fu(e)),Bu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.si=0,this.oi=new Hu,this.targetCount=0,this._i=ys.ar()}forEachTarget(t,e){return this.ii.forEach(((i,s)=>e(s))),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.si&&(this.si=e),B.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new ys(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.hr(e),B.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ii.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),B.waitFor(r).next((()=>s))}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const i=this.ii.get(e)||null;return B.resolve(i)}addMatchingKeys(t,e,i){return this.oi.Kr(e,i),B.resolve()}removeMatchingKeys(t,e,i){this.oi.Gr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),B.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const i=this.oi.Jr(e);return B.resolve(i)}containsKey(t,e){return B.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t,e){this.ai={},this.overlays={},this.ui=new nc(0),this.ci=!1,this.ci=!0,this.li=new GA,this.referenceDelegate=t(this),this.hi=new QA(this),this.indexManager=new NA,this.remoteDocumentCache=(function(s){return new YA(s)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new DA(e),this.Ti=new qA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new WA,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ai[t.toKey()];return i||(i=new KA(e,this.referenceDelegate),this.ai[t.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,i){j("MemoryPersistence","Starting transaction:",t);const s=new JA(this.ui.next());return this.referenceDelegate.Ii(),i(s).next((r=>this.referenceDelegate.di(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return B.or(Object.values(this.ai).map((i=>()=>i.containsKey(t,e))))}}class JA extends SI{constructor(t){super(),this.currentSequenceNumber=t}}class qu{constructor(t){this.persistence=t,this.Ai=new Hu,this.Ri=null}static Vi(t){return new qu(t)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(t,e,i){return this.Ai.addReference(i,e),this.mi.delete(i.toString()),B.resolve()}removeReference(t,e,i){return this.Ai.removeReference(i,e),this.mi.add(i.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),B.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.mi.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,(i=>{const s=W.fromPath(i);return this.fi(t,s).next((r=>{r||e.removeEntry(s,Y.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((i=>{i?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return B.or([()=>B.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Na{constructor(t,e){this.persistence=t,this.gi=new $i((i=>CI(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=UA(this,e)}static Vi(t,e){return new Na(t,e)}Ii(){}di(t){return B.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}yr(t){let e=0;return this.gr(t,(i=>{e++})).next((()=>e))}gr(t,e){return B.forEach(this.gi,((i,s)=>this.Sr(t,i,s).next((r=>r?B.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ri(t,(o=>this.Sr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,Y.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}removeReference(t,e,i){return this.gi.set(i,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),B.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zo(t.data.value)),e}Sr(t,e,i){return B.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return B.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Is=i,this.ds=s}static Es(t,e){let i=it(),s=it();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Wu(t,e.fromCache,i,s)}}/**
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
 */class ZA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class tx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Iw()?8:PI(re())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.ps(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ys(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new ZA;return this.ws(t,e,o).next((a=>{if(r.result=a,this.Rs)return this.Ss(t,e,o,a.size)}))})).next((()=>r.result))}Ss(t,e,i,s){return i.documentReadCount<this.Vs?(Ji()<=nt.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Zi(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Ji()<=nt.DEBUG&&j("QueryEngine","Query:",Zi(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(Ji()<=nt.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Zi(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,We(e))):B.resolve())}ps(t,e){if(jf(e))return B.resolve(null);let i=We(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=zl(e,null,"F"),i=We(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=it(...r);return this.gs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((c=>{const l=this.bs(e,a);return this.Ds(e,l,o,c.readTime)?this.ps(t,zl(e,null,"F")):this.vs(t,l,e,c)}))))})))))}ys(t,e,i,s){return jf(e)||s.isEqual(Y.min())?B.resolve(null):this.gs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ds(e,o,i,s)?B.resolve(null):(Ji()<=nt.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zi(e)),this.vs(t,o,e,TI(s,Ar)).next((a=>a)))}))}bs(t,e){let i=new Bt(Ay(t));return e.forEach(((s,r)=>{ac(t,r)&&(i=i.add(r))})),i}Ds(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ws(t,e,i){return Ji()<=nt.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Zi(e)),this.gs.getDocumentsMatchingQuery(t,e,Kn.min(),i)}vs(t,e,i,s){return this.gs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="LocalStore",ex=3e8;class nx{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new It(Z),this.Ms=new $i((r=>Fu(r)),Bu),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(i)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new HA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function ix(n,t,e,i){return new nx(n,t,e,i)}async function Ky(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Ns(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let c=it();for(const l of s){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(i,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function sx(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.Os.newChangeBuffer({trackRemovals:!0});return(function(a,c,l,d){const h=l.batch,f=h.keys();let g=B.resolve();return f.forEach((y=>{g=g.next((()=>d.getEntry(c,y))).next((b=>{const v=l.docVersions.get(y);lt(v!==null,48541),b.version.compareTo(v)<0&&(h.applyToRemoteDocument(b,l),b.isValidDocument()&&(b.setReadTime(l.commitVersion),d.addEntry(b)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,h)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let c=it();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function Yy(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function rx(n,t){const e=Q(n),i=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const a=[];t.targetChanges.forEach(((d,h)=>{const f=s.get(h);if(!f)return;a.push(e.hi.removeMatchingKeys(r,d.removedDocuments,h).next((()=>e.hi.addMatchingKeys(r,d.addedDocuments,h))));let g=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Wt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,i)),s=s.insert(h,g),(function(b,v,E){return b.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=ex?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0})(f,g,d)&&a.push(e.hi.updateTargetData(r,g))}));let c=Tn(),l=it();if(t.documentUpdates.forEach((d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))})),a.push(ox(r,o,t.documentUpdates).next((d=>{c=d.Ls,l=d.ks}))),!i.isEqual(Y.min())){const d=e.hi.getLastRemoteSnapshotVersion(r).next((h=>e.hi.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(d)}return B.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,c,l))).next((()=>c))})).then((r=>(e.Fs=s,r)))}function ox(n,t,e){let i=it(),s=it();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=Tn();return e.forEach(((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):j(Gu,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:s}}))}function ax(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=Nu),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function cx(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.hi.getTargetData(i,t).next((r=>r?(s=r,B.resolve(s)):e.hi.allocateTargetId(i).next((o=>(s=new Nn(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.hi.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(i.targetId,i),e.Ms.set(t,i.targetId)),i}))}async function Gl(n,t,e){const i=Q(n),s=i.Fs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!xs(o))throw o;j(Gu,`Failed to update sequence numbers for target ${t}: ${o}`)}i.Fs=i.Fs.remove(t),i.Ms.delete(s.target)}function np(n,t,e){const i=Q(n);let s=Y.min(),r=it();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,d){const h=Q(c),f=h.Ms.get(d);return f!==void 0?B.resolve(h.Fs.get(f)):h.hi.getTargetData(l,d)})(i,o,We(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{r=c}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:Y.min(),e?r:it()))).next((a=>(lx(i,YI(t),a),{documents:a,qs:r})))))}function lx(n,t,e){let i=n.xs.get(t)||Y.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.xs.set(t,i)}class ip{constructor(){this.activeTargetIds=eA()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ux{constructor(){this.Fo=new ip,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,i){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ip,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class dx{xo(t){}shutdown(){}}/**
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
 */const sp="ConnectivityMonitor";class rp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){j(sp,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){j(sp,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mo=null;function Kl(){return Mo===null?Mo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mo++,"0x"+Mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="RestConnection",hx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class fx{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===ka?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=Kl(),a=this.Go(t,e.toUriEncodedString());j(ol,`Sending RPC '${t}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,r);const{host:l}=new URL(a),d=Es(l);return this.jo(t,a,c,i,d).then((h=>(j(ol,`Received RPC '${t}' ${o}: `,h),h)),(h=>{throw Gn(ol,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",i),h}))}Jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}zo(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Is})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Go(t,e){const i=hx[t];return`${this.$o}/v1/${e}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class gx extends fx{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,i,s,r){const o=Kl();return new Promise(((a,c)=>{const l=new Qm;l.setWithCredentials(!0),l.listenOnce(Jm.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Jo.NO_ERROR:const h=l.getResponseJson();j(Qt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(h)),a(h);break;case Jo.TIMEOUT:j(Qt,`RPC '${t}' ${o} timed out`),c(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Jo.HTTP_ERROR:const f=l.getStatus();if(j(Qt,`RPC '${t}' ${o} failed with status:`,f,"response text:",l.getResponseText()),f>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const b=(function(E){const P=E.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(P)>=0?P:V.UNKNOWN})(y.status);c(new z(b,y.message))}else c(new z(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new z(V.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:t,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{j(Qt,`RPC '${t}' ${o} completed.`)}}));const d=JSON.stringify(s);j(Qt,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",d,i,15)}))}P_(t,e,i){const s=Kl(),r=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ey(),a=ty(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,e,i),c.encodeInitMessageHeaders=!0;const d=r.join("");j(Qt,`Creating RPC '${t}' stream ${s}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let f=!1,g=!1;const y=new px({Ho:v=>{g?j(Qt,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(j(Qt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),j(Qt,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},Yo:()=>h.close()}),b=(v,E,P)=>{v.listen(E,(C=>{try{P(C)}catch(D){setTimeout((()=>{throw D}),0)}}))};return b(h,Xs.EventType.OPEN,(()=>{g||(j(Qt,`RPC '${t}' stream ${s} transport opened.`),y.s_())})),b(h,Xs.EventType.CLOSE,(()=>{g||(g=!0,j(Qt,`RPC '${t}' stream ${s} transport closed`),y.__(),this.I_(h))})),b(h,Xs.EventType.ERROR,(v=>{g||(g=!0,Gn(Qt,`RPC '${t}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),y.__(new z(V.UNAVAILABLE,"The operation could not be completed")))})),b(h,Xs.EventType.MESSAGE,(v=>{var E;if(!g){const P=v.data[0];lt(!!P,16349);const C=P,D=(C==null?void 0:C.error)||((E=C[0])===null||E===void 0?void 0:E.error);if(D){j(Qt,`RPC '${t}' stream ${s} received error:`,D);const O=D.status;let L=(function(T){const A=Ot[T];if(A!==void 0)return Ly(A)})(O),I=D.message;L===void 0&&(L=V.INTERNAL,I="Unknown error status: "+O+" with message "+D.message),g=!0,y.__(new z(L,I)),h.close()}else j(Qt,`RPC '${t}' stream ${s} received:`,P),y.a_(P)}})),b(a,Zm.STAT_EVENT,(v=>{v.stat===Nl.PROXY?j(Qt,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Nl.NOPROXY&&j(Qt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{y.o_()}),0),y}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function al(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n){return new bA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Fi=t,this.timerId=e,this.d_=i,this.E_=s,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-i);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="PersistentStream";class Qy{constructor(t,e,i,s,r,o,a,c){this.Fi=t,this.w_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Xy(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(En(e.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.b_===e&&this.W_(i,s)}),(i=>{t((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)}))}))}W_(t,e){const i=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{i((()=>this.G_(s)))})),this.stream.onMessage((s=>{i((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return j(op,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(j(op,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mx extends Qy{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=EA(this.serializer,t),i=(function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Ge(o.readTime):Y.min()})(t);return this.listener.J_(e,i)}H_(t){const e={};e.database=Wl(this.serializer),e.addTarget=(function(r,o){let a;const c=o.target;if(a=$l(c)?{documents:AA(r,c)}:{query:xA(r,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=By(r,o.resumeToken);const l=jl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Oa(r,o.snapshotVersion.toTimestamp());const l=jl(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,t);const i=PA(this.serializer,t);i&&(e.labels=i),this.k_(e)}Y_(t){const e={};e.database=Wl(this.serializer),e.removeTarget=t,this.k_(e)}}class yx extends Qy{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return lt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,lt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){lt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=IA(t.writeResults,t.commitTime),i=Ge(t.commitTime);return this.listener.ta(i,e)}na(){const t={};t.database=Wl(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>TA(this.serializer,i)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{}class bx extends vx{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,Hl(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(V.UNKNOWN,r.toString())}))}Jo(t,e,i,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(t,Hl(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class _x{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(En(e),this._a=!1):j("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="RemoteStore";class wx{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo((o=>{i.enqueueAndForget((async()=>{Ui(this)&&(j(Li,"Restarting streams for network reachability change."),await(async function(c){const l=Q(c);l.Ia.add(4),await Xr(l),l.Aa.set("Unknown"),l.Ia.delete(4),await fc(l)})(this))}))})),this.Aa=new _x(i,s)}}async function fc(n){if(Ui(n))for(const t of n.da)await t(!0)}async function Xr(n){for(const t of n.da)await t(!1)}function Jy(n,t){const e=Q(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Qu(e)?Xu(e):Ps(e).x_()&&Yu(e,t))}function Ku(n,t){const e=Q(n),i=Ps(e);e.Ta.delete(t),i.x_()&&Zy(e,t),e.Ta.size===0&&(i.x_()?i.B_():Ui(e)&&e.Aa.set("Unknown"))}function Yu(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ps(n).H_(t)}function Zy(n,t){n.Ra.$e(t),Ps(n).Y_(t)}function Xu(n){n.Ra=new gA({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),Ps(n).start(),n.Aa.aa()}function Qu(n){return Ui(n)&&!Ps(n).M_()&&n.Ta.size>0}function Ui(n){return Q(n).Ia.size===0}function tv(n){n.Ra=void 0}async function Ex(n){n.Aa.set("Online")}async function Tx(n){n.Ta.forEach(((t,e)=>{Yu(n,t)}))}async function Ix(n,t){tv(n),Qu(n)?(n.Aa.la(t),Xu(n)):n.Aa.set("Unknown")}async function Ax(n,t,e){if(n.Aa.set("Online"),t instanceof Fy&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,t)}catch(i){j(Li,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await La(n,i)}else if(t instanceof na?n.Ra.Ye(t):t instanceof Vy?n.Ra.it(t):n.Ra.et(t),!e.isEqual(Y.min()))try{const i=await Yy(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.Ra.Pt(o);return a.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.Ta.get(l);d&&r.Ta.set(l,d.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,l)=>{const d=r.Ta.get(c);if(!d)return;r.Ta.set(c,d.withResumeToken(Wt.EMPTY_BYTE_STRING,d.snapshotVersion)),Zy(r,c);const h=new Nn(d.target,c,l,d.sequenceNumber);Yu(r,h)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){j(Li,"Failed to raise snapshot:",i),await La(n,i)}}async function La(n,t,e){if(!xs(t))throw t;n.Ia.add(1),await Xr(n),n.Aa.set("Offline"),e||(e=()=>Yy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{j(Li,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await fc(n)}))}function ev(n,t){return t().catch((e=>La(n,e,t)))}async function pc(n){const t=Q(n),e=Jn(t);let i=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Nu;for(;xx(t);)try{const s=await ax(t.localStore,i);if(s===null){t.Pa.length===0&&e.B_();break}i=s.batchId,Sx(t,s)}catch(s){await La(t,s)}nv(t)&&iv(t)}function xx(n){return Ui(n)&&n.Pa.length<10}function Sx(n,t){n.Pa.push(t);const e=Jn(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function nv(n){return Ui(n)&&!Jn(n).M_()&&n.Pa.length>0}function iv(n){Jn(n).start()}async function Px(n){Jn(n).na()}async function kx(n){const t=Jn(n);for(const e of n.Pa)t.X_(e.mutations)}async function Cx(n,t,e){const i=n.Pa.shift(),s=Uu.from(i,t,e);await ev(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await pc(n)}async function Rx(n,t){t&&Jn(n).Z_&&await(async function(i,s){if((function(o){return fA(o)&&o!==V.ABORTED})(s.code)){const r=i.Pa.shift();Jn(i).N_(),await ev(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await pc(i)}})(n,t),nv(n)&&iv(n)}async function ap(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),j(Li,"RemoteStore received new credentials");const i=Ui(e);e.Ia.add(3),await Xr(e),i&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await fc(e)}async function Mx(n,t){const e=Q(n);t?(e.Ia.delete(2),await fc(e)):t||(e.Ia.add(2),await Xr(e),e.Aa.set("Unknown"))}function Ps(n){return n.Va||(n.Va=(function(e,i,s){const r=Q(e);return r.ia(),new mx(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Ex.bind(null,n),e_:Tx.bind(null,n),n_:Ix.bind(null,n),J_:Ax.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Qu(n)?Xu(n):n.Aa.set("Unknown")):(await n.Va.stop(),tv(n))}))),n.Va}function Jn(n){return n.ma||(n.ma=(function(e,i,s){const r=Q(e);return r.ia(),new yx(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Px.bind(null,n),n_:Rx.bind(null,n),ea:kx.bind(null,n),ta:Cx.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await pc(n)):(await n.ma.stop(),n.Pa.length>0&&(j(Li,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new Ju(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zu(n,t){if(En("AsyncQueue",`${t}: ${n}`),xs(n))return new z(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(t){return new ls(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||W.comparator(e.key,i.key):(e,i)=>W.comparator(e.key,i.key),this.keyedMap=Qs(),this.sortedSet=new It(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ls)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new ls;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.fa=new It(W.comparator)}track(t){const e=t.doc.key,i=this.fa.get(e);i?t.type!==0&&i.type===3?this.fa=this.fa.insert(e,t):t.type===3&&i.type!==1?this.fa=this.fa.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.fa=this.fa.remove(e):t.type===1&&i.type===2?this.fa=this.fa.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):K(63341,{At:t,ga:i}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,i)=>{t.push(i)})),t}}class vs{constructor(t,e,i,s,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new vs(t,e,ls.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Ox{constructor(){this.queries=lp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,i){const s=Q(e),r=s.queries;s.queries=lp(),r.forEach(((o,a)=>{for(const c of a.wa)c.onError(i)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function lp(){return new $i((n=>Iy(n)),oc)}async function td(n,t){const e=Q(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.ba()&&(i=2):(r=new Dx,i=t.ba()?0:1);try{switch(i){case 0:r.ya=await e.onListen(s,!0);break;case 1:r.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Zu(o,`Initialization of query '${Zi(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.wa.push(t),t.va(e.onlineState),r.ya&&t.Ca(r.ya)&&nd(e)}async function ed(n,t){const e=Q(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.wa.indexOf(t);o>=0&&(r.wa.splice(o,1),r.wa.length===0?s=t.ba()?0:1:!r.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Nx(n,t){const e=Q(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.wa)a.Ca(s)&&(i=!0);o.ya=s}}i&&nd(e)}function Lx(n,t,e){const i=Q(n),s=i.queries.get(t);if(s)for(const r of s.wa)r.onError(e);i.queries.delete(t)}function nd(n){n.Da.forEach((t=>{t.next()}))}var Yl,up;(up=Yl||(Yl={})).Fa="default",up.Cache="cache";class id{constructor(t,e,i){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new vs(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const i=e!=="Offline";return(!this.options.ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=vs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Yl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t){this.key=t}}class rv{constructor(t){this.key=t}}class Vx{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=it(),this.mutatedKeys=it(),this.Xa=Ay(t),this.eu=new ls(this.Xa)}get tu(){return this.Ha}nu(t,e){const i=e?e.ru:new cp,s=e?e.eu:this.eu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((d,h)=>{const f=s.get(d),g=ac(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?y!==b&&(i.track({type:3,doc:g}),v=!0):this.iu(f,g)||(i.track({type:2,doc:g}),v=!0,(c&&this.Xa(g,c)>0||l&&this.Xa(g,l)<0)&&(a=!0)):!f&&g?(i.track({type:0,doc:g}),v=!0):f&&!g&&(i.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),r=b?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{eu:o,ru:i,Ds:a,mutatedKeys:r}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const o=t.ru.pa();o.sort(((d,h)=>(function(g,y){const b=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:v})}};return b(g)-b(y)})(d.type,h.type)||this.Xa(d.doc,h.doc))),this.su(i),s=s!=null&&s;const a=e&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new vs(this.query,t.eu,r,o,t.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new cp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=it(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const e=[];return t.forEach((i=>{this.Za.has(i)||e.push(new rv(i))})),this.Za.forEach((i=>{t.has(i)||e.push(new sv(i))})),e}uu(t){this.Ha=t.qs,this.Za=it();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return vs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const sd="SyncEngine";class Fx{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class Bx{constructor(t){this.key=t,this.lu=!1}}class $x{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new $i((a=>Iy(a)),oc),this.Tu=new Map,this.Iu=new Set,this.du=new It(W.comparator),this.Eu=new Map,this.Au=new Hu,this.Ru={},this.Vu=new Map,this.mu=ys.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Ux(n,t,e=!0){const i=dv(n);let s;const r=i.Pu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.cu()):s=await ov(i,t,e,!0),s}async function zx(n,t){const e=dv(n);await ov(e,t,!0,!1)}async function ov(n,t,e,i){const s=await cx(n.localStore,We(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await jx(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Jy(n.remoteStore,s),a}async function jx(n,t,e,i,s){n.gu=(h,f,g)=>(async function(b,v,E,P){let C=v.view.nu(E);C.Ds&&(C=await np(b.localStore,v.query,!1).then((({documents:I})=>v.view.nu(I,C))));const D=P&&P.targetChanges.get(v.targetId),O=P&&P.targetMismatches.get(v.targetId)!=null,L=v.view.applyChanges(C,b.isPrimaryClient,D,O);return hp(b,v.targetId,L._u),L.snapshot})(n,h,f,g);const r=await np(n.localStore,t,!0),o=new Vx(t,r.qs),a=o.nu(r.documents),c=Yr.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);hp(n,e,l._u);const d=new Fx(t,e,o);return n.Pu.set(t,d),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),l.snapshot}async function Hx(n,t,e){const i=Q(n),s=i.Pu.get(t),r=i.Tu.get(s.targetId);if(r.length>1)return i.Tu.set(s.targetId,r.filter((o=>!oc(o,t)))),void i.Pu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Gl(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Ku(i.remoteStore,s.targetId),Xl(i,s.targetId)})).catch(As)):(Xl(i,s.targetId),await Gl(i.localStore,s.targetId,!0))}async function qx(n,t){const e=Q(n),i=e.Pu.get(t),s=e.Tu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Ku(e.remoteStore,i.targetId))}async function Wx(n,t,e){const i=Zx(n);try{const s=await(function(o,a){const c=Q(o),l=vt.now(),d=a.reduce(((g,y)=>g.add(y.key)),it());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let y=Tn(),b=it();return c.Os.getEntries(g,d).next((v=>{y=v,y.forEach(((E,P)=>{P.isValidDocument()||(b=b.add(E))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,y))).next((v=>{h=v;const E=[];for(const P of a){const C=cA(P,h.get(P.key).overlayedDocument);C!=null&&E.push(new ri(P.key,C,my(C.value.mapValue),de.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,E,a)})).next((v=>{f=v;const E=v.applyToLocalDocumentSet(h,b);return c.documentOverlayCache.saveOverlays(g,v.batchId,E)}))})).then((()=>({batchId:f.batchId,changes:Sy(h)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new It(Z)),l=l.insert(a,c),o.Ru[o.currentUser.toKey()]=l})(i,s.batchId,e),await Qr(i,s.changes),await pc(i.remoteStore)}catch(s){const r=Zu(s,"Failed to persist write");e.reject(r)}}async function av(n,t){const e=Q(n);try{const i=await rx(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Eu.get(r);o&&(lt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?lt(o.lu,14607):s.removedDocuments.size>0&&(lt(o.lu,42227),o.lu=!1))})),await Qr(e,i,t)}catch(i){await As(i)}}function dp(n,t,e){const i=Q(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Pu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const c=Q(o);c.onlineState=a;let l=!1;c.queries.forEach(((d,h)=>{for(const f of h.wa)f.va(a)&&(l=!0)})),l&&nd(c)})(i.eventManager,t),s.length&&i.hu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Gx(n,t,e){const i=Q(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Eu.get(t),r=s&&s.key;if(r){let o=new It(W.comparator);o=o.insert(r,ie.newNoDocument(r,Y.min()));const a=it().add(r),c=new dc(Y.min(),new Map,new It(Z),o,a);await av(i,c),i.du=i.du.remove(r),i.Eu.delete(t),rd(i)}else await Gl(i.localStore,t,!1).then((()=>Xl(i,t,e))).catch(As)}async function Kx(n,t){const e=Q(n),i=t.batch.batchId;try{const s=await sx(e.localStore,t);lv(e,i,null),cv(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Qr(e,s)}catch(s){await As(s)}}async function Yx(n,t,e){const i=Q(n);try{const s=await(function(o,a){const c=Q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next((h=>(lt(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>c.localDocuments.getDocuments(l,d)))}))})(i.localStore,t);lv(i,t,e),cv(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Qr(i,s)}catch(s){await As(s)}}function cv(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function lv(n,t,e){const i=Q(n);let s=i.Ru[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.Ru[i.currentUser.toKey()]=s}}function Xl(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Tu.get(t))n.Pu.delete(i),e&&n.hu.pu(i,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((i=>{n.Au.containsKey(i)||uv(n,i)}))}function uv(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ku(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),rd(n))}function hp(n,t,e){for(const i of e)i instanceof sv?(n.Au.addReference(i.key,t),Xx(n,i)):i instanceof rv?(j(sd,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,t),n.Au.containsKey(i.key)||uv(n,i.key)):K(19791,{yu:i})}function Xx(n,t){const e=t.key,i=e.path.canonicalString();n.du.get(e)||n.Iu.has(i)||(j(sd,"New document in limbo: "+e),n.Iu.add(i),rd(n))}function rd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new W(gt.fromString(t)),i=n.mu.next();n.Eu.set(i,new Bx(e)),n.du=n.du.insert(e,i),Jy(n.remoteStore,new Nn(We(rc(e.path)),i,"TargetPurposeLimboResolution",nc.ue))}}async function Qr(n,t,e){const i=Q(n),s=[],r=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach(((a,c)=>{o.push(i.gu(c,t,e).then((l=>{var d;if((l||e)&&i.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;i.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){s.push(l);const h=Wu.Es(c.targetId,l);r.push(h)}})))})),await Promise.all(o),i.hu.J_(s),await(async function(c,l){const d=Q(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>B.forEach(l,(f=>B.forEach(f.Is,(g=>d.persistence.referenceDelegate.addReference(h,f.targetId,g))).next((()=>B.forEach(f.ds,(g=>d.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))))))}catch(h){if(!xs(h))throw h;j(Gu,"Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=d.Fs.get(f),y=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(y);d.Fs=d.Fs.insert(f,b)}}})(i.localStore,r))}async function Qx(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){j(sd,"User change. New user:",t.toKey());const i=await Ky(e.localStore,t);e.currentUser=t,(function(r,o){r.Vu.forEach((a=>{a.forEach((c=>{c.reject(new z(V.CANCELLED,o))}))})),r.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Qr(e,i.Bs)}}function Jx(n,t){const e=Q(n),i=e.Eu.get(t);if(i&&i.lu)return it().add(i.key);{let s=it();const r=e.Tu.get(t);if(!r)return s;for(const o of r){const a=e.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function dv(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=av.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jx.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Gx.bind(null,t),t.hu.J_=Nx.bind(null,t.eventManager),t.hu.pu=Lx.bind(null,t.eventManager),t}function Zx(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kx.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yx.bind(null,t),t}class Va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=hc(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return ix(this.persistence,new tx,t.initialUser,this.serializer)}Du(t){return new Gy(qu.Vi,this.serializer)}bu(t){return new ux}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Va.provider={build:()=>new Va};class tS extends Va{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){lt(this.persistence.referenceDelegate instanceof Na,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new BA(i,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?pe.withCacheSize(this.cacheSizeBytes):pe.DEFAULT;return new Gy((i=>Na.Vi(i,e)),this.serializer)}}class Ql{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>dp(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qx.bind(null,this.syncEngine),await Mx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Ox})()}createDatastore(t){const e=hc(t.databaseInfo.databaseId),i=(function(r){return new gx(r)})(t.databaseInfo);return(function(r,o,a,c){return new bx(r,o,a,c)})(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new wx(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>dp(this.syncEngine,e,0)),(function(){return rp.C()?new rp:new dx})())}createSyncEngine(t,e){return(function(s,r,o,a,c,l,d){const h=new $x(s,r,o,a,c,l);return d&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=Q(s);j(Li,"RemoteStore shutting down."),r.Ia.add(5),await Xr(r),r.Ea.shutdown(),r.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ql.provider={build:()=>new Ql};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class od{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):En("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class eS{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ee.UNAUTHENTICATED,this.clientId=Ou.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{j(Zn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(j(Zn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Zu(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function cl(n,t){n.asyncQueue.verifyOperationInProgress(),j(Zn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Ky(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>{Gn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{j("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Gn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function fp(n,t){n.asyncQueue.verifyOperationInProgress();const e=await nS(n);j(Zn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>ap(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>ap(t.remoteStore,s))),n._onlineComponents=t}async function nS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Zn,"Using user provided OfflineComponentProvider");try{await cl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Gn("Error using user provided cache. Falling back to memory cache: "+e),await cl(n,new Va)}}else j(Zn,"Using default OfflineComponentProvider"),await cl(n,new tS(void 0));return n._offlineComponents}async function hv(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Zn,"Using user provided OnlineComponentProvider"),await fp(n,n._uninitializedComponentsProvider._online)):(j(Zn,"Using default OnlineComponentProvider"),await fp(n,new Ql))),n._onlineComponents}function iS(n){return hv(n).then((t=>t.syncEngine))}async function Fa(n){const t=await hv(n),e=t.eventManager;return e.onListen=Ux.bind(null,t.syncEngine),e.onUnlisten=Hx.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=zx.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=qx.bind(null,t.syncEngine),e}function sS(n,t,e={}){const i=new vn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new od({next:f=>{d.Ou(),o.enqueueAndForget((()=>ed(r,h)));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new id(rc(a.path),d,{includeMetadataChanges:!0,ka:!0});return td(r,h)})(await Fa(n),n.asyncQueue,t,e,i))),i.promise}function rS(n,t,e={}){const i=new vn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,c,l){const d=new od({next:f=>{d.Ou(),o.enqueueAndForget((()=>ed(r,h))),f.fromCache&&c.source==="server"?l.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new id(a,d,{includeMetadataChanges:!0,ka:!0});return td(r,h)})(await Fa(n),n.asyncQueue,t,e,i))),i.promise}/**
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
 */function fv(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="firestore.googleapis.com",gp=!0;class mp{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pv,this.ssl=gp}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:gp;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Wy;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<VA)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}EI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fv((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gc{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new fI;switch(i.type){case"firstParty":return new yI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=pp.get(e);i&&(j("ComponentProvider","Removing Datastore"),pp.delete(e),i.terminate())})(this),Promise.resolve()}}function oS(n,t,e,i={}){var s;n=ue(n,gc);const r=Es(t),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;r&&(om(`https://${c}`),am("Firestore",!0)),o.host!==pv&&o.host!==c&&Gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:r,emulatorOptions:i});if(!Ci(l,a)&&(n._setSettings(l),i.mockUserToken)){let d,h;if(typeof i.mockUserToken=="string")d=i.mockUserToken,h=ee.MOCK_USER;else{d=gw(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=i.mockUserToken.sub||i.mockUserToken.user_id;if(!f)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ee(f)}n._authCredentials=new pI(new iy(d,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new oi(this.firestore,t,this._query)}}class kt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(Gr(e,kt._jsonSchema))return new kt(t,i||null,new W(gt.fromString(e.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:Lt("string",kt._jsonSchemaVersion),referencePath:Lt("string")};class qn extends oi{constructor(t,e,i){super(t,e,rc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new W(t))}withConverter(t){return new qn(this.firestore,t,this._path)}}function Ke(n,t,...e){if(n=mt(n),ry("collection","path",t),n instanceof gc){const i=gt.fromString(t,...e);return kf(i),new qn(n,null,i)}{if(!(n instanceof kt||n instanceof qn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(gt.fromString(t,...e));return kf(i),new qn(n.firestore,null,i)}}function Gt(n,t,...e){if(n=mt(n),arguments.length===1&&(t=Ou.newId()),ry("doc","path",t),n instanceof gc){const i=gt.fromString(t,...e);return Pf(i),new kt(n,null,new W(i))}{if(!(n instanceof kt||n instanceof qn))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(gt.fromString(t,...e));return Pf(i),new kt(n.firestore,n instanceof qn?n.converter:null,new W(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="AsyncQueue";class vp{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Xy(this,"async_queue_retry"),this.oc=()=>{const i=al();i&&j(yp,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=t;const e=al();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=al();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new vn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!xs(t))throw t;j(yp,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((i=>{throw this.tc=i,this.nc=!1,En("INTERNAL UNHANDLED ERROR: ",bp(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=e,e}enqueueAfterDelay(t,e,i){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Ju.createAndSchedule(this,t,e,i,(r=>this.lc(r)));return this.ec.push(s),s}ac(){this.tc&&K(47125,{hc:bp(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function bp(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function _p(n){return(function(e,i){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}class Ze extends gc{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new vp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vp(t),this._firestoreClient=void 0,await t}}}function gv(n,t){const e=typeof n=="object"?n:Eu(),i=typeof n=="string"?n:ka,s=wu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=fw("firestore");r&&oS(s,...r)}return s}function Jr(n){if(n._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aS(n),n._firestoreClient}function aS(n){var t,e,i;const s=n._freezeSettings(),r=(function(a,c,l,d){return new DI(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fv(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new eS(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&(function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ae(Wt.fromBase64String(t))}catch(e){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ae(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ae._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Gr(t,Ae._jsonSchema))return Ae.fromBase64String(t.bytes)}}Ae._jsonSchemaVersion="firestore/bytes/1.0",Ae._jsonSchema={type:Lt("string",Ae._jsonSchemaVersion),bytes:Lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Z(this._lat,t._lat)||Z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(t){if(Gr(t,Ye._jsonSchema))return new Ye(t.latitude,t.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:Lt("string",Ye._jsonSchemaVersion),latitude:Lt("number"),longitude:Lt("number")};/**
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
 */class Xe{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Gr(t,Xe._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Xe(t.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:Lt("string",Xe._jsonSchemaVersion),vectorValues:Lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^__.*__$/;class lS{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ri(t,this.data,this.fieldMask,e,this.fieldTransforms):new Kr(t,this.data,e,this.fieldTransforms)}}class mv{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return new ri(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yv(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}class cd{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new cd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.fc(t),s}gc(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Ba(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(yv(this.Ec)&&cS.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class uS{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||hc(t)}Dc(t,e,i,s=!1){return new cd({Ec:t,methodName:e,bc:i,path:qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(n){const t=n._freezeSettings(),e=hc(n._databaseId);return new uS(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ld(n,t,e,i,s,r={}){const o=n.Dc(r.merge||r.mergeFields?2:0,t,e,s);ud("Data must be an object, but it was:",o,i);const a=_v(i,o);let c,l;if(r.merge)c=new _e(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=Jl(t,h,e);if(!o.contains(f))throw new z(V.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Ev(d,f)||d.push(f)}c=new _e(d),l=o.fieldTransforms.filter((h=>c.covers(h.field)))}else c=null,l=o.fieldTransforms;return new lS(new ge(a),c,l)}class mc extends ad{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof mc}}function vv(n,t,e,i){const s=n.Dc(1,t,e);ud("Data must be an object, but it was:",s,i);const r=[],o=ge.empty();si(i,((c,l)=>{const d=dd(t,c,e);l=mt(l);const h=s.gc(d);if(l instanceof mc)r.push(d);else{const f=eo(l,h);f!=null&&(r.push(d),o.set(d,f))}}));const a=new _e(r);return new mv(o,a,s.fieldTransforms)}function bv(n,t,e,i,s,r){const o=n.Dc(1,t,e),a=[Jl(t,i,e)],c=[s];if(r.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Jl(t,r[f])),c.push(r[f+1]);const l=[],d=ge.empty();for(let f=a.length-1;f>=0;--f)if(!Ev(l,a[f])){const g=a[f];let y=c[f];y=mt(y);const b=o.gc(g);if(y instanceof mc)l.push(g);else{const v=eo(y,b);v!=null&&(l.push(g),d.set(g,v))}}const h=new _e(l);return new mv(d,h,o.fieldTransforms)}function dS(n,t,e,i=!1){return eo(e,n.Dc(i?4:3,t))}function eo(n,t){if(wv(n=mt(n)))return ud("Unsupported field value:",t,n),_v(n,t);if(n instanceof ad)return(function(i,s){if(!yv(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let c=eo(a,s.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=mt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return nA(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=vt.fromDate(i);return{timestampValue:Oa(s.serializer,r)}}if(i instanceof vt){const r=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Oa(s.serializer,r)}}if(i instanceof Ye)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ae)return{bytesValue:By(s.serializer,i._byteString)};if(i instanceof kt){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ju(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Xe)return(function(o,a){return{mapValue:{fields:{[py]:{stringValue:gy},[Ca]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw a.wc("VectorValues must only contain numeric values.");return $u(a.serializer,l)}))}}}}}})(i,s);throw s.wc(`Unsupported field value: ${ec(i)}`)})(n,t)}function _v(n,t){const e={};return cy(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):si(n,((i,s)=>{const r=eo(s,t.Vc(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function wv(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Ye||n instanceof Ae||n instanceof kt||n instanceof ad||n instanceof Xe)}function ud(n,t,e){if(!wv(e)||!oy(e)){const i=ec(e);throw i==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+i)}}function Jl(n,t,e){if((t=mt(t))instanceof Zr)return t._internalPath;if(typeof t=="string")return dd(n,t);throw Ba("Field path arguments must be of type string or ",n,!1,void 0,e)}const hS=new RegExp("[~\\*/\\[\\]]");function dd(n,t,e){if(t.search(hS)>=0)throw Ba(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Zr(...t.split("."))._internalPath}catch{throw Ba(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ba(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new z(V.INVALID_ARGUMENT,a+n+c)}function Ev(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new fS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(hd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class fS extends Tv{data(){return super.data()}}function hd(n,t){return typeof t=="string"?dd(n,t):t instanceof Zr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fd{}class Av extends fd{}function yc(n,t,...e){let i=[];t instanceof fd&&i.push(t),i=i.concat(e),(function(r){const o=r.filter((c=>c instanceof gd)).length,a=r.filter((c=>c instanceof pd)).length;if(o>1||o>0&&a>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const s of i)n=s._apply(n);return n}class pd extends Av{constructor(t,e,i){super(),this._field=t,this._op=e,this._value=i,this.type="where"}static _create(t,e,i){return new pd(t,e,i)}_apply(t){const e=this._parse(t);return xv(t._query,e),new oi(t.firestore,t.converter,Ul(t._query,e))}_parse(t){const e=to(t.firestore);return(function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ep(h,d);const y=[];for(const b of h)y.push(wp(c,r,b));f={arrayValue:{values:y}}}else f=wp(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ep(h,d),f=dS(a,o,h,d==="in"||d==="not-in");return Nt.create(l,d,f)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class gd extends fd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new gd(t,e)}_parse(t){const e=this._queryConstraints.map((i=>i._parse(t))).filter((i=>i.getFilters().length>0));return e.length===1?e[0]:Le.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,r){let o=s;const a=r.getFlattenedFilters();for(const c of a)xv(o,c),o=Ul(o,c)})(t._query,e),new oi(t.firestore,t.converter,Ul(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class md extends Av{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new md(t,e)}_apply(t){const e=(function(s,r,o){if(s.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kr(r,o)})(t._query,this._field,this._direction);return new oi(t.firestore,t.converter,(function(s,r){const o=s.explicitOrderBy.concat([r]);return new Ss(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function vc(n,t="asc"){const e=t,i=hd("orderBy",n);return md._create(i,e)}function wp(n,t,e){if(typeof(e=mt(e))=="string"){if(e==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ty(t)&&e.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=t.path.child(gt.fromString(e));if(!W.isDocumentKey(i))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Vf(n,new W(i))}if(e instanceof kt)return Vf(n,e._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(e)}.`)}function Ep(n,t){if(!Array.isArray(n)||n.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xv(n,t){const e=(function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class pS{convertValue(t,e="none"){switch(Qn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw K(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return si(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var e,i,s;const r=(s=(i=(e=t.fields)===null||e===void 0?void 0:e[Ca].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map((o=>Rt(o.doubleValue)));return new Xe(r)}convertGeoPoint(t){return new Ye(Rt(t.latitude),Rt(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=sc(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(xr(t));default:return null}}convertTimestamp(t){const e=Yn(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=gt.fromString(t);lt(qy(i),9688,{name:t});const s=new Sr(i.get(1),i.get(3)),r=new W(i.popFirst(5));return s.isEqual(e)||En(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Zs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ai extends Tv{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(hd("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ai._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ai._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ai._jsonSchema={type:Lt("string",Ai._jsonSchemaVersion),bundleSource:Lt("string","DocumentSnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class ia extends Ai{data(t={}){return super.data(t)}}class xi{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new ia(this._firestore,this._userDataWriter,i.key,i,new Zs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const c=new ia(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const c=new ia(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:gS(a.type),doc:c,oldIndex:l,newIndex:d}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=xi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ou.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function gS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){n=ue(n,kt);const t=ue(n.firestore,Ze);return sS(Jr(t),n._key).then((e=>Rv(t,n,e)))}xi._jsonSchemaVersion="firestore/querySnapshot/1.0",xi._jsonSchema={type:Lt("string",xi._jsonSchemaVersion),bundleSource:Lt("string","QuerySnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class vd extends pS{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ae(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,e)}}function us(n){n=ue(n,oi);const t=ue(n.firestore,Ze),e=Jr(t),i=new vd(t);return Iv(n._query),rS(e,n._query).then((s=>new xi(t,i,n,s)))}function Pv(n,t,e){n=ue(n,kt);const i=ue(n.firestore,Ze),s=yd(n.converter,t,e);return no(i,[ld(to(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,de.none())])}function ai(n,t,e,...i){n=ue(n,kt);const s=ue(n.firestore,Ze),r=to(s);let o;return o=typeof(t=mt(t))=="string"||t instanceof Zr?bv(r,"updateDoc",n._key,t,e,i):vv(r,"updateDoc",n._key,t),no(s,[o.toMutation(n._key,de.exists(!0))])}function bd(n){return no(ue(n.firestore,Ze),[new uc(n._key,de.none())])}function kv(n,t){const e=ue(n.firestore,Ze),i=Gt(n),s=yd(n.converter,t);return no(e,[ld(to(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,de.exists(!1))]).then((()=>i))}function Cv(n,...t){var e,i,s;n=mt(n);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||_p(t[o])||(r=t[o++]);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(_p(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,d;if(n instanceof kt)l=ue(n.firestore,Ze),d=rc(n._key.path),c={next:h=>{t[o]&&t[o](Rv(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=ue(n,oi);l=ue(h.firestore,Ze),d=h._query;const f=new vd(l);c={next:g=>{t[o]&&t[o](new xi(l,f,h,g))},error:t[o+1],complete:t[o+2]},Iv(n._query)}return(function(f,g,y,b){const v=new od(b),E=new id(g,v,y);return f.asyncQueue.enqueueAndForget((async()=>td(await Fa(f),E))),()=>{v.Ou(),f.asyncQueue.enqueueAndForget((async()=>ed(await Fa(f),E)))}})(Jr(l),d,a,c)}function no(n,t){return(function(i,s){const r=new vn;return i.asyncQueue.enqueueAndForget((async()=>Wx(await iS(i),s,r))),r.promise})(Jr(n),t)}function Rv(n,t,e){const i=e.docs.get(t._key),s=new vd(n);return new Ai(n,s,t._key,i,new Zs(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=to(t)}set(t,e,i){this._verifyNotCommitted();const s=ll(t,this._firestore),r=yd(s.converter,e,i),o=ld(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,de.none())),this}update(t,e,i,...s){this._verifyNotCommitted();const r=ll(t,this._firestore);let o;return o=typeof(e=mt(e))=="string"||e instanceof Zr?bv(this._dataReader,"WriteBatch.update",r._key,e,i,s):vv(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(o.toMutation(r._key,de.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ll(t,this._firestore);return this._mutations=this._mutations.concat(new uc(e._key,de.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ll(n,t){if((n=mt(n)).firestore!==t)throw new z(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(n){return Jr(n=ue(n,Ze)),new mS(n,(t=>no(n,t)))}(function(t,e=!0){(function(s){Is=s})(Ts),fs(new Ri("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Ze(new gI(i.getProvider("auth-internal")),new vI(o,i.getProvider("app-check-internal")),(function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sr(l.options.projectId,d)})(o,s),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),jn(Tf,If,t),jn(Tf,If,"esm2017")})();const _t={},Zl={apiKey:(_t==null?void 0:_t.VITE_FIREBASE_API_KEY)||"AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",authDomain:(_t==null?void 0:_t.VITE_FIREBASE_AUTH_DOMAIN)||"money-control-e6af5.firebaseapp.com",databaseURL:(_t==null?void 0:_t.VITE_FIREBASE_DATABASE_URL)||"https://money-control-e6af5-default-rtdb.firebaseio.com",projectId:(_t==null?void 0:_t.VITE_FIREBASE_PROJECT_ID)||"money-control-e6af5",storageBucket:(_t==null?void 0:_t.VITE_FIREBASE_STORAGE_BUCKET)||"money-control-e6af5.firebasestorage.app",messagingSenderId:(_t==null?void 0:_t.VITE_FIREBASE_MESSAGING_SENDER_ID)||"490577558965",appId:(_t==null?void 0:_t.VITE_FIREBASE_APP_ID)||"1:490577558965:web:09275a065a09844f1eadfc",measurementId:(_t==null?void 0:_t.VITE_FIREBASE_MEASUREMENT_ID)||"G-JTLBM89W1W"};function Mv(){const t=["apiKey","authDomain","projectId","appId"].filter(e=>!Zl[e]||String(Zl[e]).includes("YOUR_"));return t.length>0?(console.error("⚠️ Firebase configuration is incomplete. Missing fields:",t.join(", ")),{isValid:!1,missing:t}):{isValid:!0,missing:[]}}const _d=M0().length===0?um(Zl):Eu(),tn=lI(_d);try{KE(tn,Um).catch(n=>{console.warn("browserLocalPersistence warning:",n)})}catch(n){console.warn("setPersistence warning:",n)}const zi=gv(_d);function vS(){return zi||gv(_d)}function H(n){return n==null||isNaN(n)?"₹0":`₹${Number(n).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:0})}`}function ci(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function bS(n){return n?new Date(n+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):""}function $a(n){if(!n)return"";let t;if(n instanceof Date)t=n;else if(n&&typeof n.toDate=="function")t=n.toDate();else if(n&&typeof n=="object"&&n.seconds!==void 0)t=new Date(n.seconds*1e3);else if(typeof n=="number")t=new Date(n);else if(typeof n=="string"){const o=n.trim();if(/^\d{1,2}:\d{2}\s*(AM|PM)$/i.test(o))return o.toUpperCase();t=new Date(o)}else t=new Date(n);if(!t||isNaN(t.getTime()))return"";let e=t.getHours();const i=t.getMinutes(),s=e>=12?"PM":"AM";e=e%12,e=e||12;const r=String(i).padStart(2,"0");return`${e}:${r} ${s}`}function Dv(n){if(!n)return"Time unavailable";const t=n.createdAt||n.timestamp||n.time;if(!t)return"Time unavailable";if(typeof t=="string"&&/^\d{1,2}:\d{2}(:\d{2})?$/.test(t.trim())){const i=n.date||li(),s=new Date(`${i}T${t.trim()}`);if(!isNaN(s.getTime()))return $a(s)||"Time unavailable"}return $a(t)||"Time unavailable"}function _S(){const n=new Date().getHours();return n<12?"Good Morning":n<17?"Good Afternoon":"Good Evening"}function li(){const n=new Date,t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${i}`}function Ov(){return`📅 Today — ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`}function wS(n){const t=li(),e=new Date;e.setDate(e.getDate()-1);const i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n===t?"Today":n===i?"Yesterday":ci(n)}function ES(){return new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Nv(n){return["January","February","March","April","May","June","July","August","September","October","November","December"][n]}function TS(n){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n]}function Lv(n){const t=new Date(n+"T00:00:00"),e=t.getDay(),i=new Date(t);i.setDate(t.getDate()-e);const s=new Date(i);return s.setDate(i.getDate()+6),{start:i.toISOString().split("T")[0],end:s.toISOString().split("T")[0]}}function Ti(n){if(!n)return"";const t=document.createElement("div");return t.textContent=n,t.innerHTML}const ks=[{value:"Food",label:"🍔 Food",emoji:"🍔"},{value:"Travel",label:"🚌 Travel",emoji:"🚌"},{value:"Recharge",label:"📱 Recharge",emoji:"📱"},{value:"Shopping",label:"🛍️ Shopping",emoji:"🛍️"},{value:"Entertainment",label:"🎮 Entertainment",emoji:"🎮"},{value:"Education",label:"📚 Education",emoji:"📚"},{value:"Software",label:"💻 Software",emoji:"💻"},{value:"Personal",label:"🏠 Personal",emoji:"🏠"},{value:"Other",label:"💊 Other",emoji:"💊"}],bc=[{value:"Pocket Money",label:"💰 Pocket Money",emoji:"💰"},{value:"Salary",label:"💼 Salary",emoji:"💼"},{value:"Gift",label:"🎁 Gift",emoji:"🎁"},{value:"Freelance",label:"💻 Freelance",emoji:"💻"},{value:"Refund",label:"🔄 Refund",emoji:"🔄"},{value:"Scholarship",label:"🎓 Scholarship",emoji:"🎓"},{value:"Other",label:"💵 Other",emoji:"💵"}];function _c(n){const t=ks.find(e=>e.value===n);return t?t.emoji:"💰"}const IS=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];function AS(n,t){const e=Number(n.initialBalance)||0,i=n.id;let s=e;return t.forEach(r=>{const o=Number(r.amount)||0;r.type==="INCOME"?r.destinationAccountId===i&&(s+=o):r.type==="EXPENSE"?r.sourceAccountId===i&&(s-=o):r.type==="TRANSFER"&&(r.destinationAccountId===i&&(s+=o),r.sourceAccountId===i&&(s-=o))}),s}function ti(n,t){const e={};let i=0;return n.forEach(s=>{const r=AS(s,t);e[s.id]=r,i+=r}),{balances:e,totalMoney:i}}function is(n,t,e=[]){if(!n)return{account:null,balance:0,totalAdded:0,totalSpent:0,totalTransferredIn:0,totalTransferredOut:0,count:0,history:[]};const i=n.id,s=(t||[]).filter(g=>g.sourceAccountId===i||g.destinationAccountId===i),r=[...s].sort((g,y)=>{const b=(g.date||"").localeCompare(y.date||"");if(b!==0)return b;const v=g.time||g.createdAt||"",E=y.time||y.createdAt||"";return v&&E?v.localeCompare(E):0});let o=Number(n.initialBalance)||0,a=0,c=0,l=0,d=0;const f=[...r.map(g=>{const y=Number(g.amount)||0,b=o;let v=g.type,E="🟢",P="Money Added",C="Money Added",D="Current Balance",O="+",L="var(--income)",I="";if(g.type==="INCOME")g.destinationAccountId===i&&(o+=y,a+=y,v="INCOME",E="🟢",P="Income",C="Money Added",D="Current Balance",O="+",L="var(--income)");else if(g.type==="EXPENSE")g.sourceAccountId===i&&(o-=y,c+=y,v="EXPENSE",E="🔴",P="Expense",C="Expense",D="Remaining Balance",O="−",L="var(--expense)");else if(g.type==="TRANSFER"){if(g.destinationAccountId===i){o+=y,l+=y,a+=y,v="TRANSFER_IN",E="🟣",P="Transfer IN",C="Received",D="Balance After",O="+",L="var(--primary-light)";const A=e.find(S=>S.id===g.sourceAccountId);A&&(I=A.name)}else if(g.sourceAccountId===i){o-=y,d+=y,c+=y,v="TRANSFER_OUT",E="🟣",P="Transfer OUT",C="Transferred",D="Balance After",O="−",L="var(--primary-light)";const A=e.find(S=>S.id===g.destinationAccountId);A&&(I=A.name)}}let _=b,T=o;return g.type==="TRANSFER"?v==="TRANSFER_OUT"&&g.sourcePreviousBalance!==void 0?(_=Number(g.sourcePreviousBalance),T=Number(g.sourceBalanceAfter)):v==="TRANSFER_IN"&&g.destinationPreviousBalance!==void 0?(_=Number(g.destinationPreviousBalance),T=Number(g.destinationBalanceAfter)):g.previousBalance!==void 0&&g.balanceAfter!==void 0&&(_=Number(g.previousBalance),T=Number(g.balanceAfter)):g.previousBalance!==void 0&&g.balanceAfter!==void 0&&(_=Number(g.previousBalance),T=Number(g.balanceAfter)),{...g,displayType:v,indicator:E,typeLabel:P,actionLabel:C,resultLabel:D,amountSign:O,amountColor:L,transferAccountName:I,previousBalance:_,balanceAfter:T}})].reverse();return{account:n,balance:o,totalAdded:a,totalSpent:c,totalTransferredIn:l,totalTransferredOut:d,count:s.length,history:f,transactions:s}}function xS(n){return n.filter(t=>t.type==="INCOME").reduce((t,e)=>t+Number(e.amount),0)}function SS(n){return n.filter(t=>t.type==="EXPENSE").reduce((t,e)=>t+Number(e.amount),0)}function PS(n){return n.filter(t=>t.type==="TRANSFER").reduce((t,e)=>t+Number(e.amount),0)}function kS(n,t){const{balances:e,totalMoney:i}=ti(n,t),s=xS(t),r=SS(t),o=PS(t);return{balances:e,totalMoney:i,totalIncome:s,totalExpenses:r,totalTransfers:o}}function Vv(n,t){const e=n.filter(o=>o.date===t),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function CS(n,t){const{start:e,end:i}=Lv(t),s=n.filter(c=>c.date>=e&&c.date<=i),r=s.filter(c=>c.type==="INCOME").reduce((c,l)=>c+l.amount,0),o=s.filter(c=>c.type==="EXPENSE").reduce((c,l)=>c+l.amount,0),a=s.filter(c=>c.type==="TRANSFER").reduce((c,l)=>c+l.amount,0);return{added:r,spent:o,transferred:a,net:r-o,count:s.length,transactions:s,startDate:e,endDate:i}}function Fv(n,t){const e=n.filter(o=>o.date&&o.date.startsWith(t)),i=e.filter(o=>o.type==="INCOME").reduce((o,a)=>o+a.amount,0),s=e.filter(o=>o.type==="EXPENSE").reduce((o,a)=>o+a.amount,0),r=e.filter(o=>o.type==="TRANSFER").reduce((o,a)=>o+a.amount,0);return{added:i,spent:s,transferred:r,net:i-s,count:e.length,transactions:e}}function RS(n,t){const e=t?n.filter(o=>o.type==="EXPENSE"&&o.date&&o.date.startsWith(t)):n.filter(o=>o.type==="EXPENSE"),i={};let s=0;return e.forEach(o=>{const a=o.category||"Other";i[a]=(i[a]||0)+o.amount,s+=o.amount}),{categories:Object.entries(i).map(([o,a])=>({category:o,amount:a,percentage:s>0?a/s*100:0,emoji:_c(o)})).sort((o,a)=>a.amount-o.amount),totalExpenses:s}}function Bv(n,t){const{balances:e,totalMoney:i}=ti(n,t);return n.map(s=>{const r=e[s.id]||0,o=i>0?Math.max(0,r)/i*100:0;return{account:s,balance:r,percentage:o}}).sort((s,r)=>r.balance-s.balance)}function $v(n,t){const{added:e,spent:i,transferred:s,net:r,count:o,transactions:a}=Fv(n,t),{categories:c}=RS(n,t),l=c.length>0?c[0]:null,d=a.filter(f=>f.type==="EXPENSE"),h=d.length>0?d.reduce((f,g)=>g.amount>f.amount?g:f,d[0]):null;return{income:e,expenses:i,transfers:s,savings:r,transactionCount:o,categories:c,highestCategory:l,highestExpense:h}}function Uv(n=[],t=[]){const e=(n||[]).reduce((c,l)=>c+(Number(l.initialBalance)||0),0),i=[...t||[]].sort((c,l)=>{const d=(c.date||"").localeCompare(l.date||"");if(d!==0)return d;const h=c.time||c.createdAt||"",f=l.time||l.createdAt||"";return h.localeCompare(f)});let s=e;const r=i.map(c=>{const l=Number(c.amount)||0,d=s;let h=c.type,f=0,g="",y="",b="";h==="INCOME"?(s+=l,f=l,g="Money Added",y="+",b="var(--income)"):h==="EXPENSE"?(s-=l,f=-l,g="Expense",y="−",b="var(--expense)"):h==="TRANSFER"&&(f=0,g="Transfer",y="",b="var(--primary-light)");const v=s,E=n.find(D=>D.id===c.sourceAccountId),P=n.find(D=>D.id===c.destinationAccountId);let C="";if(h==="INCOME")C=P?P.name:"Account";else if(h==="EXPENSE")C=E?E.name:"Account";else if(h==="TRANSFER"){const D=E?E.name:"Account",O=P?P.name:"Account";C=`${D} → ${O}`}return{...c,previousTotal:d,newTotal:v,netChange:f,typeLabel:g,amountSign:y,amountColor:b,accountName:C,sourceAccountName:E?E.name:"",destinationAccountName:P?P.name:""}}),o=s,a=[...r].reverse();return{startingTotal:e,currentTotal:o,count:i.length,history:a}}function Pt(){return zi||vS()}async function zv(n,t){if(!n)return;const e=t&&t.name?String(t.name).trim():"User",i=t&&t.email?String(t.email).trim():"";await Pv(Gt(Pt(),"users",n),{name:e,email:i,createdAt:t&&t.createdAt?t.createdAt:new Date().toISOString(),settings:{currency:"INR",theme:"dark",notifications:!0,budgetAlerts:!0,lowBalanceAlert:!0,lowBalanceThreshold:500,allowNegativeBalance:!1}},{merge:!0})}async function Mr(n){if(!n)return null;try{const t=await Sv(Gt(Pt(),"users",n));if(t&&t.exists())return{id:t.id,...t.data()}}catch(t){console.warn("getUserProfile warning:",t)}return null}async function jv(n,t){n&&(await ai(Gt(Pt(),"users",n),{initialBalance:Number(t)}),await Gv(n,t))}async function MS(n,t){if(!n)return;const e=await Mr(n),i=(e==null?void 0:e.settings)||{};await ai(Gt(Pt(),"users",n),{settings:{...i,...t}})}async function DS(n){if(!n)return;const t=yS(Pt());(await us(Ke(Pt(),"users",n,"accounts"))).forEach(r=>t.delete(r.ref)),(await us(Ke(Pt(),"users",n,"transactions"))).forEach(r=>t.delete(r.ref)),(await us(Ke(Pt(),"users",n,"budgets"))).forEach(r=>t.delete(r.ref)),t.delete(Gt(Pt(),"users",n)),await t.commit()}async function Hv(n,t){if(!n)return null;const e=Ke(Pt(),"users",n,"accounts");return(await kv(e,{name:t.name.trim(),type:t.type,initialBalance:Number(t.initialBalance)||0,bankName:(t.bankName||"").trim(),last4Digits:(t.last4Digits||"").trim(),icon:t.icon||qv(t.type),createdAt:new Date().toISOString()})).id}function qv(n){switch(n){case"Cash":return"💵";case"Bank":return"🏦";case"UPI":return"📱";case"Other":return"💳";default:return"💰"}}async function OS(n,t,e){if(!n||!t)return;const i=Gt(Pt(),"users",n,"accounts",t),s={name:e.name.trim(),type:e.type,bankName:(e.bankName||"").trim(),last4Digits:(e.last4Digits||"").trim(),icon:e.icon||qv(e.type),updatedAt:new Date().toISOString()};e.notes!==void 0&&(s.notes=(e.notes||"").trim()),e.initialBalance!==void 0&&(s.initialBalance=Number(e.initialBalance)||0),await ai(i,s)}async function NS(n,t){!n||!t||await bd(Gt(Pt(),"users",n,"accounts",t))}async function Wv(n){if(!n)return[];const t=Ke(Pt(),"users",n,"accounts"),e=yc(t,vc("createdAt","asc")),i=await us(e),s=[];return i.forEach(r=>{s.push({id:r.id,...r.data()})}),s}function LS(n,t){if(!n)return t([]),()=>{};const e=Ke(Pt(),"users",n,"accounts"),i=yc(e,vc("createdAt","asc"));return Cv(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Account subscription error:",s),t([],s)})}async function Gv(n,t=0){if(!n)return;(await Wv(n)).length===0&&await Hv(n,{name:"Cash",type:"Cash",initialBalance:Number(t)||0,icon:"💵"})}async function Kv(n,t){if(!n)return null;const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;if(t.date!==i)throw new Error("⚠️ Invalid transaction date. New transactions can only be created for today.");const s=await Wv(n),r=await us(yc(Ke(Pt(),"users",n,"transactions"),vc("createdAt","asc"))),o=[];r.forEach(h=>o.push({id:h.id,...h.data()}));const a=Number(t.amount),c=Ke(Pt(),"users",n,"transactions"),l={type:t.type,amount:a,date:t.date,reason:(t.reason||"").trim(),category:t.category||(t.type==="TRANSFER"?"Transfer":"Other"),notes:(t.notes||"").trim(),createdAt:t.createdAt||new Date().toISOString()};if(t.type==="INCOME"){l.destinationAccountId=t.destinationAccountId;const h=s.find(f=>f.id===t.destinationAccountId);if(h){const f=is(h,o,s);l.previousBalance=f.balance,l.balanceAfter=f.balance+a}}else if(t.type==="EXPENSE"){l.sourceAccountId=t.sourceAccountId;const h=s.find(f=>f.id===t.sourceAccountId);if(h){const f=is(h,o,s);l.previousBalance=f.balance,l.balanceAfter=f.balance-a}}else if(t.type==="TRANSFER"){l.sourceAccountId=t.sourceAccountId,l.destinationAccountId=t.destinationAccountId;const h=s.find(g=>g.id===t.sourceAccountId),f=s.find(g=>g.id===t.destinationAccountId);if(h){const g=is(h,o,s);l.sourcePreviousBalance=g.balance,l.sourceBalanceAfter=g.balance-a}if(f){const g=is(f,o,s);l.destinationPreviousBalance=g.balance,l.destinationBalanceAfter=g.balance+a}}return(await kv(c,l)).id}async function wd(n,t,e){if(!n||!t)return;const i=Gt(Pt(),"users",n,"transactions",t),s={amount:Number(e.amount),date:e.date,reason:(e.reason||"").trim(),category:e.category||(e.type==="TRANSFER"?"Transfer":"Other"),notes:(e.notes||"").trim(),updatedAt:new Date().toISOString()};e.type!==void 0&&(s.type=e.type),e.sourceAccountId!==void 0&&(s.sourceAccountId=e.sourceAccountId),e.destinationAccountId!==void 0&&(s.destinationAccountId=e.destinationAccountId),await ai(i,s)}async function VS(n,t){!n||!t||await bd(Gt(Pt(),"users",n,"transactions",t))}function FS(n,t){if(!n)return t([]),()=>{};const e=Ke(Pt(),"users",n,"transactions"),i=yc(e,vc("createdAt","desc"));return Cv(i,s=>{const r=[];s.forEach(o=>{r.push({id:o.id,...o.data()})}),t(r)},s=>{console.error("Transaction subscription error:",s),t([],s)})}async function Yv(n,t){if(!n)return;const e=t.category||"monthly";await Pv(Gt(Pt(),"users",n,"budgets",e),{category:t.category||"monthly",amount:Number(t.amount),month:t.month,updatedAt:new Date().toISOString()})}async function BS(n){if(!n)return[];const t=Ke(Pt(),"users",n,"budgets"),e=await us(t),i=[];return e.forEach(s=>{i.push({id:s.id,...s.data()})}),i}async function $S(n,t){!n||!t||await bd(Gt(Pt(),"users",n,"budgets",t))}async function US(n,t,e){const i=Mv();if(!i.isValid)throw{code:"auth/config-incomplete",message:`Firebase configuration is incomplete. Missing: ${i.missing.join(", ")}`};if(typeof navigator<"u"&&!navigator.onLine)throw{code:"auth/network-request-failed",message:"Network error. Check your internet connection."};const s=(async()=>{const a=(await jE(tn,t.trim(),e)).user;try{n&&n.trim()&&await Fm(a,{displayName:n.trim()})}catch(c){console.warn("firebaseUpdateProfile warning:",c)}try{await zv(a.uid,{name:(n||"").trim()||"User",email:(t||"").trim(),createdAt:new Date().toISOString()})}catch(c){console.warn("createUserProfile warning during registration:",c)}return a})(),r=new Promise((o,a)=>{setTimeout(()=>{a({code:"auth/timeout",message:"Registration request timed out. Please try again."})},12e3)});return await Promise.race([s,r])}async function zS(n,t){const e=Mv();if(!e.isValid)throw{code:"auth/config-incomplete",message:`Firebase configuration is incomplete. Missing: ${e.missing.join(", ")}`};if(typeof navigator<"u"&&!navigator.onLine)throw{code:"auth/network-request-failed",message:"Network error. Check your internet connection."};const i=(async()=>(await HE(tn,n.trim(),t)).user)(),s=new Promise((r,o)=>{setTimeout(()=>{o({code:"auth/timeout",message:"Login request timed out. Please try again."})},12e3)});return await Promise.race([i,s])}async function Ed(){await JE(tn)}async function jS(n){await zE(tn,n.trim())}function HS(n){return QE(tn,n)}async function qS(n){const t=tn.currentUser;if(!t)throw new Error("No user signed in");await Fm(t,{displayName:n.trim()})}async function WS(n,t){const e=tn.currentUser;if(!e)throw new Error("No user signed in");const i=xn.credential(e.email,n);await Cu(e,i),await WE(e,t)}async function GS(n){const t=tn.currentUser;if(!t)throw new Error("No user signed in");const e=xn.credential(t.email,n);await Cu(t,e),await DS(t.uid),await ZE(t)}function ul(n){(n!=null&&n.code||n!=null&&n.message)&&console.error("Firebase Auth Error:",{code:n==null?void 0:n.code,message:n==null?void 0:n.message});const t=(n==null?void 0:n.code)||"",e={"auth/invalid-credential":"Invalid email or password.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect email or password.","auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many login attempts. Please try again later.","auth/network-request-failed":"Network error. Check your internet connection.","auth/email-already-in-use":"An account with this email already exists. Please Log In.","auth/weak-password":"Password is too weak.","auth/operation-not-allowed":"Email/Password sign-in is not enabled in Firebase Console.","auth/requires-recent-login":"Please logout and login again before performing this action.","auth/popup-closed-by-user":"Sign-in popup was closed before completing.","auth/unauthorized-domain":"This domain is not authorized in Firebase Console.","auth/profile-create-failed":"Account created, but your profile could not be saved. Please retry.","auth/config-incomplete":(n==null?void 0:n.message)||"Firebase configuration is incomplete.","auth/timeout":(n==null?void 0:n.message)||"Authentication request timed out. Please try again."};if(e[t])return e[t];if(n!=null&&n.message){const s=String(n.message).replace(/^Firebase:\s*/i,"").replace(/\s*\([^\)]*\)/g,"").trim();if(s&&s!=="Error")return s}return"Unable to log in. Please try again."}function Xv(n,t,e){const i=t.filter(l=>l.type==="EXPENSE"&&l.date&&l.date.startsWith(e)),s=i.reduce((l,d)=>l+d.amount,0),r=n.find(l=>l.category==="monthly"),o=r?{budget:r.amount,spent:s,remaining:r.amount-s,percentage:r.amount>0?Math.min(s/r.amount*100,100):0,exceeded:s>r.amount}:null,c=n.filter(l=>l.category!=="monthly").map(l=>{const d=i.filter(h=>h.category===l.category).reduce((h,f)=>h+f.amount,0);return{category:l.category,budget:l.amount,spent:d,remaining:l.amount-d,percentage:l.amount>0?Math.min(d/l.amount*100,100):0,exceeded:d>l.amount}});return{monthlyProgress:o,categoryProgress:c,totalSpent:s}}function KS(n,t,e){const i=[],{monthlyProgress:s,categoryProgress:r}=Xv(n,t,e);return s&&(s.exceeded?i.push({type:"danger",icon:"🚨",title:"Budget Exceeded",message:`You exceeded your monthly budget by ₹${Math.abs(s.remaining).toLocaleString("en-IN")}.`}):s.percentage>=80&&i.push({type:"warning",icon:"⚠️",title:"Budget Alert",message:`You have used ${s.percentage.toFixed(0)}% of your monthly budget.`})),r.forEach(o=>{o.exceeded&&i.push({type:"danger",icon:"🚨",title:"Category Budget Exceeded",message:`You exceeded your ${o.category} budget by ₹${Math.abs(o.remaining).toLocaleString("en-IN")}.`})}),i}async function YS(n,t,e){await Yv(n,{category:"monthly",amount:Number(t),month:e})}async function XS(n,t,e,i){await Yv(n,{category:t,amount:Number(e),month:i})}async function Td(n){return await BS(n)}async function QS(n,t){await $S(n,t)}let xe=null,bn=!1;function JS(){ZS(),tP(),eP(),iP()}function ZS(){if(!("serviceWorker"in navigator))return;if(location.hostname==="localhost"||location.hostname==="127.0.0.1"||location.hostname==="::1"){navigator.serviceWorker.getRegistrations().then(s=>{for(const r of s)r.unregister()}).catch(s=>console.warn("[PWA] SW unregister warning:",s));return}const t="mc_sw_reloaded";let e=!1;function i(){if(!e){if(sessionStorage.getItem(t)){sessionStorage.removeItem(t);return}e=!0,sessionStorage.setItem(t,"1"),console.log("[PWA] New version active — reloading for update."),window.location.reload()}}navigator.serviceWorker.addEventListener("message",s=>{s.data&&s.data.type==="SW_UPDATED"&&(console.log("[PWA] SW_UPDATED received, version:",s.data.version),i())}),navigator.serviceWorker.addEventListener("controllerchange",()=>{console.log("[PWA] Controller changed — new SW is active."),i()}),window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then(s=>{console.log("[PWA] SW registered:",s.scope);function r(o){o.addEventListener("statechange",()=>{o.state==="installed"&&navigator.serviceWorker.controller&&console.log("[PWA] New SW installed and waiting.")})}s.installing&&r(s.installing),s.addEventListener("updatefound",()=>{console.log("[PWA] SW update found."),s.installing&&r(s.installing)}),setInterval(()=>{s.update().catch(()=>{})},60*1e3)}).catch(s=>{console.warn("[PWA] SW registration failed:",s)})})}function tP(){window.matchMedia("(display-mode: standalone)").matches&&(bn=!0),window.navigator.standalone===!0&&(bn=!0),window.addEventListener("appinstalled",()=>{bn=!0,xe=null,tu()})}function eP(){window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),xe=n,!localStorage.getItem("mc_install_dismissed")&&!bn&&setTimeout(()=>nP(),3e3)})}function nP(){if(bn||!xe)return;const n=document.getElementById("pwa-install-banner");n&&(n.innerHTML=`
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
  `,n.classList.add("show"),document.getElementById("pwa-install-accept").onclick=async()=>{xe&&(xe.prompt(),(await xe.userChoice).outcome==="accepted"&&(bn=!0),xe=null),tu()},document.getElementById("pwa-install-dismiss").onclick=()=>{localStorage.setItem("mc_install_dismissed","true"),tu()})}function tu(){const n=document.getElementById("pwa-install-banner");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function iP(){const n=()=>{const t=document.getElementById("offline-banner");t&&(navigator.onLine?(t.classList.remove("show"),setTimeout(()=>{t.innerHTML=""},300)):(t.innerHTML=`
        <div class="offline-content">
          <span class="offline-icon">📡</span>
          <span class="offline-text">You're offline — Reconnect to save new transactions securely.</span>
        </div>
      `,t.classList.add("show")))};window.addEventListener("online",n),window.addEventListener("offline",n),setTimeout(n,1e3)}function Qv(){return navigator.onLine}function sP(){return bn}function rP(){return!!xe&&!bn}async function oP(){if(!xe)return!1;xe.prompt();const n=await xe.userChoice;return n.outcome==="accepted"&&(bn=!0),xe=null,n.outcome==="accepted"}const Tt=4;async function Jv(n){const e=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function aP(n,t){await ai(Gt(zi,"users",n),{pinHash:t,pinEnabled:!0,pinSetupPromptShown:!0})}async function Ua(n){try{const t=await Sv(Gt(zi,"users",n));if(t&&t.exists()){const e=t.data();return{pinHash:e.pinHash||null,pinEnabled:e.pinEnabled||!1,pinSetupPromptShown:e.pinSetupPromptShown||!1,autoLockTimeout:e.autoLockTimeout!==void 0?e.autoLockTimeout:5,pinLength:Tt}}}catch(t){console.warn("getPinData warning:",t)}return{pinHash:null,pinEnabled:!1,pinSetupPromptShown:!1,autoLockTimeout:5,pinLength:Tt}}async function Zv(n,t){return await Jv(n)===t}async function tb(n){await ai(Gt(zi,"users",n),{pinHash:null,pinEnabled:!1})}async function cP(n,t){await ai(Gt(zi,"users",n),{autoLockTimeout:t})}async function lP(n){await ai(Gt(zi,"users",n),{pinSetupPromptShown:!0})}let uP=0;function Do(n,t="info",e=4e3){const i=document.getElementById("toast-container");if(!i)return;const s=`toast-${++uP}`,r={success:"✅",error:"❌",warning:"⚠️",info:"ℹ️"},o={success:"Success",error:"Error",warning:"Warning",info:"Info"},a=document.createElement("div");a.id=s,a.className=`toast toast-${t}`,a.innerHTML=`
    <div class="toast-icon">${r[t]||r.info}</div>
    <div class="toast-content">
      <div class="toast-title">${o[t]||o.info}</div>
      <div class="toast-message">${n}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${e}ms linear;"></div>
  `,i.appendChild(a),requestAnimationFrame(()=>{const d=a.querySelector(".toast-progress");d&&(d.style.width="0%")});const c=setTimeout(()=>{Tp(a)},e);a.querySelector(".toast-close").addEventListener("click",()=>{clearTimeout(c)});const l=i.querySelectorAll(".toast");l.length>4&&Tp(l[0])}function Tp(n){!n||!n.parentNode||(n.classList.add("removing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}const q={success:(n,t)=>Do(n,"success",t),error:(n,t)=>Do(n,"error",t),warning:(n,t)=>Do(n,"warning",t),info:(n,t)=>Do(n,"info",t)};let R={mode:"lock",pin:"",confirmPin:"",currentPinInput:"",step:"enter",pinLength:Tt,failedAttempts:0,isProcessing:!1,uid:null,storedHash:null,onUnlock:null,onSetupComplete:null},Ip=!1;function dP(n,t){R.mode="setup-prompt",R.uid=n,R.onSetupComplete=t,be()}function hP(n,t){R.mode="create",R.uid=n,R.pin="",R.confirmPin="",R.currentPinInput="",R.step="enter",R.pinLength=Tt,R.onSetupComplete=t,be()}function fP(n,t,e){R.mode="change",R.uid=n,R.storedHash=t,R.currentPinInput="",R.pin="",R.confirmPin="",R.step=t?"current":"enter",R.pinLength=Tt,R.onSetupComplete=e,be()}function eb(n,t,e){R.mode="lock",R.uid=n,R.storedHash=t,R.pin="",R.failedAttempts=0,R.isProcessing=!1,R.onUnlock=e,be()}function Si(){const n=document.getElementById("pin-lock-root");n&&(n.classList.remove("show"),setTimeout(()=>{n.innerHTML=""},300))}function be(){const n=document.getElementById("pin-lock-root");if(!n)return;let t="";switch(R.mode){case"setup-prompt":t=gP();break;case"create":case"change":t=mP();break;case"lock":t=yP();break;case"forgot":t=vP();break}n.innerHTML=`<div class="pin-overlay">${t}</div>`,n.classList.add("show"),bP(),pP()}function pP(){Ip||(Ip=!0,window.addEventListener("keydown",n=>{const t=document.getElementById("pin-lock-root");if(!(!t||!t.classList.contains("show"))&&!(n.target.tagName==="INPUT"||n.target.tagName==="TEXTAREA")){if(n.key>="0"&&n.key<="9"){if(R.isProcessing)return;ib(n.key)}else if(n.key==="Backspace"){if(R.isProcessing)return;sb()}else if(n.key==="Enter"){if(R.isProcessing)return;R.mode==="lock"&&Ad()}}}))}function gP(){return`
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
  `}function mP(){let n="Create Your PIN",t="Choose a 4-digit PIN to protect your data.",e=R.pin;return R.mode==="change"?R.step==="current"?(n="Current PIN",t="Enter your current 4-digit PIN.",e=R.currentPinInput):R.step==="enter"?(n="New PIN",t="Enter your new 4-digit PIN.",e=R.pin):R.step==="confirm"&&(n="Confirm New PIN",t="Confirm your new 4-digit PIN.",e=R.confirmPin):R.step==="confirm"?(n="Confirm Your PIN",t="Enter your 4-digit PIN again to confirm.",e=R.confirmPin):(n="Enter Your PIN",t="Enter a 4-digit PIN to protect your data.",e=R.pin),`
    <div class="pin-screen pin-create-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">${n}</div>
      <p class="pin-subtitle">${t}</p>

      <div class="pin-dots" id="pin-dots">
        ${Id(e,Tt)}
      </div>

      <div class="pin-error" id="pin-create-error"></div>

      ${nb()}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-create-back">
          ← Back
        </button>
      </div>
    </div>
  `}function yP(){return`
    <div class="pin-screen pin-lock-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Money Control</div>
      <p class="pin-subtitle">Welcome Back 👋</p>
      <p class="pin-description">Enter your PIN</p>

      <div class="pin-dots" id="pin-dots">
        ${Id(R.pin,Tt)}
      </div>

      <div class="pin-error" id="pin-lock-error"></div>

      ${nb()}

      <button class="pin-btn pin-btn-primary pin-unlock-btn" id="pin-unlock-btn">
        🔓 Unlock
      </button>

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-btn">
          Forgot PIN?
        </button>
      </div>
    </div>
  `}function vP(){return`
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
  `}function Id(n,t=Tt){let e="";for(let i=0;i<t;i++){const s=i<n.length;e+=`<span class="pin-dot ${s?"filled":""}">${s?"●":"○"}</span>`}return e}function nb(){return`
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
  `}function Ce(){const n=document.getElementById("pin-dots");if(!n)return;let t="";R.mode==="create"?t=R.step==="confirm"?R.confirmPin:R.pin:R.mode==="change"?R.step==="current"?t=R.currentPinInput:R.step==="confirm"?t=R.confirmPin:t=R.pin:R.mode==="lock"&&(t=R.pin),n.innerHTML=Id(t,Tt)}function bP(){const n=document.getElementById("pin-setup-set");n&&(n.onclick=()=>{R.mode="create",R.pin="",R.confirmPin="",R.step="enter",be()});const t=document.getElementById("pin-setup-skip");t&&(t.onclick=async()=>{R.uid&&await lP(R.uid),Si(),R.onSetupComplete&&R.onSetupComplete()}),document.querySelectorAll(".pin-key[data-key]").forEach(a=>{a.onclick=()=>{if(R.isProcessing)return;const c=a.dataset.key;a.classList.add("pressed"),setTimeout(()=>a.classList.remove("pressed"),150),c==="delete"?sb():ib(c)}});const e=document.getElementById("pin-create-back");e&&(e.onclick=()=>{R.mode==="change"?R.step==="confirm"?(R.step="enter",R.confirmPin="",be()):R.step==="enter"&&R.storedHash?(R.step="current",R.pin="",be()):Si():R.step==="confirm"?(R.step="enter",R.confirmPin="",be()):Si()});const i=document.getElementById("pin-unlock-btn");i&&(i.onclick=()=>Ad());const s=document.getElementById("pin-forgot-btn");s&&(s.onclick=()=>{R.mode="forgot",be()});const r=document.getElementById("pin-forgot-verify");r&&(r.onclick=()=>wP());const o=document.getElementById("pin-forgot-back");o&&(o.onclick=()=>{R.mode="lock",R.pin="",be()})}function ib(n){const t=document.getElementById("pin-create-error");t&&(t.textContent=""),R.mode==="create"?R.step==="confirm"?R.confirmPin.length<Tt&&(R.confirmPin+=n,Ce(),R.confirmPin.length===Tt&&Ap()):R.pin.length<Tt&&(R.pin+=n,Ce(),R.pin.length===Tt&&setTimeout(()=>{R.step="confirm",be()},200)):R.mode==="change"?R.step==="current"?R.currentPinInput.length<Tt&&(R.currentPinInput+=n,Ce(),R.currentPinInput.length===Tt&&_P()):R.step==="confirm"?R.confirmPin.length<Tt&&(R.confirmPin+=n,Ce(),R.confirmPin.length===Tt&&Ap()):R.pin.length<Tt&&(R.pin+=n,Ce(),R.pin.length===Tt&&setTimeout(()=>{R.step="confirm",be()},200)):R.mode==="lock"&&R.pin.length<Tt&&(R.pin+=n,Ce(),R.pin.length===Tt&&setTimeout(()=>Ad(),150))}function sb(){R.mode==="create"?R.step==="confirm"?R.confirmPin=R.confirmPin.slice(0,-1):R.pin=R.pin.slice(0,-1):R.mode==="change"?R.step==="current"?R.currentPinInput=R.currentPinInput.slice(0,-1):R.step==="confirm"?R.confirmPin=R.confirmPin.slice(0,-1):R.pin=R.pin.slice(0,-1):R.mode==="lock"&&(R.pin=R.pin.slice(0,-1)),Ce()}async function _P(){const n=document.getElementById("pin-create-error");if(R.currentPinInput.length!==Tt){n&&(n.textContent="Enter your 4-digit PIN.");return}R.isProcessing=!0;try{if(await Zv(R.currentPinInput,R.storedHash))R.isProcessing=!1,R.step="enter",R.pin="",R.confirmPin="",be();else{R.isProcessing=!1,n&&(n.textContent="Incorrect PIN. Try again."),R.currentPinInput="",Ce();const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500))}}catch{R.isProcessing=!1,n&&(n.textContent="Verification failed. Try again.")}}async function Ap(){const n=document.getElementById("pin-create-error");if(R.pin!==R.confirmPin){n&&(n.textContent="PINs do not match. Please try again."),R.confirmPin="",Ce();const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}R.isProcessing=!0;try{const t=await Jv(R.pin);await aP(R.uid,t),q.success(R.mode==="change"?"🔐 PIN updated successfully!":"🔐 PIN created successfully!"),Si(),R.pin="",R.confirmPin="",R.currentPinInput="",R.isProcessing=!1,R.onSetupComplete&&R.onSetupComplete()}catch{n&&(n.textContent="Failed to save PIN. Please try again."),R.isProcessing=!1}}async function Ad(){if(R.isProcessing)return;const n=document.getElementById("pin-lock-error");if(R.pin.length!==Tt){n&&(n.textContent="Enter your 4-digit PIN.");const t=document.getElementById("pin-dots");t&&(t.classList.add("shake"),setTimeout(()=>t.classList.remove("shake"),500));return}if(R.isProcessing=!0,R.failedAttempts>=3){const t=Math.min(Math.pow(2,R.failedAttempts-2)*1e3,3e4),e=document.getElementById("pin-unlock-btn");e&&(e.disabled=!0,e.textContent=`Wait ${Math.ceil(t/1e3)}s...`),await new Promise(i=>setTimeout(i,t)),e&&(e.disabled=!1,e.textContent="🔓 Unlock")}try{if(await Zv(R.pin,R.storedHash))q.success("Unlocked successfully."),Si(),R.pin="",R.failedAttempts=0,R.isProcessing=!1,R.onUnlock&&R.onUnlock();else{R.failedAttempts++,R.pin="",Ce(),n&&(n.textContent="Incorrect PIN. Try again.");const e=document.getElementById("pin-dots");e&&(e.classList.add("shake"),setTimeout(()=>e.classList.remove("shake"),500)),R.isProcessing=!1}}catch{n&&(n.textContent="Verification failed. Try again."),R.pin="",Ce(),R.isProcessing=!1}}async function wP(){const n=document.getElementById("pin-forgot-password"),t=document.getElementById("pin-forgot-error");if(!n)return;const e=n.value;if(!e){t&&(t.textContent="Please enter your password.");return}const i=document.getElementById("pin-forgot-verify");i&&(i.disabled=!0,i.innerHTML='<span class="spinner"></span> Verifying...');try{const s=tn.currentUser;if(!s||!s.email){t&&(t.textContent="No authenticated user found."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN");return}const r=xn.credential(s.email,e);await Cu(s,r),await tb(R.uid),q.success("🔐 PIN removed. You can set a new PIN in Settings."),Si(),R.onUnlock&&R.onUnlock()}catch{t&&(t.textContent="Incorrect password. Please try again."),i&&(i.disabled=!1,i.textContent="Verify & Reset PIN")}}function io(n,t=!1){if(n===""||n===null||n===void 0)return"Please enter an amount.";const e=Number(n);return isNaN(e)?"Please enter a valid number.":(t?e<0:e<=0)?t?"Amount cannot be negative.":"Amount must be greater than ₹0.":e>99999999?"Amount is too large.":null}function xd(n){return!n||!n.trim()?"Please enter your email.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())?null:"Please enter a valid email address."}function Sd(n){return n?n.length<6?"Password must be at least 6 characters.":null:"Please enter a password."}function rb(n,t){return t?n!==t?"Passwords do not match.":null:"Please confirm your password."}function wc(n){return!n||!n.trim()?"Please enter your name.":n.trim().length<2?"Name must be at least 2 characters.":n.trim().length>50?"Name must be less than 50 characters.":null}function EP(n){if(!n)return"Please select a date.";const t=new Date(n);return isNaN(t.getTime())?"Please enter a valid date.":null}function Pd(n){if(!n)return"Date is required.";const t=new Date(n);if(isNaN(t.getTime()))return"Please enter a valid date.";const e=new Date,i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;return n!==i?"⚠️ Invalid transaction date. New transactions can only be created for today.":null}function TP(n){return n?null:"Please select a category."}function ob(n,t=!0){const e={},i=io(n.amount);if(i&&(e.amount=i),t){const r=Pd(n.date);r&&(e.date=r)}else{const r=EP(n.date);r&&(e.date=r)}const s=TP(n.category);return s&&(e.category=s),{isValid:Object.keys(e).length===0,errors:e}}function IP(n,t){const e={},i=xd(n);i&&(e.email=i);const s=Sd(t);return s&&(e.password=s),{isValid:Object.keys(e).length===0,errors:e}}function AP(n,t,e,i){const s={},r=wc(n);r&&(s.name=r);const o=xd(t);o&&(s.email=o);const a=Sd(e);a&&(s.password=a);const c=rb(e,i);return c&&(s.confirmPassword=c),{isValid:Object.keys(s).length===0,errors:s}}let sa="login";function xP(){return`
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-logo">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 72px; height: 72px; border-radius: 18px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.3);" />
          <h1 class="auth-logo-title">Money Control</h1>
          <p class="auth-logo-tagline">Take control of your money.</p>
        </div>

        <div class="auth-card" id="auth-card-body">
          ${ab()}
        </div>
      </div>
    </div>
  `}function ab(){if(sa==="login")return`
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
    `;if(sa==="register")return`
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
    `;if(sa==="forgot")return`
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
    `}function cb(n){const t=document.getElementById("auth-card-body");if(!t)return;const e=f=>{sa=f,t.innerHTML=ab(),cb()},i=document.getElementById("link-register");i&&(i.onclick=()=>e("register"));const s=document.getElementById("link-login");s&&(s.onclick=()=>e("login"));const r=document.getElementById("link-login-back");r&&(r.onclick=()=>e("login"));const o=document.getElementById("link-forgot");o&&(o.onclick=()=>e("forgot"));const a=document.getElementById("toggle-login-password");a&&(a.onclick=()=>{const f=document.getElementById("login-password");f&&(f.type=f.type==="password"?"text":"password")});const c=document.getElementById("toggle-reg-password");c&&(c.onclick=()=>{const f=document.getElementById("reg-password");f&&(f.type=f.type==="password"?"text":"password")});const l=document.getElementById("login-form");l&&(l.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("login-email").value,y=document.getElementById("login-password").value;document.getElementById("login-email-error").textContent="",document.getElementById("login-password-error").textContent="";const b=IP(g,y);if(!b.isValid){b.errors.email&&(document.getElementById("login-email-error").textContent=b.errors.email),b.errors.password&&(document.getElementById("login-password-error").textContent=b.errors.password);return}const v=document.getElementById("btn-login-submit");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Logging in...';try{await zS(g,y),q.success("Logged in successfully!")}catch(E){console.error("Login failure:",E);const P=ul(E);q.error(P);const C=document.getElementById("login-password-error");C&&(C.textContent=P)}finally{const E=document.getElementById("btn-login-submit");E&&(E.disabled=!1,E.innerHTML='<span class="btn-text">Log In</span>')}});const d=document.getElementById("register-form");d&&(d.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("reg-name").value,y=document.getElementById("reg-email").value,b=document.getElementById("reg-password").value,v=document.getElementById("reg-confirm").value;document.getElementById("reg-name-error").textContent="",document.getElementById("reg-email-error").textContent="",document.getElementById("reg-password-error").textContent="",document.getElementById("reg-confirm-error").textContent="";const E=AP(g,y,b,v);if(!E.isValid){E.errors.name&&(document.getElementById("reg-name-error").textContent=E.errors.name),E.errors.email&&(document.getElementById("reg-email-error").textContent=E.errors.email),E.errors.password&&(document.getElementById("reg-password-error").textContent=E.errors.password),E.errors.confirmPassword&&(document.getElementById("reg-confirm-error").textContent=E.errors.confirmPassword);return}const P=document.getElementById("btn-register-submit");P&&(P.disabled=!0,P.innerHTML='<span class="spinner"></span> Creating Account...');try{await US(g,y,b),q.success("Account created successfully!")}catch(C){console.error("Registration Error:",C);const D=ul(C);q.error(D);const O=document.getElementById("reg-email-error");O&&(O.textContent=D)}finally{const C=document.getElementById("btn-register-submit");C&&(C.disabled=!1,C.innerHTML='<span class="btn-text">Create Account</span>')}});const h=document.getElementById("forgot-form");h&&(h.onsubmit=async f=>{f.preventDefault();const g=document.getElementById("forgot-email").value;document.getElementById("forgot-email-error").textContent="";const y=xd(g);if(y){document.getElementById("forgot-email-error").textContent=y;return}const b=document.getElementById("btn-forgot-submit");b.disabled=!0,b.innerHTML='<span class="spinner"></span> Sending...';try{await jS(g),q.success("Password reset email sent! Check your inbox."),e("login")}catch(v){q.error(ul(v)),b.disabled=!1,b.innerHTML='<span class="btn-text">Send Reset Link</span>'}})}function SP(){return`
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
  `}function PP(n,t){const e=document.getElementById("onboarding-form");e&&(e.onsubmit=async i=>{i.preventDefault();const s=document.getElementById("initial-balance"),r=document.getElementById("onboarding-error");r.textContent="";const o=s.value,a=io(o,!0);if(a){r.textContent=a;return}const c=document.getElementById("btn-start-tracking");c.disabled=!0,c.innerHTML='<span class="spinner"></span> Saving...';try{await jv(n,Number(o)),q.success("Initial balance saved!"),t&&t()}catch(l){console.error("Error setting initial balance:",l),q.error("Unable to save initial balance. Please try again."),c.disabled=!1,c.innerHTML="Start Money Tracking"}})}function kP(n){if(!n)return"Unknown Date";const t=li(),e=n.split("-");if(e.length<3)return n;const[i,s,r]=e.map(Number),o=TS(s-1),a=t.split("-").map(Number),c=new Date(a[0],a[1]-1,a[2]);c.setDate(c.getDate()-1);const l=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`;return n===t?`Today, ${r} ${o}`:n===l?`Yesterday, ${r} ${o}`:`${r} ${o} ${i}`}function CP(n){return n.type==="TRANSFER"?"↔":n.type==="INCOME"?{"Pocket Money":"👛",Salary:"💼",Gift:"🎁",Freelance:"🖥️",Refund:"↩",Other:"💰"}[n.category]||"💰":_c(n.category)}function RP(n,t,e){const i=n.type==="INCOME",s=n.type==="EXPENSE",r=n.type==="TRANSFER",o=i?"income":s?"expense":"transfer",a=y=>{const b=t.find(v=>v.id===y);return b?b.name:""},c=Ti(n.reason||(r?"Account Transfer":n.category||"Transaction")),l=Dv(n);let d="";if(i){const y=a(n.destinationAccountId);d=[n.category,y,l].filter(Boolean).join(" · ")}else if(s){const y=a(n.sourceAccountId);d=[n.category,y,l].filter(Boolean).join(" · ")}else{const y=a(n.sourceAccountId),b=a(n.destinationAccountId);d=[y&&b?`${y} → ${b}`:y||b||"","Transfer",l].filter(Boolean).join(" · ")}let h="";i?h=`+${H(n.amount)}`:s?h=`−${H(n.amount)}`:h=H(n.amount);const f=CP(n),g=n.notes?`<span class="tl-notes-badge">${Ti(n.notes)}</span>`:"";return`
    <div class="tl-row animate-fade-in" data-tx-id="${n.id}">
      <div class="tl-spine">
        <div class="tl-dot tl-dot--${o}"></div>
        ${e?"":'<div class="tl-line"></div>'}
      </div>
      <div class="tl-icon tl-icon--${o}" aria-hidden="true">${f}</div>
      <div class="tl-details">
        <div class="tl-title">${c}</div>
        <div class="tl-meta">${Ti(d)}${g}</div>
      </div>
      <div class="tl-right">
        <div class="tl-amount tl-amount--${o}">${h}</div>
      </div>
    </div>
  `}function MP(n,t=[]){let e=0,i=0;t.forEach(a=>{a.type==="INCOME"?e+=Number(a.amount)||0:a.type==="EXPENSE"&&(i+=Number(a.amount)||0)});const s=kP(n),r=`+${H(e)}`,o=`-${H(i)}`;return`
    <div class="tl-group-header">
      <span class="tl-group-label">${s}</span>
      <div class="tl-group-totals" style="display: flex; align-items: center; gap: 12px; font-weight: var(--fw-bold, 700); font-size: var(--fs-sm, 0.875rem);">
        <span class="tl-group-added" style="color: var(--income, #10b981);">${r}</span>
        <span class="tl-group-expense" style="color: var(--expense, #ef4444);">${o}</span>
      </div>
    </div>
  `}function fr(n,t={}){if(!n||n.length===0)return"";const{accounts:e=[]}=t,i={},s=[];n.forEach(o=>{const a=o.date||"unknown";i[a]||(i[a]=[],s.push(a)),i[a].push(o)});let r='<div class="tl-container">';return s.forEach(o=>{const a=i[o];r+=MP(o,a),r+='<div class="tl-group">',a.forEach((c,l)=>{r+=RP(c,e,l===a.length-1)}),r+="</div>"}),r+="</div>",r}function lb(n="No transactions yet",t="Start tracking your money by adding your first transaction."){return`
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">${n}</h3>
      <p class="empty-state-text">${t}</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `}function DP(){return`
    <div class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <h3 class="empty-state-title">No results found</h3>
      <p class="empty-state-text">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  `}function dl(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📅</span>
      <h3 class="empty-state-title">No transactions on this date</h3>
      <p class="empty-state-text">There are no transactions recorded for the selected date.</p>
    </div>
  `}function OP(){return`
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `}let ra=null;function he(n){Vt();const t=document.getElementById("modal-root");if(!t)return;const e=document.createElement("div");e.className="modal-overlay",e.innerHTML=`
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
  `,t.appendChild(e),document.body.classList.add("no-scroll"),ra={element:e,onClose:n.onClose};const i=e.querySelector("#modal-close-btn");i&&i.addEventListener("click",Vt),e.addEventListener("click",r=>{r.target===e&&Vt()});const s=r=>{r.key==="Escape"&&(Vt(),document.removeEventListener("keydown",s))};return document.addEventListener("keydown",s),n.onOpen&&requestAnimationFrame(()=>n.onOpen(e)),e}function Vt(){if(!ra)return;const{element:n,onClose:t}=ra;n.classList.add("closing"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),document.body.classList.remove("no-scroll"),t&&t()},200),ra=null}function Vi(n){return new Promise(t=>{const e=`
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
    `;he({content:e,hideHeader:!0,onOpen:i=>{i.querySelector("#confirm-cancel").addEventListener("click",()=>{Vt(),t(!1)}),i.querySelector("#confirm-ok").addEventListener("click",()=>{Vt(),t(!0)})},onClose:()=>t(!1)})})}let St={user:null,profile:null,accounts:[],transactions:[],budgets:[]};function xp(n){St={...St,...n};const{profile:t,accounts:e,transactions:i}=St;if(St.dashboardError)return`
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
    `;const s=t!=null&&t.name?t.name.split(" ")[0]:"User",{balances:r,totalMoney:o}=kS(e,i),a=li(),c=Vv(i,a),l=i.filter(f=>f.date===a).slice(0,5),d=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,h=KS(St.budgets,i,d);return`
    <div class="page animate-fade-in dashboard-page">
      <!-- 1. Greeting + current date -->
      <div class="greeting">
        <h1 class="greeting-text">Good ${_S().replace("Good ","")}, ${s} 👋</h1>
        <p class="greeting-date">${ES()}</p>
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
      <div class="balance-card balance-card-interactive" id="dashboard-total-money-card" tabindex="0" role="button" aria-label="View Total Money History">
        <div class="balance-label">💰 TOTAL MONEY</div>
        <div class="balance-amount">${H(o)}</div>
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
                <div class="account-row-balance">${H(g)}</div>
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
            <div class="today-card-amount income">${H(c.added)}</div>
          </div>
          <div class="today-card expense">
            <div class="today-card-header">
              <span class="today-card-icon">🔴</span>
              <span class="today-card-label">Spent</span>
            </div>
            <div class="today-card-amount expense">${H(c.spent)}</div>
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

      <!-- 6. Today Activity -->
      <div class="section recent-transactions">
        <div class="section-header">
          <h2 class="section-title-sm">TODAY ACTIVITY</h2>
          ${i.length>0?`
            <span class="section-link" id="link-view-all-tx">View All →</span>
          `:""}
        </div>

        <div class="card card-flat recent-tx-card">
          ${l.length>0?fr(l,{accounts:St.accounts}):lb("No transactions today","Transactions added today will appear here. View full history in Txns.")}
        </div>
      </div>
    </div>
  `}function Sp(n,t){const e=document.getElementById("btn-retry-dashboard");e&&(e.onclick=()=>{e.disabled=!0,e.innerHTML='<span class="spinner"></span> Loading...',t&&t()});const i=document.getElementById("dashboard-total-money-card");if(i){const f=()=>n("total-money-history");i.onclick=f,i.onkeydown=g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),f())}}const s=document.getElementById("empty-add-account-btn");s&&(s.onclick=()=>n("accounts")),document.querySelectorAll(".quick-nav-btn[data-page]").forEach(f=>{f.onclick=()=>n(f.dataset.page)});const r=document.getElementById("link-manage-accounts");r&&(r.onclick=()=>{window.appState&&(window.appState.selectedAccountId=null),n("accounts")});const o=document.querySelector(".account-rows-container");if(o){const f=g=>{const y=g.target.closest("[data-account-id]");if(!y)return;const b=y.dataset.accountId;b&&(window.appState&&(window.appState.selectedAccountId=b,window.appState.accountOriginPage="dashboard"),n("accounts"))};o.onclick=f}const a=document.getElementById("link-view-all-tx");a&&(a.onclick=()=>n("transactions"));const c=document.getElementById("btn-quick-add-money");c&&(c.onclick=()=>pr("INCOME",t));const l=document.getElementById("btn-quick-add-expense");l&&(l.onclick=()=>pr("EXPENSE",t));const d=document.getElementById("btn-quick-transfer");d&&(d.onclick=()=>ub(t));const h=document.getElementById("empty-add-money-btn");h&&(h.onclick=()=>pr("INCOME",t)),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(f=>{f.onclick=g=>{g.stopPropagation();const y=f.dataset.action,b=f.dataset.txId,v=St.transactions.find(E=>E.id===b);v&&(y==="edit"?v.type==="TRANSFER"?hb(v,t):db(v,t):y==="delete"&&fb(v,t))}})}function pr(n="INCOME",t){const e=n==="INCOME",i=e?bc:ks,s=St.accounts,r=li(),o=Ov();if(!Qv()){q.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const a=`
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
  `;he({title:e?"💰 Add Money":"💸 Add Expense",content:a,onOpen:c=>{const l=c.querySelector("#tx-modal-form"),d=c.querySelector("#tx-amount"),h=c.querySelector("#tx-account"),f=c.querySelector("#tx-insufficient-warning"),g=c.querySelector("#tx-insufficient-text"),y=()=>{var O,L;if(e)return;const b=h.value,v=Number(d.value)||0;if(!b||v<=0){f.style.display="none";return}const E=s.find(I=>I.id===b),{balances:P}=ti(s,St.transactions),C=P[b]||0,D=(L=(O=St.profile)==null?void 0:O.settings)==null?void 0:L.allowNegativeBalance;v>C&&!D?(g.textContent=`⚠️ Insufficient Balance! Available in ${(E==null?void 0:E.name)||"account"}: ${H(C)}`,f.style.display="flex"):f.style.display="none"};d.oninput=y,h.onchange=y,l.onsubmit=async b=>{var A,S;b.preventDefault();const v=d.value,E=h.value,P=c.querySelector("#tx-date").value,C=c.querySelector("#tx-reason").value,D=c.querySelector("#tx-category").value,O=c.querySelector("#tx-notes").value;c.querySelector("#tx-amount-error").textContent="",c.querySelector("#tx-account-error").textContent="",c.querySelector("#tx-reason-error").textContent="",c.querySelector("#tx-category-error").textContent="";const L=Pd(P);if(L){q.error(L);return}let I=!0;const _=ob({amount:v,date:P,category:D},!0);if(_.isValid||(_.errors.amount&&(c.querySelector("#tx-amount-error").textContent=_.errors.amount),_.errors.category&&(c.querySelector("#tx-category-error").textContent=_.errors.category),I=!1),!e&&!C.trim()&&(c.querySelector("#tx-reason-error").textContent="Reason is required for expenses.",I=!1),E||(c.querySelector("#tx-account-error").textContent="Please select an account.",I=!1),!I)return;if(!e){const k=s.find(dt=>dt.id===E),{balances:x}=ti(s,St.transactions),rt=x[E]||0,tt=(S=(A=St.profile)==null?void 0:A.settings)==null?void 0:S.allowNegativeBalance;if(Number(v)>rt&&!tt){g.textContent=`⚠️ Insufficient Balance! Available in ${k==null?void 0:k.name}: ${H(rt)}`,f.style.display="flex",q.warning(`⚠️ You only have ${H(rt)} available in ${k==null?void 0:k.name}.`);return}}const T=c.querySelector("#btn-save-tx");T.disabled=!0,T.innerHTML='<span class="spinner"></span> Saving...';try{const k=St.user.uid,x={type:n,amount:Number(v),date:P,reason:C,category:D,notes:O};e?x.destinationAccountId=E:x.sourceAccountId=E,await Kv(k,x),Vt();const rt=s.find(tt=>tt.id===E);q.success(e?`💰 ${H(v)} added to ${(rt==null?void 0:rt.name)||"account"}!`:`💸 ${H(v)} spent from ${(rt==null?void 0:rt.name)||"account"}.`),t&&t()}catch(k){console.error("Error saving transaction:",k),q.error("Unable to save transaction."),T.disabled=!1,T.innerHTML=e?"💰 Add Money":"💸 Save Expense"}}}})}function ub(n){const t=St.accounts,e=li(),i=Ov();if(!Qv()){q.warning("📡 You're offline — Reconnect to save new transactions securely.");return}const s=`
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
  `;he({title:"🔄 Transfer Money Between Accounts",content:s,onOpen:r=>{const o=r.querySelector("#transfer-modal-form"),a=r.querySelector("#tr-amount"),c=r.querySelector("#tr-from"),l=r.querySelector("#tr-insufficient-warning"),d=r.querySelector("#tr-insufficient-text"),h=()=>{const f=c.value,g=Number(a.value)||0;if(!f||g<=0){l.style.display="none";return}const{balances:y}=ti(t,St.transactions),b=y[f]||0,v=t.find(E=>E.id===f);g>b?(d.textContent=`⚠️ Insufficient Balance! Available in ${v==null?void 0:v.name}: ${H(b)}`,l.style.display="flex"):l.style.display="none"};a.oninput=h,c.onchange=h,o.onsubmit=async f=>{f.preventDefault();const g=a.value,y=c.value,b=r.querySelector("#tr-to").value,v=r.querySelector("#tr-date").value,E=r.querySelector("#tr-reason").value,P=r.querySelector("#tr-notes").value,C=Pd(v);if(C){q.error(C);return}r.querySelector("#tr-amount-error").textContent="",r.querySelector("#tr-from-error").textContent="",r.querySelector("#tr-to-error").textContent="",r.querySelector("#tr-reason-error").textContent="";let D=!0;const O=io(g);if(O&&(r.querySelector("#tr-amount-error").textContent=O,D=!1),y||(r.querySelector("#tr-from-error").textContent="Select source account.",D=!1),b||(r.querySelector("#tr-to-error").textContent="Select destination account.",D=!1),y&&b&&y===b&&(r.querySelector("#tr-to-error").textContent="From and To accounts cannot be the same!",D=!1),!D)return;const{balances:L}=ti(t,St.transactions),I=L[y]||0,_=t.find(S=>S.id===y),T=t.find(S=>S.id===b);if(Number(g)>I){d.textContent=`⚠️ Insufficient Balance! Available in ${_==null?void 0:_.name}: ${H(I)}`,l.style.display="flex",q.warning(`⚠️ You only have ${H(I)} available in ${_==null?void 0:_.name}.`);return}const A=r.querySelector("#btn-save-transfer");A.disabled=!0,A.innerHTML='<span class="spinner"></span> Transferring...';try{const S=St.user.uid;await Kv(S,{type:"TRANSFER",amount:Number(g),date:v,reason:E,category:"Transfer",sourceAccountId:y,destinationAccountId:b,notes:P}),Vt(),q.success(`🔄 Transferred ${H(g)} from ${_==null?void 0:_.name} to ${T==null?void 0:T.name}!`),n&&n()}catch(S){console.error("Error saving transfer:",S),q.error("Unable to complete transfer."),A.disabled=!1,A.innerHTML="🔄 Transfer Money"}}}})}function db(n,t){const e=n.type==="INCOME",i=e?bc:ks,s=St.accounts,r=`
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
          📅 ${ci(n.date)}
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
  `;he({title:"✏️ Edit Transaction",content:r,onOpen:o=>{o.querySelector("#edit-tx-form").onsubmit=async a=>{a.preventDefault();const c=o.querySelector("#edit-tx-amount").value,l=o.querySelector("#edit-tx-account").value,d=o.querySelector("#edit-tx-date").value,h=o.querySelector("#edit-tx-reason").value,f=o.querySelector("#edit-tx-category").value,g=o.querySelector("#edit-tx-notes").value,y=o.querySelector("#edit-tx-reason-error");if(y&&(y.textContent=""),!ob({amount:c,date:d,category:f},!1).isValid)return;if(!e&&!h.trim()){y&&(y.textContent="Reason is required for expenses.");return}const v=o.querySelector("#btn-update-tx");v.disabled=!0,v.innerHTML='<span class="spinner"></span> Updating...';try{const E=St.user.uid,P={amount:Number(c),date:d,reason:h,category:f,notes:g};e?P.destinationAccountId=l:P.sourceAccountId=l,await wd(E,n.id,P),Vt(),q.success("✅ Transaction updated!"),t&&t()}catch{q.error("Unable to update transaction."),v.disabled=!1,v.innerHTML="✅ Update Transaction"}}}})}function hb(n,t){const e=St.accounts,i=`
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
          📅 ${ci(n.date)}
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
  `;he({title:"✏️ Edit Transfer",content:i,onOpen:s=>{s.querySelector("#edit-tr-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-tr-amount").value,a=s.querySelector("#edit-tr-from").value,c=s.querySelector("#edit-tr-to").value,l=s.querySelector("#edit-tr-date").value,d=s.querySelector("#edit-tr-reason").value,h=s.querySelector("#edit-tr-notes").value;if(a===c){q.error("From and To accounts cannot be the same!");return}const f=s.querySelector("#btn-update-tr");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Updating...';try{const g=St.user.uid;await wd(g,n.id,{amount:Number(o),date:l,reason:d,sourceAccountId:a,destinationAccountId:c,notes:h}),Vt(),q.success("✅ Transfer updated!"),t&&t()}catch{q.error("Unable to update transfer."),f.disabled=!1,f.innerHTML="✅ Update Transfer"}}}})}async function fb(n,t){const e=n.type==="TRANSFER";if(await Vi({icon:"🗑️",title:e?"Delete Transfer":"Delete Transaction",message:e?"Are you sure you want to delete this transfer? Both source and destination account balances will be restored.":"Are you sure you want to delete this transaction? Your account balances will automatically adjust.",confirmText:"Delete",danger:!0}))try{const s=St.user.uid;await VS(s,n.id),q.success("🗑️ Transaction deleted!"),t&&t()}catch{q.error("Unable to delete transaction.")}}let te={user:null,profile:null,accounts:[],transactions:[],selectedAccountId:null};function NP(n){te={...te,...n};const{accounts:t,transactions:e,selectedAccountId:i}=te;if(i){const o=t.find(a=>a.id===i);if(o)return LP(o,e)}const{balances:s,totalMoney:r}=ti(t,e);return`
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
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: var(--primary); margin-top: 4px;">${H(r)}</div>
      </div>

      <!-- Account Cards Grid -->
      <div class="accounts-page-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
        ${t.map(o=>{const a=s[o.id]||0;return`
            <div class="card hover-lift account-card-item" style="cursor: pointer; position: relative; touch-action: manipulation; -webkit-tap-highlight-color: rgba(108, 99, 255, 0.15); user-select: none;" data-account-id="${o.id}">
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
                ${H(a)}
              </div>
              <div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-top: 4px;">
                Initial: ${H(o.initialBalance||0)}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function LP(n,t){const e=is(n,t,te.accounts);return`
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
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">
          Current Balance
        </div>
        <div style="font-size: var(--fs-3xl); font-weight: 900; color: ${e.balance<0?"var(--expense)":"var(--text-primary)"}; margin-top: 4px; letter-spacing: -0.02em;">
          ${H(e.balance)}
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
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--income);">${H(e.totalAdded)}</div>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Money Spent</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--expense);">${H(e.totalSpent)}</div>
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
            ${e.history.map(i=>VP(i)).join("")}
          </div>
        `:`
          <div class="card card-flat" style="padding: 36px 16px; text-align: center; color: var(--text-tertiary);">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📜</div>
            <div style="font-size: var(--fs-sm); font-weight: 500;">No transaction history for this account yet.</div>
          </div>
        `}
      </div>
    </div>
  `}function VP(n,t){let e=n.reason||n.category||n.typeLabel;n.type==="TRANSFER"&&(n.displayType==="TRANSFER_IN"?e=n.reason?n.reason:n.transferAccountName?`Transfer from ${n.transferAccountName}`:"Transfer Received":n.displayType==="TRANSFER_OUT"&&(e=n.reason?n.reason:n.transferAccountName?`Transfer to ${n.transferAccountName}`:"Transferred"));const i=ci(n.date),s=n.createdAt?$a(n.createdAt):"";return`
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
          <span style="font-weight: 600; color: var(--text-primary);">${H(n.previousBalance)}</span>
        </div>

        <!-- Transaction Action (Expense / Money Added / Transferred) -->
        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); margin-bottom: 8px;">
          <span>${n.actionLabel}</span>
          <span style="font-weight: 700; color: ${n.amountColor};">${n.amountSign}${H(n.amount)}</span>
        </div>

        <!-- Divider Line -->
        <div style="border-top: 1px dashed var(--border-color); margin: 6px 0 8px 0;"></div>

        <!-- Balance After (Remaining Balance / Current Balance) -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-weight: 700;">
          <span style="color: var(--text-primary);">${n.resultLabel}</span>
          <span style="font-size: 0.9375rem; color: ${n.balanceAfter<0?"var(--expense)":"var(--income)"}; font-weight: 800;">${H(n.balanceAfter)}</span>
        </div>

      </div>

      <!-- Card Footer: Type & Timestamp -->
      <div style="font-size: 0.75rem; color: var(--text-tertiary); display: flex; align-items: center; gap: 6px;">
        <span>${n.typeLabel}</span>
        <span>•</span>
        <span>${i}${s?` at ${s}`:""}</span>
      </div>

    </div>
  `}function FP(n){const t=document.getElementById("btn-back-to-accounts");if(t){t.onclick=()=>{var a;const o=(a=window.appState)==null?void 0:a.accountOriginPage;te.selectedAccountId=null,window.appState&&(window.appState.selectedAccountId=null,window.appState.accountOriginPage=null),o==="dashboard"&&(window.appState&&(window.appState.activePage="dashboard"),window.location.hash="#/dashboard"),n&&n()};const s=document.getElementById("btn-edit-account");s&&(s.onclick=()=>{const o=te.accounts.find(c=>c.id===te.selectedAccountId);if(!o)return;const a=is(o,te.transactions,te.accounts);$P(o,a.balance,n)});const r=document.getElementById("btn-delete-account");r&&(r.onclick=async()=>{const o=te.accounts.find(c=>c.id===te.selectedAccountId);if(!o)return;if(await Vi({icon:"🗑️",title:"Delete this account?",message:"All account-related transaction history may also be affected. This action cannot be undone.",cancelText:"Cancel",confirmText:"Delete",danger:!0}))try{await NS(te.user.uid,o.id),te.selectedAccountId=null,window.appState&&(window.appState.selectedAccountId=null,window.appState.accountOriginPage=null),q.success(`Account "${o.name}" deleted successfully.`),n&&n()}catch(c){console.error("Error deleting account:",c),q.error("Failed to delete account. Please try again.")}});return}const e=document.getElementById("btn-add-account-modal");e&&(e.onclick=()=>BP(n));const i=document.querySelector(".accounts-page-grid")||document.querySelector(".page");i&&(i.onclick=s=>{const r=s.target.closest("[data-account-id]");if(!r||s.target.closest("button, a, input, select"))return;const o=r.dataset.accountId;o&&(te.selectedAccountId=o,window.appState&&(window.appState.selectedAccountId=o),n&&n())})}function BP(n){he({title:"🏦 Add New Account",content:`
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
  `,onOpen:e=>{e.querySelector("#add-account-form").onsubmit=async i=>{i.preventDefault();const s=e.querySelector("#acc-name").value,r=e.querySelector("#acc-type").value,o=e.querySelector("#acc-initial").value,a=e.querySelector("#acc-last4").value,c=wc(s),l=io(o);if(c){e.querySelector("#acc-name-error").textContent=c;return}if(l){e.querySelector("#acc-initial-error").textContent=l;return}const d=e.querySelector("#btn-save-account");d.disabled=!0,d.innerHTML='<span class="spinner"></span> Creating...';try{await Hv(te.user.uid,{name:s,type:r,initialBalance:Number(o),last4Digits:a}),Vt(),q.success(`🏦 ${s} account created!`),n&&n()}catch{q.error("Unable to create account."),d.disabled=!1,d.innerHTML="Create Account"}}}})}function $P(n,t,e){const i=`
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
          <span>${H(t)}</span>
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
  `;he({title:"✏️ Edit Account",content:i,onOpen:s=>{s.querySelector("#edit-account-form").onsubmit=async r=>{r.preventDefault();const o=s.querySelector("#edit-acc-name").value,a=s.querySelector("#edit-acc-type").value,c=s.querySelector("#edit-acc-icon").value,l=s.querySelector("#edit-acc-notes").value,d=s.querySelector("#edit-acc-last4").value,h=wc(o);if(h){s.querySelector("#edit-acc-name-error").textContent=h;return}const f=s.querySelector("#btn-save-edit-account");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{await OS(te.user.uid,n.id,{name:o,type:a,icon:c,notes:l,last4Digits:d,bankName:n.bankName||"",initialBalance:n.initialBalance}),Vt(),q.success("Account details updated!"),e&&e()}catch(g){console.error("Error updating account:",g),q.error("Unable to update account."),f.disabled=!1,f.innerHTML="Save Changes"}}}})}let we={user:null,profile:null,accounts:[],transactions:[]},J={searchQuery:"",typeFilter:"ALL",accountFilter:"ALL",dateFilter:"ALL",customDate:"",categoryFilter:"ALL"};function pb(n){we={...we,...n};const t=mb(),e=[...ks.map(i=>i.value),...bc.map(i=>i.value)];return`
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
          <input type="text" id="tx-search-input" class="form-input" placeholder="Search by reason, category, account, or notes..." value="${J.searchQuery}" />
          <button class="search-clear ${J.searchQuery?"visible":""}" id="tx-search-clear">✕</button>
        </div>

        <!-- Filter Chips: Type -->
        <div class="chips-scroll" style="margin-bottom: var(--space-3);">
          <button class="chip ${J.typeFilter==="ALL"?"active":""}" data-filter-type="ALL">All (${we.transactions.length})</button>
          <button class="chip chip-income ${J.typeFilter==="INCOME"?"active":""}" data-filter-type="INCOME">🟢 Money Added</button>
          <button class="chip chip-expense ${J.typeFilter==="EXPENSE"?"active":""}" data-filter-type="EXPENSE">🔴 Expenses</button>
          <button class="chip ${J.typeFilter==="TRANSFER"?"active":""}" data-filter-type="TRANSFER" style="${J.typeFilter==="TRANSFER"?"background: var(--primary); color: white;":""}">🔄 Transfers</button>
        </div>

        <!-- Dropdowns: Account, Category, & Date Filters -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <select id="tx-account-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Accounts</option>
            ${we.accounts.map(i=>`
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
      <div class="card card-flat" style="padding: 0; overflow: hidden; border-radius: var(--radius-xl);" id="tx-list-container">
        ${gb(t)}
      </div>
    </div>
  `}function gb(n){return we.transactions.length===0?lb():n.length===0?DP():fr(n,{accounts:we.accounts})}function mb(){let n=[...we.transactions];if(J.searchQuery){const e=J.searchQuery.toLowerCase();n=n.filter(i=>{const s=we.accounts.find(o=>o.id===i.sourceAccountId),r=we.accounts.find(o=>o.id===i.destinationAccountId);return i.reason&&i.reason.toLowerCase().includes(e)||i.category&&i.category.toLowerCase().includes(e)||i.notes&&i.notes.toLowerCase().includes(e)||s&&s.name.toLowerCase().includes(e)||r&&r.name.toLowerCase().includes(e)})}if(J.typeFilter!=="ALL"&&(n=n.filter(e=>e.type===J.typeFilter)),J.accountFilter!=="ALL"){const e=J.accountFilter;n=n.filter(i=>i.sourceAccountId===e||i.destinationAccountId===e)}const t=li();if(J.dateFilter==="TODAY")n=n.filter(e=>e.date===t);else if(J.dateFilter==="WEEK"){const{start:e,end:i}=Lv(t);n=n.filter(s=>s.date>=e&&s.date<=i)}else if(J.dateFilter==="MONTH"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;n=n.filter(i=>i.date&&i.date.startsWith(e))}else J.dateFilter==="CUSTOM"&&J.customDate&&(n=n.filter(e=>e.date===J.customDate));return J.categoryFilter!=="ALL"&&(n=n.filter(e=>e.category===J.categoryFilter)),n}function yb(n){const t=()=>{const a=document.getElementById("tx-list-container");if(a){const c=mb();a.innerHTML=gb(c),Pp(n)}},e=document.getElementById("tx-search-input"),i=document.getElementById("tx-search-clear");e&&(e.oninput=a=>{J.searchQuery=a.target.value,i&&i.classList.toggle("visible",!!J.searchQuery),t()}),i&&(i.onclick=()=>{J.searchQuery="",e&&(e.value=""),i.classList.remove("visible"),t()}),document.querySelectorAll("[data-filter-type]").forEach(a=>{a.onclick=()=>{document.querySelectorAll("[data-filter-type]").forEach(c=>c.classList.remove("active")),a.classList.add("active"),J.typeFilter=a.dataset.filterType,t()}});const s=document.getElementById("tx-account-filter");s&&(s.onchange=a=>{J.accountFilter=a.target.value,t()}),document.querySelectorAll("[data-filter-date]").forEach(a=>{a.onclick=()=>{if(document.querySelectorAll("[data-filter-date]").forEach(c=>c.classList.remove("active")),a.classList.add("active"),J.dateFilter=a.dataset.filterDate,J.dateFilter==="CUSTOM"){const c=document.querySelector(".page");c&&(c.outerHTML=pb(we),yb(n))}else t()}});const r=document.getElementById("tx-custom-date");r&&(r.onchange=a=>{J.customDate=a.target.value,t()});const o=document.getElementById("tx-category-filter");o&&(o.onchange=a=>{J.categoryFilter=a.target.value,t()}),Pp(n)}function Pp(n){const t=document.getElementById("tx-list-container");t&&t.querySelectorAll(".tl-row, .transaction-item").forEach(e=>{e.onclick=()=>{const i=e.dataset.txId,s=we.transactions.find(r=>r.id===i);s&&UP(s,n)}})}function UP(n,t){const e=n.type||"EXPENSE",i=we.accounts||[],s=e==="INCOME"?"Income":e==="EXPENSE"?"Expense":"Transfer",r=f=>i.map(g=>`
      <option value="${g.id}" ${f===g.id?"selected":""}>
        ${g.icon||"🏦"} ${Ti(g.name)}
      </option>
    `).join(""),o=(f,g)=>f==="TRANSFER"?'<option value="Transfer" selected>Transfer</option>':(f==="INCOME"?bc:ks).map(b=>`
      <option value="${b.value}" ${g===b.value?"selected":""}>
        ${Ti(b.label)}
      </option>
    `).join(""),a=f=>{var g;return f==="INCOME"?`
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
              ${r(n.destinationAccountId||(i[1]?i[1].id:(g=i[0])==null?void 0:g.id))}
            </select>
          </div>
        </div>
      `},c=n.type==="TRANSFER"?"↔":n.type==="INCOME"?"💰":_c(n.category),l=Dv(n),d=ci(n.date),h=`
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
      <div style="width: 44px; height: 44px; border-radius: var(--radius-lg); background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center; font-size: 22px;">
        ${c}
      </div>
      <div>
        <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em;">Transaction</div>
        <div style="font-size: 1.125rem; font-weight: 800; color: var(--text-primary);">${Ti(n.reason||n.category||"Transaction")}</div>
      </div>
    </div>

    <form id="details-tx-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="details-tx-reason">Reason (Optional)</label>
        <input type="text" id="details-tx-reason" class="form-input" value="${Ti(n.reason||"")}" placeholder="Reason (Optional)" />
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
          <span>${H(n.amount)}</span>
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
  `;he({title:"Transaction Details",content:h,onOpen:f=>{const g=f.querySelector("#details-tx-category"),y=f.querySelector("#details-tx-cancel"),b=f.querySelector("#details-tx-form");y.onclick=()=>Vt(),b.onsubmit=async v=>{var D;v.preventDefault();const E=f.querySelector("#details-tx-reason").value.trim(),P=g?g.value:n.category,C=f.querySelector("#details-tx-save");C.disabled=!0,C.innerHTML='<span class="spinner"></span> Saving...';try{const O=(D=we.user)==null?void 0:D.uid,L={amount:n.amount,date:n.date,reason:E,type:e,category:P,notes:n.notes||""};if(e==="INCOME"){const I=f.querySelector("#details-tx-account");L.destinationAccountId=I?I.value:n.destinationAccountId}else if(e==="EXPENSE"){const I=f.querySelector("#details-tx-account");L.sourceAccountId=I?I.value:n.sourceAccountId}else if(e==="TRANSFER"){const I=f.querySelector("#details-tx-from-account"),_=f.querySelector("#details-tx-to-account");L.sourceAccountId=I?I.value:n.sourceAccountId,L.destinationAccountId=_?_.value:n.destinationAccountId}await wd(O,n.id,L),Object.assign(n,L),Vt(),q.success("✅ Transaction updated successfully!"),t&&t()}catch(O){console.error(O),q.error("Unable to save transaction details."),C.disabled=!1,C.innerHTML="Save Changes"}}}})}let Te={user:null,profile:null,accounts:[],transactions:[]},cn="DAY",tr=li(),eu=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`;function oa(n){Te={...Te,...n};let t="",e="";if(cn==="DAY"){const i=Vv(Te.transactions,tr);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Added</div>
          <div class="daily-summary-value income">${H(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Spent</div>
          <div class="daily-summary-value expense">${H(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${H(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Change</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${H(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?fr(i.transactions,{accounts:Te.accounts}):dl()}else if(cn==="WEEK"){const i=CS(Te.transactions,tr);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Income</div>
          <div class="daily-summary-value income">${H(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Expenses</div>
          <div class="daily-summary-value expense">${H(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${H(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${H(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?fr(i.transactions,{accounts:Te.accounts}):dl()}else if(cn==="MONTH"){const i=Fv(Te.transactions,eu);t=`
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Income</div>
          <div class="daily-summary-value income">${H(i.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Expenses</div>
          <div class="daily-summary-value expense">${H(i.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${H(i.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${i.net>=0?"net-positive":"net-negative"}">
            ${i.net>=0?"+":""}${H(i.net)}
          </div>
        </div>
      </div>
    `,e=i.transactions.length>0?fr(i.transactions,{accounts:Te.accounts}):dl()}return`
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
            <input type="month" id="mc-month-picker" class="form-input" style="width: auto;" value="${eu}" />
          </div>
        `:`
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <span style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">
                ${cn==="DAY"?"Selected Date":"Week Containing"}
              </span>
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${bS(tr)}</div>
            </div>
            <input type="date" id="mc-date-picker" class="form-input" style="width: auto;" value="${tr}" />
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
  `}function aa(n){document.querySelectorAll(".tab[data-view]").forEach(i=>{i.onclick=()=>{cn=i.dataset.view;const s=document.querySelector(".page");s&&(s.outerHTML=oa(Te),aa(n))}});const t=document.getElementById("mc-date-picker");t&&(t.onchange=i=>{tr=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=oa(Te),aa(n))});const e=document.getElementById("mc-month-picker");e&&(e.onchange=i=>{eu=i.target.value;const s=document.querySelector(".page");s&&(s.outerHTML=oa(Te),aa(n))}),document.querySelectorAll(".transaction-action-btn[data-action]").forEach(i=>{i.onclick=s=>{s.stopPropagation();const r=i.dataset.action,o=i.dataset.txId,a=Te.transactions.find(c=>c.id===o);a&&(r==="edit"?a.type==="TRANSFER"?hb(a,n):db(a,n):r==="delete"&&fb(a,n))}})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function so(n){return n+.5|0}const Ln=(n,t,e)=>Math.max(Math.min(n,e),t);function er(n){return Ln(so(n*2.55),0,255)}function Wn(n){return Ln(so(n*255),0,255)}function dn(n){return Ln(so(n/2.55)/100,0,1)}function kp(n){return Ln(so(n*100),0,100)}const Ee={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},nu=[..."0123456789ABCDEF"],zP=n=>nu[n&15],jP=n=>nu[(n&240)>>4]+nu[n&15],Oo=n=>(n&240)>>4===(n&15),HP=n=>Oo(n.r)&&Oo(n.g)&&Oo(n.b)&&Oo(n.a);function qP(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Ee[n[1]]*17,g:255&Ee[n[2]]*17,b:255&Ee[n[3]]*17,a:t===5?Ee[n[4]]*17:255}:(t===7||t===9)&&(e={r:Ee[n[1]]<<4|Ee[n[2]],g:Ee[n[3]]<<4|Ee[n[4]],b:Ee[n[5]]<<4|Ee[n[6]],a:t===9?Ee[n[7]]<<4|Ee[n[8]]:255})),e}const WP=(n,t)=>n<255?t(n):"";function GP(n){var t=HP(n)?zP:jP;return n?"#"+t(n.r)+t(n.g)+t(n.b)+WP(n.a,t):void 0}const KP=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function vb(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function YP(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function XP(n,t,e){const i=vb(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function QP(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function kd(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=QP(e,i,s,d,r),c=c*60+.5),[c|0,l||0,a]}function Cd(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(Wn)}function Rd(n,t,e){return Cd(vb,n,t,e)}function JP(n,t,e){return Cd(XP,n,t,e)}function ZP(n,t,e){return Cd(YP,n,t,e)}function bb(n){return(n%360+360)%360}function tk(n){const t=KP.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?er(+t[5]):Wn(+t[5]));const s=bb(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=JP(s,r,o):t[1]==="hsv"?i=ZP(s,r,o):i=Rd(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function ek(n,t){var e=kd(n);e[0]=bb(e[0]+t),e=Rd(e),n.r=e[0],n.g=e[1],n.b=e[2]}function nk(n){if(!n)return;const t=kd(n),e=t[0],i=kp(t[1]),s=kp(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${dn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const Cp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Rp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function ik(){const n={},t=Object.keys(Rp),e=Object.keys(Cp);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,Cp[r]);r=parseInt(Rp[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let No;function sk(n){No||(No=ik(),No.transparent=[0,0,0,0]);const t=No[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const rk=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ok(n){const t=rk.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?er(o):Ln(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?er(i):Ln(i,0,255)),s=255&(t[4]?er(s):Ln(s,0,255)),r=255&(t[6]?er(r):Ln(r,0,255)),{r:i,g:s,b:r,a:e}}}function ak(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${dn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const hl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Yi=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function ck(n,t,e){const i=Yi(dn(n.r)),s=Yi(dn(n.g)),r=Yi(dn(n.b));return{r:Wn(hl(i+e*(Yi(dn(t.r))-i))),g:Wn(hl(s+e*(Yi(dn(t.g))-s))),b:Wn(hl(r+e*(Yi(dn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Lo(n,t,e){if(n){let i=kd(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=Rd(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function _b(n,t){return n&&Object.assign(t||{},n)}function Mp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Wn(n[3]))):(t=_b(n,{r:0,g:0,b:0,a:1}),t.a=Wn(t.a)),t}function lk(n){return n.charAt(0)==="r"?ok(n):tk(n)}class Dr{constructor(t){if(t instanceof Dr)return t;const e=typeof t;let i;e==="object"?i=Mp(t):e==="string"&&(i=qP(t)||sk(t)||lk(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=_b(this._rgb);return t&&(t.a=dn(t.a)),t}set rgb(t){this._rgb=Mp(t)}rgbString(){return this._valid?ak(this._rgb):void 0}hexString(){return this._valid?GP(this._rgb):void 0}hslString(){return this._valid?nk(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=i.a-s.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,i.r=255&l*i.r+r*s.r+.5,i.g=255&l*i.g+r*s.g+.5,i.b=255&l*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=ck(this._rgb,t._rgb,e)),this}clone(){return new Dr(this.rgb)}alpha(t){return this._rgb.a=Wn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=so(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Lo(this._rgb,2,t),this}darken(t){return Lo(this._rgb,2,-t),this}saturate(t){return Lo(this._rgb,1,t),this}desaturate(t){return Lo(this._rgb,1,-t),this}rotate(t){return ek(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function an(){}const uk=(()=>{let n=0;return()=>n++})();function et(n){return n==null}function wt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function st(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Ct(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function ve(n,t){return Ct(n)?n:t}function X(n,t){return typeof n>"u"?t:n}const dk=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,wb=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function pt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function ut(n,t,e,i){let s,r,o;if(wt(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(st(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function za(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function ja(n){if(wt(n))return n.map(ja);if(st(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=ja(n[e[s]]);return t}return n}function Eb(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function hk(n,t,e,i){if(!Eb(n))return;const s=t[n],r=e[n];st(s)&&st(r)?Or(s,r,i):t[n]=ja(r)}function Or(n,t,e){const i=wt(t)?t:[t],s=i.length;if(!st(n))return n;e=e||{};const r=e.merger||hk;let o;for(let a=0;a<s;++a){if(o=i[a],!st(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function gr(n,t){return Or(n,t,{merger:fk})}function fk(n,t,e){if(!Eb(n))return;const i=t[n],s=e[n];st(i)&&st(s)?gr(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=ja(s))}const Dp={"":n=>n,x:n=>n.x,y:n=>n.y};function pk(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function gk(n){const t=pk(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function ei(n,t){return(Dp[t]||(Dp[t]=gk(t)))(n)}function Md(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Nr=n=>typeof n<"u",ni=n=>typeof n=="function",Op=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function mk(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const ct=Math.PI,bt=2*ct,yk=bt+ct,Ha=Number.POSITIVE_INFINITY,vk=ct/180,Mt=ct/2,gi=ct/4,Np=ct*2/3,Vn=Math.log10,Qe=Math.sign;function mr(n,t,e){return Math.abs(n-t)<e}function Lp(n){const t=Math.round(n);n=mr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Vn(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function bk(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function _k(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function bs(n){return!_k(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function wk(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Tb(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function De(n){return n*(ct/180)}function Dd(n){return n*(180/ct)}function Vp(n){if(!Ct(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Ib(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*ct&&(r+=bt),{angle:r,distance:s}}function iu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function Ek(n,t){return(n-t+yk)%bt-ct}function ne(n){return(n%bt+bt)%bt}function Lr(n,t,e,i){const s=ne(n),r=ne(t),o=ne(e),a=ne(r-s),c=ne(o-s),l=ne(s-r),d=ne(s-o);return s===r||s===o||i&&r===o||a>c&&l<d}function Ut(n,t,e){return Math.max(t,Math.min(e,n))}function Tk(n){return Ut(n,-32768,32767)}function pn(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function Od(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const gn=(n,t,e,i)=>Od(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),Ik=(n,t,e)=>Od(n,e,i=>n[i][t]>=e);function Ak(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const Ab=["push","pop","shift","splice","unshift"];function xk(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Ab.forEach(e=>{const i="_onData"+Md(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Fp(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(Ab.forEach(r=>{delete n[r]}),delete n._chartjs)}function xb(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const Sb=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function Pb(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,Sb.call(window,()=>{i=!1,n.apply(t,e)}))}}function Sk(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const Nd=n=>n==="start"?"left":n==="end"?"right":"center",Zt=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,Pk=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function kb(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:g,maxDefined:y}=o.getUserBounds();if(g){if(s=Math.min(gn(c,d,h).lo,e?i:gn(t,d,o.getPixelForValue(h)).lo),l){const b=c.slice(0,s+1).reverse().findIndex(v=>!et(v[a.axis]));s-=Math.max(0,b)}s=Ut(s,0,i-1)}if(y){let b=Math.max(gn(c,o.axis,f,!0).hi+1,e?0:gn(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const v=c.slice(b-1).findIndex(E=>!et(E[a.axis]));b+=Math.max(0,v)}r=Ut(b,s,i)-s}else r=i-s}return{start:s,count:r}}function Cb(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const Vo=n=>n===0||n===1,Bp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*bt/e)),$p=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*bt/e)+1,yr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Mt)+1,easeOutSine:n=>Math.sin(n*Mt),easeInOutSine:n=>-.5*(Math.cos(ct*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Vo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Vo(n)?n:Bp(n,.075,.3),easeOutElastic:n=>Vo(n)?n:$p(n,.075,.3),easeInOutElastic(n){return Vo(n)?n:n<.5?.5*Bp(n*2,.1125,.45):.5+.5*$p(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-yr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?yr.easeInBounce(n*2)*.5:yr.easeOutBounce(n*2-1)*.5+.5};function Ld(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Up(n){return Ld(n)?n:new Dr(n)}function fl(n){return Ld(n)?n:new Dr(n).saturate(.5).darken(.1).hexString()}const kk=["x","y","borderWidth","radius","tension"],Ck=["color","borderColor","backgroundColor"];function Rk(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:Ck},numbers:{type:"number",properties:kk}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Mk(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const zp=new Map;function Dk(n,t){t=t||{};const e=n+JSON.stringify(t);let i=zp.get(e);return i||(i=new Intl.NumberFormat(n,t),zp.set(e,i)),i}function ro(n,t,e){return Dk(t,e).format(n)}const Rb={values(n){return wt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),r=Ok(n,e)}const o=Vn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),ro(n,i,c)},logarithmic(n,t,e){if(n===0)return"0";const i=e[t].significand||n/Math.pow(10,Math.floor(Vn(n)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?Rb.numeric.call(this,n,t,e):""}};function Ok(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Ec={formatters:Rb};function Nk(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ec.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Fi=Object.create(null),su=Object.create(null);function vr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function pl(n,t,e){return typeof t=="string"?Or(vr(n,t),e):Or(vr(n,""),t)}class Lk{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>fl(s.backgroundColor),this.hoverBorderColor=(i,s)=>fl(s.borderColor),this.hoverColor=(i,s)=>fl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return pl(this,t,e)}get(t){return vr(this,t)}describe(t,e){return pl(su,t,e)}override(t,e){return pl(Fi,t,e)}route(t,e,i,s){const r=vr(this,t),o=vr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[s];return st(c)?Object.assign({},l,c):X(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Et=new Lk({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Rk,Mk,Nk]);function Vk(n){return!n||et(n.size)||et(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function qa(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function Fk(n,t,e,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(s=i.data={},r=i.garbageCollect=[],i.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!wt(h))o=qa(n,s,r,o,h);else if(wt(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!wt(f)&&(o=qa(n,s,r,o,f));n.restore();const g=r.length/2;if(g>e.length){for(c=0;c<g;c++)delete s[r[c]];r.splice(0,g)}return o}function mi(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function jp(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function ru(n,t,e,i){Mb(n,t,e,i,null)}function Mb(n,t,e,i,s){let r,o,a,c,l,d,h,f;const g=t.pointStyle,y=t.rotation,b=t.radius;let v=(y||0)*vk;if(g&&typeof g=="object"&&(r=g.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(v),n.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),n.restore();return}if(!(isNaN(b)||b<=0)){switch(n.beginPath(),g){default:s?n.ellipse(e,i,s/2,b,0,0,bt):n.arc(e,i,b,0,bt),n.closePath();break;case"triangle":d=s?s/2:b,n.moveTo(e+Math.sin(v)*d,i-Math.cos(v)*b),v+=Np,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*b),v+=Np,n.lineTo(e+Math.sin(v)*d,i-Math.cos(v)*b),n.closePath();break;case"rectRounded":l=b*.516,c=b-l,o=Math.cos(v+gi)*c,h=Math.cos(v+gi)*(s?s/2-l:c),a=Math.sin(v+gi)*c,f=Math.sin(v+gi)*(s?s/2-l:c),n.arc(e-h,i-a,l,v-ct,v-Mt),n.arc(e+f,i-o,l,v-Mt,v),n.arc(e+h,i+a,l,v,v+Mt),n.arc(e-f,i+o,l,v+Mt,v+ct),n.closePath();break;case"rect":if(!y){c=Math.SQRT1_2*b,d=s?s/2:c,n.rect(e-d,i-c,2*d,2*c);break}v+=gi;case"rectRot":h=Math.cos(v)*(s?s/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(s?s/2:b),n.moveTo(e-h,i-a),n.lineTo(e+f,i-o),n.lineTo(e+h,i+a),n.lineTo(e-f,i+o),n.closePath();break;case"crossRot":v+=gi;case"cross":h=Math.cos(v)*(s?s/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(s?s/2:b),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"star":h=Math.cos(v)*(s?s/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(s?s/2:b),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o),v+=gi,h=Math.cos(v)*(s?s/2:b),o=Math.cos(v)*b,a=Math.sin(v)*b,f=Math.sin(v)*(s?s/2:b),n.moveTo(e-h,i-a),n.lineTo(e+h,i+a),n.moveTo(e+f,i-o),n.lineTo(e-f,i+o);break;case"line":o=s?s/2:Math.cos(v)*b,a=Math.sin(v)*b,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(v)*(s?s/2:b),i+Math.sin(v)*b);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function mn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Tc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Ic(n){n.restore()}function Bk(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function $k(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Uk(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),et(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function zk(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=s.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function jk(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function Bi(n,t,e,i,s,r={}){const o=wt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=s.string,Uk(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&jk(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),et(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,i,r.maxWidth)),n.fillText(l,e,i,r.maxWidth),zk(n,e,i,l,r),i+=Number(s.lineHeight);n.restore()}function Vr(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*ct,ct,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,ct,Mt,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Mt,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Mt,!0),n.lineTo(e+o.topLeft,i)}const Hk=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,qk=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Wk(n,t){const e=(""+n).match(Hk);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const Gk=n=>+n||0;function Vd(n,t){const e={},i=st(t),s=i?Object.keys(t):t,r=st(n)?i?o=>X(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=Gk(r(o));return e}function Db(n){return Vd(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Pi(n){return Vd(n,["topLeft","topRight","bottomLeft","bottomRight"])}function oe(n){const t=Db(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ft(n,t){n=n||{},t=t||Et.font;let e=X(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=X(n.style,t.style);i&&!(""+i).match(qk)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:X(n.family,t.family),lineHeight:Wk(X(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:X(n.weight,t.weight),string:""};return s.string=Vk(s),s}function nr(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function Kk(n,t,e){const{min:i,max:s}=n,r=wb(t,(s-i)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function ui(n,t){return Object.assign(Object.create(n),t)}function Fd(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=Vb("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>Fd([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Nb(a,c,()=>nC(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return qp(a).includes(c)},ownKeys(a){return qp(a)},set(a,c,l){const d=a._storage||(a._storage=s());return a[c]=d[c]=l,delete a._keys,!0}})}function _s(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Ob(n,i),setContext:r=>_s(n,r,e,i),override:r=>_s(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Nb(r,o,()=>Xk(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function Ob(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:ni(e)?e:()=>e,isIndexable:ni(i)?i:()=>i}}const Yk=(n,t)=>n?n+Md(t):t,Bd=(n,t)=>st(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Nb(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function Xk(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return ni(a)&&o.isScriptable(t)&&(a=Qk(t,a,n,e)),wt(a)&&a.length&&(a=Jk(t,a,n,o.isIndexable)),Bd(t,a)&&(a=_s(a,s,r&&r[t],o)),a}function Qk(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||i);return a.delete(n),Bd(n,c)&&(c=$d(s._scopes,s,n,c)),c}function Jk(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(st(t[0])){const c=t,l=s._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=$d(l,s,n,d);t.push(_s(h,r,o&&o[n],a))}}return t}function Lb(n,t,e){return ni(n)?n(t,e):n}const Zk=(n,t)=>n===!0?t:typeof n=="string"?ei(t,n):void 0;function tC(n,t,e,i,s){for(const r of t){const o=Zk(e,r);if(o){n.add(o);const a=Lb(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function $d(n,t,e,i){const s=t._rootScopes,r=Lb(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let c=Hp(a,o,e,r||e,i);return c===null||typeof r<"u"&&r!==e&&(c=Hp(a,o,r,c,i),c===null)?!1:Fd(Array.from(a),[""],s,r,()=>eC(t,e,i))}function Hp(n,t,e,i,s){for(;e;)e=tC(n,t,e,i,s);return e}function eC(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return wt(s)&&st(e)?e:s||{}}function nC(n,t,e,i){let s;for(const r of t)if(s=Vb(Yk(r,n),e),typeof s<"u")return Bd(n,s)?$d(e,i,n,s):s}function Vb(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function qp(n){let t=n._keys;return t||(t=n._keys=iC(n._scopes)),t}function iC(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}function Fb(n,t,e,i){const{iScale:s}=n,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,d;for(a=0,c=i;a<c;++a)l=a+e,d=t[l],o[a]={r:s.parse(ei(d,r),l)};return o}const sC=Number.EPSILON||1e-14,ws=(n,t)=>t<n.length&&!n[t].skip&&n[t],Bb=n=>n==="x"?"y":"x";function rC(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=iu(r,s),c=iu(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=i*l,f=i*d;return{previous:{x:r.x-h*(o.x-s.x),y:r.y-h*(o.y-s.y)},next:{x:r.x+f*(o.x-s.x),y:r.y+f*(o.y-s.y)}}}function oC(n,t,e){const i=n.length;let s,r,o,a,c,l=ws(n,0);for(let d=0;d<i-1;++d)if(c=l,l=ws(n,d+1),!(!c||!l)){if(mr(t[d],0,sC)){e[d]=e[d+1]=0;continue}s=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=s*o*t[d],e[d+1]=r*o*t[d])}}function aC(n,t,e="x"){const i=Bb(e),s=n.length;let r,o,a,c=ws(n,0);for(let l=0;l<s;++l){if(o=a,a=c,c=ws(n,l+1),!a)continue;const d=a[e],h=a[i];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${i}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${i}`]=h+r*t[l])}}function cC(n,t="x"){const e=Bb(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=ws(n,0);for(o=0;o<i;++o)if(a=c,c=l,l=ws(n,o+1),!!c){if(l){const d=l[t]-c[t];s[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?Qe(s[o-1])!==Qe(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}oC(n,s,r),aC(n,r,t)}function Fo(n,t,e){return Math.max(Math.min(n,e),t)}function lC(n,t){let e,i,s,r,o,a=mn(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&mn(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=Fo(s.cp1x,t.left,t.right),s.cp1y=Fo(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=Fo(s.cp2x,t.left,t.right),s.cp2y=Fo(s.cp2y,t.top,t.bottom)))}function uC(n,t,e,i,s){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")cC(n,s);else{let l=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=rC(l,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&lC(n,e)}function Ud(){return typeof window<"u"&&typeof document<"u"}function zd(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Wa(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const Ac=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function dC(n,t){return Ac(n).getPropertyValue(t)}const hC=["top","right","bottom","left"];function ki(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=hC[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const fC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function pC(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,c;if(fC(s,r,n.target))a=s,c=r;else{const l=t.getBoundingClientRect();a=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function _i(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=Ac(e),r=s.boxSizing==="border-box",o=ki(s,"padding"),a=ki(s,"border","width"),{x:c,y:l,box:d}=pC(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:g,height:y}=t;return r&&(g-=o.width+a.width,y-=o.height+a.height),{x:Math.round((c-h)/g*e.width/i),y:Math.round((l-f)/y*e.height/i)}}function gC(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&zd(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Ac(r),c=ki(a,"border","width"),l=ki(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,i=Wa(a.maxWidth,r,"clientWidth"),s=Wa(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||Ha,maxHeight:s||Ha}}const Fn=n=>Math.round(n*10)/10;function mC(n,t,e,i){const s=Ac(n),r=ki(s,"margin"),o=Wa(s.maxWidth,n,"clientWidth")||Ha,a=Wa(s.maxHeight,n,"clientHeight")||Ha,c=gC(n,t,e);let{width:l,height:d}=c;if(s.boxSizing==="content-box"){const f=ki(s,"border","width"),g=ki(s,"padding");l-=g.width+f.width,d-=g.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,i?l/i:d-r.height),l=Fn(Math.min(l,o,c.maxWidth)),d=Fn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=Fn(l/2)),(t!==void 0||e!==void 0)&&i&&c.height&&d>c.height&&(d=c.height,l=Fn(Math.floor(d*i))),{width:l,height:d}}function Wp(n,t,e){const i=t||1,s=Fn(n.height*i),r=Fn(n.width*i);n.height=Fn(n.height),n.width=Fn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const yC=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Ud()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Gp(n,t){const e=dC(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function wi(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function vC(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function bC(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=wi(n,s,e),a=wi(s,r,e),c=wi(r,t,e),l=wi(o,a,e),d=wi(a,c,e);return wi(l,d,e)}const _C=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},wC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function ds(n,t,e){return n?_C(t,e):wC()}function $b(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function Ub(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function zb(n){return n==="angle"?{between:Lr,compare:Ek,normalize:ne}:{between:pn,compare:(t,e)=>t-e,normalize:t=>t}}function Kp({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function EC(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=zb(i),c=t.length;let{start:l,end:d,loop:h}=n,f,g;if(h){for(l+=c,d+=c,f=0,g=c;f<g&&o(a(t[l%c][i]),s,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function jb(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=zb(i),{start:d,end:h,loop:f,style:g}=EC(n,t,e),y=[];let b=!1,v=null,E,P,C;const D=()=>c(s,C,E)&&a(s,C)!==0,O=()=>a(r,E)===0||c(r,C,E),L=()=>b||D(),I=()=>!b||O();for(let _=d,T=d;_<=h;++_)P=t[_%o],!P.skip&&(E=l(P[i]),E!==C&&(b=c(E,s,r),v===null&&L()&&(v=a(E,s)===0?_:T),v!==null&&I()&&(y.push(Kp({start:v,end:_,loop:f,count:o,style:g})),v=null),T=_,C=E));return v!==null&&y.push(Kp({start:v,end:h,loop:f,count:o,style:g})),y}function Hb(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=jb(i[s],n.points,t);r.length&&e.push(...r)}return e}function TC(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function IC(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%s];l.skip||l.stop?a.skip||(i=!1,r.push({start:t%s,end:(c-1)%s,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function AC(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=TC(e,s,r,i);if(i===!0)return Yp(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+s:a,l=!!n._fullLoop&&o===0&&a===s-1;return Yp(n,IC(e,o,c,l),e,t)}function Yp(n,t,e,i){return!i||!i.setContext||!e?t:xC(n,t,e,i)}function xC(n,t,e,i){const s=n._chart.getContext(),r=Xp(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function g(y,b,v,E){const P=a?-1:1;if(y!==b){for(y+=c;e[y%c].skip;)y-=P;for(;e[b%c].skip;)b+=P;y%c!==b%c&&(l.push({start:y%c,end:b%c,loop:v,style:E}),d=E,h=b%c)}}for(const y of t){h=a?h:y.start;let b=e[h%c],v;for(f=h+1;f<=y.end;f++){const E=e[f%c];v=Xp(i.setContext(ui(s,{type:"segment",p0:b,p1:E,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),SC(v,d)&&g(h,f-1,y.loop,d),b=E,d=v}h<f-1&&g(h,f-1,y.loop,d)}return l}function Xp(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function SC(n,t){if(!t)return!1;const e=[],i=function(s,r){return Ld(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function Bo(n,t,e){return n.options.clip?n[e]:t[e]}function PC(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:Bo(e,t,"left"),right:Bo(e,t,"right"),top:Bo(i,t,"top"),bottom:Bo(i,t,"bottom")}:t}function qb(n,t){const e=t._clip;if(e.disabled)return!1;const i=PC(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class kC{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Sb.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var ln=new kC;const Qp="transparent",CC={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Up(n||Qp),s=i.valid&&Up(t||Qp);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class RC{constructor(t,e,i,s){const r=e[i];s=nr([t.to,s,r,t.from]);const o=nr([t.from,r,s]);this._active=!0,this._fn=t.fn||CC[t.type||typeof o],this._easing=yr[t.easing]||yr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=nr([t.to,e,s,t.from]),this._from=nr([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}c=e/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class Wb{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!st(t))return;const e=Object.keys(Et.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!st(r))return;const o={};for(const a of e)o[a]=r[a];(wt(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=DC(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&MC(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=i.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new RC(f,t,l,d),s.push(h)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return ln.add(this._chart,i),!0}}function MC(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function DC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Jp(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function OC(n,t,e){if(e===!1)return!1;const i=Jp(n,e),s=Jp(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function NC(n){let t,e,i,s;return st(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function Gb(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Zp(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=s.length;o<a;++o){if(c=+s[o],c===e){if(d=!0,i.all)continue;break}l=n.values[c],Ct(l)&&(r||t===0||Qe(t)===Qe(l))&&(t+=l)}return!d&&!i.all?0:t}function LC(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[s]:d,[r]:n[d]};return a}function gl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function VC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function FC(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function BC(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function tg(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function eg(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,d=VC(r,o,i),h=t.length;let f;for(let g=0;g<h;++g){const y=t[g],{[c]:b,[l]:v}=y,E=y._stacks||(y._stacks={});f=E[l]=BC(s,d,b),f[a]=v,f._top=tg(f,o,!0,i.type),f._bottom=tg(f,o,!1,i.type);const P=f._visualValues||(f._visualValues={});P[a]=v}}function ml(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function $C(n,t){return ui(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function UC(n,t,e){return ui(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function js(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const yl=n=>n==="reset"||n==="none",ng=(n,t)=>t?n:Object.assign({},n),zC=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:Gb(e,!0),values:null};class Oe{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=gl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&js(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(h,f,g,y)=>h==="x"?f:h==="r"?y:g,r=e.xAxisID=X(i.xAxisID,ml(t,"x")),o=e.yAxisID=X(i.yAxisID,ml(t,"y")),a=e.rAxisID=X(i.rAxisID,ml(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),d=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Fp(this._data,this),t._stacked&&js(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(st(e)){const s=this._cachedMeta;this._data=LC(e,s)}else if(i!==e){if(i){Fp(i,this);const s=this._cachedMeta;js(s),s._parsed=[]}e&&Object.isExtensible(e)&&xk(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=gl(e.vScale,e),e.stack!==i.stack&&(s=!0,js(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(eg(this,e._parsed),e._stacked=gl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let c=t===0&&e===s.length?!0:i._sorted,l=t>0&&i._parsed[t-1],d,h,f;if(this._parsing===!1)i._parsed=s,i._sorted=!0,f=s;else{wt(s[t])?f=this.parseArrayData(i,s,t,e):st(s[t])?f=this.parseObjectData(i,s,t,e):f=this.parsePrimitiveData(i,s,t,e);const g=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)i._parsed[d+t]=h=f[d],c&&(g()&&(c=!1),l=h);i._sorted=c}o&&eg(this,f)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(s);let f,g,y;for(f=0,g=s;f<g;++f)y=f+i,h[f]={[a]:d||r.parse(l[y],y),[c]:o.parse(e[y],y)};return h}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let c,l,d,h;for(c=0,l=s;c<l;++c)d=c+i,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let d,h,f,g;for(d=0,h=s;d<h;++d)f=d+i,g=e[f],l[d]={x:r.parse(ei(g,a),f),y:o.parse(ei(g,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:Gb(s,!0),values:e._stacks[t.axis]._visualValues};return Zp(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Zp(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),c=zC(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=FC(a);let f,g;function y(){g=s[f];const b=g[a.axis];return!Ct(g[t.axis])||d>b||h<b}for(f=0;f<o&&!(!y()&&(this.updateRangeFromParsed(l,t,g,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!y()){this.updateRangeFromParsed(l,t,g,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],Ct(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=NC(X(this.options.clip,OC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=s[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=UC(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=$C(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Nr(i);if(a)return ng(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=s?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),g=Object.keys(Et.elements[t]),y=()=>this.getContext(i,s,e),b=l.resolveNamedOptions(f,g,y,h);return b.$shared&&(b.$shared=c,r[o]=Object.freeze(ng(b,c))),b}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(s.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,i,e))}const l=new Wb(s,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||yl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){yl(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!yl(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&js(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(Oe,"defaults",{}),U(Oe,"datasetElementType",null),U(Oe,"dataElementType",null);function jC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=xb(i.sort((s,r)=>s-r))}return n._cache.$bar}function HC(n){const t=n.iScale,e=jC(t,n.type);let i=t._length,s,r,o,a;const c=()=>{o===32767||o===-32768||(Nr(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),c();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),c();return i}function qC(n,t,e,i){const s=e.barThickness;let r,o;return et(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function WC(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:e.barPercentage,start:l}}function GC(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:s,end:r,min:o,max:a}}function Kb(n,t,e,i){return wt(n)?GC(n,t,e,i):t[e.axis]=e.parse(n,i),t}function ig(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,c=[];let l,d,h,f;for(l=e,d=e+i;l<d;++l)f=t[l],h={},h[s.axis]=a||s.parse(o[l],l),c.push(Kb(f,h,r,l));return c}function vl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function KC(n,t,e){return n!==0?Qe(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function YC(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function XC(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=YC(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=l:(e._bottom||0)===i?s=d:(r[sg(d,o,a,c)]=!0,s=l)),r[sg(s,o,a,c)]=!0,n.borderSkipped=r}function sg(n,t,e,i){return i?(n=QC(n,t,e),n=rg(n,e,t)):n=rg(n,t,e),n}function QC(n,t,e){return n===t?e:n===e?t:n}function rg(n,t,e){return n==="start"?t:n==="end"?e:n}function JC(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class ca extends Oe{parsePrimitiveData(t,e,i,s){return ig(t,e,i,s)}parseArrayData(t,e,i,s){return ig(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,g,y,b;for(f=i,g=i+s;f<g;++f)b=e[f],y={},y[r.axis]=r.parse(ei(b,l),f),h.push(Kb(ei(b,d),y,o,f));return h}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=vl(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,s);for(let g=e;g<e+i;g++){const y=this.getParsed(g),b=r||et(y[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(g),v=this._calculateBarIndexPixels(g,d),E=(y._stacks||{})[a.axis],P={horizontal:l,base:b.base,enableBorderRadius:!E||vl(y._custom)||o===E._top||o===E._bottom,x:l?b.head:v.center,y:l?v.center:b.head,height:l?v.size:Math.abs(b.size),width:l?Math.abs(b.size):v.size};f&&(P.options=h||this.resolveDataElementOptions(g,t[g].active?"active":s));const C=P.options||t[g].options;XC(P,C,E,o),JC(P,C,d.ratio),this.updateElement(t[g],g,P,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[i.axis],l=d=>{const h=d._parsed.find(g=>g[i.axis]===c),f=h&&h[d.vScale.axis];if(et(f)||isNaN(f))return!0};for(const d of s)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[X(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||HC(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=vl(l);let h=c[e.axis],f=0,g=i?this.applyStack(e,c,i):h,y,b;g!==h&&(f=g-h,g=h),d&&(h=l.barStart,g=l.barEnd-l.barStart,h!==0&&Qe(h)!==Qe(l.barEnd)&&(f=0),f+=h);const v=!et(r)&&!d?r:f;let E=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(f+g):y=E,b=y-E,Math.abs(b)<o){b=KC(b,e,a)*o,h===a&&(E-=b/2);const P=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),D=Math.min(P,C),O=Math.max(P,C);E=Math.max(Math.min(E,O),D),y=E+b,i&&!d&&(c._stacks[e.axis]._visualValues[s]=e.getValueForPixel(y)-e.getValueForPixel(E))}if(E===e.getPixelForValue(a)){const P=Qe(b)*e.getLineWidthForValue(a)/2;E+=P,b-=P}return{size:b,base:E,head:y,center:y+b/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=X(s.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?WC(t,e,s,d*l):qC(t,e,s,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(X(f,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+g;a=h.start+h.chunk*y+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}U(ca,"id","bar"),U(ca,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),U(ca,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class la extends Oe{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const r=super.parsePrimitiveData(t,e,i,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+i).radius;return r}parseArrayData(t,e,i,s){const r=super.parseArrayData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=X(a[2],this.resolveDataElementOptions(o+i).radius)}return r}parseObjectData(t,e,i,s){const r=super.parseObjectData(t,e,i,s);for(let o=0;o<r.length;o++){const a=e[i+o];r[o]._custom=X(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:i[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,s),d=o.axis,h=a.axis;for(let f=e;f<e+i;f++){const g=t[f],y=!r&&this.getParsed(f),b={},v=b[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(y[d]),E=b[h]=r?a.getBasePixel():a.getPixelForValue(y[h]);b.skip=isNaN(v)||isNaN(E),l&&(b.options=c||this.resolveDataElementOptions(f,g.active?"active":s),r&&(b.options.radius=0)),this.updateElement(g,f,b,s)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=X(i&&i._custom,r),s}}U(la,"id","bubble"),U(la,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),U(la,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function ZC(n,t,e){let i=1,s=1,r=0,o=0;if(t<bt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),g=(C,D,O)=>Lr(C,a,c,!0)?1:Math.max(D,D*e,O,O*e),y=(C,D,O)=>Lr(C,a,c,!0)?-1:Math.min(D,D*e,O,O*e),b=g(0,l,h),v=g(Mt,d,f),E=y(ct,l,h),P=y(ct+Mt,d,f);i=(b-E)/2,s=(v-P)/2,r=-(b+E)/2,o=-(v+P)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Ii extends Oe{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=c=>+i[c];if(st(i[t])){const{key:c="value"}=this._parsing;r=l=>+ei(i[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return De(this.options.rotation-90)}_getCircumference(){return De(this.options.circumference)}_getRotationExtents(){let t=bt,e=-bt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(dk(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:g,offsetX:y,offsetY:b}=ZC(h,d,c),v=(i.width-o)/f,E=(i.height-o)/g,P=Math.max(Math.min(v,E)/2,0),C=wb(this.options.radius,P),D=Math.max(C*c,0),O=(C-D)/this._getVisibleDatasetWeightTotal();this.offsetX=y*C,this.offsetY=b*C,s.total=this.calculateTotal(),this.outerRadius=C-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/bt)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,g=f?0:this.innerRadius,y=f?0:this.outerRadius,{sharedOptions:b,includeOptions:v}=this._getSharedOptions(e,s);let E=this._getRotation(),P;for(P=0;P<e;++P)E+=this._circumference(P,r);for(P=e;P<e+i;++P){const C=this._circumference(P,r),D=t[P],O={x:d+this.offsetX,y:h+this.offsetY,startAngle:E,endAngle:E+C,circumference:C,outerRadius:y,innerRadius:g};v&&(O.options=b||this.resolveDataElementOptions(P,D.active?"active":s)),E+=C,this.updateElement(D,P,O,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?bt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=ro(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,c;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)c=a.resolveDataElementOptions(s),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(X(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}U(Ii,"id","doughnut"),U(Ii,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),U(Ii,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),U(Ii,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class ua extends Oe{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=kb(e,s,o);this._drawStart=a,this._drawCount=c,Cb(e)&&(a=0,c=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,s),f=o.axis,g=a.axis,{spanGaps:y,segment:b}=this.options,v=bs(y)?y:Number.POSITIVE_INFINITY,E=this.chart._animationsDisabled||r||s==="none",P=e+i,C=t.length;let D=e>0&&this.getParsed(e-1);for(let O=0;O<C;++O){const L=t[O],I=E?L:{};if(O<e||O>=P){I.skip=!0;continue}const _=this.getParsed(O),T=et(_[g]),A=I[f]=o.getPixelForValue(_[f],O),S=I[g]=r||T?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,_,c):_[g],O);I.skip=isNaN(A)||isNaN(S)||T,I.stop=O>0&&Math.abs(_[f]-D[f])>v,b&&(I.parsed=_,I.raw=l.data[O]),h&&(I.options=d||this.resolveDataElementOptions(O,L.active?"active":s)),E||this.updateElement(L,O,I,s),D=_}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(ua,"id","line"),U(ua,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(ua,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class br extends Oe{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=ro(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,i,s){return Fb.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,s)=>{const r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*ct;let g=f,y;const b=360/this.countVisibleElements();for(y=0;y<e;++y)g+=this._computeAngle(y,s,b);for(y=e;y<e+i;y++){const v=t[y];let E=g,P=g+this._computeAngle(y,s,b),C=o.getDataVisibility(y)?l.getDistanceFromCenterForValue(this.getParsed(y).r):0;g=P,r&&(c.animateScale&&(C=0),c.animateRotate&&(E=P=f));const D={x:d,y:h,innerRadius:0,outerRadius:C,startAngle:E,endAngle:P,options:this.resolveDataElementOptions(y,v.active?"active":s)};this.updateElement(v,y,D,s)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?De(this.resolveDataElementOptions(t,e).angle||i):0}}U(br,"id","polarArea"),U(br,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),U(br,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:s}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:s,lineWidth:c.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ou extends Ii{}U(ou,"id","pie"),U(ou,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class da extends Oe{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,s){return Fb.bind(this)(t,e,i,s)}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(i.points=s,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":s),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,g={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,g,s)}}}U(da,"id","radar"),U(da,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),U(da,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ha extends Oe{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=kb(e,i,s);if(this._drawStart=r,this._drawCount=o,Cb(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,s),h=this.getSharedOptions(d),f=this.includeOptions(s,h),g=o.axis,y=a.axis,{spanGaps:b,segment:v}=this.options,E=bs(b)?b:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||r||s==="none";let C=e>0&&this.getParsed(e-1);for(let D=e;D<e+i;++D){const O=t[D],L=this.getParsed(D),I=P?O:{},_=et(L[y]),T=I[g]=o.getPixelForValue(L[g],D),A=I[y]=r||_?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,L,c):L[y],D);I.skip=isNaN(T)||isNaN(A)||_,I.stop=D>0&&Math.abs(L[g]-C[g])>E,v&&(I.parsed=L,I.raw=l.data[D]),f&&(I.options=h||this.resolveDataElementOptions(D,O.active?"active":s)),P||this.updateElement(O,D,I,s),C=L}this.updateSharedOptions(h,s,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}U(ha,"id","scatter"),U(ha,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),U(ha,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var tR=Object.freeze({__proto__:null,BarController:ca,BubbleController:la,DoughnutController:Ii,LineController:ua,PieController:ou,PolarAreaController:br,RadarController:da,ScatterController:ha});function yi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class jd{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(jd.prototype,t)}init(){}formats(){return yi()}parse(){return yi()}format(){return yi()}add(){return yi()}diff(){return yi()}startOf(){return yi()}endOf(){return yi()}}var eR={_date:jd};function nR(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?Ik:gn;if(i){if(s._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),g=l(r,t,e+h);return{lo:f.lo,hi:g.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=s._cachedMeta,{_parsed:f}=n,g=f.slice(0,d.lo+1).reverse().findIndex(b=>!et(b[h.axis]));d.lo-=Math.max(0,g);const y=f.slice(d.hi).findIndex(b=>!et(b[h.axis]));d.hi+=Math.max(0,y)}return d}}return{lo:0,hi:r.length-1}}function xc(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=nR(r[a],t,o,s);for(let g=h;g<=f;++g){const y=d[g];y.skip||i(y,l,g)}}}function iR(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function bl(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||xc(n,e,t,function(a,c,l){!s&&!mn(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function sR(n,t,e,i){let s=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=Ib(o,{x:t.x,y:t.y});Lr(h,l,d)&&s.push({element:o,datasetIndex:a,index:c})}return xc(n,e,t,r),s}function rR(n,t,e,i,s,r){let o=[];const a=iR(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const g=d.inRange(t.x,t.y,s);if(i&&!g)return;const y=d.getCenterPoint(s);if(!(!!r||n.isPointInArea(y))&&!g)return;const v=a(t,y);v<c?(o=[{element:d,datasetIndex:h,index:f}],c=v):v===c&&o.push({element:d,datasetIndex:h,index:f})}return xc(n,e,t,l),o}function _l(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?sR(n,t,e,s):rR(n,t,e,i,s,r)}function og(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return xc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],s)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,s))}),i&&!a?[]:r}var oR={modes:{index(n,t,e,i){const s=_i(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?bl(n,s,r,i,o):_l(n,s,r,!1,i,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,i){const s=_i(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?bl(n,s,r,i,o):_l(n,s,r,!1,i,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,i){const s=_i(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return bl(n,s,r,i,o)},nearest(n,t,e,i){const s=_i(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return _l(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=_i(t,n);return og(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=_i(t,n);return og(n,s,"y",e.intersect,i)}}};const Yb=["left","top","right","bottom"];function Hs(n,t){return n.filter(e=>e.pos===t)}function ag(n,t){return n.filter(e=>Yb.indexOf(e.pos)===-1&&e.box.axis===t)}function qs(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function aR(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function cR(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!Yb.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function lR(n,t){const e=cR(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*i:c&&t.availableWidth,a.height=s):(a.width=i,a.height=d?d*s:c&&t.availableHeight)}return e}function uR(n){const t=aR(n),e=qs(t.filter(l=>l.box.fullSize),!0),i=qs(Hs(t,"left"),!0),s=qs(Hs(t,"right")),r=qs(Hs(t,"top"),!0),o=qs(Hs(t,"bottom")),a=ag(t,"x"),c=ag(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:Hs(t,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function cg(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function Xb(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function dR(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!st(s)){e.size&&(n[s]-=e.size);const h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[s]+=e.size}r.getPadding&&Xb(o,r.getPadding());const a=Math.max(0,t.outerWidth-cg(o,n,"left","right")),c=Math.max(0,t.outerHeight-cg(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function hR(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function fR(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function ir(n,t,e,i){const s=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,fR(a.horizontal,t));const{same:h,other:f}=dR(t,e,a,i);l|=h&&s.length,d=d||f,c.fullSize||s.push(a)}return l&&ir(s,t,e,i)||d}function $o(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function lg(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=i[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Nr(l.start)&&(o=l.start),c.fullSize?$o(c,s.left,o,e.outerWidth-s.right-s.left,f):$o(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Nr(l.start)&&(r=l.start),c.fullSize?$o(c,r,s.top,f,e.outerHeight-s.bottom-s.top):$o(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var se={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=oe(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=uR(n.boxes),c=a.vertical,l=a.horizontal;ut(n.boxes,b=>{typeof b.beforeLayout=="function"&&b.beforeLayout()});const d=c.reduce((b,v)=>v.box.options&&v.box.options.display===!1?b:b+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},s);Xb(f,oe(i));const g=Object.assign({maxPadding:f,w:r,h:o,x:s.left,y:s.top},s),y=lR(c.concat(l),h);ir(a.fullSize,g,h,y),ir(c,g,h,y),ir(l,g,h,y)&&ir(c,g,h,y),hR(g),lg(a.leftAndTop,g,h,y),g.x+=g.w,g.y+=g.h,lg(a.rightAndBottom,g,h,y),n.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},ut(a.chartArea,b=>{const v=b.box;Object.assign(v,n.chartArea),v.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class Qb{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class pR extends Qb{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const fa="$chartjs",gR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ug=n=>n===null||n==="";function mR(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[fa]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",ug(s)){const r=Gp(n,"width");r!==void 0&&(n.width=r)}if(ug(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Gp(n,"height");r!==void 0&&(n.height=r)}return n}const Jb=yC?{passive:!0}:!1;function yR(n,t,e){n&&n.addEventListener(t,e,Jb)}function vR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Jb)}function bR(n,t){const e=gR[n.type]||n.type,{x:i,y:s}=_i(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function Ga(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function _R(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ga(a.addedNodes,i),o=o&&!Ga(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function wR(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ga(a.removedNodes,i),o=o&&!Ga(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Fr=new Map;let dg=0;function Zb(){const n=window.devicePixelRatio;n!==dg&&(dg=n,Fr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function ER(n,t){Fr.size||window.addEventListener("resize",Zb),Fr.set(n,t)}function TR(n){Fr.delete(n),Fr.size||window.removeEventListener("resize",Zb)}function IR(n,t,e){const i=n.canvas,s=i&&zd(i);if(!s)return;const r=Pb((a,c)=>{const l=s.clientWidth;e(a,c),l<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(s),ER(n,r),o}function wl(n,t,e){e&&e.disconnect(),t==="resize"&&TR(n)}function AR(n,t,e){const i=n.canvas,s=Pb(r=>{n.ctx!==null&&e(bR(r,n))},n);return yR(i,t,s),s}class xR extends Qb{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(mR(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[fa])return!1;const i=e[fa].initial;["height","width"].forEach(r=>{const o=i[r];et(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[fa],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:_R,detach:wR,resize:IR}[e]||AR;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:wl,detach:wl,resize:wl}[e]||vR)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return mC(t,e,i,s)}isAttached(t){const e=t&&zd(t);return!!(e&&e.isConnected)}}function SR(n){return!Ud()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?pR:xR}class Ve{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return bs(this.x)&&bs(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}U(Ve,"defaults",{}),U(Ve,"defaultRoutes");function PR(n,t){const e=n.options.ticks,i=kR(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?RR(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>s)return MR(t,l,r,o/s),l;const d=CR(r,t,s);if(o>0){let h,f;const g=o>1?Math.round((c-a)/(o-1)):null;for(Uo(t,l,d,et(g)?0:a-g,a),h=0,f=o-1;h<f;h++)Uo(t,l,d,r[h],r[h+1]);return Uo(t,l,d,c,et(g)?t.length:c+g),l}return Uo(t,l,d),l}function kR(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function CR(n,t,e){const i=DR(n),s=t.length/e;if(!i)return Math.max(s,1);const r=bk(i);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>s)return c}return Math.max(s,1)}function RR(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function MR(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function Uo(n,t,e,i,s){const r=X(i,0),o=Math.min(X(s,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),s&&(c=s-i,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function DR(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const OR=n=>n==="left"?"right":n==="right"?"left":n,hg=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,fg=(n,t)=>Math.min(t||n,n);function pg(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function NR(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(s),l;if(!(e&&(i===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(s-1))/2,c+=s<t?l:-l,c<r-a||c>o+a)))return c}function LR(n,t){ut(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function Ws(n){return n.drawTicks?n.tickLength:0}function gg(n,t){if(!n.display)return 0;const e=Ft(n.font,t),i=oe(n.padding);return(wt(n.text)?n.text.length:1)*e.lineHeight+i.height}function VR(n,t){return ui(n,{scale:t,type:"scale"})}function FR(n,t,e){return ui(n,{tick:e,index:t,type:"tick"})}function BR(n,t,e){let i=Nd(n);return(e&&t!=="right"||!e&&t==="right")&&(i=OR(i)),i}function $R(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,g,y;const b=o-s,v=a-r;if(n.isHorizontal()){if(g=Zt(i,r,a),st(e)){const E=Object.keys(e)[0],P=e[E];y=d[E].getPixelForValue(P)+b-t}else e==="center"?y=(l.bottom+l.top)/2+b-t:y=hg(n,e,t);f=a-r}else{if(st(e)){const E=Object.keys(e)[0],P=e[E];g=d[E].getPixelForValue(P)-v+t}else e==="center"?g=(l.left+l.right)/2-v+t:g=hg(n,e,t);y=Zt(i,o,s),h=e==="left"?-Mt:Mt}return{titleX:g,titleY:y,maxWidth:f,rotation:h}}class ji extends Ve{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=ve(t,Number.POSITIVE_INFINITY),e=ve(e,Number.NEGATIVE_INFINITY),i=ve(i,Number.POSITIVE_INFINITY),s=ve(s,Number.NEGATIVE_INFINITY),{min:ve(t,i),max:ve(e,s),minDefined:Ct(t),maxDefined:Ct(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:ve(e,ve(i,e)),max:ve(i,ve(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){pt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Kk(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?pg(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=PR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){pt(this.options.afterUpdate,[this])}beforeSetDimensions(){pt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){pt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),pt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){pt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=pt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){pt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){pt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=fg(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,c,l;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,g=Ut(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:g/(i-1),h+6>a&&(a=g/(i-(t.offset?.5:1)),c=this.maxHeight-Ws(t.grid)-e.padding-gg(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=Dd(Math.min(Math.asin(Ut((d.highest.height+6)/a,-1,1)),Math.asin(Ut(c/l,-1,1))-Math.asin(Ut(f/l,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){pt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){pt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=gg(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ws(r)+c):(t.height=this.maxHeight,t.width=Ws(r)+c),i.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),g=i.padding*2,y=De(this.labelRotation),b=Math.cos(y),v=Math.sin(y);if(a){const E=i.mirror?0:v*h.width+b*f.height;t.height=Math.min(this.maxHeight,t.height+E+g)}else{const E=i.mirror?0:b*h.width+v*f.height;t.width=Math.min(this.maxWidth,t.width+E+g)}this._calculatePadding(l,d,v,b)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,g=0;c?l?(f=s*t.width,g=i*e.height):(f=i*t.height,g=s*e.width):r==="start"?g=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,g=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((g-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){pt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)et(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=pg(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/fg(e,i));let l=0,d=0,h,f,g,y,b,v,E,P,C,D,O;for(h=0;h<e;h+=c){if(y=t[h].label,b=this._resolveTickFontOptions(h),s.font=v=b.string,E=r[v]=r[v]||{data:{},gc:[]},P=b.lineHeight,C=D=0,!et(y)&&!wt(y))C=qa(s,E.data,E.gc,C,y),D=P;else if(wt(y))for(f=0,g=y.length;f<g;++f)O=y[f],!et(O)&&!wt(O)&&(C=qa(s,E.data,E.gc,C,O),D+=P);o.push(C),a.push(D),l=Math.max(C,l),d=Math.max(D,d)}LR(r,e);const L=o.indexOf(l),I=a.indexOf(d),_=T=>({width:o[T]||0,height:a[T]||0});return{first:_(0),last:_(e-1),widest:_(L),highest:_(I),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Tk(this._alignToPixels?mi(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=FR(this.getContext(),t,i))}return this.$context||(this.$context=VR(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=De(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*i>a*s?a/i:c/s:c*s<a*i?c/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=Ws(r),g=[],y=a.setContext(this.getContext()),b=y.display?y.width:0,v=b/2,E=function(dt){return mi(i,dt,b)};let P,C,D,O,L,I,_,T,A,S,k,x;if(o==="top")P=E(this.bottom),I=this.bottom-f,T=P-v,S=E(t.top)+v,x=t.bottom;else if(o==="bottom")P=E(this.top),S=t.top,x=E(t.bottom)-v,I=P+v,T=this.top+f;else if(o==="left")P=E(this.right),L=this.right-f,_=P-v,A=E(t.left)+v,k=t.right;else if(o==="right")P=E(this.left),A=t.left,k=E(t.right)-v,L=P+v,_=this.left+f;else if(e==="x"){if(o==="center")P=E((t.top+t.bottom)/2+.5);else if(st(o)){const dt=Object.keys(o)[0],ht=o[dt];P=E(this.chart.scales[dt].getPixelForValue(ht))}S=t.top,x=t.bottom,I=P+v,T=I+f}else if(e==="y"){if(o==="center")P=E((t.left+t.right)/2);else if(st(o)){const dt=Object.keys(o)[0],ht=o[dt];P=E(this.chart.scales[dt].getPixelForValue(ht))}L=P-v,_=L-f,A=t.left,k=t.right}const rt=X(s.ticks.maxTicksLimit,h),tt=Math.max(1,Math.ceil(h/rt));for(C=0;C<h;C+=tt){const dt=this.getContext(C),ht=r.setContext(dt),zt=a.setContext(dt),Dt=ht.lineWidth,en=ht.color,Hi=zt.dash||[],ae=zt.dashOffset,At=ht.tickWidth,nn=ht.tickColor,Se=ht.tickBorderDash||[],sn=ht.tickBorderDashOffset;D=NR(this,C,c),D!==void 0&&(O=mi(i,D,Dt),l?L=_=A=k=O:I=T=S=x=O,g.push({tx1:L,ty1:I,tx2:_,ty2:T,x1:A,y1:S,x2:k,y2:x,width:Dt,color:en,borderDash:Hi,borderDashOffset:ae,tickWidth:At,tickColor:nn,tickBorderDash:Se,tickBorderDashOffset:sn}))}return this._ticksLength=h,this._borderValue=P,g}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=Ws(i.grid),g=f+d,y=h?-d:g,b=-De(this.labelRotation),v=[];let E,P,C,D,O,L,I,_,T,A,S,k,x="middle";if(s==="top")L=this.bottom-y,I=this._getXAxisLabelAlignment();else if(s==="bottom")L=this.top+y,I=this._getXAxisLabelAlignment();else if(s==="left"){const tt=this._getYAxisLabelAlignment(f);I=tt.textAlign,O=tt.x}else if(s==="right"){const tt=this._getYAxisLabelAlignment(f);I=tt.textAlign,O=tt.x}else if(e==="x"){if(s==="center")L=(t.top+t.bottom)/2+g;else if(st(s)){const tt=Object.keys(s)[0],dt=s[tt];L=this.chart.scales[tt].getPixelForValue(dt)+g}I=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")O=(t.left+t.right)/2-g;else if(st(s)){const tt=Object.keys(s)[0],dt=s[tt];O=this.chart.scales[tt].getPixelForValue(dt)}I=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?x="top":c==="end"&&(x="bottom"));const rt=this._getLabelSizes();for(E=0,P=a.length;E<P;++E){C=a[E],D=C.label;const tt=r.setContext(this.getContext(E));_=this.getPixelForTick(E)+r.labelOffset,T=this._resolveTickFontOptions(E),A=T.lineHeight,S=wt(D)?D.length:1;const dt=S/2,ht=tt.color,zt=tt.textStrokeColor,Dt=tt.textStrokeWidth;let en=I;o?(O=_,I==="inner"&&(E===P-1?en=this.options.reverse?"left":"right":E===0?en=this.options.reverse?"right":"left":en="center"),s==="top"?l==="near"||b!==0?k=-S*A+A/2:l==="center"?k=-rt.highest.height/2-dt*A+A:k=-rt.highest.height+A/2:l==="near"||b!==0?k=A/2:l==="center"?k=rt.highest.height/2-dt*A:k=rt.highest.height-S*A,h&&(k*=-1),b!==0&&!tt.showLabelBackdrop&&(O+=A/2*Math.sin(b))):(L=_,k=(1-S)*A/2);let Hi;if(tt.showLabelBackdrop){const ae=oe(tt.backdropPadding),At=rt.heights[E],nn=rt.widths[E];let Se=k-ae.top,sn=0-ae.left;switch(x){case"middle":Se-=At/2;break;case"bottom":Se-=At;break}switch(I){case"center":sn-=nn/2;break;case"right":sn-=nn;break;case"inner":E===P-1?sn-=nn:E>0&&(sn-=nn/2);break}Hi={left:sn,top:Se,width:nn+ae.width,height:At+ae.height,color:tt.backdropColor}}v.push({label:D,font:T,textOffset:k,options:{rotation:b,color:ht,strokeColor:zt,strokeWidth:Dt,textAlign:en,textBaseline:x,translation:[O,L],backdrop:Hi}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-De(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?s?(d=this.right+r,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?s?(d=this.left+r,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const c=s[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=mi(t,this.left,o)-o/2,d=mi(t,this.right,a)+a/2,h=f=c):(h=mi(t,this.top,o)-o/2,f=mi(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Tc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;Bi(i,l,0,d,c,a)}s&&Ic(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=Ft(i.font),o=oe(i.padding),a=i.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||st(e)?(c+=o.bottom,wt(i.text)&&(c+=r.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=$R(this,c,e,a);Bi(t,i.text,0,0,r,{color:i.color,maxWidth:h,rotation:f,textAlign:BR(a,e,s),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=X(t.grid&&t.grid.z,-1),s=X(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ji.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Ft(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class zo{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;jR(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,UR(t,o,i),this.override&&Et.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Et[s]&&(delete Et[s][i],this.override&&delete Fi[i])}}function UR(n,t,e){const i=Or(Object.create(null),[e?Et.get(e):{},Et.get(t),n.defaults]);Et.set(t,i),n.defaultRoutes&&zR(t,n.defaultRoutes),n.descriptors&&Et.describe(t,n.descriptors)}function zR(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Et.route(r,s,c,a)})}function jR(n){return"id"in n&&"defaults"in n}class HR{constructor(){this.controllers=new zo(Oe,"datasets",!0),this.elements=new zo(Ve,"elements"),this.plugins=new zo(Object,"plugins"),this.scales=new zo(ji,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):ut(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=Md(t);pt(i["before"+s],[],i),e[t](i),pt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var $e=new HR;class qR{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],c=[e,s,r.options];if(pt(a,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){et(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=X(i.options&&i.options.plugins,{}),r=WR(i);return s===!1&&!e?[]:KR(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function WR(n){const t={},e=[],i=Object.keys($e.plugins.items);for(let r=0;r<i.length;r++)e.push($e.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function GR(n,t){return!t&&n===!1?null:n===!0?{}:n}function KR(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=GR(i[c],s);l!==null&&r.push({plugin:a,options:YR(n.config,{plugin:a,local:e[c]},l,o)})}return r}function YR(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function au(n,t){const e=Et.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function XR(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function QR(n,t){return n===t?"_index_":"_value_"}function mg(n){if(n==="x"||n==="y"||n==="r")return n}function JR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function cu(n,...t){if(mg(n))return n;for(const e of t){const i=e.axis||JR(e.position)||n.length>1&&mg(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function yg(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function ZR(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return yg(n,"x",e[0])||yg(n,"y",e[0])}return{}}function t1(n,t){const e=Fi[n.type]||{scales:{}},i=t.scales||{},s=au(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!st(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=cu(o,a,ZR(o,n),Et.scales[a.type]),l=QR(c,s),d=e.scales||{};r[o]=gr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||au(a,t),d=(Fi[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=XR(h,c),g=o[f+"AxisID"]||f;r[g]=r[g]||Object.create(null),gr(r[g],[{axis:f},i[g],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];gr(a,[Et.scales[a.type],Et.scale])}),r}function t_(n){const t=n.options||(n.options={});t.plugins=X(t.plugins,{}),t.scales=t1(n,t)}function e_(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function e1(n){return n=n||{},n.data=e_(n.data),t_(n),n}const vg=new Map,n_=new Set;function jo(n,t){let e=vg.get(n);return e||(e=t(),vg.set(n,e),n_.add(e)),e}const Gs=(n,t,e)=>{const i=ei(t,e);i!==void 0&&n.add(i)};class n1{constructor(t){this._config=e1(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=e_(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),t_(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return jo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return jo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return jo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return jo(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>Gs(c,t,h))),d.forEach(h=>Gs(c,s,h)),d.forEach(h=>Gs(c,Fi[r]||{},h)),d.forEach(h=>Gs(c,Et,h)),d.forEach(h=>Gs(c,su,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),n_.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Fi[e]||{},Et.datasets[e]||{},{type:e},Et,su]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=bg(this._resolverCache,t,s);let c=o;if(s1(o,e)){r.$shared=!1,i=ni(i)?i():i;const l=this.createResolver(t,i,a);c=_s(o,i,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,i=[""],s){const{resolver:r}=bg(this._resolverCache,t,i);return st(e)?_s(r,e,void 0,s):r}}function bg(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:Fd(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const i1=n=>st(n)&&Object.getOwnPropertyNames(n).some(t=>ni(n[t]));function s1(n,t){const{isScriptable:e,isIndexable:i}=Ob(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(ni(a)||i1(a))||o&&wt(a))return!0}return!1}var r1="4.5.1";const o1=["top","bottom","left","right","chartArea"];function _g(n,t){return n==="top"||n==="bottom"||o1.indexOf(n)===-1&&t==="x"}function wg(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function Eg(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),pt(e&&e.onComplete,[n],t)}function a1(n){const t=n.chart,e=t.options.animation;pt(e&&e.onProgress,[n],t)}function i_(n){return Ud()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const pa={},Tg=n=>{const t=i_(n);return Object.values(pa).filter(e=>e.canvas===t).pop()};function c1(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function l1(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class je{static register(...t){$e.add(...t),Ig()}static unregister(...t){$e.remove(...t),Ig()}constructor(t,e){const i=this.config=new n1(e),s=i_(t),r=Tg(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||SR(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=uk(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new qR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Sk(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],pa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}ln.listen(this,"complete",Eg),ln.listen(this,"progress",a1),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return et(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return $e}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Wp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return jp(this.canvas,this.ctx),this}stop(){return ln.stop(this),this}resize(t,e){ln.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Wp(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),pt(i.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};ut(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=cu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),ut(r,o=>{const a=o.options,c=a.id,l=cu(c,a),d=X(a.type,o.dtype);(a.position===void 0||_g(a.position,l)!==_g(o.dposition))&&(a.position=o.dposition),s[c]=!0;let h=null;if(c in i&&i[c].type===d)h=i[c];else{const f=$e.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(a,t)}),ut(s,(o,a)=>{o||delete i[a]}),ut(i,o=>{se.configure(this,o,o.options),se.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(wg("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||au(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const c=$e.getController(a),{datasetElementType:l,dataElementType:d}=Et.datasets[a];Object.assign(c,{dataElementType:$e.getElement(d),datasetElementType:l&&$e.getElement(l)}),o.controller=new c(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ut(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!s&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||ut(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(wg("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){ut(this.scales,t=>{se.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Op(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;c1(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!Op(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;se.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],ut(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,ni(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ln.has(this)?this.attached&&!ln.running(this)&&ln.start(this):(this.draw(),Eg({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=qb(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&Tc(e,s),t.controller.draw(),s&&Ic(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return mn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=oR.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=ui(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Nr(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ln.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),jp(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete pa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};ut(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},s=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){ut(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},ut(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!za(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),c=mk(t),l=l1(t,this._lastEvent,i,c);i&&(this._lastEvent=null,pt(r.onHover,[t,a,this],this),c&&pt(r.onClick,[t,a,this],this));const d=!za(a,s);return(d||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,d}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}U(je,"defaults",Et),U(je,"instances",pa),U(je,"overrides",Fi),U(je,"registry",$e),U(je,"version",r1),U(je,"getChart",Tg);function Ig(){return ut(je.instances,n=>n._plugins.invalidate())}function u1(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,ne(i-e));if(n.beginPath(),n.arc(s,r,o-l/2,i+h/2,e-h/2),a>0){const f=Math.min(l/a,ne(i-e));n.arc(s,r,a+l/2,e-f/2,i+f/2,!0)}else{const f=Math.min(l/2,o*ne(i-e));if(d==="round")n.arc(s,r,f,e-ct/2,i+ct/2,!0);else if(d==="bevel"){const g=2*f*f,y=-g*Math.cos(e+ct/2)+s,b=-g*Math.sin(e+ct/2)+r,v=g*Math.cos(i+ct/2)+s,E=g*Math.sin(i+ct/2)+r;n.lineTo(y,b),n.lineTo(v,E)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function d1(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=s/a;n.beginPath(),n.arc(r,o,a,i-l,e+l),c>s?(l=s/c,n.arc(r,o,c,e+l,i-l,!0)):n.arc(r,o,s,e+Mt,i-Mt),n.closePath(),n.clip()}function h1(n){return Vd(n,["outerStart","outerEnd","innerStart","innerEnd"])}function f1(n,t,e,i){const s=h1(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=c=>{const l=(e-Math.min(r,c))*i/2;return Ut(c,0,Math.min(r,l))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:Ut(s.innerStart,0,o),innerEnd:Ut(s.innerEnd,0,o)}}function Xi(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function Ka(n,t,e,i,s,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+i+e-l,0),f=d>0?d+i+e+l:0;let g=0;const y=s-c;if(i){const tt=d>0?d-i:0,dt=h>0?h-i:0,ht=(tt+dt)/2,zt=ht!==0?y*ht/(ht+i):y;g=(y-zt)/2}const b=Math.max(.001,y*h-e/ct)/h,v=(y-b)/2,E=c+v+g,P=s-v-g,{outerStart:C,outerEnd:D,innerStart:O,innerEnd:L}=f1(t,f,h,P-E),I=h-C,_=h-D,T=E+C/I,A=P-D/_,S=f+O,k=f+L,x=E+O/S,rt=P-L/k;if(n.beginPath(),r){const tt=(T+A)/2;if(n.arc(o,a,h,T,tt),n.arc(o,a,h,tt,A),D>0){const Dt=Xi(_,A,o,a);n.arc(Dt.x,Dt.y,D,A,P+Mt)}const dt=Xi(k,P,o,a);if(n.lineTo(dt.x,dt.y),L>0){const Dt=Xi(k,rt,o,a);n.arc(Dt.x,Dt.y,L,P+Mt,rt+Math.PI)}const ht=(P-L/f+(E+O/f))/2;if(n.arc(o,a,f,P-L/f,ht,!0),n.arc(o,a,f,ht,E+O/f,!0),O>0){const Dt=Xi(S,x,o,a);n.arc(Dt.x,Dt.y,O,x+Math.PI,E-Mt)}const zt=Xi(I,E,o,a);if(n.lineTo(zt.x,zt.y),C>0){const Dt=Xi(I,T,o,a);n.arc(Dt.x,Dt.y,C,E-Mt,T)}}else{n.moveTo(o,a);const tt=Math.cos(T)*h+o,dt=Math.sin(T)*h+a;n.lineTo(tt,dt);const ht=Math.cos(A)*h+o,zt=Math.sin(A)*h+a;n.lineTo(ht,zt)}n.closePath()}function p1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){Ka(n,t,e,i,c,s);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%bt||bt))}return Ka(n,t,e,i,c,s),n.fill(),c}function g1(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:g}=c,y=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,y?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let b=t.endAngle;if(r){Ka(n,t,e,i,b,s);for(let v=0;v<r;++v)n.stroke();isNaN(a)||(b=o+(a%bt||bt))}y&&d1(n,t,b),c.selfJoin&&b-o>=ct&&g===0&&d!=="miter"&&u1(n,t,b),r||(Ka(n,t,e,i,b,s),n.stroke())}class sr extends Ve{constructor(e){super();U(this,"circumference");U(this,"endAngle");U(this,"fullCircles");U(this,"innerRadius");U(this,"outerRadius");U(this,"pixelMargin");U(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=Ib(r,{x:e,y:i}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),g=(this.options.spacing+this.options.borderWidth)/2,y=X(f,l-c),b=Lr(o,c,l)&&c!==l,v=y>=bt||b,E=pn(a,d+g,h+g);return v&&E}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:i+Math.cos(h)*f,y:s+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>bt?Math.floor(s/bt):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(ct,s||0)),d=r*l;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,p1(e,this,d,o,a),g1(e,this,d,o,a),e.restore()}}U(sr,"id","arc"),U(sr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),U(sr,"defaultRoutes",{backgroundColor:"backgroundColor"}),U(sr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function s_(n,t,e=t){n.lineCap=X(e.borderCapStyle,t.borderCapStyle),n.setLineDash(X(e.borderDash,t.borderDash)),n.lineDashOffset=X(e.borderDashOffset,t.borderDashOffset),n.lineJoin=X(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=X(e.borderWidth,t.borderWidth),n.strokeStyle=X(e.borderColor,t.borderColor)}function m1(n,t,e){n.lineTo(e.x,e.y)}function y1(n){return n.stepped?Bk:n.tension||n.cubicInterpolationMode==="monotone"?$k:m1}function r_(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,c=Math.max(s,o),l=Math.min(r,a),d=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!d?i+l-c:l-c}}function v1(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:c,ilen:l}=r_(s,e,i),d=y1(r);let{move:h=!0,reverse:f}=i||{},g,y,b;for(g=0;g<=l;++g)y=s[(a+(f?l-g:g))%o],!y.skip&&(h?(n.moveTo(y.x,y.y),h=!1):d(n,b,y,f,r.stepped),b=y);return c&&(y=s[(a+(f?l:0))%o],d(n,b,y,f,r.stepped)),!!c}function b1(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=r_(s,e,i),{move:c=!0,reverse:l}=i||{};let d=0,h=0,f,g,y,b,v,E;const P=D=>(o+(l?a-D:D))%r,C=()=>{b!==v&&(n.lineTo(d,v),n.lineTo(d,b),n.lineTo(d,E))};for(c&&(g=s[P(0)],n.moveTo(g.x,g.y)),f=0;f<=a;++f){if(g=s[P(f)],g.skip)continue;const D=g.x,O=g.y,L=D|0;L===y?(O<b?b=O:O>v&&(v=O),d=(h*d+D)/++h):(C(),n.lineTo(D,O),y=L,h=0,b=v=O),E=O}C()}function lu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?b1:v1}function _1(n){return n.stepped?vC:n.tension||n.cubicInterpolationMode==="monotone"?bC:wi}function w1(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),s_(n,t.options),n.stroke(s)}function E1(n,t,e,i){const{segments:s,options:r}=t,o=lu(t);for(const a of s)s_(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const T1=typeof Path2D=="function";function I1(n,t,e,i){T1&&!t.options.segment?w1(n,t,e,i):E1(n,t,e,i)}class Bn extends Ve{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;uC(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=AC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=Hb(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=_1(i);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],g=r[h],y=r[f];if(g===y){a.push(g);continue}const b=Math.abs((s-g[e])/(y[e]-g[e])),v=c(g,y,b,i.stepped);v[e]=t[e],a.push(v)}return a.length===1?a[0]:a}pathSegment(t,e,i){return lu(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=lu(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),I1(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(Bn,"id","line"),U(Bn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(Bn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(Bn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Ag(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class ga extends Ve{constructor(e){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return Ag(this,e,"x",i)}inYRange(e,i){return Ag(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!mn(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,ru(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}U(ga,"id","point"),U(ga,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(ga,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function o_(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,s),c=Math.max(e,s),l=i-h,d=i+h):(h=r/2,a=e-h,c=e+h,l=Math.min(i,s),d=Math.max(i,s)),{left:a,top:l,right:c,bottom:d}}function $n(n,t,e,i){return n?0:Ut(t,e,i)}function A1(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=Db(i);return{t:$n(s.top,r.top,0,e),r:$n(s.right,r.right,0,t),b:$n(s.bottom,r.bottom,0,e),l:$n(s.left,r.left,0,t)}}function x1(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Pi(s),o=Math.min(t,e),a=n.borderSkipped,c=i||st(s);return{topLeft:$n(!c||a.top||a.left,r.topLeft,0,o),topRight:$n(!c||a.top||a.right,r.topRight,0,o),bottomLeft:$n(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:$n(!c||a.bottom||a.right,r.bottomRight,0,o)}}function S1(n){const t=o_(n),e=t.right-t.left,i=t.bottom-t.top,s=A1(n,e/2,i/2),r=x1(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function El(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&o_(n,i);return a&&(s||pn(t,a.left,a.right))&&(r||pn(e,a.top,a.bottom))}function P1(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function k1(n,t){n.rect(t.x,t.y,t.w,t.h)}function Tl(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class ma extends Ve{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=S1(this),a=P1(o.radius)?Vr:k1;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Tl(o,e,r)),t.clip(),a(t,Tl(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Tl(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return El(this,t,e,i)}inXRange(t,e){return El(this,t,null,e)}inYRange(t,e){return El(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}U(ma,"id","bar"),U(ma,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),U(ma,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var C1=Object.freeze({__proto__:null,ArcElement:sr,BarElement:ma,LineElement:Bn,PointElement:ga});const uu=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],xg=uu.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function a_(n){return uu[n%uu.length]}function c_(n){return xg[n%xg.length]}function R1(n,t){return n.borderColor=a_(t),n.backgroundColor=c_(t),++t}function M1(n,t){return n.backgroundColor=n.data.map(()=>a_(t++)),t}function D1(n,t){return n.backgroundColor=n.data.map(()=>c_(t++)),t}function O1(n){let t=0;return(e,i)=>{const s=n.getDatasetMeta(i).controller;s instanceof Ii?t=M1(e,t):s instanceof br?t=D1(e,t):s&&(t=R1(e,t))}}function Sg(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function N1(n){return n&&(n.borderColor||n.backgroundColor)}function L1(){return Et.borderColor!=="rgba(0,0,0,0.1)"||Et.backgroundColor!=="rgba(0,0,0,0.1)"}var V1={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:i},options:s}=n.config,{elements:r}=s,o=Sg(i)||N1(s)||r&&Sg(r)||L1();if(!e.forceOverride&&o)return;const a=O1(n);i.forEach(a)}};function F1(n,t,e,i,s){const r=s.samples||i;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,g,y,b;for(o[c++]=n[d],h=0;h<r-2;h++){let v=0,E=0,P;const C=Math.floor((h+1)*a)+1+t,D=Math.min(Math.floor((h+2)*a)+1,e)+t,O=D-C;for(P=C;P<D;P++)v+=n[P].x,E+=n[P].y;v/=O,E/=O;const L=Math.floor(h*a)+1+t,I=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:_,y:T}=n[d];for(g=y=-1,P=L;P<I;P++)y=.5*Math.abs((_-v)*(n[P].y-T)-(_-n[P].x)*(E-T)),y>g&&(g=y,f=n[P],b=P);o[c++]=f,d=b}return o[c++]=n[l],o}function B1(n,t,e,i){let s=0,r=0,o,a,c,l,d,h,f,g,y,b;const v=[],E=t+e-1,P=n[t].x,D=n[E].x-P;for(o=t;o<t+e;++o){a=n[o],c=(a.x-P)/D*i,l=a.y;const O=c|0;if(O===d)l<y?(y=l,h=o):l>b&&(b=l,f=o),s=(r*s+a.x)/++r;else{const L=o-1;if(!et(h)&&!et(f)){const I=Math.min(h,f),_=Math.max(h,f);I!==g&&I!==L&&v.push({...n[I],x:s}),_!==g&&_!==L&&v.push({...n[_],x:s})}o>0&&L!==g&&v.push(n[L]),v.push(a),d=O,r=0,y=b=l,h=f=g=o}}return v}function l_(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Pg(n){n.data.datasets.forEach(t=>{l_(t)})}function $1(n,t){const e=t.length;let i=0,s;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(i=Ut(gn(t,r.axis,o).lo,0,e-1)),l?s=Ut(gn(t,r.axis,a).hi+1,i,e)-i:s=e-i,{start:i,count:s}}var U1={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Pg(n);return}const i=n.width;n.data.datasets.forEach((s,r)=>{const{_data:o,indexAxis:a}=s,c=n.getDatasetMeta(r),l=o||s.data;if(nr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=$1(c,l);const g=e.threshold||4*i;if(f<=g){l_(s);return}et(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(b){this._data=b}}));let y;switch(e.algorithm){case"lttb":y=F1(l,h,f,i,e);break;case"min-max":y=B1(l,h,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=y})},destroy(n){Pg(n)}};function z1(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:c,end:l}=a;l=Sc(c,l,s);const d=du(e,s[c],s[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:s[c],end:s[l]});continue}const h=Hb(t,d);for(const f of h){const g=du(e,r[f.start],r[f.end],f.loop),y=jb(a,s,g);for(const b of y)o.push({source:b,target:f,start:{[e]:kg(d,g,"start",Math.max)},end:{[e]:kg(d,g,"end",Math.min)}})}}return o}function du(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=ne(s),r=ne(r)),{property:n,start:s,end:r}}function j1(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Sc(o,a,s);const c=s[o],l=s[a];i!==null?(r.push({x:c.x,y:i}),r.push({x:l.x,y:i})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function Sc(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function kg(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function u_(n,t){let e=[],i=!1;return wt(n)?(i=!0,e=n):e=j1(n,t),e.length?new Bn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Cg(n){return n&&n.fill!==!1}function H1(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!Ct(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function q1(n,t,e){const i=Y1(n);if(st(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return Ct(s)&&Math.floor(s)===s?W1(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function W1(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function G1(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:st(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function K1(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:st(n)?i=n.value:i=t.getBaseValue(),i}function Y1(n){const t=n.options,e=t.fill;let i=X(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function X1(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=Q1(t,e);a.push(u_({x:null,y:t.bottom},i));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)J1(s,o[d],a)}return new Bn({points:s,options:{}})}function Q1(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function J1(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:c}=Z1(r,t,"x");if(!(!c||o&&a)){if(o)i.unshift(c);else if(n.push(c),!a)break}}n.push(...i)}function Z1(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(pn(s,h,f)){a=s===h,c=s===f;break}}return{first:a,last:c,point:i}}class d_{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:bt},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function tM(n){const{chart:t,fill:e,line:i}=n;if(Ct(e))return eM(t,e);if(e==="stack")return X1(n);if(e==="shape")return!0;const s=nM(n);return s instanceof d_?s:u_(s,i)}function eM(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function nM(n){return(n.scale||{}).getPointPositionForValue?sM(n):iM(n)}function iM(n){const{scale:t={},fill:e}=n,i=G1(e,t);if(Ct(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function sM(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=K1(e,t,r),a=[];if(i.grid.circular){const c=t.getPointPositionForValue(0,r);return new d_({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)a.push(t.getPointPositionForValue(c,o));return a}function Il(n,t,e){const i=tM(t),{chart:s,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:g=h}=d||{},y=s.getDatasetMeta(r),b=qb(s,y);i&&o.points.length&&(Tc(n,e),rM(n,{line:o,target:i,above:f,below:g,area:e,scale:a,axis:c,clip:b}),Ic(n))}function rM(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==s&&(l==="x"?(Rg(n,i,o.top),Al(n,{line:e,target:i,color:s,scale:a,property:l,clip:c}),n.restore(),n.save(),Rg(n,i,o.bottom)):l==="y"&&(Mg(n,i,o.left),Al(n,{line:e,target:i,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Mg(n,i,o.right),d=s)),Al(n,{line:e,target:i,color:d,scale:a,property:l,clip:c}),n.restore()}function Rg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[Sc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Mg(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:c,end:l}=a,d=s[c],h=s[Sc(c,l,s)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Al(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,c=z1(e,i,s);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:g=r}={}}=l,y=i!==!0;n.save(),n.fillStyle=g,oM(n,o,a,y&&du(s,h,f)),n.beginPath();const b=!!e.pathSegment(n,l);let v;if(y){b?n.closePath():Dg(n,i,f,s);const E=!!i.pathSegment(n,d,{move:b,reverse:!0});v=b&&E,v||Dg(n,i,h,s)}n.closePath(),n.fill(v?"evenodd":"nonzero"),n.restore()}}function oM(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=s.top,d=a,h=s.bottom):(c=s.left,l=o,d=s.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Dg(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var aM={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,c;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Bn&&(c={visible:n.isDatasetVisible(o),index:o,fill:q1(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=H1(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&Il(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;Cg(r)&&Il(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Cg(i)||e.drawTime!=="beforeDatasetDraw"||Il(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Og=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},cM=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Ng extends Ve{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=pt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=Ft(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Og(i,r);let l,d;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=s+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,g=-d;return this.legendItems.forEach((y,b)=>{const v=i+e/2+r.measureText(y.text).width;(b===0||l[l.length-1]+v+2*a>o)&&(h+=d,l[l.length-(b>0?0:1)]=0,g+=d,f++),c[b]={left:0,top:g,row:f,width:v,height:s},l[l.length-1]+=v+a}),h}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,g=0,y=0,b=0;return this.legendItems.forEach((v,E)=>{const{itemWidth:P,itemHeight:C}=lM(i,e,r,v,s);E>0&&g+C+2*a>d&&(h+=f+a,l.push({width:f,height:g}),y+=f+a,b++,f=g=0),c[E]={left:y,top:g,col:b,width:P,height:C},f=Math.max(f,P),g+=C+a}),h+=f,l.push({width:f,height:g}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=ds(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=Zt(i,this.left+s,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=Zt(i,this.left+s,this.right-this.lineWidths[a])),l.top+=this.top+t+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let a=0,c=Zt(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=Zt(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Tc(t,this),this._draw(),Ic(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Et.color,c=ds(t.rtl,this.left,this.width),l=Ft(o.font),{padding:d}=o,h=l.size,f=h/2;let g;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:y,boxHeight:b,itemHeight:v}=Og(o,h),E=function(L,I,_){if(isNaN(y)||y<=0||isNaN(b)||b<0)return;s.save();const T=X(_.lineWidth,1);if(s.fillStyle=X(_.fillStyle,a),s.lineCap=X(_.lineCap,"butt"),s.lineDashOffset=X(_.lineDashOffset,0),s.lineJoin=X(_.lineJoin,"miter"),s.lineWidth=T,s.strokeStyle=X(_.strokeStyle,a),s.setLineDash(X(_.lineDash,[])),o.usePointStyle){const A={radius:b*Math.SQRT2/2,pointStyle:_.pointStyle,rotation:_.rotation,borderWidth:T},S=c.xPlus(L,y/2),k=I+f;Mb(s,A,S,k,o.pointStyleWidth&&y)}else{const A=I+Math.max((h-b)/2,0),S=c.leftForLtr(L,y),k=Pi(_.borderRadius);s.beginPath(),Object.values(k).some(x=>x!==0)?Vr(s,{x:S,y:A,w:y,h:b,radius:k}):s.rect(S,A,y,b),s.fill(),T!==0&&s.stroke()}s.restore()},P=function(L,I,_){Bi(s,_.text,L,I+v/2,l,{strikethrough:_.hidden,textAlign:c.textAlign(_.textAlign)})},C=this.isHorizontal(),D=this._computeTitleHeight();C?g={x:Zt(r,this.left+d,this.right-i[0]),y:this.top+d+D,line:0}:g={x:this.left+d,y:Zt(r,this.top+D+d,this.bottom-e[0].height),line:0},$b(this.ctx,t.textDirection);const O=v+d;this.legendItems.forEach((L,I)=>{s.strokeStyle=L.fontColor,s.fillStyle=L.fontColor;const _=s.measureText(L.text).width,T=c.textAlign(L.textAlign||(L.textAlign=o.textAlign)),A=y+f+_;let S=g.x,k=g.y;c.setWidth(this.width),C?I>0&&S+A+d>this.right&&(k=g.y+=O,g.line++,S=g.x=Zt(r,this.left+d,this.right-i[g.line])):I>0&&k+O>this.bottom&&(S=g.x=S+e[g.line].width+d,g.line++,k=g.y=Zt(r,this.top+D+d,this.bottom-e[g.line].height));const x=c.x(S);if(E(x,k,L),S=Pk(T,S+y+f,C?S+A:this.right,t.rtl),P(c.x(S),k,L),C)g.x+=A+d;else if(typeof L.text!="string"){const rt=l.lineHeight;g.y+=h_(L,rt)+d}else g.y+=O}),Ub(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=Ft(e.font),s=oe(e.padding);if(!e.display)return;const r=ds(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=i.size/2,l=s.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=Zt(t.align,h,this.right-f);else{const y=this.columnSizes.reduce((b,v)=>Math.max(b,v.height),0);d=l+Zt(t.align,this.top,this.bottom-y-t.labels.padding-this._computeTitleHeight())}const g=Zt(a,h,h+f);o.textAlign=r.textAlign(Nd(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,Bi(o,e.text,g,d,i)}_computeTitleHeight(){const t=this.options.title,e=Ft(t.font),i=oe(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(pn(t,this.left,this.right)&&pn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],pn(t,s.left,s.left+s.width)&&pn(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!hM(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=cM(s,i);s&&!r&&pt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&pt(e.onHover,[t,i,this],this)}else i&&pt(e.onClick,[t,i,this],this)}}function lM(n,t,e,i,s){const r=uM(i,n,t,e),o=dM(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function uM(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function dM(n,t,e){let i=n;return typeof t.text!="string"&&(i=h_(t,e)),i}function h_(n,t){const e=n.text?n.text.length:0;return t*e}function hM(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var fM={id:"legend",_element:Ng,start(n,t,e){const i=n.legend=new Ng({ctx:n.ctx,options:e,chart:n});se.configure(n,i,e),se.addBox(n,i)},stop(n){se.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;se.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=oe(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class Hd extends Ve{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const s=wt(i.text)?i.text.length:1;this._padding=oe(i.padding);const r=s*Ft(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:s,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=Zt(a,i,r),h=e+t,l=r-i):(o.position==="left"?(d=i+t,h=Zt(a,s,e),c=ct*-.5):(d=r-t,h=Zt(a,e,s),c=ct*.5),l=s-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Ft(e.font),r=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);Bi(t,e.text,0,0,i,{color:e.color,maxWidth:c,rotation:l,textAlign:Nd(e.align),textBaseline:"middle",translation:[o,a]})}}function pM(n,t){const e=new Hd({ctx:n.ctx,options:t,chart:n});se.configure(n,e,t),se.addBox(n,e),n.titleBlock=e}var gM={id:"title",_element:Hd,start(n,t,e){pM(n,e)},stop(n){const t=n.titleBlock;se.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const i=n.titleBlock;se.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ho=new WeakMap;var mM={id:"subtitle",start(n,t,e){const i=new Hd({ctx:n.ctx,options:e,chart:n});se.configure(n,i,e),se.addBox(n,i),Ho.set(n,i)},stop(n){se.removeBox(n,Ho.get(n)),Ho.delete(n)},beforeUpdate(n,t,e){const i=Ho.get(n);se.configure(n,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const rr={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();i.add(c.x),s+=c.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,c)=>a+c)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=iu(t,l);d<s&&(s=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,i=c.y}return{x:e,y:i}}};function Be(n,t){return t&&(wt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function un(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function yM(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Lg(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Ft(t.bodyFont),l=Ft(t.titleFont),d=Ft(t.footerFont),h=r.length,f=s.length,g=i.length,y=oe(t.padding);let b=y.height,v=0,E=i.reduce((D,O)=>D+O.before.length+O.lines.length+O.after.length,0);if(E+=n.beforeBody.length+n.afterBody.length,h&&(b+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),E){const D=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;b+=g*D+(E-g)*c.lineHeight+(E-1)*t.bodySpacing}f&&(b+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let P=0;const C=function(D){v=Math.max(v,e.measureText(D).width+P)};return e.save(),e.font=l.string,ut(n.title,C),e.font=c.string,ut(n.beforeBody.concat(n.afterBody),C),P=t.displayColors?o+2+t.boxPadding:0,ut(i,D=>{ut(D.before,C),ut(D.lines,C),ut(D.after,C)}),P=0,e.font=d.string,ut(n.footer,C),e.restore(),v+=y.width,{width:v,height:b}}function vM(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function bM(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function _M(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return i==="center"?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),bM(l,n,t,e)&&(l="center"),l}function Vg(n,t,e){const i=e.yAlign||t.yAlign||vM(n,e);return{xAlign:e.xAlign||t.xAlign||_M(n,t,e,i),yAlign:i}}function wM(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function EM(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function Fg(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=s+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:g}=Pi(o);let y=wM(t,a);const b=EM(t,c,l);return c==="center"?a==="left"?y+=l:a==="right"&&(y-=l):a==="left"?y-=Math.max(d,f)+s:a==="right"&&(y+=Math.max(h,g)+s),{x:Ut(y,0,i.width-t.width),y:Ut(b,0,i.height-t.height)}}function qo(n,t,e){const i=oe(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Bg(n){return Be([],un(n))}function TM(n,t,e){return ui(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function $g(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const f_={beforeTitle:an,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:an,beforeBody:an,beforeLabel:an,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return et(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:an,afterBody:an,beforeFooter:an,footer:an,afterFooter:an};function fe(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?f_[t].call(e,i):s}class hu extends Ve{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new Wb(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=TM(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=fe(i,"beforeTitle",this,t),r=fe(i,"title",this,t),o=fe(i,"afterTitle",this,t);let a=[];return a=Be(a,un(s)),a=Be(a,un(r)),a=Be(a,un(o)),a}getBeforeBody(t,e){return Bg(fe(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return ut(t,r=>{const o={before:[],lines:[],after:[]},a=$g(i,r);Be(o.before,un(fe(a,"beforeLabel",this,r))),Be(o.lines,fe(a,"label",this,r)),Be(o.after,un(fe(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Bg(fe(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=fe(i,"beforeFooter",this,t),r=fe(i,"footer",this,t),o=fe(i,"afterFooter",this,t);let a=[];return a=Be(a,un(s)),a=Be(a,un(r)),a=Be(a,un(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(yM(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,i))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,i))),ut(a,d=>{const h=$g(t.callbacks,d);s.push(fe(h,"labelColor",this,d)),r.push(fe(h,"labelPointStyle",this,d)),o.push(fe(h,"labelTextColor",this,d))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=rr[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=Lg(this,i),l=Object.assign({},a,c),d=Vg(this.chart,i,l),h=Fg(i,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Pi(a),{x:f,y:g}=t,{width:y,height:b}=e;let v,E,P,C,D,O;return r==="center"?(D=g+b/2,s==="left"?(v=f,E=v-o,C=D+o,O=D-o):(v=f+y,E=v+o,C=D-o,O=D+o),P=v):(s==="left"?E=f+Math.max(c,d)+o:s==="right"?E=f+y-Math.max(l,h)-o:E=this.caretX,r==="top"?(C=g,D=C-o,v=E-o,P=E+o):(C=g+b,D=C+o,v=E+o,P=E-o),O=C),{x1:v,x2:E,x3:P,y1:C,y2:D,y3:O}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,c;if(r){const l=ds(i.rtl,this.x,this.width);for(t.x=qo(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=Ft(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l}=r,d=Ft(r.bodyFont),h=qo(this,"left",r),f=s.x(h),g=c<d.lineHeight?(d.lineHeight-c)/2:0,y=e.y+g;if(r.usePointStyle){const b={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=s.leftForLtr(f,l)+l/2,E=y+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,ru(t,b,v,E),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,ru(t,b,v,E)}else{t.lineWidth=st(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const b=s.leftForLtr(f,l),v=s.leftForLtr(s.xPlus(f,1),l-2),E=Pi(o.borderRadius);Object.values(E).some(P=>P!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Vr(t,{x:b,y,w:l,h:c,radius:E}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Vr(t,{x:v,y:y+1,w:l-2,h:c-2,radius:E}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(b,y,l,c),t.strokeRect(b,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(v,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=i,h=Ft(i.bodyFont);let f=h.lineHeight,g=0;const y=ds(i.rtl,this.x,this.width),b=function(_){e.fillText(_,y.x(t.x+g),t.y+f/2),t.y+=f+r},v=y.textAlign(o);let E,P,C,D,O,L,I;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=qo(this,v,i),e.fillStyle=i.bodyColor,ut(this.beforeBody,b),g=a&&v!=="right"?o==="center"?l/2+d:l+2+d:0,D=0,L=s.length;D<L;++D){for(E=s[D],P=this.labelTextColors[D],e.fillStyle=P,ut(E.before,b),C=E.lines,a&&C.length&&(this._drawColorBox(e,t,D,y,i),f=Math.max(h.lineHeight,c)),O=0,I=C.length;O<I;++O)b(C[O]),f=h.lineHeight;ut(E.after,b)}g=0,f=h.lineHeight,ut(this.afterBody,b),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const c=ds(i.rtl,this.x,this.width);for(t.x=qo(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=c.textAlign(i.footerAlign),e.textBaseline="middle",o=Ft(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=i,{topLeft:h,topRight:f,bottomLeft:g,bottomRight:y}=Pi(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+l,c+d-y),e.quadraticCurveTo(a+l,c+d,a+l-y,c+d),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+g,c+d),e.quadraticCurveTo(a,c+d,a,c+d-g),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=rr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Lg(this,t),c=Object.assign({},o,this._size),l=Vg(e,t,c),d=Fg(t,c,l,e);(s._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=oe(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),$b(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),Ub(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!za(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),c=e||!za(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=rr[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}U(hu,"positioners",rr);var IM={id:"tooltip",_element:hu,positioners:rr,afterInit(n,t,e){e&&(n.tooltip=new hu({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:f_},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},AM=Object.freeze({__proto__:null,Colors:V1,Decimation:U1,Filler:aM,Legend:fM,SubTitle:mM,Title:gM,Tooltip:IM});const xM=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function SM(n,t,e,i){const s=n.indexOf(t);if(s===-1)return xM(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const PM=(n,t)=>n===null?null:Ut(Math.round(n),0,t);function Ug(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class fu extends ji{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(et(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:SM(i,t,X(e,t),this._addedLabels),PM(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Ug.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(fu,"id","category"),U(fu,"defaults",{ticks:{callback:Ug}});function kM(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,g=r||1,y=d-1,{min:b,max:v}=t,E=!et(o),P=!et(a),C=!et(l),D=(v-b)/(h+1);let O=Lp((v-b)/y/g)*g,L,I,_,T;if(O<1e-14&&!E&&!P)return[{value:b},{value:v}];T=Math.ceil(v/O)-Math.floor(b/O),T>y&&(O=Lp(T*O/y/g)*g),et(c)||(L=Math.pow(10,c),O=Math.ceil(O*L)/L),s==="ticks"?(I=Math.floor(b/O)*O,_=Math.ceil(v/O)*O):(I=b,_=v),E&&P&&r&&wk((a-o)/r,O/1e3)?(T=Math.round(Math.min((a-o)/O,d)),O=(a-o)/T,I=o,_=a):C?(I=E?o:I,_=P?a:_,T=l-1,O=(_-I)/T):(T=(_-I)/O,mr(T,Math.round(T),O/1e3)?T=Math.round(T):T=Math.ceil(T));const A=Math.max(Vp(O),Vp(I));L=Math.pow(10,et(c)?A:c),I=Math.round(I*L)/L,_=Math.round(_*L)/L;let S=0;for(E&&(f&&I!==o?(e.push({value:o}),I<o&&S++,mr(Math.round((I+S*O)*L)/L,o,zg(o,D,n))&&S++):I<o&&S++);S<T;++S){const k=Math.round((I+S*O)*L)/L;if(P&&k>a)break;e.push({value:k})}return P&&f&&_!==a?e.length&&mr(e[e.length-1].value,a,zg(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!P||_===a)&&e.push({value:_}),e}function zg(n,t,{horizontal:e,minRotation:i}){const s=De(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class Ya extends ji{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return et(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=c=>s=e?s:c,a=c=>r=i?r:c;if(t){const c=Qe(s),l=Qe(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(s===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(s-c)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=kM(s,r);return t.bounds==="ticks"&&Tb(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return ro(t,this.chart.options.locale,this.options.ticks.format)}}class pu extends Ya{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ct(t)?t:0,this.max=Ct(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=De(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U(pu,"id","linear"),U(pu,"defaults",{ticks:{callback:Ec.formatters.numeric}});const Br=n=>Math.floor(Vn(n)),vi=(n,t)=>Math.pow(10,Br(n)+t);function jg(n){return n/Math.pow(10,Br(n))===1}function Hg(n,t,e){const i=Math.pow(10,e),s=Math.floor(n/i);return Math.ceil(t/i)-s}function CM(n,t){const e=t-n;let i=Br(e);for(;Hg(n,t,i)>10;)i++;for(;Hg(n,t,i)<10;)i--;return Math.min(i,Br(n))}function RM(n,{min:t,max:e}){t=ve(n.min,t);const i=[],s=Br(t);let r=CM(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=s>r?Math.pow(10,s):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=ve(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)i.push({value:f,major:jg(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const g=ve(n.max,f);return i.push({value:g,major:jg(g),significand:h}),i}class gu extends ji{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Ya.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return Ct(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ct(t)?Math.max(0,t):null,this.max=Ct(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ct(this._userMin)&&(this.min=t===vi(this.min,0)?vi(this.min,-1):vi(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const r=a=>i=t?i:a,o=a=>s=e?s:a;i===s&&(i<=0?(r(1),o(10)):(r(vi(i,-1)),o(vi(s,1)))),i<=0&&r(vi(s,-1)),s<=0&&o(vi(i,1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=RM(e,this);return t.bounds==="ticks"&&Tb(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":ro(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Vn(t),this._valueRange=Vn(this.max)-Vn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Vn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}U(gu,"id","logarithmic"),U(gu,"defaults",{ticks:{callback:Ec.formatters.logarithmic,major:{enabled:!0}}});function mu(n){const t=n.ticks;if(t.display&&n.display){const e=oe(t.backdropPadding);return X(t.font&&t.font.size,Et.font.size)+e.height}return 0}function MM(n,t,e){return e=wt(e)?e:[e],{w:Fk(n,t.string,e),h:e.length*t.lineHeight}}function qg(n,t,e,i,s){return n===i||n===s?{start:t-e/2,end:t+e/2}:n<i||n>s?{start:t-e,end:t}:{start:t,end:t+e}}function DM(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),i=[],s=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?ct/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));s[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+s[c],a),h=Ft(l.font),f=MM(n.ctx,h,n._pointLabels[c]);i[c]=f;const g=ne(n.getIndexAngle(c)+a),y=Math.round(Dd(g)),b=qg(y,d.x,f.w,0,180),v=qg(y,d.y,f.h,90,270);OM(e,t,g,b,v)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=VM(n,i,s)}function OM(n,t,e,i,s){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/r,n.l=Math.min(n.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),s.start<t.t?(c=(t.t-s.start)/o,n.t=Math.min(n.t,t.t-c)):s.end>t.b&&(c=(s.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function NM(n,t,e){const i=n.drawingArea,{extra:s,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,i+s+o,r),l=Math.round(Dd(ne(c.angle+Mt))),d=$M(c.y,a.h,l),h=FM(l),f=BM(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function LM(n,t){if(!t)return!0;const{left:e,top:i,right:s,bottom:r}=n;return!(mn({x:e,y:i},t)||mn({x:e,y:r},t)||mn({x:s,y:i},t)||mn({x:s,y:r},t))}function VM(n,t,e){const i=[],s=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:mu(r)/2,additionalAngle:o?ct/s:0};let l;for(let d=0;d<s;d++){c.padding=e[d],c.size=t[d];const h=NM(n,d,c);i.push(h),a==="auto"&&(h.visible=LM(h,l),h.visible&&(l=h))}return i}function FM(n){return n===0||n===180?"center":n<180?"left":"right"}function BM(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function $M(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function UM(n,t,e){const{left:i,top:s,right:r,bottom:o}=e,{backdropColor:a}=t;if(!et(a)){const c=Pi(t.borderRadius),l=oe(t.backdropPadding);n.fillStyle=a;const d=i-l.left,h=s-l.top,f=r-i+l.width,g=o-s+l.height;Object.values(c).some(y=>y!==0)?(n.beginPath(),Vr(n,{x:d,y:h,w:f,h:g,radius:c}),n.fill()):n.fillRect(d,h,f,g)}}function zM(n,t){const{ctx:e,options:{pointLabels:i}}=n;for(let s=t-1;s>=0;s--){const r=n._pointLabelItems[s];if(!r.visible)continue;const o=i.setContext(n.getPointLabelContext(s));UM(e,o,r);const a=Ft(o.font),{x:c,y:l,textAlign:d}=r;Bi(e,n._pointLabels[s],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function p_(n,t,e,i){const{ctx:s}=n;if(e)s.arc(n.xCenter,n.yCenter,t,0,bt);else{let r=n.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<i;o++)r=n.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function jM(n,t,e,i,s){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!i||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(s.dash||[]),r.lineDashOffset=s.dashOffset,r.beginPath(),p_(n,e,o,i),r.closePath(),r.stroke(),r.restore())}function HM(n,t,e){return ui(n,{label:e,index:t,type:"pointLabel"})}class or extends Ya{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=oe(mu(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Ct(t)&&!isNaN(t)?t:0,this.max=Ct(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/mu(this.options))}generateTickLabels(t){Ya.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const s=pt(this.options.pointLabels.callback,[e,i],this);return s||s===0?s:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?DM(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){const e=bt/(this._pointLabels.length||1),i=this.options.startAngle||0;return ne(t*e+De(i))}getDistanceFromCenterForValue(t){if(et(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(et(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return HM(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-Mt+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),p_(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&zM(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),g=s.setContext(f),y=r.setContext(f);jM(this,g,c,o,y)}}),i.display){for(t.save(),a=o-1;a>=0;a--){const d=i.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=i.setContext(this.getContext(c)),d=Ft(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=oe(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}Bi(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}U(or,"id","radialLinear"),U(or,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ec.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(or,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(or,"descriptors",{angleLines:{_fallback:"grid"}});const Pc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},me=Object.keys(Pc);function Wg(n,t){return n-t}function Gg(n,t){if(et(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Ct(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(bs(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Kg(n,t,e,i){const s=me.length;for(let r=me.indexOf(n);r<s-1;++r){const o=Pc[me[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return me[r]}return me[s-1]}function qM(n,t,e,i,s){for(let r=me.length-1;r>=me.indexOf(e);r--){const o=me[r];if(Pc[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return me[e?me.indexOf(e):0]}function WM(n){for(let t=me.indexOf(n)+1,e=me.length;t<e;++t)if(Pc[me[t]].common)return me[t]}function Yg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=Od(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function GM(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=e[a],c>=0&&(t[c].major=!0);return t}function Xg(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:GM(n,i,s,e)}class $r extends ji{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new eR._date(t.adapters.date);s.init(e),gr(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Gg(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(s=Math.min(s,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),s=Ct(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=Ct(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=Ak(s,r,o);return this._unit=e.unit||(i.autoSkip?Kg(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):qM(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:WM(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Xg(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Ut(e,0,o),i=Ut(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Kg(r.minUnit,e,i,this._getLabelCapacity(e)),a=X(s.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=bs(c)||c===!0,d={};let h=e,f,g;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const y=s.ticks.source==="data"&&this.getDataTimestamps();for(f=h,g=0;f<i;f=+t.add(f,a,o),g++)Yg(d,f,y);return(f===i||s.bounds==="ticks"||g===1)&&Yg(d,f,y),Object.keys(d).sort(Wg).map(b=>+b)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return pt(o,[t,e,i],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=i[e],g=l&&h&&f&&f.major;return this._adapter.format(t,s||(g?h:d))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=De(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,Xg(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Gg(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return xb(t.sort(Wg))}}U($r,"id","time"),U($r,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Wo(n,t,e){let i=0,s=n.length-1,r,o,a,c;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=gn(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:c}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=gn(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:c}=n[s]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class yu extends $r{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Wo(e,this.min),this._tableRange=Wo(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)d=s[o+1],c=s[o-1],l=s[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Wo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Wo(this._table,i*this._tableRange+this._minPos,!0)}}U(yu,"id","timeseries"),U(yu,"defaults",$r.defaults);var KM=Object.freeze({__proto__:null,CategoryScale:fu,LinearScale:pu,LogarithmicScale:gu,RadialLinearScale:or,TimeScale:$r,TimeSeriesScale:yu});const YM=[tR,C1,AM,KM];je.register(...YM);const hs={};function qd(n){hs[n]&&(hs[n].destroy(),delete hs[n])}function g_(){const n=document.documentElement.getAttribute("data-theme")==="dark";return{textColor:n?"#94A3B8":"#64748B",gridColor:n?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",bgColor:n?"#1E2235":"#FFFFFF"}}function Qg(n,t){const e=document.getElementById(n);if(!e)return;if(qd(n),!t||t.length===0){e.getContext("2d").clearRect(0,0,e.width,e.height);return}g_();const i=new je(e,{type:"doughnut",data:{labels:t.map(s=>`${s.emoji} ${s.category}`),datasets:[{data:t.map(s=>s.amount),backgroundColor:IS.slice(0,t.length),borderWidth:0,hoverBorderWidth:2,hoverBorderColor:"#fff",borderRadius:4,spacing:2}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"65%",plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,titleFont:{size:13,weight:"600"},bodyFont:{size:12},callbacks:{label:function(s){const r=s.dataset.data.reduce((a,c)=>a+c,0),o=(s.parsed/r*100).toFixed(1);return` ₹${s.parsed.toLocaleString("en-IN")} (${o}%)`}}}},animation:{animateRotate:!0,duration:800,easing:"easeOutQuart"}}});return hs[n]=i,i}function XM(n,t,e,i){const s=document.getElementById(n);if(!s)return;qd(n);const{textColor:r,gridColor:o}=g_(),a=new je(s,{type:"bar",data:{labels:t,datasets:[{label:"Income",data:e,backgroundColor:"rgba(16, 185, 129, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7},{label:"Expenses",data:i,backgroundColor:"rgba(239, 68, 68, 0.8)",borderRadius:6,borderSkipped:!1,barPercentage:.6,categoryPercentage:.7}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"top",labels:{color:r,padding:16,usePointStyle:!0,pointStyle:"rectRounded",font:{size:12,weight:"500"}}},tooltip:{backgroundColor:"rgba(26, 29, 46, 0.9)",titleColor:"#fff",bodyColor:"#fff",padding:12,cornerRadius:10,callbacks:{label:function(c){return` ${c.dataset.label}: ₹${c.parsed.y.toLocaleString("en-IN")}`}}}},scales:{x:{grid:{display:!1},ticks:{color:r,font:{size:11}}},y:{grid:{color:o},ticks:{color:r,font:{size:11},callback:function(c){return"₹"+c.toLocaleString("en-IN")}},beginAtZero:!0}},animation:{duration:800,easing:"easeOutQuart"}}});return hs[n]=a,a}function QM(){Object.keys(hs).forEach(n=>{qd(n)})}let ke={user:null,profile:null,accounts:[],transactions:[]},Ue=new Date().getMonth(),_r=new Date().getFullYear();function m_(n){ke={...ke,...n},QM();const{totalMoney:t}=ti(ke.accounts,ke.transactions),e=Bv(ke.accounts,ke.transactions),i=`${_r}-${String(Ue+1).padStart(2,"0")}`,s=$v(ke.transactions,i),r=s.income>0||s.expenses>0;return`
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Analytics & Reports 📊</h1>
        <p class="page-subtitle">Understand where your money comes from, where it goes, and where it is currently stored.</p>
      </div>

      <!-- Account Distribution Chart Card -->
      <div class="chart-card" style="margin-bottom: var(--space-6);">
        <h3 class="chart-title">Account Money Distribution (${H(t)})</h3>
        <div class="chart-container">
          <canvas id="accounts-distribution-chart"></canvas>
        </div>

        <div class="category-list">
          ${e.map((o,a)=>`
            <div class="category-item">
              <div class="category-color" style="background: ${Go(a)};"></div>
              <div class="category-info">
                <div class="category-name">${o.account.icon||"🏦"} ${o.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0,o.percentage)}%; background: ${Go(a)};"></div>
                </div>
              </div>
              <div>
                <div class="category-amount">${H(o.balance)}</div>
                <div class="category-percentage">${o.percentage.toFixed(1)}%</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Month Selector Navigation -->
      <div class="month-selector">
        <button class="month-nav-btn" id="btn-month-prev" title="Previous Month">❮</button>
        <div class="month-display">${Nv(Ue)} ${_r}</div>
        <button class="month-nav-btn" id="btn-month-next" title="Next Month">❯</button>
      </div>

      ${r?`
        <!-- Monthly Overview Cards -->
        <div class="analytics-overview">
          <div class="analytics-stat">
            <div class="analytics-stat-icon">📥</div>
            <div class="analytics-stat-value income">${H(s.income)}</div>
            <div class="analytics-stat-label">Total Income</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">📤</div>
            <div class="analytics-stat-value expense">${H(s.expenses)}</div>
            <div class="analytics-stat-label">Total Expenses</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">💰</div>
            <div class="analytics-stat-value savings">${H(s.savings)}</div>
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
              <div class="highlight-stat-detail">${H(s.highestCategory.amount)} (${s.highestCategory.percentage.toFixed(1)}%)</div>
            `:'<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>'}
          </div>

          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Single Expense</div>
            ${s.highestExpense?`
              <div class="highlight-stat-icon">${_c(s.highestExpense.category)}</div>
              <div class="highlight-stat-value">${s.highestExpense.reason||s.highestExpense.category}</div>
              <div class="highlight-stat-detail">${H(s.highestExpense.amount)}</div>
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
                  <div class="category-color" style="background: ${Go(a)};"></div>
                  <div class="category-info">
                    <div class="category-name">${o.emoji} ${o.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${o.percentage}%; background: ${Go(a)};"></div>
                    </div>
                  </div>
                  <div>
                    <div class="category-amount">${H(o.amount)}</div>
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
      `:OP()}
    </div>
  `}function Go(n){const t=["#6C63FF","#10B981","#F59E0B","#EF4444","#3B82F6","#8B5CF6","#EC4899","#14B8A6","#F97316","#64748B"];return t[n%t.length]}function y_(){const n=document.getElementById("btn-month-prev"),t=document.getElementById("btn-month-next");n&&(n.onclick=()=>{Ue===0?(Ue=11,_r--):Ue--,Jg()}),t&&(t.onclick=()=>{Ue===11?(Ue=0,_r++):Ue++,Jg()});const e=Bv(ke.accounts,ke.transactions);e.length>0&&setTimeout(()=>{Qg("accounts-distribution-chart",e.map(r=>({category:r.account.name,emoji:r.account.icon||"🏦",amount:r.balance})))},50);const i=`${_r}-${String(Ue+1).padStart(2,"0")}`,s=$v(ke.transactions,i);s.categories.length>0&&setTimeout(()=>{Qg("categories-chart",s.categories)},50),(s.income>0||s.expenses>0)&&setTimeout(()=>{XM("income-expense-bar-chart",[Nv(Ue)],[s.income],[s.expenses])},50)}function Jg(){const n=document.querySelector(".page");n&&(n.outerHTML=m_(ke),y_())}let ss={user:null,profile:null,transactions:[],budgets:[]};function JM(n){ss={...ss,...n};const t=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,{monthlyProgress:e,categoryProgress:i}=Xv(ss.budgets,ss.transactions,t);return`
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
            <div class="budget-title">${e?H(e.budget):"Not Set"}</div>
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
            <div>Spent: <strong>${H(e.spent)}</strong></div>
            <div>Remaining: <strong style="color: ${e.remaining<0?"var(--expense)":"var(--income)"};">${H(e.remaining)}</strong></div>
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
                  <span>Budget: ${H(s.budget)} | Spent: ${H(s.spent)}</span>
                  <span style="font-weight: 600; color: ${s.remaining<0?"var(--expense)":"var(--income)"};">
                    ${s.remaining<0?"Exceeded by ":"Remaining: "}${H(Math.abs(s.remaining))}
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
  `}function ZM(n){const t=document.getElementById("btn-set-budget-modal");t&&(t.onclick=()=>xl(n));const e=document.getElementById("btn-quick-monthly-budget");e&&(e.onclick=()=>xl(n,"monthly"));const i=document.getElementById("btn-add-category-budget");i&&(i.onclick=()=>xl(n,"category")),document.querySelectorAll(".btn-delete-budget").forEach(s=>{s.onclick=async()=>{const r=s.dataset.category;if(await Vi({icon:"🗑️",title:"Delete Budget",message:`Are you sure you want to remove the budget for ${r}?`,danger:!0}))try{await QS(ss.user.uid,r),q.success("Budget removed!"),n&&n()}catch{q.error("Unable to remove budget.")}}})}function xl(n,t="monthly"){const e=`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,"0")}`,i=`
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
          ${ks.map(s=>`<option value="${s.value}">${s.label}</option>`).join("")}
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
  `;he({title:"🎯 Set Budget Limit",content:i,onOpen:s=>{let r=t;const o=s.querySelector("#tab-b-monthly"),a=s.querySelector("#tab-b-category"),c=s.querySelector("#group-b-category");o.onclick=()=>{r="monthly",o.classList.add("active"),a.classList.remove("active"),c.style.display="none"},a.onclick=()=>{r="category",a.classList.add("active"),o.classList.remove("active"),c.style.display="block"},s.querySelector("#set-budget-form").onsubmit=async l=>{l.preventDefault();const d=s.querySelector("#budget-amount").value,h=s.querySelector("#budget-category").value;if(s.querySelector("#budget-amount-error").textContent="",!d||Number(d)<=0){s.querySelector("#budget-amount-error").textContent="Please enter a valid budget amount.";return}const f=s.querySelector("#btn-save-budget");f.disabled=!0,f.innerHTML='<span class="spinner"></span> Saving...';try{const g=ss.user.uid;r==="monthly"?await YS(g,d,e):await XS(g,h,d,e),Vt(),q.success("🎯 Budget set successfully!"),n&&n()}catch{q.error("Unable to save budget."),f.disabled=!1,f.innerHTML="Save Budget"}}}})}let rs={user:null,profile:null};function tD(n){var a;rs={...rs,...n};const{user:t,profile:e}=rs,i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(t==null?void 0:t.email)||(e==null?void 0:e.email)||"",r=i.charAt(0).toUpperCase(),o=e!=null&&e.createdAt?ci(e.createdAt.split("T")[0]):"Recently";return`
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

        ${(a=rs.profile)!=null&&a.pinEnabled?`
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
  `}function eD(n,t){const e=document.getElementById("btn-edit-profile");e&&(e.onclick=()=>{var c,l;const a=`
        <form id="edit-profile-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="profile-name-input">Full Name</label>
            <input type="text" id="profile-name-input" class="form-input" value="${((c=rs.profile)==null?void 0:c.name)||((l=rs.user)==null?void 0:l.displayName)||""}" required autofocus />
            <div class="form-error" id="profile-name-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-profile-name">Save Changes</button>
        </form>
      `;he({title:"✏️ Edit Profile",content:a,onOpen:d=>{d.querySelector("#edit-profile-form").onsubmit=async h=>{h.preventDefault();const f=d.querySelector("#profile-name-input").value,g=wc(f);if(g){d.querySelector("#profile-name-error").textContent=g;return}const y=d.querySelector("#btn-save-profile-name");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Saving...';try{await qS(f),Vt(),q.success("Profile updated!"),t&&t()}catch{q.error("Unable to update profile."),y.disabled=!1,y.innerHTML="Save Changes"}}}})});const i=document.getElementById("btn-change-password");i&&(i.onclick=()=>{he({title:"🔑 Change Password",content:`
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
      `,onOpen:a=>{a.querySelector("#change-pass-form").onsubmit=async c=>{c.preventDefault();const l=a.querySelector("#curr-pass").value,d=a.querySelector("#new-pass").value,h=a.querySelector("#confirm-new-pass").value;a.querySelector("#curr-pass-error").textContent="",a.querySelector("#new-pass-error").textContent="",a.querySelector("#confirm-new-pass-error").textContent="";const f=Sd(d);if(f){a.querySelector("#new-pass-error").textContent=f;return}const g=rb(d,h);if(g){a.querySelector("#confirm-new-pass-error").textContent=g;return}const y=a.querySelector("#btn-save-new-pass");y.disabled=!0,y.innerHTML='<span class="spinner"></span> Updating...';try{await WS(l,d),Vt(),q.success("Password updated successfully!")}catch{a.querySelector("#curr-pass-error").textContent="Incorrect current password or re-authentication failed.",y.disabled=!1,y.innerHTML="Update Password"}}}})});const s=document.getElementById("btn-profile-logout");s&&(s.onclick=async()=>{await Vi({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out of Money Control?",confirmText:"Log Out",danger:!0})&&(await Ed(),q.info("Logged out."),n&&n())});const r=document.getElementById("btn-profile-lock-app");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))})}function nD(n,t=[],e="money-control-transactions"){if(!n||n.length===0)throw new Error("No transactions to export.");const i=a=>{const c=t.find(l=>l.id===a);return c?c.name:""},s=["Date","Type","Amount","Reason","Category","From Account","To Account","Notes"],r=n.sort((a,c)=>new Date(a.date)-new Date(c.date)).map(a=>[a.date,a.type,a.amount,`"${(a.reason||"").replace(/"/g,'""')}"`,a.category||"",`"${i(a.sourceAccountId).replace(/"/g,'""')}"`,`"${i(a.destinationAccountId).replace(/"/g,'""')}"`,`"${(a.notes||"").replace(/"/g,'""')}"`]),o=[s.join(","),...r.map(a=>a.join(","))].join(`
`);sD(o,`${e}.csv`,"text/csv")}function iD(n,t,e,i){const s=["January","February","March","April","May","June","July","August","September","October","November","December"],r=`${i}-${String(e+1).padStart(2,"0")}`,o=n.filter(v=>v.date&&v.date.startsWith(r)),a=v=>{const E=t.find(P=>P.id===v);return E?E.name:""},c=o.filter(v=>v.type==="INCOME").reduce((v,E)=>v+E.amount,0),l=o.filter(v=>v.type==="EXPENSE").reduce((v,E)=>v+E.amount,0),d={};o.filter(v=>v.type==="EXPENSE").forEach(v=>{const E=v.category||"Other";d[E]=(d[E]||0)+v.amount});const h=Object.entries(d).sort((v,E)=>E[1]-v[1]),f=`
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
      ${h.map(([v,E])=>`
        <tr>
          <td>${v}</td>
          <td>₹${E.toLocaleString("en-IN")}</td>
          <td>${l>0?(E/l*100).toFixed(1):0}%</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
  `:""}

  <h2>All Activity Items</h2>
  <table>
    <thead><tr><th>Date</th><th>Reason</th><th>Amount</th><th>Category</th><th>Account(s)</th><th>Type</th></tr></thead>
    <tbody>
      ${o.sort((v,E)=>new Date(v.date)-new Date(E.date)).map(v=>{let E="";return v.type==="INCOME"?E=`→ ${a(v.destinationAccountId)}`:v.type==="EXPENSE"?E=`← ${a(v.sourceAccountId)}`:v.type==="TRANSFER"&&(E=`${a(v.sourceAccountId)} → ${a(v.destinationAccountId)}`),`
            <tr class="${v.type==="INCOME"?"income-row":v.type==="EXPENSE"?"expense-row":"transfer-row"}">
              <td>${v.date}</td>
              <td>${v.reason||"-"}</td>
              <td>${v.type==="INCOME"?"+":v.type==="EXPENSE"?"-":"↔ "}₹${v.amount.toLocaleString("en-IN")}</td>
              <td>${v.category||"-"}</td>
              <td>${E||"-"}</td>
              <td>${v.type}</td>
            </tr>
          `}).join("")}
    </tbody>
  </table>

  <div class="footer">
    Generated by Money Control V2 on ${new Date().toLocaleDateString("en-IN",{dateStyle:"long"})}
  </div>
</body>
</html>`,g=new Blob([f],{type:"text/html"}),y=URL.createObjectURL(g),b=window.open(y,"_blank");b&&(b.onload=()=>{setTimeout(()=>URL.revokeObjectURL(y),1e3)})}function sD(n,t,e){const i=new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}let Jt={user:null,profile:null,transactions:[]};function v_(n){var l;Jt={...Jt,...n};const{profile:t}=Jt,e=document.documentElement.getAttribute("data-theme")||"light",i=((l=t==null?void 0:t.settings)==null?void 0:l.allowNegativeBalance)||!1,s=(t==null?void 0:t.initialBalance)||0,r=(t==null?void 0:t.pinEnabled)||!1,o=(t==null?void 0:t.autoLockTimeout)!==void 0?t.autoLockTimeout:5,a=rP(),c=sP();return`
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
                <div class="settings-item-subtitle">Current: ${H(s)}</div>
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
  `}function b_(n,t){const e=document.getElementById("toggle-pin-lock");e&&(e.onchange=async b=>{if(b.target.checked)hP(Jt.user.uid,()=>{t&&t()}),b.target.checked=!1;else if(await Vi({icon:"🔓",title:"Disable PIN Lock",message:"Are you sure you want to remove PIN protection? Your financial data will no longer be locked.",confirmText:"Remove PIN",danger:!0}))try{await tb(Jt.user.uid),q.success("🔓 PIN lock disabled."),t&&t()}catch{q.error("Unable to disable PIN."),b.target.checked=!0}else b.target.checked=!0});const i=document.getElementById("btn-change-pin");i&&(i.onclick=async()=>{const b=await Ua(Jt.user.uid);fP(Jt.user.uid,b.pinHash,()=>{t&&t()})});const s=document.getElementById("select-auto-lock");s&&(s.onchange=async b=>{const v=parseInt(b.target.value);try{await cP(Jt.user.uid,v),q.success("⏱️ Auto-lock updated."),t&&t()}catch{q.error("Unable to update auto-lock setting.")}});const r=document.getElementById("btn-lock-app-now");r&&(r.onclick=()=>{window.dispatchEvent(new CustomEvent("lock-app"))});const o=document.getElementById("btn-install-pwa");o&&(o.onclick=async()=>{await oP()&&(q.success("📲 Money Control installed!"),t&&t())});const a=document.getElementById("btn-theme-light");a&&(a.onclick=()=>{document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),Zg()});const c=document.getElementById("btn-theme-dark");c&&(c.onclick=()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),Zg()});const l=document.getElementById("toggle-negative-balance");l&&(l.onchange=async b=>{const v=b.target.checked;try{await MS(Jt.user.uid,{allowNegativeBalance:v}),q.success(`Negative balance ${v?"enabled":"disabled"}.`),t&&t()}catch{q.error("Unable to update setting."),b.target.checked=!v}});const d=document.getElementById("btn-edit-initial-balance");d&&(d.onclick=()=>{var E;const v=`
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
              <input type="number" id="new-initial-input" class="form-input" value="${((E=Jt.profile)==null?void 0:E.initialBalance)||0}" step="any" min="0" required autofocus />
            </div>
            <div class="form-error" id="new-initial-error"></div>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-initial">Save Initial Balance</button>
        </form>
      `;he({title:"💵 Edit Initial Balance",content:v,onOpen:P=>{P.querySelector("#edit-initial-form").onsubmit=async C=>{C.preventDefault();const D=P.querySelector("#new-initial-input").value,O=io(D);if(O){P.querySelector("#new-initial-error").textContent=O;return}const L=P.querySelector("#btn-save-initial");L.disabled=!0,L.innerHTML='<span class="spinner"></span> Saving...';try{await jv(Jt.user.uid,Number(D)),Vt(),q.success("Initial balance updated!"),t&&t()}catch{q.error("Unable to update initial balance."),L.disabled=!1,L.innerHTML="Save Initial Balance"}}}})});const h=document.getElementById("btn-export-csv");h&&(h.onclick=()=>{try{nD(Jt.transactions,Jt.accounts),q.success("📊 Transactions exported to CSV!")}catch(b){q.error(b.message||"Unable to export transactions.")}});const f=document.getElementById("btn-export-report");f&&(f.onclick=()=>{try{const b=new Date;iD(Jt.transactions,Jt.accounts,b.getMonth(),b.getFullYear()),q.success("📑 Printable report opened!")}catch{q.error("Unable to generate report.")}});const g=document.getElementById("btn-settings-logout");g&&(g.onclick=async()=>{await Vi({icon:"🚪",title:"Log Out",message:"Are you sure you want to log out?",confirmText:"Log Out",danger:!0})&&(await Ed(),q.info("Logged out."),n&&n())});const y=document.getElementById("btn-settings-delete-account");y&&(y.onclick=()=>{he({title:"🚨 Delete Account",content:`
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
      `,onOpen:v=>{v.querySelector("#delete-acc-form").onsubmit=async E=>{E.preventDefault();const P=v.querySelector("#del-pass-input").value;if(v.querySelector("#del-pass-error").textContent="",!P){v.querySelector("#del-pass-error").textContent="Please enter your password.";return}const C=v.querySelector("#btn-confirm-delete-acc");C.disabled=!0,C.innerHTML='<span class="spinner"></span> Deleting...';try{await GS(P),Vt(),q.info("Account deleted."),n&&n()}catch{v.querySelector("#del-pass-error").textContent="Incorrect password or re-authentication failed.",C.disabled=!1,C.innerHTML="Delete My Account Permanently"}}}})})}function Zg(){const n=document.querySelector(".page");n&&(n.outerHTML=v_(Jt),b_())}let wr={accounts:[],transactions:[]};function rD(n){wr={...wr,...n};const{accounts:t,transactions:e}=wr,{startingTotal:i,currentTotal:s,history:r}=Uv(t,e);return`
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
        <div class="balance-label">💰 TOTAL MONEY HISTORY</div>
        <div class="balance-amount">${H(s)}</div>
        <div class="balance-subtitle">Current Total • Across ${t.length} account${t.length===1?"":"s"}</div>
      </div>

      <!-- 3. Timeline Container -->
      <div class="tmh-timeline-container">
        ${r.length>0?oD(r,i):aD(i)}
      </div>
    </div>
  `}function oD(n,t){return`
    <div class="tmh-timeline">
      ${n.map((e,i)=>{const s=e.type==="TRANSFER",r=ci(e.date),o=wS(e.date),a=o===r?r:`${o} (${r})`;return`
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
                  <span class="tmh-total-amount">${H(e.newTotal)}</span>
                </div>

                <div class="tmh-item-change">
                  <span class="tmh-change-label">${e.reason||e.typeLabel}</span>
                  ${s?`
                    <span class="tmh-change-amount" style="color: var(--primary-light);">
                      Total unchanged: ${H(e.newTotal)}
                    </span>
                  `:`
                    <span class="tmh-change-amount" style="color: ${e.amountColor};">
                      ${e.amountSign}${H(e.amount)}
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
        <div class="tmh-starting-amount">${H(t)}</div>
      </div>
    </div>
  `}function aD(n,t){return`
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
        <div class="tmh-starting-amount">${H(n)}</div>
      </div>
    </div>
  `}function cD(n){const t=document.getElementById("tmh-back-btn");t&&(t.onclick=()=>{n("dashboard")}),document.querySelectorAll(".tmh-item-card[data-tx-id]").forEach(i=>{const s=()=>{const r=i.dataset.txId,{history:o}=Uv(wr.accounts,wr.transactions),a=o.find(c=>c.id===r);a&&lD(a)};i.onclick=s,i.onkeydown=r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),s())}})}function lD(n){const t=n.type==="INCOME",e=n.type==="EXPENSE",i=n.type==="TRANSFER";let s="Transaction Details";t?s="💰 INCOME DETAILS":e?s="💸 EXPENSE DETAILS":i&&(s="🔄 TRANSFER DETAILS");const r=ci(n.date),o=n.createdAt?$a(n.createdAt):"",a=`
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
        <span class="tmh-detail-value font-mono">${H(n.previousTotal)}</span>
      </div>

      <div class="tmh-detail-row highlight">
        <span class="tmh-detail-label">${n.typeLabel}</span>
        ${i?`
          <span class="tmh-detail-value" style="color: var(--primary-light); font-weight: 700;">
            ${H(n.amount)} (Total Unchanged)
          </span>
        `:`
          <span class="tmh-detail-value" style="color: ${n.amountColor}; font-weight: 700;">
            ${n.amountSign}${H(n.amount)}
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
        <span class="tmh-detail-value font-mono">${H(n.newTotal)}</span>
      </div>
    </div>
  `;he({title:s,content:a})}function __(n){return`
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
  `}function w_(){return`
    <header class="mobile-header">
      <button class="mobile-hamburger-btn" id="mobile-hamburger-btn" aria-label="Open Navigation Menu">
        <span>☰</span>
      </button>
      <div class="mobile-header-brand">
        <img src="/icon-192.png" alt="Money Control" class="mobile-header-logo" />
        <span class="mobile-header-title">Money Control</span>
      </div>
    </header>
  `}function E_(n,t,e){const i=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||"User",s=(e==null?void 0:e.email)||(t==null?void 0:t.email)||"";return`
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
  `}function T_(n){return`
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
  `}function uD(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.add("open"),t&&t.classList.add("open"),document.body.style.overflow="hidden"}function Qi(){const n=document.getElementById("mobile-drawer-overlay"),t=document.getElementById("mobile-drawer");n&&n.classList.remove("open"),t&&t.classList.remove("open"),document.body.style.overflow=""}function dD(n,t){document.querySelectorAll(".sidebar-link[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}}),document.querySelectorAll(".bottom-nav-item[data-page]").forEach(l=>{l.onclick=()=>{const d=l.dataset.page;n(d)}});const e=document.getElementById("mobile-add-btn");e&&(e.onclick=()=>{window.dispatchEvent(new CustomEvent("open-add-menu"))});const i=document.getElementById("mobile-hamburger-btn");i&&(i.onclick=()=>uD());const s=document.getElementById("mobile-drawer-close");s&&(s.onclick=()=>Qi());const r=document.getElementById("mobile-drawer-overlay");r&&(r.onclick=()=>Qi()),document.querySelectorAll(".mobile-drawer-item[data-page]").forEach(l=>{l.onclick=()=>{Qi();const d=l.dataset.page;n(d)}});const o=document.getElementById("mobile-drawer-lock-app");o&&(o.onclick=()=>{Qi(),t&&t.pinEnabled&&t.pinHash?window.dispatchEvent(new CustomEvent("lock-app")):(q.info("🔒 PIN Lock is not enabled. Go to Settings → PIN Lock to set your PIN."),n("settings"))});const a=document.getElementById("mobile-drawer-logout");a&&(a.onclick=async()=>{Qi(),await Vi({icon:"🚪",title:"Logout?",message:"Are you sure you want to log out of Money Control?",confirmText:"Logout",danger:!0})&&(await Ed(),q.info("Logged out successfully."))});const c=document.getElementById("mobile-drawer");if(c){let l=0;c.ontouchstart=d=>{l=d.touches[0].clientX},c.ontouchmove=d=>{const h=d.touches[0].clientX;l-h>50&&Qi()}}}function hD(){return`
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
      ${fD(3)}
    </div>
  `}function fD(n=5){let t="";for(let e=0;e<n;e++)t+=`
      <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
        <div class="skeleton" style="width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;"></div>
        <div style="flex: 1;">
          <div class="skeleton" style="height: 14px; width: 60%; margin-bottom: 8px;"></div>
          <div class="skeleton" style="height: 10px; width: 40%;"></div>
        </div>
        <div class="skeleton" style="height: 16px; width: 70px;"></div>
      </div>
    `;return t}const F={user:null,profile:null,accounts:[],transactions:[],budgets:[],activePage:"dashboard",selectedAccountId:null,unsubscribeAccounts:null,unsubscribeTx:null,authLoading:!0,dashboardError:null,isLocked:!1,pinEnabled:!1,pinHash:null,autoLockTimeout:5,lastActivityTime:Date.now()};window.appState=F;let ya=null;function pD(){try{const n=localStorage.getItem("theme");n?document.documentElement.setAttribute("data-theme",n):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.setAttribute("data-theme","dark"))}catch{document.documentElement.setAttribute("data-theme","dark")}}pD();try{JS()}catch(n){console.warn("PWA initialization warning:",n)}const oo=document.getElementById("app");function gD(){oo.innerHTML=`
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
  `}function mD(){gD(),HS(async n=>{if(F.authLoading=!1,F.unsubscribeAccounts&&(F.unsubscribeAccounts(),F.unsubscribeAccounts=null),F.unsubscribeTx&&(F.unsubscribeTx(),F.unsubscribeTx=null),!n){F.user=null,F.profile=null,F.accounts=[],F.transactions=[],F.budgets=[],F.isLocked=!1,F.pinEnabled=!1,F.pinHash=null,F.dashboardError=null,Si(),A_(),vu();return}F.user=n,vD();try{await I_(n.uid)}catch(t){console.error("Error loading user data:",t),F.dashboardError=t,Re()}}),window.addEventListener("hashchange",wD),window.addEventListener("open-add-menu",()=>{TD()}),window.addEventListener("lock-app",()=>{Xa()}),ED()}async function I_(n){var t,e,i,s,r;F.dashboardError=null;try{const o=new Promise(l=>setTimeout(()=>l(null),3e3));let a=await Promise.race([Mr(n),o]);if(!a){const l=((t=F.user)==null?void 0:t.displayName)||((i=(e=F.user)==null?void 0:e.email)==null?void 0:i.split("@")[0])||"User";try{await zv(n,{name:l,email:((s=F.user)==null?void 0:s.email)||"",createdAt:new Date().toISOString()}),a=await Mr(n)}catch(d){console.warn("Profile creation fallback:",d),a={name:l,email:((r=F.user)==null?void 0:r.email)||"",initialBalance:0}}}if(F.profile=a,!a||a.initialBalance===null||a.initialBalance===void 0){yD();return}try{await Gv(n,a.initialBalance)}catch(l){console.warn("ensureDefaultAccounts warning:",l)}try{F.budgets=await Td(n)}catch{F.budgets=[]}let c;try{c=await Ua(n)}catch(l){console.warn("getPinData warning in loadUserData:",l),c={pinHash:null,pinEnabled:!1,pinSetupPromptShown:!0,autoLockTimeout:5}}F.pinEnabled=c.pinEnabled,F.pinHash=c.pinHash,F.autoLockTimeout=c.autoLockTimeout!==void 0?c.autoLockTimeout:5,F.unsubscribeAccounts=LS(n,(l,d)=>{d?(console.error("Accounts subscription error:",d),F.dashboardError=d):F.accounts=l,F.isLocked||Re()}),F.unsubscribeTx=FS(n,(l,d)=>{d?console.error("Transactions subscription error:",d):F.transactions=l,F.isLocked||Re()}),F.pinEnabled&&F.pinHash?(F.isLocked=!0,eb(n,F.pinHash,()=>{F.isLocked=!1,F.lastActivityTime=Date.now(),ba(),Re()})):c.pinSetupPromptShown?(F.isLocked=!1,ba(),Re()):dP(n,()=>{Ua(n).then(l=>{F.pinEnabled=l.pinEnabled,F.pinHash=l.pinHash,F.pinEnabled&&ba(),Re()})})}catch(o){console.error("loadUserData error:",o),F.dashboardError=o,Re()}}function vu(){oo.innerHTML=xP(),cb()}function yD(){oo.innerHTML=SP(),PP(F.user.uid,async()=>{await I_(F.user.uid)})}function vD(){oo.innerHTML=`
    <div class="app-layout">
      ${w_()}
      ${__(F.activePage)}
      <main class="main-content">
        ${hD()}
      </main>
      ${T_(F.activePage)}
      ${E_(F.activePage,F.user,F.profile)}
    </div>
  `}function Re(){if(F.isLocked)return;const n=window.location.hash.replace("#/","").replace("#","");n&&["dashboard","accounts","transactions","money-control","analytics","budget","profile","settings","total-money-history"].includes(n)?F.activePage=n:F.activePage="dashboard";const t=bD(F.activePage);oo.innerHTML=`
    <div class="app-layout">
      ${w_()}
      ${__(F.activePage)}
      <main class="main-content" id="main-content-area">
        ${t}
      </main>
      ${T_(F.activePage)}
      ${E_(F.activePage,F.user,F.profile)}
    </div>
  `,dD(va,F),_D(F.activePage)}function bD(n){switch(n){case"dashboard":return xp(F);case"accounts":return NP(F);case"transactions":return pb(F);case"money-control":return oa(F);case"analytics":return m_(F);case"budget":return JM(F);case"profile":return tD(F);case"settings":return v_(F);case"total-money-history":return rD(F);default:return xp(F)}}function _D(n){const t=async()=>{if(F.user){F.profile=await Mr(F.user.uid),F.budgets=await Td(F.user.uid);const e=await Ua(F.user.uid);F.pinEnabled=e.pinEnabled,F.pinHash=e.pinHash,F.autoLockTimeout=e.autoLockTimeout!==void 0?e.autoLockTimeout:5,Re()}};switch(n){case"dashboard":Sp(va,t);break;case"accounts":FP(t);break;case"transactions":yb(t);break;case"money-control":aa(t);break;case"analytics":y_();break;case"budget":ZM(t);break;case"profile":eD(()=>vu(),t);break;case"settings":b_(()=>vu(),t);break;case"total-money-history":cD(va);break;default:Sp(va,t);break}}function va(n){n!=="accounts"&&(F.selectedAccountId=null),F.activePage=n,window.location.hash=`#/${n}`}function wD(){var n;F.user&&((n=F.profile)==null?void 0:n.initialBalance)!==null&&!F.isLocked&&Re()}function Xa(){!F.pinEnabled||!F.pinHash||!F.user||(F.isLocked=!0,eb(F.user.uid,F.pinHash,()=>{F.isLocked=!1,F.lastActivityTime=Date.now(),ba(),Re()}))}function ba(){if(A_(),!F.pinEnabled||!F.pinHash||F.autoLockTimeout<0)return;const n=F.autoLockTimeout===0?0:F.autoLockTimeout*60*1e3;n>0&&(ya=setInterval(()=>{Date.now()-F.lastActivityTime>=n&&!F.isLocked&&Xa()},1e4))}function A_(){ya&&(clearInterval(ya),ya=null)}function ED(){const n=()=>{F.lastActivityTime=Date.now()};["click","keydown","touchstart","scroll"].forEach(t=>{document.addEventListener(t,n,{passive:!0})}),document.addEventListener("visibilitychange",()=>{if(document.hidden||!F.pinEnabled||!F.pinHash||F.isLocked)return;const t=Date.now()-F.lastActivityTime;if(F.autoLockTimeout===0)Xa();else if(F.autoLockTimeout>0){const e=F.autoLockTimeout*60*1e3;t>=e&&Xa()}})}function TD(){he({title:"⚡ Quick Action",content:`
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
  `,onOpen:t=>{const e=t.querySelector("#fab-modal-add-income"),i=t.querySelector("#fab-modal-add-expense"),s=t.querySelector("#fab-modal-transfer"),r=async()=>{F.user&&(F.profile=await Mr(F.user.uid),F.budgets=await Td(F.user.uid),Re())};e&&(e.onclick=()=>pr("INCOME",r)),i&&(i.onclick=()=>pr("EXPENSE",r)),s&&(s.onclick=()=>ub(r))}})}mD();
