!function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var a;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var y;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(a=h.reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.4.0");const $=window,f=$.trustedTypes,b=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,A="?"+_,w=`<${A}>`,E=document,S=(t="")=>E.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),H=/'/g,R=/"/g,T=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),B=new WeakMap,I=E.createTreeWalker(E,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=C;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===C?"!--"===a[1]?r=O:void 0!==a[1]?r=P:void 0!==a[2]?(T.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=U):void 0!==a[3]&&(r=U):r===U?">"===a[0]?(r=null!=o?o:C,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?U:'"'===a[3]?R:H):r===R||r===H?r=U:r===O||r===P?r=C:(r=U,o=void 0);const d=r===U&&t[e+1].startsWith("/>")?" ":"";n+=r===C?i+w:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+_+d):i+_+(-2===h?(s.push(void 0),e):d)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(l):l,s]};class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=L(t,e);if(this.el=D.createElement(a,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?Z:V})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(_),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),I.nextNode(),l.push({type:2,index:++o});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===A)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(_,t+1));)l.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var o,n,r,l;if(e===q)return e;let a=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=k(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=z(t,a._$AS(t,e.values),a,s)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);I.currentNode=o;let n=I.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new W(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new G(n,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=I.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,s){var o;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),k(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==q&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==M&&k(this._$AH)?this._$AA.nextSibling.data=t:this.k(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new j(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new D(t)),e}O(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new W(this.S(S()),this.S(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,s,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=z(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=z(this,s[i+r],e,r),l===q&&(l=this._$AH[r]),n||(n=!k(l)||l!==this._$AH[r]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.P(t)}P(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends V{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===M?void 0:t}}const F=f?f.emptyScript:"";class J extends V{constructor(){super(...arguments),this.type=4}P(t){t&&t!==M?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class Z extends V{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:M)===q)return;const s=this._$AH,o=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==M&&(s===M||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Q=$.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var X,Y;null==Q||Q(D,W),(null!==(y=$.litHtmlVersions)&&void 0!==y?y:$.litHtmlVersions=[]).push("2.3.0");class tt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new W(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return q}}tt.finalized=!0,tt._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const it=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;var rt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let lt=class extends tt{constructor(){super(...arguments),this.disabled=!1,this.canSelect=!1,this.disableSelectedStyle=!1,this.href="",this.btnStyle="",this.selected=!1,this.buttonElement=null}static get styles(){return[r`
        :host {
          box-sizing: border-box;
          display: inline-block;
          user-select: none;
        }
        button {
          width: 100%;
          height: 100%;
          background-color: #e7e7e7;
          color: black;
          border: 0;
          border-radius: 0;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.6rem 0.9rem;
          transition: all 0.3s ease 0s;
        }
        button:hover {
          opacity: 0.8;
        }
        button:active,
        button.selected {
          filter: brightness(80%);
        }
        button:disabled {
          pointer-events: none;
          opacity: 0.6;
        }
        button:focus {
          box-shadow: inset 0 0 0 0.2rem var(--button-outline-color, #8dc3eb);
          outline: none;
        }
      `]}firstUpdated(){if(!this.shadowRoot)throw new Error("Unexpected undefined shadowRoot");this.buttonElement=this.shadowRoot.querySelector("button")}render(){return N`
      <button
        class=${this.selected&&!this.disableSelectedStyle?"selected":""}
        part="button"
        ?disabled=${this.disabled}
        ?autofocus=${this.autofocus}
        @click=${this.handleClick}>
        <slot></slot>
      </button>
    `}focus(){this.buttonElement&&this.buttonElement.focus()}handleClick(t){t.preventDefault(),t.stopImmediatePropagation(),this.href?window.location.href=this.href:(this.canSelect&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent("check"))),this.dispatchEvent(new CustomEvent("click")))}};rt([ot({type:Boolean})],lt.prototype,"disabled",void 0),rt([ot({type:Boolean})],lt.prototype,"canSelect",void 0),rt([ot({type:Boolean})],lt.prototype,"disableSelectedStyle",void 0),rt([ot({type:String})],lt.prototype,"href",void 0),rt([ot({type:String})],lt.prototype,"btnStyle",void 0),rt([ot({type:Boolean,reflect:!0})],lt.prototype,"selected",void 0),lt=rt([it("qing-button")],lt);var at=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const ht="open";let ct=class extends tt{constructor(){super(...arguments),this.open=!1,this.closeOnEsc=!1,this.qingMode=0}static get styles(){return r`
      :host {
        display: block;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      dialog {
        max-height: 100vh;
        max-width: 100vw;
        border: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
      }

      dialog:not([open]) {
        display: none;
      }

      dialog::backdrop {
        background: var(--overlay-backdrop-background, rgba(0, 0, 0, 0.3));
        animation: fade-in var(--overlay-animation-duration, 0.5s);
      }

      dialog.qing-spinner::backdrop {
        background: var(--overlay-backdrop-background, rgba(0, 0, 0, 0.9));
        animation: fade-in var(--overlay-animation-duration, 0.1s);
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}render(){return N`
      <dialog
        part="dialog"
        class=${this.qingMode?"qing-spinner":""}
        @cancel=${this.handleCancel}>
        <slot></slot>
      </dialog>
    `}updated(t){if(t.has(ht)&&!!t.get(ht)!==this.open){const t=this.shadowRoot?.querySelector("dialog");this.open?t?.showModal():t?.close();const e=this.open?"overlay-open":"overlay-close";setTimeout((()=>this.dispatchEvent(new CustomEvent(e))),0)}}handleCancel(t){t.preventDefault(),this.closeOnEsc?this.open=!1:this.dispatchEvent(new CustomEvent("overlay-esc-down"))}};at([ot({type:Boolean,reflect:!0})],ct.prototype,"open",void 0),at([ot({type:Boolean,reflect:!0})],ct.prototype,"closeOnEsc",void 0),at([ot({type:Number})],ct.prototype,"qingMode",void 0),ct=at([it("qing-overlay")],ct);const dt=r`
  button {
    background-color: #e7e7e7;
    color: black;
    border: 0;
    border-radius: 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.6rem 0.9rem;
    transition: all 0.3s ease 0s;
  }
  button:hover {
    opacity: 0.8;
  }
  button:active,
  button.selected {
    filter: brightness(80%);
  }
  button:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  button:focus {
    box-shadow: inset 0 0 0 0.2rem var(--button-outline-color, #8dc3eb);
    outline: none;
  }
`;class ut extends tt{render(){return N` <h2>Title</h2>
      <div>
        <span id="span">Hello world <button @click=${this.handleClick}>Expand</button></span>
      </div>`}handleClick(){this.shadowRoot.getElementById("span").textContent="The div element has no special meaning at all. It represents its children. It can be\n    used with the class, lang, and title attributes to mark up semantics common to a group\n    of consecutive elements. The div element has no special meaning at all. It represents\n    its children. It can be used with the class, lang, and title attributes to mark up\n    semantics common to a group of consecutive elements. The div element has no special\n    meaning at all. It represents its children. It can be used with the class, lang, and\n    title attributes to mark up semantics common to a group of consecutive elements."}}ut.styles=[dt,r`
    :host {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
    }
  `],customElements.define("dynamic-content",ut);class pt extends tt{render(){return N`
      <div id="main">
        <h2>Layouts</h2>
        ${this.r("Width: 80%, Height: auto","layout-w-80")}
        ${this.r("Width: auto + min value, Height: auto","layout-auto-min-width")}
        ${this.r("Fullscreen with margins","layout-full-margins")}
        <h2>Events</h2>
        ${this.r("Handle events","handle-events",void 0,{open:()=>alert("Opening"),close:()=>alert("Closing"),escDown:()=>{alert("Esc down"),this.closeOverlay("handle-events")}})}
        <h2>Focus</h2>
        ${this.r("Focus","focus",N` <h2>Title</h2>
            <p>Hello world</p>
            <p>
              <input autofocus type="text" value="name" id="textInput" />
            </p>`)}
        <h2>Styles</h2>
        ${this.r("Long text","long-text",N`<h2>Long text</h2>
            <pre style="overflow-y: auto; margin: 0">
${`${"2020 is coming. ".repeat(20)}\n`.repeat(500)}</pre
            >`)}
        ${this.r("Border styles","border-styles")}
        ${this.rElement("Themes","themes",N` <qing-overlay closeOnEsc id="themes">
            <h2>Title</h2>
            <p>
              <button @click=${this.handleLightBtnClick}>Light</button>
              <button @click=${this.handleDarkBtnClick}>Dark</button>
              <button @click=${()=>this.closeOverlay("themes")}>Close</button>
            </p>
          </qing-overlay>`)}
        <h2>Nesting</h2>
        ${this.rElement("Nesting","nesting",N` <qing-overlay id="nesting" closeOnEsc>
            <h2>Title</h2>
            <p>
              <button @click=${()=>this.openOverlay("child1")}>Open</button>
              <button @click=${()=>this.closeOverlay("nesting")}>Close</button>
            </p>
          </qing-overlay>`)}
        <div class="nested-overlays">
          <qing-overlay id="child1" closeOnEsc>
            <h2>Title</h2>
            <p>
              <button @click=${()=>this.openOverlay("child2")}>Open</button>
              <button @click=${()=>this.closeOverlay("child1")}>Close</button>
            </p>
          </qing-overlay>
          <qing-overlay id="child2" closeOnEsc>
            <h2>Title</h2>
            <p>
              <button @click=${()=>this.closeOverlay("child2")}>Close</button>
            </p>
          </qing-overlay>
        </div>
      </div>
    `}r(t,e,i,s){const o=`${e}-btn`;return N`
      <p>
        <button @click=${()=>this.openOverlay(e)}>${t}</button>
      </p>
      <qing-overlay
        id=${e}
        ?closeOnEsc=${!s?.escDown}
        @overlay-open=${()=>s?.open()}
        @overlay-close=${()=>s?.close()}
        @overlay-esc-down=${()=>s?.escDown()}>
        ${i??N`<dynamic-content></dynamic-content>`}
        <p style="text-align:center">
          <button id=${o} @click=${()=>this.closeOverlay(e)}>OK</button>
        </p>
      </qing-overlay>
    `}rElement(t,e,i){return N`
      <p>
        <button @click=${()=>this.openOverlay(e)}>${t}</button>
      </p>
      ${i}
    `}get mainElement(){return this.shadowRoot.getElementById("main")}handleLightBtnClick(){this.mainElement.classList.remove("theme-dark")}handleDarkBtnClick(){this.mainElement.classList.add("theme-dark")}openOverlay(t){this.shadowRoot.getElementById(t).setAttribute("open","")}closeOverlay(t){this.shadowRoot.getElementById(t).removeAttribute("open")}}pt.styles=[dt,r`
    :host {
      --default-back-color: white;
      --default-fore-color: black;
      --default-btn-back-color: lightgray;
      --default-success-color: #89ec7c;
    }

    qing-overlay::part(dialog) {
      padding: 0 1.25rem;
    }

    @media (min-width: 768px) {
      qing-overlay::part(dialog) {
        width: 80%;
      }

      qing-overlay#layout-auto-min-width::part(dialog) {
        width: auto;
        min-width: 400px;
        max-width: min(100vw, 1000px);
      }
    }

    qing-overlay#layout-full-margins::part(dialog) {
      width: calc(100vw - 1rem);
      height: calc(100vh - 1rem);
    }
    @media (min-width: 768px) {
      qing-overlay#layout-full-margins::part(dialog) {
        width: calc(100vw - 4rem);
        height: calc(100vh - 4rem);
      }
    }

    h2 {
      margin-bottom: 0;
    }
    #border-styles::part(dialog) {
      border: 4px dashed green;
      border-radius: 10px;
    }
    .theme-dark {
      --default-back-color: black;
      --default-fore-color: #777777;
      --default-btn-back-color: #1a1a1a;
      --default-success-color: #073f00;
    }
    #themes::part(dialog) {
      color: var(--default-fore-color);
      background-color: var(--default-back-color);
    }
    #themes button {
      border: 1px solid #818181;
      color: var(--default-fore-color);
      background-color: var(--default-btn-back-color);
    }

    qing-overlay#nesting::part(dialog) {
      width: calc(100vw - 1rem);
      height: calc(100vh - 1rem);
    }
    @media (min-width: 768px) {
      qing-overlay#nesting::part(dialog) {
        width: calc(100vw - 4rem);
        height: calc(100vh - 4rem);
      }
    }

    qing-overlay#child1::part(dialog) {
      width: calc(100vw - 2rem);
      height: calc(100vh - 2rem);
    }
    @media (min-width: 768px) {
      qing-overlay#child1::part(dialog) {
        width: calc(100vw - 8rem);
        height: calc(100vh - 8rem);
      }
    }

    qing-overlay#child2::part(dialog) {
      width: calc(100vw - 4rem);
      height: calc(100vh - 4rem);
    }
    @media (min-width: 768px) {
      qing-overlay#child2::part(dialog) {
        width: calc(100vw - 16rem);
        height: calc(100vh - 16rem);
      }
    }
  `],customElements.define("example-app",pt),t.ExampleApp=pt,Object.defineProperty(t,"__esModule",{value:!0})}({});
