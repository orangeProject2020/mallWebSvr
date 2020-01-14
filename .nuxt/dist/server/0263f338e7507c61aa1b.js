exports.ids=[4],exports.modules={34:function(t,e,l){"use strict";var r=l(16);e.a={upload:async data=>await r.a.post("/api/upload/base64",data),authCheck:async()=>await r.a.post("/api/auth/check",{}),authLogin:async data=>await r.a.post("/api/user/auth/register",data),getVerifyCode:async data=>await r.a.post("/api/utils/sms/sendVerifyCode",data),getUserInfo:async data=>await r.a.post("/api/user/data/infoApp",data),getUserNoReadMsgCount:async()=>await r.a.post("/api/user/message/noReadCount",{}),addressList:async data=>await r.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await r.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await r.a.post("/api/user/message/update",data),addressUpdate:async data=>await r.a.post("/api/user/address/update",data),addressDelete:async data=>await r.a.post("/api/user/address/delete",data),cartItems:async()=>await r.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await r.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await r.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await r.a.post("/cart/clear"),getCategorys:async()=>await r.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await r.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await r.a.post("/api/user/invite/getCode"),getUserAssets:async()=>await r.a.post("/api/mall/user/infoAssets"),createOrder:async data=>await r.a.post("/api/mall/order/create",data),cancelOrder:async data=>await r.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await r.a.post("/api/mall/order/finish",data),getOrder:async data=>await r.a.post("/api/mall/order/detail",data),getOrderList:async data=>await r.a.post("/api/mall/order/list",data),createPayment:async data=>await r.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await r.a.post("/api/utils/alipay/wapPay",data),wxpaySumbit:async data=>await r.a.post("/api/utils/wxpay/h5Pay",data),getInviteList:async data=>await r.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await r.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await r.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await r.a.post("/api/mall/profit/list",data),getAfterInfo:async data=>await r.a.post("/api/mall/after/info",data),afterApplySubmit:async data=>await r.a.post("/api/mall/after/apply",data)}},35:function(t,e,l){"use strict";var r=l(32),o=l.n(r);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var l=[],r=function(t,e,o){for(var i=0;i<t.length;i++){var n=t[i];if(n.pid==e){n.level=o,n.html="";for(let t=0;t<o;t++)n.html+=" -- ";l.push(n),r(t,n.id,o+1)}}};return r(t,e,0),l},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let l=null;return l=t?new Date(1e3*t):new Date,o()(l).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",l=new Date(1e3*t);return o()(l).format(e)}},monthPlus(t,e=1,l=!0){let r=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(t,"YYYY")),n=parseInt(this.dateFormat(t,"MM")),d=parseInt(this.dateFormat(t,"DD"));r[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let c=0;c+=r[n-1]-d;for(let i=0;i<e;i++){(n+=1)>12&&(n=1,o+=1),r[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;let t=r[n-1];i==e-1&&(t=t-d<0?t:d),console.log("for days:",t),c+=t}return l?(t=t||parseInt(Date.now()/1e3))+24*c*3600:c},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},62:function(t,e,l){"use strict";l.r(e);var r=l(34),o={head:()=>({title:"售后申请"}),data:()=>({detail:{order_item:null,after:{}},orderItemId:0,isLoading:!1,afterTypeText:"",selectTypeData:{show:!1,actions:[{name:"退货",val:1},{name:"换货",val:2}]},selectReasonData:{show:!1,actions:[{name:"质量问题"},{name:"购物错误"},{name:"货物破损"},{name:"功能缺失或故障"},{name:"其他原因"}]},fileList:[],fileTypeLimit:["image/jpeg","image/png"],applySumitBtn:{disabled:!1},applyCan:!0,titleMsg:""}),methods:{...l(35).a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},getDeadline(){let t=parseInt(Date.now()/1e3),e=t+604800;t>this.detail.order_item.close_time&&t<e?(this.titleMsg="超过售后退货时间，可申请换货",this.selectTypeData.actions=[{name:"退货",val:1,disabled:!0},{name:"换货",val:2}]):t>e&&(this.titleMsg="超过售后时间，不可申请退换货",this.applyCan=!1)},async getData(){try{this.loading=!0;let t=await r.a.getAfterInfo({id:this.orderItemId});if(0!==t.code)throw new Error(t.message);this.detail.order_item=t.data.order_item||null,this.detail.after=t.data.after||{},this.detail.after.id&&(this.afterTypeText=this.selectTypeData.actions[t.data.after.type].name,this.getDeadline())}catch(t){this.$toast.fail(t.message||"获取数据失败，稍后重试")}this.loading=!1},onRefresh(){this.getData()},selectTypeClick(){this.afterTypeText="",this.selectTypeData.show=!0},selectTypeAction(t){console.log(t),this.detail.after.type=t.val,this.afterTypeText=t.name,this.selectTypeData.show=!1},selectReasonClick(){this.selectReasonData.show=!0},selectReasonAction(t){this.detail.after.reason=t.name,this.selectReasonData.show=!1},uploadBeforeRead:t=>!0,async uploadAfterRead(t){console.log("/uploadAfterRead file:",t),console.log("/uploadAfterRead fileList:",this.fileList);let data={name:t.file.name,content:t.content};try{let e=await r.a.upload(data);if(0!=e.code)throw new Error(e.message);this.fileList.forEach(l=>{l.content==t.content&&(t.url=e.data.url)}),console.log("/uploadAfterRead fileList:",this.fileList)}catch(t){this.$toast.fail(t.message||"上传失败")}},async applySubmit(){this.applySumitBtn=!0,this.detail.after.pics=[],this.fileList.forEach(t=>{this.detail.after.pics.push(t.url)}),console.log("/applySubmit data: ",this.detail.after);try{let data=this.detail.after;if(data.order_item_id=this.orderItemId,!data.type||!data.reason)throw new Error("提交信息不完整");let t=await r.a.afterApplySubmit(data);if(0!=t.code)throw new Error(t.message);this.onRefresh()}catch(t){this.$toast.fail(t.message||"提交失败")}this.applySumitBtn=!1}},async created(){this.orderItemId=this.$route.query.id,await this.getData()}},n=l(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("van-nav-bar",{attrs:{title:"售后申请","left-text":"","left-arrow":""},on:{"click-left":t.navBack}}),t._ssrNode(" "),l("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.detail.order_item?l("van-card",{key:t.detail.order_item.id,attrs:{price:(t.detail.order_item.price/100).toFixed(2),desc:t.detail.order_item.desc,num:t.detail.order_item.num}},[l("template",{slot:"title"},[l("span",{staticClass:"text-2xl text-black-50"},[t._v(t._s(t.detail.order_item.name))])]),t._v(" "),l("template",{slot:"thumb"},[l("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.detail.order_item.thumb||t.detail.order_item.cover,alt:""}})])],2):t._e(),t._v(" "),t.detail.order_item?l("van-cell-group",[l("van-cell",{attrs:{title:"订单金额"}},[[l("span",{staticClass:"text-red-500"},[t._v("￥"+t._s(t.formatPrice(t.detail.order_item.total)))])]],2),t._v(" "),l("van-cell",{attrs:{title:"订单创建时间"}},[[t._v(t._s(t.dateFormat(t.detail.order_item.create_time)))]],2),t._v(" "),l("van-cell",{attrs:{title:"订单状态"}},[[0==t.detail.order_item.status?l("span",[t._v("待付款")]):t._e(),t._v(" "),1==t.detail.order_item.status?l("span",[t._v("待发货")]):t._e(),t._v(" "),2==t.detail.order_item.status?l("span",[t._v("待收货")]):t._e(),t._v(" "),3==t.detail.order_item.status?l("span",[t._v("已完成")]):t._e(),t._v(" "),-1==t.detail.order_item.status?l("span",[t._v("已取消")]):t._e()]],2)],1):t._e(),t._v(" "),t.detail.after.id?t._e():l("van-cell-group",[l("van-cell",{attrs:{title:"售后类型","is-link":""},on:{click:t.selectTypeClick}},[t.detail.after.type?l("template",{slot:"default"},[l("span",[t._v(t._s(t.afterTypeText))])]):t._e()],2),t._v(" "),l("van-cell",{attrs:{title:"选择退换货理由","is-link":""},on:{click:t.selectReasonClick}},[t.detail.after.reason?l("template",{slot:"default"},[t._v(t._s(t.detail.after.reason))]):t._e()],2),t._v(" "),l("van-cell",{attrs:{title:"上传图片"}},[l("template",{slot:"label"},[l("van-uploader",{attrs:{"max-count":5,"before-read":t.uploadBeforeRead,"after-read":t.uploadAfterRead,"max-size":2048e3},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1)],2)],1),t._v(" "),t.detail.after.id?l("van-cell-group",[l("van-cell",{attrs:{title:"售后类型"}},[t.detail.after.type?l("template",{slot:"default"},[l("span",[t._v(t._s(t.afterTypeText))])]):t._e()],2),t._v(" "),l("van-cell",{attrs:{title:"退换货理由"}},[t.detail.after.reason?l("template",{slot:"default"},[t._v(t._s(t.detail.after.reason))]):t._e()],2),t._v(" "),l("van-cell",{attrs:{title:"图片"}},[l("template",{slot:"label"})],2),t._v(" "),l("van-cell",{attrs:{title:"售后单号"}},[l("template",{slot:"default"},[t._v(t._s(t.detail.after.after_no))])],2),t._v(" "),l("van-cell",{attrs:{title:"提交时间"}},[l("template",{slot:"default"},[t._v(t._s(t.dateFormat(t.detail.after.create_time)))])],2),t._v(" "),l("van-cell",{attrs:{title:"状态"}},[l("template",{slot:"default"},[0==t.detail.after.status?l("span",[t._v("未通过")]):t._e(),t._v(" "),1==t.detail.after.status?l("span",[t._v("处理中")]):t._e(),t._v(" "),2==t.detail.after.status?l("span",[t._v("已完成")]):t._e()])],2)],1):t._e(),t._v(" "),t.detail.after.id?t._e():l("van-row",[l("van-cell",{attrs:{span:"24"}},[t._v(t._s(t.titleMsg))]),t._v(" "),t.applyCan?l("van-cell",{attrs:{span:"24"}},[l("van-button",{attrs:{round:"",type:"danger",plain:"",block:""},on:{click:t.applySubmit}},[t._v("提交")])],1):t._e()],1)],1),t._ssrNode(" "),l("van-action-sheet",{attrs:{actions:t.selectTypeData.actions},on:{select:t.selectTypeAction},model:{value:t.selectTypeData.show,callback:function(e){t.$set(t.selectTypeData,"show",e)},expression:"selectTypeData.show"}}),t._ssrNode(" "),l("van-action-sheet",{attrs:{actions:t.selectReasonData.actions},on:{select:t.selectReasonAction},model:{value:t.selectReasonData.show,callback:function(e){t.$set(t.selectReasonData,"show",e)},expression:"selectReasonData.show"}})],2)}),[],!1,null,null,"6caea327");e.default=component.exports}};