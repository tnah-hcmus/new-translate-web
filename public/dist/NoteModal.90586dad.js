(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/H3m":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=n("9rZX"),r=n.n(a);t.default=function(e){return i.a.createElement(r.a,{isOpen:e.isOpen,onRequestClose:e.close,ariaHideApp:!1,contentLabel:"Preview",closeTimeoutMS:200,className:"preview-modal"},i.a.createElement("h5",{className:"modal__title"},"Gửi gắm vào bài dịch gì đó đi"),i.a.createElement("textarea",{name:"textarea",id:e.name+"-note-input",className:"expand",onKeyDown:function(e){e.target.style.height="100%",e.target.style.height="".concat(e.target.scrollHeight,"px")},style:{backgroundColor:"#fff",color:"black"},autoFocus:!0}),i.a.createElement("button",{className:"button",onClick:function(){e.saveNote(),e.close()},id:e.id+"save-button"},"Save"))}},"2W6z":function(e,t,n){"use strict";var o=function(){};e.exports=o},"2rMq":function(n,o,i){var a;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var e=!("undefined"==typeof window||!window.document||!window.document.createElement),t={canUseDOM:e,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:e&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:e&&!!window.screen};void 0===(a=function(){return t}.call(o,i,o,n))||(n.exports=a)}()},VCL8:function(e,t,n){"use strict";function c(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function l(n){this.setState(function(e){var t=this.constructor.getDerivedStateFromProps(n,e);return null!=t?t:null}.bind(this))}function p(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function o(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,i=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==i){var a=e.displayName||e.name,r="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+a+" uses "+r+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=c,t.componentWillReceiveProps=l),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=p;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",function(){return o}),p.__suppressDeprecationWarning=l.__suppressDeprecationWarning=c.__suppressDeprecationWarning=!0}}]);