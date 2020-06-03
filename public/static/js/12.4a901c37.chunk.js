(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[12],{1128:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),c=(t(2),t(3)),l=t(182),i=t(7),s=o.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,d=Object(n.a)(e,["classes","className","raised"]);return o.createElement(l.a,Object(r.a)({className:Object(c.a)(t.root,i),elevation:m?8:1,ref:a},d))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1129:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),c=(t(2),t(3)),l=t(7),i=o.forwardRef((function(e,a){var t=e.classes,l=e.className,i=e.component,s=void 0===i?"div":i,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(c.a)(t.root,l),ref:a},m))}));a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1133:function(e,a,t){"use strict";var r=t(1),n=t(4),o=t(0),c=(t(2),t(3)),l=t(374),i=t(152),s=Object(i.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(14),u=Object(i.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(9),b=t(7),h=o.createElement(m,null),f=o.createElement(s,null),v=o.createElement(u,null),E=o.forwardRef((function(e,a){var t=e.checkedIcon,i=void 0===t?h:t,s=e.classes,m=e.color,d=void 0===m?"secondary":m,u=e.icon,b=void 0===u?f:u,E=e.indeterminate,g=void 0!==E&&E,y=e.indeterminateIcon,O=void 0===y?v:y,k=e.inputProps,N=e.size,j=void 0===N?"medium":N,x=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(l.a,Object(r.a)({type:"checkbox",classes:{root:Object(c.a)(s.root,s["color".concat(Object(p.a)(d))],g&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(r.a)({"data-indeterminate":g},k),icon:o.cloneElement(g?O:b,{fontSize:"small"===j?"small":"default"}),checkedIcon:o.cloneElement(g?O:i,{fontSize:"small"===j?"small":"default"}),ref:a},x))}));a.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(E)},2340:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),c=t(29),l=t(77),i=t(1117),s=t(1121),m=t(183),d=t(1128),u=t(1129),p=t(65),b=t(1105),h=t(1104),f=t(373),v=t(41),E=t(60),g=t.n(E),y=t(107),O=t(27),k=t(46),N=t(3),j=t(1280),x=t(1287),S=t(369),C=t(1133),w=t(632),B=t(84),z=Object(l.a)((function(){return{root:{}}}));function I(e){var a=e.className,t=e.onSubmitSuccess,r=Object(O.a)(e,["className","onSubmitSuccess"]),o=z(),c=Object(k.c)();return n.a.createElement(x.b,{initialValues:{firstName:"",lastName:"",email:"",password:"",policy:!1},validationSchema:j.d().shape({firstName:j.f().max(255).required("First name is required"),lastName:j.f().max(255).required("Last name is required"),email:j.f().email("Must be a valid email").max(255).required("Email is required"),password:j.f().min(7).max(255).required("Password is required"),policy:j.b().oneOf([!0],"This field must be checked")}),onSubmit:function(){var e=Object(y.a)(g.a.mark((function e(a,r){var n,o,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setErrors,o=r.setStatus,l=r.setSubmitting,e.prev=1,e.next=4,c(Object(B.i)(a));case 4:t(),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),o({success:!1}),n({submit:e.t0.message}),l(!1);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,c=e.handleBlur,l=e.handleChange,i=e.handleSubmit,d=e.isSubmitting,u=e.touched,b=e.values;return n.a.createElement("form",Object.assign({className:Object(N.a)(o.root,a),onSubmit:i},r),n.a.createElement(S.a,{error:Boolean(u.firstName&&t.firstName),fullWidth:!0,helperText:u.firstName&&t.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:c,onChange:l,type:"firstName",value:b.firstName,variant:"outlined"}),n.a.createElement(S.a,{error:Boolean(u.lastName&&t.lastName),fullWidth:!0,helperText:u.lastName&&t.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:c,onChange:l,type:"lastName",value:b.lastName,variant:"outlined"}),n.a.createElement(S.a,{error:Boolean(u.email&&t.email),fullWidth:!0,helperText:u.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:c,onChange:l,type:"email",value:b.email,variant:"outlined"}),n.a.createElement(S.a,{error:Boolean(u.password&&t.password),fullWidth:!0,helperText:u.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:c,onChange:l,type:"password",value:b.password,variant:"outlined"}),n.a.createElement(s.a,{alignItems:"center",display:"flex",mt:2,ml:-1},n.a.createElement(C.a,{checked:b.policy,name:"policy",onChange:l}),n.a.createElement(p.a,{variant:"body2",color:"textSecondary"},"I have read the"," ",n.a.createElement(h.a,{component:"a",href:"#",color:"secondary"},"Terms and Conditions"))),Boolean(u.policy&&t.policy)&&n.a.createElement(w.a,{error:!0},t.policy),n.a.createElement(s.a,{mt:2},n.a.createElement(m.a,{color:"secondary",disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create account")))}))}I.default={onSubmitSuccess:function(){}};var q=I,H=Object(l.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",paddingBottom:80,paddingTop:80}}}));a.default=function(){var e=H(),a=Object(c.g)();return n.a.createElement(f.a,{className:e.root,title:"Register"},n.a.createElement(i.a,{maxWidth:"sm"},n.a.createElement(s.a,{mb:5,display:"flex",alignItems:"center"},n.a.createElement(o.a,{to:"/"},n.a.createElement(v.a,null)),n.a.createElement(m.a,{component:o.a,to:"/",className:e.backButton},"Back to home")),n.a.createElement(d.a,null,n.a.createElement(u.a,null,n.a.createElement(p.a,{gutterBottom:!0,variant:"h2",color:"textPrimary"},"Sign up"),n.a.createElement(p.a,{variant:"subtitle1"},"Sign up on the internal platform"),n.a.createElement(s.a,{mt:3},n.a.createElement(q,{onSubmitSuccess:function(){a.push("/app/login")}})),n.a.createElement(s.a,{my:2},n.a.createElement(b.a,null)),n.a.createElement(h.a,{component:o.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?")))))}}}]);
//# sourceMappingURL=12.4a901c37.chunk.js.map