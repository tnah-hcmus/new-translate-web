(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3irV":function(e,t,n){"use strict";n.r(t);function f(e){var t=/[^/\\&\?]+\.\w{3,4}(?=[\?&].*$|$)/.exec(e)[0];return t.substring(t.lastIndexOf("."))}function p(e,t){var n=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=n,a.setAttribute("download",t),document.body.appendChild(a),a.click()}var a=n("J4zp"),N=n.n(a),I=n("q1tI"),x=n.n(I),o=n("FjVW"),i=n("58q0"),r=n("/MKj"),c=n("o0o1"),h=n.n(c),s=n("yXPU"),l=n.n(s),u=n("vDqi"),b=n.n(u),d=n("xOOu"),g=n.n(d),O=function(){var n=l()(h.a.mark(function e(n,a){var o,i,r,c,s,l,u,d,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((o=document.getElementById(a+"-download-image")).innerHTML="Downloading",-1!==(t=n).indexOf(".jpg")||-1!==t.indexOf(".png")||-1!==t.indexOf(".gif")||-1!==t.indexOf(".gifv"))return e.next=5,b.a.get("https://young-moon-cab4.tnah-work.workers.dev/?"+n,{responseType:"arraybuffer",headers:{"Content-Type":"application/json",Accept:"application/image/*"}});e.next=10;break;case 5:i=e.sent,p(i.data,"RVN-"+a+f(n)),o.innerHTML="Downloaded",e.next=33;break;case 10:if(n.startsWith("http://imgur.com/a/")||n.startsWith("https://imgur.com/a/"))return r=n.substring(n.lastIndexOf("/")+1),e.next=14,b.a.get("https://api.imgur.com/3/album/"+r,{headers:{"Content-Type":"application/json",authorization:"Client-ID 0d6763dedc73059"}});e.next=26;break;case 14:return c=e.sent,s=new g.a,l=c.data.data.images.map(function(t){return b.a.get("https://young-moon-cab4.tnah-work.workers.dev/?"+t.link,{responseType:"arraybuffer",headers:{"Content-Type":"application/json"}}).then(function(e){s.file(t.id+f(n),e.data,{base64:!0})}).catch(function(e){console.log(e)})}),e.next=19,Promise.all(l);case 19:return e.next=21,s.generateAsync({type:"uint8array"});case 21:u=e.sent,p(u,"RVN-"+r+".zip"),o.innerHTML="Downloaded",e.next=33;break;case 26:if(n.startsWith("http://imgur.com/")||n.startsWith("https://imgur.com/"))return d=n.substring(n.lastIndexOf("/")+1),e.next=30,b.a.get("https://api.imgur.com/3/image/"+d,{responseType:"arraybuffer",headers:{"Content-Type":"application/json",authorization:"Client-ID 0d6763dedc73059"}});e.next=33;break;case 30:m=e.sent,p(m.data,"RVN-"+a+f(n)),o.innerHTML="Downloaded";case 33:case"end":return e.stop()}var t},e)}));return function(e,t){return n.apply(this,arguments)}}(),A=n("IGOO"),M=(n("FNPF"),n("vQVb")),j=Object(I.lazy)(function(){return n.e(1).then(n.bind(null,"587b"))}),S={0:"Save",1:"Saving",2:"Saved"},m={deleteTab:o.b,deleteAllReplies:i.b};t.default=x.a.memo(Object(r.b)(null,m)(function(e){var t=Object(I.useState)(!1),n=N()(t,2),a=n[0],o=n[1],i=Object(I.useState)(!1),r=N()(i,2),c=r[0],s=r[1],l=Object(I.useState)(!1),u=N()(l,2),d=u[0],m=u[1],f=e.tabID,p=e.link,h=e.title,b=e.subReddit,g=e.upvotes,v=e.id,y=e.uuid,w=e.savePost,k=Object(I.useState)(""),T=N()(k,2),E=T[0],C=T[1];Object(I.useEffect)(function(){""!==e.credit&&C(e.credit)},[e.credit]);return x.a.createElement("header",{className:"section-header"},x.a.createElement("div",{className:"section-wrapper"},x.a.createElement("h1",null,x.a.createElement("svg",{className:"section-icon"},x.a.createElement("use",{xlinkHref:e.iconHref})),h?h+" (Subreddit: ".concat(b," | ").concat(g," points)"):"Tab này chưa có bài dịch nào"),x.a.createElement("div",null,x.a.createElement("form",{onSubmit:e.handleSubmitLink,style:{display:"flex"}},x.a.createElement("input",{className:"demo-input",name:"link","aria-label":"Link to translate",placeholder:"Nhập link reddit để bắt đầu dịch",defaultValue:p.replace(/(\/+)$/,"")||"",disabled:""!==p}),x.a.createElement("button",{className:"demo-button"},"Bắt đầu dịch")),x.a.createElement("p",null,"Mở ",x.a.createElement("a",{href:p?p.replace(/(\/+)$/,""):"blank"!==e.category?"https://www.reddit.com/".concat(e.category):"https://www.reddit.com/",target:"_blank"},"link reddit này",x.a.createElement("span",{className:"u-visible-to-screen-reader"},"(opens in new window)"))," trong tab mới."),x.a.createElement("div",{className:"wrap",style:{justifyContent:"space-between",marginRight:"10%"}},x.a.createElement("div",{style:{marginBottom:"5px"}},x.a.createElement("button",{className:"demo-button",id:f+"-preview",onClick:e.previewContent},"Preview"),x.a.createElement("button",{className:"demo-button",id:f+"-note",onClick:function(){return o(!0)}},"Note"),x.a.createElement("button",{className:"demo-button",id:f+"-save",onClick:function(){w(null,{id:v,uuid:y,data:{timemark:Date.now(),value:""!==E?E:"Một member chăm chỉ nào đó"}})}},S[e.saveState]),x.a.createElement("button",{className:"demo-button",id:f+"-delete",onClick:function(){Object(A.confirmAlert)({title:"Bạn chắc chứ ?",message:"Bạn thật sự muốn xoá tab này ?",buttons:[{label:"Xoá",onClick:function(){e.deleteTab(f,e.category,e.setActiveSection),e.deleteAllReplies(f),Object(M.a)(v,y)}},{label:"Mình nhầm"}]})}},"Delete")),x.a.createElement("form",{style:{display:"flex"},onSubmit:e.handleSubmitCredit},x.a.createElement("input",{className:"demo-input",name:"credit",id:f+"-credit","aria-label":"credit",placeholder:"Thêm credit",value:E,onChange:function(e){C(e.target.value)}}),x.a.createElement("button",{className:"demo-button"},e.credit||""!==e.credit?"Sửa credit":"Thêm credit"))),x.a.createElement("div",{className:"wrap",style:{justifyContent:"space-between",marginRight:"10%",marginTop:"10px"}},x.a.createElement("button",{className:"demo-button download",id:f+"-download-video",onClick:function(){e.isVideo&&s(!0)},disabled:c||!e.isVideo},e.isVideo?"Download Video":"No video found"),x.a.createElement("button",{className:"demo-button download",id:f+"-g-trans",onClick:function(){e.setHelper(!e.helper),e.setGoogleHelper()}},e.helper?"Translator helper: ON":"Translator helper: OFF"),x.a.createElement("button",{className:"demo-button",id:f+"-download-image",onClick:function(){e.url&&(m(!0),O(e.url,f))},disabled:d||!e.isImage},e.isImage?"Download Image":"No image found")),c&&x.a.createElement("iframe",{key:f,src:"https://down-583a6.web.app/?video="+btoa(e.fallbackUrl)+"&audio="+btoa(e.url+"/audio"),style:{display:"none"}}))),x.a.createElement(I.Suspense,{fallback:x.a.createElement("div",null),key:f+"-note-suspense"},x.a.createElement(j,{isOpen:a,key:f+"-note",name:f,saveNote:e.saveNote,close:function(){o(!1)}})))}))},"49sm":function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},H7XF:function(e,t,n){"use strict";t.byteLength=function(e){var t=d(e),n=t[0],a=t[1];return 3*(n+a)/4-a},t.toByteArray=function(e){var t,n,a=d(e),o=a[0],i=a[1],r=new u(function(e,t){return 3*(e+t)/4-t}(o,i)),c=0,s=0<i?o-4:o;for(n=0;n<s;n+=4)t=l[e.charCodeAt(n)]<<18|l[e.charCodeAt(n+1)]<<12|l[e.charCodeAt(n+2)]<<6|l[e.charCodeAt(n+3)],r[c++]=t>>16&255,r[c++]=t>>8&255,r[c++]=255&t;2===i&&(t=l[e.charCodeAt(n)]<<2|l[e.charCodeAt(n+1)]>>4,r[c++]=255&t);1===i&&(t=l[e.charCodeAt(n)]<<10|l[e.charCodeAt(n+1)]<<4|l[e.charCodeAt(n+2)]>>2,r[c++]=t>>8&255,r[c++]=255&t);return r},t.fromByteArray=function(e){for(var t,n=e.length,a=n%3,o=[],i=0,r=n-a;i<r;i+=16383)o.push(function(e,t,n){for(var a,o=[],i=t;i<n;i+=3)a=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(function(e){return c[e>>18&63]+c[e>>12&63]+c[e>>6&63]+c[63&e]}(a));return o.join("")}(e,i,r<i+16383?r:i+16383));1==a?(t=e[n-1],o.push(c[t>>2]+c[t<<4&63]+"==")):2==a&&(t=(e[n-2]<<8)+e[n-1],o.push(c[t>>10]+c[t>>4&63]+c[t<<2&63]+"="));return o.join("")};for(var c=[],l=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,i=a.length;o<i;++o)c[o]=a[o],l[a.charCodeAt(o)]=o;function d(e){var t=e.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63},URgk:function(e,o,i){(function(e){var t=void 0!==e&&e||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}o.setTimeout=function(){return new a(n.call(setTimeout,t,arguments),clearTimeout)},o.setInterval=function(){return new a(n.call(setInterval,t,arguments),clearInterval)},o.clearTimeout=o.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(t,this._id)},o.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},o.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},o._unrefActive=o.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},i("YBdB"),o.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,o.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i("yLpj"))},YBdB:function(e,t,n){(function(e,p){!function(n,a){"use strict";var o,i,r,c,s,l,t,u,e;function d(e){delete i[e]}function m(e){if(r)setTimeout(m,0,e);else{var t=i[e];if(t){r=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(a,n)}}(t)}finally{d(e),r=!1}}}}function f(e){e.source===n&&"string"==typeof e.data&&0===e.data.indexOf(u)&&m(+e.data.slice(u.length))}n.setImmediate||(o=1,r=!(i={}),c=n.document,e=(e=Object.getPrototypeOf&&Object.getPrototypeOf(n))&&e.setTimeout?e:n,s="[object process]"==={}.toString.call(n.process)?function(e){p.nextTick(function(){m(e)})}:function(){if(n.postMessage&&!n.importScripts){var e=!0,t=n.onmessage;return n.onmessage=function(){e=!1},n.postMessage("","*"),n.onmessage=t,e}}()?(u="setImmediate$"+Math.random()+"$",n.addEventListener?n.addEventListener("message",f,!1):n.attachEvent("onmessage",f),function(e){n.postMessage(u+e,"*")}):n.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){m(e.data)},function(e){t.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(l=c.documentElement,function(e){var t=c.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,l.removeChild(t),t=null},l.appendChild(t)}):function(e){setTimeout(m,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return i[o]=a,s(o),o++},e.clearImmediate=d)}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},"kVK+":function(e,t){t.read=function(e,t,n,a,o){var i,r,c=8*o-a-1,s=(1<<c)-1,l=s>>1,u=-7,d=n?o-1:0,m=n?-1:1,f=e[t+d];for(d+=m,i=f&(1<<-u)-1,f>>=-u,u+=c;0<u;i=256*i+e[t+d],d+=m,u-=8);for(r=i&(1<<-u)-1,i>>=-u,u+=a;0<u;r=256*r+e[t+d],d+=m,u-=8);if(0===i)i=1-l;else{if(i===s)return r?NaN:1/0*(f?-1:1);r+=Math.pow(2,a),i-=l}return(f?-1:1)*r*Math.pow(2,i-a)},t.write=function(e,t,n,a,o,i){var r,c,s,l=8*i-o-1,u=(1<<l)-1,d=u>>1,m=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=a?0:i-1,p=a?1:-1,h=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(c=isNaN(t)?1:0,r=u):(r=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-r))<1&&(r--,s*=2),2<=(t+=1<=r+d?m/s:m*Math.pow(2,1-d))*s&&(r++,s/=2),u<=r+d?(c=0,r=u):1<=r+d?(c=(t*s-1)*Math.pow(2,o),r+=d):(c=t*Math.pow(2,d-1)*Math.pow(2,o),r=0));8<=o;e[n+f]=255&c,f+=p,c/=256,o-=8);for(r=r<<o|c,l+=o;0<l;e[n+f]=255&r,f+=p,r/=256,l-=8);e[n+f-p]|=128*h}}}]);