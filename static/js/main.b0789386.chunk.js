(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={BreadTop:"style_BreadTop__15LZF",Seed:"style_Seed__1NNXk",Second:"style_Second__qylNu",Third:"style_Third__1kx_w",Fourth:"style_Fourth__2VGDe",Salad:"style_Salad__2XLuz",Meat:"style_Meat__2euJU",Cheese:"style_Cheese__8aDcV",Bacon:"style_Bacon__2iw4W",BreadBottom:"style_BreadBottom__3p0tn"}},,,,,,,,,,function(e,t,n){e.exports={SideBar:"style_SideBar__unkoZ",Open:"style_Open__1Kn5V",Close:"style_Close__sMMF1",Logo:"style_Logo__2Xc1f"}},,,function(e,t,n){e.exports={BuildControl:"style_BuildControl__pp3gQ",Label:"style_Label__29f4m",Less:"style_Less__UJLgs",More:"style_More__3PpGO"}},,,,function(e,t,n){e.exports={Toolbar:"style_Toolbar__1VMae",HideOnMobile:"style_HideOnMobile__23P_u"}},function(e,t,n){e.exports={MenuItem:"style_MenuItem__2TS66",active:"style_active__2-3Tl"}},,,function(e,t,n){e.exports={BuildControls:"style_BuildControls__1pXNj",OrderButton:"style_OrderButton__oFU3i",enable:"style_enable__21b3P"}},function(e,t,n){e.exports={Button:"style_Button__2mHIy",Success:"style_Success__2HeIS",Danger:"style_Danger__1cxGR"}},,,,,,,,,,,,function(e,t,n){e.exports={Content:"style_Content__3GyXb"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"style_Logo__2CNql"}},function(e,t,n){e.exports={Menu:"style_Menu__2W-sg"}},,function(e,t,n){e.exports={HamburgerMenu:"style_HamburgerMenu__3iQoT"}},function(e,t,n){e.exports={Burger:"style_Burger__1Zjns"}},function(e,t,n){e.exports={Modal:"style_Modal__QpWuT"}},function(e,t,n){e.exports={Shadow:"style_Shadow__1YN5h"}},function(e,t,n){e.exports={Loader:"style_Loader__12a93",load1:"style_load1__GEPmp"}},function(e,t,n){e.exports={Order:"style_Order__314hr"}},function(e,t,n){e.exports={ContactData:"style_ContactData__1dQUk"}},function(e,t,n){e.exports={ShippingPage:"style_ShippingPage__z1gB_"}},function(e,t,n){e.exports={Login:"style_Login__2Azi3"}},function(e,t,n){e.exports={Signup:"style_Signup__H58Ys"}},,function(e,t,n){e.exports=n(89)},,,,,function(e,t,n){},,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),c=n.n(o),s=(n(64),n(4)),i=n(5),l=n(7),u=n(6),d=n(8),p=n(15),m=n(2),g=n(43),h=n.n(g),E=n(26),f=n.n(E),b=n(44),_=n.n(b),O=n(45),y=n.n(O),S=function(){return a.a.createElement("div",{className:y.a.Logo},a.a.createElement("img",{src:_.a}))},v=n(46),R=n.n(v),w=n(12),N=n(27),I=n.n(N),j=function(e){return a.a.createElement("li",{className:I.a.MenuItem},a.a.createElement(w.b,{exact:e.exact,activeClassName:I.a.active,to:e.link},e.children))},C=Object(m.b)((function(e){return{userId:e.signupLoginReducer.userId}}))((function(e){return a.a.createElement("div",null,a.a.createElement("ul",{className:R.a.Menu},e.userId?a.a.createElement(r.Fragment,null,a.a.createElement(j,{exact:!0,link:"/"},"\u0428\u0418\u041d\u042d \u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410"),a.a.createElement(j,{link:"/orders"},"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410\u041d\u0423\u0423\u0414"),a.a.createElement(j,{link:"/logout"},"\u0413\u0410\u0420\u0410\u0425")):a.a.createElement(r.Fragment,null,a.a.createElement(j,{link:"/login"},"\u041d\u042d\u0412\u0422\u0420\u042d\u0425"),a.a.createElement(j,{link:"/signup"},"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425"))))})),k=n(48),T=n.n(k),D=function(e){return a.a.createElement("div",{onClick:e.toggleSideBar,className:T.a.HamburgerMenu},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},L=function(e){return a.a.createElement("header",{className:f.a.Toolbar},a.a.createElement(D,{toggleSideBar:e.toggleSideBar}),a.a.createElement(S,null),a.a.createElement("nav",{className:f.a.HideOnMobile},a.a.createElement(C,null)))},M=n(9),B=n.n(M),x=function(e){return"bread-top"===e.type?a.a.createElement("div",{className:B.a.BreadTop},a.a.createElement("div",{className:B.a.Seed}),a.a.createElement("div",{className:"".concat(B.a.Seed," ").concat(B.a.Second)}),a.a.createElement("div",{className:"".concat(B.a.Seed," ").concat(B.a.Third)}),a.a.createElement("div",{className:"".concat(B.a.Seed," ").concat(B.a.Fourth)})):"salad"===e.type?a.a.createElement("div",{className:B.a.Salad}):"bacon"===e.type?a.a.createElement("div",{className:B.a.Bacon}):"meat"===e.type?a.a.createElement("div",{className:B.a.Meat}):"cheese"===e.type?a.a.createElement("div",{className:B.a.Cheese}):"bread-bottom"===e.type?a.a.createElement("div",{className:B.a.BreadBottom}):a.a.createElement("div",null,"...")},U=n(49),A=n.n(U),P=Object(m.b)((function(e){return{orts:e.burgerReducer.ingredients}}))(Object(p.g)((function(e){var t=Object.entries(e.orts),n=[];return t.map((function(e){for(var t=0;t<e[1];t++)n.push(a.a.createElement(x,{key:"".concat(e[0]).concat(t+1),type:e[0]}))})),0===n.length&&(n=a.a.createElement("p",null,"\u0425\u0430\u0447\u0438\u0440\u0442\u0430\u0439 \u0442\u0430\u043b\u0445\u043d\u044b\u0445\u0430\u0430 \u043e\u0440\u0446\u044b\u0433 \u0441\u043e\u043d\u0433\u043e\u043d\u043e \u0443\u0443...")),a.a.createElement("div",{className:A.a.Burger},a.a.createElement(x,{type:"bread-top"}),n,a.a.createElement(x,{type:"bread-bottom"}))}))),G=n(1),H=n(22),V=n.n(H),F=function(e){return a.a.createElement("div",{className:V.a.BuildControl},a.a.createElement("div",{className:V.a.Label},e.orts),a.a.createElement("button",{disabled:e.disabled[e.type],onClick:function(){return e.ortsHasah(e.type)},className:V.a.Less},"\u0425\u0430\u0441\u0430\u0445"),a.a.createElement("button",{onClick:function(){return e.ortsNemeh(e.type)},className:V.a.More},"\u041d\u044d\u043c\u044d\u0445"))},J=n(30),W=n.n(J),z=Object(m.b)((function(e){return{ingredients:e.burgerReducer.ingredients,price:e.burgerReducer.totalPrice,purchasing:e.burgerReducer.purchasing,ingredientNames:e.burgerReducer.ingredientNames}}),(function(e){return{ortsNemeh:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ortsNer:e}}(t))},ortsHasah:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ortsNer:e}}(t))}}}))((function(e){var t=Object(G.a)({},e.ingredients);for(var n in t)t[n]=t[n]<=0;return a.a.createElement("div",{className:W.a.BuildControls},a.a.createElement("p",null,"\u0411\u0443\u0440\u0433\u0435\u0440\u0438\u0439\u043d \u04af\u043d\u044d : ",a.a.createElement("strong",null,e.price)),Object.keys(e.ingredientNames).map((function(n){return a.a.createElement(F,{key:n,ortsHasah:e.ortsHasah,ortsNemeh:e.ortsNemeh,disabled:t,type:n,orts:e.ingredientNames[n]})})),a.a.createElement("button",{onClick:e.showConfirmModal,disabled:!e.purchasing,className:W.a.OrderButton},"\u0417\u0410\u0425\u0418\u0410\u041b\u0410\u0425"))})),X=n(50),q=n.n(X),Q=n(51),Y=n.n(Q),K=function(e){return e.show?a.a.createElement("div",{onClick:e.darahad,className:Y.a.Shadow}):null},Z=function(e){return a.a.createElement("div",null,a.a.createElement(K,{show:e.show,darahad:e.closeConfirmModal}),a.a.createElement("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:q.a.Modal},e.children))},$=n(31),ee=n.n($),te=function(e){return a.a.createElement("button",{onClick:e.daragdsan,className:"".concat(ee.a.Button," ").concat(ee.a[e.btnType])},e.text)},ne=Object(m.b)((function(e){return{ingredients:e.burgerReducer.ingredients,ingredientNames:e.burgerReducer.ingredientNames,price:e.burgerReducer.totalPrice}}))((function(e){return a.a.createElement("div",null,a.a.createElement("h3",null,"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430"),a.a.createElement("p",null,"\u0422\u0430\u043d\u044b \u0441\u043e\u043d\u0433\u043e\u0441\u043e\u043d \u043e\u0440\u0446\u0443\u0443\u0434: "),a.a.createElement("ul",null,Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},e.ingredientNames[t]," : ",e.ingredients[t])}))),a.a.createElement("p",null,a.a.createElement("strong",null,"\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u043d \u0434\u04af\u043d: ",e.price,"\u20ae ")),a.a.createElement("p",null,"\u0426\u0430\u0430\u0448\u0430\u0430 \u04af\u0440\u0433\u044d\u043b\u0436\u043b\u04af\u04af\u043b\u044d\u0445 \u04af\u04af?"),a.a.createElement(te,{daragdsan:e.onCancel,btnType:"Danger",text:"\u0422\u0410\u0422\u0413\u0410\u041b\u0417\u0410\u0425"}),a.a.createElement(te,{daragdsan:e.onContinue,btnType:"Success",text:"\u04ae\u0420\u0413\u042d\u041b\u0416\u041b\u04ae\u04ae\u041b\u042d\u0425"}))})),re=n(52),ae=n.n(re),oe=function(){return a.a.createElement("div",{className:ae.a.Loader})},ce=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={confirmOrder:!1},n.continueOrder=function(){n.props.history.push("/ship")},n.showConfirmModal=function(){n.setState({confirmOrder:!0})},n.closeConfirmModal=function(){n.setState({confirmOrder:!1})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(Z,{closeConfirmModal:this.closeConfirmModal,show:this.state.confirmOrder},this.state.loading?a.a.createElement(oe,null):a.a.createElement(ne,{onCancel:this.closeConfirmModal,onContinue:this.continueOrder})),a.a.createElement(P,null),a.a.createElement(z,{showConfirmModal:this.showConfirmModal,ortsHasah:this.props.burgereesOrtsHasah,ortsNemeh:this.props.burgertOrtsNemeh}))}}]),t}(r.Component),se=n(19),ie=n.n(se),le=function(e){var t=[ie.a.SideBar,ie.a.Close];return e.showSidebar&&(t=[ie.a.SideBar,ie.a.Open]),a.a.createElement("div",null,a.a.createElement(K,{show:e.showSidebar,darahad:e.toggleSideBar}),a.a.createElement("div",{onClick:e.toggleSideBar,className:t.join(" ")},a.a.createElement("div",{className:ie.a.Logo},a.a.createElement(S,null)),a.a.createElement(C,null)))},ue=(n(71),n(53)),de=n.n(ue),pe=function(e){return a.a.createElement("div",{className:de.a.Order},a.a.createElement("p",null,"\u041e\u0440\u0446 : \u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445 : ",e.order.orts.bacon,", \u0421\u0430\u043b\u0430\u0434 :"," ",e.order.orts.salad,", \u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445 : ",e.order.orts.meat,", \u0411\u044f\u0441\u043b\u0430\u0433 :"," ",e.order.orts.cheese),a.a.createElement("p",null,"\u0425\u0430\u044f\u0433 : ",e.order.hayag.name," | ",e.order.hayag.street," |",e.order.hayag.city),a.a.createElement("p",null,"\u04ae\u043d\u0438\u0439\u043d \u0434\u04af\u043d : ",a.a.createElement("strong",null,e.order.dun,"\u20ae")))},me=n(18),ge=n.n(me),he=ge.a.create({baseURL:"https://burger-a4b91-default-rtdb.asia-southeast1.firebasedatabase.app/"}),Ee=function(){return{type:"LOAD_ORDERS_START"}},fe=function(e){return{type:"LOAD_ORDERS_SUCCESS",orders:e}},be=function(e){return{type:"LOAD_ORDERS_ERROR",error:e}},_e=function(){return{type:"SAVE_ORDER_START"}},Oe=function(){return{type:"SAVE_ORDER_SUCCESS"}},ye=function(e){return{type:"SAVE_ORDER_ERROR",error:e}},Se=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadOrders(this.props.userId)}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.loading?a.a.createElement(oe,null):this.props.orders.map((function(e){return a.a.createElement(pe,{key:e[0],order:e[1]})})))}}]),t}(r.Component),ve=Object(m.b)((function(e){return{orders:e.orderReducer.orders,loading:e.orderReducer.loading,userId:e.signupLoginReducer.userId}}),(function(e){return{loadOrders:function(t){return e(function(e){return function(t,n){t(Ee());var r=n().signupLoginReducer.token;he.get("/orders.json?&auth=".concat(r,'&orderBy="userId"&equalTo="').concat(e,'"')).then((function(e){t(fe(Object.entries(e.data).reverse()))})).catch((function(e){return t(be(e))}))}}(t))}}}))(Se),Re=n(54),we=n.n(Re),Ne=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={name:null,city:null,street:null},n.changeName=function(e){n.setState({name:e.target.value})},n.changeStreet=function(e){n.setState({street:e.target.value})},n.changeCity=function(e){n.setState({city:e.target.value})},n.saveOrder=function(){var e={userId:n.props.userId,orts:n.props.ingredients,dun:n.props.price,hayag:{name:n.state.name,city:n.state.city,street:n.state.street}};n.props.saveOrderAction(e)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.props.newOrderStatus.finished&&!this.props.newOrderStatus.error&&this.props.history.replace("/orders")}},{key:"render",value:function(){return a.a.createElement("div",{className:we.a.ContactData},a.a.createElement("div",null,this.props.newOrderStatus.error&&"\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u0433 \u0445\u0430\u0434\u0433\u0430\u043b\u0430\u0445 \u044f\u0432\u0446\u0430\u0434 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430: ".concat(this.props.newOrderStatus.error)),this.props.newOrderStatus.saving?a.a.createElement(oe,null):a.a.createElement("div",null,a.a.createElement("input",{onChange:this.changeName,type:"text",name:"name",placeholder:"\u0422\u0430\u043d\u044b \u043d\u044d\u0440"}),a.a.createElement("input",{onChange:this.changeStreet,type:"text",name:"street",placeholder:"\u0422\u0430\u043d\u044b \u0433\u044d\u0440\u0438\u0439\u043d \u0445\u0430\u044f\u0433"}),a.a.createElement("input",{onChange:this.changeCity,type:"text",name:"city",placeholder:"\u0422\u0430\u043d\u044b \u0445\u043e\u0442"}),a.a.createElement(te,{text:"\u0418\u041b\u0413\u042d\u042d\u0425",btnType:"Success",daragdsan:this.saveOrder})))}}]),t}(a.a.Component),Ie=Object(m.b)((function(e){return{price:e.burgerReducer.totalPrice,ingredients:e.burgerReducer.ingredients,newOrderStatus:e.orderReducer.newOrder,userId:e.signupLoginReducer.userId}}),(function(e){return{saveOrderAction:function(t){return e(function(e){return function(t,n){t(_e());var r=n().signupLoginReducer.token;he.post("/orders.json?auth=".concat(r),e).then((function(e){t(Oe())})).catch((function(e){t(ye(e))}))}}(t))}}}))(Object(p.g)(Ne)),je=n(55),Ce=n.n(je),ke=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).cancelOrder=function(){n.props.history.goBack()},n.showContactData=function(){n.props.history.replace("/ship/contact")},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:Ce.a.ShippingPage},a.a.createElement("p",{style:{fontSize:"20px"}},a.a.createElement("strong",null,"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430 \u0430\u043c\u0442\u0442\u0430\u0439 \u0431\u0430\u0439\u0445 \u0431\u043e\u043b\u043d\u043e \u0433\u044d\u0436 \u043d\u0430\u0439\u0434\u0430\u0436 \u0431\u0430\u0439\u043d\u0430...")),a.a.createElement("p",{style:{fontSize:"20px"}},a.a.createElement("strong",null,"\u0414\u04af\u043d: ",this.props.price,"\u20ae")),a.a.createElement(P,null),a.a.createElement(te,{daragdsan:this.cancelOrder,btnType:"Danger",text:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410 \u0426\u0423\u0426\u041b\u0410\u0425"}),a.a.createElement(te,{daragdsan:this.showContactData,btnType:"Success",text:"\u0425\u04ae\u0420\u0413\u042d\u041b\u0422\u0418\u0419\u041d \u041c\u042d\u0414\u042d\u042d\u041b\u042d\u041b \u041e\u0420\u0423\u0423\u041b\u0410\u0425"}),a.a.createElement(p.b,{path:"/ship/contact"},a.a.createElement(Ie,null)))}}]),t}(a.a.Component),Te=Object(m.b)((function(e){return{price:e.burgerReducer.totalPrice}}))(ke),De=n(56),Le=n.n(De),Me=function(){return{type:"SIGNUP_USER_START"}},Be=function(e,t){return{type:"SIGNUP_USER_SUCCESS",token:e,userId:t}},xe=function(e){return{type:"SIGNUP_USER_ERROR",error:e}},Ue=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expireDate"),localStorage.removeItem("refreshToken"),{type:"LOGOUT"}},Ae=function(e){return function(t){setTimeout((function(){t(Ue())}),e)}},Pe=function(){return{type:"LOGIN_USER_START"}},Ge=function(e,t){return{type:"LOGIN_USER_SUCCESS",token:e,userId:t}},He=function(e){return{type:"LOGIN_USER_ERROR",error:e}},Ve=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password:""},n.login=function(){n.props.login(n.state.email,n.state.password)},n.changeEmail=function(e){n.setState({email:e.target.value})},n.changePassword=function(e){n.setState({password:e.target.value})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:Le.a.Login},this.props.userId&&a.a.createElement(p.a,{to:"/orders"}),a.a.createElement("input",{onChange:this.changeEmail,type:"text",placeholder:"\u0418\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"}),a.a.createElement("input",{onChange:this.changePassword,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433"}),this.props.logginIn&&a.a.createElement(oe,null),this.props.firebaseError&&a.a.createElement("div",{style:{color:"red"}},this.props.firebaseError),a.a.createElement(te,{text:"\u041d\u042d\u0412\u0422\u0420\u042d\u0425",btnType:"Success",daragdsan:this.login}))}}]),t}(r.Component),Fe=Object(m.b)((function(e){return{logginIn:e.signupLoginReducer.logginIn,firebaseError:e.signupLoginReducer.firebaseError,userId:e.signupLoginReducer.userId}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(n){n(Pe());var r={email:e,password:t,returnSecureToken:!0};ge.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPKHWdJJmrDenvnew1IW6HurMNqoDmJas",r).then((function(e){var t=e.data.idToken,r=e.data.localId,a=e.data.expiresIn,o=new Date((new Date).getTime()+1e3*a),c=e.data.refreshToken;localStorage.setItem("token",t),localStorage.setItem("userId",r),localStorage.setItem("expireDate",o),localStorage.setItem("refreshToken",c),n(Ge(t,r)),n(Ae(1e3*a))})).catch((function(e){n(He(e))}))}}(t,n))}}}))(Ve),Je=n(57),We=n.n(Je),ze=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password1:"",password2:"",error:""},n.signup=function(){n.state.password1===n.state.password2?n.props.signupUser(n.state.email,n.state.password1):n.setState({error:"\u041d\u0443\u0443\u0446 \u04af\u0433\u043d\u04af\u04af\u0434 \u0445\u043e\u043e\u0440\u043e\u043d\u0434\u043e\u043e \u0442\u0430\u0430\u0440\u0430\u0445\u0433\u04af\u0439 \u0431\u0430\u0439\u043d\u0430!"})},n.changeEmail=function(e){n.setState({email:e.target.value})},n.changePassword1=function(e){n.setState({password1:e.target.value})},n.changePassword2=function(e){n.setState({password2:e.target.value})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:We.a.Signup},this.props.userId&&a.a.createElement(p.a,{to:"/"}),a.a.createElement("h1",null,"\u0411\u04af\u0440\u0442\u0433\u044d\u043b\u0438\u0439\u043d \u0444\u043e\u0440\u043c"),a.a.createElement("div",null,"\u0422\u0430 \u04e9\u04e9\u0440\u0438\u0439\u043d \u043c\u044d\u0434\u044d\u044d\u043b\u043b\u044d\u044d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"),a.a.createElement("input",{onChange:this.changeEmail,type:"text",placeholder:"\u0418\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433"}),a.a.createElement("input",{onChange:this.changePassword1,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433\u044d\u044d \u043e\u0440\u0443\u0443\u043b\u043d\u0430\u0430 \u0443\u0443"}),a.a.createElement("input",{onChange:this.changePassword2,type:"password",placeholder:"\u041d\u0443\u0443\u0446 \u04af\u0433\u044d\u044d \u0434\u0430\u0432\u0442\u0430\u043d \u043e\u0440\u0443\u0443\u043b\u043d\u0430 \u0443\u0443"}),this.state.error&&a.a.createElement("div",{style:{color:"red"}},this.state.error),this.props.firebaseError&&a.a.createElement("div",{style:{color:"red"}},this.props.firebaseError),this.props.saving&&a.a.createElement(oe,null),a.a.createElement(te,{text:"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425",btnType:"Success",daragdsan:this.signup}))}}]),t}(r.Component),Xe=Object(m.b)((function(e){return{saving:e.signupLoginReducer.saving,firebaseError:e.signupLoginReducer.firebaseError,userId:e.signupLoginReducer.userId}}),(function(e){return{signupUser:function(t,n){return e(function(e,t){return function(n){n(Me());var r={email:e,password:t,returnSecureToken:!0};ge.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPKHWdJJmrDenvnew1IW6HurMNqoDmJas",r).then((function(e){var t=e.data.idToken,r=e.data.localId;localStorage.setItem("token",t),localStorage.setItem("userId",r),n(Be(t,r))})).catch((function(e){n(xe(e))}))}}(t,n))}}}))(ze),qe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).componentDidMount=function(){n.props.logout()},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,{to:"/login"})}}]),t}(r.Component),Qe=Object(m.b)(null,(function(e){return{logout:function(){return e(Ue())}}}))(qe),Ye=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={showSidebar:!1},n.toggleSideBar=function(){n.setState((function(e){return{showSidebar:!e.showSidebar}}))},n.componentDidMount=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("userId"),r=new Date(localStorage.getItem("expireDate"));localStorage.getItem("refreshToken");e&&(r>new Date?(n.props.autoLogin(e,t),n.props.autoLogoutAfterMillisec(r.getTime()-(new Date).getTime())):n.props.logout())},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(L,{toggleSideBar:this.toggleSideBar}),a.a.createElement(le,{showSidebar:this.state.showSidebar,toggleSideBar:this.toggleSideBar}),a.a.createElement("main",{className:h.a.Content},this.props.userId?a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/logout",component:Qe}),a.a.createElement(p.b,{path:"/orders",component:ve}),a.a.createElement(p.b,{path:"/ship",component:Te}),a.a.createElement(p.b,{path:"/",component:ce})):a.a.createElement(r.Fragment,null,a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/signup",component:Xe}),a.a.createElement(p.b,{path:"/login",component:Fe}),a.a.createElement(p.a,{to:"/login"}))),";"))}}]),t}(r.Component),Ke=Object(m.b)((function(e){return{userId:e.signupLoginReducer.userId}}),(function(e){return{autoLogin:function(t,n){return e(Ge(t,n))},logout:function(){return e(Ue())},autoLogoutAfterMillisec:function(){return e(Ae())}}}))(Ye);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ze=n(23),$e=n(58),et=n(21),tt={ingredients:{salad:0,cheese:0,bacon:0,meat:0},totalPrice:0,purchasing:!1,ingredientNames:{bacon:"\u0413\u0430\u0445\u0430\u0439\u043d \u043c\u0430\u0445",cheese:"\u0411\u044f\u0441\u043b\u0430\u0433",meat:"\u04ae\u0445\u0440\u0438\u0439\u043d \u043c\u0430\u0445",salad:"\u0421\u0430\u043b\u0430\u0434"}},nt={salad:300,cheese:450,bacon:1500,meat:2500},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;if("ADD_INGREDIENT"===t.type)return Object(G.a)({},e,{ingredients:Object(G.a)({},e.ingredients,Object(et.a)({},t.ortsNer,e.ingredients[t.ortsNer]+1)),totalPrice:e.totalPrice+nt[t.ortsNer],purchasing:!0});if("REMOVE_INGREDIENT"===t.type){var n=e.totalPrice-nt[t.ortsNer];return Object(G.a)({},e,{ingredients:Object(G.a)({},e.ingredients,Object(et.a)({},t.ortsNer,e.ingredients[t.ortsNer]-1)),totalPrice:n,purchasing:n>0})}return e},at={orders:[],loading:!1,error:null,newOrder:{saving:!1,finished:!1,error:null}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ORDERS_START":return Object(G.a)({},e,{loading:!0});case"LOAD_ORDERS_SUCCESS":return Object(G.a)({},e,{loading:!1,orders:t.orders});case"LOAD_ORDERS_ERROR":return Object(G.a)({},e,{loading:!1,error:t.error});case"SAVE_ORDER_START":return Object(G.a)({},e,{newOrder:Object(G.a)({},e.newOrder,{saving:!0})});case"SAVE_ORDER_SUCCESS":return Object(G.a)({},e,{newOrder:Object(G.a)({},e.newOrder,{saving:!1,finished:!0,error:null})});case"SAVE_ORDER_ERROR":return Object(G.a)({},e,{newOrder:Object(G.a)({},e.newOrder,{saving:!1,finished:!0,error:t.error})});default:return e}},ct={saving:!1,logginIn:!1,firebaseError:null,token:null,userId:null},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_USER_START":return Object(G.a)({},e,{saving:!0});case"SIGNUP_USER_ERROR":return Object(G.a)({},e,{saving:!1,firebaseError:t.error.responce.data.error.message});case"SIGNUP_USER_SUCCESS":return Object(G.a)({},e,{saving:!1,token:t.token,userId:t.userId});case"LOGIN_USER_START":return Object(G.a)({},e,{logginIn:!0});case"LOGIN_USER_ERROR":return Object(G.a)({},e,{logginIn:!1,firebaseError:t.type});case"LOGIN_USER_SUCCESS":return Object(G.a)({},e,{logginIn:!1,token:t.token,userId:t.userId});case"LOGOUT":return Object(G.a)({},e,{token:null,userId:null,firebaseError:null});default:return e}},it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ze.c,lt=Object(Ze.b)({burgerReducer:rt,orderReducer:ot,signupLoginReducer:st}),ut=[function(e){return function(t){return function(n){console.log("MyLoggerMiddleware: Dispatching ==> ",n),console.log("MyLoggerMiddleware: State BEFORE ==> ",e.getState());var r=t(n);return console.log("MyLoggerMiddleware: State START ==> ",e.getState()),r}}},$e.a],dt=Object(Ze.d)(lt,it(Ze.a.apply(void 0,ut)));c.a.render(a.a.createElement(m.a,{store:dt},a.a.createElement(w.a,null,a.a.createElement(Ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[59,1,2]]]);
//# sourceMappingURL=main.b0789386.chunk.js.map