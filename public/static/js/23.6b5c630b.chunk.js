(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[23],{1125:function(e,t,a){"use strict";var n=a(1),r=a(91),o=a(4),i=a(0),c=(a(124),a(2),a(5)),l=a(7),s=a(123),u=a(28),d=a(197),p=Object(d.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=a(255);var m=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return i.createElement(f.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(p,{className:t.icon}))}));var g=i.forwardRef((function(e,t){var a=e.children,l=e.classes,u=e.className,d=e.component,p=void 0===d?"nav":d,f=e.expandText,g=void 0===f?"Show path":f,b=e.itemsAfterCollapse,v=void 0===b?1:b,h=e.itemsBeforeCollapse,y=void 0===h?1:h,O=e.maxItems,j=void 0===O?8:O,E=e.separator,k=void 0===E?"/":E,x=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),D=i.useState(!1),w=D[0],C=D[1],S=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(s.a,Object(n.a)({ref:t,component:p,color:"textSecondary",className:Object(c.a)(l.root,u)},x),i.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(n,r,o){return o<e.length-1?n=n.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):n.push(r),n}),[])}(w||j&&S.length<=j?S:function(e){return y+v>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[i.createElement(m,{"aria-label":g,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-v,e.length)))}(S),l.separator,k)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},1130:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(2),a(5)),c=a(7),l=a(94),s=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=Object(r.a)(e,["classes","className"]),u=o.useContext(l.a);return o.createElement("div",Object(n.a)({className:Object(i.a)(a.root,c,"flex-start"===u.alignItems&&a.alignItemsFlexStart),ref:t},s))}));t.a=Object(c.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(s)},1135:function(e,t,a){"use strict";var n=a(4),r=a(1),o=a(0),i=(a(2),a(5)),c=a(7),l=a(1259),s=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,u=void 0===s?"table":s,d=e.padding,p=void 0===d?"default":d,f=e.size,m=void 0===f?"medium":f,g=e.stickyHeader,b=void 0!==g&&g,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=o.useMemo((function(){return{padding:p,size:m,stickyHeader:b}}),[p,m,b]);return o.createElement(l.a.Provider,{value:h},o.createElement(u,Object(r.a)({role:"table"===u?null:"table",ref:t,className:Object(i.a)(a.root,c,b&&a.stickyHeader)},v)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1136:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(2),a(5)),c=a(7),l=a(1242),s={variant:"body"},u=o.forwardRef((function(e,t){var a=e.classes,c=e.className,u=e.component,d=void 0===u?"tbody":u,p=Object(r.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(d,Object(n.a)({className:Object(i.a)(a.root,c),ref:t,role:"tbody"===d?null:"rowgroup"},p)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},1137:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(2),a(5)),c=a(7),l=a(1242),s=a(28),u=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,u=void 0===s?"tr":s,d=e.hover,p=void 0!==d&&d,f=e.selected,m=void 0!==f&&f,g=Object(r.a)(e,["classes","className","component","hover","selected"]),b=o.useContext(l.a);return o.createElement(u,Object(n.a)({ref:t,className:Object(i.a)(a.root,c,b&&{head:a.head,footer:a.footer}[b.variant],p&&a.hover,m&&a.selected),role:"tr"===u?null:"row"},g))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(u)},1138:function(e,t,a){"use strict";var n=a(4),r=a(1),o=a(0),i=(a(2),a(5)),c=a(7),l=a(9),s=a(28),u=a(1259),d=a(1242),p=o.forwardRef((function(e,t){var a,c,s=e.align,p=void 0===s?"inherit":s,f=e.classes,m=e.className,g=e.component,b=e.padding,v=e.scope,h=e.size,y=e.sortDirection,O=e.variant,j=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),E=o.useContext(u.a),k=o.useContext(d.a),x=k&&"head"===k.variant;g?(c=g,a=x?"columnheader":"cell"):c=x?"th":"td";var D=v;!D&&x&&(D="col");var w=b||(E&&E.padding?E.padding:"default"),C=h||(E&&E.size?E.size:"medium"),S=O||k&&k.variant,F=null;return y&&(F="asc"===y?"ascending":"descending"),o.createElement(c,Object(r.a)({ref:t,className:Object(i.a)(f.root,f[S],m,"inherit"!==p&&f["align".concat(Object(l.a)(p))],"default"!==w&&f["padding".concat(Object(l.a)(w))],"medium"!==C&&f["size".concat(Object(l.a)(C))],"head"===S&&E&&E.stickyHeader&&f.stickyHeader),"aria-sort":F,role:a,scope:D},j))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},1140:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(2),a(5)),c=a(7),l=a(1242),s={variant:"head"},u=o.forwardRef((function(e,t){var a=e.classes,c=e.className,u=e.component,d=void 0===u?"thead":u,p=Object(r.a)(e,["classes","className","component"]);return o.createElement(l.a.Provider,{value:s},o.createElement(d,Object(n.a)({className:Object(i.a)(a.root,c),ref:t,role:"thead"===d?null:"rowgroup"},p)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},1224:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1227:function(e,t,a){"use strict";var n=a(90);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(100)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=o},1242:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1250:function(e,t,a){"use strict";var n=a(40),r=a(52),o=a(0),i=a.n(o),c=a(5),l=a(344),s=a(28),u=Object(l.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));function d(e){var t=e.className,a=e.color,o=e.children,l=(e.style,Object(r.a)(e,["className","color","children","style"])),s=u();return i.a.createElement("span",Object.assign({className:Object(c.a)(s.root,Object(n.a)({},s[a],a),t)},l),o)}d.defaultProps={className:"",color:"secondary"},t.a=d},1259:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1268:function(e,t,a){"use strict";var n=a(90);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(100)).default)(r.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=o},1426:function(e,t,a){"use strict";var n=a(90);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(100)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},1427:function(e,t,a){"use strict";var n=a(52),r=a(0),o=a.n(r),i=a(5),c=a(1608),l=a.n(c),s=a(344),u=Object(s.a)((function(e){return{root:{"& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}},stepButton:{"& + &":{marginLeft:e.spacing(2)}}}}));t.a=function(e){var t=e.className,a=Object(n.a)(e,["className"]),r=u();return o.a.createElement(l.a,Object.assign({className:Object(i.a)(r.root,t)},a))}},1453:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,n=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(a));return"".concat(parseFloat((e/Math.pow(a,o)).toFixed(n))," ").concat(r[o])}},1609:function(e,t,a){"use strict";var n=a(30),r=a(52),o=a(0),i=a.n(o),c=a(5),l=a(1675),s=a(199),u=a.n(s),d=a(344),p=a(1094),f=a(610),m=a(608),g=a(1130),b=a(1103),v=a(1268),h=a.n(v),y=a(1453),O=Object(d.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}}}}));t.a=function(e){var t=e.className,a=e.setFieldValue,s=e.handleSubmit,d=Object(r.a)(e,["className","setFieldValue","handleSubmit"]),v=O(),j=Object(o.useState)([]),E=Object(n.a)(j,2),k=E[0],x=E[1],D=Object(o.useCallback)((function(e){x(e),a("photo",e),a("image",e[0].name)}),[]),w=function(){x([])},C=Object(l.a)({onDrop:D}),S=C.getRootProps,F=C.getInputProps;return C.isDragActive,i.a.createElement("div",Object.assign({className:Object(c.a)(v.root,t)},d),i.a.createElement(p.a,Object.assign({className:v.button,variant:"outlined",color:"primary"},S()),i.a.createElement("input",F()),"Upload Image"),k.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{options:{suppressScrollX:!0}},i.a.createElement(f.a,{className:v.list},k.map((function(e,t){return i.a.createElement(m.a,{divider:t<k.length-1,key:t},i.a.createElement(g.a,null,i.a.createElement(h.a,null)),i.a.createElement(b.a,{primary:e.name,primaryTypographyProps:{variant:"h5"},secondary:Object(y.a)(e.size)}))})),i.a.createElement(m.a,null,i.a.createElement("div",{className:v.actions},i.a.createElement(p.a,{onClick:w,size:"small"},"Remove"),i.a.createElement(p.a,{color:"secondary",size:"small",variant:"contained",onClick:function(){s(),w()}},"Upload")))))))}},1610:function(e,t){e.exports=function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var a=Array.isArray(t)?t:t.split(","),n=e.name||"",r=e.type||"",o=r.replace(/\/.*$/,"");return a.some((function(e){var t=e.trim();return"."===t.charAt(0)?n.toLowerCase().endsWith(t.toLowerCase()):t.endsWith("/*")?o===t.replace(/\/.*$/,""):r===t}))}return!0}}])},1675:function(e,t,a){"use strict";a.d(t,"a",(function(){return V}));var n=a(0),r=a.n(n),o=a(2),i=a.n(o),c=a(378),l=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,t){var a=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var a=t.split(".").pop().toLowerCase(),n=l.get(a);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof a.path){var n=e.webkitRelativePath;Object.defineProperty(a,"path",{value:"string"===typeof t?t:"string"===typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return a}var u=[".DS_Store","Thumbs.db"];function d(e){return c.b(this,void 0,void 0,(function(){return c.c(this,(function(t){return[2,(a=e,a.dataTransfer&&e.dataTransfer?f(e.dataTransfer,e.type):p(e))];var a}))}))}function p(e){return(null!==e.target&&e.target.files?g(e.target.files):[]).map((function(e){return s(e)}))}function f(e,t){return c.b(this,void 0,void 0,(function(){var a;return c.c(this,(function(n){switch(n.label){case 0:return e.items?(a=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,a]:[4,Promise.all(a.map(b))]):[3,2];case 1:return[2,m(v(n.sent()))];case 2:return[2,m(g(e.files).map((function(e){return s(e)})))]}}))}))}function m(e){return e.filter((function(e){return-1===u.indexOf(e.name)}))}function g(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push(n)}return t}function b(e){if("function"!==typeof e.webkitGetAsEntry)return h(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?O(t):h(e)}function v(e){return e.reduce((function(e,t){return c.d(e,Array.isArray(t)?v(t):[t])}),[])}function h(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var a=s(t);return Promise.resolve(a)}function y(e){return c.b(this,void 0,void 0,(function(){return c.c(this,(function(t){return[2,e.isDirectory?O(e):j(e)]}))}))}function O(e){var t=e.createReader();return new Promise((function(e,a){var n=[];!function r(){var o=this;t.readEntries((function(t){return c.b(o,void 0,void 0,(function(){var o,i,l;return c.c(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=c.sent(),e(o),[3,4];case 3:return i=c.sent(),a(i),[3,4];case 4:return[3,6];case 5:l=Promise.all(t.map(y)),n.push(l),r(),c.label=6;case 6:return[2]}}))}))}),(function(e){a(e)}))}()}))}function j(e){return c.b(this,void 0,void 0,(function(){return c.c(this,(function(t){return[2,new Promise((function(t,a){e.file((function(a){var n=s(a,e.fullPath);t(n)}),(function(e){a(e)}))}))]}))}))}var E=a(1610),k=a.n(E);function x(e,t){return"application/x-moz-file"===e.type||k()(e,t)}function D(e,t,a){if(w(e.size)){if(w(t)&&w(a))return e.size>=t&&e.size<=a;if(w(t))return e.size>=t;if(w(a))return e.size<=a}return!0}function w(e){return void 0!==e&&null!==e}function C(e){var t=e.files,a=e.accept,n=e.minSize,r=e.maxSize;return!(!e.multiple&&t.length>1)&&t.every((function(e){return x(e,a)&&D(e,n,r)}))}function S(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function F(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function N(e){e.preventDefault()}function A(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function z(e){return-1!==e.indexOf("Edge/")}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return A(e)||z(e)}function R(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return t.some((function(t){return!S(e)&&t&&t.apply(void 0,[e].concat(n)),S(e)}))}}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){L(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=Object(n.forwardRef)((function(e,t){var a=e.children,o=V(q(e,["children"])),i=o.open,c=q(o,["open"]);return Object(n.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.a.createElement(n.Fragment,null,a(B({},c,{open:i})))}));H.displayName="Dropzone",H.propTypes={children:i.a.func,accept:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),multiple:i.a.bool,preventDropOnDocument:i.a.bool,noClick:i.a.bool,noKeyboard:i.a.bool,noDrag:i.a.bool,noDragEventsBubbling:i.a.bool,minSize:i.a.number,maxSize:i.a.number,disabled:i.a.bool,getFilesFromEvent:i.a.func,onFileDialogCancel:i.a.func,onDragEnter:i.a.func,onDragLeave:i.a.func,onDragOver:i.a.func,onDrop:i.a.func,onDropAccepted:i.a.func,onDropRejected:i.a.func};var W={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accept,a=e.disabled,r=void 0!==a&&a,o=e.getFilesFromEvent,i=void 0===o?d:o,c=e.maxSize,l=void 0===c?1/0:c,s=e.minSize,u=void 0===s?0:s,p=e.multiple,f=void 0===p||p,m=e.onDragEnter,g=e.onDragLeave,b=e.onDragOver,v=e.onDrop,h=e.onDropAccepted,y=e.onDropRejected,O=e.onFileDialogCancel,j=e.preventDropOnDocument,E=void 0===j||j,k=e.noClick,w=void 0!==k&&k,A=e.noKeyboard,z=void 0!==A&&A,M=e.noDrag,H=void 0!==M&&M,V=e.noDragEventsBubbling,K=void 0!==V&&V,$=Object(n.useRef)(null),G=Object(n.useRef)(null),J=Object(n.useReducer)(_,W),U=I(J,2),Z=U[0],X=U[1],Y=Z.isFocused,Q=Z.isFileDialogActive,ee=Z.draggedFiles,te=Object(n.useCallback)((function(){G.current&&(X({type:"openDialog"}),G.current.value=null,G.current.click())}),[X]),ae=function(){Q&&setTimeout((function(){G.current&&(G.current.files.length||(X({type:"closeDialog"}),"function"===typeof O&&O()))}),300)};Object(n.useEffect)((function(){return window.addEventListener("focus",ae,!1),function(){window.removeEventListener("focus",ae,!1)}}),[G,Q,O]);var ne=Object(n.useCallback)((function(e){$.current&&$.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),te()))}),[$,G]),re=Object(n.useCallback)((function(){X({type:"focus"})}),[]),oe=Object(n.useCallback)((function(){X({type:"blur"})}),[]),ie=Object(n.useCallback)((function(){w||(P()?setTimeout(te,0):te())}),[G,w]),ce=Object(n.useRef)([]),le=function(e){$.current&&$.current.contains(e.target)||(e.preventDefault(),ce.current=[])};Object(n.useEffect)((function(){return E&&(document.addEventListener("dragover",N,!1),document.addEventListener("drop",le,!1)),function(){E&&(document.removeEventListener("dragover",N),document.removeEventListener("drop",le))}}),[$,E]);var se=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),-1===ce.current.indexOf(e.target)&&(ce.current=[].concat(T(ce.current),[e.target])),F(e)&&Promise.resolve(i(e)).then((function(t){S(e)&&!K||(X({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),m&&m(e))}))}),[i,m,K]),ue=Object(n.useCallback)((function(e){if(e.preventDefault(),e.persist(),be(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return F(e)&&b&&b(e),!1}),[b,K]),de=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),be(e);var t=ce.current.filter((function(t){return t!==e.target&&$.current&&$.current.contains(t)}));ce.current=t,t.length>0||(X({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),F(e)&&g&&g(e))}),[$,g,K]),pe=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),ce.current=[],F(e)&&Promise.resolve(i(e)).then((function(a){if(!S(e)||K){var n=[],r=[];a.forEach((function(e){x(e,t)&&D(e,u,l)?n.push(e):r.push(e)})),!f&&n.length>1&&r.push.apply(r,T(n.splice(0))),X({acceptedFiles:n,rejectedFiles:r,type:"setFiles"}),v&&v(n,r,e),r.length>0&&y&&y(r,e),n.length>0&&h&&h(n,e)}})),X({type:"reset"})}),[f,t,u,l,i,v,h,y,K]),fe=function(e){return r?null:e},me=function(e){return z?null:fe(e)},ge=function(e){return H?null:fe(e)},be=function(e){K&&e.stopPropagation()},ve=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,a=void 0===t?"ref":t,n=e.onKeyDown,o=e.onFocus,i=e.onBlur,c=e.onClick,l=e.onDragEnter,s=e.onDragOver,u=e.onDragLeave,d=e.onDrop,p=q(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return B(L({onKeyDown:me(R(n,ne)),onFocus:me(R(o,re)),onBlur:me(R(i,oe)),onClick:fe(R(c,ie)),onDragEnter:ge(R(l,se)),onDragOver:ge(R(s,ue)),onDragLeave:ge(R(u,de)),onDrop:ge(R(d,pe))},a,$),r||z?{}:{tabIndex:0},{},p)}}),[$,ne,re,oe,ie,se,ue,de,pe,z,H,r]),he=Object(n.useCallback)((function(e){e.stopPropagation()}),[]),ye=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.refKey,n=void 0===a?"ref":a,r=e.onChange,o=e.onClick,i=q(e,["refKey","onChange","onClick"]),c=L({accept:t,multiple:f,type:"file",style:{display:"none"},onChange:fe(R(r,pe)),onClick:fe(R(o,he)),autoComplete:"off",tabIndex:-1},n,G);return B({},c,{},i)}}),[G,t,f,pe,r]),Oe=ee.length,je=Oe>0&&C({files:ee,accept:t,minSize:u,maxSize:l,multiple:f}),Ee=Oe>0&&!je;return B({},Z,{isDragAccept:je,isDragReject:Ee,isFocused:Y&&!r,getRootProps:ve,getInputProps:ye,rootRef:$,inputRef:G,open:fe(te)})}function _(e,t){switch(t.type){case"focus":return B({},e,{isFocused:!0});case"blur":return B({},e,{isFocused:!1});case"openDialog":return B({},e,{isFileDialogActive:!0});case"closeDialog":return B({},e,{isFileDialogActive:!1});case"setDraggedFiles":var a=t.isDragActive;return B({},e,{draggedFiles:t.draggedFiles,isDragActive:a});case"setFiles":return B({},e,{acceptedFiles:t.acceptedFiles,rejectedFiles:t.rejectedFiles});case"reset":return B({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]});default:return e}}},2390:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(0),o=a.n(r),i=a(344),c=a(1113),l=a(632),s=a(64),u=a.n(s),d=a(346),p=a(1224),f=a(52),m=a(12),g=a(5),b=a(1111),v=a(1125),h=a(1096),y=a(123),O=a(1227),j=a.n(O),E=Object(i.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var k=function(e){var t=e.className,a=Object(f.a)(e,["className"]),n=E();return o.a.createElement(b.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(g.a)(n.root,t)},a),o.a.createElement(b.a,{item:!0},o.a.createElement(v.a,{separator:o.a.createElement(j.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(h.a,{variant:"body1",color:"inherit",to:"/app",component:m.a},"Dashboard"),o.a.createElement(y.a,{variant:"body1",color:"textPrimary"},"Images")),o.a.createElement(y.a,{variant:"h3",color:"textPrimary"},"All Images")))},x=a(40),D=(a(3),a(199)),w=a.n(D),C=a(11),S=a(1114),F=a(1135),N=a(1140),A=a(1137),z=a(1138),P=a(1136),R=a(619),T=a(107),I=(a(1250),a(1426)),M=a.n(I),B=Object(i.a)((function(e){return{root:{},bulkOperations:{position:"relative"},image:{height:68,width:68},media:{width:"10em",backgroundSize:"100%"},openDeleteButton:{color:C.a.red[600],border:"1px solid ".concat(C.a.red[500]),"&:hover":{backgroundColor:C.a.red[50]}},deleteAction:{color:C.a.red[600],backgroundColor:e.palette.error.main,"&:hover":{backgroundColor:e.palette.error.dark}},idCell:Object(x.a)({},e.breakpoints.down("xs"),{display:"none"})}}));function L(e){var t=e.className,a=e.images,n=e.handleDelete,r=Object(f.a)(e,["className","images","handleDelete"]),i=B();return o.a.createElement(S.a,Object.assign({className:Object(g.a)(i.root,t)},r),o.a.createElement(w.a,null,o.a.createElement(l.a,{minWidth:200},o.a.createElement(F.a,null,o.a.createElement(N.a,null,o.a.createElement(A.a,null,o.a.createElement(z.a,{className:i.idCell},"Image ID"),o.a.createElement(z.a,null,"Image"),o.a.createElement(z.a,{align:"right"},"Actions"))),o.a.createElement(P.a,null,a.map((function(e,t){return o.a.createElement(A.a,{hover:!0,key:t},o.a.createElement(z.a,{className:i.idCell},e.id),o.a.createElement(z.a,null,o.a.createElement("img",{className:i.media,src:e.photo.url,alt:e.image})),o.a.createElement(z.a,{align:"right"},o.a.createElement(R.a,{onClick:function(){return n(e.id)}},o.a.createElement(T.a,{fontSize:"large"},o.a.createElement(M.a,{fontSize:"large",className:i.deleteAction})))))})))))))}L.defaultProps={jobs:[]};var q=L,H=a(82),W=a.n(H),V=a(125),_=a(26),K=a(1294),$=a(1302),G=a(198),J=a(1115),U=a(625),Z=(a(1427),a(1609)),X=Object(i.a)((function(){return{root:{},card:{backgroundColor:"transparent",boxShadow:"none"}}}));var Y=function(e){var t=e.className,a=e.addImage,n=Object(f.a)(e,["className","addImage"]),r=X(),i=(Object(_.g)(),Object(G.b)().enqueueSnackbar);return o.a.createElement($.b,{initialValues:{photo:null,image:""},validationSchema:K.d().shape({}),onSubmit:function(){var e=Object(V.a)(W.a.mark((function e(t,n){var r,o,c,l,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,o=n.setStatus,c=n.setSubmitting,l=n.resetForm;try{(s=new FormData).append("image",t.image),s.append("photo",t.photo[0]),fetch("/api/v1/images",{method:"POST",body:s}).catch((function(e){return console.log(e)})),a(),l({}),o({success:!0}),c(!1),i("Image Added",{variant:"success"})}catch(u){r({submit:u.message}),o({success:!1}),c(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,i=(e.handleBlur,e.handleChange,e.handleSubmit),c=(e.isSubmitting,e.setFieldValue);e.touched,e.values;return o.a.createElement("form",Object.assign({onSubmit:i,className:Object(g.a)(r.root,t)},n),o.a.createElement(b.a,{container:!0,spacing:3},o.a.createElement(b.a,{item:!0,xs:12,sm:3},o.a.createElement(l.a,{mt:3},o.a.createElement(S.a,{className:r.card},o.a.createElement(J.a,null,o.a.createElement(Z.a,{setFieldValue:c,handleSubmit:i})))))),a.submit&&o.a.createElement(l.a,{mt:3},o.a.createElement(U.a,{error:!0},a.submit)))}))},Q=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));t.default=function(){var e=Q(),t=Object(p.a)(),a=Object(r.useState)(null),i=Object(n.a)(a,2),s=i[0],f=i[1],m=Object(G.b)().enqueueSnackbar,g=Object(r.useCallback)((function(){u.a.get("/api/v1/images.json").then((function(e){t.current&&f(e.data)}))}),[t]);return Object(r.useEffect)((function(){g()}),[g]),s?(console.log(s),o.a.createElement(d.a,{className:e.root,title:"Image List"},o.a.createElement(c.a,{maxWidth:!1},o.a.createElement(k,null),o.a.createElement(Y,{addImage:function(){setTimeout((function(){g()}),5e3)}}),s&&o.a.createElement(l.a,{mt:5},o.a.createElement(q,{images:s,handleDelete:function(e){fetch("/api/v1/images/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){var a=s.filter((function(t){return t.id!==e}));f(a),m("Image Deleted",{variant:"error"})}))}}))))):null}}}]);
//# sourceMappingURL=23.6b5c630b.chunk.js.map