(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var q;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(q||(q={}));/**
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
 */var F;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(F||(F={}));var Y;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Y||(Y={}));/**
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
 */const P=["user","model","function","system"];var _;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(_||(_={}));var I;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(I||(I={}));var $;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})($||($={}));var K;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(K||(K={}));var O;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(O||(O={}));var j;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(j||(j={}));var V;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(V||(V={}));var J;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(J||(J={}));/**
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
 */class u extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class C extends u{constructor(t,n){super(t),this.response=n}}class ue extends u{constructor(t,n,o,s){super(t),this.status=n,this.statusText=o,this.errorDetails=s}}class E extends u{}/**
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
 */const be="https://generativelanguage.googleapis.com",Oe="v1beta",we="0.22.0",Se="genai-js";var p;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(p||(p={}));class Ae{constructor(t,n,o,s,i){this.model=t,this.task=n,this.apiKey=o,this.stream=s,this.requestOptions=i}toString(){var t,n;const o=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||Oe;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||be}/${o}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Re(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${Se}/${we}`),t.join(" ")}async function Le(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",Re(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new E(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,i]of o.entries()){if(s==="x-goog-api-key")throw new E(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new E(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function Te(e,t,n,o,s,i){const a=new Ae(e,t,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},xe(i)),{method:"POST",headers:await Le(a),body:s})}}async function A(e,t,n,o,s,i={},a=fetch){const{url:r,fetchOptions:l}=await Te(e,t,n,o,s,i);return Ne(r,l,a)}async function Ne(e,t,n=fetch){let o;try{o=await n(e,t)}catch(s){Me(s,e)}return o.ok||await Be(o,e),o}function Me(e,t){let n=e;throw e instanceof ue||e instanceof E||(n=new u(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Be(e,t){let n="",o;try{const s=await e.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new ue(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,o)}function xe(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function H(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),L(e.candidates[0]))throw new C(`${m(e)}`,e);return De(e)}else if(e.promptFeedback)throw new C(`Text not available. ${m(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),L(e.candidates[0]))throw new C(`${m(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),W(e)[0]}else if(e.promptFeedback)throw new C(`Function call not available. ${m(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),L(e.candidates[0]))throw new C(`${m(e)}`,e);return W(e)}else if(e.promptFeedback)throw new C(`Function call not available. ${m(e)}`,e)},e}function De(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function W(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const ke=[O.RECITATION,O.SAFETY,O.LANGUAGE];function L(e){return!!e.finishReason&&ke.includes(e.finishReason)}function m(e){var t,n,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];L(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function He(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),s,i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(d){o[d]&&(s[d]=function(c){return new Promise(function(h,f){i.push([d,c,h,f])>1||r(d,c)})})}function r(d,c){try{l(o[d](c))}catch(h){v(i[0][3],h)}}function l(d){d.value instanceof w?Promise.resolve(d.value.v).then(g,y):v(i[0][2],d)}function g(d){r("next",d)}function y(d){r("throw",d)}function v(d,c){d(c),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const z=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ge(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Fe(t),[o,s]=n.tee();return{stream:qe(o),response:Ue(s)}}async function Ue(e){const t=[],n=e.getReader();for(;;){const{done:o,value:s}=await n.read();if(o)return H(Ye(t));t.push(s)}}function qe(e){return He(this,arguments,function*(){const n=e.getReader();for(;;){const{value:o,done:s}=yield w(n.read());if(s)break;yield yield w(H(o))}})}function Fe(e){const t=e.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return t.read().then(({value:a,done:r})=>{if(r){if(s.trim()){o.error(new u("Failed to parse stream"));return}o.close();return}s+=a;let l=s.match(z),g;for(;l;){try{g=JSON.parse(l[1])}catch{o.error(new u(`Error parsing JSON response: "${l[1]}"`));return}o.enqueue(g),s=s.substring(l[0].length),l=s.match(z)}return i()})}}})}function Ye(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const o of e){if(o.candidates){let s=0;for(const i of o.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const a={};for(const r of i.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[s].content.parts.push(a)}s++}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}/**
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
 */async function fe(e,t,n,o){const s=await A(t,p.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o);return Ge(s)}async function he(e,t,n,o){const i=await(await A(t,p.GENERATE_CONTENT,e,!1,JSON.stringify(n),o)).json();return{response:H(i)}}/**
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
 */function ge(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function S(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Pe(t)}function Pe(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new u("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new u("No content is provided for sending chat message.");return o?t:n}function $e(e,t){var n;let o={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=e.generateContentRequest!=null;if(e.contents){if(s)throw new E("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{const i=S(e);o.contents=[i]}return{generateContentRequest:o}}function X(e){let t;return e.contents?t=e:t={contents:[S(e)]},e.systemInstruction&&(t.systemInstruction=ge(e.systemInstruction)),t}function Ke(e){return typeof e=="string"||Array.isArray(e)?{content:S(e)}:e}/**
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
 */const Q=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],je={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ve(e){let t=!1;for(const n of e){const{role:o,parts:s}=n;if(!t&&o!=="user")throw new u(`First content should be with role 'user', got ${o}`);if(!P.includes(o))throw new u(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(P)}`);if(!Array.isArray(s))throw new u("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new u("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of s)for(const l of Q)l in r&&(i[l]+=1);const a=je[o];for(const r of Q)if(!a.includes(r)&&i[r]>0)throw new u(`Content with role '${o}' can't contain '${r}' part`);t=!0}}/**
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
 */const Z="SILENT_ERROR";class Je{constructor(t,n,o,s={}){this.model=n,this.params=o,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,o!=null&&o.history&&(Ve(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var o,s,i,a,r,l;await this._sendPromise;const g=S(t),y={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,g]},v=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>he(this._apiKey,this.model,y,v)).then(c=>{var h,f;if(c.response.candidates&&c.response.candidates.length>0&&((h=c.response.candidates[0])===null||h===void 0?void 0:h.content)!==void 0){this._history.push(g);const R=Object.assign({parts:[],role:"model"},(f=c.response.candidates)===null||f===void 0?void 0:f[0].content);this._history.push(R)}else{const R=m(c.response);R&&console.warn(`sendMessage() was unsuccessful. ${R}. Inspect response object for details.`)}d=c}),await this._sendPromise,d}async sendMessageStream(t,n={}){var o,s,i,a,r,l;await this._sendPromise;const g=S(t),y={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,g]},v=Object.assign(Object.assign({},this._requestOptions),n),d=fe(this._apiKey,this.model,y,v);return this._sendPromise=this._sendPromise.then(()=>d).catch(c=>{throw new Error(Z)}).then(c=>c.response).then(c=>{var h;if(c.candidates&&c.candidates.length>0&&((h=c.candidates[0])===null||h===void 0?void 0:h.content)!==void 0){this._history.push(g);const f=Object.assign({},c.candidates[0].content);f.role||(f.role="model"),this._history.push(f)}else{const f=m(c);f&&console.warn(`sendMessageStream() was unsuccessful. ${f}. Inspect response object for details.`)}}).catch(c=>{c.message!==Z&&console.error(c)}),d}}/**
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
 */async function We(e,t,n,o){return(await A(t,p.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
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
 */async function ze(e,t,n,o){return(await A(t,p.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function Xe(e,t,n,o){const s=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await A(t,p.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
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
 */class ee{constructor(t,n,o={}){this.apiKey=t,this._requestOptions=o,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=ge(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var o;const s=X(t),i=Object.assign(Object.assign({},this._requestOptions),n);return he(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}async generateContentStream(t,n={}){var o;const s=X(t),i=Object.assign(Object.assign({},this._requestOptions),n);return fe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}startChat(t){var n;return new Je(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const o=$e(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return We(this.apiKey,this.model,o,s)}async embedContent(t,n={}){const o=Ke(t),s=Object.assign(Object.assign({},this._requestOptions),n);return ze(this.apiKey,this.model,o,s)}async batchEmbedContents(t,n={}){const o=Object.assign(Object.assign({},this._requestOptions),n);return Xe(this.apiKey,this.model,t,o)}}/**
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
 */class Qe{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new u("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ee(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,o){if(!t.name)throw new E("Cached content must contain a `name` field.");if(!t.model)throw new E("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const a of s)if(n!=null&&n[a]&&t[a]&&(n==null?void 0:n[a])!==t[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(r===l)continue}throw new E(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${t[a]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new ee(this.apiKey,i,o)}}const me=document.getElementById("nav-menu"),te=document.getElementById("nav-toggle"),ne=document.getElementById("nav-close");te&&te.addEventListener("click",()=>{me.classList.add("show-menu")});ne&&ne.addEventListener("click",()=>{me.classList.remove("show-menu")});const Ze=document.getElementById("skillsChart").getContext("2d");new Chart(Ze,{type:"radar",data:{labels:["Languages","Front-End Development","Back-End Development","Databases","Data Analytics","AI & ML","Mobile Development","Development Tools","Design Tools"],datasets:[{label:"Skill Level (%) - Experience and Proficiency",data:[83,92,96,85,80,90,82,85,80],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:2,pointBackgroundColor:"rgba(75, 192, 192, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(75, 192, 192, 1)"}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{r:{angleLines:{display:!0,color:"rgba(128, 128, 128, 0.3)"},suggestedMin:0,suggestedMax:100,ticks:{display:!1,font:{family:"Poppins"}},grid:{color:"rgba(128, 128, 128, 0.2)"}}},font:{family:"Poppins"},plugins:{legend:{position:"top",labels:{color:"rgba(75, 192, 192, 1)",font:{family:"Poppins"}},title:{display:!0,font:{family:"Poppins",weight:"bold"}}},tooltip:{bodyFont:{family:"Poppins"},titleFont:{family:"Poppins"},enabled:!0,callbacks:{label:function(e){return e.dataset.label+": "+e.formattedValue+"%"}}}}}});const et=document.querySelectorAll(".nav__link");function tt(){document.getElementById("nav-menu").classList.remove("show-menu")}et.forEach(e=>e.addEventListener("click",tt));const oe=document.getElementsByClassName("skills__content"),nt=document.querySelectorAll(".skills__header");function ot(){let e=this.parentNode.className;const t=100;for(let n=0;n<oe.length;n++)oe[n].className="skills__content skills__close";if(e==="skills__content skills__close"){this.parentNode.className="skills__content skills__open";const n=this.parentNode.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:n-t,behavior:"smooth"})}}nt.forEach(e=>{e.addEventListener("click",ot)});const se=document.querySelectorAll("[data-target]"),st=document.querySelectorAll("[data-content]");se.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(e.dataset.target);st.forEach(n=>{n.classList.remove("qualification__active")}),t.classList.add("qualification__active"),se.forEach(n=>{n.classList.remove("qualification__active")}),e.classList.add("qualification__active")})});const Ee=document.querySelectorAll(".services__modal"),it=document.querySelectorAll(".services__button"),at=document.querySelectorAll(".services__modal-close");let rt=function(e){Ee[e].classList.add("active-modal")};it.forEach((e,t)=>{e.addEventListener("click",()=>{rt(t)})});at.forEach(e=>{e.addEventListener("click",()=>{Ee.forEach(t=>{t.classList.remove("active-modal")})})});new Swiper(".portfolio__container",{loop:!0,loopAdditionalSlides:3,slidesPerView:1,spaceBetween:3500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:!0,threshold:20,on:{reachBeginning:function(){this.loopDestroy(),this.loopCreate()},reachEnd:function(){this.loopDestroy(),this.loopCreate()}}});const ct=document.querySelectorAll("section[id]");function lt(){const e=window.pageYOffset;ct.forEach(t=>{const n=t.offsetHeight,o=t.offsetTop-50;let s=t.getAttribute("id");e>o&&e<=o+n?document.querySelector(".nav__menu a[href*="+s+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+s+"]").classList.remove("active-link")})}const ie=["Welcome!"],ae=["Explore my portfolio and see my journey as a software engineer!"];let M=0,B=0,dt=150,ut=100,pe=1e3,ft=document.getElementById("typed-text"),ht=document.getElementById("typed-subtitle"),gt=document.getElementById("cursor"),re=document.getElementById("cursor-subtitle"),ce=document.getElementById("scroll-button");function ye(){M<ie[0].length?(ft.textContent+=ie[0].charAt(M),M++,setTimeout(ye,dt)):(gt.style.display="none",setTimeout(ve,pe))}function ve(){re.style.display="inline-block",B<ae[0].length?(ht.textContent+=ae[0].charAt(B),B++,setTimeout(ve,ut)):(re.style.display="none",setTimeout(()=>{ce.style.display="inline-block",ce.classList.add("drop-down"),setTimeout(()=>{const e=document.querySelector(".graphics");e&&e.classList.add("show-graphics")},500)},600))}document.addEventListener("DOMContentLoaded",function(){setTimeout(ye,pe)});document.getElementById("scroll-button").addEventListener("click",function(e){e.preventDefault(),document.getElementById("home").scrollIntoView({behavior:"smooth"})});window.addEventListener("scroll",lt);function mt(){const e=document.getElementById("header");this.scrollY>=80?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}window.addEventListener("scroll",mt);function Et(){const e=document.getElementById("scroll-up");this.scrollY>=80?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",Et);function pt(){const e=document.getElementById("scroll-up1");this.scrollY>=80?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",pt);const N=document.getElementById("theme-button"),G="dark-theme",U="uil-sun",le=localStorage.getItem("selected-theme"),yt=localStorage.getItem("selected-icon"),vt=()=>document.body.classList.contains(G)?"dark":"light",Ct=()=>N.classList.contains(U)?"uil-moon":"uil-sun";le&&(document.body.classList[le==="dark"?"add":"remove"](G),N.classList[yt==="uil-moon"?"add":"remove"](U));N.addEventListener("click",()=>{document.body.classList.toggle(G),N.classList.toggle(U),localStorage.setItem("selected-theme",vt()),localStorage.setItem("selected-icon",Ct())});async function Ce(e){let t=JSON.parse(sessionStorage.getItem("conversationHistory"))||[],n="Generating response...";try{const s=new Qe(_t()).getGenerativeModel({model:"gemini-1.5-flash",systemInstruction:void 0});t.push({role:"user",parts:[{text:e}]}),n=(await s.startChat({generationConfig:{temperature:1,topP:.95,topK:64,maxOutputTokens:8192,responseMimeType:"text/plain"},safetySettings:[{category:_.HARM_CATEGORY_HARASSMENT,threshold:I.BLOCK_NONE},{category:_.HARM_CATEGORY_HATE_SPEECH,threshold:I.BLOCK_NONE},{category:_.HARM_CATEGORY_SEXUALLY_EXPLICIT,threshold:I.BLOCK_NONE},{category:_.HARM_CATEGORY_DANGEROUS_CONTENT,threshold:I.BLOCK_NONE}],history:t}).sendMessage(e)).response.text(),t.push({role:"model",parts:[{text:n}]}),sessionStorage.setItem("conversationHistory",JSON.stringify(t)),console.log(t)}catch(o){console.error("Error fetching response:",o.message),n="An error occurred while generating the response, possibly due to high traffic or safety concerns. I apologize for any inconvenience caused. Please try again later with a different query or contact me for further assistance."}return It(n)}console.log(void 0);function _t(){return atob(void 0)}function It(e){const n=new showdown.Converter().makeHtml(e),o=document.createElement("div");return o.innerHTML=n,o.textContent||o.innerText||""}const T=document.getElementById("chatbotInput"),b=document.getElementById("chatbotBody"),x=document.querySelector("#chatbotModal #chatbotBody");T.addEventListener("keydown",function(e){e.key==="Enter"&&(_e(T.value),T.value="")});async function _e(e){b.innerHTML+=`
    <div style="text-align: right; margin-bottom: 10px; color: white;">${e}</div>
  `;const t=document.createElement("div");t.style.textAlign="left",t.style.marginTop="20px",t.style.marginBottom="10px",t.style.color="white",b.appendChild(t);let n=0,o=setInterval(()=>{t.textContent="Generating response"+".".repeat(n),n=(n+1)%4},500),s=await Ce(e);clearInterval(o),t.textContent=s,b.scrollTop=b.scrollHeight}async function de(e){x.innerHTML+=`
    <div style="text-align: right; margin-bottom: 10px; color: white;">${e}</div>
  `;const t=document.createElement("div");t.style.textAlign="left",t.style.marginTop="20px",t.style.marginBottom="10px",t.style.color="white",x.appendChild(t);let n=0,o=setInterval(()=>{t.textContent="Generating response"+".".repeat(n),n=(n+1)%4},500),s=await Ce(e);clearInterval(o),t.textContent=s,x.scrollTop=b.scrollHeight}document.getElementById("minimizeButton").addEventListener("click",function(){const e=document.getElementById("chatbotBody"),t=document.getElementById("chatbotInput"),n=document.getElementById("chatbotButton");e.style.display!=="none"?(e.style.display="none",t.style.display="none",n.style.display="none"):(e.style.display="",t.style.display="",n.style.display="")});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("chatbotButton");e.style.display="none",e.addEventListener("click",function(){const t=document.getElementById("chatbotInput");t?(console.log(t.value),t.value.trim()!==""&&(_e(t.value),t.value="")):console.error("Chatbot input element not found")})});const D=document.getElementById("chatbotContainer");window.onload=function(){D.style.display="none",b.style.display="none",T.style.display="none"};const k=document.getElementById("back-to-top");k.addEventListener("click",function(){document.getElementById("home").scrollIntoView({behavior:"smooth"})});window.addEventListener("scroll",function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?(D.style.display="block",k.style.bottom="10px"):(D.style.display="none",k.style.bottom="-20%")});window.addEventListener("resize",Ie);document.addEventListener("DOMContentLoaded",Ie);function Ie(){let e=document.querySelector(".services__modal-content");if(!e)return;let t=window.innerHeight;e.scrollHeight>t?e.style.overflowY="scroll":e.style.overflowY="hidden"}document.addEventListener("scroll",function(){let e=document.getElementById("back-to-top"),n=document.querySelector("footer").getBoundingClientRect().top+window.scrollY;window.scrollY+window.innerHeight>=n?e.style.color="white":e.style.color=""});document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("chatbotContainer"),t=document.getElementById("minimizeButton");t.addEventListener("click",function(){e.classList.contains("minimized")?(e.classList.remove("minimized"),t.innerHTML="+"):(e.classList.add("minimized"),t.innerHTML="-")})});document.addEventListener("DOMContentLoaded",function(){const e={root:null,rootMargin:"0px",threshold:.1},t=document.querySelectorAll(".scroll-animation"),n=new IntersectionObserver(function(o,s){o.forEach(i=>{i.isIntersecting&&(i.target.classList.add("scroll-in-view"),s.unobserve(i.target))})},e);t.forEach(o=>{n.observe(o)})});document.addEventListener("DOMContentLoaded",function(){document.getElementById("chatbot-toggle").addEventListener("click",function(){if(window.matchMedia("(max-width: 767px)").matches){const t=document.getElementById("chatbotModal");t.classList.contains("show")?(t.classList.remove("show"),setTimeout(()=>{t.style.display="none"},300)):(t.style.display="block",setTimeout(()=>{t.classList.add("show")},10))}}),document.getElementById("closeButton").addEventListener("click",function(){const t=document.getElementById("chatbotModal");t.classList.remove("show"),setTimeout(()=>{t.style.display="none"},300)}),document.getElementById("chatbotButton").addEventListener("click",function(){const t=document.querySelector("#chatbotModal #chatbotInput");t?(console.log(t.value),t.value.trim()!==""&&(de(t.value),t.value="")):console.error("Chatbot input element not found")});const e=document.querySelector("#chatbotModal #chatbotInput");e&&e.addEventListener("keydown",function(t){t.key==="Enter"&&e.value.trim()!==""&&(de(e.value),e.value="")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".scroll-animation"),t=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("active")})},{threshold:.3});e.forEach(n=>t.observe(n))});
