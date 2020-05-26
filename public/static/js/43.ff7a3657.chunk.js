(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[43],{1236:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1243:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1246:function(e,a,t){"use strict";var n=t(29),r=t(19),l=t(0),c=t.n(l),o=t(3),i=t(77),s=t(14),m=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));function u(e){var a=e.className,t=e.color,l=e.children,i=(e.style,Object(r.a)(e,["className","color","children","style"])),s=m();return c.a.createElement("span",Object.assign({className:Object(o.a)(s.root,Object(n.a)({},s[t],t),a)},i),l)}u.defaultProps={className:"",color:"secondary"},a.a=u},1260:function(e,a,t){"use strict";var n=t(21),r=t(0),l=t.n(r),c=t(77),o=t(1110),i=t(284),s=t(360),m=t(1109),u=t(1136),d=t(1112),p=t(1257),E=t.n(p),b=t(1286),g=t.n(b),f=t(1295),y=t.n(f),v=t(1327),h=t.n(v),O=t(1287),j=t.n(O),x=Object(c.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(r.memo)((function(e){var a=x(),t=Object(r.useRef)(null),c=Object(r.useState)(!1),p=Object(n.a)(c,2),b=p[0],f=p[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:"More options"},l.a.createElement(i.a,Object.assign({},e,{onClick:function(){f(!0)},ref:t}),l.a.createElement(E.a,{fontSize:"small"}))),l.a.createElement(s.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){f(!1)},open:b,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(g.a,null)),l.a.createElement(d.a,{primary:"Import"})),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(y.a,null)),l.a.createElement(d.a,{primary:"Copy"})),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(h.a,null)),l.a.createElement(d.a,{primary:"Export"})),l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement(j.a,null)),l.a.createElement(d.a,{primary:"Achive"}))))}))},2312:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(0),l=t.n(r),c=t(77),o=t(1117),i=t(1118),s=t(374),m=t(21),u=t(19),d=t(8),p=t(3),E=t(5),b=t.n(E),g=t(1130),f=t(1135),y=t(1107),v=t(1123),h=t(65),O=t(622),j=t(619),x=t(1111),N=t(1126),k=t(1112),C=t(1106),S=t(20),P=t(1243),w=t(1236),W=t(1260),D=Object(c.a)((function(e){return{root:{},item:{padding:e.spacing(3),flexGrow:1,"&:first-of-type":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var z=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=D(),c=Object(w.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],E=i[1],z=Object(r.useCallback)((function(){S.a.get("/api/reports/customer-activity").then((function(e){c.current&&E(e.data.activities)}))}),[c]);return Object(r.useEffect)((function(){z()}),[z]),s?l.a.createElement(g.a,Object.assign({className:Object(p.a)(n.root,a)},t),l.a.createElement(f.a,{title:"Customer Activity",action:l.a.createElement(W.a,null)}),l.a.createElement(y.a,null),l.a.createElement(v.a,{display:"flex"},l.a.createElement("div",{className:n.item},l.a.createElement(h.a,{align:"center",variant:"h3",color:"textPrimary"},"15,245"),l.a.createElement(h.a,{align:"center",component:"h4",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Registered")),l.a.createElement(y.a,null),l.a.createElement("div",{className:n.item},l.a.createElement(h.a,{align:"center",variant:"h3",color:"textPrimary"},"357"),l.a.createElement(h.a,{align:"center",component:"h4",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Online"))),l.a.createElement(y.a,null),l.a.createElement(O.a,{disablePadding:!0},s.map((function(e,a){return l.a.createElement(j.a,{divider:a<s.length-1,key:e.id},l.a.createElement(x.a,null,l.a.createElement(N.a,{alt:"Customer",component:d.a,src:e.customer.avatar,to:"#"},Object(P.a)(e.customer.name))),l.a.createElement(k.a,{disableTypography:!0,primary:l.a.createElement(C.a,{color:"textPrimary",component:d.a,to:"#",underline:"none",variant:"h6"},e.customer.name),secondary:l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.description)}),l.a.createElement(h.a,{color:"textSecondary",noWrap:!0,variant:"caption"},b()(e.createdAt).fromNow()))})))):null},A=t(46),B=t(292),R=t(34);var L=function(e){var a=e.data,t=Object(u.a)(e,["data"]),n=Object(R.a)(),r={datasets:a.datasets.map((function(e){return Object(A.a)(Object(A.a)({},e),{},{borderWidth:8,borderColor:n.palette.background.default,hoverBorderColor:n.palette.background.default})})),labels:a.labels},c={responsive:!0,maintainAspectRatio:!1,animation:!1,cutoutPercentage:80,legend:{display:!1},layout:{padding:0},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:n.palette.divider,backgroundColor:n.palette.background.dark,titleFontColor:n.palette.text.primary,bodyFontColor:n.palette.text.secondary,footerFontColor:n.palette.text.secondary,callbacks:{label:function(e,a){var t=a.labels[e.index],n=a.datasets[0].data[e.index];return"".concat(t,": ").concat(n,"%")}}}};return l.a.createElement(B.c,Object.assign({data:r,options:c},t))},T=Object(c.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var I=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=T(),c=Object(w.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],d=i[1],E=Object(r.useCallback)((function(){S.a.get("/api/reports/earnings").then((function(e){c.current&&d(e.data.earnings)}))}),[c]);return Object(r.useEffect)((function(){E()}),[E]),s?l.a.createElement(g.a,Object.assign({className:Object(p.a)(n.root,a)},t),l.a.createElement(f.a,{action:l.a.createElement(W.a,null),title:"Earnings Segmentation"}),l.a.createElement(y.a,null),l.a.createElement(v.a,{p:3,position:"relative",minHeight:320},l.a.createElement(L,{data:s})),l.a.createElement(y.a,null),l.a.createElement(v.a,{display:"flex"},s.labels.map((function(e,a){return l.a.createElement("div",{key:e,className:n.item},l.a.createElement(h.a,{variant:"h4",color:"textPrimary"},s.datasets[0].data[a],"%"),l.a.createElement(h.a,{variant:"overline",color:"textSecondary"},e))})))):null},F=t(220),M=t.n(F),Y=t(14),J=Object(c.a)((function(){return{root:{position:"relative"}}}));var G=function(e){var a=e.data,t=e.labels,n=e.className,r=Object(u.a)(e,["data","labels","className"]),c=J(),o=Object(R.a)(),i={datasets:[{label:"This year",backgroundColor:o.palette.secondary.main,data:a.thisYear,barThickness:12,maxBarThickness:10,barPercentage:.5,categoryPercentage:.5},{label:"Last year",backgroundColor:Object(Y.c)(o.palette.secondary.main,.25),data:a.lastYear,barThickness:12,maxBarThickness:10,barPercentage:.5,categoryPercentage:.5}],labels:t},s={responsive:!0,maintainAspectRatio:!1,animation:!1,cornerRadius:20,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{padding:20,fontColor:o.palette.text.secondary}}],yAxes:[{gridLines:{borderDash:[2],borderDashOffset:[2],color:o.palette.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:o.palette.divider},ticks:{padding:20,fontColor:o.palette.text.secondary,beginAtZero:!0,min:0,maxTicksLimit:5,callback:function(e){return e>0?"".concat(e,"K"):e}}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.background.dark,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary,callbacks:{title:function(){},label:function(e){var a="Sales: ".concat(e.yLabel);return e.yLabel>0&&(a+="K"),a}}}};return l.a.createElement("div",Object.assign({className:Object(p.a)(c.root,n)},r),l.a.createElement(B.a,{data:i,options:s}))},$=Object(c.a)((function(){return{root:{},chart:{height:400}}}));var _=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=$();return l.a.createElement(g.a,Object.assign({className:Object(p.a)(n.root,a)},t),l.a.createElement(f.a,{action:l.a.createElement(W.a,null),title:"Financial Stats"}),l.a.createElement(y.a,null),l.a.createElement(M.a,null,l.a.createElement(v.a,{minWidth:700,pt:4,pr:2,pl:2},l.a.createElement(G,{className:n.chart,data:{thisYear:[18,16,5,8,3,14,14,16,17,19,18,20],lastYear:[12,11,4,6,2,9,9,10,11,12,13,13]},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}))))},H=t(1132),K=t(184),U=t(107),Z=t(360),q=t(1109),Q=t(1239),V=t.n(Q),X=t(1197),ee=[{value:"today",text:"Today"},{value:"yesterday",text:"Yesterday"},{value:"last_30_days",text:"Last 30 days"},{value:"last_year",text:"Last year"}],ae=Object(c.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));function te(e){var a=e.className,t=Object(u.a)(e,["className"]),n=ae(),c=Object(r.useRef)(null),o=Object(r.useState)(!1),s=Object(m.a)(o,2),E=s[0],b=s[1],g=Object(r.useState)(ee[2].text),f=Object(m.a)(g,2),y=f[0],v=f[1];return l.a.createElement(i.a,Object.assign({className:Object(p.a)(n.root,a),container:!0,justify:"space-between",spacing:3},t),l.a.createElement(i.a,{item:!0},l.a.createElement(H.a,{separator:l.a.createElement(V.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(C.a,{variant:"body1",color:"inherit",to:"/app",component:d.a},"Dashboard"),l.a.createElement(h.a,{variant:"body1",color:"textPrimary"},"Reports")),l.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"Finance Overview")),l.a.createElement(i.a,{item:!0},l.a.createElement(K.a,{ref:c,onClick:function(){return b(!0)}},l.a.createElement(U.a,{fontSize:"small",className:n.actionIcon},l.a.createElement(X.a,null)),y),l.a.createElement(Z.a,{anchorEl:c.current,onClose:function(){return b(!1)},open:E,PaperProps:{className:n.menu},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},ee.map((function(e){return l.a.createElement(q.a,{key:e.value,onClick:function(){return v(e.text)}},e.text)})))))}te.defaultProps={};var ne=te,re=t(1138),le=t(1142),ce=t(1140),oe=t(1141),ie=t(1110),se=t(1160),me=t(1139),ue=t(1246),de={complete:"success",pending:"warning",rejected:"error"},pe=Object(c.a)((function(e){return{root:{},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var Ee=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=pe(),c=Object(w.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],E=i[1],h=Object(r.useCallback)((function(){S.a.get("/api/reports/latest-orders").then((function(e){c.current&&E(e.data.orders)}))}),[c]);return Object(r.useEffect)((function(){h()}),[h]),s?l.a.createElement(g.a,Object.assign({className:Object(p.a)(n.root,a)},t),l.a.createElement(f.a,{action:l.a.createElement(W.a,null),title:"Latest Orders"}),l.a.createElement(y.a,null),l.a.createElement(M.a,null,l.a.createElement(v.a,{minWidth:700},l.a.createElement(re.a,null,l.a.createElement(le.a,null,l.a.createElement(ce.a,null,l.a.createElement(oe.a,{sortDirection:"desc"},l.a.createElement(ie.a,{enterDelay:300,title:"Sort"},l.a.createElement(se.a,{active:!0,direction:"desc"},"Order ID"))),l.a.createElement(oe.a,null,"Customer"),l.a.createElement(oe.a,null,"Items"),l.a.createElement(oe.a,null,"Total"),l.a.createElement(oe.a,null,"Status"),l.a.createElement(oe.a,{align:"right"},"Date"))),l.a.createElement(me.a,null,s.map((function(e){return l.a.createElement(ce.a,{hover:!0,key:e.id},l.a.createElement(oe.a,null,e.ref),l.a.createElement(oe.a,null,e.customer.name),l.a.createElement(oe.a,null,e.items),l.a.createElement(oe.a,null,e.currency,e.value),l.a.createElement(oe.a,null,l.a.createElement(ue.a,{color:de[e.status]},e.status)),l.a.createElement(oe.a,{align:"right"},b()(e.createdAt).format("DD MMM, YYYY hh:mm:ss")))})))))),l.a.createElement(v.a,{p:2,display:"flex",justifyContent:"flex-end"},l.a.createElement(K.a,{component:d.a,size:"small",to:"/app/management/orders"},"See all",l.a.createElement(V.a,{className:n.navigateNextIcon})))):null},be=t(11),ge=Object(c.a)((function(e){return{root:{width:56,height:56},circle1:{stroke:"dark"===e.palette.type?"rgba(0,0,0,0.15)":"rgba(0,0,0,0.05)",fill:"none",strokeWidth:4},circle2:{stroke:e.palette.secondary.main,fill:"none",strokeWidth:4,animation:"$progress 1s ease-out forwards"},"@keyframes progress":{"0%":{strokeDasharray:"0 100"}}}}));var fe=function(e){var a=e.value,t=e.className,n=Object(u.a)(e,["value","className"]),r=ge();return l.a.createElement("div",Object.assign({className:Object(p.a)(r.root,t)},n),l.a.createElement("svg",{viewBox:"0 0 36 36"},l.a.createElement("path",{className:r.circle1,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),l.a.createElement("path",{className:r.circle2,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(a,", 100")})))},ye=Object(c.a)((function(e){return{root:{},image:{flexShrink:0,height:56,width:56},subscriptions:{fontWeight:e.typography.fontWeightMedium},value:{color:be.a.green[600],fontWeight:e.typography.fontWeightMedium},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var ve=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=ye(),c=Object(w.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],E=i[1],b=Object(r.useCallback)((function(){S.a.get("/api/reports/profitable-products").then((function(e){c.current&&E(e.data.products)}))}),[c]);return Object(r.useEffect)((function(){b()}),[b]),s?l.a.createElement(g.a,Object.assign({className:Object(p.a)(n.root,a)},t),l.a.createElement(f.a,{action:l.a.createElement(W.a,null),title:"Most Profitable Products"}),l.a.createElement(y.a,null),l.a.createElement(M.a,null,l.a.createElement(v.a,{minWidth:700},l.a.createElement(re.a,null,l.a.createElement(me.a,null,s.map((function(e){return l.a.createElement(ce.a,{hover:!0,key:e.id},l.a.createElement(oe.a,null,l.a.createElement(v.a,{display:"flex",alignItems:"center"},l.a.createElement("img",{alt:"Product",className:n.image,src:e.image}),l.a.createElement(v.a,{ml:2},l.a.createElement(h.a,{variant:"h6",color:"textPrimary"},e.name),l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},l.a.createElement("span",{className:n.subscriptions},e.subscriptions)," ","Active")))),l.a.createElement(oe.a,null,l.a.createElement(h.a,{variant:"h6",color:"textPrimary"},"Price"),l.a.createElement(h.a,{noWrap:!0,variant:"body2",color:"textSecondary"},l.a.createElement("span",{className:n.value},e.currency,e.price)," ","monthly")),l.a.createElement(oe.a,null,l.a.createElement(v.a,{display:"flex",alignItems:"center",justifyContent:"flex-end"},l.a.createElement(v.a,{mr:2},l.a.createElement(h.a,{align:"right",variant:"h6",color:"textPrimary"},e.progress,"%"),l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"Conversion Rate")),l.a.createElement(fe,{value:e.progress}))))})))))),l.a.createElement(v.a,{p:2,display:"flex",justifyContent:"flex-end"},l.a.createElement(K.a,{component:d.a,size:"small",to:"#"},"See all",l.a.createElement(V.a,{className:n.navigateNextIcon})))):null},he=Object(c.a)((function(e){var a;return{root:{},item:(a={padding:e.spacing(3),textAlign:"center"},Object(n.a)(a,e.breakpoints.up("md"),{"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}),Object(n.a)(a,e.breakpoints.down("sm"),{"&:not(:last-of-type)":{borderBottom:"1px solid ".concat(e.palette.divider)}}),a),valueContainer:{display:"flex",alignItems:"center",justifyContent:"center"},label:{marginLeft:e.spacing(1)}}}));var Oe=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=he(),r="854,355.00",c="373,250.50",o="123,532.00",s="26,000";return l.a.createElement(g.a,Object.assign({className:Object(p.a)(n.root,a)},t),l.a.createElement(i.a,{alignItems:"center",container:!0,justify:"space-between"},l.a.createElement(i.a,{className:n.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(h.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Total Income"),l.a.createElement("div",{className:n.valueContainer},l.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"$",r),l.a.createElement(ue.a,{className:n.label,color:"success"},"+25%"))),l.a.createElement(i.a,{className:n.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(h.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Total Expanses"),l.a.createElement("div",{className:n.valueContainer},l.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"$",c),l.a.createElement(ue.a,{className:n.label,color:"success"},"+12%"))),l.a.createElement(i.a,{className:n.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(h.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Net Profit"),l.a.createElement("div",{className:n.valueContainer},l.a.createElement(h.a,{variant:"h3",color:"textPrimary"},o),l.a.createElement(ue.a,{className:n.label,color:"error"},"-20%"))),l.a.createElement(i.a,{className:n.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(h.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Active Subscriptions"),l.a.createElement("div",{className:n.valueContainer},l.a.createElement(h.a,{variant:"h3",color:"textPrimary"},s)))))},je=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column"},avatar:{fontSize:14,fontWeight:e.typography.fontWeightBold,color:e.palette.common.white}}}));var xe=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=je(),c=Object(w.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],d=i[1],E=Object(r.useCallback)((function(){S.a.get("/api/reports/top-referrals").then((function(e){c.current&&d(e.data.referrals)}))}),[c]);return Object(r.useEffect)((function(){E()}),[E]),s?l.a.createElement(g.a,Object.assign({className:Object(p.a)(n.root,a)},t),l.a.createElement(f.a,{action:l.a.createElement(W.a,null),title:"Top Referrals"}),l.a.createElement(y.a,null),l.a.createElement(O.a,{disablePadding:!0},s.map((function(e,a){return l.a.createElement(j.a,{divider:a<s.length-1,key:e.name},l.a.createElement(x.a,null,l.a.createElement(N.a,{className:n.avatar,size:"small",style:{backgroundColor:e.color}},e.initials)),l.a.createElement(k.a,{primary:e.name,primaryTypographyProps:{variant:"h6"}}),l.a.createElement(h.a,{variant:"body2",color:"textSecondary"},e.value))})))):null},Ne=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},container:Object(n.a)({},e.breakpoints.up("lg"),{paddingLeft:64,paddingRight:64})}}));a.default=function(){var e=Ne();return l.a.createElement(s.a,{className:e.root,title:"Dashboard Alternative"},l.a.createElement(o.a,{maxWidth:!1,className:e.container},l.a.createElement(ne,null),l.a.createElement(i.a,{container:!0,spacing:3},l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(Oe,null)),l.a.createElement(i.a,{item:!0,lg:8,xl:9,xs:12},l.a.createElement(_,null)),l.a.createElement(i.a,{item:!0,lg:4,xl:3,xs:12},l.a.createElement(I,null)),l.a.createElement(i.a,{item:!0,lg:8,xs:12},l.a.createElement(Ee,null)),l.a.createElement(i.a,{item:!0,lg:4,xs:12},l.a.createElement(z,null)),l.a.createElement(i.a,{item:!0,lg:8,xs:12},l.a.createElement(ve,null)),l.a.createElement(i.a,{item:!0,lg:4,xs:12},l.a.createElement(xe,null)))))}}}]);
//# sourceMappingURL=43.ff7a3657.chunk.js.map