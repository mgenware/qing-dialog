!function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return e&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",i))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var l;const a=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=c){var s,n;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var i,s,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:u}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.1");const v=globalThis.trustedTypes,m=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,y="?"+$,f=`<${y}>`,g=document,b=(t="")=>g.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,C=/"/g,U=/^(?:script|style|textarea)$/i,P=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),H=new WeakMap,O=g.createTreeWalker(g,129,null,!1),B=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=w;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===w?"!--"===a[1]?r=E:void 0!==a[1]?r=S:void 0!==a[2]?(U.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=x):void 0!==a[3]&&(r=x):r===x?">"===a[0]?(r=null!=n?n:w,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?x:'"'===a[3]?C:k):r===C||r===k?r=x:r===E||r===S?r=w:(r=x,n=void 0);const c=r===x&&t[e+1].startsWith("/>")?" ":"";o+=r===w?i+f:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+$+c):i+$+(-2===h?(s.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(l):l,s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[a,h]=B(t,e);if(this.el=M.createElement(a,i),O.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=O.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?D:"?"===e[1]?j:"@"===e[1]?q:z})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],b()),O.nextNode(),l.push({type:2,index:++n});s.append(t[e],b())}}}else if(8===s.nodeType)if(s.data===y)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)l.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function N(t,e,i=t,s){var n,o,r,l;if(e===T)return e;let a=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=_(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=N(t,a._$AS(t,e.values),a,s)),e}class I{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:g).importNode(i,!0);O.currentNode=n;let o=O.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new L(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new K(o,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(o=O.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,s){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),_(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==R&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(g.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new I(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new M(t)),e}M(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new L(this.A(b()),this.A(b()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,i,s,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=N(this,t,e,0),o=!_(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=N(this,s[i+r],e,r),l===T&&(l=this._$AH[r]),o||(o=!_(l)||l!==this._$AH[r]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.k(t)}k(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends z{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===R?void 0:t}}class j extends z{constructor(){super(...arguments),this.type=4}k(t){t&&t!==R?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=N(this,t,e,0))&&void 0!==i?i:R)===T)return;const s=this._$AH,n=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==R&&(s===R||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const V=window.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var W,F;null==V||V(M,L),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.0.1");class Z extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new L(e.insertBefore(b(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}Z.finalized=!0,Z._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:Z});const J=globalThis.litElementPolyfillSupport;null==J||J({LitElement:Z}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.0.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const G=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,Q=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function X(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Q(t,e)}var Y=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let tt=class extends Z{constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this.canSelect=!1,this.disableSelectedStyle=!1,this.href="",this.btnStyle="",this.selected=!1,this.buttonElement=null}static get styles(){return[o`
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
      `]}firstUpdated(){if(!this.shadowRoot)throw new Error("Unexpected undefined shadowRoot");this.buttonElement=this.shadowRoot.querySelector("button")}render(){return P`
      <button
        class=${this.selected&&!this.disableSelectedStyle?"selected":""}
        part="button"
        ?disabled=${this.disabled}
        ?autofocus=${this.autofocus}
        @click=${this.handleClick}>
        <slot></slot>
      </button>
    `}focus(){this.buttonElement&&this.buttonElement.focus()}handleClick(t){t.preventDefault(),t.stopImmediatePropagation(),this.href?window.location.href=this.href:(this.canSelect&&(this.selected=!this.selected,this.dispatchEvent(new CustomEvent("check"))),this.dispatchEvent(new CustomEvent("click")))}};Y([X({type:Boolean})],tt.prototype,"disabled",void 0),Y([X({type:Boolean})],tt.prototype,"autofocus",void 0),Y([X({type:Boolean})],tt.prototype,"canSelect",void 0),Y([X({type:Boolean})],tt.prototype,"disableSelectedStyle",void 0),Y([X({type:String})],tt.prototype,"href",void 0),Y([X({type:String})],tt.prototype,"btnStyle",void 0),Y([X({type:Boolean,reflect:!0})],tt.prototype,"selected",void 0),tt=Y([G("qing-button")],tt);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const et=1;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const it=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==et||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ut.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return T}});var st=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const nt="overlay",ot="overlay-background",rt="open";let lt=class extends Z{constructor(){super(...arguments),this.open=!1}static get styles(){return o`
      :host {
        display: block;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .overlay-background {
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: var(--overlay-z-index, 1000);
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        align-items: center;
        justify-content: center;
      }

      .overlay {
        max-height: 100vh;
        max-width: 100vw;
        width: 100vw;
        color: black;
        background-color: white;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `}firstUpdated(){document.addEventListener("keyup",this.handleKeyUp.bind(this))}render(){const{open:t}=this;return P`
      <div
        style=${it({display:t?"flex":"none"})}
        class=${ot}
        part=${ot}>
        <div class=${nt} part=${nt}>
          <slot></slot>
        </div>
      </div>
    `}updated(t){t.has(rt)&&!!t.get(rt)!==this.open&&setTimeout((()=>this.onOpenChanged()),0)}onOpenChanged(){this.dispatchEvent(new CustomEvent("openChanged",{detail:this.open}))}handleKeyUp(t){this.open&&("Escape"===t.key||"Esc"===t.key?this.dispatchEvent(new CustomEvent("escKeyDown")):"Enter"===t.key&&this.dispatchEvent(new CustomEvent("enterKeyDown")))}};st([X({type:Boolean,reflect:!0})],lt.prototype,"open",void 0),lt=st([G("qing-overlay")],lt);const at=o`
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
`;class ht extends Z{render(){return P` <h2>Title</h2>
      <div>
        <span id="span">Hello world <button @click=${this.handleClick}>Expand</button></span>
      </div>`}handleClick(){this.shadowRoot.getElementById("span").textContent="The div element has no special meaning at all. It represents its children. It can be\n    used with the class, lang, and title attributes to mark up semantics common to a group\n    of consecutive elements. The div element has no special meaning at all. It represents\n    its children. It can be used with the class, lang, and title attributes to mark up\n    semantics common to a group of consecutive elements. The div element has no special\n    meaning at all. It represents its children. It can be used with the class, lang, and\n    title attributes to mark up semantics common to a group of consecutive elements."}}ht.styles=[at,o`
    :host {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
    }
  `],customElements.define("dynamic-content",ht);class dt extends Z{render(){return P`
      <div id="main">
        <h2>Layouts</h2>
        ${this.r("Width: 80%, Height: auto","layout-w-80")}
        ${this.r("Width: auto + min value, Height: auto","layout-auto-min-width")}
        ${this.r("Fullscreen with margins","layout-full-margins")}
        <h2>Events</h2>
        ${this.r("Handle events","handle-events",void 0,(t=>alert(t.detail?"Opening":"Closing")))}
        <h2>Focus</h2>
        ${this.r("Focus","focus",P` <h2>Title</h2>
            <p>Hello world</p>
            <p>
              <input type="text" value="name" id="textInput" />
            </p>`,(t=>{t.detail&&this.shadowRoot.getElementById("textInput").focus()}))}
        <h2>Styles</h2>
        ${this.r("Long text","long-text",P`<h2>Long text</h2>
            <pre style="overflow-y: auto">
${`${"2020 is coming. ".repeat(20)}\n`.repeat(500)}</pre
            >`)}
        ${this.r("Border styles","border-styles")}
        ${this.rElement("Themes","themes",P` <qing-overlay id="themes">
            <h2>Title</h2>
            <p>
              <button @click=${this.handleLightBtnClick}>Light</button>
              <button @click=${this.handleDarkBtnClick}>Dark</button>
              <button
                @click=${()=>this.shadowRoot.getElementById("themes").removeAttribute("open")}>
                Close
              </button>
            </p>
          </qing-overlay>`)}
      </div>
    `}r(t,e,i,s){const n=`${e}-btn`;return P`
      <p>
        <button @click=${()=>this.shadowRoot.getElementById(e).setAttribute("open","")}>
          ${t}
        </button>
      </p>
      <qing-overlay
        id=${e}
        @escKeyDown=${()=>this.shadowRoot.getElementById(e).removeAttribute("open")}
        @openChanged=${t=>{t.detail&&this.shadowRoot.getElementById(n).focus(),s&&s(t)}}>
        ${i??P`<dynamic-content></dynamic-content>`}
        <p style="text-align:center">
          <button
            id=${n}
            @click=${()=>this.shadowRoot.getElementById(e).removeAttribute("open")}>
            OK
          </button>
        </p>
      </qing-overlay>
    `}rElement(t,e,i){return P`
      <p>
        <button @click=${()=>this.shadowRoot.getElementById(e).setAttribute("open","")}>
          ${t}
        </button>
      </p>
      ${i}
    `}get mainElement(){return this.shadowRoot.getElementById("main")}handleLightBtnClick(){this.mainElement.classList.remove("theme-dark")}handleDarkBtnClick(){this.mainElement.classList.add("theme-dark")}}dt.styles=[at,o`
    qing-overlay::part(overlay) {
      padding: 0 1.25rem;
    }

    @media (min-width: 768px) {
      qing-overlay::part(overlay) {
        width: 80%;
      }

      qing-overlay#layout-auto-min-width::part(overlay) {
        width: auto;
        min-width: 400px;
        max-width: min(100vw, 1000px);
      }
    }

    qing-overlay#layout-full-margins::part(overlay) {
      width: calc(100vw - 1rem);
      height: calc(100vh - 1rem);
    }
    @media (min-width: 768px) {
      qing-overlay#layout-full-margins::part(overlay) {
        width: calc(100vw - 4rem);
        height: calc(100vh - 4rem);
      }
    }

    h2 {
      margin-bottom: 0;
    }
    #border-styles::part(overlay) {
      border: 4px dashed green;
      border-radius: 10px;
    }
    :host {
      --default-back-color: white;
      --default-fore-color: black;
      --default-btn-back-color: lightgray;
      --default-success-color: #89ec7c;
    }
    .theme-dark {
      --default-back-color: black;
      --default-fore-color: #777777;
      --default-btn-back-color: #1a1a1a;
      --default-success-color: #073f00;
    }
    #themes::part(overlay) {
      color: var(--default-fore-color);
      background-color: var(--default-back-color);
    }
    #themes button {
      border: 1px solid #818181;
      color: var(--default-fore-color);
      background-color: var(--default-btn-back-color);
    }
  `],customElements.define("example-app",dt),t.ExampleApp=dt,Object.defineProperty(t,"__esModule",{value:!0})}({});
