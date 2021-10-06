(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{1044:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(0),c=a(226),s=a(310),o=a(374),i=a(388),l=a(376),d=a(373),b=a(58),j=a(26),u=a(62),m=a(392),h=a(385),p=a(75),O=a(1);var x=function(e){var t=e.user;return Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{color:"textPrimary",variant:"h5",children:"Settings"}),Object(O.jsxs)(m.a,{"aria-label":"breadcrumb",separator:Object(O.jsx)(p.a,{fontSize:"small"}),style:{marginTop:8},children:[Object(O.jsx)(h.a,{color:"textPrimary",component:j.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(O.jsx)(h.a,{color:"textPrimary",component:j.b,to:"/dashboard/employees",variant:"subtitle2",children:"Employees"}),Object(O.jsx)(u.a,{color:"textSecondary",variant:"subtitle2",children:t.first_name+" "+t.last_name})]})]})},g=a(350),v=a(351),f=a(353),y=a(397),w=Object(c.a)((function(e){return{root:{boxShadow:e.shadows[1]},name:{marginTop:e.spacing(1)},avatar:{height:70,width:70}}}));var C=function(e){var t=e.user,a=w();return Object(O.jsx)(v.a,{className:a.root,children:Object(O.jsx)(f.a,{children:Object(O.jsxs)(s.a,{display:"flex",alignItems:"center",flexDirection:"column",pt:2,children:[Object(O.jsx)(y.a,{className:a.avatar,src:""}),Object(O.jsx)(u.a,{className:a.name,gutterBottom:!0,variant:"h6",color:"textPrimary",children:t.first_name+" "+t.last_name}),Object(O.jsx)(u.a,{color:"textSecondary",variant:"body1",children:t.email}),Object(O.jsx)(u.a,{color:"textSecondary",variant:"body1",children:t.active?"Active":"Not active"})]})})})},P=a(16),k=a(5),N=a(372),S=a(384),_=a(391),z=a(369),E=a(389),B=a(355),R=a(116),M=a(179),I=a.n(M),$=a(147),T=a(91),W=a(115),D=a(106),Y=a(876),A=a.n(Y),F=Object(c.a)((function(e){return{label:{fontWeight:500,marginBottom:e.spacing(1),display:"inline-block",color:e.palette.text.secondary},icon:{marginRight:e.spacing(1),top:6,width:20,position:"relative"},inputWidth:{width:"calc(100% - 24px)",marginLeft:24}}})),L={email:{presence:{allowEmpty:!1,message:"is required"},email:{message:"is not valid"}},phone:{presence:{allowEmpty:!1,message:"is required"},format:{pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,message:"is not valid"}},first_name:{presence:{allowEmpty:!1,message:"is required"}},last_name:{presence:{allowEmpty:!1,message:"is required"}}},V=["Helper","Driver","Foreman","Manager"],q=function(e){var t=e.user,a=e.handleUpdate,c=e.isUpdating,o={first_name:t.first_name,last_name:t.last_name,email:t.email,phone:t.phone,role:t.role},i=F(),l=Object(R.b)().enqueueSnackbar,b=Object(r.useState)({isValid:!1,values:o,touched:{},errors:{}}),j=Object(n.a)(b,2),u=j[0],m=j[1];Object(r.useEffect)((function(){var e=I()(u.values,L);m((function(t){return Object(k.a)(Object(k.a)({},t),{},{isValid:!e,errors:e||{}})}))}),[u.values,t]);var h=function(e){e.persist(),"phone"===e.target.name?m((function(t){return Object(k.a)(Object(k.a)({},t),{},{values:Object(k.a)(Object(k.a)({},t.values),{},{phone:"1"===e.target.value?"":Object(D.b)(Object(D.a)(e.target.value))}),touched:Object(k.a)(Object(k.a)({},t.touched),{},{phone:!0})})})):"add_phone"===e.target.name?m((function(t){return Object(k.a)(Object(k.a)({},t),{},{values:Object(k.a)(Object(k.a)({},t.values),{},{add_phone:"1"===e.target.value?"":Object(D.b)(Object(D.a)(e.target.value))}),touched:Object(k.a)(Object(k.a)({},t.touched),{},{add_phone:!0})})})):m((function(t){return Object(k.a)(Object(k.a)({},t),{},{values:Object(k.a)(Object(k.a)({},t.values),{},Object(P.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(k.a)(Object(k.a)({},t.touched),{},Object(P.a)({},e.target.name,!0))})}))},p=function(e){return!(!u.touched[e]||!u.errors[e])};return Object(O.jsx)("form",{name:"password-reset-form",method:"post",onSubmit:function(e){e.preventDefault(),u.isValid&&(a(t.id,u.values),l("Employee updated",{anchorOrigin:{horizontal:"right",vertical:"top"},variant:"success"})),m((function(e){return Object(k.a)(Object(k.a)({},e),{},{touched:Object(k.a)(Object(k.a)({},e.touched),e.errors)})}))},children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)(S.a,{title:"Profile"}),Object(O.jsx)(d.a,{}),Object(O.jsx)(f.a,{children:Object(O.jsxs)(g.a,{container:!0,spacing:3,children:[Object(O.jsxs)(g.a,{item:!0,xs:12,md:6,children:[Object(O.jsxs)("label",{htmlFor:"first_name",className:i.label,children:[Object(O.jsx)($.a,{className:i.icon}),"First name"]}),Object(O.jsx)(_.a,{error:p("first_name"),className:i.inputWidth,name:"first_name",id:"first_name",size:"small",value:u.values.first_name||"",onChange:h,variant:"outlined",helperText:p("first_name")?u.errors.first_name:null})]}),Object(O.jsxs)(g.a,{item:!0,xs:12,md:6,children:[Object(O.jsxs)("label",{htmlFor:"last_name",className:i.label,children:[Object(O.jsx)($.a,{className:i.icon}),"Last name"]}),Object(O.jsx)(_.a,{error:p("last_name"),className:i.inputWidth,name:"last_name",id:"last_name",size:"small",onChange:h,value:u.values.last_name,variant:"outlined",helperText:p("last_name")?u.errors.last_name:null})]}),Object(O.jsxs)(g.a,{item:!0,xs:12,md:6,children:[Object(O.jsxs)("label",{htmlFor:"email",className:i.label,children:[Object(O.jsx)(T.a,{className:i.icon}),"Email address"]}),Object(O.jsx)(_.a,{error:p("email"),className:i.inputWidth,name:"email",id:"email",size:"small",onChange:h,value:u.values.email||"",variant:"outlined",helperText:p("email")?u.errors.email[0]:null})]}),Object(O.jsxs)(g.a,{item:!0,xs:12,md:6,children:[Object(O.jsxs)("label",{htmlFor:"phone",className:i.label,children:[Object(O.jsx)(W.a,{className:i.icon}),"Phone"]}),Object(O.jsx)(_.a,{error:p("phone"),className:i.inputWidth,name:"phone",id:"phone",size:"small",onChange:h,value:u.values.phone||"",variant:"outlined",helperText:p("phone")?u.errors.phone[0]:null})]}),Object(O.jsxs)(g.a,{item:!0,xs:12,md:6,children:[Object(O.jsxs)("label",{htmlFor:"role",className:i.label,children:[Object(O.jsx)(A.a,{className:i.icon}),"Role"]}),Object(O.jsx)(z.a,{variant:"outlined",size:"small",className:i.inputWidth,placeholder:"Select",children:Object(O.jsx)(E.a,{id:"role",variant:"outlined",placeholder:"Select",name:"role",size:"small",displayEmpty:!0,value:u.values.role||"",onChange:h,children:V.map((function(e,t){return Object(O.jsx)(N.a,{value:e,children:e},t)}))})})]})]})}),Object(O.jsx)(s.a,{p:2,display:"flex",justifyContent:"flex-end",children:Object(O.jsx)(B.a,{color:"primary",disabled:function(e,t){var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(var r=0,c=a;r<c.length;r++){var s=c[r];if(e[s]!==t[s])return!1}return!0}(u.values,o)||c,type:"submit",variant:"contained",disableElevation:!0,children:c?"Loading...":"Save Changes"})})]})})},U=a(22),H=a(167);var J=function(e){var t=e.user,a=Object(U.b)(),n=Object(U.c)((function(e){return e.employees})).isUpdating;return Object(O.jsxs)(g.a,{container:!0,spacing:3,children:[Object(O.jsx)(g.a,{item:!0,lg:4,md:6,xl:3,xs:12,children:Object(O.jsx)(C,{user:t})}),Object(O.jsx)(g.a,{item:!0,lg:8,md:6,xl:9,xs:12,children:Object(O.jsx)(q,{user:t,handleUpdate:function(e,t){a(Object(H.e)(e,t))},isUpdating:n})})]})},X=a(13),G=a.n(X),K=a(29),Q=a(10),Z=a(3),ee=a(641),te=a(63),ae=a(370),ne=a(180),re=["className","user","handlePasswordChange"],ce=Object(c.a)((function(e){return{root:{},label:{fontWeight:600,marginBottom:e.spacing(1),display:"flex",color:e.palette.text.secondary,alignItems:"baseline"},icon:{marginRight:e.spacing(1),top:6,width:20,position:"relative"},inputWidth:{width:"calc(100% - 24px)",marginLeft:24}}}));var se=function(e){var t=e.className,a=e.user,n=e.handlePasswordChange,r=Object(Q.a)(e,re),c=ce(),o=Object(R.b)().enqueueSnackbar;return Object(O.jsx)(te.a,{initialValues:{password:"",password_confirmation:"",current_password:""},validationSchema:ee.a().shape({current_password:ee.c().min(6,"Must be at least 6 characters").max(255).required("Current password is required"),password:ee.c().min(6,"Must be at least 6 characters").max(255).required("New password is required"),password_confirmation:ee.c().oneOf([ee.b("password"),null],"Passwords must match").required("Required")}),onSubmit:function(){var e=Object(K.a)(G.a.mark((function e(t,r){var c,s,i,l;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.resetForm,s=r.setErrors,i=r.setStatus,l=r.setSubmitting,e.prev=1,e.next=4,n(t,a.id);case 4:c(),i({success:!0}),l(!1),o("Password updated",{variant:"success"}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),i({success:!1}),s({submit:e.t0.message}),l(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,n=e.handleBlur,o=e.handleChange,i=e.handleSubmit,l=e.isSubmitting,b=e.touched,j=e.values;return Object(O.jsx)("form",{onSubmit:i,children:Object(O.jsxs)(v.a,Object(k.a)(Object(k.a)({className:Object(Z.a)(c.root,t)},r),{},{children:[Object(O.jsx)(S.a,{title:"Change Password"}),Object(O.jsx)(d.a,{}),Object(O.jsxs)(f.a,{children:[Object(O.jsxs)(g.a,{container:!0,spacing:3,children:[Object(O.jsxs)(g.a,{item:!0,md:4,sm:6,xs:12,children:[Object(O.jsxs)("label",{htmlFor:"current_password",className:c.label,children:[Object(O.jsx)(ne.a,{className:c.icon}),"Current password"]}),Object(O.jsx)(_.a,{error:Boolean(b.current_password&&a.current_password),className:c.inputWidth,helperText:b.current_password&&a.current_password,name:"current_password",id:"current_password",size:"small",onBlur:n,onChange:o,type:"password",value:j.current_password,variant:"outlined"})]}),Object(O.jsxs)(g.a,{item:!0,md:4,sm:6,xs:12,children:[Object(O.jsxs)("label",{htmlFor:"password",className:c.label,children:[Object(O.jsx)(ne.a,{className:c.icon}),"New password"]}),Object(O.jsx)(_.a,{error:Boolean(b.password&&a.password),className:c.inputWidth,helperText:b.password&&a.password,name:"password",id:"password",size:"small",onBlur:n,onChange:o,type:"password",value:j.password,variant:"outlined"})]}),Object(O.jsxs)(g.a,{item:!0,md:4,sm:6,xs:12,children:[Object(O.jsxs)("label",{htmlFor:"password_confirmation",className:c.label,children:[Object(O.jsx)(ne.a,{className:c.icon}),"Password confirmation"]}),Object(O.jsx)(_.a,{error:Boolean(b.password_confirmation&&a.password_confirmation),className:c.inputWidth,helperText:b.password_confirmation&&a.password_confirmation,name:"password_confirmation",id:"password_confirmation",size:"small",onBlur:n,onChange:o,type:"password",value:j.password_confirmation,variant:"outlined"})]})]}),a.submit&&Object(O.jsx)(s.a,{mt:3,children:Object(O.jsx)(ae.a,{error:!0,children:a.submit})})]}),Object(O.jsx)(s.a,{p:2,display:"flex",justifyContent:"flex-end",children:Object(O.jsx)(B.a,{color:"primary",disabled:l,type:"submit",variant:"contained",disableElevation:!0,children:"Change Password"})})]}))})}})},oe=a(415),ie=a(7),le=a(377),de=a(380),be=a(381),je=a(378),ue=a(382),me=a(537),he=a(48),pe=a.n(he),Oe=a(421),xe=Object(ie.a)((function(e){return{head:{backgroundColor:e.palette.background.level2,color:e.palette.text.secondary},body:{fontSize:14}}}))(le.a);var ge=function(e){e.className;var t=e.jobs;return Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)(S.a,{title:"Jobs"}),Object(O.jsx)(d.a,{}),Object(O.jsx)(oe.a,{children:Object(O.jsx)(s.a,{minWidth:700,children:Object(O.jsxs)(de.a,{children:[Object(O.jsx)(be.a,{children:Object(O.jsxs)(je.a,{children:[Object(O.jsx)(xe,{children:"#"}),Object(O.jsx)(xe,{children:"Date"}),Object(O.jsx)(xe,{children:"Hours"}),Object(O.jsx)(xe,{children:"Service"}),Object(O.jsx)(xe,{children:"Size"}),Object(O.jsx)(xe,{children:"Status"})]})}),Object(O.jsx)(ue.a,{children:t.map((function(e){return Object(O.jsxs)(je.a,{hover:!0,children:[Object(O.jsx)(le.a,{children:Object(O.jsx)(B.a,{component:j.b,to:"/dashboard/jobs/".concat(e.id),disableElevation:!0,children:e.id})}),Object(O.jsx)(le.a,{children:pe()(e.pick_up_date).format("MMM DD, YYYY")}),Object(O.jsx)(le.a,{children:e.job_duration||0}),Object(O.jsx)(le.a,{children:e.job_type}),Object(O.jsx)(le.a,{children:e.job_size}),Object(O.jsx)(le.a,{children:Object(O.jsx)(Oe.a,{status:e.job_status})})]},e.id)}))})]})})}),Object(O.jsx)(me.a,{component:"div",count:t.length,onPageChange:function(){},onRowsPerPageChange:function(){},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})})};var ve=function(e){var t=e.rate,a=e.jobs,n=e.calculateSum;return Object(O.jsx)(v.a,{children:Object(O.jsxs)(f.a,{children:[Object(O.jsxs)(s.a,{display:"flex",justifyContent:"space-between",children:[Object(O.jsx)(u.a,{gutterBottom:!0,variant:"body1",color:"textPrimary",children:"Total hours:"}),Object(O.jsx)(u.a,{gutterBottom:!0,variant:"body1",color:"textSecondary",children:n(a)})]}),Object(O.jsxs)(s.a,{display:"flex",justifyContent:"space-between",children:[Object(O.jsx)(u.a,{gutterBottom:!0,variant:"body1",color:"textPrimary",children:"Total amount:"}),Object(O.jsxs)(u.a,{gutterBottom:!0,variant:"body1",color:"textSecondary",children:["$",n(a)*t]})]})]})})},fe=a(309);var ye=function(e){var t=e.jobs,a=e.user,c=Object(r.useState)(null),s=Object(n.a)(c,2),o=s[0],i=s[1],l=Object(r.useState)(null),d=Object(n.a)(l,2),b=d[0],j=d[1],m=Object(r.useState)(t),h=Object(n.a)(m,2),p=h[0],x=h[1],v=pe()(o).format("MM/DD/YY"),f=pe()(b).format("MM/DD/YY"),y=t.filter((function(e){var t=pe()(e.pick_up_date).format("MM/DD/YY");return v<=t&&t<=f}));return Object(O.jsxs)(g.a,{container:!0,spacing:2,children:[Object(O.jsx)(g.a,{item:!0,lg:6,md:6,xl:9,xs:12,children:Object(O.jsxs)(g.a,{container:!0,spacing:2,alignItems:"flex-end",children:[Object(O.jsxs)(g.a,{item:!0,md:4,xs:4,children:[Object(O.jsx)(u.a,{children:"From"}),Object(O.jsx)(fe.a,{variant:"inline",inputVariant:"outlined",id:"start",name:"start",format:"MM/DD/YYYY",size:"small",autoOk:!0,disableToolbar:!0,value:o,onChange:function(e){i(pe()(e))}})]}),Object(O.jsxs)(g.a,{item:!0,md:4,xs:4,children:[Object(O.jsx)(u.a,{children:"To"}),Object(O.jsx)(fe.a,{variant:"inline",inputVariant:"outlined",id:"end",name:"end",format:"MM/DD/YYYY",size:"small",autoOk:!0,disableToolbar:!0,value:b,onChange:function(e){j(pe()(e))}})]}),Object(O.jsx)(g.a,{item:!0,md:4,xs:4,children:Object(O.jsx)(B.a,{onClick:function(){x(y)},fullWidth:!0,variant:"outlined",color:"primary",disableElevation:!0,style:{padding:7},children:"Filter"})}),Object(O.jsx)(g.a,{item:!0,xs:12,children:Object(O.jsx)(ge,{jobs:p})}),Object(O.jsx)(g.a,{item:!0,xs:12,children:Object(O.jsx)(ve,{rate:a.rate,jobs:p,calculateSum:function(e){return e&&e.length>0?e.map((function(e){return e.job_duration})).reduce((function(e,t){return e+t})):0}})})]})}),Object(O.jsx)(g.a,{item:!0,lg:2,md:4,xl:3,xs:12})]})},we=a(307),Ce=a(644),Pe=a(177),ke=a(444),Ne=a(877),Se=a.n(Ne),_e=a(15),ze=a.n(_e),Ee=ze()(Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(O.jsx)("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),Object(O.jsx)("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),"Eye"),Be=ze()(Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(O.jsx)("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),Object(O.jsx)("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}),"EyeOff"),Re=Object(c.a)((function(e){return{label:{fontWeight:500,marginBottom:e.spacing(1),display:"inline-block",color:e.palette.text.secondary},icon:{marginRight:e.spacing(1),top:6,width:20,position:"relative"},inputWidth:{width:"calc(100% - 24px)",marginLeft:24},iconPadding:{padding:0}}})),Me=function(e,t){var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(var r=0,c=a;r<c.length;r++){var s=c[r];if(e[s]!==t[s])return!1}return!0},Ie=function(e){var t=e.user,a=e.handleUpdate,c=e.isUpdating,o=e.init,i=Re(),l=Object(r.useState)(!1),b=Object(n.a)(l,2),j=b[0],u=b[1],m=Object(te.b)({initialValues:o,validate:function(e){return{}},onSubmit:function(e){a(t.id,e)}});return Object(O.jsx)("form",{onSubmit:m.handleSubmit,children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)(S.a,{title:"Settings"}),Object(O.jsx)(d.a,{}),Object(O.jsx)(f.a,{children:Object(O.jsxs)(g.a,{container:!0,spacing:3,children:[Object(O.jsxs)(g.a,{item:!0,xs:12,children:[Object(O.jsxs)("label",{htmlFor:"address",className:i.label,children:[Object(O.jsx)(Pe.a,{className:i.icon}),"Address"]}),Object(O.jsx)(_.a,{className:i.inputWidth,name:"address",id:"address",size:"small",value:m.values.address||"",onChange:m.handleChange,variant:"outlined"})]}),Object(O.jsxs)(g.a,{item:!0,xs:12,md:4,children:[Object(O.jsxs)("label",{htmlFor:"rate",className:i.label,children:[Object(O.jsx)(ke.a,{className:i.icon}),"Rate"]}),Object(O.jsx)(_.a,{className:i.inputWidth,name:"rate",id:"rate",type:"number",size:"small",onChange:m.handleChange,value:m.values.rate,variant:"outlined"})]}),Object(O.jsxs)(g.a,{item:!0,xs:12,md:8,children:[Object(O.jsxs)("label",{htmlFor:"ssn",className:i.label,children:[Object(O.jsx)(ne.a,{className:i.icon}),"SSN"]}),Object(O.jsx)(_.a,{className:i.inputWidth,name:"ssn",id:"ssn",size:"small",type:j?"text":"password",onChange:m.handleChange,value:m.values.ssn||"",variant:"outlined",InputProps:{endAdornment:Object(O.jsx)(we.a,{classes:{root:i.iconPadding},"aria-label":"toggle password visibility",onClick:function(){u(!j)},children:j?Object(O.jsx)(Ee,{}):Object(O.jsx)(Be,{})})}})]}),Object(O.jsxs)(g.a,{item:!0,xs:12,md:8,children:[Object(O.jsxs)("label",{htmlFor:"ssn",className:i.label,children:[Object(O.jsx)(Se.a,{className:i.icon}),"Active"]}),Object(O.jsx)(Ce.a,{checked:m.values.active,onChange:function(){return m.setFieldValue("active",!m.values.active)},name:"active",color:"primary",inputProps:{"aria-label":"secondary checkbox"}})]})]})}),Object(O.jsx)(s.a,{p:2,display:"flex",justifyContent:"flex-end",children:Object(O.jsx)(B.a,{color:"primary",type:"submit",variant:"contained",disableElevation:!0,disabled:Me(m.values,o),children:c?"Loading...":"Save Changes"})})]})})};var $e=function(e){var t=e.user,a=Object(U.b)(),n=Object(U.c)((function(e){return e.employees})).isUpdating,r={address:t.address?t.address:"",rate:t.rate?t.rate:"",ssn:t.ssn?t.ssn:"",active:t.active};return Object(O.jsx)(g.a,{container:!0,spacing:3,children:Object(O.jsx)(g.a,{item:!0,lg:6,md:6,xl:3,xs:12,children:Object(O.jsx)(Ie,{user:t,handleUpdate:function(e,t){a(Object(H.e)(e,t))},isUpdating:n,init:r})})})},Te=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.level2,minHeight:"100%"}}}));t.default=function(e){var t=e.match,a=Te(),c=Object(U.b)(),j=t.params.id,u=Object(r.useState)("general"),m=Object(n.a)(u,2),h=m[0],p=m[1],g=Object(U.c)((function(e){return e.employees})),v=g.user,f=g.userJobs;return Object(r.useEffect)((function(){return c(Object(H.b)(j)),function(){c(Object(H.a)())}}),[c,j]),v?Object(O.jsx)(b.a,{className:a.root,title:"Settings",children:Object(O.jsx)(s.a,{sx:{backgroundColor:"background.default",minHeight:"100%",paddingY:8},children:Object(O.jsxs)(o.a,{maxWidth:!1,children:[Object(O.jsx)(x,{user:v}),Object(O.jsx)(s.a,{mt:3,children:Object(O.jsx)(i.a,{onChange:function(e,t){p(t)},scrollButtons:"auto",value:h,variant:"scrollable",textColor:"primary",indicatorColor:"primary",children:[{value:"general",label:"General"},{value:"jobs",label:"Jobs"},{value:"settings",label:"Settings"},{value:"security",label:"Security"}].map((function(e,t){return Object(O.jsx)(l.a,{label:e.label,value:e.value,wrapped:!0},t)}))})}),Object(O.jsx)(d.a,{}),Object(O.jsxs)(s.a,{mt:3,children:["general"===h&&Object(O.jsx)(J,{user:v}),"jobs"===h&&Object(O.jsx)(ye,{jobs:f,user:v}),"settings"===h&&Object(O.jsx)($e,{user:v}),"security"===h&&Object(O.jsx)(se,{user:v,handlePasswordChange:function(e,t){fetch("/api/v1/users/".concat(t),{method:"PUT",body:JSON.stringify({user:e}),headers:{"Content-Type":"application/json"}})}})]})]})})}):null}},415:function(e,t,a){"use strict";var n=a(5),r=a(10),c=a(0),s=a(433),o=a.n(s),i=a(310),l=a(1),d=["children"],b=Object(c.forwardRef)((function(e,t){var a=e.children,c=Object(r.a)(e,d);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(l.jsx)(i.a,{ref:t,sx:{overflowX:"auto"},children:a}):Object(l.jsx)(o.a,Object(n.a)(Object(n.a)({ref:t},c),{},{children:a}))}));t.a=b},421:function(e,t,a){"use strict";a(0);var n=a(5),r=a(16),c=a(10),s=a(3),o=a(20),i=a(226),l=a(1),d=["className","color","children"],b=Object(i.a)((function(e){return{root:{fontWeight:600,letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),borderRadius:4},primary:{color:e.palette.primary.main,backgroundColor:Object(o.a)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(o.a)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(o.a)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(o.a)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(o.a)(e.palette.warning.main,.08)}}}));function j(e){var t=e.className,a=e.color,o=e.children,i=Object(c.a)(e,d),j=b();return Object(l.jsx)("span",Object(n.a)(Object(n.a)({className:Object(s.a)(j.root,Object(r.a)({},j[a],a),t)},i),{},{children:o}))}j.defaultProps={className:"",color:"secondary"};var u=j;t.a=function(e){var t={Completed:{text:"Completed",color:"success"},Canceled:{text:"Canceled",color:"error"},"Needs Attention":{text:"Needs Attention",color:"warning"},Confirmed:{text:"Confirmed",color:"primary"}}[e.status],a=t.text,n=t.color;return Object(l.jsx)(u,{color:n,children:a})}},444:function(e,t,a){"use strict";var n=a(15),r=a.n(n),c=a(1),s=r()(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]}),"CurrencyDollar");t.a=s},537:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(0),s=(a(6),a(3)),o=a(7),i=a(231),l=a(372),d=a(389),b=a(377),j=a(366),u=a(62),m=a(171),h=a(172),p=a(42),O=a(307),x=c.createElement(h.a,null),g=c.createElement(m.a,null),v=c.createElement(m.a,null),f=c.createElement(h.a,null),y=c.forwardRef((function(e,t){var a=e.backIconButtonProps,s=e.count,o=e.nextIconButtonProps,i=e.onChangePage,l=void 0===i?function(){}:i,d=e.onPageChange,b=void 0===d?function(){}:d,j=e.page,u=e.rowsPerPage,m=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","onPageChange","page","rowsPerPage"]),h=Object(p.a)();return c.createElement("div",Object(n.a)({ref:t},m),c.createElement(O.a,Object(n.a)({onClick:function(e){l(e,j-1),b(e,j-1)},disabled:0===j,color:"inherit"},a),"rtl"===h.direction?x:g),c.createElement(O.a,Object(n.a)({onClick:function(e){l(e,j+1),b(e,j+1)},disabled:-1!==s&&j>=Math.ceil(s/u)-1,color:"inherit"},o),"rtl"===h.direction?v:f))})),w=a(117),C=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))},P=[10,25,50,100],k=c.forwardRef((function(e,t){var a,o=e.ActionsComponent,m=void 0===o?y:o,h=e.backIconButtonProps,p=e.backIconButtonText,O=void 0===p?"Previous page":p,x=e.classes,g=e.className,v=e.colSpan,f=e.component,k=void 0===f?b.a:f,N=e.count,S=e.labelDisplayedRows,_=void 0===S?C:S,z=e.labelRowsPerPage,E=void 0===z?"Rows per page:":z,B=e.nextIconButtonProps,R=e.nextIconButtonText,M=void 0===R?"Next page":R,I=e.onChangePage,$=e.onPageChange,T=e.onChangeRowsPerPage,W=e.onRowsPerPageChange,D=e.page,Y=e.rowsPerPage,A=e.rowsPerPageOptions,F=void 0===A?P:A,L=e.SelectProps,V=void 0===L?{}:L,q=Object(r.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onPageChange","onChangeRowsPerPage","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps"]),U=T||W;k!==b.a&&"td"!==k||(a=v||1e3);var H=Object(w.a)(),J=Object(w.a)(),X=V.native?"option":l.a;return c.createElement(k,Object(n.a)({className:Object(s.a)(x.root,g),colSpan:a,ref:t},q),c.createElement(j.a,{className:x.toolbar},c.createElement("div",{className:x.spacer}),F.length>1&&c.createElement(u.a,{color:"inherit",variant:"body2",className:x.caption,id:J},E),F.length>1&&c.createElement(d.a,Object(n.a)({classes:{select:x.select,icon:x.selectIcon},input:c.createElement(i.a,{className:Object(s.a)(x.input,x.selectRoot)}),value:Y,onChange:U,id:H,labelId:J},V),F.map((function(e){return c.createElement(X,{className:x.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),c.createElement(u.a,{color:"inherit",variant:"body2",className:x.caption},_({from:0===N?0:D*Y+1,to:-1!==N?Math.min(N,(D+1)*Y):(D+1)*Y,count:-1===N?-1:N,page:D})),c.createElement(m,{className:x.actions,backIconButtonProps:Object(n.a)({title:O,"aria-label":O},h),count:N,nextIconButtonProps:Object(n.a)({title:M,"aria-label":M},B),onChangePage:I,onPageChange:$,page:D,rowsPerPage:Y})))}));t.a=Object(o.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(k)},644:function(e,t,a){"use strict";var n=a(2),r=a(4),c=a(0),s=(a(6),a(3)),o=a(7),i=a(20),l=a(12),d=a(176),b=c.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.color,b=void 0===i?"secondary":i,j=e.edge,u=void 0!==j&&j,m=e.size,h=void 0===m?"medium":m,p=Object(r.a)(e,["classes","className","color","edge","size"]),O=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(s.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[u],"small"===h&&a["size".concat(Object(l.a)(h))])},c.createElement(d.a,Object(n.a)({type:"checkbox",icon:O,checkedIcon:O,classes:{root:Object(s.a)(a.switchBase,a["color".concat(Object(l.a)(b))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},p)),c.createElement("span",{className:a.track}))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(b)},876:function(e,t,a){"use strict";var n=a(88),r=a(102);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),s=(0,n(a(103)).default)(c.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}),"AssignmentInd");t.default=s},877:function(e,t,a){"use strict";var n=a(88),r=a(102);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),s=(0,n(a(103)).default)(c.createElement("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.39c.16 0 .3.07.4.2l1.1 1.45c.15.2.13.48-.05.65l-1.36 1.36c-.18.18-.48.2-.67.04a7.557 7.557 0 01-2.38-3.71c-.18-.63-.28-1.3-.28-1.99s.1-1.36.28-2c.41-1.47 1.25-2.75 2.38-3.71.2-.17.49-.14.67.04l1.36 1.36c.18.18.2.46.05.65l-1.1 1.45c-.09.13-.24.2-.4.2h-1.39c-.22.63-.35 1.3-.35 2s.13 1.38.35 2.01z"}),"ContactPhoneRounded");t.default=s}}]);