(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{1049:function(e,t,a){"use strict";a.r(t);var c=a(38),r=a(0),n=a.n(r),s=a(164),i=a(231),l=a(380),o=a(394),j=a(382),d=a(379),b=a(59),u=a(26),h=a(229),O=a(57),m=a(398),x=a(391),p=a(75),v=a(1);var f=function(e){var t=e.customer;return Object(v.jsx)(h.a,{container:!0,justifyContent:"space-between",spacing:3,children:Object(v.jsxs)(h.a,{item:!0,children:[Object(v.jsx)(O.a,{color:"textPrimary",variant:"h5",children:t.first_name+" "+t.last_name}),Object(v.jsxs)(m.a,{"aria-label":"breadcrumb",separator:Object(v.jsx)(p.a,{fontSize:"small"}),style:{marginTop:8},children:[Object(v.jsx)(x.a,{color:"textPrimary",component:u.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(v.jsx)(x.a,{color:"textPrimary",component:u.b,to:"/dashboard/customers",variant:"subtitle2",children:"Customers"}),Object(v.jsx)(O.a,{color:"textSecondary",variant:"subtitle2",children:t.first_name+" "+t.last_name})]})]})})},g=a(5),y=a(10),_=a(3),N=a(357),C=a(390),w=a(405),z=a(310),S=a(386),k=a(388),E=a(384),P=a(383),M=a(361),I=a(654),D=a.n(I),W=a(655),A=a.n(W),V=a(173),H=["customer","className"],L=Object(s.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)},headerAction:{margin:0},editIcon:{color:e.palette.primary.main}}}));var R=function(e){var t=e.customer,a=(e.className,Object(y.a)(e,H),L()),c=function(e){var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?"("+t[1]+") "+t[2]+"-"+t[3]:null};return Object(v.jsxs)(N.a,{children:[Object(v.jsx)(C.a,{title:"Customer info",action:Object(v.jsx)(w.a,{title:"Edit",children:Object(v.jsx)(z.a,{"aria-label":"edit",classes:{root:a.editIcon},children:Object(v.jsx)(V.a,{})})}),classes:{action:a.headerAction}}),Object(v.jsx)(d.a,{}),Object(v.jsx)(S.a,{children:Object(v.jsxs)(k.a,{children:[Object(v.jsxs)(E.a,{children:[Object(v.jsx)(P.a,{children:"First name"}),Object(v.jsx)(P.a,{children:Object(v.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.first_name})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(P.a,{children:"Last name"}),Object(v.jsx)(P.a,{children:Object(v.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.last_name})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(P.a,{children:"Email"}),Object(v.jsx)(P.a,{children:Object(v.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.email})})]}),Object(v.jsxs)(E.a,{children:[Object(v.jsx)(P.a,{children:"Phone"}),Object(v.jsx)(P.a,{children:Object(v.jsx)(O.a,{variant:"body2",color:"textSecondary",children:c(t.phone)})})]}),t.add_phone?Object(v.jsxs)(E.a,{children:[Object(v.jsx)(P.a,{className:a.fontWeightMedium,children:"Secondary Phone"}),Object(v.jsx)(P.a,{children:Object(v.jsx)(O.a,{variant:"body2",color:"textSecondary",children:c(t.add_phone)})})]}):null]})}),Object(v.jsxs)(i.a,{p:1,display:"flex",flexDirection:"column",alignItems:"flex-start",children:[Object(v.jsxs)(M.a,{children:[Object(v.jsx)(D.a,{className:a.actionIcon}),"Reset & Send Password"]}),Object(v.jsxs)(M.a,{children:[Object(v.jsx)(A.a,{className:a.actionIcon}),"Login as Customer"]})]})]})},Y=a(359),F=a(656),T=a.n(F),q=a(657),B=a.n(q),U=a(658),J=a.n(U),$=["className"],G=Object(s.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var X=function(e){var t=e.className,a=Object(y.a)(e,$),c=G();return Object(v.jsxs)(N.a,Object(g.a)(Object(g.a)({className:Object(_.a)(c.root,t)},a),{},{children:[Object(v.jsx)(C.a,{title:"Other actions"}),Object(v.jsx)(d.a,{}),Object(v.jsxs)(Y.a,{children:[Object(v.jsxs)(i.a,{display:"flex",flexDirection:"column",alignItems:"flex-start",children:[Object(v.jsxs)(M.a,{children:[Object(v.jsx)(T.a,{className:c.actionIcon}),"Close Account"]}),Object(v.jsxs)(M.a,{children:[Object(v.jsx)(B.a,{className:c.actionIcon}),"Export Data"]})]}),Object(v.jsx)(i.a,{mt:1,mb:2,children:Object(v.jsx)(O.a,{variant:"body2",color:"textSecondary",children:"Remove this customer\u2019s data if he requested that, if not please be aware that what has been deleted can never brough back"})}),Object(v.jsxs)(M.a,{variant:"contained",color:"secondary",disableElevation:!0,children:[Object(v.jsx)(J.a,{className:c.actionIcon}),"Delete Account"]})]})]}))},K=a(9),Q=a(397),Z=a(117),ee=a(182),te=a.n(ee),ae=a(149),ce=a(92),re=a(116),ne=a(107),se=Object(s.a)((function(e){return{label:{fontWeight:500,marginBottom:e.spacing(1),display:"inline-block",color:e.palette.text.secondary},icon:{marginRight:e.spacing(1),top:6,width:20,position:"relative"},inputWidth:{width:"calc(100% - 24px)",marginLeft:24}}})),ie={email:{presence:{allowEmpty:!1,message:"is required"},email:{message:"is not valid"}},phone:{presence:{allowEmpty:!1,message:"is required"},format:{pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,message:"is not valid"}},first_name:{presence:{allowEmpty:!1,message:"is required"}},last_name:{presence:{allowEmpty:!1,message:"is required"}}},le=function(e){var t=e.customer,a=e.handleUpdate,n=e.isUpdating,s={first_name:t.first_name,last_name:t.last_name,email:t.email,phone:t.phone,add_phone:t.add_phone},l=se(),o=Object(Z.b)().enqueueSnackbar,j=Object(r.useState)({isValid:!1,values:s,touched:{},errors:{}}),b=Object(c.a)(j,2),u=b[0],O=b[1];Object(r.useEffect)((function(){var e=te()(u.values,ie);O((function(t){return Object(g.a)(Object(g.a)({},t),{},{isValid:!e,errors:e||{}})}))}),[u.values,t]);var m=function(e){e.persist(),"phone"===e.target.name?O((function(t){return Object(g.a)(Object(g.a)({},t),{},{values:Object(g.a)(Object(g.a)({},t.values),{},{phone:"1"===e.target.value?"":Object(ne.b)(Object(ne.a)(e.target.value))}),touched:Object(g.a)(Object(g.a)({},t.touched),{},{phone:!0})})})):"add_phone"===e.target.name?O((function(t){return Object(g.a)(Object(g.a)({},t),{},{values:Object(g.a)(Object(g.a)({},t.values),{},{add_phone:"1"===e.target.value?"":Object(ne.b)(Object(ne.a)(e.target.value))}),touched:Object(g.a)(Object(g.a)({},t.touched),{},{add_phone:!0})})})):O((function(t){return Object(g.a)(Object(g.a)({},t),{},{values:Object(g.a)(Object(g.a)({},t.values),{},Object(K.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(g.a)(Object(g.a)({},t.touched),{},Object(K.a)({},e.target.name,!0))})}))},x=function(e){return!(!u.touched[e]||!u.errors[e])};return Object(v.jsx)("form",{name:"password-reset-form",method:"post",onSubmit:function(e){e.preventDefault(),u.isValid&&(a(t.id,u.values),o("Customer updated",{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"})),O((function(e){return Object(g.a)(Object(g.a)({},e),{},{touched:Object(g.a)(Object(g.a)({},e.touched),e.errors)})}))},children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)(C.a,{title:"Profile"}),Object(v.jsx)(d.a,{}),Object(v.jsx)(Y.a,{children:Object(v.jsxs)(h.a,{container:!0,spacing:3,children:[Object(v.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(v.jsxs)("label",{htmlFor:"first_name",className:l.label,children:[Object(v.jsx)(ae.a,{className:l.icon}),"First name"]}),Object(v.jsx)(Q.a,{error:x("first_name"),className:l.inputWidth,name:"first_name",id:"first_name",size:"small",value:u.values.first_name||"",onChange:m,variant:"outlined",helperText:x("first_name")?u.errors.first_name:null})]}),Object(v.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(v.jsxs)("label",{htmlFor:"last_name",className:l.label,children:[Object(v.jsx)(ae.a,{className:l.icon}),"Last name"]}),Object(v.jsx)(Q.a,{error:x("last_name"),className:l.inputWidth,name:"last_name",id:"last_name",size:"small",onChange:m,value:u.values.last_name,variant:"outlined",helperText:x("last_name")?u.errors.last_name:null})]}),Object(v.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(v.jsxs)("label",{htmlFor:"email",className:l.label,children:[Object(v.jsx)(ce.a,{className:l.icon}),"Email address"]}),Object(v.jsx)(Q.a,{error:x("email"),className:l.inputWidth,name:"email",id:"email",size:"small",onChange:m,value:u.values.email||"",variant:"outlined",helperText:x("email")?u.errors.email[0]:null})]}),Object(v.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(v.jsxs)("label",{htmlFor:"phone",className:l.label,children:[Object(v.jsx)(re.a,{className:l.icon}),"Phone"]}),Object(v.jsx)(Q.a,{error:x("phone"),className:l.inputWidth,name:"phone",id:"phone",size:"small",onChange:m,value:u.values.phone||"",variant:"outlined",helperText:x("phone")?u.errors.phone[0]:null})]}),Object(v.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(v.jsxs)("label",{htmlFor:"phone",className:l.label,children:[Object(v.jsx)(re.a,{className:l.icon}),"Secondary Phone"]}),Object(v.jsx)(Q.a,{className:l.inputWidth,name:"add_phone",id:"add_phone",size:"small",onChange:m,value:u.values.add_phone||"",variant:"outlined"})]})]})}),Object(v.jsx)(i.a,{p:2,display:"flex",justifyContent:"flex-end",children:Object(v.jsx)(M.a,{color:"primary",disabled:function(e,t){var a=Object.keys(e),c=Object.keys(t);if(a.length!==c.length)return!1;for(var r=0,n=a;r<n.length;r++){var s=n[r];if(e[s]!==t[s])return!1}return!0}(u.values,s)||n,type:"submit",variant:"contained",disableElevation:!0,children:n?"Loading...":"Save Changes"})})]})})},oe=a(171),je=a(22),de=["customer","className"],be=Object(s.a)((function(){return{root:{}}}));var ue=function(e){var t=e.customer,a=e.className,c=Object(y.a)(e,de),r=be(),n=Object(je.b)(),s=Object(je.c)((function(e){return e.customers})).isUpdating;return Object(v.jsxs)(h.a,Object(g.a)(Object(g.a)({className:Object(_.a)(r.root,a),container:!0,spacing:3},c),{},{children:[Object(v.jsx)(h.a,{item:!0,md:4,xl:3,xs:12,children:Object(v.jsxs)(h.a,{container:!0,spacing:3,children:[Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(R,{customer:t})}),Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(X,{})})]})}),Object(v.jsx)(h.a,{item:!0,md:8,xl:9,xs:12,children:Object(v.jsx)(le,{customer:t,handleUpdate:function(e,t){n(Object(oe.e)(e,t))},isUpdating:s})})]}))},he=a(421),Oe=a(7),me=a(387),xe=a(135),pe=a(6),ve=a.n(pe);function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},fe.apply(this,arguments)}function ge(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ye=Object(r.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,r=e.size,s=void 0===r?24:r,i=ge(e,["color","size"]);return n.a.createElement("svg",fe({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),n.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));ye.propTypes={color:ve.a.string,size:ve.a.oneOfType([ve.a.string,ve.a.number])},ye.displayName="ArrowRight";var _e=ye,Ne=a(48),Ce=a.n(Ne),we=a(427),ze=Object(s.a)((function(e){return{hoverIcon:{color:e.palette.text.secondary,"&:hover":{color:e.palette.primary.main}}}})),Se=Object(Oe.a)((function(e){return{head:{backgroundColor:e.palette.background.level2,color:e.palette.text.secondary},body:{fontSize:14}}}))(P.a);var ke=function(e){e.className;var t=e.jobs,a=ze();return Object(v.jsx)("div",{children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)(C.a,{title:"Customer jobs"}),Object(v.jsx)(d.a,{}),Object(v.jsx)(he.a,{children:Object(v.jsx)(i.a,{minWidth:1300,children:Object(v.jsxs)(S.a,{children:[Object(v.jsx)(me.a,{children:Object(v.jsxs)(E.a,{children:[Object(v.jsx)(Se,{children:"#"}),Object(v.jsx)(Se,{children:"Status"}),Object(v.jsx)(Se,{children:"Service"}),Object(v.jsx)(Se,{children:"Date"}),Object(v.jsx)(Se,{children:"Size"}),Object(v.jsx)(Se,{children:"Crew"}),Object(v.jsx)(Se,{children:"Created at"}),Object(v.jsx)(Se,{align:"right",children:"Actions"})]})}),Object(v.jsx)(k.a,{children:t.map((function(e){return Object(v.jsxs)(E.a,{hover:!0,children:[Object(v.jsx)(P.a,{children:Object(v.jsx)(M.a,{component:u.b,to:"/dashboard/jobs/".concat(e.id),disableElevation:!0,children:e.id})}),Object(v.jsx)(P.a,{children:Object(v.jsx)(we.a,{status:e.job_status})}),Object(v.jsx)(P.a,{children:e.job_type}),Object(v.jsx)(P.a,{children:Ce()(e.pick_up_date).format("MMM DD, YYYY")}),Object(v.jsx)(P.a,{children:e.job_size}),Object(v.jsx)(P.a,{children:e.crew_size}),Object(v.jsx)(P.a,{variant:"footer",children:Ce()(e.created_at).format("MM/DD/YYYY")}),Object(v.jsx)(P.a,{align:"right",children:Object(v.jsx)(z.a,{component:u.b,to:"/dashboard/jobs/".concat(e.id),classes:{root:a.hoverIcon},children:Object(v.jsx)(xe.a,{fontSize:"small",children:Object(v.jsx)(_e,{})})})})]},e.id)}))})]})})})]})})},Ee=Object(s.a)((function(e){return{root:{}}}));t.default=function(e){var t=e.match,a=Ee(),n=Object(je.c)((function(e){return e.customers})),s=n.customer,u=n.customerJobs,h=Object(je.b)(),O=Object(r.useState)("details"),m=Object(c.a)(O,2),x=m[0],p=m[1],g=t.params.id,y=[{value:"details",label:"Details"},{value:"jobs",label:"Jobs (".concat(null===u||void 0===u?void 0:u.length,")")}];return Object(r.useEffect)((function(){return h(Object(oe.b)(g)),function(){h(Object(oe.a)())}}),[h,g]),s?Object(v.jsx)(b.a,{className:a.root,title:"Customer Details",children:Object(v.jsx)(i.a,{sx:{backgroundColor:"background.default",minHeight:"100%",paddingY:8},children:Object(v.jsxs)(l.a,{maxWidth:!1,children:[Object(v.jsx)(f,{customer:s}),Object(v.jsx)(i.a,{mt:3,children:Object(v.jsx)(o.a,{onChange:function(e,t){p(t)},scrollButtons:"auto",value:x,variant:"scrollable",textColor:"primary",indicatorColor:"primary",children:y.map((function(e){return Object(v.jsx)(j.a,{label:e.label,value:e.value},e.value)}))})}),Object(v.jsx)(d.a,{}),Object(v.jsxs)(i.a,{mt:3,children:["details"===x&&Object(v.jsx)(ue,{customer:s}),"jobs"===x&&Object(v.jsx)(ke,{jobs:u})]})]})})}):null}},421:function(e,t,a){"use strict";var c=a(5),r=a(10),n=a(0),s=a(439),i=a.n(s),l=a(231),o=a(1),j=["children"],d=Object(n.forwardRef)((function(e,t){var a=e.children,n=Object(r.a)(e,j);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(o.jsx)(l.a,{ref:t,sx:{overflowX:"auto"},children:a}):Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({ref:t},n),{},{children:a}))}));t.a=d},427:function(e,t,a){"use strict";a(0);var c=a(5),r=a(9),n=a(10),s=a(3),i=a(20),l=a(164),o=a(1),j=["className","color","children"],d=Object(l.a)((function(e){return{root:{fontWeight:600,letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),borderRadius:4},primary:{color:e.palette.primary.main,backgroundColor:Object(i.a)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(i.a)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(i.a)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(i.a)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(i.a)(e.palette.warning.main,.08)}}}));function b(e){var t=e.className,a=e.color,i=e.children,l=Object(n.a)(e,j),b=d();return Object(o.jsx)("span",Object(c.a)(Object(c.a)({className:Object(s.a)(b.root,Object(r.a)({},b[a],a),t)},l),{},{children:i}))}b.defaultProps={className:"",color:"secondary"};var u=b;t.a=function(e){var t={Completed:{text:"Completed",color:"success"},Canceled:{text:"Canceled",color:"error"},"Needs Attention":{text:"Needs Attention",color:"warning"},Confirmed:{text:"Confirmed",color:"primary"}}[e.status],a=t.text,c=t.color;return Object(o.jsx)(u,{color:c,children:a})}},654:function(e,t,a){"use strict";var c=a(89),r=a(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(104)).default)(n.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOpenOutlined");t.default=s},655:function(e,t,a){"use strict";var c=a(89),r=a(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(104)).default)(n.createElement("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PersonOutline");t.default=s},656:function(e,t,a){"use strict";var c=a(89),r=a(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(104)).default)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}),"NotInterested");t.default=s},657:function(e,t,a){"use strict";var c=a(89),r=a(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(104)).default)(n.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.default=s},658:function(e,t,a){"use strict";var c=a(89),r=a(103);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(104)).default)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=s}}]);