(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(16),i=n.n(a),u=n(2),c=n.n(u),s=n(5),o=n(3),l=n(0),d=function(e){var t=e.blog,n=e.updateBlog,a=e.deleteBlog,i=e.user,u=Object(r.useState)(!1),c=Object(o.a)(u,2),s=c[0],d=c[1],j=function(e){e.preventDefault(),d(!s)},b={display:s?"none":""},p={display:s?"":"none"},f={display:i.username===t.user.username&&s?"":"none"};return Object(l.jsxs)("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},className:"blog",children:[Object(l.jsxs)("p",{id:"authorAndTitle",children:[t.author,": ",t.title]}),Object(l.jsx)("button",{id:"nayta",style:b,onClick:j,children:"N\xe4yt\xe4 blogin tiedot"}),Object(l.jsxs)("div",{id:"showWhenVisible",style:p,children:[Object(l.jsxs)("p",{id:"url",children:[Object(l.jsx)("b",{children:"url:"})," ",t.url]}),Object(l.jsxs)("p",{id:"tykkayksia",children:[Object(l.jsx)("b",{children:"tykk\xe4yksi\xe4:"})," ",t.likes,Object(l.jsx)("button",{id:"tykkaa",onClick:function(e){e.preventDefault();var r={user:t.user,author:t.author,likes:t.likes+1,title:t.title,url:t.url,id:t.id};n(r,r.likes,r.id)},children:"Tykk\xe4\xe4"})]}),Object(l.jsx)("button",{id:"poistaBlogiNappi",style:f,onClick:function(e){e.preventDefault(),a(t.id)},children:"Poista blogi"}),Object(l.jsx)("button",{id:"suljeNappi",onClick:j,children:"Sulje"})]})]})},j=n(6),b=n.n(j),p="/api/blogs",f=null,h={getAll:function(){return b.a.get(p).then((function(e){return e.data}))},setToken:function(e){f="bearer ".concat(e)},create:function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,b.a.post(p,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(p,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,b.a.delete("".concat(p,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.message,n=e.errorMessage;return null===t&&null===n?null:null!==n?Object(l.jsx)("div",{className:"error",style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n}):Object(l.jsx)("div",{className:"message",style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},m=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],i=n[1],u={display:a?"none":""},c={display:a?"":"none"},s=function(){i(!a)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:u,children:Object(l.jsx)("button",{onClick:s,children:e.buttonLabel})}),Object(l.jsxs)("div",{style:c,className:"togglableContent",children:[e.children,Object(l.jsx)("button",{onClick:s,children:"Keskeyt\xe4 toiminto"})]})]})},x=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Kirjaudu sis\xe4\xe4n alla olevalla lomakkeella"}),Object(l.jsxs)("form",{onSubmit:e.handleLogin,children:[Object(l.jsx)("div",{children:"K\xe4ytt\xe4j\xe4tunnus"}),Object(l.jsx)("input",{type:"text",value:e.username,name:"Username",onChange:function(t){var n=t.target;return e.setUsername(n.value)}}),Object(l.jsx)("div",{children:"Salasana"}),Object(l.jsx)("input",{type:"password",value:e.password,name:"Password",onChange:function(t){var n=t.target;return e.setPassword(n.value)}}),Object(l.jsx)("button",{type:"submit",id:"kirjaudu",children:"Kirjaudu"})]})]})},g=function(e){var t=e.addBlog,n=Object(r.useState)(""),a=Object(o.a)(n,2),i=a[0],u=a[1],d=Object(r.useState)(""),j=Object(o.a)(d,2),b=j[0],p=j[1],f=Object(r.useState)(""),h=Object(o.a)(f,2),v=h[0],O=h[1],m=function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t({title:i,author:b,url:v},b,i),p(""),u(""),O("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Tallenna uusi blogi"}),Object(l.jsxs)("form",{id:"lomake",onSubmit:m,children:[Object(l.jsx)("div",{children:"Title:"}),Object(l.jsx)("input",{id:"title",type:"text",value:i,name:"Title",onChange:function(e){var t=e.target;return u(t.value)}}),Object(l.jsx)("div",{children:"Author:"}),Object(l.jsx)("input",{id:"author",type:"text",value:b,name:"Author",onChange:function(e){var t=e.target;return p(t.value)}}),Object(l.jsx)("div",{children:"Url:"}),Object(l.jsx)("input",{id:"uri",type:"text",value:v,name:"Url",onChange:function(e){var t=e.target;return O(t.value)}}),Object(l.jsx)("button",{id:"tallenna",type:"submit",children:"Tallenna"})]})]})},k=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),u=Object(o.a)(i,2),j=u[0],b=u[1],p=Object(r.useState)(""),f=Object(o.a)(p,2),k=f[0],y=f[1],w=Object(r.useState)(null),S=Object(o.a)(w,2),T=S[0],B=S[1],C=Object(r.useState)(null),K=Object(o.a)(C,2),N=K[0],A=K[1],L=Object(r.useState)(null),U=Object(o.a)(L,2),D=U[0],V=U[1],z=function(){var e=Object(s.a)(c.a.mark((function e(t,r,i){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.create(t);case 3:u=e.sent,a(n.concat(u)),A("Uusi blogi lis\xe4ttiin: ".concat(r,", ").concat(i,".")),setTimeout((function(){A(null)}),5e3),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),V("Blogin lis\xe4\xe4minen ei onnistunut. Yrit\xe4 uudelleen."),setTimeout((function(){V(null)}),5e3),console.log("Virhe!");case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(c.a.mark((function e(t,r,i){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.update(i,t);case 3:A("Blogilla on nyt tykk\xe4yksi\xe4: ".concat(r,".")),setTimeout((function(){A(null)}),5e3),a(n.map((function(e){return e.id!==i?e:t}))),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),V("Blogin p\xe4ivitt\xe4minen ei onnistunut. Yrit\xe4 uudelleen."),setTimeout((function(){V(null)}),5e3),console.log("Virhe!");case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Haluatko varmasti poistaa blogin?")){e.next=15;break}return e.prev=1,console.log(t),e.next=5,h.remove(t);case 5:A("Blogin poistaminen onnistui!"),setTimeout((function(){A(null)}),5e3),a(n.filter((function(e){return e.id!==t}))),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),V("Blogin poistaminen ei onnistunut. Yrit\xe4 uudelleen."),setTimeout((function(){V(null)}),5e3),console.log("Virhe!");case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v({username:j,password:k});case 4:n=e.sent,window.localStorage.setItem("kirjautunutKayttaja",JSON.stringify(n)),B(n),A("Kirjautuminen onnistui. Tervetuloa, ".concat(n.nimi,"!")),setTimeout((function(){A(null)}),5e3),b(""),y(""),h.setToken(n.token),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),V("Kirjautuminen ei onnistunut. Tarkista k\xe4ytt\xe4j\xe4tunnus ja salasana."),console.log("Virhe!"),setTimeout((function(){V(null)}),5e3);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){h.getAll().then((function(e){return a(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("kirjautunutKayttaja");if(e){var t=JSON.parse(e);B(t),h.setToken(t.token)}}),[]);var E=n.sort((function(e,t){return t.likes-e.likes}));return null===T?Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{message:N,errorMessage:D}),Object(l.jsx)(m,{buttonLabel:"Kirjautumislomake",children:Object(l.jsx)(x,{username:j,password:k,setUsername:b,setPassword:y,handleLogin:P})})]}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[T.nimi," kirjautuneena palveluun."]}),Object(l.jsx)("button",{onClick:function(){window.localStorage.removeItem("kirjautunutKayttaja"),window.location.reload()},children:"Kirjaudu ulos"}),Object(l.jsx)(O,{message:N,errorMessage:D}),E.map((function(e){return Object(l.jsx)(d,{blog:e,updateBlog:I,deleteBlog:J,user:T},e.id)})),Object(l.jsx)(m,{buttonLabel:"Lomake, jolla voit tallentaa uuden blogin",children:Object(l.jsx)(g,{addBlog:z})})]})};i.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7c19dba6.chunk.js.map