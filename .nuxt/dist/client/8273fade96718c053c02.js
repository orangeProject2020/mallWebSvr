(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{195:function(e,t,r){"use strict";r(80),r(38),r(27),r(17),r(63);var n=r(47),o=(r(28),r(119));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={upload:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/upload/base64",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},authCheck:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/auth/check",{}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},authLogin:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/auth/register",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getVerifyCode:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/sms/sendVerifyCode",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInfo:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/data/infoApp",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserNoReadMsgCount:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/noReadCount",{}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserMsgList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},userMsgRead:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressUpdate:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressDelete:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/delete",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cartItems:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},cartItemPlus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/plus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartItemMinus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/minus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartClear:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/clear"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},getCategorys:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/categorys",{status:1}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getGoodsList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/list",l({},data,{status:1})));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInviteCode:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/getCode"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserAssets:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/user/infoAssets"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cancelOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/cancel",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},finishOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/finish",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/detail",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrderList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createPayment:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/payment/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},alipaySumbit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/alipay/wapPay",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},wxpaySumbit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/wxpay/h5Pay",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getInviteList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getWithdrawList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},withdrawApply:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/apply",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getProfitList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/profit/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getAfterInfo:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/after/info",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getAfterList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/after/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},afterApplySubmit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/after/apply",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}}},196:function(e,t,r){"use strict";r(81),r(82),r(17);var n=r(194),o=r.n(n);t.a={formatPrice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(e/100).toFixed(2)},unLimitTreeLevel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[],n=0,o=function e(t,n,o){for(var i=0;i<t.length;i++){var c=t[i];if(c.pid==n){c.level=o,c.html="";for(var l=0;l<o;l++)c.html+=" -- ";r.push(c),e(t,c.id,o+1)}}};return o(e,t,n),r},getTimestamp:function(e){var t=new Date(e);return parseInt(t.getTime()/1e3)},dateFormat:function(e,t){t=t||"YYYY-MM-DD HH:mm";var r=null;return r=e?new Date(1e3*e):new Date,o()(r).format(t)},dateDisplay:function(e){var t=parseInt(Date.now()/1e3)-e;if(t<60)return t+"秒前";if(t>=60&&t<3600)return parseInt(t/60).toString()+"分钟前";if(t>=3600&&t<86400)return parseInt(t/3600).toString()+"小时前";if(t>=86400&&t<2592e3)return parseInt(t/3600/24).toString()+"天前";var r=new Date(1e3*e);return o()(r).format("YYYY-MM-DD HH:mm")},monthPlus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(e,"YYYY")),c=parseInt(this.dateFormat(e,"MM")),l=parseInt(this.dateFormat(e,"DD"));n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var d=0,f=n[c-1]-l;d+=f;for(var i=0;i<t;i++){(c+=1)>12&&(c=1,o+=1),n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var v=n[c-1];i==t-1&&(v=v-l<0?v:l),console.log("for days:",v),d+=v}return r?(e=e||parseInt(Date.now()/1e3))+24*d*3600:d},checkPlatform:function(){return/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":""},checkWeixin:function(){return!!/MicroMessenger/i.test(navigator.userAgent)}}},324:function(e,t,r){var map={"./af":197,"./af.js":197,"./ar":198,"./ar-dz":199,"./ar-dz.js":199,"./ar-kw":200,"./ar-kw.js":200,"./ar-ly":201,"./ar-ly.js":201,"./ar-ma":202,"./ar-ma.js":202,"./ar-sa":203,"./ar-sa.js":203,"./ar-tn":204,"./ar-tn.js":204,"./ar.js":198,"./az":205,"./az.js":205,"./be":206,"./be.js":206,"./bg":207,"./bg.js":207,"./bm":208,"./bm.js":208,"./bn":209,"./bn.js":209,"./bo":210,"./bo.js":210,"./br":211,"./br.js":211,"./bs":212,"./bs.js":212,"./ca":213,"./ca.js":213,"./cs":214,"./cs.js":214,"./cv":215,"./cv.js":215,"./cy":216,"./cy.js":216,"./da":217,"./da.js":217,"./de":218,"./de-at":219,"./de-at.js":219,"./de-ch":220,"./de-ch.js":220,"./de.js":218,"./dv":221,"./dv.js":221,"./el":222,"./el.js":222,"./en-SG":223,"./en-SG.js":223,"./en-au":224,"./en-au.js":224,"./en-ca":225,"./en-ca.js":225,"./en-gb":226,"./en-gb.js":226,"./en-ie":227,"./en-ie.js":227,"./en-il":228,"./en-il.js":228,"./en-nz":229,"./en-nz.js":229,"./eo":230,"./eo.js":230,"./es":231,"./es-do":232,"./es-do.js":232,"./es-us":233,"./es-us.js":233,"./es.js":231,"./et":234,"./et.js":234,"./eu":235,"./eu.js":235,"./fa":236,"./fa.js":236,"./fi":237,"./fi.js":237,"./fo":238,"./fo.js":238,"./fr":239,"./fr-ca":240,"./fr-ca.js":240,"./fr-ch":241,"./fr-ch.js":241,"./fr.js":239,"./fy":242,"./fy.js":242,"./ga":243,"./ga.js":243,"./gd":244,"./gd.js":244,"./gl":245,"./gl.js":245,"./gom-latn":246,"./gom-latn.js":246,"./gu":247,"./gu.js":247,"./he":248,"./he.js":248,"./hi":249,"./hi.js":249,"./hr":250,"./hr.js":250,"./hu":251,"./hu.js":251,"./hy-am":252,"./hy-am.js":252,"./id":253,"./id.js":253,"./is":254,"./is.js":254,"./it":255,"./it-ch":256,"./it-ch.js":256,"./it.js":255,"./ja":257,"./ja.js":257,"./jv":258,"./jv.js":258,"./ka":259,"./ka.js":259,"./kk":260,"./kk.js":260,"./km":261,"./km.js":261,"./kn":262,"./kn.js":262,"./ko":263,"./ko.js":263,"./ku":264,"./ku.js":264,"./ky":265,"./ky.js":265,"./lb":266,"./lb.js":266,"./lo":267,"./lo.js":267,"./lt":268,"./lt.js":268,"./lv":269,"./lv.js":269,"./me":270,"./me.js":270,"./mi":271,"./mi.js":271,"./mk":272,"./mk.js":272,"./ml":273,"./ml.js":273,"./mn":274,"./mn.js":274,"./mr":275,"./mr.js":275,"./ms":276,"./ms-my":277,"./ms-my.js":277,"./ms.js":276,"./mt":278,"./mt.js":278,"./my":279,"./my.js":279,"./nb":280,"./nb.js":280,"./ne":281,"./ne.js":281,"./nl":282,"./nl-be":283,"./nl-be.js":283,"./nl.js":282,"./nn":284,"./nn.js":284,"./pa-in":285,"./pa-in.js":285,"./pl":286,"./pl.js":286,"./pt":287,"./pt-br":288,"./pt-br.js":288,"./pt.js":287,"./ro":289,"./ro.js":289,"./ru":290,"./ru.js":290,"./sd":291,"./sd.js":291,"./se":292,"./se.js":292,"./si":293,"./si.js":293,"./sk":294,"./sk.js":294,"./sl":295,"./sl.js":295,"./sq":296,"./sq.js":296,"./sr":297,"./sr-cyrl":298,"./sr-cyrl.js":298,"./sr.js":297,"./ss":299,"./ss.js":299,"./sv":300,"./sv.js":300,"./sw":301,"./sw.js":301,"./ta":302,"./ta.js":302,"./te":303,"./te.js":303,"./tet":304,"./tet.js":304,"./tg":305,"./tg.js":305,"./th":306,"./th.js":306,"./tl-ph":307,"./tl-ph.js":307,"./tlh":308,"./tlh.js":308,"./tr":309,"./tr.js":309,"./tzl":310,"./tzl.js":310,"./tzm":311,"./tzm-latn":312,"./tzm-latn.js":312,"./tzm.js":311,"./ug-cn":313,"./ug-cn.js":313,"./uk":314,"./uk.js":314,"./ur":315,"./ur.js":315,"./uz":316,"./uz-latn":317,"./uz-latn.js":317,"./uz.js":316,"./vi":318,"./vi.js":318,"./x-pseudo":319,"./x-pseudo.js":319,"./yo":320,"./yo.js":320,"./zh-cn":321,"./zh-cn.js":321,"./zh-hk":322,"./zh-hk.js":322,"./zh-tw":323,"./zh-tw.js":323};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=324},327:function(e,t,r){"use strict";t.a={cancel_reasons:["我不想买了","信息填错了","卖家缺货","其他原因"]}},329:function(e,t,r){var content=r(337);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("2e7a7468",content,!0,{sourceMap:!1})},336:function(e,t,r){"use strict";var n=r(329);r.n(n).a},337:function(e,t,r){(e.exports=r(30)(!1)).push([e.i,".van-card__thumb{height:60px!important}.van-card__content{min-height:60px!important}",""])},347:function(e,t,r){"use strict";r.r(t);r(80),r(38),r(27),r(17),r(63),r(28);var n=r(47),o=r(195),c=r(196),l=r(327);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={head:function(){return{title:"我的订单"}},data:function(){return{isLoading:!1,statusActive:0,listLoading:!1,listFinished:!1,listError:!1,orders:[],page:1,orderCancel:{show:!1,reason:"",id:0},orderCancelReasons:l.a.cancel_reasons}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},c.a,{navBack:function(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},navToAfter:function(e){this.$router.push("/after/apply?id="+e.id)},onRefresh:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,this.orders=[],this.page=1,this.listFinished=!1,this.listLoading=!0,e.next=7,regeneratorRuntime.awrap(this.listLoad());case 7:this.isLoading=!1;case 8:case"end":return e.stop()}}),null,this)},statusChange:function(e){var t=arguments;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.length>1&&void 0!==t[1]?t[1]:"",console.log(e),this.orders=[],this.page=1,this.listFinished=!1,this.$toast.loading({duration:0,forbidClick:!0,message:"加载中"}),this.statusActive=e,r.next=9,regeneratorRuntime.awrap(this.listLoad());case 9:this.$toast.clear();case 10:case"end":return r.stop()}}),null,this)},listLoad:function(){var data,e,t,r=this;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.listLoading=!0,(data={}).page=this.page,data.limit=5,data.status=this.statusActive,console.log("/listLoad data",data),n.prev=6,n.next=9,regeneratorRuntime.awrap(o.a.getOrderList(data));case 9:if(e=n.sent,console.log("listLoad ret:",JSON.stringify(e)),0!=e.code){n.next=16;break}(t=e.data.rows).length?(t.forEach((function(e){r.orderAfterSet(e),r.orders.push(e)})),this.page+=1):this.listFinished=!0,n.next=17;break;case 16:throw new Error(e.message);case 17:n.next=24;break;case 19:n.prev=19,n.t0=n.catch(6),console.error("/listLoad err:",n.t0),this.$toast.fail(n.t0.message||n.t0),this.listError=!0;case 24:console.log("/listLoad orders",this.orders),this.listLoading=!1;case 26:case"end":return n.stop()}}),null,this,[[6,19]])},orderAfterSet:function(e){var t=e.status,r=parseInt(Date.now()/1e3);e.items.forEach((function(e){if(3==t){if(3==t){var n=e.close_time+604800;e.afterApply=!(r>n)}else e.afterApply=!0;e.package_level>0&&(e.afterApply=!1)}else e.afterApply=!1}))},goToDetail:function(e){var t="/order/detail?id="+e.id;this.$router.push(t)},goToPayment:function(e){var t="/payment?orderId="+e.id;this.$router.push(t)},orderCancelShow:function(e){this.orderCancel.show=!0,this.orderCancel.id=e.id,this.orderCancel.reason=""},orderCancelClose:function(){this.orderCancel.show=!1},orderCancelSubmit:function(){var e,t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return(e={}).id=this.orderCancel.id,e.cancel_reason=this.orderCancel.reason,console.log("/orderCancelSubmit submitData:",JSON.stringify(e,null,2)),r.prev=4,r.next=7,regeneratorRuntime.awrap(o.a.cancelOrder(e));case 7:if(t=r.sent,console.log("/orderCancelSubmit cancelRet:",JSON.stringify(t,null,2)),0!=t.code){r.next=15;break}this.$toast.success("取消订单成功"),this.onRefresh(),this.orderCancel.show=!1,r.next=16;break;case 15:throw new Error(t.message);case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(4),this.$toast.fail(r.t0.message||"取消失败");case 21:case"end":return r.stop()}}),null,this,[[4,18]])},orderFinish:function(e){var data,t;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(this.$dialog.confirm({title:"确认？",message:"确认收货完成该订单"}));case 3:if("confirm"===r.sent){r.next=6;break}return r.abrupt("return");case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),console.log("/orderComplete cancel"),r.abrupt("return");case 12:return data={id:e.id},r.prev=13,r.next=16,regeneratorRuntime.awrap(o.a.finishOrder(data));case 16:if(t=r.sent,console.log("/orderComplete ret:",t),0!==t.code){r.next=23;break}this.$toast.success("确认订单完成成功"),this.statusChange(3),r.next=24;break;case 23:throw new Error(t.message);case 24:r.next=29;break;case 26:r.prev=26,r.t1=r.catch(13),this.$toast.fail(r.t1.message||"确认订单完成失败");case 29:case"end":return r.stop()}}),null,this,[[0,8],[13,26]])}}),created:function(){var e=this.$route.query.status||"0";console.log("/created status",e),this.statusChange(parseInt(e))}},v=(r(336),r(29)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("van-nav-bar",{attrs:{title:"订单列表","left-text":"","left-arrow":""},on:{"click-left":e.navBack}}),e._v(" "),r("van-tabs",{on:{click:e.statusChange},model:{value:e.statusActive,callback:function(t){e.statusActive=t},expression:"statusActive"}},[r("van-tab",{attrs:{title:"待付款"}}),e._v(" "),r("van-tab",{attrs:{title:"待发货"}}),e._v(" "),r("van-tab",{attrs:{title:"待收货"}}),e._v(" "),r("van-tab",{attrs:{title:"已完成"}})],1),e._v(" "),r("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[r("div",{staticStyle:{"min-height":"400px"}},[r("van-list",{attrs:{finished:e.listFinished,"finished-text":"没有更多了",error:e.listError,"error-text":"请求失败，点击重新加载"},on:{"update:error":function(t){e.listError=t},load:e.listLoad},model:{value:e.listLoading,callback:function(t){e.listLoading=t},expression:"listLoading"}},e._l(e.orders,(function(t){return r("van-cell",{key:t.id},[r("div",{staticClass:"p-2"},[r("div",{staticClass:"border rounded-lg"},[r("van-cell",{on:{click:function(r){return e.goToDetail(t)}}},[r("template",{slot:"title"},[r("span",{staticClass:"custom-title"},[e._v("NO."+e._s(t.order_no))])]),e._v(" "),r("template",{slot:"default"})],2),e._v(" "),r("div",{staticClass:"text-gray-500"}),e._v(" "),e._l(t.items,(function(n){return r("van-card",{key:n.id,attrs:{price:(n.price/100).toFixed(2),desc:n.desc,num:n.num},on:{"click-thumb":function(r){return e.goToDetail(t)}}},[r("template",{slot:"title"},[r("span",{staticClass:"text-2xl text-black-50"},[e._v(e._s(n.name))])]),e._v(" "),r("template",{staticStyle:{height:"60px"},slot:"thumb"},[r("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:n.thumb||n.cover,alt:""}})]),e._v(" "),r("template",{slot:"footer"},[n.afterApply?r("van-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(t){return e.navToAfter(n)}}},[e._v("申请售后")]):e._e()],1)],2)})),e._v(" "),r("van-cell",[r("template",{slot:"title"},[r("div",{on:{click:function(r){return e.goToDetail(t)}}},[r("span",[e._v("总计:")]),e._v(" "),r("span",{staticClass:"text-red-700"},[e._v("￥"+e._s((t.total/100).toFixed(2)))])])]),e._v(" "),r("template",{slot:"default"},[0==t.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"default",size:"mini"},on:{click:function(r){return e.orderCancelShow(t)}}},[e._v("取消")]):e._e(),e._v(" "),0==t.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"danger",size:"mini"},on:{click:function(r){return e.goToPayment(t)}}},[e._v("支付")]):e._e(),e._v(" "),2==t.status?r("van-button",{attrs:{plain:"",hairline:"",round:"",type:"warning",size:"mini"},on:{click:function(r){return e.orderFinish(t)}}},[e._v("确认收货")]):e._e()],1)],2)],2)])])})),1)],1)]),e._v(" "),r("van-action-sheet",{attrs:{title:"取消订单"},model:{value:e.orderCancel.show,callback:function(t){e.$set(e.orderCancel,"show",t)},expression:"orderCancel.show"}},[r("div",{staticClass:"p-4"},[r("div",{staticClass:"text-center text-xl"},[e._v("取消后无法恢复")]),e._v(" "),r("div",{staticClass:"text-2xl text-gray-600 mt-4"},[e._v("请选择取消理由")]),e._v(" "),r("div",{staticClass:"mt-4"},[r("van-radio-group",{model:{value:e.orderCancel.reason,callback:function(t){e.$set(e.orderCancel,"reason",t)},expression:"orderCancel.reason"}},[r("van-cell-group",e._l(e.orderCancelReasons,(function(e){return r("van-cell",{key:e,attrs:{title:e,clickable:""}},[r("van-radio",{attrs:{slot:"right-icon",name:e,"checked-color":"#07c160"},slot:"right-icon"})],1)})),1)],1)],1),e._v(" "),r("div",{},[r("van-goods-action",{staticClass:"p-4",staticStyle:{position:"unset"}},[r("van-goods-action-button",{attrs:{type:"warning",text:"暂不取消"},on:{click:e.orderCancelClose}}),e._v(" "),r("van-goods-action-button",{attrs:{type:"danger",text:"确认取消"},on:{click:e.orderCancelSubmit}})],1)],1)])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);