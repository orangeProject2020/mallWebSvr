(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{322:function(e,t,r){"use strict";r(81),r(82),r(17);var n=r(194),o=r.n(n);t.a={formatPrice:function(e){return(e/100).toFixed(2)},unLimitTreeLevel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[],n=0,o=function e(t,n,o){for(var i=0;i<t.length;i++){var c=t[i];if(c.pid==n){c.level=o,c.html="";for(var l=0;l<o;l++)c.html+=" -- ";r.push(c),e(t,c.id,o+1)}}};return o(e,t,n),r},getTimestamp:function(e){var t=new Date(e);return parseInt(t.getTime()/1e3)},dateFormat:function(e,t){t=t||"YYYY-MM-DD HH:mm";var r=null;return r=e?new Date(1e3*e):new Date,o()(r).format(t)},dateDisplay:function(e){var t=parseInt(Date.now()/1e3)-e;if(t<60)return t+"秒前";if(t>=60&&t<3600)return parseInt(t/60).toString()+"分钟前";if(t>=3600&&t<86400)return parseInt(t/3600).toString()+"小时前";if(t>=86400&&t<2592e3)return parseInt(t/3600/24).toString()+"天前";var r=new Date(1e3*e);return o()(r).format("YYYY-MM-DD HH:mm")},monthPlus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(e,"YYYY")),c=parseInt(this.dateFormat(e,"MM")),l=parseInt(this.dateFormat(e,"DD"));n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var h=0,m=n[c-1]-l;h+=m;for(var i=0;i<t;i++){(c+=1)>12&&(c=1,o+=1),n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var d=n[c-1];i==t-1&&(d=d-l<0?d:l),console.log("for days:",d),h+=d}return r?(e=e||parseInt(Date.now()/1e3))+24*h*3600:h},checkPlatform:function(){return/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":""},checkWeixin:function(){return!!/MicroMessenger/i.test(navigator.userAgent)}}},323:function(e,t,r){"use strict";r(80),r(38),r(27),r(17),r(63);var n=r(47),o=(r(28),r(119));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={authLogin:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/auth/register",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInfo:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/data/infoApp",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cartItems:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},cartItemPlus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/plus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartItemMinus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/minus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartClear:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/clear"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},getUserInviteCode:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/getCode"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cancelOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/cancel",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/detail",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrderList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createPayment:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/payment/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},alipaySumbit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/alipay/wapPay",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getInviteList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}}},324:function(e,t,r){var map={"./af":195,"./af.js":195,"./ar":196,"./ar-dz":197,"./ar-dz.js":197,"./ar-kw":198,"./ar-kw.js":198,"./ar-ly":199,"./ar-ly.js":199,"./ar-ma":200,"./ar-ma.js":200,"./ar-sa":201,"./ar-sa.js":201,"./ar-tn":202,"./ar-tn.js":202,"./ar.js":196,"./az":203,"./az.js":203,"./be":204,"./be.js":204,"./bg":205,"./bg.js":205,"./bm":206,"./bm.js":206,"./bn":207,"./bn.js":207,"./bo":208,"./bo.js":208,"./br":209,"./br.js":209,"./bs":210,"./bs.js":210,"./ca":211,"./ca.js":211,"./cs":212,"./cs.js":212,"./cv":213,"./cv.js":213,"./cy":214,"./cy.js":214,"./da":215,"./da.js":215,"./de":216,"./de-at":217,"./de-at.js":217,"./de-ch":218,"./de-ch.js":218,"./de.js":216,"./dv":219,"./dv.js":219,"./el":220,"./el.js":220,"./en-SG":221,"./en-SG.js":221,"./en-au":222,"./en-au.js":222,"./en-ca":223,"./en-ca.js":223,"./en-gb":224,"./en-gb.js":224,"./en-ie":225,"./en-ie.js":225,"./en-il":226,"./en-il.js":226,"./en-nz":227,"./en-nz.js":227,"./eo":228,"./eo.js":228,"./es":229,"./es-do":230,"./es-do.js":230,"./es-us":231,"./es-us.js":231,"./es.js":229,"./et":232,"./et.js":232,"./eu":233,"./eu.js":233,"./fa":234,"./fa.js":234,"./fi":235,"./fi.js":235,"./fo":236,"./fo.js":236,"./fr":237,"./fr-ca":238,"./fr-ca.js":238,"./fr-ch":239,"./fr-ch.js":239,"./fr.js":237,"./fy":240,"./fy.js":240,"./ga":241,"./ga.js":241,"./gd":242,"./gd.js":242,"./gl":243,"./gl.js":243,"./gom-latn":244,"./gom-latn.js":244,"./gu":245,"./gu.js":245,"./he":246,"./he.js":246,"./hi":247,"./hi.js":247,"./hr":248,"./hr.js":248,"./hu":249,"./hu.js":249,"./hy-am":250,"./hy-am.js":250,"./id":251,"./id.js":251,"./is":252,"./is.js":252,"./it":253,"./it-ch":254,"./it-ch.js":254,"./it.js":253,"./ja":255,"./ja.js":255,"./jv":256,"./jv.js":256,"./ka":257,"./ka.js":257,"./kk":258,"./kk.js":258,"./km":259,"./km.js":259,"./kn":260,"./kn.js":260,"./ko":261,"./ko.js":261,"./ku":262,"./ku.js":262,"./ky":263,"./ky.js":263,"./lb":264,"./lb.js":264,"./lo":265,"./lo.js":265,"./lt":266,"./lt.js":266,"./lv":267,"./lv.js":267,"./me":268,"./me.js":268,"./mi":269,"./mi.js":269,"./mk":270,"./mk.js":270,"./ml":271,"./ml.js":271,"./mn":272,"./mn.js":272,"./mr":273,"./mr.js":273,"./ms":274,"./ms-my":275,"./ms-my.js":275,"./ms.js":274,"./mt":276,"./mt.js":276,"./my":277,"./my.js":277,"./nb":278,"./nb.js":278,"./ne":279,"./ne.js":279,"./nl":280,"./nl-be":281,"./nl-be.js":281,"./nl.js":280,"./nn":282,"./nn.js":282,"./pa-in":283,"./pa-in.js":283,"./pl":284,"./pl.js":284,"./pt":285,"./pt-br":286,"./pt-br.js":286,"./pt.js":285,"./ro":287,"./ro.js":287,"./ru":288,"./ru.js":288,"./sd":289,"./sd.js":289,"./se":290,"./se.js":290,"./si":291,"./si.js":291,"./sk":292,"./sk.js":292,"./sl":293,"./sl.js":293,"./sq":294,"./sq.js":294,"./sr":295,"./sr-cyrl":296,"./sr-cyrl.js":296,"./sr.js":295,"./ss":297,"./ss.js":297,"./sv":298,"./sv.js":298,"./sw":299,"./sw.js":299,"./ta":300,"./ta.js":300,"./te":301,"./te.js":301,"./tet":302,"./tet.js":302,"./tg":303,"./tg.js":303,"./th":304,"./th.js":304,"./tl-ph":305,"./tl-ph.js":305,"./tlh":306,"./tlh.js":306,"./tr":307,"./tr.js":307,"./tzl":308,"./tzl.js":308,"./tzm":309,"./tzm-latn":310,"./tzm-latn.js":310,"./tzm.js":309,"./ug-cn":311,"./ug-cn.js":311,"./uk":312,"./uk.js":312,"./ur":313,"./ur.js":313,"./uz":314,"./uz-latn":315,"./uz-latn.js":315,"./uz.js":314,"./vi":316,"./vi.js":316,"./x-pseudo":317,"./x-pseudo.js":317,"./yo":318,"./yo.js":318,"./zh-cn":319,"./zh-cn.js":319,"./zh-hk":320,"./zh-hk.js":320,"./zh-tw":321,"./zh-tw.js":321};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=324},343:function(e,t,r){"use strict";r.r(t);r(80),r(38),r(27),r(17),r(63),r(120),r(64),r(83),r(28);var n=r(47),o=r(322),c=r(323);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={head:function(){return{title:"支付"}},data:function(){return{navBarHide:!1,leftArrow:!1,total:0,amount:0,score:0,submitLoading:!1,submitDisabled:!0,orders:[],orderIds:[],payType:1,payTypeText:"",payTypeShow:!1,payTypeActions:[{name:"线下支付"},{name:"在线支付",color:"#07c160"}],payMethod:0,outTradeNo:"",paymentId:0}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},o.a,{onSubmit:function(){var e,t,r,n;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(this.submitLoading=!0,e=this.orderIds,t={order_ids:e,total:this.total,amount:this.amount,score:this.score,pay_type:this.payType,pay_method:this.payMethod,balance:0,coupon:0,user_coupon_id:0},!(this.payType>0&&0==this.payMethod)){o.next=6;break}return this.$toast.fail("请选择支付方式"),o.abrupt("return");case 6:return console.log("/onSubmit data",t),o.prev=7,o.next=10,regeneratorRuntime.awrap(c.a.createPayment(t));case 10:if(0!=(r=o.sent).code){o.next=29;break}if(console.log("/onSubmit paymentData:",r.data),1!=(n=r.data).status){o.next=18;break}this.$route.replace("/order/list?status=1"),o.next=27;break;case 18:if(this.outTradeNo=n.out_trade_no,this.paymentId=n.id,console.log("/onSubmit outTradeNo",this.outTradeNo),console.log("/onSubmit paymentId",this.paymentId),1!=this.payMethod){o.next=25;break}o.next=27;break;case 25:return o.next=27,regeneratorRuntime.awrap(this.alipaySubmit());case 27:o.next=30;break;case 29:throw new Error(r.message);case 30:o.next=36;break;case 32:o.prev=32,o.t0=o.catch(7),console.error(o.t0),this.$toast.fail(o.t0.message||o.t0);case 36:this.submitLoading=!1;case 37:case"end":return o.stop()}}),null,this,[[7,32]])},alipaySubmit:function(){var e,t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(c.a.alipaySumbit({out_trade_no:this.outTradeNo,subject:"支付金额: ￥"+(this.amount/100).toFixed(2),amount:this.amount}));case 3:if(e=r.sent,console.log("/alipaySubmit ret:",JSON.stringify(e,null,2)),0!==e.code){r.next=11;break}t=e.data.action,console.log("/alipaySubmit action:",t),location.href=t,r.next=12;break;case 11:throw new Error(e.message||"调用支付宝失败");case 12:r.next=19;break;case 14:return r.prev=14,r.t0=r.catch(0),console.error(r.t0.message),this.$toast.fail(r.t0.message||"调用支付宝失败"),r.abrupt("return",!1);case 19:case"end":return r.stop()}}),null,this,[[0,14]])},wxpaySubmit:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))},navBack:function(){this.$router.go(-1)},navHome:function(){this.$router.replace("/list")},payTypeChoose:function(){},payTypeSelect:function(e,t){console.log(e),console.log(t),this.payTypeText=e.name,this.payType=t,0==t&&(this.payMethod=0),this.payTypeShow=!1,this.checkSubmitBtn()},payMethodSelect:function(e){this.payMethod=e,this.checkSubmitBtn()},checkSubmitBtn:function(){0==this.payType||1==this.payType&&this.payMethod>0?this.submitDisabled=!1:this.submitDisabled=!0},failMessage:function(e){var t=this;this.$dialog.alert({title:"提示",message:e}).then((function(){t.navHome()}))}}),created:function(){var e,t,r,n,o,l,h,m=this;return regeneratorRuntime.async((function(d){for(;;)switch(d.prev=d.next){case 0:if("appTab"===this.$route.query.from&&(this.navBarHide=!0),0!==(e=(e=this.$route.query.orderIds||this.$route.query.orderId).split(",")).length){d.next=6;break}return this.failMessage("获取订单信息错误"),d.abrupt("return");case 6:this.orders=[],t=0;case 8:if(!(t<e.length)){d.next=30;break}return r=e[t],this.orderIds.push(r),d.prev=11,d.next=14,regeneratorRuntime.awrap(c.a.getOrder({id:r}));case 14:if(0!=(n=d.sent).code){d.next=19;break}this.orders.push(n.data),d.next=21;break;case 19:throw console.log(r,n.message),new Error("获取订单信息错误");case 21:d.next=27;break;case 23:return d.prev=23,d.t0=d.catch(11),this.failMessage("获取订单信息错误!"),d.abrupt("return");case 27:t++,d.next=8;break;case 30:console.log("/create orders",this.orders),o=0,l=0,h=0,this.orders.forEach((function(e){0!=e.status&&m.failMessage("已有订单处于不需要支付状态！"),o+=e.total,h+=e.score,l+=e.total-e.score})),this.total=o,this.amount=l,this.score=h;case 38:case"end":return d.stop()}}),null,this,[[11,23]])}},m=r(29),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.navBarHide?e._e():r("van-nav-bar",{attrs:{title:"支付","left-text":"","left-arrow":e.leftArrow},on:{"click-left":e.navBack,"click-right":e.navHome}},[r("van-icon",{attrs:{slot:"right",name:"home-o",size:"2rem"},slot:"right"})],1),e._v(" "),r("div",{staticClass:"p-8 text-center"},[r("div",{staticClass:"text-xl text-gray-500"},[e._v("需支付金额")]),e._v(" "),r("div",{staticClass:"text-6xl text-red-600 mt-4 mb-8"},[e._v("￥ "+e._s((e.amount/100).toFixed(2)))])]),e._v(" "),r("van-cell",{attrs:{title:"选择支付方式","is-link":"","arrow-direction":"down",value:e.payTypeText},on:{click:e.payTypeChoose}}),e._v(" "),1==e.payType?r("van-radio-group",{model:{value:e.payMethod,callback:function(t){e.payMethod=t},expression:"payMethod"}},[r("van-cell-group",[r("van-cell",{attrs:{title:"微信支付",clickable:""},on:{click:function(t){return e.payMethodSelect(1)}}},[r("van-radio",{attrs:{slot:"right-icon",name:1,"checked-color":"#07c160"},slot:"right-icon"})],1),e._v(" "),r("van-cell",{attrs:{title:"支付宝",clickable:""},on:{click:function(t){return e.payMethodSelect(2)}}},[r("van-radio",{attrs:{slot:"right-icon",name:2},slot:"right-icon"})],1)],1)],1):e._e(),e._v(" "),r("van-action-sheet",{attrs:{actions:e.payTypeActions,title:"选择支付方式"},on:{select:e.payTypeSelect},model:{value:e.payTypeShow,callback:function(t){e.payTypeShow=t},expression:"payTypeShow"}}),e._v(" "),r("van-submit-bar",{attrs:{price:e.total,"button-text":"确认支付",loading:e.submitLoading,disabled:e.submitDisabled},on:{submit:e.onSubmit}},[r("span",{attrs:{slot:"tip"},slot:"tip"})])],1)}),[],!1,null,null,null);t.default=component.exports}}]);