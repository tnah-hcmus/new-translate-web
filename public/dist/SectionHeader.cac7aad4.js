(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FNPF:function(e,t,n){var a=n("LboF"),o=n("oKbl");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);e.exports=o.locals||{}},IGOO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o,r=function(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e};function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var a=document.createElementNS(e,"svg");a.setAttribute("id","react-confirm-alert-firm-svg"),a.setAttribute("class","react-confirm-alert-svg"),a.appendChild(n),document.body.appendChild(a)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,u.render)(c.default.createElement(f,e),t)}(e)};var i=n("q1tI"),c=d(i),s=d(n("17x9")),u=n("i8i4");function d(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(p,i.Component),r(p,[{key:"render",value:function(){var n=this,e=this.props,t=e.title,a=e.message,o=e.buttons,r=e.childrenElement,l=e.customUI;return c.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(e){return n.overlay=e},onClick:this.handleClickOverlay},c.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():c.default.createElement("div",{className:"react-confirm-alert-body"},t&&c.default.createElement("h1",null,t),a,r(),c.default.createElement("div",{className:"react-confirm-alert-button-group"},o.map(function(e,t){return c.default.createElement("button",{key:t,onClick:function(){return n.handleClickButton(e)},className:e.className},e.label)})))))}}]),o=a=p,a.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,closeOnClickOutside:s.default.bool,closeOnEscape:s.default.bool,willUnmount:s.default.func,afterClose:s.default.func,onClickOutside:s.default.func,onKeypressEscape:s.default.func},a.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},o);function p(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=r=m(this,(e=p.__proto__||Object.getPrototypeOf(p)).call.apply(e,[this].concat(a)))).handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,a=t.onClickOutside,o=e.target===r.overlay;n&&o&&(a(),r.close())},r.close=function(){var e,t,n,a=r.props.afterClose;document.body.classList.remove("react-confirm-alert-body-element"),(e=document.getElementById("react-confirm-alert"))&&((0,u.unmountComponentAtNode)(e),e.parentNode.removeChild(e)),t=a,(n=document.getElementById("react-confirm-alert-firm-svg")).parentNode.removeChild(n),document.body.children[0].classList.remove("react-confirm-alert-blur"),t()},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,a=t.onKeypressEscape,o=27===e.keyCode;n&&o&&(a(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,a=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:a,onClose:r.close})},m(r,t)}t.default=f},oKbl:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"body.react-confirm-alert-body-element{overflow:hidden}.react-confirm-alert-blur{filter:url(#gaussian-blur);filter:blur(2px);-webkit-filter:blur(2px)}.react-confirm-alert-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99;background:rgba(255,255,255,0.9);display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:center;-ms-align-items:center;align-items:center;opacity:0;-webkit-animation:react-confirm-alert-fadeIn 0.5s 0.2s forwards;-moz-animation:react-confirm-alert-fadeIn 0.5s 0.2s forwards;-o-animation:react-confirm-alert-fadeIn 0.5s 0.2s forwards;animation:react-confirm-alert-fadeIn 0.5s 0.2s forwards}.react-confirm-alert-body{font-family:Arial, Helvetica, sans-serif;width:400px;padding:30px;text-align:left;background:#fff;border-radius:10px;box-shadow:0 20px 75px rgba(0,0,0,0.13);color:#666}.react-confirm-alert-svg{position:absolute;top:0;left:0}.react-confirm-alert-body>h1{margin-top:0}.react-confirm-alert-body>h3{margin:0;font-size:16px}.react-confirm-alert-button-group{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:flex-start;margin-top:20px}.react-confirm-alert-button-group>button{outline:none;background:#333;border:none;display:inline-block;padding:6px 18px;color:#eee;margin-right:10px;border-radius:5px;font-size:12px;cursor:pointer}@-webkit-keyframes react-confirm-alert-fadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes react-confirm-alert-fadeIn{from{opacity:0}to{opacity:1}}@-o-keyframes react-confirm-alert-fadeIn{from{opacity:0}to{opacity:1}}@keyframes react-confirm-alert-fadeIn{from{opacity:0}to{opacity:1}}\n",""]),e.exports=t},oZis:function(e,t,n){"use strict";n.r(t);var a=n("J4zp"),b=n.n(a),y=n("q1tI"),v=n.n(y),o=n("FjVW"),r=n("/MKj"),h=n("IGOO"),g=(n("FNPF"),n("OLdS")),k=Object(y.lazy)(function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,"/H3m"))}),l={deleteTab:o.b};t.default=Object(r.b)(null,l)(function(e){var t=Object(y.useState)(!1),n=b()(t,2),a=n[0],o=n[1],r=Object(y.useState)(!1),l=b()(r,2),i=l[0],c=l[1],s=Object(y.useContext)(g.a),u=s.tabID,d=s.link,m=s.title,f=s.subReddit,p=s.upvotes;Object(y.useEffect)(function(){window.addEventListener("beforeunload",function(e){return e.preventDefault(),e.returnValue="Nhớ kiểm tra xem lưu chưa nhé"})},[]);return v.a.createElement("header",{className:"section-header"},v.a.createElement("div",{className:"section-wrapper"},v.a.createElement("h1",null,v.a.createElement("svg",{className:"section-icon"},v.a.createElement("use",{xlinkHref:e.iconHref})),m?m+" (Subreddit: ".concat(f," | ").concat(p," points)"):"Tab này chưa có bài dịch nào"),v.a.createElement("div",null,v.a.createElement("form",{onSubmit:e.handleSubmitLink,style:{display:"flex"}},v.a.createElement("input",{className:"demo-input",name:"link","aria-label":"Link to translate",placeholder:"Nhập link reddit để bắt đầu dịch",defaultValue:d.replace(/(\/+)$/,"")||"",disabled:""!==d}),v.a.createElement("button",{className:"demo-button"},"Bắt đầu dịch")),v.a.createElement("p",null,"Mở ",v.a.createElement("a",{href:d?d.replace(/(\/+)$/,""):"blank"!==e.category?"https://www.reddit.com/".concat(e.category):"https://www.reddit.com/",target:"_blank"},"link reddit này",v.a.createElement("span",{className:"u-visible-to-screen-reader"},"(opens in new window)"))," trong tab mới."),v.a.createElement("div",{className:"wrap",style:{justifyContent:"space-between",marginRight:"10%"}},v.a.createElement("div",{style:{marginBottom:"5px"}},v.a.createElement("button",{className:"demo-button",id:u+"-preview",onClick:e.previewContent},"Preview"),v.a.createElement("button",{className:"demo-button",id:u+"-note",onClick:function(){return o(!0)}},"Note"),v.a.createElement("button",{className:"demo-button",id:u+"-save",onClick:e.savePost},"Save"),v.a.createElement("button",{className:"demo-button",id:u+"-delete",onClick:function(){Object(h.confirmAlert)({title:"Bạn chắc chứ ?",message:"Bạn thật sự muốn xoá tab này ?",buttons:[{label:"Xoá",onClick:function(){return e.deleteTab(u,e.category)}},{label:"Mình nhầm"}]})}},"Delete")),v.a.createElement("form",{style:{display:"flex"},onSubmit:e.handleSubmitCredit},v.a.createElement("input",{className:"demo-input",name:"credit",id:u+"-credit","aria-label":"credit",placeholder:"Thêm credit",defaultValue:""}),v.a.createElement("button",{className:"demo-button"},"Thêm credit"))),v.a.createElement("button",{className:"demo-button",id:u+"-download",onClick:function(){e.isVideo&&(c(!0),document.getElementById(u+"-download").innerHTML="Downloading")},style:{marginTop:"10px"}},e.isVideo?"Download Video (beta)":"No video found"),i&&v.a.createElement("iframe",{src:"https://down-583a6.web.app/?video="+btoa(e.fallbackUrl)+"&audio="+btoa(e.url+"/audio"),style:{display:"none"}}))),v.a.createElement(y.Suspense,{fallback:v.a.createElement("div",null),key:u+"-note-suspense"},v.a.createElement(k,{isOpen:a,key:u+"-note",name:u,saveNote:e.saveNote,close:function(){o(!1)}})))})}}]);