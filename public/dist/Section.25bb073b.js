(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FjVW:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return s});var a=n("m6fk"),r=function(e,t){return{type:a.e,payload:{id:e,category:t}}},i=function(t){return t.id=t.id||"xxyyx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),function(e){e({type:a.b,payload:t})}},o=function(e,t){return{type:a.g,payload:{id:e,info:t}}},s=function(e,t){return{type:a.f,payload:{id:e,trans:t}}}},OLdS:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createContext();t.a=r},SN2k:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});var a=n("m6fk"),r=function(e){return{type:a.c,payload:e}},i=function(e){return{type:a.a,payload:{name:e}}}},XWTS:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createContext();t.a=r},hrI8:function(e,t,n){"use strict";n.r(t);function s(e){return(new DOMParser).parseFromString("<!doctype html><body>"+e,"text/html").body.textContent}function c(e){var a=0,t=e.all_awardings.reduce(function(e,t){if("Platinum"!==t.name&&"Gold"!==t.name&&"Silver"!==t.name)return e;a++;var n=1<t.count?"s":"";return e+"x".concat(t.count," ").concat(t.name.toLowerCase()).concat(n," - ")},"");return a<3?e.all_awardings.reduce(function(e,t){return"Platinum"!==t.name&&"Gold"!==t.name&&"Silver"!==t.name&&a<3?(a++,e+"x".concat(t.count," ").concat("Press F"===t.name?"press F":t.name.toLowerCase().replace(/\(pro\)/,"pro")," - ")):e},t).replace(/(\ \-\ )$/,""):t.replace(/(\ \-\ )$/,"")}function l(e){if(1e3<e){var t=Math.floor(e/1e3);return t+"."+Math.floor((e-1e3*t)/100)+"k points"}return"".concat(e,1<e||e<-1?" points":" point")}function d(e,t){if(e)return Array.prototype.map.call(e,function(e){if(e.data.author)return{id:e.data.id,upvotes:l(parseInt(e.data.ups)),author:"u/"+e.data.author,awards:e.data.all_awardings?s(c(e.data)):"",parent:e.data.parent_id.slice(3,e.data.parent_id.length),prefixed:t,content:e.data.body,replies:""!==e.data.replies?"/"+e.data.id:"none"}}).filter(function(e){return!!e})}function g(e){return R.a.createElement("div",{className:e.active?"demo-box demo-box-display":"demo-box"},R.a.createElement("div",{className:"demo-controls"},R.a.createElement("span",{className:"demo-response",id:e.name+"-span"})),R.a.createElement(H.a,{source:(e.content,(new DOMParser).parseFromString("<!doctype html><body>"+e.content,"text/html").body.textContent)}))}function w(t){var e=Object(N.useContext)(J.a),n=e.addTransComment,a=e.editTransComment;return R.a.createElement("div",{className:t.active?"demo-input-box demo-input-box-display":"demo-input-box"},R.a.createElement("div",{className:"demo-controls"},R.a.createElement("span",{className:"demo-response",id:t.name+"-span"})),R.a.createElement("textarea",{name:"textarea",id:t.name+"-trans",className:"expand",onKeyDown:function(e){e.target.style.height="100%",e.target.style.height="".concat(e.target.scrollHeight,"px")},onFocus:function(){n(t.name,t.level,t.prefixed,t.parent,t.author,t.description)},onBlur:function(e){a(t.name,e.target.value)}}))}var a=n("o0o1"),p=n.n(a),r=n("yXPU"),i=n.n(r),o=n("RIqP"),k=n.n(o),u=n("lwsE"),m=n.n(u),f=n("W8MJ"),h=n.n(f),b=n("PJYZ"),v=n.n(b),y=n("7W2i"),x=n.n(y),E=n("a1gu"),_=n.n(E),I=n("Nsbk"),C=n.n(I),S=n("lSNA"),T=n.n(S),N=n("q1tI"),R=n.n(N),j=n("/MKj"),D=n("vDqi"),O=n.n(D),P=function(){var r=i()(p.a.mark(function e(t,n,a,r){var i,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(t.replace(/(\/+)$/,"")+n+".json");case 2:if(i=e.sent,null===(o=i.data[1].data.children[0].data.replies.data.children||null))return e.abrupt("return",n);e.next=6;break;case 6:return e.abrupt("return",[d(o,a+">"),r]);case 7:case"end":return e.stop()}},e)}));return function(e,t,n,a){return r.apply(this,arguments)}}(),B=function(){var t=i()(p.a.mark(function e(a){var r,i,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(a.replace(/(\/+)$/,"")+".json");case 2:return r=e.sent,i=r.data[0].data.children[0].data,o=r.data[1].data.children,e.abrupt("return",[(n=void 0,n=(t=i).media?t.media.reddit_video:null,{subReddit:t.subreddit_name_prefixed,shortenLink:"https://redd.it/"+t.id,title:s(t.title),text:t.selftext,awards:s(c(t)),author:"u/"+t.author,upvotes:l(parseInt(t.ups)),id:t.id,fallbackUrl:n?n.fallback_url.split("?")[0]:"",url:t.url,isVideo:t.is_video,isImage:"image"===t.post_hint||"imgur.com"===t.domain}),d(o,"")]);case 6:case"end":return e.stop()}var t,n},e)}));return function(e){return t.apply(this,arguments)}}(),L=n("SN2k"),A=n("FjVW"),$=n("UJf/"),M=n("uk3O"),U=n("J4zp"),F=n.n(U),W=n("IujW"),H=n.n(W),J=n("XWTS"),V=n("OLdS");var q={addReplies:function(e,t,n){return{type:M.a,payload:{tabID:e,id:t,replies:n}}},deleteReplies:function(e,t){return{type:M.c,payload:{tabID:e,id:t}}}},z=Object(j.b)(function(e,t){return{raw_replies:e.replies}},q)(function a(r){var e=Object(N.useState)(!1),t=F()(e,2),n=t[0],i=t[1],o=Object(N.useState)(!1),s=F()(o,2),c=s[0],l=s[1],d=Object(N.useState)([]),p=F()(d,2),u=p[0],m=p[1],f=Object(N.useContext)(V.a),h=f.link,b=f.tabID,v=Object(N.useContext)(J.a).editTransComment;Object(N.useEffect)(function(){var e;r.raw_replies&&r.raw_replies[b]&&r.raw_replies[b][r.info.id]&&(e=k()(r.raw_replies[b][r.info.id]),m([].concat(k()(u),k()(e.map(function(e,t){return R.a.createElement(a,{key:e.id,parent:e.parent,info:e,link:h,tabID:b,raw_replies:r.raw_replies,addReplies:r.addReplies})})))))},[]);function y(){P(h,r.info.replies,r.info.prefixed,r.parent).then(function(t){var e,n=t[0].map(function(e){return e.parent=[].concat(k()(t[1]),[e.parent]),e});e=n,r.addReplies(b,r.info.id,e),m([].concat(k()(u),k()(n.map(function(e,t){return R.a.createElement(a,{key:e.id,parent:e.parent,info:e,link:h,tabID:b,raw_replies:r.raw_replies,addReplies:r.addReplies})}))))})}return R.a.createElement("div",{className:"demo",id:r.info.id+"-comment-wrap"},R.a.createElement("div",{className:"demo-wrapper"},R.a.createElement("div",null,R.a.createElement("button",{id:r.info.id+"-demo-toggle",className:"js-container-target demo-toggle-button",onClick:function(e){e.target.parentElement.classList.toggle("is-open"),"none"!==r.info.replies&&0===u.length&&y(),l(!c)}},r.info.prefixed,r.info.author,R.a.createElement("label",{className:"checkbox-label"},R.a.createElement("input",{type:"checkbox",onChange:function(){v(r.info.id,n?"":document.getElementById(r.info.id+"-trans").value),i(!n)}}),R.a.createElement("span",{className:"checkbox-custom rectangular",id:r.info.id+"-span"})),R.a.createElement("div",{className:"demo-meta u-avoid-clicks"},r.info.awards," ",r.info.awards&&R.a.createElement("span",{className:"demo-meta-divider"},"|")," Upvote: ",r.info.upvotes))),R.a.createElement("div",{className:n?"content-wrapper show":"content-wrapper"},R.a.createElement(g,{name:r.info.id,content:r.info.content,active:n}),R.a.createElement(w,{name:r.info.id,active:n,parent:r.parent,author:r.info.author,level:(r.info.prefixed.match(/>/g)||[]).length+1,description:" (".concat(r.info.upvotes).concat(r.info.awards&&" - ").concat(r.info.awards,")"),prefixed:r.info.prefixed})),R.a.createElement("div",{className:c?"":"no-display"},u)))});function X(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function K(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n=C()(a);return t=r?(e=C()(this).constructor,Reflect.construct(n,arguments,e)):n.apply(this,arguments),_()(this,t)}}var Z=Object(N.lazy)(function(){return n.e(11).then(n.bind(null,"wAzm"))}),Y=Object(N.lazy)(function(){return Promise.all([n.e(14),n.e(22),n.e(9)]).then(n.bind(null,"oZis"))}),Q=Object(N.lazy)(function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,"BpA9"))}),ee=function(e){x()(r,e);var a=K(r);function r(){var u;m()(this,r);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=a.call.apply(a,[this].concat(t)),T()(v()(u),"state",{link:"",info:{},comments:[],trans:{},content:"",credit:"",note:""}),T()(v()(u),"handleSubmitLink",function(e){e.preventDefault();var t=e.target.elements.link.value.trim()+"/";new RegExp("https?://(?:www.|(?!www))reddit.[^s]{2,}|www.reddit.[^s]{2,}|https?://(?:www.|(?!www))reddit.[^s]{2,}|www.reddit.[^s]{2,}").test(t)?B(t.replace(/\?[^?]+$/,"")).then(function(e){u.setState({link:t.replace(/\?[^?]+$/,""),info:e[0],comments:e[1]})}):(alert("Link not valid"),e.target.elements.link.value="")}),T()(v()(u),"handleSubmitCredit",function(e){e.preventDefault();var t=e.target.elements.credit.value.trim();u.props.setCredit(t),u.setState({credit:t})}),T()(v()(u),"saveNote",function(){var e=document.getElementById(u.props.tab.id+"-note-input").value;u.setState({note:e})}),T()(v()(u),"searchComment",function(e,t){var n=e?t||e.target.value:t||"",a=document.getElementById(u.props.tab.id+"panel").getElementsByClassName("demo");if(""!==n){if(n){n=n.toUpperCase();for(var r=0;r<a.length;r++){var i,o=a[r].getElementsByTagName("button")[0],s=o.textContent||o.innerText,c=!1,l=X(n.split(" || "));try{for(l.s();!(i=l.n()).done;){var d=i.value;-1<s.toUpperCase().indexOf(d)&&(c=!0)}}catch(e){l.e(e)}finally{l.f()}if(c)for(a[r].style.display="",parent=a[r].parentElement;!parent.classList.contains("panel");)parent.style.display="",parent=parent.parentElement;else a[r].style.display="none"}}}else for(var p=0;p<a.length;p++)a[p].style.display=""}),T()(v()(u),"addTransComment",function(a,r,i,e,o,s,c){var t=u.state.trans;if(e)for(var n in e)t[e[n]]?t[e[n]].children.includes(a)||t[e[n]].children.push(a):u.addTransComment(e[n],parseInt(n)+1,null,e.slice(0,parseInt(n)),null,null,[].concat(k()(e.slice(parseInt(n)+1,e.length)),[a]));u.setState(function(e){var t=e.trans;if(!t[a])return t[a]={body:"",level:r,prefixed:i,author:o,description:s,children:c||[]},{trans:t};if(null===t[a].prefixed){var n=t[a].children;return t[a]={body:"",level:r,prefixed:i,children:k()(n),author:o,description:s},{trans:t}}})}),T()(v()(u),"editTransComment",function(t,n){u.setState(function(e){return e.trans[t]&&(e.trans[t].body=n,u.setState({content:""})),{trans:e.trans}})}),T()(v()(u),"getTransReplies",function(t,e,n,a){var r="\r\n";return 0===e.children.length?""!==e.body.trim()&&(t=t+e.prefixed+e.author+e.description.replace(/points\ points/,"points").replace(/point\ points/,"point")+r+e.body+r):(e.children.map(function(e){n[e].level===a&&(t=t+r+u.getTransReplies("",n[e],n,a+1))}),""!==e.body.trim()&&(t=e.prefixed+e.author+e.description.replace(/points\ points/,"points").replace(/point\ points/,"point")+r+e.body+r+t)),t}),T()(v()(u),"previewContent",function(){var e="_____________________\r\n",t="\r\n",n=u.state.info,a=u.state.trans;if(n.id){var r,i=n.subReddit+t+n.author+" (".concat(n.upvotes).concat(n.awards&&" - ").concat(n.awards,") ")+t,o=a[n.id]||null;for(var s in o?i=i+o.body+t+e:i+=e,i=i+"Link Reddit: "+n.shortenLink+t+e+t,a){1!==a[s].level||""!==(r=u.getTransReplies("",a[s],a,2)).trim()&&(i=i+r+e+t)}i=i.replace(/\r\n$/,""),""!==u.state.note&&(i=i+u.state.note+t+e),i=i+"Dịch bởi ".concat(u.state.credit||"một member chăm chỉ dịch bài")+t+"Edited by https://rvnweb.site",u.setState({content:i.replace(/\r\n\r\n\r\n/g,"\r\n\r\n").replace(/\r\n\r\n_/,"\r\n")})}}),T()(v()(u),"clearPreview",function(){u.setState({content:""})}),T()(v()(u),"restoreTrans",i()(p.a.mark(function e(){var t,n,a,r,i;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t=1,a="",r=u.state.trans;0!==n;){for(i in n=0,r)0===r[i].level&&(document.getElementById(i+"-trans").value=r[i].body),r[i].level===t&&(r[i].author&&(a=a+r[i].prefixed+r[i].author+" || "),document.getElementById(i+"-trans").value=r[i].body,""!==r[i].body&&document.getElementById(i+"-span").click(),document.getElementById(i+"-demo-toggle").click(),n=1);t++}document.getElementById(u.props.tab.id+"-search").value=a.replace(/\ \|\|\ $/,""),u.searchComment(event,a.replace(/\ \|\|\ $/,""));case 9:case"end":return e.stop()}},e)}))),T()(v()(u),"savePost",i()(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.state.link){e.next=14;break}if(t={id:u.state.info.id,title:u.state.info.title,info:u.state.info,category:u.state.info.subReddit,link:u.state.link,note:u.state.note,iconHref:u.props.tab.iconHref,trans:u.state.trans},"blank"===u.props.tab.category||u.props.tab.category!==t.category)return u.props.addCategory(u.state.info.subReddit),u.props.deleteTab(u.props.tab.id,u.props.tab.category),u.props.replaceTabID(u.props.tab.id,t.id),u.props.addTab(t),e.next=9,u.sleep(500);e.next=12;break;case 9:document.getElementById("button-"+t.id).click(),e.next=14;break;case 12:u.props.updateTab(u.props.tab.id,t),u.props.tab.id!==t.id&&u.props.replaceTabID(u.props.tab.id,t.id);case 14:case"end":return e.stop()}},e)}))),u}return h()(r,[{key:"sleep",value:function(t){return new Promise(function(e){return setTimeout(e,t)})}},{key:"componentDidMount",value:function(){var t=this;""!==this.props.credit&&this.setState({credit:this.props.credit}),this.props.tab.link?(this.setState({link:this.props.tab.link,info:this.props.tab.info,trans:this.props.tab.trans,note:this.props.tab.note}),B(this.props.tab.link.replace(/\?[^?]+$/,"")).then(function(e){t.setState({comments:e[1]}),t.restoreTrans().then(function(){document.getElementById(t.props.tab.id+"-credit").value=t.props.credit,document.getElementById("loading"+t.props.tab.id).classList.toggle("hide"),document.getElementById(t.props.tab.id+"panel").classList.toggle("shown")})})):(document.getElementById("loading"+this.props.tab.id).classList.toggle("hide"),document.getElementById(this.props.tab.id+"panel").classList.toggle("shown"))}},{key:"render",value:function(){var n=this;return R.a.createElement("section",{id:this.props.tab.id+"-section",className:"section js-section"},R.a.createElement(V.a.Provider,{value:{tabID:this.props.tab.id,link:this.state.link,title:this.state.info.title,upvotes:this.state.info.upvotes,subReddit:this.state.info.subReddit,id:this.state.info.id}},R.a.createElement(N.Suspense,{fallback:R.a.createElement("div",null),key:this.props.tab.id+"-header-suspense"},R.a.createElement(Y,{key:this.props.tab.id+"-header",category:this.props.tab.category,iconHref:this.props.tab.iconHref,isVideo:this.state.info.isVideo,url:this.state.info.url,fallbackUrl:this.state.info.fallbackUrl,isImage:this.state.info.isImage,credit:this.state.credit,previewContent:this.previewContent,savePost:this.savePost,saveNote:this.saveNote,handleSubmitLink:this.handleSubmitLink,handleSubmitCredit:this.handleSubmitCredit})),R.a.createElement(J.a.Provider,{value:{addTransComment:this.addTransComment,editTransComment:this.editTransComment}},R.a.createElement("div",{className:this.state.info.id?"title-panel shown":"title-panel hide"},R.a.createElement(N.Suspense,{fallback:R.a.createElement("div",null),key:this.state.info.id+"-title-suspense"},R.a.createElement(Z,{key:this.state.info.id+"-title",author:this.state.info.author,awards:this.state.info.awards,content:this.state.info.text}))),R.a.createElement("p",{id:"loading"+this.props.tab.id,className:"restore",style:{textAlign:"center"}},"Restoring your trans comments, hold your apple..."),R.a.createElement("div",{className:"panel",id:this.props.tab.id+"panel"},0!==this.state.comments.length&&R.a.createElement("input",{className:"demo-input-search",name:"search",id:this.props.tab.id+"-search","aria-label":"seacrh",placeholder:"Để tìm các subcomment vui lòng expand comment chính, search multi-comment: ngăn cách bởi ' || '",defaultValue:"",onChange:this.searchComment}),0===this.state.comments.length&&R.a.createElement("p",{className:"widget__message"},"Hãy thêm link bài viết vào"),this.state.comments.map(function(e,t){return R.a.createElement(z,{key:e.id,info:e,parent:[],tabID:n.props.tab.id})}))),R.a.createElement(N.Suspense,{fallback:R.a.createElement("div",null),key:this.state.info.id+"-modal-suspense"},R.a.createElement(Q,{key:this.state.info.id+"-modal",isOpen:!!this.state.content,content:this.state.content,clear:this.clearPreview}))))}}]),r}(R.a.Component);var te={addTab:A.a,deleteTab:A.b,updateTab:A.d,addCategory:L.a,updateComments:A.c,replaceTabID:function(e,t){return{type:M.d,payload:{currentTabID:e,newTabID:t}}},setCredit:function(e){return{type:$.a,payload:e}}};t.default=Object(j.b)(function(e){return{credit:e.credit}},te)(ee)}}]);