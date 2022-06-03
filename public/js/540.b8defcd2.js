"use strict";(self["webpackChunksssbaer_front"]=self["webpackChunksssbaer_front"]||[]).push([[540],{8540:(e,a,l)=>{l.r(a),l.d(a,{default:()=>_});var r=l(9835),o=l(1957);const s={class:"flex flex-center"},i={class:"q-pa-md shadow-1 bg-white",style:{width:"600px"}},t=(0,r._)("div",{class:"text-h5"},"Complete los datos",-1),n={class:"q-pa-md"},u={class:"q-gutter-sm"};function m(e,a,l,m,d,p){const c=(0,r.up)("q-separator"),v=(0,r.up)("q-input"),f=(0,r.up)("q-icon"),b=(0,r.up)("q-radio"),C=(0,r.up)("q-btn"),V=(0,r.up)("q-form");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",i,[(0,r.Wm)(V,{onSubmit:(0,o.iM)(m.onSubmit,["prevent","stop"]),onReset:(0,o.iM)(m.onReset,["prevent","stop"]),class:"q-gutter-md"},{default:(0,r.w5)((()=>[t,(0,r.Wm)(c,{inset:""}),(0,r.Wm)(v,{modelValue:m.correo,"onUpdate:modelValue":a[0]||(a[0]=e=>m.correo=e),label:"Correo",ref:"refCorreo",filled:"","lazy-rules":"",type:"email",rules:[e=>e&&e.length>0||"Porfavor ingrese el correo"],hint:"Email"},null,8,["modelValue","rules"]),(0,r.Wm)(v,{filled:"",modelValue:m.nombre,"onUpdate:modelValue":a[1]||(a[1]=e=>m.nombre=e),ref:"refNombre",label:"Nombre completo *",hint:"Nombre y apellido","lazy-rules":"",rules:[e=>e&&e.length>0||"Porfavor ingrese el nombre y apellido"]},null,8,["modelValue","rules"]),(0,r.Wm)(v,{modelValue:m.contraseña,"onUpdate:modelValue":a[3]||(a[3]=e=>m.contraseña=e),filled:"","lazy-rules":"",ref:"refContraseña",label:"Contraseña *",type:m.esVisible?"password":"text",hint:"Ingrese la contraseña",rules:[e=>e&&e.length>0||"Porfavor ingrese una contraseña"]},{append:(0,r.w5)((()=>[(0,r.Wm)(f,{name:m.esVisible?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[2]||(a[2]=e=>m.esVisible=!m.esVisible)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,r.Wm)(v,{modelValue:m.reContraseña,"onUpdate:modelValue":a[5]||(a[5]=e=>m.reContraseña=e),filled:"",ref:"refReContraseña",error:!m.validarContraseña,"lazy-rules":"",label:"Repita la Contraseña *",type:m.esVisible?"password":"text",hint:"Debe coincidir con la contraseña",rules:[e=>e&&e.length>0||"Porfavor repita la contraseña"]},{append:(0,r.w5)((()=>[(0,r.Wm)(f,{name:m.esVisible?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[4]||(a[4]=e=>m.esVisible=!m.esVisible)},null,8,["name"])])),_:1},8,["modelValue","error","type","rules"]),(0,r._)("div",n,[(0,r._)("div",u,[(0,r.Wm)(b,{ref:"refTipoDeCuenta",modelValue:m.tipoDeCuenta,"onUpdate:modelValue":a[6]||(a[6]=e=>m.tipoDeCuenta=e),val:!1,label:"Usuario"},null,8,["modelValue"]),(0,r.Wm)(b,{ref:"refTipoDeCuenta",modelValue:m.tipoDeCuenta,"onUpdate:modelValue":a[7]||(a[7]=e=>m.tipoDeCuenta=e),val:!0,label:"Administrador"},null,8,["modelValue"])])]),(0,r._)("div",null,[(0,r.Wm)(C,{label:"Enviar",type:"submit",color:"primary"}),(0,r.Wm)(C,{label:"Restablecer",type:"reset",color:"negative",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])])}var d=l(499),p=l(1446),c=l(1569);const v={name:"CrearUsuario",setup(){const e=(0,p.Z)(),a=(0,d.iH)(null),l=(0,d.iH)(null),o=(0,d.iH)(null),s=(0,d.iH)(null),i=(0,d.iH)(!1),t=(0,d.iH)(null),n=(0,d.iH)(null),u=(0,d.iH)(!0),m=(0,d.iH)(null),v=(0,d.iH)(null),f=(0,d.iH)(null),b=(0,r.Fl)((()=>l.value===o.value)),C=(0,d.iH)(null),V=function(){a.value="",l.value="",o.value="",s.value="",u.value=!0,i.value=!1};return{nombre:a,contraseña:l,reContraseña:o,correo:s,tipoDeCuenta:i,refUsuario:t,refNombre:n,refContraseña:m,refReContraseña:v,refCorreo:C,refTipoDeCuenta:f,validarContraseña:b,esVisible:u,onReset(){V()},async onSubmit(){if(n.value.validate(),m.value.validate(),v.value.validate(),C.value.validate(),n.value.hasError||m.value.hasError||v.value.hasError||f.value.hasError||C.value.hasError)e.notify({color:"negative",message:"Las contraseñas deben coincidir"});else{const o={name:a.value,email:s.value,password:l.value,admi:i.value,supervisor:!1};try{await c.api.post("/register",o),e.notify({color:"positive",message:"Usuario Creado"}),V()}catch(r){console.log(r.response.data),e.notify({color:"negative",message:"Error al crear el usuario, mire la consola para mas informacion"})}}}}}};var f=l(1639),b=l(8326),C=l(926),V=l(6611),y=l(2857),h=l(1480),g=l(4455),w=l(9984),H=l.n(w);const W=(0,f.Z)(v,[["render",m]]),_=W;H()(v,"components",{QForm:b.Z,QSeparator:C.Z,QInput:V.Z,QIcon:y.Z,QRadio:h.Z,QBtn:g.Z})}}]);