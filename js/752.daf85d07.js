"use strict";(self["webpackChunklearnwithme_app"]=self["webpackChunklearnwithme_app"]||[]).push([[752],{9752:(e,t,l)=>{l.r(t),l.d(t,{default:()=>j});var a=l(3673),n=l(2323);const i=(0,a.Uk)(" LWM "),o={class:"q-pa-md"},r=(0,a.Uk)(" Essential Links ");function u(e,t,l,u,s,c){const p=(0,a.up)("q-btn"),m=(0,a.up)("q-toolbar-title"),d=(0,a.up)("q-separator"),w=(0,a.up)("q-toolbar"),f=(0,a.up)("q-header"),k=(0,a.up)("q-item-label"),g=(0,a.up)("EssentialLink"),h=(0,a.up)("q-list"),b=(0,a.up)("q-drawer"),q=(0,a.up)("router-view"),_=(0,a.up)("q-page-container"),L=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(L,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[i])),_:1}),(0,a._)("div",o,"LWM v"+(0,n.zw)(e.version),1),(0,a.Wm)(d,{dark:"",vertical:""}),e.loginStatus?((0,a.wg)(),(0,a.j4)(p,{key:0,onClick:e.logout,stretch:"",flat:"",label:"Logout"},null,8,["onClick"])):(0,a.kq)("",!0),e.loginStatus?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(p,{key:1,type:"a",href:"/#login",stretch:"",flat:"",label:"Login"})),(0,a.Wm)(d,{dark:"",vertical:""}),e.loginStatus?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(p,{key:2,type:"a",href:"/#register",stretch:"",flat:"",label:"Register"}))])),_:1})])),_:1}),(0,a.Wm)(b,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,{header:""},{default:(0,a.w5)((()=>[r])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.essentialLinks,(e=>((0,a.wg)(),(0,a.j4)(g,(0,a.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q)])),_:1})])),_:1})}function s(e,t,l,i,o,r){const u=(0,a.up)("q-icon"),s=(0,a.up)("q-item-section"),c=(0,a.up)("q-item-label"),p=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(p,{clickable:"",tag:"a",href:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(s,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.title),1)])),_:1}),(0,a.Wm)(c,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const c=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var p=l(3414),m=l(2035),d=l(4554),w=l(2350),f=l(7518),k=l.n(f);c.render=s;const g=c;k()(c,"components",{QItem:p.Z,QItemSection:m.Z,QIcon:d.Z,QItemLabel:w.Z});var h=l(2471);const b=[{title:"Learn With Us",caption:"home",icon:"school",link:"/"},{title:"Members",icon:"account_circle",link:"/#members"},{title:"Posts",icon:"article",link:"/#posts"},{title:"Register a Post",icon:"article",link:"/#posts/register"},{title:"Media",icon:"perm_media",link:"/#media-groups"}],q=(0,a.aZ)({name:"MainLayout",components:{EssentialLink:g},computed:{loginStatus:function(){return h.Z.has("access_token")}},data(){return{leftDrawerOpen:!1,essentialLinks:b,version:l(4147).i8}},methods:{toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){h.Z.remove("access_token"),window.location.href="/"}}});var _=l(3066),L=l(3812),W=l(9570),Z=l(2165),v=l(3747),y=l(5869),Q=l(2428),S=l(7011),D=l(2652);q.render=u;const j=q;k()(q,"components",{QLayout:_.Z,QHeader:L.Z,QToolbar:W.Z,QBtn:Z.Z,QToolbarTitle:v.Z,QSeparator:y.Z,QDrawer:Q.Z,QList:S.Z,QItemLabel:w.Z,QPageContainer:D.Z})},4147:e=>{e.exports={i8:"0.0.1"}}}]);