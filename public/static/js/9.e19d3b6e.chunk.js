(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[9],{440:function(e,t,a){"use strict";var c=a(15),r=a.n(c),o=a(1),n=r()(Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(o.jsx)("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),Object(o.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]}),"CurrencyDollar");t.a=n},449:function(e,t,a){"use strict";var c=a(15),r=a.n(c),o=a(1),n=r()(Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M4 6h16M4 12h8m-8 6h16"})}),"Menu");t.a=n},450:function(e,t,a){"use strict";var c=a(15),r=a.n(c),o=a(1),n=r()(Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),"Users");t.a=n},475:function(e,t,a){"use strict";var c=a(0),r=a(36),o=a(10),n=a(227),i=a(42),l=a(310),s=a(403),d=a(224),b=a(314),h=a(62),p=a(378),j=a(377),u=a(578),m=a(362),g=a(360),x=a(152),O=a(15),v=a.n(O),f=a(1),y=v()(Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(f.jsx)("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}),"Settings"),k=a(170),w=a(22),M=Object(n.a)((function(e){return{root:Object(o.a)({},e.breakpoints.down("md"),{}),avatar:{height:30,width:30,border:"none",boxShadow:e.shadows[1],padding:1,"& img":{borderRadius:"50%"}},popover:{minWidth:250},button:{margin:e.spacing(1,2)}}})),A=function(e){var t=e.handleSignOut,a=M(),o=Object(i.a)(),n=Object(c.useState)(null),O=Object(r.a)(n,2),v=O[0],A=O[1],I=Object(w.c)((function(e){return e.auth})).user,z=function(){A(null)};return Object(f.jsxs)("div",{className:a.root,children:[Object(f.jsx)(l.a,{"aria-controls":"user-menu","aria-haspopup":"true","aria-label":"Go to account",disableRipple:!0,onClick:function(e){A(e.currentTarget)},children:Object(f.jsx)(s.a,{alt:I.last_name,classes:{root:a.avatar}})}),Object(f.jsxs)(d.a,{id:"user-menu",PaperProps:{className:a.popover},anchorEl:v,keepMounted:!0,open:Boolean(v),onClose:z,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(f.jsx)(b.a,{p:2,children:Object(f.jsx)(h.a,{color:"textPrimary",variant:"subtitle2",children:I.email})}),Object(f.jsx)(p.a,{}),Object(f.jsxs)(j.a,{component:k.a,to:"/dashboard",onClick:z,children:[Object(f.jsx)(u.a,{style:{color:o.palette.text.secondary},children:Object(f.jsx)(x.a,{fontSize:"small"})}),Object(f.jsx)(m.a,{primary:Object(f.jsx)(h.a,{color:"textPrimary",variant:"subtitle2",children:"Dashboard"})})]}),Object(f.jsxs)(j.a,{onClick:z,component:k.a,to:"/dashboard/users/".concat(I.id),children:[Object(f.jsx)(u.a,{style:{color:o.palette.text.secondary},children:Object(f.jsx)(y,{fontSize:"small"})}),Object(f.jsx)(m.a,{primary:Object(f.jsx)(h.a,{color:"textPrimary",variant:"subtitle2",children:"Settings"})})]}),Object(f.jsx)("div",{className:a.button,children:Object(f.jsx)(g.a,{onClick:t,color:"primary",variant:"outlined",fullWidth:!0,children:"Log out"})})]})]})},I=a(95);t.a=function(e){var t=e.history,a=Object(w.b)(),c=t.location.pathname;return Object(f.jsx)(A,{handleSignOut:function(){a(Object(I.b)(t))},path:c})}},579:function(e,t,a){"use strict";var c=a(2),r=a(4),o=a(0),n=(a(6),a(3)),i=a(7),l=a(20),s=a(14),d=a(182),b=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.color,b=void 0===l?"secondary":l,h=e.edge,p=void 0!==h&&h,j=e.size,u=void 0===j?"medium":j,m=Object(r.a)(e,["classes","className","color","edge","size"]),g=o.createElement("span",{className:a.thumb});return o.createElement("span",{className:Object(n.a)(a.root,i,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===u&&a["size".concat(Object(s.a)(u))])},o.createElement(d.a,Object(c.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(n.a)(a.switchBase,a["color".concat(Object(s.a)(b))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},m)),o.createElement("span",{className:a.track}))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(b)},580:function(e,t,a){"use strict";var c=a(2),r=a(4),o=a(0),n=(a(6),a(3)),i=a(7),l=a(14),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.color,d=void 0===s?"default":s,b=e.component,h=void 0===b?"li":b,p=e.disableGutters,j=void 0!==p&&p,u=e.disableSticky,m=void 0!==u&&u,g=e.inset,x=void 0!==g&&g,O=Object(r.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return o.createElement(h,Object(c.a)({className:Object(n.a)(a.root,i,"default"!==d&&a["color".concat(Object(l.a)(d))],x&&a.inset,!m&&a.sticky,!j&&a.gutters),ref:t},O))}));t.a=Object(i.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(s)},874:function(e,t,a){"use strict";a.r(t);var c=a(36),r=a(10),o=a(0),n=a(223),i=a(5),l=a(9),s=a(863),d=a(370),b=a(361),h=a(878),p=a(307),j=a(310),u=a(62),m=a(227),g=a(475),x=a(37),O=a(170),v=a(579),f=a(354),y=a(7),k=a(198),w=a(22),M=a(1),A=["classes"],I=Object(y.a)((function(e){return{root:{width:32,height:16,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:14,height:14,boxShadow:"1px 1px 5px 0 rgb(1 1 1 / 25%)"},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(l.a)(e,A);return Object(M.jsx)(v.a,Object(i.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),z=function(){var e=Object(w.c)((function(e){return e.theme})).isDark,t=Object(w.b)();return Object(M.jsxs)(f.a,{container:!0,alignItems:"center",children:[Object(M.jsx)(u.a,{variant:"body2",children:"Dark"}),Object(M.jsx)(f.a,{item:!0,children:Object(M.jsx)(I,{checked:e,onChange:function(){t(Object(k.a)())},name:"checked"})})]})},N=a(449),C=["onSidebarMobileOpen"],Q=Object(n.a)(s.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.background.navbar,boxShadow:"none",color:t.palette.primary.contrastText,zIndex:t.zIndex.drawer+100}})),S=Object(m.a)((function(e){return{root:{overflow:"hidden",height:64,justifyContent:"center",background:e.palette.background.default,backdropFilter:"saturate(180%) blur(20px)",borderBottom:"1px solid ".concat(e.palette.divider)},flexGrow:{flexGrow:1},navigationContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:e.spacing(0)},toolbar:{width:"100%",margin:"0 auto",padding:e.spacing(0,2)},listItem:Object(r.a)({width:"auto"},e.breakpoints.down("sm"),{padding:e.spacing(0)}),listItemText:{flex:"0 0 auto",textDecoration:"none",whiteSpace:"nowrap",fontWeight:500,display:"flex",alignItems:"center"},iconButton:{padding:0,"&:hover":{background:"transparent"}},listItemLogin:{marginRight:e.spacing(1)}}})),R=function(e){var t=e.onSidebarMobileOpen,a=Object(l.a)(e,C),c=Object(x.g)(),r=S();return Object(M.jsx)(Q,Object(i.a)(Object(i.a)({},a),{},{className:r.root,children:Object(M.jsx)(d.a,{disableGutters:!0,className:r.toolbar,children:Object(M.jsxs)(b.a,{className:r.navigationContainer,children:[Object(M.jsx)(h.a,{lgUp:!0,children:Object(M.jsx)(p.a,{className:r.listItem,children:Object(M.jsx)(j.a,{className:r.iconButton,onClick:t,"aria-label":"Menu",children:Object(M.jsx)(N.a,{className:r.listItemText})})})}),Object(M.jsx)(h.a,{lgUp:!0,children:Object(M.jsx)("div",{className:r.flexGrow})}),Object(M.jsx)(p.a,{className:r.listItem,children:Object(M.jsx)(u.a,{variant:"body1",color:"textPrimary",className:r.listItemText,component:O.a,to:"/",children:Object(M.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAA9CAYAAADcfucoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF7GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTExVDE3OjM3OjQyLTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0xNFQxNjoxMzoyMC0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0xNFQxNjoxMzoyMC0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozYjc0NmM5ZC1lMDVhLTQ1NjktOGIzNi1lMmJjN2U0YTZjMDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U5QzU3MDQyMkZGMTFFQzhDNDRDNUQ5NzMyMkU2MUQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDRTlDNTcwNDIyRkYxMUVDOEM0NEM1RDk3MzIyRTYxRCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNFOUM1NzAxMjJGRjExRUM4QzQ0QzVEOTczMjJFNjFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNFOUM1NzAyMjJGRjExRUM4QzQ0QzVEOTczMjJFNjFEIi8+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNiNzQ2YzlkLWUwNWEtNDU2OS04YjM2LWUyYmM3ZTRhNmMwNSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0xNFQxNjoxMzoyMC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/QXHmQAAFIVJREFUeJztnXtwE0eex78tv22Mx4Hw9JKRwTk25DHCJKGueEjBhMvlNpaoM0UIIVKWM7Vkb7HqeFVd1dm6VF3BQpVEJbV3wAaJ1HEkOHWWQ1KXChANIXW5rQM0l4UUh8Ga8FhYOLASXsavuT9mxh6PRpZGDws286nqsqcfv+6x+6fu/vWvW0QQBBgYGKSGKdcNMDB4mDEUyMAgDfLTKUz2Tk25LF06a093X0/NjZ7rjDqtPL8yUppfxPeTWx9euXd5XyryhTcup9w2A4NkIemsgfQqUFXx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",alt:"Insight moving",width:"140",height:"100%"})})}),Object(M.jsx)("div",{className:r.flexGrow}),Object(M.jsx)(h.a,{smDown:!0,children:Object(M.jsx)(p.a,{className:r.listItem,children:Object(M.jsx)(z,{})})}),Object(M.jsx)(p.a,{className:r.listItem,children:Object(M.jsx)(g.a,{history:c})})]})})}))},X=a(27),Z=a(42),W=a(314),L=a(403),G=a(864),T=a(162),U=a(450),E=a(580),V=a(360),D=Object(m.a)((function(e){return{startIcon:{marginRight:16},root:{"&:hover":{backgroundColor:"#f5f8ff"}}}})),B=function(e){var t=e.active,a=e.icon,c=e.info,r=e.path,o=e.title,n=Object(Z.a)(),l=D();return Object(M.jsx)(p.a,{disableGutters:!0,style:{display:"flex",paddingY:0},children:Object(M.jsxs)(V.a,{component:r&&X.c,startIcon:a,style:Object(i.a)({color:n.palette.text.secondary,justifyContent:"flex-start",textAlign:"left",paddingLeft:16,paddingRight:8,paddingY:12,textTransform:"none"},t&&{color:n.palette.primary.main,backgroundColor:n.palette.background.level2,fontWeight:"bold","& svg":{color:n.palette.primary.main}}),classes:{startIcon:l.startIcon,root:l.root},fullWidth:!0,variant:"text",to:r,children:[Object(M.jsx)(W.a,{style:{flexGrow:1},children:o}),c]})})};B.defaultProps={active:!1,open:!1};var J=B,F=["items","pathname","title"],P=function(e){var t=e.depth,a=void 0===t?0:t,c=e.items,r=e.pathname;return Object(M.jsx)(b.a,{disablePadding:!0,children:c.reduce((function(e,t){return Y({acc:e,item:t,pathname:r,depth:a})}),[])})},Y=function(e){var t=e.acc,a=e.pathname,c=e.item,r=e.depth,o="".concat(c.title,"-").concat(r),n=c.path===a;if(c.children){var i=c.path===a;t.push(Object(M.jsx)(J,{active:i,depth:r,icon:c.icon,info:c.info,open:i,path:c.path,title:c.title,children:P({depth:r+1,items:c.children,pathname:a})},o))}else t.push(Object(M.jsx)(J,{active:n,depth:r,icon:c.icon,info:c.info,path:c.path,title:c.title},o));return t},q=function(e){var t=e.items,a=e.pathname,c=e.title,r=Object(l.a)(e,F),o=Object(Z.a)();return Object(M.jsx)(b.a,Object(i.a)(Object(i.a)({subheader:Object(M.jsx)(E.a,{disableGutters:!0,disableSticky:!0,style:{color:o.palette.text.primary,fontSize:"0.75rem",lineHeight:2.5,fontWeight:700,textTransform:"uppercase"},children:c})},r),{},{children:P({items:t,pathname:a})}))},H=a(430),K=a.n(H),$=["children"],_=Object(o.forwardRef)((function(e,t){var a=e.children,c=Object(l.a)(e,$);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(M.jsx)(W.a,{ref:t,style:{overflowX:"auto"},children:a}):Object(M.jsx)(K.a,Object(i.a)(Object(i.a)({ref:t},c),{},{children:a}))})),ee=a(122),te=a(440),ae=a(15),ce=a.n(ae)()(Object(M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(M.jsx)("path",{fillRule:"evenodd",d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",clipRule:"evenodd"})}),"ChartSquareBar"),re=[{title:"",items:[{title:"Overview",path:"/dashboard/analytics",icon:Object(M.jsx)(ce,{fontSize:"small"})},{title:"Calendar",path:"/dashboard/calendar",icon:Object(M.jsx)(T.a,{fontSize:"small"})},{title:"Jobs",path:"/dashboard/jobs",icon:Object(M.jsx)(ee.a,{fontSize:"small"})},{title:"Customers",path:"/dashboard/customers",icon:Object(M.jsx)(U.a,{fontSize:"small"})},{title:"Employees",path:"/dashboard/employees",icon:Object(M.jsx)(U.a,{fontSize:"small"})},{title:"Rates",path:"/dashboard/rates",icon:Object(M.jsx)(te.a,{fontSize:"small"})}]}],oe=function(e){var t=e.onMobileClose,a=e.openMobile,c=Object(x.h)(),r=Object(Z.a)(),n=Object(w.c)((function(e){return e.auth})).user;Object(o.useEffect)((function(){a&&t&&t()}),[c.pathname]);var l=Object(M.jsx)(W.a,{style:{display:"flex",flexDirection:"column",height:"100%"},children:Object(M.jsxs)(_,{options:{suppressScrollX:!0},children:[Object(M.jsx)(W.a,{p:2,children:Object(M.jsxs)(W.a,{style:{alignItems:"center",backgroundColor:r.palette.background.level2,borderRadius:8,display:"flex",overflow:"hidden",padding:16},children:[Object(M.jsx)(X.b,{to:"/dashboard/users/".concat(n.id),children:Object(M.jsx)(L.a,{style:{cursor:"pointer",height:48,width:48}})}),Object(M.jsxs)(W.a,{ml:2,children:[Object(M.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:n.first_name+" "+n.last_name}),Object(M.jsx)(u.a,{color:"textSecondary",variant:"body2",children:null===n||void 0===n?void 0:n.role})]})]})}),Object(M.jsx)(W.a,{p:2,children:re.map((function(e){return Object(M.jsx)(q,Object(i.a)({pathname:c.pathname,style:{marginTop:24}},e),e.title)}))})]})});return Object(M.jsxs)("div",{children:[Object(M.jsx)(h.a,{lgUp:!0,children:Object(M.jsx)(G.a,{anchor:"left",onClose:t,open:a,PaperProps:{style:{width:250}},variant:"temporary",children:l})}),Object(M.jsx)(h.a,{mdDown:!0,children:Object(M.jsx)(G.a,{anchor:"left",open:!0,PaperProps:{style:{height:"calc(100% - 64px)",top:"64px",width:280}},variant:"permanent",children:l})})]})},ne=Object(n.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.level2,display:"flex",height:"100%",overflow:"hidden",width:"100%"}})),ie=Object(n.a)("div")((function(e){var t=e.theme;return Object(r.a)({display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:"40px"},t.breakpoints.up("lg"),{paddingLeft:"280px"})})),le=Object(n.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden"}),se=Object(n.a)("div")({flex:"1 1 auto",height:"100%",overflow:"auto",position:"relative",WebkitOverflowScrolling:"touch"});t.default=function(e){var t=e.children,a=Object(o.useState)(!1),r=Object(c.a)(a,2),n=r[0],i=r[1],l=Object(w.c)((function(e){return e.auth})).isLoggingOut;return Object(M.jsxs)(ne,{children:[Object(M.jsx)(R,{onSidebarMobileOpen:function(){return i(!0)}}),Object(M.jsx)(oe,{onMobileClose:function(){return i(!1)},openMobile:n}),Object(M.jsx)(ie,{children:Object(M.jsx)(le,{children:Object(M.jsx)(se,{children:l?"Loading":t})})})]})}}}]);