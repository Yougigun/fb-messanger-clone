(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{19:function(e,a,t){e.exports={App:"App_App__1cKli",Form:"App_Form__GpNds",FormControl:"App_FormControl__DeDB1",Input:"App_Input__2Eaob",IconButton:"App_IconButton__3HCmE"}},31:function(e,a,t){e.exports={Message:"Message_Message__16-49",User:"Message_User__3DwGT"}},39:function(e,a,t){e.exports=t.p+"static/media/Messenger_Logo_Color_RGB.11b1e8bd.png"},46:function(e,a,t){e.exports=t(68)},51:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(13),r=t.n(s),c=(t(51),t(29)),m=t(90),l=t(88),i=t(87),u=t(40),p=t.n(u),g=t(41),d=t(27),f=t.n(d),b=f.a.initializeApp({apiKey:"AIzaSyAi7TFZSsc8QRCaDkA8GbVEggYE90c7Aws",authDomain:"fb-messenger-demo.firebaseapp.com",databaseURL:"https://fb-messenger-demo.firebaseio.com",projectId:"fb-messenger-demo",storageBucket:"fb-messenger-demo.appspot.com",messagingSenderId:"1065490556555",appId:"1:1065490556555:web:2353bc7c2bac231342968e"}).firestore(),h=t(42),E=t(89),_=t(85),v=t(86),w=t(31),A=t.n(w),y=Object(n.forwardRef)((function(e,a){var t=e.username,n=e.message,s=(Object(h.a)(e,["username","message"]),t===n.username);return console.log(t),o.a.createElement("div",{ref:a},o.a.createElement(E.a,{className:"".concat(A.a.Message," ").concat(s&&A.a.User)},o.a.createElement(_.a,null,o.a.createElement(v.a,{variant:"h5",component:"h2"},s?"".concat(n.message):"".concat(n.username||"Unknown User",": ").concat(n.message)))))})),j=t(19),k=t.n(j),I=t(39),B=t.n(I);var C=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)([]),u=Object(c.a)(r,2),d=u[0],h=u[1],E=Object(n.useState)(""),_=Object(c.a)(E,2),v=_[0],w=_[1];return Object(n.useEffect)((function(){console.log("Start listening to snapshot of db");var e=b.collection("messages").orderBy("timestamp","desc").onSnapshot({includeMetadataChanges:!0},(function(e){console.log("new docs..."),h(e.docs.map((function(e){return{message:e.data(),id:e.id}})))}));return function(){e()}}),[]),Object(n.useEffect)((function(){w(prompt("Please enter your name"))}),[]),o.a.createElement("div",{className:k.a.App},o.a.createElement("img",{src:B.a,alt:"",width:"100",height:"100"}),o.a.createElement("h1",null,"Hello, Here is FB Messenger Clone made by Gary"),o.a.createElement("h2",null,"Welcome ",v),o.a.createElement("form",{className:k.a.Form,onSubmit:function(e){return e.preventDefault()}},o.a.createElement(m.a,{className:k.a.FormControl},o.a.createElement(l.a,{className:k.a.Input,placeholder:"Enter a message...",type:"text",value:t,onChange:function(e){return s(e.target.value)}}),o.a.createElement(i.a,{className:k.a.IconButton,type:"submit",onClick:function(){b.collection("messages").add({message:t,username:v,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),s("")},variant:"contained",color:"primary",disabled:!t},o.a.createElement(p.a,null)))),o.a.createElement(g.a,null,d.map((function(e){var a=e.id,t=e.message;return o.a.createElement(y,{key:a,username:v,message:t})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.16d7f957.chunk.js.map