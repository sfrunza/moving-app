(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[44],{1235:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1501:function(e,a,t){"use strict";var n=t(24),r=t(27),c=t(0),l=t.n(c),o=t(46),i=t(3),m=t(77),s=t(1128),u=t(1129),d=t(1121),E=t(183),f=t(370),b=t(1108),p=t(284),g=t(1105),j=t(1299),v=t.n(j),O=t(1285),h=t.n(O),y=t(1294),N=t.n(y),k=Object(m.a)((function(){return{root:{},divider:{width:1,height:24},fileInput:{display:"none"}}}));a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]),m=k(),j=Object(c.useRef)(null),O=Object(c.useState)(""),y=Object(n.a)(O,2),x=y[0],S=y[1],w=Object(o.d)((function(e){return e.account})),C=function(){j.current.click()};return l.a.createElement(s.a,Object.assign({className:Object(i.a)(m.root,a)},t),l.a.createElement(u.a,null,l.a.createElement(d.a,{display:"flex",alignItems:"center"},l.a.createElement(E.a,{component:d.a,flexGrow:1,py:.5,px:2,variant:"outlined"},l.a.createElement(f.a,{disableUnderline:!0,fullWidth:!0,onChange:function(e){e.persist(),S(e.target.value)},placeholder:"What's on your mind, ".concat(w.user.firstName)})),l.a.createElement(b.a,{title:"Send"},l.a.createElement(p.a,{color:x.length>0?"primary":"default"},l.a.createElement(v.a,null))),l.a.createElement(g.a,{className:m.divider}),l.a.createElement(b.a,{title:"Attach image"},l.a.createElement(p.a,{edge:"end",onClick:C},l.a.createElement(h.a,null))),l.a.createElement(b.a,{title:"Attach file"},l.a.createElement(p.a,{edge:"end",onClick:C},l.a.createElement(N.a,null))),l.a.createElement("input",{className:m.fileInput,ref:j,type:"file"}))))}},1517:function(e,a,t){"use strict";var n=t(24),r=t(27),c=t(0),l=t.n(c),o=t(8),i=t(3),m=t(5),s=t.n(m),u=t(1410),d=t(77),E=t(1128),f=t(1132),b=t(1123),p=t(1121),g=t(65),j=t(1104),v=t(1153),O=t(1118),h=t(1105),y=t(1671),N=t.n(y),k=t(11),x=t(1108),S=t(284),w=t(1307),C=t.n(w),I=t(1308),P=t.n(I),A=t(1670),G=t.n(A),R=Object(d.a)((function(){return{root:{display:"flex",alignItems:"center"},likedButton:{color:k.a.red[600]}}}));var z=function(e){var a=e.post,t=e.className,o=Object(r.a)(e,["post","className"]),m=R(),s=Object(c.useState)(a.liked),u=Object(n.a)(s,2),d=u[0],E=u[1],f=Object(c.useState)(a.likes),b=Object(n.a)(f,2),j=b[0],v=b[1];return l.a.createElement("div",Object.assign({className:Object(i.a)(m.root,t)},o),d?l.a.createElement(x.a,{title:"Unlike"},l.a.createElement(S.a,{className:m.likedButton,onClick:function(){E(!1),v((function(e){return e-1}))}},l.a.createElement(C.a,{fontSize:"small"}))):l.a.createElement(x.a,{title:"Like"},l.a.createElement(S.a,{onClick:function(){E(!0),v((function(e){return e+1}))}},l.a.createElement(P.a,{fontSize:"small"}))),l.a.createElement(g.a,{color:"textSecondary",variant:"h6"},j),l.a.createElement(p.a,{flexGrow:1}),l.a.createElement(S.a,null,l.a.createElement(G.a,{fontSize:"small"})))},B=Object(d.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)},bubble:{borderRadius:e.shape.borderRadius}}}));var W=function(e){var a=e.comment,t=e.className,n=Object(r.a)(e,["comment","className"]),c=B();return l.a.createElement("div",Object.assign({className:Object(i.a)(c.root,t)},n),l.a.createElement(b.a,{alt:"Person",component:o.a,src:a.author.avatar,to:"#"}),l.a.createElement(p.a,{flexGrow:1,p:2,ml:2,bgcolor:"background.dark",className:c.bubble},l.a.createElement(p.a,{display:"flex",alignItems:"center",mb:1},l.a.createElement(j.a,{color:"textPrimary",component:o.a,to:"#",variant:"h6"},a.author.name),l.a.createElement(p.a,{flexGrow:1}),l.a.createElement(g.a,{color:"textSecondary",variant:"caption"},s()(a.createdAt).fromNow())),l.a.createElement(g.a,{variant:"body1",color:"textPrimary"},a.message)))},F=t(46),L=t(183),U=t(370),H=t(1299),J=t.n(H),T=t(1285),q=t.n(T),D=t(1294),K=t.n(D),M=Object(d.a)((function(){return{root:{display:"flex",alignItems:"center"},divider:{width:1,height:24},fileInput:{display:"none"}}}));var Q=function(e){var a=e.className,t=Object(r.a)(e,["className"]),o=M(),m=Object(F.d)((function(e){return e.account})).user,s=Object(c.useRef)(null),u=Object(c.useState)(""),d=Object(n.a)(u,2),E=d[0],f=d[1],g=function(){s.current.click()};return l.a.createElement("div",Object.assign({className:Object(i.a)(o.root,a)},t),l.a.createElement(b.a,{alt:"Person",src:m.avatar}),l.a.createElement(L.a,{variant:"outlined",flexGrow:1,component:p.a,ml:2,py:.5,px:2},l.a.createElement(U.a,{disableUnderline:!0,fullWidth:!0,onChange:function(e){e.persist(),f(e.target.value)},placeholder:"Leave a message"})),l.a.createElement(x.a,{title:"Send"},l.a.createElement(S.a,{color:E.length>0?"primary":"default"},l.a.createElement(J.a,null))),l.a.createElement(h.a,{className:o.divider}),l.a.createElement(x.a,{title:"Attach image"},l.a.createElement(S.a,{edge:"end",onClick:g},l.a.createElement(q.a,null))),l.a.createElement(x.a,{title:"Attach file"},l.a.createElement(S.a,{edge:"end",onClick:g},l.a.createElement(K.a,null))),l.a.createElement("input",{className:o.fileInput,ref:s,type:"file"}))},V=Object(d.a)((function(){return{root:{},date:{marginLeft:6},media:{height:500,backgroundPosition:"top"}}}));a.a=function(e){var a=e.className,t=e.post,m=Object(r.a)(e,["className","post"]),d=V(),y=Object(c.useState)(null),k=Object(n.a)(y,2),x=k[0],S=k[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,Object.assign({className:Object(i.a)(d.root,a)},m),l.a.createElement(f.a,{avatar:l.a.createElement(b.a,{alt:"Person",className:d.avatar,component:o.a,src:t.author.avatar,to:"#"}),disableTypography:!0,subheader:l.a.createElement(p.a,{display:"flex",alignItems:"center"},l.a.createElement(N.a,{fontSize:"small"}),l.a.createElement(g.a,{variant:"caption",color:"textSecondary",className:d.date},s()(t.createdAt).fromNow())),title:l.a.createElement(j.a,{color:"textPrimary",component:o.a,to:"#",variant:"h6"},t.author.name)}),l.a.createElement(p.a,{px:3,pb:2},l.a.createElement(g.a,{variant:"body1",color:"textPrimary"},t.message),t.media&&l.a.createElement(p.a,{mt:2},l.a.createElement(v.a,{onClick:function(){return S(t.media)}},l.a.createElement(O.a,{className:d.media,image:t.media}))),l.a.createElement(p.a,{mt:2},l.a.createElement(z,{post:t})),l.a.createElement(p.a,{my:2},l.a.createElement(h.a,null)),t.comments.map((function(e){return l.a.createElement(W,{comment:e,key:e.id})})),l.a.createElement(p.a,{my:2},l.a.createElement(h.a,null)),l.a.createElement(Q,null))),x&&l.a.createElement(u.a,{large:x,onClose:function(){return S(null)}}))}},2347:function(e,a,t){"use strict";t.r(a);var n=t(24),r=t(0),c=t.n(r),l=t(77),o=t(1117),i=t(1121),m=t(19),s=t(1235),u=t(373),d=t(1501),E=t(1517),f=t(27),b=t(3),p=t(65),g=Object(l.a)((function(){return{root:{}}}));var j=function(e){var a=e.className,t=Object(f.a)(e,["className"]),n=g();return c.a.createElement("div",Object.assign({className:Object(b.a)(n.root,a)},t),c.a.createElement(p.a,{variant:"overline",color:"textSecondary"},"Social Feed"),c.a.createElement(p.a,{variant:"h3",color:"textPrimary"},"Here's what your connections posted"))},v=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=v(),a=Object(s.a)(),t=Object(r.useState)(null),l=Object(n.a)(t,2),f=l[0],b=l[1],p=Object(r.useCallback)((function(){m.a.get("/api/social/feed").then((function(e){a.current&&b(e.data.posts)}))}),[a]);return Object(r.useEffect)((function(){p()}),[p]),f?c.a.createElement(u.a,{className:e.root,title:"Social Feed"},c.a.createElement(o.a,{maxWidth:"lg"},c.a.createElement(j,null),c.a.createElement(i.a,{mt:3},c.a.createElement(d.a,null)),f.map((function(e){return c.a.createElement(i.a,{mt:3,key:e.id},c.a.createElement(E.a,{post:e}))})))):null}}}]);
//# sourceMappingURL=44.e784b038.chunk.js.map