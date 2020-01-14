(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{195:function(e,t,r){"use strict";r(80),r(38),r(27),r(17),r(63);var n=r(47),o=(r(28),r(119));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={upload:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/upload/base64",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},authCheck:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/auth/check",{}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},authLogin:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/auth/register",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getVerifyCode:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/sms/sendVerifyCode",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInfo:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/data/infoApp",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserNoReadMsgCount:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/noReadCount",{}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserMsgList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/listUser",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},userMsgRead:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/message/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressUpdate:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/update",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},addressDelete:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/address/delete",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cartItems:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},cartItemPlus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/plus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartItemMinus:function(e){var t,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,regeneratorRuntime.awrap(o.a.post("/cart/minus",l({},e,{num:t})));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}))},cartClear:function(){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(o.a.post("/cart/clear"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},getCategorys:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/categorys",{status:1}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getGoodsList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/goods/list",l({},data,{status:1})));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserInviteCode:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/getCode"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getUserAssets:function(){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/user/infoAssets"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},cancelOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/cancel",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},finishOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/finish",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrder:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/detail",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getOrderList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/order/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},createPayment:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/payment/create",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},alipaySumbit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/alipay/wapPay",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},wxpaySumbit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/utils/wxpay/h5Pay",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getInviteList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/user/invite/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getWithdrawList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},withdrawApply:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/withdraw/apply",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getProfitList:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/profit/list",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},getAfterInfo:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/after/info",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))},afterApplySubmit:function(data){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(o.a.post("/api/mall/after/apply",data));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}))}}},196:function(e,t,r){"use strict";r(81),r(82),r(17);var n=r(194),o=r.n(n);t.a={formatPrice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(e/100).toFixed(2)},unLimitTreeLevel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[],n=0,o=function e(t,n,o){for(var i=0;i<t.length;i++){var c=t[i];if(c.pid==n){c.level=o,c.html="";for(var l=0;l<o;l++)c.html+=" -- ";r.push(c),e(t,c.id,o+1)}}};return o(e,t,n),r},getTimestamp:function(e){var t=new Date(e);return parseInt(t.getTime()/1e3)},dateFormat:function(e,t){t=t||"YYYY-MM-DD HH:mm";var r=null;return r=e?new Date(1e3*e):new Date,o()(r).format(t)},dateDisplay:function(e){var t=parseInt(Date.now()/1e3)-e;if(t<60)return t+"秒前";if(t>=60&&t<3600)return parseInt(t/60).toString()+"分钟前";if(t>=3600&&t<86400)return parseInt(t/3600).toString()+"小时前";if(t>=86400&&t<2592e3)return parseInt(t/3600/24).toString()+"天前";var r=new Date(1e3*e);return o()(r).format("YYYY-MM-DD HH:mm")},monthPlus:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[31,28,31,30,31,30,31,31,30,31,30,31],o=parseInt(this.dateFormat(e,"YYYY")),c=parseInt(this.dateFormat(e,"MM")),l=parseInt(this.dateFormat(e,"DD"));n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var f=0,v=n[c-1]-l;f+=v;for(var i=0;i<t;i++){(c+=1)>12&&(c=1,o+=1),n[1]=o%4==0&&o/100!=0||o%100==0&&o%400==0?29:28;var d=n[c-1];i==t-1&&(d=d-l<0?d:l),console.log("for days:",d),f+=d}return r?(e=e||parseInt(Date.now()/1e3))+24*f*3600:f},checkPlatform:function(){return/android/i.test(navigator.userAgent)?"android":/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":""},checkWeixin:function(){return!!/MicroMessenger/i.test(navigator.userAgent)}}},324:function(e,t,r){var map={"./af":197,"./af.js":197,"./ar":198,"./ar-dz":199,"./ar-dz.js":199,"./ar-kw":200,"./ar-kw.js":200,"./ar-ly":201,"./ar-ly.js":201,"./ar-ma":202,"./ar-ma.js":202,"./ar-sa":203,"./ar-sa.js":203,"./ar-tn":204,"./ar-tn.js":204,"./ar.js":198,"./az":205,"./az.js":205,"./be":206,"./be.js":206,"./bg":207,"./bg.js":207,"./bm":208,"./bm.js":208,"./bn":209,"./bn.js":209,"./bo":210,"./bo.js":210,"./br":211,"./br.js":211,"./bs":212,"./bs.js":212,"./ca":213,"./ca.js":213,"./cs":214,"./cs.js":214,"./cv":215,"./cv.js":215,"./cy":216,"./cy.js":216,"./da":217,"./da.js":217,"./de":218,"./de-at":219,"./de-at.js":219,"./de-ch":220,"./de-ch.js":220,"./de.js":218,"./dv":221,"./dv.js":221,"./el":222,"./el.js":222,"./en-SG":223,"./en-SG.js":223,"./en-au":224,"./en-au.js":224,"./en-ca":225,"./en-ca.js":225,"./en-gb":226,"./en-gb.js":226,"./en-ie":227,"./en-ie.js":227,"./en-il":228,"./en-il.js":228,"./en-nz":229,"./en-nz.js":229,"./eo":230,"./eo.js":230,"./es":231,"./es-do":232,"./es-do.js":232,"./es-us":233,"./es-us.js":233,"./es.js":231,"./et":234,"./et.js":234,"./eu":235,"./eu.js":235,"./fa":236,"./fa.js":236,"./fi":237,"./fi.js":237,"./fo":238,"./fo.js":238,"./fr":239,"./fr-ca":240,"./fr-ca.js":240,"./fr-ch":241,"./fr-ch.js":241,"./fr.js":239,"./fy":242,"./fy.js":242,"./ga":243,"./ga.js":243,"./gd":244,"./gd.js":244,"./gl":245,"./gl.js":245,"./gom-latn":246,"./gom-latn.js":246,"./gu":247,"./gu.js":247,"./he":248,"./he.js":248,"./hi":249,"./hi.js":249,"./hr":250,"./hr.js":250,"./hu":251,"./hu.js":251,"./hy-am":252,"./hy-am.js":252,"./id":253,"./id.js":253,"./is":254,"./is.js":254,"./it":255,"./it-ch":256,"./it-ch.js":256,"./it.js":255,"./ja":257,"./ja.js":257,"./jv":258,"./jv.js":258,"./ka":259,"./ka.js":259,"./kk":260,"./kk.js":260,"./km":261,"./km.js":261,"./kn":262,"./kn.js":262,"./ko":263,"./ko.js":263,"./ku":264,"./ku.js":264,"./ky":265,"./ky.js":265,"./lb":266,"./lb.js":266,"./lo":267,"./lo.js":267,"./lt":268,"./lt.js":268,"./lv":269,"./lv.js":269,"./me":270,"./me.js":270,"./mi":271,"./mi.js":271,"./mk":272,"./mk.js":272,"./ml":273,"./ml.js":273,"./mn":274,"./mn.js":274,"./mr":275,"./mr.js":275,"./ms":276,"./ms-my":277,"./ms-my.js":277,"./ms.js":276,"./mt":278,"./mt.js":278,"./my":279,"./my.js":279,"./nb":280,"./nb.js":280,"./ne":281,"./ne.js":281,"./nl":282,"./nl-be":283,"./nl-be.js":283,"./nl.js":282,"./nn":284,"./nn.js":284,"./pa-in":285,"./pa-in.js":285,"./pl":286,"./pl.js":286,"./pt":287,"./pt-br":288,"./pt-br.js":288,"./pt.js":287,"./ro":289,"./ro.js":289,"./ru":290,"./ru.js":290,"./sd":291,"./sd.js":291,"./se":292,"./se.js":292,"./si":293,"./si.js":293,"./sk":294,"./sk.js":294,"./sl":295,"./sl.js":295,"./sq":296,"./sq.js":296,"./sr":297,"./sr-cyrl":298,"./sr-cyrl.js":298,"./sr.js":297,"./ss":299,"./ss.js":299,"./sv":300,"./sv.js":300,"./sw":301,"./sw.js":301,"./ta":302,"./ta.js":302,"./te":303,"./te.js":303,"./tet":304,"./tet.js":304,"./tg":305,"./tg.js":305,"./th":306,"./th.js":306,"./tl-ph":307,"./tl-ph.js":307,"./tlh":308,"./tlh.js":308,"./tr":309,"./tr.js":309,"./tzl":310,"./tzl.js":310,"./tzm":311,"./tzm-latn":312,"./tzm-latn.js":312,"./tzm.js":311,"./ug-cn":313,"./ug-cn.js":313,"./uk":314,"./uk.js":314,"./ur":315,"./ur.js":315,"./uz":316,"./uz-latn":317,"./uz-latn.js":317,"./uz.js":316,"./vi":318,"./vi.js":318,"./x-pseudo":319,"./x-pseudo.js":319,"./yo":320,"./yo.js":320,"./zh-cn":321,"./zh-cn.js":321,"./zh-hk":322,"./zh-hk.js":322,"./zh-tw":323,"./zh-tw.js":323};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=324},326:function(e,t,r){var content=r(333);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("86bc28ac",content,!0,{sourceMap:!1})},332:function(e,t,r){"use strict";var n=r(326);r.n(n).a},333:function(e,t,r){(e.exports=r(30)(!1)).push([e.i,".van-card{background-color:#fff!important}",""])},359:function(e,t,r){"use strict";r.r(t);r(80),r(38),r(27),r(17),r(63),r(121),r(120),r(28);var n=r(47),o=r(195);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={head:function(){return{title:"商品列表"}},data:function(){return{title:"商品列表",search:"",listData:{loading:!1,finished:!1,list:[],count:0,page:1,limit:10},activeType:"",activeType1:0,activeSort:"",optionTypes:[{text:"全部",value:""},{text:"套餐",value:"package"},{text:"新款",value:"new"},{text:"推荐",value:"recommend"}],optionTypes1:[{text:"类别",value:0},{text:"男用",value:1},{text:"女用",value:2}],optionSorts:[{text:"排序:默认",value:""},{text:"价格低->高",value:"price,asc"},{text:"价格高->低",value:"price,desc"}]}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},r(196).a,{navBack:function(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},goCart:function(){this.$router.push("/cart")},goToDetail:function(e){this.$router.push("/goods/detail?id="+e.id)},listLoad:function(){var data,e,t=this;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return data={page:this.listData.page,limit:this.listData.limit},"new"==this.activeType?data.new=1:"recommend"==this.activeType?data.recommend=1:"package"==this.activeType&&(data.package=1),this.activeType1&&(data.type_sub=this.activeType1),this.activeSort&&(data.order=this.activeSort.split(",")),this.search&&(data.search=this.search),console.log("/listLoad data",data),this.listData.loading=!0,r.prev=7,r.next=10,regeneratorRuntime.awrap(o.a.getGoodsList(data));case 10:if(0!==(e=r.sent).code){r.next=17;break}this.listData.count=e.data.count,e.data.rows.forEach((function(e){t.listData.list.push(e)})),e.data.rows.length<this.listData.limit?this.listData.finished=!0:this.listData.page+=1,r.next=18;break;case 17:throw new Error(e.message);case 18:r.next=23;break;case 20:r.prev=20,r.t0=r.catch(7),this.$toast.fail(r.t0.message);case 23:this.listData.loading=!1;case 24:case"end":return r.stop()}}),null,this,[[7,20]])},activeChange:function(){this.listData.page=1,this.listData.list=[],this.listData.count=0,this.listLoad()},searchList:function(){this.listData.page=1,this.listData.list=[],this.listData.count=0,this.listLoad()}}),created:function(){var e=this.$route.query.category||"";e&&(this.activeType=e);var t=this.$route.query.typeSub||0;t&&(this.activeType1=parseInt(t))}},f=(r(332),r(29)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"flex"},[r("div",{staticClass:"p-6 text-2xl",on:{click:e.navBack}},[e._v("返回")]),e._v(" "),r("van-search",{staticClass:"flex-1",attrs:{placeholder:"请输入搜索关键词"},on:{search:e.searchList},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("van-icon",{staticClass:"p-6",attrs:{name:"cart-o",size:"20"},on:{click:e.goCart}})],1),e._v(" "),r("van-dropdown-menu",[r("van-dropdown-item",{attrs:{options:e.optionTypes},on:{change:e.activeChange},model:{value:e.activeType,callback:function(t){e.activeType=t},expression:"activeType"}}),e._v(" "),r("van-dropdown-item",{attrs:{options:e.optionTypes1},on:{change:e.activeChange},model:{value:e.activeType1,callback:function(t){e.activeType1=t},expression:"activeType1"}}),e._v(" "),r("van-dropdown-item",{attrs:{options:e.optionSorts},on:{change:e.activeChange},model:{value:e.activeSort,callback:function(t){e.activeSort=t},expression:"activeSort"}})],1),e._v(" "),r("van-list",{attrs:{finished:e.listData.finished,"finished-text":"没有更多了"},on:{load:e.listLoad},model:{value:e.listData.loading,callback:function(t){e.$set(e.listData,"loading",t)},expression:"listData.loading"}},e._l(e.listData.list,(function(t){return r("van-cell",{key:t.id},[r("van-card",{attrs:{price:(t.price/100).toFixed(2),"origin-price":(t.price_market/100).toFixed(2),desc:t.description,title:"商品标题","lazy-load":!0},on:{click:function(r){return e.goToDetail(t)}}},[r("template",{slot:"title"},[r("span",{staticClass:"text-2xl text-black-50"},[e._v(e._s(t.title))])]),e._v(" "),r("template",{slot:"thumb"},[r("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:t.thumb||t.cover,alt:""}})]),e._v(" "),r("template",{slot:"tag"},[t.is_recommend?[r("van-tag",{attrs:{type:"danger",mark:""}},[e._v("HOT")])]:t.is_new?[r("van-tag",{attrs:{type:"success",mark:""}},[e._v("NEW")])]:void 0],2),e._v(" "),r("template",{slot:"tags"},[r("div",{staticClass:"text-gray-500"},[t.package_level>0?[e._v("套餐")]:e._e(),e._v(" "),1==t.type_sub?[e._v("男用")]:e._e(),e._v(" "),2==t.type_sub?[e._v("女用")]:e._e()],2)])],2)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);