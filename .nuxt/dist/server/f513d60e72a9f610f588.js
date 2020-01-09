exports.ids=[21],exports.modules={34:function(t,e,r){"use strict";var n=r(16);e.a={authLogin:async data=>await n.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await n.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await n.a.post("/api/user/data/infoApp",data),addressList:async data=>await n.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await n.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await n.a.post("/api/user/message/update",data),addressUpdate:async data=>await n.a.post("/api/user/address/update",data),addressDelete:async data=>await n.a.post("/api/user/address/delete",data),cartItems:async()=>await n.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await n.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await n.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await n.a.post("/cart/clear"),getCategorys:async()=>await n.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await n.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await n.a.post("/api/user/invite/getCode"),getUserAssets:async()=>await n.a.post("/api/mall/user/infoAssets"),createOrder:async data=>await n.a.post("/api/mall/order/create",data),cancelOrder:async data=>await n.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await n.a.post("/api/mall/order/finish",data),getOrder:async data=>await n.a.post("/api/mall/order/detail",data),getOrderList:async data=>await n.a.post("/api/mall/order/list",data),createPayment:async data=>await n.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await n.a.post("/api/utils/alipay/wapPay",data),wxpaySumbit:async data=>await n.a.post("/api/utils/wxpay/h5Pay",data),getInviteList:async data=>await n.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await n.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await n.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await n.a.post("/api/mall/profit/list",data)}},35:function(t,e,r){"use strict";var n=r(32),l=r.n(n);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],n=function(t,e,l){for(var i=0;i<t.length;i++){var o=t[i];if(o.pid==e){o.level=l,o.html="";for(let t=0;t<l;t++)o.html+=" -- ";r.push(o),n(t,o.id,l+1)}}};return n(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,l()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return l()(r).format(e)}},monthPlus(t,e=1,r=!0){let n=[31,28,31,30,31,30,31,31,30,31,30,31],l=parseInt(this.dateFormat(t,"YYYY")),o=parseInt(this.dateFormat(t,"MM")),d=parseInt(this.dateFormat(t,"DD"));n[1]=l%4==0&&l/100!=0||l%100==0&&l%400==0?29:28;let c=0;c+=n[o-1]-d;for(let i=0;i<e;i++){(o+=1)>12&&(o=1,l+=1),n[1]=l%4==0&&l/100!=0||l%100==0&&l%400==0?29:28;let t=n[o-1];i==e-1&&(t=t-d<0?t:d),console.log("for days:",t),c+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*c*3600:c},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},55:function(t,e,r){"use strict";r.r(e);var n=r(34),l={head:()=>({title:"收益记录"}),data:()=>({listData:{page:1,count:0,list:[],limit:10,loading:!1,finished:!1,error:!1}}),methods:{...r(35).a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},async listLoad(){this.listData.loading=!0,this.listData.finished=!1;let data={page:this.listData.page,limit:this.listData.limit};try{let t=await n.a.getProfitList(data);if(console.log("/listData listRet:",t),0!=t.code)throw new Error(t.message);this.listData.page+=1,this.listData.count=t.data.count,t.data.rows.forEach(t=>{this.listData.list.push(t)}),t.data.rows.length<this.listData.limit&&(this.listData.finished=!0)}catch(t){this.listData.error=!0,this.$toast.fail(t.message||"网络错误，请稍后重试")}this.listData.loading=!1}},async created(){}},o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"收益记录","left-text":"","left-arrow":""},on:{"click-left":t.navBack}}),t._ssrNode(" "),r("van-list",{attrs:{finished:t.listData.finished,"finished-text":"没有更多了",error:t.listData.error},on:{load:t.listLoad,"update:error":function(e){return t.$set(t.listData,"error",e)}},model:{value:t.listData.loading,callback:function(e){t.$set(t.listData,"loading",e)},expression:"listData.loading"}},t._l(t.listData.list,(function(e){return r("van-cell",{key:e.id},[r("template",{slot:"title"},[1==e.type?r("span",[t._v("购买套餐分红:")]):t._e(),t._v(" "),2==e.type?r("span",[t._v("平台每日分红:")]):t._e(),t._v(" "),r("span",{staticClass:"text-red-500"},[t._v("￥"+t._s((e.amount/100).toFixed(2)))])]),t._v(" "),r("template",{slot:"label"},[t._v("日期:"+t._s(e.date))]),t._v(" "),r("template",{slot:"default"},[0==e.status?r("span",{staticClass:"text-red-500"},[t._v("未结算")]):t._e(),t._v(" "),1==e.status?r("span",[t._v("已结算")]):t._e()])],2)})),1)],2)}),[],!1,null,null,"84fff798");e.default=component.exports}};