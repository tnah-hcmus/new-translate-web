(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ERIh:function(e,t,o){"use strict";o.r(t);function r(e){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"header__title"},e.title),e.subtitle&&l.a.createElement("h2",{className:"header__subtitle"},l.a.createElement(d.b,{to:"/"},e.subtitle))))}var a=o("i8i4"),n=o.n(a),i=o("q1tI"),l=o.n(i),d=o("55Ip"),c=o("Ty5D"),p=o("/MKj");r.defaultProps={title:"Không tìm thấy trang cần tìm",subtitle:"Quay lại trang chủ"};function s(){return"xxyyx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}var m=r,b=o("ANjH"),u=o("sINF"),g=o("DzJC"),f=o.n(g),h=o("RIqP"),x=o.n(h),w=o("m6fk"),v=[],y=[{name:"blank"}],k=o("uk3O"),_={},z=o("VgLe"),M={mode:"light",color:""},R=o("UJf/"),C=(s(),s(),s(),s(),Object(b.c)({category:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:y,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w.a:return 0===e.filter(function(e){return e.name===t.payload.name}).length?[].concat(x()(e),[t.payload]):e;case w.c:return"blank"!==t.payload?e.filter(function(e){return e.name!==t.payload}):e;default:return e}},tabs:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:v,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case w.b:return 0===e.filter(function(e){return e.link===t.payload.link}).length||""===t.payload.link?[].concat(x()(e),[t.payload]):e;case w.f:return e.map(function(e){return e.id===t.payload.id&&(e.trans=t.payload.trans),e});case w.g:return e.map(function(e){return e.id===t.payload.id?t.payload.info:e});case w.e:return e.filter(function(e){return e.id!==t.payload.id||e.category!==t.payload.category});case w.d:return v;default:return e}},replies:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:_,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case k.a:return e[t.payload.tabID]||(e[t.payload.tabID]={}),e[t.payload.tabID][t.payload.id]=t.payload.replies,e;case k.c:return delete e[t.payload.tabID][t.payload.id],e;case k.b:return delete e[t.payload],e;case k.d:return e[t.payload.newTabID]=e[t.payload.currentTabID],delete e[t.payload.currentTabID],e;default:return e}},theme:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:M,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case z.c:return e.mode=t.payload,e;case z.b:return e.color=t.payload,e;case z.a:return M;default:return e}},credit:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;switch(t.type){case R.a:return t.payload;default:return e}}})),P=function(){try{var e=localStorage.getItem("reddit-app-712");if(null===e)return;return JSON.parse(e)}catch(e){return}}()||{},I=Object(b.d)(C,P,Object(b.a)(u.a));I.subscribe(f()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("reddit-app-712",t)}catch(e){}}({category:I.getState().category,tabs:I.getState().tabs,replies:I.getState().replies,theme:I.getState().theme,credit:I.getState().credit})},1e3));var S=I,E=Object(i.lazy)(function(){return o.e(4).then(o.bind(null,"6mCd"))}),j=l.a.createElement(p.a,{store:S},l.a.createElement(d.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",component:E,exact:!0}),l.a.createElement(c.a,{component:m})))))),O=(o("PGGC"),o("oC12"));n.a.render(j,document.getElementById("app")),O.a()},PGGC:function(e,t,o){var r=o("LboF"),a=o("j2Vk");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var n={insert:"head",singleton:!1};r(a,n);e.exports=a.locals||{}},"UJf/":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r="set_credit"},VgLe:function(e,t,o){"use strict";o.d(t,"c",function(){return r}),o.d(t,"b",function(){return a}),o.d(t,"a",function(){return n});var r="set_mode",a="set_color",n="reset_theme"},j2Vk:function(e,t,o){(t=o("JPst")(!1)).push([e.i,':root{--main-color: #fff;--bg-color: hsl(0,0%,96%);--font-color:  hsl(0,0%,22%);--em-font-color: hsl(222, 53%, 50%);--link-color: hsl(0,0%,22%);--title-color:  hsl(0,0%,44%);--border-color:  hsl(0,0%,88%);--color-accent:    hsl(222, 53%, 50%);--bg-input-color: hsl(0,0%,96%);--nav-hover: hsla(0,0%,0%,.1);--overlay: rgba(255, 255, 255, 0.75);--gradient-style: radial-gradient(\r\n      circle,\r\n      #f6ff1c,\r\n      #ffdc00,\r\n      #ffb800,\r\n      #ff951a\r\n    );--gradient-size: 4px;--gradient-shadow: #ffb800}.toggle-dark-mode:checked,.toggle-dark-mode:checked+*{--gradient-style: radial-gradient(\r\n      circle,\r\n      #b8b8b8,\r\n      #cacac8,\r\n      #d3d3d2,\r\n      #e9e9e7,\r\n      #fffffe\r\n    );--gradient-size: 3px;--gradient-shadow: #fff}@font-face{font-family:\'Source Code Pro\';font-style:normal;font-weight:400;src:local("Source Code Pro"),local("SourceCodePro"),url(/public/assets/fonts/SourceCodePro-Regular.ttf) format("truetype")}*{box-sizing:border-box}html{height:100%;font-family:\'BlinkMacSystemFont\', \'Lucida Grande\', \'Segoe UI\', Ubuntu, Cantarell, sans-serif;font-size:14px;line-height:1.5;-webkit-user-drag:none;cursor:default;overflow:hidden;color:var(--font-color) !important;background-color:var(--main-color)}html body{margin:0;height:100%;display:flex}html body a{cursor:pointer;text-decoration:none;border-bottom:1px dashed;outline:none;color:var(--color-link)}html body a[target],html body a[href^="https://"],html body a[href^="http://"]{border-bottom:1px solid}html body a:hover,html body a:focus{border-bottom:none}html body button{cursor:default}html body h1{margin-top:0;line-height:1.5;font-size:1.5em;font-weight:600}html body h2{margin-top:0;line-height:1.5;font-size:1.3em;font-weight:normal}html body h3{margin-top:0;line-height:1.5;font-size:1.12em;font-weight:600}html body img{-webkit-user-drag:none}html body svg{fill:currentColor}html body blockquote{margin:20px 0 30px;padding-left:20px;border-left:5px solid var(--border-color);line-height:25px}.u-avoid-clicks{pointer-events:none}.u-visible-to-screen-reader{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.no-display{display:none}.wrap{height:100%;width:100%;display:flex;flex-wrap:wrap}.shown{display:block !important}.hide{display:none !important}.content{flex:1;position:relative;overflow:auto}.widget__message{font:inherit;padding:0.3rem;margin-left:2rem;margin-bottom:1px}.toggle-dark-mode{-webkit-appearance:none;outline:0;position:absolute;z-index:2;top:10px;right:20px;width:20px;height:20px;border-radius:50%;background-image:var(--gradient-style);box-shadow:0 0 14px var(--gradient-size) var(--gradient-shadow);cursor:pointer}@media only screen and (max-width: 768px){.content *{width:100%}}.demo-wrapper .demo-toggle-button:before,.demo-wrapper .demo-toggle-button:after{content:"";position:absolute;left:0;width:2px;height:50.2%;background-color:#e0e0e0;transition:transform 0.2s cubic-bezier(0.4, 0.1, 0, 1)}.demo-wrapper .demo-toggle-button:focus:before,.demo-wrapper .demo-toggle-button:focus:after{background-color:currentColor}.demo-wrapper .content-wrapper .demo-box,.demo-wrapper .content-wrapper .demo-input-box{display:none;position:relative;padding:2em;margin-top:1em;margin-bottom:2em;border-radius:6px;border:1px solid var(--border-color);background-color:var(--bg-input-color) !important;color:var(--text)}.demo-wrapper .content-wrapper .demo-box:before,.demo-wrapper .content-wrapper .demo-input-box:before{content:"";position:absolute;top:-11px;width:20px;height:20px;background-color:inherit;border-top:inherit;border-right:inherit;border-top-right-radius:3px}@keyframes demo-box-fade-in{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}.demo{min-width:100%}.demo-wrapper{position:relative;max-width:100%;margin:0 auto 0 0.5rem;padding:0 2rem}.demo-wrapper .demo-toggle-button{position:relative;display:block;margin:0;padding:.5em 1.5em;line-height:1.5;font:inherit;font-weight:600;font-size:1.2em;text-align:left;border:none;color:inherit;background-color:transparent;transition:border-color .12s;outline:none}.demo-wrapper .demo-toggle-button:before{top:0;transform-origin:bottom center;transform:translateX(0.7em) rotate(-30deg) scale(0.75)}.demo-wrapper .demo-toggle-button:after{bottom:0;transform-origin:top center;transform:translateX(0.7em) rotate(30deg) scale(0.75)}.demo-wrapper .is-open .demo-toggle-button:before,.demo-wrapper .is-open .demo-toggle-button:after{transform:rotate(0deg)}.demo-wrapper .demo-meta{margin-top:.2em;font-size:11px;font-weight:300;text-transform:uppercase;color:var(--title-color);white-space:nowrap}.demo-wrapper .content-wrapper{display:flex;max-width:100%}.demo-wrapper .content-wrapper .demo-box{-moz-user-select:-moz-text;-khtml-user-select:text;-webkit-user-select:text;-ms-user-select:text;user-select:text}.demo-wrapper .content-wrapper .demo-box:before{transform:rotate(-45deg)}.demo-wrapper .content-wrapper .demo-box>p:first-child{margin-top:0}.demo-wrapper .content-wrapper .demo-box h5{font-size:1em;margin-bottom:.6em}.demo-wrapper .content-wrapper .demo-box-display{display:inline-block;width:55%;margin-right:5%;word-break:unset;word-wrap:unset;overflow-wrap:unset;-webkit-hyphens:unset;-moz-hyphens:unset;-ms-hyphens:unset;hyphens:unset;animation:demo-box-fade-in 0.2s cubic-bezier(0, 0.2, 0.2, 0.96)}.demo-wrapper .content-wrapper .demo-input-box{max-width:50%}.demo-wrapper .content-wrapper .demo-input-box:before{top:40%;left:-11px;transform:rotate(-135deg)}.demo-wrapper .content-wrapper .demo-input-box .expand{overflow:hidden;border-width:0px;width:100%;height:100%;border:none;font:inherit;resize:none;background-color:var(--bg-input-color);color:var(--text)}.demo-wrapper .content-wrapper .demo-input-box-display{display:inline-block;width:50%;margin-left:5%;animation:demo-box-fade-in 0.2s cubic-bezier(0, 0.2, 0.2, 0.96)}.demo-wrapper .content-wrapper .demo-controls{display:flex;align-items:center}.demo-wrapper .content-wrapper .demo-controls .demo-response{flex:1;word-break:unset;word-wrap:unset;overflow-wrap:unset;-webkit-hyphens:unset;-moz-hyphens:unset;-ms-hyphens:unset;hyphens:unset}.demo-wrapper .content-wrapper .demo-meta-divider{margin:0 .5em}.demo-button{align-self:flex-start;margin-right:1em;border:2px solid;border-radius:4px;font:inherit;font-size:1.2em;padding:.4em 1.2em;color:inherit;background-color:transparent}.demo-button:focus{outline:none}.demo-button:active{border-color:var(--border-color);background-color:var(--color-accent);transition:all 250ms}.demo-button.smooth-disappear:focus{outline:inherit;border-color:inherit;background-color:inherit}.demo-input{flex:1;border:2px solid var(--border-color);border-radius:4px;font:inherit;font-size:1.2em;padding:.4em .8em;margin-right:0.5rem;color:inherit;width:75%;background-color:#e0e0e0}.demo-input :focus{outline:none;border-color:#ccc;background-color:white}.smooth-appear{opacity:1;transition:opacity .5s ease-in-out}.disappear{opacity:0}@media only screen and (max-width: 768px){.section-wrapper form{display:block !important}.demo .demo-wrapper{margin-left:0;padding-left:0.75em}.demo .demo-wrapper .content-wrapper{display:block}.demo .demo-wrapper .content-wrapper .demo-box{padding:1em;margin-bottom:1em}.demo .demo-wrapper .content-wrapper .demo-input{width:100%;margin-bottom:6px}.demo .demo-wrapper .content-wrapper .demo-box-display{width:100%}.demo .demo-wrapper .content-wrapper .demo-input-box-display{width:100%}.demo .demo-wrapper .content-wrapper .demo-input-box{max-width:100%;margin-left:0}.demo .demo-wrapper .content-wrapper .demo-input-box::before{top:-11px;left:50%;transform:rotate(-45deg)}.demo-button{margin-bottom:6px}}.section{position:absolute;top:0;left:0;right:0;bottom:0;overflow-x:hidden;color:var(--color-accent);pointer-events:none;visibility:hidden;opacity:0;transform:translateX(-20px);transition:visibility 0s .12s linear , opacity .12s ease-in, transform .12s ease-in}.section.is-shown{pointer-events:auto;visibility:visible;opacity:1;transform:translateX(0);transition:visibility 0s 0s linear , opacity .36s ease-out, transform .36s ease-out}.section h3,.section p{color:var(--font-color)}.section .section-wrapper{position:relative;max-width:90% !important;margin:0 auto;padding:2rem 2rem 1rem 2rem;border-bottom:1px solid var(--border-color)}.section .section-wrapper .section-icon{width:32px;height:32px;vertical-align:middle;margin-right:.5em}.section .title-panel{max-width:90%;position:relative;margin:0 auto;margin-bottom:2rem;padding:1rem 2rem 1rem 2rem;border-bottom:1px solid var(--border-color)}.section .title-panel .title-wrapper{margin:0;padding:.5em 1.5em;line-height:1.5;font:inherit;font-weight:600;font-size:1.2em;text-align:left;color:var(--color-accent) !important;-moz-user-select:-moz-text;-khtml-user-select:text;-webkit-user-select:text;-ms-user-select:text;user-select:text}.section .title-panel .title-wrapper p{padding:0;margin-bottom:5px;color:inherit}.section .demo-input-search{flex:1;border:2px solid var(--border-color);border-radius:4px;font:inherit;font-size:1.2em;padding:.4em .8em;margin-right:0.5rem;color:inherit;background-color:#e0e0e0;margin-left:2.5rem;width:90%}.section .demo-input-search:focus{outline:none;border-color:#ccc;background-color:white}.section .restore{font-weight:600;font-size:1.2em;text-align:left;color:var(--color-accent) !important}.section .panel{display:none;width:85%;margin:0 auto}.popup{position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);opacity:0;visibility:hidden;transition:.3s ease}.show-popup .popup{opacity:1;visibility:visible}.popup>iframe{position:absolute;top:20%;left:50%;margin-left:-40%}.react-confirm-alert-body{margin-left:20% !important;font:inherit !important;text-align:center !important;align-items:center !important}.react-confirm-alert-body .react-confirm-alert-button-group{margin-left:15%}.react-confirm-alert-body .react-confirm-alert-button-group button{font:inherit !important;margin-right:20% !important;font-weight:bold !important;border:none !important;color:#fff !important;background-color:var(--color-accent) !important}@media only screen and (max-width: 768px){.section.section-wrapper.demo-input-search{margin-left:0}}.checkbox-label{display:inline-block;position:relative;margin-left:6px;cursor:pointer;font-size:18px;line-height:18px;height:18px;width:18px;clear:both}.checkbox-label input{position:absolute;opacity:0;cursor:pointer}.checkbox-label input:checked ~ .checkbox-custom{background-color:var(--bg-color);border-radius:5px;opacity:1;-webkit-transform:rotate(0deg) scale(1);-ms-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1);border:2px solid var(--color-accent)}.checkbox-label input:checked ~ .checkbox-custom:before{left:-3px;top:-3px;width:24px;height:24px;-webkit-transform:rotate(0deg) scale(3);-ms-transform:rotate(0deg) scale(3);transform:rotate(0deg) scale(3);transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out;opacity:0;z-index:999}.checkbox-label input:checked ~ .checkbox-custom:after{-webkit-transform:rotate(45deg) scale(1);-ms-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1);left:3px;top:-1px;width:5.5px;height:10.5px;opacity:1;border:solid var(--color-accent);border-width:0 2px 2px 0;background-color:transparent;border-radius:0}.checkbox-label .checkbox-custom{position:absolute;left:0px;top:3.5px;width:18px;height:18px;background-color:transparent;border-radius:5px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out;border:2px solid var(--link-color)}.checkbox-label .checkbox-custom:after{position:absolute;content:"";left:12px;top:12px;width:0px;height:0px;border-radius:5px;border:solid var(--color-accent);border-width:0 3px 3px 0;opacity:1;-webkit-transform:rotate(0deg) scale(0);-ms-transform:rotate(0deg) scale(0);transform:rotate(0deg) scale(0);transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out}.checkbox-label .checkbox-custom:before{position:absolute;content:"";left:10px;top:10px;width:0px;height:0px;border-radius:5px;border:2px solid var(--color-accent);-webkit-transform:rotate(0deg) scale(0);-ms-transform:rotate(0deg) scale(0);transform:rotate(0deg) scale(0)}.toggle-nav-bar,.toggle-nav-bar-show{border-radius:2px;color:var(--font-color);background-color:var(--bg-input-color);text-align:center;height:25px;border:1px solid var(--border-color);vertical-align:middle;font:inherit;box-shadow:0px 0px 1px var(--border-color);position:absolute}.toggle-nav-bar:after,.toggle-nav-bar-show:after{content:"";width:16px;height:16px;color:var(--font-color);background-color:var(--bg-input-color);display:block;position:absolute;top:3px;border:1px solid var(--border-color);border-left:none;border-bottom:none;border-radius:2px}.nav-button,.nav .add-button,.nav-footer-button{width:100%;line-height:2;font:inherit;font-size:13px;color:inherit;border:none;background-color:transparent;cursor:default;outline:none;text-align:center}.nav-hide,.nav-show{transition:left .4s ease-in;-webkit-transition:left .4s ease-in}.toggleNav{left:-340px;z-index:100;position:fixed;height:100%;overflow-y:auto}.nav-hide{left:-340px;position:absolute}.nav-show{left:0px;position:relative}.toggle-nav-bar{float:left}.toggle-nav-bar span{position:relative;z-index:102}.toggle-nav-bar:after{right:-9px;transform:rotate(47deg) skew(5deg)}.toggle-nav-bar-show{float:none;margin-left:287px;z-index:100}.toggle-nav-bar-show:after{left:-9px;transform:rotate(-135deg) skew(5deg)}.toggle-nav-bar-show span{position:relative;z-index:101}.nav{width:340px;overflow-x:hidden;color:var(--title-color);border-right:1px solid var(--border-color);background-color:var(--bg-color);height:100%}.nav .is-shown{visibility:visible;opacity:1}.nav-header{margin-top:1em;position:relative;padding:1rem;margin-bottom:1rem;border-bottom:1px solid var(--border-color)}.nav-header-icon{position:relative;height:70px;width:36px}.nav-title{text-transform:uppercase;font-weight:300;line-height:1;margin:0;display:flex;align-items:center;justify-content:center}.nav-title strong{font-weight:600;color:var(--em-font-color)}.nav-item{padding:.5em 0}.nav-icon{width:16px;height:16px;vertical-align:top;margin-right:.25rem}.nav-category{margin:.5em 0;padding-left:2rem;font-size:11px;font-weight:normal;text-transform:uppercase}.nav-category .category-delete{background-color:transparent;font-size:20px;border:none;display:inline;padding-right:20px}.nav-button{display:block;padding:.3rem;padding-left:calc(2rem + 16px + .5rem);text-align:left}.nav-button:hover,.nav-button:focus:not(.is-selected){background-color:var(--nav-hover)}.nav-button.is-selected{background-color:var(--color-accent);color:#fff}.nav-button.is-selected:focus{opacity:.8}.nav-button.is-selected em{color:#fff}.nav-button em{font-style:normal;font-weight:600;color:var(--em-font-color);pointer-events:none}.nav .add-button{display:inline-block;position:relative;padding-right:2rem;margin:0;top:6px}.nav .add-button:hover,.nav .add-button:focus:not(.is-selected){background-color:var(--nav-hover)}.nav-footer{margin-top:1rem;padding:2rem;border-top:1px solid var(--border-color);text-align:center}.nav-footer-icon{width:calc(770px / 6.5);height:calc(88px / 6.5)}.nav-footer a{outline:none}.nav-footer-button{display:block;padding:0;margin-bottom:.75rem}.nav-footer-button:focus{color:var(--em-font-color)}@media print{body{background:none;color:black !important;font-size:70%;margin:0;padding:0}h1{font-size:22px}.nav,button,.demo-box:before,header p{display:none}.demo-box,h2,pre,code{padding:0 !important;margin:0 !important}header{padding:0 0 10px 0}code,.support{font-size:10px}}.ReactModalPortal .ReactModal__Content .close:before,.ReactModalPortal .ReactModal__Content .close:after{position:absolute;left:15px;content:\' \';height:33px;width:2px;background-color:#18284e}.preview-modal{background:#ffffff;overflow-y:auto;max-height:90%;font:inherit;color:var(--color-accent);max-width:80%;outline:none;padding:3.2rem;text-align:left;white-space:pre-wrap;border:5px solid var(--color-accent);border-radius:2rem;word-break:unset;word-wrap:unset;overflow-wrap:unset;-webkit-hyphens:unset;-moz-hyphens:unset;-ms-hyphens:unset;hyphens:unset}.preview-modal .expand{overflow:hidden;border-width:0px;width:100%;height:100%;border:none;font:inherit;resize:none;background-color:var(--bg-input-color);color:var(--text)}.preview-modal .button{border:2px solid var(--color-accent);display:inline-block;border-radius:10px;padding:15px;color:var(--color-accent);background-color:#ffffff;text-decoration:none;vertical-align:middle;-webkit-tap-highlight-color:transparent;text-align:center;letter-spacing:.5px;transition:.2s ease-out;display:inline-block;margin:1.2rem .6rem;font-weight:bold}.preview-modal .button-click{border:none;color:#ffffff;background-color:var(--color-accent)}.ReactModalPortal>div{opacity:0}.ReactModalPortal .ReactModal__Overlay{align-items:center;display:flex;justify-content:center;word-break:break-all;transition:opacity 200ms ease-in-out}.ReactModalPortal .ReactModal__Overlay--after-open{opacity:1;background-color:var(--overlay) !important}.ReactModalPortal .ReactModal__Overlay--before-close{opacity:0}.ReactModalPortal .ReactModal__Content{margin-left:340px;position:relative}.ReactModalPortal .ReactModal__Content .modal-panel{display:flex;align-items:baseline;justify-content:space-between}.ReactModalPortal .ReactModal__Content .modal__title{margin:0 0 1.6rem 0;font-size:1.5rem}.ReactModalPortal .ReactModal__Content .close{position:absolute;right:16px;top:13px;width:32px;height:32px;opacity:0.3}.ReactModalPortal .ReactModal__Content .close:hover{opacity:1}.ReactModalPortal .ReactModal__Content .close:before{transform:rotate(45deg)}.ReactModalPortal .ReactModal__Content .close:after{transform:rotate(-45deg)}\n',""]),e.exports=t},m6fk:function(e,t,o){"use strict";o.d(t,"b",function(){return r}),o.d(t,"e",function(){return a}),o.d(t,"d",function(){return n}),o.d(t,"g",function(){return i}),o.d(t,"a",function(){return l}),o.d(t,"c",function(){return d}),o.d(t,"f",function(){return c});var r="add_tab",a="remove_tab",n="remove_all_tabs",i="update_tab",l="add_category",d="delete_category",c="update_comments"},oC12:function(e,o,r){"use strict";(function(e){r.d(o,"a",function(){return t});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function t(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}}).call(this,r("8oxB"))},uk3O:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"c",function(){return a}),o.d(t,"b",function(){return n}),o.d(t,"d",function(){return i});var r="add_replies",a="delete_replies",n="delete_all_replies",i="replace-tabID"}},[["ERIh",17,0,15,20]]]);