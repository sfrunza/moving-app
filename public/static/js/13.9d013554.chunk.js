(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{409:function(e,t,a){"use strict";var n=a(5),c=a(10),o=a(0),r=a(425),s=a.n(r),i=a(305),l=a(1),d=["children"],j=Object(o.forwardRef)((function(e,t){var a=e.children,o=Object(c.a)(e,d);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(l.jsx)(i.a,{ref:t,sx:{overflowX:"auto"},children:a}):Object(l.jsx)(s.a,Object(n.a)(Object(n.a)({ref:t},o),{},{children:a}))}));t.a=j},415:function(e,t,a){"use strict";a(0);var n=a(5),c=a(15),o=a(10),r=a(3),s=a(20),i=a(221),l=a(1),d=["className","color","children"],j=Object(i.a)((function(e){return{root:{fontWeight:600,letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),borderRadius:4},primary:{color:e.palette.primary.main,backgroundColor:Object(s.a)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.a)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.a)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.a)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.a)(e.palette.warning.main,.08)}}}));function b(e){var t=e.className,a=e.color,s=e.children,i=Object(o.a)(e,d),b=j();return Object(l.jsx)("span",Object(n.a)(Object(n.a)({className:Object(r.a)(b.root,Object(c.a)({},b[a],a),t)},i),{},{children:s}))}b.defaultProps={className:"",color:"secondary"};var u=b;t.a=function(e){var t={Completed:{text:"Completed",color:"success"},Canceled:{text:"Canceled",color:"error"},"Needs Attention":{text:"Needs Attention",color:"warning"},Confirmed:{text:"Confirmed",color:"primary"}}[e.status],a=t.text,n=t.color;return Object(l.jsx)(u,{color:n,children:a})}},435:function(e,t,a){"use strict";var n=a(14),c=a.n(n),o=a(1),r=c()(Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=r},436:function(e,t,a){"use strict";var n=a(14),c=a.n(n),o=a(1),r=c()(Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search");t.a=r},479:function(e,t,a){"use strict";var n=a(2),c=a(4),o=a(0),r=(a(6),a(3)),s=a(7),i=a(226),l=a(365),d=a(383),j=a(370),b=a(359),u=a(62),m=a(165),h=a(166),p=a(42),O=a(302),g=o.createElement(h.a,null),x=o.createElement(m.a,null),f=o.createElement(m.a,null),v=o.createElement(h.a,null),P=o.forwardRef((function(e,t){var a=e.backIconButtonProps,r=e.count,s=e.nextIconButtonProps,i=e.onChangePage,l=void 0===i?function(){}:i,d=e.onPageChange,j=void 0===d?function(){}:d,b=e.page,u=e.rowsPerPage,m=Object(c.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","onPageChange","page","rowsPerPage"]),h=Object(p.a)();return o.createElement("div",Object(n.a)({ref:t},m),o.createElement(O.a,Object(n.a)({onClick:function(e){l(e,b-1),j(e,b-1)},disabled:0===b,color:"inherit"},a),"rtl"===h.direction?g:x),o.createElement(O.a,Object(n.a)({onClick:function(e){l(e,b+1),j(e,b+1)},disabled:-1!==r&&b>=Math.ceil(r/u)-1,color:"inherit"},s),"rtl"===h.direction?f:v))})),C=a(114),w=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))},y=[10,25,50,100],S=o.forwardRef((function(e,t){var a,s=e.ActionsComponent,m=void 0===s?P:s,h=e.backIconButtonProps,p=e.backIconButtonText,O=void 0===p?"Previous page":p,g=e.classes,x=e.className,f=e.colSpan,v=e.component,S=void 0===v?j.a:v,k=e.count,I=e.labelDisplayedRows,N=void 0===I?w:I,R=e.labelRowsPerPage,E=void 0===R?"Rows per page:":R,B=e.nextIconButtonProps,A=e.nextIconButtonText,_=void 0===A?"Next page":A,z=e.onChangePage,M=e.onPageChange,D=e.onChangeRowsPerPage,Y=e.onRowsPerPageChange,L=e.page,T=e.rowsPerPage,J=e.rowsPerPageOptions,H=void 0===J?y:J,W=e.SelectProps,F=void 0===W?{}:W,q=Object(c.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onPageChange","onChangeRowsPerPage","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps"]),V=D||Y;S!==j.a&&"td"!==S||(a=f||1e3);var X=Object(C.a)(),G=Object(C.a)(),K=F.native?"option":l.a;return o.createElement(S,Object(n.a)({className:Object(r.a)(g.root,x),colSpan:a,ref:t},q),o.createElement(b.a,{className:g.toolbar},o.createElement("div",{className:g.spacer}),H.length>1&&o.createElement(u.a,{color:"inherit",variant:"body2",className:g.caption,id:G},E),H.length>1&&o.createElement(d.a,Object(n.a)({classes:{select:g.select,icon:g.selectIcon},input:o.createElement(i.a,{className:Object(r.a)(g.input,g.selectRoot)}),value:T,onChange:V,id:X,labelId:G},F),H.map((function(e){return o.createElement(K,{className:g.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),o.createElement(u.a,{color:"inherit",variant:"body2",className:g.caption},N({from:0===k?0:L*T+1,to:-1!==k?Math.min(k,(L+1)*T):(L+1)*T,count:-1===k?-1:k,page:L})),o.createElement(m,{className:g.actions,backIconButtonProps:Object(n.a)({title:O,"aria-label":O},h),count:k,nextIconButtonProps:Object(n.a)({title:_,"aria-label":_},B),onChangePage:z,onPageChange:M,page:L,rowsPerPage:T})))}));t.a=Object(s.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(S)},978:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(305),o=a(367),r=a(57),s=a(26),i=a(345),l=a(62),d=a(386),j=a(379),b=a(349),u=a(435),m=a(75),h=a(1);var p=function(){return Object(h.jsxs)(i.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(h.jsxs)(i.a,{item:!0,children:[Object(h.jsx)(l.a,{color:"textPrimary",variant:"h5",children:"Job list"}),Object(h.jsxs)(d.a,{"aria-label":"breadcrumb",separator:Object(h.jsx)(m.a,{fontSize:"small"}),style:{marginTop:8},children:[Object(h.jsx)(j.a,{color:"textPrimary",component:s.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(h.jsx)(l.a,{color:"textSecondary",variant:"subtitle2",children:"Jobs"})]})]}),Object(h.jsx)(i.a,{item:!0,children:Object(h.jsx)(c.a,{m:-1,children:Object(h.jsx)(b.a,{color:"primary",disabled:!0,disableElevation:!0,startIcon:Object(h.jsx)(u.a,{fontSize:"small"}),style:{margin:8},variant:"contained",children:"New Appointment"})})})]})},O=a(5),g=a(39),x=a(10),f=a(3),v=a(58),P=a.n(v),C=a(7),w=a(370),y=a(221),S=a(346),k=a(385),I=a(364),N=a(132),R=a(373),E=a(374),B=a(371),A=a(375),_=a(302),z=a(479),M=a(409),D=a(436),Y=a(117),L=a(169),T=a(415),J=["className","jobs","users"],H=[{id:"all",name:"All"},{id:"completed",name:"Completed"},{id:"canceled",name:"Canceled"},{id:"needsAttention",name:"Needs Attention"},{id:"confirmed",name:"Confirmed"}],W=Object(C.a)((function(e){return{head:{backgroundColor:e.palette.background.level2,color:e.palette.text.secondary},body:{fontSize:14}}}))(w.a);var F=Object(y.a)((function(e){return{root:{},queryField:{marginRight:e.spacing(2)},statusField:{marginLeft:e.spacing(2),flexBasis:200},pastDate:{opacity:.5},hoverIcon:{color:e.palette.text.secondary,"&:hover":{color:e.palette.primary.main}}}}));function q(e){var t=e.className,a=e.jobs,o=(e.users,Object(x.a)(e,J)),r=F(),i=P()().toJSON().slice(0,10),l=Object(n.useState)(0),d=Object(g.a)(l,2),j=d[0],u=d[1],m=Object(n.useState)(10),p=Object(g.a)(m,2),v=p[0],C=p[1],y=Object(n.useState)(""),q=Object(g.a)(y,2),V=q[0],X=q[1],G=Object(n.useState)({status:null}),K=Object(g.a)(G,2),Q=K[0],U=K[1],Z=function(e,t,a){return e.filter((function(e){var n=!0;return!t||e.customer.first_name.toLowerCase().includes(t.toLowerCase())||e.customer.last_name.toLowerCase().includes(t.toLowerCase())||e.id.toString().includes(t.toLowerCase())||(n=!1),a.status&&("confirmed"!==a.status||["Confirmed"].includes(e.job_status)||(n=!1),"completed"!==a.status||["Completed"].includes(e.job_status)||(n=!1),"needsAttention"!==a.status||["Needs Attention"].includes(e.job_status)||(n=!1),"canceled"!==a.status||["Canceled"].includes(e.job_status)||(n=!1)),a.inStock&&!["Needs Attention"].includes(e.job_status)&&(n=!1),a.isShippable&&!e.isShippable&&(n=!1),n}))}(a,V,Q),$=function(e,t,a){return e.slice(t*a,t*a+a)}(Z,j,v);return Object(h.jsxs)(S.a,Object(O.a)(Object(O.a)({className:Object(f.a)(r.root,t)},o),{},{children:[Object(h.jsx)(c.a,{p:2,minHeight:36,display:"flex",alignItems:"center",children:Object(h.jsxs)(c.a,{alignItems:"center",display:"flex",children:[Object(h.jsx)(k.a,{className:r.queryField,InputProps:{startAdornment:Object(h.jsx)(I.a,{position:"start",children:Object(h.jsx)(N.a,{fontSize:"small",color:"action",children:Object(h.jsx)(D.a,{})})})},size:"small",onChange:function(e){e.persist(),X(e.target.value)},placeholder:"Search by ID or Name",value:V,variant:"outlined"}),Object(h.jsx)(k.a,{name:"status",onChange:function(e){e.persist();var t=null;"all"!==e.target.value&&(t=e.target.value),U((function(e){return Object(O.a)(Object(O.a)({},e),{},{status:t})}))},select:!0,SelectProps:{native:!0},value:Q.status||"all",variant:"outlined",size:"small",children:H.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})}),Object(h.jsx)(M.a,{children:Object(h.jsx)(c.a,{minWidth:1300,children:Object(h.jsxs)(R.a,{"aria-label":"simple table",stickyHeader:!0,children:[Object(h.jsx)(E.a,{children:Object(h.jsxs)(B.a,{children:[Object(h.jsx)(W,{children:"#"}),Object(h.jsx)(W,{children:"Status"}),Object(h.jsx)(W,{children:"Service"}),Object(h.jsx)(W,{children:"Date"}),Object(h.jsx)(W,{children:"Customer"}),Object(h.jsx)(W,{children:"Size"}),Object(h.jsx)(W,{children:"Crew"}),Object(h.jsx)(W,{children:"Created at"}),Object(h.jsx)(W,{align:"right",children:"Actions"})]})}),Object(h.jsx)(A.a,{children:$.map((function(e,t){return Object(h.jsxs)(B.a,{hover:!0,children:[Object(h.jsx)(w.a,{children:Object(h.jsx)(b.a,{component:s.b,to:"/dashboard/jobs/".concat(e.id),disableElevation:!0,children:e.id})}),Object(h.jsx)(w.a,{children:Object(h.jsx)(T.a,{status:e.job_status})}),Object(h.jsx)(w.a,{children:e.job_type}),Object(h.jsx)(w.a,{className:(a=P()(e.pick_up_date).format("MMM DD, YYYY"),i>a?r.pastDate:r.date),children:P()(e.pick_up_date).format("MMM DD, YYYY")}),Object(h.jsx)(w.a,{children:e.customer.first_name+" "+e.customer.last_name}),Object(h.jsx)(w.a,{children:e.job_size}),Object(h.jsx)(w.a,{children:e.crew_size}),Object(h.jsx)(w.a,{variant:"footer",children:P()(e.created_at).format("MM/DD/YYYY")}),Object(h.jsxs)(w.a,{align:"right",children:[Object(h.jsx)(_.a,{classes:{root:r.hoverIcon},children:Object(h.jsx)(N.a,{fontSize:"small",children:Object(h.jsx)(L.a,{})})}),Object(h.jsx)(_.a,{component:s.b,to:"/dashboard/jobs/".concat(e.id),classes:{root:r.hoverIcon},children:Object(h.jsx)(N.a,{fontSize:"small",children:Object(h.jsx)(Y.a,{})})})]})]},t);var a}))})]})})}),Object(h.jsx)(z.a,{component:"div",count:Z.length,onPageChange:function(e,t){u(t)},onRowsPerPageChange:function(e){C(e.target.value)},page:j,rowsPerPage:v,rowsPerPageOptions:[5,10,25]})]}))}q.defaultProps={jobs:[]};var V=q,X=a(22),G=a(163);t.default=function(){var e=Object(X.b)(),t=Object(X.c)((function(e){return e.calendar})).events;return Object(n.useEffect)((function(){e(Object(G.f)())}),[e]),Object(h.jsx)(r.a,{title:"Job List",children:Object(h.jsx)(c.a,{sx:{backgroundColor:"background.default",minHeight:"100%",paddingY:8},children:Object(h.jsxs)(o.a,{maxWidth:!1,children:[Object(h.jsx)(p,{}),t&&Object(h.jsx)(c.a,{mt:3,children:Object(h.jsx)(V,{jobs:t})})]})})})}}}]);