(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{322:function(e,t,r){"use strict";r(80),r(38),r(27),r(17),r(63);var n=r(47),o=(r(28),r(119));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={authLogin:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/auth/register",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInfo:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/data/infoApp",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserMsgList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},userMsgRead:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressUpdate:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressDelete:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/delete",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cartItems:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},cartItemPlus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/plus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartItemMinus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/minus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartClear:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/clear"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},getCategorys:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/categorys",{status:1}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getGoodsList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/list",l({},data,{status:1})));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInviteCode:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/getCode"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cancelOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/cancel",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},finishOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/finish",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/detail",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrderList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createPayment:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/payment/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},alipaySumbit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/alipay/wapPay",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getInviteList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getWithdrawList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},withdrawApply:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/apply",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getProfitList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/profit/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}}},323:function(e,t,r){"use strict";r(81),r(82),r(17);var n=r(194),o=r.n(n);t.a={formatPrice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(e/100).toFixed(2)},unLimitTreeLevel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[],n=0,o=function e(t,n,o){for(var i=0;i<t.length;i++){var c=t[i];if(c.pid==n){c.level=o,c.html="";for(var l=0;l<o;l++)c.html+=" -- ";r.push(c),e(t,c.id,o+1)}}};return o(e,t,n),r},getTimestamp:function(e){var t=new Date(e);return parseInt(t.getTime()/1e3)},dateFormat:function(e,t){t=t||"YYYY-MM-DD HH:mm";var r=null;return r=e?new Date(1e3*e):new Date,o()(r).format(t)},dateDisplay:function(e){var t=parseInt(Date.now()/1e3)-e;if(t<60)return t+"秒前";if(t>=60&&t<3600)return parseInt(t/60).toString()+"分钟前";if(t>=3600&&t<86400)return parseInt(t/3600).toString()+"小时前";if(t>=86400&&t<2592e3)return parseInt(t/3600/24).toString()+"天前";var r=new Date(1e3*e);return o()(r).format("YYYY-MM-DD HH:mm")},monthPlus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(e,"YYYY")),c=parseInt(this.dateFormat(e,"MM")),l=parseInt(this.dateFormat(e,"DD"));n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var d=0,f=n[c-1]-l;d+=f;for(var i=0;i<t;i++){(c+=1)>12&&(c=1,o+=1),n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var v=n[c-1];i==t-1&&(v=v-l<0?v:l),console.log("for days:",v),d+=v}return r?(e=e||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:function(){return/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":""},checkWeixin:function(){return!!/MicroMessenger/i.test(navigator.userAgent)}}},324:function(e,t,r){var map={"./af":195,"./af.js":195,"./ar":196,"./ar-dz":197,"./ar-dz.js":197,"./ar-kw":198,"./ar-kw.js":198,"./ar-ly":199,"./ar-ly.js":199,"./ar-ma":200,"./ar-ma.js":200,"./ar-sa":201,"./ar-sa.js":201,"./ar-tn":202,"./ar-tn.js":202,"./ar.js":196,"./az":203,"./az.js":203,"./be":204,"./be.js":204,"./bg":205,"./bg.js":205,"./bm":206,"./bm.js":206,"./bn":207,"./bn.js":207,"./bo":208,"./bo.js":208,"./br":209,"./br.js":209,"./bs":210,"./bs.js":210,"./ca":211,"./ca.js":211,"./cs":212,"./cs.js":212,"./cv":213,"./cv.js":213,"./cy":214,"./cy.js":214,"./da":215,"./da.js":215,"./de":216,"./de-at":217,"./de-at.js":217,"./de-ch":218,"./de-ch.js":218,"./de.js":216,"./dv":219,"./dv.js":219,"./el":220,"./el.js":220,"./en-SG":221,"./en-SG.js":221,"./en-au":222,"./en-au.js":222,"./en-ca":223,"./en-ca.js":223,"./en-gb":224,"./en-gb.js":224,"./en-ie":225,"./en-ie.js":225,"./en-il":226,"./en-il.js":226,"./en-nz":227,"./en-nz.js":227,"./eo":228,"./eo.js":228,"./es":229,"./es-do":230,"./es-do.js":230,"./es-us":231,"./es-us.js":231,"./es.js":229,"./et":232,"./et.js":232,"./eu":233,"./eu.js":233,"./fa":234,"./fa.js":234,"./fi":235,"./fi.js":235,"./fo":236,"./fo.js":236,"./fr":237,"./fr-ca":238,"./fr-ca.js":238,"./fr-ch":239,"./fr-ch.js":239,"./fr.js":237,"./fy":240,"./fy.js":240,"./ga":241,"./ga.js":241,"./gd":242,"./gd.js":242,"./gl":243,"./gl.js":243,"./gom-latn":244,"./gom-latn.js":244,"./gu":245,"./gu.js":245,"./he":246,"./he.js":246,"./hi":247,"./hi.js":247,"./hr":248,"./hr.js":248,"./hu":249,"./hu.js":249,"./hy-am":250,"./hy-am.js":250,"./id":251,"./id.js":251,"./is":252,"./is.js":252,"./it":253,"./it-ch":254,"./it-ch.js":254,"./it.js":253,"./ja":255,"./ja.js":255,"./jv":256,"./jv.js":256,"./ka":257,"./ka.js":257,"./kk":258,"./kk.js":258,"./km":259,"./km.js":259,"./kn":260,"./kn.js":260,"./ko":261,"./ko.js":261,"./ku":262,"./ku.js":262,"./ky":263,"./ky.js":263,"./lb":264,"./lb.js":264,"./lo":265,"./lo.js":265,"./lt":266,"./lt.js":266,"./lv":267,"./lv.js":267,"./me":268,"./me.js":268,"./mi":269,"./mi.js":269,"./mk":270,"./mk.js":270,"./ml":271,"./ml.js":271,"./mn":272,"./mn.js":272,"./mr":273,"./mr.js":273,"./ms":274,"./ms-my":275,"./ms-my.js":275,"./ms.js":274,"./mt":276,"./mt.js":276,"./my":277,"./my.js":277,"./nb":278,"./nb.js":278,"./ne":279,"./ne.js":279,"./nl":280,"./nl-be":281,"./nl-be.js":281,"./nl.js":280,"./nn":282,"./nn.js":282,"./pa-in":283,"./pa-in.js":283,"./pl":284,"./pl.js":284,"./pt":285,"./pt-br":286,"./pt-br.js":286,"./pt.js":285,"./ro":287,"./ro.js":287,"./ru":288,"./ru.js":288,"./sd":289,"./sd.js":289,"./se":290,"./se.js":290,"./si":291,"./si.js":291,"./sk":292,"./sk.js":292,"./sl":293,"./sl.js":293,"./sq":294,"./sq.js":294,"./sr":295,"./sr-cyrl":296,"./sr-cyrl.js":296,"./sr.js":295,"./ss":297,"./ss.js":297,"./sv":298,"./sv.js":298,"./sw":299,"./sw.js":299,"./ta":300,"./ta.js":300,"./te":301,"./te.js":301,"./tet":302,"./tet.js":302,"./tg":303,"./tg.js":303,"./th":304,"./th.js":304,"./tl-ph":305,"./tl-ph.js":305,"./tlh":306,"./tlh.js":306,"./tr":307,"./tr.js":307,"./tzl":308,"./tzl.js":308,"./tzm":309,"./tzm-latn":310,"./tzm-latn.js":310,"./tzm.js":309,"./ug-cn":311,"./ug-cn.js":311,"./uk":312,"./uk.js":312,"./ur":313,"./ur.js":313,"./uz":314,"./uz-latn":315,"./uz-latn.js":315,"./uz.js":314,"./vi":316,"./vi.js":316,"./x-pseudo":317,"./x-pseudo.js":317,"./yo":318,"./yo.js":318,"./zh-cn":319,"./zh-cn.js":319,"./zh-hk":320,"./zh-hk.js":320,"./zh-tw":321,"./zh-tw.js":321};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=324},327:function(e,t,r){"use strict";t.a={cancel_reasons:["我不想买了","信息填错了","卖家缺货","其他原因"]}},328:function(e,t,r){var content=r(335);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("4d6c786c",content,!0,{sourceMap:!1})},334:function(e,t,r){"use strict";var n=r(328);r.n(n).a},335:function(e,t,r){(e.exports=r(30)(!1)).push([e.i,".van-card__thumb{height:60px!important}.van-card__content{min-height:60px!important}",""])},344:function(e,t,r){"use strict";r.r(t);r(80),r(38),r(27),r(17),r(63),r(28);var n=r(47),o=r(322),c=r(323),l=r(327);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={head:function(){return{title:"订单详情"}},data:function(){return{isLoading:!1,order:{},expressData:{},addressData:{},orderCancel:{show:!1,reason:"",id:0},orderCancelReasons:l.a.cancel_reasons}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},c.a,{navBack:function(){console.log("/navBack:",this.$store.state.isApp),this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},onRefresh:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.order={},e.next=3,regeneratorRuntime.awrap(this.getDetail(this.$route.query.id));case 3:this.isLoading=!1;case 4:case"end":return e.stop()}}),null,this)},getDetail:function(e){var t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(o.a.getOrder({id:e}));case 3:if(0!=(t=r.sent).code){r.next=8;break}this.order=t.data,r.next=9;break;case 8:throw new Error(t.message);case 9:r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),this.$toast.fail(r.t0.message||r.t0);case 14:case"end":return r.stop()}}),null,this,[[0,11]])},goToPayment:function(e){var t="/payment?orderId="+e.id;this.$store.state.isApp&&(t+="&from=appTab"),this.$router.push(t)},orderCancelShow:function(e){this.orderCancel.show=!0,this.orderCancel.id=e.id,this.orderCancel.reason=""},orderCancelClose:function(){this.orderCancel.show=!1},orderCancelSubmit:function(){var e,t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return(e={}).id=this.orderCancel.id,e.cancel_reason=this.orderCancel.reason,console.log("/orderCancelSubmit submitData:",JSON.stringify(e,null,2)),r.prev=4,r.next=7,regeneratorRuntime.awrap(o.a.cancelOrder(e));case 7:if(t=r.sent,console.log("/orderCancelSubmit cancelRet:",JSON.stringify(t,null,2)),0!=t.code){r.next=15;break}this.$toast.success("取消订单成功"),this.onRefresh(),this.orderCancel.show=!1,r.next=16;break;case 15:throw new Error(t.message);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(4),this.$toast.fail(r.t0.message||"取消失败");case 21:case"end":return r.stop()}}),null,this,[[4,18]])},orderFinish:function(e){var data,t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(this.$dialog.confirm({title:"确认？",message:"确认收货完成该订单"}));case 3:if("confirm"===r.sent){r.next=6;break}return r.abrupt("return");case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),console.log("/orderComplete cancel"),r.abrupt("return");case 12:return data={id:e.id},r.prev=13,r.next=16,regeneratorRuntime.awrap(o.a.finishOrder(data));case 16:if(t=r.sent,console.log("/orderComplete ret:",t),0!==t.code){r.next=23;break}this.$toast.success("确认订单完成成功"),this.onRefresh(),r.next=24;break;case 23:throw new Error(t.message);case 24:r.next=29;break;case 26:r.prev=26,r.t1=r.catch(13),this.$toast.fail(r.t1.message||"确认订单完成失败");case 29:case"end":return r.stop()}}),null,this,[[0,8],[13,26]])}}),created:function(){var address;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.getDetail(this.$route.query.id));case 2:this.expressData=this.order.express_info?JSON.parse(this.order.express_info):{},(address=this.order.address?JSON.parse(this.order.address):{}).addressDetail=address.province+"/"+address.city+"/"+address.county+" "+address.address,this.addressData=address;case 6:case"end":return e.stop()}}),null,this)}},v=(r(334),r(29)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("van-nav-bar",{attrs:{title:"订单详情","left-text":"","left-arrow":""},on:{"click-left":e.navBack}}),e._v(" "),r("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[e._l(e.order.items,(function(t){return r("van-card",{key:t.id,attrs:{price:(t.price/100).toFixed(2),desc:t.desc,num:t.num}},[r("template",{slot:"title"},[r("span",{staticClass:"text-2xl text-black-50"},[e._v(e._s(t.name))])]),e._v(" "),r("template",{slot:"thumb"},[r("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.thumb||t.cover,alt:""}})])],2)})),e._v(" "),r("van-cell",{attrs:{title:"订单编号",value:e.order.order_no}}),e._v(" "),r("van-cell",{attrs:{title:"订单状态"}},[r("template",{slot:"default"},[0==e.order.status?r("span",[e._v("待付款")]):e._e(),e._v(" "),1==e.order.status?r("span",[e._v("待发货")]):e._e(),e._v(" "),2==e.order.status?r("span",[e._v("待收货")]):e._e(),e._v(" "),3==e.order.status?r("span",[e._v("已完成")]):e._e(),e._v(" "),-1==e.order.status?r("span",[e._v("已取消")]):e._e()])],2),e._v(" "),r("van-cell",{attrs:{title:"创建时间"}},[r("template",{slot:"default"},[e._v(e._s(e.dateFormat(e.order.create_time)))])],2),e._v(" "),r("van-cell",{attrs:{title:"订单金额"}},[r("template",{slot:"default"},[r("span",{staticClass:"text-red-700"},[e._v("￥"+e._s((e.order.total/100).toFixed(2)))])])],2),e._v(" "),r("van-cell-group",{attrs:{title:"收货地址"}},[r("van-cell",{attrs:{title:e.addressData.name,value:e.addressData.tel,label:e.addressData.addressDetail}})],1),e._v(" "),2==e.order.status?r("van-cell-group",{attrs:{title:"物流信息"}},[r("van-cell",{attrs:{title:"物流公司",value:e.expressData.company||""}}),e._v(" "),r("van-cell",{attrs:{title:"物流编号",value:e.expressData.no||""}})],1):e._e(),e._v(" "),r("div",{staticClass:"p-4 text-right"},[0==e.order.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:function(t){return e.orderCancelShow(e.order)}}},[e._v("取消")]):e._e(),e._v(" "),0==e.order.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"danger",size:"small"},on:{click:function(t){return e.goToPayment(e.order)}}},[e._v("支付")]):e._e(),e._v(" "),2==e.order.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"warning",size:"small"},on:{click:function(t){return e.orderFinish(e.order)}}},[e._v("确认收货")]):e._e()],1)],2),e._v(" "),r("van-action-sheet",{attrs:{title:"取消订单"},model:{value:e.orderCancel.show,callback:function(t){e.$set(e.orderCancel,"show",t)},expression:"orderCancel.show"}},[r("div",{staticClass:"p-4"},[r("div",{staticClass:"text-center text-xl"},[e._v("取消后无法恢复")]),e._v(" "),r("div",{staticClass:"text-2xl text-gray-600 mt-4"},[e._v("请选择取消理由")]),e._v(" "),r("div",{staticClass:"mt-4"},[r("van-radio-group",{model:{value:e.orderCancel.reason,callback:function(t){e.$set(e.orderCancel,"reason",t)},expression:"orderCancel.reason"}},[r("van-cell-group",e._l(e.orderCancelReasons,(function(e){return r("van-cell",{key:e,attrs:{title:e,clickable:""}},[r("van-radio",{attrs:{slot:"right-icon",name:e,"checked-color":"#07c160"},slot:"right-icon"})],1)})),1)],1)],1),e._v(" "),r("div",{},[r("van-goods-action",{staticClass:"p-4",staticStyle:{position:"unset"}},[r("van-goods-action-button",{attrs:{type:"warning",text:"暂不取消"},on:{click:e.orderCancelClose}}),e._v(" "),r("van-goods-action-button",{attrs:{type:"danger",text:"确认取消"},on:{click:e.orderCancelSubmit}})],1)],1)])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);