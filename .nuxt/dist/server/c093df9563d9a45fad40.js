exports.ids=[22],exports.modules={34:function(t,e,r){"use strict";var n=r(16);e.a={upload:async data=>await n.a.post("/api/upload/base64",data),authCheck:async()=>await n.a.post("/api/auth/check",{}),authLogin:async data=>await n.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await n.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await n.a.post("/api/user/data/infoApp",data),getUserNoReadMsgCount:async()=>await n.a.post("/api/user/message/noReadCount",{}),addressList:async data=>await n.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await n.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await n.a.post("/api/user/message/update",data),addressUpdate:async data=>await n.a.post("/api/user/address/update",data),addressDelete:async data=>await n.a.post("/api/user/address/delete",data),cartItems:async()=>await n.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await n.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await n.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await n.a.post("/cart/clear"),getCategorys:async()=>await n.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await n.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await n.a.post("/api/user/invite/getCode"),getUserAssets:async()=>await n.a.post("/api/mall/user/infoAssets"),createOrder:async data=>await n.a.post("/api/mall/order/create",data),cancelOrder:async data=>await n.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await n.a.post("/api/mall/order/finish",data),getOrder:async data=>await n.a.post("/api/mall/order/detail",data),getOrderList:async data=>await n.a.post("/api/mall/order/list",data),createPayment:async data=>await n.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await n.a.post("/api/utils/alipay/wapPay",data),wxpaySumbit:async data=>await n.a.post("/api/utils/wxpay/h5Pay",data),getInviteList:async data=>await n.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await n.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await n.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await n.a.post("/api/mall/profit/list",data),getAfterInfo:async data=>await n.a.post("/api/mall/after/info",data),afterApplySubmit:async data=>await n.a.post("/api/mall/after/apply",data)}},35:function(t,e,r){"use strict";var n=r(32),o=r.n(n);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],n=function(t,e,o){for(var i=0;i<t.length;i++){var l=t[i];if(l.pid==e){l.level=o,l.html="";for(let t=0;t<o;t++)l.html+=" -- ";r.push(l),n(t,l.id,o+1)}}};return n(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,o()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return o()(r).format(e)}},monthPlus(t,e=1,r=!0){let n=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(t,"YYYY")),l=parseInt(this.dateFormat(t,"MM")),c=parseInt(this.dateFormat(t,"DD"));n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let d=0;d+=n[l-1]-c;for(let i=0;i<e;i++){(l+=1)>12&&(l=1,o+=1),n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let t=n[l-1];i==e-1&&(t=t-c<0?t:c),console.log("for days:",t),d+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},53:function(t,e,r){"use strict";r.r(e);r(34);var n={head:()=>({title:"分红规则"}),data:()=>({}),methods:{...r(35).a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)}},async created(){}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"分红规则","left-text":"","left-arrow":""},on:{"click-left":t.navBack}}),t._ssrNode(" "),r("van-row",{staticClass:"p-6 text-lg"},[r("van-col",{attrs:{span:"24"}},[t._v("用户购买平台四类套餐产品，根据套餐产品设定的分红额度，规则如下：")]),t._v(" "),r("van-col",{staticClass:"mt-4",attrs:{span:"24"}},[t._v("A类套餐，用户购买后，获得500平台共享分红额度;")]),t._v(" "),r("van-col",{attrs:{span:"24"}},[t._v("B类套餐，用户购买后，获得1500平台共享分红额度;")]),t._v(" "),r("van-col",{attrs:{span:"24"}},[t._v("C类套餐，用户购买后，获得6000平台共享分红额度;")]),t._v(" "),r("van-col",{attrs:{span:"24"}},[t._v("D类套餐，用户购买后，获得15000平台共享分红额度;")])],1)],2)}),[],!1,null,null,"df8c1960");e.default=component.exports}};