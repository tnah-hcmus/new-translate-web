(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{oZis:function(e,t,n){"use strict";n.r(t);function b(e){var t=/[^/\\&\?]+\.\w{3,4}(?=[\?&].*$|$)/.exec(e)[0];return t.substring(t.lastIndexOf("."))}function p(e,t){var n=window.URL.createObjectURL(new Blob([e])),a=document.createElement("a");a.href=n,a.setAttribute("download",t),document.body.appendChild(a),a.click()}var a=n("J4zp"),y=n.n(a),v=n("q1tI"),k=n.n(v),o=n("FjVW"),i=n("/MKj"),r=n("o0o1"),h=n.n(r),c=n("yXPU"),s=n.n(c),l=n("vDqi"),f=n.n(l),d=n("xOOu"),g=n.n(d),E=function(){var n=s()(h.a.mark(function e(n,a){var o,i,r,c,s,l,d,u,m;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((o=document.getElementById(a+"-download-image")).innerHTML="Downloading",-1!==(t=n).indexOf(".jpg")||-1!==t.indexOf(".png")||-1!==t.indexOf(".gif")||-1!==t.indexOf(".gifv"))return e.next=5,f.a.get("https://young-moon-cab4.tnah-work.workers.dev/?"+n,{responseType:"arraybuffer",headers:{"Content-Type":"application/json",Accept:"application/image/*"}});e.next=10;break;case 5:i=e.sent,p(i.data,"RVN-"+a+b(n)),o.innerHTML="Downloaded",e.next=33;break;case 10:if(n.startsWith("http://imgur.com/a/")||n.startsWith("https://imgur.com/a/"))return r=n.substring(n.lastIndexOf("/")+1),e.next=14,f.a.get("https://api.imgur.com/3/album/"+r,{headers:{"Content-Type":"application/json",authorization:"Client-ID 0d6763dedc73059"}});e.next=26;break;case 14:return c=e.sent,s=new g.a,l=c.data.data.images.map(function(t){return f.a.get("https://young-moon-cab4.tnah-work.workers.dev/?"+t.link,{responseType:"arraybuffer",headers:{"Content-Type":"application/json"}}).then(function(e){s.file(t.id+b(n),e.data,{base64:!0})})}),e.next=19,Promise.all(l);case 19:return e.next=21,s.generateAsync({type:"uint8array"});case 21:d=e.sent,p(d,"RVN-"+r+".zip"),o.innerHTML="Downloaded",e.next=33;break;case 26:if(n.startsWith("http://imgur.com/")||n.startsWith("https://imgur.com/"))return u=n.substring(n.lastIndexOf("/")+1),e.next=30,f.a.get("https://api.imgur.com/3/image/"+u,{responseType:"arraybuffer",headers:{"Content-Type":"application/json",authorization:"Client-ID 0d6763dedc73059"}});e.next=33;break;case 30:m=e.sent,p(m.data,"RVN-"+a+b(n)),o.innerHTML="Downloaded";case 33:case"end":return e.stop()}var t},e)}));return function(e,t){return n.apply(this,arguments)}}(),x=n("IGOO"),N=(n("FNPF"),n("OLdS")),O=Object(v.lazy)(function(){return Promise.all([n.e(1),n.e(6)]).then(n.bind(null,"/H3m"))}),u={deleteTab:o.b};t.default=Object(i.b)(null,u)(function(e){var t=Object(v.useState)(!1),n=y()(t,2),a=n[0],o=n[1],i=Object(v.useState)(!1),r=y()(i,2),c=r[0],s=r[1],l=Object(v.useState)(!1),d=y()(l,2),u=d[0],m=d[1],b=Object(v.useContext)(N.a),p=b.tabID,h=b.link,f=b.title,g=b.subReddit,w=b.upvotes;Object(v.useEffect)(function(){Object(x.confirmAlert)({title:"Thông báo nhỏ",message:"Tool sẽ chính thức kết thúc open beta và chuyển về tên miền chính thức rvnweb.site vào ngày 24/06/2020, domain reddit-translate.web.app sẽ ngưng hoạt động. Các bạn nhớ lưu bài và sẵn sàng chuyển nhà nhé :>",buttons:[{label:"Lưu ngay!"},{label:"Mình biết rồi."}]})},[]);return k.a.createElement("header",{className:"section-header"},k.a.createElement("div",{className:"section-wrapper"},k.a.createElement("h1",null,k.a.createElement("svg",{className:"section-icon"},k.a.createElement("use",{xlinkHref:e.iconHref})),f?f+" (Subreddit: ".concat(g," | ").concat(w," points)"):"Tab này chưa có bài dịch nào"),k.a.createElement("div",null,k.a.createElement("form",{onSubmit:e.handleSubmitLink,style:{display:"flex"}},k.a.createElement("input",{className:"demo-input",name:"link","aria-label":"Link to translate",placeholder:"Nhập link reddit để bắt đầu dịch",defaultValue:h.replace(/(\/+)$/,"")||"",disabled:""!==h}),k.a.createElement("button",{className:"demo-button"},"Bắt đầu dịch")),k.a.createElement("p",null,"Mở ",k.a.createElement("a",{href:h?h.replace(/(\/+)$/,""):"blank"!==e.category?"https://www.reddit.com/".concat(e.category):"https://www.reddit.com/",target:"_blank"},"link reddit này",k.a.createElement("span",{className:"u-visible-to-screen-reader"},"(opens in new window)"))," trong tab mới."),k.a.createElement("div",{className:"wrap",style:{justifyContent:"space-between",marginRight:"10%"}},k.a.createElement("div",{style:{marginBottom:"5px"}},k.a.createElement("button",{className:"demo-button",id:p+"-preview",onClick:e.previewContent},"Preview"),k.a.createElement("button",{className:"demo-button",id:p+"-note",onClick:function(){return o(!0)}},"Note"),k.a.createElement("button",{className:"demo-button",id:p+"-save",onClick:e.savePost},"Save"),k.a.createElement("button",{className:"demo-button",id:p+"-delete",onClick:function(){Object(x.confirmAlert)({title:"Bạn chắc chứ ?",message:"Bạn thật sự muốn xoá tab này ?",buttons:[{label:"Xoá",onClick:function(){return e.deleteTab(p,e.category)}},{label:"Mình nhầm"}]})}},"Delete")),k.a.createElement("form",{style:{display:"flex"},onSubmit:e.handleSubmitCredit},k.a.createElement("input",{className:"demo-input",name:"credit",id:p+"-credit","aria-label":"credit",placeholder:"Thêm credit",defaultValue:""}),k.a.createElement("button",{className:"demo-button"},"Thêm credit"))),k.a.createElement("div",{className:"wrap",style:{justifyContent:"space-between",marginRight:"10%",marginTop:"10px"}},k.a.createElement("button",{className:"demo-button download",id:p+"-download-video",onClick:function(){e.isVideo&&s(!0)},disabled:c||!e.isVideo},e.isVideo?"Download Video":"No video found"),k.a.createElement("button",{className:"demo-button",id:p+"-download-image",onClick:function(){e.url&&(m(!0),E(e.url,p))},disabled:u||!e.isImage},e.isImage?"Download Image":"No image found")),c&&k.a.createElement("iframe",{key:p,src:"https://down-583a6.web.app/?video="+btoa(e.fallbackUrl)+"&audio="+btoa(e.url+"/audio"),style:{display:"none"}}))),k.a.createElement(v.Suspense,{fallback:k.a.createElement("div",null),key:p+"-note-suspense"},k.a.createElement(O,{isOpen:a,key:p+"-note",name:p,saveNote:e.saveNote,close:function(){o(!1)}})))})}}]);