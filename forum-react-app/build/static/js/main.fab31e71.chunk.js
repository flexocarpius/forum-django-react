(this["webpackJsonpforum-react-app"]=this["webpackJsonpforum-react-app"]||[]).push([[0],{106:function(n,e,t){},117:function(n,e,t){},121:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(5),a=t.n(c),i=t(90),o=t.n(i),s=(t(106),t(66)),u=t(63),l=t(24),d=t(25),j=t(91),f=t(40),x=t.n(f),p=t(49),b=t(45),h=t(8);function O(){var n=Object(h.a)(["\n    mutation ($token: String!) {\n        refreshToken(token: $token) {\n            token\n            payload\n            refreshExpiresIn\n        }\n    }\n"]);return O=function(){return n},n}function m(){var n=Object(h.a)(["\n    query {\n        user {\n            id,\n            username\n        }\n    }\n"]);return m=function(){return n},n}function g(){var n=Object(h.a)(["\n    mutation ($username: String!, $password: String!) {\n        tokenAuth(\n            username: $username,\n            password: $password\n        ) {\n            token, payload, refreshExpiresIn\n        }\n    }\n"]);return g=function(){return n},n}var v=Object(d.gql)(g()),w=Object(d.gql)(m()),y=Object(d.gql)(O()),A=function(){var n=localStorage.getItem("expiresAt"),e=null,t=new Date;return(e=n?new Date(parseInt(n)):new Date).setMinutes(e.getMinutes()-3),t.valueOf()>e.valueOf()},k=function(n){var e=Object(d.useApolloClient)(),t=Object(c.useState)(null),r=Object(b.a)(t,2),a=r[0],i=r[1],o=function(){var n=Object(p.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:A()&&j();case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=Object(p.a)(x.a.mark((function n(t,r){var c,a,i,o;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.mutate({mutation:v,variables:{username:t,password:r}});case 2:if(c=n.sent,a=c.data,(i=new Date).setMinutes(i.getMinutes()+15),!a.tokenAuth){n.next=15;break}return(o=new Date).setMinutes(o.getMinutes()+12),localStorage.setItem("token",a.tokenAuth.token),localStorage.setItem("payload",a.tokenAuth.payload),localStorage.setItem("expiresAt",i.valueOf()),n.abrupt("return",!0);case 15:return n.abrupt("return",!1);case 16:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=Object(p.a)(x.a.mark((function n(){var t,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=2;break}return n.abrupt("return",a);case 2:return n.next=4,e.query({query:w});case 4:return t=n.sent,r=t.data,i(r.user),n.abrupt("return",r.user);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=localStorage.getItem("token"),e=localStorage.getItem("expiresAt"),t=null,r=new Date;return t=e?new Date(parseInt(e)):new Date,!!(n&&r.valueOf()<=t.valueOf())},j=function(){var n=Object(p.a)(x.a.mark((function n(){var t,r,c,a,i;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=localStorage.getItem("token"),n.next=3,e.mutate({mutation:y,variables:{token:t}});case 3:r=n.sent,c=r.data,(a=new Date).setMinutes(a.getMinutes()+15),(i=new Date).setMinutes(i.getMinutes()+12),c.refreshToken&&(localStorage.setItem("token",c.refreshToken.token),localStorage.setItem("payload",c.refreshToken.payload),localStorage.setItem("expiresAt",a.valueOf()));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=Object(c.useCallback)(u,[e,a]),h=Object(c.useCallback)(l,[]),O=Object(c.useCallback)(j,[e]);return Object(c.useEffect)((function(){if(h()){f();var n=new Date,e=localStorage.getItem("expiresAt"),t=new Date;e&&(t=new Date(parseInt(e))),t.setMinutes(t.getMinutes()-3),n.valueOf()>t.valueOf()&&O()}}),[h,f,O]),{logIn:s,logOut:function(n){localStorage.removeItem("token"),localStorage.removeItem("payload"),localStorage.removeItem("expiresAt"),i(null)},isLoggedIn:l,getUser:u,refreshToken:j,checkToken:o}},C=t(21),S=t.n(C),D=t(22),E=t(9);function z(){var n=Object(h.a)(["\n    background: #6c757d;\n    min-height: 100vh;\n    padding-top: 100px;\n"]);return z=function(){return n},n}var T=E.a.div(z()),I=function(){var n=k(),e=Object(c.useRef)(null),t=Object(c.useRef)(null),a=function(){var r=Object(p.a)(x.a.mark((function r(){return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.logIn(e.current.value,t.current.value);case 2:r.sent&&(window.location.href="/");case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(r.jsx)(T,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-md-5 col-sm-12 mx-auto",children:Object(r.jsx)("div",{className:"card pt-4",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("div",{className:"text-center mb-5",children:Object(r.jsx)("h3",{children:"Sign in to the Forum"})}),Object(r.jsxs)("div",{className:"form-group position-relative has-icon-left",children:[Object(r.jsx)("label",{children:"Username"}),Object(r.jsxs)("div",{className:"position-relative",children:[Object(r.jsx)("input",{ref:e,type:"text",className:"form-control",id:"username"}),Object(r.jsx)("div",{className:"form-control-icon",children:Object(r.jsx)(S.a,{path:D.a,size:1})})]})]}),Object(r.jsxs)("div",{className:"form-group position-relative has-icon-left",children:[Object(r.jsxs)("div",{className:"clearfix",children:[Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("a",{href:"auth-forgot-password.html",className:"float-right",children:Object(r.jsx)("small",{children:"Forgot password?"})})]}),Object(r.jsxs)("div",{className:"position-relative",children:[Object(r.jsx)("input",{ref:t,type:"password",className:"form-control",id:"password"}),Object(r.jsx)("div",{className:"form-control-icon",children:Object(r.jsx)(S.a,{path:D.j,size:1})})]})]}),Object(r.jsxs)("div",{className:"form-check clearfix my-4",children:[Object(r.jsxs)("div",{className:"checkbox float-left",children:[Object(r.jsx)("input",{type:"checkbox",id:"checkbox1",className:"form-check-input"}),Object(r.jsx)("label",{children:"Remember me"})]}),Object(r.jsx)("div",{className:"float-right",children:Object(r.jsx)("a",{href:"auth-register.html",children:"Don't have an account?"})})]}),Object(r.jsx)("div",{className:"clearfix",children:Object(r.jsx)("button",{className:"btn btn-primary float-right",onClick:a,children:"Submit"})})]})})})})})})};function N(){var n=Object(h.a)(["\n    font-size: 13px;\n    margin-left: 9px;\n    color: #7884F3;\n    font-weight: 500;\n"]);return N=function(){return n},n}function M(){var n=Object(h.a)(["\n    \n"]);return M=function(){return n},n}function q(){var n=Object(h.a)(["\n    display: flex;\n    align-items: center;\n"]);return q=function(){return n},n}function F(){var n=Object(h.a)(["\n    color: #656C9E;\n    margin-left: 11px;\n"]);return F=function(){return n},n}function U(){var n=Object(h.a)(["\n    border-radius: 4px;\n    background-color: #6371EC;\n    width: 16px;\n    height: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return U=function(){return n},n}function P(){var n=Object(h.a)(["\n    display: flex;\n    align-items: center;\n"]);return P=function(){return n},n}function R(){var n=Object(h.a)(["\n    border-radius: 9px;\n    padding: 4px 10px;\n    background-color: #283059;\n    font-size: 9px;\n    margin-left: 7px;\n"]);return R=function(){return n},n}function B(){var n=Object(h.a)(["\n    margin-top: 11px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    width: 100%;\n"]);return B=function(){return n},n}function L(){var n=Object(h.a)(["\n    margin-top: 20px;\n    font-size: 13px;\n"]);return L=function(){return n},n}function H(){var n=Object(h.a)(["\n    font-size: 22px;\n    margin: 0px;\n    margin-bottom: 20px;\n    font-weight: 500;\n"]);return H=function(){return n},n}function J(){var n=Object(h.a)(["\n    color: #656C9E;\n    width: 30px;\n"]);return J=function(){return n},n}function Q(){var n=Object(h.a)(["\n    font-size: 24px;\n    margin: 0px;\n    font-weight: 500;\n"]);return Q=function(){return n},n}function W(){var n=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-top: 11px;\n"]);return W=function(){return n},n}function X(){var n=Object(h.a)(["\n    width: 100%;\n"]);return X=function(){return n},n}function Y(){var n=Object(h.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-direction: column;\n    margin-right: 31px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(h.a)(["\n    border-radius: 42px;\n    background-color: #1C2146;\n    cursor: pointer;\n    margin-left: 49px;\n    margin-right: 49px;\n    padding: 45px;\n    display: flex;\n    margin-bottom: 21px;\n"]);return Z=function(){return n},n}var V=E.a.div(Z()),G=E.a.div(Y()),K=E.a.div(X()),$=E.a.div(W()),_=E.a.h4(Q()),nn=E.a.div(J()),en=E.a.h4(H()),tn=(E.a.div(L()),E.a.div(B())),rn=E.a.span(R()),cn=E.a.div(P()),an=E.a.div(U()),on=E.a.span(F()),sn=E.a.div(q()),un=(E.a.span(M()),E.a.span(N()));function ln(){var n=Object(h.a)(["\n    display: -webkit-box;\n    -webkit-line-clamp: ",";\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n"]);return ln=function(){return n},n}var dn=E.a.p(ln(),(function(n){return n.lines?n.lines:"3"})),jn=function(n){var e=n.data,t=Object(l.g)(),a=e.id,i=e.title,o=e.content,s=(e.createdDate,e.upvotes),u=e.tags,d=e.creator,j=e.answersCount,f=Object(c.useState)(!1),x=Object(b.a)(f,2),p=x[0];x[1];return Object(r.jsxs)(V,{hover:p,children:[Object(r.jsxs)(G,{children:[Object(r.jsx)(nn,{children:Object(r.jsx)(S.a,{path:D.m,size:"30px"})}),Object(r.jsx)(_,{children:s}),Object(r.jsx)(nn,{children:Object(r.jsx)(S.a,{path:D.l,size:"30px"})})]}),Object(r.jsxs)(K,{onClick:function(){t.push("/forum/post/".concat(a))},children:[Object(r.jsx)(en,{children:i}),Object(r.jsx)(dn,{lines:3,children:o}),Object(r.jsx)(tn,{children:u&&u.map((function(n){return Object(r.jsx)(rn,{children:n})}))}),Object(r.jsxs)($,{children:[Object(r.jsxs)(cn,{children:[Object(r.jsx)(an,{children:Object(r.jsx)(S.a,{path:D.a,size:"14px",color:"#1C2146"})}),Object(r.jsx)(on,{children:d.username})]}),Object(r.jsxs)(sn,{children:[Object(r.jsx)(S.a,{path:D.f,size:"14px",color:"#7884F3"}),Object(r.jsxs)(un,{children:[j," Answers"]})]})]})]})]})},fn=t(11),xn=t.n(fn);function pn(){var n=Object(h.a)(["\n    flex-grow: 1;\n    transition: margin-left ease 0.3s;\n    margin-left: ",";\n\n    ",":first-child {\n        margin-top: 80px;\n    }\n\n    ::-webkit-scrollbar {\n        display: none;\n    }\n     \n    ::-webkit-scrollbar-track {\n        display: none;\n    }\n     \n    ::-webkit-scrollbar-thumb {\n        display: none;\n    }\n"]);return pn=function(){return n},n}var bn=E.a.div(pn(),(function(n){return n.menuToggled?"227px":"98px"}),V),hn=function(n){var e=n.posts,t=n.menuToggled;return e?Object(r.jsx)(bn,{menuToggled:t,children:e&&e.map((function(n){return Object(r.jsx)(jn,{data:n},n.id)}))}):Object(r.jsx)("p",{children:"Loading..."})};hn.props={menuToggled:xn.a.bool},hn.defaultProps={menuToggled:!1};var On=hn;function mn(){var n=Object(h.a)(["\n    font-size: 14px;\n    background-color: transparent;\n    color: white;\n    border: 0;\n    height: 36px;\n    width: 100%;\n    margin-left: 18px;\n"]);return mn=function(){return n},n}function gn(){var n=Object(h.a)(["\n    width: 17px;\n    height: 17px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(h.a)(["\n    height: 43px;\n    border-radius: 20px;\n    background-color: #1C2146;\n    display: flex;\n    align-items: center;\n    padding: 0px 21px;\n    flex-grow: 1;\n"]);return vn=function(){return n},n}var wn=E.a.div(vn()),yn=E.a.div(gn()),An=E.a.input(mn()),kn=function(){return Object(r.jsxs)(wn,{children:[Object(r.jsx)(yn,{children:Object(r.jsx)(S.a,{path:D.k,size:"17px",color:"#656C9E"})}),Object(r.jsx)(An,{type:"text",placeholder:"Search"})]})},Cn=t(97),Sn=t.n(Cn),Dn=(t(117),function(n){var e=n.menuToggled,t=(Object(l.g)(),k()),a=Object(c.useState)(null),i=Object(b.a)(a,2),o=(i[0],i[1]);Object(c.useEffect)((function(){t.isLoggedIn()&&t.getUser().then((function(n){return o(n)}))}),[t]);return Object(r.jsxs)("div",{className:Sn()({navbar:!0,"navbar-expanded":e}),children:[Object(r.jsx)(kn,{}),Object(r.jsx)("button",{className:"button",children:"Ask Question"}),Object(r.jsx)("button",{className:"icon-button",children:Object(r.jsx)(S.a,{path:D.c,size:"23px",color:"#7884F3"})})]})});Dn.props={menuToggled:xn.a.bool},Dn.defaultProps={menuToggled:!1};var En=Dn;function zn(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    width: ",";\n    min-width: ",";\n    transition: width ease 0.3s, min-width ease 0.3s;\n    position: fixed;\n\n    "," {\n        transition: transform ease 0.3s, opacity ease 0.3s;\n        transform: translateX(",");\n        opacity: ",";\n    }\n"]);return zn=function(){return n},n}function Tn(){var n=Object(h.a)(["\n    display: flex;\n    color: ",";\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 24px;\n    margin-top: 24px;\n    align-items: center;\n    cursor: pointer;\n"]);return Tn=function(){return n},n}function In(){var n=Object(h.a)(["\n    margin-left: 31px;\n    font-size: 14px;\n"]);return In=function(){return n},n}function Nn(){var n=Object(h.a)(["\n    width: 24px;\n    height: 24px;\n"]);return Nn=function(){return n},n}function Mn(){var n=Object(h.a)(["\n    display: flex;\n    border-top-right-radius: 42px;\n    border-bottom-right-radius: 42px;\n    background-color: #1C2146;\n    padding-left: 39px;\n    flex-direction: column;\n    padding-top: 10px;\n    padding-bottom: 10px;\n"]);return Mn=function(){return n},n}function qn(){var n=Object(h.a)(["\n    display: flex;\n    margin-left: 39px;\n    margin-top: 30px;\n    margin-bottom: 28px;\n    cursor: pointer;\n"]);return qn=function(){return n},n}var Fn=E.a.div(qn()),Un=E.a.div(Mn()),Pn=E.a.span(Nn()),Rn=E.a.div(In()),Bn=E.a.div(Tn(),(function(n){return n.active?"#fff":"#656C9E"})),Ln=E.a.div(zn(),(function(n){return n.expanded?"227px":"98px"}),(function(n){return n.expanded?"227px":"98px"}),Rn,(function(n){return n.expanded?"0px":"-30px"}),(function(n){return n.expanded?"1":"0"}));function Hn(){var n=Object(h.a)(["\n    border: 0;\n    margin: 0;\n    font-size: 12px;\n    padding: 8px 16px;\n    color: #fff;\n    border-radius: 9px;\n    margin-top: 27px;\n    background-color: #7884F3;\n    cursor: pointer;\n"]);return Hn=function(){return n},n}function Jn(){var n=Object(h.a)(["\n    font-size: 10px;\n    color: #fff;\n    margin: 0;\n"]);return Jn=function(){return n},n}function Qn(){var n=Object(h.a)(["\n    margin-bottom: 16px;\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(h.a)(["\n    font-size: 17px;\n    color: #fff;\n    margin: 0;\n    font-weight: 500;\n    text-align: center;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(h.a)(["\n    border-radius: 0 42px 0 0;\n    background-color: #6371EC;\n    display: flex;\n    flex-direction: column;\n    padding: 40px;\n    max-width: 147px;\n    width: 147px;\n    transition: transform ease 0.3s, opacity ease 0.3s, max-height ease-in-out 0.3s;\n    transform: translateX(",");\n    opacity: ",";\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    max-height: 24px;\n\n    &:hover {\n        max-height: 244px;\n    }\n"]);return Xn=function(){return n},n}var Yn=E.a.div(Xn(),(function(n){return n.expanded?"0px":"-60px"}),(function(n){return n.expanded?"1":"0"})),Zn=E.a.h4(Wn()),Vn=E.a.div(Qn()),Gn=E.a.p(Jn()),Kn=E.a.button(Hn()),$n=function(n){var e=n.expanded;return Object(r.jsxs)(Yn,{expanded:e,children:[Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Zn,{children:"Forum Teams"}),Object(r.jsx)(Zn,{children:"30 Day Free Trial"})]}),Object(r.jsx)(Gn,{children:"Forum Teams is a private, secure spot for you and your coworkers to find and share information."}),Object(r.jsx)(Kn,{children:"Learn more"})]})},_n=function(n){var e=n.onMenuToggle,t=Object(c.useState)(!0),a=Object(b.a)(t,2),i=a[0],o=a[1];return Object(r.jsxs)(Ln,{expanded:i,children:[Object(r.jsx)(Fn,{onClick:function(){e(!i),o(!i)},children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAXCAYAAAB+kNMAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMxSURBVHgB7VlRctpADNXS5Ltkpv/ZnqD0BDgnSG+A2+k/cALoCQJ//YOeIJMTQE8AnADnu52BfqdhK4X1VJbX2IsDTBu/GWHvSra0sixpDYCAMUYj3SAtzRYrpBZU8MYZH5Bj8TBDqrNpOtdQwRs1MZ5A0rEVngMYtYFJYobURLq0EV1hX6AD28K5DahQCjwtJNKBUmoOFUrhDEoCIzwueHSc40NZwz8Ca/tTUKHd0b4yuxRMLC1FWpgwunZc17F52ThydWuHvoa496Vo/5ZxSqKF5dlh5dpM5tbBv2H8ltU3sW1mDNLbZ9fEMhwre69iRd8UQ0sonRW4ZmkchdCkC2dgkoskNJkupx3iniOu18GfMP7IpAPJCL522MRB6891cA08YG9I7Zosdq5UoEm2gBEUacds/0L427evM/i813fJ0PrbkANybmBpLHgBozs714fkhoKKXoC56AJJ4fl7pIjxSbYHuxEvIrI2EB06b5PdDbIbj0R9SNsUQXJtXSETQlFghPV43Dv4dfFqLF1RaeV42lhxOZNOCwTnAzCHSQtkj86RIVz7+kjCJy0EYhy6OgM7x58yOdZZiCzGeM0XOB6mGVWft55rlLlzyCz4AP17CTvg49x3fIDKv2cJIm8qpjRkYwrHxbrAfBGZXHgVNE9E7FwXlPuvsLdzTX4XoNl5BC8QPs5diHHmtwcqWmLqubbSdc/5k8Jn+zuFbc6JF9KD7Hw5EuMF7AEqPKIof0Aa8gn7Bp38I9Pn7o/+BmotZUx0Dq8+fh1cRIUj13YBAzZFLdUtb2ts60SbDM3kxt578iSmQmef6atbmzScEJ86P0MDqqcAfaEgeFCPs7CzqvvmXIqaiI0pkpa256X+kihgfJIt22Z9E+Oe7VVJ1wrp5H9BKVBNMYUP/UF7OddG7xWkC5SGdPSQzFXJqCWdY0g7WP71NIUTwtSS/jBP6fM84jn3HgoYaZ31FiOH9tYdSDs1Th/DjM+Pa6Ent3fE+4Q2UkNIb7/pzcjbLc0zzjn4+qMMGWn7L/rZbGrDGjxq3CRTeoiU+d0dD96sFZSE2X4efB0bhY64hwOC6Tu4rrL4A9ZNggUiulQ5AAAAAElFTkSuQmCC"})}),Object(r.jsxs)(Un,{expanded:i,children:[Object(r.jsxs)(Bn,{active:!0,children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.i,size:1})}),Object(r.jsx)(Rn,{children:"Home"})]}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.d,size:1})}),Object(r.jsx)(Rn,{children:"Questions"})]}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.b,size:1})}),Object(r.jsx)(Rn,{children:"Users"})]}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.o,size:1})}),Object(r.jsx)(Rn,{children:"Tags"})]}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.h,size:1})}),Object(r.jsx)(Rn,{children:"Unanswered"})]}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.a,size:1})}),Object(r.jsx)(Rn,{children:"Profile"})]}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.n,size:1})}),Object(r.jsx)(Rn,{children:"Starred"})]}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(S.a,{path:D.g,size:1})}),Object(r.jsx)(Rn,{children:"Settings"})]})]}),Object(r.jsx)($n,{expanded:i})]})};_n.defaultProps={onMenuToggle:function(){}};var ne=_n;function ee(){var n=Object(h.a)(["\n    margin: 0;\n    margin-bottom: 10px;\n    font-size: 13px;\n    color: #656C9E;\n"]);return ee=function(){return n},n}function te(){var n=Object(h.a)(["\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n"]);return te=function(){return n},n}function re(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-top: 57px;\n"]);return re=function(){return n},n}function ce(){var n=Object(h.a)(["\n    font-size: 7px;\n    color: #656C9E;\n"]);return ce=function(){return n},n}function ae(){var n=Object(h.a)(["\n    margin: 0;\n    font-size: 11px;\n    color: #656C9E;\n    font-weight: 500;\n"]);return ae=function(){return n},n}function ie(){var n=Object(h.a)(["\n    margin: 0;\n    font-size: 11px;\n    color: #7884F3;\n    font-weight: 500;\n"]);return ie=function(){return n},n}function oe(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    margin-left: 12px;\n"]);return oe=function(){return n},n}function se(){var n=Object(h.a)(["\n    width: 30px;\n    height: 30px;\n    background-color: #6371EC;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 4px;\n"]);return se=function(){return n},n}function ue(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 16px;\n"]);return ue=function(){return n},n}function le(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 22px;\n"]);return le=function(){return n},n}function de(){var n=Object(h.a)(["\n"]);return de=function(){return n},n}function je(){var n=Object(h.a)(["\n    margin: 0;\n    font-size: 12px;\n    color: #656C9E;\n"]);return je=function(){return n},n}function fe(){var n=Object(h.a)(["\n    margin: 0;\n    font-size: 13px;\n    color: #fff;\n"]);return fe=function(){return n},n}function xe(){var n=Object(h.a)(["\n    height: 43px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-bottom: 12px;\n"]);return xe=function(){return n},n}function pe(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 31px;\n"]);return pe=function(){return n},n}function be(){var n=Object(h.a)(["\n    color: #fff;\n    margin: 2px 0px;\n    font-size: 13px;\n"]);return be=function(){return n},n}function he(){var n=Object(h.a)(["\n    color: #656C9E;\n    width: 16px;\n    height: 16px;\n"]);return he=function(){return n},n}function Oe(){var n=Object(h.a)(["\n    color: #fff;\n    margin: 2px 0px;\n    font-size: 21px;\n"]);return Oe=function(){return n},n}function me(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n"]);return me=function(){return n},n}function ge(){var n=Object(h.a)(["\n    border-radius: 42px 0px 42px 0px;\n    padding: 41px;\n    background-color: #1C2146;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-top: 30px;\n"]);return ge=function(){return n},n}function ve(){var n=Object(h.a)(["\n    margin: 0;\n    margin-top: 14px;\n    font-size: 11px;\n    color: #656C9E;\n"]);return ve=function(){return n},n}function we(){var n=Object(h.a)(["\n    margin: 0;\n    margin-left: 5px;\n    font-size: 11px;\n"]);return we=function(){return n},n}function ye(){var n=Object(h.a)(["\n    border-radius: 4px;\n    background-color: ",";\n    width: 10px;\n    height: 10px;\n"]);return ye=function(){return n},n}function Ae(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-right: 16px;\n"]);return Ae=function(){return n},n}function ke(){var n=Object(h.a)(["\n    margin: 0;\n    display: flex;\n    flex-direction: row;\n"]);return ke=function(){return n},n}function Ce(){var n=Object(h.a)(["\n    margin: 0;\n    margin-top: 14px;\n    font-size: 11px;\n    color: #656C9E;\n"]);return Ce=function(){return n},n}function Se(){var n=Object(h.a)(["\n    margin: 0;\n    color: #fff;\n    font-size: 11px;\n"]);return Se=function(){return n},n}function De(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return De=function(){return n},n}function Ee(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]);return Ee=function(){return n},n}function ze(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-top: 30px;\n"]);return ze=function(){return n},n}function Te(){var n=Object(h.a)(["\n    width: 20px;\n    height: 20px;\n    margin-left: 9px;\n    color: #7884F3;\n"]);return Te=function(){return n},n}function Ie(){var n=Object(h.a)(["\n    font-size: 13px;\n    margin: 0;\n    color: #656C9E;\n"]);return Ie=function(){return n},n}function Ne(){var n=Object(h.a)(["\n    font-size: 21px;\n    color: #fff;\n    margin: 0;\n"]);return Ne=function(){return n},n}function Me(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]);return Me=function(){return n},n}function qe(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-left: 29px;\n"]);return qe=function(){return n},n}function Fe(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return Fe=function(){return n},n}function Ue(){var n=Object(h.a)(["\n    width: 49px;\n    height: 49px;\n    background-color: #6371EC;\n    border-radius: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return Ue=function(){return n},n}function Pe(){var n=Object(h.a)(["\n    padding: 24px 40px 30px 40px;\n    border-radius: 0px 42px 0px 42px;\n    background-color: #1C2146;\n    display: flex;\n    flex-direction: column;\n"]);return Pe=function(){return n},n}function Re(){var n=Object(h.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"]);return Re=function(){return n},n}var Be=E.a.div(Re()),Le=E.a.div(Pe()),He=E.a.div(Ue()),Je=E.a.div(Fe()),Qe=E.a.div(qe()),We=E.a.div(Me()),Xe=E.a.h4(Ne()),Ye=E.a.span(Ie()),Ze=E.a.div(Te()),Ve=E.a.div(ze()),Ge=E.a.div(Ee()),Ke=E.a.div(De()),$e=E.a.h5(Se()),_e=E.a.h5(Ce()),nt=E.a.div(ke()),et=E.a.div(Ae()),tt=E.a.span(ye(),(function(n){return n.color?n.color:"#7884F3"})),rt=E.a.p(we()),ct=E.a.h5(ve()),at=E.a.div(ge()),it=E.a.div(me()),ot=E.a.h4(Oe()),st=E.a.span(he()),ut=(E.a.h5(be()),E.a.div(pe())),lt=E.a.div(xe()),dt=E.a.h4(fe()),jt=E.a.h4(je()),ft=E.a.div(de()),xt=E.a.div(le()),pt=E.a.div(ue()),bt=E.a.div(se()),ht=E.a.div(oe()),Ot=E.a.h5(ie()),mt=E.a.h5(ae()),gt=E.a.small(ce()),vt=E.a.div(re()),wt=E.a.div(te()),yt=E.a.p(ee()),At="POST",kt="ANSWER",Ct="ANSWERED",St="CREATED",Dt="SELECTED_ANSWER",Et=function(n){if(!n)return"";switch(n.model){case At:if(n.action===St)return"Created a question";if(n.action===Ct)return"Answered a question";if(n.action===Dt)return"Marked as solved";case kt:if(n.action===St)return"Answered a question"}},zt=t(135),Tt=t(98);function It(){var n=Object(h.a)(["\n  query {\n    recentActivity {\n      id, model, action, createdDate, creator { username }\n    }\n  }\n"]);return It=function(){return n},n}function Nt(){var n=Object(h.a)(["\n  query {\n    trending {\n      id, name, description, createdDate, postsCount\n    }\n  }\n"]);return Nt=function(){return n},n}function Mt(){var n=Object(h.a)(["\n  query {\n    topPosts {\n      id, title, createdDate, rating, upvotes, downvotes\n    }\n  }\n"]);return Mt=function(){return n},n}function qt(){var n=Object(h.a)(["\n  query {\n    feedPosts {\n      id, title, category { id, name }, content, createdDate, upvotes, downvotes, creator { id, username }, answersCount\n    }\n  }\n"]);return qt=function(){return n},n}var Ft=Object(d.gql)(qt()),Ut=Object(d.gql)(Mt()),Pt=Object(d.gql)(Nt()),Rt=Object(d.gql)(It()),Bt=function(){return Promise.resolve({data:{feedPosts:[{id:"1",title:"What are the most surreal places to visit?",category:{id:"1",name:"travel"},content:"I\u2019m looking for places that are accessible by car, train or boats. I want to be near of local culture with authentic food, cliffside hikes and coastal views.",createdDate:(new Date).toUTCString(),upvotes:46,downvotes:0,creator:{id:"1",username:"@davidmiller"},answersCount:156},{id:"2",title:"What is the best forum for graphic designers?",category:{id:"1",name:"graphicdesign"},content:"",createdDate:(new Date).toUTCString(),upvotes:13,downvotes:0,creator:{id:"1",username:"@marieblanchet"},answersCount:25},{id:"3",title:"What single scene from a movie is an absolute masterpiece?",category:{id:"1",name:"cinephile"},content:"Well would I love to know about the visualization and the main concept of the movie. \n                    Please add answers regarding the movie production, actors, characters, roles, dialogues, scenes and other related stuff.\n                    Thanks in advance!",createdDate:(new Date).toUTCString(),upvotes:130,downvotes:0,creator:{id:"1",username:"@iansmith"},answersCount:250}]}})},Lt=function(){return Promise.resolve({data:{trending:[{id:"1",name:"Tech",description:"",createdDate:(new Date).toUTCString(),postsCount:20},{id:"2",name:"AR",description:"",createdDate:(new Date).toUTCString(),postsCount:13},{id:"3",name:"Cinema",description:"",createdDate:(new Date).toUTCString(),postsCount:65}]}})},Ht=function(){return Promise.resolve({data:{recentActivity:[{id:"1",model:"POST",action:"SELECTED_ANSWER",createdDate:(new Date).toUTCString(),creator:{username:"@amyharris"}},{id:"2",model:"POST",action:"CREATED",createdDate:(new Date).toUTCString(),creator:{username:"@sambrown"}},{id:"3",model:"ANSWER",action:"ANSWERED",createdDate:(new Date).toUTCString(),creator:{username:"@robertdavis"}}]}})},Jt=function(){Object(d.useQuery)(Ut).data;var n,e,t,c,a=Object(d.useQuery)(Pt),i=Object(d.useQuery)(Rt);return Object(r.jsxs)(Be,{children:[Object(r.jsxs)(Le,{children:[Object(r.jsxs)(Je,{children:[Object(r.jsx)(He,{children:Object(r.jsx)(S.a,{path:D.a,size:"40px"})}),Object(r.jsxs)(Qe,{children:[Object(r.jsxs)(We,{children:[Object(r.jsx)(Xe,{children:"Aaron Hall"}),Object(r.jsx)(Ze,{children:Object(r.jsx)(S.a,{path:D.e,size:"20px"})})]}),Object(r.jsx)(Ye,{children:"@aaronhall"})]})]}),Object(r.jsxs)(Ve,{children:[Object(r.jsxs)(Ge,{children:[Object(r.jsx)($e,{children:"4.6M followers"}),Object(r.jsx)(_e,{children:"Joined June 2009"})]}),Object(r.jsxs)(Ke,{children:[Object(r.jsxs)(nt,{children:[Object(r.jsxs)(et,{children:[Object(r.jsx)(tt,{color:"#FFD600"}),Object(r.jsx)(rt,{children:"227"})]}),Object(r.jsxs)(et,{children:[Object(r.jsx)(tt,{color:"#8E8E8E"}),Object(r.jsx)(rt,{children:"363"})]}),Object(r.jsxs)(et,{children:[Object(r.jsx)(tt,{color:"#B17245"}),Object(r.jsx)(rt,{children:"409"})]})]}),Object(r.jsx)(ct,{children:"Plus Membership"})]})]})]}),Object(r.jsxs)(at,{children:[Object(r.jsxs)(it,{children:[Object(r.jsx)(ot,{children:"Trends for you"}),Object(r.jsx)(st,{children:Object(r.jsx)(S.a,{path:D.g,size:"16px"})})]}),Object(r.jsx)(ut,{children:null===a||void 0===a||null===(n=a.data)||void 0===n||null===(e=n.trending)||void 0===e?void 0:e.map((function(n){return Object(r.jsxs)(lt,{children:[Object(r.jsx)(dt,{children:n.name}),Object(r.jsxs)(jt,{children:[n.postsCount," Questions"]})]},n.id)}))}),Object(r.jsxs)(ft,{children:[Object(r.jsx)(ot,{children:"Recent Activity"}),Object(r.jsx)(xt,{children:null===i||void 0===i||null===(t=i.data)||void 0===t||null===(c=t.recentActivity)||void 0===c?void 0:c.map((function(n){return Object(r.jsxs)(pt,{children:[Object(r.jsx)(bt,{children:Object(r.jsx)(S.a,{path:D.a,size:"26px"})}),Object(r.jsxs)(ht,{children:[Object(r.jsxs)(Ot,{children:["@",n.creator.username]}),Object(r.jsx)(mt,{children:Et(n)}),Object(r.jsx)(gt,{children:Object(r.jsx)(zt.a,{date:new Date(n.createdDate)})})]})]},n.id)}))})]}),Object(r.jsxs)(vt,{children:[Object(r.jsxs)(wt,{children:[Object(r.jsx)(yt,{children:"About"}),Object(r.jsx)(yt,{children:"Privacy"}),Object(r.jsx)(yt,{children:"Terms"}),Object(r.jsx)(yt,{children:"Languages"})]}),Object(r.jsxs)(wt,{children:[Object(r.jsx)(yt,{children:"Contact"}),Object(r.jsx)(yt,{children:"Your Add Choices"}),Object(r.jsx)(yt,{children:"Careers"}),Object(r.jsx)(yt,{children:"Forum Inc. 2021"})]})]})]})]})};function Qt(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return Qt=function(){return n},n}function Wt(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 357px;\n    min-width: 357px;\n"]);return Wt=function(){return n},n}function Xt(){var n=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]);return Xt=function(){return n},n}var Yt=E.a.div(Xt()),Zt=E.a.div(Wt()),Vt=E.a.div(Qt()),Gt=function(){var n=Object(d.useQuery)(Ft).data,e=Object(c.useState)(!0),t=Object(b.a)(e,2),a=t[0],i=t[1];return Object(r.jsxs)(Vt,{children:[Object(r.jsx)(ne,{onMenuToggle:function(n){i(n)}}),Object(r.jsxs)(Yt,{children:[Object(r.jsx)(En,{menuToggled:a}),Object(r.jsx)(On,{posts:n&&n.feedPosts,menuToggled:a})]}),Object(r.jsx)(Zt,{children:Object(r.jsx)(Jt,{})})]})},Kt=Object(d.createHttpLink)({uri:"http://localhost:8000/graphql/"}),$t=Object(j.a)((function(n,e){var t=e.headers,r=localStorage.getItem("token");return function(){var n=localStorage.getItem("token"),e=localStorage.getItem("expiresAt"),t=null,r=new Date;return t=e?new Date(parseInt(e)):new Date,!!(n&&r.valueOf()<=t.valueOf())}()?{headers:Object(s.a)(Object(s.a)({},t),{},{authorization:r?"JWT ".concat(r):""})}:{headers:Object(s.a)({},t)}})),_t=(new d.ApolloClient({link:$t.concat(Kt),cache:new d.InMemoryCache}),function(){var n=Object(Tt.createMockClient)();return n.setRequestHandler(Ft,Bt),n.setRequestHandler(Pt,Lt),n.setRequestHandler(Rt,Ht),n}());var nr=function(){return Object(r.jsx)(d.ApolloProvider,{client:_t,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",children:Object(r.jsx)(l.a,{to:"/forum"})}),Object(r.jsx)(l.b,{path:"/login",component:I}),Object(r.jsx)(l.b,{path:"/forum",component:Gt})]})})})},er=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,136)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))},tr=t(134),rr=t(99);tr.a.addDefaultLocale(rr),o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(nr,{})}),document.getElementById("root")),er()}},[[121,1,2]]]);
//# sourceMappingURL=main.fab31e71.chunk.js.map