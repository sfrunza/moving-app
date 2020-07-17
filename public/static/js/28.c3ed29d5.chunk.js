(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[28],{1421:function(e,a,t){"use strict";var n=t(1),r=t(5),l=t(0),c=(t(3),t(4)),o=t(7),i=t(201),s={variant:"head"},m=l.forwardRef((function(e,a){var t=e.classes,o=e.className,m=e.component,u=void 0===m?"thead":m,d=Object(r.a)(e,["classes","className","component"]);return l.createElement(i.a.Provider,{value:s},l.createElement(u,Object(n.a)({className:Object(c.a)(t.root,o),ref:a,role:"thead"===u?null:"rowgroup"},d)))}));a.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1423:function(e,a,t){"use strict";var n=t(1),r=t(5),l=t(0),c=(t(3),t(4)),o=t(7),i=l.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(c.a)(i.root,s,!o&&i.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(i)},1424:function(e,a,t){"use strict";var n=t(1),r=t(5),l=t(0),c=(t(3),t(4)),o=t(7),i=t(488),s=t(1281),m=t(808),u=t(1300),d=t(796),p=t(67),g=t(502),E=t(503),b=t(36),f=t(376),v=l.createElement(E.a,null),h=l.createElement(g.a,null),P=l.createElement(g.a,null),O=l.createElement(E.a,null),j=l.forwardRef((function(e,a){var t=e.backIconButtonProps,c=e.count,o=e.nextIconButtonProps,i=e.onChangePage,s=e.page,m=e.rowsPerPage,u=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),d=Object(b.a)();return l.createElement("div",Object(n.a)({ref:a},u),l.createElement(f.a,Object(n.a)({onClick:function(e){i(e,s-1)},disabled:0===s,color:"inherit"},t),"rtl"===d.direction?v:h),l.createElement(f.a,Object(n.a)({onClick:function(e){i(e,s+1)},disabled:-1!==c&&s>=Math.ceil(c/m)-1,color:"inherit"},o),"rtl"===d.direction?P:O))})),N=function(e){var a=e.from,t=e.to,n=e.count;return"".concat(a,"-").concat(t," of ").concat(-1!==n?n:"more than ".concat(t))},x=[10,25,50,100],w=l.forwardRef((function(e,a){var t,o=e.ActionsComponent,g=void 0===o?j:o,E=e.backIconButtonProps,b=e.backIconButtonText,f=void 0===b?"Previous page":b,v=e.classes,h=e.className,P=e.colSpan,O=e.component,w=void 0===O?u.a:O,y=e.count,C=e.labelDisplayedRows,I=void 0===C?N:C,k=e.labelRowsPerPage,R=void 0===k?"Rows per page:":k,S=e.nextIconButtonProps,B=e.nextIconButtonText,D=void 0===B?"Next page":B,M=e.onChangePage,A=e.onChangeRowsPerPage,T=e.page,H=e.rowsPerPage,L=e.rowsPerPageOptions,z=void 0===L?x:L,Y=e.SelectProps,W=void 0===Y?{}:Y,J=Object(r.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);w!==u.a&&"td"!==w||(t=P||1e3);var q=W.native?"option":s.a;return l.createElement(w,Object(n.a)({className:Object(c.a)(v.root,h),colSpan:t,ref:a},J),l.createElement(d.a,{className:v.toolbar},l.createElement("div",{className:v.spacer}),z.length>1&&l.createElement(p.a,{color:"inherit",variant:"body2",className:v.caption},R),z.length>1&&l.createElement(m.a,Object(n.a)({classes:{select:v.select,icon:v.selectIcon},input:l.createElement(i.a,{className:Object(c.a)(v.input,v.selectRoot)}),value:H,onChange:A,inputProps:{"aria-label":R}},W),z.map((function(e){return l.createElement(q,{className:v.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),l.createElement(p.a,{color:"inherit",variant:"body2",className:v.caption},I({from:0===y?0:T*H+1,to:-1!==y?Math.min(y,(T+1)*H):(T+1)*H,count:-1===y?-1:y,page:T})),l.createElement(g,{className:v.actions,backIconButtonProps:Object(n.a)({title:f,"aria-label":f},E),count:y,nextIconButtonProps:Object(n.a)({title:D,"aria-label":D},S),onChangePage:M,page:T,rowsPerPage:H})))}));a.a=Object(o.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(w)},2332:function(e,a,t){"use strict";t.r(a);var n=t(26),r=t(0),l=t.n(r),c=t(111),o=t(1292),i=t(1407),s=t(1290),m=t(20),u=t(494),d=t(199),p=t(30),g=t(15),E=t(4),b=t(1412),f=t(1278),v=t(67),h=t(198),P=t(135),O=t(1489),j=t(495),N=t.n(j),x=Object(c.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var w=function(e){e.order;var a=e.className,t=Object(p.a)(e,["order","className"]),n=x();return l.a.createElement(s.a,Object.assign({className:Object(E.a)(n.root,a),container:!0,justify:"space-between",spacing:3},t),l.a.createElement(s.a,{item:!0},l.a.createElement(b.a,{separator:l.a.createElement(N.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(f.a,{variant:"body1",color:"inherit",to:"/app",component:g.a},"Dashboard"),l.a.createElement(f.a,{variant:"body1",color:"inherit",to:"/app/management",component:g.a},"Management"),l.a.createElement(v.a,{variant:"body1",color:"textPrimary"},"Orders")),l.a.createElement(v.a,{variant:"h3",color:"textPrimary"},"Order Details")),l.a.createElement(s.a,{item:!0},l.a.createElement(h.a,{color:"secondary",variant:"contained"},l.a.createElement(P.a,{fontSize:"small",className:n.actionIcon},l.a.createElement(O.a,null)),"Edit")))},y=t(6),C=t.n(y),I=t(1294),k=t(1296),R=t(1279),S=t(1297),B=t(1298),D=t(1299),M=t(1300),A=t(486),T=t(1423),H=t(505),L=t.n(H),z=Object(c.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}})),Y=["Canceled","Completed","Rejected"];var W=function(e){var a=e.order,t=e.className,c=Object(p.a)(e,["order","className"]),o=z(),i=Object(r.useState)(Y[0]),s=Object(n.a)(i,2),m=s[0],u=s[1];return l.a.createElement(I.a,Object.assign({className:Object(E.a)(o.root,t)},c),l.a.createElement(k.a,{title:"Order info"}),l.a.createElement(R.a,null),l.a.createElement(S.a,null,l.a.createElement(B.a,null,l.a.createElement(D.a,null,l.a.createElement(M.a,null,"Customer"),l.a.createElement(M.a,null,l.a.createElement(f.a,{component:g.a,to:"/app/management/customers/1"},a.customer.name),l.a.createElement("div",null,a.customer.address),l.a.createElement("div",null,a.customer.city),l.a.createElement("div",null,a.customer.country))),l.a.createElement(D.a,null,l.a.createElement(M.a,null,"ID"),l.a.createElement(M.a,null,"#",a.id.split("-").shift())),l.a.createElement(D.a,null,l.a.createElement(M.a,null,"Ref"),l.a.createElement(M.a,null,a.ref)),l.a.createElement(D.a,null,l.a.createElement(M.a,null,"Date"),l.a.createElement(M.a,null,C()(a.createdAt).format("DD/MM/YYYY HH:MM"))),l.a.createElement(D.a,null,l.a.createElement(M.a,null,"Promotion Code"),l.a.createElement(M.a,null,a.promoCode?a.promoCode:"N/A")),l.a.createElement(D.a,null,l.a.createElement(M.a,null,"Amount"),l.a.createElement(M.a,null,a.currency,a.value)),l.a.createElement(D.a,null,l.a.createElement(M.a,null,"Status"),l.a.createElement(M.a,null,l.a.createElement(A.a,{fullWidth:!0,name:"option",onChange:function(e){e.persist(),u(e.target.value)},select:!0,SelectProps:{native:!0},value:m,variant:"outlined"},Y.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))))))),l.a.createElement(T.a,null,l.a.createElement(h.a,null,l.a.createElement(L.a,{className:o.actionIcon}),"Resend invoice")))},J=t(291),q=t.n(J),F=t(1421),G=t(1424),K=Object(c.a)((function(){return{root:{}}}));var Q=function(e){var a=e.order,t=e.className,n=Object(p.a)(e,["order","className"]),r=K();return l.a.createElement(I.a,Object.assign({className:Object(E.a)(r.root,t)},n),l.a.createElement(k.a,{title:"Order items"}),l.a.createElement(R.a,null),l.a.createElement(q.a,null,l.a.createElement(i.a,{minWidth:700},l.a.createElement(S.a,null,l.a.createElement(F.a,null,l.a.createElement(D.a,null,l.a.createElement(M.a,null,"Description"),l.a.createElement(M.a,null,"Billing Cycle"),l.a.createElement(M.a,null,"Status"),l.a.createElement(M.a,null,"Amount"))),l.a.createElement(B.a,null,a.items.map((function(e){return l.a.createElement(D.a,{key:e.id},l.a.createElement(M.a,null,e.name," ","x"," ",e.cuantity),l.a.createElement(M.a,null,e.billing),l.a.createElement(M.a,null,e.status),l.a.createElement(M.a,null,e.currency,e.value))})))))),l.a.createElement(G.a,{component:"div",count:a.items.length,onChangePage:function(){},onChangeRowsPerPage:function(){},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]}))},U=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=U(),a=Object(u.a)(),t=Object(r.useState)(null),c=Object(n.a)(t,2),p=c[0],g=c[1],E=Object(r.useCallback)((function(){m.a.get("/api/management/orders/1").then((function(e){a.current&&g(e.data.order)}))}),[a]);return Object(r.useEffect)((function(){E()}),[E]),p?l.a.createElement(d.a,{className:e.root,title:"Order Details"},l.a.createElement(o.a,{maxWidth:!1},l.a.createElement(w,{order:p}),l.a.createElement(i.a,{mt:2},l.a.createElement(s.a,{container:!0,spacing:3},l.a.createElement(s.a,{item:!0,md:4,xl:3,xs:12},l.a.createElement(W,{order:p})),l.a.createElement(s.a,{item:!0,md:8,xl:9,xs:12},l.a.createElement(Q,{order:p})))))):null}}}]);
//# sourceMappingURL=28.c3ed29d5.chunk.js.map