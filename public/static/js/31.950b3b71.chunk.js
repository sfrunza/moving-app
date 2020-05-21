(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[31],{1128:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),l=(t(2),t(3)),o=t(7),i=c.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.component,s=void 0===i?"div":i,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({className:Object(l.a)(t.root,o),ref:a},m))}));a.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1235:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1242:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1245:function(e,a,t){"use strict";var n=t(28),r=t(19),c=t(0),l=t.n(c),o=t(3),i=t(77),s=t(14),m=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));function u(e){var a=e.className,t=e.color,c=e.children,i=(e.style,Object(r.a)(e,["className","color","children","style"])),s=m();return l.a.createElement("span",Object.assign({className:Object(o.a)(s.root,Object(n.a)({},s[t],t),a)},i),c)}u.defaultProps={className:"",color:"secondary"},a.a=u},1259:function(e,a,t){"use strict";var n=t(30),r=t(0),c=t.n(r),l=t(77),o=t(1109),i=t(282),s=t(357),m=t(1108),u=t(1133),d=t(1111),p=t(1256),g=t.n(p),b=t(1285),f=t.n(b),E=t(1294),h=t.n(E),v=t(1326),y=t.n(v),j=t(1286),O=t.n(j),x=Object(l.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(r.memo)((function(e){var a=x(),t=Object(r.useRef)(null),l=Object(r.useState)(!1),p=Object(n.a)(l,2),b=p[0],E=p[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"More options"},c.a.createElement(i.a,Object.assign({},e,{onClick:function(){E(!0)},ref:t}),c.a.createElement(g.a,{fontSize:"small"}))),c.a.createElement(s.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){E(!1)},open:b,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(f.a,null)),c.a.createElement(d.a,{primary:"Import"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null)),c.a.createElement(d.a,{primary:"Copy"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(y.a,null)),c.a.createElement(d.a,{primary:"Export"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(O.a,null)),c.a.createElement(d.a,{primary:"Achive"}))))}))},1327:function(e,a,t){"use strict";var n=t(133);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(149)).default)(r.default.createElement("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");a.default=c},1462:function(e,a,t){"use strict";var n=t(19),r=t(0),c=t.n(r),l=t(3),o=t(77),i=t(10),s=t(1109),m=t(1124),u=t(66),d=Object(o.a)((function(e){return{root:{display:"flex",paddingLeft:20},avatar:{border:"3px solid ".concat(e.palette.background.default),marginLeft:-20,"&:hover":{zIndex:2}},more:{backgroundColor:i.a.red[600],color:i.a.common.white}}}));function p(e){var a=e.avatars,t=e.limit,r=e.className,o=Object(n.a)(e,["avatars","limit","className"]),i=d(),p=0,g=a.slice(0,t).map((function(e){return c.a.createElement(s.a,{key:++p,title:"View"},c.a.createElement(m.a,{className:i.avatar,src:e}))}));return a.length>t&&g.push(c.a.createElement(m.a,{key:++p,className:Object(l.a)(i.avatar,i.more)},c.a.createElement(u.a,{color:"inherit",variant:"subtitle2"},"+",a.length-t))),c.a.createElement("div",Object.assign({className:Object(l.a)(i.root,r)},o),g)}p.defaultProps={avatars:[],limit:3},a.a=Object(r.memo)(p)},1854:function(e,a,t){"use strict";var n=t(133);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(149)).default)(r.default.createElement("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"}),"FolderOpenOutlined");a.default=c},1855:function(e,a,t){"use strict";var n=t(133);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(149)).default)(r.default.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");a.default=c},2299:function(e,a,t){"use strict";t.r(a);var n=t(28),r=t(0),c=t.n(r),l=t(77),o=t(1116),i=t(1117),s=t(371),m=t(30),u=t(19),d=t(11),p=t(3),g=t(1129),b=t(1104),f=t(66),E=t(182),h=t(104),v=t(357),y=t(1108),j=t(1238),O=t.n(j),x=t(1196),N=[{value:"today",text:"Today"},{value:"yesterday",text:"Yesterday"},{value:"last_30_days",text:"Last 30 days"},{value:"last_year",text:"Last year"}],k=Object(l.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var C=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=k(),l=Object(r.useRef)(null),o=Object(r.useState)(!1),s=Object(m.a)(o,2),j=s[0],C=s[1],w=Object(r.useState)(N[2].text),P=Object(m.a)(w,2),S=P[0],L=P[1];return c.a.createElement(i.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(p.a)(n.root,a)},t),c.a.createElement(i.a,{item:!0},c.a.createElement(g.a,{separator:c.a.createElement(O.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(b.a,{variant:"body1",color:"inherit",to:"/app",component:d.a},"Dashboard"),c.a.createElement(f.a,{variant:"body1",color:"textPrimary"},"Reports")),c.a.createElement(f.a,{variant:"h3",color:"textPrimary"},"Here's what's happening")),c.a.createElement(i.a,{item:!0},c.a.createElement(E.a,{ref:l,onClick:function(){return C(!0)}},c.a.createElement(h.a,{fontSize:"small",className:n.actionIcon},c.a.createElement(x.a,null)),S),c.a.createElement(v.a,{anchorEl:l.current,onClose:function(){return C(!1)},open:j,PaperProps:{className:n.menu},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},N.map((function(e){return c.a.createElement(y.a,{key:e.value,onClick:function(){return L(e.text)}},e.text)})))))},w=t(5),P=t.n(w),S=t(218),L=t.n(S),T=t(1127),z=t(1132),I=t(1105),M=t(1121),A=t(1135),B=t(1139),W=t(1137),R=t(1138),D=t(1109),F=t(1157),V=t(1136),_=t(1124),Y=t(20),H=t(1242),G=t(1235),J=t(1259),K={"html-css":"/static/images/technologies/html.svg","react-js":"/static/images/technologies/react-js.svg","vue-js":"/static/images/technologies/vue-js.svg",angular:"/static/images/technologies/angular.svg",figma:"/static/images/technologies/figma.svg",sketch:"/static/images/technologies/sketch.svg"},Z=Object(l.a)((function(e){return{root:{},technology:{height:30,"& + &":{marginLeft:e.spacing(1)}},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var $=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=Z(),l=Object(G.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],g=i[1],b=Object(r.useCallback)((function(){Y.a.get("/api/reports/latest-projects").then((function(e){l.current&&g(e.data.projects)}))}),[l]);return Object(r.useEffect)((function(){b()}),[b]),s?c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(z.a,{action:c.a.createElement(J.a,null),title:"Latest Projects"}),c.a.createElement(I.a,null),c.a.createElement(L.a,null,c.a.createElement(M.a,{minWidth:900},c.a.createElement(A.a,null,c.a.createElement(B.a,null,c.a.createElement(W.a,null,c.a.createElement(R.a,{sortDirection:"desc"},c.a.createElement(D.a,{enterDelay:300,title:"Sort"},c.a.createElement(F.a,{active:!0,direction:"desc"},"Project Name"))),c.a.createElement(R.a,null,"Owner"),c.a.createElement(R.a,null,"Amount"),c.a.createElement(R.a,null,"Technology"),c.a.createElement(R.a,{align:"right"},"Date"))),c.a.createElement(V.a,null,s.map((function(e){return c.a.createElement(W.a,{hover:!0,key:e.id},c.a.createElement(R.a,null,e.title),c.a.createElement(R.a,null,c.a.createElement(M.a,{display:"flex",alignItems:"center"},c.a.createElement(_.a,{alt:"Author",className:n.avatar,src:e.author.avatar},Object(H.a)(e.author.name)),c.a.createElement(M.a,{ml:1},e.author.name))),c.a.createElement(R.a,null,e.currency,e.price),c.a.createElement(R.a,null,e.technologies.map((function(e){return c.a.createElement("img",{alt:"Tech",key:e,className:n.technology,src:K[e]})}))),c.a.createElement(R.a,{align:"right"},P()(e.createdAt).format("DD MMM, YYYY")))})))))),c.a.createElement(M.a,{p:2,display:"flex",justifyContent:"flex-end"},c.a.createElement(E.a,{component:d.a,size:"small",to:"/app/projects"},"See all",c.a.createElement(O.a,{className:n.navigateNextIcon})))):null},U=t(1854),q=t.n(U),Q=t(1245),X=Object(l.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var ee=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=X(),r=12,l=-10;return c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(M.a,{flexGrow:1},c.a.createElement(f.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"New projects"),c.a.createElement(M.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},c.a.createElement(f.a,{variant:"h3",color:"textPrimary"},r),c.a.createElement(Q.a,{className:n.label,color:l>0?"success":"error"},l>0?"+":"",l,"%"))),c.a.createElement(_.a,{className:n.avatar},c.a.createElement(q.a,null)))},ae=t(1128),te=t(290),ne=t(35),re=t(14),ce=Object(l.a)((function(){return{root:{position:"relative"}}}));var le=function(e){var a=e.className,t=e.data,n=e.labels,r=Object(u.a)(e,["className","data","labels"]),l=ce(),o=Object(ne.a)(),i={responsive:!0,maintainAspectRatio:!1,animation:!1,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{padding:20,fontColor:o.palette.text.secondary}}],yAxes:[{gridLines:{borderDash:[2],borderDashOffset:[2],color:o.palette.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:o.palette.divider},ticks:{padding:20,fontColor:o.palette.text.secondary,beginAtZero:!0,min:0,maxTicksLimit:7,callback:function(e){return e>0?"".concat(e,"K"):e}}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.background.default,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary,callbacks:{title:function(){},label:function(e){var a="Income: ".concat(e.yLabel);return e.yLabel>0&&(a+="K"),a}}}};return c.a.createElement("div",Object.assign({className:Object(p.a)(l.root,a)},r),c.a.createElement(te.d,{data:function(e){var a=e.getContext("2d").createLinearGradient(0,0,0,400);return a.addColorStop(0,Object(re.c)(o.palette.secondary.main,.2)),a.addColorStop(.9,"rgba(255,255,255,0)"),a.addColorStop(1,"rgba(255,255,255,0)"),{datasets:[{data:t,backgroundColor:a,borderColor:o.palette.secondary.main,pointBorderColor:o.palette.background.default,pointBorderWidth:3,pointRadius:6,pointBackgroundColor:o.palette.secondary.main}],labels:n}},options:i}))},oe=Object(l.a)((function(){return{root:{},chart:{height:"100%"}}}));var ie=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=oe(),r={thisWeek:{data:[],labels:[]},thisMonth:{data:[],labels:[]},thisYear:{data:[10,5,11,20,13,28,18,4,13,12,13,5],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}};return c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(z.a,{action:c.a.createElement(J.a,null),title:"Performance Over Time"}),c.a.createElement(I.a,null),c.a.createElement(ae.a,null,c.a.createElement(L.a,null,c.a.createElement(M.a,{height:375,minWidth:500},c.a.createElement(le,{className:n.chart,data:r.thisYear.data,labels:r.thisYear.labels})))))},se=t(56),me=t(620),ue=t(617),de=t(1111),pe=Object(l.a)((function(){return{root:{position:"relative"}}}));var ge=function(e){var a=e.data,t=e.labels,n=e.className,r=Object(u.a)(e,["data","labels","className"]),l=pe(),o=Object(ne.a)(),i={datasets:[{backgroundColor:o.palette.secondary.main,data:a,barThickness:12,maxBarThickness:10,barPercentage:.9,categoryPercentage:1}],labels:t},s={responsive:!0,maintainAspectRatio:!1,animation:!1,cornerRadius:20,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{stacked:!1,gridLines:{display:!1,drawBorder:!1},ticks:{display:!1}}],yAxes:[{stacked:!0,gridLines:{display:!1,drawBorder:!1},ticks:{beginAtZero:!0,display:!1}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.background.default,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary,callbacks:{legend:function(){},title:function(){},label:function(e){var a="Views: ".concat(e.yLabel);return a}}}};return c.a.createElement("div",Object.assign({className:Object(p.a)(l.root,n)},r),c.a.createElement(te.a,{data:i,options:s}))},be=Object(l.a)((function(e){return{root:{},current:{marginTop:e.spacing(.5),marginRight:e.spacing(.5)},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var fe=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=be(),l=Object(G.a)(),o=Object(r.useState)([163,166,161,159,99,163,173,166,167,183,176,172]),i=Object(m.a)(o,2),s=i[0],g=i[1],b=Object(r.useCallback)((function(){l.current&&g((function(e){var a=Object(se.a)(e);return a.shift(),a.push(0),a})),setTimeout((function(){l.current&&g((function(e){var a,t,n=Object(se.a)(e),r=(a=100,t=200,a=Math.ceil(a),t=Math.floor(t),Math.floor(Math.random()*(t-a+1))+a);return n.pop(),n.push(r),n}))}),500)}),[l]);Object(r.useEffect)((function(){setInterval((function(){return b()}),2e3)}),[b]);var h=s.map((function(e,a){return a}));return c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(z.a,{action:c.a.createElement(f.a,{color:"inherit",variant:"h3"},0===s[s.length-1]?s[s.length-2]:s[s.length-1]),classes:{action:n.current},subheader:"Page views per second",subheaderTypographyProps:{color:"textSecondary",variant:"body2"},title:"Active users",titleTypographyProps:{color:"textPrimary"}}),c.a.createElement(ge,{data:s,labels:h}),c.a.createElement(me.a,null,[{pathname:"/app/projects",views:"24"},{pathname:"/app/chat",views:"21"},{pathname:"/cart",views:"15"},{pathname:"/cart/checkout",views:"8"}].map((function(e){return c.a.createElement(ue.a,{classes:{divider:n.itemDivider},divider:!0,key:e.pathname},c.a.createElement(de.a,{primary:e.pathname,primaryTypographyProps:{color:"textSecondary",variant:"body2"}}),c.a.createElement(f.a,{color:"inherit"},e.views))}))),c.a.createElement(M.a,{p:2,display:"flex",justifyContent:"flex-end"},c.a.createElement(E.a,{component:d.a,size:"small",to:"#"},"See all",c.a.createElement(O.a,{className:n.navigateNextIcon}))))},Ee=t(1327),he=t.n(Ee),ve=Object(l.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}}));var ye=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=ve(),r="25.50",l="$";return c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(M.a,{flexGrow:1},c.a.createElement(f.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"Roi per customer"),c.a.createElement(M.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},c.a.createElement(f.a,{color:"inherit",variant:"h3"},l,r))),c.a.createElement(_.a,{className:n.avatar,color:"inherit"},c.a.createElement(he.a,null)))},je=t(1119),Oe=Object(l.a)((function(e){return{root:{padding:e.spacing(3)},progress:{margin:e.spacing(0,1),flexGrow:1}}}));var xe=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=Oe(),r=97;return c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(f.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"System Health"),c.a.createElement(M.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},c.a.createElement(f.a,{variant:"h3",color:"textPrimary"},r,"%"),c.a.createElement(je.a,{className:n.progress,value:r,color:"secondary",variant:"determinate"})))},Ne=t(282),ke=t(1855),Ce=t.n(ke),we=t(1462),Pe=Object(l.a)((function(e){return{root:{},viewButton:{marginLeft:e.spacing(2)}}}));var Se=function(e){var a=e.task,t=e.className,r=Object(u.a)(e,["task","className"]),l=Pe(),o="N/A",i=!1;if(a.deadline){var s=P()(),m=P()(a.deadline);m.isAfter(s)&&m.diff(s,"day")<3&&(o="".concat(m.diff(s,"day")," days remaining"),i=!0)}return c.a.createElement(ue.a,Object.assign({className:Object(p.a)(l.root,Object(n.a)({},l.critical,i),t)},r),c.a.createElement(de.a,{className:l.listItemText,primary:a.title,primaryTypographyProps:{variant:"h6",noWrap:!0},secondary:o}),c.a.createElement(we.a,{avatars:a.members,limit:3}),c.a.createElement(D.a,{title:"View task"},c.a.createElement(Ne.a,{className:l.viewButton,edge:"end"},c.a.createElement(Ce.a,{fontSize:"small"}))))},Le=Object(l.a)((function(){return{root:{}}}));var Te=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=Le(),l=Object(G.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],d=i[1],g=Object(r.useCallback)((function(){Y.a.get("/api/reports/tasks").then((function(e){l.current&&d(e.data.tasks)}))}),[l]);return Object(r.useEffect)((function(){g()}),[g]),s?c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(z.a,{action:c.a.createElement(J.a,null),title:"Team Tasks"}),c.a.createElement(I.a,null),c.a.createElement(L.a,null,c.a.createElement(M.a,{minWidth:400},c.a.createElement(me.a,null,s.map((function(e,a){return c.a.createElement(Se,{divider:a<s.length-1,key:e.id,task:e})})))))):null},ze=Object(l.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var Ie=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=ze(),r="24,000",l="$",o=4;return c.a.createElement(T.a,Object.assign({className:Object(p.a)(n.root,a)},t),c.a.createElement(M.a,{flexGrow:1},c.a.createElement(f.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Todays money"),c.a.createElement(M.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},c.a.createElement(f.a,{variant:"h3",color:"textPrimary"},l,r),c.a.createElement(Q.a,{className:n.label,color:o>0?"success":"error"},o>0?"+":"",o,"%"))),c.a.createElement(_.a,{className:n.avatar},c.a.createElement(he.a,null)))},Me=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},container:Object(n.a)({},e.breakpoints.up("lg"),{paddingLeft:64,paddingRight:64})}}));a.default=function(){var e=Me();return c.a.createElement(s.a,{className:e.root,title:"Dashboard"},c.a.createElement(o.a,{maxWidth:!1,className:e.container},c.a.createElement(C,null),c.a.createElement(i.a,{container:!0,spacing:3},c.a.createElement(i.a,{item:!0,lg:3,sm:6,xs:12},c.a.createElement(Ie,null)),c.a.createElement(i.a,{item:!0,lg:3,sm:6,xs:12},c.a.createElement(ee,null)),c.a.createElement(i.a,{item:!0,lg:3,sm:6,xs:12},c.a.createElement(xe,null)),c.a.createElement(i.a,{item:!0,lg:3,sm:6,xs:12},c.a.createElement(ye,null)),c.a.createElement(i.a,{item:!0,lg:3,xs:12},c.a.createElement(fe,null)),c.a.createElement(i.a,{item:!0,lg:9,xs:12},c.a.createElement(ie,null)),c.a.createElement(i.a,{item:!0,lg:5,xl:4,xs:12},c.a.createElement(Te,null)),c.a.createElement(i.a,{item:!0,lg:7,xl:8,xs:12},c.a.createElement($,null)))))}}}]);
//# sourceMappingURL=31.950b3b71.chunk.js.map