define(["react","react-dom","mendix/filters/builders"],(function(e,t,a){"use strict";var l,r={exports:{}};
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */l=r,function(){var e={}.hasOwnProperty;function t(){for(var a=[],l=0;l<arguments.length;l++){var r=arguments[l];if(r){var n=typeof r;if("string"===n||"number"===n)a.push(r);else if(Array.isArray(r)&&r.length){var i=t.apply(null,r);i&&a.push(i)}else if("object"===n)for(var u in r)e.call(r,u)&&r[u]&&a.push(u)}}return a.join(" ")}l.exports?(t.default=t,l.exports=t):window.classNames=t}();var n=r.exports;const i=({className:t,bootstrapStyle:a,children:l})=>e.Children.count(l)>0?e.createElement("div",{className:n("alert alert-".concat(a),t)},l):null;function u(t,a){const[l,r]=e.useState(),n=e.useCallback((()=>{const e=null==t?void 0:t.getBoundingClientRect();var a,n;n=l,(a=e)&&n&&a.height===n.height&&a.width===n.width&&a.bottom===n.bottom&&a.top===n.top&&a.left===n.left&&a.right===n.right||r(e)}),[l,t]);return function(t){const a=e.useRef(),l=e.useCallback((()=>{t(),a.current=window.requestAnimationFrame(l)}),[t]);e.useEffect((()=>{if(t)return a.current=window.requestAnimationFrame(l),()=>{window.cancelAnimationFrame(a.current)}}),[t,l])}(a?n:void 0),l}function o(a){const[l,r]=e.useState(a.defaultFilter),[i,o]=e.useState(!1),s=e.useRef(null),c=e.useRef(null);var d,f;d=[s,c],f=()=>o(!1),e.useEffect((()=>{const e=e=>{if(Array.isArray(d)){if(d.some((t=>!t.current||t.current.contains(e.target))))return}else if(!d.current||d.current.contains(e.target))return;f()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d,f]);const v=u(s.current,i),m=e.useCallback((e=>{r(e),a.onChange(e),o(!1)}),[a.onChange]);e.useEffect((()=>{r(a.defaultFilter),a.onChange(a.defaultFilter)}),[a.defaultFilter,a.onChange]);const b=t.createPortal(e.createElement("ul",{ref:c,id:"".concat(a.id,"-filter-selectors"),className:"filter-selectors",role:"menu","data-focusindex":0,style:{position:"fixed",top:null==v?void 0:v.bottom,left:null==v?void 0:v.left}},a.options.map(((t,r)=>e.createElement("li",{className:n({"filter-selected":l===t.value}),key:r,onClick:e=>{e.preventDefault(),e.stopPropagation(),m(t.value)},onKeyDown:e=>{var n,i;"Enter"===e.key||" "===e.key?(e.preventDefault(),e.stopPropagation(),m(t.value)):"Tab"===e.key&&r+1===a.options.length?(e.preventDefault(),m(l)):("Tab"===e.key&&e.shiftKey&&0===r||"Escape"===e.key)&&(e.preventDefault(),null===(i=null===(n=s.current)||void 0===n?void 0:n.querySelector("button"))||void 0===i||i.focus(),o(!1))},role:"menuitem",tabIndex:0},e.createElement("div",{className:n("filter-icon",t.value),"aria-hidden":!0}),e.createElement("div",{className:"filter-label"},t.label))))),document.body),h=e.useCallback((()=>{o((e=>!e)),setTimeout((()=>{var e,t;null===(t=null===(e=c.current)||void 0===e?void 0:e.querySelector("li.filter-selected"))||void 0===t||t.focus()}),10)}),[]);return e.createElement("div",{className:"filter-selector"},e.createElement("div",{className:"filter-selector-content",ref:s},e.createElement("button",{"aria-controls":"".concat(a.id,"-filter-selectors"),"aria-expanded":i,"aria-haspopup":!0,"aria-label":a.ariaLabel,className:n("btn btn-default filter-selector-button button-icon",l),onClick:h,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),h())}}," "),i&&b))}i.displayName="Alert";var s;function c(t){var a;const[l,r]=e.useState(t.defaultFilter),[i,u]=e.useState(""),[s,c]=e.useState(""),d=e.useRef(null);e.useEffect((()=>{t.value&&(c(t.value),u(t.value))}),[t.value]),e.useEffect((()=>{var e;null===(e=t.updateFilters)||void 0===e||e.call(t,i,l)}),[i,l]);const f=e.useCallback(((e,t)=>{let a=null;return(...l)=>{null!==a&&(clearTimeout(a),a=null),a=setTimeout((()=>e(...l)),t)}})((e=>u(e)),t.delay),[t.delay]),v=e.useCallback((()=>{d.current&&d.current.focus()}),[d]);return e.createElement("div",{className:n("filter-container",t.className),"data-focusindex":null!==(a=t.tabIndex)&&void 0!==a?a:0,style:t.styles},t.adjustable&&e.createElement(o,{ariaLabel:t.screenReaderButtonCaption,id:t.id,defaultFilter:t.defaultFilter,onChange:e.useCallback((e=>{r((t=>t===e?t:(v(),e)))}),[v]),options:[{value:"contains",label:"Contains"},{value:"startsWith",label:"Starts with"},{value:"endsWith",label:"Ends with"},{value:"greater",label:"Greater than"},{value:"greaterEqual",label:"Greater than or equal"},{value:"equal",label:"Equal"},{value:"notEqual",label:"Not equal"},{value:"smaller",label:"Smaller than"},{value:"smallerEqual",label:"Smaller than or equal"}]}),e.createElement("input",{"aria-label":t.screenReaderInputCaption,className:n("form-control",{"filter-input":t.adjustable}),onChange:e=>{c(e.target.value),f(e.target.value)},placeholder:t.placeholder,ref:d,type:"text",value:s}))}function d(e){if(e&&1===e.length){const[t]=e;let a="equal";switch(t.type){case"contains":a="contains";break;case"starts-with":a="startsWith";break;case"ends-with":a="endsWith";break;case">":a="greater";break;case">=":a="greaterEqual";break;case"=":a="equal";break;case"!=":a="notEqual";break;case"<":a="smaller";break;case"<=":a="smallerEqual"}return{type:a,value:String(t.value)}}}function f(e){if(e)return Object.keys(e).map((t=>e[t])).filter((e=>e.type.match(/HashString|String/)))}return function(e){e.Number="number",e.DateTime="datetime"}(s||(s={})),function(t){const l=e.useRef("TextFilter".concat(function(){const e="com.mendix.widgets.web.UUID";return window[e]||(window[e]=1),window[e]++}())),r=window["com.mendix.widgets.web.filterable.filterContext"],n=e.createElement(i,{bootstrapStyle:"danger"},"The Text filter widget must be placed inside the header of the Data grid 2.0 or Gallery widget."),u=e.createElement(i,{bootstrapStyle:"danger"},'The Text filter widget can\'t be used with the filters options you have selected. It requires a "Hashed string or String" attribute to be selected.');return(null==r?void 0:r.Consumer)?e.createElement(r.Consumer,null,(r=>{var o,s,v,m,b,h,p;if(!r||!r.filterDispatcher||!r.singleAttribute&&!r.multipleAttributes)return n;const{filterDispatcher:g,singleAttribute:y,multipleAttributes:E,singleInitialFilter:w,multipleInitialFilters:C}=r,k=[...y?[y]:[],...E&&null!==(o=f(E))&&void 0!==o?o:[]];if(0===k.length)return E?u:n;const q=d(w||(null==C?void 0:C[k[0].id])),x=(S=k[0].type)&&!S.match(/HashString|String/)?"The attribute type being used for Text filter is not 'Hashed string or String'":null;var S;return x?e.createElement(i,{bootstrapStyle:"danger"},x):e.createElement(c,{adjustable:t.adjustable,className:t.class,defaultFilter:null!==(s=null==q?void 0:q.type)&&void 0!==s?s:t.defaultFilter,delay:t.delay,id:l.current,placeholder:null===(v=t.placeholder)||void 0===v?void 0:v.value,screenReaderButtonCaption:null===(m=t.screenReaderButtonCaption)||void 0===m?void 0:m.value,screenReaderInputCaption:null===(b=t.screenReaderInputCaption)||void 0===b?void 0:b.value,styles:t.style,tabIndex:t.tabIndex,updateFilters:(e,l)=>{var r,n,i;const u=(null===(r=t.valueAttribute)||void 0===r?void 0:r.value)||"";e!==u&&(null===(n=t.valueAttribute)||void 0===n||n.setValue(e),null===(i=t.onChange)||void 0===i||i.execute());const o=null==k?void 0:k.map((t=>function(e,t,l){if(!e||!e.filterable||!t)return;return{contains:a.contains,startsWith:a.startsWith,endsWith:a.endsWith,greater:a.greaterThan,greaterEqual:a.greaterThanOrEqual,equal:a.equals,notEqual:a.notEqual,smaller:a.lessThan,smallerEqual:a.lessThanOrEqual}[l](a.attribute(e.id),a.literal(t))}(t,e,l))).filter((e=>void 0!==e));g({getFilterCondition:()=>o&&o.length>1?a.or(...o):null==o?void 0:o[0],filterType:"string"})},value:null!==(h=null==q?void 0:q.value)&&void 0!==h?h:null===(p=t.defaultValue)||void 0===p?void 0:p.value})})):n}}));
