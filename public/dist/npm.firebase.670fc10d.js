(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3Kre":function(e,t,n){"use strict";var r,i=n("wj3C"),o=n.n(i),s=n("S+S0"),d=n("mrSG"),a=n("zVF4"),u=n("nbvr"),l="0.4.14",h=1e4,f="w:"+l,c="FIS_v2",p="https://firebaseinstallations.googleapis.com/v1",_=36e5,y=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),v=new a.ErrorFactory("installations","Installations",y);function g(e){return e instanceof a.FirebaseError&&e.code.includes("request-failed")}
/**
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
 */function m(e){var t=e.projectId;return p+"/projects/"+t+"/installations"}function C(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function E(r,i){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,i.json()];case 1:return t=e.sent(),n=t.error,[2,v.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function w(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function b(e,t){var n=t.refreshToken,r=w(e);return r.append("Authorization",c+" "+n),r}function S(n){return Object(d.__awaiter)(this,void 0,void 0,function(){var t;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,n()];case 1:return 500<=(t=e.sent()).status&&t.status<600?[2,n()]:[2,t]}})})}
/**
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
 */
function T(t){return new Promise(function(e){setTimeout(e,t)})}
/**
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
 */
/**
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
 */
var I=/^[cdef][\w-]{21}$/,N="";function P(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return btoa(String.fromCharCode.apply(String,Object(d.__spread)(e))).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22);return I.test(t)?t:N}catch(e){return N}}
/**
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
 */
function O(e){return e.appName+"!"+e.appId}
/**
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
 */var R=new Map;function D(e,t){var n=O(e);A(n,t),function(e,t){var n=k();n&&n.postMessage({key:e,fid:t});F()}(n,t)}function A(e,t){var n,r,i=R.get(e);if(i)try{for(var o=Object(d.__values)(i),s=o.next();!s.done;s=o.next()){(0,s.value)(t)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var x=null;function k(){return!x&&"BroadcastChannel"in self&&((x=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){A(e.data.key,e.data.fid)}),x}function F(){0===R.size&&x&&(x.close(),x=null)}
/**
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
 */var L,M="firebase-installations-database",W=1,j="firebase-installations-store",q=null;function V(){return q=q||Object(u.openDb)(M,W,function(e){switch(e.oldVersion){case 0:e.createObjectStore(j)}})}function U(s,a){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n,r,i,o;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return t=O(s),[4,V()];case 1:return n=e.sent(),r=n.transaction(j,"readwrite"),[4,(i=r.objectStore(j)).get(t)];case 2:return o=e.sent(),[4,i.put(a,t)];case 3:return e.sent(),[4,r.complete];case 4:return e.sent(),o&&o.fid===a.fid||D(s,a.fid),[2,a]}})})}function Q(i){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n,r;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return t=O(i),[4,V()];case 1:return n=e.sent(),[4,(r=n.transaction(j,"readwrite")).objectStore(j).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}function H(a,u){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n,r,i,o,s;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return t=O(a),[4,V()];case 1:return n=e.sent(),r=n.transaction(j,"readwrite"),[4,(i=r.objectStore(j)).get(t)];case 2:return o=e.sent(),void 0!==(s=u(o))?[3,4]:[4,i.delete(t)];case 3:return e.sent(),[3,6];case 4:return[4,i.put(s,t)];case 5:e.sent(),e.label=6;case 6:return[4,r.complete];case 7:return e.sent(),!s||o&&o.fid===s.fid||D(a,s.fid),[2,s]}})})}
/**
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
 */function B(i){return Object(d.__awaiter)(this,void 0,void 0,function(){var r,t,n;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,H(i,function(e){var t=K(e||{fid:P(),registrationStatus:0}),n=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:function(o){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n,r,i;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,z(o)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,T(100)];case 3:return e.sent(),[4,z(o)];case 4:return t=e.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,B(o)];case 6:return n=e.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}})})}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(v.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,7]),[4,
/**
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
 */
function(a,e){var u=e.fid;return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n,r,i,o,s;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return t=m(a),n=w(a),r={fid:u,authVersion:c,appId:a.appId,sdkVersion:f},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,S(function(){return fetch(t,i)})];case 1:return(o=e.sent()).ok?[4,o.json()]:[3,3];case 2:return s=e.sent(),[2,{fid:s.fid||u,registrationStatus:2,refreshToken:s.refreshToken,authToken:C(s.authToken)}];case 3:return[4,E("Create Installation",o)];case 4:throw e.sent()}})})}(r,i)];case 1:return t=e.sent(),[2,U(r,t)];case 2:return g(n=e.sent())&&409===n.serverCode?[4,Q(r)]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,U(r,{fid:i.fid,registrationStatus:0})];case 5:e.sent(),e.label=6;case 6:throw n;case 7:return[2]}})})}(e,r);return{installationEntry:r,registrationPromise:i}}}(i,t);return r=n.registrationPromise,n.installationEntry})];case 1:return(t=e.sent()).fid!==N?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=e.sent(),n)];case 3:return[2,{installationEntry:t,registrationPromise:r}]}})})}function z(e){return H(e,function(e){if(!e)throw v.create("installation-not-found");return K(e)})}function K(e){return 1===(t=e).registrationStatus&&t.registrationTime+h<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
 */}function G(e,h){var c=e.appConfig,p=e.platformLoggerProvider;return Object(d.__awaiter)(this,void 0,void 0,function(){var r,i,o,s,a,u,l;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return t=c,n=h.fid,r=m(t)+"/"+n+"/authTokens:generate",i=b(c,h),(o=p.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),s={installation:{sdkVersion:f}},a={method:"POST",headers:i,body:JSON.stringify(s)},[4,S(function(){return fetch(r,a)})];case 1:return(u=e.sent()).ok?[4,u.json()]:[3,3];case 2:return l=e.sent(),[2,C(l)];case 3:return[4,E("Generate Auth Token",u)];case 4:throw e.sent()}var t,n;
/**
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
 */})})}function Y(a,u){return void 0===u&&(u=!1),Object(d.__awaiter)(this,void 0,void 0,function(){var s,t,n;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,H(a.appConfig,function(e){if(!X(e))throw v.create("not-registered");var t,n,r,i=e.authToken;if(u||2!==(r=i).requestStatus||function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_}(r)){if(1===i.requestStatus)return s=function(r,i){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,$(r.appConfig)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.authToken.requestStatus?[3,5]:[4,T(100)];case 3:return e.sent(),[4,$(r.appConfig)];case 4:return t=e.sent(),[3,2];case 5:return 0===(n=t.authToken).requestStatus?[2,Y(r,i)]:[2,n]}})})}(a,u),e;if(!navigator.onLine)throw v.create("app-offline");var o=(t=e,n={requestStatus:1,requestTime:Date.now()},Object(d.__assign)(Object(d.__assign)({},t),{authToken:n}));return s=function(i,o){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n,r;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,8]),[4,G(i,o)];case 1:return t=e.sent(),r=Object(d.__assign)(Object(d.__assign)({},o),{authToken:t}),[4,U(i.appConfig,r)];case 2:return e.sent(),[2,t];case 3:return!g(n=e.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,Q(i.appConfig)];case 4:return e.sent(),[3,7];case 5:return r=Object(d.__assign)(Object(d.__assign)({},o),{authToken:{requestStatus:0}}),[4,U(i.appConfig,r)];case 6:e.sent(),e.label=7;case 7:throw n;case 8:return[2]}})})}(a,o),o}return e})];case 1:return t=e.sent(),s?[4,s]:[3,3];case 2:return n=e.sent(),[3,4];case 3:n=t.authToken,e.label=4;case 4:return[2,n]}})})}function $(e){return H(e,function(e){if(!X(e))throw v.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+h<Date.now()?Object(d.__assign)(Object(d.__assign)({},e),{authToken:{requestStatus:0}}):e})}function X(e){return void 0!==e&&2===e.registrationStatus}
/**
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
 */
function J(t,n){return void 0===n&&(n=!1),Object(d.__awaiter)(this,void 0,void 0,function(){return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,function(n){return Object(d.__awaiter)(this,void 0,void 0,function(){var t;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,B(n)];case 1:return(t=e.sent().registrationPromise)?[4,t]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}
/**
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
 */(t.appConfig)];case 1:return e.sent(),[4,Y(t,n)];case 2:return[2,e.sent().token]}})})}function Z(a,u){return Object(d.__awaiter)(this,void 0,void 0,function(){var r,i,o,s;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return t=a,n=u.fid,r=m(t)+"/"+n,i=b(a,u),o={method:"DELETE",headers:i},[4,S(function(){return fetch(r,o)})];case 1:return(s=e.sent()).ok?[3,3]:[4,E("Delete Installation",s)];case 2:throw e.sent();case 3:return[2]}var t,n;
/**
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
 */})})}
/**
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
 */
function ee(e,r){var i=e.appConfig;return function(e,t){k();var n=O(e),r=R.get(n);r||(r=new Set,R.set(n,r)),r.add(t)}(i,r),function(){var e,t,n;e=r,t=O(i),(n=R.get(t))&&(n.delete(e),0===n.size&&R.delete(t),F())}}
/**
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
 */function te(e){return v.create("missing-app-config-values",{valueName:e})}
