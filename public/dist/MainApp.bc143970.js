(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6mCd":function(e,t,n){"use strict";n.r(t);var r=n("J4zp"),b=n.n(r),m=n("q1tI"),O=n.n(m),v=n("fMyU"),a=n("lSNA"),i=n.n(a),l=n("RIqP"),u=n.n(l);function p(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function y(e,t){var n=0<arguments.length&&void 0!==e?e:h,r=1<arguments.length?t:void 0,a=n.history,l=n.present;switch(r.type){case"POP":var c=a[a.length-1];return{history:a.slice(0,a.length-1),present:c};case"RESTORE":return{history:r.payload.history,present:r.payload.present};case f:var o=r.payload;if(o===l)return n;if(l){var s=[].concat(u()(a),[l]);return 5<s.length&&(s=s.slice(0,4)),{history:s,present:o}}return{history:u()(a),present:o};case d:return{history:[],present:r.payload}}}function c(e){var t,n=g(),r=b()(n,2),a=r[0],l=r[1],c=l.reset,o=l.pop,s=l.push,i=Object(m.useRef)(null),u=Object(m.useState)(!1),p=b()(u,2),y=p[0],f=p[1],d=localStorage.getItem("rvn-uuid");return null===d?location.reload():t=JSON.parse(d),O.a.createElement("div",{ref:i,className:"wrap"},O.a.createElement(v.a.Provider,{value:{state:a,reset:c,push:s,pop:o}},O.a.createElement(m.Suspense,{fallback:O.a.createElement("div",null)},O.a.createElement(w,null)),O.a.createElement(m.Suspense,{fallback:O.a.createElement("div",null)},O.a.createElement(P,{title:e.title,focusTitle:e.focusTitle})),O.a.createElement(m.Suspense,{fallback:O.a.createElement("div",null)},O.a.createElement(k,null)),O.a.createElement(m.Suspense,{fallback:O.a.createElement("div",null)},O.a.createElement(S,{uuid:t,setPopover:f})),O.a.createElement(E.a,{selectionRef:i,isOpen:y,onTextSelect:function(){document.getElementById("popover")&&(document.getElementById("popover").style.opacity=1)},onTextUnselect:function(){document.getElementById("popover")&&(document.getElementById("popover").style.opacity=0)},placementStrategy:j.a,style:{position:"absolute"}},O.a.createElement("div",{className:"pop-over",id:"popover"},"Sẵn sàng dịch"))))}var f="PUSH",d="RESET",h={history:[],present:null},g=function(){var e=JSON.parse(localStorage.getItem("rvn-client-history"))||h,t=Object(m.useReducer)(y,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e)),n=b()(t,2),r=n[0],a=n[1];Object(m.useEffect)(function(){localStorage.setItem("rvn-client-history",JSON.stringify(r))},[r]);var l=0!==r.history.length,c=Object(m.useCallback)(function(){l&&a({type:"POP"})},[l]),o=Object(m.useCallback)(function(e){return a({type:f,payload:e})},[]),s=Object(m.useCallback)(function(e){return a({type:d,payload:e})},[]);return[r,{reset:s,pop:c,push:o,canPOP:l}]},E=n("PqN8"),o=n("c0p+"),j=n.n(o),P=Object(m.lazy)(function(){return Promise.all([n.e(0),n.e(18),n.e(5)]).then(n.bind(null,"zXhl"))}),S=Object(m.lazy)(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"O6Uj"))}),w=Object(m.lazy)(function(){return n.e(10).then(n.bind(null,"Nq2C"))}),k=Object(m.lazy)(function(){return n.e(12).then(n.bind(null,"gC0S"))});c.defaultProps={title:"RVN",focusTitle:"Translator",iconHref:"assets/img/icons.svg#icon-windows"};t.default=c},fMyU:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext();t.a=a}}]);