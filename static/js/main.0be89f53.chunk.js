(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is 30 symbols"}}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return b}));var r=n(3),a=n(23),c=(n(0),n(41)),o=n.n(c),s=(n(26),n(22),n(1)),i=["input","meta","child","element"],u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=(e.child,e.element,Object(a.a)(e,i)),r=t.touched&&t.error;return Object(s.jsxs)("div",{className:o.a.formControl+" "+(r?o.a.error:""),children:[Object(s.jsx)("div",{children:n.children}),r&&Object(s.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(s.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(s.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},30:function(e,t,n){"use strict";var r=n.p+"static/media/_______.77dd8198.gif",a=(n(0),n(1));t.a=function(e){return Object(a.jsx)("div",{style:{backgroundColor:"red"},children:Object(a.jsx)("img",{src:r})})}},34:function(e,t,n){e.exports={paginator:"paginator_paginator__2kcd8",pageNumber:"paginator_pageNumber__2kIvn",selectedPage:"paginator_selectedPage__3GeDA"}},35:function(e,t,n){e.exports={header:"Header_header__1XIDO",logoName:"Header_logoName__1ML9n",loginBlock:"Header_loginBlock__3-P9p"}},41:function(e,t,n){e.exports={formControl:"formControls_formControl__V6L_5",error:"formControls_error__KwNW7"}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(5),a=n.n(r),c=n(11),o=n(33),s=n(3),i=n(8),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j={PostData:[{id:1,message:"It`s my first post",value:8},{id:2,message:"Hi, how are you?",value:12},{id:3,message:"I'm fine",value:3}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},f=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,value:0};return Object(s.a)(Object(s.a)({},e),{},{PostData:[].concat(Object(o.a)(e.PostData),[n])});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});default:return e}}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(33),a=n(3),c="SEND-MESSAGE",o={dialogsData:[{id:1,name:"Ivan"},{id:2,name:"Artiom"},{id:3,name:"Petia"},{id:4,name:"Dasha"},{id:5,name:"Andrey"},{id:6,name:"Ira"}],messageData:[{id:1,message:"Hellow"},{id:2,message:"You watch films?"},{id:3,message:"Go to the park"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[{id:6,message:n}])});default:return e}}},44:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){e.exports={userPhoto:"users_userPhoto__18vB9",selectedPage:"users_selectedPage__3SRRy"}},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(54),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e3c4ced6-9885-47d3-91e4-95080c364fd2"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e))},follow:function(e){return a.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please"),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},86:function(e,t,n){},9:function(e,t,n){e.exports={nav:"Navbar_nav__1mswx",item:"Navbar_item__2QWft",activeLink:"Navbar_activeLink__2E06U"}},98:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),o=n.n(c),s=(n(44),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,107)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))}),i=n(16),u=n(42),l=n(43),d=n(5),j=n.n(d),b=n(11),f=n(3),p=n(8),g=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(f.a)(Object(f.a)({},e),r):e}))},O="FOLLOW",h="UNFOLLOW",m="SET_USERS",v="SET_CURRENT_PAGE",x="SET_TOTAL_USERS_COUNT",w="TOGGLE_IS_FETCHING",C="TOGGLE_IS_FOLLOWING_PROGRESS",A={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:!1},P=function(e){return{type:O,userId:e}},N=function(e){return{type:h,userId:e}},D=function(e){return{type:v,currentPage:e}},S=function(e){return{type:w,isFetching:e}},y=function(e){return{type:w,followingInProgress:e}},E=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y(!0)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(y(!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(f.a)(Object(f.a)({},e),{},{users:g(e.users,t.userId,"id",{followed:!0})});case h:return Object(f.a)(Object(f.a)({},e),{},{users:g(e.users,t.userId,"id",{followed:!1})});case m:return Object(f.a)(Object(f.a)({},e),{},{users:t.users});case v:return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case x:return Object(f.a)(Object(f.a)({},e),{},{totalUsersCount:t.count});case w:return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case C:return Object(f.a)(Object(f.a)({},e),{},{followingInProgress:t.followingInProgress});default:return e}},Q="SET_USER_DATA",T={id:null,login:null,email:null,isAuth:!1},z=function(e,t,n,r){return{type:Q,payload:{userId:e,login:n,email:t,isAuth:r}}},L=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r,a,c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,o=r.login,t(z(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},U=n(55),F="INITIALIZED_SUCCESS",B={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},Z=Object(i.b)({profilePage:u.b,dialogsPage:l.a,usersPage:I,auth:k,app:G}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,V=Object(i.d)(Z,K(Object(i.a)(U.a))),H=n(17),M=n(18),X=n(20),R=n(19),W=(n(86),n(9)),Y=n.n(W),J=n(7),q=n(1),_=function(){return Object(q.jsxs)("nav",{className:Y.a.nav,children:[Object(q.jsx)("div",{className:Y.a.item,children:Object(q.jsx)(J.b,{to:"/Profile",activeClassName:Y.a.activeLink,children:"Profile"})}),Object(q.jsx)("div",{className:Y.a.item,children:Object(q.jsx)(J.b,{to:"/Dialogs",activeClassName:Y.a.activeLink,children:"Messages"})}),Object(q.jsx)("div",{className:Y.a.item,children:Object(q.jsx)(J.b,{to:"/News",activeClassName:Y.a.activeLink,children:"News"})}),Object(q.jsx)("div",{className:Y.a.item,children:Object(q.jsx)(J.b,{to:"/Music",activeClassName:Y.a.activeLink,children:"Music"})}),Object(q.jsx)("div",{className:Y.a.item,children:Object(q.jsx)(J.b,{to:"/users",activeClassName:Y.a.activeLink,children:"Users"})}),Object(q.jsx)("div",{className:Y.a.item,children:Object(q.jsx)(J.b,{to:"/Settings",activeClassName:Y.a.activeLink,children:"Settings"})})]})},$=n(56),ee=n.n($),te=function(e){return Object(q.jsx)("div",{className:ee.a.content,children:"News"})},ne=n(57),re=n.n(ne),ae=function(e){return Object(q.jsx)("div",{className:re.a.content,children:"Music"})},ce=n(58),oe=n.n(ce),se=function(e){return Object(q.jsx)("div",{className:oe.a.content,children:"Settings"})},ie=n(6),ue=n(15),le=n(23),de=n(32),je=n(53),be=n(34),fe=n.n(be),pe=n(59),ge=n.n(pe),Oe=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/s),j=Object(r.useState)(1),b=Object(je.a)(j,2),f=b[0],p=b[1],g=(f-1)*s+1,O=f*s;return Object(q.jsxs)("div",{className:fe.a.paginator,children:[f>1&&Object(q.jsx)("button",{onClick:function(){p(f-1)},children:"PREV"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(q.jsx)("span",{className:ge()(Object(de.a)({},fe.a.selectedPage,a===e),fe.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>f&&Object(q.jsx)("button",{onClick:function(){p(f+1)},children:"NEXT"})]})},he=n(60),me=n.n(he),ve=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(q.jsxs)("div",{children:[Object(q.jsxs)("span",{children:[Object(q.jsx)("div",{children:Object(q.jsx)(J.b,{to:"/Profile/"+t.id,children:Object(q.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",alt:"imgUser",className:me.a.userPhoto})})}),Object(q.jsx)("div",{children:t.followed?Object(q.jsx)("button",{disabled:n,onClick:function(){r(t.id)},children:"Unfollow"}):Object(q.jsx)("button",{disabled:n,onClick:function(){a(t.id)},children:"Follow"})})]}),Object(q.jsxs)("span",{children:[Object(q.jsxs)("span",{children:[Object(q.jsx)("div",{children:t.name}),Object(q.jsx)("div",{children:t.status})]}),Object(q.jsxs)("span",{children:[Object(q.jsx)("div",{children:"user.location.country"}),Object(q.jsx)("div",{children:"user.location.city"})]})]})]})},xe=["totalUsersCount","pageSize","currentPage","onPageChanged","users","portionSize"],we=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.users,o=e.portionSize,s=Object(le.a)(e,xe);return Object(q.jsxs)("div",{children:[Object(q.jsx)(Oe,{currentPage:r,onPageChanged:a,totalUsersCount:t,pageSize:n,portionSize:o}),c.map((function(e){return Object(q.jsx)(ve,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))]})},Ce=n(30),Ae=n(61),Pe=function(e){return e.usersPage.users},Ne=Object(Ae.a)(Pe,(function(e){return e.filter((function(e){return!0}))})),De=function(e){return e.usersPage.pageSize},Se=function(e){return e.usersPage.totalUsersCount},ye=function(e){return e.usersPage.currentPage},Ee=function(e){return e.usersPage.isFetching},Ie=function(e){return e.usersPage.followingInProgress},Qe=function(e){Object(X.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(M.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(q.jsxs)(q.Fragment,{children:[this.props.isFetching?Object(q.jsx)(Ce.a,{}):null,Object(q.jsx)(we,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Te=Object(i.c)(Object(ue.b)((function(e){return{users:Ne(e),pageSize:De(e),totalUsersCount:Se(e),currentPage:ye(e),isFetching:Ee(e),followingInProgress:Ie(e)}}),{follow:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,p.c.follow.bind(p.c),P);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,p.c.unfollow.bind(p.c),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:D,getUsers:function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(r){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(S(!0)),r(D(e)),n.next=4,p.c.getUsers(e,t);case 4:a=n.sent,r(S(!1)),r((o=a.items,{type:m,users:o})),r((c=a.totalCount,{type:x,count:c}));case 8:case"end":return n.stop()}var c,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Qe),ze=n(35),Le=n.n(ze),ke=function(e){return Object(q.jsxs)("header",{className:Le.a.header,children:[Object(q.jsx)("img",{src:"https://i.stack.imgur.com/ilTIu.png"}),Object(q.jsx)("div",{className:Le.a.logoName,children:"MyWebSite"}),Object(q.jsx)("div",{className:Le.a.loginBlock,children:e.isAuth?Object(q.jsxs)("div",{children:[e.login," ",Object(q.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(q.jsx)(J.b,{to:"/login/",children:"Login"})})]})},Ue=function(e){Object(X.a)(n,e);var t=Object(R.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){return Object(q.jsx)(ke,Object(f.a)({},this.props))}}]),n}(a.a.Component),Fe=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.data.resultCode&&t(z(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ue),Be=n(22),Ge=n(29),Ze=n(26),Ke=n(62),Ve=n.n(Ke),He=function(e){return e.isAuth?Object(q.jsx)(ie.a,{to:"/profile"}):Object(q.jsx)(Be.b,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)},render:function(e){var t=e.handleSubmit;return Object(q.jsxs)("form",{onSubmit:t,children:[Object(q.jsx)("div",{children:Object(q.jsx)(Be.a,{name:"email",component:Ge.a,validate:Ze.b,placeholder:"Email"})}),Object(q.jsx)("div",{children:Object(q.jsx)(Be.a,{name:"password",type:"password",validate:Ze.b,component:Ge.a,placeholder:"Password"})}),Object(q.jsxs)("div",{children:[Object(q.jsx)(Be.a,{type:"checkbox",name:"rememberMe",component:Ge.a})," Remember me"]}),Object(q.jsx)("button",{type:"submit",children:"Submit"})]})}})},Me=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth}}),Ve.a)((function(e){return Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{children:"LOGIN!!!"}),Object(q.jsx)(He,{props:e})]})})),Xe=a.a.lazy((function(){return n.e(4).then(n.bind(null,109))})),Re=a.a.lazy((function(){return n.e(3).then(n.bind(null,108))})),We=function(e){Object(X.a)(n,e);var t=Object(R.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(q.jsx)("div",{className:"external-wrapper",children:Object(q.jsxs)("div",{className:"app-wrapper",children:[Object(q.jsx)(Fe,{}),Object(q.jsx)(_,{}),Object(q.jsxs)("div",{className:"wrapper_content",children:[Object(q.jsx)(ie.b,{path:"/profile/:userId?",render:function(){return Object(q.jsx)(a.a.Suspense,{fallback:Object(q.jsx)("div",{children:"Loading.."}),children:Object(q.jsx)(Re,{})})}}),Object(q.jsx)(ie.b,{path:"/dialogs",render:function(){return Object(q.jsx)(a.a.Suspense,{fallback:Object(q.jsx)("div",{children:"Loading.."}),children:Object(q.jsx)(Xe,{})})}}),Object(q.jsx)(ie.b,{path:"/news",render:te}),Object(q.jsx)(ie.b,{path:"/music",component:ae}),Object(q.jsx)(ie.b,{path:"/users",render:function(){return Object(q.jsx)(Te,{})}}),Object(q.jsx)(ie.b,{path:"/login",render:function(){return Object(q.jsx)(Me,{})}}),Object(q.jsx)(ie.b,{path:"/settings",component:se})]})]})}):Object(q.jsx)(Ce.a,{})}}]),n}(a.a.Component),Ye=Object(i.c)(ie.f,Object(ue.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(L());Promise.all([t]).then((function(){e({type:F})}))}}}))(We);o.a.render(Object(q.jsx)(J.a,{children:Object(q.jsx)(ue.a,{store:V,children:Object(q.jsx)(Ye,{})})}),document.getElementById("root")),s()}},[[98,1,2]]]);
//# sourceMappingURL=main.0be89f53.chunk.js.map