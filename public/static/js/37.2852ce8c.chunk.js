(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[37],{1130:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),c=(t(2),t(3)),l=t(183),i=t(7),s=o.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,d=Object(n.a)(e,["classes","className","raised"]);return o.createElement(l.a,Object(r.a)({className:Object(c.a)(t.root,i),elevation:m?8:1,ref:a},d))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1131:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),c=(t(2),t(3)),l=t(7),i=o.forwardRef((function(e,a){var t=e.classes,l=e.className,i=e.component,s=void 0===i?"div":i,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(c.a)(t.root,l),ref:a},m))}));a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1132:function(e,a,t){"use strict";var r=t(1),n=t(96),o=t(4),c=t(0),l=(t(138),t(2),t(3)),i=t(7),s=t(65),m=t(14),d=t(152),u=Object(d.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(286);var h=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(o.a)(e,["classes"]);return c.createElement(p.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(u,{className:a.icon}))}));var b=c.forwardRef((function(e,a){var t=e.children,i=e.classes,m=e.className,d=e.component,u=void 0===d?"nav":d,p=e.expandText,b=void 0===p?"Show path":p,f=e.itemsAfterCollapse,v=void 0===f?1:f,y=e.itemsBeforeCollapse,g=void 0===y?1:y,E=e.maxItems,O=void 0===E?8:E,j=e.separator,N=void 0===j?"/":j,x=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=c.useState(!1),C=k[0],w=k[1],S=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})).map((function(e,a){return c.createElement("li",{className:i.li,key:"child-".concat(a)},e)}));return c.createElement(s.a,Object(r.a)({ref:a,component:u,color:"textSecondary",className:Object(l.a)(i.root,m)},x),c.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce((function(r,n,o){return o<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:a},t)):r.push(n),r}),[])}(C||O&&S.length<=O?S:function(e){return g+v>=e.length?e:[].concat(Object(n.a)(e.slice(0,g)),[c.createElement(h,{"aria-label":b,key:"ellipsis",onClick:function(e){w(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-v,e.length)))}(S),i.separator,N)))}));a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},1133:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),c=(t(2),t(3)),l=t(375),i=t(152),s=Object(i.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(14),u=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(9),h=t(7),b=o.createElement(m,null),f=o.createElement(s,null),v=o.createElement(u,null),y=o.forwardRef((function(e,a){var t=e.checkedIcon,i=void 0===t?b:t,s=e.classes,m=e.color,d=void 0===m?"secondary":m,u=e.icon,h=void 0===u?f:u,y=e.indeterminate,g=void 0!==y&&y,E=e.indeterminateIcon,O=void 0===E?v:E,j=e.inputProps,N=e.size,x=void 0===N?"medium":N,k=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(l.a,Object(r.a)({type:"checkbox",classes:{root:Object(c.a)(s.root,s["color".concat(Object(p.a)(d))],g&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(r.a)({"data-indeterminate":g},j),icon:o.cloneElement(g?O:h,{fontSize:"small"===x?"small":"default"}),checkedIcon:o.cloneElement(g?O:i,{fontSize:"small"===x?"small":"default"}),ref:a},k))}));a.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},1135:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),c=(t(2),t(3)),l=t(7),i=t(65),s=o.forwardRef((function(e,a){var t=e.action,l=e.avatar,s=e.classes,m=e.className,d=e.component,u=void 0===d?"div":d,p=e.disableTypography,h=void 0!==p&&p,b=e.subheader,f=e.subheaderTypographyProps,v=e.title,y=e.titleTypographyProps,g=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=v;null==E||E.type===i.a||h||(E=o.createElement(i.a,Object(r.a)({variant:l?"body2":"h5",className:s.title,component:"span",display:"block"},y),E));var O=b;return null==O||O.type===i.a||h||(O=o.createElement(i.a,Object(r.a)({variant:l?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},f),O)),o.createElement(u,Object(r.a)({className:Object(c.a)(s.root,m),ref:a},g),l&&o.createElement("div",{className:s.avatar},l),o.createElement("div",{className:s.content},E,O),t&&o.createElement("div",{className:s.action},t))}));a.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1239:function(e,a,t){"use strict";var r=t(118);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),o=(0,r(t(137)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=o},1272:function(e,a,t){"use strict";a.a=function(e){return new Promise((function(a){return setTimeout(a,e)}))}},2338:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),c=t(77),l=t(1117),i=t(1132),s=t(1106),m=t(65),d=t(1123),u=t(1118),p=t(1239),h=t.n(p),b=t(374),f=t(60),v=t.n(f),y=t(108),g=t(21),E=t(1263),O=t(1269),j=t(1130),N=t(1135),x=t(1107),k=t(1131),C=t(1098),w=t(370),S=t(1133),B=t(633),T=t(184),z=t(1224),R=t(1272);var P=function(){var e=Object(r.useState)(!0),a=Object(g.a)(e,2),t=a[0],o=a[1];return n.a.createElement(O.b,{initialValues:{email:"johnnydoe@yahoo.com",firstName:"John",lastName:"Doe",password:"thisisasecuredpassword",policy:!1},validationSchema:E.f().shape({email:E.h().email().required("Required"),firstName:E.h().required("Required"),lastName:E.h().required("Required"),password:E.h().min(7,"Must be at least 7 characters").max(255).required("Required"),policy:E.c().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(y.a)(v.a.mark((function e(a,t){var r,n,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,n=t.setErrors,o=t.setStatus,c=t.setSubmitting,e.prev=1,e.next=4,Object(R.a)(1e3);case 4:r(),o({success:!0}),c(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),o({success:!1}),n({submit:e.t0.message}),c(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,r=e.handleBlur,c=e.handleChange,l=e.handleSubmit,i=e.isSubmitting,p=e.touched,h=e.values;return n.a.createElement(j.a,null,n.a.createElement(N.a,{title:"Basic Form"}),n.a.createElement(x.a,null),n.a.createElement(k.a,null,t&&n.a.createElement(d.a,{mb:3},n.a.createElement(z.a,{onClose:function(){return o(!1)},severity:"info"},"This is an info alert - check it out!")),i?n.a.createElement(d.a,{display:"flex",justifyContent:"center",my:5},n.a.createElement(C.a,null)):n.a.createElement("form",{onSubmit:l},n.a.createElement(u.a,{container:!0,spacing:2},n.a.createElement(u.a,{item:!0,md:6,xs:12},n.a.createElement(w.a,{error:Boolean(p.firstName&&a.firstName),fullWidth:!0,helperText:p.firstName&&a.firstName,label:"First Name",name:"firstName",onBlur:r,onChange:c,value:h.firstName,variant:"outlined"})),n.a.createElement(u.a,{item:!0,md:6,xs:12},n.a.createElement(w.a,{error:Boolean(p.lastName&&a.lastName),fullWidth:!0,helperText:p.lastName&&a.lastName,label:"Last Name",name:"lastName",onBlur:r,onChange:c,value:h.lastName,variant:"outlined"}))),n.a.createElement(d.a,{mt:2},n.a.createElement(w.a,{error:Boolean(p.email&&a.email),fullWidth:!0,helperText:p.email&&a.email,label:"Email Address",name:"email",onBlur:r,onChange:c,type:"email",value:h.email,variant:"outlined"})),n.a.createElement(d.a,{mt:2},n.a.createElement(w.a,{error:Boolean(p.password&&a.password),fullWidth:!0,helperText:p.password&&a.password,label:"Password",name:"password",onBlur:r,onChange:c,type:"password",value:h.password,variant:"outlined"})),n.a.createElement(d.a,{alignItems:"center",display:"flex",mt:2,ml:-1},n.a.createElement(S.a,{checked:h.policy,name:"policy",onChange:c}),n.a.createElement(m.a,{variant:"body2",color:"textSecondary"},"I have read the"," ",n.a.createElement(s.a,{component:"a",href:"#",color:"secondary"},"Terms and Conditions"))),Boolean(p.policy&&a.policy)&&n.a.createElement(B.a,{error:!0},a.policy),n.a.createElement(d.a,{mt:2},n.a.createElement(T.a,{color:"secondary",disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign up")))))}))},M=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=M();return n.a.createElement(b.a,{className:e.root,title:"Formik Form"},n.a.createElement(l.a,{maxWidth:"lg"},n.a.createElement(i.a,{separator:n.a.createElement(h.a,{fontSize:"small"}),"aria-label":"breadcrumb"},n.a.createElement(s.a,{variant:"body1",color:"inherit",to:"/app",component:o.a},"Dashboard"),n.a.createElement(m.a,{variant:"body1",color:"textPrimary"},"Forms")),n.a.createElement(m.a,{variant:"h3",color:"textPrimary"},"Formik"),n.a.createElement(d.a,{mt:3},n.a.createElement(u.a,{container:!0},n.a.createElement(u.a,{item:!0,xs:12,md:6},n.a.createElement(P,null))))))}}}]);
//# sourceMappingURL=37.2852ce8c.chunk.js.map