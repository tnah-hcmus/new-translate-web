(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4t4i":function(e,n,t){"use strict";t.r(n);var a=t("yXPU"),o=t.n(a),a=t("J4zp"),i=t.n(a),a=t("o0o1"),l=t.n(a),s=t("q1tI"),u=t.n(s),a=t("9rZX"),d=t.n(a);n.default=u.a.memo(function(r){function n(n){return new Promise(function(e){return setTimeout(e,n)})}var e=Object(s.useState)(!1),t=i()(e,2),e=t[0],a=t[1],c=Object(s.useRef)(null),t=function(){var e=o()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,n(300);case 3:return r.clear(),e.next=6,n(100);case 6:a(!1);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return u.a.createElement(d.a,{isOpen:r.isOpen&&!e,onRequestClose:t,ariaHideApp:!1,contentLabel:"Preview",closeTimeoutMS:200,className:"preview-modal"},u.a.createElement("a",{className:"close",onClick:t}),u.a.createElement("div",{className:"modal-panel"},u.a.createElement("h3",{className:"modal__title"},"Preview your post"),u.a.createElement("div",null,u.a.createElement("button",{className:"button",onClick:function(e){r.id;var o=c.current;navigator.clipboard.writeText(r.content).then(function(){o.innerHTML="Copied!",o.classList.add("button-click")},function(){var e=document.createElement("input");e.innerText=r.content;var n=e.contentEditable,t=e.readOnly,a=document.createRange();e.contentEditable=!0,e.readOnly=!0,a.selectNodeContents(e);var c=window.getSelection();c.removeAllRanges(),c.addRange(a),e.setSelectionRange(0,999999),e.contentEditable=n,e.readOnly=t,document.execCommand("copy"),o.innerHTML="Copied!",o.classList.add("button-click")})},id:r.id+"copy-button",ref:c},"Copy"))),u.a.createElement("p",null,r.content))})}}]);