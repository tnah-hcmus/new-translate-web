(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1Top":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n("rJ8t"),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default},AnK5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditableInput=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),a=u(o),i=u(n("/FUP"));function u(e){return e&&e.__esModule?e:{default:e}}var l=[38,40],s=t.EditableInput=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.handleBlur=function(){n.state.blurValue&&n.setState({value:n.state.blurValue,blurValue:null})},n.handleChange=function(e){n.setUpdatedValue(e.target.value,e)},n.handleKeyDown=function(e){var t,r=function(e){return Number(String(e).replace(/%/g,""))}(e.target.value);if(!isNaN(r)&&(t=e.keyCode,l.indexOf(t)>-1)){var o=n.getArrowOffset(),a=38===e.keyCode?r+o:r-o;n.setUpdatedValue(a,e)}},n.handleDrag=function(e){if(n.props.dragLabel){var t=Math.round(n.props.value+e.movementX);t>=0&&t<=n.props.dragMax&&n.props.onChange&&n.props.onChange(n.getValueObjectWithLabel(t),e)}},n.handleMouseDown=function(e){n.props.dragLabel&&(e.preventDefault(),n.handleDrag(e),window.addEventListener("mousemove",n.handleDrag),window.addEventListener("mouseup",n.handleMouseUp))},n.handleMouseUp=function(){n.unbindEventListeners()},n.unbindEventListeners=function(){window.removeEventListener("mousemove",n.handleDrag),window.removeEventListener("mouseup",n.handleMouseUp)},n.state={value:String(e.value).toUpperCase(),blurValue:String(e.value).toUpperCase()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e,t){this.props.value===this.state.value||e.value===this.props.value&&t.value===this.state.value||(this.input===document.activeElement?this.setState({blurValue:String(this.props.value).toUpperCase()}):this.setState({value:String(this.props.value).toUpperCase(),blurValue:!this.state.blurValue&&String(this.props.value).toUpperCase()}))}},{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"getValueObjectWithLabel",value:function(e){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.label,e)}},{key:"getArrowOffset",value:function(){return this.props.arrowOffset||1}},{key:"setUpdatedValue",value:function(e,t){var n=this.props.label?this.getValueObjectWithLabel(e):e;this.props.onChange&&this.props.onChange(n,t),this.setState({value:e})}},{key:"render",value:function(){var e=this,t=(0,i.default)({default:{wrap:{position:"relative"}},"user-override":{wrap:this.props.style&&this.props.style.wrap?this.props.style.wrap:{},input:this.props.style&&this.props.style.input?this.props.style.input:{},label:this.props.style&&this.props.style.label?this.props.style.label:{}},"dragLabel-true":{label:{cursor:"ew-resize"}}},{"user-override":!0},this.props);return a.default.createElement("div",{style:t.wrap},a.default.createElement("input",{style:t.input,ref:function(t){return e.input=t},value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onBlur:this.handleBlur,placeholder:this.props.placeholder,spellCheck:"false"}),this.props.label&&!this.props.hideLabel?a.default.createElement("span",{style:t.label,onMouseDown:this.handleMouseDown},this.props.label):null)}}]),t}(o.PureComponent||o.Component);t.default=s},Ba7A:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Swatch=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),a=l(n("/FUP")),i=n("japM"),u=l(n("Nq3d"));function l(e){return e&&e.__esModule?e:{default:e}}var s=t.Swatch=function(e){var t=e.color,n=e.style,i=e.onClick,l=void 0===i?function(){}:i,s=e.onHover,p=e.title,c=void 0===p?t:p,d=e.children,f=e.focus,h=e.focusStyle,b=void 0===h?{}:h,v="transparent"===t,g=(0,a.default)({default:{swatch:r({background:t,height:"100%",width:"100%",cursor:"pointer",position:"relative",outline:"none"},n,f?b:{})}}),y={};return s&&(y.onMouseOver=function(e){return s(t,e)}),o.default.createElement("div",r({style:g.swatch,onClick:function(e){return l(t,e)},title:c,tabIndex:0,onKeyDown:function(e){return 13===e.keyCode&&l(t,e)}},y),d,v&&o.default.createElement(u.default,{borderRadius:g.swatch.borderRadius,boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"}))};t.default=(0,i.handleFocus)(s)},HlQe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Hue=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),a=l(o),i=l(n("/FUP")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("srvI"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=t.Hue=function(e){function t(){var e,n,r;s(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleChange=function(e){var t=u.calculateChange(e,r.props.direction,r.props.hsl,r.container);t&&"function"==typeof r.props.onChange&&r.props.onChange(t,e)},r.handleMouseDown=function(e){r.handleChange(e),window.addEventListener("mousemove",r.handleChange),window.addEventListener("mouseup",r.handleMouseUp)},r.handleMouseUp=function(){r.unbindEventListeners()},p(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this,t=this.props.direction,n=void 0===t?"horizontal":t,r=(0,i.default)({default:{hue:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius,boxShadow:this.props.shadow},container:{padding:"0 2px",position:"relative",height:"100%",borderRadius:this.props.radius},pointer:{position:"absolute",left:100*this.props.hsl.h/360+"%"},slider:{marginTop:"1px",width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",transform:"translateX(-2px)"}},vertical:{pointer:{left:"0px",top:-100*this.props.hsl.h/360+100+"%"}}},{vertical:"vertical"===n});return a.default.createElement("div",{style:r.hue},a.default.createElement("div",{className:"hue-"+n,style:r.container,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},a.default.createElement("style",null,"\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "),a.default.createElement("div",{style:r.pointer},this.props.pointer?a.default.createElement(this.props.pointer,this.props):a.default.createElement("div",{style:r.slider}))))}}]),t}(o.PureComponent||o.Component);t.default=c},Lwbf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={},o=t.render=function(e,t,n,r){if("undefined"==typeof document&&!r)return null;var o=r?new r:document.createElement("canvas");o.width=2*n,o.height=2*n;var a=o.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,o.width,o.height),a.fillStyle=t,a.fillRect(0,0,n,n),a.translate(n,n),a.fillRect(0,0,n,n),o.toDataURL()):null};t.get=function(e,t,n,a){var i=e+"-"+t+"-"+n+(a?"-server":"");if(r[i])return r[i];var u=o(e,t,n,a);return r[i]=u,u}},Nq3d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Checkboard=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n("q1tI"),a=l(o),i=l(n("/FUP")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("Lwbf"));function l(e){return e&&e.__esModule?e:{default:e}}var s=t.Checkboard=function(e){var t=e.white,n=e.grey,l=e.size,s=e.renderers,p=e.borderRadius,c=e.boxShadow,d=e.children,f=(0,i.default)({default:{grid:{borderRadius:p,boxShadow:c,absolute:"0px 0px 0px 0px",background:"url("+u.get(t,n,l,s.canvas)+") center left"}}});return(0,o.isValidElement)(d)?a.default.cloneElement(d,r({},d.props,{style:r({},d.props.style,f.grid)})):a.default.createElement("div",{style:f.grid})};s.defaultProps={size:8,white:"transparent",grey:"rgba(0,0,0,.08)",renderers:{}},t.default=s},Ojt5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Raised=void 0;var r=u(n("q1tI")),o=u(n("17x9")),a=u(n("/FUP")),i=u(n("QkVN"));function u(e){return e&&e.__esModule?e:{default:e}}var l=t.Raised=function(e){var t=e.zDepth,n=e.radius,o=e.background,u=e.children,l=e.styles,s=void 0===l?{}:l,p=(0,a.default)((0,i.default)({default:{wrap:{position:"relative",display:"inline-block"},content:{position:"relative"},bg:{absolute:"0px 0px 0px 0px",boxShadow:"0 "+t+"px "+4*t+"px rgba(0,0,0,.24)",borderRadius:n,background:o}},"zDepth-0":{bg:{boxShadow:"none"}},"zDepth-1":{bg:{boxShadow:"0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"}},"zDepth-2":{bg:{boxShadow:"0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"}},"zDepth-3":{bg:{boxShadow:"0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"}},"zDepth-4":{bg:{boxShadow:"0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"}},"zDepth-5":{bg:{boxShadow:"0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"}},square:{bg:{borderRadius:"0"}},circle:{bg:{borderRadius:"50%"}}},s),{"zDepth-1":1===t});return r.default.createElement("div",{style:p.wrap},r.default.createElement("div",{style:p.bg}),r.default.createElement("div",{style:p.content},u))};l.propTypes={background:o.default.string,zDepth:o.default.oneOf([0,1,2,3,4,5]),radius:o.default.number,styles:o.default.object},l.defaultProps={background:"#fff",zDepth:1,radius:2,styles:{}},t.default=l},THLb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.calculateChange=function(e,t,n,r,o){var a=o.clientWidth,i=o.clientHeight,u="number"==typeof e.pageX?e.pageX:e.touches[0].pageX,l="number"==typeof e.pageY?e.pageY:e.touches[0].pageY,s=u-(o.getBoundingClientRect().left+window.pageXOffset),p=l-(o.getBoundingClientRect().top+window.pageYOffset);if("vertical"===n){var c=void 0;if(c=p<0?0:p>i?1:Math.round(100*p/i)/100,t.a!==c)return{h:t.h,s:t.s,l:t.l,a:c,source:"rgb"}}else{var d=void 0;if(r!==(d=s<0?0:s>a?1:Math.round(100*s/a)/100))return{h:t.h,s:t.s,l:t.l,a:d,source:"rgb"}}return null}},TM95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("yOY4");Object.defineProperty(t,"Alpha",{enumerable:!0,get:function(){return c(r).default}});var o=n("Nq3d");Object.defineProperty(t,"Checkboard",{enumerable:!0,get:function(){return c(o).default}});var a=n("AnK5");Object.defineProperty(t,"EditableInput",{enumerable:!0,get:function(){return c(a).default}});var i=n("HlQe");Object.defineProperty(t,"Hue",{enumerable:!0,get:function(){return c(i).default}});var u=n("Ojt5");Object.defineProperty(t,"Raised",{enumerable:!0,get:function(){return c(u).default}});var l=n("ccyi");Object.defineProperty(t,"Saturation",{enumerable:!0,get:function(){return c(l).default}});var s=n("UGzO");Object.defineProperty(t,"ColorWrap",{enumerable:!0,get:function(){return c(s).default}});var p=n("Ba7A");function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"Swatch",{enumerable:!0,get:function(){return c(p).default}})},UGzO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ColorWrap=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=s(a),u=s(n("sEfC")),l=s(n("p8yl"));function s(e){return e&&e.__esModule?e:{default:e}}var p=t.ColorWrap=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return t.handleChange=function(e,n){if(l.default.simpleCheckForValidColor(e)){var r=l.default.toState(e,e.h||t.state.oldHue);t.setState(r),t.props.onChangeComplete&&t.debounce(t.props.onChangeComplete,r,n),t.props.onChange&&t.props.onChange(r,n)}},t.handleSwatchHover=function(e,n){if(l.default.simpleCheckForValidColor(e)){var r=l.default.toState(e,e.h||t.state.oldHue);t.props.onSwatchHover&&t.props.onSwatchHover(r,n)}},t.state=r({},l.default.toState(e.color,0)),t.debounce=(0,u.default)((function(e,t,n){e(t,n)}),100),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"render",value:function(){var t={};return this.props.onSwatchHover&&(t.onSwatchHover=this.handleSwatchHover),i.default.createElement(e,r({},this.props,this.state,{onChange:this.handleChange},t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return r({},l.default.toState(e.color,t.oldHue))}}]),n}(a.PureComponent||a.Component);return t.propTypes=r({},e.propTypes),t.defaultProps=r({},e.defaultProps,{color:{h:250,s:.5,l:.2,a:1}}),t};t.default=p},VVms:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.calculateChange=function(e,t,n){var r=n.getBoundingClientRect(),o=r.width,a=r.height,i="number"==typeof e.pageX?e.pageX:e.touches[0].pageX,u="number"==typeof e.pageY?e.pageY:e.touches[0].pageY,l=i-(n.getBoundingClientRect().left+window.pageXOffset),s=u-(n.getBoundingClientRect().top+window.pageYOffset);l<0?l=0:l>o&&(l=o),s<0?s=0:s>a&&(s=a);var p=l/o,c=1-s/a;return{h:t.h,s:p,v:c,a:t.a,source:"hsv"}}},ccyi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Saturation=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),a=s(o),i=s(n("/FUP")),u=s(n("DzJC")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("VVms"));function s(e){return e&&e.__esModule?e:{default:e}}var p=t.Saturation=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e){"function"==typeof n.props.onChange&&n.throttle(n.props.onChange,l.calculateChange(e,n.props.hsl,n.container),e)},n.handleMouseDown=function(e){n.handleChange(e),window.addEventListener("mousemove",n.handleChange),window.addEventListener("mouseup",n.handleMouseUp)},n.handleMouseUp=function(){n.unbindEventListeners()},n.throttle=(0,u.default)((function(e,t,n){e(t,n)}),50),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.throttle.cancel(),this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this,t=this.props.style||{},n=t.color,r=t.white,o=t.black,u=t.pointer,l=t.circle,s=(0,i.default)({default:{color:{absolute:"0px 0px 0px 0px",background:"hsl("+this.props.hsl.h+",100%, 50%)",borderRadius:this.props.radius},white:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},black:{absolute:"0px 0px 0px 0px",boxShadow:this.props.shadow,borderRadius:this.props.radius},pointer:{position:"absolute",top:-100*this.props.hsv.v+100+"%",left:100*this.props.hsv.s+"%",cursor:"default"},circle:{width:"4px",height:"4px",boxShadow:"0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",borderRadius:"50%",cursor:"hand",transform:"translate(-2px, -2px)"}},custom:{color:n,white:r,black:o,pointer:u,circle:l}},{custom:!!this.props.style});return a.default.createElement("div",{style:s.color,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},a.default.createElement("style",null,"\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "),a.default.createElement("div",{style:s.white,className:"saturation-white"},a.default.createElement("div",{style:s.black,className:"saturation-black"}),a.default.createElement("div",{style:s.pointer},this.props.pointer?a.default.createElement(this.props.pointer,this.props):a.default.createElement("div",{style:s.circle}))))}}]),t}(o.PureComponent||o.Component);t.default=p},japM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleFocus=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),u=(r=i)&&r.__esModule?r:{default:r};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.handleFocus=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span";return function(n){function r(){var e,t,n;l(this,r);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=n=s(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.state={focus:!1},n.handleFocus=function(){return n.setState({focus:!0})},n.handleBlur=function(){return n.setState({focus:!1})},s(n,t)}return p(r,n),a(r,[{key:"render",value:function(){return u.default.createElement(t,{onFocus:this.handleFocus,onBlur:this.handleBlur},u.default.createElement(e,o({},this.props,this.state)))}}]),r}(u.default.Component)}},p8yl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.red=t.getContrastingColor=t.isValidHex=t.toState=t.simpleCheckForValidColor=void 0;var r=a(n("xkGU")),o=a(n("Zss7"));function a(e){return e&&e.__esModule?e:{default:e}}t.simpleCheckForValidColor=function(e){var t=0,n=0;return(0,r.default)(["r","g","b","a","h","s","l","v"],(function(r){if(e[r]&&(t+=1,isNaN(e[r])||(n+=1),"s"===r||"l"===r)){/^\d+%$/.test(e[r])&&(n+=1)}})),t===n&&e};var i=t.toState=function(e,t){var n=e.hex?(0,o.default)(e.hex):(0,o.default)(e),r=n.toHsl(),a=n.toHsv(),i=n.toRgb(),u=n.toHex();return 0===r.s&&(r.h=t||0,a.h=t||0),{hsl:r,hex:"000000"===u&&0===i.a?"transparent":"#"+u,rgb:i,hsv:a,oldHue:e.h||t||r.h,source:e.source}};t.isValidHex=function(e){var t="#"===String(e).charAt(0)?1:0;return e.length!==4+t&&e.length<7+t&&(0,o.default)(e).isValid()},t.getContrastingColor=function(e){if(!e)return"#fff";var t=i(e);return"transparent"===t.hex?"rgba(0,0,0,0.4)":(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3>=128?"#000":"#fff"},t.red={hsl:{a:1,h:0,l:.5,s:1},hex:"#ff0000",rgb:{r:255,g:0,b:0,a:1},hsv:{h:0,s:1,v:1,a:1}};t.default=t},rJ8t:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Block=void 0;var r=p(n("q1tI")),o=p(n("17x9")),a=p(n("/FUP")),i=p(n("QkVN")),u=p(n("p8yl")),l=n("TM95"),s=p(n("uDUr"));function p(e){return e&&e.__esModule?e:{default:e}}var c=t.Block=function(e){var t=e.onChange,n=e.onSwatchHover,o=e.hex,p=e.colors,c=e.width,d=e.triangle,f=e.styles,h=void 0===f?{}:f,b=e.className,v=void 0===b?"":b,g="transparent"===o,y=function(e,n){u.default.isValidHex(e)&&t({hex:e,source:"hex"},n)},w=(0,a.default)((0,i.default)({default:{card:{width:c,background:"#fff",boxShadow:"0 1px rgba(0,0,0,.1)",borderRadius:"6px",position:"relative"},head:{height:"110px",background:o,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},body:{padding:"10px"},label:{fontSize:"18px",color:u.default.getContrastingColor(o),position:"relative"},triangle:{width:"0px",height:"0px",borderStyle:"solid",borderWidth:"0 10px 10px 10px",borderColor:"transparent transparent "+o+" transparent",position:"absolute",top:"-10px",left:"50%",marginLeft:"-10px"},input:{width:"100%",fontSize:"12px",color:"#666",border:"0px",outline:"none",height:"22px",boxShadow:"inset 0 0 0 1px #ddd",borderRadius:"4px",padding:"0 7px",boxSizing:"border-box"}},"hide-triangle":{triangle:{display:"none"}}},h),{"hide-triangle":"hide"===d});return r.default.createElement("div",{style:w.card,className:"block-picker "+v},r.default.createElement("div",{style:w.triangle}),r.default.createElement("div",{style:w.head},g&&r.default.createElement(l.Checkboard,{borderRadius:"6px 6px 0 0"}),r.default.createElement("div",{style:w.label},o)),r.default.createElement("div",{style:w.body},r.default.createElement(s.default,{colors:p,onClick:y,onSwatchHover:n}),r.default.createElement(l.EditableInput,{style:{input:w.input},value:o,onChange:y})))};c.propTypes={width:o.default.oneOfType([o.default.string,o.default.number]),colors:o.default.arrayOf(o.default.string),triangle:o.default.oneOf(["top","hide"]),styles:o.default.object},c.defaultProps={width:170,colors:["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],triangle:"top",styles:{}},t.default=(0,l.ColorWrap)(c)},srvI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.calculateChange=function(e,t,n,r){var o=r.clientWidth,a=r.clientHeight,i="number"==typeof e.pageX?e.pageX:e.touches[0].pageX,u="number"==typeof e.pageY?e.pageY:e.touches[0].pageY,l=i-(r.getBoundingClientRect().left+window.pageXOffset),s=u-(r.getBoundingClientRect().top+window.pageYOffset);if("vertical"===t){var p=void 0;if(s<0)p=359;else if(s>a)p=0;else{p=360*(-100*s/a+100)/100}if(n.h!==p)return{h:p,s:n.s,l:n.l,a:n.a,source:"hsl"}}else{var c=void 0;if(l<0)c=0;else if(l>o)c=359;else{c=360*(100*l/o)/100}if(n.h!==c)return{h:c,s:n.s,l:n.l,a:n.a,source:"hsl"}}return null}},uDUr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlockSwatches=void 0;var r=u(n("q1tI")),o=u(n("/FUP")),a=u(n("3WF5")),i=n("TM95");function u(e){return e&&e.__esModule?e:{default:e}}var l=t.BlockSwatches=function(e){var t=e.colors,n=e.onClick,u=e.onSwatchHover,l=(0,o.default)({default:{swatches:{marginRight:"-10px"},swatch:{width:"22px",height:"22px",float:"left",marginRight:"10px",marginBottom:"10px",borderRadius:"4px"},clear:{clear:"both"}}});return r.default.createElement("div",{style:l.swatches},(0,a.default)(t,(function(e){return r.default.createElement(i.Swatch,{key:e,color:e,style:l.swatch,onClick:n,onHover:u,focusStyle:{boxShadow:"0 0 4px "+e}})})),r.default.createElement("div",{style:l.clear}))};t.default=l},yOY4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Alpha=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=p(a),u=p(n("/FUP")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("THLb")),s=p(n("Nq3d"));function p(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=t.Alpha=function(e){function t(){var e,n,r;c(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleChange=function(e){var t=l.calculateChange(e,r.props.hsl,r.props.direction,r.props.a,r.container);t&&"function"==typeof r.props.onChange&&r.props.onChange(t,e)},r.handleMouseDown=function(e){r.handleChange(e),window.addEventListener("mousemove",r.handleChange),window.addEventListener("mouseup",r.handleMouseUp)},r.handleMouseUp=function(){r.unbindEventListeners()},r.unbindEventListeners=function(){window.removeEventListener("mousemove",r.handleChange),window.removeEventListener("mouseup",r.handleMouseUp)},d(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"render",value:function(){var e=this,t=this.props.rgb,n=(0,u.default)({default:{alpha:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},checkboard:{absolute:"0px 0px 0px 0px",overflow:"hidden",borderRadius:this.props.radius},gradient:{absolute:"0px 0px 0px 0px",background:"linear-gradient(to right, rgba("+t.r+","+t.g+","+t.b+", 0) 0%,\n           rgba("+t.r+","+t.g+","+t.b+", 1) 100%)",boxShadow:this.props.shadow,borderRadius:this.props.radius},container:{position:"relative",height:"100%",margin:"0 3px"},pointer:{position:"absolute",left:100*t.a+"%"},slider:{width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",marginTop:"1px",transform:"translateX(-2px)"}},vertical:{gradient:{background:"linear-gradient(to bottom, rgba("+t.r+","+t.g+","+t.b+", 0) 0%,\n           rgba("+t.r+","+t.g+","+t.b+", 1) 100%)"},pointer:{left:0,top:100*t.a+"%"}},overwrite:r({},this.props.style)},{vertical:"vertical"===this.props.direction,overwrite:!0});return i.default.createElement("div",{style:n.alpha},i.default.createElement("div",{style:n.checkboard},i.default.createElement(s.default,{renderers:this.props.renderers})),i.default.createElement("div",{style:n.gradient}),i.default.createElement("div",{style:n.container,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.default.createElement("div",{style:n.pointer},this.props.pointer?i.default.createElement(this.props.pointer,this.props):i.default.createElement("div",{style:n.slider}))))}}]),t}(a.PureComponent||a.Component);t.default=f}}]);