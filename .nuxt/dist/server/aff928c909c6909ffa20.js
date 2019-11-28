exports.ids=[14],exports.modules={34:function(t,e,r){"use strict";var n=r(32),o=r.n(n);e.a={formatPrice:t=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],n=function(t,e,o){for(var i=0;i<t.length;i++){var l=t[i];if(l.pid==e){l.level=o,l.html="";for(let t=0;t<o;t++)l.html+=" -- ";r.push(l),n(t,l.id,o+1)}}};return n(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,o()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return o()(r).format(e)}},monthPlus(t,e=1,r=!0){let n=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(t,"YYYY")),l=parseInt(this.dateFormat(t,"MM")),c=parseInt(this.dateFormat(t,"DD"));n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let d=0;d+=n[l-1]-c;for(let i=0;i<e;i++){(l+=1)>12&&(l=1,o+=1),n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let t=n[l-1];i==e-1&&(t=t-c<0?t:c),console.log("for days:",t),d+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},35:function(t,e,r){"use strict";var n=r(16);e.a={authLogin:async data=>await n.a.post("/api/user/auth/register",data),getUserInfo:async()=>await n.a.post("/api/user/data/infoApp",data),addressList:async()=>await n.a.post("/api/user/address/listUser"),addressUpdate:async data=>await n.a.post("/api/user/address/update",data),addressDelete:async data=>await n.a.post("/api/user/address/delete",data),cartItems:async()=>await n.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await n.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await n.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await n.a.post("/cart/clear"),getCategorys:async()=>await n.a.post("/api/mall/goods/categorys",{status:1}),getUserInviteCode:async()=>await n.a.post("/api/user/invite/getCode"),createOrder:async data=>await n.a.post("/api/mall/order/create",data),cancelOrder:async data=>await n.a.post("/api/mall/order/cancel",data),getOrder:async data=>await n.a.post("/api/mall/order/detail",data),getOrderList:async data=>await n.a.post("/api/mall/order/list",data),createPayment:async data=>await n.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await n.a.post("/api/utils/alipay/wapPay",data),getInviteList:async data=>await n.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await n.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await n.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await n.a.post("/api/mall/profit/list",data)}},38:function(t,e,r){"use strict";e.a={cancel_reasons:["我不想买了","信息填错了","卖家缺货","其他原因"]}},50:function(t,e,r){"use strict";r.r(e);var n=r(35),o=r(34),l=r(38),c={head:()=>({title:"我的订单"}),data:()=>({isLoading:!1,statusActive:0,listLoading:!1,listFinished:!1,listError:!1,orders:[],page:1,orderCancel:{show:!1,reason:"",id:0},orderCancelReasons:l.a.cancel_reasons}),methods:{...o.a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},async onRefresh(){this.isLoading=!0,this.orders=[],this.page=1,this.listFinished=!1,this.listLoading=!0,await this.listLoad(),this.isLoading=!1},async statusChange(t,title=""){console.log(t),this.orders=[],this.page=1,this.listFinished=!1;this.$toast.loading({duration:0,forbidClick:!0,message:"加载中"});this.statusActive=t,await this.listLoad(),this.$toast.clear()},async listLoad(){this.listLoading=!0;let data={};data.page=this.page,data.limit=5,data.status=this.statusActive,console.log("/listLoad data",data);try{let t=await n.a.getOrderList(data);if(console.log("listLoad ret:",JSON.stringify(t)),0!=t.code)throw new Error(t.message);{let e=t.data.rows;e.length?(e.forEach(t=>{this.orders.push(t)}),this.page+=1):this.listFinished=!0}}catch(t){this.$toast.fail(t.message||t),this.listError=!0}this.listLoading=!1},goToDetail(t){let e="/order/detail?id="+t.id;this.$router.push(e)},goToPayment(t){let e="/payment?orderId="+t.id;this.$router.push(e)},orderCancelShow(t){this.orderCancel.show=!0,this.orderCancel.id=t.id,this.orderCancel.reason=""},orderCancelClose(){this.orderCancel.show=!1},async orderCancelSubmit(){let t={};t.id=this.orderCancel.id,t.cancel_reason=this.orderCancel.reason,console.log("/orderCancelSubmit submitData:",JSON.stringify(t,null,2));try{let e=await n.a.cancelOrder(t);if(console.log("/orderCancelSubmit cancelRet:",JSON.stringify(e,null,2)),0!=e.code)throw new Error(e.message);this.$toast.success("取消订单成功"),this.onRefresh(),this.orderCancel.show=!1}catch(t){this.$toast.fail(t.message||"取消失败")}}},created(){let t=this.$route.query.status||"0";console.log("/created status",t),this.statusChange(parseInt(t))}},d=r(2),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"订单列表","left-text":"","left-arrow":""},on:{"click-left":t.navBack}}),t._ssrNode(" "),r("van-tabs",{on:{click:t.statusChange},model:{value:t.statusActive,callback:function(e){t.statusActive=e},expression:"statusActive"}},[r("van-tab",{attrs:{title:"待付款"}}),t._v(" "),r("van-tab",{attrs:{title:"待发货"}}),t._v(" "),r("van-tab",{attrs:{title:"待收货"}}),t._v(" "),r("van-tab",{attrs:{title:"已完成"}})],1),t._ssrNode(" "),r("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[r("div",{staticStyle:{"min-height":"400px"}},[r("van-list",{attrs:{finished:t.listFinished,"finished-text":"没有更多了",error:t.listError,"error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.listError=e},load:t.listLoad},model:{value:t.listLoading,callback:function(e){t.listLoading=e},expression:"listLoading"}},t._l(t.orders,(function(e){return r("van-cell",{key:e.id},[r("div",{staticClass:"p-2"},[r("div",{staticClass:"border rounded-lg"},[r("van-cell",{on:{click:function(r){return t.goToDetail(e)}}},[r("template",{slot:"title"},[r("span",{staticClass:"custom-title"},[t._v("NO."+t._s(e.order_no))])]),t._v(" "),r("template",{slot:"default"})],2),t._v(" "),r("div",{staticClass:"text-gray-500"}),t._v(" "),t._l(e.items,(function(n){return r("van-card",{key:n.id,attrs:{price:(n.price/100).toFixed(2),desc:n.desc,title:n.name,thumb:n.cover},on:{click:function(r){return t.goToDetail(e)}}})})),t._v(" "),r("van-cell",[r("template",{slot:"title"},[r("span",[t._v("总计:")]),t._v(" "),r("span",{staticClass:"text-red-700"},[t._v("￥"+t._s((e.total/100).toFixed(2)))])]),t._v(" "),r("template",{slot:"default"},[0==e.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"default",size:"mini"},on:{click:function(r){return t.orderCancelShow(e)}}},[t._v("取消")]):t._e(),t._v(" "),0==e.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"danger",size:"mini"},on:{click:function(r){return t.goToPayment(e)}}},[t._v("支付")]):t._e(),t._v(" "),2==e.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"warning",size:"mini"}},[t._v("确认收货")]):t._e()],1)],2)],2)])])})),1)],1)]),t._ssrNode(" "),r("van-action-sheet",{attrs:{title:"取消订单"},model:{value:t.orderCancel.show,callback:function(e){t.$set(t.orderCancel,"show",e)},expression:"orderCancel.show"}},[r("div",{staticClass:"p-4"},[r("div",{staticClass:"text-center text-xl"},[t._v("取消后无法恢复")]),t._v(" "),r("div",{staticClass:"text-2xl text-gray-600 mt-4"},[t._v("请选择取消理由")]),t._v(" "),r("div",{staticClass:"mt-4"},[r("van-radio-group",{model:{value:t.orderCancel.reason,callback:function(e){t.$set(t.orderCancel,"reason",e)},expression:"orderCancel.reason"}},[r("van-cell-group",t._l(t.orderCancelReasons,(function(t){return r("van-cell",{key:t,attrs:{title:t,clickable:""}},[r("van-radio",{attrs:{slot:"right-icon",name:t,"checked-color":"#07c160"},slot:"right-icon"})],1)})),1)],1)],1),t._v(" "),r("div",{},[r("van-goods-action",{staticClass:"p-4",staticStyle:{position:"unset"}},[r("van-goods-action-button",{attrs:{type:"warning",text:"暂不取消"},on:{click:t.orderCancelClose}}),t._v(" "),r("van-goods-action-button",{attrs:{type:"danger",text:"确认取消"},on:{click:t.orderCancelSubmit}})],1)],1)])])],2)}),[],!1,null,null,"4f28f27a");e.default=component.exports}};