/**
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
 */(L=o.a).INTERNAL.registerComponent(new s.Component("installations",function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw te("App Configuration");if(!e.name)throw te("App Name");try{for(var r=Object(d.__values)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw te(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){
/**
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
 */return function(i){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n,r;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,B(i.appConfig)];case 1:return t=e.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):Y(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(e){return J(n,e)},delete:function(){return function(r){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,H(t=r.appConfig,function(e){if(!e||0!==e.registrationStatus)return e})];case 1:if(!(n=e.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw v.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw v.create("app-offline");case 3:return[4,Z(t,n)];case 4:return e.sent(),[4,Q(t)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(n)},onIdChange:function(e){return ee(n,e)}}},"PUBLIC")),L.registerVersion("@firebase/installations",l);var ne,re,ie,oe,se=n("q/0M"),ae="measurementId",ue="firebase_id",le="origin",he="https://www.googletagmanager.com/gtag/js";
/**
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
 */(re=ne=ne||{}).EVENT="event",re.SET="set",re.CONFIG="config",(oe=ie=ie||{}).ADD_SHIPPING_INFO="add_shipping_info",oe.ADD_PAYMENT_INFO="add_payment_info",oe.ADD_TO_CART="add_to_cart",oe.ADD_TO_WISHLIST="add_to_wishlist",oe.BEGIN_CHECKOUT="begin_checkout",oe.CHECKOUT_PROGRESS="checkout_progress",oe.EXCEPTION="exception",oe.GENERATE_LEAD="generate_lead",oe.LOGIN="login",oe.PAGE_VIEW="page_view",oe.PURCHASE="purchase",oe.REFUND="refund",oe.REMOVE_FROM_CART="remove_from_cart",oe.SCREEN_VIEW="screen_view",oe.SEARCH="search",oe.SELECT_CONTENT="select_content",oe.SELECT_ITEM="select_item",oe.SELECT_PROMOTION="select_promotion",oe.SET_CHECKOUT_OPTION="set_checkout_option",oe.SHARE="share",oe.SIGN_UP="sign_up",oe.TIMING_COMPLETE="timing_complete",oe.VIEW_CART="view_cart",oe.VIEW_ITEM="view_item",oe.VIEW_ITEM_LIST="view_item_list",oe.VIEW_PROMOTION="view_promotion",oe.VIEW_SEARCH_RESULTS="view_search_results";
/**
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
 */
var ce,pe=new se.Logger("@firebase/analytics");
/**
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
 */function de(e,n,t){var p,d,r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[n].push(arguments)};return window[t]&&"function"==typeof window[t]&&(r=window[t]),window[t]=(p=r,d=e,function(e,t,n){if(e===ne.EVENT){var r=[];if(n&&n.send_to){var i=n.send_to;Array.isArray(i)||(i=[i]);for(var o=0,s=i;o<s.length;o++){var a=s[o],u=d[a];if(!u){r=[];break}r.push(u)}}if(0===r.length)for(var l=0,h=Object.values(d);l<h.length;l++){var c=h[l];r.push(c)}Promise.all(r).then(function(){return p(ne.EVENT,t,n||{})}).catch(function(e){return pe.error(e)})}else e===ne.CONFIG?(d[t]||Promise.resolve()).then(function(){p(ne.CONFIG,t,n)}).catch(function(e){return pe.error(e)}):p(ne.SET,t)}),{gtagCore:r,wrappedGtag:window[t]}}var fe,_e,ye=((ce={})["no-ga-id"]='"'+ae+'" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',ce["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",ce["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",ce["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate",ce),ve=new a.ErrorFactory("analytics","Analytics",ye),ge={},me="dataLayer",Ce="gtag",Ee=!1;function we(e){if(Ee)throw ve.create("already-initialized");e.dataLayerName&&(me=e.dataLayerName),e.gtagName&&(Ce=e.gtagName)}function be(e,t){var n,r,i,o,s,a,u,l=e.options[ae];if(!l)throw ve.create("no-ga-id");if(null!=ge[l])throw ve.create("already-exists",{id:l});return Ee||(function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(he))return r}}
/**
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
 */()||(a=me,(u=document.createElement("script")).src=he+"?l="+a,u.async=!0,document.head.appendChild(u)),o=me,s=[],Array.isArray(window[o])?s=window[o]:window[o]=s,r=(n=de(ge,me,Ce)).wrappedGtag,i=n.gtagCore,_e=r,fe=i,Ee=!0),ge[l]=function(r,i,o){return Object(d.__awaiter)(this,void 0,void 0,function(){var t,n;return Object(d.__generator)(this,function(e){switch(e.label){case 0:return[4,i.getId()];case 1:return t=e.sent(),o("js",new Date),o(ne.CONFIG,r.options[ae],((n={})[ue]=t,n[le]="firebase",n.update=!0,n)),[2]}})})}(e,t,fe),{app:e,logEvent:function(e,t,n){return r=_e,i=l,o=e,u=(s=t)||{},(a=n)&&a.global||(u=Object(d.__assign)(Object(d.__assign)({},s),{send_to:i})),void r(ne.EVENT,o,u||{});
/**
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
 */
var r,i,o,s,a,u},setCurrentScreen:function(e,t){return n=_e,r=l,i=e,void((o=t)&&o.global?n(ne.SET,{screen_name:i}):n(ne.CONFIG,r,{update:!0,screen_name:i}));var n,r,i,o},setUserId:function(e,t){return n=_e,r=l,i=e,void((o=t)&&o.global?n(ne.SET,{user_id:i}):n(ne.CONFIG,r,{update:!0,user_id:i}));var n,r,i,o},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var i={},o=0,s=Object.keys(n);o<s.length;o++){var a=s[o];i["user_properties."+a]=n[a]}e(ne.SET,i)}else e(ne.CONFIG,t,{update:!0,user_properties:n})}(_e,l,e,t)},setAnalyticsCollectionEnabled:function(e){return t=e,void(window["ga-disable-"+l]=!t);var t}}}var Se,Te="analytics";(Se=o.a).INTERNAL.registerComponent(new s.Component(Te,function(e){return be(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())},"PUBLIC").setServiceProps({settings:we,EventName:ie})),Se.INTERNAL.registerComponent(new s.Component("analytics-internal",function(e){try{return{logEvent:e.getProvider(Te).getImmediate().logEvent}}catch(e){throw ve.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),Se.registerVersion("@firebase/analytics","0.3.9")},NSPt:function(hi,ci,pi){"use strict";(function(u){Object.defineProperty(ci,"__esModule",{value:!0});var e,t=(e=pi("wj3C"))&&"object"==typeof e&&"default"in e?e.default:e,_=pi("mrSG"),C=pi("zVF4"),n=pi("q/0M"),r=pi("S+S0"),i=(o.prototype.set=function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),C.stringify(t))},o.prototype.get=function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:C.jsonEval(t)},o.prototype.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},o.prototype.prefixedName_=function(e){return this.prefix_+e},o.prototype.toString=function(){return this.domStorage_.toString()},o);function o(e){this.domStorage_=e,this.prefix_="firebase:"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s=(a.prototype.set=function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t},a.prototype.get=function(e){return C.contains(this.cache_,e)?this.cache_[e]:null},a.prototype.remove=function(e){delete this.cache_[e]},a);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a(){this.cache_={},this.isInMemoryStorage=!0}function l(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new i(t)}}catch(e){}return new s}function h(e){var t=C.stringToByteArray(e),n=new C.Sha1;n.update(t);var r=n.digest();return C.base64.encodeByteArray(r)}function c(e,t){C.assert(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(S.logLevel=n.LogLevel.VERBOSE,N=S.log.bind(S),t&&b.set("logging_enabled",!0)):"function"==typeof e?N=e:(N=null,b.remove("logging_enabled"))}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE INTERNAL ERROR: "+I.apply(void 0,_.__spread(e));S.error(n)}function d(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE FATAL ERROR: "+I.apply(void 0,_.__spread(e));throw S.error(n),new Error(n)}function y(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE WARNING: "+I.apply(void 0,_.__spread(e));S.warn(n)}function f(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)}function v(e,t){return e===t?0:e<t?-1:1}function g(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+C.stringify(t))}function m(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)n<i+t?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r}var E,w=l("localStorage"),b=l("sessionStorage"),S=new n.Logger("@firebase/database"),T=(E=1,function(){return E++}),I=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++){var i=e[r];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?n+=I.apply(null,i):n+="object"==typeof i?C.stringify(i):i,n+=" "}return n},N=null,P=!0,O=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];!0===P&&(P=!1,null===N&&!0===b.get("logging_enabled")&&c(!0)),N&&(e=I.apply(null,t),N(e))},R=function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];O.apply(void 0,_.__spread([n],e))}},D="[MIN_NAME]",A="[MAX_NAME]",x=function(e,t){if(e===t)return 0;if(e===D||t===A)return-1;if(t===D||e===A)return 1;var n=q(e),r=q(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null===r&&e<t?-1:1},k=function(e){if("object"!=typeof e||null===e)return C.stringify(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=C.stringify(t[i]),r+=":",r+=k(e[t[i]]);return r+="}"};function F(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}function L(e){var t,n,r,i;C.assert(!f(e),"Invalid JSON number"),0===e?t=1/e==-1/(r=n=0)?1:0:(t=e<0,r=(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,Math.round(e/Math.pow(2,-1074))));for(var o=[],s=52;s;--s)o.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;--s)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();var a=o.join(""),u="";for(s=0;s<64;s+=8){var l=parseInt(a.substr(s,8),2).toString(16);1===l.length&&(l="0"+l),u+=l}return u.toLowerCase()}function M(e){try{e()}catch(t){setTimeout(function(){var e=t.stack||"";throw y("Exception was thrown by user callback.",e),t},Math.floor(0))}}function W(e,t){var n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n}var j=new RegExp("^-?(0*)\\d{1,10}$"),q=function(e){if(j.test(e)){var t=Number(e);if(-2147483648<=t&&t<=2147483647)return t}return null},V=(Object.defineProperty(U,"Empty",{get:function(){return new U("")},enumerable:!1,configurable:!0}),U.prototype.getFront=function(){return this.pieceNum_>=this.pieces_.length?null:this.pieces_[this.pieceNum_]},U.prototype.getLength=function(){return this.pieces_.length-this.pieceNum_},U.prototype.popFront=function(){var e=this.pieceNum_;return e<this.pieces_.length&&e++,new U(this.pieces_,e)},U.prototype.getBack=function(){return this.pieceNum_<this.pieces_.length?this.pieces_[this.pieces_.length-1]:null},U.prototype.toString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"},U.prototype.toUrlEncodedString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+encodeURIComponent(String(this.pieces_[t])));return e||"/"},U.prototype.slice=function(e){return void 0===e&&(e=0),this.pieces_.slice(this.pieceNum_+e)},U.prototype.parent=function(){if(this.pieceNum_>=this.pieces_.length)return null;for(var e=[],t=this.pieceNum_;t<this.pieces_.length-1;t++)e.push(this.pieces_[t]);return new U(e,0)},U.prototype.child=function(e){for(var t=[],n=this.pieceNum_;n<this.pieces_.length;n++)t.push(this.pieces_[n]);if(e instanceof U)for(n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else for(var r=e.split("/"),n=0;n<r.length;n++)0<r[n].length&&t.push(r[n]);return new U(t,0)},U.prototype.isEmpty=function(){return this.pieceNum_>=this.pieces_.length},U.relativePath=function(e,t){var n=e.getFront(),r=t.getFront();if(null===n)return t;if(n===r)return U.relativePath(e.popFront(),t.popFront());throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")},U.comparePaths=function(e,t){for(var n=e.slice(),r=t.slice(),i=0;i<n.length&&i<r.length;i++){var o=x(n[i],r[i]);if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1},U.prototype.equals=function(e){if(this.getLength()!==e.getLength())return!1;for(var t=this.pieceNum_,n=e.pieceNum_;t<=this.pieces_.length;t++,n++)if(this.pieces_[t]!==e.pieces_[n])return!1;return!0},U.prototype.contains=function(e){var t=this.pieceNum_,n=e.pieceNum_;if(this.getLength()>e.getLength())return!1;for(;t<this.pieces_.length;){if(this.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0},U);function U(e,t){if(void 0===t){this.pieces_=e.split("/");for(var n=0,r=0;r<this.pieces_.length;r++)0<this.pieces_[r].length&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}var Q=(Object.defineProperty(H,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!1,configurable:!0}),Object.defineProperty(H,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!1,configurable:!0}),H.prototype.push=function(e){0<this.parts_.length&&(this.byteLength_+=1),this.parts_.push(e),this.byteLength_+=C.stringLength(e),this.checkValid_()},H.prototype.pop=function(){var e=this.parts_.pop();this.byteLength_-=C.stringLength(e),0<this.parts_.length&&--this.byteLength_},H.prototype.checkValid_=function(){if(this.byteLength_>H.MAX_PATH_LENGTH_BYTES)throw new Error(this.errorPrefix_+"has a key path longer than "+H.MAX_PATH_LENGTH_BYTES+" bytes ("+this.byteLength_+").");if(this.parts_.length>H.MAX_PATH_DEPTH)throw new Error(this.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},H.prototype.toErrorString=function(){return 0===this.parts_.length?"":"in property '"+this.parts_.join(".")+"'"},H);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){this.errorPrefix_=t,this.parts_=e.slice(),this.byteLength_=Math.max(1,this.parts_.length);for(var n=0;n<this.parts_.length;n++)this.byteLength_+=C.stringLength(this.parts_[n]);this.checkValid_()}var B="firebaseio.com",z="websocket",K="long_polling",G=(Y.prototype.needsQueryParam=function(){return this.host!==this.internalHost||this.isCustomHost()||this.includeNamespaceInQueryParams},Y.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},Y.prototype.isDemoHost=function(){return"firebaseio-demo.com"===this.domain},Y.prototype.isCustomHost=function(){return"firebaseio.com"!==this.domain&&"firebaseio-demo.com"!==this.domain},Y.prototype.updateHost=function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&w.set("host:"+this.host,this.internalHost))},Y.prototype.connectionURL=function(e,t){var n;if(C.assert("string"==typeof e,"typeof type must == string"),C.assert("object"==typeof t,"typeof params must == object"),e===z)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?";else{if(e!==K)throw new Error("Unknown connection type: "+e);n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?"}this.needsQueryParam()&&(t.ns=this.namespace);var r=[];return F(t,function(e,t){r.push(e+"="+t)}),n+r.join("&")},Y.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},Y.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},Y);function Y(e,t,n,r,i,o){void 0===i&&(i=""),void 0===o&&(o=!1),this.secure=t,this.namespace=n,this.webSocketOnly=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this.host=e.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=w.get("host:"+e)||this.host}function $(e){var t=ue(e),n=t.namespace;"firebase.com"===t.domain&&d(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===t.domain||d("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var r="ws"===t.scheme||"wss"===t.scheme;return{repoInfo:new G(t.host,t.secure,n,r,"",n!==t.subdomain),path:new V(t.pathString)}}function X(e){return"string"==typeof e&&0!==e.length&&!le.test(e)}function J(e){return"string"==typeof e&&0!==e.length&&!he.test(e)}function Z(e){return null===e||"string"==typeof e||"number"==typeof e&&!f(e)||e&&"object"==typeof e&&C.contains(e,".sv")}function ee(e,t,n,r,i){i&&void 0===n||pe(C.errorPrefix(e,t,i),n,r)}function te(e,t,n,r,i){if(!i||void 0!==n){var o=C.errorPrefix(e,t,i);if(!n||"object"!=typeof n||Array.isArray(n))throw new Error(o+" must be an object containing the children to replace.");var s=[];F(n,function(e,t){var n=new V(e);if(pe(o,t,r.child(n)),".priority"===n.getBack()&&!Z(t))throw new Error(o+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(n)}),function(e,t){for(var n,r=0;r<t.length;r++)for(var i=(n=t[r]).slice(),o=0;o<i.length;o++)if((".priority"!==i[o]||o!==i.length-1)&&!X(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+n.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(V.comparePaths);var s=null;for(r=0;r<t.length;r++){if(n=t[r],null!==s&&s.contains(n))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+n.toString());s=n}}(o,s)}}function ne(e,t,n,r){if(!r||void 0!==n){if(f(n))throw new Error(C.errorPrefix(e,t,r)+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Z(n))throw new Error(C.errorPrefix(e,t,r)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}}function re(e,t,n,r){if(!r||void 0!==n)switch(n){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(C.errorPrefix(e,t,r)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}function ie(e,t,n,r){if(!(r&&void 0===n||X(n)))throw new Error(C.errorPrefix(e,t,r)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}function oe(e,t,n,r){if(!(r&&void 0===n||J(n)))throw new Error(C.errorPrefix(e,t,r)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')}function se(e,t){if(".info"===t.getFront())throw new Error(e+" failed = Can't modify data under /.info/")}function ae(e,t,n){var r,i=n.path.toString();if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!X(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==i.length&&(r=(r=i)&&r.replace(/^\/*\.info(\/|$)/,"/"),!J(r)))throw new Error(C.errorPrefix(e,t,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')}var ue=function(e){var t,n,r,i,o,s,a="",u="",l="",h="",c="",p=!0,d="https",f=443;return"string"==typeof e&&(0<=(i=e.indexOf("//"))&&(d=e.substring(0,i-1),e=e.substring(i+2)),-1===(t=e.indexOf("/"))&&(t=e.length),-1===(n=e.indexOf("?"))&&(n=e.length),a=e.substring(0,Math.min(t,n)),t<n&&(h=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(0<n[r].length){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(t,n))),r=function(e){var t,n,r={};"?"===e.charAt(0)&&(e=e.substring(1));try{for(var i=_.__values(e.split("&")),o=i.next();!o.done;o=i.next()){var s,a=o.value;0!==a.length&&(2===(s=a.split("=")).length?r[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):y("Invalid query segment '"+a+"' in query '"+e+"'"))}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}(e.substring(Math.min(e.length,n))),0<=(i=a.indexOf(":"))?(p="https"===d||"wss"===d,f=parseInt(a.substring(i+1),10)):i=a.length,"localhost"===(o=a.slice(0,i)).toLowerCase()?u="localhost":o.split(".").length<=2?u=o:(s=a.indexOf("."),l=a.substring(0,s).toLowerCase(),u=a.substring(s+1),c=l),"ns"in r&&(c=r.ns)),{host:a,port:f,domain:u,subdomain:l,secure:p,scheme:d,pathString:h,namespace:c}},le=/[\[\].#$\/\u0000-\u001F\u007F]/,he=/[\[\].#$\u0000-\u001F\u007F]/,ce=10485760,pe=function(n,e,t){var r=t instanceof V?new Q(t,n):t;if(void 0===e)throw new Error(n+"contains undefined "+r.toErrorString());if("function"==typeof e)throw new Error(n+"contains a function "+r.toErrorString()+" with contents = "+e.toString());if(f(e))throw new Error(n+"contains "+e.toString()+" "+r.toErrorString());if("string"==typeof e&&e.length>ce/3&&C.stringLength(e)>ce)throw new Error(n+"contains a string greater than "+ce+" utf8 bytes "+r.toErrorString()+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){var i=!1,o=!1;if(F(e,function(e,t){if(".value"===e)i=!0;else if(".priority"!==e&&".sv"!==e&&(o=!0,!X(e)))throw new Error(n+" contains an invalid key ("+e+") "+r.toErrorString()+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');r.push(e),pe(n,t,r),r.pop()}),i&&o)throw new Error(n+' contains ".value" child '+r.toErrorString()+" in addition to actual children.")}},de=(fe.prototype.cancel=function(e){C.validateArgCount("OnDisconnect.cancel",0,1,arguments.length),C.validateCallback("OnDisconnect.cancel",1,e,!0);var t=new C.Deferred;return this.repo_.onDisconnectCancel(this.path_,t.wrapCallback(e)),t.promise},fe.prototype.remove=function(e){C.validateArgCount("OnDisconnect.remove",0,1,arguments.length),se("OnDisconnect.remove",this.path_),C.validateCallback("OnDisconnect.remove",1,e,!0);var t=new C.Deferred;return this.repo_.onDisconnectSet(this.path_,null,t.wrapCallback(e)),t.promise},fe.prototype.set=function(e,t){C.validateArgCount("OnDisconnect.set",1,2,arguments.length),se("OnDisconnect.set",this.path_),ee("OnDisconnect.set",1,e,this.path_,!1),C.validateCallback("OnDisconnect.set",2,t,!0);var n=new C.Deferred;return this.repo_.onDisconnectSet(this.path_,e,n.wrapCallback(t)),n.promise},fe.prototype.setWithPriority=function(e,t,n){C.validateArgCount("OnDisconnect.setWithPriority",2,3,arguments.length),se("OnDisconnect.setWithPriority",this.path_),ee("OnDisconnect.setWithPriority",1,e,this.path_,!1),ne("OnDisconnect.setWithPriority",2,t,!1),C.validateCallback("OnDisconnect.setWithPriority",3,n,!0);var r=new C.Deferred;return this.repo_.onDisconnectSetWithPriority(this.path_,e,t,r.wrapCallback(n)),r.promise},fe.prototype.update=function(e,t){if(C.validateArgCount("OnDisconnect.update",1,2,arguments.length),se("OnDisconnect.update",this.path_),Array.isArray(e)){for(var n={},r=0;r<e.length;++r)n[""+r]=e[r];e=n,y("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}te("OnDisconnect.update",1,e,this.path_,!1),C.validateCallback("OnDisconnect.update",2,t,!0);var i=new C.Deferred;return this.repo_.onDisconnectUpdate(this.path_,e,i.wrapCallback(t)),i.promise},fe);function fe(e,t){this.repo_=e,this.path_=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _e=(ye.prototype.toJSON=function(){return C.validateArgCount("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},ye);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,t){this.committed=e,this.snapshot=t}var ve,ge,me,Ce=(ve="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ge=0,me=[],function(e){var t=e===ge;ge=e;for(var n=new Array(8),r=7;0<=r;r--)n[r]=ve.charAt(e%64),e=Math.floor(e/64);C.assert(0===e,"Cannot push at time == 0");var i=n.join("");if(t){for(r=11;0<=r&&63===me[r];r--)me[r]=0;me[r]++}else for(r=0;r<12;r++)me[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)i+=ve.charAt(me[r]);return C.assert(20===i.length,"nextPushId: Length should be 20."),i}),Ee=(we.Wrap=function(e,t){return new we(e,t)},we);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t){this.name=e,this.node=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var be,Se=(Te.prototype.getCompare=function(){return this.compare.bind(this)},Te.prototype.indexedValueChanged=function(e,t){var n=new Ee(D,e),r=new Ee(D,t);return 0!==this.compare(n,r)},Te.prototype.minPost=function(){return Ee.MIN},Te);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){}var Ie,Ne=(Ie=Se,_.__extends(Pe,Ie),Object.defineProperty(Pe,"__EMPTY_NODE",{get:function(){return be},set:function(e){be=e},enumerable:!1,configurable:!0}),Pe.prototype.compare=function(e,t){return x(e.name,t.name)},Pe.prototype.isDefinedOn=function(e){throw C.assertionError("KeyIndex.isDefinedOn not expected to be called.")},Pe.prototype.indexedValueChanged=function(e,t){return!1},Pe.prototype.minPost=function(){return Ee.MIN},Pe.prototype.maxPost=function(){return new Ee(A,be)},Pe.prototype.makePost=function(e,t){return C.assert("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ee(e,be)},Pe.prototype.toString=function(){return".key"},Pe);function Pe(){return null!==Ie&&Ie.apply(this,arguments)||this}var Oe,Re=new Ne;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return"number"==typeof e?"number:"+L(e):"string:"+e}var Ae,xe,ke,Fe,Le=function(e){var t;e.isLeafNode()?(t=e.val(),C.assert("string"==typeof t||"number"==typeof t||"object"==typeof t&&C.contains(t,".sv"),"Priority must be a string or number.")):C.assert(e===Oe||e.isEmpty(),"priority of unexpected type."),C.assert(e===Oe||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Me=(Object.defineProperty(We,"__childrenNodeConstructor",{get:function(){return Ae},set:function(e){Ae=e},enumerable:!1,configurable:!0}),We.prototype.isLeafNode=function(){return!0},We.prototype.getPriority=function(){return this.priorityNode_},We.prototype.updatePriority=function(e){return new We(this.value_,e)},We.prototype.getImmediateChild=function(e){return".priority"===e?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE},We.prototype.getChild=function(e){return e.isEmpty()?this:".priority"===e.getFront()?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE},We.prototype.hasChild=function(){return!1},We.prototype.getPredecessorChildName=function(e,t){return null},We.prototype.updateImmediateChild=function(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)},We.prototype.updateChild=function(e,t){var n=e.getFront();return null===n?t:t.isEmpty()&&".priority"!==n?this:(C.assert(".priority"!==n||1===e.getLength(),".priority must be the last token in a path"),this.updateImmediateChild(n,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(),t)))},We.prototype.isEmpty=function(){return!1},We.prototype.numChildren=function(){return 0},We.prototype.forEachChild=function(e,t){return!1},We.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},We.prototype.hash=function(){var e,t;return null===this.lazyHash_&&(e="",this.priorityNode_.isEmpty()||(e+="priority:"+De(this.priorityNode_.val())+":"),e+=(t=typeof this.value_)+":",e+="number"==t?L(this.value_):this.value_,this.lazyHash_=h(e)),this.lazyHash_},We.prototype.getValue=function(){return this.value_},We.prototype.compareTo=function(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(C.assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},We.prototype.compareToLeafNode_=function(e){var t=typeof e.value_,n=typeof this.value_,r=We.VALUE_TYPE_ORDER.indexOf(t),i=We.VALUE_TYPE_ORDER.indexOf(n);return C.assert(0<=r,"Unknown leaf type: "+t),C.assert(0<=i,"Unknown leaf type: "+n),r===i?"object"==n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r},We.prototype.withIndex=function(){return this},We.prototype.isIndexed=function(){return!0},We.prototype.equals=function(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)},We.VALUE_TYPE_ORDER=["object","boolean","number","string"],We);function We(e,t){void 0===t&&(t=We.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Le(this.priorityNode_)}function je(){return null!==Fe&&Fe.apply(this,arguments)||this}var qe=new(Fe=Se,_.__extends(je,Fe),je.prototype.compare=function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?x(e.name,t.name):i},je.prototype.isDefinedOn=function(e){return!e.getPriority().isEmpty()},je.prototype.indexedValueChanged=function(e,t){return!e.getPriority().equals(t.getPriority())},je.prototype.minPost=function(){return Ee.MIN},je.prototype.maxPost=function(){return new Ee(A,new Me("[PRIORITY-POST]",ke))},je.prototype.makePost=function(e,t){var n=xe(e);return new Ee(t,new Me("[PRIORITY-POST]",n))},je.prototype.toString=function(){return".priority"},je),Ve=(Ue.prototype.getNext=function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_.pop(),t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value};if(this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t},Ue.prototype.hasNext=function(){return 0<this.nodeStack_.length},Ue.prototype.peek=function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},Ue);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e,t,n,r,i){void 0===i&&(i=null),this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];for(var o=1;!e.isEmpty();)if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}var Qe=(He.prototype.copy=function(e,t,n,r,i){return new He(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)},He.prototype.count=function(){return this.left.count()+1+this.right.count()},He.prototype.isEmpty=function(){return!1},He.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},He.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},He.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},He.prototype.minKey=function(){return this.min_().key},He.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},He.prototype.insert=function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()},He.prototype.removeMin_=function(){if(this.left.isEmpty())return Ke.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()},He.prototype.remove=function(e,t){var n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed_()||r.left.left.isRed_()||(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),r.right.isEmpty()||r.right.isRed_()||r.right.left.isRed_()||(r=r.moveRedRight_()),0===t(e,r.key)){if(r.right.isEmpty())return Ke.EMPTY_NODE;n=r.right.min_(),r=r.copy(n.key,n.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()},He.prototype.isRed_=function(){return this.color},He.prototype.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},He.prototype.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e},He.prototype.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e},He.prototype.rotateLeft_=function(){var e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)},He.prototype.rotateRight_=function(){var e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)},He.prototype.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)},He.prototype.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},He.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},He.RED=!0,He.BLACK=!1,He);function He(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:He.RED,this.left=null!=r?r:Ke.EMPTY_NODE,this.right=null!=i?i:Ke.EMPTY_NODE}var Be=(ze.prototype.copy=function(e,t,n,r,i){return this},ze.prototype.insert=function(e,t,n){return new Qe(e,t,null)},ze.prototype.remove=function(e,t){return this},ze.prototype.count=function(){return 0},ze.prototype.isEmpty=function(){return!0},ze.prototype.inorderTraversal=function(e){return!1},ze.prototype.reverseTraversal=function(e){return!1},ze.prototype.minKey=function(){return null},ze.prototype.maxKey=function(){return null},ze.prototype.check_=function(){return 0},ze.prototype.isRed_=function(){return!1},ze);function ze(){}var Ke=(Ge.prototype.insert=function(e,t){return new Ge(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Qe.BLACK,null,null))},Ge.prototype.remove=function(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))},Ge.prototype.get=function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:0<t&&(n=n.right)}return null},Ge.prototype.getPredecessorKey=function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:0<t&&(n=(r=n).right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},Ge.prototype.isEmpty=function(){return this.root_.isEmpty()},Ge.prototype.count=function(){return this.root_.count()},Ge.prototype.minKey=function(){return this.root_.minKey()},Ge.prototype.maxKey=function(){return this.root_.maxKey()},Ge.prototype.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},Ge.prototype.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},Ge.prototype.getIterator=function(e){return new Ve(this.root_,null,this.comparator_,!1,e)},Ge.prototype.getIteratorFrom=function(e,t){return new Ve(this.root_,e,this.comparator_,!1,t)},Ge.prototype.getReverseIteratorFrom=function(e,t){return new Ve(this.root_,e,this.comparator_,!0,t)},Ge.prototype.getReverseIterator=function(e){return new Ve(this.root_,null,this.comparator_,!0,e)},Ge.EMPTY_NODE=new Be,Ge);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e,t){void 0===t&&(t=Ge.EMPTY_NODE),this.comparator_=e,this.root_=t}var Ye=Math.log(2),$e=(Xe.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},Xe);function Xe(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ye,10)),this.current_=this.count-1;var n,r=(n=this.count,parseInt(Array(n+1).join("1"),2));this.bits_=e+1&r}var Je,Ze,et=function(l,e,h,t){l.sort(e);var c=function(e,t){var n=t-e;if(0==n)return null;if(1==n)return s=l[e],a=h?h(s):s,new Qe(a,s.node,Qe.BLACK,null,null);var r=parseInt(n/2,10)+e,i=c(e,r),o=c(r+1,t),s=l[r],a=h?h(s):s;return new Qe(a,s.node,Qe.BLACK,i,o)},n=function(e){for(var t=null,n=null,a=l.length,r=function(e,t){var n=a-e,r=a;a-=e;var i=c(1+n,r),o=l[n],s=h?h(o):o;u(new Qe(s,o.node,t,null,i))},u=function(e){t=t?t.left=e:n=e},i=0;i<e.count;++i){var o=e.nextBitIsOne(),s=Math.pow(2,e.count-(i+1));o?r(s,Qe.BLACK):(r(s,Qe.BLACK),r(s,Qe.RED))}return n}(new $e(l.length));return new Ke(t||e,n)},tt={},nt=(Object.defineProperty(rt,"Default",{get:function(){return C.assert(qe,"ChildrenNode.ts has not been loaded"),Je=Je||new rt({".priority":tt},{".priority":qe})},enumerable:!1,configurable:!0}),rt.prototype.get=function(e){var t=C.safeGet(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ke?t:null},rt.prototype.hasIndex=function(e){return C.contains(this.indexSet_,e.toString())},rt.prototype.addIndex=function(e,t){C.assert(e!==Re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var n,r=[],i=!1,o=t.getIterator(Ee.Wrap),s=o.getNext();s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();n=i?et(r,e.getCompare()):tt;var a=e.toString(),u=_.__assign({},this.indexSet_);u[a]=e;var l=_.__assign({},this.indexes_);return l[a]=n,new rt(l,u)},rt.prototype.addToIndexes=function(u,l){var h=this;return new rt(C.map(this.indexes_,function(e,t){var n=C.safeGet(h.indexSet_,t);if(C.assert(n,"Missing index implementation for "+t),e===tt){if(n.isDefinedOn(u.node)){for(var r=[],i=l.getIterator(Ee.Wrap),o=i.getNext();o;)o.name!==u.name&&r.push(o),o=i.getNext();return r.push(u),et(r,n.getCompare())}return tt}var s=l.get(u.name),a=e;return s&&(a=a.remove(new Ee(u.name,s))),a.insert(u,u.node)}),this.indexSet_)},rt.prototype.removeFromIndexes=function(n,r){return new rt(C.map(this.indexes_,function(e){if(e===tt)return e;var t=r.get(n.name);return t?e.remove(new Ee(n.name,t)):e}),this.indexSet_)},rt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){this.indexes_=e,this.indexSet_=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function it(e,t){return x(e.name,t.name)}function ot(e,t){return x(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,at=(Object.defineProperty(ut,"EMPTY_NODE",{get:function(){return Ze=Ze||new ut(new Ke(ot),null,nt.Default)},enumerable:!1,configurable:!0}),ut.prototype.isLeafNode=function(){return!1},ut.prototype.getPriority=function(){return this.priorityNode_||Ze},ut.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new ut(this.children_,e,this.indexMap_)},ut.prototype.getImmediateChild=function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Ze:t},ut.prototype.getChild=function(e){var t=e.getFront();return null===t?this:this.getImmediateChild(t).getChild(e.popFront())},ut.prototype.hasChild=function(e){return null!==this.children_.get(e)},ut.prototype.updateImmediateChild=function(e,t){if(C.assert(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);var n=new Ee(e,t),r=void 0,i=void 0,i=t.isEmpty()?(r=this.children_.remove(e),this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),this.indexMap_.addToIndexes(n,this.children_)),o=r.isEmpty()?Ze:this.priorityNode_;return new ut(r,o,i)},ut.prototype.updateChild=function(e,t){var n=e.getFront();if(null===n)return t;C.assert(".priority"!==e.getFront()||1===e.getLength(),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(e.popFront(),t);return this.updateImmediateChild(n,r)},ut.prototype.isEmpty=function(){return this.children_.isEmpty()},ut.prototype.numChildren=function(){return this.children_.count()},ut.prototype.val=function(n){if(this.isEmpty())return null;var r={},i=0,o=0,s=!0;if(this.forEachChild(qe,function(e,t){r[e]=t.val(n),i++,s&&ut.INTEGER_REGEXP_.test(e)?o=Math.max(o,Number(e)):s=!1}),!n&&s&&o<2*i){var e=[];for(var t in r)e[t]=r[t];return e}return n&&!this.getPriority().isEmpty()&&(r[".priority"]=this.getPriority().val()),r},ut.prototype.hash=function(){var r;return null===this.lazyHash_&&(r="",this.getPriority().isEmpty()||(r+="priority:"+De(this.getPriority().val())+":"),this.forEachChild(qe,function(e,t){var n=t.hash();""!==n&&(r+=":"+e+":"+n)}),this.lazyHash_=""===r?"":h(r)),this.lazyHash_},ut.prototype.getPredecessorChildName=function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ee(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)},ut.prototype.getFirstChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()},ut.prototype.getFirstChild=function(e){var t=this.getFirstChildName(e);return t?new Ee(t,this.children_.get(t)):null},ut.prototype.getLastChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()},ut.prototype.getLastChild=function(e){var t=this.getLastChildName(e);return t?new Ee(t,this.children_.get(t)):null},ut.prototype.forEachChild=function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal(function(e){return t(e.name,e.node)}):this.children_.inorderTraversal(t)},ut.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},ut.prototype.getIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,function(e){return e});for(var r=this.children_.getIteratorFrom(e.name,Ee.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r},ut.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},ut.prototype.getReverseIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,function(e){return e});for(var r=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap),i=r.peek();null!=i&&0<t.compare(i,e);)r.getNext(),i=r.peek();return r},ut.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ht?-1:0},ut.prototype.withIndex=function(e){if(e===Re||this.indexMap_.hasIndex(e))return this;var t=this.indexMap_.addIndex(e,this.children_);return new ut(this.children_,this.priorityNode_,t)},ut.prototype.isIndexed=function(e){return e===Re||this.indexMap_.hasIndex(e)},ut.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()!==t.children_.count())return!1;for(var n=this.getIterator(qe),r=t.getIterator(qe),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1},ut.prototype.resolveIndex_=function(e){return e===Re?null:this.indexMap_.get(e.toString())},ut.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,ut);function ut(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Le(this.priorityNode_),this.children_.isEmpty()&&C.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}function lt(){return st.call(this,new Ke(ot),at.EMPTY_NODE,nt.Default)||this}var ht=new(st=at,_.__extends(lt,st),lt.prototype.compareTo=function(e){return e===this?0:1},lt.prototype.equals=function(e){return e===this},lt.prototype.getPriority=function(){return this},lt.prototype.getImmediateChild=function(e){return at.EMPTY_NODE},lt.prototype.isEmpty=function(){return!1},lt);Object.defineProperties(Ee,{MIN:{value:new Ee(D,at.EMPTY_NODE)},MAX:{value:new Ee(A,ht)}}),Ne.__EMPTY_NODE=at.EMPTY_NODE,Me.__childrenNodeConstructor=at,Oe=ht,ke=ht;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ct,pt=!0;function dt(r,e){if(void 0===e&&(e=null),null===r)return at.EMPTY_NODE;if("object"==typeof r&&".priority"in r&&(e=r[".priority"]),C.assert(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof r&&".value"in r&&null!==r[".value"]&&(r=r[".value"]),"object"!=typeof r||".sv"in r)return new Me(r,dt(e));if(r instanceof Array||!pt){var i=at.EMPTY_NODE;return F(r,function(e,t){var n;C.contains(r,e)&&"."!==e.substring(0,1)&&(!(n=dt(t)).isLeafNode()&&n.isEmpty()||(i=i.updateImmediateChild(e,n)))}),i.updatePriority(dt(e))}var o=[],s=!1;if(F(r,function(e,t){var n;"."!==e.substring(0,1)&&((n=dt(t)).isEmpty()||(s=s||!n.getPriority().isEmpty(),o.push(new Ee(e,n))))}),0===o.length)return at.EMPTY_NODE;var t=et(o,it,function(e){return e.name},ot);if(s){var n=et(o,qe.getCompare());return new at(t,dt(e),new nt({".priority":n},{".priority":qe}))}return new at(t,dt(e),nt.Default)}function ft(){return null!==ct&&ct.apply(this,arguments)||this}xe=dt;var _t,yt=new(ct=Se,_.__extends(ft,ct),ft.prototype.compare=function(e,t){var n=e.node.compareTo(t.node);return 0===n?x(e.name,t.name):n},ft.prototype.isDefinedOn=function(e){return!0},ft.prototype.indexedValueChanged=function(e,t){return!e.equals(t)},ft.prototype.minPost=function(){return Ee.MIN},ft.prototype.maxPost=function(){return Ee.MAX},ft.prototype.makePost=function(e,t){var n=dt(e);return new Ee(t,n)},ft.prototype.toString=function(){return".value"},ft),vt=(_t=Se,_.__extends(gt,_t),gt.prototype.extractChild=function(e){return e.getChild(this.indexPath_)},gt.prototype.isDefinedOn=function(e){return!e.getChild(this.indexPath_).isEmpty()},gt.prototype.compare=function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?x(e.name,t.name):i},gt.prototype.makePost=function(e,t){var n=dt(e),r=at.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ee(t,r)},gt.prototype.maxPost=function(){var e=at.EMPTY_NODE.updateChild(this.indexPath_,ht);return new Ee(A,e)},gt.prototype.toString=function(){return this.indexPath_.slice().join("/")},gt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){var t=_t.call(this)||this;return t.indexPath_=e,C.assert(!e.isEmpty()&&".priority"!==e.getFront(),"Can't create PathIndex with empty path or .priority key"),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mt=(Ct.prototype.val=function(){return C.validateArgCount("DataSnapshot.val",0,0,arguments.length),this.node_.val()},Ct.prototype.exportVal=function(){return C.validateArgCount("DataSnapshot.exportVal",0,0,arguments.length),this.node_.val(!0)},Ct.prototype.toJSON=function(){return C.validateArgCount("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},Ct.prototype.exists=function(){return C.validateArgCount("DataSnapshot.exists",0,0,arguments.length),!this.node_.isEmpty()},Ct.prototype.child=function(e){C.validateArgCount("DataSnapshot.child",0,1,arguments.length),e=String(e),oe("DataSnapshot.child",1,e,!1);var t=new V(e),n=this.ref_.child(t);return new Ct(this.node_.getChild(t),n,qe)},Ct.prototype.hasChild=function(e){C.validateArgCount("DataSnapshot.hasChild",1,1,arguments.length),oe("DataSnapshot.hasChild",1,e,!1);var t=new V(e);return!this.node_.getChild(t).isEmpty()},Ct.prototype.getPriority=function(){return C.validateArgCount("DataSnapshot.getPriority",0,0,arguments.length),this.node_.getPriority().val()},Ct.prototype.forEach=function(n){var r=this;return C.validateArgCount("DataSnapshot.forEach",1,1,arguments.length),C.validateCallback("DataSnapshot.forEach",1,n,!1),!this.node_.isLeafNode()&&!!this.node_.forEachChild(this.index_,function(e,t){return n(new Ct(t,r.ref_.child(e),qe))})},Ct.prototype.hasChildren=function(){return C.validateArgCount("DataSnapshot.hasChildren",0,0,arguments.length),!this.node_.isLeafNode()&&!this.node_.isEmpty()},Object.defineProperty(Ct.prototype,"key",{get:function(){return this.ref_.getKey()},enumerable:!1,configurable:!0}),Ct.prototype.numChildren=function(){return C.validateArgCount("DataSnapshot.numChildren",0,0,arguments.length),this.node_.numChildren()},Ct.prototype.getRef=function(){return C.validateArgCount("DataSnapshot.ref",0,0,arguments.length),this.ref_},Object.defineProperty(Ct.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),Ct);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t,n){this.node_=e,this.ref_=t,this.index_=n}var Et=(wt.prototype.getPath=function(){var e=this.snapshot.getRef();return"value"===this.eventType?e.path:e.getParent().path},wt.prototype.getEventType=function(){return this.eventType},wt.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},wt.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+C.stringify(this.snapshot.exportVal())},wt);function wt(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}var bt=(St.prototype.getPath=function(){return this.path},St.prototype.getEventType=function(){return"cancel"},St.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},St.prototype.toString=function(){return this.path.toString()+":cancel"},St);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}var Tt=(It.prototype.respondsTo=function(e){return"value"===e},It.prototype.createEvent=function(e,t){var n=t.getQueryParams().getIndex();return new Et("value",this,new mt(e.snapshotNode,t.getRef(),n))},It.prototype.getEventRunner=function(e){var t=this.context_;if("cancel"===e.getEventType()){C.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(t,e.error)}}var r=this.callback_;return function(){r.call(t,e.snapshot)}},It.prototype.createCancelEvent=function(e,t){return this.cancelCallback_?new bt(this,e,t):null},It.prototype.matches=function(e){return e instanceof It&&(!e.callback_||!this.callback_||e.callback_===this.callback_&&e.context_===this.context_)},It.prototype.hasAnyCallback=function(){return null!==this.callback_},It);function It(e,t,n){this.callback_=e,this.cancelCallback_=t,this.context_=n}var Nt,Pt=(Ot.prototype.respondsTo=function(e){var t="children_removed"===(t="children_added"===e?"child_added":e)?"child_removed":t;return C.contains(this.callbacks_,t)},Ot.prototype.createCancelEvent=function(e,t){return this.cancelCallback_?new bt(this,e,t):null},Ot.prototype.createEvent=function(e,t){C.assert(null!=e.childName,"Child events should have a childName.");var n=t.getRef().child(e.childName),r=t.getQueryParams().getIndex();return new Et(e.type,this,new mt(e.snapshotNode,n,r),e.prevName)},Ot.prototype.getEventRunner=function(e){var t=this.context_;if("cancel"===e.getEventType()){C.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(t,e.error)}}var r=this.callbacks_[e.eventType];return function(){r.call(t,e.snapshot,e.prevName)}},Ot.prototype.matches=function(t){var n=this;if(t instanceof Ot){if(!this.callbacks_||!t.callbacks_)return!0;if(this.context_===t.context_){var e=Object.keys(t.callbacks_),r=Object.keys(this.callbacks_),i=e.length;if(i===r.length){if(1!==i)return r.every(function(e){return t.callbacks_[e]===n.callbacks_[e]});var o=e[0],s=r[0];return!(s!==o||t.callbacks_[o]&&this.callbacks_[s]&&t.callbacks_[o]!==this.callbacks_[s])}}}return!1},Ot.prototype.hasAnyCallback=function(){return null!==this.callbacks_},Ot);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t,n){this.callbacks_=e,this.cancelCallback_=t,this.context_=n}var Rt=(Object.defineProperty(Dt,"__referenceConstructor",{get:function(){return C.assert(Nt,"Reference.ts has not been loaded"),Nt},set:function(e){Nt=e},enumerable:!1,configurable:!0}),Dt.validateQueryEndpoints_=function(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Re){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==D)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==A)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===qe){if(null!=t&&!Z(t)||null!=n&&!Z(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(C.assert(e.getIndex()instanceof vt||e.getIndex()===yt,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},Dt.validateLimit_=function(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},Dt.prototype.validateNoPreviousOrderByCall_=function(e){if(!0===this.orderByCalled_)throw new Error(e+": You can't combine multiple orderBy calls.")},Dt.prototype.getQueryParams=function(){return this.queryParams_},Dt.prototype.getRef=function(){return C.validateArgCount("Query.ref",0,0,arguments.length),new Dt.__referenceConstructor(this.repo,this.path)},Dt.prototype.on=function(e,t,n,r){C.validateArgCount("Query.on",2,4,arguments.length),re("Query.on",1,e,!1),C.validateCallback("Query.on",2,t,!1);var i,o=Dt.getCancelAndContextArgs_("Query.on",n,r);return"value"===e?this.onValueEvent(t,o.cancel,o.context):((i={})[e]=t,this.onChildEvent(i,o.cancel,o.context)),t},Dt.prototype.onValueEvent=function(e,t,n){var r=new Tt(e,t||null,n||null);this.repo.addEventCallbackForQuery(this,r)},Dt.prototype.onChildEvent=function(e,t,n){var r=new Pt(e,t,n);this.repo.addEventCallbackForQuery(this,r)},Dt.prototype.off=function(e,t,n){C.validateArgCount("Query.off",0,3,arguments.length),re("Query.off",1,e,!0),C.validateCallback("Query.off",2,t,!0),C.validateContextObject("Query.off",3,n,!0);var r=null,i=null;"value"===e?r=new Tt(t||null,null,n||null):e&&(t&&((i={})[e]=t),r=new Pt(i,null,n||null)),this.repo.removeEventCallbackForQuery(this,r)},Dt.prototype.once=function(t,n,e,r){var i=this;C.validateArgCount("Query.once",1,4,arguments.length),re("Query.once",1,t,!1),C.validateCallback("Query.once",2,n,!0);var o=Dt.getCancelAndContextArgs_("Query.once",e,r),s=!0,a=new C.Deferred;a.promise.catch(function(){});var u=function(e){s&&(s=!1,i.off(t,u),n&&n.bind(o.context)(e),a.resolve(e))};return this.on(t,u,function(e){i.off(t,u),o.cancel&&o.cancel.bind(o.context)(e),a.reject(e)}),a.promise},Dt.prototype.limitToFirst=function(e){if(C.validateArgCount("Query.limitToFirst",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToFirst: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Dt(this.repo,this.path,this.queryParams_.limitToFirst(e),this.orderByCalled_)},Dt.prototype.limitToLast=function(e){if(C.validateArgCount("Query.limitToLast",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToLast: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Dt(this.repo,this.path,this.queryParams_.limitToLast(e),this.orderByCalled_)},Dt.prototype.orderByChild=function(e){if(C.validateArgCount("Query.orderByChild",1,1,arguments.length),"$key"===e)throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===e)throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===e)throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');oe("Query.orderByChild",1,e,!1),this.validateNoPreviousOrderByCall_("Query.orderByChild");var t=new V(e);if(t.isEmpty())throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");var n=new vt(t),r=this.queryParams_.orderBy(n);return Dt.validateQueryEndpoints_(r),new Dt(this.repo,this.path,r,!0)},Dt.prototype.orderByKey=function(){C.validateArgCount("Query.orderByKey",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByKey");var e=this.queryParams_.orderBy(Re);return Dt.validateQueryEndpoints_(e),new Dt(this.repo,this.path,e,!0)},Dt.prototype.orderByPriority=function(){C.validateArgCount("Query.orderByPriority",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByPriority");var e=this.queryParams_.orderBy(qe);return Dt.validateQueryEndpoints_(e),new Dt(this.repo,this.path,e,!0)},Dt.prototype.orderByValue=function(){C.validateArgCount("Query.orderByValue",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByValue");var e=this.queryParams_.orderBy(yt);return Dt.validateQueryEndpoints_(e),new Dt(this.repo,this.path,e,!0)},Dt.prototype.startAt=function(e,t){void 0===e&&(e=null),C.validateArgCount("Query.startAt",0,2,arguments.length),ee("Query.startAt",1,e,this.path,!0),ie("Query.startAt",2,t,!0);var n=this.queryParams_.startAt(e,t);if(Dt.validateLimit_(n),Dt.validateQueryEndpoints_(n),this.queryParams_.hasStart())throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");return void 0===e&&(t=e=null),new Dt(this.repo,this.path,n,this.orderByCalled_)},Dt.prototype.endAt=function(e,t){void 0===e&&(e=null),C.validateArgCount("Query.endAt",0,2,arguments.length),ee("Query.endAt",1,e,this.path,!0),ie("Query.endAt",2,t,!0);var n=this.queryParams_.endAt(e,t);if(Dt.validateLimit_(n),Dt.validateQueryEndpoints_(n),this.queryParams_.hasEnd())throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Dt(this.repo,this.path,n,this.orderByCalled_)},Dt.prototype.equalTo=function(e,t){if(C.validateArgCount("Query.equalTo",1,2,arguments.length),ee("Query.equalTo",1,e,this.path,!1),ie("Query.equalTo",2,t,!0),this.queryParams_.hasStart())throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.queryParams_.hasEnd())throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.startAt(e,t).endAt(e,t)},Dt.prototype.toString=function(){return C.validateArgCount("Query.toString",0,0,arguments.length),this.repo.toString()+this.path.toUrlEncodedString()},Dt.prototype.toJSON=function(){return C.validateArgCount("Query.toJSON",0,1,arguments.length),this.toString()},Dt.prototype.queryObject=function(){return this.queryParams_.getQueryObject()},Dt.prototype.queryIdentifier=function(){var e=this.queryObject(),t=k(e);return"{}"===t?"default":t},Dt.prototype.isEqual=function(e){if(C.validateArgCount("Query.isEqual",1,1,arguments.length),!(e instanceof Dt))throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var t=this.repo===e.repo,n=this.path.equals(e.path),r=this.queryIdentifier()===e.queryIdentifier();return t&&n&&r},Dt.getCancelAndContextArgs_=function(e,t,n){var r={cancel:null,context:null};if(t&&n)r.cancel=t,C.validateCallback(e,3,r.cancel,!0),r.context=n,C.validateContextObject(e,4,r.context,!0);else if(t)if("object"==typeof t&&null!==t)r.context=t;else{if("function"!=typeof t)throw new Error(C.errorPrefix(e,3,!0)+" must either be a cancel callback or a context object.");r.cancel=t}return r},Object.defineProperty(Dt.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),Dt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t,n,r){this.repo=e,this.path=t,this.queryParams_=n,this.orderByCalled_=r}var At=(xt.prototype.getImmediateChild=function(e){return new xt(this.node_.getImmediateChild(e))},xt.prototype.node=function(){return this.node_},xt);function xt(e){this.node_=e}var kt=(Ft.prototype.getImmediateChild=function(e){var t=this.path_.child(e);return new Ft(this.syncTree_,t)},Ft.prototype.node=function(){return this.syncTree_.calcCompleteEventCache(this.path_)},Ft);function Ft(e,t){this.syncTree_=e,this.path_=t}function Lt(e,t,n,r){return Vt(t,new kt(n,e),r)}function Mt(e,t,n){return Vt(e,new At(t),n)}var Wt=function(e,t,n){return e&&"object"==typeof e?(C.assert(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?jt(e[".sv"],t,n):"object"==typeof e[".sv"]?qt(e[".sv"],t):void C.assert(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},jt=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:C.assert(!1,"Unexpected server value: "+e)}},qt=function(e,t,n){e.hasOwnProperty("increment")||C.assert(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&C.assert(!1,"Unexpected increment value: "+r);var i=t.node();if(C.assert(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i.getValue();return"number"!=typeof o?r:o+r};function Vt(e,r,i){var t=e.getPriority().val(),n=Wt(t,r.getImmediateChild(".priority"),i);if(e.isLeafNode()){var o=e,s=Wt(o.getValue(),r,i);return s!==o.getValue()||n!==o.getPriority().val()?new Me(s,dt(n)):e}var a=e,u=a;return n!==a.getPriority().val()&&(u=u.updatePriority(new Me(n))),a.forEachChild(qe,function(e,t){var n=Vt(t,r.getImmediateChild(e),i);n!==t&&(u=u.updateImmediateChild(e,n))}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut,Qt,Ht=(Bt.prototype.find=function(e){if(null!=this.value)return this.value.getChild(e);if(!e.isEmpty()&&0<this.children.size){var t=e.getFront();return e=e.popFront(),this.children.has(t)?this.children.get(t).find(e):null}return null},Bt.prototype.remember=function(e,t){var n,r;e.isEmpty()?(this.value=t,this.children.clear()):null!==this.value?this.value=this.value.updateChild(e,t):(n=e.getFront(),this.children.has(n)||this.children.set(n,new Bt),r=this.children.get(n),e=e.popFront(),r.remember(e,t))},Bt.prototype.forget=function(e){if(e.isEmpty())return this.value=null,this.children.clear(),!0;if(null!==this.value){if(this.value.isLeafNode())return!1;var t=this.value;this.value=null;var n=this;return t.forEachChild(qe,function(e,t){n.remember(new V(e),t)}),this.forget(e)}if(0<this.children.size){var r=e.getFront();return e=e.popFront(),this.children.has(r)&&this.children.get(r).forget(e)&&this.children.delete(r),0===this.children.size}return!0},Bt.prototype.forEachTree=function(r,i){null!==this.value?i(r,this.value):this.forEachChild(function(e,t){var n=new V(r.toString()+"/"+e);t.forEachTree(n,i)})},Bt.prototype.forEachChild=function(n){this.children.forEach(function(e,t){n(t,e)})},Bt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){this.value=null,this.children=new Map}(Qt=Ut=Ut||{})[Qt.OVERWRITE=0]="OVERWRITE",Qt[Qt.MERGE=1]="MERGE",Qt[Qt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Qt[Qt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var zt=(Kt.User=new Kt(!0,!1,null,!1),Kt.Server=new Kt(!1,!0,null,!1),Kt.forServerTaggedQuery=function(e){return new Kt(!1,!0,e,!0)},Kt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t,n,r){this.fromUser=e,this.fromServer=t,this.queryId=n,this.tagged=r,C.assert(!r||t,"Tagged queries must be from server.")}var Gt,Yt=($t.prototype.operationForChild=function(e){if(this.path.isEmpty()){if(null!=this.affectedTree.value)return C.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var t=this.affectedTree.subtree(new V(e));return new $t(V.Empty,t,this.revert)}return C.assert(this.path.getFront()===e,"operationForChild called for unrelated child."),new $t(this.path.popFront(),this.affectedTree,this.revert)},$t);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ut.ACK_USER_WRITE,this.source=zt.User}var Xt=(Jt.fromObject=function(e){var n=Jt.Empty;return F(e,function(e,t){n=n.set(new V(e),t)}),n},Jt.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},Jt.prototype.findRootMostMatchingPathAndValue=function(e,t){if(null!=this.value&&t(this.value))return{path:V.Empty,value:this.value};if(e.isEmpty())return null;var n=e.getFront(),r=this.children.get(n);if(null===r)return null;var i=r.findRootMostMatchingPathAndValue(e.popFront(),t);return null==i?null:{path:new V(n).child(i.path),value:i.value}},Jt.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,function(){return!0})},Jt.prototype.subtree=function(e){if(e.isEmpty())return this;var t=e.getFront(),n=this.children.get(t);return null!==n?n.subtree(e.popFront()):Jt.Empty},Jt.prototype.set=function(e,t){if(e.isEmpty())return new Jt(t,this.children);var n=e.getFront(),r=(this.children.get(n)||Jt.Empty).set(e.popFront(),t),i=this.children.insert(n,r);return new Jt(this.value,i)},Jt.prototype.remove=function(e){if(e.isEmpty())return this.children.isEmpty()?Jt.Empty:new Jt(null,this.children);var t=e.getFront(),n=this.children.get(t);if(n){var r=n.remove(e.popFront()),i=void 0,i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r);return null===this.value&&i.isEmpty()?Jt.Empty:new Jt(this.value,i)}return this},Jt.prototype.get=function(e){if(e.isEmpty())return this.value;var t=e.getFront(),n=this.children.get(t);return n?n.get(e.popFront()):null},Jt.prototype.setTree=function(e,t){if(e.isEmpty())return t;var n=e.getFront(),r=(this.children.get(n)||Jt.Empty).setTree(e.popFront(),t),i=void 0,i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r);return new Jt(this.value,i)},Jt.prototype.fold=function(e){return this.fold_(V.Empty,e)},Jt.prototype.fold_=function(n,r){var i={};return this.children.inorderTraversal(function(e,t){i[e]=t.fold_(n.child(e),r)}),r(n,this.value,i)},Jt.prototype.findOnPath=function(e,t){return this.findOnPath_(e,V.Empty,t)},Jt.prototype.findOnPath_=function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(e.isEmpty())return null;var i=e.getFront(),o=this.children.get(i);return o?o.findOnPath_(e.popFront(),t.child(i),n):null},Jt.prototype.foreachOnPath=function(e,t){return this.foreachOnPath_(e,V.Empty,t)},Jt.prototype.foreachOnPath_=function(e,t,n){if(e.isEmpty())return this;this.value&&n(t,this.value);var r=e.getFront(),i=this.children.get(r);return i?i.foreachOnPath_(e.popFront(),t.child(r),n):Jt.Empty},Jt.prototype.foreach=function(e){this.foreach_(V.Empty,e)},Jt.prototype.foreach_=function(n,r){this.children.inorderTraversal(function(e,t){t.foreach_(n.child(e),r)}),this.value&&r(n,this.value)},Jt.prototype.foreachChild=function(n){this.children.inorderTraversal(function(e,t){t.value&&n(e,t.value)})},Jt.Empty=new Jt(null),Jt);function Jt(e,t){void 0===t&&(t=Gt=Gt||new Ke(v)),this.value=e,this.children=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zt=(en.prototype.operationForChild=function(e){return this.path.isEmpty()?new en(this.source,V.Empty):new en(this.source,this.path.popFront())},en);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){this.source=e,this.path=t,this.type=Ut.LISTEN_COMPLETE}var tn=(nn.prototype.operationForChild=function(e){return this.path.isEmpty()?new nn(this.source,V.Empty,this.snap.getImmediateChild(e)):new nn(this.source,this.path.popFront(),this.snap)},nn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ut.OVERWRITE}var rn=(on.prototype.operationForChild=function(e){if(this.path.isEmpty()){var t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new tn(this.source,V.Empty,t.value):new on(this.source,V.Empty,t)}return C.assert(this.path.getFront()===e,"Can't get a merge for a child not on the path of the operation"),new on(this.source,this.path.popFront(),this.children)},on.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},on);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ut.MERGE}var sn=(an.prototype.isFullyInitialized=function(){return this.fullyInitialized_},an.prototype.isFiltered=function(){return this.filtered_},an.prototype.isCompleteForPath=function(e){if(e.isEmpty())return this.isFullyInitialized()&&!this.filtered_;var t=e.getFront();return this.isCompleteForChild(t)},an.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},an.prototype.getNode=function(){return this.node_},an);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}var un=(ln.prototype.updateEventSnap=function(e,t,n){return new ln(new sn(e,t,n),this.serverCache_)},ln.prototype.updateServerSnap=function(e,t,n){return new ln(this.eventCache_,new sn(e,t,n))},ln.prototype.getEventCache=function(){return this.eventCache_},ln.prototype.getCompleteEventSnap=function(){return this.eventCache_.isFullyInitialized()?this.eventCache_.getNode():null},ln.prototype.getServerCache=function(){return this.serverCache_},ln.prototype.getCompleteServerSnap=function(){return this.serverCache_.isFullyInitialized()?this.serverCache_.getNode():null},ln.Empty=new ln(new sn(at.EMPTY_NODE,!1,!1),new sn(at.EMPTY_NODE,!1,!1)),ln);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e,t){this.eventCache_=e,this.serverCache_=t}var hn=(cn.valueChange=function(e){return new cn(cn.VALUE,e)},cn.childAddedChange=function(e,t){return new cn(cn.CHILD_ADDED,t,e)},cn.childRemovedChange=function(e,t){return new cn(cn.CHILD_REMOVED,t,e)},cn.childChangedChange=function(e,t,n){return new cn(cn.CHILD_CHANGED,t,e,n)},cn.childMovedChange=function(e,t){return new cn(cn.CHILD_MOVED,t,e)},cn.CHILD_ADDED="child_added",cn.CHILD_REMOVED="child_removed",cn.CHILD_CHANGED="child_changed",cn.CHILD_MOVED="child_moved",cn.VALUE="value",cn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t,n,r,i){this.type=e,this.snapshotNode=t,this.childName=n,this.oldSnap=r,this.prevName=i}var pn=(dn.prototype.updateChild=function(e,t,n,r,i,o){C.assert(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=e.getImmediateChild(t);return s.getChild(r).equals(n.getChild(r))&&s.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(hn.childRemovedChange(t,s)):C.assert(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(hn.childAddedChange(t,n)):o.trackChildChange(hn.childChangedChange(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))},dn.prototype.updateFullNode=function(r,n,i){return null!=i&&(r.isLeafNode()||r.forEachChild(qe,function(e,t){n.hasChild(e)||i.trackChildChange(hn.childRemovedChange(e,t))}),n.isLeafNode()||n.forEachChild(qe,function(e,t){var n;r.hasChild(e)?(n=r.getImmediateChild(e)).equals(t)||i.trackChildChange(hn.childChangedChange(e,t,n)):i.trackChildChange(hn.childAddedChange(e,t))})),n.withIndex(this.index_)},dn.prototype.updatePriority=function(e,t){return e.isEmpty()?at.EMPTY_NODE:e.updatePriority(t)},dn.prototype.filtersNodes=function(){return!1},dn.prototype.getIndexedFilter=function(){return this},dn.prototype.getIndex=function(){return this.index_},dn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e){this.index_=e}var fn=(_n.prototype.trackChildChange=function(e){var t=e.type,n=e.childName;C.assert(t===hn.CHILD_ADDED||t===hn.CHILD_CHANGED||t===hn.CHILD_REMOVED,"Only child changes supported for tracking"),C.assert(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if(t===hn.CHILD_ADDED&&i===hn.CHILD_REMOVED)this.changeMap.set(n,hn.childChangedChange(n,e.snapshotNode,r.snapshotNode));else if(t===hn.CHILD_REMOVED&&i===hn.CHILD_ADDED)this.changeMap.delete(n);else if(t===hn.CHILD_REMOVED&&i===hn.CHILD_CHANGED)this.changeMap.set(n,hn.childRemovedChange(n,r.oldSnap));else if(t===hn.CHILD_CHANGED&&i===hn.CHILD_ADDED)this.changeMap.set(n,hn.childAddedChange(n,e.snapshotNode));else{if(t!==hn.CHILD_CHANGED||i!==hn.CHILD_CHANGED)throw C.assertionError("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,hn.childChangedChange(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)},_n.prototype.getChanges=function(){return Array.from(this.changeMap.values())},_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){this.changeMap=new Map}function yn(){}var vn=new(yn.prototype.getCompleteChild=function(e){return null},yn.prototype.getChildAfterChild=function(e,t,n){return null},yn),gn=(mn.prototype.getCompleteChild=function(e){var t=this.viewCache_.getEventCache();if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.getServerCache();return this.writes_.calcCompleteChild(e,n)},mn.prototype.getChildAfterChild=function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:this.viewCache_.getCompleteServerSnap(),i=this.writes_.calcIndexedSlice(r,t,1,n,e);return 0===i.length?null:i[0]},mn);function mn(e,t,n){void 0===n&&(n=null),this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cn=function(e,t){this.viewCache=e,this.changes=t},En=(wn.prototype.assertIndexed=function(e){C.assert(e.getEventCache().getNode().isIndexed(this.filter_.getIndex()),"Event snap not indexed"),C.assert(e.getServerCache().getNode().isIndexed(this.filter_.getIndex()),"Server snap not indexed")},wn.prototype.applyOperation=function(e,t,n,r){var i,o=new fn;if(t.type===Ut.OVERWRITE)var s=t,a=s.source.fromUser?this.applyUserOverwrite_(e,s.path,s.snap,n,r,o):(C.assert(s.source.fromServer,"Unknown source."),i=s.source.tagged||e.getServerCache().isFiltered()&&!s.path.isEmpty(),this.applyServerOverwrite_(e,s.path,s.snap,n,r,i,o));else if(t.type===Ut.MERGE){var u=t;a=u.source.fromUser?this.applyUserMerge_(e,u.path,u.children,n,r,o):(C.assert(u.source.fromServer,"Unknown source."),i=u.source.tagged||e.getServerCache().isFiltered(),this.applyServerMerge_(e,u.path,u.children,n,r,i,o))}else if(t.type===Ut.ACK_USER_WRITE){var l=t;a=l.revert?this.revertUserWrite_(e,l.path,n,r,o):this.ackUserWrite_(e,l.path,l.affectedTree,n,r,o)}else{if(t.type!==Ut.LISTEN_COMPLETE)throw C.assertionError("Unknown operation type: "+t.type);a=this.listenComplete_(e,t.path,n,o)}var h=o.getChanges();return wn.maybeAddValueEvent_(e,a,h),new Cn(a,h)},wn.maybeAddValueEvent_=function(e,t,n){var r,i,o=t.getEventCache();o.isFullyInitialized()&&(r=o.getNode().isLeafNode()||o.getNode().isEmpty(),i=e.getCompleteEventSnap(),(0<n.length||!e.getEventCache().isFullyInitialized()||r&&!o.getNode().equals(i)||!o.getNode().getPriority().equals(i.getPriority()))&&n.push(hn.valueChange(t.getCompleteEventSnap())))},wn.prototype.generateEventCacheAfterServerEvent_=function(e,t,n,r,i){var o=e.getEventCache();if(null!=n.shadowingWrite(t))return e;var s,a,u,l,h,c,p,d,f,_,y=void 0,v=void 0;return y=t.isEmpty()?(C.assert(e.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),e.getServerCache().isFiltered()?(a=(s=e.getCompleteServerSnap())instanceof at?s:at.EMPTY_NODE,u=n.calcCompleteEventChildren(a),this.filter_.updateFullNode(e.getEventCache().getNode(),u,i)):(l=n.calcCompleteEventCache(e.getCompleteServerSnap()),this.filter_.updateFullNode(e.getEventCache().getNode(),l,i))):".priority"===(h=t.getFront())?(C.assert(1===t.getLength(),"Can't have a priority with additional path components"),c=o.getNode(),v=e.getServerCache().getNode(),null!=(p=n.calcEventCacheAfterServerOverwrite(t,c,v))?this.filter_.updatePriority(c,p):o.getNode()):(d=t.popFront(),_=void 0,null!=(_=o.isCompleteForChild(h)?(v=e.getServerCache().getNode(),null!=(f=n.calcEventCacheAfterServerOverwrite(t,o.getNode(),v))?o.getNode().getImmediateChild(h).updateChild(d,f):o.getNode().getImmediateChild(h)):n.calcCompleteChild(h,e.getServerCache()))?this.filter_.updateChild(o.getNode(),h,_,d,r,i):o.getNode()),e.updateEventSnap(y,o.isFullyInitialized()||t.isEmpty(),this.filter_.filtersNodes())},wn.prototype.applyServerOverwrite_=function(e,t,n,r,i,o,s){var a=e.getServerCache(),u=o?this.filter_:this.filter_.getIndexedFilter();if(t.isEmpty())h=u.updateFullNode(a.getNode(),n,null);else if(u.filtersNodes()&&!a.isFiltered())var l=a.getNode().updateChild(t,n),h=u.updateFullNode(a.getNode(),l,null);else{var c=t.getFront();if(!a.isCompleteForPath(t)&&1<t.getLength())return e;var p=t.popFront(),d=a.getNode().getImmediateChild(c).updateChild(p,n);h=".priority"===c?u.updatePriority(a.getNode(),d):u.updateChild(a.getNode(),c,d,p,vn,null)}var f=e.updateServerSnap(h,a.isFullyInitialized()||t.isEmpty(),u.filtersNodes()),_=new gn(r,f,i);return this.generateEventCacheAfterServerEvent_(f,t,r,_,s)},wn.prototype.applyUserOverwrite_=function(e,t,n,r,i,o){var s,a,u,l,h,c,p,d=e.getEventCache(),f=new gn(r,e,i);return t.isEmpty()?(s=this.filter_.updateFullNode(e.getEventCache().getNode(),n,o),e.updateEventSnap(s,!0,this.filter_.filtersNodes())):".priority"===(a=t.getFront())?(s=this.filter_.updatePriority(e.getEventCache().getNode(),n),e.updateEventSnap(s,d.isFullyInitialized(),d.isFiltered())):(u=t.popFront(),l=d.getNode().getImmediateChild(a),c=void 0,c=u.isEmpty()?n:null!=(h=f.getCompleteChild(a))?".priority"===u.getBack()&&h.getChild(u.parent()).isEmpty()?h:h.updateChild(u,n):at.EMPTY_NODE,l.equals(c)?e:(p=this.filter_.updateChild(d.getNode(),a,c,u,f,o),e.updateEventSnap(p,d.isFullyInitialized(),this.filter_.filtersNodes())))},wn.cacheHasChild_=function(e,t){return e.getEventCache().isCompleteForChild(t)},wn.prototype.applyUserMerge_=function(r,i,e,o,s,a){var u=this,l=r;return e.foreach(function(e,t){var n=i.child(e);wn.cacheHasChild_(r,n.getFront())&&(l=u.applyUserOverwrite_(l,n,t,o,s,a))}),e.foreach(function(e,t){var n=i.child(e);wn.cacheHasChild_(r,n.getFront())||(l=u.applyUserOverwrite_(l,n,t,o,s,a))}),l},wn.prototype.applyMerge_=function(n,e){return e.foreach(function(e,t){n=n.updateChild(e,t)}),n},wn.prototype.applyServerMerge_=function(o,e,t,s,a,u,l){var h=this;if(o.getServerCache().getNode().isEmpty()&&!o.getServerCache().isFullyInitialized())return o;var c=o,n=e.isEmpty()?t:Xt.Empty.setTree(e,t),p=o.getServerCache().getNode();return n.children.inorderTraversal(function(e,t){var n,r;p.hasChild(e)&&(n=o.getServerCache().getNode().getImmediateChild(e),r=h.applyMerge_(n,t),c=h.applyServerOverwrite_(c,new V(e),r,s,a,u,l))}),n.children.inorderTraversal(function(e,t){var n,r,i=!o.getServerCache().isCompleteForChild(e)&&null==t.value;p.hasChild(e)||i||(n=o.getServerCache().getNode().getImmediateChild(e),r=h.applyMerge_(n,t),c=h.applyServerOverwrite_(c,new V(e),r,s,a,u,l))}),c},wn.prototype.ackUserWrite_=function(e,r,t,n,i,o){if(null!=n.shadowingWrite(r))return e;var s=e.getServerCache().isFiltered(),a=e.getServerCache();if(null!=t.value){if(r.isEmpty()&&a.isFullyInitialized()||a.isCompleteForPath(r))return this.applyServerOverwrite_(e,r,a.getNode().getChild(r),n,i,s,o);if(r.isEmpty()){var u=Xt.Empty;return a.getNode().forEachChild(Re,function(e,t){u=u.set(new V(e),t)}),this.applyServerMerge_(e,r,u,n,i,s,o)}return e}var l=Xt.Empty;return t.foreach(function(e,t){var n=r.child(e);a.isCompleteForPath(n)&&(l=l.set(e,a.getNode().getChild(n)))}),this.applyServerMerge_(e,r,l,n,i,s,o)},wn.prototype.listenComplete_=function(e,t,n,r){var i=e.getServerCache(),o=e.updateServerSnap(i.getNode(),i.isFullyInitialized()||t.isEmpty(),i.isFiltered());return this.generateEventCacheAfterServerEvent_(o,t,n,vn,r)},wn.prototype.revertUserWrite_=function(e,t,n,r,i){var o;if(null!=n.shadowingWrite(t))return e;var s,a,u,l,h=new gn(n,e,r),c=e.getEventCache().getNode(),p=void 0;return t.isEmpty()||".priority"===t.getFront()?(a=void 0,a=e.getServerCache().isFullyInitialized()?n.calcCompleteEventCache(e.getCompleteServerSnap()):(s=e.getServerCache().getNode(),C.assert(s instanceof at,"serverChildren would be complete if leaf node"),n.calcCompleteEventChildren(s)),p=this.filter_.updateFullNode(c,a,i)):(u=t.getFront(),null==(l=n.calcCompleteChild(u,e.getServerCache()))&&e.getServerCache().isCompleteForChild(u)&&(l=c.getImmediateChild(u)),(p=null!=l?this.filter_.updateChild(c,u,l,t.popFront(),h,i):e.getEventCache().getNode().hasChild(u)?this.filter_.updateChild(c,u,at.EMPTY_NODE,t.popFront(),h,i):c).isEmpty()&&e.getServerCache().isFullyInitialized()&&(o=n.calcCompleteEventCache(e.getCompleteServerSnap())).isLeafNode()&&(p=this.filter_.updateFullNode(p,o,i))),o=e.getServerCache().isFullyInitialized()||null!=n.shadowingWrite(V.Empty),e.updateEventSnap(p,o,this.filter_.filtersNodes())},wn);function wn(e){this.filter_=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bn=(Sn.prototype.generateEventsForChanges=function(e,t,n){var r=this,i=[],o=[];return e.forEach(function(e){e.type===hn.CHILD_CHANGED&&r.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push(hn.childMovedChange(e.childName,e.snapshotNode))}),this.generateEventsForType_(i,hn.CHILD_REMOVED,e,n,t),this.generateEventsForType_(i,hn.CHILD_ADDED,e,n,t),this.generateEventsForType_(i,hn.CHILD_MOVED,o,n,t),this.generateEventsForType_(i,hn.CHILD_CHANGED,e,n,t),this.generateEventsForType_(i,hn.VALUE,e,n,t),i},Sn.prototype.generateEventsForType_=function(r,t,e,i,o){var s=this,n=e.filter(function(e){return e.type===t});n.sort(this.compareChanges_.bind(this)),n.forEach(function(t){var n=s.materializeSingleChange_(t,o);i.forEach(function(e){e.respondsTo(t.type)&&r.push(e.createEvent(n,s.query_))})})},Sn.prototype.materializeSingleChange_=function(e,t){return"value"===e.type||"child_removed"===e.type||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,this.index_)),e},Sn.prototype.compareChanges_=function(e,t){if(null==e.childName||null==t.childName)throw C.assertionError("Should only compare child_ events.");var n=new Ee(e.childName,e.snapshotNode),r=new Ee(t.childName,t.snapshotNode);return this.index_.compare(n,r)},Sn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){this.query_=e,this.index_=this.query_.getQueryParams().getIndex()}var Tn,In=(Nn.prototype.getQuery=function(){return this.query_},Nn.prototype.getServerCache=function(){return this.viewCache_.getServerCache().getNode()},Nn.prototype.getCompleteServerCache=function(e){var t=this.viewCache_.getCompleteServerSnap();return t&&(this.query_.getQueryParams().loadsAllData()||!e.isEmpty()&&!t.getImmediateChild(e.getFront()).isEmpty())?t.getChild(e):null},Nn.prototype.isEmpty=function(){return 0===this.eventRegistrations_.length},Nn.prototype.addEventRegistration=function(e){this.eventRegistrations_.push(e)},Nn.prototype.removeEventRegistration=function(e,n){var r,i=[];if(n&&(C.assert(null==e,"A cancel should cancel all event registrations."),r=this.query_.path,this.eventRegistrations_.forEach(function(e){var t=e.createCancelEvent(n,r);t&&i.push(t)})),e){for(var t=[],o=0;o<this.eventRegistrations_.length;++o){var s=this.eventRegistrations_[o];if(s.matches(e)){if(e.hasAnyCallback()){t=t.concat(this.eventRegistrations_.slice(o+1));break}}else t.push(s)}this.eventRegistrations_=t}else this.eventRegistrations_=[];return i},Nn.prototype.applyOperation=function(e,t,n){e.type===Ut.MERGE&&null!==e.source.queryId&&(C.assert(this.viewCache_.getCompleteServerSnap(),"We should always have a full cache before handling merges"),C.assert(this.viewCache_.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"));var r=this.viewCache_,i=this.processor_.applyOperation(r,e,t,n);return this.processor_.assertIndexed(i.viewCache),C.assert(i.viewCache.getServerCache().isFullyInitialized()||!r.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.viewCache_=i.viewCache,this.generateEventsForChanges_(i.changes,i.viewCache.getEventCache().getNode(),null)},Nn.prototype.getInitialEvents=function(e){var t=this.viewCache_.getEventCache(),n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(qe,function(e,t){n.push(hn.childAddedChange(e,t))}),t.isFullyInitialized()&&n.push(hn.valueChange(t.getNode())),this.generateEventsForChanges_(n,t.getNode(),e)},Nn.prototype.generateEventsForChanges_=function(e,t,n){var r=n?[n]:this.eventRegistrations_;return this.eventGenerator_.generateEventsForChanges(e,t,r)},Nn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t){this.query_=e,this.eventRegistrations_=[];var n=this.query_.getQueryParams(),r=new pn(n.getIndex()),i=n.getNodeFilter();this.processor_=new En(i);var o=t.getServerCache(),s=t.getEventCache(),a=r.updateFullNode(at.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(at.EMPTY_NODE,s.getNode(),null),l=new sn(a,o.isFullyInitialized(),r.filtersNodes()),h=new sn(u,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=new un(h,l),this.eventGenerator_=new bn(this.query_)}var Pn=(Object.defineProperty(On,"__referenceConstructor",{get:function(){return C.assert(Tn,"Reference.ts has not been loaded"),Tn},set:function(e){C.assert(!Tn,"__referenceConstructor has already been defined"),Tn=e},enumerable:!1,configurable:!0}),On.prototype.isEmpty=function(){return 0===this.views.size},On.prototype.applyOperation=function(e,t,n){var r,i,o=e.source.queryId;if(null!==o){var s=this.views.get(o);return C.assert(null!=s,"SyncTree gave us an op for an invalid query."),s.applyOperation(e,t,n)}var a=[];try{for(var u=_.__values(this.views.values()),l=u.next();!l.done;l=u.next())s=l.value,a=a.concat(s.applyOperation(e,t,n))}catch(e){r={error:e}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}return a},On.prototype.addEventRegistration=function(e,t,n,r,i){var o,s,a,u=e.queryIdentifier(),l=this.views.get(u);return l||(s=!1,s=!!(o=n.calcCompleteEventCache(i?r:null))||(o=r instanceof at?n.calcCompleteEventChildren(r):at.EMPTY_NODE,!1),a=new un(new sn(o,s,!1),new sn(r,i,!1)),l=new In(e,a),this.views.set(u,l)),l.addEventRegistration(t),l.getInitialEvents(t)},On.prototype.removeEventRegistration=function(e,t,n){var r,i,o=e.queryIdentifier(),s=[],a=[],u=this.hasCompleteView();if("default"===o)try{for(var l=_.__values(this.views.entries()),h=l.next();!h.done;h=l.next()){var c=_.__read(h.value,2),p=c[0],d=c[1],a=a.concat(d.removeEventRegistration(t,n));d.isEmpty()&&(this.views.delete(p),d.getQuery().getQueryParams().loadsAllData()||s.push(d.getQuery()))}}catch(e){r={error:e}}finally{try{h&&!h.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}else(d=this.views.get(o))&&(a=a.concat(d.removeEventRegistration(t,n)),d.isEmpty()&&(this.views.delete(o),d.getQuery().getQueryParams().loadsAllData()||s.push(d.getQuery())));return u&&!this.hasCompleteView()&&s.push(new On.__referenceConstructor(e.repo,e.path)),{removed:s,events:a}},On.prototype.getQueryViews=function(){var t,e,n=[];try{for(var r=_.__values(this.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;o.getQuery().getQueryParams().loadsAllData()||n.push(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return n},On.prototype.getCompleteServerCache=function(e){var t,n,r=null;try{for(var i=_.__values(this.views.values()),o=i.next();!o.done;o=i.next())var s=o.value,r=r||s.getCompleteServerCache(e)}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r},On.prototype.viewForQuery=function(e){if(e.getQueryParams().loadsAllData())return this.getCompleteView();var t=e.queryIdentifier();return this.views.get(t)},On.prototype.viewExistsForQuery=function(e){return null!=this.viewForQuery(e)},On.prototype.hasCompleteView=function(){return null!=this.getCompleteView()},On.prototype.getCompleteView=function(){var t,e;try{for(var n=_.__values(this.views.values()),r=n.next();!r.done;r=n.next()){var i=r.value;if(i.getQuery().getQueryParams().loadsAllData())return i}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return null},On);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){this.views=new Map}var Rn=(Dn.prototype.addWrite=function(e,t){if(e.isEmpty())return new Dn(new Xt(t));var n=this.writeTree_.findRootMostValueAndPath(e);if(null!=n){var r=n.path,i=n.value,o=V.relativePath(r,e),i=i.updateChild(o,t);return new Dn(this.writeTree_.set(r,i))}var s=new Xt(t);return new Dn(this.writeTree_.setTree(e,s))},Dn.prototype.addWrites=function(n,e){var r=this;return F(e,function(e,t){r=r.addWrite(n.child(e),t)}),r},Dn.prototype.removeWrite=function(e){return e.isEmpty()?Dn.Empty:new Dn(this.writeTree_.setTree(e,Xt.Empty))},Dn.prototype.hasCompleteWrite=function(e){return null!=this.getCompleteNode(e)},Dn.prototype.getCompleteNode=function(e){var t=this.writeTree_.findRootMostValueAndPath(e);return null!=t?this.writeTree_.get(t.path).getChild(V.relativePath(t.path,e)):null},Dn.prototype.getCompleteChildren=function(){var n=[],e=this.writeTree_.value;return null!=e?e.isLeafNode()||e.forEachChild(qe,function(e,t){n.push(new Ee(e,t))}):this.writeTree_.children.inorderTraversal(function(e,t){null!=t.value&&n.push(new Ee(e,t.value))}),n},Dn.prototype.childCompoundWrite=function(e){if(e.isEmpty())return this;var t=this.getCompleteNode(e);return new Dn(null!=t?new Xt(t):this.writeTree_.subtree(e))},Dn.prototype.isEmpty=function(){return this.writeTree_.isEmpty()},Dn.prototype.apply=function(e){return function n(r,e,i){if(null!=e.value)return i.updateChild(r,e.value);var o=null;return e.children.inorderTraversal(function(e,t){".priority"===e?(C.assert(null!==t.value,"Priority writes must always be leaf nodes"),o=t.value):i=n(r.child(e),t,i)}),i.getChild(r).isEmpty()||null===o||(i=i.updateChild(r.child(".priority"),o)),i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(V.Empty,this.writeTree_,e)},Dn.Empty=new Dn(new Xt(null)),Dn);function Dn(e){this.writeTree_=e}var An=(xn.prototype.childWrites=function(e){return new kn(e,this)},xn.prototype.addOverwrite=function(e,t,n,r){C.assert(n>this.lastWriteId_,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),this.allWrites_.push({path:e,snap:t,writeId:n,visible:r}),r&&(this.visibleWrites_=this.visibleWrites_.addWrite(e,t)),this.lastWriteId_=n},xn.prototype.addMerge=function(e,t,n){C.assert(n>this.lastWriteId_,"Stacking an older merge on top of newer ones"),this.allWrites_.push({path:e,children:t,writeId:n,visible:!0}),this.visibleWrites_=this.visibleWrites_.addWrites(e,t),this.lastWriteId_=n},xn.prototype.getWrite=function(e){for(var t=0;t<this.allWrites_.length;t++){var n=this.allWrites_[t];if(n.writeId===e)return n}return null},xn.prototype.removeWrite=function(t){var n=this,e=this.allWrites_.findIndex(function(e){return e.writeId===t});C.assert(0<=e,"removeWrite called with nonexistent writeId.");var r=this.allWrites_[e];this.allWrites_.splice(e,1);for(var i=r.visible,o=!1,s=this.allWrites_.length-1;i&&0<=s;){var a=this.allWrites_[s];a.visible&&(e<=s&&this.recordContainsPath_(a,r.path)?i=!1:r.path.contains(a.path)&&(o=!0)),s--}return!!i&&(o?this.resetTree_():r.snap?this.visibleWrites_=this.visibleWrites_.removeWrite(r.path):F(r.children,function(e){n.visibleWrites_=n.visibleWrites_.removeWrite(r.path.child(e))}),!0)},xn.prototype.getCompleteWriteData=function(e){return this.visibleWrites_.getCompleteNode(e)},xn.prototype.calcCompleteEventCache=function(t,e,n,r){if(n||r){var i=this.visibleWrites_.childCompoundWrite(t);if(!r&&i.isEmpty())return e;if(r||null!=e||i.hasCompleteWrite(V.Empty)){var o=xn.layerTree_(this.allWrites_,function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(e.path.contains(t)||t.contains(e.path))},t),s=e||at.EMPTY_NODE;return o.apply(s)}return null}var a=this.visibleWrites_.getCompleteNode(t);if(null!=a)return a;var u=this.visibleWrites_.childCompoundWrite(t);if(u.isEmpty())return e;if(null!=e||u.hasCompleteWrite(V.Empty)){var s=e||at.EMPTY_NODE;return u.apply(s)}return null},xn.prototype.calcCompleteEventChildren=function(e,t){var r=at.EMPTY_NODE,n=this.visibleWrites_.getCompleteNode(e);if(n)return n.isLeafNode()||n.forEachChild(qe,function(e,t){r=r.updateImmediateChild(e,t)}),r;if(t){var i=this.visibleWrites_.childCompoundWrite(e);return t.forEachChild(qe,function(e,t){var n=i.childCompoundWrite(new V(e)).apply(t);r=r.updateImmediateChild(e,n)}),i.getCompleteChildren().forEach(function(e){r=r.updateImmediateChild(e.name,e.node)}),r}return this.visibleWrites_.childCompoundWrite(e).getCompleteChildren().forEach(function(e){r=r.updateImmediateChild(e.name,e.node)}),r},xn.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n,r){C.assert(n||r,"Either existingEventSnap or existingServerSnap must exist");var i=e.child(t);if(this.visibleWrites_.hasCompleteWrite(i))return null;var o=this.visibleWrites_.childCompoundWrite(i);return o.isEmpty()?r.getChild(t):o.apply(r.getChild(t))},xn.prototype.calcCompleteChild=function(e,t,n){var r=e.child(t),i=this.visibleWrites_.getCompleteNode(r);return null!=i?i:n.isCompleteForChild(t)?this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)):null},xn.prototype.shadowingWrite=function(e){return this.visibleWrites_.getCompleteNode(e)},xn.prototype.calcIndexedSlice=function(e,t,n,r,i,o){var s,a=this.visibleWrites_.childCompoundWrite(e),u=a.getCompleteNode(V.Empty);if(null!=u)s=u;else{if(null==t)return[];s=a.apply(t)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),c=i?s.getReverseIteratorFrom(n,o):s.getIteratorFrom(n,o),p=c.getNext();p&&l.length<r;)0!==h(p,n)&&l.push(p),p=c.getNext();return l},xn.prototype.recordContainsPath_=function(e,t){if(e.snap)return e.path.contains(t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&e.path.child(n).contains(t))return!0;return!1},xn.prototype.resetTree_=function(){this.visibleWrites_=xn.layerTree_(this.allWrites_,xn.DefaultFilter_,V.Empty),0<this.allWrites_.length?this.lastWriteId_=this.allWrites_[this.allWrites_.length-1].writeId:this.lastWriteId_=-1},xn.DefaultFilter_=function(e){return e.visible},xn.layerTree_=function(e,t,n){for(var r=Rn.Empty,i=0;i<e.length;++i){var o=e[i];if(t(o)){var s,a,u=o.path,l=void 0;if(o.snap)n.contains(u)?(l=V.relativePath(n,u),r=r.addWrite(l,o.snap)):u.contains(n)&&(l=V.relativePath(u,n),r=r.addWrite(V.Empty,o.snap.getChild(l)));else{if(!o.children)throw C.assertionError("WriteRecord should have .snap or .children");n.contains(u)?(l=V.relativePath(n,u),r=r.addWrites(l,o.children)):u.contains(n)&&((l=V.relativePath(u,n)).isEmpty()?r=r.addWrites(V.Empty,o.children):(s=C.safeGet(o.children,l.getFront()))&&(a=s.getChild(l.popFront()),r=r.addWrite(V.Empty,a)))}}}return r},xn);function xn(){this.visibleWrites_=Rn.Empty,this.allWrites_=[],this.lastWriteId_=-1}var kn=(Fn.prototype.calcCompleteEventCache=function(e,t,n){return this.writeTree_.calcCompleteEventCache(this.treePath_,e,t,n)},Fn.prototype.calcCompleteEventChildren=function(e){return this.writeTree_.calcCompleteEventChildren(this.treePath_,e)},Fn.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n){return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_,e,t,n)},Fn.prototype.shadowingWrite=function(e){return this.writeTree_.shadowingWrite(this.treePath_.child(e))},Fn.prototype.calcIndexedSlice=function(e,t,n,r,i){return this.writeTree_.calcIndexedSlice(this.treePath_,e,t,n,r,i)},Fn.prototype.calcCompleteChild=function(e,t){return this.writeTree_.calcCompleteChild(this.treePath_,e,t)},Fn.prototype.child=function(e){return new Fn(this.treePath_.child(e),this.writeTree_)},Fn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e,t){this.treePath_=e,this.writeTree_=t}var Ln=(Mn.prototype.applyUserOverwrite=function(e,t,n,r){return this.pendingWriteTree_.addOverwrite(e,t,n,r),r?this.applyOperationToSyncPoints_(new tn(zt.User,e,t)):[]},Mn.prototype.applyUserMerge=function(e,t,n){this.pendingWriteTree_.addMerge(e,t,n);var r=Xt.fromObject(t);return this.applyOperationToSyncPoints_(new rn(zt.User,e,r))},Mn.prototype.ackUserWrite=function(e,t){void 0===t&&(t=!1);var n=this.pendingWriteTree_.getWrite(e);if(this.pendingWriteTree_.removeWrite(e)){var r=Xt.Empty;return null!=n.snap?r=r.set(V.Empty,!0):F(n.children,function(e,t){r=r.set(new V(e),t)}),this.applyOperationToSyncPoints_(new Yt(n.path,r,t))}return[]},Mn.prototype.applyServerOverwrite=function(e,t){return this.applyOperationToSyncPoints_(new tn(zt.Server,e,t))},Mn.prototype.applyServerMerge=function(e,t){var n=Xt.fromObject(t);return this.applyOperationToSyncPoints_(new rn(zt.Server,e,n))},Mn.prototype.applyListenComplete=function(e){return this.applyOperationToSyncPoints_(new Zt(zt.Server,e))},Mn.prototype.applyTaggedQueryOverwrite=function(e,t,n){var r=this.queryKeyForTag_(n);if(null==r)return[];var i=Mn.parseQueryKey_(r),o=i.path,s=i.queryId,a=V.relativePath(o,e),u=new tn(zt.forServerTaggedQuery(s),a,t);return this.applyTaggedOperation_(o,u)},Mn.prototype.applyTaggedQueryMerge=function(e,t,n){var r=this.queryKeyForTag_(n);if(r){var i=Mn.parseQueryKey_(r),o=i.path,s=i.queryId,a=V.relativePath(o,e),u=Xt.fromObject(t),l=new rn(zt.forServerTaggedQuery(s),a,u);return this.applyTaggedOperation_(o,l)}return[]},Mn.prototype.applyTaggedListenComplete=function(e,t){var n=this.queryKeyForTag_(t);if(n){var r=Mn.parseQueryKey_(n),i=r.path,o=r.queryId,s=V.relativePath(i,e),a=new Zt(zt.forServerTaggedQuery(o),s);return this.applyTaggedOperation_(i,a)}return[]},Mn.prototype.addEventRegistration=function(e,t){var r=e.path,i=null,o=!1;this.syncPointTree_.foreachOnPath(r,function(e,t){var n=V.relativePath(e,r);i=i||t.getCompleteServerCache(n),o=o||t.hasCompleteView()});var n,s=this.syncPointTree_.get(r);s?(o=o||s.hasCompleteView(),i=i||s.getCompleteServerCache(V.Empty)):(s=new Pn,this.syncPointTree_=this.syncPointTree_.set(r,s)),null!=i?n=!0:(n=!1,i=at.EMPTY_NODE,this.syncPointTree_.subtree(r).foreachChild(function(e,t){var n=t.getCompleteServerCache(V.Empty);n&&(i=i.updateImmediateChild(e,n))}));var a,u,l=s.viewExistsForQuery(e);l||e.getQueryParams().loadsAllData()||(a=Mn.makeQueryKey_(e),C.assert(!this.queryToTagMap.has(a),"View does not exist, but we have a tag"),u=Mn.getNextQueryTag_(),this.queryToTagMap.set(a,u),this.tagToQueryMap.set(u,a));var h,c=this.pendingWriteTree_.childWrites(r),p=s.addEventRegistration(e,t,c,i,n);return l||o||(h=s.viewForQuery(e),p=p.concat(this.setupListener_(e,h))),p},Mn.prototype.removeEventRegistration=function(e,t,n){var r=this,i=e.path,o=this.syncPointTree_.get(i),s=[];if(o&&("default"===e.queryIdentifier()||o.viewExistsForQuery(e))){var a=o.removeEventRegistration(e,t,n);o.isEmpty()&&(this.syncPointTree_=this.syncPointTree_.remove(i));var u=a.removed,s=a.events,l=-1!==u.findIndex(function(e){return e.getQueryParams().loadsAllData()}),h=this.syncPointTree_.findOnPath(i,function(e,t){return t.hasCompleteView()});if(l&&!h){var c=this.syncPointTree_.subtree(i);if(!c.isEmpty())for(var p=this.collectDistinctViewsForSubTree_(c),d=0;d<p.length;++d){var f=p[d],_=f.getQuery(),y=this.createListenerForView_(f);this.listenProvider_.startListening(Mn.queryForListening_(_),this.tagForQuery_(_),y.hashFn,y.onComplete)}}!h&&0<u.length&&!n&&(l?this.listenProvider_.stopListening(Mn.queryForListening_(e),null):u.forEach(function(e){var t=r.queryToTagMap.get(Mn.makeQueryKey_(e));r.listenProvider_.stopListening(Mn.queryForListening_(e),t)})),this.removeTags_(u)}return s},Mn.prototype.calcCompleteEventCache=function(i,e){var t=this.pendingWriteTree_,n=this.syncPointTree_.findOnPath(i,function(e,t){var n=V.relativePath(e,i),r=t.getCompleteServerCache(n);if(r)return r});return t.calcCompleteEventCache(i,n,e,!0)},Mn.prototype.collectDistinctViewsForSubTree_=function(e){return e.fold(function(e,t,n){if(t&&t.hasCompleteView())return[t.getCompleteView()];var r=[];return t&&(r=t.getQueryViews()),F(n,function(e,t){r=r.concat(t)}),r})},Mn.prototype.removeTags_=function(e){for(var t=0;t<e.length;++t){var n,r,i=e[t];i.getQueryParams().loadsAllData()||(n=Mn.makeQueryKey_(i),r=this.queryToTagMap.get(n),this.queryToTagMap.delete(n),this.tagToQueryMap.delete(r))}},Mn.queryForListening_=function(e){return e.getQueryParams().loadsAllData()&&!e.getQueryParams().isDefault()?e.getRef():e},Mn.prototype.setupListener_=function(e,t){var n=e.path,r=this.tagForQuery_(e),i=this.createListenerForView_(t),o=this.listenProvider_.startListening(Mn.queryForListening_(e),r,i.hashFn,i.onComplete),s=this.syncPointTree_.subtree(n);if(r)C.assert(!s.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed");else for(var a=s.fold(function(e,t,n){if(!e.isEmpty()&&t&&t.hasCompleteView())return[t.getCompleteView().getQuery()];var r=[];return t&&(r=r.concat(t.getQueryViews().map(function(e){return e.getQuery()}))),F(n,function(e,t){r=r.concat(t)}),r}),u=0;u<a.length;++u){var l=a[u];this.listenProvider_.stopListening(Mn.queryForListening_(l),this.tagForQuery_(l))}return o},Mn.prototype.createListenerForView_=function(e){var n=this,r=e.getQuery(),i=this.tagForQuery_(r);return{hashFn:function(){return(e.getServerCache()||at.EMPTY_NODE).hash()},onComplete:function(e){if("ok"===e)return i?n.applyTaggedListenComplete(r.path,i):n.applyListenComplete(r.path);var t=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t.path.toString()+": "+n);return r.code=e.toUpperCase(),r}(e,r);return n.removeEventRegistration(r,null,t)}}},Mn.makeQueryKey_=function(e){return e.path.toString()+"$"+e.queryIdentifier()},Mn.parseQueryKey_=function(e){var t=e.indexOf("$");return C.assert(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new V(e.substr(0,t))}},Mn.prototype.queryKeyForTag_=function(e){return this.tagToQueryMap.get(e)},Mn.prototype.tagForQuery_=function(e){var t=Mn.makeQueryKey_(e);return this.queryToTagMap.get(t)},Mn.getNextQueryTag_=function(){return Mn.nextQueryTag_++},Mn.prototype.applyTaggedOperation_=function(e,t){var n=this.syncPointTree_.get(e);C.assert(n,"Missing sync point for query tag that we're tracking");var r=this.pendingWriteTree_.childWrites(e);return n.applyOperation(t,r,null)},Mn.prototype.applyOperationToSyncPoints_=function(e){return this.applyOperationHelper_(e,this.syncPointTree_,null,this.pendingWriteTree_.childWrites(V.Empty))},Mn.prototype.applyOperationHelper_=function(e,t,n,r){if(e.path.isEmpty())return this.applyOperationDescendantsHelper_(e,t,n,r);var i=t.get(V.Empty);null==n&&null!=i&&(n=i.getCompleteServerCache(V.Empty));var o,s,a=[],u=e.path.getFront(),l=e.operationForChild(u),h=t.children.get(u);return h&&l&&(o=n?n.getImmediateChild(u):null,s=r.child(u),a=a.concat(this.applyOperationHelper_(l,h,o,s))),i&&(a=a.concat(i.applyOperation(e,r,n))),a},Mn.prototype.applyOperationDescendantsHelper_=function(o,e,s,a){var u=this,t=e.get(V.Empty);null==s&&null!=t&&(s=t.getCompleteServerCache(V.Empty));var l=[];return e.children.inorderTraversal(function(e,t){var n=s?s.getImmediateChild(e):null,r=a.child(e),i=o.operationForChild(e);i&&(l=l.concat(u.applyOperationDescendantsHelper_(i,t,n,r)))}),t&&(l=l.concat(t.applyOperation(o,a,s))),l},Mn.nextQueryTag_=1,Mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e){this.listenProvider_=e,this.syncPointTree_=Xt.Empty,this.pendingWriteTree_=new An,this.tagToQueryMap=new Map,this.queryToTagMap=new Map}var Wn=(jn.prototype.getNode=function(e){return this.rootNode_.getChild(e)},jn.prototype.updateSnapshot=function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)},jn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){this.rootNode_=at.EMPTY_NODE}var qn=(Vn.prototype.getToken=function(e){return this.auth_?this.auth_.getToken(e).catch(function(e){return e&&"auth/token-not-initialized"===e.code?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)}):Promise.resolve(null)},Vn.prototype.addTokenChangeListener=function(t){this.auth_?this.auth_.addAuthTokenListener(t):(setTimeout(function(){return t(null)},0),this.authProvider_.get().then(function(e){return e.addAuthTokenListener(t)}))},Vn.prototype.removeTokenChangeListener=function(t){this.authProvider_.get().then(function(e){return e.removeAuthTokenListener(t)})},Vn.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.app_.name+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.app_.options?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.app_.options?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',y(e)},Vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e,t){var n=this;this.app_=e,this.authProvider_=t,this.auth_=null,this.auth_=t.getImmediate({optional:!0}),this.auth_||t.get().then(function(e){return n.auth_=e})}var Un=(Qn.prototype.incrementCounter=function(e,t){void 0===t&&(t=1),C.contains(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t},Qn.prototype.get=function(){return C.deepCopy(this.counters_)},Qn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){this.counters_={}}var Hn=(Bn.getCollection=function(e){var t=e.toString();return this.collections_[t]||(this.collections_[t]=new Un),this.collections_[t]},Bn.getOrCreateReporter=function(e,t){var n=e.toString();return this.reporters_[n]||(this.reporters_[n]=t()),this.reporters_[n]},Bn.collections_={},Bn.reporters_={},Bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){}var zn=(Kn.prototype.get=function(){var e=this.collection_.get(),n=_.__assign({},e);return this.last_&&F(this.last_,function(e,t){n[e]=n[e]-t}),this.last_=e,n},Kn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){this.collection_=e,this.last_=null}var Gn=(Yn.prototype.includeStat=function(e){this.statsToReport_[e]=!0},Yn.prototype.reportStats_=function(){var n=this,e=this.statsListener_.get(),r={},i=!1;F(e,function(e,t){0<t&&C.contains(n.statsToReport_,e)&&(r[e]=t,i=!0)}),i&&this.server_.reportStats(r),W(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))},Yn);function Yn(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zn(e);var n=1e4+2e4*Math.random();W(this.reportStats_.bind(this),Math.floor(n))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $n=(Xn.prototype.queueEvents=function(e){for(var t=null,n=0;n<e.length;n++){var r=e[n],i=r.getPath();null===t||i.equals(t.getPath())||(this.eventLists_.push(t),t=null),null===t&&(t=new Jn(i)),t.add(r)}t&&this.eventLists_.push(t)},Xn.prototype.raiseEventsAtPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.equals(t)})},Xn.prototype.raiseEventsForChangedPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.contains(t)||t.contains(e)})},Xn.prototype.raiseQueuedEventsMatchingPredicate_=function(e){this.recursionDepth_++;for(var t=!0,n=0;n<this.eventLists_.length;n++){var r=this.eventLists_[n];r&&(e(r.getPath())?(this.eventLists_[n].raise(),this.eventLists_[n]=null):t=!1)}t&&(this.eventLists_=[]),this.recursionDepth_--},Xn);function Xn(){this.eventLists_=[],this.recursionDepth_=0}var Jn=(Zn.prototype.add=function(e){this.events_.push(e)},Zn.prototype.raise=function(){for(var e=0;e<this.events_.length;e++){var t,n=this.events_[e];null!==n&&(this.events_[e]=null,t=n.getEventRunner(),N&&O("event: "+n.toString()),M(t))}},Zn.prototype.getPath=function(){return this.path_},Zn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e){this.path_=e,this.events_=[]}var er=(tr.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Array.isArray(this.listeners_[e]))for(var r=_.__spread(this.listeners_[e]),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)},tr.prototype.on=function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)},tr.prototype.off=function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)},tr.prototype.validateEventType_=function(t){C.assert(this.allowedEvents_.find(function(e){return e===t}),"Unknown event: "+t)},tr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){this.allowedEvents_=e,this.listeners_={},C.assert(Array.isArray(e)&&0<e.length,"Requires a non-empty array")}var nr,rr=(nr=er,_.__extends(ir,nr),ir.getInstance=function(){return new ir},ir.prototype.getInitialEvent=function(e){return C.assert("visible"===e,"Unknown event type: "+e),[this.visible_]},ir);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){var t,e,n=nr.call(this,["visible"])||this;return"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),n.visible_=!0,e&&document.addEventListener(e,function(){var e=!document[t];e!==n.visible_&&(n.visible_=e,n.trigger("visible",e))},!1),n}var or,sr=(or=er,_.__extends(ar,or),ar.getInstance=function(){return new ar},ar.prototype.getInitialEvent=function(e){return C.assert("online"===e,"Unknown event type: "+e),[this.online_]},ar.prototype.currentlyOnline=function(){return this.online_},ar);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){var e=or.call(this,["online"])||this;return e.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||C.isMobileCordova()||(window.addEventListener("online",function(){e.online_||(e.online_=!0,e.trigger("online",!0))},!1),window.addEventListener("offline",function(){e.online_&&(e.online_=!1,e.trigger("online",!1))},!1)),e}var ur=(lr.prototype.closeAfter=function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},lr.prototype.handleResponse=function(e,t){var n=this;this.pendingResponses[e]=t;for(var r=this;this.pendingResponses[this.currentResponseNum]&&"break"!==function(){var t=r.pendingResponses[r.currentResponseNum];delete r.pendingResponses[r.currentResponseNum];for(var e=0;e<t.length;++e)!function(e){t[e]&&M(function(){n.onMessage_(t[e])})}(e);if(r.currentResponseNum===r.closeAfterResponse)return r.onClose&&(r.onClose(),r.onClose=null),"break";r.currentResponseNum++}(););},lr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}var hr="pLPCommand",cr="pRTLPCB",pr=(dr.prototype.open=function(e,t){var n,r,i,s=this;this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ur(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){s.log_("Timed out trying to connect."),s.onClosed_(),s.connectTimeoutTimer_=null},Math.floor(3e4)),n=function(){var e,t;s.isClosed_||(s.scriptTagHolder=new fr(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=_.__read(e,5),r=n[0],i=n[1],o=n[2];if(n[3],n[4],s.incrementIncomingBytes_(e),s.scriptTagHolder)if(s.connectTimeoutTimer_&&(clearTimeout(s.connectTimeoutTimer_),s.connectTimeoutTimer_=null),s.everConnected_=!0,"start"===r)s.id=i,s.password=o;else{if("close"!==r)throw new Error("Unrecognized command received: "+r);i?(s.scriptTagHolder.sendNewPolls=!1,s.myPacketOrderer.closeAfter(i,function(){s.onClosed_()})):s.onClosed_()}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=_.__read(e,2),r=n[0],i=n[1];s.incrementIncomingBytes_(e),s.myPacketOrderer.handleResponse(r,i)},function(){s.onClosed_()},s.urlFn),(e={start:"t"}).ser=Math.floor(1e8*Math.random()),s.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=s.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",s.transportSessionId&&(e.s=s.transportSessionId),s.lastSessionId&&(e.ls=s.lastSessionId),s.applicationId&&(e.p=s.applicationId),"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(B)&&(e.r="f"),t=s.urlFn(e),s.log_("Connecting via long-poll to "+t),s.scriptTagHolder.addTag(t,function(){}))},C.isNodeSdk()||"complete"===document.readyState?n():(r=!1,i=function(){document.body?r||(r=!0,n()):setTimeout(i,Math.floor(10))},document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&i()}),window.attachEvent("onload",i)))},dr.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},dr.forceAllow=function(){dr.forceAllow_=!0},dr.forceDisallow=function(){dr.forceDisallow_=!0},dr.isAvailable=function(){return!(C.isNodeSdk()||!dr.forceAllow_&&(dr.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))},dr.prototype.markConnectionHealthy=function(){},dr.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},dr.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},dr.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},dr.prototype.send=function(e){var t=C.stringify(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=C.base64Encode(t),r=m(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++},dr.prototype.addDisconnectPingFrame=function(e,t){var n;C.isNodeSdk()||(this.myDisconnFrame=document.createElement("iframe"),(n={dframe:"t"}).id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame))},dr.prototype.incrementIncomingBytes_=function(e){var t=C.stringify(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)},dr);function dr(e,t,n,r,i){this.connId=e,this.repoInfo=t,this.applicationId=n,this.transportSessionId=r,this.lastSessionId=i,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=R(e),this.stats_=Hn.getCollection(t),this.urlFn=function(e){return t.connectionURL(K,e)}}var fr=(_r.createIFrame_=function(){var t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||O("No IE domain setting required")}catch(e){var n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},_r.prototype.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0)));var t=this.onDisconnect;t&&(this.onDisconnect=null,t())},_r.prototype.startLongPoll=function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););},_r.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(0<this.pendingSegs.length?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;0<this.pendingSegs.length&&this.pendingSegs[0].d.length+30+n.length<=1870;){var i=this.pendingSegs.shift(),n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d;r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1},_r.prototype.enqueueSegment=function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()},_r.prototype.addLongPollTag_=function(e,t){var n=this;function r(){n.outstandingRequests.delete(t),n.newRequest_()}this.outstandingRequests.add(t);var i=setTimeout(r,Math.floor(25e3));this.addTag(e,function(){clearTimeout(i),r()})},_r.prototype.addTag=function(e,n){var r=this;C.isNodeSdk()?this.doNodeLongPoll(e,n):setTimeout(function(){try{if(!r.sendNewPolls)return;var t=r.myIFrame.doc.createElement("script");t.type="text/javascript",t.async=!0,t.src=e,t.onload=t.onreadystatechange=function(){var e=t.readyState;e&&"loaded"!==e&&"complete"!==e||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),n())},t.onerror=function(){O("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(t)}catch(e){}},Math.floor(1))},_r);
/**
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
 */function _r(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,C.isNodeSdk())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=T(),window[hr+this.uniqueCallbackIdentifier]=e,window[cr+this.uniqueCallbackIdentifier]=t,this.myIFrame=_r.createIFrame_();var i="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(i='<script>document.domain="'+document.domain+'";<\/script>');var o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(e){O("frame writing exception"),e.stack&&O(e.stack),O(e)}}}var yr="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vr=null;"undefined"!=typeof MozWebSocket?vr=MozWebSocket:"undefined"!=typeof WebSocket&&(vr=WebSocket);var gr=(mr.connectionURL_=function(e,t,n){var r={v:"5"};return!C.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(B)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),e.connectionURL(z,r)},mr.prototype.open=function(e,t){var n,r,i,o,s=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,w.set("previous_websocket_failure",!0);try{C.isNodeSdk()?(n=C.CONSTANTS.NODE_ADMIN?"AdminNode":"Node",o={headers:{"User-Agent":"Firebase/5/"+yr+"/"+u.platform+"/"+n,"X-Firebase-GMPID":this.applicationId||""}},r=u.env,(i=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy)&&(o.proxy={origin:i})):o={headers:{"X-Firebase-GMPID":this.applicationId||""}},this.mySock=new vr(this.connURL,[],o)}catch(e){this.log_("Error instantiating WebSocket.");var a=e.message||e.data;return a&&this.log_(a),void this.onClosed_()}this.mySock.onopen=function(){s.log_("Websocket connected."),s.everConnected_=!0},this.mySock.onclose=function(){s.log_("Websocket connection was disconnected."),s.mySock=null,s.onClosed_()},this.mySock.onmessage=function(e){s.handleIncomingFrame(e)},this.mySock.onerror=function(e){s.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&s.log_(t),s.onClosed_()}},mr.prototype.start=function(){},mr.forceDisallow=function(){mr.forceDisallow_=!0},mr.isAvailable=function(){var e,t=!1;return"undefined"!=typeof navigator&&navigator.userAgent&&(e=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/))&&1<e.length&&parseFloat(e[1])<4.4&&(t=!0),!t&&null!==vr&&!mr.forceDisallow_},mr.previouslyFailed=function(){return w.isInMemoryStorage||!0===w.get("previous_websocket_failure")},mr.prototype.markConnectionHealthy=function(){w.remove("previous_websocket_failure")},mr.prototype.appendFrame_=function(e){var t,n;this.frames.push(e),this.frames.length===this.totalFrames&&(t=this.frames.join(""),this.frames=null,n=C.jsonEval(t),this.onMessage(n))},mr.prototype.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},mr.prototype.extractFrameCount_=function(e){if(C.assert(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e},mr.prototype.handleIncomingFrame=function(e){var t,n;null!==this.mySock&&(t=e.data,this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames?this.appendFrame_(t):null!==(n=this.extractFrameCount_(t))&&this.appendFrame_(n))},mr.prototype.send=function(e){this.resetKeepAlive();var t=C.stringify(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=m(t,16384);1<n.length&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])},mr.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},mr.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},mr.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},mr.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()},Math.floor(45e3))},mr.prototype.sendString_=function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},mr.responsesRequiredToBeHealthy=2,mr.healthyTimeout=3e4,mr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t,n,r,i){this.connId=e,this.applicationId=n,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=R(this.connId),this.stats_=Hn.getCollection(t),this.connURL=mr.connectionURL_(t,r,i)}var Cr=(Object.defineProperty(Er,"ALL_TRANSPORTS",{get:function(){return[pr,gr]},enumerable:!1,configurable:!0}),Er.prototype.initTransports_=function(e){var t,n,r=gr&&gr.isAvailable(),i=r&&!gr.previouslyFailed();if(e.webSocketOnly&&(r||y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[gr];else{var o=this.transports_=[];try{for(var s=_.__values(Er.ALL_TRANSPORTS),a=s.next();!a.done;a=s.next()){var u=a.value;u&&u.isAvailable()&&o.push(u)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}}},Er.prototype.initialTransport=function(){if(0<this.transports_.length)return this.transports_[0];throw new Error("No transports available")},Er.prototype.upgradeTransport=function(){return 1<this.transports_.length?this.transports_[1]:null},Er);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e){this.initTransports_(e)}var wr=(br.prototype.start_=function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,void 0,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){e.conn_&&e.conn_.open(n,r)},Math.floor(0));var i=t.healthyTimeout||0;0<i&&(this.healthyTimeout_=W(function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&102400<e.conn_.bytesReceived?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&10240<e.conn_.bytesSent?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))},Math.floor(i)))},br.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},br.prototype.disconnReceiver_=function(t){var n=this;return function(e){t===n.conn_?n.onConnectionLost_(e):t===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},br.prototype.connReceiver_=function(t){var n=this;return function(e){2!==n.state_&&(t===n.rx_?n.onPrimaryMessageReceived_(e):t===n.secondaryConn_?n.onSecondaryMessageReceived_(e):n.log_("message on old connection"))}},br.prototype.sendRequest=function(e){var t={t:"d",d:e};this.sendData_(t)},br.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},br.prototype.onSecondaryControl_=function(e){var t;"t"in e&&("a"===(t=e.t)?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_()))},br.prototype.onSecondaryMessageReceived_=function(e){var t=g("t",e),n=g("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}},br.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))},br.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},br.prototype.onPrimaryMessageReceived_=function(e){var t=g("t",e),n=g("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)},br.prototype.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},br.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},br.prototype.onControl_=function(e){var t=g("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?p("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):p("Unknown control packet command: "+t)}},br.prototype.onHandshake_=function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.updateHost(r),0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&y("Protocol version mismatch detected"),this.tryStartUpgrade_())},br.prototype.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},br.prototype.startUpgrade_=function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),W(function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())},Math.floor(6e4))},br.prototype.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.updateHost(e),1===this.state_?this.close():(this.closeConnections_(),this.start_())},br.prototype.onConnectionEstablished_=function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):W(function(){n.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))},br.prototype.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))},br.prototype.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()},br.prototype.onConnectionLost_=function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(w.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},br.prototype.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},br.prototype.sendData_=function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)},br.prototype.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},br.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},br);function br(e,t,n,r,i,o,s,a){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.onMessage_=r,this.onReady_=i,this.onDisconnect_=o,this.onKill_=s,this.lastSessionId=a,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=R("c:"+this.id+":"),this.transportManager_=new Cr(t),this.log_("Connection created"),this.start_()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Sr=(Tr.prototype.put=function(e,t,n,r){},Tr.prototype.merge=function(e,t,n,r){},Tr.prototype.refreshAuthToken=function(e){},Tr.prototype.onDisconnectPut=function(e,t,n){},Tr.prototype.onDisconnectMerge=function(e,t,n){},Tr.prototype.onDisconnectCancel=function(e,t){},Tr.prototype.reportStats=function(e){},Tr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(){}var Ir,Nr=1e3,Pr=3e5,Or=(Ir=Sr,_.__extends(Rr,Ir),Rr.prototype.sendRequest=function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(C.stringify(i)),C.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)},Rr.prototype.listen=function(e,t,n,r){var i=e.queryIdentifier(),o=e.path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),C.assert(e.getQueryParams().isDefault()||!e.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),C.assert(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var s={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,s),this.connected_&&this.sendListen_(s)},Rr.prototype.sendListen_=function(r){var i=this,o=r.query,s=o.path.toString(),a=o.queryIdentifier();this.log_("Listen on "+s+" for "+a);var e={p:s};r.tag&&(e.q=o.queryObject(),e.t=r.tag),e.h=r.hashFn(),this.sendRequest("q",e,function(e){var t=e.d,n=e.s;Rr.warnOnListenWarnings_(t,o),(i.listens.get(s)&&i.listens.get(s).get(a))===r&&(i.log_("listen response",e),"ok"!==n&&i.removeListen_(s,a),r.onComplete&&r.onComplete(n,t))})},Rr.warnOnListenWarnings_=function(e,t){var n,r,i;e&&"object"==typeof e&&C.contains(e,"w")&&(n=C.safeGet(e,"w"),Array.isArray(n)&&~n.indexOf("no_index")&&(r='".indexOn": "'+t.getQueryParams().getIndex().toString()+'"',i=t.path.toString(),y("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+r+" at "+i+" to your security rules for better performance.")))},Rr.prototype.refreshAuthToken=function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(e)},Rr.prototype.reduceReconnectDelayIfAdminCredential_=function(e){(e&&40===e.length||C.isAdmin(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)},Rr.prototype.tryAuth=function(){var r,e,t,i=this;this.connected_&&this.authToken_&&(r=this.authToken_,e=C.isValidFormat(r)?"auth":"gauth",t={cred:r},null===this.authOverride_?t.noauth=!0:"object"==typeof this.authOverride_&&(t.authvar=this.authOverride_),this.sendRequest(e,t,function(e){var t=e.s,n=e.d||"error";i.authToken_===r&&("ok"===t?i.invalidAuthTokenCount_=0:i.onAuthRevoked_(t,n))}))},Rr.prototype.unlisten=function(e,t){var n=e.path.toString(),r=e.queryIdentifier();this.log_("Unlisten called for "+n+" "+r),C.assert(e.getQueryParams().isDefault()||!e.getQueryParams().loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e.queryObject(),t)},Rr.prototype.sendUnlisten_=function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)},Rr.prototype.onDisconnectPut=function(e,t,n){this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})},Rr.prototype.onDisconnectMerge=function(e,t,n){this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})},Rr.prototype.onDisconnectCancel=function(e,t){this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})},Rr.prototype.sendOnDisconnect_=function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,function(e){r&&setTimeout(function(){r(e.s,e.d)},Math.floor(0))})},Rr.prototype.put=function(e,t,n,r){this.putInternal("p",e,t,n,r)},Rr.prototype.merge=function(e,t,n,r){this.putInternal("m",e,t,n,r)},Rr.prototype.putInternal=function(e,t,n,r,i){var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)},Rr.prototype.sendPut_=function(t){var n=this,r=this.outstandingPuts_[t].action,e=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(r,e,function(e){n.log_(r+" response",e),delete n.outstandingPuts_[t],n.outstandingPutCount_--,0===n.outstandingPutCount_&&(n.outstandingPuts_=[]),i&&i(e.s,e.d)})},Rr.prototype.reportStats=function(e){var t,n=this;this.connected_&&(t={c:e},this.log_("reportStats",t),this.sendRequest("s",t,function(e){var t;"ok"!==e.s&&(t=e.d,n.log_("reportStats","Error sending stats: "+t))}))},Rr.prototype.onDataMessage_=function(e){if("r"in e){this.log_("from server: "+C.stringify(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}},Rr.prototype.onDataPush_=function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):p("Unrecognized action received from server: "+C.stringify(e)+"\nAre you using the latest client?")},Rr.prototype.onReady_=function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},Rr.prototype.scheduleConnect_=function(e){var t=this;C.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){t.establishConnectionTimer_=null,t.establishConnection_()},Math.floor(e))},Rr.prototype.onVisible_=function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e},Rr.prototype.onOnline_=function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},Rr.prototype.onRealtimeDisconnect_=function(){var e,t;this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()&&(this.visible_?this.lastConnectionEstablishedTime_&&(3e4<(new Date).getTime()-this.lastConnectionEstablishedTime_&&(this.reconnectDelay_=Nr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime()),e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e),t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)),this.onConnectStatus_(!1)},Rr.prototype.establishConnection_=function(){var t,n,r,i,o,s,a,u,l,e;this.shouldReconnect_()&&(this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null,t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rr.nextConnectionId_++,s=(o=this).lastSessionId,a=!1,u=null,l=function(){u?u.close():(a=!0,r())},this.realtime_={close:l,sendRequest:function(e){C.assert(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(e)}},e=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(e).then(function(e){a?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),o.authToken_=e&&e.accessToken,u=new wr(i,o.repoInfo_,o.applicationId_,t,n,r,function(e){y(e+" ("+o.repoInfo_.toString()+")"),o.interrupt("server_kill")},s))}).then(null,function(e){o.log_("Failed to get token: "+e),a||(C.CONSTANTS.NODE_ADMIN&&y(e),l())}))},Rr.prototype.interrupt=function(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},Rr.prototype.resume=function(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],C.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0))},Rr.prototype.handleTimestamp_=function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})},Rr.prototype.cancelSentTransactions_=function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},Rr.prototype.onListenRevoked_=function(e,t){var n=t?t.map(function(e){return k(e)}).join("$"):"default",r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")},Rr.prototype.removeListen_=function(e,t){var n,r,i=new V(e).toString();return this.listens.has(i)?(r=(n=this.listens.get(i)).get(t),n.delete(t),0===n.size&&this.listens.delete(i)):r=void 0,r},Rr.prototype.onAuthRevoked_=function(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,3<=this.invalidAuthTokenCount_&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))},Rr.prototype.onSecurityDebugPacket_=function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))},Rr.prototype.restoreState_=function(){var t,e,n,r;this.tryAuth();try{for(var i=_.__values(this.listens.values()),o=i.next();!o.done;o=i.next()){var s=o.value;try{for(var a=(n=void 0,_.__values(s.values())),u=a.next();!u.done;u=a.next()){var l=u.value;this.sendListen_(l)}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var c=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(c.action,c.pathString,c.data,c.onComplete)}},Rr.prototype.sendConnectStats_=function(){var e={},t="js";C.CONSTANTS.NODE_ADMIN?t="admin_node":C.CONSTANTS.NODE_CLIENT&&(t="node"),e["sdk."+t+"."+yr.replace(/\./g,"-")]=1,C.isMobileCordova()?e["framework.cordova"]=1:C.isReactNative()&&(e["framework.reactnative"]=1),this.reportStats(e)},Rr.prototype.shouldReconnect_=function(){var e=sr.getInstance().currentlyOnline();return C.isEmpty(this.interruptReasons_)&&e},Rr.nextPersistentConnectionId_=0,Rr.nextConnectionId_=0,Rr);function Rr(e,t,n,r,i,o,s){var a=Ir.call(this)||this;if(a.repoInfo_=e,a.applicationId_=t,a.onDataUpdate_=n,a.onConnectStatus_=r,a.onServerInfoUpdate_=i,a.authTokenProvider_=o,a.authOverride_=s,a.id=Rr.nextPersistentConnectionId_++,a.log_=R("p:"+a.id+":"),a.interruptReasons_={},a.listens=new Map,a.outstandingPuts_=[],a.outstandingPutCount_=0,a.onDisconnectRequestQueue_=[],a.connected_=!1,a.reconnectDelay_=Nr,a.maxReconnectDelay_=Pr,a.securityDebugCallback_=null,a.lastSessionId=null,a.establishConnectionTimer_=null,a.visible_=!1,a.requestCBHash_={},a.requestNumber_=0,a.realtime_=null,a.authToken_=null,a.forceTokenRefresh_=!1,a.invalidAuthTokenCount_=0,a.firstConnection_=!0,a.lastConnectionAttemptTime_=null,a.lastConnectionEstablishedTime_=null,s&&!C.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return a.scheduleConnect_(0),rr.getInstance().on("visible",a.onVisible_,a),-1===e.host.indexOf("fblocal")&&sr.getInstance().on("online",a.onOnline_,a),a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dr,Ar=(Dr=Sr,_.__extends(xr,Dr),xr.prototype.reportStats=function(e){throw new Error("Method not implemented.")},xr.getListenId_=function(e,t){return void 0!==t?"tag$"+t:(C.assert(e.getQueryParams().isDefault(),"should have a tag if it's not a default query."),e.path.toString())},xr.prototype.listen=function(e,t,r,i){var o=this,s=e.path.toString();this.log_("Listen called for "+s+" "+e.queryIdentifier());var a=xr.getListenId_(e,r),u={};this.listens_[a]=u;var n=e.getQueryParams().toRestQueryStringParameters();this.restRequest_(s+".json",n,function(e,t){var n=t;404===e&&(e=n=null),null===e&&o.onDataUpdate_(s,n,!1,r),C.safeGet(o.listens_,a)===u&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})},xr.prototype.unlisten=function(e,t){var n=xr.getListenId_(e,t);delete this.listens_[n]},xr.prototype.refreshAuthToken=function(e){},xr.prototype.restRequest_=function(i,o,s){var a=this;void 0===o&&(o={}),o.format="export",this.authTokenProvider_.getToken(!1).then(function(e){var t=e&&e.accessToken;t&&(o.auth=t);var n=(a.repoInfo_.secure?"https://":"http://")+a.repoInfo_.host+i+"?ns="+a.repoInfo_.namespace+C.querystring(o);a.log_("Sending REST request for "+n);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(s&&4===r.readyState){a.log_("REST Response for "+n+" received. status:",r.status,"response:",r.responseText);var e=null;if(200<=r.status&&r.status<300){try{e=C.jsonEval(r.responseText)}catch(e){y("Failed to parse JSON response for "+n+": "+r.responseText)}s(null,e)}else 401!==r.status&&404!==r.status&&y("Got unsuccessful REST response for "+n+" Status: "+r.status),s(r.status);s=null}},r.open("GET",n,!0),r.send()})},xr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e,t,n){var r=Dr.call(this)||this;return r.repoInfo_=e,r.onDataUpdate_=t,r.authTokenProvider_=n,r.log_=R("p:rest:"),r.listens_={},r}var kr="repo_interrupt",Fr=(Lr.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},Lr.prototype.name=function(){return this.repoInfo_.namespace},Lr.prototype.serverTime=function(){var e=this.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e},Lr.prototype.generateServerValues=function(){return(e=e={timestamp:this.serverTime()}).timestamp=e.timestamp||(new Date).getTime(),e;var e},Lr.prototype.onDataUpdate_=function(e,t,n,r){this.dataUpdateCount++;var i=new V(e);t=this.interceptServerDataCallback_?this.interceptServerDataCallback_(e,t):t;var o,s,a,u,l=[],h=i;0<(l=r?n?(o=C.map(t,function(e){return dt(e)}),this.serverSyncTree_.applyTaggedQueryMerge(i,o,r)):(s=dt(t),this.serverSyncTree_.applyTaggedQueryOverwrite(i,s,r)):n?(a=C.map(t,function(e){return dt(e)}),this.serverSyncTree_.applyServerMerge(i,a)):(u=dt(t),this.serverSyncTree_.applyServerOverwrite(i,u))).length&&(h=this.rerunTransactions_(i)),this.eventQueue_.raiseEventsForChangedPath(h,l)},Lr.prototype.interceptServerData_=function(e){this.interceptServerDataCallback_=e},Lr.prototype.onConnectStatus_=function(e){this.updateInfo_("connected",e),!1===e&&this.runOnDisconnectEvents_()},Lr.prototype.onServerInfoUpdate_=function(e){var n=this;F(e,function(e,t){n.updateInfo_(e,t)})},Lr.prototype.updateInfo_=function(e,t){var n=new V("/.info/"+e),r=dt(t);this.infoData_.updateSnapshot(n,r);var i=this.infoSyncTree_.applyServerOverwrite(n,r);this.eventQueue_.raiseEventsForChangedPath(n,i)},Lr.prototype.getNextWriteId_=function(){return this.nextWriteId_++},Lr.prototype.setWithPriority=function(i,e,t,o){var s=this;this.log_("set",{path:i.toString(),value:e,priority:t});var n=this.generateServerValues(),r=dt(e,t),a=this.serverSyncTree_.calcCompleteEventCache(i),u=Mt(r,a,n),l=this.getNextWriteId_(),h=this.serverSyncTree_.applyUserOverwrite(i,u,l,!0);this.eventQueue_.queueEvents(h),this.server_.put(i.toString(),r.val(!0),function(e,t){var n="ok"===e;n||y("set at "+i+" failed: "+e);var r=s.serverSyncTree_.ackUserWrite(l,!n);s.eventQueue_.raiseEventsForChangedPath(i,r),s.callOnCompleteCallback(o,e,t)});var c=this.abortTransactions_(i);this.rerunTransactions_(c),this.eventQueue_.raiseEventsForChangedPath(c,[])},Lr.prototype.update=function(o,e,s){var a=this;this.log_("update",{path:o.toString(),value:e});var u,t,n=!0,r=this.generateServerValues(),i={};F(e,function(e,t){n=!1,i[e]=Lt(o.child(e),dt(t),a.serverSyncTree_,r)}),n?(O("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(s,"ok")):(u=this.getNextWriteId_(),t=this.serverSyncTree_.applyUserMerge(o,i,u),this.eventQueue_.queueEvents(t),this.server_.merge(o.toString(),e,function(e,t){var n="ok"===e;n||y("update at "+o+" failed: "+e);var r=a.serverSyncTree_.ackUserWrite(u,!n),i=0<r.length?a.rerunTransactions_(o):o;a.eventQueue_.raiseEventsForChangedPath(i,r),a.callOnCompleteCallback(s,e,t)}),F(e,function(e){var t=a.abortTransactions_(o.child(e));a.rerunTransactions_(t)}),this.eventQueue_.raiseEventsForChangedPath(o,[]))},Lr.prototype.runOnDisconnectEvents_=function(){var r=this;this.log_("onDisconnectEvents");var i=this.generateServerValues(),o=new Ht;this.onDisconnect_.forEachTree(V.Empty,function(e,t){var n=Lt(e,t,r.serverSyncTree_,i);o.remember(e,n)});var s=[];o.forEachTree(V.Empty,function(e,t){s=s.concat(r.serverSyncTree_.applyServerOverwrite(e,t));var n=r.abortTransactions_(e);r.rerunTransactions_(n)}),this.onDisconnect_=new Ht,this.eventQueue_.raiseEventsForChangedPath(V.Empty,s)},Lr.prototype.onDisconnectCancel=function(n,r){var i=this;this.server_.onDisconnectCancel(n.toString(),function(e,t){"ok"===e&&i.onDisconnect_.forget(n),i.callOnCompleteCallback(r,e,t)})},Lr.prototype.onDisconnectSet=function(n,e,r){var i=this,o=dt(e);this.server_.onDisconnectPut(n.toString(),o.val(!0),function(e,t){"ok"===e&&i.onDisconnect_.remember(n,o),i.callOnCompleteCallback(r,e,t)})},Lr.prototype.onDisconnectSetWithPriority=function(n,e,t,r){var i=this,o=dt(e,t);this.server_.onDisconnectPut(n.toString(),o.val(!0),function(e,t){"ok"===e&&i.onDisconnect_.remember(n,o),i.callOnCompleteCallback(r,e,t)})},Lr.prototype.onDisconnectUpdate=function(r,n,i){var o=this;if(C.isEmpty(n))return O("onDisconnect().update() called with empty data.  Don't do anything."),void this.callOnCompleteCallback(i,"ok");this.server_.onDisconnectMerge(r.toString(),n,function(e,t){"ok"===e&&F(n,function(e,t){var n=dt(t);o.onDisconnect_.remember(r.child(e),n)}),o.callOnCompleteCallback(i,e,t)})},Lr.prototype.addEventCallbackForQuery=function(e,t){var n=".info"===e.path.getFront()?this.infoSyncTree_.addEventRegistration(e,t):this.serverSyncTree_.addEventRegistration(e,t);this.eventQueue_.raiseEventsAtPath(e.path,n)},Lr.prototype.removeEventCallbackForQuery=function(e,t){var n=".info"===e.path.getFront()?this.infoSyncTree_.removeEventRegistration(e,t):this.serverSyncTree_.removeEventRegistration(e,t);this.eventQueue_.raiseEventsAtPath(e.path,n)},Lr.prototype.interrupt=function(){this.persistentConnection_&&this.persistentConnection_.interrupt(kr)},Lr.prototype.resume=function(){this.persistentConnection_&&this.persistentConnection_.resume(kr)},Lr.prototype.stats=function(e){var t,i;void 0===e&&(e=!1),"undefined"!=typeof console&&(t=e?(this.statsListener_||(this.statsListener_=new zn(this.stats_)),this.statsListener_.get()):this.stats_.get(),i=Object.keys(t).reduce(function(e,t){return Math.max(t.length,e)},0),F(t,function(e,t){for(var n=e,r=e.length;r<i+2;r++)n+=" ";console.log(n+t)}))},Lr.prototype.statsIncrementCounter=function(e){this.stats_.incrementCounter(e),this.statsReporter_.includeStat(e)},Lr.prototype.log_=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="";this.persistentConnection_&&(n=this.persistentConnection_.id+":"),O.apply(void 0,_.__spread([n],e))},Lr.prototype.callOnCompleteCallback=function(r,i,o){r&&M(function(){var e,t,n;"ok"===i?r(null):(t=e=(i||"error").toUpperCase(),o&&(t+=": "+o),(n=new Error(t)).code=e,r(n))})},Object.defineProperty(Lr.prototype,"database",{get:function(){return this.__database||(this.__database=new ti(this))},enumerable:!1,configurable:!0}),Lr);function Lr(e,t,n,r){var s=this;this.repoInfo_=e,this.app=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $n,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=new Ht,this.persistentConnection_=null;var i=new qn(n,r);if(this.stats_=Hn.getCollection(e),t||0<=("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.server_=new Ar(this.repoInfo_,this.onDataUpdate_.bind(this),i),setTimeout(this.onConnectStatus_.bind(this,!0),0);else{var o=n.options.databaseAuthVariableOverride;if(null!=o){if("object"!=typeof o)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{C.stringify(o)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}this.persistentConnection_=new Or(this.repoInfo_,n.options.appId,this.onDataUpdate_.bind(this),this.onConnectStatus_.bind(this),this.onServerInfoUpdate_.bind(this),i,o),this.server_=this.persistentConnection_}i.addTokenChangeListener(function(e){s.server_.refreshAuthToken(e)}),this.statsReporter_=Hn.getOrCreateReporter(e,function(){return new Gn(s.stats_,s.server_)}),this.transactionsInit_(),this.infoData_=new Wn,this.infoSyncTree_=new Ln({startListening:function(e,t,n,r){var i=[],o=s.infoData_.getNode(e.path);return o.isEmpty()||(i=s.infoSyncTree_.applyServerOverwrite(e.path,o),setTimeout(function(){r("ok")},0)),i},stopListening:function(){}}),this.updateInfo_("connected",!1),this.serverSyncTree_=new Ln({startListening:function(r,e,t,i){return s.server_.listen(r,t,e,function(e,t){var n=i(e,t);s.eventQueue_.raiseEventsForChangedPath(r.path,n)}),[]},stopListening:function(e,t){s.server_.unlisten(e,t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mr=(Wr.prototype.getStartPost=function(){return this.startPost_},Wr.prototype.getEndPost=function(){return this.endPost_},Wr.prototype.matches=function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0},Wr.prototype.updateChild=function(e,t,n,r,i,o){return this.matches(new Ee(t,n))||(n=at.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)},Wr.prototype.updateFullNode=function(e,t,n){t.isLeafNode()&&(t=at.EMPTY_NODE);var r=(r=t.withIndex(this.index_)).updatePriority(at.EMPTY_NODE),i=this;return t.forEachChild(qe,function(e,t){i.matches(new Ee(e,t))||(r=r.updateImmediateChild(e,at.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)},Wr.prototype.updatePriority=function(e,t){return e},Wr.prototype.filtersNodes=function(){return!0},Wr.prototype.getIndexedFilter=function(){return this.indexedFilter_},Wr.prototype.getIndex=function(){return this.index_},Wr.getStartPost_=function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()},Wr.getEndPost_=function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()},Wr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(e){this.indexedFilter_=new pn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wr.getStartPost_(e),this.endPost_=Wr.getEndPost_(e)}var jr=(qr.prototype.updateChild=function(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ee(t,n))||(n=at.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)},qr.prototype.updateFullNode=function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=at.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){r=at.EMPTY_NODE.withIndex(this.index_);var i=void 0;i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var o=0;i.hasNext()&&o<this.limit_;){var s=i.getNext();if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:this.index_.compare(s,this.rangedFilter_.getEndPost())<=0))break;r=r.updateImmediateChild(s.name,s.node),o++}}else{r=(r=t.withIndex(this.index_)).updatePriority(at.EMPTY_NODE);var a,u=void 0,l=void 0,h=void 0,i=void 0;h=this.reverse_?(i=r.getReverseIterator(this.index_),u=this.rangedFilter_.getEndPost(),l=this.rangedFilter_.getStartPost(),a=this.index_.getCompare(),function(e,t){return a(t,e)}):(i=r.getIterator(this.index_),u=this.rangedFilter_.getStartPost(),l=this.rangedFilter_.getEndPost(),this.index_.getCompare());for(var o=0,c=!1;i.hasNext();)s=i.getNext(),!c&&h(u,s)<=0&&(c=!0),c&&o<this.limit_&&h(s,l)<=0?o++:r=r.updateImmediateChild(s.name,at.EMPTY_NODE)}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)},qr.prototype.updatePriority=function(e,t){return e},qr.prototype.filtersNodes=function(){return!0},qr.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},qr.prototype.getIndex=function(){return this.index_},qr.prototype.fullLimitUpdateChild_=function(e,t,n,r,i){var o,s;s=this.reverse_?(o=this.index_.getCompare(),function(e,t){return o(t,e)}):this.index_.getCompare();var a=e;C.assert(a.numChildren()===this.limit_,"");var u=new Ee(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(t)){for(var c=a.getImmediateChild(t),p=r.getChildAfterChild(this.index_,l,this.reverse_);null!=p&&(p.name===t||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);var d=null==p?1:s(p,u);if(h&&!n.isEmpty()&&0<=d)return null!=i&&i.trackChildChange(hn.childChangedChange(t,n,c)),a.updateImmediateChild(t,n);null!=i&&i.trackChildChange(hn.childRemovedChange(t,c));var f=a.updateImmediateChild(t,at.EMPTY_NODE);return null!=p&&this.rangedFilter_.matches(p)?(null!=i&&i.trackChildChange(hn.childAddedChange(p.name,p.node)),f.updateImmediateChild(p.name,p.node)):f}return!n.isEmpty()&&h&&0<=s(l,u)?(null!=i&&(i.trackChildChange(hn.childRemovedChange(l.name,l.node)),i.trackChildChange(hn.childAddedChange(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,at.EMPTY_NODE)):e},qr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){this.rangedFilter_=new Mr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}var Vr=(Ur.prototype.hasStart=function(){return this.startSet_},Ur.prototype.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:this.viewFrom_===Ur.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT},Ur.prototype.getIndexStartValue=function(){return C.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},Ur.prototype.getIndexStartName=function(){return C.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:D},Ur.prototype.hasEnd=function(){return this.endSet_},Ur.prototype.getIndexEndValue=function(){return C.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},Ur.prototype.getIndexEndName=function(){return C.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A},Ur.prototype.hasLimit=function(){return this.limitSet_},Ur.prototype.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},Ur.prototype.getLimit=function(){return C.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_},Ur.prototype.getIndex=function(){return this.index_},Ur.prototype.copy_=function(){var e=new Ur;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},Ur.prototype.limit=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="",t},Ur.prototype.limitToFirst=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_=Ur.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,t},Ur.prototype.limitToLast=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_=Ur.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,t},Ur.prototype.startAt=function(e,t){var n=this.copy_();return n.startSet_=!0,void 0===e&&(e=null),n.indexStartValue_=e,null!=t?(n.startNameSet_=!0,n.indexStartName_=t):(n.startNameSet_=!1,n.indexStartName_=""),n},Ur.prototype.endAt=function(e,t){var n=this.copy_();return n.endSet_=!0,void 0===e&&(e=null),n.indexEndValue_=e,void 0!==t?(n.endNameSet_=!0,n.indexEndName_=t):(n.endNameSet_=!1,n.indexEndName_=""),n},Ur.prototype.orderBy=function(e){var t=this.copy_();return t.index_=e,t},Ur.prototype.getQueryObject=function(){var e,t=Ur.WIRE_PROTOCOL_CONSTANTS_,n={};return this.startSet_&&(n[t.INDEX_START_VALUE]=this.indexStartValue_,this.startNameSet_&&(n[t.INDEX_START_NAME]=this.indexStartName_)),this.endSet_&&(n[t.INDEX_END_VALUE]=this.indexEndValue_,this.endNameSet_&&(n[t.INDEX_END_NAME]=this.indexEndName_)),this.limitSet_&&(n[t.LIMIT]=this.limit_,""===(e=this.viewFrom_)&&(e=this.isViewFromLeft()?t.VIEW_FROM_LEFT:t.VIEW_FROM_RIGHT),n[t.VIEW_FROM]=e),this.index_!==qe&&(n[t.INDEX]=this.index_.toString()),n},Ur.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},Ur.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===qe},Ur.prototype.getNodeFilter=function(){return this.loadsAllData()?new pn(this.getIndex()):new(this.hasLimit()?jr:Mr)(this)},Ur.prototype.toRestQueryStringParameters=function(){var e,t=Ur.REST_QUERY_CONSTANTS_,n={};return this.isDefault()||(e=this.index_===qe?t.PRIORITY_INDEX:this.index_===yt?t.VALUE_INDEX:this.index_===Re?t.KEY_INDEX:(C.assert(this.index_ instanceof vt,"Unrecognized index type!"),this.index_.toString()),n[t.ORDER_BY]=C.stringify(e),this.startSet_&&(n[t.START_AT]=C.stringify(this.indexStartValue_),this.startNameSet_&&(n[t.START_AT]+=","+C.stringify(this.indexStartName_))),this.endSet_&&(n[t.END_AT]=C.stringify(this.indexEndValue_),this.endNameSet_&&(n[t.END_AT]+=","+C.stringify(this.indexEndName_))),this.limitSet_&&(this.isViewFromLeft()?n[t.LIMIT_TO_FIRST]=this.limit_:n[t.LIMIT_TO_LAST]=this.limit_)),n},Ur.WIRE_PROTOCOL_CONSTANTS_={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},Ur.REST_QUERY_CONSTANTS_={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},Ur.DEFAULT=new Ur,Ur);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}var Qr,Hr=(Qr=Rt,_.__extends(Br,Qr),Br.prototype.getKey=function(){return C.validateArgCount("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},Br.prototype.child=function(e){var t,n,r,i;return C.validateArgCount("Reference.child",1,1,arguments.length),"number"==typeof e?e=String(e):e instanceof V||(null===this.path.getFront()?(t="Reference.child",i=!(n=1),r=(r=e)&&r.replace(/^\/*\.info(\/|$)/,"/"),oe(t,n,r,i)):oe("Reference.child",1,e,!1)),new Br(this.repo,this.path.child(e))},Br.prototype.getParent=function(){C.validateArgCount("Reference.parent",0,0,arguments.length);var e=this.path.parent();return null===e?null:new Br(this.repo,e)},Br.prototype.getRoot=function(){C.validateArgCount("Reference.root",0,0,arguments.length);for(var e=this;null!==e.getParent();)e=e.getParent();return e},Br.prototype.databaseProp=function(){return this.repo.database},Br.prototype.set=function(e,t){C.validateArgCount("Reference.set",1,2,arguments.length),se("Reference.set",this.path),ee("Reference.set",1,e,this.path,!1),C.validateCallback("Reference.set",2,t,!0);var n=new C.Deferred;return this.repo.setWithPriority(this.path,e,null,n.wrapCallback(t)),n.promise},Br.prototype.update=function(e,t){if(C.validateArgCount("Reference.update",1,2,arguments.length),se("Reference.update",this.path),Array.isArray(e)){for(var n={},r=0;r<e.length;++r)n[""+r]=e[r];e=n,y("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}te("Reference.update",1,e,this.path,!1),C.validateCallback("Reference.update",2,t,!0);var i=new C.Deferred;return this.repo.update(this.path,e,i.wrapCallback(t)),i.promise},Br.prototype.setWithPriority=function(e,t,n){if(C.validateArgCount("Reference.setWithPriority",2,3,arguments.length),se("Reference.setWithPriority",this.path),ee("Reference.setWithPriority",1,e,this.path,!1),ne("Reference.setWithPriority",2,t,!1),C.validateCallback("Reference.setWithPriority",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object.";var r=new C.Deferred;return this.repo.setWithPriority(this.path,e,t,r.wrapCallback(n)),r.promise},Br.prototype.remove=function(e){return C.validateArgCount("Reference.remove",0,1,arguments.length),se("Reference.remove",this.path),C.validateCallback("Reference.remove",1,e,!0),this.set(null,e)},Br.prototype.transaction=function(e,r,t){if(C.validateArgCount("Reference.transaction",1,3,arguments.length),se("Reference.transaction",this.path),C.validateCallback("Reference.transaction",1,e,!1),C.validateCallback("Reference.transaction",2,r,!0),function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw new Error(C.errorPrefix(e,t,r)+"must be a boolean.")}("Reference.transaction",3,t,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.transaction failed: "+this.getKey()+" is a read-only object.";void 0===t&&(t=!0);var i=new C.Deferred;return"function"==typeof r&&i.promise.catch(function(){}),this.repo.startTransaction(this.path,e,function(e,t,n){e?i.reject(e):i.resolve(new _e(t,n)),"function"==typeof r&&r(e,t,n)},t),i.promise},Br.prototype.setPriority=function(e,t){C.validateArgCount("Reference.setPriority",1,2,arguments.length),se("Reference.setPriority",this.path),ne("Reference.setPriority",1,e,!1),C.validateCallback("Reference.setPriority",2,t,!0);var n=new C.Deferred;return this.repo.setWithPriority(this.path.child(".priority"),e,null,n.wrapCallback(t)),n.promise},Br.prototype.push=function(e,t){C.validateArgCount("Reference.push",0,2,arguments.length),se("Reference.push",this.path),ee("Reference.push",1,e,this.path,!0),C.validateCallback("Reference.push",2,t,!0);var n=this.repo.serverTime(),r=Ce(n),i=this.child(r),o=this.child(r),s=null!=e?i.set(e,t).then(function(){return o}):Promise.resolve(o);return i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),"function"==typeof t&&s.catch(function(){}),i},Br.prototype.onDisconnect=function(){return se("Reference.onDisconnect",this.path),new de(this.repo,this.path)},Object.defineProperty(Br.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!1,configurable:!0}),Object.defineProperty(Br.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(Br.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(Br.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),Br);function Br(e,t){if(!(e instanceof Fr))throw new Error("new Reference() no longer supported - use app.database().");return Qr.call(this,e,t,Vr.DEFAULT,!1)||this}Rt.__referenceConstructor=Hr,Pn.__referenceConstructor=Hr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zr,Kr,Gr=function(){this.children={},this.childCount=0,this.value=null},Yr=($r.prototype.subTree=function(e){for(var t=e instanceof V?e:new V(e),n=this,r=t.getFront();null!==r;)n=new $r(r,n,C.safeGet(n.node_.children,r)||new Gr),r=(t=t.popFront()).getFront();return n},$r.prototype.getValue=function(){return this.node_.value},$r.prototype.setValue=function(e){C.assert(void 0!==e,"Cannot set value to undefined"),this.node_.value=e,this.updateParents_()},$r.prototype.clear=function(){this.node_.value=null,this.node_.children={},this.node_.childCount=0,this.updateParents_()},$r.prototype.hasChildren=function(){return 0<this.node_.childCount},$r.prototype.isEmpty=function(){return null===this.getValue()&&!this.hasChildren()},$r.prototype.forEachChild=function(n){var r=this;F(this.node_.children,function(e,t){n(new $r(e,r,t))})},$r.prototype.forEachDescendant=function(t,e,n){e&&!n&&t(this),this.forEachChild(function(e){e.forEachDescendant(t,!0,n)}),e&&n&&t(this)},$r.prototype.forEachAncestor=function(e,t){for(var n=t?this:this.parent();null!==n;){if(e(n))return!0;n=n.parent()}return!1},$r.prototype.forEachImmediateDescendantWithValue=function(t){this.forEachChild(function(e){null!==e.getValue()?t(e):e.forEachImmediateDescendantWithValue(t)})},$r.prototype.path=function(){return new V(null===this.parent_?this.name_:this.parent_.path()+"/"+this.name_)},$r.prototype.name=function(){return this.name_},$r.prototype.parent=function(){return this.parent_},$r.prototype.updateParents_=function(){null!==this.parent_&&this.parent_.updateChild_(this.name_,this)},$r.prototype.updateChild_=function(e,t){var n=t.isEmpty(),r=C.contains(this.node_.children,e);n&&r?(delete this.node_.children[e],this.node_.childCount--,this.updateParents_()):n||r||(this.node_.children[e]=t.node_,this.node_.childCount++,this.updateParents_())},$r);function $r(e,t,n){void 0===e&&(e=""),void 0===t&&(t=null),void 0===n&&(n=new Gr),this.name_=e,this.parent_=t,this.node_=n}(Kr=zr=zr||{})[Kr.RUN=0]="RUN",Kr[Kr.SENT=1]="SENT",Kr[Kr.COMPLETED=2]="COMPLETED",Kr[Kr.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",Kr[Kr.NEEDS_ABORT=4]="NEEDS_ABORT",Fr.MAX_TRANSACTION_RETRIES_=25,Fr.prototype.transactionsInit_=function(){this.transactionQueueTree_=new Yr},Fr.prototype.startTransaction=function(e,t,n,r){this.log_("transaction on "+e);function i(){}var o=new Hr(this,e);o.on("value",i);var s={path:e,update:t,onComplete:n,status:null,order:T(),applyLocally:r,retryCount:0,unwatcher:function(){o.off("value",i)},abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=this.getLatestState_(e);s.currentInputSnapshot=a;var u,l,h,c,p,d,f,_,y=s.update(a.val());void 0===y?(s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&(u=new mt(s.currentInputSnapshot,new Hr(this,s.path),qe),s.onComplete(null,!1,u))):(pe("transaction failed: Data returned ",y,s.path),s.status=zr.RUN,(h=(l=this.transactionQueueTree_.subTree(e)).getValue()||[]).push(s),l.setValue(h),c=void 0,"object"==typeof y&&null!==y&&C.contains(y,".priority")?(c=C.safeGet(y,".priority"),C.assert(Z(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):c=(this.serverSyncTree_.calcCompleteEventCache(e)||at.EMPTY_NODE).getPriority().val(),p=this.generateServerValues(),d=dt(y,c),f=Mt(d,a,p),s.currentOutputSnapshotRaw=d,s.currentOutputSnapshotResolved=f,s.currentWriteId=this.getNextWriteId_(),_=this.serverSyncTree_.applyUserOverwrite(e,f,s.currentWriteId,s.applyLocally),this.eventQueue_.raiseEventsForChangedPath(e,_),this.sendReadyTransactions_())},Fr.prototype.getLatestState_=function(e,t){return this.serverSyncTree_.calcCompleteEventCache(e,t)||at.EMPTY_NODE},Fr.prototype.sendReadyTransactions_=function(e){var t,n=this;void 0===e&&(e=this.transactionQueueTree_),e||this.pruneCompletedTransactionsBelowNode_(e),null!==e.getValue()?(t=this.buildTransactionQueue_(e),C.assert(0<t.length,"Sending zero length transaction queue"),t.every(function(e){return e.status===zr.RUN})&&this.sendTransactionQueue_(e.path(),t)):e.hasChildren()&&e.forEachChild(function(e){n.sendReadyTransactions_(e)})},Fr.prototype.sendTransactionQueue_=function(a,u){for(var l=this,e=u.map(function(e){return e.currentWriteId}),t=this.getLatestState_(a,e),n=t,r=t.hash(),i=0;i<u.length;i++){var o=u[i];C.assert(o.status===zr.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),o.status=zr.SENT,o.retryCount++;var s=V.relativePath(a,o.path),n=n.updateChild(s,o.currentOutputSnapshotRaw)}var h=n.val(!0),c=a;this.server_.put(c.toString(),h,function(e){l.log_("transaction put response",{path:c.toString(),status:e});var t=[];if("ok"===e){for(var n,r,i,o=[],s=0;s<u.length;s++){u[s].status=zr.COMPLETED,t=t.concat(l.serverSyncTree_.ackUserWrite(u[s].currentWriteId)),u[s].onComplete&&(n=u[s].currentOutputSnapshotResolved,r=new Hr(l,u[s].path),i=new mt(n,r,qe),o.push(u[s].onComplete.bind(null,null,!0,i))),u[s].unwatcher()}l.pruneCompletedTransactionsBelowNode_(l.transactionQueueTree_.subTree(a)),l.sendReadyTransactions_(),l.eventQueue_.raiseEventsForChangedPath(a,t);for(s=0;s<o.length;s++)M(o[s])}else{if("datastale"===e)for(s=0;s<u.length;s++)u[s].status===zr.SENT_NEEDS_ABORT?u[s].status=zr.NEEDS_ABORT:u[s].status=zr.RUN;else{y("transaction at "+c.toString()+" failed: "+e);for(s=0;s<u.length;s++)u[s].status=zr.NEEDS_ABORT,u[s].abortReason=e}l.rerunTransactions_(a)}},r)},Fr.prototype.rerunTransactions_=function(e){var t=this.getAncestorTransactionNode_(e),n=t.path(),r=this.buildTransactionQueue_(t);return this.rerunTransactionQueue_(r,n),n},Fr.prototype.rerunTransactionQueue_=function(e,t){if(0!==e.length){for(var n,r=[],i=[],o=e.filter(function(e){return e.status===zr.RUN}).map(function(e){return e.currentWriteId}),s=0;s<e.length;s++){var a,u,l,h,c,p,d,f,_,y=e[s],v=V.relativePath(t,y.path),g=!1,m=void 0;C.assert(null!==v,"rerunTransactionsUnderNode_: relativePath should not be null."),y.status===zr.NEEDS_ABORT?(g=!0,m=y.abortReason,i=i.concat(this.serverSyncTree_.ackUserWrite(y.currentWriteId,!0))):y.status===zr.RUN&&(i=y.retryCount>=Fr.MAX_TRANSACTION_RETRIES_?(g=!0,m="maxretry",i.concat(this.serverSyncTree_.ackUserWrite(y.currentWriteId,!0))):(a=this.getLatestState_(y.path,o),y.currentInputSnapshot=a,void 0!==(u=e[s].update(a.val()))?(pe("transaction failed: Data returned ",u,y.path),l=dt(u),"object"==typeof u&&null!=u&&C.contains(u,".priority")||(l=l.updatePriority(a.getPriority())),h=y.currentWriteId,c=this.generateServerValues(),p=Mt(l,a,c),y.currentOutputSnapshotRaw=l,y.currentOutputSnapshotResolved=p,y.currentWriteId=this.getNextWriteId_(),o.splice(o.indexOf(h),1),(i=i.concat(this.serverSyncTree_.applyUserOverwrite(y.path,p,y.currentWriteId,y.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(h,!0))):(g=!0,m="nodata",i.concat(this.serverSyncTree_.ackUserWrite(y.currentWriteId,!0))))),this.eventQueue_.raiseEventsForChangedPath(t,i),i=[],g&&(e[s].status=zr.COMPLETED,n=e[s].unwatcher,setTimeout(n,Math.floor(0)),e[s].onComplete&&("nodata"===m?(d=new Hr(this,e[s].path),f=e[s].currentInputSnapshot,_=new mt(f,d,qe),r.push(e[s].onComplete.bind(null,null,!1,_))):r.push(e[s].onComplete.bind(null,new Error(m),!1,null))))}this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);for(s=0;s<r.length;s++)M(r[s]);this.sendReadyTransactions_()}},Fr.prototype.getAncestorTransactionNode_=function(e){for(var t=this.transactionQueueTree_,n=e.getFront();null!==n&&null===t.getValue();)t=t.subTree(n),n=(e=e.popFront()).getFront();return t},Fr.prototype.buildTransactionQueue_=function(e){var t=[];return this.aggregateTransactionQueuesForNode_(e,t),t.sort(function(e,t){return e.order-t.order}),t},Fr.prototype.aggregateTransactionQueuesForNode_=function(e,t){var n=this,r=e.getValue();if(null!==r)for(var i=0;i<r.length;i++)t.push(r[i]);e.forEachChild(function(e){n.aggregateTransactionQueuesForNode_(e,t)})},Fr.prototype.pruneCompletedTransactionsBelowNode_=function(e){var t=this,n=e.getValue();if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==zr.COMPLETED&&(n[r]=n[i],r++);n.length=r,e.setValue(0<n.length?n:null)}e.forEachChild(function(e){t.pruneCompletedTransactionsBelowNode_(e)})},Fr.prototype.abortTransactions_=function(e){var t=this,n=this.getAncestorTransactionNode_(e).path(),r=this.transactionQueueTree_.subTree(e);return r.forEachAncestor(function(e){t.abortTransactionsOnNode_(e)}),this.abortTransactionsOnNode_(r),r.forEachDescendant(function(e){t.abortTransactionsOnNode_(e)}),n},Fr.prototype.abortTransactionsOnNode_=function(e){var t=e.getValue();if(null!==t){for(var n=[],r=[],i=-1,o=0;o<t.length;o++){t[o].status===zr.SENT_NEEDS_ABORT||(t[o].status===zr.SENT?(C.assert(i===o-1,"All SENT items should be at beginning of queue."),t[i=o].status=zr.SENT_NEEDS_ABORT,t[o].abortReason="set"):(C.assert(t[o].status===zr.RUN,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(this.serverSyncTree_.ackUserWrite(t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))))}-1===i?e.setValue(null):t.length=i+1,this.eventQueue_.raiseEventsForChangedPath(e.path(),r);for(o=0;o<n.length;o++)M(n[o])}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xr,Jr="databaseURL",Zr=(ei.getInstance=function(){return Xr=Xr||new ei},ei.prototype.interrupt=function(){var t,e,n,r;try{for(var i=_.__values(Object.keys(this.repos_)),o=i.next();!o.done;o=i.next()){var s=o.value;try{for(var a=(n=void 0,_.__values(Object.keys(this.repos_[s]))),u=a.next();!u.done;u=a.next()){var l=u.value;this.repos_[s][l].interrupt()}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},ei.prototype.resume=function(){var t,e,n,r;try{for(var i=_.__values(Object.keys(this.repos_)),o=i.next();!o.done;o=i.next()){var s=o.value;try{for(var a=(n=void 0,_.__values(Object.keys(this.repos_[s]))),u=a.next();!u.done;u=a.next()){var l=u.value;this.repos_[s][l].resume()}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},ei.prototype.databaseFromApp=function(e,t,n){var r=n||e.options[Jr];void 0===r&&d("Can't determine Firebase Database URL.  Be sure to include "+Jr+" option when calling firebase.initializeApp().");var i=$(r),o=i.repoInfo,s=void 0;return void 0!==u&&(s=u.env.FIREBASE_DATABASE_EMULATOR_HOST),s&&(r="http://"+s+"?ns="+o.namespace,o=(i=$(r)).repoInfo),ae("Invalid Firebase Database URL",1,i),i.path.isEmpty()||d("Database URL must point to the root of a Firebase Database (not including a child path)."),this.createRepo(o,e,t).database},ei.prototype.deleteRepo=function(e){var t=C.safeGet(this.repos_,e.app.name);t&&C.safeGet(t,e.repoInfo_.toURLString())===e||d("Database "+e.app.name+"("+e.repoInfo_+") has already been deleted."),e.interrupt(),delete t[e.repoInfo_.toURLString()]},ei.prototype.createRepo=function(e,t,n){var r=C.safeGet(this.repos_,t.name);r||(r={},this.repos_[t.name]=r);var i=C.safeGet(r,e.toURLString());return i&&d("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Fr(e,this.useRestClient_,t,n),r[e.toURLString()]=i},ei.prototype.forceRestClient=function(e){this.useRestClient_=e},ei);function ei(){this.repos_={},this.useRestClient_=!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ti=(Object.defineProperty(ni.prototype,"app",{get:function(){return this.repo_.app},enumerable:!1,configurable:!0}),ni.prototype.ref=function(e){return this.checkDeleted_("ref"),C.validateArgCount("database.ref",0,1,arguments.length),e instanceof Hr?this.refFromURL(e.toString()):void 0!==e?this.root_.child(e):this.root_},ni.prototype.refFromURL=function(e){var t="database.refFromURL";this.checkDeleted_(t),C.validateArgCount(t,1,1,arguments.length);var n=$(e);ae(t,1,n);var r=n.repoInfo;return r.host!==this.repo_.repoInfo_.host&&d(t+": Host name does not match the current database: (found "+r.host+" but expected "+this.repo_.repoInfo_.host+")"),this.ref(n.path.toString())},ni.prototype.checkDeleted_=function(e){null===this.repo_&&d("Cannot call "+e+" on a deleted database.")},ni.prototype.goOffline=function(){C.validateArgCount("database.goOffline",0,0,arguments.length),this.checkDeleted_("goOffline"),this.repo_.interrupt()},ni.prototype.goOnline=function(){C.validateArgCount("database.goOnline",0,0,arguments.length),this.checkDeleted_("goOnline"),this.repo_.resume()},ni.ServerValue={TIMESTAMP:{".sv":"timestamp"},increment:function(e){return{".sv":{increment:e}}}},ni);function ni(e){(this.repo_=e)instanceof Fr||d("Don't call new Database() directly - please use firebase.database()."),this.root_=new Hr(e,V.Empty),this.INTERNAL=new ri(this)}var ri=(ii.prototype.delete=function(){return _.__awaiter(this,void 0,void 0,function(){return _.__generator(this,function(e){return this.database.checkDeleted_("delete"),Zr.getInstance().deleteRepo(this.database.repo_),this.database.repo_=null,this.database.root_=null,this.database.INTERNAL=null,this.database=null,[2]})})},ii);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){this.database=e}var oi=Object.freeze({__proto__:null,forceLongPolling:function(){gr.forceDisallow(),pr.forceAllow()},forceWebSockets:function(){pr.forceDisallow()},isWebSocketsAvailable:function(){return gr.isAvailable()},setSecurityDebugCallback:function(e,t){e.repo.persistentConnection_.securityDebugCallback_=t},stats:function(e,t){e.repo.stats(t)},statsIncrementCounter:function(e,t){e.repo.statsIncrementCounter(t)},dataUpdateCount:function(e){return e.repo.dataUpdateCount},interceptServerData:function(e,t){return e.repo.interceptServerData_(t)}}),si=Or;Or.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Or.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var ai=Object.freeze({__proto__:null,DataConnection:si,RealTimeConnection:wr,hijackHash:function(i){var o=Or.prototype.put;return Or.prototype.put=function(e,t,n,r){void 0!==r&&(r=i()),o.call(this,e,t,n,r)},function(){Or.prototype.put=o}},ConnectionTarget:G,queryIdentifier:function(e){return e.queryIdentifier()},forceRestClient:function(e){Zr.getInstance().forceRestClient(e)}}),ui=ti.ServerValue;function li(e){var t;t=e.SDK_VERSION,yr=t;var n=e.INTERNAL.registerComponent(new r.Component("database",function(e,t){var n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal");return Zr.getInstance().databaseFromApp(n,r,t)},"PUBLIC").setServiceProps({Reference:Hr,Query:Rt,Database:ti,DataSnapshot:mt,enableLogging:c,INTERNAL:oi,ServerValue:ui,TEST_ACCESS:ai}).setMultipleInstances(!0));e.registerVersion("@firebase/database","0.6.7"),C.isNodeSdk()&&(hi.exports=n)}li(t),ci.DataSnapshot=mt,ci.Database=ti,ci.OnDisconnect=de,ci.Query=Rt,ci.Reference=Hr,ci.ServerValue=ui,ci.enableLogging=c,ci.registerDatabase=li}).call(this,pi("8oxB"))},"S+S0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=n("mrSG"),i=n("zVF4"),r=(o.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},o.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},o.prototype.setServiceProps=function(e){return this.serviceProps=e,this},o);function o(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}
/**
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
 */
var c="[DEFAULT]",s=(a.prototype.get=function(e){void 0===e&&(e=c);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i.Deferred;this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService(t);r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},a.prototype.getImmediate=function(e){var t=h.__assign({identifier:c,optional:!1},e),n=t.identifier,r=t.optional,i=this.normalizeInstanceIdentifier(n);try{var o=this.getOrInitializeService(i);if(o)return o;if(r)return null;throw Error("Service "+this.name+" is not available")}catch(e){if(r)return null;throw e}},a.prototype.getComponent=function(){return this.component},a.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if("EAGER"===(this.component=e).instantiationMode)try{this.getOrInitializeService(c)}catch(e){}try{for(var r=h.__values(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=h.__read(i.value,2),s=o[0],a=o[1],u=this.normalizeInstanceIdentifier(s);try{var l=this.getOrInitializeService(u);a.resolve(l)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},a.prototype.clearInstance=function(e){void 0===e&&(e=c),this.instancesDeferred.delete(e),this.instances.delete(e)},a.prototype.delete=function(){return h.__awaiter(this,void 0,void 0,function(){var t;return h.__generator(this,function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(t.filter(function(e){return"INTERNAL"in e}).map(function(e){return e.INTERNAL.delete()}))];case 1:return e.sent(),[2]}})})},a.prototype.isComponentSet=function(){return null!=this.component},a.prototype.getOrInitializeService=function(e){var t,n=this.instances.get(e);return!n&&this.component&&(n=this.component.instanceFactory(this.container,(t=e)===c?void 0:t),this.instances.set(e,n)),n||null},a.prototype.normalizeInstanceIdentifier=function(e){return!this.component||this.component.multipleInstances?e:c},a);
/**
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
 */function a(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}
/**
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
 */
var u=(l.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},l.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},l.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new s(e,this);return this.providers.set(e,t),t},l.prototype.getProviders=function(){return Array.from(this.providers.values())},l);function l(e){this.name=e,this.providers=new Map}t.Component=r,t.ComponentContainer=u,t.Provider=s},"q/0M":function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function s(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var r;n.r(t),n.d(t,"LogLevel",function(){return a}),n.d(t,"Logger",function(){return p}),n.d(t,"setLogLevel",function(){return f}),n.d(t,"setUserLogHandler",function(){return _});var a,i,o=[];(i=a=a||{})[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";function u(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=c[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,s(["["+i+"]  "+e.name+":"],n))}}var l={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},h=a.INFO,c=((r={})[a.DEBUG]="log",r[a.VERBOSE]="log",r[a.INFO]="info",r[a.WARN]="warn",r[a.ERROR]="error",r),p=(Object.defineProperty(d.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in a))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),d.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?l[e]:e},Object.defineProperty(d.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),d.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,a.DEBUG],e)),this._logHandler.apply(this,s([this,a.DEBUG],e))},d.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,a.VERBOSE],e)),this._logHandler.apply(this,s([this,a.VERBOSE],e))},d.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,a.INFO],e)),this._logHandler.apply(this,s([this,a.INFO],e))},d.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,a.WARN],e)),this._logHandler.apply(this,s([this,a.WARN],e))},d.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,a.ERROR],e)),this._logHandler.apply(this,s([this,a.ERROR],e))},d);function d(e){this.name=e,this._logLevel=h,this._logHandler=u,this._userLogHandler=null,o.push(this)}function f(t){o.forEach(function(e){e.setLogLevel(t)})}function _(s,t){for(var e=0,n=o;e<n.length;e++){!function(e){var o=null;t&&t.level&&(o=l[t.level]),e.userLogHandler=null===s?null:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n.map(function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(function(e){return e}).join(" ");t>=(null!=o?o:e.logLevel)&&s({level:a[t].toLowerCase(),message:i,args:n,type:e.name})}}(n[e])}}},wj3C:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,f=n("mrSG"),_=n("zVF4"),y=n("S+S0"),o=n("q/0M"),s=((r={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r["invalid-log-argument"]="First argument to `onLog` must be null or a function.",r),v=new _.ErrorFactory("app","Firebase",s),a="@firebase/app",g="[DEFAULT]",m=((i={})[a]="fire-core",i["@firebase/analytics"]="fire-analytics",i["@firebase/auth"]="fire-auth",i["@firebase/database"]="fire-rtdb",i["@firebase/functions"]="fire-fn",i["@firebase/installations"]="fire-iid",i["@firebase/messaging"]="fire-fcm",i["@firebase/performance"]="fire-perf",i["@firebase/remote-config"]="fire-rc",i["@firebase/storage"]="fire-gcs",i["@firebase/firestore"]="fire-fst",i["fire-js"]="fire-js",i["firebase-wrapper"]="fire-js-all",i
/**
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
 */),C=new o.Logger("@firebase/app"),u=(Object.defineProperty(l.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),l.prototype.delete=function(){var t=this;return new Promise(function(e){t.checkDestroyed_(),e()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(e){return e.delete()}))}).then(function(){t.isDeleted_=!0})},l.prototype._getService=function(e,t){return void 0===t&&(t=g),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},l.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=g),this.container.getProvider(e).clearInstance(t)},l.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(e){C.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,e)}},l.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},l.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw v.create("app-deleted",{appName:this.name_})},l);function l(e,t,n){var r,i,o=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=_.deepCopy(e),this.container=new y.ComponentContainer(t.name),this._addComponent(new y.Component("app",function(){return o},"PUBLIC"));try{for(var s=f.__values(this.firebase_.INTERNAL.components.values()),a=s.next();!a.done;a=s.next()){var u=a.value;this._addComponent(u)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}}u.prototype.name&&u.prototype.options||u.prototype.delete||console.log("dc");var E="7.16.0";
/**
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
 */function h(u){var l={},h=new Map,c={__esModule:!0,initializeApp:function(e,t){void 0===t&&(t={});{"object"==typeof t&&null!==t||(t={name:t})}var n=t;void 0===n.name&&(n.name=g);var r=n.name;if("string"!=typeof r||!r)throw v.create("bad-app-name",{appName:String(r)});if(_.contains(l,r))throw v.create("duplicate-app",{appName:r});var i=new u(e,n,c);return l[r]=i},app:p,registerVersion:function(e,t,n){var r,i=null!==(r=m[e])&&void 0!==r?r:e;n&&(i+="-"+n);var o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){var a=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&a.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&s&&a.push("and"),s&&a.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void C.warn(a.join(" "))}d(new y.Component(i+"-version",function(){return{library:i,version:t}},"VERSION"))},setLogLevel:o.setLogLevel,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw v.create("invalid-log-argument",{appName:name});o.setUserLogHandler(e,t)},apps:null,SDK_VERSION:E,INTERNAL:{registerComponent:d,removeApp:function(e){delete l[e]},components:h,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function p(e){if(e=e||g,!_.contains(l,e))throw v.create("no-app",{appName:e});return l[e]}function d(n){var t,e,r,i=n.name;if(h.has(i))return C.debug("There were multiple attempts to register component "+i+"."),"PUBLIC"===n.type?c[i]:null;h.set(i,n),"PUBLIC"===n.type&&(r=function(e){if(void 0===e&&(e=p()),"function"!=typeof e[i])throw v.create("invalid-app-argument",{appName:i});return e[i]()},void 0!==n.serviceProps&&_.deepExtend(r,n.serviceProps),c[i]=r,u.prototype[i]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,i).apply(this,n.multipleInstances?e:[])});try{for(var o=f.__values(Object.keys(l)),s=o.next();!s.done;s=o.next()){var a=s.value;l[a]._addComponent(n)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(e=o.return)&&e.call(o)}finally{if(t)throw t.error}}return"PUBLIC"===n.type?c[i]:null}return c.default=c,Object.defineProperty(c,"apps",{get:function(){return Object.keys(l).map(function(e){return l[e]})}}),p.App=u,c}
