(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BpA9:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),i=n.n(a),r=n("yXPU"),s=n.n(r),c=n("J4zp"),u=n.n(c),l=n("q1tI"),p=n.n(l),o=n("9rZX"),m=n.n(o);t.default=function(n){function t(t){return new Promise(function(e){return setTimeout(e,t)})}var e=Object(l.useState)(!1),a=u()(e,2),r=a[0],c=a[1],o=function(){var e=s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,t(300);case 3:return n.clear(),e.next=6,t(100);case 6:c(!1);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return p.a.createElement(m.a,{isOpen:n.isOpen&&!r,onRequestClose:o,ariaHideApp:!1,contentLabel:"Preview",closeTimeoutMS:200,className:"preview-modal"},p.a.createElement("a",{className:"close",onClick:o}),p.a.createElement("div",{className:"modal-panel"},p.a.createElement("h3",{className:"modal__title"},"Preview your post"),p.a.createElement("div",null,p.a.createElement("button",{className:"button",onClick:function(){var t=n.id;navigator.clipboard.writeText(n.content).then(function(){var e=document.getElementById(t+"copy-button");e.innerHTML="Copied!",e.classList.add("button-click")})},id:n.id+"copy-button"},"Copy"))),p.a.createElement("p",null,n.content))}}}]);