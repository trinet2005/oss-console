"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3379],{14917:function(e,n,t){t(72791);var i=t(61889),o=t(72455),a=t(80184),r=(0,o.Z)((function(e){return{headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44},"@media (max-width: 600px)":{display:"none"}},headerBarSubheader:{color:"grey","@media (max-width: 900px)":{maxWidth:200}},stContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:8,borderBottom:"1px solid #EAEAEA","@media (max-width: 600px)":{flexFlow:"column"}},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:19}},leftItems:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexFlow:"column",width:"100%"}},rightItems:{display:"flex",alignItems:"center","& button":{marginLeft:8},"@media (max-width: 600px)":{width:"100%"}}}}));n.Z=function(e){var n=e.icon,t=e.title,o=e.subTitle,s=e.actions,l=e.className,c=r();return(0,a.jsx)(i.ZP,{container:!0,children:(0,a.jsxs)(i.ZP,{item:!0,xs:12,className:"".concat(c.stContainer," ").concat(l||""),children:[(0,a.jsxs)("div",{className:c.leftItems,children:[n?(0,a.jsx)("div",{className:c.headerBarIcon,children:n}):null,(0,a.jsxs)("div",{className:c.titleColumn,children:[(0,a.jsx)("h1",{style:{margin:0},children:t}),(0,a.jsx)("span",{className:c.headerBarSubheader,children:o})]})]}),(0,a.jsx)("div",{className:c.rightItems,children:s})]})})}},50276:function(e,n,t){var i=t(1413),o=t(29439),a=t(72791),r=t(64554),s=t(43896),l=t(83449),c=t(47283),u=t(82851),d=t(25787),f=t(13967),x=t(11135),h=t(95193),m=t(57689),v=t(80184),p={minHeight:60};n.Z=(0,d.Z)((function(e){return(0,x.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,d=e.selectedTab,x=void 0===d?"0":d,g=e.routes,j=e.isRouteTabs,Z=(0,f.Z)(),b=(0,m.TH)().pathname,y=void 0===b?"":b,k=(0,h.Z)(Z.breakpoints.down("md")),C=(0,a.useState)(x),w=(0,o.Z)(C,2),E=w[0],T=w[1],I=[],_=[];if((0,a.useEffect)((function(){if(j){var e=n.find((function(e){return e.tabConfig.to===y}));e&&T(e.tabConfig.value)}}),[j,n,y]),!n)return null;n.forEach((function(e){I.push(e.tabConfig),_.push(e.content)}));return(0,v.jsx)(l.ZP,{value:"".concat(E),children:(0,v.jsxs)(r.Z,{className:t.tabsContainer,children:[(0,v.jsx)(r.Z,{className:t.tabsHeaderContainer,children:(0,v.jsx)(c.Z,{onChange:function(e,n){T(n)},orientation:k?"horizontal":"vertical",variant:k?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:I.map((function(e,n){return e?(0,v.jsx)(s.Z,(0,i.Z)((0,i.Z)({className:t.tabHeader,value:"".concat(n),style:p},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,v.jsxs)(r.Z,{className:t.tabContentContainer,children:[j?null:_.map((function(e,n){return(0,v.jsx)(u.Z,{classes:(0,i.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),j?(0,v.jsx)("div",{className:t.tabPanel,children:g}):null]})]})})}))},53379:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var i=t(1413),o=t(72791),a=t(11135),r=t(25787),s=t(61889),l=t(58493),c=t(23814),u=t(29945),d=t(57689),f=t(11087),x=t(50276),h=t(14917),m=t(29439),v=t(26181),p=t.n(v),g=t(64554),j=t(81207),Z=t(10091),b=t(90767),y=t(87995),k=t(81551),C=t(93433),w=t(21435),E=t(56028),T=t(76189),I=t(80184),_=(0,T.Z)((0,I.jsx)("path",{d:"M10 15h5.88c.27-.31.67-.5 1.12-.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.44 0-.84-.19-1.12-.5H11.9c-.46 2.28-2.48 4-4.9 4-2.76 0-5-2.24-5-5 0-2.42 1.72-4.44 4-4.9v2.07c-1.16.41-2 1.53-2 2.83 0 1.65 1.35 3 3 3s3-1.35 3-3v-1zm2.5-11c1.65 0 3 1.35 3 3h2c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.43.6 2.71 1.55 3.62l-2.35 3.9c-.68.14-1.2.75-1.2 1.48 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.16-.02-.31-.07-.45l3.38-5.63C10.49 9.61 9.5 8.42 9.5 7c0-1.65 1.35-3 3-3zm4.5 9c-.64 0-1.23.2-1.72.54l-3.05-5.07C11.53 8.35 11 7.74 11 7c0-.83.67-1.5 1.5-1.5S14 6.17 14 7c0 .15-.02.29-.06.43l2.19 3.65c.28-.05.57-.08.87-.08 2.76 0 5 2.24 5 5s-2.24 5-5 5c-1.85 0-3.47-1.01-4.33-2.5h2.67c.48.32 1.05.5 1.66.5 1.65 0 3-1.35 3-3s-1.35-3-3-3z"}),"Webhook"),S=t(13901),F=t(36909),N=t(40986),R=function(e){var n=e.open,t=e.type,a=e.onCloseEndpoint,r=(0,o.useState)(""),s=(0,m.Z)(r,2),l=s[0],d=s[1],f=(0,o.useState)(""),x=(0,m.Z)(f,2),h=x[0],v=x[1],p=(0,o.useState)(""),g=(0,m.Z)(p,2),Z=g[0],b=g[1],T=(0,o.useState)(!1),R=(0,m.Z)(T,2),A=R[0],P=R[1],D=(0,o.useState)(["name","endpoint"]),M=(0,m.Z)(D,2),z=M[0],B=M[1],W=(0,o.useState)(["name","endpoint","auth-token"]),O=(0,m.Z)(W,2),L=O[0],H=O[1],U=(0,k.TL)(),G=function(e){H(L.filter((function(n){return n!==e})))},Q=function(e,n){z.includes(e)&&n?B(z.filter((function(n){return n!==e}))):n||z.includes(e)||B([].concat((0,C.Z)(z),[e]))},V="Add new Webhook",q=(0,I.jsx)(_,{});switch(t){case"logger_webhook":V="New Logger Webhook",q=(0,I.jsx)(S.Z,{});break;case"audit_webhook":V="New Audit Webhook",q=(0,I.jsx)(F.Z,{})}return(0,I.jsx)(o.Fragment,{children:(0,I.jsxs)(E.Z,{modalOpen:n,title:V,onClose:a,titleIcon:q,children:[(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(w.Z,{id:"name",name:"name",onChange:function(e){G("name"),d(e.target.value),Q("name",e.target.validity.valid)},error:z.includes("name")&&!L.includes("name")?"Invalid Name":"",label:"Name",value:l,pattern:"^(?=.*[a-zA-Z0-9]).{1,}$",required:!0})}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(w.Z,{id:"endpoint",name:"endpoint",onChange:function(e){G("endpoint"),v(e.target.value),Q("endpoint",e.target.validity.valid)},error:z.includes("endpoint")&&!L.includes("endpoint")?"Invalid Endpoint set":"",label:"Endpoint",value:h,pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?(\\/[a-zA-Z0-9\\-.\\/]*)?$",required:!0})}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(w.Z,{id:"auth-token",name:"auth-token",onChange:function(e){G("auth-token"),b(e.target.value)},label:"Auth Token",value:Z})}),A&&(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:{marginBottom:10},children:(0,I.jsx)(N.Z,{})}),(0,I.jsxs)(u.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,I.jsx)(u.zxk,{id:"reset",type:"button",variant:"regular",disabled:A,onClick:a,label:"Cancel",sx:{marginRight:10}}),(0,I.jsx)(u.zxk,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:A||0!==z.length,label:"Save",onClick:function(){if(!A&&0===z.length)if(""!==l.trim())if(""!==h.trim()){P(!0);var e={key_values:[{key:"endpoint",value:h},{key:"auth_token",value:Z}],arn_resource_id:l};j.Z.invoke("PUT","/api/v1/configs/".concat(t),e).then((function(e){P(!1),U((0,y.cN)(e.restart)),e.restart||U((0,y.y1)("Configuration saved successfully")),a(),U((0,y.Ie)(!0))})).catch((function(e){P(!1),U((0,y.Ih)(e))}))}else B([].concat((0,C.Z)(z),["endpoint"]));else B([].concat((0,C.Z)(z),["name"]))}})]})]})})},A=t(51691),P=t(23508),D=function(e){var n=e.modalOpen,t=e.onClose,i=e.selectedARN,a=(e.type,(0,o.useState)(!1)),r=(0,m.Z)(a,2),s=r[0],l=r[1],c=(0,k.TL)();(0,o.useEffect)((function(){s&&j.Z.invoke("POST","/api/v1/configs/".concat(i,"/reset")).then((function(){l(!1),c((0,y.cN)(!0)),c((0,y.Ie)(!0)),t()})).catch((function(e){l(!1),c((0,y.Ih)(e))}))}),[s,c,t,i]);var d=!i.includes(":"),f="Are you sure you want to delete the Configured Endpoint";return d&&(f="Are you sure you want to reset the Default"),(0,I.jsx)(P.Z,{title:d?"Reset Default Webhook":"Delete Webhook",confirmText:d?"Reset":"Delete",isOpen:n,isLoading:s,onConfirm:function(){l(!0)},titleIcon:(0,I.jsx)(u.NvT,{}),onClose:t,confirmationContent:(0,I.jsxs)(A.Z,{children:["".concat(f," "),(0,I.jsx)("strong",{children:i}),"?"]})})},M=t(81159),z=t(64163),B=function(e){var n,t,a,r=e.open,s=e.type,d=e.endpointInfo,f=e.onCloseEndpoint,x=(0,o.useState)(""),h=(0,m.Z)(x,2),v=h[0],p=h[1],g=(0,o.useState)(""),Z=(0,m.Z)(g,2),b=Z[0],T=Z[1],R=(0,o.useState)(""),A=(0,m.Z)(R,2),P=A[0],D=A[1],B=(0,o.useState)("on"),W=(0,m.Z)(B,2),O=W[0],L=W[1],H=(0,o.useState)(!1),U=(0,m.Z)(H,2),G=U[0],Q=U[1],V=(0,o.useState)([]),q=(0,m.Z)(V,2),K=q[0],Y=q[1],$=(0,k.TL)();(0,o.useEffect)((function(){if(d){var e=d.key_values.find((function(e){return"endpoint"===e.key})),n=d.key_values.find((function(e){return"auth_token"===e.key})),t=d.key_values.find((function(e){return"enable"===e.key})),i=[];if(e){var o=e.value;""===o?i.push("endpoint"):T(o)}if(n){var a=n.value;""===a?i.push("auth-token"):D(a)}t&&"off"===t.value&&L(t.value),p(d.name||""),Y(i)}}),[d]);var X=!v.includes(":"),J=d.key_values.filter((function(e){return!!e.env_override})),ee=(0,l.F_)(J),ne="Edit Webhook",te=(0,I.jsx)(_,{});switch(s){case"logger_webhook":ne="Edit ".concat(X?" the Default ":"","Logger Webhook"),te=(0,I.jsx)(S.Z,{});break;case"audit_webhook":ne="Edit ".concat(X?" the Default ":"","Audit Webhook"),te=(0,I.jsx)(F.Z,{})}return J.length>0&&(ne="View env variable Webhook"),(0,I.jsx)(o.Fragment,{children:(0,I.jsx)(E.Z,{modalOpen:r,title:"".concat(ne).concat(X?"":" - ".concat(v)),onClose:f,titleIcon:te,children:J.length>0?(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(z.Z,{label:"Enabled",content:(null===(n=ee.enable)||void 0===n?void 0:n.value)||"-",actionButton:(0,I.jsx)(u.rjZ,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,I.jsx)(u.ua7,{tooltip:ee.enable?"This value is set from the ".concat(ee.enable.overrideEnv," environment variable"):"",placement:"left",children:(0,I.jsx)(u.zD0,{style:{width:20}})})})})}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(z.Z,{label:"Endpoint",content:(null===(t=ee.endpoint)||void 0===t?void 0:t.value)||"-",actionButton:(0,I.jsx)(u.rjZ,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,I.jsx)(u.ua7,{tooltip:ee.enable?"This value is set from the ".concat(ee.endpoint.overrideEnv," environment variable"):"",placement:"left",children:(0,I.jsx)(u.zD0,{style:{width:20}})})})})}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(z.Z,{label:"Auth Token",content:(null===(a=ee.auth_token)||void 0===a?void 0:a.value)||"-",actionButton:(0,I.jsx)(u.rjZ,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,I.jsx)(u.ua7,{tooltip:ee.enable?"This value is set from the ".concat(ee.auth_token.overrideEnv," environment variable"):"",placement:"left",children:(0,I.jsx)(u.zD0,{style:{width:20}})})})})})]}):(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(M.Z,{onChange:function(e){var n=e.target.checked?"on":"off";L(n)},id:"endpoint_enabled",name:"endpoint_enabled",label:"Enabled",value:"switch_on",checked:"on"===O})}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(w.Z,{id:"endpoint",name:"endpoint",onChange:function(e){T(e.target.value),function(e,n){K.includes(e)&&n?Y(K.filter((function(n){return n!==e}))):n||K.includes(e)||Y([].concat((0,C.Z)(K),[e]))}("endpoint",e.target.validity.valid)},error:K.includes("endpoint")?"Invalid Endpoint set":"",label:"Endpoint",value:b,pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?(\\/[a-zA-Z0-9\\-.\\/]*)?$",required:!0})}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:(0,i.Z)({},c.DF.formFieldRow),children:(0,I.jsx)(w.Z,{id:"auth-token",name:"auth-token",onChange:function(e){D(e.target.value)},label:"Auth Token",value:P})}),G&&(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:{marginBottom:10},children:(0,I.jsx)(N.Z,{})}),(0,I.jsxs)(u.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,I.jsx)(u.zxk,{id:"reset",type:"button",variant:"regular",disabled:G,onClick:f,label:"Cancel",sx:{marginRight:10}}),(0,I.jsx)(u.zxk,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:G||0!==K.length,label:"Update",onClick:function(){if(!G&&0===K.length)if(b&&""!==b.trim()){Q(!0);var e={key_values:[{key:"endpoint",value:b},{key:"auth_token",value:P},{key:"enable",value:O}]};j.Z.invoke("PUT","/api/v1/configs/".concat(v),e).then((function(e){Q(!1),$((0,y.cN)(e.restart)),e.restart||$((0,y.y1)("Configuration saved successfully")),f(),$((0,y.Ie)(!0))})).catch((function(e){Q(!1),$((0,y.Ih)(e))}))}else Y([].concat((0,C.Z)(K),["endpoint"]))}})]})]})})})},W=function(e){e.setResetConfigurationOpen;var n=e.WebhookSettingslist,t=e.type,i=(0,o.useState)(!1),a=(0,m.Z)(i,2),r=a[0],s=a[1],l=(0,o.useState)(!1),c=(0,m.Z)(l,2),d=c[0],f=c[1],x=(0,o.useState)(!1),h=(0,m.Z)(x,2),v=h[0],p=h[1],g=(0,o.useState)(""),j=(0,m.Z)(g,2),Z=j[0],b=j[1],y=(0,o.useState)(null),k=(0,m.Z)(y,2),C=k[0],w=k[1],E=[{type:"view",onClick:function(e){e.name&&(p(!0),w(e))}},{type:"delete",onClick:function(e){e.name&&(f(!0),b(e.name))},disableButtonFunction:function(e){var t=n.find((function(n){return n.name===e}));return!!t&&t.key_values.filter((function(e){return!!e.env_override})).length>0}}];return(0,I.jsxs)(u.rjZ,{container:!0,children:[r&&(0,I.jsx)(R,{open:r,type:t,onCloseEndpoint:function(){s(!1)}}),d&&(0,I.jsx)(D,{modalOpen:d,onClose:function(){f(!1),b("")},selectedARN:Z,type:t}),v&&C&&(0,I.jsx)(B,{open:v,type:t,endpointInfo:C,onCloseEndpoint:function(){p(!1),w(null)}}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,I.jsx)(u.zxk,{id:"newWebhook",variant:"callAction",onClick:function(){s(!0)},children:"New Endpoint"})}),(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:{padding:"0 10px 10px"},children:(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)("h3",{children:"Currently Configured Endpoints"}),(0,I.jsx)(u.wQF,{columns:[{label:"Status",elementKey:"key_values",renderFunction:function(e){var n=e.find((function(e){return"enable"===e.key}));if(null!==n&&void 0!==n&&n.env_override){var t=null!==n&&void 0!==n&&n.env_override.value&&"on"!==(null===n||void 0===n?void 0:n.env_override.value)&&null!==n&&void 0!==n&&n.env_override.value?"Disabled":"Enabled";return(0,I.jsxs)(u.rjZ,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,I.jsx)(u.zD0,{style:{fill:"#052F51",width:"14px"}}),t?"Enabled":"Disabled"]})}return n&&"on"!==n.value&&n.value?(0,I.jsxs)(u.rjZ,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,I.jsx)(u.qwj,{style:{fill:"#C83B51",width:14,height:14}}),"Disabled"]}):(0,I.jsxs)(u.rjZ,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,I.jsx)(u.Yp9,{style:{fill:"#4CCB92",width:14,height:14}}),"Enabled"]})},width:50},{label:"Name",elementKey:"name"},{label:"Endpoint",elementKey:"key_values",renderFunction:function(e){var n=e.find((function(e){return"endpoint"===e.key}));return n?n.env_override?n.env_override.value:n.value:""}}],itemActions:E,idField:"name",isLoading:!1,records:n,entityName:"endpoints",customPaperHeight:"calc(100vh - 750px)"})]})})]})},O=t(78687),L=(0,r.Z)((function(e){return(0,a.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},c.YI),c.Je),{},{settingsFormContainer:{display:"grid",gridTemplateColumns:"1fr",gridGap:"10px"}}))}))((function(e){var n=e.selectedConfiguration,t=e.classes,i=e.className,a=void 0===i?"":i,r=(0,k.TL)(),c=(0,d.s0)(),f=(0,d.TH)().pathname,x=void 0===f?"":f,h=x.substring(x.lastIndexOf("/")+1);h="settings"===h?"region":h;var v=(0,o.useState)([]),C=(0,m.Z)(v,2),w=C[0],E=C[1],T=(0,o.useState)(!1),_=(0,m.Z)(T,2),S=_[0],F=_[1],N=(0,o.useState)([]),R=(0,m.Z)(N,2),A=R[0],P=R[1],D=(0,o.useState)([]),M=(0,m.Z)(D,2),z=M[0],B=M[1],L=(0,o.useState)(!1),H=(0,m.Z)(L,2),U=H[0],G=H[1],Q=(0,o.useState)({}),V=(0,m.Z)(Q,2),q=V[0],K=V[1],Y=(0,O.v9)((function(e){return e.system.loadingConfigurations}));(0,o.useEffect)((function(){r((0,y.Ie)(!0))}),[h,r]),(0,o.useEffect)((function(){if(Y){var e=p()(n,"configuration_id",!1);if(e)return void j.Z.invoke("GET","/api/v1/configs/".concat(e)).then((function(n){B(n);var t=p()(n[0],"key_values",[]),i=l.DP[e].map((function(e){var n=t.find((function(n){return n.key===e.name})),i=(null===n||void 0===n?void 0:n.value)||"";return{key:e.name,value:e.customValueProcess?e.customValueProcess(i):i}}));P(i),K((0,l.F_)(i)),r((0,y.Ie)(!1))})).catch((function(e){r((0,y.Ie)(!1)),r((0,y.Ih)(e))}));r((0,y.Ie)(!1))}}),[Y,n,r]),(0,o.useEffect)((function(){if(S){var e={key_values:(0,l.DD)(w)};j.Z.invoke("PUT","/api/v1/configs/".concat(n.configuration_id),e).then((function(e){F(!1),r((0,y.cN)(e.restart)),r((0,y.Ie)(!0)),e.restart||r((0,y.y1)("Configuration saved successfully"))})).catch((function(e){F(!1),r((0,y.Ih)(e))}))}}),[S,r,n,w,c]);var $=(0,o.useCallback)((function(e){E(e)}),[E]),X=function(){G(!0)};return(0,I.jsxs)(o.Fragment,{children:[U&&(0,I.jsx)(b.Z,{configurationName:n.configuration_id,closeResetModalAndRefresh:function(e){G(!1),r((0,y.cN)(e)),e&&r((0,y.Ie)(!0))},resetOpen:U}),Y?(0,I.jsx)(s.ZP,{item:!0,xs:12,sx:{textAlign:"center",paddingTop:"15px"},children:(0,I.jsx)(u.aNw,{})}):(0,I.jsx)(g.Z,{sx:{padding:"15px",height:"100%"},children:"logger_webhook"===n.configuration_id||"audit_webhook"===n.configuration_id?(0,I.jsx)(W,{WebhookSettingslist:z,setResetConfigurationOpen:X,type:n.configuration_id}):(0,I.jsx)(o.Fragment,{children:(0,I.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),F(!0)},className:a,style:{height:"100%",display:"flex",flexFlow:"column"},children:[(0,I.jsx)(s.ZP,{item:!0,xs:12,className:t.settingsFormContainer,children:(0,I.jsx)(Z.default,{fields:l.DP[n.configuration_id],onChange:$,defaultVals:A,overrideEnv:q})}),(0,I.jsxs)(s.ZP,{item:!0,xs:12,sx:{paddingTop:"15px ",textAlign:"right",maxHeight:"60px",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[(0,I.jsx)(u.zxk,{id:"restore-defaults",variant:"secondary",onClick:X,label:"Restore Defaults"}),"\xa0 \xa0",(0,I.jsx)(u.zxk,{id:"save",type:"submit",variant:"callAction",disabled:S,label:"Save"})]})]})})})]})})),H=function(){var e=(0,d.TH)().pathname,n=void 0===e?"":e,t=n.substring(n.lastIndexOf("/")+1),i=l.bx.find((function(e){return e.configuration_id===t})),o="".concat(t);return(0,I.jsx)(u.rjZ,{item:!0,xs:12,sx:{height:"100%","& .identity_ldap, .api":{"& label":{minWidth:220,marginRight:0}}},children:i&&(0,I.jsx)(L,{className:"".concat(o),selectedConfiguration:i})})},U=t(56087),G=t(47974),Q=t(9505),V=t(45248),q=t(99779),K=t(27454),Y=function(){var e=(0,O.I0)(),n=(0,Q.Z)((function(e){(0,V.zZ)(new Blob([window.atob(e.value)]),"minio-server-config-".concat(q.ou.now().toFormat("LL-dd-yyyy-HH-mm-ss"),".conf"))}),(function(n){e((0,y.Ih)(n))})),t=(0,m.Z)(n,2),i=t[0],o=t[1];return(0,I.jsx)(K.Z,{tooltip:"Warning!. The resulting file would contain server configuration information in plain text.",children:(0,I.jsx)(u.zxk,{id:"export-config",onClick:function(){o("GET","api/v1/configs/export")},icon:(0,I.jsx)(u.rG2,{}),label:"Export",variant:"regular",disabled:i})})},$=function(){var e=(0,d.s0)(),n=(0,O.I0)(),t=(0,O.v9)((function(e){return e.system.serverNeedsRestart})),i=(0,o.useState)(void 0),a=(0,m.Z)(i,2),r=a[0],s=a[1],l=(0,o.useRef)(null),c=(0,Q.Z)((function(e){n((0,y.cN)(!0)),s(!0)}),(function(e){n((0,y.Ih)(e))})),f=(0,m.Z)(c,2),x=f[0],h=f[1];(0,o.useEffect)((function(){!t&&r&&e(0)}),[t,r,e]);return(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)("input",{type:"file",onChange:function(e){if(null!==e&&void 0!==e&&null!==e.target.files&&void 0!==e.target.files){e.preventDefault();var n=(0,m.Z)(e.target.files,1)[0],t=new FormData,i=new Blob([n],{type:n.type});t.append("file",i,n.name),h("POST","api/v1/configs/import",t),e.target.value=""}},style:{display:"none"},ref:l}),(0,I.jsx)(K.Z,{tooltip:"The file must be valid and  should have valid config values",children:(0,I.jsx)(u.zxk,{id:"import-config",onClick:function(){l&&l.current&&l.current.click()},icon:(0,I.jsx)(u._8t,{}),label:"Import",variant:"regular",disabled:x})})]})},X=(0,r.Z)((function(e){return(0,a.Z)((0,i.Z)((0,i.Z)((0,i.Z)({settingsOptionsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap",border:"#E5E5E5 1px solid",borderRadius:2,backgroundColor:"#fff"}},c.qg),c.OR),c.Bz))}))((function(e){var n=e.classes,t=(0,d.TH)().pathname,i=void 0===t?"":t,a=i.substring(i.lastIndexOf("/")+1);return a="settings"===a?"region":a,(0,I.jsxs)(o.Fragment,{children:[(0,I.jsx)(G.Z,{label:"Settings"}),(0,I.jsxs)(u.Xgh,{children:[(0,I.jsx)(s.ZP,{item:!0,xs:12,children:(0,I.jsxs)("div",{id:"settings-container",className:n.settingsOptionsContainer,children:[(0,I.jsx)(h.Z,{icon:(0,I.jsx)(u.ewm,{}),title:"MinIO Configuration:",actions:(0,I.jsxs)(g.Z,{sx:{display:"flex",gap:2},children:[(0,I.jsx)($,{}),(0,I.jsx)(Y,{})]})}),(0,I.jsx)(x.Z,{selectedTab:a,isRouteTabs:!0,routes:(0,I.jsxs)(d.Z5,{children:[l.bx.map((function(e){return(0,I.jsx)(d.AW,{path:"".concat(e.configuration_id),element:(0,I.jsx)(H,{})},"configItem-".concat(e.configuration_label))})),(0,I.jsx)(d.AW,{path:"/",element:(0,I.jsx)(d.Fg,{to:"".concat(U.gA.SETTINGS,"/region")})})]}),children:l.bx.map((function(e){var n,t=e.configuration_id;return{tabConfig:{label:e.configuration_label,value:t,icon:e.icon,component:f.rU,to:(n=t,"".concat(U.gA.SETTINGS,"/").concat(n))}}}))})]})}),(0,I.jsx)(s.ZP,{item:!0,xs:12,sx:{paddingTop:"15px"},children:(0,I.jsx)(u.KfX,{title:"Learn more about Configurations",iconComponent:(0,I.jsx)(u.ewm,{}),help:(0,I.jsxs)(o.Fragment,{children:["MinIO supports a variety of configurations ranging from encryption, compression, region, notifications, etc.",(0,I.jsx)("br",{}),(0,I.jsx)("br",{}),"You can learn more at our"," ",(0,I.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc-admin/mc-admin-config.html?ref=con#id4",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]})]})}))},90767:function(e,n,t){var i=t(29439),o=t(1413),a=t(72791),r=t(40986),s=t(51691),l=t(11135),c=t(25787),u=t(23814),d=t(81207),f=t(23508),x=t(29945),h=t(87995),m=t(81551),v=t(80184);n.Z=(0,c.Z)((function(e){return(0,l.Z)((0,o.Z)({wrapText:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"}},u.Qw))}))((function(e){var n=e.classes,t=e.configurationName,o=e.closeResetModalAndRefresh,l=e.resetOpen,c=(0,m.TL)(),u=(0,a.useState)(!1),p=(0,i.Z)(u,2),g=p[0],j=p[1];(0,a.useEffect)((function(){g&&d.Z.invoke("POST","/api/v1/configs/".concat(t,"/reset")).then((function(e){j(!1),o(!0)})).catch((function(e){j(!1),c((0,h.Ih)(e))}))}),[o,t,g,c]);return(0,v.jsx)(f.Z,{title:"Restore Defaults",confirmText:"Yes, Reset Configuration",isOpen:l,titleIcon:(0,v.jsx)(x.NvT,{}),isLoading:g,onConfirm:function(){j(!0)},onClose:function(){o(!1)},confirmationContent:(0,v.jsxs)(a.Fragment,{children:[g&&(0,v.jsx)(r.Z,{}),(0,v.jsxs)(s.Z,{children:["Are you sure you want to restore these configurations to default values?",(0,v.jsx)("br",{}),(0,v.jsx)("b",{className:n.wrapText,children:"Please note that this may cause your system to not be accessible"})]})]})})}))},83449:function(e,n,t){t.d(n,{ZP:function(){return s},_i:function(){return l},pQ:function(){return u},uU:function(){return c}});var i=t(29439),o=t(72791),a=t(80184),r=o.createContext(null);function s(e){var n=e.children,t=e.value,s=function(){var e=o.useState(null),n=(0,i.Z)(e,2),t=n[0],a=n[1];return o.useEffect((function(){a("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),l=o.useMemo((function(){return{idPrefix:s,value:t}}),[s,t]);return(0,a.jsx)(r.Provider,{value:l,children:n})}function l(){return o.useContext(r)}function c(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function u(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}},47283:function(e,n,t){var i=t(87462),o=t(63366),a=t(72791),r=t(18073),s=t(83449),l=t(80184),c=["children"],u=a.forwardRef((function(e,n){var t=e.children,u=(0,o.Z)(e,c),d=(0,s._i)();if(null===d)throw new TypeError("No TabContext provided");var f=a.Children.map(t,(function(e){return a.isValidElement(e)?a.cloneElement(e,{"aria-controls":(0,s.uU)(d,e.props.value),id:(0,s.pQ)(d,e.props.value)}):null}));return(0,l.jsx)(r.Z,(0,i.Z)({},u,{ref:n,value:d.value,children:f}))}));n.Z=u},82851:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(87462),o=t(63366),a=t(72791),r=t(28182),s=t(66934),l=t(31402),c=t(94419),u=t(21217);function d(e){return(0,u.Z)("MuiTabPanel",e)}(0,t(75878).Z)("MuiTabPanel",["root"]);var f=t(83449),x=t(80184),h=["children","className","value"],m=(0,s.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),v=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiTabPanel"}),a=t.children,s=t.className,u=t.value,v=(0,o.Z)(t,h),p=(0,i.Z)({},t),g=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d,n)}(p),j=(0,f._i)();if(null===j)throw new TypeError("No TabContext provided");var Z=(0,f.uU)(j,u),b=(0,f.pQ)(j,u);return(0,x.jsx)(m,(0,i.Z)({"aria-labelledby":b,className:(0,r.Z)(g.root,s),hidden:u!==j.value,id:Z,ref:n,role:"tabpanel",ownerState:p},v,{children:u===j.value&&a}))}))},95193:function(e,n,t){var i;t.d(n,{Z:function(){return f}});var o=t(29439),a=t(72791),r=t(69120),s=t(33073),l=t(40162);function c(e,n,t,i,r){var s=a.useState((function(){return r&&t?t(e).matches:i?i(e).matches:n})),c=(0,o.Z)(s,2),u=c[0],d=c[1];return(0,l.Z)((function(){var n=!0;if(t){var i=t(e),o=function(){n&&d(i.matches)};return o(),i.addListener(o),function(){n=!1,i.removeListener(o)}}}),[e,t]),u}var u=(i||(i=t.t(a,2))).useSyncExternalStore;function d(e,n,t,i,r){var s=a.useCallback((function(){return n}),[n]),l=a.useMemo((function(){if(r&&t)return function(){return t(e).matches};if(null!==i){var n=i(e).matches;return function(){return n}}return s}),[s,e,i,r,t]),c=a.useMemo((function(){if(null===t)return[s,function(){return function(){}}];var n=t(e);return[function(){return n.matches},function(e){return n.addListener(e),function(){n.removeListener(e)}}]}),[s,t,e]),d=(0,o.Z)(c,2),f=d[0],x=d[1];return u(x,f,l)}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,r.Z)(),i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,o=(0,s.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),a=o.defaultMatches,l=void 0!==a&&a,f=o.matchMedia,x=void 0===f?i?window.matchMedia:null:f,h=o.ssrMatchMedia,m=void 0===h?null:h,v=o.noSsr,p=void 0!==v&&v;var g="function"===typeof e?e(t):e;return g=g.replace(/^@media( ?)/m,""),(void 0!==u?d:c)(g,l,x,m,p)}}}]);
//# sourceMappingURL=3379.a771d55f.chunk.js.map