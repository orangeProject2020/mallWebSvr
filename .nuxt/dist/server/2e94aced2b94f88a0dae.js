exports.ids=[18],exports.modules={34:function(t,e,r){"use strict";var l=r(16);e.a={authLogin:async data=>await l.a.post("/api/user/auth/register",data),getUserInfo:async data=>await l.a.post("/api/user/data/infoApp",data),addressList:async data=>await l.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await l.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await l.a.post("/api/user/message/update",data),addressUpdate:async data=>await l.a.post("/api/user/address/update",data),addressDelete:async data=>await l.a.post("/api/user/address/delete",data),cartItems:async()=>await l.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await l.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await l.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await l.a.post("/cart/clear"),getCategorys:async()=>await l.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await l.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await l.a.post("/api/user/invite/getCode"),createOrder:async data=>await l.a.post("/api/mall/order/create",data),cancelOrder:async data=>await l.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await l.a.post("/api/mall/order/finish",data),getOrder:async data=>await l.a.post("/api/mall/order/detail",data),getOrderList:async data=>await l.a.post("/api/mall/order/list",data),createPayment:async data=>await l.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await l.a.post("/api/utils/alipay/wapPay",data),getInviteList:async data=>await l.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await l.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await l.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await l.a.post("/api/mall/profit/list",data)}},35:function(t,e,r){"use strict";var l=r(32),n=r.n(l);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],l=function(t,e,n){for(var i=0;i<t.length;i++){var o=t[i];if(o.pid==e){o.level=n,o.html="";for(let t=0;t<n;t++)o.html+=" -- ";r.push(o),l(t,o.id,n+1)}}};return l(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,n()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return n()(r).format(e)}},monthPlus(t,e=1,r=!0){let l=[31,28,31,30,31,30,31,31,30,31,30,31],n=parseInt(this.dateFormat(t,"YYYY")),o=parseInt(this.dateFormat(t,"MM")),c=parseInt(this.dateFormat(t,"DD"));l[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let d=0;d+=l[o-1]-c;for(let i=0;i<e;i++){(o+=1)>12&&(o=1,n+=1),l[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let t=l[o-1];i==e-1&&(t=t-c<0?t:c),console.log("for days:",t),d+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},53:function(t,e,r){"use strict";r.r(e);var l=r(34),n={head:()=>({title:"用户消息"}),data:()=>({listData:{page:1,count:0,list:[],limit:10,loading:!1,finished:!1,error:!1},show:!1,notice:{title:"",info:""}}),methods:{...r(35).a,navBack(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},async listLoad(){this.listData.loading=!0,this.listData.finished=!1;let data={page:this.listData.page,limit:this.listData.limit};try{let t=await l.a.getUserMsgList(data);if(console.log("/listData listRet:",t),0!=t.code)throw new Error(t.message);this.listData.page+=1,this.listData.count=t.data.count,t.data.rows.forEach(t=>{this.listData.list.push(t)}),t.data.rows.length<this.listData.limit&&(this.listData.finished=!0)}catch(t){this.listData.error=!0,this.$toast.fail(t.message||"网络错误，请稍后重试")}this.listData.loading=!1},async msgItemClick(t){if(1==t.type){let e=t.notice;e&&(this.notice.title=e.title,this.notice.info=e.info,this.show=!0)}if(0==t.status){let e=await l.a.userMsgRead({id:t.id,status:1});console.log("/msgItemClick ret:",e),0==e.code&&(t.status=1)}}},async created(){}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"公告消息","left-text":"","left-arrow":""},on:{"click-left":t.navBack}}),t._ssrNode(" "),r("van-list",{attrs:{finished:t.listData.finished,"finished-text":"没有更多了",error:t.listData.error},on:{load:t.listLoad,"update:error":function(e){return t.$set(t.listData,"error",e)}},model:{value:t.listData.loading,callback:function(e){t.$set(t.listData,"loading",e)},expression:"listData.loading"}},t._l(t.listData.list,(function(e){return r("van-cell",{key:e.id,attrs:{"is-link":!!e.type},on:{click:function(r){return t.msgItemClick(e)}}},[r("template",{slot:"title"},[0==e.status?r("span",{staticClass:"bg-red-500",staticStyle:{width:"4px",height:"4px","border-radius":"4px",display:"inline-block","vertical-align":"middle"}}):t._e(),t._v(" "),0==e.type?r("span",[t._v("用户消息:"+t._s(e.info))]):t._e(),t._v(" "),1==e.type?r("span",[t._v("公告消息:"+t._s(e.notice?e.notice.title:""))]):t._e()]),t._v(" "),r("template",{slot:"label"},[t._v(t._s(t.dateFormat(e.create_time)))]),t._v(" "),r("template",{slot:"default"})],2)})),1),t._ssrNode(" "),r("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("div",{staticClass:"p-4",staticStyle:{width:"300px"}},[r("div",{staticClass:"text-center text-2xl"},[t._v(t._s(t.notice.title))]),t._v(" "),r("div",{staticClass:"text-center mt-4 text-xl"},[t._v(t._s(t.notice.info))])])])],2)}),[],!1,null,null,"0b9d9b41");e.default=component.exports}};