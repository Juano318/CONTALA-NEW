(()=>{var e={};e.id=974,e.ids=[974],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3499:(e,t,r)=>{Promise.resolve().then(r.bind(r,83066)),Promise.resolve().then(r.bind(r,77945))},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12597:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(62688).A)("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},12768:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,16444,23)),Promise.resolve().then(r.t.bind(r,16042,23)),Promise.resolve().then(r.t.bind(r,88170,23)),Promise.resolve().then(r.t.bind(r,49477,23)),Promise.resolve().then(r.t.bind(r,29345,23)),Promise.resolve().then(r.t.bind(r,12089,23)),Promise.resolve().then(r.t.bind(r,46577,23)),Promise.resolve().then(r.t.bind(r,31307,23))},12935:(e,t,r)=>{"use strict";r.d(t,{TransactionProvider:()=>a,x:()=>i});var s=r(60687),n=r(43210);let o=(0,n.createContext)();function a({children:e}){let[t,r]=(0,n.useState)([]),a=(0,n.useMemo)(()=>{let e=t.filter(e=>"income"===e.type).reduce((e,t)=>e+Math.abs(t.amount),0),r=t.filter(e=>"expense"===e.type).reduce((e,t)=>e+Math.abs(t.amount),0);return{balance:e-r,income:e,expenses:r,balanceChange:0,incomeChange:0,expensesChange:0}},[t]);return(0,s.jsx)(o.Provider,{value:{transactions:t,financialData:a,handleAddTransaction:e=>{r(t=>[{id:Date.now(),...e},...t])}},children:e})}function i(){return(0,n.useContext)(o)}},13861:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(62688).A)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},14179:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(37413),n=r(87613);function o(){return(0,s.jsx)(n.default,{})}},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19253:(e,t,r)=>{Promise.resolve().then(r.bind(r,87613))},24934:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var s=r(60687),n=r(43210),o=r(8730),a=r(24224),i=r(96241);let l=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...a},d)=>{let c=n?o.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(l({variant:t,size:r,className:e})),ref:d,...a})});d.displayName="Button"},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33406:(e,t,r)=>{"use strict";r.d(t,{default:()=>N});var s=r(60687),n=r(43210),o=r.n(n),a=r(85814),i=r.n(a),l=r(24934),d=r(55192),c=r(68988),u=r(39390),m=r(41550),p=r(64021),f=r(12597),h=r(13861);let x=(0,n.createContext)(null);function v({clientId:e,nonce:t,onScriptLoadSuccess:r,onScriptLoadError:s,children:a}){let i=function(e={}){let{nonce:t,onScriptLoadSuccess:r,onScriptLoadError:s}=e,[o,a]=(0,n.useState)(!1);return(0,n.useRef)(r).current=r,(0,n.useRef)(s).current=s,o}({nonce:t,onScriptLoadSuccess:r,onScriptLoadError:s}),l=(0,n.useMemo)(()=>({clientId:e,scriptLoadedSuccessfully:i}),[e,i]);return o().createElement(x.Provider,{value:l},a)}let b={large:40,medium:32,small:20};function g({onSuccess:e,onError:t,useOneTap:r,promptMomentNotification:s,type:a="standard",theme:i="outline",size:l="large",text:d,shape:c,logo_alignment:u,width:m,locale:p,click_listener:f,containerProps:h,...v}){let g=(0,n.useRef)(null),{clientId:y,scriptLoadedSuccessfully:j}=function(){let e=(0,n.useContext)(x);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}();return(0,n.useRef)(e).current=e,(0,n.useRef)(t).current=t,(0,n.useRef)(s).current=s,o().createElement("div",{...h,ref:g,style:{height:b[l],...null==h?void 0:h.style}})}class y extends Error{}y.prototype.name="InvalidTokenError";let j=({origin:e})=>{let[t,r]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{r(!0)},[]),t)?(0,s.jsx)(v,{redirectUri:`${e}/home/auth/google/callback`,clientId:"455844922873-j87ff0j4thsnel23b3iq9pkp49c90tai.apps.googleusercontent.com",children:(0,s.jsx)(g,{onSuccess:e=>{},onError:()=>{console.log("Error en login")}})}):(0,s.jsx)("div",{children:"Loading..."})};function N(){let[e,t]=(0,n.useState)(!1),[r,o]=(0,n.useState)({email:"",password:""}),a=async e=>{e.preventDefault(),console.log("Datos de login:",r)},x=e=>{o({...r,[e.target.name]:e.target.value})};return(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:(0,s.jsxs)(d.Zp,{className:"w-full max-w-md shadow-xl",children:[(0,s.jsxs)(d.aR,{className:"text-center",children:[(0,s.jsx)(d.ZB,{className:"text-2xl font-bold text-gray-900",children:"Iniciar Sesi\xf3n"}),(0,s.jsx)(d.BT,{className:"text-gray-600",children:"Ingresa tus credenciales para acceder a CONTALA"})]}),(0,s.jsxs)(d.Wu,{children:[(0,s.jsxs)("form",{onSubmit:a,className:"space-y-4 mb-3",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(u.J,{htmlFor:"email",className:"text-sm font-medium text-gray-700",children:"Correo Electr\xf3nico"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(m.A,{className:"absolute left-3 top-3 h-4 w-4 text-gray-400"}),(0,s.jsx)(c.p,{id:"email",name:"email",type:"email",placeholder:"tu@email.com",value:r.email,onChange:x,className:"pl-10",required:!0})]})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(u.J,{htmlFor:"password",className:"text-sm font-medium text-gray-700",children:"Contrase\xf1a"}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(p.A,{className:"absolute left-3 top-3 h-4 w-4 text-gray-400"}),(0,s.jsx)(c.p,{id:"password",name:"password",type:e?"text":"password",placeholder:"Tu contrase\xf1a",value:r.password,onChange:x,className:"pl-10 pr-10",required:!0}),(0,s.jsx)("button",{type:"button",onClick:()=>t(!e),className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:e?(0,s.jsx)(f.A,{className:"h-4 w-4"}):(0,s.jsx)(h.A,{className:"h-4 w-4"})})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("input",{id:"remember",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),(0,s.jsx)(u.J,{htmlFor:"remember",className:"text-sm text-gray-600",children:"Recordarme"})]}),(0,s.jsx)(i(),{href:"/forgot-password",className:"text-sm text-blue-600 hover:text-blue-800",children:"\xbfOlvidaste tu contrase\xf1a?"})]}),(0,s.jsx)(l.$,{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700",children:(0,s.jsx)(i(),{href:"/home",children:"Iniciar Sesi\xf3n"})})]}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)("div",{className:"mx-auto w-1/2",children:(0,s.jsx)(j,{origin:process.env.NEXT_PUBLIC_ORIGIN||""})})}),(0,s.jsxs)("div",{className:"text-center text-sm text-gray-600 mt-4",children:["\xbfNo tienes una cuenta?"," ",(0,s.jsx)(i(),{href:"/signup",className:"text-blue-600 hover:text-blue-800 font-medium",children:"Reg\xedstrate"})]})]})]})})}},33873:e=>{"use strict";e.exports=require("path")},39390:(e,t,r)=>{"use strict";r.d(t,{J:()=>d});var s=r(60687),n=r(43210),o=r(78148),a=r(24224),i=r(96241);let l=(0,a.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)(o.b,{ref:r,className:(0,i.cn)(l(),e),...t}));d.displayName=o.b.displayName},41550:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(62688).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},47824:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>o});var s=r(37413);r(82704),r(83066);var n=r(77945);let o={title:"Contala - Finanzas Personales",description:"Aplicaci\xf3n de finanzas personales para registrar ingresos y gastos",generator:"v0.dev"};function a({children:e}){return(0,s.jsx)(n.TransactionProvider,{children:(0,s.jsx)("html",{lang:"es",children:(0,s.jsx)("body",{children:e})})})}},55192:(e,t,r)=>{"use strict";r.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>l,Zp:()=>a,aR:()=>i});var s=r(60687),n=r(43210),o=r(96241);let a=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));a.displayName="Card";let i=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",e),...t}));i.displayName="CardHeader";let l=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));l.displayName="CardTitle";let d=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,o.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,o.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent",n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,o.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},61109:(e,t,r)=>{Promise.resolve().then(r.bind(r,33406))},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64021:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(62688).A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},68988:(e,t,r)=>{"use strict";r.d(t,{p:()=>a});var s=r(60687),n=r(43210),o=r(96241);let a=n.forwardRef(({className:e,type:t,...r},n)=>(0,s.jsx)("input",{type:t,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:n,...r}));a.displayName="Input"},77945:(e,t,r)=>{"use strict";r.d(t,{TransactionProvider:()=>n});var s=r(12907);let n=(0,s.registerClientReference)(function(){throw Error("Attempted to call TransactionProvider() from the server but TransactionProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/familia/CONTALA-NEW/context/TransactionContext.js","TransactionProvider");(0,s.registerClientReference)(function(){throw Error("Attempted to call useTransactions() from the server but useTransactions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/familia/CONTALA-NEW/context/TransactionContext.js","useTransactions")},79523:(e,t,r)=>{Promise.resolve().then(r.bind(r,92892)),Promise.resolve().then(r.bind(r,12935))},82704:()=>{},83066:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ThemeProvider:()=>s});let s=(0,r(12907).registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/familia/CONTALA-NEW/components/theme-provider.tsx","ThemeProvider")},87613:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/familia/CONTALA-NEW/components/login-form.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/familia/CONTALA-NEW/components/login-form.jsx","default")},91089:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(65239),n=r(48088),o=r(88170),a=r.n(o),i=r(30893),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,14179)),"/Users/familia/CONTALA-NEW/app/page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,47824)),"/Users/familia/CONTALA-NEW/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,65284,23)),"next/dist/client/components/unauthorized-error"]}],c=["/Users/familia/CONTALA-NEW/app/page.jsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92892:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ThemeProvider:()=>o});var s=r(60687);r(43210);var n=r(10218);function o({children:e,...t}){return(0,s.jsx)(n.N,{...t,children:e})}},96241:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var s=r(49384),n=r(82348);function o(...e){return(0,n.QP)((0,s.$)(e))}},99616:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,86346,23)),Promise.resolve().then(r.t.bind(r,27924,23)),Promise.resolve().then(r.t.bind(r,35656,23)),Promise.resolve().then(r.t.bind(r,40099,23)),Promise.resolve().then(r.t.bind(r,38243,23)),Promise.resolve().then(r.t.bind(r,28827,23)),Promise.resolve().then(r.t.bind(r,62763,23)),Promise.resolve().then(r.t.bind(r,97173,23))}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[906,889,358],()=>r(91089));module.exports=s})();