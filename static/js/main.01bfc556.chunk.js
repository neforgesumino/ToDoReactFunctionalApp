(this.webpackJsonptodoreactfuntionalapproach=this.webpackJsonptodoreactfuntionalapproach||[]).push([[0],{29:function(e,a,t){},36:function(e,a,t){e.exports=t(54)},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(15),r=t.n(c),o=(t(41),t(13)),s=Object(l.createContext)(),m=function(e){var a=e.children,t=Object(l.useState)(!1),c=Object(o.a)(t,2),r=c[0],m=c[1],i=Object(l.useState)([]),d=Object(o.a)(i,2),u=d[0],v=d[1];return n.a.createElement(s.Provider,{value:{show:r,setShow:m,allTasks:u,setAllTasks:v}},a)},i=t(24),d=t(4),u=(t(11),t(29),t(22)),v=function(){var e=localStorage.getItem("allTasks"),a=[];if(e){var t,l=(e=e.split("},").join("}%")).split("%"),n=Object(u.a)(l);try{for(n.s();!(t=n.n()).done;){var c=t.value;a.push(JSON.parse(c))}}catch(r){n.e(r)}finally{n.f()}a.sort((function(e,a){var t=e.title.toLowerCase(),l=a.title.toLowerCase();return t<l?-1:t>l?1:0}))}else console.log("there is no elements");return a},E=function(e){var a=v().filter((function(a){return Object.keys(e).every((function(t){return a[t]===e[t]}))}));return a.sort((function(e,a){var t=e.title.toLowerCase(),l=a.title.toLowerCase();return t<l?-1:t>l?1:0})),a},h=function(e,a){var t=v(),l=t.findIndex((function(a){return Object.keys(e).every((function(t){return a[t]===e[t]}))}));if(-1===l)return!1;for(var n=t[l],c=0,r=Object.keys(a);c<r.length;c++){var o=r[c];if(!n[o])return!1;n[o]=a[o]}t[l]=n;var s,m=[],i=Object(u.a)(t);try{for(i.s();!(s=i.n()).done;){var d=s.value;m.push(JSON.stringify(d))}}catch(E){i.e(E)}finally{i.f()}return localStorage.setItem("allTasks",m.toString()),!0};t(42);var p=function(e){var a=e.task,t=Object(l.useState)("text-secondary"),c=Object(o.a)(t,2),r=c[0],s=c[1];Object(l.useEffect)((function(){"DONE"===a.status?s("text-success"):s("text-secondary")}),[]);var m=function(){!function(e){var a=v(),t=a.findIndex((function(a){return Object.keys(e).every((function(t){return a[t]===e[t]}))}));if(-1===t)return console.log("is not possible delete an unexisting item!"),!1;a.splice(t,1);var l,n=[],c=Object(u.a)(a);try{for(c.s();!(l=c.n()).done;){var r=l.value;n.push(JSON.stringify(r))}}catch(o){c.e(o)}finally{c.f()}localStorage.setItem("allTasks",n.toString())}(a),window.location.reload(0)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card  text-center "},n.a.createElement("div",{id:"titleHeader",className:"container card-header p-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-8 "},n.a.createElement("p",{id:"itemTaskTitle",className:"badge card-title  text-justify text-break my-0 font-weight-bolder text-secondary p-0"},a.title)),n.a.createElement("div",{className:"col-4 p-0"},n.a.createElement("button",{id:"btnSvgDelete",className:"btn p-0",onClick:function(){return m()}},n.a.createElement("span",null,n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trash text-danger p-0",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))))))),n.a.createElement("div",{className:" container card-body py-0 "},n.a.createElement("div",{className:"row",id:"rowContainerBodyCard"},n.a.createElement("div",{className:"col-12 align-baseline"},n.a.createElement("p",{className:"card-title text-break  text-left font-italic  font-weight-normal text-secondary mb-0"},a.description))),n.a.createElement("div",{className:"row mt-3 pb-2",id:"rowContainerfooterCard"},n.a.createElement("div",{className:"col-3 p-0"},n.a.createElement("div",{className:"badge badge-secondary text-wrap botonStoryPoints"},a.storyPoints)),n.a.createElement("div",{className:"col-9 p-0 m-0 text-left"},n.a.createElement("p",{className:"m-0"},"Praise Points"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3 p-0"},n.a.createElement("button",{id:"btnSvg",className:"btn p-0",onClick:function(){return"DONE"===a.status&&(h(a,{status:"TO DO"}),window.location.reload(0)),void("TO DO"===a.status&&(h(a,{status:"DONE"}),window.location.reload(0)))}},n.a.createElement("span",null,n.a.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",className:"bi bi-check2-square ".concat(r),fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",id:"svgCheck"},n.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"}))))),n.a.createElement("div",{className:"col-9 p-0 align-bottom "},n.a.createElement("p",{className:"m-0 text-left"},"Mark as done "))))))};var f=function(){var e=E({status:"TO DO"});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row col-6 bg-light py-1 mt-4 mr-2 titleTask "},n.a.createElement("h1",{className:"lead"}," TO DO")),n.a.createElement("div",{className:"container mt-4 m-0 "},n.a.createElement("div",{className:"row "},e.length>0&&e.map((function(e){return n.a.createElement("div",{key:e.title,className:"col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3 "},n.a.createElement(p,{task:e}))})))),0===e.length&&n.a.createElement("div",{className:"alert alert-warning ",role:"alert"},n.a.createElement("b",null,"TO DO")," section is empty!"))},g=(t(43),t(44),t(57)),N=t(58);var w=function(){var e=Object(l.useContext)(s),a=e.show,t=e.setShow,c={title:"",description:"",storyPoints:"",status:"TO DO"},r=Object(l.useState)(c),m=Object(o.a)(r,2),i=m[0],d=m[1],u=Object(l.useState)(!1),v=Object(o.a)(u,2),E=v[0],h=v[1],p=Object(l.useState)(!1),f=Object(o.a)(p,2),w=f[0],b=f[1],x=Object(l.useState)(!1),k=Object(o.a)(x,2),y=k[0],O=k[1],T=function(e){var a=Object.keys(e);"title"===a[0]?h(!0):"description"===a[0]?b(!0):"storyPoints"===a[0]&&O(!0);for(var t=0,l=Object.keys(i);t<l.length;t++){var n=l[t];a[0]===n&&e[n]?c[n]=e[n]:a[0]!==n||e[n]?c[n]=i[n]:c[n]=""}d(c)},D=function(){!function(){for(var e=0,a=Object.keys(i);e<a.length;e++){var t=a[e];if(""===i[t])return!1}return!0}()?alert("You cannot save because some fields are left empty"):function(e){var a=localStorage.getItem("allTasks");a?((a=[a]).push(JSON.stringify(e)),localStorage.setItem("allTasks",a.toString())):(a=[JSON.stringify(e)],localStorage.setItem("allTasks",a))}(i)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{show:a,onHide:function(){return t(!1)},backdrop:"static",keyboard:!1,className:"ModalNewNote"},n.a.createElement(g.a.Header,{closeButton:!0},n.a.createElement(g.a.Title,null,n.a.createElement("p",{className:"display-6 text-dark text-center"},"New Note "))),n.a.createElement(g.a.Body,null,n.a.createElement("form",null,n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label"},"Title"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("input",{value:i.title,onChange:function(e){return T({title:e.target.value.toUpperCase()})},type:"text",className:"form-control",id:"inputEmail3"}),!(""!==i["title"]||!E)&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Title cannot be empty"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"inputPassword3",className:"col-sm-2 col-form-label"},"Description"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("textarea",{value:i.description,onChange:function(e){return T({description:e.target.value})},type:"text",className:"form-control",id:"inputPassword3"}),function(e){return!(""!==i[e]||!w)}("description")&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Description cannot be empty"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"exampleFormControlSelect1"},"Praise Points"),n.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",value:i.storyPoints,onChange:function(e){return T({storyPoints:e.target.value})},onClick:function(){return O(!0)}},n.a.createElement("option",{value:""},"choose how many points"),n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3"),n.a.createElement("option",null,"4"),n.a.createElement("option",null,"5")),function(e){return!(""!==i[e]||!y)}("storyPoints")&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Praise Points cannot be empty!")),n.a.createElement(N.a,{type:"submit",variant:"success",className:"aling-rigth",onClick:function(){return D()}},"Save")))))};var b=function(){var e=Object(l.useContext)(s).setShow,a=Object(d.f)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:" container-fluid  "},n.a.createElement("div",{className:"row text-center shadow-lg p-3  bg-trasparent rounded containermenu "},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"row containerMenuIcon"},n.a.createElement("div",{id:"IconMenu",className:" text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("div",{className:" p-0"},n.a.createElement("svg",{width:"2.5em",height:"2.5em",viewBox:"0 0 16 16",className:"bi bi-list p-0 text-white",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})))),n.a.createElement("div",{id:"IconMenu",className:" col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("div",{className:"d-none d-md-block text-white mt-2 text-left "},n.a.createElement("b",null,"MENU"))))),n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{onClick:function(){e(!0)},className:"row containerNewTaskIcon"},n.a.createElement("div",{id:"IconNewTask",className:" text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("button",{className:"btn text-dark p-0 ",type:"button","data-toggle":"modal","data-target":"#staticBackdrop"},n.a.createElement("svg",{width:"2.5em",height:"2.5em",viewBox:"0 0 16 16",className:"bi bi-plus-square-fill text-white",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"})))),n.a.createElement("div",{id:"IconNewTask",className:" col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("div",{className:"d-none d-md-block text-white mt-2 text-left "},n.a.createElement("b",null,"NEW TASK"))))),n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{onClick:function(){return a.push("/DashBoard")},className:"row  containerDashBoardIcon"},n.a.createElement("div",{id:"IconDashBoard",className:" text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("button",{className:"btn text-dark p-0"},n.a.createElement("svg",{width:"2.5em",height:"2.5em",viewBox:"0 0 16 16",className:"bi bi-grid-3x3-gap-fill text-white",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"})))),n.a.createElement("div",{id:"IconDashBoard",className:" col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("div",{className:"d-none d-md-block text-white mt-2 text-left "},n.a.createElement("b",null,"DASHBOARD"))))),n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{onClick:function(){return a.push("/ToDoTasks")},className:"row containerToDoIcon"},n.a.createElement("div",{id:"IconToDo",className:" text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("button",{className:"btn text-dark p-0"},n.a.createElement("svg",{width:"2.5em",height:"2.5em",viewBox:"0 0 16 16",className:"bi bi-list-check text-white",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"})))),n.a.createElement("div",{id:"IconToDo",className:" col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("div",{className:"d-none d-md-block text-white mt-2 text-left "},n.a.createElement("b",null,"TO DO"))))),n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{onClick:function(){return a.push("/DoneTasks")},className:"row containerDoneIcon"},n.a.createElement("div",{id:"IconDone",className:" text-center col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("button",{className:"btn text-dark p-0"},n.a.createElement("svg",{width:"2.5em",height:"2.5em",viewBox:"0 0 16 16",className:"bi bi-check2-square text-white",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"})))),n.a.createElement("div",{id:"IconDone",className:" col-sm-12 col-md-6 col-lg-6 col-lg-6 col-xl-6 p-0"},n.a.createElement("div",{className:"d-none d-md-block text-white mt-2 text-left "},n.a.createElement("b",null,"DONE")))))),n.a.createElement(w,null)))};t(51);var x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid bg-light  ml-0 mr-3  shadow-sm p-3   rounded navBar"},n.a.createElement("h1",{className:"text-center taskManagertxt "}," Task Manager ")))};var k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid bg-white RootContainer"},n.a.createElement("div",{className:"row  principalrow"},n.a.createElement("div",{className:"col-2 mr-0 p-0 fixed-top menuP "},n.a.createElement(b,null)),n.a.createElement("div",{className:"col-10 containerNavAndTask"},n.a.createElement("div",{className:"row fixed-top navs "},n.a.createElement(x,null))))))};t(52);var y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),n.a.createElement("div",{className:"col-12 TodoViewcontainer"},n.a.createElement("div",{className:"row "},n.a.createElement(f,null))))};t(53);var O=function(){var e=E({status:"DONE"});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row col-6 bg-light py-1 mt-4 ml-1 mr-2 titleTask pl-0 "},n.a.createElement("h1",{className:"lead "}," DONE")),n.a.createElement("div",{className:"container mt-4  "},n.a.createElement("div",{className:"row "},e.length>0&&e.map((function(e){return n.a.createElement("div",{key:e.title,className:"col-sm-8 col-md-6 col-lg-6 col-xl-6 mt-3 "},n.a.createElement(p,{task:e}))})))),n.a.createElement("div",{className:"container-fluid mt-4 hola"},0===e.length&&n.a.createElement("div",{className:"alert alert-warning ",role:"alert"},n.a.createElement("b",null,"DONE ")," section is empty!")))};var T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),n.a.createElement("div",{className:"col-12 DoneViewcontainer"},n.a.createElement("div",{className:"row "},n.a.createElement(O,null))))};var D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),n.a.createElement("div",{className:"row containerTask "},n.a.createElement("div",{className:"col-12 p-0 mr-5"},n.a.createElement(f,null)),n.a.createElement("div",{className:"col-12 p-0 "},n.a.createElement(O,null))))};var C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null,n.a.createElement(i.a,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:function(){return n.a.createElement(D,null)}}),n.a.createElement(d.a,{exact:!0,path:"/DashBoard",component:function(){return n.a.createElement(D,null)}}),n.a.createElement(d.a,{exact:!0,path:"/ToDoTasks",component:function(){return n.a.createElement(y,null)}}),n.a.createElement(d.a,{exact:!0,path:"/DoneTasks",component:function(){return n.a.createElement(T,null)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.01bfc556.chunk.js.map