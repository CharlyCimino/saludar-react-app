(this["webpackJsonpsaludador-react"]=this["webpackJsonpsaludador-react"]||[]).push([[0],{12:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),c=t(5),o=t(1),s=t(3),u=t.n(s),b=function(e){var n=u()(),t=u()(e);return n.diff(t,"years")},j=t(0),i=function(e){var n=e.fechaNac,t=new Date(n);return n?Object(j.jsxs)("p",{children:["Tu edad es de ",b(t)," a\xf1os"]}):null},l=function(e){var n=e.nombre,t=void 0===n?"an\xf3nimo":n;return Object(j.jsxs)("p",{children:["Hola ",t,"!"]})},f=function(e){var n=e.persona,t=e.setPersona;return Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{children:["Nombre:",Object(j.jsx)("input",{type:"text",value:n.nombre,onChange:function(e){e.preventDefault(),t((function(n){return{nombre:e.target.value,fechaNac:n.fechaNac}}))}})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Fecha de nacimiento:",Object(j.jsx)("input",{type:"date",value:n.fechaNac,onChange:function(e){e.preventDefault(),t((function(n){return{nombre:n.nombre,fechaNac:e.target.value}}))}})]})]})},d=function(){var e=Object(o.useState)({nombre:"Pepe",fechaNac:""}),n=Object(c.a)(e,2),t=n[0],a=n[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"SaludadorApp"}),Object(j.jsx)(f,{persona:t,setPersona:a}),Object(j.jsx)(l,{nombre:t.nombre}),Object(j.jsx)(i,{fechaNac:t.fechaNac})]})},h=document.querySelector("#root");r.a.render(Object(j.jsx)(d,{}),h)}},[[12,1,2]]]);
//# sourceMappingURL=main.27e35b24.chunk.js.map