(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2rMq":function(n,o,r){var i;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var e=!("undefined"==typeof window||!window.document||!window.document.createElement),t={canUseDOM:e,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:e&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:e&&!!window.screen};void 0===(i=function(){return t}.call(o,r,o,n))||(n.exports=i)}()},"4t4i":function(e,t,n){"use strict";n.r(t);var o=n("o0o1"),c=n.n(o),r=n("yXPU"),s=n.n(r),i=n("J4zp"),l=n.n(i),p=n("q1tI"),u=n.n(p),a=n("9rZX"),f=n.n(a);t.default=function(n){function t(t){return new Promise(function(e){return setTimeout(e,t)})}var e=Object(p.useState)(!1),o=l()(e,2),r=o[0],i=o[1],a=function(){var e=s()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,t(300);case 3:return n.clear(),e.next=6,t(100);case 6:i(!1);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return u.a.createElement(f.a,{isOpen:n.isOpen&&!r,onRequestClose:a,ariaHideApp:!1,contentLabel:"Preview",closeTimeoutMS:200,className:"preview-modal"},u.a.createElement("a",{className:"close",onClick:a}),u.a.createElement("div",{className:"modal-panel"},u.a.createElement("h3",{className:"modal__title"},"Preview your post"),u.a.createElement("div",null,u.a.createElement("button",{className:"button",onClick:function(){var t=n.id;navigator.clipboard.writeText(n.content).then(function(){var e=document.getElementById(t+"copy-button");e.innerHTML="Copied!",e.classList.add("button-click")})},id:n.id+"copy-button"},"Copy"))),u.a.createElement("p",null,n.content))}},VCL8:function(e,t,n){"use strict";function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function l(n){this.setState(function(e){var t=this.constructor.getDerivedStateFromProps(n,e);return null!=t?t:null}.bind(this))}function p(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function o(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,r=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==r){var i=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=s,t.componentWillReceiveProps=l),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=p;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",function(){return o}),p.__suppressDeprecationWarning=l.__suppressDeprecationWarning=s.__suppressDeprecationWarning=!0}}]);