(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{O6Uj:function(e,t,n){"use strict";n.r(t);var a=n("J4zp"),r=n.n(a),o=n("q1tI"),s=n.n(o),c=n("/MKj"),u=n("o0o1"),i=n.n(u),l=n("yXPU"),d=n.n(l),g=[],p=function(e,t,n){return g.find((function(a){return a.sourceWord==e&&a.sourceLang==t&&a.targetLang==n&&"OK"==a.result.statusText}))},m=function(e,t,n,a){g.push({sourceWord:e,sourceLang:t,targetLang:n,result:a})},f=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=a+"https://translate.googleapis.com/translate_a/single?client=gtx&sl=".concat(t,"&tl=").concat(n,"&dt=t&dt=bd&dj=1&q=").concat(encodeURIComponent(e)),o=new XMLHttpRequest;return o.responseType="json",o.open("GET",r),o.send(),new Promise((function(e,t){o.onload=function(){e(o)},o.onerror=function(){e(o)}}))},w=function(e){var t={resultText:"",candidateText:"",sourceLanguage:"",percentage:0,statusText:""};return 0===e.status?t.statusText="Network Error":200===e.status?t.statusText="OK":429===e.status||503===e.status?t.statusText="Service Unavailable":t.statusText=e.statusText||e.status,"OK"!==t.statusText||(t.sourceLanguage=e.response.src,t.percentage=e.response.ld_result.srclangs_confidences[0],t.resultText=e.response.sentences.map((function(e){return e.trans})).join(""),e.response.dict&&(t.candidateText=e.response.dict.map((function(e){return"".concat(e.pos).concat(""!=e.pos?": ":"").concat(e.terms.join(", "),"\n")})).join(""))),t},b=function(){var e=d()(i.a.mark((function e(t){var n,a,r,o,s,c,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>1&&void 0!==l[1]?l[1]:"auto",a=l.length>2&&void 0!==l[2]?l[2]:"vi",""!==(t=t.trim())){e.next=5;break}return e.abrupt("return",{resultText:"",candidateText:"",sourceLanguage:"en",percentage:0,statusText:"OK"});case 5:if(!(r=p(t,n,a))){e.next=8;break}return e.abrupt("return",r.result);case 8:return e.next=10,f(t,n,a);case 10:if(o=e.sent,"OK"===(s=w(o)).statusText){e.next=20;break}return console.log("Out of quota, use worker proxy instead"),e.next=16,f(t,n,a,"https://young-moon-cab4.tnah-work.workers.dev/?");case 16:return c=e.sent,"OK"!==(u=w(c)).statusText&&(u.resultText="Quá hạn mức sử dụng của google translate API, vui lòng thử lại sau 1 tiếng!"),e.abrupt("return",u);case 20:return m(t,n,a,s),e.abrupt("return",s);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(27),n.e(12),n.e(21),n.e(6)]).then(n.bind(null,"2W2T"))})),x=Object(o.lazy)((function(){return n.e(2).then(n.bind(null,"/T0O"))})),k=function(e){var t,n=(t="",window.getSelection?t=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(t=document.selection.createRange().text),t);""===n?e&&(e.style.opacity=0):e&&b(n).then((function(t){return e.innerHTML=t.resultText})).catch((function(t){console.log(t),e.innerHTML="Có lỗi xảy ra trong quá trình translate"}))},v=function(e){if("Worker done"===e.data||"Download done"===e.data||"Load worker"===e.data||"Loading"===e.data||"Loaded"===e.data){var t=document.getElementsByClassName("is-shown")[0].getElementsByClassName("download")[0];switch(e.data){case"Worker done":t.innerHTML="Downloaded";break;case"Download done":t.innerHTML="Combining";break;case"Load worker":t.innerHTML="Loading service worker";break;case"Loading":t.innerHTML="Loading";break;case"Loaded":t.innerHTML="Downloading"}}};t.default=s.a.memo(Object(c.b)((function(e){return{tabs:e.tabs}}),null)((function(e){var t=Object(o.useState)(!1),n=r()(t,2),a=n[0],c=n[1],u=function(){if(a)document.onselectionchange=null,e.setPopover(!1);else{e.setPopover(!0);var t=null;document.onselectionchange=function(){t&&clearTimeout(t),t=setTimeout((function(){k(e.popoverRef.current)}),500)}}};return Object(o.useEffect)((function(){return window.addEventListener("message",v),function(){window.removeEventListener("message",v),document.onselectionchange=null}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("main",{className:"content js-content"},0===e.tabs.length&&s.a.createElement("p",{className:"widget__message"}),e.tabs.map((function(e,t){return"guide"!==e.category?s.a.createElement(o.Suspense,{fallback:s.a.createElement("div",null),key:t},s.a.createElement(T,{key:e.id,tab:e,helper:a,setGoogleHelper:u,setHelper:c})):s.a.createElement(o.Suspense,{fallback:s.a.createElement("div",null),key:t},s.a.createElement(x,{key:e.id,id:e.id,link:e.link}))}))))})))}}]);