(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[52],{1235:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1270:function(e,t,a){"use strict";t.a=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},2314:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(43),o=a(0),c=a.n(o),i=a(24),l=a.n(i),d=a(5),s=a.n(d),u=a(1540),m=a(1439),p=a(1541),f=a(1542),b=a(1543),h=a(1544),v=a(77),g=a(35),E=a(621),y=a(1116),j=a(181),O=a(1121),k=(a(1545),a(1546),a(1547),a(1548),a(287)),C=a.n(k),x=a(1235),D=a(371),w=a(19),S=a(11),N=a(3),A=a(1117),P=a(1129),T=a(1104),W=a(66),B=a(182),M=a(104),Y=a(1238),I=a.n(Y),R=a(1369),V=Object(v.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));function z(e){var t=e.className,a=e.onEventAdd,n=Object(w.a)(e,["className","onEventAdd"]),r=V();return c.a.createElement(A.a,Object.assign({className:Object(N.a)(r.root,t),container:!0,justify:"space-between",spacing:3},n),c.a.createElement(A.a,{item:!0},c.a.createElement(P.a,{separator:c.a.createElement(I.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(T.a,{variant:"body1",color:"inherit",to:"/app",component:S.a},"Dashboard"),c.a.createElement(W.a,{variant:"body1",color:"textPrimary"},"Calendar")),c.a.createElement(W.a,{variant:"h3",color:"textPrimary"},"Here's what you planned")),c.a.createElement(A.a,{item:!0},c.a.createElement(B.a,{color:"secondary",variant:"contained",onClick:a,className:r.action},c.a.createElement(M.a,{fontSize:"small",className:r.actionIcon},c.a.createElement(R.a,null)),"New Event")))}z.defaultProps={onEventAdd:function(){}};var L=a(1146),_=a(1549),F=a.n(_),H=a(1550),q=a.n(H),G=a(1551),J=a.n(G),U=a(1552),K=a.n(U),Q=(F.a,q.a,J.a,K.a,Object(v.a)((function(){return{root:{}}})));var X=function(e){var t=e.date,a=(e.view,e.onDatePrev),n=e.onDateNext,r=(e.onEventAdd,e.onViewChange,e.onDateToday),o=e.className,i=Object(w.a)(e,["date","view","onDatePrev","onDateNext","onEventAdd","onViewChange","onDateToday","className"]),l=Q();return c.a.createElement(A.a,Object.assign({className:Object(N.a)(l.root,o)},i,{alignItems:"center",container:!0,justify:"space-between",spacing:3}),c.a.createElement(A.a,{item:!0},c.a.createElement(L.a,{size:"small"},c.a.createElement(B.a,{onClick:a},"Prev"),c.a.createElement(B.a,{onClick:r},"Today"),c.a.createElement(B.a,{onClick:n},"Next"))),c.a.createElement(A.a,{item:!0,style:{flex:"0 0 55%"}},c.a.createElement(W.a,{variant:"h3",color:"textPrimary"},s()(t).format("MMMM YYYY"))))},Z=a(635),$=a(60),ee=a.n($),te=a(105),ae=a(1226),ne=a(1262),re=a(1267),oe=a(153),ce=a(367),ie=a(1113),le=a(1114),de=a(631),se=a(1105),ue=a(282),me=a(2333),pe=a(1440),fe=a(1270),be=Object(v.a)((function(e){return{root:{},confirmButton:{marginLeft:e.spacing(2)}}}));function he(e){var t=e.event,a=e.mode,n=e.onAdd,o=e.onCancel,i=e.onDelete,l=e.onEdit,d=be(),u=Object(oe.b)().enqueueSnackbar;return c.a.createElement(re.b,{initialValues:{allDay:t.allDay||!1,color:t.color||"",description:t.description||"",end:t.end||s()(),start:t.start||s()(),title:t.title||""},validationSchema:ne.f().shape({allDay:ne.b(),description:ne.h().max(5e3),end:ne.d().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:ne.d(),title:ne.h().max(255).required("Title is required")}),onSubmit:function(){var e=Object(te.a)(ee.a.mark((function e(o,c){var i,d,s,m,p;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.resetForm,d=c.setErrors,s=c.setStatus,m=c.setSubmitting,e.prev=1,p=Object(r.a)({},o),e.next=5,Object(fe.a)(200);case 5:p.id="add"===a?Object(ae.a)():t.id,i(),s({success:!0}),m(!1),u("Saved changes",{variant:"success"}),"add"===a?n(p):l(p),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),s({success:!1}),d({submit:e.t0.message}),m(!1);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,r=e.handleBlur,l=e.handleChange,s=e.handleSubmit,u=e.isSubmitting,m=e.setFieldTouched,p=e.setFieldValue,f=e.touched,b=e.values;return c.a.createElement("form",{onSubmit:s},c.a.createElement(O.a,{p:3},c.a.createElement(W.a,{align:"center",gutterBottom:!0,variant:"h3",color:"textPrimary"},"add"===a?"Add Event":"Edit Event")),c.a.createElement(O.a,{p:3},c.a.createElement(ce.a,{error:Boolean(f.title&&n.title),fullWidth:!0,helperText:f.title&&n.title,label:"Title",name:"title",onBlur:r,onChange:l,value:b.title,variant:"outlined"}),c.a.createElement(O.a,{mt:2},c.a.createElement(ce.a,{error:Boolean(f.description&&n.description),fullWidth:!0,helperText:f.description&&n.description,label:"Description",name:"description",onBlur:r,onChange:l,value:b.description,variant:"outlined"})),c.a.createElement(O.a,{mt:2},c.a.createElement(ie.a,{control:c.a.createElement(le.a,{checked:b.allDay,name:"allDay",onChange:l}),label:"All day"})),c.a.createElement(O.a,{mt:2},c.a.createElement(me.a,{fullWidth:!0,inputVariant:"outlined",label:"Start date",name:"start",onClick:function(){return m("end")},onChange:function(e){return p("start",e)},value:b.start})),c.a.createElement(O.a,{mt:2},c.a.createElement(me.a,{fullWidth:!0,inputVariant:"outlined",label:"End date",name:"end",onClick:function(){return m("end")},onChange:function(e){return p("end",e)},value:b.end})),Boolean(f.end&&n.end)&&c.a.createElement(O.a,{mt:2},c.a.createElement(de.a,{error:!0},n.end))),c.a.createElement(se.a,null),c.a.createElement(O.a,{p:2,display:"flex",alignItems:"center"},"edit"===a&&c.a.createElement(ue.a,{onClick:function(){return i(t.id)}},c.a.createElement(M.a,null,c.a.createElement(pe.a,null))),c.a.createElement(O.a,{flexGrow:1}),c.a.createElement(B.a,{onClick:o},"Cancel"),c.a.createElement(B.a,{variant:"contained",type:"submit",disabled:u,color:"secondary",className:d.confirmButton},"Confirm")))}))}he.defaultProps={event:{},onAdd:function(){},onCancel:function(){},onDelete:function(){},onEdit:function(){}};var ve=he;function ge(e){var t=e.event,a=e.mode,n=e.onAdd,r=e.onCancel,o=e.onDelete,i=e.onEdit,l=e.open,d=Object(w.a)(e,["event","mode","onAdd","onCancel","onDelete","onEdit","open"]);return c.a.createElement(Z.a,Object.assign({maxWidth:"sm",fullWidth:!0,onClose:r,open:l},d),l&&c.a.createElement(ve,{event:t,mode:a,onAdd:n,onCancel:r,onDelete:o,onEdit:i}))}ge.defaultProps={event:{},onAdd:function(){},onCancel:function(){},onDelete:function(){},onEdit:function(){},open:!1};var Ee=a(1553),ye=a.n(Ee),je=Object(v.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",width:"auto",minWidth:"1200px",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},calendar:{"& .fc-unthemed th":{borderColor:e.palette.divider},"& .fc-unthemed td":{borderColor:e.palette.divider},"& .fc-unthemed td.fc-today":{backgroundColor:e.palette.background.dark},"& .fc-head":{backgroundColor:e.palette.background.dark},"& .fc-body":{backgroundColor:e.palette.background.default},"& .fc-axis":Object(r.a)({},e.typography.body2),"& .fc-list-item-time":Object(r.a)({},e.typography.body2),"& .fc-list-item-title":Object(r.a)({},e.typography.body1),"& .fc-list-heading-main":Object(r.a)({},e.typography.h6),"& .fc-list-heading-alt":Object(r.a)({},e.typography.h6),"& .fc th":{borderColor:e.palette.divider},"& .fc-day-header":Object(r.a)(Object(r.a)({},e.typography.subtitle2),{},{fontWeight:e.typography.fontWeightMedium,color:e.palette.text.secondary,padding:e.spacing(1),backgroundColor:e.palette.background.dark}),"& .fc-day-top":Object(r.a)({},e.typography.body2),"& .fc-highlight":{backgroundColor:e.palette.background.dark},"& .fc-event:hover":{color:"#275827",textDecoration:"none"},"& .fc-event":{backgroundColor:ye.a[50],color:e.palette.secondary.contrastText,border:"none",opacity:.9,"& .fc-time":Object(r.a)(Object(r.a)({},e.typography.h6),{},{color:"inherit"}),"& .fc-title":Object(r.a)(Object(r.a)({},e.typography.body1),{},{color:"#275827",fontSize:"12px"})},"& .fc-list-empty":Object(r.a)({},e.typography.subtitle1)}}}));t.default=function(e){var t=e.history,a=je(),r=Object(o.useRef)(null),i=Object(x.a)(),d=Object(g.a)(),v=Object(E.a)(d.breakpoints.down("sm")),k=Object(o.useState)(v?"listWeek":"dayGridMonth"),w=Object(n.a)(k,2),S=(w[0],w[1],Object(o.useState)(s()().toDate())),N=Object(n.a)(S,2),A=N[0],P=N[1],T=Object(o.useState)(null),W=Object(n.a)(T,2),B=W[0],M=W[1],Y=Object(o.useState)(),I=Object(n.a)(Y,2),R=(I[0],I[1]),V=Object(o.useState)({event:null,mode:null,open:!1}),z=Object(n.a)(V,2),L=(z[0],z[1],Object(o.useCallback)((function(){C.a.get("http://localhost:3001/api/v1/jobs.json").then((function(e){var t=e.data,a=[],n="",r=[];t.map((function(e){return R(e),n=e.customer.first_name+" "+e.customer.last_name,e.status,r=s()(e.pick_up_date).format("YYYY-MM-DD"),a.push({id:e.id,title:n,date:r,description:e.move_type,customRender:!0})})),i.current&&M(a)}))}),[i]));return Object(o.useEffect)((function(){L()}),[L]),B?c.a.createElement(D.a,{className:a.root,title:"Calendar"},c.a.createElement(y.a,{maxWidth:!1},c.a.createElement(X,{date:A,onDateNext:function(){var e=r.current;if(e){var t=e.getApi();t.next(),P(t.getDate())}},onDatePrev:function(){var e=r.current;if(e){var t=e.getApi();t.prev(),P(t.getDate())}},onDateToday:function(){var e=r.current;if(e){var t=e.getApi();t.today(),P(t.getDate())}},view:""}),c.a.createElement(j.a,{className:a.calendar,component:O.a,mt:3,p:2},c.a.createElement(u.a,{allDayMaintainDuration:!0,defaultDate:A,droppable:!0,editable:!0,eventClick:function(e){console.log(t),console.log(e),t.push("/calendar/".concat(e.event.id))},eventLimit:!0,eventResizableFromStart:!0,events:B,eventRender:function(e){var t=e.event,a=e.el,n=t.extendedProps.description,r="";"Unloading Help"===n?r="U":"Loading Help"===n?r="L":"Inside Move"===n?r="I":"Moving with Storage"===n?r="\u2192 ]":"Packing Only"===n&&(r="P");var o=c.a.createElement("div",{className:"fc-title",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,t.title),c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"P"===r?c.a.createElement("img",{src:"https://freeiconshop.com/wp-content/uploads/edd/box-outline-filled.png",style:{width:"13px"}}):r),c.a.createElement("div",null,"4/2"));return l.a.render(o,a),a},header:!1,height:800,ref:r,rerenderDelay:10,selectable:!0,weekends:!0,plugins:[m.d,p.a,f.a,b.a,h.a],fixedWeekCount:!1})))):null}}}]);
//# sourceMappingURL=52.7b42df8e.chunk.js.map