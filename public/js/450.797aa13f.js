"use strict";(self["webpackChunksssbaer_front"]=self["webpackChunksssbaer_front"]||[]).push([[450],{3845:(e,a,r)=>{r.r(a),r.d(a,{default:()=>Y});var t=r(9835),n=r(1957);function l(e,a,r,l,o,u){const s=(0,t.up)("menu-usuario"),i=(0,t.up)("header-usuario"),c=(0,t.up)("router-view"),d=(0,t.up)("q-page"),m=(0,t.up)("q-page-container"),w=(0,t.up)("q-layout");return(0,t.wg)(),(0,t.j4)(w,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(s,{drawer:l.drawer,onChangeDrawer:a[0]||(a[0]=e=>l.drawer=!l.drawer)},null,8,["drawer"]),[[n.F8,!0]]),(0,t.Wm)(i,{onChangeDrawer:a[1]||(a[1]=e=>l.drawer=!l.drawer)}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(c)])),_:1})])),_:1})])),_:1})}var o=r(6970);const u=(0,t._)("span",{class:"q-ml-sm"},"Asisteme BAER",-1),s=(0,t.Uk)("nombre"),i=(0,t.Uk)("correo"),c=(0,t.Uk)(" Mis solicitudes "),d=(0,t.Uk)(" Crear solicitud ");function m(e,a,r,n,l,m){const w=(0,t.up)("q-toolbar-title"),p=(0,t.up)("q-toolbar"),f=(0,t.up)("q-icon"),g=(0,t.up)("q-item-section"),_=(0,t.up)("q-item-label"),W=(0,t.up)("q-item"),v=(0,t.up)("q-list"),b=(0,t.up)("q-scroll-area"),Z=(0,t.up)("q-drawer"),h=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.j4)(Z,{modelValue:n.drawerModel,"onUpdate:modelValue":a[0]||(a[0]=e=>n.drawerModel=e),"show-if-above":"",width:200,breakpoint:650,bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{class:"fit"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"GPL__toolbar"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"row items-center text-grey-8"},{default:(0,t.w5)((()=>[u])),_:1})])),_:1}),(0,t.Wm)(v,{padding:""},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(W,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{name:"person",size:"1.5em"})])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,{overline:""},{default:(0,t.w5)((()=>[s])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(n.usuario.name),1)])),_:1})])),_:1})])),_:1})),[[h]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(W,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{name:"email",size:"1.5em"})])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,{overline:""},{default:(0,t.w5)((()=>[i])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(n.usuario.email),1)])),_:1})])),_:1})])),_:1})),[[h]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(W,{clickable:"",to:{name:"solicitudes usuario"},"active-class":"text-negative"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{name:"list"})])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[c])),_:1})])),_:1})),[[h]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(W,{clickable:"",to:{name:"crear solicitud"},"active-class":"text-negative"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{name:"add"})])),_:1}),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[d])),_:1})])),_:1})),[[h]])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var w=r(6183);const p={name:"MenuUsuario",emits:["changeDrawer"],props:{drawer:{type:Boolean,default:!1}},setup(e,a){const r=(0,w.Z)(),n=r.data.user,l=(0,t.Fl)({get(){return e.drawer},set(e){a.emit("changeDrawer")}});return(0,t.YP)(r,(e=>{n.email=e.data.user.email,n.name=e.data.user.name})),{usuario:n,drawerModel:l}}};var f=r(1639),g=r(906),_=r(6663),W=r(1663),v=r(1973),b=r(3246),Z=r(490),h=r(1233),q=r(2857),k=r(3115),Q=r(1136),y=r(9984),U=r.n(y);const C=(0,f.Z)(p,[["render",m]]),j=C;U()(p,"components",{QDrawer:g.Z,QScrollArea:_.Z,QToolbar:W.Z,QToolbarTitle:v.Z,QList:b.Z,QItem:Z.Z,QItemSection:h.Z,QIcon:q.Z,QItemLabel:k.Z}),U()(p,"directives",{Ripple:Q.Z});var D=r(6561),M=r.n(D);const z=(0,t._)("img",{src:M(),class:"banner"},null,-1);function H(e,a,r,l,o,u){const s=(0,t.up)("q-btn"),i=(0,t.up)("q-icon"),c=(0,t.up)("q-space"),d=(0,t.up)("q-toolbar"),m=(0,t.up)("q-header");return(0,t.wg)(),(0,t.j4)(m,{elevated:"",class:"bg-white"},{default:(0,t.w5)((()=>[z,(0,t.Wm)(d,{class:"bg-white text-negative"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(s,{onClick:a[0]||(a[0]=a=>e.$emit("changeDrawer")),flat:"",round:"",dense:"",icon:"menu"},null,512),[[n.F8,e.$q.screen.width<1e3]]),(0,t.Wm)(i,{name:"flight_takeoff",size:"3em"}),(0,t.Wm)(c),(0,t.Wm)(s,{flat:"",onClick:a[1]||(a[1]=e=>l.cerrarSesion()),round:"",dense:"",icon:"logout"})])),_:1})])),_:1})}var I=r(8910),L=r(1446);const S={name:"HeaderUsuario",setup(){const e=(0,L.Z)(),a=(0,I.tv)(),r=(0,w.Z)(),t=async()=>{try{const t=await r.logout();t?a.push({name:"ingreso"}):e.notify({color:"negative",message:"Error al cerrar la sesion, consulte la consola para mas informacion"})}catch(t){console.log(t)}finally{a.push({name:"ingreso"})}};return{cerrarSesion:t}}};var x=r(6602),F=r(4455),P=r(136);const T=(0,f.Z)(S,[["render",H]]),A=T;U()(S,"components",{QHeader:x.Z,QToolbar:W.Z,QBtn:F.Z,QIcon:q.Z,QSpace:P.Z});var B=r(499);const V={components:{MenuUsuario:j,HeaderUsuario:A},setup(){(0,w.Z)(),(0,I.tv)();const e=(0,B.iH)(!1);return(0,t.wF)((async()=>{})),{drawer:e}}};var E=r(249),R=r(2133),$=r(9885);const G=(0,f.Z)(V,[["render",l]]),Y=G;U()(V,"components",{QLayout:E.Z,QPageContainer:R.Z,QPage:$.Z})}}]);