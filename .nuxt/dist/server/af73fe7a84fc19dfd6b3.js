exports.ids=[14],exports.modules={34:function(t,e,r){"use strict";var o=r(16);e.a={upload:async data=>await o.a.post("/api/upload/base64",data),authCheck:async()=>await o.a.post("/api/auth/check",{}),authLogin:async data=>await o.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await o.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await o.a.post("/api/user/data/infoApp",data),getUserNoReadMsgCount:async()=>await o.a.post("/api/user/message/noReadCount",{}),addressList:async data=>await o.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await o.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await o.a.post("/api/user/message/update",data),addressUpdate:async data=>await o.a.post("/api/user/address/update",data),addressDelete:async data=>await o.a.post("/api/user/address/delete",data),cartItems:async()=>await o.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await o.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await o.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await o.a.post("/cart/clear"),getCategorys:async()=>await o.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await o.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await o.a.post("/api/user/invite/getCode"),getUserAssets:async()=>await o.a.post("/api/mall/user/infoAssets"),createOrder:async data=>await o.a.post("/api/mall/order/create",data),cancelOrder:async data=>await o.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await o.a.post("/api/mall/order/finish",data),getOrder:async data=>await o.a.post("/api/mall/order/detail",data),getOrderList:async data=>await o.a.post("/api/mall/order/list",data),createPayment:async data=>await o.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await o.a.post("/api/utils/alipay/wapPay",data),wxpaySumbit:async data=>await o.a.post("/api/utils/wxpay/h5Pay",data),getInviteList:async data=>await o.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await o.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await o.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await o.a.post("/api/mall/profit/list",data),getAfterInfo:async data=>await o.a.post("/api/mall/after/info",data),afterApplySubmit:async data=>await o.a.post("/api/mall/after/apply",data)}},35:function(t,e,r){"use strict";var o=r(32),n=r.n(o);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],o=function(t,e,n){for(var i=0;i<t.length;i++){var l=t[i];if(l.pid==e){l.level=n,l.html="";for(let t=0;t<n;t++)l.html+=" -- ";r.push(l),o(t,l.id,n+1)}}};return o(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,n()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return n()(r).format(e)}},monthPlus(t,e=1,r=!0){let o=[31,28,31,30,31,30,31,31,30,31,30,31],n=parseInt(this.dateFormat(t,"YYYY")),l=parseInt(this.dateFormat(t,"MM")),d=parseInt(this.dateFormat(t,"DD"));o[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let c=0;c+=o[l-1]-d;for(let i=0;i<e;i++){(l+=1)>12&&(l=1,n+=1),o[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let t=o[l-1];i==e-1&&(t=t-d<0?t:d),console.log("for days:",t),c+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*c*3600:c},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},36:function(t,e,r){"use strict";e.a={cartItems(){let t=plus.storage.getItem("cart");return t?JSON.parse(t):[]},cartItemPlus(t,e=1){let r=this.cartItems(),body={...t,num:e},o=body.id,n=!1;for(let t=0;t<r.length;t++){let l=r[t];l.id==o&&(l.num+=e,n=!0)}return n||r.push({id:body.id,num:body.num,cover:body.thumb||body.cover,title:body.title,desc:body.description||"",price:body.price,price_market:body.price_market,business_id:body.business_id,stock:body.stock||-1}),plus.storage.setItem("cart",JSON.stringify(r)),r},cartItemMinus(t,e=1){let r=this.cartItems(),o={...t,num:e}.id,n=-1;for(let t=0;t<r.length;t++){let l=r[t];l.id==o&&(l.num>e?l.num-=e:n=t)}return n>-1&&r.splice(n,1),console.log("/cartItemMinus",JSON.stringify(t,null,2)),plus.storage.setItem("cart",JSON.stringify(r||[])),r},cartClear:()=>(plus.storage.setItem("cart",""),[])}},68:function(t,e,r){"use strict";r.r(e);var o=r(34),n=r(35),l=r(36),d={head:()=>({title:"确认订单"}),data:()=>({total:0,business_id:[],itemsChecked:[],submitLoading:!1,address:{id:0}}),methods:{...n.a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},navHome(){this.$store.state.isApp?uni.switchTab({url:"/pages/mall/index"}):this.$router.replace("/list")},goToAddress(){this.$router.push("/address/list?jump=1")},async onSubmit(){if(this.submitLoading=!0,!this.address.id)return this.$toast.fail("请选择收货地址"),void(this.submitLoading=!1);let t=[],e=this.businessData;Object.keys(e).forEach(r=>{let o=e[r],n=[];o.forEach(t=>{n.push({goods_id:t.id,num:t.num})}),t.push({business_id:r,goods_items:n,score:0,remark:""})});let r={orders:t,address:this.address};console.log("/onSubmit data",r);try{let t=await o.a.createOrder(r);if(console.log("/onSubmit createOrderRet:",JSON.stringify(t,null,2)),0===t.code){let e=t.data.orders||[],r=[];e.length&&(e.forEach(t=>{r.push(t.id)}),this.submitSuccess(),this.$router.replace("/payment?orderIds="+r.join(",")))}else{let e=t.code;-100==e||-101==e?this.$store.state.isApp?uni.navigateTo({url:"/pages/auth/login?form=h5"}):this.$toast.fail("用户授权信息出现错误"):(console.log("/onSubmit fail message:",t.message),this.$toast.fail(`提交订单出现错误(${t.message})!`))}}catch(t){console.log("/onSubmit err",t),this.$toast.fail("提交订单出现错误，请稍后重试")}this.submitLoading=!1},submitSuccess(){let t=this.$store.state.isApp,e=this.itemsChecked;console.log("/submitSuccess isApp",t),console.log("/submitSuccess checkedItems",e);for(let r=0;r<e.length;r++){let n=e[r];console.log("/submitSuccess item",n.id,n.num),t?l.a.cartItemMinus(n,n.num):o.a.cartItemMinus(n,n.num)}},async getAddress(){let t=this.$store.state.address;if(!t||!t.id){let e=await o.a.addressList();if(console.log("/getAddress ret:",e),0==e.code){let r=e.data.rows;r.length>0&&(t=r[0])}}t&&t.id&&(this.address.id=t.id,this.address.name=t.name,this.address.tel=t.tel,this.address.postalCode=t.postalCode,this.address.province=t.province,this.address.city=t.city,this.address.county=t.county,this.address.areaCode=t.areaCode,this.address.address=t.province+t.city+t.county+t.addressDetail,console.log("/getAddress address:",this.address))}},async created(){let t=this.$store.state.orderDatas||[];console.log("/create orderDatas",t),0===t.length&&(this.$toast.fail("获取数据错误"),setTimeout(()=>{this.navBack()},2e3));let e=this.$route.query.isBuy||0;console.log("/create isBuy",e);let r=[],o=[],n=0;t.forEach(t=>{o[t.business_id]||(o[t.business_id]=[]),o[t.business_id].push(t),r.push(t),n+=t.price*t.num}),this.businessData=o,e||(this.itemsChecked=r),this.total=n,this.getAddress()}},c=r(2),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"确认订单","left-text":"","left-arrow":""},on:{"click-left":t.navBack,"click-right":t.navHome}},[r("van-icon",{attrs:{slot:"right",name:"wap-home-o",size:"2rem"},slot:"right"})],1),t._ssrNode(" "),t._l(t.businessData,(function(e,o){return[t._l(e,(function(e){return[r("van-card",{attrs:{desc:e.desc||e.description,price:t.formatPrice(e.price),num:e.num}},[r("template",{slot:"title"},[r("span",{staticClass:"text-2xl text-black-50"},[t._v(t._s(e.title))])]),t._v(" "),r("template",{slot:"thumb"},[r("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:e.thumb||e.cover,alt:""}})])],2)]}))]})),t._ssrNode(" "),t.address.id>0?r("van-cell-group",{staticClass:"mt-4"},[r("van-cell",{attrs:{title:"收货地址选择"}}),t._v(" "),r("van-cell",{staticClass:"mb-8",attrs:{title:t.address.name,icon:"location-o","is-link":"",value:t.address.tel,label:t.address.address},on:{click:t.goToAddress}})],1):r("van-cell",{staticClass:"mt-4",attrs:{title:"收货地址选择",icon:"location-o","is-link":""},on:{click:t.goToAddress}}),t._ssrNode(" "),r("van-submit-bar",{attrs:{price:t.total,"button-text":"提交订单",loading:t.submitLoading},on:{submit:t.onSubmit}},[r("span",{attrs:{slot:"tip"},slot:"tip"})])],2)}),[],!1,null,null,"1cb36fab");e.default=component.exports}};