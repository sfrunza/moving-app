(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[50],{1456:function(e,a,t){"use strict";var n=t(27),r=t(0),c=t.n(r),i=t(3),l=t(77),o=t(11),s=t(1108),u=t(1123),m=t(65),d=Object(l.a)((function(e){return{root:{display:"flex",paddingLeft:20},avatar:{border:"3px solid ".concat(e.palette.background.default),marginLeft:-20,"&:hover":{zIndex:2}},more:{backgroundColor:o.a.red[600],color:o.a.common.white}}}));function p(e){var a=e.avatars,t=e.limit,r=e.className,l=Object(n.a)(e,["avatars","limit","className"]),o=d(),p=0,b=a.slice(0,t).map((function(e){return c.a.createElement(s.a,{key:++p,title:"View"},c.a.createElement(u.a,{className:o.avatar,src:e}))}));return a.length>t&&b.push(c.a.createElement(u.a,{key:++p,className:Object(i.a)(o.avatar,o.more)},c.a.createElement(m.a,{color:"inherit",variant:"subtitle2"},"+",a.length-t))),c.a.createElement("div",Object.assign({className:Object(i.a)(o.root,r)},l),b)}p.defaultProps={avatars:[],limit:3},a.a=Object(r.memo)(p)},2313:function(e,a,t){"use strict";t.r(a);var n=t(60),r=t.n(n),c=t(108),i=t(0),l=t.n(i),o=t(46),s=t(1714),u=t(155),m=t(77),d=t(1121),p=t(373),b=t(52),f=t(27),v=t(8),h=t(3),E=t(1130),g=t(1104),O=t(65),j=t(1237),k=t.n(j),x=Object(m.a)((function(){return{root:{}}}));var y=function(e){var a=e.className,t=Object(f.a)(e,["className"]),n=x();return l.a.createElement("div",Object.assign({className:Object(h.a)(n.root,a)},t),l.a.createElement(E.a,{separator:l.a.createElement(k.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:v.a},"Dashboard"),l.a.createElement(O.a,{variant:"body1",color:"textPrimary"},"Kanban")),l.a.createElement(O.a,{variant:"h3",color:"textPrimary"},"Board"))},C=t(49),w=t(24),N=t(25),I=t(183),S=t(616),P=t(369),z=t(284),A=t(107),L=t(1105),W=t(359),B=t(1107),R=t(1634),D=t(1128),G=t(1118),q=t(1129),T=t(2305),M=t(2302),Y=t(2301),U=t(1203),H=t(1456),F=t(635),K=t(1115),V=t(1215),J=t(1197),X=t(1343),$=t(2303),Q=t(1211),Z=t(2304),_=t(2013),ee=t(10),ae=t.n(ee),te=Object(m.a)((function(){return{root:{}}}));var ne=function(e){var a=e.card,t=e.className,n=(e.list,Object(f.a)(e,["card","className","list"])),i=te(),s=Object(o.c)(),m=Object(u.b)().enqueueSnackbar,p=ae.a.debounce(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(Object(b.C)(a.id,t));case 3:m("Card updated",{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),m("Ooops!",{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),1e3);return l.a.createElement("div",Object.assign({className:Object(h.a)(i.root,t)},n),l.a.createElement(d.a,{mt:3},l.a.createElement(P.a,{variant:"outlined",fullWidth:!0,defaultValue:a.name,onChange:function(e){return p({name:e.target.value})},label:"Card Title"})),l.a.createElement(d.a,{mt:3},l.a.createElement(O.a,{variant:"h4",color:"textPrimary"},"Description"),l.a.createElement(d.a,{mt:2},l.a.createElement(P.a,{multiline:!0,rows:6,fullWidth:!0,variant:"outlined",onChange:function(e){return p({description:e.target.value})},placeholder:"Leave a message",defaultValue:a.description}))))},re=t(184),ce=t(1119),ie=t(2300),le=t(1133),oe=t(1431),se=Object(m.a)((function(e){return{root:{padding:e.spacing(1),display:"flex",alignItems:"flex-start",borderRadius:e.shape.borderRadius,"&:hover":{backgroundColor:e.palette.background.dark,"& $deleteButton":{visibility:"visible"}}},checkbox:{marginLeft:e.spacing(-1),marginRight:e.spacing(1)},name:{flexGrow:1,cursor:"pointer",minHeight:32},deleteButton:{visibility:"hidden"}}}));function ue(e){var a=e.card,t=e.checklist,n=e.checkItem,s=e.className,m=e.editing,p=e.onEditCancel,v=e.onEditInit,E=e.onEditComplete,g=Object(f.a)(e,["card","checklist","checkItem","className","editing","onEditCancel","onEditInit","onEditComplete"]),j=se(),k=Object(o.c)(),x=Object(u.b)().enqueueSnackbar,y=Object(i.useState)(n.name),C=Object(w.a)(y,2),N=C[0],I=C[1],S=function(){var e=Object(c.a)(r.a.mark((function e(c){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.persist(),i=c.target.checked?"complete":"incomplete",e.next=5,k(Object(b.D)(a.id,t.id,n.id,{state:i}));case 5:x("Check item updated",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x("Ooops!",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(Object(b.D)(a.id,t.id,n.id,{name:N}));case 3:E(),x("Check item added",{variant:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x("Ooops!",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(Object(b.x)(a.id,t.id,n.id));case 3:x("Check item added",{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),x("Ooops!",{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(h.a)(j.root,s)},g),l.a.createElement(le.a,{checked:"complete"===n.state,onChange:S,className:j.checkbox}),m?l.a.createElement(d.a,{flexGrow:1},l.a.createElement(P.a,{value:N,variant:"outlined",fullWidth:!0,onChange:function(e){e.persist(),I(e.target.value)}}),l.a.createElement(d.a,{mt:1},l.a.createElement(re.a,{size:"small",variant:"contained",color:"secondary",onClick:L},"Save"),l.a.createElement(re.a,{size:"small",onClick:function(){I(n.name),p()}},"Cancel"))):l.a.createElement(d.a,{display:"flex",alignItems:"center",flexGrow:1},l.a.createElement(O.a,{onClick:v,color:"textPrimary",variant:"body1",className:j.name},n.name),l.a.createElement(z.a,{onClick:W,className:j.deleteButton},l.a.createElement(A.a,{fontSize:"small"},l.a.createElement(oe.a,null)))))}ue.defaultProps={editing:!1,onEditCancel:function(){},onEditComplete:function(){},onEditInit:function(){}};var me=ue,de=Object(m.a)((function(){return{root:{}}}));function pe(e){var a=e.card,t=e.checklist,n=e.className,s=Object(f.a)(e,["card","checklist","className"]),m=de(),p=Object(o.c)(),v=Object(u.b)().enqueueSnackbar,E=Object(i.useState)(""),g=Object(w.a)(E,2),O=g[0],j=g[1],k=Object(i.useState)(!1),x=Object(w.a)(k,2),y=x[0],C=x[1],N=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,p(Object(b.q)(a.id,t.id,O));case 5:C(!1),j(""),v("Check item added",{variant:"success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v("Ooops!",{variant:"error"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(h.a)(m.root,n)},s),y?l.a.createElement("div",null,l.a.createElement(P.a,{fullWidth:!0,onChange:function(e){e.persist(),j(e.target.value)},placeholder:"Add an item",value:O,variant:"outlined"}),l.a.createElement(d.a,{mt:1},l.a.createElement(re.a,{variant:"contained",color:"primary",size:"small",onClick:N},"Save"),l.a.createElement(re.a,{size:"small",onClick:function(){C(!1),j("")}},"Cancel"))):l.a.createElement(re.a,{variant:"outlined",size:"small",onClick:function(){C(!0)}},"Add an item"))}pe.defaultProps={className:""};var be=pe,fe=Object(m.a)((function(e){return{root:{},listIcon:{marginRight:e.spacing(3)}}}));var ve=function(e){var a=e.card,t=e.checklist,n=e.className,s=Object(f.a)(e,["card","checklist","className"]),m=fe(),p=Object(o.c)(),v=Object(u.b)().enqueueSnackbar,E=Object(i.useState)(t.name),g=Object(w.a)(E,2),j=g[0],k=g[1],x=Object(i.useState)(null),y=Object(w.a)(x,2),C=y[0],N=y[1],I=Object(i.useState)(null),S=Object(w.a)(I,2),z=S[0],L=S[1],W=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,j&&j!==t.name){e.next=5;break}return N(!1),k(t.name),e.abrupt("return");case 5:return N(!1),e.next=8,p(Object(b.E)(a.id,t.id,{name:j}));case 8:v("Checklist updated",{variant:"success"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),v("Ooops!",{variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(Object(b.y)(a.id,t.id));case 3:v("Checklist deleted",{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),v("Ooops!",{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),R=function(){L(null)},D=function(){L(null)},G=t.checkItems.length,q=t.checkItems.filter((function(e){return"complete"===e.state})).length,T=0===G?100:q/G*100;return l.a.createElement("div",Object.assign({className:Object(h.a)(m.root,n)},s),l.a.createElement(d.a,{display:"flex"},l.a.createElement(A.a,{fontSize:"small",color:"action",className:m.listIcon},l.a.createElement(ie.a,null)),C?l.a.createElement(d.a,{flexGrow:1},l.a.createElement(P.a,{value:j,fullWidth:!0,variant:"outlined",onChange:function(e){e.persist(),k(e.target.value)}}),l.a.createElement(d.a,{mt:1},l.a.createElement(re.a,{color:"primary",size:"small",variant:"contained",onClick:W},"Save"),l.a.createElement(re.a,{size:"small",onClick:function(){N(!1),k(t.name)}},"Cancel"))):l.a.createElement(d.a,{display:"flex",alignItems:"center",flexGrow:1},l.a.createElement(O.a,{variant:"h4",color:"textPrimary",onClick:function(){N(!0)}},t.name),l.a.createElement(d.a,{flexGrow:1}),l.a.createElement(re.a,{size:"small",onClick:B},"Delete"))),l.a.createElement(d.a,{mt:1,display:"flex",alignItems:"center"},l.a.createElement(O.a,{variant:"caption",color:"textSecondary"},parseInt(T,10),"%"),l.a.createElement(d.a,{ml:2,flexGrow:1},l.a.createElement(ce.a,{variant:"determinate",value:T,color:"secondary"}))),l.a.createElement(d.a,{mt:3},t.checkItems.map((function(e){return l.a.createElement(me,{editing:z===e.id,checkItem:e,card:a,checklist:t,key:e.id,onEditCancel:R,onEditComplete:D,onEditInit:function(){return a=e.id,void L(a);var a}})}))),l.a.createElement(d.a,{mt:1,ml:6},l.a.createElement(be,{card:a,checklist:t})))},he=t(1123),Ee=Object(m.a)((function(e){return{root:{display:"flex",alignItems:"center"},field:{marginLeft:e.spacing(2)}}}));var ge=function(e){var a=e.cardId,t=e.className,n=Object(f.a)(e,["cardId","className"]),s=Ee(),m=Object(o.c)(),d=Object(o.d)((function(e){return e.account})).user,p=Object(u.b)().enqueueSnackbar,v=Object(i.useState)(""),E=Object(w.a)(v,2),g=E[0],O=E[1],j=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.persist(),13!==t.keyCode||!g){e.next=7;break}return e.next=5,m(Object(b.s)(d.id,a,g));case 5:O(""),p("Comment added",{variant:"success"});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p("Ooops!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(h.a)(s.root,t)},n),l.a.createElement(he.a,{alt:"Person",src:d.avatar}),l.a.createElement(P.a,{fullWidth:!0,className:s.field,value:g,onKeyUp:j,onChange:function(e){e.persist(),O(e.target.value)},placeholder:"Write a comment...",variant:"outlined"}))},Oe=t(5),je=t.n(Oe);var ke=Object(m.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)}}}));var xe=function(e){var a=e.comment,t=e.className,n=Object(f.a)(e,["comment","className"]),r=ke(),c=Object(o.d)((function(e){return function(e,a){return e.kanban.members.byId[a]||{}}(e,a.memberId)}));return l.a.createElement("div",Object.assign({className:Object(h.a)(r.root,t)},n),l.a.createElement(he.a,{alt:"Person",src:c.avatar}),l.a.createElement(d.a,{ml:2,flexGrow:1},l.a.createElement(O.a,{variant:"h5",color:"textPrimary",gutterBottom:!0},c.name),l.a.createElement(I.a,{component:d.a,mb:1,p:2,bgcolor:"background.dark",variant:"outlined"},l.a.createElement(O.a,{variant:"body2",color:"textPrimary"},a.message)),l.a.createElement(O.a,{variant:"caption",color:"textSecondary"},je()(a.createdAt).format("MMM DD, YYYY [at] hh:mm a"))))},ye=Object(m.a)((function(e){return{root:{justifyContent:"flex-start",marginTop:e.spacing(1),marginBottom:e.spacing(1)},icon:{marginRight:e.spacing(1)}}}));var Ce=function(e){var a=e.icon,t=e.children,n=Object(f.a)(e,["icon","children"]),r=ye();return l.a.createElement(re.a,Object.assign({className:r.root,fullWidth:!0,variant:"contained",size:"small"},n),a&&l.a.createElement(A.a,{fontSize:"small",className:r.icon},l.a.createElement(a,null)),t)},we=Object(m.a)((function(e){return{root:{padding:e.spacing(3)},listName:{fontWeight:e.typography.fontWeightMedium},checklist:{"& + &":{marginTop:e.spacing(3)}}}}));function Ne(e){var a=e.card,t=(e.className,e.list),n=e.onClose,i=e.open,s=Object(f.a)(e,["card","className","list","onClose","open"]),m=we(),p=Object(o.c)(),v=Object(u.b)().enqueueSnackbar,h=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(Object(b.C)(a.id,{isSubscribed:!0}));case 3:v("Unsubscribed",{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),v("Ooops!",{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(Object(b.C)(a.id,{isSubscribed:!1}));case 3:v("Subscribed",{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),v("Ooops!",{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(Object(b.w)(a.id));case 3:v("Card archived",{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),v("Ooops!",{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(Object(b.r)(a.id,"Untitled Checklist"));case 3:v("Checklist added",{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),v("Ooops!",{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(F.a,Object.assign({onClose:n,open:i,maxWidth:"md",fullWidth:!0},s),l.a.createElement("div",{className:m.root},l.a.createElement(d.a,{display:"flex",justifyContent:"space-between"},l.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"in list"," ",l.a.createElement("span",{className:m.listName},t.name)),l.a.createElement(z.a,{onClick:n},l.a.createElement(A.a,null,l.a.createElement(V.a,null)))),l.a.createElement(K.a,{container:!0,spacing:5},l.a.createElement(K.a,{item:!0,xs:12,sm:8},l.a.createElement(ne,{card:a,list:t}),a.checklists.length>0&&l.a.createElement(d.a,{mt:5},a.checklists.map((function(e){return l.a.createElement(ve,{key:e.id,card:a,checklist:e,className:m.checklist})}))),l.a.createElement(d.a,{mt:3},l.a.createElement(O.a,{variant:"h4",color:"textPrimary"},"Activity"),l.a.createElement(d.a,{mt:2},l.a.createElement(ge,{cardId:a.id}),a.comments.length>0&&l.a.createElement(d.a,{mt:3},a.comments.map((function(e){return l.a.createElement(xe,{key:e.id,comment:e})})))))),l.a.createElement(K.a,{item:!0,xs:12,sm:4},l.a.createElement(O.a,{variant:"overline",color:"textSecondary"},"Add to card"),l.a.createElement(Ce,{icon:Y.a,onClick:j},"Checklist"),l.a.createElement(Ce,{icon:J.a,disabled:!0},"Members"),l.a.createElement(Ce,{icon:J.a,disabled:!0},"Labels"),l.a.createElement(Ce,{icon:M.a,disabled:!0},"Attachments"),l.a.createElement(d.a,{mt:3},l.a.createElement(O.a,{variant:"overline",color:"textSecondary"},"Actions"),l.a.createElement(Ce,{icon:X.a,disabled:!0},"Move"),l.a.createElement(Ce,{icon:$.a,disabled:!0},"Copy"),l.a.createElement(Ce,{icon:Q.a,disabled:!0},"Make Template"),a.isSubscribed?l.a.createElement(Ce,{icon:Z.a,onClick:E},"Unwatch"):l.a.createElement(Ce,{icon:T.a,onClick:h},"Watch"),l.a.createElement(L.a,null),l.a.createElement(Ce,{icon:_.a,onClick:g},"Archive"))))))}Ne.defaultProps={open:!1,onClose:function(){}};var Ie=Ne;var Se=Object(m.a)((function(e){return{root:{outline:"none",paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},card:{"&:hover":{backgroundColor:e.palette.background.dark}},dragging:{backgroundColor:e.palette.background.dark},cover:{height:200},badge:{"& + &":{marginLeft:e.spacing(2)}}}})),Pe=Object(i.forwardRef)((function(e,a){var t=e.cardId,n=e.className,r=e.dragging,c=e.index,s=e.list,u=e.style,m=Object(f.a)(e,["cardId","className","dragging","index","list","style"]),p=Se(),b=Object(o.d)((function(e){return function(e,a){var t=e.kanban,n=t.cards,r=t.members,c=n.byId[a];return Object(C.a)(Object(C.a)({},c),{},{members:c.memberIds.map((function(e){return r.byId[e]}))})}(e,t)})),v=Object(i.useState)(!1),E=Object(w.a)(v,2),g=E[0],j=E[1];return l.a.createElement("div",Object.assign({className:Object(h.a)(p.root,n),index:c,ref:a,style:u},m),l.a.createElement(D.a,{className:Object(h.a)(p.card,Object(N.a)({},p.dragging,r)),raised:r,variant:r?"elevation":"outlined",onClick:function(){j(!0)}},b.position,b.cover&&l.a.createElement(G.a,{className:p.cover,image:b.cover}),l.a.createElement(q.a,null,l.a.createElement(O.a,{variant:"h5",color:"textPrimary"},b.name),l.a.createElement(d.a,{mt:2,display:"flex",alignItems:"center"},b.isSubscribed>0&&l.a.createElement(A.a,{className:p.badge,color:"action",fontSize:"small"},l.a.createElement(T.a,null)),b.attachments.length>0&&l.a.createElement(A.a,{className:p.badge,color:"action",fontSize:"small"},l.a.createElement(M.a,null)),b.checklists.length>0&&l.a.createElement(A.a,{className:p.badge,color:"action",fontSize:"small"},l.a.createElement(Y.a,null)),b.comments.length>0&&l.a.createElement(A.a,{className:p.badge,color:"action",fontSize:"small"},l.a.createElement(U.a,null)),l.a.createElement(d.a,{flexGrow:1}),b.members.length>0&&l.a.createElement(H.a,{avatars:b.members.map((function(e){return e.avatar})),limit:5})))),l.a.createElement(Ie,{open:g,onClose:function(){j(!1)},card:b,list:s}))}));Pe.defaultProps={dragging:!1,style:{}};var ze=Pe,Ae=Object(m.a)((function(){return{root:{}}}));function Le(e){var a=e.className,t=e.listId,n=Object(f.a)(e,["className","listId"]),s=Ae(),m=Object(o.c)(),p=Object(u.b)().enqueueSnackbar,v=Object(i.useState)(!1),E=Object(w.a)(v,2),g=E[0],O=E[1],j=Object(i.useState)(""),k=Object(w.a)(j,2),x=k[0],y=k[1],C=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(Object(b.u)(t,x||"Untitled Card"));case 3:O(!1),y(""),p("Card created",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p("Ooops!",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(h.a)(s.root,a)},n),g?l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{fullWidth:!0,label:"Card Title",name:"cardName",onChange:function(e){e.persist(),y(e.target.value)},value:x,variant:"outlined"}),l.a.createElement(d.a,{mt:2,display:"flex",justifyContent:"space-between"},l.a.createElement(re.a,{onClick:function(){O(!1),y("")},variant:"text"},"Cancel"),l.a.createElement(re.a,{onClick:C,variant:"contained",color:"secondary"},"Add"))):l.a.createElement(d.a,{display:"flex",justifyContent:"center"},l.a.createElement(re.a,{onClick:function(){O(!0)}},"Add another card")))}Le.defaultProps={className:""};var We=Le;var Be=Object(m.a)((function(e){return{root:{},inner:Object(N.a)({marginLeft:e.spacing(1),marginRight:e.spacing(1),display:"flex",flexDirection:"column",maxHeight:"100%",overflowY:"hidden",overflowX:"hidden",width:380},e.breakpoints.down("xs"),{width:300}),title:{cursor:"pointer"},droppableArea:{flexGrow:1,overflowY:"auto",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},menu:{width:240}}}));var Re=function(e){var a=e.className,t=e.listId,n=Object(f.a)(e,["className","listId"]),m=Be(),p=Object(i.useState)(!1),v=Object(w.a)(p,2),E=v[0],g=v[1],j=Object(o.d)((function(e){return function(e,a){return e.kanban.lists.byId[a]}(e,t)})),k=Object(o.c)(),x=Object(i.useRef)(null),y=Object(u.b)().enqueueSnackbar,N=Object(i.useState)(j.name),D=Object(w.a)(N,2),G=D[0],q=D[1],T=Object(i.useState)(!1),M=Object(w.a)(T,2),Y=M[0],U=M[1],H=function(){U(!0),g(!1)},F=function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,G){e.next=5;break}return q(j.name),U(!1),e.abrupt("return");case 5:return a={name:G},U(!1),e.next=9,k(Object(b.F)(j.id,a));case 9:y("List updated",{variant:"success"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),y("Ooops!",{variant:"error"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!1),e.next=4,k(Object(b.z)(j.id));case 4:y("List deleted",{variant:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y("Ooops!",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!1),e.next=4,k(Object(b.t)(j.id));case 4:y("List cleared",{variant:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y("Ooops!",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(h.a)(m.root,a)},n),l.a.createElement(I.a,{className:m.inner},l.a.createElement(d.a,{py:1,px:2,display:"flex",alignItems:"center"},Y?l.a.createElement(S.a,{onClickAway:F},l.a.createElement(P.a,{value:G,onBlur:F,onChange:function(e){e.persist(),q(e.target.value)},variant:"outlined",margin:"dense"})):l.a.createElement(O.a,{color:"inherit",variant:"h5",className:m.name,onClick:H},j.name),l.a.createElement(d.a,{flexGrow:1}),l.a.createElement(z.a,{color:"inherit",edge:"end",variant:"contained",onClick:function(){g(!0)},ref:x},l.a.createElement(A.a,{fontSize:"small"},l.a.createElement(R.a,null)))),l.a.createElement(L.a,null),l.a.createElement(s.c,{droppableId:j.id,type:"card"},(function(e){return l.a.createElement(d.a,{minHeight:80,ref:e.innerRef,className:m.droppableArea},j.cardIds.map((function(e,a){return l.a.createElement(s.b,{draggableId:e,index:a,key:e},(function(t,n){return l.a.createElement(ze,Object.assign({cardId:e,dragging:n.isDragging,index:a,key:e,list:j,ref:t.innerRef,style:Object(C.a)({},t.draggableProps.style)},t.draggableProps,t.dragHandleProps))}))})),e.placeholder)})),l.a.createElement(L.a,null),l.a.createElement(d.a,{p:2},l.a.createElement(We,{listId:j.id})),l.a.createElement(W.a,{keepMounted:!0,anchorEl:x.current,open:E,onClose:function(){g(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{className:m.menu},getContentAnchorEl:null},l.a.createElement(B.a,{onClick:H},"Rename"),l.a.createElement(B.a,{onClick:V},"Clear"),l.a.createElement(B.a,{onClick:K},"Delete"))))},De=Object(m.a)((function(e){return{root:{},inner:Object(N.a)({marginLeft:e.spacing(1),marginRight:e.spacing(1),width:380},e.breakpoints.down("xs"),{width:300})}}));var Ge=function(e){var a=e.className,t=Object(f.a)(e,["className"]),n=De(),s=Object(o.c)(),m=Object(u.b)().enqueueSnackbar,p=Object(i.useState)(!1),v=Object(w.a)(p,2),E=v[0],g=v[1],O=Object(i.useState)(""),j=Object(w.a)(O,2),k=j[0],x=j[1],y=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(Object(b.v)(k||"Untitled list"));case 3:g(!1),x(""),m("List created",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m("Ooops!",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",Object.assign({className:Object(h.a)(n.root,a)},t),l.a.createElement(D.a,{className:n.inner},l.a.createElement(d.a,{p:2},E?l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{fullWidth:!0,label:"List Title",name:"listName",onChange:function(e){e.persist(),x(e.target.value)},value:k,variant:"outlined"}),l.a.createElement(d.a,{mt:2,display:"flex",justifyContent:"space-between"},l.a.createElement(re.a,{onClick:function(){g(!1),x("")},variant:"text"},"Cancel"),l.a.createElement(re.a,{onClick:y,variant:"contained",color:"secondary"},"Add"))):l.a.createElement(d.a,{display:"flex",justifyContent:"center"},l.a.createElement(re.a,{onClick:function(){g(!0)}},"Add another list")))))},qe=Object(m.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,height:"100%",display:"flex",overflow:"hidden",flexDirection:"column"},content:{flexGrow:1,flexShrink:1,display:"flex",overflowY:"hidden",overflowX:"auto"},inner:{display:"flex",paddingBottom:e.spacing(3),paddingTop:e.spacing(3),paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}}}));a.default=function(){var e=qe(),a=Object(o.c)(),t=Object(o.d)((function(e){return e.kanban})),n=t.lists,m=t.isLoaded,f=Object(u.b)().enqueueSnackbar,v=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.source,c=t.destination,i=t.draggableId,e.prev=1,c){e.next=4;break}return e.abrupt("return");case 4:if(n.droppableId!==c.droppableId||n.index!==c.index){e.next=6;break}return e.abrupt("return");case 6:if(n.droppableId!==c.droppableId){e.next=11;break}return e.next=9,a(Object(b.B)(i,c.index));case 9:e.next=13;break;case 11:return e.next=13,a(Object(b.B)(i,c.index,c.droppableId));case 13:f("Card moved",{variant:"success"}),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(1);case 18:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(a){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){a(Object(b.A)())}),[a]),m?l.a.createElement(p.a,{className:e.root,title:"Kanban Board"},l.a.createElement(d.a,{p:3},l.a.createElement(y,null)),l.a.createElement(s.a,{onDragEnd:v},l.a.createElement("div",{className:e.content},l.a.createElement("div",{className:e.inner},n.allIds.map((function(a){return l.a.createElement(Re,{className:e.list,key:a,listId:a})})),l.a.createElement(Ge,null))))):null}}}]);
//# sourceMappingURL=50.17247c76.chunk.js.map