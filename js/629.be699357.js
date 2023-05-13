"use strict";(globalThis["webpackChunklearnwithme_app"]=globalThis["webpackChunklearnwithme_app"]||[]).push([[629],{1440:(t,e,o)=>{o.d(e,{Z:()=>B});var s=o(3673),r=o(2323);const a={class:"text-h6"},i={class:"text-subtitle2"},n=["innerHTML"];function l(t,e,o,l,c,u){const h=(0,s.up)("q-card-section"),d=(0,s.up)("q-separator"),k=(0,s.up)("q-btn"),p=(0,s.up)("router-link"),m=(0,s.up)("q-tooltip"),g=(0,s.up)("q-card-actions"),f=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(f,{class:"my-card q-ma-md q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s._)("div",a,(0,r.zw)(t.post.title),1),(0,s.Uk)(" BY "),(0,s._)("div",i,(0,r.zw)(t.post.author),1)])),_:1}),t.post.summary?((0,s.wg)(),(0,s.j4)(d,{key:0})):(0,s.kq)("",!0),t.post.summary?((0,s.wg)(),(0,s.j4)(h,{key:1,class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s._)("div",{innerHTML:t.post.summary},null,8,n)])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(d),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.post.tags,(e=>((0,s.wg)(),(0,s.j4)(p,{key:e,to:"?keyword="+e},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{color:"secondary",label:e,onClick:t.reloadPage},null,8,["label","onClick"])])),_:2},1032,["to"])))),128))])),_:1}),(0,s.Wm)(d),(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k,{flat:"",round:"",color:t.likeColor,onClick:e[0]||(e[0]=e=>t.like(t.post._id)),icon:"favorite"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Favourite ")])),_:1})])),_:1},8,["color"]),(0,s.Wm)(k,{flat:"",round:"",color:t.bookmarkColor,onClick:e[1]||(e[1]=e=>t.bookmark(t.post._id)),icon:"bookmark"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Save ")])),_:1})])),_:1},8,["color"]),(0,s.Wm)(k,{flat:"",round:"",hint:"share",onClick:e[2]||(e[2]=e=>t.share(t.post._id)),icon:"share"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Share ")])),_:1})])),_:1}),(0,s.Wm)(k,{flat:"",round:"",onClick:e[3]||(e[3]=e=>t.deletePost(t.post._id)),icon:"delete"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Delete ")])),_:1})])),_:1}),(0,s.Wm)(k,{type:"a",href:`/#posts/${t.post._id}`,flat:"",icon:"play_lesson"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Read ")])),_:1})])),_:1},8,["href"]),(0,s.Wm)(k,{type:"a",href:`/#posts/edit/${t.post._id}`,flat:"",icon:"edit"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Edit ")])),_:1})])),_:1},8,["href"])])),_:1})])),_:1})}var c=o(2471),u=o(4434),h=o(52),d=o.n(h);const k=(0,s.aZ)({name:"PostShortComponent",props:{post:{type:Object,required:!0},icon:{type:String,default:"article"},tagBaseLink:{type:String,default:""}},data(){return{likeColor:"default",bookmarkColor:"default",shareColor:"secondary",fetch_url:`http://ec2-13-126-7-252.ap-south-1.compute.amazonaws.com:8080/api/posts/${this.post._id}`,config:{headers:{Authorization:`Bearer ${c.Z.get("access_token")}`}},currentUserId:"",likes:0,bookmarks:0,isLikedByCurrentUser:0,isBookmarkedByCurrentUser:0,tagLinkProps:{color:"",noCaps:!0,label:"",outline:!0,href:""}}},mounted(){this.currentUserId=this.parseJwt(c.Z.get("access_token")).id,d().get(`${this.fetch_url}/likes/count`,this.config).then((t=>{this.likes=t.data})).catch((t=>console.log(t))),d().get(`${this.fetch_url}/likes/${this.currentUserId}/count`,this.config).then((t=>{this.isLikedByCurrentUser=t.data,this.isLikedByCurrentUser&&(this.likeColor="red")})).catch((t=>console.log(t))),d().get(`${this.fetch_url}/bookmarks/count`,this.config).then((t=>{this.bookmarks=t.data})).catch((t=>console.log(t))),d().get(`${this.fetch_url}/bookmarks/${this.currentUserId}/count`,this.config).then((t=>{this.isBookmarkedByCurrentUser=t.data,this.isBookmarkedByCurrentUser&&(this.bookmarkColor="accent")})).catch((t=>console.log(t)))},methods:{like(t){"default"===this.likeColor?this.likeColor="red":this.likeColor="default",d().post(`${this.fetch_url}/likes/${this.currentUserId}`,{data:""},this.config).then((t=>{d().get(`${this.fetch_url}/likes/${this.currentUserId}/count`,this.config).then((t=>{this.isLikedByCurrentUser=t.data,this.isLikedByCurrentUser&&(this.likeColor="red")})).catch((t=>console.log(t)))})).catch((t=>console.log(t)))},bookmark(t){"default"===this.bookmarkColor?this.bookmarkColor="accent":this.bookmarkColor="default",d().post(`${this.fetch_url}/bookmarks/${this.currentUserId}`,{data:""},this.config).then((t=>{d().get(`${this.fetch_url}/bookmarks/${this.currentUserId}/count`,this.config).then((t=>{this.isBookmarkedByCurrentUser=t.data,this.isBookmarkedByCurrentUser&&(this.bookmarkColor="accent")})).catch((t=>console.log(t)))})).catch((t=>console.log(t)))},share(t){},deletePost(t){d()["delete"](this.fetch_url,this.config).then((t=>{u.Z.create({message:"Successfully Deleted",color:"green"})})).catch((t=>{u.Z.create({message:t.message,color:"red"})}))},parseJwt(t){if(!t)return;const e=t.split(".")[1],o=e.replace("-","+").replace("_","/");return JSON.parse(window.atob(o))},reloadPage(){setTimeout((()=>{window.location.reload()}),1e3)}}});var p=o(4260),m=o(151),g=o(5589),f=o(5869),_=o(2165),w=o(9367),C=o(5363),y=o(7518),b=o.n(y);const U=(0,p.Z)(k,[["render",l]]),B=U;b()(k,"components",{QCard:m.Z,QCardSection:g.Z,QSeparator:f.Z,QBtn:_.Z,QCardActions:w.Z,QTooltip:C.Z})},3629:(t,e,o)=>{o.r(e),o.d(e,{default:()=>b});var s=o(3673),r=o(2323);const a={key:2,class:"q-pa-md row items-start q-gutter-md"},i={class:"q-pa-lg flex flex-center"};function n(t,e,o,n,l,c){const u=(0,s.up)("q-btn"),h=(0,s.up)("q-banner"),d=(0,s.up)("q-circular-progress"),k=(0,s.up)("PostShortComponent"),p=(0,s.up)("q-pagination"),m=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(m,null,{default:(0,s.w5)((()=>[t.isError?((0,s.wg)(),(0,s.j4)(h,{key:0,dense:"",class:"bg-red text-white"},{action:(0,s.w5)((()=>[(0,s.Wm)(u,{flat:"",color:"white",label:"Dismiss",onClick:t.dismiss},null,8,["onClick"])])),default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(t.error)+" ",1)])),_:1})):(0,s.kq)("",!0),t.isLoading?((0,s.wg)(),(0,s.j4)(d,{key:1,indeterminate:"",size:"90px",thickness:.2,color:"lime","center-color":"grey-8","track-color":"transparent",class:"q-ma-xl"},null,8,["thickness"])):((0,s.wg)(),(0,s.iD)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.posts,(e=>((0,s.wg)(),(0,s.j4)(k,{post:e,key:e._id,tagBaseLink:"#"+t.$route.path+"?keyword=",class:"col-md-5"},null,8,["post","tagBaseLink"])))),128))])),(0,s._)("div",null,[(0,s._)("div",i,[(0,s.Wm)(p,{modelValue:t.currentPage,"onUpdate:modelValue":e[0]||(e[0]=e=>t.currentPage=e),color:"purple",max:t.max,"max-pages":t.maxPages,"boundary-links":"","direction-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward"},null,8,["modelValue","max","max-pages"])])])])),_:1})}var l=o(1440),c=o(52),u=o.n(c),h=o(2471);const d=(0,s.aZ)({name:"Posts",components:{PostShortComponent:l.Z},data:function(){let t=[];return{posts:t,isLoading:!0,fetch_url:"http://ec2-13-126-7-252.ap-south-1.compute.amazonaws.com:8080/api/posts?limit=4&user_id="+this.parseJwt(h.Z.get("access_token")).id,fetch_count_url:"http://ec2-13-126-7-252.ap-south-1.compute.amazonaws.com:8080/api/posts/count?user_id="+this.parseJwt(h.Z.get("access_token")).id,config:{headers:{Authorization:`Bearer ${h.Z.get("access_token")}`}},isError:!1,error:"",currentPage:1,max:0,maxPages:0}},created(){let t=this.$route.query.keyword;t&&(this.fetch_url=this.fetch_url+`&keyword=${t}`,this.fetch_count_url=this.fetch_count_url+`&keyword=${t}`),this.getData(),this.getCount()},watch:{currentPage:function(){this.getData()}},methods:{getData(){u().get(this.fetch_url+"&start="+4*(this.currentPage-1),this.config).then((t=>{let e=t.data.results;this.posts=e,this.isLoading=!1})).catch((t=>{this.isLoading=!1,this.isError=!0,this.error=t.message}))},getCount(){u().get(this.fetch_count_url,this.config).then((t=>{let e=t.data;this.max=Math.ceil(e/4),this.maxPages=Math.ceil(e/8),this.isLoading=!1})).catch((t=>{this.isLoading=!1,this.isError=!0,this.error=t.message}))},dismiss(){this.error="",this.isError=!1},parseJwt(t){if(!t)return;const e=t.split(".")[1],o=e.replace("-","+").replace("_","/");return JSON.parse(window.atob(o))}}});var k=o(4260),p=o(4379),m=o(5607),g=o(2165),f=o(6122),_=o(7300),w=o(7518),C=o.n(w);const y=(0,k.Z)(d,[["render",n]]),b=y;C()(d,"components",{QPage:p.Z,QBanner:m.Z,QBtn:g.Z,QCircularProgress:f.Z,QPagination:_.Z})}}]);