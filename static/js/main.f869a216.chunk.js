(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(30),o=c.n(s),i=c(11),l=(c(37),c(2)),j=c(9),d=c(10),h=c.n(d),b=c(13),u=c(7),O=function(e){var t=e.name,c=e.age,n=e.contact_number,r=e.car_model,s=e.car_make_year;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{"data-label":">Name",children:t}),Object(a.jsx)("td",{"data-label":">Age",children:c}),Object(a.jsx)("td",{"data-label":">Contact No",children:n}),Object(a.jsx)("td",{"data-label":">Car Model Owned",children:r}),Object(a.jsx)("td",{"data-label":">Car Make Year",children:s})]})},p=c(16),x=c.n(p),m="https://insurance-company-xx.herokuapp.com/api/v1",f=function(){return x.a.get(m+"/getInfo").then((function(e){return e.data})).catch((function(e){return console.error("Error: ",e),e}))},v=function(e){return x.a.get("".concat(m,"/getPersonInfo/").concat(e)).then((function(e){return e.data})).catch((function(e){return console.error("Error: ",e),e}))},g=function(e){var t=e.carModel,c=e.carMakeYear;return x.a.post(m+"/isCarRegistered",{car_model:t,car_make_year:c}).then((function(e){return e.data})).catch((function(e){return console.error("Error: ",e),e}))},N=(c(56),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:(t=e.sent).success&&(l(t.success),r(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)("table",{className:"record-table",children:[Object(a.jsx)("caption",{children:"All records"}),Object(a.jsx)("thead",{className:"table-header",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Age"}),Object(a.jsx)("th",{scope:"col",children:"Contact No"}),Object(a.jsx)("th",{scope:"col",children:"Car Model Owned"}),Object(a.jsx)("th",{scope:"col",children:"Car Make Year"})]})}),Object(a.jsx)("tbody",{className:"table-body",children:i&&c.map((function(e){return Object(a.jsx)(O,Object(j.a)({},e),e.name)}))})]})})}),k=c(15),M=(c(57),{carMakeYear:"",carModel:""}),C={carMakeYear:!1,carModel:!1},w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(n.useState)(M),O=Object(u.a)(d,2),p=O[0],x=O[1],m=Object(n.useState)(C),f=Object(u.a)(m,2),v=f[0],N=f[1],w=function(e){e.preventDefault(),x(Object(j.a)(Object(j.a)({},p),{},Object(k.a)({},e.target.name,e.target.value))),N(Object(j.a)(Object(j.a)({},v),{},Object(k.a)({},e.target.name,!1)))};return console.log("err: ",v),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"input-form-container",children:[Object(a.jsx)("div",{className:"input-field-wrapper",children:Object(a.jsx)("input",{type:"text",value:p.carModel,name:"carModel",className:v.carModel?"has-error":"",onChange:w,placeholder:"Enter name...."})}),Object(a.jsx)("div",{className:"input-field-wrapper",children:Object(a.jsx)("input",{type:"text",value:p.carMakeYear,name:"carMakeYear",className:v.carMakeYear?"has-error":"",onChange:w,placeholder:"Enter name...."})}),Object(a.jsx)("div",{className:"input-field-wrapper",children:Object(a.jsx)("button",{type:"text",onClick:function(e){if(e.preventDefault(),!p.carMakeYear||!p.carModel){var t=[];return p.carMakeYear||t.push({carMakeYear:!0}),p.carModel||t.push({carModel:!0}),void N({carMakeYear:!!t[0].carMakeYear,carModel:!!t[1].carModel})}function c(){return(c=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(C),l(!1),r([]),e.next=5,g(p);case 5:(t=e.sent).success&&(l(t.success),r(t.data),x(M));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()},placeholder:"Enter name....",children:"CHECK"})})]}),c.length>0&&!0===i&&Object(a.jsx)("div",{className:"registered",children:"Car is registered with the company."}),0===c.length&&!0===i&&Object(a.jsx)("div",{className:"no-records",children:"Car is not registered with the company."})]})},y=(c(58),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),x=p[0],m=p[1],f=Object(n.useState)(!1),g=Object(u.a)(f,2),N=g[0],k=g[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"input-form-container",children:[Object(a.jsx)("div",{className:"input-field-wrapper",children:Object(a.jsx)("input",{type:"text",value:x,className:N?"has-error":"",onChange:function(e){e.preventDefault(),m(e.target.value),k(!1)},placeholder:"Enter name...."})}),Object(a.jsx)("div",{className:"input-field-wrapper",children:Object(a.jsx)("button",{type:"text",onClick:function(e){function t(){return(t=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),l(!1),r([]),e.next=5,v(x);case 5:(t=e.sent).success&&(l(t.success),r(t.data),m(""));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),x?function(){t.apply(this,arguments)}():k(!0)},placeholder:"Enter name....",children:"CHECK"})})]}),c.length>0&&!0===i&&Object(a.jsxs)("table",{className:"record-table",children:[Object(a.jsx)("caption",{children:"All records"}),Object(a.jsx)("thead",{className:"table-header",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Age"}),Object(a.jsx)("th",{scope:"col",children:"Contact No"}),Object(a.jsx)("th",{scope:"col",children:"Car Model Owned"}),Object(a.jsx)("th",{scope:"col",children:"Car Make Year"})]})}),Object(a.jsx)("tbody",{className:"table-body",children:c.map((function(e){return Object(a.jsx)(O,Object(j.a)({},e),e.name)}))})]}),0===c.length&&!0===i&&Object(a.jsx)("div",{className:"no-records",children:"No records found...."})]})}),Y=(c(59),function(){return Object(a.jsx)("div",{className:"navigation",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)(i.b,{to:"/",className:"navigation-nav",children:Object(a.jsx)("li",{children:"All Records"})}),Object(a.jsx)(i.b,{to:"/check-user",className:"navigation-nav",children:Object(a.jsx)("li",{children:"Check User"})}),Object(a.jsx)(i.b,{to:"/car-register",className:"navigation-nav",children:Object(a.jsx)("li",{children:"Check Car"})})]})})});c(65);var E=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("h1",{children:"Insurance Company Information"})}),Object(a.jsxs)("main",{className:"App-main",children:[Object(a.jsx)("div",{children:Object(a.jsx)(Y,{})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(N,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/check-user",children:Object(a.jsx)(y,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/car-register",children:Object(a.jsx)(w,{})})]})]}),Object(a.jsx)("footer",{className:"footer",children:"Developed by Nandkumar Gangai."})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(E,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),S()}},[[66,1,2]]]);
//# sourceMappingURL=main.f869a216.chunk.js.map