(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[47],{1235:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1241:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1657:function(e,a){},2312:function(e,a,t){"use strict";t.r(a);var n=t(24),r=t(0),c=t.n(r),l=t(77),o=t(1117),i=t(1121),s=t(1155),m=t(1149),u=t(1105),p=t(19),d=t(1235),E=t(373),b=t(27),v=t(3),g=t(5),f=t.n(g),h=t(1115),y=t(65),j=t(107),N=t(184),O=t(1844),x=t(2309),k=t(1195),w=t(1209),C=t(1200),S=t(2014),P=t(155),I=t(635),B=t(369),A=t(1123),T=t(1241),D=Object(l.a)((function(e){return{root:{padding:e.spacing(3)},helperText:{textAlign:"right",marginRight:0}}}));function M(e){var a=e.author,t=e.open,l=e.onClose,o=e.onApply,s=e.className,m=Object(b.a)(e,["author","open","onClose","onApply","className"]),u=Object(r.useState)(""),p=Object(n.a)(u,2),d=p[0],E=p[1],g=D(),f=Object(P.b)().enqueueSnackbar;return c.a.createElement(I.a,{maxWidth:"lg",onClose:l,open:t},c.a.createElement("div",Object.assign({className:Object(v.a)(g.root,s)},m),c.a.createElement(y.a,{align:"center",className:g.title,gutterBottom:!0,variant:"h3",color:"textPrimary"},"The project owner requires an introduction"),c.a.createElement(y.a,{align:"center",variant:"subtitle2",color:"textSecondary"},"Write down a short note with your application regarding why you think you'd be a good fit for this position."),c.a.createElement(i.a,{mt:3},c.a.createElement(B.a,{autoFocus:!0,FormHelperTextProps:{classes:{root:g.helperText}},fullWidth:!0,helperText:"".concat(200-d.length," characters left"),label:"Short Note",multiline:!0,onChange:function(e){e.persist(),E(e.target.value)},placeholder:"What excites you about this project?",rows:5,value:d,variant:"outlined"}),c.a.createElement(i.a,{mt:6,display:"flex",alignItems:"center"},c.a.createElement(A.a,{alt:"Author",src:a.avatar},Object(T.a)(a.name)),c.a.createElement(i.a,{ml:2},c.a.createElement(y.a,{variant:"h3",color:"textPrimary"},a.name),c.a.createElement(y.a,{variant:"subtitle2",color:"textPrimary"},a.bio)))),c.a.createElement(i.a,{mt:3,p:3},c.a.createElement(N.a,{onClick:function(){f("Request sent",{variant:"success"}),o()},variant:"contained",fullWidth:!0,color:"primary"},"Apply for a role"))))}M.defaultProps={onApply:function(){},onClose:function(){}};var z=M,W=Object(l.a)((function(e){return{root:{},badge:{display:"flex",alignItems:"center",margin:e.spacing(2)},badgeIcon:{marginRight:e.spacing(1)},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));function F(e){var a=e.project,t=e.className,l=Object(b.a)(e,["project","className"]),o=W(),s=Object(r.useState)(!1),m=Object(n.a)(s,2),u=m[0],p=m[1],d=function(){p(!1)};return c.a.createElement(h.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(v.a)(o.root,t)},l),c.a.createElement(h.a,{item:!0},c.a.createElement(y.a,{variant:"h3",color:"textPrimary"},a.title),c.a.createElement(i.a,{mx:-2,display:"flex",color:"text.secondary",alignItems:"center",flexWrap:"wrap"},c.a.createElement("div",{className:o.badge},c.a.createElement(j.a,{fontSize:"small",className:o.badgeIcon},a.active?c.a.createElement(O.a,null):c.a.createElement(x.a,null)),c.a.createElement(y.a,{variant:"body2",color:"inherit",component:"span"},a.active?"Active":"Inactive")),c.a.createElement("div",{className:o.badge},c.a.createElement(j.a,{fontSize:"small",className:o.badgeIcon},c.a.createElement(k.a,null)),c.a.createElement(y.a,{variant:"body2",color:"inherit",component:"span"},"Ending ".concat(f()(a.endDate).fromNow()))),c.a.createElement("div",{className:o.badge},c.a.createElement(j.a,{fontSize:"small",className:o.badgeIcon},c.a.createElement(w.a,null)),c.a.createElement(y.a,{variant:"body2",color:"inherit",component:"span"},"Budget: ".concat(a.price))))),c.a.createElement(h.a,{item:!0},c.a.createElement(N.a,{className:o.action},c.a.createElement(j.a,{fontSize:"small",className:o.actionIcon},c.a.createElement(C.a,null)),"Share"),c.a.createElement(N.a,{className:o.action,onClick:function(){p(!0)},variant:"contained",color:"secondary"},c.a.createElement(j.a,{fontSize:"small",className:o.actionIcon},c.a.createElement(S.a,null)),"Apply for a role"),c.a.createElement(z,{author:a.author,onApply:d,onClose:d,open:u})))}F.defaultProps={};var R=F,G=t(1128),Y=t(1129),_=t(1126),L=t(1638),q=t.n(L),H=Object(l.a)((function(e){return{root:{},markdown:{fontFamily:e.typography.fontFamily,"& p":{marginBottom:e.spacing(2)}}}}));var U=function(e){var a=e.project,t=e.className,n=Object(b.a)(e,["project","className"]),r=H();return c.a.createElement(G.a,Object.assign({className:Object(v.a)(r.root,t)},n),c.a.createElement(Y.a,null,c.a.createElement(h.a,{container:!0,spacing:3},c.a.createElement(h.a,{item:!0,xs:12,md:6},c.a.createElement(y.a,{variant:"subtitle2",color:"textSecondary"},"Project Name"),c.a.createElement(y.a,{variant:"h6",color:"textPrimary"},a.title),c.a.createElement(i.a,{mt:3},c.a.createElement(y.a,{variant:"subtitle2",color:"textSecondary"},"Technology Stack"),c.a.createElement(i.a,{mt:1},a.tags.map((function(e){return c.a.createElement(_.a,{key:e,variant:"outlined",label:e})})))))),c.a.createElement(i.a,{mt:3},c.a.createElement(y.a,{variant:"subtitle2",color:"textSecondary"},"Description"),c.a.createElement(q.a,{source:a.brief,className:r.markdown}))))},Z=t(8),J=t(1132),K=t(1104),X=t(620),Q=t(617),V=Object(l.a)((function(e){return{root:{},header:{paddingBottom:0},content:{paddingTop:0},listItem:{padding:e.spacing(2,0),justifyContent:"space-between"}}}));var $=function(e){var a=e.project,t=e.className,n=Object(b.a)(e,["project","className"]),r=V();return c.a.createElement(G.a,Object.assign({className:Object(v.a)(r.root,t)},n),c.a.createElement(J.a,{avatar:c.a.createElement(A.a,{alt:"Author",className:r.avatar,component:Z.a,src:a.author.avatar,to:"#"},Object(T.a)(a.author.name)),className:r.header,disableTypography:!0,subheader:c.a.createElement(K.a,{color:"textPrimary",component:Z.a,to:"#",underline:"none",variant:"h6"},a.author.name),title:c.a.createElement(y.a,{display:"block",variant:"overline",color:"textSecondary"},"Contest holder")}),c.a.createElement(Y.a,{className:r.content},c.a.createElement(X.a,null,c.a.createElement(Q.a,{className:r.listItem,disableGutters:!0,divider:!0},c.a.createElement(y.a,{variant:"subtitle2",color:"textPrimary"},"Deadline"),c.a.createElement(y.a,{variant:"h6",color:"textSecondary"},f()(a.deadline).format("DD MMM YYYY"))),c.a.createElement(Q.a,{className:r.listItem,disableGutters:!0,divider:!0},c.a.createElement(y.a,{variant:"subtitle2",color:"textPrimary"},"Per Project"),c.a.createElement(y.a,{variant:"h6",color:"textSecondary"},a.price," ",a.currency)),c.a.createElement(Q.a,{className:r.listItem,disableGutters:!0,divider:!0},c.a.createElement(y.a,{variant:"subtitle2",color:"textPrimary"},"Last Update"),c.a.createElement(y.a,{variant:"h6",color:"textSecondary"},f()(a.updatedAt).format("DD MMM YYYY"))))))},ee=t(1109),ae=t(1110),te=t(1135),ne=Object(l.a)((function(){return{root:{},header:{paddingBottom:0},content:{paddingTop:0}}}));var re=function(e){var a=e.members,t=e.className,n=Object(b.a)(e,["members","className"]),r=ne();return c.a.createElement(G.a,Object.assign({className:Object(v.a)(r.root,t)},n),c.a.createElement(J.a,{className:r.header,title:"Project members",titleTypographyProps:{variant:"overline"}}),c.a.createElement(Y.a,{className:r.content},c.a.createElement(X.a,null,a.map((function(e){return c.a.createElement(Q.a,{disableGutters:!0,key:e.id},c.a.createElement(ee.a,null,c.a.createElement(A.a,{alt:"Author",className:r.avatar,src:e.avatar},Object(T.a)(e.name))),c.a.createElement(ae.a,{primary:e.name,primaryTypographyProps:{variant:"h6"},secondary:e.bio}))})))),c.a.createElement(u.a,null),c.a.createElement(te.a,null,c.a.createElement(N.a,{fullWidth:!0},"Manage users")))},ce=Object(l.a)((function(){return{root:{}}}));var le=function(e){var a=e.project,t=e.className,n=Object(b.a)(e,["project","className"]),r=ce();return c.a.createElement(h.a,Object.assign({className:Object(v.a)(r.root,t),container:!0,spacing:3},n),c.a.createElement(h.a,{item:!0,lg:8,xl:9,xs:12},c.a.createElement(U,{project:a})),c.a.createElement(h.a,{item:!0,lg:4,xl:3,xs:12},c.a.createElement(re,{members:a.members}),c.a.createElement(i.a,{mt:3},c.a.createElement($,{project:a}))))},oe=t(25),ie=t(58),se=t(2291),me=t(221),ue=t.n(me),pe=t(1134),de=t(1108),Ee=t(284),be=t(1283),ve=t.n(be),ge=t(1261),fe=t.n(ge),he=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var t=1024,n=a<0?0:a,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(t));return"".concat(parseFloat((e/Math.pow(t,c)).toFixed(n))," ").concat(r[c])},ye=Object(l.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}}}}));var je=function(e){var a,t=e.className,l=Object(b.a)(e,["className"]),o=ye(),s=Object(r.useState)([]),m=Object(n.a)(s,2),u=m[0],p=m[1],d=Object(r.useCallback)((function(e){p((function(a){return Object(ie.a)(a).concat(e)}))}),[]),E=Object(se.a)({onDrop:d}),g=E.getRootProps,f=E.getInputProps,h=E.isDragActive;return c.a.createElement("div",Object.assign({className:Object(v.a)(o.root,t)},l),c.a.createElement("div",Object.assign({className:Object(v.a)((a={},Object(oe.a)(a,o.dropZone,!0),Object(oe.a)(a,o.dragActive,h),a))},g()),c.a.createElement("input",f()),c.a.createElement("div",null,c.a.createElement("img",{alt:"Select file",className:o.image,src:"/static/images/undraw_add_file2_gvbb.svg"})),c.a.createElement("div",null,c.a.createElement(y.a,{gutterBottom:!0,variant:"h3"},"Select files"),c.a.createElement(i.a,{mt:2},c.a.createElement(y.a,{color:"textPrimary",variant:"body1"},"Drop files here or click"," ",c.a.createElement(K.a,{underline:"always"},"browse")," ","thorough your machine")))),u.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ue.a,{options:{suppressScrollX:!0}},c.a.createElement(X.a,{className:o.list},u.map((function(e,a){return c.a.createElement(Q.a,{divider:a<u.length-1,key:a},c.a.createElement(pe.a,null,c.a.createElement(ve.a,null)),c.a.createElement(ae.a,{primary:e.name,primaryTypographyProps:{variant:"h5"},secondary:he(e.size)}),c.a.createElement(de.a,{title:"More options"},c.a.createElement(Ee.a,{edge:"end"},c.a.createElement(fe.a,null))))})))),c.a.createElement("div",{className:o.actions},c.a.createElement(N.a,{onClick:function(){p([])},size:"small"},"Remove all"),c.a.createElement(N.a,{color:"secondary",size:"small",variant:"contained"},"Upload files"))))},Ne=t(11),Oe=t(1118),xe=t(359),ke=t(1107),we=t(2177),Ce=t.n(we),Se=t(1282),Pe=t.n(Se),Ie=t(1662),Be=t.n(Ie),Ae=t(1284),Te=t.n(Ae),De=t(1458),Me=t.n(De),ze=Object(l.a)((function(e){return{root:{},media:{height:240},placeholder:{height:240,backgroundColor:Ne.a.blueGrey[50],display:"flex",alignItems:"center",justifyContent:"center"},insertDriveFileIcon:{height:e.spacing(6),width:e.spacing(6),fontSize:e.spacing(6)},content:{display:"flex",justifyContent:"space-between"},getAppIcon:{marignRight:e.spacing(1)},menu:{width:250,maxWidth:"100%"}}}));var We=function(e){var a=e.file,t=e.className,l=Object(b.a)(e,["file","className"]),o=ze(),i=Object(r.useRef)(null),s=Object(r.useState)(!1),m=Object(n.a)(s,2),p=m[0],d=m[1];return c.a.createElement(G.a,Object.assign({className:Object(v.a)(o.root,t)},l),a.mimeType.includes("image/")?c.a.createElement(Oe.a,{className:o.media,image:a.url}):c.a.createElement("div",{className:o.placeholder},c.a.createElement(Ce.a,{className:o.insertDriveFileIcon})),c.a.createElement(Y.a,{className:o.content},c.a.createElement("div",null,c.a.createElement(y.a,{variant:"h5",color:"textPrimary"},a.name),c.a.createElement(y.a,{variant:"subtitle2",color:"textPrimary"},he(a.size))),c.a.createElement("div",null,c.a.createElement(de.a,{title:"More options"},c.a.createElement(Ee.a,{edge:"end",onClick:function(){d(!0)},ref:i,size:"small"},c.a.createElement(fe.a,null))))),c.a.createElement(u.a,null),c.a.createElement(te.a,null,c.a.createElement(N.a,{fullWidth:!0},c.a.createElement(Pe.a,{className:o.getAppIcon}),"Download")),c.a.createElement(xe.a,{anchorEl:i.current,anchorOrigin:{vertical:"top",horizontal:"left"},classes:{paper:o.menu},onClose:function(){d(!1)},elevation:1,open:p,transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(ke.a,{divider:!0},c.a.createElement(pe.a,null,c.a.createElement(Me.a,null)),c.a.createElement(ae.a,{primary:"Rename"})),c.a.createElement(ke.a,{divider:!0},c.a.createElement(pe.a,null,c.a.createElement(Be.a,null)),c.a.createElement(ae.a,{primary:"Delete"})),c.a.createElement(ke.a,null,c.a.createElement(pe.a,null,c.a.createElement(Te.a,null)),c.a.createElement(ae.a,{primary:"Archive"}))))},Fe=Object(l.a)((function(){return{root:{}}}));var Re=function(e){var a=e.files,t=e.className,n=Object(b.a)(e,["files","className"]),r=Fe();return c.a.createElement("div",Object.assign({className:Object(v.a)(r.root,t)},n),c.a.createElement(G.a,null,c.a.createElement(Y.a,null,c.a.createElement(je,null))),c.a.createElement(h.a,{container:!0,spacing:3},a.map((function(e){return c.a.createElement(h.a,{item:!0,key:e.id,lg:4,md:4,sm:6,xs:12},c.a.createElement(We,{file:e}))}))))},Ge=t(2178),Ye=t(2179),_e=t.n(Ye),Le=t(1325),qe=t.n(Le),He=t(2180),Ue=t.n(He),Ze=Object(l.a)((function(e){return{root:{display:"flex",alignItems:"center"},card:{marginLeft:e.spacing(2),flexGrow:1,display:"flex",padding:e.spacing(2),alignItems:"center"},date:{marginLeft:"auto",flexShrink:0},avatar:{color:Ne.a.common.white},avatarBlue:{backgroundColor:Ne.a.blue[500]},avatarGreen:{backgroundColor:Ne.a.green[500]},avatarOrange:{backgroundColor:Ne.a.orange[500]},avatarIndigo:{backgroundColor:Ne.a.indigo[500]}}})),Je={upload_file:{icon:Pe.a,className:"avatarBlue"},join_team:{icon:_e.a,className:"avatarOrange"},price_change:{icon:qe.a,className:"avatarGreen"},contest_created:{icon:Ue.a,className:"avatarIndigo"}};var Ke=function(e){var a=e.activity,t=e.className,n=Object(b.a)(e,["activity","className"]),r=Ze(),l=Je[a.type];return c.a.createElement("div",Object.assign({className:Object(v.a)(r.root,t)},n),c.a.createElement(A.a,{className:Object(v.a)(r.avatar,r[l.className])},c.a.createElement(l.icon,null)),c.a.createElement(G.a,{className:r.card},c.a.createElement(y.a,{variant:"body1",color:"textPrimary"},c.a.createElement(K.a,{color:"textPrimary",component:Z.a,to:"#",variant:"h6"},a.subject)," ",a.description),c.a.createElement(y.a,{className:r.date,variant:"caption"},f()(a.createdAt).fromNow())))},Xe=Object(l.a)((function(e){return{root:{},title:{marginBottom:e.spacing(3)},group:{"& + &":{marginTop:e.spacing(4)}},activity:{position:"relative","& + &":{marginTop:e.spacing(3),"&:before":{position:"absolute",content:'" "',height:20,width:1,top:-20,left:20,backgroundColor:e.palette.divider}}}}}));var Qe=function(e){var a,t=e.activities,n=e.className,r=Object(b.a)(e,["activities","className"]),l=Xe(),o=[],i=[],s=Object(Ge.a)(t);try{for(s.s();!(a=s.n()).done;){var m=a.value;f()(m.createdAt).isSame(f()(),"day")?o.push(m):i.push(m)}}catch(u){s.e(u)}finally{s.f()}return c.a.createElement("div",Object.assign({className:Object(v.a)(l.root,n)},r),c.a.createElement(y.a,{className:l.title,variant:"h3",color:"textPrimary"},"Today"),c.a.createElement("div",{className:l.group},o.map((function(e){return c.a.createElement(Ke,{activity:e,className:l.activity,key:e.id})}))),c.a.createElement("div",{className:l.group},c.a.createElement(y.a,{className:l.title,variant:"h3",color:"textPrimary"},"Last week"),i.map((function(e){return c.a.createElement(Ke,{activity:e,className:l.activity,key:e.id})}))))},Ve=Object(l.a)((function(e){return{root:{},media:{height:125},content:{paddingTop:0},avatar:{height:64,width:64},chip:{margin:e.spacing(.5)}}}));var $e=function(e){var a=e.subscriber,t=e.className,n=Object(b.a)(e,["subscriber","className"]),r=Ve();return c.a.createElement(G.a,Object.assign({className:Object(v.a)(r.root,t)},n),c.a.createElement(Oe.a,{className:r.media,image:a.cover}),c.a.createElement(Y.a,{className:r.content},c.a.createElement(i.a,{mt:-4,mb:2,display:"flex",justifyContent:"center"},c.a.createElement(A.a,{alt:"Subscriber",className:r.avatar,component:Z.a,src:a.avatar,to:"#"})),c.a.createElement(K.a,{align:"center",color:"textPrimary",component:Z.a,display:"block",to:"#",underline:"none",variant:"h6"},a.name),c.a.createElement(y.a,{align:"center",variant:"body2",color:"textSecondary"},a.commonContacts," ","contacts in common"),c.a.createElement(i.a,{my:2},c.a.createElement(u.a,null)),a.labels.map((function(e){return c.a.createElement(_.a,{key:e,className:r.chip,label:e,variant:"outlined"})}))))},ea=Object(l.a)((function(){return{root:{}}}));var aa=function(e){var a=e.subscribers,t=e.className,n=Object(b.a)(e,["subscribers","className"]),r=ea();return c.a.createElement(h.a,Object.assign({className:Object(v.a)(r.root,t),container:!0,spacing:3},n),a.map((function(e){return c.a.createElement(h.a,{item:!0,key:e.id,lg:4,xs:12},c.a.createElement($e,{subscriber:e}))})))},ta=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=ta(),a=Object(d.a)(),t=Object(r.useState)("overview"),l=Object(n.a)(t,2),b=l[0],v=l[1],g=Object(r.useState)(null),f=Object(n.a)(g,2),h=f[0],y=f[1],j=Object(r.useCallback)((function(){p.a.get("/api/projects/projects/1").then((function(e){a.current&&y(e.data.project)}))}),[a]);return Object(r.useEffect)((function(){j()}),[j]),h?c.a.createElement(E.a,{className:e.root,title:"Project Details"},c.a.createElement(o.a,{maxWidth:"lg"},c.a.createElement(R,{project:h}),c.a.createElement(i.a,{mt:3},c.a.createElement(s.a,{onChange:function(e,a){v(a)},scrollButtons:"auto",textColor:"secondary",value:b,variant:"scrollable"},[{value:"overview",label:"Overview"},{value:"files",label:"Files"},{value:"activity",label:"Activity"},{value:"subscribers",label:"Subscribers"}].map((function(e){return c.a.createElement(m.a,{key:e.value,label:e.label,value:e.value})})))),c.a.createElement(u.a,null),c.a.createElement(i.a,{mt:3},"overview"===b&&c.a.createElement(le,{project:h}),"files"===b&&c.a.createElement(Re,{files:h.files}),"activity"===b&&c.a.createElement(Qe,{activities:h.activities}),"subscribers"===b&&c.a.createElement(aa,{subscribers:h.subscribers})))):null}}}]);
//# sourceMappingURL=47.ee2db6ec.chunk.js.map