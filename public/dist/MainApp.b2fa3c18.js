(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6mCd":function(e,t,n){"use strict";n.r(t);var r=n("J4zp"),d=n.n(r),h=n("q1tI"),m=n.n(h),v=n("fMyU"),a=n("lSNA"),i=n.n(a),l=n("RIqP"),u=n.n(l);function p(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function f(e,t){var n=0<arguments.length&&void 0!==e?e:O,r=1<arguments.length?t:void 0,a=n.history,l=n.present;switch(r.type){case"POP":var c=a[a.length-1];return{history:a.slice(0,a.length-1),present:c};case"RESTORE":return{history:r.payload.history,present:r.payload.present};case y:var o=r.payload;if(o===l)return n;if(l){var s=[].concat(u()(a),[l]);return 5<s.length&&(s=s.slice(0,4)),{history:s,present:o}}return{history:u()(a),present:o};case b:return{history:[],present:r.payload}}}function c(e){var t,n=g(),r=d()(n,2),a=r[0],l=r[1],c=l.reset,o=l.pop,s=l.push,i=Object(h.useState)(!1),u=d()(i,2),p=u[0],f=u[1],y=Object(h.useRef)(null),b=Object(h.useRef)(null),O=localStorage.getItem("rvn-uuid");return null===O?location.reload():t=JSON.parse(O),m.a.createElement("div",{ref:y,className:"wrap"},m.a.createElement(v.a.Provider,{value:{state:a,reset:c,push:s,pop:o}},m.a.createElement(h.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(w,null)),m.a.createElement(h.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(P,{title:e.title,focusTitle:e.focusTitle})),m.a.createElement(h.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(k,null)),m.a.createElement(h.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(S,{uuid:t,setPopover:f,popoverRef:b})),m.a.createElement(j.a,{selectionRef:y,isOpen:p,onTextSelect:function(){b.current&&(b.current.style.opacity=1)},onTextUnselect:function(){b.current&&(b.current.style.opacity=0,b.current.innerHTML="Sẵn sàng dịch")},placementStrategy:E.a,style:{position:"absolute"}},m.a.createElement("div",{className:"pop-over",id:"popover",ref:b},"Sẵn sàng dịch"))))}var y="PUSH",b="RESET",O={history:[],present:null},g=function(){var e=JSON.parse(localStorage.getItem("rvn-client-history"))||O,t=Object(h.useReducer)(f,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(e){i()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e)),n=d()(t,2),r=n[0],a=n[1];Object(h.useEffect)(function(){localStorage.setItem("rvn-client-history",JSON.stringify(r))},[r]);var l=0!==r.history.length,c=Object(h.useCallback)(function(){l&&a({type:"POP"})},[l]),o=Object(h.useCallback)(function(e){return a({type:y,payload:e})},[]),s=Object(h.useCallback)(function(e){return a({type:b,payload:e})},[]);return[r,{reset:s,pop:c,push:o,canPOP:l}]},j=n("PqN8"),o=n("c0p+"),E=n.n(o),P=Object(h.lazy)(function(){return Promise.all([n.e(1),n.e(18),n.e(25),n.e(5)]).then(n.bind(null,"zXhl"))}),S=Object(h.lazy)(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"O6Uj"))}),w=Object(h.lazy)(function(){return n.e(10).then(n.bind(null,"Nq2C"))}),k=Object(h.lazy)(function(){return n.e(12).then(n.bind(null,"gC0S"))});c.defaultProps={title:"RVN",focusTitle:"Translator",iconHref:"assets/img/icons.svg#icon-windows"};t.default=m.a.memo(c)},fMyU:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext();t.a=a}}]);