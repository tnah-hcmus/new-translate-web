(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6mCd":function(e,t,n){"use strict";n.r(t);var r=n("J4zp"),f=n.n(r),b=n("q1tI"),d=n.n(b),m=n("fMyU"),a=n("lSNA"),i=n.n(a),l=n("RIqP"),u=n.n(l);function p(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function y(e,t){var n=0<arguments.length&&void 0!==e?e:h,r=1<arguments.length?t:void 0,a=n.history,l=n.present;switch(r.type){case"POP":var c=a[a.length-1];return{history:a.slice(0,a.length-1),present:c};case"RESTORE":return{history:r.payload.history,present:r.payload.present};case O:var o=r.payload;if(o===l)return n;if(l){var s=[].concat(u()(a),[l]);return 5<s.length&&(s=s.slice(0,4)),{history:s,present:o}}return{history:u()(a),present:o};case v:return{history:[],present:r.payload}}}function c(e){var t=E(),n=f()(t,2),r=n[0],a=n[1],l=a.reset,c=a.pop,o=a.push,s=Object(b.useRef)(null),i=Object(b.useState)(!1),u=f()(i,2),p=u[0],y=u[1];return d.a.createElement("div",{ref:s,className:"wrap"},d.a.createElement(m.a.Provider,{value:{state:r,reset:l,push:o,pop:c}},d.a.createElement(b.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(w,null)),d.a.createElement(b.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(P,{title:e.title,focusTitle:e.focusTitle})),d.a.createElement(b.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(k,null)),d.a.createElement(b.Suspense,{fallback:d.a.createElement("div",null)},d.a.createElement(S,{setPopover:y})),d.a.createElement(g.a,{selectionRef:s,isOpen:p,onTextSelect:function(){document.getElementById("popover")&&(document.getElementById("popover").style.opacity=1)},onTextUnselect:function(){document.getElementById("popover")&&(document.getElementById("popover").style.opacity=0)},placementStrategy:j.a,style:{position:"absolute"}},d.a.createElement("div",{className:"pop-over",id:"popover"},"Sẵn sàng dịch"))))}var O="PUSH",v="RESET",h={history:[],present:null},E=function(){var e=JSON.parse(localStorage.getItem("rvn-client-history"))||h,t=Object(b.useReducer)(y,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e)),n=f()(t,2),r=n[0],a=n[1];Object(b.useEffect)(function(){localStorage.setItem("rvn-client-history",JSON.stringify(r))},[r]);var l=0!==r.history.length,c=Object(b.useCallback)(function(){l&&a({type:"POP"})},[l]),o=Object(b.useCallback)(function(e){return a({type:O,payload:e})},[]),s=Object(b.useCallback)(function(e){return a({type:v,payload:e})},[]);return[r,{reset:s,pop:c,push:o,canPOP:l}]},g=n("PqN8"),o=n("c0p+"),j=n.n(o),P=Object(b.lazy)(function(){return Promise.all([n.e(0),n.e(17),n.e(5)]).then(n.bind(null,"zXhl"))}),S=Object(b.lazy)(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"O6Uj"))}),w=Object(b.lazy)(function(){return n.e(10).then(n.bind(null,"Nq2C"))}),k=Object(b.lazy)(function(){return n.e(12).then(n.bind(null,"gC0S"))});c.defaultProps={title:"RVN",focusTitle:"Translator",iconHref:"assets/img/icons.svg#icon-windows"};t.default=c},fMyU:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext();t.a=a}}]);