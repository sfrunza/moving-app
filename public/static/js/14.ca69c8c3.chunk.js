(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{449:function(e,t,a){"use strict";var n=a(17),o=a.n(n),c=a(1),i=o()(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M4 6h16M4 12h8m-8 6h16"})}),"Menu");t.a=i},476:function(e,t,a){"use strict";var n=a(0),o=a(39),c=a(14),i=a(219),r=a(41),l=a(300),s=a(387),d=a(218),h=a(303),b=a(66),p=a(364),j=a(363),u=a(960),m=a(350),x=a(347),g=a(144),O=a(17),f=a.n(O),v=a(1),y=f()(Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}),"Settings"),w=a(161),k=a(22),C=Object(i.a)((function(e){return{root:Object(c.a)({},e.breakpoints.down("md"),{}),avatar:{height:30,width:30,border:"none",boxShadow:e.shadows[1],padding:1,"& img":{borderRadius:"50%"}},popover:{minWidth:250},button:{margin:e.spacing(1,2)}}})),S=function(e){var t=e.handleSignOut,a=C(),c=Object(r.a)(),i=Object(n.useState)(null),O=Object(o.a)(i,2),f=O[0],S=O[1],z=Object(k.c)((function(e){return e.auth})).user,M=function(){S(null)};return Object(v.jsxs)("div",{className:a.root,children:[Object(v.jsx)(l.a,{"aria-controls":"user-menu","aria-haspopup":"true",disableRipple:!0,onClick:function(e){S(e.currentTarget)},children:Object(v.jsx)(s.a,{alt:z.last_name,classes:{root:a.avatar}})}),Object(v.jsxs)(d.a,{id:"user-menu",PaperProps:{className:a.popover},anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:M,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(v.jsx)(h.a,{p:2,children:Object(v.jsx)(b.a,{color:"textPrimary",variant:"subtitle2",children:z.email})}),Object(v.jsx)(p.a,{}),Object(v.jsxs)(j.a,{component:w.a,to:"/dashboard",onClick:M,children:[Object(v.jsx)(u.a,{style:{color:c.palette.text.secondary},children:Object(v.jsx)(g.a,{fontSize:"small"})}),Object(v.jsx)(m.a,{primary:Object(v.jsx)(b.a,{color:"textPrimary",variant:"subtitle2",children:"Dashboard"})})]}),Object(v.jsxs)(j.a,{onClick:M,component:w.a,to:"/dashboard/users/".concat(z.id),children:[Object(v.jsx)(u.a,{style:{color:c.palette.text.secondary},children:Object(v.jsx)(y,{fontSize:"small"})}),Object(v.jsx)(m.a,{primary:Object(v.jsx)(b.a,{color:"textPrimary",variant:"subtitle2",children:"Settings"})})]}),Object(v.jsx)("div",{className:a.button,children:Object(v.jsx)(x.a,{onClick:t,color:"primary",variant:"outlined",fullWidth:!0,children:"Log out"})})]})]})},z=a(93);t.a=function(e){var t=e.history,a=Object(k.b)(),n=t.location.pathname;return Object(v.jsx)(S,{handleSignOut:function(){a(Object(z.b)(t))},path:n})}},478:function(e,t,a){"use strict";var n=a(17),o=a.n(n),c=a(1),i=o()(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),"Users");t.a=i},479:function(e,t,a){"use strict";var n=a(17),o=a.n(n),c=a(1),i=o()(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]}),"CurrencyDollar");t.a=i},968:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(14),c=a(0),i=a(217),r=a(5),l=a(10),s=a(961),d=a(357),h=a(349),b=a(975),p=a(297),j=a(300),u=a(66),m=a(219),x=a(476),g=a(35),O=a(161),f=a(2),v=a(4),y=(a(6),a(3)),w=a(7),k=a(21),C=a(11),S=a(191),z=c.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.color,i=void 0===o?"secondary":o,r=e.edge,l=void 0!==r&&r,s=e.size,d=void 0===s?"medium":s,h=Object(v.a)(e,["classes","className","color","edge","size"]),b=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(y.a)(a.root,n,{start:a.edgeStart,end:a.edgeEnd}[l],"small"===d&&a["size".concat(Object(C.a)(d))])},c.createElement(S.a,Object(f.a)({type:"checkbox",icon:b,checkedIcon:b,classes:{root:Object(y.a)(a.switchBase,a["color".concat(Object(C.a)(i))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},h)),c.createElement("span",{className:a.track}))})),M=Object(w.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(k.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(k.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(z),I=a(343),N=a(187),$=a(22),R=a(1),P=["classes"],B=Object(w.a)((function(e){return{root:{width:32,height:16,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:14,height:14,boxShadow:"1px 1px 5px 0 rgb(1 1 1 / 25%)"},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(l.a)(e,P);return Object(R.jsx)(M,Object(r.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),L=function(){var e=Object($.c)((function(e){return e.theme})).isDark,t=Object($.b)();return Object(R.jsxs)(I.a,{container:!0,alignItems:"center",children:[Object(R.jsx)(u.a,{variant:"body2",children:"Dark"}),Object(R.jsx)(I.a,{item:!0,children:Object(R.jsx)(B,{checked:e,onChange:function(){t(Object(N.a)())},name:"checked"})})]})},E=a(449),G=["onSidebarMobileOpen"],T=Object(i.a)(s.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.background.navbar,boxShadow:"none",color:t.palette.primary.contrastText,zIndex:t.zIndex.drawer+100}})),W=Object(m.a)((function(e){return{root:{overflow:"hidden",height:64,justifyContent:"center",background:e.palette.background.default,backdropFilter:"saturate(180%) blur(20px)",borderBottom:"1px solid ".concat(e.palette.divider)},flexGrow:{flexGrow:1},navigationContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:e.spacing(0)},toolbar:{width:"100%",margin:"0 auto",padding:e.spacing(0,2)},listItem:Object(o.a)({width:"auto"},e.breakpoints.down("sm"),{padding:e.spacing(0)}),listItemText:{flex:"0 0 auto",textDecoration:"none",whiteSpace:"nowrap",fontWeight:500,display:"flex",alignItems:"center"},iconButton:{padding:0,"&:hover":{background:"transparent"}},listItemLogin:{marginRight:e.spacing(1)}}})),A=function(e){var t=e.onSidebarMobileOpen,a=Object(l.a)(e,G),n=Object(g.g)(),o=W();return Object(R.jsx)(T,Object(r.a)(Object(r.a)({},a),{},{className:o.root,children:Object(R.jsx)(d.a,{disableGutters:!0,className:o.toolbar,children:Object(R.jsxs)(h.a,{className:o.navigationContainer,children:[Object(R.jsx)(b.a,{lgUp:!0,children:Object(R.jsx)(p.a,{className:o.listItem,children:Object(R.jsx)(j.a,{className:o.iconButton,onClick:t,"aria-label":"Menu",children:Object(R.jsx)(E.a,{className:o.listItemText})})})}),Object(R.jsx)(b.a,{lgUp:!0,children:Object(R.jsx)("div",{className:o.flexGrow})}),Object(R.jsx)(p.a,{className:o.listItem,children:Object(R.jsx)(u.a,{variant:"body1",color:"textPrimary",className:o.listItemText,component:O.a,to:"/",children:"Company Logo"})}),Object(R.jsx)("div",{className:o.flexGrow}),Object(R.jsx)(b.a,{smDown:!0,children:Object(R.jsx)(p.a,{className:o.listItem,children:Object(R.jsx)(L,{})})}),Object(R.jsx)(p.a,{className:o.listItem,children:Object(R.jsx)(x.a,{history:n})})]})})}))},D=a(29),V=a(41),X=a(303),U=a(387),Y=a(962),F=a(153),H=a(478),J=c.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.color,i=void 0===o?"default":o,r=e.component,l=void 0===r?"li":r,s=e.disableGutters,d=void 0!==s&&s,h=e.disableSticky,b=void 0!==h&&h,p=e.inset,j=void 0!==p&&p,u=Object(v.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return c.createElement(l,Object(f.a)({className:Object(y.a)(a.root,n,"default"!==i&&a["color".concat(Object(C.a)(i))],j&&a.inset,!b&&a.sticky,!d&&a.gutters),ref:t},u))})),_=Object(w.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(J),q=a(347),K=a(352),Q=a(17),Z=a.n(Q)()(Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(R.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ChevronDown"),ee=a(87),te=["active","children","depth","icon","info","open","path","title"],ae=function(e){var t=e.active,a=e.children,o=e.depth,i=e.icon,s=e.info,d=e.open,h=e.path,b=e.title,j=Object(l.a)(e,te),u=Object(c.useState)(d),m=Object(n.a)(u,2),x=m[0],g=m[1],O=Object(V.a)(),f=16;return o>0&&(f=32+8*o),a?Object(R.jsxs)(p.a,Object(r.a)(Object(r.a)({disableGutters:!0,style:{display:"block",paddingY:0}},j),{},{children:[Object(R.jsxs)(q.a,{endIcon:x?Object(R.jsx)(Z,{fontSize:"small"}):Object(R.jsx)(ee.a,{fontSize:"small"}),onClick:function(){g((function(e){return!e}))},startIcon:i,style:{color:O.palette.text.secondary,fontWeight:"fontWeightMedium",justifyContent:"flex-start",paddingLeft:"".concat(f,"px"),paddingRight:"8px",paddingY:"12px",textAlign:"left",textTransform:"none",width:"100%"},variant:"text",children:[Object(R.jsx)(X.a,{style:{flexGrow:1},children:b}),s]}),Object(R.jsx)(K.a,{in:x,children:a})]})):Object(R.jsx)(p.a,{disableGutters:!0,style:{display:"flex",paddingY:0},children:Object(R.jsxs)(q.a,{component:h&&D.c,startIcon:i,style:Object(r.a)({color:O.palette.text.secondary,justifyContent:"flex-start",textAlign:"left",paddingLeft:"".concat(f,"px"),paddingRight:"8px",paddingY:"12px",textTransform:"none",width:"100%"},t&&{color:O.palette.primary.main,fontWeight:"bold","& svg":{color:O.palette.primary.main}}),variant:"text",to:h,children:[Object(R.jsx)(X.a,{style:{flexGrow:1},children:b}),s]})})};ae.defaultProps={active:!1,open:!1};var ne=ae,oe=["items","pathname","title"],ce=function(e){var t=e.depth,a=void 0===t?0:t,n=e.items,o=e.pathname;return Object(R.jsx)(h.a,{disablePadding:!0,children:n.reduce((function(e,t){return ie({acc:e,item:t,pathname:o,depth:a})}),[])})},ie=function(e){var t=e.acc,a=e.pathname,n=e.item,o=e.depth,c="".concat(n.title,"-").concat(o),i=n.path===a;if(n.children){var r=n.path===a;t.push(Object(R.jsx)(ne,{active:r,depth:o,icon:n.icon,info:n.info,open:r,path:n.path,title:n.title,children:ce({depth:o+1,items:n.children,pathname:a})},c))}else t.push(Object(R.jsx)(ne,{active:i,depth:o,icon:n.icon,info:n.info,path:n.path,title:n.title},c));return t},re=function(e){var t=e.items,a=e.pathname,n=e.title,o=Object(l.a)(e,oe),c=Object(V.a)();return Object(R.jsx)(h.a,Object(r.a)(Object(r.a)({subheader:Object(R.jsx)(_,{disableGutters:!0,disableSticky:!0,style:{color:c.palette.text.primary,fontSize:"0.75rem",lineHeight:2.5,fontWeight:700,textTransform:"uppercase"},children:n})},o),{},{children:ce({items:t,pathname:a})}))},le=a(423),se=a.n(le),de=["children"],he=Object(c.forwardRef)((function(e,t){var a=e.children,n=Object(l.a)(e,de);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(R.jsx)(X.a,{ref:t,style:{overflowX:"auto"},children:a}):Object(R.jsx)(se.a,Object(r.a)(Object(r.a)({ref:t},n),{},{children:a}))})),be=a(120),pe=a(479),je=[{title:"",items:[{title:"Calendar",path:"/dashboard/calendar",icon:Object(R.jsx)(F.a,{fontSize:"small"})},{title:"Jobs",path:"/dashboard/jobs",icon:Object(R.jsx)(be.a,{fontSize:"small"})},{title:"Customers",path:"/dashboard/customers",icon:Object(R.jsx)(H.a,{fontSize:"small"})},{title:"Employees",path:"/dashboard/employees",icon:Object(R.jsx)(H.a,{fontSize:"small"})},{title:"Rates",path:"/dashboard/rates",icon:Object(R.jsx)(pe.a,{fontSize:"small"})}]}],ue=function(e){var t=e.onMobileClose,a=e.openMobile,n=Object(g.h)(),o=Object(V.a)(),i=Object($.c)((function(e){return e.auth})).user;Object(c.useEffect)((function(){a&&t&&t()}),[n.pathname]);var l=Object(R.jsx)(X.a,{style:{display:"flex",flexDirection:"column",height:"100%"},children:Object(R.jsxs)(he,{options:{suppressScrollX:!0},children:[Object(R.jsx)(X.a,{p:2,children:Object(R.jsxs)(X.a,{style:{alignItems:"center",backgroundColor:o.palette.background.level2,borderRadius:8,display:"flex",overflow:"hidden",padding:16},children:[Object(R.jsx)(D.b,{to:"/dashboard/users/".concat(i.id),children:Object(R.jsx)(U.a,{style:{cursor:"pointer",height:48,width:48}})}),Object(R.jsxs)(X.a,{ml:2,children:[Object(R.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:i.first_name+" "+i.last_name}),Object(R.jsx)(u.a,{color:"textSecondary",variant:"body2",children:null===i||void 0===i?void 0:i.role})]})]})}),Object(R.jsx)(X.a,{p:2,children:je.map((function(e){return Object(R.jsx)(re,Object(r.a)({pathname:n.pathname,style:{marginTop:24}},e),e.title)}))})]})});return Object(R.jsxs)("div",{children:[Object(R.jsx)(b.a,{lgUp:!0,children:Object(R.jsx)(Y.a,{anchor:"left",onClose:t,open:a,PaperProps:{style:{width:250}},variant:"temporary",children:l})}),Object(R.jsx)(b.a,{mdDown:!0,children:Object(R.jsx)(Y.a,{anchor:"left",open:!0,PaperProps:{style:{height:"calc(100% - 64px)",top:"64px",width:280}},variant:"permanent",children:l})})]})},me=Object(i.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.level2,display:"flex",height:"100%",overflow:"hidden",width:"100%"}})),xe=Object(i.a)("div")((function(e){var t=e.theme;return Object(o.a)({display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:"40px"},t.breakpoints.up("lg"),{paddingLeft:"280px"})})),ge=Object(i.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden"}),Oe=Object(i.a)("div")({flex:"1 1 auto",height:"100%",overflow:"auto",position:"relative",WebkitOverflowScrolling:"touch"});t.default=function(e){var t=e.children,a=Object(c.useState)(!1),o=Object(n.a)(a,2),i=o[0],r=o[1],l=Object($.c)((function(e){return e.auth})).isLoggingOut;return Object(R.jsxs)(me,{children:[Object(R.jsx)(A,{onSidebarMobileOpen:function(){return r(!0)}}),Object(R.jsx)(ue,{onMobileClose:function(){return r(!1)},openMobile:i}),Object(R.jsx)(xe,{children:Object(R.jsx)(ge,{children:Object(R.jsx)(Oe,{children:l?"Loading":t})})})]})}}}]);