exports.ids=[10],exports.modules={34:function(t,e,r){"use strict";var o=r(16);e.a={authLogin:async data=>await o.a.post("/api/user/auth/register",data),getUserInfo:async data=>await o.a.post("/api/user/data/infoApp",data),addressList:async data=>await o.a.post("/api/user/address/listUser",data),getUserMsgList:async data=>await o.a.post("/api/user/message/listUser",data),userMsgRead:async data=>await o.a.post("/api/user/message/update",data),addressUpdate:async data=>await o.a.post("/api/user/address/update",data),addressDelete:async data=>await o.a.post("/api/user/address/delete",data),cartItems:async()=>await o.a.post("/cart/"),cartItemPlus:async(t,e=1)=>await o.a.post("/cart/plus",{...t,num:e}),cartItemMinus:async(t,e=1)=>await o.a.post("/cart/minus",{...t,num:e}),cartClear:async()=>await o.a.post("/cart/clear"),getCategorys:async()=>await o.a.post("/api/mall/goods/categorys",{status:1}),getGoodsList:async data=>await o.a.post("/api/mall/goods/list",{...data,status:1}),getUserInviteCode:async()=>await o.a.post("/api/user/invite/getCode"),createOrder:async data=>await o.a.post("/api/mall/order/create",data),cancelOrder:async data=>await o.a.post("/api/mall/order/cancel",data),finishOrder:async data=>await o.a.post("/api/mall/order/finish",data),getOrder:async data=>await o.a.post("/api/mall/order/detail",data),getOrderList:async data=>await o.a.post("/api/mall/order/list",data),createPayment:async data=>await o.a.post("/api/mall/payment/create",data),alipaySumbit:async data=>await o.a.post("/api/utils/alipay/wapPay",data),getInviteList:async data=>await o.a.post("/api/user/invite/list",data),getWithdrawList:async data=>await o.a.post("/api/mall/withdraw/list",data),withdrawApply:async data=>await o.a.post("/api/mall/withdraw/apply",data),getProfitList:async data=>await o.a.post("/api/mall/profit/list",data)}},35:function(t,e,r){"use strict";var o=r(32),n=r.n(o);e.a={formatPrice:(t=0)=>(t/100).toFixed(2),unLimitTreeLevel(t,e=0){var r=[],o=function(t,e,n){for(var i=0;i<t.length;i++){var l=t[i];if(l.pid==e){l.level=n,l.html="";for(let t=0;t<n;t++)l.html+=" -- ";r.push(l),o(t,l.id,n+1)}}};return o(t,e,0),r},getTimestamp(t){let e=new Date(t);return parseInt(e.getTime()/1e3)},dateFormat(t,e){e=e||"YYYY-MM-DD HH:mm";let r=null;return r=t?new Date(1e3*t):new Date,n()(r).format(e)},dateDisplay(t){let e=parseInt(Date.now()/1e3)-t;if(e<60)return e+"秒前";if(e>=60&&e<3600)return parseInt(e/60).toString()+"分钟前";if(e>=3600&&e<86400)return parseInt(e/3600).toString()+"小时前";if(e>=86400&&e<2592e3)return parseInt(e/3600/24).toString()+"天前";{let e="YYYY-MM-DD HH:mm",r=new Date(1e3*t);return n()(r).format(e)}},monthPlus(t,e=1,r=!0){let o=[31,28,31,30,31,30,31,31,30,31,30,31],n=parseInt(this.dateFormat(t,"YYYY")),l=parseInt(this.dateFormat(t,"MM")),d=parseInt(this.dateFormat(t,"DD"));o[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let c=0;c+=o[l-1]-d;for(let i=0;i<e;i++){(l+=1)>12&&(l=1,n+=1),o[1]=n%4==0&&n/100!=0||n%100==0&&n%400==0?29:28;let t=o[l-1];i==e-1&&(t=t-d<0?t:d),console.log("for days:",t),c+=t}return r?(t=t||parseInt(Date.now()/1e3))+24*c*3600:c},checkPlatform:()=>/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":"",checkWeixin:()=>!!/MicroMessenger/i.test(navigator.userAgent)}},65:function(t,e,r){"use strict";r.r(e);var o=r(34),n=r(35),l={head:()=>({title:"注册"}),data:()=>({submitData:{mobile:"",password:"",verify_code:"",invite_code:""},errMsg:{mobile:"",password:"",verify_code:""},checkMsg:{mobile:"请输入正确的手机号码",password:"请输入密码",verify_code:"请输入验证码"},submitBtn:{disabled:!1,loading:!1},inviteCodeDisabled:!1}),methods:{...n.a,navBack(){this.$router.go(-1)},checkField(){let data=this.submitData,t=0;return""==data.mobile?(this.errMsg.mobile=this.checkMsg.mobile,t++):this.errMsg.mobile="",""==data.password?(this.errMsg.password=this.checkMsg.password,t++):this.errMsg.password="",!!t},async onSubmit(){if(this.checkField())return;let data=this.submitData;data.platform=n.a.checkPlatform()||"invite",data.device="",data.auth_type="h5",data.user_type=1,console.log("/onSubmit data:",data),this.submitBtn.disabled=!0,this.submitBtn.loading=!0;try{let t=await o.a.authLogin(data);if(console.log("/onSubmit ret:",t),0!==t.code)throw new Error(t.message);this.$toast.success("注册成功"),setTimeout(()=>{this.$router.replace("/download/app?isJoin=1")},2e3)}catch(t){this.$toast.fail(t.message||"注册失败，稍后重试")}this.submitBtn.disabled=!1,this.submitBtn.loading=!1}},created(){let t=this.$route.query.inviteCode||"";t&&(this.inviteCodeDisabled=!0,this.submitData.invite_code=t)}},d=r(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"注册"}}),t._ssrNode(" "),t._ssrNode('<div class="p-3">',"</div>",[r("van-cell-group",[r("van-field",{attrs:{required:"",clearable:"",label:"手机号",placeholder:"请输入手机号","error-message":t.errMsg.mobile},model:{value:t.submitData.mobile,callback:function(e){t.$set(t.submitData,"mobile",e)},expression:"submitData.mobile"}}),t._v(" "),r("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:"","error-message":t.errMsg.password},model:{value:t.submitData.password,callback:function(e){t.$set(t.submitData,"password",e)},expression:"submitData.password"}}),t._v(" "),r("van-field",{attrs:{center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码","error-message":t.errMsg.verify_code},model:{value:t.submitData.verify_code,callback:function(e){t.$set(t.submitData,"verify_code",e)},expression:"submitData.verify_code"}},[r("van-button",{attrs:{slot:"button",size:"small",type:"info"},slot:"button"},[t._v("发送验证码")])],1),t._v(" "),r("van-field",{attrs:{label:"邀请码",disabled:t.inviteCodeDisabled},model:{value:t.submitData.invite_code,callback:function(e){t.$set(t.submitData,"invite_code",e)},expression:"submitData.invite_code"}})],1),t._ssrNode(" "),t._ssrNode('<div class="mt-4 p-4">',"</div>",[r("van-button",{attrs:{type:"info",block:"",size:"medium",disabled:t.submitBtn.disabled,loading:t.submitBtn.loading},on:{click:t.onSubmit}},[t._v("立即注册")])],1)],2)],2)}),[],!1,null,null,"5847a39c");e.default=component.exports}};