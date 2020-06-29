(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[45],{1235:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1241:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1355:function(e,a,t){"use strict";var n=t(24),r=t(27),c=t(0),l=t.n(c),o=t(8),i=t(3),s=t(5),m=t.n(s),u=t(77),p=t(11),E=t(1128),b=t(1121),f=t(1118),d=t(1123),g=t(1104),j=t(65),v=t(1115),h=t(1105),y=t(1108),O=t(284),k=t(107),x=t(1230),N=t(1307),S=t.n(N),C=t(1308),w=t.n(C),I=t(1197),P=t(1241),A=Object(u.a)((function(e){return{root:{},media:{height:200,backgroundColor:e.palette.background.dark},likedButton:{color:p.a.red[600]},subscribersIcon:{marginLeft:e.spacing(2),marginRight:e.spacing(1)}}}));a.a=function(e){var a=e.project,t=e.className,s=Object(r.a)(e,["project","className"]),u=A(),p=Object(c.useState)(a.isLiked),N=Object(n.a)(p,2),C=N[0],L=N[1],T=Object(c.useState)(a.likes),z=Object(n.a)(T,2),R=z[0],W=z[1];return l.a.createElement(E.a,Object.assign({className:Object(i.a)(u.root,t)},s),l.a.createElement(b.a,{p:3},l.a.createElement(f.a,{className:u.media,image:a.media}),l.a.createElement(b.a,{display:"flex",alignItems:"center",mt:2},l.a.createElement(d.a,{alt:"Author",src:a.author.avatar},Object(P.a)(a.author.name)),l.a.createElement(b.a,{ml:2},l.a.createElement(g.a,{color:"textPrimary",component:o.a,to:"#",variant:"h5"},a.title),l.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"by"," ",l.a.createElement(g.a,{color:"textPrimary",component:o.a,to:"#",variant:"h6"},a.author.name)," ","| Updated"," ",m()(a.updatedAt).fromNow())))),l.a.createElement(b.a,{pb:2,px:3},l.a.createElement(j.a,{color:"textSecondary",variant:"body2"},a.description)),l.a.createElement(b.a,{py:2,px:3},l.a.createElement(v.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},l.a.createElement(v.a,{item:!0},l.a.createElement(j.a,{variant:"h5",color:"textPrimary"},a.location),l.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"Location")),l.a.createElement(v.a,{item:!0},l.a.createElement(j.a,{variant:"h5",color:"textPrimary"},a.type),l.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"Type")),l.a.createElement(v.a,{item:!0},l.a.createElement(j.a,{variant:"h5",color:"textPrimary"},a.technology),l.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"Technology")))),l.a.createElement(h.a,null),l.a.createElement(b.a,{py:2,pl:2,pr:3,display:"flex",alignItems:"center"},C?l.a.createElement(y.a,{title:"Unlike"},l.a.createElement(O.a,{className:u.likedButton,onClick:function(){L(!1),W((function(e){return e-1}))}},l.a.createElement(S.a,{fontSize:"small"}))):l.a.createElement(y.a,{title:"Like"},l.a.createElement(O.a,{onClick:function(){L(!0),W((function(e){return e+1}))}},l.a.createElement(w.a,{fontSize:"small"}))),l.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary"},R),l.a.createElement(k.a,{fontSize:"small",color:"action",className:u.subscribersIcon},l.a.createElement(I.a,null)),l.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary"},a.subscribers),l.a.createElement(b.a,{flexGrow:1}),l.a.createElement(x.a,{value:a.rating,size:"small",readOnly:!0})))}},2328:function(e,a,t){"use strict";t.r(a);var n=t(24),r=t(0),c=t.n(r),l=t(77),o=t(1117),i=t(1121),s=t(373),m=t(19),u=t(1235),p=t(27),E=t(8),b=t(3),f=t(1115),d=t(1130),g=t(1104),j=t(65),v=t(184),h=t(107),y=t(1237),O=t.n(y),k=t(1364),x=Object(l.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var N=function(e){var a=e.className,t=Object(p.a)(e,["className"]),n=x();return c.a.createElement(f.a,Object.assign({alignItems:"center",container:!0,justify:"space-between",spacing:3,className:Object(b.a)(n.root,a)},t),c.a.createElement(f.a,{item:!0},c.a.createElement(d.a,{separator:c.a.createElement(O.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:E.a},"Dashboard"),c.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app/projects",component:E.a},"Projects"),c.a.createElement(j.a,{variant:"body1",color:"textPrimary"},"Browse")),c.a.createElement(j.a,{variant:"h3",color:"textPrimary"},"See the latest opportunities")),c.a.createElement(f.a,{item:!0},c.a.createElement(v.a,{color:"secondary",component:E.a,to:"/app/projects/create",variant:"contained"},c.a.createElement(h.a,{fontSize:"small",className:n.actionIcon},c.a.createElement(k.a,null)),"Add new project")))},S=t(58),C=t(1128),w=t(370),I=t(1105),P=t(1126),A=t(1112),L=t(1133),T=t(1499),z=t.n(T),R=t(359),W=t(1107),B=t(1669),F=t.n(B),U=Object(l.a)((function(e){return{root:{},menuItem:{padding:0},formControlLabel:{padding:e.spacing(.5,2),width:"100%",margin:0}}}));var D=function(e){var a=e.label,t=e.options,l=e.value,o=e.onChange,i=U(),s=Object(r.useRef)(null),m=Object(r.useState)(!1),u=Object(n.a)(m,2),p=u[0],E=u[1],b=function(e){var a=Object(S.a)(l);e.target.checked?a.push(e.target.value):a=a.filter((function(a){return a!==e.target.value})),o&&o(a)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{onClick:function(){E(!0)},ref:s},a,c.a.createElement(F.a,null)),c.a.createElement(R.a,{anchorEl:s.current,className:i.menu,elevation:1,onClose:function(){E(!1)},open:p,PaperProps:{style:{width:250}}},t.map((function(e){return c.a.createElement(W.a,{className:i.menuItem,key:e},c.a.createElement(A.a,{className:i.formControlLabel,control:c.a.createElement(L.a,{checked:l.indexOf(e)>-1,onClick:b,value:e}),label:e}))}))))},G=[{label:"Type",options:["Freelance","Full Time","Part Time","Internship"]},{label:"Level",options:["Novice","Expert"]},{label:"Location",options:["Africa","Asia","Australia","Europe","North America","South America"]},{label:"Roles",options:["Android","Web Developer","iOS"]}],J=Object(l.a)((function(e){return{root:{},searchInput:{marginLeft:e.spacing(2)},chip:{margin:e.spacing(1)}}}));var M=function(e){var a=e.className,t=Object(p.a)(e,["className"]),l=J(),o=Object(r.useState)(""),s=Object(n.a)(o,2),m=s[0],u=s[1],E=Object(r.useState)(["Freelance","Full Time","Novice","Europe","Android","Web Developer"]),f=Object(n.a)(E,2),d=f[0],g=f[1],j=function(e){g(e)};return c.a.createElement(C.a,Object.assign({className:Object(b.a)(l.root,a)},t),c.a.createElement(i.a,{p:2,display:"flex",alignItems:"center"},c.a.createElement(z.a,null),c.a.createElement(w.a,{disableUnderline:!0,fullWidth:!0,className:l.searchInput,onChange:function(e){e.persist(),u(e.target.value)},onKeyUp:function(e){e.persist(),13===e.keyCode&&m&&(d.includes(m)||(g((function(e){return[].concat(Object(S.a)(e),[m])})),u("")))},placeholder:"Enter a keyword",value:m})),c.a.createElement(I.a,null),c.a.createElement(i.a,{p:2,display:"flex",alignItems:"center",flexWrap:"wrap"},d.map((function(e){return c.a.createElement(P.a,{className:l.chip,key:e,label:e,onDelete:function(){return function(e){g((function(a){return a.filter((function(a){return e!==a}))}))}(e)}})}))),c.a.createElement(I.a,null),c.a.createElement(i.a,{display:"flex",alignItems:"center",flexWrap:"wrap",p:1},G.map((function(e){return c.a.createElement(D,{key:e.label,label:e.label,onChange:j,options:e.options,value:d})})),c.a.createElement(i.a,{flexGrow:1}),c.a.createElement(A.a,{className:l.inNetwork,control:c.a.createElement(L.a,{defaultChecked:!0}),label:"In network"})))},H=t(1110),K=t(2344),q=t(2308),Q=t(2323),V=t(2175),X=t.n(V),Y=t(1355),Z=Object(l.a)((function(e){return{root:{},title:{position:"relative","&:after":{position:"absolute",bottom:-8,left:0,content:'" "',height:3,width:48,backgroundColor:e.palette.primary.main}},sortButton:{textTransform:"none",letterSpacing:0,marginRight:e.spacing(2)}}}));var $=function(e){var a=e.className,t=e.projects,l=Object(p.a)(e,["className","projects"]),o=Z(),s=Object(r.useRef)(null),m=Object(r.useState)(!1),u=Object(n.a)(m,2),E=u[0],d=u[1],g=Object(r.useState)("Most popular"),h=Object(n.a)(g,2),y=h[0],O=h[1],k=Object(r.useState)("grid"),x=Object(n.a)(k,2),N=x[0],S=x[1];return c.a.createElement("div",Object.assign({className:Object(b.a)(o.root,a)},l),c.a.createElement(i.a,{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",mb:2},c.a.createElement(j.a,{className:o.title,variant:"h5",color:"textPrimary"},"Showing"," ",t.length," ","projects"),c.a.createElement(i.a,{display:"flex",alignItems:"center"},c.a.createElement(v.a,{className:o.sortButton,onClick:function(){d(!0)},ref:s},y,c.a.createElement(F.a,null)),c.a.createElement(K.a,{exclusive:!0,onChange:function(e,a){S(a)},size:"small",value:N},c.a.createElement(q.a,{value:"grid"},c.a.createElement(X.a,null))))),c.a.createElement(f.a,{container:!0,spacing:3},t.map((function(e){return c.a.createElement(f.a,{item:!0,key:e.id,md:"grid"===N?4:12,sm:"grid"===N?6:12,xs:12},c.a.createElement(Y.a,{project:e}))}))),c.a.createElement(i.a,{mt:6,display:"flex",justifyContent:"center"},c.a.createElement(Q.a,{count:3})),c.a.createElement(R.a,{anchorEl:s.current,className:o.menu,onClose:function(){d(!1)},open:E,elevation:1},["Most recent","Popular","Price high","Price low","On sale"].map((function(e){return c.a.createElement(W.a,{key:e,onClick:function(){return O(e),void d(!1)}},c.a.createElement(H.a,{primary:e}))}))))},_=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=_(),a=Object(u.a)(),t=Object(r.useState)([]),l=Object(n.a)(t,2),p=l[0],E=l[1],b=Object(r.useCallback)((function(){m.a.get("/api/projects/projects").then((function(e){a.current&&E(e.data.projects)}))}),[a]);return Object(r.useEffect)((function(){b()}),[b]),c.a.createElement(s.a,{className:e.root,title:"Project List"},c.a.createElement(o.a,{maxWidth:"lg"},c.a.createElement(N,null),c.a.createElement(i.a,{mt:3},c.a.createElement(M,null)),c.a.createElement(i.a,{mt:6},c.a.createElement($,{projects:p}))))}}}]);
//# sourceMappingURL=45.3df7666d.chunk.js.map