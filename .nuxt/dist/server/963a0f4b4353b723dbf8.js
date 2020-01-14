exports.ids=[7],exports.modules={34:function(t,e,r){"use strict";var l=r(16);e.a={upload:async data=>await l.a.post("/api/upload/base64",data),authCheck:async()=>await l.a.post("/api/auth/check",{}),authLogin:async data=>await l.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await l.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await l.a.post("/api/user/data/infoApp",data),getUserNoReadMsgCount:async()=>await l.a.post("/api/user/message/noReadCount",{}),addressList:async data=>await l.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await l.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await l.a.post("/api/user/message/update",data),addressUpdate:async data=>await l.a.post("/api/user/address/update",data),addressDelete:async data=>await l.a.post("/api/user/address/delete",data),cartItems:async()=>await l.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await l.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await l.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await l.a.post("/cart/clear"),getCategorys:async()=>await l.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await l.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await l.a.post("/api/user/invite/getCode"),getUserAssets:async()=>await l.a.post("/api/mall/user/infoAssets"),createOrder:async data=>await l.a.post("/api/mall/order/create",data),cancelOrder:async data=>await l.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await l.a.post("/api/mall/order/finish",data),getOrder:async data=>await l.a.post("/api/mall/order/detail",data),getOrderList:async data=>await l.a.post("/api/mall/order/list",data),createPayment:async data=>await l.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await l.a.post("/api/utils/alipay/wapPay",data),wxpaySumbit:async data=>await l.a.post("/api/utils/wxpay/h5Pay",data),getInviteList:async data=>await l.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await l.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await l.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await l.a.post("/api/mall/profit/list",data),getAfterInfo:async data=>await l.a.post("/api/mall/after/info",data),afterApplySubmit:async data=>await l.a.post("/api/mall/after/apply",data)}},35:function(t,e,r){"use strict";var l=r(32),n=r.n(l);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],l=function(t,e,n){for(var i=0;i<t.length;i++){var o=t[i];if(o.pid==e){o.level=n,o.html="";for(let t=0;t<n;t++)o.html+=" -- ";r.push(o),l(t,o.id,n+1)}}};return l(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,n()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return n()(r).format(e)}},monthPlus(t,e=1,r=!0){let l=[31,28,31,30,31,30,31,31,30,31,30,31],n=parseInt(this.dateFormat(t,"YYYY")),o=parseInt(this.dateFormat(t,"MM")),c=parseInt(this.dateFormat(t,"DD"));l[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let m=0;m+=l[o-1]-c;for(let i=0;i<e;i++){(o+=1)>12&&(o=1,n+=1),l[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let t=l[o-1];i==e-1&&(t=t-c<0?t:c),console.log("for days:",t),m+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*m*3600:m},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},36:function(t,e,r){"use strict";e.a={cartItems(){let t=plus.storage.getItem("cart");return t?JSON.parse(t):[]},cartItemPlus(t,e=1){let r=this.cartItems(),body={...t,num:e},l=body.id,n=!1;for(let t=0;t<r.length;t++){let o=r[t];o.id==l&&(o.num+=e,n=!0)}return n||r.push({id:body.id,num:body.num,cover:body.thumb||body.cover,title:body.title,desc:body.description||"",price:body.price,price_market:body.price_market,business_id:body.business_id,stock:body.stock||-1}),plus.storage.setItem("cart",JSON.stringify(r)),r},cartItemMinus(t,e=1){let r=this.cartItems(),l={...t,num:e}.id,n=-1;for(let t=0;t<r.length;t++){let o=r[t];o.id==l&&(o.num>e?o.num-=e:n=t)}return n>-1&&r.splice(n,1),console.log("/cartItemMinus",JSON.stringify(t,null,2)),plus.storage.setItem("cart",JSON.stringify(r||[])),r},cartClear:()=>(plus.storage.setItem("cart",""),[])}},52:function(t,e,r){"use strict";r.r(e);var l=r(34),n=r(35),o=r(36),c={head:()=>({title:"购物车"}),data:()=>({isLoading:!1,items:[],result:[],checkAllVal:!1,total:0,submitLoading:!1}),methods:{...n.a,async onRefresh(){try{await this.getCartItems(),this.$toast.success("刷新成功")}catch(t){this.$toast.fail("刷新失败，请稍后重试")}this.isLoading=!1},navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},navHome(){this.$store.state.isApp?uni.switchTab({url:"/pages/mall/index"}):this.$router.replace("/list")},async getCartItems(){try{if(this.$store.state.isApp){let t=o.a.cartItems();console.log("/getCartItems",t),this.items=t}else{let t=await l.a.cartItems();console.log("/getCartItems",t),this.items=t}this.getTotal()}catch(t){this.$toast.fail("获取购物车信息失败，请稍后刷新重试")}},async clearCart(){try{if(this.$store.state.isApp){let t=o.a.cartClear();console.log("/getCartItems",t),this.items=t}else{let t=await l.a.cartClear();console.log("/getCartItems",t),this.items=t}this.getTotal(),this.$toast.success("清空购物车成功")}catch(t){this.$toast.fail("获取购物车信息失败，请稍后刷新重试")}},async changeNum(t,e){console.log("changeNum:",t,e);let r=JSON.parse(e.name),n=this.items;r.num>t?(t=r.num-t,n=this.$store.state.isApp?o.a.cartItemMinus(r,t):await l.a.cartItemMinus(r,t)):r.num<t&&(t-=r.num,n=this.$store.state.isApp?o.a.cartItemPlus(r,t):await l.a.cartItemPlus(r,t)),this.items=n,this.getTotal()},checkItem(){console.log("/checkItem",this.result),this.result.length==this.items.length?this.checkAllVal=!0:this.checkAllVal=!1,this.getTotal()},checkAll(){console.log("/checkAll",this.checkAllVal),this.checkAllVal?this.result=[]:(this.result=[],this.items.forEach(t=>{this.result.push(t.id)})),this.getTotal()},getTotal(){let t=0;this.items.forEach(e=>{this.result.indexOf(e.id)>-1&&(t+=e.price*e.num)}),this.total=t},async onSubmit(){let t=await l.a.authCheck();if(console.log("/create retCheckAuth",JSON.stringify(t,null,2)),t.code)return void uni.navigateTo({url:"/pages/auth/login"});if(this.result.length<=0)return void this.$toast("请选择待提交商品");this.submitLoading=!0;let e=this.items,r=this.result,n=[];e.forEach(t=>{r.indexOf(t.id)>-1&&n.push(t)}),this.$store.commit("orderDatasSet",n),this.$router.push("/order/confirm"),this.submitLoading=!1}},async created(){await this.getCartItems()}},m=r(2),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"购物车","left-text":"","left-arrow":"","right-text":"清空"},on:{"click-left":t.navBack}},[r("template",{slot:"right"},[r("van-icon",{staticClass:"pl-4",attrs:{name:"delete",size:"20"},on:{click:t.clearCart}}),t._v(" "),r("van-icon",{staticClass:"pl-4",attrs:{name:"wap-home-o",size:"20"},on:{click:t.navHome}})],1)],2),t._ssrNode(" "),r("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.items.length>0?[r("div",[r("van-checkbox-group",{ref:"checkboxGroup",on:{change:t.checkItem},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.items,(function(e){return r("van-row",{key:e.id,staticClass:"border-b"},[r("van-col",{staticClass:"pl-8 pt-8",attrs:{span:"4"}},[r("van-checkbox",{attrs:{name:e.id}})],1),t._v(" "),r("van-col",{attrs:{span:"20"}},[r("van-card",{attrs:{title:e.title,desc:e.desc,price:t.formatPrice(e.price),thumb:e.cover}},[r("div",{attrs:{slot:"footer"},slot:"footer"},[r("van-stepper",{attrs:{min:0,integer:"",name:JSON.stringify(e)},on:{change:t.changeNum},model:{value:e.num,callback:function(r){t.$set(e,"num",r)},expression:"item.num"}})],1)])],1)],1)})),1)],1)]:t._e()],2),t._ssrNode(" "),r("van-submit-bar",{attrs:{price:t.total,"button-text":"结算",loading:t.submitLoading},on:{submit:t.onSubmit}},[r("van-checkbox",{staticClass:"pl-8",on:{click:t.checkAll},model:{value:t.checkAllVal,callback:function(e){t.checkAllVal=e},expression:"checkAllVal"}},[t._v("全选")]),t._v(" "),r("span",{attrs:{slot:"tip"},slot:"tip"})],1)],2)}),[],!1,null,null,"2835a0b8");e.default=component.exports}};