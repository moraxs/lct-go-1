/* empty css              *//* empty css               *//* empty css               *//* empty css               */import{e as V,a6 as h,aj as w,ak as g,az as x,aA as y,z as b,C as o,D as s,L as k,A as B,G as U,am as C,H as I,I as d,aE as v,aB as D,aF as F}from"./index.83cbf7da.js";const T=B("div",{style:{height:"20px"}},null,-1),G=V({__name:"login",setup(A){const e=h({ssl:"https://",ip:"",path:"/authentication/login",username:"",password:""}),m=()=>{console.log(e);var u=`${e.ssl}${e.ip}${e.path}`,l={username:e.username,password:e.password};U.post(u,l).then(a=>{console.log(a)},a=>{C.error(a.message),console.log(a)})},r=()=>{console.log(1)};return(u,l)=>{const a=w,i=v,n=D,_=F,p=g,c=x,f=y;return I(),b(k,null,[T,o(f,{model:e,style:{width:"600px"},onSubmit:m},{default:s(()=>[o(n,{field:"ip",label:"\u5730\u5740"},{default:s(()=>[o(i,null,{default:s(()=>[o(a,{style:{width:"80px"},placeholder:"",modelValue:e.ssl,"onUpdate:modelValue":l[0]||(l[0]=t=>e.ssl=t)},null,8,["modelValue"]),o(a,{style:{width:"160px"},placeholder:"",modelValue:e.ip,"onUpdate:modelValue":l[1]||(l[1]=t=>e.ip=t)},null,8,["modelValue"]),o(a,{style:{width:"160px"},placeholder:"",modelValue:e.path,"onUpdate:modelValue":l[2]||(l[2]=t=>e.path=t)},null,8,["modelValue"])]),_:1})]),_:1}),o(n,{field:"username",label:"\u7528\u6237\u540D"},{default:s(()=>[o(a,{modelValue:e.username,"onUpdate:modelValue":l[3]||(l[3]=t=>e.username=t),placeholder:"please enter your username..."},null,8,["modelValue"])]),_:1}),o(n,{field:"password",label:"\u5BC6\u7801"},{default:s(()=>[o(_,{modelValue:e.password,"onUpdate:modelValue":l[4]||(l[4]=t=>e.password=t),placeholder:"Please enter something","allow-clear":""},null,8,["modelValue"])]),_:1}),o(n,null,{default:s(()=>[o(c,null,{default:s(()=>[o(p,{"html-type":"submit"},{default:s(()=>[d("\u63D0\u4EA4")]),_:1}),o(p,{onCopyTocken:r},{default:s(()=>[d("\u590D\u5236Tocken")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])],64)}}});export{G as default};
