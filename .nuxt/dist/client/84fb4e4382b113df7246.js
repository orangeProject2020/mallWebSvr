(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{349:function(t,e,o){"use strict";o.r(e);o(80),o(38),o(27),o(17),o(63),o(120),o(83),o(28);var n=o(47),r=o(119),c=o(195),l=o(196),d=o(325);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={head:function(){return{title:"商品详情"}},data:function(){return{isLoading:!1,show:!1,actionType:0,num:1,goods:{title:"商品名称",price:0,price_market:0,cover:"",stock:"",express:"免运费",pics:[]},buyCount:""}},methods:v({},l.a,{onRefresh:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.getGoodsInfo(this.$route.query.id));case 3:this.$toast.success("刷新成功"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.$toast.fail("刷新失败，请稍后重试");case 9:this.isLoading=!1;case 10:case"end":return t.stop()}}),null,this,[[0,6]])},navBack:function(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},navHome:function(){this.$store.state.isApp?uni.switchTab({url:"/pages/mall/index"}):this.$router.replace("/list")},addCart:function(){this.goods.id?(this.actionType=1,this.show=!0):this.$toast.fail("商品信息获取失败，请稍后刷新重试")},goBuy:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(c.a.authCheck());case 2:if(t=e.sent,console.log("/create retCheckAuth",JSON.stringify(t,null,2)),!t.code){e.next=7;break}return uni.navigateTo({url:"/pages/auth/login"}),e.abrupt("return");case 7:if(this.goods.id){e.next=10;break}return this.$toast.fail("商品信息获取失败，请稍后刷新重试"),e.abrupt("return");case 10:this.actionType=2,this.show=!0;case 12:case"end":return e.stop()}}),null,this)},doAction:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=this.actionType){e.next=19;break}if(e.prev=1,!this.$store.state.isApp){e.next=6;break}d.a.cartItemPlus(this.goods,this.num),e.next=8;break;case 6:return e.next=8,regeneratorRuntime.awrap(c.a.cartItemPlus(this.goods,this.num));case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0),this.$toast.fail("添加购物车失败，请稍后刷新重试"),e.abrupt("return",!1);case 15:this.show=!1,this.goCart(),e.next=20;break;case 19:2==this.actionType&&(t=[v({},this.goods,{num:this.num})],this.$store.commit("orderDatasSet",t),this.$router.push("/order/confirm?isBuy=1"));case 20:case"end":return e.stop()}}),null,this,[[1,10]])},goCart:function(){console.log("/goCart isApp:",this.$store.state.isApp),this.$router.push("/cart?from="+this.$route.query.from)},onClickIcon:function(){console.log("/phoneNumber","13728918850"),plus.device.dial("13728918850",!0)},getGoodsInfo:function(t){var e;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(r.a.post("/api/mall/goods/detail",{id:t}));case 2:return 0===(e=o.sent).code?(this.goods=e.data,this.goods.package_level>0?(this.goods.buy_limit=1,this.buyCount=1):this.buyCount=-1==this.goods.stock?1e4:this.goods.stock,this.goods.pics=e.data.pics?e.data.pics.split(","):[]):this.$toast.fail("获取商品信息失败"),o.abrupt("return",e);case 5:case"end":return o.stop()}}),null,this)}}),created:function(){var t,e,o=this;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.$route.query.id,console.log("/created id",t),n.next=4,regeneratorRuntime.awrap(this.getGoodsInfo(t));case 4:0!==(e=n.sent).code?setTimeout((function(){o.navBack()}),1e3):1!=e.data.status&&(this.$toast.fail("商品已下架"),setTimeout((function(){o.navBack()}),1e3));case 6:case"end":return n.stop()}}),null,this)}},m=o(29),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pb-20"},[o("van-nav-bar",{attrs:{title:"商品详情","left-text":"","left-arrow":""},on:{"click-left":t.navBack,"click-right":t.navHome}},[o("van-icon",{attrs:{slot:"right",name:"wap-home-o",size:"20"},slot:"right"})],1),t._v(" "),o("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.goods.cover?o("van-image",{attrs:{src:t.goods.cover},scopedSlots:t._u([{key:"loading",fn:function(){return[o("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!1,2352118052)}):o("div",{staticStyle:{height:"750rpx",background:"#fafafa"}}),t._v(" "),o("van-cell-group",[o("van-cell",[o("div",{staticClass:"goods-title text-black text-2xl"},[t._v(t._s(t.goods.title))]),t._v(" "),o("div",{staticClass:"goods-price"},[o("span",{staticClass:"text-red-500"},[t._v("￥"+t._s(t.formatPrice(t.goods.price)))]),t._v(" "),o("span",{staticClass:"text-gray-400 line-through"},[t._v("￥"+t._s((t.goods.price_market/100).toFixed(2)))])])]),t._v(" "),o("van-cell",{staticClass:"goods-express text-gray-400"},[o("van-col",{staticClass:"text-gray-400",attrs:{span:"14"}},[t._v("剩余："+t._s(t.goods.stock))])],1)],1),t._v(" "),o("van-cell-group",{staticClass:"goods-cell-group"},[o("van-cell",[o("van-col",{staticClass:"text-gray-600",attrs:{span:"24"}},[t._v(t._s(t.goods.description))])],1),t._v(" "),o("van-cell",[o("van-col",{attrs:{span:"24"}},t._l(t.goods.pics,(function(e){return o("van-image",{key:e,staticStyle:{width:"100%","margin-top":"0","margin-bottom":"0",display:"block"},attrs:{src:e},scopedSlots:t._u([{key:"loading",fn:function(){return[o("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})})),1)],1)],1)],1),t._v(" "),o("van-goods-action",[o("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),t._v(" "),o("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"},on:{click:t.goCart}}),t._v(" "),0==t.goods.package_level?o("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCart}}):t._e(),t._v(" "),o("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.goBuy}})],1),t._v(" "),o("van-popup",{staticClass:"pt-8",attrs:{closeable:"","close-icon":"close",position:"bottom",round:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("div",{staticClass:"mt-8"},[o("van-cell-group",[o("van-cell",{attrs:{title:"购买数量"}},[o("template",{slot:"default"},[o("van-stepper",{attrs:{integer:"",max:t.buyCount},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1)],2)],1),t._v(" "),o("div",{staticClass:"p-8"},[o("van-button",{attrs:{round:"",color:"linear-gradient(to right, #ff6034, #ee0a24)",block:""},on:{click:t.doAction}},[t._v("确定")])],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);