/**
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
 */var c,p=function e(){var t=h(u);return t.INTERNAL=f.__assign(f.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){_.deepExtend(t,e)},createSubscribe:_.createSubscribe,ErrorFactory:_.ErrorFactory,deepExtend:_.deepExtend}),t}(),d=(w.prototype.getPlatformInfoString=function(){return this.container.getProviders().map(function(e){if("VERSION"!==(null==(t=e.getComponent())?void 0:t.type))return null;var t,n=e.getImmediate();return n.library+"/"+n.version}).filter(function(e){return e}).join(" ")},w);
/**
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
 */function w(e){this.container=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_.isBrowser()&&void 0!==self.firebase&&(C.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "),(c=self.firebase.SDK_VERSION)&&0<=c.indexOf("LITE")&&C.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "));var b=p.initializeApp;p.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return _.isNode()&&C.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),b.apply(void 0,e)};var S,T,I=p;(S=I).INTERNAL.registerComponent(new y.Component("platform-logger",function(e){return new d(e)},"PRIVATE")),S.registerVersion(a,"0.6.8",T),S.registerVersion("fire-js",""),t.default=I,t.firebase=I},zVF4:function(e,P,O){"use strict";(function(e){Object.defineProperty(P,"__esModule",{value:!0});function s(e,t){if(!e)throw i(t)}function n(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:(55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t}function a(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}var t=O("mrSG"),r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],s=i+1<e.length,a=s?e[i+1]:0,u=i+2<e.length,l=u?e[i+2]:0,h=o>>2,c=(3&o)<<4|a>>4,p=(15&a)<<2|l>>6,d=63&l;u||(d=64,s||(p=64)),r.push(n[h],n[c],n[p],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i,o,s,a=e[n++];a<128?t[r++]=String.fromCharCode(a):191<a&&a<224?(o=e[n++],t[r++]=String.fromCharCode((31&a)<<6|63&o)):239<a&&a<365?(i=((7&a)<<18|(63&(o=e[n++]))<<12|(63&(s=e[n++]))<<6|63&e[n++])-65536,t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))):(o=e[n++],s=e[n++],t[r++]=String.fromCharCode((15&a)<<12|(63&o)<<6|63&s))}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==s||null==a||null==u)throw Error();var l,h,c=o<<2|s>>4;r.push(c),64!==a&&(l=s<<4&240|a>>2,r.push(l),64!==u&&(h=a<<6&192|u,r.push(h)))}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e)>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=u(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=(h.prototype.wrapCallback=function(n){var r=this;return function(e,t){e?r.reject(e):r.resolve(t),"function"==typeof n&&(r.promise.catch(function(){}),1===n.length?n(e):n(e,t))}},h);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){var n=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})}function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var d,f="FirebaseError",_=(d=Error,t.__extends(y,d),y);function y(e,t){var n=d.call(this,t)||this;return n.code=e,n.name=f,Object.setPrototypeOf(n,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,v.prototype.create),n}var v=(g.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r,i=t[0]||{},o=this.service+"/"+e,s=this.errors[e],a=s?(r=i,s.replace(m,function(e,t){var n=r[t];return null!=n?String(n):"<"+t+"?>"})):"Error",u=this.serviceName+": "+a+" ("+o+").",l=new _(o,u),h=0,c=Object.keys(i);h<c.length;h++){var p=c[h];"_"!==p.slice(-1)&&(p in l&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),l[p]=i[p])}return l},g);function g(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var m=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return JSON.parse(e)}function E(e){var t={},n={},r={},i="";try{var o=e.split("."),t=C(a(o[0])||""),n=C(a(o[1])||""),i=o[2],r=n.d||{};delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w=(b.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},b.prototype.compress_=function(e,t){t=t||0;var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}for(var o,s,a=this.chain_[0],u=this.chain_[1],l=this.chain_[2],h=this.chain_[3],c=this.chain_[4],r=0;r<80;r++)s=r<40?r<20?(o=h^u&(l^h),1518500249):(o=u^l^h,1859775393):r<60?(o=u&l|h&(u|l),2400959708):(o=u^l^h,3395469782),i=(a<<5|a>>>27)+o+c+s+n[r]&4294967295,c=h,h=l,l=4294967295&(u<<30|u>>>2),u=a,a=i;this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295},b.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},b.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;56<=n;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,n=0;n<5;n++)for(var i=24;0<=i;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},b);function b(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}var S=(T.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},T.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},T.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},T.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"==typeof e&&null!==e)for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return 1}}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=I),void 0===r.error&&(r.error=I),void 0===r.complete&&(r.complete=I);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}}),this.observers.push(r),o},T.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},T.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},T.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},T.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},T);function T(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(e){n.error(e)})}function I(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t,n){var r="";switch(t){case 1:r=n?"first":"First";break;case 2:r=n?"second":"Second";break;case 3:r=n?"third":"Third";break;case 4:r=n?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var i=e+" failed: ";return i+=r+" argument "}P.CONSTANTS=r,P.Deferred=l,P.ErrorFactory=v,P.FirebaseError=_,P.Sha1=w,P.assert=s,P.assertionError=i,P.async=function(n,r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Promise.resolve(!0).then(function(){n.apply(void 0,e)}).catch(function(e){r&&r(e)})}},P.base64=o,P.base64Decode=a,P.base64Encode=function(e){var t=n(e);return o.encodeByteArray(t,!0)},P.contains=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.createSubscribe=function(e,t){var n=new S(e,t);return n.subscribe.bind(n)},P.decode=E,P.deepCopy=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return u(void 0,e)},P.deepExtend=u,P.errorPrefix=N,P.getUA=c,P.isAdmin=function(e){var t=E(e).claims;return"object"==typeof t&&!0===t.admin},P.isBrowser=function(){return"object"==typeof self&&self.self===self},P.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},P.isElectron=function(){return 0<=c().indexOf("Electron/")},P.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},P.isIE=function(){var e=c();return 0<=e.indexOf("MSIE ")||0<=e.indexOf("Trident/")},P.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())},P.isNode=p,P.isNodeSdk=function(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN},P.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},P.isSafari=function(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},P.isUWP=function(){return 0<=c().indexOf("MSAppHost/")},P.isValidFormat=function(e){var t=E(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},P.isValidTimestamp=function(e){var t=E(e).claims,n=Math.floor((new Date).getTime()/1e3),r=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),i=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!i&&r<=n&&n<=i},P.issuedAtTime=function(e){var t=E(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},P.jsonEval=C,P.map=function(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,P.querystring=function(e){for(var n=[],t=0,r=Object.entries(e);t<r.length;t++){var i=r[t];!function(t,e){Array.isArray(e)?e.forEach(function(e){n.push(encodeURIComponent(t)+"="+encodeURIComponent(e))}):n.push(encodeURIComponent(t)+"="+encodeURIComponent(e))}(i[0],i[1])}return n.length?"&"+n.join("&"):""},P.querystringDecode=function(e){var n={};return e.replace(/^\?/,"").split("&").forEach(function(e){var t;e&&(t=e.split("="),n[t[0]]=t[1])}),n},P.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},P.stringLength=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:55296<=r&&r<=56319?(t+=4,n++):t+=3}return t},P.stringToByteArray=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i,o=e.charCodeAt(r);55296<=o&&o<=56319&&(i=o-55296,s(++r<e.length,"Surrogate pair missing trail surrogate."),o=65536+(i<<10)+(e.charCodeAt(r)-56320)),o<128?t[n++]=o:(o<2048?t[n++]=o>>6|192:(o<65536?t[n++]=o>>12|224:(t[n++]=o>>18|240,t[n++]=o>>12&63|128),t[n++]=o>>6&63|128),t[n++]=63&o|128)}return t},P.stringify=function(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,P.validateArgCount=function(e,t,n,r){var i;if(r<t?i="at least "+t:n<r&&(i=0===n?"none":"no more than "+n),i)throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")},P.validateCallback=function(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw new Error(N(e,t,r)+"must be a valid function.")},P.validateContextObject=function(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw new Error(N(e,t,r)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,P.validateNamespace=function(e,t,n,r){if((!r||n)&&"string"!=typeof n)throw new Error(N(e,t,r)+"must be a valid firebase namespace.")}}).call(this,O("yLpj"))}}]);