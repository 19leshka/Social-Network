"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[342],{5342:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var d=s(8683),v=s(364),r=s(2791),i=s(2982),n="News_newsContainer__0Msvt",o=s(3937),f=s(2358),a=s(184),A=function(e){var t=(0,i.Z)(e.posts).reverse().map((function(t){return(0,a.jsx)(o.Z,{isMyProfile:!1,deletePost:e.deletePost,id:t.id,text:t.postText,imgSrc:null==e.userImg?f:e.userImg,date:t.date},t.id)}));return(0,a.jsx)("div",{className:n,children:t})},u=s(7339),l=(0,v.$j)((function(e){return{posts:e.news.posts}}),(function(e){return{getNews:function(){e((0,u.mz)())}}}))((function(e){return(0,r.useEffect)((function(){e.getNews()}),[]),(0,a.jsx)(A,(0,d.Z)({},e))}))},3937:function(e,t,s){s.d(t,{Z:function(){return A}});var d="Post_post__wU1U-",v="Post_postInfo__gtj-y",r="Post_postHeader__Qj8oI",i="Post_postDate__NX-me",n="Post_ProfileImg__89sGZ",o="Post_postText__fx7VK",f="Post_delPost__j-bf6",a=s(184),A=function(e){return(0,a.jsxs)("div",{className:d,children:[(0,a.jsxs)("div",{className:v,children:[(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("div",{className:n,children:(0,a.jsx)("img",{src:e.imgSrc,alt:""})}),(0,a.jsx)("div",{className:i,children:(0,a.jsx)("p",{children:e.date})})]}),e.isMyProfile?(0,a.jsx)("div",{className:f,onClick:function(){e.deletePost(e.id)},children:"x"}):null]}),(0,a.jsx)("div",{className:o,children:(0,a.jsx)("p",{children:e.text})})]})}},2358:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=342.f90d7d60.chunk.js.map