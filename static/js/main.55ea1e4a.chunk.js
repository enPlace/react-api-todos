(this["webpackJsonpreact-api-todos"]=this["webpackJsonpreact-api-todos"]||[]).push([[0],{42:function(t,e,c){},43:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var n=c(0),o=c.n(n),r=c(29),i=c.n(r),s=(c(42),c(43),c(16)),a=c(13),d=c.n(a),j=c(79),l=c(3),u=c(2),b=function(t){var e=t.todo,c=e.id,n=e.title,o=e.completed,r=Object(l.f)();return Object(u.jsxs)("div",{style:{backgroundColor:"grey",margin:"10px",padding:"10px",width:"150px",borderRadius:"10px"},onClick:function(){return r.push("/".concat(c))},children:[Object(u.jsx)("h3",{children:"Task:"}),Object(u.jsx)("h5",{children:n}),Object(u.jsx)("h6",{children:"Completed: ".concat(o)})]})},h=function(){var t=Object(n.useState)(void 0),e=Object(s.a)(t,2),c=e[0],o=e[1];return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){var e=t.data;o(e)}))}),[]),Object(n.useEffect)((function(){return console.log(c)}),[c]),c?Object(u.jsxs)("div",{className:"todoList",children:[Object(u.jsx)("h1",{children:"Todo List-- All"}),Object(u.jsx)("div",{className:"cardContainer",style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:c.map((function(t){return Object(u.jsx)(b,{todo:t},t.id)}))})]}):Object(u.jsx)(j.a,{})},O=function(){var t=Object(l.g)().id,e=Object(n.useState)(void 0),c=Object(s.a)(e,2),o=c[0],r=c[1],i=o||{},a=i.title,b=i.completed;return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(t){var e=t.data;r(e)}))}),[t]),Object(n.useEffect)((function(){console.log(o)}),[o]),o?Object(u.jsx)("div",{style:b?{color:"green",backgroundColor:"lightGray"}:{color:"red",backgroundColor:"gray"},children:Object(u.jsxs)("h1",{children:['The task "',a,'" has ',b?"":"NOT"," been completed"]})}):Object(u.jsx)(j.a,{})},p=c(35);var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(p.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(h,{})}),Object(u.jsx)(l.a,{path:"/:id",children:Object(u.jsx)(O,{})})]})})})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(e){var c=e.getCLS,n=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),o(t),r(t),i(t)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),x()}},[[68,1,2]]]);
//# sourceMappingURL=main.55ea1e4a.chunk.js.map