"use strict";(self["webpackChunksssbaer_front"]=self["webpackChunksssbaer_front"]||[]).push([[312],{4312:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Se});var o=t(9835);function i(e,a,t,i,n,l){const s=(0,o.up)("header-admi"),r=(0,o.up)("profile-card"),c=(0,o.up)("menu-admi"),d=(0,o.up)("router-view"),u=(0,o.up)("menu-sticky-admi"),m=(0,o.up)("q-page-container"),p=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(p,{view:"lHh Lpr fff",class:"bg-grey-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{onChangeDrawer:a[0]||(a[0]=e=>i.drawer=!i.drawer),nombre:i.sesion.data.user.name,onChangeOpenProfileCard:a[1]||(a[1]=e=>i.profileCard=!i.profileCard)},null,8,["nombre"]),i.profileCard?((0,o.wg)(),(0,o.j4)(r,{key:0,profileCard:i.profileCard,onChangeOpenProfileCard:a[2]||(a[2]=e=>i.profileCard=!i.profileCard)},null,8,["profileCard"])):(0,o.kq)("",!0),(0,o.Wm)(c,{drawer:i.drawer,onChangeDrawer:a[3]||(a[3]=e=>i.drawer=!i.drawer)},null,8,["drawer"]),(0,o.Wm)(m,{class:"GPL__page-container"},{default:(0,o.w5)((()=>[(0,o.Wm)(d),(0,o.Wm)(u)])),_:1})])),_:1})}var n=t(499),l=t(6183),s=t(8910),r=t(6970),c=t(1957),d=t(6561),u=t.n(d);const m=(0,o._)("img",{src:u(),class:"banner"},null,-1),p=(0,o._)("span",{class:"q-ml-sm"},"Asisteme BAER",-1),f={class:"q-gutter-sm row items-center no-wrap"},w=(0,o.Uk)(" No hay notificaciones "),g=(0,o.Uk)("Salir");function _(e,a,t,i,n,l){const s=(0,o.up)("q-btn"),d=(0,o.up)("q-icon"),u=(0,o.up)("q-toolbar-title"),_=(0,o.up)("q-space"),v=(0,o.up)("q-tooltip"),h=(0,o.up)("q-badge"),W=(0,o.up)("notis-comp"),b=(0,o.up)("q-banner"),y=(0,o.up)("q-card"),q=(0,o.up)("q-list"),Z=(0,o.up)("q-menu"),k=(0,o.up)("q-toolbar"),C=(0,o.up)("q-header");return(0,o.wg)(),(0,o.j4)(C,{elevated:"",class:"bg-white","height-hint":"64"},{default:(0,o.w5)((()=>[m,(0,o.Wm)(k,{class:"bg-white text-negative",style:{height:"64px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{flat:"",dense:"",round:"",onClick:a[0]||(a[0]=a=>e.$emit("changeDrawer")),"aria-label":"Menu",icon:"menu",class:"q-mx-md"}),(0,o.Wm)(d,{name:"flight_takeoff",size:"3em"}),e.$q.screen.gt.sm?((0,o.wg)(),(0,o.j4)(u,{key:0,shrink:"",class:"row items-center no-wrap"},{default:(0,o.w5)((()=>[p])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(_),(0,o._)("div",f,[(0,o.Wm)(s,{round:"",dense:"",flat:"",icon:"person",onClick:a[1]||(a[1]=a=>e.$emit("changeOpenProfileCard"))},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(t.nombre),1)])),_:1})])),_:1}),(0,o.Wm)(s,{round:"",dense:"",flat:"",icon:"notifications",onClick:i.readNotis},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(h,{color:"red","text-color":"white",floating:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(i.admiStore.notisSinLeer),1)])),_:1},512),[[c.F8,i.admiStore.notisSinLeer>0]]),(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{style:{"min-width":"100px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(W),(0,o.Wm)(y,{class:"text-center no-shadow no-border"},{default:(0,o.w5)((()=>[i.admiStore.globalNotis.length>0?((0,o.wg)(),(0,o.j4)(s,{key:0,label:"limpiar",style:{"max-width":"120px !important"},flat:"",dense:"",class:"text-indigo-8",onClick:i.deleteNotis},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(b,{key:1,rounded:"",class:"bg-grey-3"},{default:(0,o.w5)((()=>[w])),_:1}))])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"]),(0,o.Wm)(s,{round:"",dense:"",flat:"",onClick:a[2]||(a[2]=e=>i.cerrarSesion())},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"logout"}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[g])),_:1})])),_:1})])])),_:1})])),_:1})}var v=t(1446),h=t(1247),W=t(2176),b=t(4639),y=t(1569);const q={components:{NotisComp:W.Z},name:"HeaderAdmi",props:{nombre:{type:String,default:""}},setup(){const e=(0,l.Z)(),a=(0,v.Z)(),t=(0,s.tv)(),i=(0,h.o)(),n=async()=>{try{const o=await e.logout();o?t.push({name:"ingreso"}):a.notify({color:"negative",message:"Error al cerrar la sesion, consulte la consola para mas informacion"})}catch(o){console.log(o),a.notify({color:"negative",message:"Error al cerrar la sesion, consulte la consola para mas informacion"})}finally{t.push({name:"ingreso"})}},r=e=>{i.globalNotis.unshift(e)},c=async()=>{try{const t=await y.api.get("read-notis",e.authorizacion);t.data.success?i.notisSinLeer=0:a.notify({color:"negative",message:"Error al leer las notificaciones, consulte la consola para mas informacion"})}catch(t){console.log(t),a.notify({color:"negative",message:"Error al leer las notificaciones, consulte la consola para mas informacion"})}},d=async()=>{try{const t=await y.api.get("/delete-notis",e.authorizacion);t.data.success?i.globalNotis.length=0:a.notify({color:"negative",message:"Error al eliminar las notificaciones, consulte la consola para mas informacion"})}catch(t){console.log(t),a.notify({color:"negative",message:"Error al eliminar las notificaciones, consulte la consola para mas informacion"})}};return(0,o.bv)((async()=>{try{b.apiEvents.Echo.channel("SolicitudEnviada").listen("SolicitudEnviada",(e=>{r(e),console.log(e),e.solicitud.name=e.user.name,i.solicitudes.push(e.solicitud),a.notify({message:`${e.user.name} ha enviado una nueva solicitud.`,icon:"announcement",position:"top-right",color:"positive"})})),b.apiEvents.Echo.channel("EstadoActualizado").listen("EstadoActualizado",(t=>{const o=i.solicitudes.findIndex((e=>e.id==t.solicitud.id));i.solicitudes[o]=t.solicitud,t.solicitud.idAdministrador!=e.data.user.id&&a.notify({color:"info",icon:"info",position:"top-right",message:`${t.user.name} ha ${t.tipo} una solicitud.`})})),b.apiEvents.Echo["private"]("App.Models.User."+e.data.user.id).notification((e=>{r({data:e}),i.notisSinLeer++}));const t=await y.api.get("/notis",e.authorizacion),o=t.data;o.length>0&&o.forEach((e=>{e.read_at||i.notisSinLeer++,r(e)}))}catch(t){console.log(t),a.notify({color:"negative",icon:"info",message:"No se ha podido conectar al servidor de websockets, consulte la consola para mas informacion"})}})),{cerrarSesion:n,admiStore:i,readNotis:c,deleteNotis:d}}};var Z=t(1639),k=t(6602),C=t(1663),Q=t(4455),x=t(2857),S=t(1973),L=t(136),A=t(6858),P=t(990),z=t(6362),E=t(3246),G=t(4458),U=t(7128),H=t(9984),I=t.n(H);const M=(0,Z.Z)(q,[["render",_]]),B=M;I()(q,"components",{QHeader:k.Z,QToolbar:C.Z,QBtn:Q.Z,QIcon:x.Z,QToolbarTitle:S.Z,QSpace:L.Z,QTooltip:A.Z,QBadge:P.Z,QMenu:z.Z,QList:E.Z,QCard:G.Z,QBanner:U.Z});const j=(0,o._)("span",{class:"q-ml-sm"},"Asisteme BAER",-1),D=(0,o.Uk)("Solicitudes"),N=(0,o.Uk)("Atendidas por mi"),V=(0,o.Uk)("Gestion de cuentas");function $(e,a,t,i,n,l){const s=(0,o.up)("q-toolbar-title"),c=(0,o.up)("q-toolbar"),d=(0,o.up)("q-separator"),u=(0,o.up)("q-icon"),m=(0,o.up)("q-item-section"),p=(0,o.up)("q-item-label"),f=(0,o.up)("q-item"),w=(0,o.up)("q-list"),g=(0,o.up)("q-scroll-area"),_=(0,o.up)("q-drawer"),v=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(_,{modelValue:i.drawerModel,"onUpdate:modelValue":a[0]||(a[0]=e=>i.drawerModel=e),bordered:"",behavior:"mobile"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"fit"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"GPL__toolbar"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"row items-center text-grey-8"},{default:(0,o.w5)((()=>[j])),_:1})])),_:1}),(0,o.Wm)(w,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"q-my-md"}),(0,o.wy)(((0,o.wg)(),(0,o.j4)(f,{"active-class":"text-negative",clickable:"",class:"GPL__drawer-item",to:{name:"solicitudes admi"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:"view_list",color:"negative"})])),_:1}),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[D])),_:1})])),_:1})])),_:1})),[[v]]),(0,o.Wm)(d,{class:"q-my-md"}),(0,o.wy)(((0,o.wg)(),(0,o.j4)(f,{"active-class":"text-negative",clickable:"",class:"GPL__drawer-item",to:{name:"solicitudes realizadas admi"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:"checklist",color:"negative"})])),_:1}),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[N])),_:1})])),_:1})])),_:1})),[[v]]),(0,o.Wm)(d,{class:"q-my-md"}),(0,o.wy)(((0,o.wg)(),(0,o.j4)(f,{"active-class":"text-negative",clickable:"",class:"GPL__drawer-item",to:{name:"gestion de cuentas"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{name:"manage_accounts",color:"negative"})])),_:1}),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[V])),_:1})])),_:1})])),_:1})),[[v]]),(0,o.Wm)(d,{class:"q-my-md"}),(0,o.Wm)(f,{disable:"",class:"GPL__drawer-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(i.user.name),1)])),_:1}),(0,o.Wm)(m,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"negative",name:"person"})])),_:1})])),_:1}),(0,o.Wm)(f,{disable:"",class:"GPL__drawer-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(i.user.email),1)])),_:1}),(0,o.Wm)(m,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"negative",name:"email"})])),_:1})])),_:1}),(0,o.Wm)(f,{disable:"",class:"GPL__drawer-item"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)("ID: "+(0,r.zw)(i.user.id),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}const T={name:"MenuAdmi",emits:["changeDrawer"],props:{drawer:{type:Boolean,default:!1}},setup(e,a){const t=(0,l.Z)(),i=(0,o.Fl)((()=>t.data.user?t.data.user:"")),n=(0,o.Fl)({get(){return e.drawer},set(e){a.emit("changeDrawer")}});return{user:i,drawerModel:n}}};var F=t(906),O=t(6663),R=t(926),Y=t(490),K=t(1233),J=t(3115),X=t(1136);const ee=(0,Z.Z)(T,[["render",$]]),ae=ee;I()(T,"components",{QDrawer:F.Z,QScrollArea:O.Z,QToolbar:C.Z,QToolbarTitle:S.Z,QList:E.Z,QSeparator:R.Z,QItem:Y.Z,QItemSection:K.Z,QIcon:x.Z,QItemLabel:J.Z}),I()(T,"directives",{Ripple:X.Z});const te={class:"fit q-pt-xl q-px-sm column"},oe=(0,o._)("div",{class:"GPL__side-btn__label"},"Solicitudes",-1),ie=(0,o._)("div",{class:"GPL__side-btn__label"},"Atendidas por mi",-1),ne=(0,o._)("div",{class:"GPL__side-btn__label"},"Gestion de cuentas",-1),le=(0,o.Uk)("> ");function se(e,a,t,i,n,l){const s=(0,o.up)("q-icon"),c=(0,o.up)("q-btn"),d=(0,o.up)("q-badge"),u=(0,o.up)("q-page-sticky");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.$q.screen.gt.sm?((0,o.wg)(),(0,o.j4)(u,{key:0,expand:"",position:"left"},{default:(0,o.w5)((()=>[(0,o._)("div",te,[(0,o.Wm)(c,{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px",class:"GPL__side-btn",to:{name:"solicitudes admi"}},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"22px",name:"view_list"}),oe])),_:1}),(0,o.Wm)(c,{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px",class:"GPL__side-btn",to:{name:"solicitudes realizadas admi"}},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"22px",name:"checklist"}),ie,(0,o.Wm)(d,{floating:"",color:"red","text-color":"white",style:{top:"8px",right:"16px"},onClick:a[0]||(a[0]=a=>e.notificacionSolicitudesAdmi=0)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.notificacionSolicitudesAdmi),1)])),_:1})])),_:1}),(0,o.Wm)(c,{round:"",flat:"",color:"grey-8",stack:"","no-caps":"",size:"26px",class:"GPL__side-btn",to:{name:"gestion de cuentas"}},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{size:"22px",name:"manage_accounts"}),ne])),_:1})])])),_:1})):(0,o.kq)("",!0),le],64)}const re={name:"MenuStickyAdmi",setup(){return{}}};var ce=t(627);const de=(0,Z.Z)(re,[["render",se]]),ue=de;I()(re,"components",{QPageSticky:ce.Z,QBtn:Q.Z,QIcon:x.Z,QBadge:P.Z});const me={class:"row no-wrap items-center"},pe={class:"col text-h6 ellipsis"},fe=(0,o._)("div",{class:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"}," Administrador ",-1);function we(e,a,t,i,n,l){const s=(0,o.up)("q-img"),c=(0,o.up)("q-btn"),d=(0,o.up)("q-card-section"),u=(0,o.up)("q-avatar"),m=(0,o.up)("q-item-section"),p=(0,o.up)("q-item-label"),f=(0,o.up)("q-item"),w=(0,o.up)("q-separator"),g=(0,o.up)("q-card"),_=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(_,{modelValue:i.profileCardModel,"onUpdate:modelValue":a[0]||(a[0]=e=>i.profileCardModel=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"my-card"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{src:"https://pbs.twimg.com/media/B33SGbYIMAAhrVR.png"}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{fab:"",color:"negative",icon:"engineering",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}}),(0,o._)("div",me,[(0,o._)("div",pe,(0,r.zw)(i.sesion.data.user.name),1),fe])])),_:1}),(0,o.Wm)(d,{class:"q-pt-none"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.estadisticas,((e,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a},[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{top:"",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:e.color,"text-color":"white",icon:e.icon},null,8,["color","icon"])])),_:2},1024),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:(0,r.C_)(`text-h6 text-${e.color} text-bold`)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.valor),1)])),_:2},1032,["class"]),(0,o.Wm)(p,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.texto),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))])),_:1}),(0,o.Wm)(w)])),_:1})])),_:1},8,["modelValue"])}const ge={name:"ProfileCard",emits:["changeOpenProfileCard"],props:{profileCard:{type:Boolean,default:!1}},setup(e,a){const t=(0,l.Z)(),i=(0,h.o)(),s=(0,v.Z)();(0,o.bv)((async()=>{try{await i.cargarMisSolicitudes()}catch(e){console.log(e),s.notify({color:"negative",message:"Error al cargar las solicitudes, consulte la consola para mas informacion"})}}));const r=(0,o.Fl)({get(){return e.profileCard},set(e){a.emit("changeOpenProfileCard",e)}});return{estadisticas:(0,o.Fl)((()=>[{color:"primary",icon:"hourglass_empty",valor:i.misSolicitudes.filter((e=>Boolean(e.enProceso))).length,texto:"En Proceso"},{color:"positive",icon:"check",valor:i.misSolicitudes.filter((e=>Boolean(e.terminado))).length,texto:"Completadas"},{color:"positive",icon:"verified",valor:i.misSolicitudes.filter((e=>Boolean(e.terminada))).length,texto:"Confirmadas"}])),openProfileCard:(0,n.iH)(!1),sesion:t,lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",stars:(0,n.iH)(3),slideVol:(0,n.iH)(39),slideAlarm:(0,n.iH)(56),slideVibration:(0,n.iH)(63),profileCardModel:r}}};var _e=t(2074),ve=t(335),he=t(3190),We=t(1357),be=t(1821),ye=t(2146);const qe=(0,Z.Z)(ge,[["render",we]]),Ze=qe;I()(ge,"components",{QDialog:_e.Z,QCard:G.Z,QImg:ve.Z,QCardSection:he.Z,QBtn:Q.Z,QItem:Y.Z,QItemSection:K.Z,QAvatar:We.Z,QItemLabel:J.Z,QSeparator:R.Z,QCardActions:be.Z}),I()(ge,"directives",{ClosePopup:ye.Z});const ke={components:{MenuStickyAdmi:ue,HeaderAdmi:B,MenuAdmi:ae,ProfileCard:Ze},name:"AdministradorLayout",setup(){const e=(0,n.iH)(!1),a=(0,n.iH)(0),t=(0,n.iH)(""),o=(0,l.Z)();(0,s.tv)();function i(){e.value=!e.value}return{profileCard:(0,n.iH)(!1),drawer:e,search:t,sesion:o,notificacionSolicitudesAdmi:a,toggleLeftDrawer:i}}};var Ce=t(249),Qe=t(2133);const xe=(0,Z.Z)(ke,[["render",i]]),Se=xe;I()(ke,"components",{QLayout:Ce.Z,QPageContainer:Qe.Z,QItem:Y.Z,QIcon:x.Z})}}]);