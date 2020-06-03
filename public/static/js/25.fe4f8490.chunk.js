(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[25],{1128:function(e,t,n){"use strict";var o=n(1),a=n(4),r=n(0),i=(n(2),n(3)),c=n(182),l=n(7),s=r.forwardRef((function(e,t){var n=e.classes,l=e.className,s=e.raised,u=void 0!==s&&s,d=Object(a.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(o.a)({className:Object(i.a)(n.root,l),elevation:u?8:1,ref:t},d))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1129:function(e,t,n){"use strict";var o=n(1),a=n(4),r=n(0),i=(n(2),n(3)),c=n(7),l=r.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=Object(a.a)(e,["classes","className","component"]);return r.createElement(s,Object(o.a)({className:Object(i.a)(n.root,c),ref:t},u))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},1143:function(e,t,n){"use strict";var o=n(1),a=n(4),r=n(0),i=(n(2),n(3)),c=n(7),l=r.forwardRef((function(e,t){var n=e.active,c=e.alternativeLabel,l=void 0!==c&&c,s=e.classes,u=e.className,d=e.completed,p=e.disabled,f=(e.index,e.orientation),g=void 0===f?"horizontal":f,v=Object(a.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return r.createElement("div",Object(o.a)({className:Object(i.a)(s.root,s[g],u,l&&s.alternativeLabel,n&&s.active,d&&s.completed,p&&s.disabled),ref:t},v),r.createElement("span",{className:Object(i.a)(s.line,{horizontal:s.lineHorizontal,vertical:s.lineVertical}[g])}))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(l)},1144:function(e,t,n){"use strict";var o=n(1),a=n(4),r=n(0),i=(n(2),n(3)),c=n(7),l=n(182),s=n(1143),u=r.createElement(s.a,null),d=r.forwardRef((function(e,t){var n=e.activeStep,c=void 0===n?0:n,s=e.alternativeLabel,d=void 0!==s&&s,p=e.children,f=e.classes,g=e.className,v=e.connector,m=void 0===v?u:v,h=e.nonLinear,b=void 0!==h&&h,y=e.orientation,S=void 0===y?"horizontal":y,w=Object(a.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),O=r.isValidElement(m)?r.cloneElement(m,{orientation:S}):null,j=r.Children.toArray(p),x=j.map((function(e,t){var n={alternativeLabel:d,connector:m,last:t+1===j.length,orientation:S},a={index:t,active:!1,completed:!1,disabled:!1};return c===t?a.active=!0:!b&&c>t?a.completed=!0:!b&&c<t&&(a.disabled=!0),[!d&&O&&0!==t&&r.cloneElement(O,Object(o.a)({key:t},a)),r.cloneElement(e,Object(o.a)(Object(o.a)(Object(o.a)({},n),a),e.props))]}));return r.createElement(l.a,Object(o.a)({square:!0,elevation:0,className:Object(i.a)(f.root,f[S],g,d&&f.alternativeLabel),ref:t},w),x)}));t.a=Object(c.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(d)},1145:function(e,t,n){"use strict";var o=n(1),a=n(4),r=n(0),i=(n(138),n(2),n(3)),c=n(7),l=r.forwardRef((function(e,t){var n=e.active,c=void 0!==n&&n,l=e.alternativeLabel,s=e.children,u=e.classes,d=e.className,p=e.completed,f=void 0!==p&&p,g=e.connector,v=e.disabled,m=void 0!==v&&v,h=e.expanded,b=void 0!==h&&h,y=e.index,S=e.last,w=e.orientation,O=Object(a.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]);return r.createElement("div",Object(o.a)({className:Object(i.a)(u.root,u[w],d,l&&u.alternativeLabel,f&&u.completed),ref:t},O),g&&l&&0!==y&&r.cloneElement(g,{orientation:w,alternativeLabel:l,index:y,active:c,completed:f,disabled:m}),r.Children.map(s,(function(e){return r.isValidElement(e)?r.cloneElement(e,Object(o.a)({active:c,alternativeLabel:l,completed:f,disabled:m,expanded:b,last:S,icon:y+1,orientation:w},e.props)):null})))}));t.a=Object(c.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(l)},1146:function(e,t,n){"use strict";var o=n(1),a=n(4),r=n(0),i=(n(2),n(3)),c=n(7),l=n(65),s=n(1156),u=r.forwardRef((function(e,t){var n=e.active,c=void 0!==n&&n,u=e.alternativeLabel,d=void 0!==u&&u,p=e.children,f=e.classes,g=e.className,v=e.completed,m=void 0!==v&&v,h=e.disabled,b=void 0!==h&&h,y=e.error,S=void 0!==y&&y,w=(e.expanded,e.icon),O=(e.last,e.optional),j=e.orientation,x=void 0===j?"horizontal":j,E=e.StepIconComponent,I=e.StepIconProps,L=Object(a.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),P=E;return w&&!P&&(P=s.a),r.createElement("span",Object(o.a)({className:Object(i.a)(f.root,f[x],g,b&&f.disabled,d&&f.alternativeLabel,S&&f.error),ref:t},L),w||P?r.createElement("span",{className:Object(i.a)(f.iconContainer,d&&f.alternativeLabel)},r.createElement(P,Object(o.a)({completed:m,active:c,error:S,icon:w},I))):null,r.createElement("span",{className:f.labelContainer},r.createElement(l.a,{variant:"body2",component:"span",className:Object(i.a)(f.label,d&&f.alternativeLabel,m&&f.completed,c&&f.active,S&&f.error),display:"block"},p),O))}));u.muiName="StepLabel",t.a=Object(c.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(u)},1156:function(e,t,n){"use strict";var o=n(0),a=(n(2),n(3)),r=n(152),i=Object(r.a)(o.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),c=Object(r.a)(o.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),l=n(7),s=n(106),u=o.createElement("circle",{cx:"12",cy:"12",r:"12"}),d=o.forwardRef((function(e,t){var n=e.completed,r=void 0!==n&&n,l=e.icon,d=e.active,p=void 0!==d&&d,f=e.error,g=void 0!==f&&f,v=e.classes;if("number"===typeof l||"string"===typeof l){var m=Object(a.a)(v.root,p&&v.active,g&&v.error,r&&v.completed);return g?o.createElement(c,{className:m,ref:t}):r?o.createElement(i,{className:m,ref:t}):o.createElement(s.a,{className:m,ref:t},u,o.createElement("text",{className:v.text,x:"12",y:"16",textAnchor:"middle"},l))}return l}));t.a=Object(l.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(d)},1728:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLatLng=t.geocodeByPlaceId=t.geocodeByAddress=void 0;var o,a=n(1729),r=(o=a)&&o.__esModule?o:{default:o},i=n(1732);t.geocodeByAddress=i.geocodeByAddress,t.geocodeByPlaceId=i.geocodeByPlaceId,t.getLatLng=i.getLatLng,t.default=r.default},1729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(0)),i=s(n(2)),c=s(n(1730)),l=n(1731);function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init=function(){if(!window.google)throw new Error("[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library");if(!window.google.maps.places)throw new Error("[react-places-autocomplete]: Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library");n.autocompleteService=new window.google.maps.places.AutocompleteService,n.autocompleteOK=window.google.maps.places.PlacesServiceStatus.OK,n.setState((function(e){return e.ready?null:{ready:!0}}))},n.autocompleteCallback=function(e,t){if(n.setState({loading:!1}),t===n.autocompleteOK){var o=n.props.highlightFirstSuggestion;n.setState({suggestions:e.map((function(e,t){return{id:e.id,description:e.description,placeId:e.place_id,active:!(!o||0!==t),index:t,formattedSuggestion:(n=e.structured_formatting,{mainText:n.main_text,secondaryText:n.secondary_text}),matchedSubstrings:e.matched_substrings,terms:e.terms,types:e.types};var n}))})}else n.props.onError(t,n.clearSuggestions)},n.fetchPredictions=function(){var e=n.props.value;e.length&&(n.setState({loading:!0}),n.autocompleteService.getPlacePredictions(o({},n.props.searchOptions,{input:e}),n.autocompleteCallback))},n.clearSuggestions=function(){n.setState({suggestions:[]})},n.clearActive=function(){n.setState({suggestions:n.state.suggestions.map((function(e){return o({},e,{active:!1})}))})},n.handleSelect=function(e,t){n.clearSuggestions(),n.props.onSelect?n.props.onSelect(e,t):n.props.onChange(e)},n.getActiveSuggestion=function(){return n.state.suggestions.find((function(e){return e.active}))},n.selectActiveAtIndex=function(e){var t=n.state.suggestions.find((function(t){return t.index===e})).description;n.setActiveAtIndex(e),n.props.onChange(t)},n.selectUserInputValue=function(){n.clearActive(),n.props.onChange(n.state.userInputValue)},n.handleEnterKey=function(){var e=n.getActiveSuggestion();void 0===e?n.handleSelect(n.props.value,null):n.handleSelect(e.description,e.placeId)},n.handleDownKey=function(){if(0!==n.state.suggestions.length){var e=n.getActiveSuggestion();void 0===e?n.selectActiveAtIndex(0):e.index===n.state.suggestions.length-1?n.selectUserInputValue():n.selectActiveAtIndex(e.index+1)}},n.handleUpKey=function(){if(0!==n.state.suggestions.length){var e=n.getActiveSuggestion();void 0===e?n.selectActiveAtIndex(n.state.suggestions.length-1):0===e.index?n.selectUserInputValue():n.selectActiveAtIndex(e.index-1)}},n.handleInputKeyDown=function(e){switch(e.key){case"Enter":e.preventDefault(),n.handleEnterKey();break;case"ArrowDown":e.preventDefault(),n.handleDownKey();break;case"ArrowUp":e.preventDefault(),n.handleUpKey();break;case"Escape":n.clearSuggestions()}},n.setActiveAtIndex=function(e){n.setState({suggestions:n.state.suggestions.map((function(t,n){return o({},t,n===e?{active:!0}:{active:!1})}))})},n.handleInputChange=function(e){var t=e.target.value;n.props.onChange(t),n.setState({userInputValue:t}),t?n.props.shouldFetchSuggestions&&n.debouncedFetchPredictions():n.clearSuggestions()},n.handleInputOnBlur=function(){n.mousedownOnSuggestion||n.clearSuggestions()},n.getActiveSuggestionId=function(){var e=n.getActiveSuggestion();return e?"PlacesAutocomplete__suggestion-"+e.placeId:void 0},n.getIsExpanded=function(){return n.state.suggestions.length>0},n.getInputProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.hasOwnProperty("value"))throw new Error("[react-places-autocomplete]: getInputProps does not accept `value`. Use `value` prop instead");if(e.hasOwnProperty("onChange"))throw new Error("[react-places-autocomplete]: getInputProps does not accept `onChange`. Use `onChange` prop instead");var t={type:"text",autoComplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":n.getIsExpanded(),"aria-activedescendant":n.getActiveSuggestionId(),disabled:!n.state.ready};return o({},t,e,{onKeyDown:(0,l.compose)(n.handleInputKeyDown,e.onKeyDown),onBlur:(0,l.compose)(n.handleInputOnBlur,e.onBlur),value:n.props.value,onChange:function(e){n.handleInputChange(e)}})},n.getSuggestionItemProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.handleSuggestionMouseEnter.bind(n,e.index),r=n.handleSuggestionClick.bind(n,e);return o({},t,{key:e.id,id:n.getActiveSuggestionId(),role:"option",onMouseEnter:(0,l.compose)(a,t.onMouseEnter),onMouseLeave:(0,l.compose)(n.handleSuggestionMouseLeave,t.onMouseLeave),onMouseDown:(0,l.compose)(n.handleSuggestionMouseDown,t.onMouseDown),onMouseUp:(0,l.compose)(n.handleSuggestionMouseUp,t.onMouseUp),onTouchStart:(0,l.compose)(n.handleSuggestionTouchStart,t.onTouchStart),onTouchEnd:(0,l.compose)(n.handleSuggestionMouseUp,t.onTouchEnd),onClick:(0,l.compose)(r,t.onClick)})},n.handleSuggestionMouseEnter=function(e){n.setActiveAtIndex(e)},n.handleSuggestionMouseLeave=function(){n.mousedownOnSuggestion=!1,n.clearActive()},n.handleSuggestionMouseDown=function(e){e.preventDefault(),n.mousedownOnSuggestion=!0},n.handleSuggestionTouchStart=function(){n.mousedownOnSuggestion=!0},n.handleSuggestionMouseUp=function(){n.mousedownOnSuggestion=!1},n.handleSuggestionClick=function(e,t){t&&t.preventDefault&&t.preventDefault();var o=e.description,a=e.placeId;n.handleSelect(o,a),setTimeout((function(){n.mousedownOnSuggestion=!1}))},n.state={loading:!1,suggestions:[],userInputValue:e.value,ready:!e.googleCallbackName},n.debouncedFetchPredictions=(0,c.default)(n.fetchPredictions,n.props.debounce),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props.googleCallbackName;e?window.google?this.init():window[e]=this.init:this.init()}},{key:"componentWillUnmount",value:function(){var e=this.props.googleCallbackName;e&&window[e]&&delete window[e]}},{key:"render",value:function(){return this.props.children({getInputProps:this.getInputProps,getSuggestionItemProps:this.getSuggestionItemProps,loading:this.state.loading,suggestions:this.state.suggestions})}}]),t}(r.default.Component);u.propTypes={onChange:i.default.func.isRequired,value:i.default.string.isRequired,children:i.default.func.isRequired,onError:i.default.func,onSelect:i.default.func,searchOptions:i.default.shape({bounds:i.default.object,componentRestrictions:i.default.object,location:i.default.object,offset:i.default.oneOfType([i.default.number,i.default.string]),radius:i.default.oneOfType([i.default.number,i.default.string]),types:i.default.array}),debounce:i.default.number,highlightFirstSuggestion:i.default.bool,shouldFetchSuggestions:i.default.bool,googleCallbackName:i.default.string},u.defaultProps={onError:function(e,t){return console.error("[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ",e)},searchOptions:{},debounce:200,highlightFirstSuggestion:!1,shouldFetchSuggestions:!0},t.default=u},1730:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),u=Object.prototype.toString,d=Math.max,p=Math.min,f=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var c=a.test(e);return c||r.test(e)?i(e.slice(2),c?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,a,r,i,c,l,s=0,u=!1,m=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=a;return o=a=void 0,s=t,i=e.apply(r,n)}function y(e){return s=e,c=setTimeout(w,t),u?b(e):i}function S(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=r}function w(){var e=f();if(S(e))return O(e);c=setTimeout(w,function(e){var n=t-(e-l);return m?p(n,r-(e-s)):n}(e))}function O(e){return c=void 0,h&&o?b(e):(o=a=void 0,i)}function j(){var e=f(),n=S(e);if(o=arguments,a=this,l=e,n){if(void 0===c)return y(l);if(m)return c=setTimeout(w,t),b(l)}return void 0===c&&(c=setTimeout(w,t)),i}return t=v(t)||0,g(n)&&(u=!!n.leading,r=(m="maxWait"in n)?d(v(n.maxWait)||0,t):r,h="trailing"in n?!!n.trailing:h),j.cancel=function(){void 0!==c&&clearTimeout(c),s=0,o=l=a=c=void 0},j.flush=function(){return void 0===c?i:O(f())},j}}).call(this,n(45))},1731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.compose=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];t.forEach((function(e){return e&&e.apply(void 0,n)}))}},t.pick=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return n.reduce((function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t}),{})}},1732:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.geocodeByAddress=function(e){var t=new window.google.maps.Geocoder,n=window.google.maps.GeocoderStatus.OK;return new Promise((function(o,a){t.geocode({address:e},(function(e,t){t!==n&&a(t),o(e)}))}))},t.getLatLng=function(e){return new Promise((function(t,n){try{t({lat:e.geometry.location.lat(),lng:e.geometry.location.lng()})}catch(o){n(o)}}))},t.geocodeByPlaceId=function(e){var t=new window.google.maps.Geocoder,n=window.google.maps.GeocoderStatus.OK;return new Promise((function(o,a){t.geocode({placeId:e},(function(e,t){t!==n&&a(t),o(e)}))}))}},1733:function(e,t,n){"use strict";var o=n(118);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=(0,o(n(137)).default)(a.default.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");t.default=r},2299:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(2),i=n.n(r);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=Object(o.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,s=l(e,["color","size"]);return a.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Star",t.a=s}}]);
//# sourceMappingURL=25.fe4f8490.chunk.js.map