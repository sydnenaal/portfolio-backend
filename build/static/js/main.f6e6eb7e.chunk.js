(this.webpackJsonpportfolio_front=this.webpackJsonpportfolio_front||[]).push([[0],{237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},275:function(e,t,a){e.exports=a(471)},281:function(e,t,a){},287:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){},416:function(e,t,a){},466:function(e,t,a){},467:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(51),l=a.n(r),s=(a(280),a(281),a(489)),i=a(9),o=a(49),m=a(35),u=a.n(m),d=a(62),h=a(24),E=a(8),g=a(18),p={insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}},f=(a(287),a(492)),v=a(482),b=a(474),j=function(e){var t=e.handleChangeLogin,a=e.handleChangePassword,n=e.handleLogin;return c.a.createElement("div",{className:"auth"},c.a.createElement("div",{className:"cardBody"},c.a.createElement(f.a,{fluid:!0},c.a.createElement(f.a.Content,null,c.a.createElement("div",{className:"cardContent"},c.a.createElement("div",{className:"cardContent_title"},c.a.createElement("p",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")),c.a.createElement("div",{className:"cardContent_input"},c.a.createElement(v.a,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"login",type:"login",onChange:t})),c.a.createElement("div",{className:"cardContent_input"},c.a.createElement(v.a,{fluid:!0,icon:"key",iconPosition:"left",placeholder:"password",type:"password",onChange:a})),c.a.createElement("div",{className:"cardContent_button"},c.a.createElement(b.a,{onClick:n,primary:!0},"\u0412\u0445\u043e\u0434")))))))},O=function(){var e=Object(h.g)(),t=(Object(h.h)().state||{from:{pathname:"/"}}).from,a=Object(n.useState)(""),r=Object(g.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(""),o=Object(g.a)(i,2),u=o[0],d=o[1],f={handleChangeLogin:function(e){return s(e.target.value)},handleChangePassword:function(e){return d(e.target.value)},handleLogin:function(){"Admin"===l&&"1"===u?(localStorage.setItem("isAuth",!0),e.replace(t)):m.store.addNotification(Object(E.a)(Object(E.a)({},p),{},{title:"\u041e\u0448\u0438\u0431\u043a\u0430",message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",type:"danger"}))}};return c.a.createElement(j,{handleChangeLogin:f.handleChangeLogin,handleChangePassword:f.handleChangePassword,handleLogin:f.handleLogin})},C=a(483),S=(a(374),function(e){return e.language.language}),k=function(e){return e.theme.theme},N=function(e){return e.appState.isLoading},y=function(e){return e.projects.projects},w=function(e){return e.messages.activeMessage},T=function(e){return e.messages.activeTab},_=function(e){return e.messages.tabSortedMessages},P=function(e){return e.messages.messages},A=(a(375),a(72)),M=function(e){var t=e.handleDrawerVisible,a=e.drawerVisible;return c.a.createElement("div",{className:"sidebar-item"},c.a.createElement("div",{className:"sidebar-item__icon icon_header",onClick:t},c.a.createElement("div",{id:"nav-icon4",className:a?" open":""},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))},x=function(e){var t=e.handleDrawerVisible,a=e.drawerVisible,n=e.children,r=Object(C.a)().messages.titles,l=Object(h.g)(),s=l.location.pathname;function i(){"/auth"===this.path?(localStorage.removeItem("isAuth"),l.push("/auth")):(l.push(this.path),t())}var o={backgroundColor:"#333"},m={maxWidth:a?"220px":"70px"};return c.a.createElement("div",{className:"drawer"},c.a.createElement("div",{className:"sidebar",style:m,onMouseLeave:function(){a&&t()}},c.a.createElement(M,{handleDrawerVisible:t,drawerVisible:a}),function(e){return[{icon:"home",title:e.home,path:"/"},{icon:"file",title:e.projects,path:"/projects"},{icon:"mail",title:e.mail,path:"/mail"},{icon:"settings",title:e.settings,path:"/settings"},{icon:"log out",title:e.logout,path:"/auth"}]}(r).map((function(e,t){return c.a.createElement("div",{className:"sidebar-item",onClick:i.bind(e),style:s===e.path?o:{},key:t},c.a.createElement("div",{className:"sidebar-item__icon"},c.a.createElement(A.a,{name:e.icon,size:"big"})),c.a.createElement("div",{className:"sidebar-item__title"},e.title))}))),c.a.createElement(c.a.Fragment,null,n))},D={dark:{backgroundColor:"#333",color:"white",transition:"all 0.5s ease"},light:{backgroundColor:"white",color:"black",transition:"all 0.5s ease"}},I=Object(n.memo)((function(e){var t=e.drawerVisible,a=e.drawerItems,n=e.handleDrawerVisible,r=e.title,l=e.subtitle,s=e.children,o=Object(i.c)((function(e){return e.theme.theme})),m={marginLeft:t?"220px":"70px"},u=D[o];return c.a.createElement(x,{drawerVisible:t,drawerItems:a,handleDrawerVisible:n},c.a.createElement("div",{className:"pageWithHeader",style:m},c.a.createElement("div",{className:"header",style:u},c.a.createElement("div",{className:"headerContent"},c.a.createElement("div",{className:"headerTitle"},r),l&&c.a.createElement("div",{className:"headerSubtitle"},"/",l))),c.a.createElement("div",{className:"body",style:u},s)))})),B=c.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],l=a[1];return c.a.createElement(I,Object.assign({handleDrawerVisible:function(){l(!r)},drawerVisible:r},e))})),L=function(){var e=Object(C.a)().messages,t=e.titles,a=e.home,n=a.title,r=a.visitors,l=a.messages,s=Object(i.c)(k);return c.a.createElement(B,{title:t.home},c.a.createElement("div",{className:"mainBody"},c.a.createElement("div",{className:"helloWorld"},c.a.createElement(f.a,{style:D[s],fluid:!0},c.a.createElement(f.a.Content,null,c.a.createElement("div",{className:"welcomeSlogan"},c.a.createElement("p",null,n))))),c.a.createElement("div",{className:"mainInformation"},c.a.createElement("div",{className:"infoBlock"},c.a.createElement(f.a,{style:D[s],fluid:!0},c.a.createElement(f.a.Content,null,c.a.createElement("div",{className:"newMessages"},c.a.createElement("p",{className:"infoTitle"},l.title),c.a.createElement("p",null,"0"))))),c.a.createElement("div",{className:"infoBlock"},c.a.createElement(f.a,{style:D[s],fluid:!0},c.a.createElement(f.a.Content,null,c.a.createElement("div",{className:"visitors"},c.a.createElement("p",{className:"infoTitle"},r.title),c.a.createElement("p",null,r.day,": 0"),c.a.createElement("p",null,r.week,": 0"),c.a.createElement("p",null,r.month,": 0"))))))))},R=function(){return c.a.createElement(L,null)},F=(a(92),a(484)),G="MESSAGES/SET_TAB",V=function(e){return{type:"PROJECTS/SET_PROJECTS",payload:e}},z=function(e){return{type:"MESSAGES/SET_MESSAGES",payload:e}},H=function(e){return{type:"MESSAGES/SET_TAB_SORTED_MESSAGES",payload:e}},J=function(e){return{type:"MESSAGES/SET_ACTIVE_MESSAGE",payload:e}},U=function(e){return{type:"APP_STATE/SET_APP_STATE",payload:e}},W=function(e){var t=e.locale,a=Object(i.c)((function(e){return e.theme.theme})),n=Object(i.b)(),r="dark"===a;return c.a.createElement("div",{id:"theme"},c.a.createElement("p",null,t.settings.theme),c.a.createElement(F.a,{slider:!0,checked:r,onChange:function(){var e="light"===a?"dark":"light";n(function(e){return{type:"THEME/SET_THEME",payload:e}}(e)),localStorage.setItem("theme",e)}}))},X=function(e){var t=e.locale,a=Object(n.useState)(!1),r=Object(g.a)(a,2),l=r[0],s=r[1],i={maxHeight:"".concat(l?300:0,"px")},o={transform:"rotate(".concat(l?180:0,"deg)")};return c.a.createElement("div",null,c.a.createElement("div",{className:"passwordChangeHeader",onClick:function(){return s(!l)}},c.a.createElement("p",null,t.settings.password),c.a.createElement("div",{className:"chevronIcon",style:o},c.a.createElement(A.a,{name:"chevron down"}))),c.a.createElement("div",{className:"passwordChange",style:i},c.a.createElement("div",{className:"passwordChange-input"},c.a.createElement(v.a,{size:"small",fluid:!0,placeholder:t.settings.enterPasswordPlaceholder})),c.a.createElement("div",{className:"passwordChange-input"},c.a.createElement(v.a,{size:"small",fluid:!0,placeholder:t.settings.repeatPasswordPlaceholder})),c.a.createElement("div",{className:"passwordChange-button"},c.a.createElement(b.a,null,t.settings.savePassword))))},Y=a(493),$=a(490),q=[{key:1,text:"en",value:"en"},{key:2,text:"ru",value:"ru"}],K=[W,X,function(e){var t=e.locale,a=Object(i.c)(S),n=Object(i.b)();return c.a.createElement("div",{id:"language"},c.a.createElement("p",null,t.settings.language),c.a.createElement(Y.a,{compact:!0},c.a.createElement($.a,{options:q,value:a,onChange:function(e,t){var a=t.value;n(function(e){return{type:"LANGUAGE/SET_LANGUAGE",payload:e}}(a)),localStorage.setItem("lang",a)},simple:!0,item:!0})))},function(e){var t=e.locale;return c.a.createElement("div",null,c.a.createElement("div",{className:"passwordChangeHeader"},c.a.createElement("p",null,t.settings.userData),c.a.createElement("div",{className:"chevronIcon"},c.a.createElement(A.a,{name:"chevron down"}))),c.a.createElement("div",null))},function(e){var t=e.locale;return c.a.createElement("div",{id:"reset"},c.a.createElement("p",null,t.settings.reset),c.a.createElement("div",null,c.a.createElement(b.a,{onClick:function(){try{localStorage.clear(),m.store.addNotification(Object(E.a)(Object(E.a)({},p),{},{title:"\u0421\u0431\u0440\u043e\u0441",message:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u0441\u0431\u0440\u043e\u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",type:"success"}))}catch(e){m.store.addNotification(Object(E.a)(Object(E.a)({},p),{},{title:"\u0421\u0431\u0440\u043e\u0441",message:"\u0421\u0431\u0440\u043e\u0441 \u043d\u0435 \u0443\u0434\u0430\u043b\u0441\u044f",type:"error"}))}}},t.settings.resetButton)))}],Q=Object(n.memo)((function(){var e=Object(C.a)().messages,t=Object(i.c)(k);return c.a.createElement(B,{title:e.titles.settings},c.a.createElement("div",{className:"settingsBody"},K.map((function(a,n){return c.a.createElement("div",{key:n,className:"settingsItem"},c.a.createElement(f.a,{fluid:!0,style:D[t]},c.a.createElement(f.a.Content,null,c.a.createElement(a,{locale:e}))))}))))})),Z=function(){return c.a.createElement(Q,null)},ee=a(30),te=a.n(ee),ae=a(45),ne=a(38),ce=a.n(ne),re=function(){var e=Object(ae.a)(te.a.mark((function e(t){var a,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.cancelToken,e.prev=1,e.next=4,ce.a.get("".concat(se,"/messages"),{cancelToken:a});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),ce.a.isCancel(e.t0)?console.log("\u041e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"):m.store.addNotification(Object(E.a)(Object(E.a)({},p),{},{title:"\u041e\u0448\u0438\u0431\u043a\u0430",message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",type:"danger"}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(ae.a)(te.a.mark((function e(t){var a,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.cancelToken,e.prev=1,e.next=4,ce.a.get("".concat(se,"/projects"),{cancelToken:a});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),ce.a.isCancel(e.t0)?console.log("\u041e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"):m.store.addNotification(Object(E.a)(Object(E.a)({},p),{},{title:"\u041e\u0448\u0438\u0431\u043a\u0430",message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u044b",type:"danger"}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),se="https://5ea19fb6b9f5ca00166c1ee7.mockapi.io",ie=a(253),oe=a.n(ie),me=function(e){return oe()(e).format("MMM Do YY hh:mm")},ue=(a(416),a(487)),de=function(e){var t=e.handleClose,a=e.isOpen,n=e.title,r=e.children,l=e.handleSuccess,s=e.size;return c.a.createElement(c.a.Fragment,null,c.a.createElement(ue.a,{open:a,onClose:t,size:s},c.a.createElement(ue.a.Header,null,n),c.a.createElement(ue.a.Content,null,r),c.a.createElement(ue.a.Actions,null,c.a.createElement(b.a,{onClick:t},"\u041e\u0442\u043c\u0435\u043d\u0430"),c.a.createElement(b.a,{onClick:l},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))))},he=a(262),Ee=a(491),ge=function(e){return[{accessor:"name",title:e.name},{accessor:"type",title:e.type},{accessor:"client",title:e.client},{accessor:"createDate",title:e.createDate}]},pe=[{key:0,text:10,value:10},{key:1,text:15,value:15},{key:2,text:20,value:20}],fe=function(e){var t=e.pageSize,a=e.handlers,n=e.pageCount,r=e.page,l=Object(C.a)().messages.table;console.log(a);var s=a.handleChangePageSize,i=a.handleChangePage,o=a.handleChevronLeft,m=a.handleChevronRight,u=[];if(n<6)for(var d=1;d<=n;d++)u.push(d);if(n>=6)if(r<3)for(var h=1;h<=3;h++)u.push(h);else if(r>n-2){console.log("there");for(var E=n-4;E<=n;E++)u.push(E)}else for(var g=r-1;g<=r+1;g++)u.push(g);return n>5&&r<n-2&&(u.push("..."),u.push(n)),c.a.createElement("div",{className:"tableFooter"},c.a.createElement("span",null,l.rows,c.a.createElement($.a,{inline:!0,onChange:s,options:pe,value:t})),c.a.createElement(Y.a,{size:"mini",floated:"right",pagination:!0},c.a.createElement(Y.a.Item,{icon:!0,onClick:o,cursor:"pointer"},c.a.createElement(A.a,{name:"chevron left"})),u.map((function(e,t){return"..."===e?c.a.createElement(Y.a.Item,{key:"index",disabled:!0},"..."):c.a.createElement(Y.a.Item,{key:t,active:r===e,onClick:function(){return i(e)}},e)})),c.a.createElement(Y.a.Item,{icon:!0,onClick:m,cursor:"pointer"},c.a.createElement(A.a,{name:"chevron right"}))))},ve=function(e){var t=e.handlers,a=e.page,n=e.pageCount,r=Object(d.a)(e,["handlers","page","pageCount"]),l=Object(E.a)(Object(E.a)({},t),{},{handleChevronLeft:function(){return a>1&&t.handleChangePage(a-1)},handleChevronRight:function(){return a<n&&t.handleChangePage(a+1)}});return c.a.createElement(fe,Object.assign({handlers:l,page:a,pageCount:n},r))},be={overflow:"visible"},je=Object(n.memo)((function(e){var t=e.headerCells,a=e.data,n=e.compact,r=e.handlers,l=e.showPagination,s=Object(d.a)(e,["headerCells","data","compact","handlers","showPagination"]),o=Object(i.c)((function(e){return e.theme.theme})),m=t.length,u={compact:n?"very":null,inverted:"dark"===o},h=t.map((function(e,t){var a=r.handleSort.bind(e),n=r.isSorted.bind(e)();return c.a.createElement(Ee.a.HeaderCell,{onClick:a,sorted:n,key:t},e.title)})),E=a.map((function(e,a){var n=t.map((function(t,a){return c.a.createElement(Ee.a.Cell,{key:a},e[t.accessor])}));return c.a.createElement(Ee.a.Row,{key:a},n)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ee.a,{compact:u.compact,inverted:u.inverted,sortable:!0,selectable:!0,celled:!0,fixed:!0},c.a.createElement(Ee.a.Header,null,c.a.createElement(Ee.a.Row,null,h)),c.a.createElement(Ee.a.Body,null,E),l&&c.a.createElement(Ee.a.Footer,{fullWidth:!0},c.a.createElement(Ee.a.Row,null,c.a.createElement(Ee.a.HeaderCell,{style:be,colSpan:m},c.a.createElement(ve,Object.assign({handlers:r},s)))))))})),Oe={ascending:"descending",descending:"ascending"},Ce=function(e){var t=e.headerNames,a=e.tableData,r=Object(d.a)(e,["headerNames","tableData"]),l=Object(C.a)().messages.table.columnNames,s=Object(n.useState)(),i=Object(g.a)(s,2),o=i[0],m=i[1],u=Object(n.useState)(),h=Object(g.a)(u,2),E=h[0],p=h[1],f=Object(n.useState)(1),v=Object(g.a)(f,2),b=v[0],j=v[1],O=Object(n.useState)(10),S=Object(g.a)(O,2),k=S[0],N=S[1],y=Object(n.useState)(a),w=Object(g.a)(y,2),T=w[0],_=w[1],P=Object(n.useState)(),A=Object(g.a)(P,2),M=A[0],x=A[1];Object(n.useEffect)((function(){_(a.slice((b-1)*k,b*k)),x(Math.ceil(a.length/k))}),[a,b,k]);var D={handleChangePageSize:function(e,t){var a=t.value;N(a),j(1)},handleChangePage:j,isSorted:function(){return o===this.accessor?E:null},handleSort:function(){o!==this.accessor?(_(Object(he.sortBy)(T,[this.accessor])),m(this.accessor),p("ascending")):(_(T.reverse()),p(Oe[E]))}},I=t(l);return c.a.createElement(je,Object.assign({headerCells:I,pageSize:k,data:T,handlers:D,pageCount:M,page:b},r))},Se=a(485),ke=function(e){var t=e.children,a=Object(i.c)(N);return c.a.createElement(c.a.Fragment,null,a?c.a.createElement(Se.a,{active:!0,inline:"centered"}):t)},Ne=function(){return c.a.createElement("div",{className:"projectAddForm"},c.a.createElement("div",{className:"ProjectFormField"},c.a.createElement(v.a,{fluid:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})),c.a.createElement("div",{className:"ProjectFormField"},c.a.createElement(v.a,{fluid:!0,placeholder:"\u0422\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})),c.a.createElement("div",{className:"ProjectFormField"},c.a.createElement(v.a,{fluid:!0,placeholder:"\u041a\u043b\u0438\u0435\u043d\u0442"})),c.a.createElement("div",{className:"ProjectFormField"},c.a.createElement(v.a,{fluid:!0,placeholder:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"})))},ye=function(e){var t=e.compact,a=e.handleChange,n=e.handleChangeFilter,r=e.handleFilterData,l=e.handleToggleModal,s=e.modalState,o=e.handleClickEdit,m=Object(C.a)().messages,u=m.titles,d=m.projects,h=Object(i.c)(k),E=Object(i.c)(y);return c.a.createElement(B,{title:u.projects},c.a.createElement("div",{className:"projectsBody"},c.a.createElement(f.a,{fluid:!0,style:D[h]},c.a.createElement(f.a.Content,null,c.a.createElement("div",{className:"projectsContent"},c.a.createElement("div",{className:"projectsTitle"},d.title),c.a.createElement("div",{className:"projectsActions"},c.a.createElement("div",{className:"projectsButtons"},c.a.createElement("div",{className:"crudButton"},c.a.createElement(b.a,{onClick:l},d.add)),c.a.createElement("div",{className:"crudButton"},c.a.createElement(b.a,null,d.delete)),c.a.createElement("div",{className:"crudButton"},c.a.createElement(b.a,{onClick:o},d.update)),c.a.createElement("div",{className:"crudButton"},c.a.createElement("p",null,d.dense),c.a.createElement(F.a,{toggle:!0,onChange:a}))),c.a.createElement(v.a,{icon:"search",placeholder:d.search,onChange:n})),c.a.createElement("div",{className:"projectsTable"},c.a.createElement(ke,null,E&&c.a.createElement(Ce,{showPagination:!0,compact:t,headerNames:ge,tableData:r(E)})))))),c.a.createElement(de,{isOpen:s,handleClose:l,title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",size:"tiny"},c.a.createElement(Ne,null))))},we=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),s=Object(g.a)(l,2),o=s[0],m=s[1],u=Object(n.useState)(""),d=Object(g.a)(u,2),p=d[0],f=d[1],v=Object(i.c)(y),b=Object(i.b)(),j=Object(h.g)();return Object(n.useEffect)((function(){var e=ce.a.CancelToken.source();return!v&&function(){var e=Object(ae.a)(te.a.mark((function e(t){var a,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(U(!0)),e.next=3,le({cancelToken:t.token});case 3:(a=e.sent)&&(n=a.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{isChecked:!1,createDate:me(e.createDate)})})),b(V(n))),b(U(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e),function(){e.cancel()}}),[b,v]),c.a.createElement(ye,{compact:a,modalState:o,handleChangeFilter:function(e){var t=e.target.value;return f(t)},handleToggleModal:function(){return m(!o)},handleChange:function(){return r(!a)},handleClickEdit:function(){return j.push("/projects/0")},handleFilterData:function(e){return e.filter((function(e){return Object.values(e).filter((function(e){return-1!==e.toString().toLowerCase().indexOf(p.toLowerCase())})).length>0}))}})},Te=(a(237),a(97)),_e=(a(238),c.a.memo((function(e){var t=e.children,a={borderColor:"light"===Object(i.c)((function(e){return e.theme.theme}))?"rgba(0,0,0, 0.15)":"gray"};return c.a.createElement("div",{className:"ui-card",style:a},t)}))),Pe=c.a.memo((function(e){return c.a.createElement(_e,e)})),Ae=a(473),Me=Object(n.memo)((function(e){var t=e.title,a=e.text,r=e.isRead,l=e.isImportant,s=e.handleCheck,o=e.id,m=e.isChecked,u=e.client,d=e.date,p=Object(i.b)(),f=Object(h.g)(),v=Object(n.useState)(!1),b=Object(g.a)(v,2),j=b[0],O=b[1],C=Object(n.useState)({}),S=Object(g.a)(C,2),k=S[0],N=S[1],y=r?"envelope open outline":"envelope outline",w={paddingLeft:j?"100px":"0px"};return Object(n.useEffect)((function(){var e={transitionDelay:"0.".concat(function(){var e=2*o;return e<10?"0"+e:e}(),"s"),opacity:1};setTimeout((function(){return N(e)}),0)}),[o]),c.a.createElement("div",{className:"messageComponent-hover",onMouseLeave:function(){return j&&O(!1)}},c.a.createElement("div",{className:"messageComponent",style:Object(E.a)(Object(E.a)({},k),w)},c.a.createElement("div",{className:"deleteMessage"},c.a.createElement("div",{className:"actionIcon"},c.a.createElement(A.a,{size:"big",name:"trash alternate"})),c.a.createElement("div",{className:"actionIcon"},c.a.createElement(A.a,{size:"big",name:"warning"}))),c.a.createElement("div",{className:"messageContainer"},c.a.createElement(Pe,null,c.a.createElement("div",{className:"messageContent",onContextMenu:function(e){return e.preventDefault()},onMouseDown:function(e){e.preventDefault(),2===e.button&&O(!j)}},c.a.createElement("div",{className:"indicator"},!r&&c.a.createElement("div",{className:"readPoint"}),l&&c.a.createElement("div",{className:"importantPoint"})),c.a.createElement("div",{className:"checkboxContainer"},c.a.createElement("div",{className:"checkbox"},c.a.createElement(Ae.a,{checked:m,onChange:function(){return s(o)}}))),c.a.createElement("div",{className:"redirect",onClick:function(){p(J({title:t,text:a,client:u,date:d})),f.push("mail/".concat(o))}},c.a.createElement("div",{className:"image"},c.a.createElement(A.a,{size:"huge",name:y})),c.a.createElement("div",{className:"messageInfo"},c.a.createElement("div",{className:"messageMeta"},c.a.createElement("div",{className:"title"},c.a.createElement("strong",null,u)),c.a.createElement("div",{className:"date"},me(d))),c.a.createElement("div",{className:"messageText"},c.a.createElement("div",{className:"title"},c.a.createElement("strong",null,t)),c.a.createElement("div",{className:"text"},a)))))))))})),xe=function(e){var t=e.handleCheck,a=Object(i.c)(_)[Object(i.c)(T)],r=Object(n.useState)(10),l=Object(g.a)(r,2),s=l[0],o=l[1],m=Object(n.useState)(1),u=Object(g.a)(m,2),d=u[0],h=u[1],E=Object(n.useState)(),p=Object(g.a)(E,2),f=p[0],v=p[1],b=Object(n.useState)([]),j=Object(g.a)(b,2),O=j[0],C=j[1];Object(n.useEffect)((function(){a&&(C(a.slice((d-1)*s,d*s)),v(Math.ceil(a.length/s)))}),[a,d,s]);var S={handleChangePageSize:function(e,t){var a=t.value;o(a),h(1)},handleChangePage:h};return c.a.createElement(Pe,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"messagesInnerArea"},O.length>0?O.map((function(e,a){return c.a.createElement(Me,Object.assign({},e,{handleCheck:t,index:a,key:a}))})):c.a.createElement("div",{className:"emptyMessage"},"Empty")),c.a.createElement("div",{className:"messagesPagination"},c.a.createElement(ve,{handlers:S,pageSize:s,page:d,pageCount:f}))))},De=function(e){var t=e.title,a=e.messagesCounter,n=e.locale,r=Object(i.c)(T),l=Object(i.c)(k),s=Object(i.b)(),o={borderBottom:"2px solid ".concat(r===t?"dark"===l?"white":"grey":"transparent")};return c.a.createElement("div",{style:o,className:"tab",key:t,onClick:function(){return s({type:G,payload:t})}},c.a.createElement("span",{style:D[l]},n.tabs[t]),a&&c.a.createElement(Te.a,null,a))},Ie=(a(239),c.a.memo((function(e){var t=e.tabs,a=void 0===t?[]:t,n=e.children;return c.a.createElement("div",{className:"ui-tabs"},c.a.createElement("div",{className:"ui-tabs_tabsContainer"},a),c.a.createElement("div",{className:"ui-tabs_content"},n))}))),Be=c.a.memo((function(e){return c.a.createElement(Ie,e)})),Le=Object(n.memo)((function(e){var t=e.handleCheck,a=e.handleCheckAll,n=e.checked,r=e.tabsNames,l=Object(C.a)().messages,s=l.titles,o=l.mail,m=Object(i.c)(_),u=Object(i.c)(T),d=r.map((function(e,t){return c.a.createElement(De,{key:t,locale:o,messagesCounter:m[e]?m[e].length.toString():"0",title:e})}));return c.a.createElement(B,{title:s.mail},c.a.createElement("div",{className:"mailBody"},c.a.createElement("div",{className:"mailActions"},c.a.createElement("div",{className:"buttons"},c.a.createElement(b.a,{onClick:function(){return a({setCheck:!0})}},o.buttons.checkAll),c.a.createElement(b.a,{onClick:function(){return a({setCheck:!1})}},o.buttons.uncheckAll),c.a.createElement(b.a,{disabled:0===n},o.buttons.checkAsImportant),c.a.createElement(b.a,{disabled:0===n},o.buttons["trash"===u?"remove":"removeToTrash"])),c.a.createElement("div",{className:"search"},c.a.createElement(v.a,{placeholder:o.searchPlaceholder,icon:"search"}))),c.a.createElement(Be,{tabs:d},c.a.createElement(ke,null,c.a.createElement(xe,{handleCheck:t})))))})),Re=["all","unread","read","important","trash"],Fe={all:function(e){return!e.isDeleted},read:function(e){return e.isRead&&!e.isDeleted},unread:function(e){return!e.isRead&&!e.isDeleted},important:function(e){return e.isImportant&&!e.isDeleted},trash:function(e){return e.isDeleted}},Ge=Object(n.memo)((function(){var e=Object(i.b)(),t=Object(i.c)(T),a=Object(i.c)(P),r=Object(n.useState)(0),l=Object(g.a)(r,2),s=l[0],o=l[1],u=function(e){o(e.reduce((function(e,t){return"object"===typeof e?e.isChecked+t.isChecked:e+t.isChecked})))};return Object(n.useEffect)((function(){var t=ce.a.CancelToken.source();return!a&&function(){var t=Object(ae.a)(te.a.mark((function t(a){var n,c,r;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(U(!0)),t.next=3,re({cancelToken:a.token});case 3:(n=t.sent)&&(c=n.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{isChecked:!1})})),r={},Re.forEach((function(e){r[e]=c.filter(Fe[e])})),e(z(c)),localStorage.getItem("mailNotify")||(localStorage.setItem("mailNotify","showed"),m.store.addNotification(Object(E.a)(Object(E.a)({},p),{},{title:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430",message:"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043c\u0435\u043d\u044e \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u043f\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044e \u043f\u0440\u0430\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438",type:"info",dismiss:{duration:25e3}}))),e(H(r))),e(U(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(t),function(){t.cancel()}}),[e,a]),c.a.createElement(Le,{tabsNames:Re,messages:a,handleCheckAll:function(n){var c=n.setCheck,r=a.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{isChecked:Fe[t](e)?c:e.isChecked})})),l={};Re.forEach((function(e){l[e]=r.filter(Fe[e])})),e(z(r)),e(H(l)),u(r)},handleCheck:function(t){var n=a.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{isChecked:e.id===t?!e.isChecked:e.isChecked})})),c={};Re.forEach((function(e){c[e]=n.filter(Fe[e])})),e(z(n)),e(H(c)),u(n)},checked:s})})),Ve=(a(466),function(e){var t=e.handleClickBack,a=Object(C.a)().messages.titles,n=Object(i.c)(w);return c.a.createElement(B,{title:a.mail,subtitle:"read"},c.a.createElement("div",{className:"messagePage"},c.a.createElement("div",{className:"messagePage-buttons"},c.a.createElement(b.a,{onClick:t},"\u041d\u0430\u0437\u0430\u0434"),c.a.createElement(b.a,null,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),c.a.createElement(b.a,null,"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0436\u043d\u043e\u0435")),c.a.createElement(Pe,null,c.a.createElement("div",{className:"messagePage-body"},c.a.createElement(ke,null,c.a.createElement("div",null,c.a.createElement("div",{className:"messagePage-Body__date"},c.a.createElement("span",null,"\u0414\u0430\u0442\u0430: "),n&&me(n.date)),c.a.createElement("div",{className:"messagePage-Body__from"},c.a.createElement("span",null,"\u041e\u0442 \u043a\u043e\u0433\u043e: "),n&&n.client),c.a.createElement("div",{className:"messagePage-Body__theme"},c.a.createElement("span",null,"\u0422\u0435\u043c\u0430: "),n&&n.title),c.a.createElement("div",{className:"messagePage-Body__text"},c.a.createElement("span",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: "),n&&n.text)))))))}),ze=function(){var e=Object(h.g)(),t=Object(h.i)().message,a=Object(i.c)((function(e){return e.messages.messages})),r=Object(i.b)();return Object(n.useEffect)((function(){var e=ce.a.CancelToken.source();return!a&&function(){var e=Object(ae.a)(te.a.mark((function e(a){var n,c,l,s;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(U(!0)),e.next=3,re({cancelToken:a.token});case 3:(n=e.sent)&&(c=n.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{isChecked:!1})})),l=c.filter((function(e){return e.id.toString()===t.toString()}))[0],s={},Re.forEach((function(e){s[e]=c.filter(Fe[e])})),r(z(c)),r(H(s)),r(J(l))),r(U(!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e),function(){e.cancel()}}),[a,r,t]),c.a.createElement(Ve,{handleClickBack:function(){return e.goBack()}})},He=(a(467),{display:"none"}),Je=function(){var e=Object(n.useState)(),t=Object(g.a)(e,2),a=t[0],r=t[1],l=Object(n.useRef)();return c.a.createElement("div",{className:"form-text"},c.a.createElement("div",{className:"form-text_title"},a||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"),c.a.createElement(b.a,{onClick:function(){return l.current.click()}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b"),c.a.createElement("input",{type:"file",style:He,ref:l,onChange:function(e){return r(e.target.value)}}))},Ue=a(488),We=a(486),Xe=function(){return c.a.createElement("div",{className:"form_textArea"},c.a.createElement(Ue.a,null,c.a.createElement(We.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"})))},Ye=function(e){var t=e.onBack,a=e.isTextModalShow,n=e.isPictureModalShow,r=e.handleToggleTextModal,l=e.handleTogglePictureModal,s=Object(C.a)().messages.titles;return c.a.createElement(B,{title:s.projects,subtitle:"read"},c.a.createElement("div",{className:"projectsSaveBody"},c.a.createElement("div",{className:"projectsSaveActions"},c.a.createElement(b.a,{onClick:t},"\u041d\u0430\u0437\u0430\u0434"),c.a.createElement(b.a,{onClick:l},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"),c.a.createElement(b.a,{onClick:r},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442")),c.a.createElement(Pe,null,c.a.createElement("div",{className:"projectContent"},"empty"))),c.a.createElement(de,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442",isOpen:a,handleClose:r},c.a.createElement(Xe,null)),c.a.createElement(de,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",isOpen:n,handleClose:l},c.a.createElement(Je,null)))},$e=function(){var e=Object(h.g)(),t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(g.a)(s,2),o=i[0],m=i[1];return c.a.createElement(Ye,{isTextModalShow:r,isPictureModalShow:o,onBack:function(){return e.goBack()},handleToggleTextModal:function(){return l(!r)},handleTogglePictureModal:function(){return m(!o)}})},qe=function(e){var t=e.path,a=e.getToken;return function(e){var n=e.children,r=Object(d.a)(e,["children"]);return c.a.createElement(h.b,{path:r.path,render:function(e){var r=e.location,l={pathname:t,state:{from:r}};return a()?n:c.a.createElement(h.a,{to:l})}})}},Ke=qe({path:"/auth",getToken:function(){return localStorage.getItem("isAuth")}}),Qe=qe({path:"/",getToken:function(){return!localStorage.getItem("isAuth")}}),Ze=function(){return c.a.createElement(h.d,null,c.a.createElement(Ke,{path:"/mail/:message"},c.a.createElement(ze,null)),c.a.createElement(Ke,{path:"/projects/:project"},c.a.createElement($e,null)),c.a.createElement(Ke,{path:"/projects"},c.a.createElement(we,null)),c.a.createElement(Ke,{path:"/mail"},c.a.createElement(Ge,null)),c.a.createElement(Ke,{path:"/settings"},c.a.createElement(Z,null)),c.a.createElement(Qe,{path:"/auth"},c.a.createElement(O,null)),c.a.createElement(Ke,{path:"/"},c.a.createElement(R,null)))},et={en:{titles:{home:"Main",projects:"Projects",mail:"Mail",settings:"Settings",logout:"Exit"},mail:{empty:"Empty",searchPlaceholder:"Search...",buttons:{checkAll:"Select all",uncheckAll:"Remove selection",checkAsImportant:"Check as important",removeToTrash:"Remove to trash",remove:"Remove"},tabs:{all:"All",read:"Read",unread:"Unread",important:"Important",trash:"Trash"}},settings:{theme:"Dark theme",language:"Language",password:"Change password",userData:"Change contact information",enterPasswordPlaceholder:"Enter new password",repeatPasswordPlaceholder:"Repeat new password",savePassword:"Save",reset:"Reset settings",resetButton:"agree"},home:{title:"Welcome, Administrator",visitors:{title:"New visitors for last time",day:"Today",week:"This week",month:"This month"},messages:{title:"New messages"}},projects:{title:"Projects list",add:"Add project",delete:"Delete checked",update:"Edit",search:"Search...",dense:"Columns dense"},table:{rows:"Rows per page ",columnNames:{name:"Name",type:"Type",client:"Client",createDate:"Creation date"}}},ru:{titles:{home:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",projects:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",mail:"\u041f\u043e\u0447\u0442\u0430",settings:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",logout:"\u0412\u044b\u0445\u043e\u0434"},mail:{empty:"\u041f\u0443\u0441\u0442\u043e",searchPlaceholder:"\u041d\u0430\u0439\u0442\u0438...",buttons:{checkAll:"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0435",uncheckAll:"\u0421\u043d\u044f\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435",checkAsImportant:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0436\u043d\u043e\u0435",removeToTrash:"\u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",remove:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"},tabs:{all:"\u0412\u0441\u0435",read:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0435",unread:"\u041d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0435",important:"\u0412\u0430\u0436\u043d\u044b\u0435",trash:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}},settings:{theme:"\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430",language:"\u042f\u0437\u044b\u043a",password:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",userData:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",enterPasswordPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",repeatPasswordPlaceholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",savePassword:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",reset:"\u0421\u0431\u0440\u043e\u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",resetButton:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"},home:{title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440",visitors:{title:"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f",day:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",week:"\u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e",month:"\u0437\u0430 \u043c\u0435\u0441\u044f\u0446"},messages:{title:"\u041d\u043e\u0432\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}},projects:{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432",add:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",delete:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435",update:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",search:"\u041d\u0430\u0439\u0442\u0438...",dense:"\u0421\u0436\u0430\u0442\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432"},table:{rows:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a ",columnNames:{name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"\u0422\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430",client:"\u041a\u043b\u0438\u0435\u043d\u0442",createDate:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}}}},tt=function(){var e=Object(i.c)(S);return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null),c.a.createElement(s.a,{locale:e,messages:et[e]},c.a.createElement(o.a,{basename:"portfolio"},c.a.createElement(Ze,null))))};a(468),a(469),a(470),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var at=a(80),nt={messages:null,tabSortedMessages:[],activeMessage:null,activeTab:"all"},ct={projects:null,activeProject:"all"},rt={theme:localStorage.getItem("theme")||"light"},lt={language:localStorage.getItem("lang")||"en"},st={isLoading:!1},it=Object(at.b)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES/SET_MESSAGES":return Object(E.a)(Object(E.a)({},e),{},{messages:t.payload});case"MESSAGES/SET_TAB_SORTED_MESSAGES":return Object(E.a)(Object(E.a)({},e),{},{tabSortedMessages:t.payload});case G:return Object(E.a)(Object(E.a)({},e),{},{activeTab:t.payload});case"MESSAGES/SET_ACTIVE_MESSAGE":return Object(E.a)(Object(E.a)({},e),{},{activeMessage:t.payload});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJECTS/SET_PROJECTS":return Object(E.a)(Object(E.a)({},e),{},{projects:t.payload});case"PROJECTS/SET_ACTIVE_PROJECT":return Object(E.a)(Object(E.a)({},e),{},{activeProjects:t.payload});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"THEME/SET_THEME":return Object(E.a)(Object(E.a)({},e),{},{theme:t.payload});default:return e}},language:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANGUAGE/SET_LANGUAGE":return Object(E.a)(Object(E.a)({},e),{},{language:t.payload});default:return e}},appState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_STATE/SET_APP_STATE":return Object(E.a)(Object(E.a)({},e),{},{isLoading:t.payload});default:return e}}}),ot=Object(at.c)(it,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(c.a.createElement(i.a,{store:ot},c.a.createElement(tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){}},[[275,1,2]]]);
//# sourceMappingURL=main.f6e6eb7e.chunk.js.map