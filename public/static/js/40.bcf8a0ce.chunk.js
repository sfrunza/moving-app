(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[40],{1132:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),c=(t(2),t(3)),o=t(7),i=t(65),m=l.forwardRef((function(e,a){var t=e.action,o=e.avatar,m=e.classes,s=e.className,u=e.component,d=void 0===u?"div":u,E=e.disableTypography,p=void 0!==E&&E,b=e.subheader,f=e.subheaderTypographyProps,g=e.title,v=e.titleTypographyProps,O=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=g;null==y||y.type===i.a||p||(y=l.createElement(i.a,Object(n.a)({variant:o?"body2":"h5",className:m.title,component:"span",display:"block"},v),y));var h=b;return null==h||h.type===i.a||p||(h=l.createElement(i.a,Object(n.a)({variant:o?"body2":"body1",className:m.subheader,color:"textSecondary",component:"span",display:"block"},f),h)),l.createElement(d,Object(n.a)({className:Object(c.a)(m.root,s),ref:a},O),o&&l.createElement("div",{className:m.avatar},o),l.createElement("div",{className:m.content},y,h),t&&l.createElement("div",{className:m.action},t))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(m)},1135:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),c=(t(2),t(3)),o=t(7),i=l.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,m=e.className,s=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(c.a)(i.root,m,!o&&i.spacing),ref:a},s))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(i)},1235:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1318:function(e,a,t){"use strict";var n=t(0),r=t(152);a.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1319:function(e,a,t){"use strict";var n=t(0),r=t(152);a.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},2332:function(e,a,t){"use strict";t.r(a);var n=t(24),r=t(0),l=t.n(r),c=t(77),o=t(1117),i=t(1121),m=t(1115),s=t(19),u=t(1235),d=t(373),E=t(27),p=t(8),b=t(3),f=t(1130),g=t(1104),v=t(65),O=t(183),y=t(106),h=t(1210),j=t(1237),N=t.n(j),x=Object(c.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var P=function(e){e.order;var a=e.className,t=Object(E.a)(e,["order","className"]),n=x();return l.a.createElement(m.a,Object.assign({className:Object(b.a)(n.root,a),container:!0,justify:"space-between",spacing:3},t),l.a.createElement(m.a,{item:!0},l.a.createElement(f.a,{separator:l.a.createElement(N.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:p.a},"Dashboard"),l.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app/management",component:p.a},"Management"),l.a.createElement(v.a,{variant:"body1",color:"textPrimary"},"Orders")),l.a.createElement(v.a,{variant:"h3",color:"textPrimary"},"Order Details")),l.a.createElement(m.a,{item:!0},l.a.createElement(O.a,{color:"secondary",variant:"contained"},l.a.createElement(y.a,{fontSize:"small",className:n.actionIcon},l.a.createElement(h.a,null)),"Edit")))},C=t(5),k=t.n(C),R=t(1128),S=t(1132),w=t(1105),M=t(1136),D=t(1137),T=t(1138),A=t(1139),I=t(369),z=t(1135),H=t(378),L=t.n(H),Y=Object(c.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}})),W=["Canceled","Completed","Rejected"];var B=function(e){var a=e.order,t=e.className,c=Object(E.a)(e,["order","className"]),o=Y(),i=Object(r.useState)(W[0]),m=Object(n.a)(i,2),s=m[0],u=m[1];return l.a.createElement(R.a,Object.assign({className:Object(b.a)(o.root,t)},c),l.a.createElement(S.a,{title:"Order info"}),l.a.createElement(w.a,null),l.a.createElement(M.a,null,l.a.createElement(D.a,null,l.a.createElement(T.a,null,l.a.createElement(A.a,null,"Customer"),l.a.createElement(A.a,null,l.a.createElement(g.a,{component:p.a,to:"/app/management/customers/1"},a.customer.name),l.a.createElement("div",null,a.customer.address),l.a.createElement("div",null,a.customer.city),l.a.createElement("div",null,a.customer.country))),l.a.createElement(T.a,null,l.a.createElement(A.a,null,"ID"),l.a.createElement(A.a,null,"#",a.id.split("-").shift())),l.a.createElement(T.a,null,l.a.createElement(A.a,null,"Ref"),l.a.createElement(A.a,null,a.ref)),l.a.createElement(T.a,null,l.a.createElement(A.a,null,"Date"),l.a.createElement(A.a,null,k()(a.createdAt).format("DD/MM/YYYY HH:MM"))),l.a.createElement(T.a,null,l.a.createElement(A.a,null,"Promotion Code"),l.a.createElement(A.a,null,a.promoCode?a.promoCode:"N/A")),l.a.createElement(T.a,null,l.a.createElement(A.a,null,"Amount"),l.a.createElement(A.a,null,a.currency,a.value)),l.a.createElement(T.a,null,l.a.createElement(A.a,null,"Status"),l.a.createElement(A.a,null,l.a.createElement(I.a,{fullWidth:!0,name:"option",onChange:function(e){e.persist(),u(e.target.value)},select:!0,SelectProps:{native:!0},value:s,variant:"outlined"},W.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))))))),l.a.createElement(z.a,null,l.a.createElement(O.a,null,l.a.createElement(L.a,{className:o.actionIcon}),"Resend invoice")))},J=t(220),K=t.n(J),q=t(1140),F=t(1157),G=Object(c.a)((function(){return{root:{}}}));var Q=function(e){var a=e.order,t=e.className,n=Object(E.a)(e,["order","className"]),r=G();return l.a.createElement(R.a,Object.assign({className:Object(b.a)(r.root,t)},n),l.a.createElement(S.a,{title:"Order items"}),l.a.createElement(w.a,null),l.a.createElement(K.a,null,l.a.createElement(i.a,{minWidth:700},l.a.createElement(M.a,null,l.a.createElement(q.a,null,l.a.createElement(T.a,null,l.a.createElement(A.a,null,"Description"),l.a.createElement(A.a,null,"Billing Cycle"),l.a.createElement(A.a,null,"Status"),l.a.createElement(A.a,null,"Amount"))),l.a.createElement(D.a,null,a.items.map((function(e){return l.a.createElement(T.a,{key:e.id},l.a.createElement(A.a,null,e.name," ","x"," ",e.cuantity),l.a.createElement(A.a,null,e.billing),l.a.createElement(A.a,null,e.status),l.a.createElement(A.a,null,e.currency,e.value))})))))),l.a.createElement(F.a,{component:"div",count:a.items.length,onChangePage:function(){},onChangeRowsPerPage:function(){},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]}))},U=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=U(),a=Object(u.a)(),t=Object(r.useState)(null),c=Object(n.a)(t,2),E=c[0],p=c[1],b=Object(r.useCallback)((function(){s.a.get("/api/management/orders/1").then((function(e){a.current&&p(e.data.order)}))}),[a]);return Object(r.useEffect)((function(){b()}),[b]),E?l.a.createElement(d.a,{className:e.root,title:"Order Details"},l.a.createElement(o.a,{maxWidth:!1},l.a.createElement(P,{order:E}),l.a.createElement(i.a,{mt:2},l.a.createElement(m.a,{container:!0,spacing:3},l.a.createElement(m.a,{item:!0,md:4,xl:3,xs:12},l.a.createElement(B,{order:E})),l.a.createElement(m.a,{item:!0,md:8,xl:9,xs:12},l.a.createElement(Q,{order:E})))))):null}}}]);
//# sourceMappingURL=40.bcf8a0ce.chunk.js.map