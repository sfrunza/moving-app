(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[39],{1130:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),l=(a(2),a(3)),o=a(372),i=a(150),s=Object(i.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(i.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=a(14),d=Object(i.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(9),b=a(7),f=c.createElement(u,null),g=c.createElement(s,null),h=c.createElement(d,null),v=c.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?f:a,s=e.classes,u=e.color,m=void 0===u?"secondary":u,d=e.icon,b=void 0===d?g:d,v=e.indeterminate,y=void 0!==v&&v,E=e.indeterminateIcon,O=void 0===E?h:E,j=e.inputProps,k=e.size,C=void 0===k?"medium":k,w=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return c.createElement(o.a,Object(n.a)({type:"checkbox",classes:{root:Object(l.a)(s.root,s["color".concat(Object(p.a)(m))],y&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":y},j),icon:c.cloneElement(y?O:b,{fontSize:"small"===C?"small":"default"}),checkedIcon:c.cloneElement(y?O:i,{fontSize:"small"===C?"small":"default"}),ref:t},w))}));t.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(v)},1235:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1245:function(e,t,a){"use strict";var n=a(28),r=a(19),c=a(0),l=a.n(c),o=a(3),i=a(77),s=a(14),u=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));function m(e){var t=e.className,a=e.color,c=e.children,i=(e.style,Object(r.a)(e,["className","color","children","style"])),s=u();return l.a.createElement("span",Object.assign({className:Object(o.a)(s.root,Object(n.a)({},s[a],a),t)},i),c)}m.defaultProps={className:"",color:"secondary"},t.a=m},1320:function(e,t,a){"use strict";var n=a(0),r=a(150);t.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1321:function(e,t,a){"use strict";var n=a(0),r=a(150);t.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1346:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2),l=a.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,l=void 0===c?24:c,s=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="ArrowRight",t.a=s},2324:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(0),c=a.n(r),l=a(77),o=a(1116),i=a(1121),s=a(287),u=a.n(s),m=a(371),d=a(1235),p=a(19),b=a(11),f=a(3),g=a(1117),h=a(1129),v=a(1104),y=a(66),E=a(1238),O=a.n(E),j=Object(l.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var k=function(e){var t=e.className,a=Object(p.a)(e,["className"]),n=j();return c.a.createElement(g.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(f.a)(n.root,t)},a),c.a.createElement(g.a,{item:!0},c.a.createElement(h.a,{separator:c.a.createElement(O.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(v.a,{variant:"body1",color:"inherit",to:"/app",component:b.a},"Dashboard"),c.a.createElement(y.a,{variant:"body1",color:"textPrimary"},"Jobs")),c.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"All Jobs")))},C=a(56),w=a(43),x=a(5),S=a.n(x),A=a(218),N=a.n(A),P=a(1127),z=a(367),L=a(632),I=a(104),B=a(1130),M=a(182),R=a(1135),F=a(1139),J=a(1137),T=a(1138),_=a(1136),D=a(282),H=a(1156),W=a(1215),V=a(1211),Y=a(1346),$=a(1245),G=[{id:"all",name:"All"},{id:"completed",name:"Completed"},{id:"canceled",name:"Canceled"},{id:"needsAttention",name:"Needs Attention"},{id:"confirmed",name:"Confirmed"}],q=[{value:"updatedAt|desc",label:"Last update (newest first)"},{value:"updatedAt|asc",label:"Last update (oldest first)"},{value:"createdAt|desc",label:"Creation date (newest first)"},{value:"createdAt|asc",label:"Creation date (oldest first)"}];var K=Object(l.a)((function(e){return{root:{},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},queryField:{width:500},categoryField:{flexBasis:200},availabilityField:{marginLeft:e.spacing(2),flexBasis:200},stockField:{marginLeft:e.spacing(2)},shippableField:{marginLeft:e.spacing(2)},imageCell:{fontSize:0,width:68,flexBasis:68,flexGrow:0,flexShrink:0},image:{height:68,width:68}}}));function Q(e){var t=e.className,a=e.jobs,l=Object(p.a)(e,["className","jobs"]),o=K(),s=Object(r.useState)([]),u=Object(n.a)(s,2),m=u[0],d=u[1],g=Object(r.useState)(0),h=Object(n.a)(g,2),y=h[0],E=h[1],O=Object(r.useState)(10),j=Object(n.a)(O,2),k=j[0],x=j[1],A=Object(r.useState)(""),Q=Object(n.a)(A,2),U=Q[0],X=Q[1],Z=Object(r.useState)(q[0].value),ee=Object(n.a)(Z,2),te=(ee[0],ee[1],Object(r.useState)({category:null,availability:null,inStock:null,isShippable:null})),ae=Object(n.a)(te,2),ne=ae[0],re=ae[1],ce=function(e){d(e.target.checked?a.map((function(e){return e.id})):[])},le=function(e,t,a){return e.filter((function(e){var n=!0;return!t||e.customer.last_name.toLowerCase().includes(t.toLowerCase())||e.customer.first_name.toLowerCase().includes(t.toLowerCase())||e.id.toString().includes(t.toLowerCase())||(n=!1),a.category&&e.category!==a.category&&(n=!1),a.availability&&("confirmed"!==a.availability||["Confirmed"].includes(e.status)||(n=!1),"completed"!==a.availability||["Completed"].includes(e.status)||(n=!1),"needsAttention"!==a.availability||["Needs Attention"].includes(e.status)||(n=!1),"canceled"!==a.availability||["Canceled"].includes(e.status)||(n=!1)),a.inStock&&!["Needs Attention"].includes(e.status)&&(n=!1),a.isShippable&&!e.isShippable&&(n=!1),n}))}(a,U,ne),oe=function(e,t,a){return e.slice(t*a,t*a+a)}(le,y,k),ie=m.length>0,se=m.length>0&&m.length<a.length,ue=m.length===a.length;return c.a.createElement(P.a,Object.assign({className:Object(f.a)(o.root,t)},l),c.a.createElement(i.a,{p:2},c.a.createElement(i.a,{display:"flex",alignItems:"center"},c.a.createElement(z.a,{className:o.queryField,InputProps:{startAdornment:c.a.createElement(L.a,{position:"start"},c.a.createElement(I.a,{fontSize:"small",color:"action"},c.a.createElement(W.a,null)))},onChange:function(e){e.persist(),X(e.target.value)},placeholder:"Search Job",value:U,variant:"outlined"}),c.a.createElement(i.a,{flexGrow:1}),c.a.createElement(z.a,{className:o.availabilityField,label:"Sort By Status",name:"availability",onChange:function(e){e.persist();var t=null;"all"!==e.target.value&&(t=e.target.value),re((function(e){return Object(w.a)(Object(w.a)({},e),{},{availability:t})}))},select:!0,SelectProps:{native:!0},value:ne.availability||"all",variant:"outlined"},G.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),ie&&c.a.createElement("div",{className:o.bulkOperations},c.a.createElement("div",{className:o.bulkActions},c.a.createElement(B.a,{checked:ue,indeterminate:se,onChange:ce}),c.a.createElement(M.a,{variant:"outlined",className:o.bulkAction},"Delete"),c.a.createElement(M.a,{variant:"outlined",className:o.bulkAction},"Edit"))),c.a.createElement(N.a,null,c.a.createElement(i.a,{minWidth:1200},c.a.createElement(R.a,null,c.a.createElement(F.a,null,c.a.createElement(J.a,null,c.a.createElement(T.a,{padding:"checkbox"},c.a.createElement(B.a,{checked:ue,indeterminate:se,onChange:ce})),c.a.createElement(T.a,null,"Job ID"),c.a.createElement(T.a,null,"Customer"),c.a.createElement(T.a,null,"Pickup Date"),c.a.createElement(T.a,null,"Type of Service"),c.a.createElement(T.a,null,"Status"),c.a.createElement(T.a,{align:"right"},"Actions"))),c.a.createElement(_.a,null,oe.map((function(e){var t=m.includes(e.id);return c.a.createElement(J.a,{hover:!0,key:e.id,selected:t},c.a.createElement(T.a,{padding:"checkbox"},c.a.createElement(B.a,{checked:t,onChange:function(t){return a=e.id,void(m.includes(a)?d((function(e){return e.filter((function(e){return e!==a}))})):d((function(e){return[].concat(Object(C.a)(e),[a])})));var a},value:t})),c.a.createElement(T.a,null,c.a.createElement(v.a,{variant:"subtitle2",color:"textPrimary",component:b.a,underline:"none",to:"/app/management/jobs/".concat(e.id)},e.id)),c.a.createElement(T.a,null,null===e.customer||null===e.customer?" ":e.customer.first_name+" "+e.customer.last_name),c.a.createElement(T.a,null,S()(e.pick_up_date).format("MMMM DD YYYY")),c.a.createElement(T.a,null,e.move_type),c.a.createElement(T.a,null,function(e){var t={Completed:{text:"Completed",color:"secondary"},Canceled:{text:"Canceled",color:"error"},"Needs Attention":{text:"Needs Attention",color:"warning"},Confirmed:{text:"Confirmed",color:"success"}}[e],a=t.text,n=t.color;return c.a.createElement($.a,{color:n},a)}(e.status)),c.a.createElement(T.a,{align:"right"},c.a.createElement(D.a,null,c.a.createElement(I.a,{fontSize:"small"},c.a.createElement(V.a,null))),c.a.createElement(D.a,null,c.a.createElement(v.a,{variant:"subtitle2",color:"textPrimary",component:b.a,underline:"none",to:"/app/management/jobs/".concat(e.id)},c.a.createElement(I.a,{fontSize:"small"},c.a.createElement(Y.a,null))))))})))),c.a.createElement(H.a,{component:"div",count:le.length,onChangePage:function(e,t){E(t)},onChangeRowsPerPage:function(e){x(e.target.value)},page:y,rowsPerPage:k,rowsPerPageOptions:[5,10,25]}))))}Q.defaultProps={jobs:[]};var U=Q,X=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));t.default=function(){var e=X(),t=Object(d.a)(),a=Object(r.useState)(null),l=Object(n.a)(a,2),s=l[0],p=l[1],b=Object(r.useCallback)((function(){u.a.get("https://moving-co.herokuapp.com/api/v1/jobs.json").then((function(e){t.current&&p(e.data)}))}),[t]);return Object(r.useEffect)((function(){b()}),[b]),s?c.a.createElement(m.a,{className:e.root,title:"Job List"},c.a.createElement(o.a,{maxWidth:!1},c.a.createElement(k,null),s&&c.a.createElement(i.a,{mt:5},c.a.createElement(U,{jobs:s})))):null}}}]);
//# sourceMappingURL=39.f0817eed.chunk.js.map