(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t),c.d(t,"PRODUCT_LIST_REQUEST",(function(){return r})),c.d(t,"PRODUCT_LIST_SUCCESS",(function(){return n})),c.d(t,"PRODUCT_LIST_FAIL",(function(){return a})),c.d(t,"PRODUCT_DETAILS_REQUEST",(function(){return s})),c.d(t,"PRODUCT_DETAILS_SUCCESS",(function(){return i})),c.d(t,"PRODUCT_DETAILS_FAIL",(function(){return o}));var r="PRODUCT_LIST_REQUEST",n="PRODUCT_LIST_SUCCESS",a="PRODUCT_LIST_FAIL",s="PRODUCT_DETAILS_REQUEST",i="PRODUCT_DETAILS_SUCCESS",o="PRODUCT_DETAILS_FAIL"},46:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(4),s=c(23),i=c.n(s),o=(c(46),c(5)),l=c(3),d=c(9),j=c.n(d),u=c(13),b=c(14),O=c.n(b),p="USER_REGISTER_REQUEST",h="USER_REGISTER_SUCCESS",m="USER_REGISTER_FAIL",f="USER_SIGNIN_REQUEST",x="USER_SIGNIN_SUCCESS",v="USER_SIGNIN_FAIL",g="USER_SIGNOUT",S=c(18),I="CART_ADD_ITEM",y="CART_REMOVE_ITEM",E=function(e,t){return function(){var c=Object(u.a)(j.a.mark((function c(r,n){var a,s;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:I,payload:{name:s.name,image:s.image,price:s.price,countInStock:s.countInStock,product:s._id,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},_=c(0);function C(e){return Object(_.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}function T(e){var t=e.match.params.id,c=e.location.search?Number(e.location.search.split("=")[1]):1,n=Object(a.c)((function(e){return e.cart})).cartItems,s=Object(a.b)();Object(r.useEffect)((function(){t&&s(E(t,c))}),[s,t,c]);var i=function(e){s(function(e){return function(t,c){t({type:y,payload:e}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems))}}(e))};return Object(_.jsxs)("div",{className:"row top",children:[Object(_.jsxs)("div",{className:"column-2",children:[Object(_.jsx)("h1",{children:"Shopping Cart"}),0===n.length?Object(_.jsxs)(C,{children:["Cart is empty. ",Object(_.jsx)(o.b,{to:"/",children:"Go Shopping"})]}):Object(_.jsx)("ul",{children:n.map((function(e){return Object(_.jsx)("li",{children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:e.image,alt:e.name,className:"small"})}),Object(_.jsx)("div",{className:"min-30",children:Object(_.jsx)(o.b,{to:"/product/".concat(e.product),children:e.name})}),Object(_.jsx)("div",{children:Object(_.jsx)("select",{value:e.qty,onChange:function(t){return s(E(e.product,Number(t.target.value)))},children:Object(S.a)(Array(e.countInStock).keys()).map((function(e){return Object(_.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(_.jsxs)("div",{children:["$",e.price]}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{type:"button",onClick:function(){return i(e.product)},children:"Delete"})})]})},e.product)}))})]}),Object(_.jsx)("div",{className:"column-1",children:Object(_.jsx)("div",{className:"card card-body",children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsxs)("h2",{children:["Subtotal (",n.reduce((function(e,t){return e+t.qty}),0)," items) :",n.reduce((function(e,t){return e+t.price*t.qty}),0)," \u20ac"]})}),Object(_.jsx)("li",{children:Object(_.jsx)("button",{type:"button",onClick:function(){e.history.push("/signin?redirect=shipping")},className:"primary block",disabled:0===n.length,children:"Proceed to Checkout"})})]})})})]})}function N(e){var t=e.rating,c=e.numReviews;return Object(_.jsxs)("div",{className:"rating",children:[Object(_.jsx)("span",{children:Object(_.jsx)("i",{className:t>=1?"fa fa-star":t>=.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(_.jsx)("span",{children:Object(_.jsx)("i",{className:t>=2?"fa fa-star":t>=1.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(_.jsx)("span",{children:Object(_.jsx)("i",{className:t>=3?"fa fa-star":t>=2.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(_.jsx)("span",{children:Object(_.jsx)("i",{className:t>=4?"fa fa-star":t>=3.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(_.jsx)("span",{children:Object(_.jsx)("i",{className:t>=5?"fa fa-star":t>=4.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(_.jsx)("span",{children:c+"reviews"})]})}function w(e){var t=e.product;return Object(_.jsxs)("div",{className:"card",children:[Object(_.jsx)(o.b,{to:"/product/".concat(t._id),children:Object(_.jsx)("img",{className:"medium",src:t.image,alt:t.name})}),Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsx)(o.b,{to:"/product/".concat(t._id),children:Object(_.jsx)("h2",{children:t.name})}),Object(_.jsx)(N,{rating:t.rating,numReviews:t.numReviews}),Object(_.jsxs)("div",{className:"price",children:[t.price,"\u20ac"]})]})]},t._id)}function R(){return Object(_.jsxs)("div",{className:"loading",children:[Object(_.jsx)("i",{className:"fa fa-spinner fa-spin"})," Loading..."]})}var U=c(15);function D(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.productList})),c=t.loading,n=t.error,s=t.products;return Object(r.useEffect)((function(){e(function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:U.PRODUCT_LIST_REQUEST}),e.prev=1,e.next=4,O.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:U.PRODUCT_LIST_SUCCESS,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:U.PRODUCT_LIST_FAIL,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(_.jsx)("div",{children:c?Object(_.jsx)(R,{}):n?Object(_.jsx)(C,{variant:"danger",children:n}):Object(_.jsx)("div",{className:"row center",children:s.map((function(e){return Object(_.jsx)(w,{product:e},e._id)}))})})}var L=c(12);function P(e){var t=Object(a.b)(),c=e.match.params.id,n=Object(r.useState)(1),s=Object(L.a)(n,2),i=s[0],l=s[1],d=Object(a.c)((function(e){return e.productDetails})),b=d.loading,p=d.error,h=d.product;Object(r.useEffect)((function(){t(function(e){return function(){var t=Object(u.a)(j.a.mark((function t(c){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:U.PRODUCT_DETAILS_REQUEST,payload:e}),t.prev=1,t.next=4,O.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:U.PRODUCT_DETAILS_SUCCESS,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c({type:U.PRODUCT_DETAILS_FAIL,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[t,c]);return Object(_.jsx)("div",{children:b?Object(_.jsx)(R,{}):p?Object(_.jsx)(C,{variant:"danger",children:p}):Object(_.jsxs)("div",{children:[Object(_.jsx)(o.b,{to:"/",children:"Back to result"}),Object(_.jsxs)("div",{className:"row top",children:[Object(_.jsx)("div",{className:"column-2",children:Object(_.jsx)("img",{className:"large",src:h.image,alt:h.name})}),Object(_.jsx)("div",{className:"column-1",children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)("h1",{children:h.name})}),Object(_.jsx)("li",{children:Object(_.jsx)(N,{rating:h.rating,numReviews:h.numReviews})}),Object(_.jsxs)("li",{children:["Price : ",h.price," \u20ac"]}),Object(_.jsx)("li",{children:Object(_.jsx)("p",{children:h.description})})]})}),Object(_.jsx)("div",{className:"column-1",children:Object(_.jsx)("div",{className:"card card-body",children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{children:"Price"}),Object(_.jsxs)("div",{className:"price",children:[h.price," \u20ac"]})]})}),Object(_.jsx)("li",{children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("div",{children:"Status"}),Object(_.jsx)("div",{children:h.countInStock>0?Object(_.jsx)("span",{className:"succes",children:"In Stock"}):Object(_.jsx)("span",{className:"danger",children:"Unavaliable"})})]})}),h.countInStock>0&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("li",{children:[Object(_.jsx)("div",{className:"row",children:Object(_.jsx)("div",{children:"Qty"})}),Object(_.jsx)("div",{children:Object(_.jsx)("select",{value:i,onChange:function(e){return l(e.target.value)},children:Object(S.a)(Array(h.countInStock).keys()).map((function(e){return Object(_.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]}),Object(_.jsx)("li",{children:Object(_.jsx)("button",{onClick:function(){e.history.push("/cart/".concat(c,"?qty=").concat(i))},className:"primary block",children:"Add to Cart"})})]})]})})})]}),");"]})})}function A(e){var t=Object(r.useState)(""),c=Object(L.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)(""),l=Object(L.a)(i,2),d=l[0],b=l[1],f=Object(r.useState)(""),v=Object(L.a)(f,2),g=v[0],S=v[1],I=Object(r.useState)(""),y=Object(L.a)(I,2),E=y[0],T=y[1],N=e.location.search?e.location.search.split("=")[1]:"/",w=Object(a.c)((function(e){return e.userRegister})),U=w.userInfo,D=w.loading,P=w.error,A=Object(a.b)();return Object(r.useEffect)((function(){U&&e.history.push(N)}),[U]),Object(_.jsx)("div",{children:Object(_.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),g!==E?alert("Password and confirm password are not the same"):A(function(e,t,c){return function(){var r=Object(u.a)(j.a.mark((function r(n){var a,s;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:p,payload:{email:t,password:c}}),r.prev=1,r.next=4,O.a.post("/api/users/register",{name:e,email:t,password:c});case 4:a=r.sent,s=a.data,n({type:h,payload:s}),n({type:x,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),n({type:m,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[1,11]])})));return function(e){return r.apply(this,arguments)}}()}(n,d,g))},children:[Object(_.jsx)("div",{children:Object(_.jsx)("h1",{children:"Create Account"})}),D&&Object(_.jsx)(R,{}),P&&Object(_.jsx)(C,{variant:"danger",children:P}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"name",children:"Name"}),Object(_.jsx)("input",{type:"text",id:"name",placeholder:"Enter name",required:!0,onChange:function(e){return s(e.target.value)}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"email",children:"Email adress"}),Object(_.jsx)("input",{type:"email",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"password",children:"Password"}),Object(_.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return S(e.target.value)}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(_.jsx)("input",{type:"password",id:"confirmPassword",placeholder:"Confirm password",required:!0,onChange:function(e){return T(e.target.value)}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{}),Object(_.jsx)("button",{className:"primary",type:"submit",children:"Register"})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{}),Object(_.jsxs)("div",{children:["Already have an account? "," ",Object(_.jsx)(o.b,{to:"/signin?redirect=".concat(N),children:"Sign-In"})]})]})]})})}function k(e){var t=Object(r.useState)(""),c=Object(L.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)(""),l=Object(L.a)(i,2),d=l[0],b=l[1],p=e.location.search?e.location.search.split("=")[1]:"/",h=Object(a.c)((function(e){return e.userSignin})),m=h.userInfo,g=h.loading,S=h.error,I=Object(a.b)();return Object(r.useEffect)((function(){m&&e.history.push(p)}),[m]),Object(_.jsx)("div",{children:Object(_.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),I(function(e,t){return function(){var c=Object(u.a)(j.a.mark((function c(r){var n,a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r({type:f,payload:{email:e,password:t}}),c.prev=1,c.next=4,O.a.post("/api/users/signin",{email:e,password:t});case 4:n=c.sent,a=n.data,r({type:x,payload:a}),localStorage.setItem("userInfo",JSON.stringify(a)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),r({type:v,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 13:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}()}(n,d))},children:[Object(_.jsx)("div",{children:Object(_.jsx)("h1",{children:"Sign In"})}),g&&Object(_.jsx)(R,{}),S&&Object(_.jsx)(C,{variant:"danger",children:S}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"email",children:"Email adress"}),Object(_.jsx)("input",{type:"email",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return s(e.target.value)}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{htmlFor:"password",children:"Password adress"}),Object(_.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{}),Object(_.jsx)("button",{className:"primary",type:"submit",children:"Sign In"})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{}),Object(_.jsxs)("div",{children:["New customer? "," ",Object(_.jsx)(o.b,{to:"/register?redirect=".concat(p),children:"Create your Account"})]})]})]})})}var F=function(){var e=Object(a.c)((function(e){return e.cart})).cartItems,t=Object(a.c)((function(e){return e.userSignin})).userInfo,c=Object(a.b)();return Object(_.jsx)(o.a,{children:Object(_.jsxs)("div",{className:"grid-container",children:[Object(_.jsxs)("header",{className:"row",children:[Object(_.jsx)("div",{children:Object(_.jsx)(o.b,{className:"brand",to:"/",children:"GAME STOCK"})}),Object(_.jsxs)("div",{children:[Object(_.jsxs)(o.b,{to:"/cart",children:["Cart",e.length>0&&Object(_.jsx)("span",{className:"badge",children:e.length})]}),t?Object(_.jsxs)("div",{className:"dropdown",children:[Object(_.jsxs)(o.b,{to:"#",children:[t.name," ",Object(_.jsx)("i",{className:"fa fa-caret-down"})]}),Object(_.jsx)("ul",{className:"dropdown-content",children:Object(_.jsx)(o.b,{to:"signout",onClick:function(){c((function(e){localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems"),e({type:g})}))},children:"Sign Out"})})]}):Object(_.jsx)(o.b,{to:"/signin",children:"Sign In"})]})]}),Object(_.jsxs)("main",{children:[Object(_.jsx)(l.a,{path:"/cart/:id?",component:T}),Object(_.jsx)(l.a,{path:"/product/:id",component:P}),Object(_.jsx)(l.a,{path:"/signin",component:k}),Object(_.jsx)(l.a,{path:"/register",component:A}),Object(_.jsx)(l.a,{path:"/",component:D})]}),Object(_.jsx)("footer",{className:"row center",children:"All rights reserved"})]})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},Q=c(21),G=c(38),J=c(16),M=c(15),B=M.PRODUCT_LIST_REQUEST,V=M.PRODUCT_LIST_SUCCESS,X=M.PRODUCT_LIST_FAIL,K=M.PRODUCT_DETAILS_REQUEST,$=M.PRODUCT_DETAILS_FAIL,z=M.PRODUCT_DETAILS_SUCCESS,H={userSignin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null},cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]}},W=Object(Q.b)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{loading:!0};case V:return{loading:!1,products:t.payload};case X:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{},loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case z:return{loading:!1,product:t.payload};case $:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(J.a)(Object(J.a)({},e),{},{cartItems:[].concat(Object(S.a)(e.cartItems),[c])});case y:return Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case x:return{loading:!1,userInfo:t.payload};case v:return{loading:!1,error:t.payload};case g:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case h:return{loading:!1,userInfo:t.payload};case m:return{loading:!1,error:t.payload};default:return e}}}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.c,Z=Object(Q.d)(W,H,Y(Object(Q.a)(G.a)));i.a.render(Object(_.jsx)(a.a,{store:Z,children:Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(F,{})})}),document.getElementById("root")),q()}},[[70,1,2]]]);
//# sourceMappingURL=main.fdeed6aa.chunk.js.map