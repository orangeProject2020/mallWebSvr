exports.ids=[24],exports.modules={34:function(t,e,r){"use strict";var n=r(16);e.a={upload:async data=>await n.a.post("/api/upload/base64",data),authCheck:async()=>await n.a.post("/api/auth/check",{}),authLogin:async data=>await n.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await n.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await n.a.post("/api/user/data/infoApp",data),getUserNoReadMsgCount:async()=>await n.a.post("/api/user/message/noReadCount",{}),addressList:async data=>await n.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await n.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await n.a.post("/api/user/message/update",data),addressUpdate:async data=>await n.a.post("/api/user/address/update",data),addressDelete:async data=>await n.a.post("/api/user/address/delete",data),cartItems:async()=>await n.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await n.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await n.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await n.a.post("/cart/clear"),getCategorys:async()=>await n.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await n.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await n.a.post("/api/user/invite/getCode"),getUserAssets:async()=>await n.a.post("/api/mall/user/infoAssets"),createOrder:async data=>await n.a.post("/api/mall/order/create",data),cancelOrder:async data=>await n.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await n.a.post("/api/mall/order/finish",data),getOrder:async data=>await n.a.post("/api/mall/order/detail",data),getOrderList:async data=>await n.a.post("/api/mall/order/list",data),createPayment:async data=>await n.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await n.a.post("/api/utils/alipay/wapPay",data),wxpaySumbit:async data=>await n.a.post("/api/utils/wxpay/h5Pay",data),getInviteList:async data=>await n.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await n.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await n.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await n.a.post("/api/mall/profit/list",data),getAfterInfo:async data=>await n.a.post("/api/mall/after/info",data),afterApplySubmit:async data=>await n.a.post("/api/mall/after/apply",data)}},35:function(t,e,r){"use strict";var n=r(32),l=r.n(n);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],n=function(t,e,l){for(var i=0;i<t.length;i++){var o=t[i];if(o.pid==e){o.level=l,o.html="";for(let t=0;t<l;t++)o.html+=" -- ";r.push(o),n(t,o.id,l+1)}}};return n(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,l()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return l()(r).format(e)}},monthPlus(t,e=1,r=!0){let n=[31,28,31,30,31,30,31,31,30,31,30,31],l=parseInt(this.dateFormat(t,"YYYY")),o=parseInt(this.dateFormat(t,"MM")),c=parseInt(this.dateFormat(t,"DD"));n[1]=l%4==0&&l/100!=0||l%100==0&&l%400==0?29:28;let d=0;d+=n[o-1]-c;for(let i=0;i<e;i++){(o+=1)>12&&(o=1,l+=1),n[1]=l%4==0&&l/100!=0||l%100==0&&l%400==0?29:28;let t=n[o-1];i==e-1&&(t=t-c<0?t:c),console.log("for days:",t),d+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},50:function(t,e,r){"use strict";r.r(e);var n=r(34),l={head:()=>({title:"提现申请"}),data:()=>({statusActive:0,amount:"0.00",name:"",assets:{balance:0,amount:0},max:0,errMsg:""}),methods:{...r(35).a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},statusChange(t,title=""){this.$router.replace("/user/withdraw?status="+t)},async withdrawApply(){let t=100*this.amount;if(this.errMsg="",console.log("/withdrawApply amount",t),isNaN(t)||0==t)return void(this.errMsg="请输入正确的金额");if(!this.name)return void(this.errMsg="请输入真实姓名");let e=this.assets.balance>this.assets.withdraw?this.assets.withdraw:this.assets.balance;e<=0?this.errMsg="可提取金额不足":t>e?this.errMsg="提取金额超过限制":await this.withdrawApplySubmit()},async withdrawApplySubmit(){this.errMsg="";let t=await this.$dialog.confirm({title:"确认",message:"提交提现申请？"});if(console.log("/withdrawApply confirm:",t),"confirm"===t){let t=100*this.amount;try{let e=await n.a.withdrawApply({amount:t,name:this.name});if(console.log("/withdrawApply confirm:",JSON.stringify(e)),0!=e.code)throw new Error(e.message);this.$toast.success("提交成功"),this.statusChange(1)}catch(t){this.$toast.fail(t.message)}}},async getUserAssets(){let t=await n.a.getUserAssets();return console.log("/getUserAssets ret:",t),0==t.code?(this.assets.balance=t.data.balance,this.assets.withdraw=t.data.withdraw,this.max=this.assets.balance>this.assets.withdraw?this.assets.withdraw:this.assets.balance):(this.assets.balance=0,this.assets.withdraw=0,this.max=0),t}},created(){this.getUserAssets()}},o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"提现申请","left-text":"","left-arrow":""},on:{"click-left":t.navBack}}),t._ssrNode(" "),t._ssrNode("<div>","</div>",[r("van-cell-group",{staticClass:"pt-3 pb-3"},[r("van-field",{attrs:{placeholder:"请输入提现金额",label:"提现金额",required:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入支付宝绑定真实姓名",label:"真实姓名",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._ssrNode(' <div class="text-red-500 p-4"><span class="text-xl">'+t._ssrEscape(t._s(t.errMsg))+"</span></div> "),r("van-cell-group",{staticClass:"mt-6"},[r("van-cell",{attrs:{title:"最大可提取额度"}},[r("template",{slot:"default"},[r("span",{staticClass:"text-red-500"},[t._v("￥ "+t._s(t.formatPrice(t.max)))])])],2),t._v(" "),r("van-cell",{attrs:{title:"分红可提余额"}},[r("template",{slot:"default"},[r("span",{staticClass:"text-red-500"},[t._v("￥ "+t._s(t.formatPrice(t.assets.balance)))])])],2),t._v(" "),r("van-cell",{attrs:{title:"提现额度限额"}},[r("template",{slot:"default"},[r("span",{staticClass:"text-red-500"},[t._v("￥ "+t._s(t.formatPrice(t.assets.withdraw)))])])],2)],1),t._ssrNode(" "),r("van-row",{staticClass:"p-6 text-lg"},[r("van-col",{attrs:{span:"24"}},[t._v("提现规则：平台最低提现200元，可提现金额按照用户提现额额度限额为基准。根据用户实际提现金额收取提现通道手续费为提现金额的1％；")]),t._v(" "),r("van-col",{staticClass:"mt-4",attrs:{span:"24"}},[t._v("用户如需提现，需消耗提现额度，根据推荐其他用户购买套餐并确认收货即可获得提现额度，推荐用户购买套餐获取提现额度规则如下：：")]),t._v(" "),r("van-col",{staticClass:"mt-4",attrs:{span:"24"}},[t._v("推荐1用户购买特惠A套餐，获得200提现额度；")]),t._v(" "),r("van-col",{attrs:{span:"24"}},[t._v("推荐1用户购买特惠B套餐，获得400提现额度；")]),t._v(" "),r("van-col",{attrs:{span:"24"}},[t._v("推荐1用户购买特惠C套餐，获得800提现额度；")]),t._v(" "),r("van-col",{attrs:{span:"24"}},[t._v("推荐1用户购买特惠D套餐，获得2000提现额度；")])],1)],2),t._ssrNode(" "),t._ssrNode('<div class="fixed bottom-0 w-full">',"</div>",[r("van-button",{attrs:{type:"danger",block:""},on:{click:t.withdrawApply}},[t._v("提交")]),t._ssrNode(" "),r("van-number-keyboard",{attrs:{"safe-area-inset-bottom":""}})],2)],2)}),[],!1,null,null,"c228b278");e.default=component.exports}};