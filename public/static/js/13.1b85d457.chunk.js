(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{405:function(e,t,a){"use strict";var n=a(5),o=a(10),r=a(0),c=a(423),i=a.n(c),l=a(303),s=a(1),u=["children"],d=Object(r.forwardRef)((function(e,t){var a=e.children,r=Object(o.a)(e,u);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(s.jsx)(l.a,{ref:t,sx:{overflowX:"auto"},children:a}):Object(s.jsx)(i.a,Object(n.a)(Object(n.a)({ref:t},r),{},{children:a}))}));t.a=d},412:function(e,t,a){"use strict";var n=a(2),o=a(4),r=a(0),c=(a(6),a(3)),i=a(11),l=a(7),s=a(88),u=a(16),d=a(66),b=r.forwardRef((function(e,t){var a=e.classes,l=e.className,b=e.color,j=void 0===b?"primary":b,h=e.component,p=void 0===h?"a":h,m=e.onBlur,g=e.onFocus,f=e.TypographyClasses,O=e.underline,v=void 0===O?"hover":O,x=e.variant,P=void 0===x?"inherit":x,w=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),y=Object(s.a)(),C=y.isFocusVisible,E=y.onBlurVisible,S=y.ref,N=r.useState(!1),R=N[0],k=N[1],I=Object(u.a)(t,S);return r.createElement(d.a,Object(n.a)({className:Object(c.a)(a.root,a["underline".concat(Object(i.a)(v))],l,R&&a.focusVisible,"button"===p&&a.button),classes:f,color:j,component:p,onBlur:function(e){R&&(E(),k(!1)),m&&m(e)},onFocus:function(e){C(e)&&k(!0),g&&g(e)},ref:I,variant:P},w))}));t.a=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b)},432:function(e,t,a){"use strict";var n=a(2),o=a(61),r=a(4),c=a(0),i=(a(102),a(6),a(3)),l=a(7),s=a(66),u=a(21),d=a(42),b=Object(d.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),j=a(112);var h=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(r.a)(e,["classes"]);return c.createElement(j.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(b,{className:t.icon}))}));var p=c.forwardRef((function(e,t){var a=e.children,l=e.classes,u=e.className,d=e.component,b=void 0===d?"nav":d,j=e.expandText,p=void 0===j?"Show path":j,m=e.itemsAfterCollapse,g=void 0===m?1:m,f=e.itemsBeforeCollapse,O=void 0===f?1:f,v=e.maxItems,x=void 0===v?8:v,P=e.separator,w=void 0===P?"/":P,y=Object(r.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=c.useState(!1),E=C[0],S=C[1],N=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return c.createElement(s.a,Object(n.a)({ref:t,component:b,color:"textSecondary",className:Object(i.a)(l.root,u)},y),c.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(n,o,r){return r<e.length-1?n=n.concat(o,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},a)):n.push(o),n}),[])}(E||x&&N.length<=x?N:function(e){return O+g>=e.length?e:[].concat(Object(o.a)(e.slice(0,O)),[c.createElement(h,{"aria-label":p,key:"ellipsis",onClick:function(e){S(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(o.a)(e.slice(e.length-g,e.length)))}(N),l.separator,w)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(p)},433:function(e,t,a){"use strict";var n=a(17),o=a.n(n),r=a(1),c=o()(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=c},434:function(e,t,a){"use strict";var n=a(17),o=a.n(n),r=a(1),c=o()(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search");t.a=c},477:function(e,t,a){"use strict";var n=a(2),o=a(4),r=a(0),c=(a(6),a(3)),i=a(7),l=a(224),s=a(363),u=a(380),d=a(368),b=a(357),j=a(66),h=a(163),p=a(164),m=a(41),g=a(300),f=r.createElement(p.a,null),O=r.createElement(h.a,null),v=r.createElement(h.a,null),x=r.createElement(p.a,null),P=r.forwardRef((function(e,t){var a=e.backIconButtonProps,c=e.count,i=e.nextIconButtonProps,l=e.onChangePage,s=void 0===l?function(){}:l,u=e.onPageChange,d=void 0===u?function(){}:u,b=e.page,j=e.rowsPerPage,h=Object(o.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","onPageChange","page","rowsPerPage"]),p=Object(m.a)();return r.createElement("div",Object(n.a)({ref:t},h),r.createElement(g.a,Object(n.a)({onClick:function(e){s(e,b-1),d(e,b-1)},disabled:0===b,color:"inherit"},a),"rtl"===p.direction?f:O),r.createElement(g.a,Object(n.a)({onClick:function(e){s(e,b+1),d(e,b+1)},disabled:-1!==c&&b>=Math.ceil(c/j)-1,color:"inherit"},i),"rtl"===p.direction?v:x))})),w=a(114),y=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))},C=[10,25,50,100],E=r.forwardRef((function(e,t){var a,i=e.ActionsComponent,h=void 0===i?P:i,p=e.backIconButtonProps,m=e.backIconButtonText,g=void 0===m?"Previous page":m,f=e.classes,O=e.className,v=e.colSpan,x=e.component,E=void 0===x?d.a:x,S=e.count,N=e.labelDisplayedRows,R=void 0===N?y:N,k=e.labelRowsPerPage,I=void 0===k?"Rows per page:":k,B=e.nextIconButtonProps,z=e.nextIconButtonText,A=void 0===z?"Next page":z,T=e.onChangePage,M=e.onPageChange,L=e.onChangeRowsPerPage,D=e.onRowsPerPageChange,H=e.page,V=e.rowsPerPage,F=e.rowsPerPageOptions,W=void 0===F?C:F,_=e.SelectProps,q=void 0===_?{}:_,J=Object(o.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onPageChange","onChangeRowsPerPage","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps"]),G=L||D;E!==d.a&&"td"!==E||(a=v||1e3);var X=Object(w.a)(),Y=Object(w.a)(),$=q.native?"option":s.a;return r.createElement(E,Object(n.a)({className:Object(c.a)(f.root,O),colSpan:a,ref:t},J),r.createElement(b.a,{className:f.toolbar},r.createElement("div",{className:f.spacer}),W.length>1&&r.createElement(j.a,{color:"inherit",variant:"body2",className:f.caption,id:Y},I),W.length>1&&r.createElement(u.a,Object(n.a)({classes:{select:f.select,icon:f.selectIcon},input:r.createElement(l.a,{className:Object(c.a)(f.input,f.selectRoot)}),value:V,onChange:G,id:X,labelId:Y},q),W.map((function(e){return r.createElement($,{className:f.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),r.createElement(j.a,{color:"inherit",variant:"body2",className:f.caption},R({from:0===S?0:H*V+1,to:-1!==S?Math.min(S,(H+1)*V):(H+1)*V,count:-1===S?-1:S,page:H})),r.createElement(h,{className:f.actions,backIconButtonProps:Object(n.a)({title:g,"aria-label":g},p),count:S,nextIconButtonProps:Object(n.a)({title:A,"aria-label":A},B),onChangePage:T,onPageChange:M,page:H,rowsPerPage:V})))}));t.a=Object(i.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(E)},976:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(303),r=a(365),c=a(55),i=a(29),l=a(343),s=a(66),u=a(432),d=a(412),b=a(347),j=a(433),h=a(87),p=a(1);var m=function(){return Object(p.jsxs)(l.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(p.jsxs)(l.a,{item:!0,children:[Object(p.jsx)(s.a,{color:"textPrimary",variant:"h5",children:"Employee list"}),Object(p.jsxs)(u.a,{"aria-label":"breadcrumb",separator:Object(p.jsx)(h.a,{fontSize:"small"}),style:{marginTop:8},children:[Object(p.jsx)(d.a,{color:"textPrimary",component:i.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(p.jsx)(s.a,{color:"textSecondary",variant:"subtitle2",children:"Employees"})]})]}),Object(p.jsx)(l.a,{item:!0,children:Object(p.jsx)(o.a,{m:-1,children:Object(p.jsx)(b.a,{color:"primary",disabled:!0,disableElevation:!0,startIcon:Object(p.jsx)(j.a,{fontSize:"small"}),style:{margin:8},variant:"contained",children:"New Appointment"})})})]})},g=a(5),f=a(39),O=a(10),v=a(3),x=a(405),P=a(219),w=a(7),y=a(368),C=a(344),E=a(382),S=a(362),N=a(130),R=a(371),k=a(372),I=a(369),B=a(373),z=a(387),A=a(300),T=a(477),M=a(167),L=a(434),D=["className","users","events"];var H=Object(P.a)((function(e){return{root:{},queryField:{width:300},avatar:{height:42,width:42,marginRight:e.spacing(1)},hoverIcon:{color:e.palette.text.secondary,"&:hover":{color:e.palette.primary.main}}}})),V=Object(w.a)((function(e){return{head:{backgroundColor:e.palette.background.level2,color:e.palette.text.secondary},body:{fontSize:14}}}))(y.a);function F(e){var t=e.className,a=e.users,r=(e.events,Object(O.a)(e,D)),c=H(),l=Object(n.useState)(0),u=Object(f.a)(l,2),b=u[0],j=u[1],h=Object(n.useState)(10),m=Object(f.a)(h,2),P=m[0],w=m[1],F=Object(n.useState)(""),W=Object(f.a)(F,2),_=W[0],q=W[1],J=function(e,t){return e.filter((function(e){var a=!0;if(t){var n=!1;["role","first_name","last_name"].forEach((function(a){null!=e[a]&&e[a].toLowerCase().includes(t.toLowerCase())&&(n=!0)})),n||(a=!1)}return a}))}(a,_),G=function(e,t,a){return e.slice(t*a,t*a+a)}(J,b,P);return Object(p.jsxs)(C.a,Object(g.a)(Object(g.a)({className:Object(v.a)(c.root,t)},r),{},{children:[Object(p.jsxs)(o.a,{p:2,minHeight:56,display:"flex",alignItems:"center",children:[Object(p.jsx)(E.a,{className:c.queryField,InputProps:{startAdornment:Object(p.jsx)(S.a,{position:"start",children:Object(p.jsx)(N.a,{fontSize:"small",color:"action",children:Object(p.jsx)(L.a,{})})})},onChange:function(e){e.persist(),q(e.target.value)},placeholder:"Search by Name or Email",value:_,size:"small",variant:"outlined"}),Object(p.jsx)(o.a,{flexGrow:1})]}),Object(p.jsx)(x.a,{children:Object(p.jsx)(o.a,{minWidth:650,children:Object(p.jsxs)(R.a,{children:[Object(p.jsx)(k.a,{children:Object(p.jsxs)(I.a,{children:[Object(p.jsx)(V,{children:"Name"}),Object(p.jsx)(V,{children:"Role"}),Object(p.jsx)(V,{children:"Phone"}),Object(p.jsx)(V,{align:"right",children:"Actions"})]})}),Object(p.jsx)(B.a,{children:G.map((function(e){var t=J.includes(e.id);return Object(p.jsxs)(I.a,{hover:!0,selected:t,children:[Object(p.jsx)(y.a,{children:Object(p.jsxs)(o.a,{display:"flex",alignItems:"center",children:[Object(p.jsx)(z.a,{className:c.avatar,src:e.avatar}),Object(p.jsxs)("div",{children:[Object(p.jsx)(d.a,{color:"inherit",component:i.b,to:"/dashboard/users/".concat(e.id),variant:"subtitle2",children:e.first_name+" "+e.last_name}),Object(p.jsx)(s.a,{color:"textSecondary",variant:"body2",children:e.email})]})]})}),Object(p.jsx)(y.a,{children:e.role}),Object(p.jsx)(y.a,{children:e.phone}),Object(p.jsx)(y.a,{align:"right",children:Object(p.jsx)(A.a,{classes:{root:c.hoverIcon},component:i.b,to:"/dashboard/users/".concat(e.id),children:Object(p.jsx)(M.a,{fontSize:"small"})})})]},e.id)}))})]})})}),Object(p.jsx)(T.a,{component:"div",count:J.length,onPageChange:function(e,t){j(t)},onRowsPerPageChange:function(e){w(e.target.value)},page:b,rowsPerPage:P,rowsPerPageOptions:[5,10,25]})]}))}F.defaultProps={users:[]};var W=F,_=a(22),q=a(162);t.default=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.employees})),a=t.users,i=t.errors;return Object(n.useEffect)((function(){e(Object(q.e)())}),[e]),Object(p.jsx)(c.a,{title:"Employee List",children:Object(p.jsx)(o.a,{sx:{backgroundColor:"background.default",minHeight:"100%",paddingY:8},children:Object(p.jsxs)(r.a,{maxWidth:!1,children:[Object(p.jsx)(m,{}),i&&Object(p.jsx)(o.a,{mt:3,children:Object(p.jsx)("p",{children:i})}),a&&Object(p.jsx)(o.a,{mt:3,children:Object(p.jsx)(W,{users:a,errors:i})})]})})})}}}]);