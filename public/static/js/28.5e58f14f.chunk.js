(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[28],{1133:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),c=(a(2),a(3)),l=a(374),i=a(153),s=Object(i.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=a(14),d=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(9),f=a(7),b=o.createElement(u,null),v=o.createElement(s,null),g=o.createElement(d,null),h=o.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?b:a,s=e.classes,u=e.color,m=void 0===u?"secondary":u,d=e.icon,f=void 0===d?v:d,h=e.indeterminate,y=void 0!==h&&h,E=e.indeterminateIcon,O=void 0===E?g:E,j=e.inputProps,k=e.size,w=void 0===k?"medium":k,x=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(l.a,Object(n.a)({type:"checkbox",classes:{root:Object(c.a)(s.root,s["color".concat(Object(p.a)(m))],y&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":y},j),icon:o.cloneElement(y?O:f,{fontSize:"small"===w?"small":"default"}),checkedIcon:o.cloneElement(y?O:i,{fontSize:"small"===w?"small":"default"}),ref:t},x))}));t.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(h)},1235:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1241:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1244:function(e,t,a){"use strict";var n=a(25),r=a(27),o=a(0),c=a.n(o),l=a(3),i=a(77),s=a(14),u=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));function m(e){var t=e.className,a=e.color,o=e.children,i=(e.style,Object(r.a)(e,["className","color","children","style"])),s=u();return c.a.createElement("span",Object.assign({className:Object(l.a)(s.root,Object(n.a)({},s[a],a),t)},i),o)}m.defaultProps={className:"",color:"secondary"},t.a=m},1318:function(e,t,a){"use strict";var n=a(0),r=a(153);t.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1319:function(e,t,a){"use strict";var n=a(0),r=a(153);t.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1343:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="ArrowRight",t.a=s},1364:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="PlusCircle",t.a=s},1577:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.a.createElement("polyline",{points:"17 8 12 3 7 8"}),r.a.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Upload",t.a=s},1578:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.a.createElement("polyline",{points:"7 10 12 15 17 10"}),r.a.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Download",t.a=s},2338:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a(0),o=a.n(r),c=a(77),l=a(1117),i=a(1121),s=a(19),u=a(373),m=a(1235),d=a(27),p=a(8),f=a(3),b=a(1115),v=a(1130),g=a(1104),h=a(65),y=a(184),E=a(107),O=a(1577),j=a(1578),k=a(1364),w=a(1237),x=a.n(w),C=Object(c.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var P=function(e){var t=e.className,a=Object(d.a)(e,["className"]),n=C();return o.a.createElement(b.a,Object.assign({className:Object(f.a)(n.root,t),container:!0,justify:"space-between",spacing:3},a),o.a.createElement(b.a,{item:!0},o.a.createElement(v.a,{separator:o.a.createElement(x.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:p.a},"Dashboard"),o.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app/management",component:p.a},"Management"),o.a.createElement(h.a,{variant:"body1",color:"textPrimary"},"Invoices")),o.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"All Invoices"),o.a.createElement(i.a,{mt:2},o.a.createElement(y.a,{className:n.action},o.a.createElement(E.a,{fontSize:"small",className:n.actionIcon},o.a.createElement(O.a,null)),"Import"),o.a.createElement(y.a,{className:n.action},o.a.createElement(E.a,{fontSize:"small",className:n.actionIcon},o.a.createElement(j.a,null)),"Export"))),o.a.createElement(b.a,{item:!0},o.a.createElement(y.a,{color:"secondary",variant:"contained",className:n.action},o.a.createElement(E.a,{fontSize:"small",className:n.actionIcon},o.a.createElement(k.a,null)),"New Invoice")))},S=a(58),z=a(49),N=a(5),I=a.n(N),L=a(221),A=a.n(L),R=a(11),B=a(1128),M=a(369),T=a(633),W=a(1133),H=a(1136),D=a(1140),F=a(1138),V=a(1139),Y=a(1137),$=a(1123),q=a(284),G=a(1157),J=a(1214),K=a(1210),U=a(1343),Q=a(1244),X=a(1241),Z=[{id:"all",name:"All"},{id:"paid",name:"Paid"},{id:"pending",name:"Pending"},{id:"canceled",name:"Canceled"}],_=[{value:"createdAt|desc",label:"Newest first"},{value:"createdAt|asc",label:"Oldest first"}];var ee=Object(c.a)((function(e){return{root:{},queryField:{width:500},statusField:{flexBasis:200},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{backgroundColor:R.a.red[500],color:R.a.common.white}}}));function te(e){var t=e.className,a=e.invoices,c=Object(d.a)(e,["className","invoices"]),l=ee(),s=Object(r.useState)([]),u=Object(n.a)(s,2),m=u[0],b=u[1],v=Object(r.useState)(0),O=Object(n.a)(v,2),j=O[0],k=O[1],w=Object(r.useState)(10),x=Object(n.a)(w,2),C=x[0],P=x[1],N=Object(r.useState)(""),L=Object(n.a)(N,2),R=L[0],te=L[1],ae=Object(r.useState)(_[0].value),ne=Object(n.a)(ae,2),re=ne[0],oe=ne[1],ce=Object(r.useState)({status:null}),le=Object(n.a)(ce,2),ie=le[0],se=le[1],ue=function(e){b(e.target.checked?a.map((function(e){return e.id})):[])},me=function(e,t,a){return e.filter((function(e){var n=!0;if(t){var r=!1;["name","email"].forEach((function(a){e.customer[a].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(n=!1)}return a.status&&e.status!==a.status&&(n=!1),n}))}(a,R,ie),de=function(e,t,a){return e.slice(t*a,t*a+a)}(me,j,C),pe=m.length>0,fe=m.length>0&&m.length<a.length,be=m.length===a.length;return o.a.createElement(B.a,Object.assign({className:Object(f.a)(l.root,t)},c),o.a.createElement(i.a,{p:2},o.a.createElement(i.a,{display:"flex",alignItems:"center"},o.a.createElement(M.a,{className:l.queryField,InputProps:{startAdornment:o.a.createElement(T.a,{position:"start"},o.a.createElement(E.a,{fontSize:"small",color:"action"},o.a.createElement(J.a,null)))},onChange:function(e){e.persist(),te(e.target.value)},placeholder:"Search invoices by customer",value:R,variant:"outlined"}),o.a.createElement(i.a,{flexGrow:1}),o.a.createElement(M.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),oe(e.target.value)},select:!0,SelectProps:{native:!0},value:re,variant:"outlined"},_.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.label)})))),o.a.createElement(i.a,{mt:2,display:"flex",alignItems:"center"},o.a.createElement(M.a,{className:l.statusField,label:"Status",name:"status",onChange:function(e){e.persist();var t=null;"all"!==e.target.value&&(t=e.target.value),se((function(e){return Object(z.a)(Object(z.a)({},e),{},{status:t})}))},select:!0,SelectProps:{native:!0},value:ie.status||"all",variant:"outlined"},Z.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),pe&&o.a.createElement("div",{className:l.bulkOperations},o.a.createElement("div",{className:l.bulkActions},o.a.createElement(W.a,{checked:be,indeterminate:fe,onChange:ue}),o.a.createElement(y.a,{variant:"outlined",className:l.bulkAction},"Delete"),o.a.createElement(y.a,{variant:"outlined",className:l.bulkAction},"Edit"))),o.a.createElement(A.a,null,o.a.createElement(i.a,{minWidth:1200},o.a.createElement(H.a,null,o.a.createElement(D.a,null,o.a.createElement(F.a,null,o.a.createElement(V.a,{padding:"checkbox"},o.a.createElement(W.a,{checked:be,indeterminate:fe,onChange:ue})),o.a.createElement(V.a,null,"Customer"),o.a.createElement(V.a,null,"Status"),o.a.createElement(V.a,null,"Amount"),o.a.createElement(V.a,null,"ID"),o.a.createElement(V.a,null,"Date"),o.a.createElement(V.a,{align:"right"},"Actions"))),o.a.createElement(Y.a,null,de.map((function(e){var t=m.includes(e.id);return o.a.createElement(F.a,{hover:!0,key:e.id,selected:t},o.a.createElement(V.a,{padding:"checkbox"},o.a.createElement(W.a,{checked:t,onChange:function(t){return a=e.id,void(m.includes(a)?b((function(e){return e.filter((function(e){return e!==a}))})):b((function(e){return[].concat(Object(S.a)(e),[a])})));var a},value:t})),o.a.createElement(V.a,null,o.a.createElement(i.a,{display:"flex",alignItems:"center"},o.a.createElement($.a,{className:l.avatar},Object(X.a)(e.customer.name)),o.a.createElement(i.a,{ml:2},o.a.createElement(g.a,{variant:"subtitle2",color:"textPrimary",component:p.a,underline:"none",to:"#"},e.customer.name),o.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.customer.email)))),o.a.createElement(V.a,null,function(e){var t={paid:{text:"Paid",color:"success"},pending:{text:"Pending",color:"warning"},canceled:{text:"Canceled",color:"error"}}[e],a=t.text,n=t.color;return o.a.createElement(Q.a,{color:n},a)}(e.status)),o.a.createElement(V.a,null,e.currency,e.amount.toFixed(2)),o.a.createElement(V.a,null,e.id),o.a.createElement(V.a,null,I()(e.createdAt).format("DD/MM/YYYY")),o.a.createElement(V.a,{align:"right"},o.a.createElement(q.a,{component:p.a,to:"#"},o.a.createElement(E.a,{fontSize:"small"},o.a.createElement(K.a,null))),o.a.createElement(q.a,{component:p.a,to:"/app/management/invoices/1"},o.a.createElement(E.a,{fontSize:"small"},o.a.createElement(U.a,null)))))})))))),o.a.createElement(G.a,{component:"div",count:me.length,onChangePage:function(e,t){k(t)},onChangeRowsPerPage:function(e){P(e.target.value)},page:j,rowsPerPage:C,rowsPerPageOptions:[5,10,25]}))}te.defaultProps={invoices:[]};var ae=te,ne=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));t.default=function(){var e=ne(),t=Object(m.a)(),a=Object(r.useState)(null),c=Object(n.a)(a,2),d=c[0],p=c[1],f=Object(r.useCallback)((function(){s.a.get("/api/management/invoices").then((function(e){t.current&&p(e.data.invoices)}))}),[t]);return Object(r.useEffect)((function(){f()}),[f]),d?o.a.createElement(u.a,{className:e.root,title:"Invoice List"},o.a.createElement(l.a,{maxWidth:!1},o.a.createElement(P,null),d&&o.a.createElement(i.a,{mt:3},o.a.createElement(ae,{invoices:d})))):null}}}]);
//# sourceMappingURL=28.5e58f14f.chunk.js.map